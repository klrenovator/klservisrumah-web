/**
 * P2-C3 gate — content-pod authored-copy validator (runs in `prebuild`).
 *
 * Part 2 of the deep audit found the commercial and residential pod families
 * (29 services × 2 = 58 indexable EN URLs) sharing one generic body: the same
 * four bullets per family for every service, the same four templated FAQs, and
 * — on commercial pages — copy that talked about "Malaysian homes … condo
 * management rules" (P2-C3 / P2-15: the doorway-page pattern).
 *
 * Batch 1 authored a per-service body for both families
 * (config/content-pod-copy.ts), their MS/ZH bullet translations
 * (config/content-pod-copy-i18n.ts, merged into the body resolver's
 * dictionaries) and audience-correct family guidance paragraphs. This gate
 * locks that in:
 *
 *   1. coverage  — every service carries commercial AND residential copy
 *                  (a new service without authored pods fails the build);
 *   2. uniqueness — no intro repeats within or across the two families;
 *   3. audience  — commercial copy never carries the wrong-audience markers
 *                  the audit cited ("relevant for … homes?", "condo rules"
 *                  guidance paragraphs, the shared tropical-humidity intro);
 *   4. structure — 4 bullets, 3 FAQs, question-marked queries, real answers
 *                  (≥80 chars) — no stubs;
 *   5. wiring    — the pages as composed by config/content-data.ts carry the
 *                  authored FAQs (no faqTopic fallback on authored entries),
 *                  the family guidance override, and the per-service unique
 *                  intro in the rendered body.
 *
 * Usage: node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON \
 *          --experimental-strip-types --import ./scripts/ts-resolver.mjs \
 *          scripts/validate-content-pods.ts
 */

import { servicesData } from "@/config/services-data";
import { commercialCopy, residentialCopy } from "@/config/content-pod-copy";
import { podBulletsMs, podBulletsZh } from "@/config/content-pod-copy-i18n";
import { commercialPages, residentialPages, type GenericContentPage } from "@/config/content-data";

const WRONG_AUDIENCE_ON_COMMERCIAL: Array<[RegExp, string]> = [
  [/relevant for KL and Selangor homes\?/i, "generic 'homes' FAQ question (P2-15 defect verbatim)"],
  [/Malaysian homes face tropical humidity/i, "shared residential guidance paragraph"],
  [/condo (management )?rules/i, "condo-rules phrasing on a commercial page"],
  [/tropical humidity, fast rain cycles/i, "the one guidance block every pod shared"]
];

type Problem = string;
const problems: Problem[] = [];
const slugs = Object.keys(servicesData);

// ── 1. coverage ──────────────────────────────────────────────────────────
for (const family of ["commercial", "residential"] as const) {
  const dict = family === "commercial" ? commercialCopy : residentialCopy;
  for (const slug of slugs) {
    if (!dict[slug]) problems.push(`${family}: no authored copy for service "${slug}" — author it in config/content-pod-copy.ts before adding the service to the catalog`);
  }
  for (const key of Object.keys(dict)) {
    if (!servicesData[key]) problems.push(`${family}: authored copy for unknown service "${key}" — stale entry, remove it`);
  }
}

// ── 2/3/4. per-entry checks ──────────────────────────────────────────────
const introSeen = new Map<string, string>();
for (const [family, dict] of [["commercial", commercialCopy], ["residential", residentialCopy]] as const) {
  for (const [slug, copy] of Object.entries(dict)) {
    const prev = introSeen.get(copy.intro);
    if (prev) problems.push(`${family}/${slug}: intro is byte-identical to ${prev} — pods must not share bodies (P2-C3)`);
    else introSeen.set(copy.intro, `${family}/${slug}`);

    if (copy.bullets.length !== 4) problems.push(`${family}/${slug}: expected 4 bullets, got ${copy.bullets.length}`);
    for (const b of copy.bullets) {
      if (b.trim().length < 8) problems.push(`${family}/${slug}: bullet too short to inform: "${b}"`);
      // Trilingual parity: every pod bullet must resolve in the MS and ZH
      // bullet dictionaries (the estimator suite fails the build otherwise —
      // this check catches it at authoring time, at the right address).
      if (!podBulletsMs[b]) problems.push(`${family}/${slug}: bullet has no MS translation in content-pod-copy-i18n.ts: "${b}"`);
      if (!podBulletsZh[b]) problems.push(`${family}/${slug}: bullet has no ZH translation in content-pod-copy-i18n.ts: "${b}"`);
    }

    // 4 FAQs — the count the localized template block regenerates; a pod with
    // any other count would drift against MS/ZH views (count-parity assert).
    if (copy.faqs.length !== 4) problems.push(`${family}/${slug}: expected 4 FAQs, got ${copy.faqs.length}`);
    const qs = new Set<string>();
    for (const f of copy.faqs) {
      if (!f.q.trim().endsWith("?")) problems.push(`${family}/${slug}: FAQ question must end in '?': ${f.q}`);
      if (f.a.trim().length < 80) problems.push(`${family}/${slug}: FAQ answer under 80 chars (stub?): "${f.q}"`);
      if (qs.has(f.q)) problems.push(`${family}/${slug}: duplicate FAQ question ${f.q}`);
      qs.add(f.q);
    }

    if (family === "commercial") {
      const hay = [copy.intro, ...copy.bullets, ...copy.faqs.map((f) => `${f.q} ${f.a}`)].join(" \u0000 ");
      for (const [re, label] of WRONG_AUDIENCE_ON_COMMERCIAL) {
        if (re.test(hay)) problems.push(`commercial/${slug}: wrong-audience marker — ${label}`);
      }
    }
  }
}

// ── 5. wiring (what the routes actually render) ──────────────────────────
const checkPages = (pages: GenericContentPage[], family: "commercial" | "residential") => {
  const dict = family === "commercial" ? commercialCopy : residentialCopy;
  for (const page of pages) {
    const slug = page.relatedServiceSlug;
    if (!slug) { problems.push(`${family}: page "${page.slug}" lost its relatedServiceSlug link`); continue; }
    const copy = dict[slug as string];
    if (!copy) continue; // already flagged by coverage
    if (page.intro !== copy.intro) problems.push(`${family}/${String(slug)}: composed page intro ≠ authored intro — content-data wiring drift`);
    if (!page.faqTopic) problems.push(`${family}/${String(slug)}: faqTopic missing — MS/ZH client views would show English FAQs (trilingual-parity gate fails)`);
    if (!page.guidance || page.guidance.intro === page.guidance.safe) problems.push(`${family}/${String(slug)}: missing family guidance override (page.guidance)`);
    if (page.faqs !== copy.faqs && JSON.stringify(page.faqs) !== JSON.stringify(copy.faqs)) {
      problems.push(`${family}/${String(slug)}: composed FAQs differ from authored copy`);
    }
  }
  if (pages.length !== slugs.length) problems.push(`${family}: ${pages.length} pages for ${slugs.length} services — family must cover the catalog exactly`);
};
checkPages(commercialPages, "commercial");
checkPages(residentialPages, "residential");

// Guidance families must not collide with each other either.
if (commercialPages[0]?.guidance?.intro === residentialPages[0]?.guidance?.intro) {
  problems.push("commercial and residential guidance paragraphs are identical — the point of P2-C3 is lost");
}

if (problems.length) {
  console.error(`✗ Content-pod gate FAILED — ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  • ${p}`);
  console.error("\nContext: docs/full-website-deep-audit/PART-2-AUDIT-REPORT.md P2-C3 / P2-15.");
  process.exit(1);
}

console.log(
  `✓ Content-pod gate — ${slugs.length} services × commercial + residential families: ` +
  `${introSeen.size} unique intros, per-service FAQs (4 each, no stubs, count-matched to the MS/ZH template), ` +
  `${introSeen.size * 4} pod bullets all localized ×2, audience-correct guidance, wiring verified.`
);
