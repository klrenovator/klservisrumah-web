"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { servicesData } from "@/config/services-data";
import { siteConfig } from "@/config/site";
import { slugify } from "@/lib/utils";

const serviceLinks = Object.values(servicesData).flatMap((service) => [
  { label: service.title, href: `/services/${service.slug}`, type: "Service" },
  ...service.subServices.map((sub) => ({ label: sub.name, href: `/services/${service.slug}/${slugify(sub.name)}`, type: "Sub-service" }))
]);

const areaLinks = siteConfig.areas.map((area) => ({ label: area, href: `/suburbs/${slugify(area)}/handyman`, type: "Area" }));

const staticLinks = [
  { label: "Contact and booking", href: "/contact", type: "Page" },
  { label: "FAQ helpdesk", href: "/faq", type: "Page" },
  { label: "Home services directory", href: "/services", type: "Page" }
];

export function SiteSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return [...serviceLinks, ...areaLinks, ...staticLinks]
      .filter((item) => item.label.toLowerCase().includes(q) || item.type.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  return (
    <div className="relative hidden xl:block w-56">
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
        <Search className="h-4 w-4 text-[#0EA5E9]" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search service..."
          className="w-full bg-transparent text-xs font-semibold text-[#1E40AF] outline-none placeholder:text-slate-400"
          aria-label="Search site services"
        />
      </div>
      {results.length > 0 && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
          {results.map((item) => (
            <Link
              key={`${item.type}-${item.href}`}
              href={item.href}
              onClick={() => setQuery("")}
              className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-xs font-semibold text-[#475569] hover:bg-slate-50 hover:text-[#1E40AF]"
            >
              <span>{item.label}</span>
              <span className="shrink-0 rounded-full bg-[#0EA5E9]/10 px-2 py-0.5 text-[10px] font-bold text-[#0EA5E9]">{item.type}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
