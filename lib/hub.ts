import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo-meta";
import type { GenericContentPage } from "@/config/content-data";
import { servicesData } from "@/config/services-data";
import type { HubItem } from "@/components/content/content-hub-page";

const baseUrl = "https://www.klservisrumah.my";

type HubMeta = {
  title: string;
  description: string;
  path: string;
  /**
   * Real per-language URL cluster (audit P3-12). Only hubs that have genuine
   * localized `/ms` + `/zh` twins (the ten content-pod hubs) pass this; pages
   * without localized twins keep the self-referencing cluster.
   */
  languageUrls?: { en: string; ms: string; zh: string };
};

export function getHubMetadata({ title, description, path, languageUrls }: HubMeta): Metadata {
  // Routed through the central builder so every hub gets a self-canonical,
  // hreflang-correct and length-clamped title/description.
  return buildMetadata({ title, description, path, languageUrls });
}

export function genericToHubItems(pages: GenericContentPage[], basePath: string): HubItem[] {
  return pages.map((page) => ({
    slug: page.slug,
    title: page.title,
    category: page.category,
    intro: page.intro,
    href: `${basePath}/${page.slug}`,
    relatedServiceTitle: page.relatedServiceSlug ? servicesData[page.relatedServiceSlug]?.title : undefined,
    bullets: page.bullets
  }));
}

export function getItemListSchema(name: string, description: string, path: string, items: HubItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}${path}#collection`,
    name,
    description,
    url: `${baseUrl}${path}`,
    isPartOf: { "@id": `${baseUrl}/#website` },
    publisher: { "@id": `${baseUrl}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `${baseUrl}${item.href ?? `${path}/${item.slug}`}`
      }))
    }
  };
}
