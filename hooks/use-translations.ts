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
 * Seed the lazy dictionary cache with a tree-native dictionary during render.
 *
 * The per-language root layouts pass their locale's dictionary down through
 * `<Providers initialMessages={…}>`, which calls this BEFORE any child renders.
 * That makes the very first render (server prerender AND client hydration)
 * resolve `messageCache[lang]` synchronously, so the site chrome (navbar,
 * footer, CTAs) is server-rendered in the tree's language — no post-hydration
 * English flash, and crawlers never see English chrome on /ms or /zh pages.
 *
 * Idempotent: the first seeded value wins and reseeds are no-ops, so React
 * strict-mode double renders (and multiple subtrees seeding the same locale)
 * are safe.
 */
export function seedInitialMessages(locale: Locale, messages: MessageDictionary) {
  if (locale !== "en" && !messageCache[locale]) {
    messageCache[locale] = messages;
  }
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
