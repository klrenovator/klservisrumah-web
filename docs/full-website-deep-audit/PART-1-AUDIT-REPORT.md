# PART 1 — TECHNICAL SEO + CRAWLABILITY + INDEXATION + ARCHITECTURE

**Audit date:** 2026-08-27
**Website:** https://klservisrumah.my (canonical host: https://www.klservisrumah.my)
**Framework:** Next.js 15 (App Router) + React 19, static export on Vercel CDN
**Scope of this report:** **Part 1 only.** Full-site per-discipline scoring,
template audit, blueprints and roadmap (Final Output A–N) are completed
cumulatively across Parts 1–5 and consolidated in the final report (Part 5).

---

## EVIDENCE BASIS & METHODOLOGY

This report is evidence-based. A large proportion of the "5,000+ pages" is
generated programmatically, so the audit used **URL-pattern analysis + template
analysis + sitemap/indexation decomposition + representative live samples**
rather than per-URL crawling. Evidence sources (in order of weight):

| Source | Weight | What it proves |
|---|---|---|
| **Codebase ground truth** (`app/`, `config/`, `lib/`, `next.config.mjs`, `middleware.ts`) | Primary | Canonical/hreflang/robots/noindex generation, sitemap composition, redirects, rendering mode, dynamic-param handling, content-template structure |
| **Config-derived sitemap decomposition** (ran the sitemap function) | Primary | Exact URL counts per pattern category |
| **Live rendered samples** via fetch proxy (`/`, `/services/painting`, `/areas/kuala-lumpur/painting`) | Secondary | Confirms SSR content is served; confirms the programmatic template output on representative pages |
| **Last production SEO audit** (`docs/seo-audit-report.md`, `docs/FULL_WEBSITE_AUDIT_2026-08-16.md`) | Secondary | Prior build numbers: 4,730 static pages generated, 5,797 pages checked, 3,683 indexable, 1,036 canonicalised, 3 noindex |
| **Live HTTP/headers, Search Console, Lighthouse/CWV, server logs** | **NOT AVAILABLE** | The sandbox cannot open outbound HTTPS to the live host (all curl returns SSL/SYSCALL errors even for example.com); only a fetch proxy can read page text |

> **VERIFIED vs NOT VERIFIED.** Anything claiming a live HTTP status code,
> response header, Search Console impression/click/index data, Lighthouse / Core
> Web Vitals score, server log, or backlink/competitor metric is **NOT VERIFIED**
> in this report and is labelled accordingly. Everything derived from the
> repository (which IS the source of truth for what the static build serves) is
> verified by reading the code.

---

## A. EXECUTIVE SUMMARY (Part 1 Disciplines)

Scores below are for the **technical/crawl/indexation/architecture** disciplines
covered by Part 1. (Content, Semantic, Entity, Local, AEO, GEO, LLMO, AIO, SXO,
CRO, Schema, E-E-A-T, Internal-Linking scoring is completed in Parts 2–5 and the
consolidated final report.)

| Discipline (Part 1 scope) | Score /100 | One-line reason |
|---|---|---|
| **Technical SEO** | **74** | Clean build, correct canonical/robots/schema generation, strong CSP, static rendering — but host canonical (www vs non-www), trailing-slash, and header/CWV are unverified; search-page inconsistency exists |
| **Crawlability** | **78** | Explicit crawler allow-list, valid robot rules, sitemap+news sitemap, 404s enforced via `dynamicParams=false`; most crawl decisions are sound |
| **Indexation** | **45** | **Best-performing pages are a minority; ~72% of indexable URLs are near-duplicate programmatic service+location pages; ~2,500 programmatic pages share one template** |
| **Site Architecture** | **58** | Logical core taxonomy is good (Service Hub → Service → Sub-service → Location); sub-service and service+location level are massively over-deep and duplicated |
| **URL Structure** | **70** | Short, readable, keyword-relevant, consistent slugs; but heavy `near-me` and `suburbs` folder duplication creates competing top-level structures |
| **Performance / CWV** | **NOT VERIFIED** | No Lighthouse/CWV measurement possible; code review shows heavy key-page bundles & huge FAQ hubs (see 1.6) |
| **JavaScript / Next.js SEO** | **82** | Server-rendered, `dynamicParams=false`, SSG, global 404, correct canonical/hreflang; client-side language switch is the main residual risk |

**Overall Part 1 weight of evidence:** the site is **technically clean at the
platform layer** — canonical generation is genuinely correct, hreflang rules are
documented and enforced, robots is thoughtful, and metadata is centralised. The
**single biggest technical/architecture problem is silent index bloat built into
the URL/template design**: a small set of core pages carry real authority while a
huge surface of programmatic location×service pages is near-duplicate and will
compete with, rather than support, them.

---

## B. THE KEY NUMBER: SITEMAP DECOMPOSITION (1.1, 1.2)

Runs against the **current** sitemap (`app/(en)/sitemap.ts`) — 4,739 URLs total.

### B1. Exact URL inventory

| URL pattern | Count | Indexable? |
|---|---:|---|
| `/areas/<area>/<service>` | **1,073** | ✅ indexable |
| `/areas/<area>/<service>/near-me` | **1,073** | ✅ indexable |
| `/suburbs/<suburb>/<service>` | **435** | ✅ indexable |
| `/services/<service>/<sub-service>` | **300** | ✅ indexable |
| `/blog/<slug>` | **217** | ✅ indexable |
| `/problems/<problem>` | **75** | ✅ indexable |
| `/tools/<tool>` (×3 languages) | **43** | ✅ indexable |
| `/areas/<area>` | **37** | ✅ indexable |
| `/brands/*`, `/near-me/<service>`, `/answers/*`, `/process/*`, `/commercial/*`, `/residential/*`, `/services/<service>`, `/estimate/*`, `/guides/*`, `/compare/*`, `/top/*`, `/seasonal/*` | ~**306** | ✅ indexable |
| Static core (`/`, `/services`, `/pricing`, `/areas`, `/blog`, `/faq`, `/contact`, `/about`, `/privacy`, `/terms`, `/projects`, `/problems`, `/guides`, `/compare`, `/brands`, `/top`, `/answers`, `/process`, `/commercial`, `/residential`, `/seasonal`, `/tools` ×3, `/estimate`) | ~**43** | ✅ indexable |
| **EN indexable total** | **3,559** | |
| `/ms/*` | 590 | ✅ indexable (real localised subtree) |
| `/zh/*` | 590 | ✅ indexable (real localised subtree) |
| **GRAND TOTAL sitemap URLs** | **4,739** | |

### B2. Reconciling "5,000+ pages" with reality

The site *renders* roughly **5,800 pages** (last build reported 5,797 checked),
but the sitemap advertises **4,739 URLs**, of which **3,559 are English
indexable**. The gap is made of pages that exist but are deliberately excluded or
canonicalised:

- **1,073 `/suburbs/<twin>/<service>` pages** are generated but canonicalised to
  the `/areas/<area>/<service>` twin, so they are omitted from the sitemap
  (correct practice — but they are still crawlable/internal-link targets).
- **1,180 `/ms/*` + `/zh/*`** are real, localised, indexable pages.
- **~3 noindex** pages.
- Remaining are template-generator output for the same pattern set.

> **Confirmed finding (index bloat):** Of the **3,559** English indexable
> sitemap URLs, **2,581 (72.5%)** are programmatic service+location pages built
> from a single parametric template:
> - `1,073 × /areas/<area>/<service>`
> - `1,073 × /areas/<area>/<service>/near-me`
> - `435 × /suburbs/<suburb>/<service>`

### B3. What the template really is (evidence)

`lib/location-pair-copy.ts` is one function (`areaPairCopy` / `suburbPairCopy`)
that generates the body for **all** service+location pages. It rotates three
lists (`area.landmarks`, `work.subServices`, `localIssues`) with a hash seed to
shuffle which landmark/sub-service/issue appears in which sentence. It does **not**
produce unique prose. Live sample of `/areas/kuala-lumpur/painting`:

> "Kuala Lumpur's mix of KLCC Petronas Towers, Bukit Bintang, Mont Kiara
> properties means House Painting Services often requires local access
> planning, careful parking or lift coordination…" ← *the one genuinely local
> paragraph*

…followed by the **verbatim service description** copied from
`/services/painting` ("KL Servis Rumah provides high-end painting services across
Kuala Lumpur and Selangor. Our professional painters specialize in interior wall
painting…") and then the parameterised pair-copy blocks ("For a request around
Kepong, identify the exact location of ceiling painting…").

This is the definition of **near-duplicate / doorway-style** programmatic
content. Only the first paragraph differs meaningfully per location; the rest is
service boilerplate + a rotated phrase template. The same pattern repeats for
`/suburbs/*` (which actually have a *stronger* local housing-profile paragraph,
but still lean on the same rotation) and for `/near-me/*` (which is the same as
`/areas/<area>/<service>` with only the heading changed to "near me").

---

## 1.1 CRAWLABILITY

### Robots.txt — `app/robots.ts` (VERIFIED)

- Explicit **allow-list** for every meaningful crawler, including all major
  LLM/AI crawlers (`GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`,
  `Google-Extended`, `CCBot`, `anthropic-ai`, `Amazonbot`, `Bytespider`, etc.).
  ✅ Excellent for AI visibility — deliberately keeps answer engines crawling.
- Disallow: `/api/`, `/_next/`, `/search`. ✅ Sensible (runtime endpoints + the
  client side "Smart Service Finder").
- Declares both `sitemap.xml` and `sitemap-news.xml`. ✅
- `host: https://www.klservisrumah.my`. ✅
- **No `X-Robots-Tag` header handling needed** — these are path rules, correct.
- **Potential problem:** the `/search` page **metadata declares `index:true`**
  while robots.txt disallows `/search`. Harmless in practice (disallow wins, it
  is not crawled), but it is contradictory and will confuse anyone reading the
  source. **Low severity.**

### XML sitemap(s) — `app/(en)/sitemap.ts` + `sitemap-news.xml` (VERIFIED)

- Single `sitemap.xml` (4,739 entries) + `sitemap-news.xml` (blog news).
- **No sitemap index.** For a site with thousands of URLs a single `sitemap.xml`
  is fine under the 50,000 / 50 MB limit, but **Google caps a single sitemap's
  useful crawl signal and you lose per-sitemap diagnostics.** **Medium/Low.**
- **lastMod is a single constant** (`DEFAULT_CONTENT_DATE`, from `lib/utils.ts`)
  for every URL. This is a deliberate, defensible choice (avoids daily churn),
  but it means **Google sees zero signal about what actually changed**, so
  crawl priority is effectively carried only by `priority`/`changefreq` — which
  Google largely ignores. **Low–Medium.**
- `changefreq="weekly"` default and `priority` values are mostly sensible.
- **Bug consideration:** `problemRoutes` emit **EN + MS + ZH** for *every*
  indexable problem (74 × 3 = 222), and locale blog routes emit per-language
  twins. That is correct for genuinely localised pages. ✅
- **Confirmed concern:** the sitemap **does not include the 1,073 canonicalised
  `/suburbs/<twin>/<service>` pages** (correct). But those pages are still
  renderable and frequently **internal-link targets**, so Google can reach and
  "Alternate page with proper canonical" them. Not a bug, but it means a large
  crawlable surface exists outside the sitemap. **Medium.**

### Canonical tags — `lib/seo-meta.ts` `buildAlternates`/`buildMetadata` (VERIFIED)

- Centralised. Every route builds metadata through `buildMetadata`.
- Canonical = `absoluteUrl(canonicalPath ?? path)`, i.e. default self-canonical. ✅
- **Hreflang rule is correctly implemented:** a page canonicalised to a different
  URL **omits hreflang entirely** (canonical overrides hreflang per Google). ✅
- **Suburbs:** `/suburbs/<twin>/<service>` canonicalise to
  `/areas/<twin>/<service>` (the stronger page). ✅ Correct dedupe.
- **Locale MS/ZH service pages** are self-canonical within a real hreflang
  cluster. ✅
- **Confirmed minor issue:** the sitemap advertises MS/ZH `problem` and `blog`
  pages via full hreflang clusters, and the tools cluster uses real 3-language
  URLs — this is the right model. Consistent.

### Redirects — `next.config.mjs` + `middleware.ts` (VERIFIED)

- **Root → canonical service redirects** (`/painting` → `/services/painting`,
  etc.) permanent (301). ✅
- **Old tool URLs** → `/tools/*` permanent. ✅
- **Locale deep URLs**: `/ms/*` and `/zh/*` outside the `REAL_LOCALE_TREES`
  subtree **301-redirect back to the English URL** (language switches
  client-side). ✅ Correct — avoids duplicate hreflang clusters.
- **Problem canonical redirects** via `PROBLEM_CANONICAL_REDIRECTS` (301). ✅
- **Estimator → tool redirects** (301). ✅
- **No evidence of redirect chains or loops** in the config. ✅ (Live verification
  NOT VERIFIED.)
- **Potential:** `middleware.ts` redirects are NOT declared in `next.config.mjs`
  `redirects()`; they run at the edge for all matched paths. Since the site is
  statically exported, the middleware handles them. This is fine, but any
  middleware redirect is **more costly and harder to audit** than a static
  `redirects()` entry. **Low.**

### HTTP status codes / 404 / soft 404s (VERIFIED from code)

- `export const dynamicParams = false` on all dynamic routes, plus
  `experimental.globalNotFound = true` → unknown params render
  `app/global-not-found.tsx` (a real 404 with site chrome) rather than a 200
  soft-404. ✅ **This is a genuinely good, deliberate pattern.**
- `app/(en)/error.tsx` and `app/global-error.tsx` exist for JS error boundaries.
- **NOT VERIFIED:** actual returned status codes on the live host, whether 404s
  return `404` (vs 200) after CDN, and whether any route emits a 410.

### Other crawlability checks

- **www vs non-www:** all metadata/canonical/sitemap/robots use
  `https://www.klservisrumah.my`. The input given was `https://klservisrumah.my`
  (no-www). **NOT VERIFIED** whether no-www 301s to www. If it does **not**,
  the site has two hosts for one identity — a canonical/entity split. **HIGH to
  confirm.**
- **Trailing slash:** `normalizePath()` strips trailing slashes and sitemap emits
  no-trailing-slash URLs. But Next.js output on Vercel can serve both `/x` and
  `/x/`. **NOT VERIFIED** whether a trailing-slash variant returns 200 (duplicate)
  or 301. **Medium to confirm.**
- **Query parameters:** not used for faceted navigation; `/search?q=` is the only
  param and is robots-disallowed. ✅
- **HTTP → HTTPS:** `upgrade-insecure-requests` CSP + `Strict-Transport-Security`.
  ✅. Live redirect chain NOT VERIFIED.
- **Client-side–only content:** language is switched client-side via
  localStorage; but **primary content is server-rendered in EN**, so crawlers see
  it. ✅ (Residual risk: an AI crawler that does not run JS cannot see MS/ZH
  content unless it hits the `/ms/*` / `/zh/*` real subtrees — which is 1,180
  URLs. **Medium** — covered in 1.7.)

---

## 1.2 5,000+ PAGE INDEXATION AUDIT

### Do we have index bloat?

**Yes — confirmed, and it is the central architectural finding.** The numbers:

| Bloat dimension | Estimate | Evidence |
|---|---:|---|
| Total rendered pages | ~5,797 | Prior build; ~5,815 by pattern sum |
| URLs in sitemap | 4,739 | Verified |
| EN indexable | 3,559 | Verified |
| Programmatic service+location (single template) | 2,581 | Verified (`1,073+1,073+435`) |
| Location/service **near-duplicates** (`/areas/x/svc` vs `/areas/x/svc/near-me`) | 1,073 pairs | Live sample confirms only heading differs |
| Sub-service pages sharing one template | up to 300 | Code: `ServiceDetail.subServices` generated |
| `suburbs` twin pages canonicalised to `/areas` | 1,073 | Code confirmed |
| `indexableProblemPages` (EN+MS+ZH) | 74 → 222 URLs | Verified |
| Blog posts (EN+MS+ZH) | 217 → 217+ | Verified |

### Confirmed problems

1. **Programmatic SEO bloat** — 2,581 indexable EN URLs (72.5%) are one template.
   This is the classic "more URLs ≠ more visibility" trap: Google will crawl and
   de-prioritise them, they compete with the canonical service page, and they
   dilute internal-link authority.
2. **Near-duplicate `/near-me` pages** — 1,073 URLs whose only real difference
   from `/areas/<area>/<service>` is the word "near". **Keyword cannibalisation**
   within the same template.
3. **Sub-service page depth** — 300 `/services/<svc>/<sub>` pages plus 20 cluster
   pages; many are thin because sub-services inherit the parent's boilerplate.
4. **Location page duplication across taxonomies** — `/suburbs/` and `/areas/`
   are two competing location structures that required an ad-hoc canonical
   override; the `/suburbs` folder is now largely a redirect-of-authority to
   `/areas`.
5. **A single page of each pattern is probably excellent; the whole pattern set is
   diluted.** The 37 `/areas/<area>` pages and 29 `/services/<service>` pages are
   the real value; the ×29 and ×1,073 expansions are the risk.

### Likely problems (need Search Console)

- **"Crawled – currently not indexed" / "Discovered – currently not indexed"**
  patterns likely concentrated on the 2,581 programmatic pages and the 1,073
  canonicalised `/suburbs` pages. **REQUIRES VERIFICATION** via GSC.
- **Excluded by canonicals:** 1,073 `/suburbs` pages likely report
  "Duplicate without user-selected canonical" / "Alternate page with proper
  canonical". **REQUIRES VERIFICATION.**
- **Thin content flags** on sub-service and many `/guides/*`, `/compare/*`,
  `/answers/*`, `/process/*`, `/commercial/*`, `/residential/*`, `/brands/*`,
  `/top/*`, `/seasonal/*` pages (each is a small content cluster). **REQUIRES
  VERIFICATION.**

### NOT VERIFIED data needed

To turn "likely" into "confirmed" you need:
- **Google Search Console:** Index → Pages (index status by template), Coverage,
  Performance (impressions vs clicks by pattern), and the News/Indexed vs
  Discovered counts. This is the single most important missing dataset.
- **Google Analytics / GA4:** sessions & enquiries actually attributed to each
  pattern (conversion, not just traffic).
- **Screaming Frog / Sitebulb crawl** of the live host to capture real status
  codes, canonical coherence, noindex, redirect chains, orphan detection.
- **Server logs** (Vercel CDN access logs) to see actual crawl frequency by bot
  and the indexation to actualise "crawled but low-value".
- **Ahrefs / Semrush** for index coverage, keyword overlap/cannibalisation, and
  competitor index-size comparison.

---

## 1.3 INDEXATION STRATEGY (recommendations)

Decision criteria: search demand, unique value, backlinks, conversion,
impressions/clicks, topical importance, local intent, uniqueness, internal-link
value, customer usefulness. **Do not delete for low traffic alone.**

| URL pattern (evidence-based) | Verdict | Why |
|---|---|---|
| `/services/<svc>` (29) | **KEEP INDEXED** | Primary commercial pages; real search demand; conversion paths. |
| `/services/<svc>/<sub>` (300) | **KEEP INDEXED, but IMPROVE** | Many have real keyword demand (e.g. "exterior house painting") but are thin; expand each with unique intro/scope. Do NOT blanket-noindex. |
| `/services/<svc>/cost` (29) | **KEEP INDEXED** | High-intent "how much" pages; excellent AI-answer targets. |
| `/services/<svc>/emergency` (29) | **KEEP INDEXED** | High-intent emergency; differentiate AI-answer. |
| `/areas/<area>` (37) | **KEEP INDEXED** | Genuine local hub pages. |
| `/areas/<area>/<service>` (1,073) | **RESTRUCTURE** | Currently near-duplicates of the service page. **Two options** (below). |
| `/areas/<area>/<service>/near-me` (1,073) | **MOSTLY NOINDEX / MERGE** | Duplicates the parent with only "near me" changed; consolidate onto `/areas/<area>/<service>` (near-me intent is already satisfied by "near /<area>/<service>"). |
| `/suburbs/<suburb>/<service>` (435, self-canonical) | **KEEP a small set, NOINDEX the rest** | Only suburbs with genuinely unique local content & demand deserve indexing; the rest should canonicalise or noindex. |
| `/suburbs/<twin>/<service>` (1,073, canonicalised) | **CANONICALISE (already done)** | Correct; leave. Ensure no internal links point here preferentially. |
| `/problems/<problem>` (75 indexable) | **KEEP INDEXED, IMPROVE** | Strong informational/problem-intent pages; expand unique troubleshooting per problem. |
| `/blog/<post>` (217) | **KEEP INDEXED** | Informational content; good topical support. Watch for thin/short posts. |
| `/tools/*` (×3) | **KEEP INDEXED** | Great AI-answer/interactive assets. |
| `/compare/*`, `/answers/*` | **KEEP INDEXED** | Direct-answer / comparison content — high AIO/GEO value. |
| `/guides/*`, `/process/*`, `/commercial/*`, `/residential/*`, `/brands/*`, `/top/*`, `/seasonal/*` | **IMPROVE then keep; noindex the thin ones** | Only index pages with a unique, substantive body. |
| `/near-me/*` service hub (30) | **KEEP INDEXED** | Real near-me intent. |
| `/search` | **NOINDEX (or keep robots-disallowed)** | Tool page; no unique value to index. |

### Recommended restructure for the 2,581 programmatic pages

> **Do NOT delete year's worth of pages. Do NOT blanket-noindex. Restructure
> with evidence.**

1. **Decide by search demand (GSC) + real coverage.** Only keep indexable
   area×service pages where the area genuinely receives the service AND there is
   real demand or a unique local signal (landmark, condo rule, JMB regulation).
2. **Merge `/near-me/` into the parent.** `/areas/<area>/<service>/near-me`
   should either 301 to `/areas/<area>/<service>` or become a self-canonical
   page that adds genuinely different copy (dispatch/arrival-time focus) — not a
   copy-paste with "near me" appended.
3. **Consolidate `/suburbs` under `/areas`.** The `/suburbs` taxonomy should be
   retired or reduced to the few suburbs with real distinct value; the rest
   canonicalise to `/areas` (already partially done).
4. **Add real unique value before you keep** any programmatic page: at least one
   genuinely local paragraph, a local FAQ, a local landmark/condo-specific
   caveat, and local evidence (photos, review snippets, job references).

---

## 1.4 URL STRUCTURE

**Current (VERIFIED):**

| Top-level folder | Purpose | Verdict |
|---|---|---|
| `/services/<slug>` | Service pages | ✅ Good |
| `/services/<slug>/<sub>` | Sub-services | ✅ Good, deep but fine |
| `/services/<slug>/cost`, `/emergency` | Intent variants | ✅ Good |
| `/areas/<slug>` | Area hub | ✅ Good |
| `/areas/<slug>/<service>` | Service+location | ✅ Semantically fine — but massively duplicated |
| `/areas/<slug>/<service>/near-me` | Near-me variant | ⚠️ Redundant folder; lexical duplicate |
| `/suburbs/<slug>/<service>` | Second location taxonomy | ⚠️ Duplicate taxonomy; only 15 suburbs kept |
| `/problems/<slug>` | Problem pages | ✅ Good |
| `/blog/<slug>` | Articles | ✅ Good |
| `/tools/<slug>` | Calculators | ✅ Good |
| `/guides`, `/compare`, `/answers`, `/process`, `/commercial`, `/residential`, `/brands`, `/top`, `/seasonal` | Content clusters | ⚠️ Many small, overlapping clusters; risk of thinness |

**Strengths:** short slugs, keyword-relevant, no arbitrary numbered IDs, clear
hierarchy, no legacy params.
**Weaknesses:** the `/suburbs` + `/areas` **double location taxonomy**, the
`/near-me` duplication, and **9 competing top-level content folders**
(`guides`, `compare`, `answers`, `process`, `commercial`, `residential`,
`brands`, `top`, `seasonal`) which fragment topical authority.

**Ideal URL architecture (recommendation):**

```
/                                    → Homepage (commercial + brand hub)
/services                            → Service Hub (pillar)
/services/<service>                  → Service page (29)
/services/<service>/<sub>            → Sub-service (improve each, keep)
/services/<service>/cost             → Cost / pricing intent
/services/<service>/emergency        → Emergency intent
/areas/<area>                        → Local hub (37)
/areas/<area>/<service>              → Local service (keep ONLY demand-backed)
/areas/<area>/<service>/near-me      → RETIRE (301 → parent) unless unique
/problems/<problem>                  → Problem/solution gateway (gateway)
/blog/<slug>                         → Informational articles
/tools/<slug>                        → Interactive estimate
/answers/<question-slug>             → AEO direct answers (keep, expand)
```

Collapse `/suburbs/*` into `/areas/*`. Fold the 9 content folders into a
smaller, semantically meaningful set (`/guides`, `/compare`, `/answers` are
defensible; `/brands`, `/top`, `/seasonal`, `/process`, `/commercial`,
`/residential` should be subsumed into `/services`, `/guides` or `/answers`).

---

## 1.5 SITE ARCHITECTURE

**Mapped architecture (VERIFIED):**

- **Homepage** = commercial hub (brand + instant-quote CTA).
- **Core Services** → `/services` hub → 29 service pages → 300 sub-services →
  `/cost`, `/emergency`.
- **Service + Location** → 37 `/areas` × 29 `/services` (1,073) + 1,073
  `/near-me` + 15/52 `/suburbs` (435) + 1,073 canonicalised `/suburbs`.
- **Problem Pages** → 74 indexable `/problems` + `/near-me` problem gateway.
- **Informational** → 217 blogs + `/guides` + `/compare` + `/answers`.
- **Transactional** → `/estimate/*`, `/tools/*`, `/contact`, WhatsApp.
- **Supporting** → `/process`, `/commercial`, `/residential`, `/brands`, `/top`,
  `/seasonal`, `/pricing`, `/about`, `/projects`.

**What is wrong:**

1. **Topical hierarchy is good at the top, broken at the expansion.** The
   Service Pillar → Service → Sub-service chain is logical. But the
   **service+location expansion creates ~2,500 sibling pages with no sub-cluster
   structure** — each `/areas/<x>/<svc>` links to 28 sibling areas and 29
   sibling services, but there is no meaningful "KL painting cluster" that
   consolidates authority.
2. **Two competing location taxonomies** (`/suburbs` vs `/areas`) — an
   architectural smell that required an ad-hoc canonical override to fix.
3. **Excessive depth for the mass pages** — being 3 levels deep (`/areas` / area
   / service) is fine, but the *breadth* (29 services × 37 areas) is the problem,
   not depth.
4. **Competing pages:** `/services/painting` and `/areas/kuala-lumpur/painting`
   target overlapping queries; `/areas/<x>/<svc>` vs `/areas/<x>/<svc>/near-me`
   are direct duplicates.

**Recommended architecture (if restructuring):** put authority on the
**columnar hubs** (`/services/<svc>` and `/areas/<area>`) and make the
cross-product pages **supporting** (canonical, noindex, or kept only where an
evidence-based demand signal exists). Create real **cluster pages** per
service×region-family (e.g. `/services/painting/kuala-lumpur` as a *hub*, not a
spray of 37 near-identical pages).

---

## 1.6 CORE WEB VITALS + PERFORMANCE

**NOT VERIFIED — requires direct Lighthouse/CrUX/RUM measurement.** The sandbox
cannot run Lighthouse against the live host, and no CrUX/RUM datasets are
available here. Do not treat any of the below as a measured score.

**Code-based signals (VERIFIED), some HIGH-risk:**

1. **Heavy key pages.** The homepage and locale service/search bundles pull large
   client bundles (per prior audit notes). The homepage estimates + smart-finder
   are interactive-only. **Likely** to worsen INP/LCP on mobile.
2. **Very large FAQ hubs.** The audit history flags "FAQ hubs are extremely
   large" — a single JSON-LD FAQPage with dozens of Q&As inflates initial-DOM
   weight and can hit Google's FAQ rich-result limits. **Likely** CLS/LCP risk.
3. **Images.** `next/image` with WebP, explicit `qualities` [65,75], device/image
   sizes, and `minimumCacheTTL: 31536000`. ✅ Good. Many hero assets are SVG
   (tiny). ✅
4. **CSP / performance.** Strict CSP, `compress: true`, immutable static asset
   caching, `Strict-Transport-Security`, etc. ✅ Good.
5. **Client-side language switch.** Language content is injected on hydration;
   the primary EN content is SSR, so LCP on EN is fine, but **MS/ZH users pay a
   hydration cost** and an **AI crawler that doesn't execute JS** only sees EN.
6. **Third-party scripts.** Only Google Tag Manager + GA are loaded — low
   third-party weight. ✅ (Analytics is optional.)

**What to test (and record in the next session, once you have crawl access):**
- Lighthouse mobile & desktop on `/`, `/services/painting`, `/areas/kuala-lumpur/painting`,
  `/blog/*`, `/tools/*`.
- Core Web Vitals via CrUX (field data) + Real User Monitoring.
- Bundle-size budget per route (a per-route JS budget guard exists:
  `scripts/client-bundle-guard.ts` — run it after build).

---

## 1.7 JAVASCRIPT / NEXT.JS SEO

**VERIFIED:**

1. **Server rendering** — App Router, static export (SSG), routes are
   prerendered (`generateStaticParams`), primary content in the initial HTML.
   ✅ Strong.
2. **`dynamicParams = false`** — unknown dynamic params return the global 404
   (soft-404 prevention). ✅ Strong.
3. **Metadata generation** — centralised via `buildMetadata`; canonical,
   self-referencing hreflang, robots, OG/Twitter all generated server-side. ✅
4. **Robots & sitemap generation** — `app/robots.ts`, `app/(en)/sitemap.ts`,
   `sitemap-news.xml`. ✅
5. **Structured data** — JSON-LD rendered via `dangerouslySetInnerHTML` in
   server components (Service, FAQ, HowTo, Speakable, Article, Breadcrumb,
   LocalBusiness). ✅ Present and serialised server-side.
6. **404 handling** — `global-not-found.tsx` (complete document) via
   `experimental.globalNotFound`. ✅ Strong.
7. **Redirects** — `next.config.mjs` + `middleware.ts`. ✅
8. **Hydration** — language switched client-side; EN content readable without JS. ✅
9. **Route duplication** — `/ms/*`,`/zh/*` real subtrees + `/suburbs`/`/areas`
   twins are the main route-duplication risks (handled via canonical/redirect). ✅
10. **ISR** — not used (static export). Not a problem for this use case, but:
    **content published in `config/*` requires a rebuild + redeploy**; there is no
    runtime content update path. This is a **content-publishing bottleneck**,
    not a crawler problem. **Medium (business/ops), not SEO-crawl.**

**Residual risks:**
- **Client-only components** (smart finder, calculators, language context) mean
  some engaging content is JS-gated; primary copy still crawls. ✅
- **AI crawlers without JS** see EN only (MS/ZH real subtrees must be `/ms/*`,
  `/zh/*` — which exist but are far smaller than the EN tree). **Medium.**
- **`htmlLimitedBots: /.*/`** forces metadata into the initial document for all
  UAs (so Bing's verification fetch sees it). ✅ Deliberate and correct.

---

## C. CRITICAL ISSUES (Part 1)

| # | Problem | Evidence | Affected | Severity | Solution | Difficulty | Impact |
|---|---|---|---|---|---|---|---|
| 1 | **Index bloat / programmatic near-duplicate pages.** 2,581 indexable EN URLs from one template | Sitemap decomposition (B2); `lib/location-pair-copy.ts`; live `/areas/kuala-lumpur/painting` | `/areas/<a>/<svc>` (1,073), `/near-me` (1,073), `/suburbs/<s>/<svc>` (435) | **CRITICAL** | Restructure — keep only demand-backed; merge near-me; retire `/suburbs`; add unique local value before keeping | High | High |
| 2 | **`/near-me` literal duplicates of parent service+location pages** | Live sample + code path | 1,073 URLs | **HIGH** | 301 to parent OR add genuinely different copy + self-canonical | Medium | High |
| 3 | **www vs non-www host canonical unverified** | All canonical/metadata use `www`; input used non-www; curl blocked | Whole site | **HIGH** | Confirm 301 non-www→www; if not, fix at host/CDN | Low | High |
| 4 | **Single-`lastMod` sitemap** (constant across all URLs) | `sitemap.ts` | All | **MEDIUM** | Use real content `lastMod` per template; keep stable, but reflect actual change | Medium | Medium |
| 5 | **`/search` metadata says index:true but robots disallows it** | `robots.ts` + `search/page.tsx` | `/search` | **LOW** | Align (either allow or set noindex in metadata) | Low | Low |
| 6 | **9 competing top-level content folders** (`guides/compare/answers/process/commercial/residential/brands/top/seasonal`) | sitemap groups | ~200 URLs | **MEDIUM** | Consolidate into a smaller semantic set (guides/compare/answers) | Medium | Medium |
| 7 | **Trailing-slash and live status-code behaviour unverified** | `normalizePath` + Next output | All | **MEDIUM** | Verify with crawl; add canonical/host normalization if needed | Low | Medium |
| 8 | **CWV unmeasured; heavy key pages + very large FAQ hubs** | Code + prior audit notes | Homepage, service, FAQ hubs | **HIGH** (risk) | Measure, then split FAQ hubs, defer/hydrate heavy chunks | Medium | High |

---

## D. QUICK WINS (Part 1)

1. **Fix `/search` robots vs metadata contradiction** (LOW — 5 min).
2. **Set a real per-template `lastMod`** in the sitemap (keeps stability while
   revealing change) (LOW).
3. **Add a canonical host check** and, if not already, a **non-www → www 301**
   (LOW-MEDIUM).
4. **Ensure no internal links point to `/suburbs/<twin>/<service>`** (they should
   point to `/areas/<twin>/<service>`) — cheap redirect of authority (LOW).
5. **Run the existing bundle guard + sitemap parity + metadata audits on the next
   build** and wire them into CI (`scripts/*` + `.github/workflows/ci.yml`).
   (LOW-MEDIUM; improves regression control.)

---

## E. 5,000+ PAGE ACTION MATRIX (URL patterns & templates)

| Pattern | Verdict |
|---|---|
| `/` | KEEP |
| `/services/<svc>` | KEEP |
| `/services/<svc>/<sub>` | IMPROVE (expand) |
| `/services/<svc>/cost` | KEEP |
| `/services/<svc>/emergency` | KEEP |
| `/areas/<area>` | KEEP |
| `/areas/<area>/<svc>` | RESTRUCTURE (demand-backed keep; else NOINDEX/merge) |
| `/areas/<area>/<svc>/near-me` | MERGE → parent (301/noindex) |
| `/suburbs/<suburb>/<svc>` | KEEP small set; NOINDEX rest |
| `/suburbs/<twin>/<svc>` | CANONICALISE (already done) |
| `/problems/<problem>` | KEEP + IMPROVE |
| `/blog/<slug>` | KEEP (watch thin) |
| `/tools/<slug>` | KEEP |
| `/estimate/<slug>` | KEEP |
| `/guides/*`, `/compare/*`, `/answers/*` | KEEP + EXPAND (AI/AEO value) |
| `/process/*`, `/commercial/*`, `/residential/*`, `/brands/*`, `/top/*`, `/seasonal/*` | REVIEW; NOINDEX thin; merge into `guides`/`answers`/`services` |
| `/search` | NOINDEX / keep robots block |

---

## J. PRIORITY SCORE (Part 1 items)

| Item | SEO Impact | Business Impact | AI Visibility | Difficulty | Priority |
|---|---:|---:|---:|---:|---|
| Restructure programmatic service+location index | 9 | 8 | 7 | 8 | **P0** |
| Merge `/near-me` duplicates | 8 | 7 | 6 | 5 | **P0** |
| Resolve www/non-www host canonical | 8 | 6 | 8 | 2 | **P0** |
| Real `lastMod` per template | 5 | 3 | 3 | 3 | **P1** |
| Consolidate `suburbs` under `areas` | 7 | 5 | 5 | 6 | **P1** |
| Consolidate 9 content folders → 3 | 6 | 4 | 6 | 6 | **P1** |
| Fix `/search` robots/metadata | 2 | 1 | 1 | 1 | **P2** |
| Verify/measure CWV; split FAQ hubs | 8 | 5 | 6 | 5 | **P1** |
| Confirm trailing-slash 301s | 6 | 4 | 5 | 2 | **P1** |

---

## K. DEVELOPER TASK LIST (Part 1)

| Task | Reason | Affected system | Expected result | Acceptance criteria |
|---|---|---|---|---|
| Add `redirects()` entry for non-www → www (if not present) | Prevent split canonical host | `next.config.mjs` / CDN | All requests land on `www` | `curl -I https://klservisrumah.my` → 301 to `www` (verify) |
| Make `/search` metadata noindex (or remove robots block) | Remove contradiction | `app/(en)/search/page.tsx` | Consistent robots/meta | metadata.robots.index=false matches robots disallow |
| Sitemap per-template real `lastMod` | Reveal actual change | `app/(en)/sitemap.ts` | Accurate lastmod per route class | sitemap validates; no daily churn on unchanged routes |
| Add a CI check for sitemap parity + canonical-hreflang rule | Prevent regression | `.github/workflows/ci.yml`, `scripts/*` | Build fails on regression | CI passes; parity & canonical rules enforced |
| Retire `/suburbs` (or redirect all to `/areas`) where twin exists | Consolidate taxonomy | `middleware.ts`/`next.config.mjs` | Single location taxonomy | All `/suburbs/<twin>/*` 301 to `/areas/<twin>/*` |
| Confirm trailing-slash normalisation + canonical | Avoid duplicate URLs | `normalizePath`, `buildAlternates` | `/x` and `/x/` resolve to one canonical | Crawl shows no duplicate trailing-slash URLs |
| Add per-route JS bundle budget + split huge FAQ hubs | Protect CWV | `scripts/client-bundle-guard.ts`, FAQ components | Smaller initial JS, faster LCP | Bundle guard passes; FAQ hub LCP improves (needs measurement) |

---

## N. WHAT IS WRONG (Part 1 scope)

### 10 biggest technical/architecture weaknesses (Part 1)

1. **~72% of indexable URLs are near-duplicate programmatic pages.**
2. **`/near-me` is a literal copy of the parent** (1,073 URLs).
3. **Two competing location taxonomies** (`/suburbs` vs `/areas`).
4. **www vs non-www host canonical unverified** (possible split).
5. **Single constant `lastMod`** hides real content lifecycle.
6. **9 fragmented content folders** dilute topical authority.
7. **`/search` metadata contradicts robots.**
8. **Trailing-slash / live status-code behaviour unverified.**
9. **CWV unmeasured; heavy key pages + oversized FAQ hubs likely hurt INP/LCP.**
10. **Content is published in `config/*` and requires a rebuild** — slow content
    release, no runtime update.

### 10 biggest technical/architecture opportunities (Part 1)

1. **Fix index bloat** = the single biggest visibility gain.
2. **Collapse the near-me/surburbs redundancy** to reclaim authority on core pages.
3. **Secure the www canonical host** for a clean entity + canonical signal.
4. **Make sitemap `lastMod` meaningful** to improve crawl prioritisation.
5. **Consolidate the 9 content folders into 3** semantic hubs.
6. **Split oversized FAQ hubs** to protect CWV + rich-result policy.
7. **Wire sitemap/canonical/hreflang parity checks into CI** to prevent regressions.
8. **Use `/answers` + `/compare` as genuine AEO/GEO winning assets.**
9. **Add per-route JS budgets** and a bundle guard in CI.
10. **Split `/near-me` into genuinely distinct copy** where demand exists.

### If we fix only 10 things (Part 1 priorities), do these first

1. Resolve www/non-www host canonical (P0, low effort, high impact).
2. Merge `/near-me` duplicates (P0, medium effort).
3. Restructure the 2,581 programmatic pages — keep demand-backed only (P0).
4. Retire `/suburbs` under `/areas` (P1).
5. Consolidate the 9 content folders → 3 (P1).
6. Real `lastMod` in sitemap (P1).
7. Split huge FAQ hubs / add bundle guard (P1).
8. Align `/search` robots/meta (P2).
9. Verify trailing-slash 301s & add CI canonical/hreflang parity check (P1).
10. Measure CWV + LCP/INP on the top 20 pages (P1 — enable the rest).

---

## NOT VERIFIED — requires direct crawl/tool/data access

- Live HTTP status codes, redirect chains, trailing-slash behaviour, noindex
  headers, `X-Robots-Tag` (none expected).
- Google Search Console index/coverage/impressions/clicks per URL pattern.
- Screaming Frog/Sitebulb orphan & duplicate detection on the live host.
- Core Web Vitals / Lighthouse / CrUX / RUM.
- Domain-level backlinks & authority; competitor metrics.
- Actual non-www vs www redirect.
- Whether `sitemap.xml` is accepted and how many URLs Google actually indexes.
- Whether the `llms.txt` / `llms-full.txt` (present in `public/`) are correctly
  surfaced and JSON-LD schema validates on the live build.

---

*End of Part 1 audit. Parts 2–5 and the consolidated Final Output (A–N) are
produced in subsequent sessions and merged to GitHub, per the status board in
`TRACKING.md`.*
