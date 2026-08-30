# FIX WAVE 20 — P3-12 PHASE 2, TRANCHE 6: NATIVE MS/ZH BRANDS FAQS

**Date:** 2026-08-30

**Branch:** `arena/01a0523b-klservisrumah-web`

**Tracker source:** `TRACKING.md` → P3-12 phase 2 → exact next stop after Wave 19
("NEXT EXACT STOP: tranche 6, all 32 `brands` pages").

> **Result:** ✅ **TRANCHE 6 COMPLETED** — all 32 `/brands/*` pages now render
> page-specific, editorial Bahasa Malaysia and Simplified Chinese versions of
> their four authored English FAQs. Full P3-12 phase 2 remains
> **⏳ PENDING: 88/146 pods complete; 58 remain** (`commercial` 29 →
> `residential` 29).

## 1. Continuation decision

The tracker, the Wave 15–19 reports, the continuation prompt and the session
log agreed on one exact next task: translate all 32 authored `brands` FAQ sets.
Parts 1–5, Fix Waves 1–19, BP-1 phase 1 and CF-4 were already complete and were
**not** repeated. Owner-blocked work (P5-12 photography, P2-21 reviews,
P5-09 owner facts, Part 1 Critical #3 www/non-www, P2-22 citations) was left
untouched.

## 2. Source confirmed before authoring

Wave 19 flagged that the `brands` family draws from **two** exports in
`config/content-pod-copy-batch2.ts`, so the exact 32-slug set was verified
against `config/content-data.ts` (`brandPages`, filtering
`faqTopic && !serviceDerived`) before a single line was authored:

| Source export | Pages | Slug shape |
|---|---|---|
| `brandCopy` | 12 | material/brand guides (paint, pipes, pumps, heaters, gypsum, waterproofing) |
| `airconBrandCopy` | 20 | `<brand>-aircon-service-malaysia` |

**32 pages confirmed** — matching `POD_FAMILIES.brands`. The aircon pages are
pushed onto `brandPages` after the initial 12-entry `.map(...)`, so both halves
sit in the same family and both are covered.

## 3. Completed scope

The complete `brands` family was translated: **32 pages × 4 FAQs × 2 locales =
256 localized Q&As**.

**Material / brand guides (`brandCopy` — 12):**
`nippon-paint-application-malaysia`, `dulux-paint-application-malaysia`,
`jotun-paint-application-malaysia`, `sirim-certified-pipes-malaysia`,
`grundfos-water-pump-installation`, `joven-water-heater-installation`,
`rinnai-water-heater-installation`, `knauf-gypsum-board-installation`,
`boral-gypsum-board-installation`, `sika-waterproofing-application`,
`bostik-waterproofing-application`, `mapei-waterproofing-application`.

**Aircon brand pages (`airconBrandCopy` — 20):**
`daikin`, `panasonic`, `mitsubishi-electric`, `york`, `acson`, `carrier`,
`midea`, `haier`, `toshiba`, `hitachi`, `samsung`, `lg`, `sharp`, `fujitsu`,
`gree`, `national`, `hisense`, `aux`, `tcl`, `isonic`
(all `-aircon-service-malaysia`).

### Editorial fidelity

The localized copy preserves each page's source-specific technical detail and
constraints rather than paraphrasing generically:

- **Paint** — Nippon Spot Less Plus vs Dulux EasyClean positioning, Weatherbond
  5-year vs Weathershield 7-year exterior durability, Nippon 5400 Wall Sealer
  over chalky substrate, Jotashield heat-reflectance/colour retention, and
  Green Choice + DOSH low-VOC guidance.
- **Plumbing / M&E** — SIRIM QAS certification and insurance/JMB consequences,
  the certified brand list (PPI/Polyplumb, Wira Plumb, Heng Hong copper),
  Grundfos SCALA/SCALA2/UPA sizing and 8–12 year life, Joven 20 A dedicated
  circuit and RM 80–120 descale, Rinnai balanced-flue vs open-flue and the
  flame-failure device.
- **Gypsum** — Knauf MR green-faced board vs standard, system-matched
  frame/jointing warranty conditions, Boral acoustic partitions with mineral
  wool and sealed joints.
- **Waterproofing** — SikaTop Seal 107 under-tile cementitious vs PU for
  exposed decks, Sika PU injection resin expanding on water contact, Bostik
  5–8 year vs 1–2 year acrylic sealant life, Mapei single-manufacturer system
  accountability and Aquadefense ~4-hour tiling readiness.
- **Aircon** — Daikin installed-base reasoning and R32 handling, Panasonic
  nanoe-G/Econavi diagnostics and the H11 communication error,
  Mitsubishi Electric vs Mitsubishi Heavy separation and cassette drain-pump
  faults, Acson/OYL local manufacture and R22 replacement economics, R22
  phase-out on National units, WindFree micro-hole airflow, LG twin-rotary
  part-load efficiency and low minimum wattage for solar, Toshiba Thai
  assembly, and the R32/R410A split across Carrier's ranges.

Figures, brand names, model names, error codes and certification marks are
carried across verbatim; the surrounding prose is natural target-language
editorial text, not template interpolation or machine translation.

## 4. Implementation and guardrail

- Added all 32 family-qualified `brands:<slug>` records to
  `config/content-pod-faq-i18n.ts`, each with complete `ms` and `zh` sets.
- Added `brands` to `COMPLETED_FAMILIES` in
  `scripts/validate-content-pod-faq-i18n.ts` **only after** all 32 records
  passed — so a missing translation can now never silently fall back to the
  four generic FAQs on a brand route.
- The permanent prebuild gate now protects all six completed families
  (`top`, `guides`, `guidesMaintenance`, `seasonal`, `compare`, `brands`) with
  real-key and whole-family coverage, source count parity, non-stub depth,
  question form, English-leak detection, Chinese-script presence,
  duplicate-question detection, and exact production-resolver identity.
- Question phrasing deliberately steers around the **448 already-published**
  MS/ZH questions (the brands family shares paint-brand, pipe, ceiling-board,
  waterproofing and aircon ground with `top`, `guides` and `compare`), so the
  gate's case-insensitive duplicate-question check passed with zero reword
  cycles.
- No route, generic fallback, English source FAQ, schema builder or generated
  output was forked. The existing resolver remains the single source for the
  localized route, visible FAQ block, FAQPage schema, FAQ directory and client
  fallback.
- Reused the existing built-corpus probe `scripts/probe-pod-faq-i18n.ts`
  (`brands` as argv) to verify visible-HTML↔schema byte-identity.

## 5. Verification evidence

A fresh `npm ci` found **0 vulnerabilities**. The production build emitted
**4,139 HTML pages** (URL count unchanged — this tranche edits existing
localized routes' FAQ content only). The probe loaded all 64 `/ms/brands/*` and
`/zh/brands/*` files, stripped scripts to inspect visible text, parsed the
`FAQPage` JSON-LD and compared its four questions and accepted answers against
the editorial registry.

| Check | Result |
|---|---|
| `npm ci` / dependency audit | ✅ 176 packages; 0 vulnerabilities |
| `audit:content-pod-faq-i18n` | ✅ 88/146 pods; 704 localized Q&As; completed families `top`, `guides`, `guidesMaintenance`, `seasonal`, `compare`, `brands` |
| lint / type-check | ✅ 0 errors / 0 warnings |
| full `prebuild` | ✅ all gates; estimator suite **329,897 assertions, 0 failures** |
| production build | ✅ **4,139** HTML pages |
| `probe-pod-faq-i18n brands` | ✅ **64/64** pages; **256/256** Q&As visible and byte-identical to FAQPage schema |
| `audit:html` | ✅ 4,139 pages; **0 fatal / 0 warnings** |
| `audit:links` | ✅ 312,732 rendered + 56 source links; **0 broken** |
| `audit:seo-head` | ✅ 4,112 indexable = 4,112 sitemap; 0 duplicate titles/descriptions; 0 warnings |
| `audit:schema-size` | ✅ PASS (≤8 KB non-FAQ ceiling) |
| `audit:bp1` | ✅ 2,146 retired URLs remain absent; NAP-in-content 62.8% |
| `audit:location-similarity` | ✅ maximum **69.4%** (<70% budget) |
| `audit:raster-og` | ✅ raster-only og:image / twitter:image / schema image; 0 SVG |
| `audit:meta` | ✅ PASS |
| `seo:audit` | ✅ metadata consistency; report regenerated |
| `part5-audit` | ✅ 4,139 pages; 0 JSON-LD parse errors; 0 duplicate titles/H1s |
| `part3-aeo-audit` (corpus) | ✅ 4,139 pages; BM leak **0**, ZH leak **0**; `/brands/<slug>` n=32, question-heading 100%, FAQ schema 100% |

## 6. Exact continuation point

**P3-12 phase 2 is ⏳ PENDING at 88/146.** The next session must continue with
**tranche 7: all 29 `commercial` pages**, then **tranche 8: all 29
`residential` pages**.

Fixed remaining order:

1. `commercial` — 29 (next)
2. `residential` — 29

**58 remain.** Practical notes for whoever picks this up:

- Author records as `commercial:<slug>` / `residential:<slug>`. These two
  families deliberately **share slugs** (`<service>-services-kl`), which is
  exactly why the registry is family-qualified — never author them under a bare
  slug key.
- `commercial` has a special fallback in `lib/content-locale-resolver.ts`
  (`COMMERCIAL_FAQ_TEMPLATES`) that is bypassed only once a real registry set
  exists; adding a partial family will therefore render audience-templated FAQs
  on the untranslated pages, so complete all 29 before adding `commercial` to
  `COMPLETED_FAMILIES`.
- Add each family to `COMPLETED_FAMILIES` in
  `scripts/validate-content-pod-faq-i18n.ts` **only after** every page in it
  has both locale sets and passes `scripts/probe-pod-faq-i18n.ts <family>`.
- **Do not** mark the phase complete until the gate reports **146/146**.
- **Do not** use machine translation, generic FAQ templates, bulk title
  substitution, or a premature family-complete declaration.
