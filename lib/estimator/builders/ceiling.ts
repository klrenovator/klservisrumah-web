/**
 * Ceiling Repair & Installation Estimator — locale-aware spec builder.
 *
 * Rates come from the published plaster-ceiling and ceiling sub-service prices.
 * Copy resolves through the injected translator; locale-neutral data only here.
 */

import { RATES, clamp, roundMoney, priceLabel, withinBand } from "../pricing";
import type { PriceLabelKey } from "../rate-book.generated";
import type { AddOn, Answers, EstimateResult, EstimatorSpec } from "../types";
import { asArray, num, type Translator } from "./shared";

export type CeilingType = {
  value: string;
  icon: string;
  /** Multiplier on the published plaster-ceiling sq ft rate. */
  factor: number;
  repairable: boolean;
};

export const CEILING_TYPES: CeilingType[] = [
  { value: "gypsum", icon: "⬜", factor: 1, repairable: true },
  { value: "plaster", icon: "🔲", factor: 1.02, repairable: true },
  { value: "pvc", icon: "🧊", factor: 0.85, repairable: true },
  { value: "calcium-silicate", icon: "🧱", factor: 1.18, repairable: true },
  { value: "wood", icon: "🪵", factor: 1.35, repairable: true },
  { value: "cement-board", icon: "🪨", factor: 1.22, repairable: true },
  { value: "not-sure", icon: "❓", factor: 1.05, repairable: true }
];

const typeMap = new Map(CEILING_TYPES.map((row) => [row.value, row]));

const WORK_TYPES: { value: string; icon: string }[] = [
  { value: "repair", icon: "🩹" },
  { value: "replace-section", icon: "🔁" },
  { value: "new-flat", icon: "⬜" },
  { value: "new-tiered", icon: "🪄" },
  { value: "new-cove", icon: "🌙" },
  { value: "partition", icon: "🚧" }
];

const AREA_PRESETS: { value: string; label: string; sqft: number }[] = [
  { value: "small-patch", label: "", sqft: 20 },
  { value: "8x10", label: "8 × 10 ft", sqft: 80 },
  { value: "10x10", label: "10 × 10 ft", sqft: 100 },
  { value: "10x12", label: "10 × 12 ft", sqft: 120 },
  { value: "12x15", label: "12 × 15 ft", sqft: 180 },
  { value: "15x20", label: "15 × 20 ft", sqft: 300 },
  { value: "20x25", label: "20 × 25 ft", sqft: 500 },
  { value: "custom", label: "", sqft: 0 }
];

const DAMAGE: { value: string; add: number }[] = [
  { value: "none", add: 0 },
  { value: "hairline", add: 0.05 },
  { value: "cracks", add: 0.12 },
  { value: "stains", add: 0.15 },
  { value: "sagging", add: 0.3 },
  { value: "hole", add: 0.22 },
  { value: "collapsed", add: 0.45 },
  { value: "mould", add: 0.2 }
];

const EXTRAS: { value: string }[] = [
  { value: "water-damage" },
  { value: "paint" },
  { value: "lighting-removal" },
  { value: "fan-removal" },
  { value: "cornice" },
  { value: "insulation" },
  { value: "debris" }
];

const HEIGHTS: { value: string; add: number }[] = [
  { value: "standard", add: 0 },
  { value: "tall", add: 0.1 },
  { value: "void", add: 0.28 }
];

const URGENCY: { value: string; add: number }[] = [
  { value: "standard", add: 0 },
  { value: "7-days", add: 0.05 },
  { value: "urgent", add: 0.14 },
  { value: "emergency", add: 0.25 }
];

/** Area preset labels: measurements stay inline, prose resolves via the dict. */
function presetLabel(t: Translator, row: (typeof AREA_PRESETS)[number]): string {
  return row.label === "" ? t(`areaPresets.${row.value}.label`) : row.label;
}

function resolveArea(t: Translator, answers: Answers): { area: number; basis: string } {
  if (answers.areaPreset === "custom") {
    const length = num(answers.customLength, 12);
    const width = num(answers.customWidth, 12);
    return { area: length * width, basis: t("breakdown.customBasis", { length, width }) };
  }
  const row = AREA_PRESETS.find((item) => item.value === answers.areaPreset) ?? AREA_PRESETS[2];
  return { area: row.sqft, basis: presetLabel(t, row) };
}

type WorkKey = "repair" | "replace-section" | "new-flat" | "new-tiered" | "new-cove" | "partition";

const WORK_PRICE_LABEL: Record<WorkKey, PriceLabelKey | null> = {
  "new-flat": "plasterCeiling.flat",
  "new-tiered": "plasterCeiling.tiered",
  "new-cove": "plasterCeiling.cove",
  partition: "ceiling.partition",
  "replace-section": null,
  repair: "plasterCeiling.reskim"
};

export function computeCeiling(t: Translator, answers: Answers): EstimateResult {
  const type = typeMap.get(String(answers.ceilingType)) ?? CEILING_TYPES[0];
  const work = String(answers.workType ?? "repair") as WorkKey;
  const { area, basis } = resolveArea(t, answers);
  const damage = DAMAGE.find((row) => row.value === answers.damage) ?? DAMAGE[1];
  const extras = asArray(answers.extras);
  const height = HEIGHTS.find((row) => row.value === answers.height) ?? HEIGHTS[0];
  const urgency = URGENCY.find((row) => row.value === answers.urgency) ?? URGENCY[0];

  const breakdown: { label: string; value: string; note?: string }[] = [
    { label: t("breakdown.ceilingArea"), value: t("breakdown.ceilingAreaValue", { area: Math.round(area).toLocaleString() }), note: basis }
  ];

  let baseRate: number;
  switch (work) {
    case "new-flat":
      baseRate = RATES.ceiling.flatSqft;
      break;
    case "new-tiered":
      baseRate = RATES.ceiling.tieredSqft;
      break;
    case "new-cove":
      baseRate = RATES.ceiling.coveSqft;
      break;
    case "partition":
      baseRate = RATES.ceiling.partitionSqft;
      break;
    case "replace-section":
      baseRate = withinBand(RATES.ceiling.installBand, 0.45);
      break;
    default:
      baseRate = RATES.ceiling.reskimSqft;
  }

  const priceLabelKey: PriceLabelKey = WORK_PRICE_LABEL[work] ?? "plasterCeiling.reskim";
  const rateNote =
    work === "replace-section"
      ? t("work.replace-section.rateNote", {
          low: RATES.ceiling.installBand.low,
          high: RATES.ceiling.installBand.high
        })
      : t(`work.${work in WORK_PRICE_LABEL ? work : "repair"}.rateNote`, { label: priceLabel(priceLabelKey!) });

  // New-install designs live on the plaster-ceiling page; repair-family work
  // (and any unrecognised value, matching the original default branch) routes
  // to the ceiling repair page.
  const serviceHref =
    work === "new-flat" || work === "new-tiered" || work === "new-cove"
      ? "/services/plaster-ceiling"
      : "/services/ceiling";

  const rate = baseRate * type.factor * (1 + damage.add);
  breakdown.push({
    label: t("breakdown.appliedRate"),
    value: t("breakdown.appliedRateValue", { rate: rate.toFixed(2) }),
    note: t("breakdown.appliedRateNote", {
      rateNote,
      type: t(`ceilingTypes.${type.value}.label`),
      factor: type.factor,
      damage: t(`damage.${damage.value}.label`)
    })
  });

  let total = area * rate * (1 + height.add) * (1 + urgency.add);

  // Separately-priced extras, each from a published rate.
  if (extras.includes("water-damage")) {
    const cost = RATES.waterproofing.puPoint;
    total += cost;
    breakdown.push({
      label: t("breakdown.leakSource"),
      value: `RM ${cost.toLocaleString()}`,
      note: t("breakdown.leakSourceNote", { label: priceLabel("waterproofing.pu") })
    });
  }

  if (extras.includes("paint")) {
    const cost = area * withinBand(RATES.painting.interiorSqft, 0.42);
    total += cost;
    breakdown.push({
      label: t("breakdown.painting"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.paintingNote", { area: Math.round(area) })
    });
  }

  const lightCount = num(answers.lightCount, 0);
  if (extras.includes("lighting-removal") && lightCount > 0) {
    const cost = lightCount * RATES.ceiling.downlightPoint * 0.5;
    total += cost;
    breakdown.push({
      label: t("breakdown.lighting"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note:
        lightCount > 1
          ? t("breakdown.lightingNoteMany", { count: lightCount, label: priceLabel("lighting.downlight") })
          : t("breakdown.lightingNoteOne", { count: lightCount, label: priceLabel("lighting.downlight") })
    });
  }

  if (extras.includes("fan-removal")) {
    const cost = RATES.ceiling.fanPoint * 0.6;
    total += cost;
    breakdown.push({
      label: t("breakdown.fan"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.fanNote", { label: priceLabel("ceilingFan.install") })
    });
  }

  if (extras.includes("cornice")) {
    const perimeter = Math.max(20, Math.round(Math.sqrt(area) * 4));
    const cost = perimeter * RATES.ceiling.flatSqft * 0.65;
    total += cost;
    breakdown.push({
      label: t("breakdown.cornice"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.corniceNote", { perimeter })
    });
  }

  if (extras.includes("insulation")) {
    const cost = area * RATES.ceiling.flatSqft * 0.25;
    total += cost;
    breakdown.push({
      label: t("breakdown.insulation"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.insulationNote")
    });
  }

  if (extras.includes("debris")) {
    const cost = RATES.handyman.callOut;
    total += cost;
    breakdown.push({
      label: t("breakdown.debris"),
      value: `RM ${cost.toLocaleString()}`,
      note: t("breakdown.debrisNote")
    });
  }

  // Minimum engagement from the published repair starting price.
  let minimumApplied = false;
  if (total < RATES.ceiling.repairMinimum) {
    total = RATES.ceiling.repairMinimum;
    minimumApplied = true;
    breakdown.push({
      label: t("breakdown.minimum"),
      value: `RM ${RATES.ceiling.repairMinimum.toLocaleString()}`,
      note: t("breakdown.minimumNote", { label: priceLabel("ceiling.repair") })
    });
  }

  const price = roundMoney(total);
  const complexity = clamp(damage.add + height.add, 0, 0.8);
  const spread = 0.12 + complexity * 0.12;
  const low = roundMoney(price * (1 - spread));
  const high = roundMoney(price * (1 + spread + 0.06));
  const materials = roundMoney(price * (work.startsWith("new") || work === "partition" ? 0.42 : 0.32));
  const labour = price - materials;

  // Framing, boarding, jointing and skim each need drying time between them, so
  // even a small ceiling spans more than its raw area suggests. Setup covers
  // sheeting, access and clean-down.
  const setupDays = 0.5;
  const dailyOutput = work.startsWith("new") ? 220 : 160;
  const days = Math.max(0.5, setupDays + (area / dailyOutput) * (1 + complexity) + extras.length * 0.15);
  const duration =
    days <= 0.6
      ? t("durations.halfDay")
      : days <= 1.2
        ? t("durations.oneDay")
        : days <= 2.5
          ? t("durations.oneTwoDays")
          : days <= 4.5
            ? t("durations.threeFourDays")
            : t("durations.aboutDays", { n: Math.ceil(days) });

  const addOns: AddOn[] = [
    {
      id: "ceiling-paint",
      label: t("addons.paint.label"),
      price: roundMoney(area * withinBand(RATES.painting.interiorSqft, 0.42)),
      note: t("addons.paint.note"),
      recommended: !extras.includes("paint")
    },
    {
      id: "downlights",
      label: t("addons.downlights.label"),
      price: RATES.ceiling.downlightPoint,
      note: t("addons.downlights.note", { label: priceLabel("lighting.downlight") }),
      recommended: work.startsWith("new")
    },
    {
      id: "cove-lighting",
      label: t("addons.coveLighting.label"),
      price: roundMoney(Math.max(20, Math.sqrt(area) * 4) * RATES.handyman.lightPoint * 0.2),
      note: t("addons.coveLighting.note"),
      recommended: work === "new-tiered" || work === "new-cove"
    },
    {
      id: "waterproof-source",
      label: t("addons.waterproof.label"),
      price: RATES.waterproofing.puPoint,
      note: t("addons.waterproof.note", { label: priceLabel("waterproofing.pu") }),
      recommended: (damage.value === "stains" || damage.value === "mould") && !extras.includes("water-damage")
    },
    {
      id: "post-clean",
      label: t("addons.postClean.label"),
      price: RATES.handyman.callOut,
      note: t("addons.postClean.note"),
      recommended: area > 200
    }
  ];

  const assumptions = [
    t("assumptions.framing"),
    t("assumptions.services"),
    minimumApplied ? t("assumptions.belowMinimum") : t("assumptions.included")
  ];
  if (damage.value === "sagging" || damage.value === "collapsed") {
    assumptions.push(t("assumptions.sagging"));
  }

  const workKey = (work in WORK_PRICE_LABEL ? work : "repair") as WorkKey;

  return {
    price,
    low,
    high,
    labour,
    materials,
    duration,
    recommendedService: t(`work.${workKey}.service`),
    packageName: t(`work.${workKey}.package`),
    serviceHref,
    breakdown,
    addOns,
    related: [
      { label: t("related.plasterCeiling.label"), href: "/services/plaster-ceiling", desc: t("related.plasterCeiling.desc") },
      { label: t("related.ceilingRepair.label"), href: "/services/ceiling", desc: t("related.ceilingRepair.desc") },
      { label: t("related.costGuide.label"), href: "/services/ceiling/cost", desc: t("related.costGuide.desc") },
      { label: t("related.lighting.label"), href: "/services/lighting", desc: t("related.lighting.desc") },
      { label: t("related.waterproofing.label"), href: "/services/waterproofing", desc: t("related.waterproofing.desc") }
    ],
    articles: [
      { label: t("articles.gypsumVs"), href: "/blog/gypsum-vs-plaster-ceiling-malaysia" },
      { label: t("articles.ceilingFix"), href: "/blog/how-to-fix-leaking-ceiling-without-tile-hacking" }
    ],
    maintenance: [t("maintenance.inspect"), t("maintenance.ventilate"), t("maintenance.reskim")],
    assumptions
  };
}

export function buildCeilingSpec(t: Translator): EstimatorSpec {
  return {
    slug: "ceiling-calculator",
    name: t("meta.name"),
    serviceSlug: "ceiling",
    resultLabel: t("meta.resultLabel"),
    defaults: {
      ceilingType: "gypsum",
      workType: "repair",
      areaPreset: "10x12",
      customLength: 12,
      customWidth: 12,
      damage: "cracks",
      extras: [],
      lightCount: 4,
      height: "standard",
      urgency: "standard"
    },
    steps: [
      {
        id: "type",
        title: t("steps.type.title"),
        subtitle: t("steps.type.subtitle"),
        icon: "🏗️",
        fields: [
          {
            id: "ceilingType",
            kind: "cards",
            label: t("fields.ceilingType.label"),
            required: true,
            choices: CEILING_TYPES.map((row) => ({
              value: row.value,
              label: t(`ceilingTypes.${row.value}.label`),
              icon: row.icon,
              hint: t(`ceilingTypes.${row.value}.hint`)
            }))
          }
        ]
      },
      {
        id: "work",
        title: t("steps.work.title"),
        subtitle: t("steps.work.subtitle"),
        icon: "🛠️",
        fields: [
          {
            id: "workType",
            kind: "cards",
            label: t("fields.workType.label"),
            required: true,
            choices: WORK_TYPES.map((row) => ({
              value: row.value,
              label: t(`workTypes.${row.value}.label`),
              icon: row.icon,
              hint: t(`workTypes.${row.value}.hint`)
            }))
          }
        ]
      },
      {
        id: "area",
        title: t("steps.area.title"),
        subtitle: t("steps.area.subtitle"),
        icon: "📐",
        fields: [
          {
            id: "areaPreset",
            kind: "cards",
            label: t("fields.areaPreset.label"),
            required: true,
            choices: AREA_PRESETS.map((row) => ({
              value: row.value,
              label: presetLabel(t, row),
              hint: t(`areaPresets.${row.value}.hint`),
              popular: row.value === "10x12"
            }))
          },
          {
            id: "customLength",
            kind: "number",
            label: t("fields.customLength.label"),
            suffix: "ft",
            min: 2,
            max: 200,
            defaultValue: 12,
            visible: (answers) => answers.areaPreset === "custom"
          },
          {
            id: "customWidth",
            kind: "number",
            label: t("fields.customWidth.label"),
            suffix: "ft",
            min: 2,
            max: 200,
            defaultValue: 12,
            visible: (answers) => answers.areaPreset === "custom"
          }
        ]
      },
      {
        id: "damage",
        title: t("steps.damage.title"),
        subtitle: t("steps.damage.subtitle"),
        icon: "🔍",
        fields: [
          {
            id: "damage",
            kind: "select",
            label: t("fields.damage.label"),
            required: true,
            choices: DAMAGE.map((row) => ({
              value: row.value,
              label: t(`damage.${row.value}.label`),
              hint: t(`damage.${row.value}.hint`)
            }))
          },
          {
            id: "extras",
            kind: "multi",
            label: t("fields.extras.label"),
            help: t("fields.extras.help"),
            choices: EXTRAS.map((row) => ({
              value: row.value,
              label: t(`extras.${row.value}.label`),
              hint: t(`extras.${row.value}.hint`)
            }))
          },
          {
            id: "lightCount",
            kind: "slider",
            label: t("fields.lightCount.label"),
            min: 1,
            max: 30,
            step: 1,
            defaultValue: 4,
            format: (value) =>
              value > 1 ? t("formats.fittingMany", { value }) : t("formats.fittingOne", { value }),
            visible: (answers) => Array.isArray(answers.extras) && (answers.extras as string[]).includes("lighting-removal")
          }
        ]
      },
      {
        id: "access",
        advanced: true,
        title: t("steps.access.title"),
        subtitle: t("steps.access.subtitle"),
        icon: "🪜",
        fields: [
          {
            id: "height",
            kind: "cards",
            label: t("fields.height.label"),
            required: true,
            choices: HEIGHTS.map((row) => ({
              value: row.value,
              label: t(`heights.${row.value}.label`),
              hint: t(`heights.${row.value}.hint`)
            }))
          },
          {
            id: "urgency",
            kind: "cards",
            label: t("fields.urgency.label"),
            required: true,
            choices: URGENCY.map((row) => ({
              value: row.value,
              label: t(`urgency.${row.value}.label`),
              hint: t(`urgency.${row.value}.hint`),
              popular: row.value === "standard"
            }))
          }
        ]
      }
    ],
    compute: (answers) => computeCeiling(t, answers)
  };
}
