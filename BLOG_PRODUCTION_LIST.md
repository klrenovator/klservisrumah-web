# Blog Production Master List — KL Servis Rumah
Updated: 2026-08-13

REQUIREMENT: Every Main Service + Sub-Service + Problem must have 1 blog.
LANGUAGES: English (EN), Malay (MS), Chinese (ZH) — 3 per item.

---

## CURRENT COUNTS
- Main Services: 28
- Sub-Services: ~112 (28 services × avg 4 sub-services)
- Problems: 43
- TOTAL BLOG POSTS NEEDED: (28 + 112 + 43) × 3 = ~549

---

## PROGRESS TRACKER
Format after each batch:
```
Batch completed: X items × 3 languages = Y blogs
Done: Y / 549
Problems done: X/43
Services done: X/28
Sub-services done: X/112
Remaining: 549 - Y
```

---

## BATCH 1 COMPLETED (2026-08-13)
- Painting (main) — EN/MS/ZH = 3
- Painting sub-interior — EN/MS/ZH = 3
- Problem: peeling-paint — EN/MS/ZH = 3
Batch total: 9 blogs
Progress: 9 / 549 (1.6%)
Services done: 1/28 | Sub-services done: 1/112 | Problems done: 1/43
Remaining: 540

---

## BATCH 2 COMPLETED (2026-08-13)
- Services: plumbing, ceiling, waterproofing, handyman, house-renovation (main + 2 sub each)
- 15 items × 3 languages = 45 blogs
Batch total: 45 blogs
Progress: 54 / 549 (9.8%)
Services done: 6/28 | Sub-services done: 11/112 | Problems done: 1/43
Remaining: 495

---

## BATCH 3 COMPLETED (2026-08-13)
- Services: electrical, water-heater, ceiling-fan, lighting, tiling (main + 2 sub each)
- 15 items × 3 languages = 45 blogs
- Files:
  - EN → blogs/en/: electrical-services-kl, new-power-point-and-switch-installation, db-box-upgrade-and-rewiring, water-heater-installation-repair, instant-water-heater-installation, storage-water-heater-installation, ceiling-fan-installation-replacement, new-ceiling-fan-installation, ceiling-fan-replacement, lighting-design-installation, led-downlight-installation, pendant-chandelier-installation, tiling-services-kl, floor-tiling-installation, wall-tiling-installation
  - MS → blogs/ms/ (same filenames, localised slugs, e.g. perkhidmatan-elektrik-kl, pemasangan-jubin-lantai)
  - ZH → blogs/zh/ (same filenames, pinyin slugs, e.g. ji-long-po-xue-lang-e-dian-qi-fu-wu, ci-zhuan-fu-wu-ji-long-po)
Batch total: 45 blogs
Progress: 99 / 549 (18.0%)
Services done: 11/28 | Sub-services done: 21/112 | Problems done: 1/43
Remaining: 450

## BATCH 3 NOTES / ISSUES
- Frontmatter: all 45 files carry YAML frontmatter mirroring the site's BlogPost schema (slug, title, excerpt, category, date, readTime, author, coverImage, metaTitle, metaDesc) + tracking fields (language, service, status, batch). Previous batches used plain stub markdown; this batch enriches the format to satisfy SEO metadata requirements while preserving the tracking fields. Older stub files left untouched.
- Sub-service file naming: descriptive slugs used (e.g. new-power-point-and-switch-installation) instead of Batch-2 style `-sub-a`/`-sub-b`, matching Batch-1 precedent (painting-sub-interior) and the real site sub-service route slugs.
- Internal links: all 63 in-article links verified against real routes (services, sub-services, problems, blog — EN/MS/ZH). No invented URLs.
- ⚠️ Topical map mismatch (pre-existing, not caused by this batch): config/topical-authority-map.ts references problem slugs that do not exist in config/problem-data.ts — electrical→power-tripping-frequently/downlight-flickering, lighting→downlight-flickering, tiling→loose-hollow-tiles/cracked-tile-grout. Real slugs are rccb-tripping-kl, flickering-downlights, hollow-tiles-floor. Blogs link to the REAL problem pages. Recommend updating the topical map for review.
- ⚠️ Cannibalisation watch: new db-box-upgrade-and-rewiring blog overlaps the existing live editorial blog safe-electrical-wiring-upgrade-old-house (old-house rewiring guide). The service blog is sub-service focused with interlinks both ways; monitor for keyword overlap, review if GSC shows cannibalisation.
- Prices quoted are the company's published starting prices (from config/services-data.ts); no pricing invented.
- Cover images point to existing assets: /hero-electrical.svg, /hero/home-services-*-kl.jpg (verified present in public/).

---

## SESSION PROMPT FILE
- klservisrumah-web/SESSION_PROMPT.md — upload this prompt in next session to continue
