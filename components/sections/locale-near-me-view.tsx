"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import type { AreaBundleEntry, LocaleMap, ServiceBundleEntry } from "@/lib/location-bundles";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

type RelatedNearMe = {
  slug: string;
  titles: Record<"en" | "ms" | "zh", string>;
  href: string;
};

/**
 * LocaleNearMeView — client wrapper for `/areas/[slug]/[serviceSlug]/near-me`.
 * Renders the "near me" landing page in the active locale (EN / MS / ZH).
 *
 * N14 improvement: adds related near-me links within the same area plus
 * explicit parent links. Before N14 each near-me page had exactly 1 inbound
 * (from its parent area×service page) and zero outbound cross-links, making
 * the entire 1,036-page cluster thin on equity despite being server-rendered.
 * Linking 12 siblings lifts inbound from 1 → ~12 per page.
 */
export function LocaleNearMeView({
  areaSlug,
  serviceSlug,
  startPrice,
  landmarks,
  areaBundle,
  serviceBundle,
  relatedNearMe = []
}: {
  areaSlug: string;
  serviceSlug: string;
  startPrice: string;
  landmarks: string[];
  areaBundle: LocaleMap<AreaBundleEntry>;
  serviceBundle: LocaleMap<ServiceBundleEntry>;
  relatedNearMe?: RelatedNearMe[];
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div>
            <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
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
          </div>

          {/* Parent navigation — improves crawl path back to equity-rich parents */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-wrap gap-2.5">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 w-full">
              {t("location.nearMeParentHeading")}
            </span>
            <Link
              href={`/areas/${areaSlug}/${serviceSlug}`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-extrabold text-[#0284C7] hover:border-[#0EA5E9] hover:bg-sky-100"
            >
              {t("location.nearMeBackToAreaService", { service: service.title, area: area.name })}
            </Link>
            <Link
              href={`/areas/${areaSlug}`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-extrabold text-[#075985] hover:border-[#0EA5E9] hover:bg-sky-50"
            >
              {t("location.nearMeViewArea", { area: area.name })} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/areas"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-extrabold text-[#075985] hover:border-[#0EA5E9] hover:bg-sky-50"
            >
              {t("location.coverageAreas")}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.subServices.map((sub) => (
              <div key={sub.name} className="rounded-2xl border border-slate-100 bg-white p-5">
                <h2 className="font-extrabold text-[#075985]">{sub.name}</h2>
                <p className="mt-1 text-sm font-bold text-[#0EA5E9]">{sub.price}</p>
                <p className="mt-2 text-xs font-semibold text-[#475569]">{sub.desc}</p>
              </div>
            ))}
          </div>

          <a
            href={getWhatsAppLink({ service: serviceBundle[lang]?.title ?? serviceBundle.en.title, location: areaBundle[lang]?.name ?? areaBundle.en.name, lang })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white"
          >
            {t("location.nearMeCta")}
          </a>

          {/* Related near-me pages in same area — lifts inbound for the whole cluster */}
          {relatedNearMe.length > 0 && (
            <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <span className="eyebrow">{t("location.nearMeRelatedHeading", { area: area.name })}</span>
              <h2 className="text-2xl font-extrabold text-[#075985] tracking-tight mt-2">
                {t("location.nearMeOtherNearMeHeading", { area: area.name })}
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed mt-2 font-medium">
                {t("location.nearMeRelatedSub", { area: area.name })}
              </p>
              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {relatedNearMe.map((related) => (
                  <Link
                    key={related.slug}
                    href={related.href}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-[#0EA5E9] hover:bg-sky-50 hover:shadow-sm flex items-start justify-between gap-2"
                  >
                    <span className="text-sm font-extrabold text-[#075985] leading-tight group-hover:text-[#0284C7]">
                      {related.titles[lang] ?? related.titles.en} {t("location.nearMeBadge")} — {area.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
              <div className="mt-5">
                <Link href={`/areas/${areaSlug}`} className="text-sm font-extrabold text-[#0EA5E9] hover:text-[#0369A1]">
                  {t("location.nearMeAllServicesInArea", { area: area.name })} →
                </Link>
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
