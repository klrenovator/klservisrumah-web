import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { SmartServiceFinder } from "@/components/ui/smart-service-finder";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { buildMetadata } from "@/lib/seo-meta";

/** Async server wrapper — resolves the searchParams promise before passing `q` to the client component. */
async function SearchPageFinder({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const resolved = await searchParams;
  return <SmartServiceFinder initialQuery={resolved.q || ""} />;
}

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Smart Service Finder — Instant 3-Language Home Service Discovery",
    description:
      "Search KL Servis Rumah for home services, coverage areas, common problems, guides, pricing, and cost calculators across Kuala Lumpur and Selangor in English, Malay, or Chinese.",
    path: "/search"
  }),
  robots: {
    index: true,
    follow: true
  }
};

const POPULAR_QUERIES = [
  { label: "House painting price", href: "/services/painting/cost" },
  { label: "PU grouting waterproofing", href: "/services/waterproofing" },
  { label: "Plaster ceiling repair", href: "/services/ceiling" },
  { label: "Leaking bathroom fix", href: "/problems/leaking-bathroom" },
  { label: "Same-day plumber KL", href: "/near-me/plumbing" },
  { label: "TV mounting Petaling Jaya", href: "/areas/petaling-jaya/handyman" },
  { label: "Electrical wiring cost", href: "/services/electrical/cost" },
  { label: "Deep cleaning Subang Jaya", href: "/areas/subang-jaya/deep-cleaning" }
];

export default function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Smart Service Finder", href: "/search" }]} />

      <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-16 sm:py-24 border-b border-slate-800">
        <div className="container-default max-w-6xl">
          <Suspense fallback={<div className="h-40 rounded-3xl bg-slate-800 animate-pulse" />}>
            <SearchPageFinder searchParams={searchParams} />
          </Suspense>

          <div className="mt-14">
            <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-5">
              Popular service shortcuts
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {POPULAR_QUERIES.map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-sky-400 hover:bg-sky-500/20 hover:text-white transition-all"
                >
                  {q.label}
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directory shortcut — helps users who prefer browsing to searching */}
      <section className="bg-white section-tight border-b border-slate-100">
        <div className="container-default grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <h2 className="text-lg font-extrabold text-[#075985] mb-3">Browse services</h2>
            <ul className="grid grid-cols-2 gap-2">
              {Object.values(servicesData).slice(0, 10).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm font-semibold text-slate-700 hover:text-sky-600"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700"
            >
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <h2 className="text-lg font-extrabold text-[#075985] mb-3">Browse areas</h2>
            <ul className="grid grid-cols-2 gap-2">
              {areaPages.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm font-semibold text-slate-700 hover:text-emerald-600"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/areas"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700"
            >
              All areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
