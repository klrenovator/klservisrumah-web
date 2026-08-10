import React from "react";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Clock,
  MessageSquare,
  ShieldCheck,
  Star,
  CheckCircle,
  Wrench,
} from "lucide-react";
import { servicesData } from "@/config/services-data";
import type { Translator } from "@/lib/i18n";
import { slugify } from "@/lib/utils";
import { getLocalizedService } from "@/lib/service-i18n";
import { getServerTranslator } from "@/lib/i18n-server";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  getSpecialtyLocaleContent,
  hasSpecialtyLocaleContent,
} from "@/config/specialty-locale-content";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getHowToSchema,
  getServiceSchema,
} from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { DirectAnswer } from "@/components/content/direct-answer";
import { ProcessTimeline } from "@/components/content/process-timeline";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";
import { getSpecialtySilo } from "@/config/topical-authority-map";
import { blogPosts } from "@/config/blog-data";
import { blogI18n, localizedBlogPath } from "@/config/blog-i18n";
import { problemPages } from "@/config/problem-data";

/**
 * Fully-localised, indexable specialty page (`/ms/services/<s>/<sub>`,
 * `/zh/services/<s>/<sub>`) for the priority Painting + Ceiling tranche.
 *
 * Everything is rendered server-side in the target language from the authored
 * native block in `specialty-locale-content` (never spun from English), so
 * Googlebot receives in-language HTML in the first response.
 *
 * Only specialties with a real authored locale block have a route; anything
 * else 404s (dynamicParams = false) — no English fallback pages.
 */

export function localeSpecialtyPaths(
  serviceSlug: string,
  specialtySlug: string,
): { en: string; ms: string; zh: string } {
  return {
    en: `/services/${serviceSlug}/${specialtySlug}`,
    ms: `/ms/services/${serviceSlug}/${specialtySlug}`,
    zh: `/zh/services/${serviceSlug}/${specialtySlug}`,
  };
}

/** Enumerate only specialties that have a real localized page for `locale`. */
export function localeSpecialtyStaticParams(locale: "ms" | "zh") {
  return Object.values(servicesData).flatMap((service) =>
    service.subServices
      .map((sub) => ({ slug: service.slug, subservice: slugify(sub.name) }))
      .filter(({ slug, subservice }) => hasSpecialtyLocaleContent(slug, subservice, locale)),
  );
}

export function LocaleSpecialtyPage({
  locale,
  slug,
  subservice,
}: {
  locale: "ms" | "zh";
  slug: string;
  subservice: string;
}) {
  const service = servicesData[slug];
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  const sub = service.subServices.find((item) => slugify(item.name) === subservice);
  if (!sub) throw new Error(`Unknown specialty: ${slug}/${subservice}`);

  const localized = getLocalizedService(service, locale);
  const content = getSpecialtyLocaleContent(slug, subservice, locale);
  if (!content) throw new Error(`No authored ${locale} content for ${slug}/${subservice}`);

  // Price comes from the localized sub-service record; the rest from the authored block.
  const subIndex = service.subServices.findIndex((item) => item.name === sub.name);
  const localizedSub = subIndex >= 0 ? localized.subServices[subIndex] ?? sub : sub;

  const t = getServerTranslator(locale);
  const path = locale === "ms" ? `/ms/services/${slug}/${subservice}` : `/zh/services/${slug}/${subservice}`;
  const servicePath = locale === "ms" ? `/ms/services/${slug}` : `/zh/services/${slug}`;

  const faqSchema = getFAQSchema(content.faqs);
  const howToSchema = getHowToSchema(content.process.map((p) => ({ title: p.title, desc: p.desc })));
  const serviceSchema = getServiceSchema({
    title: content.name,
    description: content.description,
    startPrice: localizedSub.price,
    slug: service.slug,
    path,
    // The localized sub-service records so the JSON-LD OfferCatalog is
    // in-language too — without this it falls back to the English catalogue
    // (same pattern as `locale-service-page.tsx`).
    subServices: localized.subServices,
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: t("breadcrumbs.home"), item: "/" },
    { name: t("breadcrumbs.services"), item: locale === "ms" ? "/ms/services" : "/zh/services" },
    { name: localized.title, item: servicePath },
    { name: content.name, item: path },
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

      <Breadcrumbs
        ariaLabel={t("breadcrumbs.navAria")}
        items={[
          { name: t("breadcrumbs.home"), href: "/" },
          { name: t("breadcrumbs.services"), href: locale === "ms" ? "/ms/services" : "/zh/services" },
          { name: localized.title, href: servicePath },
          { name: content.name, href: path },
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
                {content.name}
              </h1>
              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed font-medium max-w-2xl">
                {content.tagline}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
                <a
                  href={getWhatsAppLink({ service: content.name, lang: locale })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                  {t("serviceDetail.bookWhatsApp")}
                </a>
                <Link
                  href={servicePath}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#BAE6FD] bg-white px-6 py-3 text-sm font-extrabold text-[#0369A1] hover:border-[#0EA5E9] hover:bg-[#F0F9FF] transition-colors"
                >
                  <Wrench className="w-4 h-4" />
                  {t("serviceContent.allServices")}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3">
                {trustItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#0EA5E9]" />
                    <span className="text-sm font-bold text-[#075985]">{item.text}</span>
                  </div>
                ))}
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
                  {t("serviceContent.aboutService", { name: content.name })}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-medium">
                {content.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="eyebrow">{t("serviceContent.whyChooseUs")}</span>
              <ul className="flex flex-col gap-2.5 mt-1">
                {content.highlights.map((h, idx) => (
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
            question={t("serviceContent.isRightService", { name: content.name })}
            answer={`${content.name} — ${content.description}`}
            trustItems={[
              t("serviceContent.priceConfirmed"),
              t("serviceContent.warranty", { days: "1" }),
              t("serviceContent.insuredOps"),
              t("serviceContent.sameDayAvail"),
              t("serviceContent.ssmRegistered"),
            ]}
          />
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="section-tight bg-white">
        <div className="container-narrow">
          <ProcessTimeline
            title={t("serviceContent.processHeading", { name: content.name })}
            subtitle={t("serviceContent.processSub")}
            steps={content.process}
          />
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────── */}
      <section className="section-tight bg-slate-50">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <span className="eyebrow">{t("serviceContent.faqs")}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
              {t("serviceContent.faqHeading", { name: content.name })}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {content.faqs.map((faq, idx) => (
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

      {/* ── Related guides + problems (typed topical relationships) ──── */}
      <RelatedSpecialtyContent locale={locale} serviceSlug={slug} specialtySlug={subservice} t={t} />

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="section-tight bg-white border-t border-slate-100">
        <div className="container-narrow text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {t("serviceContent.ctaHeading", { name: content.name })}
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed max-w-2xl mx-auto font-medium">
            {content.tagline}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppLink({ service: content.name, lang: locale })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              {t("serviceDetail.bookWhatsApp")}
            </a>
            <Link
              href={servicePath}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-[#0369A1] transition-colors"
            >
              {t("serviceContent.allServices")}
            </Link>
          </div>
        </div>
      </section>

      {/* Crawl path from this tree to the other localized trees. */}
      <LocaleTreeLinks locale={locale} current="services" />
    </>
  );
}

/**
 * RelatedSpecialtyContent — renders the typed specialty relationships from
 * the validated topical-authority map: related blog guides (linked to their
 * localized route where a translation exists) and related problem pages.
 * This closes the "specialty → blog/problem" internal-linking gap documented
 * in the multilingual architecture audit.
 */
function RelatedSpecialtyContent({
  locale,
  serviceSlug,
  specialtySlug,
  t,
}: {
  locale: "ms" | "zh";
  serviceSlug: string;
  specialtySlug: string;
  t: Translator;
}) {
  const silo = getSpecialtySilo(serviceSlug, specialtySlug);
  if (!silo) return null;

  const blogSlugs = silo.relatedBlogs ?? [];
  const problemSlugs = silo.relatedProblems ?? [];
  if (blogSlugs.length === 0 && problemSlugs.length === 0) return null;

  const relatedBlogs = blogSlugs
    .map((slug) => {
      const post = blogPosts.find((p) => p.slug === slug);
      if (!post) return null;
      const i18n = blogI18n[slug]?.[locale];
      const href = i18n ? localizedBlogPath(locale, i18n.slug) : `/blog/${post.slug}`;
      return { slug, href, title: i18n?.title ?? post.title, category: i18n?.category ?? post.category, readTime: post.readTime };
    })
    .filter(Boolean);

  const relatedProblems = problemSlugs
    .map((slug) => problemPages.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <section className="section-tight bg-white border-t border-slate-100" aria-label={t("internalLinks.guides")}>
      <div className="container-default">
        <div className="max-w-2xl">
          <span className="eyebrow">{t("internalLinks.guidesEyebrow")}</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
            {t("internalLinks.guides")}
          </h2>
          <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
            {t("internalLinks.guidesSub")}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {relatedBlogs.length > 0 && (
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-[#7C3AED] mb-4">
                {t("internalLinks.guides")}
              </h3>
              <ul className="flex flex-col gap-3">
                {relatedBlogs.map((b) => (
                  <li key={b!.slug}>
                    <Link
                      href={b!.href}
                      className="flex flex-col gap-1 rounded-2xl border border-slate-100 bg-slate-50 p-4 hover:border-[#C4B5FD] hover:shadow-md transition-all group"
                    >
                      <span className="text-[10px] font-extrabold uppercase tracking-wide text-[#7C3AED]">{b!.category}</span>
                      <span className="text-sm font-extrabold text-[#075985] group-hover:text-[#7C3AED] transition-colors leading-snug">{b!.title}</span>
                      <span className="text-[10px] font-semibold text-slate-400">{b!.readTime}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedProblems.length > 0 && (
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-amber-600 mb-4">
                {t("internalLinks.commonProblems")}
              </h3>
              <ul className="flex flex-col gap-3">
                {relatedProblems.map((p) => (
                  <li key={p!.slug}>
                    <Link
                      href={`/problems/${p!.slug}`}
                      className="flex flex-col gap-1 rounded-2xl border border-slate-100 bg-amber-50/40 p-4 hover:border-amber-300 hover:shadow-md transition-all group"
                    >
                      <span className="text-sm font-extrabold text-[#075985] group-hover:text-amber-600 transition-colors leading-snug">{p!.title}</span>
                      <span className="text-xs text-[#475569] leading-relaxed line-clamp-2 font-medium">{p!.symptom}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
