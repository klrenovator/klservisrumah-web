import React from "react";
import { Check, ArrowRight, Sparkles, AlertCircle } from "lucide-react";

type DecisionOption = {
  level: "recommended" | "lighter" | "urgent";
  title: string;
  description: string;
  compareService?: string;
  compareAction?: string;
};

type DecisionTreeProps = {
  title?: string;
  options: DecisionOption[];
};

const levelConfig: Record<DecisionOption["level"], { icon: React.ReactNode; className: string; tag: string; tagColor: string }> = {
  recommended: {
    icon: <Sparkles className="w-4 h-4" />,
    className: "decision-card decision-card-recommended",
    tag: "Recommended",
    tagColor: "bg-[#0EA5E9] text-white"
  },
  lighter: {
    icon: <Check className="w-4 h-4" />,
    className: "decision-card decision-card-lighter",
    tag: "Lighter option",
    tagColor: "bg-[#BAE6FD] text-[#075985]"
  },
  urgent: {
    icon: <AlertCircle className="w-4 h-4" />,
    className: "decision-card decision-card-urgent",
    tag: "Escalate first",
    tagColor: "bg-rose-100 text-rose-700"
  }
};

/**
 * DecisionTree — Klrenovator-style "should I book this?" visual flow.
 * Shows three tiers: recommended, lighter, urgent.
 */
export function DecisionTree({ title = "Should you book this service?", options }: DecisionTreeProps) {
  return (
    <section className="space-y-5">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option, idx) => {
          const cfg = levelConfig[option.level];
          return (
            <div key={idx} className={cfg.className}>
              <div className="flex items-center justify-between gap-2">
                <span className={`trust-pill ${cfg.tagColor}`}>
                  {cfg.icon}
                  <span>{cfg.tag}</span>
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
