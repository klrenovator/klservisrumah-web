/**
 * Plumbing Diagnostic Estimator.
 *
 * All rates resolve from the published plumbing / water-heater sub-service
 * prices and validated market bands.
 */

import { RATES, clamp, roundMoney, priceLabel, withinBand } from "./pricing";
import type { AddOn, Answers, EstimateResult, EstimatorSpec, Severity } from "./types";

type Problem = {
  value: string;
  label: string;
  icon: string;
  /** Which published rate family the job belongs to. */
  family: "drain" | "leak" | "fixture" | "pressure" | "heater";
  /** Position inside that family's band (0 = simplest, 1 = hardest). */
  position: number;
  service: string;
  serviceHref: string;
  causes: string[];
  hours: number;
};

export const PLUMBING_PROBLEMS: Problem[] = [
  { value: "blocked-sink", label: "Blocked sink", icon: "🧼", family: "drain", position: 0.2, service: "Drain Unclogging & Cleaning", serviceHref: "/services/plumbing", causes: ["Grease and food waste build-up in the trap", "Partially collapsed waste pipe", "Blocked branch line shared with other fixtures"], hours: 1.5 },
  { value: "blocked-toilet", label: "Blocked toilet", icon: "🚽", family: "drain", position: 0.4, service: "Toilet Choke Clearing", serviceHref: "/services/plumbing", causes: ["Foreign object lodged in the trapway", "Blocked soil stack or manhole", "Insufficient flush volume"], hours: 1.5 },
  { value: "blocked-floor-trap", label: "Blocked floor trap", icon: "🕳️", family: "drain", position: 0.3, service: "Floor Trap & Drain Clearing", serviceHref: "/services/plumbing", causes: ["Hair and soap scum build-up", "Silt accumulation in the trap", "Damaged trap grating"], hours: 1.2 },
  { value: "outdoor-drain", label: "Blocked outdoor drain", icon: "🌧️", family: "drain", position: 0.6, service: "External Drain Clearing", serviceHref: "/services/plumbing", causes: ["Leaf and silt build-up", "Root intrusion into the line", "Broken or collapsed drain section"], hours: 2 },
  { value: "pipe-leak", label: "Pipe leak", icon: "💧", family: "leak", position: 0.5, service: "Water Leakage Diagnosis & Repair", serviceHref: "/services/plumbing", causes: ["Corroded or split pipe run", "Failed compression joint", "Excess pressure stressing fittings"], hours: 2.5 },
  { value: "concealed-leak", label: "Hidden / concealed leak", icon: "🔎", family: "leak", position: 0.85, service: "Concealed Leak Detection & Repair", serviceHref: "/services/plumbing", causes: ["Buried supply pipe failure under the slab", "Wall-embedded pipe joint leaking", "Pinhole corrosion in old GI pipework"], hours: 3.5 },
  { value: "outdoor-pipe", label: "Outdoor pipe leak", icon: "🌳", family: "leak", position: 0.55, service: "External Pipe Repair", serviceHref: "/services/plumbing", causes: ["Cracked underground supply line", "Damaged meter connection", "Failed garden tap fitting"], hours: 2.5 },
  { value: "low-pressure", label: "Low water pressure", icon: "📉", family: "pressure", position: 0.5, service: "Water Pressure Diagnosis & Booster Pump", serviceHref: "/services/plumbing", causes: ["Partially closed or seized stopcock", "Scale build-up in old galvanised pipe", "Failed pressure pump or tank float", "Hidden leak reducing line pressure"], hours: 2 },
  { value: "no-water", label: "No water at all", icon: "🚱", family: "pressure", position: 0.7, service: "Emergency Supply Restoration", serviceHref: "/services/plumbing", causes: ["Main valve closed or failed", "Empty storage tank / float valve stuck", "Pump electrical failure", "Supply interruption from the utility"], hours: 2 },
  { value: "tap-replacement", label: "Tap replacement", icon: "🚰", family: "fixture", position: 0.15, service: "Tap & Mixer Replacement", serviceHref: "/services/plumbing", causes: ["Worn cartridge or washer", "Corroded tap body", "Damaged thread seal"], hours: 1 },
  { value: "mixer-replacement", label: "Mixer / shower set replacement", icon: "🚿", family: "fixture", position: 0.35, service: "Shower Mixer Replacement", serviceHref: "/services/plumbing", causes: ["Failed thermostatic cartridge", "Corroded wall inlets", "Leaking rail or hose"], hours: 1.5 },
  { value: "toilet-repair", label: "Toilet repair / replacement", icon: "🪠", family: "fixture", position: 0.45, service: "Toilet Repair & Installation", serviceHref: "/services/plumbing", causes: ["Worn flush valve or inlet washer", "Failed flange seal at the base", "Cracked cistern"], hours: 2 },
  { value: "sink-install", label: "Kitchen sink install / repair", icon: "🍽️", family: "fixture", position: 0.4, service: "Kitchen Sink Installation", serviceHref: "/services/plumbing", causes: ["Failed sink seal or clip", "Perished waste trap", "Loose supply connector"], hours: 2 },
  { value: "bidet", label: "Bidet / hand shower install", icon: "🚽", family: "fixture", position: 0.15, service: "Bidet Spray Installation", serviceHref: "/services/plumbing", causes: ["Perished hose", "Leaking angle valve", "Worn spray head"], hours: 0.75 },
  { value: "water-heater", label: "Water heater problem", icon: "♨️", family: "heater", position: 0.5, service: "Water Heater Repair & Service", serviceHref: "/services/water-heater", causes: ["Failed heating element or thermostat", "RCCB tripping from moisture ingress", "Scale build-up reducing output", "Leaking pressure relief valve"], hours: 2 },
  { value: "heater-install", label: "New water heater installation", icon: "🔥", family: "heater", position: 0.8, service: "Water Heater Installation", serviceHref: "/services/water-heater", causes: ["Replacing an end-of-life unit", "New bathroom fit-out", "Upgrading to storage capacity"], hours: 2.5 },
  { value: "pump-install", label: "Water pump / booster install", icon: "⚙️", family: "pressure", position: 0.9, service: "Booster Pump Installation", serviceHref: "/services/plumbing", causes: ["Chronic low pressure on upper floors", "Failed existing pump", "New tank installation"], hours: 3 }
];

const problemMap = new Map(PLUMBING_PROBLEMS.map((row) => [row.value, row]));

const SEVERITY: { value: string; label: string; hint: string; add: number; urgency: number }[] = [
  { value: "minor", label: "Minor — annoying but usable", hint: "Slow drain, occasional drip", add: 0, urgency: 0 },
  { value: "moderate", label: "Moderate — affects daily use", hint: "One fixture unusable", add: 0.15, urgency: 2 },
  { value: "major", label: "Major — cannot use the room", hint: "Overflowing or fully blocked", add: 0.35, urgency: 4 },
  { value: "emergency", label: "Emergency — water everywhere", hint: "Flooding or burst pipe", add: 0.6, urgency: 7 }
];

const LOCATIONS: { value: string; label: string; icon: string; add: number }[] = [
  { value: "kitchen", label: "Kitchen", icon: "🍳", add: 0 },
  { value: "bathroom-main", label: "Main bathroom", icon: "🛁", add: 0 },
  { value: "bathroom-ensuite", label: "En-suite bathroom", icon: "🚿", add: 0.05 },
  { value: "laundry", label: "Laundry / yard", icon: "🧺", add: 0.05 },
  { value: "outdoor", label: "Outdoor / garden", icon: "🌳", add: 0.12 },
  { value: "roof-tank", label: "Roof / water tank", icon: "🛢️", add: 0.18 },
  { value: "multiple", label: "Multiple locations", icon: "🏠", add: 0.35 }
];

const HOUSE_TYPES: { value: string; label: string; icon: string; add: number }[] = [
  { value: "condo", label: "Condo / Apartment", icon: "🏢", add: 0.05 },
  { value: "terrace", label: "Terrace House", icon: "🏠", add: 0 },
  { value: "semi-d", label: "Semi-D / Bungalow", icon: "🏡", add: 0.08 },
  { value: "shop", label: "Shop Lot / Office", icon: "🏪", add: 0.12 },
  { value: "factory", label: "Factory / Warehouse", icon: "🏭", add: 0.2 }
];

const AGES: { value: string; label: string; add: number }[] = [
  { value: "new", label: "Under 5 years", add: 0 },
  { value: "mid", label: "5 – 15 years", add: 0.05 },
  { value: "older", label: "15 – 30 years", add: 0.12 },
  { value: "old", label: "Over 30 years", add: 0.2 }
];

const TIMING: { value: string; label: string; hint: string; add: number }[] = [
  { value: "standard", label: "Standard schedule", hint: "Next available slot", add: 0 },
  { value: "today", label: "Today if possible", hint: "Same-day priority", add: 0.12 },
  { value: "emergency", label: "Emergency now", hint: "Immediate dispatch", add: 0.25 },
  { value: "after-hours", label: "After hours / weekend", hint: "Outside normal window", add: 0.18 }
];

const FIXTURE_SUPPLY: { value: string; label: string; hint: string }[] = [
  { value: "include", label: "Include parts in the quote", hint: "We supply SIRIM-certified parts" },
  { value: "customer", label: "I already bought the parts", hint: "Installation labour only" }
];

export function computePlumbing(answers: Answers): EstimateResult {
  const problem = problemMap.get(String(answers.problem)) ?? PLUMBING_PROBLEMS[0];
  const severity = SEVERITY.find((row) => row.value === answers.severity) ?? SEVERITY[0];
  const location = LOCATIONS.find((row) => row.value === answers.location) ?? LOCATIONS[0];
  const house = HOUSE_TYPES.find((row) => row.value === answers.houseType) ?? HOUSE_TYPES[1];
  const age = AGES.find((row) => row.value === answers.propertyAge) ?? AGES[1];
  const timing = TIMING.find((row) => row.value === answers.timing) ?? TIMING[0];
  const quantity = Math.max(1, Number(answers.quantity) || 1);
  const customerParts = answers.partsSupply === "customer";

  const breakdown: { label: string; value: string; note?: string }[] = [];

  // Base rate from the published family band.
  let base: number;
  let note: string;
  switch (problem.family) {
    case "drain": {
      const band = RATES.plumbing.drainBand;
      base = Math.max(RATES.plumbing.drain, withinBand(band, problem.position));
      note = `Published rate: ${priceLabel("plumbing.drain")} · validated band RM ${band.low}–RM ${band.high}`;
      break;
    }
    case "leak": {
      const band = RATES.plumbing.minorBand;
      base = RATES.plumbing.leakDiagnosis + (band.high - RATES.plumbing.leakDiagnosis) * problem.position * 0.8;
      note = `Published rate: ${priceLabel("plumbing.leak")}`;
      break;
    }
    case "fixture": {
      base = RATES.plumbing.fixtureInstall * (0.85 + problem.position * 0.9);
      note = `Published rate: ${priceLabel("plumbing.fixture")}`;
      break;
    }
    case "pressure": {
      base = RATES.plumbing.heaterService + (RATES.plumbing.minorBand.high - RATES.plumbing.heaterService) * problem.position;
      note = `Published rate: ${priceLabel("plumbing.fixture")}`;
      break;
    }
    default: {
      base =
        problem.value === "heater-install"
          ? RATES.plumbing.instantHeater + (RATES.plumbing.storageHeater - RATES.plumbing.instantHeater) * 0.5
          : RATES.plumbing.heaterRepair * (1 + problem.position);
      note =
        problem.value === "heater-install"
          ? `Published rates: ${priceLabel("waterHeater.instant")} – ${priceLabel("waterHeater.storage")}`
          : `Published rate: ${priceLabel("waterHeater.repair")}`;
    }
  }

  breakdown.push({
    label: problem.service,
    value: `RM ${roundMoney(base).toLocaleString()}`,
    note
  });

  let total = base;

  if (quantity > 1) {
    // Additional units on the same visit are discounted — no second call-out.
    const extra = base * 0.62 * (quantity - 1);
    total += extra;
    breakdown.push({
      label: `Additional ${quantity - 1} unit${quantity > 2 ? "s" : ""} on the same visit`,
      value: `RM ${roundMoney(extra).toLocaleString()}`,
      note: "Discounted — no second call-out charge"
    });
  }

  const multiplier =
    (1 + severity.add) * (1 + location.add) * (1 + house.add) * (1 + age.add) * (1 + timing.add);
  total *= multiplier;

  if (multiplier !== 1) {
    breakdown.push({
      label: "Job conditions",
      value: `× ${multiplier.toFixed(2)}`,
      note: `${severity.label.split(" —")[0]} severity · ${location.label} · ${house.label} · ${age.label} · ${timing.label}`
    });
  }

  if (customerParts) {
    const saving = total * 0.22;
    total -= saving;
    breakdown.push({
      label: "You supply the parts",
      value: `− RM ${roundMoney(saving).toLocaleString()}`,
      note: "Material cost removed; installation labour and warranty on workmanship retained"
    });
  }

  // Minimum engagement — published plumbing starting price.
  let minimumApplied = false;
  if (total < RATES.plumbing.minorRepair) {
    total = RATES.plumbing.minorRepair;
    minimumApplied = true;
    breakdown.push({
      label: "Minimum call-out applied",
      value: `RM ${RATES.plumbing.minorRepair.toLocaleString()}`,
      note: "Published plumbing starting price"
    });
  }

  const price = roundMoney(total);
  const complexity = clamp(problem.position + severity.add, 0, 1.2);
  const spread = 0.15 + complexity * 0.1;
  const low = roundMoney(price * (1 - spread));
  const high = roundMoney(price * (1 + spread + 0.08));
  const materials = roundMoney(price * (customerParts ? 0.08 : problem.family === "fixture" || problem.family === "heater" ? 0.4 : 0.22));
  const labour = price - materials;

  const hours = problem.hours * quantity * (1 + severity.add * 0.5);
  const duration =
    hours <= 1
      ? "About 1 hour on site"
      : hours <= 2
        ? "1–2 hours on site"
        : hours <= 4
          ? "Half a working day"
          : hours <= 8
            ? "1 working day"
            : "1–2 working days";

  const urgencyScore = severity.urgency + (timing.value === "emergency" ? 4 : 0) + (problem.family === "leak" ? 2 : 0);
  let severityLevel: Severity = "routine";
  let severityNote = "No damage risk — book at your convenience.";
  if (urgencyScore >= 9) {
    severityLevel = "emergency";
    severityNote = "Close your main stopcock and call us now — uncontrolled water damages floors, ceilings and wiring within hours.";
  } else if (urgencyScore >= 5) {
    severityLevel = "urgent";
    severityNote = "Book within 24–48 hours before the problem escalates into water damage.";
  } else if (urgencyScore >= 2) {
    severityLevel = "soon";
    severityNote = "Book within the week — the fault will keep getting worse.";
  }

  const addOns: AddOn[] = [
    {
      id: "full-inspection",
      label: "Whole-house plumbing health check",
      price: RATES.plumbing.minorRepair,
      note: "All taps, traps, valves and visible pipework inspected during the same visit",
      recommended: age.value === "older" || age.value === "old"
    },
    {
      id: "drain-service",
      label: "Clear all drains & floor traps",
      price: RATES.plumbing.drain,
      note: `Published rate: ${priceLabel("plumbing.drain")}`,
      recommended: problem.family === "drain"
    },
    {
      id: "leak-detection",
      label: "Electronic concealed leak detection",
      price: RATES.plumbing.leakDiagnosis,
      note: `Published rate: ${priceLabel("plumbing.leak")}`,
      recommended: problem.family === "pressure" || problem.family === "leak"
    },
    {
      id: "heater-service",
      label: "Water heater service & descaling",
      price: RATES.plumbing.heaterRepair,
      note: `Published rate: ${priceLabel("waterHeater.repair")}`,
      recommended: problem.family === "heater"
    },
    {
      id: "waterproof",
      label: "Wet-area waterproofing check",
      price: RATES.waterproofing.wallDamp,
      note: `Published rate: ${priceLabel("waterproofing.wallDamp")}`,
      recommended: location.value.startsWith("bathroom")
    }
  ];

  return {
    price,
    low,
    high,
    labour,
    materials,
    duration,
    recommendedService: problem.service,
    packageName:
      severityLevel === "emergency"
        ? "Emergency Plumbing Response"
        : severityLevel === "urgent"
          ? "Priority Plumbing Repair"
          : "Standard Plumbing Visit",
    serviceHref: problem.serviceHref,
    breakdown,
    addOns,
    findings: problem.causes.map((cause) => ({
      title: cause,
      detail: `Frequently the root cause for "${problem.label.toLowerCase()}" in ${house.label.toLowerCase()} properties around ${age.label.toLowerCase()}.`
    })),
    severity: severityLevel,
    severityNote,
    related: [
      { label: "Plumbing Services", href: "/services/plumbing", desc: "Licensed plumbers, SIRIM parts" },
      { label: "Plumbing Cost Guide", href: "/services/plumbing/cost", desc: "Published 2026 rates" },
      { label: "Water Heater Service", href: "/services/water-heater", desc: "Install, repair and descale" },
      { label: "Waterproofing", href: "/services/waterproofing", desc: "Wet-area protection" },
      { label: "Emergency Plumbing", href: "/services/plumbing/emergency", desc: "Same-day dispatch" }
    ],
    articles: [
      { label: "Hidden Water Leak Detection in KL", href: "/blog/hidden-water-leak-detection-kl" },
      { label: "Monsoon Home Prep for the Klang Valley", href: "/blog/monsoon-home-prep-klang-valley" }
    ],
    maintenance: [
      "Pour hot water and enzyme cleaner down kitchen drains monthly to stop grease build-up.",
      "Test your RCCB and water heater relief valve every 6 months.",
      "Replace flexible hoses under sinks every 5 years — they are the most common burst point."
    ],
    assumptions: [
      "Estimate covers one visit with standard tools; specialist equipment such as CCTV drain survey is quoted separately.",
      customerParts
        ? "You supply the fixtures or parts; we warrant the workmanship only."
        : "SIRIM-certified standard parts are included; premium branded fixtures are quoted separately.",
      minimumApplied
        ? "Small tasks are charged at our published minimum call-out."
        : "Pressure testing after repair is included."
    ]
  };
}

export const plumbingSpec: EstimatorSpec = {
  slug: "plumbing-diagnostic",
  name: "Plumbing Diagnostic",
  serviceSlug: "plumbing",
  resultLabel: "Estimated repair cost",
  defaults: {
    problem: "blocked-sink",
    severity: "moderate",
    location: "kitchen",
    quantity: 1,
    houseType: "terrace",
    propertyAge: "mid",
    partsSupply: "include",
    timing: "standard"
  },
  steps: [
    {
      id: "problem",
      title: "What is the problem?",
      subtitle: "Pick the closest match — you can add details on WhatsApp afterwards.",
      icon: "🔧",
      fields: [
        {
          id: "problem",
          kind: "select",
          label: "Plumbing problem",
          required: true,
          choices: PLUMBING_PROBLEMS.map((row) => ({ value: row.value, label: row.label, icon: row.icon }))
        }
      ]
    },
    {
      id: "severity",
      title: "How severe is it?",
      subtitle: "This sets the urgency level and dispatch priority.",
      icon: "⚠️",
      fields: [
        {
          id: "severity",
          kind: "cards",
          label: "Severity",
          required: true,
          columns: 1,
          choices: SEVERITY.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        }
      ]
    },
    {
      id: "location",
      title: "Where in the property?",
      subtitle: "Location affects access and pipe routing.",
      icon: "📍",
      fields: [
        {
          id: "location",
          kind: "cards",
          label: "Location",
          required: true,
          choices: LOCATIONS.map((row) => ({ value: row.value, label: row.label, icon: row.icon }))
        },
        {
          id: "quantity",
          kind: "slider",
          label: "How many fixtures / points are affected?",
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 1,
          format: (value) => `${value} point${value > 1 ? "s" : ""}`
        }
      ]
    },
    {
      id: "property",
      title: "About the property",
      subtitle: "Older pipework usually needs more work to reach.",
      icon: "🏠",
      fields: [
        {
          id: "houseType",
          kind: "cards",
          label: "Property type",
          required: true,
          choices: HOUSE_TYPES.map((row) => ({ value: row.value, label: row.label, icon: row.icon }))
        },
        {
          id: "propertyAge",
          kind: "select",
          label: "Property age",
          required: true,
          choices: AGES.map((row) => ({ value: row.value, label: row.label }))
        },
        {
          id: "partsSupply",
          kind: "cards",
          label: "Who supplies the parts?",
          columns: 2,
          choices: FIXTURE_SUPPLY.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        }
      ]
    },
    {
      id: "timing",
      title: "When do you need a plumber?",
      subtitle: "Emergency dispatch carries an uplift — always explained before work starts.",
      icon: "⏱️",
      fields: [
        {
          id: "timing",
          kind: "cards",
          label: "Preferred timing",
          required: true,
          choices: TIMING.map((row) => ({ value: row.value, label: row.label, hint: row.hint, popular: row.value === "standard" }))
        }
      ]
    }
  ],
  compute: computePlumbing
};
