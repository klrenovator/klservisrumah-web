# FIX WAVE 22 — P3-12 PHASE 2, TRANCHE 8: NATIVE MS/ZH RESIDENTIAL FAQS

**Date:** 2026-08-30

**Branch:** `arena/01a05354-klservisrumah-web`

**Tracker source:** `TRACKING.md` → P3-12 phase 2 → exact next stop after Wave 21
("NEXT EXACT STOP: tranche 8, all 29 `residential` pages").

> **Result:** ✅ **TRANCHE 8 COMPLETED — P3-12 PHASE 2 IS NOW COMPLETE.** All 29
> `/residential/*` pages now render page-specific, editorial Bahasa Malaysia
> and Simplified Chinese versions of their four authored English FAQs. Full
> P3-12 phase 2 = **146/146 pods complete; 1168 localized Q&As.**

## 1. Continuation decision

The tracker and the Wave 21 report agreed on one exact next task: translate the
remaining 29 authored `residential` FAQ sets. Parts 1–5, Fix Waves 1–21, BP-1
phase 1 and CF-4 were already complete and were **not** repeated. Owner-blocked
work was left untouched.

## 2. Source confirmed before authoring

The `residential` family is service-backed: `config/content-data.ts`
`residentialPages` derive from `Object.values(servicesData)` (29 services), with
the body applied from `residentialCopy[service.slug]` in
`config/content-pod-copy.ts`. The full English FAQ source for all 29 pages was
extracted and verified before a single line was translated, and the slugs match
the `commercial` family exactly (they deliberately share the `<service>-services-kl`
slug shape, which is why the registry is family-qualified).

## 3. Completed scope

The complete `residential` family was translated: **29 pages × 4 FAQs × 2
locales = 232 new localized Q&As**, and `residential` is now a **completed,
gated family** in `scripts/validate-content-pod-faq-i18n.ts`
(`COMPLETED_FAMILIES` = `top, guides, guidesMaintenance, seasonal, compare,
brands, commercial, residential`). The prebuild gate now fails if any
residential set is missing.

**Slugs (29):** identical to `commercial` (`painting`, `plumbing`, `ceiling`,
`waterproofing`, `handyman`, `house-renovation`, `electrical`, `water-heater`,
`ceiling-fan`, `lighting`, `tiling`, `plaster-ceiling`, `skim-coat`,
`flooring`, `epoxy-flooring`, `roof-repair`, `kitchen-cabinet`, `carpentry`,
`door`, `window-repair`, `locksmith`, `glass-aluminium`, `cctv`, `autogate`,
`welding`, `aircon`, `kitchen-renovation`, `bathroom-renovation`,
`awning-installation` — all `-services-kl`).

### Editorial fidelity (residential, "homes" not "homes-copy")

Each translation preserves the home-owner detail and constraints:

- **Family in place** — room-by-room sealed/dried/handback painting with low-VOC;
  bath works sequenced so one dry zone stays usable; at least one bathroom and
  one bedroom kept functional on phased reno; nap-time window scheduling.
- **Condo/JMB** — approved hours, ventilation, low-VOC; lift booking, debris
  routing, worker particulars filed before day one; common-area walls/ceilings
  documented the same way.
- **Home-specific diagnosis** — wallpaper-is-it-sound skim callouts; grout
  turning black via wet-zone seal failure; cracked-tile batch seam plan; door
  scrape in wet weather via timber swell; wind-driven-rain-only roof leak via
  laps/flashings/valley overflow; terrace-house camera counts; garage gate
  auto-reverse proven with a test object.
- **Home warranties/reassurance** — 30-day plumbing seals, 12-month skim
  smoothness/adhesion, 5/10-year membrane sheets, shard-safe rental mounts,
  deposit-friendly removable cabling.

## 4. Verification

All gates PASS (build verified against the live SSG output):

- `scripts/validate-content-pod-faq-i18n.ts` — **146/146** authored pods
  editorially translated; **1168** localized Q&As; `residential` added to
  `COMPLETED_FAMILIES` (phase 2 closes).
- **Prebuild:** 329,897 assertions × 0 failures.
- **Type-check / lint:** 0 / 0.
- **Production build:** SUCCESS — 4,139 static HTML pages.
- **Probe (`scripts/probe-pod-faq-i18n.ts residential`):** 58/58 localized pages
  (29 `/ms/residential/*` + 29 `/zh/residential/*`); 232/232 Q&As **visible and
  byte-identical to FAQPage schema**.
- `audit:html` — 0 fatal / 0 warnings.
- `audit:links` — 312,732 rendered + 56 source → 0 broken.
- `audit:seo-head` — 4,112 = 4,112 indexable (0 duplicate titles/descriptions,
  0 warnings).
- `audit:schema-size` — PASS.
- `audit:bp1` — PASS (NAP-in-content 62.8%).
- `audit:location-similarity` — PASS (69.4% max, below 70%).
- `audit:meta` / `seo:audit` / `part5` — PASS (0 JSON-LD errors).

## 5. Files changed

- `config/content-pod-faq-i18n.ts` — added 29 `residential:<slug>` registry sets
  (29 × 4 × 2 = 232 Q&As) after the `commercial` family.
- `scripts/validate-content-pod-faq-i18n.ts` — `residential` added to
  `COMPLETED_FAMILIES`; header comment updated (146 pages, 1168 Q&As).

## 6. Status

**P3-12 phase 2 is COMPLETE** — 146/146 pods carry page-specific, editorial
MS/ZH FAQ translations as visible HTML = FAQPage schema. The remaining work
queue moves to the next unblocked candidates (P2-16 tranche 3, §5.4-B1,
P4-10, P4-14, P4-08, P4-16, P3-15/P3-16, P3-19) and the standing owner-blocked
items.
