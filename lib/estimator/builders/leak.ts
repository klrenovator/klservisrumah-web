/**
 * Water Leak Triage — locale-aware spec builder.
 *
 * Produces likely causes, an urgency level and a repair estimate built from the
 * published waterproofing / plumbing / ceiling / roof rates. Copy resolves
 * through the injected translator; this module carries only locale-neutral
 * data (values, icons, method mapping, weights).
 */

import { RATES, clamp, roundMoney, priceLabel } from "../pricing";
import type { AddOn, Answers, EstimateResult, EstimatorSpec, Severity } from "../types";
import { asArray, opt, type Translator } from "./shared";

export type LeakLocation = {
  value: string;
  icon: string;
  /** Base repair approach used to derive the number. */
  method: "pu" | "bathroom" | "roof" | "pipe" | "ceiling" | "fixture" | "external";
  serviceHref: string;
  baseUrgency: number;
};

export const LEAK_LOCATIONS: LeakLocation[] = [
  { value: "bathroom", icon: "🚿", method: "bathroom", serviceHref: "/services/waterproofing", baseUrgency: 2 },
  { value: "kitchen", icon: "🍽️", method: "pipe", serviceHref: "/services/plumbing", baseUrgency: 2 },
  { value: "roof", icon: "🏚️", method: "roof", serviceHref: "/services/roof-repair", baseUrgency: 3 },
  { value: "ceiling", icon: "🔲", method: "ceiling", serviceHref: "/services/ceiling", baseUrgency: 3 },
  { value: "balcony", icon: "🌿", method: "pu", serviceHref: "/services/waterproofing", baseUrgency: 2 },
  { value: "wall", icon: "🧱", method: "pu", serviceHref: "/services/waterproofing", baseUrgency: 2 },
  { value: "outdoor", icon: "🌳", method: "external", serviceHref: "/services/plumbing", baseUrgency: 2 },
  { value: "water-tank", icon: "🛢️", method: "pipe", serviceHref: "/services/plumbing", baseUrgency: 3 },
  { value: "pipe", icon: "🔧", method: "pipe", serviceHref: "/services/plumbing", baseUrgency: 3 },
  { value: "toilet", icon: "🚽", method: "fixture", serviceHref: "/services/plumbing", baseUrgency: 2 },
  { value: "tap", icon: "🚰", method: "fixture", serviceHref: "/services/plumbing", baseUrgency: 1 },
  { value: "water-heater", icon: "♨️", method: "fixture", serviceHref: "/services/water-heater", baseUrgency: 3 }
];

const locationMap = new Map(LEAK_LOCATIONS.map((row) => [row.value, row]));

const SYMPTOMS: { value: string; icon: string; weight: number }[] = [
  { value: "wet-wall", icon: "💧", weight: 1 },
  { value: "dripping", icon: "🚰", weight: 3 },
  { value: "low-pressure", icon: "📉", weight: 2 },
  { value: "brown-stain", icon: "🟤", weight: 1 },
  { value: "ceiling-bubble", icon: "🎈", weight: 3 },
  { value: "cracks", icon: "🪚", weight: 2 },
  { value: "mould", icon: "🦠", weight: 2 },
  { value: "burst-pipe", icon: "🌊", weight: 5 },
  { value: "pipe-noise", icon: "🔊", weight: 2 },
  { value: "meter-spinning", icon: "⏲️", weight: 4 },
  { value: "high-bill", icon: "🧾", weight: 2 },
  { value: "peeling-paint", icon: "🩹", weight: 1 }
];

const SEVERITY_LEVELS: { value: string; weight: number }[] = [
  { value: "slow", weight: 0 },
  { value: "moderate", weight: 2 },
  { value: "fast", weight: 4 },
  { value: "severe", weight: 6 }
];

const DURATIONS: { value: string; weight: number }[] = [
  { value: "today", weight: 2 },
  { value: "week", weight: 1 },
  { value: "month", weight: 1 },
  { value: "months", weight: 2 },
  { value: "year", weight: 3 }
];

const PROPERTY_AGE: { value: string; factor: number }[] = [
  { value: "new", factor: 0.95 },
  { value: "mid", factor: 1 },
  { value: "older", factor: 1.1 },
  { value: "old", factor: 1.2 }
];

const PROPERTY_TYPE: { value: string; icon: string; factor: number }[] = [
  { value: "condo", icon: "🏢", factor: 1.05 },
  { value: "terrace", icon: "🏠", factor: 1 },
  { value: "semi-d", icon: "🏡", factor: 1.1 },
  { value: "shop", icon: "🏪", factor: 1.15 }
];

const AFFECTED: { value: string; points: number; area: number }[] = [
  { value: "spot", points: 1, area: 12 },
  { value: "patch", points: 2, area: 30 },
  { value: "large", points: 4, area: 60 },
  { value: "multiple", points: 7, area: 120 }
];

/** Read a numbered cause list (causes.0 … causes.3) tolerating shorter lists. */
function causeList(t: Translator, prefix: string): string[] {
  return [0, 1, 2, 3]
    .map((index) => opt(t, `${prefix}.causes.${index}`))
    .filter((cause): cause is string => Boolean(cause));
}

export function computeLeak(t: Translator, answers: Answers): EstimateResult {
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
  let severityNote = t("severityNote.routine");
  if (symptoms.includes("burst-pipe") || score >= 18) {
    severity = "emergency";
    severityNote = t("severityNote.emergency");
  } else if (score >= 12) {
    severity = "urgent";
    severityNote = t("severityNote.urgent");
  } else if (score >= 7) {
    severity = "soon";
    severityNote = t("severityNote.soon");
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
        label: t("breakdown.pu"),
        value: points > 1
          ? t("breakdown.puValueMany", { points, rate: Math.round(perPoint) })
          : t("breakdown.puValueOne", { points, rate: Math.round(perPoint) }),
        note: t("breakdown.publishedRate", { label: priceLabel("waterproofing.pu") })
      });
      break;
    }
    case "bathroom": {
      const band = RATES.waterproofing.bathroomBand;
      repair = band.low + (RATES.waterproofing.bathroom - band.low) * 0.4 + (band.high - band.low) * complexity * 0.55;
      breakdown.push({
        label: t("breakdown.bathroom"),
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: t("breakdown.bathroomNote", { low: band.low.toLocaleString(), high: band.high.toLocaleString() })
      });
      if (complexity > 0.75) {
        quoteOnly = true;
        quoteOnlyReason = t("result.quoteOnlyReason");
        breakdown.push({
          label: t("breakdown.hack"),
          value: t("breakdown.hackValue", {
            low: RATES.waterproofing.bathroomHackBand.low.toLocaleString(),
            high: RATES.waterproofing.bathroomHackBand.high.toLocaleString()
          }),
          note: t("breakdown.hackNote")
        });
      }
      break;
    }
    case "roof": {
      repair = RATES.waterproofing.roofDiagnosis * (1 + complexity * 1.4);
      breakdown.push({
        label: t("breakdown.roof"),
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: t("breakdown.publishedRate", { label: priceLabel("roof.diagnosis") })
      });
      if (complexity > 0.6) {
        const area = affectedRow.area;
        const membrane = area * RATES.waterproofing.roofMembraneSqft;
        repair += membrane * 0.5;
        breakdown.push({
          label: t("breakdown.membrane"),
          value: `RM ${roundMoney(membrane * 0.5).toLocaleString()}`,
          note: t("breakdown.membraneNote", { area: Math.round(area / 2), rate: RATES.waterproofing.roofMembraneSqft })
        });
      }
      break;
    }
    case "ceiling": {
      repair = RATES.waterproofing.ceilingRepair * (1 + complexity * 1.5);
      breakdown.push({
        label: t("breakdown.ceiling"),
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: t("breakdown.publishedRate", { label: priceLabel("ceiling.repair") })
      });
      const source = RATES.waterproofing.puPoint * (0.6 + complexity);
      repair += source;
      breakdown.push({
        label: t("breakdown.source"),
        value: `RM ${roundMoney(source).toLocaleString()}`,
        note: t("breakdown.sourceNote")
      });
      break;
    }
    case "pipe": {
      const band = RATES.plumbing.minorBand;
      repair = RATES.plumbing.leakDiagnosis + (band.high - band.low) * complexity;
      breakdown.push({
        label: t("breakdown.pipe"),
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: t("breakdown.pipeNote", { label: priceLabel("plumbing.leak") })
      });
      break;
    }
    case "fixture": {
      repair = RATES.plumbing.fixtureInstall * (1 + complexity * 0.9);
      if (location.value === "water-heater") repair = RATES.plumbing.heaterRepair * (1 + complexity * 1.2);
      breakdown.push({
        label: location.value === "water-heater" ? t("breakdown.heater") : t("breakdown.fixture"),
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: t("breakdown.publishedRate", {
          label: location.value === "water-heater" ? priceLabel("waterHeater.repair") : priceLabel("plumbing.fixture")
        })
      });
      break;
    }
    case "external": {
      repair = RATES.plumbing.leakDiagnosis * (1 + complexity);
      breakdown.push({
        label: t("breakdown.external"),
        value: `RM ${roundMoney(repair).toLocaleString()}`,
        note: t("breakdown.publishedRate", { label: priceLabel("plumbing.leak") })
      });
      break;
    }
  }

  if (severity === "emergency") {
    const uplift = repair * 0.2;
    repair += uplift;
    breakdown.push({
      label: t("breakdown.emergencyUplift"),
      value: `RM ${roundMoney(uplift).toLocaleString()}`,
      note: t("breakdown.emergencyUpliftNote")
    });
  }

  repair *= contextFactor;
  if (contextFactor !== 1) {
    breakdown.push({
      label: t("breakdown.propertyFactor"),
      value: t("breakdown.propertyFactorValue", { factor: contextFactor.toFixed(2) }),
      note: t("breakdown.propertyFactorNote", {
        type: t(`propertyType.${typeRow.value}`),
        age: t(`propertyAge.${ageRow.value}`)
      })
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
      ? t("result.durationEmergency")
      : complexity > 0.7
        ? t("result.durationHigh")
        : complexity > 0.4
          ? t("result.durationMid")
          : t("result.durationLow");

  const causes = causeList(t, `locations.${location.value}`);
  const findings = [
    ...causes.slice(0, 3).map((cause) => ({
      title: cause,
      detail: t("result.causeDetail", { location: t(`locations.${location.value}.label`).toLowerCase() })
    })),
    ...symptoms
      .map((value) => SYMPTOMS.find((row) => row.value === value))
      .filter((row): row is (typeof SYMPTOMS)[number] => Boolean(row && opt(t, `symptoms.${row.value}.implies`)))
      .slice(0, 3)
      .map((row) => ({
        title: t(`symptoms.${row.value}.label`),
        detail: t(`symptoms.${row.value}.implies`)
      }))
  ];

  const addOns: AddOn[] = [
    {
      id: "ceiling-reinstate",
      label: t("addons.ceilingReinstate.label"),
      price: RATES.waterproofing.ceilingRepair,
      note: t("addons.ceilingReinstate.note", { label: priceLabel("ceiling.repair") }),
      recommended: symptoms.includes("ceiling-bubble") || location.value === "ceiling"
    },
    {
      id: "wall-damp",
      label: t("addons.wallDamp.label"),
      price: RATES.waterproofing.wallDamp,
      note: t("addons.wallDamp.note", { label: priceLabel("waterproofing.wallDamp") }),
      recommended: symptoms.includes("mould") || symptoms.includes("peeling-paint")
    },
    {
      id: "gutter",
      label: t("addons.gutter.label"),
      price: RATES.waterproofing.gutter,
      note: t("addons.gutter.note", { label: priceLabel("roof.gutter") }),
      recommended: location.value === "roof"
    },
    {
      id: "full-bathroom",
      label: t("addons.fullBathroom.label"),
      price: RATES.waterproofing.bathroom,
      note: t("addons.fullBathroom.note", { label: priceLabel("waterproofing.bathroom") }),
      recommended: location.value === "bathroom" && complexity > 0.5
    },
    {
      id: "repaint",
      label: t("addons.repaint.label"),
      price: RATES.painting.repairMinimum,
      note: t("addons.repaint.note", { label: priceLabel("painting.repair") }),
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
    recommendedService: t(`locations.${location.value}.service`),
    packageName:
      severity === "emergency"
        ? t("result.packageEmergency")
        : severity === "urgent"
          ? t("result.packageUrgent")
          : t("result.packageRoutine"),
    serviceHref: location.serviceHref,
    breakdown,
    addOns,
    findings,
    severity,
    severityNote,
    related: [
      { label: t("related.waterproofing.label"), href: "/services/waterproofing", desc: t("related.waterproofing.desc") },
      { label: t("related.plumbing.label"), href: "/services/plumbing", desc: t("related.plumbing.desc") },
      { label: t("related.ceiling.label"), href: "/services/ceiling", desc: t("related.ceiling.desc") },
      { label: t("related.roof.label"), href: "/services/roof-repair", desc: t("related.roof.desc") },
      { label: t("related.costGuide.label"), href: "/services/waterproofing/cost", desc: t("related.costGuide.desc") }
    ],
    articles: [
      { label: t("articles.ceilingFix"), href: "/blog/how-to-fix-leaking-ceiling-without-tile-hacking" },
      { label: t("articles.hiddenLeak"), href: "/blog/hidden-water-leak-detection-kl" },
      { label: t("articles.puVs"), href: "/blog/pu-grouting-vs-full-membrane-waterproofing" }
    ],
    maintenance: [t("maintenance.meter"), t("maintenance.gutters"), t("maintenance.silicone")],
    assumptions: [t("assumptions.diagnosis"), t("assumptions.scope"), t("assumptions.emergency")],
    quoteOnly,
    quoteOnlyReason
  };
}

export function buildLeakSpec(t: Translator): EstimatorSpec {
  return {
    slug: "leak-triage",
    name: t("meta.name"),
    serviceSlug: "waterproofing",
    resultLabel: t("meta.resultLabel"),
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
        title: t("steps.location.title"),
        subtitle: t("steps.location.subtitle"),
        icon: "📍",
        fields: [
          {
            id: "location",
            kind: "cards",
            label: t("fields.location.label"),
            required: true,
            choices: LEAK_LOCATIONS.map((row) => ({ value: row.value, label: t(`locations.${row.value}.label`), icon: row.icon }))
          }
        ]
      },
      {
        id: "symptoms",
        title: t("steps.symptoms.title"),
        subtitle: t("steps.symptoms.subtitle"),
        icon: "🔎",
        fields: [
          {
            id: "symptoms",
            kind: "multi",
            label: t("fields.symptoms.label"),
            required: true,
            min: 1,
            choices: SYMPTOMS.map((row) => ({ value: row.value, label: t(`symptoms.${row.value}.label`), icon: row.icon }))
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
            choices: SEVERITY_LEVELS.map((row) => ({
              value: row.value,
              label: t(`severityLevels.${row.value}.label`),
              hint: t(`severityLevels.${row.value}.hint`)
            }))
          },
          {
            id: "affected",
            kind: "cards",
            label: t("fields.affected.label"),
            required: true,
            choices: AFFECTED.map((row) => ({ value: row.value, label: t(`affected.${row.value}`) }))
          }
        ]
      },
      {
        id: "duration",
        advanced: true,
        title: t("steps.duration.title"),
        subtitle: t("steps.duration.subtitle"),
        icon: "🗓️",
        fields: [
          {
            id: "duration",
            kind: "cards",
            label: t("fields.duration.label"),
            required: true,
            choices: DURATIONS.map((row) => ({ value: row.value, label: t(`durations.${row.value}`) }))
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
            id: "propertyType",
            kind: "cards",
            label: t("fields.propertyType.label"),
            required: true,
            choices: PROPERTY_TYPE.map((row) => ({ value: row.value, label: t(`propertyType.${row.value}`), icon: row.icon }))
          },
          {
            id: "propertyAge",
            kind: "select",
            label: t("fields.propertyAge.label"),
            required: true,
            choices: PROPERTY_AGE.map((row) => ({ value: row.value, label: t(`propertyAge.${row.value}`) }))
          }
        ]
      }
    ],
    compute: (answers) => computeLeak(t, answers)
  };
}
