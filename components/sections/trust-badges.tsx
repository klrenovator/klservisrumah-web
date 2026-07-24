import React from "react";
import { siteConfig } from "@/config/site";
import { Award, Shield, FileCheck, Landmark } from "lucide-react";

export function TrustBadges() {
  const badgeList = [
    {
      icon: <Award className="w-8 h-8 text-[#0EA5E9]" />,
      title: "100% Certified",
      desc: "Licensed tradesmen & expert background-checked crews."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0EA5E9]" />,
      title: "Craftsmanship Warranties",
      desc: "Up to 90 days solid peace of mind guarantees."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#0EA5E9]" />,
      title: "Transparent Quotes",
      desc: "Fixed upfront itemized pricing. Absolutely zero hidden charges."
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#0EA5E9]" />,
      title: "Established Local Company",
      desc: `Legal business managed under ${siteConfig.parentCompany}.`
    }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badgeList.map((badge, idx) => (
            <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs hover:shadow-2xs transition-all duration-300">
              <div className="p-3 bg-[#DBEAFE]/30 rounded-xl shrink-0">
                {badge.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-[#1E40AF] tracking-tight">{badge.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed mt-1 font-medium">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
