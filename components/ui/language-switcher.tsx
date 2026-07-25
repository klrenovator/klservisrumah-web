"use client";

import React from "react";
import { type SupportedLang, useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";

const LANG_OPTIONS: { code: SupportedLang; short: string; full: string }[] = [
  { code: "en", short: "EN", full: "English" },
  { code: "ms", short: "BM", full: "Bahasa Malaysia" },
  { code: "zh", short: "中", full: "中文" }
];

/**
 * Trilingual language switcher — klrenovator.com-style segmented pill
 * (EN | BM | 中) with the active locale highlighted.
 *
 * Language switching is purely client-side via React context + localStorage.
 * URLs remain the same (no locale prefix) to ensure all routes resolve correctly.
 * Locale-specific canonical URLs are handled via hreflang meta tags for SEO.
 */
export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const t = useTranslations();

  const handleChange = (nextLang: SupportedLang) => {
    if (nextLang === lang) return;
    setLang(nextLang);
  };

  return (
    <div
      role="group"
      aria-label={t("languageSwitcher.label")}
      className="inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5 shadow-xs"
    >
      {LANG_OPTIONS.map((option) => {
        const active = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => handleChange(option.code)}
            aria-pressed={active}
            aria-label={option.full}
            title={option.full}
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold leading-5 transition-colors ${
              active
                ? "bg-[#0284C7] text-white shadow-sm"
                : "text-[#475569] hover:bg-slate-50 hover:text-[#075985]"
            }`}
          >
            {option.short}
          </button>
        );
      })}
    </div>
  );
}

// Re-export helper for advanced callers
export { stripLocale, withLocale } from "@/lib/i18n";
