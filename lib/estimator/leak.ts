/**
 * Water Leak Triage — guided diagnosis + repair estimate.
 *
 * Produces likely causes, an urgency level and a repair estimate built from the
 * published waterproofing / plumbing / ceiling / roof rates.
 */

import { RATES, clamp, roundMoney, priceLabel } from "./pricing";
import type { AddOn, Answers, EstimateResult, EstimatorSpec, Severity } from "./types";

type Location = {
  value: string;
  label: string;
  icon: string;
  /** Base repair approach used to derive the number. */
  method: "pu" | "bathroom" | "roof" | "pipe" | "ceiling" | "fixture" | "external";
  service: string;
  serviceHref: string;
  causes: string[];
  baseUrgency: number;
};

export const LEAK_LOCATIONS: Location[] = [
  {
    value: "bathroom", label: "Bathroom", icon: "🚿", method: "bathroom",
    service: "Bathroom Waterproofing & Leak Repair", serviceHref: "/services/waterproofing",
    causes: ["Failed floor waterproofing membrane", "Cracked or missing tile grout", "Leaking floor trap or shower mixer connection", "Failed seal around the toilet flange"],
    baseUrgency: 2
  },
  {
    value: "kitchen", label: "Kitchen", icon: "🍽️", method: "pipe",
    service: "Kitchen Plumbing Leak Repair", serviceHref: "/services/plumbing",
    causes: ["Loose sink trap or waste connection", "Perished flexible hose under the sink", "Cracked concealed supply pipe", "Blocked waste line backing up"],
    baseUrgency: 2
  },
  {
    value: "roof", label: "Roof", icon: "🏚️", method: "roof",
    service: "Roof Leak Diagnosis & Repair", serviceHref: "/services/roof-repair",
    causes: ["Cracked or slipped roof tiles", "Failed ridge capping / re-pointing", "Corroded valley gutter or flashing", "Blocked gutter causing overflow"],
    baseUrgency: 3
  },
  {
    value: "ceiling", label: "Ceiling", icon: "🔲", method: "ceiling",
    service: "Ceiling Leak Repair & Reinstatement", serviceHref: "/services/ceiling",
    causes: ["Leak from the unit or bathroom above", "Roof or gutter water tracking along the slab", "Condensation from air-cond piping", "Burst concealed pipe in the ceiling void"],
    baseUrgency: 3
  },
  {
    value: "balcony", label: "Balcony / Yard", icon: "🌿", method: "pu",
    service: "Balcony Waterproofing", serviceHref: "/services/waterproofing",
    causes: ["Failed balcony membrane", "Blocked balcony floor trap", "Cracked screed at the slab edge", "Water ponding from poor fall"],
    baseUrgency: 2
  },
  {
    value: "wall", label: "Wall", icon: "🧱", method: "pu",
    service: "Wall Dampness & Injection Treatment", serviceHref: "/services/waterproofing",
    causes: ["Rising damp from the ground slab", "Concealed pipe leak inside the wall", "External wall crack letting rain through", "Failed window sill / frame seal"],
    baseUrgency: 2
  },
  {
    value: "outdoor", label: "Outdoor / Garden", icon: "🌳", method: "external",
    service: "External Pipe & Drainage Repair", serviceHref: "/services/plumbing",
    causes: ["Cracked underground supply pipe", "Leaking garden tap or hose bib", "Broken drainage line", "Damaged water meter connection"],
    baseUrgency: 2
  },
  {
    value: "water-tank", label: "Water Tank", icon: "🛢️", method: "pipe",
    service: "Water Tank & Pump Repair", serviceHref: "/services/plumbing",
    causes: ["Failed ball float valve", "Cracked tank body or fitting", "Overflow pipe discharging continuously", "Loose tank outlet connection"],
    baseUrgency: 3
  },
  {
    value: "pipe", label: "Pipe (visible)", icon: "🔧", method: "pipe",
    service: "Pipe Leak Repair", serviceHref: "/services/plumbing",
    causes: ["Corroded or split pipe section", "Failed joint or compression fitting", "Excess water pressure stressing joints", "Ageing galvanised iron pipework"],
    baseUrgency: 3
  },
  {
    value: "toilet", label: "Toilet", icon: "🚽", method: "fixture",
    service: "Toilet Repair & Reseal", serviceHref: "/services/plumbing",
    causes: ["Worn flush valve or inlet washer", "Failed wax / rubber flange seal", "Cracked cistern or bowl", "Loose water supply connector"],
    baseUrgency: 2
  },
  {
    value: "tap", label: "Tap / Mixer", icon: "🚰", method: "fixture",
    service: "Tap & Mixer Replacement", serviceHref: "/services/plumbing",
    causes: ["Worn cartridge or washer", "Corroded tap body", "Loose or cracked flexible connector", "Damaged thread seal"],
    baseUrgency: 1
  },
  {
    value: "water-heater", label: "Water Heater", icon: "♨️", method: "fixture",
    service: "Water Heater Repair", serviceHref: "/services/water-heater",
    causes: ["Failed pressure relief valve", "Corroded tank or heating element", "Leaking inlet / outlet connection", "Scale build-up stressing the vessel"],
    baseUrgency: 3
  }
];

const locationMap = new Map(LEAK_LOCATIONS.map((row) => [row.value, row]));

const SYMPTOMS: { value: string; label: string; icon: string; weight: number; implies?: string }[] = [
  { value: "wet-wall", label: "Wet or damp wall patch", icon: "💧", weight: 1, implies: "Moisture is already inside the wall build-up." },
  { value: "dripping", label: "Active dripping water", icon: "🚰", weight: 3, implies: "An active supply-side leak is losing water continuously." },
  { value: "low-pressure", label: "Low water pressure", icon: "📉", weight: 2, implies: "Pressure loss often means water is escaping before the outlet." },
  { value: "brown-stain", label: "Brown / yellow stain", icon: "🟤", weight: 1, implies: "A slow historic leak has been soaking the substrate." },
  { value: "ceiling-bubble", label: "Ceiling bubbling or sagging", icon: "🎈", weight: 3, implies: "Water is pooling above the board — collapse risk." },
  { value: "cracks", label: "Cracks appearing", icon: "🪚", weight: 2, implies: "Moisture movement is stressing the plaster or screed." },
  { value: "mould", label: "Mould or musty smell", icon: "🦠", weight: 2, implies: "Persistent dampness — a health and finish concern." },
  { value: "burst-pipe", label: "Burst pipe / flooding", icon: "🌊", weight: 5, implies: "Emergency: shut the main stopcock now." },
  { value: "pipe-noise", label: "Hissing or knocking pipes", icon: "🔊", weight: 2, implies: "Classic signature of a pressurised concealed leak." },
  { value: "meter-spinning", label: "Water meter moves with taps off", icon: "⏲️", weight: 4, implies: "Confirmed hidden leak on the supply side." },
  { value: "high-bill", label: "Unusually high water bill", icon: "🧾", weight: 2, implies: "Ongoing hidden loss over weeks." },
  { value: "peeling-paint", label: "Paint peeling / blistering", icon: "🩹", weight: 1, implies: "Moisture is pushing through the coating." }
];

const SEVERITY_LEVELS: { value: string; label: string; hint: string; weight: number }[] = [
  { value: "slow", label: "Slow — only after heavy rain or long showers", hint: "Intermittent damp", weight: 0 },
  { value: "moderate", label: "Moderate — visible daily", hint: "Stain or damp patch grows slowly", weight: 2 },
  { value: "fast", label: "Fast — spreading week by week", hint: "Clearly worsening", weight: 4 },
  { value: "severe", label: "Severe — continuous water", hint: "Buckets, flooding, dripping", weight: 6 }
];

const DURATIONS: { value: string; label: string; weight: number }[] = [
  { value: "today", label: "Started today", weight: 2 },
  { value: "week", label: "Within the last week", weight: 1 },
  { value: "month", label: "About a month", weight: 1 },
  { value: "months", label: "Several months", weight: 2 },
  { value: "year", label: "More than a year", weight: 3 }
];

const PROPERTY_AGE: { value: string; label: string; factor: number }[] = [
  { value: "new", label: "Under 5 years", factor: 0.95 },
  { value: "mid", label: "5 – 15 years", factor: 1 },
  { value: "older", label: "15 – 30 years", factor: 1.1 },
  { value: "old", label: "Over 30 years", factor: 1.2 }
];

const PROPERTY_TYPE: { value: string; label: string; icon: string; factor: number }[] = [
  { value: "condo", label: "Condo / Apartment", icon: "🏢", factor: 1.05 },
  { value: "terrace", label: "Terrace House", icon: "🏠", factor: 1 },
  { value: "semi-d", label: "Semi-D / Bungalow", icon: "🏡", factor: 1.1 },
  { value: "shop", label: "Shop Lot / Office", icon: "🏪", factor: 1.15 }
];

const AFFECTED: { value: string; label: string; points: number; area: number }[] = [
  { value: "spot", label: "One small spot (palm-sized)", points: 1, area: 12 },
  { value: "patch", label: "A patch (up to 1 m²)", points: 2, area: 30 },
  { value: "large", label: "Large area (2 – 4 m²)", points: 4, area: 60 },
  { value: "multiple", label: "Multiple rooms affected", points: 7, area: 120 }
];

function asArray(value: unknown): string[] {
  return Array.isArray(value) ? (value as string[]) : [];
}

export function computeLeak(answers: Answers): EstimateResult {
  const location = locationMap.get(String(answers.location)) ?? LEAK_LOCATIONS[0];
  const symptoms = asArray(answers.symptoms);
  const severityRow = SEVERITY_LEVELS.find((row) => row.value === answers.severity) ?? SEVERITY_LEVELS[1];
  const durationRow = DURATIONS.find((row) => row.value === answers.duration) ?? DURATIONS[1];
  const ageRow = PROPERTY_AGE.find((row) => row.value === answers.propertyAge) ?? PROPERTY_AGE[1];
  const typeRow = PROPERTY_TYPE.find((row) => row.value === answers.propertyType) ?? PROPERTY_TYPE[1];
  const affectedRow = AFFECTED.find((row) => row.value === answers.affected) ?? AFFECTED[1];

  const symptomWeight = symptoms.reduce(
    (total, value) => total + (SYMPTOMS.find((row) => row.value === value)?.weight ?? 0),
    0
  );

  const score =
    location.baseUrgency + symptomWeight + severityRow.weight + durationRow.weight + affectedRow.points;

  let severity: Severity = "routine";
  let severityNote = "Monitor and schedule a repair at your convenience — no immediate damage risk.";
  if (symptoms.includes("burst-pipe") || score >= 18) {
    severity = "emergency";
    severityNote = "Shut off the main stopcock now and call us — active water loss causes fast structural and electrical damage.";
  } else if (score >= 12) {
    severity = "urgent";
    severityNote = "Book within 24–48 hours. Damage is actively spreading and repair scope grows the longer you wait.";
  } else if (score >= 7) {
    severity = "soon";
    severityNote = "Book within the week. The leak is established but not yet causing structural damage.";
  }

  const complexity = clamp(score / 22, 0.15, 1);
  const contextFactor = ageRow.factor * typeRow.factor;

  const breakdown: { label: string; value: string; note?: string }[] = [];
  let repair = 0;
  let quoteOnly = false;
  let quoteOnlyReason: string | undefined;

  switch (location.method) {
    case "pu": {
      const points = Math.max(1, Math.round(affectedRow.points * (1 + complexity)));
      const perPoint = RATES.waterproofing.puBand.low +
        (RATES.waterproofing.puPoint - RATES.waterproofing.puBand.low) * complexity;
      repair = points * perPoint;
      breakdown.push({
        label: "PU injection grouting",
        value: `${points} point${points > 1 ? "s" : ""} × RM ${Math.round(perPoint)}`,
        note: `Published rate: ${priceLabel("waterproofing.pu")}`
      });
      break;
    }
    case "bathroom": {
      const band = RATES.waterproofing.bathroomBand;
      repair = band.low + (RATES.waterproofing.bathroom - band.low) * 0.4 + (band.high - band.low) * complexity * 0.55;
      breakdown.push({
        label: "Wet-area waterproofing (no-hack system)",
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: `Published band RM ${band.low.toLocaleString()}–RM ${band.high.toLocaleString()} for no-hack treatment`
      });
      if (complexity > 0.75) {
        quoteOnly = true;
        quoteOnlyReason = "Severe bathroom leaks often need hacking and re-tiling — that scope is quoted after inspection.";
        breakdown.push({
          label: "Possible hacking & re-tile scope",
          value: `RM ${RATES.waterproofing.bathroomHackBand.low.toLocaleString()}–RM ${RATES.waterproofing.bathroomHackBand.high.toLocaleString()}`,
          note: "Published hacking band — only if the membrane below the tiles has failed"
        });
      }
      break;
    }
    case "roof": {
      repair = RATES.waterproofing.roofDiagnosis * (1 + complexity * 1.4);
      breakdown.push({
        label: "Roof leak diagnosis & repair",
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: `Published rate: ${priceLabel("roof.diagnosis")}`
      });
      if (complexity > 0.6) {
        const area = affectedRow.area;
        const membrane = area * RATES.waterproofing.roofMembraneSqft;
        repair += membrane * 0.5;
        breakdown.push({
          label: "Partial membrane waterproofing",
          value: `RM ${roundMoney(membrane * 0.5).toLocaleString()}`,
          note: `≈ ${Math.round(area / 2)} sq ft × published RM ${RATES.waterproofing.roofMembraneSqft} / sq ft`
        });
      }
      break;
    }
    case "ceiling": {
      repair = RATES.waterproofing.ceilingRepair * (1 + complexity * 1.5);
      breakdown.push({
        label: "Water-damaged ceiling repair",
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: `Published rate: ${priceLabel("ceiling.repair")}`
      });
      const source = RATES.waterproofing.puPoint * (0.6 + complexity);
      repair += source;
      breakdown.push({
        label: "Source treatment (slab injection)",
        value: `RM ${roundMoney(source).toLocaleString()}`,
        note: `Derived from published PU grouting rate — the ceiling is only reinstated after the source is sealed`
      });
      break;
    }
    case "pipe": {
      const band = RATES.plumbing.minorBand;
      repair = RATES.plumbing.leakDiagnosis + (band.high - band.low) * complexity;
      breakdown.push({
        label: "Leak detection & pipe repair",
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: `Published rate: ${priceLabel("plumbing.leak")} plus repair complexity`
      });
      break;
    }
    case "fixture": {
      repair = RATES.plumbing.fixtureInstall * (1 + complexity * 0.9);
      if (location.value === "water-heater") repair = RATES.plumbing.heaterRepair * (1 + complexity * 1.2);
      breakdown.push({
        label: location.value === "water-heater" ? "Water heater repair" : "Fixture repair / replacement",
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note:
          location.value === "water-heater"
            ? `Published rate: ${priceLabel("waterHeater.repair")}`
            : `Published rate: ${priceLabel("plumbing.fixture")}`
      });
      break;
    }
    case "external": {
      repair = RATES.plumbing.leakDiagnosis * (1 + complexity);
      breakdown.push({
        label: "External pipe trace & repair",
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: `Published rate: ${priceLabel("plumbing.leak")}`
      });
      break;
    }
  }

  if (severity === "emergency") {
    const uplift = repair * 0.2;
    repair += uplift;
    breakdown.push({
      label: "Emergency dispatch uplift",
      value: `RM ${roundMoney(uplift).toLocaleString()}`,
      note: "Applied only for same-day emergency response; explained before work starts"
    });
  }

  repair *= contextFactor;
  if (contextFactor !== 1) {
    breakdown.push({
      label: "Property factor",
      value: `× ${contextFactor.toFixed(2)}`,
      note: `${typeRow.label}, ${ageRow.label} — older and high-rise properties need more access control`
    });
  }

  const price = roundMoney(repair);
  const spread = 0.2 + complexity * 0.1;
  const low = roundMoney(price * (1 - spread));
  const high = roundMoney(price * (1 + spread + 0.1));
  const materials = roundMoney(price * 0.35);
  const labour = price - materials;

  const duration =
    severity === "emergency"
      ? "Emergency make-safe same day, full repair 1–2 days"
      : complexity > 0.7
        ? "1–2 working days plus curing time"
        : complexity > 0.4
          ? "Half to 1 working day"
          : "2–4 hours on site";

  const findings = [
    ...location.causes.slice(0, 3).map((cause) => ({
      title: cause,
      detail: `Common cause for ${location.label.toLowerCase()} leaks in Klang Valley properties of this age.`
    })),
    ...symptoms
      .map((value) => SYMPTOMS.find((row) => row.value === value))
      .filter((row): row is (typeof SYMPTOMS)[number] => Boolean(row?.implies))
      .slice(0, 3)
      .map((row) => ({ title: row.label, detail: row.implies as string }))
  ];

  const addOns: AddOn[] = [
    {
      id: "ceiling-reinstate",
      label: "Ceiling board replacement & repaint",
      price: RATES.waterproofing.ceilingRepair,
      note: `Published rate: ${priceLabel("ceiling.repair")}`,
      recommended: symptoms.includes("ceiling-bubble") || location.value === "ceiling"
    },
    {
      id: "wall-damp",
      label: "Wall dampness & efflorescence treatment",
      price: RATES.waterproofing.wallDamp,
      note: `Published rate: ${priceLabel("waterproofing.wallDamp")}`,
      recommended: symptoms.includes("mould") || symptoms.includes("peeling-paint")
    },
    {
      id: "gutter",
      label: "Gutter cleaning & realignment",
      price: RATES.waterproofing.gutter,
      note: `Published rate: ${priceLabel("roof.gutter")}`,
      recommended: location.value === "roof"
    },
    {
      id: "full-bathroom",
      label: "Full bathroom waterproofing package",
      price: RATES.waterproofing.bathroom,
      note: `Published rate: ${priceLabel("waterproofing.bathroom")}`,
      recommended: location.value === "bathroom" && complexity > 0.5
    },
    {
      id: "repaint",
      label: "Repaint affected wall / ceiling after repair",
      price: RATES.painting.repairMinimum,
      note: `Published rate: ${priceLabel("painting.repair")}`,
      recommended: symptoms.includes("brown-stain") || symptoms.includes("peeling-paint")
    }
  ];

  return {
    price,
    low,
    high,
    labour,
    materials,
    duration,
    recommendedService: location.service,
    packageName:
      severity === "emergency"
        ? "Emergency Leak Response"
        : severity === "urgent"
          ? "Priority Leak Repair"
          : "Scheduled Leak Repair",
    serviceHref: location.serviceHref,
    breakdown,
    addOns,
    findings,
    severity,
    severityNote,
    related: [
      { label: "Waterproofing & PU Grouting", href: "/services/waterproofing", desc: "Seal the source properly" },
      { label: "Plumbing Leak Repair", href: "/services/plumbing", desc: "Concealed pipe detection" },
      { label: "Ceiling Repair", href: "/services/ceiling", desc: "Reinstate damaged boards" },
      { label: "Roof Repair", href: "/services/roof-repair", desc: "Tiles, ridge and gutter work" },
      { label: "Waterproofing Cost Guide", href: "/services/waterproofing/cost", desc: "Published 2026 rates" }
    ],
    articles: [
      { label: "How to Fix a Leaking Ceiling Without Tile Hacking", href: "/blog/how-to-fix-leaking-ceiling-without-tile-hacking" },
      { label: "Hidden Water Leak Detection in KL", href: "/blog/hidden-water-leak-detection-kl" },
      { label: "PU Grouting vs Full Membrane Waterproofing", href: "/blog/pu-grouting-vs-full-membrane-waterproofing" }
    ],
    maintenance: [
      "Check your water meter with every tap closed once a month — movement means a hidden leak.",
      "Clear floor traps and gutters before the monsoon season.",
      "Re-seal bathroom silicone joints every 2–3 years to protect the membrane below."
    ],
    assumptions: [
      "Diagnosis is based on your answers only — the exact source is confirmed with moisture meters and, if needed, thermal imaging on site.",
      "Repair figures cover the leak source; finishing works (tiles, paint, ceiling boards) are listed separately as add-ons.",
      "Emergency uplift only applies if you request same-day dispatch."
    ],
    quoteOnly,
    quoteOnlyReason
  };
}

export const leakSpec: EstimatorSpec = {
  slug: "leak-triage",
  name: "Water Leak Triage",
  serviceSlug: "waterproofing",
  resultLabel: "Estimated repair cost",
  defaults: {
    location: "bathroom",
    symptoms: [],
    severity: "moderate",
    duration: "week",
    affected: "patch",
    propertyType: "terrace",
    propertyAge: "mid"
  },
  steps: [
    {
      id: "location",
      title: "Where is the leak?",
      subtitle: "Pick the spot where you first see water or damp.",
      icon: "📍",
      fields: [
        {
          id: "location",
          kind: "cards",
          label: "Leak location",
          required: true,
          choices: LEAK_LOCATIONS.map((row) => ({ value: row.value, label: row.label, icon: row.icon }))
        }
      ]
    },
    {
      id: "symptoms",
      title: "What are you seeing?",
      subtitle: "Select every symptom — this is what drives the diagnosis.",
      icon: "🔎",
      fields: [
        {
          id: "symptoms",
          kind: "multi",
          label: "Symptoms",
          required: true,
          min: 1,
          choices: SYMPTOMS.map((row) => ({ value: row.value, label: row.label, icon: row.icon }))
        }
      ]
    },
    {
      id: "severity",
      title: "How bad is it right now?",
      subtitle: "Be honest — this sets the urgency level and dispatch priority.",
      icon: "⚠️",
      fields: [
        {
          id: "severity",
          kind: "cards",
          label: "Leak severity",
          required: true,
          columns: 1,
          choices: SEVERITY_LEVELS.map((row) => ({ value: row.value, label: row.label, hint: row.hint }))
        },
        {
          id: "affected",
          kind: "cards",
          label: "How much area is affected?",
          required: true,
          choices: AFFECTED.map((row) => ({ value: row.value, label: row.label }))
        }
      ]
    },
    {
      id: "duration",
      title: "How long has it been leaking?",
      subtitle: "Older leaks usually mean more hidden damage.",
      icon: "🗓️",
      fields: [
        {
          id: "duration",
          kind: "cards",
          label: "Leak duration",
          required: true,
          choices: DURATIONS.map((row) => ({ value: row.value, label: row.label }))
        }
      ]
    },
    {
      id: "property",
      title: "Tell us about the property",
      subtitle: "Building type and age change the access and repair method.",
      icon: "🏠",
      fields: [
        {
          id: "propertyType",
          kind: "cards",
          label: "Property type",
          required: true,
          choices: PROPERTY_TYPE.map((row) => ({ value: row.value, label: row.label, icon: row.icon }))
        },
        {
          id: "propertyAge",
          kind: "select",
          label: "Property age",
          required: true,
          choices: PROPERTY_AGE.map((row) => ({ value: row.value, label: row.label }))
        }
      ]
    }
  ],
  compute: computeLeak
};
