"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

/** A deliberately focused mobile navigation drawer. Service discovery lives in
 * the Services dropdown; this drawer only contains primary destinations. */
const MAIN_PAGES = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/areas", key: "nav.areas" },
  { href: "/faq", key: "nav.faq" },
  { href: "/blog", key: "nav.blog" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" }
];

export function AllPagesMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return <>
    <button type="button" onClick={() => setOpen(true)} aria-label={t("menu.aria")} aria-expanded={open}
      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#075985] bg-[#075985] text-white shadow-[0_8px_22px_rgba(7,89,133,0.28)] ring-1 ring-sky-200/60 transition hover:bg-[#0369A1] hover:shadow-[0_10px_26px_rgba(7,89,133,0.34)] focus-visible:outline-[#0EA5E9]">
      <Menu className="h-6 w-6 stroke-[2.75]" />
    </button>
    {open && <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label={t("menu.main")}>
      <button className="absolute inset-0 cursor-default bg-slate-950/35 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label={t("menu.close")} />
      <aside className="absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div><p className="text-base font-extrabold text-[#075985]">{t("menu.button")}</p><p className="mt-0.5 text-xs text-slate-500">{t("common.siteName")}</p></div>
          <button type="button" onClick={() => setOpen(false)} aria-label={t("menu.close")} className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50"><X className="h-5 w-5" /></button>
        </div>
        <nav className="flex-1 px-4 py-5" aria-label={t("menu.main")}>
          <p className="px-3 pb-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{t("menu.main")}</p>
          <div className="space-y-1">
            {MAIN_PAGES.map((page) => <Link key={page.href} href={page.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-sky-50 hover:text-[#0284C7]">
              {t(page.key)} <ChevronRight className="h-4 w-4 text-sky-500" />
            </Link>)}
          </div>
        </nav>
      </aside>
    </div>}
  </>;
}
