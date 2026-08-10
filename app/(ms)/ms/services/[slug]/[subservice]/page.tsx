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
 * Real, indexable Bahasa Malaysia specialty pages for the priority
 * Painting + Ceiling tranche. Each carries a real three-way hreflang cluster
 * (EN/MS/ZH). Only specialties with an authored native block render here;
 * everything else is a true 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return localeSpecialtyStaticParams("ms");
}

export async function generateMetadata(props: { params: Promise<{ slug: string; subservice: string }> }) {
  const { slug, subservice } = await props.params;
  const service = servicesData[slug];
  if (!service) return {};
  const content = getSpecialtyLocaleContent(slug, subservice, "ms");
  if (!content) return {};
  const localized = getLocalizedService(service, "ms");
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDesc,
    path: `/ms/services/${slug}/${subservice}`,
    image: service.heroImage,
    languageUrls: localeSpecialtyPaths(slug, subservice),
    ogLocale: "ms_MY",
    ogAlternateLocales: ["en_MY", "zh_MY"],
    keywords: [content.name, `${content.name} KL`, `${content.name} Selangor`, localized.title],
  });
}

export default async function MsSpecialtyPage(props: { params: Promise<{ slug: string; subservice: string }> }) {
  const { slug, subservice } = await props.params;
  if (!servicesData[slug]) notFound();
  const hasContent = Boolean(getSpecialtyLocaleContent(slug, subservice, "ms"));
  if (!hasContent) notFound();
  return <LocaleSpecialtyPage locale="ms" slug={slug} subservice={subservice} />;
}
