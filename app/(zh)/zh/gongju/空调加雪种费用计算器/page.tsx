import React from "react";
import dynamic from "next/dynamic";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ToolPage } from "@/components/tools/tool-page";
import { localizedToolContent, toolLocaleUrls } from "@/config/tools-i18n";
import { getToolGraph } from "@/lib/estimator/schema";
import { buildMetadata } from "@/lib/seo-meta";

const content = localizedToolContent("aircon-gas-topup-cost", "zh");

const Wizard = dynamic(() => import("@/components/tools/estimator/wizards/zh/aircon-gas-topup-cost"), {
  loading: () => <div className="h-[34rem] animate-pulse rounded-3xl border border-slate-200 bg-slate-50" aria-hidden="true" />
});

export const metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDesc,
  path: "/zh/gongju/空调加雪种费用计算器",
  keywords: content.keywords,
  image: content.heroImage,
  ogTemplate: "tool",
  languageUrls: toolLocaleUrls(content.slug)
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getToolGraph(content)) }} />
      <Breadcrumbs homeLabel="首页" ariaLabel="面包屑导航" items={[{ label: "免费工具", href: "/zh/gongju" }, { label: content.name, href: "/zh/gongju/空调加雪种费用计算器" }]} />
      <ToolPage content={content} intro={content.intro} wizard={<Wizard />} locale="zh" localeUrls={toolLocaleUrls(content.slug)} />
    </>
  );
}
