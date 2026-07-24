import React from "react";
import { MapPin } from "lucide-react";

export function CaseStudyCard({ title, location, result }: { title: string; location: string; result: string }) {
  return (
    <article className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold text-[#0EA5E9]">
        <MapPin className="h-4 w-4" /> {location}
      </div>
      <h3 className="text-lg font-extrabold text-[#1E40AF]">{title}</h3>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{result}</p>
    </article>
  );
}
