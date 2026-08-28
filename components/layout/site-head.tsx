import { getOrganizationReferenceSchema, getWebsiteSchema } from "@/lib/seo";

/**
 * SiteHead — the `<head>` children shared by all three root layouts.
 *
 * Since the site uses multiple root layouts (one per language tree, so each
 * tree can ship a correct server-side `<html lang>`), the small amount of
 * head content that is identical everywhere lives here instead of being
 * duplicated three times: the Bing Webmaster verification meta and the
 * site-wide JSON-LD schemas (Organization reference + WebSite).
 *
 * Schema architecture (audits P5-01 + P5-04):
 *
 *  - ONE business entity exists: `HomeAndConstructionBusiness` @ `#organization`.
 *    The parallel `LocalBusiness` @ `#localbusiness` node was removed (P5-01).
 *  - The FULL Organization node (knowsAbout, brand, 49-city areaServed,
 *    contactPoints, openingHours — ~10.7 KB) is emitted only on the three
 *    homepages, by the homepage page-components themselves.
 *  - Every page — including the homepages, where it merges with the full node
 *    by @id — gets the compact `getOrganizationReferenceSchema()` node
 *    (~0.7 KB) identifying the entity. Before P5-04 the full node was
 *    re-emitted here on all 3,669 pages: 22–31 KB of JSON-LD per page and
 *    220,616 repeated City nodes corpus-wide.
 */
export function SiteHead() {
  const orgSchema = getOrganizationReferenceSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <>
      {/* Bing Webmaster verification — explicit meta guarantees detection even if Metadata API changes */}
      <meta name="msvalidate.01" content="6CA0BEF9CB1FECC50C10A3F56F7ED27E" />

      {/* 1. Organization / HomeAndConstructionBusiness — compact @id-reference node */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {/* 2. WebSite Schema with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
