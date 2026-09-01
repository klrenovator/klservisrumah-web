# Fix Wave 29 — Production 500s on Dynamic Routes + Cross-Tree Hub Link Leaks (2026-09-01)

> Scope: Wave 28 added external live-production verification and caught href-attribute
> leaks (wa-prefill, cross-tree links). This session extended the same probe technique to
> the two routes every crawler/social fetcher depends on — `/sitemap-news.xml` and
> `/og-image` — and found **intermittent production HTTP 500s** on both, plus a
> **sitewide cross-tree hub link leak class** that the new Wave-28 gate did not yet cover
> (navbar primary links and the mobile drawer, not just footer/tools/service pages).
> Both defect classes are fixed, permanently gated, fully validated, committed and pushed.
> No owner facts were invented; every owner-blocked row remains untouched.

---

## 1. Problem table

| # | Problem | Source | Severity | Cause | Action |
|---|---|---|---|---|---|
| W29-1 | `/sitemap-news.xml` intermittently returns HTTP 500 in production | Live probes: fetch_page ×2 → 500; allorigins → 200 after 5,118 ms then 522 timeouts | **HIGH** (news sitemap unreachable for crawlers; Google News freshness signal lost) | Route declared `revalidate = 3600` **and** `dynamic = "force-dynamic"` — Next 15.5 generated a heavy serverless lambda (~7.3 MB, bundling the 2.9 MB `blog-production.generated.json` + full MS/ZH blog corpus) that cold-started slowly and intermittently failed on Vercel Hobby | **FIXED** — `force-static` with build-time 48h filtering; the site ships content exclusively through rebuilds (100% SSG), so build-time freshness == publish-time freshness. Now a static CDN file (prerender-manifest shows STATIC route) |
| W29-2 | `/og-image` intermittently returns HTTP 500 in production | Live probes: fetch_page ×2 → 500; allorigins → 200 PNG (5,118 ms) then 500 | **HIGH** (nearly every page's `og:image` points here; WhatsApp/Facebook/Telegram previews break sitewide) | Node runtime `next/og` cold-starts bundling resvg WASM (1.31 MB) + satori graph (0.69 MB) on Vercel Hobby; no `s-maxage` meant the CDN never cached the deterministic image, re-invoking the lambda per fetch | **FIXED** — Edge runtime (ms-fast cold starts; `next/og` ImageResponse fully supported) + `Cache-Control: public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800` |
| W29-3 | Cross-tree hub link leaks on `/ms/*` and `/zh/*` pages | Component grep + live probe: `/zh/gongju` HTML contains `href="/pricing"` | **MEDIUM** (localized crawl + MS/ZH visitors 301-hop out of their language tree to English hubs; dilutes localized indexation signals) | Navbar `PRIMARY_LINKS` (`/pricing`, `/blog`), mobile drawer `MAIN_PAGES` (`/services`, `/pricing`, `/blog`), tools index (`/pricing`, `/services`), every localized tool page (`/pricing`), localized service pages (`/pricing`), smart-service-finder no-results (`/services`) hardcoded English hub hrefs | **FIXED** — shared `lib/hub-links.ts` (`hubPath` / `localizeHref` / `toolHubPath`) extracted from the footer's Wave-25 fix; all 6 leaking components now resolve hubs inside the active language tree. Client-bundle-safe (no heavy registry import) |
| W29-4 | No regression gate for cross-tree hub links on localized pages | Wave-28 gate #17 only covered wa-prefill; footer was fixed (Wave 25) but navbar/drawer were not | **MEDIUM** (regression risk) | — | **FIXED** — new `audit:html` check #18 `cross-tree-hub-link`: fatal on any `/ms/…` or `/zh/…` page containing an exact English hub href from `LOCALIZED_HUB_PATHS` |

## 2. Live-probe evidence (2026-09-01)

| Probe | Request | Observed | Verdict |
|---|---|---|---|
| News sitemap | `https://www.klservisrumah.my/sitemap-news.xml` | HTTP 500 (fetch_page ×2); allorigins: HTTP 200 `content_length: 170` after **5,118 ms**, then 522 timeouts | Intermittent serverless failure; the feed itself is a valid empty `<urlset>` when it runs |
| OG image | `https://www.klservisrumah.my/og-image?title=Test%20Title&template=service` | HTTP 500 (fetch_page ×2); allorigins: 200 PNG (5,118 ms) then 500 | Same intermittent heavy-function failure |
| Light API control | `/api/indexnow`, `/api/cron/perf-check` | 200 instantly | Isolates the 500s to the two heavy dynamic routes |
| Static controls | `/`, `/faq`, `/sitemap.xml`, `/robots.txt`, `/BingSiteAuth.xml` | 200 instantly | Site health otherwise normal |
| Local prod server | same routes under `next start` | `/sitemap-news.xml` 200 (0.03 s), `/og-image` 200 PNG (0.4 s) | Defect is Vercel-function-specific, not route logic |

## 3. Root-cause details

- **W29-1**: `.next/server/app/(en)/sitemap-news.xml/route.js` (from the pre-fix build) contained `revalidate:()=>w` / `revalidate=600` *plus* `force-dynamic` — a conflicting config. The lambda trace (`.nft.json`) was ~7.3 MB: `chunks/4599.js` 3.04 MB, `config/blog-production.generated.json` 2.81 MB, blog-i18n corpus 0.35 MB. The route was absent from `prerender-manifest.json` dynamicRoutes because Next produced a lambda hybrid.
- **W29-2**: `.nft.json` traced resvg.wasm 1.31 MB + `@vercel/og` 0.69 MB into the Node lambda. `Cache-Control` had `max-age` + `stale-while-revalidate` but **no `s-maxage`**, so Vercel's CDN never cached the deterministic image and re-invoked the function on every social/crawler fetch.

## 4. Files changed

| File | Change |
|---|---|
| `app/(en)/sitemap-news.xml/route.ts` | `force-static` (was `revalidate=3600` + `force-dynamic`); doc comment + cache-control comment updated |
| `app/og-image/route.tsx` | `runtime = "edge"` (was `"nodejs"`); `Cache-Control` + `s-maxage=86400` |
| `lib/hub-links.ts` | **new** — shared `hubPath` (extracted from footer), `localizeHref`, `toolHubPath`, `TOOLS_INDEX_LOCALE` |
| `components/ui/navbar.tsx` | `PRIMARY_LINKS` rendered via `hubPath`; mega-menu deep service links via `localizeHref`; renovation-calculator link via `toolHubPath` |
| `components/ui/all-pages-menu.tsx` | mobile drawer `MAIN_PAGES` via `hubPath` |
| `components/ui/footer.tsx` | inlined `hubPath` replaced by shared import (no behaviour change) |
| `components/tools/tools-index-page.tsx` | `/pricing`, `/services` → `hubPath(…, locale)` |
| `components/tools/tool-page.tsx` | `/pricing` → `hubPath(…, locale)`; `relatedServices` hrefs → `localizeHref(…, locale)` |
| `components/sections/locale-service-page.tsx` | `/pricing` → `hubPath(…, locale)` |
| `components/ui/smart-service-finder.tsx` | no-results `/services` → `hubPath(…, lang)` |
| `scripts/html-quality-audit.ts` | check #18 `cross-tree-hub-link`, driven by `LOCALIZED_HUB_PATHS` |
| `scripts/validate-raster-og.ts` | asserts `runtime = "edge"` (was `"nodejs"`) |
| `docs/seo-audit-report.md` | regenerated by `seo:audit` (timestamp only) |

## 5. Validation results

| Gate | Result |
|---|---|
| `type-check` (tsc --noEmit) | PASS |
| `lint` (eslint --max-warnings=0) | 0 / 0 |
| `build` (next build) | PASS — 4,141 static HTML pages; prerender-manifest: `/sitemap-news.xml` **STATIC** |
| Prebuild gates (`test:estimators` etc.) | 329,897 assertions × 0 failures |
| `audit:html` | **0 fatal / 0 warnings** (check #18 went 3,410 → 0) |
| `audit:links` | 312,968 rendered + 45 source links → 0 broken |
| `audit:seo-head` | 4,114 indexable = 4,114 sitemap URLs, 0 warnings |
| `audit:locale-trees` / `audit:price-i18n` / `audit:i18n` / `audit:problem-i18n` / `audit:client-bundle` | PASS |
| `audit:raster-og` | PASS (updated to edge) |
| `audit:bp1` / `audit:meta` / `seo:audit` | PASS |
| Local prod server (next start, port 3300) | `/sitemap-news.xml` 200 (31 ms, valid empty urlset); `/og-image` 200 PNG (167 KB); `/ms/alatan/anggaran-bocor-paip` — 0 `href="/pricing"` |

Corpus scan after fix: **0 English hub hrefs across all 1,668 built `/ms/*` + `/zh/*` HTML pages.**

## 6. Items requiring recrawl / re-verification (NEEDS RECRAWL)

| Item | Why |
|---|---|
| `/sitemap-news.xml` on the live domain | Must be redeployed (PR merge) and then re-probed; expect 200 static |
| `/og-image` on the live domain | Same — re-probe for 200 PNG; social previews should warm the CDN cache |
| Recrawl of `/ms/*` and `/zh/*` in GSC | The HTML now carries in-tree hub links; Google must recrawl to see them (no URL changes, so no 301s needed) |

## 7. Intentional non-changes

- **URLs were not changed** — no 301s introduced; all fixes are server behaviour or href-attribute changes.
- **`/emergency` service views stay EN-only** — no localized twin exists by design; `localizeHref` deliberately keeps those deep links canonical-English (documented in `lib/hub-links.ts`).
- **`/ms` and `/zh` root pages stay noindex redirect stubs** — they exist only so shared links resolve; canonical to `/`, no hreflang (canonical overrides hreflang).
- **Data parity gates kept** — `test:estimators` requires `relatedServices` hrefs to match the EN base; localization happens at render (`localizeHref`), not in the data layer, so the parity assertion was preserved rather than weakened.
- **`config/tools-i18n.ts` untouched by data edits** — render-time localization avoids 200 mechanical data edits and keeps the client-bundle guard satisfied.

## 8. Commit

- Branch: `arena/01a05b3a-klservisrumah-web`
- Commit: `323a1d7` — "Fix prod 500s on news sitemap + OG image; close cross-tree hub link leaks"
- PR: https://github.com/klrenovator/klservisrumah-web/pull/213
- Pushed to origin: ✅ (`git push origin arena/01a05b3a-klservisrumah-web`)
- Working tree clean after commit. CI/deploy runs on merge (workflow-file push not attempted — token lacks workflows permission).

---

## 9. Merge + live verification (post-deploy)

- PR #213 **merged** 2026-09-01T09:12:21Z → merge commit `c781914` on `main` (all checks green: QA gates 2m59s, Vercel, Vercel Preview Comments).
- Vercel **Production deployment for `c781914` completed** 2026-09-01T09:15:36Z.
- Live probes after deploy (independent fetcher r.jina.ai; the sandbox's direct fetcher keeps returning a stale 500 for the two fixed URLs — it cached the pre-fix failures and has 500'd on them all session even when healthy):

| Probe | Result | Verdict |
|---|---|---|
| `https://www.klservisrumah.my/sitemap-news.xml` | 200 — valid empty `<urlset>` ("Title: Sitemap", empty body) | ✅ static feed live |
| `https://www.klservisrumah.my/og-image?title=Live%20Verify&template=service` | 200 — PNG described as "Blue color background with white text on the highlight of KL Servis Rumah" | ✅ Edge OG renderer live |
| `https://www.klservisrumah.my/zh/gongju` | Navbar `价格 → /zh/pricing`, `博客 → /zh/bo-ke`; CTA "查看 2026 年价格指南" → `/zh/pricing`; EN-only surfaces (`/`, `/areas`, `/about`, `/contact`) unchanged | ✅ cross-tree fix live |

- Remaining action (owner/Google side): GSC + Bing recrawl of `/ms/*` and `/zh/*` to pick up the in-tree hub links; no URL changes were made so no 301s or sitemap resubmission are needed. `/sitemap-news.xml` and `/og-image` are healthy static/edge responses going forward.
