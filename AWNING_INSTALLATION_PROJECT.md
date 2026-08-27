# Awning Installation Service Page — Project Tracker

**Project:** Dedicated Awning Installation service page for klservisrumah.my
**Market:** Kuala Lumpur & Selangor (Klang Valley), Malaysia
**Created:** 2026-08-27
**Branch:** `arena/01a040e8-klservisrumah-web`

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

- [x] Inspect repository architecture (routing, i18n, templates, gates)
- [x] Add `"awning-installation"` to `config/services-data.ts` (EN + MS + ZH,
      8 quote-only sub-services, process, 15 FAQs, meta, AIO summary)
- [x] Add `serviceSeo.awning-installation` (EN/MS/ZH title + description)
- [x] Add topical silo to `config/topical-authority-map.ts` (+ cross-links from
      welding/roof-repair/glass-aluminium)
- [x] Add awning taxonomy (synonyms EN/MS/ZH) to `lib/smart-finder-index.ts`
- [x] Support quote-only services:
      - [x] `scripts/generate-rate-book.ts` — don't throw when a service has zero
            numeric scopes (emit empty scopes/quoteOnly)
      - [x] `components/sections/service-detail-hero.tsx` — "Project-Quoted"
            badge instead of "From On Quote"
      - [x] `components/sections/service-detail-content.tsx` — price-mode-aware
            Direct Answer + pricing section wording
      - [x] `lib/seo.ts` — omit `Offer.price` when no numeric price exists
            (schema must not emit empty/invalid price)
      - [x] subservice page (`app/(en)/services/[slug]/[subservice]/page.tsx`) —
            quote-safe FAQ/meta wording for quote-only sub-services
- [x] Awning guide sections: type + optional rich-block support in
      `ServiceDetailContent`, driven by `guide?: ServiceGuide` on the service
      record (EN + native MS/ZH) — renders types, comparison table, applications,
      problems→solutions, climate, quote factors
- [x] Service icon (`awning-canopy`) in `components/ui/service-icon.tsx`
- [x] Hero artwork `public/hero-awning.svg`
- [x] Trilingual hero subline in `components/sections/service-detail-hero.tsx`
- [x] Specialty-locale content: 8 subservices × MS/ZH full native blocks in
      `config/specialty-locale-content.ts`
- [x] Regenerate generated files (rate-book, AI context, service summaries,
      blog index, nav)
- [x] Run all prebuild gates (specialty locale/coverage, service-i18n,
      topical-map, i18n parity, problem-i18n, location-similarity, client bundle)
- [x] `npm run build` / type-check passes
- [x] Dev-server smoke test of `/services/awning-installation` (+ MS/ZH twins
      + 8 sub-services) — all HTTP 200; title/meta/schema/FAQ/guide verified
- [x] Internal link audit fix: `/estimate/awning-installation` is a dead route
      for the quote-only service — removed from the /estimate hub list and the
      MS/ZH final CTA (now WhatsApp-only for quote-only services). Rendered-HTML
      link audit: 434,236 links, 0 broken targets.
- [x] Quote-only / estimate-link handling: rate-book generator, estimator
      share-link test and AI-context generator updated so the awning service
      publishes no fake numbers and no dead `/estimate/awning-installation`
      link is advertised (route 404s by design)

## 5. Internal Linking Tasks

- [x] Topical map: awning relatedServices → welding, roof-repair,
      glass-aluminium, waterproofing, handyman, house-renovation
- [x] Cross-link FROM welding / roof-repair / glass-aluminium silos back to
      awning-installation
- [x] Sub-service internal links: welding ("Steel Structure & Awning
      Fabrication") and glass-aluminium remain related via topical map
- [x] Area links auto-render via ServiceAreaLinks (data-driven)
- [ ] (Optional/future) blog cluster posts listed in §8 to link to this page

## 6. Schema Tasks

- [x] Service schema emitted by existing page (price field omitted safely for
      quote-only service — no fabricated offer price)
- [x] FAQPage schema from the 15 FAQs (existing mechanism)
- [x] HowTo schema from the 6-step process (existing mechanism)
- [x] Speakable schema (existing mechanism)
- [x] Breadcrumb via Breadcrumbs (existing mechanism)
- [x] No aggregateRating/review/offer fabrication added

## 7. Multilingual Tasks

- [x] EN master content authored
- [x] MS native hub content (title, tagline, description, highlights,
      sub-services, process, FAQs, meta, AIO summary, warranty line)
- [x] ZH native hub content (same fields; natural Malaysian Chinese)
- [x] 8 × MS + 8 × ZH native specialty (sub-service) blocks
- [x] MS/ZH localized service twin routes already exist (/ms/services/*,
      /zh/services/*) — auto-render via existing architecture

## 8. Supporting Content Cluster (recommended, NOT yet built)

Future blog/pillar posts (each to link to `/services/awning-installation`):
1. Polycarbonate vs Metal vs ACP Awning in Malaysia
2. Best Awning Types for Malaysian Homes (2026)
3. Car Porch Awning Guide: Materials, Drainage & Cost Factors
4. How Awning Pricing Works in Malaysia (cost factors, no fabricated prices)
5. Awning Maintenance: Leaks, Rust & Water Pooling
6. Retractable vs Fixed Awning
7. Choosing an Awning for Balcony / Patio / Yard
8. Replacing an Old or Leaking Awning: What to Check

## 9. Testing Tasks

- [x] All prebuild validation gates pass
- [x] TypeScript type-check passes
- [x] Production build succeeds
- [ ] Manual smoke: `/services/awning-installation` EN, `/ms/services/awning-installation`,
      `/zh/services/awning-installation`, and 8 sub-service pages × locales
- [ ] Verify FAQ schema + Service schema validate (Rich Results-style)
- [ ] Verify sitemap includes new page (regenerated automatically)

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

### PENDING
- Dev-server visual smoke test (page renders correctly on mobile/desktop)
- Supporting blog cluster (8 posts) — content roadmap, not built this session
- Real project photography (business to supply — see business confirmation)

### NEEDS BUSINESS CONFIRMATION
1. **Awning material scope** — page assumes mild-steel/polycarbonate/metal-deck/
   ACP/glass/fabric awnings + awning replacement (consistent with welding line).
   Confirm which are actually offered/installed; retractable/motorised systems
   are presented as "available depending on scope/supplier" — confirm.
2. **Pricing** — page is quote-only; confirm no published awning rates exist.
   Business may later supply per-sqft or per-job starting prices.
3. **Warranty** — page uses "workmanship warranty as stated in your quotation"
   (welding line carries 12-month welding/fabrication warranty). Confirm the
   exact awning warranty terms to state.
4. **Motorised retractable awnings** — not verified as offered; page hedges.
5. **Outdoor roller blinds** — not verified; omitted from services.
6. **Permits/MBK/DBKL approvals** — page advises checking local authority / JMB /
   MC rules; confirm whether the business assists with permit applications.
7. **Site assessment policy** — page says photos/dimensions may suffice and a
   site visit is arranged when needed; confirm actual workflow.
8. **Photography** — supply real completed awning project photos for
   hero/before-after (do not use stock as evidence of work).
9. **Certifications** — welding claims certifiers (MIG/TIG/arc); confirm whether
   any awning-specific CIDB/SIRIM/engineering sign-off can be claimed before
   adding it.
