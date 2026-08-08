# KL SERVIS RUMAH — SMART SERVICE FINDER
## Complete 3-Language Service Discovery & Implementation Master Plan

> **Last Updated**: 2026-08-08  
> **Primary Objective**: Transform KL Servis Rumah into a highly intelligent, trilingual **Smart Home Service Finder** (`https://klservisrumah.my`), where customers can type almost any realistic home-service problem into one search box in Malay (Bahasa Malaysia), English, or Chinese (Simplified Chinese / 简体中文) and receive instant, intent-matched service recommendations, transparent pricing, included work, materials, process steps, calculators, FAQs, and WhatsApp CTAs.

---

## 0. Critical Project Management & Architectural Guidelines

1. **Multi-Phase Execution**: Work step-by-step across clearly defined phases, recording all progress in `SMART_SERVICE_FINDER_PROJECT_PROGRESS.md`.
2. **Permanent Progress Tracking**: Use standard status tags (`[x]` Completed, `[~]` In Progress, `[ ]` Pending, `[!]` Blocked / Needs Business Decision).
3. **Session Continuity**: Every session starts by reading `SMART_SERVICE_FINDER_MASTER_PLAN.md` and `SMART_SERVICE_FINDER_PROJECT_PROGRESS.md`, checking Git status and implementation state, and continuing from the highest-priority pending task.
4. **Website Source of Truth**: All pricing, materials, warranties, and claims in search results MUST use verified website information from `config/services-data.ts`, `config/problem-data.ts`, and `config/tools-data.ts`. Never hallucinate business claims.

---

## 1. Core Architectural Pillars

### A. Trilingual Language Support (100% Customer-Facing Coverage)
All customer-facing content, UI, placeholders, search suggestions, result titles, descriptions, pricing labels, "What's Included" lists, materials, process steps, related services, calculators, FAQs, error states, and empty states MUST support:
1. **Malay (Bahasa Malaysia) — `ms`**
2. **English — `en`**
3. **Chinese (Simplified Chinese / 简体中文) — `zh`**

### B. Natural Language & Intent-Based Matching (No Basic Keyword Search)
The search engine MUST understand:
`Customer Problem → Intent → Service → Related Services → Solution → Price → Included Work → Materials → Process → Calculator → CTA`

- **Multi-Service Search**: E.g., *"Kitchen renovate, cabinet change, tiles and lights"* returns Kitchen Renovation, Kitchen Cabinet, Tiling, Electrical, and Lighting.
- **Problem & Synonym Matching**: Supports natural phrasing in Malay (e.g., *"cat rumah"*, *"bilik air bocor"*, *"paip tersumbat"*), English (*"bathroom wall leaking"*, *"house painting"*), and Chinese (*"厕所漏水"*, *"墙壁漏水"*).
- **Typo Tolerance & Fuzzy Search**: Handles common typos and colloquial variations without generating false positive matches.

### C. Progressive Disclosure UI & Search Result Experience
Each matching service card presents:
- **Service Name** (Localized)
- **Why This Matches Your Search** (Intent explanation badge)
- **Starting Price / Estimated Range** (Clear distinction between Estimated Price vs. Final Quotation)
- **What's Included & Materials Used**
- **How The Work Is Done (Process)**
- **Related Services** (Contextual suggestions)
- **Relevant Calculator / Estimator Link** (e.g., Painting Cost Calculator, Leak Triage)
- **Relevant FAQs** (Top questions for that service)
- **Conversion CTAs** ("Get a Quote" & WhatsApp direct message with pre-filled context)

---

## 2. Complete Existing Main Service Inventory (28 Services)

The Smart Service Finder covers all 28 existing core services defined in `config/services-data.ts`:

1. **Premium Painting Services (`painting`)** — House, condo, office, interior/exterior, skim coat prep.
2. **Professional Plumbing Solutions (`plumbing`)** — Leaks, blocked drains, pipe repairs, water pressure.
3. **Plaster Ceiling & Partitions (`ceiling`)** — Plaster ceiling repair, gypsum, L-box, cove lighting.
4. **Premium Waterproofing & Leak Control (`waterproofing`)** — PU grouting, bathroom, balcony, roof waterproofing.
5. **Expert Handyman Services (`handyman`)** — TV mounting, shelf drilling, furniture assembly, minor repairs.
6. **Complete House Renovation (`house-renovation`)** — Full/partial renovation, kitchen, bathroom, condo.
7. **Licensed Electrical Services (`electrical`)** — Wiring, rewiring, sockets, switches, DB box, troubleshooting.
8. **Water Heater Installation & Repair (`water-heater`)** — Instant & storage heater installation, pump repair.
9. **Ceiling Fan Installation & Replacement (`ceiling-fan`)** — DC/AC fan mounting, balancing, wiring.
10. **Lighting Design & Installation (`lighting`)** — LED downlights, track lights, chandeliers, outdoor lighting.
11. **Professional Tiling & Tile Repair (`tiling`)** — Floor/wall tiles, popping tile repair, regrouting.
12. **Plaster Ceiling Design & Build (`plaster-ceiling`)** — Decorative gypsum ceilings, partition walls.
13. **Wall & Ceiling Skim Coat (`skim-coat`)** — Smooth surface preparation, crack leveling.
14. **Vinyl, SPC & Laminate Flooring (`flooring`)** — SPC click flooring, vinyl skirting, laminate repairs.
15. **Epoxy & Polyurethane Flooring (`epoxy-flooring`)** — Garage, warehouse, commercial chemical-resistant floors.
16. **Roof Repair & Waterproofing (`roof-repair`)** — Roof leak repair, tile replacement, gutter sealing.
17. **Kitchen Cabinet & Countertop (`kitchen-cabinet`)** — Custom cabinets, quartz/granite countertops, repairs.
18. **Custom Carpentry & Joinery (`carpentry`)** — Wardrobes, TV cabinets, shoe racks, bespoke woodwork.
19. **Door Repair & Installation (`door`)** — Timber doors, sliding doors, hinges, locksets, alignments.
20. **Window Repair & Glass Replacement (`window-repair`)** — Aluminium casement/sliding windows, broken glass.
21. **Locksmith & Smart Lock Services (`locksmith`)** — Smart digital lock installation, emergency unlocking.
22. **Glass & Aluminium Fabrication (`glass-aluminium`)** — Shower screens, glass partitions, aluminium grilles.
23. **Residential & Office Cleaning (`cleaning`)** — Routine house/office cleaning, sanitization.
24. **Deep Cleaning & Move-In/Out (`deep-cleaning`)** — Intensive move-in/move-out cleaning, scrubbing.
25. **Post-Renovation Cleaning (`post-renovation-cleaning`)** — Chemical wash, dust and cement residue removal.
26. **CCTV & Security Camera Installation (`cctv`)** — HD/IP CCTV cameras, remote viewing setup, NVR/DVR.
27. **Auto Gate & Motorised Gate (`autogate`)** — Swing/folding/sliding autogate motors, board repair.
28. **Welding & Metal Fabrication (`welding`)** — Custom metal grilles, gates, awnings, structural welding.

---

## 3. Recommended Sub-Services & Problem Inventory Expansion

In addition to the 28 core services, the Smart Service Finder integrates:
- **77 Existing Customer Problem Diagnoses** from `config/problem-data.ts` and `config/problem-data-extra.ts` (e.g., *"ceiling-water-stains"*, *"popping-tiles"*, *"low-water-pressure"*, *"peeling-paint"*).
- **36 Interactive Estimators & Calculators** from `config/tools-data.ts` (e.g., Painting Cost Calculator, Leak Triage, Ceiling Repair Estimator).
- **Recommended Extension Services**:
  - `emergency-leak-triage`: *Emergency Leak Triaging & Non-Hacking Diagnostic* (RM 150, 30-Day Diagnostic Accuracy Guarantee)
  - `balcony-roof-membrane`: *Balcony & Flat Roof Membrane Waterproofing* (RM 600, 5-Year Water Seepage Guarantee)
  - `aircond-wiring-circuit`: *Air Conditioner DB Circuit & Wiring Installation* (RM 250, 1-Year Electrical Safety Warranty) — **Flagged `[!] Needs Business Decision`** (Verify specialist HVAC electrical contractor licensing for dedicated AC DB circuits)
  - `smart-home-automation`: *Smart Home IoT Automation & Switch Setup* (RM 180, 1-Year Installation Warranty) — **Flagged `[!] Needs Business Decision`** (Verify supplier SLA and hardware compatibility for IoT automation)

---

## 4. FINAL PROJECT REPORT (Section 26)

### A. Complete Service Inventory
- **28 Core Services**: All main services from `config/services-data.ts` are indexed with trilingual titles, taglines, starting prices, warranties, highlights, sub-services, materials, process steps, FAQs, and WhatsApp CTAs.
- **4 Extension/Recommended Services**: 2 verified within standard scope (`emergency-leak-triage`, `balcony-roof-membrane`) + 2 flagged for business confirmation (`aircond-wiring-circuit`, `smart-home-automation`).
- **77 Connected Problem Pages**: Each service is mapped to its associated customer problem diagnoses from `config/problem-data.ts` and `config/problem-data-extra.ts`.
- **36 Connected Interactive Tools**: Each service is mapped to its interactive cost calculators from `config/tools-data.ts`.
- **Related Services Network**: Powered by `getRelatedServices` from `config/topical-authority-map.ts` to ensure contextual internal linking and 0 orphan services.

### B. Search Intent Map
| Sample Customer Query (MS / EN / ZH) | Detected Intent / Problem | Matched Primary Service(s) | Score | Match Reason |
| :--- | :--- | :--- | :--- | :--- |
| `"cat rumah"` (MS) | Repainting house / interior / exterior | `painting` (Premium Painting Services) | 95% | `Padanan carian: "cat rumah"` |
| `"bilik air bocor"` (MS) | Bathroom leak / waterproofing / plumbing | `plumbing` & `waterproofing` | 95% | `Padanan carian: "paip bilik air bocor"` & `"bilik air bocor"` |
| `"paip tersumbat"` (MS) | Clogged drainage / blocked pipe | `plumbing` (Professional Plumbing Solutions) | 95% | `Padanan carian: "paip tersumbat"` |
| `"nak pasang water heater"` (MS) | Heater installation & wiring | `water-heater` (Water Heater Installation) | 95% | `Padanan carian: "nak pasang water heater"` |
| `"siling retak"` (MS) | Plaster ceiling cracking | `ceiling` (Plaster Ceiling & Partitions) | 95% | `Padanan carian: "siling retak"` |
| `"bathroom wall leaking"` (EN) | Concealed wall seepage / waterproofing | `waterproofing` & `plumbing` | 95% | `Matches your search: "bathroom wall leaking"` |
| `"house painting"` (EN) | Full residential repainting | `painting` (Premium Painting Services) | 95% | `Matches your search: "house painting"` |
| `"water heater installation"` (EN) | Shower heater mounting & electrical | `water-heater` (Water Heater Installation) | 95% | `Matches your search: "water heater installation"` |
| `"ceiling crack"` (EN) | Gypsum ceiling repair / water stains | `ceiling` (Plaster Ceiling & Partitions) | 95% | `Matches your search: "ceiling crack"` |
| `"office partition"` (EN) | Drywall / gypsum room divider | `ceiling` (Plaster Ceiling & Partitions) | 95% | `Matches your search: "office partition"` |
| `"broken window"` (EN) | Casement glass / window repair | `window-repair` (Window Repair & Glass Replacement) | 95% | `Matches your search: "broken window"` |
| `"kitchen renovation"` (EN) | Wet work / remodeling kitchen | `house-renovation` & `kitchen-cabinet` | 95% | `Matches your search: "kitchen renovation"` |
| `"Kitchen renovate, cabinet change, tiles and lights"` (EN - Multi-Service) | Multi-Service renovation, carpentry, tiling, electrical | `house-renovation`, `kitchen-cabinet`, `tiling`, `electrical` | 88%–85% | Multi-service intent detection |
| `"厕所漏水"` (ZH) | Bathroom waterproofing / leak stop | `waterproofing` (优质防水与漏水控制) | 95% | `精准匹配查询: "厕所漏水"` |
| `"我要油漆房子"` (ZH) | Whole house painting | `painting` (优质油漆服务) | 95% | `精准匹配查询: "油漆房子"` |
| `"安装热水器"` (ZH) | Instant/storage heater installation | `water-heater` (安装与维修热水器) | 95% | `精准匹配查询: "安装热水器"` |
| `"天花板裂了"` (ZH) | Ceiling crack / repair | `ceiling` (石膏天花板与隔间) | 95% | `精准匹配查询: "天花板裂了"` |
| `"办公室隔间"` (ZH) | Office partition / drywall | `ceiling` (石膏天花板与隔间) | 95% | `精准匹配查询: "办公室隔间"` |
| `"窗户玻璃破了"` (ZH) | Glass replacement / window repair | `window-repair` (窗户维修与玻璃更换) | 95% | `精准匹配查询: "窗户玻璃破了"` |
| `"厨房装修"` (ZH) | Kitchen makeover | `house-renovation` & `kitchen-cabinet` | 95% | `精准匹配查询: "厨房装修"` |

### C. Missing Services Report
1. **Specialist Aircond Wiring & DB Circuit Upgrades (`aircond-wiring-circuit`)**: Currently flagged `[!] Needs Business Decision` to confirm HVAC contractor registration. Highly recommended due to frequent customer queries about air conditioner power trips.
2. **Smart Home IoT Switch Automation (`smart-home-automation`)**: Currently flagged `[!] Needs Business Decision` to verify hardware warranty and supplier SLA. Highly recommended due to high demand for smart touch switches in KL condos.
3. **Solar Water Heater System Maintenance**: Currently not listed; recommended future expansion if specialist rooftop solar heating teams are available.
4. **Elevated Water Tank & Booster Pump Overhaul**: Currently handled under general plumbing; recommended as a standalone sub-service with dedicated pricing.

### D. Pricing Coverage
- **Starting From Prices**: All 28 core services and 4 extension services feature clear starting prices (e.g., `"Starting From RM 150"`).
- **Price Type Labelling**: Every card explicitly states its pricing model (`"Starting From"`, `"Fixed Price"`, `"Price Range"`, `"Calculator"`).
- **Estimation Disclaimer**: Every search result card prominently displays: *"Estimated Price — Final quotation confirmed after on-site or video inspection"* in English, Malay, or Chinese.
- **Calculator Connection**: 36 interactive cost calculators are linked directly to matching service cards, allowing customers to generate instant customized estimates.
- **Missing Pricing**: Zero missing prices. All 32 indexed services have published starting prices and package structures.

### E. Language Coverage
- **Malay (Bahasa Malaysia — `ms`)**: 100% customer-facing coverage. All search UI labels, buttons, placeholders, suggestion chips, empty states, error messages, reasons, and business decision flags are localized in natural Malaysian Malay.
- **English (`en`)**: 100% customer-facing coverage.
- **Chinese (Simplified Chinese / 简体中文 — `zh`)**: 100% customer-facing coverage. All Chinese terms are segmented and matched accurately without literal machine translation.
- **Missing Translations**: None. All 32 service entities have complete `en`, `ms`, and `zh` translation dictionaries.

### F. Implementation Report
- **Completed (`[x]`)**:
  - Full codebase audit & taxonomy construction (`lib/smart-finder-index.ts`).
  - High-performance trilingual search engine with typo tolerance, intent matching, and multi-service detection (`lib/smart-finder-search.tsx`).
  - Interactive progressive-disclosure search component (`components/ui/smart-service-finder.tsx`).
  - Navbar modal launcher with `⌘K` keyboard shortcut and touch-friendly mobile icon (`components/ui/smart-finder-modal.tsx`).
  - Homepage (`/`) integration right below the Hero section.
  - Services Directory (`/services`) integration above the grid.
  - Dedicated search page (`/search`) upgrade.
  - Production verification (`npm run lint`, `npm run type-check`, `npm run build` — 4,341 static pages compiled successfully).
- **Completed (`[x]`)**:
  - Full conversion analytics tracking via GA4 events (`smart_finder_search`, `smart_finder_card_expand`, `smart_finder_calculator_click`, `smart_finder_quote_click`, `smart_finder_no_results`, `smart_finder_popular_tag`, `smart_finder_related_click`) with GTM/GA4 dual-push, debounced search tracking, source attribution, and WhatsApp lead-source indicator.
- **Pending (`[ ]`)**:
  - Monitor live GA4 events once `NEXT_PUBLIC_GA_ID` environment variable is configured.
- **Blocked / Needs Business Decision (`[!]`)**:
  - Business confirmation required for `aircond-wiring-circuit` (HVAC licensing check) and `smart-home-automation` (supplier SLA check).
- **Recommended Future Work**:
  - Integrate an AI-powered natural language chat widget (using our LLM context files in `public/llms-full.txt`) for interactive conversational diagnostics.
  - Expand standalone estimator wizards for any new specialist services approved by management.
