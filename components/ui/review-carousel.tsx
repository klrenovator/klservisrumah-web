"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export type Review = { name: string; location: string; text: string; service: string; date?: string; rating?: number };

/**
 * One-card, accessible carousel shared by Client Feedback and Google Reviews.
 *
 * Auto-rotation was intentionally removed because changing cards during the
 * initial page session was contributing avoidable CLS on long Lighthouse runs.
 * The controls remain fully manual and keyboard accessible.
 */
export function ReviewCarousel({ reviews, muted = false }: { reviews: Review[]; muted?: boolean }) {
  const [active, setActive] = useState(0);
  const t = useTranslations();
  const count = reviews.length;
  const move = (direction: number) => setActive((current) => (current + direction + count) % count);
  const review = reviews[active];

  return (
    <div className="mx-auto max-w-3xl" aria-roledescription="carousel" aria-label={t("reviewsCarousel.ariaLabel")}>
      <div className={`relative min-h-[285px] overflow-hidden rounded-3xl border border-slate-100 p-7 shadow-[0_12px_35px_rgba(2,31,68,0.05)] sm:min-h-[250px] sm:p-9 ${muted ? "bg-slate-50" : "bg-white"}`}>
        <Quote className="pointer-events-none absolute right-7 top-6 h-14 w-14 text-slate-200/70" />
        <div className="relative flex h-full flex-col justify-between gap-7" key={active}>
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-0.5" role="img" aria-label={t("reviewsCarousel.stars", { rating: review.rating ?? 5 })}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="rounded-md bg-sky-50 px-2.5 py-1 text-[10px] font-bold text-[#0369A1]">{review.service}</span>
            </div>
            <p className="mt-6 text-sm font-semibold italic leading-relaxed text-[#475569] sm:text-base">&ldquo;{review.text}&rdquo;</p>
          </div>
          <div className="flex items-end justify-between border-t border-slate-100 pt-5">
            <div>
              <p className="text-sm font-bold text-[#075985]">{review.name}</p>
              <p className="mt-1 text-[11px] font-semibold text-[#475569]">📍 {review.location}</p>
            </div>
            {review.date && <span className="text-[10px] font-semibold text-slate-400">{review.date}</span>}
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-3 sm:gap-4">
        <button type="button" onClick={() => move(-1)} aria-label={t("reviewsCarousel.prev")} className="rounded-full border border-slate-200 p-2.5 text-[#075985] transition hover:border-sky-300 hover:bg-sky-50">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={t("reviewsCarousel.showReview", { index: index + 1 })}
              aria-current={active === index}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${active === index ? "bg-[#075985] text-white" : "bg-slate-100 text-slate-500 hover:bg-sky-100 hover:text-[#075985]"}`}
            >
              <span className="sr-only">{t("reviewsCarousel.showReview", { index: index + 1 })}</span>
              <span aria-hidden="true" className={`block rounded-full ${active === index ? "h-2.5 w-2.5 bg-white" : "h-2.5 w-2.5 bg-current"}`} />
            </button>
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label={t("reviewsCarousel.next")} className="rounded-full border border-slate-200 p-2.5 text-[#075985] transition hover:border-sky-300 hover:bg-sky-50">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
