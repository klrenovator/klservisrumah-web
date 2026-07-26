/**
 * Water Leak Triage — Bahasa Malaysia content dictionary.
 * Key set and {tokens} must stay identical to leak-en.ts (harness-checked).
 */

import type { MessageDictionary } from "../../../i18n";

export const leakMsDict: MessageDictionary = {
  meta: {
    name: "Trias Kebocoran Air",
    resultLabel: "Anggaran kos baik pulih"
  },
  steps: {
    location: {
      title: "Di mana kebocoran itu?",
      subtitle: "Pilih tempat anda mula nampak air atau lembap."
    },
    symptoms: {
      title: "Apa yang anda perhatikan?",
      subtitle: "Pilih setiap simptom — inilah yang menentukan diagnosis."
    },
    severity: {
      title: "Berapa teruk keadaannya sekarang?",
      subtitle: "Jawab dengan jujur — ini menentukan tahap kecemasan dan keutamaan hantaran."
    },
    duration: {
      title: "Sudah berapa lama bocor?",
      subtitle: "Kebocoran lama biasanya bermakna lebih banyak kerosakan tersembunyi."
    },
    property: {
      title: "Ceritakan tentang hartanah anda",
      subtitle: "Jenis bangunan dan usia mengubah kaedah akses dan pembaikan."
    }
  },
  fields: {
    location: { label: "Lokasi kebocoran" },
    symptoms: { label: "Simptom" },
    severity: { label: "Keterukan kebocoran" },
    affected: { label: "Berapa luas kawasan terjejas?" },
    duration: { label: "Tempoh kebocoran" },
    propertyType: { label: "Jenis hartanah" },
    propertyAge: { label: "Usia hartanah" }
  },
  locations: {
    bathroom: {
      label: "Bilik air",
      service: "Kalis Air & Baiki Bocor Bilik Air",
      causes: {
        "0": "Membran kalis air lantai gagal",
        "1": "Grout jubin retak atau tertanggal",
        "2": "Perangkap lantai atau sambungan mixer pancuran bocor",
        "3": "Meterai sekitar bekas tandas gagal"
      }
    },
    kitchen: {
      label: "Dapur",
      service: "Baiki Bocor Paip Dapur",
      causes: {
        "0": "Perangkap singki atau sambungan kumbahan longgar",
        "1": "Hos fleksibel bawah singki reput",
        "2": "Paip bekalan tersembunyi retak",
        "3": "Laluan kumbahan tersumbat melimpah balik"
      }
    },
    roof: {
      label: "Bumbung",
      service: "Diagnosis & Baiki Bocor Bumbung",
      causes: {
        "0": "Jubin bumbung retak atau tergelincir",
        "1": "Tampalan rabung gagal / perlu tampal semula",
        "2": "Talang lembah atau flashing berkarat",
        "3": "Talang tersumbat menyebabkan limpahan"
      }
    },
    ceiling: {
      label: "Siling",
      service: "Baiki Bocor & Pulih Siling",
      causes: {
        "0": "Bocor dari unit atau bilik air di atas",
        "1": "Air bumbung atau talang menyebar sepanjang papak",
        "2": "Nyahwap dari paip penghawa dingin",
        "3": "Paip tersembunyi pecah dalam rongga siling"
      }
    },
    balcony: {
      label: "Balkoni / Halaman",
      service: "Kalis Air Balkoni",
      causes: {
        "0": "Membran balkoni gagal",
        "1": "Perangkap lantai balkoni tersumbat",
        "2": "Screed retak di tepi papak",
        "3": "Air takungan akibat cerun tidak baik"
      }
    },
    wall: {
      label: "Dinding",
      service: "Rawatan Lembap & Suntikan Dinding",
      causes: {
        "0": "Lembap menaik dari papak tanah",
        "1": "Paip tersembunyi bocor dalam dinding",
        "2": "Retakan dinding luar dimasuki hujan",
        "3": "Meterai ambang / bingkai tingkap gagal"
      }
    },
    outdoor: {
      label: "Luar / Taman",
      service: "Baiki Paip & Saliran Luar",
      causes: {
        "0": "Paip bekalan bawah tanah retak",
        "1": "Paip taman atau bib hos bocor",
        "2": "Laluan saliran pecah",
        "3": "Sambungan meter air rosak"
      }
    },
    "water-tank": {
      label: "Tangki Air",
      service: "Baiki Tangki Air & Pam",
      causes: {
        "0": "Injap terapung bola gagal",
        "1": "Badan tangki atau fitting retak",
        "2": "Paip limpah mengalir berterusan",
        "3": "Sambungan salur keluar tangki longgar"
      }
    },
    pipe: {
      label: "Paip (kelihatan)",
      service: "Baiki Bocor Paip",
      causes: {
        "0": "Bahagian paip berkarat atau belah",
        "1": "Sambungan atau fitting mampatan gagal",
        "2": "Tekanan air berlebihan membebankan sambungan",
        "3": "Paip besi bergalvani usang"
      }
    },
    toilet: {
      label: "Tandas",
      service: "Baiki & Meterai Semula Tandas",
      causes: {
        "0": "Injap flush atau sesendal masuk haus",
        "1": "Meterai beelas lilin / getah gagal",
        "2": "Tangki atau mangkuk retak",
        "3": "Penyambung bekalan air longgar"
      }
    },
    tap: {
      label: "Kepala Paip / Mixer",
      service: "Ganti Kepala Paip & Mixer",
      causes: {
        "0": "Kartrij atau sesendal haus",
        "1": "Badan kepala paip berkarat",
        "2": "Penyambung fleksibel longgar atau retak",
        "3": "Meterai benang rosak"
      }
    },
    "water-heater": {
      label: "Pemanas Air",
      service: "Baiki Pemanas Air",
      causes: {
        "0": "Injap pelepas tekanan gagal",
        "1": "Tangki atau elemen pemanas berkarat",
        "2": "Sambungan masuk / keluar bocor",
        "3": "Hakisan kerak membebankan bekas"
      }
    }
  },
  symptoms: {
    "wet-wall": { label: "Tompokan dinding basah atau lembap", implies: "Lembap sudah berada di dalam lapisan dinding." },
    dripping: { label: "Air menitis aktif", implies: "Kebocoran bahagian bekalan aktif kehilangan air berterusan." },
    "low-pressure": { label: "Tekanan air rendah", implies: "Kehilangan tekanan selalu bermakna air terlepas sebelum salur keluar." },
    "brown-stain": { label: "Kotoran perang / kuning", implies: "Kebocoran perlahan lama telah merendam lapisan bawah." },
    "ceiling-bubble": { label: "Siling menggelembung atau melendut", implies: "Air bertakung di atas papan — risiko runtuh." },
    cracks: { label: "Retakan mula kelihatan", implies: "Pergerakan lembap membebankan plaster atau screed." },
    mould: { label: "Kulat atau bau hapak", implies: "Kelembapan berterusan — isu kesihatan dan kemasan." },
    "burst-pipe": { label: "Paip pecah / banjir", implies: "Kecemasan: tutup stopcock utama sekarang." },
    "pipe-noise": { label: "Paip berbunyi wis atau ketukan", implies: "Tanda klasik kebocoran tersembunyi bertekanan." },
    "meter-spinning": { label: "Meter air bergerak walau paip tertutup", implies: "Sahkan kebocoran tersembunyi pada bahagian bekalan." },
    "high-bill": { label: "Bil air luar biasa tinggi", implies: "Kehilangan tersembunyi berterusan selama berminggu." },
    "peeling-paint": { label: "Cat mengelupas / melepuh", implies: "Lembap menolak menembusi lapisan cat." }
  },
  severityLevels: {
    slow: { label: "Perlahan — hanya selepas hujan lebat atau mandi lama", hint: "Lembap sekali-sekala" },
    moderate: { label: "Sederhana — kelihatan setiap hari", hint: "Kotoran atau tompokan lembap membesar perlahan" },
    fast: { label: "Cepat — merebak minggu demi minggu", hint: "Jelas semakin teruk" },
    severe: { label: "Teruk — air berterusan", hint: "Baldi, banjir, titisan" }
  },
  durations: {
    today: "Bermula hari ini",
    week: "Dalam minggu lepas",
    month: "Lebih kurang sebulan",
    months: "Beberapa bulan",
    year: "Lebih setahun"
  },
  propertyAge: {
    new: "Bawah 5 tahun",
    mid: "5 – 15 tahun",
    older: "15 – 30 tahun",
    old: "Lebih 30 tahun"
  },
  propertyType: {
    condo: "Kondo / Apartment",
    terrace: "Rumah Teres",
    "semi-d": "Semi-D / Banglo",
    shop: "Lot Kedai / Pejabat"
  },
  affected: {
    spot: "Satu tompok kecil (sebesar tapak tangan)",
    patch: "Satu tompokan (sehingga 1 m²)",
    large: "Kawasan besar (2 – 4 m²)",
    multiple: "Beberapa bilik terjejas"
  },
  severityNote: {
    routine: "Pantau dan jadualkan pembaikan mengikut kesesuaian anda — tiada risiko kerosakan segera.",
    emergency: "Tutup stopcock utama sekarang dan hubungi kami — kehilangan air aktif menyebabkan kerosakan struktur dan elektrik dengan cepat.",
    urgent: "Tempah dalam 24–48 jam. Kerosakan sedang merebak dan skop pembaikan membesar jika ditangguhkan.",
    soon: "Tempah dalam minggu ini. Kebocoran sudah mantap tetapi belum menyebabkan kerosakan struktur."
  },
  result: {
    durationEmergency: "Kecemasan selamat sementara hari sama, pembaikan penuh 1–2 hari",
    durationHigh: "1–2 hari bekerja tambah masa pengerasan",
    durationMid: "Setengah hingga 1 hari bekerja",
    durationLow: "2–4 jam di tapak",
    packageEmergency: "Respons Bocor Kecemasan",
    packageUrgent: "Pembaikan Bocor Keutamaan",
    packageRoutine: "Pembaikan Bocor Berjadual",
    causeDetail: "Punca biasa kebocoran {location} pada hartanah Lembah Klang seusia ini.",
    quoteOnlyReason: "Kebocoran bilik air teruk selalunya perlukan pecahan dan jubin semula — skop itu disebut harga selepas pemeriksaan."
  },
  breakdown: {
    publishedRate: "Kadar diterbitkan: {label}",
    pu: "Suntikan grouting PU",
    puValueOne: "{points} titik × RM {rate}",
    puValueMany: "{points} titik × RM {rate}",
    bathroom: "Kalis air kawasan basah (sistem tanpa pecah)",
    bathroomNote: "Jalur diterbitkan RM {low}–RM {high} untuk rawatan tanpa pecah",
    hack: "Kemungkinan skop pecah & jubin semula",
    hackValue: "RM {low}–RM {high}",
    hackNote: "Jalur pecahan diterbitkan — hanya jika membran bawah jubin telah gagal",
    roof: "Diagnosis & baiki bocor bumbung",
    membrane: "Kalis air membran separa",
    membraneNote: "≈ {area} kps × kadar diterbitkan RM {rate} / kps",
    ceiling: "Baik pulih siling rosak air",
    source: "Rawatan punca (suntikan papak)",
    sourceNote: "Diperoleh daripada kadar grouting PU diterbitkan — siling hanya dipulihkan selepas punca dimeterai",
    pipe: "Kesan & baiki bocor paip",
    pipeNote: "Kadar diterbitkan: {label} tambah kerumitan pembaikan",
    heater: "Baiki pemanas air",
    fixture: "Baiki / ganti fixture",
    external: "Jejak & baiki paip luar",
    emergencyUplift: "Kenaikan hantaran kecemasan",
    emergencyUpliftNote: "Dikenakan hanya untuk respons kecemasan hari sama; dijelaskan sebelum kerja bermula",
    propertyFactor: "Faktor hartanah",
    propertyFactorValue: "× {factor}",
    propertyFactorNote: "{type}, {age} — hartanah lama dan tinggi perlukan kawalan akses lebih"
  },
  addons: {
    ceilingReinstate: { label: "Ganti papan siling & cat semula", note: "Kadar diterbitkan: {label}" },
    wallDamp: { label: "Rawatan lembap & efloresen dinding", note: "Kadar diterbitkan: {label}" },
    gutter: { label: "Pembersihan & jajaran semula talang", note: "Kadar diterbitkan: {label}" },
    fullBathroom: { label: "Pakej kalis air bilik air penuh", note: "Kadar diterbitkan: {label}" },
    repaint: { label: "Cat semula dinding / siling terjejas selepas baik pulih", note: "Kadar diterbitkan: {label}" }
  },
  related: {
    waterproofing: { label: "Kalis Air & Grouting PU", desc: "Meterai punca dengan betul" },
    plumbing: { label: "Baiki Bocor Paip", desc: "Pengesanan paip tersembunyi" },
    ceiling: { label: "Baik Pulih Siling", desc: "Pulihkan papan rosak" },
    roof: { label: "Baiki Bumbung", desc: "Kerja jubin, rabung dan talang" },
    costGuide: { label: "Panduan Kos Kalis Air", desc: "Kadar 2026 diterbitkan" }
  },
  articles: {
    ceilingFix: "Cara Baiki Siling Bocor Tanpa Pecahkan Jubin",
    hiddenLeak: "Pengesanan Kebocoran Air Tersembunyi di KL",
    puVs: "Grouting PU vs Kalis Air Membran Penuh"
  },
  maintenance: {
    meter: "Periksa meter air dengan semua paip tertutup sebulan sekali — pergerakan bermakna kebocoran tersembunyi.",
    gutters: "Kosongkan perangkap lantai dan talang sebelum musim monsun.",
    silicone: "Meterai semula sendi silikon bilik air setiap 2–3 tahun untuk melindungi membran di bawah."
  },
  assumptions: {
    diagnosis: "Diagnosis berdasarkan jawapan anda sahaja — punca tepat disahkan dengan meter lembapan dan, jika perlu, pengimejan terma di tapak.",
    scope: "Angka pembaikan merangkumi punca kebocoran; kerja kemasan (jubin, cat, papan siling) disenaraikan berasingan sebagai tambahan.",
    emergency: "Kenaikan kecemasan hanya dikenakan jika anda meminta hantaran hari sama."
  }
};
