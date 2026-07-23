import React from "react";
import { Star, MessageSquare, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Dato' Lim Kian Seng",
      location: "Mont Kiara, KL",
      text: "Extremely professional painting work. They covered my furniture completely, treated the moisture stains first, and used Nippon Spot-less paint. The finish is smooth and they cleaned up everything beautifully. Managed legally, very trustworthy.",
      service: "House Painting",
      date: "2026-07-15"
    },
    {
      name: "Siti Nurhaliza",
      location: "Subang Jaya, Selangor",
      text: "Called them for a ceiling leak that had been bothering us for months. They used acoustic sensors to find the leak, completed high-pressure PU injection without breaking any floor tiles, and replaced the wet plaster ceiling. Highly recommend!",
      service: "Leak Waterproofing",
      date: "2026-07-02"
    },
    {
      name: "Vikneswaran Nair",
      location: "Cheras, Kuala Lumpur",
      text: "I needed a TV mounted on a partition wall, floating shelves, and an IKEA wardrobe assembled. Handyman arrived with heavy-duty hollow anchors and laser levels. Perfect alignments, very sturdy. Excellent service and clean work.",
      service: "Handyman odd jobs",
      date: "2026-06-28"
    },
    {
      name: "Sarah Amanda",
      location: "Setia Alam, Shah Alam",
      text: "Excellent plumbing repair. The master bedroom sink was blocked and the water heater was failing. The plumber replaced the pipes with SIRIM-approved fittings and installed a new Joven water heater. Completely transparent fixed quote.",
      service: "Plumbing repairs",
      date: "2026-06-12"
    }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0781B2] tracking-widest uppercase bg-[#D2DEE7]/30 px-4 py-1.5 rounded-full">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#021F44] tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-base text-[#4A607C] leading-relaxed">
            Real feedback from homeowners and office managers across Kuala Lumpur & Selangor. Sourced directly from our verified customer book.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-3xs flex flex-col justify-between relative hover:shadow-[0_15px_40px_rgba(2,31,68,0.02)] transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100/50 pointer-events-none" />
              
              <div className="flex flex-col gap-5">
                {/* Stars and service tag */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#0781B2] bg-[#0781B2]/10 px-2.5 py-0.5 rounded-md">
                    {review.service}
                  </span>
                </div>

                {/* Review text */}
                <p className="text-xs sm:text-sm text-[#4A607C] leading-relaxed font-semibold italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer details */}
              <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#021F44]">{review.name}</span>
                  <span className="text-[11px] text-[#4A607C] font-semibold">📍 {review.location}</span>
                </div>
                <span className="text-[10px] text-slate-300 font-bold">
                  {review.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
