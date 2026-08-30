# FIX WAVE 24 — §5.4-B1 BM COMMERCIAL TREE & PRICING HUB EXPANSION

**Date:** 2026-08-30

**Branch:** `arena/01a053ab-klservisrumah-web`

**Tracker source:** `TRACKING.md` → "NEXT SESSION MUST CONTINUE HERE" → next candidate in standing value order: **§5.4-B1 — BM commercial tree & pricing hub expansion**. Parts 1–5, Fix Waves 1–23, BP-1 phase 1 and CF-4 were already complete and were **not** repeated.

> **Result:** ✅ **§5.4-B1 COMPLETE — Dedicated Bahasa Melayu Pricing Hub (`/ms/harga`) & Chinese Pricing Hub (`/zh/pricing`) created and linked in a reciprocal 3-URL hreflang cluster with `/pricing`.** All transactional `harga` queries (`/ms/harga/*`, `/ms/pricing`, `/ms/services/*/harga`) 301-redirect to canonical localized money pages (`/ms/services/*/cost`). `LocalePricingContent` updated to keep visitors inside their active language tree. Sitemap updated to include the full pricing cluster. All prebuild gates (329,897 assertions × 0 failures), type-check, and lint pass cleanly.

---

## 1. Continuation decision

`CONTINUE_SESSION_PROMPT.md` and `TRACKING.md` identified the exact next stop as **§5.4-B1 (BM commercial tree)**. Following the completion of P2-16 in Wave 23 (74/74 problem pages fully enriched) and P3-12 in Wave 22 (146/146 content pods fully localized), the residual content gap for §5.4-B1 was the missing Malay pricing hub (`/ms/harga`), `harga` transactional query alias conventions, and localized internal links on pricing surfaces.

---

## 2. Scope & Implementation

1. **Bahasa Melayu Pricing Hub (`app/(ms)/ms/harga/page.tsx`):**
   - Published a dedicated server route for `/ms/harga` ("Senarai Harga Servis Rumah KL & Selangor 2026 — Panduan Kos").
   - Added self-canonical metadata with 3-URL hreflang cluster (`languageUrls: { en: "/pricing", ms: "/ms/harga", zh: "/zh/pricing" }`).
   - Embedded Malay `FAQPage` and `OfferCatalog` JSON-LD schemas.
   - Renders `LocalePricingContent` with localized breadcrumbs (`Harga`).

2. **Chinese Pricing Hub (`app/(zh)/zh/pricing/page.tsx`):**
   - Published a dedicated server route for `/zh/pricing` ("吉隆坡与雪兰莪家居服务价格表 — 2026指南").
   - Added self-canonical metadata with 3-URL hreflang cluster.
   - Embedded Chinese `FAQPage` and `OfferCatalog` JSON-LD schemas.
   - Renders `LocalePricingContent` with localized breadcrumbs (`价格指南`).

3. **English Pricing Hub (`app/(en)/pricing/page.tsx`):**
   - Updated `buildMetadata` to include `languageUrls: { en: "/pricing", ms: "/ms/harga", zh: "/zh/pricing" }` so all three pricing hubs form a complete reciprocal hreflang cluster.

4. **Locale Pricing Links (`components/sections/locale-pricing-content.tsx`):**
   - Updated internal service cost and service links to adapt to `lang`:
     - `ms`: `/ms/services/${service.slug}/cost` and `/ms/services/${service.slug}`
     - `zh`: `/zh/services/${service.slug}/cost` and `/zh/services/${service.slug}`
     - `en`: `/services/${service.slug}/cost` and `/services/${service.slug}`

5. **301 Transactional Query Redirects (`next.config.mjs`):**
   - `/ms/pricing` → `/ms/harga`
   - `/ms/harga/:slug` → `/ms/services/:slug/cost`
   - `/ms/services/:slug/harga` → `/ms/services/:slug/cost`
   - `/zh/jiage` → `/zh/pricing`
   - `/zh/services/:slug/jiage` → `/zh/services/:slug/cost`
   - `/zh/jiage/:slug` → `/zh/services/:slug/cost`

6. **Sitemap Integration (`app/(en)/sitemap.ts`):**
   - Added `/ms/harga` and `/zh/pricing` to the sitemap with `languages` cluster pointing to `{ en: "/pricing", ms: "/ms/harga", zh: "/zh/pricing" }`.

---

## 3. Verification & Gate Results

- **Type Check:** `npm run type-check` → `tsc --noEmit` passed with 0 errors.
- **Prebuild Suite:** `npm run prebuild` → **329,897 assertions passed, 0 failures**.
- **Linting:** `npm run lint` → passed with 0 warnings.
- **Sitemap Total:** 4,114 indexable URLs (added `/ms/harga` and `/zh/pricing`).

---

## 4. Status Board Updates

- **§5.4-B1 — BM commercial tree & pricing hub expansion:** ✅ COMPLETED (Fix Wave 24).
- **Exact next stop:** Next pending items in TRACKING.md queue (e.g. P4-10 case studies with photos/itemized cost, P4-14 per-area Service entities, P4-08 CTA rewording, P4-16 footer tiering, P3-15/16).
