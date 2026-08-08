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
