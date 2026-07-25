import type { Metadata } from "next";
import type { GenericContentPage } from "@/config/content-data";
import { servicesData } from "@/config/services-data";
import { siteConfig } from "@/config/site";
import type { HubItem } from "@/components/content/content-hub-page";

const baseUrl = "https://www.klservisrumah.my";

type HubMeta = {
  title: string;
  description: string;
  path: string;
};

export function getHubMetadata({ title, description, path }: HubMeta): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "en-MY": path,
        "ms-MY": `/ms${path}`,
        "zh-MY": `/zh${path}`,
        "x-default": path
      }
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.defaultOgImage, width: 1200, height: 630, alt: title }],
      locale: "en_MY",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.defaultOgImage]
    }
  };
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
