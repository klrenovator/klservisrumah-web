# BP-1 PHASE 1 — Programmatic consolidation (near-me → parent, suburb twins retired)

**Date:** 2026-08-28
**Branch:** `arena/01a04a3f-klservisrumah-web`
**Source:** `TRACKING.md` → "⭐ NEXT SESSION MUST CONTINUE HERE" → BP-1 phase 1, and
`CONTINUE_SESSION_PROMPT.md` → "Next session starts at: BP-1 phase 1".
**Closes:** Part 1 Critical **#1** (index bloat / programmatic near-duplicates) and
Part 1 Critical **#2** (`/near-me` literal duplicates of parent).

> The five audit parts (PRs #170–#175), Fix Wave 1 and Fix Wave 2 were already
> complete. This is the first of the **big-project** items — the architecture
> change every other recommendation compounds on.

---

## A. THE PROBLEM (verified, not estimated)

Part 1 §1.2 measured **2,581 indexable EN URLs served by one template — 72.5% of
the indexable site**. Two subsets were pure duplication rather than coverage:

| Duplicate set | URLs | What was actually on the page |
|---|---:|---|
| `/areas/<area>/<svc>/near-me` | **1,073** | Byte-for-byte the parent `/areas/<area>/<svc>` template with the word "near" substituted into the H1/title and a near-me-flavoured parametric body. Self-cannibalisation *inside one template*. |
| `/suburbs/<twin>/<svc>` | **1,073** | 37 of the 52 suburbs are also coverage areas, so these shipped the same place × service × offer as `/areas/<twin>/<svc>`. Already carried a `rel=canonical` to the `/areas` URL. |

**Why a canonical was not enough** (the reason this was still a Critical):
`rel=canonical` is a *hint*. Google still crawled, rendered and stored all 1,073
twin pages before being told to discard them — crawl budget spent for nothing —
and every internal link pointing at a twin spent equity on a URL that had no
independent existence. Part 1's own quick-win #4 conceded this ("ensure no
internal links point to `/suburbs/<twin>/<service>`").

**Baseline measured on this branch before any change** (`.next/server/app`):

```
total HTML            5,815
areas/*/near-me       1,073      ← duplicate
areas/*/* (pair)      1,073      ← canonical, KEEP
areas/* (hub)            37      ← KEEP
suburbs/*/*           1,508      ← 1,073 duplicate + 435 unique
near-me hubs             30      ← KEEP (/near-me + 29 services)
sitemap URLs          4,739
```

---

## B. WHAT WAS DONE

### B1 — `/areas/<area>/<svc>/near-me` consolidated into the parent (1,073 URLs)

| Change | File |
|---|---|
| Route deleted — the 1,073 pages are no longer generated | `app/(en)/areas/[slug]/[serviceSlug]/near-me/page.tsx` **(deleted)** |
| Client wrapper deleted (204 lines, dead) | `components/sections/locale-near-me-view.tsx` **(deleted)** |
| **301** `/areas/<a>/<svc>/near-me` → `/areas/<a>/<svc>` | `middleware.ts` via `bp1RedirectTarget()` |
| The 1,073 URLs removed from the sitemap | `app/(en)/sitemap.ts` |
| Parent's inbound link retargeted from the retired page to the **kept** `/near-me/<svc>` geo-hub | `components/sections/locale-area-service-view.tsx` |
| **Near-me Q&A absorbed, not dropped** — the retired pages' 3 substantive questions now render visibly on the parent *and* are in its FAQPage JSON-LD (3 → **6** `Question` nodes) | `app/(en)/areas/[slug]/[serviceSlug]/page.tsx`, `locale-area-service-view.tsx` |
| `buildNearMePairBundle` / `buildNearMePairCopy` removed; `areaPairCopy()`'s `nearMe` branch collapsed | `lib/location-bundles.ts`, `lib/location-pair-copy.ts` |
| 10 now-dead i18n keys removed × 3 locales | `messages/{en,ms,zh}.json` |

> **The `:service:` hash seed is load-bearing.** Collapsing the `nearMe` branch
> kept the seed literal `…:service:…` so landmark/sub-service rotation is
> byte-identical on all 1,073 surviving `/areas/<area>/<svc>` pages. Changing it
> would have silently re-shuffled the copy on every kept local page. This is
> documented at the function and asserted by the build.

> **Why the questions were kept.** A 301 passes URL equity; it does **not** carry
> on-page content. Dropping the near-me Q&A would have left the canonical page
> answering *less* than the duplicate it replaced. The wording is unchanged from
> the retired pages, and the visible block and the schema are emitted from the
> same array — the invariant Fix Wave 2 established for P5-02.

### B2 — `/suburbs/<twin>/<svc>` static generation stopped (1,073 URLs)

| Change | File |
|---|---|
| `generateStaticParams()` filtered to the **15 suburbs with no `/areas` twin** → 435 pages instead of 1,508 | `app/(en)/suburbs/[slug]/[serviceSlug]/page.tsx` |
| Cross-page `canonicalPath` override removed — survivors are now self-canonical | same |
| **301** `/suburbs/<twin>/<svc>` → `/areas/<twin>/<svc>` | `middleware.ts` |
| Every internal link retargeted through `suburbServicePath()` | `locale-suburb-service-view.tsx` (breadcrumbs + nearby), `locale-near-me-hub.tsx` (suburb chips), `components/service-area-selector.tsx` (the "view local" button), `lib/faq-directory.ts` (156 suburb FAQ cards on `/faq`) |

### B3 — One source of truth, generated, drift-proof

`scripts/generate-bp1-map.ts` (new, wired into `prebuild` + `predev`) derives the
consolidation map from `config/area-data.ts` ∩ `config/suburb-data.ts` and writes
`config/suburb-twin-slugs.generated.ts` — 4 plain string arrays, **3.5 KB**, no
imports. Middleware imports only that.

| Array | n | Purpose |
|---|---:|---|
| `SUBURB_TWIN_SLUGS` | 37 | 301 to `/areas/…` |
| `SUBURB_ORIGINAL_SLUGS` | 15 | keep self-canonical `/suburbs/…` |
| `AREA_SLUGS` | 37 | tell a *retired* URL from an *invented* one |
| `SERVICE_SLUGS` | 29 | same |

**Middleware cost: 35 kB → 35.4 kB** (+0.4 kB). Importing `area-data.ts` (66 KB)
or `services-data.ts` (624 KB) directly would have been ~25–50 KB of dead weight
on *every* request.

### B4 — Regression gate

`scripts/bp1-consolidation-audit.ts` (new) — `npm run audit:bp1`. Without it, one
re-added route file silently restores a thousand-page duplicate set and the next
sitemap ships it straight back to Google.

* **Source-only mode** (`--source-only`) runs in `prebuild`, before any build output exists — so **CI already enforces it**, since CI's first step after `npm ci` is `npm run prebuild`.
* **Full mode** adds the built-corpus checks after `npm run build`. Adding this as a post-build CI step needs the `workflows` permission this session does not have — see **§G** for the ready-to-apply patch.

Seven check groups: map/data sync (incl. `AREA_SLUGS`/`SERVICE_SLUGS`), route-file
absence, `generateStaticParams` filtering + no cross-page canonical, middleware
wiring, **real sitemap composition** (calls the actual `sitemap()` function),
source-level link hygiene across 719 files, and built-corpus (0 retired pages,
every redirect target exists, 0 rendered links into retired URLs).

---

## C. DEFECTS FOUND AND FIXED DURING THIS WORK

Two were caught by running the server and probing it, not by reading code:

| # | Defect | Fix |
|---|---|---|
| 1 | `/areas/not-a-place/painting/near-me` answered **301 → `/areas/not-a-place/painting` → 404**. A redirect onto a soft-404 is worse for crawlers than the plain 404 the route returned before BP-1. Same for `/suburbs/cheras/not-a-service`. | Slug validation: a 301 now fires **only** for a URL that genuinely was a generated page. Invented URLs fall through to 404. Asserted by the gate (`invented URLs` check, 5 shapes). |
| 2 | The gate's own source scan flagged `sitemap.ts` and the suburb route as offenders — false positives, since both already restrict themselves to the non-twin set. | Narrowed to an explicit 2-file `FILTERED_EMITTERS` allowlist (whose *output* is validated by checks 5 and 7), **plus an assertion that those two files still contain their filter** so the exemption cannot silently become a hole. |

---

## D. VERIFICATION

Production build on this branch. Every line below is a command that was run.

### Counts (`.next/server/app`)

| Metric | Before | After | Δ |
|---|---:|---:|---:|
| Built HTML pages | 5,815 | **3,669** | **−2,146 (−36.9%)** |
| `/areas/*/*/near-me` built | 1,073 | **0** | −1,073 |
| `/suburbs/*/*` built | 1,508 | **435** | −1,073 |
| `/areas/*/*` pair (kept) | 1,073 | 1,073 | 0 |
| `/areas/*` hubs (kept) | 37 | 37 | 0 |
| `/near-me` hubs (kept) | 30 | 30 | 0 |
| Sitemap URLs | 4,739 | **3,666** | −1,073 |
| Cross-page-canonical pages (`audit:seo-head`) | 1,073 | **0** | −1,073 |
| i18n keys | 1,112 | 1,104 | −10 +2 |
| Middleware bundle | 35 kB | 35.4 kB | +0.4 kB |

*(The 4,739 → 3,666 sitemap figure is independently corroborated by the
regenerated committed artifacts `public/site-summary.json` → `"indexablePages"`
and `public/llms-full.txt` → "indexable pages listed in the sitemap".)*

### Quality gates

| Check | Result |
|---|---|
| `npm run lint` | **PASS** (0 errors, 0 warnings) |
| `npm run type-check` | **PASS** |
| `npm run build` | **SUCCESS** (3,669 HTML; middleware 35.4 kB) |
| `npm run audit:bp1` | **PASS** — 2,146 retired URLs mapped; 435 suburb + 30 near-me hub pages kept |
| `npm run audit:html` | **0 fatal / 0 warnings** (3,669 pages checked) |
| `npm run audit:links` | **PASS** — 277,711 rendered links + 53 source links, **0 broken** |
| `npm run audit:seo-head` | **PASS** — 3,666 self-canonical, **0 canonicalized**, 0 duplicate titles/descriptions, 0 warnings |
| `npm run audit:i18n` | **PASS** — 1,104 keys × 3, 0 missing/extra/empty/malformed |
| `npm run audit:topical-map` | **PASS** — 29/29 services, 222 relationships |
| `npm run audit:specialty-locale` | **PASS** — 222 specialties × ms/zh (444 blocks) |
| `npm run audit:specialty-coverage` | **PASS** — 222 subservices across 29 services |
| `npm run audit:service-i18n` | **PASS** — 29 services |
| `npm run audit:problem-i18n` | **PASS** — 74 keep-URLs × ms/zh, 12 redirects excluded |
| `npm run audit:client-bundle` | **PASS** — 217 client modules |
| `npm run audit:location-similarity` | **PASS** — near-me layer 0 pages; all layers < 70% |
| `npm run seo:audit` | **PASS** — metadata consistency |
| `npm run test:estimators` | **PASS** — 320,331 assertions, 0 failures |
| `npm audit` | **0 vulnerabilities** |

### Live HTTP behaviour (`next start`, probed with curl)

| Request | Status | Target |
|---|---|---|
| `/areas/kuala-lumpur/painting/near-me` | **301** | `/areas/kuala-lumpur/painting` → 200 (**1 hop**) |
| `/areas/sentul/awning-installation/near-me` | **301** | `/areas/sentul/awning-installation` → 200 (**1 hop**) |
| `/suburbs/cheras/painting` | **301** | `/areas/cheras/painting` → 200 (**1 hop**) |
| `/suburbs/mont-kiara/awning-installation` | **301** | `/areas/mont-kiara/awning-installation` → 200 (**1 hop**) |
| `/areas/kuala-lumpur/painting` | 200 | kept |
| `/suburbs/meru/painting` · `/suburbs/kampung-baru/tiling` | 200 | kept (non-twin suburbs) |
| `/near-me` · `/near-me/painting` · `/areas/kuala-lumpur` | 200 | kept |
| `/areas/not-a-place/painting/near-me` | **404** | invented slug — correctly *not* redirected |
| `/areas/kuala-lumpur/not-a-service/near-me` | **404** | same |
| `/suburbs/cheras/not-a-service` | **404** | same |
| `/suburbs/not-a-suburb/painting` | **404** | same |

### Content preservation (spot-checked rendered HTML)

| Check on `/areas/kuala-lumpur/painting` | Result |
|---|---|
| "Is … available near me in Kuala Lumpur?" visible | yes |
| "How do I confirm nearest dispatch?" visible | yes |
| "Will near-me pricing be higher?" visible | yes |
| FAQPage `Question` nodes | **6** (was 3) |
| Near-me link target | `/near-me/painting` (the kept geo-hub) |
| Any `href` to a retired URL | **0** |

| Check on other surfaces | Result |
|---|---|
| `/near-me/painting` suburb chips | all twins → `/areas/<slug>/painting` |
| `/faq` directory suburb FAQ cards | all twins → `/areas/<slug>/painting` |
| `/suburbs/meru/painting` nearby links | `klang` (twin) → `/areas/klang/painting`; the 4 non-twins stay `/suburbs/…` |
| Site-wide rendered links into retired URLs | **0** (gate check 7) |

---

## E. KNOWN RESIDUAL (bounded, documented, not fixed here)

**A trailing-slash retired URL takes 2 hops, not 1:**
`/areas/kuala-lumpur/painting/near-me/` → **308** (Next.js's built-in
trailing-slash normalisation, which runs *before* middleware) → **301** → 200.

* **Scope:** only retired near-me / suburb-twin URLs requested *with* a trailing
  slash. These were never in the sitemap and never internally linked, so the
  population is essentially zero.
* **Why not fixed here:** collapsing it requires `skipTrailingSlashRedirect` in
  `next.config.mjs`, which is a **site-wide** trailing-slash behaviour change —
  that is Part 1 Critical **#7** ("Trailing-slash and live status-code behaviour
  unverified"), a separate decision that needs a live edge crawl to verify.
  Changing it as a side effect of BP-1 would be scope creep with site-wide risk.
* The non-slashed form — every URL that was actually published — is a clean
  single 301.

---

## F. WHAT THIS UNBLOCKS

| Unblocked item | Why BP-1 was the dependency |
|---|---|
| **P4-16** — internal link-equity rebalance | The 2,146 duplicate pages were the largest sink; hub-vs-child ratios are now measurable against a 3,669-page graph instead of 5,815. |
| **P4-13** — restructure the local pages | Part 4 scoped it at 3,654 pages; it is now 1,508 (1,073 pairs + 435 suburbs). "Authored local copy for the top-N pairs" is now a tractable list. |
| **P5-10** — breadcrumbs on pod pages | Was explicitly sequenced "after BP-1". |
| **C1 indexation health** | Indexable surface cut by ~37% with **zero** loss of a distinct place × service × intent combination — every retired URL's content is on its canonical parent. |

---

## G. ONE THING THAT COULD NOT BE DONE FROM THIS SESSION

**`.github/workflows/ci.yml` could not be updated.** The push was rejected:

```
! [remote rejected] ... (refusing to allow a GitHub App to create or update
  workflow `.github/workflows/ci.yml` without `workflows` permission)
```

The commit was reverted so the branch stays pushable; the intended change is
preserved as a one-command patch:

```bash
git apply docs/full-website-deep-audit/BP-1-ci-audit-bp1.patch
```

It adds `npm run audit:bp1` as a post-build CI step and refreshes two stale header
counts (prebuild is now 15 gates; the site renders ~3,670 pages, not ~6,200).
The YAML was validated before reverting (12 steps, gate ordered after the build).

**How much protection is actually missing: less than it looks.** Because
`audit:bp1 -- --source-only` runs *inside* `prebuild`, and CI's first job step
after `npm ci` is `npm run prebuild`, **CI already fails on every source-level
BP-1 regression today** — a re-added near-me route, an unfiltered
`generateStaticParams`, a stale generated slug map, a missing middleware call, or
a retired URL back in the sitemap. The patch only adds the *built-corpus* half
(proving 0 retired `.html` files exist and 0 rendered links point at them).
Applying it is still worth doing; it is not a gap that leaves the change
unguarded in the meantime.

---

## H. POST-DEPLOY OWNER / SEO TASKS (cannot be done from the repo)

BP-1 changes 2,146 live URLs from 200 to 301. These need production access:

1. **Google Search Console** — watch the "Pages" report: the 1,073 near-me and
   1,073 `/suburbs/<twin>/*` URLs should migrate to *"Page with redirect"* over
   1–4 weeks. Confirm no *"Alternate page with proper canonical tag"* backlog
   persists for `/suburbs` (the old canonical setup's signature).
2. **Bing Webmaster Tools** — same check.
3. **Resubmit the sitemap** (`/sitemap.xml`, now 3,666 URLs) and optionally
   IndexNow-ping the surviving `/areas/<area>/<svc>` set so the 301 targets are
   re-validated promptly.
4. **Watch for ranking dips on the 1,073 `/areas/<area>/<svc>` pages** — they
   should *gain* as the duplicate's signal consolidates, but a 1–2 week dip is
   normal during redirect processing.
5. **Verify the www/non-www 301 at the edge** (Part 1 Critical #3, still
   ⏳ PENDING — needs live HTTP access). The middleware redirect deliberately
   clones `request.nextUrl` and rewrites only `pathname`, so it can never move a
   visitor between hosts.

---

## I. NEXT PENDING (unchanged order, minus BP-1 phase 1)

1. **BP-1 phase 2** — the demand-backed keep-list for the remaining 1,073
   `/areas/<area>/<svc>` pairs: keep only areas with genuine demand or unique
   local signal; authored local copy (landmarks, condo/JMB rules, real jobs) for
   the kept set. **Needs GSC data (owner-blocked)** — do not delete on low
   traffic alone (Part 1 §1.3).
2. **P5-04** — `areaServed` slim (pairs with the completed P5-01).
3. **P5-10** — breadcrumbs on 184 pod pages + 20 specialty sub-services + 20 guides.
4. **CF-4** — merge rate-book into `/services/<svc>/cost`; evaluate `/estimate/*`.
5. **P3-01** — BM/ZH English leaks in DirectAnswer blocks (29/29 service pages) + prebuild leak validator.
6. **P2-C3 / P2-C4** — 174 generic content-pod pages; replace the pair-copy generator.

**Still-missing access to re-request from the owner:** Google Search Console,
live edge HTTP check (www 301 + trailing-slash 301s), CWV/CrUX, GBP + review
source verification, owner fact confirmations, photography assets (P5-12).
