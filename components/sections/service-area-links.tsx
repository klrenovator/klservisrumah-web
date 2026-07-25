"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, ArrowRight } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

type ServiceAreaLinksProps = {
  serviceSlug: string;
  maxItems?: number;
};

/**
 * ServiceAreaLinks — shows location/area pages relevant to the current service.
 * Implements the same area-page internal-linking pattern as KLRenovator
 * (e.g. "Aircond Installation in Kuala Lumpur, Petaling Jaya..." linking from
 * service pages to location pages). This builds strong local SEO signals
 * and helps users find service availability in their area.
 */
const TOP_AREAS_MAP: Record<string, { slug: string; name: string; label: string }[]> = {
  default: [
    { slug: "kuala-lumpur", name: "Kuala Lumpur", label: "Kuala Lumpur" },
    { slug: "petaling-jaya", name: "Petaling Jaya", label: "Petaling Jaya" },
    { slug: "subang-jaya", name: "Subang Jaya", label: "Subang Jaya" },
    { slug: "shah-alam", name: "Shah Alam", label: "Shah Alam" },
    { slug: "puchong", name: "Puchong", label: "Puchong" },
    { slug: "klang", name: "Klang", label: "Klang" },
    { slug: "cheras", name: "Cheras", label: "Cheras" },
    { slug: "ampang", name: "Ampang", label: "Ampang" },
  ],
};

const TOP_AREAS = TOP_AREAS_MAP.default;

export function ServiceAreaLinks({ serviceSlug, maxItems = 8 }: ServiceAreaLinksProps) {
  const t = useTranslations();

  const areas = TOP_AREAS.slice(0, maxItems);

  return (
    <section className="bg-slate-50 border-t border-slate-100 py-16 sm:py-20" aria-label="Service areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase bg-emerald-50 px-4 py-1.5 rounded-full">
            {t("internalLinks.areas")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight">
            {t("internalLinks.serviceAreas")}
          </h2>
          <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
            We provide this service across Kuala Lumpur and Selangor. Select your area to see local pricing and availability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}/${serviceSlug}`}
              className="bg-white rounded-xl p-4 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group flex items-center gap-2.5"
            >
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-sm font-bold text-[#075985] group-hover:text-emerald-600 transition-colors">
                {area.label}
              </span>
              <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-emerald-500 ml-auto transition-colors" />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`/areas`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0EA5E9] hover:text-[#075985] transition-colors"
          >
            {t("internalLinks.viewAllAreas")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
