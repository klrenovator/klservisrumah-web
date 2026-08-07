import React from "react";
import { ToolsIndexPage, buildToolsIndexGraph, type ToolIndexCard } from "@/components/tools/tools-index-page";
import {
  TOOLS_INDEX_PATH,
  localizedToolContent,
  toolLocaleUrls,
  toolsIndexCopy
} from "@/config/tools-i18n";
import { toolsList } from "@/config/tools-data";
import { buildMetadata } from "@/lib/seo-meta";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";

/**
 * /ms/alatan — the Bahasa Malaysia tools index. Real, server-rendered,
 * indexable BM content: this is the page a customer searching
 * "kalkulator kos mengecat" should land on. (The middleware lets /ms/alatan
 * through instead of redirecting it to English.)
 */

const copy = toolsIndexCopy.ms;
const path = TOOLS_INDEX_PATH.ms;

export const metadata = buildMetadata({
  title: copy.metaTitle,
  description: copy.metaDesc,
  path,
  keywords: copy.keywords,
  languageUrls: {
    en: TOOLS_INDEX_PATH.en,
    ms: TOOLS_INDEX_PATH.ms,
    zh: TOOLS_INDEX_PATH.zh
  },
  ogLocale: copy.ogLocale,
  ogAlternateLocales: copy.ogAlternateLocales
});

const tools: ToolIndexCard[] = toolsList.map((tool) => {
  const content = localizedToolContent(tool.slug, "ms");
  return {
    href: toolLocaleUrls(tool.slug).ms,
    name: content.name,
    metaDesc: content.metaDesc,
    heroImage: content.heroImage,
    heroAlt: content.heroAlt,
    stats: content.stats,
    estimatedMinutes: content.estimatedMinutes
  };
});

export default function AlatanPage() {
  return (
    <>
      <ToolsIndexPage
        copy={copy}
        path={path}
        tools={tools}
        graph={buildToolsIndexGraph({ path, copy, tools, inLanguage: copy.schemaLanguage })}
      />

      {/* Crawl path from this tree to the other three localized trees. */}
      <LocaleTreeLinks locale="ms" current="tools" />
    </>
  );
}
