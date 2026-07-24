import React from "react";
import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "full" | "icon";
};

export function Logo({ size = "md", showText = true, variant = "full" }: LogoProps) {
  const iconSize = size === "sm" ? 44 : size === "lg" ? 64 : size === "xl" ? 96 : 52;
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : size === "xl" ? "text-3xl" : "text-lg";
  const subTextSize = size === "sm" ? "text-[8px]" : "text-[10px]";

  if (variant === "icon") {
    return (
      <Image
        src="/logo/logo.jpg"
        alt="KL Servis Rumah"
        width={iconSize}
        height={iconSize}
        className="rounded-xl object-contain"
        priority
      />
    );
  }

  return (
    <div className="flex items-center gap-2 group shrink-0">
      <Image
        src="/logo/logo.jpg"
        alt="KL Servis Rumah - Professional Home Services"
        width={iconSize}
        height={iconSize}
        className="rounded-xl object-contain"
        priority
      />
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSize} text-[#075985] font-extrabold tracking-tight leading-none flex items-center gap-0.5`}>
            KL<span className="text-[#0EA5E9]">SERVIS</span>RUMAH
            <span className="text-[#0EA5E9] text-[10px] sm:text-xs font-bold">.MY</span>
          </span>
          <span className={`${subTextSize} tracking-widest text-[#475569] font-semibold mt-0.5`}>
            PAINTING • CEILING • PLUMBING • HANDYMAN
          </span>
        </div>
      )}
    </div>
  );
}
