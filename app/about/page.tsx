import React from "react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CheckCircle2, ShieldCheck, Landmark, Users, Hammer, Flame } from "lucide-react";

export const metadata = {
  title: "About Us — KL Servis Rumah",
  description: "Learn about KL Servis Rumah, our mission, insured operations, and premium home service values across Kuala Lumpur and Selangor."
};

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="w-6 h-6 text-[#0EA5E9]" />,
      title: "Highly Skilled Local Tradesmen",
      desc: "We do not hire raw, unverified contract laborers. Every builder, painter, and plumber is background-checked and highly trained."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0EA5E9]" />,
      title: "Ironclad Warranties",
      desc: "We stand firmly behind our work. If any joint leaks or ceiling sags within our warranty period, we fix it free of charge."
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#0EA5E9]" />,
      title: "Premium Engineering Materials",
      desc: "From SIRIM-certified pipes to Nippon Spot-less paints and molly toggle wall anchors, we select only industrial-grade supplies."
    },
    {
      icon: <Flame className="w-6 h-6 text-[#0EA5E9]" />,
      title: "Meticulous Cleanliness",
      desc: "We mask borders and lay down thick plastic drop sheets to guarantee that we leave your property as spotless as we found it."
    }
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest bg-[#0EA5E9]/10 px-4.5 py-1.5 rounded-full w-fit mx-auto sm:mx-0">
              Our Corporate Story
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
              About KL Servis Rumah
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              At <strong>KL Servis Rumah</strong>, we believe that home maintenance should be straightforward, premium, and stress-free. We provide a high standard of painting, ceiling repair, plumbing, waterproofing, and handyman services across Kuala Lumpur &amp; Selangor with insured operations and background-verified tradesmen.
            </p>
          </div>

          <hr className="border-slate-200/60" />

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col gap-6">
            <h2 className="text-xl font-extrabold text-[#075985] tracking-tight flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#0EA5E9]" />
              <span>Company & Service Standards</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm font-semibold text-[#475569]">
              <div className="bg-white p-4 rounded-xl border border-slate-100/80 flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Business Positioning</span>
                <span className="text-[#075985]">Established local home services company</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100/80 flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Pricing Standard</span>
                <span className="text-[#075985]">Transparent market-rate quotations</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100/80 flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Office Area</span>
                <span className="text-[#075985] truncate">{siteConfig.addressStreet}, Kuala Lumpur</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100/80 flex flex-col gap-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Operational Status</span>
                <span className="text-emerald-500 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Active & Fully Insured
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-[#075985] tracking-tight">Our Core Mission</h2>
            <p className="text-sm text-[#475569] leading-relaxed font-semibold">
              Historically, the Malaysian home services market has been fragmented, with homeowners struggling against unreliable independent contractors, sudden price inflation, and messy cleanups. We built KL Servis Rumah following the highly structured, premium visual, and delivery guidelines of our sibling brand, KL Renovator. We aim to elevate local home care by guaranteeing itemized fixed pricing, using superior SIRIM-certified materials, and deploying background-checked specialists who clean up entirely after themselves.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-[#075985] tracking-tight">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl shrink-0 mt-0.5">
                    {val.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold text-[#075985]">{val.title}</h3>
                    <p className="text-xs text-[#475569] leading-relaxed font-semibold">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
