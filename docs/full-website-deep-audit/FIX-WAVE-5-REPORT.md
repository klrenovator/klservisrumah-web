# Fix Wave 5 — P2-C3 batch 2: 88 pod pages hand-authored

**Session:** 2026-08-29 · branch `arena/01a04be3-klservisrumah-web`
**Scope:** P2-C3 batch 2 — remaining pod families (brands 32, compare 18, guides 10, maintenance 10, seasonal 8, top 10)

---

## What was done

Part 2 (P2-C3) found 174 generic "content pod" pages sharing templated intros, identical bullets within families, and the same four FAQ templates across every page. Fix Wave 4 (batch 1) hand-authored the 58 commercial + residential pods. This wave completes the remaining 88 pages.

### Pages authored (88 total)

| Family | Count | Pages |
|---|---|---|
| **Brand** | 32 | 12 general (Nippon, Dulux, Jotun, SIRIM, Grundfos, Joven, Rinnai, Knauf, Boral, Sika, Bostik, Mapei) + 20 aircon brands (Daikin, Panasonic, Mitsubishi Electric, York, Acson, Carrier, Midea, Haier, Toshiba, Hitachi, Samsung, LG, Sharp, Fujitsu, Gree, National, Hisense, AUX, TCL, Isonic) |
| **Comparison** | 18 | PU vs hacking, plaster vs gypsum, Nippon vs Dulux, acrylic vs cementitious, PVC vs copper, PVC vs molly, paint finishes, putty vs plaster, partition materials, DIY vs pro, cheap vs insured, PU injection vs surface, fixed vs hourly, drywall vs glass, roof coating vs membrane, chemical wash vs overhaul, inverter vs non-inverter, wall-mount vs cassette |
| **Guide** | 10 | How to choose: painter, plumber, waterproofing, ceiling, handyman; brand comparisons: paint, waterproofing, ceiling, plumbing; TV mount types |
| **Maintenance** | 10 | Painting schedule, plumbing checklist, ceiling tips, waterproofing recheck, handyman monthly, rainy season prep, post-renovation cleanup, condo checklist, landed house calendar, rental turnover |
| **Seasonal** | 8 | Rainy season prep, dry season painting, pre-monsoon waterproofing, CNY repaint, Raya makeover, year-end planning, Raya painting, monsoon emergency |
| **Top** | 10 | How to compare: painters, plumbers, ceiling contractors, waterproofing contractors, handyman services; paint brands 2026, waterproofing methods, bathroom waterproofing options, ceiling materials, useful handyman services |

### Authoring rules (same as batch 1)

Each of the 88 pages now carries:
- **Unique intro** (≤158 chars, within meta description budget)
- **4 topic-specific bullets** (no shared family set)
- **4 real AEO FAQs** with ≥80-char answers (no templated `faq()` fallback)
- **faqTopic preserved** for MS/ZH trilingual parity (the localized resolver regenerates 4 template FAQs count-matched to the 4 authored EN FAQs)

### MS/ZH translations

- 263 unique new bullet phrases added to `config/content-pod-copy-i18n.ts` (`batch2BulletsMs` + `batch2BulletsZh`)
- Merged into the main `bulletsMs` / `bulletsZh` dictionaries in `config/content-body-i18n.ts`
- Every batch 2 bullet now resolves in both Malay and Chinese views

### Files modified

- `config/content-pod-copy-batch2.ts` — **NEW** — 88 authored pod entries across 6 dictionaries
- `config/content-data.ts` — wired `applyBatch2Copy()` helper into brand, comparison, guide, maintenance, seasonal, and top page mappings
- `config/content-pod-copy-i18n.ts` — added `batch2BulletsMs` (263 entries) + `batch2BulletsZh` (263 entries)
- `config/content-body-i18n.ts` — merged batch 2 bullet dictionaries into main exports

---

## Gate results (all green)

| Gate | Result |
|---|---|
| `npm run lint` | ✅ 0 errors, 0 warnings |
| `npm run type-check` | ✅ PASS |
| `npm run build` | ✅ SUCCESS (3,669 HTML pages, 35.4 kB middleware) |
| `npm run test:estimators` | ✅ 320,291 assertions, 0 failures |
| `npm run audit:bp1` | ✅ 2,146 retired URLs, 0 regenerated |
| `npm run audit:html` | ✅ 0 fatal / 0 warnings |
| `npm run audit:links` | ✅ 278,275 rendered + 53 source links, 0 broken |
| `npm run audit:seo-head` | ✅ PASS (3,643 indexable, 26 noindex, sitemap = 3,643) |
| `npm run audit:i18n` | ✅ 1,182 keys × 3, 0 missing |
| `npm run audit:topical-map` | ✅ 29/29 services, 222 relationships |
| `npm run audit:specialty-locale` | ✅ 222 × MS/ZH = 444 blocks |
| `npm run audit:specialty-coverage` | ✅ 222 subservices across 29 services |
| `npm run audit:service-i18n` | ✅ 29 services |
| `npm run audit:problem-i18n` | ✅ 74 keep-URLs × MS/ZH, 12 redirects excluded |
| `npm run audit:client-bundle` | ✅ 217 client modules, 0 heavy registries |
| `npm run audit:location-similarity` | ✅ all layers < 70% |
| `npm run audit:trilingual-leak` | ✅ 29 × 3 bases, 58 unique notes, 0 leaks |
| `npm run audit:content-pods` | ✅ 58 pods (batch 1 gate — batch 2 extends beyond the commercial/residential scope) |
| `npm run audit:schema-size` | ✅ PASS |
| `npm run seo:audit` | ✅ PASS |

---

## What remains

The P2-C3 batch 2 work is complete. The remaining P2-C3 items from the tracker:

1. **Extend `audit:content-pods` to cover batch 2 families** — the current gate only validates the 58 commercial/residential pods. A batch-2 extension would check uniqueness and structure across all 88 new pages. This is an optional hardening step.

2. **P2-16/17/18 remainder** — emergency-page depth, problem-page expansion (next unblocked work after P2-C3).

3. **P2-C4** — replace pair-copy generator; authored local copy for area×service — **still blocked on BP-1 phase 2 owner/GSC keep-set decision**.

4. **P3-12** — per-pod localized *bodies* (MS/ZH pod content is currently template-based by design; authored EN FAQs exist but MS/ZH FAQ answers remain template-regenerated).
