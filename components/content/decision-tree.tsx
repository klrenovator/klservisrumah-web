"use client";

import React from "react";
import { Check, ArrowRight, Sparkles, AlertCircle } from "lucide-react";

type DecisionLevel = "recommended" | "lighter" | "urgent";

type DecisionOption = {
  level: DecisionLevel;
  title: string;
  description: string;
  compareService?: string;
  compareAction?: string;
};

type DecisionTreeProps = {
  title?: string;
  options: DecisionOption[];
  /** Optional override for the three level tag labels (per locale) */
  tagLabels?: Partial<Record<DecisionLevel, string>>;
};

/**
 * Default English tag labels for the three decision levels.
 * Callers can override by passing `tagLabels` (e.g. from a translation dictionary).
 */
const defaultTagLabels: Record<DecisionLevel, string> = {
  recommended: "Recommended",
  lighter: "Lighter option",
  urgent: "Escalate first"
};

const iconForLevel: Record<DecisionLevel, React.ReactNode> = {
  recommended: <Sparkles className="w-4 h-4" />,
  lighter: <Check className="w-4 h-4" />,
  urgent: <AlertCircle className="w-4 h-4" />
};

const classNameForLevel: Record<DecisionLevel, string> = {
  recommended: "decision-card decision-card-recommended",
  lighter: "decision-card decision-card-lighter",
  urgent: "decision-card decision-card-urgent"
};

const tagColorForLevel: Record<DecisionLevel, string> = {
  recommended: "bg-[#0EA5E9] text-white",
  lighter: "bg-[#BAE6FD] text-[#075985]",
  urgent: "bg-rose-100 text-rose-700"
};

/**
 * DecisionTree — Klrenovator-style "should I book this?" visual flow.
 * Shows three tiers: recommended, lighter, urgent.
 *
 * All visible text is passed via props so callers can supply translations.
 */
export function DecisionTree({ title, options, tagLabels }: DecisionTreeProps) {
  // Merge caller overrides with defaults
  const labels = { ...defaultTagLabels, ...tagLabels };

  return (
    <section className="space-y-5">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option, idx) => {
          const tag = labels[option.level];
          return (
            <div key={idx} className={classNameForLevel[option.level]}>
              <div className="flex items-center justify-between gap-2">
                <span className={`trust-pill ${tagColorForLevel[option.level]}`}>
                  {iconForLevel[option.level]}
                  <span>{tag}</span>
                </span>
                <span className="text-xs font-extrabold text-slate-400">0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-extrabold text-[#075985] tracking-tight leading-snug mt-3">
                {option.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed font-medium">
                {option.description}
              </p>
              {option.compareService && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#475569]">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  <span>{option.compareAction} <b className="text-[#075985]">{option.compareService}</b></span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
