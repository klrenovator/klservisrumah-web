import type { ReactNode } from "react";
import { LocalizedHtmlLang } from "@/components/localized-html-lang";

/**
 * Layout for the real Bahasa Malaysia subtree (`/ms/alatan`, `/ms/blog`,
 * `/ms/soalan-lazim`). These are fully-localised, indexable pages — the
 * localised trees the middleware lets through untouched — so we correct the
 * document language to `ms-MY` on hydration via LocalizedHtmlLang (see that
 * component for why this can't be done in the root layout).
 */
export default function MalayLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocalizedHtmlLang lang="ms-MY" />
      {children}
    </>
  );
}
