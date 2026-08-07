"use client";

import React from "react";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import type { AreaBundleEntry, LocaleMap, ServiceBundleEntry } from "@/lib/location-bundles";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

/**
 * LocaleNearMeView — client wrapper for `/areas/[slug]/[serviceSlug]/near-me`.
 * Renders the "near me" landing page in the active locale (EN / MS / ZH).
 */
export function LocaleNearMeView({
  areaSlug,
  serviceSlug,
  startPrice,
  landmarks,
  areaBundle,
  serviceBundle
}: {
  areaSlug: string;
  serviceSlug: string;
  startPrice: string;
  landmarks: string[];
  areaBundle: LocaleMap<AreaBundleEntry>;
  serviceBundle: LocaleMap<ServiceBundleEntry>;
}) {
  const { lang } = useLang();
  const t = useTranslations();
  const area = areaBundle[lang] ?? areaBundle.en;
  const service = serviceBundle[lang] ?? serviceBundle.en;

  const heading = t("location.nearMeH1", {
    service: service.title,
    area: area.name,
    price: startPrice
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { label: t("location.coverageAreas"), href: "/areas" },
          { label: area.name, href: `/areas/${areaSlug}` },
          { label: t("location.nearMeBadge"), href: `/areas/${areaSlug}/${serviceSlug}/near-me` }
        ]}
      />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0369A1]">
            {t("location.nearMeBadge")}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#075985] sm:text-5xl">{heading}</h1>
          <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">
            {t("location.nearMeIntro", {
              service: service.title,
              area: area.name,
              landmarks: landmarks.join(", ")
            })}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.subServices.map((sub) => (
              <div key={sub.name} className="rounded-2xl border border-slate-100 bg-white p-5">
                <h2 className="font-extrabold text-[#075985]">{sub.name}</h2>
                <p className="mt-1 text-sm font-bold text-[#0369A1]">{sub.price}</p>
                <p className="mt-2 text-xs font-semibold text-[#475569]">{sub.desc}</p>
              </div>
            ))}
          </div>

          <a
            href={getWhatsAppLink({ service: serviceBundle.en.title, location: areaBundle.en.name })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-[#15803D] px-5 py-3 text-sm font-extrabold text-white"
          >
            {t("location.nearMeCta")}
          </a>
        </div>
      </section>
    </>
  );
}
