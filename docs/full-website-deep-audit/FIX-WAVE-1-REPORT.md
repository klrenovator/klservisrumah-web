# FIX WAVE 1 — Quick Wins from Parts 1–5 Roadmap

**Date:** 2026-08-28  
**Branch:** `arena/01a04966-klservisrumah-web`  
**Source roadmap:** `PART-5-AUDIT-REPORT.md` → Final Output C (Quick Wins) + N ("if we fix only 10") items 1–2 + 5 partial.

> All five audit parts were already complete (PRs #170–#175). This session starts the **fix phase**.

---

## COMPLETED ✅ this session

| ID | Fix | Evidence / change | Files |
|---|---|---|---|
| **P2-C2** | `content.relatedReading` literal H2 on 224 pages | Added `content.relatedReading` to en/ms/zh; hardened `resolveKey`/`createTranslator` so missing keys no longer return the dotted key as a truthy string; `generic-content-page` uses `defaultValue` | `messages/{en,ms,zh}.json`, `lib/i18n.ts`, `components/content/generic-content-page.tsx` |
| **P2-14** | `"Near me local page"` breadcrumb/schema label on 1,073 pages | `nearMeBadge` shortened to UI badge only; new `nearMeCrumb` = `"{service} Near Me in {area}"` used in Breadcrumbs (UI + JSON-LD) | `messages/*`, `components/sections/locale-near-me-view.tsx` |
| **C7 / P5-08** | Unit-less Offer prices (`"RM 14"` flooring etc.) | `startPrice` for tiling/plaster-ceiling/skim-coat/flooring/epoxy-flooring → `RM N / sq ft`; new `parsePricedOffer()` emits `UnitPriceSpecification` with `unitText`/`unitCode`; wired into Service/OfferCatalog/area Service + homepage ItemList | `config/services-data.ts`, `lib/seo.ts`, `app/(en)/page.tsx` |
| **P3-05 partial** | Homepage `lowPrice: "80"` | AggregateOffer low/high now derived from flat (non per-sq-ft) service start prices | `app/(en)/page.tsx` |
| **P5-01** | Two competing business entities | Removed `getLocalBusinessSchema()` emission from `SiteHead`; stub throws if called; tool graph `provider` → `/#organization` | `components/layout/site-head.tsx`, `lib/seo.ts`, `lib/estimator/schema.ts` |
| **P5-03** | AggregateRating on tool SoftwareApplication | Removed `aggregateRating` from tool graph; deleted unused Product-wrapped `getReviewSchema()` body (throws); removed dead `aggregateRating()` helper | `lib/estimator/schema.ts`, `lib/seo.ts` |
| **P5-05** | Blog author typed as Person | `getArticleSchema` author → `@type: Organization` | `lib/seo.ts` |
| **P5-11** | Homepage depth-1 BreadcrumbList | Removed homepage breadcrumb schema emission | `app/(en)/page.tsx` |
| **CF-1** | 28 blog↔sub-service exact H1 twins | Retargeted 25 production + 4 batch4 EN titles to informational "Cost & Process/Guide (2026)" angles; MS/ZH titles prefixed with guide/cost markers where they were commercial mirrors | `config/blog-production.generated.json`, `config/blog-data-batch4.ts` |

### Verification run this session

- `npm run type-check` — PASS  
- `npm run lint` — PASS (0 warnings)  
- `npm run audit:i18n` — PASS (1110 keys × 3)  
- `npm run validate:blogs` — PASS (216 topics / 648 localized)  
- Manual: `parsePricedOffer("RM 14 / sq ft")` → `UnitPriceSpecification` + `unitCode: FTK`  
- Manual: remaining exact H1 twins vs sub-service pattern = **0**  
- `npm audit` — 0 vulnerabilities (at install)

---

## NOT done this session (still ⏳ PENDING)

### Still in the "first 10" list (Part 5 §N)

| # | Item | Why not done now |
|---|---|---|
| 3 | C2 / P2-C1 / P4-01 — content inside `<main>` (SSR Loading shell) | Structural rendering change; needs careful App Router investigation + full rebuild verification |
| 4 | P5-02 — FAQPage markup vs visible FAQ on ~1,131 pages | Requires SSR of near-me/cost/emergency/home FAQs or schema strip — template-wide |
| 5b | P5-04 schema slimming (areaServed City bloat 610k nodes) | Pairs with P5-01 (done); remaining work is per-page areaServed trim |
| 6 | BP-1 programmatic consolidation (near-me merge, suburb twins) | Largest architecture change; needs 301 map + sitemap + GSC plan |
| 7 | Photography + case studies + team page | Owner-dependent (P5-12) |
| 8 | Review verification → honest rating markup | Owner-dependent (P2-21 / P4-09) |
| 9 | Cost pages → rate-book pages (CF-4) | Content rewrite |
| 10 | Blog real dates + OG rasters (C10 / P5-13) | Content + asset work |

### Other open P0/P1 from TRACKING.md

All Part 1–4 P0/P1 fix rows remain ⏳ except the quick wins closed above. See `TRACKING.md`.

---

## NEXT SESSION MUST CONTINUE HERE

1. **C2 / P2-C1 / P4-01** — Render real page content inside `<main>` (remove SSR "Loading…" shell; content currently after `</footer>` on 5,815 pages). Highest remaining structural P0.  
2. **P5-02** — FAQ visibility compliance (~1,131 pages).  
3. **BP-1 phase 1** — near-me → parent 301 plan + stop suburb-twin static generation.  
4. Re-request owner access: GSC, live edge www/non-www, CWV, GBP/reviews, founding/staff facts.

---

## Problem → Fix ledger (this wave only)

### P2-C2 — `content.relatedReading` as H2
- **Problem:** i18n key missing under `content`; `t()` returned the key string; `|| "Related reading"` never fired.  
- **Evidence:** live `/commercial/aircon-services-kl`; corpus 224 pages.  
- **Severity:** HIGH. **Fix:** key ×3 locales + `resolveKey` returns `undefined` + `defaultValue` support. **Status: ✅**

### P2-14 — Near-me breadcrumb label
- **Problem:** `location.nearMeBadge = "Near me local page"` used as BreadcrumbList `name`.  
- **Affected:** 1,073 near-me pages. **Severity:** HIGH (UX + schema).  
- **Fix:** badge shortened; `nearMeCrumb` descriptive. **Status: ✅**

### C7 / P5-08 — Unit-less prices
- **Problem:** schema Offer `price: "14"` for flooring etc.  
- **Affected:** ~2,500 pages via service/area templates. **Severity:** HIGH.  
- **Fix:** unit-bearing `startPrice` + `UnitPriceSpecification`. **Status: ✅** (visible copy already had units in taglines; schema + grid now match)

### P5-01 — Dual business entity
- **Problem:** `#organization` + `#localbusiness` on every page. **Severity:** HIGH. **Status: ✅**

### P5-03 — Rating on SoftwareApplication
- **Problem:** business 4.9★ attached to calculators; 0 Review nodes where reviews show. **Status: ✅** (removed wrong markup; honest rating still blocked on owner verification)

### P5-05 — Author as Person
- **Status: ✅** (Organization interim)

### P5-11 — Homepage breadcrumb
- **Status: ✅**

### CF-1 — Blog↔sub-service H1 twins
- **Problem:** 28 exact H1 collisions. **Fix:** informational retarget. **Status: ✅** (EN exact twins = 0; deeper body-intent alignment still optional content work)

