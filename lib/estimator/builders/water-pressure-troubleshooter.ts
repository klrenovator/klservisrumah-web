import { RATES, roundMoney } from "../pricing";
import type { Answers, EstimateResult } from "../types";
import { asArray, type Translator } from "./shared";
import type { EstimatorSpec } from "../types";

export function buildWaterPressureTroubleshooterSpec(t: Translator): EstimatorSpec {
  return {
    slug: "water-pressure-troubleshooter",
    name: t("meta.name"),
    serviceSlug: "plumbing",
    defaults: {
      location: "bathroom",
      severity: "moderate",
      symptoms: [],
      affected: "spot",
      propertyAge: "old",
      urgency: "standard"
    },
    steps: [
      {
        id: "symptoms",
        title: t("steps.symptoms.title"),
        subtitle: t("steps.symptoms.subtitle"),
        icon: "🔍",
        fields: [
          { id: "symptoms", kind: "multi", label: t("fields.symptoms.label"), choices: [
            { value: "leak", label: t("symptoms.leak.label"), hint: t("symptoms.leak.hint") },
            { value: "low-pressure", label: t("symptoms.lowPressure.label"), hint: t("symptoms.lowPressure.hint") },
            { value: "noise", label: t("symptoms.noise.label"), hint: t("symptoms.noise.hint") },
            { value: "stain", label: t("symptoms.stain.label"), hint: t("symptoms.stain.hint") },
            { value: "mould", label: t("symptoms.mould.label") },
            { value: "burst", label: t("symptoms.burst.label") }
          ]},
          { id: "severity", kind: "cards", label: t("fields.severity.label"), required: true, choices: [
            { value: "minor", label: t("severity.minor.label") },
            { value: "moderate", label: t("severity.moderate.label"), popular: true },
            { value: "severe", label: t("severity.severe.label") },
            { value: "emergency", label: t("severity.emergency.label") }
          ]}
        ]
      },
      {
        id: "location",
        title: t("steps.location.title"),
        subtitle: t("steps.location.subtitle"),
        icon: "📍",
        fields: [
          { id: "location", kind: "cards", label: t("fields.location.label"), choices: [
            { value: "bathroom", label: t("locations.bathroom.label") },
            { value: "kitchen", label: t("locations.kitchen.label") },
            { value: "ceiling", label: t("locations.ceiling.label") },
            { value: "outdoor", label: t("locations.outdoor.label") }
          ]}
        ]
      }
    ],
    compute: (answers) => {
      const symptoms = asArray(answers.symptoms);
      const severity = String(answers.severity ?? "moderate");
      const sevMap: Record<string, number> = { minor: 0.8, moderate: 1, severe: 1.4, emergency: 1.8 };
      const base = 180;
      const price = roundMoney(base * (sevMap[severity] ?? 1) * (1 + symptoms.length * 0.15));
      const findings = symptoms.map(s=> ({ title: t(`symptoms.${s}.label`), detail: t(`symptoms.${s}.hint`) || t("findings.generic") })).slice(0,3);
      if (!findings.length) findings.push({ title: t("findings.inspectionTitle"), detail: t("findings.inspectionDetail") });
      const sev: any = severity === "emergency" ? "emergency" : severity === "severe" ? "urgent" : severity === "moderate" ? "soon" : "routine";
      const materials = roundMoney(price * 0.3);
      const labour = price - materials;
      return {
        price,
        low: roundMoney(price * 0.85),
        high: roundMoney(price * 1.3),
        labour,
        materials,
        duration: severity === "emergency" ? "Same day" : "1–2 working days",
        recommendedService: t("meta.service"),
        packageName: t("packages.standard"),
        serviceHref: "/services/plumbing",
        breakdown: [
          { label: t("breakdown.severity"), value: t(`severity.${severity}.label`) },
          { label: t("breakdown.symptoms"), value: symptoms.length ? symptoms.join(", ") : t("breakdown.none") }
        ],
        findings,
        severity: sev,
        severityNote: t("severityNote."+sev),
        addOns: [],
        related: [{ label: t("related.service.label"), href: "/services/plumbing", desc: t("related.service.desc") }],
        assumptions: [t("assumptions.inspection")],
        articles: []
      };
    }
  };
}
