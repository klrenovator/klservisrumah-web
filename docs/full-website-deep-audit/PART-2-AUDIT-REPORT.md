# PART 2 — ON-PAGE SEO + CONTENT + SEMANTIC SEO + ENTITY SEO

**Audit date:** 2026-08-28
**Website:** https://klservisrumah.my (canonical host: https://www.klservisrumah.my)
**Framework:** Next.js 15 (App Router) static export, Vercel CDN
**Scope of this report:** **Part 2 only** (On-page, Content quality, Programmatic SEO, Semantic, Entity, E-E-A-T). Technical/crawl/indexation findings are in `PART-1-AUDIT-REPORT.md` (merged PR #170); AEO/GEO/LLMO, SXO/Local/Linking/CRO and Schema/Content-Gap/Roadmap are Parts 3–5. Cumulative Final Output A–N is consolidated in Part 5.

---

## EVIDENCE BASIS & METHODOLOGY

This report is **corpus-wide, not sampled.** Two purpose-built analyzers were run against the production static export (5,815 rendered HTML pages after `npm run build`, verified green on `prebuild` 320,331 assertions / `audit:html` 0 fatal, 0 warnings / `audit:links` 436,341 links, 0 broken):

| Analyzer | Output | What it measures |
|---|---|---|
| `scripts/part2-corpus-audit.ts` (v2) | `docs/audit-part2-corpus.jsonl` (5,815 records) + `docs/audit-part2-aggregate.json` | Per-page title/description/canonical/robots, H1–H3 tree, H1 position vs `<main>`, schema types, img alt coverage, link count, content word count (EN/ms/zh), content hash (duplicate detection), per-pattern aggregates |
| `scripts/part2-cluster-audit.ts` | `docs/audit-part2-clusters.json` | Mean pairwise shingle-3 Jaccard, % of sentences shared by ≥50% of siblings (boilerplate) per cluster; area×service vs sibling-area×service vs canonical service page |

**Verification rule:** everything below is derived from the repo build (the source of truth for what the static export serves) and cross-checked on the LIVE host via fetch where noted (live = `www.klservisrumah.my`, 2026-08-28). Anything requiring Search Console, Google Business Profile, actual review sources, or owner confirmation is labelled **REQUIRES VERIFICATION**.

**Headline: the site's metadata hygiene is genuinely excellent (0 duplicate titles, 0 duplicate descriptions, 1 H1 everywhere, 0 missing image alts). The site's content layer is where the audit problem lives: ~3,700 programmatic pages share a handful of parametric templates, ~204 pages render a broken i18n key as a heading, ~174 "content pod" pages reuse one generic body regardless of intent, and all blog dates collapse to 5 values. E-E-A-T is thin at the evidence layer (no real photos, 4 hardcoded reviews, no named authors, no outbound citations).**

---

## A. EXECUTIVE SUMMARY (Part 2 disciplines)

| Discipline (Part 2 scope) | Score /100 | One-line reason |
|---|---|---|
| **On-Page SEO (titles/descriptions/headings)** | **78** | Perfect uniqueness, length discipline, single-H1 — but templated titles cannibalize (near-me/suburbs), 62% of EN titles drop the brand, and 224 pages render a broken i18n key as an H2 |
| **Content Quality / Depth** | **46** | Deep, AEO-structured service & blog bodies; but ~174 template "content pod" pages (~430–680 words, 33–71% shared sentences), 29 emergency pages at uniform 257–270 words, 74 problem pages averaging 383 words, and all 216 blog posts stamped with only 5 dates |
| **Programmatic SEO** | **38** | 2,581 indexable EN URLs from one parametric template; area×service pairwise similarity 0.635–0.669 across ALL 29 services; near-me pages share 34% of sentences verbatim with their parent |
| **Semantic SEO** | **55** | Real 29-pillar silo map with 222 typed specialty relationships is strong; but `knowsAbout` schema list is stale/incomplete, brand pages carry no brand-entity facts, and the generic pods duplicate one "Malaysian homes…" guidance block across commercial/residential/process/answers |
| **Entity SEO** | **52** | Rich LocalBusiness/Organization (NAP, geo, hours, legal name, SSM on legal pages); but taxID omitted from schema, GBP is a `share.google` short link, zero outbound entity/citation links site-wide, and 5-pillar gaps between the 29-service catalog and Organization `knowsAbout` |
| **E-E-A-T** | **35** | Legal entity, NAP and process transparency are good; no named human authors/bios, 4 hardcoded "Google Reviews", 120-review AggregateRating in schema with no Review markup, no real project photos (5 SVG entries), conflicting warranty claims (30 days / 1 year / 2 years / up to 5 years), claims not backed by any source |

**Overall Part 2 weight of evidence:** the metadata engine is a genuine strength (unique titles/descriptions, 1 H1, 0 alt gaps, controlled budgets). The authority-building layer — unique per-page value, freshness, entity depth, and proof — is the weak half: the site is one metadata engine plus ~7 content templates stretched over 5,800 pages.

---

## THE KEY NUMBERS (corpus-wide, VERIFIED)

| Metric | Value |
|---|---|
| Rendered pages (build) | **5,815** (EN 4,633 / MS 591 / ZH 591) |
| Unique `<title>` across all pages | **5,815 / 5,815 (0 duplicates)** |
| Unique meta descriptions | **5,815 / 5,815 (0 duplicates)** |
| Pages with exactly 1 `<h1>` | **5,815 / 5,815** |
| Pages with H1 inside `<main>` in static HTML | **1 / 5,815** (only `_not-found`) |
| Images missing `alt` | **0** |
| Pages rendering `content.relatedReading` as a visible H2 | **224** |
| EN titles with no brand mention | **2,864 / 4,633 (62%)** |
| Indexable EN area×service + near-me + suburbs pages sharing one template family | **2,581 (+1,073 canonicalised twins)** |
| Near-me pages with ≥1 sentence verbatim-shared with their parent | **all 1,073 (34% of sentences on sample)** |
| Blog topics / distinct published dates | **216 topics / 5 distinct dates** |
| External outbound links on the whole site (excl. 3 footer social links) | **0** |

---

## 2.1 PAGE TITLE AUDIT

### What is right (VERIFIED)
- **0 duplicate titles in 5,815 pages.** Every template interpolates a unique name (service, area, sub-service or brand), so even programmatic pages have unique strings.
- Length discipline: all EN titles ≤60 chars (max observed 61 on 2 blog slugs — see finding P2-05); CJK titles ≤34 chars via a separate CJK budget.
- Brand handling is deliberate (`optimizeTitle` in `lib/seo-meta.ts`): no double-brand, no truncated brand; brand appended only when the full title fits.

### Findings

**P2-01 — Three competing title families for the same query (cannibalization by template).** For every one of 1,073 area×service pairs the site emits three indexable titles:
- `/areas/<a>/<svc>` → `"Ampang Aircon Service, Repair & Installation"`
- `/areas/<a>/<svc>/near-me` → `"Ampang Aircon Service, Repair & Installation Near Me"`
- `/suburbs/<a>/<svc>` (435 self-canonical + 1,073 canonicalised twins) → `"Local Ampang Aircon Service, Repair & Installation"` (twin) or equivalent
**Evidence:** `docs/audit-part2-aggregate.json` sample titles; live page confirms both `/areas/kuala-lumpur/painting` and `/areas/kuala-lumpur/painting/near-me` return 200 with these titles.
**Affected:** 3,654 URLs (1,073+1,073+1,508).
**Severity:** HIGH. **Why:** three URLs fight for one SERP slot; Google splits impressions and often indexes only one (the canonicalised twins become "Alternate page with proper canonical" at best). **Fix:** noindex/merge near-me (Part 1 P0-2), retire the `/suburbs` twin taxonomy, and differentiate the surviving set with genuinely different titles (dispatch/arrival angle for near-me if kept). **Priority: P0.**

**P2-02 — 62% of EN titles (2,864/4,633) carry no brand.** Long descriptive titles force `optimizeTitle` to drop `| KL Servis Rumah` — e.g. `"Ampang Aircon Service, Repair & Installation"` (43 chars) instead of `"… | KL Servis Rumah"`, and every `/answers/*` title ends `"Ultimate Guide for KL"` with no brand.
**Evidence:** titleHasBrand=false counts; sample above.
**Affected:** all area×service, near-me, suburbs, answers, commercial, residential, process, compare, top, seasonal, guides pages.
**Severity:** MEDIUM. **Why:** brand-less titles weaken brand-query association and CTR differentiation in a competitive local market; KL Servis Rumah is a young domain. **Fix:** shorten the descriptive core (drop "Service, Repair & Installation" boilerplate on these patterns) or use a compact suffix (`| KLSR`) when the full brand doesn't fit. **Priority: P1.**

**P2-03 — "Urgent {Service}" titles for services that are not emergency intents.** All 29 `/services/<svc>/emergency` pages use `"Urgent {Service} KL & Selangor"`: `"Urgent Complete House Renovation"`, `"Urgent Bathroom Renovation"`, `"Urgent Custom Carpentry & Joinery"`, `"Urgent Epoxy & Polyurethane Flooring"`, `"Urgent Skim Coat"`, `"Urgent Kitchen Renovation"`.
**Evidence:** full 29-title dump in analysis; each body = 257–270 words (uniform).
**Severity:** MEDIUM. **Why:** "urgent renovation/carpentry/epoxy" has near-zero genuine demand; these pages are keyword-slot fillers and dilute crawl/索引 budget while promising an emergency service the business doesn't position as one. **Fix:** keep emergency pages only for services with real emergency semantics (plumbing, electrical, locksmith, roof, water heater, window, autogate, CCTV, door); 301/noindex the rest into the service page. **Priority: P1.**

**P2-04 — Inconsistent area-hub title formulas across just 37 pages.** Mixed styles: `"Ampang Painting, Plumbing & Waterproofing | KL Servis Rumah"` (brand at end), `"Bandar Utama Home Services — Painter, Plumber & Handyman"` (em dash, no brand), `"Bangsar Painter, Plumber & Handyman | KL Servis Rumah"` (different ordering).
**Evidence:** sampleTitles for `/areas/<area>` in aggregate.
**Severity:** LOW–MEDIUM. **Why:** inconsistent formulas look unpolished in SERPs and weaken the "local hub" naming pattern; brand is missing on some of the site's best local pages. **Fix:** one formula per hub type; ensure brand suffix; standardize separator. **Priority: P2.**

**P2-05 — Blog title length >60 on 2 pages; homepage/ISO titles read as partial translations.** `"/blog"` index title is 60 and two blog slugs reach 61 chars (minor overflow). MS/ZH homepage titles render `"Selamat datang ke | KL Servis Rumah"` / `"欢迎来到 | KL Servis Rumah"` — the pipe after "ke"/"来到" reads as an unfinished string.
**Evidence:** aggregate titleLen max; corpus homepage titles.
**Severity:** LOW. **Fix:** trim 2 blog titles; write proper localized homepage titles ("Laman Utama KL Servis Rumah — …"). **Priority: P2.**

**Ideal title formulas (recommended):**

| Page type | Formula | Example |
|---|---|---|
| Service hub | `{Service} in KL & Selangor — {Benefit} \| KL Servis Rumah` | `House Painting in KL & Selangor — Fixed Prices \| KL Servis Rumah` |
| Service page | `{Service} {KL & Selangor} \| From RM {price}` | existing pattern is good |
| Sub-service | `{Sub-service} — {what it fixes} \| KL Servis Rumah` | existing price-suffix pattern good |
| Area×service (kept set) | `{Service} in {Area} — {local proof}` (no "Service, Repair & Installation" filler) | `House Painters in Cheras — Condo & Terrace` |
| Near-me (if kept) | `{Service} Near Me — {Area} · Same-Day Dispatch` | |
| Problem | `{Problem}: Causes, Fix & Cost — KL & Selangor` | existing pattern good |
| Blog | `{Hook} ({Year})` ≤60, factual | |
| Content pod | `{Angled hook} for {Audience} in KL — {Differentiator}` | replace "Ultimate Guide" formula |

---

## 2.2 META DESCRIPTION AUDIT

### What is right
- 0 duplicate descriptions; all unique text.
- MS/ZH service pages are properly localized (verified 29/29/29 — no English leak).

### Findings

**P2-06 — 78 EN descriptions below the 110-char floor, all `/areas/<a>/<svc>/near-me`.** Pattern: `"{Service} near {Area}. Check local coverage and pricing, then request a clear quote on WhatsApp."` (104–109 chars — the sentence-cut rule keeps them short because the source is short).
**Evidence:** corpus descLen scan (78 pages, examples: `/areas/ampang/bathroom-renovation/near-me` 106, `/areas/kepong/kitchen-renovation/near-me` 105).
**Severity:** LOW–MEDIUM. **Why:** short snippets waste SERP real estate on 78 pages; and the same tail phrase on all near-me pages makes them interchangeable in results. **Fix:** extend the template with a real value line (dispatch/crew availability/photo-first intake). **Priority: P2.**

**P2-07 — Same cliché tail across whole template families.** Area×service: `"…Review local scope and upfront pricing, then request a clear quote on WhatsApp."`; near-me: `"…Check local coverage and pricing…"` — 2,581 pages share 2 sentence templates.
**Severity:** MEDIUM. **Why:** template uniqueness is string-unique but meaning-duplicate; CTR and AEO extraction benefit from a location-specific hook (landmark, condo rule, price anchor). **Fix:** per-area hook sentence from `area.landmarks`/local issue data (already available) instead of the generic tail. **Priority: P1.**

**P2-08 — Blog descriptions range 78–162 chars; 2 pages exceed 158 (minor).** Blog `descLen.max=162` (2 slugs). **Fix:** re-clamp. **Priority: P2.**

**Ideal description formula:** `{Unique local/service hook} + {proof element} + {CTA}` — e.g. `"KL & Selangor house painting from RM 450/room. Fixed written quotes, 1-year workmanship guarantee, insured crews. Send photos for a same-day quote."`

---

## 2.3 H1 / H2 / H3 AUDIT

### What is right
- **1 H1 per page on all 5,815 pages (0 missing, 0 multiple).** This is rare at this scale.
- H1s are descriptive and keyworded on service/area/blog pages.

### Findings

**P2-09 — CRITICAL: the static HTML of every page places the H1 and all content OUTSIDE `<main>`, AFTER the footer.** The static export streams: `<main id="main-content">…LoadingSkeleton…</main><footer>…</footer>` and then the resolved page content in a sibling `<div>` at the end of `<body>`. Verified:
- `/areas/kuala-lumpur/painting.html`: `<main>` = 1,368 bytes containing only `"Loading..."`; H1 at byte 69,214 — after `</footer>` (byte 32,506 region) and outside `<main>` (h1InsideMain = false).
- Same on `/index.html`, `/services/painting.html`, `/areas/kuala-lumpur.html`, and **all 5,814 of 5,815 pages** (only `_not-found` has H1 inside main).
- Root cause: `app/(en)/loading.tsx` Suspense boundary + client components (`LocaleAreaServiceView`, `LocaleServiceView`, homepage sections) — Next.js static export flushes the fallback first and appends the resolved content after the shell. Browsers repair the DOM during hydration; JS-less parsers do not.
**Severity:** HIGH (for AIO/AEO + accessibility; Part 1's "server-rendered" claim holds only for browsers/JS-rendering crawlers). **Why:** `robots.txt` explicitly admits GPTBot, ClaudeBot, PerplexityBot, CCBot, Google-Extended, OAI-SearchBot etc. — none of which render JS. A strict text extractor (or `main`-selector prompt) on any of the 5,815 pages reads: nav → `"Loading..."` → footer → content. Reading order and landmark structure are both wrong in raw HTML. **Fix:** server-render the route content (remove the client-only wrapper on the primary containers, or render a server `<Suspense>` with real content markup) so the static payload contains H1/content inside `<main>` before the footer. **Priority: P0.** (This also explains why `mainWordsMean=1` in the corpus for every pattern.)

**P2-10 — 224 pages render `content.relatedReading` as a literal H2.** Confirmed live (e.g. `https://www.klservisrumah.my/commercial/aircon-services-kl` shows `## content.relatedReading` above the related-reading grid). Counts: answers 29, brands 32, commercial 29, compare 18, guides 20, process 29, residential 29, seasonal 8, services sub-service pages 20, top 10 = **224 pages**.
**Root cause (VERIFIED):** `components/content/generic-content-page.tsx:173` calls `t("content.relatedReading") || "Related reading"`. The key exists only under `estimator.result.relatedReading`; it is missing from `content` in `messages/en.json`, `ms.json`, `zh.json`. `createTranslator` (`lib/i18n.ts`) falls back to English, then **to the key string itself**, which is truthy — so the `|| "Related reading"` fallback never fires.
**Severity:** HIGH for content quality (visible defect on ~200 indexable pages; looks broken to users and AI crawlers). **Fix (5 min):** add `"relatedReading": "Related reading"` (+ MS/ZH) under `content` in all three message files, **and** harden the fallback (`const label = t(...); label?.includes(".") ? "Related reading" : label` — or make `t` return `undefined` when unresolved). **Priority: P0.**

**P2-11 — Identical H2 skeletons across entire clusters (template headings).**
- All 29 `/commercial|residential|process|answers/*` pages: H2s = `Key takeaways` / `Practical guidance for KL & Selangor` / `content.relatedReading` / `Need help applying this to your property?` / `FAQs` (identical strings, count 29 each in aggregate).
- All 29 `/services/<svc>/emergency`: `Stop or isolate the source if safe` / `Send photos and your location` / `Approve the quote before repair starts` / `Fastest coverage areas` / `Other services you might need` / `Urgent WhatsApp dispatch`.
- All 1,508 `/suburbs/<s>/<svc>`: `Local landmarks covered` / `Pricing guide` / `Nearby suburb pages` / `FAQs`.
- All 1,073 `/areas/<a>/<svc>`: `Details that shape a {Service} quotation` (only the service name changes).
**Evidence:** `sampleH2s` in aggregate.
**Severity:** MEDIUM. **Why:** heading trees are the skeleton of topical page structure; identical skeletons signal doorway/template pages to both users and algorithms and reduce per-page semantic differentiation. **Fix:** per-cluster H2 variation driven by the topic (e.g. emergency pages pick 3–4 H2s that fit the service) or reduce the cluster size. **Priority: P1.**

**P2-12 — The homepage hero paragraph is reused as an H2 on every area hub.** All 37 `/areas/<area>` pages carry H2 `"Professional painting, plumbing, ceiling, waterproofing and handyman work across Kuala Lumpur and Selangor. Click any service to view details and pricing."` (also the homepage hero lede).
**Severity:** MEDIUM. **Why:** a 30-word sentence used as a heading on 37 pages; heading misuse + duplicate across pages. **Fix:** replace with a real section heading (e.g. `"Home services in {Area}"`) and keep the sentence as body copy. **Priority: P1.**

**P2-13 — Area hubs' single H1 is a fixed formula ignoring 20 of 29 services.** All 37 H1s = `"Painting, Ceiling & Home Services in {Area}"` — e.g. `/areas/ampang` H1 while the page lists plumbing/renovation/electrical/CCTV etc.
**Severity:** MEDIUM. **Why:** the H1 under-promises the actual catalog on the site's best local pages (keyword + intent mismatch; "electrician in Ampang" query isn't matched by the H1). **Fix:** `"{Area} Home Services — Painter, Plumber, Electrician & Renovation"` or derive from top services. **Priority: P1.**

**P2-14 — Breadcrumb labels use `"Near me local page"` as the visible page name.** `location.nearMeBadge = "Near me local page"` is used as: breadcrumb current item, badge above H1, related-link suffix (`"{Service} Near me local page — {Area}"`), and BreadcrumbList schema `name` on all 1,073 near-me pages.
**Severity:** LOW–MEDIUM. **Why:** awkward, half-generic label repeated 4× per page; schema name (what Google shows as breadcrumb) is weaker than the H1. **Fix:** use `"{Service} Near Me in {Area}"` in schema/breadcrumb; keep the small badge only. **Priority: P2.**

**Recommended heading structure** (per template): service = H1 → H2 scope/price → H3 each sub-service; area×service = H1 → H2 local context → H3 checklist per sub-service; problem = H1 → H2 causes/H2 DIY check/H2 fix/H2 cost/H2 FAQ; blog = H1 → H2 question sections → H3 sub-answers; content pods = H1 → 3–5 topic-derived H2s (not fixed 5).

---

## 2.4 SEARCH INTENT

**Per-page-type intent map (VERIFIED):**

| Template | Intent | Satisfied? |
|---|---|---|
| Service pages (29) | Commercial investigation | ✅ strong (scope, price, process, FAQ) |
| Sub-services (300 ×3) | Commercial investigation | ✅ mostly; some thin (see 2.5) |
| `/cost` (29) | Commercial investigation (price) | ⚠️ 332–622 words; thin for "how much" queries |
| `/emergency` (29) | Transactional/urgent | ❌ for renovation/carpentry/epoxy/skim-coat/lighting (no emergency semantics) |
| Area×service (1,073) | Local commercial | ⚠️ duplicated intent with near-me + suburbs |
| near-me (1,073) | Local "near me" | ❌ same query as parent; only "Near Me" added |
| Problems (74) | Informational/diagnostic | ⚠️ strong structure, thin bodies (mean 383 words) |
| Blog (216) | Informational/AEO | ✅ solid Q&A structure; dates stale |
| commercial/* (29) | Commercial B2B | ❌ body says "Malaysian homes…" + FAQ "Is commercial X relevant for KL and Selangor homes?" |
| residential/* (29) | Residential | ⚠️ same generic body as commercial |
| process/* (29) | Commercial investigation | ⚠️ same generic body; 28 sentences |
| answers/* (29) | Informational/AEO | ⚠️ branded "Ultimate Guide" but ~500-word generic body |
| compare/* (18) | Commercial investigation | ⚠️ good titles, generic body |
| brands/* (32) | Brand-service | ⚠️ no brand-related facts; generic body |
| top/*, seasonal/* (18) | Informational | ⚠️ 84% / 81% pairwise similarity |
| tools/* (43 EN) | Transactional/utility | ✅ |

**P2-15 — Wrong-intent copy on the commercial + residential + process + answers + compare + brands + top + seasonal + guides pods (174 pages indexable EN).** The body's only "guidance" block is the same 3–4 sentence paragraph: *"Malaysian homes face tropical humidity, fast rain cycles, condo management rules, and mixed construction materials…"* — visible on the live `/commercial/aircon-services-kl`. On a **commercial** page the copy references *homes*, *condo rules*, and the FAQ asks *"Is commercial Aircon Service, Repair & Installation relevant for KL and Selangor homes?"*.
**Evidence:** live fetch; shared-sentence analysis: process vs answers shares 25/28 sentences (89%) after normalising the service name; commercial vs brands 71%; commercial vs residential 71%.
**Severity:** HIGH. **Why:** 174 indexable URLs are a single generic template with the service name swapped; three separate sections of the site (commercial/residential/process/answers) are effectively the same page. This is the classic doorway-page pattern Google de-ranks, and it directly damages the AEO/GEO value these pods were built for. **Fix:** either (a) genuinely author each pod per service (commercial: office/retail/warehouse economics, access, after-hours work, trade permits; process: the actual 5-step process; answers: actual AEO answers), or (b) collapse the pods (301 to `/services/<svc>` or `/answers/<svc>`). **Priority: P0.**

---

## 2.5 CONTENT QUALITY

### Verified depth table (content-block word counts, EN indexable patterns)

| Pattern | n | min | mean | median | max |
|---|---:|---:|---:|---:|---:|
| `/services/<svc>` | 29 | 1,355 | 2,232 | 2,231 | 7,700 |
| `/areas/<area>/<svc>` | 1,073 | 1,652 | 1,817 | 1,822 | 2,038 |
| `/areas/<area>` | 37 | 1,795 | 1,850 | 1,850 | 1,913 |
| `/suburbs/<suburb>/<svc>` | 1,508 | 828 | 994 | 992 | 1,203 |
| `/areas/<area>/<svc>/near-me` | 1,073 | 784 | 927 | 928 | 1,080 |
| `/services/<svc>/<sub>` | 243 | 479 | 1,207 | 1,291 | 2,620 |
| `/blog/<slug>` | 216 | 482 | 1,029 | 1,014 | 2,468 |
| `/tools/<slug>` | 43 | 607 | 1,083 | 787 | 3,947 |
| `/problems/<p>` | 74 | **193** | **383** | **309** | 1,014 |
| `/services/<svc>/cost` | 29 | 332 | 459 | 410 | 622 |
| `/services/<svc>/emergency` | 29 | 257 | 264 | 265 | 270 |
| `/answers/<slug>` | 29 | 640 | 752 | 719 | 1,742 |
| `/commercial|residential|brands|compare|top|seasonal|guides` | 174 | 387 | ~500 | — | 662 |
| `/projects` | 1 | 173 | 173 | — | — |

### Findings

**P2-16 — Problem pages are the thinnest important template: 74 pages, mean 383 words, 15 pages ≤233 words** (`/problems/epoxy-floor-yellowing` 193, `/problems/shower-screen-leaking` 194, `/problems/sliding-window-stuck` 195, `/problems/smart-lock-not-working` 195…). All have 6 H2s + HowTo schema — the structure promises more than the body delivers.
**Severity:** HIGH. **Why:** these target high-intent diagnostic queries ("sliding window stuck", "water heater not heating") where users want depth; thin bodies lose to forums/YouTube and fail AEO. **Fix:** expand each problem with symptom→cause→DIY-check→when-to-call→cost→photo tips; target 700+ words on the top-30 problems by demand. **Priority: P1.**

**P2-17 — The 29 emergency pages are a fixed 257–270-word template.** Every page has identical H2s and nearly identical body (pairwise Jaccard **0.727**; same sentence "Stop or isolate the source if safe" on all 29).
**Severity:** MEDIUM–HIGH. **Why:** at 260 words these are the thinnest commercial-intent pages on the site. **Fix:** rewrite per service (or retire per 2.1/P2-03). **Priority: P1.**

**P2-18 — The `/cost` pages (29) are 332–622 words.** "How much does X cost in KL" is the site's highest-value commercial query family; the pages are short.
**Severity:** MEDIUM. **Why:** cost pages are prime SERP and AI-answer targets; thinness = lost conversions. **Fix:** add per-scope price tables, factor lists, sample quotes. **Priority: P1.**

**P2-19 — Blog freshness failure: 216 topics, 5 distinct dates.** 170 migrated articles carry only 4 dates (2026-08-12 ×21, 2026-08-13 ×99, 2026-08-14 ×15, 2026-08-15 ×35); 21 extras = "July 25, 2026"; 15 batch-4 = "2026-08-13"; 8 awning = "2026-08-27"; 2 legacy = July 12/20, 2026. `dateModified = datePublished` for every post. Sitemap `lastMod` = one constant (`DEFAULT_CONTENT_DATE`).
**Evidence:** `config/blog-production.generated.json` date histogram (99 posts on one day); `const now` in 3 config files.
**Severity:** HIGH (content quality + signals). **Why:** Google/Bing/AI systems see a burst-published blog with no ongoing freshness; "2026" content with identical dates looks mass-produced; the news sitemap emits identical dates. **Fix:** spread real per-article dates (approve publication dates per article), set `dateModified` per actual edit, and make the sitemap `lastMod` reflect per-article dates. **Priority: P1.**

**P2-20 — No real media anywhere: 0 real photographs in content, 5 project entries, all SVG heroes.** `/projects` = 173 words, 5 entries using `/hero-*.svg`. No before/after, no crew photos, no job photos (owner has promised future photography — still pending).
**Severity:** HIGH for E-E-A-T/conversion; MEDIUM for SEO. **Why:** "1,200+ completed projects" vs 5 SVG case studies is the largest proof gap on the site. **Fix:** when photography arrives, add real project entries with geotagged locality, month/year, scope summary (and use them in area pages). **Priority: P1 (owner-blocked).**

**P2-21 — Review evidence: 4 hardcoded reviews vs 120-review AggregateRating; no Review schema.** `components/sections/google-reviews.tsx` hardcodes 4 reviews (Ahmad Razak, Siti Aminah, Lee Wei Ming, Priya Sharma — 2026-05/06 dates) shown on the homepage as "Recent feedback from KL Servis Rumah customers" with "Based on 120+ reviews". `lib/seo.ts` `getReviewSchema()` is exported but **never used** — no `Review`/`ReviewRating` markup anywhere (schema types corpus scan: 0 pages).
**Severity:** HIGH (trust + policy risk). **Why:** (a) schema AggregateRating (4.9/120) on thousands of pages claims 120 reviews while the page shows 4 visible testimonials — Google's review-snippet policy requires the aggregate to reflect the reviews displayed; (b) self-serving review markup on a business's own site is a known structured-data action risk; (c) if the 4 reviews are not real Google reviews, this is a disclosure/trust problem. **Fix:** verify reviews are real (REQUIRES VERIFICATION); if real, add Review schema for them and link the GBP; otherwise remove the "Google Reviews" framing and the AggregateRating from schema, or move the reviews to the GBP only. **Priority: P1.**

**P2-22 — Zero outbound links / citations across 5,815 pages.** Brand pages, blog posts, service pages and problem pages have no links to: brand official sites (Nippon, Dulux, Daikin, Acson…), authorities (Suruhanjaya Tenaga, DBKL/JMB guidance, SSM), material manufacturers, or standards. The only external hrefs anywhere are 3 footer social links.
**Evidence:** external-href scan of brand/blog/service HTML.
**Severity:** MEDIUM–HIGH (E-E-A-T + entity + GEO). **Why:** citation graph is how engines and LLMs establish factual anchors; a "YMYL-adjacent" home-services site with zero sourced claims has weak E-E-A-T and no entity corroboration. **Fix:** add authoritative outbound links (brand official pages, ST license info, product sheets) + a "sources" line where claims are made; link GBP/socials with canonical URLs. **Priority: P1.**

**P2-23 — Conflicting warranty and proof claims across the site.** Site stats say **"Warranty Coverage 30 Days+"**; painting highlights say **"Up to 2-year warranty"**; painting service says **"1-Year Paint Peeling & Craftsmanship Guarantee"**; awning hub says **12-month workmanship**; blog legacy content says **"Warranties up to 5 years against reoccurrence"**, "Up to 5 years", "10 years", "6-month", "1-month" etc.; `/about` says **1,200+ projects / 30 min response**; `site.stats` says **15+ Pros** while schema `numberOfEmployees: 10`.
**Evidence:** grep across `config/site.ts`, `config/services-data.ts`, blog configs; About page; trust bar.
**Severity:** MEDIUM–HIGH (trust/accuracy). **Why:** inconsistencies across the same site erode E-E-A-T and create liability; AI engines surface contradictions. **Fix:** one warranty policy per service family (workmanship vs manufacturer terms), published once on `/pricing` + per service; align stats to verified numbers. **Priority: P1.**

**P2-24 — Legacy blog content makes broad unverified claims.** The 3 legacy posts include: *"PU Grouting is typically 60% cheaper than traditional re-waterproofing"*, *"Warranties up to 5 years against reoccurrence"*, *"No deposit required - pay after the leak is verified sealed"*, "*Same-day* slots", "fully insured operations", "background-verified teams".
**Evidence:** `config/blog-data.ts` body text.
**Severity:** MEDIUM. **Why:** numeric % and guarantee claims are exactly what AI search systems quote (and misquote); unverifiable claims damage credibility and compliance. **Fix:** re-verify against owner policy; convert % claims to ranges with hedging or remove; keep the site's established "published fair rate / fixed written quotes" claims. **Priority: P1.**

**P2-25 — `recentJobs` is a generic "Popular local request" ticker with no dates/evidence.** All 24 entries: `timeLabel: "recent"`, `label: "Popular local request"` — rendered on pages as e.g. *"PU grouting inquiry is a popular request in Subang Jaya recent."* (grammar: "in … recent").
**Severity:** LOW–MEDIUM. **Why:** weak social proof; reads as filler; grammatically broken in the sentence template. **Fix:** add month-year, remove the odd sentence pattern, or replace with verified project references. **Priority: P2.**

**What is genuinely good (strengths):** service page bodies are deep (mean 2,232 words), structured, price-anchored with honest "from" figures and process/FAQ/HowTo; blog posts use AEO-style question-first framing with tables and internal deep-links; sub-services average 1,207 words; tools are interactive and well explained; all bodies are local-geo-aware (landmarks, JMB, monsoon, condos); strings are unique; language parity is enforced by a 320k-assertion gate.

---

## 2.6 PROGRAMMATIC SEO AUDIT (CRITICAL)

This is the section the master prompt demands with a **0–100 template quality score**. Scores grade the *template as rendered across all pages* (uniqueness, local value, structure, intent fit). Source: `lib/location-pair-copy.ts` (one function generates all area×service bodies), `lib/location-bundles.ts`, `config/content-data.ts` (content pods), aggregate/cluster JSON.

| URL pattern (EN) | n | Score /100 | Verdict | Evidence |
|---|---:|---:|---|---|
| `/services/<svc>` | 29 | **75** | KEEP, IMPROVE | Deep unique per-service copy, 2,232-word mean |
| `/services/<svc>/<sub>` | 243 | **62** | KEEP, IMPROVE thin ones | Mean 1,207 words; min 479; unique per sub |
| `/services/<svc>/cost` | 29 | **55** | EXPAND | Mean 459 words; formulaic; high-value intent |
| `/services/<svc>/emergency` | 29 | **30** | REWRITE / RETIRE | 257–270 words, Jaccard 0.727, wrong intents |
| `/areas/<area>` | 37 | **68** | IMPROVE | 1,850 words; but fixed H1 formula + homepage-lede H2 |
| `/areas/<area>/<svc>` | 1,073 | **45** | RESTRUCTURE | One parametric template; 1,817 words but 0.635–0.669 pairwise similarity across all 29 services; 12% of sentences verbatim from the service page; identical H2 skeleton |
| `/areas/<area>/<svc>/near-me` | 1,073 | **35** | MERGE | 34% of sentences verbatim vs parent; same query intent; 927 words; title only diff |
| `/suburbs/<suburb>/<svc>` | 1,508 (435 idx) | **50** | SHrink set | Stronger local housing profile than areas, but identical 4-H2 skeleton; 994 words; 1,073 twins canonicalised |
| `/problems/<p>` | 74 | **45** | EXPAND | Best-structured template; mean 383 words, 15 ≤233 |
| `/blog/<slug>` | 216 | **75** | KEEP, fix dates | AEO structure; 1,029-word mean; date problem |
| `/tools/<slug>` | 43 | **82** | KEEP (best template) | Interactive, unique, schema-rich |
| `/answers/<slug>` | 29 | **38** | REWRITE | Generic body; leaked H2; "Ultimate Guide" over-promise |
| `/commercial/<slug>` | 29 | **35** | REWRITE / MERGE | Wrong-audience copy; leaked H2; 515 words |
| `/residential/<slug>` | 29 | **38** | REWRITE / MERGE | Same template as commercial |
| `/process/<slug>` | 29 | **38** | REWRITE / MERGE | 89% sentence-shared with answers on sample |
| `/compare/<slug>` | 18 | **45** | IMPROVE | Good titles (AEO-worthy), generic body; Jaccard 0.699 |
| `/brands/<slug>` | 32 | **35** | REWRITE | Zero brand facts; generic body; 0.623 |
| `/top/<slug>` | 10 | **35** | REWRITE | 0.810 Jaccard; generic body |
| `/seasonal/<slug>` | 8 | **35** | REWRITE | 0.842 Jaccard — most duplicated pages on site |
| `/guides/*` | 21 | **45** | IMPROVE | 424 words; leaked H2 |
| `/projects` | 1 | **20** | REWRITE | 173 words; 5 SVG entries |
| `/area+service pair-copy generator` | — | — | **Replace** | `lib/location-pair-copy.ts` rotates `landmarks`/`subServices`/`localIssues` lists by hash — produces sentence salad ("For a request around KLCC Petronas Towers, identify the exact location of wall preparation & priming…") rather than meaningful prose |

**P2-26 — The parametric pair-copy produces malformed local guidance.** Every area×service body contains blocks like *"For a request around Kepong, identify the exact location of ceiling painting, its current condition and the intended outcome."* — landmark and sub-service names are swapped into a fixed sentence, often combining a landmark with an unrelated sub-service (e.g. "around Mont Kiara … feature wall painting"). This is the doorway-page pattern in its purest form, and it is live on 1,073 pages.
**Severity:** CRITICAL (programmatic). Combined with Part 1's index-bloat analysis, this is **the** architectural defect. **Fix:** (1) stop generating sentences from rotated lists; write 2–3 genuinely local paragraphs per area (area files already contain local housing facts — use them); (2) reduce indexable area×service to demand-backed set; (3) near-me → 301; (4) suburbs → keep 5–10, noindex rest. **Priority: P0.**

---

## 2.7 SEMANTIC SEO

**Business semantic map (as built):**
- **Entities:** 29 services / 300 sub-services (EN+MS+ZH), 74 problems, 216 blog topics, 32 brand pages, 43 EN tools, 37 areas, 52 suburb names, seasonal/top/compare/answers/guides/process/commercial/residential pods, 1 business entity (Organization).
- **Relations:** typed silo map (`config/topical-authority-map.ts`) — 29 pillars × (relatedServices, relatedProblems, topAreas, faqSlugs, relatedBlogs, targetQueries, specialties with relatedProblems+relatedBlogs) = **222 specialty relationships**; validated 29/29 with `validate-topical-authority` (green in `prebuild`).
- **Concepts covered:** causes/symptoms (problems), materials (sub-services + blog), processes (services + process pods), pricing (cost + tools), brands (32), seasons (8), comparisons (18), guides (21), AEO answers (29).

### Gaps

**P2-27 — Organization `knowsAbout` is stale and incomplete vs the 29-service catalog.** `config/site.ts` knowsAbout has 26 items: includes `"Fence & Gate Repair"` (not a service), `"Toilet Bowl Repair"` (covered under plumbing), omits **awning, autogate, CCTV, welding, glass & aluminium, locksmith/smart lock, epoxy (present), renovation depth, tiling, roofing, SPC flooring, carpentry…**. The Organization schema on every one of 5,815 pages advertises a `knowsAbout` list that does not match the visible catalog.
**Severity:** MEDIUM. **Why:** LLMs and Knowledge Graph use `knowsAbout` as an entity summary; a stale list mis-describes the business and contradicts on-page content. **Fix:** regenerate `knowsAbout` from `servicesData` + top problems + brands (single source of truth). **Priority: P1.**

**P2-28 — Brand pages are not brand-entity pages.** `/brands/acson-aircon-service-malaysia` and 31 siblings carry the brand in H1/title but contain only generic service copy ("Commercial aircon service focuses on offices, retail lots…") — no brand facts: product families, models serviced, official site, warranty terms, Malaysia distribution, alternatives. Zero links to brand official sites.
**Severity:** MEDIUM–HIGH for entity SEO. **Why:** brand pages only establish "we service Brand X" (weak); they do not build the brand entity cluster or answer brand-model queries. **Fix:** author brand pages from manufacturer data (models, specs, install requirements, warranty) with outbound links to official pages. **Priority: P1.**

**P2-29 — Supporting-context entities missing.** No glossary/terminology hub ("apa itu skim coat", "PU injection grouting" — only in prose); no equipment/material entity pages beyond blog prose; no "cost of X in Klang Valley by year" entity; no standard/permit/certification content (owner said no certifications shown — respect that; still missing: "ST-licensed" needs a license-reference page: REQUIRES VERIFICATION); no entity page for "Klang Valley" as service region (only prose).
**Severity:** MEDIUM. **Fix:** add one `/guides/glossary-*` cluster + region hub; wire into silo map. **Priority: P2.**

---

## 2.8 TOPICAL AUTHORITY

**Strength:** the silo map is real and machine-validated — each pillar links its problems, top areas, FAQ entries, blogs and specialty problems; homepage AEO hub + smart-finder reuse the same map; internal links are dense (98 links/page on area×service; audit:links green 436,341 links).

**Depth check per pillar (VERIFIED, from data registries):**

| Depth | Pillars |
|---|---|
| Deep (≥6 problems) | Aircon (9), Waterproofing (8), Plumbing (8), Ceiling (6), Handyman (6) |
| Medium (2–4) | Painting, Tiling, Electrical, Flooring, Plaster-ceiling, + 18 more at 2 |
| Thin (1) | Bathroom-renovation, Kitchen-renovation |
| Missing problem nodes | Awning (9 sub-services, 0 problem pages — only 2 generic problems + 8 blogs), Epoxy (1), CCTV has 2… |

**P2-30 — Authority is concentrated in 6 pillars; 23 pillars have ≤2 problem pages and 2 have 1.** The catalog is 29 services but the evidence layer (problems) is 74 pages / 2.6 per service.
**Severity:** MEDIUM. **Why:** topical authority = depth × consistency; 2 problem pages cannot support a commercial pillar in competitive queries. **Fix:** order content work by demand: add problem pages for awning (leaking awning, rusted frame, canopy pooling), electrical (already 3), roofing, renovation delivery issues, etc. **Priority: P1.**

**P2-31 — Cost/emergency/answer pods are not wired as typed nodes in the silo map.** They exist as content but only get generic cross-links; the map's `targetQueries` exist but no page explicitly answers "how much in {area}" at pillar level (only `/cost` hub).
**Severity:** LOW–MEDIUM. **Fix:** extend `TopicalSilo` with `costPage`/`emergencyPage`/`answerPage` refs. **Priority: P2.**

---

## 2.9 ENTITY SEO

**Verified entity profile:**
- **WHO:** KL Servis Rumah, legalName Multicore Dynamics Resources, SSM 202503227236 (published on `/privacy` + `/terms` in all 3 languages; **omitted from Organization schema** per an explicit code rule).
- **WHAT:** 29 services + 300 sub-services in `serviceCatalog`/`OfferCatalog` schema, priceRange RM80–RM22,000, payment methods, knowsAbout (stale).
- **WHERE:** Jalan Kiara, Mont Kiara, 50480 KL, geo 3.1670/101.6520, areaServed = 50+ City objects + GeoCircle 50 km, 9:00–18:00 7 days.
- **PROOF LINKS:** sameAs = Facebook (share URL `facebook.com/share/1HFzAa3AdZ/`), Instagram (with `igsh` param), Google Maps (`share.google/7GZef2rDjtRuqW2h1`). No YouTube/LinkedIn/directories.

**P2-32 — GBPs/hasMap and social sameAs use share/redirect URLs, not canonical profile URLs.** `share.google/…` and the Facebook share URL are redirect endpoints; they are not guaranteed stable, do not expose the Place ID, and cannot be verified against the GBP by a crawler. **REQUIRES VERIFICATION** that these resolve to the correct KL Servis Rumah profiles (the code comment says the old short link previously resolved to the unrelated KLRenovator presence).
**Severity:** MEDIUM (entity consistency + local trust). **Fix:** canonical Google Maps URL with `place_id` (or `maps.google.com/?cid=…`), canonical facebook.com/…page URL, canonical instagram page URL, fill sameAs with Yelp/directories where the business genuinely exists. **Priority: P1.**

**P2-33 — Entity counts that don't reconcile.** Schema `numberOfEmployees: 10` vs site stats "15+ Pros"; "1,200+ completed projects" vs 5 project pages; "Review count 120" vs 4 visible reviews.
**Severity:** MEDIUM. **Why:** inconsistent entity facts across schema/page/GBP are exactly what entity resolution and LLM fact-checking penalize. **Fix:** single `siteConfig` source for all counts; align schema to published numbers. **Priority: P1.**

**P2-34 — The Organization+LocalBusiness+Service+FAQ+breadcrumb 26-type JSON-LD block is emitted on every page (5,815×).** Each programmatic page embeds the full org entity (logo, geo, hours, sameAs, knowsAbout, 50 city areaServed) even on 74 problem pages and 216 blog pages.
**Severity:** LOW–MEDIUM (worth noting, not critical): **Why:** redundant org markup is normal, but 50-city areaServed × 5,815 pages inflates DOM weight on an already-heavy HTML corpus (1023 MB raw / 215 MB gz) and creates a large repeated blob for LLM context extraction. **Fix:** keep org on hub/template pages; use a compact `@id` reference (`{"@id": "…/#organization"}`) on deep programmatic pages. **Priority: P2.**

---

## 2.10 E-E-A-T

### Verified strengths
- Legal entity + SSM published (3 languages) on privacy/terms; NAP + email + phone consistent in schema, footer, legal pages, contact.
- Operating hours explicit; pricing philosophy ("fixed written quote", "published fair rate", itemized) is a genuine trust signal.
- Process steps (HowTo), warranties (per-service), FAQs, clear CTA, photo-first WhatsApp intake, "no deposit/pay after verification" on some services (verify P2-24).
- About page states mission/values/standards and the 4.9★/1,200+ stats.

### Verified gaps (evidence-backed)

**P2-35 — No human authors anywhere.** Every article author = `"KL Servis Rumah Editorial Team"` / `"KL Servis Rumah Technical Review Team"`; Person schema `name` = the company name; no author pages, no bios, no credentials, no "reviewed by" (engineering/legal review) notes.
**Severity:** MEDIUM–HIGH. **Why:** Google's E-E-A-T documentation and LLM citation behavior both favor named, credible authors, especially for advice content (repair/renovation = actionable advice). **Fix:** add 2–4 named internal authors/ reviewers (e.g. "Head of Works") with /about/team entries; set `Person` schema with `sameAs`, `jobTitle`, `knowsAbout`. **Priority: P1.**

**P2-36 — "Insured & verified crew", "background-checked", "fully insured operations", "ST-licensed electricians" are repeated claims with no visible proof or source** (no certificate/license framework pages — owner instructed not to show certifications, so mark: REQUIRES VERIFICATION; at minimum add insurance wording to `/about`/`/pricing` with policy scope, without inventing certs).
**Severity:** MEDIUM. **Fix:** owner-provided verification or remove/hedge the claims. **Priority: P2 (owner-blocked).**

**P2-37 — No editorial/content-review policy published** (no "how we research/write", no corrections policy, no last-reviewed dates). **Fix:** small `/about` or `/guides` note + per-article "Last reviewed" date. **Priority: P2.**

---

## B. CRITICAL ISSUES (Part 2)

| # | Problem | Evidence | Affected pages/templates | Severity | Why it matters | Recommended fix | Difficulty | Impact |
|---|---|---|---|---|---|---|---|---|
| P2-C1 | Static HTML streams content outside `<main>` after the footer; `<main>` = "Loading…" on every page | Corpus h1InsideMain: 1/5,815; raw HTML byte positions | **ALL 5,815 pages** | **CRITICAL** | JS-less AI crawlers (all allowed in robots.txt) and strict extractors see the page as a loading shell with content after the footer; reading order broken | Server-render primary content inside `<main>`; stop the client-only wrapper/Suspense fallback pattern on area×service, service, homepage | Medium | High (AIO/AEO) |
| P2-C2 | `content.relatedReading` visible as H2 on 224 pages (live-confirmed) | Corpus scan; live `/commercial/aircon-services-kl`; `generic-content-page.tsx:173`; key missing from 3 message files | answers/brands/commercial/compare/guides/process/residential/seasonal/top + 20 service sub-pages | **HIGH** | Broken UI on ~200 indexable pages; i18n defect; erodes trust with users and LLM readers | Add key to 3 locales + harden fallback | Low | Medium |
| P2-C3 | 174 "content pod" pages share one generic body (wrong audience on commercial; 33–71% shared sentences; same 5-H2 skeleton) | Cluster Jaccard 0.543–0.842; sentence sharing; live fetch | commercial/residential/process/answers/compare/brands/top/seasonal/guides | **HIGH** | Doorway/template-page pattern; zero unique value; de-risked by Google; AEO failures | Author per-service content OR collapse/301 pods to service pages | Medium | High |
| P2-C4 | Programmatic pair-copy generator produces rotated sentence salad on 2,581 indexable URLs + 1,073 twins | `lib/location-pair-copy.ts`; 0.635–0.669 pairwise Jaccard for every one of 29 services; live sample | area×service, near-me, suburbs | **CRITICAL** | Near-duplicate content at scale = cannibalization + de-prioritization (Part 1 P0-1) | Replace generator with authored local copy; demand-backed index; merge near-me | High | High |
| P2-C5 | Blog freshness collapsed: 216 posts / 5 dates; 99 on one day; dateModified=published | Generated store histogram; const-now configs | blog ×216 (+432 localized) | **HIGH** | Mass-publish signal; no freshness; news sitemap flat | Real per-article dates + lastMod; content calendar | Low | Medium |
| P2-C6 | E-E-A-T proof layer: 4 static reviews vs schema AggregateRating(120), no Review schema, no named authors, no real photos, contradictory warranties, zero outbound citations | google-reviews.tsx; seo.ts usage scan; projects (5 SVG); warranty greps | Homepage, schema on all pages, blog, projects | **HIGH** | Trust, policy risk (review schema), LLM citation weakness | Verify reviews w/ owner; add Review schema or drop AggregateRating; authors; real photos; warranty table; sources | Medium | High |
| P2-C7 | 29 emergency pages (257–270 words) for non-emergency services; "/cost" 332–622 words; 74 problem pages mean 383 | Corpus depth table | 132 pages | MEDIUM–HIGH | Thin commercial/diagnostic intent = lost rankings/conversions | Rewrite cost + emergency; expand problems to 700+ words | Medium | Medium |

---

## D. QUICK WINS (Part 2)

1. **Fix `content.relatedReading`** (add key ×3 locales + fallback hardening) — 10 minutes, 224 pages fixed (P2-C2).
2. **Fix near-me breadcrumb/schema label** `"Near me local page"` → `"{Service} Near Me in {Area}"` — 1,073 pages + schema (P2-14).
3. **Fix `recentJobs` sentence template** ("in Subang Jaya recent.") + remove generic "Popular local request" from visible text — 5 min.
4. **Add `taxID` (SSM) to Organization schema** since it's already published on legal pages — improves entity resolution (P2-32-adjacent).
5. **Regenerate `knowsAbout` from `servicesData`** — removes stale entity list (P2-27).
6. **Localized homepage titles** for `/ms` + `/zh` ("Selamat datang ke | …" → proper Malay/Chinese titles) (P2-05).
7. **Clamp 2 blog meta descriptions >158** (P2-08).
8. **Fix area-hub H2** (homepage lede sentence reused as heading on 37 pages) (P2-12).
9. **Standardize area-hub title formulas** (P2-04).
10. **Fix `getReviewSchema` dead code** — either wire it to real reviews or delete it (avoid dead code confusion).

---

## E. 5,000+ PAGE ACTION MATRIX (Part 2 scope — content actions; technical actions in Part 1)

| Pattern | Part 2 verdict |
|---|---|
| `/` | KEEP (restore server-rendered content order) |
| `/services/<svc>` | KEEP + IMPROVE (h2/on-page polish) |
| `/services/<svc>/<sub>` | KEEP + IMPROVE (thin subset) |
| `/services/<svc>/cost` | EXPAND to ≥800 words |
| `/services/<svc>/emergency` | REWRITE for real-emergency services; RETIRE the rest |
| `/areas/<area>` | IMPROVE (H1 formula, H2, links to kept local pages) |
| `/areas/<area>/<svc>` | RESTRUCTURE: authored local copy for demand-backed set; NOINDEX/merge rest |
| `/areas/<area>/<svc>/near-me` | MERGE → parent (301) |
| `/suburbs/<suburb>/<svc>` | SHRINK to 5–10 genuine; NOINDEX rest |
| `/problems/<p>` | EXPAND all 74 (target 700+ words) |
| `/blog/<slug>` | KEEP + real dates + author |
| `/tools/<slug>` | KEEP (best template) |
| `/answers/<slug>` | REWRITE per service or collapse |
| `/commercial/*`, `/residential/*` | REWRITE (correct audience) or collapse → `/services` |
| `/process/*` | REWRITE with real steps or collapse |
| `/compare/*` | IMPROVE (audience-specific bodies) |
| `/brands/*` | REWRITE as brand-entity pages + official links |
| `/top/*`, `/seasonal/*` | REWRITE uniquely or REDUCE to 2–3 |
| `/guides/*` | EXPAND (424-word mean) |
| `/projects` | REWRITE with real projects when photos arrive |
| `/faq`, `/pricing`, `/contact`, `/about` | KEEP; add team + provenance |

---

## H. TOPICAL AUTHORITY MAP — GAPS (Part 2)

1. **Awning pillar has no problem pages** (9 sub-services; problems = generic clogged-gutter/rusting-grille; leaks/rust discussed only in blog). Add: `awning-leaking`, `awning-rusted-frame`, `awning-canopy-pooling`, `awning-noisy-rain`.
2. **No local cost entity**: "how much does painting cost in Cheras" has no dedicated answer (only `/cost` + area pricing block). Add FAQ/answer per area×service on kept pages.
3. **No glossary/terminology cluster** (skim coat, PU grouting, L-box, SPC, ACP, chemical wash/overhaul).
4. **No seasonal maintenance calendar hub** (8 seasonal pages are separate, 0.842 similar — merge into one calendar page + 3 topics).
5. **No "contractor selection/criteria" content for renovation depth** (compare has DIY-vs-pro and cheap-vs-insured; add renovation-budget vs contractor-scope).
6. **Brand cluster disconnected from material sub-services** (e.g. Nippon vs Dulux not linked from painting sub-services).
7. **Renovation pillars (kitchen/bathroom/house) have only 1–2 problem pages** — biggest content gap vs "renovation" demand.
8. **MS/ZH content pods absent** (commercial/residential/process/answers/brands/top/seasonal/guides are EN-only) — missed multilingual opportunity (MS/ZH get 591 pages vs EN 4,633).

---

## J. PRIORITY SCORE (Part 2 items)

| # | Item | SEO | Business | AI/LLM | Difficulty | Priority |
|---|---|---:|---:|---:|---:|---|
| P2-C1 | Server-render content in `<main>` (fix loading-shell static HTML) | 9 | 7 | 9 | 6 | **P0** |
| P2-C4 | Replace pair-copy generator + restructure area×service index | 9 | 8 | 8 | 8 | **P0** |
| P2-C3 | Rework/collapse 174 content-pod pages | 8 | 6 | 8 | 6 | **P0** |
| P2-C2 | Fix `content.relatedReading` | 5 | 4 | 5 | 1 | **P0** |
| P2-C6 | E-E-A-T proof layer (reviews/authors/photos/warranty/citations) | 7 | 8 | 8 | 5 | **P0** |
| P2-19 | Real blog dates + per-article lastMod | 6 | 4 | 5 | 2 | **P1** |
| P2-16/17/18 | Expand problems, rewrite emergency, expand cost | 8 | 7 | 7 | 6 | **P1** |
| P2-28 | Brand pages → entity pages | 6 | 5 | 6 | 4 | **P1** |
| P2-27/32/33 | knowsAbout/GBP/social URLs/entity counts | 6 | 5 | 7 | 2 | **P1** |
| P2-22 | Add outbound citations | 6 | 5 | 8 | 3 | **P1** |
| P2-01/02 | Title family consolidation + brand presence | 7 | 6 | 5 | 4 | **P1** |
| P2-11/12/13 | Heading structure per template | 5 | 3 | 5 | 3 | **P1** |
| P2-30/31 | Pillar depth + pod wiring in silo map | 6 | 4 | 5 | 4 | **P1** |
| P2-06/08/14 | Description/near-me meta/floor fixes | 3 | 2 | 3 | 1 | **P2** |
| P2-29 | Glossary + region hub | 5 | 3 | 6 | 4 | **P2** |

---

## K. DEVELOPER TASK LIST (Part 2)

| Task | Reason | Affected system | Expected result | Acceptance criteria |
|---|---|---|---|---|
| Move primary page content into server-rendered `<main>` (remove client-only Suspense fallback shells on service/area/homepage) | Static HTML reading order + landmarks (P2-C1) | `app/(en)/page.tsx`, `locale-area-service-view`, `locale-service-view`, `app/(en)/loading.tsx` | H1 + body inside `<main>` before footer in emitted HTML | `h1InsideMain=true` for ≥99% pages in corpus analyzer |
| Add `content.relatedReading` to en/ms/zh messages + harden `t()` fallback for dotted keys | Fix 224 leaked headings (P2-C2) | `messages/*.json`, `lib/i18n.ts` | No `*.key*` strings in any H1–H3 | Corpus scan returns 0 leaked keys |
| Replace `lib/location-pair-copy.ts` rotation generator with per-area authored copy (2–3 local paragraphs using existing `area.housingProfile` etc.) | P2-C4/P2-26 | `lib/location-pair-copy.ts`, area/suburb data | Meaningful local prose, no rotated sentence salad | Live area×service sample reads naturally; pairwise Jaccard for service area set <0.45 |
| Wire real per-article `date`/`dateModified` + per-article sitemap lastMod | P2-19/P2-05 | `app/(en)/sitemap.ts`, blog configs | Distinct dates; no single-date burst | Sitemap lastMod reflects article dates |
| Add `taxID` to Organization schema (value already public on legal pages) | Entity SEO (P2-32) | `lib/seo.ts` | SSM in schema | JSON-LD validates; SSM appears once |
| Regenerate `knowsAbout` from `servicesData`/problems/brands | Stale entity list (P2-27) | `config/site.ts` | knowsAbout = 29 services + core materials | Count matches catalog; validator green |
| Fix near-me breadcrumb/schema label (P2-14) | UI + schema | `components/sections/locale-near-me-view.tsx`, messages | "{Service} Near Me in {Area}" | Visible breadcrumb + schema name match H1 |
| Wire `costPage`/`emergencyPage`/`answerPage` into `TopicalSilo` | Pod linking (P2-31) | `config/topical-authority-map.ts` | Typed refs validated | Validator green |

---

## L. CONTENT TEAM TASK LIST (Part 2)

1. Rewrite 29 `/answers/*` as true AEO answer pages (50–100 word direct answer + 500-word depth) or delete (P2-28/C3).
2. Author `commercial/*` + `residential/*` with correct audiences (retail/office/warehouse vs landed/condo) — 58 pages.
3. Expand all 74 problem pages to ≥700 words with tables (symptom→cause→cost→DIY→call) — priority: the 15 ≤233-word pages.
4. Rewrite 29 `/cost` pages with real price tables/factors; keep 12 (or 8) emergency pages and retire the rest.
5. Brand pages: 32 pages with brand facts (models, install specs, official links, warranty terms).
6. Topical additions: awning problem pages ×3, glossary cluster ×6, renovation problem pages ×5, seasonal calendar hub.
7. Blog dates: assign genuine per-article dates; set `lastReviewed`; add named authors.
8. Photos: real project entries (5+), crew/about photos, before/after — when owner supplies.
9. Reviews: verify 4 hardcoded reviews with the owner; if real → add source/date links; else replace with verified testimonials.
10. Warranty consolidation: one published policy table (workmanship vs manufacturer) — align all claims (30 days/1yr/2yr/5yr).

---

## M. SEO TEAM TASK LIST (Part 2)

1. Implement title formula change for area×service/near-me (remove "Service, Repair & Installation" filler; compact brand suffix) — 2,581 pages.
2. Description hook per area (use landmarks + local issue from existing data) — 1,073 pages.
3. Standardize heading trees per template (areas, suburbs, emergency, pods).
4. Internal anchor-text policy for problem→service links (currently generic service names; add symptom anchors).
5. Local SEO: verify/canonicalize GBP + social URLs; ensure NAP on GBP matches schema; add GBP `place_id` if available.
6. E-E-A-T: publish team page, editorial policy, insurance/provenance section.
7. Entity: site links for brands official pages; submit `llms.txt` audit for citations (Part 3 will cover).

---

## N. WHAT IS WRONG WITH THIS WEBSITE? (Part 2 scope)

### 20 biggest content/on-page weaknesses
1. Static HTML of every page is a client-loading shell outside `<main>` (P2-C1).
2. 224 pages show a broken i18n key as a heading (live).
3. 174 content-pod pages = one generic template, wrong audience on commercial (P2-C3/P2-15).
4. 2,581+1,073 programmatic pages generated by a sentence-rotation machine (P2-26).
5. 62% of EN titles carry no brand.
6. Three title families cannibalize one query (near-me/suburbs/areas).
7. "Urgent Renovation/Carpentry/Epoxy" — 29 fake-emergency pages.
8. 74 problem pages average 383 words (15 ≤233).
9. 29 cost pages ≤622 words.
10. Blog: 216 posts, 5 dates, 99 on one day.
11. 4 hardcoded reviews vs 120-review schema AggregateRating; no Review schema.
12. Zero outbound citations site-wide.
13. Brand pages contain zero brand facts.
14. Organization knowsAbout stale; tagline says "Painting & Ceiling" only.
15. `share.google`/Facebook share URLs as canonical profile links.
16. Warranty claims conflict (30 days / 1 yr / 2 yr / up to 5 yr).
17. "Near me local page" used as breadcrumb + schema name on 1,073 pages.
18. Area hubs' H1 = "Painting, Ceiling & Home Services in X" (ignores 20 services).
19. Homepage lede sentence reused as H2 on 37 area pages.
20. Projects page = 173 words + 5 SVG entries against "1,200+ projects".

### 20 biggest content/on-page opportunities
1. Fix the static-server-render issue = instant AI-crawler correct DOM for 5,815 pages.
2. Collapse pods → re-focus editorial effort on 29 real service pillars.
3. Authored local copy for the 37 area hubs + demand-backed area×service set.
4. Deepen problem pages → win "problem + fix" SERP/AEO.
5. Real blog dates + author program = freshness + E-E-A-T.
6. Brand entity pages (32) — cheap high-value entity cluster.
7. One warranty/price truth table (pricing pages already exist) — trust + citations.
8. Real projects + review markup once owner data arrives.
9. Outbound citations to brands/ST/manufacturer — E-E-A-T + GEO.
10. Localized content pods (MS/ZH) — 174 pages × 2 locales.
11. Glossary + materials cluster (semantic depth).
12. Cost-page expansion → AI-answer targets for "how much".
13. knowsAbout/taxID/GBP canonicalization — entity completeness.
14. Seasonal calendar hub instead of 8 duplicated pages.
15. Awning problem cluster for the newest pillar.
16. Renovation pillar depth (only 1–2 problems per pillar).
17. Per-area meta hooks for CTR.
18. H1/H2 structure fixes on all templates.
19. Author + "reviewed by" schema (Person with jobTitle) on blog.
20. Link the site's price lists into AI-context files (already partially there — Part 3).

### If we fix only 10 things first (Part 2 priorities)
1. Server-render content into `<main>` (P2-C1) — biggest single AIO/AEO fix.
2. Replace the pair-copy generator with authored local copy + merge near-me (P2-C4).
3. Collapse/rewrite the 174 content-pod pages (P2-C3).
4. Fix `content.relatedReading` (P2-C2).
5. Real blog dates + named authors (P2-19/P2-35).
6. Reviews: verify/correct + Review schema or drop AggregateRating (P2-21/P2-36).
7. Expand problem pages to ≥700 words (P2-16).
8. Cost + emergency rewrite (P2-17/P2-18).
9. Entity cleanup: knowsAbout, taxID, canonical GBP/social URLs, aligned counts (P2-27/32/33).
10. Warranty/claim consistency table + outbound citations (P2-22/P2-23/24).

---

## NOT VERIFIED — requires owner/tool/data access (Part 2)

- Whether the 4 displayed "Google Reviews" are genuine Google reviews and whether reviewCount 120/4.9 is accurate (**owner/GSC/GBP**).
- Whether insurance, background-check and ST-license claims are currently true and documented (**owner**).
- Whether "1,200+ projects", "15+ pros", "30 min avg response" are accurate as stated.
- Real blog publication dates per article (only batch constants exist).
- Whether `share.google/7GZef2rDjtRuqW2h1`, Facebook share URL and Instagram URL point to the correct KL Servis Rumah profiles.
- Whether live-site deployment is at the latest main (live `/commercial/painting` 404'd while the build contains it — the live `/commercial/aircon-services-kl` exists, so this suggests partial deploy or slug difference; requires deploy/sitemap reconciliation).
- Any Search Console impression/click data per pattern (needed to prioritise area×service retention).
- Competitor content depth comparison (never measured).
- The actual content quality of the 170 "migrated" legacy blog articles beyond structural checks (requires full review pass).

---

*End of Part 2 audit. Parts 3–5 and the consolidated Final Output (A–N, all-discipline scores, page template audit, internal linking blueprint, AI search strategy) follow in subsequent sessions per `TRACKING.md`.*
