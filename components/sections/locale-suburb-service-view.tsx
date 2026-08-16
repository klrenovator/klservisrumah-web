"use client";

import React from "react";
import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import type { LocaleMap, LocationPairBundleEntry, ServiceBundleEntry, ServiceLinkEntry, SuburbBundleEntry } from "@/lib/location-bundles";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { LocationPairContent } from "@/components/sections/location-pair-content";

export type NearbySuburbLink = { slug: string; name: string };

/**
 * LocaleSuburbServiceView — client wrapper for `/suburbs/[slug]/[serviceSlug]`.
 * Renders the suburb × service landing page in the active locale (EN / MS / ZH)
 * from a compact server-built bundle (keeps the suburb/service datasets off the
 * client bundle across 1,372 static pages).
 */
export function LocaleSuburbServiceView({
  suburbSlug,
  suburbName,
  serviceSlug,
  startPrice,
  landmarks,
  nearby,
  suburbBundle,
  serviceBundle,
  pairBundle,
  otherServices = []
}: {
  suburbSlug: string;
  suburbName: string;
  serviceSlug: string;
  startPrice: string;
  landmarks: string[];
  nearby: NearbySuburbLink[];
  suburbBundle: LocaleMap<SuburbBundleEntry>;
  serviceBundle: LocaleMap<ServiceBundleEntry>;
  pairBundle: LocaleMap<LocationPairBundleEntry>;
  otherServices?: ServiceLinkEntry[];
}) {
  const { lang } = useLang();
  const t = useTranslations();
  const suburb = suburbBundle[lang] ?? suburbBundle.en;
  const service = serviceBundle[lang] ?? serviceBundle.en;
  const pairCopy = pairBundle[lang] ?? pairBundle.en;

  const faqs = [
    ...suburb.faqs.slice(0, 2),
    {
      q: t("location.faqHowMuch", { area: suburbName, service: service.title }),
      a: t("location.faqHowMuchSuburbA", { service: service.title, price: startPrice })
    }
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: t("location.suburbs"), href: "/areas" },
          { label: suburbName, href: `/suburbs/${suburbSlug}/${serviceSlug}` },
          { label: service.title, href: `/suburbs/${suburbSlug}/${serviceSlug}` }
        ]}
      />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
                <MapPin className="h-4 w-4" /> {suburbName}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold text-[#075985] sm:text-5xl">
                {t("location.serviceInArea", {
                  service: service.title,
                  area: suburbName,
                  price: startPrice
                })}
              </h1>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">{suburb.housingProfile}</p>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">
                {t("location.commonChecks", {
                  area: suburbName,
                  issues: suburb.commonIssues.slice(0, 3).join(", "),
                  service: service.title
                })}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#075985]">{t("location.landmarksCovered")}</h2>
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
              <h2 className="text-2xl font-extrabold text-[#075985]">{t("location.pricingGuide")}</h2>
              <div className="mt-5 space-y-3">
                {service.subServices.map((sub) => (
                  <div key={sub.name} className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="font-extrabold text-[#075985]">{sub.name}</h3>
                    <p className="text-sm font-bold text-[#0EA5E9]">{sub.price}</p>
                    <p className="mt-1 text-xs font-semibold text-[#475569]">{sub.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{t("location.nearbyPages")}</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {nearby.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/suburbs/${item.slug}/${serviceSlug}`}
                    className="rounded-2xl bg-slate-50 p-4 text-sm font-extrabold text-[#075985] hover:bg-[#E0F2FE]"
                  >
                    {item.name} — {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {otherServices.length > 0 && (
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
                <h2 className="text-2xl font-extrabold text-[#075985]">
                  {t("location.nearMeRelatedHeading", { area: suburbName })}
                </h2>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">
                  {t("location.nearMeRelatedSub", { area: suburbName })}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {otherServices.map((entry) => {
                    const title = entry.titles[lang] ?? entry.titles.en;
                    return (
                      <Link
                        key={entry.href}
                        href={entry.href}
                        className="rounded-2xl bg-slate-50 p-4 text-sm font-extrabold text-[#075985] hover:bg-[#E0F2FE]"
                      >
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{t("location.faqs")}</h2>
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
              <h2 className="text-2xl font-extrabold">{t("location.bookIn", { area: suburbName })}</h2>
              <p className="mt-2 text-sm font-semibold text-blue-50">{t("location.bookInBodySuburb")}</p>
              <a
                href={getWhatsAppLink({ service: service.title, location: suburbName, lang })}
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
