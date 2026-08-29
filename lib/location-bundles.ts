import type { Locale } from "@/lib/i18n";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import type { AreaDetail } from "@/config/area-data";
import type { SuburbDetail } from "@/config/suburb-data";
import type { ServiceDetail } from "@/config/services-data";
import { getLocalizedArea, getLocalizedSuburb } from "@/lib/location-i18n";
import { getLocalizedService } from "@/lib/service-i18n";
import { localizeAreaDescription } from "@/lib/area-body-i18n";
import { localizeSuburbBody } from "@/lib/suburb-body-i18n";
import {
  buildAreaServicePairCopy,
  buildSuburbServicePairCopy,
  type LocationPairCopy
} from "@/lib/location-pair-copy";

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
    const localisedDescription = localizeAreaDescription(
      area.slug,
      locale,
      localized.description
    );

    return {
      name: localized.name,
      description: localisedDescription,
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
    const localisedBody = localizeSuburbBody(
      suburb.slug,
      locale,
      localized.housingProfile,
      localized.commonIssues
    );

    const faqs = [...localized.faqs];
    if (localisedBody.localFaq) {
      faqs.push(localisedBody.localFaq);
    }

    return {
      housingProfile: localisedBody.housingProfile,
      commonIssues: localisedBody.commonIssues,
      faqs: faqs
    };
  });
}

export type ServiceBundleEntry = {
  title: string;
  description: string;
  subServices: SubServiceCopy[];
};

/**
 * Localized deep-detail copy for `/services/<slug>/cost` (CF-4).
 *
 * The cost guide needs the service's own job process and service FAQs in the
 * active language so the money page can be genuinely trilingual without
 * duplicating the `services-data` i18n blocks. `getLocalizedService` already
 * returns both with complete MS/ZH coverage (verified 29/29), so this is a
 * thin per-locale projection — the SAME copy shown on the service page, on a
 * page where the visitor is deciding whether the quoted price buys it.
 */
export type ServiceCostDetail = {
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export function buildServiceCostDetail(service: ServiceDetail): LocaleMap<ServiceCostDetail> {
  return forEachLocale((locale) => {
    const localized = getLocalizedService(service, locale);
    return {
      process: localized.process,
      faqs: localized.faqs
    };
  });
}

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

export type LocationPairBundleEntry = LocationPairCopy;

export function buildAreaServicePairBundle(area: AreaDetail, service: ServiceDetail): LocaleMap<LocationPairBundleEntry> {
  return forEachLocale((locale) => buildAreaServicePairCopy(area, service, locale));
}

export function buildSuburbServicePairBundle(suburb: SuburbDetail, service: ServiceDetail): LocaleMap<LocationPairBundleEntry> {
  return forEachLocale((locale) => buildSuburbServicePairCopy(suburb, service, locale));
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
