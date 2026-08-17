/**
 * content-body-i18n.ts — MS/ZH translations for the *body* of the 192 generic
 * content pages (`/guides`, `/compare`, `/commercial`, `/residential`,
 * `/seasonal`, `/brands`, `/top`, `/answers`, `/process`, cluster pages).
 *
 * WHY THIS EXISTS
 * ---------------
 * `config/content-i18n.ts` already covers the title, intro and category of all
 * 164 unique slugs in MS and ZH. But the two visible content blocks on those
 * pages — the "Key takeaways" bullet grid and the FAQ accordion — were still
 * English-only, because they are generated programmatically in
 * `config/content-data.ts` rather than hand-authored per page.
 *
 * Translating them per page would mean ~1,500 strings. Translating them per
 * *phrase* means 121 strings, because the generator only ever emits from a
 * small closed vocabulary:
 *
 *   • 93 fixed bullet phrases shared across the page families
 *   • 28 service taglines (already translated in `servicesData[*].i18n`)
 *   • 4 FAQ templates, parameterised by one topic noun phrase
 *   • process-step titles (already translated in `servicesData[*].i18n.process`)
 *
 * So this module ships the 93 bullet phrases + the 4 FAQ templates + the
 * derived-page labels, and the resolver in `lib/content-body-i18n.ts` pulls
 * everything else straight out of the existing `servicesData` translations.
 * Anything without a translation falls back to English — never to a blank.
 *
 * Loaded dynamically (only after a visitor switches language) for the same
 * bundle-discipline reason as `content-i18n.ts`.
 */

type Dict = Record<string, string>;

/** The 93 fixed bullet phrases the content generator can emit, in Malay. */
export const bulletsMs: Dict = {
  // Painting clusters
  "Wall inspection and crack patching": "Pemeriksaan dinding dan tampalan retak",
  "Low-odor washable paint choices": "Pilihan cat boleh dicuci berbau rendah",
  "Furniture masking and cleanup": "Penutupan perabot dan pembersihan",
  "Room sequencing for occupied homes": "Penjadualan bilik demi bilik untuk rumah berpenghuni",
  "Pressure washing": "Cucian tekanan tinggi",
  "Anti-alkali sealer": "Penyendal anti-alkali",
  "Weatherproof topcoats": "Lapisan atas kalis cuaca",
  "High-wall safety planning": "Perancangan keselamatan dinding tinggi",
  "Weekend scheduling": "Penjadualan hujung minggu",
  "Brand colour matching": "Padanan warna jenama",
  "Low-disruption workflow": "Aliran kerja gangguan minimum",
  "Floor and fixture protection": "Perlindungan lantai dan kelengkapan",
  // Plumbing clusters
  "Acoustic and visual checks": "Pemeriksaan akustik dan visual",
  "Main valve isolation": "Pengasingan injap utama",
  "SIRIM-grade fittings": "Aksesori bertaraf SIRIM",
  "Pressure testing": "Ujian tekanan",
  "Fixture compatibility": "Keserasian kelengkapan",
  "Valve replacement": "Penggantian injap",
  "Water heater planning": "Perancangan pemanas air",
  "Clean silicone and sealing": "Silikon kemas dan kedap",
  "Main valve checklist": "Senarai semak injap utama",
  "Flood reduction": "Pengurangan banjir",
  "Priority dispatch": "Penghantaran keutamaan",
  "Permanent repair options": "Pilihan pembaikan kekal",
  // Ceiling clusters
  "Laser-level framing": "Rangka bertaraf laser",
  "Moisture-resistant boards": "Papan tahan lembapan",
  "Joint tape and skim coat": "Pita sambungan dan lapisan skim",
  "Downlight coordination": "Penyelarasan lampu downlight",
  "Leak-source checks": "Pemeriksaan punca kebocoran",
  "Board replacement": "Penggantian papan",
  "Mold-safe removal": "Pembuangan selamat kulat",
  "Seamless repainting": "Pengecatan semula tanpa kesan",
  "Metal tracks": "Landasan logam",
  "Rockwool insulation": "Penebat rockwool",
  "Door opening prep": "Persediaan bukaan pintu",
  "Smooth skim finish": "Kemasan skim licin",
  // Waterproofing clusters
  "Leak diagnosis": "Diagnosis kebocoran",
  "PU injection": "Suntikan PU",
  "No-hack coating": "Salutan tanpa pecah jubin",
  "Full hacking membrane": "Membran dengan pecah penuh",
  "Torch-on membrane": "Membran torch-on",
  "Acrylic coating": "Salutan akrilik",
  "Crack repair": "Pembaikan retak",
  "Drainage checks": "Pemeriksaan saliran",
  "Injection packers": "Packer suntikan",
  "High-pressure pump": "Pam tekanan tinggi",
  "Flexible PU foam": "Buih PU fleksibel",
  "Leak verification": "Pengesahan kebocoran",
  // Handyman clusters
  "Wall type identification": "Pengenalpastian jenis dinding",
  "Stud scanning": "Imbasan stud dinding",
  "Bracket choice": "Pemilihan pendakap",
  "Weight testing": "Ujian beban",
  "Hinge checks": "Pemeriksaan engsel",
  "Door planing": "Ketaman pintu",
  "Latch alignment": "Penjajaran selak",
  "Lockset installation": "Pemasangan set kunci",
  "Part sorting": "Pengasingan bahagian",
  "Level assembly": "Pemasangan rata",
  "Wall anchoring": "Penambat dinding",
  "Drawer and hinge tuning": "Penalaan laci dan engsel",
  // Guide pages
  "Check proven scope and material details": "Semak skop terbukti dan butiran bahan",
  "Ask for an itemised, fixed-price quote": "Minta sebut harga tetap yang terperinci",
  "Confirm warranty scope in writing": "Sahkan skop jaminan secara bertulis",
  "Avoid vague quotes and pressure tactics": "Elak sebut harga kabur dan taktik tekanan",
  // Comparison pages
  "Best-use scenarios": "Senario penggunaan terbaik",
  "Cost and disruption comparison": "Perbandingan kos dan gangguan",
  "Durability considerations": "Pertimbangan ketahanan",
  "When to call a professional": "Bila perlu hubungi profesional",
  // Maintenance pages
  "Monthly checks": "Pemeriksaan bulanan",
  "Quarterly prevention": "Pencegahan suku tahunan",
  "Rainy-season readiness": "Kesiapan musim hujan",
  "When to book inspection": "Bila perlu tempah pemeriksaan",
  // Seasonal pages
  "Book early before peak weeks": "Tempah awal sebelum minggu puncak",
  "Prioritize leaks before repainting": "Utamakan kebocoran sebelum mengecat semula",
  "Protect furniture and flooring": "Lindungi perabot dan lantai",
  "Confirm work hours with building management":
    "Sahkan waktu kerja dengan pihak pengurusan bangunan",
  // Commercial pages
  "After-hours or weekend scheduling": "Penjadualan selepas waktu pejabat atau hujung minggu",
  "Clear scope documentation": "Dokumentasi skop yang jelas",
  "Material and safety planning": "Perancangan bahan dan keselamatan",
  "Fast WhatsApp coordination": "Penyelarasan WhatsApp yang pantas",
  // Residential pages
  "Furniture and floor protection": "Perlindungan perabot dan lantai",
  "Condo/JMB coordination": "Penyelarasan kondo/JMB",
  "Transparent fixed-price quotes": "Sebut harga tetap yang telus",
  "Warranty-backed workmanship": "Mutu kerja disokong jaminan",
  // Brand pages
  "Compatibility with the surface": "Keserasian dengan permukaan",
  "Correct preparation method": "Kaedah persediaan yang betul",
  "Warranty and care considerations": "Pertimbangan jaminan dan penjagaan",
  "No claim of exclusive partnership unless documented":
    "Tiada dakwaan perkongsian eksklusif melainkan didokumenkan",
  // Top-consideration pages
  "Transparent pricing": "Harga yang telus",
  "Workmanship warranty": "Jaminan mutu kerja",
  "Material quality": "Kualiti bahan",
  "Clean site handover": "Serahan tapak yang bersih",
  "Relevant local experience": "Pengalaman tempatan yang relevan",
  // Aircon cluster pages
  "From RM 259 installation": "Pemasangan dari RM 259",
  "7 ft copper pipe included": "Paip tembaga 7 kaki disertakan",
  "Unit supplied by customer": "Unit dibekalkan pelanggan",
  "Vacuum commissioning & cooling test": "Pentauliahan vakum & ujian penyejukan",
  "1.5 HP sizing guidance": "Panduan saiz 1.5 HP",
  "Cooling test before handover": "Ujian penyejukan sebelum serahan",
  "From RM 324 installation": "Pemasangan dari RM 324",
  "2.0 HP sizing guidance": "Panduan saiz 2.0 HP",
  "Extra copper per foot": "Tembaga tambahan setiap kaki",
  "Run/cooling test included": "Ujian operasi/penyejukan disertakan",
  "From RM 377 installation": "Pemasangan dari RM 377",
  "1.0–1.5 HP cassette": "Kaset 1.0–1.5 HP",
  "Commercial spaces": "Ruang komersial",
  "Ceiling cassette & wall units": "Unit kaset siling & dinding",
  "Multi-unit pricing": "Harga pelbagai unit",
  "Strata / management compliance": "Pematuhan strata / pengurusan",
  "After-hours scheduling": "Penjadualan selepas waktu kerja"
};

/** The same 93 bullet phrases in Simplified Chinese. */
export const bulletsZh: Dict = {
  "Wall inspection and crack patching": "墙面检查与裂缝修补",
  "Low-odor washable paint choices": "低气味可擦洗油漆选择",
  "Furniture masking and cleanup": "家具遮蔽与清理",
  "Room sequencing for occupied homes": "有人居住房屋的分房施工安排",
  "Pressure washing": "高压清洗",
  "Anti-alkali sealer": "抗碱底漆",
  "Weatherproof topcoats": "防风雨面漆",
  "High-wall safety planning": "高墙作业安全规划",
  "Weekend scheduling": "周末排期",
  "Brand colour matching": "品牌色彩匹配",
  "Low-disruption workflow": "低干扰施工流程",
  "Floor and fixture protection": "地板与固定装置保护",
  "Acoustic and visual checks": "声波与目视检查",
  "Main valve isolation": "总阀隔离",
  "SIRIM-grade fittings": "SIRIM 认证配件",
  "Pressure testing": "压力测试",
  "Fixture compatibility": "洁具兼容性",
  "Valve replacement": "阀门更换",
  "Water heater planning": "热水器规划",
  "Clean silicone and sealing": "整洁的密封胶与防水收边",
  "Main valve checklist": "总阀检查清单",
  "Flood reduction": "减少水浸",
  "Priority dispatch": "优先派工",
  "Permanent repair options": "永久性维修方案",
  "Laser-level framing": "激光水平龙骨",
  "Moisture-resistant boards": "防潮板材",
  "Joint tape and skim coat": "接缝胶带与批荡层",
  "Downlight coordination": "筒灯开孔协调",
  "Leak-source checks": "漏水源头检查",
  "Board replacement": "板材更换",
  "Mold-safe removal": "安全除霉拆除",
  "Seamless repainting": "无痕补漆",
  "Metal tracks": "金属龙骨",
  "Rockwool insulation": "岩棉隔音",
  "Door opening prep": "门洞预留",
  "Smooth skim finish": "平滑批荡饰面",
  "Leak diagnosis": "漏水诊断",
  "PU injection": "PU 注浆",
  "No-hack coating": "免打砖涂层",
  "Full hacking membrane": "全打砖防水膜",
  "Torch-on membrane": "热熔卷材防水",
  "Acrylic coating": "丙烯酸涂层",
  "Crack repair": "裂缝修补",
  "Drainage checks": "排水检查",
  "Injection packers": "注浆止水针",
  "High-pressure pump": "高压注浆泵",
  "Flexible PU foam": "柔性 PU 发泡",
  "Leak verification": "漏水复检",
  "Wall type identification": "墙体类型识别",
  "Stud scanning": "墙内龙骨扫描",
  "Bracket choice": "支架选型",
  "Weight testing": "承重测试",
  "Hinge checks": "铰链检查",
  "Door planing": "门扇刨修",
  "Latch alignment": "锁舌对位",
  "Lockset installation": "锁具安装",
  "Part sorting": "零件分类",
  "Level assembly": "水平组装",
  "Wall anchoring": "墙面固定",
  "Drawer and hinge tuning": "抽屉与铰链调校",
  "Check proven scope and material details": "核对已验证的施工范围与材料细节",
  "Ask for an itemised, fixed-price quote": "索取逐项列明的固定价报价",
  "Confirm warranty scope in writing": "以书面确认保修范围",
  "Avoid vague quotes and pressure tactics": "避开含糊报价与逼单手法",
  "Best-use scenarios": "最适用的情况",
  "Cost and disruption comparison": "费用与干扰程度比较",
  "Durability considerations": "耐用度考量",
  "When to call a professional": "何时应找专业人员",
  "Monthly checks": "每月检查",
  "Quarterly prevention": "每季预防保养",
  "Rainy-season readiness": "雨季准备",
  "When to book inspection": "何时预约检查",
  "Book early before peak weeks": "在旺季前提早预约",
  "Prioritize leaks before repainting": "先处理漏水再重新粉刷",
  "Protect furniture and flooring": "保护家具与地板",
  "Confirm work hours with building management": "与管理处确认施工时间",
  "After-hours or weekend scheduling": "非办公时间或周末排期",
  "Clear scope documentation": "清晰的施工范围文件",
  "Material and safety planning": "材料与安全规划",
  "Fast WhatsApp coordination": "WhatsApp 快速协调",
  "Furniture and floor protection": "家具与地板保护",
  "Condo/JMB coordination": "公寓／管理层协调",
  "Transparent fixed-price quotes": "透明的固定价报价",
  "Warranty-backed workmanship": "有保修支持的工艺",
  "Compatibility with the surface": "与基层的兼容性",
  "Correct preparation method": "正确的施工前处理",
  "Warranty and care considerations": "保修与保养考量",
  "No claim of exclusive partnership unless documented": "除非有文件证明，否则不宣称独家合作",
  "Transparent pricing": "透明定价",
  "Workmanship warranty": "工艺保修",
  "Material quality": "材料品质",
  "Clean site handover": "清洁交场",
  "Relevant local experience": "相关的本地经验",
  "From RM 259 installation": "安装从 RM 259 起",
  "7 ft copper pipe included": "含 7 英尺铜管",
  "Unit supplied by customer": "主机由客户自备",
  "Vacuum commissioning & cooling test": "真空调试与制冷测试",
  "1.5 HP sizing guidance": "1.5 HP 匹数建议",
  "Cooling test before handover": "交付前制冷测试",
  "From RM 324 installation": "安装从 RM 324 起",
  "2.0 HP sizing guidance": "2.0 HP 匹数建议",
  "Extra copper per foot": "额外铜管按每英尺",
  "Run/cooling test included": "含运行/制冷测试",
  "From RM 377 installation": "安装从 RM 377 起",
  "1.0–1.5 HP cassette": "1.0–1.5 HP 卡式机",
  "Commercial spaces": "商业空间",
  "Ceiling cassette & wall units": "天花卡式与挂壁机",
  "Multi-unit pricing": "多台计价",
  "Strata / management compliance": "分层物业 / 管理处合规",
  "After-hours scheduling": "非办公时间排期"
};

/**
 * The four generic FAQ templates. `{topic}` is the page's `faqTopic` — its own
 * MS/ZH title where we have one, otherwise the English phrase, so a mixed
 * sentence is still grammatical rather than broken.
 */
export const faqTemplatesMs = [
  {
    q: "Adakah {topic} relevan untuk rumah di KL dan Selangor?",
    a: "Ya. Cadangan ini ditulis khusus untuk jenis hartanah Lembah Klang, kelembapan tropika, peraturan kondominium, dan bahan binaan biasa di Malaysia."
  },
  {
    q: "Bagaimana saya patut merancang bajet untuk {topic}?",
    a: "Gunakan panduan ini sebagai julat perancangan sahaja, kemudian sahkan sebut harga tetap yang terperinci selepas foto dihantar atau selepas pemeriksaan di tapak."
  },
  {
    q: "Bolehkah KL Servis Rumah membantu dengan {topic}?",
    a: "Ya. Kongsi jenis hartanah, kawasan, foto, dan masa pilihan anda melalui WhatsApp supaya kami boleh menasihatkan skop yang sesuai."
  },
  {
    q: "Adakah harga disahkan sebelum kerja bermula?",
    a: "Ya. Kami sahkan harga penuh di depan sebelum kerja bermula dan hanya meneruskan selepas mendapat kelulusan anda."
  }
];

export const faqTemplatesZh = [
  {
    q: "{topic}适用于吉隆坡与雪兰莪的房屋吗？",
    a: "适用。这些建议是针对巴生谷的房产类型、热带潮湿气候、公寓管理规定，以及马来西亚常见的建筑材料而撰写的。"
  },
  {
    q: "{topic}的预算该怎么估算？",
    a: "请把本指南当作规划区间参考，之后再根据照片或现场勘查确认一份逐项列明的固定价报价。"
  },
  {
    q: "KL Servis Rumah 能协助处理{topic}吗？",
    a: "可以。请通过 WhatsApp 告诉我们房产类型、所在区域、照片与期望时间，我们会建议合适的施工范围。"
  },
  {
    q: "价格会在开工前确认吗？",
    a: "会。我们在开工前确认完整价格，取得您同意后才开始施工。"
  }
];

/** Labels for the derived bullets on `/answers/*` pages. */
export const answerLabels = {
  ms: { startingPrice: "Harga permulaan", warranty: "Jaminan", lastUpdated: "Kemas kini terakhir" },
  zh: { startingPrice: "起价", warranty: "保修", lastUpdated: "最后更新" }
} as const;
