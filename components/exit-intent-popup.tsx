"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";

const STORAGE_KEY = "klservisrumah-exit-popup-dismissed-at";
const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

/**
 * Desktop exit-intent modal.
 *
 * Accessibility: a `role="dialog"`/`aria-modal` surface must behave like a
 * dialog — initial focus inside, Escape to close, Tab trapped within, and
 * focus restored to the previously-focused element on dismiss. The previous
 * implementation opened a modal with none of those behaviours, so keyboard
 * users could get stuck inside it (no Escape) or lose their place entirely.
 */
export function ExitIntentPopup() {
  const t = useTranslations();
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const dismiss = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setOpen(false);
  }, []);

  // Open trigger: 30s timer + mouse-leave-towards-top (desktop only).
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

  // Focus management + Escape + focus trap while the dialog is open.
  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    // Move focus into the dialog (close button first — the only non-link
    // control and the natural escape hatch for keyboard users).
    const initialFocus = dialog?.querySelector<HTMLElement>("[data-autofocus]") ?? dialog;
    initialFocus?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;

      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.offsetParent !== null);

      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] hidden items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm md:flex"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
      aria-describedby="exit-popup-desc"
    >
      <div ref={dialogRef} className="relative max-w-md rounded-3xl bg-white p-7 shadow-2xl">
        <button
          onClick={dismiss}
          data-autofocus
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100"
          aria-label={t("exitPopup.closeAria")}
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex flex-col gap-4 pr-8">
          <span className="w-fit rounded-full bg-[#E0F2FE] px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">{t("exitPopup.badge")}</span>
          <h2 id="exit-popup-title" className="text-2xl font-extrabold text-[#075985]">{t("exitPopup.title")}</h2>
          <p id="exit-popup-desc" className="text-sm font-semibold leading-relaxed text-[#475569]">
            {t("exitPopup.body")}
          </p>
          <a
            href={getWhatsAppLink({ service: t("exitPopup.whatsappService"), lang: lang })}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick({ page: "exit_intent_popup" })}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white"
          >
            <MessageCircle className="h-4 w-4" /> {t("exitPopup.cta")}
          </a>
        </div>
      </div>
    </div>
  );
}
