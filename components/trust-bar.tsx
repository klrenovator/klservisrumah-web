import React from "react";
import { BadgeCheck, ShieldCheck, Clock3, Star, WalletCards, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

export function TrustBar() {
  const items = [
    { icon: <Star className="h-4 w-4 fill-amber-400 text-amber-400" />, label: `${siteConfig.reviewRating}/5 Google Rating (${siteConfig.reviewCount}+ reviews)` },
    { icon: <ShieldCheck className="h-4 w-4 text-emerald-500" />, label: "Fully insured operations" },
    { icon: <BadgeCheck className="h-4 w-4 text-[#0EA5E9]" />, label: "30-day to 5-year warranties" },
    { icon: <WalletCards className="h-4 w-4 text-[#0EA5E9]" />, label: "Transparent market-rate pricing" },
    { icon: <Clock3 className="h-4 w-4 text-[#0EA5E9]" />, label: "Same-day dispatch slots" },
    { icon: <Users className="h-4 w-4 text-[#0EA5E9]" />, label: "Background-verified crew" }
  ];

  return (
    <section className="border-y border-slate-100 bg-white py-3">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wide text-[#075985]">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
