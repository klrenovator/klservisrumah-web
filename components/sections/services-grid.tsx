import React from "react";
import Link from "next/link";
import { servicesData } from "@/config/services-data";
import { Paintbrush, Droplet, LayoutGrid, Shield, Wrench, ArrowRight, CheckCircle } from "lucide-react";

export function ServicesGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "paint-brush":
        return <Paintbrush className="w-6 h-6 text-[#0781B2]" />;
      case "droplet":
        return <Droplet className="w-6 h-6 text-[#0781B2]" />;
      case "layout-grid":
        return <LayoutGrid className="w-6 h-6 text-[#0781B2]" />;
      case "shield":
        return <Shield className="w-6 h-6 text-[#0781B2]" />;
      case "wrench":
        return <Wrench className="w-6 h-6 text-[#0781B2]" />;
      default:
        return <Wrench className="w-6 h-6 text-[#0781B2]" />;
    }
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Panel */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0781B2] tracking-widest uppercase bg-[#D2DEE7]/30 px-4 py-1.5 rounded-full">
            Our Elite Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#021F44] tracking-tight">
            Comprehensive Home & Office Services
          </h2>
          <p className="text-base text-[#4A607C] leading-relaxed">
            Professional craftmanship delivered across Kuala Lumpur & Selangor. Select a category below to explore specific services, upfront rates, and dynamic coverage options.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(servicesData).map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgba(2,31,68,0.02)] hover:shadow-[0_20px_50px_rgba(2,31,68,0.05)] hover:border-[#0781B2]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-5">
                
                {/* Header Icon + Price */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#D2DEE7]/30 rounded-2xl group-hover:bg-[#0781B2]/10 transition-colors shrink-0">
                    {getIcon(service.icon)}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-[#4A607C] font-bold uppercase tracking-wider">Prices Start From</span>
                    <span className="text-lg font-extrabold text-[#021F44]">{service.startPrice}</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-extrabold text-[#021F44] tracking-tight group-hover:text-[#0781B2] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A607C] leading-relaxed font-medium">
                    {service.tagline}
                  </p>
                </div>

                <hr className="border-slate-100" />

                {/* Sub-services previews */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] text-[#021F44] font-bold uppercase tracking-widest">Included Specialities:</span>
                  <ul className="flex flex-col gap-2">
                    {service.subServices.slice(0, 3).map((sub, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs font-semibold text-[#4A607C]">
                        <CheckCircle className="w-4 h-4 text-[#0781B2] shrink-0 mt-0.5" />
                        <span>{sub.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs text-emerald-500 font-bold bg-emerald-50 px-2.5 py-1 rounded-md">
                  {service.warranty.split(" ")[0]} Guarantee
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0781B2] hover:text-[#021F44] transition-colors"
                >
                  <span>Explore Rates</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
