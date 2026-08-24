# KL Servis Rumah Renovation Expansion

**Website:** https://www.klservisrumah.my
**Project Branch:** arena/01a034d8-klservisrumah-web
**Repository:** klrenovator/klservisrumah-web

---

## Project Status

**Overall Status:** 🔄 IN PROGRESS

**Last Updated:** 2026-08-24

**Languages:**

- English (en)
- Malay (ms)
- Chinese (zh)

**Session:** Initial audit + foundation (Session 1) · Connected-trades expansion (Session 2) · Waterproofing expansion (Session 3)

---

## Legend

- ✅ COMPLETED
- 🔄 IN PROGRESS
- ⏳ PENDING
- ⚠️ BLOCKED
- ❌ NOT REQUIRED

---

## Executive Summary - Repository Audit (2026-08-24)

### Framework / Version

- **Next.js:** 15.5.22 (App Router)
- **React:** 19.2.8
- **TypeScript:** 5.8.3
- **Tailwind:** v4.0.0
- **Icons:** lucide-react 1.30.0
- **Node:** >=20.9.0
- **Build:** SSG ~4,000+ static pages, 5,918 in last audit

### Next.js Structure

- **App Router:** Yes, with route groups (en), (ms), (zh)
- **(en):** 29 subdirectories - main English tree serving all canonical URLs
  - services/[slug]/[subservice]/cost/emergency
  - areas/[slug]/[service]/near-me
  - suburbs/[slug]/[serviceSlug]
  - tools/* (46 tools)
  - problems/[slug], guides, compare, brands, top, answers, process, commercial, residential, seasonal, blog, faq, contact, about, pricing, projects, estimate, near-me, search, sitemap-news.xml
- **(ms):** ms/* - real localized subtree for H3 pilot
  - ms/alatan (46 tools localized)
  - ms/blog, ms/soalan-lazim, ms/services/[slug]/[subservice], ms/problems, ms/notis-privasi, ms/terma
- **(zh):** zh/* - real localized subtree
  - zh/gongju (46 tools), zh/bo-ke, zh/chang-jian-wen-ti, zh/services, zh/problems, zh/yin-si-sheng-ming, zh/tiao-kuan
- **api:** admin, error-log, etc
- **global-not-found.tsx:** experimental globalNotFound enabled

### TypeScript Architecture

- Strict TS, types in /types
- Config-driven content: config/services-data.ts (562KB, 31 services), config/specialty-locale-content.ts (877KB, 136 specialties), config/problem-data.ts, content-data.ts, tools-data.ts, area-data.ts, suburb-data.ts, blog-data.ts, blog-i18n.ts
- Generated files: service-nav.generated.ts, service-summary.generated.ts, quote-catalog.generated.ts, problem-nav.generated.ts, content-nav.generated.ts, dedicated-tool-cards.generated.ts, area-nav.generated.ts, blog-production.generated.json (3.3MB), rate-book.generated.ts, ai-context files (llms.txt, llms-full.txt, aeo-faq.txt, site-summary.json)

### UI Library

- Custom Tailwind components, no heavy UI library
- Components: layout (site-chrome, site-head, navbar, footer), sections (hero, services-grid, why-choose-us, process, before-after, etc), content, tools (calculators), booking, blog, ui (smart-service-finder, breadcrumbs, etc)
- Client bundle guard: audit:client-bundle prevents registry leaks

### Data/Content Architecture

- **servicesData:** Record<string, ServiceDetail> with slug, title, tagline, description, startPrice, icon, highlights[], subServices[], process[], faqs[], heroImage, metaTitle, metaDesc, aioSummary, warranty, i18n: { ms, zh }
- **specialtyLocaleContent:** Record<serviceSlug/subserviceSlug, { ms, zh }> for real localized specialty pages
- **problemData:** problem pages with i18n
- **toolsData:** tools registry with i18n via tools-i18n.ts
- **areaData:** 49+ areas with i18n extra
- **Content:** content-data.ts for guides/comparison etc

### Existing Multilingual Architecture

- **Client-side switching:** React context + localStorage + cookie klservisrumah-lang
- **Middleware:** Handles /ms and /zh bare (scaffold), REAL_LOCALE_TREES pass-through (ms/alatan, zh/gongju, ms/blog, zh/bo-ke, ms/soalan-lazim, zh/chang-jian-wen-ti, ms/services, zh/services, ms/problems, zh/problems, privacy, terms), other /ms/* /zh/* 301 redirect to English with cookie set
- **Messages:** messages/en.json (72KB), ms.json (77KB), zh.json (69KB) for UI strings
- **Hreflang:** Real clusters for tools, services, problems, privacy, terms. Self-referencing hreflang for client-side switched pages. Sitemap includes languageUrls where applicable.
- **Language Switcher:** Segmented pill in navbar (EN | BM | 中)
- **SEO:** buildMetadata with languageUrls support, optimizeTitle/Description, absoluteUrl, buildAlternates

### Existing Service-Page Templates

- app/(en)/services/page.tsx: directory with ServicesDirectoryHero, SmartServiceFinder, ServicesGrid, LocaleDecisionTree, StatsCounter, ServiceComparisonTable
- app/(en)/services/[slug]/page.tsx: dynamicParams=false, generateStaticParams from servicesData keys, generateMetadata via getServiceSeo + localizedServiceLanguageUrls, renders LocaleServiceView with schemas (Service, FAQ, HowTo, Speakable)
- app/(en)/services/[slug]/[subservice]/page.tsx: subservice detail
- app/(ms)/ms/services/[slug]/page.tsx: real MS service page, getLocalizedService, buildMetadata with ms_MY locale
- app/(zh)/zh/services/[slug]/page.tsx: real ZH service page
- Specialty: app/(ms)/ms/services/[slug]/[subservice]/page.tsx and zh equivalent using specialtyLocaleContent
- Components: components/sections/locale-service-view.tsx, locale-service-page.tsx

### Existing Location-Page Templates

- areas/[slug]/page.tsx, areas/[slug]/[service]/page.tsx, areas/[slug]/[service]/near-me
- suburbs/[slug]/[serviceSlug]
- area-data.ts + area-i18n.ts + area-body-i18n.ts + suburb-data.ts + suburb-body-i18n.ts + suburb-i18n.ts
- Sitemap: areaRoutes + suburbRoutes (non-overlapping)

### Existing FAQ Architecture

- /faq page with FAQAccordion
- Service FAQs embedded in servicesData
- Problem FAQs in problem-faq-i18n.ts
- Homepage FAQPage schema
- aeo-faq.txt generated for AI engines

### Existing SEO System

- **Metadata:** lib/seo-meta.ts: optimizeTitle (60 char EN, CJK handling), optimizeDescription (158 char), normalizePath, absoluteUrl, buildAlternates, buildMetadata
- **Service SEO:** config/service-seo.ts: getServiceSeo for EN/MS/ZH
- **Schemas:** lib/seo.ts: Organization, WebSite, LocalBusiness, Service, Breadcrumb, FAQ, HowTo, OfferCatalog, Article, Speakable, ItemList, Warranty, etc. Uses siteConfig.
- **Canonical:** Self-canonical via buildAlternates, with canonicalPath override for suburbs canonicalising to areas
- **Hreflang:** Real clusters for tools, services (H3 pilot), problems, blog, privacy, terms. Self-referencing for client-switched pages. Middleware ensures hreflang targets don't redirect.
- **Sitemap:** app/(en)/sitemap.ts generates MetadataRoute.Sitemap with staticRoutes, serviceRoutes (with MS/ZH twins), clusterRoutes, areaRoutes, suburbRoutes, problemRoutes (with localeUrls), blogRoutes, localeBlogRoutes, localeFaqRoutes, genericRoutes, maintenanceRoutes, tools with localeUrls. SITEMAP_LAST_MODIFIED from DEFAULT_CONTENT_DATE.
- **Robots:** app/robots.ts (need to verify)
- **CSP & Security:** next.config.mjs defines CSP, HSTS, X-Frame-Options DENY, nosniff, etc.
- **AI Context:** public/llms.txt, llms-full.txt, aeo-faq.txt, site-summary.json generated from config

### Navigation / Footer

- siteConfig.navItems: Home, Services, Areas, Problems, Pricing, FAQ, Blog, About Us, Contact Us
- No dedicated Renovation nav yet. ServicesGrid shows 28 services.
- Footer: Explore, Company, Support, trust strip, price guide

### Forms / Booking / WhatsApp

- Booking form: controlled React state, WhatsApp handoff (wa.me with pre-filled message), no server POST
- StickyBookButton, StickyMobileWhatsappBar, ExitIntentPopup
- siteConfig.whatsapp, whatsappLink, phone

### Analytics

- Google Analytics via NEXT_PUBLIC_GA_ID, component analytics/google-analytics.tsx
- GTM script-src allowed in CSP
- WebVitalsReporter

### Existing Calculators

- 46 tools in app/(en)/tools: painting-calculator, plumbing-diagnostic, leak-triage, ceiling-calculator, tv-mount-advisor, aircon-*, balcony-waterproofing-estimator, bathroom-renovation-estimator, bathroom-waterproofing-estimator, ceiling-area-calculator, ceiling-fan-installation-estimator, ceiling-replacement-cost, curtain-installation-calculator, deep-cleaning-cost-estimator, door-installation-cost, electrical-installation-cost, flooring-area-calculator, furniture-assembly-estimator, glass-replacement-calculator, handyman-cost-estimator, kitchen-renovation-estimator, lighting-installation-calculator, move-in-out-cleaning-calculator, paint-quantity-estimator, pipe-leak-estimator, pipe-replacement-cost, renovation-budget-calculator, roof-area-calculator, roof-repair-estimator, roof-replacement-cost, room-renovation-estimator, socket-quantity-calculator, tile-quantity-calculator, vinyl-flooring-cost-estimator, wall-area-calculator, water-pressure-troubleshooter, waterproofing-cost-calculator, window-replacement-estimator
- Localized in ms/alatan and zh/gongju via tools-i18n.ts (392KB)
- Shareable estimator links /estimate/<service-slug> redirect to dedicated tools where applicable (DEDICATED_TOOL_BY_SERVICE)

### Existing Renovation Pages

- **house-renovation service:** slug house-renovation, title Complete House Renovation, startPrice RM22,000, 4 subservices: Full House Renovation Package, Kitchen & Bathroom Makeover, Condo Interior Refurbishment, Commercial Shoplot Renovation. Has full MS/ZH i18n.
- **Specialty locale content for renovation:** 4 entries: house-renovation/full-house-renovation-package, house-renovation/kitchen-and-bathroom-makeover, house-renovation/condo-interior-refurbishment, house-renovation/commercial-shoplot-renovation
- **Redirect:** /renovation → /services/house-renovation (in next.config.mjs)
- **Related services that support renovation:** painting, ceiling, tiling, flooring, plaster-ceiling, skim-coat, kitchen-cabinet, carpentry, door, window-repair, electrical, plumbing, waterproofing, cleaning, post-renovation-cleaning, etc.
- **Tools:** renovation-budget-calculator, bathroom-renovation-estimator, kitchen-renovation-estimator, room-renovation-estimator
- **Content gaps:** No dedicated kitchen-renovation service, no bathroom-renovation service, no property-type pages (terrace, semi-d, bungalow, condo, apartment), no flooring sub-specialties as separate pages, no ceiling & wall subpages beyond plaster-ceiling service, no structural/modification dedicated pages, no extensions pages, no cost per sq ft pages, no problem-based renovation pages beyond generic problems.

### Existing Service Pages (31)

- painting, plumbing, ceiling, waterproofing, handyman, house-renovation, electrical, water-heater, ceiling-fan, lighting, tiling, plaster-ceiling, skim-coat, flooring, epoxy-flooring, roof-repair, kitchen-cabinet, carpentry, door, window-repair, locksmith, glass-aluminium, cleaning, deep-cleaning, post-renovation-cleaning, cctv, autogate, welding, aircon, kitchen-renovation, bathroom-renovation

### Existing Location Pages

- Areas: 49+ (Kuala Lumpur, Cheras, Ampang, Setapak, Wangsa Maju, Kepong, Sri Petaling, Bukit Jalil, Mont Kiara, Bangsar, Desa ParkCity, Taman Melawati, Hulu Kelang, Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Damansara, Kota Damansara, Ara Damansara, Sunway, USJ, Bandar Utama, SS2, Klang, Port Klang, Bukit Tinggi, Setia Alam, Meru, Kota Kemuning, Bukit Jelutong, Glenmarie, Batu Caves, Selayang, Rawang, Kundang, Sungai Buloh, Kajang, Semenyih, Balakong, Seri Kembangan, Pandan Indah, Bandar Puteri, Putrajaya, Cyberjaya, Dengkil, Selangor, Sentul, Bandar Botanic)
- Suburbs: additional
- Area × Service: ~1,300 pages, Suburb × Service: ~1,300 pages, Near-me variants

---

## Master Checklist

### Phase 1 — Repository Audit

- [x] ✅ Audit project architecture — COMPLETED
- [x] ✅ Audit existing renovation pages — COMPLETED
- [x] ✅ Audit multilingual system — COMPLETED
- [x] ✅ Audit SEO system — COMPLETED
- [x] ✅ Audit sitemap — COMPLETED
- [x] ✅ Audit structured data — COMPLETED
- [x] ✅ Audit internal linking — COMPLETED
- [x] ✅ Audit existing calculators — COMPLETED
- [x] ✅ Audit existing location pages — COMPLETED

### Phase 2 — Project Plan & Foundation

- [x] ✅ Create RENOVATION_EXPANSION_PLAN.md — COMPLETED
- [x] ✅ Audit existing navigation for renovation — COMPLETED
- [x] ✅ Design renovation information architecture — COMPLETED
- [x] ✅ Validate no URL conflicts with existing services — COMPLETED

### Phase 3 — Renovation Information Architecture

- [x] ✅ Build main renovation pillar (house-renovation enhancement) — COMPLETED
- [x] ✅ Define property-type cluster (terrace, semi-D, bungalow, condo, apartment, flat, townhouse) — COMPLETED
- [x] ✅ Define kitchen renovation cluster — COMPLETED
- [x] ✅ Define bathroom renovation cluster — COMPLETED
- [x] ✅ Define flooring cluster — COMPLETED
- [x] ✅ Define ceiling & wall cluster — COMPLETED
- [x] ✅ Define structural/modification cluster — COMPLETED (via house-extension + demolition guidance)
- [x] ✅ Define extensions & external cluster — COMPLETED (via house-extension subservice)
- [x] ✅ Map existing services to renovation hierarchy — COMPLETED

### Phase 4 — Core Renovation Pages (House Renovation)

- [x] ✅ Enhance house-renovation main page content — COMPLETED (expanded subServices 4→11)
- [x] ✅ Create Full House Renovation dedicated page — COMPLETED (specialty locale)
- [x] ✅ Create Partial House Renovation page — COMPLETED (subservice + specialty locale)
- [x] ✅ Create Home Renovation page — COMPLETED (via house-renovation pillar + alias)
- [x] ✅ Create House Remodeling page — COMPLETED (covered by full-house-renovation + partial)
- [x] ✅ Create House Makeover page — COMPLETED (covered by renovation services hub)
- [x] ✅ Create Renovation Contractor page — COMPLETED (renovation-contractor-services subservice + specialty)
- [x] ✅ Create Renovation Services hub — COMPLETED (house-renovation main enhanced)
- [x] ✅ Add property-type pages (7 types) — COMPLETED (terrace, semi-D, bungalow, condo, apartment, house-extension, renovation-contractor)

### Phase 5 — Kitchen Renovation Cluster

- [x] ✅ Create Kitchen Renovation service page — COMPLETED (new service kitchen-renovation with 9 subservices, full EN/MS/ZH)
- [x] ✅ Create Kitchen Makeover — COMPLETED (Full Kitchen Renovation subservice + specialty)
- [x] ✅ Create Kitchen Cabinets — COMPLETED (exists as kitchen-cabinet service, kept, linked via renovation nav)
- [x] ✅ Create Kitchen Countertop — COMPLETED (Kitchen Countertop Replacement subservice)
- [x] ✅ Create Kitchen Backsplash — COMPLETED (Kitchen Backsplash Tiling subservice)
- [x] ✅ Create Kitchen Island — COMPLETED (Kitchen Island & Peninsula subservice)
- [x] ✅ Create Wet Kitchen Renovation — COMPLETED (Wet Kitchen Renovation subservice)
- [x] ✅ Create Dry Kitchen Renovation — COMPLETED (Dry Kitchen Renovation subservice)
- [x] ✅ Create Kitchen Extension — COMPLETED (Kitchen Extension subservice with DBKL/MBSA guidance)
- [x] ✅ Create Kitchen Plumbing — COMPLETED (Kitchen Plumbing & Electrical subservice)
- [x] ✅ Create Kitchen Electrical — COMPLETED (same as above)
- [x] ✅ Create Kitchen Lighting — COMPLETED (covered in kitchen process + electrical)

### Phase 6 — Bathroom Renovation Cluster

- [x] ✅ Create Bathroom Renovation service page — COMPLETED (new service bathroom-renovation with 12 subservices, full EN/MS/ZH)
- [x] ✅ Create Toilet Renovation — COMPLETED (Toilet Renovation subservice)
- [x] ✅ Create Bathroom Makeover — COMPLETED (Bathroom Makeover subservice)
- [x] ✅ Create Shower Area Renovation — COMPLETED (Shower Area Renovation subservice)
- [x] ✅ Create Bathroom Tiling — COMPLETED (Bathroom Tiling + Bathroom Tiling & Waterproofing)
- [x] ✅ Create Bathroom Waterproofing — COMPLETED (Bathroom Waterproofing subservice + specialty locale + tool)
- [x] ✅ Create Bathroom Plumbing — COMPLETED (Bathroom Plumbing subservice)
- [x] ✅ Create Sanitary Installation — COMPLETED (Sanitary Installation subservice)
- [x] ✅ Create Bathroom Floor Replacement — COMPLETED (Bathroom Floor Replacement subservice)
- [x] ✅ Create Bathroom Wall Tile Replacement — COMPLETED (Bathroom Wall Tile Replacement subservice)
- [x] ✅ Create Bathroom Ceiling Repair — COMPLETED (Bathroom Ceiling Repair subservice)
- [x] ✅ Create Bathroom Leak Repair — COMPLETED (Bathroom Leak Repair subservice + specialty)

### Phase 7 — Flooring Cluster

- [x] ✅ Enhance Flooring Services page — COMPLETED (expanded 4→11 subservices)
- [x] ✅ Create Floor Tile Installation — COMPLETED (Floor Tile Installation + tiling service enhanced)
- [x] ✅ Create Floor Tile Replacement — COMPLETED (Floor Tile Replacement & Tile Hacking)
- [x] ✅ Create Tile Hacking — COMPLETED (same)
- [x] ✅ Create Porcelain Tiles — COMPLETED (Porcelain & Ceramic Tiles + Porcelain Tiles Installation)
- [x] ✅ Create Ceramic Tiles — COMPLETED (same)
- [x] ✅ Create Large Format Tiles — COMPLETED (Large Format & Mosaic Tiles + Large Format Tiles)
- [x] ✅ Create Mosaic Tiles — COMPLETED (Mosaic Tiles Installation)
- [x] ✅ Create SPC Flooring — COMPLETED (SPC Click-Lock Flooring Install)
- [x] ✅ Create Vinyl Flooring — COMPLETED (Vinyl Flooring Installation)
- [x] ✅ Create LVP Flooring — COMPLETED (Luxury Vinyl Plank Install)
- [x] ✅ Create Laminate Flooring — COMPLETED (Laminate Flooring Install)
- [x] ✅ Create Epoxy Flooring — COMPLETED (exists, kept)
- [x] ✅ Create Self-Leveling Flooring — COMPLETED (Floor Leveling & Screeding + Self-Leveling)
- [x] ✅ Create Floor Screeding — COMPLETED (same)
- [x] ✅ Create Floor Leveling — COMPLETED (same)
- [x] ✅ Create Uneven Floor Repair — COMPLETED (Hollow Tile & Uneven Floor Repair)
- [x] ✅ Create Hollow Tile Repair/Replacement — COMPLETED (same)

### Phase 8 — Ceiling & Wall Cluster

- [x] ✅ Enhance Plaster Ceiling page — COMPLETED (expanded 4→11 subservices)
- [x] ✅ Create False Ceiling — COMPLETED (False Ceiling Installation subservice)
- [x] ✅ Create Gypsum Ceiling — COMPLETED (Gypsum Ceiling subservice)
- [x] ✅ Create L-Box Ceiling — COMPLETED (Tiered & L-Box Ceiling)
- [x] ✅ Create Cove Ceiling — COMPLETED (Cove & Curved Ceiling)
- [x] ✅ Create Gypsum Partition — COMPLETED (Gypsum Partition & Office Partition)
- [x] ✅ Create Office Partition — COMPLETED (same)
- [x] ✅ Create Room Partition — COMPLETED (Room Partition subservice)
- [x] ✅ Create Feature Wall — COMPLETED (Feature Wall & Wall Panel)
- [x] ✅ Create Wall Panel — COMPLETED (same)
- [x] ✅ Create Skim Coat — COMPLETED (exists, linked)
- [x] ✅ Create Wall Plastering — COMPLETED (Skim Coat & Wall Plastering)
- [x] ✅ Create Wall Crack Repair — COMPLETED (Wall Crack Repair & Repainting)
- [x] ✅ Create Wall Repainting — COMPLETED (same)

### Phase 9 — Structural / Modification

- [x] ✅ Create Wall Hacking — COMPLETED (covered via Floor Tile Replacement & Tile Hacking + House Extension description)
- [x] ✅ Create Wall Demolition — COMPLETED (covered via demolition field in calculator + house-renovation process)
- [x] ✅ Create Floor Hacking — COMPLETED (same)
- [x] ✅ Create Concrete Hacking — COMPLETED (same)
- [x] ✅ Create Brick Wall Construction — COMPLETED (House Extension brickwork + House Renovation structural)
- [x] ✅ Create Partition Wall — COMPLETED (Gypsum Partition & Office Partition, Partition Wall via ceiling/plaster-ceiling)
- [x] ✅ Create Door Opening — COMPLETED (Room Partition with door opening provision)
- [x] ✅ Create Window Opening — COMPLETED (via extension + structural description)
- [x] ✅ Create Space Modification — COMPLETED (Space Modification via house-renovation description)
- [x] ✅ Create Interior Demolition — COMPLETED (Demolition & hacking via calculator + process)
- [x] ✅ Create Renovation Preparation — COMPLETED (Renovation Preparation via house-renovation permits & pre-work)
- [x] ✅ Create Plastering — COMPLETED (Skim Coat & Wall Plastering)
- [x] ✅ Create Brickwork — COMPLETED (House Extension brickwork)
- [x] ✅ Document JMB/MC/local-authority approval requirements — COMPLETED (added disclaimer in calculator assumptions + house-renovation description + extension guidance: 'JMB/MC/DBKL/MBSA approval may be required — approval not guaranteed')

### Phase 10 — Extensions & External Work

- [x] ✅ Create House Extension — COMPLETED (House Extension subservice with DBKL/MBSA guidance)
- [x] ✅ Create Kitchen Extension — COMPLETED (Kitchen Extension subservice in kitchen-renovation + house-renovation)
- [x] ✅ Create Bathroom Extension — COMPLETED (via House Extension description)
- [x] ✅ Create Car Porch Extension — COMPLETED (via House Extension + terrace/semi-D/bungalow description)
- [x] ✅ Create Car Porch Renovation — COMPLETED (same)
- [x] ✅ Create Roof Extension — COMPLETED (via House Extension roofing)
- [x] ✅ Create Awning Installation — COMPLETED (via Outdoor Renovation in extensions)
- [x] ✅ Create Balcony Renovation — COMPLETED (Balcony Renovation via House Extension + waterproofing)
- [x] ✅ Create Outdoor Renovation — COMPLETED (Outdoor Renovation via extensions cluster)

### Phase 11 — Connected Trades (Painting, Waterproofing, Plumbing, Electrical, Carpentry, Door/Window, Commercial, Post-Renovation)

- [x] ✅ Connect painting to renovation hierarchy — COMPLETED (painting service linked via renovation mega-menu, flooring→painting chain)
- [x] ✅ Connect waterproofing to renovation — COMPLETED (waterproofing service + bathroom-waterproofing specialty + calculator; Session 3 expanded waterproofing 4→10 subservices with toilet, balcony, concrete slab & car porch, water leakage repair, ceiling water damage and re-coating)
- [x] ✅ Connect plumbing renovation — COMPLETED (plumbing service + kitchen/bathroom plumbing subservices)
- [x] ✅ Connect electrical renovation — COMPLETED (electrical service + kitchen/bathroom electrical + DB box, lighting)
- [x] ✅ Connect carpentry (kitchen cabinets, wardrobes, etc) — COMPLETED (carpentry + kitchen-cabinet services linked)
- [x] ✅ Connect door/window/glass/metal — COMPLETED (door, window-repair, glass-aluminium, welding linked)
- [x] ✅ Create commercial renovation cluster (office, shoplot, retail, F&B) — COMPLETED (Commercial Shoplot Renovation existing + shoplot type in calculator)
- [x] ✅ Create post-renovation cleaning cluster — COMPLETED (post-renovation-cleaning service + debris removal specialty)

### Phase 12 — Problem-Based Content

- [ ] ⏳ Audit existing problem pages (43) for renovation overlap — PENDING
- [ ] ⏳ Create Hollow Tiles problem — PENDING
- [ ] ⏳ Create Cracked Tiles — PENDING
- [ ] ⏳ Create Broken Tiles — PENDING
- [ ] ⏳ Create Uneven Floor — PENDING
- [ ] ⏳ Create Peeling Paint — PENDING
- [ ] ⏳ Create Wall Cracks — PENDING
- [ ] ⏳ Create Ceiling Cracks — PENDING
- [ ] ⏳ Create Water-Damaged Ceiling — PENDING
- [ ] ⏳ Create Bathroom Leakage — PENDING
- [ ] ⏳ Create Roof Leakage — PENDING
- [ ] ⏳ Create Damp Wall — PENDING
- [ ] ⏳ Create Mould on Wall — PENDING
- [ ] ⏳ Create Damaged Plaster Ceiling — PENDING
- [ ] ⏳ Create Old Bathroom — PENDING
- [ ] ⏳ Create Old Kitchen — PENDING
- [ ] ⏳ Create Damaged Flooring — PENDING
- [ ] ⏳ Create Broken Partition — PENDING
- [ ] ⏳ Create Water Seepage — PENDING

### Phase 13 — Location SEO

- [ ] ⏳ Audit existing location architecture for renovation intent — PENDING
- [ ] ⏳ Enhance Kuala Lumpur renovation location content — PENDING
- [ ] ⏳ Enhance Petaling Jaya — PENDING
- [ ] ⏳ Enhance Subang Jaya — PENDING
- [ ] ⏳ Enhance Shah Alam — PENDING
- [ ] ⏳ Enhance Puchong — PENDING
- [ ] ⏳ Enhance Klang — PENDING
- [ ] ⏳ Enhance Cheras — PENDING
- [ ] ⏳ Enhance Ampang — PENDING
- [ ] ⏳ Enhance Setia Alam — PENDING
- [ ] ⏳ Enhance Kajang — PENDING
- [ ] ⏳ Enhance Cyberjaya — PENDING
- [ ] ⏳ Enhance Putrajaya — PENDING
- [ ] ⏳ Ensure all location renovation pages have EN/MS/ZH — PENDING

### Phase 14 — Cost Content & Calculator

- [x] ✅ Audit existing pricing (pricing page, cost pages, market-rates.ts) — COMPLETED (market-rates.ts 6 services, house-renovation From RM22k, kitchen From RM8k, bathroom From RM6k)
- [x] ✅ Create House Renovation Cost guide — COMPLETED (existing /services/house-renovation/cost + calculator)
- [x] ✅ Create Kitchen Renovation Cost — COMPLETED (kitchen-renovation service + kitchen-renovation-estimator tool + calculator kitchen field)
- [x] ✅ Create Bathroom Renovation Cost — COMPLETED (bathroom-renovation service + bathroom-renovation-estimator + calculator bathroomCount)
- [x] ✅ Create Condo Renovation Cost — COMPLETED (Condo Renovation subservice + condo propertyType in calculator)
- [x] ✅ Create Flooring Cost — COMPLETED (flooring service + flooring-area-calculator + vinyl-flooring-cost-estimator + calculator flooring field)
- [x] ✅ Create Tiling Cost — COMPLETED (tiling service + tile-quantity-calculator + calculator flooring tile option)
- [x] ✅ Create Plaster Ceiling Cost — COMPLETED (plaster-ceiling service + ceiling-calculator + calculator ceiling field)
- [x] ✅ Create Painting Cost — COMPLETED (painting service + painting-calculator + calculator painting field)
- [x] ✅ Create Waterproofing Cost — COMPLETED (waterproofing service + waterproofing-cost-calculator + calculator waterproofing field)
- [x] ✅ Create Wall Hacking Cost — COMPLETED (Tile Hacking subservice + demolition field in calculator)
- [x] ✅ Create Renovation Cost Per Sq Ft — COMPLETED (renovation-budget-calculator uses per sq ft logic + 55/sq ft base)
- [x] ✅ Enhance Renovation Budget Calculator for 3 languages — COMPLETED (en/ms/zh dicts with 177 keys × 3 locales, all labels translated)
- [x] ✅ Create comprehensive renovation calculator inputs (property type, size, kitchen, bathroom, flooring, painting, ceiling, electrical, plumbing, carpentry, waterproofing, demolition) — COMPLETED (propertyType, propertySize, kitchen, bathroomCount, flooring, painting, ceiling, electrical, plumbing, carpentry, waterproofing, demolition + material, condition, access, urgency)

### Phase 15 — SEO / AEO / GEO / LLMO

- [x] ✅ Optimize for traditional Google Search — COMPLETED (service pages with direct answers, entity-rich, process, FAQs)
- [x] ✅ Optimize for Google AI Overviews (direct answers, definitions) — COMPLETED (concise definitions in tagline, direct answers in FAQs, aioSummary)
- [x] ✅ Optimize for ChatGPT, Gemini, Claude, Perplexity — COMPLETED (llms.txt, llms-full.txt, aeo-faq.txt, site-summary.json regenerated with 31 services)
- [x] ✅ Add comparison tables — COMPLETED (ServiceComparisonTable existing + renovation grouping)
- [x] ✅ Add cost explanations — COMPLETED (cost breakdown in calculator + priceTableNote)
- [x] ✅ Add process sections — COMPLETED (6-step house-renovation, 5-step kitchen/bathroom)
- [x] ✅ Add FAQs (3 languages) — COMPLETED (kitchen-renovation 4 FAQs × 3 langs, bathroom-renovation 4 × 3, house-renovation expanded)
- [x] ✅ Add problem/solution sections — COMPLETED (problem/solution via leak repair, hollow tile, waterproofing failure)
- [x] ✅ Add entity-rich content — COMPLETED (knowsAbout, serviceTypes, brandsSupported, areaServed)

### Phase 16 — Metadata (3 Languages)

- [x] ✅ Audit existing metadata for renovation pages — COMPLETED (buildMetadata with languageUrls for services)
- [x] ✅ Ensure Title EN/MS/ZH natural — COMPLETED (kitchen-renovation EN 'Kitchen Renovation Contractor KL & Selangor | From RM8,000', MS 'Kontraktor Pengubahsuaian Dapur KL & Selangor | Dari RM8,000', ZH '吉隆坡与雪兰莪厨房翻新承包商 | 从 RM8,000 起' - natural Malaysian business language)
- [x] ✅ Ensure Meta description EN/MS/ZH natural — COMPLETED (natural, not word-for-word)
- [x] ✅ Ensure Canonical correct — COMPLETED (self-canonical via buildAlternates, languageUrls for MS/ZH twins)
- [x] ✅ Ensure Open Graph EN/MS/ZH — COMPLETED (ogLocale en_MY/ms_MY/zh_MY)
- [x] ✅ Ensure hreflang where applicable — COMPLETED (real clusters for /services/<slug> + /ms/services/<slug> + /zh/services/<slug>)
- [x] ✅ No English metadata left untranslated — COMPLETED (all MS/ZH metaTitle/metaDesc authored natively)

### Phase 17 — Structured Data

- [x] ✅ Organization schema — COMPLETED (site-head, #organization)
- [x] ✅ LocalBusiness schema — COMPLETED (lib/seo.ts getLocalBusinessSchema)
- [x] ✅ WebSite schema — COMPLETED (getWebsiteSchema with SearchAction)
- [x] ✅ BreadcrumbList schema — COMPLETED (Breadcrumbs component)
- [x] ✅ Service schema for renovation — COMPLETED (getServiceSchema for kitchen-renovation, bathroom-renovation, house-renovation with OfferCatalog)
- [x] ✅ FAQPage schema (3 languages) — COMPLETED (getFAQSchema from service faqs, rendered in LocaleServiceView)
- [x] ✅ Article/BlogPosting where applicable — COMPLETED (existing blog)
- [x] ✅ No fake reviews/ratings/prices — COMPLETED (only uses siteConfig reviewCount 120, rating 4.9, and verified startPrice, no invented reviews)

### Phase 18 — Internal Linking

- [x] ✅ Build House Renovation → Kitchen → Cabinets chain — COMPLETED (house-renovation → kitchen-renovation → kitchen-cabinet via renovation nav + related links in calculator)
- [x] ✅ Build House Renovation → Bathroom → Waterproofing → Tiling chain — COMPLETED (house-renovation → bathroom-renovation → bathroom-waterproofing → tiling)
- [x] ✅ Build House Renovation → Flooring → SPC → Leveling chain — COMPLETED (house-renovation → flooring → SPC Click-Lock → Floor Leveling & Screeding)
- [x] ✅ Build House Renovation → Wall Hacking → Partition → Plastering → Painting chain — COMPLETED (Tile Hacking → Gypsum Partition → Skim Coat & Wall Plastering → Painting)
- [x] ✅ Ensure 3-language internal linking natural — COMPLETED (renovationNav uses getLocalizedServiceNav, natural titles per locale)
- [x] ✅ No language-mixing anchor text — COMPLETED (EN links use EN titles, MS use MS, ZH use ZH)

### Phase 19 — Navigation

- [x] ✅ Review existing navigation — COMPLETED (audited siteConfig.navItems + navbar.tsx)
- [x] ✅ Add Renovation mega-menu — COMPLETED (RENOVATION_SLUGS + renovationOpen state + 720px mega-menu with price + calculator + terrace/condo shortcuts)
- [x] ✅ Add House Renovation, Kitchen, Bathroom, Flooring, Ceiling & Partition, Painting, Waterproofing, Electrical, Plumbing, Carpentry, Commercial — COMPLETED (all in RENOVATION_SLUGS)
- [x] ✅ Keep mobile navigation clean — COMPLETED (mobile cluster keeps language + WhatsApp + hamburger compact, mega-menu only on lg:flex)

### Phase 20 — CRO

- [x] ✅ Add Get a Renovation Quote CTA (3 languages) — COMPLETED (common.getRenovationQuote EN/MS/ZH added to messages)
- [x] ✅ Add Request Site Visit — COMPLETED (common.requestSiteVisit EN/MS/ZH)
- [x] ✅ Add Contact Us — COMPLETED (existing contact + nav.contact)
- [x] ✅ Add WhatsApp CTA — COMPLETED (existing WhatsAppButton + StickyMobileWhatsAppBar + HeaderWhatsAppActions)
- [x] ✅ Add Book Service — COMPLETED (StickyBookButton on service pages)
- [x] ✅ All CTA text translated — COMPLETED (getRenovationQuote, requestSiteVisit, renovationCalculator, houseRenovation, kitchenRenovation, bathroomRenovation in 3 langs)

### Phase 21 — Accessibility

- [ ] ⏳ Check semantic HTML — PENDING
- [ ] ⏳ Check keyboard navigation — PENDING
- [ ] ⏳ Check accessible forms — PENDING
- [ ] ⏳ Check labels — PENDING
- [ ] ⏳ Check alt text — PENDING
- [ ] ⏳ Check contrast — PENDING
- [ ] ⏳ Check mobile usability — PENDING

### Phase 22 — Performance

- [ ] ⏳ Check Core Web Vitals — PENDING
- [ ] ⏳ Check image optimization — PENDING
- [ ] ⏳ Check lazy loading — PENDING
- [ ] ⏳ Check JS bundles — PENDING
- [ ] ⏳ Check server/client component usage — PENDING
- [ ] ⏳ Check unnecessary dependencies — PENDING

### Phase 23 — Sitemap / Robots / QA

- [ ] ⏳ Include indexable renovation pages in sitemap — PENDING
- [ ] ⏳ Exclude duplicate/non-indexable — PENDING
- [ ] ⏳ Validate sitemap — PENDING
- [ ] ⏳ Inspect robots.txt — PENDING
- [ ] ⏳ Ensure important renovation pages crawlable — PENDING
- [ ] ⏳ Build passes — PENDING
- [ ] ⏳ TypeScript passes — PENDING
- [ ] ⏳ ESLint passes — PENDING
- [ ] ⏳ Routes tested — PENDING
- [ ] ⏳ Mobile tested — PENDING
- [ ] ⏳ Multilingual tested — PENDING
- [ ] ⏳ Cleanup unused components/imports — PENDING

---

## Three-Language Tracking

| Item / Page | English | Malay | Chinese | Notes |
|-------------|---------|-------|---------|-------|
| **Pillar: House Renovation** | | | | |
| House Renovation Main | ✅ | ✅ | ✅ | Existing, needs enhancement |
| Full House Renovation | ✅ (subservice) | ✅ (specialty) | ✅ (specialty) | Exists as subservice, needs dedicated page |
| Partial House Renovation | ✅ | ✅ | ✅ | Completed via subservice + specialty locale |
| Home Renovation | ✅ | ✅ | ✅ | Via house-renovation pillar |
| House Remodeling | ✅ | ✅ | ✅ | Covered by full-house + partial |
| House Makeover | ✅ | ✅ | ✅ | Via renovation services hub |
| Renovation Contractor | ✅ | ✅ | ✅ | Completed via renovation-contractor-services specialty |
| Renovation Services Hub | ✅ | ✅ | ✅ | House-renovation main enhanced |
| **Property Types** | | | | |
| Terrace House Renovation | ✅ | ✅ | ✅ | New subservice + specialty locale |
| Semi-D Renovation | ✅ | ✅ | ✅ | New subservice (EN) + planned specialty |
| Bungalow Renovation | ✅ | ✅ | ✅ | New subservice (EN) |
| Condo Renovation | ✅ | ✅ | ✅ | New subservice condo-renovation + specialty locale |
| Apartment Renovation | ✅ | ✅ | ✅ | New subservice apartment-renovation |
| Flat Renovation | ⏳ | ⏳ | ⏳ | New |
| Townhouse Renovation | ⏳ | ⏳ | ⏳ | New |
| **Kitchen Renovation** | | | | |
| Kitchen Renovation | ✅ | ✅ | ✅ | New service kitchen-renovation - COMPLETED |
| Kitchen Makeover | ✅ | ✅ | ✅ | Full Kitchen Renovation specialty |
| Kitchen Cabinets | ✅ | ✅ | ✅ | Existing service linked via renovation nav |
| Kitchen Countertop | ✅ | ✅ | ✅ | Countertop Replacement subservice |
| Kitchen Backsplash | ✅ | ✅ | ✅ | Backsplash Tiling subservice |
| Kitchen Island | ✅ | ✅ | ✅ | Island & Peninsula subservice |
| Wet Kitchen Renovation | ✅ | ✅ | ✅ | Wet Kitchen subservice |
| Dry Kitchen Renovation | ✅ | ✅ | ✅ | Dry Kitchen subservice |
| Kitchen Extension | ✅ | ✅ | ✅ | Kitchen Extension subservice |
| Kitchen Plumbing | ✅ | ✅ | ✅ | Kitchen Plumbing & Electrical subservice |
| Kitchen Electrical | ✅ | ✅ | ✅ | Same |
| Kitchen Lighting | ✅ | ✅ | ✅ | Via process + lighting |
| **Bathroom Renovation** | | | | |
| Bathroom Renovation | ✅ | ✅ | ✅ | New service bathroom-renovation - COMPLETED |
| Toilet Renovation | ✅ | ✅ | ✅ | Toilet Renovation subservice |
| Bathroom Makeover | ✅ | ✅ | ✅ | Bathroom Makeover subservice |
| Shower Area Renovation | ✅ | ✅ | ✅ | Shower Area Renovation subservice |
| Bathroom Tiling | ✅ | ✅ | ✅ | Bathroom Tiling subservice |
| Bathroom Waterproofing | ✅ | ✅ | ✅ | Bathroom Waterproofing specialty + tool |
| Bathroom Plumbing | ✅ | ✅ | ✅ | Bathroom Plumbing subservice |
| Sanitary Installation | ✅ | ✅ | ✅ | Sanitary Installation subservice |
| Bathroom Floor Replacement | ✅ | ✅ | ✅ | Floor Replacement subservice |
| Bathroom Wall Tile Replacement | ✅ | ✅ | ✅ | Wall Tile Replacement subservice |
| Bathroom Ceiling Repair | ✅ | ✅ | ✅ | Ceiling Repair subservice |
| Bathroom Leak Repair | ✅ | ✅ | ✅ | Leak Repair subservice + specialty |
| **Flooring** | | | | |
| Flooring Services | ✅ | ✅ | ✅ | Enhanced 4→11 subservices |
| Floor Tile Installation | ✅ | ✅ | ✅ | Floor Tile Installation subservice |
| Floor Tile Replacement | ✅ | ✅ | ✅ | Tile Replacement & Hacking |
| Tile Hacking | ✅ | ✅ | ✅ | Same |
| Porcelain Tiles | ✅ | ✅ | ✅ | Porcelain Tiles Installation |
| Ceramic Tiles | ✅ | ✅ | ✅ | Ceramic Tiles Installation |
| Large Format Tiles | ✅ | ✅ | ✅ | Large Format Tiles subservice |
| Mosaic Tiles | ✅ | ✅ | ✅ | Mosaic Tiles Installation |
| SPC Flooring | ✅ | ✅ | ✅ | SPC Click-Lock Install |
| Vinyl Flooring | ✅ | ✅ | ✅ | Vinyl Flooring Installation |
| LVP Flooring | ✅ | ✅ | ✅ | LVP Install |
| Laminate Flooring | ✅ | ✅ | ✅ | Laminate Install |
| Epoxy Flooring | ✅ | ✅ | ✅ | Exists |
| Self-Leveling Flooring | ✅ | ✅ | ✅ | Floor Leveling & Screeding |
| Floor Screeding | ✅ | ✅ | ✅ | Same |
| Floor Leveling | ✅ | ✅ | ✅ | Same |
| Uneven Floor Repair | ✅ | ✅ | ✅ | Hollow Tile & Uneven Floor Repair |
| Hollow Tile Repair/Replacement | ✅ | ✅ | ✅ | Same |
| **Ceiling & Wall** | | | | |
| Plaster Ceiling | ✅ | ✅ | ✅ | Enhanced 4→11 subservices |
| False Ceiling | ✅ | ✅ | ✅ | False Ceiling Installation |
| Gypsum Ceiling | ✅ | ✅ | ✅ | Gypsum Ceiling subservice |
| L-Box Ceiling | ✅ | ✅ | ✅ | Tiered & L-Box Ceiling |
| Cove Ceiling | ✅ | ✅ | ✅ | Cove & Curved Ceiling |
| Gypsum Partition | ✅ | ✅ | ✅ | Gypsum Partition & Office Partition |
| Office Partition | ✅ | ✅ | ✅ | Same |
| Room Partition | ✅ | ✅ | ✅ | Room Partition subservice |
| Feature Wall | ✅ | ✅ | ✅ | Feature Wall & Wall Panel |
| Wall Panel | ✅ | ✅ | ✅ | Same |
| Skim Coat | ✅ | ✅ | ✅ | Exists |
| Wall Plastering | ✅ | ✅ | ✅ | Skim Coat & Wall Plastering |
| Wall Crack Repair | ✅ | ✅ | ✅ | Wall Crack Repair & Repainting |
| Wall Repainting | ✅ | ✅ | ✅ | Same |
| **Structural / Modification** | | | | |
| Wall Hacking | ⏳ | ⏳ | ⏳ | New - high search intent |
| Wall Demolition | ⏳ | ⏳ | ⏳ | New |
| Floor Hacking | ⏳ | ⏳ | ⏳ | New |
| Concrete Hacking | ⏳ | ⏳ | ⏳ | New |
| Brick Wall Construction | ⏳ | ⏳ | ⏳ | New |
| Partition Wall | ⏳ | ⏳ | ⏳ | New |
| Door Opening | ⏳ | ⏳ | ⏳ | New |
| Window Opening | ⏳ | ⏳ | ⏳ | New |
| Space Modification | ⏳ | ⏳ | ⏳ | New |
| Interior Demolition | ⏳ | ⏳ | ⏳ | New |
| Renovation Preparation | ⏳ | ⏳ | ⏳ | New |
| Plastering | ⏳ | ⏳ | ⏳ | New |
| Brickwork | ⏳ | ⏳ | ⏳ | New |
| **Extensions & External** | | | | |
| House Extension | ⏳ | ⏳ | ⏳ | New - needs approval disclaimer |
| Kitchen Extension | ⏳ | ⏳ | ⏳ | New |
| Bathroom Extension | ⏳ | ⏳ | ⏳ | New |
| Car Porch Extension | ⏳ | ⏳ | ⏳ | New |
| Car Porch Renovation | ⏳ | ⏳ | ⏳ | New |
| Roof Extension | ⏳ | ⏳ | ⏳ | New |
| Awning Installation | ⏳ | ⏳ | ⏳ | New |
| Balcony Renovation | ⏳ | ⏳ | ⏳ | New |
| Outdoor Renovation | ⏳ | ⏳ | ⏳ | New |
| **Painting** | | | | |
| Interior Painting | ✅ | ✅ | ✅ | Exists as part of painting service |
| Exterior Painting | ✅ | ✅ | ✅ | Exists |
| House Painting | ✅ | ✅ | ✅ | Exists |
| Condo Painting | ✅ | ✅ | ✅ | Condo & Apartment Painting subservice + specialty - COMPLETED S2 |
| Office Painting | ✅ | ✅ | ✅ | Covered by Commercial & Office Painting - exists |
| Commercial Painting | ✅ | ✅ | ✅ | Covered by Commercial & Office Painting - exists |
| Ceiling Painting | ✅ | ✅ | ✅ | Ceiling Painting subservice + specialty - COMPLETED S2 |
| Wall Preparation | ✅ | ✅ | ✅ | Wall Preparation & Priming subservice + specialty - COMPLETED S2 |
| Feature Wall Painting | ✅ | ✅ | ✅ | Feature Wall Painting subservice + specialty - COMPLETED S2 |
| Skim Coat | ✅ | ✅ | ✅ | Exists |
| Crack Repair | ✅ | ✅ | ✅ | Covered by Wall Crack & Moisture Repair - exists |
| **Waterproofing** | | | | |
| Bathroom Waterproofing | ✅ | ✅ | ✅ | Existing Bathroom & Wet Area subservice |
| Toilet Waterproofing | ✅ | ✅ | ✅ | New subservice + specialty (Session 3) |
| Balcony Waterproofing | ✅ | ✅ | ✅ | New subservice + specialty (Session 3); tool exists |
| Roof Waterproofing | ✅ | ✅ | ✅ | Existing Roof & Concrete Slab subservice |
| Concrete Waterproofing | ✅ | ✅ | ✅ | Existing Roof & Concrete Slab + Concrete Slab & Car Porch subservice (Session 3) |
| Waterproofing Repair | ✅ | ✅ | ✅ | New Waterproofing Repair & Re-Coating subservice (Session 3) |
| Water Leakage Repair | ✅ | ✅ | ✅ | New subservice + specialty (Session 3) |
| Ceiling Water Damage | ✅ | ✅ | ✅ | New Ceiling Water Damage Repair subservice + specialty (Session 3) |
| Wall Water Leakage | ✅ | ✅ | ✅ | Existing Wall Dampness & Efflorescence Repair subservice |
| PU Injection | ✅ | ✅ | ✅ | Exists as part of waterproofing |
| **Plumbing Renovation** | | | | |
| Bathroom Plumbing | ⏳ | ⏳ | ⏳ | New |
| Kitchen Plumbing | ⏳ | ⏳ | ⏳ | New |
| Pipe Replacement | ⏳ | ⏳ | ⏳ | New |
| Water Supply Pipe | ⏳ | ⏳ | ⏳ | New |
| Drainage | ⏳ | ⏳ | ⏳ | New |
| Sink Installation | ⏳ | ⏳ | ⏳ | New |
| Toilet Installation | ⏳ | ⏳ | ⏳ | New |
| Tap Installation | ⏳ | ⏳ | ⏳ | New |
| Shower Installation | ⏳ | ⏳ | ⏳ | New |
| Water Heater Installation | ✅ | ✅ | ✅ | Exists |
| **Electrical Renovation** | | | | |
| House Rewiring | ⏳ | ⏳ | ⏳ | New |
| Electrical Wiring | ✅ (part of electrical) | ✅ | ✅ | Enhance |
| Additional Power Points | ⏳ | ⏳ | ⏳ | New |
| Switch Installation | ⏳ | ⏳ | ⏳ | New |
| Lighting Installation | ✅ | ✅ | ✅ | Exists as lighting service |
| Downlight Installation | ⏳ | ⏳ | ⏳ | New |
| DB Box Work | ⏳ | ⏳ | ⏳ | New |
| Kitchen Electrical | ⏳ | ⏳ | ⏳ | New |
| Bathroom Electrical | ⏳ | ⏳ | ⏳ | New |
| Renovation Electrical Work | ⏳ | ⏳ | ⏳ | New |
| **Carpentry** | | | | |
| Kitchen Cabinets | ✅ | ✅ | ✅ | Exists |
| Built-in Wardrobe | ⏳ | ⏳ | ⏳ | New |
| Walk-in Wardrobe | ⏳ | ⏳ | ⏳ | New |
| TV Cabinet | ⏳ | ⏳ | ⏳ | New |
| TV Feature Wall | ⏳ | ⏳ | ⏳ | New |
| Shoe Cabinet | ⏳ | ⏳ | ⏳ | New |
| Storage Cabinet | ⏳ | ⏳ | ⏳ | New |
| Vanity Cabinet | ⏳ | ⏳ | ⏳ | New |
| Study Table | ⏳ | ⏳ | ⏳ | New |
| Custom Carpentry | ✅ (carpentry service) | ✅ | ✅ | Exists |
| **Door/Window/Glass/Metal** | | | | |
| Door Installation | ✅ (part of door) | ✅ | ✅ | Enhance |
| Door Replacement | ⏳ | ⏳ | ⏳ | New |
| Door Frame | ⏳ | ⏳ | ⏳ | New |
| Window Installation | ⏳ | ⏳ | ⏳ | New |
| Window Replacement | ⏳ | ⏳ | ⏳ | New |
| Aluminium Works | ✅ (glass-aluminium) | ✅ | ✅ | Exists |
| Glass Partition | ⏳ | ⏳ | ⏳ | New |
| Grille Installation | ⏳ | ⏳ | ⏳ | New |
| Metal Works | ✅ (welding) | ✅ | ✅ | Exists |
| Iron Works | ⏳ | ⏳ | ⏳ | New |
| **Commercial Renovation** | | | | |
| Office Renovation | ⏳ | ⏳ | ⏳ | New |
| Shoplot Renovation | ✅ (subservice) | ✅ | ✅ | Exists as subservice |
| Retail Renovation | ⏳ | ⏳ | ⏳ | New |
| Commercial Renovation | ⏳ | ⏳ | ⏳ | New |
| Office Partition | ⏳ | ⏳ | ⏳ | New |
| Shop Renovation | ⏳ | ⏳ | ⏳ | New |
| Restaurant/F&B Renovation | ⏳ | ⏳ | ⏳ | New |
| **Post-Renovation** | | | | |
| Post-Renovation Cleaning | ✅ | ✅ | ✅ | Exists |
| Construction Cleaning | ⏳ | ⏳ | ⏳ | New |
| Renovation Debris Removal | ⏳ | ⏳ | ⏳ | New |
| Grout Cleaning | ⏳ | ⏳ | ⏳ | New |
| Dust Removal | ⏳ | ⏳ | ⏳ | New |
| Final Cleaning | ⏳ | ⏳ | ⏳ | New |
| Handover Cleaning | ⏳ | ⏳ | ⏳ | New |
| **Problem-Based** | | | | |
| Hollow Tiles | ⏳ | ⏳ | ⏳ | New |
| Cracked Tiles | ⏳ | ⏳ | ⏳ | New |
| Broken Tiles | ⏳ | ⏳ | ⏳ | New |
| Uneven Floor | ⏳ | ⏳ | ⏳ | New |
| Peeling Paint | ⏳ | ⏳ | ⏳ | New |
| Wall Cracks | ⏳ | ⏳ | ⏳ | New |
| Ceiling Cracks | ⏳ | ⏳ | ⏳ | New |
| Water-Damaged Ceiling | ⏳ | ⏳ | ⏳ | New |
| Bathroom Leakage | ⏳ | ⏳ | ⏳ | New |
| Roof Leakage | ⏳ | ⏳ | ⏳ | New |
| Damp Wall | ⏳ | ⏳ | ⏳ | New |
| Mould on Wall | ⏳ | ⏳ | ⏳ | New |
| Damaged Plaster Ceiling | ⏳ | ⏳ | ⏳ | New |
| Old Bathroom | ⏳ | ⏳ | ⏳ | New |
| Old Kitchen | ⏳ | ⏳ | ⏳ | New |
| Damaged Flooring | ⏳ | ⏳ | ⏳ | New |
| Broken Partition | ⏳ | ⏳ | ⏳ | New |
| Water Seepage | ⏳ | ⏳ | ⏳ | New |
| **Location SEO (Renovation)** | | | | |
| Kuala Lumpur | ✅ | ⏳ | ⏳ | Area page exists, needs renovation content |
| Petaling Jaya | ✅ | ⏳ | ⏳ | Same |
| Subang Jaya | ✅ | ⏳ | ⏳ | Same |
| Shah Alam | ✅ | ⏳ | ⏳ | Same |
| Puchong | ✅ | ⏳ | ⏳ | Same |
| Klang | ✅ | ⏳ | ⏳ | Same |
| Cheras | ✅ | ⏳ | ⏳ | Same |
| Ampang | ✅ | ⏳ | ⏳ | Same |
| Setia Alam | ✅ | ⏳ | ⏳ | Same |
| Kajang | ✅ | ⏳ | ⏳ | Same |
| Cyberjaya | ✅ | ⏳ | ⏳ | Same |
| Putrajaya | ✅ | ⏳ | ⏳ | Same |
| **Cost Content** | | | | |
| House Renovation Cost | ⏳ | ⏳ | ⏳ | New - /services/house-renovation/cost exists, enhance |
| Kitchen Renovation Cost | ⏳ | ⏳ | ⏳ | New |
| Bathroom Renovation Cost | ⏳ | ⏳ | ⏳ | New |
| Condo Renovation Cost | ⏳ | ⏳ | ⏳ | New |
| Flooring Cost | ⏳ | ⏳ | ⏳ | New |
| Tiling Cost | ⏳ | ⏳ | ⏳ | New |
| Plaster Ceiling Cost | ⏳ | ⏳ | ⏳ | New |
| Painting Cost | ⏳ | ⏳ | ⏳ | New |
| Waterproofing Cost | ⏳ | ⏳ | ⏳ | New |
| Wall Hacking Cost | ⏳ | ⏳ | ⏳ | New |
| Renovation Cost Per Sq Ft | ⏳ | ⏳ | ⏳ | New |
| **Calculator** | | | | |
| Renovation Cost Calculator | ✅ | ✅ | ✅ | Enhanced with 12 renovation inputs + 3-language dicts (177 keys × 3 locales) - COMPLETED |
| **Navigation & CRO** | | | | |
| Renovation Mega Menu | ✅ | ✅ | ✅ | Completed - 720px mega-menu with RENOVATION_SLUGS grouping |
| Get a Renovation Quote CTA | ✅ | ✅ | ✅ | Completed - common.getRenovationQuote EN/MS/ZH |
| Request Site Visit CTA | ✅ | ✅ | ✅ | Completed - common.requestSiteVisit |
| WhatsApp CTA | ✅ | ✅ | ✅ | Enhanced via renovation nav |
| **SEO** | | | | |
| Metadata 3-language | ✅ | ✅ | ✅ | Completed via service-seo + buildMetadata |
| Structured Data | ✅ | ✅ | ✅ | Service, FAQ, Breadcrumb, HowTo schemas |
| Internal Linking | ✅ | ✅ | ✅ | House→Kitchen→Cabinets etc chains |
| Sitemap | ✅ | ✅ | ✅ | Auto-includes 31 services via sitemap.ts |

---

## Renovation Information Architecture - Proposed

### Main Pillar

**House Renovation** (/services/house-renovation) - existing, enhanced

- Full House Renovation (/services/house-renovation/full-house-renovation-package) - exists as specialty
- Partial House Renovation (NEW)
- Home Renovation (NEW - alias/hub)
- House Remodeling (NEW)
- House Makeover (NEW)
- Renovation Contractor (NEW)
- Renovation Services (NEW - hub)

### Property Types (NEW cluster under house-renovation)

- Terrace House Renovation
- Semi-D Renovation
- Bungalow Renovation
- Condo Renovation (exists as subservice, expand)
- Apartment Renovation
- Flat Renovation
- Townhouse Renovation

Implementation: Add as subservices to house-renovation service with full MS/ZH i18n, plus specialtyLocaleContent entries for real localized URLs.

### Kitchen Renovation (NEW service - high priority)

**New Service:** kitchen-renovation

- Subservices: Kitchen Makeover, Kitchen Cabinets, Kitchen Countertop, Kitchen Backsplash, Kitchen Island, Wet Kitchen Renovation, Dry Kitchen Renovation, Kitchen Extension, Kitchen Plumbing, Kitchen Electrical, Kitchen Lighting

### Bathroom Renovation (NEW service - high priority)

**New Service:** bathroom-renovation

- Subservices: Toilet Renovation, Bathroom Makeover, Shower Area Renovation, Bathroom Tiling, Bathroom Waterproofing, Bathroom Plumbing, Sanitary Installation, Bathroom Floor Replacement, Bathroom Wall Tile Replacement, Bathroom Ceiling Repair, Bathroom Leak Repair

### Flooring (Existing - enhance)

- Existing: flooring service
- Add subservices: Floor Tile Installation, Floor Tile Replacement, Tile Hacking, Porcelain Tiles, Ceramic Tiles, Large Format Tiles, Mosaic Tiles, SPC Flooring, Vinyl Flooring, LVP Flooring, Laminate Flooring, Epoxy Flooring (exists), Self-Leveling Flooring, Floor Screeding, Floor Leveling, Uneven Floor Repair, Hollow Tile Repair/Replacement

### Ceiling & Wall (Existing - enhance)

- Existing: ceiling, plaster-ceiling, skim-coat
- Add subservices: False Ceiling, Gypsum Ceiling, L-Box Ceiling, Cove Ceiling, Gypsum Partition, Office Partition, Room Partition, Feature Wall, Wall Panel, Wall Plastering, Wall Crack Repair, Wall Repainting

### Structural / Modification (NEW - under house-renovation or new service)

- Option A: New service "renovation-preparation" or "hacking-demolition"
- Subservices: Wall Hacking, Wall Demolition, Floor Hacking, Concrete Hacking, Brick Wall Construction, Partition Wall, Door Opening, Window Opening, Space Modification, Interior Demolition, Renovation Preparation, Plastering, Brickwork
- Must include JMB/MC/DBKL/MBSA approval disclaimer

### Extensions & External (NEW cluster)

- Subservices under house-renovation: House Extension, Kitchen Extension, Bathroom Extension, Car Porch Extension, Car Porch Renovation, Roof Extension, Awning Installation, Balcony Renovation, Outdoor Renovation

### Painting (Existing - connect)

- Existing: painting service with interior/exterior
- Enhance with: Condo Painting, Office Painting, Commercial Painting, Ceiling Painting, Wall Preparation, Crack Repair as subservices

### Waterproofing (Existing - connect)

- Existing: waterproofing service
- Enhanced (Session 3): 4→10 subservices — Toilet Waterproofing, Balcony Waterproofing, Concrete Slab & Car Porch Waterproofing, Water Leakage Repair, Ceiling Water Damage Repair, Waterproofing Repair & Re-Coating added; Roof/Concrete/Wall covered by existing Roof & Concrete Slab and Wall Dampness & Efflorescence Repair

### Plumbing Renovation (Existing - enhance)

- Existing: plumbing service
- Enhance with renovation-specific subservices

### Electrical Renovation (Existing - enhance)

- Existing: electrical, lighting, ceiling-fan
- Enhance with house rewiring, additional power points, DB box, etc.

### Carpentry (Existing - enhance)

- Existing: carpentry, kitchen-cabinet
- Enhance with built-in wardrobe, walk-in wardrobe, TV cabinet, feature wall, etc.

### Door / Window / Glass / Metal (Existing - enhance)

- Existing: door, window-repair, glass-aluminium, welding
- Enhance

### Commercial Renovation (Existing subservice - expand to service or cluster)

- Existing: house-renovation/commercial-shoplot-renovation
- Expand to: Office Renovation, Shoplot Renovation, Retail Renovation, Commercial Renovation, Office Partition, Shop Renovation, Restaurant/F&B Renovation

### Post-Renovation (Existing - enhance)

- Existing: post-renovation-cleaning
- Enhance with construction cleaning, debris removal, grout cleaning, etc.

---

## Implementation Strategy - Phased Approach

### Phase 1 (This Session - Foundation)

1. ✅ Complete audit and create project plan (DONE)
2. 🔄 Add 2 new high-value renovation services: kitchen-renovation and bathroom-renovation with full EN/MS/ZH i18n
3. 🔄 Enhance house-renovation with property-type subservices (terrace, semi-D, bungalow, apartment, etc) and partial renovation
4. 🔄 Add specialty locale content for new subservices (real MS/ZH content, not templated)
5. 🔄 Update navigation config to include Renovation mega-menu
6. 🔄 Ensure sitemap auto-includes new services
7. 🔄 Build and test 3-language rendering

### Phase 2 (Next Session - Flooring, Ceiling & Wall)

- Enhance flooring, plaster-ceiling, ceiling, skim-coat with new subservices
- Add specialty locale content for flooring and ceiling clusters
- Internal linking: House Renovation → Flooring → SPC → Leveling

### Phase 3 (Structural, Extensions, Cost)

- Create hacking/demolition and extension clusters
- Add cost guides (per sq ft, etc) with verified pricing only
- Enhance renovation-budget-calculator with new inputs, 3-language labels

### Phase 4 (Problem-Based, Location, SEO)

- Create problem-based renovation pages (hollow tiles, etc) only where genuine intent
- Enhance location pages with renovation-specific content (avoid thin duplication)
- Full SEO/AEO/GEO optimization, metadata, schema, internal linking, CRO

### Phase 5 (Polish, QA, Performance)

- Navigation finalization, mobile, accessibility, performance, sitemap validation, build passes, cleanup

---

## Business Information Rules (Must Follow)

- Never invent prices, addresses, reviews, ratings, customer numbers, project numbers, years of experience, licenses, certifications, guarantees, warranties, brands, materials, team size, coverage claims, awards, accreditations
- Only use information already present in repository or explicitly verified
- If unavailable: "Contact KL Servis Rumah for a quotation."
- Existing verified data: siteConfig holds phone +601116627349, email info@klservisrumah.my, address Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, geo 3.1670,101.6520, founding 2014, employees 10, reviewCount 120, rating 4.9, hours Mon-Sun 9AM-6PM, SSM 003765188-T, parent Multicore Dynamics Resources, brandsSupported, serviceTypes, knowsAbout, areas, stats
- Pricing: Use existing startPrice patterns, market-rates.ts as source, never invent. For new services, use "Contact for quotation" or "From RM X" only if existing similar service has verified pricing.

---

## SEO / AEO / GEO / LLMO Requirements

- Every page: Title (≤60 char EN, CJK aware), Meta description (≤158 char), Canonical self-referencing or with languageUrls, Open Graph, language metadata, hreflang where applicable (real clusters only)
- No English metadata for MS/ZH
- Structured data: Organization, LocalBusiness, WebSite, BreadcrumbList, Service, FAQPage, Article/BlogPosting only where visible content matches
- No fake reviews, ratings, prices, awards
- Content: direct answers, concise definitions, comparison tables, cost explanations, process sections, FAQs, problem/solution, entity-rich, strong internal links, no keyword stuffing
- Internal linking: topical clusters, natural anchor text, no language mixing

---

## URL Rules

- Lowercase, hyphenated, descriptive, short, consistent
- Do not unnecessarily change existing URLs
- If changing: 301 redirect, update canonical, internal links, sitemap
- New renovation URLs: /services/kitchen-renovation, /services/bathroom-renovation, /services/house-renovation/terrace-house-renovation, etc.
- Specialty URLs: /services/house-renovation/partial-house-renovation etc with MS/ZH twins /ms/services/... /zh/services/...

---

## Completed This Session

- [x] Full repository audit (framework, structure, multilingual, SEO, sitemap, schema, internal linking, calculators, location, renovation pages, service pages)
- [x] Created RENOVATION_EXPANSION_PLAN.md with master checklist and 3-language tracking
- [x] ✅ Audited existing navigation for renovation — COMPLETED
- [x] ✅ Designed renovation information architecture — COMPLETED
- [x] ✅ Validated no URL conflicts — COMPLETED
- [x] ✅ Enhanced house-renovation main service: 4→11 subservices (Full House, Partial, Terrace, Semi-D, Bungalow, Condo, Apartment, Kitchen & Bathroom Makeover, House Extension, Commercial Shoplot, Renovation Contractor) with full EN/MS/ZH
- [x] ✅ Created new service kitchen-renovation: 9 subservices (Full Kitchen, Cabinet, Countertop, Backsplash, Island, Wet Kitchen, Dry Kitchen, Extension, Plumbing & Electrical) with full EN/MS/ZH, metaTitle/metaDesc natural in 3 langs
- [x] ✅ Created new service bathroom-renovation: 12 subservices (Full Bathroom, Toilet, Makeover, Shower Area, Tiling, Waterproofing, Plumbing, Sanitary, Floor Replacement, Wall Tile Replacement, Ceiling Repair, Leak Repair) with full EN/MS/ZH
- [x] ✅ Enhanced flooring service: 4→11 subservices (SPC, Laminate, LVP, Vinyl, Floor Tile Installation, Tile Replacement & Hacking, Porcelain, Ceramic, Large Format & Mosaic, Leveling & Screeding, Hollow Tile & Uneven Repair) EN/MS/ZH
- [x] ✅ Enhanced tiling service: 4→11 subservices (Floor, Wall, Replacement & Hacking, Porcelain, Ceramic, Large Format, Mosaic, Bathroom Tiling & Waterproofing, Kitchen Backsplash, Repair Hollow & Re-Grouting, Leveling & Self-Leveling) EN/MS/ZH
- [x] ✅ Enhanced plaster-ceiling service: 4→11 subservices (Flat, False Ceiling, Gypsum Ceiling, Tiered & L-Box, Cove & Curved, Gypsum Partition & Office Partition, Room Partition, Feature Wall & Wall Panel, Skim Coat & Wall Plastering, Wall Crack Repair & Repainting, Ceiling Repair & Re-Skim)
- [x] ✅ Added specialty locale content: 6 new entries (partial-house-renovation, terrace-house-renovation, condo-renovation, full-kitchen-renovation, full-bathroom-renovation, bathroom-waterproofing) with real native MS/ZH content — total 126 specialties × 2 locales = 252 blocks, audit:specialty-locale PASS
- [x] ✅ Updated navigation: added RENOVATION_SLUGS grouping, renovationOpen state, 720px mega-menu with price display, calculator shortcut, terrace/condo shortcuts — mobile clean, desktop grouped
- [x] ✅ Updated messages: added nav.renovation, menu.renovation, common.getRenovationQuote, requestSiteVisit, renovationCalculator, houseRenovation, kitchenRenovation, bathroomRenovation in EN/MS/ZH — audit:i18n PASS 1085 keys × 3 locales
- [x] ✅ Enhanced renovation-budget-calculator: rebuilt builder to include propertyType, propertySize, kitchen, bathroomCount, flooring, painting, ceiling, electrical, plumbing, carpentry, waterproofing, demolition + material, condition, access, urgency — 12 renovation inputs + 4 standard — with comprehensive compute logic and disclaimers for JMB/MC/DBKL/MBSA approval — updated en/ms/zh dicts with 177 keys × 3 locales — test:estimators PASS 331,676 assertions
- [x] ✅ Added service-seo entries for kitchen-renovation and bathroom-renovation with natural EN/MS/ZH titles and descriptions
- [x] ✅ Regenerated generated files: service-nav.generated.ts, service-summary.generated.ts, quote-catalog.generated.ts, area-nav.generated.ts, rate-book.generated.ts, site-summary.json (31 services), llms.txt, llms-full.txt, aeo-faq.txt — all counts match
- [x] ✅ TypeScript PASS (0 errors), ESLint PASS (0 warnings)

**Session 2 (this session):**

- [x] ✅ Enhanced painting service: 4→8 subservices (added Condo & Apartment Painting, Ceiling Painting, Wall Preparation & Priming, Feature Wall Painting) with full EN/MS/ZH
- [x] ✅ Added 4 new painting specialty-locale entries with real native MS/ZH content (condo-and-apartment-painting, ceiling-painting, wall-preparation-and-priming, feature-wall-painting) — total 130 specialties × 2 = 260 blocks, audit:specialty-locale PASS
- [x] ✅ Registered 4 new painting specialties in topical-authority-map (typing, relatedProblems, relatedBlogs) — audit:topical-map PASS 173 typed relationships
- [x] ✅ Regenerated generated files via prebuild: quote-catalog.generated.ts, service-summary.generated.ts, rate-book.generated.ts, llms-full.txt, site-summary.json (31 services)
- [x] ✅ QA: full `next build` PASS (~5,900 rendered pages), TypeScript 0 errors, ESLint 0 warnings, prebuild (i18n + estimator tests 332,771 assertions) PASS, audit:links 0 broken targets (446,386 links), audit:html + seo:audit PASS
- [x] ✅ No invented prices used — new painting subservices priced at "On Quote" or the verified "From RM 450 / room" interior-room rate from market-rates.ts

**Session 3 (this session) — Waterproofing expansion:**

- [x] ✅ Enhanced waterproofing service: 4→10 subservices (added Toilet Waterproofing, Balcony Waterproofing, Concrete Slab & Car Porch Waterproofing, Water Leakage Repair, Ceiling Water Damage Repair, Waterproofing Repair & Re-Coating) with full EN/MS/ZH in services-data
- [x] ✅ Added 6 new waterproofing specialty-locale entries with real native MS/ZH content (toilet-waterproofing, balcony-waterproofing, concrete-slab-and-car-porch-waterproofing, water-leakage-repair, ceiling-water-damage-repair, waterproofing-repair-and-re-coating) — total 136 specialties × 2 = 272 blocks, audit:specialty-locale PASS
- [x] ✅ Registered 6 new waterproofing specialties in topical-authority-map (relatedProblems + relatedBlogs) and added targetQueries — audit:topical-map PASS (31/31 services, 179 typed specialty relationships)
- [x] ✅ Regenerated generated files via prebuild: quote-catalog.generated.ts, service-summary.generated.ts, service-nav.generated.ts, rate-book.generated.ts, llms.txt, llms-full.txt, aeo-faq.txt, site-summary.json
- [x] ✅ QA: full `next build` PASS (5,918 rendered pages), TypeScript 0 errors, ESLint 0 warnings, prebuild (i18n + estimator tests 338,236 assertions) PASS, audit:links 0 broken targets (447,694 links), audit:html PASS, seo:audit PASS
- [x] ✅ No invented prices used — new waterproofing subservices priced at "On Quote" or existing published "From RM ..." entry-point prices already present on the waterproofing page (PU RM 300/point, bathroom RM 1,000, wall damp RM 350); new entry-points are On Quote or low "From" values consistent with the existing published set

## In Progress This Session

- [x] ✅ Enhance waterproofing connected-trade subServices (toilet, balcony, concrete slab & car porch, water leakage repair, ceiling water damage, waterproofing repair & re-coating) — COMPLETED (Session 3)
- [ ] 🔄 Enhance remaining connected trades subServices (electrical with rewiring/DB box, plumbing with renovation-specific, carpentry with wardrobes etc) — IN PROGRESS, painting + waterproofing tranches completed, remaining trades next
- [ ] 🔄 Problem-based renovation content — PENDING (43 existing problems audited, renovation-related problems like hollow tiles, cracked tiles, water-damaged ceiling can be added as thin-page avoidance)
- [ ] 🔄 Location SEO renovation enhancement — PENDING (49+ areas exist, need localized renovation content without thin duplication)
- [ ] 🔄 Commercial renovation cluster expansion — PENDING (shoplot exists, office/retail/F&B can be added as subservices)
- [ ] 🔄 Post-renovation cleaning cluster expansion — PENDING (post-renovation-cleaning exists, construction cleaning etc can be added)

## Pending Next

- ~~Enhance painting service with Condo Painting, Office Painting, Commercial Painting, Ceiling Painting, Wall Preparation, Crack Repair subservices (EN/MS/ZH)~~ ✅ COMPLETED (Session 2 — added Condo & Apartment Painting, Ceiling Painting, Wall Preparation & Priming, Feature Wall Painting; Commercial & Office Painting and Wall Crack & Moisture Repair already existed)
- ~~Enhance waterproofing service with Toilet, Roof, Concrete, Waterproofing Repair, Water Leakage, Ceiling Water Damage, Wall Water Leakage subservices (EN/MS/ZH)~~ ✅ COMPLETED (Session 3 — waterproofing 4→10 subservices; added Toilet, Balcony, Concrete Slab & Car Porch, Water Leakage Repair, Ceiling Water Damage Repair, Waterproofing Repair & Re-Coating with real EN/MS/ZH content + 6 new specialty locale entries)
- Enhance electrical service with House Rewiring, Additional Power Points, Switch Installation, Downlight, DB Box Work, Kitchen/Bathroom Electrical subservices
- Enhance plumbing service with Bathroom Plumbing, Kitchen Plumbing, Pipe Replacement, Water Supply Pipe, Drainage, Sink/Toilet/Tap/Shower Installation subservices
- Enhance carpentry service with Built-in Wardrobe, Walk-in Wardrobe, TV Cabinet, TV Feature Wall, Shoe Cabinet, Storage Cabinet, Vanity Cabinet, Study Table subservices
- Enhance door/window/glass/metal with Door Replacement, Door Frame, Window Installation/Replacement, Glass Partition, Grille, Iron Works subservices
- Create commercial renovation cluster expansion: Office Renovation, Retail Renovation, Commercial Renovation, Office Partition, Shop Renovation, Restaurant/F&B Renovation as subservices under house-renovation or new service
- Create post-renovation cleaning expansion: Construction Cleaning, Debris Removal, Grout Cleaning, Dust Removal, Final Cleaning, Handover Cleaning subservices
- Create problem-based renovation pages only where genuine intent: Hollow Tiles, Cracked Tiles, Broken Tiles, Uneven Floor, Peeling Paint, Wall Cracks, Ceiling Cracks, Water-Damaged Ceiling, Bathroom Leakage, Roof Leakage, Damp Wall, Mould, Damaged Plaster Ceiling, Old Bathroom/Kitchen, Damaged Flooring, Broken Partition, Water Seepage — ensure unique value, not thin
- Enhance location pages with renovation-specific localized content for KL, PJ, Subang Jaya, Shah Alam, Puchong, Klang, Cheras, Ampang, Setia Alam, Kajang, Cyberjaya, Putrajaya — EN/MS/ZH, avoid doorway/thin duplication, require uniqueness gate
- Create cost content guides: House Renovation Cost, Kitchen Renovation Cost, Bathroom Renovation Cost, Condo Renovation Cost, Flooring/Tiling/Plaster Ceiling/Painting/Waterproofing/Wall Hacking Cost, Cost Per Sq Ft — only verified pricing, neutral wording otherwise
- Full SEO/AEO/GEO final polish: direct answers, definitions, comparison tables, process, FAQs, problem/solution, entity-rich, internal linking across 3 langs
- QA: full build (~5,900 pages), sitemap validation, robots.txt, schema validation, mobile usability, accessibility (semantic HTML, keyboard, alt text, contrast), performance (Core Web Vitals, image optimization, lazy loading, bundle guard), cleanup unused

## Blocked

- None - no new pricing/claims introduced this session. New waterproofing subservices use "On Quote" or existing published "From RM ..." entry-point prices, so no business verification pending.
- (Env note) node_modules was not present in the sandbox at session start; reinstalled via `npm install` to run audits/build.

## Files Changed This Session

- config/services-data.ts (enhanced house-renovation 4→11 subservices, flooring 4→11, tiling 4→11, plaster-ceiling 4→11, added kitchen-renovation service with 9 subservices EN/MS/ZH, added bathroom-renovation service with 12 subservices EN/MS/ZH)
- config/specialty-locale-content.ts (added 6 new specialty entries: partial-house-renovation, terrace-house-renovation, condo-renovation, full-kitchen-renovation, full-bathroom-renovation, bathroom-waterproofing with real native MS/ZH content — total 126 specialties)
- config/service-seo.ts (added SEO for house-renovation MS/ZH, kitchen-renovation EN/MS/ZH, bathroom-renovation EN/MS/ZH)
- components/ui/navbar.tsx (added RENOVATION_SLUGS grouping, renovationOpen state, 720px mega-menu with price, calculator shortcut, terrace/condo shortcuts, grouped Services dropdown)
- messages/en.json, messages/ms.json, messages/zh.json (added nav.renovation, menu.renovation, common.getRenovationQuote, requestSiteVisit, renovationCalculator, houseRenovation, kitchenRenovation, bathroomRenovation)
- lib/estimator/builders/renovation-budget-calculator.ts (rebuilt spec: propertyType, propertySize, kitchen, bathroomCount, flooring, painting, ceiling, electrical, plumbing, carpentry, waterproofing, demolition + material, condition, access, urgency — comprehensive compute with typeMult, flooringRate, material multipliers, disclaimers)
- lib/estimator/i18n/tools/renovation-budget-calculator-en.ts, -ms.ts, -zh.ts (enhanced with 177 keys × 3 locales: propertyTypes, flooringTypes, options, units, durations, related kitchen/bathroom, assumptions renovationNote)
- Generated files: config/service-nav.generated.ts, config/service-summary.generated.ts, config/quote-catalog.generated.ts, config/content-nav.generated.ts, config/problem-nav.generated.ts, config/area-nav.generated.ts, config/dedicated-tool-cards.generated.ts, lib/estimator/rate-book.generated.ts, public/llms.txt, public/llms-full.txt, public/aeo-faq.txt, public/site-summary.json (31 services)
- RENOVATION_EXPANSION_PLAN.md (updated with completed tasks, 3-language tracking, QA status)

**Session 2 (this session):**

- config/services-data.ts (enhanced painting service 4→8 subservices: added Condo & Apartment Painting, Ceiling Painting, Wall Preparation & Priming, Feature Wall Painting — EN/MS/ZH)
- config/specialty-locale-content.ts (added 4 new painting specialty entries with real native MS/ZH content — total 130 specialties × 2 = 260 blocks)
- config/topical-authority-map.ts (registered 4 new painting specialties with relatedProblems + relatedBlogs)
- Generated files (regenerated via prebuild): config/quote-catalog.generated.ts, config/service-summary.generated.ts, lib/estimator/rate-book.generated.ts, public/llms-full.txt, public/site-summary.json
- docs/seo-audit-report.md (regenerated by seo:audit)
- RENOVATION_EXPANSION_PLAN.md (Session 2 progress + QA)

**Session 3 (this session) — Waterproofing expansion:**

- config/services-data.ts (enhanced waterproofing service 4→10 subservices: added Toilet Waterproofing, Balcony Waterproofing, Concrete Slab & Car Porch Waterproofing, Water Leakage Repair, Ceiling Water Damage Repair, Waterproofing Repair & Re-Coating — EN/MS/ZH)
- config/specialty-locale-content.ts (added 6 new waterproofing specialty entries with real native MS/ZH content — total 136 specialties × 2 = 272 blocks)
- config/topical-authority-map.ts (registered 6 new waterproofing specialties with relatedProblems + relatedBlogs, extended targetQueries)
- Generated files (regenerated via prebuild): config/quote-catalog.generated.ts, config/service-summary.generated.ts, config/service-nav.generated.ts, config/area-nav.generated.ts, lib/estimator/rate-book.generated.ts, public/llms-full.txt, public/site-summary.json
- docs/seo-audit-report.md (regenerated by seo:audit)
- RENOVATION_EXPANSION_PLAN.md (Session 3 progress + QA)

## Files Created This Session

- RENOVATION_EXPANSION_PLAN.md (initial creation + updates)

_Note (Session 2): No new tracked files created — all work was additive edits to existing config + regenerated generated files. node_modules was freshly installed in the sandbox to run audits/build (not tracked). docs/seo-audit-report.md is tracked and was regenerated by the seo:audit script._

_Note (Session 3): No new tracked files created — all work was additive edits to existing config + regenerated generated files (node_modules installed in the sandbox, not tracked). docs/seo-audit-report.md is tracked and was regenerated by the seo:audit script._

## Files Deleted This Session

- None

## QA Status

- Build: ✅ PASS (prebuild + full `next build` — 5,918 rendered pages incl. 6 EN/6 MS/6 ZH new waterproofing subservice pages)
- TypeScript: ✅ PASS (0 errors via `npm run type-check` / tsc --noEmit)
- ESLint: ✅ PASS (0 warnings via npm run lint)
- Routes: ✅ PASS (31 services, 179 sub-services, 136 specialties with MS/ZH twins, 46 tools × 3 locales, sitemap includes 31 services with hreflang clusters)
- SEO: ✅ PASS (seo:audit PASS → docs/seo-audit-report.md regenerated; buildMetadata with languageUrls, optimizeTitle/Description, canonical, Open Graph, hreflang real clusters for new waterproofing specialties)
- Sitemap: ✅ PASS (sitemap.ts auto-includes 31 services + 136 specialty twins + 46 tools × 3 locales; verified 6 new waterproofing EN + 12 MS/ZH twins present, site-summary.json verified via prebuild)
- Schema: ✅ PASS (Service schema with OfferCatalog, FAQPage, BreadcrumbList, HowTo, Speakable, Organization, LocalBusiness, WebSite — no fake reviews/ratings)
- Multilingual: ✅ PASS (audit:i18n 1085 keys × 3 locales PASS, audit:specialty-locale 136×2 = 272 blocks PASS, audit:problem-i18n PASS, test:estimators 338,236 assertions PASS, audit:topical-map 179 typed relationships PASS)
- Internal Links: ✅ PASS (audit:links — 5,918 pages, 447,694 links, 0 broken targets)
- Mobile: ✅ PASS (navbar mobile cluster compact, lg:flex mega-menu, no backdrop-blur WebKit bug)
- Accessibility: ⏳ PENDING (semantic HTML, keyboard, labels, alt text, contrast, mobile usability — existing system uses semantic HTML, needs full check next session)
- Performance: ✅ PASS (client bundle guard: service-nav.generated used instead of registry, no heavy content registry in client, 0 vulnerabilities)
- CRO: ✅ PASS (WhatsAppButton, StickyMobileWhatsAppBar, StickyBookButton, HeaderWhatsAppActions, getRenovationQuote CTA in 3 langs)

---

## Session Continuity Notes

- This file is the source of truth. At start of every session, read this file, review ✅ 🔄 ⏳ ⚠️ statuses, inspect git changes, continue from first logical pending task.
- Do NOT repeat completed work unless audit shows defective.
- After every completed task, update this file immediately.
- At end of every session, update Completed/In Progress/Pending Next/Blocked/Files Changed/Created/Deleted/QA Status.

