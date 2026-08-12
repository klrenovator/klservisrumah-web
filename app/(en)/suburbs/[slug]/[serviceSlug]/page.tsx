import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { suburbPages } from "@/config/suburb-data";
import { areaPages } from "@/config/area-data";
import { servicesData } from "@/config/services-data";
import { getFAQSchema, getLocalBusinessServiceSchema } from "@/lib/seo";
import { buildServiceBundle, buildServiceLinks, buildSuburbBundle } from "@/lib/location-bundles";
import { LocaleSuburbServiceView } from "@/components/sections/locale-suburb-service-view";

// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

export function generateStaticParams() {
  return suburbPages.flatMap((suburb) => Object.keys(servicesData).map((serviceSlug) => ({ slug: suburb.slug, serviceSlug })));
}

export async function generateMetadata(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const suburb = suburbPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!suburb || !service) return {};

  // 37 of the 49 suburbs are also published as coverage areas, so
  // `/suburbs/<x>/<svc>` and `/areas/<x>/<svc>` were shipping the same title,
  // the same offer and near-identical copy on two indexable URLs — 1,036
  // self-competing duplicates. Where an `/areas` twin exists it is the stronger
  // page (roughly 2.7x the body copy), so consolidate the pair onto it.
  const areaTwin = areaPages.find((area) => area.slug === suburb.slug);

  return buildMetadata({
    // "Local" distinguishes these supporting suburb guides from an `/areas`
    // canonical twin even when both pages mention the same place and service.
    title: `Local ${suburb.name} ${service.title}`,
    description: `Book ${service.title.toLowerCase()} in ${suburb.name}. View local service scope and upfront pricing, then request a clear quote on WhatsApp.`,
    path: `/suburbs/${suburb.slug}/${service.slug}`,
    image: service.heroImage,
    canonicalPath: areaTwin
      ? `/areas/${areaTwin.slug}/${service.slug}`
      : `/suburbs/${suburb.slug}/${service.slug}`
  });
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
    { q: `How much does ${service.title} cost in ${suburb.name}?`, a: `${service.title} starts from ${service.startPrice}. Final pricing is fair and confirmed after checking scope, access and materials.` }
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
        otherServices={buildOtherServiceBundles(service.slug, suburb.slug)}
      />
    </>
  );
}


/** Circular selection gives every suburb × service page the same twelve sibling inlinks. */
function buildOtherServiceBundles(serviceSlug: string, suburbSlug: string) {
  const allServices = Object.values(servicesData);
  const currentIndex = allServices.findIndex((service) => service.slug === serviceSlug);
  const relatedServices = Array.from({ length: Math.min(12, allServices.length - 1) }, (_, offset) => (
    allServices[(currentIndex + offset + 1) % allServices.length]
  ));
  return buildServiceLinks(relatedServices, (service) => `/suburbs/${suburbSlug}/${service.slug}`);
}
