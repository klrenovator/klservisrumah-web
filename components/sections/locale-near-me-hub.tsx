"use client";

import React from "react";
import Link from "next/link";
import { MapPinned } from "lucide-react";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import type { AreaLinkEntry, LocaleMap, ServiceBundleEntry } from "@/lib/location-bundles";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { NearMeLocator } from "@/components/near-me-locator";

export type SuburbChip = { slug: string; name: string };

/**
 * LocaleNearMeHub — client wrapper for `/near-me/[serviceSlug]`.
 * Renders the near-me hub page in the active locale (EN / MS / ZH).
 */
export function LocaleNearMeHub({
  serviceSlug,
  serviceBundle,
  areaLinks,
  suburbChips
}: {
  serviceSlug: string;
  serviceBundle: LocaleMap<ServiceBundleEntry>;
  areaLinks: AreaLinkEntry[];
  suburbChips: SuburbChip[];
}) {
  const { lang } = useLang();
  const t = useTranslations();
  const service = serviceBundle[lang] ?? serviceBundle.en;

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
          <MapPinned className="h-4 w-4" /> {t("location.nearMeHubBadge")}
        </span>
        <h1 className="mt-4 text-3xl font-extrabold text-[#075985] sm:text-5xl">
          {t("location.nearMeHubH1", { service: service.title })}
        </h1>
        <p className="mt-4 max-w-3xl text-base font-semibold leading-relaxed text-[#475569]">
          {t("location.nearMeHubIntro")}
        </p>

        <div className="mt-8">
          <NearMeLocator />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {areaLinks.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-lg font-extrabold text-[#075985]">
                {service.title} — {area.names[lang] ?? area.names.en}
              </h2>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-[#475569]">
                {t("location.nearMeHubCovers", { landmarks: area.landmarks })}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
          <h2 className="text-2xl font-extrabold text-[#075985]">{t("location.popularSuburbs")}</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {suburbChips.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/suburbs/${suburb.slug}/${serviceSlug}`}
                className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-[#475569] hover:bg-[#E0F2FE]"
              >
                {suburb.name}
              </Link>
            ))}
          </div>
        </div>

        <a
          href={getWhatsAppLink({ service: `${serviceBundle[lang]?.title ?? serviceBundle.en.title} near me`, lang })}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white"
        >
          {t("location.nearMeHubCta")}
        </a>
      </div>
    </section>
  );
}
