import type { Locale } from "@/lib/i18n";
import type { ServiceDetail } from "@/config/services-data";

/**
 * Returns the service with localized content applied for the given locale.
 * Falls back to English when a locale-specific field is missing.
 * Sub-services, process, and FAQs are also swapped wholesale when a locale
 * override exists, since individual field-level fallback inside arrays is
 * rarely useful for a single-language list.
 */
export function getLocalizedService(service: ServiceDetail, locale: Locale): ServiceDetail {
  if (locale === "en") return service;
  const override = service.i18n?.[locale];
  if (!override) return service;
  return {
    ...service,
    title: override.title || service.title,
    tagline: override.tagline || service.tagline,
    description: override.description || service.description,
    highlights: override.highlights?.length ? override.highlights : service.highlights,
    subServices: override.subServices?.length ? override.subServices : service.subServices,
    process: override.process?.length ? override.process : service.process,
    faqs: override.faqs?.length ? override.faqs : service.faqs,
    metaTitle: override.metaTitle || service.metaTitle,
    metaDesc: override.metaDesc || service.metaDesc,
    aioSummary: override.aioSummary || service.aioSummary,
    warranty: override.warranty || service.warranty
  };
}
