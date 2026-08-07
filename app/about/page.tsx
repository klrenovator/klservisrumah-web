import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AboutContent } from "@/components/sections/about-content";
import { AboutHeroHeading } from "@/components/sections/about-hero-heading";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { getSpeakableSchema } from "@/lib/seo";
import { Phone, MessageSquare, Users, Award, Clock } from "lucide-react";

const baseUrl = "https://www.klservisrumah.my";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Trusted Home Services KL & Selangor",
  description:
    "KL Servis Rumah is a trusted painting, plumbing, waterproofing and handyman specialist across Kuala Lumpur and Selangor, with 1,200+ completed projects.",
  path: "/about",
  keywords: [
    "about KL Servis Rumah",
    "home services company Malaysia",
    "trusted contractor KL",
    "insured handyman Selangor",
    "background-verified tradesmen KL"
  ]
});

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${baseUrl}/about#aboutpage`,
  url: `${baseUrl}/about`,
  name: "About KL Servis Rumah",
  description:
    "About KL Servis Rumah — trusted home services company in Kuala Lumpur & Selangor.",
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: { "@id": `${baseUrl}/#organization` },
  mainEntity: { "@id": `${baseUrl}/#organization` }
};

export default function AboutPage() {
  const speakableSchema = getSpeakableSchema(["h1", ".about-lead", ".about-body"]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      {/* Hero Section — matches klrenovator.com about page */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutHeroHeading />
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-slate-100">
              <Users className="w-6 h-6 text-[#0369A1]" />
              <span className="text-2xl font-extrabold text-[#075985]">1,200+</span>
              <span className="text-xs text-[#475569] font-semibold">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-slate-100">
              <Award className="w-6 h-6 text-amber-500" />
              <span className="text-2xl font-extrabold text-[#075985]">4.9★</span>
              <span className="text-xs text-[#475569] font-semibold">Google Rating</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-slate-100">
              <Clock className="w-6 h-6 text-emerald-500" />
              <span className="text-2xl font-extrabold text-[#075985]">30 min</span>
              <span className="text-xs text-[#475569] font-semibold">Avg Response</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-slate-100">
              {/* Derived from the same registry as every other count on the
                  site (was a stale hardcoded "13+"). */}
              <span className="text-2xl font-extrabold text-[#075985]">{`${Object.keys(servicesData).length}+`}</span>
              <span className="text-xs text-[#475569] font-semibold">Home Services</span>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <AboutContent />
      </section>
    </>
  );
}
