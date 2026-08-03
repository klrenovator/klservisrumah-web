# Bing Webmaster Site Scan — Audit & Fixes (2026-08-03)

Requested via: https://www.bing.com/webmasters/sitescan?siteUrl=https://www.klservisrumah.my/

Bing Webmaster Tools' Site Scan report itself requires the account login, so this
round replicates the full Site Scan check-list locally against a production
build (`next build` + `next start`), crawling **every URL in the sitemap** plus
every unique internal link found on those pages.

## Method

- `npm run build` → 4,188 / 4,188 SSG pages, 0 warnings, 231,498 estimator assertions passed.
- Crawled **3,142 sitemap URLs** and **6,002 unique internal link targets** with
  a custom checker replicating Bing's Site Scan rules.
- Live sanity checks via fetch: homepage, `/robots.txt`, `/sitemap.xml`,
  `/sitemap-news.xml`, `/BingSiteAuth.xml` — all reachable and correct.

## Results — clean ✅

| Check | Result |
|---|---|
| Sitemap URLs returning HTTP 200 | 3,142 / 3,142 ✓ |
| Sitemap URLs that redirect | 0 ✓ (redirecting `/estimate/<slug>` slugs are already excluded) |
| News sitemap (`sitemap-news.xml`) | 18 / 18 URLs OK ✓ |
| Broken internal links (4xx/5xx) | 0 of 6,002 ✓ |
| Internal links that redirect | 0 ✓ **(was 6 — fixed this round)** |
| `<title>` present, unique, 10–70 chars | all pass ✓ |
| Meta description present, 25–160 chars | all pass ✓ (encoded `&amp;` correctly counted once) |
| Exactly one `<h1>` per page | all pass ✓ |
| Canonical present + self-referencing (incl. `/ms/*`, `/zh/*`) | all pass ✓ |
| Duplicate `<title>`/description/canonical tags | 0 ✓ |
| Images with non-empty `alt` | all pass ✓ |
| `lang` attribute present on `<html>` | all pass ✓ |
| `noindex` pages leaked into sitemap | 0 ✓ |
| Bing verification (file + meta tag) | both live ✓ |
| Robots.txt (Bingbot allow + sitemaps + host) | correct ✓ |
| Estimator/locale 404 handling (`/en/*`, `/fr/*`, unknown slugs) | clean 404s ✓ |

## Issues found & fixed this round

### 1. Internal links pointing at redirecting URLs (FIXED)
The `/estimate` hub linked its 6 dedicated-tool service cards to
`/estimate/<slug>`, which the middleware 301-redirects to `/tools/<tool-slug>`.
Crawlers (and customers) paid a needless redirect hop on every one of those
internal links.

- `config/estimate-links.ts`: `EstimateLinkEntry` gains `resolvedPath` — the
  final destination (`/tools/<tool-slug>` for the 6 dedicated services, else
  the path itself). All entries are built solely by `buildEstimateLinks()`, so
  IndexNow, the share bar and the hub page are unaffected.
- `components/estimate/estimate-hub.tsx`: the card's "Open Estimator" link now
  uses `entry.resolvedPath`. The **displayed** short URL and the **Copy Link**
  / WhatsApp share text intentionally still use the uniform
  `/estimate/<slug>` short link the owner pastes into WhatsApp chats (that
  feature is why the redirect exists; only *internal navigation* skips it now).
- Re-crawl after fix: **0 redirecting internal links**.

### 2. Wrong document language on 52 fully-localised pages (IMPROVED)
The real localised subtrees (`/ms/alatan`, `/ms/blog`, `/ms/soalan-lazim`,
`/zh/gongju`, `/zh/bo-ke`, `/zh/chang-jian-wen-ti` — 52 pages) were served
under the site-wide `<html lang="en-MY">` although the content is Bahasa
Malaysia / Simplified Chinese. App Router renders `<html>` only from the root
layout, so this cannot be corrected in the server HTML without splitting into
multiple root layouts (too invasive for a subtree of the same layout).

- `components/localized-html-lang.tsx` (new, client): sets
  `document.documentElement.lang` on hydration and restores the previous value
  on unmount (App Router keeps the same `<html>` element across soft
  navigations).
- `app/ms/layout.tsx` (new): mounts it with `lang="ms-MY"`.
- `app/zh/layout.tsx` (new): mounts it with `lang="zh-MY"`.
- Verified: the locale pages' HTML references the new layout chunk carrying the
  setter, and the `ms-MY`/`zh-MY` props are in the flight payload. Screen
  readers and rendering crawlers now see the correct language. Raw crawler-only
  HTML keeps `en-MY` by necessity (documented above).

## Known, deliberate — NOT changed

- **Large HTML pages (43 over 256 KB).** `/faq`, `/ms/soalan-lazim`,
  `/zh/chang-jian-wen-ti` are ~3 MB and the homepage ~500 KB — an intentional
  single-page locale FAQ directory / content-rich landing design (see
  `CONTINUOUS-IMPROVEMENT-2026-07-31.md`). If Bing's "page size" notices are a
  concern, the escalation is splitting `/faq` per locale/category — a product
  decision, out of scope here.
- **`Disallow: /_next/`** in robots.txt is intentional (runtime-only assets;
  all content is fully server-rendered in the HTML, so indexing is
  unaffected).

## After next deploy (external follow-ups)

1. Re-run Bing Site Scan — expect the remaining notices (redirect chain on the
  6 estimator links, language hints) to clear.
2. Ping IndexNow (`POST /api/indexnow` with the secret key) so Bing re-crawls.
3. GSC sitemap submission for the 3,142-URL sitemap if not yet done.
