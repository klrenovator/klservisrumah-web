import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import {
  LocaleProblemsIndex,
  localizedProblemsIndexLanguageUrls
} from "@/components/sections/locale-problems-index";

export const metadata = buildMetadata({
  title: "Masalah Rumah Biasa KL & Selangor — Punca & Kos",
  description:
    "Kenal pasti masalah cat, paip, siling, kalis air dan handyman di rumah Malaysia, kemudian lihat punca sebenar, cara pembaikan dan anggaran kos di KL & Selangor.",
  path: "/ms/problems",
  languageUrls: localizedProblemsIndexLanguageUrls(),
  ogLocale: "ms_MY",
  ogAlternateLocales: ["en_MY", "zh_MY"],
  keywords: [
    "masalah rumah Malaysia",
    "siling bocor KL",
    "cat mengelupas Selangor",
    "diagnosis masalah rumah"
  ]
});

export default function MsProblemsIndexPage() {
  return <LocaleProblemsIndex locale="ms" />;
}
