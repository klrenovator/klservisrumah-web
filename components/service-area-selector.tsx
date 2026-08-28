"use client";

import React, { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { suburbPages } from "@/config/suburb-data";
import { suburbServicePath } from "@/lib/bp1-consolidation";
import { useTranslations } from "@/hooks/use-translations";

export function ServiceAreaSelector({ serviceSlug }: { serviceSlug: string }) {
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const t = useTranslations();
  const selectId = useId();

  return (
    <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
      <label htmlFor={selectId} className="mb-4 flex items-center gap-2 text-sm font-extrabold text-[#075985]">
        <MapPin className="h-5 w-5 text-[#0EA5E9]" aria-hidden="true" /> {t("areaSelector.title")}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          id={selectId}
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          aria-label={t("areaSelector.selectLabel")}
          className="min-h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[#075985] outline-none focus:border-[#0EA5E9] focus-visible:ring-2 focus-visible:ring-sky-300"
        >
          <option value="">{t("areaSelector.placeholder")}</option>
          {suburbPages.map((suburb) => (
            <option key={suburb.slug} value={suburb.slug}>{suburb.name}</option>
          ))}
        </select>
        <button
          type="button"
          disabled={!selected}
          // BP-1 phase 1: 37 of the 52 listed suburbs are also coverage areas,
          // so their local page lives at `/areas/<slug>/<svc>` and the
          // `/suburbs/...` URL is a 301. `suburbServicePath` picks the live URL
          // for whichever kind the visitor selected, so the button never lands
          // on a redirect.
          onClick={() => router.push(suburbServicePath(selected, serviceSlug))}
          className="rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {t("areaSelector.viewLocal")}
        </button>
      </div>
    </div>
  );
}
