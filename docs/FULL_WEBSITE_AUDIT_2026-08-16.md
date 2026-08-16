# KL Servis Rumah — Full Website Audit

**Audit date:** 2026-08-16  
**Website:** https://www.klservisrumah.my  
**Scope:** repository, production build, 4,722 rendered HTML pages, live homepage/blog/robots/sitemap samples, SEO/content/CRO/local SEO/performance/accessibility/security/privacy review.

## Executive summary

The website has a strong technical base: it builds successfully, has a large structured service inventory, valid canonicals and hreflang on rendered pages, useful calculators, direct WhatsApp conversion paths, and substantial EN/MS/ZH coverage.

The main growth problem is **not a shortage of pages**. It is the gap between content production and publication, weak independently verifiable proof, a very large set of similar location pages, heavy key pages, and incomplete lead measurement.

### Audit scorecard

| Area | Assessment | Main reason |
|---|---:|---|
| Build reliability | Strong | Build, lint, type-check and estimator tests pass |
| Technical SEO | Strong | 0 missing metadata and 0 duplicate indexable titles/descriptions after fixes |
| Content production | Strong | 206 production topics in three languages |
| Content publication | Weak | 191 completed production topics are not wired to the live blog |
| Local SEO architecture | High risk | Thousands of location/service pages are substantially templated |
| Trust / E-E-A-T | Weak–medium | Many strong business claims need an evidence register; project gallery uses placeholders |
| Conversion UX | Medium | WhatsApp paths are prominent, but not all major CTAs are measured |
| Performance | Medium–weak | Homepage and locale service/search bundles are heavy; FAQ hubs are extremely large |
| Multilingual SEO | Medium–strong | Services, problems, blogs and tools have real locale URLs; other important journeys remain English-first |
| Privacy / compliance | Weak | No public privacy notice or terms page found despite contact fields and optional analytics |
| Security | Strong with one caveat | Security headers and protected endpoints exist; serverless in-memory throttles are best-effort only |

## Work completed during this audit

1. Fixed all **59 legacy markdown metadata-length warnings** across **54 files**.
   - EN: 16 files
   - MS: 27 files
   - ZH: 11 files
2. Preserved article slugs, H1s and body content.
3. Resolved three duplicate live SEO title pairs between blogs and sub-service pages:
   - self-levelling epoxy
   - flake/quartz broadcast epoxy
   - roof ridge re-bedding/re-pointing
4. Updated vulnerable transitive dependency `nanoid` from 3.3.17 to 3.3.18.
5. Updated `BLOG_PRODUCTION_LIST.md` with the maintenance and audit status.

## Validation results

| Check | Result |
|---|---|
| Blog markdown validator | 618 files; 0 errors; 0 warnings |
| TypeScript | Pass |
| ESLint | Pass |
| Production build | Pass; 4,730 static pages generated |
| Rendered technical SEO audit | 4,722 pages checked; pass |
| Indexable rendered URLs | 3,683 |
| Canonicalised supporting pages | 1,036 |
| Noindex rendered pages | 3 |
| Sitemap parity | 3,683 sitemap URLs; exact indexable parity |
| Duplicate indexable titles | 0 |
| Duplicate indexable descriptions | 0 |
| Missing title/description | 0 |
| Invalid JSON-LD | 0 |
| HTML accessibility/link fatal findings | 0 |
| Dependency audit | 0 production vulnerabilities |

A generic character-count audit still labels 62 titles under 20 characters and 187 descriptions under 50 characters. Most short titles are natural Chinese titles, so an English character threshold is not a valid defect by itself. However, many tool descriptions are genuinely too generic and are addressed below.

---

# Priority findings

## P0 — Fix before scaling traffic

### 1. Most completed blog production is not published

**Evidence**

- Markdown corpus: 206 EN + 206 MS + 206 ZH = 618 files.
- Live blog registry: 33 topics total.
- Of those 33, 18 are older editorial posts and only 15 are wired production topics.
- The application does not read files from `/blogs`; it renders from `config/blog-data*.ts` and `config/blog-i18n.ts`.
- Therefore **191 completed production topics, or 573 language files, are not live website pages**.

**Business impact**

The largest content investment cannot attract impressions, internal-link authority or enquiries while it remains outside the application.

**Recommendation**

Build a validated Markdown ingestion layer rather than manually copying articles into TypeScript. Publish in controlled waves, not all 191 topics at once:

1. Map each topic to its service/problem/sub-service parent.
2. Detect overlap with existing service and problem pages.
3. Assign one primary intent per URL.
4. Publish the highest commercial-intent and strongest informational articles first.
5. Add real EN/MS/ZH hreflang clusters, sitemap entries and related-content links automatically.
6. Monitor each release in Google Search Console before releasing the next wave.

### 2. Trust claims require a central evidence register

The repository makes strong claims in many places. Examples include:

- 4.9 Google rating and 120+ reviews
- 1,200+ completed projects
- founding date 2014
- 10 employees / 15+ professionals
- insured operations and background-verified workers
- same-day availability and specific response/arrival times
- four named Google reviews with exact text and dates
- specific warranties, licences, material standards and service outcomes

The Google Business Profile link resolves to a KL Servis Rumah entity, but this audit did not independently confirm every displayed number, review quote or operational claim. These claims may be genuine; the issue is that the codebase has no visible evidence-control process.

**Recommendation**

Create a `business-evidence` register containing:

- claim;
- approved wording;
- evidence owner;
- source document or public URL;
- verified date;
- expiry/recheck date;
- pages/components using it.

If a claim cannot be documented, soften or remove it. Google review quotations should match the public source exactly and customer permission should be retained where required. Insurance, licensing and warranty claims should link to clear terms or proof where appropriate.

### 3. The project-proof experience is not yet credible enough

**Evidence**

- `/projects` contains four scope cards using generic service hero assets.
- The page itself says approved before/after photos can replace “current optimized placeholders”.
- Project slugs exist in data but there are no individual project detail routes.
- The homepage before/after section is text-only.

**Business impact**

Home-service buyers often decide based on proof of similar work. Placeholder imagery weakens confidence exactly where the page promises “Project Proof”.

**Recommendation**

Replace the proof hub with real, consented case studies:

- original before/during/after images;
- area at a safe granularity;
- property type;
- customer problem;
- diagnosed cause;
- materials and method;
- duration and scope;
- outcome;
- related service CTA.

Do not use stock or generated images as completed-project proof.

### 4. The location-page footprint is too large and too similar

**Evidence**

- 3,683 indexable URLs in total.
- Location architecture contributes roughly 2,530 indexable area/suburb/service pages.
- There are 1,036 `/areas/<area>/<service>` pages and another 1,036 `/near-me` variants.
- A five-location sample of painting area/service pages had **92.6%–95.1% token-set similarity**.
- Equivalent near-me pages had **83.5%–87.6% similarity**.
- 1,036 overlapping suburb pages are already canonicalised, showing the architecture contains substantial duplication.

**Risk**

These pages are technically valid, but many differ mainly by area name, landmarks and reused service copy. That creates crawl dilution, cannibalisation and doorway/scaled-content risk. Google describes region-targeted, substantially similar pages that funnel users onward as a potential doorway pattern.

**Recommendation**

- Keep indexable only the locations where there is genuine demand and unique local evidence.
- Consolidate or noindex most `/near-me` variants unless they answer a distinct need.
- Require a uniqueness gate before indexing a location page: local proof, relevant property stock, access/JMB context, realistic availability and local FAQs.
- Use GSC impressions and conversions to decide which area/service combinations deserve a dedicated URL.
- Do not publish more programmatic local pages until this inventory is pruned.

### 5. Privacy notice and consent controls are missing

**Evidence**

- No privacy-policy, terms or data-notice route was found.
- The booking journey can collect phone and email details before opening WhatsApp.
- Google Analytics can be enabled through `NEXT_PUBLIC_GA_ID`.
- No consent-mode or consent-management implementation was found.

**Recommendation**

Obtain Malaysian legal review and add at minimum:

- Privacy Notice in English and Bahasa Malaysia;
- what contact and technical data is processed;
- purpose, retention, service providers and cross-border processing;
- customer rights and contact method;
- cookie/analytics disclosure;
- an appropriate consent mechanism if analytics/advertising tags require it;
- a short notice beside the booking form.

This is a compliance and trust requirement, not merely an SEO task.

---

## P1 — High-impact growth work

### 6. Core conversion actions are not measured consistently

**Evidence**

- About 52 component/page files generate WhatsApp links or CTAs.
- Only eight files call WhatsApp or phone tracking helpers.
- The homepage hero quote form, hero WhatsApp button, hero phone link and desktop WhatsApp bubble do not record the same lead events.
- `WebVitalsReporter` dispatches browser events but no production listener persists them.

**Recommendation**

Use one shared tracked CTA component or delegated click listener for all:

- `whatsapp_click`;
- `phone_call`;
- `quote_form_start`;
- `quote_form_submit`;
- tool completion;
- qualified lead;
- quote issued;
- booking won;
- revenue/service category.

Do not optimise advertising toward raw button clicks. Import offline outcomes so campaigns optimise toward booked and profitable jobs.

### 7. Key-page performance is heavier than it should be

**Build evidence**

- Shared first-load JavaScript: 102 kB.
- Homepage first-load JavaScript: **544 kB**.
- `/ms/services` and `/zh/services`: **473 kB**.
- search routes: **467 kB**.
- 199 of 410 TSX source files are client components.
- Homepage raw HTML: 525 kB.
- FAQ pages: 3.42–3.59 MB raw HTML each and 231–269 kB gzip.
- The full rendered corpus is 745.4 MB raw HTML.

No live PageSpeed score is claimed here: the PageSpeed API quota was unavailable during the audit. Field Core Web Vitals still need measurement.

**Recommendation**

1. Make the hero static on initial load; load slideshow controls after interaction/idle.
2. Lazy-load Smart Service Finder and other below-fold interactive sections.
3. Keep large translation/service registries on the server side.
4. Split FAQ hubs into category pages or paginate; do not render thousands of FAQs and one giant schema block in a single document.
5. Profile the 473 kB locale service indexes and 467 kB search pages.
6. Send LCP, INP and CLS to GA4 or a real RUM endpoint and monitor the 75th percentile.

### 8. Blog and service cannibalisation needs editorial governance

Three exact duplicate titles were fixed during this audit, but the underlying issue is broader: several blogs have almost the same commercial intent as their service/sub-service page.

**Recommendation**

Define URL roles:

- service page = scope, suitability, process, price and booking;
- problem page = symptoms, causes, diagnosis and repair path;
- blog = comparison, maintenance, planning or decision support;
- tool = personalised estimate/diagnosis.

Every article should link to one canonical commercial page. Consolidate articles whose only purpose is to restate a service page.

### 9. Tool metadata is technically present but often too generic

The generic audit found many short descriptions concentrated in tools:

- 20 English tool descriptions under 50 characters;
- 14 Malay tool descriptions under 50 characters;
- 34 Chinese tool descriptions under 50 characters.

Chinese copy naturally uses fewer characters, so length alone is not the issue. The real issue is descriptions such as “Free roof repair cost estimator,” which omit location, inputs and output benefit.

**Recommendation**

Describe what the user enters and receives. Example pattern:

> Estimate roof repair cost in KL & Selangor using roof type, area and damage scope. See a published-rate breakdown before requesting a quote.

Localise by intent rather than translating this sentence literally.

### 10. Multilingual customer journeys remain uneven

**Strengths**

- Real MS/ZH routes exist for services, sub-services, problems, blog posts, tools and FAQs.
- Rendered hreflang clusters pass validation.

**Gaps**

English has broader high-value journeys such as pricing, areas, about, contact, projects, comparisons and guides. Some locale users are still redirected to an English canonical page and rely on client-side translation.

**Recommendation**

Prioritise native MS/ZH versions of conversion pages in this order:

1. contact/booking;
2. pricing;
3. top-performing areas;
4. real project case studies;
5. about/trust and warranty terms.

Do not localise every low-value page merely for parity.

### 11. Schema is valid but overused

**Evidence**

- JSON-LD parsing passes with zero errors.
- FAQ schema is used across many page families.
- The giant FAQ hubs embed a schema graph for the full directory.
- `/projects` is also marked as an `Article`, although it is principally a gallery/hub.

**Recommendation**

- Keep Organization/LocalBusiness, Service, Breadcrumb and genuine BlogPosting markup.
- Remove schema types that do not precisely match the visible page purpose.
- Do not expect FAQ rich results: Google currently limits them mainly to authoritative government and health sites.
- Reduce schema payload on FAQ hubs.

### 12. Content dates are stale at the global sitemap level

`DEFAULT_CONTENT_DATE` remains `2026-08-07`, while substantive content work occurred on 2026-08-13 to 2026-08-16. The sitemap therefore gives one old date to much of the site.

**Recommendation**

Store a real `modifiedAt` per content record or per release group. Update dates only when the main content materially changes; do not use every build date.

---

## P2 — Important improvements after P0/P1

### 13. Strengthen editorial E-E-A-T

- The live blog index displays “By KL” because it truncates the author at the first word.
- Authors are generic teams without an editorial standards page or reviewer information.
- Several legacy articles contain exact performance, lifespan, savings or response claims that need source review.

**Recommendation**

Publish an editorial policy covering fact-checking, pricing dates, corrections and technical review. Display the full team name. Where a licensed trade reviews safety-critical content, record the reviewer accurately without inventing credentials.

### 14. Replace broad promises with qualified language

Examples that need evidence or qualification include “all KL & Selangor,” “same-day dispatch across the entire Klang Valley,” “no upfront deposits,” and exact arrival-time averages.

Use language such as “subject to area, scope and crew availability” when that reflects reality. Clear boundaries increase trust and reduce low-quality enquiries.

### 15. Improve deployment and monitoring discipline

Add CI gates for:

- markdown validator;
- lint and type-check;
- build;
- rendered SEO head audit;
- HTML quality audit;
- dependency audit;
- route count change threshold;
- performance budget for first-load JS and FAQ HTML size.

Configure the existing PageSpeed cron API key or another RUM system. The current Web Vitals component does not persist production metrics by itself.

### 16. Serverless rate limiting is only best-effort

Admin login and error-log throttles use in-memory Maps. On serverless infrastructure, instances can restart or scale independently, so the limit is not globally reliable.

Use an external rate-limit store or platform firewall for admin/auth endpoints. The current password verification, signed HTTP-only cookie and fail-closed secret handling are otherwise positive.

---

# How to win more customers

## Phase 1 — Trust and measurement (days 1–14)

1. Verify every public rating, review, insurance, licence, warranty, project-count and response-time claim.
2. Publish privacy and warranty/terms pages.
3. Replace placeholder project proof with at least a small set of real case studies.
4. Track every WhatsApp, phone and quote-form conversion consistently.
5. Record downstream lead outcomes: qualified, quoted, booked, lost and revenue.
6. Repair the heavy homepage and FAQ experience before buying more traffic.

## Phase 2 — Activate existing demand content (weeks 3–6)

1. Wire the Markdown publishing system.
2. Use GSC data to choose the first release: queries with impressions, commercial relevance and a clear URL role.
3. Publish small multilingual waves, for example one tightly reviewed service cluster at a time.
4. Add service → problem → guide → tool → quote internal paths.
5. Consolidate any article that competes directly with a service page.

## Phase 3 — Local lead generation (weeks 4–10)

1. Keep the Google Business Profile complete and consistent with the website.
2. Upload real completed-work photos regularly.
3. Ask real customers for Google reviews after handover; do not gate or incentivise positive reviews.
4. Respond to every review with service/location context but without exposing private information.
5. Build referral partnerships with property agents, condo/JMB contacts, facility managers and interior designers.
6. Create verified landing journeys for the highest-margin services instead of advertising all 28 services equally.

## Phase 4 — Paid acquisition only after tracking works (weeks 6–12)

Start with narrow, high-intent campaigns:

- emergency plumbing/leak diagnosis;
- roof/waterproofing enquiries during rainy periods;
- painting quotations;
- ceiling repair;
- selected high-value renovation or cabinet work.

Use negative keywords, service-area restrictions and call/WhatsApp conversion tracking. Judge performance by **cost per qualified booked job and gross profit**, not click-through rate or WhatsApp clicks alone.

## Conversion experiments worth testing

- “Send photos for a scoped estimate” vs “Get quote”.
- Service-specific WhatsApp messages containing area, property type and photo prompt.
- Real case study immediately above the primary CTA.
- Published starting price plus explicit exclusions.
- Quote response expectation only if operations can consistently meet it.
- Short two-step form first, with optional details after intent is captured.

## Weekly growth dashboard

Track by service, language and landing-page family:

- GSC impressions, clicks, CTR and average position;
- valid indexed pages and excluded-page reasons;
- organic landing sessions;
- WhatsApp clicks, calls and quote starts;
- qualified leads;
- quotes issued;
- booked jobs;
- quote acceptance rate;
- revenue and gross profit;
- cost per qualified lead and cost per booked job;
- review count/rating and review velocity;
- LCP, INP and CLS at the 75th percentile.

Do not set aggressive numeric targets until four weeks of clean baseline data exists.

---

# Recommended implementation order

1. **Evidence and trust cleanup**
2. **Privacy notice and booking disclosure**
3. **Complete conversion/outcome tracking**
4. **Real project case studies**
5. **Prune/consolidate similar local pages**
6. **Performance work on homepage, locale service indexes, search and FAQ hubs**
7. **Markdown-to-live-blog publishing pipeline**
8. **Controlled blog release using GSC demand**
9. **Tool metadata improvements**
10. **GBP/referral/paid acquisition scale-up**

# Audit limitations

- No access was available to private Google Search Console, GA4, Google Ads, CRM, server logs or Google Business Profile management data.
- PageSpeed API returned a quota error, so no unsupported live Lighthouse score is reported.
- Business documentation such as insurance certificates, SSM records, worker vetting records, licences and signed customer approvals was not available in the repository.
- Legal recommendations require review by a qualified Malaysian adviser.

# Reference guidance

- Google Search spam policies (doorway and scaled-content guidance): https://developers.google.com/search/docs/essentials/spam-policies
- Google FAQ structured-data eligibility: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Core Web Vitals and 75th-percentile thresholds: https://web.dev/articles/vitals
- Malaysia Personal Data Protection Department: https://www.pdp.gov.my/ppdpv1/en/akta/pdp-act-2010/
- Google Analytics consent mode: https://support.google.com/analytics/answer/10000067
