import React from "react";
import { CheckCircle2 } from "lucide-react";

type DirectAnswerProps = {
  question: string;
  answer: string;
  trilingualMs?: string;
  trilingualZh?: string;
  trustItems?: string[];
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
  trustItems = []
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
