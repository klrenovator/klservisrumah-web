import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { servicesData } from "@/config/services-data";
import { siteConfig } from "@/config/site";
import { getLocalizedService } from "@/lib/service-i18n";
import { getServerTranslator } from "@/lib/i18n-server";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { localizedServiceLanguageUrls, localizedServicesIndexPath, SERVICE_LOCALE_PATHS } from "@/components/sections/locale-service-page";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";

/**
 * Fully-localised services directory (`/ms/services`, `/zh/services`) — the
 * entry point of the H3 pilot's real localized tree. Server-rendered so the
 * initial HTML is entirely in-language (same contract as the localized
 * service pages themselves).
 */
export function LocaleServicesIndex({ locale }: { locale: "ms" | "zh" }) {
  const t = getServerTranslator(locale);
  const indexPath = localizedServicesIndexPath(locale);
  const services = Object.values(servicesData).map((service) => getLocalizedService(service, locale));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: t("breadcrumbs.home"), href: "/" },
          { name: t("breadcrumbs.services"), href: indexPath },
        ]}
      />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow">{t("services.pageEyebrow")}</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#075985] sm:text-5xl">
              {t("services.pageTitle")}
            </h1>
            <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569] sm:text-lg">
              {t("services.pageSubtitle")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={SERVICE_LOCALE_PATHS[locale](service.slug)}
                className="group flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_-28px_rgba(2,31,68,0.4)] transition hover:border-sky-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-base font-extrabold leading-snug text-[#075985] group-hover:text-[#0284C7] transition-colors">
                    {service.title}
                  </h2>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#0EA5E9] opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </div>
                <p className="line-clamp-3 text-xs font-semibold leading-relaxed text-[#475569]">
                  {service.tagline}
                </p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                  <span className="text-xs font-extrabold text-[#0EA5E9]">
                    {t("common.fromLabel")} {service.startPrice}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    {t("services.warrantyBadge")}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center">
            <h2 className="text-xl font-extrabold text-[#075985] sm:text-2xl">{t("services.notSureHeading")}</h2>
            <p className="max-w-xl text-sm font-semibold leading-relaxed text-[#475569]">
              {t("services.notSureSub")}
            </p>
            <a
              href={getWhatsAppLink({ service: t("servicesIndex.whatsappService"), lang: locale })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare className="h-4 w-4 fill-white text-[#25D366]" aria-hidden="true" />
              {t("services.askWhatsApp")}
            </a>
            <p className="text-xs font-semibold text-[#475569]">
              {siteConfig.phoneDisplay} · {siteConfig.hours}
            </p>
          </div>
        </div>
      </section>

      {/* Crawl path from this tree to the other three localized trees. */}
      <LocaleTreeLinks locale={locale} current="services" />
    </>
  );
}

/** Real hreflang cluster for the services directory (all three locales). */
export function localizedServicesIndexLanguageUrls(): { en: string; ms: string; zh: string } {
  return {
    en: "/services",
    ms: "/ms/services",
    zh: "/zh/services",
  };
}

/** Re-export so route files share one source for the language URLs. */
export { localizedServiceLanguageUrls };
