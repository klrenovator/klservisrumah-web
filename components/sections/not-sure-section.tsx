"use client";

import React from "react";
import { MessageSquare, Phone, Camera } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/use-translations";

export function NotSureSection() {
  // Translations wiring reserved for future locale-specific overrides.
  const _t = useTranslations();
  void _t;

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-[0_20px_50px_rgba(2,31,68,0.05)] text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="p-4 bg-[#E0F2FE]/30 rounded-2xl">
              <Camera className="w-10 h-10 text-[#0369A1]" />
            </div>

            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-bold text-[#0369A1] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
                Not sure what you need?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
                Send us a photo on WhatsApp
              </h2>
              <p className="text-base text-[#475569] leading-relaxed max-w-2xl">
                Send us a photo of your issue on WhatsApp — we&apos;ll give you an accurate quote within 30 minutes and recommend the right service for your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
              <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Camera className="w-6 h-6 text-[#0369A1]" />
                <span className="text-xs font-bold text-[#075985]">1. Send Photos</span>
                <span className="text-[10px] text-[#475569] text-center">Snap a photo of the problem area</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <MessageSquare className="w-6 h-6 text-[#0369A1]" />
                <span className="text-xs font-bold text-[#075985]">2. Get Quote</span>
                <span className="text-[10px] text-[#475569] text-center">Receive accurate quote within 30 min</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Phone className="w-6 h-6 text-[#0369A1]" />
                <span className="text-xs font-bold text-[#075985]">3. Book Slot</span>
                <span className="text-[10px] text-[#475569] text-center">Confirm your preferred time slot</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white font-extrabold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get Free Quote on WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-50 border-2 border-slate-200 hover:border-[#0EA5E9] text-[#075985] font-extrabold text-base px-8 py-4 rounded-2xl transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
