"use client";

import * as React from "react";
import { LangProvider, type SupportedLang } from "@/context/lang-context";
import { seedInitialMessages } from "@/hooks/use-translations";
import type { MessageDictionary } from "@/lib/i18n";

export interface ProvidersProps {
  children: React.ReactNode;
  /**
   * Locale of the serving language tree (`(en)` / `(ms)` / `(zh)` root layout).
   * Drives the initial (server-rendered) language state only — the provider
   * still reconciles URL prefix / localStorage / cookie after hydration, so
   * interactive language switching is unchanged.
   */
  initialLang?: SupportedLang;
  /**
   * The tree locale's full message dictionary, imported by the server-side
   * root layout and serialized across the RSC boundary. Seeded into the lazy
   * dictionary cache before children render so every `useTranslations()`
   * consumer resolves the tree language on the VERY FIRST (server) render —
   * previously all chrome prerendered English on /ms and /zh pages, then
   * flipped after hydration (flash), and crawlers never saw the localized UI.
   */
  initialMessages?: MessageDictionary;
}

export function Providers({ children, initialLang = "en", initialMessages }: ProvidersProps) {
  // Seed before ANY child renders. Parents render before children in React,
  // so by the time <Navbar>/<Footer>/… call useTranslations() the cache is
  // already warm — identical result during SSR and hydration (no mismatch).
  // Idempotent reseeds make strict-mode double renders safe.
  if (initialLang !== "en" && initialMessages) {
    seedInitialMessages(initialLang, initialMessages);
  }
  return <LangProvider initialLang={initialLang}>{children}</LangProvider>;
}
