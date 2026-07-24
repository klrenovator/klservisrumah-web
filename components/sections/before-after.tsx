import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function BeforeAfter() {
  const comparisons = [
    {
      title: "Living Room Wall Painting Restoration",
      service: "Painting",
      location: "Petaling Jaya",
      before: "Moisture stains, cracking paint, faded yellowing finish.",
      after: "Flawless smooth skimming, primer-seal coat, double top-coat premium Nippon Spot-less.",
      benefit: "Washable walls, anti-mold protection, modern bright visual."
    },
    {
      title: "Inter-Floor Bathroom Concrete Leak",
      service: "Waterproofing",
      location: "Cheras",
      before: "Damp ceiling dripping water, ruining drywall boards, dark mildew forming.",
      after: "No tile hacking: High-pressure PU Injection Grouting, water-damaged drywall replaced and skimmed.",
      benefit: "100% moisture sealed, structural reinforcing, zero-leak certificate."
    },
    {
      title: "Sagging Plaster Ceiling Repair",
      service: "Ceiling Repair",
      location: "Subang Jaya",
      before: "Drywall sagging down due to water leak, loose wooden frame hanging unsafely.",
      after: "New rust-proof galvanized steel (GI) hangers, moisture-resistant boards, fiberglass joint taping.",
      benefit: "Perfect structural sag safety, perfectly flat seamless paint-ready finish."
    }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0EA5E9] tracking-widest uppercase bg-[#E0F2FE]/30 px-4 py-1.5 rounded-full">
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
            Before & After Quality Proofs
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            See the exact results of our professional workmanship. Real projects completed in Kuala Lumpur & Selangor.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisons.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-3xs flex flex-col justify-between">
              <div>
                
                {/* Badge tags */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.service}
                  </span>
                  <span className="text-xs font-semibold text-[#475569]">
                    📍 {item.location}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#075985] tracking-tight leading-snug mb-4">
                  {item.title}
                </h3>

                {/* Side by side stats */}
                <div className="flex flex-col gap-3.5">
                  <div className="bg-rose-50/50 p-3.5 rounded-2xl border border-rose-100/40">
                    <div className="flex items-center gap-2 text-rose-600 mb-1">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">The Problem</span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed font-semibold">
                      {item.before}
                    </p>
                  </div>

                  <div className="bg-emerald-50/50 p-3.5 rounded-2xl border border-emerald-100/40">
                    <div className="flex items-center gap-2 text-emerald-600 mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">The Result</span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed font-semibold">
                      {item.after}
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom benefits */}
              <div className="mt-5 pt-4 border-t border-slate-50 text-[11px] font-bold text-[#075985] flex items-center justify-between">
                <span>Key Benefit:</span>
                <span className="text-[#0EA5E9] bg-[#E0F2FE]/25 px-2.5 py-1 rounded-md">{item.benefit}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
