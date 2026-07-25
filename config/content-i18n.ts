import type { GenericContentPage } from "./content-data";

export const contentI18n: Record<string, Partial<GenericContentPage>> = {
  // Cluster pages
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
  // Guide pages
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
  // Comparison pages
  "pu-grouting-vs-tile-hacking": {
    title: "Grouting PU vs Memecah Jubin",
    intro: "Perbandingan kaedah kalis air tanpa memecah jubin berbanding kaedah tradisional di KL.",
    category: "Perbandingan",
  },
  // Maintenance pages
  "painting-maintenance-schedule": {
    title: "Jadual Penyelenggaraan Pengecatan",
    intro: "Panduan praktikal penyelenggaraan cat rumah di Malaysia mengikut keutamaan dan kekerapan.",
    category: "Panduan Penyelenggaraan",
  },
};

// ZH translations (simplified for speed — full native copy can be expanded in future rounds)
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


// Expanded MS translations for all content categories (generated for full coverage)
export const contentI18nMsFull: Record<string, Partial<{ title: string; intro: string; category: string }>> = {
  // Cluster
  "interior-painting-kl": { title: "Pengecatan Dalaman di KL", intro: "Panduan lengkap pengecatan dinding dalaman.", category: "Kluster Perkhidmatan" },
  "exterior-painting-kl": { title: "Pengecatan Luar di KL", intro: "Panduan sistem salutan luar tahan UV.", category: "Kluster Perkhidmatan" },
  "commercial-painting-kl": { title: "Pengecatan Komersial di KL", intro: "Panduan pengecatan pejabat dan kedai.", category: "Kluster Perkhidmatan" },
  "leak-repair-kl": { title: "Pembaikan Kebocoran di KL", intro: "Panduan pengesanan dan pembaikan kebocoran paip.", category: "Kluster Perkhidmatan" },
  "installation-kl": { title: "Pemasangan Paip di KL", intro: "Panduan pemasangan aksesori paip.", category: "Kluster Perkhidmatan" },
  "emergency-plumbing-kl": { title: "Paip Kecemasan di KL", intro: "Panduan tindak balas kecemasan paip.", category: "Kluster Perkhidmatan" },
  "ceiling-installation-kl": { title: "Pemasangan Siling di KL", intro: "Panduan pemasangan papan gypsum dan bingkai.", category: "Kluster Perkhidmatan" },
  "repair-kl": { title: "Pembaikan Siling di KL", intro: "Panduan pembaikan siling rosak.", category: "Kluster Perkhidmatan" },
  "partition-kl": { title: "Dinding Sekatan di KL", intro: "Panduan sekatan gypsum dan penebat bunyi.", category: "Kluster Perkhidmatan" },
  "bathroom-kl": { title: "Kalis Air Bilik Air di KL", intro: "Panduan kalis air bilik air lengkap.", category: "Kluster Perkhidmatan" },
  "roof-kl": { title: "Kalis Air Bumbung di KL", intro: "Panduan kalis air bumbung dan slab konkrit.", category: "Kluster Perkhidmatan" },
  "pu-grouting-kl": { title: "Grouting PU di KL", intro: "Panduan suntikan PU untuk retak konkrit.", category: "Kluster Perkhidmatan" },
  "tv-mounting-kl": { title: "Pemasangan TV di KL", intro: "Panduan pemasangan TV selamat pada dinding campuran.", category: "Kluster Perkhidmatan" },
  "door-lock-kl": { title: "Pembaikan Pintu & Kunci di KL", intro: "Panduan pembaikan engsel, kunci, dan kunci pintar.", category: "Kluster Perkhidmatan" },
  "furniture-assembly-kl": { title: "Pemasangan Perabot di KL", intro: "Panduan pemasangan perabot rata dan penambat dinding.", category: "Kluster Perkhidmatan" },
  // Guide
  "how-to-choose-house-painter-kl": { title: "Cara Memilih Tukang Cat Rumah di KL", intro: "Panduan praktikal memilih tukang cat berkualiti.", category: "Panduan Pemilihan" },
  "how-to-choose-plumber-kl": { title: "Cara Memilih Tukang Paip di KL", intro: "Panduan memilih tukang paip berlesen.", category: "Panduan Pemilihan" },
  // Comparison
  "pu-grouting-vs-tile-hacking": { title: "Grouting PU vs Memecah Jubin", intro: "Perbandingan kaedah kalis air tanpa memecah.", category: "Perbandingan" },
  // Maintenance
  "painting-maintenance-schedule": { title: "Jadual Penyelenggaraan Pengecatan", intro: "Panduan praktikal penyelenggaraan cat.", category: "Panduan Penyelenggaraan" },
  // Seasonal
  "home-prep-rainy-season-kl": { title: "Persediaan Rumah Musim Hujan KL", intro: "Panduan persediaan rumah sebelum musim monsun.", category: "Musiman" },
  // Commercial
  "painting-commercial-kl": { title: "Pengecatan Komersial di KL", intro: "Panduan pengecatan premis komersial.", category: "Komersial" },
  // Residential
  "plumbing-residential-kl": { title: "Paip Kediaman di KL", intro: "Panduan paip untuk rumah dan kondo.", category: "Kediaman" },
  // Brand
  "nippon-paint-application-malaysia": { title: "Aplikasi Cat Nippon Malaysia", intro: "Panduan aplikasi cat Nippon yang betul.", category: "Panduan Jenama" },
  // Answer
  "painting-ultimate-guide": { title: "Panduan Lengkap Pengecatan", intro: "Panduan lengkap perkhidmatan pengecatan di KL.", category: "Panduan AI" },
  // Process
  "plumbing-process-kl": { title: "Proses Perkhidmatan Paip di KL", intro: "Panduan proses perkhidmatan paip langkah demi langkah.", category: "Proses" },
};

export const contentI18nZhFull: Record<string, Partial<{ title: string; intro: string; category: string }>> = {
  "interior-painting-kl": { title: "吉隆坡室内油漆", intro: "室内墙面油漆完整指南。", category: "服务集群" },
  "exterior-painting-kl": { title: "吉隆坡外墙油漆", intro: "外墙涂装系统实用指南。", category: "服务集群" },
  "leak-repair-kl": { title: "吉隆坡漏水维修", intro: "管道漏水检测与维修指南。", category: "服务集群" },
  "how-to-choose-house-painter-kl": { title: "如何在吉隆坡选择油漆工", intro: "选择优质油漆工的实用标准。", category: "选择指南" },
  "pu-grouting-vs-tile-hacking": { title: "PU注浆与砸瓷砖比较", intro: "无砸防水方法与传统方法比较。", category: "比较" },
  "painting-maintenance-schedule": { title: "油漆维护时间表", intro: "住宅油漆维护实用时间表。", category: "维护指南" },
};
