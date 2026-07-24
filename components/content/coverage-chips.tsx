import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

type CoverageChipsProps = {
  title?: string;
  subtitle?: string;
  areas: { name: string; slug: string }[];
  maxVisible?: number;
};

/**
 * CoverageChips — Klrenovator-style area tag pill grid.
 * Areas as clickable chips rather than long bullet lists.
 */
export function CoverageChips({
  title = "Coverage areas · Kawasan servis · 服务范围",
  subtitle = "We dispatch professional teams daily across KL & Selangor. Click any area to see local pricing and service details.",
  areas,
  maxVisible = 36
}: CoverageChipsProps) {
  const visible = areas.slice(0, maxVisible);
  const overflow = areas.length - visible.length;

  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <span className="eyebrow">Local network · Rangkaian tempatan · 本地网络</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] tracking-tight mt-3">
          {title}
        </h2>
        <p className="text-base text-[#475569] leading-relaxed mt-3 font-medium">
          {subtitle}
        </p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {visible.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/suburbs/${area.slug}/handyman`}
              className="chip"
              title={`${area.name} home services`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{area.name}</span>
            </Link>
          </li>
        ))}
        {overflow > 0 && (
          <li>
            <span className="chip trust-pill-blue border border-[#BAE6FD] cursor-default">
              +{overflow} more areas
            </span>
          </li>
        )}
      </ul>
    </section>
  );
}
