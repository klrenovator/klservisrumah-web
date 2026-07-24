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

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<SupportedLang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("klservisrumah-lang") as SupportedLang | null;
    if (stored === "en" || stored === "ms" || stored === "zh") {
      setLangState(stored);
      document.documentElement.lang = stored === "en" ? "en-MY" : stored === "ms" ? "ms-MY" : "zh-MY";
    }
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
