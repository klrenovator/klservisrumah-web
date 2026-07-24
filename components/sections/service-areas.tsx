import React from "react";
import Link from "next/link";
import { areaPages } from "@/config/area-data";
import { MapPin, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function ServiceAreas() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#DBEAFE]/30 px-4 py-1.5 rounded-full">
            Our Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E40AF] tracking-tight">
            Districts Served in KL & Selangor
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Our specialized teams are fully distributed across the Klang Valley. Click on your local district below to explore localized pricing matrices, localized guarantees, and neighborhood portfolios.
          </p>
        </div>

        {/* Suburbs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaPages.map((area) => (
            <div
              key={area.slug}
              className="bg-slate-50 hover:bg-white border border-slate-100/60 hover:border-[#0EA5E9]/30 rounded-2xl p-5 shadow-3xs hover:shadow-sm transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white rounded-xl border border-slate-100 group-hover:bg-[#0EA5E9]/10 transition-colors shrink-0">
                  <MapPin className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-[#1E40AF] tracking-tight">{area.name}</span>
                  <span className="text-xs text-[#475569] font-semibold">{area.state}</span>
                </div>
              </div>

              <Link
                href={`/areas/${area.slug}`}
                className="p-2 bg-white rounded-xl border border-slate-100 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors"
                aria-label={`View details for ${area.name}`}
              >
                <ArrowRight className="w-4 h-4 text-[#0EA5E9] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Note block */}
        <div className="mt-12 bg-[#F8FAFC] rounded-3xl p-6 border border-slate-100 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-[#1E40AF]">Don't see your neighborhood listed above?</span>
            <p className="text-xs text-[#475569] font-semibold">We service all locations within 45km of Kuala Lumpur City Centre.</p>
          </div>
          <a
            href={getWhatsAppLink({ location: "KL & Selangor" })}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0EA5E9] hover:bg-[#1E40AF] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-3xs"
          >
            Ask Our Dispatch Desk
          </a>
        </div>

      </div>
    </section>
  );
}
