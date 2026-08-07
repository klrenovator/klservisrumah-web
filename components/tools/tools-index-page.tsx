import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import type { ToolsIndexCopy } from "@/config/tools-i18n";

const baseUrl = "https://www.klservisrumah.my";

/** Everything the index needs to render one tool card, with the link target
 * already resolved for the page's locale. */
export type ToolIndexCard = {
  href: string;
  name: string;
  metaDesc: string;
  heroImage: string;
  heroAlt: string;
  stats: { label: string; value: string }[];
  estimatedMinutes: number;
};

/**
 * JSON-LD graph for the tools index: CollectionPage + ItemList + one
 * SoftwareApplication node per tool + FAQPage. `inLanguage` is only emitted on
 * the locale routes — the English graph keeps its historical shape.
 */
export function buildToolsIndexGraph({
  path,
  copy,
  tools,
  inLanguage
}: {
  path: string;
  copy: ToolsIndexCopy;
  tools: ToolIndexCard[];
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${baseUrl}${path}#collection`,
        url: `${baseUrl}${path}`,
        name: copy.graphCollectionName,
        description: copy.graphCollectionDescription,
        isPartOf: { "@id": `${baseUrl}/#website` },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".quick-answer", ".faq-answer"] },
        ...(inLanguage ? { inLanguage } : {})
      },
      {
        "@type": "ItemList",
        "@id": `${baseUrl}${path}#list`,
        name: copy.graphItemListName,
        numberOfItems: tools.length,
        itemListElement: tools.map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tool.name,
          description: tool.metaDesc,
          url: `${baseUrl}${tool.href}`
        }))
      },
      ...tools.map((tool) => ({
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": `${baseUrl}${tool.href}#app`,
        name: tool.name,
        url: `${baseUrl}${tool.href}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any (web browser)",
        description: tool.metaDesc,
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" }
      })),
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}${path}#faq`,
        mainEntity: copy.hubFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a }
        }))
      }
    ]
  };
}

/**
 * Shared body of the tools index, rendered identically for the English
 * `/tools`, the Malay `/ms/alatan` and the Chinese `/zh/gongju` routes — only
 * the copy bundle and the card hrefs differ. Server component: the entire
 * page is crawlable HTML.
 */
export function ToolsIndexPage({
  copy,
  path,
  tools,
  graph
}: {
  copy: ToolsIndexCopy;
  /** This route's own path — used for the breadcrumb JSON-LD item URL. */
  path: string;
  tools: ToolIndexCard[];
  graph: ReturnType<typeof buildToolsIndexGraph>;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <Breadcrumbs homeLabel={copy.homeLabel} items={[{ label: copy.breadcrumbLabel, href: path }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.3),transparent_42%),linear-gradient(135deg,rgba(7,89,133,0.96),rgba(2,6,23,0.98))]"
        />
        <div className="container-default relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-sky-100 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" /> {copy.heroEyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/85 sm:text-lg">
            {copy.heroIntro}
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky-300" /> {copy.trustOnePage}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> {copy.trustNoSignup}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />{" "}
              {copy.trustReviews(siteConfig.reviewRating, siteConfig.reviewCount)}
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsAppLink({ service: copy.waFollowUpService })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare className="h-4 w-4" /> {copy.askWhatsapp}
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black uppercase tracking-wider text-[#075985] transition hover:bg-sky-50"
            >
              {copy.viewPriceGuide} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Direct answer */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 sm:py-12">
        <div className="container-default">
          <div className="quick-answer">
            <span className="eyebrow">{copy.directEyebrow}</span>
            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#075985] sm:text-3xl">
              {copy.directQuestion}
            </h2>
            <p className="faq-answer mt-3 text-base font-medium leading-relaxed text-slate-600">
              {copy.directAnswer}
            </p>
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs font-bold leading-relaxed text-amber-900">
              {copy.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Tool cards */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-default">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={tool.heroImage}
                    alt={tool.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 2 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0369A1] backdrop-blur">
                    {copy.minutesBadge(tool.estimatedMinutes)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-black leading-tight text-[#075985] group-hover:text-[#0369A1]">
                    {tool.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm font-semibold leading-relaxed text-slate-600">{tool.metaDesc}</p>
                  <dl className="mt-4 flex flex-wrap gap-2">
                    {tool.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-slate-50 px-3 py-2">
                        <dt className="text-[9px] font-black uppercase tracking-widest text-slate-500">{stat.label}</dt>
                        <dd className="text-xs font-black text-[#075985]">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#0369A1] transition-all group-hover:gap-3">
                    {copy.startEstimating} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}

            <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[#075985] to-[#0369A1] p-7 text-white">
              <h2 className="text-xl font-black leading-tight">{copy.ctaTitle}</h2>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-sky-100">
                {copy.ctaBody}
              </p>
              <a
                href={getWhatsAppLink({ service: copy.waCustomService })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#15803D] px-5 py-3.5 text-sm font-black text-white transition hover:bg-[#166534]"
              >
                <MessageSquare className="h-4 w-4" /> {copy.ctaQuote}
              </a>
              <Link
                href="/services"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3.5 text-sm font-black text-white transition hover:bg-white/20"
              >
                {copy.ctaBrowse} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why use them */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container-default">
          <div className="mx-auto max-w-4xl">
            <span className="eyebrow">{copy.whyEyebrow}</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#075985] sm:text-3xl">
              {copy.whyTitle}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {copy.whyCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="flex items-start gap-2 text-base font-extrabold text-[#075985]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container-default">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">{copy.faqEyebrow}</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#075985] sm:text-3xl">
              {copy.faqTitle}
            </h2>
            <div className="mt-6 space-y-3">
              {copy.hubFaqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-sky-200 open:bg-sky-50/30"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-3 text-base font-extrabold text-[#075985] marker:content-['']">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#0369A1] transition-transform group-open:rotate-180"
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
    </>
  );
}
