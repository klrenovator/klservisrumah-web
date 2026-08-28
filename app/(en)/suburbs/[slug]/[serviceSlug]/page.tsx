import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { suburbPages } from "@/config/suburb-data";
import { servicesData } from "@/config/services-data";
import { SUBURB_ORIGINAL_SLUGS } from "@/config/suburb-twin-slugs.generated";
import { getFAQSchema, getLocalBusinessServiceSchema } from "@/lib/seo";
import { buildServiceBundle, buildServiceLinks, buildSuburbBundle, buildSuburbServicePairBundle } from "@/lib/location-bundles";
import { LocaleSuburbServiceView } from "@/components/sections/locale-suburb-service-view";

// Every valid param is enumerated in `generateStaticParams()`, so anything
// else must 404 rather than be rendered on demand and cached as a 200
// (a soft 404). See `app/[lang]/[[...slug]]/page.tsx` for the full rationale.
export const dynamicParams = false;

/**
 * BP-1 phase 1 — only the suburbs with NO `/areas` twin get pages here.
 *
 * 37 of the 52 published suburbs are also coverage areas, so
 * `/suburbs/<x>/<svc>` and `/areas/<x>/<svc>` shipped the same place, service
 * and offer on two indexable URLs — 1,073 self-competing duplicates. Those
 * pairs used a `canonicalPath` override to point at the `/areas` page, but a
 * canonical is only a hint: Google still crawled, rendered and stored all
 * 1,073 pages before discarding them, and every internal link into a twin
 * spent equity on a URL with no independent existence.
 *
 * The twins are now **not generated at all** and 301-redirect to
 * `/areas/<slug>/<svc>` from `middleware.ts` (see `lib/bp1-consolidation.ts`).
 * The 15 remaining suburbs have genuinely unique content and no `/areas`
 * equivalent, so they keep real, self-canonical pages.
 *
 * `scripts/bp1-consolidation-audit.ts` fails the build if a twin page is ever
 * generated again or if any internal link points back at one.
 */
export function generateStaticParams() {
  const originalSlugs = new Set(SUBURB_ORIGINAL_SLUGS);
  return suburbPages
    .filter((suburb) => originalSlugs.has(suburb.slug))
    .flatMap((suburb) => Object.keys(servicesData).map((serviceSlug) => ({ slug: suburb.slug, serviceSlug })));
}

export async function generateMetadata(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const suburb = suburbPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!suburb || !service) return {};

  return buildMetadata({
    title: `Local ${suburb.name} ${service.title}`,
    description: `Book ${service.title.toLowerCase()} in ${suburb.name}. View local service scope and upfront pricing, then request a clear quote on WhatsApp.`,
    path: `/suburbs/${suburb.slug}/${service.slug}`,
    image: service.heroImage,
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
        pairBundle={buildSuburbServicePairBundle(suburb, service)}
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
