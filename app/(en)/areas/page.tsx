import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { ServiceAreas } from "@/components/sections/service-areas";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, MessageSquare } from "lucide-react";

export const metadata = buildMetadata({
  title: "Service Coverage Areas in KL & Selangor",
  description:
    "See every Klang Valley area we cover — Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Klang and more. Same-day home service available.",
  path: "/areas",
  keywords: [
    "home service areas KL",
    "handyman coverage Selangor",
    "Klang Valley home services"
  ]
});

export default function AreasPage() {

  return (
    <>
      {/* Hero Section — matches klrenovator.com areas page */}
      <section className="bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              Service Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight">
              Home Service Areas — KL & Selangor
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
              KL Servis Rumah dispatches trained tradesmen across all of Kuala Lumpur and Selangor. Same-day service available. Click your area to see pricing, services and availability.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href={getWhatsAppLink({ location: "KL & Selangor" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp to Book</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
            <div className="flex items-center gap-6 mt-4 text-sm text-[#475569] font-semibold">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0EA5E9]" />
                40+ Areas
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-500" />
                Same-Day Available
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-500">★</span>
                4.9 Google Rating
              </span>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Coverage Areas", href: "/areas" }]} />

      <ServiceAreas />

      <WhyChooseUs />
    </>
  );
}
