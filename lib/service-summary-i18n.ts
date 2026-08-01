import type { Locale } from "@/lib/i18n";
import type { ServiceSummary } from "@/config/service-summary.generated";

export function getLocalizedServiceSummary(service: ServiceSummary, locale: Locale): ServiceSummary {
  if (locale === "en") return service;
  const override = service.i18n?.[locale];
  if (!override) return service;

  return {
    ...service,
    title: override.title || service.title,
    tagline: override.tagline || service.tagline,
    subServices: override.subServices?.length ? override.subServices : service.subServices,
    warranty: override.warranty || service.warranty,
  };
}
