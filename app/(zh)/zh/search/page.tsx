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
  title: "智能家居服务搜索 — 马来文、英文与中文三语服务查找与估价",
  description:
    "在吉隆坡与雪兰莪搜索 KL Servis Rumah 的家居维修装潢服务，可用马来文、英文或中文输入问题描述。智能搜索识别问题、提供工项范围、在线估价计算器与固定报价保障。",
  path: "/zh/search",
  languageUrls: {
    en: "/search",
    ms: "/ms/search",
    zh: "/zh/search"
  },
  ogLocale: "zh_MY",
  ogAlternateLocales: ["en_MY", "ms_MY"],
  keywords: [
    "吉隆坡家居维修搜索",
    "中文家居服务",
    "马来西亚装修搜索",
    "在线估价计算器",
    "吉隆坡杂工服务"
  ]
});

const POPULAR_QUERIES = [
  { label: "油漆房子价格", href: "/zh/services/painting/cost" },
  { label: "PU灌注防水", href: "/zh/services/waterproofing" },
  { label: "修补石膏天花板", href: "/zh/services/ceiling" },
  { label: "维修厕所漏水", href: "/zh/problems/leaking-bathroom" },
  { label: "吉隆坡当日水管维修", href: "/zh/near-me/plumbing" },
  { label: "八打灵再也安装电视", href: "/zh/areas/petaling-jaya/handyman" },
  { label: "电工布线价格", href: "/zh/services/electrical/cost" }
];

export default function ZhSearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const t = getServerTranslator("zh");

  return (
    <>
      <Breadcrumbs
        items={[
          { name: t("breadcrumbs.home"), href: "/zh" },
          { name: "智能服务搜索", href: "/zh/search" }
        ]}
      />

      <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-16 sm:py-24 border-b border-slate-800">
        <div className="container-default max-w-6xl">
          <Suspense fallback={<div className="h-40 rounded-3xl bg-slate-800 animate-pulse" />}>
            <SearchPageFinder searchParams={searchParams} />
          </Suspense>

          <div className="mt-14">
            <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-5">
              热门服务快捷链接
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
            <h2 className="text-lg font-extrabold text-[#075985] mb-3">浏览服务</h2>
            <ul className="grid grid-cols-2 gap-2">
              {Object.values(servicesData).slice(0, 10).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/zh/services/${s.slug}`}
                    className="text-sm font-semibold text-slate-700 hover:text-sky-600"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/zh/services"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700"
            >
              所有服务 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <h2 className="text-lg font-extrabold text-[#075985] mb-3">浏览地区</h2>
            <ul className="grid grid-cols-2 gap-2">
              {areaPages.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/zh/areas/${a.slug}`}
                    className="text-sm font-semibold text-slate-700 hover:text-emerald-600"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/zh/areas"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700"
            >
              所有地区 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
