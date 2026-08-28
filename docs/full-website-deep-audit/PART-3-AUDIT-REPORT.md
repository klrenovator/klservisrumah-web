# PART 3 — AEO + GEO + LLMO + AIO / AI SEARCH AUDIT

**Audit date:** 2026-08-28
**Website:** https://klservisrumah.my (canonical host: https://www.klservisrumah.my)
**Framework:** Next.js 15 (App Router) hybrid SSG static export, Vercel CDN
**Scope of this report:** **Part 3 only** (AEO, Featured Snippet / Direct Answer, GEO, LLMO, AI citation potential, AI-readable content, AI entity consistency, AI FAQ strategy). Technical/crawl/indexation findings are in `PART-1-AUDIT-REPORT.md` (PR #170); on-page/content/semantic/entity findings in `PART-2-AUDIT-REPORT.md` (PR #171); SXO/Local/Linking/CRO/Trust and Schema/Content-Gap/Roadmap are Parts 4–5. Cumulative Final Output A–N is consolidated in Part 5.

---

## EVIDENCE BASIS & METHODOLOGY

This report is **corpus-wide, not sampled.** A purpose-built analyzer (`scripts/part3-aeo-audit.ts`) was run against the production build's 5,815 rendered HTML pages (`.next/server/app`; build verified green: prebuild 320,331 assertions / 0 failures, 5,823 pages generated). It measures, per page:

| Signal | What it answers |
|---|---|
| Question-headed H2/H3s + question families (how-much / how-long / which-better / what-causes / when / can / is) | AEO structure (§3.1) |
| `quick-answer` (DirectAnswer) block presence | AI-citable answer cards (§3.2) |
| FAQPage / HowTo / Speakable JSON-LD + FAQ question counts | Structured answers & voice/AEO (§3.1/§3.8) |
| Trilingual-leak counters inside the DirectAnswer BM/中文 sub-blocks | AI-readable multilingual content (§3.6) |
| NAP (phone/email/address) in content vs whole page | Entity consistency (§3.7) |
| Vague-marketing term scan | LLMO (vague-claim detection, §3.4) |
| Content depth + first-180-chars (what a text extractor reads first) | AI retrieval (§3.6) |

Outputs: `docs/audit-part3-corpus.jsonl` (5,815 records), `docs/audit-part3-aggregate.json` (per-pattern aggregates + leak rollups). **Everything below is derived from the repo build and cross-checked on the LIVE host via fetch (www.klservisrumah.my, 2026-08-28).** Anything requiring Search Console, Google Business Profile, review sources or owner confirmation is labelled **REQUIRES VERIFICATION**.

**Headline: the site has genuinely strong AEO bones — 29 service pages carry an explicit AI-citable "Direct Answer" block, question-headed H2/H3 structure on 3,481/4,633 EN pages (75%), FAQPage JSON-LD on 4,323 EN pages, and live llms.txt/llms-full.txt/aeo-faq.txt/site-summary.json generated from the same config as the pages. The problem is consistency and completeness at the edges: the AI-citable trilingual blocks embed untranslated English inside Malay/Chinese sentences on all 29 service pages; the homepage's own FAQ schema and visible FAQ contradict llms.txt/aeo-faq.txt and the service pages on a headline price (RM 180 vs RM 220) and on warranty summaries; unit-less per-sq-ft rates ("from RM 14 / RM 10 / RM 5") are quoted as whole-job prices by the AI surfaces; and the FAQ hub — the site's flagship AEO page — has no FAQPage schema, no question headings, and its accordion answers are absent from static HTML (JS-only).**

---

## A. EXECUTIVE SUMMARY (Part 3 disciplines)

| Discipline (Part 3 scope) | Score /100 | One-line reason |
|---|---|---|
| **AEO — Answer Engine Optimization** | **72** | Question-headed H2/H3s on 75% of EN pages, DirectAnswer cards + FAQPage on every service page; docked for zero question headings on 3,654 programmatic local pages, no FAQPage schema on the /faq hub or blogs, and the /faq hub accordion answers missing from static HTML |
| **Featured Snippet / Direct Answer** | **70** | Paragraph-style DirectAnswer blocks + FAQPage + tables are snippet-friendly; docked for unit-less prices ("from RM 14") inside the answer cards, trilingual English leaks, and cost pages (459 words) that never literally answer "how much does X cost in KL?" |
| **GEO — Generative Engine Optimization** | **62** | Who/what/where/how-to-contact is explicit and consistent in llms.txt + JSON-LD + footer NAP; docked for 3 contradictory price/warranty/stat sets across surfaces, unverifiable claims (reviews, "1,200+ projects", "30–60 min", "written by local tradesmen"), and 205 EN-only generic pods/guides/top pages that LLMs summarize as one template |
| **LLMO — LLM Optimization** | **58** | Factually explicit service copy, price anchors and honest "On Quote" handling; docked for stale/numerically-contradictory facts (RM 180 vs 220, lowPrice "80", "28+" vs 29, "Up to 90-Day Warranty" pill vs 12-Month/5-Year/10-Year warranties on the same page) and vague superlatives on 100% of service pages |
| **AI Citation Potential** | **66** | Service pages 80–85/100, tools 85/100, problems 72/100 — genuinely citable; homepage docked to 68 (stale facts in its own schema), pods ~35–40, area×service ~30 (see §3.5 for per-template scores) |
| **AI-Readable Content** | **52** | Body copy is present in static HTML for service/problem/tool/blog pages; docked for the P2-C1 static-shell/content-after-footer ordering, homepage+FAQ-hub accordion answers absent from raw HTML (JS-only), hidden "No matches in this topic." empty-state text polluting /faq extraction, and MS/ZH pod pages that would fall back to English in raw HTML if they existed as routes (they don't — see P3-12) |
| **AI Entity Consistency** | **55** | Single-config generation of llms/aeo-faq/site-summary is a genuine strength (no drift between files); docked for page-copy vs file contradictions (RM 180 vs 220; 28+ vs 29; three warranty summaries on one homepage; lowPrice 80; 120+ reviews vs 120 in schema; "30 min avg response" vs "30–60 minute" vs "60 seconds") |
| **AI FAQ Strategy** | **68** | 4,323 FAQPage schemas, real intent-based FAQs per service/problem/area, honest pricing answers; docked for /faq hub having zero schema, blog posts having no FAQPage, 66% of blog posts lacking question H2s, and 3-question generic FAQ on 3,654 programmatic pages |

**Overall Part 3 weight of evidence:** the site is *ahead of the market* on AI-surface plumbing (llms.txt ecosystem, DirectAnswer cards, FAQPage density, robots policy that admits every major LLM crawler). Its AI-search ceiling is capped by **fact-level inconsistencies** (the same price/warranty/count stated 2–4 different ways across surfaces the LLMs read together) and **multilingual execution defects** (English fragments inside the BM/中文 answer blocks). Neither is hard to fix; both are exactly what a summarization engine surfaces as an error.

---

## THE KEY NUMBERS (corpus-wide, VERIFIED)

| Metric | Value |
|---|---|
| Rendered pages analyzed | **5,815** (EN 4,633 / MS 591 / ZH 591) |
| EN pages with ≥1 question-headed H2/H3 | **3,481 / 4,633 (75%)** |
| EN pages with the DirectAnswer "quick-answer" block | **294** (29/29 service hubs, 91% of 243 sub-services, 100% of 43 tools) |
| Service pages whose trilingual answer block leaks English into 中文 | **29 / 29** |
| Service pages whose trilingual answer block leaks English into BM | **28 / 29** |
| EN pages with FAQPage JSON-LD | **4,323** (service hubs/sub-services/cost/emergency/problems/areas/suburbs/pods/tools/homepage/pricing) |
| FAQ questions inside FAQPage JSON-LD (mean) | service hub **4.4** · sub-service **5.5** · problem **3.3** · area×service **3.0** · pod **4** |
| Blog posts with FAQPage schema / question H2s | **0 / 216** · **74 / 216 (34%)** |
| /faq hub: FAQPage schema / question H2s | **0** / **0** (1,137+ answers, no schema, no question headings) |
| Pages with NAP in the content block (vs footer-only) | **2 / 5,815** (contact, privacy — footer NAP is 100%) |
| HowTo JSON-LD (EN) | 174 (sub-service pages) |
| SpeakableSpecification (EN) | 230 (service hubs, problems, areas hubs, tools, answers, about, contact, faq, pricing, homepage — **0** on sub-services, blogs, cost, emergency, area×service) |
| Pages rendering "Up to 90-Day Warranty" generic pill | **251** (all service hub + sub-service pages, incl. pages whose own warranty is 12-Month / 5-Year / 10-Year) |
| Pages with "30–60 minute" response claims | **148** |
| Pages with "1,200+" completed-projects claim | **35** (about, homepage, blog) |
| Pages with "120+" review claim (vs schema count 120) | **381** |
| Hidden "No matches in this topic." strings in /faq static HTML | **13** (CSS-hidden empty-state text readable by text extractors) |
| Homepage JSON-LD contradictions | `lowPrice: "80"` (no RM 80 anywhere in the 29-service catalog), FAQ "plaster ceiling repair from RM 180" (published RM 220), "28+ services" (published 29) |

---

## 3.1 AEO — ANSWER ENGINE OPTIMIZATION

### What is right (VERIFIED)
- **DirectAnswer cards on every service hub** (`components/content/direct-answer.tsx`): `<section class="quick-answer">` with the question as an H2 ("Is {Service} the right service for you?"), a 2–3 sentence answer, trilingual BM/中文 sub-note and 4–5 trust pills. Live-confirmed on `/services/tiling` and all 29 hubs.
- **Question-first H2s on service pages**: 100% of service hubs and 91% of sub-services carry question H2s; problems 100% (74 pages); tools 100%; pods 100%.
- **FAQPage JSON-LD density**: 4,323 EN pages; questions are genuine intent questions (verified samples: "How long does it take to paint a standard 3-bedroom apartment?", "What is your emergency response time for a burst water pipe?", "Is there a warranty on your handyman services in Kuala Lumpur?").
- **Problem pages** are structured exactly the AEO way: H2 question ("Why is my ceiling leaking?") → causes → DIY check → fix → cost → FAQ (whenShould family = 74 heading matches on 74 pages).
- Service-page FAQs render in `<details><summary>` — **answers are present in static HTML** (verified on `/services/tiling.html`: "We use a 10mm to 12mm square-notch trowel…").

### Findings

**P3-01 — CRITICAL: the trilingual "AI-citable" DirectAnswer blocks embed untranslated English fragments inside Malay and Chinese sentences on all 29 service pages.**
- **Problem:** The DirectAnswer sub-note (rendered on every EN service page, explicitly built to be picked up by ChatGPT/Perplexity/Gemini/AI Overviews) contains BM and 中文 sentences with English service taglines, units and warranties injected mid-sentence.
- **Evidence (VERIFIED — build + live):** `/services/tiling` live and `.next/server/app/services/tiling.html`:
  - 中文: `Professional Tiling & Tile Repair 适合需要floor and wall tiling for new builds, renovations, and repairs. homogeneous, porcelain, ceramic, mosaic, and large-format slabs. from rm 14 / sq ft.的客户。…以及12-month tile adhesion & grout warranty。`
  - BM: `Professional Tiling & Tile Repair disyorkan apabila anda memerlukan floor and wall tiling for new builds… from rm 14 / sq ft. Pakej kami bermula dari RM 14 … dan 12-month tile adhesion & grout warranty.`
  - Corpus-wide: **29/29 service pages leak English into the 中文 block, 28/29 into the BM block** (`docs/audit-part3-aggregate.json` → `trilingualLeaks`).
- **Root cause (VERIFIED):** `components/sections/service-detail-content.tsx:108-110` interpolates EN `service.tagline` and `service.warranty` into `trilingualMs`/`trilingualZh`. Localized equivalents exist (the MS/ZH service pages render clean localized taglines — verified `/ms/services/tiling.html`).
- **Affected:** 29 EN service hub pages (incl. awning-installation); sub-service pages do not render the trilingual sub-note.
- **Severity: HIGH. Why it matters:** This is the exact block AI engines quote. A BM/ZH-language AI query ("berapa kos pasang jubin di KL?") that cites this page will quote a garbled mixed-language sentence; summarization engines routinely drop or misparse mixed-language fragments. It also looks broken to any BM/ZH reader of the EN page.
- **Recommended fix:** Use the localized tagline/warranty (via the same per-locale service data the MS/ZH pages use) in `trilingualMs`/`trilingualZh`; add a validator to `prebuild` that fails if ASCII words appear inside the BM/中文 segments (the `part3-aeo-audit.ts` leak counters can be reused as the test).
- **Priority: P0.**

**P3-02 — HIGH: the /faq hub — the site's flagship AEO page — has no FAQPage schema, no question headings, and its top accordion's answers are absent from static HTML.**
- **Problem:** `/faq` (title "FAQ — Every Home Service Question Answered", 1,137+ answers, meta description advertising the count) is invisible to schema-based and heading-based AEO extraction.
- **Evidence (VERIFIED):** corpus: `/faq` faqSchema=0%, question H2/H3=0. Build: `.next/server/app/faq.html` — zero `"FAQPage"` JSON-LD; `components/sections/faq-accordion.tsx` renders `{isOpen && <div>…{faq.a}</div>}` — answers only exist after client-side click, so the static HTML (and any non-JS AI crawler) contains the 5 questions with **no answers**; the /faq directory below *does* render answers inside `<details>` (verified: "We primarily recommend Nippon Paint…" present). 13 copies of the CSS-hidden empty-state string "No matches in this topic." are also present in the raw text (filter placeholder, hidden via `className="hidden"`, but readable to text extractors).
- **Affected:** `/faq`, `/ms/soalan-lazim`, `/zh/chang-jian-wen-ti` (same component).
- **Severity: HIGH (for AEO). Why:** the FAQ hub is the page an AI engine would cite for "KL Servis Rumah warranty/pricing questions"; it offers no structured answers and its visible answer text is JS-gated.
- **Fix:** (1) render accordion panels server-side (open-first or use `<details>` like the directory), (2) emit FAQPage JSON-LD for the hub's headline Q&As, (3) remove `data-faq-empty` nodes from SSR or give them `hidden` attribute (not just a CSS class), (4) wrap directory questions in H3s.
- **Priority: P1.**

**P3-03 — MEDIUM: zero question headings on the 3,654 programmatic local pages.**
- **Problem:** All `/areas/<a>/<svc>` (1,073), `/areas/<a>/<svc>/near-me` (1,073) and `/suburbs/<s>/<svc>` (1,508) pages have **0 question-formatted H2/H3s**; their only question content is 3 generic FAQPage questions each.
- **Evidence (VERIFIED):** aggregate `pctQuestionH2=0%` for all three patterns; `faqQuestionMean=3.0`.
- **Affected:** 3,654 indexable EN URLs.
- **Severity: MEDIUM. Why:** These pages carry the local "how much / how long / do you cover" queries — the highest-AEO-value local intents — and answer none of them in heading or answer-card form; they also share the 3-question skeleton verbatim (compounds P2-11).
- **Fix:** Part 1's P0 restructure decides which of these survive; for the kept set, add 2–3 genuinely local question H2s (e.g. "How much does {service} cost in {area}?", "How long until a {service} team can arrive in {area}?") with short answers, or noindex the set (preferred given P2-C4).
- **Priority: P1 (after Part 1 P0 index restructure).**

**P3-04 — MEDIUM: cost pages never literally answer "How much does {service} cost in KL & Selangor?".**
- **Problem:** 29 `/services/<svc>/cost` pages (mean 459 words, P2-18) contain the FAQ question "What affects {Service} cost?" but no question-H2 literally asking/answering the headline "how much" query, and no DirectAnswer card.
- **Evidence (VERIFIED):** sample H2s on `/services/painting/cost`: "What affects House Painting Services cost?", "Need an exact House Painting Services quote?"; qa=0% for the pattern.
- **Severity: MEDIUM. Why:** "how much does X cost in KL" is the single highest-intent query for this business and the exact query AI Overviews answer; the dedicated cost pages don't answer it in the extractable, citable format.
- **Fix:** Add a DirectAnswer block to cost pages: `How much does {service} cost in KL & Selangor?` → 2–3 sentence answer citing the published starting price (with units) + link to the estimator. Expand pages per P2-18.
- **Priority: P1.**

---

## 3.2 FEATURED SNIPPET / DIRECT ANSWER OPTIMIZATION

### What is right
- Paragraph-snippet structure: DirectAnswer blocks are self-contained (question → answer → trust pills), 40–60 words, above the fold after the estimator.
- Table content on service pages (sub-service price list) and pricing guide is snippet-friendly.
- Definition-style answers exist on problem pages ("Peeling paint is…", cause lists).

### Findings

**P3-05 — HIGH: unit-less per-sq-ft prices inside the AI-citable answer cards, smart-finder dropdown and llms.txt ("from RM 14 / RM 10 / RM 5 / RM 22 / RM 14").**
- **Problem:** For the five per-sq-ft services (tiling RM 14, plaster-ceiling RM 10, skim-coat RM 5, flooring RM 14, epoxy RM 22) the AI surfaces strip the unit:
  - DirectAnswer (live `/services/tiling`): *"Our Professional Tiling & Tile Repair packages start from RM 14"* (the same page's price list says "From RM 14 / sq ft").
  - Smart-finder dropdown (live homepage): "Professional Tiling & Tile Repair (From RM 14)", "Wall & Ceiling Skim Coat (From RM 5)".
  - `public/llms.txt` Key Services: "Professional Tiling & Tile Repair: from RM 14", "Plaster Ceiling Design & Build: from RM 10", and the estimators section repeats "(from RM 14)", "(from RM 5)".
  - Homepage `Service` schema `offers.lowPrice: "80"` — no published RM 80 price exists anywhere (lowest whole-job floor is RM 120 lighting / RM 129 aircon).
- **Root cause (VERIFIED):** `config/services-data.ts` stores `startPrice: "RM 14"` (no unit); `service-detail-content.tsx` interpolates it into the answer text; `generate-ai-context.ts` emits it into llms.txt; `app/(en)/page.tsx:100` hardcodes `lowPrice: "80"`.
- **Affected:** 5 service hubs + 5 llms.txt lines + 43 tools index + homepage schema; quoted to every LLM that answers "how much does tiling cost in KL?".
- **Severity: HIGH. Why it matters:** this is the exact class of under-quote harm the generator's own header comment says was fixed sitewide for stale prices (plumbing RM 120→RM 280 etc.) — but the unit-less rates still tell an AI "tiling from RM 14" for a whole job. AI assistants will quote RM 5–RM 22 as the price of a job.
- **Fix:** add a unit to the per-sq-ft services' `startPrice` presentation ("From RM 14 / sq ft") in the DirectAnswer template, smart-finder options, llms.txt generator and OfferCatalog; set `lowPrice` from the true minimum (or drop AggregateOffer if no sensible whole-job floor exists). Add a `prebuild` assertion that every numeric price has a unit or is a whole-job price.
- **Priority: P0.**

**P3-06 — MEDIUM: blog posts have no FAQPage schema and two-thirds have no question H2s.**
- **Problem:** Blogs are the second-largest AEO inventory (216 topics / 648 localized articles) but: 0/216 have FAQPage JSON-LD; only 74/216 (34%) have a question-headed H2 (question content sits at H3 level, qH3=100%).
- **Evidence (VERIFIED):** corpus faqSchema=0%, pctQuestionH2=34%, pctQuestionH3=100% for `/blog/<slug>`; blog H3 samples are genuine questions ("Can the work be limited to one area?", "How long before the area can be used?").
- **Severity: MEDIUM. Why:** AI engines prefer H2 question→answer pairs and FAQPage markup for answer extraction; blogs currently contribute citation value mainly via H3 text.
- **Fix:** promote the top FAQ block per article to a question H2 + FAQPage JSON-LD (BlogPosting + FAQPage can coexist), keep H3s for sub-answers. Also see P2-C5 (stale dates) and Part 5 (schema).
- **Priority: P2.**

---

## 3.3 GEO — GENERATIVE ENGINE OPTIMIZATION

### What is right
- **Who/what/where is explicit:** brand, legal name, SSM number, NAP, service catalog, coverage areas and hours appear in JSON-LD (Organization/LocalBusiness on every page), footer, about, contact, llms.txt, llms-full.txt, aeo-faq.txt, site-summary.json.
- **Contact paths are consistent:** WhatsApp/phone/email identical across llms.txt, aeo-faq.txt, site-summary.json, footer, JSON-LD (generator-verified: "29 prices, 29 warranties, 5 profile links and all counts match the published data").
- **What makes it different is stated honestly:** fixed itemised quote before work, published starting prices, per-service written warranties, trilingual service — all verifiable on-page.

### Findings

**P3-07 — HIGH: the same facts are stated 2–4 different ways across the surfaces an LLM reads together (price, warranty, count).**
- **Problem:** a generative engine that reads the homepage + llms.txt + a service page finds contradictory numbers for the same facts.
- **Evidence (VERIFIED — build + live):**
  - **Ceiling price:** homepage FAQPage schema + visible homepage FAQ: *"plaster ceiling repair from RM 180"* (raw JSON-LD in `.next/server/app/index.html`); `public/aeo-faq.txt` and `llms-full.txt`: RM 220; service page `/services/ceiling`: "From RM 220"; sub-service "Water-Damaged Ceiling Repair": "From RM 220"; MS homepage FAQ: RM 180 too. (RM 180 matches nothing in the current catalog.)
  - **Service count:** homepage FAQ + smart-finder: *"28+ services"*; StatsCounter + llms-full.txt: 29; schema `offerCount: 29`. (`components/ui/smart-service-finder.tsx:58` and `app/(en)/page.tsx:44` hardcode "28+"; the code comment at page.tsx:189 shows a previous "13+ vs 28+" mismatch was fixed the same way — the count has now drifted again after the 29th service was added.)
  - **Warranty summary:** TrustBar: *"30-day to 10-year warranties"* (252 pages); homepage FAQ schema: "30 days… 60–90 days… up to 12 months… up to 5 years"; FAQAccordion: "up to 90 days… up to 5-year… 30-day"; service pages: generic pill **"Up to 90-Day Warranty"** (251 pages) rendered next to the service-specific warranty (e.g. tiling "12-Month Tile Adhesion & Grout Warranty", plaster-ceiling "10-Year Sag-Free & Crack-Free Warranty", aircon "1-Month Workmanship (3-Month Parts)") — same-page contradiction on every one of the 251 pages.
  - **Reviews:** 381 pages render "4.9/5 (120+ reviews)" while schema `reviewCount: 120`; hero says "120+ Google Reviews"; `/about` says "1,200+ completed projects" and "15+ Pros" while schema `numberOfEmployees: 10`.
  - **Response time:** homepage stats "30 min Avg response time"; homepage FAQ "30–60 minute average arrival time" (emergency); /faq hub "average arrival time is 30 to 60 minutes"; area pages "typically 30–60 minutes"; hero "Get Your Quote in 60 Seconds"; "Instant dispatch". Four different promises, none verified.
- **Affected:** homepage, 251 service/sub-service pages, /faq, /about, llms ecosystem.
- **Severity: HIGH. Why:** entity confidence drops when a brand's own surfaces disagree; an LLM answering "what does KL Servis Rumah charge for ceiling repair?" must pick between RM 180, RM 220 and RM 10 — it often picks the outlier (or refuses). Contradictions are also quotable liability.
- **Fix:** single-source the *copy* (not just files): build FAQAccordion + homepage FAQ schema + smart-finder count from `servicesData` (dynamic count, per-service startPrice interpolation); replace the "Up to 90-Day Warranty" pill with the service's own warranty string; reconcile warranty summary wording to "30 days to 10 years per service"; audit "1,200+", "120+", "30–60 min", "15+ Pros" against real data (owner) and align schema.
- **Priority: P0 (price/count/warranty-pill), P1 (review/stat verification).**

**P3-08 — MEDIUM: 205 EN-only generic content pods/guides/top pages (174 "content pod" pages per the P2-C3 definition — commercial/residential/process/answers/compare/brands/seasonal — plus 21 guides and 10 top pages) give AI engines a doorway-page summary.**
- **Problem:** GEO requires pages that each state a distinct, retrievable fact-set. The 174 pods share one parametric body (P2-C3: process↔answers 89% sentence overlap; commercial copy talks about "homes"), so any LLM that reads several of them sees one template with the service name swapped.
- **Evidence (VERIFIED):** P2-C3 corpus analysis; live `/commercial/aircon-services-kl` body = the generic "Malaysian homes face tropical humidity…" guidance block on a commercial page.
- **Affected:** 205 indexable EN URLs (174 pods + 21 guides + 10 top, + 8 index pages).
- **Severity: MEDIUM–HIGH. Why:** AI engines de-duplicate near-identical sources; only the first pod of each template family gets cited, and the family as a whole signals doorway-page patterns.
- **Fix:** Part 2 P0 (P2-C3) already prescribes: author each pod for its actual intent or collapse to the service page. For GEO specifically: if kept, each pod needs 2–3 unique, verifiable facts (e.g. commercial: after-hours work, strata access rules, office/retail scope; answers: a literal answer paragraph). If collapsed: 301.
- **Priority: P0 (tracked as P2-C3).**

---

## 3.4 LLMO — LARGE LANGUAGE MODEL OPTIMIZATION

### What is right
- Service bodies are semantically explicit ("KL Servis Rumah provides… across Kuala Lumpur and Selangor", "From RM X", "warranty: …") — the BAD/BETTER example from the Part 3 prompt is already followed on the main templates.
- Quote-only services (awning) honestly say "project-quoted" instead of emitting a fake number (generator + DirectAnswer).
- No keyword-stuffing; language parity enforced by the 320k-assertion i18n gate.

### Findings

**P3-09 — MEDIUM: vague-marketing vocabulary on 100% of service pages, blogs, homepage and area hubs.**
- **Problem:** corpus `pctVague=100%` for `/services/<svc>`, `/blog/<slug>`, `/areas/<area>`, `/compare/<slug>`, `/`; 94% of sub-services. Terms flagged: "premium", "trusted", "expert", "reliable", "best", "top-quality", "guaranteed satisfaction".
- **Specific unverifiable/overreach examples (VERIFIED):** homepage AEO hub: *"Every page is written by local tradesmen and updated for 2026."* (no named authors anywhere — P2-C6; "written by tradesmen" is not verifiable); /about H3 *"Premium Engineering Materials"*; legacy blog (P2-24): "PU Grouting is typically 60% cheaper than traditional re-waterproofing", "No deposit required - pay after the leak is verified sealed".
- **Affected:** sitewide copy.
- **Severity: MEDIUM. Why (LLMO):** summarization engines strip adjectives and keep numbers; every unverifiable superlative or % claim that survives into an AI answer becomes a credibility and compliance risk for the business ("KL Servis Rumah claims its grouting is 60% cheaper").
- **Fix:** replace superlatives with verifiable specifics (brands used, published rates, warranty terms); re-verify or remove the legacy-blog numeric claims; attribute authorship honestly (see P2-22) or drop the "written by tradesmen" line.
- **Priority: P1.**

**P3-10 — LOW–MEDIUM: NAP lives only in the footer and header; the content block of 5,813/5,815 pages has no contact line.**
- **Evidence (VERIFIED):** corpus `pctNap` (content block) = 0% for every pattern except /contact and /privacy; `napWholePage` = 100% everywhere (footer). A text extractor that isolates the main content region (common for AI chunking) gets no phone/email/address.
- **Fix:** add a one-line contact strip ("WhatsApp +60 11-1662 7349 · info@klservisrumah.my") to the end of service/problem bodies — also a CRO win.
- **Priority: P2.**

---

## 3.5 AI CITATION POTENTIAL (per major template)

Scoring: 100 = a text-extraction crawler (no JS) can find a self-contained, factually consistent answer with NAP and schema; penalised for JS-gated text, contradictions, thinness, unit-less prices, template duplication.

| Page type | Score /100 | Why |
|---|---:|---|
| **/tools/<slug>** (43) | **85** | Self-contained interactive estimators + 5.1 FAQPage questions + quick-answer + Speakable; prices unit-true; the strongest AI surface. Docked: estimator values are client-rendered (JS-gated), so non-JS crawlers see only the intro + FAQs. |
| **/services/<svc>** (29) | **82** | DirectAnswer card + 4.4 FAQPage Qs + HowTo (subs) + Speakable + deep body (2,305 words) + NAP in footer. Docked: trilingual English leak (P3-01), unit-less "from RM 14"-type prices (P3-05), generic 90-Day pill contradiction (P3-07), static-shell ordering (P2-C1). |
| **/problems/<p>** (74) | **72** | Perfect question H2 skeleton + when-should coverage + 3.3 FAQPage Qs + Speakable. Docked: thin bodies (mean 280 words, P2-16), no quick-answer card, no HowTo. |
| **/services/<svc>/<sub>** (243) | **70** | 5.5 FAQPage Qs + 91% quick-answer + HowTo 174. Docked: no Speakable, no NAP in content, generic pill contradiction. |
| **/services/<svc>/cost** (29) | **55** | FAQPage 4 Qs + question H2s. Docked: 459-word bodies, no literal "how much" answer (P3-04), unit-less rates, no Speakable. |
| **/blog/<slug>** (216) | **60** | Question H3s + deep articles (1,096 words) + internal links. Docked: no FAQPage, only 34% question H2s, 5-date registry (P2-C5), no authors (P2-C6), EN-only BlogPosting schema. |
| **/faq hub** | **45** | Directory answers ARE in static HTML (details). Docked: no FAQPage schema, no question headings, top accordion answers JS-only, 13 hidden "No matches" strings, directory-only depth. |
| **Homepage /** | **68** | FAQPage 6 Qs + Speakable + OfferCatalog + rich entity schema + NAP. Docked: stale facts inside its own schema (RM 180, lowPrice 80, "28+"), accordion answers JS-only, hero/smart-finder unit-less prices. |
| **/areas/<area>** (37) | **58** | 1,850 words + 3 FAQ Qs + Speakable + geo schema. Docked: 0 question H2s, fixed H1 formula (P2-13), homepage-lede H2 (P2-12). |
| **/areas/<area>/<svc> + near-me + suburbs** (3,654) | **30** | Same parametric body per service (P2-C4), 0 question H2s, 3 generic FAQ Qs each, 34% sentence overlap near-me (P2-26/Part 1). AI engines will cite at most one per service. |
| **Pods (commercial/residential/process/answers/brands/top/seasonal/guides)** (174) | **35** | One generic body per template (P2-C3), EN-only routes, "Ultimate Guide" over-promise; only their FAQ blocks are citable. |
| **/about** | **40** | 327 words, no question content, unverifiable stats ("1,200+", "15+ Pros"), no author bios. |
| **/pricing** | **75** | Full sub-service OfferCatalog + 4 FAQPage Qs + Speakable + 3,347 words; the single best "how much" citation target. Docked: unit-less entries in the catalog list (RM 14/10/5 items appear without /sq ft in llms.txt but with units on-page — keep the on-page version). |

**Highest-impact citation targets for AI engines: /pricing, /services/<svc>, /tools/*, /problems/* — these four families already answer the money queries; fixing P3-01/P3-05/P3-07 raises their citation quality more than any new content.**

---

## 3.6 AI-READABLE CONTENT

### Verified status per content type (raw HTML, no JS)

| Content | In static HTML? | Evidence |
|---|---|---|
| Service/sub-service/problem/tool/blog bodies | ✅ | post-footer content divs; `<details>` FAQs |
| Service-page FAQ answers | ✅ | `<details>` with answers in `.next/server/app/services/tiling.html` |
| Homepage FAQ accordion answers | ❌ **JS-only** | `{isOpen && …}` in `faq-accordion.tsx`; answers absent from `index.html` |
| /faq hub top accordion answers | ❌ **JS-only** | same component |
| /faq hub directory answers | ✅ | `<details>` verified |
| H1/content placement inside `<main>` | ❌ | P2-C1: `<main>` = "Loading…"; content after `</footer>` on 5,814/5,815 pages |
| MS/ZH generic pod routes | n/a | routes don't exist (P3-12 below) |
| Estimator results | ❌ JS-only | client calculators (acceptable — the intro + FAQ + schema are static) |

**P3-11 — HIGH: the two most AI-quoted FAQ surfaces (homepage + /faq hub) serve their answers only after JavaScript runs.** Non-JS AI crawlers — which `robots.txt` explicitly admits (GPTBot, ClaudeBot, PerplexityBot, CCBot, Google-Extended, OAI-SearchBot) — read the questions with no answers, then the footer. Fix: render panels server-side (open-first or `<details>`), matching the service pages' pattern. (Note: crawler JS-rendering behaviour varies by engine — REQUIRES VERIFICATION for each specific crawler, but the safe default is to ship answers in HTML.)

**P3-12 — MEDIUM: 205 pod/guide/top pages have no MS/ZH routes at all; multilingual AI queries cannot land on them.** Corpus + sitemap: `/commercial/<slug>` etc. exist only in EN (`{en:29}` etc.); sitemap has zero `/ms/…` or `/zh/…` pod URLs (the two "ms/zh pod" sitemap hits are sub-service pages). The client-side i18n dictionaries exist (224 pages × 2 locales verified by the estimator suite) but no localized URL. For a trilingual business, BM/ZH AI queries about "komersial" or "商业" topics have no local answer page. Fix (Part 5 content-gap): decide keep/merge per pod; for kept pods emit localized routes (the i18n data already exists).

**P3-13 — LOW: hidden empty-state strings pollute /faq text extraction.** "No matches in this topic." (×13) + "Tiada padanan dalam topik ini." / "该主题下没有匹配项。" on the MS/ZH hubs are CSS-hidden but present in raw HTML. Fix: `hidden` attribute or omit from SSR when there's no active filter.

---

## 3.7 AI SEARCH ENTITY CONSISTENCY

**What is right (VERIFIED):** brand/legal/SSM/NAP/hours/profile links are identical across JSON-LD, footer, llms.txt, aeo-faq.txt, site-summary.json (generator-derived, 320k-assertion verified); phone appears in one canonical format; `<html lang>` correct on all 591 MS + 591 ZH pages; hreflang clusters complete (4,739 sitemap URLs, 0 duplicates per audit:seo-head).

**Findings (all VERIFIED, see P3-07 for the full evidence):**
- **P3-14 — Entity numeric contradictions** (RM 180 vs 220 vs 10; 28+ vs 29; lowPrice 80; 120+ vs 120; 30 min vs 30–60 min vs 60 seconds; "15+ Pros" vs `numberOfEmployees: 10`; warranty "up to 90 days" vs "up to 10 years" vs per-service). **Severity HIGH. Priority P0–P1.** These are the single biggest AI-trust leak.
- **P3-15 — SearchAction points at a robots-disallowed, client-only page.** `lib/seo.ts` `getWebsiteSchema()` emits `SearchAction → /search?q={term}` on every page, while `app/robots.ts` disallows `/search` for all bots and `/search` is a dynamic client route. Google's sitelinks-searchbox eligibility and AI-agent site-search both fail against a URL the crawler can't reach. **Severity LOW–MEDIUM.** Fix: allow Googlebot (+ AI crawlers) on `/search` or remove SearchAction. **Priority P2.**
- **P3-16 — News sitemap violates Google News freshness rules.** `app/(en)/sitemap-news.xml/route.ts` (force-static) publishes **all 216 blog posts** with `publication_date` from the stale date registry (216 posts spread over only 5–8 distinct dates, 2026-07-12 → 2026-08-27; P2-C5); Google News sitemaps are only valid for articles from the last 48 hours, so this sitemap is at best ignored, at worst a freshness signal against the site; also EN-only titles. **Severity LOW.** Fix: either remove sitemap-news.xml from robots.txt or make it a true last-48h feed (needs real dates — P2-19). **Priority P2.**
- **P3-17 — robots.txt gaps for newer AI crawlers.** Verified live: no `Applebot-Extended` (Apple Intelligence/Siri summarization), no `DuckAssistBot` (DuckDuckGo AI Assist), no `Google-CloudVertexBot`/`Google-ResearchBot` (training crawlers — the site may or may not want those; explicit policy is better than default). Current allow-list is otherwise excellent (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, Claude-Web, PerplexityBot, Perplexity-User, Google-Extended, Amazonbot, cohere-ai, CCBot, YouBot, Bytespider, meta-externalagent). **Severity LOW. Priority P2.**
- **P3-18 — llms.txt "Key Services" lists only 12 of 29 services.** `generate-ai-context.ts` `slice(0, 12)`; missing from the short file: aircon (RM 129 — the site's flagship quote-getter), roof, locksmith, CCTV, autogate, welding, door, window, glass, epoxy, flooring, skim-coat, kitchen-cabinet, carpentry, kitchen/bathroom renovation, awning. The "Full directory of all 29 services" line partially mitigates, but an LLM that only fetches llms.txt sees a truncated catalog, and the listed per-sq-ft prices are unit-less (P3-05). **Severity MEDIUM. Priority P1.**
- **P3-19 — aeo-faq.txt is an orphan.** 8 Q&As, correct and consistent (it already says RM 220 for ceiling — the *pages* are wrong, not the file), but nothing links to it (not in robots.txt, llms.txt, sitemap or the site). AEO answer files only help if engines discover them; add `# AI FAQ` section in llms.txt pointing to `https://www.klservisrumah.my/aeo-faq.txt` and expand to ~20 Q&As (per-service pricing, coverage, warranty, booking). **Severity LOW–MEDIUM. Priority P2.**

---

## 3.8 AI FAQ STRATEGY

**Question-cluster coverage (VERIFIED, heading-family matches per template):**

| Family | Services (29) | Problems (74) | Blog (216) | Answers pods (29) | Verdict |
|---|---|---|---|---|---|
| can/do you… | 77 | 91 | 282 | 48 | ✅ strong |
| is X right for me / is it… | 40 | 27 | 73 | 11 | ✅ services; ⚠️ pods |
| which is better / vs | 41 | 1 | 93 | 3 | ✅ blog+services; ❌ problems |
| how much / cost | 25 | 29 | 84 | **1** | ⚠️ pods; ⚠️ cost pages lack literal "how much" H2 (P3-04) |
| how long / how many | **13** | 16 | 89 | 13 | ❌ services under-covered |
| what causes / why | 6 | 16 | 59 | 6 | ⚠️ problems could go deeper |
| when should I | **2** | 74 | 38 | 0 | ✅ problems; ❌ services, pods |

**Gaps to close (highest-value, evidence-based):**
1. **"How long does {service} take in KL?"** — only 13 heading matches across 29 service pages despite process timelines existing in body text (services/painting process, etc.). Add question-H2 + short answer per service (AEO + featured snippet).
2. **"Which is better: {sub-service A} or {B}?"** — exists on compare pages (18) but not problem pages (1 match) where users land from "waterproofing vs PU grouting" type queries.
3. **"When should I {service}?"** — 2 matches on services; add seasonal/condition triggers (e.g. "When should I repaint my exterior in KL?").
4. **Pods' pricing questions** — answers pods have 1 how-much match in headings; their FAQ blocks carry the questions, promote to H2.
5. **Per-area "how much"** — the 3,654 local pages carry 3 generic FAQs; if kept post-restructure, localize the "how much in {area}" question with the area's housing-profile context (P2-26 has the material).

**What not to do:** do not expand FAQPage schema into a 40-question wall per page (Google caps FAQ rich results and AI engines weight first-5); keep 3–6 high-intent Q&As per page (current practice is right).

---

## B. CRITICAL ISSUES (Part 3)

| ID | Issue | Severity | Evidence | Affected | Fix | Priority |
|---|---|---|---|---|---|---|
| P3-01 | English fragments inside BM/中文 DirectAnswer blocks | **CRITICAL** | corpus 29/29 ZH, 28/29 BM; live /services/tiling | 29 service hubs | localize tagline/warranty in trilingual strings + prebuild leak validator | **P0** |
| P3-05 | Unit-less per-sq-ft prices in AI surfaces (RM 14/10/5/22) + lowPrice "80" | **HIGH** | live smart-finder, DirectAnswer, llms.txt, homepage schema | 5 hubs, llms.txt, homepage | add units; derive lowPrice; prebuild unit assertion | **P0** |
| P3-07 | Contradictory price/warranty/count facts across surfaces | **HIGH** | RM 180 vs 220; 28+ vs 29; 3 warranty summaries; 90-Day pill on 251 pages | homepage, 251 service pages, /faq, /about | single-source copy strings; dynamic counts; reconcile warranty pill | **P0** |
| P3-02 | /faq hub: no FAQPage schema, no question H2s, top accordion answers JS-only | **HIGH** | corpus + build HTML | /faq + MS/ZH hubs | server-render answers, add schema, H3s for directory | **P1** |
| P3-11 | Homepage FAQ answers absent from static HTML (JS-only) | **HIGH** | `faq-accordion.tsx` `{isOpen && …}`; index.html | homepage (all locales) | same fix as P3-02 | **P1** |
| P3-08 | 205 EN-only generic pods/guides/top = doorway template for AI | MED–HIGH | P2-C3; sitemap | 205 pages | author or collapse (tracked P2-C3) | **P0** (tracked) |
| P3-03 | 0 question headings on 3,654 local pages | MED | aggregate qH2=0% | 3,654 URLs | restructure/noindex (Part 1 P0) | **P1** |
| P3-04 | Cost pages lack literal "how much" answer card | MED | cost page H2s | 29 cost pages | add DirectAnswer + expand | **P1** |
| P3-09 | Vague/unverifiable claims ("written by local tradesmen", "60% cheaper", "120+", "30–60 min") | MED | corpus vague=100%; live copy | sitewide | replace with verified facts | **P1** |
| P3-06 | Blogs: no FAQPage schema; 66% no question H2 | MED | corpus | 216 posts | FAQPage + H2 promotion | **P2** |
| P3-18 | llms.txt lists 12/29 services; unit-less rates | MED | generator slice(0,12) | llms.txt | list all 29; add units | **P1** |
| P3-12 | Content pods have no MS/ZH routes | MED | corpus/sitemap | 174 pods | localized routes for kept pods | **P2** |
| P3-15 | SearchAction → robots-disallowed /search | LOW–MED | lib/seo.ts + robots.ts | all pages' schema | allow /search or drop SearchAction | **P2** |
| P3-16 | sitemap-news.xml lists all 216 stale posts (48h rule) | LOW | route.ts + .body | sitemap-news | fix dates or remove | **P2** |
| P3-17 | Missing AI crawlers in robots (Applebot-Extended, DuckAssistBot) | LOW | live robots.txt | robots | add entries | **P2** |
| P3-10 | NAP absent from content block (footer-only) | LOW–MED | corpus pctNap=0% | 5,813 pages | contact strip in content | **P2** |
| P3-13 | Hidden "No matches in this topic." ×13 in /faq raw HTML | LOW | build HTML | /faq hubs | hidden attr / omit SSR | **P3** |
| P3-19 | aeo-faq.txt orphan (8 Q&As, unlinked) | LOW–MED | robots/llms/sitemap | aeo-faq.txt | link from llms.txt; expand | **P2** |

---

## D. QUICK WINS (Part 3) — smallest effort, biggest AI-visibility return

1. **Fix the trilingual DirectAnswer leak (P3-01)** — one component file, 29 pages, blocks garbled multilingual answers at the source. (5 min + validator.)
2. **Replace the "Up to 90-Day Warranty" pill with the service's own warranty** (P3-07) — one i18n string → per-service value; kills a same-page contradiction on 251 pages.
3. **Make the homepage FAQ + smart-finder count dynamic** ("29+", RM 220 ceiling) (P3-07) — stops the homepage contradicting llms.txt.
4. **Add "/ sq ft" to per-sq-ft startPrice presentations + llms.txt** (P3-05) — 5 services, 3 surfaces.
5. **Server-render FAQAccordion answers** (P3-11) — homepage + /faq hub answers enter raw HTML.
6. **Add FAQPage JSON-LD to /faq hub** (P3-02).
7. **Set `lowPrice` from servicesData (or drop AggregateOffer)** (P3-05).
8. **Add Applebot-Extended + DuckAssistBot to robots allow-list** (P3-17).
9. **Link aeo-faq.txt from llms.txt** (P3-19).
10. **Promote the top blog FAQ to question H2 + FAQPage schema** (P3-06) — start with the 8 highest-traffic posts (REQUIRES VERIFICATION which those are; otherwise the 6 compare posts).

---

## I. AI SEARCH STRATEGY (per engine — Part 3 scope)

| Engine | Current posture | Main blockers | Action (priority order) |
|---|---|---|---|
| **Google AI Overviews / AI Mode** | Strong: FAQPage 4,323, HowTo 174, Speakable 230, deep service bodies, honest pricing, Google-Extended allowed | P2-C1 shell (Googlebot renders JS, so partial), unit-less prices, RM 180 vs 220 contradiction, pods doorway pattern | P3-05, P3-07, P3-02; keep per-page FAQ ≤6 Q&As; make cost pages literal-answer pages |
| **ChatGPT (GPTBot/OAI-SearchBot/ChatGPT-User)** | Allowed; llms.txt + llms-full.txt exist; DirectAnswer cards | GPTBot-class text extractors read "Loading…→footer→content"; homepage FAQ answers JS-only; trilingual leak | P3-01, P3-11, P2-C1 (server-render content in `<main>`), P3-18 (full 29-service llms.txt) |
| **Perplexity** | Allowed (Bot + User); citations likely from service pages + pricing | same JS-gating; pods duplication; unit-less rates | P3-05, P3-07, P2-C1 |
| **Gemini / Google-Extended** | Allowed; entity schema rich (Organization/LocalBusiness/WebSite/FAQPage) | stale `knowsAbout` (P2-27), lowPrice 80, conflicting warranty summaries | P3-07, P2-27 (regenerate knowsAbout), P3-05 |
| **Claude (ClaudeBot/Claude-Web/anthropic-ai)** | Allowed; llms.txt ecosystem citable | non-JS reading order; aeo-faq orphan | P3-01, P3-19, P2-C1 |
| **Bing Copilot** | Bingbot renders JS; sitemap submitted owner-side (blocked) | news-sitemap freshness; /search disallowed vs SearchAction; owner-side Bing submission pending | P3-15, P3-16, OWNER_ACTION_PLAN §B3/§4 |
| **Apple Intelligence (Applebot/Applebot-Extended)** | Applebot allowed; **Applebot-Extended missing** | Siri/AI summarization may train on the site with no explicit consent policy | add Applebot-Extended (consent) or keep Applebot (retrieval) |
| **DuckDuckGo AI (DuckAssistBot)** | DuckDuckBot allowed; DuckAssistBot missing | AI-assist answers cite only allowed crawlers | add DuckAssistBot |

---

## J. PRIORITY SCORE (Part 3 items)

| Item | SEO /10 | Business /10 | AI Visibility /10 | Difficulty /10 | Priority |
|---|---|---|---|---|---|
| P3-01 trilingual DirectAnswer leak | 6 | 7 | 9 | 1 | **P0** |
| P3-05 unit-less prices + lowPrice 80 | 7 | 9 | 9 | 2 | **P0** |
| P3-07 fact contradictions (price/warranty/count/pill) | 8 | 9 | 9 | 3 | **P0** |
| P3-11 homepage FAQ answers JS-only | 6 | 6 | 8 | 2 | **P1** |
| P3-02 /faq hub schema + headings | 7 | 6 | 8 | 3 | **P1** |
| P3-04 cost-page literal answer | 8 | 8 | 8 | 3 | **P1** |
| P3-18 llms.txt 29 services + units | 5 | 7 | 8 | 2 | **P1** |
| P3-09 vague claims → verified facts | 6 | 7 | 7 | 4 | **P1** |
| P3-03 local-page question headings | 6 | 5 | 5 | 6 (depends on P0 restructure) | **P1** |
| P3-06 blog FAQPage + H2 | 6 | 4 | 6 | 3 | **P2** |
| P3-12 pod MS/ZH routes | 5 | 5 | 6 | 5 | **P2** |
| P3-15 SearchAction vs /search | 3 | 2 | 4 | 1 | **P2** |
| P3-16 news sitemap freshness | 2 | 1 | 3 | 1 | **P2** |
| P3-17 robots AI-crawler additions | 2 | 1 | 3 | 1 | **P2** |
| P3-10 NAP in content | 3 | 3 | 3 | 1 | **P2** |
| P3-19 aeo-faq link + expansion | 2 | 3 | 4 | 2 | **P2** |
| P3-13 hidden empty-state text | 1 | 1 | 2 | 1 | **P3** |

---

## K. DEVELOPER TASK LIST (Part 3)

| # | Task | Reason | Affected system | Acceptance criteria |
|---|---|---|---|---|
| K1 | Localize tagline/warranty inside `trilingualMs`/`trilingualZh`; add prebuild leak validator (reuse `part3-aeo-audit.ts` counters) | P3-01 | `components/sections/service-detail-content.tsx`, `scripts/` | 0 ASCII-word leaks in BM/中文 DirectAnswer segments across build; `npm run build` green |
| K2 | Add unit context to per-sq-ft prices in DirectAnswer, smart-finder options, llms.txt/llms-full, OfferCatalog; derive `lowPrice` from servicesData or drop it | P3-05 | `service-detail-content.tsx`, `components/ui/smart-service-finder.tsx`, `scripts/generate-ai-context.ts`, `app/(en)/page.tsx` | Every numeric price in AI surfaces carries a unit or is a whole-job price; no hardcoded "80" |
| K3 | Server-render FAQAccordion answers (open-first or `<details>`); hide `data-faq-empty` with `hidden` attribute | P3-11/P3-13 | `components/sections/faq-accordion.tsx`, `faq-directory-view.tsx` | Answers present in `.next/server/app/index.html` and `faq.html` raw HTML |
| K4 | Emit FAQPage JSON-LD on /faq hub; wrap directory questions in H3s | P3-02 | `app/(en)/faq/page.tsx` + MS/ZH hubs | /faq raw HTML contains FAQPage JSON-LD; corpus faqSchema=100% for /faq |
| K5 | Replace "Up to 90-Day Warranty" pill with per-service warranty string | P3-07 | `components/content/trust-badges-row.tsx` + i18n keys | No page shows a warranty pill contradicting its own service warranty |
| K6 | Make homepage FAQ + smart-finder service count dynamic ("29+") and interpolate service prices (ceiling RM 220) | P3-07 | `app/(en)/page.tsx`, `components/ui/smart-service-finder.tsx` | "28+" gone; FAQ prices match servicesData |
| K7 | llms.txt: list all 29 services with prices (+units); link aeo-faq.txt; add Applebot-Extended/DuckAssistBot to robots | P3-18/P3-19/P3-17 | `scripts/generate-ai-context.ts`, `app/robots.ts` | llms.txt has 29 services; robots updated; regenerated files committed |
| K8 | Decide SearchAction vs /search robots policy | P3-15 | `lib/seo.ts`, `app/robots.ts` | Consistent: allow Googlebot on /search or drop SearchAction |
| K9 | News sitemap: restrict to last-48h or remove from robots | P3-16 | `app/(en)/sitemap-news.xml/route.ts` | No stale publication_dates in robots-referenced news sitemap |
| K10 | Cost pages: add DirectAnswer "How much does {svc} cost in KL & Selangor?" | P3-04 | cost route template | qa=1 for `/services/<svc>/cost` pattern |

## L. CONTENT TEAM TASK LIST (Part 3)

| # | Task | Reason |
|---|---|---|
| L1 | Verify/update the legacy-blog numeric claims ("60% cheaper", "No deposit…", warranty durations) against owner policy | P3-09 |
| L2 | Add "How long does {service} take in KL?" + "When should I…?" H2s with short answers to 29 service pages | P3-08 §3.8 gap 1/3 |
| L3 | Add literal "how much" answer paragraphs to 29 cost pages (with units) | P3-04 |
| L4 | Replace vague superlatives on service pages with verifiable specifics (brands, published rates, warranty terms) | P3-09 |
| L5 | Expand aeo-faq.txt to ~20 Q&As (per-service pricing with units, coverage, warranty, booking, response-time — after owner verification) | P3-19 |
| L6 | Per-area "how much in {area}" Q&As for the kept local set (post Part 1 restructure) | P3-03 |
| L7 | For kept pods: 2–3 unique verifiable facts each (commercial/residential/process/answers) | P3-08 |

## M. SEO TEAM TASK LIST (Part 3)

| # | Task | Reason |
|---|---|---|
| M1 | After K2/K5/K6: re-run `audit:seo-head`, `audit:meta`, corpus Part 3 analyzer — expect 0 contradictions in price/count surfaces | P3-07 verification |
| M2 | Track GSC "AI Overviews / AI Mode" impressions once owner grants access (REQUIRES VERIFICATION — no GSC data available) | measure Part 3 impact |
| M3 | Coordinate with owner to verify: reviews (120 vs "120+"), projects (1,200+), response times (30/30–60/60s), employee count (10 vs "15+ Pros") | P3-07/P3-09 REQUIRES VERIFICATION |
| M4 | Submit updated sitemap + IndexNow pings after K7/K9 (owner-side, blocked) | indexation |
| M5 | Monitor Bing Webmaster for llms.txt/robots changes (owner-side, blocked) | P3-17 |

---

## N. WHAT IS WRONG WITH THIS WEBSITE? (Part 3 scope)

### 20 biggest AI-search weaknesses
1. Trilingual DirectAnswer blocks garble BM/中文 with English fragments (29/29 pages) — the exact text AI engines quote.
2. Homepage's own FAQ schema + visible FAQ quote a stale ceiling price (RM 180) that matches nothing in the catalog (RM 220 / RM 10).
3. Unit-less per-sq-ft rates ("from RM 14/10/5/22") fed to AI surfaces as whole-job prices.
4. `lowPrice: "80"` in homepage Service schema — a price that doesn't exist on the site.
5. "Up to 90-Day Warranty" generic pill contradicts the page's own 12-Month/5-Year/10-Year warranty on 251 pages.
6. Three different warranty summaries on the homepage alone (TrustBar / FAQ schema / FAQ accordion).
7. "28+ services" (FAQ + smart-finder) vs 29 (stats + llms.txt) — a count that already drifted once ("13+").
8. Homepage + /faq hub FAQ answers are absent from static HTML (JS-only accordions) — non-JS AI crawlers see questions with no answers.
9. /faq hub — 1,137+ answers — has no FAQPage schema and no question headings.
10. 205 EN-only generic pods/guides/top pages that read as one doorway template to summarization engines.
11. Blog: no FAQPage schema on 216 posts; 66% of posts have no question H2s.
12. Cost pages (459 words) never literally answer "how much does {service} cost in KL?".
13. llms.txt lists only 12 of 29 services and omits aircon (the flagship price-led service).
14. NAP only in footer — content-block extraction finds no contact info on 5,813/5,815 pages.
15. "written by local tradesmen" with no named authors; "60% cheaper" legacy claims.
16. Response-time promises in four variants (30 min / 30–60 min / 60 seconds / instant) — none verified.
17. "120+ reviews" vs schema 120; "15+ Pros" vs `numberOfEmployees: 10`.
18. SearchAction targets a robots-disallowed client-only /search.
19. News sitemap lists all 216 posts with stale dates — Google News-invalid.
20. Hidden "No matches in this topic." ×13 pollutes /faq text extraction; aeo-faq.txt is an unlinked orphan.

### 20 biggest AI-search opportunities
1. Fix P3-01/P3-05/P3-07 → the site becomes one of the few local-service sites whose AI surfaces quote *correct, consistent* prices — instant differentiator.
2. The DirectAnswer card pattern is excellent — extend it to cost pages (29) and problems (74).
3. Server-render FAQ answers → 2 pages fix, raw-HTML AI coverage for the two most-quoted surfaces.
4. FAQPage JSON-LD on /faq hub + blogs → schema-covered question inventory grows from 4,323 to ~4,600 pages.
5. llms.txt with all 29 services + units → complete machine-readable catalog.
6. aeo-faq.txt linked + expanded → a second citable answer file.
7. Local pages: 2 question H2s per kept page after restructure → the local "how much/how long" cluster becomes AI-answerable.
8. Blog question-H2 promotion (216 posts × top FAQ) → featured-snippet share.
9. "How long does X take in KL?" H2s on 29 services → answers a family currently missing.
10. Verifiable stats (once owner confirms) → every stat becomes a quotable citation instead of a risk.
11. MS/ZH pod routes (i18n data already exists) → trilingual AI coverage for commercial/residential topics.
12. SearchAction/robots alignment → Google sitelinks searchbox eligibility.
13. News-sitemap fix → Bing News / Google News eligibility when real dates land (P2-19).
14. Applebot-Extended/DuckAssistBot allow → Apple Intelligence + DuckDuckGo AI coverage.
15. NAP contact strip in content → AI chunk-level NAP.
16. Speakable on sub-services + cost pages → voice/AEO for the money queries.
17. Cost-page DirectAnswer → "how much" answer cards on all 29 cost pages.
18. Per-service warranty pill (dynamic) → warranty answers become self-consistent.
19. `knowsAbout` regeneration (P2-27) → entity summary matches the 29-service catalog.
20. Re-run Part 3 analyzer in CI (the script exists) → regressions caught at build time.

### If we fix only 10 things first (Part 3 priorities)
1. P3-01 trilingual leak fix + validator (K1)
2. P3-05 units + lowPrice (K2)
3. P3-07 warranty pill + dynamic counts + FAQ prices (K5/K6)
4. P3-11 server-rendered FAQ answers (K3)
5. P3-02 /faq FAQPage schema (K4)
6. P3-04 cost-page DirectAnswer (K10)
7. P3-18 llms.txt 29 services (K7)
8. P3-09 owner verification of stats/claims (L1/M3)
9. P3-06 blog FAQPage on top posts (L-content)
10. P3-17 robots additions (K7)

---

## NOT VERIFIED — requires owner/tool/data access (Part 3)

- **REQUIRES VERIFICATION:** "1,200+ completed projects", "15+ Pros" vs 10 employees, "4.9/120 (or 120+)" Google reviews (source + count + last-updated 2026-07-23), "30–60 minute" arrival times and "30 min avg response" and "60-second quotes", insurance/background-check claims, "written by local tradesmen" authorship, article dates (P2-C5), legacy-blog "60% cheaper"/"No deposit" claims.
- **REQUIRES VERIFICATION (external):** which AI crawlers actually render JS (per-engine behaviour changes; the safe assumption used here is that GPTBot/ClaudeBot/CCBot/PerplexityBot-class text extractors do not — confirm via server-side crawler logs), Google AI Overviews/AI Mode appearance (needs GSC), Bing Copilot citations (needs Bing Webmaster), Google News eligibility, Apple Intelligence/DuckDuckGo AI crawling (needs their dashboards).
- **Owner-side blocked (from CONTINUE_SESSION_PROMPT):** GA4 env var, GBP verification/updates, IndexNow secret + pings, Bing Webmaster sitemap submission, live-deploy parity checks (built `/commercial/painting` 404s on live host — needs a deploy), native-speaker MS/ZH skim.

---

*Next part: Part 4 — SXO + Local SEO + Internal Linking + CRO + Trust (`PART-4-PROMPT.md`). Do not start until this report, `TRACKING.md` and `SESSION_LOG.md` are committed and the Part 3 PR is merged.*
