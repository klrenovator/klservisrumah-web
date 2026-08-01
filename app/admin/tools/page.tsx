"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Lock, 
  ArrowRight, 
  MessageSquare,
  Paintbrush,
  Wrench,
  Home,
  ShieldCheck,
  Eye,
  EyeOff,
  Sparkles
} from "lucide-react";
import { servicesData } from "@/config/services-data";
import { toolsContent } from "@/config/tools-data";
import { useTranslations } from "@/hooks/use-translations";

// Simple password - you can change this
const ADMIN_PASSWORD = "KL2024Admin"; // Change this to your desired password

export default function AdminToolsPage() {
  const t = useTranslations();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  // Check if already authenticated in this session
  useEffect(() => {
    const auth = sessionStorage.getItem("adminToolsAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
      sessionStorage.setItem("adminToolsAuth", "true");
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    sessionStorage.removeItem("adminToolsAuth");
  };

  // Password Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-xl mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-black text-[#075985]">Owner Access</h1>
            <p className="mt-2 text-slate-600">Enter password to access admin tools</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="bg-white rounded-3xl shadow-xl p-8">
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={`w-full rounded-xl border ${error ? 'border-red-500' : 'border-slate-300'} bg-white px-4 py-4 text-base font-medium text-slate-800 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm font-bold text-red-600">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-base font-black text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40"
            >
              Unlock Admin Tools
            </button>

            <div className="mt-6 text-center">
              <Link 
                href="/"
                className="text-sm font-semibold text-slate-500 hover:text-slate-700"
              >
                ← Back to website
              </Link>
            </div>
          </form>

          {/* Hint */}
          <p className="mt-4 text-center text-xs text-slate-500">
            Protected area • KL Servis Rumah Admin
          </p>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600">
                <ShieldCheck className="h-5 w-5 text-white" />
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
                <Lock className="h-4 w-4" />
                Lock
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Intro Banner */}
        <div className="mb-8 rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100">
              <Calculator className="h-6 w-6 text-violet-600" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#075985]">All Estimators & Tools</h2>
              <p className="mt-1 text-sm font-semibold text-slate-600">
                Use these calculators for customer estimates. Click any tool to open it with the full estimator including "Send Estimate to Customer" feature.
              </p>
            </div>
          </div>
        </div>

        {/* Dedicated Tools */}
        <section className="mb-10">
          <h3 className="mb-4 text-lg font-black text-[#075985]">📊 Detailed Estimators</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(toolsContent).map(([slug, tool]) => (
              <Link
                key={slug}
                href={`/tools/${slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100">
                    <Paintbrush className="h-6 w-6 text-sky-600" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-violet-600" />
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
            {Object.values(servicesData).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-sky-300 hover:bg-sky-50/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#075985] group-hover:text-sky-600">
                    {service.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" />
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
              <Calculator className="h-8 w-8 text-sky-600" />
              <h4 className="mt-3 font-black text-[#075985]">Estimate Hub</h4>
              <p className="mt-1 text-xs text-slate-600">All estimators in one place</p>
            </Link>

            <Link
              href="/tools"
              className="group rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 p-5 transition hover:border-emerald-300 hover:shadow-lg"
            >
              <Wrench className="h-8 w-8 text-emerald-600" />
              <h4 className="mt-3 font-black text-[#075985]">Tools Page</h4>
              <p className="mt-1 text-xs text-slate-600">View all free tools</p>
            </Link>

            <a
              href="https://wa.me/601116627349"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-5 transition hover:border-green-300 hover:shadow-lg"
            >
              <MessageSquare className="h-8 w-8 text-green-600" />
              <h4 className="mt-3 font-black text-[#075985]">WhatsApp Dispatch</h4>
              <p className="mt-1 text-xs text-slate-600">Open WhatsApp chat</p>
            </a>
          </div>
        </section>

        {/* Footer Info */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
            <ShieldCheck className="h-5 w-5 text-violet-600" />
            <span>This is a protected admin area</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Session-based authentication • Close browser to logout
          </p>
        </div>
      </main>
    </div>
  );
}
