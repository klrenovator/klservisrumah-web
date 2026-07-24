"use client";

import React from "react";
import { ShieldCheck, Sparkles, Flame, Clock, Heart, Headphones } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export function WhyChooseUs() {
  const t = useTranslations();

  const points = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0EA5E9]" />,
      titleKey: "home.whyChooseUs.items.verified.title",
      descKey: "home.whyChooseUs.items.verified.desc"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#0EA5E9]" />,
      titleKey: "home.whyChooseUs.items.transparent.title",
      descKey: "home.whyChooseUs.items.transparent.desc"
    },
    {
      icon: <Flame className="w-6 h-6 text-[#0EA5E9]" />,
      titleKey: "home.whyChooseUs.items.warranty.title",
      descKey: "home.whyChooseUs.items.warranty.desc"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0EA5E9]" />,
      titleKey: "home.whyChooseUs.items.fast.title",
      descKey: "home.whyChooseUs.items.fast.desc"
    },
    {
      icon: <Heart className="w-6 h-6 text-[#0EA5E9]" />,
      titleKey: "home.trustBadges.items.verified",
      descKey: "home.trustBadges.heading"
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#0EA5E9]" />,
      titleKey: "home.trustBadges.items.warranty",
      descKey: "home.trustBadges.items.transparent"
    }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            {t("home.whyChooseUs.heading")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
            {t("home.whyChooseUs.heading")}
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Following the elite visual standards, strict engineering practices, and high-quality guarantees of the KL Renovator brand family.
          </p>
        </div>

        {/* Features list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/50 shadow-[0_4px_20px_rgba(2,31,68,0.01)] hover:shadow-[0_15px_40px_rgba(2,31,68,0.03)] hover:border-[#0EA5E9]/20 transition-all duration-300"
            >
              <div className="p-3 bg-[#E0F2FE]/25 rounded-2xl w-fit mb-6">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-[#075985] tracking-tight mb-2.5">
                {t(point.titleKey)}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                {t(point.descKey)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
