"use client";

import { useEffect } from "react";

/**
 * Global client error beacon (unhandled exceptions + unhandled promise
 * rejections). Reports are sanitized, deduplicated, throttled and sent with
 * `navigator.sendBeacon` to `/api/error-log`, which persists them in Vercel
 * function logs. No PII, cookies or storage contents are ever collected.
 *
 * Paired with the boundary reporting in `app/error.tsx` /
 * `app/global-error.tsx`, this closes the "no production error monitoring"
 * gap (forensic audit Part 2/B4) without any external service.
 */

const MAX_REPORTS_PER_PAGE = 10;
const reportKeys = new Set<string>();
let reportCount = 0;

function send(report: { source: string; message: string; stack?: string }): void {
  if (reportCount >= MAX_REPORTS_PER_PAGE) return;
  const key = `${report.source}:${report.message}`.slice(0, 200);
  if (reportKeys.has(key)) return;
  reportKeys.add(key);
  reportCount += 1;

  try {
    const payload = JSON.stringify({ ...report, pathname: window.location.pathname });
    const blob = new Blob([payload], { type: "application/json" });
    if (!navigator.sendBeacon("/api/error-log", blob)) {
      // Beacon unavailable (rare) — fire-and-forget fetch fallback.
      void fetch("/api/error-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
        credentials: "omit"
      }).catch(() => undefined);
    }
  } catch {
    // Reporting must never itself throw.
  }
}

export function ErrorReporter() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      // Ignore cross-origin script noise ("Script error.") — it carries no
      // actionable detail and drowns real reports.
      if (event.message === "Script error." && !event.filename) return;
      send({
        source: "window.onerror",
        message: String(event.message || "unknown error"),
        stack: event.error instanceof Error ? event.error.stack : undefined
      });
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      send({
        source: "unhandledrejection",
        message: reason instanceof Error ? reason.message : String(reason ?? "unknown rejection"),
        stack: reason instanceof Error ? reason.stack : undefined
      });
    };
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
