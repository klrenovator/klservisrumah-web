/**
 * English fallback for the shared estimator chrome.
 *
 * The estimator components (`estimator-form`, `estimate-result`, `fields`) are
 * rendered by two callers:
 *
 *   • The generic service estimator on 22 service pages — a client component
 *     that already loads the message dictionaries, so it passes a real
 *     locale-aware translator down.
 *   • The five hand-built deep tools (painting, leak, ceiling, plumbing, TV
 *     mount) — their *content* is still authored in English, so they do not
 *     pass a translator. To avoid (a) pulling the full 44 KB message bundles
 *     into those five tool routes and (b) showing a half-translated
 *     (Malay chrome + English content) tool, those routes fall back to these
 *     English strings instead.
 *
 * The canonical source for these strings is `messages/en.json` under the
 * `estimator` namespace. Keep this map in sync if the English copy changes.
 */

import { createTranslator, type Locale, type MessageDictionary, type Translator } from "../i18n";

const enChrome: MessageDictionary = {
  estimator: {
    common: {
      disclaimer:
        "This is an estimated quotation based on the information provided. Final pricing may change after an on-site inspection depending on actual site conditions.",
      popular: "Popular",
      yes: "Yes",
      no: "No",
      decrease: "Decrease",
      increase: "Increase",
      startOver: "Start over"
    },
    form: {
      liveEstimate: "Your estimate right now",
      liveRange: "{low} – {high} · {duration}",
      seeBreakdown: "See full breakdown",
      answerMore: "Answer {n} more",
      fineTuneTitle: "Optional — fine-tune the price",
      fineTuneSub: "{titles}. Skip this and we use the most common answers.",
      progressNudge:
        "{answered} of {total} answered. Tap here to finish “{field}” and lock in your estimate.",
      seeFullEstimate: "See my full estimate",
      showLeft: "Show me what is left",
      srAnnouncement: "Current estimate {price}, range {low} to {high}. {status}",
      srAllAnswered: "All questions answered.",
      srQuestionsLeft: "{n} question(s) left."
    },
    result: {
      instantEstimate: "Your instant estimate",
      estimatedTotal: "Estimated total",
      totalInclusive: "incl. labour & materials",
      rangeLabel: "Estimated range {low} – {high}",
      metricLabour: "Labour",
      metricMaterials: "Materials",
      metricTime: "Time needed",
      metricPackage: "Package",
      recommendedService: "Recommended service",
      viewService: "View full service details",
      bookNow: "Book Now",
      sendWhatsapp: "Send on WhatsApp",
      requestSiteVisit: "Request Site Visit",
      callLabel: "Call {phone}",
      changeAnswers: "Change my answers",
      findingsTitle: "Likely causes & findings",
      addonsTitle: "Suggested add-ons",
      addonsHint: "Tap to add — the total updates instantly",
      recommendedForYou: "Recommended for you",
      addonsSelected: "Add-ons selected: {amount} · New estimated total {total}",
      breakdownTitle: "How we calculated this",
      breakdownSub: "Every rate comes from the price list published on this website",
      whatWeAssumed: "What we assumed",
      nextStepsTitle: "Recommended next steps",
      maintenanceTitle: "Maintenance tips",
      relatedReading: "Related reading"
    },
    severity: {
      routine: "Routine",
      soon: "Book this week",
      urgent: "Urgent — 24 to 48 hours",
      emergency: "Emergency — act now"
    },
    whatsapp: {
      greeting: "Hi KL Servis Rumah, I used your {tool} and would like to book.",
      myAnswers: "MY ANSWERS",
      estimateSection: "ESTIMATE FROM YOUR WEBSITE",
      recommended: "Recommended service: {value}",
      package: "Package: {value}",
      estimatedCost: "Estimated cost: {value}",
      range: "Estimated range: {low} – {high}",
      time: "Estimated time: {value}",
      addons: "Add-ons: {value}",
      totalAddons: "Estimated total with add-ons: {value}",
      closing: "Please confirm availability and the final quotation after inspection.",
      siteVisitGreeting: "Hi KL Servis Rumah, I would like to request a free site visit.",
      siteVisitLine: "Website estimate: {price} ({low} – {high}) for {service}."
    }
  }
};

/**
 * English-only translator covering exactly the estimator chrome keys the
 * shared components render. Non-estimator keys resolve to themselves, which is
 * fine because the components only ever query `estimator.*` keys.
 */
export const englishEstimatorT: Translator = createTranslator(
  { en: enChrome, ms: enChrome, zh: enChrome } as Record<Locale, MessageDictionary>,
  "en"
);
