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
 */
const LOGO_ASPECT = 1693 / 929; // intrinsic width / height of logo.png

export function Logo({ size = "md", variant = "full" }: LogoProps) {
  const height = size === "sm" ? 40 : size === "lg" ? 64 : size === "xl" ? 88 : 52;
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
      style={{ height, width: "auto" }}
      priority
    />
  );
}
