# FIX WAVE 9 — CRO/UX QUEUE (P4-05 · P4-03 · P4-02 · P4-07 · P4-12 · P4-06 · P4-16 · P4-17 · P4-11 code half)

**Date:** 2026-08-29
**Branch:** arena/01a04cc0-klservisrumah-web
**Scope:** the unblocked Part 4 (SXO/CRO/UX) priority queue — 8 audit findings + the
code-repo half of P4-11. Owner-blocked items (P4-09 reviews, P4-13 GSC keep-set,
P5-12 photography, P4-11 named bios) are untouched and remain ⏳ in TRACKING.md.

---

## 1. P4-05 (HIGH) — persistent booking float on every page ✅

**Problem:** `StickyBookButton` was mounted only on `/services/<svc>` + `/services/<svc>/<sub>`
(251 pages). `/pricing`, `/tools`, `/problems`, `/areas`, `/blog` — the highest-intent
commercial pages — had **0%** float coverage.

**Fix:**
- `StickyBookButton` is now mounted **once, globally** in `SiteChrome` (all three locale
  trees).
- It **derives booking context from the pathname** via `usePathname()`:
  - `/services/<slug>` and `/services/<slug>/<sub>` → localized service title
    (`serviceNavBySlug` + `getLocalizedServiceNav`, so MS/ZH visitors get native prefill);
  - `/areas/<slug>` → localized area name (`areaNavBySlug` + `getLocalizedAreaName`);
  - everywhere else → the plain label link.
- The two page-level mounts were removed; the `WhatsAppButton` dispatch desk was
  deleted (`components/ui/whatsapp-button.tsx`).

**Verification:** `data-analytics-page="sticky_book_button"` present on `/pricing`,
`/services/painting` (**exactly 1**, no duplicates), and `data-analytics-service` carries
the localized service title (e.g. `Aircon Service, Repair &amp; Installation`).

## 2. P4-03 (MEDIUM) — single floating CTA per viewport ✅

**Problem:** desktop service pages stacked the global WhatsApp dispatch desk
(`fixed bottom-6 right-6`) + the sticky book button (`fixed bottom-20 right-4`).

**Fix:** with the book button now global and the dispatch desk removed, every viewport has
exactly **one** desktop float (the book button) and the existing mobile sticky
WhatsApp+Call bar. `whatsappDesk.*` i18n keys are **kept** — `generic-content-page.tsx`
still renders an in-content dispatch CTA (`whatsappDesk.cta`).

## 3. P4-02 (MEDIUM) — mobile quote box above the fold ✅

**Problem:** on mobile the hero was a full-viewport photo (`min-h-[calc(100svh-5rem)]`)
and the quote form lived in a separate section **after** the hero — the conversion form
required a scroll.

**Fix (`components/sections/hero.tsx`):**
- Mobile hero min-height is now content-driven (`min-h-0`; desktop keeps
  `sm:min-h-[calc(100svh-7rem)]`).
- The **static, JS-free `QuickQuoteForm`** (compact variant) now renders **inside the
  hero viewport** on mobile/tablet (`lg:hidden`), directly under the CTA buttons.
- The old after-hero mobile `QuoteBox` section was removed; the desktop `QuoteBox`
  (right column, client-side WhatsApp open) is unchanged.

## 4. P4-07 (MED–HIGH) — static SSR inquiry form ✅

**Problem:** the only lead form (`MultiStepBookingForm`) is JS-gated — no `<form>`/`<input>`
in static HTML, submission via `window.open`. Non-JS crawlers saw no form; non-WhatsApp
visitors had no non-telephony path.

**Fix — three pieces:**
1. **`app/api/inquiry/route.ts`** (new): GET + POST handler; trims/caps every field
   (name ≤ 120, message ≤ 1200, service/area ≤ 200), strict `lang` allowlist
   (en/ms/zh), then **302-redirects to `wa.me`** with the composed, locale-aware
   request. `force-dynamic`, no state, no PII persisted.
2. **`lib/whatsapp.ts` → `getWhatsAppInquiryLink()`**: composes the existing
   locale templates + optional `My name:` / `Job details:` lines (native MS/ZH
   phrasing).
3. **`components/sections/quick-quote-form.tsx`** (new): a deliberately JS-free native
   `<form method="get" action="/api/inquiry">` — renders in static HTML with all
   options (name, service × 29 with localized titles + prices, area × 49, message,
   hidden `lang`), submits **without JavaScript**. Mounted:
   - homepage hero (mobile viewport, compact — P4-02),
   - `/contact` (top card above the detailed booking form).

**Verification:** `action="/api/inquiry"` in `/index.html` + `/contact.html`;
`GET /api/inquiry?service=…&area=…&name=…&message=…&lang=en` → `302` →
`wa.me/601116627349?text=Hi%20KL%20Servis…%0A%0AMy%20name%3A…` (MS + ZH variants
verified too).

## 5. P4-12 (MEDIUM) — visible coverage map + real `hasMap` ✅

**Problem:** 0 embedded maps in the corpus; `hasMap` on every page pointed at the
Google Business **share shortlink** (`share.google/…`) — not a map.

**Fix:**
- **`components/sections/coverage-map.tsx`** (new): a fully **static inline SVG** map of
  the Klang Valley — equirectangular projection of the same `areaPages` lat/lng that
  power the 36 area hubs, a hand-traced coverage silhouette, **37 clickable markers**
  (each links to `/areas/<slug>`), labels for 12 major hubs, and a highlighted-marker
  variant. Zero third-party requests, **zero CSP changes** (the site's
  `frame-src 'none'` rules out Google iframes — this is the audit's own listed
  alternative), zero owner keys. Locale-aware via message dictionaries; the heavy
  `area-data.ts` registry stays server-side (slim prop).
  - Mounted on `/areas` (hub) and all 37 `/areas/<slug>` pages (with the current
    area highlighted).
- **`config/site.ts`** → new `links.mapUrl` = Google Maps universal place URL
  (`maps.google.com/search/?api=1&query=KL+Servis+Rumah,+Jalan+Kiara,…`); **`lib/seo.ts`**
  `hasMap` now emits it on every page (was `links.googleMaps` share URL, which stays for
  `sameAs`/GBP).

**Verification:** 37 marker links on `/areas`; `Coverage map with Kuala Lumpur
highlighted` on `/areas/kuala-lumpur`; `hasMap` = `https://www.google.com/maps/search/?api=1&query=…` in `/index.html`.

## 6. P4-06 (MEDIUM) — include/exclude scoping on service pages ✅

**Problem:** the pricing section implied the scope boundary via descriptions + one
`AlertCircle` note — no scannable "what's included / not included" list (known
abandonment trigger for variable-scope services like renovation/painting).

**Fix:** new two-column block at the end of the pricing section on all 29 service pages,
driven by the **rate-book data** (`SERVICE_SCOPES`):
- **What's included** — the published priced scopes (`name` + published rate).
- **What's not included (quoted separately)** — the rate-book `quoteOnly` rows
  (previously visible only on the cost page) + 3 honest generic exclusions
  (non-standard materials / structural-permit work / post-opening discoveries).
- Data flows **server-side** (`page.tsx` → `scopeSummary` prop → `LocaleServiceView` →
  `ServiceDetailContent`), so the 63 KB rate-book registry never enters the client
  bundle (client-bundle guard still green — 218 modules).

**i18n:** `serviceContent.includedHeading/includedSub/notIncludedHeading/notIncludedSub`,
`serviceContent.excludedGeneric.{1..3}` — native EN/MS/ZH, parity gate PASS
(1,213 keys × 3).

## 7. P4-16 (MEDIUM) — cost-guide link from the service hero ✅

**Problem:** `/services/<svc>/cost` averaged 8.4 inbound (hub-linked only from `/pricing`
after CF-4).

**Fix:** the service hero CTA row now includes a **"Full Price Guide"** link to
`/services/<svc>/cost` on all 29 service pages (+29 new hub-equity inbounds to the
money pages). New key `serviceDetail.fullPriceGuide` ×3 locales.

**Verification:** `Full Price Guide` + `/services/painting/cost` href in
`.next/server/app/services/painting.html`.

## 8. P4-17 (LOW–MED, P1 aircon) — aircon problem + tool inlinks ✅

**Problem:** all 10 aircon problem pages had 1–2 inbound; reachable only via the
problems hub.

**Fix:**
- `RelatedProblems` for the aircon service now renders **6 of its 9 problems**
  (was 4) — `maxItems={service.slug === "aircon" ? 6 : 4}`.
- New **"Aircon cost calculators"** row on the aircon service page linking
  `/tools/aircon-btu-calculator`, `/tools/aircon-installation-cost`,
  `/tools/aircon-gas-topup-cost`, `/tools/aircon-electricity-cost` — closing the
  tools ↔ problems loop (tools already link back to the aircon service).
- i18n: `internalLinks.airconTools/airconToolsSub` + `toolsList.*` ×3 locales.
- (The RelatedProblems component already links `/problems` via
  `internalLinks.viewAllProblems` — verified present.)

**Verification:** 6 `/problems/aircon-*` links + 4 `/tools/aircon-*` links in
`/services/aircon.html`.

## 9. P4-11 (code half) — re-attribute the unverifiable authorship claim ✅

**Problem:** homepage AEO hub claimed *"Every page is written by local tradesmen"* —
unverifiable (P3-09) and no named authors exist.

**Fix:** reworded to a defensible claim: *"Every guide is researched from our own job
records, published rates and written warranty terms, and refreshed for {year}."*
(The named-author/team-page half stays ⏳ PENDING — needs owner bios/approval, and
fabricating personas is off-limits.)

---

## Quality gates — all PASS

| Gate | Result |
|---|---|
| `npm run lint` | ✅ 0 errors, 0 warnings |
| `npm run type-check` | ✅ PASS |
| `npm run prebuild` (generators + 16 validators) | ✅ **320,291 assertions × 0 failures**; client-bundle guard 218 modules, 0 registry leaks |
| `npm run build` | ✅ SUCCESS — 3,652 static HTML (middleware 35.6 kB) |
| `npm run audit:html` | ✅ 3,652 pages — 0 fatal, 0 warnings |
| `npm run audit:seo-head` | ✅ PASS — 3,626 indexable self-canonical, 26 noindex, 0 dupes |
| `npm run audit:links` | ✅ 278,649 rendered + 54 source — 0 broken |
| `npm run audit:i18n` | ✅ 1,213 keys × 3 locales, 0 missing/extra/empty/malformed |
| `npm run audit:schema-size` | ✅ PASS (hasMap swap is size-neutral) |
| `npm run audit:bp1` | ✅ PASS — 2,146 retired URLs stay retired |
| `npm run audit:location-similarity` | ✅ all layers < 70% |
| `npm run seo:audit` + `audit:meta` | ✅ PASS (`docs/seo-audit-report.md` regenerated) |
| `test:estimators` (in prebuild) | ✅ 320,291 assertions × 0 failures |

Live spot-checks against `next start`:
- `GET/POST /api/inquiry` → 302 to `wa.me` with correct EN/MS/ZH prefills (name +
  details appended) — verified with curl.
- `/`, `/contact`, `/areas`, `/areas/kuala-lumpur`, `/services/aircon`, `/ms`, `/zh`,
  `/services/aircon/cost` all 200 (pre-existing `/zh/areas/*` → 301 to EN canonical).

## Files changed

- **New:** `app/api/inquiry/route.ts`, `components/sections/quick-quote-form.tsx`,
  `components/sections/coverage-map.tsx`
- **Modified:** `components/sticky-book-button.tsx`, `components/layout/site-chrome.tsx`,
  `components/sections/hero.tsx`, `components/sections/service-detail-content.tsx`,
  `components/sections/service-detail-hero.tsx`, `components/sections/related-problems.tsx`,
  `components/sections/locale-service-view.tsx`, `components/sections/homepage-aeo-links.tsx`,
  `app/(en)/contact/page.tsx`, `app/(en)/areas/page.tsx`, `app/(en)/areas/[slug]/page.tsx`,
  `app/(en)/services/[slug]/page.tsx`, `app/(en)/services/[slug]/[subservice]/page.tsx`,
  `lib/whatsapp.ts`, `lib/seo.ts`, `config/site.ts`, `messages/{en,ms,zh}.json`,
  `docs/seo-audit-report.md` (regenerated)
- **Deleted:** `components/ui/whatsapp-button.tsx`

## Next session start point

The remaining Part 4 queue is **owner-blocked or explicitly deferred**:
- **P4-09 / P2-21 / P3-09** — review verification + stats (owner; GBP access).
- **P4-13 / P2-C4 / BP-1 phase 2** — GSC keep-set (owner).
- **P4-10** (case studies/photos), **P4-11 named team page** (owner bios),
  **P4-14** (per-area Service entities), **P4-15** (NAP strip), **P4-08** (CTA wording) —
  P2/P3 or content decisions; P4-15 is a small code-only win if the owner wants it next.
- Open low-risk code items from other parts: **P3-02** question H3s + hidden empty-state
  on /faq, **P3-06** blog FAQPage schema, **P3-18** llms.txt aircon+units check,
  **P3-12** MS/ZH pod routes, **P5-13/14** raster OG images, **§5.6** freshness rota,
  **P2-22** outbound citations (owner decision).
