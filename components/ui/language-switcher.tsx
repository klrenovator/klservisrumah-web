"use client";

import React from "react";
import { type SupportedLang, useLang } from "@/context/lang-context";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const router = useRouter();

  // These hubs have real translated server-rendered pages. Keeping the user
  // on /blog or /faq only changed the small client widgets, while the large
  // article/FAQ directory stayed English. Navigate to the matching localized
  // hub so the complete page (including its data) changes language.
  const localizedHub = (nextLang: SupportedLang): string | null => {
    const base = pathname.replace(/^\/(ms|zh)(?=\/|$)/, "") || "/";
    const hubs: Record<string, Record<SupportedLang, string>> = {
      "/blog": { en: "/blog", ms: "/ms/blog", zh: "/zh/bo-ke" },
      "/faq": { en: "/faq", ms: "/ms/soalan-lazim", zh: "/zh/chang-jian-wen-ti" },
    };
    return hubs[base]?.[nextLang] ?? null;
  };

  const handleChange = (nextLang: SupportedLang) => {
    if (nextLang === lang) return;
    setLang(nextLang);
    const destination = localizedHub(nextLang);
    if (destination && destination !== pathname) router.push(destination);
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
            aria-label={`${option.full} language`}
            title={option.full}
            className={`min-h-9 min-w-9 rounded-full px-2 py-1.5 text-[11px] min-[430px]:px-3 min-[430px]:text-xs font-bold leading-5 transition-colors ${
              active
                ? "bg-[#075985] text-white shadow-sm"
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
