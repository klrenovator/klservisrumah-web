import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { SiteSearch } from "@/components/ui/site-search";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { getBreadcrumbSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo-meta";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Search — Services, Areas, Problems & Guides",
    description:
      "Search KL Servis Rumah for home services, coverage areas, common problems, guides and pricing across Kuala Lumpur and Selangor.",
    path: "/search"
  }),
  robots: {
    // Utility page powered by client-side filtering — indexing it would create
    // thin, near-duplicate results pages. Links are still followed.
    index: false,
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

export default function SearchPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Search", item: "/search" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={[{ label: "Search", href: "/search" }]} />

      <section className="relative bg-gradient-to-b from-slate-50 to-white section border-b border-slate-100">
        <div className="container-default max-w-4xl">
          <div className="text-center mb-10">
            <span className="eyebrow inline-flex items-center gap-2">
              <SearchIcon className="w-3.5 h-3.5" /> Search KL Servis Rumah
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#075985] tracking-tight text-balance">
              Find the right service, area, or answer in seconds
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Type a service (painting, plumbing, waterproofing), an area (Petaling
              Jaya, Puchong), or a symptom (leaking bathroom, peeling paint) — we&apos;ll
              take you straight to the right page.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Suspense fallback={<div className="h-12 rounded-xl bg-slate-100 animate-pulse" />}>
              <SiteSearch />
            </Suspense>
          </div>

          <div className="mt-14">
            <p className="text-center text-xs font-black uppercase tracking-widest text-slate-500 mb-5">
              Popular searches
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {POPULAR_QUERIES.map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 transition-all"
                >
                  {q.label}
                  <ArrowRight className="w-3.5 h-3.5" />
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
