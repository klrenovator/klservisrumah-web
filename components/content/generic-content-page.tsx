'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import type { GenericContentPage } from "@/config/content-data";
import { contentNavList, contentRelatedServiceBySlug, type ContentNavItem } from "@/config/content-nav.generated";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { InternalLinkGrid } from "@/components/internal-link-grid";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";

type GenericContentI18nLookup = Partial<Pick<GenericContentPage, "title" | "intro" | "category">> | null;
type GenericContentBody = { bullets: string[]; faqs: { q: string; a: string }[] } | null;

export function GenericContentPageView({ page }: { page: GenericContentPage }) {
  const t = useTranslations();
  const { lang } = useLang();
  const relatedService = page.relatedServiceSlug ? contentRelatedServiceBySlug[page.relatedServiceSlug] : undefined;
  const [remoteI18n, setRemoteI18n] = useState<GenericContentI18nLookup>(null);
  const [remoteBody, setRemoteBody] = useState<GenericContentBody>(null);

  // Keep the default English bundle lean. Large MS/ZH content dictionaries are
  // loaded only after a visitor actively switches language, instead of being
  // shipped in every generic content page's initial JS chunk.
  useEffect(() => {
    let cancelled = false;

    if (lang === "en") {
      setRemoteI18n(null);
      setRemoteBody(null);
      return;
    }

    // The title/intro/category dictionary and the body (bullets + FAQs)
    // resolver are loaded together so the page never renders a translated
    // heading above an English bullet list.
    Promise.all([import("@/config/content-i18n"), import("@/lib/content-body-i18n")]).then(
      ([dictionaries, body]) => {
        if (cancelled) return;
        const lookup =
          lang === "ms"
            ? dictionaries.contentI18nMsFull[page.slug] ?? dictionaries.contentI18n[page.slug]
            : dictionaries.contentI18nZhFull[page.slug] ?? dictionaries.contentI18nZh[page.slug];
        setRemoteI18n(lookup ?? null);
        setRemoteBody(body.localizeContentBody(page, lang, lookup?.title as string | undefined));
      }
    );

    return () => {
      cancelled = true;
    };
  }, [lang, page]);

  const staticFallback = lang === "ms" ? page.i18n?.ms : lang === "zh" ? page.i18n?.zh : null;
  const i18nLookup = remoteI18n ?? staticFallback;
  const localizedTitle = (i18nLookup?.title as string) ?? page.title;
  const localizedIntro = (i18nLookup?.intro as string) ?? page.intro;
  const localizedCategory = (i18nLookup?.category as string) ?? page.category;
  const localizedBullets = remoteBody?.bullets ?? page.bullets;
  const localizedFaqs = remoteBody?.faqs ?? page.faqs;

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
            {localizedBullets.map((bullet) => (
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

        {/* Related pages in same category — improves inbound for thin hubs like /answers, /process etc.
            Uses circular next-6 selection so each page gets ~6 inbound from siblings instead of only the first 6. */}
        {(() => {
          const allInCategory = contentNavList.filter((p) => p.category === page.category);
          const currentIdx = allInCategory.findIndex((p) => p.slug === page.slug);
          const siblings: ContentNavItem[] = [];
          for (let i = 1; i <= 6; i++) {
            if (allInCategory.length <= 1) break;
            const idx = (currentIdx + i) % allInCategory.length;
            const s = allInCategory[idx];
            if (s.slug !== page.slug) siblings.push(s);
          }
          // Fallback: if circular didn't yield (e.g., single page), use filter
          const finalSiblings = siblings.length ? siblings : allInCategory.filter((p) => p.slug !== page.slug).slice(0, 6);
          if (!finalSiblings.length) return null;
          const hubFor = (category: string) => {
            const map: Record<string, string> = {
              "AI Answer Guide": "/answers",
              "Brand Guide": "/brands",
              Commercial: "/commercial",
              Comparison: "/compare",
              Residential: "/residential",
              Seasonal: "/seasonal",
              "Top Considerations": "/top",
              Process: "/process",
              "Maintenance Guide": "/guides/maintenance",
              Painting: "/guides",
              Plumbing: "/guides",
              Waterproofing: "/guides",
              Ceiling: "/guides",
              Handyman: "/guides",
            };
            return map[category] || "/guides";
          };
          const getHref = (s: ContentNavItem) => {
            if (s.category === "Service Cluster" && s.relatedServiceSlug) {
              return `/services/${s.relatedServiceSlug}/${s.slug}`;
            }
            return `${hubFor(s.category)}/${s.slug}`;
          };
          // Link back up to the category's own hub. Sub-hubs that are not in
          // the global navigation — `/guides/maintenance` is the only one —
          // were otherwise reachable from just two pages sitewide, even though
          // ten detail pages sit under them. The parent hub is skipped for
          // categories whose hub is already linked from every page's chrome,
          // so this adds a link only where it actually carries equity.
          const categoryHub = hubFor(page.category);
          const hubLink =
            page.category !== "Service Cluster" && categoryHub === "/guides/maintenance"
              ? [{
                  title: `${page.category} — ${t("common.viewAll")}`,
                  href: categoryHub,
                  desc: allInCategory.length > 1 ? `${allInCategory.length} guides in this category` : undefined
                }]
              : [];
          return (
            <InternalLinkGrid
              title={t("content.relatedReading") || "Related reading"}
              subtitle={`${page.category} — ${finalSiblings.length} more guides`}
              links={[
                ...finalSiblings.map((s) => ({
                  title: s.title,
                  href: getHref(s),
                  desc: s.intro.slice(0, 120)
                })),
                ...hubLink
              ]}
            />
          );
        })()}

        <div className="rounded-3xl bg-[#0284C7] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">{t("content.needHelp")}</h2>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-blue-50">
            {t("content.needHelpDesc")}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={getWhatsAppLink({ service: page.title, lang })} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white">
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
            {localizedFaqs.map((faq) => (
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
