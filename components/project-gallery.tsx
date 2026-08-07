import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { projectItems } from "@/config/projects-data";
import { getWhatsAppLink } from "@/lib/whatsapp";

const serviceHref: Record<string, string> = {
  Painting: "/services/painting",
  Ceiling: "/services/ceiling",
  Waterproofing: "/services/waterproofing",
  Handyman: "/services/handyman"
};

export function ProjectGallery() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_38%),linear-gradient(135deg,rgba(7,89,133,0.95),rgba(2,6,23,0.98))]" />
        <div className="container-default relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-sky-100 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" /> Project Proof Hub
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Recent Home Service Work Types
          </h1>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/82 sm:text-lg">
            A crawlable project gallery for painting, plumbing-adjacent leak repair, ceiling, waterproofing and handyman work across KL & Selangor. Approved real before/after photos can replace the current optimized placeholders anytime.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={getWhatsAppLink({ service: "Project gallery enquiry" })} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Send Similar Job Photos
            </a>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black uppercase tracking-wider text-[#075985] transition hover:bg-sky-50">
              Browse Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-default">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Selected scopes</p>
              <h2 className="mt-2 text-2xl font-black text-[#075985] sm:text-3xl">What our teams commonly handle</h2>
            </div>
            <Link href="/areas" className="btn-ghost w-fit">Check service areas <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projectItems.map((project) => (
              <article key={project.slug} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg">
                <div className="relative h-44 w-full overflow-hidden bg-slate-50">
                  <Image src={project.image} alt={`${project.title} in ${project.location}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0EA5E9]">{project.service}</span>
                  <h3 className="mt-2 text-base font-extrabold leading-tight text-[#075985] group-hover:text-[#0EA5E9]">{project.title}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-xs font-bold text-slate-500"><MapPin className="h-3.5 w-3.5 text-sky-400" /> {project.location}</p>
                  <p className="mt-3 text-xs font-semibold leading-relaxed text-[#475569]">{project.summary}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <Link href={serviceHref[project.service] ?? "/services"} className="text-xs font-black uppercase tracking-widest text-[#0EA5E9] hover:text-[#075985]">
                      Service page
                    </Link>
                    <a href={getWhatsAppLink({ service: project.title, location: project.location })} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#25D366] px-3 py-2 text-[11px] font-black text-white transition hover:bg-[#128C7E]">
                      Quote
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
