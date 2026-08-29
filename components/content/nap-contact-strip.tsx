"use client";

import React from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";

/**
 * NAP contact strip (audit P4-15 / P3-10).
 *
 * Part 4 found the business NAP (phone / email / address) lived only in the
 * footer and JSON-LD — 0% of service/problem/pod/tool bodies contained it.
 * AI answer engines that chunk page content (ChatGPT, Perplexity, Google
 * AI Overviews) rarely cite the footer, so chunk-level extraction found no
 * contact path on 5,813/5,815 pages. This one-line strip at the end of
 * every content block fixes that and doubles as a CRO element: the visitor
 * has just read a full guide and is one tap from a call or WhatsApp chat.
 *
 * Rendered as a client component so the labels follow the active language
 * (EN/MS/ZH) exactly like the rest of the chrome; NAP values come from
 * `config/site.ts` — the same single source of truth as the footer and the
 * Organization JSON-LD, so nothing here can drift.
 */
export function NapContactStrip({ service }: { service?: string }) {
  const t = useTranslations();
  const { lang } = useLang();

  return (
    <section
      aria-label={t("napStrip.label")}
      className="border-t border-slate-100 bg-slate-50/70"
    >
      <div className="container-narrow flex flex-col flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 text-xs font-bold text-[#475569] sm:flex-row sm:text-sm">
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center gap-1.5 text-[#075985] transition-colors hover:text-[#0EA5E9]"
        >
          <Phone className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
          {siteConfig.phoneDisplay}
        </a>
        <a
          href={getWhatsAppLink({ service, lang })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#075985] transition-colors hover:text-[#0EA5E9]"
        >
          <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
          {t("napStrip.whatsapp")}
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-1.5 text-[#075985] transition-colors hover:text-[#0EA5E9]"
        >
          <Mail className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
          {siteConfig.email}
        </a>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
          {siteConfig.addressStreet}, {siteConfig.addressPostal} {siteConfig.addressCity}
        </span>
      </div>
    </section>
  );
}
