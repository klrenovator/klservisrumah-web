/**
 * P3-04 gate — cost-page DirectAnswer validator (runs in `prebuild`).
 *
 * Part 3 of the deep audit found the 29 `/services/<slug>/cost` money pages
 * never literally answered *"how much does {service} cost in KL & Selangor?"*
 * — the single highest-intent query for this business and the exact query AI
 * Overviews answer — in the extractable question-heading + self-contained
 * answer format. `pctQuickAnswer` for the pattern was 0% while the service hubs
 * were at 100%, and the pages carried no unit-bearing price sentence at all.
 *
 * The fix renders a DirectAnswer card (question H2 + 2–3 sentence answer citing
 * the published starting price *with its unit* + estimator link) through the
 * pure builder in `lib/cost-direct-answer.ts`. This script runs that exact
 * builder over all 29 services × EN/MS/ZH so the card cannot silently rot:
 *
 *   1. shape      — question ends in "?" / "？" and carries the locale's own
 *                   "how much … cost" literal (an answer engine matching the
 *                   query must find the words, in the page's language);
 *   2. price      — priced services quote the published `RM` figure; quote-only
 *                   services never print a fabricated figure;
 *   3. units      — the five per-square-foot services keep their unit in the
 *                   answer, localized ("sq ft" → "kaki persegi" / "平方呎"),
 *                   and the pricing basis lists only localized unit nouns
 *                   (P3-05 regression guard);
 *   4. no leaks   — zero L1/L2/L3 trilingual-leak signatures in the BM/中文
 *                   answers (P3-01 regression guard);
 *   5. discipline — 25–90 words (EN/BM) or 60–260 CJK chars (中文), no
 *                   unresolved `{placeholder}` left in the rendered copy;
 *   6. parity     — the card's eight dictionary keys resolve in all three
 *                   locales (a missing key would fall back to English and
 *                   re-create the leak).
 *
 * Usage: node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON \
 *          --experimental-strip-types --import ./scripts/ts-resolver.mjs \
 *          scripts/validate-cost-direct-answer.ts
 */

import { servicesData } from "@/config/services-data";
import { SERVICE_SCOPES } from "@/lib/estimator/rate-book.generated";
import { getLocalizedService } from "@/lib/service-i18n";
import { createTranslator, type Locale, type MessageDictionary } from "@/lib/i18n";
import { trilingualLeakSignatures } from "@/lib/trilingual-leak";
import {
  COST_DIRECT_ANSWER_KEYS,
  buildCostDirectAnswer,
  buildCostDirectAnswerPills,
  buildCostDirectAnswerVars,
  buildCostUnitBasis,
  hasPublishedPrice
} from "@/lib/cost-direct-answer";
import enMessages from "../messages/en.json" with { type: "json" };
import msMessages from "../messages/ms.json" with { type: "json" };
import zhMessages from "../messages/zh.json" with { type: "json" };

const dictionaries: Record<Locale, MessageDictionary> = {
  en: enMessages as MessageDictionary,
  ms: msMessages as MessageDictionary,
  zh: zhMessages as MessageDictionary
};

const LOCALES: Locale[] = ["en", "ms", "zh"];

/** The literal "how much does … cost" phrasing each locale must keep. */
const QUESTION_LITERAL: Record<Locale, RegExp> = {
  en: /how much does .+ cost in kl & selangor\?/i,
  ms: /berapakah kos .+ di kl & selangor\?/i,
  zh: /.+在kl与雪兰莪需要多少钱？/i
};

/** The localized area-unit term that must survive in a per-sq-ft answer. */
const SQFT_TOKEN: Record<Locale, string> = {
  en: "sq ft",
  ms: "kaki persegi",
  zh: "平方呎"
};

type Failure = { slug: string; locale: Locale; check: string; detail: string };

const failures: Failure[] = [];
let cardsChecked = 0;
let pricedChecked = 0;
let quoteOnlyChecked = 0;

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function cjkCount(text: string): number {
  return (text.match(/[\u3400-\u9FFF\u3040-\u30FF]/g) || []).length;
}

for (const [slug, service] of Object.entries(servicesData)) {
  const scopeBook = SERVICE_SCOPES[slug];
  if (!scopeBook) {
    failures.push({ slug, locale: "en", check: "rate book present", detail: "no SERVICE_SCOPES entry — the card would render an empty pricing basis" });
    continue;
  }

  const units = scopeBook.scopes.map((scope) => scope.unit);

  for (const locale of LOCALES) {
    const localized = getLocalizedService(service, locale);
    const t = createTranslator(dictionaries, locale);

    const vars = buildCostDirectAnswerVars({
      t,
      locale,
      name: localized.title,
      startPrice: service.startPrice,
      units,
      scopeCount: scopeBook.scopes.length,
      quoteOnlyCount: scopeBook.quoteOnly.length
    });
    const card = buildCostDirectAnswer(t, vars);
    const pills = buildCostDirectAnswerPills(t);
    cardsChecked++;

    const fail = (check: string, detail: string) => failures.push({ slug, locale, check, detail });

    // ── 1. shape ────────────────────────────────────────────────────────
    if (!card.question.trim() || card.question.includes("costPage.")) {
      fail("question resolves", `question is empty or an unresolved key: "${card.question}"`);
    }
    if (!/[?？]$/.test(card.question.trim())) {
      fail("question ends in ?", `"${card.question}" — a question heading that does not end in "?" is not counted as a question H2 by the Part 3 AEO corpus audit`);
    }
    if (!QUESTION_LITERAL[locale].test(card.question.trim())) {
      fail("question literal", `"${card.question}" does not carry the locale's "how much … cost in KL & Selangor" phrasing (P3-04)`);
    }

    // ── 5. discipline (part 1) ──────────────────────────────────────────
    for (const [label, value] of [["question", card.question], ["answer", card.answer]] as const) {
      if (/\{\s*\w+\s*\}/.test(value)) fail("no raw placeholders", `${label} still contains an unresolved placeholder: ${value.match(/\{\s*\w+\s*\}/)?.[0]}`);
      if (!value.trim()) fail(`${label} non-empty`, `${label} rendered empty`);
      if (value.includes("costPage.directAnswer")) fail(`${label} resolves`, `${label} fell back to a dictionary key`);
    }

    // ── 2. price ────────────────────────────────────────────────────────
    if (hasPublishedPrice(service.startPrice)) {
      pricedChecked++;
      if (!card.answer.includes(vars.startPrice)) {
        fail("cites published price", `answer does not quote the published starting price "${vars.startPrice}": ${card.answer}`);
      }
      if (!/RM\s*[\d,.]/.test(card.answer)) {
        fail("price has RM amount", "answer carries no RM figure — the DirectAnswer must cite a real published price");
      }

      // ── 3. units ────────────────────────────────────────────────────────
      if (/\bsq\.?\s?ft\b/i.test(service.startPrice) && !card.answer.includes(SQFT_TOKEN[locale])) {
        fail("per-sq-ft unit present", `a per-square-foot rate must keep its unit in-language ("${SQFT_TOKEN[locale]}"): ${card.answer}`);
      }
      if (scopeBook.scopes.length > 0 && !vars.unitBasis.trim()) {
        fail("unit basis present", "priced service with published scopes rendered an empty pricing basis");
      }
      if (vars.unitBasis && !card.answer.includes(vars.unitBasis)) {
        fail("unit basis used", `pricing basis "${vars.unitBasis}" is not interpolated into the answer`);
      }
      if (vars.unitBasis && !card.answer.includes(String(scopeBook.scopes.length))) {
        fail("scope count used", "answer does not state how many published rates the page lists");
      }
    } else {
      quoteOnlyChecked++;
      if (/RM\s*[\d,.]/.test(card.answer)) {
        fail("no fabricated price", `quote-only service must not print an RM figure: ${card.answer}`);
      }
      if (!card.answer.includes(String(scopeBook.quoteOnly.length))) {
        fail("quote-only count used", "answer does not state how many quoted scopes the page lists");
      }
    }

    // ── 5. discipline (part 2) — DirectAnswer card length ────────────────
    if (locale === "zh") {
      const chars = cjkCount(card.answer);
      if (chars < 60 || chars > 260) {
        fail("answer length", `中文 answer is ${chars} CJK chars (expected 60–260 for a self-contained AI-citable card)`);
      }
    } else {
      const words = wordCount(card.answer);
      if (words < 25 || words > 90) {
        fail("answer length", `${locale.toUpperCase()} answer is ${words} words (expected 25–90 for a self-contained AI-citable card)`);
      }
    }

    // ── 4. trilingual leaks (P3-01 regression guard) ─────────────────────
    if (locale !== "en") {
      const leaks = trilingualLeakSignatures(card.answer, {
        title: service.title,
        tagline: service.tagline,
        warranty: service.warranty
      });
      for (const leak of leaks) {
        fail(`no ${leak.rule} leak`, `${leak.detail} — ${card.answer}`);
      }
      const pillLeaks = pills.flatMap((pill) => trilingualLeakSignatures(pill));
      for (const leak of pillLeaks) fail(`no ${leak.rule} leak (pill)`, leak.detail);
    }

    // ── 6. parity — every key the card reads resolves in this locale ─────
    for (const key of Object.values(COST_DIRECT_ANSWER_KEYS)) {
      if (key.endsWith("pill")) continue; // checked per-index below
      const value = t(key, { unit: "sq ft" });
      if (!value || value === key) fail("dictionary key", `${key} does not resolve for ${locale}`);
    }
    for (const index of [1, 2, 3]) {
      const value = t(`${COST_DIRECT_ANSWER_KEYS.pill}${index}`);
      if (!value || value === `${COST_DIRECT_ANSWER_KEYS.pill}${index}`) {
        fail("dictionary key", `costPage.directAnswer.pill${index} does not resolve for ${locale}`);
      }
    }
  }

  // The pricing basis must be assembled from the estimator's own localized unit
  // nouns, so an English unit can never reach a BM/中文 sentence.
  for (const locale of ["ms", "zh"] as const) {
    const t = createTranslator(dictionaries, locale);
    const basis = buildCostUnitBasis(t, units);
    if (basis && /\bsq\.?\s?ft\b|\bsqft\b|\bpsf\b/i.test(basis)) {
      failures.push({ slug, locale, check: "unit basis localized", detail: `English area unit inside the ${locale.toUpperCase()} pricing basis: ${basis}` });
    }
  }
}

if (cardsChecked !== Object.keys(servicesData).length * LOCALES.length) {
  failures.push({
    slug: "*",
    locale: "en",
    check: "coverage",
    detail: `expected ${Object.keys(servicesData).length * LOCALES.length} cost DirectAnswer cards, built ${cardsChecked}`
  });
}

if (failures.length > 0) {
  console.error(`✖ audit:cost-direct-answer — ${failures.length} failure(s) across ${cardsChecked} cards\n`);
  for (const failure of failures) {
    console.error(`  ${failure.slug} [${failure.locale}] ${failure.check}: ${failure.detail}`);
  }
  process.exit(1);
}

console.log(
  `✔ audit:cost-direct-answer — ${cardsChecked} cost DirectAnswer cards ` +
    `(${Object.keys(servicesData).length} services × ${LOCALES.length} locales; ` +
    `${pricedChecked} priced, ${quoteOnlyChecked} quote-only): 0 failures`
);
