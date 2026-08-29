# FIX WAVE 12 — P3-04 COST-PAGE DIRECTANSWER (+ P3-05 AI-SURFACE PRICE FIX)

**Date:** 2026-08-29
**Branch:** arena/01a04e39-klservisrumah-web
**Scope:** Part 3 **P3-04** (P1 — the highest-priority *unblocked* ⏳ PENDING item on
`TRACKING.md` when this session started) plus the last two live **P3-05** AI-surface
price defects found while verifying it.

Part 3 §3.1:

> **P3-04 — MEDIUM: cost pages never literally answer "How much does {service} cost
> in KL & Selangor?"** … 29 `/services/<svc>/cost` pages contain the FAQ question
> "What affects {Service} cost?" but **no question-H2 literally asking/answering the
> headline "how much" query, and no DirectAnswer card.** … "how much does X cost in
> KL" is the single highest-intent query for this business and the exact query AI
> Overviews answer; the dedicated cost pages don't answer it in the extractable,
> citable format. **Fix:** Add a DirectAnswer block to cost pages: `How much does
> {service} cost in KL & Selangor?` → 2–3 sentence answer citing the published
> starting price (with units) + link to the estimator. Expand pages per P2-18.

The "expand pages" half was already closed by **CF-4** (29 cost pages: mean 543 →
1,373 words). This wave closes the DirectAnswer half and gates it.

Owner-blocked items (www canonical, BP-1 phase 2 / P2-C4 keep-set, reviews
P2-21/P4-09, photography P5-12, stats verification P3-09) remain **untouched and
⏳** per TRACKING.md.

---

## 1. Verified starting state (measured, not assumed)

| Evidence | Command / source | Result |
|---|---|---|
| No DirectAnswer card existed on any cost page | `git show HEAD:components/sections/locale-service-cost-view.tsx \| grep -c "quick-answer\|DirectAnswer"` | **0 occurrences** |
| The literal "how much" phrase existed only as the page **H1** | `git show HEAD:messages/en.json` → `costPage` keys containing "how much" | **`['h1']`** of 61 keys |
| Corpus baseline for the pattern | committed `docs/audit-part3-aggregate.json` @ `2026-08-29T04:32Z` (3,669 pages) | `/services/<svc>/cost` n=29 — **`pctQuickAnswer: 0`**, `pctQuestionH2: 100`, `pctFaqSchema: 100`, `meanWords: 25` |

`pctQuestionH2: 100` at baseline is real (headings are regexed out of the raw HTML)
but those question H2s were *"What affects {svc} cost?"* and *"Need an exact {svc}
quote?"* — never the headline "how much" query.

---

## 2. What was built

### 2.1 One pure builder, two consumers, zero drift

| File | Role |
|---|---|
| `lib/cost-direct-answer.ts` | **NEW.** Pure, registry-free, message-JSON-free builder: `hasPublishedPrice()`, `buildCostUnitBasis()`, `buildCostDirectAnswerVars()`, `buildCostDirectAnswer()`, `buildCostDirectAnswerPills()`, `COST_DIRECT_ANSWER_KEYS`. |
| `components/sections/locale-service-cost-view.tsx` | Renders the card (client-localized, so the card is in-language for EN/BM/中文 — unlike the service hubs, whose English answer needs separate BM/中文 sub-notes). |
| `app/(en)/services/[slug]/cost/page.tsx` | Injects **the same** question+answer as the **first** `FAQPage` `Question`, built by the same functions against the EN dictionary. |
| `components/content/direct-answer.tsx` | New optional `actions?: { href, label }[]` row (rendered with `next/link`, so it works in the server and client components that already use the card). Existing callers unaffected. |
| `messages/{en,ms,zh}.json` | 8 new `costPage.directAnswer.*` keys × 3 locales (question, answer, answerQuoteOnly, perUnit, unitSeparator, pill1–3). |

**Why the builder is shared:** part 5's `faqSchemaNoVisibleMatch` compares the first
marked-up `Question` against the rendered text. Server-side schema and client-side
render are produced by *the same two function calls*, so they cannot drift. Verified
on the built corpus: **29/29 cost pages** have the first `FAQPage` Question present in
the visible HTML, and **0 pages site-wide** report `faqSchemaNoVisibleMatch`.

**Why no BM/中文 sub-notes here:** the service hubs need them because their answer
sentence is assembled from *English* registry fields. The cost card is translated as a
whole by the page's own translator, so sub-notes would just duplicate the answer in a
second language on a page already rendered in that language.

### 2.2 The card (rendered, `/services/painting/cost`)

> **Direct Answer · Jawapan Ringkas · 直接答案**
> ### How much does House Painting Services cost in KL & Selangor?
> House Painting Services in KL & Selangor starts from **RM 450**; the **4** published
> rates below are priced **per room, per job**. Every figure is confirmed in writing
> before work starts, while access, materials and site condition move the final number
> — run the House Painting Services estimator for an instant ballpark, then send
> photos and measurements for a fixed written quote.
> `[Open the House Painting Services estimator]` `[WhatsApp for Quote]`
> ✓ Published rate book · ✓ Fixed quote in writing · ✓ No hidden fees

Everything numeric is **derived from the published rate book**, never invented:
`startPrice` (verbatim from `services-data`, unit included), the count of
`SERVICE_SCOPES[slug].scopes`, and the pricing basis assembled from the scopes' own
units through the estimator's localized unit nouns
(`estimator.units.<unit>.noun`). Quote-only services (`awning-installation`) take a
separate template that states the quoted-scope count and prints **no** RM figure.

BM: *"Perkhidmatan Mengecat Rumah di KL & Selangor bermula dari RM 450; 4 kadar
tersiar di bawah dikira mengikut bilik, kerja. …"*
中文: *"房屋油漆服务在KL与雪兰莪从RM 450起。下方4项公开价格按每间、每项计算，……"*

### 2.3 Units are localized, so no P3-05 leak is reintroduced

`buildCostDirectAnswerVars()` runs the interpolated price through the existing
`localizeUnits()` helper: `RM 14 / sq ft` → `RM 14 / kaki persegi` (BM) /
`RM 14 / 平方呎` (中文). Without that, the 中文 card would have carried the English
`sq ft` token that P3-01/P3-05 exist to prevent.

---

## 3. New gate — `npm run audit:cost-direct-answer` (wired into `prebuild`)

`scripts/validate-cost-direct-answer.ts` runs the **exact production builder** over
29 services × 3 locales = **87 cards**:

| # | Check |
|---|---|
| 1 | Question ends in `?` / `？` **and** carries the locale's own "how much … cost in KL & Selangor" literal |
| 2 | Priced services quote the published `RM` figure; quote-only services print **no** RM figure |
| 3 | The five per-sq-ft services keep their unit **in-language**; the pricing basis is interpolated and lists only localized unit nouns; the scope count is stated |
| 4 | Zero L1/L2/L3 trilingual-leak signatures in the BM/中文 answers and pills (`lib/trilingual-leak`) |
| 5 | 25–90 words (EN/BM) or 60–260 CJK chars (中文); no unresolved `{placeholder}` |
| 6 | All 8 dictionary keys resolve in all three locales; coverage = 87 cards |

**The gate was proven to fail** (a gate that cannot fail is decoration). Three
deliberate regressions, each caught, each reverted:

| Regression injected | Gate output |
|---|---|
| `are priced {unitBasis}` → `are priced by quantity` | ✖ **28 failures** — `unit basis used`, `per-sq-ft unit present` |
| BM answer given English clause "the price is confirmed for you" | ✖ **28 failures** — `no L3 leak: English function-word density (the×1, for×1)` |
| Question's trailing `?` removed | ✖ **58 failures** — `question ends in ?`, `question literal` |
| *(restored)* | ✔ **87 cards, 0 failures** |

It runs inside `prebuild`, so it also runs in CI through the existing
`npm run prebuild` step — **no `.github/workflows/ci.yml` change was needed**, which
matters because the GitHub App token still lacks the `workflows` permission.

---

## 4. Two live P3-05 defects found while verifying (both fixed)

P3-05 was 🟡 PARTIAL with "remaining AI-surface copy leaks still ⏳". Each recorded
leak was re-checked against the built corpus:

| P3-05 recorded leak | Verified state |
|---|---|
| DirectAnswer "start from RM 14" (no unit) | **already fixed** — renders "start from RM 14 / sq ft" |
| Smart-finder dropdown "(From RM 14)" | **already fixed** — renders `service.startPrice` verbatim (unit included) |
| `llms.txt` "from RM 14" | **already fixed** — `from RM 14 / sq ft` (all five per-sq-ft services; the only "RM 22" hits are `RM 22,000`) |
| Homepage `lowPrice: "80"` | **already fixed** — schema now emits `lowPrice: 120` |

Two defects that were *not* on the list turned up and are fixed here:

### 4.1 A lower-cased currency inside the most AI-cited sentence (28 pages)

`service-detail-content.tsx` interpolated `service.tagline.toLowerCase()` into the
DirectAnswer so the sentence would not start with a capital mid-line. 28 of 29
taglines contain a price, so the AI-citable card on **28 of 29 service hubs** read:

> "…large-format slabs. **from rm 14 / sq ft.** Our … packages start from RM 14 / sq ft…"

Fix: new `lowerFirstSentence()` in `lib/utils.ts` (lower-cases the first character
only), used for both DirectAnswer branches; the cost view's private `lowerFirst`
duplicate now points at the same helper. Rendered result:

> "…large-format slabs. **From RM 14 / sq ft.** Our … packages start from RM 14 / sq ft…"

### 4.2 A corpus gate that can never miss it again

`scripts/html-quality-audit.ts` gained check **12 — `lowercase-currency`**: a
**case-sensitive** `rm` + digit in the readable text (scripts/styles stripped, so
JSON-LD and CSS never trigger it; `RM 450` cannot match).

Proven against the corpus *before* the fix was built:

```
🔴 Fatal findings:
   lowercase-currency: 28        → audit:html exit code 1
```

and after the rebuild: **Pages checked: 4080 · 🔴 Fatal findings: none · 🟡 Warnings:
none**. CI already runs `audit:html` post-build, so this is enforced upstream with no
workflow change.

### 4.3 The Part 3 corpus analyzer was measuring nothing (audit-tooling bug)

`scripts/part3-aeo-audit.ts#contentText()` sliced the text **after the last
`</footer>`** — correct for the pre-Wave-2 layout (P2-C1/P4-01: content rendered
after `</footer>` on 5,815 pages), but Wave 2 moved content inside `<main>`. Since
then the function returned only trailing inline scripts: **`words=8` on 3,600+
pages and `qa=0%` even on the 29 service hubs that demonstrably carry the card**.
Any DirectAnswer / NAP / vague-term / depth number produced by a post-Wave-2 re-run
was silently zero.

Fixed to read the document `<body>` (`cleanText()` already strips `<script>`,
`<style>`, `<svg>` and comments, so JSON-LD never pollutes the text), plus the
`&#x27;` entity decode that part 5 already had. This is why P3-04's acceptance
criterion is measurable at all — and it means **pre-Wave-12 `meanWords` / `pctNap` /
`pctQuickAnswer` figures in older re-runs are not comparable** to the ones below.
(`pctQuestionH2` / `pctFaqSchema` / leak counts were always raw-HTML regexes and are
comparable.)

---

## 5. Results — P3-04 acceptance criterion met

`PART-3-AUDIT-REPORT.md` §K10 success criterion: **"qa=1 for `/services/<svc>/cost`
pattern"**.

| Metric, `/services/<svc>/cost` (n=29) | Baseline | **Now** |
|---|---|---|
| `pctQuickAnswer` (DirectAnswer card) | **0%** | **100%** ✅ |
| Pages with a literal "how much" H2 | 0 | **29 / 29** |
| `pctFaqSchema` | 100% | 100% |
| `faqSchemaNoVisibleMatch` (site-wide) | 0 | **0** |
| `meanWords` (corrected measurement) | n/a (25 = broken) | **1,703** |
| `FAQPage` questions per page | 8 / 9 / 19 | **9 / 10 / 20** |
| Trilingual leaks (BM / 中文, corpus) | 0 / 0 | **0 / 0** |

Corpus-wide after the change: `/services/<svc>` qa=100%, `/services/<svc>/<sub>`
qa=91%, `/tools/<slug>` qa=100%.

---

## 6. Gate results (all run on the final build)

| Gate | Result |
|---|---|
| `npm run lint` | 0 errors, 0 warnings |
| `npm run type-check` | clean |
| `npm run prebuild` | **PASS — 320,291 assertions, 0 failures** (exit 0) |
| ↳ `audit:cost-direct-answer` | **87 cards (29 × 3; 84 priced, 3 quote-only), 0 failures** |
| ↳ `audit:i18n` | **1,223 keys × 3 locales**, 0 missing/extra/empty/malformed |
| ↳ `audit:trilingual-leak` | 29 services × 3 bases, 58 notes, 0 leaks |
| ↳ `audit:rate-year` | 762 files, 162 in-string year tokens, all = 2026 |
| ↳ `audit:client-bundle` | 219 client modules, none reach the 8 heavy registries |
| ↳ `test:estimators` | 320,291 assertions, 0 failures |
| `npm run build` | **SUCCESS**, exit 0 — 4,080 HTML pages, middleware 35.7 kB, shared JS 102 kB |
| `audit:html` | 4,080 pages — **🔴 none · 🟡 none** |
| `audit:links` | 4,080 pages, **308,753** rendered + 56 source links, **0 broken** |
| `audit:seo-head` | 4,054 self-canonical indexable = 4,054 sitemap URLs, 26 noindex, 0 dup titles/descriptions, 0 warnings — PASS |
| `audit:schema-size` | PASS |
| `audit:bp1` | PASS — NAP-in-content now **2,540/4,080 (62.3%)** (was 57.8%; the +450 Wave-11 pod pages carry the strip) |
| `audit:location-similarity` | PASS — all layers < 70% |
| `audit:meta` | exit 0 — JSON-LD parse failures 0, LocalBusiness missing NAP 0 |
| `seo:audit` | PASS |
| `part5-audit` (re-run) | 4,080 pages, **0 JSON-LD parse errors**, 0 duplicate titles, 0 duplicate H1s |
| `part3-aeo-audit` (re-run) | `/services/<svc>/cost` **qa=100%**; BM/中文 leaks 0/0 |

No page count, sitemap, canonical or hreflang change: this wave adds no URLs
(4,054 indexable = 4,054 sitemap, unchanged from Wave 11).

---

## 7. Side benefits

- **+29 internal links** to the per-service estimators from the money pages
  (P4-16 link-equity direction: content pages → tools), plus 29 WhatsApp CTAs inside
  the answer block. All resolve — `audit:links` 0 broken.
- The highest-intent query now has a **schema + visible + heading** triple on all 29
  commercial pages, in three languages.
- Two audit tools are now trustworthy again (`part3-aeo-audit` text extraction) and
  one new permanent regression guard exists per fix.

---

## 8. Deliberate choices / known trade-offs

1. **The DirectAnswer H2 repeats the H1 text.** Both are the literal query. The H1 is
   the page headline; the H2 is the extractable answer heading that AI Overviews
   quote. `audit:html` enforces exactly one H1 and does not (and now deliberately
   does not) forbid an H1/H2 text pair — an "answer-first" AEO block restating the
   query is the intended pattern. If a future wave prefers distinct headings, change
   `costPage.h1` only; the gate pins the **question**, not the H1.
2. **No MS/ZH `/services/<svc>/cost` routes exist.** `/ms|/zh/services/[slug]/` only
   ships `page.tsx` + `[subservice]`, so the cost guide is one URL client-localized by
   the toggle — the same pre-existing pattern as before this wave, and out of P3-04
   scope. Recorded as a candidate (P3-12 phase 3) rather than silently expanded.
3. **The worked-example `lowerFirst` alias** in the cost view now points at the shared
   helper instead of a private duplicate, so the "never lower-case a price" rule has
   one implementation.

---

## 9. Files touched

```
app/(en)/services/[slug]/cost/page.tsx        DirectAnswer Q&A → first FAQPage Question
components/content/direct-answer.tsx          optional actions[] row
components/sections/locale-service-cost-view.tsx   renders the card
components/sections/service-detail-content.tsx     lowerFirstSentence(tagline)  (P3-05)
lib/cost-direct-answer.ts                     NEW — shared pure builder
lib/utils.ts                                  NEW lowerFirstSentence()
messages/{en,ms,zh}.json                      +8 costPage.directAnswer.* keys each
scripts/validate-cost-direct-answer.ts        NEW — prebuild gate (87 cards)
scripts/html-quality-audit.ts                 NEW check 12 — lowercase-currency
scripts/part3-aeo-audit.ts                    contentText() + &#x27; decode fix
package.json                                  audit:cost-direct-answer + prebuild wiring
docs/audit-part3-*.{json,jsonl}               regenerated (corrected measurement)
docs/audit-part5-*.{json,jsonl}               regenerated
docs/seo-audit-report.md                      regenerated
```

`public/llms.txt`, `llms-full.txt`, `aeo-faq.txt`, `site-summary.json` were
regenerated by `prebuild` and came out **byte-identical** (no price or count changed).
