import type { GenericContentPage } from "@/config/content-data";
import { servicesData } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import {
  answerLabels,
  bulletsMs,
  bulletsZh,
  faqTemplatesMs,
  faqTemplatesZh
} from "@/config/content-body-i18n";
import { CONTENT_POD_FAQ_I18N } from "@/config/content-pod-faq-i18n";
import type { ContentPodFamily } from "@/config/content-locale";

type BodyLocale = "ms" | "zh";

export type LocalizedBody = {
  bullets: string[];
  faqs: { q: string; a: string }[];
};

/**
 * Resolve the MS/ZH body (bullet grid + FAQ accordion) for a generic content
 * page.
 *
 * Three sources, in this order:
 *
 *   1. `serviceDerived` pages (`/answers/*`, `/process/*`) — their bullets and
 *      FAQs are generated from `servicesData`, which is already fully
 *      translated, so we just re-derive them from the localised service.
 *   2. `faqTopic` pages — the four generic FAQ templates, rebuilt natively with
 *      the page's own translated title substituted for `{topic}`.
 *   3. Everything else falls back to the English string, never to a blank.
 *
 * `localizedTitle` is the already-resolved MS/ZH title from `content-i18n.ts`,
 * passed in so the FAQ questions read naturally in the target language.
 */
export function localizeContentBody(
  page: GenericContentPage,
  locale: BodyLocale,
  localizedTitle?: string,
  family?: ContentPodFamily
): LocalizedBody {
  const service = page.relatedServiceSlug ? servicesData[page.relatedServiceSlug] : undefined;
  const localizedService = service ? getLocalizedService(service, locale) : undefined;
  const bulletDict = locale === "ms" ? bulletsMs : bulletsZh;

  // ── 1. Pages whose body is derived from the (already translated) service ──
  if (page.serviceDerived && localizedService) {
    const labels = answerLabels[locale];
    const bullets =
      page.serviceDerived === "tagline"
        ? [
            localizedService.tagline,
            `${labels.startingPrice}: ${localizedService.startPrice}`,
            `${labels.warranty}: ${localizedService.warranty}`,
            `${labels.lastUpdated}: 2026-07-24`
          ]
        : localizedService.process.map((step) => `${step.step}: ${step.title}`);

    return { bullets, faqs: localizedService.faqs };
  }

  // ── 2. Fixed-vocabulary bullets + the four templated FAQs ────────────────
  const bullets = page.bullets.map((bullet) => bulletDict[bullet] ?? bullet);

  if (!page.faqTopic) {
    return { bullets, faqs: page.faqs };
  }

  // P3-12 phase 2: prefer the page-specific editorial translation whenever a
  // family-qualified set exists. Family qualification is mandatory because
  // commercial and residential pages deliberately share slugs.
  const authoredFaqs = family
    ? CONTENT_POD_FAQ_I18N[`${family}:${page.slug}`]?.[locale]
    : undefined;
  if (authoredFaqs) return { bullets, faqs: authoredFaqs };

  const topic = localizedTitle ?? page.faqTopic;
  const templates = locale === "ms" ? faqTemplatesMs : faqTemplatesZh;
  const faqs = templates.map((template) => ({
    q: template.q.replace("{topic}", topic),
    a: template.a
  }));

  return { bullets, faqs };
}
