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
  priority?: boolean;
  className?: string;
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
  priority = true,
  className,
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
      className={className ?? "object-contain"}
      style={{ height, width: "auto" }}
      priority={priority}
    />
  );
}
