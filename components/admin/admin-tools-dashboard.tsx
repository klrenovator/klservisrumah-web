"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calculator,
  Lock,
  ArrowRight,
  MessageSquare,
  Paintbrush,
  Wrench,
  ShieldCheck
} from "lucide-react";

/**
 * Owner dashboard for the estimators/tools directory.
 *
 * Rendered only AFTER `app/admin/tools/page.tsx` (server component) has
 * verified the signed, httpOnly session cookie — this component contains no
 * auth material and no client-side auth state, so there is nothing in the
 * browser bundle to extract or spoof.
 */
/**
 * The tool and service lists are resolved by the server page and passed down.
 * Importing `config/tools-data` / `config/services-data` here would ship ~600 KB
 * of copy decks and service records into the dashboard's browser bundle.
 */
export type AdminToolCard = { slug: string; name: string; intro: string; stats: { label: string; value: string }[] };
export type AdminServiceCard = { slug: string; title: string; startPrice: string };

export function AdminToolsDashboard({
  tools,
  services
}: {
  tools: AdminToolCard[];
  services: AdminServiceCard[];
}) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      router.replace("/admin/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600">
                <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-lg font-black text-[#075985]">Owner Dashboard</h1>
                <p className="text-xs text-slate-500">Admin Tools & Estimators</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                View Website →
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Lock className="h-4 w-4" aria-hidden="true" />
                Lock
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Intro Banner */}
        <div className="mb-8 rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100">
              <Calculator className="h-6 w-6 text-violet-600" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#075985]">All Estimators & Tools</h2>
              <p className="mt-1 text-sm font-semibold text-slate-600">
                Use these calculators for customer estimates. Click any tool to open it with the full estimator including &quot;Send Estimate to Customer&quot; feature.
              </p>
            </div>
          </div>
        </div>

        {/* Dedicated Tools */}
        <section className="mb-10">
          <h3 className="mb-4 text-lg font-black text-[#075985]">📊 Detailed Estimators</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100">
                    <Paintbrush className="h-6 w-6 text-sky-600" aria-hidden="true" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-violet-600" aria-hidden="true" />
                </div>
                <h4 className="mt-4 font-black text-[#075985]">{tool.name}</h4>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">{tool.intro}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.stats.map((stat) => (
                    <span key={stat.label} className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">
                      {stat.value}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Services */}
        <section className="mb-10">
          <h3 className="mb-4 text-lg font-black text-[#075985]">🔧 All Service Calculators</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-sky-300 hover:bg-sky-50/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#075985] group-hover:text-sky-600">
                    {service.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" aria-hidden="true" />
                </div>
                <p className="mt-1 text-xs text-slate-500">From {service.startPrice}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="mb-4 text-lg font-black text-[#075985]">⚡ Quick Actions</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/estimate"
              className="group rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-blue-50 p-5 transition hover:border-sky-300 hover:shadow-lg"
            >
              <Calculator className="h-8 w-8 text-sky-600" aria-hidden="true" />
              <h4 className="mt-3 font-black text-[#075985]">Estimate Hub</h4>
              <p className="mt-1 text-xs text-slate-600">All estimators in one place</p>
            </Link>

            <Link
              href="/tools"
              className="group rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 p-5 transition hover:border-emerald-300 hover:shadow-lg"
            >
              <Wrench className="h-8 w-8 text-emerald-600" aria-hidden="true" />
              <h4 className="mt-3 font-black text-[#075985]">Tools Page</h4>
              <p className="mt-1 text-xs text-slate-600">View all free tools</p>
            </Link>

            <a
              href="https://wa.me/601116627349"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-5 transition hover:border-green-300 hover:shadow-lg"
            >
              <MessageSquare className="h-8 w-8 text-green-600" aria-hidden="true" />
              <h4 className="mt-3 font-black text-[#075985]">WhatsApp Dispatch</h4>
              <p className="mt-1 text-xs text-slate-600">Open WhatsApp chat</p>
            </a>
          </div>
        </section>

        {/* Footer Info */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
            <ShieldCheck className="h-5 w-5 text-violet-600" aria-hidden="true" />
            <span>This is a protected admin area</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Server-verified session • Expires automatically after 8 hours
          </p>
        </div>
      </div>
    </div>
  );
}
