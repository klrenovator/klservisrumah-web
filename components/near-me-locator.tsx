"use client";

import React, { useState } from "react";
import { Navigation } from "lucide-react";

export function NearMeLocator() {
  const [status, setStatus] = useState("Use your browser location to prepare a more accurate WhatsApp dispatch request.");

  const locate = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported. Please send your area or location pin on WhatsApp.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => setStatus(`Location detected: ${position.coords.latitude.toFixed(5)}, ${position.coords.longitude.toFixed(5)}. Send this pin on WhatsApp for nearest dispatch.`),
      () => setStatus("Location permission was not granted. You can still send your suburb or Google Maps pin on WhatsApp.")
    );
  };

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
      <h2 className="text-xl font-extrabold text-[#1E40AF]">Nearest dispatch helper</h2>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{status}</p>
      <button onClick={locate} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-extrabold text-white">
        <Navigation className="h-4 w-4" /> Use my location
      </button>
    </div>
  );
}
