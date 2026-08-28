"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageSquare, Siren } from "lucide-react";
import type { MarketRateItem } from "@/config/market-rates";
import type { Locale } from "@/lib/i18n";
import type { LocaleMap, ServiceBundleEntry, ServiceLinkEntry } from "@/lib/location-bundles";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { VisibleFaqList } from "@/components/content/visible-faq";

type LocaleServiceCostViewProps = {
  slug: string;
  bundle: LocaleMap<ServiceBundleEntry>;
  rates: MarketRateItem[];
  relatedCostGuides?: ServiceLinkEntry[];
  faqs?: { q: string; a: string }[];
};

type CostTableRow = {
  label: string;
  publishedRate: string;
  typicalRange: string;
  note: string;
};

const factorKeys = [1, 2, 3, 4, 5, 6] as const;

/**
 * LocaleServiceCostView — client-localised body for `/services/[slug]/cost`.
 *
 * The server route keeps canonical English metadata and schema for SEO, while
 * this compact client view swaps the visible copy, breadcrumbs, service name,
 * fallback sub-service rows and CTA chrome for EN / BM / 中文.
 */
export function LocaleServiceCostView({ slug, bundle, rates, relatedCostGuides = [], faqs = [] }: LocaleServiceCostViewProps) {
  const { lang } = useLang();
  const t = useTranslations();
  const locale = lang as Locale;
  const service = bundle[locale] ?? bundle.en;
  const rows = buildRows({ slug, rates, service, t });
  const waLink = getWhatsAppLink({ service: `${service.title} cost quote`, lang: locale });

  return (
    <>
      <Breadcrumbs
        homeLabel={t("breadcrumbs.home")}
        ariaLabel={t("breadcrumbs.navAria")}
        items={[
          { label: t("costPage.servicesCrumb"), href: "/services" },
          { label: service.title, href: `/services/${slug}` },
          { label: t("costPage.costCrumb"), href: `/services/${slug}/cost` }
        ]}
      />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
            {t("costPage.badge")}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#075985] sm:text-5xl text-balance">
            {t("costPage.h1", { name: service.title })}
          </h1>
          <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">
            {t("costPage.intro")}
          </p>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-xs">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">{t("costPage.tableCaption", { name: service.title })}</caption>
              <thead className="bg-slate-50 text-xs uppercase tracking-widest text-[#075985]">
                <tr>
                  <th className="px-5 py-4">{t("costPage.scope")}</th>
                  <th className="px-5 py-4">{t("costPage.publishedRate")}</th>
                  <th className="px-5 py-4">{t("costPage.typicalRange")}</th>
                  <th className="px-5 py-4">{t("costPage.notes")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((rate) => (
                  <tr key={rate.label}>
                    <td className="px-5 py-4 font-extrabold text-[#075985]">{rate.label}</td>
                    <td className="px-5 py-4 font-bold text-[#0EA5E9]">{rate.publishedRate}</td>
                    <td className="px-5 py-4 text-[#475569]">{rate.typicalRange}</td>
                    <td className="px-5 py-4 text-xs font-semibold text-[#475569]">{rate.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
              {t("costPage.factorsEyebrow")}
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#075985] sm:text-3xl">
              {t("costPage.factorsHeading", { name: service.title })}
            </h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">
              {t("costPage.factorsSub")}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {factorKeys.map((factor) => (
                <div
                  key={factor}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold text-[#475569] shadow-xs"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{t(`costPage.factor${factor}`)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-[#0284C7] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">{t("costPage.ctaHeading", { name: service.title })}</h2>
            <p className="mt-2 text-sm font-semibold text-blue-50">{t("costPage.ctaBody")}</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white"
            >
              <MessageSquare className="h-4 w-4" />
              {t("costPage.ctaButton")}
            </a>
          </div>

          {/*
            Crawl path to the emergency variant of this service.
            27 of the 28 `/services/<slug>/emergency` pages had zero inbound
            internal links sitewide (only `/services/plumbing/emergency` was
            linked, from the plumbing-diagnostic tool). They were sitemap-only
            URLs. The cost page is the closest sibling in the same service
            silo — a visitor comparing prices is exactly who needs to know an
            urgent option exists — and it is built for all 28 services.
          */}
          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-7">
            <h2 className="text-lg font-extrabold text-[#075985]">
              {t("emergencyPage.h1", { name: service.title })}
            </h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">
              {t("emergencyPage.intro")}
            </p>
            <Link
              href={`/services/${slug}/emergency`}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm font-extrabold text-[#B45309] transition hover:border-amber-400 hover:bg-amber-100"
            >
              <Siren className="h-4 w-4" />
              {t("emergencyPage.badge")}
            </Link>
          </div>

          {faqs.length > 0 && (
            <VisibleFaqList
              className="mt-10 rounded-3xl border border-slate-100 bg-white py-8 sm:py-10"
              headingId="cost-faq-heading"
              heading={t("costPage.faqHeading", { name: service.title })}
              faqs={faqs}
            />
          )}

          {relatedCostGuides.length > 0 && (
            <section className="mt-10" aria-labelledby="related-cost-guides-heading">
              <h2 id="related-cost-guides-heading" className="text-2xl font-extrabold text-[#075985]">
                {t("serviceDetail.otherServicesHeading")}
              </h2>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-[#475569]">
                {t("serviceDetail.otherServicesSub")}
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedCostGuides.map((guide) => {
                  const title = guide.titles[locale] ?? guide.titles.en;
                  return (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/30 hover:shadow-md"
                    >
                      <h3 className="font-extrabold text-[#075985]">{title}</h3>
                      <span className="mt-2 inline-flex text-sm font-bold text-[#0EA5E9]">{t("common.viewDetails")}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}

function buildRows({
  slug,
  rates,
  service,
  t
}: {
  slug: string;
  rates: MarketRateItem[];
  service: ServiceBundleEntry;
  t: (key: string, vars?: Record<string, string | number>) => string;
}): CostTableRow[] {
  if (!rates.length) {
    return service.subServices.map((sub) => ({
      label: sub.name,
      publishedRate: sub.price,
      typicalRange: t("costPage.confirmedAfterScope"),
      note: sub.desc
    }));
  }

  return rates.map((rate, index) => {
    const prefix = `costPage.rateCopy.${slug}.${index}`;
    return {
      label: t(`${prefix}.label`, { defaultValue: rate.label }),
      publishedRate: t(`${prefix}.publishedRate`, { defaultValue: rate.publishedRate }),
      typicalRange: t(`${prefix}.range`, { defaultValue: rate.marketRange }),
      note: t(`${prefix}.note`, { defaultValue: rate.validationNote })
    };
  });
}
