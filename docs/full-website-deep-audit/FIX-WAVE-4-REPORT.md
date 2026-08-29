# Fix Wave 4 — P3-01, P3-07, P2-C3 (batch 1)

**Session:** 2026-08-29 · branch `arena/01a04bb1-klservisrumah-web`
**Commits:** `0a13042` (P3-01) · `a8a338c` (P3-07) · `6aeb23a` (P2-C3 batch 1)
**Gates after this wave (all green):** build 3,677 HTML pages / 3,669 static;
test:estimators 320,331 assertions × 0 failures; audit:i18n 1,182 keys × 3
locales; audit:trilingual-leak 29×3 bases / 58 unique notes / 0 leaks;
audit:content-pods 58 pods × (intro, 4 bullets, 4 FAQs, ×2 locales wiring);
audit:html 0 fatal / 0 warnings; audit:links 0 broken; audit:seo-head PASS;
audit:similarity all layers < 70%; audit:client-bundle 217 modules clean;
audit:bp1 2,146 retired / 435+30 kept.

---

## P3-01 — trilingual DirectAnswer leaks — ✅ DONE (`0a13042`)

Part 3 audit found every service hub's localized "Direct answer" block
carrying English fragments inside Malay/Chinese copy (29/29 pages, both
locales), plus duplicated/boilerplate notes across services.

- All 29 services × MS/ZH DirectAnswer notes rewritten: native-sentence
  style, no English leaks, no ASCII units glued to Malay prose (L2), and
  per-service unique phrasing — 58 unique notes where the audit counted
  wholesale reuse.
- `scripts/validate-trilingual-answers.ts` → `npm run audit:trilingual-leak`,
  wired into `prebuild`: three leak levels (L1 containment, L2 unit/ASCII
  tokens, L3 function-word bleed), uniqueness across services, and the
  `DirectAnswer` anchor must exist in all three locales. Structural detector
  replaces the earlier ASCII-counter idea (false positives on legit brand
  tokens like "RCCB" are handled by an allow-list, not by loosening the rule).

## P3-07 — contradictory facts across AI-quoted surfaces — ✅ DONE (`a8a338c`)

- Ceiling price unified to the registry truth **"from RM 220"** on homepage,
  service finder and hubs (was RM 180 in two places).
- Service count unified: **"29+"** wording everywhere "28+" appeared.
- Warranty wording unified to **"Written warranty, 30 days to 10 years (per
  service)"** on the pill surfaces that contradicted per-service warranties
  (251 pages); painting surface now says "single-room from RM 450" (the RM 450
  is per-room, not whole-home — earlier draft caught before ship).
- llms.txt / llms-full.txt / site-summary.json regenerated;
  `scripts/validate-ai-context.ts` (gen:ai-context verification) asserts
  29 prices + 29 warranties + counts against the published data — the audit's
  "stats claims" half is now a **regression-checked** surface.
- **Still owner-⏳ (not code):** the business stats themselves — "1,200+
  jobs", "120+ reviews", "15+ Pros", "30-min response" need real numbers or
  removal (tracked as P3-09 / P2-21). This wave only made the *code-fixable*
  half of P3-14's contradiction problem (it shares P3-07's surfaces).

## P2-C3 batch 1 — commercial & residential pods — 🔶 IN PROGRESS (58 of 174)

Part 2 (P2-C3 + P2-15) found the "content pod" families sharing one generic
body: commercial pages asked facility teams *"Is commercial X relevant for KL
and Selangor homes?"*, every bullet set was identical within a family, and all
174 pods closed with the same "Malaysian homes face tropical humidity…"
guidance block.

**Shipped (batch 1 — the wrong-audience families named by the audit):**

- `config/content-pod-copy.ts` — 58 hand-authored pods (29 commercial,
  29 residential): unique ≤158-char intros (meta budget), 4 audience-correct
  bullets, 4 per-service AEO FAQs each. Commercial copy never mentions
  homes/condo living; residential copy never reuses a commercial sentence;
  every price/warranty/mechanical claim verified against `services-data`
  (ST wiremen, 90-day ceiling, 10-yr plaster/roof-membrane, ≤5-yr
  waterproofing, 5-yr epoxy/flooring/cabinet, 12-mo renovation/awning,
  aircon 1-mo workmanship + 3-mo parts, fire-door certification referred to
  accredited parties).
- `config/content-pod-copy-i18n.ts` — MS+ZH for all 228 unique bullet
  phrases, merged into `content-body-i18n.ts` dictionaries → switched MS/ZH
  views stay fully localized (estimator trilingual-parity asserts unchanged).
  `faqTopic` kept so the localized view regenerates its 4 template FAQs —
  authored FAQs are 4 per pod to count-match.
- Family guidance override: optional `GenericContentPage.guidance` renders
  per-family paragraphs (commercial = logistics/JMB/landlord documentation;
  residential = occupancy/protection/kids-and-pets/condo hours) in place of
  the shared tropical-humidity block; other families keep the message fallback.
- `scripts/validate-content-pods.ts` → `npm run audit:content-pods` in
  `prebuild`: catalog×2 coverage (new service without authored pods fails the
  build), 58-unique intros, zero-tolerance wrong-audience markers, 4/4
  structure with ≥80-char answers, bullet localization coverage, wiring drift.
- Verified on built HTML: 0/58 pods contain the wrong-audience question or the
  old guidance block; 58/58 pod meta descriptions unique.

**Next batches (same gate, same authoring rules):**
brands (32) and compare (18) share the `faq()`-template intros; guides (10),
maintenance (10), seasonal (8), top (10) are second-tier. process/answers
bodies already carry real service data (only their intros/guidance were
template-generic — the view-level guidance override covers part of that).
P3-12 owns per-pod localized *bodies* (MS/ZH pod content is currently
template-based by design); pod families must not gain `homes`-style wording
drift — the gate enforces the commercial markers only today.
