import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

/**
 * SiteHead — the `<head>` children shared by all three root layouts.
 *
 * Since the site uses multiple root layouts (one per language tree, so each
 * tree can ship a correct server-side `<html lang>`), the small amount of
 * head content that is identical everywhere lives here instead of being
 * duplicated three times: the Bing Webmaster verification meta and the
 * site-wide JSON-LD schemas (Organization + WebSite).
 *
 * A single business entity (`HomeAndConstructionBusiness` @ `#organization`)
 * is emitted site-wide. A parallel `LocalBusiness` @ `#localbusiness` node
 * was removed (audit P5-01) — it duplicated NAP/areaServed and split
 * Knowledge-Graph signals across two IDs. Tool/service graphs reference
 * `#organization` only.
 */
export function SiteHead() {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <>
      {/* Bing Webmaster verification — explicit meta guarantees detection even if Metadata API changes */}
      <meta name="msvalidate.01" content="6CA0BEF9CB1FECC50C10A3F56F7ED27E" />

      {/* 1. Organization / HomeAndConstructionBusiness — single site entity */}
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
