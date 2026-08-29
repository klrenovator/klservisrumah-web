# Awning Installation Service Page — Project Tracker

> **⚠️ UPDATE 2026-08-29 (Fix Wave 13):** the "quote-safe / no published
> prices" positioning described throughout this tracker was **superseded by an
> owner decision**. The service now publishes market-aligned starting prices:
> **RM 380** start + 9 priced scopes (From RM 1,800 car porch; RM 18–60/sq ft
> by material; From RM 380 balcony/window; From RM 280 repair; RM 15/sq ft
> roller blinds), sourced from 2026 competitor/market research — see
> `docs/full-website-deep-audit/PRICE-MARKET-RESEARCH-2026-08-29.md` and
> `docs/full-website-deep-audit/FIX-WAVE-13-REPORT.md`. The per-project
> quotation workflow (free site visit, itemised fixed quote) is unchanged;
> published figures are explicitly minimum starting prices.

**Project:** Dedicated Awning Installation service page for klservisrumah.my
**Market:** Kuala Lumpur & Selangor (Klang Valley), Malaysia
**Created:** 2026-08-27
**Branch:** `arena/01a042ca-klservisrumah-web` (current session — owner action plan + owner round-1 confirmations implemented; admin area removed site-wide) · `arena/01a04273-klservisrumah-web` (blog cluster posts 7–8, cluster complete) · `arena/01a04228-klservisrumah-web` (blog cluster posts 5–6) · `arena/01a040e8-klservisrumah-web` (pillar build) · `arena/01a04137-klservisrumah-web` (§9 testing closeout + blog cluster post 1, 2026-08-27) · `arena/01a041fd-klservisrumah-web` (blog cluster post 2 — decision guide, 2026-08-27)

---

## 1. Project Objective

Create a production-ready, enterprise-SEO-grade Awning Installation service page
that ranks for and answers awning-related queries across Google Search, Google AI
Overviews, ChatGPT, Gemini, Perplexity, Bing, voice search and traditional local
SEO — while converting visitors to WhatsApp enquiries.

**Verified business basis (no fabrication):**
- Awning work is an *existing, verified capability*: the Welding & Metal
  Fabrication service already publishes "Steel Structure & Awning Fabrication —
  Mild steel awning, canopy, drying-yard, and carport frames fabricated and
  installed with primer and weather-resistant finish" (EN/MS/ZH).
- Welding service verifies: certified welders (MIG/TIG/arc) for mild steel,
  stainless steel, aluminium; workshop in KL; anti-rust primer + powder-coat or
  weather-resistant enamel finishes; hot-dip galvanising option; site measurement
  & itemised quotations.
- Company facts verified in `config/site.ts`: SSM 003765188-T (Multicore Dynamics
  Resources), WhatsApp 601116627349, Mont Kiara KL base, Mon–Sun 9AM–6PM,
  coverage KL & Selangor.
- **No** awning-specific price, warranty period, material grade, certification,
  project count or review claim exists in business data → page is written as
  **project-quoted ("On Quote")** with cautious wording throughout.

## 2. SEO Strategy

- **Pillar page** at `/services/awning-installation` (follows the site's
  data-driven service architecture; auto-included in sitemap, services index,
  smart-finder, llms.txt/AI-context, near-me/area/suburb pages).
- **Topical map silo** linking awning ↔ welding, roof-repair, glass-aluminium,
  waterproofing, house-renovation + relevant problem & blog nodes.
- **AEO/GEO/LLMO:** direct-answer block, definition-first copy, FAQ accordion,
  comparison tables, trilingual summaries, entity-dense content.
- **CRO:** WhatsApp CTAs in hero, mid-page and FAQ end; quote-based pricing
  transparency (what drives cost, what info to send).
- **Multilingual:** native EN master + MS + ZH hub content and full native MS/ZH
  specialty (sub-service) pages, per the site's existing i18n gates.
- **Accuracy-first:** no fabricated prices, warranties, UV %, wind ratings,
  certifications, or permits claims.

## 3. Page Architecture (EN master)

H1: Awning Installation in Kuala Lumpur & Selangor

- Hero (value proposition, CTAs, service area) — shared template
- Estimator block — suppressed (quote-only service) → rate-book generator updated
- Overview / about + highlights
- Direct Answer (AEO card, quote-only wording)
- **Awning types & materials** (guide: fixed polycarbonate, metal sheet, ACP/
  aluminium composite, glass, fabric/canvas, retractable)
- **Material comparison table** (benefit / suitable for / maintenance / weather)
- **Applications** (car porch, entrance, windows, balcony/patio, drying yard,
  shopfront/commercial)
- **Problems → solutions** (rain entry, sun/heat, pooling, leaks, rust, sagging,
  old awning replacement)
- **Malaysian tropical climate considerations**
- Sub-services / scope of work (8 quote-based items)
- Installation process (6 steps)
- **Quotation & pricing factors** (what to send; cost drivers)
- Decision tree (shared)
- Comparison table (shared, quote-safe)
- Trust / E-E-A-T (shared, verified claims only)
- FAQs (15)
- Related problems / blogs / areas / services (shared, via topical map)

## 4. Technical Tasks

- [x] COMPLETED Inspect repository architecture (routing, i18n, templates, gates)
- [x] COMPLETED **Owner round-1 implementation (2026-08-27, session
      `arena/01a042ca-klservisrumah-web`)** — see §10 for the full list
      (12-month warranty, Klang Valley coverage, free site visit, firm
      motorised/retractable, 9th sub-service "Outdoor Roller Blinds",
      permits content removal, published market-rate reference tables,
      certifications unchanged). Admin area removed site-wide (owner B1).
- [x] COMPLETED Add `"awning-installation"` to `config/services-data.ts` (EN + MS + ZH,
      8 quote-only sub-services, process, 15 FAQs, meta, AIO summary)
- [x] COMPLETED Add `serviceSeo.awning-installation` (EN/MS/ZH title + description)
- [x] COMPLETED Add topical silo to `config/topical-authority-map.ts` (+ cross-links from
      welding/roof-repair/glass-aluminium)
- [x] COMPLETED Add awning taxonomy (synonyms EN/MS/ZH) to `lib/smart-finder-index.ts`
- [x] COMPLETED Support quote-only services:
      - [x] COMPLETED `scripts/generate-rate-book.ts` — don't throw when a service has zero
            numeric scopes (emit empty scopes/quoteOnly)
      - [x] COMPLETED `components/sections/service-detail-hero.tsx` — "Project-Quoted"
            badge instead of "From On Quote"
      - [x] COMPLETED `components/sections/service-detail-content.tsx` — price-mode-aware
            Direct Answer + pricing section wording
      - [x] COMPLETED `lib/seo.ts` — omit `Offer.price` when no numeric price exists
            (schema must not emit empty/invalid price)
      - [x] COMPLETED subservice page (`app/(en)/services/[slug]/[subservice]/page.tsx`) —
            quote-safe FAQ/meta wording for quote-only sub-services
- [x] COMPLETED Awning guide sections: type + optional rich-block support in
      `ServiceDetailContent`, driven by `guide?: ServiceGuide` on the service
      record (EN + native MS/ZH) — renders types, comparison table, applications,
      problems→solutions, climate, quote factors
- [x] COMPLETED Service icon (`awning-canopy`) in `components/ui/service-icon.tsx`
- [x] COMPLETED Hero artwork `public/hero-awning.svg`
- [x] COMPLETED Trilingual hero subline in `components/sections/service-detail-hero.tsx`
- [x] COMPLETED Specialty-locale content: 8 subservices × MS/ZH full native blocks in
      `config/specialty-locale-content.ts`
- [x] COMPLETED Regenerate generated files (rate-book, AI context, service summaries,
      blog index, nav)
- [x] COMPLETED Run all prebuild gates (specialty locale/coverage, service-i18n,
      topical-map, i18n parity, problem-i18n, location-similarity, client bundle)
- [x] COMPLETED `npm run build` / type-check passes
- [x] COMPLETED Dev-server smoke test of `/services/awning-installation` (+ MS/ZH twins
      + 8 sub-services) — all HTTP 200; title/meta/schema/FAQ/guide verified
- [x] COMPLETED Internal link audit fix: `/estimate/awning-installation` is a dead route
      for the quote-only service — removed from the /estimate hub list and the
      MS/ZH final CTA (now WhatsApp-only for quote-only services). Rendered-HTML
      link audit: 434,236 links, 0 broken targets.
- [x] COMPLETED Quote-only / estimate-link handling: rate-book generator, estimator
      share-link test and AI-context generator updated so the awning service
      publishes no fake numbers and no dead `/estimate/awning-installation`
      link is advertised (route 404s by design)

## 5. Internal Linking Tasks

- [x] COMPLETED Topical map: awning relatedServices → welding, roof-repair,
      glass-aluminium, waterproofing, handyman, house-renovation
- [x] COMPLETED Cross-link FROM welding / roof-repair / glass-aluminium silos back to
      awning-installation
- [x] COMPLETED Sub-service internal links: welding ("Steel Structure & Awning
      Fabrication") and glass-aluminium remain related via topical map
- [x] COMPLETED Area links auto-render via ServiceAreaLinks (data-driven)
- [x] COMPLETED (Cluster rollout complete) all 8 cluster posts are now published and link to
      this page (see §8); the EN hub's related-guides block lists the decision
      guide (post 2) first, followed by posts 1 and 3; post 7 is wired to the
      balcony/patio/window specialty and post 8 to the replacement/repair
      specialty; MS/ZH specialty pages link their localized twins

## 6. Schema Tasks

- [x] COMPLETED Service schema emitted by existing page (price field omitted safely for
      quote-only service — no fabricated offer price)
- [x] COMPLETED FAQPage schema from the 15 FAQs (existing mechanism)
- [x] COMPLETED HowTo schema from the 6-step process (existing mechanism)
- [x] COMPLETED Speakable schema (existing mechanism)
- [x] COMPLETED Breadcrumb via Breadcrumbs (existing mechanism)
- [x] COMPLETED No aggregateRating/review/offer fabrication added

## 7. Multilingual Tasks

- [x] COMPLETED EN master content authored
- [x] COMPLETED MS native hub content (title, tagline, description, highlights,
      sub-services, process, FAQs, meta, AIO summary, warranty line)
- [x] COMPLETED ZH native hub content (same fields; natural Malaysian Chinese)
- [x] COMPLETED 8 × MS + 8 × ZH native specialty (sub-service) blocks
- [x] COMPLETED MS/ZH localized service twin routes already exist (/ms/services/*,
      /zh/services/*) — auto-render via existing architecture

## 8. Supporting Content Cluster (8 of 8 — COMPLETE; all posts published)

Blog/pillar posts (each links to `/services/awning-installation`):
1. [x] COMPLETED **Polycarbonate vs Metal vs ACP Awning in Malaysia — PUBLISHED**
      (`/blog/polycarbonate-vs-metal-vs-acp-awning-malaysia` + native MS
      `/ms/blog/perbandingan-awning-polikarbonat-metal-deck-acp` + native ZH
      `/zh/bo-ke/ju-tan-suan-zhi-jin-shu-wa-yu-acp-yu-peng-bi-jiao`).
      Quote-safe (no fabricated prices/ratings), links to the pillar + 4
      sub-service pages + welding silo; wired into the topical-map BLOG pool
      and 4 specialty relatedBlogs; category "Awning"; cover `/hero-awning.svg`.
2. [x] COMPLETED **How to Choose the Right Awning for Your Malaysian Home — PUBLISHED
      2026-08-27** (`/blog/how-to-choose-right-awning-malaysia` + native MS
      `/ms/blog/cara-memilih-awning-yang-sesuai-rumah-malaysia` + native ZH
      `/zh/bo-ke/ru-he-wei-ma-lai-xi-ya-zhu-jia-xuan-ze-he-shi-yu-peng`).
      **Re-angled as an application-first decision guide** (per the tracker's
      overlap warning) instead of a second material comparison: application →
      awning-type map (car porch, entrance, windows, balcony/patio, drying yard,
      walkway, shopfront), priority-based selection (light/heat/noise/looks/
      budget/retractable), fixed-vs-retractable, tropical build basics, strata
      rules, quote checklist. Quote-safe throughout (no fabricated prices;
      pricing deferred to post 4, material detail deferred to post 1). Links to
      the pillar + all 5 application sub-service pages (car-porch, glass,
      canvas/fabric, balcony-patio-window, metal-deck, polycarbonate) + welding
      + posts 1/3/4 + /pricing (EN; MS/ZH link the services directory). Wired
      into the topical-map BLOG pool (placed first so the pillar's
      `RelatedBlogs maxItems={3}` block surfaces it) + glass-awning,
      canvas-and-fabric-awning and balcony-patio-and-window-awning specialty
      relatedBlogs (the three previously empty/thin pools); category "Awning";
      cover `/hero-awning.svg`; validator count 211 → 212.
3. [x] COMPLETED **Car Porch Awning Guide: Materials, Drainage & Cost Factors — PUBLISHED
      2026-08-27** (`/blog/car-porch-awning-guide-malaysia` + native MS
      `/ms/blog/panduan-awning-car-porch-malaysia` + native ZH
      `/zh/bo-ke/che-peng-yu-peng-zhi-nan-ma-lai-xi-ya`). Materials/heat/
      clearance/drainage/structure/strata + quote checklist; links to car-porch
      sub-service, pillar, material sub-pages, post 1, replacement sub-service,
      the clogged-gutter problem node and welding; wired into BLOG pool +
      car-porch specialty relatedBlogs.
4. [x] COMPLETED **How Awning Pricing Works in Malaysia — PUBLISHED 2026-08-27**
      (`/blog/how-awning-pricing-works-malaysia` + native MS
      `/ms/blog/bagaimana-harga-awning-dikira-di-malaysia` + native ZH
      `/zh/bo-ke/yu-peng-jia-ge-ru-he-ji-suan-ma-lai-xi-ya`). The 8 verified
      cost factors + quote-input checklist + why-no-price-list honesty
      positioning (no fabricated RM figures); links to pillar + 3 material
      sub-pages + replacement sub-service + /pricing (EN only — MS/ZH link the
      services directory instead); wired into BLOG pool + polycarbonate and
      replacement specialty relatedBlogs.
5. [x] COMPLETED **Awning Maintenance: Leaks, Rust & Water Pooling — PUBLISHED 2026-08-27**
      (`/blog/awning-maintenance-leaks-rust-water-pooling` + native MS
      `/ms/blog/penyelenggaraan-awning-bocor-karat-air-bertakung` + native ZH
      `/zh/bo-ke/yu-peng-bao-yang-lou-shui-sheng-xiu-ji-shui`). Maintenance-first
      guide covering safe ground-level checks, leak paths, joints/sealant,
      fasteners, frame corrosion, gutters/downpipes, water pooling, repair vs
      replacement and quote inputs. Quote-safe throughout (no fabricated
      maintenance interval, lifespan, price or warranty); links to the pillar,
      replacement-and-repair sub-service, welding, clogged-gutter and rusting-
      metal-grille problem nodes, plus the pricing guide; wired into the awning
      BLOG pool and replacement specialty relatedBlogs.
6. [x] COMPLETED **Retractable vs Fixed Awnings: Which Fits Your Home? — PUBLISHED 2026-08-27**
      (`/blog/retractable-vs-fixed-awning-malaysia` + native MS
      `/ms/blog/awning-boleh-tarik-vs-tetap-malaysia` + native ZH
      `/zh/bo-ke/shen-suo-yu-peng-vs-gu-ding-yu-peng`). Application-first
      comparison covering fixed versus retractable use cases, rain and wind
      care, light/heat/openness, fabric and mechanism maintenance, strata/JMB
      checks, quote factors and the verified conditional motorised-availability
      wording. Quote-safe throughout (no fabricated wind ratings, prices,
      warranties or supplier availability); wired into the awning BLOG pool,
      canvas/fabric specialty and balcony/patio/window specialty.
7. [x] COMPLETED **Choosing an Awning for a Balcony or Patio in Malaysia — PUBLISHED 2026-08-27**
      (`/blog/balcony-patio-awning-guide-malaysia` + native MS
      `/ms/blog/panduan-awning-balkoni-patio-malaysia` + native ZH
      `/zh/bo-ke/yang-tai-lu-tai-yu-peng-xuan-ze-zhi-nan`). Strata/JMB-first
      balcony/patio/yard guide: rules before catalogue, space-by-space framing
      (condo balcony, landed patio, windows/doors, drying yard), materials for
      light-vs-shade (polycarbonate/glass/ACP/metal deck/fabric table),
      elevated-floor drainage and waterproofing care, fixed vs retractable
      (motorised availability kept conditional), quote checklist. Quote-safe
      throughout (no fabricated prices, wind ratings, cooling figures or
      approval guarantees); links to the pillar, balcony/patio/window and
      canvas/fabric specialties, polycarbonate sub-page, welding (drying-yard
      frames), balcony-leak-condo and clogged-gutter problem nodes, plus posts
      1/2/4/6 and /pricing (EN only — MS/ZH link the services directory). Wired
      into the awning BLOG pool and the balcony-patio-and-window specialty.
8. [x] COMPLETED **Replacing an Old or Leaking Awning: What to Check — PUBLISHED 2026-08-27**
      (`/blog/replacing-old-leaking-awning-malaysia` + native MS
      `/ms/blog/tukar-awning-lama-bocor-malaysia` + native ZH
      `/zh/bo-ke/geng-huan-jiu-yu-peng-jian-cha`). Replacement-decision guide
      (differentiated from post 5's maintenance angle): signs replacement is
      realistic (sheet ageing/yellowing, frame corrosion, sagging, repeated
      leaks), safe ground-level checks, what a replacement inspection covers,
      frame-reuse cautions (inspection-verified; new steel gets anti-rust
      primer + weather-resistant finish per the verified welding line), re-sheet
      material choices, drainage fix at replacement time, removal/disposal
      scope, timing per the service FAQ wording and quote inputs. Quote-safe
      throughout (no fabricated lifespans, prices or warranties); links to the
      pillar, replacement-and-repair specialty, three material sub-pages,
      welding, clogged-gutter problem node, maintenance guide (post 5), pricing
      guide (post 4), material comparison (post 1) and the balcony guide
      (post 7). Wired into the awning BLOG pool and the
      awning-replacement-and-repair specialty.

## 9. Testing Tasks

- [x] COMPLETED All prebuild validation gates pass
- [x] COMPLETED TypeScript type-check passes
- [x] COMPLETED Production build succeeds
- [x] COMPLETED Manual smoke: `/services/awning-installation` EN, `/ms/services/awning-installation`,
      `/zh/services/awning-installation`, and 8 sub-service pages × locales —
      all 27 routes HTTP 200 on a production `next start` build; `/estimate/awning-installation`
      returns 404 by design (quote-only). Single H1 per page, `<html lang>` correct per locale,
      comparison table renders, Project-Quoted badge in hero, WhatsApp CTAs present, no
      English FAQ leakage on MS/ZH.
- [x] COMPLETED Verify FAQ schema + Service schema validate (Rich Results-style) — structural
      validation on served HTML, all 3 hubs: Service (name/provider/areaServed, offers with
      NO numeric price, priceSpecification "Project-specific quotation on request", no
      fabricated aggregateRating), FAQPage exactly 15 valid Question/acceptedAnswer entries,
      HowTo exactly 6 steps, BreadcrumbList, speakable. Sub-service spot-checks ×3 locales
      pass. Recorded in `docs/schema-validation-log.md` (2026-08-27 round).
- [x] COMPLETED Verify sitemap includes new page (regenerated automatically) — sitemap.xml
      (4,730 URLs) contains all 3 awning hubs, all sub-service locale twins (63
      awning-installation URLs incl. cost/emergency/near-me twins) with full
      en-MY/ms-MY/zh-MY/x-default hreflang alternates; all six awning cluster
      posts' EN/MS/ZH URLs are listed, including post 6's three new URLs.
- [x] COMPLETED Post 5 production smoke (2026-08-27): EN/MS/ZH article routes
      return HTTP 200 with one H1, correct `en-MY`/`ms-MY`/`zh-MY` language,
      localized titles and complete four-entry hreflang sets; replacement,
      clogged-gutter and rust-problem links render in all locales; sitemap
      inclusion verified. Rendered internal-link audit: 5,803 pages / 435,405
      links, 0 broken targets.
- [x] COMPLETED Post 5 full-corpus HTML/SEO QA: `audit:html` checked 5,803
      rendered pages with 0 fatal findings / 0 warnings; `audit:seo-head` found
      4,727 self-canonical indexable pages, 4,727 sitemap URLs, 0 duplicate
      titles/descriptions and 0 warnings; `audit:meta` found 0 JSON-LD parse
      failures, 0 breadcrumb mismatches and 0 duplicate title groups.
- [x] COMPLETED Post 6 production smoke (2026-08-27): EN/MS/ZH article routes
      return HTTP 200 with one H1, correct `en-MY`/`ms-MY`/`zh-MY` language,
      localized titles and complete four-entry hreflang sets; canvas/fabric,
      balcony/patio/window and other localized awning links render correctly;
      sitemap inclusion verified.
- [x] COMPLETED Post 6 full-corpus HTML/SEO QA: `audit:html` checked 5,806
      rendered pages with 0 fatal findings / 0 warnings; `audit:seo-head` found
      4,730 self-canonical indexable pages, 4,730 sitemap URLs, 0 duplicate
      titles/descriptions and 0 warnings; `audit:meta` found 0 JSON-LD parse
      failures, 0 breadcrumb mismatches and 0 duplicate title groups. Rendered
      internal-link audit: 5,806 pages / 435,635 links, 0 broken targets.
- [x] COMPLETED Posts 7–8 production smoke (2026-08-27): all six new article
      routes (EN/MS/ZH × balcony guide and replacement guide) return HTTP 200
      with one H1, correct `en-MY`/`ms-MY`/`zh-MY` language, localized titles
      and complete four-entry hreflang clusters; localized awning/pillar/
      problem links render in all locales; EN BlogPosting schema present
      (MS/ZH schema remains the known site-wide gap); all six URLs are in
      sitemap.xml; the EN pillar's related-guides block is unchanged (decision
      guide, post 1, post 3 first) and the MS balcony + ZH replacement
      specialty pages surface the new localized guides.
- [x] COMPLETED Posts 7–8 full-corpus HTML/SEO QA: `audit:html` checked 5,812
      rendered pages with 0 fatal findings / 0 warnings; `audit:seo-head` found
      4,736 self-canonical indexable pages, 4,736 sitemap URLs, 0 duplicate
      titles/descriptions and 0 warnings; `audit:meta` found 0 JSON-LD parse
      failures, 0 breadcrumb mismatches and 0 duplicate title groups. Rendered
      internal-link audit: 436,121 links, 0 broken targets. Production build
      emits 5,820 static pages (up from 5,806).

---

## STATUS

### COMPLETED
- Full repository/architecture audit
- EN/MS/ZH service data, metadata, topical silo, smart-finder taxonomy
- Quote-only service support (rate-book generator, hero, content, schema, sub page)
- Rich awning guide sections (types, comparison, applications, problems→solutions,
  climate, quote factors) in EN + native MS/ZH
- 8 × MS/ZH native specialty blocks
- Icon + hero artwork
- All code gates + production build
- §9 testing closeout (2026-08-27): production-build smoke of all 27 awning routes,
  Rich Results-style schema validation (Service no-price / FAQPage 15 / HowTo 6 /
  Breadcrumb / hreflang), sitemap inclusion — details in §9 and
  `docs/schema-validation-log.md`
- Supporting content cluster post 1/8: "Polycarbonate vs Metal vs ACP Awning in
  Malaysia" — full native EN/MS/ZH article, quote-safe, wired into the topical map
  (BLOG pool + 4 specialty relatedBlogs), blog indexes + AI-context regenerated,
  validator count 208 → 209, all gates + build + smoke pass (§8)
- Supporting content cluster posts 3/8 and 4/8 (2026-08-27, session 2):
  "Car Porch Awning Guide: Materials, Drainage & Cost Factors" and "How Awning
  Pricing Works in Malaysia" — full native EN/MS/ZH articles, quote-safe
  (no fabricated prices), wired into the topical map (BLOG pool now 6 posts +
  car-porch/polycarbonate/replacement specialty relatedBlogs), validator count
  209 → 211, all gates + build + 6-route smoke + sitemap check pass (§8)
- Supporting content cluster post 2/8 (2026-08-27, session 3): "How to Choose
  the Right Awning for Your Malaysian Home" — re-angled per the tracker's
  overlap warning as an application-first decision guide (NOT a material
  re-comparison): full native EN/MS/ZH article, quote-safe, links to the pillar
  + all application sub-services + posts 1/3/4; wired into the topical map
  (BLOG pool, placed first so the pillar related-guides block shows it;
  glass/canvas-fabric/balcony-patio specialty relatedBlogs populated),
  validator count 211 → 212, prebuild gates (320k assertions), type-check,
  lint, production build, 3-route smoke (200/hreflang/title/no locale leak) +
  rendered-link audit (435,180 links, 0 broken) + sitemap inclusion all pass (§8)
- Supporting content cluster post 5/8 (2026-08-27, current session): "Awning
  Maintenance: Leaks, Rust & Water Pooling" — full native EN/MS/ZH article,
  maintenance-first and quote-safe (no fabricated maintenance interval, lifespan,
  price or warranty); links to the pillar, replacement sub-service, welding,
  clogged-gutter and rusting-metal-grille problem nodes, plus the pricing guide;
  wired into the awning BLOG pool and replacement specialty relatedBlogs.
  Validator count 212 → 213; prebuild gates (320,331 assertions), type-check,
  lint, production build, 3-route smoke (200/correct locale/H1/title/hreflang/
  localized links), sitemap inclusion and rendered-link audit (435,405 links,
  0 broken) all pass (§8).
- Supporting content cluster post 6/8 (2026-08-27, current session):
  "Retractable vs Fixed Awnings: Which Fits Your Home?" — full native EN/MS/ZH
  comparison organized by application, rain/wind care, light/heat/openness,
  maintenance, strata rules and quote factors. The motorised/retractable
  availability wording stays conditional; no wind ratings, prices, warranties
  or supplier availability were invented. Wired into the awning BLOG pool,
  canvas/fabric specialty and balcony/patio/window specialty. Validator count
  213 → 214; prebuild gates (320,331 assertions), type-check, lint, production
  build, 3-route smoke, sitemap inclusion and rendered-link audit (435,635
  links, 0 broken) all pass (§8).
- Supporting content cluster posts 7/8 and 8/8 (2026-08-27, current session) —
  **cluster complete (8 of 8)**: "Choosing an Awning for a Balcony or Patio in
  Malaysia" (strata/JMB-first, light-vs-shade materials, elevated-floor
  drainage, quote checklist) and "Replacing an Old or Leaking Awning: What to
  Check" (replacement-decision guide: ageing signs, inspection scope, frame
  reuse cautions, drainage fix, removal/disposal). Both full native EN/MS/ZH,
  quote-safe (no fabricated prices, lifespans, wind ratings, cooling figures
  or approval guarantees), differentiated from posts 5/6; wired into the
  awning BLOG pool + balcony-patio-and-window and awning-replacement-and-repair
  specialty relatedBlogs. Validator count 214 → 216; prebuild gates (320,331
  assertions), type-check, lint, production build (5,820 pages), 6-route
  smoke, sitemap inclusion (4,736 URLs), full-corpus audits (5,812 pages, 0
  fatal/0 warnings; 436,121 links, 0 broken) all pass (§8, §9).
- Owner action plan + **owner round-1 confirmations implemented
  (2026-08-27, session `arena/01a042ca-klservisrumah-web`)**: 12-month
  workmanship warranty, Klang Valley coverage wording, free site visits/
  quotations, firm manual+motorised retractable availability, new 9th
  sub-service "Outdoor Roller Blinds" (EN/MS/ZH + taxonomy + topical node),
  permits/council content removed from all awning surfaces, published
  KL/Selangor market-rate reference table (EN/MS/ZH, labelled as market
  ranges), certifications unchanged (none added), admin area removed
  site-wide (owner B1). Specialties 221 → 222; build 5,823 pages; sitemap
  4,739 URLs; all gates + audits green (§10). Only A8 photography remains
  owner-side.

### PENDING
- [x] COMPLETED Supporting blog cluster posts 7–8 (see §8) — full native trilingual
  articles, quote-safe content, topical-map BLOG pool entries,
  `validate:blog-production.ts` count bump (214 → 216), regenerated indexes,
  full gate re-run + production-build smoke + link audit. **The 8-post awning
  cluster is now complete; no awning content tasks remain in this tracker.**
- [x] COMPLETED Owner-side hand-off documentation (2026-08-27, session
  `arena/01a042ca-klservisrumah-web`): authored **`OWNER_ACTION_PLAN.md`** —
  a step-by-step, Roman-Urdu-annotated guide covering every remaining
  owner-side item: the 9 business confirmations below + photography (A1–A10)
  and the site-wide owner tasks consolidated from `CONTINUE_SESSION_PROMPT.md`
  (B1 `ADMIN_PASSWORD`, B2 deploy, B3 GA4 `NEXT_PUBLIC_GA_ID`, B4 GSC/Bing
  indexing, B5 IndexNow + GBP, B6 native-speaker QA, B7 H3 rollout decision),
  plus a fill-in answer sheet (Part C) the owner can paste into the next AI
  session. Docs only — no code/content changes; validated state of the last
  merged commit is untouched.
- [x] COMPLETED **Owner round-1 answers implemented (2026-08-27, same session —
      see §10).** All content work the owner requested is done and verified;
      the only awning item still open is real photography (A8, owner-side).
- [ ] PENDING Real project photography (business to supply — OWNER_ACTION_PLAN.md
      §A8 / Part C round-2 sheet; placeholder SVG cover stays until then)
- [ ] PENDING (Site-wide, outside awning scope — discovered during §9 validation):
  MS/ZH blog article routes emit no BlogPosting/Article schema (all 216 topics;
  only EN does). Candidate follow-up for a dedicated session; do not bundle into
  awning work. NOT blocked on the owner.

### NEEDS BUSINESS CONFIRMATION — resolved in round 1 (2026-08-27)

> **Round-1 answers received and implemented** (details in §10 and
> `OWNER_ACTION_PLAN.md` Part A). The list below is kept for the record.

1. **Awning material scope** — ✅ RESOLVED: keep the full market-standard set
   (polycarbonate, metal deck, ACP, tempered glass, canvas/fabric) — owner:
   "Malaysia market ke hisaab se dekhen".
2. **Pricing** — ✅ RESOLVED (market-aligned): published KL/Selangor
   market-rate reference table added (RM ranges, labelled as market ranges —
   not our quote); our own pricing stays project-quoted.
3. **Warranty** — ✅ RESOLVED: **12-month workmanship warranty** on
   fabrication & installation (aligned with the verified welding line and
   typical KL contractor practice); material/fabric warranty follows
   manufacturer/supplier terms.
4. **Motorised retractable awnings** — ✅ RESOLVED: offered; conditional
   "depending on scope and supplier" wording replaced with firm "manual and
   motorised available" across all surfaces and locales.
5. **Outdoor roller blinds** — ✅ RESOLVED: now offered — added as the 9th
   sub-service (EN/MS/ZH) with guide entry, taxonomy and topical-map node.
6. **Permits/MBK/DBKL approvals** — ✅ RESOLVED (owner: "permits ni show
   krwany"): all permit/council/local-authority content removed from awning
   surfaces (hub FAQ replaced with a roller-blinds FAQ; blogs rewritten to
   neutral "check your management (JMB/MC) rules").
7. **Site assessment policy** — ✅ RESOLVED: site visits and quotations are
   **free** (photos/dimensions may still suffice for remote quotes).
8. **Photography** — ⏳ STILL PENDING: owner will supply real photos later;
   placeholder SVG remains (round-2 sheet in `OWNER_ACTION_PLAN.md` Part C).
9. **Certifications** — ✅ RESOLVED (owner: "show ni krwany"): no
   certification claims added; only the previously verified welding
   capabilities remain as-is.

### 10. Owner Round-1 Implementation Log (2026-08-27)

Scope: `config/services-data.ts` (EN/MS/ZH hub: tagline, description,
highlights, sub-services, process, 15 FAQs, priceTableNote, meta, AIO summary,
warranty line, guide types/applications/quote factors/CTA),
`config/specialty-locale-content.ts` (new outdoor-roller-blinds MS/ZH block;
canvas/balcony hedge + strata wording updates; welding specialty permit FAQ
reframed), `config/topical-authority-map.ts` (+1 specialty node → 222
relationships), `lib/smart-finder-index.ts` (roller-blind/motorised synonyms
+ materials), `config/service-seo.ts` (free-quote wording),
`config/blog-data-awning.ts` + `config/blog-i18n.ts` (all 8 posts × 3 locales:
motorised firm-up, permits/council cleanup, post-4 market-rate reference
table). Site-wide (owner B1): admin area removed — routes, API, components,
auth libs, middleware gate, robots entry, `.env.example` var.

Accuracy basis: owner round-1 answers + published KL/Selangor competitor
pricing pages (market-reference framing with explicit "not our quotation"
labelling; no fabricated own-price). Verification: prebuild gates
(320,331 assertions, 0 failures; specialty counts 222/444; topical map 29/29),
type-check, lint 0 warnings, production build 5,823 pages, production smoke
(16 routes: admin → 404; new roller-blind routes ×3 → 200 with 4-entry
hreflang; hubs show warranty/Klang Valley/free-visit strings; FAQPage 15 /
HowTo 6 intact; no permits text), sitemap 4,739 URLs (15 roller-blind URLs),
audit:html 5,815 pages 0 fatal/0 warnings, audit:seo-head PASS 0 warnings,
audit:meta PASS, internal-link audit 436,341 links 0 broken.
