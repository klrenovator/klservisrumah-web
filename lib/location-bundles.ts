import type { Locale } from "@/lib/i18n";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import type { AreaDetail } from "@/config/area-data";
import type { SuburbDetail } from "@/config/suburb-data";
import type { ServiceDetail } from "@/config/services-data";
import { getLocalizedArea, getLocalizedSuburb } from "@/lib/location-i18n";
import { getLocalizedService } from "@/lib/service-i18n";

/**
 * Server-side locale bundle builders for the location pages.
 *
 * The location routes render 1,700+ static pages, so the client components
 * must NOT import the large `servicesData` / `areaPages` / `suburbPages`
 * datasets directly — doing so pulls ~170 kB of JSON into the route's
 * first-load JS and breaks the Core Web Vitals budget (permanent rule 17).
 *
 * Instead, the server component pre-computes a small EN/MS/ZH bundle holding
 * only the strings the page actually renders, and the client wrapper picks
 * the entry matching the active locale.
 */

export type LocaleMap<T> = Record<Locale, T>;

function forEachLocale<T>(build: (locale: Locale) => T): LocaleMap<T> {
  return SUPPORTED_LOCALES.reduce((acc, locale) => {
    acc[locale] = build(locale);
    return acc;
  }, {} as LocaleMap<T>);
}

export type SubServiceCopy = { name: string; price: string; desc: string };

export type AreaBundleEntry = {
  name: string;
  description: string;
  faqs: { q: string; a: string }[];
};

export function buildAreaBundle(area: AreaDetail): LocaleMap<AreaBundleEntry> {
  return forEachLocale((locale) => {
    const localized = getLocalizedArea(area, locale);
    return {
      name: localized.name,
      description: localized.description,
      faqs: localized.faqs
    };
  });
}

export type SuburbBundleEntry = {
  housingProfile: string;
  commonIssues: string[];
  faqs: { q: string; a: string }[];
};

export function buildSuburbBundle(suburb: SuburbDetail): LocaleMap<SuburbBundleEntry> {
  return forEachLocale((locale) => {
    const localized = getLocalizedSuburb(suburb, locale);
    return {
      housingProfile: localized.housingProfile,
      commonIssues: localized.commonIssues,
      faqs: localized.faqs
    };
  });
}

export type ServiceBundleEntry = {
  title: string;
  description: string;
  subServices: SubServiceCopy[];
};

export function buildServiceBundle(service: ServiceDetail): LocaleMap<ServiceBundleEntry> {
  return forEachLocale((locale) => {
    const localized = getLocalizedService(service, locale);
    return {
      title: localized.title,
      description: localized.description,
      subServices: localized.subServices.map((sub) => ({
        name: sub.name,
        price: sub.price,
        desc: sub.desc
      }))
    };
  });
}

/** Compact localized title/tagline pairs used by internal link grids. */
export type ServiceLinkEntry = {
  href: string;
  titles: LocaleMap<string>;
  descs: LocaleMap<string>;
};

export function buildServiceLinks(
  services: ServiceDetail[],
  href: (service: ServiceDetail) => string
): ServiceLinkEntry[] {
  return services.map((service) => ({
    href: href(service),
    titles: forEachLocale((locale) => getLocalizedService(service, locale).title),
    descs: forEachLocale((locale) => getLocalizedService(service, locale).tagline)
  }));
}

/** Localized area names for the near-me hub area cards. */
export type AreaLinkEntry = {
  href: string;
  names: LocaleMap<string>;
  landmarks: string;
};

export function buildAreaLinks(
  areas: AreaDetail[],
  href: (area: AreaDetail) => string,
  landmarkCount = 4
): AreaLinkEntry[] {
  return areas.map((area) => ({
    href: href(area),
    names: forEachLocale((locale) => getLocalizedArea(area, locale).name),
    landmarks: area.landmarks.slice(0, landmarkCount).join(", ")
  }));
}
