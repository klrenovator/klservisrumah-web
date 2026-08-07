import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_SESSION_COOKIE, verifyAdminToken } from "@/lib/admin-auth";
import { AdminToolsDashboard } from "@/components/admin/admin-tools-dashboard";

/**
 * Owner tools directory.
 *
 * SECURITY: this page used to be a client component carrying the literal
 * admin password in the public JS bundle (plus a console-settable
 * sessionStorage bypass). It is now a server component that verifies the
 * signed, expiring, httpOnly session cookie BEFORE any dashboard markup is
 * produced, and middleware additionally gates every `/admin/*` URL.
 *
 * Forced dynamic: the render depends on a request cookie and must never be
 * served from a static/shared cache.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Owner Dashboard",
  // Internal tool — never indexable. /admin/ is also disallowed in robots.txt.
  robots: { index: false, follow: false }
};

export default async function AdminToolsPage() {
  const cookieStore = await cookies();
  if (!verifyAdminToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value)) {
    redirect("/admin/login");
  }
  return <AdminToolsDashboard />;
}
