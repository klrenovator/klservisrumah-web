/**
 * Painting Cost Calculator — Bahasa Malaysia content dictionary.
 * Key set and {tokens} must stay identical to painting-en.ts (harness-checked).
 */

import type { MessageDictionary } from "../../../i18n";

export const paintingMsDict: MessageDictionary = {
  meta: {
    name: "Kalkulator Kos Mengecat",
    resultLabel: "Anggaran kos mengecat"
  },
  steps: {
    scope: {
      title: "Apa yang anda mahu cat?",
      subtitle: "Pilih permukaan, item atau jenis hartanah — setiap satu dikira berbeza."
    },
    area: {
      title: "Berapa besar kawasan itu?",
      subtitle: "Sentuh saiz biasa — tidak perlu pita pengukur."
    },
    condition: {
      title: "Bagaimana keadaan permukaan sekarang?",
      subtitle: "Kerja penyediaan menentukan ketahanan cat — jawab dengan jujur untuk angka yang tepat."
    },
    paint: {
      title: "Sistem cat yang anda mahu?",
      subtitle: "Kami menggunakan produk Nippon, Dulux dan Jotun tulen untuk setiap gred."
    },
    colour: {
      title: "Hala tuju warna?",
      subtitle: "Warna mempengaruhi liputan — warna gelap biasanya perlukan lapisan tambahan."
    },
    access: {
      title: "Bagaimana akses ke tapak?",
      subtitle: "Ketinggian dan akses menentukan peralatan keselamatan yang kami bawa."
    },
    urgency: {
      title: "Bila anda perlukan kerja siap?",
      subtitle: "Jadual standard memastikan harga paling rendah."
    }
  },
  fields: {
    target: {
      label: "Skop pengecatan",
      help: "Pilih yang paling hampir. Anda boleh tambah skop lain di WhatsApp selepas anggaran."
    },
    roomSize: { label: "Saiz bilik" },
    customLength: { label: "Panjang" },
    customWidth: { label: "Lebar" },
    customHeight: { label: "Ketinggian siling" },
    propertySize: { label: "Luas binaan hartanah" },
    itemCount: { label: "Berapa banyak unit?" },
    condition: { label: "Keadaan keseluruhan permukaan" },
    extraPrep: { label: "Ada kerja penyediaan tambahan?", help: "Pilihan — tandakan semua yang berkaitan." },
    grade: { label: "Gred cat" },
    features: { label: "Ciri cat yang anda mahu", help: "Pilihan — setiap ciri dipadankan dengan barisan produk sebenar." },
    paintSupply: { label: "Siapa membekalkan cat?" },
    colour: { label: "Keutamaan warna" },
    access: { label: "Tahap akses" },
    urgency: { label: "Masa pilihan" }
  },
  targets: {
    "interior-walls": {
      label: "Dinding Dalaman",
      service: "Pengecatan Semula Dinding Dalaman",
      note: "Dua lapisan kemasan di atas permukaan yang dimeterai dan ditampal."
    },
    ceiling: { label: "Siling", service: "Pengecatan Semula Siling" },
    "single-room": { label: "Bilik Penuh (dinding + siling)", service: "Pakej Pengecatan Semula Bilik" },
    "feature-wall": { label: "Dinding Fokus / Aksen", service: "Pengecatan Dinding Aksen" },
    staircase: { label: "Dinding Tangga / Void", service: "Pengecatan Tangga Void Tinggi" },
    "exterior-walls": { label: "Dinding Luar / Luaran", service: "Pengecatan Luaran Kalis Cuaca" },
    "boundary-wall": { label: "Dinding Sempadan / Perimeter", service: "Pengecatan Dinding Sempadan" },
    roof: { label: "Bumbung / Salutan Bumbung", service: "Salutan Bumbung & Pengecatan Pantul Haba" },
    "car-porch": { label: "Anjung Kereta / Awning", service: "Pengecatan Semula Anjung Kereta" },
    doors: { label: "Pintu", service: "Kemasan Semula Pintu", noun: "pintu" },
    windows: { label: "Tingkap / Bingkai", service: "Pengecatan Semula Bingkai Tingkap", noun: "tingkap" },
    "main-gate": { label: "Pintu Pagar Utama", service: "Rawatan Karat & Pengecatan Semula Pagar", noun: "pintu pagar" },
    "metal-fence": { label: "Pagar Logam / Gril", service: "Pengecatan Gril & Pagar Logam" },
    "wooden-fence": { label: "Pagar Kayu / Pergola", service: "Pewarnaan & Pengecatan Pagar Kayu" },
    "stair-railing": { label: "Rel Tangga", service: "Pengecatan Semula Rel Tangga", noun: "renteng rel (10 kaki)" },
    "steel-structure": { label: "Struktur Keluli / Bingkai Awning", service: "Salutan Pelindung Keluli Struktur" },
    cabinets: { label: "Kabinet (am)", service: "Semburan & Kemasan Semula Kabinet", noun: "pintu kabinet" },
    "kitchen-cabinets": { label: "Kabinet Dapur", service: "Kemasan Semula Kabinet Dapur", noun: "pintu kabinet" },
    wardrobes: { label: "Almari Pakaian", service: "Kemasan Semula Almari Pakaian", noun: "pintu almari" },
    apartment: { label: "Apartment — dalaman penuh", service: "Pengecatan Semula Apartment Penuh" },
    condominium: {
      label: "Kondominium — dalaman penuh",
      service: "Pengecatan Semula Kondo Penuh",
      note: "Termasuk perlindungan lif dan pematuhan waktu kerja pihak pengurusan."
    },
    "landed-house": { label: "Rumah Landed — dalaman penuh", service: "Pengecatan Semula Dalaman Rumah Penuh" },
    "landed-exterior": { label: "Rumah Landed — luaran penuh", service: "Pengecatan Luaran Rumah Penuh" },
    office: {
      label: "Pejabat",
      service: "Pengecatan Pejabat Komersial",
      note: "Penjadualan selepas waktu kerja atau hujung minggu tersedia untuk mengelakkan gangguan."
    },
    "shop-lot": { label: "Lot Kedai", service: "Pengecatan Lot Kedai" },
    "commercial-building": {
      label: "Bangunan Komersial",
      service: "Pengecatan Bangunan Komersial",
      note: "Kaedah akses fasad disahkan di tapak."
    },
    factory: { label: "Kilang", service: "Pengecatan & Salutan Kilang" },
    warehouse: { label: "Gudang", service: "Pengecatan Gudang & Penandaan Garis" }
  },
  areaPresets: {
    "8x8": { hint: "Bilik tidur kecil / stor" },
    "8x10": { hint: "Bilik tidur bujang" },
    "10x10": { hint: "Bilik tidur standard" },
    "10x12": { hint: "Bilik tidur utama" },
    "12x12": { hint: "Bilik tidur besar" },
    "12x15": { hint: "Ruang tamu" },
    "15x15": { hint: "Ruang tamu besar" },
    "20x20": { hint: "Ruang konsep terbuka" },
    custom: { label: "Saiz tersuai", hint: "Masukkan ukuran anda sendiri" },
    ceilingSuffix: "siling",
    roomWallsAndCeiling: "bilik {label}, siling {height} kaki — dinding + siling",
    roomWallSurface: "bilik {label}, siling {height} kaki — permukaan dinding",
    presetCeiling: "siling {label}"
  },
  propertySizes: {
    "600": { label: "Sehingga 600 kps", hint: "Studio / apartment kecil" },
    "900": { label: "600 – 900 kps", hint: "Kondo 2 bilik" },
    "1200": { label: "900 – 1,200 kps", hint: "Kondo 3 bilik" },
    "1600": { label: "1,200 – 1,600 kps", hint: "Rumah teres" },
    "2200": { label: "1,600 – 2,200 kps", hint: "Teres 2 tingkat" },
    "3000": { label: "2,200 – 3,000 kps", hint: "Semi-D / banglo" },
    "4500": { label: "3,000 – 4,500 kps", hint: "Banglo besar / lot kedai" },
    "8000": { label: "Melebihi 4,500 kps", hint: "Komersial / perindustrian" }
  },
  conditions: {
    "new-wall": { label: "Dinding baru (belum pernah dicat)", hint: "Perlukan primer sealer sahaja" },
    excellent: { label: "Sangat baik — licin & bersih", hint: "Terus cat semula" },
    good: { label: "Baik — kesan kecil", hint: "Pengisaran ringan dan tampalan" },
    "previously-painted": { label: "Pernah dicat, masih kuat", hint: "Lapisan standard" },
    "old-wall": { label: "Dinding lama, kemasan berkapur", hint: "Perlukan primer pengikat" },
    "minor-cracks": { label: "Retak rambut kecil", hint: "Pengisi dan skim tampalan" },
    "heavy-cracks": { label: "Retak besar / struktur", hint: "Korek, isi dan perkuat" },
    peeling: { label: "Cat mengelupas / menggeleber", hint: "Kikis hingga permukaan kukuh" },
    "water-damage": { label: "Kerosakan air / kotoran", hint: "Sekat kotoran dan semak punca" },
    mould: { label: "Kulat / cendawan", hint: "Cuci fungicidal sebelum mengecat" },
    uneven: { label: "Permukaan tidak sekata / berombak", hint: "Kompaun pelicin" },
    "bare-cement": { label: "Simen / plaster kosong", hint: "Sistem primer penuh" },
    "rusty-metal": { label: "Permukaan logam berkarat", hint: "Buang karat tambah primer anti-karat" }
  },
  extraPrep: {
    "skim-coat": { label: "Perlukan skim coat", hint: "Pelicinan seluruh permukaan untuk kemasan sehalus cermin" },
    waterproofing: { label: "Perlukan kalis air", hint: "Dinding lembap atau bocor mesti dimeterai dahulu" },
    "mould-treatment": { label: "Rawatan kulat", hint: "Cucian fungicidal dan primer anti-kulat" },
    "crack-repair": { label: "Korek & isi retakan", hint: "Retakan struktur atau enapan" },
    "wallpaper-removal": { label: "Tanggalkan kertas dinding / salutan lama", hint: "Kupas sebelum mengecat" },
    "furniture-shift": { label: "Alih perabot berat", hint: "Pindah dan susun semula barang besar" }
  },
  grades: {
    economy: { label: "Ekonomi", hint: "Emulsi bajet, 2 lapisan" },
    standard: { label: "Standard", hint: "Julat pertengahan Nippon / Dulux" },
    premium: { label: "Premium", hint: "Boleh basuh, tahan kotoran" },
    luxury: { label: "Mewah", hint: "Kemasan terbaik, warna pereka" }
  },
  features: {
    "low-voc": { label: "VOC rendah" },
    odourless: { label: "Tanpa bau" },
    washable: { label: "Boleh basuh / tahan gosok" },
    "anti-mould": { label: "Anti-kulat" },
    "weather-resistant": { label: "Tahan cuaca" },
    "premium-exterior": { label: "Sistem luaran premium" },
    "heat-reflective": { label: "Pantul haba" },
    "anti-rust": { label: "Anti-karat / primer logam" }
  },
  colours: {
    same: { label: "Warna sama", hint: "Segaran terus, liputan terbaik" },
    light: { label: "Warna cerah", hint: "Liputan standard 2 lapisan" },
    dark: { label: "Warna gelap", hint: "Biasanya perlukan lapisan ketiga" },
    multiple: { label: "Pelbagai warna", hint: "Masa masking dan kemasan tepi tambahan" },
    accent: { label: "Dinding aksen", hint: "Satu dinding serlahan" }
  },
  access: {
    easy: { label: "Akses mudah — aras bawah", hint: "Kerja tangga standard" },
    "first-floor": { label: "Aras satu", hint: "Pentas ringan" },
    "second-floor": { label: "Aras dua", hint: "Tangga lanjutan" },
    "high-rise": { label: "Unit bangunan tinggi", hint: "Tempahan lif dan perlindungan lantai" },
    scaffold: { label: "Perlukan perancah", hint: "Pemasangan dan pembukaan perancah" },
    "rope-access": { label: "Perlukan akses tali", hint: "Krew abseil bertauliah" },
    difficult: { label: "Akses sukar / sempit", hint: "Ruang kerja terhad" }
  },
  urgency: {
    standard: { label: "Jadual standard", hint: "Slot terdekat tersedia" },
    "7-days": { label: "Dalam 7 hari", hint: "Penjadualan keutamaan" },
    urgent: { label: "Segera — 48 jam", hint: "Krew disusun semula untuk anda" },
    emergency: { label: "Kecemasan / hari sama", hint: "Hantaran segera" }
  },
  paintSupply: {
    include: { label: "Sertakan cat dalam sebut harga", hint: "Kami beli dan hantar" },
    customer: { label: "Saya bekalkan cat sendiri", hint: "Buruh dan bahan habis guna sahaja" }
  },
  basis: {
    item: "{count} × {noun} (≈ {perItem} kps permukaan dicat setiap satu)",
    unitFallback: "unit",
    property: "{sqft} kps luas binaan × {factor} faktor permukaan cat",
    customCeiling: "siling {length} × {width} kaki",
    customRoomBoth: "bilik {length} × {width} kaki, siling {height} kaki — dinding + siling",
    customRoomWalls: "bilik {length} × {width} kaki, siling {height} kaki — permukaan dinding"
  },
  durations: {
    halfDay: "Setengah hari (3–4 jam)",
    oneDay: "1 hari bekerja",
    oneTwoDays: "1–2 hari bekerja",
    twoThreeDays: "2–3 hari bekerja",
    fourFiveDays: "4–5 hari bekerja",
    oneWeek: "Lebih kurang 1 minggu bekerja",
    oneTwoWeeks: "1–2 minggu bekerja",
    weeks: "Lebih kurang {n} minggu bekerja"
  },
  packages: {
    luxury: "Pakej Kemasan Mewah",
    premium: "Pakej Perlindungan Premium",
    economy: "Pakej Segaran Jimat",
    standard: "Pakej Cat Semula Standard"
  },
  formats: {
    itemCountOne: "{value} unit",
    itemCountMany: "{value} unit"
  },
  bands: { interior: "dalaman", exterior: "luaran" },
  breakdown: {
    paintedArea: "Keluasan dicat",
    paintedAreaValue: "{area} kps",
    appliedRate: "Kadar dikenakan",
    appliedRateValue: "RM {rate} / kps",
    appliedRateNote: "Jalur diterbitkan RM {low}–RM {high} / kps untuk kerja {band}",
    skimCoat: "Penyediaan skim coat",
    skimCoatNote: "{area} kps × kadar skim-coat diterbitkan RM {rate} / kps",
    crack: "Korek & isi retakan",
    crackNote: "≈ {linearFt} kaki linear × kadar diterbitkan RM {rate} / kaki linear",
    damp: "Rawatan lembap / kalis air",
    dampNote: "Kadar diterbitkan baiki kelembapan dinding & efloresen",
    mould: "Rawatan kulat",
    mouldNote: "Cucian fungicidal dan primer anti-kulat",
    wallpaper: "Tanggalkan salutan lama / kertas dinding",
    wallpaperNote: "Buruh kupasan sebelum primer",
    furniture: "Alih & lindung perabot",
    furnitureNote: "Kadar tugas handyman diterbitkan",
    derust: "Buang karat & primer anti-karat",
    rescrape: "Kikis & primer semula",
    rescrapeNote: "Kadar diterbitkan baiki retak & lembap dinding",
    minimum: "Nilai kerja minimum dikenakan",
    minimumNoteExterior: "Harga permulaan luaran diterbitkan ({label})",
    minimumNoteRoom: "Harga permulaan dalaman diterbitkan ({label})",
    minimumNoteSmall: "Harga permulaan kerja kecil diterbitkan ({label})",
    supply: "Anda bekalkan cat",
    supplyValue: "− RM {amount}",
    supplyNote: "Kos cat dikeluarkan; bahan habis guna dan buruh dikekalkan"
  },
  addons: {
    ceilingRefresh: { label: "Tambah cat semula siling", note: "Lawatan sama, persediaan perlindungan sama" },
    crackPackage: { label: "Pakej baiki retak & lembap dinding", note: "Kadar diterbitkan: {label}" },
    skimUpgrade: { label: "Naik taraf skim-coat penuh (kemasan sehalus cermin)", note: "Kadar diterbitkan: {label}" },
    waterproof: { label: "Rawatan kalis air dinding lembap", note: "Kadar diterbitkan: {label}" },
    postClean: { label: "Pembersihan selepas mengecat", note: "Kadar diterbitkan: dari RM {price} setiap lawatan" },
    gateGrille: { label: "Cat anti-karat pagar & gril", note: "Rawatan karat tambah dua lapisan pelindung" }
  },
  related: {
    service: { label: "Servis Mengecat Rumah", desc: "Skop penuh, waranti dan proses" },
    costGuide: { label: "Panduan Kos Mengecat", desc: "Harga telus 2026 diterbitkan" },
    skimCoat: { label: "Skim Coat & Pelicinan Dinding", desc: "Untuk dinding tidak sekata atau bertampal" },
    waterproofing: { label: "Kalis Air", desc: "Baiki lembap sebelum mengecat" },
    plasterCeiling: { label: "Siling Plaster", desc: "Baiki sebelum cat semula siling" }
  },
  articles: {
    colours: "5 Tip Memilih Warna Cat di Malaysia",
    repaint: "Bila Perlu Anda Cat Semula Rumah?",
    condoVs: "Cat Semula Kondo vs Rumah Teres"
  },
  assumptions: {
    topcoats: "Dua lapisan kemasan di atas permukaan yang disediakan dan diberi primer, kecuali perubahan warna perlukan lapisan ketiga.",
    protection: "Perlindungan perabot, masking dan pembersihan harian termasuk dalam angka buruh.",
    belowMinimum: "Skop anda di bawah nilai kerja minimum kami, jadi harga permulaan diterbitkan dikenakan.",
    measuredArea: "Kadar mengikut keluasan permukaan sebenar yang anda pilih, bukan luas lantai.",
    builtUp: "Luas binaan ditukar kepada permukaan boleh cat menggunakan faktor standard Lembah Klang; ukuran di tapak mengesahkan angka tepat.",
    customerPaint: "Anda bekalkan cat; kami sahkan liter diperlukan sebelum kerja bermula.",
    commercial: "Skop komersial dan perindustrian disahkan selepas tinjauan akses dan keselamatan."
  },
  maintenance: {
    wash: "Cuci dinding luar setiap tahun sebelum monsun untuk menghalang kulat.",
    cracks: "Tampal retak rambut awal — mengisinya jauh lebih murah daripada skim penuh.",
    touchUp: "Simpan 1 liter warna akhir untuk tampalan; kami labelkannya semasa serahan."
  }
};
