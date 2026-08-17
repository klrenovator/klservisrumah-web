import React from "react";
import Image from "next/image";

type LogoProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * `lockup` (default) — horizontal monogram + wordmark, tuned for header/footer.
   * `full`   — the original stacked badge artwork, for hero/print/social use.
   * `icon`   — monogram only, for compact bars and app surfaces.
   */
  variant?: "lockup" | "full" | "icon";
  /**
   * Defaults to `false`. Only the header lockup is an above-the-fold, render-
   * blocking brand asset; everything else (the footer mark in particular) must
   * not issue a high-priority preload — see the note below.
   */
  priority?: boolean;
  className?: string;
  /**
   * Tailwind height utilities used *instead of* the fixed inline height, so one
   * `<Image>` can serve several breakpoints. `size` still sets the intrinsic
   * width/height, which is what reserves the box and prevents layout shift.
   */
  heightClassName?: string;
};

/**
 * Brand logo.
 *
 * TRANSPARENCY
 * The shipped artwork had the image editor's transparency checkerboard flattened
 * into its pixels and carried no alpha channel (PNG colour type 2), so it
 * rendered as a grey chequered rectangle that looked pasted onto the page. The
 * assets were rebuilt with a real alpha channel and now composite cleanly onto
 * any background.
 *
 * LAYOUT
 * The original badge is very wide (aspect ~2.15) with the wordmark occupying
 * only the right half, so at a 52px header height it scaled to ~112px wide and
 * the wordmark became unreadable. `logo-lockup.png` re-arranges the same artwork
 * into a horizontal monogram + wordmark lockup (aspect ~3.9) that stays legible
 * at header sizes. The stacked badge remains available via `variant="full"`.
 *
 * Width is always derived from height so proportions hold at every breakpoint
 * and Next.js reserves the right box, avoiding layout shift.
 *
 * PRELOAD BUDGET
 * `priority` used to default to `true`, and the navbar mounted three separate
 * `<Logo>` elements (xs / sm / md) that CSS showed one at a time per
 * breakpoint. Next.js emits a `<link rel="preload" as="image">` for every
 * priority image, so every page shipped three high-priority logo preloads —
 * for an asset that is at most ~200px wide — which competed for early
 * bandwidth with the hero photo that is the actual LCP element, and pulled in
 * the below-the-fold footer logo too. `priority` now defaults to `false`, and
 * the navbar renders a single responsive instance via `heightClassName`.
 */
const ART = {
  lockup: { src: "/logo/logo-lockup.png", w: 520, h: 133 },
  full: { src: "/logo/logo.png", w: 1200, h: 558 },
  icon: { src: "/logo/logo-icon.png", w: 512, h: 512 },
} as const;

const HEIGHTS = { xs: 34, sm: 40, md: 52, lg: 64, xl: 88 } as const;

export function Logo({
  size = "md",
  variant = "lockup",
  priority = false,
  className,
  heightClassName,
}: LogoProps) {
  const art = ART[variant];
  const height = HEIGHTS[size];
  const width = Math.round(height * (art.w / art.h));

  return (
    <Image
      src={art.src}
      alt="KL Servis Rumah — Professional Home Services"
      width={width}
      height={height}
      sizes={`${width}px`}
      className={
        heightClassName
          ? `object-contain w-auto ${heightClassName}${className ? ` ${className}` : ""}`
          : className ?? "object-contain"
      }
      style={heightClassName ? undefined : { height, width: "auto" }}
      priority={priority}
      // A priority image must not also be lazy; a non-priority one should be.
      loading={priority ? undefined : "lazy"}
    />
  );
}
