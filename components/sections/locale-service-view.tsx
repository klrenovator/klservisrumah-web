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

type LocaleServiceViewProps = {
  service: ServiceDetail;
  sub?: SubService;
};

/**
 * Client-side wrapper that picks the localized content for the active
 * language (EN / MS / ZH) and renders either the parent service page or
 * a sub-service page. Falls back to English when a locale is missing.
 */
export function LocaleServiceView({ service, sub }: LocaleServiceViewProps) {
  const { lang } = useLang();
  const localized = getLocalizedService(service, lang);

  if (sub) {
    return (
      <>
        <SubserviceDetailHero service={localized} sub={sub} />
        <SubserviceDetailContent service={localized} sub={sub} />
      </>
    );
  }

  return (
    <>
      <ServiceDetailHero service={localized} />
      <ServiceDetailContent service={localized} />
    </>
  );
}
