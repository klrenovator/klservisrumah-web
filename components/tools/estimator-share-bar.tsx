"use client";

import React, { useState } from "react";
import { Check, Copy, Link2, MessageSquare } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { Translator } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo-meta";

/**
 * The "send this estimator to a customer" bar.
 *
 * Two actions, both acting on the canonical absolute URL of the estimator:
 *
 *   • Copy link — the owner pastes it into any chat. Uses the Clipboard API
 *     with a hidden-textarea `execCommand` fallback for older WebViews.
 *   • WhatsApp — opens `wa.me` with the estimator URL and a short pre-written
 *     intro, so the owner picks a contact and forwards in one tap.
 *
 * `variant`:
 *   • "page"   — the standalone `/estimate/<slug>` page: a full-width bar with
 *                the visible URL and the forwarding hint.
 *   • "inline" — the compact row under the estimator on a service page.
 */
export function EstimatorShareBar({
  path,
  serviceName,
  translator,
  variant = "page"
}: {
  /** Site-relative path of the estimator, e.g. "/estimate/electrical". */
  path: string;
  /** Customer-facing service name, interpolated into the WhatsApp message. */
  serviceName: string;
  /**
   * Full-locale translator (always `useTranslations()` at the call sites) —
   * required, because the share-bar copy lives in the `estimateShare`
   * namespace, which the lean estimator-chrome fallback does not carry.
   */
  translator: Translator;
  variant?: "page" | "inline";
}) {
  const t = translator;
  const [copied, setCopied] = useState(false);

  const absoluteUrl = `${SITE_URL}${path}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    `${t("estimateShare.shareWhatsAppText", { service: serviceName, url: absoluteUrl })}`
  )}`;

  const copyLink = async () => {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(absoluteUrl);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      // Fallback for browsers/WebViews without the async clipboard API.
      const holder = document.createElement("textarea");
      holder.value = absoluteUrl;
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
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
      trackEvent({ action: "estimator_copy_link", category: "engagement", label: path });
    }
  };

  const trackShare = () => {
    trackEvent({ action: "estimator_share_whatsapp", category: "engagement", label: path });
  };

  if (variant === "inline") {
    return (
      <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 px-3.5 py-2.5">
        <span className="flex min-w-0 items-center gap-1.5 text-xs font-bold text-slate-500">
          <Link2 className="h-3.5 w-3.5 shrink-0 text-[#0EA5E9]" aria-hidden="true" />
          <span className="truncate">{absoluteUrl.replace(/^https?:\/\/(www\.)?/, "")}</span>
        </span>
        <span className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={copyLink}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-black text-[#075985] transition hover:border-sky-400 hover:bg-sky-50"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? t("estimateShare.copied") : t("estimateShare.copyLink")}
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackShare}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-black text-white transition hover:bg-[#128C7E]"
          >
            <MessageSquare className="h-3.5 w-3.5" /> {t("estimateShare.shareWhatsApp")}
          </a>
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-sky-200 bg-sky-50/70 p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-sky-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-600 sm:text-sm">
          <Link2 className="h-4 w-4 shrink-0 text-[#0EA5E9]" aria-hidden="true" />
          <span className="truncate">{absoluteUrl.replace(/^https?:\/\/(www\.)?/, "")}</span>
        </span>
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-[#0EA5E9] bg-white px-4 py-2.5 text-sm font-black text-[#075985] transition hover:bg-sky-50"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
          {copied ? t("estimateShare.copied") : t("estimateShare.copyLink")}
        </button>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackShare}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-black text-white shadow-md shadow-[#25D366]/20 transition hover:bg-[#128C7E]"
        >
          <MessageSquare className="h-4 w-4" /> {t("estimateShare.shareWhatsApp")}
        </a>
      </div>
      <p className="mt-2.5 text-xs font-semibold leading-relaxed text-slate-500">
        {t("estimateShare.shareHint")}
      </p>
    </div>
  );
}
