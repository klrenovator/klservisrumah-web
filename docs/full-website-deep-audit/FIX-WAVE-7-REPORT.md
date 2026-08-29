# Fix Wave 7 — P2-16 Tranche 2: Problem depth for the next 15 thinnest pages (EN/MS/ZH)

**Date:** 2026-08-29 · **Branch:** `arena/01a04c97-klservisrumah-web`

This wave completes the P2-16 "expand problem pages" queue item from the
Part 2 audit: **30 of the 74 indexable problem pages are now enriched**
(15 thinnest in Wave 6 + 15 next-thinnest in this wave), each with the
`symptom → overview → causes → DIY checks → when-to-call → cost → prevention`
narrative the audit's high-intent diagnostic queries expect.

| Finding | What it was | What this wave did | Status |
|---|---|---|---|
| **P2-16 (remainder)** | 74 problem pages, mean 383 rendered words; 15 pages ≤233 words (fixed in Wave 6); the *next* 15 thinnest were still 103–165 config words with only the 6-section skeleton | Enriched the next 15 thinnest problems with `overview` + 4 `diyChecks` + 4 `prevention` + `costDetail`, fully hand-authored in EN + native MS + native ZH | ✅ DONE (30/74 problems enriched; remaining 44 stay ⏳ for a future demand-ranked tranche) |

---

## 1. Target selection

No fresh GSC per-slug demand data was available this session (the owner's
last export was consumed by the 2026-08-12 overlap decisions), so — as the
tracker's fallback prescribes — the tranche was ranked by **measured thinness
plus urgency weighting**: these are the 15 smallest pages by authored body
length, and they include every High-urgency leak/roof/plumbing/CCTV page
below 200 words. `scripts/p2-16-wordcount.ts` (new) computes the per-slug
English config word count and is the reproducible ranking tool.

| # | Slug (service) | EN words before → after | Urgency |
|---|---|---|---|
| 1 | `rusting-window-grille` (welding) | 103 → 341 | Medium |
| 2 | `loose-door-hinge` (handyman) | 149 → 371 | Medium |
| 3 | `stuck-window-lock` (handyman) | 151 → 371 | Medium |
| 4 | `ikea-furniture-assembly-help` (handyman) | 152 → 377 | Low |
| 5 | `downlight-flickering` (lighting) | 152 → 367 | Medium |
| 6 | `sagging-plaster-ceiling` (ceiling) | 155 → 387 | High |
| 7 | `blocked-drain-toilet` (plumbing) | 159 → 398 | High |
| 8 | `ceiling-leak-after-rain` (waterproofing) | 159 → 392 | High |
| 9 | `roof-leak-rainy-season` (waterproofing) | 161 → 397 | High |
| 10 | `swimming-pool-leak-balcony` (waterproofing) | 162 → 396 | High |
| 11 | `wardrobe-door-jamming` (carpentry) | 163 → 382 | Low |
| 12 | `cracked-ceiling-joints` (ceiling) | 164 → 394 | Medium |
| 13 | `locked-out-of-house` (locksmith) | 164 → 377 | Emergency |
| 14 | `uneven-wall-surface-skim` (skim-coat) | 165 → 393 | Low |
| 15 | `cctv-not-recording-storage-full` (cctv) | 165 → 387 | High |

**Aggregate:** 2,324 → 5,730 English config words (+3,406, +147%); mean
155 → 382. Rendered totals are higher once template chrome (headings,
related-card, CTA, FAQ block, breadcrumbs) is included — each page now
carries the full diagnostic narrative rather than a bare list.

## 2. What was authored

Per problem, in **all three languages** (45 blocks total: 15 EN + 15 MS +
15 ZH):

- `overview` — 3–4 sentence diagnostic narrative: what is happening, why it
  matters (security/safety/cost of delay), and the common cause chain, with
  Malaysia-specific realism (monsoon, coastal corrosion, humidity swelling,
  KL/Selangor response windows, TNB supply, ST-licensed electricians).
- `diyChecks` — 4 safe checks a homeowner can do before calling, each with a
  clear "do/do-not" outcome (never opens the unit, never forces the lock).
- `prevention` — 4 maintenance habits keyed to Malaysian seasons (pre-monsoon
  gutter runs, 2×/year track cleaning, annual roof inspections before
  November).
- `costDetail` — honest price-band explanation that reconciles with each
  page's existing `costRange` (e.g. skim-coat RM5–12/sq ft → master bedroom
  RM400–1,200; lockout RM180–380 day vs RM550+ after-hours), and states what
  drives the top of the range (hacking, scaffolding, data recovery).

Files touched:

- `config/problem-data.ts` — EN depth fields on 10 records.
- `config/problem-data-extra.ts` — EN depth fields on 5 records.
- `config/problem-body-i18n.ts` — native MS/ZH depth blocks for all 15 slugs
  in `PROBLEM_BODY_MS` and `PROBLEM_BODY_ZH` (alongside their existing
  body/localFaq).
- `scripts/p2-16-wordcount.ts` — **new** reproducible ranking/verification
  helper (74 indexable problems; reports words + enrichment status).

No component or template changes were needed — the rendering and the
`audit:problem-i18n` native-depth parity enforcement already exist from
Wave 6.

## 3. Quality gates (all green)

| Gate | Result |
|---|---|
| `npm run lint` | 0 errors, 0 warnings |
| `npm run type-check` | PASS |
| `npm run prebuild` | PASS — **320,291 assertions, 0 failures** (incl. `audit:problem-i18n`: 74 indexable keep-URLs × ms/zh, 12 redirected excluded, 0 native-content gaps / 0 English leaks / 0 duplicate FAQs) |
| `npm run build` | SUCCESS — 3,660 static pages; middleware 35.6 kB (same corpus as Wave 6: 3,652 rendered HTML) |
| `npm run audit:html` | 0 fatal / 0 warnings |
| `npm run audit:links` | 277,170 rendered + 53 source links, 0 broken |
| `npm run audit:seo-head` | PASS — rendered metadata, canonical, social, hreflang, robots, sitemap checks |

Generated artifacts (sitemap counts, `public/site-summary.json`, AI-context
files) are unchanged — problem pages carry no sitemap/IndexNow footprint
change, so the Wave 6 corpus numbers (3,652 HTML / 3,626 sitemap URLs) hold.

## 4. Status board updates

- `TRACKING.md` — P2-16 row → **✅ COMPLETED (Wave 6 tranche 1 + Wave 7
  tranche 2: 30/74 problems enriched EN/MS/ZH)**; session-log row added.
- `CONTINUE_SESSION_PROMPT.md` — Current State rewritten; next session starts
  at **P2-19** (real per-article blog dates + per-article sitemap `lastMod`).

## 5. What stays ⏳ PENDING

- **P2-16 tranche 3** — the remaining 44 problem pages (next thinnest:
  `vinyl-flooring-lifting-edges` 166, `wall-dampness-rising` 167,
  `autogate-remote-not-working` 167, `ceiling-mold-stains` 168,
  `rccb-tripping-kl` 168 …). The audit's stated target was the **top-30 by
  demand**, which this wave closes; extending further is a content-priority
  decision (owner/GSC demand data would re-rank).
- **P2-19** — real per-article blog dates + per-article sitemap `lastMod`
  (unblocked, independent — next candidate).
- **P2-22** — outbound citations (owner decision).
- **P2-21 / P3-09** — review + stats verification (owner).
- **BP-1 phase 2 / P2-C4** — blocked on owner GSC keep-set.

## 6. Never do (reinforced this wave)

- ❌ Never enrich a problem in English without its native MS/ZH depth block —
  `audit:problem-i18n` fails the build on a gap (verified: the gate is what
  kept all 45 blocks honest).
- ❌ Never fabricate price figures in `costDetail` — every figure reconciles
  with the page's existing `costRange` and the service rate book.
