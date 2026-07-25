'use client';

import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import type { GenericContentPage } from "@/config/content-data";
import { servicesData } from "@/config/services-data";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { InternalLinkGrid } from "@/components/internal-link-grid";
import { useTranslations } from "@/hooks/use-translations";
import { contentI18n, contentI18nZh, contentI18nMsFull, contentI18nZhFull } from "@/config/content-i18n";
import { useLang } from "@/context/lang-context";

export function GenericContentPageView({ page }: { page: GenericContentPage }) {
  const t = useTranslations();
  const { lang } = useLang();
  const relatedService = page.relatedServiceSlug ? servicesData[page.relatedServiceSlug] : undefined;

  // Apply content-level i18n lookup for MS and ZH (primary dictionary + expanded coverage)
  const msDict = lang === "ms" ? (contentI18nMsFull[page.slug] ?? contentI18n[page.slug]) : null;
  const zhDict = lang === "zh" ? (contentI18nZhFull[page.slug] ?? contentI18nZh[page.slug]) : null;
  const i18nLookup = msDict ?? zhDict ?? (lang === "ms" ? contentI18n[page.slug] : lang === "zh" ? contentI18nZh[page.slug] : page.i18n?.ms ?? page.i18n?.zh);
  const localizedTitle = (i18nLookup?.title as string) ?? page.title;
  const localizedIntro = (i18nLookup?.intro as string) ?? page.intro;
  const localizedCategory = (i18nLookup?.category as string) ?? page.category;

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
            {localizedCategory}
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#075985] sm:text-5xl">
            {localizedTitle}
          </h1>
          <p className="text-base font-semibold leading-relaxed text-[#475569] sm:text-lg">
            {localizedIntro}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
          <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{t("content.keyTakeaways")}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {page.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-semibold leading-relaxed text-[#475569]">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
          <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{t("content.practicalGuidance")}</h2>
          <div className="space-y-4 text-sm font-semibold leading-relaxed text-[#475569]">
            <p>
              {t("content.guidanceIntro")}
            </p>
            <p>
              {t("content.guidanceSafeApproach")}
            </p>
          </div>
        </div>

        {relatedService ? (
          <InternalLinkGrid
            title={t("content.relatedServices", { service: relatedService.title })}
            links={[
              { title: relatedService.title, href: `/services/${relatedService.slug}`, desc: relatedService.tagline },
              ...relatedService.subServices.slice(0, 2).map((sub) => ({
                title: sub.name,
                href: `/services/${relatedService.slug}/${sub.name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`,
                desc: sub.desc
              }))
            ]}
          />
        ) : null}

        <div className="rounded-3xl bg-[#0284C7] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">{t("content.needHelp")}</h2>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-blue-50">
            {t("content.needHelpDesc")}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={getWhatsAppLink({ service: page.title })} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">
              <MessageCircle className="h-4 w-4" /> {t("whatsappDesk.cta")}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#075985]">
              {t("content.bookingForm")}
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
          <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{t("content.faqs")}</h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-slate-50 p-4">
                <h3 className="font-extrabold text-[#075985]">{faq.q}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
