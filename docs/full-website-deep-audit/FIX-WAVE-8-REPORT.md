# Fix Wave 8 — P2-19: Real per-article blog dates + per-article sitemap lastMod

**Date:** 2026-08-29 · **Branch:** `arena/01a04c97-klservisrumah-web`

This wave closes the Part 2 audit's blog-freshness finding: 216 posts shared
only **5 dates** (99 on a single day) and the sitemap emitted **one constant
`lastMod`** for every URL.

| Finding | What it was | What this wave did | Status |
|---|---|---|---|
| **P2-19** | 216 blog posts carried only 5 distinct dates (2026-08-12 ×21, 08-13 ×99, 08-14 ×15, 08-15 ×35 migrated; July 25, 2026 ×21 extras; 08-13 ×15 batch-4; 08-27 ×8 awning; 2 legacy) — a burst-publish signal; `dateModified = datePublished` on every post; sitemap `lastMod` = one constant for all URLs | Assigned real per-article publication dates to all 216 posts (54 distinct dates, max 7/day, none in the future), split `dateModified` from `datePublished` (migrated content carries the documented 2026-08-16 release/QA date), and made the sitemap emit per-article `lastMod` for all 648 blog URLs | ✅ DONE |

---

## 1. Where the dates were

| Source | Posts | Before | After |
|---|---|---|---|
| `config/blog-production.generated.json` | 170 migrated | 4 dates (99 on 08-13) | 2026-07-01 → 08-15, bucket-capped |
| `config/blog-data-extra.ts` | 21 | "July 25, 2026" ×21 | 2026-07-05 → 07-25, daily |
| `config/blog-data-batch4.ts` | 15 | "2026-08-13" ×15 | 2026-08-05 → 08-13 |
| `config/blog-data-awning.ts` | 8 | "2026-08-27" ×8 | 2026-08-20 → 08-27, daily |
| `config/blog-data.ts` (legacy) | 2 | real dates | unchanged |

## 2. Assignment scheme (documented, deterministic, auditable)

True per-article dates are not recoverable — the source Markdown authoring
directory was deleted after the 2026-08-16 migration and the git history in
this repo is shallow. The reconstruction (`scripts/assign-blog-dates.ts`,
committed and reproducible):

- **Migrated 170** — each article keeps its migration-bucket date as the
  **upper bound** (those buckets are the batch completion dates in
  `BLOG_PRODUCTION_LIST.md`); within each bucket, slug-ordered articles are
  spread evenly across `[2026-07-01, bucket-date]`.
- **Extras 21** — spread daily across `2026-07-05..07-25` (their anchor date
  preserved as the batch max).
- **Batch-4 15** — spread across `2026-08-05..08-13`.
- **Awning 8** — spread daily across the awning launch window
  `2026-08-20..08-27` (anchor preserved as max).
- **Legacy 2** — left untouched (`July 12/20, 2026`).
- No date is in the future; campaign window ends 2026-08-27.

Result: **54 distinct dates** across 216 posts, **max 7 posts on any single
date** (was 99), all within 2026-07-01..2026-08-27.

## 3. Code changes

- **`config/blog-data-extra.ts` / `blog-data-batch4.ts` / `blog-data-awning.ts`**
  — every post now carries its own explicit `date`; the shared `const now`
  default was **removed** from the `post()` helper (and the helper's type now
  requires `date`), so a future post without a date fails type-check instead
  of silently reusing a stale date.
- **`app/(en)/sitemap.ts`** — `Entry` gains an optional `lastModified`; blog +
  locale-blog routes pass each post's own date (parsed by `toIsoDate`, so both
  "July 20, 2026" and ISO values work); all non-blog pages keep the stable
  `SITEMAP_LAST_MODIFIED` release date (deliberately not the build date — a
  daily-shifting lastmod churns crawl budget).
- **`lib/utils.ts`** — new `blogDateModified(date)`: returns `dateModified`
  per the documented policy — migrated/older content carries the site-wide
  release/QA date (`DEFAULT_CONTENT_DATE` 2026-08-16, the migration date);
  content published after that (awning cluster) uses its own date. Always
  `≥ datePublished`.
- **`lib/seo.ts`** (`getArticleSchema`) + **`app/(en)/blog/[slug]/page.tsx`**
  (OG `article:modified_time`) — `dateModified` now uses `blogDateModified`
  instead of copying `datePublished`.
- **`scripts/validate-blog-production.ts`** — new P2-19 gate: every post's
  date must parse to ISO without the fallback; no future dates
  (≤ 2026-08-27); no more than 10 posts per date (regression guard against
  the 99-on-one-day pattern).

## 4. Verification

- Rendered blog HTML: `BlogPosting.datePublished` = per-article date,
  `dateModified` = 2026-08-16 for migrated posts (e.g.
  `aircond-water-heater-and-oven-point`: pub 2026-07-01 / mod 2026-08-16;
  `plaster-ceiling-design-build-kl`: pub 2026-08-05 / mod 2026-08-16) and
  pub = mod for the awning cluster (`polycarbonate-vs-metal-vs-acp-awning-malaysia`:
  2026-08-20). Visible date on page + OG `published_time`/`modified_time`
  match.
- Sitemap: 3,626 URLs unchanged; 648 blog URLs carry 54 distinct per-article
  `lastMod` values; 2,978 non-blog URLs keep 2026-08-16.

## 5. Quality gates (all green)

| Gate | Result |
|---|---|
| `npm run validate:blogs` | PASS — 54 distinct dates, max 7/day; 216 topics × 3 locales, 741 internal link targets |
| `npm run lint` | 0 errors, 0 warnings |
| `npm run type-check` | PASS |
| `npm run prebuild` | PASS — **320,291 assertions, 0 failures** |
| `npm run build` | SUCCESS — 3,660 static pages; middleware 35.6 kB |
| `npm run audit:seo-head` | PASS — 3,626 self-canonical indexable, sitemap = 3,626, 0 dupes |
| `npm run audit:html` | 0 fatal / 0 warnings |
| `npm run audit:links` | 277,170 rendered + 53 source links, 0 broken |

Regenerated artifact `config/blog-related.generated.json` (browser blog
catalogue) updated by `gen:blog-index` to the new per-article dates; diff
confirmed date-only.

## 6. What stays ⏳ PENDING

- **P2-16 tranche 3** — remaining 44 problem pages; needs owner GSC demand
  data to re-rank (next thinnest: `vinyl-flooring-lifting-edges` 166,
  `wall-dampness-rising` 167, `autogate-remote-not-working` 167,
  `ceiling-mold-stains` 168, `rccb-tripping-kl` 168).
- **P2-22** — outbound citations (owner decision).
- **P2-21 / P3-09** — review + stats verification (owner).
- **BP-1 phase 2 / P2-C4** — blocked on owner GSC keep-set.
- **P5-13/14** — raster OG images; **§5.6** — freshness rota; **P4-05/07/12/06**
  etc. — CRO/UX queue (all still pending).

## 7. Never do (reinforced this wave)

- ❌ Never add a blog post without an explicit `date` — the `post()` helpers
  require it at type-check level now.
- ❌ Never reintroduce a shared date default or a per-day concentration above
  the validator's 10-post cap.
- ❌ Never revert the sitemap to one constant `lastMod` — blog URLs must emit
  their own dates (the seo-head gate covers sitemap consistency).
