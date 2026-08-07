"use client";

import React from "react";
import { MapPin, Landmark, Shield, MessageSquare } from "lucide-react";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import type { AreaBundleEntry, LocaleMap } from "@/lib/location-bundles";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ServicesGrid } from "@/components/sections/services-grid";

/**
 * LocaleAreaView — client wrapper for `/areas/[slug]`.
 * Renders the coverage-area page body in the active locale (EN / MS / ZH).
 * Localized copy is pre-computed server-side and passed in as a compact
 * bundle so the large area/service datasets stay out of the client bundle.
 */
export function LocaleAreaView({
  slug,
  landmarks,
  bundle
}: {
  slug: string;
  landmarks: string[];
  bundle: LocaleMap<AreaBundleEntry>;
}) {
  const { lang } = useLang();
  const t = useTranslations();
  const area = bundle[lang] ?? bundle.en;
  const waLink = getWhatsAppLink({ location: bundle.en.name });

  return (
    <>
      <Breadcrumbs
        items={[
          { label: t("location.coverageAreas"), href: "/areas" },
          { label: area.name, href: `/areas/${slug}` }
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-[#0369A1] uppercase tracking-widest bg-[#0EA5E9]/10 px-4 py-1.5 rounded-full w-fit flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0369A1]" />
                  <span>{t("location.servingBadge", { area: area.name })}</span>
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#075985] tracking-tight leading-tight">
                  {t("location.areaH1", { area: area.name })}
                </h1>
                <p className="text-base text-[#475569] leading-relaxed font-semibold">
                  {t("location.areaSubtitle")}
                </p>
              </div>

              <div className="text-sm text-[#475569] leading-relaxed flex flex-col gap-4">
                <p>{area.description}</p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100/80 flex flex-col gap-5">
                <h2 className="text-lg font-extrabold text-[#075985] tracking-tight flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#0369A1]" />
                  <span>{t("location.coverageHeading", { area: area.name })}</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {landmarks.map((landmark) => (
                    <div key={landmark} className="flex gap-2 items-center text-xs sm:text-sm font-semibold text-[#475569]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                      <span>{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <ServicesGrid />
              </div>
            </div>

            <div className="lg:col-span-5 w-full lg:sticky lg:top-28">
              <div className="bg-[#075985] text-white rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-[0_20px_50px_rgba(2,31,68,0.12)]">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#0369A1] uppercase tracking-widest">
                    {t("location.immediateDispatch")}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    {t("location.bookIn", { area: area.name })}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed">
                    {t("location.bookInBody", { area: area.name })}
                  </p>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 flex flex-col gap-3 text-xs sm:text-sm font-semibold">
                  <div className="flex items-center gap-2 text-[#0369A1]">
                    <Shield className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-wider block font-bold">
                      {t("location.safetyPack")}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2 text-slate-200">
                    <li>✓ {t("location.safetyInsured")}</li>
                    <li>✓ {t("location.safetyBoundaries")}</li>
                    <li>✓ {t("location.safetyQuotes")}</li>
                    <li>✓ {t("location.safetyWarranty")}</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#15803D] hover:bg-[#166534] text-white text-center font-extrabold text-sm py-4 rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4.5 h-4.5 fill-white text-[#25D366]" />
                    <span>{t("common.bookWhatsApp")}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="w-full bg-transparent hover:bg-white/5 border border-white/20 text-white text-center font-extrabold text-sm py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>{t("location.callSupport", { phone: siteConfig.phoneDisplay })}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-100 my-16" />
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            <h2 className="text-2xl font-extrabold text-[#075985] text-center tracking-tight">
              {t("location.areaFaqs", { area: area.name })}
            </h2>
            <div className="flex flex-col gap-4">
              {area.faqs.map((faq) => (
                <div key={faq.q} className="bg-slate-50 rounded-2xl p-5 border border-slate-100/60">
                  <h3 className="text-base font-extrabold text-[#075985] mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
