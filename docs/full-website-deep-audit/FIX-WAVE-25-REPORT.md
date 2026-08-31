# Fix Wave 25 — Value Queue: Search/News consistency, Fixed-Quote CTA, Footer Tiering, Per-Area Schema Entities, Clickable Trust Cards (2026-08-31)

> **PR #209 — CI QA PASS (gates/types/lint/SSG build/audits, 3m47s), Vercel PASS.**

> Scope: the next pending stop on the audit tracker ("Priority Work Queue Value
> Items" — P4-10, P4-14, P4-08, P4-16, P3-15/16, plus the P4-03 remainder).
> Every item was **unblocked code-level work**; no owner GSC/GBP/photography
> access was needed. All gates PASS: prebuild **329,897 assertions × 0**,
> type-check, lint 0/0, build **4,141 HTML** (+7 dynamic routes), audit:html
> 0/0, audit:links **312,968 + 55 → 0 broken**, seo-head **4,114 = 4,114**,
> schema-size PASS, bp1 (NAP strip 62.8%), location-similarity **69.5% max**
> (<70%), meta, seo:audit, part5 **0 JSON-LD errors**, part3 corpus
> **BM leaks 0 / ZH leaks 0**.

---

## What shipped, by audit finding

### P3-15 — SearchAction ↔ robots.txt consistency (Part 3, LOW–MEDIUM) ✅
**Problem.** `getWebsiteSchema()` emitted `SearchAction → /search?q={term}`
on every page, while `app/robots.ts` disallowed `/search` for all bots.
Google's sitelinks searchbox (and AI-agent site search) fail against an entry
point the crawler cannot fetch. A second, latent defect surfaced while
fixing this: the localized Smart Finder pages `/ms/search` and `/zh/search`
existed as real, fully-translated route files, but `middleware.ts` did **not**
list them in `REAL_LOCALE_TREES`, so they 301-redirected to the English
`/search` — the hreflang targets were unreachable redirects (the exact class
of error `buildMetadata`'s hreflang guard warns about).

**Fix.**
- `app/robots.ts` — removed `/search` from `disallow` (now only `/api/`,
  `/_next/`). `/search` is a crawlable, server-rendered smart-finder tool page.
- `app/(en)/search/page.tsx`, `app/(ms)/ms/search/page.tsx`,
  `app/(zh)/zh/search/page.tsx` — converted the static `metadata` export to
  `generateMetadata` so parameterized result states (`/search?q=…`) emit
  `noindex, follow` while the bare finder page stays `index, follow`
  (prevents an unbounded near-duplicate index from the query entry point).
- EN `/search` now declares the 3-URL hreflang cluster
  (`en→/search`, `ms→/ms/search`, `zh→/zh/search`, `x-default→/search`).
- `middleware.ts` — added `/ms/search` and `/zh/search` to
  `REAL_LOCALE_TREES` so they serve 200 in-tree (they were previously dead
  301s).
- Fixed two popular-shortcut links on the MS/ZH finder pages that pointed at
  `/ms/near-me/...` and `/ms/areas/...` (both 301 to the EN tree — no such
  localized routes exist) → retargeted to real in-tree money/service pages.

**Verified on the running server:** all six URLs correct —
`/search` index·follow, `/search?q=x` noindex·follow, `/ms/search` index +
Malay `<title>` 200, `/ms/search?q=x` noindex, `/zh/search` index + 中文
`<title>` 200, `/zh/search?q=x` noindex; full 4-URL hreflang cluster present;
`robots.txt` no longer disallows `/search`.

### P3-16 — News sitemap freshness (Part 3, LOW) ✅
**Problem.** `app/(en)/sitemap-news.xml/route.ts` was `force-static` and
listed **all 216 blog posts**, none within Google News' 48-hour window — at
best ignored, at worst a freshness signal against the site; EN-only titles.

**Fix.** Rebuilt as a **dynamic** feed (`revalidate = 3600`,
`force-dynamic`) that emits only posts published within the last **48 hours**
(datePublished, the freshness key Google News uses), with a valid **empty
`<urlset>`** when nothing is fresh (the normal state for batch publishing;
Google accepts empty news sitemaps). Each fresh post now emits its **EN, MS
and ZH** versions with correct `<news:language>` and localized titles. The
feed is permanently policy-valid with no manual stale-URL removal.

**Verified:** `/sitemap-news.xml` returns `HTTP 200 · application/xml`
with a well-formed empty `<urlset>` today; still referenced from `robots.txt`.

### P3-19 — aeo-faq.txt expansion + discovery (Part 3, LOW–MEDIUM) ✅
Discovery (llms.txt → aeo-faq.txt link) was already closed in Wave 10. This
session closed the remaining half — **depth**. The generator
(`scripts/generate-ai-context.ts → buildAeoFaq()`) grew from **8 → 24 Q&As**,
every answer assembled from live published data (service `startPrice`s, hours,
phone, areas, cost-guide URLs) so the file can never drift from the site:
added deposit policy, how-to-get-a-quote, operating hours, languages,
emergency response, per-service pricing for aircon/painting/waterproofing/
electrical/renovation/awning, commercial coverage, free calculators, site
inspections, coverage detail, and problem-guide discovery.
**Verified:** `gen:ai-context` regenerates `public/aeo-faq.txt` (24 Q&As),
linked from `llms.txt`; prebuild AI-context gate green (29 prices, 29
warranties, counts match).

### P4-08 — Lead CTA copy with the fixed-quote differentiator (Part 4, LOW/P2) ✅
**Problem.** Primary buttons said generic "Book this service" / "Book via
WhatsApp" while the business's strongest risk-reversal (fixed itemised quote,
no deposit) appeared only in the exit popup.

**Fix.** Reworded the primary CTA labels in **EN/MS/ZH** to lead with the
fixed-quote value prop — `common.bookService` → "Get a fixed quote" /
"Dapatkan sebut harga tetap" / "获取固定报价"; `common.bookWhatsApp` →
"Get a fixed quote on WhatsApp" / "Dapatkan sebut harga tetap di WhatsApp" /
"在 WhatsApp 获取固定报价"; `stickyBook.label` → "Get My Fixed Quote" (x3);
`serviceDetail.bookWhatsApp` → "Get my fixed quote on WhatsApp" (x3, shown on
all 29 service heroes, MS/ZH specialty/emergency templates, services grid);
`hero.quoteTitle`/`hero.getQuote` now say "Fixed Quote" (x3). Added a
dedicated neutral `common.serviceNameGeneric` key and repointed the hero
WhatsApp prefill to it (the prefill previously re-used the button label,
which would have shipped a CTA as the *service name* in the WhatsApp body).
**Verified:** localized strings render on EN/MS/ZH service heroes and the
sticky button; lint/type-check clean; no string used out of context.

### P4-03 remainder — exit-intent 30s timer removed (Part 4) ✅
**Wave 9** consolidated the desktop floating CTAs to one; the leftover was
the exit popup's **30-second timer**, which interrupted engaged, actively
reading visitors. Removed the timer — the modal now opens only on a genuine
exit-intent signal (cursor leaving toward the browser chrome on desktop), with
the 30-day dismissal cap preserved. (`components/exit-intent-popup.tsx`)

### P4-16 — Footer equity tiering + tree-native links (Part 4, MEDIUM) ✅
**Problem.** The footer rendered one flat 16-item "Explore" list giving every
content hub equal link weight on every ~4,100 pages — thin front-door
indexes absorbed the same equity as money/decision surfaces; and several
links on MS/ZH pages used English paths that 301 out of the active tree.

**Fix** (`components/ui/footer.tsx`):
- Split Explore into a **primary tier** (the decision/discovery hubs — areas,
  near-me, problems, answers, guides, blog, FAQ, about) and a compact,
  de-emphasised **secondary cluster** (process, compare, top, brands,
  residential, commercial, seasonal, projects). Every hub stays linked from
  every page (the 146 pod/guide children never lose their persistent inbound
  link — the pre-history zero-inbound condition documented in the footer
  header), but emphasis + structure concentrate on high-value surfaces.
- New `hubPath(englishHref, lang)` helper routes pricing/blog/FAQ/problems/
  pods to their **real in-tree URLs** (`/ms/harga`, `/zh/pricing`,
  `/ms/soalan-lazim`, `/zh/chang-jian-wen-ti`, `/ms/bo-ke`→`/ms/blog`,
  `/zh/bo-ke`, etc.), while EN-only surfaces (areas, near-me, projects,
  contact — no localized route by design) keep canonical English paths,
  matching the navbar chrome convention. The pricing-hub link previously hard-
  coded `/pricing` (a 301 hop for MS visitors) is now tree-native.

**Verified:** MS-tree footer links resolve to `/ms/harga`, `/ms/blog`,
`/ms/problems`, `/ms/services/…` with **0** `/ms` or `/zh` links leaking on an
EN page and only EN-only areas/near-me/projects links on MS pages (no 301
hops); audit:links 312,968 → 0 broken; location-similarity unaffected
(69.5% max).

### P4-14 — Per-area Service / Place schema entities (Part 4 / Part 5, LOW) ✅
**Problem.** There was no location-specific entity graph beyond the
KlValley-wide GeoCircle: area hubs emitted an inline City node with no geo
coordinates, area×service pages emitted an inline `Place` with no
cross-reference, and the homepage's 49-city `areaServed` list was name-only.
Nothing let a parser associate "Service × city" with a canonical,
geo-located Place.

**Fix** (`lib/seo.ts`):
- New `getAreaPlaceSchema(area)` — the area hub (`/areas/<slug>`) now defines
  the area's **full Place entity once**: a `City` node with real
  `GeoCoordinates`, containing `State`, and a stable `#place` `@id`.
- New `getAreaServiceSchema(area)` — the hub's `Service` node now references
  that Place by `@id` and carries an Offer (from-price floor), replacing the
  old geo-less inline node.
- `getLocalBusinessServiceSchema(area, service)` (the 1,500+ area×service and
  near-me pages) now `@id`-references the hub's Place (type kept `Place` to
  satisfy the schema-size gate's city-node budget) while retaining inline
  name/geo so the node is self-describing for parsers that don't merge
  cross-page @ids; suburb pages keep their self-contained geo Place.
- `getServiceAreaSchema()` (homepage full Organization node) now emits
  `@id` references to each area hub's Place for the 37 cities that have a
  hub (name+country nodes remain for the other ~12 regions without a page),
  wiring the organization's coverage list to the geo-located Place entities.

**Verified:** area hub emits `City @id …/areas/mont-kiara#place` with
`geo{3.1727,101.651}` + State + an Offer-carrying Service; area×service page
emits `areaServed {@id …#place, @type: Place, name, geo}`; homepage emits 36
unique `…#place` @id refs; **schema-size gate PASS** (City nodes only on
homepage + 37 area hubs, 1 each; 8 KB non-FAQ ceiling respected).

### P4-10 — Clickable trust cards (Part 4, MEDIUM/P2) ✅
**Problem.** `featured-projects.tsx` rendered project cards with a decorative
`ArrowUpRight` `<span>` (not a link) and `before-after.tsx` cards had no CTA —
the trust proof was inert with no "see more" target.

**Fix.**
- `FeaturedProjects` — all 4 cards are now real `<Link>`s to the project
  gallery hub (`/projects`, tree-native prefixed for MS/ZH), with descriptive
  aria-labels and a "View project gallery" header link.
- `BeforeAfter` — all 3 cards are now `<Link>`s to the matching service page
  (`/services/painting|waterproofing|ceiling`, tree-prefixed), with
  hover/elevated affordance and a "View service & pricing" affordance.
- Link destinations were chosen to be **truthful now** (existing service/
  gallery pages) — real per-project case-study pages with itemised cost and
  photos remain the owner-photography-dependent half (P5-12).

**Verified:** homepage renders 3 BeforeAfter + 4 FeaturedProjects `<a>` cards
with descriptive aria-labels; all hrefs resolve (audit:links 0 broken).

---

## Files changed
- `app/robots.ts` — allow `/search` (P3-15)
- `app/(en)/search/page.tsx`, `app/(ms)/ms/search/page.tsx`,
  `app/(zh)/zh/search/page.tsx` — noindex query variants; EN hreflang cluster;
  MS/ZH tree-safe shortcut links (P3-15)
- `app/(en)/sitemap-news.xml/route.ts` — true 48-hour dynamic EN/MS/ZH news
  feed, valid-when-empty (P3-16)
- `middleware.ts` — `/ms/search`, `/zh/search` added to REAL_LOCALE_TREES
- `scripts/generate-ai-context.ts` — aeo-faq.txt 8 → 24 Q&As (P3-19)
- `messages/en.json`, `messages/ms.json`, `messages/zh.json` — fixed-quote CTA
  copy + `common.serviceNameGeneric` (P4-08)
- `components/sections/hero.tsx` — WhatsApp prefill uses neutral service name
- `components/exit-intent-popup.tsx` — removed 30s timer, exit-intent only
  (P4-03)
- `components/ui/footer.tsx` — tiered Explore + `hubPath()` tree-native links
  (P4-16)
- `lib/seo.ts` — `getAreaPlaceSchema`, `getAreaServiceSchema`, @id-wired
  `getLocalBusinessServiceSchema` + `getServiceAreaSchema` (P4-14)
- `app/(en)/areas/[slug]/page.tsx` — emit full Place + Service entities
- `components/sections/featured-projects.tsx`, `components/sections/before-after.tsx`
  — real links + aria-labels (P4-10)
- Regenerated AI-context outputs (`public/aeo-faq.txt`, `llms*.txt`,
  `site-summary.json`) and audit data snapshots.

## Gates
prebuild **329,897 assertions × 0 failures** · type-check ✅ · lint 0 warnings
· build **4,141 HTML** (+7 dynamic: 3 search + news + api/error-log +
search variants) · audit:html **0 fatal / 0 warning** · audit:links
**312,968 rendered + 55 source → 0 broken** · audit:seo-head **4,114
indexable = 4,114 sitemap, 0 dup titles/descs** · audit:schema-size **PASS** ·
audit:bp1 **PASS** (NAP strip 62.8%) · audit:location-similarity **69.5% max**
· audit:meta 0 parse failures · seo:audit PASS · part5 **0 JSON-LD errors** ·
part3 corpus **BM leaks 0 / ZH leaks 0**.

## Remaining after this wave (owner-blocked or data-dependent)
- **P4-10 content half** — real per-project case-study pages with actual
  photos + itemised cost (owner photography P5-12; code/link scaffolding done).
- **P4-09 / P2-21 / P3-09 / P5-09** — reviews/AggregateRating, stats,
  founding-year verification (owner GSC/GBP/fact confirmation).
- **P2-22** — outbound authority citations (owner decision).
- **P4-11** — named team page (owner bios).
- **P4-13 / P2-C4 / BP-1 phase 2** — local-page restructure (blocked on owner
  GSC keep-set).
- **P0 host canonical (www/non-www)** — needs live edge access.
