import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

/**
 * Breadcrumb item for both UI display and JSON-LD schema.
 * Supports both `name` and `label` for backward compatibility.
 */
export type BreadcrumbItem = {
  name?: string;
  label?: string;
  href: string;
};

/**
 * Visible breadcrumb navigation bar + JSON-LD schema in one component.
 * Matches the KLRenovator pattern: visible breadcrumbs for UX + structured
 * data for SEO on every page.
 *
 * Usage:
 *   <Breadcrumbs items={[
 *     { name: "Home", href: "/" },
 *     { name: "Services", href: "/services" },
 *     { name: "House Painting", href: "/services/painting" },
 *   ]} />
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  const baseUrl = "https://www.klservisrumah.my";

  // Normalize items: accept both `name` and `label` keys.
  const provided = items.map((item) => ({
    ...item,
    name: item.name || item.label || "",
  }));

  // Always anchor the trail at Home. Callers passed only the sub-path (e.g.
  // [{ FAQ }]), so both the visible trail and the BreadcrumbList started at
  // position 1 = "FAQ" with no route back to the root. Google expects the full
  // path from the homepage, and users expect a Home crumb.
  const normalized =
    provided[0]?.href === "/" ? provided : [{ name: "Home", href: "/" }, ...provided];

  return (
    <>
      {/* JSON-LD BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: normalized.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: `${baseUrl}${item.href}`,
            })),
          }),
        }}
      />

      {/* Visible Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-2"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          {normalized.map((item, index) => {
            const isLast = index === normalized.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index === 0 ? (
                  <Home className="h-3 w-3 shrink-0" />
                ) : (
                  <ChevronRight className="h-3 w-3 shrink-0 text-slate-400" />
                )}
                {isLast ? (
                  <span className="font-medium text-slate-800 truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-sky-600 transition-colors font-medium truncate max-w-[150px] sm:max-w-[200px]"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
