/**
 * Ceiling Repair & Installation Estimator — Bahasa Malaysia content dictionary.
 * Key set and {tokens} must stay identical to ceiling-en.ts (harness-checked).
 */

import type { MessageDictionary } from "../../../i18n";

export const ceilingMsDict: MessageDictionary = {
  meta: {
    name: "Anggaran Baik Pulih Siling",
    resultLabel: "Anggaran kos siling"
  },
  steps: {
    type: {
      title: "Apa jenis siling anda?",
      subtitle: "Tidak pasti? Pilih pilihan terakhir dan kami kenal pasti di tapak."
    },
    work: {
      title: "Apa yang perlu dilakukan?",
      subtitle: "Baik pulih, ganti sebahagian atau reka bentuk baharu."
    },
    area: {
      title: "Berapa besar kawasan itu?",
      subtitle: "Sentuh saiz terdekat — tidak perlu mengukur."
    },
    damage: {
      title: "Bagaimana keadaannya?",
      subtitle: "Tahap kerosakan menentukan berapa banyak rangka perlu dibina semula."
    },
    access: {
      title: "Ketinggian siling & masa",
      subtitle: "Ketinggian menentukan peralatan akses yang kami bawa."
    }
  },
  fields: {
    ceilingType: { label: "Bahan siling" },
    workType: { label: "Jenis kerja" },
    areaPreset: { label: "Luas siling / partisi" },
    customLength: { label: "Panjang" },
    customWidth: { label: "Lebar" },
    damage: { label: "Tahap kerosakan" },
    extras: { label: "Ada lagi yang perlu disertakan?", help: "Pilihan — tandakan semua yang berkaitan." },
    lightCount: { label: "Berapa banyak lampu perlu ditanggalkan?" },
    height: { label: "Ketinggian siling" },
    urgency: { label: "Bila anda perlukan?" }
  },
  formats: {
    fittingOne: "{value} lampu",
    fittingMany: "{value} lampu"
  },
  ceilingTypes: {
    gypsum: { label: "Papan gypsum", hint: "Paling biasa di kondo & rumah baharu" },
    plaster: { label: "Siling plaster", hint: "Papan plaster kemasan skim" },
    pvc: { label: "Panel PVC", hint: "Siling jalur tahan lembap" },
    "calcium-silicate": { label: "Kalsium silikat", hint: "Papan tahan api & lembap" },
    wood: { label: "Kayu / timber", hint: "Siling jalur kayu atau papan lapis" },
    "cement-board": { label: "Papan simen", hint: "Sofit kawasan basah / luar" },
    "not-sure": { label: "Tidak pasti", hint: "Kami kenal pasti di tapak" }
  },
  workTypes: {
    repair: { label: "Baiki siling sedia ada", hint: "Tampal, skim semula atau ganti sebahagian" },
    "replace-section": { label: "Ganti satu bahagian", hint: "Potong dan bina semula papan rosak" },
    "new-flat": { label: "Siling rata baharu", hint: "Reka bentuk satu aras kemas" },
    "new-tiered": { label: "Siling bertingkat / L-box baharu", hint: "Reka bentuk alur LED tersembunyi" },
    "new-cove": { label: "Siling lengkung / cove baharu", hint: "Ciri lengkung tersuai" },
    partition: { label: "Dinding partisi gypsum", hint: "Bahagikan bilik atau pejabat" }
  },
  areaPresets: {
    "small-patch": { label: "Tampalan kecil (sehingga 20 kps)", hint: "Satu tempat rosak" },
    "8x10": { hint: "Bilik tidur kecil" },
    "10x10": { hint: "Bilik tidur standard" },
    "10x12": { hint: "Bilik tidur utama" },
    "12x15": { hint: "Ruang tamu" },
    "15x20": { hint: "Ruang tamu besar" },
    "20x25": { hint: "Konsep terbuka / lot kedai" },
    custom: { label: "Saiz tersuai", hint: "Masukkan ukuran anda sendiri" }
  },
  damage: {
    none: { label: "Tiada kerosakan — pemasangan baharu", hint: "Binaan baharu" },
    hairline: { label: "Retak rambut sahaja", hint: "Pergerakan sendi kosmetik" },
    cracks: { label: "Retakan jelas", hint: "Pita sendi gagal" },
    stains: { label: "Kotoran air", hint: "Kebocoran lepas atau semasa" },
    sagging: { label: "Papan melendut", hint: "Pengikat atau rangka gagal" },
    hole: { label: "Lubang atau papan pecah", hint: "Hentakan atau potongan akses" },
    collapsed: { label: "Runtuh sebahagian", hint: "Papan telah jatuh" },
    mould: { label: "Pertumbuhan kulat", hint: "Lembap berpanjangan" }
  },
  extras: {
    "water-damage": { label: "Kerosakan air aktif", hint: "Punca bocor mesti dirawat dahulu" },
    paint: { label: "Cat siling selepasnya", hint: "Dua lapisan, padan dengan warna dinding" },
    "lighting-removal": { label: "Tanggal & pasang semula lampu", hint: "Downlight, pendant atau trek" },
    "fan-removal": { label: "Tanggal & pasang semula kipas siling", hint: "Termasuk semakan cangkuk" },
    cornice: { label: "Tambah cornice / moulding", hint: "Trim perimeter hiasan" },
    insulation: { label: "Tambah lapisan penebat", hint: "Pengurangan haba dan bunyi" },
    debris: { label: "Pelupusan serpihan diperlukan", hint: "Papan lama diangkut keluar" }
  },
  heights: {
    standard: { label: "Standard (sehingga 10 kaki)", hint: "Tangga biasa" },
    tall: { label: "Tinggi (10 – 14 kaki)", hint: "Pentas lanjutan" },
    void: { label: "Volume ganda / void", hint: "Menara perancah diperlukan" }
  },
  urgency: {
    standard: { label: "Jadual standard", hint: "Slot terdekat tersedia" },
    "7-days": { label: "Dalam 7 hari", hint: "Penjadualan keutamaan" },
    urgent: { label: "Segera — 48 jam", hint: "Krew disusun semula untuk anda" },
    emergency: { label: "Kecemasan — risiko lendutan", hint: "Selamat sementara hari sama" }
  },
  work: {
    "new-flat": {
      rateNote: "Kadar diterbitkan: {label}",
      service: "Pemasangan Siling Plaster Rata",
      package: "Pakej Siling Rata"
    },
    "new-tiered": {
      rateNote: "Kadar diterbitkan: {label}",
      service: "Pemasangan Siling Bertingkat & L-Box",
      package: "Pakej Reka Bentuk L-Box"
    },
    "new-cove": {
      rateNote: "Kadar diterbitkan: {label}",
      service: "Pemasangan Siling Cove & Lengkung",
      package: "Pakej Siling Ciri"
    },
    partition: {
      rateNote: "Kadar diterbitkan: {label}",
      service: "Dinding Partisi Papan Gypsum",
      package: "Pakej Partisi"
    },
    "replace-section": {
      rateNote: "Jalur pemasangan diterbitkan RM {low}–RM {high} / kps",
      service: "Penggantian Bahagian Siling",
      package: "Pakej Ganti Bahagian"
    },
    repair: {
      rateNote: "Kadar diterbitkan: {label}",
      service: "Baik Pulih & Skim Semula Siling Plaster",
      package: "Pakej Baik Pulih & Skim Semula"
    }
  },
  breakdown: {
    ceilingArea: "Luas siling",
    ceilingAreaValue: "{area} kps",
    customBasis: "{length} × {width} kaki",
    appliedRate: "Kadar dikenakan",
    appliedRateValue: "RM {rate} / kps",
    appliedRateNote: "{rateNote} · faktor {type} ×{factor} · {damage}",
    leakSource: "Rawatan punca bocor",
    leakSourceNote: "Kadar diterbitkan: {label} — punca dimeterai sebelum pemulihan",
    painting: "Pengecatan siling",
    paintingNote: "{area} kps × jalur pengecatan dalaman diterbitkan",
    lighting: "Tanggal & pasang semula lampu",
    lightingNoteOne: "{count} titik pada separuh kadar diterbitkan {label}",
    lightingNoteMany: "{count} titik pada separuh kadar diterbitkan {label}",
    fan: "Tanggal & pasang semula kipas siling",
    fanNote: "Diperoleh daripada kadar diterbitkan {label}",
    cornice: "Cornice / moulding hiasan",
    corniceNote: "≈ {perimeter} kaki linear perimeter",
    insulation: "Lapisan penebat",
    insulationNote: "Lapisan rockwool / berlapis foil di atas papan",
    debris: "Pelupusan serpihan",
    debrisNote: "Kadar tugas handyman diterbitkan",
    minimum: "Nilai kerja minimum dikenakan",
    minimumNote: "Harga permulaan diterbitkan: {label}"
  },
  durations: {
    halfDay: "Setengah hari (3–4 jam)",
    oneDay: "1 hari bekerja",
    oneTwoDays: "1–2 hari bekerja",
    threeFourDays: "3–4 hari bekerja",
    aboutDays: "Lebih kurang {n} hari bekerja"
  },
  addons: {
    paint: { label: "Cat siling yang siap", note: "Dua lapisan di atas permukaan baharu" },
    downlights: { label: "Titik downlight LED baharu", note: "Kadar diterbitkan: {label} setiap titik" },
    coveLighting: { label: "Jalur LED cove tersembunyi", note: "Diperoleh daripada kadar LED cove & jalur diterbitkan" },
    waterproof: { label: "Kalis air punca bocor", note: "Kadar diterbitkan: {label}" },
    postClean: { label: "Pembersihan selepas kerja", note: "Tanggalkan selaput habuk dan vakum penuh" }
  },
  related: {
    plasterCeiling: { label: "Servis Siling Plaster", desc: "Reka bentuk rata, bertingkat dan cove" },
    ceilingRepair: { label: "Baik Pulih Siling", desc: "Kerosakan air dan partisi" },
    costGuide: { label: "Panduan Kos Siling", desc: "Kadar 2026 diterbitkan" },
    lighting: { label: "Pemasangan Lampu", desc: "Downlight dan jalur cove" },
    waterproofing: { label: "Kalis Air", desc: "Hentikan bocor di atas siling" }
  },
  articles: {
    gypsumVs: "Siling Gypsum vs Plaster di Malaysia",
    ceilingFix: "Cara Baiki Siling Bocor Tanpa Pecahkan Jubin"
  },
  assumptions: {
    framing: "Kadar mengandaikan grid rangka GI standard pada jarak biasa di atas rongga siling yang boleh diakses.",
    services: "Pendawaian, paip penghawa dingin dan kepala sprinkler sedia ada dilalui, bukan dipindahkan.",
    belowMinimum: "Skop anda di bawah nilai kerja minimum kami, jadi harga permulaan diterbitkan dikenakan.",
    included: "Bahan papan dan skim termasuk dalam kadar kps.",
    sagging: "Siling melendut atau runtuh diselamatkan dahulu; skop muktamad disahkan selepas rongga dibuka."
  },
  maintenance: {
    inspect: "Periksa sendi siling selepas hujan monsun lebat — kotoran awal murah dirawat.",
    ventilate: "Pastikan rongga siling berventilasi untuk mengelakkan nyahwap paip penghawa dingin.",
    reskim: "Skim semula dan cat setiap 5–7 tahun supaya sendi kekal tidak kelihatan."
  }
};
