import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, MessageSquare } from "lucide-react";
import { getServerTranslator } from "@/lib/i18n-server";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { getItemListSchema } from "@/lib/hub";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { NapContactStrip } from "@/components/content/nap-contact-strip";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";
import { resolvePodHeader } from "@/lib/content-locale-resolver";
import { POD_HUB_I18N } from "@/config/content-locale-data";
import { POD_FAMILIES, podDetailPath, podHubPath, type ContentPodFamily } from "@/config/content-locale";
import type { Locale } from "@/lib/i18n";

type PodLocale = Exclude<Locale, "en">; // "ms" | "zh"

/**
 * Localized pod hub (index) page (`/ms/<family>`, `/zh/<family>`) — the landing
 * node of each localized pod subtree (audit P3-12). Server-rendered so the
 * crawlable MS/ZH hub list carries in-language card copy and a CollectionPage
 * ItemList that points at the localized detail URLs.
 */
export function LocaleContentHubPage({ family, locale }: { family: ContentPodFamily; locale: PodLocale }) {
  const t = getServerTranslator(locale);
  const familyDef = POD_FAMILIES[family];
  const hubPath = podHubPath(family, locale);
  const copy = POD_HUB_I18N[family][locale];

  const items = familyDef.pages.map((page) => {
    const header = resolvePodHeader(page, family, locale);
    return {
      slug: page.slug,
      title: header.title,
      intro: header.intro,
      href: podDetailPath(family, page.slug, locale),
    };
  });

  const itemListSchema = getItemListSchema(
    copy.title,
    copy.description,
    hubPath,
    items.map((item) => ({ slug: item.slug, title: item.title, category: item.title, intro: item.intro, href: item.href }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Breadcrumbs
        ariaLabel={t("breadcrumbs.navAria")}
        items={[
          { name: t("breadcrumbs.home"), href: "/" },
          { name: copy.eyebrow, href: hubPath },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-950 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_38%),linear-gradient(135deg,rgba(7,89,133,0.95),rgba(2,6,23,0.98))]" />
        <div className="container-default relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-sky-100 backdrop-blur">
            <BookOpen className="h-3.5 w-3.5 text-sky-300" /> {copy.eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/85 sm:text-lg">{copy.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsAppLink({ service: copy.title, lang: locale })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-[#075E54]/30 transition hover:bg-[#128C7E]"
            >
              <MessageSquare className="h-4 w-4" /> {t("whatsappDesk.cta")}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black uppercase tracking-wider text-[#075985] transition hover:bg-sky-50">
              {t("content.bookingForm")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16">
        <div className="container-default">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-[#0EA5E9] hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-base font-extrabold leading-tight text-[#075985]">{item.title}</span>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#0EA5E9] transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-2 line-clamp-3 text-xs font-semibold leading-relaxed text-[#475569]">{item.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Audit P4-15 — NAP contact strip at the end of the content block. */}
      <NapContactStrip service={copy.title} />

      <LocaleTreeLinks locale={locale} />
    </>
  );
}
