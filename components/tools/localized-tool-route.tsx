import React from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ToolPage } from "@/components/tools/tool-page";
import {
  TOOLS_INDEX_PATH,
  localizedToolContent,
  toolLocaleUrls,
  toolShellCopy,
  type ToolLocale
} from "@/config/tools-i18n";
import { getToolGraph } from "@/lib/estimator/schema";
import { buildMetadata } from "@/lib/seo-meta";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";

/**
 * Shared render + metadata for the concrete MS/ZH tool routes
 * (app/ms/alatan/<slug>/page.tsx, app/zh/gongju/<slug>/page.tsx).
 *
 * Each route file hard-codes its canonical English slug and its own dynamic
 * wizard import, so the route chunk ships exactly ONE wizard — matching the
 * per-route bundle discipline of the English /tools/* pages.
 */

export function localizedToolMetadata(locale: ToolLocale, canonicalSlug: string) {
  const shell = toolShellCopy[locale];
  const content = localizedToolContent(canonicalSlug, locale);
  const urls = toolLocaleUrls(canonicalSlug);
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDesc,
    path: urls[locale],
    keywords: content.keywords,
    image: content.heroImage,
    languageUrls: urls,
    ogLocale: shell.ogLocale,
    ogAlternateLocales: shell.ogAlternateLocales
  });
}

export function LocalizedToolRoute({
  locale,
  slug,
  wizard
}: {
  locale: ToolLocale;
  /** Canonical English slug (the wizard/content registry key). */
  slug: string;
  wizard: React.ReactNode;
}) {
  const shell = toolShellCopy[locale];
  const content = localizedToolContent(slug, locale);
  const urls = toolLocaleUrls(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getToolGraph(content, {
              url: `https://www.klservisrumah.my${urls[locale]}`,
              language: shell.schemaLanguage,
              howToName: shell.howToSchemaName(content.name),
              howToDescription: shell.howToSchemaDescription(content.name.toLowerCase(), content.estimatedMinutes)
            })
          )
        }}
      />
      <Breadcrumbs
        homeLabel={shell.homeLabel}
        items={[
          { label: shell.indexLabel, href: TOOLS_INDEX_PATH[locale] },
          { label: content.name, href: urls[locale] }
        ]}
      />
      <ToolPage content={content} intro={content.intro} wizard={wizard} locale={locale} localeUrls={urls} />

      {/* Crawl path from this tree to the other three localized trees.
          `ToolLocale` is "ms" | "zh" — this route never renders English. */}
      <LocaleTreeLinks locale={locale} current="tools" />
    </>
  );
}
