import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Clock,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
  Calculator,
  CheckCircle
} from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { servicesData, isQuoteOnlyService } from "@/config/services-data";
import { buildEstimateLinks } from "@/config/estimate-links";
import { siteConfig } from "@/config/site";
import { getLocalizedService } from "@/lib/service-i18n";
import { getServerTranslator } from "@/lib/i18n-server";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { warrantyLead, slugify } from "@/lib/utils";
import { hasSpecialtyLocaleContent } from "@/config/specialty-locale-content";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getHowToSchema,
  getServiceSchema,
  getSpeakableSchema
} from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DirectAnswer } from "@/components/content/direct-answer";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";
import { ProcessTimeline } from "@/components/content/process-timeline";
import { ServiceGuideSection } from "@/components/sections/service-guide-section";

/**
 * Fully-localised, indexable service page (`/ms/services/<slug>`,
 * `/zh/services/<slug>`) — the H3 pilot that gives Malay and Chinese search
 * real crawlable URLs for the service catalogue.
 *
 * WHY A SERVER COMPONENT (not `LocaleServiceView`):
 * `LocaleServiceView` localises client-side via the language pill, so its SSR
 * HTML is always English. A Googlebot hitting `/ms/services/painting` must
 * receive Malay HTML in the first response — that is the entire point of the
 * pilot. Everything here is rendered server-side from the pre-localised
 * service + the full site dictionary (same keys the client components use),
 * so the SSR output is 100% in-language with zero English flash.
 *
 * Interactive chrome (estimator) is intentionally not embedded: the pages
 * link to `/estimate/<slug>` and `/tools/*`, which are already trilingual
 * client-side, keeping the initial HTML lean and single-language.
 */

export const SERVICE_LOCALE_PATHS: Record<"ms" | "zh", (slug: string) => string> = {
  ms: (slug) => `/ms/services/${slug}`,
  zh: (slug) => `/zh/services/${slug}`,
};

export function localizedServiceLanguageUrls(slug: string): { en: string; ms: string; zh: string } {
  return {
    en: `/services/${slug}`,
    ms: SERVICE_LOCALE_PATHS.ms(slug),
    zh: SERVICE_LOCALE_PATHS.zh(slug),
  };
}

const trilingualSublines: Record<string, { ms: string; zh: string }> = {
  painting: { ms: "Pengecatan rumah premium di KL & Selangor", zh: "吉隆坡与雪兰莪优质房屋油漆" },
  plumbing: { ms: "Paip & pembaikan kebocoran di KL & Selangor", zh: "吉隆坡与雪兰莪水管与漏水维修" },
  ceiling: { ms: "Siling plaster & partisi di KL & Selangor", zh: "吉隆坡与雪兰莪石膏天花板与隔断" },
  waterproofing: { ms: "Kalis air & PU grouting di KL & Selangor", zh: "吉隆坡与雪兰莪防水与PU注浆" },
  handyman: { ms: "Tukang serba boleh di KL & Selangor", zh: "吉隆坡与雪兰莪杂工服务" },
  "house-renovation": { ms: "Pengubahsuaian rumah menyeluruh di KL & Selangor", zh: "吉隆坡与雪兰莪全屋翻新" },
  electrical: { ms: "Pendawaian & elektrik berlesen di KL & Selangor", zh: "吉隆坡与雪兰莪持牌电工服务" },
  "water-heater": { ms: "Pemanas air & pembaikan di KL & Selangor", zh: "吉隆坡与雪兰莪热水器安装与维修" },
  "ceiling-fan": { ms: "Pemasangan kipas siling di KL & Selangor", zh: "吉隆坡与雪兰莪吊扇安装" },
  lighting: { ms: "Pemasangan pencahayaan di KL & Selangor", zh: "吉隆坡与雪兰莪照明设计与安装" },
  tiling: { ms: "Jubin lantai & dinding di KL & Selangor", zh: "吉隆坡与雪兰莪瓷砖铺贴" },
  "plaster-ceiling": { ms: "Siling plaster moden di KL & Selangor", zh: "吉隆坡与雪兰莪现代石膏天花板" },
  "skim-coat": { ms: "Lapisan skim dinding di KL & Selangor", zh: "吉隆坡与雪兰莪墙面腻子" },
  flooring: { ms: "Jubin vinil, SPC & laminate di KL & Selangor", zh: "吉隆坡与雪兰莪乙烯基、SPC和复合地板" },
  "epoxy-flooring": { ms: "Epoxy lantai industri di KL & Selangor", zh: "吉隆坡与雪兰莪工业环氧地坪" },
  "roof-repair": { ms: "Pembaikan bumbung & kalis air di KL & Selangor", zh: "吉隆坡与雪兰莪屋顶维修与防水" },
  "kitchen-cabinet": { ms: "Kabinet dapur tersuai di KL & Selangor", zh: "吉隆坡与雪兰莪定制厨房橱柜" },
  carpentry: { ms: "Pertukangan & perabot tersuai di KL & Selangor", zh: "吉隆坡与雪兰莪定制木工与家具" },
  door: { ms: "Pembaikan & pasang pintu di KL & Selangor", zh: "吉隆坡与雪兰莪门维修与安装" },
  "window-repair": { ms: "Pembaikan tingkap & kaca di KL & Selangor", zh: "吉隆坡与雪兰莪窗户维修与玻璃更换" },
  locksmith: { ms: "Kunci pintar & kunci di KL & Selangor", zh: "吉隆坡与雪兰莪智能锁与锁匠" },
  "glass-aluminium": { ms: "Kaca & aluminium di KL & Selangor", zh: "吉隆坡与雪兰莪玻璃与铝制品" },
  cctv: { ms: "Pemasangan CCTV di KL & Selangor", zh: "吉隆坡与雪兰莪监控摄像头安装" },
  autogate: { ms: "Pintu pagar automatik di KL & Selangor", zh: "吉隆坡与雪兰莪自动门安装" },
};

/** Localized directory label for the two services indexes. */
export function localizedServicesIndexPath(locale: Locale): string {
  return locale === "ms" ? "/ms/services" : "/zh/services";
}

export function LocaleServicePage({ locale, slug }: { locale: "ms" | "zh"; slug: string }) {
  const service = servicesData[slug];
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  const localized = getLocalizedService(service, locale);
  const t = getServerTranslator(locale);
  const path = SERVICE_LOCALE_PATHS[locale](slug);
  const indexPath = localizedServicesIndexPath(locale);
  const subline = trilingualSublines[slug] ?? { ms: "", zh: "" };
  // The estimator destination that does not redirect — see the CTA below.
  const estimateHref =
    buildEstimateLinks().find((link) => link.slug === slug)?.resolvedPath ?? `/estimate/${slug}`;

  const serviceSchema = getServiceSchema({
    title: localized.title,
    description: localized.description,
    startPrice: service.startPrice,
    slug: service.slug,
    path,
    subServices: localized.subServices,
  });
  const faqSchema = getFAQSchema(localized.faqs);
  const howToSchema = getHowToSchema(localized.process.map((p) => ({ title: p.title, desc: p.desc })));
  const speakableSchema = getSpeakableSchema(["h1", ".service-hero-tagline", ".faq-answer"]);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: t("breadcrumbs.home"), item: "/" },
    { name: t("breadcrumbs.services"), item: "/services" },
    { name: localized.title, item: path },
  ]);

  const trustItems = [
    { icon: ShieldCheck, text: t("trustBadgesRow.insured") },
    { icon: CheckCircle2, text: t("trustBadgesRow.priceFirst") },
    { icon: Award, text: t("trustBadgesRow.warranty") },
    { icon: Clock, text: t("trustBadgesRow.sameDay") },
    { icon: Star, text: t("trustBadgesRow.google") },
  ];

  return (
    <>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <Breadcrumbs
        ariaLabel={t("breadcrumbs.navAria")}
        items={[
          { name: t("breadcrumbs.home"), href: "/" },
          { name: t("breadcrumbs.services"), href: indexPath },
          { name: localized.title, href: path },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-white section border-b border-slate-100 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#0EA5E9]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#E0F2FE]/10 blur-3xl pointer-events-none" />

        <div className="container-default relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <span className="trust-pill-blue trust-pill">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t("serviceDetail.verifiedBadge")}</span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#075985] tracking-tight leading-[1.05] text-balance">
                {localized.title}
              </h1>

              <p className="service-hero-tagline text-base sm:text-lg text-[#475569] leading-relaxed font-semibold max-w-2xl">
                {localized.tagline}
              </p>

              {(subline.ms || subline.zh) && (
                <p className="trilingual-sub italic">
                  {subline.ms && <span><b>BM:</b> {subline.ms}</span>}
                  {subline.ms && subline.zh && <span className="mx-1.5 text-slate-300">|</span>}
                  {subline.zh && <span><b>中文:</b> {subline.zh}</span>}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 mt-2">
                {isQuoteOnlyService(service) ? (
                  <span className="inline-flex items-center gap-2 bg-[#F0F9FF] border-2 border-[#BAE6FD] rounded-2xl px-5 py-3.5">
                    <span className="text-sm sm:text-base font-black text-[#075985] tracking-tight">
                      {t("serviceDetail.projectQuoted")}
                    </span>
                  </span>
                ) : (
                  <span className="inline-flex items-baseline gap-2 bg-[#F0F9FF] border-2 border-[#BAE6FD] rounded-2xl px-5 py-3">
                    <span className="text-xs font-extrabold text-[#0EA5E9] uppercase tracking-wider">{t("common.fromLabel")}</span>
                    <span className="text-3xl sm:text-4xl font-black text-[#075985] tracking-tight">{service.startPrice}</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-2xl text-sm font-bold">
                  <Award className="w-4 h-4" />
                  <span>{localized.warranty}</span>
                </span>
              </div>

              {/* Trust badges — server-rendered so they are in-language in the HTML */}
              <div className="flex flex-wrap gap-2.5 mt-1">
                {trustItems.map(({ icon: Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-[#075985]">
                    <Icon className="w-3.5 h-3.5 text-emerald-500" />
                    {text}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
                <a
                  href={getWhatsAppLink({ service: localized.title, lang: locale })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>{t("serviceDetail.bookWhatsApp")}</span>
                </a>
                <a href={`tel:${siteConfig.phone}`} className="btn-ghost text-base">
                  <Phone className="w-4 h-4 text-[#0EA5E9]" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <span className="text-sm font-extrabold text-[#075985]">4.9 / 5</span>
                <span className="text-xs text-[#475569] font-semibold">· {siteConfig.reviewCount}+ Google Reviews</span>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[#075985] via-[#0369A1] to-[#0EA5E9] shadow-2xl">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/30 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/20 blur-2xl" />
                </div>
                <Image
                  src={service.heroImage}
                  alt={`${localized.title} — KL Servis Rumah`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  fetchPriority="high"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                  <div className="eyebrow text-[#7DD3FC] mb-2">{t("serviceDetail.allCoverage")}</div>
                  <p className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight" aria-hidden="true">
                    {localized.title}
                  </p>
                  <p className="text-sm text-white/80 font-medium mt-1">{t("serviceDetail.trustLine")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────── */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div>
                <span className="eyebrow">{t("serviceContent.overviewEyebrow")}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
                  {t("serviceContent.aboutService", { name: localized.title })}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-medium">
                {localized.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="eyebrow">{t("serviceContent.whyChooseUs")}</span>
              <ul className="flex flex-col gap-2.5 mt-1">
                {localized.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm font-semibold text-[#475569]">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct Answer (AI-citable) ───────────────────────────────── */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <DirectAnswer
            question={t("serviceContent.isRightService", { name: localized.title })}
            answer={
              isQuoteOnlyService(service)
                ? t("serviceContent.quoteOnlyAnswer", {
                    title: localized.title,
                    tagline: localized.tagline,
                    warranty: localized.warranty,
                  })
                : `${localized.title} ${t("serviceContent.isRightAnswer", {
                    tagline: localized.tagline,
                    startPrice: service.startPrice,
                    warranty: localized.warranty,
                  })}`
            }
            trustItems={
              isQuoteOnlyService(service)
                ? [
                    t("serviceContent.projectQuotedTrust"),
                    t("serviceContent.ssmRegistered"),
                    t("serviceContent.insuredOps"),
                    t("serviceContent.whatsappResponse"),
                  ]
                : [
                    t("serviceContent.priceConfirmed"),
                    t("serviceContent.warranty", { days: warrantyLead(localized.warranty) }),
                    t("serviceContent.insuredOps"),
                    t("serviceContent.sameDayAvail"),
                    t("serviceContent.ssmRegistered"),
                  ]
            }
          />
        </div>
      </section>

      {/* ── Long-form pillar guide (quote-only awning page etc.) ─────── */}
      <ServiceGuideSection
        guide={service.guide}
        serviceTitle={localized.title}
        localeOverride={locale}
      />

      {/* ── Sub-services pricing ─────────────────────────────────────── */}
      <section className="section-tight bg-white">
        <div className="container-default">
          <div className="max-w-2xl">
            <span className="eyebrow">{t("serviceContent.pricingScope")}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {t("serviceContent.pricingHeading", { name: localized.title })}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
              {t("serviceContent.pricingSub")}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {service.subServices.map((enSub, idx) => {
              const sub = localized.subServices[idx] ?? enSub;
              const subSlug = slugify(enSub.name);
              const hasLocale = hasSpecialtyLocaleContent(slug, subSlug, locale);
              const card = (
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#075985]">{sub.name}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed font-medium">{sub.desc}</p>
                </div>
              );
              const price = (
                <span className="text-sm sm:text-base font-extrabold text-[#0EA5E9] shrink-0 bg-[#F0F9FF] px-5 py-2.5 rounded-xl border border-[#BAE6FD] w-fit">
                  {sub.price}
                </span>
              );
              if (hasLocale) {
                return (
                  <Link
                    key={idx}
                    href={locale === "ms" ? `/ms/services/${slug}/${subSlug}` : `/zh/services/${slug}/${subSlug}`}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-[#BAE6FD] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group"
                  >
                    {card}
                    {price}
                  </Link>
                );
              }
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-[#BAE6FD] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  {card}
                  {price}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <ProcessTimeline
            title={t("serviceContent.processHeading", { name: localized.title })}
            subtitle={t("serviceContent.processSub")}
            steps={localized.process}
          />
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────── */}
      <section className="section-tight bg-white">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <span className="eyebrow">{t("serviceContent.faqs")}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {t("serviceContent.faqHeading", { name: localized.title })}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {localized.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-slate-200 hover:border-[#BAE6FD] transition-all overflow-hidden">
                <summary className="cursor-pointer list-none p-5 sm:p-6 flex items-center justify-between gap-4">
                  <span className="text-sm sm:text-base font-extrabold text-[#075985]">{faq.q}</span>
                  <span className="text-[#0EA5E9] transition-transform group-open:rotate-45 text-xl leading-none shrink-0">+</span>
                </summary>
                <div className="faq-answer px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#475569] leading-relaxed font-medium">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related services — boosts internal link equity for the MS/ZH trees ── */}
      <section className="section-tight bg-slate-50 border-t border-slate-100">
        <div className="container-default">
          <div className="max-w-2xl">
            <span className="eyebrow">{t("services.pageEyebrow")}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {t("serviceDetail.otherServicesHeading")}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
              {t("serviceDetail.otherServicesSub")}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(() => {
              const allSlugs = Object.keys(servicesData);
              const currentIdx = allSlugs.indexOf(slug);
              const relatedSlugs: string[] = [];
              for (let i = 1; i <= 12; i++) {
                const idx = (currentIdx + i) % allSlugs.length;
                const s = allSlugs[idx];
                if (s !== slug) relatedSlugs.push(s);
              }
              return relatedSlugs.map((otherSlug) => {
                const other = servicesData[otherSlug];
                const otherLocalized = getLocalizedService(other, locale);
                return (
                  <Link
                    key={other.slug}
                    href={SERVICE_LOCALE_PATHS[locale](other.slug)}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-[#0EA5E9] hover:shadow-md flex flex-col gap-2"
                  >
                    <span className="text-sm font-extrabold text-[#075985] group-hover:text-[#0284C7] leading-tight">
                      {otherLocalized.title}
                    </span>
                    <span className="text-xs font-semibold leading-relaxed text-[#475569] line-clamp-2">
                      {otherLocalized.tagline}
                    </span>
                    <span className="mt-auto text-[11px] font-extrabold text-[#0EA5E9]">
                      {t("common.fromLabel")} {other.startPrice}
                    </span>
                  </Link>
                );
              });
            })()}
          </div>
          <div className="mt-6 text-center">
            <Link href={indexPath} className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0284C7] hover:text-[#0369A1]">
              {t("common.viewAll")} → 
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="section-tight bg-slate-50 border-t border-slate-100">
        <div className="container-narrow text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {t("serviceContent.ctaHeading", { name: localized.title })}
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed max-w-2xl mx-auto font-medium">
            {t("serviceContent.ctaSub")}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/*
              Resolve the estimator target rather than always linking the
              uniform `/estimate/<slug>` share URL. Six services (painting,
              plumbing, ceiling, plaster-ceiling, waterproofing, handyman) own
              a deeper hand-built tool, and their `/estimate/<slug>` URL is a
              301 handled in middleware — no static page is ever built for it.
              These localized pages were the only place in the entire build
              that linked those six redirecting URLs internally, so a crawl of
              `/ms/services/painting` and its 11 siblings hit a redirect hop on
              a primary CTA. `resolvedPath` is the canonical destination the
              rest of the site (e.g. the /estimate hub) already links to.
            */}
            <Link
              href={estimateHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-[#0369A1] transition-colors"
            >
              <Calculator className="w-4 h-4" />
              {t("serviceContent.estimateCta")}
            </Link>
            <a
              href={getWhatsAppLink({ service: localized.title, lang: locale })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              {t("serviceDetail.bookWhatsApp")}
            </a>
          </div>
          <p className="mt-6 text-xs font-semibold text-[#475569]">
            <Link href={indexPath} className="text-[#0EA5E9] hover:underline">
              {t("serviceContent.allServices")}
            </Link>
            {" · "}
            <Link href="/pricing" className="text-[#0EA5E9] hover:underline">
              {t("serviceContent.pricingLink")}
            </Link>
          </p>
        </div>
      </section>

      {/* Crawl path from this tree to the other three localized trees. */}
      <LocaleTreeLinks locale={locale} current="services" />
    </>
  );
}
