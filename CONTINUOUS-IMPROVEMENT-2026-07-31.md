# Continuous Review — 2026-07-31

## Handoff Check
- File: MASTER-HANDOFF-v8-2026-07-24.md (latest on repo + remote main)
- Status: All 18 major sections ✅ COMPLETED (Rounds 1–42, through 2026-07-31)
- No newer handoff file on remote.

## Completed from Handoff
- All 28 service pillar pages + 225+ sub-services ✅
- Area pages (37) + suburb pages (49) + problem pages (43) — full body i18n ✅
- Blog (19 posts) + FAQ locale pages fully trilingual with proper hreflang ✅
- Cost / emergency pages trilingual ✅
- Sub-service headings + data localized ✅
- Estimator chrome localized (201 keys × 3 languages) ✅
- Schema (FAQ, Service, OfferCatalog, HowTo, Breadcrumb, Article) validated ✅
- Sitemap (3,018+ URLs) + robots.txt + ai-context files (llms.txt, site-summary.json) ✅
- Pricing: all market-rate wording replaced with benefit-led "fixed-price / upfront" copy; zero RM figures changed ✅
- Phone +60 11-1662 7349 untouched; no public SSM added ✅
- Real named reviews (4) kept; no fake claims ✅

## Full Site Review Performed
- TypeScript: 0 errors (`npx tsc --noEmit`)
- ESLint: 0 errors, 0 warnings (`npm run lint -- --max-warnings=0`)
- Build: green, 4,187 / 4,187 SSG pages (`npm run build`)
- Mobile sticky WhatsApp/Call bar: present, responsive, proper shadow/backdrop-blur
- Floating desktop WhatsApp button: hidden on mobile (`md:hidden`), expands with CSS transition (no framer-motion bundle cost)
- Breadcrumbs: `aria-label="Breadcrumb"` + `aria-current="page"` on current item ✅
- Hero images: `alt` from data array, `fetchPriority="high"` for first, `loading="lazy"` for rest ✅
- Service detail hero: decorative caption uses `<p aria-hidden="true">` to avoid duplicate H1 ✅
- No remaining customer-facing `market-rate`, `harga pasaran`, `kadar pasaran`, or `bajet pasaran` in public copy ✅
- External links (`Facebook`, `Instagram`, `WhatsApp`, `Mail`) use `rel="noopener noreferrer"` ✅
- `robots.ts`: allows AI crawlers + major engines; disallows `/api/`, `/_next/`, `/admin/`, `/search` ✅
- `middleware.ts`: 301 redirects for `/estimate/<slug>` to deep tools; real locale trees (`/ms/blog`, `/zh/bo-ke`, `/ms/soalan-lazim`, `/zh/chang-jian-wen-ti`, `/ms/alatan`, `/zh/gongju`) pass through with locale cookie; all others redirect to English with cookie ✅
- Image optimization: WebP only (AVIF excluded for colour fidelity), deviceSizes configured ✅

## Improvements Implemented This Round
- `components/sticky-mobile-whatsapp-bar.tsx`: added explicit `aria-label` to WhatsApp and Call links for screen-reader clarity (`bookWhatsApp` + `callUs` context, including phone/display text).

## Recommendations (not implemented — low risk / structural)
- `<html lang>` for `/ms/` and `/zh/` standalone routes: currently `en-MY` in root layout. Changing requires either (a) a `layout.tsx` inside `app/ms/` + `app/zh/`, or (b) middleware injecting a locale header read by the root layout. Not done to avoid risking static-generation or route restructuring. If desired, can be added safely in a future round.
- Real photography / verified Google reviews import: blocked by missing assets / GBP access (external/manual task).
- GSC sitemap submission + IndexNow ping: blocked by deployment / account access (external).
- Live browser visual QA: requires deployed URL access (external).

## Permanent Rules Honoured
- Phone `+60 11-1662 7349` — never changed, never masked in public copy.
- No SSM / NRIC / personal identification displayed publicly.
- Zero RM pricing figures altered; only descriptive wording updated.
- No invented reviews, no fake claims, no new route slugs.
