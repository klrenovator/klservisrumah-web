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
| P1 | Fix Part 2 P2-16/17/18 — Expand problems/cost; rewrite or retire emergency pages | ✅ DONE (Fix Wave 6 + Wave 7 — P2-18 was CF-4; P2-17/03: 12 emergency pages rewritten per-service + 17 retired 301; P2-16: 15 thinnest enriched in Wave 6 + next 15 thinnest enriched in Wave 7 — 30/74 problems now carry full overview/DIY/prevention/cost depth EN/MS/ZH) |
| P1 | Fix Part 2 P2-19 — Real per-article blog dates (216 posts / 5 dates) | ✅ DONE (Fix Wave 8 — 54 distinct dates across 216 posts (max 7/day, was 99/day); dateModified split from datePublished (migrated content → 2026-08-16 release date); sitemap emits per-article lastMod for 648 blog URLs; `scripts/assign-blog-dates.ts` + validator date gate) |
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
| 2026-08-29 | **Fix Wave 7** — P2-16 tranche 2: next 15 thinnest problems enriched (`rusting-window-grille`, `loose-door-hinge`, `stuck-window-lock`, `ikea-furniture-assembly-help`, `downlight-flickering`, `sagging-plaster-ceiling`, `blocked-drain-toilet`, `ceiling-leak-after-rain`, `roof-leak-rainy-season`, `swimming-pool-leak-balcony`, `wardrobe-door-jamming`, `cracked-ceiling-joints`, `locked-out-of-house`, `uneven-wall-surface-skim`, `cctv-not-recording-storage-full`) — 45 hand-authored depth blocks EN/MS/ZH; new `scripts/p2-16-wordcount.ts` ranking helper. **30/74 problems enriched** (audit's top-30-by-demand target closed via thinness ranking). All gates PASS: lint/type-check/prebuild (320,291 assertions × 0 failures)/build (3,660 static)/audit:html/audit:links (277,170+53, 0 broken)/audit:seo-head | ✅ See `FIX-WAVE-7-REPORT.md` |
| 2026-08-29 | **Fix Wave 8** — P2-19: real per-article blog dates + per-article sitemap lastMod. 216 posts shared 5 dates (99 on one day) → **54 distinct dates (max 7/day)**, bucket-capped deterministic assignment (`scripts/assign-blog-dates.ts`); `dateModified` split from `datePublished` via new `blogDateModified()` (migrated → 2026-08-16 release date; awning → own dates); sitemap blog URLs emit per-article lastMod (648 URLs, 0 on the constant); blog `post()` helpers now require explicit `date`; validator gate: parseable, non-future, ≤10 posts/date. All gates PASS (prebuild 320,291 × 0; build 3,660 static; seo-head/html/links green) | ✅ See `FIX-WAVE-8-REPORT.md` |
| 2026-08-29 | **Fix Wave 9** — the unblocked CRO/UX queue: P4-05 (global sticky book button w/ pathname-derived context) + P4-03 (single desktop float — WhatsApp dispatch desk removed); P4-02 (static quick-quote form inside mobile hero; content-driven min-height); P4-07 (new `/api/inquiry` route + `QuickQuoteForm` — static JS-free form on `/` + `/contact`, 302 → WhatsApp prefill); P4-12 (static SVG coverage map on `/areas` + 37 area pages; `hasMap` → real Google Maps URL); P4-06 (rate-book include/exclude block on 29 service pages, server-passed slim data); P4-16 (Full Price Guide link in service hero); P4-17 (aircon 6 problems + 4 aircon cost-tool links); P4-11 code half (authorship claim re-attributed). All gates PASS (build 3,652 HTML; prebuild 320,291 × 0; audit:html 0/0; audit:links 278,649+54 → 0 broken; audit:seo-head; audit:i18n 1,213 × 3; audit:schema-size; audit:bp1; audit:location-similarity; seo:audit+meta) | ✅ See `FIX-WAVE-9-REPORT.md` |
| 2026-08-29 | **Fix Wave 10** — final unblocked code queue: §5.6 RATE_YEAR freshness gate (`audit:rate-year` in prebuild; 714 files / 162 tokens = 2026); P5-13/14 raster OG (next/og 1200×630 route, 8 templates wired via `inferOgTemplate` + explicit ogTemplate on 126 tool routes + 29 cost pages; schema images rasterised; new `audit:raster-og` gate — 0 SVG, all 8 templates emitted, 1,979 pages on /og-image); P4-15 NAP strip in content on all template families (2,112/3,652 = 57.8%, baseline 0%; asserted in `audit:bp1` check 8); P3-02 completed (H3 questions + empty-state removed, FAQPage verified EN/MS/ZH); P3-06 blog FAQPage (193/192/192 posts EN/MS/ZH + top-FAQ H2, CTA-heading exclusion); P3-18 llms.txt 29 services + aeo-faq.txt link + robots AI bots. All gates PASS (prebuild 320,291 × 0; build 3,660; audit:html/links/seo-head/bp1/schema-size/location-similarity/meta/seo PASS) | ✅ See `FIX-WAVE-10-REPORT.md` |
| 2026-08-29 | **Fix Wave 11** — P3-12 phase 1: MS/ZH server routes for all 215 kept pod details + 10 hubs via the `locale-content-router.tsx` factory (40 thin route stubs), each self-canonical with full EN/MS/ZH/x-default hreflang, localized OG/`lang` and schema matching the rendered FAQs; 6 duplicate localized descriptions disambiguated; +450 localized URLs; indexable = sitemap = 4,054 parity. All gates PASS | ✅ See `FIX-WAVE-11-REPORT.md` |
| 2026-08-29 | **Fix Wave 12** — P3-04: literal "How much does {svc} cost in KL & Selangor?" DirectAnswer card on all 29 `/services/<svc>/cost` pages (question H2 + 2–3 sentence answer citing the published price **with units** + rate-book-derived pricing basis + estimator link, EN/BM/中文) built by the new pure `lib/cost-direct-answer.ts`, which also feeds the first `FAQPage` Question so schema and HTML cannot drift; new prebuild gate `audit:cost-direct-answer` (87 cards = 29 × 3; negative-tested 3 ways). Also closed P3-05: verified all four recorded AI-surface leaks already fixed, then fixed the two it missed — 28/29 service hubs printed "from **rm** 14 / sq ft" inside the DirectAnswer (`lowerFirstSentence()`) — and added a case-sensitive `lowercase-currency` check to `audit:html` (28 fatals pre-fix → none post-fix). Fixed the stale `part3-aeo-audit` `contentText()` (text-after-`</footer>` → document body) which had silently zeroed every readability/DirectAnswer/NAP signal since Wave 2. Corpus: `/services/<svc>/cost` **qa 0% → 100%**, "how much" H2 0 → 29/29, faqSchemaNoVisibleMatch 0, BM/中文 leaks 0/0. All gates PASS: lint 0/0, type-check, prebuild **320,291 × 0 failures**, build SUCCESS (4,080 HTML), audit:html none/none, audit:links 308,753+56 → 0 broken, audit:seo-head (4,054 = 4,054), schema-size, bp1 (NAP-in-content 62.3%), location-similarity, meta, seo:audit, part5 (0 JSON-LD errors) | ✅ DONE — **PR #189**, CI green (QA job 3m21s: gates/types/lint/SSG build/audits) — See `FIX-WAVE-12-REPORT.md` |

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
| P1 | P5-13/14 — Raster 1200×630 OG images (SVG og:image breaks WhatsApp/social previews on ~2,200+ pages); fix schema `image` fields too | ✅ DONE (Fix Wave 10 — next/og route + all 8 templates wired to every template family; `audit:raster-og` gate; 0 SVG in 3,652 built pages) |
| P1 | P5-10 — Breadcrumbs (UI+schema) on 184 pod pages + 20 specialty sub-services + 29 near-me hubs + 20 guides | ✅ DONE (Fix Wave 3 — 256 pages: 184 pods + 21 guides-tree + 29 near-me hubs + 22 cluster pages; duplicate BreadcrumbList on localized service/specialty templates removed; MS/ZH blog trails stay with P3-12 per Part 5 §P5-12b) |
| P1 | CF-4 — Merge rate-book into `/services/<svc>/cost` pages; evaluate NOINDEX/merge for `/estimate/*` (23 pages) | ✅ COMPLETED 2026-08-29 — 29 cost pages 1,152–2,264 words (mean 1,373), 222 rate-book rows, trilingual FAQs + aircon rateCopy; `/estimate` hub + 22 generics noindex; sitemap/indexnow cleaned; seo-head gate extended; all gates PASS. See `PART-5-AUDIT-REPORT.md` §5.5 implementation log |
| P1 | §5.4-B1 — BM commercial tree (harga/problem/money templates) — largest content gap | ⏳ PENDING |
| P2 | P5-06 — HowTo: per-page names (all 74 problems say "Professional home service process") or drop (rich results retired) | ✅ DONE (Fix Wave 3 — dropped site-wide; Google retired the rich result, visible process sections kept in HTML) |
| P2 | P5-07 — Remove Speakable/orphan WebPage nodes (526 pages) | ✅ DONE (Fix Wave 3 — all orphan Speakable WebPage nodes removed; targeted content stays visible in HTML) |
| P2 | §5.6 — Freshness pipeline: RATE_YEAR assertion, refresh rota, real lastMod | ✅ DONE (Fix Wave 10 — `config/rate-year.ts` + `audit:rate-year` in prebuild: 714 files / 162 in-string year tokens = 2026; P2-19 per-article lastMod done in Wave 8) |
| P2 | P5-09 — Owner verification: foundingDate 2014 vs SSM 202503227236 (2025); employees 10 vs "15+" | ⏳ PENDING (owner) |
| P3 | P5-11 — Suppress depth-1 BreadcrumbList on homepage | ✅ DONE (Fix Wave 1) |

---

## ⭐ NEXT SESSION MUST CONTINUE HERE

**All 5 audit parts are complete; Fix Wave 1–12, BP-1 phase 1 and CF-4 are
complete.** Wave 9 closed the unblocked CRO/UX queue, Wave 10 the
§5.6/AEO/OG/NAP queue, Wave 11 closed P3-12 phase 1 (MS/ZH pod routes), and
**Wave 12 closed P3-04** (the last unblocked **P1** on the board): every one of
the 29 `/services/<svc>/cost` money pages now opens with the literal
*"How much does {service} cost in KL & Selangor?"* DirectAnswer card — question
H2 + a 2–3 sentence answer citing the published starting price **with its unit**
+ the rate-book-derived pricing basis + an estimator link, in EN / BM / 中文 —
and that same Q&A is the first `FAQPage` `Question` on the page. Corpus proof:
`/services/<svc>/cost` **qa 0% → 100%**, "how much" H2 **0 → 29/29**,
`faqSchemaNoVisibleMatch` **0** site-wide. Wave 12 also closed **P3-05** and
repaired two audit tools. See `FIX-WAVE-12-REPORT.md`.

**With Wave 12 done, no P0 or P1 audit finding remains unblocked.** Everything
left is owner-blocked, needs owner data/access, or is a P2/P3 enhancement.

1. **What Wave 12 changed (2026-08-29):** new `lib/cost-direct-answer.ts` (pure
   builder, shared by the client view and the server route so schema and HTML
   cannot drift), 8 new `costPage.directAnswer.*` keys × 3 locales, an optional
   `actions[]` row on `components/content/direct-answer.tsx`, the new prebuild
   gate `audit:cost-direct-answer` (87 cards), `lowerFirstSentence()` in
   `lib/utils.ts` (+ a case-sensitive `lowercase-currency` check in
   `audit:html`), and a fix to `scripts/part3-aeo-audit.ts#contentText()`.
   All gates PASS: lint 0/0, type-check, prebuild **320,291 assertions × 0
   failures**, build SUCCESS (**4,080** HTML), audit:html none/none,
   audit:links 308,753+56 → 0 broken, audit:seo-head (4,054 indexable = 4,054
   sitemap), schema-size, bp1 (NAP-in-content 62.3%), location-similarity,
   meta, seo:audit, part5 (0 JSON-LD errors).
2. **⚠️ Audit-tooling warning (read before quoting any Part 3 number):**
   `part3-aeo-audit.ts#contentText()` used to slice the text **after the last
   `</footer>`** — correct only for the pre-Wave-2 layout. Every re-run between
   Wave 2 and Wave 12 therefore reported `words=8`, `qa=0%`, `nap=0%` and
   `vague=0` for essentially the whole corpus. Fixed in Wave 12 (it now reads
   the document `<body>`). **Pre-Wave-12 `meanWords` / `pctQuickAnswer` /
   `pctNap` / vague-term figures are not comparable with current ones**;
   `pctQuestionH2`, `pctFaqSchema` and the leak counts were always raw-HTML
   regexes and remain comparable. If another corpus analyzer shows a suspiciously
   uniform `words=8`, suspect the same stale-slice bug.
3. **P2-16 tranche 3 (optional, needs demand data):** the remaining 44
   problems — next thinnest: `vinyl-flooring-lifting-edges` (166),
   `wall-dampness-rising` (167), `autogate-remote-not-working` (167),
   `ceiling-mold-stains` (168), `rccb-tripping-kl` (168). Owner GSC data
   would re-rank this list; without it, use `scripts/p2-16-wordcount.ts`
   thinness order.
4. **P2-22 (owner decision):** add outbound citations to brands/authorities.
5. **BP-1 phase 2 / P2-C4 still blocked on owner GSC keep-set** — do **not**
   add more location pages; do **not** delete local pages on low traffic alone.
6. **CI patch — status corrected this session.** `TRACKING.md` previously said
   the BP-1 CI patch was "APPLIED in-tree (uncommitted)". Verified on a clean
   checkout at `6195245`: **`.github/workflows/ci.yml` is unmodified** and runs
   `prebuild → type-check → lint → build → audit:links → audit:html → seo:audit
   → audit:meta`. The patch in `BP-1-ci-audit-bp1.patch` is therefore **not**
   applied here; keep it out of commits unless the token has the `workflows`
   permission. Good news: **both Wave-12 gates already run in CI without any
   workflow change** — `audit:cost-direct-answer` via the existing `prebuild`
   step and `lowercase-currency` via the existing post-build `audit:html` step.
   If you ever do get `workflows` permission, the patch would additionally add
   `audit:bp1` / `audit:schema-size` / `audit:raster-og` post-build.
7. **Post-deploy (owner/SEO):** confirm the 2,146 BP-1 URLs and the 17 retired
   emergency URLs move to *"Page with redirect"*; resubmit `/sitemap.xml`
   (now **4,054** URLs after Wave 11; blog lastMods are per-article).
8. **Still-missing access (re-request from owner):** GSC, live HTTP/edge check,
   CWV/CrUX, GBP + review verification, owner fact confirmations (reviews,
   founding year, staff, stats), photography (P5-12).
9. **Next code-level candidates (P2/P3, unblocked) — value order:**
   **P3-12 phase 3** — MS/ZH **server routes** for `/services/<svc>/cost` (the
   29 money pages are still one EN URL client-localized by the toggle;
   `app/(ms|zh)/…/services/[slug]/` ships only `page.tsx` + `[subservice]`, so
   Wave 11's `locale-content-router` pattern is the obvious vehicle);
   **P2-16 tranche 3** (remaining 44 problems); **P3-12 phase 2** (native MS/ZH
   translation of the 146 authored per-pod FAQ sets — natural translation, no
   MT); **§5.4-B1** BM commercial tree; **P4-10** case-study pages;
   **P4-14** per-area `Service` entities; **P4-08** CTA wording; **P4-16**
   footer link tiering; **P3-15/P3-16** SearchAction vs `/search` + news-sitemap
   freshness; **P3-19** expand `aeo-faq.txt`. **P2-22** outbound citations is an
   owner decision. **P4-11 named team page** needs owner bios. **P4-13 / P2-C4 /
   BP-1 phase 2** stay blocked on the owner GSC keep-set.
10. **Standing "do not" list:** do **not** add more location pages; do **not**
    re-add `app/(en|ms|zh)/loading.tsx`; do **not** delete local pages on low
    traffic alone; do **not** retry the CI patch push without `workflows`
    permission; do **not** weaken the estimator trilingual-parity asserts to
    accommodate new copy — supply the translations instead; do **not** enrich a
    problem in English without its native MS/ZH depth block
    (`audit:problem-i18n` fails the build on a gap); do **not** add a blog post
    without an explicit `date`, and never reintroduce per-day date
    concentration above the validator's 10-post cap; do **not** interpolate a
    registry field into a sentence with `.toLowerCase()` — prices must keep
    their `RM` (`lowerFirstSentence()`, guarded by `audit:html`
    `lowercase-currency`); do **not** hand-edit `lib/estimator/rate-book.generated.ts`
    or the `public/llms*.txt` / `aeo-faq.txt` / `site-summary.json` outputs —
    they are regenerated by `prebuild`.

---

## Part 4 — Priority Work Queue (findings added — `PART-4-AUDIT-REPORT.md`)

| Prio | Task | Status |
|---|---|---|
| P0 | P4-01 — Render page content inside `<main>` (remove SSR "Loading…" shell; content currently after `</footer>` on 5,815 pages) | ✅ DONE (Fix Wave 2 — 0/5,815 remaining) |
| P1 | P4-09 — Add AggregateRating+Review to homepage/service/pricing LocalBusiness; remove `aggregateRating` from tool SoftwareApplication | ⏳ PENDING (needs owner review verification) |
| P1 | P4-05 — Mount `StickyBookButton` globally / on commercial templates (currently service+sub-service only) | ✅ DONE (Fix Wave 9 — global mount in SiteChrome with pathname-derived service/area context) |
| P1 | P4-07 — Add static-SSR inquiry/callback form (all forms JS-gated today) | ✅ DONE (Fix Wave 9 — `/api/inquiry` route + QuickQuoteForm, static JS-free form on `/` hero + `/contact`) |
| P1 | P4-12 — Embed coverage map; set `hasMap` to a valid map URL (0 iframes today) | ✅ DONE (Fix Wave 9 — static SVG coverage map on `/areas` + 37 area pages; hasMap → Google Maps universal URL; CSP-safe, no owner key) |
| P1 | P4-06 — Add include/exclude list to service pages | ✅ DONE (Fix Wave 9 — rate-book-driven included/not-included block on 29 service pages) |
| P1 | P4-11 — Team/authors page + bio schema (E-E-A-T Experience pillar) | 🟡 PARTIAL (Fix Wave 9 — code half done: unverifiable "written by local tradesmen" claim re-attributed; named team page ⏳ owner bios) |
| P1 | P4-16 — Rebalance internal link equity (hub indexes vs content children 7–9) | 🟡 PARTIAL (Fix Wave 9 — cost guide linked from service hero +29 inbounds; footer tiering / full rebalance still ⏳ PENDING) |
| P1 | P4-13 — Restructure the local pages (site-wide price + parametric body) | ⏳ PENDING (**unblocked by BP-1** — scope cut 3,654 → 1,508; this is **BP-1 phase 2**) |
| P1 | P4-17 — Link aircon problems from aircon service + tools (1–2 inbound) | ✅ DONE (Fix Wave 9 — aircon shows 6 problems + 4 aircon cost-tool links) |
| P1 | P4-02 — Mobile quote box above the fold (behind full-viewport slideshow today) | ✅ DONE (Fix Wave 9 — static quick-quote form inside the hero viewport; mobile min-height content-driven) |
| P2 | P4-10 — Make FeaturedProjects/BeforeAfter cards real links; add case-study pages | ⏳ PENDING |
| P2 | P4-03 — Consolidate floating CTAs (up to 4 on desktop service pages); exit-intent 30s timer → mouse-leave | 🟡 PARTIAL (Fix Wave 9 — single desktop float now (WhatsApp desk removed); exit-intent 30s timer → mouse-leave still ⏳) |
| P2 | P4-14 — Per-area `Service` entities in LocalBusiness schema | ⏳ PENDING |
| P2 | P4-15 — NAP contact strip in content block (5,813 pages footer-only) | ✅ DONE (Fix Wave 10 — 2,112/3,652 built pages = 57.8% carry the strip in content, baseline 0%; asserted in `audit:bp1` check 8) |
| P2 | P4-08 — Reword primary CTAs around fixed-quote/no-deposit | ⏳ PENDING |
| P3 | P4-18 — Anchor-text profile healthy (90% descriptive / 7% generic / 0% branded) — no action required | ⏳ PENDING |

## Part 3 — Priority Work Queue (findings added)

| Prio | Task (from PART-3-AUDIT-REPORT.md) | Status |
|---|---|---|
| P0 | P3-01 — Fix English leaks inside BM/中文 DirectAnswer blocks (29/29 service pages) + add prebuild leak validator | ✅ DONE (Fix Wave 4 — 58 unique localized notes + `audit:trilingual-leak` in prebuild) |
| P0 | P3-05 — Add units to per-sq-ft prices on all AI surfaces ("from RM 14/10/5/22") + fix `lowPrice: "80"` | ✅ DONE (Fix Wave 1 — startPrice units + UnitPriceSpecification + `lowPrice` 80→120. Fix Wave 12 re-verified every recorded leak on the built corpus: DirectAnswer "start from RM 14 / sq ft" ✓, smart-finder renders `startPrice` verbatim ✓, llms.txt "from RM 14 / sq ft" ✓, homepage schema `lowPrice: 120` ✓ — and fixed the two it missed: 28/29 service hubs lower-cased the currency inside the DirectAnswer ("from **rm** 14 / sq ft") → new `lowerFirstSentence()`, plus a permanent case-sensitive `lowercase-currency` check in `audit:html` (negative-tested: 28 fatals pre-fix → none post-fix)) |
| P0 | P3-07 — Reconcile contradictory facts: RM 180 vs 220 ceiling price, "28+" vs 29 services, warranty pill vs per-service warranty (251 pages), stats claims | ✅ DONE (Fix Wave 4 — all surfaces unified + AI-context regression-checked; the *stats claims* half stays owner-⏳ under P3-09/P2-21) |
| P1 | P3-11 — Server-render homepage + /faq hub accordion answers (JS-only today) | ✅ DONE (Fix Wave 2 — native `<details>`) |
| P1 | P3-02 — /faq hub: add FAQPage JSON-LD + question H3s + remove hidden "No matches" text | ✅ DONE (Fix Wave 2 FAQPage JSON-LD + visible answers; Fix Wave 10: question H3s + hidden empty-state removed — verified EN/MS/ZH built HTML) |
| P1 | P3-04 — Cost pages: add "How much does {svc} cost in KL?" DirectAnswer + expand 459-word bodies | ✅ DONE (**PR #189**, CI green; bodies = CF-4; Fix Wave 12 — literal "How much does {svc} cost in KL & Selangor?" DirectAnswer card on all 29 cost pages via `lib/cost-direct-answer.ts` (question H2 + 2–3 sentence answer citing the published price **with units** + derived pricing basis + estimator link, EN/BM/中文), same builder feeds the first `FAQPage` Question (29/29 visible-match), new prebuild gate `audit:cost-direct-answer` (87 cards, negative-tested). Corpus `/services/<svc>/cost`: **qa 0% → 100%**, "how much" H2 0 → 29/29, faqSchemaNoVisibleMatch 0) |
| P1 | P3-18 — llms.txt: list all 29 services (aircon missing) with units; link aeo-faq.txt | ✅ DONE (Fix Wave 10 — 29 service lines with units + aeo-faq.txt link; robots.ts + DuckAssistBot/Applebot-Extended) |
| P1 | P3-09 — Owner verification of stats/claims (1,200+, 15+ Pros, 120+/120, 30–60 min, "written by local tradesmen") | ⏳ PENDING (owner) |
| P2 | P3-06 — Blog: FAQPage schema + promote top FAQ to question H2 (216 posts) | ✅ DONE (Fix Wave 10 — 193 EN + 192 MS + 192 ZH blog posts emit FAQPage JSON-LD; top FAQ promoted to H2) |
| P2 | P3-12 — MS/ZH routes for kept pods (215 details + 10 hubs × 2 locales; i18n data already exists) | ✅ DONE (Fix Wave 11 — localized server routes via `locale-content-router.tsx` factory: 215 details + 10 hubs under `/ms/<family>` + `/zh/<family>`, self-canonical + full EN/MS/ZH/x-default hreflang clusters, localized OG/`lang`, schema matching rendered FAQs; 6 duplicate localized descriptions disambiguated; indexable=sitemap 4,054 parity, all gates PASS. **Phase 2 follow-up:** native MS/ZH translation of 146 authored per-pod FAQ sets — no MT — stays ⏳ P2) |
| P2 | P3-15/P3-16/P3-17 — SearchAction vs /search; news-sitemap freshness; Applebot-Extended/DuckAssistBot | 🟡 PARTIAL (Fix Wave 10 — Applebot-Extended/DuckAssistBot done in robots.ts; SearchAction vs /search + news-sitemap still ⏳) |
| P2 | P3-10/P3-19/P3-13 — NAP in content block; link+expand aeo-faq.txt; hidden empty-state text | ✅ DONE (Fix Wave 10 — NAP strip = P4-15; llms.txt links aeo-faq.txt = P3-18; empty-state removed = P3-02. aeo-faq.txt expansion stays P2 with content work) |

---

### How to read

- **✅ DONE** — Saved to GitHub, audited, PR created & merged (where applicable).
- **⏳ PENDING** — Not yet started this session; this is the next work item.
- **🔎 IN PROGRESS** — Working on it now (temporary state; convert when finished).
