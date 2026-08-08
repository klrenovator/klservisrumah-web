import { RATES, clamp, roundMoney } from "../pricing";
import type { Answers, EstimateResult, EstimatorSpec } from "../types";
import { num, type Translator } from "./shared";

export function buildSocketQuantityCalculatorSpec(t: Translator): EstimatorSpec {
  return {
    slug: "socket-quantity-calculator",
    name: t("meta.name"),
    serviceSlug: "electrical",
    defaults: {
      length: 12,
      width: 12,
      customLength: 12,
      customWidth: 12,
      tileSize: "600x600",
      coverage: 350,
      waste: 10,
      coats: 2,
      socketsPerWall: 2,
      condition: "good"
    },
    steps: [
      {
        id: "area",
        title: t("steps.area.title"),
        subtitle: t("steps.area.subtitle"),
        icon: "📐",
        fields: [
          { id: "length", kind: "number", label: t("fields.length.label"), min: 1, max: 200, defaultValue: 12, suffix: "ft" },
          { id: "width", kind: "number", label: t("fields.width.label"), min: 1, max: 200, defaultValue: 12, suffix: "ft" }
        ]
      },
      {
        id: "quantity",
        title: t("steps.quantity.title"),
        subtitle: t("steps.quantity.subtitle"),
        icon: "🔢",
        fields: [
          { id: "tileSize", kind: "cards", label: t("fields.tileSize.label"), choices: [
            { value: "300x300", label: "300×300 mm", hint: "Small" },
            { value: "600x600", label: "600×600 mm", hint: "Standard", popular: true },
            { value: "600x1200", label: "600×1200 mm", hint: "Large slab" },
            { value: "800x800", label: "800×800 mm", hint: "Premium" }
          ], visible: (a)=> "socket-quantity-calculator".includes("tile") },
          { id: "socketsPerWall", kind: "slider", label: t("fields.socketsPerWall.label"), min: 1, max: 6, step: 1, defaultValue: 2, format: (v:number)=>`${v} per wall`, visible: (a)=> "socket-quantity-calculator".includes("socket") },
          { id: "coats", kind: "slider", label: t("fields.coats.label"), min: 1, max: 3, step: 1, defaultValue: 2, format: (v:number)=>`${v} coats`, visible: (a)=> "socket-quantity-calculator".includes("paint") },
          { id: "waste", kind: "slider", label: t("fields.waste.label"), min: 5, max: 20, step: 1, defaultValue: 10, format: (v:number)=>`${v}% waste` }
        ]
      }
    ],
    compute: (answers) => {
      const L = num(answers.length, 12);
      const W = num(answers.width, 12);
      const area = L * W;
      const waste = num(answers.waste, 10) / 100;
      const tileSize = String(answers.tileSize ?? "600x600");
      const tileMap: Record<string, number> = { "300x300": 0.09, "600x600": 0.36, "600x1200": 0.72, "800x800": 0.64 };
      const tileArea = tileMap[tileSize] ?? 0.36;
      const sqm = area * 0.0929;
      let qty = 0;
      let unit = "pcs";
      let desc = "";
      if ("socket-quantity-calculator".includes("tile")) {
        qty = Math.ceil((sqm / tileArea) * (1 + waste));
        desc = `${sqm.toFixed(1)} m² ÷ ${tileArea} m² per tile`;
        unit = "tiles";
      } else if ("socket-quantity-calculator".includes("paint")) {
        const coats = num(answers.coats, 2);
        const cov = 350;
        qty = Math.ceil((area * coats / cov) * (1 + waste));
        desc = `${area} sq ft × ${coats} coats ÷ ${cov}`;
        unit = "litres";
      } else if ("socket-quantity-calculator".includes("socket")) {
        const perWall = num(answers.socketsPerWall, 2);
        qty = perWall * 4;
        desc = `${perWall} per wall × 4 walls`;
        unit = "sockets";
      } else {
        qty = Math.ceil(area);
        desc = `${area} sq ft`;
      }
      const price = roundMoney(qty * 12);
      const breakdown = [
        { label: t("breakdown.area"), value: `${area} sq ft (${L}×${W} ft)`, note: `${sqm.toFixed(2)} m²` },
        { label: t("breakdown.quantity"), value: `${qty} ${unit}`, note: desc }
      ];
      return {
        price,
        low: roundMoney(price * 0.9),
        high: roundMoney(price * 1.2),
        labour: roundMoney(price * 0.6),
        materials: roundMoney(price * 0.4),
        duration: "1–2 working days",
        recommendedService: t("meta.service"),
        packageName: t("packages.standard"),
        serviceHref: "/services/electrical",
        breakdown,
        addOns: [],
        related: [{ label: t("related.service.label"), href: "/services/electrical", desc: t("related.service.desc") }],
        assumptions: [t("assumptions.measured")],
        articles: []
      };
    }
  };
}
