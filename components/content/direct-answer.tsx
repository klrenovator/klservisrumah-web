import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type DirectAnswerProps = {
  question: string;
  answer: string;
  trilingualMs?: string;
  trilingualZh?: string;
  trustItems?: string[];
  /**
   * Optional action row inside the card (P3-04: the audit asks the cost-page
   * DirectAnswer to cite the published price *and* link the estimator, so the
   * next step lives in the same extractable block instead of two screens away).
   * Rendered with `next/link` so it works in server and client components.
   */
  actions?: { href: string; label: string }[];
};

/**
 * DirectAnswer — Klrenovator-style "AI-citable" snippet block.
 * Designed to be picked up by ChatGPT, Perplexity, Gemini, and Google
 * AI Overviews as a self-contained answer card.
 */
export function DirectAnswer({
  question,
  answer,
  trilingualMs,
  trilingualZh,
  trustItems = [],
  actions = []
}: DirectAnswerProps) {
  return (
    <section className="quick-answer">
      <div className="flex items-center gap-2 mb-3">
        <span className="eyebrow">Direct Answer · Jawapan Ringkas · 直接答案</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight leading-tight mb-3">
        {question}
      </h2>
      <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-medium">
        {answer}
      </p>
      {(trilingualMs || trilingualZh) && (
        <p className="trilingual-sub mt-3 italic">
          {trilingualMs && <span><b>BM:</b> {trilingualMs}</span>}
          {trilingualMs && trilingualZh && <span className="mx-2 text-slate-300">·</span>}
          {trilingualZh && <span><b>中文:</b> {trilingualZh}</span>}
        </p>
      )}
      {actions.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2.5">
          {actions.map((action, index) => (
            <Link
              key={action.href}
              href={action.href}
              className={
                index === 0
                  ? "inline-flex items-center rounded-xl bg-[#0284C7] px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-[#075985]"
                  : "inline-flex items-center rounded-xl border border-[#BAE6FD] bg-white px-4 py-2.5 text-xs font-extrabold text-[#075985] transition hover:border-[#0EA5E9]"
              }
            >
              {action.label}
            </Link>
          ))}
        </div>
      )}
      {trustItems.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {trustItems.map((item) => (
            <li key={item} className="trust-pill">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
