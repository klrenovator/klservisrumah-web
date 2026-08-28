import React from "react";
import { notFound, redirect } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EstimateSharePage } from "@/components/estimate/estimate-share-page";
import { servicesData } from "@/config/services-data";
import { ESTIMATE_INDEX_PATH, estimatePath, genericEstimateSlugs } from "@/config/estimate-links";
import { DEDICATED_TOOL_BY_SERVICE } from "@/lib/estimator/service-estimator";
import { buildMetadata } from "@/lib/seo-meta";

/**
 * Import the share page statically (audit C2 / P2-C1 / P4-01).
 * `next/dynamic` + a loading fallback opened a Suspense boundary that flushed
 * only breadcrumbs into `<main>` and streamed the H1 after `</footer>` for
 * JS-less crawlers — the same defect the root `loading.tsx` files caused.
 */

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
        warranty={service.warranty}
        startPrice={service.startPrice}
      />
    </>
  );
}
