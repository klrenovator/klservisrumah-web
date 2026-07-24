import React from "react";
import { ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Semi-D Bungalow Full Exterior Painting",
      location: "Bukit Jelutong, Shah Alam",
      scope: "Pressure jet washing, crack repairs, damp priming, and double coat Nippon Weatherbond protection.",
      stat: "Completed in 4 days"
    },
    {
      title: "Luxury Condo Bathroom PU Waterproofing",
      location: "Mont Kiara, Kuala Lumpur",
      scope: "High-pressure Polyurethane (PU) grouting injection through concrete slabs to seal active bath leaks.",
      stat: "Completed in 3 hours"
    },
    {
      title: "Corporate Head Office Gypsum Board Partition",
      location: "Glenmarie, Shah Alam",
      scope: "Drywall assembly with internal double-density rockwool soundproofing and flawless plaster skim-coating.",
      stat: "Completed over weekend"
    },
    {
      title: "Modern TV Mounting & Curtain Hanging",
      location: "Bandar Puteri, Puchong",
      scope: "Molly bolt hollow-wall anchors mounting of 75\" OLED TV, perfectly level curtain tracks in 3 rooms.",
      stat: "Completed in 2 hours"
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start gap-3 max-w-2xl">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#DBEAFE]/30 px-4 py-1.5 rounded-full">
              Completed Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E40AF] tracking-tight">
              Featured Recent Projects
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Explore actual projects executed by our skilled technicians. Delivering premium quality standards across residential and commercial estates.
            </p>
          </div>
          
          <div className="shrink-0 flex items-center gap-2 text-xs font-extrabold text-[#1E40AF] bg-slate-50 border border-slate-100 p-4 rounded-2xl shadow-3xs">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>Guaranteed Standards</span>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_25px_rgba(2,31,68,0.01)] hover:shadow-[0_15px_40px_rgba(2,31,68,0.03)] hover:border-[#0EA5E9]/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-4">
                
                {/* Location and pin */}
                <div className="flex items-center gap-1.5 text-xs text-[#0EA5E9] font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>

                <h3 className="text-xl font-extrabold text-[#1E40AF] tracking-tight group-hover:text-[#0EA5E9] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                  {project.scope}
                </p>

              </div>

              {/* Stat footer */}
              <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs text-[#1E40AF] font-bold">
                  ⚡ {project.stat}
                </span>
                <span className="p-2 bg-slate-50 rounded-xl group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#0EA5E9] group-hover:text-white" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
