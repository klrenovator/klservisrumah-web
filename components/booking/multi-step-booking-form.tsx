"use client";

import React, { useMemo, useState } from "react";
import { servicesData } from "@/config/services-data";
import { suburbPages } from "@/config/suburb-data";
import { siteConfig } from "@/config/site";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/analytics";

const serviceOptions = Object.values(servicesData);
const propertyTypes = ["Landed", "Condo / Apartment", "Commercial / Office", "Shoplot", "Other"];
const timeWindows = ["Morning (9 AM–12 PM)", "Afternoon (12 PM–3 PM)", "Late afternoon (3 PM–6 PM)", "Flexible"];

type FormState = {
  service: string;
  subService: string;
  suburb: string;
  propertyType: string;
  date: string;
  time: string;
  details: string;
  hasPhotos: string;
  name: string;
  phone: string;
  email: string;
};

const initialState: FormState = {
  service: "",
  subService: "",
  suburb: "",
  propertyType: "",
  date: "",
  time: "Flexible",
  details: "",
  hasPhotos: "yes",
  name: "",
  phone: "",
  email: ""
};

export function MultiStepBookingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const selectedService = form.service ? servicesData[form.service] : null;
  const subServices = selectedService?.subServices ?? [];

  const canContinue = useMemo(() => {
    if (step === 1) return Boolean(form.service);
    if (step === 2) return Boolean(form.subService || form.service);
    if (step === 3) return Boolean(form.suburb && form.propertyType);
    if (step === 4) return Boolean(form.date && form.time);
    if (step === 5) return Boolean(form.details.trim().length >= 8);
    if (step === 6) return form.name.trim().length >= 2 && /^(?:\+?6?01)[0-46-9]-?\d{7,8}$/.test(form.phone.replace(/\s/g, ""));
    return true;
  }, [form, step]);

  const update = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = () => {
    const serviceTitle = selectedService?.title ?? "Other home service";
    const suburb = suburbPages.find((item) => item.slug === form.suburb)?.name ?? form.suburb;
    const text = [
      "Hi KL Servis Rumah, I want to book a home service.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      `Service: ${serviceTitle}`,
      `Sub-service: ${form.subService || "Not sure"}`,
      `Area/Suburb: ${suburb}`,
      `Property type: ${form.propertyType}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
      `Problem details: ${form.details}`,
      `Photos ready to attach in WhatsApp: ${form.hasPhotos}`
    ].filter(Boolean).join("\n");

    trackFormSubmit({ service: serviceTitle, area: suburb });
    trackWhatsAppClick({ service: serviceTitle, area: suburb, page: "multi_step_booking_form" });
    setSubmitted(true);
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-[0_20px_50px_rgba(2,31,68,0.06)]">
        <h2 className="text-2xl font-extrabold text-[#1E40AF]">Booking details compiled</h2>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-[#475569]">
          WhatsApp should open in a new tab with your structured booking request. If it did not open, please allow popups and submit again.
        </p>
        <button onClick={submit} className="mt-6 rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white">
          Open WhatsApp Again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_15px_40px_rgba(2,31,68,0.04)] sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">Step {step} of 6</span>
          <h2 className="mt-1 text-2xl font-extrabold text-[#1E40AF]">Book a Job</h2>
        </div>
        <div className="text-right text-[11px] font-bold text-[#475569]">No upfront deposits<br />Market-rate quote first</div>
      </div>

      <div className="min-h-80">
        {step === 1 && (
          <StepShell title="Select service category">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviceOptions.map((service) => (
                <button key={service.slug} onClick={() => update("service", service.slug)} className={`rounded-2xl border p-4 text-left transition ${form.service === service.slug ? "border-[#2563EB] bg-[#DBEAFE]" : "border-slate-100 bg-slate-50 hover:bg-white"}`}>
                  <span className="text-sm font-extrabold text-[#1E40AF]">{service.title}</span>
                  <span className="mt-1 block text-xs font-bold text-[#0EA5E9]">From {service.startPrice}</span>
                </button>
              ))}
            </div>
          </StepShell>
        )}

        {step === 2 && (
          <StepShell title="Choose sub-service (or continue if unsure)">
            <div className="grid grid-cols-1 gap-3">
              {subServices.map((sub) => (
                <button key={sub.name} onClick={() => update("subService", sub.name)} className={`rounded-2xl border p-4 text-left transition ${form.subService === sub.name ? "border-[#2563EB] bg-[#DBEAFE]" : "border-slate-100 bg-slate-50 hover:bg-white"}`}>
                  <span className="text-sm font-extrabold text-[#1E40AF]">{sub.name}</span>
                  <span className="mt-1 block text-xs font-bold text-[#0EA5E9]">{sub.price}</span>
                  <span className="mt-1 block text-xs font-semibold text-[#475569]">{sub.desc}</span>
                </button>
              ))}
            </div>
          </StepShell>
        )}

        {step === 3 && (
          <StepShell title="Area and property type">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
                Area / Suburb
                <select value={form.suburb} onChange={(event) => update("suburb", event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#1E40AF] outline-none focus:border-[#0EA5E9]">
                  <option value="">Select suburb...</option>
                  {suburbPages.map((suburb) => <option key={suburb.slug} value={suburb.slug}>{suburb.name}</option>)}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
                Property type
                <select value={form.propertyType} onChange={(event) => update("propertyType", event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#1E40AF] outline-none focus:border-[#0EA5E9]">
                  <option value="">Select type...</option>
                  {propertyTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </label>
            </div>
          </StepShell>
        )}

        {step === 4 && (
          <StepShell title="Preferred date and time">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
                Preferred date
                <input value={form.date} onChange={(event) => update("date", event.target.value)} type="date" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#1E40AF] outline-none focus:border-[#0EA5E9]" />
              </label>
              <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
                Time window
                <select value={form.time} onChange={(event) => update("time", event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#1E40AF] outline-none focus:border-[#0EA5E9]">
                  {timeWindows.map((time) => <option key={time} value={time}>{time}</option>)}
                </select>
              </label>
            </div>
          </StepShell>
        )}

        {step === 5 && (
          <StepShell title="Problem details and photos">
            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
              Describe the job
              <textarea value={form.details} onChange={(event) => update("details", event.target.value)} rows={5} placeholder="Example: bathroom ceiling is dripping after shower, stain is about 1 meter wide..." className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#1E40AF] outline-none focus:border-[#0EA5E9]" />
            </label>
            <label className="mt-4 flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
              Photos ready?
              <select value={form.hasPhotos} onChange={(event) => update("hasPhotos", event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#1E40AF] outline-none focus:border-[#0EA5E9]">
                <option value="yes">Yes, I will attach photos in WhatsApp</option>
                <option value="no">No photos yet</option>
              </select>
            </label>
          </StepShell>
        )}

        {step === 6 && (
          <StepShell title="Contact information">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input label="Full name" value={form.name} onChange={(value) => update("name", value)} />
              <Input label="WhatsApp / phone" value={form.phone} onChange={(value) => update("phone", value)} placeholder="01116627349" />
              <div className="sm:col-span-2">
                <Input label="Email (optional)" value={form.email} onChange={(value) => update("email", value)} placeholder="you@example.com" />
              </div>
            </div>
          </StepShell>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
        <button type="button" onClick={() => setStep((current) => Math.max(1, current - 1))} disabled={step === 1} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-extrabold text-[#1E40AF] disabled:cursor-not-allowed disabled:opacity-40">
          Back
        </button>
        {step < 6 ? (
          <button type="button" onClick={() => setStep((current) => current + 1)} disabled={!canContinue} className="rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-extrabold text-white disabled:cursor-not-allowed disabled:bg-slate-300">
            Continue
          </button>
        ) : (
          <button type="button" onClick={submit} disabled={!canContinue} className="rounded-xl bg-[#22C55E] px-5 py-3 text-sm font-extrabold text-white disabled:cursor-not-allowed disabled:bg-slate-300">
            Submit & Open WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}

function StepShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-extrabold text-[#1E40AF]">{title}</h3>
      {children}
    </div>
  );
}

function Input({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string }) {
  return (
    <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#1E40AF] outline-none focus:border-[#0EA5E9]" />
    </label>
  );
}
