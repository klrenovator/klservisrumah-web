import React from "react";

/**
 * Global loading state — shows a professional skeleton while pages load.
 * Matches the brand's sky-blue palette.
 */
export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 py-16">
      {/* Animated logo/brand indicator */}
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] animate-pulse flex items-center justify-center shadow-lg shadow-[#0EA5E9]/20">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <div className="absolute -inset-3 rounded-3xl bg-[#0EA5E9]/10 animate-ping" style={{ animationDuration: "1.5s" }} />
      </div>

      {/* Skeleton content lines */}
      <div className="w-full max-w-md space-y-3 mt-4">
        <div className="h-4 bg-slate-100 rounded-full animate-pulse w-3/4 mx-auto" />
        <div className="h-4 bg-slate-100 rounded-full animate-pulse w-1/2 mx-auto" style={{ animationDelay: "150ms" }} />
        <div className="h-4 bg-slate-100 rounded-full animate-pulse w-2/3 mx-auto" style={{ animationDelay: "300ms" }} />
      </div>

      <p className="text-sm font-medium text-[#475569]/60 mt-2">Loading...</p>
    </div>
  );
}
