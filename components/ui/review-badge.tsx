import React from "react";
import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ReviewBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shadow-2xs">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <span className="text-xs font-bold text-[#075985]">
        {siteConfig.reviewRating} / 5.0 Google Rating ({siteConfig.reviewCount}+ reviews)
      </span>
    </div>
  );
}
