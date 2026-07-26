"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Info, RotateCcw, Sliders, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { ESTIMATE_DISCLAIMER, formatMYR } from "@/lib/estimator/format";
import type { Answers, EstimatorSpec, Step } from "@/lib/estimator/types";
import {
  blockingFields,
  stepVisible,
  summariseAnswers,
  visibleFields as fieldsForStep
} from "@/lib/estimator/wizard-logic";
import { FieldControl } from "./fields";
import { EstimateResultPanel } from "./estimate-result";

/**
 * Single-page estimator.
 *
 * Replaces the previous multi-step "Next / Next / Next" wizard. Every question
 * lives on one screen, the price updates on every tap, and the full result
 * panel sits directly underneath — so a customer never has to guess how many
 * screens are left before they see a number.
 *
 * Questions that only fine-tune the figure (paint grade, access height,
 * urgency, property age…) are marked `advanced: true` on the spec and are
 * collapsed behind one optional toggle. Every one of them already has a
 * sensible default, so an untouched advanced section still yields a real,
 * publishable estimate.
 */
export function EstimatorForm({ spec }: { spec: EstimatorSpec }) {
  const [answers, setAnswers] = useState<Answers>(spec.defaults);
  const [touched, setTouched] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const steps = useMemo(() => spec.steps.filter((step) => stepVisible(step, answers)), [spec.steps, answers]);
  const mainSteps = useMemo(() => steps.filter((step) => !step.advanced), [steps]);
  const advancedSteps = useMemo(() => steps.filter((step) => step.advanced), [steps]);

  const result = useMemo(() => spec.compute(answers), [spec, answers]);
  const summaryLines = useMemo(() => summariseAnswers(spec, answers), [spec, answers]);

  /** Questions that still have to be answered before we show a firm number. */
  const outstanding = useMemo(
    () => steps.flatMap((step) => blockingFields(step, answers).map((field) => ({ step, field }))),
    [steps, answers]
  );
  const ready = outstanding.length === 0;

  const update = useCallback((id: string, value: Answers[string]) => {
    setTouched(true);
    setAnswers((current) => ({ ...current, [id]: value }));
  }, []);

  const reset = () => {
    setAnswers(spec.defaults);
    setTouched(false);
    setShowAdvanced(false);
    setRevealed(false);
    scrollTo(topRef.current);
  };

  const scrollTo = (node: HTMLElement | null) => {
    if (!node) return;
    const top = node.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  /** Jump the customer to the first thing still blocking a firm estimate. */
  const goToOutstanding = () => {
    const first = outstanding[0];
    if (!first) return;
    if (first.step.advanced) setShowAdvanced(true);
    requestAnimationFrame(() => scrollTo(document.getElementById(`question-${first.step.id}`)));
  };

  const showResult = () => {
    if (!ready) {
      goToOutstanding();
      return;
    }
    setRevealed(true);
    trackEvent({
      action: "estimator_complete",
      category: "engagement",
      label: spec.slug,
      value: result.price
    });
    requestAnimationFrame(() => scrollTo(resultRef.current));
  };

  // The moment every required question is answered the result is real, so stop
  // hiding it behind a button press.
  useEffect(() => {
    if (ready && touched) setRevealed(true);
  }, [ready, touched]);

  const answeredCount = steps.length - new Set(outstanding.map((item) => item.step.id)).size;

  return (
    <div ref={topRef} className="scroll-mt-24">
      {/* ── Live price, pinned while the customer answers ─────────────── */}
      <div className="sticky top-20 z-30 -mx-1 mb-5 px-1 sm:top-24">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sky-200 bg-white/95 px-4 py-3 shadow-[0_10px_30px_-12px_rgba(2,31,68,0.35)] backdrop-blur">
          <div className="min-w-0">
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#0EA5E9]">
              <Sparkles className="h-3.5 w-3.5" /> Your estimate right now
            </span>
            <p className="mt-0.5 text-2xl font-black leading-none text-[#075985]">{formatMYR(result.price)}</p>
            <p className="mt-1 truncate text-[11px] font-bold text-slate-500">
              {formatMYR(result.low)} – {formatMYR(result.high)} · {result.duration}
            </p>
          </div>
          <button
            type="button"
            onClick={showResult}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0EA5E9] px-5 py-3 text-sm font-black text-white shadow-lg shadow-sky-500/25 transition hover:bg-[#075985]"
          >
            {ready ? "See full breakdown" : `Answer ${outstanding.length} more`}
          </button>
        </div>
      </div>

      {/* ── All questions, one page ───────────────────────────────────── */}
      <div className="space-y-4">
        {mainSteps.map((step, index) => (
          <QuestionCard key={step.id} step={step} index={index + 1} answers={answers} onChange={update} />
        ))}

        {advancedSteps.length ? (
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setShowAdvanced((value) => !value)}
              aria-expanded={showAdvanced}
              className="flex w-full items-center justify-between gap-3 p-5 text-left sm:p-6"
            >
              <span className="flex min-w-0 items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#075985]">
                  <Sliders className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-black leading-tight text-[#075985]">
                    Optional — fine-tune the price
                  </span>
                  <span className="mt-1 block text-xs font-semibold leading-relaxed text-slate-500">
                    {advancedSteps.map((step) => step.title.replace(/\?$/, "")).join(" · ")}. Skip this and we use the
                    most common answers.
                  </span>
                </span>
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#0EA5E9] transition-transform ${showAdvanced ? "rotate-180" : ""}`}
              />
            </button>
            {showAdvanced ? (
              <div className="space-y-4 border-t border-slate-100 bg-slate-50/60 p-4 sm:p-5">
                {advancedSteps.map((step) => (
                  <QuestionCard key={step.id} step={step} answers={answers} onChange={update} />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* ── Prompt for anything still missing ─────────────────────────── */}
      {!ready ? (
        <button
          type="button"
          onClick={goToOutstanding}
          role="status"
          className="mt-4 flex w-full items-start gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-left text-xs font-bold leading-relaxed text-amber-900"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            {answeredCount} of {steps.length} answered. Tap here to finish “{outstanding[0].field.label}” and lock in
            your estimate.
          </span>
        </button>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={showResult}
          className="inline-flex min-h-13 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#0EA5E9] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-500/25 transition hover:bg-[#075985] sm:flex-none sm:px-10"
        >
          {ready ? "See my full estimate" : "Show me what is left"}
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
        >
          <RotateCcw className="h-4 w-4" /> Start over
        </button>
      </div>

      {/* Screen-reader announcement — the price changes silently otherwise. */}
      <p aria-live="polite" className="sr-only">
        {`Current estimate ${formatMYR(result.price)}, range ${formatMYR(result.low)} to ${formatMYR(result.high)}. ${
          ready ? "All questions answered." : `${outstanding.length} question${outstanding.length === 1 ? "" : "s"} left.`
        }`}
      </p>

      {/* ── Result, inline on the same page ───────────────────────────── */}
      <div ref={resultRef} className="mt-6 scroll-mt-24">
        {revealed && ready ? (
          <EstimateResultPanel
            result={result}
            toolName={spec.name}
            summaryLines={summaryLines}
            onReset={reset}
            onEdit={() => scrollTo(topRef.current)}
          />
        ) : (
          <p className="flex gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs font-bold leading-relaxed text-amber-900">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{ESTIMATE_DISCLAIMER}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function QuestionCard({
  step,
  index,
  answers,
  onChange
}: {
  step: Step;
  index?: number;
  answers: Answers;
  onChange: (id: string, value: Answers[string]) => void;
}) {
  const fields = fieldsForStep(step, answers);
  if (!fields.length) return null;

  return (
    <section
      id={`question-${step.id}`}
      aria-labelledby={`question-${step.id}-title`}
      className="scroll-mt-40 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_-28px_rgba(2,31,68,0.35)] sm:p-6"
    >
      <h3
        id={`question-${step.id}-title`}
        className="flex items-start gap-2.5 text-lg font-black leading-tight text-[#075985] sm:text-xl"
      >
        {index ? (
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E0F2FE] text-xs font-black text-[#0284C7]">
            {index}
          </span>
        ) : step.icon ? (
          <span aria-hidden="true" className="text-xl leading-none">
            {step.icon}
          </span>
        ) : null}
        <span>{step.title}</span>
      </h3>
      {step.subtitle ? (
        <p className="mt-1.5 pl-0 text-sm font-semibold leading-relaxed text-slate-600 sm:pl-9">{step.subtitle}</p>
      ) : null}
      <div className="mt-5 space-y-6 sm:pl-9">
        {fields.map((field) => (
          <FieldControl key={field.id} field={field} answers={answers} onChange={onChange} />
        ))}
      </div>
    </section>
  );
}
