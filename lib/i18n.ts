/**
 * i18n Translation System
 *
 * Trilingual support for EN / MS / ZH.
 * Uses flat message keys with dotted paths for organisation.
 * Server + client compatible.
 */

export type Locale = "en" | "ms" | "zh";

export const SUPPORTED_LOCALES: Locale[] = ["en", "ms", "zh"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ms: "Bahasa Malaysia",
  zh: "中文"
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en-MY",
  ms: "ms-MY",
  zh: "zh-MY"
};

export const LOCALE_SHORT_LABEL: Record<Locale, string> = {
  en: "EN",
  ms: "BM",
  zh: "中文"
};

/**
 * Resolve the locale from a path prefix. Returns null if no locale prefix.
 * Examples:
 *   "/" -> null
 *   "/ms" -> "ms"
 *   "/zh/services" -> "zh"
 *   "/services" -> null
 */
export function localeFromPath(pathname: string): Locale | null {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && (SUPPORTED_LOCALES as string[]).includes(first)) {
    return first as Locale;
  }
  return null;
}

/**
 * Strip a locale prefix from a pathname.
 *   stripLocale("/ms/services", "ms") -> "/services"
 *   stripLocale("/zh", "zh") -> "/"
 *   stripLocale("/", "en") -> "/"
 */
export function stripLocale(pathname: string, locale: Locale): string {
  const prefix = `/${locale}`;
  if (pathname === prefix) return "/";
  if (pathname.startsWith(`${prefix}/`)) {
    return pathname.slice(prefix.length);
  }
  return pathname;
}

/**
 * Add a locale prefix to a path.
 *   withLocale("/services", "ms") -> "/ms/services"
 *   withLocale("/", "ms") -> "/ms"
 *   withLocale("/", "en") -> "/"
 */
export function withLocale(pathname: string, locale: Locale): string {
  if (locale === "en") return pathname === "/" ? "/" : pathname;
  if (pathname === "/") return `/${locale}`;
  return `/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

/**
 * Translation dictionary type — recursive for nested keys.
 * Translation files must be plain JSON-safe structures.
 */
export type MessageDictionary = {
  [key: string]: string | MessageDictionary | MessageDictionary[];
};

/**
 * Resolve a dotted key against a dictionary.
 * Returns the key as a fallback if not found.
 */
export function resolveKey(dict: MessageDictionary, key: string): string {
  const segments = key.split(".");
  let current: string | MessageDictionary | MessageDictionary[] | undefined = dict;
  for (const segment of segments) {
    if (current && typeof current === "object" && !Array.isArray(current)) {
      current = (current as MessageDictionary)[segment];
    } else {
      return key;
    }
  }
  if (typeof current === "string") return current;
  return key;
}

/**
 * Curried translator. Given a locale, returns a `t(key)` function.
 * Falls back to English, then to the key itself, so missing translations
 * never produce empty strings.
 */
export function createTranslator(
  messages: Record<Locale, MessageDictionary>,
  locale: Locale
) {
  const primary = messages[locale] ?? messages.en;
  const fallback = messages.en;
  return function t(key: string, vars?: Record<string, string | number>): string {
    const value = resolveKey(primary, key);
    const finalValue = value === key ? resolveKey(fallback, key) : value;
    if (typeof vars !== "object" || vars === null) return finalValue;
    return Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), finalValue);
  };
}
