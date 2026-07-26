/**
 * Painting Cost Estimator — locale-aware spec builder.
 *
 * Workflow: what to paint → area → surface condition → paint system →
 * colour → access → urgency. Every rate resolves from the published pricing in
 * `lib/estimator/pricing.ts`; this file only holds scope ratios.
 *
 * All user-facing copy resolves through the injected translator (`t`), whose
 * dictionary comes from `lib/estimator/i18n/tools/painting-{en,ms,zh}.ts`.
 * Catalogues here carry only locale-neutral data: values, icons and pricing
 * ratios. The English spec for legacy imports is assembled in
 * `lib/estimator/painting.ts`.
 */

import {
  RATES,
  clamp,
  roundMoney,
  priceLabel,
  withinBand,
  type Range
} from "../pricing";
import type { Answers, EstimateResult, EstimatorSpec, AddOn } from "../types";
import { asArray, num, opt, pickAdd, type Translator } from "./shared";

/* ── Scope catalogue (locale-neutral) ────────────────────────────────────── */

type Band = "interior" | "exterior";
type Sizing = "surface" | "property" | "item";

export type PaintTarget = {
  value: string;
  icon: string;
  band: Band;
  sizing: Sizing;
  /** Position inside the published RM/sq ft band (0 = low, 1 = high). */
  position: number;
  /** Painted area per unit for item-based scopes (sq ft, both faces). */
  itemArea?: number;
  /** Painted area as a multiple of built-up area for whole-property scopes. */
  areaFactor?: number;
  /** Extra preparation weighting (rust treatment, sanding, priming). */
  prep?: number;
  /** Minimum engagement key. */
  floor: "room" | "exterior" | "small";
  serviceHref: string;
};

export const PAINT_TARGETS: PaintTarget[] = [
  // ── Interior surfaces
  { value: "interior-walls", icon: "🧱", band: "interior", sizing: "surface", position: 0.1, floor: "room", serviceHref: "/services/painting" },
  { value: "ceiling", icon: "🔲", band: "interior", sizing: "surface", position: 0.16, prep: 1.08, floor: "room", serviceHref: "/services/painting" },
  { value: "single-room", icon: "🛏️", band: "interior", sizing: "surface", position: 0.14, floor: "room", serviceHref: "/services/painting" },
  { value: "feature-wall", icon: "🎨", band: "interior", sizing: "surface", position: 0.22, floor: "small", serviceHref: "/services/painting" },
  { value: "staircase", icon: "🪜", band: "interior", sizing: "surface", position: 0.34, prep: 1.15, floor: "room", serviceHref: "/services/painting" },

  // ── Exterior surfaces
  { value: "exterior-walls", icon: "🏠", band: "exterior", sizing: "surface", position: 0.16, floor: "exterior", serviceHref: "/services/painting" },
  { value: "boundary-wall", icon: "🧱", band: "exterior", sizing: "surface", position: 0.1, floor: "small", serviceHref: "/services/painting" },
  { value: "roof", icon: "🏚️", band: "exterior", sizing: "surface", position: 0.5, prep: 1.2, floor: "exterior", serviceHref: "/services/roof-repair" },
  { value: "car-porch", icon: "🚗", band: "exterior", sizing: "surface", position: 0.26, floor: "small", serviceHref: "/services/painting" },

  // ── Joinery & metalwork (counted per unit)
  { value: "doors", icon: "🚪", band: "interior", sizing: "item", position: 0.6, itemArea: 42, prep: 1.15, floor: "small", serviceHref: "/services/door" },
  { value: "windows", icon: "🪟", band: "interior", sizing: "item", position: 0.66, itemArea: 22, prep: 1.2, floor: "small", serviceHref: "/services/window-repair" },
  { value: "main-gate", icon: "🚧", band: "exterior", sizing: "item", position: 0.7, itemArea: 90, prep: 1.3, floor: "small", serviceHref: "/services/welding" },
  { value: "metal-fence", icon: "⛓️", band: "exterior", sizing: "surface", position: 0.58, prep: 1.3, floor: "small", serviceHref: "/services/welding" },
  { value: "wooden-fence", icon: "🪵", band: "exterior", sizing: "surface", position: 0.46, prep: 1.2, floor: "small", serviceHref: "/services/carpentry" },
  { value: "stair-railing", icon: "🛗", band: "interior", sizing: "item", position: 0.68, itemArea: 26, prep: 1.25, floor: "small", serviceHref: "/services/welding" },
  { value: "steel-structure", icon: "🏗️", band: "exterior", sizing: "surface", position: 0.7, prep: 1.35, floor: "small", serviceHref: "/services/welding" },
  { value: "cabinets", icon: "🗄️", band: "interior", sizing: "item", position: 0.74, itemArea: 34, prep: 1.3, floor: "small", serviceHref: "/services/carpentry" },
  { value: "kitchen-cabinets", icon: "🍳", band: "interior", sizing: "item", position: 0.8, itemArea: 36, prep: 1.35, floor: "small", serviceHref: "/services/kitchen-cabinet" },
  { value: "wardrobes", icon: "👔", band: "interior", sizing: "item", position: 0.74, itemArea: 40, prep: 1.3, floor: "small", serviceHref: "/services/carpentry" },

  // ── Whole-property scopes
  { value: "apartment", icon: "🏢", band: "interior", sizing: "property", position: 0.08, areaFactor: 2.9, floor: "room", serviceHref: "/services/painting" },
  { value: "condominium", icon: "🌆", band: "interior", sizing: "property", position: 0.1, areaFactor: 3.0, floor: "room", serviceHref: "/services/painting" },
  { value: "landed-house", icon: "🏡", band: "interior", sizing: "property", position: 0.09, areaFactor: 3.1, floor: "room", serviceHref: "/services/painting" },
  { value: "landed-exterior", icon: "🏘️", band: "exterior", sizing: "property", position: 0.18, areaFactor: 1.5, floor: "exterior", serviceHref: "/services/painting" },
  { value: "office", icon: "💼", band: "interior", sizing: "property", position: 0.12, areaFactor: 2.7, floor: "room", serviceHref: "/services/painting" },
  { value: "shop-lot", icon: "🏪", band: "interior", sizing: "property", position: 0.14, areaFactor: 2.8, floor: "room", serviceHref: "/services/painting" },
  { value: "commercial-building", icon: "🏬", band: "exterior", sizing: "property", position: 0.24, areaFactor: 1.8, floor: "exterior", serviceHref: "/services/painting" },
  { value: "factory", icon: "🏭", band: "exterior", sizing: "property", position: 0.2, areaFactor: 1.6, floor: "exterior", serviceHref: "/services/painting" },
  { value: "warehouse", icon: "📦", band: "exterior", sizing: "property", position: 0.18, areaFactor: 1.5, floor: "exterior", serviceHref: "/services/painting" }
];

const targetMap = new Map(PAINT_TARGETS.map((item) => [item.value, item]));

/* ── Modifier tables (ratios only — never currency or copy) ──────────────── */

const AREA_PRESETS: { value: string; label: string; sqft: number }[] = [
  { value: "8x8", label: "8 × 8 ft", sqft: 64 },
  { value: "8x10", label: "8 × 10 ft", sqft: 80 },
  { value: "10x10", label: "10 × 10 ft", sqft: 100 },
  { value: "10x12", label: "10 × 12 ft", sqft: 120 },
  { value: "12x12", label: "12 × 12 ft", sqft: 144 },
  { value: "12x15", label: "12 × 15 ft", sqft: 180 },
  { value: "15x15", label: "15 × 15 ft", sqft: 225 },
  { value: "20x20", label: "20 × 20 ft", sqft: 400 },
  { value: "custom", label: "", sqft: 0 }
];

const PROPERTY_SIZES: { value: string; sqft: number }[] = [
  { value: "600", sqft: 600 },
  { value: "900", sqft: 900 },
  { value: "1200", sqft: 1200 },
  { value: "1600", sqft: 1600 },
  { value: "2200", sqft: 2200 },
  { value: "3000", sqft: 3000 },
  { value: "4500", sqft: 4500 },
  { value: "8000", sqft: 8000 }
];

const CONDITIONS: { value: string; add: number; prepDays: number }[] = [
  { value: "new-wall", add: 0.03, prepDays: 0.1 },
  { value: "excellent", add: -0.05, prepDays: 0 },
  { value: "good", add: 0, prepDays: 0.05 },
  { value: "previously-painted", add: 0, prepDays: 0.05 },
  { value: "old-wall", add: 0.06, prepDays: 0.1 },
  { value: "minor-cracks", add: 0.07, prepDays: 0.15 },
  { value: "heavy-cracks", add: 0.16, prepDays: 0.3 },
  { value: "peeling", add: 0.14, prepDays: 0.28 },
  { value: "water-damage", add: 0.16, prepDays: 0.3 },
  { value: "mould", add: 0.13, prepDays: 0.25 },
  { value: "uneven", add: 0.12, prepDays: 0.25 },
  { value: "bare-cement", add: 0.09, prepDays: 0.15 },
  { value: "rusty-metal", add: 0.18, prepDays: 0.3 }
];

const EXTRA_PREP: { value: string }[] = [
  { value: "skim-coat" },
  { value: "waterproofing" },
  { value: "mould-treatment" },
  { value: "crack-repair" },
  { value: "wallpaper-removal" },
  { value: "furniture-shift" }
];

const PAINT_GRADES: { value: string; add: number; materialShare: number }[] = [
  { value: "economy", add: -0.1, materialShare: 0.26 },
  { value: "standard", add: 0, materialShare: 0.32 },
  { value: "premium", add: 0.12, materialShare: 0.38 },
  { value: "luxury", add: 0.24, materialShare: 0.44 }
];

const PAINT_FEATURES: { value: string; add: number }[] = [
  { value: "low-voc", add: 0.03 },
  { value: "odourless", add: 0.03 },
  { value: "washable", add: 0.04 },
  { value: "anti-mould", add: 0.04 },
  { value: "weather-resistant", add: 0.05 },
  { value: "premium-exterior", add: 0.07 },
  { value: "heat-reflective", add: 0.08 },
  { value: "anti-rust", add: 0.06 }
];

const COLOURS: { value: string; add: number }[] = [
  { value: "same", add: -0.02 },
  { value: "light", add: 0 },
  { value: "dark", add: 0.07 },
  { value: "multiple", add: 0.06 },
  { value: "accent", add: 0.03 }
];

const ACCESS: { value: string; add: number }[] = [
  { value: "easy", add: 0 },
  { value: "first-floor", add: 0.05 },
  { value: "second-floor", add: 0.1 },
  { value: "high-rise", add: 0.12 },
  { value: "scaffold", add: 0.2 },
  { value: "rope-access", add: 0.38 },
  { value: "difficult", add: 0.12 }
];

const URGENCY: { value: string; add: number }[] = [
  { value: "standard", add: 0 },
  { value: "7-days", add: 0.05 },
  { value: "urgent", add: 0.14 },
  { value: "emergency", add: 0.25 }
];

/* ── Compute ─────────────────────────────────────────────────────────────── */

function bandFor(target: PaintTarget): Range {
  return target.band === "exterior" ? RATES.painting.exteriorSqft : RATES.painting.interiorSqft;
}

function paintedArea(t: Translator, target: PaintTarget, answers: Answers): { area: number; basis: string } {
  if (target.sizing === "item") {
    const count = num(answers.itemCount, 1);
    const perItem = target.itemArea ?? 40;
    return {
      area: count * perItem,
      basis: t("basis.item", {
        count,
        noun: opt(t, `targets.${target.value}.noun`) ?? t("basis.unitFallback"),
        perItem
      })
    };
  }

  if (target.sizing === "property") {
    const size = PROPERTY_SIZES.find((row) => row.value === answers.propertySize) ?? PROPERTY_SIZES[2];
    const factor = target.areaFactor ?? 2.9;
    return {
      area: size.sqft * factor,
      basis: t("basis.property", { sqft: size.sqft.toLocaleString(), factor })
    };
  }

  const preset = answers.areaPreset;
  if (preset === "custom") {
    const length = num(answers.customLength, 12);
    const width = num(answers.customWidth, 12);
    const height = num(answers.customHeight, 10);
    if (target.value === "ceiling") {
      return { area: length * width, basis: t("basis.customCeiling", { length, width }) };
    }
    const wall = 2 * (length + width) * height;
    const area = target.value === "single-room" ? wall + length * width : wall;
    return {
      area,
      basis:
        target.value === "single-room"
          ? t("basis.customRoomBoth", { length, width, height })
          : t("basis.customRoomWalls", { length, width, height })
    };
  }

  const row = AREA_PRESETS.find((item) => item.value === preset) ?? AREA_PRESETS[2];
  const side = Math.sqrt(row.sqft);
  const height = num(answers.customHeight, 10);
  if (target.value === "ceiling") {
    return { area: row.sqft, basis: t("areaPresets.presetCeiling", { label: row.label }) };
  }
  const wall = 4 * side * height;
  const area = target.value === "single-room" ? wall + row.sqft : wall;
  return {
    area,
    basis:
      target.value === "single-room"
        ? t("areaPresets.roomWallsAndCeiling", { label: row.label, height })
        : t("areaPresets.roomWallSurface", { label: row.label, height })
  };
}

function durationLabel(t: Translator, days: number): string {
  if (days <= 0.45) return t("durations.halfDay");
  if (days <= 1.1) return t("durations.oneDay");
  if (days <= 2.2) return t("durations.oneTwoDays");
  if (days <= 3.5) return t("durations.twoThreeDays");
  if (days <= 5.5) return t("durations.fourFiveDays");
  if (days <= 8) return t("durations.oneWeek");
  if (days <= 13) return t("durations.oneTwoWeeks");
  return t("durations.weeks", { n: Math.ceil(days / 5) });
}

export function computePainting(t: Translator, answers: Answers): EstimateResult {
  const target = targetMap.get(String(answers.target)) ?? PAINT_TARGETS[0];
  const { area, basis } = paintedArea(t, target, answers);
  const band = bandFor(target);

  const conditionRow = CONDITIONS.find((row) => row.value === answers.condition) ?? CONDITIONS[2];
  const gradeRow = PAINT_GRADES.find((row) => row.value === answers.grade) ?? PAINT_GRADES[1];
  const features = asArray(answers.features);
  const extraPrep = asArray(answers.extraPrep);

  const featureAdd = features.reduce(
    (total, value) => total + (PAINT_FEATURES.find((row) => row.value === value)?.add ?? 0),
    0
  );

  // Position inside the published RM/sq ft band.
  const position = clamp(
    target.position + conditionRow.add + gradeRow.add + featureAdd * 0.6,
    0,
    1
  );
  const baseRate = withinBand(band, position) * (target.prep ?? 1);

  // Job multipliers.
  const multiplier =
    (1 + pickAdd(COLOURS, answers.colour)) *
    (1 + pickAdd(ACCESS, answers.access)) *
    (1 + pickAdd(URGENCY, answers.urgency)) *
    (1 + featureAdd * 0.4);

  let core = area * baseRate * multiplier;

  // Volume efficiency — large scopes get a better rate per sq ft.
  if (area > 1500) core *= 0.94;
  if (area > 4000) core *= 0.94;

  const breakdown: { label: string; value: string; note?: string }[] = [
    {
      label: t("breakdown.paintedArea"),
      value: t("breakdown.paintedAreaValue", { area: Math.round(area).toLocaleString() }),
      note: basis
    },
    {
      label: t("breakdown.appliedRate"),
      value: t("breakdown.appliedRateValue", { rate: baseRate.toFixed(2) }),
      note: t("breakdown.appliedRateNote", {
        low: band.low.toFixed(2),
        high: band.high.toFixed(2),
        band: t(`bands.${target.band}`)
      })
    }
  ];

  // Separately-priced preparation, each from a published rate.
  let prepTotal = 0;
  const isCeiling = target.value === "ceiling";

  if (extraPrep.includes("skim-coat")) {
    const rate = isCeiling ? RATES.painting.skimCeilingSqft : RATES.painting.skimWallSqft;
    const cost = area * rate;
    prepTotal += cost;
    breakdown.push({
      label: t("breakdown.skimCoat"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.skimCoatNote", { area: Math.round(area).toLocaleString(), rate })
    });
  }

  if (extraPrep.includes("crack-repair") || conditionRow.value === "heavy-cracks") {
    // Crack length scales with the square root of the area (perimeter-like).
    const linearFt = Math.max(6, Math.round(Math.sqrt(area) * 1.6));
    const cost = linearFt * RATES.painting.crackLinearFt;
    prepTotal += cost;
    breakdown.push({
      label: t("breakdown.crack"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.crackNote", { linearFt, rate: RATES.painting.crackLinearFt })
    });
  }

  if (extraPrep.includes("waterproofing") || conditionRow.value === "water-damage") {
    const cost = RATES.painting.dampRemedial;
    prepTotal += cost;
    breakdown.push({
      label: t("breakdown.damp"),
      value: `RM ${cost.toLocaleString()}`,
      note: t("breakdown.dampNote")
    });
  }

  if (extraPrep.includes("mould-treatment") || conditionRow.value === "mould") {
    const cost = RATES.painting.dampRemedial * 0.6;
    prepTotal += cost;
    breakdown.push({
      label: t("breakdown.mould"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.mouldNote")
    });
  }

  if (extraPrep.includes("wallpaper-removal")) {
    const cost = area * RATES.painting.skimWallSqft * 0.4;
    prepTotal += cost;
    breakdown.push({
      label: t("breakdown.wallpaper"),
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: t("breakdown.wallpaperNote")
    });
  }

  if (extraPrep.includes("furniture-shift")) {
    const cost = RATES.painting.callOut;
    prepTotal += cost;
    breakdown.push({
      label: t("breakdown.furniture"),
      value: `RM ${cost.toLocaleString()}`,
      note: t("breakdown.furnitureNote")
    });
  }

  if (conditionRow.value === "peeling" || conditionRow.value === "rusty-metal") {
    const cost = RATES.painting.repairMinimum;
    prepTotal += cost;
    breakdown.push({
      label: conditionRow.value === "rusty-metal" ? t("breakdown.derust") : t("breakdown.rescrape"),
      value: `RM ${cost.toLocaleString()}`,
      note: t("breakdown.rescrapeNote")
    });
  }

  let total = core + prepTotal;

  // Minimum engagement — always a published figure.
  const floorValue =
    target.floor === "exterior"
      ? RATES.painting.exteriorMinimum
      : target.floor === "room"
        ? RATES.painting.roomMinimum
        : RATES.painting.repairMinimum;

  let minimumApplied = false;
  if (total < floorValue) {
    total = floorValue;
    minimumApplied = true;
    breakdown.push({
      label: t("breakdown.minimum"),
      value: `RM ${floorValue.toLocaleString()}`,
      note:
        target.floor === "exterior"
          ? t("breakdown.minimumNoteExterior", { label: priceLabel("painting.exterior") })
          : target.floor === "room"
            ? t("breakdown.minimumNoteRoom", { label: priceLabel("painting.interior") })
            : t("breakdown.minimumNoteSmall", { label: priceLabel("painting.repair") })
    });
  }

  // Customer-supplied paint removes the paint portion of materials.
  const customerSupplies = answers.paintSupply === "customer";
  if (customerSupplies) {
    const saving = total * gradeRow.materialShare * 0.75;
    total -= saving;
    breakdown.push({
      label: t("breakdown.supply"),
      value: t("breakdown.supplyValue", { amount: roundMoney(saving).toLocaleString() }),
      note: t("breakdown.supplyNote")
    });
  }

  const price = roundMoney(total);
  const spread = minimumApplied ? 0.15 : 0.12 + (conditionRow.add > 0.1 ? 0.06 : 0);
  const low = roundMoney(price * (1 - spread));
  const high = roundMoney(price * (1 + spread + 0.06));

  const materialShare = customerSupplies ? 0.08 : gradeRow.materialShare;
  const materials = roundMoney(price * materialShare);
  const labour = price - materials;

  // Duration — crew productivity in sq ft/day plus preparation loading.
  // Duration = fixed mobilisation + area throughput. Every job carries setup,
  // masking, protection and clean-up regardless of size, which is why a single
  // room still takes a day. Throughput is calibrated so a 1,000 sq ft apartment
  // lands at 2–3 days, matching the figure published in our painting FAQ.
  const setupDays = target.sizing === "item" ? 0.25 : 0.35;
  const dailyOutput = target.sizing === "item" ? 300 : target.band === "exterior" ? 800 : 1100;
  const accessDrag = 1 + pickAdd(ACCESS, answers.access);
  const days = Math.max(
    0.4,
    setupDays + (area / dailyOutput) * (1 + conditionRow.prepDays) * accessDrag + extraPrep.length * 0.2
  );

  const packageName =
    gradeRow.value === "luxury"
      ? t("packages.luxury")
      : gradeRow.value === "premium"
        ? t("packages.premium")
        : gradeRow.value === "economy"
          ? t("packages.economy")
          : t("packages.standard");

  /* ── Add-ons, all priced from published rates ── */
  const addOns: AddOn[] = [];
  if (target.value !== "ceiling" && target.sizing !== "item") {
    addOns.push({
      id: "ceiling-refresh",
      label: t("addons.ceilingRefresh.label"),
      price: roundMoney(
        (target.sizing === "property"
          ? (PROPERTY_SIZES.find((row) => row.value === answers.propertySize)?.sqft ?? 1200) * 0.85
          : area * 0.32) * withinBand(RATES.painting.interiorSqft, 0.42)
      ),
      note: t("addons.ceilingRefresh.note"),
      recommended: target.value === "interior-walls"
    });
  }
  addOns.push({
    id: "crack-package",
    label: t("addons.crackPackage.label"),
    price: RATES.painting.repairMinimum,
    note: t("addons.crackPackage.note", { label: priceLabel("painting.repair") }),
    recommended: ["minor-cracks", "heavy-cracks", "water-damage"].includes(conditionRow.value)
  });
  addOns.push({
    id: "skim-upgrade",
    label: t("addons.skimUpgrade.label"),
    price: roundMoney(area * RATES.painting.skimWallSqft),
    note: t("addons.skimUpgrade.note", { label: priceLabel("skim.wall") }),
    recommended: conditionRow.value === "uneven" && !extraPrep.includes("skim-coat")
  });
  addOns.push({
    id: "waterproof-addon",
    label: t("addons.waterproof.label"),
    price: RATES.painting.dampRemedial,
    note: t("addons.waterproof.note", { label: priceLabel("waterproofing.wallDamp") }),
    recommended: conditionRow.value === "water-damage" && !extraPrep.includes("waterproofing")
  });
  addOns.push({
    id: "post-clean",
    label: t("addons.postClean.label"),
    price: RATES.painting.cleaning,
    note: t("addons.postClean.note", { price: RATES.painting.cleaning }),
    recommended: area > 900
  });
  if (target.band === "exterior" || target.value === "metal-fence" || target.value === "main-gate") {
    addOns.push({
      id: "gate-grille",
      label: t("addons.gateGrille.label"),
      price: roundMoney(90 * withinBand(RATES.painting.exteriorSqft, 0.8) * 1.3),
      note: t("addons.gateGrille.note"),
      recommended: false
    });
  }

  const related = [
    { label: t("related.service.label"), href: "/services/painting", desc: t("related.service.desc") },
    { label: t("related.costGuide.label"), href: "/services/painting/cost", desc: t("related.costGuide.desc") },
    { label: t("related.skimCoat.label"), href: "/services/skim-coat", desc: t("related.skimCoat.desc") },
    { label: t("related.waterproofing.label"), href: "/services/waterproofing", desc: t("related.waterproofing.desc") },
    { label: t("related.plasterCeiling.label"), href: "/services/plaster-ceiling", desc: t("related.plasterCeiling.desc") }
  ];

  const articles = [
    { label: t("articles.colours"), href: "/blog/5-tips-choosing-paint-colors-malaysia" },
    { label: t("articles.repaint"), href: "/blog/when-to-repaint-your-house-malaysia" },
    { label: t("articles.condoVs"), href: "/blog/when-to-repaint-condo-vs-repaint-terrace-house" }
  ];

  const assumptions = [
    t("assumptions.topcoats"),
    t("assumptions.protection"),
    minimumApplied ? t("assumptions.belowMinimum") : t("assumptions.measuredArea")
  ];
  if (target.sizing === "property") {
    assumptions.push(t("assumptions.builtUp"));
  }
  if (customerSupplies) {
    assumptions.push(t("assumptions.customerPaint"));
  }
  if (["factory", "warehouse", "commercial-building"].includes(target.value)) {
    assumptions.push(t("assumptions.commercial"));
  }

  return {
    price,
    low,
    high,
    labour,
    materials,
    duration: durationLabel(t, days),
    recommendedService: t(`targets.${target.value}.service`),
    packageName,
    serviceHref: target.serviceHref,
    breakdown,
    addOns,
    related,
    articles,
    maintenance: [t("maintenance.wash"), t("maintenance.cracks"), t("maintenance.touchUp")],
    assumptions
  };
}

/* ── Spec builder ────────────────────────────────────────────────────────── */

export function buildPaintingSpec(t: Translator): EstimatorSpec {
  return {
    slug: "painting-calculator",
    name: t("meta.name"),
    serviceSlug: "painting",
    resultLabel: t("meta.resultLabel"),
    defaults: {
      target: "interior-walls",
      propertySize: "1200",
      areaPreset: "10x12",
      itemCount: 2,
      customLength: 12,
      customWidth: 12,
      customHeight: 10,
      condition: "good",
      extraPrep: [],
      grade: "standard",
      features: [],
      paintSupply: "include",
      colour: "light",
      access: "easy",
      urgency: "standard"
    },
    steps: [
      {
        id: "scope",
        title: t("steps.scope.title"),
        subtitle: t("steps.scope.subtitle"),
        icon: "🎯",
        fields: [
          {
            id: "target",
            kind: "select",
            label: t("fields.target.label"),
            required: true,
            choices: PAINT_TARGETS.map((target) => ({
              value: target.value,
              label: t(`targets.${target.value}.label`),
              icon: target.icon,
              hint: opt(t, `targets.${target.value}.note`)
            })),
            help: t("fields.target.help")
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
            label: t("fields.roomSize.label"),
            required: true,
            visible: (answers) => (targetMap.get(String(answers.target))?.sizing ?? "surface") === "surface",
            choices: AREA_PRESETS.map((row) => ({
              value: row.value,
              label: row.value === "custom" ? t("areaPresets.custom.label") : row.label,
              hint: t(`areaPresets.${row.value}.hint`),
              popular: row.value === "10x12"
            }))
          },
          {
            id: "customLength",
            kind: "number",
            label: t("fields.customLength.label"),
            suffix: "ft",
            min: 3,
            max: 200,
            defaultValue: 12,
            visible: (answers) =>
              (targetMap.get(String(answers.target))?.sizing ?? "surface") === "surface" &&
              answers.areaPreset === "custom"
          },
          {
            id: "customWidth",
            kind: "number",
            label: t("fields.customWidth.label"),
            suffix: "ft",
            min: 3,
            max: 200,
            defaultValue: 12,
            visible: (answers) =>
              (targetMap.get(String(answers.target))?.sizing ?? "surface") === "surface" &&
              answers.areaPreset === "custom"
          },
          {
            id: "customHeight",
            kind: "slider",
            label: t("fields.customHeight.label"),
            min: 8,
            max: 20,
            step: 1,
            defaultValue: 10,
            format: (value) => `${value} ft`,
            visible: (answers) => (targetMap.get(String(answers.target))?.sizing ?? "surface") === "surface"
          },
          {
            id: "propertySize",
            kind: "cards",
            label: t("fields.propertySize.label"),
            required: true,
            visible: (answers) => targetMap.get(String(answers.target))?.sizing === "property",
            choices: PROPERTY_SIZES.map((row) => ({
              value: row.value,
              label: t(`propertySizes.${row.value}.label`),
              hint: t(`propertySizes.${row.value}.hint`)
            }))
          },
          {
            id: "itemCount",
            kind: "slider",
            label: t("fields.itemCount.label"),
            min: 1,
            max: 40,
            step: 1,
            defaultValue: 2,
            visible: (answers) => targetMap.get(String(answers.target))?.sizing === "item",
            format: (value) =>
              value > 1 ? t("formats.itemCountMany", { value }) : t("formats.itemCountOne", { value })
          }
        ]
      },
      {
        id: "condition",
        title: t("steps.condition.title"),
        subtitle: t("steps.condition.subtitle"),
        icon: "🔍",
        fields: [
          {
            id: "condition",
            kind: "select",
            label: t("fields.condition.label"),
            required: true,
            choices: CONDITIONS.map((row) => ({
              value: row.value,
              label: t(`conditions.${row.value}.label`),
              hint: t(`conditions.${row.value}.hint`)
            }))
          },
          {
            id: "extraPrep",
            kind: "multi",
            label: t("fields.extraPrep.label"),
            help: t("fields.extraPrep.help"),
            choices: EXTRA_PREP.map((row) => ({
              value: row.value,
              label: t(`extraPrep.${row.value}.label`),
              hint: t(`extraPrep.${row.value}.hint`)
            }))
          }
        ]
      },
      {
        id: "paint",
        advanced: true,
        title: t("steps.paint.title"),
        subtitle: t("steps.paint.subtitle"),
        icon: "🪣",
        fields: [
          {
            id: "grade",
            kind: "cards",
            label: t("fields.grade.label"),
            required: true,
            choices: PAINT_GRADES.map((row) => ({
              value: row.value,
              label: t(`grades.${row.value}.label`),
              hint: t(`grades.${row.value}.hint`),
              popular: row.value === "standard"
            }))
          },
          {
            id: "features",
            kind: "multi",
            label: t("fields.features.label"),
            help: t("fields.features.help"),
            choices: PAINT_FEATURES.map((row) => ({ value: row.value, label: t(`features.${row.value}.label`) }))
          },
          {
            id: "paintSupply",
            kind: "cards",
            label: t("fields.paintSupply.label"),
            columns: 2,
            choices: [
              {
                value: "include",
                label: t("paintSupply.include.label"),
                hint: t("paintSupply.include.hint"),
                popular: true
              },
              { value: "customer", label: t("paintSupply.customer.label"), hint: t("paintSupply.customer.hint") }
            ]
          }
        ]
      },
      {
        id: "colour",
        advanced: true,
        title: t("steps.colour.title"),
        subtitle: t("steps.colour.subtitle"),
        icon: "🎨",
        fields: [
          {
            id: "colour",
            kind: "cards",
            label: t("fields.colour.label"),
            required: true,
            choices: COLOURS.map((row) => ({
              value: row.value,
              label: t(`colours.${row.value}.label`),
              hint: t(`colours.${row.value}.hint`)
            }))
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
            id: "access",
            kind: "select",
            label: t("fields.access.label"),
            required: true,
            choices: ACCESS.map((row) => ({
              value: row.value,
              label: t(`access.${row.value}.label`),
              hint: t(`access.${row.value}.hint`)
            }))
          }
        ]
      },
      {
        id: "urgency",
        advanced: true,
        title: t("steps.urgency.title"),
        subtitle: t("steps.urgency.subtitle"),
        icon: "⏱️",
        fields: [
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
    compute: (answers) => computePainting(t, answers)
  };
}
