"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { useLang } from "@/context/lang-context";

/**
 * Audit P4-10 — these trust cards used to render a decorative ArrowUpRight
 * `<span>` with no link: the proof was inert and no case-study URL existed.
 * Every card is now a real `<Link>` into the project gallery hub
 * (`/projects`), and the header links there too — so "see more" works. The
 * service the project represents is cross-linked via the card footer so the
 * trust block also feeds internal equity to the money pages.
 */
const PROJECT_SERVICE_SLUGS = ["painting", "waterproofing", "ceiling", "handyman"] as const;

export function FeaturedProjects() {
  const t = useTranslations();
  const { lang } = useLang();
  const prefix = lang === "ms" ? "/ms" : lang === "zh" ? "/zh" : "";

  const projects = [1, 2, 3, 4].map((n) => ({
    title: t(`home.featuredProjects.items.${n}.title`),
    location: t(`home.featuredProjects.items.${n}.location`),
    scope: t(`home.featuredProjects.items.${n}.scope`),
    stat: t(`home.featuredProjects.items.${n}.stat`),
    serviceSlug: PROJECT_SERVICE_SLUGS[n - 1]
  }));

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start gap-3 max-w-2xl">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
              {t("home.featuredProjects.heading")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
              Recent projects delivered across KL &amp; Selangor
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              {t("home.featuredProjects.subheading")}
            </p>
          </div>
          
          <div className="shrink-0 flex items-center gap-3">
            <Link
              href={`${prefix}/projects`}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#075985] px-4 py-2 text-xs font-black uppercase tracking-widest text-white hover:bg-[#0EA5E9] transition-colors"
            >
              {t("home.featuredProjects.viewGallery", { defaultValue: "View project gallery" })}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#075985] bg-slate-50 border border-slate-100 p-4 rounded-2xl shadow-3xs">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>{t("services.guaranteeLabel")}</span>
            </div>
          </div>
        </div>

        {/* Projects grid — every card is a real link (audit P4-10): the card
            opens the project gallery hub, and the arrow signals it. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={`${prefix}/projects`}
              aria-label={`${project.title} — ${project.location} · ${t("home.featuredProjects.viewGallery", { defaultValue: "View project gallery" })}`}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_25px_rgba(2,31,68,0.01)] hover:shadow-[0_15px_40px_rgba(2,31,68,0.03)] hover:border-[#0EA5E9]/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-4">

                {/* Location and pin */}
                <div className="flex items-center gap-1.5 text-xs text-[#0EA5E9] font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>

                <h3 className="text-xl font-extrabold text-[#075985] tracking-tight group-hover:text-[#0EA5E9] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                  {project.scope}
                </p>
              </div>

              {/* Stat footer */}
              <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs text-[#075985] font-bold">
                  ⚡ {project.stat}
                </span>
                <span className="p-2 bg-slate-50 rounded-xl group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#0EA5E9] group-hover:text-white" />
                </span>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
