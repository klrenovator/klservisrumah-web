import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import type { Metadata } from "next";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { FaqHeroHeading } from "@/components/sections/faq-hero-heading";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getFAQSchema, getBreadcrumbSchema, getSpeakableSchema } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Home Services in KL & Selangor",
  description:
    "Answers on pricing, warranty, insurance, coverage areas, same-day booking and job preparation for painting, plumbing, ceiling and handyman work.",
  path: "/faq",
  keywords: [
    "home services FAQ Malaysia",
    "handyman questions KL",
    "painting cost FAQ Selangor"
  ]
});

export default function FAQPage() {
  const faqs = [
    {
      q: "What is your starting price for your home services?",
      a: "Our minor handyman jobs start from RM 80, basic plumbing repairs from RM 120, plaster ceiling repair from RM 180, and single room painting from RM 450. Every quote we issue is fixed and itemized before any actual work is commenced, so there are absolutely no hidden fees."
    },
    {
      q: "Are you an established local company in Malaysia?",
      a: "Yes. KL Servis Rumah is operated by an established local company with fully insured operations, transparent quotations, official invoices, and background-verified tradesmen."
    },
    {
      q: "Do you offer warranties on your services?",
      a: "Absolutely! We offer up to 90 days written warranties on plaster ceilings and structural partitions, up to 5-year guarantees on full chemical waterproofing membrane works, and a 30-day warranty on plumbing joint seals and general handyman installations."
    },
    {
      q: "Can I get a same-day technician visit in KL or Selangor?",
      a: "Yes! For urgent bookings, such as active plumbing pipe leakage or sudden TV mounting requests, please contact us early (before 11:00 AM) and we will dispatch the nearest available technician in your suburb for a same-day slot."
    },
    {
      q: "Do you supply the paint, pipes, and anchors, or do I need to?",
      a: "We supply all standard professional materials: premium Nippon/Dulux paints, SIRIM PVC/PPR plumbing pipes, rust-proof plasterboards, steel wall anchors, and framing. If you have purchased specific aesthetic finishes (like custom luxury lights, taps, or shelves), we are happy to install those with precision."
    },
    {
      q: "How do I book a service?",
      a: "The fastest way is via WhatsApp at " + siteConfig.phoneDisplay + ". Tell us your service type, area, and the issue. We'll confirm availability and pricing within 30 minutes."
    },
    {
      q: "What areas does KL Servis Rumah cover?",
      a: "We cover the entire Klang Valley — all areas of Kuala Lumpur and Selangor including Petaling Jaya, Ampang, Batu Caves, Cheras, Subang Jaya, Puchong, Shah Alam, Damansara, Klang, Kajang, Bangsar, Mont Kiara, Setapak, Sentul, Selayang, Putrajaya, and Cyberjaya."
    },
    {
      q: "Are your tradesmen background-checked?",
      a: "Yes. All our tradesmen are local, trained, and screened so you can trust them in your home. We verify their identity, work history, and conduct background checks before hiring."
    }
  ];

  const schema = getFAQSchema(faqs);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([{ name: "FAQ Helpdesk", item: "/faq" }])
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getSpeakableSchema(["h1", ".faq-intro", ".faq-answer"])
          )
        }}
      />

      <FAQAccordion />
    </>
  );
}
