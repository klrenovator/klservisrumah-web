import React from "react";
import Link from "next/link";
import { problemPages } from "@/config/problem-data";
import { servicesData } from "@/config/services-data";

export const metadata = {
  title: "Home Service Problem Guides KL & Selangor",
  description: "Diagnose common painting, plumbing, ceiling, waterproofing and handyman problems with causes, fixes, cost ranges and booking guidance."
};

export default function ProblemsIndexPage() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="rounded-full bg-[#DBEAFE] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Problem guides</span>
        <h1 className="mt-4 text-3xl font-extrabold text-[#1E40AF] sm:text-5xl">Find the cause, fix and cost range</h1>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problemPages.map((problem) => {
            const service = servicesData[problem.serviceSlug];
            return (
              <Link key={problem.slug} href={`/problems/${problem.slug}`} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0EA5E9]">{service.title} · {problem.urgency}</span>
                <h2 className="mt-2 text-lg font-extrabold text-[#1E40AF]">{problem.title}</h2>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-[#475569]">{problem.symptom}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
