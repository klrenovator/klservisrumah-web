"use client";

import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/context/lang-context";
import { type Locale, type MessageDictionary, createTranslator } from "@/lib/i18n";
import enMessages from "@/messages/en.json";

const englishMessages = enMessages as MessageDictionary;

const messageCache: Partial<Record<Locale, MessageDictionary>> = {
  en: englishMessages,
};

const messageLoaders: Record<Exclude<Locale, "en">, () => Promise<MessageDictionary>> = {
  ms: () => import("@/messages/ms.json").then((module) => module.default as MessageDictionary),
  zh: () => import("@/messages/zh.json").then((module) => module.default as MessageDictionary),
};

async function loadMessages(locale: Exclude<Locale, "en">) {
  if (messageCache[locale]) return messageCache[locale] as MessageDictionary;
  const messages = await messageLoaders[locale]();
  messageCache[locale] = messages;
  return messages;
}

/**
 * Client-side translation hook.
 *
 * English ships in the main bundle because it is the default locale and the one
 * Lighthouse audits on `/`. Bahasa Malaysia and Chinese are lazy-loaded only
 * when the user actually switches language, which keeps the first-load JS for
 * every page substantially lighter without changing the translation API.
 */
export function useTranslations() {
  const { lang } = useLang();
  const [activeMessages, setActiveMessages] = useState<MessageDictionary>(() => messageCache[lang] ?? englishMessages);

  useEffect(() => {
    let cancelled = false;

    if (lang === "en") {
      setActiveMessages(englishMessages);
      return;
    }

    const cached = messageCache[lang];
    if (cached) {
      setActiveMessages(cached);
      return;
    }

    setActiveMessages(englishMessages);
    loadMessages(lang).then((messages) => {
      if (!cancelled) setActiveMessages(messages);
    });

    return () => {
      cancelled = true;
    };
  }, [lang]);

  const dictionaries = useMemo<Record<Locale, MessageDictionary>>(
    () => ({
      en: englishMessages,
      ms: lang === "ms" ? activeMessages : messageCache.ms ?? englishMessages,
      zh: lang === "zh" ? activeMessages : messageCache.zh ?? englishMessages,
    }),
    [lang, activeMessages]
  );

  return useMemo(() => createTranslator(dictionaries, lang), [dictionaries, lang]);
}
