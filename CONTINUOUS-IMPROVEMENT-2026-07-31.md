# Continuous Review — 2026-07-31 (Round 43 Audit & Upgrades)

## Handoff Check
- File: `MASTER-HANDOFF-v8-2026-07-24.md` (latest on repo + remote main)
- Status: All 18 major sections ✅ COMPLETED (Rounds 1–43, through 2026-07-31)
- All code-level pending tasks (Area/suburb/problem body i18n, deep-tool estimator lazy-loading, full blog & FAQ trilingual conversion, and shared UI component localization) are **100% complete**.
- Only external deployment/manual tasks remain (GSC sitemap submission, IndexNow ping, browser visual QA, GBP optimization, real photography import).

## Completed from Handoff & Previous Rounds
- All 28 service pillar pages + 225+ sub-services ✅
- Area pages (37) + suburb pages (49) + problem pages (43) — full body i18n (129/129 pages) ✅
- Blog (19 posts) + FAQ locale pages fully trilingual with proper hreflang ✅
- Cost / emergency pages trilingual ✅
- Sub-service headings + data localized ✅
- Estimator chrome localized (201 keys × 3 languages) + dynamic lazy-loading on dedicated-tool routes ✅
- Schema (FAQ, Service, OfferCatalog, HowTo, Breadcrumb, Article) validated ✅
- Sitemap (3,018+ URLs) + robots.txt + ai-context files (llms.txt, site-summary.json) ✅
- Pricing: all market-rate wording replaced with benefit-led "fixed-price / upfront" copy; zero RM figures changed ✅
- Phone `+60 11-1662 7349` untouched; no public SSM added ✅
- Real named reviews (4) kept; no fake claims ✅

## Full Site Review Performed
- TypeScript: 0 errors (`npx tsc --noEmit`)
- ESLint: 0 errors, 0 warnings (`npm run lint -- --max-warnings=0`)
- Estimator Test Harness: **231,498 assertions passed, 0 failures** (`npm run test:estimators`)
- Production Build: green, **4,187 / 4,187 SSG pages** (`npm run build`)
- Mobile sticky WhatsApp/Call bar: present, responsive, proper shadow/backdrop-blur + explicit screen-reader aria-labels
- Floating desktop WhatsApp button: hidden on mobile (`md:hidden`), expands with CSS transition
- Breadcrumbs: `aria-label="Breadcrumb"` + `aria-current="page"` on current item ✅
- Hero images: `alt` from data array, `fetchPriority="high"` for first, `loading="lazy"` for rest ✅
- External links (`Facebook`, `Instagram`, `WhatsApp`, `Mail`) use `rel="noopener noreferrer"` ✅
- `robots.ts`: allows AI crawlers + major engines; disallows `/api/`, `/_next/`, `/admin/`, `/search` ✅
- `middleware.ts`: 301 redirects for `/estimate/<slug>` to deep tools; real locale trees (`/ms/blog`, `/zh/bo-ke`, `/ms/soalan-lazim`, `/zh/chang-jian-wen-ti`, `/ms/alatan`, `/zh/gongju`) pass through with locale cookie; all others redirect to English with cookie ✅

## Improvements Implemented This Round (Round 43)
During our full UX/UI, accessibility, and multilingual review, we identified and resolved 7 customer-facing parity and screen-reader accessibility gaps across shared UI components:
1. **Footer multilingual service & area link fix (`components/ui/footer.tsx`)**:
   - Fixed a bug where footer services (`topServices`) and areas (`topAreas`) rendered hardcoded English names regardless of the active language pill. Wrapped footer services in `getLocalizedService(service, lang)` and footer areas in `getLocalizedArea(area, lang).name` so Malay and Chinese users see native names (e.g. "吉隆坡", "八打灵再也", "Mengecat Rumah", "专业房屋粉刷").
   - Added and wired `footer.trustStrip` and `footer.priceGuide` translations across EN/MS/ZH.
2. **Mobile drawer menu trilingual parity (`components/ui/all-pages-menu.tsx`)**:
   - Replaced hardcoded English drawer title (`"Menu"`), subhead (`"Main pages"`), and screen-reader labels (`aria-label="Open menu"`, `"Close menu"`, `"Main navigation"`) with localized `{t("menu.button")}`, `{t("menu.main")}`, `{t("menu.aria")}`, `{t("menu.close")}`.
3. **Desktop navigation Services dropdown fix (`components/ui/navbar.tsx`)**:
   - Localized hardcoded English `"All services"` heading and `"View all services"` link to `{t("menu.services")}` and `{t("common.viewAll")}`.
4. **FAQ & Site Search Bar localization (`components/sections/faq-search-filter.tsx` & `components/ui/site-search.tsx`)**:
   - Localized search placeholder text, input `aria-label`s, clear button labels, and live result counts using new `faqSearch` and `siteSearch` namespaces in `messages/{en,ms,zh}.json`.
5. **Accessible carousel & ticker labels (`components/ui/review-carousel.tsx` & `components/recent-jobs-ticker.tsx`)**:
   - Localized carousel screen-reader controls (`aria-label="Previous review"`, `"Next review"`, `"X out of 5 stars"`, `"Show review X"`) and ticker live-demand notice (`"Live local demand — no customer names shown"`) via new `reviewsCarousel` and `ticker` namespaces.
6. **Translation dictionaries updated (`messages/{en,ms,zh}.json`)**:
   - Added 25 new translation strings across 5 namespaces (`footer.trustStrip`, `footer.priceGuide`, `faqSearch`, `reviewsCarousel`, `ticker`, `siteSearch`) with 100% key and placeholder parity in English, Bahasa Malaysia, and Chinese.

## Recommendations (External / Deployment)
- `<html lang>` for `/ms/` and `/zh/` standalone routes: currently `en-MY` in root layout. If desired, can be added via middleware or layout headers in a future round without breaking static generation.
- Real photography / verified Google reviews import: blocked by missing assets / GBP access (external/manual task).
- GSC sitemap submission + IndexNow ping: blocked by deployment / account access (external).
- Live browser visual QA: requires deployed URL access (external).

## Permanent Rules Honoured
- Phone `+60 11-1662 7349` — never changed, never masked in public copy.
- No SSM / NRIC / personal identification displayed publicly.
- Zero RM pricing figures altered; only descriptive wording updated.
- No invented reviews, no fake claims, no new route slugs.
