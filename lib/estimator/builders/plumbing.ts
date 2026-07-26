/**
 * Plumbing Diagnostic Estimator — locale-aware spec builder.
 *
 * All rates resolve from the published plumbing / water-heater sub-service
 * prices and validated market bands. Copy resolves through the injected
 * translator; locale-neutral data only here.
 */

import { RATES, clamp, roundMoney, priceLabel, withinBand } from "../pricing";
import type { AddOn, Answers, EstimateResult, EstimatorSpec, Severity } from "../types";
import { opt, type Translator } from "./shared";

export type PlumbingProblem = {
  value: string;
  icon: string;
  /** Which published rate family the job belongs to. */
  family: "drain" | "leak" | "fixture" | "pressure" | "heater";
  /** Position inside that family's band (0 = simplest, 1 = hardest). */
  position: number;
  serviceHref: string;
  hours: number;
};

export const PLUMBING_PROBLEMS: PlumbingProblem[] = [
  { value: "blocked-sink", icon: "🧼", family: "drain", position: 0.2, serviceHref: "/services/plumbing", hours: 1.5 },
  { value: "blocked-toilet", icon: "🚽", family: "drain", position: 0.4, serviceHref: "/services/plumbing", hours: 1.5 },
  { value: "blocked-floor-trap", icon: "🕳️", family: "drain", position: 0.3, serviceHref: "/services/plumbing", hours: 1.2 },
  { value: "outdoor-drain", icon: "🌧️", family: "drain", position: 0.6, serviceHref: "/services/plumbing", hours: 2 },
  { value: "pipe-leak", icon: "💧", family: "leak", position: 0.5, serviceHref: "/services/plumbing", hours: 2.5 },
  { value: "concealed-leak", icon: "🔎", family: "leak", position: 0.85, serviceHref: "/services/plumbing", hours: 3.5 },
  { value: "outdoor-pipe", icon: "🌳", family: "leak", position: 0.55, serviceHref: "/services/plumbing", hours: 2.5 },
  { value: "low-pressure", icon: "📉", family: "pressure", position: 0.5, serviceHref: "/services/plumbing", hours: 2 },
  { value: "no-water", icon: "🚱", family: "pressure", position: 0.7, serviceHref: "/services/plumbing", hours: 2 },
  { value: "tap-replacement", icon: "🚰", family: "fixture", position: 0.15, serviceHref: "/services/plumbing", hours: 1 },
  { value: "mixer-replacement", icon: "🚿", family: "fixture", position: 0.35, serviceHref: "/services/plumbing", hours: 1.5 },
  { value: "toilet-repair", icon: "🪠", family: "fixture", position: 0.45, serviceHref: "/services/plumbing", hours: 2 },
  { value: "sink-install", icon: "🍽️", family: "fixture", position: 0.4, serviceHref: "/services/plumbing", hours: 2 },
  { value: "bidet", icon: "🚽", family: "fixture", position: 0.15, serviceHref: "/services/plumbing", hours: 0.75 },
  { value: "water-heater", icon: "♨️", family: "heater", position: 0.5, serviceHref: "/services/water-heater", hours: 2 },
  { value: "heater-install", icon: "🔥", family: "heater", position: 0.8, serviceHref: "/services/water-heater", hours: 2.5 },
  { value: "pump-install", icon: "⚙️", family: "pressure", position: 0.9, serviceHref: "/services/plumbing", hours: 3 }
];

const problemMap = new Map(PLUMBING_PROBLEMS.map((row) => [row.value, row]));

const SEVERITY: { value: string; add: number; urgency: number }[] = [
  { value: "minor", add: 0, urgency: 0 },
  { value: "moderate", add: 0.15, urgency: 2 },
  { value: "major", add: 0.35, urgency: 4 },
  { value: "emergency", add: 0.6, urgency: 7 }
];

const LOCATIONS: { value: string; icon: string; add: number }[] = [
  { value: "kitchen", icon: "🍳", add: 0 },
  { value: "bathroom-main", icon: "🛁", add: 0 },
  { value: "bathroom-ensuite", icon: "🚿", add: 0.05 },
  { value: "laundry", icon: "🧺", add: 0.05 },
  { value: "outdoor", icon: "🌳", add: 0.12 },
  { value: "roof-tank", icon: "🛢️", add: 0.18 },
  { value: "multiple", icon: "🏠", add: 0.35 }
];

const HOUSE_TYPES: { value: string; icon: string; add: number }[] = [
  { value: "condo", icon: "🏢", add: 0.05 },
  { value: "terrace", icon: "🏠", add: 0 },
  { value: "semi-d", icon: "🏡", add: 0.08 },
  { value: "shop", icon: "🏪", add: 0.12 },
  { value: "factory", icon: "🏭", add: 0.2 }
];

const AGES: { value: string; add: number }[] = [
  { value: "new", add: 0 },
  { value: "mid", add: 0.05 },
  { value: "older", add: 0.12 },
  { value: "old", add: 0.2 }
];

const TIMING: { value: string; add: number }[] = [
  { value: "standard", add: 0 },
  { value: "today", add: 0.12 },
  { value: "emergency", add: 0.25 },
  { value: "after-hours", add: 0.18 }
];

const PARTS_SUPPLY: { value: string }[] = [{ value: "include" }, { value: "customer" }];

/** Read a numbered cause list tolerating 3- or 4-entry lists. */
function causeList(t: Translator, prefix: string): string[] {
  return [0, 1, 2, 3]
    .map((index) => opt(t, `${prefix}.causes.${index}`))
    .filter((cause): cause is string => Boolean(cause));
}

export function computePlumbing(t: Translator, answers: Answers): EstimateResult {
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
      note = t("breakdown.noteDrain", { label: priceLabel("plumbing.drain"), low: band.low, high: band.high });
      break;
    }
    case "leak": {
      const band = RATES.plumbing.minorBand;
      base = RATES.plumbing.leakDiagnosis + (band.high - RATES.plumbing.leakDiagnosis) * problem.position * 0.8;
      note = t("breakdown.notePublished", { label: priceLabel("plumbing.leak") });
      break;
    }
    case "fixture": {
      base = RATES.plumbing.fixtureInstall * (0.85 + problem.position * 0.9);
      note = t("breakdown.notePublished", { label: priceLabel("plumbing.fixture") });
      break;
    }
    case "pressure": {
      base = RATES.plumbing.heaterService + (RATES.plumbing.minorBand.high - RATES.plumbing.heaterService) * problem.position;
      note = t("breakdown.notePublished", { label: priceLabel("plumbing.fixture") });
      break;
    }
    default: {
      base =
        problem.value === "heater-install"
          ? RATES.plumbing.instantHeater + (RATES.plumbing.storageHeater - RATES.plumbing.instantHeater) * 0.5
          : RATES.plumbing.heaterRepair * (1 + problem.position);
      note =
        problem.value === "heater-install"
          ? t("breakdown.noteHeaterInstall", { instant: priceLabel("waterHeater.instant"), storage: priceLabel("waterHeater.storage") })
          : t("breakdown.notePublished", { label: priceLabel("waterHeater.repair") });
    }
  }

  breakdown.push({
    label: t(`problems.${problem.value}.service`),
    value: `RM ${roundMoney(base).toLocaleString()}`,
    note
  });

  let total = base;

  if (quantity > 1) {
    // Additional units on the same visit are discounted — no second call-out.
    const extra = base * 0.62 * (quantity - 1);
    total += extra;
    breakdown.push({
      label:
        quantity > 2
          ? t("breakdown.additionalMany", { n: quantity - 1 })
          : t("breakdown.additionalOne", { n: quantity - 1 }),
      value: `RM ${roundMoney(extra).toLocaleString()}`,
      note: t("breakdown.additionalNote")
    });
  }

  const multiplier =
    (1 + severity.add) * (1 + location.add) * (1 + house.add) * (1 + age.add) * (1 + timing.add);
  total *= multiplier;

  if (multiplier !== 1) {
    breakdown.push({
      label: t("breakdown.jobConditions"),
      value: t("breakdown.jobConditionsValue", { mult: multiplier.toFixed(2) }),
      note: t("breakdown.jobConditionsNote", {
        // Severity labels keep the "Level — description" shape; the short
        // form before the dash is what the conditions note renders.
        severity: t(`severityLevels.${severity.value}.label`).split(" —")[0],
        location: t(`locations.${location.value}`),
        house: t(`houseTypes.${house.value}`),
        age: t(`ages.${age.value}`),
        timing: t(`timing.${timing.value}.label`)
      })
    });
  }

  if (customerParts) {
    const saving = total * 0.22;
    total -= saving;
    breakdown.push({
      label: t("breakdown.supply"),
      value: t("breakdown.supplyValue", { amount: roundMoney(saving).toLocaleString() }),
      note: t("breakdown.supplyNote")
    });
  }

  // Minimum engagement — published plumbing starting price.
  let minimumApplied = false;
  if (total < RATES.plumbing.minorRepair) {
    total = RATES.plumbing.minorRepair;
    minimumApplied = true;
    breakdown.push({
      label: t("breakdown.minimum"),
      value: `RM ${RATES.plumbing.minorRepair.toLocaleString()}`,
      note: t("breakdown.minimumNote")
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
      ? t("durations.oneHour")
      : hours <= 2
        ? t("durations.oneTwoHours")
        : hours <= 4
          ? t("durations.halfDay")
          : hours <= 8
            ? t("durations.oneDay")
            : t("durations.oneTwoDays");

  const urgencyScore = severity.urgency + (timing.value === "emergency" ? 4 : 0) + (problem.family === "leak" ? 2 : 0);
  let severityLevel: Severity = "routine";
  let severityNote = t("severityNote.routine");
  if (urgencyScore >= 9) {
    severityLevel = "emergency";
    severityNote = t("severityNote.emergency");
  } else if (urgencyScore >= 5) {
    severityLevel = "urgent";
    severityNote = t("severityNote.urgent");
  } else if (urgencyScore >= 2) {
    severityLevel = "soon";
    severityNote = t("severityNote.soon");
  }

  const addOns: AddOn[] = [
    {
      id: "full-inspection",
      label: t("addons.inspection.label"),
      price: RATES.plumbing.minorRepair,
      note: t("addons.inspection.note"),
      recommended: age.value === "older" || age.value === "old"
    },
    {
      id: "drain-service",
      label: t("addons.drain.label"),
      price: RATES.plumbing.drain,
      note: t("addons.drain.note", { label: priceLabel("plumbing.drain") }),
      recommended: problem.family === "drain"
    },
    {
      id: "leak-detection",
      label: t("addons.leakDetection.label"),
      price: RATES.plumbing.leakDiagnosis,
      note: t("addons.leakDetection.note", { label: priceLabel("plumbing.leak") }),
      recommended: problem.family === "pressure" || problem.family === "leak"
    },
    {
      id: "heater-service",
      label: t("addons.heaterService.label"),
      price: RATES.plumbing.heaterRepair,
      note: t("addons.heaterService.note", { label: priceLabel("waterHeater.repair") }),
      recommended: problem.family === "heater"
    },
    {
      id: "waterproof",
      label: t("addons.waterproof.label"),
      price: RATES.waterproofing.wallDamp,
      note: t("addons.waterproof.note", { label: priceLabel("waterproofing.wallDamp") }),
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
    recommendedService: t(`problems.${problem.value}.service`),
    packageName:
      severityLevel === "emergency"
        ? t("packages.emergency")
        : severityLevel === "urgent"
          ? t("packages.urgent")
          : t("packages.standard"),
    serviceHref: problem.serviceHref,
    breakdown,
    addOns,
    findings: causeList(t, `problems.${problem.value}`).map((cause) => ({
      title: cause,
      detail: t("findings.causeDetail", {
        problem: t(`problems.${problem.value}.label`).toLowerCase(),
        house: t(`houseTypes.${house.value}`).toLowerCase(),
        age: t(`ages.${age.value}`).toLowerCase()
      })
    })),
    severity: severityLevel,
    severityNote,
    related: [
      { label: t("related.plumbing.label"), href: "/services/plumbing", desc: t("related.plumbing.desc") },
      { label: t("related.costGuide.label"), href: "/services/plumbing/cost", desc: t("related.costGuide.desc") },
      { label: t("related.waterHeater.label"), href: "/services/water-heater", desc: t("related.waterHeater.desc") },
      { label: t("related.waterproofing.label"), href: "/services/waterproofing", desc: t("related.waterproofing.desc") },
      { label: t("related.emergency.label"), href: "/services/plumbing/emergency", desc: t("related.emergency.desc") }
    ],
    articles: [
      { label: t("articles.hiddenLeak"), href: "/blog/hidden-water-leak-detection-kl" },
      { label: t("articles.monsoon"), href: "/blog/monsoon-home-prep-klang-valley" }
    ],
    maintenance: [t("maintenance.drains"), t("maintenance.rccb"), t("maintenance.hoses")],
    assumptions: [
      t("assumptions.visit"),
      customerParts ? t("assumptions.customerParts") : t("assumptions.includedParts"),
      minimumApplied ? t("assumptions.belowMinimum") : t("assumptions.pressureTest")
    ]
  };
}

export function buildPlumbingSpec(t: Translator): EstimatorSpec {
  return {
    slug: "plumbing-diagnostic",
    name: t("meta.name"),
    serviceSlug: "plumbing",
    resultLabel: t("meta.resultLabel"),
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
        title: t("steps.problem.title"),
        subtitle: t("steps.problem.subtitle"),
        icon: "🔧",
        fields: [
          {
            id: "problem",
            kind: "select",
            label: t("fields.problem.label"),
            required: true,
            choices: PLUMBING_PROBLEMS.map((row) => ({
              value: row.value,
              label: t(`problems.${row.value}.label`),
              icon: row.icon
            }))
          }
        ]
      },
      {
        id: "severity",
        title: t("steps.severity.title"),
        subtitle: t("steps.severity.subtitle"),
        icon: "⚠️",
        fields: [
          {
            id: "severity",
            kind: "cards",
            label: t("fields.severity.label"),
            required: true,
            columns: 1,
            choices: SEVERITY.map((row) => ({
              value: row.value,
              label: t(`severityLevels.${row.value}.label`),
              hint: t(`severityLevels.${row.value}.hint`)
            }))
          }
        ]
      },
      {
        id: "location",
        title: t("steps.location.title"),
        subtitle: t("steps.location.subtitle"),
        icon: "📍",
        fields: [
          {
            id: "location",
            kind: "cards",
            label: t("fields.location.label"),
            required: true,
            choices: LOCATIONS.map((row) => ({ value: row.value, label: t(`locations.${row.value}`), icon: row.icon }))
          },
          {
            id: "quantity",
            kind: "slider",
            label: t("fields.quantity.label"),
            min: 1,
            max: 10,
            step: 1,
            defaultValue: 1,
            format: (value) =>
              value > 1 ? t("formats.pointMany", { value }) : t("formats.pointOne", { value })
          }
        ]
      },
      {
        id: "property",
        advanced: true,
        title: t("steps.property.title"),
        subtitle: t("steps.property.subtitle"),
        icon: "🏠",
        fields: [
          {
            id: "houseType",
            kind: "cards",
            label: t("fields.houseType.label"),
            required: true,
            choices: HOUSE_TYPES.map((row) => ({ value: row.value, label: t(`houseTypes.${row.value}`), icon: row.icon }))
          },
          {
            id: "propertyAge",
            kind: "select",
            label: t("fields.propertyAge.label"),
            required: true,
            choices: AGES.map((row) => ({ value: row.value, label: t(`ages.${row.value}`) }))
          },
          {
            id: "partsSupply",
            kind: "cards",
            label: t("fields.partsSupply.label"),
            columns: 2,
            choices: PARTS_SUPPLY.map((row) => ({
              value: row.value,
              label: t(`partsSupply.${row.value}.label`),
              hint: t(`partsSupply.${row.value}.hint`)
            }))
          }
        ]
      },
      {
        id: "timing",
        advanced: true,
        title: t("steps.timing.title"),
        subtitle: t("steps.timing.subtitle"),
        icon: "⏱️",
        fields: [
          {
            id: "timing",
            kind: "cards",
            label: t("fields.timing.label"),
            required: true,
            choices: TIMING.map((row) => ({
              value: row.value,
              label: t(`timing.${row.value}.label`),
              hint: t(`timing.${row.value}.hint`),
              popular: row.value === "standard"
            }))
          }
        ]
      }
    ],
    compute: (answers) => computePlumbing(t, answers)
  };
}
