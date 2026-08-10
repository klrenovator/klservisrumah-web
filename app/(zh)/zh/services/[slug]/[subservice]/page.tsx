import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import { buildMetadata } from "@/lib/seo-meta";
import {
  LocaleSpecialtyPage,
  localeSpecialtyPaths,
  localeSpecialtyStaticParams,
} from "@/components/sections/locale-specialty-page";
import { getSpecialtyLocaleContent } from "@/config/specialty-locale-content";

/**
 * Real, indexable Chinese (ZH) specialty pages for the priority
 * Painting + Ceiling tranche. Each carries a real three-way hreflang cluster
 * (EN/MS/ZH). Only specialties with an authored native block render here;
 * everything else is a true 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return localeSpecialtyStaticParams("zh");
}

export async function generateMetadata(props: { params: Promise<{ slug: string; subservice: string }> }) {
  const { slug, subservice } = await props.params;
  const service = servicesData[slug];
  if (!service) return {};
  const content = getSpecialtyLocaleContent(slug, subservice, "zh");
  if (!content) return {};
  const localized = getLocalizedService(service, "zh");
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDesc,
    path: `/zh/services/${slug}/${subservice}`,
    image: service.heroImage,
    languageUrls: localeSpecialtyPaths(slug, subservice),
    ogLocale: "zh_MY",
    ogAlternateLocales: ["en_MY", "ms_MY"],
    keywords: [content.name, `${content.name} 吉隆坡`, `${content.name} 雪兰莪`, localized.title],
  });
}

export default async function ZhSpecialtyPage(props: { params: Promise<{ slug: string; subservice: string }> }) {
  const { slug, subservice } = await props.params;
  if (!servicesData[slug]) notFound();
  const hasContent = Boolean(getSpecialtyLocaleContent(slug, subservice, "zh"));
  if (!hasContent) notFound();
  return <LocaleSpecialtyPage locale="zh" slug={slug} subservice={subservice} />;
}
