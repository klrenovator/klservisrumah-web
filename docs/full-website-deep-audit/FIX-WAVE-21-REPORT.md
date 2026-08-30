# FIX WAVE 21 — P3-12 PHASE 2, TRANCHE 7: NATIVE MS/ZH COMMERCIAL FAQS

**Date:** 2026-08-30

**Branch:** `arena/01a05354-klservisrumah-web`

**Tracker source:** `TRACKING.md` → P3-12 phase 2 → exact next stop after Wave 20
("NEXT EXACT STOP: tranche 7, all 29 `commercial` pages").

> **Result:** ✅ **TRANCHE 7 COMPLETED** — all 29 `/commercial/*` pages now render
> page-specific, editorial Bahasa Malaysia and Simplified Chinese versions of
> their four authored English FAQs. Full P3-12 phase 2 remains
> **⏳ PENDING: 117/146 pods complete; 29 remain** (`residential` 29).

## 1. Continuation decision

The tracker and the Wave 15–20 reports agreed on one exact next task: translate
all 29 authored `commercial` FAQ sets. Parts 1–5, Fix Waves 1–20, BP-1 phase 1
and CF-4 were already complete and were **not** repeated. Owner-blocked work
(P5-12 photography, P2-21 reviews, P5-09 owner facts, Part 1 Critical #3
www/non-www, P2-22 citations, P4-11 named team page) was left untouched.

## 2. Source confirmed before authoring

The `commercial` family is service-backed: `config/content-data.ts`
`commercialPages` derive from `Object.values(servicesData)` (29 services), with
the body applied from `commercialCopy[service.slug]` in
`config/content-pod-copy.ts`. The full English FAQ source for all 29 pages was
extracted and verified (`commercialPages` → title + 4 authored FAQs per page)
before a single line was translated — every one of the 29 slugs has an authored
EN FAQ set, so a template fallback was never counted as progress.

| Source | Pages | Slug shape |
|---|---|---|
| `commercialCopy` (`config/content-pod-copy.ts`) | 29 | `<service>-services-kl` |

## 3. Completed scope

The complete `commercial` family was translated: **29 pages × 4 FAQs × 2
locales = 232 localized Q&As**, and `commercial` is now a **completed, gated
family** in `scripts/validate-content-pod-faq-i18n.ts`
(`COMPLETED_FAMILIES` now = `top, guides, guidesMaintenance, seasonal, compare,
brands, commercial`). The prebuild gate now fails if any `commercial` page is
missing its translated set, so a business-property reader can never silently
receive the four generic FAQs again.

**Slugs (29):** `painting`, `plumbing`, `ceiling`, `waterproofing`, `handyman`,
`house-renovation`, `electrical`, `water-heater`, `ceiling-fan`, `lighting`,
`tiling`, `plaster-ceiling`, `skim-coat`, `flooring`, `epoxy-flooring`,
`roof-repair`, `kitchen-cabinet`, `carpentry`, `door`, `window-repair`,
`locksmith`, `glass-aluminium`, `cctv`, `autogate`, `welding`, `aircon`,
`kitchen-renovation`, `bathroom-renovation`, `awning-installation` (all
`-services-kl`).

### Editorial fidelity (commercial, not "homes" copy)

Each translation preserves the page's business-premises detail and constraints,
never a generic paraphrase:

- **Strata/JMB access** — approval paperwork, worker details, common-area and
  shoplot repainting within approved windows; per-zone shutdown switching for
  occupied offices.
- **After-hours / trading continuity** — night, weekend and early-morning
  scheduling; one circulation path kept live; bays done one at a time so a
  pantry/washroom/floor never goes fully offline.
- **Regulatory & certification** — Suruhanjaya Tenaga registered wiremen;
  RCCB-protected dedicated circuits; hot-works permits with fire watch in
  shared buildings; council shoplot awning projection/height rules; door
  certification stays with the accredited party.
- **Commercial-grade specs** — 90-day ceiling workmanship; 5-year membrane
  systems with pre/post flood test maps; lippage clip systems on big slabs;
  commercial-grade SPC wear layer + chair-mat notes; forklift load-profile
  epoxy film builds and coved skirtings; fogged-IGU replacement; tempered
  panels; PER% retail access control; master-keyed hierarchies with key
  registers; fuel/grease-trap rework; sealed-hoarding washroom staging.

## 4. Verification

All gates PASS (build verified against the live SSG output):

- `scripts/validate-content-pod-faq-i18n.ts` — **117/146** authored pods
  editorially translated; **936** localized Q&As; `commercial` added to
  `COMPLETED_FAMILIES`.
- **Prebuild:** 329,897 assertions × 0 failures.
- **Type-check / lint:** 0 / 0.
- **Production build:** SUCCESS — 4,139 static HTML pages.
- **Probe (`scripts/probe-pod-faq-i18n.ts commercial`):** 58/58 localized pages
  (29 `/ms/commercial/*` + 29 `/zh/commercial/*`); 232/232 Q&As **visible and
  byte-identical to FAQPage schema**.
- `audit:html` — 0 fatal / 0 warnings.
- `audit:links` — 312,732 rendered + 56 source → 0 broken.
- `audit:seo-head` — 4,112 = 4,112 indexable (0 duplicate titles/descriptions,
  0 warnings).
- `audit:schema-size` — PASS (non-FAQ ceiling respected).
- `audit:bp1` — PASS (NAP-in-content 62.8%).
- `audit:location-similarity` — PASS (69.4% max, below 70%).
- `audit:meta` / `seo:audit` / `part5` — PASS (0 JSON-LD errors).

## 5. Files changed

- `config/content-pod-faq-i18n.ts` — added 29 `commercial:<slug>` registry sets
  (29 × 4 × 2 = 232 Q&As) after the `brands` family.
- `scripts/validate-content-pod-faq-i18n.ts` — `commercial` added to
  `COMPLETED_FAMILIES`; header comment updated (117 pages, 936 Q&As).

## 6. Next exact stop

**Tranche 8, all 29 `residential` pages.** Author them as
`residential:<slug>` (source `residentialCopy` in `config/content-pod-copy.ts`).
Editorial MS/ZH only, no MT; once `residential` is complete (146/146) add it to
`COMPLETED_FAMILIES` and P3-12 phase 2 closes.
