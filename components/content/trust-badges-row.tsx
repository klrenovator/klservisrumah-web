"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Star, Award, Clock, ThumbsUp } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

type TrustBadgeItem = {
  icon: "check" | "shield" | "star" | "award" | "clock" | "thumbsup";
  text: string;
};

type TrustBadgesRowProps = {
  items?: TrustBadgeItem[];
  variant?: "light" | "dark";
};

const iconMap = {
  check: CheckCircle2,
  shield: ShieldCheck,
  star: Star,
  award: Award,
  clock: Clock,
  thumbsup: ThumbsUp
};

/**
 * TrustBadgesRow — Klrenovator-style compact horizontal trust strip.
 * Renders inline pill-style trust signals.
 */
export function TrustBadgesRow({
  items,
  variant = "light"
}: TrustBadgesRowProps) {
  const t = useTranslations();
  const isDark = variant === "dark";

  // Default items use translation keys
  const defaultItems: TrustBadgeItem[] = [
    { icon: "shield", text: t("trustBadgesRow.insured") },
    { icon: "check", text: t("trustBadgesRow.priceFirst") },
    { icon: "star", text: t("trustBadgesRow.google") },
    { icon: "clock", text: t("trustBadgesRow.sameDay") },
    { icon: "award", text: t("trustBadgesRow.warranty") }
  ];

  const displayItems = items ?? defaultItems;

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${isDark ? "text-white" : ""}`}>
      {displayItems.map((item, idx) => {
        const Icon = iconMap[item.icon];
        return (
          <li
            key={idx}
            className={`inline-flex items-center gap-1.5 text-xs font-bold ${
              isDark
                ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-full"
                : "bg-[#F0F9FF] text-[#075985] px-3 py-1.5 rounded-full"
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isDark ? "text-[#7DD3FC]" : "text-[#0EA5E9]"}`} />
            <span>{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
}
