import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import type { Metadata } from "next";
import { MultiStepBookingForm } from "@/components/booking/multi-step-booking-form";
import { QuickQuoteForm } from "@/components/sections/quick-quote-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactHeroHeading } from "@/components/sections/contact-hero-heading";
import { LocaleContactInfo } from "@/components/sections/locale-contact-info";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, ChevronDown } from "lucide-react";

const baseUrl = "https://www.klservisrumah.my";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Booking — Home Services KL & Selangor",
  description:
    "WhatsApp KL Servis Rumah for painting, plumbing, ceiling, waterproofing and handyman work. Fixed quotes, same-day slots, insured and verified crew.",
  path: "/contact",
  keywords: [
    "contact KL Servis Rumah",
    "book home service KL",
    "home services WhatsApp Malaysia",
    "handyman booking KL",
    "plumber booking Selangor"
  ]
});

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
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

            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Audit P4-07 — static SSR inquiry form. Renders a real
                  `<form>` in the static HTML (indexable, JS-independent) and
                  submits via a plain GET to /api/inquiry, which redirects to
                  WhatsApp with the request pre-filled. */}
              <section
                aria-labelledby="quick-quote-heading"
                className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="mb-6 flex flex-col gap-1.5">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E0F2FE] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0284C7]">
                    <MessageCircle className="h-3.5 w-3.5" />
                    {siteConfig.shortName}
                  </span>
                  <h2
                    id="quick-quote-heading"
                    className="text-xl sm:text-2xl font-extrabold text-[#075985] tracking-tight"
                  >
                    Quick quote — opens WhatsApp
                  </h2>
                  <p className="text-sm font-semibold text-[#475569]">
                    Works without an app or account: pick a service and your
                    area, add a short note, and the message is ready to send.
                  </p>
                </div>
                <QuickQuoteForm />
              </section>

              <div className="flex items-center gap-3" aria-hidden="true">
                <span className="h-px flex-1 bg-slate-200" />
                <ChevronDown className="h-4 w-4 text-slate-400" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Detailed booking
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <MultiStepBookingForm />

              <a
                href={getWhatsAppLink({ lang: "en" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-[#25D366]/5 px-5 py-3 text-sm font-extrabold text-[#075E54] transition hover:bg-[#25D366]/10"
              >
                <MessageCircle className="h-4 w-4" />
                Skip the form — chat on WhatsApp now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
