import React from "react";
import Link from "next/link";

export type InternalLinkItem = { title: string; href: string; desc?: string };

export function InternalLinkGrid({ title = "Related resources", links }: { title?: string; links: InternalLinkItem[] }) {
  if (!links.length) return null;

  return (
    <section className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
      <h2 className="mb-4 text-xl font-extrabold text-[#1E40AF]">{title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md">
            <span className="text-sm font-extrabold text-[#1E40AF]">{link.title}</span>
            {link.desc ? <p className="mt-1 text-xs font-semibold leading-relaxed text-[#475569]">{link.desc}</p> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
