import React from "react";
import { Check, X } from "lucide-react";

type ComparisonRow = {
  criteria: string;
  ours: string;
  theirs: string;
};

type ComparisonTableProps = {
  title?: string;
  subtitle?: string;
  ourLabel?: string;
  theirLabel?: string;
  rows: ComparisonRow[];
};

/**
 * ComparisonTable — Klrenovator-style "us vs typical competitor" grid.
 * Designed for conversion: makes the value prop obvious at a glance.
 */
export function ComparisonTable({
  title = "Why KL Servis Rumah",
  subtitle = "We publish real prices. Others make you call first. Here's what that means for your home.",
  ourLabel = "KL Servis Rumah",
  theirLabel = "Typical Competitors",
  rows
}: ComparisonTableProps) {
  return (
    <section className="space-y-6">
      <div className="text-center max-w-3xl mx-auto">
        <span className="eyebrow">Side-by-side · Perbandingan · 对比</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight mt-3">
          {title}
        </h2>
        <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
          {subtitle}
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-2 sm:gap-4 bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-4">
          <div className="col-span-5 sm:col-span-4 text-xs font-extrabold text-[#475569] uppercase tracking-wider">
            Criteria · Kriteria · 准则
          </div>
          <div className="col-span-3 sm:col-span-4 flex items-center gap-2">
            <span className="trust-pill-dark">
              <Check className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{ourLabel}</span>
              <span className="sm:hidden">Us</span>
            </span>
          </div>
          <div className="col-span-4 flex items-center gap-2">
            <span className="trust-pill bg-slate-200 text-slate-600">
              <X className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{theirLabel}</span>
              <span className="sm:hidden">Others</span>
            </span>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-6 py-5 ${
              idx !== rows.length - 1 ? "border-b border-slate-100" : ""
            } hover:bg-slate-50/40 transition-colors`}
          >
            <div className="col-span-5 sm:col-span-4 text-sm font-extrabold text-[#075985]">
              {row.criteria}
            </div>
            <div className="col-span-3 sm:col-span-4 text-sm text-[#075985] font-semibold leading-relaxed flex gap-2">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{row.ours}</span>
            </div>
            <div className="col-span-4 text-sm text-[#475569] leading-relaxed flex gap-2">
              <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{row.theirs}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
