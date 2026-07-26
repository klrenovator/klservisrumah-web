/**
 * Painting Cost Estimator.
 *
 * Workflow: what to paint → area → surface condition → paint system →
 * colour → access → urgency. Every rate resolves from the published pricing in
 * `lib/estimator/pricing.ts`; this file only holds scope ratios.
 */

import {
  RATES,
  clamp,
  roundMoney,
  priceLabel,
  withinBand,
  type Range
} from "./pricing";
import type { Answers, EstimateResult, EstimatorSpec, AddOn } from "./types";

/* ── Scope catalogue ─────────────────────────────────────────────────────── */

type Band = "interior" | "exterior";
type Sizing = "surface" | "property" | "item";

type Target = {
  value: string;
  label: string;
  icon: string;
  band: Band;
  sizing: Sizing;
  /** Position inside the published RM/sq ft band (0 = low, 1 = high). */
  position: number;
  /** Painted area per unit for item-based scopes (sq ft, both faces). */
  itemArea?: number;
  itemNoun?: string;
  /** Painted area as a multiple of built-up area for whole-property scopes. */
  areaFactor?: number;
  /** Extra preparation weighting (rust treatment, sanding, priming). */
  prep?: number;
  /** Minimum engagement key. */
  floor: "room" | "exterior" | "small";
  service: string;
  serviceHref: string;
  note?: string;
};

export const PAINT_TARGETS: Target[] = [
  // ── Interior surfaces
  { value: "interior-walls", label: "Interior Walls", icon: "🧱", band: "interior", sizing: "surface", position: 0.1, floor: "room", service: "Interior Wall Repainting", serviceHref: "/services/painting", note: "Two topcoats over a sealed, patched surface." },
  { value: "ceiling", label: "Ceiling", icon: "🔲", band: "interior", sizing: "surface", position: 0.16, prep: 1.08, floor: "room", service: "Ceiling Repainting", serviceHref: "/services/painting" },
  { value: "single-room", label: "Whole Room (walls + ceiling)", icon: "🛏️", band: "interior", sizing: "surface", position: 0.14, floor: "room", service: "Room Repainting Package", serviceHref: "/services/painting" },
  { value: "feature-wall", label: "Feature / Accent Wall", icon: "🎨", band: "interior", sizing: "surface", position: 0.22, floor: "small", service: "Accent Wall Painting", serviceHref: "/services/painting" },
  { value: "staircase", label: "Staircase Wall / Void", icon: "🪜", band: "interior", sizing: "surface", position: 0.34, prep: 1.15, floor: "room", service: "High-Void Staircase Painting", serviceHref: "/services/painting" },

  // ── Exterior surfaces
  { value: "exterior-walls", label: "Outdoor / Exterior Walls", icon: "🏠", band: "exterior", sizing: "surface", position: 0.16, floor: "exterior", service: "Exterior Weatherproof Painting", serviceHref: "/services/painting" },
  { value: "boundary-wall", label: "Boundary / Perimeter Wall", icon: "🧱", band: "exterior", sizing: "surface", position: 0.1, floor: "small", service: "Boundary Wall Painting", serviceHref: "/services/painting" },
  { value: "roof", label: "Roof / Roof Coating", icon: "🏚️", band: "exterior", sizing: "surface", position: 0.5, prep: 1.2, floor: "exterior", service: "Roof Coating & Heat-Reflective Painting", serviceHref: "/services/roof-repair" },
  { value: "car-porch", label: "Car Porch / Awning", icon: "🚗", band: "exterior", sizing: "surface", position: 0.26, floor: "small", service: "Car Porch Repainting", serviceHref: "/services/painting" },

  // ── Joinery & metalwork (counted per unit)
  { value: "doors", label: "Doors", icon: "🚪", band: "interior", sizing: "item", position: 0.6, itemArea: 42, itemNoun: "door", prep: 1.15, floor: "small", service: "Door Refinishing", serviceHref: "/services/door" },
  { value: "windows", label: "Windows / Frames", icon: "🪟", band: "interior", sizing: "item", position: 0.66, itemArea: 22, itemNoun: "window", prep: 1.2, floor: "small", service: "Window Frame Repainting", serviceHref: "/services/window-repair" },
  { value: "main-gate", label: "Main Gate", icon: "🚧", band: "exterior", sizing: "item", position: 0.7, itemArea: 90, itemNoun: "gate leaf", prep: 1.3, floor: "small", service: "Gate Rust Treatment & Repaint", serviceHref: "/services/welding" },
  { value: "metal-fence", label: "Metal Fence / Grille", icon: "⛓️", band: "exterior", sizing: "surface", position: 0.58, prep: 1.3, floor: "small", service: "Metal Grille & Fence Painting", serviceHref: "/services/welding" },
  { value: "wooden-fence", label: "Wooden Fence / Pergola", icon: "🪵", band: "exterior", sizing: "surface", position: 0.46, prep: 1.2, floor: "small", service: "Timber Fence Staining & Painting", serviceHref: "/services/carpentry" },
  { value: "stair-railing", label: "Stair Railings", icon: "🛗", band: "interior", sizing: "item", position: 0.68, itemArea: 26, itemNoun: "railing run (10 ft)", prep: 1.25, floor: "small", service: "Railing Repaint", serviceHref: "/services/welding" },
  { value: "steel-structure", label: "Steel Structure / Awning Frame", icon: "🏗️", band: "exterior", sizing: "surface", position: 0.7, prep: 1.35, floor: "small", service: "Structural Steel Protective Coating", serviceHref: "/services/welding" },
  { value: "cabinets", label: "Cabinets (general)", icon: "🗄️", band: "interior", sizing: "item", position: 0.74, itemArea: 34, itemNoun: "cabinet door", prep: 1.3, floor: "small", service: "Cabinet Respray & Refinishing", serviceHref: "/services/carpentry" },
  { value: "kitchen-cabinets", label: "Kitchen Cabinets", icon: "🍳", band: "interior", sizing: "item", position: 0.8, itemArea: 36, itemNoun: "cabinet door", prep: 1.35, floor: "small", service: "Kitchen Cabinet Refinishing", serviceHref: "/services/kitchen-cabinet" },
  { value: "wardrobes", label: "Wardrobes", icon: "👔", band: "interior", sizing: "item", position: 0.74, itemArea: 40, itemNoun: "wardrobe door", prep: 1.3, floor: "small", service: "Wardrobe Refinishing", serviceHref: "/services/carpentry" },

  // ── Whole-property scopes
  { value: "apartment", label: "Apartment — full interior", icon: "🏢", band: "interior", sizing: "property", position: 0.08, areaFactor: 2.9, floor: "room", service: "Full Apartment Repainting", serviceHref: "/services/painting" },
  { value: "condominium", label: "Condominium — full interior", icon: "🌆", band: "interior", sizing: "property", position: 0.1, areaFactor: 3.0, floor: "room", service: "Full Condo Repainting", serviceHref: "/services/painting", note: "Includes lift protection and management work-hour compliance." },
  { value: "landed-house", label: "Landed House — full interior", icon: "🏡", band: "interior", sizing: "property", position: 0.09, areaFactor: 3.1, floor: "room", service: "Full House Interior Repainting", serviceHref: "/services/painting" },
  { value: "landed-exterior", label: "Landed House — full exterior", icon: "🏘️", band: "exterior", sizing: "property", position: 0.18, areaFactor: 1.5, floor: "exterior", service: "Full Exterior House Painting", serviceHref: "/services/painting" },
  { value: "office", label: "Office", icon: "💼", band: "interior", sizing: "property", position: 0.12, areaFactor: 2.7, floor: "room", service: "Commercial Office Painting", serviceHref: "/services/painting", note: "After-hours or weekend scheduling available to avoid downtime." },
  { value: "shop-lot", label: "Shop Lot", icon: "🏪", band: "interior", sizing: "property", position: 0.14, areaFactor: 2.8, floor: "room", service: "Shop Lot Painting", serviceHref: "/services/painting" },
  { value: "commercial-building", label: "Commercial Building", icon: "🏬", band: "exterior", sizing: "property", position: 0.24, areaFactor: 1.8, floor: "exterior", service: "Commercial Building Painting", serviceHref: "/services/painting", note: "Facade access method confirmed on site." },
  { value: "factory", label: "Factory", icon: "🏭", band: "exterior", sizing: "property", position: 0.2, areaFactor: 1.6, floor: "exterior", service: "Factory Painting & Coating", serviceHref: "/services/painting" },
  { value: "warehouse", label: "Warehouse", icon: "📦", band: "exterior", sizing: "property", position: 0.18, areaFactor: 1.5, floor: "exterior", service: "Warehouse Painting & Line Marking", serviceHref: "/services/painting" }
];

const targetMap = new Map(PAINT_TARGETS.map((item) => [item.value, item]));

/* ── Modifier tables (ratios only — never currency) ──────────────────────── */

const AREA_PRESETS: { value: string; label: string; sqft: number; hint: string }[] = [
  { value: "8x8", label: "8 × 8 ft", sqft: 64, hint: "Small bedroom / store" },
  { value: "8x10", label: "8 × 10 ft", sqft: 80, hint: "Single bedroom" },
  { value: "10x10", label: "10 × 10 ft", sqft: 100, hint: "Standard bedroom" },
  { value: "10x12", label: "10 × 12 ft", sqft: 120, hint: "Master bedroom" },
  { value: "12x12", label: "12 × 12 ft", sqft: 144, hint: "Large bedroom" },
  { value: "12x15", label: "12 × 15 ft", sqft: 180, hint: "Living hall" },
  { value: "15x15", label: "15 × 15 ft", sqft: 225, hint: "Large hall" },
  { value: "20x20", label: "20 × 20 ft", sqft: 400, hint: "Open-plan area" },
  { value: "custom", label: "Custom size", sqft: 0, hint: "Enter your own measurements" }
];

const PROPERTY_SIZES: { value: string; label: string; sqft: number; hint: string }[] = [
  { value: "600", label: "Up to 600 sq ft", sqft: 600, hint: "Studio / small apartment" },
  { value: "900", label: "600 – 900 sq ft", sqft: 900, hint: "2-bedroom condo" },
  { value: "1200", label: "900 – 1,200 sq ft", sqft: 1200, hint: "3-bedroom condo" },
  { value: "1600", label: "1,200 – 1,600 sq ft", sqft: 1600, hint: "Terrace house" },
  { value: "2200", label: "1,600 – 2,200 sq ft", sqft: 2200, hint: "2-storey terrace" },
  { value: "3000", label: "2,200 – 3,000 sq ft", sqft: 3000, hint: "Semi-D / bungalow" },
  { value: "4500", label: "3,000 – 4,500 sq ft", sqft: 4500, hint: "Large bungalow / shop lot" },
  { value: "8000", label: "Above 4,500 sq ft", sqft: 8000, hint: "Commercial / industrial" }
];

const CONDITIONS: { value: string; label: string; hint: string; add: number; prepDays: number }[] = [
  { value: "new-wall", label: "New wall (never painted)", hint: "Needs sealer primer only", add: 0.03, prepDays: 0.1 },
  { value: "excellent", label: "Excellent — smooth & clean", hint: "Straight repaint", add: -0.05, prepDays: 0 },
  { value: "good", label: "Good — minor marks", hint: "Light sanding and patching", add: 0, prepDays: 0.05 },
  { value: "previously-painted", label: "Previously painted, sound", hint: "Standard overcoat", add: 0, prepDays: 0.05 },
  { value: "old-wall", label: "Old wall, chalky finish", hint: "Needs binding primer", add: 0.06, prepDays: 0.1 },
  { value: "minor-cracks", label: "Minor hairline cracks", hint: "Filler and spot skim", add: 0.07, prepDays: 0.15 },
  { value: "heavy-cracks", label: "Heavy / structural cracks", hint: "Route, fill and reinforce", add: 0.16, prepDays: 0.3 },
  { value: "peeling", label: "Peeling / flaking paint", hint: "Scrape back to sound substrate", add: 0.14, prepDays: 0.28 },
  { value: "water-damage", label: "Water damage / stains", hint: "Stain block plus source check", add: 0.16, prepDays: 0.3 },
  { value: "mould", label: "Mould / fungus growth", hint: "Fungicidal wash before coating", add: 0.13, prepDays: 0.25 },
  { value: "uneven", label: "Uneven / wavy surface", hint: "Levelling compound", add: 0.12, prepDays: 0.25 },
  { value: "bare-cement", label: "Bare cement / plaster", hint: "Full primer system", add: 0.09, prepDays: 0.15 },
  { value: "rusty-metal", label: "Rusty metal surface", hint: "De-rust plus anti-rust primer", add: 0.18, prepDays: 0.3 }
];

const EXTRA_PREP: { value: string; label: string; hint: string }[] = [
  { value: "skim-coat", label: "Requires skim coat", hint: "Full-surface levelling for a glass-smooth finish" },
  { value: "waterproofing", label: "Requires waterproofing", hint: "Damp or leaking wall must be sealed first" },
  { value: "mould-treatment", label: "Mould treatment", hint: "Fungicidal wash and anti-fungal primer" },
  { value: "crack-repair", label: "Crack routing & filling", hint: "Structural or settlement cracks" },
  { value: "wallpaper-removal", label: "Wallpaper / old coating removal", hint: "Strip back before painting" },
  { value: "furniture-shift", label: "Heavy furniture shifting", hint: "Move and re-position large items" }
];

const PAINT_GRADES: { value: string; label: string; hint: string; add: number; materialShare: number }[] = [
  { value: "economy", label: "Economy", hint: "Budget emulsion, 2 coats", add: -0.1, materialShare: 0.26 },
  { value: "standard", label: "Standard", hint: "Nippon / Dulux mid range", add: 0, materialShare: 0.32 },
  { value: "premium", label: "Premium", hint: "Washable, stain-resistant range", add: 0.12, materialShare: 0.38 },
  { value: "luxury", label: "Luxury", hint: "Top-tier finish, designer colours", add: 0.24, materialShare: 0.44 }
];

const PAINT_FEATURES: { value: string; label: string; add: number }[] = [
  { value: "low-voc", label: "Low VOC", add: 0.03 },
  { value: "odourless", label: "Odourless", add: 0.03 },
  { value: "washable", label: "Washable / scrub-resistant", add: 0.04 },
  { value: "anti-mould", label: "Anti-mould", add: 0.04 },
  { value: "weather-resistant", label: "Weather resistant", add: 0.05 },
  { value: "premium-exterior", label: "Premium exterior system", add: 0.07 },
  { value: "heat-reflective", label: "Heat reflective", add: 0.08 },
  { value: "anti-rust", label: "Anti-rust / metal primer", add: 0.06 }
];

const COLOURS: { value: string; label: string; hint: string; add: number }[] = [
  { value: "same", label: "Same colour", hint: "Straight refresh, best coverage", add: -0.02 },
  { value: "light", label: "Light colour", hint: "Standard 2-coat coverage", add: 0 },
  { value: "dark", label: "Dark colour", hint: "Usually needs a third coat", add: 0.07 },
  { value: "multiple", label: "Multiple colours", hint: "Extra masking and cut-in time", add: 0.06 },
  { value: "accent", label: "Accent wall feature", hint: "One highlighted wall", add: 0.03 }
];

const ACCESS: { value: string; label: string; hint: string; add: number }[] = [
  { value: "easy", label: "Easy access — ground floor", hint: "Standard ladder work", add: 0 },
  { value: "first-floor", label: "First floor", hint: "Light staging", add: 0.05 },
  { value: "second-floor", label: "Second floor", hint: "Extended ladders", add: 0.1 },
  { value: "high-rise", label: "High rise unit", hint: "Lift booking and floor protection", add: 0.12 },
  { value: "scaffold", label: "Requires scaffold", hint: "Scaffold erection and dismantling", add: 0.2 },
  { value: "rope-access", label: "Requires rope access", hint: "Certified abseil crew", add: 0.38 },
  { value: "difficult", label: "Difficult / tight access", hint: "Restricted working space", add: 0.12 }
];

const URGENCY: { value: string; label: string; hint: string; add: number }[] = [
  { value: "standard", label: "Standard schedule", hint: "Next available slot", add: 0 },
  { value: "7-days", label: "Within 7 days", hint: "Priority scheduling", add: 0.05 },
  { value: "urgent", label: "Urgent — 48 hours", hint: "Crew reshuffled for you", add: 0.14 },
  { value: "emergency", label: "Emergency / same day", hint: "Immediate dispatch", add: 0.25 }
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function pickAdd<T extends { value: string; add: number }>(table: T[], value: unknown): number {
  return table.find((row) => row.value === value)?.add ?? 0;
}

function asArray(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : [];
}

function num(value: unknown, fallback: number): number {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function bandFor(target: Target): Range {
  return target.band === "exterior" ? RATES.painting.exteriorSqft : RATES.painting.interiorSqft;
}

function paintedArea(target: Target, answers: Answers): { area: number; basis: string } {
  if (target.sizing === "item") {
    const count = num(answers.itemCount, 1);
    const perItem = target.itemArea ?? 40;
    return {
      area: count * perItem,
      basis: `${count} × ${target.itemNoun ?? "unit"} (≈ ${perItem} sq ft painted face each)`
    };
  }

  if (target.sizing === "property") {
    const size = PROPERTY_SIZES.find((row) => row.value === answers.propertySize) ?? PROPERTY_SIZES[2];
    const factor = target.areaFactor ?? 2.9;
    return {
      area: size.sqft * factor,
      basis: `${size.sqft.toLocaleString()} sq ft built-up × ${factor} paintable-surface factor`
    };
  }

  const preset = answers.areaPreset;
  if (preset === "custom") {
    const length = num(answers.customLength, 12);
    const width = num(answers.customWidth, 12);
    const height = num(answers.customHeight, 10);
    if (target.value === "ceiling") {
      return { area: length * width, basis: `${length} × ${width} ft ceiling` };
    }
    const wall = 2 * (length + width) * height;
    const area = target.value === "single-room" ? wall + length * width : wall;
    return {
      area,
      basis:
        target.value === "single-room"
          ? `${length} × ${width} ft room, ${height} ft ceiling — walls + ceiling`
          : `${length} × ${width} ft room, ${height} ft ceiling — wall surface`
    };
  }

  const row = AREA_PRESETS.find((item) => item.value === preset) ?? AREA_PRESETS[2];
  const side = Math.sqrt(row.sqft);
  const height = num(answers.customHeight, 10);
  if (target.value === "ceiling") return { area: row.sqft, basis: `${row.label} ceiling` };
  const wall = 4 * side * height;
  const area = target.value === "single-room" ? wall + row.sqft : wall;
  return {
    area,
    basis:
      target.value === "single-room"
        ? `${row.label} room at ${height} ft height — walls + ceiling`
        : `${row.label} room at ${height} ft height — wall surface`
  };
}

function durationLabel(days: number): string {
  if (days <= 0.45) return "Half day (3–4 hours)";
  if (days <= 1.1) return "1 working day";
  if (days <= 2.2) return "1–2 working days";
  if (days <= 3.5) return "2–3 working days";
  if (days <= 5.5) return "4–5 working days";
  if (days <= 8) return "About 1 working week";
  if (days <= 13) return "1–2 working weeks";
  return `About ${Math.ceil(days / 5)} working weeks`;
}

/* ── Compute ─────────────────────────────────────────────────────────────── */

export function computePainting(answers: Answers): EstimateResult {
  const target = targetMap.get(String(answers.target)) ?? PAINT_TARGETS[0];
  const { area, basis } = paintedArea(target, answers);
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
    { label: "Painted area", value: `${Math.round(area).toLocaleString()} sq ft`, note: basis },
    {
      label: "Applied rate",
      value: `RM ${baseRate.toFixed(2)} / sq ft`,
      note: `Published band RM ${band.low.toFixed(2)}–RM ${band.high.toFixed(2)} / sq ft for ${target.band} work`
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
      label: "Skim coat preparation",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: `${Math.round(area).toLocaleString()} sq ft × published RM ${rate} / sq ft skim-coat rate`
    });
  }

  if (extraPrep.includes("crack-repair") || conditionRow.value === "heavy-cracks") {
    // Crack length scales with the square root of the area (perimeter-like).
    const linearFt = Math.max(6, Math.round(Math.sqrt(area) * 1.6));
    const cost = linearFt * RATES.painting.crackLinearFt;
    prepTotal += cost;
    breakdown.push({
      label: "Crack routing & filling",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: `≈ ${linearFt} linear ft × published RM ${RATES.painting.crackLinearFt} / linear ft`
    });
  }

  if (extraPrep.includes("waterproofing") || conditionRow.value === "water-damage") {
    const cost = RATES.painting.dampRemedial;
    prepTotal += cost;
    breakdown.push({
      label: "Damp / waterproofing remedial",
      value: `RM ${cost.toLocaleString()}`,
      note: `Published wall dampness & efflorescence repair rate`
    });
  }

  if (extraPrep.includes("mould-treatment") || conditionRow.value === "mould") {
    const cost = RATES.painting.dampRemedial * 0.6;
    prepTotal += cost;
    breakdown.push({
      label: "Mould treatment",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: "Fungicidal wash and anti-fungal primer"
    });
  }

  if (extraPrep.includes("wallpaper-removal")) {
    const cost = area * RATES.painting.skimWallSqft * 0.4;
    prepTotal += cost;
    breakdown.push({
      label: "Old coating / wallpaper removal",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: "Strip-back labour before priming"
    });
  }

  if (extraPrep.includes("furniture-shift")) {
    const cost = RATES.painting.callOut;
    prepTotal += cost;
    breakdown.push({
      label: "Furniture shifting & protection",
      value: `RM ${cost.toLocaleString()}`,
      note: "Published handyman task rate"
    });
  }

  if (conditionRow.value === "peeling" || conditionRow.value === "rusty-metal") {
    const cost = RATES.painting.repairMinimum;
    prepTotal += cost;
    breakdown.push({
      label: conditionRow.value === "rusty-metal" ? "De-rust & anti-rust priming" : "Scrape back & re-prime",
      value: `RM ${cost.toLocaleString()}`,
      note: "Published wall crack & moisture repair rate"
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
      label: "Minimum job value applied",
      value: `RM ${floorValue.toLocaleString()}`,
      note:
        target.floor === "exterior"
          ? `Published exterior starting price (${priceLabel("painting.exterior")})`
          : target.floor === "room"
            ? `Published interior starting price (${priceLabel("painting.interior")})`
            : `Published small-works starting price (${priceLabel("painting.repair")})`
    });
  }

  // Customer-supplied paint removes the paint portion of materials.
  const customerSupplies = answers.paintSupply === "customer";
  if (customerSupplies) {
    const saving = total * gradeRow.materialShare * 0.75;
    total -= saving;
    breakdown.push({
      label: "You supply the paint",
      value: `− RM ${roundMoney(saving).toLocaleString()}`,
      note: "Paint cost removed; consumables and labour retained"
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
      ? "Luxury Finish Package"
      : gradeRow.value === "premium"
        ? "Premium Protection Package"
        : gradeRow.value === "economy"
          ? "Value Refresh Package"
          : "Standard Repaint Package";

  /* ── Add-ons, all priced from published rates ── */
  const addOns: AddOn[] = [];
  if (target.value !== "ceiling" && target.sizing !== "item") {
    addOns.push({
      id: "ceiling-refresh",
      label: "Add ceiling repaint",
      price: roundMoney(
        (target.sizing === "property"
          ? (PROPERTY_SIZES.find((row) => row.value === answers.propertySize)?.sqft ?? 1200) * 0.85
          : area * 0.32) * withinBand(RATES.painting.interiorSqft, 0.42)
      ),
      note: "Same visit, same protection setup",
      recommended: target.value === "interior-walls"
    });
  }
  addOns.push({
    id: "crack-package",
    label: "Wall crack & moisture repair package",
    price: RATES.painting.repairMinimum,
    note: `Published rate: ${priceLabel("painting.repair")}`,
    recommended: ["minor-cracks", "heavy-cracks", "water-damage"].includes(conditionRow.value)
  });
  addOns.push({
    id: "skim-upgrade",
    label: "Full skim-coat upgrade (glass-smooth finish)",
    price: roundMoney(area * RATES.painting.skimWallSqft),
    note: `Published rate: ${priceLabel("skim.wall")}`,
    recommended: conditionRow.value === "uneven" && !extraPrep.includes("skim-coat")
  });
  addOns.push({
    id: "waterproof-addon",
    label: "Damp wall waterproofing treatment",
    price: RATES.painting.dampRemedial,
    note: `Published rate: ${priceLabel("waterproofing.wallDamp")}`,
    recommended: conditionRow.value === "water-damage" && !extraPrep.includes("waterproofing")
  });
  addOns.push({
    id: "post-clean",
    label: "Post-painting cleaning",
    price: RATES.painting.cleaning,
    note: `Published rate: from RM ${RATES.painting.cleaning} per visit`,
    recommended: area > 900
  });
  if (target.band === "exterior" || target.value === "metal-fence" || target.value === "main-gate") {
    addOns.push({
      id: "gate-grille",
      label: "Gate & grille anti-rust repaint",
      price: roundMoney(90 * withinBand(RATES.painting.exteriorSqft, 0.8) * 1.3),
      note: "Rust treatment plus two protective coats",
      recommended: false
    });
  }

  const related = [
    { label: "House Painting Service", href: "/services/painting", desc: "Full scope, warranty and process" },
    { label: "Painting Cost Guide", href: "/services/painting/cost", desc: "Published 2026 market rates" },
    { label: "Skim Coat & Wall Levelling", href: "/services/skim-coat", desc: "For uneven or patched walls" },
    { label: "Waterproofing", href: "/services/waterproofing", desc: "Fix damp before painting" },
    { label: "Plaster Ceiling", href: "/services/plaster-ceiling", desc: "Repair before ceiling repaint" }
  ];

  const articles = [
    { label: "5 Tips for Choosing Paint Colours in Malaysia", href: "/blog/5-tips-choosing-paint-colors-malaysia" },
    { label: "When Should You Repaint Your House?", href: "/blog/when-to-repaint-your-house-malaysia" },
    { label: "Repaint Condo vs Terrace House", href: "/blog/when-to-repaint-condo-vs-repaint-terrace-house" }
  ];

  const assumptions = [
    "Two topcoats over prepared and primed surfaces, unless a third coat is required by the colour change.",
    "Furniture protection, masking and daily clean-up are included in the labour figure.",
    minimumApplied
      ? "Your scope is below our minimum job value, so the published starting price applies."
      : "Rate reflects the measured surface area you selected, not floor area."
  ];
  if (target.sizing === "property") {
    assumptions.push("Built-up area is converted to paintable surface using a standard Klang Valley factor; a site measure confirms the exact figure.");
  }
  if (customerSupplies) {
    assumptions.push("You supply the paint; we confirm the required litres before the job starts.");
  }
  if (["factory", "warehouse", "commercial-building"].includes(target.value)) {
    assumptions.push("Commercial and industrial scopes are confirmed after an access and safety survey.");
  }

  return {
    price,
    low,
    high,
    labour,
    materials,
    duration: durationLabel(days),
    recommendedService: target.service,
    packageName,
    serviceHref: target.serviceHref,
    breakdown,
    addOns,
    related,
    articles,
    maintenance: [
      "Wash exterior walls yearly before the monsoon to stop fungal build-up.",
      "Touch up hairline cracks early — filling them costs far less than a full re-skim.",
      "Keep 1 litre of the final colour for touch-ups; we label it for you on handover."
    ],
    assumptions
  };
}

/* ── Spec ────────────────────────────────────────────────────────────────── */

const targetChoices = PAINT_TARGETS.map((target) => ({
  value: target.value,
  label: target.label,
  icon: target.icon,
  hint: target.note
}));

export const paintingSpec: EstimatorSpec = {
  slug: "painting-calculator",
  name: "Painting Cost Calculator",
  serviceSlug: "painting",
  resultLabel: "Estimated painting cost",
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
      title: "What do you want to paint?",
      subtitle: "Pick the surface, item or property type — we price each differently.",
      icon: "🎯",
      fields: [
        {
          id: "target",
          kind: "select",
          label: "Painting scope",
          required: true,
          choices: targetChoices,
          help: "Choose the closest match. You can add more scopes on WhatsApp after the estimate."
        }
      ]
    },
    {
      id: "area",
      title: "How big is the area?",
      subtitle: "Tap a common size — no measuring tape needed.",
      icon: "📐",
      fields: [
        {
          id: "areaPreset",
          kind: "cards",
          label: "Room size",
          required: true,
          visible: (answers) => (targetMap.get(String(answers.target))?.sizing ?? "surface") === "surface",
          choices: AREA_PRESETS.map((row) => ({
            value: row.value,
            label: row.label,
            hint: row.hint,
            popular: row.value === "10x12"
          }))
        },
        {
          id: "customLength",
          kind: "number",
          label: "Length",
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
          label: "Width",
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
          label: "Ceiling height",
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
          label: "Property built-up size",
          required: true,
          visible: (answers) => targetMap.get(String(answers.target))?.sizing === "property",
          choices: PROPERTY_SIZES.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        },
        {
          id: "itemCount",
          kind: "slider",
          label: "How many units?",
          min: 1,
          max: 40,
          step: 1,
          defaultValue: 2,
          visible: (answers) => targetMap.get(String(answers.target))?.sizing === "item",
          format: (value) => `${value} unit${value > 1 ? "s" : ""}`
        }
      ]
    },
    {
      id: "condition",
      title: "What condition is the surface in?",
      subtitle: "Preparation is what makes paint last — be honest here for an accurate number.",
      icon: "🔍",
      fields: [
        {
          id: "condition",
          kind: "select",
          label: "Overall surface condition",
          required: true,
          choices: CONDITIONS.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        },
        {
          id: "extraPrep",
          kind: "multi",
          label: "Any extra preparation needed?",
          help: "Optional — select all that apply.",
          choices: EXTRA_PREP.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        }
      ]
    },
    {
      id: "paint",
      title: "Which paint system do you want?",
      subtitle: "We use genuine Nippon, Dulux and Jotun products across every grade.",
      icon: "🪣",
      fields: [
        {
          id: "grade",
          kind: "cards",
          label: "Paint grade",
          required: true,
          choices: PAINT_GRADES.map((row) => ({
            value: row.value,
            label: row.label,
            hint: row.hint,
            popular: row.value === "standard"
          }))
        },
        {
          id: "features",
          kind: "multi",
          label: "Paint features you want",
          help: "Optional — each feature is matched to a real product line.",
          choices: PAINT_FEATURES.map((row) => ({ value: row.value, label: row.label }))
        },
        {
          id: "paintSupply",
          kind: "cards",
          label: "Who supplies the paint?",
          columns: 2,
          choices: [
            { value: "include", label: "Include paint in the quote", hint: "We buy and deliver", popular: true },
            { value: "customer", label: "I will supply the paint", hint: "Labour and consumables only" }
          ]
        }
      ]
    },
    {
      id: "colour",
      title: "What colour direction?",
      subtitle: "Colour affects coverage — dark shades usually need an extra coat.",
      icon: "🎨",
      fields: [
        {
          id: "colour",
          kind: "cards",
          label: "Colour preference",
          required: true,
          choices: COLOURS.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        }
      ]
    },
    {
      id: "access",
      title: "How easy is site access?",
      subtitle: "Height and access drive the safety equipment we bring.",
      icon: "🪜",
      fields: [
        {
          id: "access",
          kind: "select",
          label: "Access level",
          required: true,
          choices: ACCESS.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        }
      ]
    },
    {
      id: "urgency",
      title: "When do you need it done?",
      subtitle: "Standard scheduling keeps the price lowest.",
      icon: "⏱️",
      fields: [
        {
          id: "urgency",
          kind: "cards",
          label: "Preferred timing",
          required: true,
          choices: URGENCY.map((row) => ({
            value: row.value,
            label: row.label,
            hint: row.hint,
            popular: row.value === "standard"
          }))
        }
      ]
    }
  ],
  compute: computePainting
};
