/**
 * TV Mount Advisor — Bahasa Malaysia content dictionary.
 * Key set and {tokens} must stay identical to tv-mount-en.ts (harness-checked).
 */

import type { MessageDictionary } from "../../../i18n";

export const tvMountMsDict: MessageDictionary = {
  meta: {
    name: "Penasihat Pemasangan TV",
    resultLabel: "Anggaran kos pemasangan"
  },
  steps: {
    tv: {
      title: "Berapa besar TV anda?",
      subtitle: "Saiz skrin menentukan kadar bracket dan bilangan pekerja yang kami hantar."
    },
    wall: {
      title: "Dinding anda diperbuat daripada apa?",
      subtitle: "Ketuknya — bunyi tumpul bermakna padat, bunyi berongga bermakna partisi kosong."
    },
    bracket: {
      title: "Bracket jenis mana yang anda mahu?",
      subtitle: "Tidak pasti? Pilih pilihan terakhir dan kami akan cadangkan."
    },
    extras: {
      title: "Kabel, power dan tambahan",
      subtitle: "Semua di sini boleh disiapkan pada lawatan yang sama."
    }
  },
  fields: {
    tvSize: { label: "Saiz TV" },
    wallType: { label: "Jenis dinding" },
    height: { label: "Ketinggian pemasangan" },
    bracket: { label: "Jenis bracket" },
    bracketSupply: { label: "Perlu kami bekalkannya?" },
    powerPoint: { label: "Ada soket kuasa di belakang TV?" },
    extras: { label: "Tambah apa-apa lagi?", help: "Pilihan — tandakan semua yang berkaitan." }
  },
  tvSizes: {
    "32": { label: "Sehingga 32\"", hint: "≈ 5 kg · VESA 200×200" },
    "43": { label: "40\" – 43\"", hint: "≈ 9 kg · VESA 200×200" },
    "55": { label: "50\" – 55\"", hint: "≈ 16 kg · VESA 400×400" },
    "65": { label: "60\" – 65\"", hint: "≈ 24 kg · VESA 400×400" },
    "75": { label: "70\" – 75\"", hint: "≈ 32 kg · VESA 600×400" },
    "85": { label: "80\" – 85\"", hint: "≈ 45 kg · VESA 800×400" },
    "98": { label: "Melebihi 85\"", hint: "Paparan komersial · perlu 2 orang mengangkat" }
  },
  wallTypes: {
    concrete: {
      label: "Dinding konkrit / RC",
      hint: "Padat, berbunyi tumpul apabila diketuk",
      anchor: "Bolt tembus M10 atau anchor lengan ke dalam RC"
    },
    brick: {
      label: "Dinding bata / blok",
      hint: "Paling biasa di rumah Malaysia",
      anchor: "Anchor lengan M8 ke bata padat, mengelakkan sendi mortar"
    },
    plasterboard: {
      label: "Partisi papan plaster / gypsum",
      hint: "Berongga, berbunyi bergema",
      anchor: "Plat sandaran dipasang pada batang logam — jangan anchor papan sahaja",
      warning: "Partisi gypsum tidak dapat menampung TV besar pada anchor papan. Kami pasang plat sandaran kayu atau keluli merentasi batang."
    },
    wood: {
      label: "Dinding kayu / papan lapis",
      hint: "Dinding fokus atau batang kayu",
      anchor: "Skru coach ke batang kayu padat",
      warning: "Kami kesan dan pasang ke batang; permukaan papan lapis sahaja tidak menahan beban."
    },
    "cement-board": {
      label: "Partisi papan simen",
      hint: "Simen gentian di atas batang",
      anchor: "Dipasang tembus ke batang dengan penyebar beban"
    },
    "glass-tile": {
      label: "Dinding berjubin",
      hint: "Jubin di atas bata atau konkrit",
      anchor: "Gerudi teras berlian menembusi jubin ke lapisan bawah",
      warning: "Penggerudian jubin membawa risiko sumbu kecil; kami gerudi teras perlahan dan meterai penembusan."
    },
    "not-sure": {
      label: "Tidak pasti",
      hint: "Kami uji dinding semasa ketibaan",
      anchor: "Disahkan dengan ujian ketukan dan gerudi perintis di tapak"
    }
  },
  brackets: {
    fixed: { label: "Tetap / rapat ke dinding", hint: "Profil paling nipis, kos paling rendah" },
    tilt: { label: "Boleh condong", hint: "Condong ke bawah untuk pemasangan tinggi" },
    "full-motion": { label: "Lengan putar penuh", hint: "Tarik keluar dan pusing — beban paling berat" },
    ceiling: { label: "Pasang di siling", hint: "Juntai bawah dari papak" },
    "not-sure": { label: "Cadangkan untuk saya", hint: "Kami beri nasihat di tapak" }
  },
  bracketSupply: {
    customer: { label: "Saya sudah ada bracket", hint: "Pemasangan sahaja" },
    include: { label: "Bekalkan bracket untuk saya", hint: "Bracket berkadar dipadan dengan TV anda" }
  },
  extras: {
    concealment: { label: "Sembunyikan kabel dalam dinding", hint: "Korek, conduit dan baik pulih" },
    trunking: { label: "Trunking kabel permukaan", hint: "Trunking kemas boleh cat — tanpa korekan dinding" },
    "power-point": { label: "Titik kuasa baharu di belakang TV", hint: "Kerja elektrik berlesen" },
    soundbar: { label: "Pasang soundbar", hint: "Bracket dijajarkan di bawah TV" },
    shelf: { label: "Para terapung untuk peranti", hint: "Konsol, router atau kotak media" },
    dismount: { label: "Tanggalkan TV / bracket sedia ada", hint: "Turunkan dan baik pulih" },
    setup: { label: "Setup & talaan peranti", hint: "Sambung sumber dan semak gambar" }
  },
  heights: {
    standard: { label: "Ketinggian standard", hint: "Paras mata ketika duduk" },
    high: { label: "Pasang tinggi", hint: "Di atas konsol atau pendiangan" },
    "very-high": { label: "Sangat tinggi / volume ganda", hint: "Akses tangga atau menara" }
  },
  powerPoint: {
    yes: "Ya, ada soket",
    no: "Tiada soket di situ"
  },
  durations: {
    oneHour: "Lebih kurang 1 jam di tapak",
    oneTwoHours: "1–2 jam di tapak",
    twoFourHours: "2–4 jam di tapak",
    halfDay: "Setengah hari bekerja"
  },
  packages: {
    heavy: "Pakej Pemasangan TV Berat",
    mediaWall: "Pakej Dinding Media Lengkap",
    standard: "Pemasangan TV Standard"
  },
  breakdown: {
    mounting: "Pemasangan TV — {size}",
    mountingNote: "Kadar diterbitkan: {label} · jalur disahkan RM {low}–RM {high}",
    factor: "Faktor dinding, bracket & ketinggian",
    factorValue: "× {mult}",
    factorNote: "{wall} · bracket {bracket} · {height}",
    bracketSupply: "Bekalan bracket {bracket}",
    bracketSupplyRecommended: "Dicadangkan",
    bracketSupplyNote: "Bracket berkadar beban dipadan dengan corak VESA dan berat TV anda",
    concealment: "Sembunyikan kabel dalam dinding",
    concealmentNote: "Korek, conduit, tampal dan baik pulih sedia untuk cat",
    trunking: "Trunking kabel permukaan",
    trunkingNote: "Diperoleh daripada kadar diterbitkan {label}",
    powerPoint: "Titik kuasa baharu di belakang TV",
    powerPointNote: "Kadar diterbitkan: {label}",
    soundbar: "Pemasangan soundbar",
    soundbarNote: "Kadar diterbitkan: {label}",
    shelf: "Pemasangan para terapung",
    shelfNote: "Kadar diterbitkan: {label}",
    dismount: "Tanggalkan TV / bracket sedia ada",
    dismountNote: "Turunkan, tampal lubang dan baik pulih",
    setup: "Setup & talaan gambar peranti",
    setupNote: "Sumber disambung, input dilabel, gambar disemak",
    minimum: "Caj panggilan minimum dikenakan",
    minimumNote: "Harga permulaan handyman diterbitkan"
  },
  findings: {
    fixingTitle: "Kaedah pengikatan disyorkan",
    bracketTitle: "Bracket disyorkan",
    bracketHeavy: "Untuk TV {size} kami biasanya pasang bracket tetap atau boleh condong tugas berat — lengan putar penuh memberi beban tuasan jauh lebih besar pada dinding.",
    bracketFixed: "Bracket nipis tetap sesuai untuk TV {size} dan memastikan panel rapat ke dinding.",
    bracketChoice: "{bracket} — {hint}.",
    loadTitle: "Semakan beban",
    loadExceeds: "TV {size} melebihi kemampuan selamat {wall} tanpa pengukuhan. Kami pasang plat sandaran atau pindahkan ke dinding struktur.",
    loadSafe: "TV {size} masih dalam beban selamat untuk {wall} menggunakan kaedah pengikatan di atas.",
    warningTitle: "Penting untuk jenis dinding anda",
    noPowerTitle: "Tiada titik kuasa di belakang TV",
    noPowerDetail: "Tanpa soket di belakang panel, kabel akan kelihatan. Menambah titik tersembunyi pada lawatan sama adalah penyelesaian paling kemas."
  },
  addons: {
    conceal: { label: "Sembunyikan kabel dalam dinding", note: "Korek, conduit dan baik pulih" },
    power: { label: "Titik kuasa baharu di belakang TV", note: "Kadar diterbitkan: {label}" },
    soundbar: { label: "Bracket & jajaran soundbar", note: "Kadar diterbitkan: {label}" },
    featureWall: { label: "Kerja kayu konsol TV & dinding fokus", note: "Kadar diterbitkan: {label}" },
    patchPaint: { label: "Tampal & cat semula selepas pemasangan", note: "Kadar diterbitkan: {label}" }
  },
  related: {
    handyman: { label: "Servis Handyman", desc: "Pemasangan TV, para dan sandaran" },
    costGuide: { label: "Panduan Kos Handyman", desc: "Kadar 2026 diterbitkan" },
    electrical: { label: "Pemasangan Elektrik", desc: "Titik kuasa dan data baharu" },
    carpentry: { label: "Kerja Kayu & Dinding Fokus", desc: "Konsol TV dan dinding media" },
    lighting: { label: "Lampu", desc: "Lampu suasana di belakang TV" }
  },
  articles: {
    safety: "Panduan Keselamatan Pemasangan TV di Dinding"
  },
  service: {
    summary: "Pemasangan TV di Dinding — {size} pada {wall}"
  },
  maintenance: {
    bolts: "Semak semula bolt bracket setiap 12 bulan, terutama pada lengan putar penuh.",
    ventilation: "Kekalkan sekurang-kurangnya 5 cm ruang ventilasi di belakang panel.",
    noExtraWeight: "Jangan gantung beban tambahan (para, hiasan) pada lengan bracket TV."
  },
  assumptions: {
    scope: "Anggaran merangkumi satu TV pada satu dinding dengan kaedah pengikatan di atas.",
    supplied: "Bracket yang dibekalkan berkadar untuk berat dan corak VESA TV anda.",
    customerBracket: "Anda bekalkan bracket — kami semak ia berkadar untuk TV anda sebelum menggerudi.",
    belowMinimum: "Kerja kecil dicaj pada harga panggilan minimum diterbitkan kami.",
    wallCheck: "Jenis dinding disahkan dengan ujian ketukan dan gerudi perintis sebelum pengikatan muktamad."
  }
};
