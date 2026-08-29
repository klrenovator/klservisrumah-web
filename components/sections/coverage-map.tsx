"use client";

import React from "react";
import Link from "next/link";
import { MapPin, MessageSquare } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";
import { getWhatsAppLink } from "@/lib/whatsapp";

/**
 * CoverageMap — static SVG coverage map (audit P4-12).
 *
 * The audit found zero embedded maps anywhere and `hasMap` pointing at a
 * Google Business *share* shortlink (not a map). A Google Maps iframe is not
 * possible here: the site's CSP sets `frame-src 'none'` (and an embeddable
 * source would need a Google key), so this component implements the audit's
 * own alternative — a lightweight coverage map — as a fully static, inline
 * SVG projected from the same lat/lng data that powers the 36 area hub pages.
 * Zero third-party requests, zero CSP changes, zero owner keys, and every
 * marker is a real internal link to its area hub.
 *
 * The slim `areas` prop (slug/name/shortName/lat/lng only) is computed on the
 * server so the heavy `config/area-data.ts` registry never enters the client
 * bundle. Labels come from the message dictionaries, so the map localizes
 * with the site's language switcher like the rest of the page.
 */

type CoverageArea = {
  slug: string;
  name: string;
  shortName: string;
  lat: number;
  lng: number;
};

// Projection bounds — equirectangular over the Klang Valley footprint
// (Rawang 3.32 N … Dengkil 2.86 N; Port Klang 101.39 E … Semenyih 101.84 E).
const BOUNDS = {
  minLat: 2.84,
  maxLat: 3.34,
  minLng: 101.34,
  maxLng: 101.94,
  width: 640,
  height: 440,
  pad: 20
};

function project(lat: number, lng: number): { x: number; y: number } {
  const x =
    BOUNDS.pad +
    ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * (BOUNDS.width - BOUNDS.pad * 2);
  const y =
    BOUNDS.pad +
    ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * (BOUNDS.height - BOUNDS.pad * 2);
  return { x: +x.toFixed(1), y: +y.toFixed(1) };
}

// Stylised coverage silhouette — hand-traced ring of the served Klang Valley
// footprint ([lat, lng]), following the outer area hubs (Port Klang → Klang →
// Setia Alam → Shah Alam → Sungai Buloh → Rawang → Batu Caves → Hulu Kelang →
// Ampang → Semenyih → Putrajaya → Cyberjaya → Dengkil → coast → Port Klang).
const SILHOUETTE: [number, number][] = [
  [3.0, 101.39],   // Port Klang
  [3.033, 101.447], // Klang
  [3.08, 101.46],  // Setia Alam
  [3.073, 101.518], // Shah Alam
  [3.09, 101.55],  // Kota Kemuning bend
  [3.21, 101.57],  // Sungai Buloh
  [3.32, 101.58],  // Rawang
  [3.24, 101.68],  // Batu Caves
  [3.22, 101.75],  // Hulu Kelang
  [3.21, 101.76],  // Taman Melawati
  [3.15, 101.77],  // Ampang
  [3.06, 101.82],  // Hulu Langat bend
  [2.95, 101.84],  // Semenyih
  [2.99, 101.79],  // Kajang
  [3.03, 101.75],  // Balakong
  [3.02, 101.7],   // Seri Kembangan
  [2.93, 101.68],  // Putrajaya
  [2.92, 101.65],  // Cyberjaya
  [2.86, 101.68],  // Dengkil
  [2.88, 101.55],  // Sepang coast bend
  [2.95, 101.45],  // coast
  [3.0, 101.39]    // close → Port Klang
];

const silhouettePoints = SILHOUETTE.map(([lat, lng]) => {
  const { x, y } = project(lat, lng);
  return `${x},${y}`;
}).join(" ");

// Labels rendered for the highest-profile hubs (name + dx/dy offset tuned to
// avoid collisions at this projection).
const LABELS: { slug: string; dx: number; dy: number; anchor?: "start" | "middle" | "end" }[] = [
  { slug: "kuala-lumpur", dx: 8, dy: -6 },
  { slug: "petaling-jaya", dx: -66, dy: 16 },
  { slug: "subang-jaya", dx: -58, dy: -14 },
  { slug: "shah-alam", dx: -52, dy: 14 },
  { slug: "puchong", dx: 10, dy: 16 },
  { slug: "klang", dx: -34, dy: 14 },
  { slug: "cheras", dx: 10, dy: 14 },
  { slug: "ampang", dx: 8, dy: -14 },
  { slug: "kajang", dx: 10, dy: 14 },
  { slug: "rawang", dx: 8, dy: -6 },
  { slug: "semenyih", dx: 8, dy: 14 },
  { slug: "mont-kiara", dx: -88, dy: 2, anchor: "end" }
];

export function CoverageMap({
  areas,
  highlightSlug
}: {
  areas: CoverageArea[];
  highlightSlug?: string;
}) {
  const t = useTranslations();
  const highlighted = areas.find((a) => a.slug === highlightSlug);

  return (
    <section
      aria-label={t("coverageMap.title")}
      className="bg-white border-y border-slate-100 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            {t("coverageMap.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
            {t("coverageMap.title")}
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
            {t("coverageMap.subtitle")}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-50/60 via-white to-slate-50/60 p-4 sm:p-8 shadow-sm">
          <svg
            viewBox={`0 0 ${BOUNDS.width} ${BOUNDS.height}`}
            role="img"
            aria-label={
              highlighted
                ? t("coverageMap.ariaHighlighted", { area: highlighted.name })
                : t("coverageMap.ariaDefault")
            }
            className="w-full h-auto"
          >
            {/* Subtle coordinate grid */}
            <defs>
              <pattern id="cov-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width={BOUNDS.width} height={BOUNDS.height} fill="url(#cov-grid)" rx="12" />

            {/* Coverage silhouette */}
            <polygon
              points={silhouettePoints}
              fill="#0EA5E9"
              fillOpacity="0.10"
              stroke="#0EA5E9"
              strokeOpacity="0.45"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />

            {/* Area markers — every marker links to its area hub page */}
            {areas.map((area) => {
              const { x, y } = project(area.lat, area.lng);
              const isHighlight = area.slug === highlightSlug;
              return (
                <Link key={area.slug} href={`/areas/${area.slug}`} aria-label={area.name}>
                  <g>
                    {isHighlight && (
                      <circle
                        cx={x}
                        cy={y}
                        r="10"
                        fill="none"
                        stroke="#F59E0B"
                        strokeOpacity="0.6"
                        strokeWidth="1.6"
                      />
                    )}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHighlight ? 6 : 4}
                      fill={isHighlight ? "#F59E0B" : "#0284C7"}
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <title>{area.name}</title>
                  </g>
                </Link>
              );
            })}

            {/* Labels for major hubs */}
            {LABELS.map(({ slug, dx, dy, anchor }) => {
              const area = areas.find((a) => a.slug === slug);
              if (!area) return null;
              const { x, y } = project(area.lat, area.lng);
              return (
                <text
                  key={slug}
                  x={x + dx}
                  y={y + dy}
                  textAnchor={anchor ?? "start"}
                  className="fill-[#075985]"
                  fontSize="11"
                  fontWeight="700"
                >
                  {area.shortName}
                </text>
              );
            })}

            {/* Highlighted-area caption */}
            {highlighted && (
              <text
                x={BOUNDS.width / 2}
                y={BOUNDS.height - 6}
                textAnchor="middle"
                className="fill-[#075985]"
                fontSize="12"
                fontWeight="800"
              >
                ★ {highlighted.name}
              </text>
            )}
          </svg>

          <p className="mt-3 text-center text-xs font-semibold text-slate-400">
            {t("coverageMap.caption")}
          </p>

          {/* Legend + caption */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
            <div className="flex items-center gap-5 text-xs font-bold text-[#475569]">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0284C7]" aria-hidden="true" />
                {t("coverageMap.legend")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" aria-hidden="true" />
                {highlighted ? highlighted.name : t("coverageMap.highlight")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0284C7] px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-[#0369A1]"
              >
                {t("coverageMap.viewAll")}
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <a
                href={getWhatsAppLink({ location: "KL & Selangor" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold text-[#075985] transition hover:border-[#25D366]"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" aria-hidden="true" />
                {t("coverageMap.ask")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
