import React from "react";
import { notFound } from "next/navigation";
import { suburbPages } from "@/config/suburb-data";
import { servicesData } from "@/config/services-data";
import { getFAQSchema, getLocalBusinessServiceSchema } from "@/lib/seo";
import { buildServiceBundle, buildSuburbBundle } from "@/lib/location-bundles";
import { LocaleSuburbServiceView } from "@/components/sections/locale-suburb-service-view";

export function generateStaticParams() {
  return suburbPages.flatMap((suburb) => Object.keys(servicesData).map((serviceSlug) => ({ slug: suburb.slug, serviceSlug })));
}

export async function generateMetadata(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const suburb = suburbPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!suburb || !service) return {};
  return {
    title: `${service.title} in ${suburb.name} — From ${service.startPrice}`,
    description: `${service.title} in ${suburb.name}. ${suburb.metaDesc}`,
    alternates: { canonical: `/suburbs/${suburb.slug}/${service.slug}` }
  };
}

export default async function SuburbServicePage(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const suburb = suburbPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!suburb || !service) notFound();

  // Canonical English FAQ set for structured data; the visible body is
  // localised client-side by LocaleSuburbServiceView.
  const faqs = [
    ...suburb.faqs.slice(0, 2),
    { q: `How much does ${service.title} cost in ${suburb.name}?`, a: `${service.title} starts from ${service.startPrice}. Final pricing is market-rate and confirmed after checking scope, access and materials.` }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessServiceSchema(suburb, service, `/suburbs/${suburb.slug}/${service.slug}`)) }} />

      <LocaleSuburbServiceView
        suburbSlug={suburb.slug}
        suburbName={suburb.name}
        serviceSlug={service.slug}
        startPrice={service.startPrice}
        landmarks={suburb.landmarks}
        nearby={suburb.nearbySuburbs.map((nearbySlug) => ({
          slug: nearbySlug,
          name: suburbPages.find((item) => item.slug === nearbySlug)?.name ?? nearbySlug.replace(/-/g, " ")
        }))}
        suburbBundle={buildSuburbBundle(suburb)}
        serviceBundle={buildServiceBundle(service)}
      />
    </>
  );
}
