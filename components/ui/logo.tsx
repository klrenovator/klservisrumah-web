import React from "react";
import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "full" | "icon";
};

/**
 * Brand logo. The full logo artwork (public/logo/logo.png) already contains the
 * KL monogram, tool-shield and the "KL SERVIS RUMAH — PROFESSIONAL HOME SERVICES"
 * wordmark, so the default `full` variant renders the image only (no HTML text),
 * mirroring the klrenovator.com header pattern.
 *
 * The logo is intentionally displayed with extra height so the wordmark reads
 * clearly in the navbar without increasing the horizontal footprint.
 */
const LOGO_ASPECT = 1481 / 720;

export function Logo({ size = "md", variant = "full" }: LogoProps) {
  // Increased heights so the logo looks taller and the wordmark stays readable
  const height = size === "sm" ? 48 : size === "lg" ? 72 : size === "xl" ? 100 : 60;
  const width = Math.round(height * LOGO_ASPECT);

  if (variant === "icon") {
    return (
      <Image
        src="/logo/logo.jpg"
        alt="KL Servis Rumah"
        width={height}
        height={height}
        className="rounded-xl object-contain"
        priority
      />
    );
  }

  return (
    <Image
      src="/logo/logo.png"
      alt="KL Servis Rumah — Professional Home Services"
      width={width}
      height={height}
      className="object-contain"
      style={{ height, width }}
      priority
    />
  );
}
