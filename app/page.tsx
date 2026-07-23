import React from "react";
import { Hero } from "@/components/sections/hero";
import { TrustBadges } from "@/components/sections/trust-badges";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { OurProcess } from "@/components/sections/our-process";
import { BeforeAfter } from "@/components/sections/before-after";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Testimonials } from "@/components/sections/testimonials";
import { ServiceAreas } from "@/components/sections/service-areas";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <WhyChooseUs />
      <OurProcess />
      <BeforeAfter />
      <FeaturedProjects />
      <Testimonials />
      <ServiceAreas />
      <FAQAccordion />

      <section className="bg-gradient-to-r from-[#021F44] to-[#014156] py-20 border-t border-[#0781B2]/30 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0781B2]/10 blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-7">
          <span className="text-xs font-bold text-[#0781B2] bg-[#0781B2]/10 border border-[#0781B2]/30 px-4 py-1.5 rounded-full uppercase tracking-widest">
            Get Started Today
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to book your premium home service?
          </h2>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed font-medium">
            Contact us now via WhatsApp or call our friendly dispatch desk. Get an instant, fully itemized quote with zero upfront deposits and full workmanship warranties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22C55E] hover:bg-[#1eb050] text-white text-center font-extrabold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-white text-[#22C55E]" />
              <span>Book Via WhatsApp (Fast Response)</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-transparent hover:bg-white/5 border-2 border-white/20 hover:border-white/40 text-white text-center font-extrabold text-base px-8 py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Call Support {siteConfig.phoneDisplay}</span>
            </a>
          </div>

          <span className="text-xs text-slate-400 font-semibold mt-1">
            * We operate everyday from 9:00 AM to 6:00 PM including public holidays.
          </span>
        </div>
      </section>
    </>
  );
}
