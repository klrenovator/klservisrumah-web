# Fix Wave 26 — P2-C4 pair-copy rewrite, area-hub H1/H2, knowsAbout, MS/ZH BlogPosting (2026-08-31)

> Scope: the unblocked **copy** half of P2-C4 (replace the landmark×sub-service
> salad generator) plus the leftover on-page/entity items that do not add or
> delete location URLs. **No GSC keep-set, no URL inventory change.**
> BP-1 phase 2 / P4-13 (which pages to keep) stay owner-blocked.

---

## What shipped, by audit finding

### P2-C4 / P2-26 — pair-copy generator replaced ✅ (copy half)

**Problem.** `lib/location-pair-copy.ts` rotated landmarks through unrelated
sub-service names ("For a request around KLCC Petronas Towers, identify the
exact location of wall preparation & priming…") on every area×service and
suburb×service page. Pairwise 5-gram Jaccard sat in the 0.63–0.67 band per
service; the pages read as doorway salad.

**Fix (no new/deleted URLs).**
- New `config/area-work-profile.ts` — authored `stock` (highrise / landed /
  mixed) + trilingual note for all **37** area hubs.
- New `config/suburb-work-profile.ts` — longer authored notes for the **15**
  BP-1 original suburbs (the only `/suburbs/<slug>/<svc>` pages still
  generated). EN suburb `commonIssues` in `suburb-data.ts` is a shared four-
  item list; those generic issues are now **omitted** from pair-copy so they
  cannot glue every suburb page together.
- `lib/location-pair-copy.ts` rebuilt. Each page now interpolates, in order:
  1. the area/suburb's own description
  2. the authored local-work note
  3. an access line that respects housing stock
  4. a service-family paragraph (wet / finish / build / systems / light)
  5. real `sub.desc` scope items (not landmark salad)
  6. the service's own process steps as quotation checks
  Landmarks appear only as a meeting reference. Rate tables stay off these
  bodies (Wave 13 similarity guardrail).

**Similarity gate (required maximum < 70%):**

| Layer | Max Jaccard | Pair |
|---|---|---|
| area-service across areas | **68.8%** | ara-damansara/awning ↔ damansara/awning |
| area-service across services | **63.8%** | kuala-lumpur/ceiling ↔ lighting |
| suburb-service across suburbs | **68.2%** | glenmarie/house-renovation ↔ selangor/house-renovation |
| suburb-service across services | **50.5%** | kampung-datuk-keramat/ceiling ↔ lighting |

The editorial target of <0.45 is **not** reached — shared chrome, process
steps and the rate table still dominate 5-grams — but the **hard gate PASSES**
and the salad pattern is gone. Further Jaccard cuts need either shorter
shared chrome or the owner GSC keep-set (fewer pages), not more rotation.

### P2-13 — area hub H1 ✅

`location.areaH1` (EN/MS/ZH) no longer leads with painting + ceiling only:

- EN: `Painting, Plumbing, Electrical & Renovation in {area}`
- MS: `Mengecat, Paip, Elektrik & Pengubahsuaian di {area}`
- ZH: `{area}油漆、水管、电气与翻新服务`

### P2-12 — area hub ServicesGrid H2 ✅

`ServicesGrid` accepted optional `heading` + `lede`. Area hubs now pass
`location.servicesInArea` / `location.servicesInAreaLede` so the homepage
lede ("Click any service…") is no longer the H2 on 37 `/areas/<area>` pages.
Homepage / `/services` keep `home.servicesGrid.heading` as the H2 and the
long sentence as the lede.

### P2-27 — Organization `knowsAbout` ✅

`config/site.ts` `knowsAbout` regenerated from the 29 live service titles.
Removed stale entries (`Fence & Gate Repair`, `Toilet Bowl Repair`). The
homepage Organization node now advertises the same catalog the site sells.

### MS/ZH BlogPosting JSON-LD ✅

`app/(ms)/ms/blog/[slug]/page.tsx` and `app/(zh)/zh/bo-ke/[slug]/page.tsx`
now emit `getArticleSchema` with localized title/excerpt/path, plus
`toIsoDate` / `blogDateModified` on Open Graph times (parity with EN).
FAQPage markup is unchanged.

---

## Files changed

- `config/area-work-profile.ts` — **new**, 37 area notes
- `config/suburb-work-profile.ts` — **new**, 15 suburb notes
- `lib/location-pair-copy.ts` — generator rewrite
- `components/sections/services-grid.tsx` — optional heading/lede
- `components/sections/locale-area-view.tsx` — area-specific grid heading
- `messages/{en,ms,zh}.json` — `areaH1`, `servicesInArea`, `servicesInAreaLede`
- `config/site.ts` — `knowsAbout` = 29 service titles
- `app/(ms)/ms/blog/[slug]/page.tsx`, `app/(zh)/zh/bo-ke/[slug]/page.tsx` —
  BlogPosting + ISO dates
- `docs/full-website-deep-audit/TRACKING.md` — this wave

## Gates

- lint 0 warnings
- type-check ✅
- prebuild **329,897 assertions × 0 failures** (i18n 1,228 keys × 3)
- `next build` SUCCESS (4,148 static pages generated)
- `audit:location-similarity` **PASS** — max **68.8%** (was 69.5% Wave 25;
  suburb layer recovered from a 76% fail on the first rewrite)

## Remaining after this wave

- **P2-C4 / P4-13 / BP-1 phase 2 URL keep-set** — still owner GSC. Do **not**
  add or delete location pages on traffic assumptions. The generator is no
  longer the blocker.
- **P4-10 content half** — real case-study pages (owner photography).
- **P4-09 / P2-21 / P3-09 / P5-09** — reviews / stats verification.
- **P2-22** — outbound citations (owner decision).
- **P4-11** — named team page (owner bios).
- **P0 www/non-www** — live edge.
- **P5-12** — photography program.
- Jaccard editorial target <0.45 remains open until chrome is slimmer or the
  keep-set drops page count; do not re-introduce landmark salad to chase it.

## Exact stop point for the next session

P2-C4 **copy half complete**. Next work is owner-gated (GSC keep-set,
reviews, photos, bios, citations, www edge). Do not invent owner facts.
Do not re-open P3-12 / P2-16 / §5.4-B1.
