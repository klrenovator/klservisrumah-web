import { roundMoney } from "../pricing";
import type { EstimatorSpec } from "../types";
import { num, type Translator } from "./shared";

function durationLabel(t: Translator, price: number): string {
  if (price < 15000) return t("durations.oneTwoWeeks");
  if (price < 30000) return t("durations.twoThreeWeeks") || t("durations.threeToFive");
  if (price < 60000) return t("durations.fourToSixWeeks") || t("durations.oneTwoWeeks");
  return t("durations.sixToTwelveWeeks") || t("durations.threeToFive");
}

export function buildRenovationBudgetCalculatorSpec(t: Translator): EstimatorSpec {
  return {
    slug: "renovation-budget-calculator",
    name: t("meta.name"),
    serviceSlug: "house-renovation",
    defaults: {
      propertyType: "terrace",
      propertySize: 1500,
      kitchen: "yes",
      bathroomCount: 2,
      flooring: "spc",
      painting: "yes",
      ceiling: "yes",
      electrical: "yes",
      plumbing: "yes",
      carpentry: "standard",
      waterproofing: "yes",
      demolition: "yes",
      material: "standard",
      condition: "good",
      access: "easy",
      urgency: "standard"
    },
    steps: [
      {
        id: "property",
        title: t("steps.property.title"),
        subtitle: t("steps.property.subtitle"),
        icon: "🏠",
        fields: [
          {
            id: "propertyType",
            kind: "cards",
            label: t("fields.propertyType.label"),
            choices: [
              { value: "terrace", label: t("propertyTypes.terrace.label"), hint: t("propertyTypes.terrace.hint") },
              { value: "semi-d", label: t("propertyTypes.semiD.label"), hint: t("propertyTypes.semiD.hint") },
              { value: "bungalow", label: t("propertyTypes.bungalow.label"), hint: t("propertyTypes.bungalow.hint") },
              { value: "condo", label: t("propertyTypes.condo.label"), hint: t("propertyTypes.condo.hint"), popular: true },
              { value: "apartment", label: t("propertyTypes.apartment.label"), hint: t("propertyTypes.apartment.hint") },
              { value: "shoplot", label: t("propertyTypes.shoplot.label"), hint: t("propertyTypes.shoplot.hint") }
            ]
          },
          {
            id: "propertySize",
            kind: "number",
            label: t("fields.propertySize.label"),
            min: 300,
            max: 10000,
            defaultValue: 1500,
            suffix: "sq ft"
          }
        ]
      },
      {
        id: "scope",
        title: t("steps.scope.title"),
        subtitle: t("steps.scope.subtitle"),
        icon: "🛠️",
        fields: [
          {
            id: "kitchen",
            kind: "select",
            label: t("fields.kitchen.label"),
            choices: [
              { value: "no", label: t("options.no.label") },
              { value: "yes", label: t("options.yes.label") },
              { value: "full", label: t("options.full.label") }
            ]
          },
          {
            id: "bathroomCount",
            kind: "slider",
            label: t("fields.bathroomCount.label"),
            min: 0,
            max: 5,
            step: 1,
            defaultValue: 2,
            format: (v: number) => `${v} ${v === 1 ? t("units.bathroom") : t("units.bathrooms")}`
          },
          {
            id: "flooring",
            kind: "cards",
            label: t("fields.flooring.label"),
            choices: [
              { value: "none", label: t("options.none.label") },
              { value: "spc", label: t("flooringTypes.spc.label"), hint: t("flooringTypes.spc.hint"), popular: true },
              { value: "vinyl", label: t("flooringTypes.vinyl.label"), hint: t("flooringTypes.vinyl.hint") },
              { value: "laminate", label: t("flooringTypes.laminate.label"), hint: t("flooringTypes.laminate.hint") },
              { value: "tile", label: t("flooringTypes.tile.label"), hint: t("flooringTypes.tile.hint") },
              { value: "epoxy", label: t("flooringTypes.epoxy.label"), hint: t("flooringTypes.epoxy.hint") }
            ]
          },
          {
            id: "painting",
            kind: "select",
            label: t("fields.painting.label"),
            choices: [
              { value: "no", label: t("options.no.label") },
              { value: "yes", label: t("options.yes.label") },
              { value: "full", label: t("options.full.label") }
            ]
          },
          {
            id: "ceiling",
            kind: "select",
            label: t("fields.ceiling.label"),
            choices: [
              { value: "no", label: t("options.no.label") },
              { value: "yes", label: t("options.yes.label") },
              { value: "full", label: t("options.full.label") }
            ]
          }
        ]
      },
      {
        id: "trades",
        title: t("steps.trades.title"),
        subtitle: t("steps.trades.subtitle"),
        icon: "⚡",
        fields: [
          {
            id: "electrical",
            kind: "select",
            label: t("fields.electrical.label"),
            choices: [
              { value: "no", label: t("options.no.label") },
              { value: "yes", label: t("options.yes.label") },
              { value: "rewiring", label: t("options.rewiring.label") }
            ]
          },
          {
            id: "plumbing",
            kind: "select",
            label: t("fields.plumbing.label"),
            choices: [
              { value: "no", label: t("options.no.label") },
              { value: "yes", label: t("options.yes.label") },
              { value: "full", label: t("options.full.label") }
            ]
          },
          {
            id: "carpentry",
            kind: "select",
            label: t("fields.carpentry.label"),
            choices: [
              { value: "none", label: t("options.none.label") },
              { value: "standard", label: t("options.standard.label") },
              { value: "full", label: t("options.full.label") }
            ]
          },
          {
            id: "waterproofing",
            kind: "select",
            label: t("fields.waterproofing.label"),
            choices: [
              { value: "no", label: t("options.no.label") },
              { value: "yes", label: t("options.yes.label") }
            ]
          },
          {
            id: "demolition",
            kind: "select",
            label: t("fields.demolition.label"),
            choices: [
              { value: "no", label: t("options.no.label") },
              { value: "yes", label: t("options.yes.label") }
            ]
          }
        ]
      },
      {
        id: "options",
        title: t("steps.options.title"),
        subtitle: t("steps.options.subtitle"),
        icon: "🎚️",
        fields: [
          {
            id: "material",
            kind: "cards",
            label: t("fields.material.label"),
            choices: [
              { value: "economy", label: t("materials.economy.label"), hint: t("materials.economy.hint") },
              { value: "standard", label: t("materials.standard.label"), hint: t("materials.standard.hint"), popular: true },
              { value: "premium", label: t("materials.premium.label"), hint: t("materials.premium.hint") }
            ]
          },
          {
            id: "condition",
            kind: "select",
            label: t("fields.condition.label"),
            choices: [
              { value: "good", label: t("conditions.good.label") },
              { value: "worn", label: t("conditions.worn.label") },
              { value: "damaged", label: t("conditions.damaged.label") }
            ]
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
            choices: [
              { value: "easy", label: t("access.easy.label") },
              { value: "difficult", label: t("access.difficult.label") }
            ]
          },
          {
            id: "urgency",
            kind: "cards",
            label: t("fields.urgency.label"),
            choices: [
              { value: "standard", label: t("urgency.standard.label"), popular: true },
              { value: "urgent", label: t("urgency.urgent.label") }
            ]
          }
        ]
      }
    ],
    compute: (answers) => {
      const propertyType = String(answers.propertyType ?? "terrace");
      const propertySize = num(answers.propertySize, 1500);
      const kitchen = String(answers.kitchen ?? "yes");
      const bathroomCount = num(answers.bathroomCount, 2);
      const flooring = String(answers.flooring ?? "spc");
      const painting = String(answers.painting ?? "yes");
      const ceiling = String(answers.ceiling ?? "yes");
      const electrical = String(answers.electrical ?? "yes");
      const plumbing = String(answers.plumbing ?? "yes");
      const carpentry = String(answers.carpentry ?? "standard");
      const waterproofing = String(answers.waterproofing ?? "yes");
      const demolition = String(answers.demolition ?? "yes");
      const mat = String(answers.material ?? "standard");
      const cond = String(answers.condition ?? "good");
      const access = String(answers.access ?? "easy");
      const urgency = String(answers.urgency ?? "standard");

      const matMult: Record<string, number> = { economy: 0.85, standard: 1, premium: 1.35 };
      const condMult: Record<string, number> = { good: 1, worn: 1.15, damaged: 1.32 };
      const typeMult: Record<string, number> = { terrace: 1, "semi-d": 1.2, bungalow: 1.5, condo: 0.95, apartment: 0.85, shoplot: 1.1 };
      const flooringRate: Record<string, number> = { none: 0, spc: 14, vinyl: 12, laminate: 11, tile: 16, epoxy: 22 };
      const accessMult = access === "difficult" ? 1.15 : 1;
      const urgencyMult = urgency === "urgent" ? 1.12 : 1;

      // Base renovation per sq ft - from published house-renovation baseline
      const basePerSqft = 55; // Conservative base for full renovation
      let total = propertySize * basePerSqft * (typeMult[propertyType] ?? 1);

      // Kitchen
      if (kitchen !== "no") {
        const kitchenBase = kitchen === "full" ? 12000 : 8000;
        total += kitchenBase * (matMult[mat] ?? 1);
      }

      // Bathroom
      if (bathroomCount > 0) {
        total += bathroomCount * 6000 * (matMult[mat] ?? 1);
      }

      // Flooring
      if (flooring !== "none" && flooringRate[flooring]) {
        total += propertySize * flooringRate[flooring] * 0.7; // 70% of area typically floored
      }

      // Painting
      if (painting !== "no") {
        const paintMult = painting === "full" ? 1 : 0.6;
        total += propertySize * 6 * paintMult;
      }

      // Ceiling
      if (ceiling !== "no") {
        const ceilMult = ceiling === "full" ? 1 : 0.7;
        total += propertySize * 10 * ceilMult;
      }

      // Electrical
      if (electrical !== "no") {
        total += electrical === "rewiring" ? 4500 : 2200;
      }

      // Plumbing
      if (plumbing !== "no") {
        total += plumbing === "full" ? 3500 : 1500;
      }

      // Carpentry
      if (carpentry !== "none") {
        total += carpentry === "full" ? 12000 : 4500;
      }

      // Waterproofing
      if (waterproofing === "yes" && bathroomCount > 0) {
        total += bathroomCount * 1200;
      }

      // Demolition
      if (demolition === "yes") {
        total += propertySize * 4;
      }

      // Apply material, condition, access, urgency multipliers on top of base trades
      total = total * (matMult[mat] ?? 1) * (condMult[cond] ?? 1) * accessMult * urgencyMult;

      // Ensure minimum based on existing house-renovation startPrice
      if (total < 12000) total = 12000;

      const price = roundMoney(total);
      const low = roundMoney(price * 0.85);
      const high = roundMoney(price * 1.25);
      const materials = roundMoney(price * 0.42);
      const labour = price - materials;

      const breakdown = [
        { label: t("fields.propertyType.label"), value: t(`propertyTypes.${propertyType === "semi-d" ? "semiD" : propertyType}.label`), note: `${propertySize} sq ft` },
        { label: t("fields.kitchen.label"), value: kitchen === "no" ? t("options.no.label") : kitchen === "full" ? t("options.full.label") : t("options.yes.label"), note: kitchen === "no" ? "-" : "From RM 8,000" },
        { label: t("fields.bathroomCount.label"), value: `${bathroomCount} ${bathroomCount === 1 ? t("units.bathroom") : t("units.bathrooms")}`, note: bathroomCount > 0 ? `RM 6,000 x ${bathroomCount}` : "-" },
        { label: t("fields.flooring.label"), value: flooring === "none" ? t("options.none.label") : t(`flooringTypes.${flooring}.label`), note: flooring !== "none" ? `${flooringRate[flooring]}/sq ft` : "-" },
        { label: t("fields.painting.label"), value: painting === "no" ? t("options.no.label") : t("options.yes.label"), note: painting !== "no" ? "Interior + exterior" : "-" },
        { label: t("fields.ceiling.label"), value: ceiling === "no" ? t("options.no.label") : t("options.yes.label"), note: ceiling !== "no" ? "Plaster ceiling" : "-" },
        { label: t("breakdown.material"), value: t(`materials.${mat}.label`), note: `${((matMult[mat] ?? 1) * 100 - 100).toFixed(0)}%` }
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
        serviceHref: "/services/house-renovation",
        breakdown,
        addOns: [],
        related: [
          { label: t("related.kitchen.label") || "Kitchen Renovation", href: "/services/kitchen-renovation", desc: t("related.kitchen.desc") || "Kitchen makeover" },
          { label: t("related.bathroom.label") || "Bathroom Renovation", href: "/services/bathroom-renovation", desc: t("related.bathroom.desc") || "Bathroom makeover" },
          { label: t("related.service.label"), href: "/services/house-renovation", desc: t("related.service.desc") },
          { label: t("related.allTools.label"), href: "/tools", desc: t("related.allTools.desc") }
        ],
        assumptions: [t("assumptions.measured"), t("assumptions.renovationNote")],
        articles: []
      };
    }
  };
}
