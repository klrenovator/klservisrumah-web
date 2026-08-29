# Fix Wave 14 — P3-12 phase 3: real MS/ZH server routes for the 29 cost money pages

> **Date:** 2026-08-29 · **Finding:** Part 3 **P3-12** (MS/ZH routes for the
> localized content trees), phase 3 — the last un-localized surface on the
> site.
>
> **Result:** ✅ COMPLETED — all 29 `/services/<slug>/cost` money pages (the
> highest-intent "how much" URLs on the site) now ship **real, indexable,
> server-rendered** `/ms/services/<slug>/cost` + `/zh/services/<slug>/cost`
> URLs (+58 indexable pages, sitemap parity 4,054 → 4,112) with genuine
> three-URL hreflang clusters on all three trees.

---

## 1. What was wrong

Since the H3 pilot, `/services/<slug>` and `/services/<slug>/<sub>` had real
MS/ZH server routes, but the **cost guides** — the pages that literally
answer *"how much does X cost in KL & Selangor?"* and carry the DirectAnswer
card, the published rate book, the market baselines and the estimator CTA —
switched language **client-side at one English URL only**. A BM or 中文
searcher (or a Googlebot hitting the localized cluster) could never find a
crawlable `/ms/services/painting/cost` or `/zh/services/painting/cost` at all:
29 of the site's money pages had no MS or ZH URL to rank on.

## 2. What changed

### 2.1 One shared page body — `components/sections/locale-service-cost-body.tsx` (new)

The entire cost-guide body (hero, DirectAnswer card, published rate book,
quote-only scopes, market baseline table, worked example, cost factors,
methodology, measurement guide, calculator CTA, WhatsApp CTA, emergency path,
FAQs, job process, related-cost-guide grid, NAP strip) was extracted from the
client view into a **server-compatible `CostPageBody`** that takes `locale` +
`t` (the same curried translator the client hook returns) as props instead of
reading the language context. Internal links are composed from the active
locale prefix:

- `/services/<slug>/cost` (EN URL, prefix "")
- `/ms/services/<slug>/cost`, `/zh/services/<slug>/cost` (real localized twins)

Estimator + emergency destinations stay on their single canonical EN URLs
(client-localized there) — the exact pattern `LocaleServicePage` already uses
for `/estimate/<slug>`. One body implementation = the EN URL, the MS URL and
the ZH URL cannot render three different pages.

### 2.2 Server component — `components/sections/locale-service-cost-page.tsx` (new)

- `SERVICE_COST_LOCALE_PATHS` + `localizedServiceCostLanguageUrls(slug)` — the
  three sibling URLs of one cost guide (the hreflang cluster source).
- `buildServiceCostPageData(slug)` — the **one preparation path** all three
  routes now share (bundle, cost detail, rate-book scopes, market rates,
  start price, resolved estimator href, six circular sibling guides).
- `LocaleServiceCostPage({ locale, slug })` — server-renders the body with
  `getServerTranslator(locale)`, plus the three JSON-LD blocks:
  - **FAQPage** — built by the same pure builders the body renders with
    (DirectAnswer Q&A first, then the site-wide cost FAQ templates, then the
    service's own FAQs) → schema and HTML cannot drift (P5-02 contract).
  - **OfferCatalog** (localized sub-services) and **BlogPosting** (localized
    title/excerpt/path).

### 2.3 Route stubs (new)

- `app/(ms)/ms/services/[slug]/cost/page.tsx`
- `app/(zh)/zh/services/[slug]/cost/page.tsx`

`dynamicParams = false`, `generateStaticParams` frozen to the 29 registry
slugs, true 404 on anything else, self-canonical metadata with the full
EN/MS/ZH/x-default hreflang cluster, `ogLocale` `ms_MY`/`zh_MY`, raster
`ogTemplate: "cost"`, localized meta title/description (new dictionary keys,
below) and localized `keywords` on the MS route.

### 2.4 Canonical EN route — `app/(en)/services/[slug]/cost/page.tsx`

- **hreflang cluster upgraded**: the cost page previously emitted a
  self-referencing 4-lang cluster (all four languages → the one EN URL)
  because no MS/ZH URLs existed. It now points `ms-MY`/`zh-MY` at the real
  localized twins, `x-default` stays English.
- **Latent schema drift fixed (P5-02 class)**: the FAQPage schema was built
  from a hand-copied `COST_FAQS_EN` array that had drifted from the rendered
  copy in three of the four site-wide answers ("materials, and actual site
  condition" marked up vs "materials and the actual site condition" rendered).
  The route now builds its schema from the same `costPage.faqs.*` dictionary
  keys the body renders — EN output is byte-identical for the title
  ("{name} Cost in KL & Selangor — 2026 Pricing Guide") and description, and
  the four template answers now match the HTML verbatim (verified 29/29).
- Data preparation now goes through the shared `buildServiceCostPageData()`.

### 2.5 Shared pure builders — `lib/cost-direct-answer.ts`

- `buildCostPageSiteFaqs(t, { name, startPrice })` — the four site-wide cost
  FAQs from the dictionary keys (the single source both schema and HTML now
  read).
- `buildCostPageFaqs(directAnswer, siteFaqs, serviceFaqs)` — the full FAQPage
  list in render order.
- On the MS/ZH documents, FAQ 0 interpolates the **localized
  unit-carrying** start price (`localizeUnits()`, the same swap the
  DirectAnswer builder applies) — e.g. BM flooring FAQ 0 renders
  *"bermula dari RM 14 / kaki persegi"*, 中文 *"从 RM 14 / 平方呎 起"*.

### 2.6 Related-cost-guide grid — `lib/location-bundles.ts`

- New `buildRelatedCostGuideEntries(slug)`: the six circular sibling inlinks
  as slim `{ slug, titles: LocaleMap }` entries (no href — the rendering body
  composes the per-tree href). Moved out of the EN route so all three routes
  share one definition. Type-only client imports keep the bundle guard green.

### 2.7 Client view — `components/sections/locale-service-cost-view.tsx`

Now a thin `"use client"` wrapper: resolves `lang` + `t` from the language
context and forwards the server-prepared data to `CostPageBody`. Public props
contract preserved (the EN route is the only mount site).

### 2.8 Inbound equity — `components/sections/locale-service-page.tsx`

The MS/ZH service hero (which previously had no cost-guide link at all) now
carries the same "Full Price Guide / Panduan Harga Penuh / 完整价格指南"
button as the EN hero (P4-16), pointing at the **localized** cost guide —
+58 inbounds into the new money pages from the localized service hubs.

### 2.9 Sitemap — `app/(en)/sitemap.ts`

- EN cost entry now carries the three-URL `languages` cluster.
- +58 entries (`/ms/…/cost`, `/zh/…/cost` at 0.85) each with the full
  cluster — indexable = sitemap parity preserved.
- Comment updated: only `/emergency` and the non-tranche sub-service pages
  stay English-only.

### 2.10 Metadata dictionaries — `messages/{en,ms,zh}.json`

New `costPage.metaTitle` / `costPage.metaDesc` keys (all three locales,
placeholder-parity enforced by `audit:i18n`):

- EN: `{name} Cost in KL & Selangor — 2026 Pricing Guide` (identical to the
  previous literal) · `How much does {name} cost in KL & Selangor? …`
- MS: `{name} — Harga di KL & Selangor (2026)` · `Berapakah kos {name} di
  KL & Selangor? Lihat julat harga tersiar, faktor kos, contoh kerja dan
  pilihan sebut harga WhatsApp.` (template clamps at the " — " separator, so
  the longest 40-char names degrade to a clean service-name title; desc fits
  158 chars for every service)
- 中文: `{name}在KL与雪兰莪多少钱？2026价格指南` (≤34 CJK budget) ·
  `{name}在KL与雪兰莪多少钱？查看已发布的价格范围、成本因素、实际例子与
  WhatsApp 报价方式。`

No middleware change needed — `/ms/services` + `/zh/services` were already
real locale trees (`REAL_LOCALE_TREES`), so the deep `/cost` URLs pass
through untouched.

## 3. Verification

### 3.1 Built-corpus spot audit (all 58 new pages, script-verified)

| Check | Result |
|---|---|
| `html lang` = `ms-MY` / `zh-MY` | 58/58 |
| self-canonical = own URL | 58/58 |
| full 4-URL hreflang cluster (en-MY/ms-MY/zh-MY/x-default) | 58/58 |
| first FAQPage Question = rendered H2 (the literal "how much" question) | 58/58 |
| **every** marked-up FAQ Q&A appears verbatim in visible HTML (P5-02) | 58/58 |
| DirectAnswer question in-language (BM `berapakah…` / 中文 `多少钱`) | 58/58 |
| localized units in FAQ 0 (BM `kaki persegi`, 中文 `平方呎`) | ✓ (flooring etc.) |

EN cost pages re-verified after the FAQ builder change: **29/29** marked-up
Q&As verbatim in the rendered HTML (previously 3 of 4 site-wide answers had
drifted copy).

### 3.2 Gate results (all PASS)

| Gate | Result |
|---|---|
| prebuild (all source gates) | 329,897 assertions × 0 failures |
| type-check / lint | 0 errors / 0 warnings |
| `npm run build` | SUCCESS — **4,139 HTML** (was 4,081, +58) |
| `audit:seo-head` | **4,112 indexable = 4,112 sitemap** (was 4,054); 0 duplicate titles/descriptions; 0 warnings |
| `audit:html` | none / none (0 fatal, 0 warning) |
| `audit:links` | 312,732 rendered + 56 source links → **0 broken** |
| `audit:bp1` | PASS (NAP strip on the cost template family included) |
| `audit:schema-size` | largest non-FAQ JSON-LD 7.1 KB (≤ 8 KB ceiling) — new pages compliant |
| `audit:raster-og` | PASS — `cost` template now on **174** pages (was 87… cost=58 EN + 58 MS + 58 ZH) |
| `audit:location-similarity` | 69.4% max — unchanged, under the 70% budget |
| `audit:meta` / `seo:audit` | PASS (4,139 pages checked, hreflang-on-canonicalised = 0) |
| part 5 corpus | **0 JSON-LD parse errors** |
| part 3 AEO corpus | 4,139 pages; `/services/<svc>/cost` n=29 (EN) qH2=100% qa=100% faqSchema=100%; **BM leaks 0 / ZH leaks 0** across the whole corpus including the 58 new pages |

### 3.3 Negative checks

- Unknown slug on a localized cost route → true 404 (`dynamicParams = false`).
- The client-bundle guard still passes: `CostPageBody` imports only types
  from the registry-backed modules; the MS/ZH cost route JS chunk is 136 kB
  (same class as the MS/ZH service routes).
- EN money-page SERP strings unchanged (title/description byte-identical to
  the previous literals — only the hreflang cluster and the drifted FAQ
  answers moved).

## 4. P3-12 status

| Phase | Scope | Status |
|---|---|---|
| Phase 1 (Fix Wave 11) | 215 pod details + 10 hubs | ✅ done |
| Phase 2 | native MS/ZH translation of 146 authored per-pod FAQ sets (no MT) | ⏳ P2 — next candidate |
| **Phase 3 (this wave)** | **29 `/services/<svc>/cost` money pages** | **✅ DONE** |
