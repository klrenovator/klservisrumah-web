# FIX WAVE 23 — P2-16 TRANCHE 3: ALL REMAINING 44 PROBLEM PAGES ENRICHED (74/74)

**Date:** 2026-08-30

**Branch:** `arena/01a0537b-klservisrumah-web`

**Tracker source:** `TRACKING.md` → "NEXT SESSION MUST CONTINUE HERE" → next
unblocked candidate after P3-12 phase 2 closed at 146/146: **P2-16 tranche 3
(remaining 44 problems)**. Parts 1–5, Fix Waves 1–22, BP-1 phase 1 and CF-4 were
already complete and were **not** repeated; owner-blocked work left untouched.

> **Result:** ✅ **P2-16 COMPLETE — 74/74 indexable problem pages carry the full
> depth set** (`overview` / `diyChecks[4]` / `prevention[4]` / `costDetail`),
> each in **native EN + BM + 中文** (132 hand-authored depth sets, no MT). The
> problem template — the audit's thinnest important template (74 pages, mean
> 383 words, 15 pages ≤233) — now has **min 242 / mean 471 / max 728 config
> words per page** (before template chrome, related-service block, and FAQs),
> and a new permanent prebuild gate fails the build if any indexable problem
> ships thin again.

## 1. Continuation decision

`TRACKING.md` and the Wave 22 report agreed on one exact next task: **P2-16
tranche 3 — the remaining 44 un-enriched problem pages** (tranche 1 = Waves 6's
15 thinnest, tranche 2 = Wave 7's next 15). The tracker listed it as "optional,
needs demand data" — owner GSC data would re-rank the thinness list, but without
it the standing instruction is to use `scripts/p2-16-wordcount.ts` thinness
order. This session used exactly that order and closed **all 44**, so the demand
data can now only *re-prioritise refresh*, not change the scope: nothing is left
un-enriched.

## 2. Scope (all 44, in thinness order)

**Batch 1 (15):** `vinyl-flooring-lifting-edges`, `wall-dampness-rising`,
`autogate-remote-not-working`, `ceiling-mold-stains`, `rccb-tripping-kl`,
`loose-metal-gate-hinges`, `tv-fell-off-wall`,
`digital-smart-lock-installation`, `faded-exterior-paint-malaysia`,
`bathroom-leak-upper-floor`, `cracked-tile-grout`, `damp-walls-paint-bubbling`,
`cabinet-door-sagging`, `burst-pipe-emergency`, `ceiling-cornice-crack`

**Batch 2 (15):** `cracked-roof-tiles`, `aircon-remote-display-issue`,
`loose-hollow-tiles`, `curtain-track-falling`, `aircon-tripping-mcb`,
`aircon-making-noise`, `yellowing-white-walls`, `balcony-leak-condo`,
`concrete-slab-crack-leak`, `aircon-not-turning-on`, `aircon-weak-airflow`,
`ice-forming-on-aircon`, `clogged-drain`, `power-tripping-frequently`,
`toilet-not-flushing`

**Batch 3 (14):** `aircon-bad-smell`, `old-condo-full-refurbishment`,
`peeling-paint-malaysia`, `paint-cracking-hairline-walls`, `low-water-pressure`,
`leaking-bathroom`, `aircon-water-leaking`, `aircon-not-cold`,
`damaged-gypsum-partition-wall`, `popping-tiles-buckling`,
`uneven-floor-subfloor-leveling`, `old-kitchen-cabinet-plumbing-damage`,
`wall-cracks-settlement-masonry`, `old-bathroom-plumbing-tiles`

Each page received 4 new fields per locale (132 depth sets total):

- **overview** — diagnostic narrative: what the fault is, the failure mechanism,
  KL/Malaysia context (monsoon, west-facing sun, humidity cycling, JMB rules,
  ST/Suruhanjaya Tenaga licensing), and why the pattern of symptoms identifies
  the cause.
- **diyChecks[4]** — safe checks the homeowner can run before calling a pro,
  written as an ordered decision path (which pattern means which cause).
- **prevention[4]** — concrete recurrence prevention.
- **costDetail** — what drives the price, anchored **exactly** to the record's
  existing `costRange` and FAQ-published figures (e.g. `cracked-roof-tiles`
  costDetail cites the published RM250–450 inspection and RM380–1,800 repair
  bands; `toilet-not-flushing` cites the published RM150–250 flapper/fill and
  RM550–1,800 suite-replacement bands), plus the warranty line.

**Editorial fidelity, no MT.** All BM and 中文 copy was authored natively,
service-specific (not template-swapped): e.g. `rccb-tripping-kl` keeps the
Suruhanjaya Tenaga wiremen detail in all three languages; `burst-pipe-emergency`
keeps the stop-water-first-protect-electrics-second order;
`balcony-leak-condo` keeps the JMB liability angle and the ponding test;
`concrete-slab-crack-leak` keeps the 8–15 year PU flex life and the 5-year
written warranty; `old-condo-full-refurbishment` keeps the JMB
deposit/permit/lift-protection process; `uneven-floor-subfloor-leveling` keeps
the 3 mm over 2 m tolerance; `wall-cracks-settlement-masonry` keeps the
dowel-bar/stitching mechanics and the structural-engineer threshold.

## 3. Files changed

- `config/problem-data.ts` — depth fields added to 9 EN records
  (`wall-dampness-rising`, `ceiling-mold-stains`, `rccb-tripping-kl`,
  `tv-fell-off-wall`, `faded-exterior-paint-malaysia`, `bathroom-leak-upper-floor`,
  `damp-walls-paint-bubbling`, `burst-pipe-emergency`, `peeling-paint-malaysia`).
- `config/problem-data-extra.ts` — depth fields added to 35 EN records.
- `config/problem-body-i18n.ts` — 44 MS + 44 ZH depth blocks (88 blocks;
  `overview`/`diyChecks`/`prevention`/`costDetail` in each existing
  `PROBLEM_BODY_MS` / `PROBLEM_BODY_ZH` entry).
- `scripts/validate-problem-i18n.ts` — **new permanent gate (check 10):**
  every indexable problem must carry the full depth set; fails the build
  otherwise. Negative-tested: stripping one `overview` field → gate fails with
  `[slug] (any) depth: P2-16: missing depth field(s): overview`; restored →
  green. (Native MS/ZH parity for the depth fields was already enforced by the
  existing check 3b, so a thin *or* English-fallback page now fails the build.)
- `docs/audit-part5-*.json` + `docs/audit-part5-corpus.jsonl` — Part 5 corpus
  re-walked against the new build (4,139 pages, 0 JSON-LD parse errors, 0 dup
  titles/H1s).
- `docs/seo-audit-report.md` — regenerated by `seo:audit`.

## 4. Verification (all green)

- `scripts/p2-16-wordcount.ts` — **74/74 enriched** (was 30/74); min 242 /
  mean 471 / max 728 config words per page.
- `audit:problem-i18n` — **74 indexable keep-URLs × ms/zh, 0 native-content
  gaps / 0 English leaks / 0 duplicate FAQs** (now also enforcing full depth
  parity via check 10).
- **Prebuild:** 329,897 assertions × 0 failures (full generator + validator
  chain).
- **Type-check / lint:** 0 / 0 (`--max-warnings=0`).
- **Production build:** SUCCESS — 4,141 static HTML pages.
- **Rendered-HTML spot-checks (built corpus, scripts stripped):** EN page shows
  EN overview + "Safe DIY checks first" / "How to prevent it" / "What affects
  the cost" sections; MS page shows the BM overview + "Pemeriksaan DIY yang
  selamat dahulu" / "Cara mencegahnya" / "Apa yang mempengaruhi kos"; ZH page
  shows the 中文 overview + "先做安全的自助检查" / "如何预防" / "影响费用的因素".
  Zero cross-language leaks in visible text (the MS/ZH strings inside the EN
  page exist only in the existing client flight payload shared by the
  trilingual component, not in rendered HTML).
- `audit:html` — 0 fatal / 0 warnings.
- `audit:links` — rendered + 56 source → 0 broken.
- `audit:seo-head` — 0 duplicate titles/descriptions, 0 warnings.
- `audit:schema-size` — PASS. `audit:bp1` — PASS (NAP-in-content 62.8%).
- `audit:location-similarity` — PASS (max 68.8% < 70%).
- `audit:meta`, `seo:audit` — PASS.
- Part 5 re-walk — 4,139 pages, **0 JSON-LD parse errors**, 0 duplicate
  titles/H1s.

## 5. Status

**P2-16 is COMPLETE** — all 74 indexable problem pages carry full native
trilingual diagnostic depth, and the achievement is permanently gated
(`audit:problem-i18n` check 10 in prebuild). The next unblocked candidate
moves to **§5.4-B1 (BM commercial tree)** in the standing value order.
