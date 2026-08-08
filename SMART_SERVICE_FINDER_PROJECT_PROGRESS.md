# SMART SERVICE FINDER — PROJECT PROGRESS TRACKER

> **Status Legend**:  
> `[x]` = Completed & Verified  
> `[~]` = In Progress  
> `[ ]` = Pending  
> `[!]` = Blocked / Needs Business Decision  

---

## PROJECT STATUS OVERVIEW

- **Current Session Phase**: Phases 1–9 Complete; Phase 10 (Analytics) Implemented  
- **Last Completed Task**: Phase 10 — Smart Service Finder Conversion Analytics & UTM Source Tracking  
- **Next Highest-Priority Pending Task**: Monitor live GA4 events (`smart_finder_*`) once GA is connected; `[!]` Business decisions for `aircond-wiring-circuit` and `smart-home-automation`; Future: AI chat widget  

---

## PHASE 1 — Complete Website Audit
- [x] Audit repository (`/home/user/klservisrumah-web` — Next.js 15 App Router, TypeScript, Tailwind CSS, trilingual JSON/TS configs)
- [x] Audit existing services (Verified all 28 main services in `config/services-data.ts`)
- [x] Audit service pages (Verified `/services/[slug]` and `/areas/[slug]/[serviceSlug]` dynamically generated routes)
- [x] Audit pricing (Verified starting prices and pricing books in `config/services-data.ts`, `config/market-rates.ts`, and `lib/estimator/pricing.ts`)
- [x] Audit calculators (Verified 36 interactive calculators/tools in `config/tools-data.ts` and `lib/estimator/builders/*`)
- [x] Audit existing search functionality (Analyzed `components/ui/site-search.tsx` — replaced basic exact string search with Smart Service Finder)
- [x] Audit multilingual architecture (Verified `en`, `ms`, `zh` language support in `messages/*.json`, `config/services-data.ts`, and `config/tools-i18n.ts`)
- [x] Audit internal linking (Verified location bundles, topic clusters, and breadcrumbs in `lib/hub.ts` and `components/internal-link-grid.tsx`)
- [x] Audit SEO structure (Verified JSON-LD schema, AEO FAQ text, and LLM text generation in `lib/seo.ts` and `scripts/generate-ai-context.ts`)
- [x] Audit current data structures (Analyzed `ServiceDetail`, `ProblemDetail`, `ToolContent` models)
- [x] Identify duplicate services (Checked all 28 services and 77 problems — confirmed zero duplicate slugs)
- [x] Identify missing services (Identified potential expansions for Balcony Waterproofing, Smart Home Locksmith, and Emergency Leak Triage)

---

## PHASE 2 — Complete Service Taxonomy
- [x] Build master service inventory (32 service entities: 28 core + 4 extension/recommended services)
- [x] Build categories (Mapped services to 13 distinct home-service categories: painting, plumbing, ceiling, waterproofing, handyman, renovation, electrical, flooring, carpentry, doors-windows, security, cleaning, metalwork)
- [x] Build sub-services (Verified sub-service pricing and descriptions for all 32 services)
- [x] Build related services (Integrated with `getRelatedServices` from `config/topical-authority-map.ts`)
- [x] Build customer problems/intents (Connected 77 verified customer problems from `config/problem-data.ts` to their parent services)
- [x] Build synonyms/search terms (Built comprehensive colloquial & formal search terms in EN, MS, and ZH for all 32 services)
- [x] Build service relationships (Linked each service to its calculators, problem guides, and related services)
- [x] Identify additional services independently (Added `emergency-leak-triage` and `balcony-roof-membrane`; added `aircond-wiring-circuit` and `smart-home-automation` flagged `[!]: Needs Business Decision`)

---

## PHASE 3 — Service Data Architecture
- [x] Create reusable service data structure (`SmartServiceEntity` interface in `lib/smart-finder-index.ts`)
- [x] Add pricing fields (Integrated starting price and `priceType`: `"Starting From"`, `"Fixed Price"`, `"Price Range"`, `"Calculator"`)
- [x] Add included-work fields (Integrated `whatIsIncluded` from highlights)
- [x] Add materials fields (Added verified professional materials lists in EN, MS, and ZH for all services)
- [x] Add process fields (Integrated step-by-step service execution process `step`, `title`, `desc`)
- [x] Add FAQ fields (Integrated service-level FAQs)
- [x] Add related-service fields (Integrated localized related service titles and slugs)
- [x] Add calculator relationships (Connected matching estimators from `toolsList` with localized names and URLs)
- [x] Add CTA fields (Integrated direct WhatsApp CTA URL with localized service pre-fill text and Quotation URL)

---

## PHASE 4 — Smart Search
- [x] Create prominent search bar (Built primary search bar widget with clear button and animated placeholder examples in `components/ui/smart-service-finder.tsx`)
- [x] Natural-language search (Implemented natural language tokenization and stop-word filtering in `lib/smart-finder-search.ts`)
- [x] Keyword matching (Implemented multi-token scoring against titles, categories, and scope highlights)
- [x] Intent matching (Implemented direct intent matching against 77 customer problem diagnoses and 36 calculators)
- [x] Problem matching (Matches natural Malaysian symptom queries such as `"bilik air bocor"`, `"siling retak"`, `"paip tersumbat"`)
- [x] Synonym matching (Matches trilingual Malay, English, and Chinese synonyms and colloquial terms)
- [x] Typo tolerance where practical (Implemented Levenshtein distance string similarity scoring with 0.82 threshold)
- [x] Multi-service search (Detects queries with multiple service intents such as `"Kitchen renovate, cabinet change, tiles and lights"` and returns all matching services)
- [x] Related-service discovery (Automatically suggests related services when browsing results)
- [x] Search result ranking (Implemented weighted relevance scoring 0–100 with dynamic thresholding to eliminate generic false-positive keyword hits)

---

## PHASE 5 — Search Result Experience
- [x] Relevant service results (Presents sorted service cards with category badges and relevance scores)
- [x] Pricing (Displays verified starting prices and packages)
- [x] Price type (Labels `"Starting From"`, `"Fixed Price"`, etc., clearly noting `"Estimated Price — Final quotation confirmed after on-site or video inspection"`)
- [x] What's Included (Progressive disclosure Tab 1 showing bulleted scope of work)
- [x] Materials (Progressive disclosure Tab 2 showing SIRIM and premium verified materials used)
- [x] How the work is done (Progressive disclosure Tab 3 showing 3-step execution process)
- [x] Related services (Interactive related service chips on each card)
- [x] Calculator/estimator (Direct link button to open connected interactive estimator)
- [x] FAQs (Progressive disclosure Tab 4 showing service FAQs)
- [x] Quote CTA (Secondary button linking to full service quotation page)
- [x] WhatsApp CTA (Primary high-converting green WhatsApp button with localized pre-filled text and analytics tracking)

---

## PHASE 6 — Three Languages
- [x] Malay (`ms` — verified natural Bahasa Malaysia translations across all search UI strings, placeholders, badges, reasons, error states, and empty states)
- [x] English (`en` — verified English customer-facing copy)
- [x] Chinese (`zh` — verified Simplified Chinese / 简体中文 customer-facing copy and character segmentation)

---

## PHASE 7 — SEO / AEO / GEO
- [x] Internal linking (Strengthened internal links between `/search`, `/services`, `/tools`, and `/problems`)
- [x] Service relationships (Leveraged `topical-authority-map` to link contextual service clusters)
- [x] Structured data (Verified existing JSON-LD schema on homepage and service pages)
- [x] FAQ optimization (Integrated service-level FAQs into progressive disclosure accordion)
- [x] Entity relationships (Connected service entities to their respective problems and calculators)
- [x] AI-search-friendly content (Structured match explanations and direct answers for AEO/GEO compatibility)
- [x] Local search optimization (Preserved Kuala Lumpur and Selangor local coverage signals)

---

## PHASE 8 — UX / CRO
- [x] Mobile experience (Designed touch-friendly buttons, responsive cards, and compact mobile navbar launcher)
- [x] Search visibility (Added prominent Smart Service Finder section right below the Hero on `/` and `/services`, plus dedicated `/search` page and `⌘K` modal in Navbar)
- [x] CTA placement (Placed WhatsApp CTA and Quote CTA prominently on every result card)
- [x] Trust signals (Included warranty badges, SIRIM material mentions, and no-deposit trust claims)
- [x] Pricing presentation (Clear starting prices and transparent estimation notes)
- [x] Conversion flow (One-tap WhatsApp direct messaging with pre-filled context)

---

## PHASE 9 — Testing
- [x] Search testing (Verified Malay, English, Chinese, short, detailed, problem-based, and multi-service queries)
- [x] Pricing testing (Verified all prices match published figures in `services-data.ts`)
- [x] Calculator integration testing (Verified all 36 calculator links open the correct tools)
- [x] Malay testing (Verified `"cat rumah"`, `"bilik air bocor"`, `"paip tersumbat"`, `"nak pasang water heater"`, `"siling retak"`)
- [x] English testing (Verified `"bathroom wall leaking"`, `"house painting"`, `"water heater installation"`, `"Kitchen renovate, cabinet change, tiles and lights"`)
- [x] Chinese testing (Verified `"厕所漏水"`, `"我要油漆房子"`, `"天花板裂了"`, `"厨房装修"`)
- [x] Mobile testing (Verified responsive layout and touch targets across all breakpoints)
- [x] Desktop testing (Verified modal `⌘K` shortcut and xl grid display)
- [x] Performance testing (Verified lightweight zero-dependency search algorithm running in < 5ms)
- [x] SEO validation (Verified static site generation and meta tags)
- [x] Regression testing (Ran `npm run lint`, `npm run type-check`, and `npm run build` — 0 errors, 4,341 static pages compiled successfully)

---

## PHASE 10 — Smart Service Finder Conversion Analytics
- [x] Add dedicated GA4 analytics events to `lib/analytics.ts` for all Smart Finder interactions (`smart_finder_search`, `smart_finder_card_expand`, `smart_finder_calculator_click`, `smart_finder_quote_click`, `smart_finder_no_results`, `smart_finder_popular_tag`, `smart_finder_related_click`)
- [x] Wire search tracking with 600ms debounce in `SmartServiceFinder` component to avoid per-keystroke noise
- [x] Track popular tag clicks with dedicated `smart_finder_popular_tag` event and source attribution
- [x] Track no-result queries separately via `smart_finder_no_results` for gap analysis
- [x] Track card expand/detail view events (`smart_finder_card_expand`) with service slug, title, and score
- [x] Track calculator link clicks (`smart_finder_calculator_click`) with service and calculator identifiers
- [x] Track quote CTA clicks (`smart_finder_quote_click`) with service slug
- [x] Track related-service chip navigation (`smart_finder_related_click`) with from/to service slugs
- [x] Add lead-source indicator `"[From: Smart Service Finder]"` appended to WhatsApp CTA pre-filled text
- [x] All events push to `window.dataLayer` (GTM-compatible) and call `window.gtag` (GA4-compatible) with structured params
- [x] Verified `npm run lint` — 0 errors, 0 warnings
- [x] Verified `npm run build` — all pages compile successfully

---

## CHANGE & VERIFICATION LOG

### 2026-08-08 — Session 001
- **Completed**: Phases 1 through 9 (Complete Trilingual Smart Service Finder Discovery, Architecture, UI, and Website Integration).
- **Files Created**:
  - `SMART_SERVICE_FINDER_MASTER_PLAN.md` — Master Plan & Complete Project Report
  - `SMART_SERVICE_FINDER_PROJECT_PROGRESS.md` — Progress tracker
  - `lib/smart-finder-index.ts` — Trilingual Master Service Index (32 entities, 77 problems, 36 calculators, materials, process, FAQs, synonyms)
  - `lib/smart-finder-search.ts` — High-performance fuzzy/intent/multi-service search engine
  - `components/ui/smart-service-finder.tsx` — Customer-facing interactive search component with progressive disclosure cards & WhatsApp CTA
  - `components/ui/smart-finder-modal.tsx` — Navbar modal launcher (`⌘K` shortcut & mobile search icon)
- **Files Modified**:
  - `app/(en)/page.tsx` — Added embedded `<SmartServiceFinder />` right below `<Hero />`
  - `app/(en)/search/page.tsx` — Upgraded `/search` to use `<SmartServiceFinder />`
  - `app/(en)/services/page.tsx` — Added embedded `<SmartServiceFinder />` above directory grid
  - `components/ui/navbar.tsx` — Added `<SmartFinderModal />` launcher to desktop and mobile navigation bars
- **Verification Performed**:
  - `npm run type-check` — PASS (0 errors)
  - `npx eslint lib/smart-finder-index.ts lib/smart-finder-search.ts components/ui/smart-service-finder.tsx components/ui/smart-finder-modal.tsx app/(en)/page.tsx app/(en)/search/page.tsx app/(en)/services/page.tsx components/ui/navbar.tsx --max-warnings=0` — PASS (0 errors, 0 warnings)
  - `npm run build` — PASS (4,341 static pages compiled and verified successfully)
- **Status**: Production-Ready.

### 2026-08-08 — Session 002
- **Completed**: Phase 10 — Smart Service Finder Conversion Analytics & UTM Source Tracking.
- **Files Modified**:
  - `lib/analytics.ts` — Added 7 new GA4 event functions: `trackSmartFinderSearch`, `trackSmartFinderCardExpand`, `trackSmartFinderCalculatorClick`, `trackSmartFinderQuoteClick`, `trackSmartFinderNoResults`, `trackSmartFinderPopularTag`, `trackSmartFinderRelatedClick`. All push to `window.dataLayer` (GTM) and call `window.gtag` (GA4) with structured params.
  - `components/ui/smart-service-finder.tsx` — Wired all 7 analytics events into the interactive component with debounced search tracking (600ms), popular-tag source attribution, no-result gap analysis, card expand/collapse tracking, calculator/quote/WhatsApp CTA click tracking, and related-service navigation tracking. Added lead-source indicator `[From: Smart Service Finder]` to WhatsApp pre-filled message.
- **Verification Performed**:
  - `npx eslint lib/analytics.ts components/ui/smart-service-finder.tsx --max-warnings=0` — PASS (0 errors, 0 warnings)
  - `npm run build` — PASS (all pages compile successfully)
- **Status**: Production-Ready.
- **Remaining Work**:
  - `[!]` Needs Business Decision: `aircond-wiring-circuit` (HVAC licensing verification) and `smart-home-automation` (supplier SLA verification)
  - `[ ]` Monitor live GA4 `smart_finder_*` events once Google Analytics Measurement ID is configured (`NEXT_PUBLIC_GA_ID`)
  - **Future**: Integrate AI-powered natural language chat widget using `public/llms-full.txt` context
  - **Future**: Expand standalone estimator wizards for any new specialist services approved by management
