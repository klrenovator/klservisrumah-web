import { RATES, clamp, roundMoney, withinBand } from "../pricing";
import type { Answers, EstimateResult, EstimatorSpec } from "../types";
import { num, type Translator } from "./shared";

function durationLabel(t: Translator, days: number): string {
  if (days <= 0.4) return t("durations.halfDay");
  if (days <= 1.1) return t("durations.oneDay");
  if (days <= 2.5) return t("durations.oneTwoDays");
  return t("durations.twoThreeDays");
}

function getArea(answers: Answers, includeWalls: boolean, includeCeiling: boolean, hasHeight: boolean, hasSlope: boolean) {
  const L = num(answers.length ?? answers.customLength, 12);
  const W = num(answers.width ?? answers.customWidth, 12);
  const H = num(answers.height ?? answers.ceilingHeight, 10);
  const slope = num(answers.roofSlope, 1);
  const ceiling = L * W * (hasSlope ? slope : 1);
  const walls = 2 * (L + W) * H;
  let total = ceiling;
  if (includeWalls && includeCeiling) total = walls + ceiling;
  else if (includeWalls) total = walls;
  else total = ceiling;
  return { L, W, H, slope, ceiling, walls, total };
}

export function buildRoofAreaCalculatorSpec(t: Translator): EstimatorSpec {
  const includeWalls = false;
  const includeCeiling = true;
  const hasHeight = true;
  const hasSlope = true;
  return {
    slug: "roof-area-calculator",
    name: t("meta.name"),
    serviceSlug: "roof-repair",
    defaults: {
      length: 12,
      width: 12,
      customLength: 12,
      customWidth: 12,
      height: 10,
      ceilingHeight: 10,
      roofSlope: 1.15,
      roomPreset: "12x12",
      condition: "good",
      access: "easy",
      urgency: "standard"
    },
    steps: [
      {
        id: "dimensions",
        title: t("steps.dimensions.title"),
        subtitle: t("steps.dimensions.subtitle"),
        icon: "📐",
        fields: [
          { id: "length", kind: "number", label: t("fields.length.label"), min: 1, max: 200, defaultValue: 12, suffix: "ft" },
          { id: "width", kind: "number", label: t("fields.width.label"), min: 1, max: 200, defaultValue: 12, suffix: "ft" },
          ...(hasHeight ? [{ id: "height", kind: "slider" as const, label: t("fields.height.label"), min: 8, max: 20, step: 1, defaultValue: 10, format: (v: number) => `${v} ft` }] : []),
          ...(hasSlope ? [{ id: "roofSlope", kind: "cards" as const, label: t("fields.roofSlope.label"), columns: 1 as const, required: true, choices: [
            { value: "1", label: t("slope.flat.label"), hint: t("slope.flat.hint") },
            { value: "1.1", label: t("slope.low.label"), hint: t("slope.low.hint") },
            { value: "1.15", label: t("slope.medium.label"), hint: t("slope.medium.hint"), popular: true },
            { value: "1.3", label: t("slope.steep.label"), hint: t("slope.steep.hint") }
          ] }] : [])
        ]
      },
      {
        id: "condition",
        advanced: true,
        title: t("steps.condition.title"),
        subtitle: t("steps.condition.subtitle"),
        icon: "🔍",
        fields: [
          { id: "condition", kind: "select", label: t("fields.condition.label"), required: true, choices: [
            { value: "excellent", label: t("conditions.excellent.label"), hint: t("conditions.excellent.hint") },
            { value: "good", label: t("conditions.good.label"), hint: t("conditions.good.hint") },
            { value: "poor", label: t("conditions.poor.label"), hint: t("conditions.poor.hint") }
          ]},
          { id: "access", kind: "select", label: t("fields.access.label"), required: true, choices: [
            { value: "easy", label: t("access.easy.label"), hint: t("access.easy.hint") },
            { value: "difficult", label: t("access.difficult.label"), hint: t("access.difficult.hint") }
          ]}
        ]
      }
    ],
    compute: (answers) => {
      const { L, W, H, slope, ceiling, walls, total } = getArea(answers, includeWalls, includeCeiling, hasHeight, hasSlope);
      const breakdown = [
        { label: t("breakdown.dimensions"), value: `${L} × ${W} ft${hasHeight ? ` × ${H} ft` : ""}`, note: hasSlope ? `slope ×${slope}` : undefined },
        { label: t("breakdown.area"), value: `${Math.round(total).toLocaleString()} sq ft`, note: includeWalls && includeCeiling ? `walls ${Math.round(walls)} + ceiling ${Math.round(ceiling)}` : includeWalls ? `2×(L+W)×H` : `L×W${hasSlope ? "×slope" : ""}` }
      ];
      const price = roundMoney(total);
      const low = roundMoney(price * 0.9);
      const high = roundMoney(price * 1.15);
      const materials = roundMoney(price * 0.32);
      const labour = price - materials;
      return {
        price, low, high, labour, materials,
        duration: durationLabel(t, total / 800),
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
