import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { servicesData } from "@/config/services-data";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getOfferCatalogSchema,
  getSpeakableSchema
} from "@/lib/seo";
import { PricingHeroHeading } from "@/components/sections/pricing-hero-heading";
import { LocalePricingContent } from "@/components/sections/locale-pricing-content";

export const metadata: Metadata = {
  title: "Home Services Pricing in KL & Selangor — 2026 Market-Rate Guide",
  description:
    "Transparent 2026 pricing for painting (RM 450+), plumbing (RM 120+), plaster ceiling (RM 220+), PU waterproofing (RM 300+) & handyman (RM 100+) in KL & Selangor.",
  keywords: [
    "home services price KL",
    "painting price Malaysia",
    "plumbing rates KL",
    "waterproofing cost Selangor",
    "handyman rates Malaysia",
    "renovation price KL"
  ],
  alternates: {
    canonical: "/pricing",
    languages: {
      "en-MY": "/pricing",
      "ms-MY": "/ms/pricing",
      "zh-MY": "/zh/pricing",
      "x-default": "/pricing"
    }
  },
  openGraph: {
    title: "KL Servis Rumah Pricing — Transparent 2026 Guide",
    description:
      "Transparent Klang Valley pricing for painting, plumbing, ceiling, waterproofing, handyman and 20+ home services. Market-rate, no hidden fees.",
    url: "https://www.klservisrumah.my/pricing",
    siteName: "KL Servis Rumah",
    type: "website",
    locale: "en_MY"
  },
  twitter: {
    card: "summary_large_image",
    title: "KL Servis Rumah Pricing — Transparent 2026 Guide",
    description:
      "Transparent Klang Valley pricing for 28+ home services. Market-rate, no hidden fees."
  }
};

const pricingFaqs = [
  {
    q: "How do you set your prices?",
    a: "We follow standard Klang Valley market rates. Prices are not inflated and not underpriced. Final quotes are confirmed only after scope, access, materials and urgency are checked.",
  },
  {
    q: "Do you charge hidden fees later?",
    a: "No. If extra work is needed, it is explained first and approved by you before we continue.",
  },
  {
    q: "Can I get a quote from photos on WhatsApp?",
    a: "Yes. Many small jobs can be estimated from clear photos, measurements and your area. More complex leak, ceiling or exterior jobs may still need an inspection.",
  },
  {
    q: "Are emergency jobs charged differently?",
    a: "Emergency jobs can cost more when urgent dispatch, after-hours labour, access difficulty or safety controls are involved. The emergency uplift is explained before work starts.",
  },
];

const offerCatalogItems = Object.values(servicesData).flatMap((service) => service.subServices);

export default function PricingPage() {
  const breadcrumbItems = [
    { name: "Pricing", item: "/pricing" },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(pricingFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferCatalogSchema(offerCatalogItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema(["h1", ".pricing-intro", ".faq-answer"])) }}
      />

      <section className="bg-gradient-to-b from-slate-50 via-white to-sky-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingHeroHeading />
        </div>
      </section>

      <LocalePricingContent />
    </>
  );
}
