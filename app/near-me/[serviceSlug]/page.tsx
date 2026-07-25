import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { suburbPages } from "@/config/suburb-data";
import { getLocalBusinessServiceSchema } from "@/lib/seo";
import { buildAreaLinks, buildServiceBundle } from "@/lib/location-bundles";
import { LocaleNearMeHub } from "@/components/sections/locale-near-me-hub";

export function generateStaticParams() {
  return Object.keys(servicesData).map((serviceSlug) => ({ serviceSlug }));
}

export async function generateMetadata(props: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await props.params;
  const service = servicesData[serviceSlug];
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} Near Me in KL & Selangor`,
    description: `Find ${service.title.toLowerCase()} near you in KL & Selangor. Check service areas, suburbs, market-rate pricing and WhatsApp dispatch.`,
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
        areaLinks={buildAreaLinks(areaPages, (area) => `/areas/${area.slug}/${service.slug}`)}
        suburbChips={suburbPages.slice(0, 24).map((suburb) => ({ slug: suburb.slug, name: suburb.name }))}
      />
    </>
  );
}
