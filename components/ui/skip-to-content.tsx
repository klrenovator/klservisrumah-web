"use client";

import { useTranslations } from "@/hooks/use-translations";

/**
 * Accessibility helper — renders a "Skip to main content" link that becomes
 * visible only when focused. Helps keyboard and screen-reader users bypass
 * the navbar + sticky bars and jump straight to the page content.
 *
 * WCAG 2.1 Success Criterion 2.4.1 (Bypass Blocks) — Level A.
 */
export function SkipToContentLink() {
  const t = useTranslations();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[#075985] focus:px-5 focus:py-3 focus:text-sm focus:font-extrabold focus:text-white focus:shadow-2xl focus:outline-none"
    >
      {t("a11y.skipToContent")}
    </a>
  );
}
