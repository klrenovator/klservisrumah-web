"use client";

import React, { useState } from "react";
import { Navigation } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

export function NearMeLocator() {
  const t = useTranslations();
  const [status, setStatus] = useState<string | null>(null);

  const locate = () => {
    if (!navigator.geolocation) {
      setStatus(t("location.locatorUnsupported"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) =>
        setStatus(
          t("location.locatorDetected", {
            lat: position.coords.latitude.toFixed(5),
            lng: position.coords.longitude.toFixed(5)
          })
        ),
      () => setStatus(t("location.locatorDenied"))
    );
  };

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
      <h2 className="text-xl font-extrabold text-[#075985]">{t("location.locatorHeading")}</h2>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">
        {status ?? t("location.locatorIntro")}
      </p>
      <button
        onClick={locate}
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white"
      >
        <Navigation className="h-4 w-4" /> {t("location.locatorButton")}
      </button>
    </div>
  );
}
