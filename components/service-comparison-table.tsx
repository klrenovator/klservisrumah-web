import React from "react";
import Link from "next/link";
import { servicesData } from "@/config/services-data";

const responseTimes: Record<string, string> = {
  painting: "Scheduled / same-week",
  plumbing: "Same-day for urgent leaks",
  ceiling: "Inspection + scheduled repair",
  waterproofing: "Leak triage priority",
  handyman: "Same-day slots available"
};

export function ServiceComparisonTable() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0EA5E9]">Compare services</span>
          <h2 className="text-3xl font-extrabold text-[#1E40AF]">Choose the right service before booking</h2>
          <p className="mx-auto max-w-2xl text-sm font-semibold leading-relaxed text-[#475569]">
            Review starting price, warranty and common tasks. Final scope is confirmed with a transparent market-rate quote.
          </p>
        </div>
        <div className="overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-xs">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-widest text-[#1E40AF]">
              <tr>
                <th className="px-5 py-4">Service</th>
                <th className="px-5 py-4">Starts from</th>
                <th className="px-5 py-4">Warranty</th>
                <th className="px-5 py-4">Response</th>
                <th className="px-5 py-4">Best for</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {Object.values(servicesData).map((service) => (
                <tr key={service.slug} className="align-top">
                  <td className="px-5 py-4 font-extrabold text-[#1E40AF]">{service.title}</td>
                  <td className="px-5 py-4 font-bold text-[#0EA5E9]">{service.startPrice}</td>
                  <td className="px-5 py-4 text-xs font-semibold text-[#475569]">{service.warranty}</td>
                  <td className="px-5 py-4 text-xs font-semibold text-[#475569]">{responseTimes[service.slug]}</td>
                  <td className="px-5 py-4 text-xs font-semibold text-[#475569]">{service.subServices.slice(0, 2).map((sub) => sub.name).join(", ")}</td>
                  <td className="px-5 py-4">
                    <Link href={`/services/${service.slug}`} className="rounded-xl bg-[#2563EB] px-4 py-2 text-xs font-extrabold text-white">
                      View rates
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
