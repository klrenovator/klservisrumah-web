# FIX WAVE 10 — AEO/CONTENT-GAP + RASTER-OG + NAP-IN-CONTENT (§5.6 · P5-13/14 · P4-15 · P3-02 · P3-06 · P3-18)

**Date:** 2026-08-29
**Branch:** arena/01a04d03-klservisrumah-web
**Scope:** the last unblocked Part 2/3/4/5 code findings — §5.6 freshness rota,
P5-13/14 raster OG images, P4-15 NAP contact strip in content, P3-02 /faq hub
FAQPage completion, P3-06 blog FAQPage schema + H2 promotion, P3-18 llms.txt
service list + AEO FAQ link, robots.ts AI-bot permissions. Owner-blocked items
(P4-09 reviews, P4-13 GSC keep-set, P5-12 photography, P3-09 stats) are
untouched and remain ⏳ in TRACKING.md.

---

## 1. §5.6 (P2) — freshness rota: RATE_YEAR build assertion ✅

**Problem:** Part 5 §5.6 prescribed a "RATE_YEAR build assertion" — the build must
fail if year-stamped marketing copy claims a year other than the current one.
Without it, "2026 rates" copy silently decays into a staleness signal.

**Fix:**
- `config/rate-year.ts` — single source of truth: `RATE_YEAR` + `RATE_YEAR_LABEL`
  derived from the clock; doc-comment explains the gate and the annual rota.
- `scripts/validate-rate-year.ts` (`audit:rate-year`, wired into `prebuild`) —
  string-literal-aware scanner: bare `20xx` tokens inside string literals across
  `config|components|app|lib` must all equal `RATE_YEAR`. Filters decimals,
  product codes (CR2032), longer numbers (SSM 202503227236), measurements
  (1920px), historical 2000, Chinese 年 dates, Act/Akta/PDPA/SSM/Tahun prefixes,
  and this wave: paths/URLs/class lists (`hero-2026-banner`, `/og-image?…&t=…`).
- 5 config files interpolate `RATE_YEAR_LABEL` (market-rates, tools-data,
  content-data, content-i18n, content-pod-copy-batch2).

**Verification:** `audit:rate-year — PASS: 714 files scanned, 162 in-string year
tokens, all = 2026` (inside `prebuild`).

## 2. P5-13/14 (P1) — raster 1200×630 OG images ✅

**Problem:** og:image/twitter:image + schema `image` pointed at SVGs
(`hero-*.svg`, blog cover SVGs) on ~2,200+ pages; WhatsApp/Facebook/Telegram/
iMessage refuse SVG previews, and Google's structured-data pipeline skips SVG
image fields.

**Fix:**
- `lib/og-image.ts` — `ogImageUrl(title, template)`, `isSvgImage()`,
  `rasterOgFor()`, `OgTemplate` type (8 ids), `stripControlChars()` char loop.
- `app/og-image/route.tsx` — next/og (satori) 1200×630 PNG route, `nodejs`
  runtime, 8 template variants (default/service/area/blog/tool/problem/cost/pod)
  with distinct accents + chips, adaptive `titleFontSize`, control-char
  sanitisation.
- `lib/seo-meta.ts` — `buildMetadata` now takes `ogTemplate` and maps every page
  path to its template via `inferOgTemplate()`; pages with an SVG hero or no
  custom hero get a **title-customised template card**; raster heroes pass
  through untouched.
- 116 tool page routes + `localizedToolMetadata` (10 shared-helper routes) +
  the 29 cost pages wire explicit `ogTemplate: "tool"` / `"cost"`.
- `lib/seo.ts` — Service/LocalBusiness/BlogPosting schema `image` fields
  rasterised via `rasterOgFor` (3 call sites, 0 raw SVG image literals).

**New gate:** `scripts/validate-raster-og.ts` (`audit:raster-og`) wired into
`prebuild` as `--source-only` (source wiring checks) and runnable against the
build corpus (0 SVG og/twitter/schema images, /og-image route used ≥ 1,000
pages, all 8 templates emitted).

**Verification (build corpus):**
- 0 SVG og:image / twitter:image / schema image across 3,652 built pages.
- 1,979 pages use the `/og-image` raster route; all 8 templates emitted:
  default=72, pod=428, area=1,350, service=1,660, blog=762, tool=258,
  problem=450, cost=58.
- Route smoke-tested live: 200 `image/png`, 1200×630 (short + long titles).
- Built-page spot checks: `t=problem`, `t=cost`, `t=tool`, `t=pod`, `t=area`,
  `t=blog` all carry the real page title (HTML-escaped `&amp;` handled).

## 3. P4-15 (P2) — NAP contact strip inside content blocks ✅

**Problem:** Part 4 measured corpus `pctNapInContent = 0%` — the business NAP
lived only in the footer and JSON-LD; answer engines that chunk page content
rarely cite the footer.

**Fix:** `components/content/nap-contact-strip.tsx` — one-line client strip
(tel + WhatsApp deep-link + mailto + area) with localized labels/aria
(`napStrip` keys in messages/en|ms|zh.json); NAP values from `config/site.ts`
(the same single source as footer + Organization JSON-LD). Mounted on:
service pages (EN/MS/ZH server + client views), problem pages (EN/MS/ZH),
cost pages, emergency pages, tool pages (via `ToolPage`), commercial pod +
generic content pages, near-me hubs, blog posts (EN/MS/ZH).

**New audit evidence (check 8 in `audit:bp1`, build-corpus mode):** scans all
3,652 built pages for the localized strip labels and asserts `pctNapInContent
> 0` (Part-4 acceptance), plus per-template spot checks.

**Verification:** `NAP strip in content: 2,112/3,652 pages (57.8%)` — baseline
was 0%. Template coverage: EN/MS/ZH service, problem, cost, tool, commercial
pod all carry the strip.

## 4. P3-02 (P1) — /faq hub FAQPage completion ✅

**Fix (completes Fix Wave 2's PARTIAL):** directory questions wrapped in real
`<h3>` headings; hidden "No matches" empty-state removed (keys deleted from all
three message files); FAQPage JSON-LD already emitted.

**Verification (built HTML):** EN `/faq` + MS `/ms/soalan-lazim` + ZH
`/zh/chang-jian-wen-ti` all emit `"@type":"FAQPage"` (1 each); question H3s
present; `No matches in this topic` count = 0.

## 5. P3-06 (P2) — blog FAQPage schema + top FAQ as H2 ✅

**Fix:**
- `lib/blog-faq.ts` — `extractBlogFaq(content, max=6)`: markdown-heading +
  body parser; CTA-style headings ("Need X?", "Ready to plan?") excluded so the
  schema stays honest (7/822 corpus Q&As were CTA prompts).
- EN/MS/ZH blog slug pages inject `FAQPage` JSON-LD when ≥ 2 Q&As extracted.
- `components/blog/blog-article-body.tsx` promotes the first question heading
  to H2 (SEO: matches the FAQPage question).

**Verification (built HTML):** FAQPage JSON-LD on **193 EN + 192 MS + 192 ZH**
blog posts (out of 216 — the rest have < 2 markdown Q&As); `"@type":"Question"`
count matches; promoted H2 confirmed on a sample page.

## 6. P3-18 (P1) — llms.txt service list + AEO FAQ link ✅

**Fix:** `scripts/generate-ai-context.ts` now emits all **29 services** in
`Key Services` with per-service units (awning "project-quoted") and links
`https://www.klservisrumah.my/aeo-faq.txt` in `Key URLs`. `app/robots.ts`
permits DuckAssistBot + Applebot-Extended.

**Verification:** `public/llms.txt` = 29 service lines + aeo-faq.txt link;
robots.txt carries both bots.

---

## Gates (all PASS)

- `npm run prebuild` — **320,291 assertions × 0 failures** (incl. new
  `audit:raster-og --source-only` + `audit:rate-year`: 714 files / 162 tokens = 2026).
- `npm run type-check` / `npm run lint` — 0 errors, 0 warnings.
- `npm run build` — 3,660 static pages, 3,652 HTML files.
- `audit:html` (0 fatal) · `audit:links` (0 broken) · `audit:seo-head` PASS ·
  `audit:bp1` PASS (incl. new P4-15 check: 57.8% NAP-in-content) ·
  `audit:schema-size` PASS · `audit:location-similarity` PASS ·
  `audit:meta` PASS · `seo:audit` PASS (docs/seo-audit-report.md regenerated).
