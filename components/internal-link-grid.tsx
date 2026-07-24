import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type InternalLinkItem = { title: string; href: string; desc?: string };

export function InternalLinkGrid({
  title = "Related resources",
  subtitle,
  links
}: {
  title?: string;
  subtitle?: string;
  links: InternalLinkItem[];
}) {
  if (!links.length) return null;

  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
      <div className="mb-6">
        <span className="eyebrow">More from this category · Lebih banyak · 更多信息</span>
        <h2 className="text-2xl font-extrabold text-[#075985] tracking-tight mt-2">{title}</h2>
        {subtitle && (
          <p className="text-sm text-[#475569] leading-relaxed mt-2 font-medium">{subtitle}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-[#0EA5E9] hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-base font-extrabold text-[#075985] leading-tight">{link.title}</span>
              <ArrowRight className="w-4 h-4 text-[#0EA5E9] shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
            </div>
            {link.desc ? (
              <p className="mt-2 text-xs font-semibold leading-relaxed text-[#475569]">{link.desc}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
