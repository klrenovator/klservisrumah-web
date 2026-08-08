import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import { SmartServiceFinder } from "@/components/ui/smart-service-finder";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { servicesData } from "@/config/services-data";
import { areaPages } from "@/config/area-data";
import { buildMetadata } from "@/lib/seo-meta";
import { getServerTranslator } from "@/lib/i18n-server";

/** Async server wrapper — resolves the searchParams promise before passing `q` to the client component. */
async function SearchPageFinder({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const resolved = await searchParams;
  return <SmartServiceFinder initialQuery={resolved.q || ""} />;
}

export const metadata: Metadata = buildMetadata({
  title: "Carian Servis Rumah Pintar — Pengesyoran 3 Bahasa Servis Rumah & Pengiraan Kos",
  description:
    "Cari servis rumah KL Servis Rumah dalam Bahasa Melayu, Inggeris, atau Cina. Laman carian pintar dengan pengecaman problema, harga anggaran, kalkulator kos, dan harga tetap sebelum kerja bermula.",
  path: "/ms/search",
  languageUrls: {
    en: "/search",
    ms: "/ms/search",
    zh: "/zh/search"
  },
  ogLocale: "ms_MY",
  ogAlternateLocales: ["en_MY", "zh_MY"],
  keywords: [
    "carian servis rumah",
    "perkhidmatan rumah KL Bahasa Melayu",
    "carian masalah rumah",
    "kalkulator kos renovation",
    "tukang rumah KL"
  ]
});

const POPULAR_QUERIES = [
  { label: "Harga cat rumah", href: "/ms/services/painting/cost" },
  { label: "PU grouting kalis air", href: "/ms/services/waterproofing" },
  { label: "Baiki siling plaster", href: "/ms/services/ceiling" },
  { label: "Baiki bilik air bocor", href: "/ms/problems/leaking-bathroom" },
  { label: "Tukang paip same-day KL", href: "/ms/near-me/plumbing" },
  { label: "Pasang TV Petaling Jaya", href: "/ms/areas/petaling-jaya/handyman" },
  { label: "Harga kabel elektrik", href: "/ms/services/electrical/cost" },
  { label: "Deep cleaning Subang Jaya", href: "/ms/areas/subang-jaya/deep-cleaning" }
];

export default function MsSearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const t = getServerTranslator("ms");

  return (
    <>
      <Breadcrumbs
        items={[
          { name: t("breadcrumbs.home"), href: "/ms" },
          { name: "Carian Servis Pintar", href: "/ms/search" }
        ]}
      />

      <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-16 sm:py-24 border-b border-slate-800">
        <div className="container-default max-w-6xl">
          <Suspense fallback={<div className="h-40 rounded-3xl bg-slate-800 animate-pulse" />}>
            <SearchPageFinder searchParams={searchParams} />
          </Suspense>

          <div className="mt-14">
            <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-5">
              Pautan perkhidmatan popular
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
            <h2 className="text-lg font-extrabold text-[#075985] mb-3">Semak imbas perkhidmatan</h2>
            <ul className="grid grid-cols-2 gap-2">
              {Object.values(servicesData).slice(0, 10).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/ms/services/${s.slug}`}
                    className="text-sm font-semibold text-slate-700 hover:text-sky-600"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/ms/services"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700"
            >
              Semua perkhidmatan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <h2 className="text-lg font-extrabold text-[#075985] mb-3">Semak imbas kawasan</h2>
            <ul className="grid grid-cols-2 gap-2">
              {areaPages.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/ms/areas/${a.slug}`}
                    className="text-sm font-semibold text-slate-700 hover:text-emerald-600"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/ms/areas"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700"
            >
              Semua kawasan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
