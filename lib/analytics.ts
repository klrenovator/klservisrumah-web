type AnalyticsEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  params?: Record<string, string | number | boolean | undefined>;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent({ action, category = "engagement", label, value, params = {} }: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: action, event_category: category, event_label: label, value, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", action, { event_category: category, event_label: label, value, ...params });
  }
}

export function trackWhatsAppClick(context?: Record<string, string | undefined>) {
  trackEvent({ action: "whatsapp_click", category: "lead", label: context?.service || context?.page || "general", params: context });
}

export function trackPhoneCall(context?: Record<string, string | undefined>) {
  trackEvent({ action: "phone_call", category: "lead", label: context?.page || "general", params: context });
}

export function trackFormSubmit(context?: Record<string, string | undefined>) {
  trackEvent({ action: "form_submit", category: "lead", label: context?.service || "booking", params: context });
}
