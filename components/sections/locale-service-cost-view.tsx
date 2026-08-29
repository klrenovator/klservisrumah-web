"use client";

import React from "react";
import Link from "next/link";
import { Calculator, CheckCircle2, FileText, MessageSquare, Ruler, Siren } from "lucide-react";
import type { MarketRateItem } from "@/config/market-rates";
import type { Locale } from "@/lib/i18n";
import type { LocaleMap, ServiceBundleEntry, ServiceCostDetail, ServiceLinkEntry } from "@/lib/location-bundles";
import type { ServiceScopeBook, ScopeUnit } from "@/lib/estimator/rate-book.generated";
import { formatMYR } from "@/lib/estimator/format";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { VisibleFaqList } from "@/components/content/visible-faq";

type LocaleServiceCostViewProps = {
  slug: string;
  bundle: LocaleMap<ServiceBundleEntry>;
  /**
   * The service's own job process + FAQs, localized (CF-4). Added so the money
   * page carries the same real service detail the service page carries — the
   * visitor reading "how much does X cost" also sees what the quoted price
   * buys — in EN/MS/ZH.
   */
  detail: LocaleMap<ServiceCostDetail>;
  /** The service's rate-book entry (published scopes + quote-only scopes). */
  scopeBook: ServiceScopeBook;
  rates: MarketRateItem[];
  startPrice: string;
  /** Where the interactive estimator lives (deep tool for 6 trades, share URL otherwise). */
  estimatorHref: string;
  relatedCostGuides?: ServiceLinkEntry[];
};

type CostTableRow = {
  label: string;
  publishedRate: string;
  typicalRange: string;
  note: string;
};

const factorKeys = [1, 2, 3, 4, 5, 6] as const;

/**
 * Sensible "typical quantity" for the worked example, matching the estimator
 * presets (lib/estimator/service-estimator.ts UNIT_META). Never presented as a
 * real quote — only as an illustration of how quantity × published rate works.
 */
const EXAMPLE_QTY: Record<ScopeUnit, number> = {
  job: 2,
  sqft: 250,
  linearft: 20,
  point: 4,
  visit: 2,
  room: 2,
  panel: 2
};

/** Does a published sub-service price actually carry a number? */
function hasAmount(price: string): boolean {
  return /\bRM\s*[\d,.]/i.test(price);
}

/**
 * LocaleServiceCostView — client-localised body for `/services/[slug]/cost`.
 *
 * CF-4: the page is now the canonical "harga {service}" guide. It shows the
 * full published rate book (every priced scope + every quote-only scope, the
 * same data that drives the estimators), the verified Klang Valley market
 * baseline where one exists, a worked example, the pricing methodology, what
 * to measure before requesting a quote, and the service's own FAQs — all in
 * EN / BM / 中文.
 */
export function LocaleServiceCostView({
  slug,
  bundle,
  detail,
  scopeBook,
  rates,
  startPrice,
  estimatorHref,
  relatedCostGuides = []
}: LocaleServiceCostViewProps) {
  const { lang } = useLang();
  const t = useTranslations();
  const locale = lang as Locale;
  const service = bundle[locale] ?? bundle.en;
  const localizedDetail = detail[locale] ?? detail.en;

  // The rate book is generated from the English registry; the localized
  // sub-service lists have the same order/count (verified 29/29), so the
  // priced and quote-only splits zip index-for-index.
  const pricedSubs = service.subServices.filter((sub) => hasAmount(sub.price));
  const quoteOnlySubs = service.subServices.filter((sub) => !hasAmount(sub.price));
  const marketRows = buildRows({ slug, rates, service, t });
  const waLink = getWhatsAppLink({ service: `${service.title} cost quote`, lang: locale });

  const example = buildExample({ scopeBook, pricedSubs, t });

  return (
    <>
      <Breadcrumbs
        homeLabel={t("breadcrumbs.home")}
        ariaLabel={t("breadcrumbs.navAria")}
        items={[
          { label: t("costPage.servicesCrumb"), href: "/services" },
          { label: service.title, href: `/services/${slug}` },
          { label: t("costPage.costCrumb"), href: `/services/${slug}/cost` }
        ]}
      />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
            {t("costPage.badge")}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#075985] sm:text-5xl text-balance">
            {t("costPage.h1", { name: service.title })}
          </h1>
          <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">
            {t("costPage.intro")}
          </p>

          {/* ── Published rate book ─────────────────────────────────── */}
          {scopeBook.scopes.length > 0 && (
            <div className="mt-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
                {t("costPage.rateBookEyebrow")}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-[#075985] sm:text-3xl">
                {t("costPage.rateBookHeading", { name: service.title })}
              </h2>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-[#475569]">
                {t("costPage.rateBookSub")}
              </p>
              <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-xs">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <caption className="sr-only">{t("costPage.tableCaption", { name: service.title })}</caption>
                  <thead className="bg-slate-50 text-xs uppercase tracking-widest text-[#075985]">
                    <tr>
                      <th className="px-5 py-4">{t("costPage.scope")}</th>
                      <th className="px-5 py-4">{t("costPage.publishedRate")}</th>
                      <th className="px-5 py-4">{t("costPage.whatsCovered")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {scopeBook.scopes.map((scope, index) => {
                      const localized = pricedSubs[index];
                      return (
                        <tr key={scope.name}>
                          <td className="px-5 py-4 font-extrabold text-[#075985]">
                            {localized?.name ?? scope.name}
                          </td>
                          <td className="whitespace-nowrap px-5 py-4 font-bold text-[#0EA5E9]">
                            {localized?.price ?? scope.published}
                          </td>
                          <td className="px-5 py-4 text-xs font-semibold leading-relaxed text-[#475569]">
                            {localized?.desc ?? scope.desc}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Quote-only scopes ───────────────────────────────────── */}
          {scopeBook.quoteOnly.length > 0 && (
            <div className="mt-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
                {t("costPage.quoteOnlyEyebrow")}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-[#075985] sm:text-3xl">
                {t("costPage.quoteOnlyHeading", { name: service.title })}
              </h2>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-[#475569]">
                {t("costPage.quoteOnlySub")}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4">
                {scopeBook.quoteOnly.map((scope, index) => {
                  const localized = quoteOnlySubs[index];
                  return (
                    <div
                      key={scope.name}
                      className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xs"
                    >
                      <span className="mt-0.5 inline-flex shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#B45309]">
                        {t("costPage.onQuote")}
                      </span>
                      <div>
                        <h3 className="font-extrabold text-[#075985]">
                          {localized?.name ?? scope.name}
                        </h3>
                        <p className="mt-1 text-sm font-semibold leading-relaxed text-[#475569]">
                          {localized?.desc ?? scope.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Verified market baseline ────────────────────────────── */}
          {marketRows.length > 0 && (
            <div className="mt-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
                {t("costPage.marketEyebrow")}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-[#075985] sm:text-3xl">
                {t("costPage.marketHeading", { name: service.title })}
              </h2>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-[#475569]">
                {t("costPage.marketSub", { reviewed: latestReviewed(rates) })}
              </p>
              <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-xs">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <caption className="sr-only">{t("costPage.tableCaption", { name: service.title })}</caption>
                  <thead className="bg-slate-50 text-xs uppercase tracking-widest text-[#075985]">
                    <tr>
                      <th className="px-5 py-4">{t("costPage.scope")}</th>
                      <th className="px-5 py-4">{t("costPage.publishedRate")}</th>
                      <th className="px-5 py-4">{t("costPage.typicalRange")}</th>
                      <th className="px-5 py-4">{t("costPage.notes")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {marketRows.map((rate) => (
                      <tr key={rate.label}>
                        <td className="px-5 py-4 font-extrabold text-[#075985]">{rate.label}</td>
                        <td className="whitespace-nowrap px-5 py-4 font-bold text-[#0EA5E9]">{rate.publishedRate}</td>
                        <td className="px-5 py-4 text-[#475569]">{rate.typicalRange}</td>
                        <td className="px-5 py-4 text-xs font-semibold text-[#475569]">{rate.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── No third-party averages (most services have no baseline) ─ */}
          {marketRows.length === 0 && (
            <p className="mt-8 rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold leading-relaxed text-[#475569] shadow-xs">
              {t("costPage.noMarketRange", { name: service.title })}
            </p>
          )}

          {/* ── Worked example ──────────────────────────────────────── */}
          {example && (
            <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
              <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
                {t("costPage.exampleEyebrow")}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-[#075985] sm:text-3xl">
                {t("costPage.exampleHeading", { name: service.title })}
              </h2>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-[#475569]">
                {example}
              </p>
            </div>
          )}

          {/* ── Cost factors ────────────────────────────────────────── */}
          <div className="mt-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
              {t("costPage.factorsEyebrow")}
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#075985] sm:text-3xl">
              {t("costPage.factorsHeading", { name: service.title })}
            </h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">
              {t("costPage.factorsSub")}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {factorKeys.map((factor) => (
                <div
                  key={factor}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold text-[#475569] shadow-xs"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{t(`costPage.factor${factor}`)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Pricing methodology ─────────────────────────────────── */}
          <div className="mt-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
              {t("costPage.methodEyebrow")}
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#075985] sm:text-3xl">
              {t("costPage.methodHeading", { name: service.title })}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold leading-relaxed text-[#475569] shadow-xs">
                  <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
                    {String(step).padStart(2, "0")}
                  </span>
                  {t(`costPage.method${step}`)}
                </div>
              ))}
            </div>
          </div>

          {/* ── What to measure ─────────────────────────────────────── */}
          <div className="mt-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
              {t("costPage.measureEyebrow")}
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#075985] sm:text-3xl">
              {t("costPage.measureHeading")}
            </h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">
              {t("costPage.measureIntro")}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-sm font-semibold text-[#475569] shadow-xs">
                  <Ruler className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{t(`costPage.measureStep${step}`)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Instant calculator ──────────────────────────────────── */}
          {scopeBook.scopes.length > 0 && (
            <div className="mt-10 rounded-3xl bg-[#0284C7] p-6 text-white sm:p-8">
              <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-blue-100">
                <Calculator className="mr-2 inline h-4 w-4" />
                {t("costPage.calculatorEyebrow")}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold">
                {t("costPage.calculatorHeading", { name: service.title })}
              </h2>
              <p className="mt-2 text-sm font-semibold text-blue-50">{t("costPage.calculatorBody")}</p>
              <Link
                href={estimatorHref}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#075985] transition hover:bg-blue-50"
              >
                <Calculator className="h-4 w-4" />
                {t("costPage.calculatorButton", { name: service.title })}
              </Link>
            </div>
          )}

          {/* ── WhatsApp CTA ────────────────────────────────────────── */}
          <div className="mt-10 rounded-3xl bg-[#0284C7] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">{t("costPage.ctaHeading", { name: service.title })}</h2>
            <p className="mt-2 text-sm font-semibold text-blue-50">{t("costPage.ctaBody")}</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white"
            >
              <MessageSquare className="h-4 w-4" /> {t("costPage.ctaButton")}
            </a>
          </div>

          {/* ── Emergency path ──────────────────────────────────────── */}
          {/* Crawl path to the emergency variant of this service. 27 of the
              28 `/services/<slug>/emergency` pages had zero inbound internal
              links sitewide (only `/services/plumbing/emergency` was linked,
              from the plumbing-diagnostic tool). They were sitemap-only URLs.
              The cost page is the closest sibling in the same service silo —
              a visitor comparing prices is exactly who needs to know an urgent
              option exists — and it is built for all 28 services. */}
          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-7">
            <h2 className="text-lg font-extrabold text-[#075985]">
              {t("emergencyPage.h1", { name: service.title })}
            </h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">
              {t("emergencyPage.intro")}
            </p>
            <Link
              href={`/services/${slug}/emergency`}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm font-extrabold text-[#B45309] transition hover:border-amber-400 hover:bg-amber-100"
            >
              <Siren className="h-4 w-4" />
              {t("emergencyPage.badge")}
            </Link>
          </div>

          {/* ── FAQs (generic + service-specific, localized) ───────── */}
          <div className="mt-10">
            <FileText className="mb-2 h-5 w-5 text-[#0EA5E9]" aria-hidden="true" />
            <VisibleFaqList
              className="rounded-3xl border border-slate-100 bg-white py-8 sm:py-10"
              headingId="cost-faq-heading"
              heading={t("costPage.faqHeading", { name: service.title })}
              faqs={[
                ...[0, 1, 2, 3].map((index) => ({
                  q: t(`costPage.faqs.${index}.q`, { name: service.title, startPrice }),
                  a: t(`costPage.faqs.${index}.a`, { name: service.title, startPrice })
                })),
                ...localizedDetail.faqs
              ]}
            />
          </div>

          {/* ── What the quote pays for — the job process ───────────── */}
          {localizedDetail.process.length > 0 && (
            <div className="mt-10">
              <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0EA5E9]">
                {t("costPage.processEyebrow")}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-[#075985] sm:text-3xl">
                {t("costPage.processHeading", { name: service.title })}
              </h2>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-[#475569]">
                {t("costPage.processSub")}
              </p>
              <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {localizedDetail.process.map((step) => (
                  <li key={step.step} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E0F2FE] text-xs font-extrabold text-[#0284C7]">
                        {step.step}
                      </span>
                      <h3 className="font-extrabold text-[#075985]">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-[#475569]">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {relatedCostGuides.length > 0 && (
            <section className="mt-10" aria-labelledby="related-cost-guides-heading">
              <h2 id="related-cost-guides-heading" className="text-2xl font-extrabold text-[#075985]">
                {t("serviceDetail.otherServicesHeading")}
              </h2>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-[#475569]">
                {t("serviceDetail.otherServicesSub")}
              </p>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedCostGuides.map((guide) => {
                  const title = guide.titles[locale] ?? guide.titles.en;
                  return (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/30 hover:shadow-md"
                    >
                      <h3 className="font-extrabold text-[#075985]">{title}</h3>
                      <span className="mt-2 inline-flex text-sm font-bold text-[#0EA5E9]">{t("common.viewDetails")}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}

function latestReviewed(rates: MarketRateItem[]): string {
  return rates.reduce((latest, rate) => (rate.lastReviewed > latest ? rate.lastReviewed : latest), "");
}

function buildExample({
  scopeBook,
  pricedSubs,
  t
}: {
  scopeBook: ServiceScopeBook;
  pricedSubs: { name: string; price: string; desc: string }[];
  t: (key: string, vars?: Record<string, string | number>) => string;
}): string | null {
  const scope = scopeBook.scopes[0];
  if (!scope) return null;
  const qty = EXAMPLE_QTY[scope.unit] ?? 1;
  const total = scope.amount * qty;
  const localizedName = pricedSubs[0]?.name ?? scope.name;
  const displayName = lowerFirst(localizedName);
  return t("costPage.exampleBody", {
    qty,
    name: displayName,
    // Drop the marketing prefix ("From RM 450 / room" → "RM 450 / room")
    // so the worked example reads as arithmetic, not a starting-price promo.
    amount: cleanAmount(scope.published),
    total: formatMYR(total)
  });
}

function lowerFirst(value: string): string {
  return value ? value.charAt(0).toLowerCase() + value.slice(1) : value;
}

/** "From RM 450 / room" → "RM 450 / room"; "RM 450 / 房间起" → "RM 450 / 房间". */
function cleanAmount(published: string): string {
  return published
    .replace(/^From\s+/i, "")
    .replace(/^Dari\s+/i, "")
    .replace(/起$/, "")
    .trim();
}

function buildRows({
  slug,
  rates,
  service,
  t
}: {
  slug: string;
  rates: MarketRateItem[];
  service: ServiceBundleEntry;
  t: (key: string, vars?: Record<string, string | number>) => string;
}): CostTableRow[] {
  return rates.map((rate, index) => {
    const prefix = `costPage.rateCopy.${slug}.${index}`;
    return {
      label: t(`${prefix}.label`, { defaultValue: rate.label }),
      publishedRate: t(`${prefix}.publishedRate`, { defaultValue: rate.publishedRate }),
      typicalRange: t(`${prefix}.range`, { defaultValue: rate.marketRange }),
      note: t(`${prefix}.note`, { defaultValue: rate.validationNote })
    };
  });
}
