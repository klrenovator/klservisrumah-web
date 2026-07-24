"use client";

import React from "react";
import { BadgeCheck, ShieldCheck, Clock3, Star, WalletCards, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLang } from "@/context/lang-context";

const items: Record<"en" | "ms" | "zh", { icon: React.ReactNode; label: string }[]> = {
  en: [
    { icon: <Star className="h-4 w-4 fill-amber-400 text-amber-400" />, label: `${siteConfig.reviewRating}/5 Google Rating (${siteConfig.reviewCount}+ reviews)` },
    { icon: <ShieldCheck className="h-4 w-4 text-emerald-500" />, label: "Fully insured operations" },
    { icon: <BadgeCheck className="h-4 w-4 text-[#0EA5E9]" />, label: "30-day to 5-year warranties" },
    { icon: <WalletCards className="h-4 w-4 text-[#0EA5E9]" />, label: "Transparent market-rate pricing" },
    { icon: <Clock3 className="h-4 w-4 text-[#0EA5E9]" />, label: "Same-day dispatch slots" },
    { icon: <Users className="h-4 w-4 text-[#0EA5E9]" />, label: "Background-verified crew" }
  ],
  ms: [
    { icon: <Star className="h-4 w-4 fill-amber-400 text-amber-400" />, label: `${siteConfig.reviewRating}/5 Penilaian Google (${siteConfig.reviewCount}+ ulasan)` },
    { icon: <ShieldCheck className="h-4 w-4 text-emerald-500" />, label: "Operasi diinsuranskan sepenuhnya" },
    { icon: <BadgeCheck className="h-4 w-4 text-[#0EA5E9]" />, label: "Jaminan 30 hari hingga 5 tahun" },
    { icon: <WalletCards className="h-4 w-4 text-[#0EA5E9]" />, label: "Harga pasaran yang telus" },
    { icon: <Clock3 className="h-4 w-4 text-[#0EA5E9]" />, label: "Slot penghantaran hari sama" },
    { icon: <Users className="h-4 w-4 text-[#0EA5E9]" />, label: "Krew yang disahkan latar belakang" }
  ],
  zh: [
    { icon: <Star className="h-4 w-4 fill-amber-400 text-amber-400" />, label: `${siteConfig.reviewRating}/5 谷歌评分（${siteConfig.reviewCount}+ 评价）` },
    { icon: <ShieldCheck className="h-4 w-4 text-emerald-500" />, label: "全程保险运营" },
    { icon: <BadgeCheck className="h-4 w-4 text-[#0EA5E9]" />, label: "30 天至 5 年保修" },
    { icon: <WalletCards className="h-4 w-4 text-[#0EA5E9]" />, label: "透明市场行情价格" },
    { icon: <Clock3 className="h-4 w-4 text-[#0EA5E9]" />, label: "当日派遣时段" },
    { icon: <Users className="h-4 w-4 text-[#0EA5E9]" />, label: "经过背景核查的团队" }
  ]
};

export function TrustBar() {
  const { lang } = useLang();
  const list = items[lang] ?? items.en;
  return (
    <section className="border-y border-slate-100 bg-white py-3">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 sm:px-6 lg:px-8">
        {list.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wide text-[#075985]">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
