"use client";

import React from "react";
import { useTranslations } from "@/hooks/use-translations";
import { ReviewCarousel } from "@/components/ui/review-carousel";

export function Testimonials() {
  const t = useTranslations();
  const feedback = [1, 2, 3, 4].map(n => ({ name: t(`home.testimonials.items.${n}.name`), location: t(`home.testimonials.items.${n}.location`), text: t(`home.testimonials.items.${n}.text`), service: t(`home.testimonials.items.${n}.service`) }));
  return <section className="border-y border-slate-100 bg-slate-50 py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center"><span className="rounded-full bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">{t("home.testimonials.header")}</span><h2 className="text-3xl font-extrabold tracking-tight text-[#075985] sm:text-4xl">{t("home.testimonials.heading")}</h2><p className="text-base leading-relaxed text-[#475569]">{t("home.testimonials.subheading")}</p></div><ReviewCarousel reviews={feedback} /></div>
  </section>;
}
