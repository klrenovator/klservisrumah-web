import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { getMarketRatesForService, type MarketRateItem } from "@/config/market-rates";
import { getArticleSchema, getFAQSchema, getOfferCatalogSchema } from "@/lib/seo";
import { buildServiceBundle } from "@/lib/location-bundles";
import { LocaleServiceCostView } from "@/components/sections/locale-service-cost-view";

// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} Cost in KL & Selangor — 2026 Pricing Guide`,
    description: `How much does ${service.title.toLowerCase()} cost in KL & Selangor? See real price ranges, cost factors, quote examples, and WhatsApp booking.`,
    path: `/services/${slug}/cost`,
    canonicalPath: `/services/${slug}`
  });
}

export default async function CostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) notFound();
  const rates = getMarketRatesForService(slug as MarketRateItem["serviceSlug"]);
  const faqs = [
    { q: `What is the starting price for ${service.title}?`, a: `${service.title} starts from ${service.startPrice}. Final cost depends on dimensions, access, materials, and actual site condition.` },
    { q: "Are your prices fair for KL & Selangor?", a: "Yes. KL Servis Rumah prices are the fair Klang Valley standard: not inflated, not underpriced, and confirmed before work starts." },
    { q: "Can I get a quote from photos?", a: "For many small jobs, clear photos and measurements help us estimate. Complex leaks, ceilings, and exterior access may need inspection." },
    { q: "Do you charge hidden fees?", a: "No. Additional scope is explained and approved before proceeding." }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(service.subServices)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: `${service.title} Cost in KL & Selangor`, slug: `${slug}/cost`, excerpt: service.metaDesc, path: `/services/${slug}/cost`, category: "Pricing" })) }} />

      <LocaleServiceCostView slug={slug} bundle={buildServiceBundle(service)} rates={rates} />
    </>
  );
}
