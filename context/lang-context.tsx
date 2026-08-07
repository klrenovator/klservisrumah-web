"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type SupportedLang = "en" | "ms" | "zh";

const langLabels: Record<SupportedLang, string> = {
  en: "EN",
  ms: "BM",
  zh: "中文"
};

const LangContext = createContext<{
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  labels: typeof langLabels;
}>({
  lang: "en",
  setLang: () => {},
  labels: langLabels
});

/** Detect locale from URL path prefix (e.g. /ms/services → "ms") */
function detectLocaleFromPath(): SupportedLang | null {
  if (typeof window === "undefined") return null;
  const segments = window.location.pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first === "ms" || first === "zh") return first;
  return null;
}

export function LangProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  /**
   * Tree-native locale passed by the per-language root layouts (`(en)`/`(ms)`/`(zh)`).
   * Only the INITIAL value is affected: the effect below still reconciles the
   * URL prefix / localStorage / cookie after hydration, so client-side language
   * switching behaves exactly as before. Without this, every page prerendered
   * "en" chrome, and visitors (plus crawlers, which never run the effect)
   * received an English navbar/footer on Malay and Chinese pages.
   */
  initialLang?: SupportedLang;
}) {
  const [lang, setLangState] = useState<SupportedLang>(initialLang);

  useEffect(() => {
    // Priority 1: URL path prefix (for SEO landing pages at /ms, /zh)
    const fromUrl = detectLocaleFromPath();
    // Priority 2: localStorage
    const stored = window.localStorage.getItem("klservisrumah-lang") as SupportedLang | null;
    // Priority 3: cookie
    const cookieMatch = document.cookie.match(/klservisrumah-lang=(en|ms|zh)/);
    const fromCookie = cookieMatch ? cookieMatch[1] as SupportedLang : null;

    const resolved: SupportedLang = fromUrl || (stored === "en" || stored === "ms" || stored === "zh" ? stored : null) || fromCookie || "en";

    setLangState(resolved);
    document.documentElement.lang = resolved === "en" ? "en-MY" : resolved === "ms" ? "ms-MY" : "zh-MY";
  }, []);

  const setLang = (nextLang: SupportedLang) => {
    setLangState(nextLang);
    window.localStorage.setItem("klservisrumah-lang", nextLang);
    document.cookie = `klservisrumah-lang=${nextLang}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = nextLang === "en" ? "en-MY" : nextLang === "ms" ? "ms-MY" : "zh-MY";
  };

  const value = useMemo(() => ({ lang, setLang, labels: langLabels }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
