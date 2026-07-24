"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services-data";
import { Calendar, User, Phone, MapPin, Clipboard, FileText, CheckCircle2 } from "lucide-react";

// Form validation schema with zod
const bookingSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  phone: z.string().regex(/^(?:\+?6?01)[0-46-9]-?\d{7,8}$/, "Please enter a valid Malaysian phone number (e.g., 0123456789)"),
  service: z.string().min(1, "Please select a service category"),
  location: z.string().min(1, "Please select your suburb"),
  date: z.string().min(1, "Please select a preferred date"),
  details: z.string().optional()
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<BookingFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      location: "",
      date: "",
      details: ""
    }
  });

  const onSubmit = (data: BookingFormValues) => {
    setFormData(data);
    setIsSuccess(true);

    // Dynamic WhatsApp checkout URL creation
    const serviceTitle = servicesData[data.service]?.title || data.service;
    const notes = data.details ? `\n\nNotes: ${data.details}` : "";
    const waText = `Hi KL Servis Rumah! I would like to book a home service.\n\n👤 Name: ${data.name}\n📞 Phone: ${data.phone}\n🛠️ Service: ${serviceTitle}\n📍 Location: ${data.location}\n📅 Date: ${data.date}${notes}`;
    const encoded = encodeURIComponent(waText);
    
    // Redirect to WhatsApp in a new tab after 2 seconds
    setTimeout(() => {
      window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encoded}`, "_blank");
    }, 1500);
  };

  if (isSuccess && formData) {
    const serviceTitle = servicesData[formData.service]?.title || formData.service;
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_20px_50px_rgba(2,31,68,0.06)] text-center flex flex-col items-center gap-6 animate-in fade-in slide-in-from-top-4 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100/50">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-extrabold text-[#1E40AF] tracking-tight">Booking Form Submitted!</h3>
          <p className="text-sm text-[#475569] font-semibold leading-relaxed">
            Alhamdulillah! We have compiled your request. Opening our official WhatsApp Dispatch Desk in a new tab to complete your scheduling...
          </p>
        </div>

        {/* Compiled Summary Box */}
        <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 text-left flex flex-col gap-3">
          <div className="text-xs font-bold text-[#1E40AF] border-b border-slate-200/50 pb-2 uppercase tracking-widest">
            Summary of Request:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-semibold">
            <div>
              <span className="text-slate-400 block mb-0.5 uppercase tracking-wider text-[9px]">Client Name</span>
              <span className="text-[#1E40AF]">{formData.name}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5 uppercase tracking-wider text-[9px]">Contact Number</span>
              <span className="text-[#1E40AF]">{formData.phone}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5 uppercase tracking-wider text-[9px]">Selected Service</span>
              <span className="text-[#0EA5E9] font-bold">{serviceTitle}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5 uppercase tracking-wider text-[9px]">Target Location</span>
              <span className="text-[#1E40AF]">{formData.location}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-slate-400 block mb-0.5 uppercase tracking-wider text-[9px]">Preferred Date</span>
              <span className="text-[#1E40AF]">{formData.date}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            const serviceTitle = servicesData[formData.service]?.title || formData.service;
            const notes = formData.details ? `\n\nNotes: ${formData.details}` : "";
            const waText = `Hi KL Servis Rumah! I would like to book a home service.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🛠️ Service: ${serviceTitle}\n📍 Location: ${formData.location}\n📅 Date: ${formData.date}${notes}`;
            const encoded = encodeURIComponent(waText);
            window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encoded}`, "_blank");
          }}
          className="w-full bg-[#22C55E] hover:bg-[#1eb050] text-white font-extrabold text-base py-4 rounded-xl transition-all duration-200 shadow-sm"
        >
          Click here if it doesn't open automatically
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_15px_40px_rgba(2,31,68,0.04)]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        
        {/* Row 1: Name */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#0EA5E9]" />
            <span>Full Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="e.g. Ahmad bin Ali"
            className="w-full bg-slate-50 text-[#1E40AF] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all"
          />
          {errors.name && (
            <span className="text-xs text-rose-500 font-bold">{errors.name.message}</span>
          )}
        </div>

        {/* Row 2: Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-[#0EA5E9]" />
            <span>WhatsApp / Phone Number</span>
          </label>
          <input
            {...register("phone")}
            type="text"
            placeholder="e.g. 0123456789"
            className="w-full bg-slate-50 text-[#1E40AF] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all"
          />
          {errors.phone && (
            <span className="text-xs text-rose-500 font-bold">{errors.phone.message}</span>
          )}
        </div>

        {/* Row 3: Service */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
            <Clipboard className="w-4 h-4 text-[#0EA5E9]" />
            <span>Service Required</span>
          </label>
          <select
            {...register("service")}
            className="w-full bg-slate-50 text-[#1E40AF] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
          >
            <option value="" disabled>Select service category...</option>
            {Object.values(servicesData).map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title} (From {service.startPrice})
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="text-xs text-rose-500 font-bold">{errors.service.message}</span>
          )}
        </div>

        {/* Row 4: Suburb */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#0EA5E9]" />
            <span>Your Suburb (KL & Selangor)</span>
          </label>
          <select
            {...register("location")}
            className="w-full bg-slate-50 text-[#1E40AF] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
          >
            <option value="" disabled>Select your suburb...</option>
            {siteConfig.areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          {errors.location && (
            <span className="text-xs text-rose-500 font-bold">{errors.location.message}</span>
          )}
        </div>

        {/* Row 5: Date */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#0EA5E9]" />
            <span>Preferred Service Date</span>
          </label>
          <input
            {...register("date")}
            type="date"
            className="w-full bg-slate-50 text-[#1E40AF] font-semibold text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all cursor-pointer"
          />
          {errors.date && (
            <span className="text-xs text-rose-500 font-bold">{errors.date.message}</span>
          )}
        </div>

        {/* Row 6: Details */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#0EA5E9]" />
            <span>Additional Details / Specific Problems</span>
          </label>
          <textarea
            {...register("details")}
            rows={4}
            placeholder="Describe the issues (e.g. wall size for painting, leakage details, lock brand, TV weight)..."
            className="w-full bg-slate-50 text-[#1E40AF] font-semibold text-xs sm:text-sm py-3.5 px-4 rounded-xl border border-slate-100 outline-none focus:border-[#0EA5E9] focus:bg-white transition-all resize-none"
          />
        </div>

        {/* Submit action */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0EA5E9] hover:bg-[#1E40AF] text-white font-extrabold text-base py-4 rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Compiling booking..." : "Submit Booking Request & Open WhatsApp"}
        </button>

      </form>
    </div>
  );
}
