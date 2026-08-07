"use client";

import React from "react";
import { Check } from "lucide-react";
import type { Answers, Field } from "@/lib/estimator/types";
import { englishEstimatorT } from "@/lib/estimator/chrome-i18n";
import type { Translator } from "@/lib/i18n";

/** Shared control renderer for the estimator wizard. */
export function FieldControl({
  field,
  answers,
  onChange,
  translator
}: {
  field: Field;
  answers: Answers;
  onChange: (id: string, value: Answers[string]) => void;
  translator?: Translator;
}) {
  const labelId = `${field.id}-label`;

  return (
    <fieldset className="min-w-0">
      <legend id={labelId} className="text-sm font-extrabold text-[#075985] sm:text-base">
        {field.label}
        {field.required ? <span className="ml-1 text-rose-500">*</span> : null}
      </legend>
      {field.help ? (
        <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-500">{field.help}</p>
      ) : null}
      <div className="mt-3">
        <Control field={field} answers={answers} onChange={onChange} labelId={labelId} t={translator ?? englishEstimatorT} />
      </div>
    </fieldset>
  );
}

function Control({
  field,
  answers,
  onChange,
  labelId,
  t
}: {
  field: Field;
  answers: Answers;
  onChange: (id: string, value: Answers[string]) => void;
  labelId: string;
  t: Translator;
}) {
  switch (field.kind) {
    case "cards": {
      const current = String(answers[field.id] ?? "");
      const columns = field.columns ?? 2;
      const activeIndex = field.choices.findIndex((choice) => choice.value === current);

      /**
       * A `radiogroup` is expected to behave like one: arrow keys move between
       * options and only the selected option is in the tab order. Without this
       * a keyboard user has to tab through every card individually, which on
       * the painting scope step means 29 tab stops.
       */
      const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
        const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const last = field.choices.length - 1;
        let next = index;
        if (event.key === "ArrowDown" || event.key === "ArrowRight") next = index >= last ? 0 : index + 1;
        if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = index <= 0 ? last : index - 1;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = last;
        onChange(field.id, field.choices[next].value);
        const group = event.currentTarget.parentElement;
        group?.querySelectorAll<HTMLButtonElement>('[role="radio"]')[next]?.focus();
      };

      return (
        <div
          role="radiogroup"
          aria-labelledby={labelId}
          className={columns === 1 ? "grid grid-cols-1 gap-2.5" : "grid grid-cols-1 gap-2.5 sm:grid-cols-2"}
        >
          {field.choices.map((choice, index) => {
            const active = current === choice.value;
            return (
              <button
                key={choice.value}
                type="button"
                role="radio"
                aria-checked={active}
                tabIndex={active || (activeIndex === -1 && index === 0) ? 0 : -1}
                onKeyDown={(event) => handleKeyDown(event, index)}
                onClick={() => onChange(field.id, choice.value)}
                className={`group relative flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition-colors duration-150 ${
                  active
                    ? "border-[#0EA5E9] bg-sky-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/40"
                }`}
              >
                {choice.icon ? (
                  <span aria-hidden="true" className="shrink-0 text-xl leading-none">
                    {choice.icon}
                  </span>
                ) : null}
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-extrabold leading-snug text-[#075985]">
                    {choice.label}
                  </span>
                  {choice.hint ? (
                    <span className="mt-0.5 block text-xs font-semibold leading-snug text-slate-500">
                      {choice.hint}
                    </span>
                  ) : null}
                  {choice.price ? (
                    <span className="mt-1 block text-xs font-black text-[#0EA5E9]">{choice.price}</span>
                  ) : null}
                </span>
                {choice.popular && !active ? (
                  <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-amber-700">
                    {t("estimator.common.popular")}
                  </span>
                ) : null}
                {active ? (
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      );
    }

    case "select": {
      const current = String(answers[field.id] ?? "");
      return (
        <div className="relative">
          <select
            id={field.id}
            aria-labelledby={labelId}
            value={current}
            onChange={(event) => onChange(field.id, event.target.value)}
            className="w-full appearance-none rounded-2xl border-2 border-slate-200 bg-white px-4 py-4 pr-11 text-sm font-bold text-[#075985] outline-none transition focus:border-[#0EA5E9]"
          >
            {field.placeholder ? <option value="">{field.placeholder}</option> : null}
            {field.choices.map((choice) => (
              <option key={choice.value} value={choice.value}>
                {choice.icon ? `${choice.icon}  ` : ""}
                {choice.label}
              </option>
            ))}
          </select>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            ▾
          </span>
          {(() => {
            const hint = field.choices.find((choice) => choice.value === current)?.hint;
            return hint ? (
              <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500">{hint}</p>
            ) : null;
          })()}
        </div>
      );
    }

    case "multi": {
      const current = Array.isArray(answers[field.id]) ? (answers[field.id] as string[]) : [];
      return (
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {field.choices.map((choice) => {
            const active = current.includes(choice.value);
            return (
              <button
                key={choice.value}
                type="button"
                role="checkbox"
                aria-checked={active}
                onClick={() =>
                  onChange(
                    field.id,
                    active ? current.filter((value) => value !== choice.value) : [...current, choice.value]
                  )
                }
                className={`flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition-colors duration-150 ${
                  active
                    ? "border-[#0EA5E9] bg-sky-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/40"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition ${
                    active ? "border-[#0EA5E9] bg-[#0EA5E9] text-white" : "border-slate-300 bg-white"
                  }`}
                >
                  {active ? <Check className="h-3 w-3" strokeWidth={3.5} /> : null}
                </span>
                {choice.icon ? (
                  <span aria-hidden="true" className="shrink-0 text-lg leading-none">
                    {choice.icon}
                  </span>
                ) : null}
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-extrabold leading-snug text-[#075985]">{choice.label}</span>
                  {choice.hint ? (
                    <span className="mt-0.5 block text-xs font-semibold leading-snug text-slate-500">
                      {choice.hint}
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      );
    }

    case "slider": {
      const value = Number(answers[field.id] ?? field.defaultValue);
      return (
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {field.min}
              {field.format ? "" : ""}
            </span>
            <span className="rounded-full bg-sky-50 px-3.5 py-1.5 text-sm font-black text-[#0284C7]">
              {field.format ? field.format(value) : value}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{field.max}</span>
          </div>
          <input
            id={field.id}
            aria-labelledby={labelId}
            type="range"
            min={field.min}
            max={field.max}
            step={field.step ?? 1}
            value={value}
            onChange={(event) => onChange(field.id, Number(event.target.value))}
            className="estimator-range w-full"
          />
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              aria-label={`${t("estimator.common.decrease")} ${field.label}`}
              onClick={() => onChange(field.id, Math.max(field.min, value - (field.step ?? 1)))}
              className="flex h-10 flex-1 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-lg font-black text-[#075985] transition hover:border-sky-300 hover:bg-sky-50"
            >
              −
            </button>
            <button
              type="button"
              aria-label={`${t("estimator.common.increase")} ${field.label}`}
              onClick={() => onChange(field.id, Math.min(field.max, value + (field.step ?? 1)))}
              className="flex h-10 flex-1 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-lg font-black text-[#075985] transition hover:border-sky-300 hover:bg-sky-50"
            >
              +
            </button>
          </div>
        </div>
      );
    }

    case "number": {
      const value = Number(answers[field.id] ?? field.defaultValue ?? field.min);
      return (
        <div className="flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white p-2">
          <button
            type="button"
            aria-label={`${t("estimator.common.decrease")} ${field.label}`}
            onClick={() => onChange(field.id, Math.max(field.min, value - (field.step ?? 1)))}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl font-black text-[#075985] transition hover:bg-sky-100"
          >
            −
          </button>
          <input
            id={field.id}
            aria-labelledby={labelId}
            type="number"
            inputMode="numeric"
            min={field.min}
            max={field.max}
            step={field.step ?? 1}
            value={value}
            onChange={(event) => onChange(field.id, Number(event.target.value))}
            className="w-full min-w-0 border-0 bg-transparent text-center text-lg font-black text-[#075985] outline-none"
          />
          {field.suffix ? (
            <span className="shrink-0 pr-1 text-sm font-bold text-slate-500">{field.suffix}</span>
          ) : null}
          <button
            type="button"
            aria-label={`${t("estimator.common.increase")} ${field.label}`}
            onClick={() => onChange(field.id, Math.min(field.max, value + (field.step ?? 1)))}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl font-black text-[#075985] transition hover:bg-sky-100"
          >
            +
          </button>
        </div>
      );
    }

    case "toggle": {
      const active = Boolean(answers[field.id] ?? field.defaultValue);
      return (
        <button
          type="button"
          role="switch"
          aria-checked={active}
          aria-labelledby={labelId}
          onClick={() => onChange(field.id, !active)}
          className={`flex w-full items-center justify-between rounded-2xl border-2 px-4 py-3.5 transition ${
            active ? "border-[#0EA5E9] bg-sky-50" : "border-slate-200 bg-white"
          }`}
        >
          <span className="text-sm font-extrabold text-[#075985]">
            {active ? (field.onLabel ?? t("estimator.common.yes")) : (field.offLabel ?? t("estimator.common.no"))}
          </span>
          <span
            aria-hidden="true"
            className={`relative h-7 w-12 rounded-full transition ${active ? "bg-[#0EA5E9]" : "bg-slate-300"}`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${
                active ? "left-6" : "left-1"
              }`}
            />
          </span>
        </button>
      );
    }

    default:
      return null;
  }
}
