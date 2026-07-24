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
