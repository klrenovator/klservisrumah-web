"use client";

import React, { useEffect, useState } from "react";
import { Activity, ShieldCheck, X } from "lucide-react";
import { recentJobs } from "@/config/recent-jobs";
import { useTranslations } from "@/hooks/use-translations";

/**
 * Popular Local Requests widget - shows recent job requests
 * Now positioned as a regular element in the page flow to avoid overlapping with hero search
 */
export function RecentJobsTicker() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    if (dismissed || visible) return;

    const reveal = () => setVisible(true);
    window.addEventListener("pointerdown", reveal, { once: true, passive: true });
    window.addEventListener("keydown", reveal, { once: true });

    return () => {
      window.removeEventListener("pointerdown", reveal);
      window.removeEventListener("keydown", reveal);
    };
  }, [dismissed, visible]);

  if (dismissed || !visible) return null;

  const job = recentJobs[0];

  return (
    <section className="py-8" aria-label="Popular Local Requests">
      <div className="container-default">
        <div className="pointer-events-none flex justify-center px-4">
          <div role="status" className="pointer-events-auto relative flex w-full max-w-md items-start gap-3 rounded-2xl border border-[#0EA5E9]/20 bg-white/95 p-3.5 pr-10 shadow-[0_16px_45px_rgba(2,31,68,0.12)] backdrop-blur-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E0F2FE] text-[#0284C7]">
              <Activity className="h-5 w-5" />
            </span>
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0EA5E9]">{job.label}</span>
              <p className="text-xs font-bold leading-relaxed text-[#075985] sm:text-sm">
                {job.service} in {job.location} · {job.timeLabel}
              </p>
              <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-500">
                <ShieldCheck className="h-3 w-3 text-emerald-500" /> {t("ticker.liveDemand")}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label={t("ticker.hideAria")}
              className="absolute right-2.5 top-2.5 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
