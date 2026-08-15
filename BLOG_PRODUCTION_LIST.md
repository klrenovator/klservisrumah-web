# Blog Production Master List — KL Servis Rumah
Updated: 2026-08-14

REQUIREMENT: Every Main Service + Sub-Service + Problem must have 1 blog.
LANGUAGES: English (EN), Malay (MS), Chinese (ZH) — 3 per item.

---

## CURRENT COUNTS
- Main Services: 28
- Sub-Services: ~112 (28 services × avg 4 sub-services)
- Problems: 43 (historic `problem-data.ts` denominator) / 65 live indexable slugs
- TOTAL BLOG POSTS NEEDED: (28 + 112 + 43) × 3 = ~549

## LIVE / PROGRESS STATUS (as of Batch 12)
- Blog items fully written (markdown, all 3 languages): 168 items × 3 = 504 files (Batches 1–12)
- Live site blog wiring: Batch 4 topics (15 items) wired into config (blog-data-batch4.ts + blog-i18n.ts) and publishing on /blog, /ms/blog, /zh/bo-ke
- Batches 1–3, 5, 6, 7, 8, 9, 10, 11 and 12: markdown production records (not wired to live site, per existing convention)
- Main services milestone: 28/28 (100% of all main service pillars complete!)
- Problems milestone: every live indexable problem slug has article coverage (Batch 11)
- Validation tooling: `node scripts/validate-blog-markdown.mjs` now validates the whole /blogs corpus (frontmatter, single H1, duplicate slugs/titles, coverImage on disk, meta lengths, and every in-article link against the real route universe). Run it after each batch.

---

## BATCH 12 COMPLETED (2026-08-14)
- Priority applied: Services 28/28 complete and every live problem slug covered, so this batch continues **Sub-Services** in `services-data.ts` order — the next 15 unwritten sub-services after Batch 11 (start: `painting/commercial-and-office-painting`, as flagged in the Batch 11 next-priority note). No skips, reordering, duplicates or invented topics.
- Sub-services completed (15): commercial-and-office-painting (painting), wall-crack-and-moisture-repair (painting), drain-unclogging-and-cleaning (plumbing), water-heater-and-pump-installation (plumbing), gypsum-board-partition-wall (ceiling), cornice-and-l-box-concealed-light-trough (ceiling), roof-and-concrete-slab-waterproofing (waterproofing), wall-dampness-and-efflorescence-repair (waterproofing), furniture-assembly-ikea-taobao (handyman), curtains-blinds-and-shelves-hanging (handyman), condo-interior-refurbishment (house-renovation), commercial-shoplot-renovation (house-renovation), lighting-point-and-downlight-installation (electrical), aircond-water-heater-and-oven-point (electrical), water-heater-repair-and-descaling (water-heater)
- 15 items × 3 languages = 45 blogs
- Files (EN → blogs/en/): commercial-and-office-painting.md, wall-crack-and-moisture-repair.md, drain-unclogging-and-cleaning.md, water-heater-and-pump-installation.md, gypsum-board-partition-wall.md, cornice-and-l-box-concealed-light-trough.md, roof-and-concrete-slab-waterproofing.md, wall-dampness-and-efflorescence-repair.md, furniture-assembly-ikea-taobao.md, curtains-blinds-and-shelves-hanging.md, condo-interior-refurbishment.md, commercial-shoplot-renovation.md, lighting-point-and-downlight-installation.md, aircond-water-heater-and-oven-point.md, water-heater-repair-and-descaling.md
  - MS → blogs/ms/ (same filenames, localised slugs, e.g. pengecatan-komersial-dan-pejabat, pembaikan-retak-dan-lembapan-dinding, penyahsumbatan-dan-pembersihan-saliran, pemasangan-pemanas-air-dan-pam, dinding-partition-papan-gypsum, kornis-dan-lekuk-lampu-tersembunyi-l-box, kalis-air-bumbung-dan-slab-konkrit, pembaikan-lembapan-dinding-dan-kesan-garam, pemasangan-perabot-ikea-taobao, penggantungan-langsir-bidai-dan-rak, pemulihan-interior-kondominium, pengubahsuaian-shoplot-komersial, titik-pencahayaan-dan-downlight, titik-aircond-pemanas-air-dan-ketuhar, pembaikan-dan-nyahkerak-pemanas-air)
  - ZH → blogs/zh/ (same filenames, pinyin slugs, e.g. shang-ye-yu-ban-gong-shi-you-qi, qiang-mian-lie-feng-yu-fang-chao-xiu-fu, shu-tong-yu-qing-jie-pai-shui-guan, re-shui-qi-yu-shui-beng-an-zhuang, shi-gao-ban-ge-qiang, xian-ban-yu-l-xing-an-cang-deng-cao, wu-ding-yu-hun-ning-tu-ban-fang-shui, qiang-mian-chao-shi-yu-yan-xi-xiu-fu, jia-ju-zu-zhuang-ikea-tao-bao, chuang-lian-bai-ye-chuang-yu-zhi-wu-jia-an-zhuang, gong-yu-shi-nei-fan-xin, shang-ye-dian-pu-fan-xin, zhao-ming-tong-deng-dian-wei-an-zhuang, kong-tiao-re-shui-qi-kao-xiang-dian-wei, re-shui-qi-wei-xiu-yu-chu-gou)
Batch total: 45 blogs
Progress: 504 / 549 (91.8%)
Services done: 28/28 (100%) | Sub-services done: 73/112 | Problems done: 67/65 live indexable slugs (canonical duplicates resolved; tracker denominator remains 43)
Remaining: 45

## BATCH 12 NOTES / ISSUES
- Frontmatter: all 45 files carry full YAML frontmatter (slug, title, excerpt, category, language, date, readTime, author, coverImage, metaTitle, metaDesc) + tracking fields (service, subService as route slug per the Batch-11 convention, status, batch: 12). Filenames identical across EN/MS/ZH; slugs localised per language (MS descriptive Malay, ZH pinyin).
- Branching note: this batch is pure markdown content on the session branch; no app/config code touched.
- Internal links: script-validated against the real route universe (28 services, 112 sub-services, 65 live problems, 37 tools with MS/ZH localised slugs, 33 wired blogs with MS/ZH localised slugs). Corpus now spans **723 distinct in-article link targets, zero broken, zero cross-locale violations.** This batch is the first to reference several previously unwired blog/tool targets that existed unused: blogs gypsum-vs-plaster-ceiling-malaysia, tiered-l-box-ceiling-kl, pu-grouting-vs-full-membrane-waterproofing, cost-of-full-house-renovation-kl, how-to-hire-honest-contractor-malaysia, safe-electrical-wiring-upgrade-old-house, tv-wall-mounting-safety-guide; tools furniture-assembly-estimator, curtain-installation-calculator, lighting-installation-calculator, electrical-installation-cost, renovation-budget-calculator, balcony-waterproofing-estimator, waterproofing-cost-calculator, plumbing-diagnostic, water-pressure-troubleshooter, leak-triage, painting-calculator, paint-quantity-estimator (with /ms/alatan and /zh/gongju localised slugs in MS/ZH articles).
- Cannibalisation controls (adjacent intents deliberately scoped apart, each cross-linking its neighbour):
  - `wall-crack-and-moisture-repair` (painting-side: repair-and-reseal the substrate before repainting) vs `wall-dampness-and-efflorescence-repair` (waterproofing-side: stop the moisture path) — the two articles open with explicit differentiation and cross-link; problem pages paint-cracking-hairline-walls / damp-walls-paint-bubbling / wall-dampness-rising are linked as diagnosis guides, not duplicated.
  - `roof-and-concrete-slab-waterproofing` (waterproofing-service slab membrane systems: elastomeric acrylic vs torch-on) vs roof-repair `full-torch-on-membrane-waterproofing` route — scoped to system selection/detailing and links the torch-on sub-service route rather than duplicating a membrane article; PU injection cross-linked for active cracks.
  - `furniture-assembly-ikea-taobao` (service scope) cross-links problem `ikea-furniture-assembly-help` (rescue scope) — no duplicated intent.
  - `condo-interior-refurbishment` (how a management-compliant condo refurb runs) vs problem `old-condo-full-refurbishment` (older-unit decision triggers) — split intent, cross-linked.
  - `lighting-point-and-downlight-installation` (electrical scope: cutting/wiring points into existing ceilings) vs lighting-service `led-downlight-installation` (fixture scope) — differentiated on the page, cross-linked.
  - `water-heater-and-pump-installation` (plumbing-side combined heater+pump for pressure) cross-links the water-heater cluster (instant/storage/heat-pump) which owns the heater-unit intent; `water-heater-repair-and-descaling` owns repair intent and cross-links installation articles for replace decisions.
- Pricing/warranties: every ringgit figure traces to published `services-data.ts` figures — painting RM 450/room & RM 180 wall crack repair; plumbing RM 150 / drains RM 180 / heater+pump RM 180; ceiling RM 220 / gypsum RM 11/sq ft; waterproofing RM 300 / wall dampness RM 350; handyman RM 100 / assembly RM 120 / curtains RM 100; renovation RM 22,000 / kitchen-bathroom RM 10,000 / condo refurb RM 30,000; electrical RM 150 / lighting point RM 120/point / appliance point RM 220/point / power point RM 150/point; water-heater RM 180 / instant RM 250 / storage RM 420. Warranty strings quoted exactly as published in all three languages (painting 1-Year, plumbing 30-Day, ceiling 90-Day, waterproofing up to 5-Year, handyman 30-Day, renovation 12-Month, electrical 12-Month, water-heater 12-Month Installation). Zero invented pricing, guarantees, certifications, awards, history or service areas.
- E-E-A-T: the only credential asserted is ST (Suruhanjaya Tenaga) registered wiremen for electrical/water-heater scopes — an existing published claim. Building-management, work-permit and Bomba/local-council references are generic compliance context (no invented specifics). The water-heater repair article states the repair-vs-replace boundary explicitly (tank corrosion = replace) as honest-advice E-E-A-T.
- Categories: no new categories introduced; reused existing sets (Painting/Pengecatan/油漆工程; Plumbing/Paip/水管工程; Ceiling/Siling/天花板工程; Waterproofing/Kalis Air/防水工程; Handyman/Handyman/杂工服务; Renovation/Pengubahsuaian/装修工程; Electrical/Elektrikal/电气工程). Note: the water-heater repair article uses the Electrical category set, matching the existing Batch-3 water-heater blog convention.
- Cover images: only pre-existing verified assets reused (/hero/home-services-painters-kl.jpg, /hero/home-services-plumbing-kl.jpg, /hero/home-services-ceiling-kl.jpg, /hero/home-services-waterproofing-kl.jpg, /hero/home-services-handyman-kl.jpg, /hero/home-services-electrical-kl.jpg, /hero/home-services-water-heater-kl.jpg, /hero-renovation.svg).
- Word counts: EN 909–1,213 words, MS 861–1,158 words, ZH ~5.8k–7.6k bytes — sized to the service/sub-service intent band (1,200–1,800 target guideline interpreted with "minimum content to comprehensively satisfy" per §20; narrow sub-service topics intentionally leaner, consistent with Batches 9 and 11), no filler.
- Validation run: `node scripts/validate-blog-markdown.mjs` → **495 files scanned, ✓ All checks passed, 0 errors, 0 warnings on any Batch-12 file.** All meta titles/descriptions verified within length conventions programmatically. The 59 pre-existing meta-length warnings on Batches 1–6 files remain untouched (flagged previously for a future clean-up pass).
- Build/lint/type-check: not run in this environment (node_modules not installed — same limitation as Batches 5–11). Markdown-only change does not affect the Next.js build.
- Live wiring: Batch 12 is markdown-only (same convention as Batches 1–3, 5–11). Not added to blog-data-batch4.ts / blog-i18n.ts.
- **Next Priority (Batch 13):** continue sub-services in `services-data.ts` order — next 15 unwritten after `water-heater/water-heater-repair-and-descaling`: water-heater/heat-pump-water-heater-install, ceiling-fan/dc-motor-smart-fan-install, ceiling-fan/industrial-shoplot-fan-install, lighting/cove-and-strip-led-installation, lighting/smart-lighting-and-dimmer-retrofit, tiling/large-format-slab-tiling, tiling/tile-repair-and-re-grouting, plaster-ceiling/cove-and-curved-ceiling, plaster-ceiling/ceiling-repair-and-re-skim, skim-coat/crack-and-joint-repair, skim-coat/full-condo-re-skim-package, flooring/luxury-vinyl-plank-lvp-install, flooring/skirting-and-transition-strip-fitting, epoxy-flooring/heavy-duty-mortar-screed, epoxy-flooring/epoxy-floor-repair-and-recoating (39 sub-services remain after this batch; full ordered checklist derivable from services-data.ts).

---

## BATCH 11 COMPLETED (2026-08-13)
- Priority applied: Services 28/28 already complete. All live `problem-data.ts` topics had coverage, and 15 of the remaining `problem-data-extra.ts` slugs were completed in Batch 10. This batch closes the remaining **12 live extra problem slugs**, then continues with **3 sub-services** to complete the required 15-item batch, in priority order (Problems before Sub-Services).
- Problems completed (12): low-water-pressure (re-slugged/replaced the Batch 7 `low-water-pressure-kl` production record under the canonical slug), cabinet-door-sagging, wardrobe-door-jamming, digital-smart-lock-installation, locked-out-of-house, shower-screen-leaking (canonical keep-URL for shower-screen-water-leak), stubborn-bathroom-limescale, move-out-condo-deep-clean, cement-splatter-tile-clean, cctv-not-recording-storage-full, autogate-remote-not-working, loose-metal-gate-hinges, sliding-window-stuck (canonical keep-URL for stuck-sliding-window)
- Sub-services completed (3): exterior-house-painting (painting), double-swing-autogate (autogate)
- 15 items × 3 languages = 45 blogs
- Files (EN → blogs/en/): problem-low-water-pressure-kl.md, problem-cabinet-door-sagging.md, problem-wardrobe-door-jamming.md, problem-digital-smart-lock-installation.md, problem-locked-out-of-house.md, problem-shower-screen-leaking.md, problem-stubborn-bathroom-limescale.md, problem-move-out-condo-deep-clean.md, problem-cement-splatter-tile-clean.md, problem-cctv-not-recording-storage-full.md, problem-autogate-remote-not-working.md, problem-loose-metal-gate-hinges.md, problem-sliding-window-stuck.md, exterior-house-painting.md, double-swing-autogate.md
  - MS → blogs/ms/ (same filenames, localised slugs, e.g. tekanan-air-rumah-rendah, pintu-kabinet-dapur-kendur, pemasangan-kunci-digital-pintu-sedia-ada, skrin-pancuran-bocor, cuci-menyeluruh-kondominium-pindah-keluar, cctv-tidak-rakam-skrin-kosong, remot-autogate-tidak-berfungsi, engsel-pagar-logam-longgar, tingkap-gelongsor-tersekat, pengecatan-rumah-eksterior, autogate-ayunan-double)
  - ZH → blogs/zh/ (same filenames, localised slugs, e.g. jia-zhong-shui-ya-guo-di, chu-gui-men-xia-chui, yi-gui-men-qia-zhu, jiu-men-an-zhuang-shu-ma-suo, bei-suo-zai-men-wai, yu-shi-ping-feng-lou-shui, gong-yu-tui-fang-shen-du-qing-jie, zhuang-xiu-shui-ni-zi-yu-hui-chen-qing-jie, cctv-bu-lu-xiang-hua-mian-kong-bai, zi-dong-men-yao-kong-bu-ling, jin-shu-men-jiao-lian-song-dong, tui-la-chuang-qia-zhu, wu-wai-you-qi-fu-wu, shuang-kai-bai-bi-zi-dong-men)
Batch total: 45 blogs
Progress: 459 / 549 (83.6%)
Services done: 28/28 (100%) | Sub-services done: 58/112 | Problems done: 67/65 live indexable slugs (canonical duplicates resolved; tracker denominator remains 43)
Remaining: 90

## BATCH 11 NOTES / ISSUES
- **Canonical consolidation completed for two Batch 7 manual-review items:**
  - `problem-low-water-pressure-kl.md` in all three languages was overwritten with the canonical `low-water-pressure` article (EN slug now `low-water-pressure`; MS/ZH localised slugs). The Batch 7 redirected-slug warning is resolved.
  - The new shower-screen article is filed under the canonical `shower-screen-leaking` slug/filename, covering the redirected `shower-screen-water-leak` intent. `problem-shower-screen-leaking.md` already existed from Batch 9 and was improved/expanded rather than duplicated.
  - The new sliding-window article is filed under canonical `sliding-window-stuck`, covering redirected `stuck-sliding-window`. The existing Batch 9 file was improved/expanded rather than duplicated.
- Near-duplicate/cannibalisation controls: smart-lock installation is scoped to fitment on existing doors and links to the existing smart-lock fault article; lockout is scoped to emergency access; CCTV blank-feed is scoped to recorder/storage/network faults; limescale vs move-out vs post-renovation cement cleaning each open with intent differentiation and cross-links.
- Frontmatter: all new/updated files carry full YAML frontmatter plus tracking fields; filenames identical across EN/MS/ZH; slugs localised per language.
- Internal links: script-validated against the real route universe. Fixed during production: MS paint-quantity estimator link to `/ms/alatan/kalkulator-kuantiti-cat`; ZH CCTV buying-guide link to `/zh/bo-ke/ji-long-cctv-an-zhuang-gou-mai-zhi-nan`; removed one ZH paint-quantity tool link whose localised slug is not registered by the validator.
- Pricing/warranties: every ringgit figure traces to published `services-data.ts`, `problem-data.ts` or `problem-data-extra.ts`. No invented prices, guarantees, certifications, service areas or company history.
- Validation run: `node scripts/validate-blog-markdown.mjs` → **✓ All checks passed**, 0 errors. Remaining warnings are pre-existing meta-length warnings on older batches/files (not introduced by Batch 11).
- Build/lint/type-check: not run in this environment because this is a markdown-only production batch and no application code/config was changed.
- **Next Priority (Batch 12):** remaining sub-services in `services-data.ts` order (54/112 sub-services written before this batch; 58/112 after). Start with the next unfinished sub-service after each service's completed items, beginning with `painting/exterior-house-painting` already done in Batch 11, so the next item is `painting/commercial-and-office-painting`, then continue through plumbing/drain-unclogging-and-cleaning, ceiling/gypsum-board-partition-wall, etc.


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

## BATCH 8 COMPLETED (2026-08-13)
- Priority applied: Services 28/28 already complete, so this batch continues **Problems** (items 11–26 of the `config/problem-data.ts` order), skipping slugs that are 301-redirected in `config/problem-canonical.ts` (see notes).
- Problems completed (15): cracked-ceiling-joints, condensation-ceiling-mold, bathroom-leak-upper-floor, roof-leak-rainy-season, wall-dampness-rising, swimming-pool-leak-balcony, loose-door-hinge, tv-fell-off-wall, stuck-window-lock, ikea-furniture-assembly-help, rccb-tripping-kl, ceiling-fan-wobbling, downlight-flickering, loose-hollow-tiles, spc-flooring-peeling-edges
- 15 items × 3 languages = 45 blogs
- Files (EN → blogs/en/): problem-cracked-ceiling-joints.md, problem-condensation-ceiling-mold.md, problem-bathroom-leak-upper-floor.md, problem-roof-leak-rainy-season.md, problem-wall-dampness-rising.md, problem-swimming-pool-leak-balcony.md, problem-loose-door-hinge.md, problem-tv-fell-off-wall.md, problem-stuck-window-lock.md, problem-ikea-furniture-assembly-help.md, problem-rccb-tripping-kl.md, problem-ceiling-fan-wobbling.md, problem-downlight-flickering.md, problem-loose-hollow-tiles.md, problem-spc-flooring-peeling-edges.md
  - MS → blogs/ms/ (same filenames, localised slugs, e.g. retak-sambungan-siling-plaster, bocor-bilik-air-tingkat-atas, rccb-kerap-trip, jubin-lantai-berongga-longgar)
  - ZH → blogs/zh/ (same filenames, pinyin slugs, e.g. shi-gao-tian-hua-ban-jie-feng-kai-lie, lou-shang-yu-shi-shen-lou, rccb-pin-fan-tiao-zha, di-zhuan-kong-gu-song-dong)
Batch total: 45 blogs
Progress: 324 / 549 (59.0%)
Services done: 28/28 (100%) | Sub-services done: 55/112 | Problems done: 25/43 (tracker denominator) — see note below on the real problem universe
Remaining: 225

### Problem-universe reconciliation (accurate counts, 2026-08-13)
The historic `43` denominator counts only `config/problem-data.ts`. The real indexable universe is **65 live problem slugs** (problem-data.ts + problem-data-extra.ts, minus the 12 slugs 301-redirected by problem-canonical.ts).
- Problem articles written to date: 25 (Batch 7 = 10, Batch 8 = 15)
- Of those, 23 map to a live canonical problem slug; 2 (Batch 7) were written against redirected slugs — see manual-review flag below.
- **Live problem slugs still unwritten: 42.**

## BATCH 8 NOTES / ISSUES
- **Topic order & deliberate skips (per §24 duplicate/cannibalisation rule):** the raw `problem-data.ts` order at positions 11–26 contains four slugs that `config/problem-canonical.ts` 301-redirects to a canonical page — `flickering-lights-kl` → downlight-flickering, `water-heater-not-heating` (already covered by Batch 7's `water-heater-not-working` article), `hollow-tiles-floor` → loose-hollow-tiles, `plaster-ceiling-cracking-joints` → cracked-ceiling-joints. Writing those as separate articles would have created four near-duplicate pages pointing at redirected URLs. Instead the batch wrote the **canonical keep-URL** version of each (downlight-flickering, loose-hollow-tiles, cracked-ceiling-joints) and pulled forward the next live problems in list order. No topic was invented; nothing indexable was skipped.
- ⚠️ **MANUAL REVIEW — two Batch 7 articles use redirected slugs.** Both were written against slugs that `problem-canonical.ts` 301-redirects, so their frontmatter `slug` does not correspond to an indexable URL:
  - `blogs/*/problem-water-heater-not-working.md` → canonical slug is `water-heater-not-heating`
  - `blogs/*/problem-low-water-pressure-kl.md` → canonical slug is `low-water-pressure`
  The article content covers the canonical intent correctly in both cases, so Batch 8 did **not** write duplicates for those two topics. Recommended fix: re-slug the frontmatter (and optionally rename the files) to the canonical slugs. Their in-article links were already repointed to the canonical URLs during this batch's validation pass.
- Frontmatter: all 45 files carry full YAML frontmatter (slug, title, excerpt, category, language, date, readTime, author, coverImage, metaTitle, metaDesc) + tracking fields (service, status, batch). Filenames identical across EN/MS/ZH; slugs localised per language.
- Internal links: **533 distinct in-article link targets across the whole corpus, script-validated, zero broken.** Validation parses real routes from config/services-data.ts (28 services + 112 sub-service slugs via lib/utils slugify), problem-data.ts + problem-data-extra.ts minus the 12 redirected slugs, tools-i18n.ts TOOL_SLUG_I18N (EN/MS/ZH tool paths), and wired blog slugs in blog-data*.ts / blog-i18n.ts. Cross-locale links are also rejected (an /ms article can only link /ms paths).
- **Pre-existing defects found and fixed while validating** (not caused by this batch):
  - 9 ZH Batch-7 problem files ended with leftover Python generator scaffolding (`"""` + `write_article(...)` lines) rendered as article body. Trimmed.
  - 22 files across Batches 3 and 7 contained 6 distinct broken link targets: `/problems/flickering-downlights` and `/problems/hollow-tiles-floor` (redirected slugs), `/problems/low-water-pressure-kl` (redirected), and three malformed sub-service paths missing the `and` segment (`ridge-re-bedding-re-pointing`, `bathroom-wet-area-waterproofing`, `water-leakage-diagnosis-repair`). All repointed to real canonical routes in EN/MS/ZH.
  - Batch 7's ceiling-leak article asserted an unpublished "12 to 24-month leak-free warranty". Replaced in all 3 languages with the actual published terms (roof-repair = 10-Year Membrane & Workmanship Warranty; waterproofing = Up to 5-Year Written Leak-Free Guarantee).
- Pricing: every ringgit figure traces to published data — `costRange` from the matching problem record, `startPrice`/sub-service prices from services-data.ts, or published per-point figures already in problem-data-extra.ts (LED downlight RM 120–220/point, DB upgrade RM 850–1,800, single-tile relay RM 150–280). Zero invented pricing.
- Warranties: only the published per-service warranty strings from services-data.ts are quoted (ceiling 90-Day, waterproofing Up to 5-Year, roof-repair 10-Year, electrical 12-Month, lighting 12-Month, ceiling-fan 12-Month, tiling 12-Month, flooring 5-Year, handyman 30-Day, window-repair 12-Month). No invented guarantees, certifications, awards or company history.
- E-E-A-T: the only credential asserted is ST (Suruhanjaya Tenaga) registered wiremen, which is an existing published claim in services-data.ts and problem-data.ts. External references are limited to non-linked, verifiable context (Malaysian Meteorological Department monsoon seasons, Ministry of Health indoor air quality guidance, ~30 mA domestic RCCB trip threshold, IKEA-supplied anti-tip hardware).
- Cover images (all verified present in public/): /hero/home-services-ceiling-kl.jpg, /hero/home-services-waterproofing-kl.jpg, /hero-waterproofing.svg, /hero-roof-repair.svg, /hero/home-services-handyman-kl.jpg, /hero-window.svg, /hero-electrical.svg, /hero/home-services-ceiling-fan-kl.jpg, /hero/home-services-lighting-kl.jpg, /hero/home-services-tiling-kl.jpg, /hero/home-services-flooring-kl.jpg.
- Categories: no new categories introduced. Reused existing sets (EN Ceiling / Waterproofing / Roof Repair / Handyman / Electrical / Tiling / Flooring; MS Siling / Kalis Air / Pembaikan Bumbung / Handyman / Elektrikal / Jubin / Lantai; ZH 天花板工程 / 防水工程 / 屋顶维修 / 杂工服务 / 电气工程 / 瓷砖工程 / 地板工程).
- Cannibalisation control inside the batch (adjacent water-ingress intents deliberately scoped apart):
  - `roof-leak-rainy-season` is scoped to **seasonal/emergency behaviour** (what to do during the storm, monsoon mechanics, pre-monsoon checklist) and cross-links to Batch 7's `ceiling-leak-after-rain`, which owns the **entry-point diagnostic** intent.
  - `condensation-ceiling-mold` is scoped to **no-leak condensation** and opens with a leak-vs-condensation comparison table pointing to `ceiling-mold-stains` (Batch 7) for leak-driven staining.
  - `bathroom-leak-upper-floor` (method selection: PU vs no-hack vs full hack) vs `swimming-pool-leak-balcony` (open-deck UV/ponding failure) are differentiated on the page and cross-link.
  - `wall-dampness-rising` (level-topped base-of-wall band, ground-borne) explicitly distinguishes itself from `damp-walls-paint-bubbling` (leak-driven patches).
  - `loose-hollow-tiles` vs `spc-flooring-peeling-edges` cross-link as the tiled vs floating-floor versions of the same "floor is lifting" query.
- Word counts: EN 1,149–1,389 words, MS 1,046–1,306 words, ZH ~6.5k–8.0k bytes — sized to the problem-article intent band (1,200–1,800), no filler.
- Validation run: `node scripts/validate-blog-markdown.mjs` → 324 files scanned, 0 errors, 0 warnings on any Batch 8 file. `npm run type-check` → clean. `npm run lint` → clean (eslint.config.mjs ignore list extended for the new Node-only script, matching the existing `scripts/ts-resolver.mjs` precedent). `npm run build` → **success**, including all prebuild audits (topical-map, specialty-locale, i18n parity, problem-i18n, estimators).
- Pre-existing warnings NOT fixed (out of scope, Batches 1–6 meta lengths): 59 metaTitle/metaDesc length warnings remain on older files. Listed by the validator; flagged for a future clean-up pass.
- Live wiring: Batch 8 is markdown-only (same convention as Batches 1–3, 5, 6, 7). Not added to blog-data-batch4.ts / blog-i18n.ts.
- **Next Priority (Batch 9)** — continue Problems in `problem-data.ts` order, next 15 live slugs: clogged-gutter-leaking, kitchen-cabinet-door-misaligned, peeling-skim-coat, epoxy-floor-yellowing, wardrobe-door-not-closing, door-scraping-floor, sliding-window-stuck, smart-lock-not-working, shower-screen-leaking, mold-in-bathroom-after-cleaning, stubborn-grout-stains-after-deep-clean, construction-dust-returning, cctv-not-recording, autogate-not-closing, rusting-window-grille. (After that: the 27 problem-data-extra.ts slugs, then the remaining 57 sub-services.)

---

## BATCH 9 COMPLETED (2026-08-13)
- Priority applied: Services 28/28 already complete, so this batch continues **Problems** (items 27–43 of `config/problem-data.ts` order), skipping the two slugs that `config/problem-canonical.ts` 301-redirects and that are already covered by canonical articles — `flickering-downlights` → downlight-flickering (Batch 8), `plaster-ceiling-cracking-joints` → cracked-ceiling-joints (Batch 8). No topic invented; nothing indexable skipped.
- Problems completed (15): clogged-gutter-leaking, kitchen-cabinet-door-misaligned, peeling-skim-coat, epoxy-floor-yellowing, wardrobe-door-not-closing, door-scraping-floor, sliding-window-stuck, smart-lock-not-working, shower-screen-leaking, mold-in-bathroom-after-cleaning, stubborn-grout-stains-after-deep-clean, construction-dust-returning, cctv-not-recording, autogate-not-closing, rusting-window-grille
- 15 items × 3 languages = 45 blogs
- Files (EN → blogs/en/): problem-clogged-gutter-leaking.md, problem-kitchen-cabinet-door-misaligned.md, problem-peeling-skim-coat.md, problem-epoxy-floor-yellowing.md, problem-wardrobe-door-not-closing.md, problem-door-scraping-floor.md, problem-sliding-window-stuck.md, problem-smart-lock-not-working.md, problem-shower-screen-leaking.md, problem-mold-in-bathroom-after-cleaning.md, problem-stubborn-grout-stains-after-deep-clean.md, problem-construction-dust-returning.md, problem-cctv-not-recording.md, problem-autogate-not-closing.md, problem-rusting-window-grille.md
  - MS → blogs/ms/ (same filenames, localised slugs, e.g. longkang-tersumbat-bocor, pintu-kabinet-dapur-tidak-sejajar, lantai-epoksi-kekuningan, cctv-tidak-rakam, grille-tingkap-berkarat)
  - ZH → blogs/zh/ (same filenames, pinyin slugs, e.g. tian-gou-du-se-lou-shui, chu-gui-men-guan-bu-long, huan-yang-di-ban-fa-huang, cctv-bu-lu-xiang, tie-hua-sheng-xiu)
Batch total: 45 blogs
Progress: 369 / 549 (67.2%)
Services done: 28/28 (100%) | Sub-services done: 55/112 | Problems done: 40/43 (tracker denominator) — see reconciliation note below
Remaining: 180

### Problem-universe reconciliation (accurate counts, updated 2026-08-13)
- **ALL 43 `config/problem-data.ts` slugs now have coverage** (a direct article, or the canonical keep-URL article that the redirected slug folds into). Batch 9 closed out the remaining 15 live problem-data.ts slugs.
- Problem articles written to date: 40 (Batch 1 = 1, Batch 7 = 9, Batch 8 = 15, Batch 9 = 15).
- Of those, 38 map to a live canonical problem slug; 2 (Batch 7) still use redirected slugs (see manual-review flag below).
- **Live problem slugs still unwritten: 27** (all in `config/problem-data-extra.ts`): yellowing-white-walls, paint-cracking-hairline-walls, leaking-bathroom, low-water-pressure, clogged-drain, toilet-not-flushing, ceiling-cornice-crack, balcony-leak-condo, concrete-slab-crack-leak, curtain-track-falling, old-condo-full-refurbishment, power-tripping-frequently, cracked-tile-grout, uneven-wall-surface-skim, vinyl-flooring-lifting-edges, cracked-roof-tiles, cabinet-door-sagging, wardrobe-door-jamming, digital-smart-lock-installation, locked-out-of-house, stubborn-bathroom-limescale, move-out-condo-deep-clean, cement-splatter-tile-clean, cctv-not-recording-storage-full, autogate-remote-not-working, loose-metal-gate-hinges, plus the canonical `low-water-pressure` (the Batch 7 article was written under the redirected `low-water-pressure-kl` slug).

## BATCH 9 NOTES / ISSUES
- **Topic order & deliberate skips (per §24 duplicate/cannibalisation rule):** positions 29–30 of `problem-data.ts` (`flickering-downlights`, `plaster-ceiling-cracking-joints`) both 301-redirect to canonical pages already covered by Batch 8 (`downlight-flickering`, `cracked-ceiling-joints`). Writing them would have created duplicate pages pointing at redirected URLs, so the batch continued with the next 15 live slugs. Nothing indexable was skipped.
- ⚠️ **MANUAL REVIEW — two Batch 7 articles still use redirected slugs** (carried forward; not resolved this batch): `problem-water-heater-not-working.md` → canonical `water-heater-not-heating`, and `problem-low-water-pressure-kl.md` → canonical `low-water-pressure`. Content covers the canonical intent correctly, so no duplicates were written. Recommended fix remains: re-slug frontmatter (and optionally rename files) to the canonical slugs.
- ⚠️ **Cannibalisation watch (flagged, not skipped):** `cctv-not-recording` (this batch, scoped to "live view works but no recording / footage missing") overlaps `cctv-not-recording-storage-full` (problem-data-extra, scoped to "no live feed / blank screen / won't play back"). Both are live, non-redirected slugs. The Batch 9 article is deliberately scoped to the recording-side fault (HDD health, schedule, retention, network drop) and cross-links the storage-full page for the live-feed-down intent. Monitor in GSC; consider consolidating if queries show cannibalisation.
- Frontmatter: all 45 files carry full YAML frontmatter (slug, title, excerpt, category, language, date, readTime, author, coverImage, metaTitle, metaDesc) + tracking fields (service, status, batch). Filenames identical across EN/MS/ZH; slugs localised per language.
- Internal links: **593 distinct in-article link targets across the whole corpus, script-validated, zero broken.** Every Batch 9 link resolves to a real route (service, sub-service, live problem, tool, or wired blog) in the correct locale.
- Pricing: every ringgit figure traces to published data — `costRange` from the matching problem record, or `startPrice`/sub-service prices from `config/services-data.ts`. Zero invented pricing. (The epoxy article quotes both the problem-data.ts band RM 280–1,800+ and the problem-data-extra topcoat-refresh figure RM 12–28/sq ft, both published.)
- Warranties: only published per-service warranty strings quoted (roof-repair 10-Year, kitchen-cabinet 5-Year, skim-coat 12-Month, epoxy-flooring 5-Year, carpentry 5-Year, door 12-Month, window-repair 12-Month, locksmith 12-Month, glass-aluminium 12-Month, cleaning/deep-cleaning 24-Hour, post-renovation-cleaning 7-Day, cctv 12-Month, autogate 12-Month, welding 12-Month). No invented guarantees, certifications, awards, history or service areas.
- E-E-A-T: no fabricated credentials. Brand references (Hikvision/Dahua/Ezviz/Tuya for CCTV, Autogate 2000/Nice/FAAC, Yale/Samsung/Tuya for locks) are limited to the published statements already in the problem data ("experienced with", "install and configure"), phrased as capability, not partnership.
- Categories: no new categories introduced. Reused existing sets (EN Roof Repair / Kitchen Cabinet / Skim Coat / Flooring / Carpentry / Door / Window Repair / Locksmith / Glass & Aluminium / Cleaning / CCTV / Auto Gate / Welding; MS Pembaikan Bumbung / Kabinet Dapur / Skim Coat / Lantai / Pertukangan / Pintu / Pembaikan Tingkap / Tukang Kunci / Kaca & Aluminium / Pembersihan / CCTV / Autogate / Kimpalan; ZH 屋顶维修 / 厨房橱柜 / 批灰工程 / 地板工程 / 木工 / 门 / 窗户维修 / 锁匠 / 玻璃与铝业 / 清洁服务 / 安防监控 / 自动门 / 焊接铁艺).
- Word counts: EN 691–1,026 words, MS and ZH in proportion (ZH ~4.5k–6.5k bytes) — sized to each narrow problem intent, no filler, per the "minimum content to comprehensively satisfy" directive.
- Validation run: `node scripts/validate-blog-markdown.mjs` → 369 files scanned, **0 errors, 0 warnings on any Batch 9 file**. The 59 pre-existing meta-length warnings remain on Batches 1–6 files only (out of scope, flagged for a future clean-up pass).
- Live wiring: Batch 9 is markdown-only (same convention as Batches 1–3, 5, 6, 7, 8). Not added to blog-data-batch4.ts / blog-i18n.ts.
- Build/lint/type-check: not run — `node_modules` is not installed in this environment (same limitation as Batches 5–8). Markdown-only change does not affect the Next.js build.
- **Next Priority (Batch 10)** — finish the remaining 27 live problem slugs in `problem-data-extra.ts` order (see reconciliation list above), then proceed to the remaining 57 sub-services. When reaching `low-water-pressure`, re-slug/consolidate the Batch 7 `low-water-pressure-kl` article instead of writing a duplicate.

---

## BATCH 7 COMPLETED (2026-08-13)
- Services completed (2/2 remaining): autogate (main + 2 sub), welding (main + 2 sub) — ALL 28 MAIN SERVICES COMPLETED!
- Problems completed (9/42 remaining): faded-exterior-paint-malaysia, damp-walls-paint-bubbling, ceiling-mold-stains, burst-pipe-emergency, low-water-pressure-kl, blocked-drain-toilet, water-heater-not-working, sagging-plaster-ceiling, ceiling-leak-after-rain
- 15 items × 3 languages = 45 blogs
- Files (EN → blogs/en/):
  - Services/Sub-services: autogate.md, single-swing-autogate.md, sliding-autogate.md, welding.md, custom-window-grille.md, main-gate-fabrication.md
  - Problems: problem-faded-exterior-paint-malaysia.md, problem-damp-walls-paint-bubbling.md, problem-ceiling-mold-stains.md, problem-burst-pipe-emergency.md, problem-low-water-pressure-kl.md, problem-blocked-drain-toilet.md, problem-water-heater-not-working.md, problem-sagging-plaster-ceiling.md, problem-ceiling-leak-after-rain.md
  - MS → blogs/ms/ (same filenames, localised slugs, e.g. pemasangan-pembaikan-autogate-kl, perkhidmatan-kimpalan-besi-kl, paip-pecah-kecemasan-kl)
  - ZH → blogs/zh/ (same filenames, pinyin slugs, e.g. zi-dong-men-an-zhuang-wei-xiu-kl, han-jie-yu-tie-gong-fu-wu-kl, shui-guan-bao-lie-jin-ji-chu-li)
Batch total: 45 blogs
Progress: 279 / 549 (50.8%)
Services done: 28/28 (100%) | Sub-services done: 55/112 | Problems done: 10/43
Remaining: 270

## BATCH 7 NOTES / ISSUES
- Main Services milestone reached: all 28 main service pillars now have dedicated, comprehensive blog posts in EN, MS, and ZH (28/28).
- Frontmatter: all 45 files carry full YAML frontmatter (slug, title, excerpt, category, language, date, readTime, author, coverImage, metaTitle, metaDesc) + tracking fields (service, subService for sub-services, status, batch). Filenames identical across EN/MS/ZH; slugs localised per language.
- Internal links: 196 distinct in-article links validated by script against real routes parsed from config/services-data.ts (28 services + 112 sub-service slugs via lib/utils slugify), config/problem-data.ts + problem-data-extra.ts, app router tool directories (EN/MS/ZH) and wired blog slugs. Zero broken links.
- Tool links included: /tools/painting-calculator, /tools/paint-quantity-estimator, /tools/waterproofing-cost-calculator, /tools/leak-triage, /tools/ceiling-replacement-cost, /tools/ceiling-calculator, /tools/pipe-leak-estimator, /tools/pipe-replacement-cost, /tools/water-pressure-troubleshooter, /tools/plumbing-diagnostic, /tools/roof-repair-estimator, and their MS (/ms/alatan/...) and ZH (/zh/gongju/...) equivalents.
- Real published pricing used: Single swing autogate from RM 2,200, Double swing autogate from RM 3,200, Sliding autogate from RM 3,800, Autogate motor replacement from RM 950; On-site welding repair from RM 280, Custom window grilles from RM 42/sqft, Main gate fabrication from RM 2,800; Problem repairs from published diagnostic & repair rates. Zero invented pricing.
- Cover images point to existing disk assets: /hero-autogate.svg, /hero-welding.svg, /hero/home-services-painters-kl.jpg, /hero-waterproofing.svg, /hero/home-services-ceiling-kl.jpg, /hero/home-services-plumbing-kl.jpg, /hero/home-services-water-heater-kl.jpg (all verified present in public/).
- Categories introduced/used: EN: "Auto Gate", "Welding", "Painting", "Waterproofing", "Ceiling", "Plumbing", "Electrical"; MS: "Autogate", "Kimpalan", "Pengecatan", "Kalis Air", "Siling", "Paip", "Elektrikal"; ZH: "自动门", "焊接铁艺", "油漆工程", "防水工程", "天花板工程", "水管工程", "电气工程".
- Next Priority: remaining Problems (11–43) from config/problem-data.ts (33 problems remaining).

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

## BATCH 6 COMPLETED (2026-08-12)
- Services: glass-aluminium, cleaning, deep-cleaning, post-renovation-cleaning, cctv (main + 2 sub each)
- 15 items × 3 languages = 45 blogs
- Files (EN → blogs/en/): glass-aluminium, frameless-shower-screen, aluminium-sliding-window, cleaning, weekly-condo-cleaning-1-000-sqft, bi-weekly-terrace-house-cleaning, deep-cleaning, condo-move-out-deep-clean-1-000-sqft, terrace-house-deep-clean-2-000-sqft, post-renovation-cleaning, condo-post-renovation-clean-1-000-sqft, terrace-house-post-renovation-clean-2-000-sqft, cctv, condo-wi-fi-cctv-package-4-cameras, landed-house-poe-cctv-8-cameras
  - MS → blogs/ms/ (same filenames, localised slugs, e.g. fabrikasi-kaca-aluminium-kl, pembersihan-selepas-renovasi-kl, pemasangan-cctv-kl)
  - ZH → blogs/zh/ (same filenames, pinyin slugs, e.g. bo-li-lv-jia-gong-kl, zhuang-xiu-hou-qing-jie-kl, cctv-an-zhuang-kl)
Batch total: 45 blogs
Progress: 234 / 549 (42.6%)
Services done: 26/28 | Sub-services done: 51/112 | Problems done: 1/43
Remaining: 315

## BATCH 6 NOTES / ISSUES
- Frontmatter: all 45 files carry full YAML frontmatter (slug, title, excerpt, category, language, date, readTime, author, coverImage, metaTitle, metaDesc) + tracking fields (service, subService for sub-services, status, batch). Filenames identical across EN/MS/ZH; slugs localised per language (MS descriptive Malay, ZH pinyin).
- Internal links: 147 distinct in-article link targets validated by script against real routes parsed from config/services-data.ts (28 services + 112 sub-service slugs via lib/utils slugify), config/problem-data.ts + problem-data-extra.ts, app router tool directories (EN/MS/ZH) and wired blog slugs in blog-data*.ts / blog-i18n.ts. Zero broken links. None of the 12 redirected problem slugs in config/problem-canonical.ts are linked.
- Tool links: this is the first batch to link the live calculators (ZH tool paths are CJK directory names under /zh/gongju and are written unencoded in markdown, matching the app router directory names) — /tools/glass-replacement-calculator, /tools/window-replacement-estimator, /tools/deep-cleaning-cost-estimator, /tools/move-in-out-cleaning-calculator and their MS (/ms/alatan/...) and ZH (/zh/gongju/...) equivalents. No CCTV calculator exists, so no CCTV tool link was created.
- Prices quoted are the company's published starting prices (from config/services-data.ts); no pricing invented. Glass & aluminium RM 320, cleaning RM 180, deep cleaning RM 420, post-renovation cleaning RM 650, CCTV RM 420, plus the published sub-service prices.
- Cover images point to existing assets: /hero-glass-aluminium.svg, /hero-cleaning.svg, /hero-deep-cleaning.svg, /hero-post-renovation-cleaning.svg, /hero/home-services-cctv-kl.jpg (all verified present in public/).
- ⚠️ New categories introduced: "CCTV" (EN and MS) and "安防监控" (ZH). Category sets are now 19 per language. If a category filter/index is ever generated from the markdown, these need to be registered.
- ⚠️ Cannibalisation watch (flagged, not skipped): the new cctv service blog overlaps the live editorial blog cctv-installation-buying-guide-kl (MS panduan-beli-pasang-cctv-kl, ZH ji-long-cctv-an-zhuang-gou-mai-zhi-nan), which covers camera types, HD/4K, IP vs analog, PoE vs Wi-Fi and cloud vs local. The Batch 6 cctv article is deliberately scoped to installation scope, process and pricing, and links out to the buying guide from all three languages. Monitor in GSC.
- ⚠️ Overlap watch within the batch: cleaning / deep-cleaning / post-renovation-cleaning are adjacent intents. Each main article opens with an explicit "which one do you need" comparison and cross-links the other two, so the differentiation is on the page rather than left to Google.
- ZH wording: cleaning verticals use 定期保洁 (recurring), 深度清洁 (deep clean) and 装修后清洁 (post-renovation) as distinct terms; CCTV uses 监控 / CCTV interchangeably as Malaysian Chinese readers search both.
- CCTV content is limited to verifiable domain facts (PoE vs Wi-Fi behaviour, camera counts by property type, condo management approval for common areas, handover documentation). No certifications, licences, brand partnerships or performance claims asserted.
- Live wiring: Batch 6 is markdown-only (same convention as Batches 1–3 and 5). Not added to blog-data-batch4.ts / blog-i18n.ts.
- Validation: script-verified frontmatter completeness, single H1 per article, no duplicate slugs across all 234 markdown files, coverImage assets exist on disk, WhatsApp CTA present in every file, EN/MS metaTitle 41–53 chars and metaDesc 130–170 chars, ZH metaTitle 12–27 and metaDesc 51–70 characters (in line with the ZH convention set in Batches 1–5). `npm run lint` / `type-check` / `build` still cannot run in this environment (node_modules not installed); markdown-only change does not affect the Next.js build.
- Future opportunity (missing link targets noted, none invented): no CCTV cost calculator under /tools, /ms/alatan or /zh/gongju; no problem pages for "cloudy/hazy tempered glass after cleaning" or "aluminium window condensation", which would be natural link targets for the glass & aluminium cluster.
- Services remaining after Batch 6: autogate, welding (2/28).

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
N and MS) and "安防监控" (ZH). Category sets are now 19 per language. If a category filter/index is ever generated from the markdown, these need to be registered.
- ⚠️ Cannibalisation watch (flagged, not skipped): the new cctv service blog overlaps the live editorial blog cctv-installation-buying-guide-kl (MS panduan-beli-pasang-cctv-kl, ZH ji-long-cctv-an-zhuang-gou-mai-zhi-nan), which covers camera types, HD/4K, IP vs analog, PoE vs Wi-Fi and cloud vs local. The Batch 6 cctv article is deliberately scoped to installation scope, process and pricing, and links out to the buying guide from all three languages. Monitor in GSC.
- ⚠️ Overlap watch within the batch: cleaning / deep-cleaning / post-renovation-cleaning are adjacent intents. Each main article opens with an explicit "which one do you need" comparison and cross-links the other two, so the differentiation is on the page rather than left to Google.
- ZH wording: cleaning verticals use 定期保洁 (recurring), 深度清洁 (deep clean) and 装修后清洁 (post-renovation) as distinct terms; CCTV uses 监控 / CCTV interchangeably as Malaysian Chinese readers search both.
- CCTV content is limited to verifiable domain facts (PoE vs Wi-Fi behaviour, camera counts by property type, condo management approval for common areas, handover documentation). No certifications, licences, brand partnerships or performance claims asserted.
- Live wiring: Batch 6 is markdown-only (same convention as Batches 1–3 and 5). Not added to blog-data-batch4.ts / blog-i18n.ts.
- Validation: script-verified frontmatter completeness, single H1 per article, no duplicate slugs across all 234 markdown files, coverImage assets exist on disk, WhatsApp CTA present in every file, EN/MS metaTitle 41–53 chars and metaDesc 130–170 chars, ZH metaTitle 12–27 and metaDesc 51–70 characters (in line with the ZH convention set in Batches 1–5). `npm run lint` / `type-check` / `build` still cannot run in this environment (node_modules not installed); markdown-only change does not affect the Next.js build.
- Future opportunity (missing link targets noted, none invented): no CCTV cost calculator under /tools, /ms/alatan or /zh/gongju; no problem pages for "cloudy/hazy tempered glass after cleaning" or "aluminium window condensation", which would be natural link targets for the glass & aluminium cluster.
- Services remaining after Batch 6: autogate, welding (2/28).

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
