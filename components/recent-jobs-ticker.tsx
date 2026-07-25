"use client";

import React, { useEffect, useState } from "react";
import { Activity, ShieldCheck, X } from "lucide-react";
import { recentJobs } from "@/config/recent-jobs";

const INITIAL_DELAY_MS = 2500; // pause before the first card slides in
const VISIBLE_MS = 5200; // how long each card stays on screen
const EXIT_MS = 600; // slide-out animation time
const GAP_MS = 1400; // pause before the next card appears

export function RecentJobsTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const appearIn = index === 0 ? INITIAL_DELAY_MS : GAP_MS;
    const showTimer = window.setTimeout(() => setVisible(true), appearIn);
    const hideTimer = window.setTimeout(() => setVisible(false), appearIn + VISIBLE_MS);
    const nextTimer = window.setTimeout(
      () => setIndex((current) => (current + 1) % recentJobs.length),
      appearIn + VISIBLE_MS + EXIT_MS
    );

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(nextTimer);
    };
  }, [index, dismissed]);

  if (dismissed) return null;

  const job = recentJobs[index] ?? recentJobs[0];

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-24 z-40 flex justify-center px-4 sm:top-28"
      aria-live="polite"
    >
      <div
        role="status"
        className={`relative flex w-full max-w-md items-start gap-3 rounded-2xl border border-[#0EA5E9]/20 bg-white/95 p-3.5 pr-10 shadow-[0_16px_45px_rgba(2,31,68,0.12)] backdrop-blur transition-all duration-500 ease-out ${
          visible
            ? "pointer-events-auto opacity-100 motion-safe:translate-y-0 motion-safe:scale-100"
            : "pointer-events-none opacity-0 motion-safe:-translate-y-4 motion-safe:scale-95"
        }`}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E0F2FE] text-[#0284C7]">
          <Activity className="h-5 w-5" />
        </span>
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0EA5E9]">
            {job.label}
          </span>
          <p className="text-xs font-bold leading-relaxed text-[#075985] sm:text-sm">
            {job.service} in {job.location} · {job.timeLabel}
          </p>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-500">
            <ShieldCheck className="h-3 w-3 text-emerald-500" /> Live local demand — no customer
            names shown
          </span>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Hide recent activity notifications"
          className="absolute right-2.5 top-2.5 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
