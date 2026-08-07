"use client";

import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/use-translations";
import { ReviewCarousel, type Review } from "@/components/ui/review-carousel";

const reviews: Review[] = [
  { name: "Ahmad Razak", location: "Mont Kiara, KL", rating: 5, text: "Very professional team. They arrived on time, explained everything clearly before starting the painting work. The finish was flawless and the price was exactly as quoted. Highly recommend!", service: "House Painting", date: "2026-06-15" },
  { name: "Siti Aminah", location: "Subang Jaya, Selangor", rating: 5, text: "Called them for a leaking ceiling and they came the same day. Found the source quickly and fixed it without hacking my tiles. Very clean work and reasonable price.", service: "Waterproofing", date: "2026-06-10" },
  { name: "Lee Wei Ming", location: "Cheras, Kuala Lumpur", rating: 5, text: "Excellent handyman service. Mounted my 75-inch TV perfectly level and installed curtain tracks in 3 rooms. Very neat drilling with no mess left behind.", service: "Handyman", date: "2026-05-28" },
  { name: "Priya Sharma", location: "Petaling Jaya, Selangor", rating: 5, text: "The plumbing team fixed our burst pipe within 30 minutes of calling. Transparent pricing, no hidden fees, and they cleaned up everything after. Will definitely use again.", service: "Plumbing", date: "2026-05-20" }
];
export function GoogleReviews() {
  const t = useTranslations();
  return <section className="border-y border-slate-100 bg-white py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center"><span className="rounded-full bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">{t("home.testimonials.header")}</span><h2 className="text-3xl font-extrabold tracking-tight text-[#075985] sm:text-4xl">Google Reviews</h2><p className="text-base leading-relaxed text-[#475569]">Recent feedback from KL Servis Rumah customers.</p><a href={siteConfig.links.googleBusiness} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] transition hover:text-[#075985]">Read all reviews on Google <ExternalLink className="h-4 w-4" /></a></div><ReviewCarousel reviews={reviews} muted /><div className="mt-10 text-center"><div className="inline-flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4"><div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div><div className="text-left"><p className="text-sm font-extrabold text-[#075985]">{siteConfig.reviewRating} / 5.0</p><p className="text-xs font-semibold text-[#475569]">Based on {siteConfig.reviewCount}+ reviews</p></div></div></div></div></section>;
}
