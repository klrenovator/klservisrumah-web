"use client";

import React from "react";
import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import type {
  AreaBundleEntry,
  LocaleMap,
  ServiceBundleEntry,
  ServiceLinkEntry,
  LocationPairBundleEntry
} from "@/lib/location-bundles";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { InternalLinkGrid } from "@/components/internal-link-grid";
import { LocationPairContent } from "@/components/sections/location-pair-content";

/**
 * LocaleAreaServiceView — client wrapper for `/areas/[slug]/[serviceSlug]`.
 * Renders the area × service landing page in the active locale (EN / MS / ZH).
 * Localized copy arrives as a pre-computed bundle from the server component so
 * the heavy service dataset never enters the client bundle.
 */
export function LocaleAreaServiceView({
  areaSlug,
  serviceSlug,
  startPrice,
  landmarks,
  areaBundle,
  serviceBundle,
  pairBundle,
  relatedLinks
}: {
  areaSlug: string;
  serviceSlug: string;
  startPrice: string;
  landmarks: string[];
  areaBundle: LocaleMap<AreaBundleEntry>;
  serviceBundle: LocaleMap<ServiceBundleEntry>;
  pairBundle: LocaleMap<LocationPairBundleEntry>;
  relatedLinks: ServiceLinkEntry[];
}) {
  const { lang } = useLang();
  const t = useTranslations();
  const area = areaBundle[lang] ?? areaBundle.en;
  const service = serviceBundle[lang] ?? serviceBundle.en;
  const pairCopy = pairBundle[lang] ?? pairBundle.en;

  const faqs = [
    {
      q: t("location.faqHowFast", { area: area.name, service: service.title }),
      a: t("location.faqHowFastA", { area: area.name, service: service.title })
    },
    {
      q: t("location.faqWhichAreas", { area: area.name }),
      a: t("location.faqWhichAreasA", { landmarks: landmarks.join(", ") })
    },
    {
      q: t("location.faqHowMuch", { area: area.name, service: service.title }),
      a: t("location.faqHowMuchA", { service: service.title, price: startPrice })
    }
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: t("location.coverageAreas"), href: "/areas" },
          { label: area.name, href: `/areas/${areaSlug}` },
          { label: service.title, href: `/areas/${areaSlug}/${serviceSlug}` }
        ]}
      />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
                <MapPin className="h-4 w-4" /> {area.name}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#075985] sm:text-5xl">
                {t("location.serviceInArea", {
                  service: service.title,
                  area: area.name,
                  price: startPrice
                })}
              </h1>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">
                {t("location.areaLocalContext", {
                  area: area.name,
                  landmarks: landmarks.slice(0, 3).join(", "),
                  service: service.title
                })}
              </p>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">{service.description}</p>

              {/*
                Crawl path to the "near me" variant of this exact area × service
                pair. Before this link, all 1,036 `/areas/<area>/<service>/near-me`
                pages were orphans: they were listed in the sitemap but had zero
                inbound internal links anywhere on the site, so they depended
                entirely on sitemap discovery and received no internal link
                equity. The parent page is the only natural, contextually
                relevant referrer, and it exists for every one of the 1,036 pairs.
              */}
              <Link
                href={`/areas/${areaSlug}/${serviceSlug}/near-me`}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-extrabold text-[#0284C7] transition hover:border-[#0EA5E9] hover:bg-sky-100"
              >
                <MapPin className="h-4 w-4" />
                {t("location.nearMeH1", { service: service.title, area: area.name, price: startPrice })}
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#075985]">
                {t("location.landmarksHeading", { area: area.name })}
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {landmarks.map((landmark) => (
                  <span key={landmark} className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-[#475569]">
                    {landmark}
                  </span>
                ))}
              </div>
            </div>

            <LocationPairContent copy={pairCopy} />

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#075985]">
                {t("location.pricingInArea", { area: area.name })}
              </h2>
              <div className="mt-5 space-y-3">
                {service.subServices.map((sub) => (
                  <div
                    key={sub.name}
                    className="flex flex-col justify-between gap-3 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h3 className="font-extrabold text-[#075985]">{sub.name}</h3>
                      <p className="text-xs font-semibold text-[#475569]">{sub.desc}</p>
                    </div>
                    <span className="rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-[#0EA5E9]">{sub.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <InternalLinkGrid
              title={t("location.moreAreaPages", { area: area.name })}
              links={relatedLinks.map((link) => ({
                title: `${link.titles[lang] ?? link.titles.en} — ${area.name}`,
                href: link.href,
                desc: link.descs[lang] ?? link.descs.en
              }))}
            />

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">
                {t("location.faqsIn", { area: area.name })}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="font-extrabold text-[#075985]">{faq.q}</h3>
                    <p className="mt-2 text-sm font-semibold text-[#475569]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl bg-[#0284C7] p-6 text-white shadow-xl">
              <h2 className="text-2xl font-extrabold">{t("location.bookIn", { area: area.name })}</h2>
              <p className="mt-2 text-sm font-semibold text-blue-50">{t("location.bookInBodyShort")}</p>
              <a
                href={getWhatsAppLink({ service: serviceBundle[lang]?.title ?? serviceBundle.en.title, location: areaBundle[lang]?.name ?? areaBundle.en.name, lang })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white"
              >
                <MessageCircle className="h-4 w-4" /> {t("location.whatsappDispatch")}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
