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
 * Real, indexable 中文 cost guides for the service catalogue — P3-12 phase 3.
 * Same contract as the MS twin: a genuine self-canonical hreflang cluster
 * (EN/MS/ZH), 中文 in the very first response, a true 404 on anything the
 * registry does not publish.
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
  const t = getServerTranslator("zh");
  return buildMetadata({
    title: t("costPage.metaTitle", { name: localized.title }),
    description: t("costPage.metaDesc", { name: localized.title }),
    path: SERVICE_COST_LOCALE_PATHS.zh(slug),
    image: service.heroImage,
    languageUrls: localizedServiceCostLanguageUrls(slug),
    ogLocale: "zh_MY",
    ogAlternateLocales: ["en_MY", "ms_MY"],
    ogTemplate: "cost"
  });
}

export default async function ZhServiceCostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!servicesData[slug]) notFound();
  return <LocaleServiceCostPage locale="zh" slug={slug} />;
}
