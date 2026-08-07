import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { LocaleServicesIndex, localizedServicesIndexLanguageUrls } from "@/components/sections/locale-services-index";

export const metadata = buildMetadata({
  title: "Perkhidmatan Rumah di Kuala Lumpur & Selangor",
  description:
    "Senarai penuh perkhidmatan rumah KL Servis Rumah di KL & Selangor — pengecatan, paip, siling, kalis air, elektrik, pembersihan dan banyak lagi. Harga tetap dari RM 450, jaminan bertulis.",
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
