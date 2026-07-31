"use client";

import { useEffect } from "react";
import { useLang, type SupportedLang } from "@/context/lang-context";
import { usePathname, useRouter } from "next/navigation";

/**
 * Maps English hub paths to their localised counterparts.
 * When a visitor lands on the English version of a hub page but their
 * preferred language (from cookie / localStorage) is NOT English, this
 * component silently redirects them to the fully-translated hub so the
 * entire page — including server-rendered data — changes language.
 */
const HUB_ROUTES: Record<string, Record<SupportedLang, string>> = {
  "/blog": { en: "/blog", ms: "/ms/blog", zh: "/zh/bo-ke" },
  "/faq": { en: "/faq", ms: "/ms/soalan-lazim", zh: "/zh/chang-jian-wen-ti" },
};

export function LocaleHubRedirect() {
  const { lang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (lang === "en") return; // already on the correct English page

    const route = HUB_ROUTES[pathname];
    if (!route) return;

    const destination = route[lang];
    if (destination && destination !== pathname) {
      router.replace(destination);
    }
  }, [lang, pathname, router]);

  return null;
}
