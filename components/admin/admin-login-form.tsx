"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

/**
 * Owner login form.
 *
 * The password is submitted to `/api/admin/login` and verified server-side;
 * the component never sees, stores, or embeds the credential. On success the
 * server sets an `httpOnly` session cookie and the dashboard is re-rendered
 * by the server (which re-checks the cookie), so there is no client-side
 * auth flag to tamper with.
 */
export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (response.ok) {
        router.replace("/admin/tools");
        return;
      }
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error ?? "Login failed. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white rounded-3xl shadow-xl p-8">
      <div className="mb-6">
        <label htmlFor="admin-password" className="block text-sm font-bold text-slate-700 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            id="admin-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            className={`w-full rounded-xl border ${error ? "border-red-500" : "border-slate-300"} bg-white px-4 py-4 text-base font-medium text-slate-800 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" aria-hidden="true" /> : <Eye className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
        {error && (
          <p role="alert" className="mt-2 text-sm font-bold text-red-600">
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-base font-black text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Unlocking…" : "Unlock Admin Tools"}
      </button>

      <div className="mt-6 text-center">
        <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
          ← Back to website
        </Link>
      </div>
    </form>
  );
}
