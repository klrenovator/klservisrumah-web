"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export function Testimonials() {
  const t = useTranslations();

  const feedbackThemes = [1, 2, 3, 4].map((n) => ({
    name: t(`home.testimonials.items.${n}.name`),
    location: t(`home.testimonials.items.${n}.location`),
    text: t(`home.testimonials.items.${n}.text`),
    service: t(`home.testimonials.items.${n}.service`)
  }));

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            {t("home.testimonials.header")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
            {t("home.testimonials.heading")}
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            {t("home.testimonials.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedbackThemes.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-3xs flex flex-col justify-between relative hover:shadow-[0_15px_40px_rgba(2,31,68,0.02)] transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100/50 pointer-events-none" />
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-0.5" aria-label="4.9 out of 5 rating context">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-2.5 py-0.5 rounded-md">
                    {review.service}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-semibold italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-50 flex flex-col gap-1">
                <span className="text-sm font-bold text-[#075985]">{review.name}</span>
                <span className="text-[11px] text-[#475569] font-semibold">📍 {review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
