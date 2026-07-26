import React from "react";
import dynamic from "next/dynamic";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ToolPage } from "@/components/tools/tool-page";
import { toolsContent } from "@/config/tools-data";
import { getToolGraph } from "@/lib/estimator/schema";
import { buildMetadata } from "@/lib/seo-meta";

const content = toolsContent["painting-calculator"];

/**
 * The wizard is the only interactive part of this route. Deferring it keeps the
 * hero image, direct answer, price table and FAQ in the static HTML payload, so
 * the LCP element never waits on estimator JavaScript.
 */
const Wizard = dynamic(() => import("@/components/tools/estimator/wizards/painting-calculator"), {
  loading: () => (
    <div className="h-[34rem] animate-pulse rounded-3xl border border-slate-200 bg-slate-50" aria-hidden="true" />
  )
});

export const metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDesc,
  path: "/tools/painting-calculator",
  keywords: content.keywords,
  image: content.heroImage
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getToolGraph(content)) }}
      />
      <Breadcrumbs
        items={[
          { label: "Free Tools", href: "/tools" },
          { label: content.name, href: "/tools/painting-calculator" }
        ]}
      />
      <ToolPage content={content} intro={content.intro} wizard={<Wizard />} />
    </>
  );
}
