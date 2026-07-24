"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[web-vitals]", metric.name, metric.value, metric.rating);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("klservisrumah:web-vital", { detail: metric }));
    }
  });

  return null;
}
