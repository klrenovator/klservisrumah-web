/**
 * Painting Cost Calculator — improved version with explicit calculation modes.
 *
 * Implements required UX:
 * - Painting Type: Walls Only, Ceiling Only, Walls + Ceiling
 * - Room Size presets: 10×10, 12×12, 12×15, 15×15, 20×20, Custom
 * - Custom dimensions
 * - Ceiling Height hidden when Ceiling Only
 * - Calculation logic:
 *   Walls Only: 2 × (L+W) × H
 *   Ceiling Only: L × W
 *   Walls+Ceiling: Wall + Ceiling
 * - Displays: total area, labour, material, total, range, duration
 *
 * Backward compatible with old spec for tests that use target/areaPreset etc.
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

/* ── Scope catalogue (legacy, kept for compatibility) ─────────────────── */

type Band = "interior" | "exterior";
type Sizing = "surface" | "property" | "item";

export type PaintTarget = {
  value: string;
  icon: string;
  band: Band;
  sizing: Sizing;
  position: number;
  itemArea?: number;
  areaFactor?: number;
  prep?: number;
  floor: "room" | "exterior" | "small";
  serviceHref: string;
};

export const PAINT_TARGETS: PaintTarget[] = [
  { value: "interior-walls", icon: "🧱", band: "interior", sizing: "surface", position: 0.1, floor: "room", serviceHref: "/services/painting" },
  { value: "ceiling", icon: "🔲", band: "interior", sizing: "surface", position: 0.16, prep: 1.08, floor: "room", serviceHref: "/services/painting" },
  { value: "single-room", icon: "🛏️", band: "interior", sizing: "surface", position: 0.14, floor: "room", serviceHref: "/services/painting" },
  { value: "feature-wall", icon: "🎨", band: "interior", sizing: "surface", position: 0.22, floor: "small", serviceHref: "/services/painting" },
  { value: "staircase", icon: "🪜", band: "interior", sizing: "surface", position: 0.34, prep: 1.15, floor: "room", serviceHref: "/services/painting" },
  { value: "exterior-walls", icon: "🏠", band: "exterior", sizing: "surface", position: 0.16, floor: "exterior", serviceHref: "/services/painting" },
  { value: "boundary-wall", icon: "🧱", band: "exterior", sizing: "surface", position: 0.1, floor: "small", serviceHref: "/services/painting" },
  { value: "roof", icon: "🏚️", band: "exterior", sizing: "surface", position: 0.5, prep: 1.2, floor: "exterior", serviceHref: "/services/roof-repair" },
  { value: "car-porch", icon: "🚗", band: "exterior", sizing: "surface", position: 0.26, floor: "small", serviceHref: "/services/painting" },
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

/* ── New Painting Types & Room Presets (required by task) ─────────────── */

export const PAINTING_TYPES = [
  { value: "walls-only", icon: "🧱", labelKey: "paintingTypes.walls-only.label", serviceKey: "paintingTypes.walls-only.service", band: "interior" as Band, floor: "room" as const, position: 0.1 },
  { value: "ceiling-only", icon: "🔲", labelKey: "paintingTypes.ceiling-only.label", serviceKey: "paintingTypes.ceiling-only.service", band: "interior" as Band, floor: "room" as const, position: 0.16 },
  { value: "walls-ceiling", icon: "🛏️", labelKey: "paintingTypes.walls-ceiling.label", serviceKey: "paintingTypes.walls-ceiling.service", band: "interior" as Band, floor: "room" as const, position: 0.14 }
] as const;

export type PaintingTypeValue = typeof PAINTING_TYPES[number]["value"];

export const ROOM_PRESETS = [
  { value: "10x10", label: "10 × 10 ft", length: 10, width: 10, sqft: 100 },
  { value: "12x12", label: "12 × 12 ft", length: 12, width: 12, sqft: 144 },
  { value: "12x15", label: "12 × 15 ft", length: 12, width: 15, sqft: 180 },
  { value: "15x15", label: "15 × 15 ft", length: 15, width: 15, sqft: 225 },
  { value: "20x20", label: "20 × 20 ft", length: 20, width: 20, sqft: 400 },
  { value: "custom", label: "Custom", sqft: 0 }
] as const;

/* Legacy presets kept for backward compat with old tests */
export const AREA_PRESETS_LEGACY: { value: string; label: string; sqft: number }[] = [
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

/* ── Helpers ──────────────────────────────────────────────────────────── */

function bandFor(target: PaintTarget | typeof PAINTING_TYPES[number]): Range {
  return target.band === "exterior" ? RATES.painting.exteriorSqft : RATES.painting.interiorSqft;
}

function getDimensionsFromPreset(presetValue: string, answers: Answers): { length: number; width: number } {
  const preset = ROOM_PRESETS.find((p) => p.value === presetValue) ?? AREA_PRESETS_LEGACY.find((p) => p.value === presetValue);
  if (!preset) return { length: num(answers.customLength, 12), width: num(answers.customWidth, 12) };
  if (preset.value === "custom") {
    return { length: num(answers.customLength, 12), width: num(answers.customWidth, 12) };
  }
  // Try to get length/width from preset
  const p = preset as any;
  if (p.length && p.width) return { length: p.length, width: p.width };
  // fallback parse label
  const side = Math.sqrt(p.sqft || 144);
  return { length: side, width: side };
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

/* ── Legacy paintedArea for old target-based flow ──────────────────────── */

function paintedAreaLegacy(t: Translator, target: PaintTarget, answers: Answers): { area: number; basis: string } {
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
  const preset = answers.areaPreset ?? answers.roomPreset;
  if (preset === "custom") {
    const length = num(answers.customLength, 12);
    const width = num(answers.customWidth, 12);
    const height = num(answers.customHeight ?? answers.ceilingHeight, 10);
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
  const row = AREA_PRESETS_LEGACY.find((item) => item.value === preset) ?? AREA_PRESETS_LEGACY[2];
  const side = Math.sqrt(row.sqft);
  const height = num(answers.customHeight ?? answers.ceilingHeight, 10);
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

/* ── New paint area calculation (task-required logic) ─────────────────── */

function paintedAreaNew(
  t: Translator,
  paintingType: PaintingTypeValue,
  answers: Answers
): { total: number; wall: number; ceiling: number; length: number; width: number; height: number; basis: string } {
  const presetValue = String(answers.roomPreset ?? answers.areaPreset ?? "12x12");
  const { length, width } = getDimensionsFromPreset(presetValue, answers);
  const height = num(answers.ceilingHeight ?? answers.customHeight, 10);

  const wallArea = 2 * (length + width) * height;
  const ceilingArea = length * width;

  let total: number;
  let basis: string;
  if (paintingType === "walls-only") {
    total = wallArea;
    basis = t("basis.newWallsOnly", { length, width, height, wall: Math.round(wallArea).toLocaleString() });
  } else if (paintingType === "ceiling-only") {
    total = ceilingArea;
    basis = t("basis.newCeilingOnly", { length, width, ceiling: Math.round(ceilingArea).toLocaleString() });
  } else {
    total = wallArea + ceilingArea;
    basis = t("basis.newWallsCeiling", { length, width, height, wall: Math.round(wallArea).toLocaleString(), ceiling: Math.round(ceilingArea).toLocaleString(), total: Math.round(total).toLocaleString() });
  }

  // Fallback for missing translations (parity safe)
  if (basis === `basis.newWallsOnly` || basis === `basis.newCeilingOnly` || basis === `basis.newWallsCeiling`) {
    if (paintingType === "walls-only") basis = `${length} × ${width} ft × ${height} ft walls = ${Math.round(wallArea)} sq ft`;
    else if (paintingType === "ceiling-only") basis = `${length} × ${width} ft ceiling = ${Math.round(ceilingArea)} sq ft`;
    else basis = `walls ${Math.round(wallArea)} + ceiling ${Math.round(ceilingArea)} = ${Math.round(total)} sq ft (${length}×${width}×${height} ft)`;
  }

  return { total, wall: wallArea, ceiling: ceilingArea, length, width, height, basis };
}

/* ── Compute ─────────────────────────────────────────────────────────────── */

export function computePainting(t: Translator, answers: Answers): EstimateResult {
  // New flow when paintingType is explicitly provided
  const paintingTypeValue = answers.paintingType as PaintingTypeValue | undefined;
  const hasNewFlow = Boolean(paintingTypeValue && PAINTING_TYPES.some((p) => p.value === paintingTypeValue));

  if (hasNewFlow) {
    const typeDef = PAINTING_TYPES.find((p) => p.value === paintingTypeValue)!;
    const { total: area, wall: wallArea, ceiling: ceilingArea, length, width, height, basis } = paintedAreaNew(t, paintingTypeValue!, answers);

    const conditionRow = CONDITIONS.find((row) => row.value === answers.condition) ?? CONDITIONS[2];
    const gradeRow = PAINT_GRADES.find((row) => row.value === answers.grade) ?? PAINT_GRADES[1];
    const features = asArray(answers.features);
    const extraPrep = asArray(answers.extraPrep);

    const featureAdd = features.reduce((sum, v) => sum + (PAINT_FEATURES.find((r) => r.value === v)?.add ?? 0), 0);

    const position = clamp(typeDef.position + conditionRow.add + gradeRow.add + featureAdd * 0.6, 0, 1);
    const band = bandFor(typeDef);
    const baseRate = withinBand(band, position);

    const multiplier =
      (1 + pickAdd(COLOURS, answers.colour)) *
      (1 + pickAdd(ACCESS, answers.access)) *
      (1 + pickAdd(URGENCY, answers.urgency)) *
      (1 + featureAdd * 0.4);

    let core = area * baseRate * multiplier;
    if (area > 1500) core *= 0.94;
    if (area > 4000) core *= 0.94;

    const breakdown: { label: string; value: string; note?: string }[] = [
      { label: t("breakdown.paintingType"), value: t(`paintingTypes.${typeDef.value}.label`), note: t(`paintingTypes.${typeDef.value}.service`) },
      { label: t("breakdown.roomDimensions"), value: `${length} × ${width} ft${paintingTypeValue !== "ceiling-only" ? ` × ${height} ft` : ""}`, note: basis },
      { label: t("breakdown.paintedArea"), value: t("breakdown.paintedAreaValue", { area: Math.round(area).toLocaleString() }), note: basis }
    ];

    if (paintingTypeValue === "walls-only" || paintingTypeValue === "walls-ceiling") {
      breakdown.push({
        label: t("breakdown.wallArea"),
        value: `${Math.round(wallArea).toLocaleString()} sq ft`,
        note: `2 × (${length} + ${width}) × ${height} ft`
      });
    }
    if (paintingTypeValue === "ceiling-only" || paintingTypeValue === "walls-ceiling") {
      breakdown.push({
        label: t("breakdown.ceilingArea"),
        value: `${Math.round(ceilingArea).toLocaleString()} sq ft`,
        note: `${length} × ${width} ft`
      });
    }

    breakdown.push({
      label: t("breakdown.appliedRate"),
      value: t("breakdown.appliedRateValue", { rate: baseRate.toFixed(2) }),
      note: t("breakdown.appliedRateNote", { low: band.low.toFixed(2), high: band.high.toFixed(2), band: t(`bands.${typeDef.band}`) })
    });

    // Prep
    let prepTotal = 0;
    const isCeiling = paintingTypeValue === "ceiling-only";

    if (extraPrep.includes("skim-coat")) {
      const rate = isCeiling ? RATES.painting.skimCeilingSqft : RATES.painting.skimWallSqft;
      const cost = area * rate;
      prepTotal += cost;
      breakdown.push({ label: t("breakdown.skimCoat"), value: `RM ${roundMoney(cost).toLocaleString()}`, note: t("breakdown.skimCoatNote", { area: Math.round(area).toLocaleString(), rate }) });
    }
    if (extraPrep.includes("crack-repair") || conditionRow.value === "heavy-cracks") {
      const linearFt = Math.max(6, Math.round(Math.sqrt(area) * 1.6));
      const cost = linearFt * RATES.painting.crackLinearFt;
      prepTotal += cost;
      breakdown.push({ label: t("breakdown.crack"), value: `RM ${roundMoney(cost).toLocaleString()}`, note: t("breakdown.crackNote", { linearFt, rate: RATES.painting.crackLinearFt }) });
    }
    if (extraPrep.includes("waterproofing") || conditionRow.value === "water-damage") {
      const cost = RATES.painting.dampRemedial;
      prepTotal += cost;
      breakdown.push({ label: t("breakdown.damp"), value: `RM ${cost.toLocaleString()}`, note: t("breakdown.dampNote") });
    }
    if (extraPrep.includes("mould-treatment") || conditionRow.value === "mould") {
      const cost = RATES.painting.dampRemedial * 0.6;
      prepTotal += cost;
      breakdown.push({ label: t("breakdown.mould"), value: `RM ${roundMoney(cost).toLocaleString()}`, note: t("breakdown.mouldNote") });
    }
    if (extraPrep.includes("wallpaper-removal")) {
      const cost = area * RATES.painting.skimWallSqft * 0.4;
      prepTotal += cost;
      breakdown.push({ label: t("breakdown.wallpaper"), value: `RM ${roundMoney(cost).toLocaleString()}`, note: t("breakdown.wallpaperNote") });
    }
    if (extraPrep.includes("furniture-shift")) {
      const cost = RATES.painting.callOut;
      prepTotal += cost;
      breakdown.push({ label: t("breakdown.furniture"), value: `RM ${cost.toLocaleString()}`, note: t("breakdown.furnitureNote") });
    }
    if (conditionRow.value === "peeling" || conditionRow.value === "rusty-metal") {
      const cost = RATES.painting.repairMinimum;
      prepTotal += cost;
      breakdown.push({ label: conditionRow.value === "rusty-metal" ? t("breakdown.derust") : t("breakdown.rescrape"), value: `RM ${cost.toLocaleString()}`, note: t("breakdown.rescrapeNote") });
    }

    let totalCost = core + prepTotal;

    const floorValue = RATES.painting.roomMinimum;
    let minimumApplied = false;
    if (totalCost < floorValue) {
      totalCost = floorValue;
      minimumApplied = true;
      breakdown.push({ label: t("breakdown.minimum"), value: `RM ${floorValue.toLocaleString()}`, note: t("breakdown.minimumNoteRoom", { label: priceLabel("painting.interior") }) });
    }

    const customerSupplies = answers.paintSupply === "customer";
    if (customerSupplies) {
      const saving = totalCost * gradeRow.materialShare * 0.75;
      totalCost -= saving;
      breakdown.push({ label: t("breakdown.supply"), value: t("breakdown.supplyValue", { amount: roundMoney(saving).toLocaleString() }), note: t("breakdown.supplyNote") });
    }

    const price = roundMoney(totalCost);
    const spread = minimumApplied ? 0.15 : 0.12 + (conditionRow.add > 0.1 ? 0.06 : 0);
    const low = roundMoney(price * (1 - spread));
    const high = roundMoney(price * (1 + spread + 0.06));

    const materialShare = customerSupplies ? 0.08 : gradeRow.materialShare;
    const materials = roundMoney(price * materialShare);
    const labour = price - materials;

    // Paint quantity estimator
    const coats = answers.colour === "dark" || answers.colour === "multiple" ? 3 : 2;
    const coveragePerLitre = 350; // sq ft per coat per litre
    const litres = Math.ceil((area * coats) / coveragePerLitre * 1.1);
    breakdown.push({
      label: t("breakdown.paintQuantity"),
      value: t("breakdown.paintQuantityValue", { litres: litres.toString(), coats: coats.toString() }),
      note: t("breakdown.paintQuantityNote", { area: Math.round(area).toLocaleString(), coats, coverage: coveragePerLitre })
    });

    // Duration
    const setupDays = 0.35;
    const dailyOutput = 1100;
    const accessDrag = 1 + pickAdd(ACCESS, answers.access);
    const days = Math.max(0.4, setupDays + (area / dailyOutput) * (1 + conditionRow.prepDays) * accessDrag + extraPrep.length * 0.2);
    const duration = durationLabel(t, days);

    const packageName =
      gradeRow.value === "luxury" ? t("packages.luxury") :
      gradeRow.value === "premium" ? t("packages.premium") :
      gradeRow.value === "economy" ? t("packages.economy") : t("packages.standard");

    const addOns: AddOn[] = [];
    if (paintingTypeValue !== "ceiling-only") {
      addOns.push({
        id: "ceiling-refresh",
        label: t("addons.ceilingRefresh.label"),
        price: roundMoney(ceilingArea * withinBand(RATES.painting.interiorSqft, 0.42)),
        note: t("addons.ceilingRefresh.note"),
        recommended: paintingTypeValue === "walls-only"
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
    if (customerSupplies) assumptions.push(t("assumptions.customerPaint"));

    return {
      price,
      low,
      high,
      labour,
      materials,
      duration,
      recommendedService: t(`paintingTypes.${typeDef.value}.service`),
      packageName,
      serviceHref: "/services/painting",
      breakdown,
      addOns,
      related,
      articles,
      maintenance: [t("maintenance.wash"), t("maintenance.cracks"), t("maintenance.touchUp")],
      assumptions
    };
  }

  // Legacy flow for old tests / old URLs
  const target = targetMap.get(String(answers.target)) ?? PAINT_TARGETS[0];
  const { area, basis } = paintedAreaLegacy(t, target, answers);
  const band = bandFor(target);
  const conditionRow = CONDITIONS.find((row) => row.value === answers.condition) ?? CONDITIONS[2];
  const gradeRow = PAINT_GRADES.find((row) => row.value === answers.grade) ?? PAINT_GRADES[1];
  const features = asArray(answers.features);
  const extraPrep = asArray(answers.extraPrep);
  const featureAdd = features.reduce((total, value) => total + (PAINT_FEATURES.find((row) => row.value === value)?.add ?? 0), 0);
  const position = clamp(target.position + conditionRow.add + gradeRow.add + featureAdd * 0.6, 0, 1);
  const baseRate = withinBand(band, position) * (target.prep ?? 1);
  const multiplier = (1 + pickAdd(COLOURS, answers.colour)) * (1 + pickAdd(ACCESS, answers.access)) * (1 + pickAdd(URGENCY, answers.urgency)) * (1 + featureAdd * 0.4);
  let core = area * baseRate * multiplier;
  if (area > 1500) core *= 0.94;
  if (area > 4000) core *= 0.94;
  const breakdown: { label: string; value: string; note?: string }[] = [
    { label: t("breakdown.paintedArea"), value: t("breakdown.paintedAreaValue", { area: Math.round(area).toLocaleString() }), note: basis },
    { label: t("breakdown.appliedRate"), value: t("breakdown.appliedRateValue", { rate: baseRate.toFixed(2) }), note: t("breakdown.appliedRateNote", { low: band.low.toFixed(2), high: band.high.toFixed(2), band: t(`bands.${target.band}`) }) }
  ];
  let prepTotal = 0;
  const isCeiling = target.value === "ceiling";
  if (extraPrep.includes("skim-coat")) {
    const rate = isCeiling ? RATES.painting.skimCeilingSqft : RATES.painting.skimWallSqft;
    const cost = area * rate;
    prepTotal += cost;
    breakdown.push({ label: t("breakdown.skimCoat"), value: `RM ${roundMoney(cost).toLocaleString()}`, note: t("breakdown.skimCoatNote", { area: Math.round(area).toLocaleString(), rate }) });
  }
  if (extraPrep.includes("crack-repair") || conditionRow.value === "heavy-cracks") {
    const linearFt = Math.max(6, Math.round(Math.sqrt(area) * 1.6));
    const cost = linearFt * RATES.painting.crackLinearFt;
    prepTotal += cost;
    breakdown.push({ label: t("breakdown.crack"), value: `RM ${roundMoney(cost).toLocaleString()}`, note: t("breakdown.crackNote", { linearFt, rate: RATES.painting.crackLinearFt }) });
  }
  if (extraPrep.includes("waterproofing") || conditionRow.value === "water-damage") {
    const cost = RATES.painting.dampRemedial;
    prepTotal += cost;
    breakdown.push({ label: t("breakdown.damp"), value: `RM ${cost.toLocaleString()}`, note: t("breakdown.dampNote") });
  }
  if (extraPrep.includes("mould-treatment") || conditionRow.value === "mould") {
    const cost = RATES.painting.dampRemedial * 0.6;
    prepTotal += cost;
    breakdown.push({ label: t("breakdown.mould"), value: `RM ${roundMoney(cost).toLocaleString()}`, note: t("breakdown.mouldNote") });
  }
  if (extraPrep.includes("wallpaper-removal")) {
    const cost = area * RATES.painting.skimWallSqft * 0.4;
    prepTotal += cost;
    breakdown.push({ label: t("breakdown.wallpaper"), value: `RM ${roundMoney(cost).toLocaleString()}`, note: t("breakdown.wallpaperNote") });
  }
  if (extraPrep.includes("furniture-shift")) {
    const cost = RATES.painting.callOut;
    prepTotal += cost;
    breakdown.push({ label: t("breakdown.furniture"), value: `RM ${cost.toLocaleString()}`, note: t("breakdown.furnitureNote") });
  }
  if (conditionRow.value === "peeling" || conditionRow.value === "rusty-metal") {
    const cost = RATES.painting.repairMinimum;
    prepTotal += cost;
    breakdown.push({ label: conditionRow.value === "rusty-metal" ? t("breakdown.derust") : t("breakdown.rescrape"), value: `RM ${cost.toLocaleString()}`, note: t("breakdown.rescrapeNote") });
  }
  let total = core + prepTotal;
  const floorValue = target.floor === "exterior" ? RATES.painting.exteriorMinimum : target.floor === "room" ? RATES.painting.roomMinimum : RATES.painting.repairMinimum;
  let minimumApplied = false;
  if (total < floorValue) {
    total = floorValue;
    minimumApplied = true;
    breakdown.push({
      label: t("breakdown.minimum"),
      value: `RM ${floorValue.toLocaleString()}`,
      note: target.floor === "exterior" ? t("breakdown.minimumNoteExterior", { label: priceLabel("painting.exterior") }) : target.floor === "room" ? t("breakdown.minimumNoteRoom", { label: priceLabel("painting.interior") }) : t("breakdown.minimumNoteSmall", { label: priceLabel("painting.repair") })
    });
  }
  const customerSupplies = answers.paintSupply === "customer";
  if (customerSupplies) {
    const saving = total * gradeRow.materialShare * 0.75;
    total -= saving;
    breakdown.push({ label: t("breakdown.supply"), value: t("breakdown.supplyValue", { amount: roundMoney(saving).toLocaleString() }), note: t("breakdown.supplyNote") });
  }
  const price = roundMoney(total);
  const spread = minimumApplied ? 0.15 : 0.12 + (conditionRow.add > 0.1 ? 0.06 : 0);
  const low = roundMoney(price * (1 - spread));
  const high = roundMoney(price * (1 + spread + 0.06));
  const materialShare = customerSupplies ? 0.08 : gradeRow.materialShare;
  const materials = roundMoney(price * materialShare);
  const labour = price - materials;
  const setupDays = target.sizing === "item" ? 0.25 : 0.35;
  const dailyOutput = target.sizing === "item" ? 300 : target.band === "exterior" ? 800 : 1100;
  const accessDrag = 1 + pickAdd(ACCESS, answers.access);
  const days = Math.max(0.4, setupDays + (area / dailyOutput) * (1 + conditionRow.prepDays) * accessDrag + extraPrep.length * 0.2);
  const packageName = gradeRow.value === "luxury" ? t("packages.luxury") : gradeRow.value === "premium" ? t("packages.premium") : gradeRow.value === "economy" ? t("packages.economy") : t("packages.standard");
  const addOns: AddOn[] = [];
  if (target.value !== "ceiling" && target.sizing !== "item") {
    addOns.push({ id: "ceiling-refresh", label: t("addons.ceilingRefresh.label"), price: roundMoney((target.sizing === "property" ? (PROPERTY_SIZES.find((row) => row.value === answers.propertySize)?.sqft ?? 1200) * 0.85 : area * 0.32) * withinBand(RATES.painting.interiorSqft, 0.42)), note: t("addons.ceilingRefresh.note"), recommended: target.value === "interior-walls" });
  }
  addOns.push({ id: "crack-package", label: t("addons.crackPackage.label"), price: RATES.painting.repairMinimum, note: t("addons.crackPackage.note", { label: priceLabel("painting.repair") }), recommended: ["minor-cracks", "heavy-cracks", "water-damage"].includes(conditionRow.value) });
  addOns.push({ id: "skim-upgrade", label: t("addons.skimUpgrade.label"), price: roundMoney(area * RATES.painting.skimWallSqft), note: t("addons.skimUpgrade.note", { label: priceLabel("skim.wall") }), recommended: conditionRow.value === "uneven" && !extraPrep.includes("skim-coat") });
  addOns.push({ id: "waterproof-addon", label: t("addons.waterproof.label"), price: RATES.painting.dampRemedial, note: t("addons.waterproof.note", { label: priceLabel("waterproofing.wallDamp") }), recommended: conditionRow.value === "water-damage" && !extraPrep.includes("waterproofing") });
  if (target.band === "exterior" || target.value === "metal-fence" || target.value === "main-gate") {
    addOns.push({ id: "gate-grille", label: t("addons.gateGrille.label"), price: roundMoney(90 * withinBand(RATES.painting.exteriorSqft, 0.8) * 1.3), note: t("addons.gateGrille.note"), recommended: false });
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
  const assumptions = [t("assumptions.topcoats"), t("assumptions.protection"), minimumApplied ? t("assumptions.belowMinimum") : t("assumptions.measuredArea")];
  if (target.sizing === "property") assumptions.push(t("assumptions.builtUp"));
  if (customerSupplies) assumptions.push(t("assumptions.customerPaint"));
  if (["factory", "warehouse", "commercial-building"].includes(target.value)) assumptions.push(t("assumptions.commercial"));
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
      // NOTE: `paintingType` is intentionally NOT defaulted. The legacy
      // target/areaPreset/propertySize interface (exercised by the estimator
      // test harness and calibration guards) must keep working for callers
      // that do not explicitly pick a painting type, and the wizard's first
      // question is exactly that choice. Once the visitor picks one, the
      // answer flows into `compute` and the new walls/ceiling modes engage.
      roomPreset: "12x12",
      areaPreset: "10x12", // legacy compat
      customLength: 12,
      customWidth: 12,
      ceilingHeight: 10,
      customHeight: 10, // legacy compat
      condition: "good",
      extraPrep: [],
      grade: "standard",
      features: [],
      paintSupply: "include",
      colour: "light",
      access: "easy",
      urgency: "standard",
      // legacy defaults for backward compat
      target: "interior-walls",
      propertySize: "1200",
      itemCount: 2
    },
    steps: [
      {
        id: "painting-type",
        title: t("steps.paintingType.title"),
        subtitle: t("steps.paintingType.subtitle"),
        icon: "🎨",
        fields: [
          {
            id: "paintingType",
            kind: "cards",
            label: t("fields.paintingType.label"),
            required: true,
            choices: PAINTING_TYPES.map((pt) => ({
              value: pt.value,
              label: t(`paintingTypes.${pt.value}.label`),
              icon: pt.icon,
              hint: opt(t, `paintingTypes.${pt.value}.hint`)
            }))
          }
        ]
      },
      {
        id: "room-size",
        title: t("steps.roomSize.title"),
        subtitle: t("steps.roomSize.subtitle"),
        icon: "📐",
        fields: [
          {
            id: "roomPreset",
            kind: "cards",
            label: t("fields.roomSize.label"),
            required: true,
            choices: ROOM_PRESETS.map((row) => ({
              value: row.value,
              label: row.value === "custom" ? t("roomPresets.custom.label") : row.label,
              hint: t(`roomPresets.${row.value}.hint`),
              popular: row.value === "12x12"
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
            visible: (answers) => (answers.roomPreset ?? answers.areaPreset) === "custom"
          },
          {
            id: "customWidth",
            kind: "number",
            label: t("fields.customWidth.label"),
            suffix: "ft",
            min: 3,
            max: 200,
            defaultValue: 12,
            visible: (answers) => (answers.roomPreset ?? answers.areaPreset) === "custom"
          }
        ]
      },
      {
        id: "ceiling-height",
        title: t("steps.ceilingHeight.title"),
        subtitle: t("steps.ceilingHeight.subtitle"),
        icon: "📏",
        fields: [
          {
            id: "ceilingHeight",
            kind: "slider",
            label: t("fields.ceilingHeight.label"),
            min: 8,
            max: 20,
            step: 1,
            defaultValue: 10,
            format: (v) => `${v} ft`,
            // Hide when ceiling only, because height not required
            visible: (answers) => String(answers.paintingType ?? "walls-only") !== "ceiling-only"
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
            choices: CONDITIONS.map((row) => ({ value: row.value, label: t(`conditions.${row.value}.label`), hint: t(`conditions.${row.value}.hint`) }))
          },
          {
            id: "extraPrep",
            kind: "multi",
            label: t("fields.extraPrep.label"),
            help: t("fields.extraPrep.help"),
            choices: EXTRA_PREP.map((row) => ({ value: row.value, label: t(`extraPrep.${row.value}.label`), hint: t(`extraPrep.${row.value}.hint`) }))
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
            choices: PAINT_GRADES.map((row) => ({ value: row.value, label: t(`grades.${row.value}.label`), hint: t(`grades.${row.value}.hint`), popular: row.value === "standard" }))
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
              { value: "include", label: t("paintSupply.include.label"), hint: t("paintSupply.include.hint"), popular: true },
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
            choices: COLOURS.map((row) => ({ value: row.value, label: t(`colours.${row.value}.label`), hint: t(`colours.${row.value}.hint`) }))
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
            choices: ACCESS.map((row) => ({ value: row.value, label: t(`access.${row.value}.label`), hint: t(`access.${row.value}.hint`) }))
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
            choices: URGENCY.map((row) => ({ value: row.value, label: t(`urgency.${row.value}.label`), hint: t(`urgency.${row.value}.hint`), popular: row.value === "standard" }))
          }
        ]
      }
    ],
    compute: (answers) => computePainting(t, answers)
  };
}
