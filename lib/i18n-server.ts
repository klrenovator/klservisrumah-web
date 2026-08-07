import type { Locale, MessageDictionary } from "./i18n";
import { createTranslator } from "./i18n";
import enMessages from "@/messages/en.json";
import msMessages from "@/messages/ms.json";
import zhMessages from "@/messages/zh.json";

/**
 * Server-side translator factory for the fully-localised, indexable pages
 * (the real `/ms/*` and `/zh/*` trees: tools, blog, FAQ, and now services).
 *
 * Client components use `useTranslations()`, which lazy-loads the MS/ZH
 * dictionaries after hydration. Server components can't do that — they must
 * render the correct language in the initial HTML for crawlers. This module
 * statically imports all three dictionaries (they are plain JSON, already
 * bundled for the client anyway) and returns the same curried `t()` used
 * everywhere, so section chrome keys never drift between the client and
 * server renderers.
 */
const dictionaries: Record<Locale, MessageDictionary> = {
  en: enMessages as MessageDictionary,
  ms: msMessages as MessageDictionary,
  zh: zhMessages as MessageDictionary
};

/** Translator bound to one locale's full site dictionary (server-safe). */
export function getServerTranslator(locale: Locale) {
  return createTranslator(dictionaries, locale);
}
