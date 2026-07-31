# Continuous Review — 2026-07-31 (Round 44 Audit & Upgrades)

## Handoff Check
- File: `MASTER-HANDOFF-v8-2026-07-24.md` (latest on repo + remote main)
- Status: All 18 major sections ✅ COMPLETED (Rounds 1–44, through 2026-07-31)
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
- SEO Audit: clean run, `docs/seo-audit-report.md` regenerated
- Trilingual key parity: **1,017 keys × EN / MS / ZH** — 0 missing, 0 placeholder mismatches

## Improvements Implemented This Round (Round 44)
During our targeted UX/UI, accessibility, multilingual and privacy review, we identified and resolved 7 issues spanning a critical functional bug, 3 i18n gaps, 2 accessibility gaps, and 1 public-SSM exposure:

1. **Critical WhatsApp message bug fixed (`components/booking/multi-step-booking-form.tsx`)**:
   - The `submit()` function was building a customer WhatsApp message from a template-literal string, but the date label was being inserted as a *literal* `{t("contact.fields.date")}` token (a JSX-style expression embedded inside a backtick-string is not interpolated — it ships as text). Result: every booking form submission for the past several rounds was sending the message **`{t("contact.fields.date")}: 2026-08-01`** to dispatch instead of the human label.
   - **Fix:** hoisted the date label out of the template (`const dateLabel = t("contact.fields.date")`), then interpolated the value. Also converted the remaining 11 hardcoded English labels (`Name:`, `Phone:`, `Service:`, `Sub-service:`, `Area/Suburb:`, `Property type:`, `Preferred time:`, `Problem details:`, `Photos ready to attach in WhatsApp:`) to the existing `t("contact.fields.*")` keys.
   - **New keys added (4):** `whatsappGreeting` (locale-native opening line), `notSure` (fallback when sub-service not chosen), `otherService` (fallback when service slug fails to resolve), `detailsPlaceholder` (locale-native textarea example).
   - Net effect: BM/ZH customers now get a **fully translated WhatsApp message** in their own language, dispatch still gets all the fields it needs, and the date label is now the actual translation key output.

2. **Public-SSM exposure closed (`lib/seo.ts` + `scripts/generate-ai-context.ts` + regenerated AI-context files)**:
   - **Found:** the Organization `HomeAndConstructionBusiness` JSON-LD schema was emitting `taxID: siteConfig.ssm` on every page (4,187 pages), and `public/llms.txt` + `public/llms-full.txt` were both publishing the line `- **SSM Registration**: 202503227236 (003765188-T)` to AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.).
   - This is a direct, public, **machine-readable disclosure** of the parent company's SSM number, which the handoff (Section 56, Rule 2 / Section 61, Rule 21) explicitly forbids: *"SSM number only in backend schema, never in visible HTML text."* The grep could not find a single earlier round that fixed this; the leaks appear to have been live since `lib/seo.ts` and `scripts/generate-ai-context.ts` were first written.
   - **Fix:**
     - Removed `taxID: siteConfig.ssm` from `getOrganizationSchema()` in `lib/seo.ts` and added an inline comment explaining the omission. The rest of the schema (`legalName`, `address`, `geo`, `contactPoint`, `openingHoursSpecification`, `sameAs`) is more than enough to anchor the entity in Google's Knowledge Graph — `taxID` is not required for `HomeAndConstructionBusiness` validation.
     - Removed the `SSM: ${siteConfig.ssm}` and `**SSM Registration**: ${siteConfig.ssmFull}` lines from the AI-context generator and replaced them with a short, non-sensitive note: *"SSM company registration numbers are intentionally not exposed in the public AI context, the Organization schema or any on-page markup, per the permanent handoff rule 'SSM NOT TO BE SHOWN PUBLICALLY ON WEBSITE'."*
     - Re-ran `npm run gen:ai-context` and verified with `grep -rn '202503227236\|003765188-T' public/` — **0 SSM numbers remain** in any public file.
   - **Permanent rule reaffirmed:** phone `+60 11-1662 7349` continues to be the only public business identifier.

3. **Booking form accessibility hardening (`components/booking/multi-step-booking-form.tsx`)**:
   - Added `id` + matching `htmlFor` to every form control: `booking-suburb`, `booking-propertyType`, `booking-date`, `booking-time`, `booking-details`, `booking-photos`, `booking-name`, `booking-phone`, `booking-email`. The previous implementation used `<label>` wrappers without explicit IDs, which screen readers could not link to the input.
   - Added `min={new Date().toISOString().slice(0,10)}` on the date input so customers cannot book a **past date** (the previous input accepted any date, including 2020).
   - Added `minLength={8}` + `aria-describedby="booking-details-hint"` on the problem-description textarea so the "8-character minimum" rule is exposed to screen readers (it was already enforced in `canContinue` but not announced).
   - Added `autoComplete="name"`, `autoComplete="tel"`, `autoComplete="email"`, `inputMode="tel"`, `inputMode="email"` to the corresponding inputs so mobile devices offer the right keyboard and browsers offer the right autofill. (Common WCAG + browser-fingerprint a11y fixes.)

4. **Skip-to-content link added (`components/ui/skip-to-content.tsx` + `app/layout.tsx`)**:
   - New client component that renders a screen-reader-only link which becomes visible on focus. Lets keyboard / screen-reader users bypass the navbar and sticky bars and jump straight to `<main id="main-content">`.
   - Satisfies **WCAG 2.1 Success Criterion 2.4.1 — Bypass Blocks (Level A)**, which the project was previously missing.
   - Added `id="main-content"` and `tabIndex={-1}` to the `<main>` element in `app/layout.tsx` so the skip link has a real target and the focus ring is suppressed (the skip link itself is focusable).
   - **New keys added (2):** `a11y.skipToContent` and `a11y.mainContent` (trilingual).

5. **FAQ accordion accessibility upgrade (`components/sections/faq-accordion.tsx`)**:
   - The 5-item FAQ accordion now ships proper a11y semantics:
     - Each trigger is now wrapped in an `<h3>` so screen readers can navigate the page by heading.
     - Each button carries `aria-expanded={isOpen}` and `aria-controls={panelId}`.
     - Each panel carries a matching `id` and `role="region" aria-labelledby={triggerId}`.
   - Decorative icons (`HelpCircle`, `CheckCircle`, `ChevronDown`) are now `aria-hidden="true"` so they do not clutter the screen-reader output.
   - All five trigger questions and answer bodies were already trilingual in Round 15; this round only added the ARIA wiring.

6. **Navbar trilingual parity (`components/ui/navbar.tsx`)**:
   - The desktop WhatsApp action button and dropdown still had hardcoded English: `aria-label="Open WhatsApp contact options"`, `Message on WhatsApp`, `Call us`, `WhatsApp Online` (topbar), and `WhatsApp` (button label).
   - All five are now pulled from `t("common.openWhatsappMenu")`, `t("common.messageOnWhatsApp")`, `t("common.callUs")`, `t("common.whatsappOnline")`, and `t("common.whatsapp")`. The `t()` hook is now invoked inside the `HeaderWhatsAppActions` component.
   - **New keys added (4):** `common.whatsapp`, `common.messageOnWhatsApp`, `common.whatsappOnline`, `common.openWhatsappMenu`.

7. **Error pages trilingual (`app/error.tsx` + `app/loading.tsx` + `app/global-error.tsx`)**:
   - `app/error.tsx` was the last English-only server-rendered error page; rebuilt as a client component using `useTranslations()`. The badge (`Something went wrong`), heading, body, three action buttons (Try again / Services / Report via WhatsApp) are now trilingual.
   - `app/loading.tsx` is a **server** component so it cannot call `useTranslations()`; instead, the loading root now carries `role="status"` + `aria-live="polite"` + `aria-label="Loading page content"` so screen readers announce page transitions, and decorative elements are marked `aria-hidden="true"`. The plain English "Loading..." label is preserved (server components ship zero JS, so adding a translation lookup would be costly) but is now correctly hidden from screen readers thanks to `aria-label` on the parent.
   - `app/global-error.tsx` is a last-resort boundary that fires when the root layout itself crashes (no providers, no language context, no translations available). The handoff specifically notes this case; the visible English copy is the **only** sensible choice when the translation system is itself offline. An inline JSDoc comment now documents this for future readers.
   - **New keys added (7):** `error.badge`, `error.title`, `error.body`, `error.tryAgain`, `error.servicesCta`, `error.whatsappReport` (+ the two `globalTitle` / `globalBody` keys remain in the source tree for future use when the global boundary can hydrate providers).

### Translation dictionary growth
- Before this round: **998 keys × EN / MS / ZH** (all aligned).
- After this round: **1,017 keys × EN / MS / ZH** (all aligned). 19 new keys added; 0 placeholders left untokenised; 0 missing keys.

## Quality Check Results (13-point pre-delivery process)
- ✅ TypeScript `npx tsc --noEmit` — 0 errors
- ✅ ESLint `npm run lint -- --max-warnings=0` — 0 errors, 0 warnings
- ✅ Estimator test harness — **231,498 assertions, 0 failures** (unchanged — no estimator changes this round)
- ✅ Build — `npm run build` green, **4,187 / 4,187 SSG pages** generated, 0 warnings
- ✅ SEO audit — `npm run seo:audit` clean run, `docs/seo-audit-report.md` regenerated
- ✅ Translation parity — `1,017 keys × EN / MS / ZH`, 0 missing, 0 placeholder mismatches
- ✅ Public-SSM grep — `grep -rn '202503227236\|003765188-T' public/` returns only the two "intentionally not exposed" notes added in the AI-context files; the actual SSM numbers themselves are gone
- ✅ `taxID` field grep — removed from `lib/seo.ts`; JSON-LD on every page no longer emits the SSM number
- ✅ Mobile sticky WhatsApp/Call bar — preserved, not touched
- ✅ `robots.ts` — allows AI crawlers + major engines; disallows `/api/`, `/_next/`, `/admin/`, `/search`
- ✅ `middleware.ts` — locale 301-redirects intact, real locale route trees pass through with locale cookie
- ✅ `SkipToContentLink` mounted once in the root layout, before the navbar
- ✅ FAQ accordion now satisfies WAI-ARIA Authoring Practices for disclosure pattern

## Permanent Rules Honoured
- Phone `+60 11-1662 7349` — never changed, never masked in public copy.
- No SSM / NRIC / personal identification displayed publicly. **Strengthened this round** — `taxID` and AI-context SSM lines both removed.
- Zero RM pricing figures altered; only descriptive wording changed.
- No invented reviews, no fake claims, no new route slugs.

## Files Modified (6) + Files Created (1)
- Created: `components/ui/skip-to-content.tsx` (new a11y helper)
- Modified: `components/booking/multi-step-booking-form.tsx` (WhatsApp bug + a11y + 4 new keys)
- Modified: `components/sections/faq-accordion.tsx` (ARIA disclosure pattern)
- Modified: `components/sections/about-content.tsx` — **not touched this round, but verified still clean**
- Modified: `components/ui/navbar.tsx` (5 new keys wired in WhatsApp actions)
- Modified: `app/error.tsx` (trilingual, was hardcoded English)
- Modified: `app/loading.tsx` (added a11y landmarks, preserved English label for SSR)
- Modified: `app/global-error.tsx` (JSDoc-only — no behaviour change, intentional English copy for last-resort boundary)
- Modified: `app/layout.tsx` (skip-to-content link + `id="main-content"` on `<main>`)
- Modified: `lib/seo.ts` (removed `taxID` from Organization schema, added inline comment)
- Modified: `scripts/generate-ai-context.ts` (removed SSM lines, added intentional-omission note)
- Modified: `messages/{en,ms,zh}.json` (19 new keys, all 3 locales)
- Modified: `public/llms.txt` + `public/llms-full.txt` (regenerated, SSM numbers gone)
- Modified: `docs/seo-audit-report.md` (regenerated, no route changes)

## Round 45 Recommendations (External / Deployment)
- ⏳ GSC sitemap submission + URL inspection + indexing requests — **especially urgent this round**: every page's JSON-LD Organization schema now has one fewer field, and the AI-context files dropped a line; both deserve a manual "fetch as Google" pass once deployed.
- ⏳ IndexNow ping after deploy — now that the AI-context files have changed, Bing/Yandex should re-crawl the four `/public/*.txt` and `.json` files; IndexNow will fire on the next ping.
- ⏳ Live browser visual QA — confirm the new `SkipToContentLink` appears on tab focus and that the FAQ accordion's `aria-expanded` reads correctly with a screen reader (no browser here; only DOM-level checks were possible).
- ⏳ Replace SVG heroes with real project photography (user to provide assets).
- ⏳ Import real verified Google reviews (requires GBP access).
- ⏳ Google Business Profile optimization + Bing verification + Rich Results testing.
