import React from "react";
import { buildMetadata } from "@/lib/seo-meta";
import {
  LocaleProblemsIndex,
  localizedProblemsIndexLanguageUrls
} from "@/components/sections/locale-problems-index";

export const metadata = buildMetadata({
  title: "吉隆坡与雪兰莪常见家居问题 — 成因与维修费用",
  description:
    "诊断马来西亚住宅常见的油漆、水管、天花、防水与杂工问题，了解真实成因、专业修复方式以及吉隆坡与雪兰莪的维修费用范围。",
  path: "/zh/problems",
  languageUrls: localizedProblemsIndexLanguageUrls(),
  ogLocale: "zh_MY",
  ogAlternateLocales: ["en_MY", "ms_MY"],
  keywords: [
    "马来西亚家居问题",
    "吉隆坡天花漏水",
    "雪兰莪墙面脱漆",
    "家居问题诊断"
  ]
});

export default function ZhProblemsIndexPage() {
  return <LocaleProblemsIndex locale="zh" />;
}
