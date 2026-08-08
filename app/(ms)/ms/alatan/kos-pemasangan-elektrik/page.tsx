import React from "react";
import dynamic from "next/dynamic";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ToolPage } from "@/components/tools/tool-page";
import { localizedToolContent, toolLocaleUrls } from "@/config/tools-i18n";
import { getToolGraph } from "@/lib/estimator/schema";
import { buildMetadata } from "@/lib/seo-meta";

const content = localizedToolContent("electrical-installation-cost", "ms");

const Wizard = dynamic(() => import("@/components/tools/estimator/wizards/ms/electrical-installation-cost"), {
  loading: () => <div className="h-[34rem] animate-pulse rounded-3xl border border-slate-200 bg-slate-50" aria-hidden="true" />
});

export const metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDesc,
  path: "/ms/alatan/kos-pemasangan-elektrik",
  keywords: content.keywords,
  image: content.heroImage,
  languageUrls: toolLocaleUrls(content.slug)
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getToolGraph(content)) }} />
      <Breadcrumbs homeLabel="Utama" ariaLabel="Laluan navigasi" items={[{ label: "Alat Percuma", href: "/ms/alatan" }, { label: content.name, href: "/ms/alatan/kos-pemasangan-elektrik" }]} />
      <ToolPage content={content} intro={content.intro} wizard={<Wizard />} locale="ms" localeUrls={toolLocaleUrls(content.slug)} />
    </>
  );
}
