import Link from "next/link";
import { ArrowRight, MessageSquare, Phone, Home } from "lucide-react";
import { siteConfig } from "@/config/site";

export type ScaffoldLocale = "ms" | "zh";

const labels: Record<
  ScaffoldLocale,
  {
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
  }
> = {
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
 * LocaleScaffold — the shared `/ms` and `/zh` landing page body.
 *
 * These pages exist only so shared /ms and /zh links resolve; they set the
 * visitor's locale (cookie + localStorage) and auto-redirect to "/" after a
 * short pause. They are noindex and canonical to "/" (declared by each page's
 * metadata), so they never compete with the homepage in the index.
 *
 * Rendered as a server component inside the (ms)/(zh) root layouts, so the
 * document ships the correct `<html lang>` and localized chrome.
 */
export function LocaleScaffold({ lang }: { lang: ScaffoldLocale }) {
  const info = labels[lang];

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
