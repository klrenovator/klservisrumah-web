"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/config/services-data";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { getLocalizedService } from "@/lib/service-i18n";

type RelatedServicesProps = {
  currentSlug: string;
  maxItems?: number;
};

/**
 * RelatedServices — shows related services based on the current service.
 * Helps with internal linking and user navigation.
 */
export function RelatedServices({ currentSlug, maxItems = 6 }: RelatedServicesProps) {
  const t = useTranslations();
  const { lang } = useLang();

  // Get all services except the current one
  const allServices = Object.values(servicesData).filter((s) => s.slug !== currentSlug);

  // Simple relatedness: show services with similar tags or random selection
  // For now, we'll show the first N services
  const related = allServices.slice(0, maxItems);

  if (related.length === 0) return null;

  return (
    <section className="bg-slate-50 border-t border-slate-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            {t("internalLinks.eyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {t("internalLinks.defaultTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((service) => {
            const localized = getLocalizedService(service, lang);
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#0EA5E9]/30 hover:shadow-[0_10px_30px_rgba(2,31,68,0.03)] transition-all duration-300 group"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-base font-extrabold text-[#075985] group-hover:text-[#0EA5E9] transition-colors">
                    {localized.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-medium line-clamp-2">
                    {localized.tagline}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-bold text-[#0EA5E9] bg-[#E0F2FE]/30 px-2.5 py-1 rounded-md">
                      {localized.startPrice}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0EA5E9] group-hover:text-[#075985]">
                      <span>{t("common.viewDetails")}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
