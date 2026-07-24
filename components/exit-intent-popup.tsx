"use client";

import React, { useEffect, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

const STORAGE_KEY = "klservisrumah-exit-popup-dismissed-at";
const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissedAt = Number(window.localStorage.getItem(STORAGE_KEY) || 0);
    if (Date.now() - dismissedAt < THIRTY_DAYS) return;

    const timeoutId = window.setTimeout(() => setOpen(true), 30000);
    const handleMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 8) setOpen(true);
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] hidden items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm md:flex" role="dialog" aria-modal="true">
      <div className="relative max-w-md rounded-3xl bg-white p-7 shadow-2xl">
        <button onClick={dismiss} className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100" aria-label="Close popup">
          <X className="h-4 w-4" />
        </button>
        <div className="flex flex-col gap-4 pr-8">
          <span className="w-fit rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">Before you go</span>
          <h2 className="text-2xl font-extrabold text-[#075985]">Get a transparent market-rate quote first</h2>
          <p className="text-sm font-semibold leading-relaxed text-[#475569]">
            Send photos and your area on WhatsApp. We will confirm scope, price factors, and available service slots before any work begins.
          </p>
          <a
            href={getWhatsAppLink({ service: "market-rate home service quote" })}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ page: "exit_intent_popup" })}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp for Quote
          </a>
        </div>
      </div>
    </div>
  );
}
