import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import type { Metadata } from "next";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { FaqHeroHeading } from "@/components/sections/faq-hero-heading";
import { FaqSearchFilter } from "@/components/sections/faq-search-filter";
import { FaqDirectoryView } from "@/components/sections/faq-directory-view";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getSpeakableSchema, getFAQSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { Phone, MessageSquare } from "lucide-react";
import { faqDirectory, faqDirectoryTotalCount } from "@/lib/faq-directory";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Every Home Service Question Answered",
  description:
    `${faqDirectoryTotalCount}+ questions on pricing, warranty, insurance, coverage areas, materials and booking — answered across every service, area and problem page on the site.`,
  path: "/faq",
  languageUrls: {
    en: "/faq",
    ms: "/ms/soalan-lazim",
    zh: "/zh/chang-jian-wen-ti",
  },
  keywords: [
    "home services FAQ Malaysia",
    "handyman questions KL",
    "painting cost FAQ Selangor"
  ]
});

export default function FAQPage() {

  return (
    <>
      {/* Hero Section — matches klrenovator.com FAQ page */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqHeroHeading />
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "FAQ Helpdesk", href: "/faq" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getSpeakableSchema(["h1", ".faq-intro", ".faq-answer"])
          )
        }}
      />

      <FAQAccordion />

      {/* Search box for the full site-wide FAQ directory below */}
      <section className="bg-slate-50 border-t border-slate-100 py-12 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FaqSearchFilter />
        </div>
      </section>

      <FaqDirectoryView categories={faqDirectory} totalCount={faqDirectoryTotalCount} />

      {/* Single combined FAQPage schema for the full directory — Google only
          honours one FAQPage graph per page, so every question below is
          merged into one script tag rather than one block per topic. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getFAQSchema(faqDirectory.flatMap((category) => category.items.map((item) => ({ q: item.q, a: item.a }))))
          )
        }}
      />
    </>
  );
}
