/**
 * Plumbing Diagnostic Estimator — Bahasa Malaysia content dictionary.
 * Key set and {tokens} must stay identical to plumbing-en.ts (harness-checked).
 * NOTE: severity labels keep the " — " separator; the breakdown note renders
 * the short form before it.
 */

import type { MessageDictionary } from "../../../i18n";

export const plumbingMsDict: MessageDictionary = {
  meta: {
    name: "Diagnostik Paip",
    resultLabel: "Anggaran kos baik pulih"
  },
  steps: {
    problem: {
      title: "Apa masalahnya?",
      subtitle: "Pilih yang paling hampir — anda boleh tambah butiran di WhatsApp selepas ini."
    },
    severity: {
      title: "Berapa teruk keadaannya?",
      subtitle: "Ini menentukan tahap kecemasan dan keutamaan hantaran."
    },
    location: {
      title: "Di mana dalam hartanah?",
      subtitle: "Lokasi mempengaruhi akses dan laluan paip."
    },
    property: {
      title: "Tentang hartanah",
      subtitle: "Paip lama biasanya perlukan lebih banyak kerja untuk dicapai."
    },
    timing: {
      title: "Bila anda perlukan plumber?",
      subtitle: "Hantaran kecemasan membawa kenaikan — sentiasa dijelaskan sebelum kerja bermula."
    }
  },
  fields: {
    problem: { label: "Masalah paip" },
    severity: { label: "Keterukan" },
    location: { label: "Lokasi" },
    quantity: { label: "Berapa banyak fixture / titik terjejas?" },
    houseType: { label: "Jenis hartanah" },
    propertyAge: { label: "Usia hartanah" },
    partsSupply: { label: "Siapa membekalkan alat ganti?" },
    timing: { label: "Masa pilihan" }
  },
  formats: {
    pointOne: "{value} titik",
    pointMany: "{value} titik"
  },
  problems: {
    "blocked-sink": {
      label: "Singki tersumbat",
      service: "Kosongkan & Cuci Saliran",
      causes: {
        "0": "Gris dan sisa makanan terkumpul dalam perangkap",
        "1": "Paip kumbahan reput separa",
        "2": "Laluan cawangan dikongsi fixture lain tersumbat"
      }
    },
    "blocked-toilet": {
      label: "Tandas tersumbat",
      service: "Kosongkan Tersumbat Tandas",
      causes: {
        "0": "Objek asing tersangkut di laluan perangkap",
        "1": "Cerucuk tanah atau lubang benlor tersumbat",
        "2": "Isipadu flush tidak mencukupi"
      }
    },
    "blocked-floor-trap": {
      label: "Perangkap lantai tersumbat",
      service: "Kosongkan Perangkap Lantai & Saliran",
      causes: {
        "0": "Rambut dan kerak sabun terkumpul",
        "1": "Kelodak terkumpul dalam perangkap",
        "2": "Grating perangkap rosak"
      }
    },
    "outdoor-drain": {
      label: "Longkang luar tersumbat",
      service: "Kosongkan Saliran Luar",
      causes: {
        "0": "Daun dan kelodak terkumpul",
        "1": "Akar menembusi saluran",
        "2": "Bahagian saliran pecah atau reput"
      }
    },
    "pipe-leak": {
      label: "Paip bocor",
      service: "Diagnosis & Baiki Bocor Paip",
      causes: {
        "0": "Laluan paip berkarat atau belah",
        "1": "Sambungan mampatan gagal",
        "2": "Tekanan berlebihan membebankan fitting"
      }
    },
    "concealed-leak": {
      label: "Bocor tersembunyi",
      service: "Kesan & Baiki Bocor Tersembunyi",
      causes: {
        "0": "Paip bekalan terbenam gagal bawah papak",
        "1": "Sambungan paip dalam dinding bocor",
        "2": "Kakis pinhole pada paip GI lama"
      }
    },
    "outdoor-pipe": {
      label: "Paip luar bocor",
      service: "Baiki Paip Luar",
      causes: {
        "0": "Saluran bekalan bawah tanah retak",
        "1": "Sambungan meter rosak",
        "2": "Fitting paip taman gagal"
      }
    },
    "low-pressure": {
      label: "Tekanan air rendah",
      service: "Diagnosis Tekanan Air & Pam Booster",
      causes: {
        "0": "Stopcock tertutup separa atau seret",
        "1": "Kerak terkumpul dalam paip bergalvani lama",
        "2": "Pam tekanan atau terapung tangki gagal",
        "3": "Bocor tersembunyi mengurangkan tekanan"
      }
    },
    "no-water": {
      label: "Tiada air langsung",
      service: "Pemulihan Bekalan Kecemasan",
      causes: {
        "0": "Injap utama tertutup atau gagal",
        "1": "Tangki simpanan kosong / injap terapung tersekat",
        "2": "Kerosakan elektrik pam",
        "3": "Gangguan bekalan dari pihak utiliti"
      }
    },
    "tap-replacement": {
      label: "Ganti kepala paip",
      service: "Ganti Kepala Paip & Mixer",
      causes: {
        "0": "Kartrij atau sesendal haus",
        "1": "Badan kepala paip berkarat",
        "2": "Meterai benang rosak"
      }
    },
    "mixer-replacement": {
      label: "Ganti mixer / set pancuran",
      service: "Ganti Mixer Pancuran",
      causes: {
        "0": "Kartrij termostatik gagal",
        "1": "Salur masuk dinding berkarat",
        "2": "Rel atau hos bocor"
      }
    },
    "toilet-repair": {
      label: "Baiki / ganti tandas",
      service: "Baiki & Pasang Tandas",
      causes: {
        "0": "Injap flush atau sesendal masuk haus",
        "1": "Meterai beelas di tapak gagal",
        "2": "Tangki retak"
      }
    },
    "sink-install": {
      label: "Pasang / baiki singki dapur",
      service: "Pasang Singki Dapur",
      causes: {
        "0": "Meterai atau klip singki gagal",
        "1": "Perangkap kumbahan reput",
        "2": "Penyambung bekalan longgar"
      }
    },
    bidet: {
      label: "Pasang bidet / pancuran tangan",
      service: "Pasang Semburan Bidet",
      causes: {
        "0": "Hos reput",
        "1": "Injap sudut bocor",
        "2": "Kepala semburan haus"
      }
    },
    "water-heater": {
      label: "Masalah pemanas air",
      service: "Baiki & Servis Pemanas Air",
      causes: {
        "0": "Elemen pemanas atau termostat gagal",
        "1": "RCCB terlocat akibat kemasukan lembapan",
        "2": "Kerak mengurangkan output",
        "3": "Injap pelepas tekanan bocor"
      }
    },
    "heater-install": {
      label: "Pasang pemanas air baharu",
      service: "Pasang Pemanas Air",
      causes: {
        "0": "Ganti unit tamat usia",
        "1": "Fit-out bilik air baharu",
        "2": "Naik taraf kepada kapasiti simpanan"
      }
    },
    "pump-install": {
      label: "Pasang pam air / booster",
      service: "Pasang Pam Booster",
      causes: {
        "0": "Tekanan rendah kronik di aras atas",
        "1": "Pam sedia ada gagal",
        "2": "Pemasangan tangki baharu"
      }
    }
  },
  severityLevels: {
    minor: { label: "Ringan — menyusahkan tetapi masih boleh guna", hint: "Saliran perlahan, titisan sekali-sekala" },
    moderate: { label: "Sederhana — menjejaskan penggunaan harian", hint: "Satu fixture tidak boleh guna" },
    major: { label: "Teruk — bilik tidak boleh digunakan", hint: "Melimpah atau tersumbat penuh" },
    emergency: { label: "Kecemasan — air di mana-mana", hint: "Banjir atau paip pecah" }
  },
  locations: {
    kitchen: "Dapur",
    "bathroom-main": "Bilik air utama",
    "bathroom-ensuite": "Bilik air en-suite",
    laundry: "Dobi / halaman",
    outdoor: "Luar / taman",
    "roof-tank": "Bumbung / tangki air",
    multiple: "Pelbagai lokasi"
  },
  houseTypes: {
    condo: "Kondo / Apartment",
    terrace: "Rumah Teres",
    "semi-d": "Semi-D / Banglo",
    shop: "Lot Kedai / Pejabat",
    factory: "Kilang / Gudang"
  },
  ages: {
    new: "Bawah 5 tahun",
    mid: "5 – 15 tahun",
    older: "15 – 30 tahun",
    old: "Lebih 30 tahun"
  },
  timing: {
    standard: { label: "Jadual standard", hint: "Slot terdekat tersedia" },
    today: { label: "Hari ini jika boleh", hint: "Keutamaan hari sama" },
    emergency: { label: "Kecemasan sekarang", hint: "Hantaran segera" },
    "after-hours": { label: "Selepas waktu / hujung minggu", hint: "Di luar waktu biasa" }
  },
  partsSupply: {
    include: { label: "Sertakan alat ganti dalam sebut harga", hint: "Kami bekalkan alat ganti bertauliah SIRIM" },
    customer: { label: "Saya sudah beli alat ganti", hint: "Buruh pemasangan sahaja" }
  },
  severityNote: {
    routine: "Tiada risiko kerosakan — tempah mengikut kesesuaian anda.",
    emergency: "Tutup stopcock utama dan hubungi kami sekarang — air tidak terkawal merosakkan lantai, siling dan pendawaian dalam beberapa jam.",
    urgent: "Tempah dalam 24–48 jam sebelum masalah bertukar menjadi kerosakan air.",
    soon: "Tempah dalam minggu ini — kerosakan akan terus bertambah teruk."
  },
  durations: {
    oneHour: "Lebih kurang 1 jam di tapak",
    oneTwoHours: "1–2 jam di tapak",
    halfDay: "Setengah hari bekerja",
    oneDay: "1 hari bekerja",
    oneTwoDays: "1–2 hari bekerja"
  },
  packages: {
    emergency: "Respons Paip Kecemasan",
    urgent: "Pembaikan Paip Keutamaan",
    standard: "Lawatan Paip Standard"
  },
  breakdown: {
    noteDrain: "Kadar diterbitkan: {label} · jalur disahkan RM {low}–RM {high}",
    notePublished: "Kadar diterbitkan: {label}",
    noteHeaterInstall: "Kadar diterbitkan: {instant} – {storage}",
    additionalOne: "Tambahan {n} unit pada lawatan sama",
    additionalMany: "Tambahan {n} unit pada lawatan sama",
    additionalNote: "Berdiskaun — tiada caj panggilan kedua",
    jobConditions: "Keadaan kerja",
    jobConditionsValue: "× {mult}",
    jobConditionsNote: "Keterukan {severity} · {location} · {house} · {age} · {timing}",
    supply: "Anda bekalkan alat ganti",
    supplyValue: "− RM {amount}",
    supplyNote: "Kos bahan dikeluarkan; buruh pemasangan dan waranti mutu kerja dikekalkan",
    minimum: "Caj panggilan minimum dikenakan",
    minimumNote: "Harga permulaan paip diterbitkan"
  },
  findings: {
    causeDetail: "Selalunya punca utama \"{problem}\" pada hartanah {house} berusia {age}."
  },
  addons: {
    inspection: {
      label: "Pemeriksaan kesihatan paip seluruh rumah",
      note: "Semua kepala paip, perangkap, injap dan paip kelihatan diperiksa pada lawatan sama"
    },
    drain: { label: "Kosongkan semua saliran & perangkap lantai", note: "Kadar diterbitkan: {label}" },
    leakDetection: { label: "Pengesanan bocor tersembunyi elektronik", note: "Kadar diterbitkan: {label}" },
    heaterService: { label: "Servis & buang kerak pemanas air", note: "Kadar diterbitkan: {label}" },
    waterproof: { label: "Pemeriksaan kalis air kawasan basah", note: "Kadar diterbitkan: {label}" }
  },
  related: {
    plumbing: { label: "Servis Paip", desc: "Plumber berlesen, alat ganti SIRIM" },
    costGuide: { label: "Panduan Kos Paip", desc: "Kadar 2026 diterbitkan" },
    waterHeater: { label: "Servis Pemanas Air", desc: "Pasang, baiki dan buang kerak" },
    waterproofing: { label: "Kalis Air", desc: "Perlindungan kawasan basah" },
    emergency: { label: "Paip Kecemasan", desc: "Hantaran hari sama" }
  },
  articles: {
    hiddenLeak: "Pengesanan Kebocoran Air Tersembunyi di KL",
    monsoon: "Persiapan Monsun Rumah untuk Lembah Klang"
  },
  maintenance: {
    drains: "Tuang air panas dan pencuci enzim ke saliran dapur setiap bulan untuk menghalang gris.",
    rccb: "Uji RCCB dan injap pelepas pemanas air setiap 6 bulan.",
    hoses: "Ganti hos fleksibel bawah singki setiap 5 tahun — ia titik pecah paling biasa."
  },
  assumptions: {
    visit: "Anggaran merangkumi satu lawatan dengan alatan standard; peralatan khas seperti tinjauan saliran CCTV disebut harga berasingan.",
    customerParts: "Anda bekalkan fixture atau alat ganti; kami warantikan mutu kerja sahaja.",
    includedParts: "Alat ganti standard bertauliah SIRIM disertakan; fixture berjenama premium disebut harga berasingan.",
    belowMinimum: "Tugas kecil dicaj pada harga panggilan minimum diterbitkan kami.",
    pressureTest: "Ujian tekanan selepas pembaikan disertakan."
  }
};
