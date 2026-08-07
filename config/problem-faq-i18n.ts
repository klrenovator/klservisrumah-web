import type { Locale } from "@/lib/i18n";

/**
 * PROBLEM FAQ i18n — title + topic overrides for the localized FAQ hubs.
 *
 * 34 problem pages do not carry a full native override in
 * `config/problem-data.ts#problemI18n` (their page bodies intentionally stay
 * English under client-side language switching — the H3 scope decision).
 * Before this file existed, the localized FAQ hubs (/ms/soalan-lazim,
 * /zh/chang-jian-wen-ti) interpolated those problems' RAW ENGLISH titles into
 * the translated fallback FAQ templates and used them as source labels, which
 * mixed English into the two indexable localized hubs.
 *
 * Two forms per locale because the grammar differs by position:
 *  - `title` — display form, used for the "Baca lagi di {title}" /
 *    "阅读更多：{title}" source label (title-cased noun phrase).
 *  - `topic`  — interpolation form, dropped into the translated template
 *    sentences (e.g. "Bagaimana saya patut merancang bajet untuk {topic}?",
 *    "{topic}适用于吉隆坡与雪兰莪的房屋吗？"). Lowercase/natural in Malay,
 *    short noun phrase (mostly问题-suffixed) in Chinese.
 *
 * Both are hand-written for native speakers — not literal machine translation.
 */
export type ProblemFaqLocaleOverride = {
  /** Display form for the FAQ source label. */
  title: string;
  /** Interpolation form for the translated FAQ templates. */
  topic: string;
};

export const problemFaqI18n: Partial<Record<string, Partial<Record<Exclude<Locale, "en">, ProblemFaqLocaleOverride>>>> = {
  "yellowing-white-walls": {
    ms: { title: "Dinding Putih Bertukar Kuning / Krim", topic: "dinding putih yang bertukar kuning" },
    zh: { title: "白墙发黄 / 变黄", topic: "白墙发黄问题" }
  },
  "paint-cracking-hairline-walls": {
    ms: { title: "Retak Rambut pada Dinding Bercat", topic: "retak rambut pada dinding bercat" },
    zh: { title: "涂漆墙面出现发丝裂纹", topic: "涂漆墙面发丝裂纹问题" }
  },
  "leaking-bathroom": {
    ms: { title: "Bilik Air Bocor (Lantai Basah, Dinding Lembap)", topic: "bilik air yang bocor" },
    zh: { title: "浴室漏水（楼下地面潮湿、墙壁渗水）", topic: "浴室漏水问题" }
  },
  "low-water-pressure": {
    ms: { title: "Tekanan Air Rendah di Rumah", topic: "tekanan air yang rendah di rumah" },
    zh: { title: "家中水压过低", topic: "家中水压过低问题" }
  },
  "clogged-drain": {
    ms: { title: "Saluran Dapur atau Bilik Air Tersumbat", topic: "saluran dapur atau bilik air yang tersumbat" },
    zh: { title: "厨房或浴室下水道堵塞", topic: "下水管道堵塞问题" }
  },
  "toilet-not-flushing": {
    ms: { title: "Tandas Tidak Berfungsi dengan Baik", topic: "tandas yang tidak menyiram dengan baik" },
    zh: { title: "马桶冲水不畅", topic: "马桶冲水不畅问题" }
  },
  "sagging-ceiling": {
    ms: { title: "Siling Plaster Melendut atau Melengkung", topic: "siling plaster yang melendut atau melengkung" },
    zh: { title: "石膏天花板下垂或变形", topic: "石膏天花板下垂问题" }
  },
  "ceiling-cornice-crack": {
    ms: { title: "Retak Kornis Antara Dinding dan Siling", topic: "retak kornis antara dinding dan siling" },
    zh: { title: "墙面与天花板之间石膏线开裂", topic: "石膏线开裂问题" }
  },
  "balcony-leak-condo": {
    ms: { title: "Balkoni Bocor ke Unit Bawah (Kondominium)", topic: "balkoni yang bocor ke unit bawah" },
    zh: { title: "公寓阳台漏水渗到楼下单位", topic: "阳台漏水问题" }
  },
  "concrete-slab-crack-leak": {
    ms: { title: "Retak Papak Konkrit Bocor Semasa Hujan Lebat", topic: "papak konkrit yang retak dan bocor semasa hujan lebat" },
    zh: { title: "混凝土楼板裂缝在暴雨时渗水", topic: "混凝土楼板裂缝渗水问题" }
  },
  "curtain-track-falling": {
    ms: { title: "Trek Langsir Tercabut daripada Siling", topic: "trek langsir yang tercabut daripada siling" },
    zh: { title: "窗帘轨道从天花板松脱", topic: "窗帘轨道松脱问题" }
  },
  "door-hinge-sagging": {
    ms: { title: "Pintu Kendor atau Berbunyi", topic: "pintu yang kendor atau berbunyi" },
    zh: { title: "门扇下垂或吱吱作响", topic: "门扇下垂或异响问题" }
  },
  "old-condo-full-refurbishment": {
    ms: { title: "Kondominium Lama Yang Perlu Diubahsuai Sepenuhnya", topic: "pengubahsuaian penuh kondominium lama" },
    zh: { title: "需要全面翻新的老公寓", topic: "老公寓全面翻新工程" }
  },
  "power-tripping-frequently": {
    ms: { title: "Elektrik Kerap Trip di Rumah", topic: "elektrik yang kerap trip di rumah" },
    zh: { title: "家中频繁跳闸", topic: "频繁跳闸问题" }
  },
  "water-heater-cold": {
    ms: { title: "Pemanas Air Tidak Panas (Air Sejuk Sahaja)", topic: "pemanas air yang tidak memanaskan air" },
    zh: { title: "热水器不加热（只有冷水）", topic: "热水器不加热问题" }
  },
  "loose-hollow-tiles": {
    ms: { title: "Jubin Lantai Longgar atau Berbunyi Kosong", topic: "jubin lantai yang longgar atau berbunyi kosong" },
    zh: { title: "地砖松动或敲击有空鼓声", topic: "地砖松动空鼓问题" }
  },
  "cracked-tile-grout": {
    ms: { title: "Grout Jubin Retak atau Berubah Warna", topic: "grout jubin yang retak atau berubah warna" },
    zh: { title: "瓷砖填缝剂开裂或变色", topic: "瓷砖填缝剂开裂变色问题" }
  },
  "plaster-ceiling-hairline-crack": {
    ms: { title: "Retak Rambut pada Siling Plaster", topic: "retak rambut pada siling plaster" },
    zh: { title: "石膏天花板出现发丝裂纹", topic: "石膏天花板发丝裂纹问题" }
  },
  "uneven-wall-surface-skim": {
    ms: { title: "Permukaan Dinding Tidak Rata atau Beralun", topic: "permukaan dinding yang tidak rata atau beralun" },
    zh: { title: "墙面不平整或凹凸不平", topic: "墙面凹凸不平问题" }
  },
  "vinyl-flooring-lifting-edges": {
    ms: { title: "Lantai Vinyl atau SPC Terangkat di Tepi", topic: "lantai vinyl atau SPC yang terangkat di tepi" },
    zh: { title: "乙烯基或 SPC 地板边缘翘起", topic: "地板边缘翘起问题" }
  },
  "cracked-roof-tiles": {
    ms: { title: "Jubin Bumbung Retak atau Teralih", topic: "jubin bumbung yang retak atau teralih" },
    zh: { title: "屋顶瓦片开裂或移位", topic: "屋顶瓦片开裂移位问题" }
  },
  "cabinet-door-sagging": {
    ms: { title: "Pintu Kabinet Dapur Kendor atau Senget", topic: "pintu kabinet dapur yang kendor atau senget" },
    zh: { title: "厨房柜门下垂或错位", topic: "厨房柜门下垂错位问题" }
  },
  "wardrobe-door-jamming": {
    ms: { title: "Pintu Almari Tersangkut atau Tidak Tertutup", topic: "pintu almari yang tersangkut atau tidak tertutup" },
    zh: { title: "衣柜门卡住或关不上", topic: "衣柜门卡住问题" }
  },
  "digital-smart-lock-installation": {
    ms: { title: "Pemasangan Kunci Digital / Pintar pada Pintu Sedia Ada", topic: "pemasangan kunci digital atau pintar pada pintu sedia ada" },
    zh: { title: "在现有门上安装电子 / 智能门锁", topic: "智能门锁安装工程" }
  },
  "locked-out-of-house": {
    ms: { title: "Terkunci di Luar Rumah", topic: "terkunci di luar rumah" },
    zh: { title: "被反锁在家门外", topic: "被反锁在门外的情况" }
  },
  "downlight-flickering": {
    ms: { title: "Downlight LED Berkelip atau Cepat Rosak", topic: "downlight LED yang berkelip atau cepat rosak" },
    zh: { title: "LED 筒灯闪烁或过早损坏", topic: "LED 筒灯闪烁或过早损坏问题" }
  },
  "shower-screen-water-leak": {
    ms: { title: "Skrin Mandian Bocor ke Lantai", topic: "skrin mandian yang bocor ke lantai" },
    zh: { title: "淋浴隔断漏水到地板", topic: "淋浴隔断漏水问题" }
  },
  "stubborn-bathroom-limescale": {
    ms: { title: "Karat Kapur dan Kesan Air Degil di Bilik Air", topic: "karat kapur dan kesan air yang degil di bilik air" },
    zh: { title: "浴室顽固水垢和水渍", topic: "浴室顽固水垢水渍问题" }
  },
  "move-out-condo-deep-clean": {
    ms: { title: "Pembersihan Mendalam Kondominium Sebelum Berpindah", topic: "pembersihan mendalam kondominium sebelum berpindah" },
    zh: { title: "公寓退租深度清洁", topic: "退租深度清洁工程" }
  },
  "cement-splatter-tile-clean": {
    ms: { title: "Percikan Simen dan Debu Selepas Pengubahsuaian", topic: "percikan simen dan debu selepas pengubahsuaian" },
    zh: { title: "装修后的水泥溅渍和粉尘", topic: "装修后水泥渍和粉尘问题" }
  },
  "cctv-not-recording-storage-full": {
    ms: { title: "CCTV Tidak Merakam atau Paparan Kosong", topic: "CCTV yang tidak merakam atau menunjukkan paparan kosong" },
    zh: { title: "CCTV 无法录像或画面空白", topic: "CCTV 无法录像问题" }
  },
  "autogate-remote-not-working": {
    ms: { title: "Alat Kawalan Jauh Pagar Auto Tidak Berfungsi", topic: "alat kawalan jauh pagar auto yang tidak berfungsi" },
    zh: { title: "自动门遥控器失灵", topic: "自动门遥控器失灵问题" }
  },
  "loose-metal-gate-hinges": {
    ms: { title: "Engsel Pagar Besi Longgar atau Kendor", topic: "engsel pagar besi yang longgar atau kendor" },
    zh: { title: "金属大门铰链松动或下垂", topic: "金属大门铰链松动问题" }
  },
  "stuck-sliding-window": {
    ms: { title: "Tingkap Gelangsar Tersangkut atau Seret", topic: "tingkap gelangsar yang tersangkut atau seret" },
    zh: { title: "推拉窗卡住或滑动不畅", topic: "推拉窗卡住问题" }
  }
};
