"use client";

import React from "react";
import { Check, X, BadgeCheck } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

const comparisonRows = [
  {
    feature: "Price Display",
    klServis: "Full price list published online — you see starting prices before you even call.",
    competitor: "No prices online. \"Call for quote\" — price depends on who answers the phone.",
    klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
    competitorIcon: <X className="w-5 h-5 text-rose-500" />
  },
  {
    feature: "Quote Before Work",
    klServis: "Price confirmed in writing before any work begins. No surprises.",
    competitor: "Quote given verbally, often changes after \"inspection\" with add-on charges.",
    klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
    competitorIcon: <X className="w-5 h-5 text-rose-500" />
  },
  {
    feature: "Hidden Fees",
    klServis: "Zero hidden fees. Materials, transport & labour included in the starting price.",
    competitor: "Transport fee, service charge, weekend surcharge — all added after arrival.",
    klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
    competitorIcon: <X className="w-5 h-5 text-rose-500" />
  },
  {
    feature: "Workmanship Warranty",
    klServis: "Up to 90 days written warranty on handyman work, longer on painting & waterproofing.",
    competitor: "Most offer no warranty. If they do, it's verbal only — no written guarantee.",
    klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
    competitorIcon: <X className="w-5 h-5 text-rose-500" />
  },
  {
    feature: "Business Registration",
    klServis: "SSM registered. Legitimate Malaysian business with a track record.",
    competitor: "Many are unregistered freelancers operating from a personal phone number.",
    klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
    competitorIcon: <X className="w-5 h-5 text-rose-500" />
  },
  {
    feature: "Parts & Materials",
    klServis: "Genuine SIRIM-certified parts and premium materials. Quote before replacement.",
    competitor: "Unknown part sources. Some use recycled or counterfeit components.",
    klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
    competitorIcon: <X className="w-5 h-5 text-rose-500" />
  },
  {
    feature: "Verified Reviews",
    klServis: "{reviewCount}+ Google Reviews with real job photos. Read what actual customers say.",
    competitor: "Few or no reviews — or fake reviews from inactive accounts.",
    klServisIcon: <Check className="w-5 h-5 text-emerald-500" />,
    competitorIcon: <X className="w-5 h-5 text-rose-500" />
  }
];

export function PricingComparison() {
  const t = useTranslations();

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
            KL Servis Rumah vs Typical Competitors
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            We publish real prices. Others make you call first. Here&apos;s what that means for your wallet.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              <BadgeCheck className="w-3.5 h-3.5" /> KL Servis Rumah
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100">
              <X className="w-3.5 h-3.5" /> Typical Competitors
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(2,31,68,0.02)] overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 bg-slate-50 px-6 py-4 border-b border-slate-100">
            <div className="text-xs font-bold text-[#475569] uppercase tracking-wider">Feature</div>
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
              <BadgeCheck className="w-3.5 h-3.5" /> KL Servis Rumah
            </div>
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider flex items-center gap-1.5">
              <X className="w-3.5 h-3.5" /> Typical Competitors
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-3 gap-4 px-6 py-5 ${idx !== comparisonRows.length - 1 ? "border-b border-slate-50" : ""}`}
            >
              <div className="text-sm font-bold text-[#075985] flex items-center">{row.feature}</div>
              <div className="text-xs text-[#475569] leading-relaxed font-medium flex items-start gap-2">
                <span className="shrink-0 mt-0.5">{row.klServisIcon}</span>
                <span>{row.klServis}</span>
              </div>
              <div className="text-xs text-[#475569] leading-relaxed font-medium flex items-start gap-2">
                <span className="shrink-0 mt-0.5">{row.competitorIcon}</span>
                <span>{row.competitor}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#475569] font-medium">
            SSM Registered · Fully Insured · {t("home.trustBadges.items.warranty")}
          </p>
        </div>
      </div>
    </section>
  );
}
