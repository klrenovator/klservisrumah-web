import { ANALYTICS_CONSENT_KEY } from "@/lib/consent";

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

const recentEvents = new Map<string, number>();

export function trackEvent({ action, category = "engagement", label, value, params = {} }: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem(ANALYTICS_CONSENT_KEY) !== "granted") return;
  } catch {
    // Hardened browsers may block localStorage. Fail closed: no analytics.
    return;
  }

  // Delegated tracking and a component's explicit handler can observe the same
  // click. Suppress the second signal so one lead action is counted once.
  const signature = `${action}:${window.location.pathname}`;
  const now = Date.now();
  const previous = recentEvents.get(signature) ?? 0;
  if (now - previous < 750) return;
  recentEvents.set(signature, now);
  for (const [key, timestamp] of recentEvents) {
    if (now - timestamp > 10_000) recentEvents.delete(key);
  }

  const eventParams = Object.fromEntries(
    Object.entries({ event_category: category, event_label: label, value, ...params })
      .filter(([, eventValue]) => eventValue !== undefined)
  );
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") {
    window.gtag("event", action, eventParams);
  } else {
    // Consent is already granted but gtag may still be loading. Queue the
    // command in the same dataLayer consumed by gtag.js once ready.
    window.dataLayer.push(["event", action, eventParams]);
  }
}

export function trackWhatsAppClick(context?: Record<string, string | undefined>) {
  trackEvent({ action: "whatsapp_click", category: "lead", label: context?.service || context?.page || "general", params: context });
}

export function trackPhoneCall(context?: Record<string, string | undefined>) {
  trackEvent({ action: "phone_call", category: "lead", label: context?.page || "general", params: context });
}

export function trackFormSubmit(context?: Record<string, string | undefined>) {
  trackEvent({ action: "form_submit", category: "lead", label: context?.service || context?.page || "booking", params: context });
}

export function trackEmailClick(context?: Record<string, string | undefined>) {
  trackEvent({ action: "email_click", category: "lead", label: context?.page || "general", params: context });
}

export function trackSocialClick(context?: Record<string, string | undefined>) {
  trackEvent({ action: "social_click", category: "outbound", label: context?.network || "social", params: context });
}

export function trackWebVitalMetric(metric: { name: string; value: number; rating: string; id: string }) {
  trackEvent({
    action: "web_vital",
    category: "performance",
    label: metric.name,
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    params: {
      metric_id: metric.id,
      metric_name: metric.name,
      metric_rating: metric.rating,
      metric_value: metric.value
    }
  });
}

// ── Smart Service Finder Analytics ────────────────────────────────────────────
// Dedicated event functions for conversion tracking of the Smart Service Finder
// widget (homepage, /services, /search, and ⌘K modal).

/** Fired when the user executes a search query (onSubmit or popular-tag click). */
export function trackSmartFinderSearch(context: {
  query: string;
  resultCount: number;
  lang?: string;
  source?: "input" | "popular_tag" | "related_service";
}) {
  trackEvent({
    action: "smart_finder_search",
    category: "smart_finder",
    label: context.query,
    value: context.resultCount,
    params: {
      finder_query: context.query,
      finder_result_count: context.resultCount,
      finder_lang: context.lang || "en",
      finder_source: context.source || "input",
    },
  });
}

/** Fired when the user expands a service card to view details. */
export function trackSmartFinderCardExpand(context: {
  serviceSlug: string;
  serviceTitle?: string;
  score?: number;
}) {
  trackEvent({
    action: "smart_finder_card_expand",
    category: "smart_finder",
    label: context.serviceSlug,
    value: context.score,
    params: {
      finder_service: context.serviceSlug,
      finder_service_title: context.serviceTitle,
      finder_score: context.score,
    },
  });
}

/** Fired when the user clicks a calculator link on a service card. */
export function trackSmartFinderCalculatorClick(context: {
  serviceSlug: string;
  calculatorSlug?: string;
  calculatorUrl?: string;
}) {
  trackEvent({
    action: "smart_finder_calculator_click",
    category: "smart_finder",
    label: context.serviceSlug,
    params: {
      finder_service: context.serviceSlug,
      finder_calculator: context.calculatorSlug,
      finder_calculator_url: context.calculatorUrl,
    },
  });
}

/** Fired when the user clicks the "Get Quote" link on a service card. */
export function trackSmartFinderQuoteClick(context: {
  serviceSlug: string;
  serviceTitle?: string;
}) {
  trackEvent({
    action: "smart_finder_quote_click",
    category: "smart_finder",
    label: context.serviceSlug,
    params: {
      finder_service: context.serviceSlug,
      finder_service_title: context.serviceTitle,
    },
  });
}

/** Fired when a search query returns zero results. */
export function trackSmartFinderNoResults(context: {
  query: string;
  lang?: string;
}) {
  trackEvent({
    action: "smart_finder_no_results",
    category: "smart_finder",
    label: context.query,
    params: {
      finder_query: context.query,
      finder_lang: context.lang || "en",
    },
  });
}

/** Fired when the user clicks a popular search tag chip. */
export function trackSmartFinderPopularTag(context: {
  tag: string;
  lang?: string;
}) {
  trackEvent({
    action: "smart_finder_popular_tag",
    category: "smart_finder",
    label: context.tag,
    params: {
      finder_tag: context.tag,
      finder_lang: context.lang || "en",
    },
  });
}

/** Fired when the user clicks a related-service chip on a result card. */
export function trackSmartFinderRelatedClick(context: {
  fromService: string;
  toService: string;
}) {
  trackEvent({
    action: "smart_finder_related_click",
    category: "smart_finder",
    label: context.fromService,
    params: {
      finder_from_service: context.fromService,
      finder_to_service: context.toService,
    },
  });
}
