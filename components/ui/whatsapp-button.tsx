"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useTranslations } from "@/hooks/use-translations";

/**
 * WhatsApp dispatch desk — compact floating bubble that expands into the
 * dispatch card on click. Hidden on mobile (the sticky WhatsApp/Call bar
 * already covers that surface) so it never overlaps page content.
 *
 * Uses a plain CSS transition instead of framer-motion for the open/close
 * animation — this removes ~50 kB from every page's client bundle since
 * framer-motion was only imported here.
 */
export function WhatsAppButton() {
  const link = getWhatsAppLink();
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3">
      <div
        aria-hidden={!open}
        className={`bg-white rounded-2xl p-4 shadow-[0_10px_40px_rgba(2,31,68,0.10)] border border-slate-100 flex flex-col gap-2.5 max-w-[280px] transform-gpu transition-all duration-200 ease-out origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-bold text-[#075985] tracking-wide uppercase">
              {t("whatsappDesk.title")}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t("whatsappDesk.close")}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-50 hover:text-[#075985] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-xs text-[#475569] leading-normal font-medium">
          {t("whatsappDesk.body")}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all duration-200 gap-2"
        >
          <MessageSquare className="w-4 h-4" aria-hidden="true" />
          <span>{t("whatsappDesk.cta")}</span>
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? t("whatsappDesk.close") : t("whatsappDesk.aria")}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#128C7E]"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageSquare className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
