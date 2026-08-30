import type { GenericContentPage } from "@/config/content-data";
import { servicesData } from "@/config/services-data";
import { getLocalizedService } from "@/lib/service-i18n";
import {
  contentI18n,
  contentI18nMsFull,
  contentI18nZh,
  contentI18nZhFull,
} from "@/config/content-i18n";
import { localizeContentBody, type LocalizedBody } from "@/lib/content-body-i18n";
import {
  COMMERCIAL_FAQ_TEMPLATES,
  POD_GUIDANCE_I18N,
  POD_HEADER_OVERRIDES,
  SERVICE_NOUN,
} from "@/config/content-locale-data";
import type { ContentPodFamily } from "@/config/content-locale";
import type { Translator } from "@/lib/i18n";
import { CONTENT_POD_FAQ_I18N } from "@/config/content-pod-faq-i18n";

/**
 * lib/content-locale-resolver.ts — resolve a fully-localized pod header + body
 * for the real `/ms` + `/zh` content-pod routes (audit P3-12).
 *
 * This is the family-aware version of the client-side title lookup. Two
 * correctness problems it solves that the flat, slug-keyed dictionaries in
 * `config/content-i18n.ts` cannot:
 *
 *   1. COLLISION — commercial and residential pods share the same slug
 *      (`<service>-services-kl`), and the dictionaries key by slug alone. A
 *      residential page toggled to MS was silently shown the *commercial*
 *      title. Here the family is resolved first, and residential/commercial
 *      titles are derived per-family from the localized service noun, so the
 *      two audiences never share a heading again.
 *
 *   2. COVERAGE — the dictionaries predated the four newest services and the
 *      aircon brand/comparison pods, so ~64 entries fell back to English. The
 *      family-aware derivation (service prose) plus `POD_HEADER_OVERRIDES`
 *      (aircon brands/compares) give every one of the 204 kept pods a real
 *      localized title, intro and category.
 */

export type PodHeader = { title: string; intro: string; category: string };
export type ResolvedPod = PodHeader & LocalizedBody & {
  guidance: { intro: string; safe: string };
};

type BodyLocale = "ms" | "zh";

const SERVICE_BACKED: ReadonlySet<ContentPodFamily> = new Set([
  "commercial",
  "residential",
  "process",
  "answers",
]);

function legacyLookup(page: GenericContentPage, locale: BodyLocale): Partial<{ title: string; intro: string; category: string }> | undefined {
  return locale === "ms"
    ? contentI18nMsFull[page.slug] ?? contentI18n[page.slug]
    : contentI18nZhFull[page.slug] ?? contentI18nZh[page.slug];
}

/** Lowercase the MS noun only where the language needs it inside a sentence. */
function msNounLower(noun: string): string {
  return noun.replace(/^[A-Z]/, (c) => c.toLowerCase());
}

/**
 * Derive the title + category for a service-backed family from the localized
 * service noun. The frames deliberately reproduce the curated titles already
 * in `contentI18n*Full` for the covered services (verified during authoring),
 * so the localized route and the client-toggle view agree on a page's heading.
 */
function derivedServiceHeader(
  page: GenericContentPage,
  family: Extract<ContentPodFamily, "commercial" | "residential" | "process" | "answers">,
  locale: BodyLocale
): PodHeader {
  const serviceSlug = page.relatedServiceSlug as string;
  const noun = SERVICE_NOUN[locale][serviceSlug];
  const service = servicesData[serviceSlug];
  const localizedService = service ? getLocalizedService(service, locale) : undefined;
  const nounMsLower = msNounLower(noun);

  if (family === "commercial") {
    return locale === "ms"
      ? {
          title: `Perkhidmatan ${noun} Komersial di KL`,
          intro: `Panduan perkhidmatan ${nounMsLower} untuk premis komersial di KL & Selangor — penjadualan kemas, gangguan minimum dan sebut harga tetap.`,
          category: "Komersial",
        }
      : {
          title: `吉隆坡商业${noun}服务`,
          intro: `吉隆坡与雪兰莪商业场所${noun}服务指南 — 排程整洁、干扰最小、固定报价。`,
          category: "商业",
        };
  }

  if (family === "residential") {
    return locale === "ms"
      ? {
          title: `Perkhidmatan ${noun} Kediaman di KL`,
          intro: `Panduan perkhidmatan ${nounMsLower} untuk rumah kediaman di KL & Selangor — perlindungan perabot, koordinasi kondo/JMB dan harga tetap telus.`,
          category: "Kediaman",
        }
      : {
          title: `吉隆坡住宅${noun}服务`,
          intro: `吉隆坡与雪兰莪住宅${noun}服务指南 — 家具保护、公寓物业协调与透明固定报价。`,
          category: "住宅",
        };
  }

  if (family === "answers") {
    // The answer page's price/warranty come from the (localized) service, not a
    // hardcoded clause, so trilingual figures always match the registry.
    return locale === "ms"
      ? {
          title: `Panduan Lengkap ${noun}`,
          intro: localizedService
            ? `Panduan lengkap ${nounMsLower} di KL & Selangor — ${localizedService.tagline}`
            : `Panduan lengkap ${nounMsLower} di KL & Selangor.`,
          category: "Panduan Jawapan AI",
        }
      : {
          title: `${noun}完整指南`,
          intro: localizedService
            ? `${noun}完整指南（吉隆坡与雪兰莪）— ${localizedService.tagline}`
            : `${noun}完整指南（吉隆坡与雪兰莪）。`,
          category: "AI回答指南",
        };
  }

  // process
  return locale === "ms"
    ? {
        title: `Proses ${noun} di KL`,
        intro: `Panduan proses ${nounMsLower} langkah demi langkah — persediaan, pelaksanaan, semakan kualiti dan serahan waranti.`,
        category: "Proses",
      }
    : {
        title: `${noun}流程`,
        intro: `${noun}服务分步流程指南 — 准备、施工、质量检查与保修交付。`,
        category: "流程",
      };
}

/**
 * Resolve `{title, intro, category}` for a pod page in a given family + locale.
 * Precedence: namespaced override (collision/coverage fixes) →
 * service-derivation (service-backed families) → legacy slug dictionary →
 * the English source strings.
 */
export function resolvePodHeader(
  page: GenericContentPage,
  family: ContentPodFamily,
  locale: BodyLocale
): PodHeader {
  // 1. Namespaced override — wins for residential (shares a slug with
  //    commercial) and for the untranslated aircon brand/compare pods.
  const override = POD_HEADER_OVERRIDES[locale][`${family}:${page.slug}`];
  if (override?.title) {
    return {
      title: override.title,
      intro: override.intro ?? page.intro,
      category: override.category ?? page.category,
    };
  }

  // 2. Service-backed families derive from the localized service noun. This is
  //    what makes commercial ≠ residential even though they share a slug.
  if (SERVICE_BACKED.has(family) && page.relatedServiceSlug && SERVICE_NOUN[locale][page.relatedServiceSlug as string]) {
    const derived = derivedServiceHeader(page, family as Extract<ContentPodFamily, "commercial" | "residential" | "process" | "answers">, locale);
    // For process/answers the curated dictionaries already hold polished
    // intros for the covered services — keep those, but use the derived title
    // so the four newer services and the collision-free set stay consistent.
    const legacy = legacyLookup(page, locale);
    if ((family === "process" || family === "answers") && legacy?.title) {
      return { title: legacy.title, intro: legacy.intro ?? derived.intro, category: legacy.category ?? derived.category };
    }
    return derived;
  }

  // 3. Everything else — legacy slug dictionary, then the English source.
  const legacy = legacyLookup(page, locale);
  return {
    title: (legacy?.title as string) ?? page.title,
    intro: (legacy?.intro as string) ?? page.intro,
    category: (legacy?.category as string) ?? page.category,
  };
}

/**
 * Resolve the "Practical guidance" paragraphs. Commercial/residential use the
 * translated audience overrides; every other family uses the shared localized
 * guidance message from the site dictionary (never the EN-only override).
 */
export function resolvePodGuidance(
  page: GenericContentPage,
  family: ContentPodFamily,
  locale: BodyLocale,
  t: Translator
): { intro: string; safe: string } {
  if (family === "commercial" || family === "residential") {
    return POD_GUIDANCE_I18N[family][locale];
  }
  return {
    intro: t("content.guidanceIntro"),
    safe: t("content.guidanceSafeApproach"),
  };
}

/**
 * Resolve a complete, fully-localized pod — header, Bullet grid, FAQ list and
 * guidance — ready to render server-side on `/ms` + `/zh`.
 */
export function resolvePod(
  page: GenericContentPage,
  family: ContentPodFamily,
  locale: BodyLocale,
  t: Translator
): ResolvedPod {
  const header = resolvePodHeader(page, family, locale);
  const resolvedBody = localizeContentBody(page, locale, header.title, family);
  const bullets = resolvedBody.bullets;
  let faqs = resolvedBody.faqs;
  // Commercial pods use premises-focused FAQ templates so a business-property
  // reader is never answered with "…for homes" copy (audience fix carried over
  // from the EN Wave-4 work). Service-derived pages (answers/process) already
  // carry the service's real localized FAQs and are left untouched.
  if (
    family === "commercial" &&
    page.faqTopic &&
    !page.serviceDerived &&
    !CONTENT_POD_FAQ_I18N[`${family}:${page.slug}`]?.[locale]
  ) {
    faqs = COMMERCIAL_FAQ_TEMPLATES[locale].map((template) => ({
      q: template.q.replace("{topic}", header.title),
      a: template.a,
    }));
  }
  const guidance = resolvePodGuidance(page, family, locale, t);
  return { ...header, bullets, faqs, guidance };
}
