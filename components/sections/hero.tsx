"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { Star, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ReviewBadge } from "@/components/ui/review-badge";

export function Hero() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = selectedService ? servicesData[selectedService]?.title : "Home Service";
    const waLink = getWhatsAppLink({ service: serviceName, location: selectedArea });
    window.open(waLink, "_blank");
  };

  return (
    <section className="relative bg-gradient-to-b from-[#F2F6FC] via-white to-white py-16 md:py-24 overflow-hidden border-b border-slate-50">
      {/* Decorative subtle background highlights */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#0781B2]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#D2DEE7]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Trust rating badge */}
            <div className="animate-fade-in">
              <ReviewBadge />
            </div>

            {/* Main Heading H1 - Target-optimized for LLMO & SXO */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#021F44] tracking-tight leading-tight">
              Premium Home Services <br />
              <span className="text-[#0781B2]">Done Right</span> in KL & Selangor
            </h1>

            {/* Semantic Subtext Body Copy */}
            <p className="text-base sm:text-lg text-[#4A607C] leading-relaxed max-w-2xl">
              Professional **House Painting, Plaster Ceiling, Leak Repair, Waterproofing, and Handyman** installations. Fully backed by **Multicore Dynamics Resources** (SSM-registered) with up to 90 days craftsmanship warranties and 100% transparent quotes before work begins.
            </p>

            {/* Fast Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-2">
              <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#0781B2]" />
                <span className="text-xs sm:text-sm font-bold text-[#021F44]">Upfront Fixed Pricing</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#0781B2]" />
                <span className="text-xs sm:text-sm font-bold text-[#021F44]">Fully Insured & SSM</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-2xs">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="text-xs sm:text-sm font-bold text-[#021F44]">Expert Local Crew</span>
              </div>
            </div>

            {/* WhatsApp + Phone Click Action Box */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
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
                className="bg-white hover:bg-slate-50 border-2 border-[#021F44]/15 text-[#021F44] text-center font-extrabold text-base px-8 py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Hero Right Conversion Box Column */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(2,31,68,0.06)] border border-slate-100 flex flex-col gap-6">
              <div className="flex flex-col gap-1.5 border-b border-slate-100 pb-5">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#021F44] tracking-tight">Instant Service Dispatch</h2>
                <p className="text-xs sm:text-sm text-[#4A607C] font-medium">Select your requirements to see instant slots availability.</p>
              </div>

              <form onSubmit={handleBook} className="flex flex-col gap-5">
                
                {/* Service Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#021F44] uppercase tracking-wider">What service do you need?</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    className="w-full bg-slate-50 hover:bg-slate-100/50 text-[#021F44] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0781B2] transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-[#4A607C]">Select service category...</option>
                    {Object.values(servicesData).map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title} (From {service.startPrice})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Area Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#021F44] uppercase tracking-wider">Your Location (KL & Selangor)</label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    required
                    className="w-full bg-slate-50 hover:bg-slate-100/50 text-[#021F44] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0781B2] transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-[#4A607C]">Select your suburb...</option>
                    {siteConfig.areas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Booking button */}
                <button
                  type="submit"
                  className="w-full bg-[#0781B2] hover:bg-[#021F44] text-white font-extrabold text-base py-4 rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 mt-2"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

              </form>

              {/* Secure safety seal */}
              <div className="flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-[#4A607C] font-semibold">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                <span>No upfront deposits · Fully payment after job is done</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
