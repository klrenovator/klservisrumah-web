import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_SESSION_COOKIE, verifyAdminToken } from "@/lib/admin-auth";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { Lock } from "lucide-react";

/**
 * Owner login screen.
 *
 * Server-rendered and forced dynamic: the decision whether to show the form
 * or bounce an already-authenticated owner to the dashboard depends on the
 * request cookie, so this page must never be statically cached.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Owner Login",
  // Internal tool — never indexable. /admin/ is also disallowed in robots.txt.
  robots: { index: false, follow: false }
};

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  if (verifyAdminToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value)) {
    redirect("/admin/tools");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 shadow-xl mb-4">
            <Lock className="h-8 w-8 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-black text-[#075985]">Owner Access</h1>
          <p className="mt-2 text-slate-600">Enter password to access admin tools</p>
        </div>

        <AdminLoginForm />

        {/* Hint */}
        <p className="mt-4 text-center text-xs text-slate-500">
          Protected area • KL Servis Rumah Admin
        </p>
      </div>
    </div>
  );
}
