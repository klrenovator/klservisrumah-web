import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { suburbPages } from "@/config/suburb-data";
import { getLocalBusinessServiceSchema } from "@/lib/seo";
import { buildAreaLinks, buildServiceBundle, buildServiceLinks } from "@/lib/location-bundles";
import { LocaleNearMeHub } from "@/components/sections/locale-near-me-hub";

// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(servicesData).map((serviceSlug) => ({ serviceSlug }));
}

export async function generateMetadata(props: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await props.params;
  const service = servicesData[serviceSlug];
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} Near Me in KL & Selangor`,
    description: `Find ${service.title.toLowerCase()} near you in KL & Selangor. Check service areas, suburbs, upfront pricing and WhatsApp dispatch.`,
    path: `/near-me/${service.slug}`
  });
}

export default async function NearMeServicePage(props: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await props.params;
  const service = servicesData[serviceSlug];
  if (!service) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessServiceSchema(areaPages[0], service, `/near-me/${service.slug}`)) }} />

      <LocaleNearMeHub
        serviceSlug={service.slug}
        serviceBundle={buildServiceBundle(service)}
        relatedServices={buildRelatedServiceBundles(service.slug)}
        areaLinks={buildAreaLinks(areaPages, (area) => `/areas/${area.slug}/${service.slug}`)}
        suburbChips={suburbPages.slice(0, 24).map((suburb) => ({ slug: suburb.slug, name: suburb.name }))}
      />
    </>
  );
}

/** Circular selection gives each near-me hub equal, contextual sibling links. */
function buildRelatedServiceBundles(serviceSlug: string) {
  const allServices = Object.values(servicesData);
  const currentIndex = allServices.findIndex((service) => service.slug === serviceSlug);

  const relatedServices = Array.from({ length: Math.min(6, allServices.length - 1) }, (_, offset) => (
    allServices[(currentIndex + offset + 1) % allServices.length]
  ));

  return buildServiceLinks(relatedServices, (service) => `/near-me/${service.slug}`);
}
