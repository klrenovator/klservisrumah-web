import React from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EstimateHub } from "@/components/estimate/estimate-hub";
import { buildEstimateLinks, ESTIMATE_INDEX_PATH } from "@/config/estimate-links";
import { hasServiceEstimator } from "@/lib/estimator/service-estimator";
import { buildMetadata } from "@/lib/seo-meta";


export const metadata = buildMetadata({
  title: "Instant Cost Estimators for Every Home Service",
  description:
    "Free shareable cost estimators for all 28 home services in KL & Selangor. Send a customer the link — they answer a few questions and see a ballpark price, incl. labour & materials.",
  path: ESTIMATE_INDEX_PATH,
  keywords: [
    "home service cost estimator",
    "renovation cost calculator KL",
    "house repair estimate Malaysia",
    "instant quote KL Selangor"
  ]
});

/**
 * The shareable-estimator hub. One page listing a short, stable estimator URL
 * for every service — built so the business owner can copy a link and paste it
 * straight into a customer WhatsApp chat. Public and indexed: customers who
 * land here from search get the same one-tap path to a ballpark price.
 */
export default function EstimateHubPage() {
  // Quote-only services (e.g. awning installation) have no estimator — listing
  // their /estimate/<slug> here would be a dead link (that route 404s), so the
  // hub only links entries that actually resolve to an estimator or deep tool.
  const links = buildEstimateLinks().filter(
    (link) => link.kind === "dedicated" || hasServiceEstimator(link.slug)
  );
  // Audit P5-04: the hub previously re-described every estimator as an Offer
  // (8.6 KB OfferCatalog) even though each `/estimate/<slug>` page already
  // carries its own full SoftwareApplication + Service + rate-table graph.
  // An ordered ItemList of the estimator URLs says the same thing the visible
  // list says, at a third of the weight.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Instant home service cost estimators — KL & Selangor",
    numberOfItems: links.length,
    itemListElement: links.map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.title,
      item: `https://www.klservisrumah.my${link.resolvedPath}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Breadcrumbs
        items={[{ name: "Instant Estimators", href: ESTIMATE_INDEX_PATH }]}
      />
      <EstimateHub links={links} />
    </>
  );
}
