import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";

const supported = ["ms", "zh"] as const;
const labels = {
  ms: { name: "Bahasa Malaysia", title: "KL Servis Rumah", notice: "Versi Bahasa Malaysia sedang disediakan. Maklumat harga, servis dan tempahan masih tersedia melalui halaman asal Bahasa Inggeris." },
  zh: { name: "中文", title: "KL Servis Rumah", notice: "中文版本正在准备中。服务、价格和预约资料可先参考英文页面。" }
};

export async function generateStaticParams() {
  return supported.map((lang) => ({ lang, slug: [] }));
}

export async function generateMetadata(props: { params: Promise<{ lang: string; slug?: string[] }> }) {
  const { lang, slug = [] } = await props.params;
  if (!supported.includes(lang as "ms" | "zh")) return {};
  const path = `/${lang}${slug.length ? `/${slug.join("/")}` : ""}`;
  return {
    title: `${labels[lang as "ms" | "zh"].title} — ${labels[lang as "ms" | "zh"].name}`,
    description: siteConfig.metaDescription,
    alternates: { canonical: path }
  };
}

export default async function LocalizedScaffoldPage(props: { params: Promise<{ lang: string; slug?: string[] }> }) {
  const { lang, slug = [] } = await props.params;
  if (!supported.includes(lang as "ms" | "zh")) notFound();
  const info = labels[lang as "ms" | "zh"];
  const originalPath = slug.length ? `/${slug.join("/")}` : "/";

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">{info.name}</span>
        <h1 className="mt-4 text-3xl font-extrabold text-[#075985] sm:text-5xl">{info.title}</h1>
        <p className="mt-4 text-base font-semibold leading-relaxed text-[#475569]">{info.notice}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={originalPath === "/" ? "/" : originalPath} className="rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white">Open English page</Link>
          <Link href="/contact" className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-extrabold text-[#075985]">Book a service</Link>
        </div>
      </div>
    </section>
  );
}
