import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { areaPages } from "@/config/area-data";
import { servicesData } from "@/config/services-data";
import { getFAQSchema, getLocalBusinessServiceSchema } from "@/lib/seo";
import { buildAreaBundle, buildAreaServicePairBundle, buildServiceBundle, buildServiceLinks } from "@/lib/location-bundles";
import { LocaleAreaServiceView } from "@/components/sections/locale-area-service-view";

// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export function generateStaticParams() {
  return areaPages.flatMap((area) => Object.keys(servicesData).map((serviceSlug) => ({ slug: area.slug, serviceSlug })));
}

export async function generateMetadata(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const area = areaPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!area || !service) return {};
  return buildMetadata({
    // Lead with the location so long service names cannot truncate the local
    // intent or collide with another area in search results.
    title: `${area.name} ${service.title}`,
    description: `Book ${service.title.toLowerCase()} in ${area.name}. Review local scope and upfront pricing, then request a clear quote on WhatsApp.`,
    path: `/areas/${area.slug}/${service.slug}`,
    image: service.heroImage
  });
}

export default async function AreaServicePage(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const area = areaPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!area || !service) notFound();

  // Canonical English FAQ set for structured data; the visible page body is
  // rendered in the visitor's active language by the client wrapper.
  const faqs = [
    { q: `How fast can you reach ${area.name} for ${service.title}?`, a: `Timing depends on crew location and traffic, but ${area.name} is part of our active KL & Selangor dispatch coverage. Same-day slots are offered when available.` },
    { q: `Which ${area.name} neighbourhoods do you cover?`, a: `We cover key landmarks and neighbourhoods including ${area.landmarks.join(", ")}. Send your exact address on WhatsApp to confirm.` },
    { q: `How much does ${service.title} cost in ${area.name}?`, a: `${service.title} starts from ${service.startPrice}. Final price is confirmed at our published fair rate after scope, access and materials are checked.` }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessServiceSchema(area, service, `/areas/${area.slug}/${service.slug}`)) }} />

      <LocaleAreaServiceView
        areaSlug={area.slug}
        serviceSlug={service.slug}
        startPrice={service.startPrice}
        landmarks={area.landmarks}
        areaBundle={buildAreaBundle(area)}
        serviceBundle={buildServiceBundle(service)}
        pairBundle={buildAreaServicePairBundle(area, service)}
        relatedLinks={buildServiceLinks(
          Object.values(servicesData).filter((item) => item.slug !== service.slug),
          (item) => `/areas/${area.slug}/${item.slug}`
        )}
      />
    </>
  );
}
