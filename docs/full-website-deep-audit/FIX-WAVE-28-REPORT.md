# Fix Wave 28 — Live Production Verification + Trilingual Price-Unit Leaks + Locale-Tree Edge Fix (2026-08-31)

> Scope: the tracker verified the merged Wave-26/27 tree was fully on gates with
> only **owner-blocked** PENDING rows. This session took the one angle no
> previous session had used — **external live-production verification** — and it
> immediately surfaced a new class of unblocked code defects: leaks and edge
> behaviors that escaped every repo gate because they live in **href
> attributes**, **template-token substitution**, **localized unit strings** and
> the **edge middleware whitelist**. All were fixed and permanently gated the
> same day. The last P0 (www/non-www host canonical) was **verified externally**
> for the first time. No owner facts were invented; every owner-blocked row
> remains untouched.

---

## 1. Live production verification (new capability)

Direct egress from the sandbox shell is blocked, but the agent fetch/search
tools route externally and **report the final resolved URL**, which turns them
into a usable redirect probe. Probes run against
`https://www.klservisrumah.my` (production, 2026-08-31):

| Probe | Request | Resolved URL / observed | Verdict |
|---|---|---|---|
| Canonical host | `https://www.klservisrumah.my/` | itself, 200 | ✅ |
| Bare domain TLS | `https://klservisrumah.my/` | `https://www.klservisrumah.my/` | ✅ redirects to canonical |
| Bare domain HTTP | `http://klservisrumah.my/` | `https://www.klservisrumah.my/` | ✅ redirects to canonical |
| www HTTP | `http://www.klservisrumah.my/` | `https://www.klservisrumah.my/` | ✅ redirects to canonical |
| BP-1 retired near-me | `/areas/cheras/painting/near-me` | 301 → `/areas/cheras/painting` | ✅ BP-1 live |
| robots.txt | `/robots.txt` | AI-bot rules incl. DuckAssistBot/Applebot-Extended; `Host: https://www.klservisrumah.my` | ✅ current |
| sitemap.xml | `/sitemap.xml` | serves; incl. `/ms/harga`, `/zh/pricing`, trilingual tool URLs | ✅ current (deploy ≥ Wave 24) |
| llms.txt | `/llms.txt` | 29/29 services (aircon + awning), aeo-faq.txt link | ✅ current |
| Area pair copy | `/areas/cheras/painting` | Wave-26 authored profile copy ("meeting reference", no landmark salad) | ✅ deploy ≥ Wave 26 |
| Homepage CTAs | `/` | "View details & pricing" / "Get a fixed quote" | ✅ deploy ≥ Wave 25 |
| MS cost route | `/ms/services/painting/cost` | 200, BM content | ✅ live |
| **`/ms/harga`** | `/ms/harga` | **resolved `/harga` → 404** | ❌ **EDGE BUG (W28-4)** |
| **`/zh/pricing`** | `/zh/pricing` | **301 → `/pricing` (EN URL)** | ❌ **EDGE BUG (W28-4)** |
| **`/ms/pricing`** | `/ms/pricing` | **→ `/ms/harga` → `/harga` → 404** | ❌ **EDGE BUG (W28-4)** |

Google index spot-check (`site:` query) returns `www.` URLs only — consistent
with a correctly consolidated canonical host.

**W28-5 — P0 Critical #3 (www/non-www host canonical) → ✅ VERIFIED
EXTERNALLY.** All four scheme×host variants resolve to
`https://www.klservisrumah.my`; robots.txt `Host:` agrees; `lib/seo.ts`
`baseUrl` agrees; index shows www URLs. Limitation recorded honestly: the
fetch tool shows the final URL, not the hop chain, so a single-301 vs chained
redirect count could not be measured — a one-off `curl -I` by the owner
remains a nice-to-have micro-check, not a blocker.

---

## 2. Findings fixed (all unblocked, all found via the live probes)

### W28-4 — Localized pricing hubs unreachable at the edge ✅ (§5.4-B1 delivery bug)

**Problem.** `middleware.ts` `REAL_LOCALE_TREES` never listed `/ms/harga` or
`/zh/pricing`, so the edge 301-stripped the locale prefix: `/ms/harga` →
`/harga` (**404**), `/zh/pricing` → `/pricing` (EN), and the alias chain
`/ms/pricing` → `/ms/harga` → `/harga` 404'd as well. The pages were built,
sitemap-listed (4,114 URLs) and footer-linked via `hubPath()` since Wave 24 —
Wave 24's build-level gates could not see the middleware strip, and Wave 25's
`/search` fix was a one-entry patch of the same class with no systematic
check. Same whack-a-mole class as P3-15; now closed permanently.

**Fix.** Whitelist entries added; new prebuild gate `audit:locale-trees`
(`scripts/audit-locale-trees.ts`) derives the expected tree set from
`app/(ms)/ms/**` + `app/(zh)/zh/**` route directories and asserts the
whitelist covers **every one bidirectionally** (missing *and* stale entries,
subpath-aware for deep trees like `/ms/guides/maintenance`). Negative-tested:
removing `/ms/harga` fails prebuild.

**Prod-server verification** (`next start`, same middleware the edge runs):

```
/ms/harga → 200 | /zh/pricing → 200 | /ms/pricing → 308→/ms/harga → 200
/zh/jiage → 308→/zh/pricing → 200 | /ms/search /zh/search → 200
/areas/cheras/painting/near-me → 301→ parent (BP-1 regression ✓)
/ms/services/painting/cost → 200 | /zh/services/tiling/cost → 200
/painting → 308→/services/painting | /ms/alatan → 200 — 12/12 correct
```

### W28-1 — Trilingual price-unit leaks in the service registry ✅

**Problem.** BM/中文 localized price strings carried English unit tokens —
surfaced live as "Dari RM 14 / sq ft" (BM tiles) and "从 RM 14 / sq ft 起"
(中文 tiles) on the pricing hubs, cost-page rate tables, the generated quote
catalog and estimator pickers:

- ms `sq ft` prices: tiling ×11, plaster-ceiling ×10, skim-coat ×2 → **kaki persegi**
- zh `sq ft` prices: tiling ×11, plaster-ceiling ×10, skim-coat ×2 → **平方英尺**
  (the authored-majority zh unit; ceiling/flooring/epoxy rows already use it)
- ms half-translation "Dari RM 22 / linier ft" → **kaki linier**
- ms desc "1,000 sqft keseluruhan" → kaki persegi; zh desc "1,000 sqft 公寓" → 平方英尺
- ms electrical ×7 "/ point" → **/ titik** ("power point" fixture name kept)
- ms FAQ "RM 8–12 setiap sq ft" → kaki persegi
- 6 localized meta descriptions with `Dari RM14/sqft.` / `从 RM10/sqft 起。` style
  strings → fully localized

**50 registry strings fixed** (`config/services-data.ts`); the generator
re-emitted `config/quote-catalog.generated.ts` (no hand-edits, per standing
rule). New prebuild gate `audit:price-i18n` (`scripts/audit-price-i18n.ts`)
scans every string inside every `i18n.ms`/`i18n.zh` branch for EN area/linear
units, EN price prefixes and EN billing units after a slash. Negative-tested.

### W28-2 — `{name}` template placeholders rendered literally on all 87 cost pages ✅

**Problem.** Two `costPage` headings were rendered without their `{ name }`
variable: `methodHeading` ("Dari mana harga **{name}** ini datang" — seen on
the live BM cost page) and `processSub`. Every key had been authored with
`{name}`; the call-sites passed none. **174 visible placeholder leaks**
(2 × 29 services × 3 locales).

**Fix.** Call-sites now pass `{ name: service.title }`. New `audit:html`
check **#16 raw-template-placeholder** scans script-stripped readable text on
all 4,141 built pages for `\{token\}` — it caught the second leak on its first
run (87 pages) before the second fix, proving both the gate and the sweep.

### W28-3 — English WhatsApp prefill leaks ✅

**Problem.** Three surfaces built `wa.me?text=` prefills that inject English
into BM/中文 visitors' messages to the dispatch desk (invisible to text-only
leak scans because the leak lives in an href attribute):

1. Cost body: `` `${service.title} cost quote` `` →
   "…perkhidmatan Perkhidmatan Mengecat Rumah **cost quote** untuk harta saya"
   on all 87 cost pages. Now passes the localized title only — the template
   already asks for a quote in-language (P4-08 `serviceNameGeneric` rule).
2. Tools index (`/ms/alatan`, `/zh/gongju`): both hero + CTA card links called
   `getWhatsAppLink({ service })` **without `lang:`** → English template with
   a localized label inside. `ToolsIndexPage` now takes a `locale` prop from
   all three routes and passes `lang: locale`.
3. Cost-page worked example quoted the **English rate-book** string:
   "2 × pengecatan Rumah Interior pada **RM 450 / room** = RM 900". Now quotes
   the localized published rate (`cleanAmount()` extended to strip the
   从…起 wrapper): BM "RM 450 / bilik", 中文 "RM 450 / 房间".

**Fix verified in built HTML** (script-stripped): MS alatan prefills fully BM
("Salam … sebut harga untuk perkhidmatan …"), ZH gongju prefills fully 中文,
cost-page prefills carry no English. New `audit:html` check **#17
wa-prefill-locale-leak** decodes every `wa.me` href on `/ms|/zh` pages and
fails on English template phrases.

### W28-1b — ZH/MS pricing-hub badge carried the English startPrice unit ✅

`LocalePricingContent` rendered the registry's English `startPrice`
("RM 14 / sq ft") verbatim in the badge on localized hubs. Now localized via
the same `localizeUnits()` swap the DirectAnswer card uses (P3-05). Verified:
built `/zh/pricing` visible text has **0 "sq ft"** (badge 平方呎 rate-swap,
rows 平方英尺 authored).

---

## 3. Gate results (full suite re-run on the fixed tree)

| Gate | Result |
|---|---|
| `prebuild` (now incl. `audit:price-i18n` + `audit:locale-trees`) | **329,897 assertions × 0** |
| `type-check` / `lint` | PASS / 0–0 |
| `build` | **4,141 static HTML** (unchanged count) |
| `audit:links` | 312,968 rendered + 55 source → **0 broken** |
| `audit:html` (now incl. checks #16/#17) | **0 fatal / 0 warnings** |
| `audit:meta` | 0 JSON-LD failures · 0 NAP-missing · 0 breadcrumb mismatch · 0 generic anchors |
| `seo:audit` / `audit:seo-head` | PASS / PASS |
| `audit:schema-size` / `audit:raster-og` | PASS / PASS |
| `audit:location-similarity` | 68.8 / 63.8 / 68.2 / 50.5 % max — < 70% (unchanged) |
| Prod-server middleware probes | 12/12 correct incl. both fixed hubs |

---

## 4. New permanent protection (summary)

| Gate | Layer | Protects |
|---|---|---|
| `audit:price-i18n` | prebuild (source) | No EN unit/prefix inside any BM/中文 registry field |
| `audit:locale-trees` | prebuild (source, bidirectional) | Middleware whitelist can never lag behind or rot vs real `/ms|/zh` routes |
| `audit:html` #16 raw-template-placeholder | post-build (rendered corpus) | No raw `{token}` in any visible text |
| `audit:html` #17 wa-prefill-locale-leak | post-build (rendered corpus) | No English WhatsApp prefill phrases on `/ms|/zh` pages |

## 5. Known-minor editorial note (not a leak, owner/translator call)

zh strings use both "平方呎" (estimator noun + `localizeUnits` swap) and
"平方英尺" (authored price majority) — both correct Chinese for *sq ft*, one a
Cantonese-style contraction. Standardizing on one form is a terminology
decision, not a defect; recorded here so it is not "rediscovered" as a leak.

**Owner-blocked items remain exactly as before** (reviews/facts, photography,
bios, outbound citations, GSC keep-set, edge-console micro-checks). The code
backlog is once again fully actioned.
