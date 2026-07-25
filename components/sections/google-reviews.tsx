"use client";

import React from "react";
import { Star, Quote, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/use-translations";

const reviews = [
  {
    name: "Ahmad Razak",
    location: "Mont Kiara, KL",
    rating: 5,
    text: "Very professional team. They arrived on time, explained everything clearly before starting the painting work. The finish was flawless and the price was exactly as quoted. Highly recommend!",
    service: "House Painting",
    date: "2026-06-15"
  },
  {
    name: "Siti Aminah",
    location: "Subang Jaya, Selangor",
    rating: 5,
    text: "Called them for a leaking ceiling and they came the same day. Found the source quickly and fixed it without hacking my tiles. Very clean work and reasonable price.",
    service: "Waterproofing",
    date: "2026-06-10"
  },
  {
    name: "Lee Wei Ming",
    location: "Cheras, Kuala Lumpur",
    rating: 5,
    text: "Excellent handyman service. Mounted my 75-inch TV perfectly level and installed curtain tracks in 3 rooms. Very neat drilling with no mess left behind.",
    service: "Handyman",
    date: "2026-05-28"
  },
  {
    name: "Priya Sharma",
    location: "Petaling Jaya, Selangor",
    rating: 5,
    text: "The plumbing team fixed our burst pipe within 30 minutes of calling. Transparent pricing, no hidden fees, and they cleaned up everything after. Will definitely use again.",
    service: "Plumbing",
    date: "2026-05-20"
  }
];

export function GoogleReviews() {
  const t = useTranslations();

  return (
    <section className="bg-white border-y border-slate-100 py-20 sm:py-24">
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
          <a
            href={siteConfig.links.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0EA5E9] hover:text-[#075985] transition-colors"
          >
            <span>Read all reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between relative hover:shadow-[0_15px_40px_rgba(2,31,68,0.02)] transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-200 pointer-events-none" />
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 rating`}>
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
              <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-[#075985]">{review.name}</span>
                  <span className="text-[11px] text-[#475569] font-semibold">📍 {review.location}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-50 rounded-2xl px-6 py-4 border border-slate-100">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-extrabold text-[#075985]">{siteConfig.reviewRating} / 5.0</span>
              <span className="text-xs text-[#475569] font-semibold">Based on {siteConfig.reviewCount}+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
