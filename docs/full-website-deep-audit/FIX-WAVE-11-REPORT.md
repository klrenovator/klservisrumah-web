# FIX WAVE 11 — P3-12 MS/ZH POD ROUTES (215 kept pods + 10 hubs × 2 locales)

**Date:** 2026-08-29
**Branch:** arena/01a04d3e-klservisrumah-web
**Scope:** Part 3 **P3-12** — the kept guide/pod/top pages (205 tracked; **215 actual
details** across 10 families + 10 family hubs) had **no MS/ZH URL**. The client-side
i18n dictionaries already existed (a localized toggle re-rendered text client-side
under the EN path), but there were no crawlable localized routes, no localized
canonical, and no hreflang cluster tying the three languages together. The fix
(decided per Part 3: *keep* the pods, *emit localized routes* — the i18n data already
exists) adds a first-class **MS + ZH server route** for every kept pod detail and hub,
each with a localized self-canonical, a 3-URL hreflang cluster, localized OG, an
in-language `<html lang>`, and schema that matches the rendered localized FAQs.

**Indexable growth:** MS pod routes = **215 details + 10 hubs**; ZH = **215 details +
10 hubs** ⇒ **450 new localized pod URLs**, all added to the sitemap as indexable,
self-canonical pages. Verified on the rebuilt corpus by `audit:seo-head`: **4,054
self-canonical indexable pages = 4,054 sitemap URLs** (mutual parity, 0 dup titles /
descriptions). Every MS/ZH pod URL carries a full EN/MS/ZH/x-default hreflang cluster
and a self-referencing canonical; the 10 EN pod-hub sitemap entries were folded into
their hub hreflang clusters rather than dropped.

Owner-blocked items (www canonical, BP-1 phase 2 / P2-C4 keep-set, reviews P2-21,
photography P5-12, stats verification P3-09/P5-09) remain **untouched and ⏳** per
TRACKING.md.

---

## 1. Why the existing i18n data was not enough

`config/content-i18n.ts` and friends already hold polished MS/ZH titles/intros/
bullets/FAQs for the pods, and the EN pod pages pass them to a client component that
re-renders on a language toggle. But that toggle never changed the URL, the
`<html lang>`, the canonical, the meta, or the hreflang — so search engines only ever
saw a single EN pod page. P3-12 is about **localized URLs**, which is a routing
(server) concern, not a dictionary concern.

## 2. Architecture — one audited factory, thin stubs

To avoid hand-writing 40 route modules with subtle drift, all localized pod routes are
produced by a single **route factory**; each route file is a 6-line stub.

| File | Role |
|---|---|
| `config/pod-family-paths.ts` | NEW. `POD_FAMILY_BASE_PATHS` (10 family → EN base path) + derived `POD_LOCALE_TREES`. Dependency-free so `middleware.ts` can import it without pulling the content-data graph. |
| `config/content-locale.ts` | Registry: `podPage`, `podStaticParams`, `podHubPath/Urls`, `podDetailPath/Urls`, families. Now sources base paths from `pod-family-paths` (single source). |
| `lib/content-locale-resolver.ts` | `resolvePodHeader()` (namespaced override → service-derived → legacy dict) + `resolvePod()` body resolution incl. the commercial FAQ-template override. |
| `lib/locale-content-router.tsx` | NEW. `localizedPodDetailRoute(family, locale)` → `{ generateStaticParams, generateMetadata, Page }`; `localizedPodHubRoute(family, locale)` → `{ generateMetadata, Page }`. Central OG-locale map (`ms_MY`/`zh_MY`). |
| `components/sections/locale-content-page.tsx` | NEW server component `LocaleContentPageView` — localized detail page UI (article + FAQPage schema, breadcrumbs, hero, takeaways, guidance, related-service card, 6-sibling InternalLinkGrid, need-help CTA, FAQs, NAP strip, locale-tree links). |
| `components/sections/locale-content-hub.tsx` | NEW server component `LocaleContentHubPage` — localized hub UI (ItemList schema, breadcrumbs, hero, all-family card grid, NAP strip, locale-tree links). |

**40 route stubs** under `app/(ms)/ms/<family>/` and `app/(zh)/zh/<family>/` for all 10
families — each has a hub `page.tsx` and a detail `[slug]/page.tsx`; `guides` also keeps
its nested `maintenance/` subtree (static segment wins over `[slug]`). Stub shape:

```tsx
import { localizedPodDetailRoute } from "@/lib/locale-content-router";
const route = localizedPodDetailRoute("process", "ms");
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export const dynamicParams = false;               // literal — Next statically analyses config
export default route.Page;
```

*Lesson captured:* Next.js only accepts **static, analyzable literals** for route-config
exports (`dynamicParams`, `dynamic`, `revalidate` …). The first cut re-exported
`dynamicParams = route.dynamicParams` (a `MemberExpression`) which the static-info
parser rejected with `Unsupported node type "MemberExpression" at "dynamicParams"`.
Function/default re-exports are fine (Next only checks their *presence*); config values
must be literals. Fix: the factory returns the three functions and each stub declares
`export const dynamicParams = false;` itself.

## 3. SEO behaviour of every new page

- **Static, frozen params.** `generateStaticParams = podStaticParams(family)` (all 215
  kept slugs) + `dynamicParams = false` ⇒ unknown slugs 404; nothing crawls a parametric
  URL that isn't a real pod.
- **Localized self-canonical + 3-URL hreflang.** `buildMetadata({ path, languageUrls:
  podDetailUrls(family, slug) })` emits canonical `…/ms/<family>/<slug>` (resp. `…/zh/…`)
  and alternates for `en-MY`, `ms-MY`, `zh-MY`, `x-default`. The EN pod pages were updated
  to emit the matching cluster (`languageUrls` on the 10 EN `[slug]` pages and the 10 EN
  hub pages via `getHubMetadata`'s new optional `languageUrls`), so each node in the
  cluster references all three.
- **Localized OG locale** (`ms_MY` / `zh_MY`) with the other two as alternates.
- **`lang` attribute** comes from the existing `(ms)`/`(zh)` layout groups →
  `<html lang="ms-MY">` / `zh-MY`.
- **Middleware.** `REAL_LOCALE_TREES` now spreads `POD_LOCALE_TREES` (all 20 MS/ZH family
  trees) so the locale layout/nav/CTA resolution treats them as real localized trees.
- **Sitemap.** `app/(en)/sitemap.ts` emits a 3-URL hreflang cluster per pod (EN + MS + ZH)
  via a `contentPodRoutes` block; the 10 static EN pod-hub entries were folded into the
  hub clusters.
- **Schema matches rendered content.** The detail page builds its FAQPage JSON-LD from
  the *same* `pod.faqs` it renders — commercial pods resolve to the audience-fixed
  localized FAQ templates; service-derived pods use the localized per-service FAQs. No
  schema/render mismatch.

Verified on real built HTML (`/ms/top/best-house-painters-kl-2026`):
`<html lang="ms-MY">`, `<title>Cara Membandingkan Tukang Cat Rumah di KL (2026)</title>`,
self-canonical `…/ms/top/best-house-painters-kl-2026`, four hreflang entries
(en-MY/ms-MY/zh-MY/x-default), localized Malay FAQ copy and matching localized
`acceptedAnswer` in the FAQPage schema.

## 4. Root-caused fix — duplicate localized descriptions

`audit:seo-head` flags duplicate `<meta name="description">` across indexable URLs. It
surfaced **3 collisions** where two *distinct* EN pods collapse to one localized
description, because `resolvePodHeader` falls back to the slug-keyed full dictionaries
(`contentI18nMsFull` / `contentI18nZhFull`) and the localized intro had been authored
identically for the two slugs:

| Locale | Slugs (family) | Was |
|---|---|---|
| MS | `rainy-season-home-prep` (guides/maintenance) ↔ `home-prep-rainy-season-kl` (seasonal) | identical generic intro |
| ZH | same rainy-season pair | identical generic intro |
| ZH | `nippon-paint-vs-dulux-paint` (compare) ↔ `paint-brand-comparison-nippon-vs-dulux-vs-jotun` (guides) | identical generic intro |

The EN intros are distinct (the maintenance guide leads on *pre-monsoon preventive
checks*; the KL seasonal page on a *timed roof/drain/waterproofing checklist*; the
compare page is a *2-way* Nippon-vs-Dulux practical comparison while the guide is a
*3-way* incl. Jotun). The localized intros were corrected to mirror that nuance — 6
lines edited in `config/content-i18n.ts` (2 MS + 4 ZH). MS paint was already distinct
and untouched. Pre-verified distinct via the resolver, then confirmed on rebuilt HTML.

## 5. Deferred (Phase 2) — authored per-pod FAQs

146 faqTopic families render 4 templated localized FAQs (commercial now audience-fixed;
brands/regard frames already premises-safe). Translating the 146 *authored* EN per-pod
FAQ sets into MS/ZH is deliberately **out of scope** for this wave — programmatic MT is
forbidden by the project rules, so it needs a native translation pass. Recorded as a P2
follow-up in TRACKING.md.

## 6. Gates — all PASS

```
prebuild → test:estimators      → ✓ 320,291 assertions · 0 failures
prebuild → audit:content-pods   → ✓ 29 services × commercial+residential; 232 bullets ×2 locales
type-check                      → ✓ 0 errors
lint (--max-warnings=0)         → ✓ 0 problems
build                           → ✓ BUILD_EXIT=0 · 4,088/4,088 static pages
audit:content-pods              → ✓
audit:seo-head                  → ✓ 4,080 rendered · 4,054 self-canonical indexable ·
                                   sitemap 4,054 (parity) · 0 dup titles · 0 dup descriptions · 0 warnings
audit:bp1                       → ✓ 62.3% NAP-in-content · 7 template families carry the strip
audit:html                      → ✓
audit:links                     → ✓ 308,725 rendered + 56 source links · 0 broken
audit:schema-size               → ✓
audit:raster-og                 → ✓ all 8 templates emitted · pod=1,284 og images
audit:i18n                      → ✓ 1,215 keys × 3 locales · placeholder-perfect
audit:location-similarity       → ✓ max 68.8% < 70% threshold
audit:meta                      → ✓
```

## 7. Files

**New:** `config/pod-family-paths.ts`, `config/content-locale-data.ts`,
`lib/content-locale-resolver.ts`, `lib/locale-content-router.tsx`,
`components/sections/locale-content-page.tsx`,
`components/sections/locale-content-hub.tsx`, and 40 route stubs under
`app/(ms)/ms/**` + `app/(zh)/zh/**`.

**Modified:** 20 EN pod route files (`languageUrls` cluster), `app/(en)/sitemap.ts`
(3-URL pod clusters), `lib/hub.ts` (`getHubMetadata` optional `languageUrls`),
`middleware.ts` (`POD_LOCALE_TREES`), `config/content-i18n.ts` (6 localized intros),
`config/content-locale.ts` (base-path single-source), plus regenerated
`public/llms-full.txt` + `public/site-summary.json` (build output, committed per repo
convention).

## 8. Next session

P3-12 is ✅. Highest-value remaining code candidates (see TRACKING.md item 8): P2-16
tranche 3 (44 problems, thinness order via `scripts/p2-16-wordcount.ts`), P2-16/P2-22
outbound citations (owner decision), **P3-12 phase 2** (native MS/ZH translation of the
146 authored per-pod FAQ sets — no MT), P4-10 / P4-14 / P4-08. All owner-blocked items
stay ⏳ (www canonical, BP-1 phase 2, reviews, photography, stats).
