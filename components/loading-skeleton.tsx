import React from "react";

/**
 * Global loading state — shows a professional skeleton while pages stream.
 * Matches the brand's sky-blue palette.
 *
 * This is a server component (no `"use client"`) so it ships zero JS. The
 * label is passed in per language tree (`Loading...` / `Memuatkan...` /
 * `加载中...`) so localized routes never show English UI, while keeping the
 * component itself language-agnostic. It is also marked `aria-live="polite"`
 * so screen readers announce progress.
 *
 * CLS NOTE: the placeholder is at least as tall as the viewport
 * (`min-h-[100svh]`). Next.js streams the shell (header → this fallback →
 * footer) before the page content, and `body` uses `justify-between`, so a
 * short fallback left the footer visible at the bottom of the screen and it
 * jumped thousands of pixels when the real content replaced the skeleton —
 * a measurable Cumulative Layout Shift on every first load. With the
 * fallback filling the viewport, the footer stays below the fold during
 * streaming and nothing visibly moves.
 */
export function LoadingSkeleton({ label = "Loading..." }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className="min-h-[100svh] flex flex-col items-center justify-center gap-6 px-4 py-16"
    >
      {/* Animated logo/brand indicator */}
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] animate-pulse flex items-center justify-center shadow-lg shadow-[#0EA5E9]/20">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <div className="absolute -inset-3 rounded-3xl bg-[#0EA5E9]/10 animate-ping" style={{ animationDuration: "1.5s" }} aria-hidden="true" />
      </div>

      {/* Skeleton content lines */}
      <div className="w-full max-w-md space-y-3 mt-4" aria-hidden="true">
        <div className="h-4 bg-slate-100 rounded-full animate-pulse w-3/4 mx-auto" />
        <div className="h-4 bg-slate-100 rounded-full animate-pulse w-1/2 mx-auto" style={{ animationDelay: "150ms" }} />
        <div className="h-4 bg-slate-100 rounded-full animate-pulse w-2/3 mx-auto" style={{ animationDelay: "300ms" }} />
      </div>

      <p className="text-sm font-medium text-[#475569]/60 mt-2">{label}</p>
    </div>
  );
}
