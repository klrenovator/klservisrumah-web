"use client";

import { useEffect } from "react";
import { useLang } from "@/context/lang-context";
import { usePathname, useRouter } from "next/navigation";
import { blogI18n, localizedBlogPath } from "@/config/blog-i18n";

/**
 * Reverse-lookup map: English slug → blogI18n entry.
 * Built once at module scope so every render just does a fast object lookup.
 */
const I18N_BY_EN_SLUG: Record<string, (typeof blogI18n)[string]> = {};
for (const [enSlug, entry] of Object.entries(blogI18n)) {
  I18N_BY_EN_SLUG[enSlug] = entry;
}

/**
 * When a visitor lands on the English blog post page (`/blog/<slug>`) but
 * their preferred language is Malay or Chinese, silently redirect them to
 * the fully-translated article at `/ms/blog/<ms-slug>` or `/zh/bo-ke/<zh-slug>`.
 *
 * Each article has a locale-specific slug, so we look it up from the
 * `blogI18n` registry. If no translation exists for the post, the visitor
 * stays on the English page (no-op).
 */
export function BlogPostLocaleRedirect({ englishSlug }: { englishSlug: string }) {
  const { lang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (lang === "en") return;

    const i18n = I18N_BY_EN_SLUG[englishSlug];
    if (!i18n) return;

    const localeEntry = i18n[lang as "ms" | "zh"];
    if (!localeEntry) return;

    const destination = localizedBlogPath(lang as "ms" | "zh", localeEntry.slug);
    if (destination && destination !== pathname) {
      router.replace(destination);
    }
  }, [lang, pathname, router, englishSlug]);

  return null;
}
