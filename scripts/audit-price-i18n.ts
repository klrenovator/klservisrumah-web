/**
 * Localized price/unit integrity gate (Fix Wave 28, 2026-08-31).
 *
 * BACKGROUND — caught on the LIVE site during the Wave-28 production
 * verification: the BM and 中文 service data carried English price tokens.
 * The BM pricing page offered "Dari RM 14 / sq ft" and the 中文 pricing hub
 * billed services at "从 RM 14 / sq ft 起" — while every correctly-authored
 * localized price elsewhere says "kaki persegi" / "平方英尺". The same leaks
 * shipped into the generated quote catalog (`quote-catalog.generated.ts`),
 * the localized estimator pickers and the `/ms|/zh/services/<slug>/cost`
 * rate tables, because all of those surfaces quote the registry verbatim.
 * Affected families at audit time:
 *
 *   • ms `sq ft` prices — tiling (11), plaster-ceiling (10), skim-coat (2),
 *     plus a half-translated "Dari RM 22 / linier ft" and "1,000 sqft" in a
 *     skim-coat description
 *   • zh `sq ft` prices — tiling (11), plaster-ceiling (10), skim-coat (2)
 *     plus "1,000 sqft" in a description
 *   • ms electrical — 7 prices billed "/ point" instead of "/ titik"
 *   • 6 localized meta descriptions with "RM14/sqft" strings
 *
 * Nothing scanned for it: the trilingual-leak gate covers DirectAnswer notes,
 * the part-3 leak scan covers English *phrases*, and no gate checked the unit
 * tokens inside localized price strings. This script fails `prebuild` if any
 * English unit/prefix ever returns inside a BM/中文 field.
 *
 * CONVENTIONS enforced (drawn from the site's own majority authored usage):
 *   ms:  sq ft → "kaki persegi" · linear ft → "kaki linier" · point → "titik"
 *        price prefix "Dari RM …" (never "From RM …")
 *   zh:  sq ft → "平方英尺" (authored majority; "平方呎" also appears and is a
 *        terminology choice, not a leak) · price "从 RM … 起" (never "From")
 *   MS loanwords are allowed: "panel", "unit", "power point" (the fixture
 *   NAME — only "/ point" as a billing UNIT is a leak).
 *
 * Run: automatically inside `npm run prebuild` (`audit:price-i18n`).
 * Exits non-zero on any violation.
 */
import { servicesData } from "@/config/services-data";

type Violation = { service: string; locale: string; path: string; value: string; rule: string };

const violations: Violation[] = [];

/** English tokens that must never appear inside a BM/中文 string. */
const RULES: Array<{ rule: string; re: RegExp }> = [
  { rule: "en-area-unit (use kaki persegi / 平方英尺)", re: /\bsq\.?\s?ft\b|\bsqft\b|\bpsf\b|\bper square (?:foot|feet)\b/i },
  { rule: "en-linear-unit (use kaki linier / 延尺)", re: /\blinier ft\b|\blinear (?:ft|foot|feet)\b/i },
  { rule: "en-price-prefix (use Dari RM / 从 RM … 起)", re: /(^|\s)From\s+RM/i },
  { rule: "en-billing-unit after slash (use titik/bilik/…)", re: /\/\s*(room|point|visit|job|hour|task)\b/i }
];

function scan(node: unknown, service: string, locale: string, path: string) {
  if (typeof node === "string") {
    for (const { rule, re } of RULES) {
      if (re.test(node)) {
        violations.push({
          service,
          locale,
          path,
          value: node.length > 110 ? node.slice(0, 110) + "…" : node,
          rule
        });
      }
    }
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item, i) => scan(item, service, locale, `${path}[${i}]`));
    return;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
      scan(value, service, locale, path ? `${path}.${key}` : key);
    }
  }
}

for (const [slug, service] of Object.entries(servicesData)) {
  for (const locale of ["ms", "zh"] as const) {
    const localized = service.i18n?.[locale];
    if (!localized) continue;
    scan(localized, slug, locale, "");
  }
}

console.log("💱 Localized price/unit integrity audit");
console.log(`   Services scanned: ${Object.keys(servicesData).length} × (ms+zh branches)`);

if (violations.length > 0) {
  console.error(`\n❌ ${violations.length} English-token leak(s) inside BM/中文 service data:`);
  for (const v of violations) {
    console.error(`   [${v.service} → i18n.${v.locale}${v.path}] (${v.rule})\n     ${v.value}`);
  }
  process.exit(1);
}

console.log("   ✅ 0 English unit/prefix leaks inside BM/中文 service data");
