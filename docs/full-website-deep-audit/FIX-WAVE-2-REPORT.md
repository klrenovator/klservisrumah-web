# FIX WAVE 2 — Content inside `<main>` + visible FAQ HTML

**Date:** 2026-08-28  
**Branch:** `arena/01a04976-klservisrumah-web`  
**Source:** `TRACKING.md` next-session pointer after Fix Wave 1.

> All five audit parts were already complete (PRs #170–#175). Fix Wave 1 closed
> the schema/copy quick wins. This wave closes the two remaining **P0 structural**
> items that JS-less crawlers actually see.

---

## COMPLETED ✅ this session

| ID | Fix | Evidence / change | Files |
|---|---|---|---|
| **C2 / P2-C1 / P4-01** | Real page content inside `<main>` (was “Loading…” then H1 after `</footer>` on 5,815 pages) | Deleted `app/(en\|ms\|zh)/loading.tsx` (Suspense fallback occupied `<main>`). Static-imported `EstimateSharePage` (the 22 `/estimate/*` pages still streamed H1 after footer via `next/dynamic` + loading). Guard comments on `SiteChrome` + `LoadingSkeleton`. New `audit:html` checks: `main-loading-shell`, `h1-outside-main`, `h1-after-footer`. | `app/(en\|ms\|zh)/loading.tsx` (deleted), `app/(en)/estimate/[slug]/page.tsx`, `components/layout/site-chrome.tsx`, `components/loading-skeleton.tsx`, `scripts/html-quality-audit.ts` |
| **P5-02** | FAQPage markup must match visible HTML (~1,131 pages) | New `VisibleFaqList` (`<details>` + `.faq-answer`). Homepage uses `HOMEPAGE_FAQS` (same array as JSON-LD). Cost + emergency pass `faqs` into the locale views. Near-me renders the 3 i18n Q&As that already sat in FAQPage schema. | `components/content/visible-faq.tsx`, `app/(en)/page.tsx`, `locale-near-me-view.tsx`, `locale-service-cost-view.tsx`, `locale-service-emergency-view.tsx`, cost/emergency pages, `messages/{en,ms,zh}.json` |
| **P3-11** | Homepage + FAQ-hub accordion answers were `{isOpen && …}` | `FAQAccordion` rewritten to native `<details>`; answers always in SSR HTML. | `components/sections/faq-accordion.tsx` |
| **P3-02** | `/faq` (and MS/ZH twins) had no FAQPage JSON-LD | `getFAQSchema(faqsByLang.{en,ms,zh})` on the three hubs. Data lives in a server-safe module (`config/hub-faqs.ts`) so schema is not imported from a `"use client"` file. | `config/hub-faqs.ts`, `app/(en)/faq/page.tsx`, `app/(ms)/ms/soalan-lazim/page.tsx`, `app/(zh)/zh/chang-jian-wen-ti/page.tsx` |

### Verification (production build, 5,815 HTML files)

| Check | Result |
|---|---|
| `npm run lint` | PASS (0 errors, 0 warnings) |
| `npm run type-check` | PASS |
| `npm run build` | SUCCESS (5,823 routes) |
| `npm run audit:html` | **0 fatal / 0 warnings** (new landmark-order checks included) |
| `npm run audit:i18n` | PASS (**1,112 keys × 3** — +2 `costPage.faqHeading` / `emergencyPage.faqHeading`) |
| `npm run test:estimators` | PASS (320,331 assertions) |
| `npm audit` | 0 vulnerabilities |
| Corpus: loading-only `<main>` | **0 / 5,815** |
| Corpus: H1 outside `<main>` | **0 / 5,815** |
| Corpus: H1 after `</footer>` | **0 / 5,815** |

Spot-checked static HTML:

| URL | H1 in `<main>` | `<details>` / `.faq-answer` |
|---|---|---|
| `/` | yes (hero H1; main text ~28k chars) | 6 / 6 (`HOMEPAGE_FAQS`) |
| `/faq` | yes | 109 details (hub accordion + directory); 5 `.faq-answer` on hub accordion |
| `/ms/soalan-lazim` | yes | 109 / 5 |
| `/zh/chang-jian-wen-ti` | yes | 109 / 5 |
| `/services/painting/cost` | yes | 4 / 4 |
| `/services/painting/emergency` | yes | 3 / 3 |
| `/areas/kuala-lumpur/painting/near-me` | yes | 3 / 3 |
| `/estimate/electrical` | yes (was the last hold-out cluster) | n/a |

---

## Root causes (do not reintroduce)

1. **Route-group `loading.tsx` under `SiteChrome`.** Next.js wraps `{children}` in Suspense *inside* the client `Providers` tree. The fallback (“Loading…” / `Memuatkan…` / `加载中…`) is what crawlers got in `<main>`; the real page (including the H1) streamed after `</footer>`. Nested `loading.tsx` at the same segment would regress all 5,815 pages.
2. **`next/dynamic(..., { loading })` around a component that owns the H1.** Same Suspense pattern on the 22 generic `/estimate/<slug>` pages after the root loading files were gone.
3. **FAQ answers gated on `{isOpen && …}`** and FAQPage JSON-LD emitted for pages that never rendered the Q&As. Google’s FAQ rich-result policy requires the marked-up answers in the visible HTML.

`components/loading-skeleton.tsx` is retained for *manual* use only. It must not be mounted via a SiteChrome-level `loading.tsx`.

---

## NOT done this session (still ⏳ PENDING)

| Item | Why not done now |
|---|---|
| **BP-1** — near-me → parent 301s + stop suburb-twin SSG (Part 1 Critical #1/#2) | Largest remaining architecture change; needs 301 map + sitemap + GSC plan. **Next session starts here.** |
| P5-04 areaServed slim | Pairs with P5-01 (already done) |
| P5-10 breadcrumbs on pods | Template work after BP-1 |
| CF-4 cost → rate-book | Content rewrite |
| P3-01 BM/ZH English leaks | Copy QA |
| Owner-blocked | GSC, www 301, CWV, GBP/reviews, photography, founding/staff |

---

## NEXT SESSION MUST CONTINUE HERE

1. **BP-1 phase 1** — near-me → parent 301s + stop suburb-twin static generation (Part 1 Critical #1/#2). Do not add more location pages.
2. Then: P5-04 areaServed slim, P5-10 breadcrumbs on pods, CF-4, P3-01.
3. Re-request owner access: GSC, live edge www/non-www, CWV, GBP/reviews, founding/staff facts, photography (P5-12).

---

## Problem → Fix ledger (this wave only)

### C2 / P2-C1 / P4-01 — content after footer / empty `<main>`
- **Problem:** JS-less crawlers saw `<main>` = “Loading…”; H1 and body after `</footer>` on **5,815 / 5,815** pages. Skip-link, landmark nav, and AI extraction all broken.
- **Severity:** CRITICAL (highest-leverage structural fix in the whole audit).
- **Fix:** remove route-group loading files; static-import estimate share page; lock the invariant in `SiteChrome` + `audit:html`.
- **Status: ✅** (corpus 0 / 5,815 remaining)

### P5-02 / P3-11 / P3-02 — FAQ visibility
- **Problem:** FAQPage JSON-LD on homepage, 1,073 near-me, 29 cost, 29 emergency pages whose answers were not in HTML; homepage + `/faq` hubs hid answers behind client state; `/faq` had no FAQPage schema.
- **Severity:** HIGH (rich-result ineligibility + AEO).
- **Fix:** always-in-HTML `<details>` lists matching the schema arrays; hub FAQPage JSON-LD.
- **Status: ✅**
