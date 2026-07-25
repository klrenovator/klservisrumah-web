# KL Servis Rumah — Upgrade to KLRenovator Gold Standard

**Session:** `arena/019f9b58-klservisrumah-web` · 2026-07-25

Benchmark: `klrenovator/KLRenovator` · Target: `klrenovator/klservisrumah-web`

---

## Method

The live sites were unreachable from the build sandbox, so the audit was run
against the **local production build** (`next build && next start`), crawling all
**437 unique routes reachable from `/`** and diffing the architecture against the
KLRenovator reference repo. Every number below is measured, not estimated.

---

## Baseline vs. now

| Metric | Before | After |
|---|---|---|
| Routes returning non-200 | 0 | **0** |
| Titles > 60 chars | **425 / 437** | **0** |
| Titles with the brand twice | **26** | **0** |
| Pages with a wrong canonical | **6** | **0** |
| Pages with no `alternates` block | **16** | **0** |
| Descriptions outside 110–158 | **124** | **0** |
| Duplicate descriptions | — | **0** |
| Pages with ≠ 1 `<h1>` | 1 | **0** |
| hreflang targets that 301-redirect | all `ms`/`zh` | **0** |
| Duplicate `BreadcrumbList` blocks | 28 pages | **0** |
| Breadcrumbs anchored at Home | no | **yes** |
| Logo PNG alpha channel | **none (checkerboard baked in)** | **RGBA** |
| Translation key parity (EN/MS/ZH) | 483 / 483 / 486 | **486 / 486 / 486** |
| `tsc --noEmit` | clean | clean |
| `eslint --max-warnings=0` | 4 errors | clean |
| Build | green (4,029 pages) | green (4,029 pages) |

---

## Completed

### ✅ Phase 1 — SEO correctness foundation
- ✅ `lib/seo-meta.ts` — one source of truth for title, description, canonical, hreflang, OG/Twitter
- ✅ Title optimizer: strips any pre-existing brand, clamps on separator/word boundaries, trims dangling connectors, and **drops the brand rather than truncating the keyword phrase**
- ✅ Description optimizer: clamps on sentence boundaries to ≤158 chars
- ✅ Removed the double-suffix `title.template` from `app/layout.tsx`
- ✅ Fixed `/services` + all 5 `/tools/*` canonicals (were pointing at the homepage)
- ✅ Added canonical/hreflang/OG to the 16 pages that had none
- ✅ Self-referencing hreflang everywhere (matches the client-side language switch)
- ✅ Same fix applied in `app/sitemap.ts`
- ✅ Deleted 5 dead vanity route files already 308-redirected by `next.config.mjs`
- ✅ `/ms` + `/zh` scaffold pages set to `noindex` so they can't compete with `/`

### ✅ Phase 2 — Schema / AEO / GEO
- ✅ **Article dates fixed** — schema emitted `"July 20, 2026"`; Schema.org requires ISO-8601, so Google rejected the date and dropped the Article rich result. Added `toIsoDate()`.
- ✅ Removed 28 duplicate `BreadcrumbList` emissions
- ✅ `<Breadcrumbs>` now anchors every trail at **Home** (visible + JSON-LD)
- ✅ Validated FAQPage / BreadcrumbList / Service / LocalBusiness / BlogPosting / HowTo / ItemList across the route families — **0 issues**
- ✅ IndexNow route now sends the required `keyLocation` (was computed, never sent → key verification failed)

### ✅ Phase 3 — Headings & customer-facing copy
- ✅ All 44 problem pages had broken grammar (*"Why Is My Peeling Paint in Malaysian Homes?"*) → keyword-first, grammatical headline
- ✅ Generic H1s replaced with keyword + geo variants, in all three languages
- ✅ `/about` had two `<h1>`; `/services/[slug]` repeated its `<h1>` as a decorative image caption
- ✅ `/about` + `/faq` hero headings were hard-coded English → dictionary-driven
- ✅ Fixed `/services` H1 rendering as *"…You Needin KL"* (a `<br/>` supplies no text node)
- ✅ Removed internal SEO jargon from user-visible copy ("AI Overviews (AIO)", "snippet placements", "AEO / GEO hub")
- ✅ Translation parity restored to 486/486/486

### ✅ Phase 4 — Brand assets
- ✅ **Root cause of the "pasted photo" logo**: the editor's transparency checkerboard was flattened into the pixels and `logo.png` had *no alpha channel* (PNG colour type 2)
- ✅ Rebuilt alpha from the artwork (chroma + luma separation, speckle filter, hole fill, 1px feather, checker un-composited from edge pixels)
- ✅ Added `logo-lockup.png` — the badge is aspect 2.15 with the wordmark in only the right half, so at 52px header height it scaled to ~112px and became unreadable; the lockup (aspect 3.9) stays legible
- ✅ Regenerated all 8 PWA icons, favicon.ico/png, 512px monogram
- ✅ Added dedicated **maskable** icons — the manifest declared transparent icons `"any maskable"`, and Android crops maskable icons to a squircle, clipping the glyph
- ✅ Added a real 1200×630 `og-image.jpg` on white (social platforms ignore alpha); `defaultOgImage` no longer points at the raw logo bitmap
- ✅ Logo payload 1.1 MB → 493 KB; header lockup served as a **9 KB WebP**

---

## Pending / recommended next

- ⏳ **Visual QA on real devices** at 375 / 768 / 1440 px — the sandbox has no browser, so all checks here are HTTP/DOM-level
- ⏳ **Real photography** — hero and project images are still SVG/placeholder pending client assets
- ⏳ **Real customer reviews** — only import from a verified GBP/direct source; `aggregateRating` is currently config-driven
- ⏳ **True locale-prefixed routing** (`/ms/...`, `/zh/...` as real SSG pages). Today all three languages share one URL with a client-side switch, which is *correctly* expressed as self-referencing hreflang — but separate indexable URLs per language would capture BM/ZH search demand directly. This is the single biggest remaining SEO opportunity and needs a dedicated migration.
- ⏳ **External/manual**: Google Business Profile optimisation, GSC + Bing verification, Rich Results Test on the live domain, backlink/PR
- ⏳ `scripts/seo-audit.ts` still can't run standalone (`@/` path aliases aren't resolved by the bare node loader); the crawl-based audit used in this session is the working substitute and could be committed as a script

---

## Recommendations

1. **Keep all metadata flowing through `buildMetadata()`.** Every defect fixed here originated from a route hand-rolling its own metadata object. A lint rule banning raw `alternates:` in `app/**/page.tsx` would prevent regression.
2. **Re-run the crawl audit in CI.** The 437-route crawl takes ~6 seconds and would have caught all seven classes of bug found in this session.
3. **Prioritise locale-prefixed routing next** — it is the largest remaining structural gap versus the reference implementation.
