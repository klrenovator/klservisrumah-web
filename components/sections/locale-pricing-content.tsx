"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Calculator, MessageCircle, ShieldCheck, WalletCards } from "lucide-react";
import { servicesData } from "@/config/services-data";
import { getMarketRatesForService, type MarketRateItem } from "@/config/market-rates";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { getLocalizedService } from "@/lib/service-i18n";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  marketRate: WalletCards,
  itemized: Calculator,
  warranty: ShieldCheck,
  whatsapp: MessageCircle
};

const principleKeys = ["marketRate", "itemized", "warranty", "whatsapp"] as const;

/**
 * LocalePricingContent — fully localised pricing page body.
 * Includes pricing principles, per-service cost cards, quote-factor list,
 * WhatsApp sidebar, and pricing FAQ — all in EN/MS/ZH.
 */
export function LocalePricingContent() {
  const t = useTranslations();
  const { lang } = useLang();

  return (
    <>
      {/* Principles section */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-sky-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principleKeys.map((key) => {
              const Icon = iconMap[key];
              return (
                <div key={key} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm shadow-sky-100/50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E0F2FE]">
                    <Icon className="h-5 w-5 text-[#0284C7]" />
                  </div>
                  <h2 className="mt-4 text-lg font-extrabold text-[#075985]">
                    {t(`pricingPage.principles.${key}.title`)}
                  </h2>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">
                    {t(`pricingPage.principles.${key}.body`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Per-service pricing cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
              {t("pricingPage.serviceByServiceHeading")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#075985]">
              {t("pricingPage.serviceByServiceTitle")}
            </h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#475569]">
              {t("pricingPage.serviceByServiceSubtitle")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {Object.values(servicesData).map((sourceService) => {
              const service = getLocalizedService(sourceService, lang);
              const rates = getMarketRatesForService(service.slug as MarketRateItem["serviceSlug"]);
              const visibleRates = rates.length
                ? rates.map((rate, index) => localizeRateRow(t, sourceService.slug, index, rate))
                : service.subServices.slice(0, 3).map((sub) => ({
                    serviceSlug: service.slug as MarketRateItem["serviceSlug"],
                    label: sub.name,
                    publishedRate: sub.price,
                    marketRange: t("pricingPage.confirmedAfterScope"),
                    pricingUnit: t("pricingPage.taskUnit"),
                    validationNote: sub.desc,
                    lastReviewed: "2026-07-24"
                  }));

              return (
                <article
                  key={service.slug}
                  className="rounded-[2rem] border border-slate-100 bg-gradient-to-br from-white via-white to-sky-50/30 p-6 shadow-sm shadow-sky-100/50 sm:p-7"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0284C7]">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        {t("pricingPage.startsFrom")} {service.startPrice}
                      </div>
                      <h3 className="mt-4 text-2xl font-extrabold text-[#075985]">{service.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-[#475569]">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm font-bold text-[#075985] shadow-sm">
                      {t("pricingPage.warranty")}: <span className="text-[#0284C7]">{service.warranty}</span>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {visibleRates.map((rate) => (
                      <div key={`${service.slug}-${rate.label}`} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">{rate.pricingUnit}</p>
                        <h4 className="mt-2 text-base font-extrabold text-[#075985]">{rate.label}</h4>
                        <p className="mt-3 text-lg font-extrabold text-[#0284C7]">{rate.publishedRate}</p>
                        <p className="mt-2 text-xs font-semibold leading-relaxed text-[#475569]">{rate.marketRange}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 p-4 text-sm font-semibold leading-relaxed text-[#475569]">
                    <span className="font-extrabold text-[#075985]">{t("pricingPage.pricingNote")}:</span>{" "}
                    {visibleRates[0]?.validationNote ?? service.description}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/services/${service.slug}/cost`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#0369A1]"
                    >
                      {t("pricingPage.openPricingGuide")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border border-sky-200 px-5 py-3 text-sm font-extrabold text-[#075985] transition hover:bg-sky-50"
                    >
                      {t("pricingPage.viewServicePage")}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote factors + WhatsApp sidebar */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
              {t("pricingPage.quoteFactorsHeading")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#075985]">
              {t("pricingPage.quoteFactorsTitle")}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const factorText = getQuoteFactor(t, i);
                return (
                  <div key={i} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold text-[#475569] shadow-sm">
                    ✓ {factorText}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="rounded-[2rem] bg-[#075985] p-7 text-white shadow-xl shadow-sky-200/40 sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-sky-100">
              {t("pricingPage.whatsappBox.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">{t("pricingPage.whatsappBox.title")}</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-sky-50/95">
              {t("pricingPage.whatsappBox.body")}
            </p>
            <a
              href={getWhatsAppLink({ service: t("pricingPage.whatsappService"), lang })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#128C7E]"
            >
              <MessageCircle className="h-4 w-4" />
              {t("pricingPage.whatsappBox.cta")}
            </a>
            <div className="mt-5 rounded-2xl bg-white/10 p-4 text-sm font-semibold leading-relaxed text-sky-50">
              {t("pricingPage.whatsappBox.phoneLabel")}:{" "}
              <span className="font-extrabold text-white">{siteConfig.phoneDisplay}</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
              {t("pricingPage.faqHeading")}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#075985]">
              {t("pricingPage.faqTitle")}
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {[0, 1, 2, 3].map((i) => {
              const q = t(`pricingPage.faqs.${i}.q`);
              const a = t(`pricingPage.faqs.${i}.a`);
              return (
                <div key={i} className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
                  <h3 className="text-lg font-extrabold text-[#075985]">{q}</h3>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{a}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function localizeRateRow(
  t: (key: string, vars?: Record<string, string | number>) => string,
  serviceSlug: string,
  index: number,
  rate: MarketRateItem
): MarketRateItem {
  const prefix = `costPage.rateCopy.${serviceSlug}.${index}`;
  return {
    ...rate,
    label: t(`${prefix}.label`, { defaultValue: rate.label }),
    publishedRate: t(`${prefix}.publishedRate`, { defaultValue: rate.publishedRate }),
    pricingUnit: t(`${prefix}.unit`, { defaultValue: rate.pricingUnit }),
    marketRange: t(`${prefix}.range`, { defaultValue: rate.marketRange }),
    validationNote: t(`${prefix}.note`, { defaultValue: rate.validationNote })
  };
}

/**
 * Resolve a quote factor from the translation dictionary.
 * The quoteFactors key holds an array of strings.
 */
function getQuoteFactor(t: (key: string) => string, index: number): string {
  // Try array-style key first
  const key = `pricingPage.quoteFactors.${index}`;
  const result = t(key);
  if (result !== key) return result;
  // Fallback to English defaults
  const fallbacks = [
    "Measured size, quantity or total work area",
    "Existing wall, pipe, board or waterproofing condition",
    "Material grade, brand and safety requirements",
    "Condo access rules, lift protection or restricted timing",
    "Emergency response, after-hours or same-day urgency",
    "Bundled work that reduces separate visit charges"
  ];
  return fallbacks[index] ?? "";
}
