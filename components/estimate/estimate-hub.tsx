"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy, MessageSquare, Share2, Sparkles } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/config/site";
import { SITE_URL } from "@/lib/seo-meta";
import type { EstimateLinkEntry } from "@/config/estimate-links";

/**
 * The `/estimate` hub: every service's shareable estimator link on one page.
 *
 * Built for the business owner — open this page, tap "Copy link" on the
 * service the customer asked about, paste it into WhatsApp. Every card also
 * carries a one-tap WhatsApp forward button with a pre-written intro message.
 *
 * The data (slugs, titles, published starting prices, dedicated-tool flags)
 * is server-resolved and passed in, so the only client code here is the
 * copy/share interaction and the language pill.
 */
export function EstimateHub({ links }: { links: EstimateLinkEntry[] }) {
  const t = useTranslations();
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const copyLink = async (entry: EstimateLinkEntry) => {
    const url = `${SITE_URL}${entry.path}`;
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      const holder = document.createElement("textarea");
      holder.value = url;
      holder.setAttribute("readonly", "");
      holder.style.position = "fixed";
      holder.style.opacity = "0";
      document.body.appendChild(holder);
      holder.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      document.body.removeChild(holder);
    }
    if (ok) {
      setCopiedSlug(entry.slug);
      window.setTimeout(() => setCopiedSlug((current) => (current === entry.slug ? null : current)), 2200);
      trackEvent({ action: "estimator_copy_link", category: "engagement", label: entry.path });
    }
  };

  const whatsappHref = (entry: EstimateLinkEntry) =>
    `https://wa.me/?text=${encodeURIComponent(
      t("estimateShare.shareWhatsAppText", { service: entry.title, url: `${SITE_URL}${entry.path}` })
    )}`;

  return (
    <div className="bg-gradient-to-b from-sky-50/70 via-white to-white">
      <div className="container-narrow pb-16 pt-8 sm:pt-12">
        {/* ── Heading ─────────────────────────────────────────────────── */}
        <span className="eyebrow">
          <Sparkles className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
          {t("estimateShare.hubEyebrow")}
        </span>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[#075985] sm:text-4xl">
          {t("estimateShare.hubHeading")}
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
          {t("estimateShare.hubSub")}
        </p>

        {/* ── How to share ────────────────────────────────────────────── */}
        <section className="mt-6 rounded-3xl border border-sky-200 bg-sky-50/70 p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-base font-black text-[#075985]">
            <Share2 className="h-4 w-4 text-[#0369A1]" aria-hidden="true" />
            {t("estimateShare.hubHowTitle")}
          </h2>
          <ol className="mt-3 space-y-2">
            {[
              t("estimateShare.hubHow1"),
              t("estimateShare.hubHow2"),
              t("estimateShare.hubHow3")
            ].map((line, index) => (
              <li key={line} className="flex gap-2.5 text-sm font-semibold leading-relaxed text-slate-600">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0369A1] text-[10px] font-black text-white">
                  {index + 1}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── The link grid ───────────────────────────────────────────── */}
        <p className="mt-8 text-xs font-black uppercase tracking-widest text-slate-500">
          {t("estimateShare.allServices", { count: String(links.length) })}
        </p>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {links.map((entry) => {
            const copied = copiedSlug === entry.slug;
            return (
              <div
                key={entry.slug}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_-28px_rgba(2,31,68,0.4)] transition hover:border-sky-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-black leading-snug text-[#075985]">{entry.title}</h3>
                  {entry.kind === "dedicated" ? (
                    <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-amber-800">
                      {t("estimateShare.dedicatedBadge")}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-xs font-bold text-slate-500">
                  {t("estimateShare.from", { price: entry.startPrice })}
                </p>
                <p className="mt-2 truncate rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-bold text-slate-500">
                  {`${SITE_URL}${entry.path}`.replace(/^https?:\/\/(www\.)?/, "")}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Link
                    href={entry.resolvedPath}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-xl bg-gradient-to-br from-[#075985] to-[#0369A1] px-4 py-2.5 text-xs font-black text-white transition hover:from-[#0c4a6e] hover:to-[#0369A1]"
                  >
                    {t("estimateShare.openEstimator")} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => copyLink(entry)}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border-2 border-sky-200 bg-white px-3.5 py-2.5 text-xs font-black text-[#075985] transition hover:border-sky-400 hover:bg-sky-50"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? t("estimateShare.copied") : t("estimateShare.copyLink")}
                  </button>
                  <a
                    href={whatsappHref(entry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("estimateShare.shareWhatsApp")} — ${entry.title}`}
                    onClick={() =>
                      trackEvent({ action: "estimator_share_whatsapp", category: "engagement", label: entry.path })
                    }
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#15803D] text-white transition hover:bg-[#166534]"
                  >
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Direct line ─────────────────────────────────────────────── */}
        <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-bold text-slate-600">
          {siteConfig.phoneDisplay} · {siteConfig.hours}
        </p>
      </div>
    </div>
  );
}
