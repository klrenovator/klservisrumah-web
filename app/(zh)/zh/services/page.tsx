import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import { LocaleServicesIndex, localizedServicesIndexLanguageUrls } from "@/components/sections/locale-services-index";

export const metadata = buildMetadata({
  title: "吉隆坡与雪兰莪油漆、天花板与家居服务",
  description:
    "浏览吉隆坡与雪兰莪的油漆、天花板与隔墙、水管、防水、家居杂工及其他维修服务，并查看服务范围与价格。",
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
