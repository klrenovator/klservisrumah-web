"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutGrid, X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { problemPages } from "@/config/problem-data";
import { useLang } from "@/context/lang-context";
import { useTranslations } from "@/hooks/use-translations";

const MAIN_LINK_KEYS: Record<string, string> = {
  "/": "nav.home",
  "/services": "nav.services",
  "/pricing": "nav.pricing",
  "/faq": "nav.faq",
  "/blog": "nav.blog",
  "/about": "nav.about",
  "/contact": "nav.contact"
};

const EXPLORE_LINKS: { href: string; key: string }[] = [
  { href: "/areas", key: "areas" },
  { href: "/near-me", key: "nearMe" },
  { href: "/projects", key: "projects" },
  { href: "/guides", key: "guides" },
  { href: "/compare", key: "compare" },
  { href: "/top", key: "top" },
  { href: "/brands", key: "brands" },
  { href: "/answers", key: "answers" },
  { href: "/process", key: "process" },
  { href: "/commercial", key: "commercial" },
  { href: "/residential", key: "residential" },
  { href: "/seasonal", key: "seasonal" }
];

const TOOL_LINKS = [
  { href: "/tools/painting-calculator", label: "Painting Cost Calculator" },
  { href: "/tools/ceiling-calculator", label: "Ceiling Cost Calculator" },
  { href: "/tools/plumbing-diagnostic", label: "Plumbing Diagnostic" },
  { href: "/tools/leak-triage", label: "Leak Triage" },
  { href: "/tools/tv-mount-advisor", label: "TV Mount Advisor" }
];

/**
 * "All Pages" drawer — klrenovator.com-style menu button that opens a panel
 * listing every area of the website: main pages, all 28 services (localized
 * names), problem guides, free tools and explore hubs.
 */
export function AllPagesMenu() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const t = useTranslations();
  const services = Object.values(servicesData);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("menu.aria")}
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#075985] shadow-xs hover:border-[#0EA5E9]/40 hover:text-[#0EA5E9] transition-colors"
      >
        <LayoutGrid className="h-4 w-4 text-[#0EA5E9]" aria-hidden="true" />
        <span className="hidden xl:inline">{t("menu.button")}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label={t("menu.title")}>
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 flex h-full w-full flex-col bg-white shadow-2xl sm:max-w-md animate-in slide-in-from-right duration-300">
            <div className="flex items-start justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <p className="text-base font-extrabold text-[#075985]">{t("menu.title")}</p>
                <p className="text-xs text-[#475569]">{t("menu.subtitle")}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("menu.close")}
                className="rounded-xl border border-slate-200 p-2 text-[#475569] hover:bg-slate-50 hover:text-[#075985] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-10">
              {/* Main pages */}
              <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">{t("menu.main")}</p>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-slate-100 px-3 py-2 text-sm font-semibold text-[#075985] hover:border-[#0EA5E9]/40 hover:bg-[#F0F9FF] transition-colors"
                  >
                    {t(MAIN_LINK_KEYS[item.href] ?? "nav.home")}
                  </Link>
                ))}
              </div>

              {/* All services */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  {t("menu.services")} ({services.length})
                </p>
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="text-xs font-bold text-[#0284C7] hover:text-[#0369A1]"
                >
                  {t("common.viewAll")}
                </Link>
              </div>
              <ul className="mt-2 divide-y divide-slate-50 rounded-xl border border-slate-100">
                {services.map((service) => {
                  const label =
                    lang === "en"
                      ? service.title
                      : (service.i18n?.[lang as "ms" | "zh"]?.title ?? service.title);
                  return (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between gap-2 px-3 py-2 text-sm text-[#334155] hover:bg-[#F0F9FF] hover:text-[#075985] transition-colors"
                      >
                        <span className="truncate font-medium">{label}</span>
                        <span className="shrink-0 text-xs font-bold text-[#0284C7]">{service.startPrice}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Problem guides */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  {t("menu.problems")} ({problemPages.length})
                </p>
                <Link
                  href="/problems"
                  onClick={() => setOpen(false)}
                  className="text-xs font-bold text-[#0284C7] hover:text-[#0369A1]"
                >
                  {t("common.viewAll")}
                </Link>
              </div>
              <ul className="mt-2 space-y-0.5">
                {problemPages.map((problem) => (
                  <li key={problem.slug}>
                    <Link
                      href={`/problems/${problem.slug}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-1.5 px-1 py-1.5 text-sm text-[#475569] hover:text-[#075985] transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[#0EA5E9]" aria-hidden="true" />
                      <span className="truncate">{problem.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Free tools */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{t("menu.tools")}</p>
                <Link
                  href="/tools"
                  onClick={() => setOpen(false)}
                  className="text-xs font-bold text-[#0284C7] hover:text-[#0369A1]"
                >
                  {t("common.viewAll")}
                </Link>
              </div>
              <ul className="mt-2 space-y-0.5">
                {TOOL_LINKS.map((tool) => (
                  <li key={tool.href}>
                    <Link
                      href={tool.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-1.5 px-1 py-1.5 text-sm text-[#475569] hover:text-[#075985] transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[#0EA5E9]" aria-hidden="true" />
                      <span>{tool.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Explore hubs */}
              <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">{t("menu.explore")}</p>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {EXPLORE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm text-[#334155] hover:bg-slate-50 hover:text-[#075985] transition-colors"
                  >
                    {t(`menu.links.${link.key}`)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
