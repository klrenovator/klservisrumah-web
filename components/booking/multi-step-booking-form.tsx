"use client";

import React, { useMemo, useState } from "react";
import { servicesData } from "@/config/services-data";
import { suburbPages } from "@/config/suburb-data";
import { siteConfig } from "@/config/site";
import { trackFormSubmit, trackWhatsAppClick } from "@/lib/analytics";
import { useTranslations } from "@/hooks/use-translations";

const serviceOptions = Object.values(servicesData);
const propertyTypeKeys = ["landed", "condo", "commercial", "shoplot", "other"] as const;
const timeWindowKeys = ["morning", "afternoon", "late", "flexible"] as const;

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
  const t = useTranslations();

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
    const serviceTitle = selectedService?.title ?? t("contact.otherService");
    const suburb = suburbPages.find((item) => item.slug === form.suburb)?.name ?? form.suburb;
    const dateLabel = t("contact.fields.date");
    const text = [
      t("contact.whatsappGreeting"),
      "",
      `${t("contact.fields.name")}: ${form.name}`,
      `${t("contact.fields.phone")}: ${form.phone}`,
      form.email ? `${t("contact.fields.email")}: ${form.email}` : "",
      `${t("contact.fields.service")}: ${serviceTitle}`,
      `${t("contact.fields.subService")}: ${form.subService || t("contact.notSure")}`,
      `${t("contact.fields.area")}: ${suburb}`,
      `${t("contact.fields.propertyType")}: ${form.propertyType}`,
      `${dateLabel}: ${form.date}`,
      `${t("contact.timeWindow")}: ${form.time}`,
      `${t("contact.fields.message")}: ${form.details}`,
      `${t("contact.photosReady")}: ${form.hasPhotos}`
    ].filter(Boolean).join("\n");

    trackFormSubmit({ service: serviceTitle, area: suburb });
    trackWhatsAppClick({ service: serviceTitle, area: suburb, page: "multi_step_booking_form" });
    setSubmitted(true);
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-[0_20px_50px_rgba(2,31,68,0.06)]">
        <h2 className="text-2xl font-extrabold text-[#075985]">{t("contact.bookingCompiled")}</h2>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-[#475569]">
          {t("contact.bookingCompiledDesc")}
        </p>
        <button onClick={submit} className="mt-6 rounded-xl bg-[#15803D] px-5 py-3 text-sm font-extrabold text-white">
          {t("contact.openWhatsApp")}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_15px_40px_rgba(2,31,68,0.04)] sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0369A1]">{t("contact.step")} {step} {t("contact.of")} 6</span>
          <h2 className="mt-1 text-2xl font-extrabold text-[#075985]">{t("contact.bookJob")}</h2>
        </div>
        <div className="text-right text-[11px] font-bold text-[#475569]">{t("contact.formNote")}<br />{t("contact.quoteNote")}</div>
      </div>

      <div className="min-h-80">
        {step === 1 && (
          <StepShell title={t("contact.fields.service")}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviceOptions.map((service) => (
                <button key={service.slug} onClick={() => update("service", service.slug)} className={`rounded-2xl border p-4 text-left transition ${form.service === service.slug ? "border-[#0284C7] bg-[#E0F2FE]" : "border-slate-100 bg-slate-50 hover:bg-white"}`}>
                  <span className="text-sm font-extrabold text-[#075985]">{service.title}</span>
                  <span className="mt-1 block text-xs font-bold text-[#0369A1]">{t("common.fromLabel")} {service.startPrice}</span>
                </button>
              ))}
            </div>
          </StepShell>
        )}

        {step === 2 && (
          <StepShell title={t("contact.fields.subService")}>
            <div className="grid grid-cols-1 gap-3">
              {subServices.map((sub) => (
                <button key={sub.name} onClick={() => update("subService", sub.name)} className={`rounded-2xl border p-4 text-left transition ${form.subService === sub.name ? "border-[#0284C7] bg-[#E0F2FE]" : "border-slate-100 bg-slate-50 hover:bg-white"}`}>
                  <span className="text-sm font-extrabold text-[#075985]">{sub.name}</span>
                  <span className="mt-1 block text-xs font-bold text-[#0369A1]">{sub.price}</span>
                  <span className="mt-1 block text-xs font-semibold text-[#475569]">{sub.desc}</span>
                </button>
              ))}
            </div>
          </StepShell>
        )}

        {step === 3 && (
          <StepShell title={t("contact.fields.location")}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label htmlFor="booking-suburb" className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#075985]">
                {t("contact.fields.area")}
                <select id="booking-suburb" value={form.suburb} onChange={(event) => update("suburb", event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#075985] outline-none focus:border-[#0EA5E9]">
                  <option value="">{t("contact.selectSuburb")}</option>
                  {suburbPages.map((suburb) => <option key={suburb.slug} value={suburb.slug}>{suburb.name}</option>)}
                </select>
              </label>
              <label htmlFor="booking-propertyType" className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#075985]">
                {t("contact.fields.propertyType")}
                <select id="booking-propertyType" value={form.propertyType} onChange={(event) => update("propertyType", event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#075985] outline-none focus:border-[#0EA5E9]">
                  <option value="">{t("contact.selectType")}</option>
                  {propertyTypeKeys.map((key) => <option key={key} value={t(`contact.propertyTypes.${key}`)}>{t(`contact.propertyTypes.${key}`)}</option>)}
                </select>
              </label>
            </div>
          </StepShell>
        )}

        {step === 4 && (
          <StepShell title={t("contact.fields.schedule")}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label htmlFor="booking-date" className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#075985]">
                {t("contact.fields.date")}
                <input
                  id="booking-date"
                  value={form.date}
                  onChange={(event) => update("date", event.target.value)}
                  type="date"
                  min={new Date().toISOString().slice(0, 10)}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#075985] outline-none focus:border-[#0EA5E9]"
                />
              </label>
              <label htmlFor="booking-time" className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#075985]">
                {t("contact.timeWindow")}
                <select id="booking-time" value={form.time} onChange={(event) => update("time", event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#075985] outline-none focus:border-[#0EA5E9]">
                  {timeWindowKeys.map((key) => <option key={key} value={t(`contact.timeWindows.${key}`)}>{t(`contact.timeWindows.${key}`)}</option>)}
                </select>
              </label>
            </div>
          </StepShell>
        )}

        {step === 5 && (
          <StepShell title={t("contact.fields.problem")}>
            <label htmlFor="booking-details" className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#075985]">
              {t("contact.fields.message")}
              <textarea
                id="booking-details"
                value={form.details}
                onChange={(event) => update("details", event.target.value)}
                rows={5}
                minLength={8}
                aria-describedby="booking-details-hint"
                placeholder={t("contact.detailsPlaceholder")}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#075985] outline-none focus:border-[#0EA5E9]"
              />
              <span id="booking-details-hint" className="text-[10px] font-semibold normal-case text-slate-500">{t("contact.detailsHint")}</span>
            </label>
            <label htmlFor="booking-photos" className="mt-4 flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#075985]">
              {t("contact.photosReady")}
              <select id="booking-photos" value={form.hasPhotos} onChange={(event) => update("hasPhotos", event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#075985] outline-none focus:border-[#0EA5E9]">
                <option value="yes">{t("contact.photosYes")}</option>
                <option value="no">{t("contact.photosNo")}</option>
              </select>
            </label>
          </StepShell>
        )}

        {step === 6 && (
          <StepShell title={t("contact.fields.contact")}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input id="booking-name" label={t("contact.fields.name")} value={form.name} onChange={(value) => update("name", value)} autoComplete="name" />
              <Input id="booking-phone" label={t("contact.fields.phone")} value={form.phone} onChange={(value) => update("phone", value)} placeholder="01116627349" autoComplete="tel" inputMode="tel" />
              <div className="sm:col-span-2">
                <Input id="booking-email" label={t("contact.fields.email")} value={form.email} onChange={(value) => update("email", value)} placeholder="you@example.com" autoComplete="email" inputMode="email" />
              </div>
            </div>
          </StepShell>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
        <button type="button" onClick={() => setStep((current) => Math.max(1, current - 1))} disabled={step === 1} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-extrabold text-[#075985] disabled:cursor-not-allowed disabled:opacity-40">
          {t("common.back")}
        </button>
        {step < 6 ? (
          <button type="button" onClick={() => setStep((current) => current + 1)} disabled={!canContinue} className="rounded-xl bg-[#0369A1] px-5 py-3 text-sm font-extrabold text-white disabled:cursor-not-allowed disabled:bg-slate-300">
            {t("common.continue")}
          </button>
        ) : (
          <button type="button" onClick={submit} disabled={!canContinue} className="rounded-xl bg-[#15803D] px-5 py-3 text-sm font-extrabold text-white disabled:cursor-not-allowed disabled:bg-slate-300">
            {t("contact.submitAndOpen")}
          </button>
        )}
      </div>
    </div>
  );
}

function StepShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-extrabold text-[#075985]">{title}</h3>
      {children}
    </div>
  );
}

function Input({ id, label, value, onChange, placeholder, autoComplete, inputMode }: { id: string; label: string; value: string; onChange: (value: string) => void; placeholder?: string; autoComplete?: string; inputMode?: "text" | "tel" | "email" | "numeric" | "url" | "search" }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-[#075985]">
      {label}
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm normal-case text-[#075985] outline-none focus:border-[#0EA5E9]"
      />
    </label>
  );
}
