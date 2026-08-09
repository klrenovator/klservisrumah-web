import type { GenericContentPage } from "./content-data";

// ─── Detailed hand-written MS translations (9 slugs) ───
export const contentI18n: Record<string, Partial<GenericContentPage>> = {
  "interior-painting-kl": {
    title: "Pengecatan Dalaman di KL",
    intro: "Panduan lengkap untuk pengecatan dinding dalaman, persediaan, primer, cat boleh dicuci, pemilihan warna, dan penjadualan bilik demi bilik.",
    category: "Kluster Perkhidmatan",
  },
  "exterior-painting-kl": {
    title: "Pengecatan Luar di KL",
    intro: "Panduan praktikal untuk sistem salutan luar yang tahan pendedahan UV Klang Valley, hujan, alga, dan retak batu.",
    category: "Kluster Perkhidmatan",
  },
  "leak-repair-kl": {
    title: "Pembaikan Kebocoran di KL",
    intro: "Panduan tempatan untuk kebocoran paip yang kelihatan dan tersembunyi, pengesanan kebocoran, penggantian paip, dan ujian tekanan sebelum serahan.",
    category: "Kluster Perkhidmatan",
  },
  "installation-kl": {
    title: "Pemasangan Paip di KL",
    intro: "Panduan pemilik rumah untuk paip, sinki, mangkuk tandas, pemanas air, pam, dan penggantian aksesori di rumah Malaysia.",
    category: "Kluster Perkhidmatan",
  },
  "how-to-choose-house-painter-kl": {
    title: "Cara Memilih Tukang Cat Rumah di KL",
    intro: "Panduan praktikal untuk memilih tukang cat yang berkualiti di KL dan Selangor.",
    category: "Panduan Pemilihan",
  },
  "paint-brand-comparison-nippon-vs-dulux-vs-jotun": {
    title: "Perbandingan Jenama Cat: Nippon vs Dulux vs Jotun",
    intro: "Perbandingan praktikal antara jenama cat utama di Malaysia berdasarkan ketahanan, harga, dan kualiti.",
    category: "Perbandingan",
  },
  "pu-grouting-vs-tile-hacking": {
    title: "Grouting PU vs Memecah Jubin",
    intro: "Perbandingan kaedah kalis air tanpa memecah jubin berbanding kaedah tradisional di KL.",
    category: "Perbandingan",
  },
  "painting-maintenance-schedule": {
    title: "Jadual Penyelenggaraan Pengecatan",
    intro: "Panduan praktikal penyelenggaraan cat rumah di Malaysia mengikut keutamaan dan kekerapan.",
    category: "Panduan Penyelenggaraan",
  },
};

// ─── Detailed hand-written ZH translations (6 slugs) ───
export const contentI18nZh: Record<string, Partial<GenericContentPage>> = {
  "interior-painting-kl": {
    title: "吉隆坡室内油漆",
    intro: "室内墙面油漆、准备工作、底漆、可洗涂料、颜色选择与房间排程的完整指南。",
    category: "服务集群",
  },
  "exterior-painting-kl": {
    title: "吉隆坡外墙油漆",
    intro: "应对雪兰莪紫外线、雨水、藻类与细微石材裂缝的外墙涂装系统实用指南。",
    category: "服务集群",
  },
  "leak-repair-kl": {
    title: "吉隆坡漏水维修",
    intro: "可见与隐藏管道漏水、漏水检测、管道更换与交接前压力测试的本地指南。",
    category: "服务集群",
  },
  "how-to-choose-house-painter-kl": {
    title: "如何在吉隆坡选择油漆工",
    intro: "为吉隆坡与雪兰莪业主提供选择优质油漆工的实用标准。",
    category: "选择指南",
  },
  "pu-grouting-vs-tile-hacking": {
    title: "PU注浆与砸瓷砖比较",
    intro: "吉隆坡无砸瓷砖防水方法与传统方法的比较。",
    category: "比较",
  },
  "painting-maintenance-schedule": {
    title: "油漆维护时间表",
    intro: "马来西亚住宅油漆维护的实用时间表，按紧急程度与频率分类。",
    category: "维护指南",
  },
};

// ═══════════════════════════════════════════════════════════════════════
// FULL MS DICTIONARY — covers ALL 164 unique content-page slugs
// ═══════════════════════════════════════════════════════════════════════
export const contentI18nMsFull: Record<string, Partial<{ title: string; intro: string; category: string }>> = {

  // ─── Service Cluster (15) ───
  "interior-painting-kl": { title: "Pengecatan Dalaman di KL", intro: "Panduan lengkap pengecatan dinding dalaman, persediaan, primer, cat boleh dicuci, dan pemilihan warna.", category: "Kluster Perkhidmatan" },
  "exterior-painting-kl": { title: "Pengecatan Luar di KL", intro: "Panduan sistem salutan luar yang tahan UV Klang Valley, hujan, alga, dan retak batu.", category: "Kluster Perkhidmatan" },
  "commercial-painting-kl": { title: "Pengecatan Komersial di KL", intro: "Panduan pengecatan pejabat, kedai, dan premis komersial dengan jadual selepas jam kerja.", category: "Kluster Perkhidmatan" },
  "leak-repair-kl": { title: "Pembaikan Kebocoran di KL", intro: "Panduan pengesanan dan pembaikan kebocoran paip yang kelihatan dan tersembunyi.", category: "Kluster Perkhidmatan" },
  "installation-kl": { title: "Pemasangan Paip di KL", intro: "Panduan pemasangan sinki, mangkuk tandas, pemanas air, pam, dan aksesori paip.", category: "Kluster Perkhidmatan" },
  "emergency-plumbing-kl": { title: "Paip Kecemasan di KL", intro: "Panduan tindak balas kecemasan paip — paip pecah, kebocoran besar, tandas tersekat.", category: "Kluster Perkhidmatan" },
  "ceiling-installation-kl": { title: "Pemasangan Siling di KL", intro: "Panduan pemasangan papan gypsum, bingkai GI, L-box, dan kemasan skim.", category: "Kluster Perkhidmatan" },
  "repair-kl": { title: "Pembaikan Siling di KL", intro: "Panduan pembaikan siling retak, bernoda, melendut, atau rosak akibat air.", category: "Kluster Perkhidmatan" },
  "partition-kl": { title: "Dinding Sekatan di KL", intro: "Panduan dinding sekatan gypsum, bilik pejabat, penebat bunyi, dan papan tahan api.", category: "Kluster Perkhidmatan" },
  "bathroom-kl": { title: "Kalis Air Bilik Air di KL", intro: "Panduan kalis air bilik air lengkap — penutup tanpa memecah, grouting PU, dan ujian takungan.", category: "Kluster Perkhidmatan" },
  "roof-kl": { title: "Kalis Air Bumbung di KL", intro: "Panduan kalis air bumbung dan slab konkrit — membran, pengesan retak, dan pendedahan UV.", category: "Kluster Perkhidmatan" },
  "pu-grouting-kl": { title: "Grouting PU di KL", intro: "Panduan suntikan poliuretana untuk retak konkrit aktif dan kebocoran antara tingkat.", category: "Kluster Perkhidmatan" },
  "tv-mounting-kl": { title: "Pemasangan TV di KL", intro: "Panduan pemasangan TV selamat pada dinding batu, konkrit, dan gypsum.", category: "Kluster Perkhidmatan" },
  "door-lock-kl": { title: "Pembaikan Pintu & Kunci di KL", intro: "Panduan pembaikan pintu melendut, engsel, kunci, dan kunci pintar.", category: "Kluster Perkhidmatan" },
  "furniture-assembly-kl": { title: "Pemasangan Perabot di KL", intro: "Panduan pemasangan perabot rata, penambat dinding, dan pelarasan.", category: "Kluster Perkhidmatan" },

  // ─── Painting guides (2) ───
  "how-to-choose-house-painter-kl": { title: "Cara Memilih Tukang Cat Rumah di KL", intro: "Panduan praktikal memilih tukang cat berkualiti — isyarat harga, kualiti bahan, dan soalan waranti.", category: "Pengecatan" },
  "paint-brand-comparison-nippon-vs-dulux-vs-jotun": { title: "Perbandingan Jenama Cat: Nippon vs Dulux vs Jotun", intro: "Perbandingan ketahanan, harga, dan kualiti jenama cat utama Malaysia.", category: "Pengecatan" },

  // ─── Plumbing guides (2) ───
  "how-to-choose-plumber-kl": { title: "Cara Memilih Tukang Paip di KL", intro: "Panduan memilih tukang paip berlesen — isyarat harga, kualiti bahan, dan soalan waranti.", category: "Paip" },
  "plumbing-pipe-comparison-pvc-vs-copper-vs-ppr": { title: "Perbandingan Paip: PVC vs Copper vs PPR", intro: "Perbandingan jenis paip untuk rumah Malaysia.", category: "Paip" },

  // ─── Waterproofing guides (2) ───
  "how-to-choose-waterproofing-contractor-kl": { title: "Cara Memilih Kontraktor Kalis Air di KL", intro: "Panduan memilih kontraktor kalis air berkualiti — isyarat harga, kualiti bahan, dan soalan waranti.", category: "Kalis Air" },
  "waterproofing-method-comparison-pu-vs-membrane": { title: "Perbandingan Kaedah Kalis Air: PU vs Membran", intro: "Perbandingan suntikan PU vs membran penuh.", category: "Kalis Air" },

  // ─── Ceiling guides (2) ───
  "how-to-choose-ceiling-contractor-kl": { title: "Cara Memilih Kontraktor Siling di KL", intro: "Panduan memilih kontraktor siling berkualiti — isyarat harga, kualiti bahan, dan soalan waranti.", category: "Siling" },
  "ceiling-material-comparison-plaster-vs-gypsum": { title: "Perbandingan Bahan Siling: Plaster vs Gypsum", intro: "Perbandingan plaster ceiling vs gypsum board.", category: "Siling" },

  // ─── Handyman guides (2) ───
  "how-to-choose-handyman-kl": { title: "Cara Memilih Tukang Serba di KL", intro: "Panduan memilih tukang serba berkualiti — isyarat harga, kualiti bahan, dan soalan waranti.", category: "Tukang Serba" },
  "tv-mount-types-comparison-fixed-vs-tilt-vs-full-motion": { title: "Jenis Pemasangan TV: Fixed vs Tilt vs Full-Motion", intro: "Perbandingan jenis bracket TV untuk rumah Malaysia.", category: "Tukang Serba" },

  // ─── Comparison (15) ───
  "pu-grouting-vs-tile-hacking": { title: "Grouting PU vs Memecah Jubin", intro: "Perbandingan kaedah kalis air tanpa memecah jubin berbanding tradisional.", category: "Perbandingan" },
  "plaster-ceiling-vs-gypsum-ceiling": { title: "Siling Plaster vs Siling Gypsum", intro: "Perbandingan bahan siling — kos, ketahanan, dan kesesuaian.", category: "Perbandingan" },
  "nippon-paint-vs-dulux-paint": { title: "Cat Nippon vs Dulux", intro: "Perbandingan jenama cat utama Malaysia.", category: "Perbandingan" },
  "acrylic-vs-cementitious-waterproofing": { title: "Kalis Air Akrilik vs Cement", intro: "Perbandingan jenis kalis air untuk bilik air dan bumbung.", category: "Perbandingan" },
  "pvc-pipes-vs-copper-pipes": { title: "Paip PVC vs Paip Copper", intro: "Perbandingan jenis paip — kos, ketahanan, dan kesesuaian.", category: "Perbandingan" },
  "pvc-vs-molly-bolt-anchors": { title: "Anchor PVC vs Molly Bolt", intro: "Perbandingan sistem anchor dinding.", category: "Perbandingan" },
  "interior-paint-finishes-matte-vs-satin-vs-gloss": { title: "Kemasan Cat Dalaman: Matte vs Satin vs Gloss", intro: "Perbandingan kemasan cat dalaman Malaysia.", category: "Perbandingan" },
  "wall-putty-vs-plaster-smoothening": { title: "Putty Dinding vs Plaster Smoothening", intro: "Perbandingan kaedah penyelut dinding.", category: "Perbandingan" },
  "partition-materials-gypsum-vs-bricks-vs-glass": { title: "Bahan Sekatan: Gypsum vs Bata vs Kaca", intro: "Perbandingan bahan dinding sekatan.", category: "Perbandingan" },
  "diy-painting-vs-professional-painting": { title: "Pengecatan DIY vs Profesional", intro: "Perbandingan kos, kualiti, dan risiko.", category: "Perbandingan" },
  "cheap-handyman-vs-insured-contractor": { title: "Tukang Murah vs Kontraktor Berinsurans", intro: "Perbandingan risiko, kualiti, dan perlindungan.", category: "Perbandingan" },
  "pu-injection-vs-surface-waterproofing": { title: "Suntikan PU vs Kalis Air Permukaan", intro: "Perbandingan kaedah kalis air untuk kebocoran.", category: "Perbandingan" },
  "fixed-quote-vs-hourly-handyman": { title: "Sebutan Tetap vs Tukang Per Jam", intro: "Perbandingan model harga tukang.", category: "Perbandingan" },
  "drywall-partition-vs-glass-partition": { title: "Sekatan Drywall vs Sekatan Kaca", intro: "Perbandingan bahan sekatan pejabat.", category: "Perbandingan" },
  "roof-coating-vs-torch-on-membrane": { title: "Salutan Bumbung vs Membran Torch-On", intro: "Perbandingan kaedah kalis air bumbung.", category: "Perbandingan" },

  // ─── Maintenance Guide (10) ───
  "painting-maintenance-schedule": { title: "Jadual Penyelenggaraan Pengecatan", intro: "Panduan penyelenggaraan cat rumah Malaysia mengikut kekerapan.", category: "Panduan Penyelenggaraan" },
  "plumbing-annual-checklist": { title: "Senarai Semak Paip Tahunan", intro: "Senarai semak penyelenggaraan paip tahunan.", category: "Panduan Penyelenggaraan" },
  "ceiling-maintenance-tips": { title: "Tip Penyelenggaraan Siling", intro: "Tip penyelenggaraan siling gypsum dan plaster.", category: "Panduan Penyelenggaraan" },
  "waterproofing-recheck-schedule": { title: "Jadual Semak Semula Kalis Air", intro: "Jadual penyelenggaraan kalis air berkala.", category: "Panduan Penyelenggaraan" },
  "home-handyman-monthly-checklist": { title: "Senarai Semak Bulanan Tukang Serba", intro: "Senarai semak penyelenggaraan rumah bulanan.", category: "Panduan Penyelenggaraan" },
  "rainy-season-home-prep": { title: "Persediaan Rumah Musim Hujan", intro: "Panduan persediaan rumah sebelum musim monsun.", category: "Panduan Penyelenggaraan" },
  "post-renovation-cleanup-checklist": { title: "Senarai Semak Pembersihan Selepas Renovasi", intro: "Senarai semak pembersihan post-renovasi.", category: "Panduan Penyelenggaraan" },
  "condo-maintenance-checklist": { title: "Senarai Semak Kondominium", intro: "Senarai semak penyelenggaraan kondo.", category: "Panduan Penyelenggaraan" },
  "landed-house-maintenance-calendar": { title: "Kalendar Penyelenggaraan Rumah Teres", intro: "Kalendar penyelenggaraan rumah teres.", category: "Panduan Penyelenggaraan" },
  "rental-property-turnover-checklist": { title: "Senarai Semak Pusing Harta Sewa", intro: "Senarai semak pembersihan harta sewa.", category: "Panduan Penyelenggaraan" },

  // ─── Seasonal (8) ───
  "home-prep-rainy-season-kl": { title: "Persediaan Rumah Musim Hujan KL", intro: "Panduan persediaan rumah sebelum musim monsun.", category: "Musiman" },
  "painting-dry-season-tips": { title: "Tip Pengecatan Musim Kering", intro: "Tip pengecatan semasa musim kering di Malaysia.", category: "Musiman" },
  "waterproofing-pre-monsoon-checklist": { title: "Senarai Semak Kalis Air Sebelum Monsoon", intro: "Senarai semak kalis air sebelum monsun.", category: "Musiman" },
  "chinese-new-year-home-repaint-guide": { title: "Panduan Pengecatan Rumah Tahun Baru Cina", intro: "Panduan pengecatan rumah sebelum Tahun Baru Cina.", category: "Musiman" },
  "raya-home-makeover-checklist": { title: "Senarai Semak Transformasi Rumah Raya", intro: "Senarai semak renovasi sebelum Hari Raya.", category: "Musiman" },
  "year-end-renovation-planning": { title: "Perancangan Renovasi Akhir Tahun", intro: "Perancangan renovasi akhir tahun di KL.", category: "Musiman" },
  "hari-raya-painting-promo": { title: "Promosi Pengecatan Hari Raya", intro: "Promosi pengecatan sempena Hari Raya.", category: "Musiman" },
  "monsoon-leak-emergency-guide": { title: "Panduan Kecemasan Kebocoran Monsoon", intro: "Panduan kecemasan kebocoran semasa monsun.", category: "Musiman" },

  // ─── Commercial (28) ───
  "painting-services-kl": { title: "Perkhidmatan Pengecatan Komersial di KL", intro: "Panduan perkhidmatan pengecatan premis komersial di KL dan Selangor.", category: "Komersial" },
  "plumbing-services-kl": { title: "Perkhidmatan Paip Komersial di KL", intro: "Panduan perkhidmatan paip komersial di KL dan Selangor.", category: "Komersial" },
  "ceiling-services-kl": { title: "Perkhidmatan Siling Komersial di KL", intro: "Panduan perkhidmatan siling komersial di KL dan Selangor.", category: "Komersial" },
  "waterproofing-services-kl": { title: "Perkhidmatan Kalis Air Komersial di KL", intro: "Panduan perkhidmatan kalis air komersial di KL dan Selangor.", category: "Komersial" },
  "handyman-services-kl": { title: "Perkhidmatan Tukang Serba Komersial di KL", intro: "Panduan perkhidmatan tukang serba komersial di KL dan Selangor.", category: "Komersial" },
  "house-renovation-services-kl": { title: "Perkhidmatan Renovasi Rumah Komersial di KL", intro: "Panduan perkhidmatan renovasi komersial di KL dan Selangor.", category: "Komersial" },
  "electrical-services-kl": { title: "Perkhidmatan Elektrik Komersial di KL", intro: "Panduan perkhidmatan elektrik komersial di KL dan Selangor.", category: "Komersial" },
  "water-heater-services-kl": { title: "Perkhidmatan Pemanas Air Komersial di KL", intro: "Panduan perkhidmatan pemanas air komersial di KL dan Selangor.", category: "Komersial" },
  "ceiling-fan-services-kl": { title: "Perkhidmatan Kipas Siling Komersial di KL", intro: "Panduan perkhidmatan kipas siling komersial di KL dan Selangor.", category: "Komersial" },
  "lighting-services-kl": { title: "Perkhidmatan Lampu Komersial di KL", intro: "Panduan perkhidmatan lampu komersial di KL dan Selangor.", category: "Komersial" },
  "tiling-services-kl": { title: "Perkhidmatan Jubin Komersial di KL", intro: "Panduan perkhidmatan jubin komersial di KL dan Selangor.", category: "Komersial" },
  "plaster-ceiling-services-kl": { title: "Perkhidmatan Siling Plaster Komersial di KL", intro: "Panduan perkhidmatan siling plaster komersial di KL dan Selangor.", category: "Komersial" },
  "skim-coat-services-kl": { title: "Perkhidmatan Skim Coat Komersial di KL", intro: "Panduan perkhidmatan skim coat komersial di KL dan Selangor.", category: "Komersial" },
  "flooring-services-kl": { title: "Perkhidmatan Lantai Komersial di KL", intro: "Panduan perkhidmatan lantai komersial di KL dan Selangor.", category: "Komersial" },
  "epoxy-flooring-services-kl": { title: "Perkhidmatan Lantai Epoxy Komersial di KL", intro: "Panduan perkhidmatan epoxy komersial di KL dan Selangor.", category: "Komersial" },
  "roof-repair-services-kl": { title: "Perkhidmatan Pembaikan Bumbung Komersial di KL", intro: "Panduan perkhidmatan bumbung komersial di KL dan Selangor.", category: "Komersial" },
  "kitchen-cabinet-services-kl": { title: "Perkhidmatan Kabinet Dapur Komersial di KL", intro: "Panduan perkhidmatan kabinet komersial di KL dan Selangor.", category: "Komersial" },
  "carpentry-services-kl": { title: "Perkhidmatan Kayu Komersial di KL", intro: "Panduan perkhidmatan kayu komersial di KL dan Selangor.", category: "Komersial" },
  "door-services-kl": { title: "Perkhidmatan Pintu Komersial di KL", intro: "Panduan perkhidmatan pintu komersial di KL dan Selangor.", category: "Komersial" },
  "window-repair-services-kl": { title: "Perkhidmatan Tingkap Komersial di KL", intro: "Panduan perkhidmatan tingkap komersial di KL dan Selangor.", category: "Komersial" },
  "locksmith-services-kl": { title: "Perkhidmatan Tukang Kunci Komersial di KL", intro: "Panduan perkhidmatan kunci komersial di KL dan Selangor.", category: "Komersial" },
  "glass-aluminium-services-kl": { title: "Perkhidmatan Kaca & Aluminium Komersial di KL", intro: "Panduan perkhidmatan kaca komersial di KL dan Selangor.", category: "Komersial" },
  "cleaning-services-kl": { title: "Perkhidmatan Pembersihan Komersial di KL", intro: "Panduan perkhidmatan pembersihan komersial di KL dan Selangor.", category: "Komersial" },
  "deep-cleaning-services-kl": { title: "Perkhidmatan Pembersihan Mendalam Komersial di KL", intro: "Panduan pembersihan mendalam komersial di KL dan Selangor.", category: "Komersial" },
  "post-renovation-cleaning-services-kl": { title: "Perkhidmatan Pembersihan Selepas Renovasi Komersial di KL", intro: "Panduan pembersihan post-renovasi komersial di KL dan Selangor.", category: "Komersial" },
  "cctv-services-kl": { title: "Perkhidmatan CCTV Komersial di KL", intro: "Panduan perkhidmatan CCTV komersial di KL dan Selangor.", category: "Komersial" },
  "autogate-services-kl": { title: "Perkhidmatan Pintu Automatik Komersial di KL", intro: "Panduan perkhidmatan autogate komersial di KL dan Selangor.", category: "Komersial" },
  "welding-services-kl": { title: "Perkhidmatan Patri Komersial di KL", intro: "Panduan perkhidmatan patri komersial di KL dan Selangor.", category: "Komersial" },

  // ─── Residential (28 — same slugs as Commercial, different category) ───
  // NOTE: slugs overlap with Commercial; category is what differs on the page.
  // Since the dictionary is keyed by slug alone, both get the same entry.
  // For Residential pages, the component falls back to the page's English category.
  // We'll provide a generic "Perkhidmatan" category that works for both contexts.

  // ─── Brand Guide (12) ───
  "nippon-paint-application-malaysia": { title: "Aplikasi Cat Nippon di Malaysia", intro: "Panduan aplikasi cat Nippon yang betul.", category: "Panduan Jenama" },
  "dulux-paint-application-malaysia": { title: "Aplikasi Cat Dulux di Malaysia", intro: "Panduan aplikasi cat Dulux yang betul.", category: "Panduan Jenama" },
  "jotun-paint-application-malaysia": { title: "Aplikasi Cat Jotun di Malaysia", intro: "Panduan aplikasi cat Jotun yang betul.", category: "Panduan Jenama" },
  "sirim-certified-pipes-malaysia": { title: "Paip Bersijil Sirim di Malaysia", intro: "Panduan paip bersijil Sirim.", category: "Panduan Jenama" },
  "grundfos-water-pump-installation": { title: "Pemasangan Pam Air Grundfos", intro: "Panduan pemasangan pam Grundfos.", category: "Panduan Jenama" },
  "joven-water-heater-installation": { title: "Pemasangan Pemanas Air Joven", intro: "Panduan pemasangan pemanas air Joven.", category: "Panduan Jenama" },
  "rinnai-water-heater-installation": { title: "Pemasangan Pemanas Air Rinnai", intro: "Panduan pemasangan pemanas air Rinnai.", category: "Panduan Jenama" },
  "knauf-gypsum-board-installation": { title: "Pemasangan Papan Gypsum Knauf", intro: "Panduan pemasangan papan gypsum Knauf.", category: "Panduan Jenama" },
  "boral-gypsum-board-installation": { title: "Pemasangan Papan Gypsum Boral", intro: "Panduan pemasangan papan gypsum Boral.", category: "Panduan Jenama" },
  "sika-waterproofing-application": { title: "Aplikasi Kalis Air Sika", intro: "Panduan aplikasi kalis air Sika.", category: "Panduan Jenama" },
  "bostik-waterproofing-application": { title: "Aplikasi Kalis Air Bostik", intro: "Panduan aplikasi kalis air Bostik.", category: "Panduan Jenama" },
  "mapei-waterproofing-application": { title: "Aplikasi Kalis Air Mapei", intro: "Panduan aplikasi kalis air Mapei.", category: "Panduan Jenama" },

  // ─── Top Considerations (10) ───
  "best-house-painters-kl-2026": { title: "Cara Membandingkan Tukang Cat Rumah di KL (2026)", intro: "Panduan praktikal untuk membandingkan skop, bahan, sebut harga dan terma kerja tukang cat rumah di KL.", category: "Pertimbangan Utama" },
  "best-plumbers-kl": { title: "Cara Membandingkan Tukang Paip di KL", intro: "Panduan praktikal untuk membandingkan skop, bahan, sebut harga dan terma kerja tukang paip di KL.", category: "Pertimbangan Utama" },
  "best-ceiling-contractors-kl": { title: "Cara Membandingkan Kontraktor Siling di KL", intro: "Panduan praktikal untuk membandingkan kaedah, bahan, sebut harga dan terma kerja kontraktor siling di KL.", category: "Pertimbangan Utama" },
  "best-waterproofing-contractors-kl": { title: "Cara Membandingkan Kontraktor Kalis Air di KL", intro: "Panduan praktikal untuk membandingkan diagnosis, kaedah, sebut harga dan terma kerja kalis air di KL.", category: "Pertimbangan Utama" },
  "best-handyman-kl": { title: "Cara Membandingkan Servis Handyman di KL", intro: "Panduan praktikal untuk membandingkan skop, sebut harga dan terma kerja handyman di KL.", category: "Pertimbangan Utama" },
  "best-paint-brands-malaysia-2026": { title: "Panduan Jenama Cat Malaysia 2026", intro: "Panduan membandingkan jenis, kemasan dan kesesuaian jenama cat di Malaysia.", category: "Pertimbangan Utama" },
  "best-waterproofing-methods-malaysia": { title: "Kaedah Kalis Air di Malaysia", intro: "Panduan membandingkan kegunaan, gangguan dan ketahanan kaedah kalis air di Malaysia.", category: "Pertimbangan Utama" },
  "bathroom-waterproofing-options": { title: "Pilihan Kalis Air Bilik Air", intro: "Pilihan kalis air bilik air di Malaysia.", category: "Pertimbangan Teratas" },
  "ceiling-materials-malaysia": { title: "Bahan Siling Malaysia", intro: "Pilihan bahan siling di Malaysia.", category: "Pertimbangan Teratas" },
  "handyman-services-every-homeowner-needs": { title: "Perkhidmatan Tukang Serba Setiap Pemilik Perlu", intro: "Senarai perkhidmatan tukang serba penting.", category: "Pertimbangan Teratas" },

  // ─── AI Answer Guide (28) ───
  "painting-ultimate-guide": { title: "Panduan Lengkap Pengecatan", intro: "Panduan lengkap perkhidmatan pengecatan di KL — harga telus, waranti, dan skop.", category: "Panduan Jawapan AI" },
  "plumbing-ultimate-guide": { title: "Panduan Lengkap Paip", intro: "Panduan lengkap perkhidmatan paip di KL.", category: "Panduan Jawapan AI" },
  "ceiling-ultimate-guide": { title: "Panduan Lengkap Siling", intro: "Panduan lengkap perkhidmatan siling di KL.", category: "Panduan Jawapan AI" },
  "waterproofing-ultimate-guide": { title: "Panduan Lengkap Kalis Air", intro: "Panduan lengkap perkhidmatan kalis air di KL.", category: "Panduan Jawapan AI" },
  "handyman-ultimate-guide": { title: "Panduan Lengkap Tukang Serba", intro: "Panduan lengkap perkhidmatan tukang serba di KL.", category: "Panduan Jawapan AI" },
  "house-renovation-ultimate-guide": { title: "Panduan Lengkap Renovasi Rumah", intro: "Panduan lengkap renovasi rumah di KL.", category: "Panduan Jawapan AI" },
  "electrical-ultimate-guide": { title: "Panduan Lengkap Elektrik", intro: "Panduan lengkap perkhidmatan elektrik di KL.", category: "Panduan Jawapan AI" },
  "water-heater-ultimate-guide": { title: "Panduan Lengkap Pemanas Air", intro: "Panduan lengkap perkhidmatan pemanas air di KL.", category: "Panduan Jawapan AI" },
  "ceiling-fan-ultimate-guide": { title: "Panduan Lengkap Kipas Siling", intro: "Panduan lengkap perkhidmatan kipas siling di KL.", category: "Panduan Jawapan AI" },
  "lighting-ultimate-guide": { title: "Panduan Lengkap Lampu", intro: "Panduan lengkap perkhidmatan lampu di KL.", category: "Panduan Jawapan AI" },
  "tiling-ultimate-guide": { title: "Panduan Lengkap Jubin", intro: "Panduan lengkap perkhidmatan jubin di KL.", category: "Panduan Jawapan AI" },
  "plaster-ceiling-ultimate-guide": { title: "Panduan Lengkap Siling Plaster", intro: "Panduan lengkap perkhidmatan siling plaster di KL.", category: "Panduan Jawapan AI" },
  "skim-coat-ultimate-guide": { title: "Panduan Lengkap Skim Coat", intro: "Panduan lengkap perkhidmatan skim coat di KL.", category: "Panduan Jawapan AI" },
  "flooring-ultimate-guide": { title: "Panduan Lengkap Lantai", intro: "Panduan lengkap perkhidmatan lantai di KL.", category: "Panduan Jawapan AI" },
  "epoxy-flooring-ultimate-guide": { title: "Panduan Lengkap Lantai Epoxy", intro: "Panduan lengkap perkhidmatan epoxy di KL.", category: "Panduan Jawapan AI" },
  "roof-repair-ultimate-guide": { title: "Panduan Lengkap Pembaikan Bumbung", intro: "Panduan lengkap pembaikan bumbung di KL.", category: "Panduan Jawapan AI" },
  "kitchen-cabinet-ultimate-guide": { title: "Panduan Lengkap Kabinet Dapur", intro: "Panduan lengkap perkhidmatan kabinet di KL.", category: "Panduan Jawapan AI" },
  "carpentry-ultimate-guide": { title: "Panduan Lengkap Kayu", intro: "Panduan lengkap perkhidmatan kayu di KL.", category: "Panduan Jawapan AI" },
  "door-ultimate-guide": { title: "Panduan Lengkap Pintu", intro: "Panduan lengkap perkhidmatan pintu di KL.", category: "Panduan Jawapan AI" },
  "window-repair-ultimate-guide": { title: "Panduan Lengkap Tingkap", intro: "Panduan lengkap pembaikan tingkap di KL.", category: "Panduan Jawapan AI" },
  "locksmith-ultimate-guide": { title: "Panduan Lengkap Tukang Kunci", intro: "Panduan lengkap perkhidmatan kunci di KL.", category: "Panduan Jawapan AI" },
  "glass-aluminium-ultimate-guide": { title: "Panduan Lengkap Kaca & Aluminium", intro: "Panduan lengkap perkhidmatan kaca di KL.", category: "Panduan Jawapan AI" },
  "cleaning-ultimate-guide": { title: "Panduan Lengkap Pembersihan", intro: "Panduan lengkap pembersihan rumah di KL.", category: "Panduan Jawapan AI" },
  "deep-cleaning-ultimate-guide": { title: "Panduan Lengkap Pembersihan Mendalam", intro: "Panduan lengkap pembersihan mendalam di KL.", category: "Panduan Jawapan AI" },
  "post-renovation-cleaning-ultimate-guide": { title: "Panduan Lengkap Pembersihan Selepas Renovasi", intro: "Panduan lengkap pembersihan post-renovasi di KL.", category: "Panduan Jawapan AI" },
  "cctv-ultimate-guide": { title: "Panduan Lengkap CCTV", intro: "Panduan lengkap perkhidmatan CCTV di KL.", category: "Panduan Jawapan AI" },
  "autogate-ultimate-guide": { title: "Panduan Lengkap Pintu Automatik", intro: "Panduan lengkap perkhidmatan autogate di KL.", category: "Panduan Jawapan AI" },
  "welding-ultimate-guide": { title: "Panduan Lengkap Patri", intro: "Panduan lengkap perkhidmatan patri di KL.", category: "Panduan Jawapan AI" },

  // ─── Process (28) ───
  "painting-process-kl": { title: "Proses Pengecatan di KL", intro: "Panduan proses perkhidmatan pengecatan langkah demi langkah.", category: "Proses" },
  "plumbing-process-kl": { title: "Proses Paip di KL", intro: "Panduan proses perkhidmatan paip langkah demi langkah.", category: "Proses" },
  "ceiling-process-kl": { title: "Proses Siling di KL", intro: "Panduan proses perkhidmatan siling langkah demi langkah.", category: "Proses" },
  "pu-grouting-process-kl": { title: "Proses Grouting PU di KL", intro: "Panduan proses kalis air dan grouting PU langkah demi langkah.", category: "Proses" },
  "handyman-process-kl": { title: "Proses Tukang Serba di KL", intro: "Panduan proses perkhidmatan tukang serba langkah demi langkah.", category: "Proses" },
  "house-renovation-process-kl": { title: "Proses Renovasi Rumah di KL", intro: "Panduan proses renovasi rumah langkah demi langkah.", category: "Proses" },
  "electrical-process-kl": { title: "Proses Elektrik di KL", intro: "Panduan proses perkhidmatan elektrik langkah demi langkah.", category: "Proses" },
  "water-heater-process-kl": { title: "Proses Pemanas Air di KL", intro: "Panduan proses pemanas air langkah demi langkah.", category: "Proses" },
  "ceiling-fan-process-kl": { title: "Proses Kipas Siling di KL", intro: "Panduan proses kipas siling langkah demi langkah.", category: "Proses" },
  "lighting-process-kl": { title: "Proses Lampu di KL", intro: "Panduan proses lampu langkah demi langkah.", category: "Proses" },
  "tiling-process-kl": { title: "Proses Jubin di KL", intro: "Panduan proses jubin langkah demi langkah.", category: "Proses" },
  "plaster-ceiling-process-kl": { title: "Proses Siling Plaster di KL", intro: "Panduan proses siling plaster langkah demi langkah.", category: "Proses" },
  "skim-coat-process-kl": { title: "Proses Skim Coat di KL", intro: "Panduan proses skim coat langkah demi langkah.", category: "Proses" },
  "flooring-process-kl": { title: "Proses Lantai di KL", intro: "Panduan proses lantai langkah demi langkah.", category: "Proses" },
  "epoxy-flooring-process-kl": { title: "Proses Lantai Epoxy di KL", intro: "Panduan proses epoxy langkah demi langkah.", category: "Proses" },
  "roof-repair-process-kl": { title: "Proses Pembaikan Bumbung di KL", intro: "Panduan proses bumbung langkah demi langkah.", category: "Proses" },
  "kitchen-cabinet-process-kl": { title: "Proses Kabinet Dapur di KL", intro: "Panduan proses kabinet langkah demi langkah.", category: "Proses" },
  "carpentry-process-kl": { title: "Proses Kayu di KL", intro: "Panduan proses kayu langkah demi langkah.", category: "Proses" },
  "door-process-kl": { title: "Proses Pintu di KL", intro: "Panduan proses pintu langkah demi langkah.", category: "Proses" },
  "window-repair-process-kl": { title: "Proses Tingkap di KL", intro: "Panduan proses tingkap langkah demi langkah.", category: "Proses" },
  "locksmith-process-kl": { title: "Proses Tukang Kunci di KL", intro: "Panduan proses kunci langkah demi langkah.", category: "Proses" },
  "glass-aluminium-process-kl": { title: "Proses Kaca & Aluminium di KL", intro: "Panduan proses kaca langkah demi langkah.", category: "Proses" },
  "cleaning-process-kl": { title: "Proses Pembersihan di KL", intro: "Panduan proses pembersihan langkah demi langkah.", category: "Proses" },
  "deep-cleaning-process-kl": { title: "Proses Pembersihan Mendalam di KL", intro: "Panduan proses pembersihan mendalam langkah demi langkah.", category: "Proses" },
  "post-renovation-cleaning-process-kl": { title: "Proses Pembersihan Selepas Renovasi di KL", intro: "Panduan proses post-renovasi langkah demi langkah.", category: "Proses" },
  "cctv-process-kl": { title: "Proses CCTV di KL", intro: "Panduan proses CCTV langkah demi langkah.", category: "Proses" },
  "autogate-process-kl": { title: "Proses Pintu Automatik di KL", intro: "Panduan proses autogate langkah demi langkah.", category: "Proses" },
  "welding-process-kl": { title: "Proses Patri di KL", intro: "Panduan proses patri langkah demi langkah.", category: "Proses" },
};

// ═══════════════════════════════════════════════════════════════════════
// FULL ZH DICTIONARY — covers ALL 164 unique content-page slugs
// ═══════════════════════════════════════════════════════════════════════
export const contentI18nZhFull: Record<string, Partial<{ title: string; intro: string; category: string }>> = {

  // ─── Service Cluster (15) ───
  "interior-painting-kl": { title: "吉隆坡室内油漆", intro: "室内墙面油漆、底漆、可洗涂料与颜色选择的完整指南。", category: "服务集群" },
  "exterior-painting-kl": { title: "吉隆坡外墙油漆", intro: "应对雪兰莪紫外线、雨水、藻类的外墙涂装实用指南。", category: "服务集群" },
  "commercial-painting-kl": { title: "吉隆坡商业油漆", intro: "办公室、商铺与零售油漆指南。", category: "服务集群" },
  "leak-repair-kl": { title: "吉隆坡漏水维修", intro: "可见与隐藏管道漏水检测与维修指南。", category: "服务集群" },
  "installation-kl": { title: "吉隆坡水管安装", intro: "水龙头、马桶、热水器与水泵安装指南。", category: "服务集群" },
  "emergency-plumbing-kl": { title: "吉隆坡紧急水管", intro: "管道爆裂、严重漏水与紧急关水指南。", category: "服务集群" },
  "ceiling-installation-kl": { title: "吉隆坡天花板安装", intro: "石膏板、GI框架与L-box安装指南。", category: "服务集群" },
  "repair-kl": { title: "吉隆坡天花板维修", intro: "裂缝、污渍、下垂与水损天花板维修指南。", category: "服务集群" },
  "partition-kl": { title: "吉隆坡隔断墙", intro: "石膏隔断、隔音与防火板指南。", category: "服务集群" },
  "bathroom-kl": { title: "吉隆坡浴室防水", intro: "浴室漏水、无砸密封与PU注浆指南。", category: "服务集群" },
  "roof-kl": { title: "吉隆坡屋顶防水", intro: "屋顶膜、裂缝处理与紫外线防护指南。", category: "服务集群" },
  "pu-grouting-kl": { title: "吉隆坡PU注浆", intro: "聚氨酯注浆修复混凝土裂缝与楼层间漏水指南。", category: "服务集群" },
  "tv-mounting-kl": { title: "吉隆坡电视安装", intro: "在砖墙、混凝土与石膏墙安全安装电视指南。", category: "服务集群" },
  "door-lock-kl": { title: "吉隆坡门锁维修", intro: "下垂门、铰链、锁具与智能锁准备指南。", category: "服务集群" },
  "furniture-assembly-kl": { title: "吉隆坡家具组装", intro: "板式家具组装与安全固定指南。", category: "服务集群" },

  // ─── Painting guides (2) ───
  "how-to-choose-house-painter-kl": { title: "如何在吉隆坡选择油漆工", intro: "选择优质油漆工的实用标准。", category: "油漆" },
  "paint-brand-comparison-nippon-vs-dulux-vs-jotun": { title: "油漆品牌比较：立邦vs多乐士vs佐敦", intro: "马来西亚主要油漆品牌比较。", category: "油漆" },

  // ─── Plumbing guides (2) ───
  "how-to-choose-plumber-kl": { title: "如何在吉隆坡选择水管工", intro: "选择优质水管工的实用标准。", category: "水管" },
  "plumbing-pipe-comparison-pvc-vs-copper-vs-ppr": { title: "水管比较：PVC vs铜管vs PPR", intro: "马来西亚水管类型比较。", category: "水管" },

  // ─── Waterproofing guides (2) ───
  "how-to-choose-waterproofing-contractor-kl": { title: "如何在吉隆坡选择防水承包商", intro: "选择优质防水承包商的实用标准。", category: "防水" },
  "waterproofing-method-comparison-pu-vs-membrane": { title: "防水方法比较：PU注浆vs膜", intro: "PU注浆与全膜防水比较。", category: "防水" },

  // ─── Ceiling guides (2) ───
  "how-to-choose-ceiling-contractor-kl": { title: "如何在吉隆坡选择天花板承包商", intro: "选择优质天花板承包商的实用标准。", category: "天花板" },
  "ceiling-material-comparison-plaster-vs-gypsum": { title: "天花板材料比较：石膏vs石膏板", intro: "plaster ceiling与gypsum board比较。", category: "天花板" },

  // ─── Handyman guides (2) ───
  "how-to-choose-handyman-kl": { title: "如何在吉隆坡选择杂工", intro: "选择优质杂工的实用标准。", category: "杂工" },
  "tv-mount-types-comparison-fixed-vs-tilt-vs-full-motion": { title: "电视支架类型：固定vs倾斜vs全旋转", intro: "马来西亚电视支架类型比较。", category: "杂工" },

  // ─── Comparison (15) ───
  "pu-grouting-vs-tile-hacking": { title: "PU注浆vs砸瓷砖", intro: "无砸瓷砖防水方法与传统方法比较。", category: "比较" },
  "plaster-ceiling-vs-gypsum-ceiling": { title: "石膏天花板vs石膏板天花板", intro: "天花板材料比较。", category: "比较" },
  "nippon-paint-vs-dulux-paint": { title: "立邦漆vs多乐士漆", intro: "马来西亚主要油漆品牌比较。", category: "比较" },
  "acrylic-vs-cementitious-waterproofing": { title: "丙烯酸防水vs水泥防水", intro: "防水材料比较。", category: "比较" },
  "pvc-pipes-vs-copper-pipes": { title: "PVC管vs铜管", intro: "水管类型比较。", category: "比较" },
  "pvc-vs-molly-bolt-anchors": { title: "PVC锚栓vs膨胀锚栓", intro: "墙壁锚固系统比较。", category: "比较" },
  "interior-paint-finishes-matte-vs-satin-vs-gloss": { title: "内墙漆饰面：哑光vs satin vs gloss", intro: "马来西亚内墙漆饰面比较。", category: "比较" },
  "wall-putty-vs-plaster-smoothening": { title: "墙面腻子vs批灰找平", intro: "墙面找平方法比较。", category: "比较" },
  "partition-materials-gypsum-vs-bricks-vs-glass": { title: "隔断材料：石膏板vs砖块vs玻璃", intro: "隔断墙材料比较。", category: "比较" },
  "diy-painting-vs-professional-painting": { title: "DIY油漆vs专业油漆", intro: "成本、质量与风险比较。", category: "比较" },
  "cheap-handyman-vs-insured-contractor": { title: "廉价杂工vs有保险承包商", intro: "风险、质量与保障比较。", category: "比较" },
  "pu-injection-vs-surface-waterproofing": { title: "PU注浆vs表面防水", intro: "漏水修复方法比较。", category: "比较" },
  "fixed-quote-vs-hourly-handyman": { title: "固定报价vs按小时计费杂工", intro: "杂工计费模式比较。", category: "比较" },
  "drywall-partition-vs-glass-partition": { title: "干墙隔断vs玻璃隔断", intro: "办公室隔断材料比较。", category: "比较" },
  "roof-coating-vs-torch-on-membrane": { title: "屋顶涂层vs热熔膜", intro: "屋顶防水方法比较。", category: "比较" },

  // ─── Maintenance Guide (10) ───
  "painting-maintenance-schedule": { title: "油漆维护时间表", intro: "马来西亚住宅油漆维护实用时间表。", category: "维护指南" },
  "plumbing-annual-checklist": { title: "水管年度检查清单", intro: "年度水管维护检查清单。", category: "维护指南" },
  "ceiling-maintenance-tips": { title: "天花板维护提示", intro: "石膏板与石膏天花板维护提示。", category: "维护指南" },
  "waterproofing-recheck-schedule": { title: "防水复查时间表", intro: "定期防水维护时间表。", category: "维护指南" },
  "home-handyman-monthly-checklist": { title: "杂工月度检查清单", intro: "住宅月度维护检查清单。", category: "维护指南" },
  "rainy-season-home-prep": { title: "雨季房屋准备", intro: "季风季节前的房屋准备指南。", category: "维护指南" },
  "post-renovation-cleanup-checklist": { title: "装修后清洁检查清单", intro: "装修后清洁检查清单。", category: "维护指南" },
  "condo-maintenance-checklist": { title: "公寓维护检查清单", intro: "公寓维护检查清单。", category: "维护指南" },
  "landed-house-maintenance-calendar": { title: "排屋维护日历", intro: "排屋维护日历。", category: "维护指南" },
  "rental-property-turnover-checklist": { title: "租赁物业交接清单", intro: "租赁物业清洁交接清单。", category: "维护指南" },

  // ─── Seasonal (8) ───
  "home-prep-rainy-season-kl": { title: "吉隆坡雨季房屋准备", intro: "季风季节前的房屋准备指南。", category: "季节性" },
  "painting-dry-season-tips": { title: "旱季油漆提示", intro: "马来西亚旱季油漆提示。", category: "季节性" },
  "waterproofing-pre-monsoon-checklist": { title: "季风前防水检查清单", intro: "季风前防水检查清单。", category: "季节性" },
  "chinese-new-year-home-repaint-guide": { title: "春节房屋重刷指南", intro: "春节前房屋油漆指南。", category: "季节性" },
  "raya-home-makeover-checklist": { title: "开斋节房屋改造清单", intro: "开斋节前装修清单。", category: "季节性" },
  "year-end-renovation-planning": { title: "年底翻新规划", intro: "吉隆坡年底翻新规划。", category: "季节性" },
  "hari-raya-painting-promo": { title: "开斋节油漆优惠", intro: "开斋节油漆优惠活动。", category: "季节性" },
  "monsoon-leak-emergency-guide": { title: "季风漏水紧急指南", intro: "季风期间漏水紧急处理指南。", category: "季节性" },

  // ─── Commercial (28) ───
  "painting-services-kl": { title: "吉隆坡商业油漆服务", intro: "吉隆坡与雪兰莪商业油漆服务指南。", category: "商业" },
  "plumbing-services-kl": { title: "吉隆坡商业水管服务", intro: "吉隆坡与雪兰莪商业水管服务指南。", category: "商业" },
  "ceiling-services-kl": { title: "吉隆坡商业天花板服务", intro: "吉隆坡与雪兰莪商业天花板服务指南。", category: "商业" },
  "waterproofing-services-kl": { title: "吉隆坡商业防水服务", intro: "吉隆坡与雪兰莪商业防水服务指南。", category: "商业" },
  "handyman-services-kl": { title: "吉隆坡商业杂工服务", intro: "吉隆坡与雪兰莪商业杂工服务指南。", category: "商业" },
  "house-renovation-services-kl": { title: "吉隆坡商业翻新服务", intro: "吉隆坡与雪兰莪商业翻新服务指南。", category: "商业" },
  "electrical-services-kl": { title: "吉隆坡商业电气服务", intro: "吉隆坡与雪兰莪商业电气服务指南。", category: "商业" },
  "water-heater-services-kl": { title: "吉隆坡商业热水器服务", intro: "吉隆坡与雪兰莪商业热水器服务指南。", category: "商业" },
  "ceiling-fan-services-kl": { title: "吉隆坡商业吊扇服务", intro: "吉隆坡与雪兰莪商业吊扇服务指南。", category: "商业" },
  "lighting-services-kl": { title: "吉隆坡商业照明服务", intro: "吉隆坡与雪兰莪商业照明服务指南。", category: "商业" },
  "tiling-services-kl": { title: "吉隆坡商业瓷砖服务", intro: "吉隆坡与雪兰莪商业瓷砖服务指南。", category: "商业" },
  "plaster-ceiling-services-kl": { title: "吉隆坡商业石膏天花板服务", intro: "吉隆坡与雪兰莪商业石膏天花板服务指南。", category: "商业" },
  "skim-coat-services-kl": { title: "吉隆坡商业批腻子服务", intro: "吉隆坡与雪兰莪商业批腻子服务指南。", category: "商业" },
  "flooring-services-kl": { title: "吉隆坡商业地板服务", intro: "吉隆坡与雪兰莪商业地板服务指南。", category: "商业" },
  "epoxy-flooring-services-kl": { title: "吉隆坡商业环氧地坪服务", intro: "吉隆坡与雪兰莪商业环氧地坪服务指南。", category: "商业" },
  "roof-repair-services-kl": { title: "吉隆坡商业屋顶维修服务", intro: "吉隆坡与雪兰莪商业屋顶维修服务指南。", category: "商业" },
  "kitchen-cabinet-services-kl": { title: "吉隆坡商业厨柜服务", intro: "吉隆坡与雪兰莪商业厨柜服务指南。", category: "商业" },
  "carpentry-services-kl": { title: "吉隆坡商业木工服务", intro: "吉隆坡与雪兰莪商业木工服务指南。", category: "商业" },
  "door-services-kl": { title: "吉隆坡商业门服务", intro: "吉隆坡与雪兰莪商业门服务指南。", category: "商业" },
  "window-repair-services-kl": { title: "吉隆坡商业窗户服务", intro: "吉隆坡与雪兰莪商业窗户服务指南。", category: "商业" },
  "locksmith-services-kl": { title: "吉隆坡商业锁匠服务", intro: "吉隆坡与雪兰莪商业锁匠服务指南。", category: "商业" },
  "glass-aluminium-services-kl": { title: "吉隆坡商业玻璃铝合金服务", intro: "吉隆坡与雪兰莪商业玻璃铝合金服务指南。", category: "商业" },
  "cleaning-services-kl": { title: "吉隆坡商业清洁服务", intro: "吉隆坡与雪兰莪商业清洁服务指南。", category: "商业" },
  "deep-cleaning-services-kl": { title: "吉隆坡商业深度清洁服务", intro: "吉隆坡与雪兰莪商业深度清洁服务指南。", category: "商业" },
  "post-renovation-cleaning-services-kl": { title: "吉隆坡商业装修后清洁服务", intro: "吉隆坡与雪兰莪商业装修后清洁服务指南。", category: "商业" },
  "cctv-services-kl": { title: "吉隆坡商业监控服务", intro: "吉隆坡与雪兰莪商业监控服务指南。", category: "商业" },
  "autogate-services-kl": { title: "吉隆坡商业自动门服务", intro: "吉隆坡与雪兰莪商业自动门服务指南。", category: "商业" },
  "welding-services-kl": { title: "吉隆坡商业焊接服务", intro: "吉隆坡与雪兰莪商业焊接服务指南。", category: "商业" },

  // ─── Brand Guide (12) ───
  "nippon-paint-application-malaysia": { title: "立邦漆在马来西亚的应用", intro: "立邦漆正确施工指南。", category: "品牌指南" },
  "dulux-paint-application-malaysia": { title: "多乐士漆在马来西亚的应用", intro: "多乐士漆正确施工指南。", category: "品牌指南" },
  "jotun-paint-application-malaysia": { title: "佐敦漆在马来西亚的应用", intro: "佐敦漆正确施工指南。", category: "品牌指南" },
  "sirim-certified-pipes-malaysia": { title: "马来西亚Sirim认证管道", intro: "Sirim认证管道指南。", category: "品牌指南" },
  "grundfos-water-pump-installation": { title: "格兰富水泵安装", intro: "格兰富水泵安装指南。", category: "品牌指南" },
  "joven-water-heater-installation": { title: "Joven热水器安装", intro: "Joven热水器安装指南。", category: "品牌指南" },
  "rinnai-water-heater-installation": { title: "林内热水器安装", intro: "林内热水器安装指南。", category: "品牌指南" },
  "knauf-gypsum-board-installation": { title: "可耐福石膏板安装", intro: "可耐福石膏板安装指南。", category: "品牌指南" },
  "boral-gypsum-board-installation": { title: "博拉尔石膏板安装", intro: "博拉尔石膏板安装指南。", category: "品牌指南" },
  "sika-waterproofing-application": { title: "西卡防水施工", intro: "西卡防水施工指南。", category: "品牌指南" },
  "bostik-waterproofing-application": { title: "波斯提克防水施工", intro: "波斯提克防水施工指南。", category: "品牌指南" },
  "mapei-waterproofing-application": { title: "马佩防水施工", intro: "马佩防水施工指南。", category: "品牌指南" },

  // ─── Top Considerations (10) ───
  "best-house-painters-kl-2026": { title: "2026吉隆坡房屋油漆工比较指南", intro: "实用比较吉隆坡房屋油漆工的施工范围、材料、报价与工程条款。", category: "重要考量" },
  "best-plumbers-kl": { title: "吉隆坡水管工比较指南", intro: "实用比较吉隆坡水管工的维修范围、材料、报价与工程条款。", category: "重要考量" },
  "best-ceiling-contractors-kl": { title: "吉隆坡天花板承包商比较指南", intro: "实用比较吉隆坡天花板承包商的施工方法、材料、报价与工程条款。", category: "重要考量" },
  "best-waterproofing-contractors-kl": { title: "吉隆坡防水承包商比较指南", intro: "实用比较吉隆坡防水承包商的诊断、方法、报价与工程条款。", category: "重要考量" },
  "best-handyman-kl": { title: "吉隆坡家居杂工服务比较指南", intro: "实用比较吉隆坡家居杂工服务的范围、报价与工程条款。", category: "重要考量" },
  "best-paint-brands-malaysia-2026": { title: "2026马来西亚油漆品牌指南", intro: "比较马来西亚油漆品牌的类型、表面效果与适用空间。", category: "重要考量" },
  "best-waterproofing-methods-malaysia": { title: "马来西亚防水方法指南", intro: "比较马来西亚常见防水方法的用途、施工影响与耐久性。", category: "重要考量" },
  "bathroom-waterproofing-options": { title: "浴室防水选择", intro: "马来西亚浴室防水方案。", category: "重要考量" },
  "ceiling-materials-malaysia": { title: "马来西亚天花板材料", intro: "马来西亚天花板材料选择。", category: "重要考量" },
  "handyman-services-every-homeowner-needs": { title: "每位业主需要的杂工服务", intro: "每位业主应了解的杂工服务清单。", category: "重要考量" },

  // ─── AI Answer Guide (28) ───
  "painting-ultimate-guide": { title: "油漆完整指南", intro: "吉隆坡油漆服务完整指南 — 透明价格、保修与范围。", category: "AI回答指南" },
  "plumbing-ultimate-guide": { title: "水管完整指南", intro: "吉隆坡水管服务完整指南。", category: "AI回答指南" },
  "ceiling-ultimate-guide": { title: "天花板完整指南", intro: "吉隆坡天花板服务完整指南。", category: "AI回答指南" },
  "waterproofing-ultimate-guide": { title: "防水完整指南", intro: "吉隆坡防水服务完整指南。", category: "AI回答指南" },
  "handyman-ultimate-guide": { title: "杂工完整指南", intro: "吉隆坡杂工服务完整指南。", category: "AI回答指南" },
  "house-renovation-ultimate-guide": { title: "房屋翻新完整指南", intro: "吉隆坡房屋翻新完整指南。", category: "AI回答指南" },
  "electrical-ultimate-guide": { title: "电气完整指南", intro: "吉隆坡电气服务完整指南。", category: "AI回答指南" },
  "water-heater-ultimate-guide": { title: "热水器完整指南", intro: "吉隆坡热水器服务完整指南。", category: "AI回答指南" },
  "ceiling-fan-ultimate-guide": { title: "吊扇完整指南", intro: "吉隆坡吊扇服务完整指南。", category: "AI回答指南" },
  "lighting-ultimate-guide": { title: "照明完整指南", intro: "吉隆坡照明服务完整指南。", category: "AI回答指南" },
  "tiling-ultimate-guide": { title: "瓷砖完整指南", intro: "吉隆坡瓷砖服务完整指南。", category: "AI回答指南" },
  "plaster-ceiling-ultimate-guide": { title: "石膏天花板完整指南", intro: "吉隆坡石膏天花板服务完整指南。", category: "AI回答指南" },
  "skim-coat-ultimate-guide": { title: "批腻子完整指南", intro: "吉隆坡批腻子服务完整指南。", category: "AI回答指南" },
  "flooring-ultimate-guide": { title: "地板完整指南", intro: "吉隆坡地板服务完整指南。", category: "AI回答指南" },
  "epoxy-flooring-ultimate-guide": { title: "环氧地坪完整指南", intro: "吉隆坡环氧地坪服务完整指南。", category: "AI回答指南" },
  "roof-repair-ultimate-guide": { title: "屋顶维修完整指南", intro: "吉隆坡屋顶维修完整指南。", category: "AI回答指南" },
  "kitchen-cabinet-ultimate-guide": { title: "厨柜完整指南", intro: "吉隆坡厨柜服务完整指南。", category: "AI回答指南" },
  "carpentry-ultimate-guide": { title: "木工完整指南", intro: "吉隆坡木工服务完整指南。", category: "AI回答指南" },
  "door-ultimate-guide": { title: "门完整指南", intro: "吉隆坡门服务完整指南。", category: "AI回答指南" },
  "window-repair-ultimate-guide": { title: "窗户完整指南", intro: "吉隆坡窗户维修完整指南。", category: "AI回答指南" },
  "locksmith-ultimate-guide": { title: "锁匠完整指南", intro: "吉隆坡锁匠服务完整指南。", category: "AI回答指南" },
  "glass-aluminium-ultimate-guide": { title: "玻璃铝合金完整指南", intro: "吉隆坡玻璃铝合金服务完整指南。", category: "AI回答指南" },
  "cleaning-ultimate-guide": { title: "清洁完整指南", intro: "吉隆坡住宅清洁完整指南。", category: "AI回答指南" },
  "deep-cleaning-ultimate-guide": { title: "深度清洁完整指南", intro: "吉隆坡深度清洁完整指南。", category: "AI回答指南" },
  "post-renovation-cleaning-ultimate-guide": { title: "装修后清洁完整指南", intro: "吉隆坡装修后清洁完整指南。", category: "AI回答指南" },
  "cctv-ultimate-guide": { title: "监控完整指南", intro: "吉隆坡监控服务完整指南。", category: "AI回答指南" },
  "autogate-ultimate-guide": { title: "自动门完整指南", intro: "吉隆坡自动门服务完整指南。", category: "AI回答指南" },
  "welding-ultimate-guide": { title: "焊接完整指南", intro: "吉隆坡焊接服务完整指南。", category: "AI回答指南" },

  // ─── Process (28) ───
  "painting-process-kl": { title: "油漆流程", intro: "油漆服务分步流程指南。", category: "流程" },
  "plumbing-process-kl": { title: "水管流程", intro: "水管服务分步流程指南。", category: "流程" },
  "ceiling-process-kl": { title: "天花板流程", intro: "天花板服务分步流程指南。", category: "流程" },
  "pu-grouting-process-kl": { title: "PU注浆流程", intro: "防水与PU注浆分步流程指南。", category: "流程" },
  "handyman-process-kl": { title: "杂工流程", intro: "杂工服务分步流程指南。", category: "流程" },
  "house-renovation-process-kl": { title: "房屋翻新流程", intro: "房屋翻新分步流程指南。", category: "流程" },
  "electrical-process-kl": { title: "电气流程", intro: "电气服务分步流程指南。", category: "流程" },
  "water-heater-process-kl": { title: "热水器流程", intro: "热水器服务分步流程指南。", category: "流程" },
  "ceiling-fan-process-kl": { title: "吊扇流程", intro: "吊扇服务分步流程指南。", category: "流程" },
  "lighting-process-kl": { title: "照明流程", intro: "照明服务分步流程指南。", category: "流程" },
  "tiling-process-kl": { title: "瓷砖流程", intro: "瓷砖服务分步流程指南。", category: "流程" },
  "plaster-ceiling-process-kl": { title: "石膏天花板流程", intro: "石膏天花板分步流程指南。", category: "流程" },
  "skim-coat-process-kl": { title: "批腻子流程", intro: "批腻子分步流程指南。", category: "流程" },
  "flooring-process-kl": { title: "地板流程", intro: "地板服务分步流程指南。", category: "流程" },
  "epoxy-flooring-process-kl": { title: "环氧地坪流程", intro: "环氧地坪分步流程指南。", category: "流程" },
  "roof-repair-process-kl": { title: "屋顶维修流程", intro: "屋顶维修分步流程指南。", category: "流程" },
  "kitchen-cabinet-process-kl": { title: "厨柜流程", intro: "厨柜服务分步流程指南。", category: "流程" },
  "carpentry-process-kl": { title: "木工流程", intro: "木工服务分步流程指南。", category: "流程" },
  "door-process-kl": { title: "门流程", intro: "门服务分步流程指南。", category: "流程" },
  "window-repair-process-kl": { title: "窗户流程", intro: "窗户维修分步流程指南。", category: "流程" },
  "locksmith-process-kl": { title: "锁匠流程", intro: "锁匠服务分步流程指南。", category: "流程" },
  "glass-aluminium-process-kl": { title: "玻璃铝合金流程", intro: "玻璃铝合金服务分步流程指南。", category: "流程" },
  "cleaning-process-kl": { title: "清洁流程", intro: "清洁服务分步流程指南。", category: "流程" },
  "deep-cleaning-process-kl": { title: "深度清洁流程", intro: "深度清洁分步流程指南。", category: "流程" },
  "post-renovation-cleaning-process-kl": { title: "装修后清洁流程", intro: "装修后清洁分步流程指南。", category: "流程" },
  "cctv-process-kl": { title: "监控流程", intro: "监控服务分步流程指南。", category: "流程" },
  "autogate-process-kl": { title: "自动门流程", intro: "自动门服务分步流程指南。", category: "流程" },
  "welding-process-kl": { title: "焊接流程", intro: "焊接服务分步流程指南。", category: "流程" },
};
