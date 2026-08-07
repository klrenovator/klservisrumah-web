import type { Metadata } from "next";

/**
 * 404 boundary for the Chinese tree.
 *
 * Rendered when notFound() is thrown inside a /zh route (e.g. the
 * catch-all for unknown /zh/* URLs). In a multi-root-layout app, Next
 * renders this boundary inside its own minimal error shell — outside any
 * root layout — so the component must not rely on layout chrome. The copy
 * is plain server JSX (client components do not hydrate in this shell),
 * and a tiny inline script corrects `document.documentElement.lang` for
 * assistive technology, since the framework shell carries no lang.
 *
 * Soft-404 discipline: 404 status, noindex, no canonical, no hreflang.
 */
export const metadata: Metadata = {
  title: "页面未找到 — KL Servis Rumah",
  description:
    "找不到此页面。浏览 KL Servis Rumah 的家居服务、服务区域和吉隆坡与雪兰莪固定价格指南，或通过 WhatsApp 联系我们。",
  robots: { index: false, follow: true },
  alternates: {},
  openGraph: {
    title: "页面未找到 — KL Servis Rumah",
    description: "找不到此页面。浏览我们在吉隆坡与雪兰莪的家居服务。",
    url: undefined,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "页面未找到 — KL Servis Rumah",
    description: "找不到此页面。浏览我们在吉隆坡与雪兰莪的家居服务。"
  }
};

export default function ChineseNotFound() {
  return (
    <>
      {/* Next renders this boundary inside its own minimal error shell, which
          has no lang attribute — correct it for assistive technology. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `try { document.documentElement.lang = "zh-MY"; } catch (e) {}`
        }}
      />
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
              <span className="rounded-full bg-[#E0F2FE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
                404 未找到页面
              </span>
              <h1 className="text-4xl font-extrabold text-[#075985]">我们找不到该服务页面</h1>
              <p className="text-base font-semibold leading-relaxed text-[#475569]">
                该页面可能已移动，但我们的家居服务调度台仍随时准备帮助您处理吉隆坡与雪兰莪的油漆、水管、天花板、防水与杂工需求。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/zh/services"
                  className="rounded-xl bg-[#0284C7] px-5 py-3 text-sm font-extrabold text-white hover:bg-[#0369A1] transition-colors"
                >
                  浏览服务
                </a>
                <a
                  href="/"
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-extrabold text-[#075985] hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors"
                >
                  返回首页
                </a>
              </div>
            </div>
          </section>
    </>
  );
}
