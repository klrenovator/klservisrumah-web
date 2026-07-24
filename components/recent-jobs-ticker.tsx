import React from "react";
import { Activity } from "lucide-react";
import { recentJobs } from "@/config/recent-jobs";

export function RecentJobsTicker() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#0EA5E9]/20 bg-white/80 p-3 shadow-xs">
      <div className="flex items-center gap-3 text-xs font-bold text-[#075985]">
        <Activity className="h-4 w-4 shrink-0 text-[#0EA5E9]" />
        <div className="flex min-w-0 flex-wrap gap-x-4 gap-y-1">
          {recentJobs.map((job) => (
            <span key={`${job.service}-${job.location}`} className="whitespace-nowrap">
              <span className="text-[#0EA5E9]">{job.label}:</span> {job.service} in {job.location} · {job.timeLabel}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
