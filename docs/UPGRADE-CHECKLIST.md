# KL Servis Rumah — Upgrade Checklist (against KLRenovator gold standard)

Last updated: 2026-07-25 (latest agent run: hub architecture + social proof + performance polish)

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
- [x] Optimized hero cross-fade to keep only current + previous slides mounted, avoiding non-LCP image competition and blue flashes.
- [x] Upgraded hero typography — uppercase black h1 with sky-400 accent.
- [x] `<Reveal>` scroll-triggered fade-up wrapper (no animation library) applied to Services grid, Why Choose Us, and Homepage AEO Links.
- [x] Footer redesigned: trust strip + areas column added (5-col layout).
- [x] Service detail hero upgraded from `<img>` to `<Image>` with priority + fetchPriority=high.
- [x] Hero images generated via AI (5 branded on-set photographs).

### SEO / GEO / AEO  ✅
- [x] Homepage-specific JSON-LD injected on `/`: FAQPage (6 zero-click Q&A), BreadcrumbList, SpeakableSpecification, Service, OfferCatalog.
- [x] Added first-class hub index pages for `/guides`, `/guides/maintenance`, `/compare`, `/brands`, `/top`, `/answers`, `/process`, `/commercial`, `/residential`, `/seasonal`, and `/near-me` so every drawer/menu destination resolves to crawlable content.
- [x] Added CollectionPage + ItemList schema, BreadcrumbList and Speakable schema across the new hub pages.
- [x] Added WebApplication schema to the `/tools` index for all interactive tools.
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
- [x] +32 area pages total after latest pass: original expansion plus Wangsa Maju, Bukit Jalil, Desa ParkCity, Taman Melawati, Bandar Utama, SS2, Setia Alam, Kota Kemuning, Batu Caves, Selayang, Rawang, Sungai Buloh, Semenyih, Seri Kembangan, Pandan Indah and Sentul.
- [x] +34 problem pages via new `config/problem-data-extra.ts` — every service pillar now owns 2–3+ diagnostic pages.
- [x] +16 long-form blog posts via new `config/blog-data-extra.ts` covering every core service pillar plus smart lock, CCTV, autogate, condo-vs-terrace repaint guides.

### Internal linking  ✅
- [x] New `<HomepageAeoLinks>` section: Top Services, Coverage Areas, Common Problems, Free Tools & Guides — links to all silos from homepage.
- [x] Footer areas column pushes 8 top locality links from every page.
- [x] Blog category taxonomy expanded to include Renovation, Electrical, Flooring, Seasonal, Guide.
- [x] Fixed All Pages menu label mapping for Areas and Problems.
- [x] Converted previously broken top-level explore links into crawlable hub pages with featured cards, full indexes, CTAs and schema.

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

## 2026-07-30 — AI-context files made generated (drift fix)

**Problem found:** `public/llms.txt`, `llms-full.txt`, `aeo-faq.txt` and
`site-summary.json` are the machine-readable copy of the business that answer
engines (ChatGPT, Perplexity, Claude, Gemini) read *instead of* the pages. They
were hand-maintained, and they had silently drifted away from the site:

- **Wrong social/profile links.** PRs #39, #40 and #41 fixed the footer and the
  JSON-LD `sameAs`, but not these files — so AI assistants were still being
  handed the old `instagram.com/klrenovator` handle, a retired Facebook share
  link and two dead Google short links, all pointing at a different brand.
- **Stale prices, under-quoting the business.** Plumbing was advertised "from
  RM 120" against a published RM 150; handyman RM 80 vs RM 100; plaster ceiling
  RM 180 vs RM 220; electrical RM 80 vs RM 150. Quoting a price the site does
  not honour is a commercial problem, not just an SEO one.
- **Contradicted warranties** (e.g. "2-year" painting vs the published 1-year).
- **Stale counts** (38 areas / 4,033 pages vs the real 37 / 3,018 sitemap URLs).

**Fix — structural, not a one-off correction:**
- [x] Added `scripts/generate-ai-context.ts`, which *derives* all four files
      from `config/site.ts`, `services-data.ts`, `area-data.ts`,
      `problem-data.ts`, `blog-data.ts`, the tool registry and `app/sitemap.ts`.
      Prices, warranties, links and counts now have exactly one source.
- [x] Wired into `prebuild` and `predev` as `npm run gen:ai-context`, alongside
      the existing `gen:rates` — the files regenerate on every build.
- [x] Page count is read from `app/sitemap.ts` rather than re-derived, so there
      is no second copy of that arithmetic to drift. This required changing
      `app/sitemap.ts` to import `MetadataRoute` as a **type-only** import; as a
      value import the module could not be loaded outside the Next.js bundler.
- [x] Added a regression section to `npm run test:estimators` that re-checks the
      committed files against the live config — every price, every warranty,
      all five profile links, the contact details and the counts, plus an
      explicit deny-list for the four retired links. Verified it actually fails
      (exit 1) when either bug class is reintroduced, so `prebuild` blocks it.

Build stays green: 4,063 pages, lint clean, `tsc` clean, 231,502 assertions.

## Recommendations & Future Improvements

- [ ] Provide 10–15 more real photographic hero assets (per service pillar) — current 5 are used across all pages.
- [ ] Add before/after project photos in `components/before-after-slider.tsx` (currently placeholder).
- [ ] Add real Google Reviews integration via API (currently static mock in `<GoogleReviews>`).
- [x] Add lightweight TikTok / Instagram proof sections without initial third-party embed cost.
- [ ] Replace social proof placeholders with approved KL Servis Rumah-specific TikTok/Instagram post URLs and thumbnails.
- [ ] Add a first-class booking page with real calendar availability integration.
- [ ] Split `config/services-data.ts` (500+ lines) into per-service files for DX.
- [ ] Adopt `@vercel/analytics` + `@vercel/speed-insights` (already used by reference site).
- [ ] Add a real news sitemap generator for the blog with recent-first ordering.
- [ ] Add an IndexNow API integration to notify Bing / Yandex of new content instantly.

## Final metrics

| Metric | Before | After |
|--------|--------|-------|
| Static pages generated | 2,204 | 4,033 (+83%) |
| Area pages | 6 | 38 |
| Problem pages | 43 | 77 |
| Blog posts | 2 | 18 |
| Homepage JSON-LD blocks | 2 (org + local) | 8 (org + local + website + breadcrumb + FAQ + speakable + service + offer catalog) |
| Client bundle deps | @heroui + framer-motion + 27 more | -3 major deps, -75 npm packages |
| First Load JS shared | 102 kB | 103 kB (stayed roughly same despite +40% pages) |
