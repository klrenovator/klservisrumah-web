import React from "react";

type TimelineStep = {
  step: string;
  title: string;
  desc: string;
};

type ProcessTimelineProps = {
  title?: string;
  subtitle?: string;
  steps: TimelineStep[];
};

/**
 * ProcessTimeline — Klrenovator-style vertical numbered timeline.
 * Uses the .timeline-step utility classes from globals.css.
 */
export function ProcessTimeline({
  title = "Service scope · Clear steps",
  subtitle,
  steps
}: ProcessTimelineProps) {
  return (
    <section className="space-y-5">
      <div className="max-w-2xl">
        <span className="eyebrow">How we work · Cara kami · 工作流程</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
            {subtitle}
          </p>
        )}
      </div>

      <ol className="mt-6">
        {steps.map((step) => (
          <li key={step.step} className="timeline-step">
            <div className="timeline-number">{step.step}</div>
            <div className="flex-1 pt-1">
              <h3 className="text-lg font-extrabold text-[#075985] tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium mt-1">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
