import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import { buildMetadata } from "@/lib/seo-meta";
import { LocaleServicePage, localizedServiceLanguageUrls } from "@/components/sections/locale-service-page";
import { getServiceSeo } from "@/config/service-seo";

/**
 * Real, indexable Simplified Chinese service pages — part of the H3 pilot
 * that gives ZH search actual crawlable URLs for the service catalogue.
 * Fully server-rendered in Chinese; invalid slugs return a real 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  const localized = getLocalizedService(service, "zh");
  const seo = getServiceSeo(service.slug, "zh", {
    title: localized.metaTitle,
    description: localized.metaDesc
  });
  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/zh/services/${slug}`,
    image: service.heroImage,
    languageUrls: localizedServiceLanguageUrls(slug),
    ogLocale: "zh_MY",
    ogAlternateLocales: ["en_MY", "ms_MY"],
    keywords: [
      localized.title,
      `${localized.title} 吉隆坡`,
      `${localized.title} 雪兰莪`,
      `${localized.title} 价格`,
      "马来西亚家居服务"
    ]
  });
}

export default async function ZhServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!servicesData[slug]) notFound();
  return <LocaleServicePage locale="zh" slug={slug} />;
}
