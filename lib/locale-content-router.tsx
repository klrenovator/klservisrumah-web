import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo-meta";
import { resolvePodHeader } from "@/lib/content-locale-resolver";
import { POD_HUB_I18N } from "@/config/content-locale-data";
import {
  podDetailPath,
  podDetailUrls,
  podHubPath,
  podHubUrls,
  podPage,
  podStaticParams,
  type ContentPodFamily,
} from "@/config/content-locale";
import { LocaleContentPageView } from "@/components/sections/locale-content-page";
import { LocaleContentHubPage } from "@/components/sections/locale-content-hub";
import type { Locale } from "@/lib/i18n";

type PodLocale = Exclude<Locale, "en">; // "ms" | "zh"

const OG_LOCALE: Record<PodLocale, { locale: string; alternates: [string, string] }> = {
  ms: { locale: "ms_MY", alternates: ["en_MY", "zh_MY"] },
  zh: { locale: "zh_MY", alternates: ["en_MY", "ms_MY"] },
};

type DetailParams = { slug: string };
type DetailProps = { params: Promise<DetailParams> };

export type LocalizedDetailRoute = {
  generateStaticParams: () => DetailParams[];
  generateMetadata: (props: DetailProps) => Promise<Metadata>;
  Page: (props: DetailProps) => Promise<React.JSX.Element>;
};

export type LocalizedHubRoute = {
  generateMetadata: () => Promise<Metadata> | Metadata;
  Page: () => React.JSX.Element;
};

/**
 * Build the `{ generateStaticParams, generateMetadata, Page }` export set for
 * one localized pod DETAIL route (`/<locale>/<family>/<slug>`). The route stub
 * adds `export const dynamicParams = false;` as a literal because Next.js only
 * statically analyzes route config values, so it must be hard-coded per file.
 *
 * Every kept pod family × locale calls this once; the route file itself stays a
 * thin stub so there is a single, audited implementation of the localized page
 * contract (static params frozen to the registry, a real 404 on anything else,
 * a localized self-canonical with the three-URL hreflang cluster, and a fully
 * server-rendered in-language page).
 */
export function localizedPodDetailRoute(family: ContentPodFamily, locale: PodLocale): LocalizedDetailRoute {
  function generateStaticParams(): DetailParams[] {
    return podStaticParams(family);
  }

  async function generateMetadata({ params }: DetailProps): Promise<Metadata> {
    const { slug } = await params;
    const page = podPage(family, slug);
    if (!page) return {};
    const header = resolvePodHeader(page, family, locale);
    const og = OG_LOCALE[locale];
    return buildMetadata({
      title: header.title,
      description: header.intro,
      path: podDetailPath(family, slug, locale),
      languageUrls: podDetailUrls(family, slug),
      ogLocale: og.locale,
      ogAlternateLocales: og.alternates,
      type: "article",
      keywords: [header.title, header.category],
    });
  }

  async function Page({ params }: DetailProps): Promise<React.JSX.Element> {
    const { slug } = await params;
    const page = podPage(family, slug);
    if (!page) notFound();
    return <LocaleContentPageView page={page} family={family} locale={locale} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}

/**
 * Build the `{ generateMetadata, Page }` export set for one localized pod HUB
 * (index) route (`/<locale>/<family>`).
 */
export function localizedPodHubRoute(family: ContentPodFamily, locale: PodLocale): LocalizedHubRoute {
  function generateMetadata(): Metadata {
    const copy = POD_HUB_I18N[family][locale];
    const og = OG_LOCALE[locale];
    return buildMetadata({
      title: copy.title,
      description: copy.description,
      path: podHubPath(family, locale),
      languageUrls: podHubUrls(family),
      ogLocale: og.locale,
      ogAlternateLocales: og.alternates,
      keywords: [copy.title, copy.eyebrow],
    });
  }

  function Page(): React.JSX.Element {
    return <LocaleContentHubPage family={family} locale={locale} />;
  }

  return { generateMetadata, Page };
}
