"use client";

import React from "react";
import { Check, X, BadgeCheck } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { siteConfig } from "@/config/site";

export function PricingComparison() {
  const t = useTranslations();

  const comparisonRows = [
    {
      feature: t("pricingComparison.priceDisplay"),
      klServis: t("pricingComparison.priceDisplayOurs"),
      competitor: t("pricingComparison.priceDisplayTheirs"),
      klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
      competitorIcon: <X className="w-5 h-5 text-rose-500" />
    },
    {
      feature: t("pricingComparison.quoteBefore"),
      klServis: t("pricingComparison.quoteBeforeOurs"),
      competitor: t("pricingComparison.quoteBeforeTheirs"),
      klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
      competitorIcon: <X className="w-5 h-5 text-rose-500" />
    },
    {
      feature: t("pricingComparison.hiddenFees"),
      klServis: t("pricingComparison.hiddenFeesOurs"),
      competitor: t("pricingComparison.hiddenFeesTheirs"),
      klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
      competitorIcon: <X className="w-5 h-5 text-rose-500" />
    },
    {
      feature: t("pricingComparison.warranty"),
      klServis: t("pricingComparison.warrantyOurs"),
      competitor: t("pricingComparison.warrantyTheirs"),
      klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
      competitorIcon: <X className="w-5 h-5 text-rose-500" />
    },
    {
      feature: t("pricingComparison.registration"),
      klServis: t("pricingComparison.registrationOurs"),
      competitor: t("pricingComparison.registrationTheirs"),
      klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
      competitorIcon: <X className="w-5 h-5 text-rose-500" />
    },
    {
      feature: t("pricingComparison.materials"),
      klServis: t("pricingComparison.materialsOurs"),
      competitor: t("pricingComparison.materialsTheirs"),
      klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
      competitorIcon: <X className="w-5 h-5 text-rose-500" />
    },
    {
      feature: t("pricingComparison.reviews"),
      klServis: t("pricingComparison.reviewsOurs", { reviewCount: String(siteConfig.reviewCount) }),
      competitor: t("pricingComparison.reviewsTheirs"),
      klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
      competitorIcon: <X className="w-5 h-5 text-rose-500" />
    }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            {t("pricingComparison.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
            {t("pricingComparison.title")}
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            {t("pricingComparison.subtitle")}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              <BadgeCheck className="w-3.5 h-3.5" /> {t("comparison.ourLabel")}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100">
              <X className="w-3.5 h-3.5" /> {t("comparison.theirLabel")}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(2,31,68,0.02)] overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 bg-slate-50 px-6 py-4 border-b border-slate-100">
            <div className="text-xs font-bold text-[#475569] uppercase tracking-wider">{t("pricingComparison.featureHeader")}</div>
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
              <BadgeCheck className="w-3.5 h-3.5" /> {t("comparison.ourLabel")}
            </div>
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider flex items-center gap-1.5">
              <X className="w-3.5 h-3.5" /> {t("comparison.theirLabel")}
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-3 gap-4 px-6 py-5 ${idx !== comparisonRows.length - 1 ? "border-b border-slate-50" : ""}`}
            >
              <div className="text-sm font-bold text-[#075985] flex items-center">{row.feature}</div>
              <div className="text-xs text-[#475569] leading-relaxed font-medium flex items-start gap-2">
                <span className="shrink-0 mt-0.5">{row.klServisIcon}</span>
                <span>{row.klServis}</span>
              </div>
              <div className="text-xs text-[#475569] leading-relaxed font-medium flex items-start gap-2">
                <span className="shrink-0 mt-0.5">{row.competitorIcon}</span>
                <span>{row.competitor}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#475569] font-medium">
            {t("pricingComparison.trustNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
