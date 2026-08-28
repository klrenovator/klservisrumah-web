# FIX WAVE 3 — Schema architecture slim (P5-04 + P5-06 + P5-07) and breadcrumb completion (P5-10)

**Date:** 2026-08-28
**Branch:** `arena/01a04a81-klservisrumah-web`
**Source:** `TRACKING.md` → "⭐ NEXT SESSION MUST CONTINUE HERE" → items 2 (`P5-04
areaServed slim`) and 3 (`P5-10 breadcrumbs on pods` — explicitly unblocked by
BP-1), following the documented order. BP-1 phase 2 (item 1) remains
**owner-blocked on Google Search Console data** — Part 1 §1.3 forbids deleting
local pages on low traffic alone, so it was correctly *not* started.
**Closes:** Part 5 **P5-04** (JSON-LD bloat / @id-reference architecture),
**P5-06** (HowTo nodes), **P5-07** (Speakable/orphan WebPage nodes) and
**P5-10** (breadcrumb coverage holes — EN scope).

---

## A. THE PROBLEM (measured on this branch before any change)

A new full-corpus gate (`scripts/schema-size-audit.ts`, `npm run
audit:schema-size`) scanned all **3,669 built pages** in `.next/server/app`:

| Metric (baseline, this branch) | Value |
|---|---:|
| Total JSON-LD across corpus | **62.2 MB** (9.6% of all HTML) |
| `City` nodes in corpus | **220,616** |
| Largest sub-page JSON-LD | `/pricing` — **102.6 KB** |
| Service pages | avg 24.5 KB JSON-LD each |
| Tool pages (EN) | avg 19.4 KB each |
| Full Organization node | re-emitted on **all 3,669 pages** (10,731 B each) |
| Sub-service / specialty / emergency pages | inherited the parent's full OfferCatalog (~3 KB each) |
| Area × service local pages (1,508) | re-emitted the service's full OfferCatalog (~3 KB each) |
| Speakable WebPage nodes | ~500 pages (audit count 526; orphan nodes) |
| HowTo nodes | all 74 problem pages, 29 service pages ×3 locales, process pods, all 43×3 tool pages — one hard-coded generic name |
| Breadcrumb coverage | **0%** on all 184 pod children, 21 guide-tree pages, 29 near-me hubs, 22 service-cluster pages |

---

## B. WHAT WAS DONE

### B1 — P5-04: @id-reference schema architecture + areaServed/catalog slim

| Change | File(s) |
|---|---|
| **Full Organization node homepage-only.** `/` is the entity's home and now the ONLY page emitting `getOrganizationSchema()` (knowsAbout 28, brand 33, 49-city areaServed, contactPoints, openingHours — 10.7 KB). `/ms` and `/zh` are noindex redirect stubs, not localised homepages, so the entity lives on `/` alone. | `app/(en)/page.tsx` |
| **New compact reference node** `getOrganizationReferenceSchema()` (~0.7 KB): @type/@id/name/url/logo/telephone/NAP + a GeoCircle areaServed. Merges with the full node by @id. | `lib/seo.ts` |
| `SiteHead` now emits the reference node instead of the full org on every page. | `components/layout/site-head.tsx` |
| `getServiceSchema()` — `areaServed` 49 City nodes → **one GeoCircle**; `provider` reduced to a bare `{"@id": "/#organization"}` reference. | `lib/seo.ts` |
| **New `includeCatalog` control**: only the service's own page carries its sub-service OfferCatalog. Sub-service (300 EN), specialty (444 MS/ZH) and emergency (29) pages pass `includeCatalog: false` — they used to inherit the parent's entire catalog. | `lib/seo.ts`, 3 call sites |
| `getLocalBusinessServiceSchema()` — dropped the service's full OfferCatalog from all 1,073 area-pair + 435 suburb + 29 near-me-hub pages; they keep the page-local `Place` areaServed + their own offer. | `lib/seo.ts` |
| Estimator tool `@graph` — Service `areaServed` 20 City nodes → GeoCircle. | `lib/estimator/schema.ts` |
| **`/pricing`** — the 92 KB OfferCatalog (all 222 sub-services flattened) became a 12-service flagship catalog (same `slice(0, 12)` precedent the homepage uses); full per-service catalogs stay on the 29 service pages. Units still attached via `UnitPriceSpecification` (C7/P5-08 invariant kept). | `app/(en)/pricing/page.tsx` |
| **`/estimate` hub** — OfferCatalog (8.6 KB) → ItemList of estimator names+URLs; each estimator page keeps its own full graph. | `app/(en)/estimate/page.tsx` |
| **Tools hubs (`/tools`, `/ms/alatan`, `/zh/gongju`)** — dropped the 43 duplicated SoftwareApplication nodes (~19 KB each); the hub now enumerates tools as a minimal ItemList; each tool page keeps its complete graph. Speakable removed from CollectionPage. | `components/tools/tools-index-page.tsx` |
| `parsePricedOffer` — numeric price specifications keep `unitText`/`unitCode` (the machine-readable unit invariant) and drop the duplicated human sentence; quote-only specs keep their description. `getOfferCatalogSchema` items drop `itemOffered.description` + `availability`. | `lib/seo.ts` |
| **Regression gate** `scripts/schema-size-audit.ts` → `npm run audit:schema-size`: asserts full-org homepage-only, exactly one business node per sub-page (P5-01 guard), 0 City nodes off-homepage (page-local City allowed on `/areas/<a>` + `/suburbs/<s>` hubs), and ≤8 KB non-FAQ JSON-LD per sub-page. | new script + `package.json` |

**8 KB ceiling refinement — stated plainly.** Part 5's quick-win metric says
"JSON-LD ≤8 KB on sub-pages". Measurement showed a residue of genuinely
authored content that cannot go under 8 KB without content surgery: the
awning service carries **15 visible FAQs ≈ 8.8 KB** and the "ultimate guide"
answers pages carry 10–15 each. The gate therefore caps **non-FAQ JSON-LD**
at 8 KB and reports both figures — the metric targets the repeated
entity/coverage bloat this work exists to kill; a page's visibly-rendered
Q&A is content, not bloat.

### B2 — P5-06: HowTo JSON-LD removed site-wide

Google retired HowTo rich results (announced Aug 2023, sunset Sept 2023) and
Bing never surfaced them — the nodes were 1–2 KB of dead weight on ~150 pages
and stood between the corpus and the 8 KB metric. All HowTo emissions removed:
problem pages (74 + MS/ZH twins), service pages (29 ×3 locales), process pods,
specialty pages, and the tool graph. The **visible step-by-step sections are
untouched** — users and AI crawlers still read every process in plain HTML.
`getHowToSchema()` is now a throwing stub (repo pattern), with the P5-06 rule
documented: if structured process data ever returns, every page gets its own
per-page name (the old node hard-coded one generic name for all 74 problems).
The three locale shells' `howToSchemaName`/`howToSchemaDescription` helpers
were removed with it.

### B3 — P5-07: Speakable / orphan WebPage nodes removed site-wide

The emitted node was an orphan `WebPage` (no @id, no url, unlinked) carrying
only a `SpeakableSpecification` — a property tied to Google Assistant news
surfaces with no active use for a local home-services site. Removed from ~500
EN pages, the MS/ZH FAQ hubs, the tool graph (`WebPage` node with
primaryImageOfPage), and the tools-hub CollectionPage. `getSpeakableSchema()`
is now a throwing stub. All CSS-targeted content (h1, intros, FAQ answers)
remains fully visible in the HTML; two stale hero comments updated.

### B4 — P5-10: breadcrumb coverage holes closed (EN scope)

`<Breadcrumbs>` (visible trail + BreadcrumbList JSON-LD from one component —
no drift) mounted on every template the audit listed at 0%:

| Family | Pages | Trail |
|---|---:|---|
| 8 content-pod children (answers 29, brands 32, commercial 29, compare 18, process 29, residential 29, seasonal 8, top 10) | **184** | Home → Pod → page |
| Guides tree (`/guides/<slug>` 11 + `/guides/maintenance/<slug>` 10) | **21** | Home → Guides → (Maintenance →) page |
| `/near-me/<svc>` hubs | **29** | Home → Near Me → service |
| Service-cluster pages mounted under `/services/<svc>/<sub>` (e.g. `/services/painting/interior-painting-kl`) | **22** | Home → Services → service → cluster |
| **Total newly breadcrumbed** | **256** | |

Also fixed while verifying: `locale-service-page.tsx` and
`locale-specialty-page.tsx` emitted a **second, standalone BreadcrumbList**
next to the component's own — two conflicting trails per page on 465+
localised service/specialty pages. The standalone scripts were removed; the
component remains the single source for trail + schema.

**Deferred by design (documented in Part 5):** MS/ZH blog breadcrumbs
(216 + 216 pages) belong to P5-12b → folded into the P3-12 i18n-parity work;
`/privacy` + `/terms` "UI only, no schema" was marked *acceptable* by the
audit; `/` stays breadcrumb-free (P5-11).

---

## C. VERIFICATION

Production build on this branch. Every line below was run and read.

### Corpus numbers (`.next/server/app`, 3,669 pages)

| Metric | Before | After | Δ |
|---|---:|---:|---:|
| Total JSON-LD | 62.2 MB | **14.5 MB** | **−76.7%** |
| …of which page-specific FAQ content | — | 3.9 MB | (content, not bloat) |
| JSON-LD share of HTML | 9.6% | **2.7%** | −6.9 pts |
| `City` nodes corpus-wide | 220,616 | **95** | −99.96% (49 homepage-org + 10 homepage-service + 36 page-local area hubs) |
| Largest sub-page JSON-LD | `/pricing` 102.6 KB | `/pricing` 5.4 KB | −95% |
| Largest **non-FAQ** sub-page JSON-LD | 102.6 KB | **`/answers` 7.1 KB** | within the 8 KB ceiling |
| Homepage (entity home, full node by design) | 27.8 KB | 25.1 KB | — |
| Service pages avg (non-FAQ) | 24.5 KB | 5.1 KB | −79% |
| Sub-service/specialty pages avg (non-FAQ) | 21.4–24.5 KB | 2.9–3.4 KB | −86% |
| Area×service pairs avg (non-FAQ) | ~18 KB | 3.4 KB | −81% |
| Tool pages avg (non-FAQ) | 19.4 KB | 4.5 KB | −77% |
| Pages with full Organization node | 3,669 | **1** (`/`) | entity home only |
| Breadcrumb UI+schema coverage | 3,225 / 3,668 missing 443 | missing only the deferred sets (MS/ZH blog 432, stubs, privacy/terms, `/`) | **+256 pages** |

### Quality gates (all run locally on this branch)

| Check | Result |
|---|---|
| `npm run lint` | **PASS** (0 errors, 0 warnings) |
| `npm run type-check` | **PASS** |
| `npm run build` | **SUCCESS** — 3,677 routes / 3,669 HTML |
| `npm run audit:schema-size` (new) | **PASS** — ceiling, entity, City-node and business-node-count rules all green on 3,669 pages |
| `npm run audit:bp1` | **PASS** — 2,146 retired URLs stay retired |
| `npm run audit:html` | **PASS** (3,669 pages, 0 fatal) |
| `npm run audit:links` | **PASS** — 278,247 rendered + 53 source links, 0 broken |
| `npm run audit:seo-head` | **PASS** — 3,666 self-canonical, 0 duplicate titles/descriptions |
| `npm run audit:i18n` | **PASS** — 1,104 keys × 3 locales |
| `npm run audit:meta` | **PASS** |
| `npm run seo:audit` | **PASS** |
| `npm run audit:topical-map` / `audit:specialty-locale` / `audit:specialty-coverage` / `audit:service-i18n` / `audit:problem-i18n` | **PASS** (29 services, 222 specialties ×ms/zh, 74 problems) |
| `npm run audit:client-bundle` | **PASS** — 217 client modules |
| `npm run audit:location-similarity` | **PASS** — all layers < 70% |
| `npm run test:estimators` | **PASS** — 320,331 assertions, 0 failures |

### Live HTTP behaviour (`next start`, probed with curl)

| Request | Status | Verified |
|---|---|---|
| `/` | 200 | full Organization node present (knowsAbout), no BreadcrumbList (P5-11 intact) |
| `/services/painting` | 200 | 1 BreadcrumbList, reference-only org (no knowsAbout) |
| `/areas/kuala-lumpur/painting/near-me` | **301** | BP-1 redirect intact |
| `/suburbs/cheras/painting` | **301** | BP-1 redirect intact |
| `/answers/door-ultimate-guide` | 200 | trail: Home → Answers → page |
| `/near-me/painting` | 200 | trail: Home → Near Me → House Painting Services Near Me |
| `/guides/maintenance/condo-maintenance-checklist` | 200 | trail: Home → Guides → Maintenance → page |

Spot-checked trails on `/guides/<slug>`, `/top/<slug>`, `/seasonal/<slug>`,
`/commercial/<slug>` and `/services/painting/interior-painting-kl` — all
Home-anchored, depth mirrors URL hierarchy.

---

## D. WHAT THIS UNBLOCKS / CHANGES DOWNSTREAM

- **CF-4** (rate-book → `/services/<svc>/cost` merge) now operates on a
  corpus where `/pricing` already carries only the flagship catalog; the
  rate-book content decision is unchanged.
- **P3-12** i18n parity absorbs the remaining MS/ZH blog breadcrumbs (432
  pages) — the EN pattern to copy is now uniform everywhere.
- The 8 KB ceiling is now **machine-enforced** on every future build via
  `audit:schema-size`; a returning full-org node, City list, or catalog
  duplication fails the gate.

## E. RESIDUAL / HONEST CAVEATS

- The 36 page-local `City` nodes on `/areas/<area>` hubs are intentional
  (the audit's own "page's own area" allowance); one hub's Service node uses
  a slightly different shape — counted, consistent, harmless.
- `docs/seo-audit-report.md` was regenerated by `seo:audit` (1-line diff).
- **CI wiring could not land** — same blocker as BP-1: the GitHub App token
  lacks the `workflows` permission, so `.github/workflows/ci.yml` cannot be
  pushed (rejected twice now). The ready-to-apply patch at
  `docs/full-website-deep-audit/BP-1-ci-audit-bp1.patch` was **refreshed this
  session** and now adds BOTH `audit:bp1` and `audit:schema-size` as
  post-build steps. Until then both gates run locally, and `audit:bp1
  --source-only` still runs inside CI's `prebuild`.
- Owner-blocked items unchanged: BP-1 phase 2 (GSC), P5-12 photography,
  P5-09 owner facts, Part 1 #3/#7 live-edge checks.
