import type { Metadata } from "next";
import { LocaleScaffold } from "@/components/locale-scaffold";
import { optimizeTitle, optimizeDescription, buildAlternates } from "@/lib/seo-meta";

export const metadata: Metadata = {
  // Route through the shared optimizers so this page obeys the same
  // title/description budgets as the rest of the site.
  title: optimizeTitle("欢迎来到 KL Servis Rumah"),
  description: optimizeDescription(
    "我们的网站全面支持英语、马来语和中文。请使用页面顶部的语言切换器更改语言——所有页面、价格和服务信息均提供三种语言版本。"
  ),
  // These scaffold pages exist only so shared /ms and /zh links resolve; they
  // auto-redirect to "/". They are noindex AND canonical to "/" so they never
  // compete with the homepage in the index. They must also NOT emit hreflang:
  // canonical overrides hreflang, and a self-referencing hreflang pointing at
  // "/" would falsely claim that "/ms" and "/zh" are localised siblings of the
  // homepage (they are redirect stubs, not real locale URLs).
  robots: { index: false, follow: true },
  alternates: buildAlternates("/", true)
};

export default function ChineseScaffoldPage() {
  return <LocaleScaffold lang="zh" />;
}
