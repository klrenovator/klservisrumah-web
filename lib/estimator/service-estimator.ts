/**
 * Generic per-service estimator.
 *
 * The five hand-built estimators (painting, leak, ceiling, plumbing, TV mount)
 * model their trade in depth. This module covers the *other* services with one
 * shared engine so that every service page can offer an instant price instead
 * of only a "From RM …" figure.
 *
 * The rules it follows are deliberately narrow, because a generic engine must
 * never invent pricing:
 *
 *   • Every base rate comes from `SERVICE_SCOPES`, generated from the published
 *     sub-service prices on the service page itself.
 *   • The only maths applied is quantity × published rate, then a small set of
 *     transparent, named multipliers (condition, access, urgency) that are shown
 *     to the customer in the breakdown.
 *   • The result can never fall below the service's published `startPrice`.
 *   • Scopes we publish as "On Quote" are never given a number — they route the
 *     customer to a site visit instead.
 */

import type { Answers, EstimateResult, EstimatorSpec, Choice } from "./types";
import { RATES, SERVICE_SCOPES, type PublishedScope, type ScopeUnit } from "./rate-book.generated";
import { clamp, roundMoney } from "./pricing";
import { formatMYR } from "./format";

/* ── Unit handling ───────────────────────────────────────────────────────── */

type UnitConfig = {
  /** Question shown for the quantity, e.g. "How big is the area?". */
  label: string;
  /** Noun for one unit, used in the breakdown. */
  noun: string;
  /** Plural noun. */
  plural: string;
  /** Sensible default quantity so the page opens with a real price. */
  defaultQty: number;
  min: number;
  max: number;
  /** Preset choices so the customer taps instead of typing. */
  presets: { value: number; label: string; hint?: string }[];
};

const UNITS: Record<ScopeUnit, UnitConfig> = {
  job: {
    label: "How many of these do you need?",
    noun: "job",
    plural: "jobs",
    defaultQty: 1,
    min: 1,
    max: 20,
    presets: [
      { value: 1, label: "Just one", hint: "A single job at one location" },
      { value: 2, label: "Two" },
      { value: 3, label: "Three" },
      { value: 5, label: "Five or more", hint: "We confirm the exact count on site" }
    ]
  },
  sqft: {
    label: "How big is the area?",
    noun: "sq ft",
    plural: "sq ft",
    defaultQty: 120,
    min: 10,
    max: 8000,
    presets: [
      { value: 60, label: "Small — about 60 sq ft", hint: "Bathroom or store room" },
      { value: 120, label: "Standard room — about 120 sq ft", hint: "10 × 12 ft bedroom" },
      { value: 250, label: "Large room — about 250 sq ft", hint: "Living hall" },
      { value: 600, label: "Small unit — about 600 sq ft", hint: "Studio or small apartment" },
      { value: 1000, label: "Condo — about 1,000 sq ft", hint: "Typical 3-bedroom condo" },
      { value: 2000, label: "Landed house — about 2,000 sq ft", hint: "2-storey terrace" }
    ]
  },
  linearft: {
    label: "How many running feet?",
    noun: "linear ft",
    plural: "linear ft",
    defaultQty: 10,
    min: 1,
    max: 500,
    presets: [
      { value: 6, label: "About 6 ft", hint: "A single short run" },
      { value: 10, label: "About 10 ft", hint: "One standard wall" },
      { value: 20, label: "About 20 ft", hint: "Two walls or a long run" },
      { value: 40, label: "About 40 ft", hint: "A full room perimeter" },
      { value: 80, label: "About 80 ft or more", hint: "Measured on site" }
    ]
  },
  point: {
    label: "How many points?",
    noun: "point",
    plural: "points",
    defaultQty: 4,
    min: 1,
    max: 100,
    presets: [
      { value: 1, label: "1 point" },
      { value: 4, label: "4 points", hint: "One room" },
      { value: 8, label: "8 points", hint: "Two to three rooms" },
      { value: 16, label: "16 points", hint: "A whole condo unit" },
      { value: 30, label: "30 or more", hint: "Whole house or commercial" }
    ]
  },
  visit: {
    label: "How many visits?",
    noun: "visit",
    plural: "visits",
    defaultQty: 1,
    min: 1,
    max: 52,
    presets: [
      { value: 1, label: "One-off visit" },
      { value: 4, label: "4 visits", hint: "Weekly for a month" },
      { value: 12, label: "12 visits", hint: "Weekly for three months" },
      { value: 26, label: "26 visits", hint: "Fortnightly for a year" }
    ]
  },
  room: {
    label: "How many rooms?",
    noun: "room",
    plural: "rooms",
    defaultQty: 1,
    min: 1,
    max: 30,
    presets: [
      { value: 1, label: "1 room" },
      { value: 2, label: "2 rooms" },
      { value: 3, label: "3 rooms", hint: "Typical condo" },
      { value: 5, label: "5 rooms", hint: "Landed house" },
      { value: 8, label: "8 or more rooms" }
    ]
  },
  panel: {
    label: "How many panels?",
    noun: "panel",
    plural: "panels",
    defaultQty: 1,
    min: 1,
    max: 40,
    presets: [
      { value: 1, label: "1 panel" },
      { value: 2, label: "2 panels" },
      { value: 4, label: "4 panels" },
      { value: 8, label: "8 or more panels" }
    ]
  }
};

/* ── Transparent multipliers ─────────────────────────────────────────────── */

type Modifier = { value: string; label: string; hint: string; factor: number };

const CONDITION: Modifier[] = [
  { value: "new", label: "New / straightforward", hint: "Nothing to remove or repair first", factor: 0.95 },
  { value: "normal", label: "Normal condition", hint: "Standard preparation only", factor: 1 },
  { value: "worn", label: "Worn or aged", hint: "Extra preparation and making good", factor: 1.15 },
  { value: "damaged", label: "Damaged / needs repair first", hint: "Repair work before the main job", factor: 1.32 }
];

const ACCESS: Modifier[] = [
  { value: "easy", label: "Easy — ground floor", hint: "Normal access, nothing to climb", factor: 1 },
  { value: "upper", label: "Upper floor", hint: "Stairs or light staging", factor: 1.08 },
  { value: "highrise", label: "High-rise unit", hint: "Lift booking and floor protection", factor: 1.12 },
  { value: "difficult", label: "Difficult — height or tight space", hint: "Scaffold or restricted working space", factor: 1.25 }
];

const URGENCY: Modifier[] = [
  { value: "standard", label: "Standard schedule", hint: "Next available slot — lowest price", factor: 1 },
  { value: "week", label: "Within a week", hint: "Priority scheduling", factor: 1.05 },
  { value: "urgent", label: "Urgent — 48 hours", hint: "Crew reshuffled for you", factor: 1.16 },
  { value: "emergency", label: "Emergency — same day", hint: "Immediate dispatch", factor: 1.28 }
];

const find = (list: Modifier[], value: unknown) =>
  list.find((row) => row.value === String(value)) ?? list.find((row) => row.factor === 1) ?? list[0];

const toChoices = (list: Modifier[], popular?: string): Choice[] =>
  list.map((row) => ({ value: row.value, label: row.label, hint: row.hint, popular: row.value === popular }));

/* ── Duration ────────────────────────────────────────────────────────────── */

/**
 * Working days estimated from the job value rather than a per-trade model.
 * Deliberately coarse and always expressed as a range, because this generic
 * engine does not know the trade's real productivity rates.
 */
function durationFor(price: number): string {
  if (price < 400) return "Half a day on site";
  if (price < 1200) return "About 1 working day";
  if (price < 3500) return "1–2 working days";
  if (price < 9000) return "3–5 working days";
  if (price < 25000) return "1–3 weeks";
  return "3 weeks or more";
}

/**
 * Labour vs materials split. Supply-heavy scopes (installation of a physical
 * product) carry more materials than repair or cleaning scopes.
 */
function materialShare(scope: PublishedScope): number {
  const name = scope.name.toLowerCase();
  if (/clean|wash|disinfect|removal|repair|service|adjust|inspect|health check/.test(name)) return 0.18;
  if (/install|fabricat|supply|replace|package|cabinet|gate|cctv|lock|door|window|floor/.test(name)) return 0.45;
  return 0.32;
}

/* ── Spec builder ────────────────────────────────────────────────────────── */

export type ServiceEstimatorInput = {
  /** Service slug, e.g. "electrical". Must exist in `SERVICE_SCOPES`. */
  slug: string;
  /** Customer-facing service title, e.g. "Licensed Electrical Services". */
  title: string;
  /** Published warranty line, quoted in the assumptions. */
  warranty: string;
};

/** Is a generic estimator available for this service? */
export function hasServiceEstimator(slug: string): boolean {
  return Boolean(SERVICE_SCOPES[slug]?.scopes.length);
}

export function buildServiceEstimator({ slug, title, warranty }: ServiceEstimatorInput): EstimatorSpec {
  const book = SERVICE_SCOPES[slug];
  if (!book) throw new Error(`No published scopes for service "${slug}".`);

  const scopes = book.scopes;
  const scopeByValue = new Map(scopes.map((scope) => [scope.name, scope]));
  const defaultScope = scopes[0];

  // Each scope may be charged in a different unit, so the quantity question is
  // rendered per unit and only the one matching the chosen scope is shown.
  const unitsUsed = [...new Set(scopes.map((scope) => scope.unit))];

  const qtyFieldId = (unit: ScopeUnit) => `qty_${unit}`;

  /**
   * Opening quantity for a unit.
   *
   * A flat default is wrong for rate-per-unit scopes: 120 sq ft is a sensible
   * room, but at RM 42/sq ft for a window grille it opens the page at RM 5,040
   * and frightens the customer off before they have touched anything. So for
   * metered units we pick the preset whose resulting figure sits closest to the
   * service's own published starting price — the number the customer has
   * already seen at the top of the page.
   */
  function openingQuantity(unit: ScopeUnit): number {
    const config = UNITS[unit];
    const metered = unit === "sqft" || unit === "linearft" || unit === "point";
    if (!metered) return config.defaultQty;

    const rate = scopes.find((scope) => scope.unit === unit)?.amount;
    if (!rate || !book.startPrice) return config.defaultQty;

    let best = config.defaultQty;
    let bestGap = Infinity;
    for (const preset of config.presets) {
      const gap = Math.abs(preset.value * rate - book.startPrice);
      if (gap < bestGap) {
        bestGap = gap;
        best = preset.value;
      }
    }
    return best;
  }

  const openingQty = new Map(unitsUsed.map((unit) => [unit, openingQuantity(unit)]));

  const defaults: Answers = {
    scope: defaultScope.name,
    condition: "normal",
    access: "easy",
    urgency: "standard"
  };
  for (const unit of unitsUsed) defaults[qtyFieldId(unit)] = openingQty.get(unit) ?? UNITS[unit].defaultQty;

  function quantityFor(answers: Answers, scope: PublishedScope): number {
    const raw = Number(answers[qtyFieldId(scope.unit)]);
    const config = UNITS[scope.unit];
    if (!Number.isFinite(raw)) return openingQty.get(scope.unit) ?? config.defaultQty;
    return clamp(Math.round(raw), config.min, config.max);
  }

  function compute(answers: Answers): EstimateResult {
    const scope = scopeByValue.get(String(answers.scope)) ?? defaultScope;
    const config = UNITS[scope.unit];
    const quantity = quantityFor(answers, scope);

    const condition = find(CONDITION, answers.condition);
    const access = find(ACCESS, answers.access);
    const urgency = find(URGENCY, answers.urgency);

    const base = scope.amount * quantity;
    const adjusted = base * condition.factor * access.factor * urgency.factor;

    // The published `startPrice` is the floor: we never quote below what the
    // service page tells the customer the service starts at. Rounding happens
    // first, because rounding *after* the clamp can drop the figure back under
    // the floor (RM 14 minimum rounding to RM 10).
    const rounded = roundMoney(adjusted);
    const price = Math.max(rounded, book.startPrice);
    const minimumApplied = price > rounded;

    // Generic engine, so the band is deliberately wide and honest.
    const low = roundMoney(price * 0.85);
    const high = roundMoney(price * 1.3);

    const materials = roundMoney(price * materialShare(scope), 5);
    const labour = price - materials;

    const unitNoun = quantity === 1 ? config.noun : config.plural;

    const breakdown: { label: string; value: string; note?: string }[] = [
      {
        label: "Published rate",
        value: scope.published,
        note: `Taken directly from the ${title} price list on this website.`
      },
      {
        label: "Quantity",
        value: `${quantity.toLocaleString()} ${unitNoun}`,
        note: `${scope.published} × ${quantity.toLocaleString()} = ${formatMYR(base)} before any adjustment.`
      }
    ];

    if (condition.factor !== 1) {
      breakdown.push({
        label: `Condition — ${condition.label}`,
        value: `${condition.factor > 1 ? "+" : "−"}${Math.round(Math.abs(condition.factor - 1) * 100)}%`,
        note: condition.hint
      });
    }
    if (access.factor !== 1) {
      breakdown.push({
        label: `Access — ${access.label}`,
        value: `+${Math.round((access.factor - 1) * 100)}%`,
        note: access.hint
      });
    }
    if (urgency.factor !== 1) {
      breakdown.push({
        label: `Timing — ${urgency.label}`,
        value: `+${Math.round((urgency.factor - 1) * 100)}%`,
        note: urgency.hint
      });
    }
    if (minimumApplied) {
      breakdown.push({
        label: "Published minimum applied",
        value: formatMYR(book.startPrice),
        note: `${title} starts from ${formatMYR(book.startPrice)}, so smaller jobs are charged at that published minimum.`
      });
    }

    const assumptions = [
      "Quantities are the ones you entered — the final quotation follows the measured scope on site.",
      `Covered by our ${warranty.toLowerCase()}.`,
      "Price confirmed in writing before any work starts; extra scope is always approved by you first."
    ];
    if (book.quoteOnly.length) {
      assumptions.push(
        `${book.quoteOnly.map((item) => item.name).join(" and ")} ${
          book.quoteOnly.length === 1 ? "is" : "are"
        } quoted after a site visit rather than estimated here.`
      );
    }

    const addOns = [
      {
        id: "site-visit",
        label: "Free on-site measurement before booking",
        price: 0,
        note: "Confirms the exact scope so the final quotation matches the job."
      },
      {
        id: "post-clean",
        label: "Post-work cleaning",
        price: roundMoney(RATES.painting.cleaning),
        note: "Full clear-out and wipe-down after the job."
      }
    ].filter((addOn) => addOn.price > 0);

    return {
      price,
      low,
      high,
      labour,
      materials,
      duration: durationFor(price),
      recommendedService: scope.name,
      packageName: title,
      serviceHref: `/services/${slug}`,
      breakdown,
      addOns,
      related: [
        { label: title, href: `/services/${slug}`, desc: "Full scope, process and warranty" },
        { label: "2026 Price Guide", href: "/pricing", desc: "Every published rate in one place" },
        { label: "All free estimators", href: "/tools", desc: "Estimate another job instantly" }
      ],
      assumptions
    };
  }

  return {
    slug: `${slug}-estimator`,
    name: `${title} Estimator`,
    serviceSlug: slug,
    resultLabel: "Estimated cost",
    defaults,
    compute,
    steps: [
      {
        id: "scope",
        title: "What do you need?",
        subtitle: "Every option below is priced from this service's published rates.",
        icon: "🎯",
        fields: [
          {
            id: "scope",
            kind: scopes.length > 4 ? "select" : "cards",
            label: "Type of work",
            required: true,
            columns: 1,
            choices: scopes.map((scope, index) => ({
              value: scope.name,
              label: scope.name,
              hint: scope.desc,
              price: scope.published,
              popular: index === 0
            }))
          }
        ]
      },
      {
        id: "size",
        title: "How much of it?",
        subtitle: "Tap the closest option — we confirm the exact figure on site.",
        icon: "📐",
        fields: unitsUsed.map((unit) => ({
          id: qtyFieldId(unit),
          kind: "cards" as const,
          label: UNITS[unit].label,
          required: true,
          columns: 1 as const,
          // Only the unit matching the currently-selected scope is shown, so
          // the customer never sees "how many panels" for a per-sq-ft scope.
          visible: (answers: Answers) =>
            (scopeByValue.get(String(answers.scope)) ?? defaultScope).unit === unit,
          choices: UNITS[unit].presets.map((preset) => ({
            value: String(preset.value),
            label: preset.label,
            hint: preset.hint,
            popular: preset.value === (openingQty.get(unit) ?? UNITS[unit].defaultQty)
          }))
        }))
      },
      {
        id: "details",
        advanced: true,
        title: "Condition, access and timing",
        subtitle: "Skip this and we price a normal job, ground-floor access, standard scheduling.",
        icon: "🎚️",
        fields: [
          {
            id: "condition",
            kind: "cards",
            label: "What condition is it in?",
            required: true,
            columns: 1,
            choices: toChoices(CONDITION, "normal")
          },
          {
            id: "access",
            kind: "cards",
            label: "How easy is access?",
            required: true,
            columns: 1,
            choices: toChoices(ACCESS, "easy")
          },
          {
            id: "urgency",
            kind: "cards",
            label: "When do you need it?",
            required: true,
            columns: 1,
            choices: toChoices(URGENCY, "standard")
          }
        ]
      }
    ]
  };
}

/**
 * The five in-depth estimators already own these services, so the generic
 * engine must not shadow them on the service page.
 */
export const DEDICATED_TOOL_BY_SERVICE: Record<string, string> = {
  painting: "painting-calculator",
  plumbing: "plumbing-diagnostic",
  ceiling: "ceiling-calculator",
  "plaster-ceiling": "ceiling-calculator",
  waterproofing: "leak-triage",
  handyman: "tv-mount-advisor"
};
