"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { type SupportedLang, useLang } from "@/context/lang-context";

function stripLang(pathname: string) {
  return pathname.replace(/^\/(ms|zh)(?=\/|$)/, "") || "/";
}

export function LanguageSwitcher() {
  const { lang, setLang, labels } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (nextLang: SupportedLang) => {
    setLang(nextLang);
    const cleanPath = stripLang(pathname);
    if (nextLang === "en") {
      router.push(cleanPath);
    } else {
      router.push(`/${nextLang}${cleanPath === "/" ? "" : cleanPath}`);
    }
  };

  return (
    <label className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-xs font-bold text-[#075985] shadow-xs">
      <Languages className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
      <span className="sr-only">Select language</span>
      <select
        value={lang}
        onChange={(event) => handleChange(event.target.value as SupportedLang)}
        className="bg-transparent outline-none cursor-pointer"
        aria-label="Select site language"
      >
        {(Object.keys(labels) as SupportedLang[]).map((code) => (
          <option key={code} value={code}>{labels[code]}</option>
        ))}
      </select>
    </label>
  );
}
