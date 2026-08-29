# PART 5 — SCHEMA + CONTENT GAP + PRIORITY ROADMAP (+ CUMULATIVE FINAL OUTPUT A–N)

**Audit date:** 2026-08-28
**Website:** https://klservisrumah.my (canonical host: https://www.klservisrumah.my)
**Framework:** Next.js 15 (App Router) hybrid SSG, Vercel CDN
**Scope of this report:** **Part 5** (Structured Data/Schema, Breadcrumbs, Image SEO, Content Gap Analysis, Keyword Cannibalization, Content Decay, Brand/Entity Content) **plus the cumulative Final Output A–N** consolidating Parts 1–4 (`PART-1..4-AUDIT-REPORT.md`, PRs #170/#171/#173/#174).

---

## EVIDENCE BASIS & METHODOLOGY

Corpus-wide, not sampled. A purpose-built analyzer (`scripts/part5-audit.ts`) was run against the production build's **5,815 rendered HTML pages** (`.next/server/app`; build verified green this session — `BUILD_EXIT=0`, 5,823 routes, 5,815 `.html` files: EN 4,633 / MS 591 / ZH 591). Per page it parses **every** `<script type="application/ld+json">` block (flattening `@graph` and nested nodes), inventories every `@type`, measures breadcrumb UI + schema, inventories every `<img>` (alt, dimensions, lazy, format, global src reuse), and captures `<title>`/`<h1>`/canonical/robots for cannibalization analysis.

Outputs committed alongside this report: `docs/audit-part5-corpus.jsonl` (5,815 records), `docs/audit-part5-schema.json`, `docs/audit-part5-images.json`, `docs/audit-part5-cannibalization.json`.

Anything requiring Search Console, live Rich Results testing, competitor crawls, traffic/ranking data, or owner confirmation is labelled **REQUIRES VERIFICATION**. Competitor-topic claims in §5.4 cite public web sources fetched this session.

**Headline:** the schema layer is *mechanically* excellent — **0 JSON-LD parse errors in 34,000+ blocks**, 0 duplicate-FAQPage pages, disciplined canonical/robots — but it is *semantically* over-emitted and under-truthful: two competing business entities on every page, ~1,131 pages carrying FAQPage markup whose Q&As are not in the server-rendered visible HTML, the business's 4.9★/120 AggregateRating attached only to calculator SoftwareApplication nodes (and nowhere a user actually sees reviews), ~22–31 KB of JSON-LD per page dominated by 610,656 repeated `City` nodes, and — the single most damning Part 5 number — **only 37 distinct images across 5,815 pages of a visual-trades business, none of them a real project photo.**

---

## THE KEY NUMBERS (corpus-wide, VERIFIED)

| Metric | Value |
|---|---|
| Rendered pages analyzed | **5,815** (EN 4,633 / MS 591 / ZH 591) |
| JSON-LD blocks parse-valid | **100%** (0 parse errors) |
| Mean JSON-LD blocks per page | 5–9 |
| JSON-LD payload per page (samples) | home **31 KB** (5.9% of HTML), service hub **28 KB** (11.6%), area×service **22 KB** (11.6%), near-me **22 KB** (**14.1%**) |
| `City` nodes in corpus | **610,656** (≈105 per page — areaServed repeated in 3 business/service nodes/page) |
| `Brand` nodes / `Thing` (knowsAbout) nodes | **191,862 / 162,792** |
| Pages with BOTH `LocalBusiness` and `HomeAndConstructionBusiness` top-level business nodes | **5,814 / 5,815 (100%)** |
| EN pages with FAQPage schema whose Q1 is NOT in rendered visible text | **1,137** (1,073 near-me + 29 cost + 29 emergency + homepage + 5 others) |
| AggregateRating nodes | **126** — all on tool `SoftwareApplication` (42 tools × 3 locales); **0** on homepage/services/pricing where reviews are shown |
| `Review` schema nodes | **0** sitewide (4 testimonials displayed on homepage) |
| HowTo nodes | 908 — all 74 problem pages share the literal name **"Professional home service process"** |
| Speakable nodes | 526 (non-news site) |
| BreadcrumbList coverage (EN) | 100% on core trees; **0%** on 184 pod pages + 20 specialty sub-services + 29/30 near-me hubs + 20/21 guides; homepage emits a **depth-1 "Home"-only** trail |
| MS/ZH FAQPage / BreadcrumbList coverage | **62.3% / 62.8%** (vs ~100% EN core) |
| Distinct images sitewide | **37** (1 logo, 21 SVG placeholders, 15 stock-style hero JPGs, 12 tool WebPs) |
| Real project photographs | **0** |
| `<img>` alt coverage | **100%** (0 missing, 0 empty) |
| og:image pointing at an **SVG** | all 29 service hubs, 1,073 area×service, 1,073 near-me, most tools & many blogs (SVG unsupported by FB/WhatsApp/X previews) |
| Duplicate `<title>` (EN indexable) | **0** |
| Duplicate `<h1>` groups (EN indexable incl. canonicalised twins) | 1,101 |
| Duplicate `<h1>` groups among **self-canonical** EN pages | **28** (26 = blog ↔ sub-service twins) |
| Suburbs tree | builds **1,508** pages; only **435** self-canonical; **1,073** fully-rendered canonicalised duplicates of `/areas/...` |
| Blog schema dates | 216 posts → **8 distinct** `datePublished`; `dateModified == datePublished` on **216/216** |
| Blog `author` | `Person: "KL Servis Rumah Editorial Team"` on every post (an organization typed as a Person) |

---

# 5.1 STRUCTURED DATA / SCHEMA

**What is genuinely right (VERIFIED):** 0 parse errors across the corpus; exactly one FAQPage node max per page (no duplicate-FAQPage spam); BreadcrumbList JSON-LD and the visible trail are generated from the same component so they can't drift; Service/Offer schema honestly emits "quotation on request" instead of a fake price for on-quote services (awning); `taxID` deliberately withheld per owner rule; blog dates are normalized to ISO before emission; canonicals are 100% self-referencing on every kept template and 100% cross-referencing on the 1,073 suburb twins.

### P5-01 — HIGH: Two competing business entities on every page (`#organization` + `#localbusiness`), and internal references split between them.
- **Problem:** `components/layout/site-head.tsx` injects BOTH `getOrganizationSchema()` (`@type: HomeAndConstructionBusiness`, `@id: /#organization`) AND `getLocalBusinessSchema()` (`@type: LocalBusiness`, `@id: /#localbusiness`) on all pages. Both carry name, URL, telephone, priceRange, full PostalAddress, geo, openingHours and the full 37-city + GeoCircle areaServed — two parallel business entities describing one business. Worse, references are split: `getServiceSchema()` providers point at `/#organization`, while all 43 estimator tools (`lib/estimator/schema.ts` `LOCAL_BUSINESS_ID`) point at `/#localbusiness`.
- **Evidence (VERIFIED):** corpus `pctBizEntityDup = 100%` on every pattern; global counts LocalBusiness 5,814 + HomeAndConstructionBusiness 6,596; `lib/estimator/schema.ts:21`.
- **Affected:** all 5,815 pages. **Severity: HIGH (Entity SEO / Knowledge Graph).**
- **Why it matters:** knowledge-graph builders (Google, Bing, LLM retrievers) must guess whether this is one entity or two; signals (reviews, sameAs, service links) split across two IDs; `HomeAndConstructionBusiness` *is already a subtype of LocalBusiness*, so the second node adds zero information and pure ambiguity.
- **Fix:** delete `getLocalBusinessSchema()` from site-head; keep the single `HomeAndConstructionBusiness` node at `/#organization`; repoint `LOCAL_BUSINESS_ID` to `/#organization`. **Priority: P1. Difficulty: Low (1 file + 1 constant).**

### P5-02 — HIGH: FAQPage markup for content that is not in the server-rendered visible page on ~1,131 pages.
- **Problem:** FAQPage JSON-LD is emitted for FAQs that exist only in the client-side JS payload (never in rendered DOM text). Google's FAQ guideline requires the marked-up content to be **visible on the page**.
- **Evidence (VERIFIED):** analyzer compares each page's first `Question.name` to the script-stripped visible text: no match on **1,073** `/areas/<a>/<svc>/near-me` pages (e.g. `/areas/ampang/painting/near-me` — Q "Is House Painting Services available near me in Ampang?" exists in the RSC/JS payload but not in rendered text), **29** `/services/<svc>/cost`, **29** `/services/<svc>/emergency`, and the **homepage** (6 questions; accordion JS-only — confirms Part 3 P3-11).
- **Affected:** ~1,131 EN pages + locale equivalents. **Severity: HIGH** (policy/manual-action exposure + rich-result ineligibility + AI extractors see schema claiming content the page doesn't show).
- **Fix:** server-render the FAQ Q&As on these templates (visible, or at minimum expanded-by-default `<details>`); where the template genuinely can't show them, remove the FAQPage block. **Priority: P0** (it's a compliance issue, not a nice-to-have).

### P5-03 — HIGH: AggregateRating is attached to the wrong thing, and Review markup is absent where reviews are shown.
- **Problem (three-way inversion):** (a) the business's 4.9★/120 rating is emitted **only** as `aggregateRating` of the calculator `SoftwareApplication` nodes — a rating of *the business* presented as a rating of *the software*, with no visible rating UI on tool pages (schema/content mismatch, and app ratings are self-serving here); (b) the homepage *visibly* shows "4.9 ★ Based on 120+ reviews" + 4 testimonials but carries **no** AggregateRating/Review markup; (c) `getReviewSchema()` in `lib/seo.ts` — unused, thankfully — wraps reviews in a fabricated `Product` with `sku: "klsr-reviews"` and an invented `price: "80.00"` Offer; if ever mounted it would be textbook review-markup abuse.
- **Evidence (VERIFIED):** 126 AggregateRating nodes, all under `SoftwareApplication+WebApplication` (`lib/estimator/schema.ts:67`); 0 Review nodes corpus-wide; `google-reviews.tsx` renders 4 hardcoded testimonials.
- **Severity: HIGH.** Google explicitly warns against LocalBusiness self-serving aggregateRating too — the correct home for ratings is **Google Business Profile**, with on-page Review markup only for genuinely displayed, verifiable third-party-sourced reviews.
- **Fix:** remove `aggregateRating` from the tool schema; delete `getReviewSchema()`; after owner verifies the 120-review claim (REQUIRES VERIFICATION — carried from P2-21/P4-09), either display real reviews with compliant markup or drop the "120+" claim. **Priority: P1.**

### P5-04 — MEDIUM: JSON-LD bloat — 610,656 `City` nodes; 22–31 KB of schema per page (up to 14% of HTML).
- **Problem:** every page repeats the full 37-city `areaServed` (with `containedInPlace` Country) in up to 3 nodes (Organization, LocalBusiness, Service), the 33-entry `brand` list, and the 26-entry `knowsAbout` list.
- **Evidence (VERIFIED):** global type counts City 610,656 / Country 610,610 / Brand 191,862 / Thing 162,792; measured payloads: `/` 31 KB (5.9%), `/services/painting` 28 KB (11.6%), `/areas/ampang/painting` 22 KB (11.6%), `.../near-me` 22 KB (14.1%). Across 5,815 pages ≈ **125+ MB** of built schema.
- **Why it matters:** wasted bytes on every mobile load (CWV), wasted crawl budget, diluted signal-to-noise for parsers; sub-pages need a **reference** to the org, not a full copy.
- **Fix:** emit the full Organization node on the homepage (or about) only; everywhere else reference `{"@id": "/#organization"}`; keep per-page areaServed to the page's own area (area/suburb pages) or the GeoCircle alone. **Priority: P1 (pairs with P5-01).**

### P5-05 — MEDIUM: Blog `author` is an organization typed as `Person`, on all 216 posts (×3 locales).
- **Evidence (VERIFIED):** every BlogPosting: `author: { "@type": "Person", "name": "KL Servis Rumah Editorial Team" }`; 642 Person nodes corpus-wide, all this one string; `lib/seo.ts:391` falls back to `siteConfig.name` as a Person.
- **Why:** an "Editorial Team" is an `Organization`; typing it Person is invalid and forfeits the E-E-A-T value real author entities would carry (no author pages, no `sameAs`, no credentials — see P2-C6/P4-11).
- **Fix:** short-term: `author: { "@type": "Organization", name: … }`. Real fix: named human authors with bio pages + `Person` schema with `url`/`sameAs`/`jobTitle`. **Priority: P1 (short-term is a 1-line change).**

### P5-06 — MEDIUM: HowTo markup is deprecated, generic, and mis-named at scale.
- **Evidence (VERIFIED):** 908 HowTo nodes; all 74 problem pages emit `name: "Professional home service process"` regardless of the actual problem ("How to fix a ceiling water stain" ≠ "Professional home service process"); also on 29 service hubs, 29 process pods, 42 tools ("How to use the {tool}").
- **Why:** Google **retired HowTo rich results (2023)** — the markup earns nothing in Google; a generic name that doesn't match page content is noise for other consumers.
- **Fix:** either drop HowTo, or (cheap) keep it but name each node after the page's actual task (`How to fix {problem} in KL`). **Priority: P2.**

### P5-07 — LOW/MEDIUM: `Speakable` markup on 526 non-news pages, emitted as orphan `WebPage` nodes.
- **Evidence:** `getSpeakableSchema()` returns a standalone `WebPage` with only `speakable` (no `@id`, `name`, `url`) — 526 stray WebPage entities. Speakable is a Google **news-only** beta.
- **Fix:** remove, or merge `speakable` into a single proper WebPage node per page. **Priority: P3.**

### P5-08 — MEDIUM: Offer/price schema quality (carried + new evidence).
- Unit-less per-sq-ft prices emitted as absolute prices: Offer `price: "14"` (flooring RM 14/sq ft), `"10"`, `"22"` on 690–1,103 pages each (top offer prices measured: 220×1,232, 14×1,103, 2200×1,097, 180×1,086 …) — a structured claim that flooring costs *RM 14* — confirms/extends P3-05. **Fix:** `UnitPriceSpecification` with `unitText: "per sq ft"` (or `referenceQuantity`), and units in the visible copy.
- `priceValidUntil: 2027-12-31` exists on only 218 pages (service-hub Offers); the other ~40,000 Offers have none — fine, but inconsistent.
- OfferCatalog names ("published 2026 rates") will silently decay — see §5.6.
- **Priority: P0 for the unit-less prices (misleading), P3 for the rest.**

### P5-09 — LOW: Organization facts needing correction/verification.
- `foundingDate: "2014"` vs `ssmFull: "202503227236 (003765188-T)"` — the SSM new-format prefix encodes **2025** registration. Either the business predates its current registration (state "operating since 2014, registered 2025") or the foundingDate is wrong. **REQUIRES VERIFICATION (owner).**
- `numberOfEmployees: 10` vs visible "15+ Pros" (P2-23); `knowsAbout` stale vs 29-service catalog (P2-27); `hasMap` is a `share.google` short-link (P4-12).
- **Fix:** single source-of-truth pass on `config/site.ts` after owner confirms facts. **Priority: P1 (blocked on owner).**

### Missing schema that WOULD represent visible content (do-add list)
| Missing | Where it's visible today | Add |
|---|---|---|
| FAQPage on `/faq` hub | 80+ Q&As (JS accordion — must be SSR'd first, P3-02) | FAQPage after SSR fix |
| FAQPage on blog posts | 216 posts render real FAQ sections | FAQPage (P3-06) |
| Review + AggregateRating on homepage | 4 testimonials + "120+" badge shown | only after owner verification (P2-21) |
| `ImageObject`/`primaryImageOfPage` for real photos | — none exist yet | after photography project (P5-12) |
| `Person` authors with bios | — | after team/authors page (P4-11) |
| `CollectionPage`/`ItemList` on hub indexes | services/areas/blog/tools hubs | present on only 15/16 pages — extend |

**Explicitly NOT recommended** (schema-for-schema's-sake): VideoObject (no videos), Event, JobPosting, SiteNavigationElement, per-area LocalBusiness branches (correctly avoided already — the single-location modelling in `getLocalBusinessServiceSchema()` is right).

---

# 5.2 BREADCRUMBS

**Right:** one component (`components/ui/breadcrumbs.tsx`) renders visible trail + BreadcrumbList together (no drift); trails are Home-anchored by construction; depth mirrors URL hierarchy on core trees; 100% coverage on services/areas/suburbs/blog/problems/tools/estimate.

### P5-10 — MEDIUM: Breadcrumb coverage holes exactly where orientation is weakest.
- **Evidence (VERIFIED, corpus):** **0%** breadcrumb (UI + schema) on all 8 content-pod families' children — answers 29, brands 32, commercial 29, compare 18, process 29, residential 29, seasonal 8, top 10 (**184 pages**); 20/21 `guides/*`; **29/30** `/near-me/<svc>` hubs; **20** specialty sub-service pages (`/services/aircon/1hp-aircon-installation-kl` etc.); `/privacy`, `/terms` (UI only, no schema — acceptable).
- **Why:** these are precisely the templates Parts 2–3 flagged as doorway-risk; breadcrumbs are their cheapest hierarchy/context signal, for users and for SERP display.
- **Fix:** mount `<Breadcrumbs>` in the pod/guides/near-me/specialty templates (Home → Section → Page). **Priority: P1 (trivial dev cost).** *Note:* if pods are collapsed per P2-C3, fix only survivors.

### P5-11 — LOW: Homepage emits a depth-1 BreadcrumbList ("Home" only).
- **Evidence:** homepage `breadcrumbDepth=1`, first=last="Home". A single-item trail on the root is meaningless markup. **Fix:** suppress on `/`. **Priority: P3.**

### P5-12a — carried: `"Near me local page"` is the current-crumb name on all 1,073 near-me pages (P2-14) — a UI label leaked into BreadcrumbList `name`. Fix string → `"{Service} Near Me in {Area}"`. **Priority: P0-quick-win (10 min).**

### P5-12b — MEDIUM: MS/ZH parity — breadcrumbs on only 62.8% of localized pages (EN core ≈100%), same 62.3% for FAQPage. The localized service/area trees have them; localized cost/emergency/near-me/pods don't exist or lack them. Fold into the i18n-parity work (P3-12).

---

# 5.3 IMAGE SEO

**Right (VERIFIED):** alt text discipline is perfect — **0 missing/empty alt in 5,815 pages**; descriptive, keyword-sane filenames (`home-services-painters-kl.jpg`); WebP for tool covers; `next/image` optimization configured (WebP, quality allow-list, year-long cache TTL, sensible device sizes); heroes use `fetchpriority`/lazy correctly; no CLS-risk dimension omissions detected.

### P5-12 — CRITICAL (for this business type): 37 distinct images for 5,815 pages; zero real project photography.
- **Evidence (VERIFIED):** global image inventory: 1 logo (on all 5,815), 21 flat SVG service placeholders, 15 generic stock-style hero JPGs (each reused across 200–1,500 pages), 12 tool WebP covers. Blog posts: mean 2 imgs (logo + reused cover) — **no in-article images in 216 posts**. `/projects`: 4 of 6 images are the same SVG placeholders. Before/After section: CSS mockups, not photos (P4-10).
- **Why it matters:** painting/renovation/waterproofing is a *visual proof* trade. Zero unique imagery = zero image-search surface (Google Images/Lens), zero visual E-E-A-T (Google's reviewers and LLMs increasingly check whether "project photos" exist), weak GBP linkage, and every competitor with a phone camera out-proofs the site. This is the visual half of P2-20.
- **Fix (photography program):** per completed job capture 4 shots (before/during/after/team-on-site); target first 90 days: 29 service heroes replaced with real jobs, 10 case studies × 6 photos, 37 area hubs × 1 local job photo; embed EXIF/geo where truthful; name files `{service}-{area}-{project}.jpg`; add `ImageObject` + `primaryImageOfPage` then. **Priority: P0 (content), owner-dependent.**

### P5-13 — HIGH: og:image is an SVG on ~2,200+ pages — social/chat link previews are broken sitewide.
- **Evidence (VERIFIED):** og:image = `hero-{service}.svg` for all 29 service hubs, all 1,073 area×service, 1,073 near-me, many tools/blog posts. Facebook/WhatsApp/X/LinkedIn **do not render SVG** og:images; for a WhatsApp-first business, every shared service link shows a blank/fallback preview. (Live scraper behaviour REQUIRES VERIFICATION, but SVG non-support is documented platform behaviour.)
- **Fix:** generate 1200×630 raster OG images (even a templated brand card per service beats SVG); `next/og` makes this nearly free. **Priority: P1.**

### P5-14 — MEDIUM: Schema `image` fields point at the same SVGs (`Service.image: hero-*.svg`, BlogPosting.image often SVG) — Google's image guidance for structured data expects supported raster formats; rich-result thumbnails will be skipped. Fix together with P5-13. **Priority: P1.**

---

# 5.4 CONTENT GAP ANALYSIS

Method: KLSR's 29-service catalog + 726 specialty/problem/blog topics (repo ground truth) compared against (a) the category taxonomies of Malaysian home-services marketplaces and competitors fetched this session — [seekhomefix KL](https://seekhomefix.my/cities/kuala-lumpur/) (top categories by provider count: Aircon 49, **Cleaning 36**, Plumbing 18, **Pest Control 12**, Handyman, Electrical), [Recommend.my](https://www.recommend.my/professionals/pest-control/kuala-lumpur/) (pest control with published per-job pricing), [LocalService.my](https://localservice.my/) (adds **Moving, Security Alarm**, house cleaning), [CleanHero](https://cleanhero.com.my/) (deep cleaning: sofa/mattress/carpet/curtain, **post-renovation cleaning**, sanitization, aircon servicing) — and (b) intent families visible in Parts 1–4. Search-volume claims are **REQUIRES VERIFICATION** (no keyword-tool access).

### A. Service-line gaps (business decision first — do NOT build pages for services not actually offered)
| Gap | Competitor evidence | Priority | Note |
|---|---|---|---|
| **Post-renovation cleaning** | CleanHero dedicated line; natural upsell to KLSR's own renovation jobs | **HIGH** | Closest adjacency: KLSR already ends every reno job where this begins. Suggested `/services/post-renovation-cleaning` only if offered |
| **Pest control** | Top-4 category on both marketplaces, with price-anchored content (RM200–800 jobs) | MEDIUM | Only if a partner/crew exists; else a comparison/referral guide `/guides/pest-control-vs-diy-kl` captures the query without the service |
| **Deep cleaning (sofa/mattress/carpet)** | CleanHero core | LOW | Off-trade; skip |
| **Moving/disposal (buang barang)** | LocalService.my category | MEDIUM | "tukang buang barang KL" pairs with renovation demolition KLSR already does |
| **Security alarm / smart-home** | LocalService.my; KLSR has CCTV + autogate + smart-lock already | MEDIUM | Extend CCTV silo with alarm/intercom sub-services rather than new pillar |
| **Water filter installation** | Marketplace plumbing sub-category | MEDIUM | 1 sub-service page under plumbing |
| **Security grille (besi/grille tingkap)** | universal Malaysian competitor offering | **HIGH** | KLSR *has* welding — but no grille-intent pages; add `/services/welding/security-grille-installation-kl` |

### B. Topic/intent gaps for services KLSR already sells (all HIGH priority, zero business risk)
1. **Bahasa Malaysia commercial coverage — the single largest gap on the site.** The brand *is* Malay ("Servis Rumah") yet only 591 of 5,815 pages are MS, and none of the money templates (cost, emergency, near-me, pods, problems, blog) exist in MS. Queries like *"tukang paip Kuala Lumpur"*, *"harga cat rumah 2026"*, *"tukang rumah near me"*, *"servis aircond murah KL"* have no dedicated MS pages. Intent: transactional. Suggested URLs: `/ms/services/<svc>/harga` family + MS problem pages. Entities: service + harga + area. Conversion: WhatsApp pre-filled in BM (already supported). AI-answer: MS-language AI queries currently retrieve nothing from KLSR. **(Extends P3-12 from parity to *opportunity*.)**
2. **"Harga/price list {year}" hub pages per service** — competitors publish explicit per-job price lists and rank for "senarai harga"; KLSR's `/services/<svc>/cost` pages are 332–622 words (P2-18) with no per-sub-service price table markup. Merge cost pages with the rate-book data that *already exists* in `lib/` (the estimators are driven by it) — a genuinely unique asset competitors lack. **✅ IMPLEMENTED 2026-08-29 (CF-4 — see §5.5 implementation log): all 29 pages now carry the full published rate book, 1,152–2,264 words (mean 1,373), market baselines and service FAQs.**
3. **Problem-page families are 90% missing:** 74 problem pages ÷ 29 services — aircon has 9–10, most services have 0–2 (plumbing 2, electrical 0, roofing 0…). Every service should own its top 5 symptom queries ("roof leaking during rain Malaysia", "autogate not opening after rain", "water heater no hot water"). Suggested: +70 problem pages, 700+ words, symptom → cause table → DIY-safe steps → when-to-call → price anchor. Highest AI-answer opportunity on the site (problem pages already score 72/100 citability, P3).
4. **Condo/strata-specific content:** JMB/management approval, renovation deposit, working-hours rules, lift protection — high-anxiety KL-specific decisions; nothing on-site covers strata rules. `/guides/condo-renovation-rules-kl`. Strong LLM-citation bait (unique local facts).
5. **Case studies with photos + itemized cost** — `/projects/<case>` (P4-10): 10 real jobs with scope/cost/duration/photos. This single template feeds E-E-A-T, image SEO, local proof, and AI citation simultaneously.
6. **Glossary/entity pages** (P2-29): skim coat vs plaster, PU injection, hacking, IBS, awning types — 20–30 short definitional pages interlinked from service copy; classic AI-Overview fodder.
7. **Comparison money-pages:** only 18 exist; missing the highest-value ones: "aircon chemical wash vs normal service", "epoxy vs tiles cost", "renovate vs buy new kitchen cabinet". Suggested under `/compare/`.

### C. Explicit non-gaps (do not build)
Near-me×area had already over-expanded (1,073 pages — Part 1 P0-2 says consolidate, not extend); seasonal pods; more brand pages without brand facts; additional suburb twins.

---

# 5.5 KEYWORD CANNIBALIZATION

**Verified corpus facts:** 0 duplicate titles among 4,632 indexable EN pages (title templating is disciplined); 28 duplicate-H1 groups among self-canonical pages; 1,101 duplicate-H1 groups when canonicalised twins are included; suburbs tree renders 1,508 pages of which 1,073 are byte-duplicate area-page twins that canonicalise away.

### Conflict families, decisions per family:

**CF-1 — Blog ↔ sub-service twins (26 pairs) — the sharpest true cannibalization on the site.**
- **Evidence:** 26 blog posts share their exact H1 with a sub-service page, e.g. `/blog/interior-house-painting` ↔ `/services/painting/interior-house-painting` ("Interior House Painting in KL & Selangor"), `/blog/bathroom-and-wet-area-waterproofing` ↔ `/services/waterproofing/bathroom-and-wet-area-waterproofing`, `/blog/ceiling-skim-coating-kl` ↔ `/services/skim-coat/ceiling-skim-coating` … (full list in `audit-part5-cannibalization.json`). Both target the same commercial query with the same headline; Google will pick one arbitrarily (often the blog — wrong page type for the intent).
- **Decision:** for each pair: **retarget** the blog post to informational angle (H1 → "…Cost & Process Guide {year}", intent → research, canonical stays self) OR **301** it into the sub-service page if it adds nothing. Never keep two pages with the same H1. **Priority: P0-adjacent quick win (26 edits).**

**CF-2 — `/areas/<a>/<svc>` ↔ `/areas/<a>/<svc>/near-me` ↔ `/suburbs/<s>/<svc>`** — the structural triplication (Part 1 Critical #1/#2, P2-C4). Same query ("painting Ampang" / "painting near me Ampang"), 3 URL families. Near-me pages are indexable and only ~34% different from parents. Suburbs adds a rendered duplicate for 15 overlapping localities (1,073 twins canonicalised — safe but pure build/crawl waste). **Decision:** MERGE near-me into parents (301 + a "near me" H2/FAQ on parent); stop rendering suburb twins (redirect at build); keep the 435 true-suburb pages only where a suburb ≠ area. **Priority: P0 (carried).**

**CF-3 — Service head-term diffusion across 8+ templates.** Measured example families (self-canonical EN pages matching the service token): **ceiling 360 pages, flooring 222, aircon 154, waterproofing 134, plumbing 118, painting 117, handyman 112, electrical 112.** For "aircon service KL" the plausible contenders are `/services/aircon`, `/near-me/aircon`, `/commercial/aircon-services-kl`, `/residential/…`, `/answers/…`, `/process/…`, plus 20 brand pages. The pods (174 pages) exist *only* as extra shots at the same head terms with 33–71% shared copy (P2-C3). **Decision:** collapse pods → 301 to the service hub (or rewrite the 2–3 with genuine distinct intent, e.g. commercial with actual B2B content); keep `/near-me/<svc>` only if rewritten as genuine "coverage + dispatch" pages; brand pages become entity pages or get folded. **Priority: P0 (carried, now with page-count evidence).**

**CF-4 — Pricing intent split 4 ways:** `/pricing` (site-wide table) vs `/services/<svc>/cost` vs `/tools/<calculator>` vs `/estimate/*` (23 pages). Tools deservedly win (unique function); cost pages are thin; estimate pages are index-thin duplicates of tools. **Decision:** cost pages become the canonical "harga {service}" content pages (merge rate-book tables, §5.4-B2); `/estimate/*` → evaluate NOINDEX or merge into tools; `/pricing` stays as hub linking down. **Priority: P1. — ✅ IMPLEMENTED 2026-08-29 (log below).**

**CF-5 — `/problems/<p>` ↔ blog symptom posts:** modest overlap now (2 H1 collisions); will grow if §5.4-B3 expands problems while blog also writes symptom posts. **Decision:** problems own "symptom + fix now" intent; blog owns "cost/why/prevention" — enforce via title conventions and interlinks. **Priority: P2 (governance).**

---

### CF-4 — IMPLEMENTATION LOG (2026-08-29, branch `arena/01a04ad8-klservisrumah-web`)

**What shipped**

1. **`/services/<slug>/cost` (29 pages) → canonical rate-book "harga" guides.**
   - Full published rate book per service: **162 priced scope rows + 60 quote-only scope rows (222 across 29 pages)** — the same `SERVICE_SCOPES` data that drives the estimators (`lib/estimator/rate-book.generated.ts`, regenerated every build), now rendered on the money page as a 3-column scope table (`Scope | Our published rate | What's covered`) plus a dedicated "site-visit quote only" block for unpriced scopes.
   - Verified Klang Valley market baselines stay (17 rows over 6 services), now under a "typical prices" heading with the **actual `lastReviewed` date** rendered from `config/market-rates.ts` (2026-07-25 / aircon 2026-08-17) instead of a hard-coded sentence.
   - New services on every page: pricing methodology (4 points — one rate book, published-not-advertised, fair-KV anchor, no hidden fees), worked example (quantity × published rate, computed from the book's first scope at estimator-typical quantities), "what to measure before you call" (4 steps), instant-calculator CTA (deep tool for the 6 dedicated trades, share URL otherwise), and the service's own **job process (5–6 steps)** + **service FAQs (4–15)**, both localized.
   - **Depth: `<main>` visible words 409–702 (mean 543) → 1,152–2,264 (mean 1,373); all 29 ≥ 1,000** (§K acceptance met). Visibility: 4 `<details>` → 8–19 per page (generic 4 + service FAQs), so every FAQPage Q&A remains in the server-rendered HTML (P5-02).
   - **Trilingual:** costPage messages 25 → **61 keys** × EN/MS/ZH, including localized FAQ templates and a new **`rateCopy.aircon` 7 rows × 3 locales** (aircon previously had 0 rateCopy rows and fell back to English — gap closed; all other rateCopy rows unchanged).
2. **`/estimate` + `/estimate/<slug>` (hub + 22 generic pages) → NOINDEX, nofollow** (CF-4(c)). They stay live, self-canonical and crawlable — the owner's WhatsApp share links keep working — but are removed from the index and from both crawl surfaces: **sitemap −23 URLs** (`app/(en)/sitemap.ts`) and **IndexNow −23 URL entries** (`app/api/indexnow/route.ts`). `scripts/seo-head-audit.ts` now expects them noindex (`expectedNoindex` = 3 locales/framework + 23 estimate URLs). `app/(en)/pricing` unchanged — still the hub linking down to cost guides.
3. **Audit-script fix (CF-4(b)):** `scripts/part5-audit.ts` `cleanText()` now decodes `&#x27;` → `'` (React emits apostrophes as hex entities), eliminating the **5 false `faqSchemaNoVisibleMatch` positives** — the pages were never broken. Verified 5 → 0 with no page edits.
4. **Schema:** OfferCatalog/Article/FAQPage on cost pages updated in sync with the new visible content (FAQPage now includes the service's own FAQs, both visible); no other schema changes on this branch.

**Verification (post-build, all gates PASS):**

| Gate | Result |
|---|---|
| `npm run prebuild` | 320,331 assertions, 0 failures (incl. i18n parity, service-i18n, client-bundle) |
| `npm run build` | PASS, 3,677 static pages |
| `audit:seo-head` | PASS — 3,669 rendered; **indexable = sitemap = 3,643**; noindex 26 (3 framework/locale + 23 estimate); 0 dup titles/descriptions; 0 warnings |
| `audit:html` / `audit:schema-size` / `audit:links` (278,275 links) / `audit:location-similarity` / `seo:audit` | ALL PASS |
| `scripts/part5-audit.ts` (fresh) | 3,669 pages, 0 JSON-LD errors, 37 images, 0 dup titles/H1s, **`faqSchemaNoVisibleMatch` = 0** |

**Files changed:** `app/(en)/services/[slug]/cost/page.tsx`, `components/sections/locale-service-cost-view.tsx`, `lib/location-bundles.ts` (+`ServiceCostDetail`/`buildServiceCostDetail`), `messages/{en,ms,zh}.json`, `app/(en)/estimate/page.tsx`, `app/(en)/estimate/[slug]/page.tsx`, `app/(en)/sitemap.ts`, `app/api/indexnow/route.ts`, `scripts/seo-head-audit.ts`, `scripts/part5-audit.ts`, regenerated `docs/audit-part5-*` + AI-context outputs. (Trade-off accepted: internal links from the 44 localized service pages still point at `/estimate/<slug>`; they remain crawlable `noindex, follow`, and the estimate share pages stay the calculator UX for the 22 generic services.)

**Not done / next for this family (tracked):** embedding the interactive estimator directly in the cost page (chose CTA link to keep JS lean); `RATE_YEAR` build assertion for the "2026" badge (§5.6); emergency-template depth (P2-17). Any ranking/traffic effect of the noindex change is **REQUIRES VERIFICATION** (no GSC access).

---

# 5.6 CONTENT DECAY

No traffic/CTR/ranking data available (**NOT VERIFIED — requires Search Console access**, still the #1 missing tool). Repo-verifiable decay signals:

| Signal | Evidence (VERIFIED) | Risk | Fix |
|---|---|---|---|
| **Blog freshness cliff** | 216 posts → 8 distinct ISO dates (mass-migration stamps 2026-08-12…16 dominate); `dateModified == datePublished` 216/216 | Google discounts mass-stamped content; no post will ever show "updated" | Real per-article dates (P2-19) + editorial refresh rota: every post touched ≥1×/12 months, cost posts every 6 |
| **Sitemap lastMod constant** | `DEFAULT_CONTENT_DATE = "2026-08-16"` fallback | lastMod loses all meaning for crawl scheduling | derive from real content-change dates |
| **Year-stamped claims that will silently rot** | OfferCatalog "published **2026** rates" (129 tool schemas); tool copy "2026"; `reviewLastUpdated: "2026-07-23"` static; `priceValidUntil: 2027-12-31` | wrong-year price content is the classic decay pattern in "harga" SERPs | single `RATE_YEAR` constant + build-time assertion that it matches current year ±0; annual rate-book review triggers it |
| **Price drift between surfaces** | RM 180 vs RM 220 ceiling (P3-07) already live | facts age at different speeds in 3 config files | one rate-book source (exists — enforce all surfaces read it) |
| **foundingDate 2014 vs SSM 2025** | §5.1 P5-09 | entity-trust contradiction | owner verification |
| **Legacy blog claims** | "60% cheaper", "warranties up to 5 years", "no deposit" (P2-24) in 3 legacy posts | unverifiable promises decay into liabilities | rewrite/retire in refresh rota |

---

# 5.7 BRAND / ENTITY CONTENT

Verdict per surface (consolidating Parts 2–4 + new checks):

| Surface | State | Trust verdict |
|---|---|---|
| **About** | exists; legal name, SSM on legal pages, "1,200+ projects / 30-min response" unverified; **no humans** | Scaffolding without people. Add founder/team + photos + license refs (P4-11) |
| **Contact** | full NAP + hours + WhatsApp + form; ContactPage schema | **Good** — best entity page on the site |
| **Services/areas** | 29 hubs + 36 rich area hubs | Good structure; proof layer thin (no photos/reviews per service) |
| **Team** | **does not exist** | Blocks E-E-A-T Experience pillar & author entities |
| **Projects** | 173 words, 5 entries, SVG placeholders | Worst page on the site relative to its job. Rebuild as case studies (§5.4-B5) |
| **Reviews** | 4 hardcoded; "120+" claim; no schema; no source links | Unproven — verify or remove (P2-21) |
| **FAQ** | 80+ real Q&As but client-rendered, no schema | Fix SSR + FAQPage (P3-02/11) |
| **Policies** | privacy/terms exist, breadcrumbed, indexable | Fine |
| **Brand pages** | 32 pages, zero brand facts, zero outbound links | Not entity pages (P2-28); fold or rewrite |
| **GBP / off-site** | `share.google` shortlink; 3 social links; zero citations | REQUIRES VERIFICATION + NAP-consistent directory/citation build-out |

**Bottom line:** the *legal/NAP* identity layer is complete and consistent (genuinely better than most local sites), but the *human/proof* layer — people, photos, verifiable reviews, external corroboration — is near-zero, and that layer is what both Google's E-E-A-T systems and LLM recommendation engines weigh when choosing whom to name.

---
---

# FINAL OUTPUT — CUMULATIVE A–N (Parts 1–5 consolidated)

> Sources: PART-1 (technical/crawl/index/architecture), PART-2 (on-page/content/semantic/entity), PART-3 (AEO/GEO/LLMO/AI), PART-4 (SXO/mobile/CRO/CTA/trust/local/linking), PART-5 (above). Everything below is traceable to a finding ID in those reports.

## A. EXECUTIVE SUMMARY — per-discipline scores /100

| Discipline | Score | Part | One-line verdict |
|---|---:|---|---|
| Technical SEO | 74 | 1 | Clean platform: canonicals, robots, SSG, CSP; host-canonical & CWV unverified |
| Crawlability | 78 | 1 | Thoughtful robots + sitemaps; 404s enforced |
| Indexation | **45** | 1 | ~72% of indexable URLs are near-duplicate programmatic pages |
| Site Architecture | 58 | 1 | Good core taxonomy; near-me/suburbs triplication |
| URL Structure | 70 | 1 | Readable and consistent; competing folders |
| JS/Next.js SEO | 82 | 1 | SSG + dynamicParams=false; client-only content is residual risk |
| On-Page SEO | 78 | 2 | Unique titles/H1 discipline; templated cannibalization |
| Content Quality/Depth | **46** | 2 | Strong service/blog cores vs 174 pods + thin emergency/cost/problems |
| Programmatic SEO | **38** | 2 | One parametric template → 2,581 indexable near-twins |
| Semantic SEO | 55 | 2 | Real silo map; stale knowsAbout, empty brand entities |
| Entity SEO | 52 | 2/5 | Complete NAP identity; split schema entity, zero citations |
| E-E-A-T | **35** | 2/4 | No humans, no photos, unverifiable reviews/claims |
| AEO | 72 | 3 | DirectAnswer+FAQ architecture; programmatic pages excluded from it |
| GEO (Generative) | 62 | 3 | Consistent machine surfaces; contradictory facts |
| LLMO | 58 | 3 | Explicit facts; numeric contradictions |
| AI Citation Potential | 66 | 3 | Tools/services citable; pods/local pages not |
| AI-Readable Content | 52 | 3 | Content after footer, JS-gated FAQ/homepage |
| SXO | 62 | 4 | Coherent funnel; broken reading order |
| Mobile UX | 78 | 4 | Sticky CTA bar, zoom allowed; CTA clutter |
| CRO | 74 | 4 | Full what→price→process→proof→CTA stack; no static form |
| CTA | 82 | 4 | WhatsApp+tel on 100% of pages |
| Trust/Proof | **58** | 4 | Scaffolding without evidence |
| Local SEO | 72 | 4 | Rich area hubs, perfect NAP; no map/local proof |
| Internal Linking | 70 | 4 | 0 broken/orphan; hub over-concentration |
| Anchor Text | 82 | 4 | 90% descriptive, no stuffing |
| **Structured Data / Schema** | **66** | 5 | Parse-perfect & broad, but duplicated entity, non-visible FAQ markup, misplaced ratings, 22–31 KB/page |
| **Breadcrumbs** | **74** | 5 | Perfect on core trees; absent exactly on the weak templates |
| **Image SEO** | **25** | 5 | 37 images / 5,815 pages, 0 real photos, SVG og:images; alt discipline is the only bright spot |
| **Content Freshness** | **35** | 5 | 8 dates across 216 posts; year-stamped claims with no refresh pipeline |
| **OVERALL** | **≈58** | — | A technically disciplined shell wrapped around a thin proof layer and an over-generated programmatic middle |

## B. CRITICAL ISSUES (consolidated, deduplicated — the canonical P0 list)

| # | Issue (finding IDs) | Affected | Severity | Difficulty | Expected impact |
|---|---|---|---|---|---|
| C1 | **Programmatic near-duplicate index bloat**: area×service + near-me + suburbs from one copy generator (P1-Crit1/2, P2-C4, CF-2) | ~3,654 pages (~72% of index) | CRITICAL | High | Recovered crawl focus; head-term consolidation; removes doorway risk |
| C2 | **Content renders after `</footer>`; `<main>` = "Loading…"** (P2-C1, P4-01) | all 5,815 | CRITICAL | Medium | Fixes a11y reading order + JS-less AI extraction sitewide |
| C3 | **E-E-A-T proof layer absent**: no humans, no real photos, 4 unverified reviews vs "120+", contradictory warranties, zero outbound citations (P2-C6, P4-09/10/11, P5-03/12) | sitewide | CRITICAL | Medium (owner-dependent) | The difference between being listed and being *chosen* — by users and by AI |
| C4 | **174 content-pod pages share one wrong-audience body** (P2-C3, CF-3) | 174 + locale gaps | HIGH | Medium | Removes template-page risk; consolidates head terms |
| C5 | **FAQPage markup for non-visible content** (P5-02) + homepage/faq-hub JS-only answers (P3-11/02) | ~1,131+ pages | HIGH | Medium | Compliance + rich results + AI extraction |
| C6 | **Host canonical www/non-www unresolved at DNS/edge** (P1-Crit3) | domain-wide | HIGH | Low | Single-host equity; REQUIRES VERIFICATION live |
| C7 | **Unit-less structured prices ("RM 14" for flooring)** (P3-05, P5-08) | ~2,500 pages + schema | HIGH | Low | Stops actively-wrong price claims to Google/LLMs |
| C8 | **Trilingual leaks + MS/ZH money-template absence** (P3-01, P5-12b, §5.4-B1) | 1,182 localized + missing tree | HIGH | Medium | Unlocks the BM market the brand name promises |
| C9 | **Split business entity + schema bloat** (P5-01/04) | all pages | HIGH | Low | Clean KG entity; ~20 KB/page saved |
| C10 | **Blog freshness cliff + author-as-Person** (P2-19, P5-05, §5.6) | 216×3 posts | HIGH | Low | Restores freshness/author signals |
| C11 | **26 blog↔sub-service H1 twins** (CF-1) | 52 pages | MEDIUM-HIGH | Low | Immediate cannibalization fix |
| C12 | **og:image SVG sitewide** (P5-13) | ~2,200+ | MEDIUM | Low | Restores WhatsApp/social previews — this business runs on WhatsApp |

## C. QUICK WINS (≤1 day each, high confidence)

1. Fix `content.relatedReading` literal H2 — 224 pages (P2-C2).
2. Rename `"Near me local page"` breadcrumb/schema label — 1,073 pages (P2-14).
3. Add units to every per-sq-ft price + `UnitPriceSpecification` (C7).
4. Remove `getLocalBusinessSchema()` duplicate node + repoint tool `provider` (P5-01).
5. Remove `aggregateRating` from tool SoftwareApplication; delete unused `getReviewSchema()` (P5-03).
6. Blog `author` → `Organization` type (P5-05, until real authors exist).
7. Retarget/301 the 26 blog↔sub-service H1 twins (CF-1).
8. Mount `<Breadcrumbs>` on pods/guides/near-me/specialty templates (P5-10); suppress homepage depth-1 trail (P5-11).
9. Raster OG images via `next/og` (P5-13).
10. Fix `lowPrice: "80"`, RM 180-vs-220, "28+ vs 29" fact contradictions from one source of truth (P3-07).
11. Regenerate `knowsAbout` from `servicesData` (P2-27).
12. `llms.txt`: add aircon + all 29 services with units (P3-18).
13. Name HowTo nodes after the actual task or drop them (P5-06).
14. Real per-article `datePublished`/`dateModified` + sitemap lastMod plumbing (P2-19).

## D. BIG PROJECTS

| Project | Scope | Owner | Roadmap position |
|---|---|---|---|
| **BP-1 Programmatic consolidation** | Merge near-me into area×service (301s), stop suburb-twin rendering, demand-backed area index, authored local copy for top 200 pairs | Dev+SEO+Content | Q1 — the architecture fix everything else compounds on |
| **BP-2 SSR content-in-main refactor** | Move page content inside `<main>`, kill "Loading…" fallback, SSR homepage/FAQ accordions | Dev | Q1 |
| **BP-3 Proof program** | Photography pipeline (P5-12), 10 case studies, team/author pages + bios, review verification + GBP embed, warranty table unification | Owner+Content | Q1–Q2, longest lead time — start immediately |
| **BP-4 BM commercial tree** | MS money templates (cost/harga, problems, near-me-consolidated, top pods that survive) | Content+Dev | Q2 |
| **BP-5 Pod rationalization** | 301 or rewrite the 174 pods; brand pages → entity pages or fold | SEO+Content | Q1 |
| **BP-6 Problem-page expansion** | +70 problem pages to 700+ words each, per-service symptom coverage | Content | Q2 |
| **BP-7 Schema slimming + reference architecture** | @id-reference org node, page-local areaServed, FAQ visibility compliance | Dev | Q1 |
| **BP-8 Freshness pipeline** | Real dates, RATE_YEAR assertion, refresh rota, editorial calendar | Content+Dev | Q2, then perpetual |

## E. 5,000+ PAGE ACTION MATRIX (by URL pattern)

| Pattern | Pages (EN) | Verdict | Action |
|---|---:|---|---|
| `/` | 1 | KEEP | IMPROVE: SSR FAQ, mobile quote box above fold, real AggregateRating after verification |
| `/services/<svc>` | 29 | KEEP | IMPROVE: include/exclude scope, real photos, warranty consistency |
| `/services/<svc>/<sub>` | 243 | KEEP | IMPROVE: 20 missing breadcrumbs; dedupe vs blog twins (CF-1) |
| `/services/<svc>/cost` | 29 | KEEP | **REWRITE** into rate-book "harga" pages (CF-4) |
| `/services/<svc>/emergency` | 29 | RETHINK | REWRITE the ~8 true-emergency trades; 301 rest → service hub (P2-17) |
| `/areas/<area>` | 37 | KEEP | IMPROVE: fix formula H1/H2 (P2-12/13), add local proof/photos |
| `/areas/<area>/<svc>` | 1,073 | **RESTRUCTURE** | Demand-backed keep-list with authored copy; others → area hub or thin-index policy (BP-1) |
| `/areas/<area>/<svc>/near-me` | 1,073 | **MERGE/REDIRECT** | 301 into parent + near-me FAQ block on parent (BP-1) |
| `/suburbs/<s>/<svc>` (rendered) | 1,508 | **DELETE twins / KEEP 435** | Stop rendering the 1,073 canonicalised twins as pages; keep true suburbs |
| `/near-me/<svc>` | 30 | RETHINK | REWRITE as dispatch/coverage pages with breadcrumbs, or 301 → service |
| pods: `/answers|/process|/commercial|/residential|/top|/seasonal|/compare|/brands` children | 174 | **MERGE/REWRITE** | 301 to hubs except genuinely distinct-intent rewrites (BP-5) |
| `/problems/<p>` | 74 | KEEP | IMPROVE: expand to 700+ words; EXPAND family +70 (BP-6) |
| `/blog/<slug>` | 216 | KEEP | IMPROVE: dates, authors, FAQPage, in-article images; retarget 26 twins |
| `/tools/<t>` | 43 | KEEP (best asset) | IMPROVE: strip misplaced AggregateRating; keep rates fresh |
| `/estimate/*` | 23 | RETHINK | NOINDEX or MERGE into tools (CF-4) |
| `/guides/*`, `/faq`, `/pricing`, core static | ~45 | KEEP | IMPROVE: FAQ SSR+schema; guides breadcrumbs |
| `/projects` | 1 | **REBUILD** | Case-study hub with real photos (BP-3) |
| MS/ZH trees | 1,182 | KEEP | EXPAND per BP-4; fix leaks (P3-01) |

## F. PAGE TEMPLATE AUDIT (one-line verdicts; full detail in Parts 2–4)

- **Homepage:** strong trust/CTA stack; JS-only FAQ, slideshow-first mobile, unverified stats. Fix: SSR FAQ, quote box up, verified rating.
- **Service hub:** best commercial template (estimator→hero→price→process→compare→FAQ); needs include/exclude, photos, warranty coherence.
- **Sub-service:** good depth; 20 lack breadcrumbs; blog twins cannibalize 26.
- **Area hub:** rich and local (1,850 words, landmarks, dispatch); formula H1 ignores 20 services; no map/photos.
- **Area×service:** parametric sentence-salad — the site's biggest liability (P2-C4).
- **Near-me (pair + hub):** thinner twin of a thin page; consolidate.
- **Problem:** right structure, 383-word mean under-delivers vs its own 6-H2 skeleton; expand.
- **Blog:** genuinely good bodies; dead dates, org-as-Person author, no images, no FAQ schema.
- **FAQ hub:** content exists, invisible to non-JS consumers; no schema.
- **About/Contact:** contact good; about lacks humans/verifiable claims.
- **Projects/case study:** placeholder — rebuild.
- **Commercial landing (pods):** wrong-audience copy; rewrite-or-fold.
- **Tools:** the site's crown jewel — unique function, real rates, high citability.

## G. INTERNAL LINKING BLUEPRINT

Current graph (P4): 407,199 links, 0 broken, 0 orphans; hub indexes absorb 5,815–22,253 inbound each while content children get 7–9; 28 under-linked pages; anchors 90% descriptive.

Target architecture:
1. **Pillar** `/services/<svc>` receives: hub indexes, area pages (that service), problems (same trade), blog posts (same topic), tools (same trade) — every link already exists; *rebalance* by dropping repeated global-footer links to hub indexes from every page (they cause the 22k concentrations) in favour of contextual in-body links.
2. **Cluster:** sub-services ↔ parent (exists); add sibling-to-sibling within a service (exists partially); cost page ↔ estimator ↔ pricing (exists) — make cost the hub of the price cluster (CF-4).
3. **Supporting:** every problem page → its service + relevant sub-service + tool (fixes the 10 aircon problem pages at 1–2 inbound, P4-17); every blog → 1 pillar + 2 clusters, never to near-me twins.
4. **Location:** area hub → all services in area (exists); area×service survivors → 3 nearest-area same-service (exists) + parent service (exists). Remove links *to* pages scheduled for 301 (near-me) before the migration.
5. **Commercial:** homepage → top-8 money pages only above the fold; case studies (new) ← service + area pages ("recent work in {area}").
6. **Anchors:** keep descriptive profile; add ~2% branded anchors to about/contact/case studies for entity reinforcement.

## H. TOPICAL AUTHORITY MAP

- **Pillars (29):** service hubs — complete. Depth uneven: aircon/waterproofing/painting deep; welding/locksmith/glass shallow (few sub-services, 0 problems).
- **Clusters:** 300 sub-services (good), 43 tools (excellent), 74 problems (10× too few — BP-6), 216 blog (good bodies, needs freshness).
- **Subclusters missing:** per-service cost guides (rewrite CF-4), condo/strata rules (§5.4-B4), materials/glossary entities (P2-29), security-grille under welding, water-filter under plumbing, alarm under CCTV.
- **FAQ layer:** service FAQs exist; hub FAQ invisible; blog FAQs unmarked.
- **Commercial layer:** pods fail their job; real commercial content (B2B scope, SLAs, invoicing, portfolio) doesn't exist yet.
- **Local layer:** 37 area hubs strong; below them, authority is simulated (parametric) not earned (no local proof) — the map's weakest edge.
- **Missing topics ranked:** BM money content > problem families > case studies > condo rules > cost guides > glossary > commercial B2B > adjacent services (post-reno cleaning, grille).

## I. AI SEARCH STRATEGY (per engine)

| Engine | Discovery | Retrieval/Extraction | Citation/Recommendation | Priority actions |
|---|---|---|---|---|
| **Google AI Overviews / AI Mode** | Indexation-gated: C1 bloat dilutes | DirectAnswer cards + FAQPage strong *where visible*; C2/C5 break extraction on key templates | Needs E-E-A-T proof (C3) to be *named* | BP-1, BP-2, C5, verified reviews |
| **ChatGPT (search + browsing)** | robots.txt already allows; llms.txt exists (rare advantage) | JS-less fetch sees footer-first shell (C2); llms.txt missing aircon + units | Cites explicit facts/prices — units fix (C7) is critical | C2, C7, P3-18, keep llms-full.txt in lockstep |
| **Perplexity** | Aggressive crawler, allowed | Same C2 issue; tools' rate tables are ideal citation targets | Loves tables + dated rates ("2026 rates" must stay current — §5.6) | Rate-book pages (CF-4), freshness pipeline |
| **Gemini** | Google index + KG | Entity split (P5-01) muddies the KG node; GBP shortlink weak | KG-driven recommendations need one clean entity + GBP | P5-01, GBP verification, citations |
| **Bing / Copilot** | BingSiteAuth present; IndexNow NOT VERIFIED | Same rendering caveats | Bing Places listing REQUIRES VERIFICATION | Add IndexNow, Bing Places |
| **Claude & others** | Applebot-Extended/DuckAssistBot gaps (P3-17) | llms.txt respected by some | — | Robots additions (P3-17) |

Sequencing by impact/effort/risk: (1) C7 units + fact reconciliation (low effort, direct misinformation fix); (2) C5/C2 visibility (medium, unlocks all engines); (3) llms.txt completeness (low); (4) proof layer (high effort, decides recommendations); (5) BP-1 (high effort, protects the index that feeds everything).

## J. PRIORITY SCORE TABLE (consolidated master — SEO / Business / AI / Difficulty, P0–P3)

| ID | Recommendation | SEO | Biz | AI | Diff | Priority |
|---|---|---:|---:|---:|---:|---|
| C1/BP-1 | Programmatic consolidation (near-me/suburbs/pairs) | 9 | 8 | 8 | 8 | **P0** |
| C2/BP-2 | Content inside `<main>` SSR | 9 | 7 | 9 | 6 | **P0** |
| C3/BP-3 | Proof program (photos/team/reviews/warranty) | 7 | 9 | 9 | 6 | **P0** |
| C7 | Price units + fact reconciliation | 7 | 8 | 9 | 2 | **P0** |
| P5-02 | FAQ schema visibility compliance | 7 | 5 | 8 | 4 | **P0** |
| C4/BP-5 | Pod rationalization | 8 | 6 | 8 | 6 | **P0** |
| CF-1 | Blog↔sub-service twin retargeting | 7 | 6 | 5 | 2 | **P0** |
| C6 | Host canonical (live check) | 8 | 5 | 4 | 2 | **P0** (verify) |
| P5-01/04 | Entity unification + schema slimming | 6 | 4 | 8 | 3 | **P1** |
| C12/P5-13 | Raster OG images | 4 | 7 | 3 | 2 | **P1** |
| C10 | Blog dates + author schema | 6 | 4 | 6 | 2 | **P1** |
| C8/BP-4 | BM commercial tree + leak fixes | 8 | 8 | 7 | 6 | **P1** |
| P5-10 | Breadcrumb coverage holes | 5 | 3 | 4 | 2 | **P1** |
| CF-4 | Cost-page/rate-book merge | 7 | 7 | 7 | 5 | **P1** |
| BP-6 | Problem-family expansion | 7 | 7 | 8 | 6 | **P1** |
| P4-07/02 | Static lead form + mobile quote box | 4 | 8 | 2 | 4 | **P1** |
| P4-12 | Map embed + hasMap | 4 | 5 | 4 | 2 | **P1** |
| P5-06/07 | HowTo/Speakable cleanup | 3 | 1 | 3 | 2 | **P2** |
| P4-16 | Link-equity rebalance | 5 | 3 | 3 | 5 | **P2** (after BP-1) |
| §5.4-A | Adjacent services (grille, post-reno cleaning…) | 5 | 7 | 4 | 5 | **P2** (owner) |
| P2-29 | Glossary/entity pages | 4 | 3 | 6 | 4 | **P2** |
| BP-8 | Freshness pipeline | 5 | 4 | 6 | 3 | **P2** |
| P3-15/16/17 | SearchAction, news-sitemap, AI robots | 3 | 2 | 4 | 2 | **P2** |
| P5-11 | Homepage breadcrumb suppression | 1 | 1 | 1 | 1 | **P3** |

## K. DEVELOPER TASK LIST

| Task | Reason | System | Acceptance criteria |
|---|---|---|---|
| SSR page content inside `<main>`; remove "Loading…" fallback | C2 | layouts + client wrappers | `<h1>` inside `<main>` before `</footer>` on all templates; corpus re-scan `pctContentAfterFooter=0` |
| 301 map near-me→parent; stop suburb-twin static generation | BP-1 | route configs, middleware, sitemap | build emits 0 canonicalised twin HTML; redirects live; sitemap −2,146 URLs |
| Single business entity: drop `getLocalBusinessSchema()` from site-head, repoint `LOCAL_BUSINESS_ID` | P5-01 | site-head, estimator schema | corpus scan: 1 business node/page, all providers → `/#organization` |
| @id-reference schema architecture + page-local areaServed | P5-04 | lib/seo.ts | JSON-LD ≤8 KB on sub-pages |
| SSR FAQ answers on near-me/cost/emergency/homepage/faq-hub or strip FAQPage | P5-02 | templates | analyzer `faqSchemaNoVisibleMatch=0` (cost pages done in CF-4) |
| Cost pages → rate-book "harga" guides; `/estimate/*` NOINDEX | CF-4 | cost route/view, sitemap, indexnow, seo-head gate | 29 pages ≥1,000 words; 23 estimate URLs noindex; gates pass — **✅ 2026-08-29** |
| `UnitPriceSpecification` + visible units | C7 | rate-book, seo.ts, copy | no naked per-sqft numbers in Offer.price |
| Raster OG images (`next/og` template) | P5-13 | metadata layer | og:image = 1200×630 png/jpg on all patterns |
| Blog author → Organization; real dates plumbing; sitemap lastMod | C10 | blog-data, seo.ts, sitemap | dateModified ≠ datePublished after first refresh |
| Breadcrumbs on pods/guides/near-me/specialty; suppress on `/` | P5-10/11 | templates | corpus `pctBreadcrumbSchema≥99%` on kept indexable patterns; 0-item trail gone |
| HowTo names per-page or removal; Speakable removal | P5-06/07 | seo.ts callers | no fixed-name HowTo nodes |
| Static SSR lead form; mobile quote box above fold | P4-07/02 | contact/home/hero | form present in no-JS HTML |
| RATE_YEAR build assertion | §5.6 | prebuild scripts | build fails if year-stamped copy ≠ current year |
| IndexNow + Applebot-Extended/DuckAssistBot robots entries | I | robots.ts, deploy hook | present in robots.txt; key served |

## L. CONTENT TEAM TASK LIST

1. **Photography brief** (P5-12): shot list per job type; 90-day targets (29 service heroes, 10 case studies × 6, 37 area photos).
2. **10 case studies** — scope, itemized cost, duration, photos, area, testimonial (verified).
3. **Retarget 26 twin blog posts** to informational H1s/angles (CF-1 list in `audit-part5-cannibalization.json`).
4. **Rewrite 29 cost pages** into rate-book "harga" guides (tables from estimator data; 1,000+ words; FAQ). — **✅ DONE 2026-08-29 (CF-4, see §5.5 implementation log): 1,152–2,264 words/page, full rate-book tables, localized FAQs.**
5. **Expand 74 problem pages** to 700+ words; **author +70 new** per family plan (BP-6).
6. **Rewrite or sign off folding** of each pod family (BP-5) — per-service commercial content only where real B2B scope exists.
7. **BM tree** (BP-4): translate-and-localize money templates; native-BM titles ("harga", "tukang", "upah").
8. **Authored local copy** for top-200 area×service pairs (BP-1 keep-list): landmarks, property types, real jobs.
9. **Glossary**: 20–30 entity stubs (skim coat, PU injection, hacking, BTU, SPC…).
10. **Warranty table** — one page, per-service terms; kill contradictory claims (P2-23).
11. **Refresh rota**: every post ≥1×/year; legacy claim rewrite (P2-24); dates must change truthfully.
12. **Team/about humans**: founder story, crew bios, roles, photos (with consent).

## M. SEO TEAM TASK LIST

- **Technical:** verify www/non-www 301 at edge (C6); Search Console + Bing Webmaster audits of the 3,654 programmatic URLs pre/post BP-1; monitor 301 equity flow; CWV field data pull (all NOT VERIFIED to date).
- **On-page:** title/H1 convention doc enforcing intent separation (CF-5); units in all price copy.
- **Internal linking:** implement blueprint G; pre-migration link cleanup to 301-targets; post-BP-1 re-run `audit:links` + part4 graph.
- **Schema:** governance file listing allowed types per template (prevent re-bloat); quarterly Rich Results tests on 6 template samples (REQUIRES tooling access).
- **Indexation:** decide keep-list for area×service by GSC demand data (REQUIRES access); noindex/301 ledger.
- **Local:** GBP verification + full profile (photos, services, reviews link), Bing Places, 20 NAP-consistent citations (Waze/Foursquare/local directories); embed map (P4-12).
- **Entity:** sameAs expansion after profiles exist; outbound citations to brands/authorities from brand pages + blog (P2-22).
- **AI:** llms.txt/aeo-faq.txt completeness gates in prebuild; quarterly AI-answer spot-checks ("best painter KL", "harga cat rumah") across ChatGPT/Perplexity/AI Overviews (manual, log results).

## N. FINAL — "WHAT IS WRONG WITH THIS WEBSITE?"

**20 biggest weaknesses**
1. 72% of the index is near-duplicate programmatic pages (C1)
2. Real content renders after the footer; `<main>` says "Loading…" (C2)
3. Zero real photographs — 37 images on 5,815 pages (P5-12)
4. No human beings anywhere (authors, team, founder) (C3)
5. "120+ reviews" claim with 4 hardcoded testimonials and no schema/source (P2-21)
6. One copy generator produces 2,581 indexable sentence-salad pages (P2-C4)
7. 174 pod pages with wrong-audience template copy (P2-C3)
8. FAQPage markup on ~1,131 pages whose FAQs aren't visible (P5-02)
9. Structured prices claim flooring costs "RM 14" (C7)
10. Contradictory facts across surfaces: RM 180 vs 220, 30-day vs 5-year warranty, 10 vs 15+ staff (P3-07)
11. Two competing business entities in schema on every page (P5-01)
12. Business rating attached to calculator software, nowhere users see it (P5-03)
13. 216 blog posts share 8 dates; dateModified never differs (C10)
14. BM/ZH money content missing though the brand is Malay (C8)
15. Blog↔sub-service H1 twins on 26 head terms (CF-1)
16. og:image SVGs break WhatsApp/social previews for a WhatsApp-first business (P5-13)
17. Emergency/cost templates: 257–622 words on the highest-value queries (P2-17/18) — cost side fixed 2026-08-29 (CF-4: 1,152–2,264 words + rate books); **emergency templates still pending**
18. Zero outbound citations sitewide — 3 footer social links are the only external hrefs (P2-22)
19. 22–31 KB of JSON-LD per page, mostly 610k repeated City nodes (P5-04)
20. Breadcrumbs absent exactly on the templates that most need context (P5-10)

**20 biggest opportunities**
1. The 43 estimator tools — already the most citable asset in the niche; keep rates current and market them
2. Rate-book data → definitive "harga {service} {year}" pages nobody else has
3. BM market: brand-native language with near-zero current coverage
4. llms.txt/aeo-faq/site-summary machine surfaces — rare infrastructure, one config fix from excellent
5. Photography flywheel: every completed job = images + case study + area proof + GBP post
6. 36 genuinely rich area hubs to hang consolidated local equity on (post BP-1)
7. Problem-page families: 70 easy wins in the highest-AI-answer intent
8. WhatsApp-first CTA plumbing already at 100% coverage — conversion side is ready for the traffic side to catch up
9. Perfect alt-text/metadata discipline — image SEO upside is pure content, no tech debt
10. 0-broken-link graph makes migrations (301 waves) low-risk
11. Condo/strata content: unowned local niche with real query anxiety
12. Case-study template feeding E-E-A-T, images, local, and AI citation at once
13. Verified GBP + review pipeline → the single biggest local-pack lever untouched
14. Security-grille/water-filter/alarm sub-services: demand adjacent to existing trades
15. Glossary entities → AI Overview definitional capture
16. Comparison pages for real purchase decisions (chemical wash vs service…)
17. Tools' "2026 rates" branding → annual refresh ritual = perpetual freshness signal
18. Sitemap-news + IndexNow for genuinely fresh content once freshness exists
19. Anchor-text profile clean enough to absorb aggressive internal re-linking
20. Trilingual architecture (rare in this niche) once parity gaps close

**If we fix only 10 things, in order:**
1. Price units + fact reconciliation (C7 — hours of work, stops active misinformation)
2. `content.relatedReading` + near-me label + twin-H1 retargets (quick-win batch)
3. Content inside `<main>` (C2)
4. FAQ visibility compliance (P5-02)
5. Entity unification + schema slimming (P5-01/04)
6. Near-me/suburb consolidation (BP-1 phase 1)
7. Photography + 10 case studies + team page (C3 start)
8. Review verification → honest rating markup or claim removal (P5-03)
9. Cost pages → rate-book pages (CF-4)
10. Blog dates/authors + OG rasters (C10 + P5-13)

---

## QUALITY-CONTROL CONFIRMATION (per 00-PROMPT-OVERVIEW)

Evaluated: 4,000+ page architecture ✅ (P1 + BP-1) · programmatic SEO ✅ · index bloat ✅ · duplicates/near-duplicates ✅ (corpus Jaccard, twins) · location-page quality ✅ · service-page quality ✅ · semantic relationships ✅ · entity SEO ✅ (P5-01/09) · AI visibility/AEO/GEO/LLMO/AIO ✅ (P3 + I) · SXO/CRO ✅ (P4) · internal linking ✅ (P4 + G) · schema ✅ (P5.1) · E-E-A-T ✅ · rendering ✅ (C2) · performance ⚠️ NOT VERIFIED (no CWV access — flagged) · local SEO ✅ · cannibalization ✅ (5.5) · content gaps ✅ (5.4) · thin content ✅ · orphans ✅ (0) · crawlability/indexability ✅ · URL/sitemap architecture ✅.

## STILL MISSING (tools/data/access — carried forward)

1. **Google Search Console** (indexation truth, queries, CTR) — biggest blocker to demand-backed keep-lists.
2. **Live HTTP/edge access** (host canonical 301s, headers) — sandbox cannot open outbound HTTPS to the host.
3. **Core Web Vitals / CrUX / Lighthouse** — never measured in any part.
4. **Google Business Profile** state + review source verification (owner).
5. **Owner confirmations:** 120+ reviews, 1,200+ projects, founding 2014 vs SSM 2025, staff count, response-time stats, warranty terms.
6. Keyword-volume tooling for §5.4 prioritization.
