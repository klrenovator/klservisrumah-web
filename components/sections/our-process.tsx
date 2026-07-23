import React from "react";
import { ClipboardCheck, Sparkles, Hammer, ShieldAlert, BadgeCheck } from "lucide-react";

export function OurProcess() {
  const steps = [
    {
      num: "01",
      icon: <ClipboardCheck className="w-6 h-6 text-[#0781B2]" />,
      title: "Secure Instant Booking",
      desc: "Select your desired services and suburb. Check instant slots via our automated WhatsApp portal or phone line."
    },
    {
      num: "02",
      icon: <ShieldAlert className="w-6 h-6 text-[#0781B2]" />,
      title: "Upfront Fixed Quote",
      desc: "Our manager inspects the requirements and outlines a detailed, itemized fixed pricing quote before any work starts."
    },
    {
      num: "03",
      icon: <Sparkles className="w-6 h-6 text-[#0781B2]" />,
      title: "Surface Protection Prep",
      desc: "Our painters/craftsmen cover your furniture, switches, and floors completely. Tape borders and mask clean areas."
    },
    {
      num: "04",
      icon: <Hammer className="w-6 h-6 text-[#0781B2]" />,
      title: "Precision Execution",
      desc: "Work is executed using premium tools, laser-levels, and SIRIM-certified materials. All dust/waste is vacuumed."
    },
    {
      num: "05",
      icon: <BadgeCheck className="w-6 h-6 text-[#0781B2]" />,
      title: "Warranty & Sign-Off",
      desc: "We perform final stress tests (leak checks / level checks). You review, sign off, and unlock a 30-to-90 days written warranty."
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0781B2] tracking-widest uppercase bg-[#D2DEE7]/30 px-4 py-1.5 rounded-full">
            The Work Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#021F44] tracking-tight">
            Our Professional 5-Step Process
          </h2>
          <p className="text-base text-[#4A607C] leading-relaxed">
            Engineered to deliver maximum peace of mind, immaculate cleanliness, and total price transparency from first click to final sign-off.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10" />

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm group-hover:border-[#0781B2] group-hover:shadow-md transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                <span className="absolute -top-4 -right-4 text-3xl font-extrabold text-slate-100 group-hover:text-[#0781B2]/10 transition-colors pointer-events-none select-none">
                  {step.num}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#021F44] tracking-tight mb-2.5">
                {step.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#4A607C] leading-relaxed font-semibold">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
