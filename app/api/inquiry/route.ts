import { NextResponse } from "next/server";
import { getWhatsAppInquiryLink } from "@/lib/whatsapp";
import type { Locale } from "@/lib/i18n";

/**
 * Static-SSR inquiry endpoint (audit P4-07).
 *
 * The site's only lead-capture form was JS-gated (`MultiStepBookingForm`
 * renders no server-side `<input>` and submits via `window.open`). This route
 * turns a plain, JS-free HTML `<form method="get" action="/api/inquiry">`
 * into the same conversion path: it composes the locale-aware WhatsApp
 * message from the submitted fields and 302-redirects to `wa.me`.
 *
 * Why a redirect instead of storing leads: the business is WhatsApp-first
 * (like every direct competitor audited in Part 4), there are no mail/CRM
 * credentials in this project, and a redirect needs zero backend state —
 * the visitor lands in a live chat with their request pre-filled.
 *
 * Defences (mirroring the error-log route): hard field length caps, trim,
 * strict locale allowlist, and no reflection of raw input anywhere except
 * the WhatsApp message body itself.
 */
export const dynamic = "force-dynamic";

const MAX_NAME = 120;
const MAX_MESSAGE = 1200;
const MAX_SERVICE = 200;
const MAX_AREA = 200;

function clean(value: FormDataEntryValue | string | null, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function toLocale(value: string): Locale {
  return value === "ms" || value === "zh" ? value : "en";
}

function buildRedirect(params: {
  lang: string | null;
  service: string | null;
  area: string | null;
  name: string | null;
  message: string | null;
}): NextResponse {
  const wa = getWhatsAppInquiryLink({
    lang: toLocale(clean(params.lang, 8)),
    service: clean(params.service, MAX_SERVICE),
    area: clean(params.area, MAX_AREA),
    name: clean(params.name, MAX_NAME),
    message: clean(params.message, MAX_MESSAGE)
  });
  // 302 so the browser leaves the API URL and lands on WhatsApp; the form
  // action never becomes a bookmarkable destination.
  return NextResponse.redirect(wa, 302);
}

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  return buildRedirect({
    lang: searchParams.get("lang"),
    service: searchParams.get("service"),
    area: searchParams.get("area"),
    name: searchParams.get("name"),
    message: searchParams.get("message")
  });
}

export async function POST(request: Request) {
  const form = await request.formData();
  return buildRedirect({
    lang: form.get("lang")?.toString() ?? null,
    service: form.get("service")?.toString() ?? null,
    area: form.get("area")?.toString() ?? null,
    name: form.get("name")?.toString() ?? null,
    message: form.get("message")?.toString() ?? null
  });
}
