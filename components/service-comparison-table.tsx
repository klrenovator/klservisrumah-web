"use client";

import React from "react";
import Link from "next/link";
import { serviceSummaryList } from "@/config/service-summary.generated";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { getLocalizedServiceSummary } from "@/lib/service-summary-i18n";

const defaultResponseTimes: Record<string, string> = {
  painting: "Scheduled / same-week",
  plumbing: "Same-day for urgent leaks",
  ceiling: "Inspection + scheduled repair",
  waterproofing: "Leak triage priority",
  handyman: "Same-day slots available",
  renovation: "Site survey + scheduled",
  electrical: "Same-day for faults",
  "water-heater": "Same-day for no hot water",
  "ceiling-fan": "Scheduled install",
  lighting: "Scheduled install",
  tiling: "Scheduled / same-week",
  "plaster-ceiling": "Inspection + scheduled",
  "skim-coat": "Scheduled / same-week",
  flooring: "Site measure + scheduled",
  "epoxy-flooring": "Site survey + scheduled",
  "roof-repair": "Urgent leak same-day",
  "kitchen-cabinet": "Design consult + scheduled",
  carpentry: "Scheduled / same-week",
  door: "Scheduled / same-week",
  "window-repair": "Scheduled / same-week",
  locksmith: "Same-day for lockouts",
  "glass-aluminium": "Measure + scheduled",
  cctv: "Site survey + scheduled",
  autogate: "Site survey + scheduled",
  welding: "Site survey + scheduled",
  "smart-home": "Consult + scheduled",
  "pest-control": "Scheduled treatment"
};

/**
 * ServiceComparisonTable — localised comparison of all services with
 * starting price, warranty, response time, and best-for sub-services.
 */
export function ServiceComparisonTable() {
  const t = useTranslations();
  const { lang } = useLang();

  // Resolve response time from translations, falling back to default EN map
  const getResponseTime = (slug: string): string => {
    const key = `comparison.responseTimes.${slug}`;
    const translated = t(key);
    // t() returns the key itself when no translation is found
    if (translated !== key) return translated;
    return defaultResponseTimes[slug] ?? "—";
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">
            {t("comparison.heading")}
          </span>
          <h2 className="text-3xl font-extrabold text-[#075985]">{t("comparison.title")}</h2>
          <p className="mx-auto max-w-2xl text-sm font-semibold leading-relaxed text-[#475569]">
            {t("comparison.subtitle")}
          </p>
        </div>
        <div className="overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-xs">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-widest text-[#075985]">
              <tr>
                <th className="px-5 py-4">{t("comparison.service")}</th>
                <th className="px-5 py-4">{t("comparison.startsFrom")}</th>
                <th className="px-5 py-4">{t("comparison.warranty")}</th>
                <th className="px-5 py-4">{t("comparison.response")}</th>
                <th className="px-5 py-4">{t("comparison.bestFor")}</th>
                <th className="px-5 py-4">{t("comparison.action")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {serviceSummaryList.map((sourceService) => {
                const service = getLocalizedServiceSummary(sourceService, lang);
                return (
                  <tr key={service.slug} className="align-top">
                    <td className="px-5 py-4 font-extrabold text-[#075985]">{service.title}</td>
                    <td className="px-5 py-4 font-bold text-[#0EA5E9]">{service.startPrice}</td>
                    <td className="px-5 py-4 text-xs font-semibold text-[#475569]">{service.warranty}</td>
                    <td className="px-5 py-4 text-xs font-semibold text-[#475569]">{getResponseTime(service.slug)}</td>
                    <td className="px-5 py-4 text-xs font-semibold text-[#475569]">
                      {service.subServices.slice(0, 2).map((sub) => sub.name).join(", ")}
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/services/${service.slug}/cost`}
                        className="rounded-xl bg-[#0284C7] px-4 py-2 text-xs font-extrabold text-white transition hover:bg-[#0369A1]"
                      >
                        {t("comparison.viewPricing")}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
