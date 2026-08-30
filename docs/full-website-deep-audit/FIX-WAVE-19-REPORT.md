# FIX WAVE 19 — P3-12 PHASE 2, TRANCHE 5: NATIVE MS/ZH COMPARE FAQS

**Date:** 2026-08-30

**Branch:** `arena/01a05208-klservisrumah-web`

**GitHub:** PR #200 (merged), CI green (QA job 3m31s: gates/types/lint/SSG build/audits).

**Tracker source:** `TRACKING.md` → P3-12 phase 2 → exact next stop after Wave 18.

> **Result:** ✅ **TRANCHE 5 COMPLETED** — all 18 `/compare/*` pages now render
> page-specific, editorial Bahasa Malaysia and Simplified Chinese versions of
> their four authored English FAQs. Full P3-12 phase 2 remains
> **⏳ PENDING: 56/146 pods complete; 90 remain.**

## 1. Continuation decision

The tracker, Wave 15/16/17/18 reports, continuation prompt and session log
agreed on one exact next task: translate all 18 authored `comparisonCopy` FAQ
sets (family `compare`). Parts 1–5, Fix Waves 1–18, BP-1 phase 1 and CF-4 were
already complete and were not repeated. Owner-blocked work was not changed.

## 2. Completed scope

The complete `compare` family was translated: **18 pages × 4 FAQs × 2 locales
= 144 localized Q&As**.

1. `pu-grouting-vs-tile-hacking`
2. `plaster-ceiling-vs-gypsum-ceiling`
3. `nippon-paint-vs-dulux-paint`
4. `acrylic-vs-cementitious-waterproofing`
5. `pvc-pipes-vs-copper-pipes`
6. `pvc-vs-molly-bolt-anchors`
7. `interior-paint-finishes-matte-vs-satin-vs-gloss`
8. `wall-putty-vs-plaster-smoothening`
9. `partition-materials-gypsum-vs-bricks-vs-glass`
10. `diy-painting-vs-professional-painting`
11. `cheap-handyman-vs-insured-contractor`
12. `pu-injection-vs-surface-waterproofing`
13. `fixed-quote-vs-hourly-handyman`
14. `drywall-partition-vs-glass-partition`
15. `roof-coating-vs-torch-on-membrane`
16. `chemical-wash-vs-chemical-overhaul`
17. `inverter-vs-non-inverter-aircon`
18. `wall-mounted-vs-ceiling-cassette-aircon`

The localized copy preserves source-specific details and constraints: the
3–5× cost gap between PU injection and full tile hacking and the 1–2 vs up-to
5-year warranty gap that maps to scope; the 30–50% plaster-vs-gypsum premium
and 400–450 mm-era framing/seam logic behind gypsum joint cracks; the 5–7
year Dulux Weathershield / Nippon Weatherbond durability claims and why
primer-brand mixing voids both warranties; cementitious 10–15 vs acrylic 3–5
year repaint cycles and the standing-water failure mode; CPVC ~82°C vs
standard PVC cold-only ratings, copper's 50+ year life and SIRIM QAS potable
certification; why PVC plugs cannot grip hollow gypsum and molly/toggle
anchors spread load behind the board; matte vs satin vs gloss behaviour under
Malaysian downlighting; putty 1–2 mm vs skim coat 3–5 mm levelling and the
+1–2 day schedule; brick > double-gypsum > acoustic-laminated glass sound
ratings and condo slab load limits; DIY 2–3 weekend reality for a 3-room
terrace; public-liability and JMB exposure when an uninsured handyman damages
the unit below; negative-side injection vs positive-side membrane logic for
inter-floor leaks; fixed-quote-with-visible-scope plus capped hourly extras;
drywall 2–3 days vs framed glass 5–7 days; torch-on's 2–3× price but 3× life
economics; chemical wash 6–12 months vs overhaul 2–3 years; inverter 30–50%
savings crossing payback only on 6+ hour daily rooms; and cassette 250–350 mm
ceiling-void requirements. The copy is natural target-language editorial
text, not template interpolation.

## 3. Implementation and guardrail

- Added all 18 family-qualified `compare:<slug>` records to
  `config/content-pod-faq-i18n.ts`, each with complete `ms` and `zh` sets.
- Added `compare` to `COMPLETED_FAMILIES` in
  `scripts/validate-content-pod-faq-i18n.ts` only after all records passed.
- The permanent prebuild gate now protects all five completed families
  (`top`, `guides`, `guidesMaintenance`, `seasonal`, `compare`) — real-key
  and whole-family coverage, source count parity, non-stub depth, question
  form, English-leak detection, Chinese-script presence, duplicate-question
  detection, and exact production-resolver identity.
- Question phrasing deliberately steers around the 304 already-published MS/ZH
  questions (the compare family shares waterproofing, ceiling, paint-brand,
  pipe, anchor and handyman ground with them) so the gate's case-insensitive
  duplicate-question check passed with zero reword cycles.
- No route, generic fallback, English source FAQ, schema builder or generated
  output was forked. The existing resolver remains the single source for the
  localized route, visible FAQ block, FAQPage schema, FAQ directory and client
  fallback.
- Reused the existing built-corpus probe `scripts/probe-pod-faq-i18n.ts`
  (`compare` as argv) to verify visible-HTML↔schema byte-identity.

## 4. Verification evidence

A fresh dependency install found **0 vulnerabilities**. The production build
emitted **4,139 HTML pages** (URL count unchanged — this tranche edits
existing localized routes' FAQ content only). The probe loaded all 36
`/ms/compare/*` and `/zh/compare/*` files, stripped scripts to inspect
visible text, parsed the `FAQPage` JSON-LD and compared its four Questions
and accepted answers against the editorial registry.

| Check | Result |
|---|---|
| `audit:content-pod-faq-i18n` | ✅ 56/146 pods; 448 localized Q&As; completed families `top`, `guides`, `guidesMaintenance`, `seasonal`, `compare` |
| `npm ci` / dependency audit | ✅ 176 packages; 0 vulnerabilities |
| lint / type-check | ✅ 0 errors / 0 warnings |
| full `prebuild` | ✅ all gates; estimator suite 329,897 assertions, 0 failures |
| production build | ✅ 4,139 HTML pages |
| `probe-pod-faq-i18n compare` | ✅ 36/36 pages; 144/144 Q&As visible and byte-identical to FAQPage schema |
| `audit:html` | ✅ 4,139 pages checked; 0 fatal / 0 warnings |
| `audit:links` | ✅ 312,732 rendered + 56 source links; 0 broken |
| `audit:seo-head` | ✅ 4,112 indexable = 4,112 sitemap; 0 duplicate metadata / warnings |
| `audit:schema-size` | ✅ PASS |
| `audit:bp1` | ✅ 2,146 retired URLs remain absent; NAP 62.8% |
| `audit:location-similarity` | ✅ maximum 68.8% (<70%) |
| `audit:raster-og` | ✅ raster-only og:image / twitter:image / schema image |
| `audit:meta` | ✅ PASS |
| `seo:audit` | ✅ metadata consistency; report regenerated |
| `part5-audit` | ✅ 4,139 pages; 0 JSON-LD parse errors; 0 duplicate titles/H1s |
| `part3-aeo-audit` (corpus) | ✅ 4,139 pages; BM leak 0; ZH leak 0; compare pages carry `questionH3:4`, `faqQuestions:4`, quick-visible localized question headings |

## 5. Exact continuation point

**P3-12 phase 2 is ⏳ PENDING at 56/146.** The next session must continue
with **tranche 6: all 32 `brands` pages**. Their English source is
`brandCopy` in `config/content-pod-copy-batch2.ts` (note `airconBrandCopy` is
a separate export in the same file feeding the same `brands` family pages —
check `config/content-data.ts` `brandPages` for the exact 32-slug set before
authoring). Add records under `brands:<slug>`, and add `"brands"` to the
gate's `COMPLETED_FAMILIES` only after all 32 pages have both complete locale
sets and pass the built visible/schema probe
(`scripts/probe-pod-faq-i18n.ts brands`).

Fixed remaining order:

1. `brands` — 32 (next)
2. `commercial` — 29
3. `residential` — 29

**90 remain.** Do not mark the full phase complete until the gate reports
146/146. Do not use machine translation, generic FAQ templates, bulk title
substitution, or a premature family-complete declaration.
