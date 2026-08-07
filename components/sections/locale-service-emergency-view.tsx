"use client";

import React from "react";
import { AlertTriangle, Clock3, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { LocaleMap, ServiceBundleEntry } from "@/lib/location-bundles";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import { getWhatsAppLink } from "@/lib/whatsapp";

type LocaleServiceEmergencyViewProps = {
  slug: string;
  bundle: LocaleMap<ServiceBundleEntry>;
  coverageAreaNames: LocaleMap<string[]>;
};

const emergencySteps = [1, 2, 3] as const;

/**
 * LocaleServiceEmergencyView — client-localised body for
 * `/services/[slug]/emergency`.
 *
 * Canonical metadata/schema stay on the server route; this component localises
 * the customer-facing emergency guide, breadcrumbs, area chips and CTA chrome.
 */
export function LocaleServiceEmergencyView({
  slug,
  bundle,
  coverageAreaNames
}: LocaleServiceEmergencyViewProps) {
  const { lang } = useLang();
  const t = useTranslations();
  const locale = lang as Locale;
  const service = bundle[locale] ?? bundle.en;
  const areas = coverageAreaNames[locale] ?? coverageAreaNames.en;
  const waLink = getWhatsAppLink({ service: `URGENT ${service.title}`, lang: locale });

  return (
    <>
      <Breadcrumbs
        homeLabel={t("breadcrumbs.home")}
        items={[
          { label: t("emergencyPage.servicesCrumb"), href: "/services" },
          { label: service.title, href: `/services/${slug}` },
          { label: t("emergencyPage.emergencyCrumb"), href: `/services/${slug}/emergency` }
        ]}
      />

      <section className="bg-gradient-to-b from-rose-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-rose-600">
            <AlertTriangle className="h-4 w-4" /> {t("emergencyPage.badge")}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#075985] sm:text-5xl text-balance">
            {t("emergencyPage.h1", { name: service.title })}
          </h1>
          <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">
            {t("emergencyPage.intro")}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {emergencySteps.map((step, idx) => {
              const stepText = t(`emergencyPage.step${step}`);
              return (
                <div key={step} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
                  <span className="rounded-xl bg-[#E0F2FE] px-3 py-1.5 text-sm font-extrabold text-[#0284C7]">
                    0{idx + 1}
                  </span>
                  <h2 className="mt-4 text-lg font-extrabold text-[#075985]">{stepText}</h2>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold text-[#075985]">
              <Clock3 className="h-6 w-6 text-[#0EA5E9]" /> {t("emergencyPage.coverageHeading")}
            </h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">
              {t("emergencyPage.coverageSub")}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {areas.map((area) => (
                <span key={area} className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-[#475569]">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-[#0284C7] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">{t("emergencyPage.ctaHeading")}</h2>
            <p className="mt-2 text-sm font-semibold text-blue-50">{t("emergencyPage.ctaBody")}</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white"
            >
              <MessageCircle className="h-4 w-4" /> {t("emergencyPage.ctaButton")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
