"use client";

import React from "react";
import { useLang } from "@/context/lang-context";

type Stat = {
  value: string;
  label: string;
  trilingualMs?: string;
  trilingualZh?: string;
};

type StatsCounterProps = {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  variant?: "light" | "dark" | "gradient";
};

/**
 * StatsCounter — Klrenovator-style big-numbers section.
 * Renders 4 key metrics in a responsive grid.
 * When the locale changes, it swaps the stat label to match.
 */
export function StatsCounter({
  title = "Trusted across Klang Valley",
  subtitle,
  stats,
  variant = "light"
}: StatsCounterProps) {
  const { lang } = useLang();
  const isDark = variant === "dark" || variant === "gradient";

  return (
    <section
      className={`${
        variant === "gradient"
          ? "bg-gradient-to-br from-[#075985] via-[#0369A1] to-[#0369A1] text-white"
          : variant === "dark"
          ? "bg-[#075985] text-white"
          : "bg-white text-[#075985]"
      } rounded-3xl section-loose px-6 sm:px-10`}
    >
      {(title || subtitle) && (
        <div className="max-w-3xl mx-auto text-center mb-12">
          {title && (
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`mt-3 text-base leading-relaxed font-medium ${isDark ? "text-slate-200" : "text-[#475569]"}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {stats.map((stat, idx) => {
          // Choose the label based on current locale
          let displayLabel = stat.label;
          if (lang === "ms" && stat.trilingualMs) {
            displayLabel = stat.trilingualMs;
          } else if (lang === "zh" && stat.trilingualZh) {
            displayLabel = stat.trilingualZh;
          }
          return (
            <div key={idx} className="text-center">
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight ${isDark ? "text-white" : "text-[#075985]"}`}>
                {stat.value}
              </div>
              <div className={`mt-2 text-sm sm:text-base font-bold ${isDark ? "text-[#7DD3FC]" : "text-[#475569]"}`}>
                {displayLabel}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
