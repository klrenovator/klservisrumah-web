# Fix Wave 13 — Awning Start-From Prices + Market-Rate Verification (owner request)

> **Date:** 2026-08-29 · **Request:** "Awning installation services mein price
> likhen start from jesy Baki sub services ki likhi hui hy … Price competitors
> ko search kr k or Malaysia mein Jo market rates hn un k hisaab se likhen
> tamam services ki start from price."
>
> **Result:** ✅ COMPLETED — `awning-installation` (the last "On Quote"
> service) now publishes market-aligned starting prices like the other 28
> services; all 29 start-from prices verified against fresh 2026 Malaysian
> competitor/market data.

---

## 1. What changed

### 1.1 Awning-installation published prices (`config/services-data.ts`)

| Scope | Before | After |
|---|---|---|
| Service `startPrice` | `On Quote` | **RM 380** |
| Car Porch Awning Installation | On Quote | **From RM 1,800** |
| Polycarbonate Awning | On Quote | **From RM 25 / sq ft** |
| Metal Deck Awning | On Quote | **From RM 18 / sq ft** |
| Aluminium Composite (ACP) Awning | On Quote | **From RM 30 / sq ft** |
| Glass Awning | On Quote | **From RM 60 / sq ft** |
| Canvas & Fabric Awning | On Quote | **From RM 20 / sq ft** (retractable: manual ≈RM 1,800+, motorised ≈RM 3,500+, noted in FAQ) |
| Balcony, Patio & Window Awning | On Quote | **From RM 380** |
| Awning Replacement & Repair | On Quote | **From RM 280** |
| Outdoor Roller Blinds | On Quote | **From RM 15 / sq ft** (zip from RM 55 / sq ft market, motorised upgrade noted in FAQ) |

Every figure sits inside the 2026 KL/Selangor market band for its material
(sources and full competitor table:
`PRICE-MARKET-RESEARCH-2026-08-29.md`). The per-project-quotation workflow is
unchanged — all copy states the exact figure is confirmed as a fixed, itemised
quotation after photos/measurements (free site visit).

### 1.2 Copy updated around the prices (EN + BM + 中文, native)

- **Tagline / description / aioSummary / metaDesc** — now carry the starting
  price ("Starting from RM 380 with per-sq-ft rates for every material…").
- **Highlights** — new final bullet publishes the starting-price fact.
- **First FAQ** — rewritten from "we do not quote a generic price" to the new
  published-minimums answer (schema + rendered, EN/BM/中文).
- **Service guide `quoteIntro` EN/BM/中文** — was literally "we do not publish a
  generic 'starting from' price" → now "the published prices above are minimum
  starting prices for straightforward, ground-level projects".
- **9 specialty sub-service pages** (`config/specialty-locale-content.ts`,
  BM/中文) — every "Atas sebut harga projek / 价格按项目报价" sentence now
  cites its published starting rate.
- **Awning blog posts** (`config/blog-data-awning.ts` EN +
  `config/blog-i18n.ts` BM/中文) — the "Why not publish a fixed price list?"
  sections became "Why publish starting prices and still quote per project?",
  excerpts/metaDescs/FAQs updated; all three language mirrors.

### 1.3 What regenerated automatically from the data change

- `lib/estimator/rate-book.generated.ts` — awning now has **9 priced scopes**
  (was quote-only, no scopes).
- **New generic estimator** on `/services/awning-installation` (the 23rd
  direct estimator; 6 deep-tool redirects unchanged) and a new share page
  `/estimate/awning-installation` (NOINDEX per CF-4) → build 4,080 → **4,081**
  HTML pages.
- `public/llms.txt` / `llms-full.txt` — "Awning Installation Services: from
  RM 380" + estimate link (29/29 services now priced in the AI surfaces).
- `config/service-summary.generated.ts`, `service-nav.generated.ts`,
  `quote-catalog.generated.ts`, sitemap, schema offers (`lowPrice` 380 +
  UnitPriceSpecification rows), cost-page DirectAnswer.

### 1.4 All-29-services price verification

Fresh 2026 competitor checks (aircon RM 99–150 basic, plumbing callout
RM 30–150/minor RM 80–500, electrical points RM 60–200, painting rooms
RM 300–800 / RM 1.50–6.00 per sq ft) confirm every existing start price sits
inside its market band — the CF-4 alignment (rate review 2026-07-25) still
holds; **no other price needed changing**. Full table + sources:
`PRICE-MARKET-RESEARCH-2026-08-29.md` §4.

## 2. Guardrail hit & fix (documented for future waves)

Publishing long identical pricing enumerations in area-shared copy (description
+ sub-service descs) pushed the location-similarity gate over budget:
`areas/semenyih/awning-installation ↔ areas/sentul/awning-installation` hit
**70.4%** (threshold <70%). Fix: the detailed rate enumerations live on the
service/cost pages (price table, FAQ, guide); area-shared fields
(`description`, sub-service `desc`) keep only the headline figures. Result:
**69.4% max — PASS**. Watch item: awning area pairs sit at 69.4% of a 70%
budget; do not add more identical shared copy to this service's area-rendered
fields (sub-service descs are rendered on all 37 area pages; FAQs/guide/price
table are service-page-only).

## 3. Verification (all green)

| Gate | Result |
|---|---|
| `prebuild` (17 gates incl. gen:rates, service-i18n, trilingual-leak, cost-direct-answer, rate-year, i18n-parity, test:estimators) | **PASS — 329,897 assertions × 0 failures** (was 320,291) |
| `type-check` / `lint --max-warnings=0` | PASS / 0 warnings |
| `build` | SUCCESS — **4,081** static HTML (+1 `/estimate/awning-installation`) |
| `audit:html` (incl. case-sensitive `lowercase-currency`) | fatals: none · warnings: none |
| `audit:links` | 308,822 rendered + 56 source links → **0 broken** |
| `audit:seo-head` | PASS — 4,054 indexable = sitemap parity |
| `audit:schema-size` / `audit:bp1` (NAP-in-content 62.2%) | PASS / PASS |
| `audit:location-similarity` | PASS — max 69.4% (awning area pair; see §2) |
| `audit:meta` / `seo:audit` | exit 0 / PASS |
| part5 corpus | 0 JSON-LD parse errors |
| part3 corpus | `/services/<svc>/cost` **qa 100%**, mean words 1,707; BM/ZH leaks **0 / 0** |
| Built-page spot checks | hub DirectAnswer "packages start from RM 380" (priced variant, `RM` capitalised); cost page "starts from RM 380; the 9 published rates below are priced per job, per sq ft"; 0 "On Quote"/"Atas Sebut Harga" remnants on awning pages; llms.txt priced |

## 4. Files changed

1. `config/services-data.ts` — awning EN + BM + 中文: startPrice, tagline,
   description, highlights, 9 sub-service prices, first FAQ, metaDesc,
   aioSummary, options FAQ (retractable/blind price detail), guide
   `quoteIntro` ×3 locales.
2. `config/specialty-locale-content.ts` — 9 awning specialty pages, BM/中文
   descriptions cite published starting rates.
3. `config/blog-data-awning.ts` + `config/blog-i18n.ts` — EN/BM/中文 pricing
   posts + replacement post + quote-checklist lines updated.
4. `docs/full-website-deep-audit/PRICE-MARKET-RESEARCH-2026-08-29.md` — new
   market research (competitor table, chosen prices, 29-service verification).
5. `docs/full-website-deep-audit/FIX-WAVE-13-REPORT.md` — this report.
6. Regenerated (by prebuild): `lib/estimator/rate-book.generated.ts`,
   `config/service-summary.generated.ts`, `config/service-nav.generated.ts`,
   `config/quote-catalog.generated.ts`, `config/blog-production.generated.json`,
   `public/llms.txt`, `public/llms-full.txt`, `public/aeo-faq.txt`,
   `public/site-summary.json`, `config/content-nav.generated.ts`,
   `config/suburb-twin-slugs.generated.ts`.

## 5. Where we stopped / next

- All 29 services now publish start-from prices; the quote-only code paths
  (`isQuoteOnlyService`, DirectAnswer `answerQuoteOnly`, estimator
  quote-only branch) remain in the codebase as dead-safe fallbacks — no
  service uses them today.
- ⏳ Still owner-blocked (unchanged): GSC access, live edge check, review
  verification (P2-21/P4-09), owner facts (P5-09/P3-09), photography (P5-12).
- Next unblocked code work (unchanged from Wave 12 list): **P3-12 phase 3**
  (MS/ZH server routes for the 29 cost pages), P2-16 tranche 3, P3-12 phase 2
  (native MS/ZH pod-FAQ translation), §5.4-B1 BM commercial tree.
