# KL Servis Rumah — Upgrade Checklist (against KLRenovator gold standard)

Last updated: 2026-07-25 (multiple agent runs)

## Baseline observations

**KLRenovator (reference):**
- Full-bleed dark hero with 10-image rotating slideshow, big uppercase h1, star-badge, next/image LCP tuning.
- Single-brand vertical (aircond) with deep long-tail SEO (per-HP, per-brand, per-area, per-kampung pages, blogs, calculators, review, gallery, `/near-me`).
- Rich JSON-LD: LocalBusiness, Service, OfferCatalog, FAQPage, HowTo, BreadcrumbList — all with `@id` de-duped between layout & page.
- Trilingual: en (default), `/ms/*`, `/zh/*` full page duplication.
- Sticky mobile bar, floating booking button, exit-intent popup, review trust widgets, TikTok/Instagram feed sections.

**KL Servis Rumah (before this upgrade):**
- Two-column light hero, no photographic background.
- 2204 static pages generated.
- Broader multi-vertical: 28 service pillars.
- Only 2 blog posts, 43 problems, 6 area pages.
- Client bundle carrying unused @heroui/react + framer-motion for a single animation.
- No homepage-specific JSON-LD; alternates.languages pointing everywhere to `/`.

## What's changed in this upgrade

### Design / UX  ✅
- [x] Premium dark hero with 5 branded photographic slides matching KLR reference.
- [x] Upgraded hero typography — uppercase black h1 with sky-400 accent.
- [x] `<Reveal>` scroll-triggered fade-up wrapper (no animation library) applied to Services grid, Why Choose Us, and Homepage AEO Links.
- [x] Footer redesigned: trust strip + areas column added (5-col layout).
- [x] Service detail hero upgraded from `<img>` to `<Image>` with priority + fetchPriority=high.
- [x] Hero images generated via AI (5 branded on-set photographs).

### SEO / GEO / AEO  ✅
- [x] Homepage-specific JSON-LD injected on `/`: FAQPage (6 zero-click Q&A), BreadcrumbList, SpeakableSpecification, Service, OfferCatalog.
- [x] `getWebsiteSchema()` with SearchAction, publisher ref, inLanguage.
- [x] Enriched Organization JSON-LD: alternateName, ImageObject logo, contactPoint x2 (customer + emergency), knowsAbout (28 topics), parentOrganization, googleBusinessProfile sameAs.
- [x] Fixed layout hreflang alternates to point at `/ms` and `/zh` (was all `/`).
- [x] `/services/[slug]`: HowTo + Speakable JSON-LD; keyword-rich metadata + hreflang + full OG + Twitter.
- [x] `/areas/[slug]`: per-area LocalBusiness JSON-LD with GeoCoordinates + parent org link; Speakable; richer metadata.
- [x] `/problems/[slug]`: Speakable JSON-LD; richer metadata with hreflang.
- [x] `/contact`: ContactPage schema + Breadcrumb + Speakable + full metadata.
- [x] `/about`: AboutPage schema + Breadcrumb + Speakable + full metadata.
- [x] `/pricing`: Speakable schema added; hreflang alternates; richer OG/Twitter.
- [x] `/faq`: Breadcrumb + Speakable JSON-LD; hreflang; keyword-optimised meta.
- [x] New `/search` page (indexable: false) — fulfils SearchAction promise from WebSite JSON-LD.
- [x] `app/robots.ts`: expanded AI-bot allow-list (OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, Claude-Web, PerplexityBot, Perplexity-User, Amazonbot, cohere-ai, YouBot, Bytespider, meta-externalagent). Two sitemaps registered.
- [x] `app/sitemap.ts`: proper `/ms` and `/zh` hreflang alternates; live `lastModified` timestamp.

### Content architecture — 2204 → 3110 static pages (+41%)  ✅
- [x] +15 area pages (Cheras, Ampang, Kajang, Mont Kiara, Bangsar, Damansara, Kepong, Setapak, Sri Petaling, Kota Damansara, Ara Damansara, Sunway, USJ, Putrajaya, Cyberjaya).
- [x] +34 problem pages via new `config/problem-data-extra.ts` — every service pillar now owns 2–3+ diagnostic pages.
- [x] +16 long-form blog posts via new `config/blog-data-extra.ts` covering every core service pillar plus smart lock, CCTV, autogate, condo-vs-terrace repaint guides.

### Internal linking  ✅
- [x] New `<HomepageAeoLinks>` section: Top Services, Coverage Areas, Common Problems, Free Tools & Guides — links to all silos from homepage.
- [x] Footer areas column pushes 8 top locality links from every page.
- [x] Blog category taxonomy expanded to include Renovation, Electrical, Flooring, Seasonal, Guide.

### Performance  ✅
- [x] Removed `@heroui/react` + `@heroui/styles` (never used) → -75 packages.
- [x] Removed `framer-motion` (only in one whatsapp animation) — replaced with pure CSS.
- [x] `ExitIntentPopup` + `SocialProofWidgets` deferred with `next/dynamic ssr:false` via `<DeferredWidgets>` client wrapper.
- [x] `optimizePackageImports` covers lucide-react, clsx, tailwind-merge, react-hook-form, zod.
- [x] `<link rel=preconnect>` + `dns-prefetch` for wa.me, api.whatsapp.com, googletagmanager, google-analytics.
- [x] All hero images: priority + fetchPriority=high + blur placeholder + proper sizes.
- [x] Zero `<img>` tags remaining — all images use `<Image>` for automatic AVIF/WebP.

### Code quality  ✅
- [x] Lint clean (0 errors, 0 warnings).
- [x] Build clean (3110 static pages generated).
- [x] No duplicate `@id` across layout + page JSON-LD.
- [x] TypeScript strict mode passes.

## Recommendations & Future Improvements

- [ ] Provide 10–15 more real photographic hero assets (per service pillar) — current 5 are used across all pages.
- [ ] Add before/after project photos in `components/before-after-slider.tsx` (currently placeholder).
- [ ] Add real Google Reviews integration via API (currently static mock in `<GoogleReviews>`).
- [ ] Add TikTok / Instagram embed section powered by real feed (currently absent).
- [ ] Add a first-class booking page with real calendar availability integration.
- [ ] Split `config/services-data.ts` (500+ lines) into per-service files for DX.
- [ ] Adopt `@vercel/analytics` + `@vercel/speed-insights` (already used by reference site).
- [ ] Add a real news sitemap generator for the blog with recent-first ordering.
- [ ] Add an IndexNow API integration to notify Bing / Yandex of new content instantly.

## Final metrics

| Metric | Before | After |
|--------|--------|-------|
| Static pages generated | 2,204 | 3,110 (+41%) |
| Area pages | 6 | 21 |
| Problem pages | 43 | 77 |
| Blog posts | 2 | 18 |
| Homepage JSON-LD blocks | 2 (org + local) | 8 (org + local + website + breadcrumb + FAQ + speakable + service + offer catalog) |
| Client bundle deps | @heroui + framer-motion + 27 more | -3 major deps, -75 npm packages |
| First Load JS shared | 102 kB | 103 kB (stayed roughly same despite +40% pages) |
