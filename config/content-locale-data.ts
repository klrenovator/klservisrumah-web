import type { ContentPodFamily } from "./content-locale";

/**
 * content-locale-data.ts — the hand-authored MS/ZH copy that powers the real
 * `/ms` + `/zh` content-pod tree (audit P3-12).
 *
 * Four data sets, all keyed so the resolver in `lib/content-locale-resolver.ts`
 * never has to guess:
 *
 *   1. SERVICE_NOUN_* — the per-service action noun ("Pengecatan", "油漆") that
 *      already lives inside the curated `contentI18n*Full` commercial/process/
 *      answers titles. Reusing it lets the resolver compose titles for the
 *      service-backed families (commercial/residential/process/answers) that
 *      exactly match the existing curated titles for the 25 covered services
 *      and extend identically-styled titles to the four newer services.
 *
 *   2. POD_HEADER_OVERRIDES_* — explicit `{title, intro, category}` fixes for
 *      the entries the slug-keyed dictionaries cannot express:
 *        • residential — shares slugs with commercial, so `contentI18n*Full`
 *          would otherwise hand the residential page the commercial title.
 *        • the 20 aircon brand pods + 3 aircon comparison pods that were never
 *          translated when they were added.
 *
 *   3. POD_HUB_I18N — localized index-page copy for the ten pod hubs.
 *
 *   4. POD_GUIDANCE_I18N — audience-specific guidance for the commercial and
 *      residential pods (the "Practical guidance" block), translated from the
 *      EN overrides in `config/content-data.ts`.
 */

export type LocalizedHeader = { title: string; intro?: string; category: string };

type LocaleMap<T> = { ms: T; zh: T };

/* ────────────────────────────────────────────────────────────────────────
 * 1. Per-service action nouns.
 *    25 reused from the curated commercial titles; 4 newer services authored
 *    in the same voice. Noun case is title-case for MS, plain for ZH.
 * ─────────────────────────────────────────────────────────────────────── */
export const SERVICE_NOUN_MS: Record<string, string> = {
  painting: "Pengecatan",
  plumbing: "Paip",
  ceiling: "Siling",
  waterproofing: "Kalis Air",
  handyman: "Tukang Serba",
  "house-renovation": "Renovasi Rumah",
  electrical: "Elektrik",
  "water-heater": "Pemanas Air",
  "ceiling-fan": "Kipas Siling",
  lighting: "Lampu",
  tiling: "Jubin",
  "plaster-ceiling": "Siling Plaster",
  "skim-coat": "Skim Coat",
  flooring: "Lantai",
  "epoxy-flooring": "Lantai Epoxy",
  "roof-repair": "Pembaikan Bumbung",
  "kitchen-cabinet": "Kabinet Dapur",
  carpentry: "Kayu",
  door: "Pintu",
  "window-repair": "Tingkap",
  locksmith: "Tukang Kunci",
  "glass-aluminium": "Kaca & Aluminium",
  cctv: "CCTV",
  autogate: "Pintu Automatik",
  welding: "Patri",
  // Newer services (added after the curated dictionaries):
  aircon: "Aircond",
  "kitchen-renovation": "Pengubahsuaian Dapur",
  "bathroom-renovation": "Pengubahsuaian Bilik Mandi",
  "awning-installation": "Pemasangan Awning",
};

export const SERVICE_NOUN_ZH: Record<string, string> = {
  painting: "油漆",
  plumbing: "水管",
  ceiling: "天花板",
  waterproofing: "防水",
  handyman: "杂工",
  "house-renovation": "翻新",
  electrical: "电气",
  "water-heater": "热水器",
  "ceiling-fan": "吊扇",
  lighting: "照明",
  tiling: "瓷砖",
  "plaster-ceiling": "石膏天花板",
  "skim-coat": "批腻子",
  flooring: "地板",
  "epoxy-flooring": "环氧地坪",
  "roof-repair": "屋顶维修",
  "kitchen-cabinet": "厨柜",
  carpentry: "木工",
  door: "门",
  "window-repair": "窗户",
  locksmith: "锁匠",
  "glass-aluminium": "玻璃铝合金",
  cctv: "监控",
  autogate: "自动门",
  welding: "焊接",
  // Newer services:
  aircon: "空调",
  "kitchen-renovation": "厨房翻新",
  "bathroom-renovation": "卫生间翻新",
  "awning-installation": "雨棚安装",
};

/* ────────────────────────────────────────────────────────────────────────
 * 2. Namespaced header overrides for entries the slug-keyed dictionaries
 *    cannot express.
 *
 *    Key format is `${family}:${slug}` so commercial and residential (which
 *    share slugs) stay distinct. These take precedence over the legacy
 *    dictionaries in `resolvePodHeader`.
 * ─────────────────────────────────────────────────────────────────────── */

// The 20 aircon brands, with their proper display casing.
const AIRCON_BRANDS: { slug: string; brand: string }[] = [
  { slug: "daikin-aircon-service-malaysia", brand: "Daikin" },
  { slug: "panasonic-aircon-service-malaysia", brand: "Panasonic" },
  { slug: "mitsubishi-electric-aircon-service-malaysia", brand: "Mitsubishi Electric" },
  { slug: "york-aircon-service-malaysia", brand: "York" },
  { slug: "acson-aircon-service-malaysia", brand: "Acson" },
  { slug: "carrier-aircon-service-malaysia", brand: "Carrier" },
  { slug: "midea-aircon-service-malaysia", brand: "Midea" },
  { slug: "haier-aircon-service-malaysia", brand: "Haier" },
  { slug: "toshiba-aircon-service-malaysia", brand: "Toshiba" },
  { slug: "hitachi-aircon-service-malaysia", brand: "Hitachi" },
  { slug: "samsung-aircon-service-malaysia", brand: "Samsung" },
  { slug: "lg-aircon-service-malaysia", brand: "LG" },
  { slug: "sharp-aircon-service-malaysia", brand: "Sharp" },
  { slug: "fujitsu-aircon-service-malaysia", brand: "Fujitsu" },
  { slug: "gree-aircon-service-malaysia", brand: "Gree" },
  { slug: "national-aircon-service-malaysia", brand: "National" },
  { slug: "hisense-aircon-service-malaysia", brand: "Hisense" },
  { slug: "aux-aircon-service-malaysia", brand: "AUX" },
  { slug: "tcl-aircon-service-malaysia", brand: "TCL" },
  { slug: "isonic-aircon-service-malaysia", brand: "iSonic" },
];

const brandIntros = {
  ms: (brand: string) =>
    `Panduan servis dan penyelenggaraan untuk unit aircond ${brand} di KL & Selangor — kerosakan biasa, skop servis, harga permulaan dan soalan waranti sebelum meluluskan sebut harga.`,
  zh: (brand: string) =>
    `吉隆坡与雪兰莪 ${brand} 空调的保养与维修指南 — 常见故障、服务范围、起步价及确认报价前应了解的保修事项。`,
};

const compareOverrides: Record<string, { ms: LocalizedHeader; zh: LocalizedHeader }> = {
  "chemical-wash-vs-chemical-overhaul": {
    ms: {
      title: "Cucian Kimia vs Overhaul Kimia",
      intro: "Perbandingan cucian kimia ringkas berbanding overhaul kimia menyeluruh untuk aircond — bilakah setiap satu sesuai, kos dan hasil yang dijangkakan.",
      category: "Perbandingan",
    },
    zh: {
      title: "化学清洗 vs 化学深度保养",
      intro: "空调简单化学清洗与全面化学深度保养的对比 — 各自适用的情况、费用及预期效果。",
      category: "比较",
    },
  },
  "inverter-vs-non-inverter-aircon": {
    ms: {
      title: "Aircond Inverter vs Bukan Inverter",
      intro: "Perbandingan teknologi inverter dengan aircond biasa dari segi penjimatan elektrik, tahap bunyi, kos pembelian dan kesesuaian untuk bilik di Malaysia.",
      category: "Perbandingan",
    },
    zh: {
      title: "变频空调 vs 定频空调",
      intro: "变频与定频空调在省电、噪音、购买成本及适合房间类型方面的对比。",
      category: "比较",
    },
  },
  "wall-mounted-vs-ceiling-cassette-aircon": {
    ms: {
      title: "Aircond Dinding vs Kassette Siling",
      intro: "Perbandingan unit aircond lekap dinding dengan kassette siling dari segi taburan udara, rupa, kos pemasangan dan kesesuaian untuk ruang rumah atau pejabat.",
      category: "Perbandingan",
    },
    zh: {
      title: "壁挂式空调 vs 卡式空调",
      intro: "壁挂式与卡式空调在气流分布、外观、安装成本及适合家居或办公空间方面的对比。",
      category: "比较",
    },
  },
};

/** `${family}:${slug}` → localized header (MS). */
export const POD_HEADER_OVERRIDES_MS: Record<string, LocalizedHeader> = Object.freeze(
  Object.fromEntries([
    ...AIRCON_BRANDS.map(({ slug, brand }) => [
      `brands:${slug}`,
      { title: `Servis Aircond ${brand} di Malaysia`, intro: brandIntros.ms(brand), category: "Panduan Jenama" },
    ]),
    ...Object.entries(compareOverrides).map(([slug, v]) => [`compare:${slug}`, v.ms]),
  ])
);

/** `${family}:${slug}` → localized header (ZH). */
export const POD_HEADER_OVERRIDES_ZH: Record<string, LocalizedHeader> = Object.freeze(
  Object.fromEntries([
    ...AIRCON_BRANDS.map(({ slug, brand }) => [
      `brands:${slug}`,
      { title: `${brand}空调服务（马来西亚）`, intro: brandIntros.zh(brand), category: "品牌指南" },
    ]),
    ...Object.entries(compareOverrides).map(([slug, v]) => [`compare:${slug}`, v.zh]),
  ])
);

export const POD_HEADER_OVERRIDES: LocaleMap<Record<string, LocalizedHeader>> = {
  ms: POD_HEADER_OVERRIDES_MS,
  zh: POD_HEADER_OVERRIDES_ZH,
};

export const SERVICE_NOUN: LocaleMap<Record<string, string>> = {
  ms: SERVICE_NOUN_MS,
  zh: SERVICE_NOUN_ZH,
};

/**
 * Audience-correct FAQ templates for the COMMERCIAL pods. The shared
 * `faqTemplates*` in `config/content-body-i18n.ts` answer the first question
 * with "…for homes / 房屋" — correct for residential but the exact
 * wrong-audience tone Wave 4 removed from the EN commercial copy. Swapping in
 * these premises-focused answers keeps the localized commercial routes
 * audience-correct without hand-translating all 116 authored EN FAQs (a
 * follow-up content task).
 */
export const COMMERCIAL_FAQ_TEMPLATES: LocaleMap<{ q: string; a: string }[]> = {
  ms: [
    {
      q: "Adakah {topic} sesuai untuk premis perniagaan di KL dan Selangor?",
      a: "Ya. Panduan ini menumpukan pejabat, lot runcit, bilik pameran, gudang dan fasiliti strata di Lembah Klang, dengan penjadualan selepas waktu bekerja, koordinasi pengurusan bangunan dan gangguan minimum.",
    },
    {
      q: "Bagaimana kos kerja komersial ini dianggarkan?",
      a: "Anggaran bergantung pada skop, saiz premis, akses dan bahan. Kami sahkan sebut harga tetap yang terperinci selepas foto atau lawatan tapak sebelum apa-apa kerja bermula.",
    },
    {
      q: "Bolehkah kerja dijadualkan selepas waktu perniagaan?",
      a: "Ya. Kongsi waktu operasi dan peraturan bangunan anda melalui WhatsApp supaya kami boleh merancang kerja selepas jam, hujung minggu atau mengikut fasa tanpa mengganggu perniagaan.",
    },
    {
      q: "Adakah harga disahkan sebelum kerja bermula?",
      a: "Ya. Kami sahkan harga tetap dan terperinci secara bertulis sebelum kerja bermula dan hanya meneruskan selepas mendapat kelulusan anda.",
    },
  ],
  zh: [
    {
      q: "{topic}是否适合吉隆坡与雪兰莪的商业场所？",
      a: "适合。本指南针对巴生谷的办公室、零售铺位、展示厅、仓库与分层物业，提供下班后施工、大楼管理协调与最小干扰的排程。",
    },
    {
      q: "这类商业工程的费用如何估算？",
      a: "费用取决于范围、场地大小、进出条件与材料。我们会在开工前，根据照片或现场勘查确认一份逐项列明的固定价报价。",
    },
    {
      q: "施工可以安排在营业时间之外吗？",
      a: "可以。请通过 WhatsApp 告诉我们您的营业时间与大楼规定，我们会安排在下班后、周末或分阶段施工，尽量不影响营业。",
    },
    {
      q: "价格会在开工前确认吗？",
      a: "会。我们会在开工前以书面形式确认固定且逐项的报价，并在获得您批准后才开始施工。",
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 3. Localized hub (index) copy for the ten pod hubs.
 *    Title is the SEO `<title>`/H1; description the meta description + hero.
 * ─────────────────────────────────────────────────────────────────────── */
export type PodHubCopy = { eyebrow: string; title: string; description: string };

export const POD_HUB_I18N: Record<ContentPodFamily, LocaleMap<PodHubCopy>> = {
  answers: {
    ms: {
      eyebrow: "Panduan jawapan",
      title: "Panduan Perkhidmatan Rumah KL & Selangor",
      description: "Jawapan ringkas dan telus tentang skop, harga, waranti dan proses untuk setiap perkhidmatan rumah di KL & Selangor.",
    },
    zh: {
      eyebrow: "解答指南",
      title: "吉隆坡与雪兰莪家居服务解答指南",
      description: "针对吉隆坡与雪兰莪各项家居服务的范围、价格、保修与流程，提供简明透明的解答。",
    },
  },
  brands: {
    ms: {
      eyebrow: "Panduan jenama",
      title: "Panduan Jenama & Bahan di Malaysia",
      description: "Panduan jenama cat, paip, penyaman udara dan bahan binaan di Malaysia — keserasian, cara penggunaan dan semakan waranti.",
    },
    zh: {
      eyebrow: "品牌指南",
      title: "马来西亚品牌与材料指南",
      description: "马来西亚油漆、水管、空调与建材品牌指南 — 兼容性、正确使用方式与保修核查。",
    },
  },
  commercial: {
    ms: {
      eyebrow: "Hartanah komersial",
      title: "Perkhidmatan Komersial KL & Selangor",
      description: "Perkhidmatan untuk pejabat, lot runcit, bilik pameran, gudang dan fasiliti strata di seluruh Lembah Klang — penjadualan kemas dengan gangguan minimum.",
    },
    zh: {
      eyebrow: "商业物业",
      title: "吉隆坡与雪兰莪商业服务",
      description: "服务于巴生谷的办公室、零售铺位、展示厅、仓库与分层物业 — 排程整洁、干扰最小。",
    },
  },
  compare: {
    ms: {
      eyebrow: "Perbandingan",
      title: "Perbandingan Kaedah & Bahan Rumah",
      description: "Perbandingan telus antara kaedah, bahan dan pendekatan baiki rumah — kesesuaian, kos, ketahanan dan risiko untuk hartanah Malaysia.",
    },
    zh: {
      eyebrow: "对比",
      title: "家居方法与材料对比",
      description: "家居维修方法、材料与做法的透明对比 — 适用性、成本、耐用性与风险。",
    },
  },
  guides: {
    ms: {
      eyebrow: "Cara memilih",
      title: "Panduan Memilih Kontraktor & Kaedah",
      description: "Panduan praktikal memilih kontraktor dan kaedah baik pulih rumah — isyarat harga, semakan kualiti dan soalan waranti.",
    },
    zh: {
      eyebrow: "如何选择",
      title: "选择承包商与方法指南",
      description: "挑选家居维修承包商与方法的实用指南 — 价格信号、质量检查与保修问题。",
    },
  },
  guidesMaintenance: {
    ms: {
      eyebrow: "Penyelenggaraan",
      title: "Panduan Penyelenggaraan Rumah",
      description: "Senarai semak penyelenggaraan praktikal untuk rumah Malaysia — mengikut kekerapan, keperluan musim hujan dan bila perlu hubungi pakar.",
    },
    zh: {
      eyebrow: "房屋保养",
      title: "房屋保养指南",
      description: "适用于马来西亚住宅的实用保养清单 — 按频率、雨季需求与何时应请专业人员整理。",
    },
  },
  process: {
    ms: {
      eyebrow: "Proses kerja",
      title: "Proses Perkhidmatan Rumah di KL",
      description: "Proses langkah demi langkah untuk setiap perkhidmatan — persediaan, pelaksanaan, semakan kualiti dan serahan waranti.",
    },
    zh: {
      eyebrow: "施工流程",
      title: "吉隆坡家居服务流程",
      description: "各项服务的分步流程 — 准备、施工、质量检查与保修交付。",
    },
  },
  residential: {
    ms: {
      eyebrow: "Hartanah kediaman",
      title: "Perkhidmatan Kediaman KL & Selangor",
      description: "Perkhidmatan untuk kondo, apartment, rumah teres, semi-D, banglo dan unit sewa di KL & Selangor — perlindungan perabot dan harga tetap telus.",
    },
    zh: {
      eyebrow: "住宅物业",
      title: "吉隆坡与雪兰莪住宅服务",
      description: "服务于吉隆坡与雪兰莪的公寓、排屋、半独立、独立洋房与出租单位 — 家具保护与透明固定价。",
    },
  },
  seasonal: {
    ms: {
      eyebrow: "Musiman",
      title: "Penyelenggaraan & Perancangan Musiman",
      description: "Persediaan musim hujan, musim kering dan perayaan untuk rumah KL & Selangor — masa yang tepat mengikut cuaca Malaysia.",
    },
    zh: {
      eyebrow: "季节性",
      title: "季节性保养与规划",
      description: "吉隆坡与雪兰莪住宅的雨季、旱季与节庆准备 — 依马来西亚气候选择合适时机。",
    },
  },
  top: {
    ms: {
      eyebrow: "Pertimbangan utama",
      title: "Cara Membanding Perkhidmatan Rumah",
      description: "Kriteria praktikal membanding kontraktor, kaedah, bahan dan kualiti sebut harga — tanpa kedudukan rekaan.",
    },
    zh: {
      eyebrow: "重要考量",
      title: "如何对比家居服务",
      description: "对比承包商、方法、材料与报价质量的实用标准 — 不提供虚构排名。",
    },
  },
};

/* ────────────────────────────────────────────────────────────────────────
 * 4. Audience-specific guidance for commercial / residential pods.
 *    Mirrors the EN `POD_GUIDANCE` override in `config/content-data.ts` so a
 *    commercial page never tells a facilities manager about "condo living".
 * ─────────────────────────────────────────────────────────────────────── */
export const POD_GUIDANCE_I18N: Record<"commercial" | "residential", LocaleMap<{ intro: string; safe: string }>> = {
  commercial: {
    ms: {
      intro:
        "Kerja ubah suai komersial bergantung pada logistik: tetingkap akses, tempahan lif dan ruang memuatkan, kelulusan JMB atau pihak pengurusan, penjadualan selepas waktu bekerja, dan serahan bersih sebelum perniagaan dibuka semula. Rancangkan kerja mengikut penyewaan, bukan sebaliknya.",
      safe:
        "Sebelum meluluskan sebarang sebut harga komersial, sahkan skop, waktu kerja, jadual bahan, perlindungan insurans dan pelan gangguan secara bertulis — dan simpan rekod bertandatangan untuk tuan rumah atau pihak pengurusan bangunan. KL Servis Rumah menetapkan harga kerja komersial berdasarkan skop yang didokumentasikan dengan sebut harga tetap dan terperinci sebelum kerja bermula.",
    },
    zh: {
      intro:
        "商业装修工程的成败取决于后勤：进出时间、电梯与装卸区预约、JMB 或管理层批准、下班后施工，以及在恢复营业前完成整洁交付。请围绕租约安排工程，而不是让租约迁就工程。",
      safe:
        "在批准任何商业报价之前，请以书面形式确认范围、施工时间、材料清单、保险与干扰预案——并为您的房东或大楼管理层保留签署记录。KL Servis Rumah 会在开工前，根据已记录的范围提供固定且逐项的商业报价。",
    },
  },
  residential: {
    ms: {
      intro:
        "Di rumah yang didiami, kerja yang sama dinilai dengan cara berbeza: perlindungan perabot dan lantai, kawalan habuk, pilihan bahan yang selamat untuk kanak-kanak dan haiwan, serta kemasan kemas setiap hari menentukan sama ada kerja itu mudah ditanggung. Kehidupan kondo dan pangsapuri menambah pula peraturan waktu dan akses pengurusan.",
      safe:
        "Sebelum menempah sebarang kerja di rumah, sahkan susunan perlindungan, waktu kerja dan syarat waranti secara bertulis, serta semak bahan yang termasuk berbanding yang perlu dibekalkan. KL Servis Rumah menetapkan harga kerja kediaman dengan harga tetap dan terperinci yang disahkan bertulis sebelum pasukan tiba.",
    },
    zh: {
      intro:
        "在有人居住的家中，同样的工程评判标准不同：家具与地面保护、粉尘控制、对儿童与宠物安全的材料，以及每天收工时的整洁，决定了施工过程是否可接受。公寓与高层住宅还叠加了管理时段与进出规定。",
      safe:
        "在预约任何入户服务前，请以书面形式确认保护安排、施工时间与保修条款，并确认哪些材料包含在内、哪些需自行提供。KL Servis Rumah 会在团队到场前，以书面形式确认固定且逐项的住宅报价。",
    },
  },
};
