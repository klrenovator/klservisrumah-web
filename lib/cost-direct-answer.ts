import type { ScopeUnit } from "@/lib/estimator/rate-book.generated";
import type { Locale, Translator } from "@/lib/i18n";
import { localizeUnits } from "@/lib/direct-answer-trilingual";

/**
 * lib/cost-direct-answer.ts — single source of truth for the DirectAnswer card
 * that opens every `/services/<slug>/cost` page (Part 3 finding **P3-04**).
 *
 * The Part 3 AEO audit found that the 29 money pages never literally answered
 * the highest-intent query for this business — *"how much does {service} cost
 * in KL & Selangor?"* — in the extractable question-heading + self-contained
 * answer format that Google AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini
 * and Bing Copilot quote. The pages carried a FAQ entry *"What affects {svc}
 * cost?"* instead, and `pctQuickAnswer` for the `/services/<svc>/cost` pattern
 * was **0%** while the service hubs were at 100%.
 *
 * Why a pure module (no React, no registry, no message-JSON import):
 *   1. The card is rendered by `LocaleServiceCostView`, a **client** component.
 *      The client-bundle guard forbids client modules from reaching
 *      `config/services-data.ts` (~470 KB), so every value arrives as an
 *      argument and the registry types are type-only imports (erased at build).
 *   2. The **same two functions** build the English strings that the server
 *      route injects into the cost page's `FAQPage` JSON-LD. Part 5's
 *      `faqSchemaNoVisibleMatch` check compares the first marked-up Question
 *      against the rendered text, so schema and HTML must be byte-identical.
 *      One builder = no drift by construction.
 *   3. `scripts/validate-cost-direct-answer.ts` runs this exact builder over
 *      all 29 services × EN/MS/ZH during `prebuild`, so a unit-less price
 *      (P3-05 regression) or an English leak inside the BM/中文 answer
 *      (P3-01 regression) can never reach `npm run build`.
 *
 * Copy lives in the site dictionaries under `costPage.directAnswer.*` so the
 * card is localized by the same translator as the rest of the page — unlike the
 * service hubs, whose DirectAnswer sentence is assembled from English registry
 * fields and therefore needs separate BM/中文 sub-notes
 * (`lib/direct-answer-trilingual.ts`). Here the question and answer are
 * in-language for the active locale, so no sub-notes are rendered.
 */

/** Dictionary keys the builder reads. Kept here so the gate and the UI cannot diverge. */
export const COST_DIRECT_ANSWER_KEYS = {
  question: "costPage.directAnswer.question",
  answer: "costPage.directAnswer.answer",
  answerQuoteOnly: "costPage.directAnswer.answerQuoteOnly",
  perUnit: "costPage.directAnswer.perUnit",
  unitSeparator: "costPage.directAnswer.unitSeparator",
  pill: "costPage.directAnswer.pill"
} as const;

export type CostDirectAnswerVars = {
  /** Localized service title, e.g. "House Painting Services" / "Khidmat Mengecat Rumah". */
  name: string;
  /** Published starting price, unit included ("RM 14 / sq ft") and localized for BM/中文. */
  startPrice: string;
  /** Number of priced rate-book rows shown on the page. */
  scopeCount: number;
  /** Number of quote-only (no published price) rate-book rows shown on the page. */
  quoteOnlyCount: number;
  /** "per room, per sq ft" — the pricing basis, localized, from the rate-book units. */
  unitBasis: string;
};

export type CostDirectAnswer = { question: string; answer: string; quoteOnly: boolean };

/**
 * Does the service publish a numeric starting price? Quote-only services
 * (`awning-installation` today) must never be handed a fabricated figure.
 * Mirrors the `hasAmount()` test used across the estimators and cost view.
 */
export function hasPublishedPrice(startPrice: string): boolean {
  return /RM\s*\d/.test(startPrice);
}

/**
 * "per room, per sq ft, per job" — built from the service's rate-book units via
 * the estimator's own localized unit nouns, so a per-square-foot service can
 * never be described without its unit (P3-05).
 */
export function buildCostUnitBasis(t: Translator, units: ScopeUnit[]): string {
  const unique: ScopeUnit[] = [];
  for (const unit of units) if (!unique.includes(unit)) unique.push(unit);
  if (unique.length === 0) return "";
  const separator = t(COST_DIRECT_ANSWER_KEYS.unitSeparator);
  return unique
    .map((unit) => t(COST_DIRECT_ANSWER_KEYS.perUnit, { unit: t(`estimator.units.${unit}.noun`) }))
    .join(separator);
}

/**
 * Assemble the interpolation variables for one service + locale.
 *
 * The starting price keeps the `RM` numeral (locale-neutral) but the English
 * area unit is swapped for the locale's own term — "RM 14 / sq ft" →
 * "RM 14 / kaki persegi" (BM) / "RM 14 / 平方呎" (中文) — reusing the same
 * `localizeUnits()` helper the service-hub trilingual notes use.
 */
export function buildCostDirectAnswerVars({
  t,
  locale,
  name,
  startPrice,
  units,
  scopeCount,
  quoteOnlyCount
}: {
  t: Translator;
  locale: Locale;
  name: string;
  startPrice: string;
  units: ScopeUnit[];
  scopeCount: number;
  quoteOnlyCount: number;
}): CostDirectAnswerVars {
  return {
    name,
    startPrice: locale === "en" ? startPrice : localizeUnits(startPrice, locale),
    scopeCount,
    quoteOnlyCount,
    unitBasis: buildCostUnitBasis(t, units)
  };
}

/** The card copy for one service + locale. */
export function buildCostDirectAnswer(t: Translator, vars: CostDirectAnswerVars): CostDirectAnswer {
  const quoteOnly = !hasPublishedPrice(vars.startPrice);
  return {
    question: t(COST_DIRECT_ANSWER_KEYS.question, { name: vars.name }),
    answer: t(
      quoteOnly ? COST_DIRECT_ANSWER_KEYS.answerQuoteOnly : COST_DIRECT_ANSWER_KEYS.answer,
      {
        name: vars.name,
        startPrice: vars.startPrice,
        scopeCount: vars.scopeCount,
        quoteOnlyCount: vars.quoteOnlyCount,
        unitBasis: vars.unitBasis
      }
    ),
    quoteOnly
  };
}

/** The three trust pills under the card, localized. */
export function buildCostDirectAnswerPills(t: Translator): string[] {
  return [1, 2, 3].map((index) => t(`${COST_DIRECT_ANSWER_KEYS.pill}${index}`));
}
