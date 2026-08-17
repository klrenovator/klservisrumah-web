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
 *
 * THIS IS THE ONLY PLACE A LINK-CLICK LEAD EVENT IS EMITTED.
 * ---------------------------------------------------------
 * Components must NOT also call `trackWhatsAppClick` / `trackPhoneCall` /
 * `trackEmailClick` from an anchor's `onClick`: this listener runs on the
 * document in the capture phase, so it fires for those anchors too and the
 * click is counted twice. Ten of the site's most prominent CTAs — the navbar
 * button, the sticky mobile bar, the sticky book button, the exit-intent
 * popup, the smart-finder cards and the estimator results — were double
 * reporting, roughly doubling `whatsapp_click` and `phone_call` in GA4 and
 * halving every cost-per-lead figure derived from them.
 *
 * To attach richer context to a CTA, annotate the anchor instead:
 *
 *   data-analytics-page="sticky_mobile_bar"
 *   data-analytics-service="Bathroom waterproofing"
 *   data-analytics-label="Book on WhatsApp"
 *
 * An explicit `track*` call remains correct for conversions that are NOT an
 * anchor click — e.g. the booking form's `window.open()` handoff.
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
      // `data-analytics-*` may sit on the anchor or on an ancestor wrapper, so
      // a whole CTA block can be labelled once.
      const scope = anchor.closest<HTMLElement>("[data-analytics-page],[data-analytics-service]");
      const context: Record<string, string | undefined> = {
        page: scope?.dataset.analyticsPage || pathname,
        placement: label,
        ...(scope?.dataset.analyticsService ? { service: scope.dataset.analyticsService } : {})
      };

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
