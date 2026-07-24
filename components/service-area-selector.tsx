"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { suburbPages } from "@/config/suburb-data";

export function ServiceAreaSelector({ serviceSlug }: { serviceSlug: string }) {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  return (
    <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
      <div className="mb-4 flex items-center gap-2 text-sm font-extrabold text-[#075985]">
        <MapPin className="h-5 w-5 text-[#0EA5E9]" /> Find this service near your suburb
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          className="min-h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[#075985] outline-none focus:border-[#0EA5E9]"
        >
          <option value="">Select suburb...</option>
          {suburbPages.map((suburb) => (
            <option key={suburb.slug} value={suburb.slug}>{suburb.name}</option>
          ))}
        </select>
        <button
          type="button"
          disabled={!selected}
          onClick={() => router.push(`/suburbs/${selected}/${serviceSlug}`)}
          className="rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          View local page
        </button>
      </div>
    </div>
  );
}
