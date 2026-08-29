# Fix Wave 6 — P2-16 / P2-17 / P2-03 (Emergency + Problem depth)

**Date:** 2026-08-29 · **Branch:** `arena/01a04c6b-klservisrumah-web`

This wave closes the last unblocked items in the Part 2 priority queue:

| Finding | What it was | What this wave did | Status |
|---|---|---|---|
| **P2-17** | 29 `/services/<svc>/emergency` pages were one fixed 257–270-word template (pairwise Jaccard **0.727**; the same sentence "Stop or isolate the source if safe" on all 29) | Rewrote the kept pages with per-service emergency content; retired the rest | ✅ DONE |
| **P2-03** | "Urgent Complete House Renovation" / "Urgent Epoxy Flooring" / "Urgent Skim Coat" — fake emergency pages for non-emergency intents | Kept 12 real-emergency services; 301'd the other 17 to their service page and stopped generating/sitemap-listing them | ✅ DONE |
| **P2-16** | 74 problem pages, mean 383 words; 15 pages ≤233 words with 6 H2s + HowTo structure the body never delivered | Enriched the 15 thinnest problems with `overview` + `diyChecks` + `prevention` + `costDetail` (EN/MS/ZH, native) | ✅ DONE (15/15 thinnest; full top-30 target stays ⏳ pending GSC demand data) |

P2-18 (cost pages) was already closed in **CF-4** (the 29 cost pages are now 1,152–2,264-word rate-book guides).

---

## 1. Emergency page classification (P2-03)

`config/emergency-services.ts` (new) is the single source of truth:

- **KEEP (12)** — real emergency semantics, evidenced by the site's own content
  (leak/ceiling estimators, "emergency" severities, lockout/security positioning):
  `plumbing`, `electrical`, `water-heater`, `locksmith`, `roof-repair`,
  `window-repair`, `door`, `autogate`, `cctv`, `waterproofing`, `ceiling`,
  `glass-aluminium`.
- **RETIRE (17)** — keyword-slot fillers with no genuine emergency intent:
  `painting`, `handyman`, `house-renovation`, `ceiling-fan`, `lighting`,
  `tiling`, `plaster-ceiling`, `skim-coat`, `flooring`, `epoxy-flooring`,
  `kitchen-cabinet`, `carpentry`, `welding`, `aircon`, `kitchen-renovation`,
  `bathroom-renovation`, `awning-installation`.

Retirement mechanics (same real-301 pattern as BP-1 phase 1):

- `middleware.ts` — `RETIRED_EMERGENCY_REDIRECTS` 301s
  `/services/<slug>/emergency` → `/services/<slug>` (path-only target, clears
  query string).
- `app/(en)/services/[slug]/emergency/page.tsx` — `generateStaticParams` now
  enumerates only the 12 kept services (`dynamicParams = false`, so a retired
  slug can never be rendered on demand as a soft 200).
- `app/(en)/sitemap.ts` — the emergency `<url>` is emitted only for kept
  services (sitemap 3,643 → 3,626 URLs).
- `components/sections/locale-service-cost-view.tsx` — the "urgent option"
  card now renders only for `isEmergencyService(slug)`, so no page links into a
  retired 301.

## 2. Emergency page rewrite (P2-17)

`components/sections/locale-service-emergency-view.tsx` was rewritten from the
fixed 3-step template to render, per service and per locale:

1. **What counts as an emergency** (5 service-specific items)
2. **What to do right now** (4 immediate, safety-first steps)
3. **When to call a professional** (4 triggers)
4. **Emergency cost factors** (honest, factor-based — no fabricated prices)
5. Coverage areas, 4 service-specific FAQs (FAQPage schema), 6 sibling
   emergency inlinks (drawn from the kept set only), WhatsApp CTA.

All copy lives in `config/emergency-services.ts` as `EMERGENCY_SERVICES`
(`Record<Locale, EmergencyContent>`), so the page stays native in EN / BM / 中文
under the site's client-side language switching (the emergency route is an
English-only URL per the sitemap's hreflang policy).

## 3. Problem page depth (P2-16)

New optional fields on `ProblemDetail`:

- `overview` — what is happening and why it matters (intro paragraph)
- `diyChecks` — 4 safe checks the homeowner can do before calling
- `prevention` — 4 prevention tips
- `costDetail` — what actually drives the price band

Plumbing:

- `config/problem-data.ts` — `ProblemDetail` type + English depth copy on the
  15 thinnest problems (the ones the Part 2 audit cited at ≤233 words).
- `config/problem-body-i18n.ts` — `LocalizedProblemBody` type + native MS/ZH
  depth blocks for the same 15 slugs (alongside their existing body i18n).
- `lib/problem-body-i18n.ts` / `lib/problem-i18n.ts` — pass-through + merge so
  `getLocalizedProblem()` returns localised depth fields.
- `components/sections/locale-problem-view.tsx` +
  `components/sections/locale-problem-page.tsx` — render the new sections
  ("Safe DIY checks first" / "How to prevent it" / "What affects the cost").
- `scripts/validate-problem-i18n.ts` — the prebuild gate now also enforces
  native (non-English, non-thin) MS/ZH depth fields wherever the English
  record carries them, so an enriched page can never silently fall back to
  English.

Enriched problems (15): `sliding-window-stuck`, `smart-lock-not-working`,
`shower-screen-leaking`, `door-scraping-floor`, `cctv-not-recording`,
`epoxy-floor-yellowing`, `autogate-not-closing`, `wardrobe-door-not-closing`,
`spc-flooring-peeling-edges`, `peeling-skim-coat`, `clogged-gutter-leaking`,
`kitchen-cabinet-door-misaligned`, `ceiling-fan-wobbling`,
`water-heater-not-heating`, `condensation-ceiling-mold`.

## 4. Quality gates (all green)

| Gate | Result |
|---|---|
| `npm run lint` | 0 errors, 0 warnings |
| `npm run type-check` | PASS |
| `npm run build` | SUCCESS — 3,652 HTML; middleware 35.6 kB |
| `npm run audit:bp1` | PASS — 2,146 retired URLs, 0 regenerated, 0 links into retired URLs |
| `npm run audit:schema-size` | PASS |
| `npm run audit:html` | 0 fatal / 0 warnings (3,652 pages) |
| `npm run audit:links` | 277,170 rendered + 53 source links, 0 broken |
| `npm run audit:seo-head` | PASS — 3,626 self-canonical indexable, 26 noindex, sitemap = 3,626, 0 dupes |
| `npm run audit:i18n` | PASS — 1,183 keys × 3 locales |
| `npm run audit:problem-i18n` | PASS — 74 keep-URLs × ms/zh, 0 gaps / leaks / dupes |
| `npm run audit:location-similarity` | PASS — all layers < 70% |
| `npm run seo:audit` | PASS |
| `npm run test:estimators` | 320,291 assertions, 0 failures |
| `npm audit` | 0 vulnerabilities |

All regenerated artifacts (sitemap count, `public/site-summary.json`,
`public/llms-full.txt`, `docs/seo-audit-report.md`) updated to the new corpus:
**3,652 rendered HTML · 3,626 indexable/sitemap URLs**.

## 5. What stays ⏳ PENDING

- **P2-16 remainder** — the audit's "700+ words on the **top-30** problems by
  demand" target. The 15 thinnest are done; the next 15 by GSC demand need the
  owner's Search Console data to rank (same blocker as BP-1 phase 2).
- **P2-19** — real per-article blog dates / lastMod (independent, unblocked —
  next session candidate).
- **P2-22** — outbound citations (brands/authority) — content decision, owner.
- **P2-21 / P3-09** — review + stats verification — owner.
- **BP-1 phase 2 / P2-C4** — blocked on GSC keep-set (owner).

## 6. Never do (reinforced this wave)

- ❌ Never regenerate an emergency page for a retired service — `isEmergencyService`
  is the single gate; the 17 retired slugs 301 in middleware and are excluded
  from `generateStaticParams`, the sitemap, and the cost-page emergency card.
- ❌ Never enrich a problem in English without its MS/ZH depth block —
  `audit:problem-i18n` now fails the build on a native-content gap.
