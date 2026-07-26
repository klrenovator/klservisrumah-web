import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FaqCategory } from "@/lib/faq-directory";

/**
 * Renders the complete site-wide FAQ directory as static, crawlable HTML.
 * Every question links back to the page it came from so visitors (and
 * search engines) can jump straight to full context, pricing tables, and
 * booking CTAs for that topic.
 */
export function FaqDirectoryView({ categories, totalCount }: { categories: FaqCategory[]; totalCount: number }) {
  return (
    <section className="bg-white py-16 sm:py-20" id="faq-directory">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0EA5E9] bg-[#E0F2FE]/40 px-4 py-1.5 rounded-full">
            Complete FAQ Directory
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#075985] sm:text-4xl">
            Every question, answered — {totalCount.toLocaleString()}+ FAQs in one place
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#475569]">
            We pulled every FAQ from every service, problem guide, coverage area, suburb, comparison and buying
            guide on this site into one searchable directory. Tap any question to expand it, or follow the link to
            read the full page it belongs to.
          </p>
        </div>

        {/* Category jump nav */}
        <nav aria-label="FAQ categories" className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#faq-${category.id}`}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-[#075985] transition-colors hover:border-[#0EA5E9] hover:bg-[#E0F2FE]/40 hover:text-[#0EA5E9]"
            >
              {category.title} <span className="text-slate-400">({category.items.length})</span>
            </a>
          ))}
        </nav>

        {/* Category sections */}
        <div className="mt-14 flex flex-col gap-16">
          {categories.map((category) => (
            <div key={category.id} id={`faq-${category.id}`} data-faq-category className="scroll-mt-24">
              <div className="mb-6 flex flex-col gap-2 border-b border-slate-100 pb-5">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#075985]">
                  {category.title}{" "}
                  <span className="align-middle text-sm font-bold text-slate-400">
                    ({category.items.length} question{category.items.length === 1 ? "" : "s"})
                  </span>
                </h3>
                <p className="text-sm font-semibold leading-relaxed text-[#475569]">{category.description}</p>
                <p data-faq-empty className="hidden text-sm font-semibold text-slate-400">
                  No matches in this topic.
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
                      <span className="mt-0.5 shrink-0 text-lg font-bold text-[#0EA5E9] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                      <p className="text-sm font-medium leading-relaxed text-[#475569]">{item.a}</p>
                      <Link
                        href={item.href}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wide text-[#0284C7] hover:text-[#0EA5E9]"
                      >
                        Read more on {item.source} <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
