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
 * /zh/gongju — 中文（简体）工具索引页。真实、服务器渲染、可索引的中文内容：
 * 搜索“油漆费用计算器”的顾客应当落在这个页面上。（middleware 会放行
 * /zh/gongju，而不是 301 重定向到英文页。）
 */

const copy = toolsIndexCopy.zh;
const path = TOOLS_INDEX_PATH.zh;

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
  const content = localizedToolContent(tool.slug, "zh");
  return {
    href: toolLocaleUrls(tool.slug).zh,
    name: content.name,
    metaDesc: content.metaDesc,
    heroImage: content.heroImage,
    heroAlt: content.heroAlt,
    stats: content.stats,
    estimatedMinutes: content.estimatedMinutes
  };
});

export default function GongjuPage() {
  return (
    <>
      <ToolsIndexPage
        copy={copy}
        path={path}
        tools={tools}
        graph={buildToolsIndexGraph({ path, copy, tools, inLanguage: copy.schemaLanguage })}
      />

      {/* Crawl path from this tree to the other three localized trees. */}
      <LocaleTreeLinks locale="zh" current="tools" />
    </>
  );
}
