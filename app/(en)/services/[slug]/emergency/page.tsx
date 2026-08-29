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
import { EMERGENCY_SERVICES, isEmergencyService, getEmergencyContent } from "@/config/emergency-services";

// Only services with real emergency semantics still generate this page.
// The 17 retired slugs 301 to their service page in `middleware.ts`, so any
// other param must 404 rather than be rendered on demand and cached as a 200.
// See `app/[lang]/[[...slug]]/page.tsx` for the soft-404 rationale.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(EMERGENCY_SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service || !isEmergencyService(slug)) return {};
  const emergency = getEmergencyContent(slug, "en");
  const first = emergency?.emergencies[0] ?? "";
  return buildMetadata({
    title: `Urgent ${service.title} KL & Selangor`,
    description: `Urgent ${service.title.toLowerCase()}? ${first} We triage the risk, explain immediate steps, and confirm a fixed emergency quote before work begins.`,
    path: `/services/${slug}/emergency`,
    image: service.heroImage
  });
}

export default async function EmergencyPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service || !isEmergencyService(slug)) notFound();

  const content = Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [locale, getEmergencyContent(slug, locale)!])
  ) as Record<Locale, (typeof EMERGENCY_SERVICES)[string]["en"]>;

  const faqs = content.en.faqs;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema({ title: `Emergency ${service.title}`, description: service.description, startPrice: service.startPrice, slug: service.slug, includeCatalog: false })) }} />

      <LocaleServiceEmergencyView
        slug={slug}
        bundle={buildServiceBundle(service)}
        relatedServices={buildRelatedServiceBundles(service.slug)}
        coverageAreaNames={buildCoverageAreaNames()}
        content={content}
      />
    </>
  );
}

/** Circular selection gives each emergency guide six sibling emergency inlinks
 *  (from the kept emergency set only — retired pages must never be linked). */
function buildRelatedServiceBundles(serviceSlug: string) {
  const emergencySlugs = Object.keys(EMERGENCY_SERVICES);
  const currentIndex = emergencySlugs.indexOf(serviceSlug);

  const relatedServices = Array.from({ length: Math.min(6, emergencySlugs.length - 1) }, (_, offset) => (
    servicesData[emergencySlugs[(currentIndex + offset + 1) % emergencySlugs.length]]
  )).filter(Boolean);

  return buildServiceLinks(relatedServices, (service) => `/services/${service.slug}/emergency`);
}

function buildCoverageAreaNames(): LocaleMap<string[]> {
  return SUPPORTED_LOCALES.reduce((acc, locale) => {
    acc[locale] = areaPages.map((area) => getLocalizedArea(area, locale as Locale).name);
    return acc;
  }, {} as LocaleMap<string[]>);
}
