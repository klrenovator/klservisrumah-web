import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { LocaleServicesIndex, localizedServicesIndexLanguageUrls } from "@/components/sections/locale-services-index";

export const metadata = buildMetadata({
  title: "Servis Mengecat, Siling & Rumah KL & Selangor",
  description:
    "Terokai servis mengecat, siling & partition, paip, kalis air, handyman dan penyelenggaraan rumah lain di KL & Selangor. Lihat skop dan harga.",
  path: "/ms/services",
  languageUrls: localizedServicesIndexLanguageUrls(),
  ogLocale: "ms_MY",
  ogAlternateLocales: ["en_MY", "zh_MY"],
  keywords: [
    "perkhidmatan rumah KL",
    "perkhidmatan baik pulih rumah Selangor",
    "tukang rumah Kuala Lumpur",
    "senarai perkhidmatan rumah Malaysia"
  ]
});

export default function MsServicesIndexPage() {
  return <LocaleServicesIndex locale="ms" />;
}
