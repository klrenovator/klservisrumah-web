# FIX WAVE 16 — P3-12 PHASE 2, TRANCHE 2: NATIVE MS/ZH GUIDE FAQS

**Date:** 2026-08-30

**Branch:** `arena/01a0508e-klservisrumah-web`

**GitHub:** commit `6747afb`, PR #195

**Tracker source:** `TRACKING.md` → P3-12 phase 2 → exact next stop after Wave 15.

> **Result:** ✅ **TRANCHE 2 COMPLETED** — all 10 `/guides/*` pages now render
> page-specific, editorial Bahasa Malaysia and Simplified Chinese versions of
> their four authored English FAQs. Full P3-12 phase 2 remains **⏳ PENDING:
> 20/146 pods complete; 126 remain.**

## 1. Continuation decision

The existing tracker, Wave 15 report, continuation prompt and session log agreed
on one exact next task: translate all 10 authored `guideCopy` FAQ sets. Parts
1–5, Fix Waves 1–15, BP-1 phase 1 and CF-4 were already complete and were not
repeated. Owner-blocked work was not changed.

## 2. Completed scope

The complete `guides` family was translated: **10 pages × 4 FAQs × 2 locales =
80 localized Q&As**.

1. `how-to-choose-house-painter-kl`
2. `how-to-choose-plumber-kl`
3. `how-to-choose-waterproofing-contractor-kl`
4. `how-to-choose-ceiling-contractor-kl`
5. `how-to-choose-handyman-kl`
6. `paint-brand-comparison-nippon-vs-dulux-vs-jotun`
7. `waterproofing-method-comparison-pu-vs-membrane`
8. `ceiling-material-comparison-plaster-vs-gypsum`
9. `plumbing-pipe-comparison-pvc-vs-copper-vs-ppr`
10. `tv-mount-types-comparison-fixed-vs-tilt-vs-full-motion`

The localized copy preserves source-specific selection evidence and constraints:
5–7/3–5 day painting timelines, 30-day/12-month plumbing warranties, diagnostic
ponding and dye tests, 400–450 mm ceiling framing, 12-month/10-year ceiling
terms, named paint ranges, 5–7 year exterior claims, PU 1–2 years versus full
membrane up to 5 years, PPR's 25-year Malaysian history versus copper's 50+
years, SIRIM QAS, 55-inch full-motion loading and a 15° tilt. The copy is
natural target-language editorial text rather than generic templates or title
interpolation.

## 3. Implementation and guardrail

- Added all 10 family-qualified `guides:<slug>` records to
  `config/content-pod-faq-i18n.ts`, each with complete `ms` and `zh` sets.
- Added `guides` to `COMPLETED_FAMILIES` in
  `scripts/validate-content-pod-faq-i18n.ts` only after all records passed.
- The permanent prebuild gate now protects both completed families. It checks
  real-key and whole-family coverage, source count parity, non-stub depth,
  question form, obvious English leakage, Chinese-script presence, duplicate
  questions, and exact production-resolver identity.
- No route, generic fallback, English source FAQ, schema builder or generated
  output was forked. The existing resolver remains the single source for the
  localized route, visible FAQ block, FAQPage schema, FAQ directory and client
  fallback.

## 4. Verification evidence

A fresh dependency install found **0 vulnerabilities**. The production build
emitted **4,139 HTML pages**. A purpose-built post-build probe loaded every one
of the 20 `/ms/guides/<slug>` and `/zh/guides/<slug>` files, removed scripts to
inspect visible text, parsed all JSON-LD, found the `FAQPage`, and compared its
four Questions and accepted answers against the editorial registry.

| Check | Result |
|---|---|
| `audit:content-pod-faq-i18n` | ✅ 20/146 pods; 160 localized Q&As; completed families `top`, `guides` |
| `npm ci` / dependency audit | ✅ 177 packages; 0 vulnerabilities |
| lint / type-check | ✅ 0 errors / 0 warnings |
| full `prebuild` | ✅ all gates; estimator suite 329,897 assertions, 0 failures |
| production build | ✅ 4,139 HTML pages |
| guides visible↔schema probe | ✅ 20/20 pages; 80/80 Q&As visible and byte-identical to FAQPage schema |
| `audit:html` | ✅ 4,139 pages; 0 fatal / 0 warnings |
| `audit:links` | ✅ 312,732 rendered + 56 source links; 0 broken |
| `audit:seo-head` | ✅ 4,112 indexable = 4,112 sitemap; 0 duplicate metadata / warnings |
| `audit:schema-size` | ✅ max non-FAQ JSON-LD 7.1 KB (<8 KB) |
| `audit:bp1` | ✅ 2,146 retired URLs remain absent; NAP 62.8% |
| `audit:location-similarity` | ✅ maximum 69.4% (<70%) |
| `audit:raster-og` | ✅ 0 SVG image leaks; all 8 templates emitted |
| `audit:meta` | ✅ 0 missing title/description; 0 duplicate title groups; 0 JSON-LD parse failures |
| `seo:audit` | ✅ metadata consistency; report regenerated |

## 5. Exact continuation point

**P3-12 phase 2 is ⏳ PENDING at 20/146.** The next session must continue with
**tranche 3: all 10 `guidesMaintenance` pages**. Their English source is
`maintenanceCopy` in `config/content-pod-copy-batch2.ts`. Add records under
`guidesMaintenance:<slug>`, and add `"guidesMaintenance"` to the gate's
`COMPLETED_FAMILIES` only after all 10 pages have both complete locale sets and
pass the built visible/schema probe.

Fixed remaining order:

1. `guidesMaintenance` — 10 (next)
2. `seasonal` — 8
3. `compare` — 18
4. `brands` — 32
5. `commercial` — 29
6. `residential` — 29

**126 remain.** Do not mark the full phase complete until the gate reports
146/146. Do not use machine translation, generic FAQ templates, bulk title
substitution, or a premature family-complete declaration.
