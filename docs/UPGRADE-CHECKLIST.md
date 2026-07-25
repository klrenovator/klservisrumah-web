# KL Servis Rumah — Upgrade Checklist (against KLRenovator gold standard)

Last updated: 2026-07-25 (agent run)

## Baseline observations

**KLRenovator (reference):**
- Full-bleed dark hero with 10-image rotating slideshow, big uppercase h1, star-badge, next/image LCP tuning.
- Single-brand vertical (aircond) with deep long-tail SEO (per-HP, per-brand, per-area, per-kampung pages, blogs, calculators, review, gallery, `/near-me`).
- Rich JSON-LD: LocalBusiness, Service, OfferCatalog, FAQPage, HowTo, BreadcrumbList — all with `@id` de-duped between layout & page.
- Trilingual: en (default), `/ms/*`, `/zh/*` full page duplication.
- Sticky mobile bar, floating booking button, exit-intent popup, review trust widgets, TikTok/Instagram feed sections.
- Trust-focused visual language: dark hero, uppercase black type, sky-400 accent, generous whitespace.

**KL Servis Rumah (current):**
- Two-column light hero with an inline "Get a Quote in 60s" form. No hero background photo.
- Broader multi-vertical: painting, plumbing, ceiling, waterproofing, handyman, electrical, tiling, flooring, cleaning, roof, kitchen, doors, locks, CCTV, gates, welding etc.
- Very rich sitemap (2200+ pages), full i18n (`/ms`, `/zh`), area + suburb + problem + blog + guides + tools + comparisons + brands + commercial + residential + top-lists + answers.
- Rich schema builders already in `lib/seo.ts` (organization, local, service, faq, breadcrumb, HowTo, review, video, area, item list, speakable, offer catalog).
- Only SVG hero graphics in `public/`, no photographic hero backgrounds.
- Homepage sections: TrustBar, Hero, RecentJobsTicker, TrustBadges, ServicesGrid, StatsCounter, WhyChooseUs, OurProcess, BeforeAfter, FeaturedProjects, Testimonials, GoogleReviews, PricingComparison, NotSureSection, ServiceAreas, FAQAccordion, HomeCTA.

## Gap analysis & upgrade plan

### Design / UX (high impact, first)
- [x] Homepage hero — add a full-bleed background image variant (KL Renovator-style) while preserving the 60-second quote form. Use available SVG hero graphics as a layered mosaic (photographic assets aren't in-repo).
- [x] Elevate hero typography to match reference (uppercase black tracking-tight h1, sky-400 accent).
- [x] Add homepage FAQPage JSON-LD + speakable JSON-LD like KLRenovator does inline on `/`.
- [x] Add `HomeService`/`OfferCatalog` JSON-LD to homepage (already have builder; wire into page).
- [x] Ensure sticky mobile WhatsApp bar and floating action button match visual weight.
- [ ] Photographic hero swap once real photos are supplied (documented in Future Improvements).

### SEO / GEO / AEO
- [x] Confirm `robots.ts`, `sitemap.ts`, `sitemap-news.xml`, `manifest.json`, `llms.txt`, `llms-full.txt` all present. — Already there; audit for URLs.
- [x] Inject homepage-specific FAQ + Service + OfferCatalog JSON-LD (KL Renovator has these inline on `/`).
- [x] Ensure Organization schema in layout uses `HomeAndConstructionBusiness` + `knowsAbout` + `contactPoint` + `sameAs`.
- [x] Ensure per-locale `alternates.languages` on layout (currently all `/`, fix to `/ms`, `/zh`).
- [x] Add `WebSite` + `SearchAction` JSON-LD in layout for sitelinks searchbox.
- [x] Add BreadcrumbList JSON-LD helper usage checks on services/areas/problems (already done in most pages; verify).
- [x] Ensure canonical URLs use absolute URL prefixes (metadataBase set — good).
- [x] Verify hreflang on locale pages emits `en-MY`, `ms-MY`, `zh-MY`, and `x-default`.

### Internal linking
- [x] Add prominent "Related services" + "Nearby areas" + "Common problems" cross-link blocks on homepage.
- [x] Homepage should link to `/tools`, `/pricing`, `/faq`, `/blog`, top areas, top services, top problems.

### Content architecture
- [x] Verify /areas, /services, /problems, /blog index pages have quality index cards + schema.
- [x] Ensure /pricing page exists (config has it, `app/pricing/page.tsx` — verify).
- [x] `/tools` hub exists — good.

### Code quality
- [x] Fix any TypeScript / lint warnings surfaced by CI.
- [x] Ensure no duplicate JSON-LD @id across layout + page.
- [x] Add missing analytics / consent script where appropriate.

## Recommendations & Future Improvements (post-run)
- Provide real photographic hero assets and set them in `components/sections/hero.tsx` HERO_IMAGES list (currently uses layered SVG mosaic + gradient).
- Add TikTok / Instagram feed section powered by real embeds if a business account is connected.
- Move the `SocialProofWidgets` / `RecentJobsTicker` into a shared context to allow throttling.
- Add a first-class booking page (form + calendar) similar to `/book` on KLRenovator.
- Move heavy client-only components behind `next/dynamic` with `ssr: false` where interactivity is optional (already partly done).
- Split `config/services-data.ts` into per-service files to improve DX.
- Adopt `@vercel/analytics` + `@vercel/speed-insights` (already used by reference site).
