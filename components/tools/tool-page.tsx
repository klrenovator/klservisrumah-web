import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ESTIMATE_DISCLAIMER } from "@/lib/estimator/format";
import { toolsContent, type ToolContent } from "@/config/tools-data";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import type { MessageDictionary } from "@/lib/i18n";
import {
  TOOLS_INDEX_PATH,
  TOOL_CROSS_LINES_EN,
  localizedToolContent,
  toolLocaleUrls,
  toolPath,
  toolShellCopy,
  type SiteLocale
} from "@/config/tools-i18n";

/**
 * Server-rendered shell around a tool. The interactive wizard is passed in as a
 * pre-split client node (`wizard`) rather than a spec object, because estimator
 * specs carry functions that cannot cross the server → client boundary.
 *
 * Everything else here — hero, direct answer, how-to, price table, FAQ and
 * cross-links — renders as static HTML so crawlers and AI readers get the full
 * content without executing any JavaScript, and the LCP image never waits on
 * the estimator bundle.
 *
 * `locale` drives the shared chrome copy (headings, table labels, CTA) plus the
 * `href`s of the related-tool and index links. The page-level `content` must
 * already be the locale-merged object (`localizedToolContent(slug, locale)`),
 * so English callers can simply omit `locale` and pass `toolsContent[slug]`.
 */
export function ToolPage({
  content,
  intro,
  wizard,
  locale = "en",
  localeUrls
}: {
  content: ToolContent;
  intro: string;
  wizard: React.ReactNode;
  locale?: SiteLocale;
  localeUrls?: Record<SiteLocale, string>;
}) {
  const shell = toolShellCopy[locale];
  const waLink = getWhatsAppLink({ service: content.name, lang: locale });
  const urls = localeUrls ?? toolLocaleUrls(content.slug);
  const related = content.relatedTools
    .map((slug) => {
      const tool = localizedToolContent(slug, locale);
      return toolsContent[slug] ? { name: tool.name, slug, firstStat: tool.stats[0].value } : null;
    })
    .filter((item): item is { name: string; slug: string; firstStat: string } => Boolean(item));

  /** Trilingual strip: the two languages this page is NOT in, linked to their URLs. */
  const stripLines: { label: string; line: string; href: string }[] = (
    [
      { label: "EN:", line: TOOL_CROSS_LINES_EN[content.slug], key: "en" as const },
      { label: "BM:", line: content.trilingualMs, key: "ms" as const },
      { label: "中文:", line: content.trilingualZh, key: "zh" as const }
    ] as const
  )
    .filter((item) => item.key !== locale && Boolean(item.line))
    .map((item) => ({ label: item.label, line: item.line, href: urls[item.key] }));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl"
        />
        <div className="container-default relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#0284C7]">
                <Sparkles className="h-3.5 w-3.5" /> {content.eyebrow}
              </span>

              <h1 className="mt-4 text-3xl font-black leading-[1.08] tracking-tight text-[#075985] sm:text-4xl lg:text-5xl">
                {content.heading}
              </h1>

              <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-slate-600">{intro}</p>

              <p className="trilingual-sub mt-3 italic">
                {stripLines.map((item, index) => (
                  <React.Fragment key={item.label}>
                    {index > 0 && <span className="mx-2 text-slate-300">·</span>}
                    <span>
                      <b>{item.label}</b>{" "}
                      <Link href={item.href} className="underline decoration-slate-300 underline-offset-2 hover:text-[#0284C7] hover:decoration-[#0284C7]">
                        {item.line}
                      </Link>
                    </span>
                  </React.Fragment>
                ))}
              </p>

              <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {content.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                    <dt className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</dt>
                    <dd className="mt-1 text-base font-black leading-tight text-[#075985]">{stat.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />{" "}
                  {shell.reviewsSummary(siteConfig.reviewRating, siteConfig.reviewCount)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <Clock className="h-4 w-4 text-[#0EA5E9]" /> {shell.takesAbout(content.estimatedMinutes)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" /> {shell.noSignup}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[#075985] to-[#0EA5E9] shadow-2xl">
                <Image
                  src={content.heroImage}
                  alt={content.heroAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  fetchPriority="high"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#03293f]/85 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[10px] font-black uppercase tracking-widest text-sky-200">
                    {shell.pricedFrom}
                  </p>
                  <p className="mt-1 text-lg font-black leading-tight">{content.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct answer (AEO / GEO citable block) ──────────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 sm:py-12">
        <div className="container-default">
          <div className="quick-answer">
            <span className="eyebrow">{shell.directEyebrow}</span>
            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#075985] sm:text-3xl">
              {content.directQuestion}
            </h2>
            <p className="faq-answer mt-3 text-base font-medium leading-relaxed text-slate-600">
              {content.directAnswer}
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {content.covers.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-semibold text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Estimator ────────────────────────────────────────────────── */}
      <section id="estimator" className="scroll-mt-20 bg-white py-6 sm:py-10">
        <div className="container-default">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 rounded-2xl border border-sky-100 bg-sky-50/60 p-4 text-sm font-bold leading-relaxed text-[#075985]">
              {shell.onePageNote}
            </div>
            {wizard}
          </div>
        </div>
      </section>

      {/* ── How it works (HowTo) ─────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-14 sm:py-16">
        <div className="container-default">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">{shell.howItWorksEyebrow}</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#075985] sm:text-3xl">
              {shell.howToHeading(content.name)}
            </h2>
            <ol className="mt-6 space-y-1">
              {content.howTo.map((step, index) => (
                <li key={step.title} className="timeline-step">
                  <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="min-w-0 pt-1.5">
                    <h3 className="text-base font-extrabold text-[#075985]">{step.title}</h3>
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-600">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Published rate table (crawlable pricing) ─────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container-default">
          <div className="mx-auto max-w-4xl">
            <span className="eyebrow">{shell.ratesEyebrow}</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#075985] sm:text-3xl">
              {shell.ratesHeading}
            </h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{content.priceTableNote}</p>

            <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <caption className="sr-only">
                  {shell.ratesCaption(content.name)}
                </caption>
                <thead className="bg-slate-50 text-[11px] uppercase tracking-widest text-[#075985]">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-black">{shell.thScope}</th>
                    <th scope="col" className="px-5 py-4 font-black">{shell.thRate}</th>
                    <th scope="col" className="px-5 py-4 font-black">{shell.thNotes}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {content.priceTable.map((row) => (
                    <tr key={row.scope}>
                      <th scope="row" className="px-5 py-4 text-left font-extrabold text-[#075985]">
                        {row.scope}
                      </th>
                      <td className="px-5 py-4 font-black text-[#0EA5E9]">{row.rate}</td>
                      <td className="px-5 py-4 text-xs font-semibold text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs font-bold leading-relaxed text-amber-900">
              {locale === "en" ? ESTIMATE_DISCLAIMER : localizedEstimateDisclaimer(locale)}
            </p>

            <Link
              href="/pricing"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-black text-[#0EA5E9] hover:text-[#075985]"
            >
              {shell.fullGuideLink} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container-default">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">{shell.faqEyebrow}</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#075985] sm:text-3xl">
              {shell.faqHeading(content.name)}
            </h2>
            <div className="mt-6 space-y-3">
              {content.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-sky-200 open:bg-sky-50/30"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-3 text-base font-extrabold text-[#075985] marker:content-['']">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#0EA5E9] transition-transform group-open:rotate-180"
                    >
                      ▾
                    </span>
                  </summary>
                  <p className="faq-answer mt-3 text-sm font-semibold leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-links + CTA ────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container-default">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-black text-[#075985]">{shell.relatedServicesHeading}</h2>
              <ul className="mt-4 space-y-2">
                {content.relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-[#075985]"
                    >
                      {service.label}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#0EA5E9] transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-black text-[#075985]">{shell.tryAnotherHeading}</h2>
              <ul className="mt-4 space-y-2">
                {related.map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={toolPath(tool.slug, locale)}
                      className="group block rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 transition hover:border-sky-200 hover:bg-sky-50"
                    >
                      <span className="flex items-center justify-between gap-2 text-sm font-bold text-slate-700 group-hover:text-[#075985]">
                        {tool.name}
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#0EA5E9] transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-slate-500">{tool.firstStat}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={TOOLS_INDEX_PATH[locale]}
                    className="group flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-[#075985]"
                  >
                    {shell.allToolsLink}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#0EA5E9] transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#075985] to-[#0369A1] p-6 text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                <BadgeCheck className="h-3.5 w-3.5" /> {shell.ssmBadge}
              </span>
              <h2 className="mt-4 text-xl font-black leading-tight">{shell.ctaHeading}</h2>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-sky-100">
                {shell.ctaBody}
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-black text-white transition hover:bg-[#128C7E]"
              >
                <MessageSquare className="h-4 w-4" /> {shell.ctaWhatsapp}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3.5 text-sm font-black text-white transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> {siteConfig.phoneDisplay}
              </a>
              <p className="mt-4 text-[11px] font-semibold leading-relaxed text-sky-200">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Localised rendering of the booking disclaimer. Sourced from the wizard
 * chrome dictionaries (not re-stated here) so this static shell and the
 * interactive tool can never quote different terms.
 */
function localizedEstimateDisclaimer(locale: Exclude<SiteLocale, "en">): string {
  const dict = locale === "ms" ? chromeMsDict : chromeZhDict;
  return ((dict.estimator as MessageDictionary).common as MessageDictionary).disclaimer as string;
}
