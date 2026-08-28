# PART 4 — SXO + MOBILE UX + CRO + CTA + TRUST + LOCAL SEO + INTERNAL LINKING + ANCHOR TEXT AUDIT

**Audit date:** 2026-08-28
**Website:** https://klservisrumah.my (canonical host: https://www.klservisrumah.my)
**Framework:** Next.js 15 (App Router) hybrid SSG static export, Vercel CDN
**Scope of this report:** **Part 4 only** (Search Experience Optimization, Mobile UX, Conversion Rate Optimization, CTA, Trust/E-E-A-T, Local SEO, Internal Linking, Anchor Text, CRO page-by-page template, Competitor gap). Technical/crawl/indexation findings are in `PART-1-AUDIT-REPORT.md` (PR #170); on-page/content/semantic/entity findings in `PART-2-AUDIT-REPORT.md` (PR #171); AEO/GEO/LLMO/AI-search findings in `PART-3-AUDIT-REPORT.md` (PR #173). Cumulative Final Output A–N is consolidated in Part 5.

---

## EVIDENCE BASIS & METHODOLOGY

This report is **corpus-wide, not sampled.** A new purpose-built analyzer (`scripts/part4-audit.ts`) was run against the production build's 5,815 rendered HTML pages (`.next/server/app`; build verified green — prebuild 320,331 assertions / 0 failures, 5,823 pages generated, 5,815 `.html` files emitted). It measures, per page, the SXO / mobile / CRO / CTA / trust / local signals described in the sections below, and builds a full internal-link graph (407,199 internal links across 5,812 distinct targets) plus an anchor-text distribution.

Outputs: `docs/audit-part4-corpus.jsonl` (5,815 records), `docs/audit-part4-aggregate.json` (per-pattern aggregates), `docs/audit-part4-links.json` (inbound/orphan/overlink + anchor-text analysis). `npm run audit:links` (436,341 rendered links + 54 source links) reported **0 broken targets**; `audit:seo-head`/`audit:meta`/`audit:html` gates were passed as part of the green build. Everything is derived from the repo build; anything requiring Search Console, Google Business Profile, live review sources, competitor crawl data or owner confirmation is labelled **REQUIRES VERIFICATION**.

**Headline: the site's conversion plumbing is genuinely good — 100% of EN pages carry at least one WhatsApp and one `tel:` anchor, 100% have LocalBusiness/Organization/geo schema, every service page has a full CRO stack (what→price→process→why-us→FAQ→CTA), and the internal-link graph has 0 broken links. The Part 4 weaknesses are at the edges: the semantic reading order is broken by a long-standing layout defect (content sits after `</footer>`, `<main>` is just "Loading…"), the on-page review/trust proof is one JS-rotated testimonial with no structured-data counterpart, there is no on-page lead form in static HTML and no embedded map, the desktop "Book This Service" float only appears on service pages, and internal link equity is over-concentrated on hub index pages while their content children get 7–9 inbound each.**

---

## A. EXECUTIVE SUMMARY (Part 4 disciplines)

| Discipline (Part 4 scope) | Score /100 | One-line reason |
|---|---|---|
| **SXO — Search Experience Optimization** | **62** | Landing → answer → proof → CTA journey is coherent and fast; docked heavily for content-after-footer/empty-`<main>` (breaks landmark/flow navigation and inverts reading order on all 4,633 EN pages), and for the CRO stack not always answering "how long / what's included-excluded". |
| **Mobile UX** | **78** | Sticky WhatsApp+Call bar, adequate tap targets, max-scale 5 (zoom allowed), footer spacer eliminates overlap, no intrusive interstitials on mobile (exit-intent is desktop-only). Docked for 3–4 simultaneous floating CTA surfaces on service pages and always-on sticky bar. |
| **CRO — Conversion Rate Optimization** | **74** | Every commercial page answers what/where/how-much/why-us/how-it-works/warranty/how-to-book/how-to-contact via hero+pricing+process+comparison+FAQ. Docked for no static on-page lead form (all forms JS-gated), "how long" under-answered, and no explicit included/excluded scoping. |
| **CTA Audit** | **82** | WhatsApp + `tel:` on 100% of EN pages; on-page/hero/sticky/float CTAs consistent, locale-aware messages, page-specific service context. Docked for desktop "Book This Service" float limited to service pages only and CTA surface clutter. |
| **Trust / E-E-A-T** | **58** | Strong scaffolding (SSM, insured, per-service written warranty, comparison, before/after, featured projects, GoogleReviews). Docked for 1 SSR-visible testimonial vs "120+", no AggregateRating markup where reviews are shown, non-clickable project/before-after cards, no team bios/authors, unverifiable stats. |
| **Local SEO** | **72** | 36 rich area hubs (1,850 words, local FAQs, landmarks, dispatch times), 100% LocalBusiness/PostalAddress/geo/areaServed schema, consistent NAP. Docked for no embedded map, 3,654 parametric pair pages with no localized pricing, no local reviews/photos, NAP content-block gap on 5,813 pages. |
| **Internal Linking** | **70** | 0 broken links, 0 real orphans, healthy 90% descriptive / 7% generic / 0% branded anchor profile, hub→spoke to all content. Docked for hub index over-saturation (up to 22k inbound) vs 7–9 inbound on content children, and 28 under-linked pages (all 10 aircon problem pages at 1–2 inbound). |
| **Anchor Text** | **82** | 90% descriptive (service/area names), 7% generic, 0% exact-stuffing at scale — natural and over-optimization-free. Minor: 0% branded, 7% generic nav labels. |

---

## THE KEY NUMBERS (corpus-wide, VERIFIED)

| Metric | Value |
|---|---|
| Rendered pages analyzed | **5,815** (EN 4,633 / MS 591 / ZH 591) |
| Pages with ≥1 WhatsApp anchor (**EN**) | **4,633 / 4,633 (100%)** |
| Pages with ≥1 `tel:` anchor (**EN**) | **4,633 / 4,633 (100%)** |
| EN pages where **both** WhatsApp **and** `tel:` present | **4,633 (100%)** |
| LocalBusiness / Organization schema (**EN**) | **4,632 / 4,633 (100%)** · **4,633 (100%)** |
| PostalAddress / geo / areaServed schema (**EN**) | 100% / 100% / 100% |
| AggregateRating structured data (**EN**) | **only on tools (98% of 43 tool pages)**; **0 on homepage / service hubs / pricing** |
| Pages with NAP (phone+email+address) in the content block | **2 / 5,815** (contact, privacy) — footer NAP is 100% |
| EN pages rendering content **after** `</footer>` | **4,633 / 4,633 (100%)** |
| `<main>` element word count (mean, EN) | **~1 word ("Loading…")** — empty landmark everywhere |
| Sticky **mobile** WhatsApp+Call bar pages | **5,815 (100%)** (site-chrome) |
| Sticky desktop "Book This Service" float pages | **251** (29 service hubs + 222 sub-service pages only) |
| Internal links / distinct targets | **407,199 / 5,812** |
| Broken internal links (rendered + source) | **0** |
| True orphans (excl. `/ms`, `/zh` scaffolds, `/_not-found`) | **0** |
| Under-linked pages (<3 inbound) | **28** (all 10 aircon problem pages EN/MS/ZH + a handful of others) |
| Over-linked pages (top 1%) | **59** (14 hub index pages at 5,815–22,253 inbound each) |
| Anchor text: descriptive / generic / branded | **90% / 7% / 0%** |
| Embedded Google Maps `<iframe>` in corpus | **0** |

---

## 4.1 SXO — SEARCH EXPERIENCE OPTIMIZATION

**Journey verdict (verified from build + component review):** SERP → service page → estimator at the very top → hero (answer + price + warranty + trust) → overview/description → DirectAnswer → sub-service pricing → process timelines → decision tree → comparison ("us vs typical") → trust badges → FAQs → related problems/blogs/areas/services. This is a genuinely strong, coherent funnel; a user can go from query to a WhatsApp message with a contextual pre-filled message in under a minute.

### Findings

**P4-01 — CRITICAL: the semantic reading order is broken — `<main>` is an empty "Loading…" shell and all page content renders AFTER `</footer>`.**
- **Problem:** On all 4,633 EN pages the HTML places the real content in a sibling container **after** the closing `</footer>`, while the `<main id="main-content">` landmark contains only the word "Loading…".
- **Evidence (VERIFIED — build):** `node` inspection of `.next/server/app/index.html`: `<main …>` opens at char 37,426 and closes at 38,787 with body text `Loading...` (`<h1>` not inside main); the first `<h1>` (hero) is at char 86,494, **after** the last `</footer>` at char 56,650. Corpus: `pctContentAfterFooter=100%` and `meanWordsInMain≈1` for every EN pattern. Confirms and quantifies Part 2 P2-C1.
- **Affected:** all 5,815 pages (all three locales).
- **Severity: HIGH (SXO + a11y + AI-reading). Why it matters:** (1) screen-reader landmark navigation and "Headings/Browse" open on an empty main → user hears "Loading…"; (2) the `SkipToContentLink` target (`#main-content`) points at an empty element; (3) DOM flow reads footer→content, so a text-only crawler (or AI retrievers that do not execute JS — which `robots.txt` explicitly admits) perceives the footer/trust strip before the actual service answer; (4) it is the single root cause of the Part 3 "content after footer" AI extraction problem.
- **Recommended fix:** render the page content server-side **inside** `<main>` (the page components are `"use client"`; either move the presentational wrappers into the server layout and hydrate inside main, or restructure so the hydrated content mounts into a server-rendered `<main>` container). At minimum, ensure the content container is a child of `<main>` and the "Loading…" fallback is removed from SSR. **Priority: P0.**

**P4-02 — MEDIUM: hero/landing pages do not uniformly answer "If it's right/available" — the first impression relies on a full-viewport photographic slideshow with a quote form below the fold (mobile).**
- **Evidence (VERIFIED):** `app/(en)/page.tsx` order = Hero (slideshow) → SmartServiceFinder → TrustBar → TrustBadges → ServicesGrid → … → HomeCTA. On **mobile** the hero is `min-h-[calc(100svh-5rem)]` with the ContactBox moved to a separate section *after* the hero image, so the first screen is a photo + social proof + two CTAs; the service/area quote form requires a scroll. On **desktop** the form is present in right column.
- **Severity: MEDIUM. Why:** the highest-converting element (the service+area quote box) is below the fold on mobile, the largest mobile segment. The hero image also delays the H1/answer.
- **Fix:** on mobile, surface the quote box (or at least a 2-field mini-form) inside/at the top of the hero viewport, or reduce the hero to `min-h` smaller and place the form immediately after. **Priority: P1.**

---

## 4.2 MOBILE UX

**What is right (VERIFIED):** sticky mobile WhatsApp+Call bar (both buttons) is present on 100% of pages; the footer has `pb-[calc(7.5rem+env(safe-area-inset-bottom))]` on mobile so the sticky bar never covers the last links; viewport is `maximum-scale=5` (zoom allowed, accessibility-positive); typography scales (`text-4xl`→`text-6xl` hero, `text-sm` body); the header is `sticky top-0` with no hide-on-scroll (keeps nav + WhatsApp reachable); `backdrop-blur` was deliberately removed from the header to avoid the iOS Safari sticky compositing bug (documented in code).

### Findings

**P4-03 — MEDIUM: multiple simultaneous floating CTA surfaces create clutter and can obscure content.**
- **Evidence (VERIFIED):** `site-chrome.tsx` mounts a global floating WhatsApp dispatch desk (`components/ui/whatsapp-button.tsx`, `fixed bottom-6 right-6`, hidden on mobile) AND the sticky mobile bar (mobile only). On service hub + sub-service pages, `services/[slug]/page.tsx` also mounts `StickyBookButton` (`fixed bottom-20 right-4`). So a desktop service page shows **two** floating CTAs (WhatsApp desk + "Book This Service"), plus the hero CTAs and the code-distributed CTAs. On mobile, the sticky bar + hero edit form + section CTAs.
- **Severity: MEDIUM. Why:** competing/overlapping floating CTAs are a known CRO and SXO distraction; on a desktop service page the two floats (bottom-6 vs bottom-20, both right-aligned) stack close together.
- **Fix:** keep ONE primary floating action per viewport (e.g. WhatsApp desk globally; drop or re-position the sticky "Book This Service" so it does not compete), or gate the sticky book button to pages lacking the WhatsApp desk. **Priority: P2.**

**P4-04 — LOW: exit-intent popup is desktop-only and fires on a 30s timer regardless of exit intent.** `exit-intent-popup.tsx` opens on `mouseout` toward the top **or** a 30-second timeout, once per 30 days. The 30-s timer means an engaged reader is interrupted. Desktop-only (good — no mobile interstitial), reasonable frequency cap. **Severity LOW–MEDIUM** (popups penalised; the timer trigger mis-fires on intent). **Fix:** keep only the mouse-leave trigger, or make the 30-second trigger an explicit "second visit" affordance. **Priority: P2.**

---

## 4.3 CONVERSION RATE OPTIMIZATION

**The CRO checklist (verified per service hub — `components/sections/service-detail-content.tsx` + `service-detail-hero.tsx`):**

| CRO question | Answered? | Where |
|---|---|---|
| What service? | ✅ | H1, hero tagline, description |
| Where? | ✅ | "All KL & Selangor", ServiceAreaLinks, area list |
| How much? | ✅ | startPrice badge, sub-service price list, estimator |
| Why choose us? | ✅ | Comparison table (us vs typical), trust badges, direct-answer trust pills, highlights |
| How does it work? | ✅ | ProcessTimeline (5 steps) |
| **How long?** | ⚠️ **inconsistent** | process steps describe scope not duration; only 13 question-H2s across 29 service pages |
| What is included/excluded? | ⚠️ **implicit only** | sub-service descs + a single pricing-note; no explicit include/exclude list |
| Warranty? | ✅ | per-service warranty badge + warranty FAQ |
| How to book? | ✅ | WhatsApp + tel CTAs, estimator at top |
| How to contact? | ✅ | WhatsApp, tel, footer NAP, /contact |

### Findings

**P4-05 — HIGH: the desktop "Book This Service" floating CTA is only mounted on service hub + sub-service pages (251 pages), not on the highest-intent pages (homepage, /pricing, /tools, /problems, /areas, /blog).**
- **Evidence (VERIFIED):** `StickyBookButton` is imported only by `app/(en)/services/[slug]/page.tsx` and `app/(en)/services/[slug]/[subservice]/page.tsx`; corpus `pctStickyBookButton` = 100% on `/services/<svc>`, 91% on `/services/<svc>/<sub>`, and **0%** on `/`, `/pricing`, `/tools/<slug>`, `/problems/<p>`, `/areas/<area>`, `/areas/<area>/<svc>`, `/blog/<slug>`.
- **Severity: HIGH. Why:** the pages that drive the most commercial queries (pricing, tools, area×service, problems) have an "instant booking" path but no persistent booking float, so the closest-to-conversion float is limited to services. It also creates a UX inconsistency (same booking float present/absent). 
- **Fix:** mount `StickyBookButton` globally (or on pricing/tools/area×service at least) so the conversion path is persistent across the commercial funnel. **Priority: P1.**

**P4-06 — MEDIUM: no explicit "what's included / excluded" scoping on service pages.** The pricing section is a list of sub-services + one `AlertCircle` pricing note; the included/excluded boundary is implied by the descriptions and FAQ answers rather than a scannable inclusion/exclusion list. For a service with many variables (e.g. renovation, painting) this is a known abandonment trigger (uncertainty about what the quote covers). **Fix:** add a short "What's included / not included" block to the DirectAnswer or pricing section (2-column list) per service. **Priority: P1.**

**P4-07 — MEDIUM: no on-page lead capture form in static HTML; all forms are JS-gated.**
- **Evidence (VERIFIED):** the only `<form>` is the contact page's `MultiStepBookingForm` (a `"use client"` component — the `<input name=…>` elements are absent from static `/contact.html`), plus the hero quote box (client, opens WhatsApp). Corpus `hasForm` for `/` and `/contact` is JS-dependent; there is **no** server-rendered `<form>` anywhere, and no email/number capture beyond WhatsApp `tel:`.
- **Severity: MEDIUM. Why:** conversion depends entirely on WhatsApp + phone. There is no email lead capture, no "request a callback" form, no booking calendar; visitors not on WhatsApp have no non-telephony path, and non-JS crawlers see no form. Competitors (e.g. AAA Fix-It) offer an online quote form.
- **Fix:** add a static-SSR inquiry form (name/area/service/message) that posts to a light endpoint (or builds a `mailto:`/WhatsApp prefill) in the static HTML so it is indexable, JS-independent and captures non-WhatsApp leads. **Priority: P1.**

---

## 4.4 CTA AUDIT

**Verified inventory (per template, EN):**

| CTA type | Presence | Notes |
|---|---|---|
| WhatsApp (`wa.me`) | 100% of pages | locale-aware pre-filled messages (en/ms/zh) |
| `tel:` | 100% of pages | 
| Hero "Get Quote" form | `/`, /contact (JS) | service+area selects → WhatsApp |
| Estimator block | service hubs (top of page), tools | 
| "View Details" | services grid, cards |
| Sticky mobile bar (WA+Call) | 100% | mobile only |
| Sticky desktop "Book This Service" | **only service + sub-service** | P4-05 |
| Floating WhatsApp desk | 100% desktop |
| Exit-intent popup | desktop |

**P4-08 — LOW: CTA labels are generic and not action-ordered.** Primary buttons say "Book This Service", "WhatsApp", "Call us", "View Details" — no risk-reversal or time-specific copy, and the true "Get a fixed quote first" value prop appears only in the exit popup, not in the primary hero CTAs. Given the business's strongest differentiator (fixed itemised quote, no deposit), the primary CTA wording should lead with that ("Get Your Fixed Quote"). **Priority: P2.**

---

## 4.5 TRUST / E-E-A-T AUDIT

**What is right (VERIFIED):** every service page has a per-service written warranty badge, an on-page comparison table ("us vs typical"), trust badges row (insured, SSM, transparent), a DecisionTree and DirectAnswer trust pills; the footer has a 4-item trust strip; Homepage has GoogleReviews, FeaturedProjects, BeforeAfter, StatsCounter. This is a solid trust scaffold.

### Findings

**P4-09 — HIGH: "4.9/5 (120+ Google Reviews)" is displayed site-wide with NO AggregateRating structured data on the pages that show it, and only ONE testimonial is in static HTML.**
- **Evidence (VERIFIED):** corpus `pctAggregateRating=0%` on `/`, `/services/<svc>`, `/pricing`, `/about`, `/areas/<area>`; the only `AggregateRating` in the corpus is on tool pages (98% of 43 tools) via `SoftwareApplication.aggregateRating` (`lib/estimator/schema.ts`) — i.e. the rating is attached to a **calculator**, not the business. The homepage GoogleReviews section (`components/sections/google-reviews.tsx`) renders `4.9/5 · {reviewCount}+ reviews` and `Based on {reviewCount}+ reviews`; the review carousel SSR-renders only the first testimonial (`Ahmad Razak`) — grep confirms only 1 of the 4 reviewer names appears in `index.html`; the other 3 are JS-rotated. (See also P3-07/P3-09 on review-count ambiguity 120 vs "120+".)
- **Severity: HIGH. Why:** (a) Google can't show review stars from the site's own markup on the pages people see; (b) the visible "120+ reviews" trust claim has no markup and its count is unverifiable; (c) a single SSR testimonial does not substantiate a 120-review claim; (d) putting the business's aggregate rating on a calculator page is semantically wrong.
- **Fix:** add `aggregateRating` (and a small set of `Review` items) to the LocalBusiness/Organization schema on the homepage + service hubs + pricing (from verified data only — see M3 owner verification); remove the `aggregateRating` from the tool `SoftwareApplication` (unverified rating on a non-reviewable entity). Ensure ≥3 reviews are server-rendered. **Priority: P1 (after owner verification of review count/source — REQUIRES VERIFICATION).**

**P4-10 — MEDIUM: FeaturedProjects & BeforeAfter trust cards are non-clickable and text-only.** `featured-projects.tsx` renders project cards where the `ArrowUpRight` is a decorative `<span>` (not a link) and there are no project detail pages or real project photos in the card; `before-after.tsx` cards likewise have no CTA. The trust proof is inert — a visitor cannot "see more" on a project, and there is no case-study URL to link/reference. The claims ("Completed in 4 days", "Completed in 3 hours") are also unverifiable (REQUIRES VERIFICATION). **Fix:** either link each card to a real project/case-study page (or the `/projects` hub) with a proper `href`, or remove the inert arrow. **Priority: P2.**

**P4-11 — MEDIUM: no author/team/Experience signals.** No named service authors, no team-member bios, no "meet the team" block, no supplier/brand certifications beyond a brands list; the homepage AEO hub still claims *"Every page is written by local tradesmen and updated for {year}"* (see P3-09) with no named authors. This caps the **Experience** pillar of E-E-A-T. **Fix:** add named, credentialled authors/editors (with bio schema) and a team page; remove/re-attribute the unverifiable "written by local tradesmen". **Priority: P1.**

---

## 4.6 LOCAL SEO

**What is right (VERIFIED):** 36 rich area hub pages (`/areas/<area>`, 1,850 words mean, local landmarks, local FAQs, dispatch times, state/lat/lng/population); 100% LocalBusiness/Organization/PostalAddress/GeoCoordinates/areaServed schema on every page; consistent NAP (footer) and consistent phone format; GBP link; local breadcrumbs; a curated footer area block (top 8) plus a big area grid on `/areas`; trilingual local pages.

### Findings

**P4-12 — MEDIUM: no embedded Google map on any page, and `hasMap` points at a Google Business *share* URL, not a map.**
- **Evidence (VERIFIED):** `grep -r <iframe` across the corpus → **0** embedded maps; `siteConfig.googleMapsEmbed`/`googleBusiness` = `https://share.google/7GZef2rDjtRuqW2h1`, which is referenced as schema `hasMap` on every page (11,629 occurrences) but is not an embeddable map and not a `Map`/`GeoShape` object.
- **Severity: MEDIUM. Why:** a visible coverage map is a local-UX and local-trust signal (users want to confirm you cover their neighbourhood); the location pages list names but no map. `hasMap` should be a map URL.
- **Fix:** add an interactive coverage map on `/areas` and the area hubs (a lightweight map; e.g. an `<iframe>` map pointing at a real embeddable map of the service radius, or a GeoJSON silhouette), and set `hasMap` to a valid map URL. **Priority: P1.**

**P4-13 — MEDIUM: the 3,654 programmatic area×service & suburb×service pages use site-wide pricing, not area pricing, and carry 0 local-context Q&A.** The area×service page (`LocaleAreaServiceView`) interpolates the **site-wide** `startPrice` for its "How much does {service} cost in {area}?" FAQ and H1, and reuses the pair-body (P2-C4) with 0 question H2s and 3 template FAQs (P3-03). No area-specific price evidence, no local photos/reviews, no local response-time proof beyond a generic string. For a business for which "how much in {suburb}" is the highest-intent local query, this is a missed conversion opportunity and a cannibalization risk (every area×service page competes on the same price + body). **Recommendation:** (per Part 1 P0 index restructure) keep a curated set of genuinely-covered, demand-driven area×service pages, add 2–3 area-specific price/response questions with real data, and noindex/merge the rest. **Priority: P1 (dependent on Part 1 P0).**

**P4-14 — LOW: no location-specific schema beyond generic areaServed; no `Service`-per-area with local coordinates.** `getLocalBusinessServiceSchema(area, service)` exists in `lib/seo.ts`, and area×service pages reference area `GeoCoordinates`, but the LocalBusiness schema on generic pages uses a single city + a GeoCircle of the whole Klang Valley rather than per-@id area entities. **Fix (Part 5):** emit per-area `Service` nodes keyed by area `@id` so engines can associate service+city pairs. **Priority: P2.**

**P4-15 — LOW: NAP only in footer on 5,813/5,815 pages (P3-10).** Local/AI chunk-level extraction finds no phone/email/address in the content block. Add a one-line contact strip to the end of service/problem bodies (also a CRO win). **Priority: P2.**

**Local-search demand note (REQUIRES VERIFICATION):** which of the 36 areas actually have search demand, and which deserve a *dedicated* page vs a subsection, is not verifiable without GSC/keyword data. Per the Part 4 prompt, do **not** recommend creating more location pages for keywords alone — the existing set is generous (36 areas + 1,508 suburb pages). The higher-value move is to make the existing area×service tier genuinely local (P4-13) rather than add more.

---

## 4.7 INTERNAL LINKING

**What is right (VERIFIED):** `audit:links` — 436,341 rendered links + 54 source links, **0 broken**; 0 true orphans (`/ms`, `/zh` scaffolds, `/_not-found` only); every hub is linked from a server-rendered footer link; related-services/problems/blogs/areas on every service page; breadcrumbs + `homepage-aeo-links` hub; crawl path to near-me variants (Part 1 fix).

### Findings

**P4-16 — MEDIUM: link equity is over-concentrated on hub index pages while their content children are under-linked (7–9 inbound each).**
- **Evidence (VERIFIED):** `docs/audit-part4-links.json` inbound-by-pattern (EN):
  - Hub indexes (linked from every page via footer `EXPLORE_LINKS`): `/areas` **22,253**, `/about` 17,445, `/blog` 12,063, `/pricing` 11,945, `/contact` 11,858, and each of `/guides`, `/projects`, `/faq`, `/near-me`, `/answers`, `/process`, `/compare`, `/top`, `/brands`, `/residential`, `/commercial`, `/seasonal` ≈ **5,815** (one per page).
  - Content children: `/services/<svc>/emergency` avg **7.1**, `/answers/<slug>` **7.2**, `/process/<slug>` **7.2**, `/brands/<slug>` **7.9**, `/commercial/<slug>` **8.0**, `/residential/<slug>` **8.0**, `/services/<svc>/cost` **8.4**, `/compare/<slug>` **8.7**, `/guides/*` **8.7**, `/blog/<slug>` **9.2**.
- **Severity: MEDIUM. Why:** the hub index pages (many of which are thin/front-door pages — see P2-C3 and Part 1 P0) absorb enormous internal equity while the actual supporting/converting children that live behind them get almost none. A flat 14-item footer "Explore" block also gives every hub equal weight regardless of revenue/topical value.
- **Fix:** (a) tier the footer — a curated "Top services / Top areas" block (already partially done) plus a **value-tiered** Explore list (drop or de-emphasise the 10 + pods hub indexes that lead nowhere, since Part 1 P0 likely trims them); (b) increase cross-linking from the heavily-linked service/area hubs into the low-inbound children (cost pages, process pages, answers pods) — e.g. link `/services/<svc>/cost` from the service hero and the pricing page; (c) once Part 1's index restructure is applied, the pods will be collapsed and this rebalances naturally. **Priority: P1.**

**P4-17 — LOW: 28 pages under-linked (<3 inbound), all 10 aircon problem pages (EN/MS/ZH) at 1–2 inbound, plus a few others.**
- **Evidence (VERIFIED):** under-linked sample includes `/problems/aircon-*` (10 topics × 3 locales = 30, several at 1–2), plus `/problems/epoxy-floor-yellowing`, `/problems/popping-tiles-buckling`, `/problems/uneven-floor-subfloor-leveling`, `/problems/wall-cracks-settlement-masonry`, `/problems/damaged-gypsum-partition-wall`, `/problems/old-bathroom-plumbing-tiles`, `/problems/old-kitchen-cabinet-plumbing-damage`, `/problems/ikea-furniture-assembly-help`, `/problems/burst-pipe-emergency`, `/problems/cracked-roof-tiles`, `/problems/vinyl-flooring-lifting-edges`.
- **Severity: LOW–MEDIUM. Why:** aircon is a flagship, price-led service (RM 129) but its problem/symptom pages (the classic "aircon not cold"/"aircon leaking" local queries) receive almost no internal equity — they are reachable only via the problems index/hub. **Fix:** surface 4–6 aircon problems from the aircon service page's RelatedProblems (raise `maxItems` / add aircon-specific related-problems), and link aircon tools ↔ aircon problems. **Priority: P1 aircon only.**

---

## 4.8 ANCHOR TEXT

**Verified distribution (across 407,199 internal links):** descriptive **90%** (service titles, area names, problem titles), generic **7%** ("Home", "Pricing", "View Areas", "View All", "Read more", "Book This Service", "Back to homepage"), branded **0%**.

- **P4-18 — LOW: profile is healthy and over-optimization-free.** No exact-match keyword stuffing at scale; anchors are natural service/area names. Two minor points: (a) the 7% generic includes a handful of frequently-repeated UI labels (fine but worth varying the "View Areas"/"View All" set); (b) **0% branded** anchors mean the brand is never used as internal anchor (acceptable for Google, but the brand is not reinforced internally either). No action required beyond noting the generic-label ratio. **Priority: P3.**

---

## 4.9 CRO PAGE-BY-PAGE TEMPLATE (recommended vs actual)

| Template | Hero + value prop | Answer / price | Process | Proof (reviews) | FAQ | Service areas | CTA / contact | Gap |
|---|---|---|---|---|---|---|---|---|
| Homepage | ✅ hero + slideshow + social proof | ✅ smart-finder, trust bar | ✅ process | ⚠️ GoogleReviews (1 SSR) | ✅ | ✅ | ✅ | mobile quote box below fold (P4-02); no static form (P4-07) |
| Service hub (29) | ✅ | ✅ estimator at top + price | ✅ | ❌ no on-page reviews | ✅ | ✅ | ✅ (double float, P4-03) | no include/exclude (P4-06); no reviews (P4-09) |
| Service sub-page (222) | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | 91% sticky float; how-long gap |
| Service cost (29) | ✅ | ⚠️ no DirectAnswer (P3-04/P3-05 unit-less) | ❌ | ❌ | ✅ | ❌ | ✅ | under-linked 8.4 (P4-16); no literal "how much" (P3-04) |
| Area hub (36) | ✅ | ✅ | ⚠️ | ❌ local reviews | ✅ | ✅ | ✅ | no map (P4-12); area price evidence small |
| Area×service + near-me + suburb×service (3,654) | ✅ | ⚠️ site-wide price | ❌ | ❌ | 3 generic Qs | — | ✅ | parametric pair copy; no local Q&A; candidates for trim/noindex (P4-13) |
| Problem (74) | ✅ | ✅ cost | ✅ with causes/fix | ❌ | ✅ | ✅ | ✅ | thin bodies (P2-16); no reviews |
| Blog (216) | ✅ | ✅ | ⚠️ | ❌ | ✅ | @ | ✅ | no authors (P4-11); how-to durations |
| Tool (43) | ✅ | ✅ estimators | ✅ | ✅ (SoftwareApp.aggregateRating — misplaced, P4-09) | ✅ | ✅ | ✅ | rating on non-reviewable entity |
| Contact | ✅ | ✅ | — | ❌ | ✅ | ✅ | ✅ | form JS-gated (P4-07); no map |
| Pricing | ✅ | ✅ full catalog | — | ❌ | ✅ | ✅ | ✅ | no AggregateRating (P4-09) |

---

## 4.10 COMPETITOR GAP

**Note on method:** per the Part 4 prompt, **no competitor metrics are invented** — I have no crawl/backlink/traffic/GSC access. Only the presence of named businesses and publicly stated attributes are reported; all comparative quantitative claims are **REQUIRES VERIFICATION**.

**Named KL/Selangor home-services competitors (verified as existing operators via web search, 2026-08-28):**
- **AAA Fix-It** (aaa.my) — one-stop handyman (painting, plumbing, electrical, aircon, home improvement); "Get a free quote" via an **online quote form**; no listed prices; office hours Mon–Fri 9–6, Sat 9–1.
- **Double A Home Maintenance Enterprise** (aahme.com.my) — one-stop home maintenance across KL/Selangor; **24/7 emergency** support; painting, plumbing, tiling, flooring, ceiling, handyman, aircon, waterproofing, glass & aluminium; founded 2021.
- **FS Renovation** — KL/Selangor home improvement + renovation (bathroom/kitchen, plaster ceiling, electrical, aircon, plumbing, handyman); "affordable"; service page.
- **AW Builders Malaysia** — residential/commercial/industrial renovation; electrical, piping, steel fabrication, joinery.
- **TenQ Group** — CIDB **Grade 7**; renovation with in-house team, clear budgeting, timely updates (KL/Selangor).
- **HIN Group** (Hin Construction Sdn Bhd) — residential/commercial/industrial; painting across KL/PJ/Selangor.
- **Express Plumber** — WhatsApp-first plumbing; flexible scheduling, short turnaround.
- **Nego Painting Services** — residential/commercial/industrial painting; open 24 hours; contact number listed.
- (Also: **Loh Wei Plumbing & Renovation**, **Wall Tailor**, **Painting Service Pro** — the latter offers a "100% money-back guarantee".)

**Where KL Servis Rumah is ahead (VERIFIED on-site):** published starting **prices** (most competitors list none) + published **warranties**; trilingual (EN/MS/ZH) pages; 43 interactive **estimator** calculators; `llms.txt`/`llms-full.txt`/`aeo-faq.txt` AI-context ecosystem; very high schema density (LocalBusiness/Organization/geo/areaServed/FAQ/HowTo/Speakable); 100% WhatsApp+tel coverage.

**Where competitors are ahead (VERIFIED attribute, not metric):** AAA Fix-It offers an **online quote form** (KL Servis Rumah has none in static HTML — P4-07); Double A advertises **24/7** emergency (KL Servis Rumah says Mon–Sun 9am–6pm); TenQ advertises a **CIDB Grade 7** qualification (KL Servis Rumah publishes no CIDB/qualification badge); several publish **address** + third-party review counts/placements; Express Plumber is WhatsApp-first like KL Servis Rumah.

**Gaps / priorities:** (1) add a static online quote/callback form (competitor parity + lead capture); (2) surface a verifiable qualification/insurer badge (licensed, CIDB/ST, insurance) since it is a differentiator the site only implies; (3) make the local pages genuinely local (map + local prices + local proof) to beat competitors who are generic; (4) after owner verification, publish real review counts/sources. **All quantification of traffic/rankings/backlinks/AI-citations/review-counts for any competitor is REQUIRES VERIFICATION.**

---

## B. CRITICAL ISSUES (Part 4)

| ID | Issue | Severity | Evidence | Affected | Fix | Priority |
|---|---|---|---|---|---|---|
| P4-01 | `<main>` is an empty "Loading…" shell; content renders after `</footer>` | **CRITICAL** | index.html: main=3,7426–38,787 ("Loading…"), h1@86,494, `</footer>`@56,650; corpus 100%/main≈1 word | all 5,815 pages | server-render content inside `<main>` | **P0** |
| P4-05 | Desktop "Book This Service" float only on service+sub-service (251 pages), absent on pricing/tools/problems/areas | HIGH | corpus pctStickyBookButton=100%/91%/0-all-others | 251 pages + all non-service commercial pages | mount StickyBookButton globally or on commercial templates | **P1** |
| P4-09 | "4.9/5 · 120+ reviews" shown site-wide with **no** AggregateRating markup where shown; only 1 testimonial in static HTML; rating only on tool SoftwareApplication | HIGH | corpus pctAggregateRating=0% on /,services,pricing; grep only 'Ahmad Razak' in index.html; AggregateRating only on tools | homepage, service hubs, pricing, /about | add AggregateRating+Review to LocalBusiness/Organization; remove from tool schema; SSR ≥3 reviews | **P1** |
| P4-07 | No on-page lead form in static HTML; all forms JS-gated; lead capture only via WhatsApp/tel | MED–HIGH | corpus hasForm=JS-only; contact.html has no `<input name=…>`; no `<form>` SSR | /, /contact, all | add static inquiry/callback form (or mailto/WhatsApp prefill) | **P1** |
| P4-12 | No embedded map anywhere; `hasMap` = Google Business share URL | MED | 0 `<iframe>` in corpus; hasMap=share.google | /areas, area hubs, contact | embed coverage map; fix hasMap | **P1** |
| P4-13 | 3,654 area×service/suburb×service use site-wide pricing + parametric body, 0 local Q&A, no local proof | MED | LocaleAreaServiceView interpolates site-wide startPrice; P2-C4 / P3-03 | 3,654 URLs (Part 1 P0) | curate/keep + localize or noindex/merge | **P1** (dep. P0) |
| P4-16 | Link equity over-concentrated on hub indexes (5,815–22,253) vs content children 7–9 | MED | audit-part4-links.json inboundPatterns | hub indexes + pods/cost/process/answers | tier footer, cross-link children, apply Part 1 P0 | **P1** |
| P4-02 | Mobile quote box below the fold; hero is full-viewport slideshow | MED | app/(en)/page.tsx order; hero min-h calc | mobile homepage | surface quote box / mini-form in hero viewport | **P1** |
| P4-06 | No explicit included/excluded scoping on service pages | MED | service-detail-content.tsx (AlertCircle note only) | 29 service hubs | add include/exclude list | **P1** |
| P4-10 | FeaturedProjects / BeforeAfter cards non-clickable, text-only, unverifiable | MED | featured-projects.tsx (decorative ArrowUpRight span), no project pages | homepage | link cards to case-study/proj pages or remove inert arrow | **P2** |
| P4-11 | No author/team/Experience signals; "written by local tradesmen" unverifiable | MED | homepage-aeo-links.tsx; no author bios | homepage, blog, /about | named authors + team page + bio schema | **P1** |
| P4-03 | Multiple simultaneous floating CTAs on desktop service pages; exit-intent 30s timer | MED | site-chrome.tsx + service page + exit-intent-popup.tsx | desktop service pages | consolidate to one float; keep mouse-leave only | **P2** |
| P4-14 | Generic-area LocalBusiness lacks per-area Service nodes | LOW | lib/seo.ts getLocalBusinessServiceSchema | generic LocalBusiness | per-area Service entities (Part 5) | **P2** |
| P4-15 | NAP content-block gap on 5,813 pages | LOW–MED | corpus pctNapInContent=0% (except contact/privacy) | 5,813 pages | contact strip in content | **P2** |
| P4-17 | 28 under-linked pages incl. all 10 aircon problem pages (1–2 inbound) | LOW–MED | audit-part4-links.json underlinkedSample | aircon problems + a few others | related-problems from aircon service/tools | **P1 aircon** |
| P4-18 | Anchor profile healthy; minor generic-label ratio / 0% branded | LOW | anchorCategories 90/7/0 | all | no action required | **P3** |
| P4-04 | Exit-intent popup 30s timer fires without intent | LOW–MED | exit-intent-popup.tsx | desktop | mouse-leave only | **P2** |
| P4-08 | Primary CTA copy doesn't lead with "fixed quote" differentiator | LOW | hero/CTA copy | all CTAs | reword primary CTA | **P2** |

---

## C. QUICK WINS (Part 4)

1. **Move content into `<main>`** (P4-01) — one structural change fixes landmark nav, skip-link, reading order and the Part 3 AI extraction problem in one shot. (P0; larger than a "quick win" but the highest-leverage single fix.)
2. **Mount `StickyBookButton` globally / on commercial templates** (P4-05) — one file, instant persistent conversion float.
3. **Add AggregateRating+Review to homepage/service/pricing LocalBusiness schema** (P4-09) — one `lib/seo.ts` edit; enables review stars from the site's own markup (after owner verifies review count).
4. **Remove the `aggregateRating` from the tool `SoftwareApplication`** (P4-09) — removes semantically-wrong rating on a calculator.
5. **Link `/services/<svc>/cost` from the service hero and `/pricing`** (P4-16) — 29 pages, raises the "how much" page from 8.4 inbound.
6. **Surface 4–6 aircon problems from the aircon service page** (P4-17) — unblocks the flagship service's under-linked symptom pages.
7. **Add a one-line contact strip to service/problem bodies** (P4-15) — content-level NAP + CRO.
8. **Make FeaturedProjects cards real links** (P4-10) — 4 cards, instant trust interactivity.
9. **Add an include/exclude mini-list to service pages** (P4-06).
10. **Add a visible coverage map** (P4-12).

---

## D. BIG PROJECTS (Part 4)

1. **Restructure the programmatic local tier** (P4-13, tracking Part 1 P0): decide keep/merge/noindex for the 3,654 area×service/suburb×service pages; for the kept set, author genuinely local price/response-time content. Larger SEO/strategy project.
2. **Static SSR lead form + backend (or mailto/WhatsApp prefill)** (P4-07) — new endpoint/component; dev + privacy work.
3. **Team/author/Experience layer** (P4-11) — team page, author bios, bio schema, re-attribute "written by local tradesmen"; content + dev.
4. **Hub-tilde restructuring** (P4-16) — after Part 1 P0 index trim, rebuild footer/hub tiering and cross-link so content children inherit equity from service/area hubs.
5. **Real Google Business/GBP + review integration** (P4-09/P4-12) — verify/enable GBP (owner task), fetch reviews, live map embed; owner access required.

---

## E. 5,000+ PAGE ACTION MATRIX (Part 4 focus — full matrix consolidated in Part 5)

| URL pattern | Count | Verdict | Rationale (Part 4) |
|---|---|---|---|
| `/services/<svc>` (29) | KEEP | strong CRO/trust; fix include/exclude + reviews + `<main>` (P4-01/06/09) | |
| `/services/<svc>/<sub>` (222) | KEEP | strong; tidy float (P4-03/05) | |
| `/services/<svc>/cost` (29) | **IMPROVE** | add DirectAnswer + literal "how much"; cross-link (P4-16, P3-04/05) | |
| `/services/<svc>/emergency` (29) | REVIEW | under-linked (7.1); keep if real emergency intent else noindex (P2-16) | |
| `/areas/<area>` (36) | KEEP | rich; add map (P4-12) + per-area schema (P4-14) | |
| `/areas/<area>/<svc>` + `/near-me` + `/suburbs/<suburb>/<svc>` (3,654) | **RESTRUCTURE / NOINDEX (kept set)** | parametric, site-wide price, 0 local Q&A, cannibalization (P4-13, Part 1 P0, P2-C4, P3-03) | |
| `/problems/<p>` (74) | KEEP | strong; fix aircon-problem linking (P4-17), expand thin bodies (P2-16) | |
| `/blog/<slug>` (216) | KEEP | add authors (P4-11), FAQPage/H2 (P3-06), real dates (P2-19) | |
| `/tools/<slug>` (43) | KEEP | remove misplaced aggregateRating (P4-09) | |
| `/pricing` | KEEP | add AggregateRating (P4-09) | |
| Content pods `/commercial`, `/residential`, `/process`, `/answers`, `/brands`, `/top`, `/seasonal`, `/compare`, `/guides` children (≈205) | **RESTRUCTURE / MERGE** | EN-only generic, child pages 7–9 inbound, doorway-template risk (P2-C3, P3-08, P4-16) | |
| Hub indexes `/brands`, `/residential`, `/commercial`, `/seasonal`, `/top`, `/guides`, `/process`, `/answers`, `/compare`, `/projects` | **RESTRUCTURE** | 5,815 inbound each but thin front doors; rebalance after Part 1 P0 (P4-16) | |
| `/` | KEEP | fix `<main>` (P4-01) + mobile quote box (P4-02) + review markup (P4-09) | |
| `/about` | IMPROVE | trim unconumerite stats, add team/authors (P4-11, P3-09) | |

---

## F. PAGE TEMPLATE AUDIT (Part 4-specific gaps; full in §4.9 above)

- **Homepage:** strong; fixes P4-01/P4-02/P4-09/P4-07.
- **Service hub/sub:** strongest CRO template; fixes P4-05/P4-06/P4-09/P4-03.
- **Cost pages:** weakest commercial template (no DirectAnswer literal, under-linked). **P3-04/P3-05/P4-16.**
- **Area hub:** strong + rich; add map + per-area schema. **P4-12/P4-14.**
- **Area×service / near-me / suburb×service:** parametric; restructure. **P4-13.**
- **Blog:** deep but no authors, no FAQPage, stale dates, how-to durations. **P4-11/P3-06/P2-19.**
- **Contact:** form JS-gated, no map. **P4-07/P4-12.**
- **Pricing:** full catalog, no AggregateRating, unit-less entries in llms. **P4-09/P3-05.**
- **FAQ hub / tools:** covered in Part 3 (P3-02/P3-11) + P4-09.

---

## G. INTERNAL LINKING BLUEPRINT (Part 4 focus)

**Current:** service-hub → related services/problems/blogs/areas (maxItems 4/3/8/6); footer top-8 services + top-8 areas + flat 14-item Explore; `homepage-aeo-links` hub (top 8 services/areas/problems + 5 tools); server-rendered footer links fix the once-orphaned hubs.

**Recommended deltas:**
1. **Pillar hub → cluster children**: service hub should link to its own cluster (cost page, 4–6 problems, top blogs, area×service kept set) with *descending* equity; the cost page and emergency page are currently the weakest-linked of each service.
2. **Service ↔ local**: each service hub → a curated 6–10 kept area×service pages (real coverage only) with descriptive anchors; rewire the near-me crawl path (already done).
3. **Problem → service + tool**: each problem page → the owning service + a relevant estimator (raises aircon problems from 1–2 inbound).
4. **Tier the footer**: replace the flat 14-item Explore with a value-tiered block (Top services / Top areas / Tools & guides) and move the low-value pods (brands, seasonal, top, commercial, residential, process, answers, compare) into an "Explore more" grouped col or drop after Part 1 P0.
5. **Don't over-link hubs**: the hub indexes are already saturated (5,815+); redistribute to the content children.

---

## H. TOPICAL AUTHORITY MAP (Part 4 note; full in Part 5)

The topical map (29 services, 222 specialties, 74 problems, 216 blogs, 43 tools) is healthy and validated (`audit:topical-map` 29/29 services + 222 specialty relationships). The weak axis is **local topicality**: the 3,654 local pages are duplicates of the service pillar (P4-13), so the location-silo authority is thin and cannibalising. Reinforcing local topicality (local prices, local response-time, local landmarks/proof on a curated kept set) will add authority where it's missing; machine-generating more location pages would not.

---

## I. AI SEARCH STRATEGY (Part 4 note — deep-dive in Part 3)

The Part 3 strategy applies; the Part 4 SXO/trust findings that also gate AI citation quality are: **P4-01** (content after footer — AI extractors read footer-first) and **P4-09** (unverifiable/undermarked reviews, rating attached to a calculator). Fixing these raises AI trust. No Part-4-only AI engine changes.

---

## J. PRIORITY SCORE (Part 4 items)

| Item | SEO /10 | Business /10 | AI Visibility /10 | Difficulty /10 | Priority |
|---|---|---|---|---|---|
| P4-01 `<main>` + content ordering | 9 | 6 | 8 | 5 | **P0** |
| P4-05 StickyBookButton global | 4 | 8 | 3 | 2 | **P1** |
| P4-09 AggregateRating/Review + remove tool rating | 8 | 8 | 7 | 2 | **P1** |
| P4-07 static lead form | 6 | 9 | 4 | 4 | **P1** |
| P4-12 map embed | 7 | 6 | 4 | 3 | **P1** |
| P4-13 local page restructure | 8 | 7 | 5 | 7 (dep. P0) | **P1** |
| P4-16 link-tiering | 7 | 4 | 4 | 4 | **P1** |
| P4-02 mobile quote box | 5 | 6 | 3 | 3 | **P1** |
| P4-06 include/exclude | 4 | 6 | 2 | 2 | **P1** |
| P4-11 team/authors (E-E-A-T) | 6 | 5 | 7 | 4 | **P1** |
| P4-10 clickable project cards | 3 | 5 | 2 | 1 | **P2** |
| P4-03 float consolidation | 2 | 4 | 1 | 2 | **P2** |
| P4-14 per-area Service schema | 5 | 3 | 4 | 3 | **P2** |
| P4-15 NAP content strip | 3 | 3 | 3 | 1 | **P2** |
| P4-17 aircon problem linking | 4 | 5 | 3 | 1 | **P1 aircon** |
| P4-04 exit-intent timer | 1 | 2 | 1 | 1 | **P2** |
| P4-08 CTA copy | 2 | 4 | 1 | 1 | **P2** |
| P4-18 anchor profile | 1 | 1 | 1 | 0 | **P3** |

---

## K. DEVELOPER TASK LIST (Part 4)

| # | Task | Reason | Affected | Acceptance criteria |
|---|---|---|---|---|
| K1 | Restructure rendering so page content mounts inside `<main>` (remove SSR "Loading…" shell / move content container into main) | P4-01 | page templates + layouts | `<main>` contains the `<h1>` and body in `.next/server/app/index.html`; `meanWordsInMain` > 200; skip-link targets real content |
| K2 | Mount `StickyBookButton` globally (or on pricing/tools/problems/area×service) | P4-05 | service pages + templates | `pctStickyBookButton` > 95% on commercial templates |
| K3 | Add `aggregateRating` + `Review[]` to LocalBusiness/Organization schema; remove `aggregateRating` from tool `SoftwareApplication` | P4-09 | `lib/seo.ts`, `lib/estimator/schema.ts` | `/`, `/services/<svc>`, `/pricing` have AggregateRating; tools do not |
| K4 | Add a static-SSR inquiry/callback form (or `mailto:`/WhatsApp prefill) with an API route | P4-07 | new endpoint + contact/form components | `<form>` and inputs present in static HTML; non-JS path works |
| K5 | Add embeddable coverage map on `/areas` + area hubs; set `hasMap` to a valid map URL | P4-12 | `/areas`, area pages, `config/site.ts` | visible map iframe; schema hasMap valid |
| K6 | Link `/services/<svc>/cost` from service hero + `/pricing`; add cost pages to related-services | P4-16 | service-detail-hero, pricing page | cost pages > 20 inbound each |
| K7 | Surface aircon problems from aircon service page + aircon tools (raise RelatedProblems / add related) | P4-17 | aircon service + tools | `/problems/aircon-*` inbound ≥ 4 |
| K8 | Make FeaturedProjects / BeforeAfter cards real `<Link>`s (or remove inert arrow) | P4-10 | featured-projects, before-after | cards clickable to a case-study/projects page |
| K9 | Add include/exclude list to service pages | P4-06 | service-detail-content | each service shows included/excluded |
| K10 | Add one-line contact strip (NAP) to service/problem bodies | P4-15 | service/problem templates | content-block NAP present on those templates |
| K11 | Tier/restructure footer Explore and hub linking | P4-16 | footer.tsx, all-pages-menu | pod/child inbound rebalanced |

## L. CONTENT TEAM TASK LIST (Part 4)

| # | Task | Reason |
|---|---|---|
| L1 | Add 2–3 genuinely local price/response Q&As to the *kept* local pages (real area pricing) | P4-13 |
| L2 | Add "How long does {service} take in KL?" + include/exclude answers to service pages | P4-02/P4-06 |
| L3 | Author real case-study pages for the featured projects (with photos) and link the cards | P4-10 |
| L4 | Create a Team/About page with named, credentialled members; re-attribute authorship | P4-11 |
| L5 | Replace unverifiable project/stat/testimonial claims with verified facts (owner) | P4-09/P4-10 REQUIRES VERIFICATION |

## M. SEO TEAM TASK LIST (Part 4)

| # | Task | Reason |
|---|---|---|
| M1 | After K1/K3: re-run `audit:seo-head`, `audit:meta`, corpus Part 4 analyzer — expect `pctContentAfterFooter=0%` for the fixed templates and `AggregateRating` present where reviews shown | P4-01/P4-09 |
| M2 | Track GSC "Pages"/"Queries" for the 3,654 local tier after the Part 1 P0 restructure; confirm no cannibalization | P4-13 REQUIRES VERIFICATION (GSC access needed) |
| M3 | Coordinate with owner to verify review source/count (120 vs "120+"), project counts ("1,200+", per-project "Completed in X"), respondent times, qualification badges (CIDB/ST/insurance) | P4-09/P4-10/P3-09 REQUIRES VERIFICATION |
| M4 | Submit updated sitemap + IndexNow after map/lead-form/restructure (owner-side, blocked) | indexation |
| M5 | Monitor Bing/AI citation of the new map + NAP (owner-side, blocked) | P4-12/P4-15 |

---

## N. WHAT IS WRONG WITH THIS WEBSITE? (Part 4 scope)

### 20 biggest SXO/CRO/trust/local/linking weaknesses
1. Content sits AFTER `</footer>` and `<main>` is "Loading…" on all 5,815 pages — landmark nav, skip-link and reading order all break.
2. "4.9/5 · 120+ reviews" has no AggregateRating markup on the pages that show it; the only rating is on the tool calculators.
3. Only 1 of 4 homepage testimonials is in static HTML; all 3 others JS-rotated.
4. No on-page lead form in static HTML; conversion is 100% WhatsApp/tel, form JS-gated on /contact.
5. No embedded Google Map anywhere; `hasMap` points at a GPS share link.
6. Desktop "Book This Service" float absent from pricing/tools/problems/areas (present only on service pages).
7. 3,654 area×service/suburb×service pages quote the site-wide price and reuse one parametric body — local local-intent left unserved, cannibalizing the pillar.
8. Hub index pages hoard 5,815–22,253 inbound links; content children get 7–9 (cost, process, answers, pods).
9. All 10 aircon problem pages have only 1–2 inbound links.
10. FeaturedProjects/BeforeAfter cards are non-clickable and text-only; "Completed in 4 days" style claims unverifiable.
11. No author/team/Experience signals; "written by local tradesmen" unflagged.
12. No explicit what's-included/excluded list on service pages.
13. Mobile quote box is below the fold behind a full-viewport slideshow.
14. Up to 3–4 simultaneous floating CTA surfaces on desktop service pages; exit-intent fires on a 30s timer.
15. Primary CTA copy doesn't lead with the fixed-quote/no-deposit differentiator.
16. AggregateRating on a calculator page (SoftwareApplication) is semantically wrong/misleading.
17. Cost pages are commercial-money pages yet under-linked (avg 8.4) and have no literal "how much" answer (P3-04).
18. NAP is footer-only on 5,813/5,815 pages (content-block extraction finds none).
19. Generic-area LocalBusiness lacks per-area `Service` entities.
20. The 205 EN-only pods get ~8 inbound each, are generic and EN-only (RL from Part 2/3).

### 20 biggest opportunities
1. Fix `<main>`/content ordering → resolves the single biggest cross-part defect (P4-01) and improves AI extraction.
2. Add AggregateRating + real reviews → review stars from own markup; trust claim becomes structural, not copy.
3. Static lead form → parity with AAA Fix-It + non-WhatsApp lead capture.
4. Coverage map + per-area schema → best-in-class local UX/signals vs generic competitors.
5. Make the kept local pages genuinely local (area pricing + local proof) instead of more pages.
6. Rebalance internal equity from saturated hubs to the money/cost pages.
7. Push the desktop booking float to the whole commercial funnel.
8. Wire aircon problems to the aircon service + tools (flagship quote-getter).
9. Interactive case studies/project pages to convert trust into a CTA.
10. Team/authors page for the E-E-A-T Experience pillar (now the weakest).
11. Include/exclude list reduces quote uncertainty (abandonment).
12. Mobile quote box at top of hero to lift mobile conversion.
13. Consolidate floating CTAs to reduce noise.
14. Re-word primary CTAs around "fixed quote, no deposit".
15. Remove the misplaced tool aggregateRating (clean first-party rating story).
16. Content-block NAP strip (CRO + AI chunk NAP).
17. Real service durations in the CRO stack ("how long will it take?").
18. Tier the footer/nav so the site's strongest pages get the most internal equity.
19. Publish verifiable qualifications (insured, licensed/CIDB/ST) to out-signal generic rivals.
20. Re-run Part 4 analyzer + audits in CI to keep the SXO/CRO/trust gates green.

### If we fix only 10 things first (Part 4 priorities)
1. P4-01 content inside `<main>`
2. P4-09 AggregateRating/Review + remove tool rating (after owner verification)
3. P4-05 StickyBookButton global
4. P4-07 static lead form
5. P4-12 map embed
6. P4-13 local tier restructure (with Part 1 P0)
7. P4-16 internal-link rebalancing (cost + pods)
8. P4-06 include/exclude + P4-02 mobile quote box
9. P4-11 team/authors
10. P4-10 + P4-17 (clickable projects, aircon linking)

---

## NOT VERIFIED — requires owner/tool/data access (Part 4)

- **REQUIRES VERIFICATION:** review source/count (120 vs "120+" and whether Google reviews are real/current), every project stat ("Completed in 4 days/3 hours/2 hours", "1,200+ projects", "15+ Pros"), response-time promises (30 min vs 30–60 vs 60s), qualification badges (CIDB/ST/license/insurance), "written by local tradesmen" authorship.
- **REQUIRES VERIFICATION (external):** GSC "Pages"/"Queries" data for the 3,654 local tier (cannibalization, indexation), Google Business Profile verification + maps presence, all competitor quantitative metrics (traffic, rankings, backlinks, reviews, AI citations — I have no crawl/tool access; only named businesses and their publicly stated attributes are reported).
- **Owner-side blocked (from CONTINUE_SESSION_PROMPT):** GBP verification/updates, IndexNow secret + pings, Bing Webmaster sitemap submission, GA4 env var, live-deploy parity checks (built `/commercial/painting` 404s on live host — needs a deploy), native-speaker MS/ZH skim.

---

*Next part: Part 5 — Schema + Content Gap + Priority Roadmap (`PART-5-PROMPT.md`). Do not start until this report, `TRACKING.md` and `SESSION_LOG.md` are committed and the Part 4 PR is merged.*
