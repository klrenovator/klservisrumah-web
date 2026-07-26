import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { notFound } from "next/navigation";
import { areaPages } from "@/config/area-data";
import { servicesData } from "@/config/services-data";
import { getFAQSchema, getLocalBusinessServiceSchema } from "@/lib/seo";
import { buildAreaBundle, buildServiceBundle } from "@/lib/location-bundles";
import { LocaleNearMeView } from "@/components/sections/locale-near-me-view";

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
    // Location first. With the area name appended last, the 60-char clamp cut
    // mid-name — "… Near Me in Kota" collided for both Kota Damansara and Kota
    // Kemuning, shipping one <title> for two different pages. The location is
    // the ranking term on a near-me page, so it must survive truncation.
    // Leading with it yields 0 duplicates across all 1,036 combinations.
    title: `${area.name} ${service.title} Near Me`,
    description: `Looking for ${service.title.toLowerCase()} near me in ${area.name}? KL Servis Rumah covers ${area.landmarks.slice(0, 4).join(", ")} with WhatsApp booking.`,
    path: `/areas/${area.slug}/${service.slug}/near-me`
  });
}

export default async function NearMePage(props: { params: Promise<{ slug: string; serviceSlug: string }> }) {
  const { slug, serviceSlug } = await props.params;
  const area = areaPages.find((item) => item.slug === slug);
  const service = servicesData[serviceSlug];
  if (!area || !service) notFound();

  // Canonical English FAQ set for structured data; visible copy is localised
  // client-side by LocaleNearMeView.
  const faqs = [
    { q: `Is ${service.title} available near me in ${area.name}?`, a: `Yes. We cover ${area.name} and nearby landmarks such as ${area.landmarks.slice(0, 4).join(", ")}.` },
    { q: "How do I confirm nearest dispatch?", a: "Send your exact address or pin location on WhatsApp so we can check the closest available crew." },
    { q: "Will near-me pricing be higher?", a: "No arbitrary uplift. Prices follow standard market rate, with travel or access factors stated before work begins." }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessServiceSchema(area, service, `/areas/${area.slug}/${service.slug}/near-me`)) }} />

      <LocaleNearMeView
        areaSlug={area.slug}
        serviceSlug={service.slug}
        startPrice={service.startPrice}
        landmarks={area.landmarks}
        areaBundle={buildAreaBundle(area)}
        serviceBundle={buildServiceBundle(service)}
      />
    </>
  );
}
