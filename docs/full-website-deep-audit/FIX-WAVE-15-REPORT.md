# FIX WAVE 15 — P3-12 PHASE 2, TRANCHE 1: NATIVE MS/ZH POD FAQS

**Date:** 2026-08-30

**Branch:** `arena/01a0507d-klservisrumah-web`

**Tracker source:** `TRACKING.md` → “Next code-level candidates” → first item,
**P3-12 phase 2** (native MS/ZH translation of 146 authored per-pod FAQ sets;
no machine translation).

> **Result:** ✅ **TRANCHE 1 COMPLETED** — all 10 `/top/*` buying-consideration
> pages now render editorial, page-specific Bahasa Malaysia and Simplified
> Chinese translations of their authored English FAQs. This replaces the four
> generic localized fallback questions on 20 real localized URLs. Full P3-12
> phase 2 remains **⏳ PENDING: 10/146 pods complete; 136 remain.**

## 1. Why this was the next task

The five audit parts and Fix Waves 1–14 were already complete. Owner-blocked
P0/P1 work (edge canonical, GSC-backed local-page keep set, verified reviews,
company facts and photography) could not be advanced safely. The tracker names
P3-12 phase 2 as the highest-value unblocked code/content candidate.

Wave 11 created genuine MS/ZH pod routes, but 146 authored English pod pages
still used four family-level localized FAQ templates. Those templates avoided
English leakage, but discarded each English page's specific evidence, numbers,
trade-offs and decision criteria. This tranche starts the editorial replacement
without bulk MT or a generic sentence generator.

## 2. Completed scope

The complete `top` family was translated: **10 pages × 4 FAQs × 2 locales = 80
localized Q&As**.

1. `best-house-painters-kl-2026`
2. `best-plumbers-kl`
3. `best-ceiling-contractors-kl`
4. `best-waterproofing-contractors-kl`
5. `best-handyman-kl`
6. `best-paint-brands-malaysia-2026`
7. `best-waterproofing-methods-malaysia`
8. `bathroom-waterproofing-options`
9. `ceiling-materials-malaysia`
10. `handyman-services-every-homeowner-needs`

The translations preserve source-specific details including 400–450 mm frame
spacing, 12-month/10-year ceiling terms, waterproofing life ranges, RM 200,
1–2/2–3/5–7 day bathroom timelines, 30–50% ceiling premiums, and brand/use-case
comparisons. Questions and answers were written as natural target-language copy,
not English word order with substitutions.

## 3. Architecture and wiring

### New translation registry

`config/content-pod-faq-i18n.ts` stores sets under `${family}:${slug}`. Family is
part of the key because commercial and residential pages deliberately share the
same slug. The structure keeps each locale's four questions paired with the
English source page and makes partial/missing locale sets auditable.

### One resolver for every surface

`localizeContentBody()` now accepts an optional `ContentPodFamily` and returns a
page-specific editorial set before considering generic templates.

The family is supplied by:

- `resolvePod()` for the real `/ms/*` and `/zh/*` server routes;
- the English-route client fallback, through an explicit category→family map;
- the localized `/faq` directory for guides, comparisons, maintenance,
  seasonal, commercial, residential, brands and top pages.

Therefore the localized detail page, its FAQPage schema, the FAQ directory and
the optional client-language view all use the same source. Commercial's
premises-safe fallback remains active only until that page receives its own
editorial set.

### Permanent gate

New `scripts/validate-content-pod-faq-i18n.ts`, wired into `prebuild` as
`audit:content-pod-faq-i18n`, verifies:

- every page in a declared-complete family has both locale sets;
- every dictionary key resolves to a real authored pod;
- question/answer count equals the English source;
- questions are questions and answers clear non-stub thresholds;
- no byte-identical English source or obvious English prose leaks;
- Chinese sets contain Chinese text and questions do not duplicate;
- the production `resolvePod()` returns each editorial set verbatim.

Current gate truthfully reports **10/146**, rather than presenting the tranche as
completion of the whole phase.

## 4. Built-corpus verification

A production build emitted **4,139 HTML pages**. A direct 20-page probe of all
`/ms/top/<slug>` and `/zh/top/<slug>` files verified all **80/80** translated
Q&As occur in visible HTML and are byte-identical to the corresponding
`FAQPage.mainEntity` names and accepted answers.

| Check | Result |
|---|---|
| `audit:content-pod-faq-i18n` | ✅ 10/146 pods, 80 localized Q&As |
| lint / type-check | ✅ 0 errors / 0 warnings |
| full `prebuild` | ✅ all gates; estimator suite 329,897 assertions, 0 failures |
| production build | ✅ 4,139 HTML pages |
| translated FAQ visible↔schema probe | ✅ 20/20 pages; 80/80 Q&As exact |
| `audit:html` | ✅ 4,139 pages; 0 fatal, 0 warnings |
| `audit:links` | ✅ 312,732 rendered + 56 source links; 0 broken |
| `audit:seo-head` | ✅ 4,112 indexable = 4,112 sitemap; 0 duplicate metadata/warnings |
| `audit:schema-size` | ✅ max non-FAQ JSON-LD 7.1 KB (<8 KB) |
| `audit:bp1` | ✅ retired routes absent; NAP 62.8% |
| `audit:location-similarity` | ✅ max 69.4% (<70%) |
| `audit:raster-og`, `audit:meta`, `seo:audit` | ✅ PASS |
| npm dependency audit | ✅ 0 vulnerabilities (`npm ci`) |

## 5. Exact continuation point

**P3-12 phase 2 is ⏳ PENDING at 10/146.** The next session must continue with
**tranche 2: all 10 `guides` pages** in `guideCopy` (`config/content-pod-copy-batch2.ts`).
Add keys as `guides:<slug>` to `CONTENT_POD_FAQ_I18N`, then add `"guides"` to
`COMPLETED_FAMILIES` only when all 10 pass. Continue after that in this fixed
order to prevent omissions:

1. `guides` — 10 (next)
2. `guidesMaintenance` — 10
3. `seasonal` — 8
4. `compare` — 18
5. `brands` — 32
6. `commercial` — 29
7. `residential` — 29

That is 136 remaining. Do not mark P3-12 phase 2 complete until the gate reports
**146/146**. Do not replace the editorial registry with machine translation,
generic templates or title interpolation. `answers` and `process` are excluded
because they already resolve the fully translated service FAQ sets; cluster
pages are outside the Wave-11 localized pod registry.
