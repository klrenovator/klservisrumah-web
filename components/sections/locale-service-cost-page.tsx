import React from "react";
import { servicesData } from "@/config/services-data";
import { getMarketRatesForService, type MarketRateItem } from "@/config/market-rates";
import { SERVICE_SCOPES, type ServiceScopeBook } from "@/lib/estimator/rate-book.generated";
import { buildEstimateLinks } from "@/config/estimate-links";
import {
  buildServiceBundle,
  buildServiceCostDetail,
  buildRelatedCostGuideEntries,
  type LocaleMap,
  type RelatedCostGuideEntry,
  type ServiceBundleEntry,
  type ServiceCostDetail
} from "@/lib/location-bundles";
import { getLocalizedService } from "@/lib/service-i18n";
import { getServerTranslator } from "@/lib/i18n-server";
import { getArticleSchema, getFAQSchema, getOfferCatalogSchema } from "@/lib/seo";
import {
  buildCostDirectAnswer,
  buildCostDirectAnswerVars,
  buildCostPageFaqs,
  buildCostPageSiteFaqs
} from "@/lib/cost-direct-answer";
import { localizeUnits } from "@/lib/direct-answer-trilingual";
import { CostPageBody } from "@/components/sections/locale-service-cost-body";

/**
 * LocaleServiceCostPage — fully-localised, indexable cost guide
 * (`/ms/services/<slug>/cost`, `/zh/services/<slug>/cost`) — P3-12 phase 3,
 * the last un-localized money page on the site.
 *
 * WHY A SERVER COMPONENT (not `LocaleServiceCostView` on the EN URL):
 * the 29 cost guides were the site's highest-intent "how much" pages and the
 * one place the language switch was still client-side only — a Googlebot
 * hitting `/ms/services/painting/cost` had no Malay URL to find at all. The
 * body renders server-side from the pre-localised service + the tree's full
 * dictionary (the shared `CostPageBody` the EN client view also uses), so the
 * first response is 100% in-language with zero English flash, and the
 * FAQPage markup below is built from the very same pure builders the body
 * renders — schema and HTML cannot drift (P5-02 / P3-04 contract).
 *
 * The interactive estimator + emergency pages stay on their canonical EN URLs
 * (client-localized there) — the same pattern `LocaleServicePage` uses; the
 * page links to them rather than duplicating them.
 */

export const SERVICE_COST_LOCALE_PATHS: Record<"ms" | "zh", (slug: string) => string> = {
  ms: (slug) => `/ms/services/${slug}/cost`,
  zh: (slug) => `/zh/services/${slug}/cost`
};

/** The three sibling URLs of one cost guide — the real hreflang cluster. */
export function localizedServiceCostLanguageUrls(slug: string): { en: string; ms: string; zh: string } {
  return {
    en: `/services/${slug}/cost`,
    ms: SERVICE_COST_LOCALE_PATHS.ms(slug),
    zh: SERVICE_COST_LOCALE_PATHS.zh(slug)
  };
}

export type ServiceCostPageData = {
  bundle: LocaleMap<ServiceBundleEntry>;
  detail: LocaleMap<ServiceCostDetail>;
  scopeBook: ServiceScopeBook;
  rates: MarketRateItem[];
  startPrice: string;
  estimatorHref: string;
  related: RelatedCostGuideEntry[];
};

/**
 * The complete data set for one `/services/<slug>/cost` document, shared by
 * the EN + MS + ZH routes so all three trees feed the shared body from one
 * preparation path.
 */
export function buildServiceCostPageData(slug: string): ServiceCostPageData {
  const service = servicesData[slug];
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return {
    bundle: buildServiceBundle(service),
    detail: buildServiceCostDetail(service),
    scopeBook: SERVICE_SCOPES[slug] ?? { startPrice: 0, scopes: [], quoteOnly: [] },
    rates: getMarketRatesForService(slug as MarketRateItem["serviceSlug"]),
    startPrice: service.startPrice,
    estimatorHref:
      buildEstimateLinks().find((link) => link.slug === slug)?.resolvedPath ?? `/estimate/${slug}`,
    related: buildRelatedCostGuideEntries(slug)
  };
}

export function LocaleServiceCostPage({ locale, slug }: { locale: "ms" | "zh"; slug: string }) {
  const service = servicesData[slug];
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  const localized = getLocalizedService(service, locale);
  const t = getServerTranslator(locale);
  const path = SERVICE_COST_LOCALE_PATHS[locale](slug);
  const data = buildServiceCostPageData(slug);

  // P3-04 — the literal "how much does {service} cost in KL & Selangor?" card.
  // Same pure builder the body renders with (above), so the marked-up
  // Question/Answer is byte-identical to the in-language H2 + paragraph.
  const directAnswer = buildCostDirectAnswer(
    t,
    buildCostDirectAnswerVars({
      t,
      locale,
      name: localized.title,
      startPrice: service.startPrice,
      units: data.scopeBook.scopes.map((scope) => scope.unit),
      scopeCount: data.scopeBook.scopes.length,
      quoteOnlyCount: data.scopeBook.quoteOnly.length
    })
  );

  // The FAQPage list mirrors exactly what the body renders: DirectAnswer
  // first, then the four site-wide cost FAQs (same dictionary keys, same
  // localized unit-carrying start price), then the service's own FAQs.
  const faqs = buildCostPageFaqs(
    directAnswer,
    buildCostPageSiteFaqs(t, { name: localized.title, startPrice: localizeUnits(service.startPrice, locale) }),
    localized.faqs
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(localized.subServices)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title: t("costPage.metaTitle", { name: localized.title }),
              slug: `${slug}/cost`,
              excerpt: t("costPage.metaDesc", { name: localized.title }),
              path,
              category: "Pricing"
            })
          )
        }}
      />

      <CostPageBody
        locale={locale}
        t={t}
        slug={slug}
        bundle={data.bundle}
        detail={data.detail}
        scopeBook={data.scopeBook}
        rates={data.rates}
        startPrice={data.startPrice}
        estimatorHref={data.estimatorHref}
        related={data.related}
      />
    </>
  );
}
