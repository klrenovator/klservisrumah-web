import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckCircle2, MessageCircle } from "lucide-react";
import { problemPages } from "@/config/problem-data";
import { servicesData } from "@/config/services-data";
import { getLocalizedProblem } from "@/lib/problem-i18n";
import { getLocalizedService } from "@/lib/service-i18n";
import { getServerTranslator } from "@/lib/i18n-server";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getArticleSchema, getFAQSchema } from "@/lib/seo";
import { isRedirectedProblemSlug, problemLocaleUrls } from "@/config/problem-canonical";
import { indexableProblemPages } from "@/config/problem-index";
import { LocaleTreeLinks } from "@/components/sections/locale-tree-links";
import type { Locale } from "@/lib/i18n";

export function localeProblemStaticParams() {
  return indexableProblemPages().map((problem) => ({ slug: problem.slug }));
}

export function LocaleProblemPage({ locale, slug }: { locale: Locale; slug: string }) {
  if (isRedirectedProblemSlug(slug)) notFound();
  const problem = problemPages.find((item) => item.slug === slug);
  if (!problem) notFound();
  const service = servicesData[problem.serviceSlug];
  if (!service) notFound();

  const localizedProblem = getLocalizedProblem(problem, locale);
  const localizedService = getLocalizedService(service, locale);
  const t = getServerTranslator(locale);
  const urls = problemLocaleUrls(slug);
  const path = urls[locale === "en" ? "en" : locale];
  const serviceHref = locale === "ms" ? `/ms/services/${service.slug}` : locale === "zh" ? `/zh/services/${service.slug}` : `/services/${service.slug}`;
  const hubHref = locale === "ms" ? "/ms/problems" : locale === "zh" ? "/zh/problems" : "/problems";

  const headingSuffix =
    locale === "ms"
      ? "— Punca, Cara Baiki & Kos di KL"
      : locale === "zh"
        ? "— 原因、修复方法与吉隆坡费用"
        : "— Causes, Fixes & Cost in KL";

  const copy = {
    en: { causes: "Common causes", solutions: "Professional solutions", whenToCall: "When to call a pro", related: "Related service", relatedBody: `This problem usually connects to ${localizedService.title}. Review service scope, pricing, warranty, and process before booking.`, view: "View", faqs: "FAQs", needFixed: "Need this fixed?", needFixedBody: "Send photos and a short video if safe. We confirm a fixed-price quote before dispatch.", whatsapp: "WhatsApp Diagnosis", estimate: "Estimated professional fix:", urgency: "Urgency" },
    ms: { causes: "Punca biasa", solutions: "Penyelesaian profesional", whenToCall: "Bila perlu hubungi pakar", related: "Perkhidmatan berkaitan", relatedBody: `Masalah ini biasanya berkaitan dengan ${localizedService.title}. Semak skop perkhidmatan, harga, jaminan, dan proses sebelum menempah.`, view: "Lihat", faqs: "Soalan Lazim", needFixed: "Perlu dibaiki?", needFixedBody: "Hantar foto dan video pendek jika selamat. Kami sahkan sebut harga tetap sebelum penghantaran.", whatsapp: "Diagnosis WhatsApp", estimate: "Anggaran pembaikan profesional:", urgency: "Kesegeraan" },
    zh: { causes: "常见原因", solutions: "专业解决方案", whenToCall: "何时应联系专业人员", related: "相关服务", relatedBody: `此问题通常与${localizedService.title}相关。预约前请先了解服务范围、价格、保修与流程。`, view: "查看", faqs: "常见问题", needFixed: "需要维修吗？", needFixedBody: "如安全的话，请发送照片和简短视频。我们会在派工前确认固定价报价。", whatsapp: "WhatsApp 诊断", estimate: "专业维修预估费用：", urgency: "紧急程度" },
  }[locale];

  return (
    <>
      <Breadcrumbs
        ariaLabel={t("breadcrumbs.navAria")}
        items={[
          { label: t("nav.problems"), href: hubHref },
          { label: localizedProblem.title, href: path },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(localizedProblem.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: localizedProblem.title, slug: problem.slug, excerpt: localizedProblem.symptom, path, category: localizedService.title })) }} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <article className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-rose-600">
                <AlertTriangle className="h-4 w-4" /> {copy.urgency}: {localizedProblem.urgency}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#075985] sm:text-5xl text-balance">
                {`${localizedProblem.title} ${headingSuffix}`}
              </h1>
              <p className="problem-symptom mt-4 text-base font-semibold leading-relaxed text-[#475569]">{localizedProblem.symptom}</p>
              <p className="mt-3 text-sm font-extrabold text-[#0EA5E9]">{copy.estimate} {localizedProblem.costRange}</p>
            </div>

            <Section title={copy.causes} items={localizedProblem.causes} />
            <Section title={copy.solutions} items={localizedProblem.solutions} />
            <Section title={copy.whenToCall} items={localizedProblem.whenToCall} />

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="text-2xl font-extrabold text-[#075985]">{copy.related}</h2>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{copy.relatedBody}</p>
              <Link href={serviceHref} className="mt-5 inline-flex rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white">{copy.view} {localizedService.title}</Link>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{copy.faqs}</h2>
              <div className="space-y-4">
                {localizedProblem.faqs.map((faq) => (
                  <div key={faq.q} className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="font-extrabold text-[#075985]">{faq.q}</h3>
                    <p className="faq-answer mt-2 text-sm font-semibold text-[#475569]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl bg-[#0284C7] p-6 text-white shadow-xl">
              <h2 className="text-2xl font-extrabold">{copy.needFixed}</h2>
              <p className="mt-2 text-sm font-semibold text-blue-50">{copy.needFixedBody}</p>
              <a href={getWhatsAppLink({ service: localizedProblem.title, lang: locale })} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white">
                <MessageCircle className="h-4 w-4" /> {copy.whatsapp}
              </a>
            </div>
          </aside>
        </div>
      </section>
      {locale !== "en" ? <LocaleTreeLinks locale={locale} current="services" /> : null}
    </>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
      <h2 className="mb-5 text-2xl font-extrabold text-[#075985]">{title}</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-[#475569]">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />{item}
          </div>
        ))}
      </div>
    </div>
  );
}
