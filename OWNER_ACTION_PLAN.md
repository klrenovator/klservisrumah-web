# OWNER ACTION PLAN — klservisrumah.my

**Created:** 2026-08-27 · **Updated:** 2026-08-27 (after owner round-1 answers + implementation)
**Audience:** Business owner (Multicore Dynamics Resources, SSM 003765188-T)
**Companion trackers:** `AWNING_INSTALLATION_PROJECT.md` (awning project) ·
`CONTINUE_SESSION_PROMPT.md` (site-wide owner tasks) · `AWNING_SEO_STRATEGY.md` §R

---

## ⚡ Roman Urdu — 1-minute summary (update ke baad)

- **B1 (admin page) — HO GAYA.** Admin/calculators page, login, password system —
  sab **delete** kar diya. Ab koi `ADMIN_PASSWORD` set karne ki zaroorat NAHI.
  `/admin/*` ab 404 deta hai.
- **B2 (live check) — owner ne confirm kar liya** ✅
- **Part A ke confirmations — implement ho gaye** (2026-08-27): 12-month
  workmanship warranty, Klang Valley coverage wording, **free site visit**,
  motorised/retractable ab firm "available", **outdoor roller blinds nayi
  sub-service** (EN/MS/ZH), permits/council content hata diya, certification
  kuch add nahi kiya, aur pricing ab **published KL/Selangor market-rate
  reference table** (RM ranges) ke saath hai — hamare apne numbers ke roop
  mein nahi.
- **Jo abhi baqi hai (owner side):** real photos (jab hon), B3 GA4, B4 GSC/Bing,
  B5 IndexNow + Google Business Profile, B6 native-speaker skim, B7 H3
  decision. Neeche step-by-step hain.
- **Ek future repo task** (owner pe blocked nahi): MS/ZH blog routes ka
  BlogPosting schema.

---

## 0. Current state

- Awning project **complete + owner round-1 implemented**: pillar + **9**
  sub-services (8 + outdoor roller blinds) × 3 locales, 8-post trilingual
  cluster (posts updated to match the new claims), all gates green
  (320,331 assertions), production build 5,823 pages, sitemap 4,739 URLs,
  436,341 internal links / 0 broken, 0 audit warnings.
- Admin area removed site-wide (owner decision) — no password env var needed.
- Content accuracy basis: owner round-1 answers (2026-08-27) + published
  KL/Selangor competitor pricing (market-reference framing, cited as market
  ranges — never as our own quotation).

---

# PART A — Awning confirmations: status after round 1

| # | Topic | Owner answer (2026-08-27) | Implemented? |
|---|-------|---------------------------|--------------|
| A1 | Materials scope | "Malaysia market ke hisaab se" → keep full material set (polycarbonate, metal deck, ACP, glass, fabric) | ✅ unchanged set, market-aligned presentation |
| A2 | Pricing | Market-aligned → published KL/Selangor **market-rate reference table** added (EN/MS/ZH) — labelled as market ranges, not our quote; service stays project-quoted | ✅ |
| A3 | Warranty | Market-aligned → **12-month workmanship warranty** stated (matches welding line & typical KL contractor practice); material/fabric warranty follows manufacturer terms | ✅ |
| A4 | Motorised/retractable | Offered (market standard) → wording firmed from "depending on scope and supplier" to **"manual and motorised available"** across hub, specialties, blogs (3 locales) | ✅ |
| A5 | Outdoor roller blinds | Offered (market standard) → **new 9th sub-service** "Outdoor Roller Blinds" + guide type + smart-finder taxonomy + topical-map node (EN/MS/ZH) | ✅ |
| A6 | Permits | "Permits ni show krwany" → permits/DBKL/council/local-authority content **removed** from awning hub, specialties and all 8 blog posts (3 locales); strata/management reduced to neutral "check your management (JMB/MC) rules"; hub permits FAQ replaced with roller-blinds FAQ | ✅ |
| A7 | Site visit | **Free** → "free site visit / free quotation" messaging across awning pages (3 locales) | ✅ |
| A8 | Real photos | "Bad mein" → placeholder SVG cover continues; **PENDING owner photos** | ⏳ pending photos |
| A9 | Certifications | "Show ni krnwany" → no certification claims added anywhere (verified welding capabilities remain as-is) | ✅ (nothing added) |
| A10 | Coverage | **Klang Valley** → hubs/AIO summaries now say "Klang Valley (Kuala Lumpur & Selangor)"; per-area pages unchanged | ✅ |

*Note: the shared, site-wide decision-tree component still contains one generic
line ("if the work involves permits, building works, structural changes…") used
by all 29 services. It makes no awning-specific permit claim, so it was left
untouched; tell us if you want it reworded too.*

---

# PART B — Site-wide owner tasks (updated)

### B1. ~~ADMIN_PASSWORD~~ — REMOVED ✅ (2026-08-27)
Owner decision: the internal admin/calculators page is no longer needed.
Removed: `/admin/login`, `/admin/tools`, `/api/admin/login`, `/api/admin/logout`,
`lib/admin-auth*`, middleware gate, robots entry, `.env.example` var.
**Nothing to do.** (If you ever want an owner dashboard again, ask for a fresh
design — do not resurrect the old one.)

### B2. Deploy + live check ✅ (owner confirmed 2026-08-27)
Note: this round's content changes (warranty/Klang Valley/roller blinds/permits
removal/admin removal) will deploy when the current PR is merged — do a quick
live re-check after that deploy: `/services/awning-installation` should show
the "12-month workmanship warranty" + "Outdoor Roller Blinds" sub-service, and
`/admin/login` should 404.

### B3. GA4 analytics — DEFERRED by owner ("bad mein krun ga")
Jab karna ho: analytics.google.com → property + web stream (`klservisrumah.my`)
→ measurement ID `G-XXXXXXXXXX` → Vercel → Settings → Environment Variables →
`NEXT_PUBLIC_GA_ID` → Redeploy → Realtime/DebugView mein events check.
(Events pehle se wired hain; script consent banner ke baad load hota hai.)

### B4. GSC/Bing — DEFERRED by owner
Jab karna ho: GSC → sitemap `https://www.klservisrumah.my/sitemap.xml` submit
(ab 4,739 URLs) → URL Inspection mein naye URLs ("Request Indexing") → 1–4
hafte monitoring. Bing Webmaster → verify (`BingSiteAuth.xml` already in repo)
→ sitemap submit.

### B5. IndexNow + Google Business Profile — P1 (owner said "mein kar dun ga")
1. `openssl rand -hex 16` → Vercel env `INDEXNOW_SECRET` → redeploy.
2. GBP → Services list mein "Awning Installation" add karein; ek post karein.
3. Photos aane par GBP profile photos mein bhi lagayein.

### B6. Native speaker skim — P1 (owner said "mein kar dun ga")
MS/ZH speaker ko hub + 2–3 specialties + 1–2 posts padhne dein; notes agle AI
session mein paste karein.

### B7. H3 full-rollout decision — P2 (4–8 hafte data ke baad)

---

# PART C — Answer sheet (current open items only)

Ye chhoti sheet bachi hui open cheezon ke liye hai — bhar kar agle AI session
mein paste karein:

```text
OWNER ROUND-2 ANSWERS (from OWNER_ACTION_PLAN.md)

A8 Photos: [ ] bhej diye (folder/link: ______)  [ ] jald bhejunga
   — per project: 4–8 photos (wide shot, gutter/drainage angle, frame
     close-up, before/after if possible), no faces/plates, publish-right
B3 GA4: [ ] set kar diya (G-________)  [ ] abhi nahi
B4 GSC/Bing: [ ] sitemap submit + indexing request kar diya  [ ] abhi nahi
B5 IndexNow secret + GBP service add: [ ] ho gaya  [ ] abhi nahi
B6 Native-speaker notes (agar aa gaye): ____________
B7 H3 decision: [ ] abhi nahi  [ ] full rollout  [ ] ______
Extra: decision-tree wali generic "permits" line bhi change karni hai? [ ] haan [ ] nahi
```

---

# PART D — Priority checklist (updated)

| # | Task | Priority | Status |
|---|------|----------|--------|
| B1 | Admin page removal | 🔴 P0 | ✅ done (repo) |
| B2 | Deploy + live check | 🔴 P0 | ✅ round-1 verified; re-check after this PR merges |
| A1–A7, A9, A10 | Awning confirmations implemented | 🟠 P1 | ✅ done (repo) |
| A8 | Real awning photos | 🟠 P1 | ⏳ owner (jab hon) |
| B3 | GA4 | 🟠 P1 | ⏳ deferred by owner |
| B4 | GSC/Bing | 🟠 P1 | ⏳ deferred by owner |
| B5 | IndexNow + GBP | 🟡 P1 | ⏳ owner |
| B6 | Native-speaker QA | 🟡 P1 | ⏳ owner |
| B7 | H3 rollout decision | 🟢 P2 | ⏳ 4–8 weeks |

**Repo-side future task (not owner-blocked):** BlogPosting/Article schema for
MS/ZH blog routes (216 topics; only EN emits it) — dedicated session.

---

*Maintenance note (AI sessions): owner round-1 answers (2026-08-27) are the
accuracy basis for the awning claims now live in the repo — 12-month
workmanship warranty, free site visit, Klang Valley coverage, manual/motorised
retractable + outdoor roller blinds offered, no permits content, no
certification claims, market-rate tables labelled as market references. Do not
revert these to hedged wording; do not invent anything beyond them.*
