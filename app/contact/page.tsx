import React from "react";
import type { Metadata } from "next";
import { MultiStepBookingForm } from "@/components/booking/multi-step-booking-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactHeroHeading } from "@/components/sections/contact-hero-heading";
import { LocaleContactInfo } from "@/components/sections/locale-contact-info";
import { siteConfig } from "@/config/site";
import { getBreadcrumbSchema, getSpeakableSchema } from "@/lib/seo";

const baseUrl = "https://www.klservisrumah.my";

export const metadata: Metadata = {
  title: "Book Professional Home Services in KL & Selangor — Contact Us",
  description:
    "WhatsApp KL Servis Rumah for painting, plumbing, plaster ceiling, waterproofing & handyman services. Instant fixed quotes, same-day slots, insured & background-verified crew.",
  keywords: [
    "contact KL Servis Rumah",
    "book home service KL",
    "home services WhatsApp Malaysia",
    "handyman booking KL",
    "plumber booking Selangor"
  ],
  alternates: {
    canonical: "/contact",
    languages: {
      "en-MY": "/contact",
      "ms-MY": "/ms/contact",
      "zh-MY": "/zh/contact",
      "x-default": "/contact"
    }
  },
  openGraph: {
    title: "Book KL Servis Rumah — Home Services KL & Selangor",
    description:
      "WhatsApp us for a fixed quote in 60 seconds. Painting, plumbing, ceiling, waterproofing, handyman & 20+ other home services across Klang Valley.",
    url: `${baseUrl}/contact`,
    siteName: "KL Servis Rumah",
    type: "website",
    locale: "en_MY"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book KL Servis Rumah — Home Services KL & Selangor",
    description:
      "WhatsApp us for a fixed quote in 60 seconds — painting, plumbing, waterproofing, handyman & more."
  }
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${baseUrl}/contact#contactpage`,
  url: `${baseUrl}/contact`,
  name: "Contact KL Servis Rumah",
  description:
    "Contact KL Servis Rumah for painting, plumbing, ceiling, waterproofing & handyman services across Kuala Lumpur & Selangor.",
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: { "@id": `${baseUrl}/#organization` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressStreet,
      addressLocality: siteConfig.addressCity,
      postalCode: siteConfig.addressPostal,
      addressRegion: siteConfig.addressState,
      addressCountry: siteConfig.addressCountry
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: ["Kuala Lumpur", "Selangor"],
        availableLanguage: ["English", "Malay", "Chinese"]
      }
    ]
  }
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Contact & Booking", item: "/contact" }
  ]);
  const speakableSchema = getSpeakableSchema(["h1", ".contact-body"]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <Breadcrumbs items={[{ label: "Contact & Booking", href: "/contact" }]} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-8 contact-body">
              <ContactHeroHeading />
              <hr className="border-slate-200/60" />
              <LocaleContactInfo />
            </div>

            <div className="lg:col-span-7">
              <MultiStepBookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
