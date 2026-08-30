# FIX WAVE 18 — P3-12 PHASE 2, TRANCHE 4: NATIVE MS/ZH SEASONAL FAQS

**Date:** 2026-08-30

**Branch:** `arena/01a050b5-klservisrumah-web`

**GitHub:** PR (this session; see TRACKING.md).

**Tracker source:** `TRACKING.md` → P3-12 phase 2 → exact next stop after Wave 17.

> **Result:** ✅ **TRANCHE 4 COMPLETED** — all 8 `/seasonal/*` pages now render
> page-specific, editorial Bahasa Malaysia and Simplified Chinese versions of
> their four authored English FAQs. Full P3-12 phase 2 remains
> **⏳ PENDING: 38/146 pods complete; 108 remain.**

## 1. Continuation decision

The tracker, Wave 15/16/17 reports, continuation prompt and session log agreed on
one exact next task: translate all 8 authored `seasonalCopy` FAQ sets (family
`seasonal`). Parts 1–5, Fix Waves 1–17, BP-1 phase 1 and CF-4 were already
complete and were not repeated. Owner-blocked work was not changed.

## 2. Completed scope

The complete `seasonal` family was translated: **8 pages × 4 FAQs × 2 locales =
64 localized Q&As**.

1. `home-prep-rainy-season-kl`
2. `painting-dry-season-tips`
3. `waterproofing-pre-monsoon-checklist`
4. `chinese-new-year-home-repaint-guide`
5. `raya-home-makeover-checklist`
6. `year-end-renovation-planning`
7. `hari-raya-painting-promo`
8. `monsoon-leak-emergency-guide`

The localized copy preserves source-specific details and constraints: starting
monsoon preparation by October for the November–March northeast monsoon; the
30-minute gutter-clearing that prevents fascia/ceiling damage; 2–3 dry days
needed for membrane application and curing; shared drainage and neighbour
coordination in terrace houses; the May–September dry-season exterior-painting
window with a 4–6 week booking lead and a 2–4 hour fresh-paint rain window;
20–30 mm ponding tests read at 24 and 72 hours; 6–8 week pre-CNY/Raya booking
leads and the 2-week (touch-dry) vs 2–4 week (full cure) paint timing; the
8–10 week Raya makeover timeline; the December–January contractor window with
JMB holiday closures; and the emergency-leak sequence of protecting contents,
photographing for insurance, temporary sealing between rain events, and
notifying the insurer before any permanent repair. The copy is natural
target-language editorial text, not template interpolation.

## 3. Implementation and guardrail

- Added all 8 family-qualified `seasonal:<slug>` records to
  `config/content-pod-faq-i18n.ts`, each with complete `ms` and `zh` sets.
- Added `seasonal` to `COMPLETED_FAMILIES` in
  `scripts/validate-content-pod-faq-i18n.ts` only after all records passed.
- The permanent prebuild gate now protects all four completed families
  (`top`, `guides`, `guidesMaintenance`, `seasonal`) — real-key and
  whole-family coverage, source count parity, non-stub depth, question form,
  English-leak detection, Chinese-script presence, duplicate-question
  detection, and exact production-resolver identity.
- Three question/answer overlaps with the Wave-17 `guidesMaintenance` page
  `rainy-season-home-prep` (a genuinely similar pre-monsoon topic) were caught
  by the gate's duplicate-question check and reworded on the seasonal side
  (`Adakah kerja kalis air masih boleh dilakukan selepas hujan mula turun?`,
  `Perlukah saya mengambil kira longkang rumah jiran dalam persediaan saya?`,
  `雨季开始后还能做防水工程吗？`) while keeping the answers faithful to the
  English source.
- No route, generic fallback, English source FAQ, schema builder or generated
  output was forked. The existing resolver remains the single source for the
  localized route, visible FAQ block, FAQPage schema, FAQ directory and client
  fallback.
- Reused the existing built-corpus probe `scripts/probe-pod-faq-i18n.ts`
  (`<family>` as argv) to re-verify visible-HTML↔schema byte-identity.

## 4. Verification evidence

A fresh dependency install found **0 vulnerabilities**. The production build
emitted **4,139 HTML pages** (URL count unchanged — this tranche edits existing
localized routes' FAQ content only). The probe loaded all 16 `/ms/seasonal/*`
and `/zh/seasonal/*` files, stripped scripts to inspect visible text, parsed the
`FAQPage` JSON-LD and compared its four Questions and accepted answers against
the editorial registry.

| Check | Result |
|---|---|
| `audit:content-pod-faq-i18n` | ✅ 38/146 pods; 304 localized Q&As; completed families `top`, `guides`, `guidesMaintenance`, `seasonal` |
| `npm ci` / dependency audit | ✅ 176 packages; 0 vulnerabilities |
| lint / type-check | ✅ 0 errors / 0 warnings |
| full `prebuild` | ✅ all gates; estimator suite 329,897 assertions, 0 failures |
| production build | ✅ 4,139 HTML pages |
| `probe-pod-faq-i18n seasonal` | ✅ 16/16 pages; 64/64 Q&As visible and byte-identical to FAQPage schema |
| `audit:html` | ✅ 4,139 pages; 0 fatal / 0 warnings |
| `audit:links` | ✅ 312,732 rendered + 56 source links; 0 broken |
| `audit:seo-head` | ✅ 4,112 indexable = 4,112 sitemap; 0 duplicate metadata / warnings |
| `audit:schema-size` | ✅ PASS |
| `audit:bp1` | ✅ 2,146 retired URLs remain absent; NAP 62.8% |
| `audit:location-similarity` | ✅ maximum 69.4% (<70%) |
| `audit:raster-og` | ✅ 0 SVG image leaks; all 8 templates emitted |
| `audit:meta` | ✅ 0 missing title/description; 0 JSON-LD parse failures; 0 breadcrumb last-item mismatches |
| `seo:audit` | ✅ metadata consistency; report regenerated |
| `part5-audit` | ✅ 0 JSON-LD parse errors; 0 duplicate titles/H1s |
| `part3-aeo-audit` (corpus) | ✅ 4,139 pages; BM leak 0; ZH leak 0 |

## 5. Exact continuation point

**P3-12 phase 2 is ⏳ PENDING at 38/146.** The next session must continue with
**tranche 5: all 18 `compare` pages**. Their English source is `comparisonCopy`
in `config/content-pod-copy-batch2.ts`. Add records under `compare:<slug>`, and
add `"compare"` to the gate's `COMPLETED_FAMILIES` only after all 18 pages have
both complete locale sets and pass the built visible/schema probe
(`scripts/probe-pod-faq-i18n.ts compare`).

Fixed remaining order:

1. `compare` — 18 (next)
2. `brands` — 32
3. `commercial` — 29
4. `residential` — 29

**108 remain.** Do not mark the full phase complete until the gate reports
146/146. Do not use machine translation, generic FAQ templates, bulk title
substitution, or a premature family-complete declaration.
