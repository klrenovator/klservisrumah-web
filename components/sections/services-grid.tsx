"use client";

import React from "react";
import Link from "next/link";
import { serviceSummaryList } from "@/config/service-summary.generated";
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { getLocalizedServiceSummary } from "@/lib/service-summary-i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ServiceIcon } from "@/components/ui/service-icon";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { warrantyLead } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function ServicesGrid() {
  const t = useTranslations();
  const { lang } = useLang();

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading Panel */}
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0369A1] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              {t("home.servicesGrid.heading")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
              {t("home.servicesGrid.subheading")}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              {t("services.pageSubtitle")}
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceSummaryList.map((sourceService, idx) => {
            const service = getLocalizedServiceSummary(sourceService, lang);
            // Stagger the reveal within the visible row (cap so late
            // cards don't wait too long after scrolling into view).
            const delay = Math.min((idx % 6) * 60, 300);
            return (
            <Reveal
              key={service.slug}
              delay={delay}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgba(2,31,68,0.02)] hover:shadow-[0_20px_50px_rgba(2,31,68,0.05)] hover:border-[#0EA5E9]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-5">

                {/* Header Icon + Price */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#E0F2FE]/30 rounded-2xl group-hover:bg-[#0EA5E9]/10 transition-colors shrink-0">
                    <ServiceIcon name={service.icon} className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-[#475569] font-bold uppercase tracking-wider">
                      {t("services.startingFrom")}
                    </span>
                    <span className="text-lg font-extrabold text-[#075985]">{service.startPrice}</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-extrabold text-[#075985] tracking-tight group-hover:text-[#0369A1] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                    {service.tagline}
                  </p>
                </div>

                <hr className="border-slate-100" />

                {/* Sub-services previews */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] text-[#075985] font-bold uppercase tracking-widest">
                    {t("services.includedSpecialities")}:
                  </span>
                  <ul className="flex flex-col gap-2">
                    {service.subServices.slice(0, 3).map((sub, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs font-semibold text-[#475569]">
                        <CheckCircle className="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5" />
                        <span>{sub.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Matching paired service actions: clear detail path + instant booking. */}
              <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6">
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`${t("common.viewDetails")} — ${service.title}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0369A1] py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all duration-200 hover:bg-[#075985] active:scale-[0.98]"
                >
                  {t("common.viewDetails")} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={getWhatsAppLink({ service: service.title })}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`${t("common.bookService")} — ${service.title}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#15803D] py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-sm transition-all duration-200 hover:bg-[#166534] hover:shadow-[#25D366]/40 active:scale-[0.98]"
                >
                  <MessageSquare className="h-4 w-4" /> {t("common.bookService")}
                </a>
                <span className="text-center text-xs font-bold text-emerald-600">{warrantyLead(service.warranty)} {t("services.guaranteeLabel")}</span>
              </div>

            </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
