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
import { toolsList } from "@/config/tools-data";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ESTIMATE_DISCLAIMER } from "@/lib/estimator/format";
import { buildMetadata } from "@/lib/seo-meta";

const baseUrl = "https://www.klservisrumah.my";
const path = "/tools";

export const metadata = buildMetadata({
  title: "Free Home Service Estimators KL & Selangor",
  description:
    "Five free interactive estimators for painting, leak triage, ceiling repair, plumbing and TV mounting. Instant costs from our published 2026 KL & Selangor rates.",
  path,
  keywords: [
    "home service cost calculator Malaysia",
    "painting cost calculator KL",
    "plumbing price estimator Selangor",
    "ceiling repair cost calculator",
    "free renovation estimate Malaysia"
  ]
});

const hubFaqs = [
  {
    q: "Are these estimators really free?",
    a: "Yes. All five estimators are free, need no sign-up and no email address. You only share your details if you decide to book on WhatsApp at the end."
  },
  {
    q: "Where do the prices come from?",
    a: "Every figure is derived from the same published 2026 price list on this website — the service pages, the pricing page and our validated Klang Valley market-rate baseline. Nothing is invented for the calculator."
  },
  {
    q: "Is the estimate a final quotation?",
    a: ESTIMATE_DISCLAIMER
  },
  {
    q: "How long does each estimator take?",
    a: "Under a minute for most people. Every estimator is a single page — there are no next buttons and no multi-step wizard. You tap two or three answers, the price appears at the top of the page straight away, and anything optional stays collapsed until you want it."
  },
  {
    q: "Do the estimators work on a phone?",
    a: "Yes. They are built mobile-first with large tap targets, and they load fast on Malaysian mobile networks."
  },
  {
    q: "What happens after I get an estimate?",
    a: "You can book immediately on WhatsApp with your answers and estimate pre-filled, call us directly, or request a free on-site inspection to confirm the final price."
  }
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${baseUrl}${path}#collection`,
      url: `${baseUrl}${path}`,
      name: "Free Home Service Estimators — KL & Selangor",
      description:
        "Five free interactive cost estimators for painting, water leak triage, ceiling repair, plumbing diagnostics and TV mounting in Kuala Lumpur and Selangor.",
      isPartOf: { "@id": `${baseUrl}/#website` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".quick-answer", ".faq-answer"] }
    },
    {
      "@type": "ItemList",
      "@id": `${baseUrl}${path}#list`,
      name: "Free home service estimators",
      numberOfItems: toolsList.length,
      itemListElement: toolsList.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tool.name,
        description: tool.metaDesc,
        url: `${baseUrl}/tools/${tool.slug}`
      }))
    },
    ...toolsList.map((tool) => ({
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": `${baseUrl}/tools/${tool.slug}#app`,
      name: tool.name,
      url: `${baseUrl}/tools/${tool.slug}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any (web browser)",
      description: tool.metaDesc,
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" }
    })),
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}${path}#faq`,
      mainEntity: hubFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    }
  ]
};

export default function ToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <Breadcrumbs items={[{ label: "Free Tools", href: path }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.3),transparent_42%),linear-gradient(135deg,rgba(7,89,133,0.96),rgba(2,6,23,0.98))]"
        />
        <div className="container-default relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-sky-100 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" /> 5 free instant estimators
          </span>
          <h1 className="mt-5 max-w-4xl text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Know Your Price Before You Book
          </h1>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/85 sm:text-lg">
            Every estimator is a single page — no next buttons, no multi-step form. Tap two or three answers and the cost,
            timeline and recommended service appear instantly, calculated from the same 2026 rates published on this
            website. No sign-up, no email, no waiting for a callback.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky-300" /> One page · under a minute
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> No sign-up required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {siteConfig.reviewRating} / 5 from{" "}
              {siteConfig.reviewCount}+ reviews
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsAppLink({ service: "Free estimator follow-up" })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare className="h-4 w-4" /> Ask us directly
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black uppercase tracking-wider text-[#075985] transition hover:bg-sky-50"
            >
              View 2026 price guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Direct answer */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 sm:py-12">
        <div className="container-default">
          <div className="quick-answer">
            <span className="eyebrow">Direct Answer · Jawapan Ringkas · 直接答案</span>
            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#075985] sm:text-3xl">
              What can I estimate for free on this page?
            </h2>
            <p className="faq-answer mt-3 text-base font-medium leading-relaxed text-slate-600">
              KL Servis Rumah publishes five free interactive estimators for Kuala Lumpur and Selangor: a painting cost
              calculator covering interior, exterior, joinery and whole-property scopes; a water leak triage tool that
              diagnoses the likely cause and urgency; a ceiling repair and installation estimator; a plumbing diagnostic
              that matches symptoms to causes; and a TV mount advisor that recommends the correct bracket and anchor for
              your wall. Each one returns an estimated cost, an estimated range, the time required, a recommended
              service and suggested add-ons — all calculated from the published 2026 rates on this website.
            </p>
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs font-bold leading-relaxed text-amber-900">
              {ESTIMATE_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* Tool cards */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-default">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {toolsList.map((tool, index) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
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
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0284C7] backdrop-blur">
                    {tool.estimatedMinutes} min
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-black leading-tight text-[#075985] group-hover:text-[#0EA5E9]">
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
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#0EA5E9] transition-all group-hover:gap-3">
                    Start estimating <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}

            <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[#075985] to-[#0369A1] p-7 text-white">
              <h2 className="text-xl font-black leading-tight">Need something else estimated?</h2>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-sky-100">
                We cover 29 service categories across KL and Selangor. Send photos on WhatsApp and our dispatch desk
                will come back with an itemised market-rate quote.
              </p>
              <a
                href={getWhatsAppLink({ service: "Custom estimate request" })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#22C55E] px-5 py-3.5 text-sm font-black text-white transition hover:bg-[#16A34A]"
              >
                <MessageSquare className="h-4 w-4" /> Get a custom quote
              </a>
              <Link
                href="/services"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3.5 text-sm font-black text-white transition hover:bg-white/20"
              >
                Browse all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why use them */}
      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container-default">
          <div className="mx-auto max-w-4xl">
            <span className="eyebrow">Why estimate first</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#075985] sm:text-3xl">
              Built to save you a phone call
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { title: "Priced from this website", desc: "Every rate is pulled from our published service pricing — the calculator cannot show you a number we do not publish." },
                { title: "One page, no next buttons", desc: "Every question is on a single screen and the price updates live as you tap. Optional fine-tuning stays collapsed, so nothing gets in your way." },
                { title: "A real scope, not a guess", desc: "Surface condition, access height, urgency, materials and add-ons are all modelled, so the number reflects your actual job." },
                { title: "Straight to booking", desc: "Your answers and the estimate are pre-filled into WhatsApp so the dispatch desk can route the right tradesman immediately." }
              ].map((item) => (
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
            <span className="eyebrow">Frequently asked</span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#075985] sm:text-3xl">
              About our free estimators
            </h2>
            <div className="mt-6 space-y-3">
              {hubFaqs.map((faq) => (
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
    </>
  );
}
