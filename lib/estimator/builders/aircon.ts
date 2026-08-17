import type { Answers, EstimateResult, EstimatorSpec, Choice } from "../types";
import { num, asArray, opt } from "./shared";
import type { Translator } from "../../i18n";

/**
 * Aircon tool suite — 7 calculators sharing one dictionary namespace.
 *
 * Prices are the published KL Servis Rumah aircon starting prices (the same
 * figures that appear on the service page and pricing guide). Every result is
 * an estimate; the final quotation is always confirmed after inspection.
 */

const INSTALL_BASE: Record<string, number> = {
  "wall-1-0": 259, "wall-1-5": 259, "wall-2-0": 324, "wall-2-5": 363,
  "wall-3-0": 428, "wall-4-0": 519, "wall-5-0": 584,
  "cassette-1-0": 377, "window-1-0": 259
};

const GAS_RATE: Record<string, number> = { r22: 2.5, r410a: 3.0, r32: 3.0 };

const BASIC_WALL: Record<string, number> = { "1-0": 129, "1-5": 129, "2-0": 156, "2-5": 156, "3-0": 195 };
const WASH_WALL: Record<string, number> = { "1-0": 156, "1-5": 156, "2-0": 195, "2-5": 195, "3-0": 234, "4-0": 260 };
const OVERHAUL_WALL: Record<string, number> = { "1-0": 286, "1-5": 286, "2-0": 364, "2-5": 364, "3-0": 455 };

const money = (n: number) => `RM ${Math.round(n).toLocaleString("en-US")}`;
const band = (low: number, high: number) => `${money(low)} – ${money(high)}`;

function result(
  t: Translator,
  price: number,
  recommendedService: string,
  serviceHref: string,
  breakdown: { label: string; value: string; note?: string }[]
): EstimateResult {
  const labour = Math.round(price * 0.7);
  const materials = price - labour;
  return {
    price,
    low: Math.round(price * 0.85),
    high: Math.round(price * 1.2),
    labour,
    materials,
    duration: t("common.duration"),
    recommendedService,
    packageName: t("common.package"),
    serviceHref,
    breakdown,
    addOns: [],
    related: [
      { label: t("common.relatedService"), href: "/services/aircon", desc: t("common.relatedServiceDesc") },
      { label: t("common.relatedPrice"), href: "/pricing", desc: t("common.relatedPriceDesc") }
    ],
    assumptions: [t("common.assumption")]
  };
}

/* 1 — Installation cost calculator */
export function buildAirconInstallationCostSpec(t: Translator): EstimatorSpec {
  const choices: Choice[] = [
    { value: "wall-1-0", label: t("install.unit.wall1"), hint: "1.0–1.5 HP", price: "From RM 259", popular: true },
    { value: "wall-2-0", label: t("install.unit.wall2"), hint: "2.0 HP", price: "From RM 324" },
    { value: "wall-2-5", label: t("install.unit.wall25"), hint: "2.5 HP", price: "From RM 363" },
    { value: "wall-3-0", label: t("install.unit.wall3"), hint: "3.0 HP", price: "From RM 428" },
    { value: "wall-4-0", label: t("install.unit.wall4"), hint: "4.0 HP", price: "From RM 519" },
    { value: "wall-5-0", label: t("install.unit.wall5"), hint: "5.0 HP", price: "From RM 584" },
    { value: "cassette-1-0", label: t("install.unit.cassette"), hint: "1.0–1.5 HP", price: "From RM 377" },
    { value: "window-1-0", label: t("install.unit.window"), hint: "1.0–1.5 HP", price: "From RM 259" }
  ];
  return {
    slug: "aircon-installation-cost",
    name: t("install.meta.name"),
    serviceSlug: "aircon",
    defaults: { unit: "wall-1-0", extraCopper: 0, access: "easy" },
    steps: [
      {
        id: "unit", title: t("install.steps.unit.title"), subtitle: t("install.steps.unit.subtitle"), icon: "🧊",
        fields: [{ id: "unit", kind: "cards", label: t("install.fields.unit"), required: true, columns: 2, choices }]
      },
      {
        id: "extra", title: t("install.steps.extra.title"), subtitle: t("install.steps.extra.subtitle"), icon: "📐",
        fields: [
          { id: "extraCopper", kind: "slider", label: t("install.fields.copper"), min: 0, max: 30, step: 1, defaultValue: 0, format: (v: number) => `${v} ft` },
          { id: "access", kind: "cards", label: t("install.fields.access"), columns: 2, choices: [
            { value: "easy", label: t("common.access.easy"), popular: true },
            { value: "difficult", label: t("common.access.difficult") }
          ] }
        ]
      }
    ],
    compute: (answers: Answers) => {
      const unit = String(answers.unit ?? "wall-1-0");
      const base = INSTALL_BASE[unit] ?? 259;
      const extra = num(answers.extraCopper, 0);
      const accessFactor = String(answers.access) === "difficult" ? 1.15 : 1;
      const copper = extra * 28;
      const price = Math.round((base + copper) * accessFactor);
      const breakdown = [
        { label: t("install.breakdown.base"), value: money(base), note: t("install.breakdown.baseNote") },
        { label: t("install.breakdown.copper"), value: `${extra} ft`, note: extra ? `+ ${money(copper)} (${t("install.breakdown.copperNote")})` : t("install.breakdown.copperNone") }
      ];
      return result(t, price, t("install.result.service"), "/services/aircon/installation", breakdown);
    }
  };
}

/* 2 — Gas top-up cost calculator */
export function buildAirconGasTopupCostSpec(t: Translator): EstimatorSpec {
  return {
    slug: "aircon-gas-topup-cost",
    name: t("gas.meta.name"),
    serviceSlug: "aircon",
    defaults: { gas: "r410a", psi: 30, leakCheck: true },
    steps: [
      {
        id: "gas", title: t("gas.steps.gas.title"), subtitle: t("gas.steps.gas.subtitle"), icon: "⛽",
        fields: [{ id: "gas", kind: "cards", label: t("gas.fields.gas"), required: true, columns: 1, choices: [
          { value: "r22", label: t("gas.types.r22"), price: "RM 2.50 / PSI" },
          { value: "r410a", label: t("gas.types.r410a"), price: "RM 3.00 / PSI", popular: true },
          { value: "r32", label: t("gas.types.r32"), price: "RM 3.00 / PSI" }
        ] }]
      },
      {
        id: "amount", title: t("gas.steps.amount.title"), subtitle: t("gas.steps.amount.subtitle"), icon: "🧮",
        fields: [
          { id: "psi", kind: "slider", label: t("gas.fields.psi"), min: 5, max: 100, step: 1, defaultValue: 30, format: (v: number) => `${v} PSI` },
          { id: "leakCheck", kind: "toggle", label: t("gas.fields.leak"), onLabel: t("gas.leak.yes"), offLabel: t("gas.leak.no"), defaultValue: true }
        ]
      }
    ],
    compute: (answers: Answers) => {
      const gas = String(answers.gas ?? "r410a");
      const psi = num(answers.psi, 30);
      const rate = GAS_RATE[gas] ?? 3.0;
      const leak = answers.leakCheck !== false;
      const gasCost = Math.round(psi * rate);
      const leakCost = leak ? 114 : 0;
      const price = gasCost + leakCost;
      const breakdown = [
        { label: t("gas.breakdown.gas"), value: `${psi} PSI × ${money(rate)}`, note: money(gasCost) },
        { label: t("gas.breakdown.leak"), value: leak ? money(leakCost) : t("gas.breakdown.leakNone"), note: t("gas.breakdown.leakNote") }
      ];
      return result(t, price, t("gas.result.service"), "/services/aircon/gas-top-up", breakdown);
    }
  };
}

/* 3 — Aircon size calculator */
export function buildAirconSizeCalculatorSpec(t: Translator): EstimatorSpec {
  return {
    slug: "aircon-size-calculator",
    name: t("size.meta.name"),
    serviceSlug: "aircon",
    defaults: { area: 150, ceiling: "standard", exposure: "low", occupancy: 2 },
    steps: [
      {
        id: "room", title: t("size.steps.room.title"), subtitle: t("size.steps.room.subtitle"), icon: "📏",
        fields: [
          { id: "area", kind: "slider", label: t("size.fields.area"), min: 60, max: 1200, step: 10, defaultValue: 150, format: (v: number) => `${v} sq ft` },
          { id: "ceiling", kind: "cards", label: t("size.fields.ceiling"), columns: 1, choices: [
            { value: "standard", label: t("size.ceiling.standard"), popular: true },
            { value: "high", label: t("size.ceiling.high") }
          ] },
          { id: "exposure", kind: "cards", label: t("size.fields.exposure"), columns: 1, choices: [
            { value: "low", label: t("size.exposure.low"), popular: true },
            { value: "high", label: t("size.exposure.high") }
          ] }
        ]
      }
    ],
    compute: (answers: Answers) => {
      const area = num(answers.area, 150);
      const ceiling = String(answers.ceiling) === "high" ? 1.15 : 1;
      const exposure = String(answers.exposure) === "high" ? 1.2 : 1;
      const btu = Math.round(area * 60 * ceiling * exposure);
      const hp = btu < 9000 ? "1.0" : btu < 12000 ? "1.0–1.5" : btu < 18000 ? "2.0" : btu < 24000 ? "2.5" : "3.0+";
      const estimate = btu < 9000 ? 129 : btu < 12000 ? 129 : btu < 18000 ? 156 : btu < 24000 ? 195 : 259;
      const breakdown = [
        { label: t("size.breakdown.area"), value: `${area} sq ft` },
        { label: t("size.breakdown.btu"), value: `${btu.toLocaleString("en-US")} BTU`, note: t("size.breakdown.hp", { hp }) }
      ];
      return result(t, estimate, `${hp} HP ${t("size.result.service")}`, "/services/aircon/basic-servicing", breakdown);
    }
  };
}

/* 4 — BTU calculator */
export function buildAirconBtuCalculatorSpec(t: Translator): EstimatorSpec {
  return {
    slug: "aircon-btu-calculator",
    name: t("btu.meta.name"),
    serviceSlug: "aircon",
    defaults: { length: 12, width: 12, height: 9, occupancy: 2 },
    steps: [
      {
        id: "dims", title: t("btu.steps.dims.title"), subtitle: t("btu.steps.dims.subtitle"), icon: "📐",
        fields: [
          { id: "length", kind: "number", label: t("btu.fields.length"), min: 5, max: 60, defaultValue: 12, suffix: "ft" },
          { id: "width", kind: "number", label: t("btu.fields.width"), min: 5, max: 60, defaultValue: 12, suffix: "ft" },
          { id: "occupancy", kind: "slider", label: t("btu.fields.occupancy"), min: 1, max: 10, step: 1, defaultValue: 2, format: (v: number) => `${v} ${t("btu.people")}` }
        ]
      }
    ],
    compute: (answers: Answers) => {
      const L = num(answers.length, 12);
      const W = num(answers.width, 12);
      const area = L * W;
      const occ = num(answers.occupancy, 2);
      const btu = Math.round(area * 25 + (occ > 2 ? (occ - 2) * 600 : 0));
      const breakdown = [
        { label: t("btu.breakdown.area"), value: `${area} sq ft (${L}×${W} ft)` },
        { label: t("btu.breakdown.occupancy"), value: `${occ} ${t("btu.people")}` },
        { label: t("btu.breakdown.btu"), value: `${btu.toLocaleString("en-US")} BTU` }
      ];
      return result(t, 129, t("btu.result.service"), "/services/aircon/installation", breakdown);
    }
  };
}

/* 5 — Electricity cost calculator */
export function buildAirconElectricityCostSpec(t: Translator): EstimatorSpec {
  return {
    slug: "aircon-electricity-cost",
    name: t("elec.meta.name"),
    serviceSlug: "aircon",
    defaults: { hp: "1-5", hours: 8, tariff: 0.5 },
    steps: [
      {
        id: "usage", title: t("elec.steps.usage.title"), subtitle: t("elec.steps.usage.subtitle"), icon: "⚡",
        fields: [
          { id: "hp", kind: "cards", label: t("elec.fields.hp"), columns: 1, choices: [
            { value: "1-0", label: "1.0 HP", hint: "≈ 0.8 kW" },
            { value: "1-5", label: "1.5 HP", hint: "≈ 1.1 kW", popular: true },
            { value: "2-0", label: "2.0 HP", hint: "≈ 1.6 kW" },
            { value: "2-5", label: "2.5 HP", hint: "≈ 2.0 kW" }
          ] },
          { id: "hours", kind: "slider", label: t("elec.fields.hours"), min: 1, max: 24, step: 1, defaultValue: 8, format: (v: number) => `${v} h` }
        ]
      }
    ],
    compute: (answers: Answers) => {
      const kwMap: Record<string, number> = { "1-0": 0.8, "1-5": 1.1, "2-0": 1.6, "2-5": 2.0 };
      const kw = kwMap[String(answers.hp ?? "1-5")] ?? 1.1;
      const hours = num(answers.hours, 8);
      const tariff = num(answers.tariff, 0.5);
      const monthly = Math.round(kw * hours * 30 * tariff);
      const breakdown = [
        { label: t("elec.breakdown.usage"), value: `${kw} kW × ${hours} h` },
        { label: t("elec.breakdown.monthly"), value: money(monthly), note: t("elec.breakdown.note") }
      ];
      return result(t, monthly, t("elec.result.service"), "/services/aircon/basic-servicing", breakdown);
    }
  };
}

/* 6 — Inverter savings calculator */
export function buildAirconSavingsCalculatorSpec(t: Translator): EstimatorSpec {
  return {
    slug: "aircon-savings-calculator",
    name: t("save.meta.name"),
    serviceSlug: "aircon",
    defaults: { hp: "1-5", hours: 8, tariff: 0.5 },
    steps: [
      {
        id: "usage", title: t("save.steps.usage.title"), subtitle: t("save.steps.usage.subtitle"), icon: "💰",
        fields: [
          { id: "hp", kind: "cards", label: t("save.fields.hp"), columns: 1, choices: [
            { value: "1-0", label: "1.0 HP" }, { value: "1-5", label: "1.5 HP", popular: true },
            { value: "2-0", label: "2.0 HP" }, { value: "2-5", label: "2.5 HP" }
          ] },
          { id: "hours", kind: "slider", label: t("save.fields.hours"), min: 1, max: 24, step: 1, defaultValue: 8, format: (v: number) => `${v} h` }
        ]
      }
    ],
    compute: (answers: Answers) => {
      const kwMap: Record<string, number> = { "1-0": 0.8, "1-5": 1.1, "2-0": 1.6, "2-5": 2.0 };
      const kw = kwMap[String(answers.hp ?? "1-5")] ?? 1.1;
      const hours = num(answers.hours, 8);
      const tariff = num(answers.tariff, 0.5);
      const monthly = Math.round(kw * hours * 30 * tariff * 0.35);
      const breakdown = [
        { label: t("save.breakdown.saving"), value: t("save.breakdown.pct") },
        { label: t("save.breakdown.monthly"), value: money(monthly), note: t("save.breakdown.note") }
      ];
      return result(t, monthly, t("save.result.service"), "/services/aircon/installation", breakdown);
    }
  };
}

/* 7 — Which aircon service do I need (diagnostic) */
export function buildAirconServicePickerSpec(t: Translator): EstimatorSpec {
  const symptoms: Choice[] = [
    { value: "not-cold", label: t("pick.symptoms.notCold") },
    { value: "leaking", label: t("pick.symptoms.leaking") },
    { value: "noise", label: t("pick.symptoms.noise") },
    { value: "smell", label: t("pick.symptoms.smell") },
    { value: "weak", label: t("pick.symptoms.weak") },
    { value: "not-on", label: t("pick.symptoms.notOn") },
    { value: "ice", label: t("pick.symptoms.ice") }
  ];
  return {
    slug: "aircon-service-picker",
    name: t("pick.meta.name"),
    serviceSlug: "aircon",
    defaults: { symptoms: ["not-cold"] },
    steps: [
      {
        id: "symptoms", title: t("pick.steps.symptoms.title"), subtitle: t("pick.steps.symptoms.subtitle"), icon: "🩺",
        fields: [{ id: "symptoms", kind: "multi", label: t("pick.fields.symptoms"), min: 1, choices: symptoms }]
      }
    ],
    compute: (answers: Answers) => {
      const picked = asArray(answers.symptoms);
      const has = (v: string) => picked.includes(v);
      let service = "Basic Servicing";
      let href = "/services/aircon/basic-servicing";
      let price = 129;
      if (has("leaking") || has("smell")) { service = "Chemical Wash"; href = "/services/aircon/chemical-wash"; price = 156; }
      if (has("leaking") && has("not-cold")) { service = "Chemical Overhaul"; href = "/services/aircon/chemical-overhaul"; price = 286; }
      if (has("not-cold") && !has("leaking")) { service = "Gas Top-Up"; href = "/services/aircon/gas-top-up"; price = 88; }
      if (has("not-on") || has("noise")) { service = "Repair"; href = "/services/aircon/repair"; price = 114; }
      if (has("ice")) { service = "Gas Top-Up"; href = "/services/aircon/gas-top-up"; price = 88; }
      if (has("weak")) { service = "Basic Servicing"; href = "/services/aircon/basic-servicing"; price = 129; }
      const breakdown = [
        { label: t("pick.breakdown.symptoms"), value: picked.map((s) => opt(t, `pick.symptoms.${s}`) ?? s).join(", ") },
        { label: t("pick.breakdown.service"), value: service, note: money(price) }
      ];
      const r = result(t, price, service, href, breakdown);
      r.findings = picked.map((s) => ({ title: opt(t, `pick.symptoms.${s}`) ?? s, detail: t("pick.findings.detail") }));
      return r;
    }
  };
}
