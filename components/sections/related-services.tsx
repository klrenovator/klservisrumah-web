"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/config/services-data";
import { ArrowRight, PaintBucket, Droplets, Layout, ShieldCheck, Wrench, Zap } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { getLocalizedService } from "@/lib/service-i18n";

import { getRelatedServices } from "@/config/topical-authority-map";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  painting: <PaintBucket className="w-5 h-5" />,
  plumbing: <Droplets className="w-5 h-5" />,
  ceiling: <Layout className="w-5 h-5" />,
  waterproofing: <ShieldCheck className="w-5 h-5" />,
  handyman: <Wrench className="w-5 h-5" />,
  electrical: <Zap className="w-5 h-5" />,
};

type RelatedServicesProps = {
  currentSlug: string;
  maxItems?: number;
};

/**
 * RelatedServices — shows related services based on category matching.
 * Implements the same internal-linking density as KLRenovator's service pages.
 * Every service page links to related services, problem pages, and area pages
 * to build a strong topical authority silo.
 */
export function RelatedServices({ currentSlug, maxItems = 6 }: RelatedServicesProps) {
  const t = useTranslations();
  const { lang } = useLang();

  // Use Topical Authority Map for smart relatedness
  const relatedSlugs = getRelatedServices(currentSlug);
  const related = relatedSlugs
    .map((slug) => servicesData[slug])
    .filter(Boolean)
    .slice(0, maxItems);

  if (related.length === 0) return null;

  return (
    <section className="bg-slate-50 border-t border-slate-100 py-16 sm:py-20" aria-label={t("internalLinks.defaultTitle")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            {t("internalLinks.eyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {t("internalLinks.defaultTitle")}
          </h2>
          <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
            Explore our full range of professional home services — from painting and plumbing to ceiling installation and handyman repairs. Each service comes with honest upfront pricing and a written warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((service) => {
            const localized = getLocalizedService(service, lang);
            const icon = SERVICE_ICONS[service.slug] || <Wrench className="w-5 h-5" />;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#0EA5E9]/30 hover:shadow-[0_10px_30px_rgba(2,31,68,0.03)] transition-all duration-300 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#0EA5E9] bg-[#E0F2FE] p-2 rounded-lg">
                      {icon}
                    </span>
                    <h3 className="text-base font-extrabold text-[#075985] group-hover:text-[#0EA5E9] transition-colors">
                      {localized.title}
                    </h3>
                  </div>
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
