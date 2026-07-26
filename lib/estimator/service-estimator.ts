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
 *
 * Every visible string the engine emits is resolved through a `Translator`
 * bound to the active locale (EN/MS/ZH), so the 22 service pages that rely on
 * this engine are fully trilingual. Numeric values and the published rate
 * string itself are locale-independent.
 */

import type { Answers, EstimateResult, EstimatorSpec, Choice } from "./types";
import { RATES, SERVICE_SCOPES, type PublishedScope, type ScopeUnit } from "./rate-book.generated";
import { clamp, roundMoney } from "./pricing";
import { formatMYR } from "./format";
import type { Translator } from "../i18n";

/* ── Unit handling ───────────────────────────────────────────────────────── */

type UnitMeta = {
  /** Sensible default quantity so the page opens with a real price. */
  defaultQty: number;
  min: number;
  max: number;
  /** Preset values so the customer taps instead of typing. Label/hint come from the dictionary. */
  presets: { value: number }[];
};

const UNIT_META: Record<ScopeUnit, UnitMeta> = {
  job: { defaultQty: 1, min: 1, max: 20, presets: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 5 }] },
  sqft: { defaultQty: 120, min: 10, max: 8000, presets: [{ value: 60 }, { value: 120 }, { value: 250 }, { value: 600 }, { value: 1000 }, { value: 2000 }] },
  linearft: { defaultQty: 10, min: 1, max: 500, presets: [{ value: 6 }, { value: 10 }, { value: 20 }, { value: 40 }, { value: 80 }] },
  point: { defaultQty: 4, min: 1, max: 100, presets: [{ value: 1 }, { value: 4 }, { value: 8 }, { value: 16 }, { value: 30 }] },
  visit: { defaultQty: 1, min: 1, max: 52, presets: [{ value: 1 }, { value: 4 }, { value: 12 }, { value: 26 }] },
  room: { defaultQty: 1, min: 1, max: 30, presets: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 5 }, { value: 8 }] },
  panel: { defaultQty: 1, min: 1, max: 40, presets: [{ value: 1 }, { value: 2 }, { value: 4 }, { value: 8 }] }
};

/* ── Transparent multipliers ─────────────────────────────────────────────── */

type ModifierMeta = { value: string; factor: number };

const CONDITION: ModifierMeta[] = [
  { value: "new", factor: 0.95 },
  { value: "normal", factor: 1 },
  { value: "worn", factor: 1.15 },
  { value: "damaged", factor: 1.32 }
];

const ACCESS: ModifierMeta[] = [
  { value: "easy", factor: 1 },
  { value: "upper", factor: 1.08 },
  { value: "highrise", factor: 1.12 },
  { value: "difficult", factor: 1.25 }
];

const URGENCY: ModifierMeta[] = [
  { value: "standard", factor: 1 },
  { value: "week", factor: 1.05 },
  { value: "urgent", factor: 1.16 },
  { value: "emergency", factor: 1.28 }
];

const find = (list: ModifierMeta[], value: unknown): ModifierMeta =>
  list.find((row) => row.value === String(value)) ?? list.find((row) => row.factor === 1) ?? list[0];

type ModifierGroup = "condition" | "access" | "urgency";

/** Resolved modifier label/hint for the active locale. */
function modifierText(t: Translator, group: ModifierGroup, value: string): { label: string; hint?: string } {
  const label = t(`estimator.modifiers.${group}.${value}.label`);
  return { label, hint: optional(t, `estimator.modifiers.${group}.${value}.hint`) };
}

/** Build selectable choices for a modifier group in the active locale. */
function modifierChoices(t: Translator, group: ModifierGroup, list: ModifierMeta[], popular?: string): Choice[] {
  return list.map((row) => {
    const { label, hint } = modifierText(t, group, row.value);
    return { value: row.value, label, hint, popular: row.value === popular };
  });
}

/* ── Helpers ────────────────────────────────────────────────────────────── */

/**
 * Resolve a key, returning `undefined` when no translation exists so optional
 * helper lines (hints that only some presets carry) are omitted cleanly rather
 * than showing the raw key.
 */
function optional(t: Translator, key: string): string | undefined {
  const value = t(key);
  return value === key ? undefined : value;
}

/* ── Duration ────────────────────────────────────────────────────────────── */

/**
 * Working days estimated from the job value rather than a per-trade model.
 * Deliberately coarse and always expressed as a range, because this generic
 * engine does not know the trade's real productivity rates.
 */
function durationKey(price: number): string {
  if (price < 400) return "estimator.duration.halfDay";
  if (price < 1200) return "estimator.duration.oneDay";
  if (price < 3500) return "estimator.duration.twoDays";
  if (price < 9000) return "estimator.duration.threeToFive";
  if (price < 25000) return "estimator.duration.oneToThreeWeeks";
  return "estimator.duration.threeWeeksPlus";
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
  /**
   * Translator bound to the active locale. The estimator renders on every
   * service page, where the language is client-side React state, so the spec is
   * rebuilt whenever the locale changes (see `service-estimator-block.tsx`).
   */
  t: Translator;
};

/** Is a generic estimator available for this service? */
export function hasServiceEstimator(slug: string): boolean {
  return Boolean(SERVICE_SCOPES[slug]?.scopes.length);
}

export function buildServiceEstimator({ slug, title, warranty, t }: ServiceEstimatorInput): EstimatorSpec {
  const book = SERVICE_SCOPES[slug];
  if (!book) throw new Error(`No published scopes for service "${slug}".`);

  const scopes = book.scopes;
  const scopeByValue = new Map(scopes.map((scope) => [scope.name, scope]));
  const defaultScope = scopes[0];

  // Each scope may be charged in a different unit, so the quantity question is
  // rendered per unit and only the one matching the chosen scope is shown.
  const unitsUsed = [...new Set(scopes.map((scope) => scope.unit))];

  const qtyFieldId = (unit: ScopeUnit) => `qty_${unit}`;

  /** Localized unit noun (singular vs plural). */
  const unitNoun = (unit: ScopeUnit, quantity: number) => {
    const root = quantity === 1 ? `estimator.units.${unit}.noun` : `estimator.units.${unit}.plural`;
    return t(root);
  };

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
    const meta = UNIT_META[unit];
    const metered = unit === "sqft" || unit === "linearft" || unit === "point";
    if (!metered) return meta.defaultQty;

    const rate = scopes.find((scope) => scope.unit === unit)?.amount;
    if (!rate || !book.startPrice) return meta.defaultQty;

    let best = meta.defaultQty;
    let bestGap = Infinity;
    for (const preset of meta.presets) {
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
  for (const unit of unitsUsed) defaults[qtyFieldId(unit)] = openingQty.get(unit) ?? UNIT_META[unit].defaultQty;

  function quantityFor(answers: Answers, scope: PublishedScope): number {
    const raw = Number(answers[qtyFieldId(scope.unit)]);
    const meta = UNIT_META[scope.unit];
    if (!Number.isFinite(raw)) return openingQty.get(scope.unit) ?? meta.defaultQty;
    return clamp(Math.round(raw), meta.min, meta.max);
  }

  function compute(answers: Answers): EstimateResult {
    const scope = scopeByValue.get(String(answers.scope)) ?? defaultScope;
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

    const noun = unitNoun(scope.unit, quantity);

    const conditionText = modifierText(t, "condition", condition.value);
    const accessText = modifierText(t, "access", access.value);
    const urgencyText = modifierText(t, "urgency", urgency.value);

    const breakdown: { label: string; value: string; note?: string }[] = [
      {
        label: t("estimator.breakdown.publishedRate"),
        value: scope.published,
        note: t("estimator.breakdown.publishedRateNote", { title })
      },
      {
        label: t("estimator.breakdown.quantity"),
        value: `${quantity.toLocaleString()} ${noun}`,
        note: t("estimator.breakdown.quantityNote", {
          published: scope.published,
          qty: quantity.toLocaleString(),
          base: formatMYR(base)
        })
      }
    ];

    if (condition.factor !== 1) {
      breakdown.push({
        label: t("estimator.breakdown.conditionLabel", { label: conditionText.label }),
        value: `${condition.factor > 1 ? "+" : "−"}${Math.round(Math.abs(condition.factor - 1) * 100)}%`,
        note: conditionText.hint
      });
    }
    if (access.factor !== 1) {
      breakdown.push({
        label: t("estimator.breakdown.accessLabel", { label: accessText.label }),
        value: `+${Math.round((access.factor - 1) * 100)}%`,
        note: accessText.hint
      });
    }
    if (urgency.factor !== 1) {
      breakdown.push({
        label: t("estimator.breakdown.timingLabel", { label: urgencyText.label }),
        value: `+${Math.round((urgency.factor - 1) * 100)}%`,
        note: urgencyText.hint
      });
    }
    if (minimumApplied) {
      breakdown.push({
        label: t("estimator.breakdown.minimumApplied"),
        value: formatMYR(book.startPrice),
        note: t("estimator.breakdown.minimumAppliedNote", { title, min: formatMYR(book.startPrice) })
      });
    }

    const assumptions = [
      t("estimator.assumptions.quantities"),
      t("estimator.assumptions.warranty", { warranty }),
      t("estimator.assumptions.confirmed")
    ];
    if (book.quoteOnly.length) {
      assumptions.push(
        t("estimator.assumptions.quoteOnly", { names: book.quoteOnly.map((item) => item.name).join(", ") })
      );
    }

    const addOns = [
      {
        id: "site-visit",
        label: t("estimator.addons.siteVisitLabel"),
        price: 0,
        note: optional(t, "estimator.addons.siteVisitNote")
      },
      {
        id: "post-clean",
        label: t("estimator.addons.postCleanLabel"),
        price: roundMoney(RATES.painting.cleaning),
        note: optional(t, "estimator.addons.postCleanNote")
      }
    ].filter((addOn) => addOn.price > 0);

    return {
      price,
      low,
      high,
      labour,
      materials,
      duration: t(durationKey(price)),
      recommendedService: scope.name,
      packageName: title,
      serviceHref: `/services/${slug}`,
      breakdown,
      addOns,
      related: [
        { label: title, href: `/services/${slug}`, desc: t("estimator.related.serviceDesc") },
        { label: t("estimator.related.priceGuide"), href: "/pricing", desc: t("estimator.related.priceGuideDesc") },
        { label: t("estimator.related.allEstimators"), href: "/tools", desc: t("estimator.related.allEstimatorsDesc") }
      ],
      assumptions
    };
  }

  return {
    slug: `${slug}-estimator`,
    name: `${title} Estimator`,
    serviceSlug: slug,
    resultLabel: t("estimator.result.estimatedTotal"),
    defaults,
    compute,
    steps: [
      {
        id: "scope",
        title: t("estimator.steps.scopeTitle"),
        subtitle: t("estimator.steps.scopeSub"),
        icon: "🎯",
        fields: [
          {
            id: "scope",
            kind: scopes.length > 4 ? "select" : "cards",
            label: t("estimator.steps.scopeFieldLabel"),
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
        title: t("estimator.steps.sizeTitle"),
        subtitle: t("estimator.steps.sizeSub"),
        icon: "📐",
        fields: unitsUsed.map((unit) => ({
          id: qtyFieldId(unit),
          kind: "cards" as const,
          label: t(`estimator.units.${unit}.label`),
          required: true,
          columns: 1 as const,
          // Only the unit matching the currently-selected scope is shown, so
          // the customer never sees "how many panels" for a per-sq-ft scope.
          visible: (answers: Answers) =>
            (scopeByValue.get(String(answers.scope)) ?? defaultScope).unit === unit,
          choices: UNIT_META[unit].presets.map((preset) => ({
            value: String(preset.value),
            label: t(`estimator.units.${unit}.presets.${preset.value}.label`),
            hint: optional(t, `estimator.units.${unit}.presets.${preset.value}.hint`),
            popular: preset.value === (openingQty.get(unit) ?? UNIT_META[unit].defaultQty)
          }))
        }))
      },
      {
        id: "details",
        advanced: true,
        title: t("estimator.steps.detailsTitle"),
        subtitle: t("estimator.steps.detailsSub"),
        icon: "🎚️",
        fields: [
          {
            id: "condition",
            kind: "cards",
            label: t("estimator.steps.conditionQuestion"),
            required: true,
            columns: 1,
            choices: modifierChoices(t, "condition", CONDITION, "normal")
          },
          {
            id: "access",
            kind: "cards",
            label: t("estimator.steps.accessQuestion"),
            required: true,
            columns: 1,
            choices: modifierChoices(t, "access", ACCESS, "easy")
          },
          {
            id: "urgency",
            kind: "cards",
            label: t("estimator.steps.urgencyQuestion"),
            required: true,
            columns: 1,
            choices: modifierChoices(t, "urgency", URGENCY, "standard")
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
