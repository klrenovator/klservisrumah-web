"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useTranslations } from "@/hooks/use-translations";
import type { Locale } from "@/lib/i18n";

/**
 * ErrorPage — shared client error boundary UI for all three language trees.
 *
 * Copy is resolved through the language context (`error.*` dictionary keys
 * exist in EN/MS/ZH), so the same component renders correctly in every tree.
 * The wrappers (`(en)/error.tsx`, `(ms)/ms/error.tsx`, `(zh)/zh/error.tsx`)
 * pass the tree's language and localized services URL.
 */
export function ErrorPage({
  error,
  reset,
  lang = "en",
  servicesHref = "/services",
}: {
  error: Error & { digest?: string };
  reset: () => void;
  lang?: Locale;
  servicesHref?: string;
}) {
  const t = useTranslations();

  useEffect(() => {
    console.error(error);
    // Production observability: persist a sanitized copy to the server-side
    // error log (see /api/error-log). Previously the console was the ONLY
    // place a client error ever surfaced.
    try {
      const payload = JSON.stringify({
        source: "error-boundary",
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        pathname: window.location.pathname
      });
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/error-log", blob);
    } catch {
      // Reporting must never itself throw inside an error boundary.
    }
  }, [error]);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <span className="rounded-full bg-rose-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-rose-600">
          {t("error.badge")}
        </span>
        <h1 className="text-4xl font-extrabold text-[#075985]">{t("error.title")}</h1>
        <p className="text-base font-semibold leading-relaxed text-[#475569]">
          {t("error.body")}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white hover:bg-[#0369A1] transition-colors"
          >
            {t("error.tryAgain")}
          </button>
          <Link
            href={servicesHref}
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-extrabold text-[#075985] hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors"
          >
            {t("error.servicesCta")}
          </Link>
          <a
            href={getWhatsAppLink({ service: "website issue report", lang })}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#25D366] hover:bg-[#128C7E] px-5 py-3 text-sm font-extrabold text-white transition-colors"
          >
            {t("error.whatsappReport")}
          </a>
        </div>
      </div>
    </section>
  );
}
