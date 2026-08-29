"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { getLocalizedServiceNav, serviceNavList } from "@/config/service-nav.generated";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

/**
 * QuickQuoteForm — static SSR inquiry form (audit P4-07 + P4-02).
 *
 * A deliberately JS-free native form: it ships in the static HTML with all
 * options (a non-JS crawler sees a real, indexable lead-capture form) and its
 * submission works without JavaScript — the browser GETs `/api/inquiry` with
 * the field values, which 302-redirects to WhatsApp with a pre-filled,
 * locale-aware message (the site's conversion path).
 *
 * No state, no handlers: labels/options are rendered server-side via the same
 * `useTranslations`/config sources as the rest of the chrome, so the form is
 * identical for crawlers, JS-less visitors and full browsers.
 */
export function QuickQuoteForm({
  compact = false,
  className = ""
}: {
  compact?: boolean;
  className?: string;
}) {
  const t = useTranslations();
  const { lang } = useLang();

  return (
    <form
      action="/api/inquiry"
      method="get"
      data-lead-form="quick-quote"
      className={className}
    >
      <input type="hidden" name="lang" value={lang} />

      <div className={compact ? "flex flex-col gap-3" : "flex flex-col gap-4"}>
        <div className={compact ? "grid grid-cols-1 gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="quick-quote-name"
              className="text-xs font-extrabold text-[#075985] uppercase tracking-wider"
            >
              {t("quickQuote.nameLabel")}
            </label>
            <input
              id="quick-quote-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={120}
              placeholder={t("quickQuote.namePlaceholder")}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-[#075985] outline-none focus:border-[#0EA5E9] focus:bg-white transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="quick-quote-area"
              className="text-xs font-extrabold text-[#075985] uppercase tracking-wider"
            >
              {t("hero.locationLabel")}
            </label>
            <select
              id="quick-quote-area"
              name="area"
              required
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-[#075985] outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
            >
              <option value="" disabled>
                {t("hero.selectArea")}
              </option>
              {siteConfig.areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="quick-quote-service"
            className="text-xs font-extrabold text-[#075985] uppercase tracking-wider"
          >
            {t("hero.serviceLabel")}
          </label>
          <select
            id="quick-quote-service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-[#075985] outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
          >
            <option value="" disabled>
              {t("hero.selectService")}
            </option>
            {serviceNavList.map((sourceService) => {
              const service = getLocalizedServiceNav(sourceService, lang);
              return (
                <option key={service.slug} value={service.title}>
                  {service.title} ({t("common.fromLabel")} {service.startPrice})
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="quick-quote-message"
            className="text-xs font-extrabold text-[#075985] uppercase tracking-wider"
          >
            {t("quickQuote.messageLabel")}
          </label>
          <textarea
            id="quick-quote-message"
            name="message"
            rows={compact ? 2 : 3}
            maxLength={1200}
            placeholder={t("quickQuote.messagePlaceholder")}
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-[#075985] outline-none focus:border-[#0EA5E9] focus:bg-white transition-all"
          />
        </div>

        <button type="submit" className="btn-primary w-full text-base">
          <MessageCircle className="h-5 w-5 fill-white text-[#25D366]" />
          <span>{t("quickQuote.submit")}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <p className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-[#475569]">
        <ShieldCheck className="h-4 w-4 text-emerald-500" />
        <span>{t("quickQuote.note")}</span>
      </p>
    </form>
  );
}
