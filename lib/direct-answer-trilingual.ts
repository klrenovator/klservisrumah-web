import type { ServiceDetail } from "@/config/services-data";

/**
 * lib/direct-answer-trilingual.ts — single source of truth for the trilingual
 * BM/中文 sub-notes rendered under the DirectAnswer card on every
 * `/services/<slug>` hub (P3-01 fix: English tagline/warranty/title fragments
 * used to leak into the Malay/Chinese sentences because the component
 * interpolated the *active page locale's* English fields).
 *
 * Why a pure module (no React, no `servicesData` import):
 *   1. `ServiceDetailContent` is a client component and renders this on all 29
 *      service hubs; the client-bundle guard forbids reaching the ~470 KB
 *      service registry from client modules, so every value comes from the
 *      `service` prop (the registry types are type-only imports and are
 *      erased at build).
 *   2. `scripts/validate-trilingual-direct-answer.ts` runs the *exact same*
 *      builder over all 29 services × every locale base during `prebuild`, so
 *      a leak can never survive into `npm run build` — CI enforces it without
 *      any workflows change.
 *
 * Rules:
 *   • Each note interpolates the fields localized *for its own language*:
 *     BM note ← `service.i18n.ms`, ZH note ← `service.i18n.zh`. Never the
 *     page locale's fields, so EN, MS and ZH renders all show both notes in
 *     their own correct language (validate-service-i18n + this session's
 *     validator guarantee every service carries all six overrides).
 *   • Prices keep the `RM` numeral (locale-neutral) but the per-sq-ft unit is
 *     localized — "sq ft" → "kaki persegi" (BM) / "平方呎" (ZH), matching the
 *     estimator message keys (`sqft.noun`) the same pages already use.
 *   • Templates keep the fixed anchor phrases the Part 3 AEO corpus audit
 *     greps for ("disyorkan apabila anda memerlukan", "Pakej kami bermula",
 *     "Perkhidmatan ini diberi harga", "适合需要", "的客户") — do not rename
 *     them without updating `scripts/part3-aeo-audit.ts`.
 */

export type TrilingualNotes = { ms: string; zh: string };

/** The three DirectAnswer inputs that must be in-language per note locale. */
type LocalizableFields = "title" | "tagline" | "warranty";

/** English per-area unit tokens that must never appear in a BM/中文 note. */
export const UNIT_LEAK_RE = /\bsq\.?\s?ft\b|\bsqft\b|\bpsf\b|\bper square (?:foot|feet)\b/gi;

const UNIT_SWAP: Record<"ms" | "zh", Array<[RegExp, string]>> = {
  ms: [
    [/\bsq\.?\s?ft\b/gi, "kaki persegi"],
    [/\bsqft\b/gi, "kaki persegi"],
    [/\bpsf\b/gi, "kaki persegi"]
  ],
  zh: [
    [/\bsq\.?\s?ft\b/gi, "平方呎"],
    [/\bsqft\b/gi, "平方呎"],
    [/\bpsf\b/gi, "平方呎"]
  ]
};

/** Replace English area units with the locale's own term. */
export function localizeUnits(text: string, locale: "ms" | "zh"): string {
  let out = text;
  for (const [re, repl] of UNIT_SWAP[locale]) out = out.replace(re, repl);
  return out;
}

/**
 * Resolve a field for a note locale the same way `getLocalizedService` does
 * (override, else fall back to the incoming value). Kept inline so this
 * module needs no dependency on the locale-resolution layer.
 */
function field(service: ServiceDetail, locale: "ms" | "zh", name: LocalizableFields): string {
  return service.i18n?.[locale]?.[name]?.trim() || service[name];
}

/** Same predicate as `config/services-data.isQuoteOnlyService`, re-declared
 * here because this module (and its consumers) may not import the registry. */
export function quoteOnlyFromProp(service: ServiceDetail): boolean {
  const hasAmount = (price: string) => /RM\s*\d/.test(price);
  return !hasAmount(service.startPrice) && service.subServices.every((sub) => !hasAmount(sub.price));
}

/** Trim a tagline/warranty to a bare mid-sentence clause (drop trailing
 * "." / "。" so the template can supply the sentence joiner itself). */
function clause(text: string): string {
  return text.replace(/\s*[.。]+\s*$/, "").trim();
}

/** Lowercase the first character only — keeps proper nouns (Mapei, ACP, PU)
 * intact while reading naturally after "memerlukan". */
function firstLower(text: string): string {
  return text.length ? text[0].toLowerCase() + text.slice(1) : text;
}

/**
 * Build the BM + ZH sub-notes for a service. `service` may be the English
 * base or an already-localized copy (LocaleServiceView passes the active
 * locale's version) — the output is identical either way because every value
 * is re-resolved from `i18n.ms` / `i18n.zh`.
 */
export function buildServiceTrilingualNotes(service: ServiceDetail): TrilingualNotes {
  const quoteOnly = quoteOnlyFromProp(service);

  // ── BM note (always from the ms override) ─────────────────────────────
  const msTitle = field(service, "ms", "title");
  const msTag = firstLower(localizeUnits(clause(field(service, "ms", "tagline")), "ms"));
  const msWarranty = localizeUnits(clause(field(service, "ms", "warranty")), "ms").toLowerCase();
  const msPrice = localizeUnits(service.startPrice, "ms");

  const ms = quoteOnly
    ? `${msTitle} disyorkan apabila anda memerlukan ${msTag}. ` +
      `Perkhidmatan ini diberi harga mengikut projek: KL Servis Rumah mengesahkan skop, bahan dan ` +
      `terma sebut harga secara bertulis sebelum kerja bermula, dengan ${msWarranty}. ` +
      `Hantar lokasi, gambar dan anggaran ukuran di WhatsApp untuk sebut harga khusus projek.`
    : `${msTitle} disyorkan apabila anda memerlukan ${msTag}. ` +
      `Pakej kami bermula dari ${msPrice} dengan sebut harga terperinci, operasi diinsuranskan, ` +
      `dan ${msWarranty}.`;

  // ── ZH note (always from the zh override) ─────────────────────────────
  const zhTitle = field(service, "zh", "title");
  const zhTag = localizeUnits(clause(field(service, "zh", "tagline")), "zh");
  const zhWarranty = localizeUnits(clause(field(service, "zh", "warranty")), "zh");
  const zhPrice = localizeUnits(service.startPrice, "zh");

  const zh = quoteOnly
    ? `${zhTitle} 适合需要${zhTag}的客户。` +
      `本服务按项目计价：KL Servis Rumah 在开工前以书面确认施工范围、材料与报价条款，` +
      `并提供${zhWarranty}。欢迎通过 WhatsApp 发送位置、照片和大致尺寸，获取项目专项报价。`
    : `${zhTitle} 适合需要${zhTag}的客户。` +
      `我们的服务从 ${zhPrice} 起，包含透明分项报价、全程保险、以及${zhWarranty}。`;

  return { ms, zh };
}
