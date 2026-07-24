import enMessages from "@/messages/en.json";
import msMessages from "@/messages/ms.json";
import zhMessages from "@/messages/zh.json";
import { type Locale, type MessageDictionary, createTranslator } from "@/lib/i18n";

const messagesByLocale: Record<Locale, MessageDictionary> = {
  en: enMessages as MessageDictionary,
  ms: msMessages as MessageDictionary,
  zh: zhMessages as MessageDictionary
};

export function getTranslator(locale: Locale) {
  return createTranslator(messagesByLocale, locale);
}

export { messagesByLocale };
