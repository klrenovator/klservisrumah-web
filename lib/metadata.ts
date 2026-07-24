import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const baseUrl = "https://www.klservisrumah.my";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "service";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  locale?: "en_MY" | "ms_MY" | "zh_MY";
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  type = "website",
  keywords = [],
  publishedTime,
  modifiedTime,
  locale = "en_MY",
  noIndex = false
}: MetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${baseUrl}${normalizedPath}`;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image.startsWith("/") ? image : `/${image}`}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: normalizedPath,
      languages: {
        "en-MY": normalizedPath,
        "ms-MY": `/ms${normalizedPath === "/" ? "" : normalizedPath}`,
        "zh-MY": `/zh${normalizedPath === "/" ? "" : normalizedPath}`,
        "x-default": normalizedPath
      }
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      locale,
      type: type === "article" ? "article" : "website",
      publishedTime,
      modifiedTime
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export function buildServiceMetadata(service: { title: string; metaTitle: string; metaDesc: string; slug: string; heroImage: string }) {
  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDesc,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    type: "service",
    keywords: [service.title, `${service.title} KL`, `${service.title} Selangor`, "home services Malaysia"]
  });
}

export function buildLocalizedMetadata(lang: "ms" | "zh", path: string, title: string, description: string): Metadata {
  return buildPageMetadata({
    title,
    description,
    path: `/${lang}${path === "/" ? "" : path}`,
    locale: lang === "ms" ? "ms_MY" : "zh_MY",
    keywords: [siteConfig.name, "KL home services", "Malaysia"]
  });
}
