# KL Servis Rumah — Service Architecture, Multilingual, Problem SEO & Internal Linking Audit

**Audit date:** 2026-08-09 (UTC)
**Repository baseline:** `99d450c0355b48c060a5b6ba9c69d60ef9aeaf52` on `arena/019fe8e5-klservisrumah-web`
**Live site:** `https://www.klservisrumah.my`
**Scope rule followed:** no service, sub-service, blog, FAQ, problem, or locale page was created or modified before this audit was completed.

## 1. Audit method and evidence

- Inspected every App Router page family, `middleware.ts`, `next.config.mjs`, `app/(en)/sitemap.ts`, `app/robots.ts`, metadata helpers, service/blog/problem/FAQ data, translation dictionaries, and internal-link components.
- Enumerated all 28 service records, 112 nested specialties, 77 problem records, 18 blogs, 192 generic content records, and 1,022 FAQ-directory entries from the source of truth.
- Built the production application and audited 4,335 generated HTML documents.
- Parsed the generated link graph: 216,255 unique page-to-page internal-link relationships.
- Verified representative live EN/MS/ZH service pages, sub-service behavior, localized blog/FAQ hubs, `robots.txt`, and multiple chunks of the live sitemap.
- Ran the repository audit suites: i18n parity, estimator/content parity, HTML quality, metadata/schema consistency, SEO consistency, TypeScript, production build, and dependency audit.

## 2. Executive inventory

| Inventory | Verified count | Interpretation |
|---|---:|---|
| Top-level service records | 28 | The code treats all 28 equally as indexable service pillars; it has no `core`/`additional` classification field. |
| Genuine nested specialties | 112 | Exactly 4 under every top-level service. |
| Additional/standalone service records | 0 explicitly classified | Do not invent a split. A business-approved taxonomy field is needed if some of the 28 should be labelled “additional.” |
| EN top-level service pages | 28 | Separate URLs under `/services/<slug>`. |
| MS top-level service pages | 28 | Separate URLs under `/ms/services/<slug>`. |
| ZH top-level service pages | 28 | Separate URLs under `/zh/services/<slug>`. |
| EN specialty pages | 112 | Separate URLs exist. |
| MS specialty pages | 0 | All 112 representative locale URLs are absent/404. |
| ZH specialty pages | 0 | All 112 representative locale URLs are absent/404. |
| Additional service-cluster/deep-dive URLs | 15 EN-only | These are content pages inside the service route and overlap several specialties. |
| Blogs | 18 EN + 18 MS + 18 ZH | All 18 articles have separate localized URLs and full content records. |
| FAQ hubs | 1 EN + 1 MS + 1 ZH | `/faq`, `/ms/soalan-lazim`, `/zh/chang-jian-wen-ti`. |
| Main-service FAQs | 112 | 4 per service; localized in the 28 MS/ZH service records. |
| Specialty FAQs | 672 generated | 6 per EN specialty page, but they are repeated templates rather than specialty-authored FAQ sets. |
| Problem pages | 77 EN | No separate MS/ZH problem URLs. 43 have native MS/ZH data for client switching; 34 do not. |
| Problem FAQs | 234 | 2–4 per problem; 19 problem records have only 2 and therefore miss the requested 3–4 threshold. |
| Sitemap URLs | 3,296 | 3,122 non-prefixed, 87 MS, 87 ZH; zero duplicate `<loc>` values. |
| Built HTML pages | 4,335 | Includes canonicalized supporting pages and noindex/error pages not listed in sitemap. |

### Taxonomy conclusion

The actual project does **not** encode “core” versus “additional” services. Every one of the 28 records uses the same `ServiceDetail` type, route template, directory, sitemap priority, pricing system, and localized main-page architecture. Therefore this audit reports **28 top-level/main service records, 112 sub-services, and 0 explicitly classified additional services**. Any alternative split must be added only after business approval; it must not be inferred from file order.

## 3. Complete service audit table

| Type | Service | Existing URL | EN | MS | ZH | Blog | FAQs | Problems | Internal links | Status |
|---|---|---|:---:|:---:|:---:|---|---:|---:|---|---|
| Main service | House Painting Services | `/services/painting` | ✅ | ✅ | ✅ | 3 topical | 4 native | 4 | Problems/areas/related; **no child or blog links**; topology Mapped | 🟡 Optimize |
| Sub-service | ↳ Interior House Painting | `/services/painting/interior-house-painting` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | 🔴 Priority gap |
| Sub-service | ↳ Exterior House Painting | `/services/painting/exterior-house-painting` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | 🔴 Priority gap |
| Sub-service | ↳ Commercial & Office Painting | `/services/painting/commercial-and-office-painting` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | 🔴 Priority gap |
| Sub-service | ↳ Wall Crack & Moisture Repair | `/services/painting/wall-crack-and-moisture-repair` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | 🔴 Priority gap |
| Main service | Plumbing & Leak Repair Services | `/services/plumbing` | ✅ | ✅ | ✅ | 1 topical | 4 native | 8 | Problems/areas/related; **no child or blog links**; topology Mapped | 🟡 Optimize |
| Sub-service | ↳ Water Leakage Diagnosis & Repair | `/services/plumbing/water-leakage-diagnosis-and-repair` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Toilet, Tap & Sink Installation | `/services/plumbing/toilet-tap-and-sink-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Drain Unclogging & Cleaning | `/services/plumbing/drain-unclogging-and-cleaning` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Water Heater & Pump Installation | `/services/plumbing/water-heater-and-pump-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Ceiling & Partition Services | `/services/ceiling` | ✅ | ✅ | ✅ | 1 topical | 4 native | 6 | Problems/areas/related; **no child or blog links**; topology Mapped | 🟡 Optimize |
| Sub-service | ↳ Water-Damaged Ceiling Repair | `/services/ceiling/water-damaged-ceiling-repair` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | 🔴 Priority gap |
| Sub-service | ↳ Plaster Ceiling Installation | `/services/ceiling/plaster-ceiling-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | 🔴 Priority gap |
| Sub-service | ↳ Gypsum Board Partition Wall | `/services/ceiling/gypsum-board-partition-wall` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | 🔴 Priority gap |
| Sub-service | ↳ Cornice & L-Box Concealed Light Trough | `/services/ceiling/cornice-and-l-box-concealed-light-trough` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | 🔴 Priority gap |
| Main service | Waterproofing & Leak Repair Services | `/services/waterproofing` | ✅ | ✅ | ✅ | 3 topical | 4 native | 8 | Problems/areas/related; **no child or blog links**; topology Mapped | 🟡 Optimize |
| Sub-service | ↳ PU High-Pressure Injection Grouting | `/services/waterproofing/pu-high-pressure-injection-grouting` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Bathroom & Wet Area Waterproofing | `/services/waterproofing/bathroom-and-wet-area-waterproofing` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Roof & Concrete Slab Waterproofing | `/services/waterproofing/roof-and-concrete-slab-waterproofing` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Wall Dampness & Efflorescence Repair | `/services/waterproofing/wall-dampness-and-efflorescence-repair` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Handyman Services | `/services/handyman` | ✅ | ✅ | ✅ | 1 topical | 4 native | 6 | Problems/areas/related; **no child or blog links**; topology Mapped | 🟡 Optimize |
| Sub-service | ↳ Heavy TV Wall Mounting | `/services/handyman/heavy-tv-wall-mounting` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Door, Hinge & Lockset Repair | `/services/handyman/door-hinge-and-lockset-repair` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Furniture Assembly (IKEA/Taobao) | `/services/handyman/furniture-assembly-ikea-taobao` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Curtains, Blinds & Shelves Hanging | `/services/handyman/curtains-blinds-and-shelves-hanging` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Complete House Renovation | `/services/house-renovation` | ✅ | ✅ | ✅ | 1 topical | 4 native | 1 | Problems/areas/related; **no child or blog links**; topology Mapped | 🟡 Optimize |
| Sub-service | ↳ Full House Renovation Package | `/services/house-renovation/full-house-renovation-package` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Kitchen & Bathroom Makeover | `/services/house-renovation/kitchen-and-bathroom-makeover` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Condo Interior Refurbishment | `/services/house-renovation/condo-interior-refurbishment` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Commercial Shoplot Renovation | `/services/house-renovation/commercial-shoplot-renovation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Licensed Electrical Services | `/services/electrical` | ✅ | ✅ | ✅ | 1 topical | 4 native | 3 | Problems/areas/related; **no child or blog links**; topology Mapped | 🟡 Optimize |
| Sub-service | ↳ New Power Point & Switch Installation | `/services/electrical/new-power-point-and-switch-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ DB Box Upgrade & Rewiring | `/services/electrical/db-box-upgrade-and-rewiring` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Lighting Point & Downlight Installation | `/services/electrical/lighting-point-and-downlight-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Aircond, Water Heater & Oven Point | `/services/electrical/aircond-water-heater-and-oven-point` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Water Heater Installation & Repair | `/services/water-heater` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Instant Water Heater Installation | `/services/water-heater/instant-water-heater-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Storage Tank Heater Installation | `/services/water-heater/storage-tank-heater-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Water Heater Repair & Descaling | `/services/water-heater/water-heater-repair-and-descaling` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Heat Pump Water Heater Install | `/services/water-heater/heat-pump-water-heater-install` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Ceiling Fan Installation & Replacement | `/services/ceiling-fan` | ✅ | ✅ | ✅ | 0 topical | 4 native | 1 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ New Ceiling Fan Installation | `/services/ceiling-fan/new-ceiling-fan-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Ceiling Fan Replacement | `/services/ceiling-fan/ceiling-fan-replacement` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ DC Motor Smart Fan Install | `/services/ceiling-fan/dc-motor-smart-fan-install` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Industrial / Shoplot Fan Install | `/services/ceiling-fan/industrial-shoplot-fan-install` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Lighting Design & Installation | `/services/lighting` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ LED Downlight Installation | `/services/lighting/led-downlight-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Pendant & Chandelier Install | `/services/lighting/pendant-and-chandelier-install` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Cove & Strip LED Installation | `/services/lighting/cove-and-strip-led-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Smart Lighting & Dimmer Retrofit | `/services/lighting/smart-lighting-and-dimmer-retrofit` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Professional Tiling & Tile Repair | `/services/tiling` | ✅ | ✅ | ✅ | 0 topical | 4 native | 3 | Problems/areas/related; **no child or blog links**; topology Mapped | 🟡 Optimize |
| Sub-service | ↳ Floor Tiling Installation | `/services/tiling/floor-tiling-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Wall Tiling Installation | `/services/tiling/wall-tiling-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Large-Format Slab Tiling | `/services/tiling/large-format-slab-tiling` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Tile Repair & Re-Grouting | `/services/tiling/tile-repair-and-re-grouting` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Plaster Ceiling Design & Build | `/services/plaster-ceiling` | ✅ | ✅ | ✅ | 1 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Flat Plaster Ceiling | `/services/plaster-ceiling/flat-plaster-ceiling` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Tiered & L-Box Ceiling | `/services/plaster-ceiling/tiered-and-l-box-ceiling` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Cove & Curved Ceiling | `/services/plaster-ceiling/cove-and-curved-ceiling` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Ceiling Repair & Re-Skim | `/services/plaster-ceiling/ceiling-repair-and-re-skim` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Wall & Ceiling Skim Coat | `/services/skim-coat` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Wall Skim Coating | `/services/skim-coat/wall-skim-coating` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Ceiling Skim Coating | `/services/skim-coat/ceiling-skim-coating` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Crack & Joint Repair | `/services/skim-coat/crack-and-joint-repair` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Full Condo Re-Skim Package | `/services/skim-coat/full-condo-re-skim-package` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Vinyl, SPC & Laminate Flooring | `/services/flooring` | ✅ | ✅ | ✅ | 1 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Mapped | 🟡 Optimize |
| Sub-service | ↳ SPC Click-Lock Flooring Install | `/services/flooring/spc-click-lock-flooring-install` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Laminate Flooring Install | `/services/flooring/laminate-flooring-install` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Luxury Vinyl Plank (LVP) Install | `/services/flooring/luxury-vinyl-plank-lvp-install` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Skirting & Transition Strip Fitting | `/services/flooring/skirting-and-transition-strip-fitting` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Epoxy & Polyurethane Flooring | `/services/epoxy-flooring` | ✅ | ✅ | ✅ | 0 topical | 4 native | 1 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Self-Levelling Epoxy Floor | `/services/epoxy-flooring/self-levelling-epoxy-floor` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Flake / Quartz Broadcast Epoxy | `/services/epoxy-flooring/flake-quartz-broadcast-epoxy` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Heavy-Duty Mortar Screed | `/services/epoxy-flooring/heavy-duty-mortar-screed` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Epoxy Floor Repair & Recoating | `/services/epoxy-flooring/epoxy-floor-repair-and-recoating` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Roof Repair & Waterproofing | `/services/roof-repair` | ✅ | ✅ | ✅ | 1 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Roof Leak Diagnosis & Repair | `/services/roof-repair/roof-leak-diagnosis-and-repair` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Ridge Re-Bedding & Re-Pointing | `/services/roof-repair/ridge-re-bedding-and-re-pointing` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Gutter Cleaning & Realignment | `/services/roof-repair/gutter-cleaning-and-realignment` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Full Torch-On Membrane Waterproofing | `/services/roof-repair/full-torch-on-membrane-waterproofing` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Kitchen Cabinet & Countertop | `/services/kitchen-cabinet` | ✅ | ✅ | ✅ | 1 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Modular Kitchen Cabinet (10ft L-shape) | `/services/kitchen-cabinet/modular-kitchen-cabinet-10ft-l-shape` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Custom Plywood Kitchen | `/services/kitchen-cabinet/custom-plywood-kitchen` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Quartz / Granite Countertop | `/services/kitchen-cabinet/quartz-granite-countertop` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Kitchen Makeover (Doors & Hardware Only) | `/services/kitchen-cabinet/kitchen-makeover-doors-and-hardware-only` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Custom Carpentry & Joinery | `/services/carpentry` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Built-in Wardrobe | `/services/carpentry/built-in-wardrobe` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ TV Console & Feature Wall | `/services/carpentry/tv-console-and-feature-wall` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Study Desk & Home Office | `/services/carpentry/study-desk-and-home-office` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Shoe Cabinet & Entry Storage | `/services/carpentry/shoe-cabinet-and-entry-storage` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Door Repair & Installation | `/services/door` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Solid Timber Door Installation | `/services/door/solid-timber-door-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Laminate Door Installation | `/services/door/laminate-door-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Door Planing & Adjustment | `/services/door/door-planing-and-adjustment` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Fire-Rated Door Installation | `/services/door/fire-rated-door-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Window Repair & Glass Replacement | `/services/window-repair` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Glass Replacement | `/services/window-repair/glass-replacement` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Window Seal Replacement | `/services/window-repair/window-seal-replacement` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Window Handle & Hinge Repair | `/services/window-repair/window-handle-and-hinge-repair` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Sliding Window Roller Replacement | `/services/window-repair/sliding-window-roller-replacement` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Locksmith & Smart Lock Services | `/services/locksmith` | ✅ | ✅ | ✅ | 1 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Smart Lock Installation | `/services/locksmith/smart-lock-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Mortice / Deadbolt Lock Replacement | `/services/locksmith/mortice-deadbolt-lock-replacement` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Key Cutting & Re-Keying | `/services/locksmith/key-cutting-and-re-keying` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Emergency Lockout (Landed House) | `/services/locksmith/emergency-lockout-landed-house` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Glass & Aluminium Fabrication | `/services/glass-aluminium` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Frameless Shower Screen | `/services/glass-aluminium/frameless-shower-screen` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Aluminium Sliding Window | `/services/glass-aluminium/aluminium-sliding-window` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Glass Office Partition | `/services/glass-aluminium/glass-office-partition` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Wall Mirror Installation | `/services/glass-aluminium/wall-mirror-installation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Residential & Office Cleaning | `/services/cleaning` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Weekly Condo Cleaning (1,000 sqft) | `/services/cleaning/weekly-condo-cleaning-1-000-sqft` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Bi-Weekly Terrace House Cleaning | `/services/cleaning/bi-weekly-terrace-house-cleaning` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Office Cleaning (Small Office, 1,500 sqft) | `/services/cleaning/office-cleaning-small-office-1-500-sqft` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ One-Off Spring Clean | `/services/cleaning/one-off-spring-clean` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Deep Cleaning & Move-In/Out | `/services/deep-cleaning` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Condo Move-Out Deep Clean (1,000 sqft) | `/services/deep-cleaning/condo-move-out-deep-clean-1-000-sqft` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Terrace House Deep Clean (2,000 sqft) | `/services/deep-cleaning/terrace-house-deep-clean-2-000-sqft` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Post-Illness Disinfection Clean | `/services/deep-cleaning/post-illness-disinfection-clean` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Allergy Season Refresh | `/services/deep-cleaning/allergy-season-refresh` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Post-Renovation Cleaning | `/services/post-renovation-cleaning` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Condo Post-Renovation Clean (1,000 sqft) | `/services/post-renovation-cleaning/condo-post-renovation-clean-1-000-sqft` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Terrace House Post-Renovation Clean (2,000 sqft) | `/services/post-renovation-cleaning/terrace-house-post-renovation-clean-2-000-sqft` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ New Tiles Grout Haze Removal | `/services/post-renovation-cleaning/new-tiles-grout-haze-removal` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Construction Debris Removal | `/services/post-renovation-cleaning/construction-debris-removal` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | CCTV & Security Camera Installation | `/services/cctv` | ✅ | ✅ | ✅ | 1 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Condo Wi-Fi CCTV Package (4 cameras) | `/services/cctv/condo-wi-fi-cctv-package-4-cameras` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Landed House PoE CCTV (8 cameras) | `/services/cctv/landed-house-poe-cctv-8-cameras` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Single Camera Add-On | `/services/cctv/single-camera-add-on` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ CCTV System Health Check & Relocation | `/services/cctv/cctv-system-health-check-and-relocation` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Auto Gate & Motorised Gate | `/services/autogate` | ✅ | ✅ | ✅ | 1 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Single Swing Autogate | `/services/autogate/single-swing-autogate` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Double Swing Autogate | `/services/autogate/double-swing-autogate` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Sliding Autogate | `/services/autogate/sliding-autogate` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Autogate Motor Replacement & Service | `/services/autogate/autogate-motor-replacement-and-service` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Main service | Welding & Metal Fabrication | `/services/welding` | ✅ | ✅ | ✅ | 0 topical | 4 native | 2 | Problems/areas/related; **no child or blog links**; topology Wrong fallback | 🟡 Optimize |
| Sub-service | ↳ Custom Window Grille | `/services/welding/custom-window-grille` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Main Gate Fabrication | `/services/welding/main-gate-fabrication` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ On-Site Welding Repair | `/services/welding/on-site-welding-repair` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |
| Sub-service | ↳ Staircase Stringer Fabrication | `/services/welding/staircase-stringer-fabrication` | ✅ | ❌ | ❌ | 0 mapped | 6 templated | 0 explicit map | Parent breadcrumb + siblings; **no parent-down/blog/problem links** | ⏳ Gap |

### What the table proves

- Main-service language coverage is structurally good: 28 real three-URL clusters.
- Specialty language coverage is the largest gap: **224 missing localized specialty URLs** (112 MS + 112 ZH). Live checks for the painting specialty returned localized 404 pages.
- Every main service embeds 4 useful FAQs. Every specialty receives six route-template FAQs, but they are the same cost/inclusion/WhatsApp/same-day/area/warranty patterns with nouns substituted. They do not satisfy the brief’s “genuinely unique” requirement.
- Main service pages render specialty names and prices as `<div>` cards, not links. The link graph found **zero main-service → specialty links**. Specialty pages only enter their own sibling ring; many have exactly three inbound links, all from sibling specialty pages.
- No blog relationship is encoded at service or specialty level. The `relatedBlogs` array is stale and is not rendered by service pages.

## 4. Existing service-cluster/deep-dive URLs

These 15 EN-only pages are additional content pages, not records in the 28-service inventory. They need intent consolidation before localized counterparts are created.

| Parent | URL | Title | Audit note |
|---|---|---|---|
| House Painting Services | `/services/painting/interior-painting-kl` | Interior Painting in KL | EN-only; review overlap with the four canonical specialties. |
| House Painting Services | `/services/painting/exterior-painting-kl` | Exterior Painting in KL | EN-only; review overlap with the four canonical specialties. |
| House Painting Services | `/services/painting/commercial-painting-kl` | Commercial Painting in KL | EN-only; review overlap with the four canonical specialties. |
| Plumbing & Leak Repair Services | `/services/plumbing/leak-repair-kl` | Leak Repair in KL | EN-only; review overlap with the four canonical specialties. |
| Plumbing & Leak Repair Services | `/services/plumbing/installation-kl` | Plumbing Installation in KL | EN-only; review overlap with the four canonical specialties. |
| Plumbing & Leak Repair Services | `/services/plumbing/emergency-plumbing-kl` | Emergency Plumbing in KL | EN-only; review overlap with the four canonical specialties. |
| Ceiling & Partition Services | `/services/ceiling/ceiling-installation-kl` | Ceiling Installation in KL | EN-only; review overlap with the four canonical specialties. |
| Ceiling & Partition Services | `/services/ceiling/repair-kl` | Ceiling Repair in KL | EN-only; review overlap with the four canonical specialties. |
| Ceiling & Partition Services | `/services/ceiling/partition-kl` | Gypsum Partition Services KL & Selangor | EN-only; review overlap with the four canonical specialties. |
| Waterproofing & Leak Repair Services | `/services/waterproofing/bathroom-kl` | Bathroom Waterproofing in KL | EN-only; review overlap with the four canonical specialties. |
| Waterproofing & Leak Repair Services | `/services/waterproofing/roof-kl` | Roof Waterproofing in KL | EN-only; review overlap with the four canonical specialties. |
| Waterproofing & Leak Repair Services | `/services/waterproofing/pu-grouting-kl` | PU Grouting in KL | EN-only; review overlap with the four canonical specialties. |
| Handyman Services | `/services/handyman/tv-mounting-kl` | TV Mounting in KL | EN-only; review overlap with the four canonical specialties. |
| Handyman Services | `/services/handyman/door-lock-kl` | Door and Lock Repair in KL | EN-only; review overlap with the four canonical specialties. |
| Handyman Services | `/services/handyman/furniture-assembly-kl` | Furniture Assembly in KL | EN-only; review overlap with the four canonical specialties. |

### High-overlap pairs (do not delete until Search Console and intent review)

- `/services/painting/interior-house-painting` ↔ `/services/painting/interior-painting-kl`
- `/services/painting/exterior-house-painting` ↔ `/services/painting/exterior-painting-kl`
- `/services/painting/commercial-and-office-painting` ↔ `/services/painting/commercial-painting-kl`
- `/services/plumbing/water-leakage-diagnosis-and-repair` ↔ `/services/plumbing/leak-repair-kl`
- `/services/ceiling/plaster-ceiling-installation` ↔ `/services/ceiling/ceiling-installation-kl`
- `/services/ceiling/water-damaged-ceiling-repair` ↔ `/services/ceiling/repair-kl`
- `/services/ceiling/gypsum-board-partition-wall` ↔ `/services/ceiling/partition-kl`
- All three waterproofing clusters overlap PU, bathroom, and roof specialties.
- All three handyman clusters overlap TV mounting, door/lock repair, and furniture assembly specialties.
- Plumbing installation/emergency clusters are broader but still compete with installation specialties and the emergency route.

## 5. Complete blog URL inventory

| Topic | EN | MS | ZH |
|---|---|---|---|
| 5 Tips For Choosing Modern Home Paint Colors in Malaysia | `/blog/5-tips-choosing-paint-colors-malaysia` | `/ms/blog/5-petua-memilih-warna-cat-rumah-malaysia` | `/zh/bo-ke/ma-lai-xi-ya-xuan-ze-jia-ju-you-qi-yan-se-5-ge-ji-qiao` |
| How To Fix A Leaking Bathroom Ceiling Without Hacking Tiles | `/blog/how-to-fix-leaking-ceiling-without-tile-hacking` | `/ms/blog/cara-baik-siling-bilik-air-bocor-tanpa-pecah-jubin` | `/zh/bo-ke/wu-xu-ci-zhuan-xiu-fu-yu-shi-tian-hua-ban-lou-shui` |
| When to Repaint Your House in Malaysia (Signs, Frequency & Budget) | `/blog/when-to-repaint-your-house-malaysia` | `/ms/blog/bila-perlu-cat-semula-rumah-malaysia` | `/zh/bo-ke/ma-lai-xi-ya-he-shi-zhong-xin-fang-qi-fang-wu` |
| How to Find a Hidden Water Leak Before Your Bill Explodes | `/blog/hidden-water-leak-detection-kl` | `/ms/blog/pengesanan-kebocoran-air-tersembunyi-kl` | `/zh/bo-ke/ji-long-po-cang-an-lou-shui-jian-ce` |
| Gypsum vs Plaster Ceiling: Which One Is Right for Your Malaysian Home? | `/blog/gypsum-vs-plaster-ceiling-malaysia` | `/ms/blog/siling-gypsum-vs-siling-plaster-malaysia` | `/zh/bo-ke/ma-lai-xi-ya-shi-gao-ban-diao-ting-yu-shi-gao-tian-hua-ban-dui-bi` |
| PU Grouting vs Full Membrane Waterproofing: How to Choose | `/blog/pu-grouting-vs-full-membrane-waterproofing` | `/ms/blog/grouting-pu-vs-membran-kalis-air-penuh` | `/zh/bo-ke/pu-zhu-jiang-yu-quan-mian-fang-shui-dui-bi` |
| The 2026 TV Wall Mounting Safety Guide for Malaysian Homes | `/blog/tv-wall-mounting-safety-guide` | `/ms/blog/panduan-keselamatan-pemasangan-tv-dinding` | `/zh/bo-ke/dian-shi-gua-qiang-an-zhuang-an-quan-zhi-nan` |
| The Real Cost of a Full House Renovation in KL (2026 Guide) | `/blog/cost-of-full-house-renovation-kl` | `/ms/blog/kos-renovasi-penuh-rumah-kl` | `/zh/bo-ke/ji-long-quan-wu-fang-wu-zheng-xiu-fei-yong` |
| Safe Electrical Wiring Upgrade for Old KL Houses | `/blog/safe-electrical-wiring-upgrade-old-house` | `/ms/blog/pendawaian-elektrik-selamat-rumah-lama` | `/zh/bo-ke/jiu-fang-an-quan-dian-qi-xian-lu-sheng-ji-zhi-nan` |
| SPC vs Vinyl vs Laminate Flooring in Malaysia: Which Is Right for You? | `/blog/spc-vs-vinyl-vs-laminate-flooring-malaysia` | `/ms/blog/spc-vs-vinyl-vs-laminate-lantai-malaysia` | `/zh/bo-ke/ma-lai-xi-ya-spc-yu-yin-xi-yu-qiang-hua-di-ban-dui-bi` |
| How to Fix a Leaking Roof in KL Before the Monsoon | `/blog/how-to-fix-a-leaking-roof-in-kl` | `/ms/blog/cara-baik-bumbung-bocor-di-kl` | `/zh/bo-ke/ji-long-ru-he-xiu-fu-lou-shui-wu-ding` |
| Kitchen Cabinet Material Guide for Malaysian Homes | `/blog/kitchen-cabinet-material-guide-malaysia` | `/ms/blog/panduan-bahan-kabinet-dapur-malaysia` | `/zh/bo-ke/ma-lai-xi-ya-chu-fang-gui-ban-cai-liao-zhi-nan` |
| Monsoon Home Prep Checklist for the Klang Valley | `/blog/monsoon-home-prep-klang-valley` | `/ms/blog/persediaan-rumah-monsun-klang-valley` | `/zh/bo-ke/ba-sheng-gu-yu-ji-fang-wu-fang-hu-zhi-nan` |
| Smart Lock Buying Guide for Malaysian Homes (2026) | `/blog/smart-lock-buying-guide-malaysia-2026` | `/ms/blog/panduan-beli-kunci-pintar-malaysia-2026` | `/zh/bo-ke/ma-lai-xi-ya-2026-zhi-neng-men-suo-gou-mai-zhi-nan` |
| CCTV Buying & Installation Guide for KL Homes | `/blog/cctv-installation-buying-guide-kl` | `/ms/blog/panduan-beli-pasang-cctv-kl` | `/zh/bo-ke/ji-long-cctv-an-zhuang-gou-mai-zhi-nan` |
| Auto Gate Installation Guide for Malaysian Homes | `/blog/auto-gate-installation-guide-malaysia` | `/ms/blog/panduan-pemasangan-auto-gate-malaysia` | `/zh/bo-ke/ma-lai-xi-ya-zi-dong-men-an-zhuang-zhi-nan` |
| Condo Repaint vs Landed Terrace House Repaint: What's Different? | `/blog/when-to-repaint-condo-vs-repaint-terrace-house` | `/ms/blog/cat-semula-kondo-vs-rumah-teres` | `/zh/bo-ke/gong-yu-chong-shua-yu-pai-wu-chong-shua-qu-bie` |
| How to Hire an Honest Home Contractor in Malaysia (Red Flag Guide) | `/blog/how-to-hire-honest-contractor-malaysia` | `/ms/blog/cara-upah-kontraktor-jujur-malaysia` | `/zh/bo-ke/ma-lai-xi-ya-ru-he-pin-qing-cheng-shi-cheng-bao-shang` |

### Blog coverage result: 14/28 services have at least one clearly topical article; 14/28 do not

Services without a clearly dedicated article: **Water Heater, Ceiling Fan, Lighting, Tiling, Skim Coat, Epoxy Flooring, Carpentry, Door, Window Repair, Glass & Aluminium, Residential/Office Cleaning, Deep Cleaning, Post-Renovation Cleaning, and Welding.**

No specialty has an explicit service-data relationship to a blog. A few posts overlap a specialty topic (e.g. TV mounting, hidden leak detection, PU grouting), but the articles do not link to the specialty URLs and the specialty pages do not link back. Strict end-to-end specialty blog coverage is therefore **0/112 verified**.

### Blog quality/rendering issue

The EN article renderer outputs `post.content` as plain text with `whitespace-pre-line`; Markdown markers such as `###`, `**`, `---`, and pipe tables are visible to users instead of becoming semantic headings/tables. The localized renderers parse some headings, but still leave several escaped list/table markers. This weakens readability, heading structure, internal linking, and article schema alignment.

## 6. Existing FAQ URL inventory

| Language | URL | Content | Hreflang |
|---|---|---|---|
| EN | `/faq` | 1,022 deduplicated directory entries + top FAQ accordion | Real EN/MS/ZH cluster |
| MS | `/ms/soalan-lazim` | Localized directory | Real EN/MS/ZH cluster |
| ZH | `/zh/chang-jian-wen-ti` | Localized directory | Real EN/MS/ZH cluster |

There are no separate FAQ URLs per service or specialty. Main-service FAQs are embedded on each main service page; specialty FAQs are embedded only on the EN specialty URL. This is acceptable architecturally if each set is unique and contextually linked, but the specialty sets are currently templated and are not included in the central FAQ directory.

Localized FAQ source links currently point to non-prefixed EN service/problem URLs in many entries. Example: the Malay FAQ hub links “Perkhidmatan Mengecat Rumah” to `/services/painting` rather than `/ms/services/painting`. This interrupts the localized crawl/user journey.

## 7. Complete problem URL inventory

There are 77 indexable problem URLs and 234 problem FAQs. Every URL below is EN-path only; there are no `/ms/problems/*` or `/zh/problems/*` sitemap entries.

| Service | Problem URL | Title | FAQs | Native MS/ZH data |
|---|---|---|---:|:---:|
| painting | `/problems/peeling-paint-malaysia` | Peeling Paint in Malaysian Homes | 4 | ✅ |
| painting | `/problems/faded-exterior-paint-malaysia` | Faded Exterior Paint After Malaysian Sun and Rain | 4 | ✅ |
| waterproofing | `/problems/damp-walls-paint-bubbling` | Damp Walls and Paint Bubbling | 4 | ✅ |
| ceiling | `/problems/ceiling-mold-stains` | Ceiling Mold and Brown Water Stains | 4 | ✅ |
| plumbing | `/problems/burst-pipe-emergency` | Burst Pipe Emergency in KL & Selangor | 4 | ✅ |
| plumbing | `/problems/low-water-pressure-kl` | Low Water Pressure in KL Homes | 4 | ✅ |
| plumbing | `/problems/blocked-drain-toilet` | Blocked Drain or Toilet Choke | 4 | ✅ |
| plumbing | `/problems/water-heater-not-working` | Water Heater Not Working | 4 | ✅ |
| ceiling | `/problems/sagging-plaster-ceiling` | Sagging Plaster Ceiling | 4 | ✅ |
| waterproofing | `/problems/ceiling-leak-after-rain` | Ceiling Leak After Rain | 4 | ✅ |
| ceiling | `/problems/cracked-ceiling-joints` | Cracked Ceiling Joints | 4 | ✅ |
| ceiling | `/problems/condensation-ceiling-mold` | Condensation Ceiling Mold | 4 | ✅ |
| waterproofing | `/problems/bathroom-leak-upper-floor` | Upper-Floor Bathroom Leak | 4 | ✅ |
| waterproofing | `/problems/roof-leak-rainy-season` | Roof Leak During Rainy Season | 4 | ✅ |
| waterproofing | `/problems/wall-dampness-rising` | Rising Damp and Lower Wall Peeling | 4 | ✅ |
| waterproofing | `/problems/swimming-pool-leak-balcony` | Balcony or Pool Deck Leak | 4 | ✅ |
| handyman | `/problems/loose-door-hinge` | Loose Door Hinge or Scraping Door | 4 | ✅ |
| handyman | `/problems/tv-fell-off-wall` | Unsafe TV Wall Mount or Failed Anchors | 4 | ✅ |
| handyman | `/problems/stuck-window-lock` | Stuck Window Lock or Handle | 4 | ✅ |
| handyman | `/problems/ikea-furniture-assembly-help` | IKEA or Flat-Pack Furniture Assembly Help | 4 | ✅ |
| electrical | `/problems/rccb-tripping-kl` | RCCB / ELCB Keeps Tripping in KL Homes | 4 | ✅ |
| electrical | `/problems/flickering-lights-kl` | Flickering Lights or Dimming When Appliances Turn On | 3 | ✅ |
| water-heater | `/problems/water-heater-not-heating` | Instant Water Heater Not Heating or Weak Flow | 3 | ✅ |
| ceiling-fan | `/problems/ceiling-fan-wobbling` | Ceiling Fan Wobbling or Vibrating Loudly | 3 | ✅ |
| tiling | `/problems/hollow-tiles-floor` | Hollow Sounding Tiles or Loose Floor Tiles | 3 | ✅ |
| flooring | `/problems/spc-flooring-peeling-edges` | SPC / Vinyl Flooring Peeling at Edges or Seams | 2 | ✅ |
| roof-repair | `/problems/clogged-gutter-leaking` | Clogged Gutter Causing Roof Leak or Overflow | 2 | ✅ |
| kitchen-cabinet | `/problems/kitchen-cabinet-door-misaligned` | Kitchen Cabinet Doors Misaligned or Not Closing Properly | 2 | ✅ |
| lighting | `/problems/flickering-downlights` | Downlights Flickering or Not Turning On | 2 | ✅ |
| plaster-ceiling | `/problems/plaster-ceiling-cracking-joints` | Plaster Ceiling Joint Cracking After Installation | 2 | ✅ |
| skim-coat | `/problems/peeling-skim-coat` | Skim Coat Peeling or Powdering After Painting | 2 | ✅ |
| epoxy-flooring | `/problems/epoxy-floor-yellowing` | Epoxy Floor Yellowing or Discoloring | 2 | ✅ |
| carpentry | `/problems/wardrobe-door-not-closing` | Built-in Wardrobe Door Not Closing or Misaligned | 2 | ✅ |
| door | `/problems/door-scraping-floor` | Door Scraping Floor or Not Latching Properly | 2 | ✅ |
| window-repair | `/problems/sliding-window-stuck` | Sliding Window Stuck or Hard to Open | 2 | ✅ |
| locksmith | `/problems/smart-lock-not-working` | Smart Lock Not Responding or Battery Draining Fast | 2 | ✅ |
| glass-aluminium | `/problems/shower-screen-leaking` | Frameless Shower Screen Leaking at Bottom | 2 | ✅ |
| cleaning | `/problems/mold-in-bathroom-after-cleaning` | Mold Returning Quickly After Professional Cleaning | 2 | ✅ |
| deep-cleaning | `/problems/stubborn-grout-stains-after-deep-clean` | Grout Still Stained After Deep Cleaning Service | 2 | ✅ |
| post-renovation-cleaning | `/problems/construction-dust-returning` | Fine Construction Dust Returning After Post-Reno Clean | 2 | ✅ |
| cctv | `/problems/cctv-not-recording` | CCTV Camera Not Recording or Footage Missing | 2 | ✅ |
| autogate | `/problems/autogate-not-closing` | Autogate Not Closing or Motor Running Continuously | 2 | ✅ |
| welding | `/problems/rusting-window-grille` | Window Grille or Gate Rusting Quickly | 2 | ✅ |
| painting | `/problems/yellowing-white-walls` | White Walls Turning Yellow / Cream | 3 | ❌ |
| painting | `/problems/paint-cracking-hairline-walls` | Hairline Cracks Appearing on Painted Walls | 3 | ❌ |
| plumbing | `/problems/leaking-bathroom` | Leaking Bathroom (Wet Floor Below, Damp Walls) | 3 | ❌ |
| plumbing | `/problems/low-water-pressure` | Low Water Pressure at Home | 3 | ❌ |
| plumbing | `/problems/clogged-drain` | Clogged Kitchen or Bathroom Drain | 3 | ❌ |
| plumbing | `/problems/toilet-not-flushing` | Toilet Not Flushing Properly | 3 | ❌ |
| ceiling | `/problems/sagging-ceiling` | Sagging or Bowing Plaster Ceiling | 3 | ❌ |
| ceiling | `/problems/ceiling-cornice-crack` | Cornice Cracks Between Wall and Ceiling | 3 | ❌ |
| waterproofing | `/problems/balcony-leak-condo` | Balcony Leaking Into the Unit Below (Condo) | 3 | ❌ |
| waterproofing | `/problems/concrete-slab-crack-leak` | Concrete Slab Cracks Leaking During Heavy Rain | 3 | ❌ |
| handyman | `/problems/curtain-track-falling` | Curtain Track Coming Loose from the Ceiling | 3 | ❌ |
| handyman | `/problems/door-hinge-sagging` | Sagging or Squeaking Door | 3 | ❌ |
| house-renovation | `/problems/old-condo-full-refurbishment` | Old Condo That Needs Full Refurbishment | 3 | ❌ |
| electrical | `/problems/power-tripping-frequently` | Power Tripping Frequently in the House | 3 | ❌ |
| water-heater | `/problems/water-heater-cold` | Water Heater Not Heating (Cold Water Only) | 3 | ❌ |
| tiling | `/problems/loose-hollow-tiles` | Loose or Hollow-Sounding Floor Tiles | 3 | ❌ |
| tiling | `/problems/cracked-tile-grout` | Cracked or Discoloured Tile Grout | 3 | ❌ |
| plaster-ceiling | `/problems/plaster-ceiling-hairline-crack` | Hairline Cracks in Plaster Ceiling | 3 | ❌ |
| skim-coat | `/problems/uneven-wall-surface-skim` | Uneven or Bumpy Wall Surface | 3 | ❌ |
| flooring | `/problems/vinyl-flooring-lifting-edges` | Vinyl or SPC Flooring Lifting at the Edges | 3 | ❌ |
| roof-repair | `/problems/cracked-roof-tiles` | Cracked or Displaced Roof Tiles | 3 | ❌ |
| kitchen-cabinet | `/problems/cabinet-door-sagging` | Kitchen Cabinet Doors Sagging or Misaligned | 3 | ❌ |
| carpentry | `/problems/wardrobe-door-jamming` | Wardrobe Door Jamming or Not Closing | 3 | ❌ |
| door | `/problems/digital-smart-lock-installation` | Digital / Smart Lock Installation on Existing Door | 3 | ❌ |
| locksmith | `/problems/locked-out-of-house` | Locked Out of Your House | 3 | ❌ |
| lighting | `/problems/downlight-flickering` | LED Downlight Flickering or Dying Early | 3 | ❌ |
| glass-aluminium | `/problems/shower-screen-water-leak` | Shower Screen Leaking Water onto the Floor | 3 | ❌ |
| cleaning | `/problems/stubborn-bathroom-limescale` | Stubborn Bathroom Limescale and Water Stains | 3 | ❌ |
| deep-cleaning | `/problems/move-out-condo-deep-clean` | Move-Out Condo Deep Cleaning | 3 | ❌ |
| post-renovation-cleaning | `/problems/cement-splatter-tile-clean` | Cement Splatter and Dust After Renovation | 3 | ❌ |
| cctv | `/problems/cctv-not-recording-storage-full` | CCTV Not Recording or Showing Blank Feed | 3 | ❌ |
| autogate | `/problems/autogate-remote-not-working` | Auto Gate Remote Not Working | 3 | ❌ |
| welding | `/problems/loose-metal-gate-hinges` | Loose or Sagging Metal Gate Hinges | 3 | ❌ |
| window-repair | `/problems/stuck-sliding-window` | Sliding Window Stuck or Jamming | 3 | ❌ |

### Problem-content gaps

- Separate localized problem URLs missing: **154** (77 MS + 77 ZH).
- Native translated problem bodies missing: **34/77**. Their localized FAQ-hub labels have a fallback translation map, but the source problem pages do not have full native content.
- Problem records link to one parent service, but not to a relevant blog, central FAQ anchor, related service, specialty, or location page.
- Problems are associated only with a top-level `serviceSlug`; there is no explicit `subserviceSlug`, `blogSlugs`, `faqIds`, or location relationship.
- 19 problem records have only 2 FAQs and must be expanded to 3–4 after overlap consolidation.

### Likely duplicate/competing problem intents to review before localization

- `low-water-pressure-kl` ↔ `low-water-pressure`
- `blocked-drain-toilet` ↔ `clogged-drain` (partially overlapping; toilet intent may remain separate)
- `sagging-plaster-ceiling` ↔ `sagging-ceiling`
- `flickering-lights-kl` ↔ `flickering-downlights` ↔ `downlight-flickering`
- `hollow-tiles-floor` ↔ `loose-hollow-tiles`
- `cracked-ceiling-joints` ↔ `plaster-ceiling-cracking-joints` ↔ `plaster-ceiling-hairline-crack`
- `spc-flooring-peeling-edges` ↔ `vinyl-flooring-lifting-edges`
- `kitchen-cabinet-door-misaligned` ↔ `cabinet-door-sagging`
- `wardrobe-door-not-closing` ↔ `wardrobe-door-jamming`
- `sliding-window-stuck` ↔ `stuck-sliding-window`
- `shower-screen-leaking` ↔ `shower-screen-water-leak`
- `cctv-not-recording` ↔ `cctv-not-recording-storage-full`
- `water-heater-not-working` ↔ `water-heater-not-heating` ↔ `water-heater-cold`
- `loose-door-hinge` ↔ `door-hinge-sagging` and parts of `door-scraping-floor`

These are **review candidates**, not deletion instructions. Compare query intent, GSC impressions, backlinks, and conversions before merge/redirect decisions.

## 8. Existing language routing architecture

| Content family | EN | MS | ZH | Current behavior |
|---|---|---|---|---|
| Main services | `/services/<slug>` | `/ms/services/<slug>` | `/zh/services/<slug>` | Real SSR/SSG pages, self-canonical, correct three-way hreflang. |
| Service directories | `/services` | `/ms/services` | `/zh/services` | Real localized pages. |
| Specialties | `/services/<service>/<specialty>` | Missing | Missing | Locale specialty requests under `/ms/services/*` and `/zh/services/*` return 404. |
| Blogs | `/blog/<slug>` | `/ms/blog/<localized-slug>` | `/zh/bo-ke/<localized-slug>` | Real localized pages and hreflang. |
| FAQ hub | `/faq` | `/ms/soalan-lazim` | `/zh/chang-jian-wen-ti` | Real localized pages and hreflang. |
| Tools | `/tools/<slug>` | `/ms/alatan/<slug>` | `/zh/gongju/<localized-slug>` | Real localized pages and hreflang. |
| Problems | `/problems/<slug>` | Missing | Missing | `/ms/problems/*` and `/zh/problems/*` are not real localized routes; middleware strips unsupported locale prefixes outside real trees. |
| Cost/emergency pages | `/services/<slug>/cost|emergency` | Missing | Missing | Locale service tree has no nested routes. |
| Homepage | `/` | `/ms` noindex scaffold | `/zh` noindex scaffold | Scaffolds set preference and redirect to `/`; no indexable localized homepage. |
| Areas/suburbs/generic guides | Non-prefixed EN URL | No separate URL | No separate URL | Client language switch / same canonical architecture. |

### Architecture decision for future work

Reuse the established prefix architecture. Do **not** invent another locale system:

- EN: `/services/...`, `/blog/...`, `/problems/...`
- MS: `/ms/services/...`, `/ms/blog/...`, recommended `/ms/problems/...`
- ZH: `/zh/services/...`, `/zh/bo-ke/...`, recommended `/zh/problems/...`

Localized slugs are already used for blogs and tools; service slugs are deliberately stable across languages. Either is SEO-valid. For service/specialty rollout, preserving the stable service slug is the lowest-risk pattern because existing main service clusters already use it.

## 9. Canonical and hreflang audit

### Working correctly

- Main service, blog, FAQ, and tool equivalents have real reciprocal EN/MS/ZH hreflang clusters with `x-default` pointing to EN.
- Main localized pages are self-canonical, not canonicalized to English.
- The sitemap has no duplicate `<loc>` entries.
- The full-corpus SEO audit found 0 pages combining hreflang with a different canonical.

### Gaps

- Specialty and problem pages use the generic same-URL multilingual model: `en-MY`, `ms-MY`, and `zh-MY` all point to the same non-prefixed URL. That does not meet this project’s requirement for unique language URLs and gives search engines no separate Malay/Chinese document to rank.
- Cost, emergency, areas, suburbs, and most generic content use the same model.
- Missing nested locale routes become 404s because `/ms/services` and `/zh/services` are real locale trees, so they do not fall through to the old redirect behavior.

## 10. Sitemap audit

The generated sitemap contains **3,296 unique indexable URLs**:

- Non-prefixed/EN architecture: **3,122**
- MS: **87**
- ZH: **87**
- Main service URLs: 28 EN + 28 MS + 28 ZH.
- Service specialty/deep-dive URLs: 127 EN only (112 specialties + 15 clusters).
- Blogs: 19 per language including each index.
- FAQ hubs: 1 per language.
- Tools: 38 per language including each index.
- Problems: 78 EN-path URLs including the problem index; 0 MS; 0 ZH.
- Duplicate `<loc>` values: 0.

The 4,335 built HTML pages exceed the 3,296 sitemap URLs mainly because 1,036 area-overlap suburb pages are intentionally canonicalized to `/areas/*` and excluded from the sitemap. This is correct canonical consolidation, but the large location-template estate still needs content-quality review.

## 11. Metadata and indexability

- Production corpus: 4,335 pages with 0 missing titles, descriptions, H1s, canonical tags, or invalid JSON-LD blocks in the automated quality gates.
- Duplicate title groups among the current audited set: 0.
- 16 titles under 20 characters and 88 descriptions under 50 characters were reported by the broad metadata audit; most are CJK/localized or utility pages, but should be reviewed before final sign-off.
- Main service pages have localized title, description, canonical, OG, Twitter, language metadata, and schema.
- EN specialty pages have unique title/description/H1/canonical, but their body architecture is mostly shared/template content. Unique metadata alone does not prevent thin-content risk.
- Robots: public crawling is allowed; `/api/`, `/_next/`, `/admin/`, and `/search` are disallowed. Sitemap and news sitemap are declared.
- The prohibited marketing phrase “Market-Rate” was not found in visible page copy. Internal pricing modules still use technical `market-rates` naming, which is not customer-facing marketing.

## 12. Internal linking audit

| Required relationship | Current result |
|---|---|
| Home → main service | ✅ Strong; directories/home/footer link service pillars. |
| Main service → specialty | ❌ Zero contextual links; specialty cards are non-link `<div>` elements. |
| Specialty → main service | ✅ Breadcrumb and CTA. |
| Specialty → sibling specialties | ✅ Three sibling links for standard four-specialty groups. |
| Main service → problem | 🟡 Present, but only 4 rendered and topical map has stale/missing records. |
| Problem → service | ✅ One parent service link. |
| Problem → specialty/blog/FAQ/location | ❌ Missing. |
| Main service → blog | ❌ Missing. |
| Blog → service/specialty/problem/FAQ | ❌ No contextual service link; only WhatsApp/category text and six blog siblings. |
| Service → embedded FAQ | ✅ Four main FAQs; specialty FAQs are templated. |
| FAQ hub → service/problem | 🟡 Present, but localized hubs often link to EN/non-prefixed URLs. |
| Service → related service | 🟡 Present; 19/28 services fall back to Handyman relationships because their topical map is missing. |
| Service → location | ✅ Main service pages link selected areas. |
| Location → service | ✅ Area/service architecture is extensive. |

### Topical-map integrity defects

- Only **9/28** services have a `topicalAuthorityMap` entry. Missing: water-heater, ceiling-fan, lighting, plaster-ceiling, skim-coat, epoxy-flooring, roof-repair, kitchen-cabinet, carpentry, door, window-repair, locksmith, glass-aluminium, cleaning, deep-cleaning, post-renovation-cleaning, cctv, autogate, welding.
- Unknown services silently fall back to the Handyman silo, so many related-service/problem suggestions are semantically wrong.
- Existing map entries reference missing problem slugs such as `wall-cracks-malaysia`, `ceiling-water-stains`, `roof-leaking-malaysia`, and `water-heater-leaking`.
- Existing `relatedBlogs` values reference non-existent blog slugs such as `how-to-choose-house-painter`, `nippon-vs-dulux-paint`, and `pu-vs-membrane-comparison`.
- `relatedBlogs` is not rendered on main service pages, so even valid entries would not currently create service ↔ blog links.

## 13. Thin and scaled-content risk

### High risk

- **112 specialty pages:** unique service name, price, and one-line description sit inside a heavily shared template (same inclusion list, parent process, decision tree, price/warranty language, and six FAQ patterns). They need specialty-specific problems, solutions, materials, process differences, and contextual links before being cloned to two more languages.
- **192 generic content pages:** many are data-generated with a short intro, repeated bullet structure, and generic FAQ templates. Audit intent before expansion/localization.
- **Location estate:** 1,036 area×service pages, 1,036 area near-me pages, and 1,456 suburb×service builds. The 1,036 area-overlap suburb copies are canonicalized correctly, but the remaining indexable location templates still need uniqueness and value checks. Do not create additional city-name replacement pages.

### Not thin, but heavy

- FAQ hubs are 3.4–3.6 MB raw HTML (238–250 KB gzip). They contain real, indexable Q&A rather than thin content. This is a performance/product decision, not a duplicate-content issue.

## 14. Priority Painting and Ceiling findings

### Painting

- Main EN/MS/ZH pages exist and have complete metadata, 4 localized FAQs, 4 specialties, and 4 problem pages.
- 3 topical blogs exist in all languages.
- All 4 specialty pages are EN-only; all 8 MS/ZH specialty URLs are missing.
- Interior/exterior/commercial each has a competing EN cluster page. Resolve intent before localizing both variants.
- Missing dedicated problem depth compared with the brief: wall stains/water marks, mould-related painted-wall issues, uneven finish, and old paint/repainting intent are not all cleanly represented as distinct, non-overlapping problem relationships.
- Main painting page does not link its specialty pages or blogs.

### Ceiling & Partition

- Main EN/MS/ZH pages exist and have complete metadata, 4 localized FAQs, 4 specialties, and 6 problem pages.
- One ceiling comparison blog exists in all languages.
- All 4 specialty pages are EN-only; all 8 MS/ZH specialty URLs are missing.
- Ceiling installation, ceiling repair, and gypsum partition each has a competing EN cluster page.
- Ceiling has overlap with the separate top-level Plaster Ceiling service. The future architecture must clarify parent/child intent rather than produce duplicate localized pages.
- Water-damaged ceiling content exists, but the problem/service/blog/FAQ path is not joined contextually.

## 15. Language-content quality observations

- All 28 main service records contain complete MS and ZH field sets; all 18 blogs have full localized copies. Dictionary parity is 1,072 keys × 3 languages with no missing/empty/malformed placeholders.
- This does not mean all copy has passed a native editorial review. Live examples show awkward duplication such as Chinese `房屋油漆服务服务` and WhatsApp text ending in `服务服务`, plus mixed-language labels (`Direct Answer · Jawapan Ringkas · 直接答案`) on single-language pages.
- Some Malay service terminology uses English loan forms such as `interior`/`eksterior` where more natural Malaysian BM may use `dalaman`/`luaran` depending on context.
- The Malay and Chinese service pages deliberately show both BM and Chinese sublines, which weakens single-language purity.
- Native-speaker editorial QA is mandatory before marking language content complete.

## 16. Missing-content summary

| Requirement | Existing | Missing / weak |
|---|---:|---:|
| Main service pages in 3 languages | 28/28 | 0 URL gaps; content/internal-link optimization remains. |
| Specialty pages in 3 languages | 112 EN | 224 localized URLs missing. |
| Dedicated service blogs | 14/28 services | 14 service topics missing. |
| Dedicated specialty blogs | 0/112 explicitly linked | 112 mappings/articles required, subject to intent consolidation. |
| Main-service FAQ sets | 28/28 | Quality review only. |
| Unique specialty FAQ sets | 0/112 verified | 112 authored sets required; current 672 answers are templates. |
| Problem pages in 3 languages | 77 EN | 154 localized URLs missing. |
| Native problem translations | 43/77 | 34 bodies missing. |
| Problem topics with 3–4 FAQs | 58/77 | 19 have only 2 FAQs. |
| Contextual main → specialty links | 0/28 parent pages | All main pages. |
| Contextual service ↔ blog links | 0/28 verified | All service pages/blogs. |
| Complete topical maps | 9/28 | 19 service maps missing; existing maps contain stale slugs. |

## 17. Quality-control results from this audit

| Check | Result |
|---|---|
| `npm ci` / dependency audit | ✅ 0 vulnerabilities |
| `npm run type-check` | ✅ Pass |
| `npm run audit:i18n` | ✅ 1,072 keys × 3; parity perfect |
| `npm run test:estimators` | ✅ 263,293 assertions, 0 failures |
| `npm run build` | ✅ 4,343 static/dynamic routes generated; production compile succeeds |
| `npm run audit:html` | ✅ 4,335 HTML pages; 0 fatal findings, 0 warnings |
| `npm run audit:meta` | 🟡 No missing metadata/schema; 16 short titles and 88 short descriptions for review |
| `npm run seo:audit` | ✅ Canonical/hreflang consistency pass |
| `npm run lint` | ❌ Existing baseline error: unused `t` in `components/ui/hero-search-bar.tsx:29` |

The project must not be marked complete while lint fails and the major multilingual/content gaps above remain.

## 18. Recommended implementation sequence (no pages generated in this audit session)

1. **Architecture/data model:** add explicit service taxonomy and relationships (`type`, parent specialty, problems, blogs, FAQs, related services, locale paths). Do not rely on fallback-to-Handyman behavior.
2. **Resolve competing intent:** decide canonical page for the 15 clusters and the problem-overlap groups. Preserve useful URLs; merge/redirect only with documented evidence.
3. **Fix internal linking foundation:** main → specialties, service ↔ blogs, specialty ↔ problems/blog/FAQs, localized FAQ → localized service, problem → specialty/blog/FAQ/location.
4. **Priority tranche:** Painting and Ceiling/Partition, including their 8 specialties and real MS/ZH routes.
5. **Problem localization:** begin with painting/ceiling problem pages after duplicate consolidation.
6. **Blog/FAQ authoring:** create genuinely useful coverage based on missing intent, not one spun article per keyword.
7. **Roll out remaining verified specialties:** shared dynamic routes and structured locale data; no manually duplicated components.
8. **Sitemap/hreflang/QC:** add only real, indexable, self-canonical localized URLs; rerun all corpus audits, lint, type-check, and production build.

## 19. Audit-phase status

**✅ Phase 1 complete: the existing website, routes, language URLs, services, specialties, blogs, FAQs, problem pages, sitemap, metadata, hreflang, internal links, duplicate risks, thin-content risks, and missing content have been documented.**

**⏳ Full project is not complete. No implementation page was created during this audit-first session.**
