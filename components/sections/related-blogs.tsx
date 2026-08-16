"use client";

import React from "react";
import Link from "next/link";
import { relatedBlogIndex } from "@/config/blog-related-index";
import { getRelatedBlogs } from "@/config/topical-authority-map";
import { BookOpen, ArrowRight } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

type RelatedBlogsProps = {
  serviceSlug: string;
  maxItems?: number;
};

/**
 * RelatedBlogs — shows topical blog posts for the current service.
 * Uses the validated topical-authority map (`getRelatedBlogs`) so every link
 * resolves to a real blog slug. This closes the "service → blog" internal
 * linking gap documented in the multilingual architecture audit.
 */
export function RelatedBlogs({ serviceSlug, maxItems = 3 }: RelatedBlogsProps) {
  const t = useTranslations();

  const related = getRelatedBlogs(serviceSlug)
    .map((slug) => relatedBlogIndex.find((post) => post.slug === slug))
    .filter(Boolean)
    .slice(0, maxItems);

  if (related.length === 0) return null;

  return (
    <section className="bg-white border-t border-slate-100 py-16 sm:py-20" aria-label={t("internalLinks.guides")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#7C3AED] tracking-widest uppercase bg-[#F3E8FF]/40 px-4 py-1.5 rounded-full">
            {t("internalLinks.guidesEyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {t("internalLinks.guides")}
          </h2>
          <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
            {t("internalLinks.guidesSub")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((post) => (
            <Link
              key={post!.slug}
              href={`/blog/${post!.slug}`}
              className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#C4B5FD] hover:shadow-md transition-all duration-300 group flex flex-col gap-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[#7C3AED] bg-[#F3E8FF] p-2 rounded-lg">
                  <BookOpen className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wide text-[#7C3AED]">
                  {post!.category}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#075985] group-hover:text-[#7C3AED] transition-colors leading-snug">
                {post!.title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed font-medium line-clamp-3">
                {post!.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between pt-1">
                <span className="text-[10px] font-semibold text-slate-400">{post!.readTime}</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#7C3AED] group-hover:text-[#6D28D9]">
                  <span>{t("common.viewDetails")}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
