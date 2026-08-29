import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import type { GenericContentPage } from "@/config/content-data";
import { servicesData } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import { getServerTranslator } from "@/lib/i18n-server";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { getArticleSchema, getFAQSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { NapContactStrip } from "@/components/content/nap-contact-strip";
import { InternalLinkGrid } from "@/components/internal-link-grid";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";
import { resolvePod } from "@/lib/content-locale-resolver";
import { POD_HUB_I18N } from "@/config/content-locale-data";
import {
  POD_FAMILIES,
  podDetailPath,
  podHubPath,
  type ContentPodFamily,
} from "@/config/content-locale";
import type { Locale } from "@/lib/i18n";

type PodLocale = Exclude<Locale, "en">; // "ms" | "zh"

/**
 * Fully-localised, indexable content-pod page (`/ms/<family>/<slug>`,
 * `/zh/<family>/<slug>`) — audit Part 3 finding P3-12.
 *
 * WHY A SERVER COMPONENT (mirrors `LocaleServicePage` / `LocaleProblemPage`):
 * the shared `GenericContentPageView` localises client-side via the language
 * pill, so its SSR HTML is always English and there is no crawlable MS/ZH pod
 * URL. A bot hitting `/ms/commercial/painting-services-kl` must receive Bahasa
 * Malaysia HTML in the first response. Everything here is rendered server-side
 * from the pre-resolved localized pod (title / intro / bullets / FAQs /
 * guidance) plus the full site dictionary, so the SSR output is 100%
 * in-language with zero English flash.
 */
export function LocaleContentPageView({
  page,
  family,
  locale,
}: {
  page: GenericContentPage;
  family: ContentPodFamily;
  locale: PodLocale;
}) {
  const t = getServerTranslator(locale);
  const pod = resolvePod(page, family, locale, t);
  const familyDef = POD_FAMILIES[family];
  const hubPath = podHubPath(family, locale);
  const path = podDetailPath(family, page.slug, locale);
  const hubCopy = POD_HUB_I18N[family][locale];

  // Related service (card) — links to the localized service page, which always
  // exists. Sub-service links are skipped here because only a subset of
  // sub-services have localized twins.
  const relatedService = page.relatedServiceSlug ? servicesData[page.relatedServiceSlug] : undefined;
  const relatedServiceLoc = relatedService ? getLocalizedService(relatedService, locale) : undefined;
  const servicePath = relatedService ? `/${locale}/services/${relatedService.slug}` : undefined;

  // Circular next-6 siblings within the SAME family, linking their localized
  // routes — the localized analogue of the EN "related reading" grid.
  const allInFamily = familyDef.pages;
  const currentIdx = allInFamily.findIndex((p) => p.slug === page.slug);
  const siblings: GenericContentPage[] = [];
  for (let i = 1; i <= 6 && allInFamily.length > 1; i++) {
    const s = allInFamily[(currentIdx + i) % allInFamily.length];
    if (s.slug !== page.slug) siblings.push(s);
  }

  const articleSchema = getArticleSchema({
    title: pod.title,
    slug: page.slug,
    excerpt: pod.intro,
    path,
    category: pod.category,
  });
  const faqSchema = getFAQSchema(pod.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs
        ariaLabel={t("breadcrumbs.navAria")}
        items={[
          { name: t("breadcrumbs.home"), href: "/" },
          { name: hubCopy.eyebrow, href: hubPath },
          { name: pod.title, href: path },
        ]}
      />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
              {pod.category}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#075985] sm:text-5xl">
              {pod.title}
            </h1>
            <p className="text-base font-semibold leading-relaxed text-[#475569] sm:text-lg">
              {pod.intro}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
            <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{t("content.keyTakeaways")}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pod.bullets.map((bullet) => (
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
              <p>{pod.guidance.intro}</p>
              <p>{pod.guidance.safe}</p>
            </div>
          </div>

          {relatedServiceLoc && servicePath ? (
            <InternalLinkGrid
              title={t("content.relatedServices", { service: relatedServiceLoc.title })}
              links={[
                {
                  title: relatedServiceLoc.title,
                  href: servicePath,
                  desc: relatedServiceLoc.tagline,
                },
              ]}
            />
          ) : null}

          {siblings.length ? (
            <InternalLinkGrid
              title={t("content.relatedReading")}
              subtitle={`${hubCopy.title} — ${siblings.length}+`}
              links={[
                ...siblings.map((s) => {
                  const siblingHeader = resolvePod(s, family, locale, t);
                  return {
                    title: siblingHeader.title,
                    href: podDetailPath(family, s.slug, locale),
                    desc: siblingHeader.intro.slice(0, 120),
                  };
                }),
                { title: `${hubCopy.title} — ${t("common.viewAll")}`, href: hubPath },
              ]}
            />
          ) : null}

          <div className="rounded-3xl bg-[#0284C7] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">{t("content.needHelp")}</h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-blue-50">{t("content.needHelpDesc")}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppLink({ service: pod.title, lang: locale })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white"
              >
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
              {pod.faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl bg-slate-50 p-4">
                  <h3 className="font-extrabold text-[#075985]">{faq.q}</h3>
                  <p className="faq-answer mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit P4-15 — NAP contact strip at the end of the content block. */}
      <NapContactStrip service={pod.title} />

      <LocaleTreeLinks locale={locale} />
    </>
  );
}
