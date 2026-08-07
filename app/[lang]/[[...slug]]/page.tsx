import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { buildAlternates, optimizeTitle, optimizeDescription } from "@/lib/seo-meta";
import { ArrowRight, MessageSquare, Phone, Home } from "lucide-react";

const supported = ["ms", "zh"] as const;
type SupportedLocale = (typeof supported)[number];

const labels: Record<SupportedLocale, {
  name: string;
  badge: string;
  title: string;
  notice: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaServices: string;
  ctaServicesHref: string;
  ctaPricing: string;
  ctaContact: string;
  redirectNote: string;
}> = {
  ms: {
    name: "Bahasa Malaysia",
    badge: "BM",
    title: "Selamat datang ke KL Servis Rumah",
    notice: "Laman web kami menyokong penuh Bahasa Malaysia, Bahasa Inggeris dan中文. Gunakan suis bahasa di bahagian atas halaman untuk menukar bahasa — semua halaman, harga dan maklumat servis tersedia dalam tiga bahasa.",
    ctaPrimary: "Buka Laman Utama",
    ctaSecondary: "Lihat Perkhidmatan",
    ctaServices: "Semua Perkhidmatan",
    ctaServicesHref: "/ms/services",
    ctaPricing: "Harga",
    ctaContact: "Hubungi Kami",
    redirectNote: "Anda akan diarahkan ke laman utama. Gunakan suis bahasa EN | BM | 中 di navbar untuk menukar bahasa bila-bila masa."
  },
  zh: {
    name: "中文",
    badge: "中",
    title: "欢迎来到 KL Servis Rumah",
    notice: "我们的网站全面支持英语、马来语和中文。请使用页面顶部的语言切换器更改语言——所有页面、价格和服务信息均提供三种语言版本。",
    ctaPrimary: "打开首页",
    ctaSecondary: "查看服务",
    ctaServices: "所有服务",
    ctaServicesHref: "/zh/services",
    ctaPricing: "价格",
    ctaContact: "联系我们",
    redirectNote: "您将被重定向到首页。随时使用导航栏中的 EN | BM | 中 语言切换器更改语言。"
  }
};

/**
 * Restrict this optional catch-all to the two locale scaffolds it exists for.
 *
 * Without this, `/[lang]/[[...slug]]` matches *every* unmatched URL on the site
 * (`/foo`, `/services/bad-slug`, `/a/b/c`). Next.js then renders the route
 * on demand, `notFound()` fires, and the resulting 404 body gets cached and
 * served with a **200 OK** — a soft 404. Google treats those as thin duplicate
 * pages and they burn crawl budget across an unbounded URL space.
 *
 * `dynamicParams = false` makes any param outside `generateStaticParams()`
 * return a real 404, so unmatched URLs fall through to `app/not-found.tsx`.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  return supported.map((lang) => ({ lang, slug: [] }));
}

export async function generateMetadata(props: { params: Promise<{ lang: string; slug?: string[] }> }) {
  const { lang } = await props.params;
  if (!supported.includes(lang as SupportedLocale)) return {};
  const info = labels[lang as SupportedLocale];
  // These scaffold pages exist only so shared /ms and /zh links resolve; they
  // auto-redirect to "/". They must be noindex AND canonical to "/" so they never
  // compete with the homepage in the index.
  return {
    // Route through the shared optimizers so these two pages obey the same
    // title/description budgets as the rest of the site. Written literally,
    // the BM notice rendered a 207-char description.
    title: optimizeTitle(info.title),
    description: optimizeDescription(info.notice),
    // These scaffold pages exist only so shared /ms and /zh links resolve; they
    // auto-redirect to "/". They are noindex AND canonical to "/" so they never
    // compete with the homepage in the index. They must also NOT emit hreflang:
    // canonical overrides hreflang, and a self-referencing hreflang pointing at
    // "/" would falsely claim that "/ms" and "/zh" are localised siblings of
    // the homepage (they are redirect stubs, not real locale URLs).
    robots: { index: false, follow: true },
    alternates: buildAlternates("/", true)
  };
}

export default async function LocalizedLandingPage(props: { params: Promise<{ lang: string; slug?: string[] }> }) {
  const { lang } = await props.params;
  if (!supported.includes(lang as SupportedLocale)) notFound();
  const info = labels[lang as SupportedLocale];

  return (
    <>
      {/* Auto-redirect script: sends user to homepage after setting lang cookie */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                localStorage.setItem('klservisrumah-lang', '${lang}');
                document.cookie = 'klservisrumah-lang=${lang}; path=/; max-age=31536000; SameSite=Lax';
                setTimeout(function() { window.location.replace('/'); }, 2000);
              } catch(e) {}
            })();
          `
        }}
      />
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
            {info.badge}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-[#075985] sm:text-5xl">
            {info.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#475569] max-w-2xl mx-auto">
            {info.notice}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0284C7] px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-[#0369A1] transition-colors"
            >
              <Home className="w-4 h-4" />
              {info.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={info.ctaServicesHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold text-[#075985] hover:bg-slate-50 transition-colors"
            >
              {info.ctaSecondary}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href={info.ctaServicesHref} className="text-[#0EA5E9] font-semibold hover:underline">
              {info.ctaServices}
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/pricing" className="text-[#0EA5E9] font-semibold hover:underline">
              {info.ctaPricing}
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/contact" className="text-[#0EA5E9] font-semibold hover:underline">
              {info.ctaContact}
            </Link>
            <span className="text-slate-300">·</span>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#25D366] font-semibold hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-1 text-[#075985] font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <p className="mt-8 text-xs text-[#475569]/60 italic">
            {info.redirectNote}
          </p>
        </div>
      </section>
    </>
  );
}
