import React from "react";
import { siteConfig } from "@/config/site";
import { MultiStepBookingForm } from "@/components/booking/multi-step-booking-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ShieldAlert, Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Book Professional Home Services KL & Selangor",
  description: "Schedule expert painting, plumbing repairs, plaster ceiling, waterproofing, or handyman services with KL Servis Rumah. Instant fixed quotes and prompt dispatch."
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact & Booking", href: "/contact" }]} />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest bg-[#0EA5E9]/10 px-4.5 py-1.5 rounded-full w-fit">
                  Get In Touch
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
                  Book Your Service
                </h1>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-semibold">
                  Complete our secure booking form. Our automated system compiles your details and opens our WhatsApp Dispatch Desk instantly for slot confirmation.
                </p>
              </div>

              <hr className="border-slate-200/60" />

              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-3xs">
                  <MapPin className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Registered Address</span>
                    <span className="text-xs sm:text-sm text-[#075985] font-bold leading-relaxed">{siteConfig.address}</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-3xs">
                  <Phone className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Call Dispatch Support</span>
                    <a href={`tel:${siteConfig.phone}`} className="text-xs sm:text-sm text-[#0EA5E9] font-extrabold">{siteConfig.phoneDisplay}</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-3xs">
                  <Mail className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Inquiry Desk</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-xs sm:text-sm text-[#075985] font-bold">{siteConfig.email}</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-3xs">
                  <Clock className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Operating Schedule</span>
                    <span className="text-xs sm:text-sm text-[#075985] font-bold">{siteConfig.hours}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-3xl p-5 border border-slate-100/60 flex gap-3">
                <ShieldAlert className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <p className="text-[11px] font-bold text-[#475569] leading-normal">
                  Our dispatch managers are active on WhatsApp from 9:00 AM to 6:00 PM everyday (including Saturdays and Sundays) for same-day scheduling. Form submissions made after 6:00 PM are processed early the following morning.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <MultiStepBookingForm />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
