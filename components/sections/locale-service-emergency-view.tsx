"use client";

import React from "react";
import { AlertTriangle, Clock3, MessageCircle, ShieldCheck, PhoneCall, BadgeDollarSign } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { LocaleMap, ServiceBundleEntry, ServiceLinkEntry } from "@/lib/location-bundles";
import type { EmergencyContent } from "@/config/emergency-services";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { VisibleFaqList } from "@/components/content/visible-faq";
import { NapContactStrip } from "@/components/content/nap-contact-strip";

type LocaleServiceEmergencyViewProps = {
  slug: string;
  bundle: LocaleMap<ServiceBundleEntry>;
  relatedServices: ServiceLinkEntry[];
  coverageAreaNames: LocaleMap<string[]>;
  content: Record<Locale, EmergencyContent>;
};

/**
 * LocaleServiceEmergencyView — client-localised body for
 * `/services/[slug]/emergency`.
 *
 * P2-17 (Fix Wave 6): the page was previously a single fixed template — three
 * identical steps, generic coverage chips and three identical FAQs on all 29
 * services (pairwise Jaccard 0.727). It now renders per-service emergency
 * content (`config/emergency-services.ts`): what counts as an emergency, what
 * to do right now, when to call a professional, and honest cost factors, each
 * localised. Only the 12 services with real emergency semantics still ship
 * this page (see `isEmergencyService`); the other 17 301 to the service page.
 */
export function LocaleServiceEmergencyView({
  slug,
  bundle,
  relatedServices,
  coverageAreaNames,
  content
}: LocaleServiceEmergencyViewProps) {
  const { lang } = useLang();
  const t = useTranslations();
  const locale = lang as Locale;
  const service = bundle[locale] ?? bundle.en;
  const emergency = content[locale] ?? content.en;
  const areas = coverageAreaNames[locale] ?? coverageAreaNames.en;
  const waLink = getWhatsAppLink({ service: `URGENT ${service.title}`, lang: locale });

  return (
    <>
      <Breadcrumbs
        homeLabel={t("breadcrumbs.home")}
        ariaLabel={t("breadcrumbs.navAria")}
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

          {/* What counts as an emergency (service-specific) */}
          <section className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8" aria-labelledby="emergency-list-heading">
            <h2 id="emergency-list-heading" className="flex items-center gap-2 text-2xl font-extrabold text-[#075985]">
              <ShieldCheck className="h-6 w-6 text-rose-500" /> {t("emergencyPage.emergenciesHeading", { name: service.title })}
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3">
              {emergency.emergencies.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-relaxed text-[#475569]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-[11px] font-extrabold text-rose-600">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Immediate steps (service-specific) */}
          <section className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8" aria-labelledby="emergency-steps-heading">
            <h2 id="emergency-steps-heading" className="flex items-center gap-2 text-2xl font-extrabold text-[#075985]">
              <Clock3 className="h-6 w-6 text-[#0EA5E9]" /> {t("emergencyPage.stepsHeading")}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              {emergency.immediateSteps.map((step, idx) => (
                <div key={step} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="rounded-xl bg-[#E0F2FE] px-3 py-1.5 text-sm font-extrabold text-[#0284C7]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-[#475569]">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When to call a professional (service-specific) */}
          <section className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8" aria-labelledby="emergency-when-heading">
            <h2 id="emergency-when-heading" className="flex items-center gap-2 text-2xl font-extrabold text-[#075985]">
              <PhoneCall className="h-6 w-6 text-[#0EA5E9]" /> {t("emergencyPage.whenHeading")}
            </h2>
            <ul className="mt-5 space-y-3">
              {emergency.whenToCall.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-[#475569]">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0EA5E9]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Cost factors (honest, no fabricated prices) */}
          <section className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-xs sm:p-8" aria-labelledby="emergency-cost-heading">
            <h2 id="emergency-cost-heading" className="flex items-center gap-2 text-2xl font-extrabold text-[#075985]">
              <BadgeDollarSign className="h-6 w-6 text-[#B45309]" /> {t("emergencyPage.costHeading")}
            </h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#475569]">{emergency.costNote}</p>
          </section>

          {/* Coverage areas */}
          <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
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

          {emergency.faqs.length > 0 && (
            <VisibleFaqList
              className="mt-6 rounded-3xl border border-slate-100 bg-white py-8 sm:py-10"
              headingId="emergency-faq-heading"
              heading={t("emergencyPage.faqHeading", { name: service.title })}
              faqs={emergency.faqs}
            />
          )}

          <section className="mt-6" aria-labelledby="emergency-related-services">
            <h2 id="emergency-related-services" className="text-2xl font-extrabold text-[#075985]">
              {t("serviceDetail.otherServicesHeading")}
            </h2>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-[#475569]">
              {t("serviceDetail.otherServicesSub")}
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedBundle) => {
                const title = relatedBundle.titles[locale] ?? relatedBundle.titles.en;
                return (
                  <a
                    key={relatedBundle.href}
                    href={relatedBundle.href}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/30 hover:shadow-md"
                  >
                    <h3 className="font-extrabold text-[#075985]">{title}</h3>
                    <span className="mt-2 inline-flex text-sm font-bold text-[#0EA5E9]">{t("common.viewDetails")}</span>
                  </a>
                );
              })}
            </div>
          </section>

          <div className="mt-6 rounded-3xl bg-[#0284C7] p-6 text-white sm:p-8">
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

      {/* Audit P4-15 — NAP contact strip at the end of the content block. */}
      <NapContactStrip service={service.title} />
    </>
  );
}
