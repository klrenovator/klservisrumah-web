"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  trackEmailClick,
  trackEvent,
  trackFormSubmit,
  trackPhoneCall,
  trackSocialClick,
  trackWhatsAppClick
} from "@/lib/analytics";

function placement(anchor: HTMLAnchorElement) {
  return (
    anchor.dataset.analyticsLabel ||
    anchor.getAttribute("aria-label") ||
    anchor.textContent ||
    anchor.closest("section")?.getAttribute("aria-label") ||
    "link"
  ).trim().replace(/\s+/g, " ").slice(0, 80);
}

/**
 * Delegated site-wide lead tracking. New WhatsApp, phone, email, social and
 * marked form actions are covered automatically without adding handlers to
 * every page template.
 */
export function ConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      const href = anchor.href;
      const label = placement(anchor);
      const context = { page: pathname, placement: label };

      if (/^(https?:\/\/)?(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/i.test(anchor.getAttribute("href") ?? "")) {
        trackWhatsAppClick(context);
      } else if (href.startsWith("tel:")) {
        trackPhoneCall(context);
      } else if (href.startsWith("mailto:")) {
        trackEmailClick(context);
      } else if (/facebook\.com/i.test(href)) {
        trackSocialClick({ ...context, network: "facebook" });
      } else if (/instagram\.com/i.test(href)) {
        trackSocialClick({ ...context, network: "instagram" });
      } else if (anchor.dataset.leadAction) {
        trackEvent({
          action: anchor.dataset.leadAction,
          category: "lead",
          label,
          params: context
        });
      }
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.dataset.leadForm) return;
      const formData = new FormData(form);
      trackFormSubmit({
        page: pathname,
        service: String(formData.get("service") ?? form.dataset.service ?? "quote"),
        area: String(formData.get("area") ?? "") || undefined,
        placement: form.dataset.leadForm
      });
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, [pathname]);

  return null;
}
