import React from "react";
import { MultiStepBookingForm } from "@/components/booking/multi-step-booking-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactHeroHeading } from "@/components/sections/contact-hero-heading";
import { LocaleContactInfo } from "@/components/sections/locale-contact-info";

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
              <ContactHeroHeading />
              <hr className="border-slate-200/60" />
              <LocaleContactInfo />
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
