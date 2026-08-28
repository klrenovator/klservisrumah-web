# KL Servis Rumah — Deep Audit Status Board

> **Purpose:** A single, session-to-session tracking board so any AI agent (or
> human) can immediately see what is **done** (green tick ✅), what is
> **pending** (⏳), and where to pick up next. Update this file at the end of
> every audit session. **Green tick = verified/committed/published. Pending =
> next** session's work item.
>
> **Rule:** Every audit part is saved to GitHub, its own deep audit is produced
> and saved, and (for this session) a PR is created and merged. Then work is
> prioritised harmlessly in priority order.

---

## 5-Part Audit Prompt — Storage

| # | Part | Prompt saved | Deep audit saved | In GitHub | Status |
|---|---|---|---|---|---|
| 0 | Overview (shared instructions & output requirements) | ✅ `00-PROMPT-OVERVIEW.md` | — | ✅ | ✅ DONE |
| 1 | Technical SEO + Crawlability + Indexation + Architecture | ✅ `PART-1-PROMPT.md` | ✅ `PART-1-AUDIT-REPORT.md` | ✅ | ✅ DONE (PR merged) |
| 2 | On-page SEO + Content + Semantic + Entity SEO | ✅ `PART-2-PROMPT.md` | ✅ `PART-2-AUDIT-REPORT.md` | ✅ | ✅ DONE (PR #171 — authored this session) |
| 3 | AEO + GEO + LLMO + AIO / AI Search | ✅ `PART-3-PROMPT.md` | ✅ `PART-3-AUDIT-REPORT.md` | ✅ | ✅ DONE (PR #173 — authored this session) |
| 4 | SXO + Local SEO + Internal Linking + CRO + Trust | ✅ `PART-4-PROMPT.md` | ✅ `PART-4-AUDIT-REPORT.md` | ✅ | ✅ DONE (PR #174 — authored this session) |
| 5 | Schema + Content Gap + Priority Roadmap | ✅ `PART-5-PROMPT.md` | ✅ `PART-5-AUDIT-REPORT.md` | ✅ | ✅ DONE (PR authored this session) |

---

## Priority Work Queue

> Once all five parts are audited, work is prioritised in this order. Green tick
> once a task lands; leave **⏳ PENDING** until then.

| Prio | Task (blocker) | Status |
|---|---|---|
| P0 | Audit Part 1 (Technical / Crawl / Index / Architecture) and publish | ✅ DONE |
| P0 | Audit Part 2 (On-page / Content / Semantic / Entity) | ✅ DONE |
| P1 | Audit Part 3 (AEO / GEO / LLMO / AI SEO) | ✅ DONE (PR #173) |
| P1 | Audit Part 4 (SXO / Local / Internal Linking / CRO / Trust) | ✅ DONE (PR #174) |
| P1 | Audit Part 5 (Schema / Content Gap / Roadmap + cumulative Final Output A–N) | ✅ DONE (this session) |
| — | Merge per-part audit PRs (this session: Pt 1 merged) | ✅ DONE (Pt 1 + Pt 2) |
| P1 | Fix Part 5 P5-04 — schema slim: @id-reference org, areaServed/catalog dedup (with P5-06 HowTo + P5-07 Speakable) | ✅ DONE (Fix Wave 3) |
| P1 | Fix Part 5 P5-10 — breadcrumbs on 184 pods + 21 guides + 29 near-me hubs + 22 cluster pages | ✅ DONE (Fix Wave 3) |
| P0 | Fix Part 1 Critical #1 — Trim programmatic service+location index | ✅ DONE (BP-1 phase 1 — 2,146 duplicate URLs retired) |
| P0 | Fix Part 1 Critical #2 — Consolidate near-me duplicates | ✅ DONE (BP-1 phase 1 — 1,073 → 301 to parent) |
| P0 | Fix Part 1 Critical #3 — Resolve www/non-www host canonical | ⏳ PENDING (owner — needs live edge access) |
| P0 | Fix Part 2 P2-C1 — Server-render content inside `<main>` (static HTML is a Loading shell) | ✅ DONE (Fix Wave 2) |
| P0 | Fix Part 2 P2-C2 — `content.relatedReading` literal key renders as H2 on 224 pages | ✅ DONE (Fix Wave 1) |
| P0 | Fix Part 2 P2-C3 — 174 generic "content pod" pages (commercial/residential/process/answers/brands/top/seasonal/guides) | ⏳ PENDING |
| P0 | Fix Part 2 P2-C4 — Replace pair-copy generator; authored local copy for area×service | ⏳ PENDING |
| P1 | Fix Part 2 P2-16/17/18 — Expand problems/cost; rewrite or retire emergency pages | ⏳ PENDING |
| P1 | Fix Part 2 P2-19 — Real per-article blog dates (216 posts / 5 dates) | ⏳ PENDING |
| P1 | Fix Part 2 P2-21 — Reviews: verify + Review schema or drop AggregateRating | ⏳ PENDING (owner) |
| P1 | Fix Part 2 P2-22 — Add outbound citations (brands/authority/manufacturer) | ⏳ PENDING |

---

## Session Log (short)

| Session | Scope | Result |
|---|---|---|
| 2026-08-27 | Part 1 audit + prompt saved + PR merged | ✅ Part 1 committed & merged |
| 2026-08-28 | Part 2 audit — full-corpus on-page/content/semantic/entity | ✅ Part 2 committed & merged (PR #171) |
| 2026-08-28 | Part 3 audit — full-corpus AEO/GEO/LLMO/AI-search + entity-consistency scans | ✅ Part 3 committed & merged (PR #173) |
| 2026-08-28 | Part 4 audit — full-corpus SXO/mobile/CRO/CTA/trust/local + internal-link graph & anchor-text scan | ✅ Part 4 committed & merged (PR #174) |
| 2026-08-28 | Part 5 audit — full-corpus schema/breadcrumb/image/cannibalization scan (`scripts/part5-audit.ts`) + content gap + decay + brand/entity + **cumulative Final Output A–N** | ✅ Part 5 committed (PR this session) — **ALL 5 AUDIT PARTS COMPLETE** |
| 2026-08-28 | **Fix Wave 1** — quick wins from Part 5 §C/§N: P2-C2, P2-14, C7/P5-08, P5-01, P5-03, P5-05, P5-11, CF-1 (28 twin H1s), P3-05 lowPrice | ✅ See `FIX-WAVE-1-REPORT.md` |
| 2026-08-28 | **Fix Wave 2** — C2/P2-C1/P4-01 content-inside-`<main>` + P5-02/P3-11/P3-02 visible FAQs | ✅ See `FIX-WAVE-2-REPORT.md` |
| 2026-08-28 | **BP-1 phase 1** — Part 1 Critical #1/#2: 1,073 `/areas/*/*/near-me` + 1,073 `/suburbs/<twin>/*` retired to 301s; SSG stopped; sitemap 4,739→3,666; HTML 5,815→3,669; near-me Q&A absorbed into parent (FAQPage 3→6); new `audit:bp1` gate + `gen:bp1-map` | ✅ See `BP-1-PHASE-1-REPORT.md` |
| 2026-08-28 | **Fix Wave 3** — P5-04 (@id-reference org architecture: full node homepage-only, GeoCircle areaServed, catalog dedup on 1,508 local + 773 variant pages, /pricing −95%, tools hubs −19 KB each; corpus JSON-LD 62.2→14.5 MB, City nodes 220,616→95) + P5-06 (HowTo retired) + P5-07 (Speakable orphans) + P5-10 (+256 breadcrumbed pages) + new `audit:schema-size` gate (≤8 KB non-FAQ ceiling enforced) | ✅ See `FIX-WAVE-3-REPORT.md` |

---

## Part 5 — Priority Work Queue (findings added — `PART-5-AUDIT-REPORT.md`)

| Prio | Task | Status |
|---|---|---|
| P0 | P5-02 — FAQPage markup on ~1,131 pages whose Q&As are not in rendered HTML (1,073 near-me + 29 cost + 29 emergency + homepage): SSR the FAQs or strip the schema | ✅ DONE (Fix Wave 2) |
| P0 | P5-08 — Unit-less Offer prices (`price:"14"` flooring etc. on ~2,500 pages) → `UnitPriceSpecification` + visible units (with P3-05) | ✅ DONE (Fix Wave 1) |
| P0 | CF-1 — Retarget/301 the 26 blog↔sub-service H1 twins (list in `audit-part5-cannibalization.json`) | ✅ DONE (Fix Wave 1 — 28 EN exact twins retargeted; remaining exact = 0) |
| P0 | P5-12 — Photography program: 37 images / 5,815 pages, 0 real project photos (owner-dependent; start immediately) | ⏳ PENDING (owner) |
| P1 | P5-01/04 — Remove duplicate `LocalBusiness` node; single `/#organization` entity; @id-reference schema + trim areaServed (22–31 KB JSON-LD/page today) | ✅ DONE — P5-01 (Fix Wave 1) + P5-04 (Fix Wave 3: full org homepage-only, GeoCircle, catalog dedup; corpus 62.2→14.5 MB, max sub-page 7.1 KB non-FAQ) |
| P1 | P5-03 — Strip `aggregateRating` from tool SoftwareApplication; delete unused Product-wrapped `getReviewSchema()` | ✅ DONE (Fix Wave 1) |
| P1 | P5-05 — Blog `author` Person→Organization (interim); real author entities later | ✅ DONE (Fix Wave 1 — Organization interim) |
| P1 | P5-13/14 — Raster 1200×630 OG images (SVG og:image breaks WhatsApp/social previews on ~2,200+ pages); fix schema `image` fields too | ⏳ PENDING |
| P1 | P5-10 — Breadcrumbs (UI+schema) on 184 pod pages + 20 specialty sub-services + 29 near-me hubs + 20 guides | ✅ DONE (Fix Wave 3 — 256 pages: 184 pods + 21 guides-tree + 29 near-me hubs + 22 cluster pages; duplicate BreadcrumbList on localized service/specialty templates removed; MS/ZH blog trails stay with P3-12 per Part 5 §P5-12b) |
| P1 | CF-4 — Merge rate-book into `/services/<svc>/cost` pages; evaluate NOINDEX/merge for `/estimate/*` (23 pages) | ⏳ PENDING |
| P1 | §5.4-B1 — BM commercial tree (harga/problem/money templates) — largest content gap | ⏳ PENDING |
| P2 | P5-06 — HowTo: per-page names (all 74 problems say "Professional home service process") or drop (rich results retired) | ✅ DONE (Fix Wave 3 — dropped site-wide; Google retired the rich result, visible process sections kept in HTML) |
| P2 | P5-07 — Remove Speakable/orphan WebPage nodes (526 pages) | ✅ DONE (Fix Wave 3 — all orphan Speakable WebPage nodes removed; targeted content stays visible in HTML) |
| P2 | §5.6 — Freshness pipeline: RATE_YEAR assertion, refresh rota, real lastMod | ⏳ PENDING |
| P2 | P5-09 — Owner verification: foundingDate 2014 vs SSM 202503227236 (2025); employees 10 vs "15+" | ⏳ PENDING (owner) |
| P3 | P5-11 — Suppress depth-1 BreadcrumbList on homepage | ✅ DONE (Fix Wave 1) |

---

## ⭐ NEXT SESSION MUST CONTINUE HERE

**All 5 audit parts are complete. Fix Wave 1, Fix Wave 2, BP-1 phase 1 and
Fix Wave 3 are complete** — see `FIX-WAVE-1-REPORT.md`, `FIX-WAVE-2-REPORT.md`,
`BP-1-PHASE-1-REPORT.md` and `FIX-WAVE-3-REPORT.md`. Fix Wave 3 closed
**P5-04 (schema slim: corpus JSON-LD 62.2→14.5 MB), P5-06 (HowTo), P5-07
(Speakable) and P5-10 (breadcrumbs, EN)**.

1. **BP-1 phase 2 is still blocked on owner data:** the demand-backed
   keep-list for the remaining **1,073** `/areas/<area>/<svc>` pairs (plus the
   435 kept suburb pages). Keep only areas with genuine demand or a unique
   local signal, and add authored local copy (landmarks, condo/JMB rules,
   real jobs) to the kept set. **Blocked on GSC data (owner)** — Part 1 §1.3
   is explicit: *do not delete on low traffic alone.*
2. **Next unblocked work — CF-4:** merge the rate-book into
   `/services/<svc>/cost` pages; evaluate NOINDEX/merge for `/estimate/*`
   (23 pages). Note: `/pricing` now ships only the flagship 12-service
   catalog (Fix Wave 3) — CF-4 owns where the full rate-book content lives.
3. Then: **P3-01** BM/ZH English leaks in DirectAnswer blocks (29/29 service
   pages, P0) + prebuild leak validator → **P2-C3** 174 generic content pods
   → **P2-C4** replace the pair-copy generator with authored area×service
   copy → remaining Part 3 P0s (P3-07 fact reconciliation).
4. **CI patch still unapplied (retried this session — same rejection):**
   `git apply docs/full-website-deep-audit/BP-1-ci-audit-bp1.patch` adds
   **both** `audit:bp1` and `audit:schema-size` as post-build CI steps
   (patch refreshed this session to include the Fix Wave 3 gate). The
   GitHub App token still lacks the `workflows` permission — the push was
   rejected on 2026-08-28 (first attempt) and again this session (second
   attempt), and the workflow change was reverted both times so the branch
   stays pushable. Retry on any session whose token has it, or apply from
   an owner account. The source-level BP-1 half already runs in CI via
   `prebuild`; the schema-size gate runs locally via `npm run
   audit:schema-size` until the patch lands.
5. **Post-deploy for BP-1 (owner/SEO):** GSC + Bing — confirm the 2,146 URLs
   move to *"Page with redirect"*; resubmit `/sitemap.xml` (3,666 URLs);
   IndexNow-ping the surviving `/areas/<area>/<svc>` set; watch for the
   normal 1–2 week dip.
6. **Still-missing access (blockers to re-request from owner):** Google Search
   Console, live HTTP/edge check (www 301 + trailing-slash 301s — Part 1 #3 and
   #7), CWV/CrUX, GBP + review source verification, owner fact confirmations
   (reviews count, founding year, staff, stats), photography assets (P5-12).

---

## Part 4 — Priority Work Queue (findings added — `PART-4-AUDIT-REPORT.md`)

| Prio | Task | Status |
|---|---|---|
| P0 | P4-01 — Render page content inside `<main>` (remove SSR "Loading…" shell; content currently after `</footer>` on 5,815 pages) | ✅ DONE (Fix Wave 2 — 0/5,815 remaining) |
| P1 | P4-09 — Add AggregateRating+Review to homepage/service/pricing LocalBusiness; remove `aggregateRating` from tool SoftwareApplication | ⏳ PENDING (needs owner review verification) |
| P1 | P4-05 — Mount `StickyBookButton` globally / on commercial templates (currently service+sub-service only) | ⏳ PENDING |
| P1 | P4-07 — Add static-SSR inquiry/callback form (all forms JS-gated today) | ⏳ PENDING |
| P1 | P4-12 — Embed coverage map; set `hasMap` to a valid map URL (0 iframes today) | ⏳ PENDING |
| P1 | P4-06 — Add include/exclude list to service pages | ⏳ PENDING |
| P1 | P4-11 — Team/authors page + bio schema (E-E-A-T Experience pillar) | ⏳ PENDING |
| P1 | P4-16 — Rebalance internal link equity (hub indexes vs content children 7–9) | ⏳ PENDING (**unblocked by BP-1** — re-measure on the 3,669-page graph) |
| P1 | P4-13 — Restructure the local pages (site-wide price + parametric body) | ⏳ PENDING (**unblocked by BP-1** — scope cut 3,654 → 1,508; this is **BP-1 phase 2**) |
| P1 | P4-17 — Link aircon problems from aircon service + tools (1–2 inbound) | ⏳ PENDING |
| P1 | P4-02 — Mobile quote box above the fold (behind full-viewport slideshow today) | ⏳ PENDING |
| P2 | P4-10 — Make FeaturedProjects/BeforeAfter cards real links; add case-study pages | ⏳ PENDING |
| P2 | P4-03 — Consolidate floating CTAs (up to 4 on desktop service pages); exit-intent 30s timer → mouse-leave | ⏳ PENDING |
| P2 | P4-14 — Per-area `Service` entities in LocalBusiness schema | ⏳ PENDING |
| P2 | P4-15 — NAP contact strip in content block (5,813 pages footer-only) | ⏳ PENDING |
| P2 | P4-08 — Reword primary CTAs around fixed-quote/no-deposit | ⏳ PENDING |
| P3 | P4-18 — Anchor-text profile healthy (90% descriptive / 7% generic / 0% branded) — no action required | ⏳ PENDING |

## Part 3 — Priority Work Queue (findings added)

| Prio | Task (from PART-3-AUDIT-REPORT.md) | Status |
|---|---|---|
| P0 | P3-01 — Fix English leaks inside BM/中文 DirectAnswer blocks (29/29 service pages) + add prebuild leak validator | ⏳ PENDING |
| P0 | P3-05 — Add units to per-sq-ft prices on all AI surfaces ("from RM 14/10/5/22") + fix `lowPrice: "80"` | 🟡 PARTIAL (Fix Wave 1 — startPrice units + schema UnitPriceSpecification + homepage lowPrice fixed; remaining AI-surface copy leaks still ⏳) |
| P0 | P3-07 — Reconcile contradictory facts: RM 180 vs 220 ceiling price, "28+" vs 29 services, warranty pill vs per-service warranty (251 pages), stats claims | ⏳ PENDING |
| P1 | P3-11 — Server-render homepage + /faq hub accordion answers (JS-only today) | ✅ DONE (Fix Wave 2 — native `<details>`) |
| P1 | P3-02 — /faq hub: add FAQPage JSON-LD + question H3s + remove hidden "No matches" text | 🟡 PARTIAL (Fix Wave 2 — FAQPage JSON-LD + visible answers; question H3s / hidden empty-state still ⏳) |
| P1 | P3-04 — Cost pages: add "How much does {svc} cost in KL?" DirectAnswer + expand 459-word bodies | ⏳ PENDING |
| P1 | P3-18 — llms.txt: list all 29 services (aircon missing) with units; link aeo-faq.txt | ⏳ PENDING |
| P1 | P3-09 — Owner verification of stats/claims (1,200+, 15+ Pros, 120+/120, 30–60 min, "written by local tradesmen") | ⏳ PENDING (owner) |
| P2 | P3-06 — Blog: FAQPage schema + promote top FAQ to question H2 (216 posts) | ⏳ PENDING |
| P2 | P3-12 — MS/ZH routes for kept pods (205 pages; i18n data already exists) | ⏳ PENDING |
| P2 | P3-15/P3-16/P3-17 — SearchAction vs /search; news-sitemap freshness; Applebot-Extended/DuckAssistBot | ⏳ PENDING |
| P2 | P3-10/P3-19/P3-13 — NAP in content block; link+expand aeo-faq.txt; hidden empty-state text | ⏳ PENDING |

---

### How to read

- **✅ DONE** — Saved to GitHub, audited, PR created & merged (where applicable).
- **⏳ PENDING** — Not yet started this session; this is the next work item.
- **🔎 IN PROGRESS** — Working on it now (temporary state; convert when finished).
