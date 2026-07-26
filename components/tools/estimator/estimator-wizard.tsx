"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Info, RotateCcw, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { ESTIMATE_DISCLAIMER, formatMYR } from "@/lib/estimator/format";
import type { Answers, EstimatorSpec } from "@/lib/estimator/types";
import {
  blockingMessage,
  canAdvance,
  stepVisible,
  summariseAnswers,
  visibleFields as fieldsForStep
} from "@/lib/estimator/wizard-logic";
import { FieldControl } from "./fields";
import { EstimateResultPanel } from "./estimate-result";

export function EstimatorWizard({ spec }: { spec: EstimatorSpec }) {
  const [answers, setAnswers] = useState<Answers>(spec.defaults);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [touched, setTouched] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const scrollOnChange = useRef(false);

  const steps = useMemo(() => spec.steps.filter((step) => stepVisible(step, answers)), [spec.steps, answers]);
  const safeIndex = Math.min(index, Math.max(0, steps.length - 1));
  const step = steps[safeIndex];

  const visibleFields = useMemo(() => (step ? fieldsForStep(step, answers) : []), [step, answers]);

  const canContinue = step ? canAdvance(step, answers) : false;
  const blockedReason = step ? blockingMessage(step, answers) : null;
  const isLast = safeIndex === steps.length - 1;
  const progress = Math.round(((safeIndex + (finished ? 1 : 0)) / steps.length) * 100);

  const result = useMemo(() => spec.compute(answers), [spec, answers]);

  const summaryLines = useMemo(() => summariseAnswers(spec, answers), [spec, answers]);

  const update = useCallback((id: string, value: Answers[string]) => {
    setTouched(true);
    setAnswers((current) => ({ ...current, [id]: value }));
  }, []);

  // Scroll the wizard back into view whenever the step changes by user action.
  useEffect(() => {
    if (!scrollOnChange.current) return;
    scrollOnChange.current = false;
    const node = topRef.current;
    if (!node) return;
    const top = node.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
    // Keyboard and screen-reader users must land on the new step, not stay on
    // the Next button that has just moved out of view.
    node.querySelector<HTMLElement>("#estimator-step-title")?.focus({ preventScroll: true });
  }, [safeIndex, finished]);

  const goNext = () => {
    if (!canContinue) return;
    scrollOnChange.current = true;
    if (isLast) {
      setFinished(true);
      trackEvent({
        action: "estimator_complete",
        category: "engagement",
        label: spec.slug,
        value: result.price
      });
      return;
    }
    setIndex(safeIndex + 1);
    trackEvent({ action: "estimator_step", category: "engagement", label: `${spec.slug}:${safeIndex + 2}` });
  };

  const goBack = () => {
    scrollOnChange.current = true;
    if (finished) {
      setFinished(false);
      setIndex(steps.length - 1);
      return;
    }
    setIndex(Math.max(0, safeIndex - 1));
  };

  const reset = () => {
    scrollOnChange.current = true;
    setAnswers(spec.defaults);
    setIndex(0);
    setFinished(false);
    setTouched(false);
  };

  if (finished) {
    return (
      <div ref={topRef} className="scroll-mt-24">
        <EstimateResultPanel
          result={result}
          toolName={spec.name}
          summaryLines={summaryLines}
          onReset={reset}
          onEdit={goBack}
        />
      </div>
    );
  }

  return (
    <div ref={topRef} className="scroll-mt-24">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(2,31,68,0.25)]">
        {/* Progress */}
        <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-7">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#0EA5E9]">
              Step {safeIndex + 1} of {steps.length}
            </span>
            <span className="text-xs font-bold text-slate-500">{progress}% complete</span>
          </div>
          <div
            className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-slate-200"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Estimator progress"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#075985] transition-[width] duration-300 ease-out"
              style={{ width: `${Math.max(progress, 6)}%` }}
            />
          </div>
          <ol className="mt-3 hidden gap-1.5 sm:flex">
            {steps.map((item, itemIndex) => (
              <li key={item.id} className="flex-1">
                <button
                  type="button"
                  onClick={() => {
                    if (itemIndex <= safeIndex) {
                      scrollOnChange.current = true;
                      setIndex(itemIndex);
                    }
                  }}
                  disabled={itemIndex > safeIndex}
                  className={`flex w-full items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11px] font-bold transition ${
                    itemIndex === safeIndex
                      ? "bg-white text-[#075985] shadow-sm"
                      : itemIndex < safeIndex
                        ? "text-emerald-600 hover:bg-white"
                        : "text-slate-400"
                  }`}
                >
                  {itemIndex < safeIndex ? (
                    <Check className="h-3 w-3 shrink-0" strokeWidth={3} />
                  ) : (
                    <span aria-hidden="true">{item.icon}</span>
                  )}
                  <span className="truncate">{item.title.replace(/\?$/, "")}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* Step body */}
        <div
          key={step?.id}
          className="estimator-step p-5 sm:p-7"
          role="group"
          aria-labelledby="estimator-step-title"
        >
          <h2
            id="estimator-step-title"
            tabIndex={-1}
            className="flex items-start gap-2.5 text-xl font-black leading-tight text-[#075985] sm:text-2xl"
          >
            {step?.icon ? (
              <span aria-hidden="true" className="text-2xl leading-none">
                {step.icon}
              </span>
            ) : null}
            <span>{step?.title}</span>
          </h2>
          {step?.subtitle ? (
            <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">{step.subtitle}</p>
          ) : null}

          <div className="mt-6 space-y-7">
            {visibleFields.map((field) => (
              <FieldControl key={field.id} field={field} answers={answers} onChange={update} />
            ))}
          </div>
        </div>

        {/* Live estimate */}
        <div className="border-t border-slate-100 bg-gradient-to-r from-sky-50 to-white px-5 py-4 sm:px-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0EA5E9]">
                <Sparkles className="h-3.5 w-3.5" /> Live estimate
              </span>
              <p className="mt-1 text-2xl font-black leading-none text-[#075985]">
                {touched ? formatMYR(result.price) : "—"}
              </p>
              <p className="mt-1 text-xs font-bold text-slate-500">
                {touched
                  ? `Range ${formatMYR(result.low)} – ${formatMYR(result.high)} · ${result.duration}`
                  : "Answer the first question to see your estimate update live"}
              </p>
            </div>
            <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-slate-500 shadow-sm">
              {result.packageName}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 p-5 sm:p-7">
          <button
            type="button"
            onClick={goBack}
            disabled={safeIndex === 0}
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-5 py-3.5 text-sm font-black text-[#075985] transition enabled:hover:border-sky-300 enabled:hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" /> Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canContinue}
            className="inline-flex min-h-13 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#0EA5E9] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-sky-500/25 transition enabled:hover:bg-[#075985] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none sm:flex-none sm:px-10"
          >
            {isLast ? "Get My Estimate" : "Next"} <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
          {blockedReason ? (
            <p role="status" className="w-full text-xs font-bold text-amber-600">
              {blockedReason}
            </p>
          ) : null}
        </div>
      </div>

      {/* Screen-reader announcement: the visual step change is otherwise silent */}
      <p aria-live="polite" className="sr-only">
        {`Step ${safeIndex + 1} of ${steps.length}: ${step?.title ?? ""}. Current estimate ${
          touched ? formatMYR(result.price) : "not yet calculated"
        }.`}
      </p>

      {/* Disclaimer — visible at every step, before any booking */}
      <p className="mt-4 flex gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs font-bold leading-relaxed text-amber-900">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{ESTIMATE_DISCLAIMER}</span>
      </p>
    </div>
  );
}
