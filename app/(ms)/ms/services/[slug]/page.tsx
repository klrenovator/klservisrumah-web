import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import { buildMetadata } from "@/lib/seo-meta";
import { LocaleServicePage, localizedServiceLanguageUrls } from "@/components/sections/locale-service-page";

/**
 * Real, indexable Bahasa Malaysia service pages — part of the H3 pilot that
 * gives MS search actual crawlable URLs for the service catalogue (the
 * rest of the site switches language client-side at one canonical URL).
 * Fully server-rendered in Malay; invalid slugs return a real 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  const localized = getLocalizedService(service, "ms");
  return buildMetadata({
    title: localized.metaTitle,
    description: localized.metaDesc,
    path: `/ms/services/${slug}`,
    image: service.heroImage,
    languageUrls: localizedServiceLanguageUrls(slug),
    ogLocale: "ms_MY",
    ogAlternateLocales: ["en_MY", "zh_MY"],
    keywords: [
      localized.title,
      `${localized.title} KL`,
      `${localized.title} Selangor`,
      `${localized.title} harga`,
      "perkhidmatan rumah Malaysia"
    ]
  });
}

export default async function MsServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!servicesData[slug]) notFound();
  return <LocaleServicePage locale="ms" slug={slug} />;
}
