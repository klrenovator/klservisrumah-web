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

- ✅ **[2026-08-07 / S001] H1. WCAG AA contrast failure — white text on `#25D366` WhatsApp green (1.98:1; needs ≥4.5:1)**
  - 47 files used bright `#25D366` behind white button text, including the sitewide sticky mobile WhatsApp bar (primary conversion element).
  - **Fix:** button text-bearing surfaces moved to darker accessible WhatsApp green `#15803D` (5.01:1, AA ✓) with hover `#166534` (7.13:1, AAA ✓); `text-[#25D366]` (1.98:1 on white) → `text-[#15803D]`. Decorative/icon uses (pulse dot, shadows, white-filled icons whose shape is carried by the white fill) evaluated individually and kept on-brand; AA shades recorded as tokens in `config/site.ts` (`buttonGreen`/`buttonGreenHover`).
- ✅ **[2026-08-07 / S001] H1b (NEW, found during this session's independent audit). The same WCAG failure existed across the sky-blue button family**
  - The audit tabled `#0284C7` at 4.10:1 but prescribed no fix; small white text (`text-xs`/`text-sm`, incl. the sticky mobile bar's Call half and the booking form's continue button) fails strict AA at both 2.77:1 (`#0EA5E9`, incl. `.btn-primary`) and 4.10:1. 235 × `text-[#0EA5E9]` + 32 × `text-[#0284C7]` sitewide also failed (bright sky text fails even the 3:1 large-text bar at 2.77:1).
  - **Fix:** systematic token migration — `bg-[#0EA5E9]`/`bg-[#0284C7]` text-bearing fills → `#0369A1` (5.94:1 AA ✓); hovers → `#075985` (7.56:1 AAA ✓); all `text-[#0EA5E9]`/`text-[#0284C7]` → `text-[#0369A1]`; `.btn-primary`/`.btn-whatsapp` globals updated; white-text gradient CTA endpoints `to-[#0EA5E9]`→`to-[#0369A1]`; checkbox indicators → `#0369A1`; the one dark-hero eyebrow chip (HomeCTA, navy background) → `text-[#BAE6FD]` (5.70:1 ✓); decorative tints/dots/blurs untouched. Context analysis (light vs dark surface) performed for every occurrence before changing it.
- 🟡 **H2. `/faq` and ~42 other pages over 256KB raw HTML (up to ~3MB)**
  - Status: **verified pre-mitigated; remainder 🔒 deliberate product decision.** Session 001 measurements (`next start` production server): `/faq` = 3.65 MB raw → **254 KB gzipped** on the wire (MS: 229 KB, ZH: 233 KB). The directory is server-rendered with native `<details>` accordions; the client search filter reads the live DOM, so the ~560-Q&A dataset is NOT duplicated into the client JS bundle or RSC props. The remaining raw size is intentionally-indexable content server-rendered for SEO/AEO. Paginating would trade indexable content for bytes — prior documented decision (`docs/bing-site-scan-2026-08-03.md`) is to keep it. Revisit **only** after real PageSpeed Insights/CrUX field data demonstrates actual CWV harm (measured, not estimated).
- 🔒 **H3. Trilingual architecture gives MS/ZH content no separate crawlable URLs (~97% of page count)**
  - `/ms/*` and `/zh/*` deep paths 301 → EN (client-side language switch at one canonical URL). Only 6 real localized subtrees exist (`/ms/alatan`, `/zh/gongju`, `/ms/blog`, `/zh/bo-ke`, `/ms/soalan-lazim`, `/zh/chang-jian-wen-ti`).
  - **Why blocked:** generating ~4,100 pages × 2 locales at build time is a strategic project (build cost ×3, translation quality gate, Google scaled-content risk). Requires an explicit owner go/no-go with budget. Options analysis recorded in Session 001 notes.
  - Session 001: verified the hreflang/sitemap behavior is coherent for the current one-URL model (self-consistent, no conflicting signals); deepened the 6 real localized trees is the safe incremental path.

### 🟡 Medium

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

### 🟢 Low

- ✅ **[2026-08-07 / S001] L1. Stale `public/robots.txt`** shadowed by `app/robots.ts` (misleading to future readers) — **deleted** (confirmed inert: App Router `robots.ts` wins; no `output: "export"`).
- ✅ **[2026-08-07 / S001] L2. Misplaced doc comment in `lib/utils.ts`** — the `toIsoDate` block sat above `warrantyLead`; **moved** to the correct function.
- ✅ **[2026-08-07 / S001] L3. Hardcoded magic fallback date `"2026-07-24"` in `toIsoDate`** — **replaced** with named, documented constant `DEFAULT_CONTENT_DATE` (deliberately NOT auto-computed: a daily-shifting `dateModified` erodes schema trust signals; constant updated on content releases).

---

## Phase 2 — Sessions

### ✅ Session 001 — 2026-08-07 (this session)
Objectives: scaffolding + full re-verification + fix all 🔴 and as many 🟠/🟡/🟢 as safely possible.
Completed: Phase 0, C1, H1, M1–M5, M7, L1–L3, plus verification suite (lint / type-check / build / estimator tests / SEO snapshot).
Remaining: H2 partial (field-data gated), H3 🔒 owner decision, M8 deferred.

---

## Phase 3 — Backlog (post-critical roadmap)

Priority-ordered remaining work:

### 🟠 High
1. 🔒 **H3 go/no-go**: owner decision on genuine per-locale SSG (`/ms/services/*`, `/zh/services/*`). Recommended intermediate step (no decision needed): extend the 6 proven real localized trees with the highest-traffic service pages only (top ~10 services × 2 locales) as a pilot measuring indexation + conversions before committing to 8k pages.
2. 🟡 **H2 field-data checkpoint**: once CrUX/PageSpeed field data exists for `/faq` (needs live traffic), decide paginate/lazy-by-category vs keep. Do not act before real data.
3. ⬜ **Set `ADMIN_PASSWORD` + confirm `INDEXNOW_SECRET`/`CRON_SECRET`/`GOOGLE_API_KEY` env vars in production** (owner action in Vercel; cannot be done from the repo). Rotate the burned `KL2024Admin` everywhere else it may have been reused.

### 🟡 Medium
4. ⬜ Extend real localized content depth: MS/ZH contact & booking chrome parity audit (forms, calculator output language consistency).
5. ⬜ Google Business Profile + IndexNow + Bing Webmaster post-deploy ping confirmation (owner-side, flagged in prior docs).
6. ⬜ Consolidate `config/` families at a content-migration milestone (M8).
7. ⬜ Optional: wire Sentry (or similar) **if** Vercel-log-based error beacon proves insufficient once traffic grows (M1 implemented the zero-cost baseline).

### 🟢 Low
8. ⬜ Visual QA pass on real devices (no renderer available in sandbox): spot-check the 3 fluid components + WhatsApp CWA states on small phones.
9. ⬜ Periodic `npm outdated` / `npm audit` hygiene (last run: Session 001 — see SESSION_LOG).

### Long-term opportunities (not defects)
- Grow the 6 real localized trees (proven pattern) as the de-facto expansion path for MS/ZH search visibility.
- Content velocity for AEO: `llms.txt`/`aeo-faq.txt` already generated — keep the generator scripts wired into `prebuild` (they are).
- Consider lightweight review-collection pipeline feeding the testimonials schema.

---

## Rules for every future session
1. Read this file + `SESSION_LOG.md` + the two master docs **before** changing anything.
2. Continue from the highest-priority ⬜ / 🟡 item. Never redo ✅ items.
3. 🔒 items require owner input — document, do not silently force.
4. After every fix: run `npm run lint`, `npm run type-check`, `npm run build` (+ relevant generators/tests) before marking ✅.
5. Append to `SESSION_LOG.md` at session end. Never overwrite history.
