"use client";

import React from "react";
import { useLang } from "@/context/lang-context";
import type { ServiceDetail } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import { ServiceDetailHero } from "@/components/sections/service-detail-hero";
import { ServiceDetailContent } from "@/components/sections/service-detail-content";
import { SubserviceDetailHero } from "@/components/sections/subservice-detail-hero";
import { SubserviceDetailContent } from "@/components/sections/subservice-detail-content";
import type { SubService } from "@/config/services-data";
import { ServiceEstimatorBlock } from "@/components/tools/service-estimator-block";
import { NapContactStrip } from "@/components/content/nap-contact-strip";

type LocaleServiceViewProps = {
  service: ServiceDetail;
  sub?: SubService;
  /** Audit P4-06 — slim include/exclude data from the rate-book, computed on
      the server so the 63 KB rate-book registry never enters the client
      bundle. Threaded through to the pricing section. */
  scopeSummary?: {
    scopes: { name: string; published: string }[];
    quoteOnly: { name: string; desc: string }[];
  };
};

/**
 * Client-side wrapper that picks the localized content for the active
 * language (EN / MS / ZH) and renders either the parent service page or
 * a sub-service page. Falls back to English when a locale is missing.
 * 
 * IMPORTANT: The ServiceEstimatorBlock is rendered FIRST, before the hero,
 * so customers can immediately calculate their estimate without scrolling.
 */
export function LocaleServiceView({ service, sub, scopeSummary }: LocaleServiceViewProps) {
  const { lang } = useLang();
  const localized = getLocalizedService(service, lang);

  if (sub) {
    const subIndex = service.subServices.findIndex((item) => item.name === sub.name);
    const localizedSub = subIndex >= 0 ? localized.subServices[subIndex] ?? sub : sub;

    return (
      <>
        <SubserviceDetailHero service={localized} sub={localizedSub} />
        <SubserviceDetailContent service={localized} sub={localizedSub} baseService={service} />
        {/* Audit P4-15 — NAP contact strip at the end of the content block. */}
        <NapContactStrip service={localized.title} />
      </>
    );
  }

  return (
    <>
      {/* Calculator/Estimator at TOP - before hero image for immediate access */}
      {/* Uses the localized title/warranty (not the raw English service) so the
          estimator wizard, package name and share-bar text stay in the
          visitor's language. */}
      <ServiceEstimatorBlock slug={service.slug} title={localized.title} warranty={localized.warranty} />
      
      {/* Hero section comes AFTER estimator */}
      <ServiceDetailHero service={localized} />
      
      {/* Rest of content (overviews, FAQs, etc.) */}
      <ServiceDetailContent service={localized} scopeSummary={scopeSummary} />

      {/* Audit P4-15 — NAP contact strip at the end of the content block. */}
      <NapContactStrip service={localized.title} />
    </>
  );
}
