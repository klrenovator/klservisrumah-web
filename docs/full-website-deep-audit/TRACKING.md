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
| P0 | Fix Part 2 P2-C3 — 174 generic "content pod" pages (commercial/residential/process/answers/brands/top/seasonal/guides) | ✅ DONE (Wave 4 batch 1: 58 commercial+residential pods; Wave 5 batch 2: 88 brands+compare+guides+maintenance+seasonal+top pods — all 146/174 hand-authored; process+answers carry real service data) |
| P0 | Fix Part 2 P2-C4 — Replace pair-copy generator; authored local copy for area×service | ⏳ PENDING |
| P1 | Fix Part 2 P2-16/17/18 — Expand problems/cost; rewrite or retire emergency pages | ✅ DONE (Fix Wave 6 — P2-18 was CF-4; P2-17/03: 12 emergency pages rewritten per-service + 17 retired 301; P2-16: 15 thinnest problems enriched EN/MS/ZH) |
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
| 2026-08-29 | **Fix Wave 4** — P3-01 trilingual DirectAnswer + leak gate · P3-07 fact reconciliation (code half of P3-14) · P2-C3 batch 1: 58 commercial+residential pods hand-authored + `audit:content-pods` gate | ✅ See `FIX-WAVE-4-REPORT.md` |
| 2026-08-29 | **Fix Wave 5** — P2-C3 batch 2: 88 remaining pod pages hand-authored (brands 32, compare 18, guides 10, maintenance 10, seasonal 8, top 10) — unique intros, 4 topic-specific bullets, 4 AEO FAQs each + 263 MS/ZH bullet translations; all gates PASS (320,291 assertions × 0 failures) | ✅ DONE (PR #182 merged) — See `FIX-WAVE-5-REPORT.md` |
| 2026-08-28 | **BP-1 phase 1** — Part 1 Critical #1/#2: 1,073 `/areas/*/*/near-me` + 1,073 `/suburbs/<twin>/*` retired to 301s; SSG stopped; sitemap 4,739→3,666; HTML 5,815→3,669; near-me Q&A absorbed into parent (FAQPage 3→6); new `audit:bp1` gate + `gen:bp1-map` | ✅ See `BP-1-PHASE-1-REPORT.md` |
| 2026-08-28 | **Fix Wave 3** — P5-04 (@id-reference org architecture: full node homepage-only, GeoCircle areaServed, catalog dedup on 1,508 local + 773 variant pages, /pricing −95%, tools hubs −19 KB each; corpus JSON-LD 62.2→14.5 MB, City nodes 220,616→95) + P5-06 (HowTo retired) + P5-07 (Speakable orphans) + P5-10 (+256 breadcrumbed pages) + new `audit:schema-size` gate (≤8 KB non-FAQ ceiling enforced) | ✅ See `FIX-WAVE-3-REPORT.md` |
| 2026-08-29 | **CF-4** — cost pages → canonical rate-book "harga" guides (29 pages: 222 rate-book rows, market baselines, worked example, methodology, measurement guide, localized job process + FAQs; words 543→1,373 mean, all ≥1,000) + `/estimate` hub & 22 generics NOINDEX (sitemap −23, IndexNow −23, seo-head gate extended) + aircon rateCopy 7×3 + `&#x27;` cleanText fix (part5 FAQ false positives 5→0) | ✅ See `PART-5-AUDIT-REPORT.md` §5.5 implementation log |
| 2026-08-29 | **Fix Wave 6** — P2-17/P2-03: emergency pages rewritten per-service for the 12 real-emergency services (`config/emergency-services.ts`, EN/MS/ZH) and the 17 fake-emergency pages retired via middleware 301 + `generateStaticParams` + sitemap + cost-card gate (sitemap 3,643→3,626). P2-16: 15 thinnest problem pages enriched with `overview`/`diyChecks`/`prevention`/`costDetail` (EN/MS/ZH, native) + `audit:problem-i18n` extended to enforce native depth parity. All gates PASS (3,652 HTML; 320,291 assertions × 0 failures) | ✅ See `FIX-WAVE-6-REPORT.md` |

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
| P1 | CF-4 — Merge rate-book into `/services/<svc>/cost` pages; evaluate NOINDEX/merge for `/estimate/*` (23 pages) | ✅ COMPLETED 2026-08-29 — 29 cost pages 1,152–2,264 words (mean 1,373), 222 rate-book rows, trilingual FAQs + aircon rateCopy; `/estimate` hub + 22 generics noindex; sitemap/indexnow cleaned; seo-head gate extended; all gates PASS. See `PART-5-AUDIT-REPORT.md` §5.5 implementation log |
| P1 | §5.4-B1 — BM commercial tree (harga/problem/money templates) — largest content gap | ⏳ PENDING |
| P2 | P5-06 — HowTo: per-page names (all 74 problems say "Professional home service process") or drop (rich results retired) | ✅ DONE (Fix Wave 3 — dropped site-wide; Google retired the rich result, visible process sections kept in HTML) |
| P2 | P5-07 — Remove Speakable/orphan WebPage nodes (526 pages) | ✅ DONE (Fix Wave 3 — all orphan Speakable WebPage nodes removed; targeted content stays visible in HTML) |
| P2 | §5.6 — Freshness pipeline: RATE_YEAR assertion, refresh rota, real lastMod | ⏳ PENDING |
| P2 | P5-09 — Owner verification: foundingDate 2014 vs SSM 202503227236 (2025); employees 10 vs "15+" | ⏳ PENDING (owner) |
| P3 | P5-11 — Suppress depth-1 BreadcrumbList on homepage | ✅ DONE (Fix Wave 1) |

---

## ⭐ NEXT SESSION MUST CONTINUE HERE

**All 5 audit parts are complete; Fix Wave 1–6, BP-1 phase 1 and CF-4 are
complete.** Fix Wave 6 (this session) closed the last unblocked Part 2 queue:
**P2-17/P2-03** (12 real-emergency pages rewritten per-service; 17 fake
emergencies retired 301) and **P2-16 first tranche** (15 thinnest problem
pages enriched EN/MS/ZH). See `FIX-WAVE-6-REPORT.md`.

1. **P2-16 remainder (unblocked, next candidate):** extend the enrichment to
   the rest of the **top-30 problems by demand** — the audit's stated 700+ word
   target. The 15 thinnest are done; ranking the next 15 needs the owner's GSC
   query data (same blocker as BP-1 phase 2). Without GSC, fall back to
   urgency-weighted service prominence and say so in the report.
2. **P2-19 (unblocked, independent):** real per-article blog dates +
   per-article sitemap `lastMod` — 216 posts currently share 5 dates.
3. **P2-22 (owner decision):** add outbound citations to brands/authorities.
4. **BP-1 phase 2 / P2-C4 still blocked on owner GSC keep-set** — do **not**
   add more location pages; do **not** delete local pages on low traffic alone.
5. **CI patch still unapplied:** `git apply docs/full-website-deep-audit/BP-1-ci-audit-bp1.patch`
   adds `audit:bp1` + `audit:schema-size` as post-build CI steps. The GitHub
   App token still lacks the `workflows` permission — retry on any session
   whose token has it, or apply from an owner account. Source-level BP-1 half
   already runs in CI via `prebuild`.
6. **Post-deploy (owner/SEO):** confirm the 2,146 BP-1 URLs and the 17 retired
   emergency URLs move to *"Page with redirect"*; resubmit `/sitemap.xml`
   (3,626 URLs).
7. **Still-missing access (re-request from owner):** GSC, live HTTP/edge check,
   CWV/CrUX, GBP + review verification, owner fact confirmations (reviews,
   founding year, staff, stats), photography (P5-12).

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
| P0 | P3-01 — Fix English leaks inside BM/中文 DirectAnswer blocks (29/29 service pages) + add prebuild leak validator | ✅ DONE (Fix Wave 4 — 58 unique localized notes + `audit:trilingual-leak` in prebuild) |
| P0 | P3-05 — Add units to per-sq-ft prices on all AI surfaces ("from RM 14/10/5/22") + fix `lowPrice: "80"` | 🟡 PARTIAL (Fix Wave 1 — startPrice units + schema UnitPriceSpecification + homepage lowPrice fixed; remaining AI-surface copy leaks still ⏳) |
| P0 | P3-07 — Reconcile contradictory facts: RM 180 vs 220 ceiling price, "28+" vs 29 services, warranty pill vs per-service warranty (251 pages), stats claims | ✅ DONE (Fix Wave 4 — all surfaces unified + AI-context regression-checked; the *stats claims* half stays owner-⏳ under P3-09/P2-21) |
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
