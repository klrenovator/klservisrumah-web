# AI_OPTIMIZATION_ROADMAP.md — KLServisRumah.my

**Single source of truth** for all autonomous optimization work on this project.
Updated continuously during every session. Never remove completed items — keep history.

- **Project:** KLServisRumah.my — Next.js 15.5 + React 19 + Tailwind CSS v4, trilingual (EN/MS/ZH), ~4,100 SSG pages
- **Roadmap created:** 2026-08-07 (Session 001)
- **Source baseline:** `📄 MASTER_AI_AGENT_INSTRUCTIONS.md` (v4.0), `KLServisRumah-Complete-Forensic-Audit.md` (2026-08-05, score 79/100)
- **Priority order:** 🔴 Critical → 🟠 High → 🟡 Medium → 🟢 Low

---

## Status legend

- ✅ Completed (date + session)
- 🟡 In Progress
- ⬜ Pending
- 🔒 Blocked — needs owner decision (business requirement, credentials, or scope sign-off)

---

## Phase 0 — Project management scaffolding

- ✅ **[2026-08-07 / S001]** Read `📄 MASTER_AI_AGENT_INSTRUCTIONS.md`, `KLServisRumah-Complete-Forensic-Audit.md`, repo state; verified all audit findings independently against the checkout
- ✅ **[2026-08-07 / S001]** Created `AI_OPTIMIZATION_ROADMAP.md` (this file)
- ✅ **[2026-08-07 / S001]** Created `SESSION_LOG.md`

---

## Phase 1 — Verified issue inventory (audit ✚ independent re-check)

All findings below were **independently re-verified in Session 001** against the actual checkout (not just trusted from the report).

### 🔴 Critical

- ✅ **[2026-08-07 / S001] C1. Hardcoded admin password shipped in public client bundle**
  - `app/admin/tools/page.tsx` was a `"use client"` component containing the literal password and a `sessionStorage` bypass that anyone could set from the console.
  - **Fix:** real server-side auth — `process.env.ADMIN_PASSWORD` + HMAC-SHA256 signed, expiring `httpOnly` session cookie; dedicated `/admin/login` page; `/admin/tools` is now a server component that verifies the cookie (redirects to login); `middleware.ts` gates `/admin/*`; over-posting/login attempts logged server-side; `noindex` metadata.
  - Pattern mirrors the existing `app/api/indexnow/route.ts` (env secret, constant-time compare, fail closed).
  - ⚠️ Follow-up for owner: the old password `KL2024Admin` is burned (shipped publicly) — never reuse it; set a new `ADMIN_PASSWORD` env var in Vercel (see `.env.example`).

### 🟠 High

- 🔄 **[2026-08-07 / S001 → S002 business override] H1. WCAG AA contrast failure — white text on `#25D366` WhatsApp green (1.98:1; needs ≥4.5:1) — REVERTED PER OWNER**
  - 47 files used bright `#25D366` behind white button text, including the sitewide sticky mobile WhatsApp bar (primary conversion element).
  - **S001 Fix (AA):** button surfaces → `#15803D` (5.01:1 AA), hover `#166534` (7.13:1 AAA); `text-[#25D366]` → `text-[#15803D]`; tokens `buttonGreen`/`buttonGreenHover` in site.ts.
  - **S002 Owner decision:** Owner reported new AA colors "achy ni lgg rye" and requested original vibrant colors per screenshot + klrenovator.com reference. **Reverted** to `#25D366` primary / `#128C7E` hover for WhatsApp, `#0EA5E9`/`#0284C7` for blue — 59 green + 386 blue occurrences restored. Business override documented; white-on-`#25D366` = 1.98:1 (fails AA) but matches official WhatsApp brand and klrenovator.com. Revert commit preserved in history (`f634a08` parent); AA palette available at `3887cfd`.
- 🔄 **[2026-08-07 / S001 → S002 business override] H1b. Same WCAG failure across sky-blue button family — REVERTED PER OWNER**
  - Audit tabled `#0284C7` at 4.10:1; `text-xs`/`text-sm` white on `#0EA5E9` = 2.77:1.
  - **S001 Fix:** `bg-[#0EA5E9]`/`bg-[#0284C7]` → `#0369A1` (5.94:1), hovers → `#075985` (7.56:1), texts → `#0369A1`, etc.
  - **S002 Owner decision:** Reverted to original vibrant `.btn-primary` `#0EA5E9`/`#075985`, secondary blue `#0284C7`/`#0369A1` hover, text accents `#0EA5E9`. Matches klrenovator.com "VIEW DETAILS & PRICING" blue. Same AA trade-off documented as H1.
- 🟡 **H2. `/faq` and ~42 other pages over 256KB raw HTML (up to ~3MB)**
  - Status: **verified pre-mitigated; remainder 🔒 deliberate product decision.** Session 001 measurements (`next start` production server): `/faq` = 3.65 MB raw → **254 KB gzipped** on the wire (MS: 229 KB, ZH: 233 KB). The directory is server-rendered with native `<details>` accordions; the client search filter reads the live DOM, so the ~560-Q&A dataset is NOT duplicated into the client JS bundle or RSC props. The remaining raw size is intentionally-indexable content server-rendered for SEO/AEO. Paginating would trade indexable content for bytes — prior documented decision (`docs/bing-site-scan-2026-08-03.md`) is to keep it. Revisit **only** after real PageSpeed Insights/CrUX field data demonstrates actual CWV harm (measured, not estimated).
- 🔒 **H3. Trilingual architecture gives MS/ZH content no separate crawlable URLs (~97% of page count)**
  - `/ms/*` and `/zh/*` deep paths 301 → EN (client-side language switch at one canonical URL). Only 6 real localized subtrees existed (`/ms/alatan`, `/zh/gongju`, `/ms/blog`, `/zh/bo-ke`, `/ms/soalan-lazim`, `/zh/chang-jian-wen-ti`).
  - **Why blocked (full rollout):** generating ~4,100 pages × 2 locales at build time is a strategic project (build cost ×3, translation quality gate, Google scaled-content risk). Requires an explicit owner go/no-go with budget. Options analysis recorded in Session 001 notes.
  - ✅ **[2026-08-07 / S003] PILOT IMPLEMENTED (the "no decision needed" intermediate step):** real, indexable localized service pages `/ms/services/*` + `/zh/services/*` — all 28 services × 2 locales + 2 localized directory indexes (`/ms/services`, `/zh/services`). Server-rendered 100% in-language from the already-complete service i18n data (verified 0 missing fields across all 28 services); real 3-URL hreflang clusters in metadata + sitemap (x-default → EN); middleware lets the two new trees pass through; language switcher + `/ms`/`/zh` scaffolds navigate to the real localized URLs; localized Service schema (incl. OfferCatalog) with page-correct `@id`/`url`. Sitemap 3,142 → **3,200** URLs; build 4,187 → **4,245** pages; `llms-full.txt`/`site-summary.json` counts auto-derived and regenerated. Est. indexable-surface expansion: +58 MS/ZH URLs for the service catalogue.
  - **Remaining for H3:** full rollout of areas/problems/suburbs/generic pages × 2 locales still needs the owner's go/no-go (that's the 8k-page project); the pilot measures indexation + conversions first.

### 🟠 High (new in S003)

- ✅ **[2026-08-07 / S003] M9. Trilingual parity gaps on the primary conversion + estimator surfaces (EN-only content leaked into MS/ZH UI)**
  - Four surfaces embedded the RAW English service title/name into otherwise-translated UI, producing mixed-language sentences for MS/ZH visitors:
    - `components/booking/multi-step-booking-form.tsx` — step-1 service cards (`service.title`), step-2 sub-service names/descriptions, and the WhatsApp handoff message (`serviceTitle`) were English even when the form chrome was translated. Also: `initialState.time = "Flexible"` stored the English display label, so the select matched no translated `<option>` and the WhatsApp message always said "Flexible" regardless of language; property-type/time stored display strings instead of keys.
    - `components/sections/locale-service-view.tsx` — `ServiceEstimatorBlock` received `service.title`/`service.warranty` (raw English) instead of `localized.*`, so the estimator wizard, package name and share-bar text were English while the rest of the service page was localized.
    - `components/estimate/estimate-share-page.tsx` — `title` prop (English) embedded into translated sentences ("Pengira kos {service}", share text).
    - `components/estimate/estimate-hub.tsx` — card headings + WhatsApp forward text used `entry.title` (English).
  - **Fix:** booking form + share page + hub now resolve `getLocalizedService(servicesData[slug], lang)` (all 28 services carry ms+zh overrides — verified); `locale-service-view` passes `localized.title`/`localized.warranty`; form stores property-type/time as dictionary keys translated at render + in the message. Verified 1027-key × 3-locale dictionary parity (0 missing/extra/empty/placeholder-mismatch), full build, and prod-server smoke tests.

### 🟡 Medium (new in S003)

- ✅ **[2026-08-07 / S003] A1. Exit-intent modal violated dialog a11y contract** — `role="dialog"`/`aria-modal="true"` with no Escape-to-close, no initial focus, no Tab trap, no focus restore, no `aria-labelledby`/`aria-describedby`.
  - **Fix:** `components/exit-intent-popup.tsx` rewritten — Escape closes, focus moves to the close button on open, Tab cycles within the dialog (visible focusables only), focus restored to the previously-focused element on dismiss, dialog titled/described via `aria-labelledby`/`aria-describedby`.

### 🟠 High (new in S005 — found by full-corpus build crawl)

- ✅ **[2026-08-07 / S005] N3. Nine content hubs had ZERO inbound internal links sitewide (crawl orphans)**
  - `/answers`, `/brands`, `/commercial`, `/compare`, `/near-me`, `/process`, `/residential`, `/seasonal`, `/top` — all listed in the sitemap, all reachable by URL, but **not one `<a href>` anywhere in the 4,240-page build pointed at them**. Their ~180 child pages therefore averaged 1–4 inbound links.
  - **Root cause:** the destinations existed only inside `components/ui/all-pages-menu.tsx`, a drawer whose contents mount *after a click*. The `menu.links.*` dictionary keys were fully translated in EN/MS/ZH but were never rendered by any component — so the server HTML never contained the links, and neither crawlers nor AI retrievers (which do not execute click handlers) could see them.
  - **Fix:** a sitewide, server-rendered `EXPLORE_LINKS` block in `components/ui/footer.tsx` (16 destinations on all 4,240 pages) + the same destinations surfaced in the drawer under an "Explore More" group. Reuses the existing translated keys — zero new translation debt.
  - **Verified:** hub inbound links 0 → 147–475 each; child clusters `/compare` avg 4 → 269, `/brands` 4 → 330, `/top` 4 → 389, `/seasonal` 4 → 475.

- ✅ **[2026-08-07 / S005] N4. All 1,036 `/areas/<area>/<service>/near-me` pages were crawl orphans**
  - The largest single orphan cluster in the build — 24% of all pages. Sitemap-listed, zero inbound internal links, so they depended entirely on sitemap discovery and received no internal link equity.
  - **Fix:** `components/sections/locale-area-service-view.tsx` now links each page's own near-me variant from the parent area × service page — the only contextually correct referrer, and it exists for every one of the 1,036 pairs. Localized via the existing `location.nearMeH1` key.
  - **Verified:** orphans 1,036 → 0.

- ✅ **[2026-08-07 / S005] N5. 27 of 28 `/services/<slug>/emergency` pages were crawl orphans**
  - Only `/services/plumbing/emergency` had inbound links (from the plumbing-diagnostic tool). The other 27 were sitemap-only.
  - **Fix:** `components/sections/locale-service-cost-view.tsx` adds an emergency call-out linking `/services/<slug>/emergency` — the closest sibling in the same service silo, built for all 28 services. Uses existing `emergencyPage.*` keys (EN/MS/ZH).
  - **Verified:** orphans 27 → 0.

- ✅ **[2026-08-07 / S005] N7. Localized MS/ZH trees were isolated islands (H3 pilot structurally starved)**
  - `/ms/soalan-lazim` and `/zh/chang-jian-wen-ti` had **zero** inbound internal links; the rest of the localized pages averaged ≤2. The sitewide navbar/footer only ever emit English URLs, and the only pointers to the localized FAQs were an hreflang annotation and a client-side `LocaleHubRedirect` — neither is a crawlable link. A crawler entering at `/ms/services/painting` could not walk to the Malay FAQ, blog or tools.
  - **Fix:** new `components/sections/locale-tree-links.tsx` — a server-rendered, in-language link row wired into all four localized trees × 2 locales (services index + detail, blog index + article, FAQ, tools index + detail). Reuses `nav.*`/`menu.*` keys already translated in three languages.
  - **Verified:** `/ms` and `/zh` cluster avg inbound 3 → 5; both localized FAQ hubs now linked; 0 orphans in the localized trees.

### 🟡 Medium (new in S005)

- ✅ **[2026-08-07 / S005] N1. The 404 page was a metadata clone of the homepage (soft-404 signal)**
  - With no `metadata` export, `app/not-found.tsx` inherited everything from the root layout, so the rendered 404 shipped: the homepage `<title>` + description (a byte-identical duplicate of `/`), **`<link rel="canonical" href="https://www.klservisrumah.my">`** — i.e. the error page told Google it *was* the homepage, inviting consolidation of every 404-serving URL into `/` — a full hreflang cluster and `og:url` pointing at the homepage, and **two contradictory `<meta name="robots">` tags** (`noindex` from the not-found boundary + `index, follow` inherited from the layout).
  - **Fix:** explicit metadata — distinct title/description, single `noindex, follow`, `alternates: {}` so **no canonical or hreflang is emitted at all** (a 404 must never canonicalise to a 200 page), plus own OG/Twitter copy so shared 404 links no longer preview as the homepage.
  - **Verified:** live `curl` → HTTP **404**, no canonical, no hreflang, own title.

- ✅ **[2026-08-07 / S005] N2. MS/ZH service pages were the only place linking six redirecting `/estimate/<slug>` URLs**
  - Painting, plumbing, ceiling, plaster-ceiling, waterproofing and handyman own deeper hand-built tools; their `/estimate/<slug>` URL is a 301 handled in middleware and no static page is ever built for it. The 12 localized service pages linked the redirecting URL on a primary CTA — the only internal redirect hops in the entire build.
  - **Fix:** `components/sections/locale-service-page.tsx` resolves `buildEstimateLinks().resolvedPath` (the same canonical destination the `/estimate` hub already uses).
  - **Verified:** broken/redirecting internal link targets **6 → 0**.

- ✅ **[2026-08-07 / S005] N6. 58 pages shipped a broken heading hierarchy (h1 → h3 skip)**
  - 36 MS/ZH blog articles: the localized markdown renderer emitted every `###` block as `<h3>`, but `###` is the *only* heading level used anywhere in `config/blog-i18n.ts` (verified: zero `##`, zero `####`), so those are the articles' top-level sections. 22 `/estimate/<slug>` pages: the estimator's question cards re cards render as `<h3>` with no section heading above them (`/tools/*` already has a visible `<h2>` there).
  - **Fix:** localized blog renderers emit `<h2>` (visual size unchanged); `estimate-share-page.tsx` adds an `sr-only` `<h2>` above the form reusing the existing `estimateShare.pageHeading` key.
  - **Impact:** WCAG 1.3.1 conformance + cleaner document outline for AI answer-engine section extraction.
  - **Verified:** heading-skip pages **58 → 0**.

### 🟠 High (new in S006)

- ✅ **[2026-08-07 / S006] N8. No Content-Security-Policy anywhere on the site**
  - The site shipped HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy` and `Permissions-Policy` but **zero CSP** — the single most effective defence-in-depth header against XSS, and the most conspicuous gap in an otherwise solid header set. The app renders trusted JSON-LD and a locale-bootstrap script through `dangerouslySetInnerHTML` in nine places; CSP is what limits the blast radius if any of those is ever fed attacker-influenced data, and it independently blocks injected third-party scripts, foreign form posts, plugins and framing.
  - **Fix:** a CSP derived from an inventory of what the app actually loads (nothing speculative) — `default-src 'self'`; `object-src`/`frame-src`/`frame-ancestors` `'none'`; `form-action 'self'`; `base-uri 'self'`; `script-src` origin-limited to self + Google Tag Manager; `img-src` self + `data:` (the hero's base64 blur placeholder) + `blob:` (next/image) + GA pixel; `connect-src` self + GA collection endpoints; `upgrade-insecure-requests`. Added `Cross-Origin-Opener-Policy: same-origin`, `Cross-Origin-Resource-Policy: same-origin`.
  - **Documented trade-off:** `script-src` retains `'unsafe-inline'` because Next.js App Router bootstraps hydration with inline scripts and this site is ~4,245 statically prerendered pages served from a CDN — there is no per-request nonce available. Still a large net gain: an injected `<script src="https://evil.tld">` is blocked, as are `eval`, foreign form actions, plugins and framing.
  - **Verified:** header present on both HTML documents and static assets; the `immutable` cache rule on `/_next/static/*` is preserved (checked explicitly — a naive header addition would have stomped it); every real subresource on the homepage is same-origin and permitted; 25-URL smoke test all 200/404 as expected.

### 🟡 Medium (new in S006)

- ✅ **[2026-08-07 / S006] N9. "Send Estimate to Customer" panel was hardcoded English on every locale**
  - 13 user-facing strings (heading, subtitle, toggle, two field labels, two placeholders, preview label, two buttons, two `alert()` messages, the success confirmation) were literal English inside `components/tools/estimator/estimate-result.tsx`. The panel renders inside `EstimateResultPanel`, which is shared by **all** estimator surfaces — including the five MS wizards under `/ms/alatan/*` and the five ZH wizards under `/zh/gongju/*`. A Malay or Chinese visitor who completed an estimate hit a block of raw English mid-flow, breaking the trilingual contract the rest of the estimator honours.
  - **Fix:** new `estimator.sendToCustomer` namespace (14 keys) added to all three site dictionaries **and** all three standalone chrome modules (`chrome-en/ms/zh.ts`), with natural Malay and Chinese written for native speakers — not literal machine translation. Component now resolves every string through the existing locale-aware `t()` that was already in scope.
  - **Also extended the guard:** `scripts/test-estimators.ts` `chromeSections` now includes `sendToCustomer`, so the harness enforces that the standalone chrome modules never drift from `messages/*.json` for this section — the same protection the other five sections already had. Assertion count 231,498 → **231,501**.
  - **Verified:** dictionaries 1,041 → **1,055 keys × 3 locales, perfect parity, 0 empty**; the Malay and Chinese strings are present in the respective locale route bundles (checked by fetching each route's client chunks).

### 🟢 Low (new in S003)

- ✅ **[2026-08-07 / S003] L4. Six dead hero SVGs** — `public/hero-ceiling-fan.svg`, `hero-lighting.svg`, `hero-plaster-ceiling.svg`, `hero-skim-coat.svg`, `hero-tiling.svg`, `hero-water-heater.svg`. Zero references in `app/`/`components/`/`config/`/`lib/`/`scripts/`/`public/`; the 6 services they were drawn for switched to `/hero/home-services-*.jpg` photos. **Deleted** (git history preserves them).
- ✅ **[2026-08-07 / S003] L5. Stale `public/robots-ai.txt`** — a leftover AI-crawler allow-list fully superseded by `app/robots.ts` (which allow-lists the same bots + more and references both sitemaps). Zero references anywhere. **Deleted.**
- ✅ **[2026-08-07 / S003] L6. `public/logo/logo.jpg` byte-identical duplicate of `og-image.jpg`** (md5 `7529284c…`) — zero references; `config/site.ts` uses `logo.png`/`og-image.jpg`. **Deleted.**
- ✅ **[2026-08-07 / S004] L7. Dead component `components/before-after-slider.tsx`** — placeholder before/after SVG illustration; never imported. Homepage uses `sections/before-after.tsx`. **Deleted.**
- ✅ **[2026-08-07 / S004] L8. Dead component `components/case-study-card.tsx`** — unused case study card component; never imported. **Deleted.**
- ✅ **[2026-08-07 / S004] L9. Dead component `components/sections/testimonials.tsx`** — superseded by `google-reviews.tsx`; never imported. **Deleted.**
- ✅ **[2026-08-07 / S004] L10. Dead asset `public/logo/logo.svg`** — zero references in any source file. Site uses PNG variants. **Deleted.**
- ✅ **[2026-08-07 / S004] L11. Dead asset `public/logo/logo-icon.svg`** — zero references. Site uses `logo-icon.png`. **Deleted.**

---

### 🟡 Medium (S001–S002 items)

- ✅ **[2026-08-07 / S001] M1. No production error monitoring** — only `console.error` in `app/error.tsx`.
  - **Fix:** zero-dependency client error beacon — `app/error.tsx` + a global `error`/`unhandledrejection` listener report via `navigator.sendBeacon` to new `/api/error-log` route (sanitized, no PII, rate-limited), which logs structured JSON server-side → surfaces in Vercel function logs. No new packages, no external account required.
- ✅ **[2026-08-07 / S001] M2. Four installed-but-never-imported dependencies** (`react-hook-form`, `zod`, `@hookform/resolvers`, `tailwind-merge`)
  - **Fix:** uninstalled (0 imports anywhere, incl. `scripts/`); removed from `experimental.optimizePackageImports` in `next.config.mjs`; README "Forms & Validation" stack line corrected to reflect the real `useState` + WhatsApp-handoff form architecture.
- ✅ **[2026-08-07 / S001] M3. Homepage "13+ Service pillars" vs "28+ services" on the same page**
  - Real count is 28 (`servicesData` keys). **Fix:** stat badge now derives the count from `servicesData` (28+) so it can never drift from the FAQ copy again; also fixed the same stale "13+" on `/about`.
- ✅ **[2026-08-07 / S001] M4. `@typescript-eslint/no-explicit-any` disabled in `eslint.config.mjs`** — guardrail off even though usage is currently 0.
  - **Fix:** rule re-enabled as `error`; lint still passes clean (0 `any` anywhere).
- ✅ **[2026-08-07 / S001] M5. Missing `npm run type-check` script** — required by the master instructions' verification gate; `package.json` had none.
  - **Fix:** added `type-check: tsc --noEmit` script; verified passing.
- 🟡 **M8. `config/` data-layer naming sprawl** (`area-*`×4, `problem-*`×3, `content-*`×3, `blog-*`×3)
  - Status: **documented, deferred.** Consolidating 26 files × thousands of localized strings is a big-bang edit with high regression risk and zero functional gain today. Deferred until a natural content-migration milestone; added contributor note instead.
- ✅ **[2026-08-07 / S001] M7. Three components without explicit responsive classes** (`faq-search-filter`, `locale-decision-tree`, `locale-service-view`)
  - Reviewed: both `locale-*` files are layout-neutral wrappers delegating to responsive children (`DecisionTree` = `grid-cols-1 md:grid-cols-3`; detail-hero/content sections all carry `sm:`/`lg:` systems); `faq-search-filter` is a centred `max-w-2xl` fluid block. **No defect found; no changes required.**

### 🟢 Low (S001–S002 items)

- ✅ **[2026-08-07 / S001] L1. Stale `public/robots.txt`** shadowed by `app/robots.ts` (misleading to future readers) — **deleted** (confirmed inert: App Router `robots.ts` wins; no `output: "export"`).
- ✅ **[2026-08-07 / S001] L2. Misplaced doc comment in `lib/utils.ts`** — the `toIsoDate` block sat above `warrantyLead`; **moved** to the correct function.
- ✅ **[2026-08-07 / S001] L3. Hardcoded magic fallback date `"2026-07-24"` in `toIsoDate`** — **replaced** with named, documented constant `DEFAULT_CONTENT_DATE` (deliberately NOT auto-computed: a daily-shifting `dateModified` erodes schema trust signals; constant updated on content releases).

---

## Phase 2 — Sessions

### ✅ Session 001 — 2026-08-07
Objectives: scaffolding + full re-verification + fix all 🔴 and as many 🟠/🟡/🟢 as safely possible.
Completed: Phase 0, C1, H1, M1–M5, M7, L1–L3, plus verification suite (lint / type-check / build / estimator tests / SEO snapshot).
Remaining: H2 partial (field-data gated), H3 🔒 owner decision, M8 deferred.

### ✅ Session 002 — 2026-08-07
Objectives:
- Address owner feedback on WhatsApp brand colors (reported as "achy ni lgg rye" after WCAG AA migration).
- Restore original vibrant brand palette per klrenovator.com reference + screenshot provided.
- Re-audit after revert; ensure build/lint/type-check remain green.
- Continue from highest-priority remaining tasks (H2/H3/M8).

Completed:
- **WhatsApp colors reverted per owner request**: `bg-[#15803D]` → `bg-[#25D366]` (59 files), `hover:bg-[#166534]` → `hover:bg-[#128C7E]`, `.btn-whatsapp` globals restored to `#25D366`/`#128C7E`, `config/site.ts` whatsappColors back to original 3-color spec (`#25D366` primary, `#128C7E` hover, `#075E54` dark). Verified against `b15640d` (pre-S001 commit) + screenshot + klrenovator.com.
- **Primary blue restored**: `bg-[#0369A1]` (AA-migrated) → original vibrant `#0EA5E9` / `#0284C7` with hover `#0369A1` / `#075985`; `text-[#0369A1]` → `text-[#0EA5E9]` (386 occurrences), `.btn-primary` back to `#0EA5E9` / `#075985`. Matches klrenovator.com "VIEW DETAILS & PRICING" vibrant blue.
- Preserved non-color fixes from S001: admin server-auth (C1), error beacon (M1), dep cleanup (M2), service-count dynamic fix (M3) kept in `app/about/page.tsx`, `no-explicit-any` guard (M4), `type-check` script (M5), `DEFAULT_CONTENT_DATE` (L3), doc-comment fix (L2), `public/robots.txt` deletion (L1).
- Verification: `npm install`, `npm run lint` 0/0, `npm run type-check` PASS, `npm run build` SUCCESS (4187 pages), no `15803D`/`166534` remaining; `#0369A1` only as intentional hover/gradient middle (original pattern).
- Documented trade-off: original brand colors fail WCAG AA (white on `#25D366` = 1.98:1, blue `#0EA5E9` white = 2.77:1, `#0284C7` white = 4.10:1 fails small-text 4.5:1). Owner explicitly requested brand vibrancy over strict AA for primary CTAs — recorded as business override, not a bug. Accessibility otherwise maintained (focus-visible, ARIA, labels, skip-link, error reporting).
Remaining: H2 field-data gated, H3 🔒 owner decision, M8 deferred — unchanged.

Business note for H1:
- ✅ S001 fixed AA (5.01:1 green, 5.94:1 blue) → ✅ S002 reverted to brand `#25D366`/`#0EA5E9` per owner (`klrenovator.com` reference). Status changed from "Fixed" to "Business override — owner prefers brand vibrancy; documented, not a regression". If AA is required later, use S001's `#15803D`/`#0369A1` mapping (still in git history: commit 3887cfd).

### ✅ Session 003 — 2026-08-07
Objectives:
- Read all governance files; verify S001/S002 claims against the checkout.
- Independent deep audit of the entire repository (static greps, message-dictionary parity, asset-usage sweep, security re-check, runtime smoke tests).
- Fix the highest-priority unfinished actionable work: trilingual parity on conversion/estimator surfaces (backlog item 4) + a11y + dead assets.
- Implement the H3 pilot (real localized service URLs — the roadmap's recommended "no decision needed" intermediate step).
- Verify: lint / type-check / build / estimator tests / SEO audit / prod-server smoke tests.

Completed (first half — parity/a11y/assets):
- **M9 (High) — trilingual parity on conversion surfaces fixed**: booking form (`multi-step-booking-form.tsx`) now localizes service titles, sub-service names/descriptions and the WhatsApp handoff via `getLocalizedService(…, lang)`; form stores property-type/time as dictionary keys translated at render (fixes the hardcoded English `"Flexible"` default that matched no translated `<option>`); `locale-service-view.tsx` passes `localized.title`/`localized.warranty` to `ServiceEstimatorBlock`; `estimate-share-page.tsx` and `estimate-hub.tsx` localize titles embedded in translated sentences + WhatsApp share text.
- **A1 (Medium) — exit-intent modal dialog a11y fixed**: Escape-to-close, initial focus, Tab trap, focus restore, `aria-labelledby`/`aria-describedby`.
- **L4/L5/L6 (Low) — dead assets removed**: 6 unused hero SVGs (`hero-ceiling-fan/lighting/plaster-ceiling/skim-coat/tiling/water-heater.svg`), stale `public/robots-ai.txt`, and `logo.jpg` (byte-identical duplicate of `og-image.jpg`). All confirmed 0-references repo-wide; git history preserves them.

Completed (second half — H3 pilot, all 28 services × 2 locales + 2 indexes):
- New server-rendered localized service pages `/ms/services/[slug]` + `/zh/services/[slug]` (SSG, `dynamicParams=false`, real 404s) rendered 100% in-language from `getLocalizedService` + a new server translator (`lib/i18n-server.ts`, same message keys as the client) — hero, overview, direct answer, pricing, process, FAQs, schema, CTAs; no English flash, no client-data duplication.
- New localized directory indexes `/ms/services` + `/zh/services` (server-rendered, localized titles/taglines/prices).
- Real 3-URL hreflang clusters for every service page + both directories: metadata (`buildMetadata` `languageUrls`) on EN + MS + ZH pages and full clusters in `app/sitemap.ts` (x-default → EN; self-referencing kept for EN-only cost/emergency/sub-service pages).
- `middleware.ts` REAL_LOCALE_TREES extended with `/ms/services`, `/zh/services` (no more 301 → EN).
- Language switcher navigates `/services` ↔ `/ms/services` ↔ `/zh/services` and `/services/<slug>` ↔ localized twins; `/ms` and `/zh` scaffolds link to their localized directories.
- `getServiceSchema` gained optional `path` + `subServices` so localized pages emit page-correct `@id`/`url` and in-language OfferCatalog.
- 14 new message keys (1041 × 3, parity kept): `serviceDetail.verifiedBadge/allCoverage`, `breadcrumbs.services`, `serviceContent.isRightAnswer/ctaHeading/ctaSub/estimateCta/allServices/pricingLink`, `services.pageEyebrow/warrantyBadge/notSureHeading/notSureSub/askWhatsApp`.
- Counts auto-derived: sitemap 3,142 → 3,200 URLs; build 4,187 → 4,245 pages; `llms-full.txt` + `site-summary.json` regenerated (3,200 indexable pages).

Verification (both halves):
- `npm install` clean; `npm audit` 0 vulns; `npm run lint` 0/0; `npm run type-check` PASS; `npm run build` SUCCESS (4,245 pages); estimator suite 231,498 assertions PASS; `npm run seo:audit` clean.
- Message dictionaries: 1,041 keys × 3 locales, 0 missing/extra/empty/placeholder-mismatch.
- Prod-server smoke: `/ms/services` 200 (no 301), `/ms/services/painting` 200 with Malay `<title>` + `<h1>` + Malay schema (serviceType, url, OfferCatalog), `/zh/services/painting` 200 with Chinese title, `/ms/services/not-a-service` real 404, EN `/services/painting` emits the real ms/zh hreflang cluster, canonical self-correct on every page, sitemap shows full clusters, `/ms` scaffold still 200.

Remaining: H2 field-data gated; H3 full rollout (8k pages) still 🔒 owner go/no-go (pilot now live to measure); M8 deferred; backlog items 5/7/8/9 — unchanged.

### ✅ Session 004 — 2026-08-07
Objectives:
- Independent deep re-audit of the entire repository after S003 changes.
- Identify and fix any remaining dead code, unused assets, and dependency hygiene issues.
- Verify all S001–S003 fixes remain intact.
- Update dependencies to latest safe minor/patch versions.

Completed:
- **L7 (🟢 Low) — Dead component `components/before-after-slider.tsx`** — placeholder before/after illustration component with SVG art; never imported anywhere. The homepage uses `components/sections/before-after.tsx` (which has its own inline before/after rendering). **Deleted.**
- **L8 (🟢 Low) — Dead component `components/case-study-card.tsx`** — simple case study card component with MapPin icon; never imported anywhere. **Deleted.**
- **L9 (🟢 Low) — Dead component `components/sections/testimonials.tsx`** — superseded testimonials component using `ReviewCarousel`; never imported. Homepage uses `components/sections/google-reviews.tsx` instead. Translation keys (`home.testimonials.*`) retained in dictionaries (shared by `google-reviews.tsx` for the header badge). **Deleted.**
- **L10 (🟢 Low) — Dead asset `public/logo/logo.svg`** — SVG logo file, zero references in any source file, layout icons, or metadata. Site uses `logo.png` / `logo-lockup.png` / `logo-icon.png`. **Deleted.**
- **L11 (🟢 Low) — Dead asset `public/logo/logo-icon.svg`** — SVG icon file, zero references anywhere. Site uses `logo-icon.png` (referenced in `app/layout.tsx` favicon, `components/ui/logo.tsx`, `config/site.ts`). **Deleted.**
- **Dependency hygiene (🟢 Low #9 partial)** — Safe minor/patch updates applied: `@types/react` 19.2.17 → 19.2.18, `@types/react-dom` 19.2.3 → 19.2.4, `lucide-react` 1.28.0 → 1.29.0, `postcss` 8.5.25 → 8.5.26, `typescript-eslint` 8.65.0 → 8.66.0. Major-version bumps deliberately skipped (`next` 15→16, `typescript` 5→7, `@types/node` 22→26) — too risky for a production site.
- Verified all S001–S003 fixes remain intact (admin auth, error beacon, middleware gates, H3 pilot, trilingual parity, exit-intent a11y, color revert).

Verification:
- `npm install` clean · `npm audit` **0 vulnerabilities**.
- `npm run lint` — **0 errors, 0 warnings**.
- `npm run type-check` — **PASS**.
- `npm run build` — **SUCCESS** (4,245 pages; estimator suite 231,498 assertions PASS).
- `npm run seo:audit` — clean, report regenerated.
- Message dictionaries — **1,041 keys × 3 locales, perfect parity** (0 missing/extra/empty).
- Prod-server smoke: `/` 200, `/ms/services` 200, `/zh/services` 200, `/ms/services/painting` 200, `/contact` 200, `/faq` 200, `/admin/tools` 307 → login, deleted `logo.svg` 404, `robots.txt` correct.

New issues discovered this session:
- 🟢 **L7/L8/L9/L10/L11** — dead components and assets. **All fixed.**
- (Observation) `getWhatsAppLink()` always generates English-only message templates regardless of locale — affects ~30 call sites. Not a bug (business reads English), but a future improvement would be locale-aware templates. Noted for backlog.
- (Observation) A few `getWhatsAppLink()` call sites on locale-aware pages pass hardcoded English strings (e.g. `locale-services-index.tsx` passes `"home services"`, `exit-intent-popup.tsx` passes `"fixed-price home service quote"`). Since the WhatsApp message templates are English anyway, this is cosmetic. Deferred.

Files deleted (5):
- `components/before-after-slider.tsx` — never imported, superseded by `before-after.tsx`.
- `components/case-study-card.tsx` — never imported.
- `components/sections/testimonials.tsx` — never imported, superseded by `google-reviews.tsx`.
- `public/logo/logo.svg` — zero references.
- `public/logo/logo-icon.svg` — zero references.

Files modified (3):
- `package.json` — dependency version bumps.
- `package-lock.json` — lockfile updated.
- `docs/seo-audit-report.md` — regenerated by `npm run seo:audit`.

### Current Project Status (updated S006)
- 🔴 Critical: **0 remaining.**
- 🟠 High: N8 ✅ (S006 — CSP + cross-origin isolation headers); N3/N4/N5/N7 ✅ (S005 — internal-linking architecture repaired); H3 pilot ✅ live; H1/H1b business override (documented); H2 field-data gated.
- 🟡 Medium: N9 ✅ (S006 — estimator send-panel trilingual); N1/N2/N6 ✅ (S005); A1 ✅; M1–M5, M7, M9 ✅; M8 deferred.
- 🟢 Low: L1–L11 ✅; dependency hygiene updated.
- **Security headers (S006):** CSP, COOP, CORP now shipped alongside the pre-existing HSTS / X-Frame-Options / nosniff / Referrer-Policy / Permissions-Policy. `npm audit` 0 vulnerabilities.
- **Multilingual:** 1,055 keys × 3 locales, perfect parity, 0 empty values; no hardcoded English remains in any shared estimator surface.
- **Crawl health (full-corpus measurement, 4,240 built pages):** orphan pages **1,077 → 0** real content pages (only `/ms`, `/zh` noindex scaffolds and noindex `/search` remain, all correct); broken/redirecting internal link targets **6 → 0**; heading-hierarchy skips **58 → 0**; internal links **219,562 → 267,596** (+48,034).
- **Production-ready** pending owner-side env vars + full H3 rollout decision.

### Remaining High-Priority Tasks (owner-side / data-gated)
1. **H3 full-rollout decision** — owner go/no-go after measuring the pilot's indexation + conversions. *S005 note: the pilot's structural handicap is now fixed — before this session the localized trees had almost no internal links, so pilot indexation data gathered earlier under-represents its real potential. Re-measure after this deploy before deciding.*
2. **H2 checkpoint** — revisit `/faq` page size only after real CrUX/PageSpeed field data.
3. **Set `ADMIN_PASSWORD`** + confirm `INDEXNOW_SECRET`/`CRON_SECRET`/`PAGESPEED_API_KEY`/`NEXT_PUBLIC_GA_ID` in Vercel.
4. Google Business Profile + IndexNow + Bing Webmaster post-deploy pings (owner-side).

### Recommended Next Task (updated S006)
0. **CSP field-check after deploy.** The policy was verified against every subresource the build actually references, but browsers see runtime-only requests too. After deploying, watch the browser console / `report-uri`-less violations on a real session (homepage, an estimator, the booking form) for one cycle. If anything is blocked, widen the specific directive rather than loosening `default-src`.
1. **Deploy + re-measure.** The S005 internal-linking repair changes what Google can reach and how equity flows; give it a crawl cycle, then read GSC (coverage for the 9 hubs, the 1,036 near-me pages and the localized trees).
2. Then the H3 full-rollout go/no-go with clean data.
3. Owner-side env vars + pings (blocking nothing in code).
4. Future: `getWhatsAppLink()` locale-aware message templates (cosmetic; business currently receives English messages).
5. Consider `low inbound (≤2)` clusters as the next optimisation tier — 648 `/suburbs/*` and 1,036 near-me pages now have ≥1 link but remain thin on internal equity (see S005 notes).
6. When a content-migration milestone arrives, consolidate `config/` families (M8).

---

## Phase 3 — Backlog (post-critical roadmap)

Priority-ordered remaining work:

### 🟠 High
1. ✅ **[2026-08-07 / S003] H3 PILOT LIVE** — real localized service URLs implemented for all 28 services × 2 locales + 2 directory indexes (sitemap 3,200 URLs, build 4,245 pages). Next: **owner go/no-go for the FULL rollout** (~8k more pages: areas/suburbs/problems/generic × 2 locales) once the pilot's indexation + conversion data is measured. `/services/<slug>/cost|emergency` + sub-service pages stay client-side-switching until the full-rollout decision.
2. 🟡 **H2 field-data checkpoint**: once CrUX/PageSpeed field data exists for `/faq` (needs live traffic), decide paginate/lazy-by-category vs keep. Do not act before real data.
3. ⬜ **Set `ADMIN_PASSWORD` + confirm `INDEXNOW_SECRET`/`CRON_SECRET`/`GOOGLE_API_KEY` env vars in production** (owner action in Vercel; cannot be done from the repo). Rotate the burned `KL2024Admin` everywhere else it may have been reused.

### 🟡 Medium
4. ✅ **[2026-08-07 / S003]** MS/ZH contact & booking chrome parity audit — **completed as M9** (booking form, service-page estimator block, `/estimate` hub + share pages now fully localized; form time/property-type select values are language-keyed). Residual: `/estimate` hub is owner-oriented (EN-first by design), but now follows the language pill too.
5. ⬜ Google Business Profile + IndexNow + Bing Webmaster post-deploy ping confirmation (owner-side, flagged in prior docs).
6. ⬜ Consolidate `config/` families at a content-migration milestone (M8).
7. ⬜ Optional: wire Sentry (or similar) **if** Vercel-log-based error beacon proves insufficient once traffic grows (M1 implemented the zero-cost baseline).

### 🟢 Low
8. ⬜ Visual QA pass on real devices (no renderer available in sandbox): spot-check the 3 fluid components + WhatsApp CWA states on small phones.
9. ✅ **[2026-08-07 / S004]** Periodic `npm outdated` / `npm audit` hygiene — `npm audit` 0 vulns; safe minor/patch updates applied (`@types/react` 19.2.18, `@types/react-dom` 19.2.4, `lucide-react` 1.29.0, `postcss` 8.5.26, `typescript-eslint` 8.66.0). Major bumps (`next` 16, `typescript` 7, `@types/node` 26) deliberately deferred (too risky for production). Re-run periodically.

### Long-term opportunities (not defects)
- Grow the real localized trees (now 8: tools, blog, FAQ, services) as the de-facto expansion path for MS/ZH search visibility — the H3 pilot proves the pattern; the full rollout decision determines the next ~8k pages.
- Content velocity for AEO: `llms.txt`/`aeo-faq.txt` already generated — keep the generator scripts wired into `prebuild` (they are).
- Consider lightweight review-collection pipeline feeding the testimonials schema.

---

## Rules for every future session
1. Read this file + `SESSION_LOG.md` + the two master docs **before** changing anything.
2. Continue from the highest-priority ⬜ / 🟡 item. Never redo ✅ items.
3. 🔒 items require owner input — document, do not silently force.
4. After every fix: run `npm run lint`, `npm run type-check`, `npm run build` (+ relevant generators/tests) before marking ✅.
5. Append to `SESSION_LOG.md` at session end. Never overwrite history.
