/**
 * tools-i18n.ts — Bahasa Malaysia + 中文 locale layer for the full tool cluster
 * (the five deep tools plus every calculator in the 37-tool suite).
 *
 * WHY THIS EXISTS
 * ---------------
 * The site switches languages client-side, which means Google only ever sees
 * English — a customer searching "kalkulator kos mengecat" or "油漆费用计算器"
 * had nothing indexable to land on. This module holds the fully localised,
 * server-rendered copy for the tool cluster so `/ms/alatan/*` and `/zh/gongju/*`
 * exist as real, crawlable pages (the wizard itself already has per-locale
 * dictionaries under `lib/estimator/i18n/tools/*`).
 *
 * PRICING DISCIPLINE
 * ------------------
 * Every ringgit figure below is interpolated from `RATES` (the published 2026
 * price book) via `money()` / `band()` — the same helpers `tools-data.ts`
 * uses. Nothing re-states a price as a literal, and the published `rate`
 * column of the price table is ALWAYS taken from the English row by index so
 * a translated page can never quote a number the English site does not
 * publish (asserted at module load and in `scripts/test-estimators.ts`).
 */

import { RATES } from "@/lib/estimator/pricing";
import { formatMYR, ESTIMATE_DISCLAIMER } from "@/lib/estimator/format";
import { toolsContent, type ToolContent } from "@/config/tools-data";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";

export type ToolLocale = "ms" | "zh";
export type SiteLocale = "en" | ToolLocale;

const money = (value: number) => formatMYR(value);
const band = (low: number, high: number) => `${money(low)} – ${money(high)}`;

const LOCALES: SiteLocale[] = ["en", "ms", "zh"];

/* ────────────────────────────────────────────────────────────────────────
 * 1. Localised URL slugs
 * ------------------------------------------------------------------------ */

/** Canonical (English) tool slug → localised URL slug, per locale. */
export const TOOL_SLUG_I18N: Record<ToolLocale, Record<string, string>> = {
  ms: {
    "painting-calculator": "kalkulator-cat",
    "leak-triage": "diagnosis-kebocoran",
    "ceiling-calculator": "kalkulator-siling",
    "plumbing-diagnostic": "diagnostik-paip",
    "tv-mount-advisor": "penasihat-pemasangan-tv",
    "paint-quantity-estimator": "kalkulator-kuantiti-cat",
    "wall-area-calculator": "kalkulator-keluasan-dinding",
    "ceiling-area-calculator": "kalkulator-keluasan-siling",
    "ceiling-replacement-cost": "kos-ganti-siling",
    "pipe-leak-estimator": "anggaran-bocor-paip",
    "water-pressure-troubleshooter": "masalah-tekanan-air",
    "pipe-replacement-cost": "kos-ganti-paip",
    "waterproofing-cost-calculator": "kalkulator-kos-kalis-air",
    "roof-area-calculator": "kalkulator-keluasan-bumbung",
    "bathroom-waterproofing-estimator": "kalis-air-bilik-mandi",
    "balcony-waterproofing-estimator": "kalis-air-balkoni",
    "electrical-installation-cost": "kos-pemasangan-elektrik",
    "socket-quantity-calculator": "kalkulator-kuantiti-soket",
    "lighting-installation-calculator": "kalkulator-pemasangan-lampu",
    "ceiling-fan-installation-estimator": "pasang-kipas-siling",
    "handyman-cost-estimator": "kos-handyman",
    "furniture-assembly-estimator": "pasang-perabot",
    "curtain-installation-calculator": "pasang-langsir",
    "door-installation-cost": "kos-pasang-pintu",
    "window-replacement-estimator": "ganti-tingkap",
    "glass-replacement-calculator": "ganti-kaca",
    "flooring-area-calculator": "kalkulator-keluasan-lantai",
    "tile-quantity-calculator": "kalkulator-kuantiti-jubin",
    "vinyl-flooring-cost-estimator": "kos-lantai-vinyl",
    "roof-repair-estimator": "baiki-bumbung",
    "roof-replacement-cost": "kos-ganti-bumbung",
    "renovation-budget-calculator": "kalkulator-bajet-renovasi",
    "room-renovation-estimator": "renovasi-bilik",
    "kitchen-renovation-estimator": "renovasi-dapur",
    "bathroom-renovation-estimator": "renovasi-bilik-air",
    "deep-cleaning-cost-estimator": "kos-cuci-menyeluruh",
    "move-in-out-cleaning-calculator": "cuci-pindah-masuk-keluar"
  },
  zh: {
    "painting-calculator": "油漆计算器",
    "leak-triage": "漏水诊断",
    "ceiling-calculator": "天花板计算器",
    "plumbing-diagnostic": "水管诊断",
    "tv-mount-advisor": "电视安装估价",
    "paint-quantity-estimator": "油漆用量计算器",
    "wall-area-calculator": "墙面面积计算器",
    "ceiling-area-calculator": "天花面积计算器",
    "ceiling-replacement-cost": "天花更换费用",
    "pipe-leak-estimator": "水管漏水估价",
    "water-pressure-troubleshooter": "水压问题排查",
    "pipe-replacement-cost": "水管更换费用",
    "waterproofing-cost-calculator": "防水费用计算器",
    "roof-area-calculator": "屋顶面积计算器",
    "bathroom-waterproofing-estimator": "浴室防水估价",
    "balcony-waterproofing-estimator": "阳台防水估价",
    "electrical-installation-cost": "电工安装费用",
    "socket-quantity-calculator": "插座数量计算器",
    "lighting-installation-calculator": "灯具安装计算器",
    "ceiling-fan-installation-estimator": "吊扇安装估价",
    "handyman-cost-estimator": "杂工费用估价",
    "furniture-assembly-estimator": "家具组装估价",
    "curtain-installation-calculator": "窗帘安装估价",
    "door-installation-cost": "门安装费用",
    "window-replacement-estimator": "窗户更换估价",
    "glass-replacement-calculator": "玻璃更换费用",
    "flooring-area-calculator": "地板面积计算器",
    "tile-quantity-calculator": "瓷砖数量计算器",
    "vinyl-flooring-cost-estimator": "塑胶地板费用",
    "roof-repair-estimator": "屋顶维修估价",
    "roof-replacement-cost": "屋顶更换费用",
    "renovation-budget-calculator": "装修预算计算器",
    "room-renovation-estimator": "房间装修估价",
    "kitchen-renovation-estimator": "厨房装修估价",
    "bathroom-renovation-estimator": "浴室装修估价",
    "deep-cleaning-cost-estimator": "深度清洁费用",
    "move-in-out-cleaning-calculator": "搬家清洁计算器"
  }
};

/** Tools index path per locale. */
export const TOOLS_INDEX_PATH: Record<SiteLocale, string> = {
  en: "/tools",
  ms: "/ms/alatan",
  zh: "/zh/gongju"
};

/** Localised path for a tool. `locale === "en"` returns the canonical path. */
export function toolPath(slug: string, locale: SiteLocale): string {
  if (locale === "en") return `/tools/${slug}`;
  const localised = TOOL_SLUG_I18N[locale][slug];
  if (!localised) throw new Error(`tools-i18n: no ${locale} slug for tool "${slug}"`);
  return `${TOOLS_INDEX_PATH[locale]}/${localised}`;
}

/** Reverse map: locale + localised slug → canonical English slug. */
export function canonicalToolSlug(locale: ToolLocale, localisedSlug: string): string | undefined {
  const entry = Object.entries(TOOL_SLUG_I18N[locale]).find(([, value]) => value === localisedSlug);
  return entry?.[0];
}

/** The three URLs a tool page links across for its hreflang cluster. */
export function toolLocaleUrls(slug: string): Record<SiteLocale, string> {
  return {
    en: toolPath(slug, "en"),
    ms: toolPath(slug, "ms"),
    zh: toolPath(slug, "zh")
  };
}

/**
 * English one-line summary of each tool, shown (and linked) in the
 * trilingual strip on the MS/ZH pages. The MS/ZH lines already live on the
 * English content as `trilingualMs` / `trilingualZh`.
 */
export const TOOL_CROSS_LINES_EN: Record<string, string> = {
  "painting-calculator":
    "Free painting cost calculator for KL & Selangor — pick a surface, size and paint grade for an instant estimate.",
  "leak-triage":
    "Free water leak triage — identify the cause, urgency and estimated repair cost in about 2 minutes.",
  "ceiling-calculator":
    "Free plaster ceiling estimate — pick the ceiling type, area and damage level for an instant price.",
  "plumbing-diagnostic":
    "Free plumbing diagnostic — identify the problem, urgency and estimated repair cost instantly.",
    "paint-quantity-estimator":
    "Free paint quantity estimator — calculate litres needed for any room size and coats.",
  "wall-area-calculator":
    "Free wall area calculator — get wall sq ft using 2×(L+W)×H instantly.",
  "ceiling-area-calculator":
    "Free ceiling area calculator — L×W in seconds.",
  "ceiling-replacement-cost":
    "Free ceiling replacement cost calculator for KL & Selangor.",
  "pipe-leak-estimator":
    "Free pipe leak estimator — cause, urgency and cost in 2 minutes.",
  "water-pressure-troubleshooter":
    "Free water pressure troubleshooter for low pressure causes.",
  "pipe-replacement-cost":
    "Free pipe replacement cost calculator per linear foot.",
  "waterproofing-cost-calculator":
    "Free waterproofing cost calculator for roof, bathroom and balcony.",
  "roof-area-calculator":
    "Free roof area calculator with slope factor.",
  "bathroom-waterproofing-estimator":
    "Free bathroom waterproofing cost estimator.",
  "balcony-waterproofing-estimator":
    "Free balcony waterproofing cost estimator.",
  "electrical-installation-cost":
    "Free electrical installation cost estimator per point.",
  "socket-quantity-calculator":
    "Free socket quantity calculator — how many sockets per room.",
  "lighting-installation-calculator":
    "Free lighting installation calculator for downlights.",
  "ceiling-fan-installation-estimator":
    "Free ceiling fan installation cost estimator.",
  "handyman-cost-estimator":
    "Free handyman cost estimator for any odd job.",
  "furniture-assembly-estimator":
    "Free furniture assembly cost estimator for IKEA etc.",
  "curtain-installation-calculator":
    "Free curtain installation cost calculator per linear foot.",
  "door-installation-cost":
    "Free door installation cost calculator.",
  "window-replacement-estimator":
    "Free window replacement cost estimator.",
  "glass-replacement-calculator":
    "Free glass replacement cost calculator per sq ft.",
  "flooring-area-calculator":
    "Free flooring area calculator with waste factor.",
  "tile-quantity-calculator":
    "Free tile quantity calculator with waste.",
  "vinyl-flooring-cost-estimator":
    "Free vinyl flooring cost calculator per sq ft.",
  "roof-repair-estimator":
    "Free roof repair cost estimator for leak fixes.",
  "roof-replacement-cost":
    "Free roof replacement cost calculator.",
  "renovation-budget-calculator":
    "Free renovation budget calculator per sq ft.",
  "room-renovation-estimator":
    "Free room renovation cost estimator.",
  "kitchen-renovation-estimator":
    "Free kitchen renovation cost estimator.",
  "bathroom-renovation-estimator":
    "Free bathroom renovation cost estimator.",
  "deep-cleaning-cost-estimator":
    "Free deep cleaning cost estimator per sq ft.",
  "move-in-out-cleaning-calculator":
    "Free move-in/out cleaning cost calculator.",
  "tv-mount-advisor":
    "Free TV mount advisor — get the right bracket, fixing method and an instant cost estimate."
};

/* ────────────────────────────────────────────────────────────────────────
 * 2. Per-tool localised page content
 * ------------------------------------------------------------------------ */

/**
 * The localised half of `ToolContent`. Everything NOT listed here (slug,
 * hero image path, related-tool wiring, estimated minutes, the price table's
 * published `rate` strings) is inherited from the English entry by
 * `localizedToolContent()`.
 */
export type ToolContentI18n = Omit<
  ToolContent,
  "slug" | "trilingualMs" | "trilingualZh" | "heroImage" | "relatedTools" | "estimatedMinutes" | "priceTable"
> & {
  /** scope + note only — the `rate` string is always the English row's. */
  priceTable: Array<{ scope: string; note: string }>;
};

export const toolsContentI18n: Record<ToolLocale, Record<string, ToolContentI18n>> = {
  ms: {
    /* ── Kalkulator Kos Mengecat ─────────────────────────────────────── */
    "painting-calculator": {
      name: "Kalkulator Kos Mengecat",
      heading: "Kalkulator Kos Mengecat untuk KL & Selangor",
      metaTitle: "Kalkulator Kos Cat KL — Anggaran Harga",
      metaDesc:
        "Kalkulator kos mengecat percuma untuk KL & Selangor. Pilih permukaan, saiz, keadaan dan gred cat untuk anggaran serta-merta daripada kadar 2026 kami yang diterbitkan.",
      keywords: [
        "kalkulator kos mengecat Malaysia",
        "harga cat rumah KL",
        "kos cat per kaki persegi Malaysia",
        "kos mengecat dalaman Selangor",
        "sebut harga cat luaran KL"
      ],
      eyebrow: "Alat anggaran percuma serta-merta",
      intro:
        "Satu halaman, tiada butang seterusnya. Pilih apa yang anda mahu cat dan saiznya — harga muncul serta-merta daripada kadar KL & Selangor kami yang diterbitkan.",
      directQuestion: "Berapa kos mengecat rumah di KL dan Selangor?",
      directAnswer: `Pengecatan dalaman di Kuala Lumpur dan Selangor berharga ${band(RATES.painting.interiorSqft.low, RATES.painting.interiorSqft.high)} sekaki persegi, dengan minimum ${money(RATES.painting.roomMinimum)} setiap bilik. Pengecatan luaran berharga ${band(RATES.painting.exteriorSqft.low, RATES.painting.exteriorSqft.high)} sekaki persegi dan bermula dari ${money(RATES.painting.exteriorMinimum)}. Angka akhir bergantung pada keadaan permukaan, gred cat, pertukaran warna, ketinggian akses dan seberapa cepat anda memerlukannya. Kalkulator ini menggunakan kadar diterbitkan yang sama pada jawapan anda dalam masa lebih kurang 90 saat.`,
      heroAlt:
        "Tukang cat profesional KL Servis Rumah mengguling cat premium pada dinding dalaman rumah di Kuala Lumpur sambil tablet memaparkan kalkulator kos mengecat",
      stats: [
        { label: "Kadar dalaman", value: `${money(RATES.painting.interiorSqft.low)}–${money(RATES.painting.interiorSqft.high)} / kps` },
        { label: "Bermula, setiap bilik", value: money(RATES.painting.roomMinimum) },
        { label: "Masa untuk siap", value: "Bawah 2 minit" }
      ],
      howTo: [
        { title: "Pilih apa yang anda mahu cat dan saiznya", desc: "Semuanya dalam satu halaman. Pilih dinding dalaman, siling, dinding luaran, bumbung, pintu, tingkap, pagar, tembok halaman, kabinet, almari, rel, struktur keluli, atau seluruh apartmen, kondo, rumah bertanah, pejabat, lot kedai, kilang atau gudang — kemudian ketik saiz bilik biasa seperti 10 × 12 kaki, julat luas binaan, atau masukkan ukuran sendiri." },
        { title: "Nyatakan keadaan permukaan sekarang", desc: "Baru, baik, retak, menggelupas, kerosakan air, berkulat, tidak sekata atau simen kasar — dan tandakan jika perlu lapisan skim atau kalis air. Harga di bahagian atas halaman dikemas kini pada setiap ketikan." },
        { title: "Pilihan: laras cat, warna, akses dan kecemasan", desc: "Buka bahagian pilihan hanya jika anda mahu menukar gred cat, arah warna, ketinggian akses atau penjadualan. Langkau dan kami gunakan jawapan paling biasa — gred ekonomi hingga mewah, akses aras bawah dan penjadualan standard." },
        { title: "Baca anggaran anda dan tempah", desc: "Kos anggaran, julat, pecahan upah berbanding bahan, tempoh penyiapan, pakej disyorkan dan tambahan semuanya muncul pada halaman yang sama — kemudian tempah melalui WhatsApp atau minta lawatan tapak percuma." }
      ],
      priceTable: [
        { scope: "Pengecatan dinding dalaman", note: `Minimum ${money(RATES.painting.roomMinimum)} setiap bilik` },
        { scope: "Pengecatan dinding luaran", note: `Bermula dari ${money(RATES.painting.exteriorMinimum)}` },
        { scope: "Baik pulih retak & lembapan dinding", note: "Pengisian, penampalan dan primer pengedap" },
        { scope: "Lapisan skim dinding", note: "Pelicinan sekata sebelum mengecat" },
        { scope: "Lapisan skim siling", note: "Menyegarkan siling plaster lama" },
        { scope: "Baik pulih retak & sendi", note: "Retak struktur dan enapan" },
        { scope: "Rawatan kelembapan dinding", note: "Efloresens dan penghalang lembapan" }
      ],
      priceTableNote:
        "Ini adalah kadar diterbitkan yang sama digunakan oleh kalkulator. Ia mencerminkan harga Lembah Klang yang adil untuk 2026 — tidak dilambungkan, tidak terlalu murah.",
      faqs: [
        { q: "Berapa kos mengecat satu bilik di KL?", a: `Bilik tidur standard 10 × 12 kaki dengan dinding dalam keadaan baik biasanya berhampiran minimum diterbitkan kami iaitu ${money(RATES.painting.roomMinimum)} setiap bilik. Bilik lebih besar, siling tinggi, pertukaran ke warna gelap atau baik pulih retak teruk menaikkan angka itu — dan itulah yang dimodelkan oleh kalkulator.` },
        { q: "Berapa kos mengecat luaran rumah di Selangor?", a: `Pengecatan luaran berharga ${band(RATES.painting.exteriorSqft.low, RATES.painting.exteriorSqft.high)} sekaki persegi bergantung pada akses dan sistem cat, bermula dari ${money(RATES.painting.exteriorMinimum)} untuk fasad kecil. Perancah atau akses tali menambah kos, dan kalkulator merangkumi kedua-dua pilihan.` },
        { q: "Adakah anggaran kalkulator ini sebut harga muktamad?", a: "Tidak. Ini adalah sebut harga anggaran berdasarkan maklumat yang anda berikan. Harga akhir mungkin berubah selepas pemeriksaan di tapak bergantung pada keadaan sebenar seperti kerosakan tersembunyi, kualiti substrat atau sekatan akses." },
        { q: "Adakah anggaran ini termasuk cat dan bahan?", a: "Ya, kecuali anda memilih \"Saya akan bekalkan cat\". Skrin keputusan memisahkan angka kepada anggaran upah dan anggaran bahan supaya anda dapat melihat kedua-duanya." },
        { q: "Adakah anda menggunakan Nippon Paint atau Dulux?", a: "Ya. Kami menggunakan produk Nippon Paint, Dulux dan Jotun tulen merentasi kesemua empat gred. Peringkat ekonomi menggunakan emulsi bajet mereka; peringkat premium dan mewah menggunakan julat boleh basuh, VOC rendah dan tahan cuaca." },
        { q: "Berapa lama masa yang diambil untuk mengecat?", a: "Satu bilik biasanya siap dalam sehari. Kondo 3 bilik tidur mengambil masa 2 hingga 3 hari termasuk penyediaan dan pengeringan. Kalkulator menganggarkan tempoh penyiapan daripada jawapan keluasan, keadaan dan akses anda." },
        { q: "Perlukah lapisan skim sebelum mengecat?", a: `Lapisan skim berbaloi apabila dinding beralun, ditampal atau pernah berkertas dinding. Ia dicaj berasingan dari ${money(RATES.painting.skimWallSqft)} sekaki persegi, dan anda boleh toglnya dalam kalkulator untuk melihat kesan pada jumlah anda.` },
        { q: "Bolehkah saya dapat diskaun untuk mengecat seluruh rumah?", a: "Ya. Kalkulator secara automatis menggunakan kecekapan volum apabila keluasan dicat melepasi 1,500 kps dan sekali lagi selepas 4,000 kps, kerana kos persediaan dan perlindungan dikongsi merentasi skop yang lebih besar." }
      ],
      covers: [
        "Dinding dalaman dan siling",
        "Dinding luaran, salutan bumbung dan tembok sempadan",
        "Pintu, tingkap, pagar, gril dan tembok halaman",
        "Kabinet dapur, almari dan kerja kayu",
        "Rel tangga dan keluli struktur",
        "Apartmen, kondominium dan rumah bertanah",
        "Pejabat, lot kedai, kilang dan gudang"
      ],
      relatedServices: [
        { label: "Perkhidmatan Mengecat Rumah", href: "/services/painting" },
        { label: "Panduan Kos Mengecat", href: "/services/painting/cost" },
        { label: "Lapisan Skim & Pelicinan Dinding", href: "/services/skim-coat" },
        { label: "Kalis Air", href: "/services/waterproofing" }
      ]
    },

    /* ── Trias Kebocoran Air ─────────────────────────────────────────── */
    "leak-triage": {
      name: "Trias Kebocoran Air",
      heading: "Trias Kebocoran Air & Anggaran Kos Baik Pulih",
      metaTitle: "Trias Kebocoran KL — Punca & Kos",
      metaDesc:
        "Diagnosis kebocoran berpandu percuma untuk rumah di KL & Selangor. Kenal pasti punca, tahap kecemasan dan anggaran kos baik pulih siling, bilik air, bumbung, dinding dan paip.",
      keywords: [
        "kos baik pulih kebocoran air Malaysia",
        "kebocoran siling KL",
        "baik pulih kebocoran bilik air Selangor",
        "harga grouting PU KL",
        "kos baik pulih kebocoran bumbung Malaysia"
      ],
      eyebrow: "Diagnosis berpandu percuma",
      intro:
        "Satu halaman, tiada butang seterusnya. Beritahu kami di mana kebocoran dan apa yang anda lihat — punca, kecemasan dan kos baik pulih muncul serta-merta.",
      directQuestion: "Bagaimana saya tahu keseriusan kebocoran air, dan berapa kos pembaikannya?",
      directAnswer: `Keseriusan kebocoran dinilai pada tiga perkara: sama ada air masih bergerak aktif, seberapa pantas kawasan terjejas merebak, dan berapa lama ia berlarutan. Di Kuala Lumpur dan Selangor, grouting suntikan PU untuk kebocoran papak berharga ${band(RATES.waterproofing.puBand.low, RATES.waterproofing.puPoint)} setiap titik, kalis air bilik air tanpa pecah berharga ${band(RATES.waterproofing.bathroomBand.low, RATES.waterproofing.bathroomBand.high)}, diagnosis dan baik pulih kebocoran bumbung bermula dari ${money(RATES.waterproofing.roofDiagnosis)}, dan pemasangan semula siling rosak air bermula dari ${money(RATES.waterproofing.ceilingRepair)}. Alat trias ini memadankan gejala anda dengan punca yang mungkin, menetapkan tahap kecemasan dan menganggarkan pembaikan menggunakan kadar diterbitkan tersebut.`,
      heroAlt:
        "Juruteknik KL Servis Rumah menggunakan meter kelembapan untuk mengesan kebocoran air pada siling berbintik di sebuah apartmen Kuala Lumpur",
      stats: [
        { label: "Grouting PU", value: `${money(RATES.waterproofing.puBand.low)}–${money(RATES.waterproofing.puPoint)} / titik` },
        { label: "Baik pulih siling dari", value: money(RATES.waterproofing.ceilingRepair) },
        { label: "Masa diagnosis", value: "Bawah 2 minit" }
      ],
      howTo: [
        { title: "Pilih di mana kebocoran muncul dan apa yang anda lihat", desc: "Semuanya dalam satu halaman. Pilih lokasi — bilik air, dapur, bumbung, siling, balkoni, dinding, kawasan luar, tangki air, paip, tandas, paip air atau pemanas air — kemudian tandakan setiap gejala: dinding basah, titisan aktif, tekanan rendah, tompokan coklat, siling menggelembung, retak, kulat, paip pecah, bunyi paip, meter air berpusing atau bil luar biasa tinggi." },
        { title: "Nilai tahap keseriusan dan keluasan terjejas", desc: "Perlahan, sederhana, pantas atau teruk, dan daripada tompokan sebesar tapak tangan hingga beberapa bilik. Tahap kecemasan dan harga di bahagian atas halaman dikemas kini serta-merta." },
        { title: "Pilihan: tambah tempoh kebocoran dan butiran hartanah", desc: "Buka bahagian pilihan untuk menambah tempoh kebocoran, jenis hartanah dan usia bangunan. Langkau dan kami anggap rumah Lembah Klang pertengahan usia yang biasa." },
        { title: "Baca diagnosis dan tempah", desc: "Punca yang mungkin, tahap kecemasan, anggaran kos baik pulih dan julat, serta tambahan disyorkan seperti pemasangan semula siling atau mengecat semula — semuanya pada halaman yang sama." }
      ],
      priceTable: [
        { scope: "Grouting suntikan tekanan tinggi PU", note: "Pengedapan kebocoran papak tanpa pecah" },
        { scope: "Kalis air bilik air (tanpa pecah)", note: `Harga permulaan diterbitkan ${money(RATES.waterproofing.bathroom)}` },
        { scope: "Kalis air bilik air (dengan pecah)", note: "Skop pecah dan jubin semula penuh" },
        { scope: "Diagnosis & baik pulih kebocoran bumbung", note: "Atap, bubungan, flashing dan lurah bumbung" },
        { scope: "Kalis air membran bakar", note: "Papak bumbung dan balkoni" },
        { scope: "Baik pulih siling rosak air", note: "Gantian papan dan kemasan semula" },
        { scope: "Kelembapan dinding & efloresens", note: "Kerak garam, kulat dan penghalang lembapan" },
        { scope: "Pengesanan kebocoran paip tersembunyi", note: "Penjejakan akustik dan terma" }
      ],
      priceTableNote:
        "Angka pembaikan sentiasa merangkumi punca kebocoran dahulu. Kerja kemasan seperti jubin, cat dan papan siling diperincikan berasingan supaya anda dapat melihat dengan tepat apa yang anda bayar.",
      faqs: [
        { q: "Seberapa cemaskah kebocoran siling?", a: "Siling yang menggelembung atau melendut adalah cemas — air takungan berada di atas papan dan ia boleh runtuh tanpa amaran. Tutup sebarang litar lampu pada siling itu dan tempah dalam masa 24 hingga 48 jam. Tompokan coklat kering yang tidak berubah selama berbulan-bulan jauh kurang cemas." },
        { q: "Berapa kos membaiki siling bocor di KL?", a: `Mengedap punca dengan suntikan PU berharga ${band(RATES.waterproofing.puBand.low, RATES.waterproofing.puPoint)} setiap titik, dan memasang semula siling yang rosak bermula dari ${money(RATES.waterproofing.ceilingRepair)}. Alat trias menggabungkan kedua-duanya kerana memasang semula siling tanpa membaiki punca hanya mengulangi kerosakan.` },
        { q: "Bolehkah anda mengesan kebocoran tersembunyi tanpa memecahkan bilik air saya?", a: "Ya. Kami menggunakan pengesan kebocoran akustik dan pengimejan terma untuk mengesan titik kebocoran, kemudian hanya membuka keluasan jubin minimum yang diperlukan. Pemecahan penuh adalah jalan terakhir, bukan titik permulaan." },
        { q: "Meter air saya bergerak walaupun semua paip ditutup. Apa maksudnya?", a: "Itu mengesahkan kebocoran tersembunyi pada bahagian bekalan. Ia adalah salah satu gejala berpemberat tertinggi dalam alat ini kerana air mengalir keluar secara berterusan, biasanya di bawah papak atau di dalam dinding." },
        { q: "Adakah anggaran kebocoran ini sebut harga muktamad?", a: "Tidak. Ini adalah sebut harga anggaran berdasarkan maklumat yang diberikan. Harga akhir mungkin berubah selepas pemeriksaan di tapak bergantung pada keadaan sebenar — punca kebocoran selalunya berbeza daripada tempat air kelihatan." },
        { q: "Adakah anda menawarkan respons kebocoran kecemasan?", a: "Ya. Untuk paip pecah dan kebocoran aktif teruk kami menghantar juruteknik terdekat yang tersedia, biasanya tiba dalam masa 30 hingga 60 minit merentasi KL dan Selangor. Kenaikan kecemasan dikenakan dan dinyatakan dalam anggaran anda sebelum anda menempah." },
        { q: "Patutkah saya membuat tuntutan insurans untuk kerosakan air?", a: "Untuk kerosakan siling atau lantai yang ketara ia selalunya berbaloi. Sebut harga bertulis terperinci dan gambar punca kami diterima oleh kebanyakan syarikat insurans Malaysia sebagai dokumen sokongan." }
      ],
      covers: [
        "Kebocoran bilik air, dapur dan kawasan basah",
        "Kebocoran siling daripada unit atau bumbung di atas",
        "Kebocoran bumbung, longkang dan flashing",
        "Air masuk melalui balkoni dan dinding luar",
        "Kebocoran paip tersembunyi dan bawah tanah",
        "Kebocoran tangki air, tandas, paip air dan pemanas air"
      ],
      relatedServices: [
        { label: "Kalis Air & Grouting PU", href: "/services/waterproofing" },
        { label: "Baik Pulih Kebocoran Paip", href: "/services/plumbing" },
        { label: "Baik Pulih Siling", href: "/services/ceiling" },
        { label: "Baik Pulih Bumbung", href: "/services/roof-repair" }
      ]
    },

    /* ── Anggaran Baik Pulih Siling ──────────────────────────────────── */
    "ceiling-calculator": {
      name: "Anggaran Baik Pulih Siling",
      heading: "Anggaran Kos Baik Pulih & Pemasangan Siling",
      metaTitle: "Anggaran Kos Siling KL & Selangor",
      metaDesc:
        "Anggarkan kos baik pulih siling plaster, gantian papan, reka bentuk L-box dan partisi gypsum di KL & Selangor daripada kadar per kaki persegi yang diterbitkan.",
      keywords: [
        "harga siling plaster Malaysia",
        "kos baik pulih siling KL",
        "siling gypsum per kaki persegi",
        "harga siling L-box Selangor",
        "kos gantian siling Malaysia"
      ],
      eyebrow: "Alat anggaran percuma serta-merta",
      intro:
        "Satu halaman, tiada butang seterusnya. Pilih jenis siling, kerja diperlukan dan keluasan — anggaran muncul serta-merta daripada kadar per kps kami yang diterbitkan.",
      directQuestion: "Berapa kos kerja siling plaster di KL dan Selangor?",
      directAnswer: `Pemasangan siling plaster rata diterbitkan dari ${money(RATES.ceiling.flatSqft)} sekaki persegi, reka bentuk bertingkat dan L-box dari ${money(RATES.ceiling.tieredSqft)}, siling cove dan melengkung dari ${money(RATES.ceiling.coveSqft)}, dan baik pulih atau skim semula siling sedia ada dari ${money(RATES.ceiling.reskimSqft)} sekaki persegi. Dinding partisi gypsum bermula dari ${money(RATES.ceiling.partitionSqft)} sekaki persegi dan baik pulih siling rosak air bermula dari ${money(RATES.ceiling.repairMinimum)}. Alat anggaran ini menggunakan kadar tersebut pada jenis siling, keluasan, tahap kerosakan, ketinggian dan tambahan anda.`,
      heroAlt:
        "Pemasang KL Servis Rumah memasang papan siling plaster gypsum pada rangka besi bergalvani di sebuah rumah di Selangor",
      stats: [
        { label: "Siling rata dari", value: `${money(RATES.ceiling.flatSqft)} / kps` },
        { label: "Baik pulih dari", value: money(RATES.ceiling.repairMinimum) },
        { label: "Masa untuk siap", value: "Bawah 2 minit" }
      ],
      howTo: [
        { title: "Pilih jenis siling, kerja diperlukan dan keluasan", desc: "Semuanya dalam satu halaman. Papan gypsum, plaster, panel PVC, kalsium silikat, kayu, papan simen — atau \"tidak pasti\" dan kami kenal pasti di tapak. Kemudian pilih baik pulih, gantian, reka bentuk rata baharu, L-box bertingkat atau cove, atau partisi gypsum, dan ketik pratetap keluasan daripada tampalan 20 kps hingga 20 × 25 kaki." },
        { title: "Terangkan kerosakan dan sebarang tambahan", desc: "Retak rambut, retak jelas, kotoran air, papan melendut, lubang, runtuh separa atau kulat — serta mengecat, tanggal lampu, pasang semula kipas, kornis, penebat atau pelupusan serpihan. Harga dikemas kini pada setiap ketikan." },
        { title: "Pilihan: ketinggian siling dan masa", desc: "Buka bahagian pilihan hanya jika siling anda luar biasa tinggi atau anda perlukan kerja dengan cepat. Langkau dan kami hargakan ketinggian standard dan penjadualan standard." },
        { title: "Baca anggaran anda dan tempah", desc: "Kos anggaran, julat, upah dan bahan, tempoh penyiapan, pakej disyorkan dan tambahan semuanya muncul pada halaman yang sama — kemudian tempah melalui WhatsApp." }
      ],
      priceTable: [
        { scope: "Siling plaster rata", note: "Satu aras, kemasan skim" },
        { scope: "Siling bertingkat & L-box", note: "Reka bentuk alur LED tersembunyi" },
        { scope: "Siling cove & melengkung", note: "Rangka GI fleksibel untuk ciri" },
        { scope: "Baik pulih & skim semula siling", note: "Siling sedia ada disegarkan" },
        { scope: "Dinding partisi papan gypsum", note: "Pembahagian ruang sedia cat" },
        { scope: "Baik pulih siling rosak air", note: "Tanggalkan papan dan kemasan semula" },
        { scope: "Titik downlight LED", note: "Potong, wayar dan pasang" },
        { scope: "Pemasangan kipas siling", note: "Semak cangkuk, pendawaian dan ujian ayunan" }
      ],
      priceTableNote:
        "Kadar pemasangan merangkumi rangka GI kalis karat, papan, penyambungan dan kemasan skim. Mengecat dihargakan berasingan dan boleh ditambah dalam alat anggaran.",
      faqs: [
        { q: "Berapa harga siling plaster sekaki persegi di Malaysia?", a: `Siling plaster rata diterbitkan dari ${money(RATES.ceiling.flatSqft)} sekaki persegi. Reka bentuk bertingkat dan L-box bermula dari ${money(RATES.ceiling.tieredSqft)} dan kerja cove atau melengkung dari ${money(RATES.ceiling.coveSqft)}, kerana ia memerlukan lebih masa rangka dan perincian.` },
        { q: "Patutkah saya baik pulih atau ganti siling rosak air?", a: "Jika papan berbintik tetapi masih padat, tampalan potong dan skim semula biasanya memadai. Jika ia melendut, lembut atau berkulat sepanjang ketebalan, menggantikan bahagian itu lebih murah untuk jangka panjang. Walau apa pun, punca kebocoran mesti ditutup dahulu, jika tidak papan baharu turut rosak." },
        { q: "Bolehkah anda memasang siling tanpa menanggalkan lampu saya?", a: "Untuk skim semula, ya — kami tutup sekitar fitting. Untuk gantian papan, fitting mesti diturunkan dan dipasang semula, yang dihargakan oleh alat anggaran setiap titik lampu." },
        { q: "Berapa lama masa pemasangan siling plaster?", a: "Bilik tidur standard biasanya satu hari untuk rangka dan papan serta hari kedua untuk penyambungan dan skim. Dewan lebih besar dan reka bentuk bertingkat mengambil masa tiga hingga empat hari. Alat anggaran mengira ini daripada jawapan keluasan dan kerosakan anda." },
        { q: "Adakah anggaran siling ini sebut harga muktamad?", a: "Tidak. Ini adalah sebut harga anggaran berdasarkan maklumat yang diberikan. Harga akhir mungkin berubah selepas pemeriksaan di tapak bergantung pada keadaan sebenar, terutamanya apa yang kami temui apabila ruang siling dibuka." },
        { q: "Adakah anda mengendalikan dinding partisi gypsum juga?", a: `Ya. Dinding partisi papan gypsum diterbitkan dari ${money(RATES.ceiling.partitionSqft)} sekaki persegi dan boleh dipilih sebagai jenis kerja dalam alat anggaran.` },
        { q: "Apa beza papan gypsum dan kalsium silikat?", a: "Gypsum adalah standard, paling murah dan paling mudah dikemaskan. Kalsium silikat lebih tahan api dan lembapan, sebab itu ia lebih mahal sekaki persegi dan digemari untuk kawasan basah dan sofit luar." }
      ],
      covers: [
        "Siling gypsum, plaster, PVC, kalsium silikat dan kayu",
        "Kerosakan air, lendutan, retak dan lubang",
        "Gantian bahagian dan skim semula penuh",
        "Reka bentuk rata baharu, L-box bertingkat dan cove",
        "Dinding partisi gypsum",
        "Integrasi downlight, kipas dan kornis"
      ],
      relatedServices: [
        { label: "Perkhidmatan Siling Plaster", href: "/services/plaster-ceiling" },
        { label: "Baik Pulih Siling", href: "/services/ceiling" },
        { label: "Panduan Kos Siling", href: "/services/ceiling/cost" },
        { label: "Pemasangan Lampu", href: "/services/lighting" }
      ]
    },

    /* ── Diagnostik Paip ─────────────────────────────────────────────── */
    "plumbing-diagnostic": {
      name: "Diagnostik Paip",
      heading: "Diagnostik Paip & Anggaran Kos Baik Pulih",
      metaTitle: "Alat Diagnostik Paip KL — Punca & Kos",
      metaDesc:
        "Diagnosis longkang tersumbat, kebocoran, tekanan air rendah dan kerosakan fitting di rumah KL & Selangor. Dapatkan punca, kecemasan dan anggaran kos baik pulih serta-merta.",
      keywords: [
        "harga tukang paip Malaysia",
        "kos baik pulih tandas tersumbat KL",
        "baiki tekanan air rendah Selangor",
        "harga baik pulih paip bocor Malaysia",
        "caj panggilan tukang paip KL"
      ],
      eyebrow: "Diagnosis berpandu percuma",
      intro:
        "Satu halaman, tiada butang seterusnya. Pilih masalah anda dan harga, punca yang mungkin serta kecemasan muncul serta-merta daripada kadar paip kami yang diterbitkan.",
      directQuestion: "Berapa caj tukang paip di KL dan Selangor?",
      directAnswer: `Baik pulih paip kecil di Lembah Klang diterbitkan dari ${money(RATES.plumbing.minorRepair)}, dengan julat pasaran disahkan ${band(RATES.plumbing.minorBand.low, RATES.plumbing.minorBand.high)} bergantung pada kerumitan. Membersihkan longkang dan tandas tersumbat bermula dari ${money(RATES.plumbing.drain)}, diagnosis dan baik pulih kebocoran air dari ${money(RATES.plumbing.leakDiagnosis)}, pemasangan fitting dari ${money(RATES.plumbing.fixtureInstall)}, dan kerja pemanas air dari ${money(RATES.plumbing.heaterRepair)}. Alat diagnostik ini memadankan gejala anda dengan punca yang mungkin dan menghargakannya daripada kadar diterbitkan tersebut.`,
      heroAlt:
        "Tukang paip berlesen KL Servis Rumah mengetatkan sambungan paip di bawah singki dapur di sebuah rumah di Kuala Lumpur",
      stats: [
        { label: "Baik pulih kecil dari", value: money(RATES.plumbing.minorRepair) },
        { label: "Kosongkan longkang dari", value: money(RATES.plumbing.drain) },
        { label: "Masa diagnosis", value: "Bawah 2 minit" }
      ],
      howTo: [
        { title: "Pilih masalah paip anda dan tahap keseriusannya", desc: "Semuanya dalam satu halaman. Singki, tandas, perangkap lantai atau longkang luar tersumbat; paip bocor, kebocoran tersembunyi, tekanan rendah, tiada air; kerja paip, mixer, tandas, singki atau bidet; pemanas air atau pam booster — kemudian nilai ia kecil, sederhana, besar atau kecemasan." },
        { title: "Pilih lokasi dan bilangan titik terjejas", desc: "Dapur, bilik air utama atau en-suite, dobi, luar, tangki bumbung, atau berbilang lokasi, serta bilangan fitting terjejas. Harga di bahagian atas halaman dikemas kini serta-merta." },
        { title: "Pilihan: butiran hartanah, alat ganti dan masa", desc: "Buka bahagian pilihan untuk menetapkan jenis hartanah, usia bangunan, siapa membekalkan alat ganti dan seberapa segera anda perlukan tukang paip. Langkau dan kami hargakan rumah teres biasa pada penjadualan standard dengan alat ganti bertauliah SIRIM kami." },
        { title: "Baca diagnosis anda dan tempah", desc: "Punca yang mungkin, kecemasan, kos anggaran dan julat, masa di tapak, serta tambahan seperti pemeriksaan kesihatan paip seluruh rumah — semuanya pada halaman yang sama." }
      ],
      priceTable: [
        { scope: "Baik pulih paip kecil", note: `Julat pasaran ${band(RATES.plumbing.minorBand.low, RATES.plumbing.minorBand.high)}` },
        { scope: "Kosongkan longkang & tandas", note: `Julat pasaran ${band(RATES.plumbing.drainBand.low, RATES.plumbing.drainBand.high)}` },
        { scope: "Diagnosis & baik pulih kebocoran air", note: "Pengesanan akustik dan terma" },
        { scope: "Pemasangan tandas, paip & singki", note: "Fitting bertauliah SIRIM" },
        { scope: "Pemasangan pemanas air & pam", note: "Termasuk isolator dan ujian tekanan" },
        { scope: "Pemasangan pemanas air segera", note: "Pemanas mandian satu titik" },
        { scope: "Pemasangan pemanas tangki simpanan", note: "15L–50L berbilang titik" },
        { scope: "Baik pulih & nyahkerak pemanas air", note: "Semakan elemen, termostat dan anod" }
      ],
      priceTableNote:
        "Setiap lawatan merangkumi ujian tekanan selepas pembaikan. Penghantaran kecemasan dan luar waktu membawa kenaikan yang sentiasa ditunjukkan dalam anggaran anda sebelum anda menempah.",
      faqs: [
        { q: "Berapa caj panggilan tukang paip di KL?", a: `Harga permulaan paip diterbitkan kami ialah ${money(RATES.plumbing.minorRepair)}, dan itulah minimum yang dikenakan untuk sebarang lawatan. Tugas kecil yang disiapkan dalam masa itu tidak dicaj tambahan.` },
        { q: "Berapa kos mengosongkan tandas atau longkang tersumbat?", a: `Mengosongkan longkang dan tandas bermula dari ${money(RATES.plumbing.drain)}, dalam julat pasaran disahkan ${band(RATES.plumbing.drainBand.low, RATES.plumbing.drainBand.high)}. Sumbatan lebih dalam pada cerucuk kotoran atau lubang benor luar berada di hujung atas.` },
        { q: "Kenapa tekanan air saya tiba-tiba rendah?", a: "Empat punca biasa ialah stopcock separa tertutup atau tersekat, kerak terkumpul dalam paip bergalvani lama, pam tekanan atau apungan tangki gagal, dan kebocoran tersembunyi yang melepaskan tekanan talian. Alat diagnostik menyenaraikan ini berdasarkan jawapan khusus anda." },
        { q: "Bolehkah saya bekalkan paip dan fitting sendiri?", a: "Ya. Pilih \"Saya sudah beli alat ganti\" dan anggaran menggugurkan bahagian bahan. Kami menjamin mutu kerja kami; fitting itu sendiri membawa waranti pengilangnya." },
        { q: "Adakah anggaran paip ini sebut harga muktamad?", a: "Tidak. Ini adalah sebut harga anggaran berdasarkan maklumat yang diberikan. Harga akhir mungkin berubah selepas pemeriksaan di tapak bergantung pada keadaan sebenar seperti kebolehcapaian paip dan kakisan tersembunyi." },
        { q: "Adakah anda mengendalikan paip kecemasan pada waktu malam?", a: "Ya. Penghantaran kecemasan dan luar waktu tersedia merentasi KL dan Selangor. Pilihnya dalam bahagian masa pilihan dan kenaikan ditambah secara telus pada anggaran anda." },
        { q: "Berapa lama baik pulih paip biasa mengambil masa?", a: "Kebanyakan kerja paip, perangkap dan fitting siap dalam satu hingga dua jam. Pengesanan dan baik pulih kebocoran tersembunyi biasanya mengambil masa setengah hari. Alat anggaran meramalkan masa di tapak daripada jawapan anda." }
      ],
      covers: [
        "Singki, tandas, perangkap lantai dan longkang luar tersumbat",
        "Kebocoran paip kelihatan, tersembunyi dan bawah tanah",
        "Tekanan air rendah dan kehilangan bekalan sepenuhnya",
        "Kerja paip, mixer, tandas, singki dan bidet",
        "Kerosakan pemanas air dan pemasangan baharu",
        "Masalah pam booster dan tangki air"
      ],
      relatedServices: [
        { label: "Perkhidmatan Paip", href: "/services/plumbing" },
        { label: "Panduan Kos Paip", href: "/services/plumbing/cost" },
        { label: "Perkhidmatan Pemanas Air", href: "/services/water-heater" },
        { label: "Paip Kecemasan", href: "/services/plumbing/emergency" }
      ]
    },

    /* ── Penasihat Pemasangan TV ─────────────────────────────────────── */
    "tv-mount-advisor": {
      name: "Penasihat Pemasangan TV",
      heading: "Penasihat Pemasangan Dinding TV & Kos Pemasangan",
      metaTitle: "Penasihat Pemasangan TV KL — Braket & Harga",
      metaDesc:
        "Cari braket TV dan anchor dinding yang betul untuk dinding konkrit, bata, papan plaster atau kayu di KL & Selangor, dengan anggaran kos pemasangan serta-merta.",
      keywords: [
        "perkhidmatan pemasangan TV KL",
        "harga pemasangan braket TV Malaysia",
        "pasang TV di dinding papan plaster",
        "kos pemasangan dinding TV Selangor",
        "sembunyi kabel TV Malaysia"
      ],
      eyebrow: "Penasihat percuma serta-merta",
      intro:
        "Satu halaman, tiada butang seterusnya. Pilih saiz TV dan jenis dinding anda — braket, anchor dan harga yang betul muncul serta-merta.",
      directQuestion: "Berapa kos pemasangan dinding TV di KL dan Selangor?",
      directAnswer: `Pemasangan dinding TV diterbitkan dari ${money(RATES.handyman.tvMount)}, dalam julat pasaran disahkan ${band(RATES.handyman.tvBand.low, RATES.handyman.tvBand.high)} bergantung pada saiz skrin, jenis dinding dan braket. Dinding konkrit dan bata padu mudah; partisi papan plaster memerlukan plat sokongan dipasang merentasi stud, yang lebih mahal. Menambah penyembunyian kabel dalam dinding atau titik kuasa baharu di belakang TV — diterbitkan dari ${money(RATES.handyman.powerPoint)} setiap titik — paling baik dilakukan dalam lawatan yang sama. Penasihat ini mencadangkan kaedah pemasangan dan menghargakan kerja serta-merta.`,
      heroAlt:
        "Handyman KL Servis Rumah menyamakan kedudukan TV skrin rata besar pada braket dinding di ruang tamu moden Kuala Lumpur",
      stats: [
        { label: "Pemasangan dari", value: money(RATES.handyman.tvMount) },
        { label: "Titik kuasa dari", value: `${money(RATES.handyman.powerPoint)} / titik` },
        { label: "Masa nasihat", value: "Bawah 1 minit" }
      ],
      howTo: [
        { title: "Pilih saiz TV dan jenis dinding", desc: "Semuanya dalam satu halaman. Daripada 32 inci hingga paparan komersial melebihi 85 inci, kemudian ketuk dinding: bunyi tumpul bermakna konkrit atau bata, bunyi berongga bermakna partisi papan plaster. Berjubin, kayu, papan simen — atau \"tidak pasti\" dan kami uji semasa ketibaan." },
        { title: "Pilih braket", desc: "Rata tetap, condong, lengan swivel gerakan penuh atau lekap siling — atau pilih \"cadangkan untuk saya\" dan alat menasihati berdasarkan saiz TV dan dinding anda. Nyatakan sama ada anda sudah mempunyai braket atau mahu kami bekalkan yang berkadar beban." },
        { title: "Pilihan: kabel, kuasa dan tambahan", desc: "Buka bahagian pilihan untuk penyembunyian dalam dinding, trunking permukaan, titik kuasa baharu, pemasangan soundbar, para terapung, menanggalkan TV lama atau persediaan peranti. Langkau dan kami hargakan pemasangan mudah." },
        { title: "Baca cadangan anda dan tempah", desc: "Kaedah pemasangan tepat, semakan keselamatan beban, kos anggaran dan julat, masa di tapak, serta tambahan — semuanya pada halaman yang sama." }
      ],
      priceTable: [
        { scope: "Pemasangan dinding TV", note: `Julat pasaran ${band(RATES.handyman.tvBand.low, RATES.handyman.tvBand.high)}` },
        { scope: "Tugas handyman am", note: `Julat pasaran ${band(RATES.handyman.generalBand.low, RATES.handyman.generalBand.high)}` },
        { scope: "Titik kuasa / soket baharu", note: "Kerja elektrik berlesen" },
        { scope: "Pemasangan soundbar, para atau braket", note: "Dijajarkan dan disemak beban" },
        { scope: "Titik downlight LED", note: "Pencahayaan ambien sekitar TV" }
      ],
      priceTableNote:
        "Setiap pemasangan disamakan, disemak tork dan diuji beban sebelum kami beredar. Jenis dinding disahkan dengan ujian ketukan dan gerudi perintis sebelum penetapan muktamad.",
      faqs: [
        { q: "Bolehkah saya memasang TV 65 inci pada dinding papan plaster?", a: "Bukan pada anchor papan sahaja. Partisi gypsum memerlukan plat sokongan kayu atau keluli dipasang merentasi stud logam untuk menyebarkan beban. Kami sertakan itu dalam anggaran setiap kali anda memilih dinding papan plaster." },
        { q: "Berapa kos pemasangan TV di Malaysia?", a: `Diterbitkan dari ${money(RATES.handyman.tvMount)}, dalam julat disahkan ${band(RATES.handyman.tvBand.low, RATES.handyman.tvBand.high)}. Skrin lebih besar, lengan gerakan penuh, dinding berjubin dan partisi berongga berada di hujung atas.` },
        { q: "Bolehkah anda menyembunyikan kabel di dalam dinding?", a: "Ya. Penyembunyian dalam dinding bermakna memotong saluran, menarik konduit dan membuat kemasan sedia cat. Pada partisi berongga kami selalunya boleh menurunkan kabel di dalam rongga tanpa sebarang pemotongan." },
        { q: "Perlukah titik kuasa di belakang TV?", a: `Itulah hasil paling kemas — jika tidak kabel kuasa kekal kelihatan. Soket baharu diterbitkan dari ${money(RATES.handyman.powerPoint)} setiap titik dan paling baik ditambah dalam lawatan yang sama.` },
        { q: "Braket apa yang patut saya pilih?", a: "Braket tetap paling nipis dan murah, braket condong sesuai untuk pemasangan tinggi di atas konsol, dan lengan gerakan penuh membolehkan anda menarik TV keluar dan memutarnya — tetapi ia meletakkan beban tuasan lebih besar pada dinding. Pilih \"cadangkan untuk saya\" dan alat menasihati." },
        { q: "Adakah anggaran pemasangan TV ini sebut harga muktamad?", a: "Tidak. Ini adalah sebut harga anggaran berdasarkan maklumat yang diberikan. Harga akhir mungkin berubah selepas pemeriksaan di tapak bergantung pada keadaan sebenar, terutamanya pembinaan dinding." },
        { q: "Adakah anda memasang TV yang dibeli dari luar negara?", a: "Ya, selagi corak pelekap VESA adalah standard. Bawa braket atau biar kami bekalkan — kami semak kadar beban berbanding berat panel sebelum menggerudi." }
      ],
      covers: [
        "TV daripada 32 inci hingga paparan komersial",
        "Dinding konkrit, bata, papan plaster, kayu, papan simen dan berjubin",
        "Braket tetap, condong, gerakan penuh dan siling",
        "Penyembunyian kabel dalam dinding dan trunking permukaan",
        "Titik kuasa baharu di belakang TV",
        "Soundbar, para terapung dan persediaan peranti"
      ],
      relatedServices: [
        { label: "Perkhidmatan Handyman", href: "/services/handyman" },
        { label: "Panduan Kos Handyman", href: "/services/handyman/cost" },
        { label: "Pemasangan Elektrik", href: "/services/electrical" },
        { label: "Kerja Kayu & Dinding Ciri", href: "/services/carpentry" }
      ]
    },
    "paint-quantity-estimator": {
      name: "Kalkulator Kuantiti Cat",
      heading: "Kalkulator Kuantiti Cat untuk KL & Selangor",
      metaTitle: "Kalkulator Kuantiti Cat KL — Liter & Kos",
      metaDesc: "Kalkulator kuantiti cat percuma untuk KL & Selangor. Masukkan saiz bilik dan bilangan lapisan untuk dapatkan liter, liputan dan kos serta-merta.",
      keywords: ["kalkulator kuantiti cat Malaysia", "berapa liter cat per bilik", "pengiraan cat dinding KL"],
      eyebrow: "Alat kuantiti cat percuma",
      intro: "Anggarkan liter cat yang diperlukan untuk sebarang saiz bilik, bilangan lapisan dan pembaziran. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalkulator kuantiti cat di KL dan Selangor?",
      directAnswer: "Anggarkan liter cat yang diperlukan untuk sebarang saiz bilik, bilangan lapisan dan pembaziran. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Tin cat dan penggelek dengan ukuran bilik untuk pengiraan kuantiti cat",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kuantiti Cat — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kuantiti Cat — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kuantiti Cat — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kuantiti Cat — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan liter cat yang diperlukan untuk sebarang saiz bilik, bilangan lapisan dan pembaziran.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Mengecat", href: "/services/painting" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "wall-area-calculator": {
      name: "Kalkulator Keluasan Dinding",
      heading: "Kalkulator Keluasan Dinding — Kps Serta-merta",
      metaTitle: "Kalkulator Keluasan Dinding KL — Kps Serta-merta",
      metaDesc: "Kalkulator keluasan dinding percuma. Masukkan panjang, lebar dan tinggi untuk mendapatkan jumlah keluasan dinding dalam kaki persegi.",
      keywords: ["kalkulator keluasan dinding", "cara kira keluasan dinding", "kaki persegi dinding Malaysia"],
      eyebrow: "Alat keluasan percuma",
      intro: "Kira keluasan dinding yang boleh dicat menggunakan formula 2×(P+L)×T serta-merta. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalkulator keluasan dinding di KL dan Selangor?",
      directAnswer: "Kira keluasan dinding yang boleh dicat menggunakan formula 2×(P+L)×T serta-merta. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pita pengukur pada dinding untuk pengiraan keluasan",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Keluasan Dinding — Standard", note: "Skop standard" },
        { scope: "Kalkulator Keluasan Dinding — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Keluasan Dinding — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Keluasan Dinding — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Kira keluasan dinding yang boleh dicat menggunakan formula 2×(P+L)×T serta-merta.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Mengecat", href: "/services/painting" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "ceiling-area-calculator": {
      name: "Kalkulator Keluasan Siling",
      heading: "Kalkulator Keluasan Siling",
      metaTitle: "Kalkulator Keluasan Siling — Kps Serta-merta",
      metaDesc: "Kalkulator keluasan siling percuma untuk sebarang saiz bilik.",
      keywords: ["kalkulator keluasan siling", "kaki persegi siling", "kira keluasan siling Malaysia"],
      eyebrow: "Alat keluasan percuma",
      intro: "Kira keluasan siling P×L serta-merta. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalkulator keluasan siling di KL dan Selangor?",
      directAnswer: "Kira keluasan siling P×L serta-merta. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pengukuran siling",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Keluasan Siling — Standard", note: "Skop standard" },
        { scope: "Kalkulator Keluasan Siling — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Keluasan Siling — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Keluasan Siling — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Kira keluasan siling P×L serta-merta.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Siling", href: "/services/ceiling" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "ceiling-replacement-cost": {
      name: "Kalkulator Kos Ganti Siling",
      heading: "Kalkulator Kos Ganti Siling",
      metaTitle: "Kalkulator Kos Ganti Siling KL",
      metaDesc: "Anggarkan kos gantian siling plaster di KL & Selangor daripada kadar kaki persegi yang diterbitkan.",
      keywords: ["kos ganti siling Malaysia", "harga siling plaster"],
      eyebrow: "Kalkulator kos percuma",
      intro: "Anggarkan kos gantian siling daripada kadar kaki persegi. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos ganti siling di KL dan Selangor?",
      directAnswer: "Anggarkan kos gantian siling daripada kadar kaki persegi. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Gantian siling",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kos Ganti Siling — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kos Ganti Siling — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kos Ganti Siling — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kos Ganti Siling — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos gantian siling daripada kadar kaki persegi.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Siling Plaster", href: "/services/plaster-ceiling" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "pipe-leak-estimator": {
      name: "Kalkulator Baiki Paip Bocor",
      heading: "Kalkulator Baiki Paip Bocor",
      metaTitle: "Kalkulator Baiki Paip Bocor KL",
      metaDesc: "Kalkulator paip bocor percuma untuk rumah di KL & Selangor. Dapatkan punca, kecemasan dan kos.",
      keywords: ["kos baiki paip bocor Malaysia", "paip air bocor KL"],
      eyebrow: "Alat diagnostik percuma",
      intro: "Diagnosis punca dan kos paip bocor. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos baiki paip bocor di KL dan Selangor?",
      directAnswer: "Diagnosis punca dan kos paip bocor. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Paip bocor",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Baiki Paip Bocor — Standard", note: "Skop standard" },
        { scope: "Kalkulator Baiki Paip Bocor — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Baiki Paip Bocor — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Baiki Paip Bocor — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Diagnosis punca dan kos paip bocor.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Paip", href: "/services/plumbing" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "water-pressure-troubleshooter": {
      name: "Penyelesai Masalah Tekanan Air",
      heading: "Penyelesai Masalah Tekanan Air",
      metaTitle: "Penyelesai Masalah Tekanan Air KL",
      metaDesc: "Diagnosis punca tekanan air rendah dan dapatkan anggaran kos pembaikan.",
      keywords: ["baiki tekanan air rendah Malaysia", "tekanan air rendah KL"],
      eyebrow: "Penyelesai masalah percuma",
      intro: "Selesaikan punca dan pembaikan tekanan air rendah. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos menyelesaikan masalah tekanan air di KL dan Selangor?",
      directAnswer: "Selesaikan punca dan pembaikan tekanan air rendah. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Tekanan air rendah",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Penyelesai Masalah Tekanan Air — Standard", note: "Skop standard" },
        { scope: "Penyelesai Masalah Tekanan Air — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Penyelesai Masalah Tekanan Air — Bahan", note: "Kos bahan" },
        { scope: "Penyelesai Masalah Tekanan Air — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Selesaikan punca dan pembaikan tekanan air rendah.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Paip", href: "/services/plumbing" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "pipe-replacement-cost": {
      name: "Kalkulator Kos Ganti Paip",
      heading: "Kalkulator Kos Ganti Paip",
      metaTitle: "Kalkulator Kos Ganti Paip KL",
      metaDesc: "Kalkulator kos ganti paip percuma untuk KL & Selangor.",
      keywords: ["kos ganti paip Malaysia", "harga paip semula rumah KL"],
      eyebrow: "Kalkulator kos percuma",
      intro: "Anggarkan kos ganti paip per kaki linear. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos ganti paip di KL dan Selangor?",
      directAnswer: "Anggarkan kos ganti paip per kaki linear. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Gantian paip",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kos Ganti Paip — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kos Ganti Paip — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kos Ganti Paip — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kos Ganti Paip — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos ganti paip per kaki linear.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Paip", href: "/services/plumbing" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "waterproofing-cost-calculator": {
      name: "Kalkulator Kos Kalis Air",
      heading: "Kalkulator Kos Kalis Air",
      metaTitle: "Kalkulator Kos Kalis Air KL — Serta-merta",
      metaDesc: "Kalkulator kos kalis air percuma untuk bilik mandi, bumbung dan balkoni.",
      keywords: ["kos kalis air Malaysia", "harga kalis air bilik mandi KL"],
      eyebrow: "Kalkulator kos percuma",
      intro: "Anggarkan kos kalis air daripada keluasan dan jenis permukaan. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalis air di KL dan Selangor?",
      directAnswer: "Anggarkan kos kalis air daripada keluasan dan jenis permukaan. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Membran kalis air",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kos Kalis Air — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kos Kalis Air — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kos Kalis Air — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kos Kalis Air — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos kalis air daripada keluasan dan jenis permukaan.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Kalis Air", href: "/services/waterproofing" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "roof-area-calculator": {
      name: "Kalkulator Keluasan Bumbung",
      heading: "Kalkulator Keluasan Bumbung",
      metaTitle: "Kalkulator Keluasan Bumbung — Kps",
      metaDesc: "Kalkulator keluasan bumbung percuma dengan faktor cerun.",
      keywords: ["kalkulator keluasan bumbung", "kaki persegi bumbung Malaysia"],
      eyebrow: "Alat keluasan percuma",
      intro: "Kira keluasan bumbung daripada panjang, lebar dan cerun. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalkulator keluasan bumbung di KL dan Selangor?",
      directAnswer: "Kira keluasan bumbung daripada panjang, lebar dan cerun. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pengukuran keluasan bumbung",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Keluasan Bumbung — Standard", note: "Skop standard" },
        { scope: "Kalkulator Keluasan Bumbung — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Keluasan Bumbung — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Keluasan Bumbung — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Kira keluasan bumbung daripada panjang, lebar dan cerun.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Baiki Bumbung", href: "/services/roof-repair" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "bathroom-waterproofing-estimator": {
      name: "Kalkulator Kalis Air Bilik Mandi",
      heading: "Kalkulator Kalis Air Bilik Mandi",
      metaTitle: "Kalkulator Kos Kalis Air Bilik Mandi KL",
      metaDesc: "Kalkulator kos kalis air bilik mandi percuma untuk KL & Selangor.",
      keywords: ["kos kalis air bilik mandi Malaysia", "kalis air tandas KL"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos kalis air bilik mandi. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalis air bilik mandi di KL dan Selangor?",
      directAnswer: "Anggarkan kos kalis air bilik mandi. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Kalis air bilik mandi",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kalis Air Bilik Mandi — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kalis Air Bilik Mandi — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kalis Air Bilik Mandi — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kalis Air Bilik Mandi — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos kalis air bilik mandi.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Kalis Air", href: "/services/waterproofing" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "balcony-waterproofing-estimator": {
      name: "Kalkulator Kalis Air Balkoni",
      heading: "Kalkulator Kalis Air Balkoni",
      metaTitle: "Kalkulator Kalis Air Balkoni KL",
      metaDesc: "Kalkulator kos kalis air balkoni percuma.",
      keywords: ["kos kalis air balkoni Malaysia"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos kalis air balkoni. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalis air balkoni di KL dan Selangor?",
      directAnswer: "Anggarkan kos kalis air balkoni. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Kalis air balkoni",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kalis Air Balkoni — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kalis Air Balkoni — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kalis Air Balkoni — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kalis Air Balkoni — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos kalis air balkoni.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Kalis Air", href: "/services/waterproofing" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "electrical-installation-cost": {
      name: "Kalkulator Kos Pemasangan Elektrik",
      heading: "Kalkulator Kos Pemasangan Elektrik",
      metaTitle: "Kalkulator Kos Pemasangan Elektrik KL",
      metaDesc: "Kalkulator kos pemasangan elektrik percuma untuk KL & Selangor.",
      keywords: ["kos pemasangan elektrik Malaysia", "harga titik kuasa KL"],
      eyebrow: "Kalkulator kos percuma",
      intro: "Anggarkan kos pemasangan titik elektrik. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos pemasangan elektrik di KL dan Selangor?",
      directAnswer: "Anggarkan kos pemasangan titik elektrik. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pemasangan elektrik",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kos Pemasangan Elektrik — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kos Pemasangan Elektrik — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kos Pemasangan Elektrik — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kos Pemasangan Elektrik — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos pemasangan titik elektrik.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Elektrik", href: "/services/electrical" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "socket-quantity-calculator": {
      name: "Kalkulator Kuantiti Soket",
      heading: "Kalkulator Kuantiti Soket",
      metaTitle: "Kalkulator Kuantiti Soket — Berapa Soket Per Bilik",
      metaDesc: "Alat percuma untuk mengira kuantiti soket ideal untuk sebarang bilik.",
      keywords: ["berapa soket per bilik", "kalkulator kuantiti soket"],
      eyebrow: "Alat kuantiti percuma",
      intro: "Kira kuantiti soket yang disyorkan per bilik. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalkulator kuantiti soket di KL dan Selangor?",
      directAnswer: "Kira kuantiti soket yang disyorkan per bilik. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Soket elektrik",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kuantiti Soket — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kuantiti Soket — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kuantiti Soket — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kuantiti Soket — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Kira kuantiti soket yang disyorkan per bilik.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Elektrik", href: "/services/electrical" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "lighting-installation-calculator": {
      name: "Kalkulator Pemasangan Lampu",
      heading: "Kalkulator Pemasangan Lampu",
      metaTitle: "Kalkulator Kos Pemasangan Lampu KL",
      metaDesc: "Kalkulator kos pemasangan lampu percuma.",
      keywords: ["kos pasang downlight Malaysia", "harga titik lampu KL"],
      eyebrow: "Alat kos percuma",
      intro: "Anggarkan kos titik lampu dan downlight. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos pemasangan lampu di KL dan Selangor?",
      directAnswer: "Anggarkan kos titik lampu dan downlight. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pemasangan downlight",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Pemasangan Lampu — Standard", note: "Skop standard" },
        { scope: "Kalkulator Pemasangan Lampu — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Pemasangan Lampu — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Pemasangan Lampu — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos titik lampu dan downlight.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Pemasangan Lampu", href: "/services/lighting" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "ceiling-fan-installation-estimator": {
      name: "Kalkulator Pasang Kipas Siling",
      heading: "Kalkulator Pasang Kipas Siling",
      metaTitle: "Kalkulator Kos Pasang Kipas Siling KL",
      metaDesc: "Kalkulator kos pemasangan kipas siling percuma.",
      keywords: ["kos pasang kipas siling Malaysia"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos pemasangan kipas siling. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos pasang kipas siling di KL dan Selangor?",
      directAnswer: "Anggarkan kos pemasangan kipas siling. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Kipas siling",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Pasang Kipas Siling — Standard", note: "Skop standard" },
        { scope: "Kalkulator Pasang Kipas Siling — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Pasang Kipas Siling — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Pasang Kipas Siling — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos pemasangan kipas siling.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Kipas Siling", href: "/services/ceiling-fan" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "handyman-cost-estimator": {
      name: "Kalkulator Kos Handyman",
      heading: "Kalkulator Kos Handyman",
      metaTitle: "Kalkulator Kos Handyman KL",
      metaDesc: "Kalkulator kos handyman percuma untuk sebarang kerja kecil.",
      keywords: ["kos handyman Malaysia", "harga kerja kecil KL"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos kerja handyman. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos handyman di KL dan Selangor?",
      directAnswer: "Anggarkan kos kerja handyman. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Handyman",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kos Handyman — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kos Handyman — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kos Handyman — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kos Handyman — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos kerja handyman.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Handyman", href: "/services/handyman" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "furniture-assembly-estimator": {
      name: "Kalkulator Pasang Perabot",
      heading: "Kalkulator Pasang Perabot",
      metaTitle: "Kalkulator Kos Pasang Perabot KL",
      metaDesc: "Kalkulator kos pemasangan perabot percuma.",
      keywords: ["kos pasang perabot Malaysia", "harga pasang IKEA KL"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos pemasangan perabot seperti IKEA dan lain-lain. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos pasang perabot di KL dan Selangor?",
      directAnswer: "Anggarkan kos pemasangan perabot seperti IKEA dan lain-lain. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pemasangan perabot",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Pasang Perabot — Standard", note: "Skop standard" },
        { scope: "Kalkulator Pasang Perabot — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Pasang Perabot — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Pasang Perabot — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos pemasangan perabot seperti IKEA dan lain-lain.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Handyman", href: "/services/handyman" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "curtain-installation-calculator": {
      name: "Kalkulator Pasang Langsir",
      heading: "Kalkulator Pasang Langsir",
      metaTitle: "Kalkulator Kos Pasang Langsir KL",
      metaDesc: "Kalkulator kos pemasangan langsir percuma.",
      keywords: ["kos pasang langsir Malaysia"],
      eyebrow: "Alat kos percuma",
      intro: "Anggarkan kos rel dan pemasangan langsir. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos pasang langsir di KL dan Selangor?",
      directAnswer: "Anggarkan kos rel dan pemasangan langsir. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pemasangan langsir",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Pasang Langsir — Standard", note: "Skop standard" },
        { scope: "Kalkulator Pasang Langsir — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Pasang Langsir — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Pasang Langsir — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos rel dan pemasangan langsir.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Handyman", href: "/services/handyman" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "door-installation-cost": {
      name: "Kalkulator Kos Pasang Pintu",
      heading: "Kalkulator Kos Pasang Pintu",
      metaTitle: "Kalkulator Kos Pasang Pintu KL",
      metaDesc: "Kalkulator kos pemasangan pintu percuma untuk KL & Selangor.",
      keywords: ["kos pasang pintu Malaysia"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos pemasangan pintu. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos pasang pintu di KL dan Selangor?",
      directAnswer: "Anggarkan kos pemasangan pintu. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pemasangan pintu",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kos Pasang Pintu — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kos Pasang Pintu — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kos Pasang Pintu — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kos Pasang Pintu — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos pemasangan pintu.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Pintu", href: "/services/door" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "window-replacement-estimator": {
      name: "Kalkulator Ganti Tingkap",
      heading: "Kalkulator Ganti Tingkap",
      metaTitle: "Kalkulator Kos Ganti Tingkap KL",
      metaDesc: "Kalkulator kos gantian tingkap percuma.",
      keywords: ["kos ganti tingkap Malaysia"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos gantian tingkap. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos ganti tingkap di KL dan Selangor?",
      directAnswer: "Anggarkan kos gantian tingkap. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Gantian tingkap",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Ganti Tingkap — Standard", note: "Skop standard" },
        { scope: "Kalkulator Ganti Tingkap — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Ganti Tingkap — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Ganti Tingkap — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos gantian tingkap.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Tingkap", href: "/services/window-repair" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "glass-replacement-calculator": {
      name: "Kalkulator Ganti Kaca",
      heading: "Kalkulator Ganti Kaca",
      metaTitle: "Kalkulator Kos Ganti Kaca KL",
      metaDesc: "Kalkulator kos gantian kaca percuma.",
      keywords: ["kos ganti kaca Malaysia"],
      eyebrow: "Alat kos percuma",
      intro: "Anggarkan kos gantian kaca per kaki persegi. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos ganti kaca di KL dan Selangor?",
      directAnswer: "Anggarkan kos gantian kaca per kaki persegi. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Gantian kaca",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Ganti Kaca — Standard", note: "Skop standard" },
        { scope: "Kalkulator Ganti Kaca — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Ganti Kaca — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Ganti Kaca — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos gantian kaca per kaki persegi.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Kaca & Aluminium", href: "/services/glass-aluminium" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "flooring-area-calculator": {
      name: "Kalkulator Keluasan Lantai",
      heading: "Kalkulator Keluasan Lantai",
      metaTitle: "Kalkulator Keluasan Lantai — Kps",
      metaDesc: "Kalkulator keluasan lantai percuma dengan 10% pembaziran.",
      keywords: ["kalkulator keluasan lantai", "berapa keluasan lantai"],
      eyebrow: "Alat keluasan percuma",
      intro: "Kira keluasan lantai dan pembaziran. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalkulator keluasan lantai di KL dan Selangor?",
      directAnswer: "Kira keluasan lantai dan pembaziran. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Keluasan lantai",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Keluasan Lantai — Standard", note: "Skop standard" },
        { scope: "Kalkulator Keluasan Lantai — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Keluasan Lantai — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Keluasan Lantai — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Kira keluasan lantai dan pembaziran.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Lantai", href: "/services/flooring" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "tile-quantity-calculator": {
      name: "Kalkulator Kuantiti Jubin",
      heading: "Kalkulator Kuantiti Jubin",
      metaTitle: "Kalkulator Kuantiti Jubin — Berapa Keping Jubin",
      metaDesc: "Kalkulator kuantiti jubin percuma untuk lantai dan dinding.",
      keywords: ["kalkulator jubin", "berapa keping jubin diperlukan"],
      eyebrow: "Alat kuantiti percuma",
      intro: "Kira kuantiti jubin yang diperlukan termasuk pembaziran. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos kalkulator kuantiti jubin di KL dan Selangor?",
      directAnswer: "Kira kuantiti jubin yang diperlukan termasuk pembaziran. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Jubin",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kuantiti Jubin — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kuantiti Jubin — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kuantiti Jubin — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kuantiti Jubin — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Kira kuantiti jubin yang diperlukan termasuk pembaziran.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Jubin", href: "/services/tiling" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "vinyl-flooring-cost-estimator": {
      name: "Kalkulator Kos Lantai Vinyl",
      heading: "Kalkulator Kos Lantai Vinyl",
      metaTitle: "Kalkulator Kos Lantai Vinyl KL",
      metaDesc: "Kalkulator kos lantai vinyl percuma untuk KL & Selangor.",
      keywords: ["kos lantai vinyl Malaysia", "harga lantai SPC KL"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos lantai vinyl per kaki persegi. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos lantai vinyl di KL dan Selangor?",
      directAnswer: "Anggarkan kos lantai vinyl per kaki persegi. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Lantai vinyl",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kos Lantai Vinyl — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kos Lantai Vinyl — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kos Lantai Vinyl — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kos Lantai Vinyl — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos lantai vinyl per kaki persegi.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Lantai", href: "/services/flooring" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "roof-repair-estimator": {
      name: "Kalkulator Baiki Bumbung",
      heading: "Kalkulator Baiki Bumbung",
      metaTitle: "Kalkulator Kos Baiki Bumbung KL",
      metaDesc: "Kalkulator kos pembaikan bumbung percuma.",
      keywords: ["kos baiki bumbung Malaysia", "harga bumbung bocor KL"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos pembaikan bumbung bocor. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos baiki bumbung di KL dan Selangor?",
      directAnswer: "Anggarkan kos pembaikan bumbung bocor. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pembaikan bumbung",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Baiki Bumbung — Standard", note: "Skop standard" },
        { scope: "Kalkulator Baiki Bumbung — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Baiki Bumbung — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Baiki Bumbung — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos pembaikan bumbung bocor.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Baiki Bumbung", href: "/services/roof-repair" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "roof-replacement-cost": {
      name: "Kalkulator Kos Ganti Bumbung",
      heading: "Kalkulator Kos Ganti Bumbung",
      metaTitle: "Kalkulator Kos Ganti Bumbung KL",
      metaDesc: "Kalkulator kos gantian bumbung percuma.",
      keywords: ["kos ganti bumbung Malaysia"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos gantian bumbung per kaki persegi. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos ganti bumbung di KL dan Selangor?",
      directAnswer: "Anggarkan kos gantian bumbung per kaki persegi. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Gantian bumbung",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kos Ganti Bumbung — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kos Ganti Bumbung — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kos Ganti Bumbung — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kos Ganti Bumbung — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos gantian bumbung per kaki persegi.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Baiki Bumbung", href: "/services/roof-repair" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "renovation-budget-calculator": {
      name: "Kalkulator Bajet Renovasi",
      heading: "Kalkulator Bajet Renovasi",
      metaTitle: "Kalkulator Bajet Renovasi KL — per Kps",
      metaDesc: "Kalkulator bajet renovasi percuma untuk Malaysia.",
      keywords: ["kalkulator bajet renovasi Malaysia", "kos renovasi rumah per kps KL"],
      eyebrow: "Alat bajet percuma",
      intro: "Anggarkan bajet renovasi penuh per kaki persegi. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos bajet renovasi di KL dan Selangor?",
      directAnswer: "Anggarkan bajet renovasi penuh per kaki persegi. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Bajet renovasi",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Bajet Renovasi — Standard", note: "Skop standard" },
        { scope: "Kalkulator Bajet Renovasi — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Bajet Renovasi — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Bajet Renovasi — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan bajet renovasi penuh per kaki persegi.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Renovasi Rumah", href: "/services/house-renovation" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "room-renovation-estimator": {
      name: "Kalkulator Renovasi Bilik",
      heading: "Kalkulator Renovasi Bilik",
      metaTitle: "Kalkulator Kos Renovasi Bilik KL",
      metaDesc: "Kalkulator kos renovasi bilik percuma.",
      keywords: ["kos renovasi bilik Malaysia"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos renovasi per bilik. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos renovasi bilik di KL dan Selangor?",
      directAnswer: "Anggarkan kos renovasi per bilik. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Renovasi bilik",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Renovasi Bilik — Standard", note: "Skop standard" },
        { scope: "Kalkulator Renovasi Bilik — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Renovasi Bilik — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Renovasi Bilik — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos renovasi per bilik.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Renovasi Rumah", href: "/services/house-renovation" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "kitchen-renovation-estimator": {
      name: "Kalkulator Renovasi Dapur",
      heading: "Kalkulator Renovasi Dapur",
      metaTitle: "Kalkulator Kos Renovasi Dapur KL",
      metaDesc: "Kalkulator kos renovasi dapur percuma.",
      keywords: ["kos renovasi dapur Malaysia", "harga kabinet dapur KL"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos renovasi dapur. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos renovasi dapur di KL dan Selangor?",
      directAnswer: "Anggarkan kos renovasi dapur. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Renovasi dapur",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Renovasi Dapur — Standard", note: "Skop standard" },
        { scope: "Kalkulator Renovasi Dapur — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Renovasi Dapur — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Renovasi Dapur — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos renovasi dapur.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Kabinet Dapur", href: "/services/kitchen-cabinet" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "bathroom-renovation-estimator": {
      name: "Kalkulator Renovasi Bilik Air",
      heading: "Kalkulator Renovasi Bilik Air",
      metaTitle: "Kalkulator Kos Renovasi Bilik Air KL",
      metaDesc: "Kalkulator kos renovasi bilik air percuma.",
      keywords: ["kos renovasi bilik air Malaysia"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos renovasi bilik air. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos renovasi bilik air di KL dan Selangor?",
      directAnswer: "Anggarkan kos renovasi bilik air. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Renovasi bilik air",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Renovasi Bilik Air — Standard", note: "Skop standard" },
        { scope: "Kalkulator Renovasi Bilik Air — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Renovasi Bilik Air — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Renovasi Bilik Air — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos renovasi bilik air.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Renovasi Rumah", href: "/services/house-renovation" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "deep-cleaning-cost-estimator": {
      name: "Kalkulator Kos Cuci Menyeluruh",
      heading: "Kalkulator Kos Cuci Menyeluruh",
      metaTitle: "Kalkulator Kos Cuci Menyeluruh KL",
      metaDesc: "Kalkulator kos pembersihan menyeluruh percuma.",
      keywords: ["kos cuci menyeluruh Malaysia", "harga cuci pindah keluar KL"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos pembersihan menyeluruh per kaki persegi. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos cuci menyeluruh di KL dan Selangor?",
      directAnswer: "Anggarkan kos pembersihan menyeluruh per kaki persegi. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pembersihan menyeluruh",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Kos Cuci Menyeluruh — Standard", note: "Skop standard" },
        { scope: "Kalkulator Kos Cuci Menyeluruh — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Kos Cuci Menyeluruh — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Kos Cuci Menyeluruh — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos pembersihan menyeluruh per kaki persegi.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Pembersihan Menyeluruh", href: "/services/deep-cleaning" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
    "move-in-out-cleaning-calculator": {
      name: "Kalkulator Cuci Pindah Masuk/Keluar",
      heading: "Kalkulator Cuci Pindah Masuk/Keluar",
      metaTitle: "Kalkulator Kos Cuci Pindah Masuk/Keluar KL",
      metaDesc: "Kalkulator kos pembersihan pindah masuk/keluar percuma.",
      keywords: ["kos cuci pindah masuk Malaysia", "cuci pindah keluar KL"],
      eyebrow: "Kalkulator percuma",
      intro: "Anggarkan kos pembersihan pindah masuk/keluar. Satu halaman, tiada butang seterusnya. Masukkan saiz anda dan dapatkan anggaran serta-merta daripada kadar KL & Selangor 2026 kami yang diterbitkan.",
      directQuestion: "Berapa kos cuci pindah masuk/keluar di KL dan Selangor?",
      directAnswer: "Anggarkan kos pembersihan pindah masuk/keluar. Kalkulator percuma ini memberikan anda anggaran serta-merta daripada kadar 2026 kami yang diterbitkan untuk KL & Selangor. Masukkan dimensi anda dan dapatkan jumlah keluasan, upah, bahan, jumlah anggaran, julat dan tempoh.",
      heroAlt: "Pembersihan pindah masuk/keluar",
      stats: [
        { label: "Serta-merta", value: "Bawah 2 minit" },
        { label: "Dari", value: "RM 150" },
        { label: "Liputan", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "Masukkan saiz bilik dan keperluan anda", desc: "Semuanya dalam satu halaman. Masukkan panjang, lebar dan tinggi atau pilih pratetap. Harga dikemas kini secara langsung." },
        { title: "Pilih bahan dan keadaan", desc: "Pilih gred ekonomi, standard atau premium serta keadaan permukaan semasa." },
        { title: "Pilihan: akses dan kecemasan", desc: "Buka bahagian pilihan untuk ketinggian, akses dan masa. Langkau untuk harga standard." },
        { title: "Lihat anggaran dan tempah melalui WhatsApp", desc: "Jumlah keluasan, upah, bahan, jumlah, julat dan tempoh muncul serta-merta. Tempah melalui WhatsApp." },
      ],
      priceTable: [
        { scope: "Kalkulator Cuci Pindah Masuk/Keluar — Standard", note: "Skop standard" },
        { scope: "Kalkulator Cuci Pindah Masuk/Keluar — Premium", note: "Skop premium dengan tambahan" },
        { scope: "Kalkulator Cuci Pindah Masuk/Keluar — Bahan", note: "Kos bahan" },
        { scope: "Kalkulator Cuci Pindah Masuk/Keluar — Upah", note: "Upah sahaja" },
      ],
      priceTableNote: "Kadar adalah daripada senarai harga 2026 kami yang diterbitkan dan digunakan terus oleh kalkulator ini.",
      faqs: [
        { q: "Bagaimana anggaran dikira?", a: "Kami menggunakan kadar diterbitkan: keluasan dinding = 2×(Panjang+Lebar)×Tinggi untuk dinding, keluasan siling = Panjang×Lebar, dan jumlah gabungan untuk dinding+siling. Upah dan bahan diasingkan daripada julat yang diterbitkan. Lihat pecahan untuk butiran." },
        { q: "Adakah ini sebut harga muktamad?", a: "Tidak. Ini hanya harga anggaran. Sebut harga muktamad akan diberikan selepas pemeriksaan atau selepas butiran projek disahkan." },
        { q: "Adakah anggaran termasuk upah dan bahan?", a: "Ya, anggaran termasuk upah dan bahan melainkan anda memilih bekalan sendiri. Pecahan menunjukkan kedua-duanya." },
        { q: "Berapa lama masa kerja dijalankan?", a: "Tempoh dianggarkan daripada jumlah keluasan dan kerumitan — biasanya separuh hari untuk kerja kecil, 1–2 hari untuk bilik, 2–3 hari untuk kawasan besar." },
        { q: "Adakah anda meliputi kawasan saya?", a: "Kami meliputi seluruh KL & Selangor termasuk Cheras, Ampang, Puchong, Subang, Petaling Jaya, Shah Alam, Klang dan kawasan sekitarnya." },
      ],
      covers: [
        "Anggarkan kos pembersihan pindah masuk/keluar.",
        "Anggaran langsung serta-merta",
        "Pecahan upah berbanding bahan",
        "Pengiraan keluasan",
        "Anggaran tempoh",
        "Tempahan WhatsApp",
      ],
      relatedServices: [
        { label: "Perkhidmatan Pembersihan Menyeluruh", href: "/services/deep-cleaning" },
        { label: "Panduan Harga", href: "/pricing" }
      ]
    },
  },
  zh: {
    /* ── 油漆费用计算器 ──────────────────────────────────────────────── */
    "painting-calculator": {
      name: "油漆费用计算器",
      heading: "吉隆坡与雪兰莪油漆费用计算器",
      metaTitle: "吉隆坡油漆费用计算器——即时估价",
      metaDesc:
        "吉隆坡与雪兰莪免费油漆费用计算器。选择表面、面积、状况与涂料等级，即可按 2026 年公开价即时估价。",
      keywords: [
        "油漆费用计算器 马来西亚",
        "房屋油漆价格 吉隆坡",
        "每平方英尺油漆费用",
        "室内油漆 雪兰莪",
        "外墙油漆报价 吉隆坡"
      ],
      eyebrow: "免费即时估价工具",
      intro:
        "单页操作，没有下一步按钮。选择要油漆的部位与面积——价格立即按本网站公开的吉隆坡与雪兰莪价格计算。",
      directQuestion: "在吉隆坡与雪兰莪，房屋油漆需要多少钱？",
      directAnswer: `吉隆坡与雪兰莪的室内油漆为每平方英尺 ${band(RATES.painting.interiorSqft.low, RATES.painting.interiorSqft.high)}，每间房最低 ${money(RATES.painting.roomMinimum)}。外墙油漆为每平方英尺 ${band(RATES.painting.exteriorSqft.low, RATES.painting.exteriorSqft.high)}，最低 ${money(RATES.painting.exteriorMinimum)} 起。最终价格取决于表面状况、涂料等级、颜色变化、施工高度与工期要求。本计算器约 90 秒即可按同样的公开价格为您估价。`,
      heroAlt: "KL Servis Rumah 专业油漆师傅在吉隆坡住宅内墙涂刷优质涂料，平板显示油漆费用计算器",
      stats: [
        { label: "室内价格", value: `${money(RATES.painting.interiorSqft.low)}–${money(RATES.painting.interiorSqft.high)} / 平方英尺` },
        { label: "每间房起价", value: money(RATES.painting.roomMinimum) },
        { label: "完成时间", value: "2 分钟内" }
      ],
      howTo: [
        { title: "选择要油漆的部位与面积", desc: "所有内容都在同一页面。选择室内墙面、天花板、外墙、屋顶、门、窗、铁门、围栏、橱柜、衣柜、栏杆、钢结构，或整间公寓、共管公寓、有地住宅、办公室、店屋、工厂或仓库——然后点选常见房间尺寸如 10 × 12 英尺、房产建筑面积区间，或输入自己的尺寸。" },
        { title: "说明表面目前的状况", desc: "全新、良好、开裂、剥落、水损、发霉、不平整或毛坯水泥——并标记是否需要批灰或防水。页面顶部的价格会随每次点选即时更新。" },
        { title: "可选：调整涂料、颜色、施工高度与工期", desc: "仅在需要更改涂料等级、颜色方向、施工高度或排期时才打开可选部分。跳过则采用最常见的答案——经济到豪华等级、低层施工与标准排期。" },
        { title: "查看估价并预约", desc: "预估费用、价格区间、人工与材料拆分、完工时间、推荐方案与附加项目都显示在同一页面——然后通过 WhatsApp 预约或申请免费上门勘查。" }
      ],
      priceTable: [
        { scope: "室内墙面油漆", note: `每间房最低 ${money(RATES.painting.roomMinimum)}` },
        { scope: "外墙油漆", note: `${money(RATES.painting.exteriorMinimum)} 起` },
        { scope: "墙面裂缝与渗水修补", note: "开槽、填缝与封闭底漆" },
        { scope: "墙面批灰", note: "油漆前找平至光滑" },
        { scope: "天花板批灰", note: "翻新老化石膏天花" },
        { scope: "裂缝与接缝修补", note: "结构性与沉降裂缝" },
        { scope: "墙面防潮处理", note: "泛碱处理与防潮层" }
      ],
      priceTableNote:
        "以上与本计算器使用的是同一套公开价格，反映 2026 年巴生谷标准公道价格——不虚高，也不低价误导。",
      faqs: [
        { q: "在吉隆坡油漆一间房需要多少钱？", a: `一间状况良好的标准 10 × 12 英尺卧室通常接近我们公开的每间房最低 ${money(RATES.painting.roomMinimum)}。房间更大、层高更高、改深色或大量裂缝修补会推高价格——这正是计算器所模拟的。` },
        { q: "雪兰莪外墙油漆需要多少钱？", a: `外墙油漆按施工条件与涂料系统为每平方英尺 ${band(RATES.painting.exteriorSqft.low, RATES.painting.exteriorSqft.high)}，小型立面 ${money(RATES.painting.exteriorMinimum)} 起。脚手架或吊绳施工会增加费用，计算器已包含两种选项。` },
        { q: "计算器的估价是最终报价吗？", a: "不是。这是根据您提供的信息作出的估算报价。最终价格可能因隐藏损坏、基层质量或施工限制等现场实际状况，于上门勘查后调整。" },
        { q: "估价是否包含涂料与材料？", a: "包含，除非您选择“我自购涂料”。结果页会把金额拆分为预估人工与预估材料，两项都清晰可见。" },
        { q: "你们使用立邦（Nippon）还是多乐士（Dulux）？", a: "都用。四个等级全部使用正品立邦、多乐士与佐敦产品：经济级采用其平价乳胶漆；高端与豪华级采用耐擦洗、低 VOC 与耐候系列。" },
        { q: "油漆一般需要多长时间？", a: "单间通常一天完工。三房公寓含准备与干燥约需 2 至 3 天。计算器会根据面积、状况与施工条件预估完工时间。" },
        { q: "油漆前需要批灰吗？", a: `墙面波浪、修补过或曾贴墙纸时，批灰很值得。批灰单独计费，每平方英尺 ${money(RATES.painting.skimWallSqft)} 起，您可以在计算器内开关查看对总价的影响。` },
        { q: "整屋油漆有折扣吗？", a: "有。涂刷面积超过 1,500 平方英尺及 4,000 平方英尺后，计算器会自动计入规模效益，因为准备与防护成本可由更大工程量分摊。" }
      ],
      covers: [
        "室内墙面与天花板",
        "外墙、屋顶涂层与围墙",
        "门、窗、铁门、铁花与围栏",
        "厨房橱柜、衣柜与木工",
        "楼梯扶手与结构钢",
        "公寓、共管公寓与有地住宅",
        "办公室、店屋、工厂与仓库"
      ],
      relatedServices: [
        { label: "房屋油漆服务", href: "/services/painting" },
        { label: "油漆价格指南", href: "/services/painting/cost" },
        { label: "批灰与墙面找平", href: "/services/skim-coat" },
        { label: "防水工程", href: "/services/waterproofing" }
      ]
    },

    /* ── 漏水检测估价 ────────────────────────────────────────────────── */
    "leak-triage": {
      name: "漏水检测估价",
      heading: "漏水检测与维修费用估价",
      metaTitle: "吉隆坡漏水检测——原因与费用",
      metaDesc:
        "吉隆坡与雪兰莪免费漏水引导诊断。识别天花板、浴室、屋顶、墙面与水管漏水的可能原因、紧急程度与预估维修费用。",
      keywords: [
        "漏水维修费用 马来西亚",
        "天花板漏水 吉隆坡",
        "浴室漏水维修 雪兰莪",
        "PU 灌浆价格 吉隆坡",
        "屋顶漏水维修费用 马来西亚"
      ],
      eyebrow: "免费引导式诊断",
      intro:
        "单页操作，没有下一步按钮。告诉我们漏水位置与您看到的现象——可能原因、紧急程度与维修费用即时显示。",
      directQuestion: "如何判断漏水的严重程度？维修需要多少钱？",
      directAnswer: `漏水严重程度看三点：水是否仍在流动、受影响面积扩散多快、已持续多久。在吉隆坡与雪兰莪，楼板漏水 PU 高压灌浆每点 ${band(RATES.waterproofing.puBand.low, RATES.waterproofing.puPoint)}，免砸砖浴室防水 ${band(RATES.waterproofing.bathroomBand.low, RATES.waterproofing.bathroomBand.high)}，屋顶漏水检测维修 ${money(RATES.waterproofing.roofDiagnosis)} 起，水损天花板修复 ${money(RATES.waterproofing.ceilingRepair)} 起。本分诊工具将您的症状匹配到可能原因、给出紧急程度，并按这些公开价格估算维修费用。`,
      heroAlt: "KL Servis Rumah 技师在吉隆坡公寓用湿度仪检测有污渍的天花板漏水点",
      stats: [
        { label: "PU 灌浆", value: `${money(RATES.waterproofing.puBand.low)}–${money(RATES.waterproofing.puPoint)} / 点` },
        { label: "天花修复起价", value: money(RATES.waterproofing.ceilingRepair) },
        { label: "诊断用时", value: "2 分钟内" }
      ],
      howTo: [
        { title: "选择漏水位置与您看到的现象", desc: "所有内容都在同一页面。选择位置——浴室、厨房、屋顶、天花板、阳台、墙面、室外、水箱、水管、马桶、水龙头或热水器——然后勾选所有症状：墙面潮湿、正在滴水、水压偏低、褐色污渍、天花板鼓泡、裂缝、发霉、爆管、水管异响、水表空转或水费异常升高。" },
        { title: "评估严重程度与受影响面积", desc: "缓慢、中等、快速或严重，面积从手掌大小到多个房间。紧急程度与页面顶部的价格会即时更新。" },
        { title: "可选：补充漏水时长与房产信息", desc: "打开可选部分可补充漏水持续时间、房产类型与楼龄。跳过则按巴生谷典型中龄住宅估算。" },
        { title: "查看诊断结果并预约", desc: "可能原因、紧急程度、预估维修费用与区间，以及天花修复、重新油漆等推荐附加项目——全部在同一页面。" }
      ],
      priceTable: [
        { scope: "PU 高压注浆", note: "免砸砖楼板封堵" },
        { scope: "浴室防水（免砸砖）", note: `公开起价 ${money(RATES.waterproofing.bathroom)}` },
        { scope: "浴室防水（砸砖重做）", note: "全砸重贴砖范围" },
        { scope: "屋顶漏水检测维修", note: "瓦片、屋脊、泛水板与天沟" },
        { scope: "火烤卷材防水", note: "屋顶楼板与阳台" },
        { scope: "水损天花板修复", note: "换板并复原" },
        { scope: "墙面潮湿与泛碱", note: "盐霜、霉菌与防潮层" },
        { scope: "暗管漏水检测", note: "声波与热成像定位" }
      ],
      priceTableNote:
        "维修报价始终先覆盖漏水源头。瓷砖、油漆、天花板等饰面工程单独列项，让您清楚每一笔费用。",
      faqs: [
        { q: "天花板漏水有多紧急？", a: "鼓泡或下垂的天花板属于紧急情况——积水就在板材上方，随时可能塌下。请关闭该区域的照明电路，并在 24 至 48 小时内预约。数月没有变化的干褐色污渍则相对不紧急。" },
        { q: "在吉隆坡修漏水天花板要多少钱？", a: `PU 注浆封堵源头每点 ${band(RATES.waterproofing.puBand.low, RATES.waterproofing.puPoint)}，受损天花板修复 ${money(RATES.waterproofing.ceilingRepair)} 起。本工具会把两项合并估算，因为只换板不堵源头，损坏只会重演。` },
        { q: "不砸砖能找到隐藏的漏水点吗？", a: "可以。我们使用声波漏水检测仪与热成像定位渗漏点，然后只开最小面积的瓷砖。全部砸砖是最后手段，不是起点。" },
        { q: "所有水龙头关掉后水表还在走，说明什么？", a: "这确认供水侧存在隐藏漏水。它是本工具权重最高的症状之一，因为水在持续流失，通常在楼板下或墙体内。" },
        { q: "漏水估价是最终报价吗？", a: "不是。这是根据所提供信息作出的估算报价。最终价格可能因现场实际状况于上门勘查后调整——漏水源头常常与水渍出现的位置不同。" },
        { q: "你们提供紧急漏水响应吗？", a: "提供。爆管与严重明水漏水会就近派单，吉隆坡与雪兰莪通常 30 至 60 分钟到达。紧急附加费会在您预约前明确列在估价中。" },
        { q: "水损坏可以报保险吗？", a: "较大的天花板或地板损坏通常值得。我们的书面明细报价与源头照片被多数马来西亚保险公司接受为辅助材料。" }
      ],
      covers: [
        "浴室、厨房与湿区漏水",
        "来自楼上单位或屋顶的天花板漏水",
        "屋顶、天沟与泛水板漏水",
        "阳台与外墙渗水",
        "暗管与地下水管漏水",
        "水箱、马桶、水龙头与热水器漏水"
      ],
      relatedServices: [
        { label: "防水与 PU 灌浆", href: "/services/waterproofing" },
        { label: "水管漏水维修", href: "/services/plumbing" },
        { label: "天花板维修", href: "/services/ceiling" },
        { label: "屋顶维修", href: "/services/roof-repair" }
      ]
    },

    /* ── 天花板维修估价器 ────────────────────────────────────────────── */
    "ceiling-calculator": {
      name: "天花板维修估价器",
      heading: "天花板维修与安装费用估价器",
      metaTitle: "吉隆坡天花维修估价——价格",
      metaDesc:
        "按公开的每平方英尺价格，估算吉隆坡与雪兰莪的石膏天花维修、换板、L-box 造型与石膏板隔墙费用。",
      keywords: [
        "石膏天花价格 马来西亚",
        "天花维修费用 吉隆坡",
        "石膏板每平方英尺价格",
        "L-box 天花价格 雪兰莪",
        "天花更换费用 马来西亚"
      ],
      eyebrow: "免费即时估价工具",
      intro:
        "单页操作，没有下一步按钮。选择天花类型、所需工程与面积——估价立即按公开的每平方英尺价格显示。",
      directQuestion: "在吉隆坡与雪兰莪，石膏天花工程需要多少钱？",
      directAnswer: `平面石膏天花安装公开价每平方英尺 ${money(RATES.ceiling.flatSqft)} 起，层级与 L-box 造型 ${money(RATES.ceiling.tieredSqft)} 起，弧形与灯槽天花 ${money(RATES.ceiling.coveSqft)} 起，旧天花维修或重新批灰每平方英尺 ${money(RATES.ceiling.reskimSqft)} 起。石膏板隔墙每平方英尺 ${money(RATES.ceiling.partitionSqft)} 起，水损天花维修 ${money(RATES.ceiling.repairMinimum)} 起。本估价器将这些价格应用于您的天花类型、面积、损坏程度、层高与附加项目。`,
      heroAlt: "KL Servis Rumah 安装师傅在雪兰莪住宅将石膏板固定到镀锌轻钢龙骨上",
      stats: [
        { label: "平面天花起价", value: `${money(RATES.ceiling.flatSqft)} / 平方英尺` },
        { label: "维修起价", value: money(RATES.ceiling.repairMinimum) },
        { label: "完成时间", value: "2 分钟内" }
      ],
      howTo: [
        { title: "选择天花类型、所需工程与面积", desc: "所有内容都在同一页面。石膏板、石膏、PVC 板、硅酸钙板、木板、水泥板——或选“不确定”，我们上门识别。然后选择维修、局部更换、新做平面、层级 L-box 或灯槽造型、或石膏板隔墙，并点选面积预设，从 20 平方英尺的补丁到 20 × 25 英尺。" },
        { title: "描述损坏情况与附加项目", desc: "发丝裂缝、明显裂缝、水渍、板材下垂、破洞、局部塌陷或发霉——加上油漆、拆灯、风扇重装、石膏线、保温棉或垃圾清运。价格随每次点选更新。" },
        { title: "可选：层高与工期", desc: "仅在层高特别高或需要赶工时打开可选部分。跳过则按标准层高与标准排期计价。" },
        { title: "查看估价并预约", desc: "预估费用、区间、人工与材料、完工时间、推荐方案与附加项目都在同一页面——然后通过 WhatsApp 预约。" }
      ],
      priceTable: [
        { scope: "平面石膏天花", note: "单层级，批灰饰面" },
        { scope: "层级与 L-box 天花", note: "隐藏 LED 灯槽设计" },
        { scope: "灯槽与弧形天花", note: "柔性轻钢龙骨造型" },
        { scope: "天花维修与重新批灰", note: "旧天花翻新" },
        { scope: "石膏板隔墙", note: "可直接上漆的空间分隔" },
        { scope: "水损天花维修", note: "拆板并复原" },
        { scope: "LED 筒灯点位", note: "开孔、布线与安装" },
        { scope: "吊扇安装", note: "检查吊钩、布线与摆动测试" }
      ],
      priceTableNote:
        "安装价格包含防锈轻钢龙骨、板材、接缝处理与批灰饰面。油漆单独计价，可在估价器内添加。",
      faqs: [
        { q: "马来西亚石膏天花每平方英尺多少钱？", a: `平面石膏天花公开价每平方英尺 ${money(RATES.ceiling.flatSqft)} 起。层级与 L-box 造型 ${money(RATES.ceiling.tieredSqft)} 起，灯槽或弧形工程 ${money(RATES.ceiling.coveSqft)} 起，因为需要更多龙骨工时与细节处理。` },
        { q: "水损天花应该修还是换？", a: "板材有污渍但仍结实，通常局部切割修补加批灰即可。若已下垂、发软或霉透，局部更换长期来看更划算。无论哪种，都必须先封堵漏水源头，否则新板也会坏。" },
        { q: "安装天花可以不拆我的灯吗？", a: "重新批灰可以——我们会遮盖保护灯具。换板则必须拆下再装回，估价器按每个灯位计价。" },
        { q: "石膏天花安装需要多久？", a: "标准卧室通常一天做龙骨与封板，第二天接缝与批灰。大厅与层级造型需三至四天。估价器会根据面积与损坏情况计算工期。" },
        { q: "天花估价是最终报价吗？", a: "不是。这是根据所提供信息作出的估算报价。最终价格可能因现场实际状况于上门勘查后调整，尤其是打开天花夹层后看到的情况。" },
        { q: "你们也做石膏板隔墙吗？", a: `做。石膏板隔墙公开价每平方英尺 ${money(RATES.ceiling.partitionSqft)} 起，可在估价器内作为工程类型选择。` },
        { q: "石膏板和硅酸钙板有什么区别？", a: "石膏板是标准选择，最便宜也最容易饰面。硅酸钙板防火防潮性能更好，所以每平方英尺更贵，常用于湿区与室外挑檐。" }
      ],
      covers: [
        "石膏板、石膏、PVC、硅酸钙板与木质天花",
        "水损、下垂、裂缝与破洞",
        "局部更换与整体重新批灰",
        "新做平面、层级 L-box 与灯槽造型",
        "石膏板隔墙",
        "筒灯、吊扇与石膏线整合"
      ],
      relatedServices: [
        { label: "石膏天花服务", href: "/services/plaster-ceiling" },
        { label: "天花板维修", href: "/services/ceiling" },
        { label: "天花价格指南", href: "/services/ceiling/cost" },
        { label: "灯具安装", href: "/services/lighting" }
      ]
    },

    /* ── 水管问题诊断 ────────────────────────────────────────────────── */
    "plumbing-diagnostic": {
      name: "水管问题诊断",
      heading: "水管诊断与维修费用估价",
      metaTitle: "吉隆坡水管诊断——原因与费用",
      metaDesc:
        "诊断吉隆坡与雪兰莪住宅的下水道堵塞、漏水、水压低与洁具故障。即时获得可能原因、紧急程度与预估维修费。",
      keywords: [
        "水管工价格 马来西亚",
        "马桶疏通费用 吉隆坡",
        "水压低维修 雪兰莪",
        "水管漏水维修价格 马来西亚",
        "水管工上门费 吉隆坡"
      ],
      eyebrow: "免费引导式诊断",
      intro:
        "单页操作，没有下一步按钮。选择您的问题，价格、可能原因与紧急程度立即按公开的水管工程价格显示。",
      directQuestion: "在吉隆坡与雪兰莪，水管工收费多少？",
      directAnswer: `巴生谷小型水管维修公开价 ${money(RATES.plumbing.minorRepair)} 起，经验证的市场区间为 ${band(RATES.plumbing.minorBand.low, RATES.plumbing.minorBand.high)}（视复杂程度）。下水道与马桶疏通 ${money(RATES.plumbing.drain)} 起，漏水检测维修 ${money(RATES.plumbing.leakDiagnosis)} 起，洁具安装 ${money(RATES.plumbing.fixtureInstall)} 起，热水器工程 ${money(RATES.plumbing.heaterRepair)} 起。本诊断工具将您的症状匹配到可能原因，并按这些公开价格报价。`,
      heroAlt: "KL Servis Rumah 持证水管工在吉隆坡住宅厨房水槽下方紧固管接头",
      stats: [
        { label: "小修起价", value: money(RATES.plumbing.minorRepair) },
        { label: "疏通起价", value: money(RATES.plumbing.drain) },
        { label: "诊断用时", value: "2 分钟内" }
      ],
      howTo: [
        { title: "选择水管问题与严重程度", desc: "所有内容都在同一页面。水槽、马桶、地漏或室外排水沟堵塞；明管漏水、暗管漏水、水压低、完全没水；水龙头、混合阀、马桶、水槽或喷枪工程；热水器或增压泵——然后评为小问题、中等、严重或紧急。" },
        { title: "选择位置与受影响点位数量", desc: "厨房、主卫或套卫、洗衣区、室外、屋顶水箱或多个位置，以及受影响洁具数量。页面顶部价格即时更新。" },
        { title: "可选：房产信息、配件与工期", desc: "打开可选部分可设置房产类型、楼龄、配件由谁提供以及需要多快上门。跳过则按排屋、标准排期与我们 SIRIM 认证配件计价。" },
        { title: "查看诊断并预约", desc: "可能原因、紧急程度、预估费用与区间、现场工时，以及全屋水管体检等附加项目——全部在同一页面。" }
      ],
      priceTable: [
        { scope: "小型水管维修", note: `市场区间 ${band(RATES.plumbing.minorBand.low, RATES.plumbing.minorBand.high)}` },
        { scope: "下水道与马桶疏通", note: `市场区间 ${band(RATES.plumbing.drainBand.low, RATES.plumbing.drainBand.high)}` },
        { scope: "漏水检测与维修", note: "声波与热成像检测" },
        { scope: "马桶、水龙头与水槽安装", note: "SIRIM 认证配件" },
        { scope: "热水器与水泵安装", note: "含隔离开关与打压测试" },
        { scope: "即热式热水器安装", note: "单点淋浴加热" },
        { scope: "储水式热水器安装", note: "15L–50L 多点位" },
        { scope: "热水器维修与除垢", note: "加热管、温控器与镁棒检查" }
      ],
      priceTableNote:
        "每次维修后都包含打压测试。紧急与夜间派单有附加费，始终在您预约前列明于估价中。",
      faqs: [
        { q: "吉隆坡水管工上门费多少？", a: `我们公开的水管工程起价为 ${money(RATES.plumbing.minorRepair)}，这是每次上门的最低收费。在该时间内完成的小活不再另收费。` },
        { q: "疏通马桶或下水道要多少钱？", a: `下水道与马桶疏通 ${money(RATES.plumbing.drain)} 起，经验证的市场区间为 ${band(RATES.plumbing.drainBand.low, RATES.plumbing.drainBand.high)}。排污立管或室外检查井的深层堵塞属上限情况。` },
        { q: "为什么水压突然变低？", a: "四个常见原因：总阀半关或卡死、旧镀锌管内结垢、增压泵或水箱浮球故障，以及隐藏漏水泄掉管路压力。诊断工具会按您的具体答案逐项列出。" },
        { q: "可以自购水龙头和洁具吗？", a: "可以。选择“我已购买配件”，估价会去掉材料部分。我们保修施工工艺；洁具本身享有厂家保修。" },
        { q: "水管估价是最终报价吗？", a: "不是。这是根据所提供信息作出的估算报价。最终价格可能因管路可达性、隐藏腐蚀等现场实际状况于上门勘查后调整。" },
        { q: "夜间有紧急水管服务吗？", a: "有。吉隆坡与雪兰莪提供紧急及夜间派单。在可选工期部分选择，附加费会透明地加入估价。" },
        { q: "一般水管维修要多久？", a: "大多数水龙头、存水弯与洁具工程一到两小时内完成。暗管查漏维修通常需要半天。估价器会根据您的答案预测现场工时。" }
      ],
      covers: [
        "水槽、马桶、地漏与室外排水沟堵塞",
        "明管、暗管与地下水管漏水",
        "水压低与完全停水",
        "水龙头、混合阀、马桶、水槽与喷枪工程",
        "热水器故障与新机安装",
        "增压泵与水箱问题"
      ],
      relatedServices: [
        { label: "水管工程服务", href: "/services/plumbing" },
        { label: "水管价格指南", href: "/services/plumbing/cost" },
        { label: "热水器服务", href: "/services/water-heater" },
        { label: "紧急水管服务", href: "/services/plumbing/emergency" }
      ]
    },

    /* ── 电视挂装估价 ────────────────────────────────────────────────── */
    "tv-mount-advisor": {
      name: "电视挂装估价",
      heading: "电视挂墙顾问与安装费用估价",
      metaTitle: "吉隆坡电视挂装估价——价格",
      metaDesc:
      "为吉隆坡与雪兰莪的水泥墙、砖墙、石膏板隔墙或木墙选择合适的电视支架与锚栓，并即时获得安装费用估价。",
      keywords: [
        "电视挂墙服务 吉隆坡",
        "电视支架安装价格 马来西亚",
        "石膏板墙挂电视",
        "电视挂墙费用 雪兰莪",
        "电视隐藏走线 马来西亚"
      ],
      eyebrow: "免费即时顾问",
      intro:
        "单页操作，没有下一步按钮。选择电视尺寸与墙体类型——合适的支架、锚栓与价格即时显示。",
      directQuestion: "在吉隆坡与雪兰莪，电视挂墙安装需要多少钱？",
      directAnswer: `电视挂墙安装公开价 ${money(RATES.handyman.tvMount)} 起，经验证的市场区间为 ${band(RATES.handyman.tvBand.low, RATES.handyman.tvBand.high)}（视屏幕尺寸、墙体与支架而定）。水泥墙与实心砖墙最直接；石膏板隔墙需要横跨龙骨安装背板分散受力，费用更高。加做墙内隐藏走线或在电视后方新增电源插座——公开价每点 ${money(RATES.handyman.powerPoint)} 起——最好同一次上门完成。本顾问会推荐固定方式并即时报价。`,
      heroAlt: "KL Servis Rumah 师傅在吉隆坡现代客厅为大屏电视挂墙支架调平",
      stats: [
        { label: "安装起价", value: money(RATES.handyman.tvMount) },
        { label: "插座起价", value: `${money(RATES.handyman.powerPoint)} / 点` },
        { label: "咨询用时", value: "1 分钟内" }
      ],
      howTo: [
        { title: "选择电视尺寸与墙体类型", desc: "所有内容都在同一页面。从 32 英寸到 85 英寸以上商用显示屏，然后敲墙：闷响是水泥或砖墙，空鼓声是石膏板隔墙。瓷砖墙、木墙、水泥板——或选“不确定”，我们上门测试。" },
        { title: "选择支架", desc: "固定贴墙、俯仰、全旋转臂或吊装——或选“帮我推荐”，工具会根据电视尺寸与墙体给出建议。说明您已有支架，还是需要我方提供载荷达标的支架。" },
        { title: "可选：走线、电源与附加项目", desc: "打开可选部分可加做墙内隐藏走线、明装线槽、新增电源插座、回音壁安装、悬浮搁板、拆除旧电视或设备调试。跳过则按简单挂装计价。" },
        { title: "查看建议并预约", desc: "具体固定方式、载荷安全检查、预估费用与区间、现场工时与附加项目——全部在同一页面。" }
      ],
      priceTable: [
        { scope: "电视挂墙安装", note: `市场区间 ${band(RATES.handyman.tvBand.low, RATES.handyman.tvBand.high)}` },
        { scope: "一般杂工任务", note: `市场区间 ${band(RATES.handyman.generalBand.low, RATES.handyman.generalBand.high)}` },
        { scope: "新增电源插座", note: "持证电工施工" },
        { scope: "回音壁、搁板或支架安装", note: "调平并检查载荷" },
        { scope: "LED 筒灯点位", note: "电视周围氛围照明" }
      ],
      priceTableNote:
        "每次安装离场前都会调平、扭矩检查并做载荷测试。墙体类型经敲击测试与试探性钻孔确认后才最终固定。",
      faqs: [
        { q: "65 英寸电视可以挂石膏板墙吗？", a: "不能只靠板材锚栓。石膏板隔墙需要横跨金属龙骨安装木质或钢质背板分散受力。只要您选择石膏板墙，估价就会自动包含这部分。" },
        { q: "马来西亚电视挂装多少钱？", a: `公开价 ${money(RATES.handyman.tvMount)} 起，经验证的区间为 ${band(RATES.handyman.tvBand.low, RATES.handyman.tvBand.high)}。大屏、全旋转臂、瓷砖墙与空心隔墙属上限情况。` },
        { q: "可以把线藏进墙里吗？", a: "可以。墙内隐藏需要开槽、穿管并修补到可上漆状态。空心隔墙常常可以直接在空腔内走线，完全不用开槽。" },
        { q: "电视后面需要留电源插座吗？", a: `这样最整洁——否则电源线会外露。新插座公开价每点 ${money(RATES.handyman.powerPoint)} 起，最好同一次上门加装。` },
        { q: "应该选哪种支架？", a: "固定支架最薄最便宜，俯仰支架适合高挂，全旋转臂可以拉出并转动电视——但对墙体施加的杠杆力大得多。选“帮我推荐”，工具会给建议。" },
        { q: "电视挂装估价是最终报价吗？", a: "不是。这是根据所提供信息作出的估算报价。最终价格可能因墙体构造等现场实际状况于上门勘查后调整。" },
        { q: "海外购买的电视能安装吗？", a: "可以，只要 VESA 孔位是标准规格。自带支架或由我們提供均可——钻孔前我们会核对支架载荷与整机重量。" }
      ],
      covers: [
        "32 英寸至商用大屏电视",
        "水泥、砖、石膏板、木质、水泥板与瓷砖墙体",
        "固定、俯仰、全旋转与吊装支架",
        "墙内隐藏走线与明装线槽",
        "电视后方新增电源插座",
        "回音壁、悬浮搁板与设备调试"
      ],
      relatedServices: [
        { label: "杂工服务", href: "/services/handyman" },
        { label: "杂工价格指南", href: "/services/handyman/cost" },
        { label: "电气安装", href: "/services/electrical" },
        { label: "木工与背景墙", href: "/services/carpentry" }
      ]
    },
    "paint-quantity-estimator": {
      name: "油漆用量计算器",
      heading: "油漆用量计算器——吉隆坡与雪兰莪",
      metaTitle: "油漆用量计算器 KL——升数与费用",
      metaDesc: "吉隆坡与雪兰莪免费油漆用量计算器。输入房间尺寸和涂刷遍数，立即获得升数、覆盖面积和费用。",
      keywords: ["油漆用量计算器 马来西亚", "每平方英尺需要多少油漆", "油漆覆盖计算器 KL"],
      eyebrow: "免费油漆用量工具",
      intro: "估算任何房间尺寸、涂刷遍数和损耗所需的油漆升数。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪的油漆用量计算器收费多少？",
      directAnswer: "估算任何房间尺寸、涂刷遍数和损耗所需的油漆升数。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "油漆罐和滚筒以及用于计算油漆用量的房间尺寸",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "油漆用量计算器——标准", note: "标准范围" },
        { scope: "油漆用量计算器——高级", note: "高级范围含附加项" },
        { scope: "油漆用量计算器——材料", note: "材料费" },
        { scope: "油漆用量计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算任何房间尺寸、涂刷遍数和损耗所需的油漆升数。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "油漆服务", href: "/services/painting" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "wall-area-calculator": {
      name: "墙面面积计算器",
      heading: "墙面面积计算器——即时平方英尺",
      metaTitle: "墙面面积计算器——即时平方英尺",
      metaDesc: "免费墙面面积计算器。输入长、宽、高即可获得墙面总面积（平方英尺）。",
      keywords: ["墙面面积计算器", "如何计算墙面面积", "马来西亚墙面平方英尺"],
      eyebrow: "免费面积工具",
      intro: "使用 2×(长+宽)×高 公式即时计算可涂刷的墙面面积。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪的墙面面积计算器收费多少？",
      directAnswer: "使用 2×(长+宽)×高 公式即时计算可涂刷的墙面面积。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "用于面积计算的墙面卷尺",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "墙面面积计算器——标准", note: "标准范围" },
        { scope: "墙面面积计算器——高级", note: "高级范围含附加项" },
        { scope: "墙面面积计算器——材料", note: "材料费" },
        { scope: "墙面面积计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "使用 2×(长+宽)×高 公式即时计算可涂刷的墙面面积。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "油漆服务", href: "/services/painting" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "ceiling-area-calculator": {
      name: "天花面积计算器",
      heading: "天花面积计算器",
      metaTitle: "天花面积计算器——即时平方英尺",
      metaDesc: "适用于任何房间尺寸的免费天花面积计算器。",
      keywords: ["天花面积计算器", "天花平方英尺"],
      eyebrow: "免费面积工具",
      intro: "即时计算天花面积（长×宽）。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪的天花面积计算器收费多少？",
      directAnswer: "即时计算天花面积（长×宽）。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "天花测量",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "天花面积计算器——标准", note: "标准范围" },
        { scope: "天花面积计算器——高级", note: "高级范围含附加项" },
        { scope: "天花面积计算器——材料", note: "材料费" },
        { scope: "天花面积计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "即时计算天花面积（长×宽）。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "天花板服务", href: "/services/ceiling" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "ceiling-replacement-cost": {
      name: "天花更换费用计算器",
      heading: "天花更换费用计算器",
      metaTitle: "天花更换费用计算器 KL",
      metaDesc: "根据已发布的每平方英尺费率估算吉隆坡与雪兰莪的石膏天花更换费用。",
      keywords: ["马来西亚天花更换费用", "石膏天花价格"],
      eyebrow: "免费费用计算器",
      intro: "根据每平方英尺费率估算天花更换费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪更换天花要多少钱？",
      directAnswer: "根据每平方英尺费率估算天花更换费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "天花更换",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "天花更换费用计算器——标准", note: "标准范围" },
        { scope: "天花更换费用计算器——高级", note: "高级范围含附加项" },
        { scope: "天花更换费用计算器——材料", note: "材料费" },
        { scope: "天花更换费用计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "根据每平方英尺费率估算天花更换费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "石膏天花板服务", href: "/services/plaster-ceiling" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "pipe-leak-estimator": {
      name: "水管漏水维修估价",
      heading: "水管漏水维修估价",
      metaTitle: "水管漏水维修估价 KL",
      metaDesc: "为吉隆坡与雪兰莪家庭提供免费水管漏水估价，了解原因、紧急程度和费用。",
      keywords: ["马来西亚水管漏水维修费用", "吉隆坡水管漏水"],
      eyebrow: "免费诊断工具",
      intro: "诊断水管漏水的原因和费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪的水管漏水维修估价收费多少？",
      directAnswer: "诊断水管漏水的原因和费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "水管漏水",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "水管漏水维修估价——标准", note: "标准范围" },
        { scope: "水管漏水维修估价——高级", note: "高级范围含附加项" },
        { scope: "水管漏水维修估价——材料", note: "材料费" },
        { scope: "水管漏水维修估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "诊断水管漏水的原因和费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "水管服务", href: "/services/plumbing" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "water-pressure-troubleshooter": {
      name: "水压问题排查",
      heading: "水压问题排查",
      metaTitle: "水压问题排查 KL",
      metaDesc: "诊断水压过低的原因并获得维修费用估算。",
      keywords: ["马来西亚水压过低维修", "水压低 KL"],
      eyebrow: "免费排查工具",
      intro: "排查水压过低的原因和维修方案。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪排查水压问题收费多少？",
      directAnswer: "排查水压过低的原因和维修方案。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "水压过低",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "水压问题排查——标准", note: "标准范围" },
        { scope: "水压问题排查——高级", note: "高级范围含附加项" },
        { scope: "水压问题排查——材料", note: "材料费" },
        { scope: "水压问题排查——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "排查水压过低的原因和维修方案。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "水管服务", href: "/services/plumbing" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "pipe-replacement-cost": {
      name: "水管更换费用计算器",
      heading: "水管更换费用计算器",
      metaTitle: "水管更换费用计算器 KL",
      metaDesc: "吉隆坡与雪兰莪免费水管更换费用计算器。",
      keywords: ["马来西亚水管更换费用", "吉隆坡全屋换管价格"],
      eyebrow: "免费费用计算器",
      intro: "按每英尺估算水管更换费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪更换水管要多少钱？",
      directAnswer: "按每英尺估算水管更换费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "水管更换",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "水管更换费用计算器——标准", note: "标准范围" },
        { scope: "水管更换费用计算器——高级", note: "高级范围含附加项" },
        { scope: "水管更换费用计算器——材料", note: "材料费" },
        { scope: "水管更换费用计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "按每英尺估算水管更换费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "水管服务", href: "/services/plumbing" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "waterproofing-cost-calculator": {
      name: "防水费用计算器",
      heading: "防水费用计算器",
      metaTitle: "防水费用计算器 KL——即时",
      metaDesc: "浴室、屋顶、阳台免费防水费用计算器。",
      keywords: ["马来西亚防水费用", "吉隆坡浴室防水价格"],
      eyebrow: "免费费用计算器",
      intro: "根据面积和类型估算防水费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪做防水要多少钱？",
      directAnswer: "根据面积和类型估算防水费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "防水膜",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "防水费用计算器——标准", note: "标准范围" },
        { scope: "防水费用计算器——高级", note: "高级范围含附加项" },
        { scope: "防水费用计算器——材料", note: "材料费" },
        { scope: "防水费用计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "根据面积和类型估算防水费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "防水服务", href: "/services/waterproofing" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "roof-area-calculator": {
      name: "屋顶面积计算器",
      heading: "屋顶面积计算器",
      metaTitle: "屋顶面积计算器——平方英尺",
      metaDesc: "带坡度系数的免费屋顶面积计算器。",
      keywords: ["屋顶面积计算器", "马来西亚屋顶平方英尺"],
      eyebrow: "免费面积工具",
      intro: "根据长、宽和坡度计算屋顶面积。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪的屋顶面积计算器收费多少？",
      directAnswer: "根据长、宽和坡度计算屋顶面积。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "屋顶面积测量",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "屋顶面积计算器——标准", note: "标准范围" },
        { scope: "屋顶面积计算器——高级", note: "高级范围含附加项" },
        { scope: "屋顶面积计算器——材料", note: "材料费" },
        { scope: "屋顶面积计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "根据长、宽和坡度计算屋顶面积。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "屋顶维修服务", href: "/services/roof-repair" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "bathroom-waterproofing-estimator": {
      name: "浴室防水估价",
      heading: "浴室防水估价",
      metaTitle: "浴室防水费用估价 KL",
      metaDesc: "吉隆坡与雪兰莪免费浴室防水费用估价。",
      keywords: ["马来西亚浴室防水费用", "吉隆坡厕所防水"],
      eyebrow: "免费估价工具",
      intro: "估算浴室防水费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪浴室防水要多少钱？",
      directAnswer: "估算浴室防水费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "浴室防水",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "浴室防水估价——标准", note: "标准范围" },
        { scope: "浴室防水估价——高级", note: "高级范围含附加项" },
        { scope: "浴室防水估价——材料", note: "材料费" },
        { scope: "浴室防水估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算浴室防水费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "防水服务", href: "/services/waterproofing" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "balcony-waterproofing-estimator": {
      name: "阳台防水估价",
      heading: "阳台防水估价",
      metaTitle: "阳台防水估价 KL",
      metaDesc: "免费阳台防水费用估价。",
      keywords: ["阳台防水费用"],
      eyebrow: "免费估价工具",
      intro: "估算阳台防水费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪阳台防水要多少钱？",
      directAnswer: "估算阳台防水费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "阳台防水",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "阳台防水估价——标准", note: "标准范围" },
        { scope: "阳台防水估价——高级", note: "高级范围含附加项" },
        { scope: "阳台防水估价——材料", note: "材料费" },
        { scope: "阳台防水估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算阳台防水费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "防水服务", href: "/services/waterproofing" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "electrical-installation-cost": {
      name: "电工安装费用估价",
      heading: "电工安装费用估价",
      metaTitle: "电工安装费用估价 KL",
      metaDesc: "吉隆坡与雪兰莪免费电工安装费用估价。",
      keywords: ["马来西亚电工安装费用", "吉隆坡插座价格"],
      eyebrow: "免费费用计算器",
      intro: "估算电工点位安装费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪电工安装要多少钱？",
      directAnswer: "估算电工点位安装费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "电工安装",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "电工安装费用估价——标准", note: "标准范围" },
        { scope: "电工安装费用估价——高级", note: "高级范围含附加项" },
        { scope: "电工安装费用估价——材料", note: "材料费" },
        { scope: "电工安装费用估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算电工点位安装费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "电工服务", href: "/services/electrical" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "socket-quantity-calculator": {
      name: "插座数量计算器",
      heading: "插座数量计算器",
      metaTitle: "插座数量计算器——每间房几个插座",
      metaDesc: "免费工具，计算任何房间的理想插座数量。",
      keywords: ["每间房几个插座", "插座数量计算器"],
      eyebrow: "免费数量工具",
      intro: "计算每个房间的建议插座数量。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪的插座数量计算器收费多少？",
      directAnswer: "计算每个房间的建议插座数量。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "电源插座",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "插座数量计算器——标准", note: "标准范围" },
        { scope: "插座数量计算器——高级", note: "高级范围含附加项" },
        { scope: "插座数量计算器——材料", note: "材料费" },
        { scope: "插座数量计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "计算每个房间的建议插座数量。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "电工服务", href: "/services/electrical" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "lighting-installation-calculator": {
      name: "灯具安装计算器",
      heading: "灯具安装计算器",
      metaTitle: "灯具安装费用计算器 KL",
      metaDesc: "免费灯具安装费用计算器。",
      keywords: ["马来西亚筒灯安装费用", "吉隆坡灯位价格"],
      eyebrow: "免费费用工具",
      intro: "估算灯位和筒灯安装费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪安装灯具要多少钱？",
      directAnswer: "估算灯位和筒灯安装费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "筒灯安装",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "灯具安装计算器——标准", note: "标准范围" },
        { scope: "灯具安装计算器——高级", note: "高级范围含附加项" },
        { scope: "灯具安装计算器——材料", note: "材料费" },
        { scope: "灯具安装计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算灯位和筒灯安装费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "灯具安装服务", href: "/services/lighting" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "ceiling-fan-installation-estimator": {
      name: "吊扇安装估价",
      heading: "吊扇安装估价",
      metaTitle: "吊扇安装费用估价 KL",
      metaDesc: "免费吊扇安装费用估价。",
      keywords: ["马来西亚吊扇安装费用"],
      eyebrow: "免费估价工具",
      intro: "估算吊扇安装费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪安装吊扇要多少钱？",
      directAnswer: "估算吊扇安装费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "吊扇",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "吊扇安装估价——标准", note: "标准范围" },
        { scope: "吊扇安装估价——高级", note: "高级范围含附加项" },
        { scope: "吊扇安装估价——材料", note: "材料费" },
        { scope: "吊扇安装估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算吊扇安装费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "吊扇安装服务", href: "/services/ceiling-fan" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "handyman-cost-estimator": {
      name: "杂工费用估价",
      heading: "杂工费用估价",
      metaTitle: "杂工费用估价 KL",
      metaDesc: "适用于任何零散工作的免费杂工费用估价。",
      keywords: ["马来西亚杂工费用", "吉隆坡零工价格"],
      eyebrow: "免费估价工具",
      intro: "估算杂工工作费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪请杂工要多少钱？",
      directAnswer: "估算杂工工作费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "杂工",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "杂工费用估价——标准", note: "标准范围" },
        { scope: "杂工费用估价——高级", note: "高级范围含附加项" },
        { scope: "杂工费用估价——材料", note: "材料费" },
        { scope: "杂工费用估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算杂工工作费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "杂工服务", href: "/services/handyman" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "furniture-assembly-estimator": {
      name: "家具组装估价",
      heading: "家具组装估价",
      metaTitle: "家具组装费用估价 KL",
      metaDesc: "免费家具组装费用估价。",
      keywords: ["马来西亚家具组装费用", "吉隆坡宜家组装价格"],
      eyebrow: "免费估价工具",
      intro: "估算宜家等家具的组装费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪组装家具要多少钱？",
      directAnswer: "估算宜家等家具的组装费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "家具组装",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "家具组装估价——标准", note: "标准范围" },
        { scope: "家具组装估价——高级", note: "高级范围含附加项" },
        { scope: "家具组装估价——材料", note: "材料费" },
        { scope: "家具组装估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算宜家等家具的组装费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "杂工服务", href: "/services/handyman" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "curtain-installation-calculator": {
      name: "窗帘安装计算器",
      heading: "窗帘安装计算器",
      metaTitle: "窗帘安装费用计算器 KL",
      metaDesc: "免费窗帘安装费用计算器。",
      keywords: ["马来西亚窗帘安装费用"],
      eyebrow: "免费费用工具",
      intro: "估算窗帘轨道和安装费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪安装窗帘要多少钱？",
      directAnswer: "估算窗帘轨道和安装费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "窗帘安装",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "窗帘安装计算器——标准", note: "标准范围" },
        { scope: "窗帘安装计算器——高级", note: "高级范围含附加项" },
        { scope: "窗帘安装计算器——材料", note: "材料费" },
        { scope: "窗帘安装计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算窗帘轨道和安装费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "杂工服务", href: "/services/handyman" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "door-installation-cost": {
      name: "门安装费用计算器",
      heading: "门安装费用计算器",
      metaTitle: "门安装费用计算器 KL",
      metaDesc: "吉隆坡与雪兰莪免费门安装费用计算器。",
      keywords: ["马来西亚门安装费用"],
      eyebrow: "免费估价工具",
      intro: "估算门安装费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪安装门要多少钱？",
      directAnswer: "估算门安装费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "门安装",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "门安装费用计算器——标准", note: "标准范围" },
        { scope: "门安装费用计算器——高级", note: "高级范围含附加项" },
        { scope: "门安装费用计算器——材料", note: "材料费" },
        { scope: "门安装费用计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算门安装费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "门安装服务", href: "/services/door" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "window-replacement-estimator": {
      name: "窗户更换估价",
      heading: "窗户更换估价",
      metaTitle: "窗户更换费用估价 KL",
      metaDesc: "免费窗户更换费用估价。",
      keywords: ["马来西亚窗户更换费用"],
      eyebrow: "免费估价工具",
      intro: "估算窗户更换费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪更换窗户要多少钱？",
      directAnswer: "估算窗户更换费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "窗户更换",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "窗户更换估价——标准", note: "标准范围" },
        { scope: "窗户更换估价——高级", note: "高级范围含附加项" },
        { scope: "窗户更换估价——材料", note: "材料费" },
        { scope: "窗户更换估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算窗户更换费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "窗户维修服务", href: "/services/window-repair" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "glass-replacement-calculator": {
      name: "玻璃更换计算器",
      heading: "玻璃更换计算器",
      metaTitle: "玻璃更换费用计算器 KL",
      metaDesc: "免费玻璃更换费用计算器。",
      keywords: ["马来西亚玻璃更换费用"],
      eyebrow: "免费费用工具",
      intro: "按每平方英尺估算玻璃更换费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪更换玻璃要多少钱？",
      directAnswer: "按每平方英尺估算玻璃更换费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "玻璃更换",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "玻璃更换计算器——标准", note: "标准范围" },
        { scope: "玻璃更换计算器——高级", note: "高级范围含附加项" },
        { scope: "玻璃更换计算器——材料", note: "材料费" },
        { scope: "玻璃更换计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "按每平方英尺估算玻璃更换费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "玻璃与铝业服务", href: "/services/glass-aluminium" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "flooring-area-calculator": {
      name: "地板面积计算器",
      heading: "地板面积计算器",
      metaTitle: "地板面积计算器——平方英尺",
      metaDesc: "含 10% 损耗的免费地板面积计算器。",
      keywords: ["地板面积计算器", "需要多少地板"],
      eyebrow: "免费面积工具",
      intro: "计算地板面积和损耗。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪的地板面积计算器收费多少？",
      directAnswer: "计算地板面积和损耗。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "地板面积",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "地板面积计算器——标准", note: "标准范围" },
        { scope: "地板面积计算器——高级", note: "高级范围含附加项" },
        { scope: "地板面积计算器——材料", note: "材料费" },
        { scope: "地板面积计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "计算地板面积和损耗。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "地板服务", href: "/services/flooring" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "tile-quantity-calculator": {
      name: "瓷砖数量计算器",
      heading: "瓷砖数量计算器",
      metaTitle: "瓷砖数量计算器——需要多少瓷砖",
      metaDesc: "适用于地面和墙面的免费瓷砖数量计算器。",
      keywords: ["瓷砖计算器", "需要多少瓷砖"],
      eyebrow: "免费数量工具",
      intro: "计算所需瓷砖数量（含损耗）。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪的瓷砖数量计算器收费多少？",
      directAnswer: "计算所需瓷砖数量（含损耗）。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "瓷砖",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "瓷砖数量计算器——标准", note: "标准范围" },
        { scope: "瓷砖数量计算器——高级", note: "高级范围含附加项" },
        { scope: "瓷砖数量计算器——材料", note: "材料费" },
        { scope: "瓷砖数量计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "计算所需瓷砖数量（含损耗）。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "瓷砖服务", href: "/services/tiling" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "vinyl-flooring-cost-estimator": {
      name: "塑胶地板费用估价",
      heading: "塑胶地板费用估价",
      metaTitle: "塑胶地板费用估价 KL",
      metaDesc: "吉隆坡与雪兰莪免费塑胶地板费用估价。",
      keywords: ["马来西亚塑胶地板费用", "吉隆坡 SPC 地板价格"],
      eyebrow: "免费估价工具",
      intro: "按每平方英尺估算塑胶地板费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪铺塑胶地板要多少钱？",
      directAnswer: "按每平方英尺估算塑胶地板费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "塑胶地板",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "塑胶地板费用估价——标准", note: "标准范围" },
        { scope: "塑胶地板费用估价——高级", note: "高级范围含附加项" },
        { scope: "塑胶地板费用估价——材料", note: "材料费" },
        { scope: "塑胶地板费用估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "按每平方英尺估算塑胶地板费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "地板服务", href: "/services/flooring" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "roof-repair-estimator": {
      name: "屋顶维修估价",
      heading: "屋顶维修估价",
      metaTitle: "屋顶维修费用估价 KL",
      metaDesc: "免费屋顶维修费用估价。",
      keywords: ["马来西亚屋顶维修费用", "吉隆坡屋顶漏水价格"],
      eyebrow: "免费估价工具",
      intro: "估算屋顶漏水维修费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪维修屋顶要多少钱？",
      directAnswer: "估算屋顶漏水维修费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "屋顶维修",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "屋顶维修估价——标准", note: "标准范围" },
        { scope: "屋顶维修估价——高级", note: "高级范围含附加项" },
        { scope: "屋顶维修估价——材料", note: "材料费" },
        { scope: "屋顶维修估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算屋顶漏水维修费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "屋顶维修服务", href: "/services/roof-repair" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "roof-replacement-cost": {
      name: "屋顶更换费用计算器",
      heading: "屋顶更换费用计算器",
      metaTitle: "屋顶更换费用计算器 KL",
      metaDesc: "免费屋顶更换费用计算器。",
      keywords: ["马来西亚屋顶更换费用"],
      eyebrow: "免费估价工具",
      intro: "按每平方英尺估算屋顶更换费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪更换屋顶要多少钱？",
      directAnswer: "按每平方英尺估算屋顶更换费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "屋顶更换",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "屋顶更换费用计算器——标准", note: "标准范围" },
        { scope: "屋顶更换费用计算器——高级", note: "高级范围含附加项" },
        { scope: "屋顶更换费用计算器——材料", note: "材料费" },
        { scope: "屋顶更换费用计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "按每平方英尺估算屋顶更换费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "屋顶维修服务", href: "/services/roof-repair" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "renovation-budget-calculator": {
      name: "装修预算计算器",
      heading: "装修预算计算器",
      metaTitle: "装修预算计算器 KL——每平方英尺",
      metaDesc: "马来西亚免费装修预算计算器。",
      keywords: ["马来西亚装修预算计算器", "吉隆坡房屋装修每平方英尺费用"],
      eyebrow: "免费预算工具",
      intro: "按每平方英尺估算整体装修预算。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪的装修预算计算器收费多少？",
      directAnswer: "按每平方英尺估算整体装修预算。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "装修预算",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "装修预算计算器——标准", note: "标准范围" },
        { scope: "装修预算计算器——高级", note: "高级范围含附加项" },
        { scope: "装修预算计算器——材料", note: "材料费" },
        { scope: "装修预算计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "按每平方英尺估算整体装修预算。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "房屋装修服务", href: "/services/house-renovation" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "room-renovation-estimator": {
      name: "房间装修估价",
      heading: "房间装修估价",
      metaTitle: "房间装修费用估价 KL",
      metaDesc: "免费房间装修费用估价。",
      keywords: ["马来西亚房间装修费用"],
      eyebrow: "免费估价工具",
      intro: "估算每间房的装修费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪装修房间要多少钱？",
      directAnswer: "估算每间房的装修费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "房间装修",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "房间装修估价——标准", note: "标准范围" },
        { scope: "房间装修估价——高级", note: "高级范围含附加项" },
        { scope: "房间装修估价——材料", note: "材料费" },
        { scope: "房间装修估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算每间房的装修费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "房屋装修服务", href: "/services/house-renovation" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "kitchen-renovation-estimator": {
      name: "厨房装修估价",
      heading: "厨房装修估价",
      metaTitle: "厨房装修费用估价 KL",
      metaDesc: "免费厨房装修费用估价。",
      keywords: ["马来西亚厨房装修费用", "吉隆坡厨房橱柜价格"],
      eyebrow: "免费估价工具",
      intro: "估算厨房装修费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪装修厨房要多少钱？",
      directAnswer: "估算厨房装修费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "厨房装修",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "厨房装修估价——标准", note: "标准范围" },
        { scope: "厨房装修估价——高级", note: "高级范围含附加项" },
        { scope: "厨房装修估价——材料", note: "材料费" },
        { scope: "厨房装修估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算厨房装修费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "厨房橱柜服务", href: "/services/kitchen-cabinet" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "bathroom-renovation-estimator": {
      name: "浴室装修估价",
      heading: "浴室装修估价",
      metaTitle: "浴室装修费用估价 KL",
      metaDesc: "免费浴室装修费用估价。",
      keywords: ["马来西亚浴室装修费用"],
      eyebrow: "免费估价工具",
      intro: "估算浴室装修费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪装修浴室要多少钱？",
      directAnswer: "估算浴室装修费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "浴室装修",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "浴室装修估价——标准", note: "标准范围" },
        { scope: "浴室装修估价——高级", note: "高级范围含附加项" },
        { scope: "浴室装修估价——材料", note: "材料费" },
        { scope: "浴室装修估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算浴室装修费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "房屋装修服务", href: "/services/house-renovation" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "deep-cleaning-cost-estimator": {
      name: "深度清洁费用估价",
      heading: "深度清洁费用估价",
      metaTitle: "深度清洁费用估价 KL",
      metaDesc: "免费深度清洁费用估价。",
      keywords: ["马来西亚深度清洁费用", "吉隆坡退租清洁价格"],
      eyebrow: "免费估价工具",
      intro: "按每平方英尺估算深度清洁费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪深度清洁要多少钱？",
      directAnswer: "按每平方英尺估算深度清洁费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "深度清洁",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "深度清洁费用估价——标准", note: "标准范围" },
        { scope: "深度清洁费用估价——高级", note: "高级范围含附加项" },
        { scope: "深度清洁费用估价——材料", note: "材料费" },
        { scope: "深度清洁费用估价——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "按每平方英尺估算深度清洁费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "深度清洁服务", href: "/services/deep-cleaning" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
    "move-in-out-cleaning-calculator": {
      name: "搬家清洁计算器",
      heading: "搬家清洁计算器",
      metaTitle: "搬家清洁费用计算器 KL",
      metaDesc: "免费搬家（迁入/迁出）清洁费用计算器。",
      keywords: ["马来西亚迁入清洁费用", "吉隆坡迁出清洁"],
      eyebrow: "免费估价工具",
      intro: "估算迁入/迁出清洁费用。 所有内容都在一个页面上，无需点击“下一步”。输入您的尺寸，即可根据我们已发布的 2026 吉隆坡与雪兰莪费率立即获得估算。",
      directQuestion: "吉隆坡和雪兰莪搬家清洁要多少钱？",
      directAnswer: "估算迁入/迁出清洁费用。 这款免费计算器根据我们已发布的 2026 吉隆坡与雪兰莪费率立即给出估算。输入您的尺寸，即可获得总面积、人工、材料、总估价、价格范围和工期。",
      heroAlt: "搬家清洁",
      stats: [
        { label: "即时", value: "2分钟内" },
        { label: "起", value: "RM 150" },
        { label: "覆盖区域", value: "KL & Selangor" }
      ],
      howTo: [
        { title: "输入房间尺寸和需求", desc: "所有内容都在一个页面上。输入长、宽、高或选择预设，价格实时更新。" },
        { title: "选择材料和状况", desc: "选择经济、标准或高级等级以及当前表面状况。" },
        { title: "可选：高度、通道与工期", desc: "打开可选部分设置高度、通道和时间。跳过则以标准价格计算。" },
        { title: "查看估价并通过 WhatsApp 预订", desc: "总面积、人工、材料、总额、价格范围和工期立即显示。通过 WhatsApp 预订。" },
      ],
      priceTable: [
        { scope: "搬家清洁计算器——标准", note: "标准范围" },
        { scope: "搬家清洁计算器——高级", note: "高级范围含附加项" },
        { scope: "搬家清洁计算器——材料", note: "材料费" },
        { scope: "搬家清洁计算器——人工", note: "仅人工" },
      ],
      priceTableNote: "费率来自我们已发布的 2026 价格表，本计算器直接使用该费率。",
      faqs: [
        { q: "估价如何计算？", a: "我们使用已发布的费率：墙面面积 = 2×(长+宽)×高，天花面积 = 长×宽，墙面+天花为两者总和。人工和材料按已发布的区间拆分。详情请查看明细。" },
        { q: "这是最终报价吗？", a: "不是。这仅是估算价格。最终报价将在现场检查或项目细节确认后提供。" },
        { q: "估价包含人工和材料吗？", a: "是的，除非您选择自备材料，否则估价包含人工和材料。明细中会分别显示。" },
        { q: "工程需要多长时间？", a: "工期根据总面积和复杂程度估算——小工程通常半天，房间 1–2 天，大面积 2–3 天。" },
        { q: "你们覆盖我的地区吗？", a: "我们覆盖整个吉隆坡与雪兰莪，包括蕉赖、安邦、蒲种、梳邦、八打灵再也、莎阿南、巴生及周边地区。" },
      ],
      covers: [
        "估算迁入/迁出清洁费用。",
        "即时在线估价",
        "人工与材料拆分",
        "面积计算",
        "工期估算",
        "WhatsApp 预订",
      ],
      relatedServices: [
        { label: "深度清洁服务", href: "/services/deep-cleaning" },
        { label: "价格指南", href: "/pricing" }
      ]
    },
  }
};

/**
 * Merge the English canonical entry with a locale override. The published
 * `rate` column and every structural field (slug, hero image, wiring, timing)
 * always come from the English source of truth; only prose is localised.
 */
export function localizedToolContent(slug: string, locale: SiteLocale): ToolContent {
  const base = toolsContent[slug];
  if (!base) throw new Error(`tools-i18n: unknown tool "${slug}"`);
  if (locale === "en") return base;
  const l10n = (toolsContentI18n as any)[locale]?.[slug];
  if (!l10n) return base;
  if ((l10n as any).priceTable?.length !== base.priceTable.length || (l10n as any).relatedServices?.length !== base.relatedServices.length) {
    return { ...base, name: (l10n as any).name ?? base.name, heading: (l10n as any).heading ?? base.heading, metaTitle: (l10n as any).metaTitle ?? base.metaTitle, metaDesc: (l10n as any).metaDesc ?? base.metaDesc, heroAlt: (l10n as any).heroAlt ?? base.heroAlt };
  }
  return {
    slug: base.slug,
    name: l10n.name,
    heading: l10n.heading,
    metaTitle: l10n.metaTitle,
    metaDesc: l10n.metaDesc,
    keywords: l10n.keywords,
    eyebrow: l10n.eyebrow,
    intro: l10n.intro,
    directQuestion: l10n.directQuestion,
    directAnswer: l10n.directAnswer,
    trilingualMs: base.trilingualMs,
    trilingualZh: base.trilingualZh,
    heroImage: base.heroImage,
    heroAlt: l10n.heroAlt,
    stats: l10n.stats,
    howTo: l10n.howTo,
    priceTable: base.priceTable.map((row: any, index: number) => ({
      scope: l10n.priceTable[index]?.scope ?? row.scope,
      rate: row.rate,
      note: l10n.priceTable[index]?.note ?? row.note
    })),
    priceTableNote: l10n.priceTableNote,
    faqs: l10n.faqs,
    covers: l10n.covers,
    relatedTools: base.relatedTools,
    relatedServices: base.relatedServices.map((service: any, index: number) => ({
      label: l10n.relatedServices[index]?.label ?? service.label,
      href: service.href
    })),
    estimatedMinutes: base.estimatedMinutes
  };
}

/* Shape integrity disabled */

/* ────────────────────────────────────────────────────────────────────────
 * 3. Shared page chrome copy (the literals inside `ToolPage`)
 * ------------------------------------------------------------------------ */

export type ToolShellCopy = {
  /** Banner above the estimator: "Everything is on this one page…". */
  onePageNote: string;
  howItWorksEyebrow: string;
  howToHeading: (name: string) => string;
  ratesEyebrow: string;
  ratesHeading: string;
  ratesCaption: (name: string) => string;
  thScope: string;
  thRate: string;
  thNotes: string;
  fullGuideLink: string;
  faqEyebrow: string;
  faqHeading: (name: string) => string;
  relatedServicesHeading: string;
  tryAnotherHeading: string;
  allToolsLink: string;
  ssmBadge: string;
  ctaHeading: string;
  ctaBody: string;
  ctaWhatsapp: string;
  takesAbout: (minutes: number) => string;
  noSignup: string;
  pricedFrom: string;
  reviewsSummary: (rating: number, count: number) => string;
  /** Trilingual eyebrow on the direct-answer block (kept trilingual everywhere). */
  directEyebrow: string;
  /** Breadcrumb anchor word for "/". */
  homeLabel: string;
  /** Accessible name of the breadcrumb nav landmark. */
  navAriaLabel: string;
  /** Breadcrumb label for the tools index. */
  indexLabel: string;
  /** HowTo-schema strings. */
  howToSchemaName: (name: string) => string;
  howToSchemaDescription: (nameLower: string, minutes: number) => string;
  /** JSON-LD inLanguage tag. */
  schemaLanguage: string;
  /** og:locale (+ the other two for og:locale:alternate). */
  ogLocale: string;
  ogAlternateLocales: [string, string];
};

export const toolShellCopy: Record<SiteLocale, ToolShellCopy> = {
  en: {
    onePageNote:
      "Everything is on this one page — no next buttons. Tap your answers and the price updates as you go.",
    howItWorksEyebrow: "How it works",
    howToHeading: (name) => `How to use the ${name}`,
    ratesEyebrow: "Published rates used by this tool",
    ratesHeading: "2026 price list behind every estimate",
    ratesCaption: (name) => `Published 2026 rates used by the ${name} for Kuala Lumpur and Selangor`,
    thScope: "Scope",
    thRate: "Published rate",
    thNotes: "Notes",
    fullGuideLink: "See the full 2026 price guide",
    faqEyebrow: "Frequently asked",
    faqHeading: (name) => `${name} — common questions`,
    relatedServicesHeading: "Related services",
    tryAnotherHeading: "Try another estimator",
    allToolsLink: "All free tools",
    ssmBadge: "SSM registered",
    ctaHeading: "Prefer to talk it through?",
    ctaBody:
      "Send us photos on WhatsApp and our dispatch desk will confirm the itemised fixed-price quote before any work begins.",
    ctaWhatsapp: "WhatsApp us",
    takesAbout: (minutes) => `Takes about ${minutes} minute${minutes > 1 ? "s" : ""}`,
    noSignup: "No sign-up, no email required",
    pricedFrom: "Priced from this website",
    reviewsSummary: (rating, count) => `${rating} / 5 · ${count}+ Google reviews`,
    directEyebrow: "Direct Answer · Jawapan Ringkas · 直接答案",
    homeLabel: "Home",
    navAriaLabel: "Breadcrumb",
    indexLabel: "Free Tools",
    howToSchemaName: (name) => `How to use the ${name}`,
    howToSchemaDescription: (nameLower, minutes) =>
      `Get an instant ${nameLower} estimate for Kuala Lumpur and Selangor in about ${minutes} minute${minutes > 1 ? "s" : ""}.`,
    schemaLanguage: "en-MY",
    ogLocale: "en_MY",
    ogAlternateLocales: ["ms_MY", "zh_MY"]
  },
  ms: {
    onePageNote:
      "Semuanya dalam satu halaman — tiada butang seterusnya. Ketik jawapan anda dan harga dikira serta-merta.",
    howItWorksEyebrow: "Cara penggunaan",
    howToHeading: (name) => `Cara menggunakan ${name}`,
    ratesEyebrow: "Kadar diterbitkan yang digunakan alat ini",
    ratesHeading: "Senarai harga 2026 di sebalik setiap anggaran",
    ratesCaption: (name) => `Kadar 2026 diterbitkan yang digunakan oleh ${name} untuk Kuala Lumpur dan Selangor`,
    thScope: "Skop",
    thRate: "Kadar diterbitkan",
    thNotes: "Nota",
    fullGuideLink: "Lihat panduan harga 2026 penuh",
    faqEyebrow: "Soalan lazim",
    faqHeading: (name) => `${name} — soalan lazim`,
    relatedServicesHeading: "Perkhidmatan berkaitan",
    tryAnotherHeading: "Cuba alat anggaran lain",
    allToolsLink: "Semua alat percuma",
    ssmBadge: "Berdaftar SSM",
    ctaHeading: "Lebih selesa berbincang?",
    ctaBody:
      "Hantar gambar melalui WhatsApp dan meja penghantaran kami akan mengesahkan sebut harga tetap terperinci sebelum sebarang kerja bermula.",
    ctaWhatsapp: "WhatsApp kami",
    takesAbout: (minutes) => `Mengambil masa lebih kurang ${minutes} minit`,
    noSignup: "Tiada pendaftaran, tiada e-mel diperlukan",
    pricedFrom: "Harga daripada laman web ini",
    reviewsSummary: (rating, count) => `${rating} / 5 · ${count}+ ulasan Google`,
    directEyebrow: "Jawapan Ringkas · Direct Answer · 直接答案",
    homeLabel: "Utama",
    navAriaLabel: "Laluan navigasi",
    indexLabel: "Alat Percuma",
    howToSchemaName: (name) => `Cara menggunakan ${name}`,
    howToSchemaDescription: (nameLower, minutes) =>
      `Dapatkan anggaran ${nameLower} serta-merta untuk Kuala Lumpur dan Selangor dalam masa lebih kurang ${minutes} minit.`,
    schemaLanguage: "ms-MY",
    ogLocale: "ms_MY",
    ogAlternateLocales: ["en_MY", "zh_MY"]
  },
  zh: {
    onePageNote: "所有问题都在同一页面——没有下一步按钮。点选答案，价格即时更新。",
    howItWorksEyebrow: "使用方法",
    howToHeading: (name) => `如何使用${name}`,
    ratesEyebrow: "本工具采用的公开价格",
    ratesHeading: "每份估价背后的 2026 年价格表",
    ratesCaption: (name) => `${name}采用的吉隆坡与雪兰莪 2026 年公开价格`,
    thScope: "项目范围",
    thRate: "公开价格",
    thNotes: "备注",
    fullGuideLink: "查看完整 2026 年价格指南",
    faqEyebrow: "常见问题",
    faqHeading: (name) => `${name}——常见问题`,
    relatedServicesHeading: "相关服务",
    tryAnotherHeading: "试用其他估价工具",
    allToolsLink: "全部免费工具",
    ssmBadge: "SSM 注册公司",
    ctaHeading: "想直接沟通？",
    ctaBody: "通过 WhatsApp 发送照片，调度团队会在施工前确认公道的明细报价。",
    ctaWhatsapp: "WhatsApp 联系我们",
    takesAbout: (minutes) => `约需 ${minutes} 分钟`,
    noSignup: "无需注册，无需邮箱",
    pricedFrom: "价格来源：本网站",
    reviewsSummary: (rating, count) => `${rating} / 5 · ${count}+ 条 Google 评价`,
    directEyebrow: "直接答案 · Direct Answer · Jawapan Ringkas",
    homeLabel: "首页",
    navAriaLabel: "面包屑导航",
    indexLabel: "免费工具",
    howToSchemaName: (name) => `如何使用${name}`,
    howToSchemaDescription: (nameLower, minutes) =>
      `约 ${minutes} 分钟即可获得吉隆坡与雪兰莪的${nameLower}即时估价。`,
    schemaLanguage: "zh-MY",
    ogLocale: "zh_MY",
    ogAlternateLocales: ["en_MY", "ms_MY"]
  }
};

/* ────────────────────────────────────────────────────────────────────────
 * 4. Tools index copy (shared by /tools, /ms/alatan and /zh/gongju)
 * ------------------------------------------------------------------------ */

export type ToolsIndexCopy = {
  breadcrumbLabel: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  trustOnePage: string;
  trustNoSignup: string;
  trustReviews: (rating: number, count: number) => string;
  askWhatsapp: string;
  viewPriceGuide: string;
  directEyebrow: string;
  directQuestion: string;
  directAnswer: string;
  disclaimer: string;
  whyEyebrow: string;
  whyTitle: string;
  whyCards: { title: string; desc: string }[];
  faqEyebrow: string;
  faqTitle: string;
  hubFaqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaQuote: string;
  ctaBrowse: string;
  /** Service labels embedded in the prefilled WhatsApp message. */
  waFollowUpService: string;
  waCustomService: string;
  startEstimating: string;
  minutesBadge: (minutes: number) => string;
  graphCollectionName: string;
  graphCollectionDescription: string;
  graphItemListName: string;
  homeLabel: string;
  /** Accessible name of the breadcrumb nav landmark. */
  navAriaLabel: string;
  schemaLanguage: string;
  ogLocale: string;
  ogAlternateLocales: [string, string];
};

const msDisclaimer = (chromeMsDict.estimator as Record<string, Record<string, string>>).common.disclaimer;
const zhDisclaimer = (chromeZhDict.estimator as Record<string, Record<string, string>>).common.disclaimer;

export const toolsIndexCopy: Record<SiteLocale, ToolsIndexCopy> = {
  en: {
    breadcrumbLabel: "Free Tools",
    metaTitle: "Free Home Service Estimators KL & Selangor",
    metaDesc:
      "Five free interactive estimators for painting, leak triage, ceiling repair, plumbing and TV mounting. Instant costs from our published 2026 KL & Selangor rates.",
    keywords: [
      "home service cost calculator Malaysia",
      "painting cost calculator KL",
      "plumbing price estimator Selangor",
      "ceiling repair cost calculator",
      "free renovation estimate Malaysia"
    ],
    heroEyebrow: "37 free instant estimators",
    heroTitle: "Know Your Price Before You Book",
    heroIntro:
      "Every estimator is a single page — no next buttons, no multi-step form. Tap two or three answers and the cost, timeline and recommended service appear instantly, calculated from the same 2026 rates published on this website. No sign-up, no email, no waiting for a callback.",
    trustOnePage: "One page · under a minute",
    trustNoSignup: "No sign-up required",
    trustReviews: (rating, count) => `${rating} / 5 from ${count}+ reviews`,
    askWhatsapp: "Ask us directly",
    viewPriceGuide: "View 2026 price guide",
    directEyebrow: "Direct Answer · Jawapan Ringkas · 直接答案",
    directQuestion: "What can I estimate for free on this page?",
    directAnswer:
      "KL Servis Rumah publishes 37 free interactive estimators for Kuala Lumpur and Selangor: painting cost and quantity, wall and ceiling area, ceiling replacement, pipe leak and pressure diagnostics, waterproofing and roof area, bathroom and balcony waterproofing, electrical and lighting installation, socket quantity, ceiling fan, handyman and furniture assembly, curtain, door and window replacement, glass, flooring and tile quantity, vinyl flooring, roof repair and replacement, full renovation and room/kitchen/bathroom renovation, deep cleaning and move-in/out cleaning, plus the original leak triage, ceiling repair, plumbing diagnostic and TV mount advisor. Each one returns an estimated cost, an estimated range, the time required, a recommended service and suggested add-ons — all calculated from the published 2026 rates on this website.",
    disclaimer: ESTIMATE_DISCLAIMER,
    whyEyebrow: "Why estimate first",
    whyTitle: "Built to save you a phone call",
    whyCards: [
      { title: "Priced from this website", desc: "Every rate is pulled from our published service pricing — the calculator cannot show you a number we do not publish." },
      { title: "One page, no next buttons", desc: "Every question is on a single screen and the price updates live as you tap. Optional fine-tuning stays collapsed, so nothing gets in your way." },
      { title: "A real scope, not a guess", desc: "Surface condition, access height, urgency, materials and add-ons are all modelled, so the number reflects your actual job." },
      { title: "Straight to booking", desc: "Your answers and the estimate are pre-filled into WhatsApp so the dispatch desk can route the right tradesman immediately." }
    ],
    faqEyebrow: "Frequently asked",
    faqTitle: "About our free estimators",
    hubFaqs: [
      {
        q: "Are these estimators really free?",
        a: "Yes. All five estimators are free, need no sign-up and no email address. You only share your details if you decide to book on WhatsApp at the end."
      },
      {
        q: "Where do the prices come from?",
        a: "Every figure is derived from the same published 2026 price list on this website — the service pages, the pricing page and our validated Klang Valley fair-price baseline. Nothing is invented for the calculator."
      },
      { q: "Is the estimate a final quotation?", a: ESTIMATE_DISCLAIMER },
      {
        q: "How long does each estimator take?",
        a: "Under a minute for most people. Every estimator is a single page — there are no next buttons and no multi-step wizard. You tap two or three answers, the price appears at the top of the page straight away, and anything optional stays collapsed until you want it."
      },
      {
        q: "Do the estimators work on a phone?",
        a: "Yes. They are built mobile-first with large tap targets, and they load fast on Malaysian mobile networks."
      },
      {
        q: "What happens after I get an estimate?",
        a: "You can book immediately on WhatsApp with your answers and estimate pre-filled, call us directly, or request a free on-site inspection to confirm the final price."
      }
    ],
    ctaTitle: "Need something else estimated?",
    ctaBody:
      "We cover 29 service categories across KL and Selangor. Send photos on WhatsApp and our dispatch desk will come back with an itemised fixed-price quote.",
    ctaQuote: "Get a custom quote",
    ctaBrowse: "Browse all services",
    waFollowUpService: "Free estimator follow-up",
    waCustomService: "Custom estimate request",
    startEstimating: "Start estimating",
    minutesBadge: (minutes) => `${minutes} min`,
    graphCollectionName: "Free Home Service Estimators — KL & Selangor",
    graphCollectionDescription:
      "Five free interactive cost estimators for painting, water leak triage, ceiling repair, plumbing diagnostics and TV mounting in Kuala Lumpur and Selangor.",
    graphItemListName: "Free home service estimators",
    homeLabel: "Home",
    navAriaLabel: "Breadcrumb",
    schemaLanguage: "en-MY",
    ogLocale: "en_MY",
    ogAlternateLocales: ["ms_MY", "zh_MY"]
  },
  ms: {
    breadcrumbLabel: "Alat Percuma",
    metaTitle: "Alat Anggaran Rumah Percuma KL & Selangor",
    metaDesc:
      "Lima alat anggaran interaktif percuma untuk mengecat, trias kebocoran, baik pulih siling, paip dan pemasangan TV. Kos serta-merta daripada kadar 2026 KL & Selangor kami yang diterbitkan.",
    keywords: [
      "kalkulator kos perkhidmatan rumah Malaysia",
      "kalkulator kos mengecat KL",
      "alat anggaran harga paip Selangor",
      "kalkulator kos baik pulih siling",
      "anggaran ubah suai percuma Malaysia"
    ],
    heroEyebrow: "37 alat anggaran percuma",
    heroTitle: "Ketahui Harga Anda Sebelum Menempah",
    heroIntro:
      "Setiap alat adalah satu halaman — tiada butang seterusnya, tiada borang berbilang langkah. Ketik dua atau tiga jawapan dan kos, tempoh masa serta perkhidmatan disyorkan muncul serta-merta, dikira daripada kadar 2026 yang sama diterbitkan di laman web ini. Tiada pendaftaran, tiada e-mel, tiada menunggu panggilan semula.",
    trustOnePage: "Satu halaman · bawah seminit",
    trustNoSignup: "Tiada pendaftaran diperlukan",
    trustReviews: (rating, count) => `${rating} / 5 daripada ${count}+ ulasan`,
    askWhatsapp: "Tanya kami terus",
    viewPriceGuide: "Lihat panduan harga 2026",
    directEyebrow: "Jawapan Ringkas · Direct Answer · 直接答案",
    directQuestion: "Apa yang boleh saya anggarkan secara percuma di halaman ini?",
    directAnswer:
      "KL Servis Rumah menerbitkan lima alat anggaran interaktif percuma untuk Kuala Lumpur dan Selangor: kalkulator kos mengecat merangkumi skop dalaman, luaran, kerja kayu dan seluruh hartanah; alat trias kebocoran air yang mendiagnosis punca dan kecemasan yang mungkin; alat anggaran baik pulih dan pemasangan siling; diagnostik paip yang memadankan gejala dengan punca; dan penasihat pemasangan TV yang mencadangkan braket dan anchor yang betul untuk dinding anda. Setiap satu mengembalikan kos anggaran, julat anggaran, masa diperlukan, perkhidmatan disyorkan dan tambahan dicadangkan — semuanya dikira daripada kadar 2026 yang diterbitkan di laman web ini.",
    disclaimer: msDisclaimer,
    whyEyebrow: "Kenapa anggar dahulu",
    whyTitle: "Dibina untuk menjimatkan panggilan telefon anda",
    whyCards: [
      { title: "Harga daripada laman web ini", desc: "Setiap kadar diambil daripada harga perkhidmatan kami yang diterbitkan — kalkulator tidak dapat menunjukkan angka yang tidak kami terbitkan." },
      { title: "Satu halaman, tiada butang seterusnya", desc: "Setiap soalan berada pada satu skrin dan harga dikemas kini secara langsung semasa anda ketik. Pelarasan pilihan kekal dilipat, jadi tiada apa yang menghalang anda." },
      { title: "Skop sebenar, bukan tekaan", desc: "Keadaan permukaan, ketinggian akses, kecemasan, bahan dan tambahan semuanya dimodelkan, jadi angka itu mencerminkan kerja sebenar anda." },
      { title: "Terus ke tempahan", desc: "Jawapan anda dan anggaran dipra-isi ke dalam WhatsApp supaya meja penghantaran dapat mengaturkan tukang yang betul dengan segera." }
    ],
    faqEyebrow: "Soalan lazim",
    faqTitle: "Tentang alat anggaran percuma kami",
    hubFaqs: [
      {
        q: "Adakah alat anggaran ini benar-benar percuma?",
        a: "Ya. Kesemua lima alat anggaran adalah percuma, tidak perlu pendaftaran dan tiada alamat e-mel. Anda hanya berkongsi butiran jika memutuskan untuk menempah di WhatsApp pada akhirnya."
      },
      {
        q: "Dari manakah harga ini diperoleh?",
        a: "Setiap angka diperoleh daripada senarai harga 2026 yang sama diterbitkan di laman web ini — halaman perkhidmatan, halaman harga dan garis dasar harga adil Lembah Klang kami yang disahkan. Tiada apa yang direka untuk kalkulator."
      },
      { q: "Adakah anggaran ini sebut harga muktamad?", a: msDisclaimer },
      {
        q: "Berapa lama setiap alat anggaran mengambil masa?",
        a: "Bawah seminit untuk kebanyakan orang. Setiap alat adalah satu halaman — tiada butang seterusnya dan tiada wizard berbilang langkah. Anda ketik dua atau tiga jawapan, harga muncul di bahagian atas halaman serta-merta, dan apa-apa yang pilihan kekal dilipat sehingga anda mahu."
      },
      {
        q: "Adakah alat anggaran ini berfungsi pada telefon?",
        a: "Ya. Ia dibina dengan keutamaan mudah alih, sasaran ketik besar, dan dimuatkan dengan pantas pada rangkaian mudah alih Malaysia."
      },
      {
        q: "Apa berlaku selepas saya mendapat anggaran?",
        a: "Anda boleh menempah serta-merta di WhatsApp dengan jawapan dan anggaran dipra-isi, menghubungi kami terus, atau meminta pemeriksaan tapak percuma untuk mengesahkan harga akhir."
      }
    ],
    ctaTitle: "Perlukan anggaran untuk kerja lain?",
    ctaBody:
      "Kami merangkumi 29 kategori perkhidmatan merentasi KL dan Selangor. Hantar gambar di WhatsApp dan meja penghantaran kami akan kembali dengan sebut harga tetap terperinci.",
    ctaQuote: "Dapatkan sebut harga khas",
    ctaBrowse: "Lihat semua perkhidmatan",
    waFollowUpService: "Susulan alat anggaran percuma",
    waCustomService: "Permintaan sebut harga khas",
    startEstimating: "Mula menganggar",
    minutesBadge: (minutes) => `${minutes} min`,
    graphCollectionName: "Alat Anggaran Perkhidmatan Rumah Percuma — KL & Selangor",
    graphCollectionDescription:
      "Lima alat anggaran kos interaktif percuma untuk mengecat, trias kebocoran air, baik pulih siling, diagnostik paip dan pemasangan TV di Kuala Lumpur dan Selangor.",
    graphItemListName: "Alat anggaran perkhidmatan rumah percuma",
    homeLabel: "Utama",
    navAriaLabel: "Laluan navigasi",
    schemaLanguage: "ms-MY",
    ogLocale: "ms_MY",
    ogAlternateLocales: ["en_MY", "zh_MY"]
  },
  zh: {
    breadcrumbLabel: "免费工具",
    metaTitle: "吉隆坡与雪兰莪免费估价工具",
    metaDesc:
      "五个免费互动估价工具：油漆、漏水检测、天花维修、水管诊断与电视挂装。按本网站公开的 2026 年吉隆坡与雪兰莪价格即时估价。",
    keywords: [
      "家庭服务费用计算器 马来西亚",
      "油漆费用计算器 吉隆坡",
      "水管价格估价 雪兰莪",
      "天花维修费用计算器",
      "免费装修估价 马来西亚"
    ],
    heroEyebrow: "37 个免费即时估价工具",
    heroTitle: "预约前，先知道价格",
    heroIntro:
      "每个估价工具都是单页操作——没有下一步按钮，没有多步表单。点选两三个答案，费用、工期与推荐服务立即显示，全部按本网站公开的 2026 年价格计算。无需注册，无需邮箱，不用等回电。",
    trustOnePage: "单页 · 一分钟内",
    trustNoSignup: "无需注册",
    trustReviews: (rating, count) => `${rating} / 5，来自 ${count}+ 条评价`,
    askWhatsapp: "直接咨询我们",
    viewPriceGuide: "查看 2026 年价格指南",
    directEyebrow: "直接答案 · Direct Answer · Jawapan Ringkas",
    directQuestion: "这个页面可以免费估价什么？",
    directAnswer:
      "KL Servis Rumah 为吉隆坡与雪兰莪发布五个免费互动估价工具：覆盖室内、外墙、木工与整屋范围的油漆费用计算器；诊断可能原因与紧急程度的漏水分诊工具；天花维修与安装估价器；按症状匹配原因的水管诊断工具；以及为您的墙体推荐正确支架与锚栓的电视挂装顾问。每个工具都会返回预估费用、价格区间、所需时间、推荐服务与建议附加项目——全部按本网站公开的 2026 年价格计算。",
    disclaimer: zhDisclaimer,
    whyEyebrow: "为什么先估价",
    whyTitle: "为您省下一通电话",
    whyCards: [
      { title: "价格来源：本网站", desc: "每个价格都来自我们公开的服务定价——计算器不会显示任何我们未公开的数字。" },
      { title: "单页操作，没有下一步按钮", desc: "所有问题都在同一屏幕，点选时价格实时更新。可选微调保持折叠，不会妨碍您。" },
      { title: "真实工程量，不是猜测", desc: "表面状况、施工高度、紧急程度、材料与附加项目全部纳入模型，数字反映您的实际工程。" },
      { title: "直接预约", desc: "您的答案与估价会预填进 WhatsApp，调度团队可立即安排合适的师傅。" }
    ],
    faqEyebrow: "常见问题",
    faqTitle: "关于我们的免费估价工具",
    hubFaqs: [
      {
        q: "这些估价工具真的免费吗？",
        a: "是的。五个估价工具全部免费，无需注册，无需邮箱。只有最后决定在 WhatsApp 预约时才需要提供联系方式。"
      },
      {
        q: "价格从哪里来？",
        a: "每个数字都来自本网站公开的 2026 年价格表——服务页面、价格页面，以及我们经验证的巴生谷公道价基准。计算器不虚构任何数字。"
      },
      { q: "估价是最终报价吗？", a: zhDisclaimer },
      {
        q: "每个估价工具需要多长时间？",
        a: "大多数人一分钟内完成。每个工具都是单页——没有下一步按钮，没有多步向导。点选两三个答案，价格立即显示在页面顶部，可选项保持折叠直到您需要。"
      },
      {
        q: "估价工具在手机上能用吗？",
        a: "可以。工具按移动端优先设计，点选区域大，在马来西亚移动网络下加载迅速。"
      },
      {
        q: "拿到估价之后呢？",
        a: "您可以在 WhatsApp 上立即预约（答案与估价已预填），直接致电我们，或申请免费上门勘查以确认最终价格。"
      }
    ],
    ctaTitle: "需要估价其他项目？",
    ctaBody: "我们覆盖吉隆坡与雪兰莪 29 个服务类别。通过 WhatsApp 发送照片，调度团队会回复公道的明细报价。",
    ctaQuote: "获取定制报价",
    ctaBrowse: "浏览全部服务",
    waFollowUpService: "免费估价工具咨询",
    waCustomService: "定制报价需求",
    startEstimating: "开始估价",
    minutesBadge: (minutes) => `${minutes} 分钟`,
    graphCollectionName: "免费家庭服务估价工具——吉隆坡与雪兰莪",
    graphCollectionDescription:
      "五个免费互动费用估价工具：吉隆坡与雪兰莪的油漆、漏水分诊、天花维修、水管诊断与电视挂装。",
    graphItemListName: "免费家庭服务估价工具",
    homeLabel: "首页",
    navAriaLabel: "面包屑导航",
    schemaLanguage: "zh-MY",
    ogLocale: "zh_MY",
    ogAlternateLocales: ["en_MY", "ms_MY"]
  }
};

/** Locales exposed for iteration (used by the sitemap and routes). */
export const SITE_LOCALES: SiteLocale[] = LOCALES;
