# KL Servis Rumah — Deep Audit Status Board

> **Purpose:** A single, session-to-session tracking board so any AI agent (or
> human) can immediately see what is **done** (green tick ✅), what is
> **pending** (⏳), and where to pick up next. Update this file at the end of
> every audit session. **Green tick = verified/committed/published. Pending =
> next** session's work item.
>
> **Rule:** Every audit part is saved to GitHub, its own deep audit is produced
> and saved, and (for this session) a PR is created and merged. Then work is
> prioritised harmlessly in priority order.

---

## 5-Part Audit Prompt — Storage

| # | Part | Prompt saved | Deep audit saved | In GitHub | Status |
|---|---|---|---|---|---|
| 0 | Overview (shared instructions & output requirements) | ✅ `00-PROMPT-OVERVIEW.md` | — | ✅ | ✅ DONE |
| 1 | Technical SEO + Crawlability + Indexation + Architecture | ✅ `PART-1-PROMPT.md` | ✅ `PART-1-AUDIT-REPORT.md` | ✅ | ✅ DONE (PR merged) |
| 2 | On-page SEO + Content + Semantic + Entity SEO | ✅ `PART-2-PROMPT.md` | ✅ `PART-2-AUDIT-REPORT.md` | ✅ | ✅ DONE (PR #171 — authored this session) |
| 3 | AEO + GEO + LLMO + AIO / AI Search | ✅ `PART-3-PROMPT.md` | ✅ `PART-3-AUDIT-REPORT.md` | ✅ | ✅ DONE (PR #173 — authored this session) |
| 4 | SXO + Local SEO + Internal Linking + CRO + Trust | ✅ `PART-4-PROMPT.md` | ⏳ PENDING | ⏳ | ⏳ PENDING |
| 5 | Schema + Content Gap + Priority Roadmap | ✅ `PART-5-PROMPT.md` | ⏳ PENDING | ⏳ | ⏳ PENDING |

---

## Priority Work Queue

> Once all five parts are audited, work is prioritised in this order. Green tick
> once a task lands; leave **⏳ PENDING** until then.

| Prio | Task (blocker) | Status |
|---|---|---|
| P0 | Audit Part 1 (Technical / Crawl / Index / Architecture) and publish | ✅ DONE |
| P0 | Audit Part 2 (On-page / Content / Semantic / Entity) | ✅ DONE |
| P1 | Audit Part 3 (AEO / GEO / LLMO / AI SEO) | ✅ DONE (PR #173) |
| P1 | Audit Part 4 (SXO / Local / Internal Linking / CRO / Trust) | ⏳ PENDING |
| P1 | Audit Part 5 (Schema / Content Gap / Roadmap) | ⏳ PENDING |
| — | Merge per-part audit PRs (this session: Pt 1 merged) | ✅ DONE (Pt 1 + Pt 2) |
| P0 | Fix Part 1 Critical #1 — Trim programmatic service+location index | ⏳ PENDING |
| P0 | Fix Part 1 Critical #2 — Consolidate near-me duplicates | ⏳ PENDING |
| P0 | Fix Part 1 Critical #3 — Resolve www/non-www host canonical | ⏳ PENDING |
| P0 | Fix Part 2 P2-C1 — Server-render content inside `<main>` (static HTML is a Loading shell) | ⏳ PENDING |
| P0 | Fix Part 2 P2-C2 — `content.relatedReading` literal key renders as H2 on 224 pages | ⏳ PENDING |
| P0 | Fix Part 2 P2-C3 — 174 generic "content pod" pages (commercial/residential/process/answers/brands/top/seasonal/guides) | ⏳ PENDING |
| P0 | Fix Part 2 P2-C4 — Replace pair-copy generator; authored local copy for area×service | ⏳ PENDING |
| P1 | Fix Part 2 P2-16/17/18 — Expand problems/cost; rewrite or retire emergency pages | ⏳ PENDING |
| P1 | Fix Part 2 P2-19 — Real per-article blog dates (216 posts / 5 dates) | ⏳ PENDING |
| P1 | Fix Part 2 P2-21 — Reviews: verify + Review schema or drop AggregateRating | ⏳ PENDING |
| P1 | Fix Part 2 P2-22 — Add outbound citations (brands/authority/manufacturer) | ⏳ PENDING |

---

## Session Log (short)

| Session | Scope | Result |
|---|---|---|
| 2026-08-27 | Part 1 audit + prompt saved + PR merged | ✅ Part 1 committed & merged |
| 2026-08-28 | Part 2 audit — full-corpus on-page/content/semantic/entity | ✅ Part 2 committed & merged (PR #171) |
| 2026-08-28 | Part 3 audit — full-corpus AEO/GEO/LLMO/AI-search + entity-consistency scans | ✅ Part 3 committed & merged (PR #173) |

---

## Part 3 — Priority Work Queue (findings added)

| Prio | Task (from PART-3-AUDIT-REPORT.md) | Status |
|---|---|---|
| P0 | P3-01 — Fix English leaks inside BM/中文 DirectAnswer blocks (29/29 service pages) + add prebuild leak validator | ⏳ PENDING |
| P0 | P3-05 — Add units to per-sq-ft prices on all AI surfaces ("from RM 14/10/5/22") + fix `lowPrice: "80"` | ⏳ PENDING |
| P0 | P3-07 — Reconcile contradictory facts: RM 180 vs 220 ceiling price, "28+" vs 29 services, warranty pill vs per-service warranty (251 pages), stats claims | ⏳ PENDING |
| P1 | P3-11 — Server-render homepage + /faq hub accordion answers (JS-only today) | ⏳ PENDING |
| P1 | P3-02 — /faq hub: add FAQPage JSON-LD + question H3s + remove hidden "No matches" text | ⏳ PENDING |
| P1 | P3-04 — Cost pages: add "How much does {svc} cost in KL?" DirectAnswer + expand 459-word bodies | ⏳ PENDING |
| P1 | P3-18 — llms.txt: list all 29 services (aircon missing) with units; link aeo-faq.txt | ⏳ PENDING |
| P1 | P3-09 — Owner verification of stats/claims (1,200+, 15+ Pros, 120+/120, 30–60 min, "written by local tradesmen") | ⏳ PENDING (owner) |
| P2 | P3-06 — Blog: FAQPage schema + promote top FAQ to question H2 (216 posts) | ⏳ PENDING |
| P2 | P3-12 — MS/ZH routes for kept pods (205 pages; i18n data already exists) | ⏳ PENDING |
| P2 | P3-15/P3-16/P3-17 — SearchAction vs /search; news-sitemap freshness; Applebot-Extended/DuckAssistBot | ⏳ PENDING |
| P2 | P3-10/P3-19/P3-13 — NAP in content block; link+expand aeo-faq.txt; hidden empty-state text | ⏳ PENDING |

---

### How to read

- **✅ DONE** — Saved to GitHub, audited, PR created & merged (where applicable).
- **⏳ PENDING** — Not yet started this session; this is the next work item.
- **🔎 IN PROGRESS** — Working on it now (temporary state; convert when finished).
