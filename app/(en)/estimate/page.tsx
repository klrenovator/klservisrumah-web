import React from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EstimateHub } from "@/components/estimate/estimate-hub";
import { buildEstimateLinks, ESTIMATE_INDEX_PATH } from "@/config/estimate-links";
import { buildMetadata } from "@/lib/seo-meta";
import { getOfferCatalogSchema } from "@/lib/seo";

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
  const links = buildEstimateLinks();
  const catalogSchema = getOfferCatalogSchema(
    links.map((link) => ({ name: link.title, price: link.startPrice }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      <Breadcrumbs
        items={[{ name: "Instant Estimators", href: ESTIMATE_INDEX_PATH }]}
      />
      <EstimateHub links={links} />
    </>
  );
}
