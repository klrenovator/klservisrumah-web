import Link from "next/link";
import { ArrowRight, MapPin, Wrench, AlertTriangle, BookOpen, Calculator, Users } from "lucide-react";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { problemPages } from "@/config/problem-data";
import { siteConfig } from "@/config/site";

// Curated top-lists — prioritised for topical authority + click depth.
// Every homepage internal link keeps the site's SEO PageRank flowing to the
// most valuable revenue pages (services, areas) and answer-engine pages
// (problems, guides). Mirrors the KLRenovator information-architecture
// approach but scaled to KL Servis Rumah's multi-vertical catalogue.
const TOP_SERVICES = [
  "painting",
  "plumbing",
  "ceiling",
  "waterproofing",
  "handyman",
  "electrical",
  "tiling",
  "flooring"
];

const TOP_AREAS = [
  "kuala-lumpur",
  "petaling-jaya",
  "subang-jaya",
  "shah-alam",
  "puchong",
  "klang",
  "cheras",
  "ampang"
];

const TOP_PROBLEMS = [
  "peeling-paint-malaysia",
  "damp-walls-paint-bubbling",
  "ceiling-mold-stains",
  "leaking-bathroom",
  "low-water-pressure",
  "clogged-drain",
  "sagging-ceiling",
  "toilet-not-flushing"
];

const TOP_TOOLS = [
  { slug: "painting-calculator", label: "Painting Cost Calculator" },
  { slug: "leak-triage", label: "Water Leak Triage" },
  { slug: "ceiling-calculator", label: "Ceiling Repair Estimator" },
  { slug: "plumbing-diagnostic", label: "Plumbing Diagnostic" },
  { slug: "tv-mount-advisor", label: "TV Mount Advisor" }
];

export function HomepageAeoLinks() {
  const services = TOP_SERVICES.map((s) => servicesData[s]).filter(Boolean);
  const areas = TOP_AREAS.map((slug) => areaPages.find((a) => a.slug === slug)).filter(
    (a): a is (typeof areaPages)[number] => Boolean(a)
  );
  const problems = TOP_PROBLEMS.map((slug) => problemPages.find((p) => p.slug === slug)).filter(
    (p): p is (typeof problemPages)[number] => Boolean(p)
  );

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white section border-y border-slate-100">
      <div className="container-default">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="eyebrow inline-flex items-center gap-2">
            <Users className="w-3.5 h-3.5" />
            Explore KL Servis Rumah
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight text-balance">
            Everything a Klang Valley homeowner needs — all in one place
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Jump straight to the service, area, common home problem or planning tool
            that matches what you&apos;re dealing with today. Every page is written by
            local tradesmen and updated for {new Date().getFullYear()}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Top services */}
          <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#075985] tracking-tight">
                  Top home services
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Full scope, warranty and pricing on every page
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-sky-50 hover:border-sky-200 px-3.5 py-3 text-sm font-semibold text-slate-700 hover:text-sky-700 transition-all"
                  >
                    <span className="truncate">{s.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700"
            >
              Browse all {Object.keys(servicesData).length}+ services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Top areas */}
          <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#075985] tracking-tight">
                  Areas we cover
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Same-day dispatch across Klang Valley
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50 hover:border-emerald-200 px-3.5 py-3 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-all"
                  >
                    <span className="truncate">{a.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/areas"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700"
            >
              View all {siteConfig.areas.length}+ service areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Common problems */}
          <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#075985] tracking-tight">
                  Common problems
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Symptom, cause, fix, and average cost
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {problems.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/problems/${p.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-amber-50 hover:border-amber-200 px-3.5 py-3 text-sm font-semibold text-slate-700 hover:text-amber-700 transition-all"
                  >
                    <span className="truncate">{p.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/problems"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700"
            >
              See every diagnosed problem
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Planning tools + guides */}
          <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#075985] tracking-tight">
                  Free tools & guides
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Get a ballpark estimate before you book
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {TOP_TOOLS.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-violet-50 hover:border-violet-200 px-3.5 py-3 text-sm font-semibold text-slate-700 hover:text-violet-700 transition-all"
                  >
                    <span className="truncate">{tool.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-violet-600 hover:text-violet-700"
              >
                <BookOpen className="w-4 h-4" /> Read the blog
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-1.5 text-violet-600 hover:text-violet-700"
              >
                <BookOpen className="w-4 h-4" /> How-to guides
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 text-violet-600 hover:text-violet-700"
              >
                <Calculator className="w-4 h-4" /> Full price list
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
