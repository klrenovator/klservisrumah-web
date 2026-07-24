import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { suburbPages } from "@/config/suburb-data";
import { problemPages } from "@/config/problem-data";
import { clusterPages, guidePages, comparisonPages, brandPages, processPages } from "@/config/content-data";
import { slugify } from "@/lib/utils";

export const TOPICAL_AUTHORITY_MAP = {
  servicePillars: Object.fromEntries(
    Object.values(servicesData).map((service) => [
      service.slug,
      {
        pillarPage: `/services/${service.slug}`,
        alternatePillarPage: `/${service.slug}`,
        subServices: service.subServices.map((sub) => ({
          slug: slugify(sub.name),
          title: sub.name,
          url: `/services/${service.slug}/${slugify(sub.name)}`
        })),
        clusterPages: clusterPages.filter((page) => page.relatedServiceSlug === service.slug).map((page) => `/services/${service.slug}/${page.slug}`),
        problems: problemPages.filter((problem) => problem.serviceSlug === service.slug).map((problem) => `/problems/${problem.slug}`),
        buyingGuides: guidePages.filter((page) => page.relatedServiceSlug === service.slug || page.title.toLowerCase().includes(service.slug)).map((page) => `/guides/${page.slug}`),
        comparisons: comparisonPages.filter((page) => page.title.toLowerCase().includes(service.slug)).map((page) => `/compare/${page.slug}`),
        brandPages: brandPages.filter((page) => page.relatedServiceSlug === service.slug).map((page) => `/brands/${page.slug}`),
        processPages: processPages.filter((page) => page.relatedServiceSlug === service.slug).map((page) => `/process/${page.slug}`),
        relatedServices: Object.keys(servicesData).filter((slug) => slug !== service.slug).slice(0, 3)
      }
    ])
  ),
  areaHierarchy: Object.fromEntries(
    areaPages.map((area) => [
      area.slug,
      {
        areaPage: `/areas/${area.slug}`,
        servicePages: Object.keys(servicesData).map((serviceSlug) => `/areas/${area.slug}/${serviceSlug}`),
        nearMePages: Object.keys(servicesData).map((serviceSlug) => `/areas/${area.slug}/${serviceSlug}/near-me`),
        suburbs: suburbPages.filter((suburb) => suburb.parentArea === area.slug).map((suburb) => suburb.slug)
      }
    ])
  ),
  crossLinkingRules: {
    painting: {
      ceiling: "After painting content, suggest ceiling crack and water-stain repair where relevant.",
      handyman: "Suggest curtain, shelf and TV mounting once repainting is complete."
    },
    plumbing: {
      waterproofing: "Pipe leaks and inter-floor leaks often require waterproofing diagnostics.",
      ceiling: "Ceiling stains after plumbing leaks should cross-link to ceiling repair."
    },
    ceiling: {
      waterproofing: "Sagging and stained ceilings should link to leak-source waterproofing pages.",
      painting: "Finished ceiling repairs often need primer and repainting."
    },
    waterproofing: {
      ceiling: "After active leaks are sealed, link to ceiling board replacement and repainting.",
      plumbing: "Confirm whether leak is pipe-related before membrane work."
    },
    handyman: {
      painting: "Wall drilling and mounting may require patching/repainting afterwards.",
      ceiling: "Fan, downlight, and partition tasks can overlap with ceiling works."
    }
  }
} as const;

export function getRelatedLinksForService(serviceSlug: keyof typeof servicesData) {
  const pillar = TOPICAL_AUTHORITY_MAP.servicePillars[serviceSlug];
  return [
    pillar.pillarPage,
    ...pillar.subServices.slice(0, 3).map((item) => item.url),
    ...pillar.problems.slice(0, 3),
    ...pillar.clusterPages.slice(0, 2)
  ];
}
