# PROMPT TEMPLATE — KL Servis Rumah Continue Session

(Yeh prompt har session shuru karte waqt copy-paste karein)

---

## Current State (Update this each session)

> **BP-1 PHASE 1 COMPLETE (2026-08-28):** Part 1 Critical #1/#2 are closed —
> 2,146 duplicate programmatic URLs (1,073 `/areas/<a>/<svc>/near-me` + 1,073
> `/suburbs/<twin>/<svc>`) are now **301s instead of pages**. Built HTML
> 5,815 → **3,669**; sitemap 4,739 → **3,666**; cross-page canonicals 1,073 → **0**.
> Read `docs/full-website-deep-audit/TRACKING.md` first — it is the authoritative
> status board; `docs/full-website-deep-audit/BP-1-PHASE-1-REPORT.md` and
> `docs/full-website-deep-audit/FIX-WAVE-3-REPORT.md` have the full evidence,
> the post-deploy GSC/Bing checklist, and the schema-size gate.
>
> **Next session starts at:** **BP-1 phase 2** — the demand-backed keep-list for
> the remaining 1,073 `/areas/<area>/<svc>` pairs + authored local copy for the
> kept set. **Blocked on GSC data (owner).** If GSC is still unavailable, take
> **CF-4** (rate-book → `/services/<svc>/cost` merge; evaluate `/estimate/*`),
> then **P3-01** (BM/ZH English leaks + prebuild leak validator), then
> **P2-C3/P2-C4** (content pods + pair-copy generator). P5-04, P5-06, P5-07 and
> P5-10 are all ✅ complete (Fix Wave 3) and enforced by `npm run
> audit:schema-size`. Do **not** add more location pages. Do **not** re-add
> `app/(en|ms|zh)/loading.tsx`. Do **not** delete local pages on low traffic alone.

**Branch:** arena/01a04a81-klservisrumah-web (this session branch — push PRs from here)
**Last completed session:** 2026-08-28 — Fix Wave 3 ✅ (P5-04 schema slim
62.2→14.5 MB, P5-06 HowTo, P5-07 Speakable, P5-10 breadcrumbs +256 pages,
new `audit:schema-size` gate)

**Quality gates (must all be green before any new work).**
Numbers are the *measured* output of each command on this branch — update them
when the corpus changes, don't carry stale values forward:

- [ ] npm run lint — 0 errors, 0 warnings
- [ ] npm run type-check — PASS
- [ ] npm run build — SUCCESS (3,669 HTML; middleware 35.4 kB)
- [ ] npm run audit:bp1 — PASS (**run after build**; 2,146 retired URLs, 0 regenerated)
- [ ] npm run seo:audit — PASS
- [ ] npm run audit:html — 0 fatal / 0 warnings (3,669 pages)
- [ ] npm run audit:links — 277,711 rendered + 53 source links, 0 broken
- [ ] npm run audit:seo-head — PASS (3,666 self-canonical, 0 canonicalized, 0 dupes)
- [ ] npm run audit:i18n — 1,104 keys × 3, 0 missing
- [ ] npm run audit:topical-map — 29/29 services, 222 relationships
- [ ] npm run audit:specialty-locale — 222 × MS/ZH = 444 blocks
- [ ] npm run audit:specialty-coverage — 222 subservices across 29 services
- [ ] npm run audit:service-i18n — 29 services
- [ ] npm run audit:problem-i18n — 74 keep-URLs × MS/ZH, 12 redirects excluded
- [ ] npm run audit:client-bundle — 217 client modules, 0 heavy registries
- [ ] npm run audit:location-similarity — all layers < 70%; near-me layer = 0 pages
- [ ] npm run test:estimators — 320,331 assertions, 0 failures
- [ ] npm audit — 0 vulnerabilities

---

## What Is COMPLETED (Do NOT redo)

### BP-1 phase 1 (2026-08-28) — DONE — `docs/full-website-deep-audit/BP-1-PHASE-1-REPORT.md`
- 1,073 `/areas/<area>/<svc>/near-me` pages **deleted**; 301 → `/areas/<area>/<svc>`
- 1,073 `/suburbs/<twin>/<svc>` pages **no longer generated**; 301 → `/areas/<twin>/<svc>`
- 15 non-twin suburbs × 29 = 435 `/suburbs/...` pages **kept** (self-canonical)
- 30 `/near-me` + `/near-me/<svc>` geo-hubs **kept**
- Near-me Q&A **absorbed** into the parent (visible + FAQPage 3 → 6 Questions)
- Sitemap 4,739 → 3,666; `audit:seo-head` canonicalized pages 1,073 → 0
- All internal links retargeted via `suburbServicePath()` — 0 links into retired URLs
- New: `scripts/generate-bp1-map.ts` (in `prebuild`/`predev`) → `config/suburb-twin-slugs.generated.ts`
- New: `scripts/bp1-consolidation-audit.ts` → `npm run audit:bp1` (`--source-only` runs in `prebuild`, so **CI already enforces the source-level gate**)
- ⚠️ **Owner action left open:** add `npm run audit:bp1` as a post-build CI step —
  `git apply docs/full-website-deep-audit/BP-1-ci-audit-bp1.patch`. The push was
  rejected because this session's GitHub App token lacks the `workflows`
  permission; the commit was reverted and the change saved as that patch.

### Deep Audit Fix Wave 1 (2026-08-28) — DONE
- P2-C2 `content.relatedReading` H2 leak — DONE
- P2-14 near-me breadcrumb/schema label — DONE
- C7/P5-08 unit-bearing prices + UnitPriceSpecification — DONE
- P5-01 single `#organization` business entity — DONE
- P5-03 tool AggregateRating removed; getReviewSchema retired — DONE
- P5-05 blog author → Organization — DONE
- P5-11 homepage depth-1 breadcrumb removed — DONE
- CF-1 28 blog↔sub-service H1 twins retargeted — DONE
- Report: `docs/full-website-deep-audit/FIX-WAVE-1-REPORT.md`

### Critical / High fixes (all done)
- Admin auth: server-side HMAC-SHA256 cookie auth (C1) — DONE
- WCAG colors: original #25D366/#0EA5E9 restored per owner (H1/H1b business override) — DONE
- Error observability: /api/error-log + error reporter (M1) — DONE
- Dead deps removed: react-hook-form, zod, @hookform/resolvers, tailwind-merge (M2) — DONE
- Service count dynamic: 28+ on homepage + /about (M3) — DONE
- CSP + COOP + CORP headers (N8) — DONE
- Canonical/hreflang consistency: 0 defects across all pages (N10) — DONE
- Internal linking: orphans 1,077→0, broken targets 6→0, +48k links (N3–N7) — DONE
- Low-inbound tiers: all ≤3 inbound tiers closed (N13–N18, tool pages, estimate pages, maintenance) — DONE
- 404 page: own metadata, no canonical/hreflang (N1) — DONE
- MS/ZH chrome localized: navbar/footer/CTAs in-language (N20) — DONE
- <html lang> correct on all 112 MS/ZH pages (N19) — DONE
- WhatsApp locale-aware messages (N11) — DONE
- Exit-intent modal a11y (A1) — DONE
- Trilingual parity on booking/estimator surfaces (M9/N9) — DONE

### Content — all done
- Smart Service Finder: Phases 1–12, 30 entities, 77 problems, 36 calculators, trilingual, GA4 events wired — DONE
- Locale specialty tranche: all 112 specialties × MS + ZH = 224 pages — DONE
- Problem i18n: 77 × MS + ZH titles/costRanges/FAQs — DONE
- Problem body i18n: 77 × MS + ZH bodies — DONE
- Locale problem routes: 65 keep-URLs × MS + ZH = 130 pages + 12 redirects — DONE
- Trilingual content QA: 354-page report applied — DONE

### Never do these
- ❌ Never create standalone Air Conditioning content (owner confirmed not offered)
- ❌ Never invent or commit NEXT_PUBLIC_GA_ID, ADMIN_PASSWORD, or any credential
- ❌ Never re-open closed link-equity tiers without fresh crawl evidence
- ❌ Never mass-generate thin/spun pages
- ❌ **Never re-create `app/(en)/areas/[slug]/[serviceSlug]/near-me/page.tsx`** or let the suburb route generate `/areas`-twin suburbs — `npm run audit:bp1` exists to catch exactly that
- ❌ **Never hand-edit `config/suburb-twin-slugs.generated.ts`** — run `npm run gen:bp1-map` (it is in `prebuild`; the gate fails if it drifts)
- ❌ **Never link directly at `/suburbs/<slug>/<svc>`** — use `suburbServicePath()` from `lib/bp1-consolidation.ts` (37 of 52 suburbs live at `/areas/…`)
- ❌ **Never change the `:service:` literal in `areaPairCopy()`'s hash seed** (`lib/location-pair-copy.ts`) — it decides landmark/sub-service rotation on all 1,073 kept `/areas` pair pages
- ❌ Never delete local pages on low traffic alone — Part 1 §1.3 requires demand/unique-value evidence (GSC)

---

## What Remains — OWNER-SIDE TASKS (cannot be done from repo)

> **Step-by-step guide:** all owner-side tasks (these six + the awning
> business confirmations) are consolidated with exact numbered steps,
> priorities and a fill-in answer sheet in **`OWNER_ACTION_PLAN.md`** —
> that file is the current authoritative hand-off document.

These require owner access to external services. I can guide but not execute.

### 1. ~~NEXT_PUBLIC_GA_ID in Vercel~~ → moved to OWNER_ACTION_PLAN.md §B3 (deferred by owner 2026-08-27)
**Status:** Blocked — needs owner Vercel access
**What to do:**
1. Go to https://analytics.google.com/ — create GA4 property for klservisrumah.my
2. Copy the measurement ID (format: G-XXXXXXXXXX)
3. Go to Vercel → project settings → Environment Variables
4. Add: NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
5. Redeploy production
6. After deploy: verify GA4 DebugView shows smart_finder_* events
**I cannot do:** Access Vercel or Google Analytics
**Note:** The Smart Service Finder's 7 analytics events are already wired (lib/analytics.ts + smart-service-finder.tsx) — they dual-deliver to dataLayer (GTM) and gtag (GA4). They fire only when NEXT_PUBLIC_GA_ID is set.

### 2. ~~ADMIN_PASSWORD in Vercel~~ — REMOVED (2026-08-27, owner decision)
**Status:** Done differently — the entire admin area was deleted (routes, API,
components, auth libs, middleware gate). No password env var is needed or used
anymore. See OWNER_ACTION_PLAN.md §B1. Do NOT reintroduce an admin surface or
resurrect the burned KL2024Admin password.

### 3. GBP / IndexNow / Bing post-deploy pings
**Status:** Blocked — needs owner access to external services
**Google Business Profile (GBP):**
1. Log into Google Business Profile
2. Verify website URL is klservisrumah.my
3. Update/post to trigger re-crawl if needed
**IndexNow:**
1. Set INDEXNOW_SECRET in Vercel env vars (the site's app/api/indexnow/route.ts already handles it)
2. After deploy, ping https://api.indexnow.org/indexnow with POST body of new URLs
3. The sitemap (3,638 URLs) covers most URLs; IndexNow is for immediate ping
**Bing Webmaster:**
1. Log into Bing Webmaster Tools
2. Verify site ownership
3. Submit sitemap: https://www.klservisrumah.my/sitemap.xml
4. Monitor crawl stats
**I cannot do:** Access GBP, Bing, or external APIs without credentials

### 4. Native speaker final skim + live URL crawl
**Status:** Blocked — needs human speakers
**What to do:**
1. Find a native Malay speaker → review /ms/ pages (especially: services, problems, specialties)
2. Find a native Chinese speaker → review /zh/ pages
3. They check: natural language, correct terminology, no awkward phrasing, no English leaks
4. Exhaustive live crawl of all canonical localized URLs (3,638 indexable pages)
**I cannot do:** Be a native speaker or crawl live production

### 5. Deploy + GSC/Bing re-measurement
**Status:** Blocked — needs deployment + GSC access
**What to do:**
1. Deploy to Vercel production (git push → auto-deploy, or manual trigger)
2. Go to Google Search Console
3. Check "Pages" report: new MS/ZH URLs should start appearing
4. Check "Indexing" report: verify the 12 problem 301s are processed correctly
5. Check the 130 new MS/ZH problem URLs for indexing
6. Check Bing Webmaster for similar data
7. Wait 1–4 weeks for crawl cycle to complete
**I cannot do:** Access Vercel, GSC, or Bing Webmaster

### 6. H3 full-rollout decision
**Status:** Blocked — owner decision
**What to do:**
1. After measuring pilot data (indexation + conversions for 4–8 weeks)
2. Decide: full rollout (~8k more pages: areas/suburbs/problems/generic × 2 locales) or stop at pilot
3. Full rollout triples build time and requires ongoing translation QA
**I cannot do:** Make business decision

---

## What I CAN Do (development work)

These are tasks I can execute from the repo:

1. **Continue content work** — new services/specialties/problems (if approved by owner)
2. **Fix bugs** — any issues found during review or crawl
3. **Add features** — within the existing architecture
4. **Run audits** — any of the npm run audit:* commands
5. **Regenerate artifacts** — llms-full.txt, site-summary.json, seo-audit-report.md (via build)
6. **Update the roadmap** — AI_OPTIMIZATION_ROADMAP.md and SESSION_LOG.md

---

## Quick Reference — Key Files

| File | Purpose |
|------|---------|
| `AI_OPTIMIZATION_ROADMAP.md` | Single source of truth — read this first |
| `docs/full-website-deep-audit/TRACKING.md` | **Authoritative status board** — read first, update last |
| `docs/full-website-deep-audit/BP-1-PHASE-1-REPORT.md` | BP-1 phase 1 evidence + post-deploy GSC/Bing checklist |
| `docs/full-website-deep-audit/FIX-WAVE-1-REPORT.md` · `FIX-WAVE-2-REPORT.md` | Fix-wave evidence |
| `lib/bp1-consolidation.ts` | **Only** place that decides which programmatic URL is retired, and where it 301s |
| `config/suburb-twin-slugs.generated.ts` | Generated consolidation map (do not hand-edit) |
| `SESSION_LOG.md` | Permanent session history |
| `📄 MASTER_AI_AGENT_INSTRUCTIONS.md` | Master instructions — rules for every session |
| `KLServisRumah-Complete-Forensic-Audit.md` | Original audit (source baseline) |
| `docs/TRANSLATOR_QA_PROMPT.md` | Translator guidance |
| `docs/UPGRADE-CHECKLIST.md` | Upgrade checklist |
| `docs/canonical-painting-ceiling-decisions.md` | Canonical decisions |
| `docs/problem-overlap-gsc-decisions-2026-08-12.md` | GSC overlap decisions |
| `docs/TRILINGUAL_CONTENT_QA_2026-08-12.md` | 354-page QA report |
| `docs/service-architecture-multilingual-audit-2026-08-09.md` | Full audit |
| `docs/schema-validation-log.md` | Schema validation log |
| `docs/seo-audit-report.md` | Current SEO audit (regenerated by build) |

---

## Verification Command (run after any change)

```bash
# Source gates (fast — no build needed)
npm run lint && npm run type-check && npm run audit:i18n && \
npm run audit:topical-map && npm run audit:specialty-locale && \
npm run audit:specialty-coverage && npm run audit:service-i18n && \
npm run audit:problem-i18n && npm run audit:client-bundle && \
npm run test:estimators && npm audit

# Build, then the corpus gates (these need .next/server/app to exist)
npm run build && npm run audit:bp1 && npm run audit:schema-size && \
npm run audit:html && npm run audit:links && npm run audit:seo-head && \
npm run audit:location-similarity && npm run seo:audit
```

`npm run audit:bp1` has two modes: plain = source + built-corpus checks (run it
**after** `npm run build`); `npm run audit:bp1 -- --source-only` = source checks
only, which is what `prebuild` runs.

All must pass before marking anything complete.
