import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { LocaleServicesIndex, localizedServicesIndexLanguageUrls } from "@/components/sections/locale-services-index";

export const metadata = buildMetadata({
  title: "吉隆坡与雪兰莪家居服务",
  description:
    "KL Servis Rumah 在吉隆坡与雪兰莪提供的全部家居服务——油漆、水管、天花板、防水、电路、清洁等。固定价格从 RM 450 起，附书面保修。",
  path: "/zh/services",
  languageUrls: localizedServicesIndexLanguageUrls(),
  ogLocale: "zh_MY",
  ogAlternateLocales: ["en_MY", "ms_MY"],
  keywords: [
    "吉隆坡家居服务",
    "雪兰莪维修服务",
    "马来西亚房屋翻新",
    "吉隆坡杂工服务"
  ]
});

export default function ZhServicesIndexPage() {
  return <LocaleServicesIndex locale="zh" />;
}
