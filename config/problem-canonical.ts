/**
 * Evidence-based problem-page consolidation (GSC, last 3 months, 2026-08-12).
 *
 * Source: owner-provided Search Console Pages/Queries exports analysed in
 * the /problems/ SEO report. Near-duplicate slugs with no differentiated
 * intent 301 to a single keep URL. Distinct intents (KEEP BOTH) stay live.
 *
 * Redirected slugs remain in `problemPages` so historic data/i18n is not
 * deleted, but they must never be SSG'd or listed in the sitemap.
 */


export const PROBLEM_CANONICAL_REDIRECTS: Record<string, string> = {
  // A — geo-suffix duplicate
  "low-water-pressure-kl": "low-water-pressure",
  // C — only plaster variant has impressions (pos 8)
  "sagging-ceiling": "sagging-plaster-ceiling",
  // D — word-order + generic-lights fold into the page that ranks
  "flickering-downlights": "downlight-flickering",
  "flickering-lights-kl": "downlight-flickering",
  // E — hollow/loose are the same tile-debonding symptom
  "hollow-tiles-floor": "loose-hollow-tiles",
  // F — three phrasings of the same joint/hairline crack
  "plaster-ceiling-cracking-joints": "cracked-ceiling-joints",
  "plaster-ceiling-hairline-crack": "cracked-ceiling-joints",
  // J — identical three words, different order
  "stuck-sliding-window": "sliding-window-stuck",
  // K — leaking / water leak are synonymous
  "shower-screen-water-leak": "shower-screen-leaking",
  // M — all three = no hot water
  "water-heater-not-working": "water-heater-not-heating",
  "water-heater-cold": "water-heater-not-heating",
  // N — loose vs sagging hinge is the same root issue
  "door-hinge-sagging": "loose-door-hinge",
};

export function resolveProblemSlug(slug: string): string {
  return PROBLEM_CANONICAL_REDIRECTS[slug] ?? slug;
}

export function isRedirectedProblemSlug(slug: string): boolean {
  return slug in PROBLEM_CANONICAL_REDIRECTS;
}

export function problemLocaleUrls(slug: string): { en: string; ms: string; zh: string } {
  const keep = resolveProblemSlug(slug);
  return {
    en: `/problems/${keep}`,
    ms: `/ms/problems/${keep}`,
    zh: `/zh/problems/${keep}`,
  };
}

export function problemPath(slug: string, locale: "en" | "ms" | "zh" = "en"): string {
  const urls = problemLocaleUrls(slug);
  return urls[locale];
}

/*
 * PERFORMANCE NOTE
 * ----------------
 * Keep this module free of `config/problem-data` imports. It is pulled in by
 * client components (`related-problems.tsx`) purely for slug/URL helpers, and
 * importing the problem registry here shipped ~207 KB of causes, solutions and
 * FAQs to the browser on every service and sub-service page. The one helper
 * that genuinely needs the records — `indexableProblemPages()` — lives in the
 * server-only `config/problem-index.ts`.
 */
