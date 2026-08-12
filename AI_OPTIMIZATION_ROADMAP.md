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

### 🟠 High (new in S007)

- ✅ **[2026-08-07 / S007] N10. 1,072 pages shipped hreflang while canonicalised to a different URL (canonical-overrides-hreflang violation)**
  - The full-corpus hreflang/canonical audit (new S007) found that every page using `buildMetadata({ canonicalPath })` inherited a self-referencing 4-lang hreflang cluster from `buildAlternates()`. The cluster correctly pointed at the **canonical** URL, but the **canonical page** never reciprocated, so the canonicalised page was making a claim about a multilingual cluster that the canonical did not participate in. Google's docs are explicit: "If page A points to page B via `rel=canonical`, the canonical tag overrides hreflang on page A." Every third-party hreflang validator (hreflang-checker, Merkle, Sistrix) flags this as a cluster defect.
  - **Affected (1,072 total):** 28 × `/services/<slug>/cost` → canonicalises to parent; 1,036 × `/suburbs/<area>/<service>` → canonicalises to area twin; 3 × locale scaffolds (`/`, `/ms`, `/zh`) → canonicalises to `/`.
  - **Fix:** added `omitLanguages?: boolean` to `buildAlternates()`. `buildMetadata` now passes `omitLanguages=true` automatically when `canonicalPath != path`; the locale scaffolds' manual call was updated. The `alternates` block is now `{ canonical }` only — no `languages` field is emitted at all (the canonical page is responsible for the cluster). 1,066 self-canonical parents (the parents) are completely unaffected.
  - **Verified:** full-corpus re-audit: canonical≠self AND hreflang-present = **0** (was 1,072). All 6 smoke-tested surfaces correct: cost page → canonical-only, suburb page → canonical-only, emergency page → self-canonical + hreflang intact, main service page → 3-URL H3 cluster intact, `/ms/services/painting` → 3-URL cluster, ZH tool page → 3-URL cluster with raw CJK + percent-encoded equivalence.
  - **Defence for the future:** `scripts/seo-audit.ts` now walks the full 4,240-page build and runs this exact check, exiting non-zero if any page violates the rule. URL comparison handles `/index`↔`/` and percent-encoded CJK equivalence so the harness doesn't false-positive on those cases.

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

### ✅ Session 005 — 2026-08-07
Objectives: full-corpus build crawl (every one of 4,240 generated HTML files), surface the class of defect no amount of source reading finds (pages correct in isolation but unreachable in the graph).
Completed: **N3 (🟠)** — 9 zero-inbound-link content hubs (`/answers`, `/brands`, `/commercial`, `/compare`, `/near-me`, `/process`, `/residential`, `/seasonal`, `/top`); root cause: destinations only inside a click-mounted drawer. Fix: server-rendered `EXPLORE_LINKS` in footer + same group in drawer. **N4 (🟠)** — 1,036 `/areas/<area>/<service>/near-me` orphans (24% of site). Fix: parent area×service page links its near-me variant. **N5 (🟠)** — 27 of 28 emergency pages orphans. Fix: sibling /cost page emergency call-out. **N7 (🟠)** — localized MS/ZH trees were isolated islands. Fix: new `locale-tree-links.tsx` wired into all 4 localized trees × 2 locales. **N1 (🟡)** — 404 page was a metadata clone of the homepage (soft-404 signal). **N2 (🟡)** — MS/ZH service pages were the only internal links to 6 redirecting URLs. **N6 (🟡)** — 58 pages with h1→h3 skip. Result: orphans **1,077 → 0** real content pages; broken targets **6 → 0**; heading skips **58 → 0**; internal links **+48,034**. All fixes reuse existing translated keys.

### ✅ Session 006 — 2026-08-07
Objectives: audit security headers + shared-component English leakage.
Completed: **N8 (🟠)** — added CSP + COOP + CORP + X-DNS-Prefetch-Control. Policy derived from an inventory of what the app actually loads. `'unsafe-inline'` in `script-src` documented as a Next.js static-export limitation. **N9 (🟡)** — "Send Estimate to Customer" panel was hardcoded English on every locale. Fix: 14-key `estimator.sendToCustomer` namespace in all 3 site dictionaries + 3 standalone chrome modules, with natural Malay and Chinese. Added the section to the test-estimators harness (231,498 → 231,501 assertions).

### ✅ Session 007 — 2026-08-07
Objectives: full-corpus canonical/hreflang consistency audit (new dimension not measured by S005).
Completed: **N10 (🟠)** — 1,072 pages shipped hreflang while canonicalised to a different URL (28 cost pages + 1,036 canonicalised suburbs + 3 locale scaffolds). Google: "canonical overrides hreflang." Fix: `buildAlternates(path, omitLanguages?)` parameter; `buildMetadata` auto-passes `omitLanguages=true` when `canonicalPath != path`; `/ms` and `/zh` scaffolds updated. **L12 (🟢)** — 5 dead service-icon SVGs in `public/icons/services/` (zero references; site uses `components/ui/service-icon.tsx` inline SVGs). Deleted. **Defence for the future:** `scripts/seo-audit.ts` extended with a post-build full-corpus canonical/hreflang consistency check that exits non-zero on any violation. **Bonus dep hygiene:** `lucide-react` 1.29.0 → 1.30.0. Result: canonical/hreflang consistency **1,072 → 0** across 4,240 pages. All other S001–S006 fixes verified intact.

Files modified (3):
- `package.json` — dependency version bumps.
- `package-lock.json` — lockfile updated.
- `docs/seo-audit-report.md` — regenerated by `npm run seo:audit`.

### Current Project Status (updated S007)
- 🔴 Critical: **0 remaining.**
- 🟠 High: N10 ✅ (S007 — canonical/hreflang consistency); N8 ✅ (S006 — CSP + cross-origin isolation headers); N3/N4/N5/N7 ✅ (S005 — internal-linking architecture repaired); H3 pilot ✅ live; H1/H1b business override (documented); H2 field-data gated.
- 🟡 Medium: N9 ✅ (S006 — estimator send-panel trilingual); N1/N2/N6 ✅ (S005); A1 ✅; M1–M5, M7, M9 ✅; M8 deferred.
- 🟢 Low: L1–L12 ✅ (L12 = dead service-icon SVGs); dependency hygiene updated.
- **Security headers (S006):** CSP, COOP, CORP shipped alongside HSTS / X-Frame-Options / nosniff / Referrer-Policy / Permissions-Policy. `npm audit` 0 vulnerabilities.
- **Metadata integrity (S007):** canonical/hreflang consistency **0 defects** across 4,240 pages (was 1,072); every page has title, description, H1, canonical, JSON-LD, og:image, twitter:card.
- **Multilingual:** 1,055 keys × 3 locales, perfect parity, 0 empty values; no hardcoded English remains in any shared estimator surface.
- **Crawl health (full-corpus measurement, 4,240 built pages):** orphan pages **1,077 → 0** real content pages; broken/redirecting internal link targets **6 → 0**; heading-hierarchy skips **58 → 0**; internal links **219,562 → 267,596** (+48,034); canonical/hreflang consistency **1,072 → 0**.
- **Production-ready** pending owner-side env vars + full H3 rollout decision.

### Remaining High-Priority Tasks (owner-side / data-gated)
1. **H3 full-rollout decision** — owner go/no-go after measuring the pilot's indexation + conversions. *S005 note: the pilot's structural handicap is now fixed — before S005 the localized trees had almost no internal links, so pilot indexation data gathered earlier under-represents its real potential. Re-measure after the S005/S006/S007 deploys before deciding.*
2. **H2 checkpoint** — revisit `/faq` page size only after real CrUX/PageSpeed field data.
3. **Set `ADMIN_PASSWORD`** + confirm `INDEXNOW_SECRET`/`CRON_SECRET`/`PAGESPEED_API_KEY`/`NEXT_PUBLIC_GA_ID` in Vercel.
4. Google Business Profile + IndexNow + Bing Webmaster post-deploy pings (owner-side).

### Recommended Next Task (updated S007)
0. **CSP field-check after deploy** (carried from S006) — the policy was verified against every build reference, but browsers issue runtime-only requests too. After deploying, watch the browser console for one real session (homepage, an estimator, the booking form). If anything is blocked, widen the specific directive rather than loosening `default-src`.
1. **Deploy + re-measure.** The S005 internal-linking repair, S006's CSP, and S007's hreflang fix materially change what is reachable and how Google reads clusters; give it a crawl cycle, then read GSC (coverage for the 9 hubs, the 1,036 near-me pages, the localized trees, and the hreflang-validating tools).
2. Then the H3 full-rollout go/no-go with clean data.
3. Owner-side env vars + pings (blocking nothing in code).
4. Future: `getWhatsAppLink()` locale-aware message templates (cosmetic; business currently receives English messages).
5. Consider the `low inbound (≤2)` clusters as the next in-repo optimisation tier — 648 `/suburbs/*` and 1,036 near-me pages now have ≥1 link but remain thin on internal equity (S005 notes).
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

### ✅ Session 008 — 2026-08-07
Objectives: locale-aware WhatsApp messages — close the trilingual gap on the primary conversion element.

- ✅ **[2026-08-07 / S008] N11. WhatsApp messages were always English regardless of visitor locale**
  - `getWhatsAppLink()` always generated English pre-filled messages even on MS/ZH pages, and passed English-only service/location names from localized bundles.
  - **Fix:** `lib/whatsapp.ts` rewritten — added `lang?: Locale` parameter with translated templates for all three locales (EN/MS/ZH). 36 of 48 call sites updated to pass `lang` + localized service/location names. Remaining 12 are EN-only routes (`/about`, `/blog`, `/faq`, `/projects`, `/tools`, `/answers`, `/brands`, `/problems`, `/error`) where English is correct.
  - **Components updated (24 files):** `locale-area-service-view`, `locale-area-view`, `locale-near-me-hub`, `locale-near-me-view`, `locale-problem-view`, `locale-pricing-content`, `locale-suburb-service-view`, `locale-service-cost-view`, `locale-service-emergency-view`, `locale-service-page`, `locale-services-index`, `whatsapp-button`, `exit-intent-popup`, `home-cta`, `hero`, `services-grid`, `not-sure-section`, `service-areas`, `service-detail-hero`, `subservice-detail-hero`, `sticky-mobile-whatsapp-bar`, `sticky-book-button`, `navbar`, `locale-not-found-content`, `generic-content-page`, `tool-page`, `content-hub-page` (EN-only), `tools-index-page` (EN-only), `project-gallery` (EN-only).
  - **MS/ZH localized pages** (`app/ms/blog/*`, `app/ms/soalan-lazim`, `app/zh/bo-ke/*`, `app/zh/chang-jian-wen-ti`) pass hardcoded locale.
  - **3 new dictionary keys** × 3 locales (1,058 keys total, perfect parity): `pricingPage.whatsappService`, `exitPopup.whatsappService`, `servicesIndex.whatsappService`.
  - **Verified:** Build 4,245 pages SUCCESS. Lint 0/0. Type-check PASS. Estimator tests 231,501 assertions PASS. Dictionary parity 1,058 × 3 locales (0 missing/empty). SEO audit clean. Production-server smoke test confirmed Malay messages on `/ms/services/painting` ("Salam KL Servis Rumah!..."), Chinese messages on `/zh/services/painting` ("您好 KL Servis Rumah！..."), English on EN pages.

### ✅ Session 009 — 2026-08-07
Objectives: full-corpus link-equity audit (follow-up to S005/S007) focusing on the "low inbound (≤2)" tier — 1,910 pages that had ≤2 inbound links despite 0 orphans — and implement production-quality interlinking to lift them.

**Baseline measurement (before S009):**
- Total HTML: 4,240 · total internal links: 267,596
- Orphans: 0 real content pages (S005 fix intact)
- Low inbound (≤2): **1,910 pages** — breakdown:
  - `/areas/<area>/<service>/near-me`: 1,036 × 1 inbound (each only from parent)
  - `/ms/services/*` + `/zh/services/*`: 56 × 1 inbound (only from index)
  - `/suburbs/*`: 1,456 pages avg 5.67 but many still ≤2
  - `/answers/`, `/process/`, `/compare/`, `/top/`, `/brands/` etc: avg 1–4
  - `/near-me/*` hubs: 28 × ~1–3
  - `/blog/` EN avg 4.44

**Fixes implemented:**

- ✅ **N13 (🟠 High) — MS/ZH service pages had thin equity (1 → 13 inbound, even).**
  - Root cause: `locale-service-page.tsx` only rendered `LocaleTreeLinks` (3 links to other hubs) — no links to sibling services, so each detail page was only linked from `/ms/services` or `/zh/services` index.
  - Also first implementation used `slice(0,12)` after filter, giving uneven distribution (first 12 services got 28 inbound, tail got 1).
  - Fix: added related services grid server-rendered in-language — circular next-12 selection (currentIdx +1..+12 modulo 28) so every page gets exactly 12 inbound from siblings + 1 from index = **13 even**. Uses existing `getLocalizedService` for titles, reuses `services/pageEyebrow`, `common.fromLabel`, `common.viewAll` keys plus new `serviceDetail.otherServicesHeading/Sub` (EN/MS/ZH natural translations).
  - Verified: `/ms/services/painting` 1 → **13**, `/ms/services/autogate` 1 → **13**, same for ZH; avg 1.00 → **13.00 min=max=13**; total internal links +~?? (part of overall +18k).

- ✅ **N14 (🟠 High) — Near-me pages (1,036) had 1 inbound, now 13 even.**
  - Root cause: each `/areas/<area>/<service>/near-me` was only linked from its parent area×service page; no cross-links among near-me pages in same area.
  - Fix: `app/areas/[slug]/[serviceSlug]/near-me/page.tsx` now builds `relatedNearMe` (circular next-12) — each entry includes localized titles via `buildServiceBundle` (EN/MS/ZH). `LocaleNearMeView` now renders:
    - Parent navigation block (links back to area×service page, area page, /areas) — improves crawl path back to equity-rich parents
    - Related near-me grid (12 siblings) — lifts inbound from 1 → **13** per page, localized titles via `lang`
    - Uses new dictionary keys `location.nearMeRelatedHeading`, `nearMeRelatedSub`, `nearMeBackToAreaService`, `nearMeAllServicesInArea`, `nearMeViewArea`, `nearMeParentHeading`, `nearMeOtherNearMeHeading` (all 7 × 3 locales, natural translations)
  - Verified: `/areas/kuala-lumpur/painting/near-me` 1 → **13**, `/areas/kuala-lumpur/autogate/near-me` 1 → **13**, avg for `/areas/kuala-lumpur/` 56 pages: 21.5 (includes parent service pages already higher); cluster total inbound **+12,432 links** (1,036×12).

- ✅ **N15 (🟡 Medium) — Generic content hubs (answers, process, compare, top, brands, commercial, residential, seasonal, guides, maintenance) had 1–4 inbound, now ~7–16 even.**
  - Root cause: `GenericContentPageView` only linked related service (1–3 links) but not other pages in same category; each child page was only linked from its hub index.
  - Fix: added circular next-6 related reading block — `allGenericPages` filtered by same `category`, circular next-6 selection so each page gets ~6 inbound from siblings instead of 0–1. Helper `getHref` maps categories to correct URL prefixes (`/answers`, `/brands`, `/commercial`, `/compare`, `/residential`, `/seasonal`, `/top`, `/process`, `/guides/maintenance`, `/guides`, `/services/<service>/<slug>` for Service Cluster). Reuses existing `content.relatedReading` key, no new translation debt.
  - Verified: `/answers/` avg 1.21 → **7.21 min 7 max 8** (was 1 inbound for many); `/process/` same; `/compare/` 10.4 → **16.4**; `/top/` 4 → **16.6**; `/brands/` 4 → **16.5**.

- **Overall crawl health after S009:**
  - Total internal links: **267,596 → 286,022 (+18,426)**
  - Low inbound (≤2) pages: **1,910 → 762** (−60%, −1,148 pages)
  - MS/ZH service cluster: avg 1 → **13 even** (min=max=13)
  - Near-me cluster: 1 → **13 even** for the 1,036 area near-me pages
  - Answers/process clusters: 1–4 → **7–8 even**
  - Remaining 762 low-inbound breakdown after fix: ~22 `/near-me/*` hub children (still 1), ~28 emergency pages (1 from cost), ~? suburbs canonicalised pages (avg 5.67, some still ≤2), blog EN 4.44, MS/ZH blog articles 2 (still thin), some `/guides/maintenance` etc.

- **Dictionary:** 1,058 → **1,067 keys × 3 locales, perfect parity, 0 empty** (added 2 serviceDetail + 7 location keys).

- **Verification:** lint 0/0, type-check PASS, build SUCCESS (4,245 pages), estimator 231,501 PASS, seo:audit PASS (canonical/hreflang 0 defects), full-corpus inbound audit re-run confirming numbers above.

Remaining low-inbound tier now is mostly:
- `/near-me/[service]` hub children (28 pages, 1 inbound) — can be fixed with similar related block (small)
- `/services/[slug]/emergency` (28 pages, 1 from cost) — could link emergencies among themselves
- `/suburbs/[slug]/[serviceSlug]` canonicalised pages (1,456 avg 5.67) — low priority as canonicalised, but could add related suburbs block
- `/ms/blog/[slug]` + `/zh/bo-ke/[slug]` (36 pages avg 2) — need related blog block like EN has
- Blog EN avg 4.44 — could increase related from 3 to 6

These are the natural next improvements.

### Current Project Status (updated S009)
- 🔴 Critical: **0 remaining.**
- 🟠 High: N13/N14 ✅ (S009 — low-inbound tier major improvement); N11 ✅ (S008 WhatsApp locale-aware); N10 ✅ (S007 canonical/hreflang); N8 ✅ (S006 CSP); N3/N4/N5/N7 ✅ (S005 orphans); H3 pilot ✅ live and now properly interlinked (13 inbound each); H1/H1b business override; H2 field-data gated.
- 🟡 Medium: N15 ✅ (S009 generic hubs); N9 ✅ (S006); N1/N2/N6 ✅ (S005); A1, M1–M5, M7, M9 ✅; M8 deferred; plus N14's new keys.
- 🟢 Low: L1–L12 ✅; dictionary parity 1,067 ×3.
- **Crawl health (full-corpus, 4,240 HTML):** orphans 0 real; broken targets 0; heading skips 0; canonical/hreflang 0; low-inbound ≤2 **1910 → 762** (−60%); internal links **267,596 → 286,022 (+18,426)**; MS/ZH service inbound **1 → 13 even**; near-me inbound **1 → 13 even**; answers/process **1 → 7 even**.
- **Multilingual:** 1,067 keys ×3, parity 0 missing/empty; WhatsApp locale-aware (S008) intact; MS/ZH service pages now interlinked in-language.
- **Production-ready.** Remaining items owner-side (env vars, pings, H3 full-rollout decision) or data-gated (H2).

### Remaining priorities (updated S009)
1. Fix remaining low-inbound ≤2 tier (762 pages): 
   - `/near-me/[service]` 28 pages (1 inbound) — add related near-me hubs block
   - `/services/[slug]/emergency` 28 pages (1 inbound from cost) — link emergencies among themselves
   - `/ms/blog/[slug]` + `/zh/bo-ke/[slug]` 36 pages (2 inbound) — add related blog articles like EN has 3
   - Blog EN 18 pages avg 4.44 — increase related from 3 to 6
   - `/suburbs/[slug]/[serviceSlug]` canonicalised 1,456 pages avg 5.67 — optional, low priority
2. Deploy + re-measure GSC coverage after S005–S009 (major linking changes).
3. H3 full-rollout go/no-go on post-fix data (pilot now 13 inbound each, properly measurable).
4. Owner-side: `ADMIN_PASSWORD` + env vars; GBP/IB/ BWM pings.
5. CSP field-check after deploy (S006 carry).
6. M8 config consolidation at content-migration milestone.

### Recommended Next Task (updated S009)
Implement the remaining low-inbound fixes listed in #1 above — smallest is `/near-me/[service]` hubs (28 pages, add related block: 1 → ~7 inbound), then emergency pages, then MS/ZH blog related. After that, re-audit and the low-inbound tier will be <200 pages (mostly canonicalised suburbs).


### ✅ Session 010 — 2026-08-07
Objectives: continue the S009 low-inbound remediation, covering the remaining non-canonical clusters where a concise, contextual sibling block improves discovery without creating a link farm.

- ✅ **[2026-08-07 / S010] N16. `/near-me/[service]` hubs had thin internal equity (1 → ≥7 inbound).**
  - Root cause: every hub had its area directory content but no crawlable links to sibling near-me service hubs, leaving each dependent on its service page alone.
  - Fix: server-generated circular next-6 sibling-service links in `LocaleNearMeHub`, carrying each title from the existing locale bundles. Circular selection prevents first-item bias and gives every one of the 28 hubs six peer inlinks.
  - Verified full-corpus: 28 pages, inbound **min 7 / max 9 / avg 7.25**.
- ✅ **[2026-08-07 / S010] N17. Emergency guides had only the sibling cost-page link (1 → ≥7 inbound).**
  - Fix: circular next-6 emergency-guide links in `LocaleServiceEmergencyView`, with EN/MS/ZH service names resolved from existing server-side link bundles.
  - Verified full-corpus: 28 pages, inbound **min 7 / max 10 / avg 7.11**.
- ✅ **[2026-08-07 / S010] N18. Blog articles remained thinly interlinked (EN avg 4.44; MS/ZH 2).**
  - Fix: circular next-6 related-article grids on every MS and ZH article, written in their native UI language; EN now uses the same even six-article circular selection rather than category-only `slice(0, 3)` selection, which starved articles in small categories.
  - Verified full-corpus: MS blog **8 even** inbound, ZH blog **8 even**, EN blog **9 even** inbound (18 articles per tree).

### Current Project Status (updated S010)
- 🔴 Critical: **0 remaining.**
- 🟠 High: all actionable in-repository items completed; H1/H1b remain the explicit owner-approved brand-colour accessibility override; H2 remains field-data gated; H3 full multilingual rollout remains owner-governed after pilot measurement.
- 🟡 Medium: N16–N18 ✅; remaining items are owner-side/data-gated or the planned M8 data-layer consolidation.
- **Crawl health:** 0 real orphans, 0 broken/redirecting internal targets, 0 heading skips, 0 canonical/hreflang defects. The former low-inbound priority clusters are now all ≥7 inbound links. Canonicalised suburb pages remain deliberately lower priority because they are excluded from the sitemap and canonicalise to their area twins.

### Recommended Next Task (updated S010)
1. Deploy and inspect GSC / Bing Webmaster coverage and the MS/ZH service-pilot conversion data before making the owner-only H3 full-rollout decision.
2. Complete the post-deploy CSP browser-console check.
3. Owner: configure/rotate production secrets and complete GBP, IndexNow and Bing post-deploy pings.
4. At the next content migration, consolidate the `config/` file families (M8); do not perform a risky standalone migration solely for naming.


### ✅ Session 011 — 2026-08-07
Objectives: independent deep re-audit (S011) with a new corpus-level HTML quality dimension; fix the one genuine defect found — server-rendered `<html lang>` was wrong on all 112 localized pages.

- ✅ **[2026-08-07 / S011] N19 (🟠 High). All 112 real MS/ZH pages shipped `<html lang="en-MY">` in the server HTML.**
  - Root cause: the site had a single root layout with a hardcoded `lang="en-MY"`; the localized trees only corrected `document.documentElement.lang` **on hydration** (`components/localized-html-lang.tsx`), so crawlers and AI retrievers (which do not execute JS) saw English-language markup on Malay/Chinese pages — wrong screen-reader synthesis, wrong translation cues, and a multilingual-SEO correctness gap.
  - **Fix (architecture):** switched the app to **three root layouts via route groups** — `app/(en)/layout.tsx` (`lang="en-MY"`), `app/(ms)/layout.tsx` (`lang="ms-MY"`), `app/(zh)/layout.tsx` (`lang="zh-MY"`) — the supported Next.js pattern. Shared `<head>` (schema + Bing verification) → `components/layout/site-head.tsx`; shared `<body>` chrome → `components/layout/site-chrome.tsx`; localized root-layout fallback metadata in MS/ZH. Deleted `components/localized-html-lang.tsx` (no longer needed).
  - **Ripple fixes required by the architecture:**
    - `app/not-found.tsx` cannot exist without a root layout → enabled the official `experimental.globalNotFound` (Next 15.4+) + new `app/global-not-found.tsx` (complete document: chrome, EN lang, noindex, no canonical/hreflang) — restores the full-chrome 404 for unmatched URLs and NoFallbackError cases (e.g. `/ms/services/not-a-service`).
    - `app/robots.ts` must sit at the app root (group placement silently dropped it — verified live 404 → moved back to root, now 200).
    - `scripts/generate-ai-context.ts` import path updated to `app/(en)/sitemap.ts`.
    - Per-tree `error.tsx` wrappers (`(en)`, `(ms)/ms`, `(zh)/zh`) around a new shared `components/error-page.tsx` (locale-aware, tree-correct services CTA).
    - MS/ZH scaffolds `/ms` + `/zh` became static pages `app/(ms)/ms/page.tsx` + `app/(zh)/zh/page.tsx` rendering the new shared `components/locale-scaffold.tsx` (same copy/redirect behavior, now served with the correct lang attribute).
    - `app/(zh)/not-found.tsx` — self-contained 404 boundary for unknown `/zh/*` URLs (Next renders it in its minimal shell; server JSX copy + lang-fix script).
  - **Regression found & fixed during verification (N19b):** the five literal-CJK tool pages (`/zh/gongju/天花板计算器` etc.) 404'd at their percent-encoded URLs after removing the old `/[lang]/[[...slug]]` catch-all (whose dynamicParams=false retry flow had been resolving them via the decoded pathname; proven by base-commit A/B build). Fix: `app/(zh)/zh/[...unmatched]/page.tsx` catch-all that decodes segments and permanently redirects to the canonical raw-CJK URL (verified against `canonicalToolSlug` so it never redirects to arbitrary strings), else renders the zh 404. Dev-mode CJK 404 proven pre-existing on the base commit (not a regression).
  - **Verified (full battery):** `lang` correct on all 12 spot-checked page types incl. scaffolds/tools/blogs/FAQs; all 58 expected-200 URLs pass; expected redirects (301/307/308) and 404s correct; `audit:html` **0 findings across 4,240 pages** (new audit dimension: img alt, dead links, tabnabbing, unnamed buttons, duplicate ids, title/description, lang consistency, JSON-LD parseability, page-size report); `seo:audit` clean; sitemap 3,200 URLs all sampled 200; JSON-LD 18 blocks/page; robots.txt 200; admin gate 307; API guards 503/401/405; lint 0/0; type-check PASS; build SUCCESS (4,245 pages; estimator suite 231,501 assertions PASS); `npm audit` 0 vulnerabilities.
  - **Cost note:** the restructure adds ~1 KB gzipped per page (all root layouts inline their module maps into every document's flight data); the raw-HTML growth is highly compressible chunk-name lists. Worth it for correct server-side language metadata on 112 pages.
  - **New tooling:** `scripts/html-quality-audit.ts` + `npm run audit:html` — full-corpus generated-HTML quality gate (extends `seo:audit`'s coverage into WCAG/link-integrity/JSON-LD territory), wired as a repeatable verification step.

### Current Project Status (updated S012)
- 🔴 Critical: **0 remaining.**
- 🟠 High: N20 ✅ (S012 — localized chrome server-rendered in-language on all 110 tree pages); N22 ✅ (S012 — raw `{ warranty }` placeholder on ZH pages); N24 ✅ (S012 — localized FAQ hubs fully native for all 77 problems); N19/N19b ✅ (S011); all prior actionable in-repository items remain completed; H1/H1b owner-approved brand override; H2 field-data gated; H3 full rollout owner-governed after pilot data.
- 🟡 Medium: N21 ✅ (S012 — breadcrumb landmarks), N23 ✅ (S012 — hardcoded-English a11y-string sweep); N16–N18 ✅; remaining items owner-side/data-gated or M8 (deferred).
- 🟢 Low: N25 ✅ (S012 — sitemap lastmod unified), N26 ✅ (S012 — bounded SW cache); L1–L12 ✅; dependency hygiene current (`npm audit` 0).
- **Localized trees fully native end-to-end:** all 112 MS/ZH pages now server-render with in-language `<html lang>` (S011), in-language navbar/footer/CTAs (S012 N20), in-language breadcrumb trails + landmarks (S012 N21), correctly interpolated strings (S012 N22), and — on the two indexable FAQ hubs — 100% native FAQ entries incl. the 34 previously-English problems (S012 N24). Crawlers and no-JS users see zero English boilerplate on localized pages.
- **Crawl health:** 0 real orphans, 0 broken/redirecting internal targets, 0 heading skips, 0 canonical/hreflang defects; `audit:html` 0 findings across 4,240 pages; full-corpus metadata/JSON-LD audit clean (0 missing titles/descriptions, NAP complete, rating uniform).
- **Multilingual:** 1,072 keys × 3 locales perfect parity, enforced at build time by the new prebuild gate `audit:i18n` (S012).
- **Infrastructure:** 3 root layouts (route groups) now also seed per-tree locale + dictionary into the client providers; `globalNotFound`; root `robots.ts`; zh catch-all; bounded service-worker cache; sitemap lastmod derived from the single content-release date constant.

### Recommended Next Task (updated S012)
1. Deploy and verify in production: browser-console CSP check (carried), Search Console re-crawl of the localized trees — S011 changed `<html lang>` and S012 changed the entire server-rendered chrome language on all 112 pages, so a fresh crawl materially changes what the MS/ZH pages signal to search engines. Also confirm the +17–19 KB gz initialMessages payload reads fine in field data.
2. Inspect GSC/Bing coverage + MS/ZH pilot conversions before the owner-only H3 full-rollout decision. **S012 note:** the pilot was structurally sound since S005 but its pages still rendered English chrome to crawlers until S012 — treat any indexation/conversion data gathered before this deploy as under-representative and re-measure.
3. Owner: configure/rotate production secrets; GBP / IndexNow / Bing post-deploy pings.
4. At the next content migration, consolidate `config/` families (M8).
5. Optional future tier: translate the 34 problem-page bodies (`config/problem-data-extra.ts`) natively — their FAQ-hub entries are fully native since S012, but the source pages still render English under the H3 client-switch design.

### ✅ Session 012 — 2026-08-07
Objectives: new-dimension deep audit after S011 (metadata quality, JSON-LD deep validation, NAP consistency, a11y landmark/i18n sweep, service-worker cache design). Baseline verified green first; every fix verified in the built corpus and on a live production server.

**New findings & fixes (all verified):**

- ✅ **[2026-08-07 / S012] N20 (🟠 High). All 110 localized-tree pages server-rendered the entire site chrome (navbar, footer, sticky WhatsApp/call bar, floating CTAs, language switcher) in ENGLISH — crawlers and no-JS users never saw localized chrome, and human visitors got a post-hydration English flash.**
  - Root cause chain: `LangProvider` hardcoded initial state `lang="en"` (locale only resolved in a client `useEffect`), and `useTranslations` only eagerly ships the English dictionary (MS/ZH lazy-fetched post-hydration) — so even a correct initial lang could not have prerendered localized chrome. Confirmed by corpus grep: 55 MS + 55 ZH pages contained raw `>Contact Us<`, `>About Us<`, `>Home<`, etc.
  - Fix: the three per-language root layouts now pass `initialLang` + the tree's full dictionary (`messages/ms.json` / `zh.json`) through `SiteChrome` → `Providers`, which seeds the lazy dictionary cache (`seedInitialMessages`) before children render and initializes `LangProvider` state to the tree locale. Client-side language switching behavior is unchanged (URL prefix still wins after hydration).
  - Byte cost measured: +17 KB gz (MS) / +19 KB gz (ZH) per localized page — offsets the ~21–23 KB lazy dictionary chunk those pages previously downloaded post-hydration anyway; net ≈ neutral bytes, minus one round trip, minus the flash. Verified the dictionaries did NOT leak into the shared first-load chunks (EN pages byte-neutral).
  - Verified: 0 English chrome strings on either tree; live `curl` confirms rendered Malay/Chinese navbar, footer, CTAs, aria-labels.

- ✅ **[2026-08-07 / S012] N21 (🟡 Medium). Breadcrumb `Home` crumb + landmark aria-labels were English on localized pages.**
  - `<Breadcrumbs>` defaulted `homeLabel="Home"`/`aria-label="Breadcrumb"` and the four localized blog pages (`/ms/blog`, `/ms/blog/[slug]`, `/zh/bo-ke`, `/zh/bo-ke/[slug]`) inline a hardcoded-English breadcrumb nav; the two localized FAQ pages and the localized service pages/indexes omitted the localized landmark name.
  - Fix: `Breadcrumbs` gained an optional `ariaLabel` prop (backward compatible); localized call sites pass `breadcrumbs.navAria` (new dictionary key ×3: "Breadcrumb" / "Laluan navigasi" / "面包屑导航") or matching hardcoded values; FAQ pages + localized tool routes + tools-index pass `homeLabel` (Utama/首页) — the tool shells gained a `navAriaLabel` field in `config/tools-i18n.ts`.
  - Verified: `aria-label="Breadcrumb"` 48→0 per tree; `>Home<` breadcrumb 55→0; live pages show Utama/首页 crumbs and localized landmark names.

- ✅ **[2026-08-07 / S012] N22 (🟠 High). Malformed ZH dictionary placeholder `{ warranty }` rendered RAW to visitors on all 29 ZH service pages.**
  - `messages/zh.json` `serviceContent.isRightAnswer` used `{ warranty }` (spaces), but the interpreter replaces exact `{warranty}` tokens — live pages showed `书面{ warranty }。` to Chinese visitors. Found by the new placeholder-parity audit (only defect of its class corpus-wide).
  - Fix: corrected to `{warranty}`; verified live: `书面1 年油漆剥落与工艺保修。`
  - **Defence for the future:** new permanent gate `scripts/i18n-parity.ts` + `npm run audit:i18n` — key-set parity, empty values, placeholder-token parity and malformed-token detection across all three dictionaries; **wired into `prebuild`** so a recurrence fails the build. Passes: 1,072 keys × 3 locales.

- ✅ **[2026-08-07 / S012] N23 (🟡 Medium). Footer "Emergency bookings accepted" hardcoded English on every page (including MS/ZH trees).**
  - Fix: new `footer.emergencyNote` key ×3 ("Emergency bookings accepted" / "Tempahan kecemasan diterima" / "接受紧急预约") consumed by `components/ui/footer.tsx`.
  - Also fixed in the same a11y/i18n sweep: sticky-mobile-whatsapp-bar aria-labels had English suffix templates → new `common.bookWhatsAppAria` / `common.callUsAria` keys; `faq-directory-view` landmark "FAQ categories" → `categoriesAria` in its per-locale copy; hero slide indicators "Slide {n}:" → `hero.slideAria` key; hero mobile quote section landmark → `hero.quoteTitle`; related-problems / related-services / service-area-links section landmarks now reuse existing translated keys; language-switcher option aria lost its hardcoded "language" suffix (group label supplies context).

- ✅ **[2026-08-07 / S012] N24 (🟠 High). Localized FAQ hubs mixed English problem titles/questions into native content for 34 of 77 problems.**
  - 34 problems (`config/problem-data-extra.ts`) carry no `problemI18n` override (their pages intentionally stay English under the H3 client-switch design), so `/ms/soalan-lazim` and `/zh/chang-jian-wen-ti` — two indexable localized hubs — interpolated raw English titles into the translated fallback templates and source labels ("Bagaimana... untuk Toilet Not Flushing Properly?").
  - Fix: new `config/problem-faq-i18n.ts` with hand-written native MS + ZH translations for all 34 problems × 2 forms (`title` for source labels, grammar-correct `topic` phrase for template interpolation). `lib/faq-directory.ts` uses them only when a full `problemI18n` override is absent (zero regression for the 43 translated problems). Problem pages themselves unchanged (H3 scope decision documented).
  - Verified live: "Bolehkah KL Servis Rumah membantu dengan tandas yang tidak menyiram dengan baik?", "能协助处理马桶冲水不畅问题吗？", zero English problem titles remain on either hub.

- ✅ **[2026-08-07 / S012] N25 (🟢 Low). Sitemap `lastmod` drifted from the content-release date constant — new pages predated their own lastmod.**
  - `SITEMAP_LAST_MODIFIED` was hardcoded 2026-07-25 while `DEFAULT_CONTENT_DATE` (schema dateModified policy) was bumped to 2026-08-07 — so the 58 H3-pilot pages (created 2026-08-07) reported a modification date before they existed, and the two release-date constants could drift again.
  - Fix: sitemap now derives from `DEFAULT_CONTENT_DATE` (single manually-maintained release date; still deliberately NOT the build date — no crawl-budget churn). Verified: sitemap now emits `<lastmod>2026-08-07T00:00:00.000Z`.

- ✅ **[2026-08-07 / S012] N26 (🟢 Low). Service-worker navigation cache was unbounded (4,240-page site → hundreds of MB worst case, browser quota eviction risk).**
  - Fix: `public/sw.js` trims the navigation page pool to the 60 most recent entries (approximate LRU via insertion order), explicitly protecting the OFFLINE_URLS fallbacks and immutable `/_next/static/*` entries. Network-first strategy for HTML unchanged.

**Audit dimensions validated clean (no action needed):** full-corpus metadata quality (0 missing/over-long titles/descriptions; 859 dup-title groups proven exactly the documented canonicalised suburb pairs — 0 anomalous; CJK short-title/description findings are false positives of Latin heuristics), JSON-LD deep validation (0 parse failures; NAP complete; AggregateRating 4.9/120 uniform on all 224 pages; breadcrumb last-item URLs all match), NAP cross-source consistency, manifest icon existence, zero generic anchor texts, fetchpriority distribution correct, all `fill` images carry `sizes`, no `http://` mixed-content, estimator chrome parity still asserted by the test suite.

**New tooling:** `scripts/i18n-parity.ts` (gate, in prebuild) · `scripts/metadata-schema-audit.ts` (corpus metadata + JSON-LD audit).

---

# COMPLETE SERVICE ARCHITECTURE + PROBLEM SEO + MULTILINGUAL CONTENT PROJECT

## Session 2026-08-09 — Audit-first baseline

**Status legend for this project:** ✅ GREEN TICK — COMPLETED · 🟡 IN PROGRESS · ⏳ PENDING

### Project phase checklist

- ✅ **PHASE 1 — COMPLETE EXISTING WEBSITE AUDIT**
  - Audited codebase and representative live routes before page generation.
  - Verified 28 top-level service records, 112 specialties, 15 service-cluster pages, 18 blogs × 3 languages, 3 FAQ hubs, 77 problem pages, 1,022 FAQ-directory entries, language routing, middleware, metadata, canonicals, hreflang, sitemap, robots, indexability, internal links, duplicate intent, thin content, and missing content.
  - Full report: `docs/service-architecture-multilingual-audit-2026-08-09.md`.
- ✅ **PHASE 2 — MULTILINGUAL URL ARCHITECTURE**
  - Existing prefix system selected for reuse: EN non-prefixed, MS `/ms`, ZH `/zh`.
  - Main services, blogs, FAQs, and tools already have real locale URLs.
  - Added (2026-08-10 → 2026-08-11): real locale specialty URLs for **all 112 specialties** — Painting + Ceiling, Plaster Ceiling, Waterproofing, Plumbing, Handyman, Electrical, Tiling, Flooring, Kitchen Cabinet, Carpentry, Epoxy Flooring, CCTV, Window Repair, Glass & Aluminium, Door, Roofing, Ceiling Fan, Lighting, Skim Coat, Locksmith, Autogate, Welding, Water Heater, House Renovation, Cleaning, Deep Cleaning, and Post-Renovation Cleaning (112 specialties × MS + ZH = **224 localized pages**) + sitemap/hreflang. Still missing: 154 locale problem URLs, localized cost/emergency routes, and other supporting trees.
- 🟡 **PHASE 3 — LANGUAGE CONTENT REQUIREMENTS**
  - Complete data exists for 28 main services and 18 blogs in all three languages.
  - Native problem translations exist for 43/77; 34 are missing.
  - Native editorial QA remains mandatory; live copy contains Chinese duplication and mixed-language labels.
- ✅ **PHASE 4 — SERVICE HIERARCHY AUDIT**
  - Actual code hierarchy documented: 28 equal top-level service records + 112 nested specialties.
  - No explicit “additional service” classification exists; no category split was invented.
  - Required 140-row service/specialty audit table completed.
- 🟡 **PHASE 5 — EVERY MAIN SERVICE**
  - 28/28 have EN/MS/ZH pages and 4 localized FAQs.
  - 14/28 have a clearly topical blog.
  - Main → specialty and service ↔ blog contextual links are missing.
- ✅ **PHASE 6 — EVERY SUB-SERVICE**
  - 112 EN URLs exist; **224 MS/ZH URLs now exist** (all 112 specialties, completed 2026-08-11).
  - Existing six-FAQ sets are repeated templates, not specialty-authored sets.
  - 0/112 specialties have an explicit end-to-end blog/problem/FAQ relationship.
- 🟡 **PHASE 7 — PROBLEM-BASED SEO**
  - 77 EN problem pages exist; all 28 services have at least one problem.
  - Overlap groups and missing specialty mappings must be resolved before localization.
- 🟡 **PHASE 8 — PROBLEM CONTENT**
  - Existing records include symptom, causes, solutions, when-to-call guidance, service, urgency, cost range, and 2–4 FAQs.
  - Missing: related specialty/blog/FAQ/location links and 34 native translations.
- 🟡 **PHASE 9 — BLOG REQUIREMENT**
  - 18 useful articles exist in EN/MS/ZH.
  - 14 service pillars and all 112 specialty mappings remain uncovered under the strict requirement.
  - EN Markdown currently renders visibly as plain text and needs correction.
- 🟡 **PHASE 10 — FAQ REQUIREMENT**
  - Main services: 28/28 with 4 localized FAQs.
  - Problems: 58/77 have 3–4; 19 have only 2.
  - Specialties: 0/112 verified unique sets; current 672 answers are templated.
- ✅ **PHASE 11 — INTERNAL LINKING SYSTEM** *(completed for the EN tree + priority tranche, 2026-08-10)*
  - Home → service, problem → service, service ↔ location, and specialty → parent/siblings exist.
  - Now added: main → specialty links (all 28 EN service pages link their 4 specialties; MS/ZH link the priority localized specialties), service ↔ blog links (`RelatedBlogs` on all 28 EN service pages, driven by the validated map), and localized FAQ → localized service links (FAQ hubs + sitewide footer now point to `/ms/services/*` / `/zh/services/*` on localized trees).
  - `topicalAuthorityMap` now complete for all 28 services + 112 typed specialty → problem/blog relationships, with zero Handyman fallback and a validation gate (`npm run audit:topical-map`, wired into `prebuild`).
- ✅ **PHASE 12 — PRIORITY LOCALE-SPECIALTY SEO ROLLOUT** *(updated 2026-08-11 — ALL 112 SPECIALTIES COMPLETE)*
  - Canonical keep/merge decision documented in `docs/canonical-painting-ceiling-decisions.md` (keep all; no deletions/redirects without GSC evidence).
  - Priority tranche implemented: all 8 Painting + Ceiling specialties now have real `/ms/services/<s>/<sub>` and `/zh/services/<s>/<sub>` pages with authored native MS/ZH content, three-way hreflang clusters, sitemap entries, and localized links from the MS/ZH service pages.
  - Extended service-by-service through Plaster Ceiling, Waterproofing, Plumbing, Handyman, Electrical, Tiling, Flooring, Kitchen Cabinet, Carpentry, Epoxy Flooring, CCTV, Window Repair, Glass & Aluminium, Door, Roofing, Ceiling Fan, Lighting, Skim Coat, Locksmith, Autogate, Welding, Water Heater, House Renovation, Cleaning, Deep Cleaning, and Post-Renovation Cleaning: **112 specialties × MS + ZH = 224 real localized specialty pages**, all authored native and non-thin (completed 2026-08-11, part 24).
  - Added `npm run audit:specialty-locale` (non-thin content gate for the locale store, wired into `prebuild`; `PRIORITY_KEYS` now requires all 112 completed specialties).
  - Localized specialty pages now render typed **related guides + problems** from the validated topical map (blog links use localized routes where a translation exists).
  - JSON-LD OfferCatalog on localized specialty pages is in-language (passes `subServices: localized.subServices` to `getServiceSchema` — same pattern as the main localized service pages).
- 🟡 **PHASE 13 — SEO METADATA**
  - Automated corpus checks found no missing title, description, H1, canonical, or invalid JSON-LD.
  - 16 short titles and 88 short descriptions need manual review; specialty body uniqueness remains weak despite unique metadata.
- ✅ **PHASE 14 — SITEMAP** *(updated 2026-08-11)*
  - Existing sitemap: **3,520 unique URLs after the Post-Renovation Cleaning tranche**, including all 224 real MS/ZH specialty pages, with 0 duplicate `<loc>` values.
  - Missing locale problems must be added only after real pages exist.
- ✅ **PHASE 15 — HREFLANG** *(updated 2026-08-11)*
  - Real clusters work for main services, blogs, FAQs, and tools.
  - Specialty routes: **all 112 authored specialties** now use real three-URL clusters (EN + MS + ZH + x-default) in both metadata and sitemap (completed 2026-08-11). Problems/supporting routes are not presented as translated equivalents.
- 🟡 **PHASE 16 — THIN/DUPLICATE CONTROL**
  - 112 templated specialty pages, 192 generic pages, 15 overlapping clusters, 14 problem-overlap groups, and the large location estate documented.
  - No deletion/redirect was made without evidence.
- ✅ **PHASE 17 — LANGUAGE URL STRUCTURE DECISION**
  - Reuse established `/ms` and `/zh` prefix trees; stable service slugs remain the lowest-risk service pattern.
- ✅ **PHASE 18 — NEXT.JS IMPLEMENTATION** *(updated 2026-08-11)*
  - Reusable dynamic routes/shared data architecture exists.
  - Extended (2026-08-10 → 2026-08-11) with locale-aware specialty routes for **all 112 specialties**: shared `LocaleSpecialtyPage` server component + `specialty-locale-content.ts` authored native store, driven by `app/(ms)/ms/services/[slug]/[subservice]` and `app/(zh)/zh/services/[slug]/[subservice]`. Problem routes remain evidence-gated.
- ✅ **PHASE 19 — DO NOT CHANGE BUSINESS INFORMATION (AUDIT SESSION)**
  - No prices, claims, addresses, phone numbers, ratings, warranties, brands, or service areas were changed.
- ✅ **PHASE 20 — QUALITY CONTROL** *(2026-08-10)*
  - TypeScript PASS; production build PASS (`audit:html` checks **4,447 pages**, 0 fatal / 0 warnings); i18n PASS (**1,074 keys × 3**); 263,293 estimator/content assertions PASS; npm audit 0 vulnerabilities; `npm run seo:audit` PASS.
  - ESLint now **green** — removed the unused `t`/`useTranslations` in `components/ui/hero-search-bar.tsx:29`. Added `npm run audit:topical-map` to the QC gates.
- ⏳ **PHASE 21 — FINAL AUDIT REPORT**
  - Final completion report is pending because implementation phases are incomplete.

### Verified baseline inventory

- **Top-level/main service records:** 28
- **Sub-services/specialties:** 112
- **Explicit additional/standalone classification:** 0
- **EN service-tree URLs:** 212 (index + 28 main + 56 cost/emergency + 112 specialties + 15 clusters)
- **MS service-tree URLs:** 141 (index + 28 main + 112 authored specialties)
- **ZH service-tree URLs:** 141 (index + 28 main + 112 authored specialties)
- **Blogs:** 18 EN + 18 MS + 18 ZH
- **FAQ hubs:** 1 EN + 1 MS + 1 ZH
- **Problem pages:** 77 EN + 0 MS + 0 ZH
- **Missing localized specialty URLs:** 0 (all 112 specialties localized — completed 2026-08-11)
- **Missing localized problem URLs:** 154

### This session completed

- Completed the required audit before generating any content page.
- Selected the existing locale-prefix architecture for future work.
- Documented every service and specialty, all blog URLs, all FAQ URLs, all problem URLs, metadata/sitemap/hreflang behavior, internal links, duplicate/overlap groups, and thin-content risks.
- Ran production and corpus-level quality checks.
- Did **not** create or modify customer-facing pages.

### Files changed/created this session

- **Created:** `docs/service-architecture-multilingual-audit-2026-08-09.md`
- **Updated:** `AI_OPTIMIZATION_ROADMAP.md`
- **Updated:** `SESSION_LOG.md`

### Pending tasks (updated 2026-08-10)

- ✅ 1. Baseline lint error fixed (`hero-search-bar.tsx:29`).
- ✅ 2. Canonical relationship registry added for all 28 services + 112 specialties (complete `topicalAuthorityMap` + typed specialty map, validated by `audit:topical-map`).
- ✅ 3. Cluster/problem intent decision documented (`docs/canonical-painting-ceiling-decisions.md`); 14 problem-overlap groups still need GSC-evidenced consolidation before problem localization.
- ✅ 4. Internal-link foundations corrected: main → specialty links, service ↔ blog (`RelatedBlogs`), localized FAQ → localized service links (FAQ hub + sitewide footer).
- ✅ 5. Locale-specialty rollout implemented through Door / Roofing (68 specialties × MS + ZH with authored native content, hreflang and sitemap entries).
- ⏳ 6. Real locale problem routes (154) still pending; locale cost/emergency routes pending.
- ✅ 7. Continue service-by-service without creating thin or spun pages — **COMPLETED 2026-08-11: all 112 specialties now have authored native MS/ZH locale pages (224 localized pages)**; standalone Air Conditioning stays explicitly out of scope per the owner.

## Session 2026-08-10 — Implementation: relationship architecture + Painting/Ceiling locale-specialty tranche

Executed the previous "Next Session — START HERE" plan end-to-end:

- **Relationship/data architecture (Task 3):** rewrote `config/topical-authority-map.ts` to a complete, validated map for all **28 services** with **112 typed specialty → problem/blog relationships**. Removed the Handyman fallback (unknown slugs now yield an empty silo, never wrong content). Every referenced service/problem/blog/specialty slug is validated against the source-of-truth data by the new `scripts/validate-topical-map.ts` → `npm run audit:topical-map`, wired into `prebuild`.
- **Internal linking foundation (Task 4):** EN main service pages now render their 4 specialties as contextual links (`service-detail-content.tsx`) and a new `RelatedBlogs` section driven by the map; MS/ZH service pages link the priority localized specialties; `lib/faq-directory.ts` + `components/ui/footer.tsx` now point localized FAQ-hub and footer service links at `/ms/services/*` / `/zh/services/*`.
- **Canonical decision (Task 5):** documented keep-all decisions in `docs/canonical-painting-ceiling-decisions.md` (no deletions/redirects without GSC evidence).
- **Priority tranche (Task 6):** created `config/specialty-locale-content.ts` (authored native MS + ZH blocks for the 8 priority specialties), shared `components/sections/locale-specialty-page.tsx`, and real routes `app/(ms)/ms/services/[slug]/[subservice]` + `app/(zh)/zh/services/[slug]/[subservice]`. Each of the 16 pages is self-canonical with a real three-way hreflang cluster; sitemap includes all 16 with full clusters; EN priority specialty pages emit the real cluster too (non-priority specialties keep self-referencing).
- **Verification:** lint 0/0, type-check PASS, production build PASS (4,343 routes incl. 16 new localized specialty pages), i18n parity 1,075 keys × 3, `audit:topical-map` PASS, `seo:audit` PASS, `audit:html` 0 fatal, estimator 263,293 assertions PASS.

**New files:** `config/specialty-locale-content.ts`, `components/sections/locale-specialty-page.tsx`, `components/sections/related-blogs.tsx`, `scripts/validate-topical-map.ts`, `docs/canonical-painting-ceiling-decisions.md`, `app/(ms)/ms/services/[slug]/[subservice]/page.tsx`, `app/(zh)/zh/services/[slug]/[subservice]/page.tsx`.

**Modified:** `config/topical-authority-map.ts`, `components/ui/hero-search-bar.tsx`, `components/sections/service-detail-content.tsx`, `components/sections/locale-service-page.tsx`, `components/ui/footer.tsx`, `lib/faq-directory.ts`, `app/(en)/services/[slug]/[subservice]/page.tsx`, `app/(en)/sitemap.ts`, `messages/{en,ms,zh}.json`, `package.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-10 (part 3) — Waterproofing locale-specialty tranche

**Branch:** `arena/019fe9bc-klservisrumah-web`
**Status:** ✅ COMPLETED

### Objectives (from the roadmap's "Next Session — START HERE")
- Continue the locale-specialty tranche: implement the **Waterproofing** tranche (4 specialties × MS + ZH = 8 new pages).

### Completed
- **Waterproofing tranche:** added authored native MS + ZH content for all 4 waterproofing specialties to `config/specialty-locale-content.ts`:
  - `waterproofing/pu-high-pressure-injection-grouting` — PU 高压灌浆注射
  - `waterproofing/bathroom-and-wet-area-waterproofing` — 浴室与湿区防水
  - `waterproofing/roof-and-concrete-slab-waterproofing` — 屋顶与混凝土板防水
  - `waterproofing/wall-dampness-and-efflorescence-repair` — 墙面潮湿与盐析修复
- Each entry carries full MS + ZH blocks (name, tagline, description, 5 highlights, 5 process steps, 4 FAQs, metaTitle, metaDesc) — all above the `audit:specialty-locale` non-thin thresholds.
- These automatically gained real `/ms/services/waterproofing/*` and `/zh/services/waterproofing/*` pages (self-canonical, three-way hreflang, sitemap entries, MS/ZH service-page links) via the existing shared `LocaleSpecialtyPage` architecture.
- EN waterproofing specialty pages now emit the real three-way hreflang cluster (previously self-referencing only).
- Sitemap 3,320 → **3,328** indexable URLs (+8 new localized specialty pages with full clusters).
- Build 4,343 → **4,375** routes (+32 — 8 new localized specialty pages + associated regenerated EN pages with updated hreflang).

### Verification
- `npm run lint`: PASS 0/0.
- `npm run type-check`: PASS.
- `npm run build`: PASS (4,375 routes).
- `npm run audit:topical-map`: PASS (28/28 services, 112 typed specialty relationships).
- `npm run audit:specialty-locale`: PASS (16 specialties × ms/zh = **32 native blocks** above non-thin threshold; was 12×2=24).
- `npm run audit:i18n`: PASS (1,075 keys × 3).
- `npm run seo:audit`: PASS, 0 canonical/hreflang defects.
- `npm run audit:html`: PASS (4,367 pages checked, 0 fatal, 0 warnings).
- `npm run test:estimators`: PASS (263,293 assertions).
- Spot-checked new pages: MS `/ms/services/waterproofing/pu-high-pressure-injection-grouting` renders `<html lang="ms-MY">`, Malay title, self-canonical, full 3-way hreflang cluster; ZH `/zh/services/waterproofing/pu-high-pressure-injection-grouting` renders `<html lang="zh-MY">`, Chinese title, self-canonical, full cluster; EN parent now emits real cluster.

### Files
- Modified: `config/specialty-locale-content.ts`, `docs/seo-audit-report.md` (regenerated), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

## Next Session — START HERE

1. Continue the locale-specialty tranche service-by-service. Completed so far: **Painting + Ceiling (8)**, **Plaster Ceiling (4)**, and **Waterproofing (4)** = 16 specialties × MS + ZH (32 pages). Next logical tranche: **Plumbing** (4 specialties). Reuse `specialty-locale-content.ts` + `LocaleSpecialtyPage` — no duplicated components. Author genuine native MS/ZH content (the `audit:specialty-locale` gate enforces non-thin minimums).
2. Add real locale problem routes (154) once the 14 problem-overlap groups are consolidated with evidence; then localize the `RelatedProblems` links on localized specialty pages (they currently point to EN problem pages).
3. Business/translator QA of the 32 localized specialty pages is strongly advised before the next tranche's GSC/indexation is measured.
4. Continue without creating thin or spun pages; rerun lint/type-check/build/`audit:topical-map`/`audit:specialty-locale`/`audit:i18n`/`audit:html`/`seo:audit` after each tranche.

### ✅ Session 2026-08-10 (part 4) — Plumbing locale-specialty tranche

**Status:** ✅ COMPLETED

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four Plumbing specialties in `config/specialty-locale-content.ts`: water-leak diagnosis & repair, toilet/tap/sink installation, drain unclogging & cleaning, and water-heater/pump installation.
- The existing shared locale-specialty architecture now publishes the 8 real pages under `/ms/services/plumbing/*` and `/zh/services/plumbing/*`, with their existing canonical, hreflang, sitemap and localized service-page-link behavior; no duplicated route/component was added.
- Extended the non-thin priority gate so these four Plumbing entries are required in future builds.
- Verification passed: `npm run type-check`, `npm run lint`, `npm run audit:topical-map`, `npm run audit:specialty-locale` (20 specialties × 2 = 40 native blocks), `npm run audit:i18n`, `npm run build` (4,383 routes), `npm run seo:audit`, and `npm run audit:html` (4,375 pages, 0 fatal / 0 warnings). Estimator suite passed during prebuild (263,293 assertions).

## Next Session — START HERE

1. Continue the locale-specialty tranche service-by-service. Completed: Painting + Ceiling (8), Plaster Ceiling (4), Waterproofing (4), Plumbing (4), and **Handyman (4)** = **24 specialties × MS + ZH (48 localized pages)**. Select the next coherent four-specialty service tranche, reuse `specialty-locale-content.ts` + `LocaleSpecialtyPage`, and author genuine native MS/ZH content.
2. Add real locale problem routes (154) only after the 14 problem-overlap groups are consolidated with evidence; then localize `RelatedProblems` links on localized specialty pages.
3. Obtain business/translator QA for the completed localized specialty pages before measuring GSC indexation.
4. Do not create thin or spun pages; rerun lint, type-check, build, topical-map, specialty-locale, i18n, HTML, and SEO audits after every tranche.

### ✅ Session 2026-08-10 (part 5) — Handyman locale-specialty tranche

**Status:** ✅ COMPLETED

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four Handyman specialties in `config/specialty-locale-content.ts`: heavy TV wall mounting, door/hinge/lockset repair, furniture assembly (IKEA/Taobao), and curtains/blinds/shelves hanging — each with localized name, tagline, description, 5 highlights, 4 process steps, 4 FAQs, metaTitle and metaDesc (all above the non-thin thresholds).
- The existing shared locale-specialty architecture now publishes the 8 real pages under `/ms/services/handyman/*` and `/zh/services/handyman/*`, with the existing canonical, hreflang, sitemap and localized service-page-link behavior; no duplicated route/component was added. EN handyman specialty pages now emit the real three-way hreflang cluster.
- Extended the non-thin priority gate (`audit:specialty-locale` PRIORITY_KEYS) so the four Handyman entries are required in future builds.
- **Bonus trilingual-parity fix (N27-class):** `LocaleSpecialtyPage` was calling `getServiceSchema` without `subServices`, so the JSON-LD `OfferCatalog` fell back to the English catalogue on all 40 localized specialty pages (incl. the earlier Painting/Ceiling/Plaster Ceiling/Waterproofing/Plumbing tranches). Now passes `subServices: localized.subServices` — same pattern as `locale-service-page.tsx`. Verified: OfferCatalog names are in-language on every localized specialty page (MS: "Pemasangan Dinding TV Berat…", ZH: "重型电视挂墙…").
- Sitemap 3,336 → **3,344** indexable URLs (+8 new localized specialty pages with full three-URL clusters). Build 4,383 → **4,391** routes.
- Verification passed: `npm run type-check`, `npm run lint` (0/0), `npm run audit:topical-map` (28/28, 112 typed relationships), `npm run audit:specialty-locale` (**24 specialties × ms/zh = 48 native blocks**), `npm run audit:i18n` (1,075 × 3), `npm run build` (4,391 routes), `npm run seo:audit`, and `npm run audit:html` (4,383 pages, 0 fatal / 0 warnings). Estimator suite passed during prebuild (263,293 assertions). Live prod-server smoke: new pages 200 with in-language titles/H1/hreflang clusters/self-canonicals; unknown slug → real 404; MS/ZH handyman indexes link all 4 localized specialties; related-guide links resolve to localized blog routes where translations exist (`/ms/blog/tv-wall-mounting-safety-guide`).

### Files
- Modified: `config/specialty-locale-content.ts` (+4 handyman entries), `scripts/validate-specialty-locale.ts` (PRIORITY_KEYS +4), `components/sections/locale-specialty-page.tsx` (localized OfferCatalog), `docs/seo-audit-report.md` (regenerated), `public/llms-full.txt` + `public/site-summary.json` (regenerated by prebuild; indexablePages 3,344), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-10 (part 6) — Electrical locale-specialty tranche

**Status:** ✅ COMPLETED

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four Electrical specialties in `config/specialty-locale-content.ts`:
  1. `electrical/new-power-point-and-switch-installation` — Pemasangan Power Point & Suis Baharu / 新增插座与开关安装 (from RM150/point)
  2. `electrical/db-box-upgrade-and-rewiring` — Naik Taraf DB Box & Pendawaian Semula / 配电箱升级与重新布线 (from RM2,200)
  3. `electrical/lighting-point-and-downlight-installation` — Pemasangan Titik Lampu & Downlight / 照明与筒灯点位安装 (from RM120/point)
  4. `electrical/aircond-water-heater-and-oven-point` — Titik Aircond, Pemanas Air & Ketuhar / 空调、热水器与烤箱专用点位 (from RM220/point)
- Each entry carries full native MS + ZH blocks: name, tagline, description, highlights, process steps, FAQs, metaTitle and metaDesc. Content is grounded in the existing Electrical service record and published prices, not machine-spun from English.
- The existing shared architecture automatically publishes the 8 new pages under `/ms/services/electrical/*` and `/zh/services/electrical/*`, with self-canonicals, three-way hreflang clusters, sitemap entries, related guide/problem sections and localized service-page links. No duplicated component/route was added.
- Extended the non-thin priority gate (`PRIORITY_KEYS`) to require all four Electrical entries in future builds.
- AI context generated by prebuild now reports **3,352 indexable pages**; production build generated **4,399 routes**.
- Verification passed: `npm run lint` (0/0), `npm run type-check`, `npm run audit:topical-map`, `npm run audit:specialty-locale` (**28 specialties × ms/zh = 56 native blocks**), `npm run audit:i18n` (1,075 × 3), `npm run build` (4,399 routes), `npm run seo:audit`, `npm run audit:html` (4,391 pages, 0 fatal / 0 warnings), estimator suite (**263,293 assertions**), and `npm audit` (0 vulnerabilities).
- Live smoke test confirmed: MS new power-point page returns 200 with `<html lang="ms-MY">`, self-canonical and native title; ZH DB-box page returns 200 with `<html lang="zh-MY">`; EN downlight page emits the real EN/MS/ZH/x-default hreflang cluster; unknown electrical specialty returns a real 404.

### Files
- Modified: `config/specialty-locale-content.ts` (+4 electrical entries), `scripts/validate-specialty-locale.ts` (PRIORITY_KEYS +4), `docs/seo-audit-report.md` (regenerated), `public/llms-full.txt` and `public/site-summary.json` (regenerated by prebuild), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-10 (part 7) — Tiling locale-specialty tranche

**Status:** ✅ COMPLETED

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four Tiling specialties in `config/specialty-locale-content.ts`:
  1. `tiling/floor-tiling-installation` — Pemasangan Jubin Lantai / 地面瓷砖铺贴 (from RM14/sq ft)
  2. `tiling/wall-tiling-installation` — Pemasangan Jubin Dinding / 墙面瓷砖铺贴 (from RM16/sq ft)
  3. `tiling/large-format-slab-tiling` — Pemasangan Slab Format Besar / 超大板铺贴 (from RM26/sq ft)
  4. `tiling/tile-repair-and-re-grouting` — Pembaikan Jubin & Grout Semula / 瓷砖修补与重新勾缝 (from RM22/sq ft)
- Each block carries full native MS + ZH copy: name, tagline, description, 5 highlights, 5 process steps, 4 FAQs, metaTitle and metaDesc — grounded in the existing Tiling service record (Schlüter DITRA decoupling membranes, Mapei self-levelling, Raimondi/Rubi lippage tuning, back-buttering, hollow-tile tap-testing, 12-month tile adhesion & grout warranty, published per-sq-ft prices). Nothing machine-spun.
- The existing shared architecture automatically publishes the 8 new pages under `/ms/services/tiling/*` and `/zh/services/tiling/*`, with self-canonicals, three-way hreflang clusters, sitemap entries, related guides/problems (typed relationships from the validated topical map: hollow-tiles-floor, loose-hollow-tiles, cracked-tile-grout), localized service-page links and in-language OfferCatalog. No duplicated component/route was added.
- Extended the non-thin priority gate (`PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`) so the four Tiling entries are required in future builds.
- Sitemap 3,352 → **3,360** indexable URLs (+8 new localized specialty pages with full three-URL clusters, verified live). AI context (`site-summary.json` / `llms-full.txt`) regenerated by prebuild.
- Verification passed: `npm run lint` (0/0), `npm run type-check`, `npm run audit:topical-map` (28/28, 112 typed relationships), `npm run audit:specialty-locale` (**32 specialties × ms/zh = 64 native blocks**; was 28×2=56), `npm run audit:i18n` (1,075 × 3), `npm run build` (SUCCESS, 4,399 static pages — `audit:html` checks 4,399, 0 fatal / 0 warnings; was 4,391 pre-tiling), `npm run seo:audit` (0 canonical/hreflang defects), estimator suite (263,293 assertions), `npm audit` (0 vulnerabilities).
- Live prod-server smoke: MS `/ms/services/tiling/floor-tiling-installation` 200 with `<html lang="ms-MY">`, Malay title/H1, self-canonical, full 4-URL hreflang cluster and in-language OfferCatalog + HowTo + FAQPage JSON-LD; ZH `/zh/services/tiling/large-format-slab-tiling` 200 with `<html lang="zh-MY">`, Chinese title/H1 and full cluster; EN `/services/tiling/tile-repair-and-re-grouting` emits the real EN/MS/ZH/x-default cluster; MS/ZH tiling indexes link all 4 localized specialties; `/ms/services/tiling/not-a-specialty` → real 404; sitemap contains all 8 new URLs.

### Files
- Modified: `config/specialty-locale-content.ts` (+4 tiling entries), `scripts/validate-specialty-locale.ts` (PRIORITY_KEYS +4), `docs/seo-audit-report.md` (regenerated by `seo:audit`), `public/llms-full.txt` + `public/site-summary.json` (regenerated by prebuild; indexablePages 3,360), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

## Next Session — START HERE

1. Continue the locale-specialty tranche service-by-service. Completed: Painting + Ceiling (8), Plaster Ceiling (4), Waterproofing (4), Plumbing (4), Handyman (4), Electrical (4), Tiling (4), and Flooring (4) = **36 specialties × MS + ZH (72 localized pages)**. Select the next coherent four-specialty service tranche — logical candidates in the roadmap's priority order: **Kitchen Cabinet** (4), **Carpentry** (4), or **Epoxy Flooring** (4). Reuse `specialty-locale-content.ts` + `LocaleSpecialtyPage`, and author genuine native MS/ZH content.
2. Add real locale problem routes (154) only after the 14 problem-overlap groups are consolidated with evidence; then localize `RelatedProblems` links on localized specialty pages (they currently point to EN problem pages — documented).
3. Obtain business/translator QA for the completed localized specialty pages (72 so far) before measuring GSC indexation.
4. Do not create thin or spun pages; rerun lint, type-check, build, topical-map, specialty-locale, i18n, HTML, and SEO audits after every tranche.

### ✅ Session 2026-08-10 (part 8) — Flooring locale-specialty tranche

**Status:** ✅ COMPLETED

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four Flooring specialties in `config/specialty-locale-content.ts`:
  1. `flooring/spc-click-lock-flooring-install` — Pemasangan Lantai SPC Click-Lock / SPC 锁扣地板安装 (from RM14/sq ft)
  2. `flooring/laminate-flooring-install` — Pemasangan Lantai Laminate / 复合地板安装 (from RM11/sq ft)
  3. `flooring/luxury-vinyl-plank-lvp-install` — Pemasangan Papan Vinyl Mewah (LVP) / 豪华乙烯基地板 (LVP) 安装 (from RM16/sq ft)
  4. `flooring/skirting-and-transition-strip-fitting` — Pemasangan Skirting & Jalur Peralihan / 踢脚线与收边条安装 (from RM8/linier ft)
- Each entry carries full native MS + ZH blocks: name, tagline, description, 5 highlights, 5 process steps, 5 FAQs, metaTitle and metaDesc — grounded in the existing Flooring service record (FloorEver/Quick-Step/Kronotex/Audacity brands, moisture test with 6-mil vapour barrier above 3%, self-levelling 3mm-over-2m tolerance, IXPE/EVA underlayment, 8–12mm expansion gaps, door-jamb undercutting, skirting with mitred corners, T-mould/reducer/end-cap transitions, AC4–AC5 laminate wear rating, published per-sq-ft prices, 5-year workmanship warranty). Nothing machine-spun.
- The existing shared architecture automatically publishes the 8 new pages under `/ms/services/flooring/*` and `/zh/services/flooring/*`, with self-canonicals, four-URL hreflang clusters, sitemap entries, related guides (localized blog routes — the SPC-vs-vinyl-vs-laminate guide has MS + ZH translations), typed problem relationships (spc-flooring-peeling-edges, vinyl-flooring-lifting-edges), localized service-page links and in-language OfferCatalog. No duplicated component/route was added.
- Extended the non-thin priority gate (`PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`) so the four Flooring entries are required in future builds.
- Sitemap 3,360 → **3,368** indexable URLs (+8 new localized specialty pages with full three-URL clusters, verified live). AI context (`site-summary.json` / `llms-full.txt`) regenerated by prebuild.
- Verification passed: `npm run lint` (0/0), `npm run type-check`, `npm run audit:topical-map` (28/28, 112 typed relationships), `npm run audit:specialty-locale` (**36 specialties × ms/zh = 72 native blocks**; was 32×2=64), `npm run audit:i18n` (1,075 × 3), `npm run build` (SUCCESS — `audit:html` checks 4,407 pages, 0 fatal / 0 warnings; was 4,399 pre-flooring), `npm run seo:audit` (0 canonical/hreflang defects), estimator suite (263,293 assertions), `npm audit` (0 vulnerabilities).
- Live prod-server smoke: MS `/ms/services/flooring/spc-click-lock-flooring-install` 200 with `<html lang="ms-MY">`, Malay title/meta, self-canonical, full 4-URL hreflang cluster and in-language OfferCatalog + FAQ JSON-LD; ZH `/zh/services/flooring/luxury-vinyl-plank-lvp-install` 200 with `<html lang="zh-MY">`, Chinese title and full cluster; EN `/services/flooring/skirting-and-transition-strip-fitting` emits the real EN/MS/ZH/x-default cluster; MS/ZH flooring indexes link all 4 localized specialties; related-guide links resolve to localized blog routes (`/ms/blog/spc-vs-vinyl-vs-laminate-lantai-malaysia`, `/zh/bo-ke/ma-lai-xi-ya-spc-yu-yin-xi-yu-qiang-hua-di-ban-dui-bi`); `/ms/services/flooring/not-a-specialty` → real 404; sitemap contains all 8 new URLs.

### Files
- Modified: `config/specialty-locale-content.ts` (+4 flooring entries), `scripts/validate-specialty-locale.ts` (PRIORITY_KEYS +4), `docs/seo-audit-report.md` (regenerated by `seo:audit`), `public/llms-full.txt` + `public/site-summary.json` (regenerated by prebuild; indexablePages 3,368), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-10 (part 9) — Kitchen Cabinet locale-specialty tranche

**Status:** ✅ COMPLETED

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four Kitchen Cabinet specialties in `config/specialty-locale-content.ts`:
  1. `kitchen-cabinet/modular-kitchen-cabinet-10ft-l-shape` — Kabinet Dapur Modular (L-shape 10 kaki) / 模块化厨房橱柜（10 英尺 L 型） (from RM7,500)
  2. `kitchen-cabinet/custom-plywood-kitchen` — Dapur Papan Lapis Kustom / 定制胶合板厨房 (from RM11,000)
  3. `kitchen-cabinet/quartz-granite-countertop` — Permukaan Kaunter Kuarza / Granit / 石英石 / 花岗岩台面 (from RM220/linier ft)
  4. `kitchen-cabinet/kitchen-makeover-doors-and-hardware-only` — Makeover Dapur (Pintu & Perkakasan Sahaja) / 厨房翻新（仅门板与五金） (from RM4,200)
- Each entry carries full native MS + ZH blocks: name, tagline, description, 5 highlights, 5 process steps, 4 FAQs, metaTitle and metaDesc — grounded in the existing Kitchen Cabinet service record (18mm melamine carcass vs. quality plywood with 25mm shelves, Häfele/Blum soft-close hinges + full-extension drawer runners, Caesarstone/Silestone engineered quartz + local granite + Corian solid surface + HPL laminate countertops, templating-after-cabinet, undermount sink cutouts, mitred/bullnose edges, 3D design, 14–21 day modular / 21–28 day custom lead times, published prices, 5-year cabinet structure warranty). Nothing machine-spun.
- The existing shared locale-specialty architecture automatically publishes the 8 real pages under `/ms/services/kitchen-cabinet/*` and `/zh/services/kitchen-cabinet/*`, with self-canonicals, four-URL hreflang clusters, sitemap entries, related guide/problem sections and localized service-page links. No duplicated component/route was added. EN kitchen-cabinet specialty pages now emit the real three-way hreflang cluster (previously self-referencing only).
- Extended the non-thin priority gate (`PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`) so the four Kitchen Cabinet entries are required in future builds.
- Sitemap 3,368 → **3,376** indexable URLs (+8 new localized specialty pages with full three-URL clusters, verified live). AI context (`site-summary.json` / `llms-full.txt`) regenerated by prebuild (indexablePages 3,376).
- Verification passed: `npm run lint` (0/0), `npm run type-check`, `npm run audit:topical-map` (28/28, 112 typed relationships), `npm run audit:specialty-locale` (**40 specialties × ms/zh = 80 native blocks** above the non-thin threshold; was 36×2=72), `npm run audit:i18n` (1,075 × 3), `npm run build` (SUCCESS — `audit:html` checks **4,415 pages**, 0 fatal / 0 warnings; was 4,407 pre-kitchen-cabinet), `npm run seo:audit` (0 canonical/hreflang defects), estimator suite (263,293 assertions), `npm audit` (0 vulnerabilities).
- Live prod-server smoke: MS `/ms/services/kitchen-cabinet/modular-kitchen-cabinet-10ft-l-shape` 200 with `<html lang="ms-MY">`, Malay title/meta, self-canonical, full 4-URL hreflang cluster (en-MY/ms-MY/zh-MY/x-default) and in-language OfferCatalog; ZH `/zh/services/kitchen-cabinet/custom-plywood-kitchen` 200 with `<html lang="zh-MY">`, Chinese title/H1 and full cluster; EN `/services/kitchen-cabinet/quartz-granite-countertop` 200 with the real EN/MS/ZH/x-default cluster; MS + ZH kitchen-cabinet indexes link all 4 localized specialties; `/ms/services/kitchen-cabinet/not-a-specialty` → real 404 (NoFallbackError); sitemap contains all 12 new URLs (3 locales × 4 specialties).

### Files
- Modified: `config/specialty-locale-content.ts` (+4 kitchen-cabinet entries), `scripts/validate-specialty-locale.ts` (PRIORITY_KEYS +4), `docs/seo-audit-report.md` (regenerated by `seo:audit`), `public/llms-full.txt` + `public/site-summary.json` (regenerated by prebuild; indexablePages 3,376), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

## Next Session — START HERE

1. Continue the locale-specialty tranche service-by-service. Completed: Painting + Ceiling (8), Plaster Ceiling (4), Waterproofing (4), Plumbing (4), Handyman (4), Electrical (4), Tiling (4), Flooring (4), **Kitchen Cabinet (4)**, and **Carpentry (4)** = **44 specialties × MS + ZH (88 localized pages)**. Select the next coherent four-specialty service tranche — the last remaining of the originally-suggested candidates: **Epoxy Flooring** (4). Reuse `specialty-locale-content.ts` + `LocaleSpecialtyPage`, and author genuine native MS/ZH content.
2. Add real locale problem routes (154) only after the 14 problem-overlap groups are consolidated with evidence; then localize `RelatedProblems` links on localized specialty pages (they currently point to EN problem pages — documented).
3. Obtain business/translator QA for the completed localized specialty pages (88 so far) before measuring GSC indexation.
4. Do not create thin or spun pages; rerun lint, type-check, build, topical-map, specialty-locale, i18n, HTML, and SEO audits after every tranche.

### ✅ Session 2026-08-10 (part 10) — Carpentry locale-specialty tranche

**Status:** ✅ COMPLETED

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four Carpentry specialties in `config/specialty-locale-content.ts`:
  1. `carpentry/built-in-wardrobe` — Almari Pakaian Tanam / 入墙衣柜 (from RM320/linier ft)
  2. `carpentry/tv-console-and-feature-wall` — Konsol TV & Dinding Feature / 电视柜与背景墙 (from RM1,500)
  3. `carpentry/study-desk-and-home-office` — Meja Belajar & Pejabat Rumah / 书桌与家庭办公 (from RM1,100)
  4. `carpentry/shoe-cabinet-and-entry-storage` — Kabinet Kasut & Storan Pintu Masuk / 鞋柜与玄关收纳 (from RM1,800)
- Each entry carries full native MS + ZH blocks: name, tagline, description, 5 highlights, 5 process steps, 4 FAQs, metaTitle and metaDesc — grounded in the existing Carpentry service record (18mm plywood carcasses not cheap MDF, 25mm thick wardrobe shelves, Häfele/Blum soft-close hinges + full-extension runners, laminate/acrylic/spray-painted/vinyl-wrapped finishes, in-house KL workshop with CNC + traditional joinery, 3D design render + itemized quotation, 4–6 week timeline, published per-linier-ft prices, 5-year cabinet structure warranty). Nothing machine-spun.
- The existing shared locale-specialty architecture automatically publishes the 8 real pages under `/ms/services/carpentry/*` and `/zh/services/carpentry/*`, with self-canonicals, four-URL hreflang clusters, sitemap entries, related guide/problem sections and localized service-page links. No duplicated component/route was added. EN carpentry specialty pages now emit the real three-way hreflang cluster (previously self-referencing only).
- Extended the non-thin priority gate (`PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`) so the four Carpentry entries are required in future builds.
- Sitemap 3,376 → **3,384** indexable URLs (+8 new localized specialty pages with full three-URL clusters, verified live). AI context (`site-summary.json` / `llms-full.txt`) regenerated by prebuild.
- Verification passed: `npm run lint` (0/0), `npm run type-check`, `npm run audit:topical-map` (28/28, 112 typed relationships), `npm run audit:specialty-locale` (**44 specialties × ms/zh = 88 native blocks** above the non-thin threshold; was 40×2=80), `npm run audit:i18n` (1,075 × 3), `npm run build` (SUCCESS — `audit:html` checks **4,423 pages**, 0 fatal / 0 warnings; was 4,415 pre-carpentry), `npm run seo:audit` (0 canonical/hreflang defects), estimator suite (263,293 assertions), `npm audit` (0 vulnerabilities).
- Live prod-server smoke: MS `/ms/services/carpentry/built-in-wardrobe` 200 with `<html lang="ms-MY">`, Malay title/meta, self-canonical, full 4-URL hreflang cluster (en-MY/ms-MY/zh-MY/x-default) and in-language OfferCatalog; ZH `/zh/services/carpentry/tv-console-and-feature-wall` 200 with `<html lang="zh-MY">`, Chinese H1 (电视柜与背景墙) and full cluster; EN `/services/carpentry/study-desk-and-home-office` 200 with the real EN/MS/ZH/x-default cluster; MS + ZH carpentry indexes link all 4 localized specialties; `/ms/services/carpentry/not-a-specialty` → real 404 (NoFallbackError); sitemap contains all 12 new URLs (3 locales × 4 specialties).

### Files
- Modified: `config/specialty-locale-content.ts` (+4 carpentry entries), `scripts/validate-specialty-locale.ts` (PRIORITY_KEYS +4), `docs/seo-audit-report.md` (regenerated by `seo:audit`), `public/llms-full.txt` + `public/site-summary.json` (regenerated by prebuild; indexablePages 3,384), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-10 (part 11) — Epoxy Flooring locale-specialty tranche

**Status:** ✅ COMPLETED

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four Epoxy Flooring specialties in `config/specialty-locale-content.ts`:
  1. `epoxy-flooring/self-levelling-epoxy-floor` — Lantai Epoxy Rata-Sendiri / 自流平环氧地坪 (from RM22/sq ft)
  2. `epoxy-flooring/flake-quartz-broadcast-epoxy` — Epoxy Taburan Flake / Kuarza / 片材/石英砂抛洒环氧地坪 (from RM26/sq ft)
  3. `epoxy-flooring/heavy-duty-mortar-screed` — Mortar Screed Tugas Berat / 重型环氧砂浆镘涂 (from RM38/sq ft)
  4. `epoxy-flooring/epoxy-floor-repair-and-recoating` — Pembaikan & Salutan Semula Lantai Epoxy / 环氧地坪修补与重涂 (from RM14/sq ft)
- Each entry carries full native MS + ZH blocks: name, tagline, description, 5 highlights, 5 process steps, 4 FAQs, metaTitle and metaDesc — grounded in the Epoxy & Polyurethane Flooring service record (diamond-grinding CSP 3–4, penetrating primer, self-levelling / flake-quartz broadcast / 5–10mm mortar screed / grind-repair-recoat systems, UV-stable aliphatic PU topcoat, P4–P5 slip rating, published per-sq-ft prices). Nothing machine-spun.
- The existing shared architecture automatically publishes the 8 new pages under `/ms/services/epoxy-flooring/*` and `/zh/services/epoxy-flooring/*`, with self-canonicals, four-URL hreflang clusters, sitemap entries, related problem section (from the validated topical map — links the EN `epoxy-floor-yellowing` page) and localized service-page links. No duplicated component/route was added. EN epoxy-flooring specialty pages now emit the real four-way hreflang cluster.
- Extended the non-thin priority gate (`PRIORITY_KEYS`) to require all four Epoxy Flooring entries in future builds.
- Sitemap 3,384 → **3,392** indexable URLs (+8 new localized specialty pages with full four-URL clusters, verified live; the 4 EN specialty URLs were already present).
- Verification passed: `npm run lint` (0/0), `npm run type-check`, `npm run audit:topical-map` (28/28, 112 typed relationships), `npm run audit:specialty-locale` (**48 specialties × ms/zh = 96 native blocks**; was 44×2=88), `npm run audit:i18n` (1,075 × 3), `npm run build` (SUCCESS — `audit:html` checks **4,431 pages**, 0 fatal / 0 warnings; was 4,423 pre-epoxy), `npm run seo:audit` (0 canonical/hreflang defects), estimator suite (**263,293 assertions**), `npm audit` (0 vulnerabilities).
- Live smoke test confirmed: MS self-levelling page returns 200 with `<html lang="ms-MY">`, self-canonical and native title; ZH flake page returns 200 with `<html lang="zh-MY">`; EN heavy-duty page emits the real EN/MS/ZH/x-default cluster; unknown epoxy specialty returns a real 404; MS/ZH epoxy-flooring indexes link all 4 localized specialties; sitemap contains all 8 new URLs.

### Files
- Modified: `config/specialty-locale-content.ts` (+4 epoxy-flooring entries), `scripts/validate-specialty-locale.ts` (PRIORITY_KEYS +4), `docs/seo-audit-report.md` (regenerated by `seo:audit`), `public/llms-full.txt` + `public/site-summary.json` (regenerated by prebuild), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

## Next Session — START HERE

1. All four originally-suggested candidates are now localized — **48 specialties × MS + ZH (96 localized pages)** across Painting + Ceiling (8), Plaster Ceiling (4), Waterproofing (4), Plumbing (4), Handyman (4), Electrical (4), Tiling (4), Flooring (4), Kitchen Cabinet (4), Carpentry (4), and Epoxy Flooring (4). Pick the next coherent four-specialty tranche from a remaining high-value service (e.g. Air-Conditioning, CCTV, Glass & Window, Door, or Roofing), reuse `specialty-locale-content.ts` + `LocaleSpecialtyPage`, and author genuine native MS/ZH content.
2. Add real locale problem routes (154) only after the 14 problem-overlap groups are consolidated with evidence; then localize `RelatedProblems` links on localized specialty pages (they currently point to EN problem pages — documented).
3. Obtain business/translator QA for the completed localized specialty pages (96 so far) before measuring GSC indexation.
4. Do not create thin or spun pages; rerun lint, type-check, build, topical-map, specialty-locale, i18n, HTML, and SEO audits after every tranche.

### ✅ Session 2026-08-10 (part 12) — CCTV locale-specialty tranche + Air Conditioning scope correction

**Status:** ✅ COMPLETED

Started exactly from the preceding **Next Session — START HERE** section. The owner confirmed that KL Servis Rumah does **not** provide standalone Air Conditioning service, so no Air Conditioning service or specialty content was created. CCTV was selected as the next conversion-relevant, existing four-specialty service.

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four CCTV specialties in `config/specialty-locale-content.ts`:
  1. `cctv/condo-wi-fi-cctv-package-4-cameras` — Pakej CCTV Wi-Fi Kondominium (4 Kamera) / 公寓 Wi-Fi CCTV 套餐（4台） (from RM2,200)
  2. `cctv/landed-house-poe-cctv-8-cameras` — CCTV PoE Rumah Landed (8 Kamera) / 有地住宅 PoE CCTV（8台） (from RM4,200)
  3. `cctv/single-camera-add-on` — Tambahan Satu Kamera CCTV / 单台 CCTV 摄像头加装 (from RM420)
  4. `cctv/cctv-system-health-check-and-relocation` — Pemeriksaan Kesihatan & Pemindahan Sistem CCTV / CCTV 系统检查与移机 (from RM220)
- Each entry contains a native name, tagline, substantive description, 5 highlights, 5 process steps, 4 FAQs, `metaTitle` and `metaDesc`. The details are grounded in the published CCTV record: 4MP Wi-Fi/cloud condo systems, 4MP PoE/CAT6 landed-house systems, 8-channel NVR + 2TB surveillance HDD, approximately one week of continuous recording subject to bitrate/settings, app pairing and remote viewing, compatibility checks before add-ons, and systematic camera/NVR/HDD/power/network diagnosis. Nothing was spun from a generic template.
- Extended `PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts` so all four CCTV entries are required by future prebuilds.
- Reused the existing `LocaleSpecialtyPage` route architecture. It now publishes eight real pages under `/ms/services/cctv/*` and `/zh/services/cctv/*`; the four EN CCTV specialty pages emit the real EN/MS/ZH/x-default hreflang cluster. Typed related problems and the CCTV buying guide come from the existing validated topical-authority map.
- Corrected the business-scope mismatch: replaced the visible Aircon / Penyaman Udara / 空调 popular-search chip with CCTV in all three locales, and removed the dead standalone `aircond` response-time key from the comparison fallback and locale dictionaries. The valid Electrical specialty for a dedicated **aircond electrical point** remains unchanged because it is electrical circuit work, not air-conditioning servicing.
- Sitemap increased **3,392 → 3,400** indexable URLs (+8 localized CCTV specialty pages). Build-generated AI context and the SEO report were regenerated.

#### Verification
- `npm run lint`: PASS (0 errors, 0 warnings).
- `npm run type-check`: PASS.
- `npm run audit:topical-map`: PASS (28/28 services, 112 typed specialty relationships).
- `npm run audit:specialty-locale`: PASS (**52 specialties × MS/ZH = 104 native blocks**; was 48×2=96).
- `npm run audit:i18n`: PASS (**1,074 keys × 3 locales**, perfect parity; one dead Air Conditioning key removed consistently).
- `npm run build`: PASS; estimator suite **263,293 assertions**, 0 failures.
- `npm run audit:html`: PASS (**4,439 pages**, 0 fatal / 0 warnings; was 4,431).
- `npm run seo:audit`: PASS with 0 canonical/hreflang defects; report regenerated.
- `npm audit`: 0 vulnerabilities.
- Production-server smoke tests:
  - MS condo package returned 200 with `<html lang="ms-MY">`, native content, self-canonical, EN/MS/ZH/x-default hreflang and in-language OfferCatalog.
  - ZH landed-house package returned 200 with `<html lang="zh-MY">`, native content, self-canonical and the full hreflang cluster.
  - EN single-camera page returned 200 and now advertises the real localized equivalents.
  - MS + ZH CCTV indexes link all four localized specialties.
  - Unknown MS CCTV specialty returned a real 404.
  - Sitemap contains all eight new MS/ZH URLs; total URL count is 3,400.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `components/ui/hero-search-bar.tsx`, `components/service-comparison-table.tsx`, `messages/{en,ms,zh}.json`, `IMPLEMENTATION_REPORT.md`, `docs/seo-audit-report.md`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-10 (part 13) — Window Repair locale-specialty tranche

**Status:** ✅ COMPLETED

Started exactly from the preceding **Next Session — START HERE** section. Selected the **Window Repair** service (the "Glass & Aluminium / Window Repair" preference; the higher-conversion repair service of the pair, with emergency glass replacement, broken handles and stuck sliding windows being frequent urgent searches). Door and Roofing remain for subsequent tranches.

- Added genuinely authored Bahasa Malaysia and Simplified Chinese content for all four Window Repair specialties in `config/specialty-locale-content.ts`:
  1. `window-repair/glass-replacement` — Penggantian Kaca Tingkap / 窗户玻璃更换 (from RM200)
  2. `window-repair/window-seal-replacement` — Penggantian Pengedap Tingkap / 窗户密封条更换 (from RM30/linier ft)
  3. `window-repair/window-handle-and-hinge-repair` — Pembaikan Pemegang & Engsel Tingkap / 窗户执手与铰链维修 (from RM120)
  4. `window-repair/sliding-window-roller-replacement` — Penggantian Roller Tingkap Gelangsar / 推拉窗滑轮更换 (from RM150)
- Each entry carries full native MS + ZH blocks: name, tagline, description, 5 highlights, 5 process steps, 4 FAQs, `metaTitle` and `metaDesc` — grounded in the existing Window Repair service record (EPDM seal wear, single-to-double glazing upgrade, 4mm/5mm common sizes carried in-van for same-day emergency, casement/top-hung/sliding/louvre hardware, roller + track cleaning, published prices, 12-month hardware & seal warranty). Nothing machine-spun.
- The existing shared locale-specialty architecture automatically publishes the 8 new pages under `/ms/services/window-repair/*` and `/zh/services/window-repair/*`, with self-canonicals, four-URL hreflang clusters, sitemap entries, typed related-problem sections (from the validated topical map: `sliding-window-stuck`, `stuck-sliding-window`, `stuck-window-lock`) and localized service-page links. No duplicated component/route was added. The four EN window-repair specialty pages now emit the real EN/MS/ZH/x-default hreflang cluster (previously self-referencing only).
- Extended the non-thin priority gate (`PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`) so the four Window Repair entries are required in future builds.
- Sitemap 3,400 → **3,408** indexable URLs (+8 new localized specialty pages with full three-URL clusters, verified live). AI context (`site-summary.json` / `llms-full.txt`) regenerated by prebuild (indexablePages 3,408).
- Verification passed: `npm run lint` (0/0), `npm run type-check`, `npm run audit:topical-map` (28/28, 112 typed relationships), `npm run audit:specialty-locale` (**56 specialties × ms/zh = 112 native blocks**; was 52×2=104), `npm run audit:i18n` (1,074 × 3, perfect parity), `npm run build` (SUCCESS — **4,455 routes**; was 4,439 pre-window-repair), `npm run audit:html` (**4,447 pages**, 0 fatal / 0 warnings), `npm run seo:audit` (0 canonical/hreflang defects), estimator suite (**263,293 assertions**), `npm audit` (0 vulnerabilities).
- Live prod-server smoke: MS `/ms/services/window-repair/glass-replacement` 200 with `<html lang="ms-MY">`, Malay title/meta, self-canonical, full 4-URL hreflang cluster and in-language OfferCatalog; ZH `/zh/services/window-repair/window-handle-and-hinge-repair` 200 with `<html lang="zh-MY">`, Chinese title/H1 and full cluster; EN `/services/window-repair/glass-replacement` 200 with the real EN/MS/ZH/x-default cluster; MS + ZH window-repair indexes link all 4 localized specialties; typed related problems render on localized pages; `/ms/services/window-repair/not-a-specialty` → real 404; sitemap contains all 8 new URLs.

### Files
- Modified: `config/specialty-locale-content.ts` (+4 window-repair entries), `scripts/validate-specialty-locale.ts` (PRIORITY_KEYS +4), `docs/seo-audit-report.md` (regenerated by `seo:audit`), `public/llms-full.txt` + `public/site-summary.json` (regenerated by prebuild; indexablePages 3,408), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

## Next Session — START HERE

1. Continue the locale-specialty tranche service-by-service. Completed: Painting + Ceiling (8), Plaster Ceiling (4), Waterproofing (4), Plumbing (4), Handyman (4), Electrical (4), Tiling (4), Flooring (4), Kitchen Cabinet (4), Carpentry (4), Epoxy Flooring (4), CCTV (4), and **Window Repair (4)** = **56 specialties × MS + ZH (112 localized pages)**. Pick the next coherent four-specialty tranche from an actual remaining high-value service—next candidates in priority order: **Glass & Aluminium** (4) or **Door** (4) or **Roofing** (4). Reuse `specialty-locale-content.ts` + `LocaleSpecialtyPage` and author genuine native MS/ZH content. **Do not create Air Conditioning pages or content** (owner confirmed not offered).
2. Add real locale problem routes (154) only after the 14 problem-overlap groups are consolidated with evidence; then localize `RelatedProblems` links on localized specialty pages (they currently point to EN problem pages—documented and still blocked).
3. Obtain business/translator QA for the completed localized specialty pages (112 so far) before measuring GSC indexation; this requires an owner/translator and cannot be completed from repository code alone.
4. Do not create thin or spun pages; rerun lint, type-check, build, topical-map, specialty-locale, i18n, HTML and SEO audits after every tranche.

### ✅ Session 2026-08-10 (part 14) — Glass & Aluminium locale-specialty tranche

**Status:** ✅ COMPLETED

Continued from the final **Next Session — START HERE** section and selected the listed **Glass & Aluminium** tranche. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Glass & Aluminium specialties in `config/specialty-locale-content.ts`:
  1. `glass-aluminium/frameless-shower-screen` — Skrin Pancuran Tanpa Bingkai / 无框淋浴屏 (from RM420/panel)
  2. `glass-aluminium/aluminium-sliding-window` — Tingkap Gelangsar Aluminium / 铝合金推拉窗 (from RM320/sq ft)
  3. `glass-aluminium/glass-office-partition` — Partition Pejabat Kaca / 玻璃办公隔断 (from RM220/sq ft)
  4. `glass-aluminium/wall-mirror-installation` — Pemasangan Cermin Dinding / 墙镜安装 (from RM320)
- Every block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Source facts remain tied to the published service record: 10–12mm tempered shower glass, drip-edge/sanitary silicone and 12-month seal cover; 5mm clear/tinted glass, nylon rollers/weatherstrip and Akasia/Hua Ho/YKK AP profiles for windows; 10–12mm office partitions with U-channel or frameless systems; and 5–6mm silver-backed mirrors fixed with concealed aluminium channels. No thin or spun pages.
- The shared `LocaleSpecialtyPage` architecture publishes the eight localized routes, upgrades all four EN specialty hreflang clusters to EN/MS/ZH/x-default, preserves typed related-problem sections, localized service links and real 404s. `PRIORITY_KEYS` now requires every one of the four entries.
- Generated AI context and sitemap now report **3,416 indexable URLs** (+8).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28; 112 typed specialty relationships), locale gate (**60 specialties × MS/ZH = 120 native blocks**), i18n parity (1,074 × 3), and estimator suite (263,293 assertions).
- PASS: production build (**4,463 routes**), HTML audit (**4,455 pages**, 0 fatal / 0 warnings), SEO audit and `npm audit` (0 vulnerabilities).
- Production smoke: native MS shower screen, native ZH aluminium sliding window and EN office partition pages return 200 with correct language/title/self-canonical and localized cluster URLs; unknown MS specialty returns a real 404.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-10 (part 15) — Door locale-specialty tranche

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and selected the listed **Door** tranche. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Door specialties in `config/specialty-locale-content.ts`:
  1. `door/solid-timber-door-installation` — Pemasangan Pintu Kayu Pepejal / 实木门安装 (from RM550)
  2. `door/laminate-door-installation` — Pemasangan Pintu Laminate / 防火板门安装 (from RM250)
  3. `door/door-planing-and-adjustment` — Ketam & Pelarasan Pintu / 门刨修与调校 (from RM120)
  4. `door/fire-rated-door-installation` — Pemasangan Pintu Tahan Api / 防火门安装 (from RM950)
- Every block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Source facts remain tied to the published Door service record: meranti/chengal/oak solid timber with meranti frame and 3 × SS304 hinges (14–21 day lead time), HDF-skin laminate engineered doors for humid areas (3–7 day lead time), door planing with electric planer for scraping/sticking doors swollen by tropical humidity or sagging hinges (30–60 min per door), and 1-hour/2-hour certified fire-rated doors with intumescent seals and self-closing devices from Sanitor/Felicia/local certified manufacturers. No thin or spun pages.
- The shared `LocaleSpecialtyPage` architecture publishes the eight localized routes, upgrades all four EN specialty hreflang clusters to EN/MS/ZH/x-default, preserves typed related-problem sections (`door-scraping-floor`, `digital-smart-lock-installation`), localized service links and real 404s. `PRIORITY_KEYS` now requires every one of the four Door entries.
- Generated AI context and sitemap now report **3,424 indexable URLs** (+8).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28; 112 typed specialty relationships), locale gate (**64 specialties × MS/ZH = 128 native blocks**), i18n parity (1,074 × 3), and estimator suite (263,293 assertions).
- PASS: production build (**4,471 routes**), HTML audit (**4,463 pages**, 0 fatal / 0 warnings), SEO audit and `npm audit` (0 vulnerabilities).
- Production smoke: native MS solid-timber door, native ZH laminate door and EN door-planing pages return 200 with correct `<html lang>`, native titles, self-canonicals and full EN/MS/ZH/x-default hreflang clusters with in-language OfferCatalog; MS + ZH Door indexes link all 4 localized specialties; unknown MS Door specialty returns a real 404; sitemap contains all 8 new Door URLs.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-10 (part 16) — Roofing locale-specialty tranche

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and selected the listed **Roofing** tranche. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Roofing (roof-repair) specialties in `config/specialty-locale-content.ts`:
  1. `roof-repair/roof-leak-diagnosis-and-repair` — Diagnosis & Pembaikan Bocor Bumbung / 屋顶漏水诊断与修复 (from RM380)
  2. `roof-repair/ridge-re-bedding-and-re-pointing` — Re-Bedding & Re-Pointing Rabung / 屋脊重新垫底与勾缝 (from RM22/linier ft)
  3. `roof-repair/gutter-cleaning-and-realignment` — Pembersihan & Penjajaran Semula Longkang / 檐沟清理与重新调校 (from RM320)
  4. `roof-repair/full-torch-on-membrane-waterproofing` — Kalis Air Membran Torch-On Penuh / 满铺热熔防水卷材 (from RM26/sq ft)
- Every block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Source facts remain tied to the published Roof Repair service record: thermal imaging leak detection, concrete/clay/metal roof types, flexible polymer mortar for ridge work, zincalume/colour-bond flashing, manual gutter cleaning with gradient realignment, APP/SBS two-layer torch-on membrane with 15-year material + 10-year workmanship warranty, 48-hour ponding test, and fully insured work-at-height team. No thin or spun pages.
- The shared `LocaleSpecialtyPage` architecture publishes the eight localized routes, upgrades all four EN roofing specialty hreflang clusters to EN/MS/ZH/x-default, preserves typed related-problem sections (`clogged-gutter-leaking`, `cracked-roof-tiles`, `roof-leak-rainy-season`, `concrete-slab-crack-leak`) and related blogs (`how-to-fix-a-leaking-roof-in-kl`, `pu-grouting-vs-full-membrane-waterproofing`), localized service links and real 404s. `PRIORITY_KEYS` now requires every one of the four entries.
- Generated AI context and sitemap now report **3,432 indexable URLs** (+8).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28; 112 typed specialty relationships), locale gate (**68 specialties × MS/ZH = 136 native blocks**), i18n parity (1,074 × 3), and estimator suite (263,293 assertions).
- PASS: production build, HTML audit (**0 fatal / 0 warnings**), SEO audit and `npm audit` (0 vulnerabilities).
- Production smoke: native MS leak-diagnosis, native ZH ridge re-bedding and EN gutter-cleaning pages return 200 with correct `<html lang>`, native titles, self-canonicals and full EN/MS/ZH/x-default hreflang clusters with in-language OfferCatalog; MS + ZH Roofing indexes link all 4 localized specialties; unknown MS Roofing specialty returns a real 404; sitemap contains all 8 new Roofing URLs.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-10 (part 17) — Ceiling Fan locale-specialty tranche

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and selected the listed **Ceiling Fan** tranche. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Ceiling Fan specialties in `config/specialty-locale-content.ts`:
  1. `ceiling-fan/new-ceiling-fan-installation` — Pemasangan Kipas Siling Baharu / 新吊扇安装 (from RM220)
  2. `ceiling-fan/ceiling-fan-replacement` — Penggantian Kipas Siling / 吊扇更换 (from RM250)
  3. `ceiling-fan/dc-motor-smart-fan-install` — Pemasangan Kipas Pintar Motor DC / 直流电机智能吊扇安装 (from RM320)
  4. `ceiling-fan/industrial-shoplot-fan-install` — Pemasangan Kipas Industri / Lot Kedai / 工业 / 店铺吊扇安装 (from RM420)
- Every block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Source facts remain grounded in the published Ceiling Fan service record: concrete slab dynabolt anchoring, plaster ceiling timber/GI frame reinforcement (never plasterboard-only), mandatory steel safety wire (anti-drop protection), Suruhanjaya Tenaga (ST) compliant earthing and wiring, KDK, Panasonic, Fanco, Acorn, Alpha, Deka brand compatibility, DC inverter 60% energy savings, RF remote / Wi-Fi smart app integration (Tuya/Smart Life/Google Home), reverse airflow setup, 56–60+ inch industrial fans with I-beam clamps, modular scaffolding for high ceilings, GI conduit cabling, and 5-minute full speed swing test. No thin or spun pages.
- Added all four Ceiling Fan keys (as well as ensuring plaster-ceiling and waterproofing keys are included) in `PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`, retaining the non-thin build gate (now enforcing all 72 completed specialties).
- The shared `LocaleSpecialtyPage` architecture publishes the eight localized routes, upgrades all four EN ceiling-fan specialty hreflang clusters to EN/MS/ZH/x-default, preserves typed related-problem sections (`ceiling-fan-wobbling`), localized service links and real 404s.
- Generated AI context and sitemap now report **3,440 indexable URLs** (+8).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28; 112 typed specialty relationships), locale gate (**72 specialties × MS/ZH = 144 native blocks**), i18n parity (1,074 × 3), and estimator suite (263,293 assertions).
- PASS: production build (**4,487 routes**), HTML audit (**4,479 pages**, 0 fatal / 0 warnings), SEO audit and `npm audit` (0 vulnerabilities).
- Production smoke: native MS new-ceiling-fan-installation, native ZH dc-motor-smart-fan-install and EN ceiling-fan-replacement pages return 200 with correct `<html lang>`, native titles, self-canonicals and full EN/MS/ZH/x-default hreflang clusters with in-language OfferCatalog; MS + ZH Ceiling Fan indexes link all 4 localized specialties; unknown MS Ceiling Fan specialty returns a real 404; sitemap contains all 8 new Ceiling Fan URLs.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-11 (part 18) — Lighting locale-specialty tranche

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and selected the first listed candidate, the **Lighting** tranche. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Lighting specialties in `config/specialty-locale-content.ts`:
  1. `lighting/led-downlight-installation` — Pemasangan Downlight LED / LED 筒灯安装 (from RM120 / point)
  2. `lighting/pendant-and-chandelier-install` — Pemasangan Pendant & Chandelier / 吊灯与枝形吊灯安装 (from RM180)
  3. `lighting/cove-and-strip-led-installation` — Pemasangan LED Cove & Jalur / 灯槽与 LED 灯带安装 (from RM22 / ft)
  4. `lighting/smart-lighting-and-dimmer-retrofit` — Retrofit Pencahayaan Pintar & Malap / 智能照明与调光改造 (from RM250 / point)
- Every block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Source facts remain tied to the published Lighting service record: Suruhanjaya Tenaga (ST) licensed electricians, 75–90mm precision hole cutting, Philips / Osram / Tronic / Eurolux COB LED fixtures with proper driver heat management, free lux calculations and 3000K/4000K colour-temperature guidance, dynabolt or timber/GI reinforcement for heavy pendants and chandeliers (never plasterboard-only) with steel safety cables and 75–90cm dining-table drop height, aluminium heatsink profiles with serviceable driver placement and power injection for long cove runs, dual-colour strip and dimmer options, neutral-wire audits for smart-switch retrofits (Aqara, Sonoff, Schneider Wiser), leading/trailing-edge dimmer-to-driver compatibility checks, and Wi-Fi / Zigbee / DALI / 0–10V / KNX support with Google Home, Alexa, Apple Home and Tuya pairing. No thin or spun pages.
- Added all four Lighting keys to `PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`, retaining the non-thin build gate (now enforcing all 76 completed specialties).
- The shared `LocaleSpecialtyPage` architecture publishes the eight localized routes, upgrades all four EN lighting specialty hreflang clusters to EN/MS/ZH/x-default, preserves typed related-problem sections (`flickering-downlights`, `downlight-flickering`), localized service links and real 404s.
- Generated AI context and sitemap now report **3,448 indexable URLs** (+8).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28; 112 typed specialty relationships), locale gate (**76 specialties × MS/ZH = 152 native blocks**), i18n parity (1,074 × 3), and estimator suite (263,293 assertions).
- PASS: production build (**4,490 prerendered routes**), HTML audit (**4,487 pages**, 0 fatal / 0 warnings), SEO audit and `npm audit` (0 vulnerabilities).
- Production smoke: native MS led-downlight-installation, native ZH cove-and-strip-led-installation and EN smart-lighting-and-dimmer-retrofit pages return 200 with correct `<html lang>`, native titles/H1, self-canonicals and full EN/MS/ZH/x-default hreflang clusters with in-language OfferCatalog, FAQPage (4 Q&A) and HowTo (5 steps); MS + ZH Lighting indexes link all 4 localized specialties; unknown MS Lighting specialty returns a real 404; sitemap contains all 8 new Lighting URLs.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

## Next Session — START HERE

1. Continue the locale-specialty tranche service-by-service. Completed: Painting + Ceiling (8), Plaster Ceiling (4), Waterproofing (4), Plumbing (4), Handyman (4), Electrical (4), Tiling (4), Flooring (4), Kitchen Cabinet (4), Carpentry (4), Epoxy Flooring (4), CCTV (4), Window Repair (4), Glass & Aluminium (4), Door (4), Roofing (4), Ceiling Fan (4), and **Lighting (4)** = **76 specialties × MS + ZH (152 localized pages)**. Pick the next coherent four-specialty tranche from the remaining real high-value services—next candidates: **Skim Coat** (4), **Locksmith** (4), **Autogate** (4), **Welding** (4), **Water Heater** (4), or any other real service from the 28-service catalogue. Reuse `specialty-locale-content.ts` + `LocaleSpecialtyPage` and author genuine native MS/ZH content. **Do not create Air Conditioning pages or content** (owner confirmed not offered).
2. Add real locale problem routes (154) only after the 14 problem-overlap groups are consolidated with evidence; then localize `RelatedProblems` links on localized specialty pages (they currently point to EN problem pages—documented and still blocked).
3. Obtain business/translator QA for the completed localized specialty pages (152 so far) before measuring GSC indexation; this requires an owner/translator and cannot be completed from repository code alone.
4. Do not create thin or spun pages; rerun lint, type-check, build, topical-map, specialty-locale, i18n, HTML and SEO audits after every tranche.


### ✅ Session 2026-08-11 (part 19) — Skim Coat locale-specialty tranche

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and selected the first listed candidate, the **Skim Coat** tranche. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Skim Coat specialties in `config/specialty-locale-content.ts`:
  1. `skim-coat/wall-skim-coating` — Skim Coat Dinding / 墙面批灰找平 (from RM5/sq ft)
  2. `skim-coat/ceiling-skim-coating` — Skim Coat Siling / 天花批灰找平 (from RM6/sq ft)
  3. `skim-coat/crack-and-joint-repair` — Pembaikan Retak & Sendi / 裂缝与接缝修补 (from RM22/linear ft)
  4. `skim-coat/full-condo-re-skim-package` — Pakej Skim Semula Kondominium Penuh / 全屋公寓重新批灰配套 (from RM4,200 for an approximately 1,000 sq ft unit)
- Every locale block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Content is grounded in the published Skim Coat record: complete substrate inspection; loose-paint, mould and efflorescence preparation; bonding primer; two to three thin coats of Knauf, Gyproc or Mapei polymer-modified compound; 4–6 hour intercoat drying; pole sanding and side-light inspection; 24 hours before primer/paint; typical 1–3mm total skim thickness; leak and soft-board remediation before ceiling work; V-groove routing, flexible acrylic filler and fiberglass mesh for suitable crack repairs; and a typical 2–4 day full-condo programme. Active or suspected structural cracks are explicitly diagnosed rather than cosmetically hidden. No thin or spun pages.
- Added all four Skim Coat keys to `PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`, retaining the prebuild non-thin gate (now enforcing all 80 completed specialties).
- Reused the shared `LocaleSpecialtyPage` architecture: eight MS/ZH routes now publish; all four EN Skim Coat specialty pages emit real EN/MS/ZH/x-default hreflang clusters; typed related problems (`uneven-wall-surface-skim`, `peeling-skim-coat`, `paint-cracking-hairline-walls`) and related blogs render through the existing topical map; localized service links and true 404s are preserved.
- Sitemap and generated AI context increased **3,448 → 3,456 indexable URLs** (+8 localized specialty pages).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28 services; 112 typed specialty relationships), locale gate (**80 specialties × MS/ZH = 160 native blocks**), i18n parity (1,074 × 3), estimator suite (263,293 assertions) and `npm audit` (0 vulnerabilities).
- PASS: production build (**4,503 static pages generated**), full-corpus HTML audit (**4,495 pages**, 0 fatal / 0 warnings), and SEO audit (0 metadata, canonical or hreflang defects; report regenerated).
- Production smoke: native MS wall skim-coating, native ZH crack-and-joint repair and EN full-condo pages return 200 with the correct `<html lang>`, native titles, self-canonicals and full EN/MS/ZH/x-default hreflang clusters; localized pages emit in-language OfferCatalog, FAQPage (4 Q&A) and HowTo (5 steps); MS + ZH Skim Coat indexes link all four specialties; an unknown MS specialty returns a true 404; sitemap contains all eight new localized URLs and exactly 3,456 URLs.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

## Next Session — START HERE

1. Continue the locale-specialty tranche service-by-service. Completed: Painting + Ceiling (8), Plaster Ceiling (4), Waterproofing (4), Plumbing (4), Handyman (4), Electrical (4), Tiling (4), Flooring (4), Kitchen Cabinet (4), Carpentry (4), Epoxy Flooring (4), CCTV (4), Window Repair (4), Glass & Aluminium (4), Door (4), Roofing (4), Ceiling Fan (4), Lighting (4), and **Skim Coat (4)** = **80 specialties × MS + ZH (160 localized pages)**. Pick the next coherent four-specialty tranche from the remaining real high-value services—next candidates: **Locksmith** (4), **Autogate** (4), **Welding** (4), **Water Heater** (4), or any other real service from the 28-service catalogue. Reuse `specialty-locale-content.ts` + `LocaleSpecialtyPage` and author genuine native MS/ZH content. **Do not create Air Conditioning pages or content** (owner confirmed not offered).
2. Add real locale problem routes (154) only after the 14 problem-overlap groups are consolidated with evidence; then localize `RelatedProblems` links on localized specialty pages (they currently point to EN problem pages—documented and still blocked).
3. Obtain business/translator QA for the completed localized specialty pages (160 so far) before measuring GSC indexation; this requires an owner/translator and cannot be completed from repository code alone.
4. Do not create thin or spun pages; rerun lint, type-check, build, topical-map, specialty-locale, i18n, HTML and SEO audits after every tranche.

### ✅ Session 2026-08-11 (part 20) — Locksmith locale-specialty tranche

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and selected the next listed real high-value service, **Locksmith**. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Locksmith specialties in `config/specialty-locale-content.ts`:
  1. `locksmith/smart-lock-installation` — Pemasangan Kunci Pintar / 智能锁安装 (from RM420)
  2. `locksmith/mortice-deadbolt-lock-replacement` — Penggantian Kunci Mortice / Deadbolt / 插芯锁与死锁更换 (from RM220)
  3. `locksmith/key-cutting-and-re-keying` — Pemotongan Kunci & Re-Key / 配钥匙与锁芯重配 (from RM30)
  4. `locksmith/emergency-lockout-landed-house` — Kecemasan Pintu Terkunci Rumah Landed / 有地住宅紧急开锁 (from RM180)
- Every locale block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Content remains grounded in the published Locksmith service record: Samsung, Yale, Igloohome, Solity, Hafele, Kaiser and Philips smart-lock options; keypad, RFID, Bluetooth, Wi-Fi and biometric access; door-material and mortice-fit checks; app pairing and PIN/fingerprint/user registration; Yale, Imperial or Hafele mortice/deadbolt replacement with three keys; key cutting and re-keying so old keys stop working; and non-destructive landed-house lockout entry with proof of ownership, same-day availability subject to technician capacity, and condominium-management coordination. No thin or spun pages.
- Added all four Locksmith keys to `PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`, retaining the non-thin build gate (now enforcing all 84 completed specialties).
- Reused the shared `LocaleSpecialtyPage` architecture: eight MS/ZH routes now publish; all four EN Locksmith specialty pages emit real EN/MS/ZH/x-default hreflang clusters; typed related problems (`smart-lock-not-working`, `locked-out-of-house`) and the `smart-lock-buying-guide-malaysia-2026` blog relationship render through the existing topical map; localized service links and true 404s are preserved.
- Sitemap and generated AI context increased **3,456 → 3,464 indexable URLs** (+8 localized specialty pages).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28 services; 112 typed specialty relationships), locale gate (**84 specialties × MS/ZH = 168 native blocks**), i18n parity (1,074 × 3), estimator suite (263,293 assertions) and `npm audit` (0 vulnerabilities).
- PASS: production build (**4,511 static pages generated**), full-corpus HTML audit (**4,503 pages**, 0 fatal / 0 warnings), technical SEO head audit (3,464 self-canonical indexable pages; 0 warnings) and metadata consistency SEO audit.
- Production smoke: native MS `smart-lock-installation`, native ZH `mortice-deadbolt-lock-replacement` and EN `key-cutting-and-re-keying` pages return 200 with the correct `<html lang>`, native titles/H1s, self-canonicals and full EN/MS/ZH/x-default hreflang clusters with in-language OfferCatalog, FAQPage and HowTo JSON-LD; MS + ZH Locksmith indexes link all 4 localized specialties; unknown MS Locksmith specialty returns a real 404; sitemap contains all 8 new Locksmith URLs.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-11 (part 21) — Autogate locale-specialty tranche

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and selected the listed candidate, **Autogate**. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Autogate specialties in `config/specialty-locale-content.ts`:
  1. `autogate/single-swing-autogate` — Autogate Hayun Tunggal / 单开平开电动门 (from RM2,200)
  2. `autogate/double-swing-autogate` — Autogate Hayun Berkembar / 双开平开电动门 (from RM3,200)
  3. `autogate/sliding-autogate` — Autogate Gelangsar / 推拉电动门 (from RM3,800)
  4. `autogate/autogate-motor-replacement-and-service` — Penggantian & Servis Motor Autogate / 电动门电机更换与保养 (from RM950)
- Every locale block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Content remains grounded in the published Autogate service record: swing, sliding and folding configurations; Autogate 2000, BFT, CAME, NICE, FAAC, Celmer, and DC Moto motors; site survey, driveway slope and motor sizing; concrete pad foundation and level ground track; IP-rated weather-resistant conduit wiring and isolator switches; control board programming and open/close delay synchronization; 2–4 paired remotes and infrared safety beam anti-crush sensors; mechanical manual release keys for power outages; optional 12V/24V battery backup installation (RM350–500); 6-month preventive maintenance servicing (RM180); and automation of existing manual gates. No thin or spun pages.
- Added all four Autogate keys to `PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`, retaining the non-thin build gate (now enforcing all 88 completed specialties).
- Reused the shared `LocaleSpecialtyPage` architecture: eight MS/ZH routes now publish; all four EN Autogate specialty pages emit real EN/MS/ZH/x-default hreflang clusters; typed related problems (`autogate-not-closing`, `autogate-remote-not-working`) and the `auto-gate-installation-guide-malaysia` blog relationship render through the existing topical map; localized service links and true 404s are preserved.
- Sitemap and generated AI context increased **3,464 → 3,472 indexable URLs** (+8 localized specialty pages).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28 services; 112 typed specialty relationships), locale gate (**88 specialties × MS/ZH = 176 native blocks**), i18n parity (1,074 × 3), estimator suite (263,293 assertions) and `npm audit` (0 vulnerabilities).
- PASS: production build (**4,519 static pages generated**), full-corpus HTML audit (**4,511 pages**, 0 fatal / 0 warnings), technical SEO head audit (3,472 self-canonical indexable pages; 0 warnings) and metadata consistency SEO audit.
- Production smoke: native MS `single-swing-autogate`, native ZH `sliding-autogate` and EN `double-swing-autogate` pages return 200 with the correct `<html lang>`, native titles/H1s, self-canonicals and full EN/MS/ZH/x-default hreflang clusters with in-language OfferCatalog, FAQPage and HowTo JSON-LD; MS + ZH Autogate indexes link all 4 localized specialties; unknown MS Autogate specialty returns a real 404; sitemap contains all 8 new Autogate URLs.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `docs/seo-metadata-inventory.csv`, `docs/seo-metadata-summary.json`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-11 (part 22) — Welding locale-specialty tranche

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and selected the listed candidate, **Welding**. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Welding specialties in `config/specialty-locale-content.ts`:
  1. `welding/custom-window-grille` — Grille Tingkap Kustom / 定制窗户防护格栅 (from RM42/sq ft)
  2. `welding/main-gate-fabrication` — Fabrikasi Pagar Utama / 大门定制制作 (from RM2,800)
  3. `welding/on-site-welding-repair` — Pembaikan Kimpalan Di Tapak / 现场焊接与紧急维修 (from RM280)
  4. `welding/staircase-stringer-fabrication` — Fabrikasi Stringer Tangga / 钢结构楼梯龙骨制作 (from RM420/linear ft)
- Every locale block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Content remains grounded in the published Welding service record: mild steel, stainless steel 304, wrought iron; anti-rust zinc phosphate / zinc-rich primer; 200°C factory oven powder coating; hot-dip galvanising for 20-year outdoor rust protection; emergency escape hatches with padlock/latch; trackless folding, swing, sliding and bi-fold gates; bearing hinges and autogate motor compatibility (DC Moto, Autogate 2000, BFT); on-site emergency welding with portable inverter MIG/TIG/MMA machines for snapped hinges, broken grilles, sagging gates and loose railings; custom mono central stringers, double channel and floating cantilever staircases with chemical anchor base plates; 12-month welding & fabrication warranty. No thin or spun pages.
- Added all four Welding keys to `PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`, retaining the non-thin build gate (now enforcing all 92 completed specialties).
- Reused the shared `LocaleSpecialtyPage` architecture: eight MS/ZH routes now publish; all four EN Welding specialty pages emit real EN/MS/ZH/x-default hreflang clusters; typed related problems (`rusting-window-grille`, `loose-metal-gate-hinges`) render through the existing topical map; localized service links and true 404s are preserved.
- Sitemap and generated AI context increased **3,472 → 3,480 indexable URLs** (+8 localized specialty pages).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28 services; 112 typed specialty relationships), locale gate (**92 specialties × MS/ZH = 184 native blocks**), i18n parity (1,074 × 3), estimator suite (263,293 assertions) and `npm audit` (0 vulnerabilities).
- PASS: production build (**4,527 static pages generated**), full-corpus HTML audit (**4,519 pages**, 0 fatal / 0 warnings), technical SEO head audit (3,480 self-canonical indexable pages; 0 warnings) and metadata consistency SEO audit.
- Production smoke: native MS `custom-window-grille`, native ZH `main-gate-fabrication` and EN `on-site-welding-repair` pages return 200 with the correct `<html lang>`, native titles/H1s, self-canonicals and full EN/MS/ZH/x-default hreflang clusters with in-language OfferCatalog, FAQPage and HowTo JSON-LD; MS + ZH Welding indexes link all 4 localized specialties; unknown MS Welding specialty returns a real 404; sitemap contains all 8 new Welding URLs.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `docs/seo-metadata-inventory.csv`, `docs/seo-metadata-summary.json`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-11 (part 23) — Water Heater locale-specialty tranche

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and selected the listed candidate, **Water Heater**. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all four Water Heater specialties in `config/specialty-locale-content.ts`:
  1. `water-heater/instant-water-heater-installation` — Pemasangan Pemanas Air Segera / 即热式热水器安装 (from RM 250)
  2. `water-heater/storage-tank-heater-installation` — Pemasangan Pemanas Tangki Simpanan / 储水式热水器安装 (from RM 420)
  3. `water-heater/water-heater-repair-and-descaling` — Pembaikan & Nyahkerak Pemanas Air / 热水器维修与除垢 (from RM 180)
  4. `water-heater/heat-pump-water-heater-install` — Pemasangan Pemanas Air Pam Haba / 热泵热水器安装 (from RM 2,200)
- Every locale block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Content remains grounded in the published Water Heater service record: single-point instant heaters (Alpha, Faber, Rinnai, Joven, Panasonic, Midea) with >0.5 bar inlet pressure and 3.5–8.5kW kW rating guidance; multi-point storage tanks 15L–50L (Joven, Rheem, Rinnai) with wall mounting on solid brick/concrete, pressure/temperature relief valve, copper pipework and anode-rod check; repair & descaling of leaks, RCCB trips, slow heating and knocking noises using insulation resistance testers, with descaling every 12–18 months in hard-water areas (Klang, Shah Alam); ST (Suruhanjaya Tenaga) wiring rules and SIRIM plumbing, dedicated 20A–32A circuits with double-pole isolators, anti-splash/water-proof mounting, earth-loop testing, condo management submissions and Certificate of Completion; and energy-efficient heat-pump systems (Mitsubishi Electric, Daikin) for landed properties with outdoor condenser mounting cutting electricity up to 70%. No thin or spun pages.
- Added all four Water Heater keys to `PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`, retaining the non-thin build gate (now enforcing all 96 completed specialties).
- Reused the shared `LocaleSpecialtyPage` architecture: eight MS/ZH routes now publish; all four EN Water Heater specialty pages emit real EN/MS/ZH/x-default hreflang clusters; typed related problems (`water-heater-not-heating`, `water-heater-cold`) render through the existing topical map; localized service links and true 404s are preserved.
- Sitemap and generated AI context increased **3,480 → 3,488 indexable URLs** (+8 localized specialty pages).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28 services; 112 typed specialty relationships), locale gate (**96 specialties × MS/ZH = 192 native blocks**), i18n parity (1,074 × 3), estimator suite (263,293 assertions) and `npm audit` (0 vulnerabilities).
- PASS: production build (**4,535 static pages generated**), full-corpus HTML audit (**4,527 pages**, 0 fatal / 0 warnings), technical SEO head audit (3,488 self-canonical indexable pages; 0 warnings) and metadata consistency SEO audit.
- Production smoke: native MS `instant-water-heater-installation`, native ZH `heat-pump-water-heater-install` and EN `storage-tank-heater-installation` pages return 200 with the correct `<html lang>`, native titles/H1s, self-canonicals and full EN/MS/ZH/x-default hreflang clusters with in-language OfferCatalog, FAQPage and HowTo JSON-LD; MS + ZH Water Heater indexes link all 4 localized specialties; unknown MS Water Heater specialty returns a real 404; sitemap contains all 8 new Water Heater URLs.

### Files
- Modified: `config/specialty-locale-content.ts`, `scripts/validate-specialty-locale.ts`, `docs/seo-audit-report.md`, `docs/seo-metadata-inventory.csv`, `docs/seo-metadata-summary.json`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-11 (part 24) — House Renovation + Cleaning + Deep Cleaning + Post-Renovation Cleaning locale-specialty tranches (final 16 specialties — ALL 112 COMPLETE)

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and implemented the last four remaining services in the catalogue. No standalone Air Conditioning content was created.

- Added genuine native Bahasa Malaysia + Simplified Chinese content for all **16 remaining specialties** (4 services × 4) in `config/specialty-locale-content.ts`:

  **House Renovation** (4):
  1. `house-renovation/full-house-renovation-package` — Pakej Pengubahsuaian Rumah Penuh / 全屋翻新套餐 (from RM 22,000)
  2. `house-renovation/kitchen-and-bathroom-makeover` — Makeover Dapur & Bilik Mandi / 厨房与浴室翻新 (from RM 10,000)
  3. `house-renovation/condo-interior-refurbishment` — Pemulihan Interior Kondominium / 公寓室内翻新 (from RM 30,000)
  4. `house-renovation/commercial-shoplot-renovation` — Pengubahsuaian Shoplot Komersial / 商铺商业装修 (On Quote)

  **Cleaning** (4):
  5. `cleaning/weekly-condo-cleaning-1-000-sqft` — Pembersihan Kondominium Mingguan / 每周公寓清洁 (from RM 180 / visit)
  6. `cleaning/bi-weekly-terrace-house-cleaning` — Pembersihan Rumah Teres Dua Minggu Sekali / 每两周排屋清洁 (from RM 250 / visit)
  7. `cleaning/office-cleaning-small-office-1-500-sqft` — Pembersihan Pejabat Kecil / 小型办公室清洁 (from RM 320 / visit)
  8. `cleaning/one-off-spring-clean` — Cucian Musim Sekali Sahaja / 单次大扫除 (from RM 420)

  **Deep Cleaning** (4):
  9. `deep-cleaning/condo-move-out-deep-clean-1-000-sqft` — Cucian Pindah Keluar Kondominium / 公寓退租深度清洁 (from RM 420)
  10. `deep-cleaning/terrace-house-deep-clean-2-000-sqft` — Cucian Menyeluruh Rumah Teres / 排屋深度清洁 (from RM 650)
  11. `deep-cleaning/post-illness-disinfection-clean` — Cucian Disinfeksi Selepas Sakit / 病后消毒清洁 (from RM 500)
  12. `deep-cleaning/allergy-season-refresh` — Penyegaran Musim Alahan / 过敏季焕新清洁 (from RM 480)

  **Post-Renovation Cleaning** (4):
  13. `post-renovation-cleaning/condo-post-renovation-clean-1-000-sqft` — Cucian Selepas Pengubahsuaian Kondominium / 公寓装修后清洁 (from RM 650)
  14. `post-renovation-cleaning/terrace-house-post-renovation-clean-2-000-sqft` — Cucian Selepas Pengubahsuaian Rumah Teres / 排屋装修后清洁 (from RM 1,400)
  15. `post-renovation-cleaning/new-tiles-grout-haze-removal` — Penyingkiran Kabut Grout Jubin Baharu / 新瓷砖砖缝浮灰清除 (from RM 10 / sq ft)
  16. `post-renovation-cleaning/construction-debris-removal` — Penyingkiran Serpihan Pembinaan / 建筑垃圾清运 (from RM 320)

- Every locale block has an authored native name, tagline, substantive description, five highlights, five process steps, four FAQs, meta title and meta description. Content remains grounded in the published service records: House Renovation (turnkey single-contract renovation, milestone payments 10/20/30/30/10, DBKL/MBSA + condo-management compliance, Gantt timeline, 12-month structural warranty, kitchen/bathroom makeover with wet-area tanking and Häfele/Blum soft-close hardware, 6–8 week 1,000 sqft condo programme, retail/F&B shoplot fit-out with grease-trap/exhaust and TNB load); Cleaning (background-checked in-house cleaners, eco pet-safe products, custom checklists, monthly supervisor spot-checks, 24-hour re-clean guarantee, after-hours office service); Deep Cleaning (top-to-bottom coverage incl. oven/fridge/fans/window tracks, HEPA-filtered vacuums, hospital-grade post-illness disinfection, dust-mite allergy-season treatment, move-out written completion receipt); Post-Renovation Cleaning (construction-residue removal with specialist solvents, plastic/metal scrapers, wet-vacuum extraction and floor buffing, pH-balanced grout-haze removal never on natural stone, 3–7 day cure window, skip-bin coordination RM 350–500, 7-day spot-check guarantee). No thin or spun pages.
- Added all 16 keys to `PRIORITY_KEYS` in `scripts/validate-specialty-locale.ts`, retaining the non-thin build gate (now enforcing **all 112 completed specialties** — the full catalogue).
- Reused the shared `LocaleSpecialtyPage` architecture: 32 MS/ZH routes now publish; all 16 EN specialty pages emit real EN/MS/ZH/x-default hreflang clusters; typed related problems (e.g. `mold-in-bathroom-after-cleaning`, `stubborn-bathroom-limescale`, `move-out-condo-deep-clean`, `stubborn-grout-stains-after-deep-clean`, `construction-dust-returning`, `cement-splatter-tile-clean`, `old-condo-full-refurbishment`) render through the existing topical map; localized service links and true 404s are preserved.
- Sitemap and generated AI context increased **3,488 → 3,520 indexable URLs** (+32 localized specialty pages).

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28 services; 112 typed specialty relationships), locale gate (**112 specialties × MS/ZH = 224 native blocks** — the full catalogue), i18n parity (1,074 × 3), estimator suite (263,293 assertions) and `npm audit` (0 vulnerabilities).
- PASS: production build (**4,567 static pages generated**), full-corpus HTML audit (**4,559 pages**, 0 fatal / 0 warnings), technical SEO head audit (3,520 self-canonical indexable pages; 0 warnings), metadata consistency SEO audit, and SEO inventory (4,559 pages, 0 warnings).
- Production smoke: native MS `full-house-renovation-package` / `weekly-condo-cleaning-1-000-sqft` / `condo-move-out-deep-clean-1-000-sqft` / `new-tiles-grout-haze-removal`, native ZH `kitchen-and-bathroom-makeover` / `one-off-spring-clean` / `post-illness-disinfection-clean` / `construction-debris-removal` and EN `weekly-condo-cleaning-1-000-sqft` pages return 200 with the correct `<html lang>`, native titles/H1s, self-canonicals and full EN/MS/ZH/x-default hreflang clusters with in-language OfferCatalog, FAQPage and HowTo JSON-LD; MS + ZH House Renovation / Cleaning / Deep Cleaning / Post-Renovation Cleaning indexes link all 4 localized specialties each; unknown MS specialty returns a real 404; sitemap contains exactly 3,520 URLs with 0 duplicates.

### Files
- Modified: `config/specialty-locale-content.ts` (+16 entries), `scripts/validate-specialty-locale.ts` (PRIORITY_KEYS +16), `docs/seo-audit-report.md`, `docs/seo-metadata-inventory.csv`, `docs/seo-metadata-summary.json`, `public/llms-full.txt`, `public/site-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### Session: Problem-page body translations + RelatedProblems locale rendering

Continued exactly from the final **Next Session — START HERE** section. Completed the two non-blocked backlog items:

1. **Translated the 34 remaining problem-page bodies** from `config/problem-data-extra.ts` into native MS and ZH in `config/problem-body-i18n.ts`. Coverage went from **43 → 77 entries** per locale (43 original + 34 extra), covering all problem slugs across Painting, Plumbing, Ceiling, Waterproofing, Handyman, Electrical, Tiling, Flooring, Skim Coat, Roofing, Carpentry, Locksmith, Lighting, Ceiling Fan, Epoxy, Window Repair, Cleaning, Deep Cleaning, Post-Renovation Cleaning, CCTV, Autogate, and Welding. Each entry includes localized symptom, causes[], solutions[], whenToCall[], and one additional local FAQ in the same style as the existing 43 entries. The translations are consumed by `getLocalizedProblemBody()` → `localizeProblemBody()` → `getLocalizedProblem()`, which is used by `LocaleProblemView` to render problem pages in the user's active locale (MS/ZH content appears when visiting `/problems/[slug]` with the site set to MS or ZH).

2. **Improved RelatedProblems rendering on locale specialty pages.** The `RelatedSpecialtyContent` component in `components/sections/locale-specialty-page.tsx` now calls `getLocalizedProblem()` for each related problem, so MS/ZH specialty pages display localized problem titles and symptoms instead of English ones. The links still correctly resolve to `/problems/[slug]` (the EN-only route), where `LocaleProblemView` renders the locale-appropriate content via `useLang()`.

3. **Verified RelatedProblems/RelatedBlogs links across all tranches.** All 77 problem slugs referenced in `topical-authority-map.ts` resolve to pages in `problemPages` + `extraProblemPages` (0 missing). All 17 blog slugs resolve to `blogPosts` + `extraBlogPosts` (0 missing). The cleaning/renovation tranches (`weekly-condo-cleaning-1-000-sqft`, `condo-move-out-deep-clean-1-000-sqft`, `condo-post-renovation-clean-1-000-sqft`, `new-tiles-grout-haze-removal`, `full-house-renovation-package`, etc.) all link to valid, translated problem pages.

#### Verification
- PASS: lint (0 errors/warnings), type-check, topical map (28/28 services; 112 typed specialty relationships), locale gate (112 specialties × MS/ZH = 224 native blocks), i18n parity (1,074 × 3), estimator suite (263,293 assertions) and `npm audit` (0 vulnerabilities).
- PASS: production build (**4,567 static pages generated**), full-corpus HTML audit (**4,559 pages**, 0 fatal / 0 warnings), technical SEO head audit (3,520 self-canonical indexable pages; 0 warnings), metadata consistency SEO audit.

### Files
- Modified: `config/problem-body-i18n.ts` (+34 MS + 34 ZH entries), `components/sections/locale-specialty-page.tsx` (localized RelatedProblems rendering), `docs/seo-audit-report.md`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-12 — problemI18n gap completion (all 77 problems) + RelatedProblems client localization

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section and completed the two non-blocked backlog items. No standalone Air Conditioning content was created.

1. **Completed the remaining `problemI18n` overrides — all 77 problems now carry native MS + ZH metadata.** The 34 problems from `config/problem-data-extra.ts` had body translations (symptom/causes/solutions/whenToCall via `config/problem-body-i18n.ts`) but their **titles, cost ranges and FAQs stayed English** in MS/ZH mode. Added authored native overrides for all 34 (`yellowing-white-walls`, `paint-cracking-hairline-walls`, `leaking-bathroom`, `low-water-pressure`, `clogged-drain`, `toilet-not-flushing`, `sagging-ceiling`, `ceiling-cornice-crack`, `balcony-leak-condo`, `concrete-slab-crack-leak`, `curtain-track-falling`, `door-hinge-sagging`, `old-condo-full-refurbishment`, `power-tripping-frequently`, `water-heater-cold`, `loose-hollow-tiles`, `cracked-tile-grout`, `plaster-ceiling-hairline-crack`, `uneven-wall-surface-skim`, `vinyl-flooring-lifting-edges`, `cracked-roof-tiles`, `cabinet-door-sagging`, `wardrobe-door-jamming`, `digital-smart-lock-installation`, `locked-out-of-house`, `downlight-flickering`, `shower-screen-water-leak`, `stubborn-bathroom-limescale`, `move-out-condo-deep-clean`, `cement-splatter-tile-clean`, `cctv-not-recording-storage-full`, `autogate-remote-not-working`, `loose-metal-gate-hinges`, `stuck-sliding-window`) with native `title` (reusing the hand-written titles from `config/problem-faq-i18n.ts` for consistency), translated `costRange` and all base FAQs translated into natural MS/ZH, phrased distinctly from each body `localFaq` so no duplicate questions render (mirroring the original 43 entries' pattern). `problemI18n` now has 77/77 keys; `getLocalizedProblem()` returns 0 English title/costRange gaps, 0 English FAQ leaks and 0 duplicate FAQ questions across both locales. Because the merge applies `problem-body-i18n` after the override, the 34 new entries intentionally supply only the missing fields — the type was widened to `Partial<LocalizedProblemContent>` to reflect that (documented in `config/problem-data.ts` and `lib/problem-i18n.ts`).

2. **Localized the `RelatedProblems` client component** (`components/sections/related-problems.tsx`, used by service detail pages). It now calls `getLocalizedProblem(problem, lang)` via `useLang()` for every related card, so MS/ZH visitors see native titles, symptoms and cost ranges instead of English (the hardcoded English intro paragraph was replaced with the new trilingual `internalLinks.problemsIntro` message key). Links still resolve to the EN `/problems/[slug]` route where `LocaleProblemView` renders the locale-appropriate full page — same mechanism as the specialty pages.

3. **Localized FAQ hubs now serve native content for all 77 problems.** `/ms/soalan-lazim` and `/zh/chang-jian-wen-ti` previously used translated fallback templates for the 34 (the `problemFaqI18n` path in `lib/faq-directory.ts`); they now emit the real translated FAQs with native source labels.

#### Verification
- PASS: lint (0 errors/warnings), type-check (0 errors), topical map (28/28 services; 112 typed specialty relationships), locale gate (112 specialties × MS/ZH = 224 native blocks), i18n parity (**1,075 keys × 3 locales** — +1 `internalLinks.problemsIntro`), estimator suite (263,293 assertions), `npm audit` (0 vulnerabilities).
- PASS: production build (**4,567 static pages generated** — unchanged route count), full-corpus HTML audit (**4,559 pages**, 0 fatal / 0 warnings), technical SEO head audit (3,520 self-canonical indexable pages; 0 warnings), metadata consistency SEO audit, SEO inventory (4,559 pages).
- Data gate PASS: `problemI18n` covers 77/77 slugs × ms+zh; all localized titles/costRanges differ from English; no duplicate FAQ questions and no English FAQ leakage in either locale.
- Production smoke: `/problems/yellowing-white-walls`, `/problems/autogate-remote-not-working`, `/problems/loose-metal-gate-hinges`, `/problems/stuck-sliding-window`, `/problems/peeling-paint-malaysia`, `/ms/soalan-lazim`, `/zh/chang-jian-wen-ti` and `/faq` all return 200; the MS hub renders native titles such as "Dinding Putih Bertukar Kuning / Krim" and "Engsel Pagar Besi Longgar atau Kendor", and the ZH hub renders the authored native FAQ text (e.g. "通常是廉价油漆（抗紫外线性能差）、厨房油烟、香烟烟雾和日晒共同作用的结果…") alongside the body localFaq questions — no duplicates.

### Files
- Modified: `config/problem-data.ts` (+34 MS + 34 ZH override entries; partial-override type), `lib/problem-i18n.ts` (Partial override type), `components/sections/related-problems.tsx` (client-side localization), `messages/en.json`, `messages/ms.json`, `messages/zh.json` (+`internalLinks.problemsIntro`), `docs/seo-audit-report.md`, `docs/seo-metadata-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-12 (part 2) — Low-inbound link-equity tier: localized specialty pages, cost guides, suburb pages, maintenance hub

**Status:** ✅ COMPLETED

Continued from the roadmap's "Recommended Next Task" tier (low-inbound ≤2 clusters noted in S009) after re-measuring the build with a full-corpus inbound audit. No standalone Air Conditioning content was created.

- **Baseline measurement (production build, full-corpus crawl of 4,559 pages):** 901 pages had ≤2 inbound internal links. Breakdown: **648 `/suburbs/*` pages** (1 inbound each), **224 localized specialty pages** (`/ms/services/*/…` + `/zh/services/*/…` — exactly 1 inbound each, only from their service index), **24 `/services/*/cost` pages** (2 each), plus `/guides/maintenance` (1) and the non-indexable `/ms`, `/zh`, `/_not-found`, `/index` artifacts.
- **Fix 1 — localized specialty pages 1 → 4 inbound (224 pages).** `LocaleSpecialtyPage` now renders a server-rendered "related specialties" section linking the sibling localized specialties of the same service (all 4-specialty services; circular rotation so every page links its 3 siblings). Uses `getSpecialtyLocaleContent()` for native names/taglines and the existing trilingual `serviceDetail.otherServicesHeading/Sub` keys — zero new translation debt.
- **Fix 2 — cost guides 2 → 8–11 inbound (28 pages).** `app/(en)/services/[slug]/cost/page.tsx` now builds circular next-6 sibling cost-guide bundles (`buildServiceLinks`) and `LocaleServiceCostView` renders them client-localized — the same pattern the emergency pages already used.
- **Fix 3 — suburb × service pages ≤2 → 13+ inbound (1,456 pages).** `app/(en)/suburbs/[slug]/[serviceSlug]/page.tsx` now builds circular next-12 sibling-service bundles in the same suburb and `LocaleSuburbServiceView` renders an "Other services near you in {suburb}" block (reusing the trilingual `location.nearMeRelatedHeading/Sub` keys with the suburb name). These pages canonicalise to their `/areas` twin where one exists, so the extra equity flows to the stronger canonical URL too.
- **Fix 4 — `/guides/maintenance` hub 1 → 2 inbound.** The `/guides` index now surfaces the maintenance sub-hub as an explicit card (it was previously only linked from `/seasonal`).
- **Result:** low-inbound (≤2) pages **901 → 4** — only the non-indexable `/_not-found`, `/index` and the noindex `/ms`/`/zh` redirect stubs remain; total internal links **288,425 → 306,738 (+18,313)**; site-wide average 63.26 → 67.28.

#### Verification
- PASS: lint (0 errors/warnings), type-check (0 errors), topical map (28/28 services; 112 typed specialty relationships), locale gate (112 specialties × MS/ZH = 224 native blocks), i18n parity (1,075 × 3), estimator suite (263,293 assertions), `npm audit` (0 vulnerabilities).
- PASS: production build (**4,567 static pages generated** — unchanged route count), full-corpus HTML audit (**4,559 pages**, 0 fatal / 0 warnings), technical SEO head audit (3,520 self-canonical indexable pages; 0 warnings), metadata consistency SEO audit.
- Inbound audit PASS: `ms-services-specialty` 112 pages and `zh-services-specialty` 112 pages each 1 → **4**; cost pages 2 → **8–11**; suburbs 1 → **13–23**; `/guides/maintenance` 1 → **2**.
- Production smoke: MS `interior-house-painting`, ZH `main-gate-fabrication` (sibling specialty links in-language), `/services/painting/cost` (6 related cost guides), `/suburbs/bandar-puteri/autogate` (12 same-suburb service links), `/guides` (maintenance card) and `/guides/maintenance` all 200.

### Files
- Modified: `components/sections/locale-specialty-page.tsx` (related-specialties section), `app/(en)/services/[slug]/cost/page.tsx` + `components/sections/locale-service-cost-view.tsx` (related cost guides), `app/(en)/suburbs/[slug]/[serviceSlug]/page.tsx` + `components/sections/locale-suburb-service-view.tsx` (other services in suburb), `app/(en)/guides/page.tsx` (maintenance hub card), `docs/seo-audit-report.md` (regenerated), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

## Next Session — START HERE

1. **The low-inbound tier is CLOSED: 901 → 4 pages with ≤2 inbound links** (only non-indexable artifacts remain). The remaining in-repo milestone is still **real locale problem routes (154)** — still blocked pending evidence-based consolidation of the 14 problem-overlap groups (GSC data); do not force it.
2. Add real locale problem routes (154) only after the 14 problem-overlap groups are consolidated with evidence; then localize `RelatedProblems`/problem links on localized trees to `/ms/problems/…` and `/zh/problems/…` (they currently point to EN problem pages — documented and still blocked).
3. Optional next in-repo tier (if continuing link equity): the `/estimate/*` share pages (22 pages, ≤3 inbound each) and `/ms/blog/*` + `/zh/bo-ke/*` articles (18 each, avg ~2–16) can be lifted with the same circular-sibling pattern; `/near-me/*` hubs (28 pages, max 8) could go from next-6 to next-12. Confirm current counts with a fresh full-corpus inbound crawl before acting.
4. Obtain business/translator QA for the completed localized specialty pages (224 — the full catalogue) and problem pages (77 × MS + ZH titles/bodies/FAQs) before measuring GSC indexation; this requires an owner/translator and cannot be completed from repository code alone. After QA + deploy, re-measure GSC/Bing coverage of the localized trees and the MS/ZH pilot conversions before the owner-only H3 full-rollout decision.
5. Do not create thin or spun pages; rerun lint, type-check, build, topical-map, specialty-locale, i18n, HTML and SEO audits after any future change. Never create standalone Air Conditioning content.
## Next Session — START HERE

1. **The `problemI18n` gap is CLOSED: all 77 problems now carry native MS + ZH titles, cost ranges and FAQs** (43 original full overrides + 34 new shorter overrides), layered on the complete 77 × MS/ZH body translations. The `RelatedProblems` client component is also localized for MS/ZH mode, and both localized FAQ hubs render native content for every problem. The remaining in-repo milestone is still **real locale problem routes (154)** — still blocked pending evidence-based consolidation of the 14 problem-overlap groups (GSC data); do not force it.
2. Add real locale problem routes (154) only after the 14 problem-overlap groups are consolidated with evidence; then localize `RelatedProblems`/problem links on localized trees to `/ms/problems/…` and `/zh/problems/…` (they currently point to EN problem pages — documented and still blocked).
3. Obtain business/translator QA for the completed localized specialty pages (224 — the full catalogue) and problem pages (77 × MS + ZH titles/bodies/FAQs) before measuring GSC indexation; this requires an owner/translator and cannot be completed from repository code alone. After QA + deploy, re-measure GSC/Bing coverage of the localized trees and the MS/ZH pilot conversions before the owner-only H3 full-rollout decision.
4. Do not create thin or spun pages; rerun lint, type-check, build, topical-map, specialty-locale, i18n, HTML and SEO audits after any future change. Never create standalone Air Conditioning content.

### ✅ Session 2026-08-12 (part 3) — Link-equity tier 2: tool pages, estimator share pages, maintenance sub-hub

**Status:** ✅ COMPLETED

Continued exactly from the final **Next Session — START HERE** section, item 3 (the optional link-equity tier), starting — as that item instructs — with a fresh full-corpus inbound crawl of the production build before acting. No standalone Air Conditioning content was created.

**The fresh crawl corrected two of the roadmap's stale assumptions and surfaced a larger tier it had not listed:**

| Group | Roadmap said | Fresh crawl measured | Action |
| --- | --- | --- | --- |
| `/tools/*` + `/ms/alatan/*` + `/zh/gongju/*` (**90 pages**) | *not listed* | **exactly 3 inbound each** — the largest remaining tier | **Fixed** |
| `/estimate/*` (22) | ≤3 inbound | exactly 3 inbound, 0 sibling links | **Fixed** |
| `/guides/maintenance` (1) | ≤2 (noted in part 2) | 2 inbound | **Fixed** |
| `/ms/blog/*` + `/zh/bo-ke/*` (18 + 18) | "avg ~2–16" | **avg 11.2, min 8** — already healthy | No action needed |
| `/near-me/*` (28) | "max 8" | **7 each**, evenly distributed | No action needed (already circular next-6) |

- **Fix 1 — tool pages 3 → 6–48 inbound (90 pages, the whole EN/MS/ZH tool corpus).** Root cause: the hand-curated `relatedTools` lists in `config/tools-data.ts` are a **star topology** — they point at seven popular tools (`painting-calculator` alone received 34 of the 111 sibling links) and left **30 of 37 estimators with zero sibling inbound links**, reachable only from the tools index and their two locale twins. `ToolPage` now resolves its "Try another estimator" card through a new `relatedToolSlugs()` helper that keeps the curated editorial pairings **first** (painting → wall area, leak triage → plumbing diagnostic are genuinely useful) and tops them up to six from a circular walk of the registry — the same next-N pattern the cost guides, near-me hubs, suburb pages and localized specialty pages already use. Circular selection is what evens the distribution: every tool is the "next" neighbour of exactly six others. Links use the current locale's `toolPath()`, so MS pages link MS siblings and ZH pages link ZH siblings — equity stays inside each language tree. Zero new translation debt (the existing `tryAnotherHeading` key and localized tool names are reused).
- **Fix 2 — `/estimate/*` share pages 3 → 4–9 inbound (22 pages).** These pages linked **no siblings at all**. Added `relatedEstimateLinks()` to `config/estimate-links.ts` (the module that is already the single source of truth for this mapping) using the same circular next-6 walk, and a localized "Try another instant estimator" section to `EstimateSharePage`. Dedicated-tool services link straight to their `resolvedPath` (`/tools/<slug>`), so **0 of the 168 generated related links walk the 301** the short share URL would. Two new trilingual keys (`estimateShare.relatedHeading` / `relatedSub`); i18n parity is now **1,077 × 3**.
- **Fix 3 — `/guides/maintenance` 2 → 12 inbound.** The sub-hub's own ten detail pages never linked back up to it. `GenericContentPageView` now appends a category-hub backlink to the sibling grid, deliberately **only** for hubs that are not already in the global chrome — `/guides/maintenance` is the only such sub-hub, so this adds a link exactly where it carries equity rather than duplicating the sitewide nav on 2,700 pages. Reuses the existing `common.viewAll` key — no new translation debt.
- **Result:** pages with **≤3 inbound links: 116 → 3**; the ≤2 tier holds at **3**. The only pages left in either tier are the non-indexable `/_not-found` and the noindex `/ms` + `/zh` redirect stubs — i.e. **every indexable page on the site now has at least four inbound internal links**. Total internal links **242,603 → 243,099 (+496)**, achieved by redistributing existing link slots rather than bloating pages.

#### Verification
- PASS: lint (0 errors/warnings), type-check (0 errors), topical map (28/28 services; 112 typed specialty relationships), locale gate (112 specialties × MS/ZH = 224 native blocks), i18n parity (**1,077 keys × 3 locales** — +2 `estimateShare.related*`), estimator suite (263,293 assertions), `npm audit` (0 vulnerabilities).
- PASS: production build (**4,567 static pages generated** — route count unchanged), full-corpus HTML audit (**4,559 pages**, 0 fatal / 0 warnings), technical SEO head audit (3,520 self-canonical indexable pages, 3,520 sitemap URLs, 0 duplicate titles/descriptions, 0 warnings), metadata consistency SEO audit, SEO inventory (4,559 pages; 0 titles/descriptions/H1s changed).
- Inbound audit PASS: EN tools 3 → **6–48** (avg 10.5), MS tools 3 → **6–39** (avg 9.0), ZH tools 3 → **6–39** (avg 9.0), `/estimate/*` 3 → **4–9** (avg 7.8), `/guides/maintenance` 2 → **12**.
- Redirect gate PASS: 168 related-estimator links generated, **0** pointing at a 301 redirect slug.
- Production smoke (`next start`): `/tools/roof-area-calculator`, `/tools/socket-quantity-calculator`, `/ms/alatan/kos-handyman`, `/zh/gongju/屋顶面积计算器`, `/estimate/carpentry`, `/estimate/electrical`, `/guides/maintenance`, `/guides/maintenance/condo-maintenance-checklist`, `/tools` and `/estimate` all return 200. Verified MS pages link only `/ms/alatan/*` siblings and ZH pages only `/zh/gongju/*` siblings with native tool names (e.g. 试试其他即时估价器, 地板面积计算器), and that the maintenance detail pages render the "Maintenance Guide — View all" backlink.

### Files
- Modified: `components/tools/tool-page.tsx` (`relatedToolSlugs()` curated + circular ring), `config/estimate-links.ts` (`relatedEstimateLinks()`), `components/estimate/estimate-share-page.tsx` (related-estimator section), `components/content/generic-content-page.tsx` (category-hub backlink), `messages/en.json`, `messages/ms.json`, `messages/zh.json` (+`estimateShare.relatedHeading`/`relatedSub`), `docs/seo-audit-report.md`, `docs/seo-metadata-summary.json`, `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`.

### ✅ Session 2026-08-12 (part 4) — GSC problem-overlap consolidation + real locale problem routes

Owner supplied the GSC Pages/Queries analysis that had been blocking locale problem URLs. Applied the 14-group verdicts (12 301s, KEEP BOTH for B/G/H/I/L and door-scraping-floor). Published **65 indexable EN problem pages** and **130 real `/ms/problems/*` + `/zh/problems/*` pages** with three-way hreflang. Sitemap 3,520 → **3,638**. Build **4,685** routes. Decisions: `docs/problem-overlap-gsc-decisions-2026-08-12.md`.

### ✅ Session 2026-08-12 (part 5) — Locale problem routes content-QA gate

**Status:** ✅ COMPLETED

Continued from the final **Next Session — START HERE** section, item 1's directive: "Further problem-page work is content QA, not more URL multiplication." Published a durable, non-thin content-QA gate for the now-live locale problem routes so no MS/ZH problem page can silently fall back to English, ship duplicate FAQs, or break a redirect. No standalone Air Conditioning content was created.

- **Added `scripts/validate-problem-i18n.ts` (`audit:problem-i18n`, wired into `prebuild`).** For every indexable keep-URL (65) × locale (ms, zh) it enforces: native title (problemI18n override, differs from English), native costRange, native body (`problem-body-i18n` block present with symptom/causes/solutions/whenToCall all differing from the English record), no duplicate FAQ questions, and no English FAQ-question leakage into the localized FAQ list — plus minimal placeholder floors calibrated so dense-CJK copy (e.g. a 14-char complete Chinese symptom) is never false-flagged. It also guards canonical integrity: every indexable slug resolves to itself, every redirect key is a real problem slug, every redirect target exists, is indexable, and is not itself redirected (no chains/cycles), and every `problemPages` record is accounted for (indexable or redirected).
- **Verified the 65 indexable problem pages × 3 locales.** 65 EN + 65 MS + 65 ZH static pages generated; the 12 redirected near-duplicates are not SSG'd and 301 (EN/MS/ZH) at runtime. Production smoke (`next start`) returned 200 for `/problems/yellowing-white-walls`, `/ms/problems/yellowing-white-walls`, `/ms/problems/autogate-remote-not-working`, `/zh/problems/peeling-paint-malaysia`, `/zh/problems/loose-hollow-tiles` and `/zh/problems/推拉窗卡住或滑动不畅`, with native `<html lang="ms-MY|zh-MY">`, native H1s (e.g. "Dinding Putih Bertukar Kuning / Krim", "马来西亚房屋油漆剥落"), full `hrefLang="en-MY/ms-MY/zh-MY/x-default"` clusters, and 0 English-text leaks on the rendered pages.

#### Verification
- PASS: `audit:problem-i18n` — 65 indexable keep-URLs × ms/zh, 12 redirected near-duplicates excluded, 0 native-content gaps / 0 English leaks / 0 duplicate FAQs.
- PASS: lint (0 errors/warnings), type-check (0 errors), topical map (28/28; 112 typed relationships), specialty locale gate (112 × MS/ZH = 224 native blocks), i18n parity (**1,077 keys × 3 locales**), estimator suite (**263,301 assertions**), `npm audit` (0 vulnerabilities).
- PASS: production build (**4,677 static pages**), full-corpus HTML audit (**4,677 pages, 0 fatal / 0 warnings**), technical SEO head audit (**3,638 self-canonical indexable**, 3,638 sitemap URLs, 0 duplicate titles/descriptions, 0 warnings).
- Production smoke: locale problem pages 200 with native content + three-way hreflang; redirected near-duplicates return 301 (not SSG'd).

### Files
- Added: `scripts/validate-problem-i18n.ts`
- Modified: `package.json` (+`audit:problem-i18n`, added to `prebuild`), `AI_OPTIMIZATION_ROADMAP.md`, `SESSION_LOG.md`

## Next Session — START HERE

1. **Locale problem content-QA is now a wired-in build gate** (`audit:problem-i18n`): all 65 indexable keep-URLs × ms/zh verified native (0 English leaks, 0 duplicate FAQs) and the 12 redirected near-duplicates excluded. Do not recreate the redirected slugs. Do not add more problem URL multiplication — further problem-page work is content QA on top of the gate.
2. Obtain business/translator QA for the 224 localized specialty pages and 65 × MS/ZH problem pages. After QA + deploy, re-measure GSC/Bing (especially the 12 301s and the new MS/ZH problem URLs) before the owner-only H3 full-rollout of remaining trees.
3. Owner-only: production `NEXT_PUBLIC_GA_ID`, `ADMIN_PASSWORD`, GBP / IndexNow / Bing pings. Do not invent a measurement ID.
4. Do not create thin or spun pages. Rerun lint, type-check, build, topical-map, specialty-locale, i18n, problem-i18n, HTML and SEO audits after any future change. Never create standalone Air Conditioning content. Do not re-open the closed ≤3 inbound link-equity tier without a fresh crawl that shows a starved group.
