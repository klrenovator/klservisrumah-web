# Schema Validation Log — KL Servis Rumah

**Date:** 2026-07-24  
**Round:** Arena implementation round 1

## Pages prepared for validation

- Homepage `/` — Organization + LocalBusiness schema in layout.
- Service pages `/services/[slug]` — Service + Offer + FAQ + Breadcrumb schema.
- Sub-service pages `/services/[slug]/[subservice]` — Service + FAQ + Breadcrumb schema.
- Area × service pages `/areas/[slug]/[serviceSlug]` — LocalBusiness + Service + FAQ schema.
- Suburb × service pages `/suburbs/[slug]/[serviceSlug]` — LocalBusiness + Service + FAQ schema.
- Blog posts `/blog/[slug]` — Blog data available; Article schema helper created.
- Problem pages `/problems/[slug]` — Article + HowTo + FAQ schema.
- Tools `/tools/*` — WebApplication schema.

## Manual validation status

Local build validation passed in this round (`npm run lint` and `npm run build`). After deployment, test representative URLs in:

1. Google Rich Results Test
2. Schema.org Validator
3. Google Search Console URL Inspection

## Notes

- Public phone is migrated to `+60 11-1662 7349`.
- Public registration-number display has been removed from website-facing code.
- Schema helpers avoid exposing private registration identifiers.

---

**Date:** 2026-08-27  
**Round:** Awning Installation pillar + supporting blog cluster (post 1) — Rich Results-style structural validation on a production build (`next start`, 5,799 static pages).

## Pages validated (programmatic, on served HTML)

Awning hub pages ×3 locales (`/services/awning-installation`, `/ms/…`, `/zh/…`):

- **Service** — `name`, `provider`, `areaServed` present; `offers` present **without** a numeric
  `price` (`priceSpecification.description = "Project-specific quotation on request"`) — quote-only
  honesty rule holds; no fabricated `aggregateRating`/`review`.
- **FAQPage** — exactly 15 `Question` entries per locale, each with non-empty
  `acceptedAnswer.text`; no duplicate questions.
- **HowTo** — exactly 6 steps per locale, each with `name` + `text`.
- **BreadcrumbList** — Home → Services → Awning Installation (locale-native labels).
- **WebPage/speakable** block present.
- `<html lang>` = en-MY / ms-MY / zh-MY; single H1 per page; full `hreflang` cluster
  (en-MY, ms-MY, zh-MY, x-default) on-page and in `sitemap.xml`.

Awning sub-service pages (spot-check per locale): Service schema with offers and **no numeric
price**, FAQ schema, BreadcrumbList, full hreflang cluster. EN routes render 6 quote-safe FAQs;
MS/ZH native specialty blocks render 4 FAQs each (per-page MS/ZH parity enforced by
`audit:specialty-locale`) — established site-wide pattern, unchanged.

Blog post `polycarbonate-vs-metal-vs-acp-awning-malaysia` ×3 locales: EN emits BlogPosting
schema (headline/author/datePublished); canonical self-referencing; full hreflang cluster;
article body contains 5+ awning-silo internal links. MS/ZH blog routes match the existing
site-wide blog pattern (no BlogPosting on locale articles — see note below).

## Findings

- All awning + new-blog pages pass structural (Rich Results-style) validation with 0 defects.
- **Known pre-existing gap (not introduced by the awning work):** MS/ZH blog article routes
  (all 209 topics × 2 locales) do not emit BlogPosting/Article schema — only EN blog pages do.
  Recorded as a site-wide follow-up candidate in `SESSION_LOG.md` (2026-08-27, awning session);
  deliberately not changed in the awning session to avoid sweeping schema changes outside
  project scope.
- `/estimate/awning-installation` correctly returns 404 (quote-only service; estimator
  deliberately not generated — no dead link advertised anywhere).

