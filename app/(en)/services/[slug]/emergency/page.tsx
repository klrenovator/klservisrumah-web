import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { getFAQSchema, getServiceSchema } from "@/lib/seo";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { getLocalizedArea } from "@/lib/location-i18n";
import { buildServiceBundle, buildServiceLinks, type LocaleMap } from "@/lib/location-bundles";
import { LocaleServiceEmergencyView } from "@/components/sections/locale-service-emergency-view";

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
    title: `Urgent ${service.title} KL & Selangor`,
    description: `Need urgent ${service.title.toLowerCase()} in KL & Selangor? Check priority availability, immediate steps, pricing factors and WhatsApp booking details.`,
    path: `/services/${slug}/emergency`,
    image: service.heroImage
  });
}

export default async function EmergencyPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) notFound();
  const faqs = [
    { q: `What counts as an emergency for ${service.title}?`, a: "Active water leaks, safety risks, flooding, sagging structures, jammed locks, and urgent fixture failures are treated as priority cases." },
    { q: "Is emergency pricing higher?", a: "Emergency work can cost more than scheduled work because of priority dispatch and urgent handling, but pricing is still confirmed before work starts." },
    { q: "How fast can a technician arrive?", a: "Average timing depends on location and crew availability. Send your area and photos early for the fastest review." }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema({ title: `Emergency ${service.title}`, description: service.description, startPrice: service.startPrice, slug: service.slug })) }} />

      <LocaleServiceEmergencyView
        slug={slug}
        bundle={buildServiceBundle(service)}
        relatedServices={buildRelatedServiceBundles(service.slug)}
        coverageAreaNames={buildCoverageAreaNames()}
        faqs={faqs}
      />
    </>
  );
}

/** Circular selection gives each emergency guide the same six sibling inlinks. */
function buildRelatedServiceBundles(serviceSlug: string) {
  const allServices = Object.values(servicesData);
  const currentIndex = allServices.findIndex((service) => service.slug === serviceSlug);

  const relatedServices = Array.from({ length: Math.min(6, allServices.length - 1) }, (_, offset) => (
    allServices[(currentIndex + offset + 1) % allServices.length]
  ));

  return buildServiceLinks(relatedServices, (service) => `/services/${service.slug}/emergency`);
}

function buildCoverageAreaNames(): LocaleMap<string[]> {
  return SUPPORTED_LOCALES.reduce((acc, locale) => {
    acc[locale] = areaPages.map((area) => getLocalizedArea(area, locale as Locale).name);
    return acc;
  }, {} as LocaleMap<string[]>);
}
