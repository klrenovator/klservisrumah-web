import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TOOLS_INDEX_PATH } from "@/config/tools-i18n";
import { getServerTranslator } from "@/lib/i18n-server";

/**
 * Cross-links between the real localized subtrees.
 *
 * WHY THIS EXISTS
 * ---------------
 * The site has four fully-localized, indexable subtrees per locale — services,
 * blog, FAQ and the free-tools cluster:
 *
 *   ms → /ms/services · /ms/blog · /ms/soalan-lazim · /ms/alatan
 *   zh → /zh/services · /zh/bo-ke  · /zh/chang-jian-wen-ti · /zh/gongju
 *
 * A full-corpus crawl of the production build showed they were almost entirely
 * disconnected from one another. `/ms/soalan-lazim` and `/zh/chang-jian-wen-ti`
 * had **zero** inbound internal links anywhere in the build — the only pointer
 * to them was `app/faq/page.tsx`'s hreflang annotation and a client-side
 * `LocaleHubRedirect`, neither of which is a crawlable `<a href>`. The rest of
 * the localized pages averaged ≤2 inbound links.
 *
 * That left the MS/ZH trees as isolated islands: a crawler entering at
 * `/ms/services/painting` could not walk to the Malay FAQ or the Malay blog,
 * and the sitewide navbar/footer only ever emit English URLs. Internal linking
 * is how crawl equity flows, so the localized tree — the whole point of the H3
 * pilot — was structurally starved.
 *
 * This block renders a small, server-rendered, in-language link row between all
 * four trees. It reuses existing `nav.*` / `menu.*` dictionary keys (already
 * translated in EN/MS/ZH), so it adds no translation debt.
 */

type Locale = "ms" | "zh";

const TREES: Record<Locale, { services: string; blog: string; faq: string; tools: string }> = {
  ms: {
    services: "/ms/services",
    blog: "/ms/blog",
    faq: "/ms/soalan-lazim",
    tools: TOOLS_INDEX_PATH.ms
  },
  zh: {
    services: "/zh/services",
    blog: "/zh/bo-ke",
    faq: "/zh/chang-jian-wen-ti",
    tools: TOOLS_INDEX_PATH.zh
  }
};

/**
 * @param locale  Which localized tree we are rendering inside.
 * @param current Optional key of the tree the current page belongs to, so we
 *                never emit a self-link (a link to the page you are already on
 *                adds no crawl value and is a minor a11y annoyance).
 */
export function LocaleTreeLinks({
  locale,
  current
}: {
  locale: Locale;
  current?: "services" | "blog" | "faq" | "tools";
}) {
  const t = getServerTranslator(locale);
  const paths = TREES[locale];

  const links = (
    [
      { key: "services", href: paths.services, label: t("nav.services") },
      { key: "blog", href: paths.blog, label: t("nav.blog") },
      { key: "faq", href: paths.faq, label: t("nav.faq") },
      { key: "tools", href: paths.tools, label: t("menu.tools") }
    ] as const
  ).filter((link) => link.key !== current);

  if (!links.length) return null;

  return (
    <nav
      aria-label={t("menu.explore")}
      className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
          {t("menu.explore")}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2.5">
          {links.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-extrabold text-[#075985] transition hover:border-[#0EA5E9] hover:bg-sky-50 hover:text-[#0284C7]"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 text-[#0EA5E9]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
