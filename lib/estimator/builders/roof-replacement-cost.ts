import { RATES, clamp, roundMoney, withinBand } from "../pricing";
import type { Answers, EstimateResult, EstimatorSpec } from "../types";
import { num, type Translator } from "./shared";

function durationLabel(t: Translator, price: number): string {
  if (price < 500) return t("durations.halfDay");
  if (price < 1500) return t("durations.oneDay");
  if (price < 4000) return t("durations.twoDays");
  return t("durations.threeToFive");
}

export function buildRoofReplacementCostSpec(t: Translator): EstimatorSpec {
  const unit: string = "sqft";
  const rate = 28;
  return {
    slug: "roof-replacement-cost",
    name: t("meta.name"),
    serviceSlug: "roof-repair",
    defaults: {
      area: 120,
      length: 12,
      width: 10,
      quantity: 1,
      material: "standard",
      condition: "good",
      access: "easy",
      urgency: "standard"
    },
    steps: [
      {
        id: "size",
        title: t("steps.size.title"),
        subtitle: t("steps.size.subtitle"),
        icon: "📐",
        fields: [
          ...(unit === "sqft" ? [
            { id: "length", kind: "number" as const, label: t("fields.length.label"), min: 1, max: 500, defaultValue: 12, suffix: "ft" },
            { id: "width", kind: "number" as const, label: t("fields.width.label"), min: 1, max: 500, defaultValue: 10, suffix: "ft" }
          ] : [
            { id: "quantity", kind: "slider" as const, label: t("fields.quantity.label"), min: 1, max: 100, step: 1, defaultValue: 1, format: (v:number)=> `${v} ${unit}` }
          ])
        ]
      },
      {
        id: "options",
        title: t("steps.options.title"),
        subtitle: t("steps.options.subtitle"),
        icon: "🎚️",
        fields: [
          { id: "material", kind: "cards", label: t("fields.material.label"), choices: [
            { value: "economy", label: t("materials.economy.label"), hint: t("materials.economy.hint") },
            { value: "standard", label: t("materials.standard.label"), hint: t("materials.standard.hint"), popular: true },
            { value: "premium", label: t("materials.premium.label"), hint: t("materials.premium.hint") }
          ]},
          { id: "condition", kind: "select", label: t("fields.condition.label"), choices: [
            { value: "good", label: t("conditions.good.label") },
            { value: "worn", label: t("conditions.worn.label") },
            { value: "damaged", label: t("conditions.damaged.label") }
          ]}
        ]
      },
      {
        id: "access",
        advanced: true,
        title: t("steps.access.title"),
        subtitle: t("steps.access.subtitle"),
        icon: "🪜",
        fields: [
          { id: "access", kind: "select", label: t("fields.access.label"), choices: [
            { value: "easy", label: t("access.easy.label") },
            { value: "difficult", label: t("access.difficult.label") }
          ]},
          { id: "urgency", kind: "cards", label: t("fields.urgency.label"), choices: [
            { value: "standard", label: t("urgency.standard.label"), popular: true },
            { value: "urgent", label: t("urgency.urgent.label") }
          ]}
        ]
      }
    ],
    compute: (answers) => {
      const L = num(answers.length, 12);
      const W = num(answers.width, 10);
      const qty = unit === "sqft" ? L * W : num(answers.quantity, 1);
      const mat = String(answers.material ?? "standard");
      const matMult: Record<string, number> = { economy: 0.85, standard: 1, premium: 1.35 };
      const cond = String(answers.condition ?? "good");
      const condMult: Record<string, number> = { good: 1, worn: 1.15, damaged: 1.32 };
      const access = String(answers.access ?? "easy");
      const accessMult = access === "difficult" ? 1.2 : 1;
      const urgency = String(answers.urgency ?? "standard");
      const urgencyMult = urgency === "urgent" ? 1.15 : 1;
      const base = qty * rate;
      const total = base * (matMult[mat] ?? 1) * (condMult[cond] ?? 1) * accessMult * urgencyMult;
      const price = roundMoney(total);
      const low = roundMoney(price * 0.85);
      const high = roundMoney(price * 1.25);
      const materials = roundMoney(price * 0.38);
      const labour = price - materials;
      const breakdown = [
        { label: t("breakdown.qty"), value: unit === "sqft" ? `${L}×${W} ft = ${qty} ${unit}` : `${qty} ${unit}`, note: `${rate} per ${unit}` },
        { label: t("breakdown.material"), value: t(`materials.${mat}.label`), note: `${((matMult[mat]??1)*100-100).toFixed(0)}%` },
        { label: t("breakdown.totalArea"), value: `${qty} ${unit}`, note: t("breakdown.estimated") }
      ];
      return {
        price,
        low,
        high,
        labour,
        materials,
        duration: durationLabel(t, price),
        recommendedService: t("meta.service"),
        packageName: t("packages.standard"),
        serviceHref: "/services/roof-repair",
        breakdown,
        addOns: [],
        related: [
          { label: t("related.service.label"), href: "/services/roof-repair", desc: t("related.service.desc") },
          { label: t("related.allTools.label"), href: "/tools", desc: t("related.allTools.desc") }
        ],
        assumptions: [t("assumptions.measured")],
        articles: []
      };
    }
  };
}
