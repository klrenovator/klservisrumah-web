/**
 * Bahasa Malaysia estimator chrome for the deep-tool routes.
 *
 * Contains exactly the shared form/result/fields strings the five /tools/*
 * calculators render (sections: common, form, result, severity, whatsapp) — NOT the generic
 * service-estimator content — so each locale route ships only what it needs.
 *
 * Mirrors messages/ms.json → `estimator` namespace. KEEP IN SYNC:
 * scripts/test-estimators.ts asserts these sections stay identical, so edit
 * BOTH this file and messages/ms.json together.
 */

import type { MessageDictionary } from "../../i18n";

export const chromeMsDict: MessageDictionary = {
  estimator: {
  "common": {
    "disclaimer": "Ini adalah sebut harga anggaran berdasarkan maklumat yang diberikan. Harga akhir mungkin berubah selepas pemeriksaan di tapak bergantung kepada keadaan sebenar tapak.",
    "priceInclusive": "Jumlah termasuk upah & bahan",
    "inclusiveNote": "Merangkumi upah dan bahan",
    "popular": "Popular",
    "yes": "Ya",
    "no": "Tidak",
    "decrease": "Kurangkan",
    "increase": "Tambah",
    "startOver": "Mula semula"
  },
  "form": {
    "liveEstimate": "Anggaran anda sekarang",
    "liveRange": "{low} – {high} · {duration}",
    "seeBreakdown": "Lihat pecahan penuh",
    "answerMore": "Jawab {n} lagi",
    "fineTuneTitle": "Pilihan — laras harga",
    "fineTuneSub": "{titles}. Langkau bahagian ini dan kami gunakan jawapan paling biasa.",
    "progressNudge": "{answered} daripada {total} dijawab. Ketik di sini untuk selesaikan “{field}” dan kunci anggaran anda.",
    "seeFullEstimate": "Lihat anggaran penuh saya",
    "showLeft": "Tunjukkan yang tinggal",
    "srAnnouncement": "Anggaran semasa {price}, julat {low} hingga {high}. {status}",
    "srAllAnswered": "Semua soalan dijawab.",
    "srQuestionsLeft": "{n} soalan lagi."
  },
  "result": {
    "instantEstimate": "Anggaran segera anda",
    "estimatedTotal": "Jumlah anggaran",
    "totalInclusive": "termasuk upah & bahan",
    "rangeLabel": "Julat anggaran {low} – {high}",
    "metricLabour": "Upah",
    "metricMaterials": "Bahan",
    "metricTime": "Masa diperlukan",
    "metricPackage": "Pakej",
    "recommendedService": "Perkhidmatan disyorkan",
    "viewService": "Lihat butiran perkhidmatan penuh",
    "bookNow": "Tempah Sekarang",
    "sendWhatsapp": "Hantar di WhatsApp",
    "requestSiteVisit": "Minta Lawatan Tapak",
    "callLabel": "Hubungi {phone}",
    "changeAnswers": "Tukar jawapan saya",
    "findingsTitle": "Kemungkinan punca & penemuan",
    "addonsTitle": "Tambahan dicadangkan",
    "addonsHint": "Ketik untuk tambah — jumlah dikemas kini serta-merta",
    "recommendedForYou": "Disyorkan untuk anda",
    "addonsSelected": "Tambahan dipilih: {amount} · Jumlah anggaran baharu {total}",
    "breakdownTitle": "Cara kami mengira ini",
    "breakdownSub": "Setiap kadar datang daripada senarai harga yang tersiar di laman web ini",
    "whatWeAssumed": "Apa yang kami anggapkan",
    "nextStepsTitle": "Langkah seterusnya disyorkan",
    "maintenanceTitle": "Tip penyenggaraan",
    "relatedReading": "Bacaan berkaitan"
  },
  "severity": {
    "routine": "Biasa",
    "soon": "Tempah minggu ini",
    "urgent": "Mendesak — 24 hingga 48 jam",
    "emergency": "Kecemasan — bertindak sekarang"
  },
  "whatsapp": {
    "greeting": "Salam KL Servis Rumah, saya gunakan {tool} anda dan ingin menempah.",
    "myAnswers": "JAWAPAN SAYA",
    "estimateSection": "ANGGARAN DARIPADA LAMAN WEB ANDA",
    "recommended": "Perkhidmatan disyorkan: {value}",
    "package": "Pakej: {value}",
    "estimatedCost": "Anggaran kos: {value}",
    "range": "Julat anggaran: {low} – {high}",
    "time": "Anggaran masa: {value}",
    "addons": "Tambahan: {value}",
    "totalAddons": "Jumlah anggaran dengan tambahan: {value}",
    "closing": "Sila sahkan ketersediaan dan sebut harga akhir selepas pemeriksaan.",
    "siteVisitGreeting": "Salam KL Servis Rumah, saya ingin meminta lawatan tapak percuma.",
    "siteVisitLine": "Anggaran laman web: {price} ({low} – {high}) bagi {service}."
  }
}
};
