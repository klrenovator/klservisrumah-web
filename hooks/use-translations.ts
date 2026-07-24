"use client";

import { useMemo } from "react";
import { useLang } from "@/context/lang-context";
import { type Locale, type MessageDictionary, createTranslator } from "@/lib/i18n";
import enMessages from "@/messages/en.json";
import msMessages from "@/messages/ms.json";
import zhMessages from "@/messages/zh.json";

const clientMessages: Record<Locale, MessageDictionary> = {
  en: enMessages as MessageDictionary,
  ms: msMessages as MessageDictionary,
  zh: zhMessages as MessageDictionary
};

/**
 * Client-side translation hook.
 * Returns a `t(key, vars?)` function bound to the current locale.
 * Falls back to English, then to the key itself.
 *
 * Usage:
 *   const t = useTranslations();
 *   <h1>{t("home.hero.heading1")}</h1>
 */
export function useTranslations() {
  const { lang } = useLang();
  return useMemo(() => createTranslator(clientMessages, lang), [lang]);
}
