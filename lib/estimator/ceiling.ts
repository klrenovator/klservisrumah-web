/**
 * Ceiling Repair & Installation Estimator.
 *
 * Rates come from the published plaster-ceiling and ceiling sub-service prices.
 */

import { RATES, clamp, roundMoney, priceLabel, withinBand } from "./pricing";
import type { AddOn, Answers, EstimateResult, EstimatorSpec } from "./types";

type CeilingType = {
  value: string;
  label: string;
  icon: string;
  hint: string;
  /** Multiplier on the published plaster-ceiling sq ft rate. */
  factor: number;
  repairable: boolean;
};

export const CEILING_TYPES: CeilingType[] = [
  { value: "gypsum", label: "Gypsum board", icon: "⬜", hint: "Most common in condos & new homes", factor: 1, repairable: true },
  { value: "plaster", label: "Plaster ceiling", icon: "🔲", hint: "Skim-finished plasterboard", factor: 1.02, repairable: true },
  { value: "pvc", label: "PVC panel", icon: "🧊", hint: "Moisture-resistant strip ceiling", factor: 0.85, repairable: true },
  { value: "calcium-silicate", label: "Calcium silicate", icon: "🧱", hint: "Fire & moisture resistant board", factor: 1.18, repairable: true },
  { value: "wood", label: "Timber / wood", icon: "🪵", hint: "Timber strip or plywood ceiling", factor: 1.35, repairable: true },
  { value: "cement-board", label: "Cement board", icon: "🪨", hint: "Wet-area / external soffit", factor: 1.22, repairable: true },
  { value: "not-sure", label: "Not sure", icon: "❓", hint: "We identify it on site", factor: 1.05, repairable: true }
];

const typeMap = new Map(CEILING_TYPES.map((row) => [row.value, row]));

const WORK_TYPES: { value: string; label: string; icon: string; hint: string }[] = [
  { value: "repair", label: "Repair existing ceiling", icon: "🩹", hint: "Patch, re-skim or replace a section" },
  { value: "replace-section", label: "Replace a section", icon: "🔁", hint: "Cut out and rebuild damaged boards" },
  { value: "new-flat", label: "New flat ceiling", icon: "⬜", hint: "Clean single-level design" },
  { value: "new-tiered", label: "New tiered / L-box ceiling", icon: "🪄", hint: "Concealed LED trough design" },
  { value: "new-cove", label: "New cove / curved ceiling", icon: "🌙", hint: "Custom curved feature" },
  { value: "partition", label: "Gypsum partition wall", icon: "🚧", hint: "Divide a room or office" }
];

const AREA_PRESETS: { value: string; label: string; sqft: number; hint: string }[] = [
  { value: "small-patch", label: "Small patch (up to 20 sq ft)", sqft: 20, hint: "One damaged spot" },
  { value: "8x10", label: "8 × 10 ft", sqft: 80, hint: "Small bedroom" },
  { value: "10x10", label: "10 × 10 ft", sqft: 100, hint: "Standard bedroom" },
  { value: "10x12", label: "10 × 12 ft", sqft: 120, hint: "Master bedroom" },
  { value: "12x15", label: "12 × 15 ft", sqft: 180, hint: "Living hall" },
  { value: "15x20", label: "15 × 20 ft", sqft: 300, hint: "Large hall" },
  { value: "20x25", label: "20 × 25 ft", sqft: 500, hint: "Open-plan / shop lot" },
  { value: "custom", label: "Custom size", sqft: 0, hint: "Enter your own measurements" }
];

const DAMAGE: { value: string; label: string; hint: string; add: number }[] = [
  { value: "none", label: "No damage — new installation", hint: "Fresh build", add: 0 },
  { value: "hairline", label: "Hairline cracks only", hint: "Cosmetic joint movement", add: 0.05 },
  { value: "cracks", label: "Visible cracks", hint: "Joint tape failure", add: 0.12 },
  { value: "stains", label: "Water stains", hint: "Past or current leak", add: 0.15 },
  { value: "sagging", label: "Sagging boards", hint: "Fixings or frame failing", add: 0.3 },
  { value: "hole", label: "Hole or broken board", hint: "Impact or access cut", add: 0.22 },
  { value: "collapsed", label: "Partially collapsed", hint: "Board has come down", add: 0.45 },
  { value: "mould", label: "Mould growth", hint: "Sustained damp", add: 0.2 }
];

const EXTRAS: { value: string; label: string; hint: string }[] = [
  { value: "water-damage", label: "Active water damage", hint: "Leak source must be treated first" },
  { value: "paint", label: "Paint the ceiling after", hint: "Two coats, matched to your wall colour" },
  { value: "lighting-removal", label: "Remove & reinstall lighting", hint: "Downlights, pendants or track" },
  { value: "fan-removal", label: "Remove & reinstall ceiling fan", hint: "Includes hook check" },
  { value: "cornice", label: "Add cornice / moulding", hint: "Decorative perimeter trim" },
  { value: "insulation", label: "Add insulation layer", hint: "Heat and sound reduction" },
  { value: "debris", label: "Debris disposal needed", hint: "Old boards carted away" }
];

const HEIGHTS: { value: string; label: string; hint: string; add: number }[] = [
  { value: "standard", label: "Standard (up to 10 ft)", hint: "Normal step ladder", add: 0 },
  { value: "tall", label: "Tall (10 – 14 ft)", hint: "Extended platform", add: 0.1 },
  { value: "void", label: "Double volume / void", hint: "Scaffold tower required", add: 0.28 }
];

const URGENCY: { value: string; label: string; hint: string; add: number }[] = [
  { value: "standard", label: "Standard schedule", hint: "Next available slot", add: 0 },
  { value: "7-days", label: "Within 7 days", hint: "Priority scheduling", add: 0.05 },
  { value: "urgent", label: "Urgent — 48 hours", hint: "Crew reshuffled for you", add: 0.14 },
  { value: "emergency", label: "Emergency — sagging risk", hint: "Same-day make-safe", add: 0.25 }
];

function asArray(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : [];
}

function num(value: unknown, fallback: number): number {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function resolveArea(answers: Answers): { area: number; basis: string } {
  if (answers.areaPreset === "custom") {
    const length = num(answers.customLength, 12);
    const width = num(answers.customWidth, 12);
    return { area: length * width, basis: `${length} × ${width} ft` };
  }
  const row = AREA_PRESETS.find((item) => item.value === answers.areaPreset) ?? AREA_PRESETS[2];
  return { area: row.sqft, basis: row.label };
}

export function computeCeiling(answers: Answers): EstimateResult {
  const type = typeMap.get(String(answers.ceilingType)) ?? CEILING_TYPES[0];
  const work = String(answers.workType ?? "repair");
  const { area, basis } = resolveArea(answers);
  const damage = DAMAGE.find((row) => row.value === answers.damage) ?? DAMAGE[1];
  const extras = asArray(answers.extras);
  const height = HEIGHTS.find((row) => row.value === answers.height) ?? HEIGHTS[0];
  const urgency = URGENCY.find((row) => row.value === answers.urgency) ?? URGENCY[0];

  const breakdown: { label: string; value: string; note?: string }[] = [
    { label: "Ceiling area", value: `${Math.round(area).toLocaleString()} sq ft`, note: basis }
  ];

  let baseRate: number;
  let rateNote: string;
  let recommendedService: string;
  let serviceHref = "/services/plaster-ceiling";
  let packageName: string;

  switch (work) {
    case "new-flat":
      baseRate = RATES.ceiling.flatSqft;
      rateNote = `Published rate: ${priceLabel("plasterCeiling.flat")}`;
      recommendedService = "Flat Plaster Ceiling Installation";
      packageName = "Flat Ceiling Package";
      break;
    case "new-tiered":
      baseRate = RATES.ceiling.tieredSqft;
      rateNote = `Published rate: ${priceLabel("plasterCeiling.tiered")}`;
      recommendedService = "Tiered & L-Box Ceiling Installation";
      packageName = "L-Box Design Package";
      break;
    case "new-cove":
      baseRate = RATES.ceiling.coveSqft;
      rateNote = `Published rate: ${priceLabel("plasterCeiling.cove")}`;
      recommendedService = "Cove & Curved Ceiling Installation";
      packageName = "Feature Ceiling Package";
      break;
    case "partition":
      baseRate = RATES.ceiling.partitionSqft;
      rateNote = `Published rate: ${priceLabel("ceiling.partition")}`;
      recommendedService = "Gypsum Board Partition Wall";
      serviceHref = "/services/ceiling";
      packageName = "Partition Package";
      break;
    case "replace-section":
      baseRate = withinBand(RATES.ceiling.installBand, 0.45);
      rateNote = `Published installation band RM ${RATES.ceiling.installBand.low}–RM ${RATES.ceiling.installBand.high} / sq ft`;
      recommendedService = "Ceiling Section Replacement";
      serviceHref = "/services/ceiling";
      packageName = "Section Replacement Package";
      break;
    default:
      baseRate = RATES.ceiling.reskimSqft;
      rateNote = `Published rate: ${priceLabel("plasterCeiling.reskim")}`;
      recommendedService = "Plaster Ceiling Repair & Re-Skim";
      serviceHref = "/services/ceiling";
      packageName = "Repair & Re-Skim Package";
  }

  const rate = baseRate * type.factor * (1 + damage.add);
  breakdown.push({
    label: "Applied rate",
    value: `RM ${rate.toFixed(2)} / sq ft`,
    note: `${rateNote} · ${type.label} factor ×${type.factor} · ${damage.label}`
  });

  let total = area * rate * (1 + height.add) * (1 + urgency.add);

  // Separately-priced extras, each from a published rate.
  if (extras.includes("water-damage")) {
    const cost = RATES.waterproofing.puPoint;
    total += cost;
    breakdown.push({
      label: "Leak source treatment",
      value: `RM ${cost.toLocaleString()}`,
      note: `Published rate: ${priceLabel("waterproofing.pu")} — the source is sealed before reinstatement`
    });
  }

  if (extras.includes("paint")) {
    const cost = area * withinBand(RATES.painting.interiorSqft, 0.42);
    total += cost;
    breakdown.push({
      label: "Ceiling painting",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: `${Math.round(area)} sq ft × published interior painting band`
    });
  }

  const lightCount = num(answers.lightCount, 0);
  if (extras.includes("lighting-removal") && lightCount > 0) {
    const cost = lightCount * RATES.ceiling.downlightPoint * 0.5;
    total += cost;
    breakdown.push({
      label: "Lighting removal & reinstatement",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: `${lightCount} point${lightCount > 1 ? "s" : ""} at half the published ${priceLabel("lighting.downlight")} rate`
    });
  }

  if (extras.includes("fan-removal")) {
    const cost = RATES.ceiling.fanPoint * 0.6;
    total += cost;
    breakdown.push({
      label: "Ceiling fan removal & refit",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: `Derived from published ${priceLabel("ceilingFan.install")}`
    });
  }

  if (extras.includes("cornice")) {
    const perimeter = Math.max(20, Math.round(Math.sqrt(area) * 4));
    const cost = perimeter * RATES.ceiling.flatSqft * 0.65;
    total += cost;
    breakdown.push({
      label: "Cornice / decorative moulding",
      value: `RM ${roundMoney(cost).toLocaleString()}`,
      note: `≈ ${perimeter} linear ft perimeter`
    });
  }

  if (extras.includes("insulation")) {
    const cost = area * RATES.ceiling.flatSqft * 0.25;
    total += cost;
    breakdown.push({ label: "Insulation layer", value: `RM ${roundMoney(cost).toLocaleString()}`, note: "Rockwool / foil-backed layer above the boards" });
  }

  if (extras.includes("debris")) {
    const cost = RATES.handyman.callOut;
    total += cost;
    breakdown.push({
      label: "Debris disposal",
      value: `RM ${cost.toLocaleString()}`,
      note: "Published handyman task rate"
    });
  }

  // Minimum engagement from the published repair starting price.
  let minimumApplied = false;
  if (total < RATES.ceiling.repairMinimum) {
    total = RATES.ceiling.repairMinimum;
    minimumApplied = true;
    breakdown.push({
      label: "Minimum job value applied",
      value: `RM ${RATES.ceiling.repairMinimum.toLocaleString()}`,
      note: `Published starting price: ${priceLabel("ceiling.repair")}`
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
      ? "Half day (3–4 hours)"
      : days <= 1.2
        ? "1 working day"
        : days <= 2.5
          ? "1–2 working days"
          : days <= 4.5
            ? "3–4 working days"
            : `About ${Math.ceil(days)} working days`;

  const addOns: AddOn[] = [
    {
      id: "ceiling-paint",
      label: "Paint the finished ceiling",
      price: roundMoney(area * withinBand(RATES.painting.interiorSqft, 0.42)),
      note: "Two coats over the new surface",
      recommended: !extras.includes("paint")
    },
    {
      id: "downlights",
      label: "New LED downlight points",
      price: RATES.ceiling.downlightPoint,
      note: `Published rate: ${priceLabel("lighting.downlight")} per point`,
      recommended: work.startsWith("new")
    },
    {
      id: "cove-lighting",
      label: "Concealed cove LED strip",
      price: roundMoney(Math.max(20, Math.sqrt(area) * 4) * RATES.handyman.lightPoint * 0.2),
      note: `Derived from published cove & strip LED rate`,
      recommended: work === "new-tiered" || work === "new-cove"
    },
    {
      id: "waterproof-source",
      label: "Waterproofing the leak source",
      price: RATES.waterproofing.puPoint,
      note: `Published rate: ${priceLabel("waterproofing.pu")}`,
      recommended: (damage.value === "stains" || damage.value === "mould") && !extras.includes("water-damage")
    },
    {
      id: "post-clean",
      label: "Post-works cleaning",
      price: RATES.handyman.callOut,
      note: "Dust sheeting removal and full vacuum",
      recommended: area > 200
    }
  ];

  const assumptions = [
    "Rate assumes a standard GI framing grid at normal spacing over an accessible ceiling void.",
    "Existing wiring, air-cond piping and sprinkler heads are worked around, not relocated.",
    minimumApplied
      ? "Your scope is below our minimum job value, so the published starting price applies."
      : "Board and skim material is included in the sq ft rate."
  ];
  if (damage.value === "sagging" || damage.value === "collapsed") {
    assumptions.push("Sagging or collapsed ceilings are made safe first; the final scope is confirmed once the void is opened.");
  }

  return {
    price,
    low,
    high,
    labour,
    materials,
    duration,
    recommendedService,
    packageName,
    serviceHref,
    breakdown,
    addOns,
    related: [
      { label: "Plaster Ceiling Service", href: "/services/plaster-ceiling", desc: "Flat, tiered and cove designs" },
      { label: "Ceiling Repair", href: "/services/ceiling", desc: "Water damage and partitions" },
      { label: "Ceiling Cost Guide", href: "/services/ceiling/cost", desc: "Published 2026 rates" },
      { label: "Lighting Installation", href: "/services/lighting", desc: "Downlights and cove strips" },
      { label: "Waterproofing", href: "/services/waterproofing", desc: "Stop the leak above the ceiling" }
    ],
    articles: [
      { label: "Gypsum vs Plaster Ceiling in Malaysia", href: "/blog/gypsum-vs-plaster-ceiling-malaysia" },
      { label: "How to Fix a Leaking Ceiling Without Tile Hacking", href: "/blog/how-to-fix-leaking-ceiling-without-tile-hacking" }
    ],
    maintenance: [
      "Inspect ceiling joints after heavy monsoon rain — early stains are cheap to treat.",
      "Keep the ceiling void ventilated to prevent condensation from air-cond piping.",
      "Re-skim and repaint every 5–7 years to keep joints invisible."
    ],
    assumptions
  };
}

export const ceilingSpec: EstimatorSpec = {
  slug: "ceiling-calculator",
  name: "Ceiling Repair Estimator",
  serviceSlug: "ceiling",
  resultLabel: "Estimated ceiling cost",
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
      title: "What type of ceiling?",
      subtitle: "Not sure? Pick the last option and we will identify it on site.",
      icon: "🏗️",
      fields: [
        {
          id: "ceilingType",
          kind: "cards",
          label: "Ceiling material",
          required: true,
          choices: CEILING_TYPES.map((row) => ({ value: row.value, label: row.label, icon: row.icon, hint: row.hint }))
        }
      ]
    },
    {
      id: "work",
      title: "What do you need done?",
      subtitle: "Repair, replacement or a brand-new design.",
      icon: "🛠️",
      fields: [
        {
          id: "workType",
          kind: "cards",
          label: "Type of work",
          required: true,
          choices: WORK_TYPES.map((row) => ({ value: row.value, label: row.label, icon: row.icon, hint: row.hint }))
        }
      ]
    },
    {
      id: "area",
      title: "How big is the area?",
      subtitle: "Tap the closest size — no measuring needed.",
      icon: "📐",
      fields: [
        {
          id: "areaPreset",
          kind: "cards",
          label: "Ceiling / partition area",
          required: true,
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
          min: 2,
          max: 200,
          defaultValue: 12,
          visible: (answers) => answers.areaPreset === "custom"
        },
        {
          id: "customWidth",
          kind: "number",
          label: "Width",
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
      title: "What is the condition?",
      subtitle: "Damage level drives how much of the frame we have to rebuild.",
      icon: "🔍",
      fields: [
        {
          id: "damage",
          kind: "select",
          label: "Damage level",
          required: true,
          choices: DAMAGE.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        },
        {
          id: "extras",
          kind: "multi",
          label: "Anything else included?",
          help: "Optional — select all that apply.",
          choices: EXTRAS.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        },
        {
          id: "lightCount",
          kind: "slider",
          label: "How many light fittings to remove?",
          min: 1,
          max: 30,
          step: 1,
          defaultValue: 4,
          format: (value) => `${value} fitting${value > 1 ? "s" : ""}`,
          visible: (answers) => Array.isArray(answers.extras) && (answers.extras as string[]).includes("lighting-removal")
        }
      ]
    },
    {
      id: "access",
      advanced: true,
      title: "Ceiling height & timing",
      subtitle: "Height decides the access equipment we bring.",
      icon: "🪜",
      fields: [
        {
          id: "height",
          kind: "cards",
          label: "Ceiling height",
          required: true,
          choices: HEIGHTS.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        },
        {
          id: "urgency",
          kind: "cards",
          label: "When do you need it?",
          required: true,
          choices: URGENCY.map((row) => ({ value: row.value, label: row.label, hint: row.hint, popular: row.value === "standard" }))
        }
      ]
    }
  ],
  compute: computeCeiling
};
