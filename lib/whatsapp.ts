import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";

/**
 * WhatsApp message templates for each supported locale.
 *
 * When a visitor opens a WhatsApp link from a localised page, the pre-filled
 * message should match their language — a Malay visitor should not see an
 * English message, and vice-versa. The {service} and {location} placeholders
 * are replaced with the localised names from the page's own data bundles,
 * so the business owner receives the request in the visitor's language.
 */
const templates: Record<Locale, {
  default: string;
  serviceAndLocation: string;
  service: string;
  location: string;
}> = {
  en: {
    default: "Hello KL Servis Rumah! I want to book a home service.",
    serviceAndLocation: "Hi KL Servis Rumah! I am looking for professional {service} service in {location}. Can I check your slot availability?",
    service: "Hi KL Servis Rumah! I would like to get a quote for {service} service for my property.",
    location: "Hi KL Servis Rumah! I am located in {location} and would like to check what slots are available this week."
  },
  ms: {
    default: "Salam KL Servis Rumah! Saya ingin menempah servis rumah.",
    serviceAndLocation: "Salam KL Servis Rumah! Saya mencari perkhidmatan {service} di {location}. Boleh saya tanya tentang ketersediaan slot?",
    service: "Salam KL Servis Rumah! Saya ingin mendapatkan sebut harga untuk perkhidmatan {service} untuk harta saya.",
    location: "Salam KL Servis Rumah! Saya berada di {location} dan ingin tahu slot yang tersedia minggu ini."
  },
  zh: {
    default: "您好 KL Servis Rumah！我想预约家居服务。",
    serviceAndLocation: "您好 KL Servis Rumah！我想找{location}的专业{service}服务。请问最近有可用的时间段吗？",
    service: "您好 KL Servis Rumah！我想获取{service}服务的报价。",
    location: "您好 KL Servis Rumah！我在{location}，想了解这周有哪些可用的时间段。"
  }
};

export function getWhatsAppLink(messageDetails?: {
  service?: string;
  location?: string;
  lang?: Locale;
}) {
  const lang = messageDetails?.lang ?? "en";
  const t = templates[lang] ?? templates.en;

  let text: string;

  if (messageDetails?.service && messageDetails?.location) {
    text = t.serviceAndLocation
      .replace("{service}", messageDetails.service)
      .replace("{location}", messageDetails.location);
  } else if (messageDetails?.service) {
    text = t.service.replace("{service}", messageDetails.service);
  } else if (messageDetails?.location) {
    text = t.location.replace("{location}", messageDetails.location);
  } else {
    text = t.default;
  }

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodedText}`;
}

/**
 * Inquiry link for the static SSR quote form (`/api/inquiry` → this builder).
 *
 * Composes the standard locale-aware service/location greeting and appends the
 * caller's name and free-text job details, so a fully JS-free form submission
 * still lands in WhatsApp with a complete, structured request.
 */
export function getWhatsAppInquiryLink(details: {
  service?: string;
  area?: string;
  name?: string;
  message?: string;
  lang?: Locale;
}) {
  const lang = details.lang ?? "en";
  const t = templates[lang] ?? templates.en;

  let text: string;

  if (details.service && details.area) {
    text = t.serviceAndLocation
      .replace("{service}", details.service)
      .replace("{location}", details.area);
  } else if (details.service) {
    text = t.service.replace("{service}", details.service);
  } else if (details.area) {
    text = t.location.replace("{location}", details.area);
  } else {
    text = t.default;
  }

  const extra: string[] = [];
  if (details.name) {
    extra.push(
      lang === "ms" ? `Nama saya: ${details.name}` :
      lang === "zh" ? `我的名字：${details.name}` :
      `My name: ${details.name}`
    );
  }
  if (details.message) {
    extra.push(
      lang === "ms" ? `Butiran kerja: ${details.message}` :
      lang === "zh" ? `工作详情：${details.message}` :
      `Job details: ${details.message}`
    );
  }
  if (extra.length) text += `\n\n${extra.join("\n")}`;

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
