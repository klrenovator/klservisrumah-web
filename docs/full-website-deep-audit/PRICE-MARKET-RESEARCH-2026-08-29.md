# Fix Wave 13 — Market-Rate Research: Awning "Start From" Prices + All-Services Price Verification

> **Session date:** 2026-08-29 · **Owner request (roman Urdu):** "Awning installation
> services mein price likhen start from jesy Baki sub services ki likhi hui hy …
> Price competitors ko search kr k or Malaysia mein Jo market rates hn un k
> hisaab se likhen tamam services ki start from price."
>
> **Translation:** Write the awning-installation starting price the way the
> other sub-services publish theirs, and set every service's start-from price
> from competitor searches and Malaysian market rates.
>
> **Status:** ✅ COMPLETED — published prices land in
> `config/services-data.ts`; everything downstream (rate book, estimators,
> llms.txt, schema, cost pages) regenerates from it on `prebuild`.

---

## 1. Why awning was the gap

`awning-installation` (service #29) launched quote-only by design
(`AWNING_INSTALLATION_PROJECT.md`: "no fabricated prices"). Every other service
published a numeric `startPrice` + per-scope "From RM X" rows; awning published
`startPrice: "On Quote"` and 9 sub-services all "On Quote", with a
"we do not publish a generic 'starting from' price" note in the service guide
(EN/MS/ZH). The owner has now decided to publish market-aligned starting
prices. This wave makes awning consistent with the other 28 services **without**
abandoning the honest per-project-quotation workflow: figures are published as
*minimum starting prices*, and every page still says the exact figure is
confirmed in a free itemised quotation after photos/measurements.

## 2. Awning competitor & market research (web, 2026-08-29)

All rates are **installed, KL/Selangor, per sq ft unless noted**. Sources are
Malaysian contractor/supplier price guides published 2024–2026.

| Material / system | Competitor & market ranges (per sq ft) | Sources |
|---|---|---|
| Metal deck / zinc sheet | RM 10–25 · RM 15–22 (2026) · RM 18–25 · RM 20–45 | kosbinaan.my; yysteelresources.com.my (2026); binaan.my; mahligaiidaman.com |
| Polycarbonate | RM 15–30 · RM 25–38 (2026) · RM 27–35 · RM 30–50 · RM 35–80 · RM 30–100 | kosbinaan.my; yysteelresources.com.my; binaan.my (upah pasang); VBB AutoGate; mahligaiidaman.com; awningsmalaysia.com |
| Aluminium composite (ACP) | RM 24–35 · RM 28–45 (2026) · RM 60–120 · RM 50–150 | binaan.my; yysteelresources.com.my; mahligaiidaman.com; awningsmalaysia.com |
| Tempered glass | RM 40–80 · RM 40–55 · RM 50–100 · RM 65–95 (2026) · RM 120–250 · RM 100–300+ | kosbinaan.my; binaan.my; VBB AutoGate; yysteelresources.com.my; mahligaiidaman.com; awningsmalaysia.com |
| Canvas / fabric (fixed) | RM 8–20 · RM 20–40 · RM 40–100 · RM 20–80 | kosbinaan.my; VBB AutoGate; mahligaiidaman.com; awningsmalaysia.com |
| Retractable awning (project) | manual RM 1,000–3,000; motorised RM 3,000–8,000 (per project) | topsecuritydoor.com.my (2025) |
| Outdoor roller blinds | standard outdoor **from RM 15 / sq ft**; zip blinds **from RM 55 / sq ft**; motorised upgrade **from RM 800 / blind** | blinds.my (2026) |
| Whole-job installed figures | polycarbonate RM 350–700 per metre run; porch 4×5 m PC RM 3,500–5,500; balcony 1.5×3 m RM 1,500–2,500; drying yard 2×3 m RM 1,200–2,200; full porch/backyard RM 1,500–12,000 | clickbina.com (2026) |
| Glass awning (2026 guide) | RM 40–60 / sq ft; entrance canopy 20 sq ft RM 800–1,200; car porch 200 sq ft RM 8,000–12,000 | yysteelresources.com.my (2026) |

**Market consensus (rounded):** metal deck RM 15–45 · polycarbonate RM 25–80 ·
ACP RM 28–120 · fabric RM 20–100 · glass RM 60–250 · roller blinds RM 15–55+/sq ft.

## 3. Published "start from" prices chosen (awning-installation)

The site's pricing convention everywhere else is: **a minimum starting price
per scope**, stated with its unit, with the exact figure confirmed by
quotation. Applying that convention to the market data above (minimums sit at
the low–middle of each market band, never below the cheapest credible
installed rate, and never above it):

| Scope (sub-service) | Old | New published price | Basis in market data |
|---|---|---|---|
| **Service `startPrice`** | On Quote | **RM 380** | Smallest project scope (balcony/window/door awning, ~20 sq ft economy material + minimum fabrication job) |
| Car Porch Awning Installation | On Quote | **From RM 1,800** | Small single-porch economy build (≈120 sq ft metal deck at market RM 10–25/sq ft); market porches RM 1,500–5,500 installed |
| Polycarbonate Awning | On Quote | **From RM 25 / sq ft** | Market RM 25–38/sq ft (2026 mid-market); below the RM 30–100 premium-supplier band |
| Metal Deck Awning | On Quote | **From RM 18 / sq ft** | Market RM 15–25/sq ft (2026 guides) |
| Aluminium Composite (ACP) Awning | On Quote | **From RM 30 / sq ft** | Market RM 24–45/sq ft typical (excl. premium RM 60–150 facades) |
| Glass Awning | On Quote | **From RM 60 / sq ft** | Market RM 40–95/sq ft (2026); RM 60 is mid-band, below premium RM 120–250 |
| Canvas & Fabric Awning | On Quote | **From RM 20 / sq ft** | Fixed canvas market RM 20–40 installed (VBB), RM 40–100 premium (mahligai); manual retractable ≈RM 1,800+ per project (market RM 1,000–3,000) noted in copy |
| Balcony, Patio & Window Awning | On Quote | **From RM 380** | Smallest practical project (~20 sq ft); market balconies RM 1,200–2,500, small window/door covers lower |
| Awning Replacement & Repair | On Quote | **From RM 280** | Repair callout + minor resheet/seal work; consistent with the site's other repair minimums (RM 220–380) and market minor-repair bands |
| Outdoor Roller Blinds | On Quote | **From RM 15 / sq ft** | blinds.my standard outdoor roller from RM 15/sq ft; zip from RM 55/sq ft and motorised +RM 800/blind noted in copy |

Every published figure stays inside the consensus market band for its material
— the "fair Klang Valley standard: not inflated, not underpriced" position the
cost pages already claim.

## 4. All 29 services — start-price verification vs 2026 Malaysian market

The other 28 services were realigned to market in CF-4/update-prices (rate
review 2026-07-25) and re-verified in Wave 12. This session re-checked the
highest-traffic trades against fresh 2026 competitor data:

| Service | Published start | Fresh 2026 market check | Verdict |
|---|---|---|---|
| aircon | RM 129 (basic service) | KL market: basic RM 99–150 (klrenovator/acfix RM 99, fastlinkfix RM 120, Reddit RM 100–180); chemical wash RM 120–250; install RM 199–550 | ✅ in range |
| plumbing | RM 280 | Callout RM 30–150; minor repairs RM 80–500; drain RM 150–800 (clickbina/listing.my/detikmedia 2026) | ✅ in range (min job incl. callout) |
| electrical | RM 280 | Socket point RM 80–200, light point RM 60–130, DB RM 400–1,500 (calculatormalaysia/threads 2026) | ✅ in range |
| painting | RM 450 / room | Room RM 300–800; RM 1.50–6.00/sq ft; full house RM 1,800–5,000+ (catrumah.com.my 2026; recommend.my) | ✅ in range |
| awning-installation | **was On Quote** | see §2–§3 | ✅ **now RM 380** |

Remaining 23 services (ceiling RM 220, waterproofing RM 300, handyman RM 280,
house-renovation RM 22,000, water-heater RM 180, ceiling-fan RM 150, lighting
RM 120, tiling RM 14/sq ft, plaster-ceiling RM 10/sq ft, skim-coat RM 5/sq ft,
flooring RM 14/sq ft, epoxy RM 22/sq ft, roof-repair RM 380, kitchen-cabinet
RM 7,500, carpentry RM 300, door RM 250, window-repair RM 200, locksmith
RM 180, glass-aluminium RM 320, cctv RM 420, autogate RM 2,200, welding
RM 280, kitchen-renovation RM 8,000, bathroom-renovation RM 6,000) were
benchmarked in the CF-4 wave against the same competitor set
(`config/market-rates.ts`, lastReviewed 2026-07-25) and remain inside their
market bands; no change required this wave.

## 5. Files changed (this wave)

1. `config/services-data.ts` — awning-installation: `startPrice`, tagline,
   description, highlights (new published-price bullet), 9 sub-service
   **prices** (descs kept as-is — they render on all 37 area pages, see
   FIX-WAVE-13-REPORT.md §2), first FAQ, `priceTableNote`, metaDesc,
   aioSummary, options FAQ (retractable/blind price detail) + guide
   `quoteIntro` EN/MS/ZH + full MS/ZH `i18n` mirrors (tagline, description,
   highlights, sub-service prices, first FAQ, metaDesc, aioSummary).
2. `config/specialty-locale-content.ts` — the 9 awning specialty pages
   (BM/中文) now cite their published starting rates instead of
   "atas sebut harga projek / 按项目报价".
3. `config/blog-data-awning.ts` + `config/blog-i18n.ts` — the three
   "we do not publish a generic rate / senarai harga tetap" claims updated to
   the new published-minimum wording (pricing post EN/BM/中文, replacement
   post EN/BM/中文, quote-checklist lines).
4. Regenerated on build: `lib/estimator/rate-book.generated.ts` (awning now has
   a generic estimator + `/estimate/awning-installation` share page),
   `config/service-summary.generated.ts`,
   `config/service-nav.generated.ts`, `config/quote-catalog.generated.ts`,
   `public/llms.txt`, `public/llms-full.txt`, `public/aeo-faq.txt`,
   `public/site-summary.json`.

## 6. Sources

- kosbinaan.my — "10 Jenis Awning Rumah Murah & Harga Terkini Malaysia 2025"
- mahligaiidaman.com — "Jenis Awning Rumah Terkini 2026 & 2025, Harga"
- yysteelresources.com.my — "Awning Price Malaysia 2026" + "Glass Awning Price Malaysia 2026"
- clickbina.com — "Awning Cost Malaysia 2026: RM1,500–RM12,000 Installed"
- binaan.my — "Upah Pasang Awning Rumah Terkini 2025" + awning jenis guide
- vbbautogate.com — "5 Rekaan Awning Rumah Popular 2025"
- awningsmalaysia.com — "Awning Price in Malaysia"
- topsecuritydoor.com.my — "Retractable Awning Malaysia 2025" (manual RM 1,000–3,000 / motorised RM 3,000–8,000)
- blinds.my — "Outdoor Roller Blinds" (from RM 15/sq ft) + "Zip Blinds" (from RM 55/sq ft)
- klrenovator.com / acfix.my / fastlinkfix.com / Reddit r/KualaLumpur — aircon 2026 rates
- clickbina.com / listing.my / detikmedia.my / habniaga.com — plumbing 2026 rates
- calculatormalaysia.com / kristalmaya.com.my — electrical 2026 rates
- catrumah.com.my / recommend.my — painting 2026 rates
