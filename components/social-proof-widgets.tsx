"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Eye, ShieldCheck, TrendingUp } from "lucide-react";
import { recentJobs } from "@/config/recent-jobs";

function deterministicDemandIndex() {
  const now = new Date();
  const base = 18 + (now.getHours() % 7) * 3;
  return base + Math.floor(now.getMinutes() / 10);
}

export function SocialProofWidgets() {
  const [index, setIndex] = useState(0);
  const [demandIndex, setDemandIndex] = useState(24);

  useEffect(() => {
    setDemandIndex(deterministicDemandIndex());
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % recentJobs.length);
      setDemandIndex(deterministicDemandIndex());
    }, 9000);
    return () => window.clearInterval(timer);
  }, []);

  const current = useMemo(() => recentJobs[index] ?? recentJobs[0], [index]);

  return (
    <div className="pointer-events-none fixed bottom-24 left-4 z-40 hidden max-w-xs flex-col gap-3 lg:flex">
      <div className="pointer-events-auto rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_16px_45px_rgba(2,31,68,0.10)]">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
            <TrendingUp className="h-5 w-5" />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0EA5E9]">Privacy-safe activity</span>
            <p className="text-xs font-bold leading-relaxed text-[#1E40AF]">
              {current.service} is a popular request in {current.location} {current.timeLabel}.
            </p>
            <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-500">
              <ShieldCheck className="h-3 w-3 text-emerald-500" /> No customer names shown publicly
            </span>
          </div>
        </div>
      </div>
      <div className="pointer-events-auto rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_16px_45px_rgba(2,31,68,0.08)]">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1E40AF]">
          <Eye className="h-4 w-4 text-[#0EA5E9]" />
          <span>Local service demand index: {demandIndex}/50</span>
        </div>
      </div>
    </div>
  );
}
