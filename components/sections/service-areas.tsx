import React from "react";
import Link from "next/link";
import { areaPages } from "@/config/area-data";
import { MapPin, ArrowRight } from "lucide-react";

export function ServiceAreas() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0781B2] tracking-widest uppercase bg-[#D2DEE7]/30 px-4 py-1.5 rounded-full">
            Our Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#021F44] tracking-tight">
            Districts Served in KL & Selangor
          </h2>
          <p className="text-base text-[#4A607C] leading-relaxed">
            Our specialized teams are fully distributed across the Klang Valley. Click on your local district below to explore localized pricing matrices, localized guarantees, and neighborhood portfolios.
          </p>
        </div>

        {/* Suburbs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaPages.map((area) => (
            <div
              key={area.slug}
              className="bg-slate-50 hover:bg-white border border-slate-100/60 hover:border-[#0781B2]/30 rounded-2xl p-5 shadow-3xs hover:shadow-sm transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white rounded-xl border border-slate-100 group-hover:bg-[#0781B2]/10 transition-colors shrink-0">
                  <MapPin className="w-5 h-5 text-[#0781B2]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-[#021F44] tracking-tight">{area.name}</span>
                  <span className="text-xs text-[#4A607C] font-semibold">{area.state}</span>
                </div>
              </div>

              <Link
                href={`/areas/${area.slug}`}
                className="p-2 bg-white rounded-xl border border-slate-100 group-hover:bg-[#0781B2] group-hover:text-white transition-colors"
                aria-label={`View details for ${area.name}`}
              >
                <ArrowRight className="w-4 h-4 text-[#0781B2] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Note block */}
        <div className="mt-12 bg-[#F2F6FC] rounded-3xl p-6 border border-slate-100 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-[#021F44]">Don't see your neighborhood listed above?</span>
            <p className="text-xs text-[#4A607C] font-semibold">We service all locations within 45km of Kuala Lumpur City Centre.</p>
          </div>
          <a
            href="https://wa.me/60182983573"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0781B2] hover:bg-[#021F44] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-3xs"
          >
            Ask Our Dispatch Desk
          </a>
        </div>

      </div>
    </section>
  );
}
