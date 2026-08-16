"use client";

import { useEffect } from "react";
import { useLang } from "@/context/lang-context";
import { usePathname, useRouter } from "next/navigation";
import { lightweightLocalizedBlogPath } from "@/lib/blog-paths";

/**
 * Redirects an English article to its localized URL when the visitor changes
 * language. Slugs arrive from the server route, so article bodies and the full
 * translation registry never enter this browser bundle.
 */
export function BlogPostLocaleRedirect({
  localizedSlugs
}: {
  localizedSlugs: { ms?: string; zh?: string };
}) {
  const { lang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (lang === "en") return;
    const slug = localizedSlugs[lang];
    if (!slug) return;
    const destination = lightweightLocalizedBlogPath(lang, slug);
    if (destination !== pathname) router.replace(destination);
  }, [lang, localizedSlugs, pathname, router]);

  return null;
}
