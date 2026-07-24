"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { type SupportedLang, useLang } from "@/context/lang-context";
import { LOCALE_LABELS, type Locale, stripLocale, withLocale } from "@/lib/i18n";
import { useTranslations } from "@/hooks/use-translations";

const supportedLangs: SupportedLang[] = ["en", "ms", "zh"];

function stripLang(pathname: string): string {
  for (const code of supportedLangs) {
    if (pathname === `/${code}`) return "/";
    if (pathname.startsWith(`/${code}/`)) {
      return pathname.slice(code.length + 1) || "/";
    }
  }
  return pathname;
}

function pushWithLang(pathname: string, nextLang: SupportedLang): string {
  const cleanPath = stripLang(pathname);
  if (nextLang === "en") return cleanPath;
  return `/${nextLang}${cleanPath === "/" ? "" : cleanPath}`;
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const pathname = usePathname() || "/";
  const router = useRouter();
  const t = useTranslations();

  const handleChange = (nextLang: SupportedLang) => {
    setLang(nextLang);
    const target = pushWithLang(pathname, nextLang);
    router.push(target);
  };

  return (
    <label className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-xs font-bold text-[#075985] shadow-xs">
      <Languages className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
      <span className="sr-only">{t("languageSwitcher.label")}</span>
      <select
        value={lang}
        onChange={(event) => handleChange(event.target.value as SupportedLang)}
        className="bg-transparent outline-none cursor-pointer"
        aria-label={t("languageSwitcher.label")}
      >
        {supportedLangs.map((code) => (
          <option key={code} value={code}>{LOCALE_LABELS[code as Locale]}</option>
        ))}
      </select>
    </label>
  );
}

// Re-export helper for advanced callers
export { stripLocale, withLocale };
