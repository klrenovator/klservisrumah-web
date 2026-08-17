import type { Locale } from "@/lib/i18n";
import type { ProblemDetail } from "@/config/problem-data";

/**
 * Compose a unique, SERP-sized meta description for a problem page.
 *
 * WHY THIS IS SHARED
 * ------------------
 * The English route built a rich description — symptom, top cause, top fix and
 * the typical cost band — while the MS and ZH twins passed `localized.symptom`
 * straight through. That left the localized pages with one short sentence
 * (several under 50 characters), so Google rewrote the snippet itself and the
 * localized results looked thinner than the English ones for the same content.
 *
 * The clause budget is per-locale: Google truncates snippets by pixel width,
 * and CJK glyphs are roughly twice as wide as Latin ones, so Chinese gets a
 * proportionally smaller character budget rather than the Latin 158.
 */

type Copy = {
  cause: (value: string) => string;
  fix: (value: string) => string;
  cost: (value: string) => string;
  filler: string;
  /** Max characters before Google is likely to truncate. */
  budget: number;
  /** Strips the trailing "depending on …" qualifier from the cost band. */
  costTail: RegExp;
  lowerFirst: boolean;
};

const COPY: Record<Locale, Copy> = {
  en: {
    cause: (v) => `Common cause: ${v}.`,
    fix: (v) => `Fix: ${v}.`,
    cost: (v) => `Typical cost ${v} in KL & Selangor.`,
    filler: "Same-day inspection available.",
    budget: 158,
    costTail: / (?:depending on|based on).*$/i,
    lowerFirst: true,
  },
  ms: {
    cause: (v) => `Punca biasa: ${v}.`,
    fix: (v) => `Cara baiki: ${v}.`,
    cost: (v) => `Kos biasa ${v} di KL & Selangor.`,
    filler: "Pemeriksaan pada hari sama tersedia.",
    budget: 158,
    costTail: / (?:bergantung kepada|berdasarkan).*$/i,
    lowerFirst: true,
  },
  zh: {
    cause: (v) => `常见成因：${v}。`,
    fix: (v) => `修复方式：${v}。`,
    cost: (v) => `吉隆坡与雪兰莪一般费用 ${v}。`,
    filler: "可安排当日上门检查。",
    budget: 78,
    costTail: /[，,](?:视|取决于).*$/,
    lowerFirst: false,
  },
};

function lowerFirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

/** Trailing sentence punctuation, so clauses join cleanly. */
function stripTrailingStop(value: string): string {
  return value.trim().replace(/[.。！!]+$/, "");
}

/**
 * @param problem A problem record already localized for `locale`
 *                (i.e. the output of `getLocalizedProblem`).
 */
export function buildProblemDescription(problem: ProblemDetail, locale: Locale): string {
  const copy = COPY[locale];
  const cost = problem.costRange.replace(copy.costTail, "").trim();
  const cased = (value: string) => {
    const clean = stripTrailingStop(value);
    return copy.lowerFirst ? lowerFirst(clean) : clean;
  };

  const parts = [problem.symptom.trim()];
  const topCause = problem.causes?.[0];
  const topFix = problem.solutions?.[0];

  if (topCause) parts.push(copy.cause(cased(topCause)));
  if (topFix) parts.push(copy.fix(cased(topFix)));
  if (cost) parts.push(copy.cost(cost));
  // Final filler for records with terse source copy, so every description still
  // clears the floor below which Google rewrites the snippet itself.
  parts.push(copy.filler);

  // Add clauses while they fit the budget. `continue`, not `break`: a long
  // clause that overflows should be skipped so a shorter later clause can still
  // be used to reach the length floor.
  let description = parts[0];
  for (const part of parts.slice(1)) {
    const candidate = locale === "zh" ? `${description}${part}` : `${description} ${part}`;
    if (candidate.length > copy.budget) continue;
    description = candidate;
  }
  return description;
}
