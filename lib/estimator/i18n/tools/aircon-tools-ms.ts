import type { MessageDictionary } from "../../../i18n";

export const airconToolsMsDict: MessageDictionary = {
  "common": {
    "duration": "Hari sama",
    "package": "Servis Aircond",
    "relatedService": "Servis Aircond",
    "relatedServiceDesc": "Lihat halaman servis aircond penuh",
    "relatedPrice": "Panduan Harga Aircond",
    "relatedPriceDesc": "Semak senarai harga 2026",
    "assumption": "Anggaran sahaja — sebut harga akhir menyusul selepas pemeriksaan di tapak.",
    "access": {
      "easy": "Akses mudah",
      "difficult": "Akses sukar"
    }
  },
  "install": {
    "meta": { "name": "Kalkulator Kos Pemasangan Aircond" },
    "unit": {
      "wall1": "Unit Dinding 1.0–1.5 HP",
      "wall2": "Unit Dinding 2.0 HP",
      "wall25": "Unit Dinding 2.5 HP",
      "wall3": "Unit Dinding 3.0 HP",
      "wall4": "Unit Dinding 4.0 HP",
      "wall5": "Unit Dinding 5.0 HP",
      "cassette": "Kaset Siling 1.0–1.5 HP",
      "window": "Unit Tingkap 1.0–1.5 HP"
    },
    "steps": {
      "unit": { "title": "Unit apa yang anda pasang?", "subtitle": "Pilih jenis dan kuasa kuda" },
      "extra": { "title": "Tembaga tambahan & akses", "subtitle": "Tembaga melebihi 7 kaki dikenakan caj setiap kaki" }
    },
    "fields": {
      "unit": "Jenis unit",
      "copper": "Paip tembaga tambahan",
      "access": "Akses"
    },
    "breakdown": {
      "base": "Asas pemasangan",
      "baseNote": "Pemasangan sahaja — unit tidak termasuk",
      "copper": "Tembaga tambahan",
      "copperNote": "setiap kaki melebihi 7 kaki",
      "copperNone": "Tiada tembaga tambahan"
    },
    "result": { "service": "Pemasangan Aircond" }
  },
  "gas": {
    "meta": { "name": "Kalkulator Kos Top-Up Gas Aircond" },
    "steps": {
      "gas": { "title": "Bahan pendingin apa?", "subtitle": "Semak plat nama pada unit luar" },
      "amount": { "title": "Berapa banyak gas?", "subtitle": "PSI diperlukan dan pemeriksaan kebocoran" }
    },
    "fields": {
      "gas": "Jenis bahan pendingin",
      "psi": "PSI diperlukan",
      "leak": "Sertakan pemeriksaan kebocoran struktur"
    },
    "types": {
      "r22": "R22",
      "r410a": "R410A",
      "r32": "R32"
    },
    "leak": {
      "yes": "Ya",
      "no": "Tidak"
    },
    "breakdown": {
      "gas": "Top-up gas",
      "leak": "Pemeriksaan kebocoran",
      "leakNone": "Tidak disertakan",
      "leakNote": "Dari RM 114, disertakan"
    },
    "result": { "service": "Top-Up Gas Aircond" }
  },
  "size": {
    "meta": { "name": "Kalkulator Saiz Aircond" },
    "steps": {
      "room": { "title": "Tentang bilik", "subtitle": "Keluasan, siling dan pendedahan matahari" }
    },
    "fields": {
      "area": "Keluasan bilik",
      "ceiling": "Ketinggian siling",
      "exposure": "Pendedahan matahari"
    },
    "ceiling": {
      "standard": "Standard (9–10 kaki)",
      "high": "Tinggi / double-volume"
    },
    "exposure": {
      "low": "Rendah (teduh)",
      "high": "Tinggi (menghadap barat / panas)"
    },
    "breakdown": {
      "area": "Keluasan bilik",
      "btu": "Penyejukan disyorkan",
      "hp": "≈ {hp} HP"
    },
    "result": { "service": "Aircond" }
  },
  "btu": {
    "meta": { "name": "Kalkulator BTU Aircond" },
    "steps": {
      "dims": { "title": "Dimensi bilik", "subtitle": "Panjang, lebar dan penghuni" }
    },
    "fields": {
      "length": "Panjang",
      "width": "Lebar",
      "occupancy": "Bilangan orang dalam bilik"
    },
    "people": "orang",
    "breakdown": {
      "area": "Keluasan lantai",
      "occupancy": "Penghuni",
      "btu": "BTU diperlukan"
    },
    "result": { "service": "Aircond" }
  },
  "elec": {
    "meta": { "name": "Kalkulator Kos Elektrik Aircond" },
    "steps": {
      "usage": { "title": "Penggunaan", "subtitle": "Kuasa kuda dan jam harian" }
    },
    "fields": {
      "hp": "Kuasa kuda",
      "hours": "Jam sehari"
    },
    "breakdown": {
      "usage": "Penggunaan harian",
      "monthly": "Anggaran kos bulanan",
      "note": "pada RM 0.50/kWj — anggaran sahaja"
    },
    "result": { "service": "Aircond" }
  },
  "save": {
    "meta": { "name": "Kalkulator Penjimatan Aircond Inverter" },
    "steps": {
      "usage": { "title": "Penggunaan", "subtitle": "Kuasa kuda dan jam harian" }
    },
    "fields": {
      "hp": "Kuasa kuda",
      "hours": "Jam sehari"
    },
    "breakdown": {
      "saving": "Penjimatan inverter",
      "pct": "≈ 35% berbanding bukan inverter",
      "monthly": "Anggaran penjimatan bulanan",
      "note": "pada RM 0.50/kWj — anggaran sahaja"
    },
    "result": { "service": "Aircond" }
  },
  "pick": {
    "meta": { "name": "Servis Aircond Mana Yang Saya Perlukan?" },
    "steps": {
      "symptoms": { "title": "Apa yang anda lihat?", "subtitle": "Pilih semua yang berkaitan" }
    },
    "fields": { "symptoms": "Gejala" },
    "symptoms": {
      "not-cold": "Tidak sejuk / udara panas",
      "leaking": "Air bocor",
      "noise": "Berbunyi bising",
      "smell": "Berbau busuk",
      "weak": "Aliran udara lemah",
      "not-on": "Tidak boleh dihidupkan",
      "ice": "Ais terbentuk"
    },
    "breakdown": {
      "symptoms": "Gejala",
      "service": "Servis disyorkan"
    },
    "findings": { "detail": "Juruteknik akan mengesahkan diagnosis di tapak." }
  }
};
