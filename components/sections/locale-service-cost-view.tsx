"use client";

import React from "react";
import type { MarketRateItem } from "@/config/market-rates";
import type { Locale } from "@/lib/i18n";
import type { LocaleMap, RelatedCostGuideEntry, ServiceBundleEntry, ServiceCostDetail } from "@/lib/location-bundles";
import type { ServiceScopeBook } from "@/lib/estimator/rate-book.generated";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import { CostPageBody } from "@/components/sections/locale-service-cost-body";

type LocaleServiceCostViewProps = {
  slug: string;
  bundle: LocaleMap<ServiceBundleEntry>;
  detail: LocaleMap<ServiceCostDetail>;
  /** The service's rate-book entry (published scopes + quote-only scopes). */
  scopeBook: ServiceScopeBook;
  rates: MarketRateItem[];
  startPrice: string;
  /** Where the interactive estimator lives (deep tool for 6 trades, share URL otherwise). */
  estimatorHref: string;
  /** Six circular sibling cost guides (slug + localized titles). */
  related: RelatedCostGuideEntry[];
};

/**
 * LocaleServiceCostView — client-localised body for `/services/[slug]/cost`
 * (the canonical EN URL).
 *
 * The page body itself now lives in the shared, server-compatible
 * `CostPageBody`, which the MS/ZH server routes (P3-12 phase 3) render
 * directly with the tree's own dictionary. This client wrapper only resolves
 * the active locale + translator from the language context and forwards the
 * server-prepared data — one body implementation, zero English flash on any
 * of the three trees.
 */
export function LocaleServiceCostView({
  slug,
  bundle,
  detail,
  scopeBook,
  rates,
  startPrice,
  estimatorHref,
  related
}: LocaleServiceCostViewProps) {
  const { lang } = useLang();
  const t = useTranslations();
  const locale = lang as Locale;

  return (
    <CostPageBody
      locale={locale}
      t={t}
      slug={slug}
      bundle={bundle}
      detail={detail}
      scopeBook={scopeBook}
      rates={rates}
      startPrice={startPrice}
      estimatorHref={estimatorHref}
      related={related}
    />
  );
}
