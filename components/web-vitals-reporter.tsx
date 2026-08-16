"use client";

import { useReportWebVitals } from "next/web-vitals";
import { trackWebVitalMetric } from "@/lib/analytics";

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[web-vitals]", metric.name, metric.value, metric.rating);
    }
    if (typeof window !== "undefined") {
      trackWebVitalMetric({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id
      });
      window.dispatchEvent(new CustomEvent("klservisrumah:web-vital", { detail: metric }));
    }
  });

  return null;
}
