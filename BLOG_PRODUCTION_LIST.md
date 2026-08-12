# Blog Production Master List — KL Servis Rumah
Updated: 2026-08-12

REQUIREMENT: Every Main Service + Sub-Service + Problem must have 1 blog.
LANGUAGES: English (EN), Malay (MS), Chinese (ZH) — 3 per item.

---

## CURRENT COUNTS
- Main Services: 28
- Sub-Services: ~112 (28 services × avg 4 sub-services)
- Problems: 43
- TOTAL BLOG POSTS NEEDED: (28 + 112 + 43) × 3 = ~549

## LIVE / PROGRESS STATUS (as of Batch 5)
- Blog items fully written (markdown, all 3 languages): 63 items × 3 = 189 files (Batches 1–5)
- Live site blog wiring: Batch 4 topics (15 items) wired into config (blog-data-batch4.ts + blog-i18n.ts) and publishing on /blog, /ms/blog, /zh/bo-ke
- Batches 1–3 and Batch 5: markdown production records (not wired to live site, per existing Batch 1–3 convention)

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

## BATCH 1 COMPLETED (2026-08-13) — REWRITTEN TO FULL FORMAT
- Painting (main) — EN/MS/ZH = 3
- Painting → Interior House Painting (sub) — EN/MS/ZH = 3
- Problem: peeling-paint-malaysia — EN/MS/ZH = 3
- Files (EN): painting, interior-house-painting, problem-peeling-paint-malaysia (MS/ZH use localised slugs)
Batch total: 9 blogs
Progress: 9 / 549 (1.6%)
Services done: 1/28 | Sub-services done: 1/112 | Problems done: 1/43
Remaining: 540

---

## BATCH 2 COMPLETED (2026-08-13) — REWRITTEN TO FULL FORMAT
- Services: plumbing, ceiling, waterproofing, handyman, house-renovation (main + 2 sub each)
- 15 items × 3 languages = 45 blogs
- Sub-service files renamed from Batch-2 `-sub-a`/`-sub-b` stubs to descriptive slugs matching real route slugs (e.g. water-leakage-diagnosis-and-repair, pu-high-pressure-injection-grouting, heavy-tv-wall-mounting, full-house-renovation-package)
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

## BATCH 4 COMPLETED (2026-08-13)
- Services: plaster-ceiling, skim-coat, flooring, epoxy-flooring, roof-repair (main + 2 sub each)
- 15 items × 3 languages = 45 blogs
- Files (EN → blogs/en/): plaster-ceiling, flat-plaster-ceiling, tiered-and-l-box-ceiling, skim-coat, wall-skim-coating, ceiling-skim-coating, flooring, spc-click-lock-flooring-install, laminate-flooring-install, epoxy-flooring, self-levelling-epoxy-floor, flake-quartz-broadcast-epoxy, roof-repair, roof-leak-diagnosis-and-repair, ridge-re-bedding-and-re-pointing
  - MS → blogs/ms/ (localised slugs, e.g. reka-bina-siling-plaster-kl, perkhidmatan-lantai-epoksi-kl)
  - ZH → blogs/zh/ (pinyin slugs, e.g. ji-long-po-xue-lang-e-shi-gao-tian-hua-ban-fu-wu, huan-yang-di-ban-fu-wu)
Batch total: 45 blogs
Progress: 144 / 549 (26.2%)
Services done: 16/28 | Sub-services done: 31/112 | Problems done: 1/43
Remaining: 405

## BATCH 5 COMPLETED (2026-08-12)
- Services: kitchen-cabinet, carpentry, door, window-repair, locksmith (main + 2 sub each)
- 15 items × 3 languages = 45 blogs
- Files (EN → blogs/en/): kitchen-cabinet, modular-kitchen-cabinet, custom-plywood-kitchen, carpentry, built-in-wardrobe, tv-console-and-feature-wall, door, solid-timber-door-installation, laminate-door-installation, window-repair, glass-replacement, window-seal-replacement, locksmith, smart-lock-installation, mortice-deadbolt-lock-replacement
  - MS → blogs/ms/ (same filenames, localised slugs, e.g. perkhidmatan-kabinet-dapur-kl, almari-pakaian-tanam-kl)
  - ZH → blogs/zh/ (same filenames, pinyin slugs, e.g. ji-long-po-xue-lang-e-chu-fang-chu-gui-fu-wu, ru-qiang-yi-gui-an-zhuang-kl)
Batch total: 45 blogs
Progress: 189 / 549 (34.4%)
Services done: 21/28 | Sub-services done: 41/112 | Problems done: 1/43
Remaining: 360

## BATCH 5 NOTES / ISSUES
- Frontmatter: all 45 files carry full YAML frontmatter (slug, title, excerpt, category, date, readTime, author, coverImage, metaTitle, metaDesc) + tracking fields (language, service, subService for sub-services, status, batch).
- Internal links: 283 in-article links verified against real routes (services, sub-services, problems, live editorial blogs — EN/MS/ZH). No invented URLs.
- Prices quoted are the company's published starting prices (from config/services-data.ts); no pricing invented.
- Cover images point to existing assets: /hero/home-services-kitchen-cabinet-kl.jpg, /hero-carpentry.svg, /hero-door.svg, /hero-window.svg, /hero-locksmith.svg.
- Live wiring: Batch 5 is markdown-only (same convention as Batches 1–3). Not added to blog-data-batch4.ts / blog-i18n.ts.
- Cannibalisation watch (flagged, not skipped): kitchen-cabinet service blog overlaps live editorial kitchen-cabinet-material-guide-malaysia. Service articles stay process/quote focused and link to the material guide. Smart-lock-installation overlaps live editorial smart-lock-buying-guide-malaysia-2026; install article stays fit/process focused and links to the buying guide.
- ZH wording: laminate bedroom doors are written as 防火板门 (Malaysian HPL/laminate), with an explicit note that this is not a certified 防火门 (fire-rated door).
- Validation: frontmatter complete, no duplicate slugs/titles in the batch, internal link prefixes valid, problem slugs exist in problem-data.ts. `npm run type-check` could not run in this environment (`tsc` not on PATH / node_modules not installed). Markdown-only change should not affect the Next.js build.

## BATCH 4 NOTES / ISSUES
- Frontmatter: all 45 files carry full YAML frontmatter (slug, title, excerpt, category, date, readTime, author, coverImage, metaTitle, metaDesc) + tracking fields (language, service, subService for sub-services, status, batch).
- Internal links: all in-article links verified against real routes (services, sub-services, problems, blog — EN/MS/ZH). No invented URLs.
- Live wiring: batch-4 topics also added to the live blog system — English content in new `config/blog-data-batch4.ts` (pushed into `blogPosts` in `config/blog-data.ts`) and MS/ZH translations in `config/blog-i18n.ts`. Verified these publish on /blog (EN), /ms/blog (MS), /zh/bo-ke (ZH) via `next build`.
- Prices quoted are the company's published starting prices (from config/services-data.ts); no pricing invented.
- Cover images point to existing assets: /hero/home-services-plaster-ceiling-kl.jpg, /hero/home-services-skim-coat-kl.jpg, /hero/home-services-flooring-kl.jpg, /hero-epoxy-flooring.svg, /hero-roof-repair.svg (verified present in public/).
- ⚠️ Note: batch-4 English blog slugs in the live config (`plaster-ceiling-design-build-kl`, etc.) differ from the markdown file slugs (`plaster-ceiling.md`). This matches how batch-3 was handled (markdown filename ≠ live slug) and is intentional — markdown files are the production record, config drives the live blog.

## BATCH 1 & 2 NOTES / ISSUES (rewrite)
- These batches were originally created as plain stub markdown (e.g. `# plumbing Services — Blog (EN)`). They did NOT match the prompt format. Both have now been rewritten to the same full frontmatter + article format used in Batch 3.
- Sub-service stub files were renamed from Batch-2 style `-sub-a`/`-sub-b` and Batch-1 `painting-sub-interior` to descriptive slugs matching the real site sub-service route slugs. Old stub filenames removed.
- Internal links: all links verified against real routes (services, sub-services, problems, blog — EN/MS/ZH). No invented URLs.
- ⚠️ Batch 1/2 are markdown-only production records; they are NOT wired into the live site config (matching the pre-existing batch-3 convention). Live wiring was applied to Batch 4 only.

## BATCH 3 NOTES / ISSUES
- Frontmatter: all 45 files carry YAML frontmatter mirroring the site's BlogPost schema (slug, title, excerpt, category, date, readTime, author, coverImage, metaTitle, metaDesc) + tracking fields (language, service, status, batch). Previous batches used plain stub markdown; this batch enriches the format to satisfy SEO metadata requirements while preserving the tracking fields.
- Sub-service file naming: descriptive slugs used (e.g. new-power-point-and-switch-installation) instead of Batch-2 style `-sub-a`/`-sub-b`, matching Batch-1 precedent (painting-sub-interior) and the real site sub-service route slugs.
- Internal links: all 63 in-article links verified against real routes (services, sub-services, problems, blog — EN/MS/ZH). No invented URLs.
- ⚠️ Topical map mismatch (pre-existing, not caused by this batch): config/topical-authority-map.ts references problem slugs that do not exist in config/problem-data.ts — electrical→power-tripping-frequently/downlight-flickering, lighting→downlight-flickering, tiling→loose-hollow-tiles/cracked-tile-grout. Real slugs are rccb-tripping-kl, flickering-downlights, hollow-tiles-floor. Blogs link to the REAL problem pages. Recommend updating the topical map for review.
- ⚠️ Cannibalisation watch: new db-box-upgrade-and-rewiring blog overlaps the existing live editorial blog safe-electrical-wiring-upgrade-old-house (old-house rewiring guide). The service blog is sub-service focused with interlinks both ways; monitor for keyword overlap, review if GSC shows cannibalisation.
- Prices quoted are the company's published starting prices (from config/services-data.ts); no pricing invented.
- Cover images point to existing assets: /hero-electrical.svg, /hero/home-services-*-kl.jpg (verified present in public/).

---

## SESSION PROMPT FILE
- klservisrumah-web/SESSION_PROMPT.md — upload this prompt in next session to continue
