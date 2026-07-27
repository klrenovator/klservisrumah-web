import React from "react";
import dynamic from "next/dynamic";
import { notFound, redirect } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { servicesData } from "@/config/services-data";
import { ESTIMATE_INDEX_PATH, estimatePath, genericEstimateSlugs } from "@/config/estimate-links";
import { DEDICATED_TOOL_BY_SERVICE } from "@/lib/estimator/service-estimator";
import { buildMetadata } from "@/lib/seo-meta";

/**
 * The wizard form is the only heavy interactive part of the page; deferring it
 * keeps the heading, share bar and how-it-works copy in the static HTML.
 */
const EstimateSharePage = dynamic(
  () => import("@/components/estimate/estimate-share-page").then((mod) => mod.EstimateSharePage),
  {
    loading: () => (
      <div className="container-narrow pt-8">
        <div className="h-[30rem] animate-pulse rounded-3xl border border-slate-200 bg-slate-50" aria-hidden="true" />
      </div>
    )
  }
);

export const dynamicParams = false;

/**
 * Only the services that render the generic estimator here are pre-rendered.
 * The six services with a dedicated deep tool (painting, plumbing, ceiling,
 * plaster-ceiling, waterproofing, handyman) are answered by the middleware,
 * which 301-redirects their `/estimate/<slug>` URL straight to the tool — so
 * the shared link always lands on the best estimator for the trade, and no
 * redirect page is ever built or served from this route.
 */
export function generateStaticParams() {
  return genericEstimateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) return {};

  return buildMetadata({
    title: `${service.title} Cost Estimator`,
    description: `Free instant ${service.title.toLowerCase()} cost estimator for KL & Selangor. Answer a few questions and get a ballpark price — incl. labour & materials — from our published 2026 rates.`,
    path: estimatePath(slug),
    keywords: [
      `${service.title} cost`,
      `${service.title} price KL`,
      `${service.title} estimate`,
      "home service cost calculator Malaysia"
    ]
  });
}

export default async function EstimateServicePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  if (!service) notFound();

  // Belt-and-braces mirror of the middleware rule: if this page is ever
  // rendered directly for a dedicated-tool service (e.g. in a dev preview
  // without the middleware), it still forwards to the deep tool instead of
  // building a shallower duplicate of it.
  const dedicated = DEDICATED_TOOL_BY_SERVICE[slug];
  if (dedicated) redirect(`/tools/${dedicated}`);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Instant Estimators", href: ESTIMATE_INDEX_PATH },
          { name: `${service.title} Estimator`, href: estimatePath(slug) }
        ]}
      />
      <EstimateSharePage
        slug={service.slug}
        title={service.title}
        warranty={service.warranty}
        startPrice={service.startPrice}
      />
    </>
  );
}
