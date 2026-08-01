"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useTranslations } from "@/hooks/use-translations";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations();

  useEffect(() => {
    console.error(error);
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
            className="rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white"
          >
            {t("error.tryAgain")}
          </button>
          <Link
            href="/services"
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-extrabold text-[#075985]"
          >
            {t("error.servicesCta")}
          </Link>
          <a
            href={getWhatsAppLink({ service: "website issue report" })}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white"
          >
            {t("error.whatsappReport")}
          </a>
        </div>
      </div>
    </section>
  );
}
