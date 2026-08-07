"use client";

import React from "react";
import { ClipboardCheck, Sparkles, Hammer, ShieldAlert, BadgeCheck } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

const stepIcons = [
  <ClipboardCheck key="1" className="w-6 h-6 text-[#0EA5E9]" />,
  <ShieldAlert key="2" className="w-6 h-6 text-[#0EA5E9]" />,
  <Sparkles key="3" className="w-6 h-6 text-[#0EA5E9]" />,
  <Hammer key="4" className="w-6 h-6 text-[#0EA5E9]" />,
  <BadgeCheck key="5" className="w-6 h-6 text-[#0EA5E9]" />
];

export function OurProcess() {
  const t = useTranslations();

  const steps = [1, 2, 3, 4, 5].map((n) => ({
    num: `0${n}`,
    icon: stepIcons[n - 1],
    title: t(`home.process.steps.${n}.title`),
    desc: t(`home.process.steps.${n}.desc`)
  }));

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            {t("home.process.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
            {t("home.process.title")}
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            {t("home.process.subtitle")}
          </p>
        </div>

        {/* Steps mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">

          {/* Decorative connector line on desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10" />

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm group-hover:border-[#0EA5E9] group-hover:shadow-md transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                <span className="absolute -top-4 -right-4 text-3xl font-extrabold text-slate-100 group-hover:text-[#0EA5E9]/10 transition-colors pointer-events-none select-none">
                  {step.num}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#075985] tracking-tight mb-2.5">
                {step.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed font-semibold">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
