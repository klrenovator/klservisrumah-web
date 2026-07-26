"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ChevronDown,
  ClipboardList,
  Clock,
  Hammer,
  Info,
  MessageSquare,
  Package,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent, trackPhoneCall, trackWhatsAppClick } from "@/lib/analytics";
import { ESTIMATE_DISCLAIMER, formatMYR } from "@/lib/estimator/format";
import type { EstimateResult, Severity } from "@/lib/estimator/types";

const severityStyles: Record<Severity, { label: string; className: string; icon: React.ReactNode }> = {
  routine: { label: "Routine", className: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: <ShieldCheck className="h-4 w-4" /> },
  soon: { label: "Book this week", className: "bg-amber-50 text-amber-700 border-amber-200", icon: <CalendarClock className="h-4 w-4" /> },
  urgent: { label: "Urgent — 24 to 48 hours", className: "bg-orange-50 text-orange-700 border-orange-200", icon: <AlertTriangle className="h-4 w-4" /> },
  emergency: { label: "Emergency — act now", className: "bg-rose-50 text-rose-700 border-rose-200", icon: <AlertTriangle className="h-4 w-4" /> }
};

export function EstimateResultPanel({
  result,
  toolName,
  summaryLines,
  onReset,
  onEdit
}: {
  result: EstimateResult;
  toolName: string;
  summaryLines: string[];
  onReset: () => void;
  onEdit: () => void;
}) {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(() =>
    result.addOns.filter((addOn) => addOn.recommended).map((addOn) => addOn.id)
  );
  const [showBreakdown, setShowBreakdown] = useState(false);

  const addOnTotal = useMemo(
    () =>
      result.addOns
        .filter((addOn) => selectedAddOns.includes(addOn.id))
        .reduce((total, addOn) => total + addOn.price, 0),
    [result.addOns, selectedAddOns]
  );

  const grandTotal = result.price + addOnTotal;
  const grandLow = result.low + addOnTotal;
  const grandHigh = result.high + addOnTotal;

  const whatsappMessage = useMemo(() => {
    const chosen = result.addOns.filter((addOn) => selectedAddOns.includes(addOn.id));
    return [
      `Hi KL Servis Rumah, I used your ${toolName} and would like to book.`,
      "",
      "MY ANSWERS",
      ...summaryLines.map((line) => `• ${line}`),
      "",
      "ESTIMATE FROM YOUR WEBSITE",
      `• Recommended service: ${result.recommendedService}`,
      `• Package: ${result.packageName}`,
      `• Estimated cost: ${formatMYR(result.price)}`,
      `• Estimated range: ${formatMYR(result.low)} – ${formatMYR(result.high)}`,
      `• Estimated time: ${result.duration}`,
      chosen.length ? `• Add-ons: ${chosen.map((addOn) => `${addOn.label} (${formatMYR(addOn.price)})`).join(", ")}` : "",
      chosen.length ? `• Estimated total with add-ons: ${formatMYR(grandTotal)}` : "",
      "",
      "Please confirm availability and the final quotation after inspection."
    ]
      .filter(Boolean)
      .join("\n");
  }, [grandTotal, result, selectedAddOns, summaryLines, toolName]);

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
  const siteVisitHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hi KL Servis Rumah, I would like to request a free site visit.\n\n${summaryLines.map((line) => `• ${line}`).join("\n")}\n\nWebsite estimate: ${formatMYR(result.price)} (${formatMYR(result.low)} – ${formatMYR(result.high)}) for ${result.recommendedService}.`
  )}`;

  const severity = result.severity ? severityStyles[result.severity] : null;

  return (
    <div className="space-y-5">
      {/* ── Headline estimate ─────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_20px_60px_-25px_rgba(2,31,68,0.28)]">
        <div className="relative bg-gradient-to-br from-[#075985] via-[#0369A1] to-[#0EA5E9] p-6 text-white sm:p-8">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Your instant estimate
            </span>

            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-sky-100">Estimated cost</p>
            <p className="mt-1 text-5xl font-black leading-none tracking-tight sm:text-6xl">
              {formatMYR(grandTotal)}
            </p>
            <p className="mt-3 text-sm font-bold text-sky-50">
              Estimated range {formatMYR(grandLow)} – {formatMYR(grandHigh)}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Metric icon={<Hammer className="h-4 w-4" />} label="Labour" value={formatMYR(result.labour)} />
              <Metric icon={<Package className="h-4 w-4" />} label="Materials" value={formatMYR(result.materials)} />
              <Metric icon={<Clock className="h-4 w-4" />} label="Time needed" value={result.duration} />
              <Metric icon={<BadgeCheck className="h-4 w-4" />} label="Package" value={result.packageName} />
            </div>
          </div>
        </div>

        {/* Disclaimer — always visible before booking */}
        <div className="border-b border-amber-100 bg-amber-50 px-6 py-4 sm:px-8">
          <p className="flex gap-2.5 text-xs font-bold leading-relaxed text-amber-900">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{ESTIMATE_DISCLAIMER}</span>
          </p>
        </div>

        {/* Recommended service + CTAs */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#0EA5E9]">Recommended service</span>
            {severity ? (
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-wide ${severity.className}`}>
                {severity.icon} {severity.label}
              </span>
            ) : null}
          </div>
          <h3 className="mt-2 text-2xl font-black leading-tight text-[#075985]">{result.recommendedService}</h3>
          {result.severityNote ? (
            <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">{result.severityNote}</p>
          ) : null}
          <Link
            href={result.serviceHref}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-black text-[#0EA5E9] hover:text-[#075985]"
          >
            View full service details <ArrowRight className="h-4 w-4" />
          </Link>

          {result.quoteOnly && result.quoteOnlyReason ? (
            <p className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm font-bold leading-relaxed text-orange-900">
              {result.quoteOnlyReason}
            </p>
          ) : null}

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick({ service: result.recommendedService, page: toolName });
                trackEvent({ action: "estimator_book_now", category: "lead", label: toolName, value: grandTotal });
              }}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#22C55E] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-500/25 transition hover:bg-[#16A34A]"
            >
              <MessageSquare className="h-4 w-4" /> Book Now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ service: result.recommendedService, page: `${toolName}_whatsapp` })}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-emerald-200 bg-white px-5 py-3.5 text-sm font-black text-emerald-700 transition hover:border-emerald-400 hover:bg-emerald-50"
            >
              <MessageSquare className="h-4 w-4" /> Send on WhatsApp
            </a>
            <a
              href={siteVisitHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent({ action: "estimator_site_visit", category: "lead", label: toolName })}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-sky-200 bg-white px-5 py-3.5 text-sm font-black text-[#075985] transition hover:border-[#0EA5E9] hover:bg-sky-50"
            >
              <ClipboardList className="h-4 w-4" /> Request Site Visit
            </a>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackPhoneCall({ page: toolName })}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#075985] transition hover:border-sky-300 hover:bg-sky-50"
            >
              <Phone className="h-4 w-4 text-[#0EA5E9]" /> Call {siteConfig.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#075985] transition hover:border-sky-300 hover:bg-sky-50"
            >
              <Wrench className="h-4 w-4 text-[#0EA5E9]" /> Change my answers
            </button>
            <button
              type="button"
              onClick={onReset}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" /> Start over
            </button>
          </div>
        </div>
      </div>

      {/* ── Diagnostic findings ───────────────────────────────────────── */}
      {result.findings?.length ? (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
          <h3 className="text-lg font-black text-[#075985]">Likely causes & findings</h3>
          <ul className="mt-4 space-y-3">
            {result.findings.map((finding) => (
              <li key={finding.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                <p className="text-sm font-extrabold text-[#075985]">{finding.title}</p>
                <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-600">{finding.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* ── Add-ons ───────────────────────────────────────────────────── */}
      {result.addOns.length ? (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-black text-[#075985]">Suggested add-ons</h3>
            <span className="text-xs font-bold text-slate-500">Tap to add — the total updates instantly</span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {result.addOns.map((addOn) => {
              const active = selectedAddOns.includes(addOn.id);
              return (
                <button
                  key={addOn.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setSelectedAddOns((current) =>
                      active ? current.filter((id) => id !== addOn.id) : [...current, addOn.id]
                    )
                  }
                  className={`flex min-h-16 items-start gap-3 rounded-2xl border-2 p-4 text-left transition ${
                    active ? "border-[#0EA5E9] bg-sky-50" : "border-slate-200 bg-white hover:border-sky-300"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 text-[11px] font-black ${
                      active ? "border-[#0EA5E9] bg-[#0EA5E9] text-white" : "border-slate-300 bg-white text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-sm font-extrabold text-[#075985]">{addOn.label}</span>
                      <span className="text-sm font-black text-[#0EA5E9]">+{formatMYR(addOn.price)}</span>
                    </span>
                    {addOn.note ? (
                      <span className="mt-1 block text-xs font-semibold leading-snug text-slate-500">{addOn.note}</span>
                    ) : null}
                    {addOn.recommended ? (
                      <span className="mt-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-emerald-700">
                        Recommended for you
                      </span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
          {addOnTotal > 0 ? (
            <p className="mt-4 rounded-2xl bg-sky-50 p-4 text-sm font-black text-[#075985]">
              Add-ons selected: {formatMYR(addOnTotal)} · New estimated total {formatMYR(grandTotal)}
            </p>
          ) : null}
        </section>
      ) : null}

      {/* ── Breakdown ─────────────────────────────────────────────────── */}
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <button
          type="button"
          onClick={() => setShowBreakdown((value) => !value)}
          aria-expanded={showBreakdown}
          className="flex w-full items-center justify-between gap-3 p-6 text-left sm:p-7"
        >
          <span>
            <span className="block text-lg font-black text-[#075985]">How we calculated this</span>
            <span className="mt-1 block text-xs font-semibold text-slate-500">
              Every rate comes from the price list published on this website
            </span>
          </span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-[#0EA5E9] transition-transform ${showBreakdown ? "rotate-180" : ""}`}
          />
        </button>
        {showBreakdown ? (
          <div className="border-t border-slate-100 px-6 pb-6 pt-5 sm:px-7">
            <ul className="space-y-3">
              {result.breakdown.map((row, index) => (
                <li key={`${row.label}-${index}`} className="border-b border-dashed border-slate-100 pb-3 last:border-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-sm font-extrabold text-[#075985]">{row.label}</span>
                    <span className="text-sm font-black text-[#0284C7]">{row.value}</span>
                  </div>
                  {row.note ? (
                    <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-500">{row.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-sm font-black uppercase tracking-wider text-[#075985]">What we assumed</h4>
            <ul className="mt-2 space-y-2">
              {result.assumptions.map((assumption) => (
                <li key={assumption} className="flex gap-2 text-xs font-semibold leading-relaxed text-slate-600">
                  <span aria-hidden="true" className="text-[#0EA5E9]">•</span>
                  {assumption}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-xs font-bold leading-relaxed text-slate-600">
              {ESTIMATE_DISCLAIMER}
            </p>
          </div>
        ) : null}
      </section>

      {/* ── Cross-sell & resources ────────────────────────────────────── */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
        <h3 className="text-lg font-black text-[#075985]">Recommended next steps</h3>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {result.related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-[#0EA5E9] hover:bg-sky-50/40"
            >
              <span className="min-w-0">
                <span className="block text-sm font-extrabold text-[#075985]">{link.label}</span>
                {link.desc ? (
                  <span className="mt-0.5 block text-xs font-semibold text-slate-500">{link.desc}</span>
                ) : null}
              </span>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#0EA5E9] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        {result.maintenance?.length ? (
          <>
            <h4 className="mt-6 text-sm font-black uppercase tracking-wider text-[#075985]">Maintenance tips</h4>
            <ul className="mt-2 space-y-2">
              {result.maintenance.map((tip) => (
                <li key={tip} className="flex gap-2 text-xs font-semibold leading-relaxed text-slate-600">
                  <span aria-hidden="true" className="text-emerald-500">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {result.articles?.length ? (
          <>
            <h4 className="mt-6 text-sm font-black uppercase tracking-wider text-[#075985]">Related reading</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {result.articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-600 transition hover:border-[#0EA5E9] hover:bg-sky-50 hover:text-[#075985]"
                >
                  {article.label}
                </Link>
              ))}
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/12 p-3 backdrop-blur">
      <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-sky-100">
        {icon} {label}
      </span>
      <span className="mt-1.5 block text-sm font-black leading-tight text-white">{value}</span>
    </div>
  );
}
