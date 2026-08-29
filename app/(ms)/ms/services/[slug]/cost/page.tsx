import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import { buildMetadata } from "@/lib/seo-meta";
import { getServerTranslator } from "@/lib/i18n-server";
import {
  LocaleServiceCostPage,
  SERVICE_COST_LOCALE_PATHS,
  localizedServiceCostLanguageUrls
} from "@/components/sections/locale-service-cost-page";

/**
 * Real, indexable Bahasa Malaysia cost guides for the service catalogue —
 * P3-12 phase 3, the last money page the language switch left English-only.
 * The 29 "how much does X cost" pages were the site's highest-intent URLs;
 * BM search could not rank a single one of them because they switched
 * language client-side at one English URL. Each now carries a real
 * self-canonical hreflang cluster (EN/MS/ZH) and serves Malay in the very
 * first response; invalid slugs return a true 404.
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
  const t = getServerTranslator("ms");
  return buildMetadata({
    title: t("costPage.metaTitle", { name: localized.title }),
    description: t("costPage.metaDesc", { name: localized.title }),
    path: SERVICE_COST_LOCALE_PATHS.ms(slug),
    image: service.heroImage,
    languageUrls: localizedServiceCostLanguageUrls(slug),
    ogLocale: "ms_MY",
    ogAlternateLocales: ["en_MY", "zh_MY"],
    ogTemplate: "cost",
    keywords: [
      localized.title,
      `${localized.title} harga`,
      `${localized.title} kos`,
      `kos ${localized.title} KL`,
      `kos ${localized.title} Selangor`
    ]
  });
}

export default async function MsServiceCostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!servicesData[slug]) notFound();
  return <LocaleServiceCostPage locale="ms" slug={slug} />;
}
