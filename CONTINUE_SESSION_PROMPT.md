# PROMPT TEMPLATE — KL Servis Rumah Continue Session

(Yeh prompt har session shuru karte waqt copy-paste karein)

---

## Current State (Update this each session)

> **Fix Wave 12 COMPLETE (2026-08-29):** **P3-04 closed** — the last unblocked
> **P1** on the board. All 29 `/services/<svc>/cost` money pages now open with
> the literal *"How much does {service} cost in KL & Selangor?"* DirectAnswer
> card: question H2 + a 2–3 sentence answer citing the published starting price
> **with its unit** + the rate-book-derived pricing basis + an estimator link,
> in EN / BM / 中文, built by the new pure `lib/cost-direct-answer.ts`. The same
> builder feeds the first `FAQPage` `Question`, so marked-up schema and rendered
> HTML cannot drift (verified 29/29). New prebuild gate
> `audit:cost-direct-answer` (87 cards = 29 services × 3 locales; negative-tested
> 3 ways). **P3-05 closed too:** all four recorded AI-surface leaks re-verified
> fixed, plus the two it missed — 28/29 service hubs printed "from **rm** 14 /
> sq ft" inside the DirectAnswer (`.toLowerCase()` on a registry field) →
> new `lowerFirstSentence()` + a permanent case-sensitive `lowercase-currency`
> check in `audit:html` (28 fatals pre-fix → none post-fix). Also repaired
> `scripts/part3-aeo-audit.ts#contentText()`, which still sliced the text after
> the last `</footer>` (pre-Wave-2 layout) and had silently zeroed every
> readability / DirectAnswer / NAP signal since Wave 2. Corpus result:
> `/services/<svc>/cost` **qa 0% → 100%**, "how much" H2 **0 → 29/29**,
> `faqSchemaNoVisibleMatch` **0**, BM/中文 leaks 0/0. All gates PASS (prebuild
> 320,291 × 0; build 4,080 HTML; audit:html none/none; audit:links 308,753+56 →
> 0 broken; audit:seo-head 4,054 = 4,054; schema-size; bp1; location-similarity;
> meta; seo:audit; part5 0 JSON-LD errors). Full log:
> `docs/full-website-deep-audit/FIX-WAVE-12-REPORT.md`.
>
> **Fix Wave 11 COMPLETE (2026-08-29):** **P3-12 phase 1** — MS/ZH server routes
> for all 215 kept pod details + 10 hubs via the `locale-content-router.tsx`
> factory (40 thin route stubs), each self-canonical with full EN/MS/ZH/x-default
> hreflang, localized OG/`lang` and schema matching the rendered FAQs; +450
> localized URLs; indexable = sitemap = **4,054** parity. Full log:
> `docs/full-website-deep-audit/FIX-WAVE-11-REPORT.md`.
>
> **Fix Wave 10 COMPLETE (2026-08-29):** the final unblocked code queue is done —
> **§5.6** freshness rota: `config/rate-year.ts` (`RATE_YEAR`/`RATE_YEAR_LABEL`)
> + `audit:rate-year` in prebuild (string-literal-aware scanner; 714 files /
> 162 in-string year tokens = 2026; path/URL/class-list exemption added this
> wave). **P5-13/14** raster OG images: `app/og-image/route.tsx` (next/og
> 1200×630 PNG, 8 template variants), `lib/og-image.ts` helpers, `lib/seo-meta.ts`
> now takes `ogTemplate` + `inferOgTemplate(path)` (explicit template forces the
> card; generic-default/SVG heroes get title-customised cards; raster heroes pass
> through); 126 tool routes + 29 cost pages wire `ogTemplate`; schema `image`
> fields rasterised; new `audit:raster-og` gate (source-only in prebuild; corpus
> mode: 0 SVG, ≥1,000 route pages, all 8 templates emitted — PASS:
> default=72/pod=428/area=1,350/service=1,660/blog=762/tool=258/problem=450/
> cost=58, 1,979 pages on /og-image). **P4-15** NAP contact strip
> (`components/content/nap-contact-strip.tsx`, localized labels) mounted on all
> template families → 2,112/3,652 built pages (57.8%, baseline 0%) — asserted by
> new check 8 in `audit:bp1` (`pctNapInContent > 0` + 7 template spot checks).
> **P3-02** completed: FAQ question H3s + hidden empty-state removed; FAQPage
> verified EN/MS/ZH built HTML. **P3-06** blog FAQPage: `lib/blog-faq.ts`
> `extractBlogFaq` (CTA-heading exclusion), 193 EN + 192 MS + 192 ZH posts emit
> FAQPage JSON-LD, top FAQ promoted to H2. **P3-18** llms.txt: 29 services with
> units + aeo-faq.txt link; robots.ts + DuckAssistBot/Applebot-Extended.
> All gates PASS (prebuild 320,291 × 0; build 3,660; audit:html/links/
> seo-head/bp1/schema-size/location-similarity/meta/seo). Full log:
> `docs/full-website-deep-audit/FIX-WAVE-10-REPORT.md`.
>
> **Wave 10 state note:** `npm run audit:raster-og` (corpus mode) and
> `audit:bp1` check 8 need `npm run build` output first; prebuild runs their
> source-only halves. `.github/workflows/ci.yml` still carries the BP-1 CI
> patch **uncommitted** — do not commit it unless the token has `workflows`
> permission (see TRACKING.md item 5).
>
> **Fix Wave 9 COMPLETE (2026-08-29):** the unblocked CRO/UX queue is done —
> **P4-05/P4-03** `StickyBookButton` is now mounted ONCE globally in
> `SiteChrome` (pathname-derived service/area context via
> `serviceNavBySlug`/`areaNavBySlug`, localized); the WhatsApp dispatch desk
> (`components/ui/whatsapp-button.tsx`) was **deleted** → exactly one desktop
> float per viewport (mobile keeps the sticky WhatsApp+Call bar).
> **P4-02/P4-07** new static JS-free `QuickQuoteForm` (native
> `<form action="/api/inquiry" method="get">`, renders in SSR HTML, submits
> without JS) mounted inside the mobile hero viewport (hero `min-h-0` on
> mobile) + top of `/contact`; new `app/api/inquiry/route.ts` (GET+POST,
> field caps, lang allowlist, 302 → wa.me with locale-aware prefill via new
> `getWhatsAppInquiryLink()` in `lib/whatsapp.ts`). **P4-12** new static SVG
> `CoverageMap` (equirectangular projection of `areaPages` lat/lng, 37
> clickable markers, highlight variant) on `/areas` + all 37 area pages —
> CSP `frame-src 'none'` rules out iframes, so this is the audit's listed
> alternative; `hasMap` now emits `links.mapUrl` (Google Maps universal URL)
> instead of the GBP share shortlink. **P4-06** include/exclude block on all
> 29 service pages driven by the rate-book (`SERVICE_SCOPES` scopes = included
> + quoteOnly rows + 3 generic exclusions), data passed server-side as a slim
> `scopeSummary` prop (63 KB rate-book stays out of client bundles).
> **P4-16** "Full Price Guide" link in the service hero CTA row (+29 inbounds
> to `/services/<svc>/cost`). **P4-17** aircon service now shows 6 problems
> (maxItems 4→6) + a new "Aircon cost calculators" row (4 tools). **P4-11
> code half** — "written by local tradesmen" claim re-attributed to job
> records/published rates/warranty terms. New i18n keys ×3 locales
> (`quickQuote.*`, `serviceContent.includedHeading/includedSub/
> notIncludedHeading/notIncludedSub/excludedGeneric.{1..3}`,
> `serviceDetail.fullPriceGuide`, `internalLinks.airconTools/airconToolsSub`,
> `toolsList.*`, `coverageMap.*`) — parity PASS 1,213 × 3. All gates PASS:
> lint 0/0, type-check, prebuild 320,291 × 0 failures (client-bundle guard
> 218 modules), build SUCCESS (3,652 static), audit:html 0/0, audit:links
> 278,649+54 → 0 broken, audit:seo-head (3,626 indexable/26 noindex),
> audit:schema-size, audit:bp1, audit:location-similarity, seo:audit+meta.
> Full log: `docs/full-website-deep-audit/FIX-WAVE-9-REPORT.md`.
>
> **CF-4 COMPLETE (2026-08-29):** cost pages are now the canonical rate-book
> "harga" guides. All 29 `/services/<svc>/cost` pages: 409–702 words (mean 543)
> → **1,152–2,264 (mean 1,373)**, 222 rate-book rows (162 priced + 60
> quote-only), market baselines (17 rows/6 services with real `lastReviewed`),
> worked example, 4-point methodology, measurement guide, calculator CTA, and
> the service's own localized job process + FAQs (8–19 visible answers).
> costPage messages 25 → 61 keys ×3 locales + new `rateCopy.aircon` 7×3.
> **CF-4(c):** `/estimate` hub + 22 generic slugs now `noindex,follow`
> (live WhatsApp share links) — removed from sitemap (−23 URLs) and IndexNow
> (−23 entries); `scripts/seo-head-audit.ts` extended (noindex 26; indexable =
> sitemap = 3,643). **CF-4(b):** part5 `cleanText()` decodes `&#x27;` →
> FAQ false positives 5 → 0. All gates PASS (prebuild 320,331 assertions;
> audit:html, audit:schema-size, audit:links 278,275, audit:seo-head,
> audit:location-similarity, seo:audit; part5 re-run: 3,669 pages, 0 JSON-LD
> errors). Full log: `PART-5-AUDIT-REPORT.md` §5.5.
>
> **Fix Wave 4 COMPLETE (2026-08-29):** **P3-01** ✅ — all 29 services × MS/ZH
> DirectAnswer notes rewritten (58 unique, native-style) + new prebuild gate
> `audit:trilingual-leak` (L1 containment / L2 units / L3 function words +
> anchor checks). **P3-07** ✅ — ceiling price RM 220 everywhere, "29+" counts,
> "Written warranty, 30 days to 10 years (per service)" pill wording, painting
> "single-room from RM 450" (per-room unit!), AI-context files regenerated and
> regression-checked; the *owner-stat* half (1,200+/120+ reviews/15+ Pros/
> 30-min) stays ⏳ under P3-09. **P2-C3 batch 1** 🔶 — the 58 wrong-audience
> indexable pods (29 commercial + 29 residential) now carry hand-authored
> bodies: unique ≤158-char intros, 4 audience-correct bullets + 4 AEO FAQs per
> pod (`config/content-pod-copy.ts`), MS/ZH bullet translations preserving
> client-switch localization (`config/content-pod-copy-i18n.ts` merged into
> the body dictionaries), per-family guidance paragraphs via the new optional
> `GenericContentPage.guidance` (`POD_GUIDANCE` in `content-data.ts`), and
> prebuild gate `audit:content-pods` (coverage/uniqueness/audience/trilingual
> wiring — a new service WITHOUT authored pods now fails the build).
> Full log: `docs/full-website-deep-audit/FIX-WAVE-4-REPORT.md`.
>
> **Fix Wave 5 COMPLETE (2026-08-29):** **P2-C3 batch 2** ✅ — 88 remaining pod
> pages hand-authored (brands 32, compare 18, guides 10, maintenance 10,
> seasonal 8, top 10): unique intros ≤158 chars, 4 topic-specific bullets,
> 4 AEO FAQs each. 263 new MS/ZH bullet translations added
> (`batch2BulletsMs` + `batch2BulletsZh` merged into main dictionaries).
> All gates PASS: build 3,669 HTML; test:estimators 320,291 × 0 failures;
> audit:links 278,275 + 53 source, 0 broken; audit:content-pods 58 unique
> intros (batch 1 gate); full i18n/trilingual/similarity/bp1/schema-size
> all green. Full log: `docs/full-website-deep-audit/FIX-WAVE-5-REPORT.md`.
>
> **Fix Wave 6 COMPLETE (2026-08-29):** **P2-17/P2-03** ✅ — `/services/<svc>/emergency`
> rewritten per-service for the 12 real-emergency services (`config/emergency-services.ts`,
> EN/MS/ZH: emergencies, immediate steps, when-to-call, cost factors, 4 FAQs each);
> the 17 fake-emergency pages (`painting`, `handyman`, `house-renovation`,
> `ceiling-fan`, `lighting`, `tiling`, `plaster-ceiling`, `skim-coat`, `flooring`,
> `epoxy-flooring`, `kitchen-cabinet`, `carpentry`, `welding`, `aircon`,
> `kitchen-renovation`, `bathroom-renovation`, `awning-installation`) 301 to their
> service page in `middleware.ts` + dropped from `generateStaticParams`, sitemap
> (3,643→3,626) and the cost-page emergency card. **P2-16 (tranche 1)** ✅ — the
> 15 thinnest problem pages enriched with `overview`/`diyChecks`/`prevention`/
> `costDetail` (EN/MS/ZH native) + `audit:problem-i18n` extended to enforce native
> depth parity. All gates PASS (3,652 HTML; 320,291 assertions × 0 failures).
> Full log: `docs/full-website-deep-audit/FIX-WAVE-6-REPORT.md`.
>
> **Fix Wave 7 COMPLETE (2026-08-29):** **P2-16 ✅** — tranche 2 finished the
> audit's top-30 depth target. The next 15 thinnest problems were enriched
> (`rusting-window-grille`, `loose-door-hinge`, `stuck-window-lock`,
> `ikea-furniture-assembly-help`, `downlight-flickering`,
> `sagging-plaster-ceiling`, `blocked-drain-toilet`, `ceiling-leak-after-rain`,
> `roof-leak-rainy-season`, `swimming-pool-leak-balcony`,
> `wardrobe-door-jamming`, `cracked-ceiling-joints`, `locked-out-of-house`,
> `uneven-wall-surface-skim`, `cctv-not-recording-storage-full`) with
> `overview` + 4 `diyChecks` + 4 `prevention` + `costDetail` hand-authored in
> **EN + native MS + native ZH** (45 blocks; EN in `config/problem-data.ts` +
> `config/problem-data-extra.ts`, MS/ZH in `config/problem-body-i18n.ts`).
> English config words 2,324 → 5,730 (mean 155 → 382; +147%). New helper
> `scripts/p2-16-wordcount.ts` ranks all 74 indexable problems by measured
> thinness (30 enriched; next candidates: `vinyl-flooring-lifting-edges` 166,
> `wall-dampness-rising` 167, `autogate-remote-not-working` 167,
> `ceiling-mold-stains` 168, `rccb-tripping-kl` 168). All gates PASS: lint
> 0/0, type-check, prebuild **320,291 assertions × 0 failures**
> (`audit:problem-i18n`: 74 × ms/zh, 0 gaps/leaks/dupes), `npm run build`
> SUCCESS (3,660 static; middleware 35.6 kB), audit:html 0/0, audit:links
> 277,170+53 → 0 broken, audit:seo-head PASS. Corpus unchanged: 3,652 HTML /
> 3,626 sitemap. Full log: `docs/full-website-deep-audit/FIX-WAVE-7-REPORT.md`.
>
> **Fix Wave 8 COMPLETE (2026-08-29):** **P2-19 ✅** — real per-article blog
> dates + per-article sitemap `lastMod`. The 216 posts that shared 5 dates
> (99 on one day) now carry **54 distinct dates, max 7/day**, all within
> 2026-07-01..08-27: migrated 170 bucket-capped (each article keeps its
> batch-completion date as the upper bound) and spread deterministically by
> `scripts/assign-blog-dates.ts`; extras 21 daily 07-05..25; batch-4 15 across
> 08-05..13; awning 8 daily 08-20..27 (launch window); legacy 2 untouched.
> `dateModified` split from `datePublished` via new `lib/utils.ts#blogDateModified`
> (migrated content → DEFAULT_CONTENT_DATE 2026-08-16 release/QA date; awning
> → own date) wired into `getArticleSchema` + OG `article:modified_time`.
> Sitemap: blog + locale-blog URLs emit per-article `lastMod` (648 URLs, 0 on
> the constant; 2,978 non-blog keep 2026-08-16). Blog `post()` helpers now
> require an explicit `date` (dead `const now` defaults removed); validator
> gate added (parseable / non-future ≤ 2026-08-27 / ≤ 10 posts per date).
> All gates PASS: validate:blogs (54 dates, max 7/day), lint 0/0, type-check,
> prebuild **320,291 × 0 failures**, build SUCCESS (3,660 static), seo-head
> (3,626 sitemap, 0 dupes), html 0/0, links 277,170+53 → 0 broken. Full log:
> `docs/full-website-deep-audit/FIX-WAVE-8-REPORT.md`.
>
> **Next session starts at:** with Wave 12 done, **no P0 or P1 audit finding
> remains unblocked.** Candidates, in rough value order: **P3-12 phase 3**
> (MS/ZH **server routes** for `/services/<svc>/cost` — the 29 money pages are
> still one EN URL client-localized by the toggle;
> `app/(ms|zh)/…/services/[slug]/` ships only `page.tsx` + `[subservice]`, so
> Wave 11's `locale-content-router` pattern is the obvious vehicle),
> **P2-16 tranche 3** (44 remaining problems; needs owner GSC demand data to
> re-rank, else `scripts/p2-16-wordcount.ts` thinness order:
> `vinyl-flooring-lifting-edges` 166, `wall-dampness-rising` 167,
> `autogate-remote-not-working` 167, `ceiling-mold-stains` 168,
> `rccb-tripping-kl` 168), **P3-12 phase 2** (native MS/ZH translation of the
> 146 authored per-pod FAQ sets — natural translation, no MT), **§5.4-B1** (BM
> commercial tree), **P2-22** (outbound citations — owner decision),
> **P4-10/P4-14/P4-08**, **P4-16** footer link tiering, **P3-15/P3-16**
> (SearchAction vs `/search`, news-sitemap freshness), **P3-19** (expand
> `aeo-faq.txt`). **P4-11 named team page** needs owner bios. **P4-13 / P2-C4 /
> BP-1 phase 2** still blocked on owner GSC keep-set. Do **not** add more
> location pages. Do **not** re-add `app/(en|ms|zh)/loading.tsx`. Do **not**
> delete local pages on low traffic alone. Do **not** retry the CI patch push
> (no `workflows` permission) — note both Wave-12 gates already run in CI via
> the existing `prebuild` and `audit:html` steps, so no workflow change was
> needed. Do **not** weaken the estimator trilingual-parity asserts to
> accommodate new copy — supply the translations instead. Do **not** enrich a
> problem in English without its native MS/ZH depth block
> (`audit:problem-i18n` fails the build on a gap). Do **not** add a blog post
> without an explicit `date` (type-check enforces), and never reintroduce
> per-day date concentration above the validator's 10-post cap. Do **not**
> interpolate a registry field into a sentence with `.toLowerCase()` — prices
> must keep their `RM` (use `lowerFirstSentence()`; `audit:html`
> `lowercase-currency` fails the build otherwise). Do **not** hand-edit
> generated files (`lib/estimator/rate-book.generated.ts`, `public/llms*.txt`,
> `public/aeo-faq.txt`, `public/site-summary.json`) — `prebuild` regenerates
> them. **⚠️ Do not quote any Part 3 `meanWords` / `pctQuickAnswer` / `pctNap`
> figure recorded before Wave 12** — `contentText()` was measuring the wrong
> slice and reported `words=8` / `qa=0%` corpus-wide.
>
> **Branch:** arena/01a04e39-klservisrumah-web (this session branch — push PRs from here)
> **Last completed session:** 2026-08-29 — Fix Wave 12 ✅ (P3-04 cost-page
> DirectAnswer + P3-05 AI-surface prices + two audit-tool repairs). Before
> that: Wave 11 ✅ (P3-12 phase 1 — MS/ZH pod routes), Wave 10 ✅
> (§5.6/P5-13/14/P4-15/P3-02/P3-06/P3-18), Wave 9 ✅ (the whole unblocked
> CRO/UX queue).

**Quality gates (must all be green before any new work).**
Numbers are the *measured* output of each command on this branch — update them
when the corpus changes, don't carry stale values forward:

- [ ] npm run lint — 0 errors, 0 warnings
- [ ] npm run type-check — PASS
- [ ] npm run build — SUCCESS (4,080 HTML; middleware 35.7 kB; shared JS 102 kB)
- [ ] npm run audit:bp1 — PASS (**run after build**; 2,146 retired URLs, 0 regenerated; NAP-in-content 2,540/4,080 = 62.3%)
- [ ] npm run seo:audit — PASS
- [ ] npm run audit:html — 0 fatal / 0 warnings (4,080 pages; includes the new case-sensitive `lowercase-currency` check)
- [ ] npm run audit:links — 308,753 rendered + 56 source links, 0 broken
- [ ] npm run audit:seo-head — PASS (4,054 self-canonical indexable, 26 noindex incl. 23 estimate URLs, sitemap = 4,054, 0 dupes)
- [ ] npm run audit:i18n — 1,223 keys × 3, 0 missing
- [ ] npm run audit:topical-map — 29/29 services, 222 relationships
- [ ] npm run audit:specialty-locale — 222 × MS/ZH = 444 blocks
- [ ] npm run audit:specialty-coverage — 222 subservices across 29 services
- [ ] npm run audit:service-i18n — 29 services
- [ ] npm run audit:problem-i18n — 74 keep-URLs × MS/ZH, 12 redirects excluded (native depth parity for enriched problems)
- [ ] npm run audit:client-bundle — 219 client modules, 0 heavy registries
- [ ] npm run audit:cost-direct-answer — 87 cards (29 services × 3 locales), 0 failures (prebuild too)
- [ ] npm run audit:location-similarity — all layers < 70%; near-me layer = 0 pages
- [ ] npm run audit:trilingual-leak — 29 services × 3 locale bases, 58 unique notes, 0 English leaks (prebuild too)
- [ ] npm run audit:content-pods — 29 services × commercial+residential: 58 unique intros, 4 bullets/4 FAQs each, all pod bullets localized ×2 (prebuild too)
- [ ] npm run test:estimators — 320,291 assertions, 0 failures
- [ ] npm audit — 0 vulnerabilities

---

## What Is COMPLETED (Do NOT redo)

### Fix Wave 5 (2026-08-29) — DONE — `docs/full-website-deep-audit/FIX-WAVE-5-REPORT.md`
- P2-C3 batch 2: 88 remaining pod pages hand-authored
  - Brands (32): 12 general + 20 aircon — unique brand-specific intros, bullets, FAQs
  - Compare (18): all comparison pages with topic-specific decision criteria
  - Guides (10): how-to-choose and comparison guides with real decision frameworks
  - Maintenance (10): practical checklists with frequency and urgency guidance
  - Seasonal (8): monsoon, CNY, Raya and year-end timing-specific planning
  - Top (10): comparison criteria pages without fabricated rankings
- 263 unique new bullet phrases with full MS/ZH translations
- All gates PASS: 320,291 assertions × 0 failures

### CF-4 (2026-08-29) — DONE — log in `docs/full-website-deep-audit/PART-5-AUDIT-REPORT.md` §5.5
- 29 `/services/<svc>/cost` pages → rate-book guides: full scope table (162 rows)
  + quote-only block (60 rows) from `SERVICE_SCOPES`, market baselines, worked
  example, methodology ×4, measurement ×4, calculator CTA, service job process
  (5–6 steps) + service FAQs (4–15) — all localized (costPage 25 → 61 keys ×3,
  new `rateCopy.aircon` 7×3); words 409–702/mean 543 → 1,152–2,264/mean 1,373
- `/estimate` + 22 generics → `noindex,follow`; sitemap −23, IndexNow −23,
  `seo-head-audit.ts` extended; 44 ms/zh links retained by design
- part5 `cleanText()` `&#x27;` fix → FAQ false positives 5 → 0
- Files: cost route + `locale-service-cost-view.tsx` (rewritten),
  `lib/location-bundles.ts` (+`ServiceCostDetail`), messages ×3, sitemap,
  indexnow, seo-head-audit, part5-audit; regenerated `docs/audit-part5-*`,
  `public/llms*`, `public/site-summary.json`, `docs/seo-audit-report.md`

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
npm run audit:trilingual-leak && npm run audit:content-pods && \
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
