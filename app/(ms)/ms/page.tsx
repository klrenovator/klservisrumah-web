import type { Metadata } from "next";
import { LocaleScaffold } from "@/components/locale-scaffold";
import { optimizeTitle, optimizeDescription, buildAlternates } from "@/lib/seo-meta";

export const metadata: Metadata = {
  // Route through the shared optimizers so this page obeys the same
  // title/description budgets as the rest of the site.
  title: optimizeTitle("Selamat datang ke KL Servis Rumah"),
  description: optimizeDescription(
    "Laman web kami menyokong penuh Bahasa Malaysia, Bahasa Inggeris dan中文. Gunakan suis bahasa di bahagian atas halaman untuk menukar bahasa — semua halaman, harga dan maklumat servis tersedia dalam tiga bahasa."
  ),
  // These scaffold pages exist only so shared /ms and /zh links resolve; they
  // auto-redirect to "/". They are noindex AND canonical to "/" so they never
  // compete with the homepage in the index. They must also NOT emit hreflang:
  // canonical overrides hreflang, and a self-referencing hreflang pointing at
  // "/" would falsely claim that "/ms" and "/zh" are localised siblings of the
  // homepage (they are redirect stubs, not real locale URLs).
  robots: { index: false, follow: true },
  alternates: buildAlternates("/", true)
};

export default function MalayScaffoldPage() {
  return <LocaleScaffold lang="ms" />;
}
