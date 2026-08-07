/**
 * English estimator chrome for the deep-tool routes.
 *
 * Contains exactly the shared form/result/fields strings the five /tools/*
 * calculators render (sections: common, form, result, severity, whatsapp) — NOT the generic
 * service-estimator content — so each locale route ships only what it needs.
 *
 * Mirrors messages/en.json → `estimator` namespace. KEEP IN SYNC:
 * scripts/test-estimators.ts asserts these sections stay identical, so edit
 * BOTH this file and messages/en.json together.
 */

import type { MessageDictionary } from "../../i18n";

export const chromeEnDict: MessageDictionary = {
  estimator: {
  "common": {
    "disclaimer": "This is an estimated quotation based on the information provided. Final pricing may change after an on-site inspection depending on actual site conditions.",
    "priceInclusive": "Total incl. labour & materials",
    "inclusiveNote": "Covers both labour and materials",
    "popular": "Popular",
    "yes": "Yes",
    "no": "No",
    "decrease": "Decrease",
    "increase": "Increase",
    "startOver": "Start over"
  },
  "form": {
    "liveEstimate": "Your estimate right now",
    "liveRange": "{low} – {high} · {duration}",
    "seeBreakdown": "See full breakdown",
    "answerMore": "Answer {n} more",
    "fineTuneTitle": "Optional — fine-tune the price",
    "fineTuneSub": "{titles}. Skip this and we use the most common answers.",
    "progressNudge": "{answered} of {total} answered. Tap here to finish “{field}” and lock in your estimate.",
    "seeFullEstimate": "See my full estimate",
    "showLeft": "Show me what is left",
    "srAnnouncement": "Current estimate {price}, range {low} to {high}. {status}",
    "srAllAnswered": "All questions answered.",
    "srQuestionsLeft": "{n} question(s) left."
  },
  "result": {
    "instantEstimate": "Your instant estimate",
    "estimatedTotal": "Estimated total",
    "totalInclusive": "incl. labour & materials",
    "rangeLabel": "Estimated range {low} – {high}",
    "metricLabour": "Labour",
    "metricMaterials": "Materials",
    "metricTime": "Time needed",
    "metricPackage": "Package",
    "recommendedService": "Recommended service",
    "viewService": "View full service details",
    "bookNow": "Book Now",
    "sendWhatsapp": "Send on WhatsApp",
    "requestSiteVisit": "Request Site Visit",
    "callLabel": "Call {phone}",
    "changeAnswers": "Change my answers",
    "findingsTitle": "Likely causes & findings",
    "addonsTitle": "Suggested add-ons",
    "addonsHint": "Tap to add — the total updates instantly",
    "recommendedForYou": "Recommended for you",
    "addonsSelected": "Add-ons selected: {amount} · New estimated total {total}",
    "breakdownTitle": "How we calculated this",
    "breakdownSub": "Every rate comes from the price list published on this website",
    "whatWeAssumed": "What we assumed",
    "nextStepsTitle": "Recommended next steps",
    "maintenanceTitle": "Maintenance tips",
    "relatedReading": "Related reading",
    "sendToCustomer": "Send Estimate to Customer",
    "sendToCustomerDesc": "Share this estimate with your customer via WhatsApp",
    "sendToCustomerBtn": "Send to Customer",
    "customerNameLabel": "Customer Name (Optional)",
    "customerPhoneLabel": "Customer Phone (Optional)",
    "messagePreview": "Message Preview",
    "sendViaWhatsApp": "Send via WhatsApp",
    "copyMessage": "Copy Message",
    "messageCopied": "Message copied to clipboard!",
    "estimateReady": "Estimate message ready to send! Your customer will receive a detailed breakdown."
  },
  "severity": {
    "routine": "Routine",
    "soon": "Book this week",
    "urgent": "Urgent — 24 to 48 hours",
    "emergency": "Emergency — act now"
  },
  "whatsapp": {
    "greeting": "Hi KL Servis Rumah, I used your {tool} and would like to book.",
    "myAnswers": "MY ANSWERS",
    "estimateSection": "ESTIMATE FROM YOUR WEBSITE",
    "recommended": "Recommended service: {value}",
    "package": "Package: {value}",
    "estimatedCost": "Estimated cost: {value}",
    "range": "Estimated range: {low} – {high}",
    "time": "Estimated time: {value}",
    "addons": "Add-ons: {value}",
    "totalAddons": "Estimated total with add-ons: {value}",
    "closing": "Please confirm availability and the final quotation after inspection.",
    "siteVisitGreeting": "Hi KL Servis Rumah, I would like to request a free site visit.",
    "siteVisitLine": "Website estimate: {price} ({low} – {high}) for {service}."
  },
  "sendToCustomer": {
    "title": "Send Estimate to Customer",
    "subtitle": "Share this estimate with your customer via WhatsApp",
    "open": "Send to Customer",
    "close": "Close",
    "nameLabel": "Customer Name (Optional)",
    "namePlaceholder": "e.g. Ahmad Razak",
    "phoneLabel": "Customer Phone (Optional)",
    "phonePlaceholder": "e.g. 0123456789",
    "previewLabel": "Message Preview",
    "sendWhatsApp": "Send via WhatsApp",
    "copyMessage": "Copy Message",
    "copied": "Message copied to clipboard!",
    "needContact": "Please enter customer name or phone number",
    "ready": "Estimate message ready to send! Your customer will receive a detailed breakdown."
  }
}
};
