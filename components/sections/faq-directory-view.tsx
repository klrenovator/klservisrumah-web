import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FaqCategory } from "@/lib/faq-directory";

type SupportedLang = "en" | "ms" | "zh";

/**
 * Translated UI chrome for the FAQ directory section.
 *
 * The directory data is resolved by `getFaqDirectory(locale)` before it reaches
 * this component. That keeps the complete FAQ set (not just the page chrome)
 * in the selected language while preserving the same questions, links and
 * schema coverage in all three hubs.
 */
const DIRECTORY_COPY: Record<SupportedLang, {
  eyebrow: string;
  title: (count: number) => string;
  body: string;
  questions: (n: number) => string;
  readMore: string;
  noMatches: string;
}> = {
  en: {
    eyebrow: "Complete FAQ Directory",
    title: (count) => `Every question, answered — ${count.toLocaleString()}+ FAQs in one place`,
    body: "We pulled every FAQ from every service, problem guide, coverage area, suburb, comparison and buying guide on this site into one searchable directory. Tap any question to expand it, or follow the link to read the full page it belongs to.",
    questions: (n) => `${n} question${n === 1 ? "" : "s"}`,
    readMore: "Read more on",
    noMatches: "No matches in this topic.",
  },
  ms: {
    eyebrow: "Direktori Soalan Lazim Lengkap",
    title: (count) => `Setiap soalan, dijawab — ${count.toLocaleString()}+ soalan lazim di satu tempat`,
    body: "Kami mengumpulkan setiap soalan lazim daripada setiap perkhidmatan, panduan masalah, kawasan liputan, pinggir bandar, perbandingan dan panduan pembelian di tapak ini ke dalam satu direktori yang boleh dicari. Ketik mana-mana soalan untuk mengembangkannya, atau ikuti pautan untuk membaca halaman penuh yang berkaitan.",
    questions: (n) => `${n} soalan`,
    readMore: "Baca lagi di",
    noMatches: "Tiada padanan dalam topik ini.",
  },
  zh: {
    eyebrow: "完整常见问题目录",
    title: (count) => `所有问题，逐一解答 — ${count.toLocaleString()}+ 个常见问题汇集一处`,
    body: "我们将本站每个服务、问题指南、服务范围、郊区、对比和选购指南中的所有常见问题汇总到一个可搜索的目录中。点击任何问题即可展开，或点击链接前往其所属的完整页面。",
    questions: (n) => `${n} 个问题`,
    readMore: "阅读更多：",
    noMatches: "该主题下没有匹配项。",
  },
};

/** Translated category titles and descriptions — mapped by category.id */
const CATEGORY_COPY: Record<SupportedLang, Record<string, { title: string; description: string }>> = {
  en: {
    services: { title: "Services", description: "Pricing, materials, process and warranty questions for every service we offer." },
    problems: { title: "Home Problems & Diagnostics", description: "Common symptoms Malaysian homeowners search for — causes, fixes and when to call a professional." },
    areas: { title: "Coverage Areas", description: "Response times, neighbourhood coverage and local service questions for KL & Selangor." },
    suburbs: { title: "Suburbs & Neighbourhoods", description: "Same-day availability, condo/JMB rules and pricing questions for individual suburbs." },
    clusters: { title: "Service Deep-Dives", description: "Focused sub-topic guides within each service — interior painting, leak repair, ceiling installation and more." },
    guides: { title: "How-To Guides", description: "Practical guidance for choosing a contractor, comparing paint brands, and other decision-support topics." },
    comparisons: { title: "Comparisons", description: "Side-by-side comparisons of materials and methods — PU grouting vs tile hacking, PVC vs copper pipes and more." },
    maintenance: { title: "Maintenance Checklists", description: "Seasonal and routine maintenance schedules for condos, landed homes and rental properties." },
    seasonal: { title: "Seasonal Planning", description: "Monsoon prep, festive-season repaints and year-end renovation planning questions." },
    commercial: { title: "Commercial Properties", description: "Office, retail and strata-facility scheduling and scope questions." },
    residential: { title: "Residential Properties", description: "Condo, apartment, terrace and bungalow specific service questions." },
    brands: { title: "Brands & Materials", description: "Application questions for the paint, pipe, gypsum board and waterproofing brands we work with." },
    top: { title: "Buying Considerations", description: "What to check before hiring a painter, plumber, ceiling or waterproofing contractor in KL & Selangor." },
  },
  ms: {
    services: { title: "Perkhidmatan", description: "Soalan harga, bahan, proses dan jaminan untuk setiap perkhidmatan yang kami tawarkan." },
    problems: { title: "Masalah Rumah & Diagnostik", description: "Simptom biasa yang dicari oleh pemilik rumah Malaysia — punca, penyelesaian dan bila perlu memanggil profesional." },
    areas: { title: "Kawasan Liputan", description: "Masa tindak balas, liputan kejiranan dan soalan perkhidmatan tempatan untuk KL & Selangor." },
    suburbs: { title: "Pinggir Bandar & Kejiranan", description: "Ketersediaan hari yang sama, peraturan kondo/JMB dan soalan harga untuk pinggir bandar individu." },
    clusters: { title: "Panduan Mendalam Perkhidmatan", description: "Panduan sub-topik tertumpu dalam setiap perkhidmatan — pengecatan dalaman, pembaikan kebocoran, pemasangan siling dan banyak lagi." },
    guides: { title: "Panduan Cara", description: "Panduan praktikal untuk memilih kontraktor, membandingkan jenama cat dan topik sokongan keputusan lain." },
    comparisons: { title: "Perbandingan", description: "Perbandingan sebelah-sebelah bahan dan kaedah — grouting PU vs hacking jubin, paip PVC vs tembaga dan banyak lagi." },
    maintenance: { title: "Senarai Semak Penyelenggaraan", description: "Jadual penyelenggaraan bermusim dan rutin untuk kondo, rumah bertanah dan hartanah sewa." },
    seasonal: { title: "Perancangan Bermusim", description: "Persediaan monsun, pengecatan semula musim perayaan dan soalan perancangan pengubahsuaian akhir tahun." },
    commercial: { title: "Hartanah Komersial", description: "Soalan penjadualan dan skop pejabat, kedai dan kemudahan strata." },
    residential: { title: "Hartanah Kediaman", description: "Soalan perkhidmatan khusus untuk kondo, pangsapuri, rumah teres dan banglo." },
    brands: { title: "Jenama & Bahan", description: "Soalan aplikasi untuk jenama cat, paip, papan gipsum dan kalis air yang kami gunakan." },
    top: { title: "Pertimbangan Pembelian", description: "Apa yang perlu disemak sebelum mengupah tukang cat, tukang paip, siling atau kontraktor kalis air di KL & Selangor." },
  },
  zh: {
    services: { title: "服务项目", description: "关于我们提供的每项服务的价格、材料、流程和保修问题。" },
    problems: { title: "家居问题与诊断", description: "马来西亚业主常搜索的症状——原因、解决方案以及何时请专业人士。" },
    areas: { title: "服务范围", description: "吉隆坡和雪兰莪的响应时间、社区覆盖和本地服务问题。" },
    suburbs: { title: "郊区与社区", description: "当天上门 availability、公寓/JMB 规定以及各郊区的价格问题。" },
    clusters: { title: "服务深度指南", description: "每项服务内的细分主题指南——室内油漆、漏水维修、天花板安装等。" },
    guides: { title: "操作指南", description: "选择承包商、比较油漆品牌等决策支持的实用指南。" },
    comparisons: { title: "对比分析", description: "材料和方法的逐项对比——PU 灌浆 vs 敲砖、PVC vs 铜管等。" },
    maintenance: { title: "维护清单", description: "公寓、排屋和出租房的季节性和常规维护计划。" },
    seasonal: { title: "季节规划", description: "季风准备、节日重新粉刷和年底翻新规划问题。" },
    commercial: { title: "商业地产", description: "办公室、零售店和分层设施的排期和范围问题。" },
    residential: { title: "住宅地产", description: "公寓、套房、排屋和洋房的专属服务问题。" },
    brands: { title: "品牌与材料", description: "我们使用的油漆、管道、石膏板和防水品牌的应用问题。" },
    top: { title: "选购须知", description: "在吉隆坡和雪兰莪聘请油漆工、水管工、天花板或防水承包商前要检查什么。" },
  },
};

/**
 * Renders the complete site-wide FAQ directory as static, crawlable HTML.
 * Every question links back to the page it came from so visitors (and
 * search engines) can jump straight to full context, pricing tables, and
 * booking CTAs for that topic.
 */
export function FaqDirectoryView({ categories, totalCount, lang = "en" }: { categories: FaqCategory[]; totalCount: number; lang?: SupportedLang }) {
  const copy = DIRECTORY_COPY[lang];
  const catCopy = CATEGORY_COPY[lang];

  return (
    <section className="bg-white py-16 sm:py-20" id="faq-directory">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0369A1] bg-[#E0F2FE]/40 px-4 py-1.5 rounded-full">
            {copy.eyebrow}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#075985] sm:text-4xl">
            {copy.title(totalCount)}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#475569]">
            {copy.body}
          </p>
        </div>

        {/* Category jump nav */}
        <nav aria-label="FAQ categories" className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#faq-${category.id}`}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-[#075985] transition-colors hover:border-[#0EA5E9] hover:bg-[#E0F2FE]/40 hover:text-[#0369A1]"
            >
              {catCopy[category.id]?.title ?? category.title} <span className="text-slate-400">({category.items.length})</span>
            </a>
          ))}
        </nav>

        {/* Category sections */}
        <div className="mt-14 flex flex-col gap-16">
          {categories.map((category) => {
            const localCat = catCopy[category.id];
            return (
            <div key={category.id} id={`faq-${category.id}`} data-faq-category className="scroll-mt-24">
              <div className="mb-6 flex flex-col gap-2 border-b border-slate-100 pb-5">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#075985]">
                  {localCat?.title ?? category.title}{" "}
                  <span className="align-middle text-sm font-bold text-slate-400">
                    ({copy.questions(category.items.length)})
                  </span>
                </h3>
                <p className="text-sm font-semibold leading-relaxed text-[#475569]">{localCat?.description ?? category.description}</p>
                <p data-faq-empty className="hidden text-sm font-semibold text-slate-400">
                  {copy.noMatches}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {category.items.map((item, idx) => (
                  <details
                    key={`${category.id}-${idx}`}
                    data-faq-item
                    className="group rounded-2xl border border-slate-100 bg-slate-50/60 transition-colors open:bg-white open:border-[#BAE6FD] hover:border-[#BAE6FD]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-3 p-4 text-sm font-bold text-[#075985] sm:p-5">
                      <span>{item.q}</span>
                      <span className="mt-0.5 shrink-0 text-lg font-bold text-[#0369A1] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                      <p className="text-sm font-medium leading-relaxed text-[#475569]">{item.a}</p>
                      <Link
                        href={item.href}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wide text-[#0369A1] hover:text-[#0369A1]"
                      >
                        {copy.readMore} {item.source} <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </details>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

