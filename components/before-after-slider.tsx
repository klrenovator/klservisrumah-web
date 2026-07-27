import React from "react";

/**
 * Before/After proof card.
 *
 * Real photography is still pending approved client assets, so instead of a
 * visible "Photo placeholder" label that ships to end-users (which reads as
 * unfinished work), this component renders a labelled illustration pair using
 * inline SVG — no extra assets, no layout shift, and no embarrassing copy.
 * Drop two <img>s into the panels when approved media is supplied.
 */
export function BeforeAfterSlider({ title = "Before / after proof", beforeLabel = "Before", afterLabel = "After" }: { title?: string; beforeLabel?: string; afterLabel?: string }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs">
      <h3 className="mb-4 text-lg font-extrabold text-[#075985]">{title}</h3>
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-100">
        <div className="relative flex min-h-40 items-end bg-slate-100 p-3">
          <BeforeIllustration className="absolute inset-0 h-full w-full text-slate-300" />
          <span className="relative rounded-full bg-slate-900/70 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">
            {beforeLabel}
          </span>
        </div>
        <div className="relative flex min-h-40 items-end bg-[#E0F2FE] p-3">
          <AfterIllustration className="absolute inset-0 h-full w-full text-sky-300" />
          <span className="relative rounded-full bg-[#0284C7] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">
            {afterLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

function BeforeIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="160" fill="currentColor" opacity="0.15" />
      {/* Cracked wall */}
      <path d="M20 40 L70 50 L60 80 L100 90 L85 120 L130 130" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M70 50 L78 65 M60 80 L48 92 M100 90 L112 105 M85 120 L75 135" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Water stain */}
      <ellipse cx="150" cy="60" rx="35" ry="22" fill="currentColor" opacity="0.35" />
      <ellipse cx="145" cy="70" rx="22" ry="14" fill="currentColor" opacity="0.45" />
      {/* Peeling paint blobs */}
      <path d="M30 120 Q45 105 60 120 Q52 130 40 128 Z" fill="currentColor" opacity="0.55" />
      <path d="M120 130 Q140 118 160 132 Q148 140 130 138 Z" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

function AfterIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="klsr-wall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.10" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="200" height="160" fill="url(#klsr-wall)" />
      {/* Smooth finished wall with checkmark */}
      <path d="M10 100 L190 100" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="100" cy="70" r="32" fill="#22C55E" opacity="0.12" />
      <path d="M86 70 L97 81 L118 57" stroke="#16A34A" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Baseboard */}
      <rect x="0" y="130" width="200" height="8" fill="currentColor" opacity="0.35" />
      <rect x="0" y="138" width="200" height="22" fill="currentColor" opacity="0.20" />
    </svg>
  );
}
