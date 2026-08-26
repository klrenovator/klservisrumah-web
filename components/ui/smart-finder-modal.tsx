"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { SmartServiceFinder } from "@/components/ui/smart-service-finder";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";

export function SmartFinderModal() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const t = useTranslations();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const label =
    lang === "ms"
      ? "Cari Servis"
      : lang === "zh"
      ? "智能搜索"
      : "Smart Finder";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Move focus into the dialog on open and restore it to the trigger on
  // close — without this a keyboard user opening the modal stayed stranded
  // at the trigger button while the panel appeared elsewhere on screen.
  const hasOpened = useRef(false);
  useEffect(() => {
    if (open) {
      hasOpened.current = true;
      panelRef.current?.focus();
    } else if (hasOpened.current) {
      triggerRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-xl border border-sky-500/20 bg-sky-50 px-2.5 py-2 text-xs font-black text-[#075985] shadow-sm hover:border-sky-500 hover:bg-sky-100 transition-all min-[430px]:px-3"
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <Search className="h-3.5 w-3.5 text-[#0EA5E9]" />
        {/* Label from sm (640px) up only — between 500px and 639px the
            expanded button plus the language switcher and WhatsApp pushed
            the hamburger menu off the right edge of the viewport. */}
        <span className="hidden sm:inline">{label}</span>
        <span className="hidden md:inline-flex rounded border border-sky-200 bg-white px-1 text-[9px] font-bold text-[#0EA5E9]">
          ⌘K
        </span>
      </button>

      {/* Modal Backdrop & Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/80 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-150">
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            className="relative w-full max-w-5xl my-8 rounded-3xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-700 animate-in zoom-in-95 duration-150 focus:outline-none"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label={t("smartFinder.closeAria")}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Content */}
            <div className="max-h-[85vh] overflow-y-auto">
              <SmartServiceFinder />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
