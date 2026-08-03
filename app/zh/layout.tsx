import type { ReactNode } from "react";
import { LocalizedHtmlLang } from "@/components/localized-html-lang";

/**
 * Layout for the real Simplified Chinese subtree (`/zh/gongju`, `/zh/bo-ke`,
 * `/zh/chang-jian-wen-ti`). These are fully-localised, indexable pages — the
 * localised trees the middleware lets through untouched — so we correct the
 * document language to `zh-MY` on hydration via LocalizedHtmlLang (see that
 * component for why this can't be done in the root layout).
 */
export default function ChineseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocalizedHtmlLang lang="zh-MY" />
      {children}
    </>
  );
}
