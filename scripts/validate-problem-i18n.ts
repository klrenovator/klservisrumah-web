/**
 * Content-QA gate for the real locale problem routes (`/ms/problems/[slug]`
 * and `/zh/problems/[slug]`, published in the GSC problem-overlap session).
 *
 * The 65 indexable keep-URLs now render real localized pages. This gate
 * enforces that none of them silently falls back to English and that none
 * ships duplicate or thin FAQ content — the "content QA, not more URL
 * multiplication" bar the roadmap sets for further problem-page work.
 *
 * Checks per indexable problem × locale (ms, zh):
 *   1. Native title  (problemI18n override, differs from English)
 *   2. Native costRange (problemI18n override, differs from English)
 *   3. Native body (problem-body-i18n) exists and its symptom/causes/
 *      solutions/whenToCall all differ from the English record
 *   4. No duplicate FAQ questions (normalised)
 *   5. No English FAQ question leaks into the localized FAQ list
 *   6. Every FAQ question/answer clears a non-thin length floor
 *
 * Plus canonical-mapping integrity so redirects never break:
 *   7. Every indexable slug resolves to itself (no redirected keep URL)
 *   8. Every redirected slug's target exists, is indexable and is not itself
 *      redirected (no chains or cycles), and every redirect key is a real
 *      problem slug (no dangling/typo'd keys)
 *   9. Every problemPages record is accounted for (indexable or redirected)
 *
 * Wired into `prebuild` alongside the other gates so a regression fails the
 * build instead of reaching production.
 */

import { problemPages, problemI18n } from "@/config/problem-data";
import { getLocalizedProblem } from "@/lib/problem-i18n";
import { getLocalizedProblemBody } from "@/config/problem-body-i18n";
import { isRedirectedProblemSlug, PROBLEM_CANONICAL_REDIRECTS, resolveProblemSlug } from "@/config/problem-canonical";
import { indexableProblemPages } from "@/config/problem-index";

type Issue = { key: string; locale: string; field: string; message: string };

const LOCALES = ["ms", "zh"] as const;

// Minimal safety-net floors that catch degenerate/placeholder content without
// false-flagging concise but complete copy. Native completeness is enforced
// structurally (every field must differ from the English record and come from
// an authored MS/ZH block), so these floors only guard against a 1-2 char
// placeholder sneaking through. `zh` floors are lower because Chinese is
// information-denser per character than Latin script (same reasoning as the
// specialty gate); a 14-char Chinese symptom is complete and must not trip.
const MIN = {
  ms: { title: 2, costRange: 3, symptom: 10, listItem: 4, faqQ: 3, faqA: 8 },
  zh: { title: 2, costRange: 3, symptom: 4, listItem: 2, faqQ: 2, faqA: 4 },
} as const;

function norm(value: string): string {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

const issues: Issue[] = [];
const push = (key: string, locale: string, field: string, message: string) =>
  issues.push({ key, locale, field, message });

function checkProblem(slug: string) {
  const problem = problemPages.find((item) => item.slug === slug);
  if (!problem) {
    push(slug, "any", "record", "indexable slug not found in problemPages");
    return;
  }

  const min = MIN;

  for (const locale of LOCALES) {
    const lp = getLocalizedProblem(problem, locale);
    const override = problemI18n[slug]?.[locale];
    const body = getLocalizedProblemBody(slug, locale);

    // 1. Native title.
    if (!override?.title) push(slug, locale, "title", "missing native title override");
    else if (lp.title === problem.title) push(slug, locale, "title", "falls back to English (no translation)");
    else if (lp.title.length < min[locale].title) push(slug, locale, "title", `too short (${lp.title.length} chars)`);

    // 2. Native costRange.
    if (!override?.costRange) push(slug, locale, "costRange", "missing native costRange override");
    else if (lp.costRange === problem.costRange) push(slug, locale, "costRange", "falls back to English");
    else if (lp.costRange.length < min[locale].costRange) push(slug, locale, "costRange", `too short (${lp.costRange.length} chars)`);

    // 3. Native body (symptom / causes / solutions / whenToCall).
    if (!body) {
      push(slug, locale, "body", "missing problem-body-i18n block (symptom/causes/solutions/whenToCall would fall back to English)");
    } else {
      if (lp.symptom === problem.symptom) push(slug, locale, "symptom", "falls back to English");
      else if (lp.symptom.length < min[locale].symptom) push(slug, locale, "symptom", `too short (${lp.symptom.length} chars)`);
      for (const field of ["causes", "solutions", "whenToCall"] as const) {
        if (JSON.stringify(lp[field]) === JSON.stringify(problem[field]))
          push(slug, locale, field, "falls back to English");
        else if (!lp[field].length) push(slug, locale, field, "empty array");
        else lp[field].forEach((item, i) => {
          if (item.length < min[locale].listItem) push(slug, locale, `${field}[${i}]`, `too short (${item.length} chars)`);
        });
      }
    }

    // 3b. P2-16 depth fields — where the English record carries them, the
    // localized body must too (no silent English fallback on enriched pages).
    if (problem.overview) {
      if (!lp.overview) push(slug, locale, "overview", "English depth copy present but no native overview");
      else if (lp.overview === problem.overview) push(slug, locale, "overview", "falls back to English");
      else if (lp.overview.length < min[locale].symptom) push(slug, locale, "overview", `too short (${lp.overview.length} chars)`);
    }
    if (problem.diyChecks?.length) {
      if (!lp.diyChecks?.length) push(slug, locale, "diyChecks", "English depth copy present but no native diyChecks");
      else if (JSON.stringify(lp.diyChecks) === JSON.stringify(problem.diyChecks)) push(slug, locale, "diyChecks", "falls back to English");
      else lp.diyChecks.forEach((item, i) => {
        if (item.length < min[locale].listItem) push(slug, locale, `diyChecks[${i}]`, `too short (${item.length} chars)`);
      });
    }
    if (problem.prevention?.length) {
      if (!lp.prevention?.length) push(slug, locale, "prevention", "English depth copy present but no native prevention");
      else if (JSON.stringify(lp.prevention) === JSON.stringify(problem.prevention)) push(slug, locale, "prevention", "falls back to English");
      else lp.prevention.forEach((item, i) => {
        if (item.length < min[locale].listItem) push(slug, locale, `prevention[${i}]`, `too short (${item.length} chars)`);
      });
    }
    if (problem.costDetail) {
      if (!lp.costDetail) push(slug, locale, "costDetail", "English depth copy present but no native costDetail");
      else if (lp.costDetail === problem.costDetail) push(slug, locale, "costDetail", "falls back to English");
      else if (lp.costDetail.length < min[locale].costRange) push(slug, locale, "costDetail", `too short (${lp.costDetail.length} chars)`);
    }

    // 4 + 5. FAQ duplicates + English leakage, on the final rendered list.
    const faqQs = lp.faqs.map((f) => norm(f.q));
    const faqAnswers = lp.faqs.map((f) => f.a);
    if (new Set(faqQs).size !== faqQs.length) push(slug, locale, "faqs", "duplicate question(s) in final FAQ list");
    const englishQs = new Set(problem.faqs.map((f) => norm(f.q)));
    for (let i = 0; i < faqQs.length; i++) {
      if (englishQs.has(faqQs[i])) push(slug, locale, `faqs[${i}]`, "question leaks English text");
      if (faqQs[i].length < min[locale].faqQ) push(slug, locale, `faqs[${i}].q`, `too short (${faqQs[i].length} chars)`);
      if (faqAnswers[i].length < min[locale].faqA) push(slug, locale, `faqs[${i}].a`, `too short (${faqAnswers[i].length} chars)`);
    }
  }
}

// 7. Indexable slugs resolve to themselves.
for (const problem of indexableProblemPages()) {
  if (isRedirectedProblemSlug(problem.slug)) {
    push(problem.slug, "any", "canonical", "indexable page is also a redirected slug");
  }
  if (resolveProblemSlug(problem.slug) !== problem.slug) {
    push(problem.slug, "any", "canonical", "keep URL does not resolve to itself");
  }
}

// 8. Redirect map integrity.
for (const [from, to] of Object.entries(PROBLEM_CANONICAL_REDIRECTS)) {
  if (!problemPages.some((p) => p.slug === from)) push(from, "any", "canonical", "redirect key is not a real problem slug");
  if (!problemPages.some((p) => p.slug === to)) push(from, "any", "canonical", `redirect target '${to}' does not exist`);
  if (isRedirectedProblemSlug(to)) push(from, "any", "canonical", `redirect target '${to}' is itself redirected (chain)`);
  if (resolveProblemSlug(to) !== to) push(from, "any", "canonical", `redirect target '${to}' is not a final keep URL`);
}

// 9. Every problemPages record is accounted for.
for (const problem of problemPages) {
  if (!isRedirectedProblemSlug(problem.slug)) {
    if (!indexableProblemPages().some((p) => p.slug === problem.slug)) {
      push(problem.slug, "any", "canonical", "not redirected but missing from indexable set");
    } else {
      checkProblem(problem.slug);
    }
  }
}

if (issues.length > 0) {
  console.error(`\nLocale problem content QA FAILED with ${issues.length} issue(s):\n`);
  for (const issue of issues) {
    console.error(`  [${issue.key}] (${issue.locale}) ${issue.field}: ${issue.message}`);
  }
  process.exit(1);
}

const keep = indexableProblemPages().length;
const redirected = Object.keys(PROBLEM_CANONICAL_REDIRECTS).length;
console.log(
  `Locale problem content QA OK: ${keep} indexable keep-URLs × ms/zh, ${redirected} redirected near-duplicates excluded, 0 native-content gaps / 0 English leaks / 0 duplicate FAQs.`
);
