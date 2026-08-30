# FIX WAVE 17 — P3-12 PHASE 2, TRANCHE 3: NATIVE MS/ZH MAINTENANCE-GUIDE FAQS

**Date:** 2026-08-30

**Branch:** `arena/01a0509c-klservisrumah-web`

**GitHub:** PR #196 (merged), CI green.

**Tracker source:** `TRACKING.md` → P3-12 phase 2 → exact next stop after Wave 16.

> **Result:** ✅ **TRANCHE 3 COMPLETED** — all 10 `/guides/maintenance/*` pages
> now render page-specific, editorial Bahasa Malaysia and Simplified Chinese
> versions of their four authored English FAQs. Full P3-12 phase 2 remains
> **⏳ PENDING: 30/146 pods complete; 116 remain.**

## 1. Continuation decision

The tracker, Wave 15/16 reports, continuation prompt and session log agreed on
one exact next task: translate all 10 authored `maintenanceCopy` FAQ sets
(family `guidesMaintenance`). Parts 1–5, Fix Waves 1–16, BP-1 phase 1 and CF-4
were already complete and were not repeated. Owner-blocked work was not
changed.

## 2. Completed scope

The complete `guidesMaintenance` family was translated: **10 pages × 4 FAQs ×
2 locales = 80 localized Q&As**.

1. `painting-maintenance-schedule`
2. `plumbing-annual-checklist`
3. `ceiling-maintenance-tips`
4. `waterproofing-recheck-schedule`
5. `home-handyman-monthly-checklist`
6. `rainy-season-home-prep`
7. `post-renovation-cleanup-checklist`
8. `condo-maintenance-checklist`
9. `landed-house-maintenance-calendar`
10. `rental-property-turnover-checklist`

The localized copy preserves source-specific details and constraints:
3–5/5–8 year interior repaint cycles and the exterior UV/algae/crack failure
chain; 2–4 bar normal water pressure with 5-year flexible-hose replacement;
20–30 mm ponding tests checked at 24/72 hours; monthly smoke-detector tests,
annual batteries and 10-year detector replacement; the May–September /
November–March monsoon split; 1.2 m furniture-anchoring threshold; 1–2 day
post-renovation cleaning; JMB/strata boundaries and balcony-drain checks;
monthly gutter cleaning, RM 200 roof inspection vs RM 5,000 ceiling repair and
5–7/5–8 year repaint cycles; RCD tests, re-keying, dated condition photos and
chemical-wash/gas checks between tenants. The copy is natural target-language
editorial text, not template interpolation.

## 3. Implementation and guardrail

- Added all 10 family-qualified `guidesMaintenance:<slug>` records to
  `config/content-pod-faq-i18n.ts`, each with complete `ms` and `zh` sets.
- Added `guidesMaintenance` to `COMPLETED_FAMILIES` in
  `scripts/validate-content-pod-faq-i18n.ts` only after all records passed.
- The permanent prebuild gate now protects all three completed families
  (`top`, `guides`, `guidesMaintenance`) — real-key and whole-family coverage,
  source count parity, non-stub depth, question form, English-leak detection,
  Chinese-script presence, duplicate-question detection, and exact
  production-resolver identity.
- No route, generic fallback, English source FAQ, schema builder or generated
  output was forked. The existing resolver remains the single source for the
  localized route, visible FAQ block, FAQPage schema, FAQ directory and client
  fallback.
- Added a reusable built-corpus probe `scripts/probe-pod-faq-i18n.ts`
  (`<family>` as argv, defaults to `guidesMaintenance`) so each remaining
  tranche can re-verify visible-HTM↔schema byte-identity without rewriting the
  probe.

## 4. Verification evidence

A fresh dependency install found **0 vulnerabilities**. The production build
emitted **4,139 HTML pages** (URL count unchanged — this tranche edits existing
localized routes' FAQ content only). The probe loaded all 20
`/ms/guides/maintenance/<slug>` and `/zh/guides/maintenance/<slug>` files,
stripped scripts to inspect visible text, parsed the `FAQPage` JSON-LD and
compared its four Questions and accepted answers against the editorial
registry.

| Check | Result |
|---|---|
| `audit:content-pod-faq-i18n` | ✅ 30/146 pods; 240 localized Q&As; completed families `top`, `guides`, `guidesMaintenance` |
| `npm ci` / dependency audit | ✅ 176 packages; 0 vulnerabilities |
| lint / type-check | ✅ 0 errors / 0 warnings |
| full `prebuild` | ✅ all gates; estimator suite 329,897 assertions, 0 failures |
| production build | ✅ 4,139 HTML pages |
| `probe-pod-faq-i18n guidesMaintenance` | ✅ 20/20 pages; 80/80 Q&As visible and byte-identical to FAQPage schema |
| `audit:html` | ✅ 4,139 pages; 0 fatal / 0 warnings |
| `audit:links` | ✅ 312,732 rendered + 56 source links; 0 broken |
| `audit:seo-head` | ✅ 4,112 indexable = 4,112 sitemap; 0 duplicate metadata / warnings |
| `audit:schema-size` | ✅ PASS (max non-FAQ under the 8 KB ceiling) |
| `audit:bp1` | ✅ 2,146 retired URLs remain absent; NAP 62.8% |
| `audit:location-similarity` | ✅ maximum 69.4% (<70%) |
| `audit:raster-og` | ✅ 0 SVG image leaks; all 8 templates emitted |
| `audit:meta` | ✅ 0 missing title/description; 0 JSON-LD parse failures; 0 breadcrumb last-item mismatches |
| `seo:audit` | ✅ metadata consistency; report regenerated |
| `part5-audit` | ✅ 0 JSON-LD parse errors; 0 duplicate titles/H1s |

## 5. Exact continuation point

**P3-12 phase 2 is ⏳ PENDING at 30/146.** The next session must continue with
**tranche 4: all 8 `seasonal` pages**. Their English source is `seasonalCopy`
in `config/content-pod-copy-batch2.ts`. Add records under `seasonal:<slug>`,
and add `"seasonal"` to the gate's `COMPLETED_FAMILIES` only after all 8 pages
have both complete locale sets and pass the built visible/schema probe
(`scripts/probe-pod-faq-i18n.ts seasonal`).

Fixed remaining order:

1. `seasonal` — 8 (next)
2. `compare` — 18
3. `brands` — 32
4. `commercial` — 29
5. `residential` — 29

**116 remain.** Do not mark the full phase complete until the gate reports
146/146. Do not use machine translation, generic FAQ templates, bulk title
substitution, or a premature family-complete declaration.
