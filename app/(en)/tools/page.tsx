import React from "react";
import { ToolsIndexPage, buildToolsIndexGraph, type ToolIndexCard } from "@/components/tools/tools-index-page";
import { toolsList } from "@/config/tools-data";
import { TOOLS_INDEX_PATH, toolLocaleUrls, toolsIndexCopy } from "@/config/tools-i18n";
import { buildMetadata } from "@/lib/seo-meta";

const copy = toolsIndexCopy.en;
const path = TOOLS_INDEX_PATH.en;

export const metadata = buildMetadata({
  title: copy.metaTitle,
  description: copy.metaDesc,
  path,
  keywords: copy.keywords,
  languageUrls: {
    en: TOOLS_INDEX_PATH.en,
    ms: TOOLS_INDEX_PATH.ms,
    zh: TOOLS_INDEX_PATH.zh
  }
});

const tools: ToolIndexCard[] = toolsList.map((tool) => ({
  href: toolLocaleUrls(tool.slug).en,
  name: tool.name,
  metaDesc: tool.metaDesc,
  heroImage: tool.heroImage,
  heroAlt: tool.heroAlt,
  stats: tool.stats,
  estimatedMinutes: tool.estimatedMinutes
}));

export default function ToolsPage() {
  return (
    <ToolsIndexPage
      copy={copy}
        locale="en"
      path={path}
      tools={tools}
      graph={buildToolsIndexGraph({ path, copy, tools })}
    />
  );
}
