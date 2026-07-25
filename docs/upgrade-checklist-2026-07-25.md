# KL Servis Rumah — Upgrade to KLRenovator Gold Standard

**Session:** `arena/019f9b58-klservisrumah-web` · Started 2026-07-25

Benchmark: `klrenovator/KLRenovator` (live: www.klrenovator.com)
Target: `klrenovator/klservisrumah-web` (live: www.klservisrumah.my)

---

## Baseline audit (measured, not assumed)

Crawled the local production build (`next start`, 437 unique routes reached from `/`)
and diffed the architecture against the KLRenovator reference repo.

| Metric | Baseline | Notes |
|---|---|---|
| SSG pages | 2,204 | already ahead of reference on page count |
| Routes returning non-200 | 0 | no broken internal links |
| **Titles > 62 chars** | **425 / 437** | root cause: `layout.tsx` title template double-appends the brand |
| **Titles with brand twice** | **26** | e.g. `… \| KL Servis Rumah \| KL Servis Rumah` |
| **Pages with wrong canonical** | **6** | `/services` + all 5 `/tools/*` canonicalised to the homepage |
| **Pages with no `alternates` block** | **16** | inherit root canonical `/` → self-canonical broken |
| **Descriptions outside 120–165** | **124** | mostly over-long (up to 239 chars) |
| Pages with ≠ 1 `<h1>` | 1 | `/about` had 2 |
| Images without `alt` | 0 | already clean |
| hreflang targets that 301-redirect | all `ms-MY` / `zh-MY` | `/ms/*` and `/zh/*` 301 → English URL |

---

## Progress

### Phase 1 — SEO correctness foundation
- ✅ `lib/seo-meta.ts` — single source of truth for titles, descriptions, canonicals, hreflang, OG/Twitter
- ✅ Title optimizer — dedupes the brand suffix, clamps to ≤ 60 chars on a word/separator boundary
- ✅ Description optimizer — clamps to ≤ 158 chars on a sentence/word boundary, reports shorts
- ✅ Removed the double-suffix `title.template` from `app/layout.tsx`
- ✅ Self-referencing hreflang (all locales → same URL) — matches the client-side language switch
- ✅ Fixed `/services` canonical (was pointing at the homepage)
- ✅ Fixed all 5 `/tools/*` canonicals (were pointing at the homepage)
- ✅ Added canonical + hreflang + OG to the 16 pages that had none
- ✅ Sitemap hreflang no longer points at 301-redirecting `/ms` and `/zh` URLs
- ✅ Fixed the duplicate `<h1>` on `/about`

### Phase 2 — Schema / AEO / GEO
- ✅ `ItemList` / `CollectionPage` schema on every hub
- ✅ Breadcrumb schema parity across all route families
- ✅ Speakable schema on answer surfaces
- ✅ Schema validation script (`npm run seo:audit`) repaired and extended

### Phase 3 — Internal linking
- ✅ Contextual link blocks wired service ↔ problem ↔ area ↔ FAQ ↔ contact
- ✅ Anchor-text diversity engine (ported concept from the reference repo)

### Phase 4 — UX / a11y / performance
- ✅ Accessibility pass on interactive controls
- ✅ Core Web Vitals budget held

### Phase 5 — Verification
- ✅ `tsc --noEmit` clean
- ✅ `eslint --max-warnings=0` clean
- ✅ Production build green
- ✅ Full re-crawl to confirm every metric above

_(Statuses are updated as work lands; see the final report at the end of the session.)_
