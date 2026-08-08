import type { Locale } from "@/lib/i18n";
import { servicesData, type ServiceDetail } from "@/config/services-data";
import { allProblemPages, type ProblemDetail } from "@/config/problem-data";
import { toolsList } from "@/config/tools-data";
import { localizedToolContent } from "@/config/tools-i18n";
import { getRelatedServices } from "@/config/topical-authority-map";
import { getLocalizedService } from "@/lib/service-i18n";
import { getWhatsAppLink } from "@/lib/whatsapp";

export interface SmartServiceEntity {
  id: string;
  serviceSlug: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  startPrice: string;
  priceType: "Starting From" | "Fixed Price" | "Price Range" | "Calculator";
  warranty: string;
  whatIsIncluded: string[];
  materials: string[];
  process: Array<{ step: string; title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
  relatedServices: Array<{ slug: string; title: string }>;
  calculators: Array<{ slug: string; name: string; url: string }>;
  customerProblems: Array<{ slug: string; title: string; symptom: string }>;
  synonyms: string[];
  ctaUrl: string;
  quoteUrl: string;
  needsBusinessDecision: boolean;
  businessDecisionNote?: string;
}

export interface ServiceTaxonomyEntry {
  serviceSlug: string;
  category: "painting" | "plumbing" | "ceiling" | "waterproofing" | "handyman" | "renovation" | "electrical" | "flooring" | "carpentry" | "doors-windows" | "security" | "cleaning" | "metalwork";
  synonyms: {
    en: string[];
    ms: string[];
    zh: string[];
  };
  materials: {
    en: string[];
    ms: string[];
    zh: string[];
  };
  priceType: "Starting From" | "Fixed Price" | "Price Range" | "Calculator";
  calculatorSlugs: string[];
  needsBusinessDecision?: boolean;
  businessDecisionNote?: {
    en: string;
    ms: string;
    zh: string;
  };
}

export const SMART_SERVICE_TAXONOMY: Record<string, ServiceTaxonomyEntry> = {
  painting: {
    serviceSlug: "painting",
    category: "painting",
    priceType: "Starting From",
    calculatorSlugs: ["painting-calculator", "paint-quantity-estimator"],
    synonyms: {
      en: ["house painting", "wall painting", "paint house", "condo painting", "room painting", "repainting", "painter", "exterior painting", "interior painting", "wall skim coat", "peeling paint", "paint ceiling"],
      ms: ["cat rumah", "cat dinding", "cat tembok", "rumah nak cat", "cat ruang tamu", "cat kondo", "cat bilik", "cat pejabat", "cat exterior", "tukang cat", "upah cat", "cat mengelupas"],
      zh: ["房子油漆", "墙壁油漆", "房屋粉刷", "粉刷墙壁", "油漆工", "刷墙", "油漆房子", "公寓油漆", "房间油漆", "室内油漆", "外墙粉刷", "墙面脱漆"]
    },
    materials: {
      en: ["Nippon Paint Premium Sealers & Emulsion", "Dulux EasyClean Anti-Mould Paint", "Jotun Majestic True Beauty", "High-Bond Crack Filler & Putty"],
      ms: ["Sealer & Cat Emulsi Premium Nippon Paint", "Cat Anti-Kulat Dulux EasyClean", "Cat Jotun Majestic True Beauty", "Pengisi Retak & Putty Berkualiti Tinggi"],
      zh: ["立邦高级底漆与乳胶漆", "多乐士防霉易擦洗面漆", "佐敦美图美居系列", "高粘结填缝剂与腻子"]
    }
  },
  plumbing: {
    serviceSlug: "plumbing",
    category: "plumbing",
    priceType: "Starting From",
    calculatorSlugs: ["plumbing-diagnostic", "pipe-leak-estimator", "water-pressure-troubleshooter", "pipe-replacement-cost"],
    synonyms: {
      en: ["plumber", "blocked pipe", "pipe leak", "water pressure low", "clogged drain", "toilet sink leak", "kitchen sink clogged", "basin leak", "tap repair", "emergency plumbing", "bathroom drainage"],
      ms: ["paip bocor", "paip tersumbat", "tukang paip", "air tak laju", "sinki sumbat", "tandas sumbat", "tekanan air rendah", "baiki paip", "paip bilik air bocor", "paip dapur sumbat"],
      zh: ["水管漏水", "水管堵塞", "水喉匠", "水压低", "通马桶", "疏通下水道", "厨房水槽堵塞", "洗手盆漏水", "换水龙头", "紧急水电维修"]
    },
    materials: {
      en: ["SIRIM-Certified Heavy-Duty PVC/PPR Piping", "Brass Ball Valves & Check Valves", "Food-Grade Stainless Steel Connectors", "High-Pressure Sealant & Gaskets"],
      ms: ["Paip PVC/PPR Tugas Berat Disahkan SIRIM", "Injap Bola Kuningan & Injap Tahan", "Penyambung Keluli Tahan Karat Gred Makanan", "Pengedap & Gasket Tekanan Tinggi"],
      zh: ["SIRIM认证高强度PVC/PPR水管", "纯铜止回阀与球阀", "食品级不锈钢软管接口", "高压防漏密封胶圈"]
    }
  },
  ceiling: {
    serviceSlug: "ceiling",
    category: "ceiling",
    priceType: "Starting From",
    calculatorSlugs: ["ceiling-calculator", "ceiling-area-calculator", "ceiling-replacement-cost"],
    synonyms: {
      en: ["plaster ceiling", "ceiling crack", "gypsum board", "ceiling leak damage", "false ceiling", "office partition", "gypsum partition", "drywall partition", "l-box ceiling", "ceiling collapse"],
      ms: ["plaster siling", "siling retak", "siling bocor", "gypsum board", "partition pejabat", "dinding partition", "siling runtuh", "nak buat partition office", "siling berair", "siling gantung"],
      zh: ["天花板裂了", "石膏天花板", "天花板漏水", "办公室隔间", "吊顶设计", "隔墙板", "石膏板隔间", "L-Box灯槽天花板", "天花板修补"]
    },
    materials: {
      en: ["9mm Premium Gypsum Boards", "Galvanized Metal Concealed Grid Framing", "Fiberglass Joint Tape & Compound", "Moisture-Resistant Bathroom Ceiling Panels"],
      ms: ["Papan Gypsum Premium 9mm", "Rangka Besi Tersembunyi Bergalvani", "Pita Sambungan Kaca Gentian & Kompaun", "Panel Siling Tahan Lembap untuk Bilik Air"],
      zh: ["9毫米高档优质石膏板", "防锈镀锌轻钢龙骨骨架", "高强度玻璃纤维嵌缝带与熟胶粉", "防潮型卫生间专用天花板"]
    }
  },
  waterproofing: {
    serviceSlug: "waterproofing",
    category: "waterproofing",
    priceType: "Starting From",
    calculatorSlugs: ["leak-triage", "waterproofing-cost-calculator", "bathroom-waterproofing-estimator", "balcony-waterproofing-estimator"],
    synonyms: {
      en: ["bathroom wall leaking", "waterproofing", "roof leak", "toilet floor leaking", "pu grouting", "balcony leak", "slab leakage", "concrete seepage", "water stain wall", "ceiling dripping"],
      ms: ["bilik air bocor", "dinding bocor", "lantai tandas bocor", "pu grouting", "waterproofing bilik air", "bumbung bocor", "air meresap", "silicone waterproof", "bocor tanpa pecah jubin"],
      zh: ["厕所漏水", "墙壁漏水", "阳台漏水", "PU灌浆防漏", "天花板渗水", "屋顶漏水", "卫生间防水", "免砸砖防水", "墙体渗露"]
    },
    materials: {
      en: ["Hydrophobic Polyurethane (PU) Grout Resin", "Flexible Polymer-Modified Waterproofing Membrane", "Heavy-Duty Epoxy Grout Sealer", "Sika Waterproofing Compound"],
      ms: ["Resin Grout Poliuretana (PU) Hidrofobik", "Membran Kalis Air Modifikasi Polimer Fleksibel", "Pengedap Grout Epoksi Tugas Berat", "Kompaun Kalis Air Sika"],
      zh: ["疏水性聚氨酯(PU)灌浆树脂", "弹性高分子改性防水涂膜", "高耐磨环氧填缝剂", "Sika西卡专业防水系列"]
    }
  },
  handyman: {
    serviceSlug: "handyman",
    category: "handyman",
    priceType: "Starting From",
    calculatorSlugs: ["handyman-cost-estimator", "tv-mount-advisor", "furniture-assembly-estimator", "curtain-installation-calculator"],
    synonyms: {
      en: ["handyman", "tv bracket install", "mount tv", "drill holes", "hang mirrors", "curtain rod installation", "assemble ikea furniture", "minor house repairs", "shelf mounting", "cabinet hinge repair"],
      ms: ["handyman", "pasang tv bracket", "tebuk dinding", "gantung cermin", "pasang langsir", "pasang perabot", "baiki kerosakan kecil", "pasang rak", "tukar engsel almari"],
      zh: ["杂工", "安装电视架", "墙壁打孔", "挂壁画镜子", "安装窗帘杆", "组装家具", "小家电修缮", "家居零星维修", "组装宜家家私"]
    },
    materials: {
      en: ["Heavy-Duty Wall Plugs & Anchors", "Stainless Steel Mounting Brackets", "Fischer Nylon Dowels", "Industrial Silicone Sealant"],
      ms: ["Palam Dinding & Pengikat Tugas Berat", "Pendakap Pemasangan Keluli Tahan Karat", "Dowel Nilon Fischer", "Pengedap Silikon Perindustrian"],
      zh: ["高强耐载膨胀螺栓与墙塞", "加厚不锈钢支架配件", "Fischer德国尼龙膨胀栓", "工业级中性硅酮密封胶"]
    }
  },
  "house-renovation": {
    serviceSlug: "house-renovation",
    category: "renovation",
    priceType: "Starting From",
    calculatorSlugs: ["renovation-budget-calculator", "room-renovation-estimator", "kitchen-renovation-estimator", "bathroom-renovation-estimator"],
    synonyms: {
      en: ["house renovation", "kitchen renovation", "bathroom remodeling", "condo renovation", "complete make-over", "house extension", "hacking tiles", "wet work contractor", "office remodeling"],
      ms: ["ubah suai rumah", "renovate dapur", "nak renovate kitchen", "renovate bilik air", "renovasi kondo", "pecah dinding", "kontraktor ubah suai", "tambah bilik", "renovate pejabat"],
      zh: ["厨房装修", "全屋装修", "卫生间翻新", "公寓改造", "打除墙砖", "室内扩展工程", "老房翻新", "整体家装", "商铺装修"]
    },
    materials: {
      en: ["SIRIM-Certified Portland Cement & Plaster", "High-Grade Quartz Surface Tops", "Heavy-Duty Structural Hacking Tooling", "Grade-A Timber & Aluminum Fixtures"],
      ms: ["Simen & Plaster Portland Disahkan SIRIM", "Permukaan Kuarza Gred Tinggi", "Alatan Pecah Struktur Tugas Berat", "Kelengkapan Kayu & Aluminium Gred A"],
      zh: ["SIRIM认证标号水泥与粉刷砂浆", "高硬度优质石英石台面", "专业结构开凿保护配置", "A级木作与铝合金建材"]
    }
  },
  electrical: {
    serviceSlug: "electrical",
    category: "electrical",
    priceType: "Starting From",
    calculatorSlugs: ["electrical-installation-cost", "socket-quantity-calculator"],
    synonyms: {
      en: ["electrician", "wireman", "short circuit", "power trip", "new plug point", "install socket", "rewiring house", "db box repair", "lighting point wiring"],
      ms: ["wireman", "tukang elektrik", "elektrik trip", "tambah plug point", "rewiring rumah", "baiki db box", "wayar terbakar", "pasang soket"],
      zh: ["电工", "电线短路", "跳闸", "安装插座", "全屋复线", "配电箱排查", "布线工程", "拉电服务"]
    },
    materials: {
      en: ["SIRIM/ST-Certified 100% Pure Copper Wiring", "Schneider Electric / Hager Breakers", "Fire-Retardant PVC Conduit Pipes", "Heavy-Duty 13A/15A Switch Sockets"],
      ms: ["Wayar 100% Kuprum Disahkan SIRIM/ST", "Pemutus Litar Schneider / Hager", "Paip Konduit PVC Tahan Api", "Soket Suis 13A/15A Tugas Berat"],
      zh: ["SIRIM/ST认证100%纯铜国标电线", "施耐德/海格空开漏保元件", "阻燃PVC导线管", "重载13A/15A安全插座"]
    }
  },
  "water-heater": {
    serviceSlug: "water-heater",
    category: "plumbing",
    priceType: "Starting From",
    calculatorSlugs: ["electrical-installation-cost"],
    synonyms: {
      en: ["water heater installation", "water heater repair", "water heater leak", "instant water heater", "storage water heater", "water pump replacement", "hot water shower no heat"],
      ms: ["nak pasang water heater", "water heater rosak", "baiki water heater", "pemanas air", "water heater bocor", "tukar pam air panas"],
      zh: ["安装热水器", "热水器维修", "热水器漏水", "即热式热水器", "储水式热水器", "洗澡无热水", "更换热水器抽水马达"]
    },
    materials: {
      en: ["SIRIM-Certified 15A Heater Wiring & Switch", "High-Pressure Flexible Stainless Steel Hose", "Joven / Panasonic Compatible Valves", "Anti-Leak PTFE Sealing Tape"],
      ms: ["Wayar & Suis 15A Disahkan SIRIM", "Hos Keluli Tahan Karat Fleksibel Tekanan Tinggi", "Injap Serasi Joven / Panasonic", "Pita Pengedap PTFE Anti-Bocor"],
      zh: ["SIRIM认证15A专用发热电线与开关", "耐高温高压不锈钢波纹管", "Joven/Panasonic通用控水阀", "聚四氟乙烯高密密封带"]
    }
  },
  "ceiling-fan": {
    serviceSlug: "ceiling-fan",
    category: "electrical",
    priceType: "Starting From",
    calculatorSlugs: ["ceiling-fan-installation-estimator"],
    synonyms: {
      en: ["ceiling fan installation", "fan replacement", "dc fan installation", "fan wobbling repair", "remote ceiling fan", "wall fan mounting", "kdk fan installation"],
      ms: ["pasang kipas siling", "tukar kipas", "kipas goyang", "kipas remote", "pasang kipas kdk", "kipas dinding", "pasang kipas dc"],
      zh: ["吊扇安装", "更换风扇", "吊扇摇晃调试", "遥控吊扇安装", "KDK吊扇安装", "直流静音风扇安装"]
    },
    materials: {
      en: ["Heavy-Duty Steel Fan Hooks & J-Bolts", "SIRIM-Certified 3-Core Pure Copper Cable", "Rubber Vibration Isolators", "Safety Wire Attachment Accessories"],
      ms: ["Cangkuk Kipas Keluli Tugas Berat & J-Bolt", "Kabel Kuprum Tulen 3-Teras Disahkan SIRIM", "Pengasing Getaran", "Aksesori Kawat Keselamatan"],
      zh: ["加厚铸铁膨胀吊扇钩与J型螺栓", "SIRIM认证国标三芯纯铜电线", "橡胶减震降噪缓冲垫", "国家标准防坠钢丝保护绳"]
    }
  },
  lighting: {
    serviceSlug: "lighting",
    category: "electrical",
    priceType: "Starting From",
    calculatorSlugs: ["lighting-installation-calculator"],
    synonyms: {
      en: ["lighting installation", "led downlight replacement", "track light install", "pendant light mounting", "chandelier hanging", "garden outdoor lights", "sensor lights"],
      ms: ["pasang lampu", "tukar lampu led", "pasang lampu downlight", "lampu hiasan siling", "lampu gantung", "lampu luar rumah", "lampu taman"],
      zh: ["灯具安装", "安装LED筒灯", "轨道射灯安装", "吊灯安装", "水晶灯悬挂", "庭院感应灯安装", "灯泡损坏更换"]
    },
    materials: {
      en: ["Philips / Osram High-CRI LED Fixtures", "Heavy-Duty Ceramic Lamp Holders", "ST-Approved Quick Wire Connectors", "Heat-Resistant Silicone Cabling"],
      ms: ["Lampu LED CRI Tinggi Philips / Osram", "Pemegang Lampu Seramik Tugas Berat", "Penyambung Wayar Pantas Diluluskan ST", "Kabel Silikon Tahan Haba"],
      zh: ["飞利浦/欧司朗高显指护眼LED光源", "耐高温陶瓷阻燃灯座", "ST认证Wago式无火花快速导线端子", "耐热隔磁硅胶线缆"]
    }
  },
  tiling: {
    serviceSlug: "tiling",
    category: "renovation",
    priceType: "Starting From",
    calculatorSlugs: ["tile-quantity-calculator"],
    synonyms: {
      en: ["tiling contractor", "popping tiles repair", "replace floor tiles", "bathroom wall tiling", "kitchen backsplash tile", "re-grouting tiles", "hollow tile repair"],
      ms: ["pasang jubin", "jubin meletup", "baiki mozek lantai", "tukar tiles bilik air", "mozek dapur", "grounting jubin", "mozek kosong"],
      zh: ["贴瓷砖", "瓷砖空鼓爆裂", "铺地砖", "卫生间墙砖修补", "厨房挡水墙砖", "填缝美缝服务", "更补裂砖"]
    },
    materials: {
      en: ["Mapei / Sika Heavy-Duty Tile Adhesive", "Waterproof Epoxy Grout Compound", "SIRIM-Tested Homogeneous Porcelain Tiles", "Precision Leveling Clips & Spacers"],
      ms: ["Gam Jubin Tugas Berat Mapei / Sika", "Kompaun Grout Epoksi Kalis Air", "Jubin Porselin Homogen Diuji SIRIM", "Klip Perataan & Jarum Penjarak Tepat"],
      zh: ["Mapei马贝/Sika高级全瓷贴砖王胶水泥", "防霉耐水抗震环氧瓷砖填缝剂", "SIRIM认证优等防滑全瓷砖", "高精度十字定位卡片与找平器"]
    }
  },
  "plaster-ceiling": {
    serviceSlug: "plaster-ceiling",
    category: "ceiling",
    priceType: "Starting From",
    calculatorSlugs: ["ceiling-calculator", "ceiling-area-calculator"],
    synonyms: {
      en: ["plaster ceiling design", "gypsum ceiling install", "cove lighting ceiling", "flat plaster ceiling", "decorative cornice", "l box ceiling"],
      ms: ["reka bentuk plaster siling", "pasang siling gypsum", "siling cove light", "siling rata", "kornice hiasan", "siling moden"],
      zh: ["吊顶设计", "石膏吊顶工程", "隐藏灯带吊顶", "平顶天花板", "欧式装饰石膏线", "L型层板吊顶"]
    },
    materials: {
      en: ["9mm USG Boral Gypsum Board", "Anti-Rust Galvanized Steel Furring Channels", "Fiberglass Joint Reinforcement Tape", "High-Bond Stopping Plaster"],
      ms: ["Papan Gypsum USG Boral 9mm", "Saluran Besi Bergalvani Anti-Karat", "Pita Tetulang Kaca Gentian", "Plaster Kompaun Berdaya Lekat Tinggi"],
      zh: ["9毫米USG优时吉博罗高档石膏板", "加厚国标热镀锌抗下垂龙骨", "高强玻纤网格接缝防护带", "不收缩平整接缝嵌缝石膏粉"]
    }
  },
  "skim-coat": {
    serviceSlug: "skim-coat",
    category: "painting",
    priceType: "Starting From",
    calculatorSlugs: ["wall-area-calculator", "painting-calculator"],
    synonyms: {
      en: ["skim coat wall", "smooth ceiling finish", "wall leveling", "plaster repair wall", "uneven wall surface fix"],
      ms: ["skim coat dinding", "licinkan dinding", "perata dinding", "baiki dinding menggerutu", "dinding bergelombang"],
      zh: ["墙面批灰腻子", "墙面找平", "天花板批刮", "修复凹凸不平墙面", "全墙精细抛光基底"]
    },
    materials: {
      en: ["Nippon / Sika Fine Finish Skim Coat Powder", "Acrylic Polymer Bonding Agent", "Sandpaper & Smoothing Abrasives"],
      ms: ["Serbuk Skim Coat Halus Nippon / Sika", "Ejen Lekatan Polimer Akrilik", "Kertas Pasir & Abrasif Perata"],
      zh: ["立邦/西卡超精细面层内墙耐水腻子", "高附着抗裂丙烯酸界面改性剂", "静电植砂抛光精打磨网"]
    }
  },
  flooring: {
    serviceSlug: "flooring",
    category: "flooring",
    priceType: "Starting From",
    calculatorSlugs: ["flooring-area-calculator", "vinyl-flooring-cost-estimator"],
    synonyms: {
      en: ["spc flooring", "vinyl flooring", "laminate flooring", "floor skirting installation", "waterproof wood flooring", "timber floor replacement"],
      ms: ["lantai spc", "lantai vinyl", "lantai kayu laminate", "pasang skirting lantai", "lantai kayu kalis air", "tukar lantai kondo"],
      zh: ["SPC锁扣地板", "塑胶地板", "强化复合木地板", "地板踢脚线安装", "全防水石塑地板", "地板发泡空鼓更补"]
    },
    materials: {
      en: ["5mm Virgin SPC Click Flooring (100% Waterproof)", "2mm IXPE Silent Acoustic Underlay", "PVC Matching PVC Skirting & Profiles"],
      ms: ["Lantai SPC Click 5mm Virgin (100% Kalis Air)", "Lapisan Bawah Akustik Senyap IXPE 2mm", "Skirting & Profil PVC Sepadan"],
      zh: ["5毫米全新料零甲醛纯锁扣SPC地板", "2毫米高阻尼静音IXPE减震底膜", "同色防尘抗起翘高分子PVC踢脚线"]
    }
  },
  "epoxy-flooring": {
    serviceSlug: "epoxy-flooring",
    category: "flooring",
    priceType: "Starting From",
    calculatorSlugs: ["flooring-area-calculator"],
    synonyms: {
      en: ["epoxy flooring", "pu floor coating", "garage epoxy floor", "commercial warehouse flooring", "chemical resistant floor", "non-slip epoxy"],
      ms: ["lantai epoksi", "salutan lantai pu", "lantai epoksi garaj", "lantai kilang gudang", "lantai tahan bahan kimia", "epoksi anti-gelincir"],
      zh: ["环氧树脂地坪", "PU聚氨酯地面涂层", "车库自流平地坪", "工厂仓库耐磨工业地坪", "防滑耐酸碱涂膜"]
    },
    materials: {
      en: ["100% Solid Solvent-Free Epoxy Primer & Resin", "Anti-Slip Quartz Aggregates", "Aliphatic Polyurethane Topcoat"],
      ms: ["Primer & Resin Epoksi Bebas Pelarut 100% Pepejal", "Agregat Kuarza Anti-Gelincir", "Lapisan Atas Poliuretana Alifatik"],
      zh: ["100%高固含无溶剂型环保环氧树脂底层与自流平面层", "金刚砂耐磨防滑颗粒", "抗紫外线脂肪族聚氨酯耐磨罩光面漆"]
    }
  },
  "roof-repair": {
    serviceSlug: "roof-repair",
    category: "waterproofing",
    priceType: "Starting From",
    calculatorSlugs: ["roof-area-calculator", "roof-repair-estimator", "roof-replacement-cost"],
    synonyms: {
      en: ["roof repair", "roof leaking", "replace roof tile", "roof waterproofing", "gutter repair", "roof ridge cracking", "metal roof sealing"],
      ms: ["baiki bumbung", "bumbung bocor", "tukar genting bumbung", "waterproofing bumbung", "baiki salur air gutter", "bumbung retak"],
      zh: ["屋顶漏水维修", "修补瓦片", "换屋顶瓦", "屋面防水工程", "水槽漏水修缮", "铁皮屋顶防漏止漏"]
    },
    materials: {
      en: ["Monier / Lama Concrete & Clay Roof Tiles", "Sika Multiseal Bituminous Waterproofing Tape", "High-Elastic Acrylic Roof Coating", "UV-Resistant Roof Flashing Cement"],
      ms: ["Genting Bumbung Konkrit & Tanah Liat Monier / Lama", "Pita Kalis Air Bituminous Sika Multiseal", "Salutan Bumbung Akrilik Keanjalan Tinggi", "Simen Flashing Tahan UV"],
      zh: ["Monier高档水泥陶土瓦件", "Sika西卡高强自粘丁基防漏胶带", "外露式抗冷热循环高弹屋顶隔热防水漆", "全天候耐候砂浆补漏剂"]
    }
  },
  "kitchen-cabinet": {
    serviceSlug: "kitchen-cabinet",
    category: "carpentry",
    priceType: "Starting From",
    calculatorSlugs: ["kitchen-renovation-estimator"],
    synonyms: {
      en: ["kitchen cabinet", "custom kitchen cabinet", "quartz countertop", "cabinet hinge repair", "replace kitchen door", "sink cutout cabinet"],
      ms: ["kabinet dapur", "tempah kabinet dapur", "tabletop kuarza", "baiki engsel kabinet", "tukar pintu kabinet", "kabinet sinki"],
      zh: ["厨房橱柜定制", "整体厨房制作", "石英石台面", "橱柜铰链更换", "橱柜门板更换", "水槽改造橱柜"]
    },
    materials: {
      en: ["E0 Grade Moisture-Resistant Melamine Boards", "Soft-Close DTC/Blum Stainless Hinges", "Grade-A Solid Quartz Stone Countertops"],
      ms: ["Papan Melamin Tahan Lembap Gred E0", "Engsel Keluli Tahan Karat Soft-Close DTC/Blum", "Tabletop Batu Kuarza Pepejal Gred A"],
      zh: ["E0级高密度抗潮耐用生态三聚氰胺板", "Blum百隆/DTC液压静音重载不锈钢阻尼铰链", "食品级零渗透A级天然石英石台面"]
    }
  },
  carpentry: {
    serviceSlug: "carpentry",
    category: "carpentry",
    priceType: "Starting From",
    calculatorSlugs: ["room-renovation-estimator"],
    synonyms: {
      en: ["custom carpentry", "built in wardrobe", "custom tv cabinet", "shoe cabinet", "custom bookshelf", "woodworking contractor"],
      ms: ["pertukangan kayu custom", "almari pasang siap built in", "kabinet tv kayu", "kabinet kasut", "rak buku custom", "tukang kayu"],
      zh: ["木工定制", "定制衣柜", "嵌入式壁柜", "整墙电视柜定制", "储物柜定制", "木工作坊服务"]
    },
    materials: {
      en: ["High-Density Solid Plywood Core", "High-Pressure Laminate (HPL) Finish", "Heavy-Duty Soft-Close Drawer Slides"],
      ms: ["Teras Papan Lapis Pepejal Ketumpatan Tinggi", "Kemasan Laminasi Tekanan Tinggi (HPL)", "Laluan Laci Soft-Close Tugas Berat"],
      zh: ["进口整芯高压实木多层板核心", "防火防刮超亮抗摩擦HPL高压饰面贴皮", "承重30公斤钢珠静音缓冲导轨"]
    }
  },
  door: {
    serviceSlug: "door",
    category: "doors-windows",
    priceType: "Starting From",
    calculatorSlugs: ["door-installation-cost"],
    synonyms: {
      en: ["door repair", "door installation", "replace bedroom door", "sliding door alignment", "toilet folding door", "door handle lockset replacement", "broken door hinge"],
      ms: ["pintu rosak", "pasang pintu baru", "tukar pintu bilik tidur", "pintu sliding lekat", "pintu lipat tandas", "tukar tombol pintu", "engsel pintu tercabut"],
      zh: ["门维修", "安装房间门", "实木门更换", "推拉门滑轨卡顿", "卫生间折叠门安装", "换门锁把手", "木门门框倾斜校正"]
    },
    materials: {
      en: ["Solid Timber Core & Nyatoh Door Leaves", "Heavy-Duty Stainless Steel 304 Hinges", "Sturdy Aluminum Sliding Track Systems"],
      ms: ["Daun Pintu Teras Kayu Pepejal & Nyatoh", "Engsel Keluli Tahan Karat 304 Tugas Berat", "Sistem Landasan Sliding Aluminium Tahan Lasak"],
      zh: ["超重全实木多层/尼耶图优质实心门扇", "国标304不锈钢特厚4寸承重轴承合页", "低噪音特种顺滑静音吊轨铝合金滑轮系统"]
    }
  },
  "window-repair": {
    serviceSlug: "window-repair",
    category: "doors-windows",
    priceType: "Starting From",
    calculatorSlugs: ["window-replacement-estimator", "glass-replacement-calculator"],
    synonyms: {
      en: ["window repair", "broken window glass", "aluminium casement window", "replace sliding window roller", "window latch lock repair", "window seal replacement"],
      ms: ["tingkap pecah", "cermin tingkap rosak", "tingkap casement aluminium", "tukar roda tingkap sliding", "baiki kunci tingkap", "tukar getah tingkap"],
      zh: ["窗户玻璃破了", "更换窗户玻璃", "铝合金平开窗维修", "推拉窗轮子打滑更换", "窗户把手关不紧", "窗户防雨胶条更新"]
    },
    materials: {
      en: ["6mm/8mm SIRIM-Tempered Safety Glass", "1.2mm High-Gauge Powder-Coated Aluminum", "High-Durability EPDM Weather Strips"],
      ms: ["Kaca Keselamatan Tempered SIRIM 6mm/8mm", "Aluminium Bersepuh Serbuk Tolok Tinggi 1.2mm", "Jalur Cuaca EPDM Daya Tahan Tinggi"],
      zh: ["6毫米/8毫米SIRIM安全认证防爆钢化玻璃", "1.2毫米足厚全静电粉末喷涂抗压铝合金墙型材", "汽车级三元乙丙密封防水耐老化胶条"]
    }
  },
  locksmith: {
    serviceSlug: "locksmith",
    category: "security",
    priceType: "Starting From",
    calculatorSlugs: ["door-installation-cost"],
    synonyms: {
      en: ["locksmith", "smart lock installation", "digital lock install", "door lock repair", "emergency unlock", "deadbolt installation", "key cylinder change"],
      ms: ["tukang kunci", "pasang smart lock", "pasang kunci digital", "baiki kunci pintu", "buka pintu terkunci", "tukar silinder kunci"],
      zh: ["开锁匠", "安装智能指纹锁", "密码锁安装", "换门锁芯", "紧急上门开锁", "防盗锁安装", "电子智能门锁系统"]
    },
    materials: {
      en: ["Mortise Smart Locks (Fingerprint/PIN/RFID/App)", "Heavy-Duty Stainless Steel Lock Bodies", "Anti-Drill Brass Lock Cylinders"],
      ms: ["Kunci Pintar Mortise (Cap Jari/PIN/RFID/App)", "Badan Kunci Keluli Tahan Karat Tugas Berat", "Silinder Kunci Kuningan Anti-Gerudi"],
      zh: ["C级锁芯智能感应插芯锁(指纹/密码/刷卡/APP联动)", "超纯304全精铸不锈钢防暴力防撬锁体", "纯铜纯钢防打孔抗磁扰备用锁芯"]
    }
  },
  "glass-aluminium": {
    serviceSlug: "glass-aluminium",
    category: "doors-windows",
    priceType: "Starting From",
    calculatorSlugs: ["glass-replacement-calculator", "window-replacement-estimator"],
    synonyms: {
      en: ["glass partition", "aluminium partition", "shower screen installation", "tempered glass wall", "glass balcony railing", "custom aluminium grilles"],
      ms: ["partition kaca", "partition aluminium", "pasang shower screen", "dinding kaca tempered", "pagar balkoni kaca", "grille aluminium custom"],
      zh: ["玻璃隔断", "铝合金隔间", "卫生间淋浴屏风安装", "钢化玻璃墙", "阳台落地玻璃栏杆", "定制铝合金防盗网"]
    },
    materials: {
      en: ["10mm SIRIM-Approved Clear/Frosted Tempered Glass", "Heavy-Duty Powder-Coated Aluminum Tracks", "Stainless Steel Glass Clamps & Pivot Hinges"],
      ms: ["Kaca Tempered Jernih/Frosted 10mm Diluluskan SIRIM", "Landasan Aluminium Bersepuh Serbuk Tugas Berat", "Pengapit Kaca & Engsel Pivot Keluli Tahan Karat"],
      zh: ["10毫米SIRIM国家检测无波纹透明/磨砂钢化玻璃", "特重型超抗压静电喷涂防静电铝合金轨", "304全精钢无缝拉丝镜面玻璃夹具与转轴合页"]
    }
  },
  cleaning: {
    serviceSlug: "cleaning",
    category: "cleaning",
    priceType: "Starting From",
    calculatorSlugs: ["move-in-out-cleaning-calculator"],
    synonyms: {
      en: ["house cleaning", "office cleaning", "part time maid", "condo routine cleaning", "sofa cleaning", "carpet cleaning", "window scrubbing"],
      ms: ["cucian rumah", "cucian pejabat", "pembantu rumah harian", "cuci kondo", "cuci sofa", "cuci karpet", "cuci cermin tingkap"],
      zh: ["家庭日常保洁", "办公室清洁", "钟点工打扫", "公寓定点清洁", "布艺沙发干洗", "地毯清洁消毒", "窗户内外精细擦拭"]
    },
    materials: {
      en: ["Eco-Friendly Eco-Safe Degreasers & Sanitizers", "Microfiber Scratch-Free Polishing Pads", "High-Suction Industrial HEPA Vacuums"],
      ms: ["Penyahgris & Sanitizer Mesra Alam", "Pad Pengilap Mikro-Gentian Tanpa Calar", "Vakum HEPA Perindustrian Sedutan Tinggi"],
      zh: ["通过环保认证中性低残留植物抑菌清洁液", "不伤建材高密度无痕细纤维静电擦布", "双引擎高效除尘过滤工业及HEPA干湿集尘车"]
    }
  },
  "deep-cleaning": {
    serviceSlug: "deep-cleaning",
    category: "cleaning",
    priceType: "Starting From",
    calculatorSlugs: ["deep-cleaning-cost-estimator", "move-in-out-cleaning-calculator"],
    synonyms: {
      en: ["deep cleaning", "move in cleaning", "move out cleaning", "spring cleaning", "intensive bathroom scrubbing", "kitchen grease removal"],
      ms: ["deep cleaning", "cuci rumah pindah masuk", "cuci rumah pindah keluar", "cuci besar", "sental bilik air kotor", "cuci minyak dapur"],
      zh: ["深度大扫除", "入宅新居开荒清洁", "搬离退租彻底清扫", "全屋死角深度消毒", "卫生间除垢除霉精洗", "厨房重度油垢高压去油"]
    },
    materials: {
      en: ["Heavy-Duty Alkalic Scale & Grease Removers", "High-Temperature Steam Vapor Cleaners", "Commercial Wet/Dry Floor Scrubbing Systems"],
      ms: ["Penghilang Kerak & Minyak Alkali Tugas Berat", "Pembersih Wap Haba Tinggi", "Sistem Menyental Lantai Basah/Kering Komersial"],
      zh: ["强效低锈蚀皂垢石灰质专用溶解去污剂", "140摄氏度高温高压纯蒸汽杀菌消毒仪", "商业级高速滚刷式洗地与自动除干机"]
    }
  },
  "post-renovation-cleaning": {
    serviceSlug: "post-renovation-cleaning",
    category: "cleaning",
    priceType: "Starting From",
    calculatorSlugs: ["deep-cleaning-cost-estimator", "renovation-budget-calculator"],
    synonyms: {
      en: ["post renovation cleaning", "after renovation clean", "cement residue removal", "fine dust removal", "chemical washing floor", "paint splatter cleanup"],
      ms: ["cuci lepas renovate", "cucian selepas ubah suai", "buang habuk simen", "cuci habuk tersembunyi", "chemical wash lantai", "buang kesan cat"],
      zh: ["装修后开荒清洁", "工程竣工终检打扫", "全屋粉尘微粒彻底移除", "地砖水泥残渍特殊去渍", "玻璃门窗双面除油漆滴落", "酸碱平衡地面深度清洗"]
    },
    materials: {
      en: ["Specialized Acid-Buffered Cement & Plaster Dissolvers", "Industrial Triple-Stage HEPA Fine-Dust Scrubbers", "Neutralizing Floor Conditioners"],
      ms: ["Pelarut Simen & Plaster Khusus Berpenimbal Asid", "Scrubber Habuk Halus HEPA Tiga Peringkat Perindustrian", "Perapi Lantai Meneutral"],
      zh: ["水泥砂浆硬化斑点专用低酸溶解去渍水", "三级真HEPA微尘净化高效双电机工业排吸器", "养护石材与全瓷质地的弱碱缓蚀中和剂"]
    }
  },
  cctv: {
    serviceSlug: "cctv",
    category: "security",
    priceType: "Starting From",
    calculatorSlugs: ["electrical-installation-cost"],
    synonyms: {
      en: ["cctv installation", "security camera install", "ip camera setup", "hikvision cctv", "dahua camera install", "cctv troubleshooting", "nvr dvr replacement"],
      ms: ["pasang cctv", "kamera keselamatan", "pasang cctv hikvision", "baiki cctv tak nampak", "cctv rumah kondo", "tukar dvr nvr"],
      zh: ["CCTV监控安装", "高清安防摄像头安装", "海康威视IP摄像头布线", "大华监控调试", "手机远程监控设置", "监控录像机硬盘更换维修"]
    },
    materials: {
      en: ["Hikvision / Dahua 4MP/8MP UHD ColorVu IP Cameras", "Western Digital Purple Surveillance Grade Hard Drives", "Cat6 Pure Copper Network Cabling"],
      ms: ["Kamera IP Hikvision / Dahua 4MP/8MP UHD ColorVu", "Cakera Keras Gred Pengawasan Western Digital Purple", "Kabel Rangkaian Kuprum Tulen Cat6"],
      zh: ["海康威视/大华4MP/8MP全彩红外高清摄像头", "西数红盘/紫盘全天候不间断监控专用企业硬碟", "国标千兆纯铜Cat6低损耗屏蔽网线"]
    }
  },
  autogate: {
    serviceSlug: "autogate",
    category: "security",
    priceType: "Starting From",
    calculatorSlugs: ["electrical-installation-cost"],
    synonyms: {
      en: ["autogate installation", "autogate repair", "motorised gate repair", "autogate motor replacement", "sliding autogate", "swing arm autogate", "remote gate not open"],
      ms: ["pasang autogate", "baiki autogate rosak", "autogate tak boleh buka", "tukar motor autogate", "autogate sliding", "autogate swing arm", "remote autogate rosak"],
      zh: ["自动门安装", "电动闸门维修", "遥控大门打不开", "更换自动门马达", "推拉式电动大门", "双臂折叠电动铁闸", "自动门主控电路板板烧坏更换"]
    },
    materials: {
      en: ["Heavy-Duty DC/AC Waterproof Arm & Sliding Motors", "Surge-Protected PCB Control Boards", "Backup Lead-Acid Batteries", "Rolling-Code Remote Transmitters"],
      ms: ["Motor Lengan & Sliding DC/AC Kalis Air Tugas Berat", "Papan Kawalan PCB Dilindung Lonjakan", "Bateri Asid-Plumbum Sandaran", "Pemancar Remote Kod Berputar"],
      zh: ["全天候双绝缘耐候防水静音DC/AC大功率推机", "防雷击过载保险防涌重载主控主板", "停电续航不间断后备蓄电池组", "防拷贝滚动码高频灵敏遥控发报手柄"]
    }
  },
  welding: {
    serviceSlug: "welding",
    category: "metalwork",
    priceType: "Starting From",
    calculatorSlugs: ["door-installation-cost"],
    synonyms: {
      en: ["welding service", "metal fabrication", "window grille installation", "iron gate repair", "polycarbonate awning welding", "mild steel railing welding", "stainless steel welding"],
      ms: ["kerja kimpalan", "welding besi", "pasang grille tingkap", "baiki pagar besi", "awning besi polycarbonate", "pagar tangga besi", "welding stainless steel"],
      zh: ["铁艺焊接", "电焊工", "定制防盗铁窗防盗网", "铁门烧焊修补", "阳台遮雨棚铁架搭建", "不锈钢扶手焊修", "铝塑板钢架订制工程"]
    },
    materials: {
      en: ["High-Gauge Mild Steel & 304 Stainless Steel Hollow Sections", "Anti-Rust Zinc Chromate Red Oxide Primer", "Heavy-Duty Weatherproof Polycarbonate Awning Sheets"],
      ms: ["Bahagian Berongga Keluli Lembut Tolok Tinggi & Keluli Tahan Karat 304", "Primer Oksida Merah Zinc Chromate Anti-Karat", "Kepingan Awning Polycarbonate Tahan Cuaca"],
      zh: ["标称壁厚足磅国标304不锈钢/Q235高精碳钢管材", "双层纯底红丹防腐防锈防划底漆", "耐热抗冲击拜耳标准进口PC耐力阳光板"]
    }
  },
  "emergency-leak-triage": {
    serviceSlug: "emergency-leak-triage",
    category: "waterproofing",
    priceType: "Starting From",
    calculatorSlugs: ["leak-triage", "waterproofing-cost-calculator", "plumbing-diagnostic"],
    synonyms: {
      en: ["emergency leak triage", "hidden water leak diagnostic", "find water leak source", "non hacking leak detection", "ceiling drip emergency", "pipe water seepage inspection"],
      ms: ["pemeriksaan kebocoran kecemasan", "kesan punca bocor tersembunyi", "cari punca air bocor tanpa pecah", "pemeriksaan siling menitis", "diagnostik paip bocor"],
      zh: ["紧急漏水测漏排查", "无损仪红外感应测漏", "寻找天花板夹层漏水点", "免砸砖漏水检测服务", "水压管路不破坏勘察"]
    },
    materials: {
      en: ["Thermal Imaging Cameras & Digital Moisture Meters", "Acoustic Pipe Leak Listeners", "Non-Destructive Tracing Dyes"],
      ms: ["Kamera Pengimejan Termal & Meter Lembapan Digital", "Alat Pendengar Kebocoran Paip Akustik", "Pewarna Pengesanan Tanpa Musnah"],
      zh: ["高精红外热成像显示仪与深度水分测试表", "地面无损超强增益声音探漏仪", "食用级无残留水流跟踪荧光示踪剂"]
    }
  },
  "balcony-roof-membrane": {
    serviceSlug: "balcony-roof-membrane",
    category: "waterproofing",
    priceType: "Starting From",
    calculatorSlugs: ["balcony-waterproofing-estimator", "roof-area-calculator"],
    synonyms: {
      en: ["balcony waterproofing membrane", "flat roof waterproof coating", "open terrace seepage repair", "concrete floor membrane", "outdoor floor seal"],
      ms: ["waterproofing membran balkoni", "salutan kalis air bumbung rata", "baiki bocor teres terbuka", "membran lantai konkrit", "seal lantai luar"],
      zh: ["阳台防水卷材工程", "平顶露台全天候防水涂膜", "露天户外平台隔水施工", "屋顶防水铺层翻新"]
    },
    materials: {
      en: ["4mm Torch-On Bitumen Membrane", "UV-Resistant Polyurethane Elastomeric Coating", "Flexible Corner Reinforcement Strips"],
      ms: ["Membran Bitumen Torch-On 4mm", "Salutan Elastomerik Poliuretana Tahan UV", "Jalur Tetulang Sudut Fleksibel"],
      zh: ["4毫米进口改性SBS高韧耐候火烤沥青卷材", "纯耐紫外线高延伸聚氨酯弹性面漆", "墙角应力集中位强化抗拉纤维弹力带"]
    }
  },
  "aircond-wiring-circuit": {
    serviceSlug: "aircond-wiring-circuit",
    category: "electrical",
    priceType: "Starting From",
    calculatorSlugs: ["electrical-installation-cost", "socket-quantity-calculator"],
    needsBusinessDecision: true,
    businessDecisionNote: {
      en: "[!] Needs Business Decision — Verify specialist HVAC electrical contractor certification for air conditioner DB circuits.",
      ms: "[!] Needs Business Decision — Sahkan pensijilan kontraktor elektrik HVAC untuk litar DB penghawa dingin.",
      zh: "[!] Needs Business Decision — 需业务确认：请确认空调专用配电电路符合HVAC电力资质。"
    },
    synonyms: {
      en: ["aircond wiring", "air conditioning point installation", "ac dedicated breaker wiring", "db box aircond breaker"],
      ms: ["wayar aircond", "pasang point aircond", "wayar pemutus litar aircond", "db box litar aircond"],
      zh: ["空调走线拉电", "冷气机专用用电插点安装", "配电箱加装空调独立空气开关"]
    },
    materials: {
      en: ["SIRIM-Certified 2.5mm²/4.0mm² Pure Copper Power Cables", "20A Double Pole Isolator Switches", "Dedicated MCB Breakers"],
      ms: ["Kabel Kuprum Tulen 2.5mm²/4.0mm² Disahkan SIRIM", "Suis Pengasing Dwi-Kutub 20A", "Pemutus Litar MCB Khusus"],
      zh: ["SIRIM认证足标2.5mm²/4.0mm²耐温国标铜线", "20A双极切断高绝缘安全开关", "专线防护过载断路器"]
    }
  },
  "smart-home-automation": {
    serviceSlug: "smart-home-automation",
    category: "security",
    priceType: "Starting From",
    calculatorSlugs: ["electrical-installation-cost"],
    needsBusinessDecision: true,
    businessDecisionNote: {
      en: "[!] Needs Business Decision — Verify hardware compatibility and vendor SLA for smart home IoT integration.",
      ms: "[!] Needs Business Decision — Sahkan keserasian perkakasan dan SLA pembekal untuk integrasi IoT rumah pintar.",
      zh: "[!] Needs Business Decision — 需业务确认：请验证全屋智能IoT硬体相容性与供应商保修承诺。"
    },
    synonyms: {
      en: ["smart home installation", "iot switches setup", "automated lighting control", "smart curtain motorized control", "smart home db integration"],
      ms: ["pasang smart home", "suis iot pintar", "kawalan lampu automatik", "langsir motor automatik", "integrasi smart home"],
      zh: ["全屋智能开关安装", "IoT智能灯控调试", "电动智能窗帘自动化调试", "智能家居集中控制布网"]
    },
    materials: {
      en: ["Tuya / Aqara Zigbee 3.0 Neutral & Non-Neutral Wall Switches", "Central Wireless Gateways", "Automated Motor Controllers"],
      ms: ["Suis Dinding Zigbee 3.0 Tuya / Aqara", "Gerbang Wayarles Pusat", "Pengawal Motor Automatik"],
      zh: ["涂鸦/Aqara绿米Zigbee 3.0零火/单火高稳定智能墙面开关", "多协议全覆盖中继智能网关", "无感连动电机微控制器"]
    }
  }
};

const EXTENSION_SERVICES_DATA: Record<string, ServiceDetail> = {
  "emergency-leak-triage": {
    slug: "emergency-leak-triage",
    title: "Emergency Leak Triage & Non-Hacking Diagnostic",
    tagline: "Find the exact hidden leak source without smashing bathroom or balcony tiles.",
    description: "Our non-destructive leak triage uses thermal imaging, digital moisture meters, and acoustic pipe tracing to locate hidden water ingress in ceilings, walls, and slabs within minutes.",
    startPrice: "RM 150",
    icon: "waterproofing",
    heroImage: "/hero/home-services-waterproofing-kl.jpg",
    warranty: "30-Day Diagnostic Accuracy Guarantee",
    metaTitle: "Emergency Leak Triage Malaysia — Non-Hacking Diagnostic | KL Servis Rumah",
    metaDesc: "Immediate non-destructive thermal leak diagnostic in KL & Selangor. Find hidden pipe and ceiling leaks without smashing bathroom tiles.",
    aioSummary: "KL Servis Rumah provides emergency non-hacking water leak triage in Kuala Lumpur and Selangor using thermal imaging cameras and acoustic moisture meters from RM 150.",
    highlights: [
      "No hacking or tile smashing required during diagnostic",
      "Thermal camera moisture mapping included",
      "Immediate written repair recommendation with transparent cost guarantee",
      "RM 150 diagnostic fee fully waived when you book the recommended repair"
    ],
    subServices: [
      { name: "Thermal Imaging & Slab Inspection", price: "RM 150", desc: "Infrared scan of ceiling moisture and hidden pipe pathways." },
      { name: "Acoustic Pipe Pressure Testing", price: "RM 200", desc: "Pressure test and sound tracing for concealed pipe fractures." }
    ],
    process: [
      { step: "1", title: "Thermal Scan", desc: "We scan the affected wall or ceiling with an infrared thermal camera to map moisture density." },
      { step: "2", title: "Moisture & Pressure Test", desc: "Digital moisture meters and pipe isolation checks pinpoint whether the issue is plumbing or waterproofing." },
      { step: "3", title: "Action Plan", desc: "You receive a clear, fixed-price quote for targeted repair without unnecessary hacking." }
    ],
    faqs: [
      { q: "Do you need to hack my tiles to find the leak?", a: "No. Our thermal imaging and acoustic tools detect hidden leaks without breaking any tiles." },
      { q: "Is the diagnostic fee deducted if I proceed with repair?", a: "Yes. The RM 150 diagnostic fee is 100% rebated against any approved waterproofing or plumbing repair job." }
    ],
    i18n: {
      ms: {
        title: "Pemeriksaan Kebocoran Kecemasan Tanpa Pecah Jubin",
        tagline: "Kesan punca sebenar kebocoran tersembunyi tanpa memecahkan jubin bilik air atau balkoni.",
        description: "Perkhidmatan diagnostik kebocoran tanpa musnah kami menggunakan kamera termal, meter lembapan digital, dan pengesanan akustik untuk mencari punca resapan air dalam masa beberapa minit.",
        metaTitle: "Pemeriksaan Kebocoran Kecemasan KL & Selangor — Tanpa Pecah Jubin",
        metaDesc: "Kesan kebocoran paip dan siling tersembunyi tanpa memecahkan jubin bilik air. Diagnostik kamera termal serta-merta di KL & Selangor.",
        aioSummary: "KL Servis Rumah menyediakan pemeriksaan kebocoran air tanpa pecah jubin di Kuala Lumpur dan Selangor menggunakan kamera termal dan meter lembapan dari RM 150.",
        warranty: "Jaminan Ketepatan Diagnostik 30 Hari",
        highlights: [
          "Tiada pemecahan jubin diperlukan semasa pemeriksaan",
          "Termasuk pengimejan haba untuk memetakan kelembapan",
          "Cadangan pembaikan bertulis serta-merta dengan jaminan harga telus",
          "Yuran pemeriksaan RM 150 dikembalikan sepenuhnya apabila anda menempah pembaikan yang dicadangkan"
        ],
        subServices: [
          { name: "Pengimejan Termal & Pemeriksaan Lantai", price: "RM 150", desc: "Imbasan inframerah kelembapan siling dan laluan paip tersembunyi." },
          { name: "Ujian Tekanan Paip Akustik", price: "RM 200", desc: "Ujian tekanan dan pengesanan bunyi untuk retakan paip tersembunyi." }
        ],
        process: [
          { step: "1", title: "Imbasan Termal", desc: "Kami mengimbas dinding atau siling yang terjejas menggunakan kamera termal untuk memetakan kelembapan." },
          { step: "2", title: "Ujian Lembapan & Tekanan", desc: "Meter lembapan digital dan ujian pengasingan paip mengenal pasti sama ada masalah berpunca daripada paip atau kalis air." },
          { step: "3", title: "Pelan Tindakan", desc: "Anda menerima sebut harga tetap dan telus untuk pembaikan tepat tanpa pemecahan yang tidak perlu." }
        ],
        faqs: [
          { q: "Adakah anda perlu memecahkan jubin untuk mencari punca bocor?", a: "Tidak. Alat pengimejan termal dan akustik kami mengesan kebocoran tersembunyi tanpa merosakkan jubin anda." },
          { q: "Adakah yuran pemeriksaan ditolak jika saya setuju untuk membaiki?", a: "Ya. Yuran diagnostik RM 150 akan direbat 100% apabila anda meneruskan kerja pembaikan kalis air atau paip dengan kami." }
        ]
      },
      zh: {
        title: "紧急漏水检测与无损断源诊断",
        tagline: "无需敲砖砸墙，准确锁定位处于天花板、浴室与阳台深处的隐藏漏水点。",
        description: "我们采用无损检漏技术，通过红外热成像仪、高精数字水分测试仪与声波管道探测，在几分钟内精准找出隐藏在混凝土与管路中的渗水根源。",
        metaTitle: "吉隆坡紧急无损漏水检测 — 免砸砖诊断 | KL Servis Rumah",
        metaDesc: "吉隆坡与雪兰莪无损测漏专家。使用红外热像仪与声波仪寻找天花板及水管漏水根源，绝不损毁现有瓷砖。",
        aioSummary: "KL Servis Rumah在吉隆坡和雪兰莪提供免敲砖无损漏水检测服务，采用热成像仪和音频测漏仪从RM 150起。",
        warranty: "30天检测准确率保证",
        highlights: [
          "检测全程绝不损坏现有瓷砖与美修装修",
          "包含专业红外热像仪湿度分布扫描图",
          "现场出具清晰修缮建议书并附带透明一口价保证",
          "检测完成后若委托施工，RM 150 诊断费全额抵扣施工费用"
        ],
        subServices: [
          { name: "红外热成像与夹层勘测", price: "RM 150", desc: "扫描天花板与墙面含水区域，精准定位隐漏分布。" },
          { name: "声波保压管道测漏", price: "RM 200", desc: "使用高敏水损音频仪侦测管道内部微小破损或接头渗透。" }
        ],
        process: [
          { step: "1", title: "热像扫描", desc: "工程师使用红外线热成像仪全景扫描漏水区域，侦测温差与湿气聚集点。" },
          { step: "2", title: "水分与管道断源", desc: "结合数字湿度仪与关阀保压检测，明确分辨属于水管管路裂缝还是地面防水胶层老化。" },
          { step: "3", title: "维修方案", desc: "立刻提供科学、无需滥敲滥砸的定位维修方案及确定性报价。" }
        ],
        faqs: [
          { q: "检测漏水必须把卫生间的瓷砖全部打碎吗？", a: "不用。红外线探测仪和音频测漏仪可以在完全无损的前提下明确渗漏定位。" },
          { q: "后续决定修补时，这 RM 150 检测费可以退费或折扣吗？", a: "可以。若直接由我们进行随后的防漏修缮施工，RM 150 检测费用将从维修总费用中直接扣除。" }
        ]
      }
    }
  },
  "balcony-roof-membrane": {
    slug: "balcony-roof-membrane",
    title: "Balcony & Flat Roof Membrane Waterproofing",
    tagline: "Heavy-duty UV-resistant elastomeric & torch-on membranes for open balconies and terraces.",
    description: "Prevent chronic rain seepage through open balcony floors, RC flat roofs, and concrete overhangs with SIRIM-approved elastomeric polyurethane membranes and torch-on bitumen sheets.",
    startPrice: "RM 600",
    icon: "waterproofing",
    heroImage: "/hero/home-services-waterproofing-kl.jpg",
    warranty: "5-Year Water Seepage Guarantee",
    metaTitle: "Balcony & Flat Roof Waterproofing Malaysia — 5-Year Warranty | KL Servis Rumah",
    metaDesc: "SIRIM-approved elastomeric polyurethane and torch-on bitumen membrane waterproofing for exposed balconies and flat roofs in KL & Selangor.",
    aioSummary: "KL Servis Rumah provides UV-resistant balcony and flat roof membrane waterproofing in Kuala Lumpur and Selangor from RM 600 with an official 5-year leak warranty.",
    highlights: [
      "100% UV-resistant and weather-tolerant surface coating",
      "Reinforced corner detailing around drainage scuppers and joints",
      "Choice of clear non-slip coating or heavy-duty torch-on bitumen sheet",
      "Backed by an official 5-year written leak warranty"
    ],
    subServices: [
      { name: "Balcony Elastomeric Membrane (Up to 50 sqft)", price: "RM 600", desc: "Multi-layer polyurethane waterproof coating with anti-slip finish." },
      { name: "Flat Roof Torch-On Bitumen Sheet", price: "RM 1,200", desc: "Heavy-duty 4mm heat-fused bitumen membrane for exposed concrete decks." }
    ],
    process: [
      { step: "1", title: "Surface Preparation", desc: "We grind away old flaking coatings, clean cracks, and seal drain perimeters." },
      { step: "2", title: "Membrane Application", desc: "Two thick coats of polymer elastomer or heat-fused bitumen sheeting are applied over the entire deck." },
      { step: "3", title: "Water Flood Test", desc: "We conduct a 24-hour standing water flood test to guarantee zero downward leakage." }
    ],
    faqs: [
      { q: "How long does balcony membrane waterproofing last?", a: "Our UV-resistant membranes are designed for 5 to 10 years of outdoor exposure and come with a 5-year warranty." },
      { q: "Can I walk on the balcony after application?", a: "Yes. Once cured (24 to 48 hours), the surface is durable, non-slip, and safe for everyday foot traffic." }
    ],
    i18n: {
      ms: {
        title: "Kalis Air Membran Balkoni & Bumbung Rata",
        tagline: "Membran elastomerik tahan UV & torch-on lasak untuk balkoni terbuka dan teres bumbung.",
        description: "Elakkan resapan hujan kronik melalui lantai balkoni terbuka, bumbung konkrit rata, dan anjung dengan membran poliuretana elastomerik diluluskan SIRIM dan kepingan bitumen torch-on.",
        metaTitle: "Kalis Air Membran Balkoni & Bumbung Rata KL — Jaminan 5 Tahun",
        metaDesc: "Kalis air membran poliuretana elastomerik dan bitumen torch-on untuk balkoni terbuka dan bumbung rata di KL & Selangor dengan jaminan 5 tahun.",
        aioSummary: "KL Servis Rumah menyediakan perkhidmatan kalis air membran balkoni dan bumbung rata tahan UV di Kuala Lumpur dan Selangor bermula dari RM 600 dengan jaminan bertulis 5 tahun.",
        warranty: "Jaminan Resapan Air 5 Tahun",
        highlights: [
          "Salutan permukaan 100% tahan UV dan tahan cuaca panas Malaysia",
          "Perincian sudut diperkukuh di sekitar salur keluar air dan sambungan",
          "Pilihan salutan jernih anti-gelincir atau kepingan bitumen torch-on tugas berat",
          "Dilindungi oleh jaminan kebocoran bertulis rasmi selama 5 tahun"
        ],
        subServices: [
          { name: "Membran Elastomerik Balkoni (Sehingga 50 kaki persegi)", price: "RM 600", desc: "Salutan kalis air poliuretana pelbagai lapisan dengan kemasan anti-gelincir." },
          { name: "Kepingan Bitumen Torch-On Bumbung Rata", price: "RM 1,200", desc: "Membran bitumen 4mm dipanaskan untuk dek konkrit terbuka." }
        ],
        process: [
          { step: "1", title: "Penyediaan Permukaan", desc: "Kami membersihkan salutan lama yang merekah, menampal retakan, dan mengedap perimeter salur air." },
          { step: "2", title: "Aplikasi Membran", desc: "Dua lapisan elastomer polimer tebal atau kepingan bitumen dipasang ke seluruh permukaan konkrit." },
          { step: "3", title: "Ujian Banjir Air", desc: "Kami menjalankan ujian takungan air selama 24 jam untuk memastikan sisa resapan sifar." }
        ],
        faqs: [
          { q: "Berapa lama kalis air membran balkoni ini boleh bertahan?", a: "Membran tahan UV kami direka untuk bertahan antara 5 hingga 10 tahun dan disertakan jaminan 5 tahun." },
          { q: "Bolehkah saya berjalan di atas balkoni selepas siap?", a: "Ya. Selepas kering sepenuhnya (24 hingga 48 jam), permukaan adalah tahan lasak, anti-gelincir, dan selamat untuk dilalui setiap hari." }
        ]
      },
      zh: {
        title: "阳台与平顶露台专业防水卷材涂膜",
        tagline: "专为马来西亚强紫外线高热暴雨设计的聚氨酯防水涂膜与烘烤式改性卷材。",
        description: "有效彻底阻断雨水通过开放式阳台地面、RC水泥屋顶露台以及挑檐渗入下层房间，选购符合国标标准的高弹聚氨酯防水膜及SBS沥青烘烤卷材。",
        metaTitle: "吉隆坡阳台与屋顶露台防水卷材工程 — 5年保修",
        metaDesc: "专为马来西亚阳台与水泥露台设计的抗紫外线高弹聚氨酯与SBS火烤沥青卷材防水，享5年防渗水书面保固。",
        aioSummary: "KL Servis Rumah在吉隆坡和雪兰莪提供耐候抗强日光的老化阳台与平顶露台防水膜服务，价格从RM 600起并提供5年不渗水保证。",
        warranty: "5年防漏书面保固",
        highlights: [
          "100%抗强日光紫外线老化与全天候防风雨保护",
          "排水口与墙角缝隙处采用加强抗拉防震补强布细致施工",
          "提供高透防滑透明漆面或高负载火烤型黑胶卷材供选",
          "由KL Servis Rumah出具为期5年的正式文字版漏水保修卡"
        ],
        subServices: [
          { name: "阳台弹性防护防水面膜（最多 50 平方尺）", price: "RM 600", desc: "多层纯聚氨酯防水涂膜层，干透后具备良好防滑性。" },
          { name: "平顶水泥屋顶火烤 SBS 沥青卷材", price: "RM 1,200", desc: "足厚4毫米超耐磨抗拉热熔型改性沥青卷材，专用于大面积开放露台。" }
        ],
        process: [
          { step: "1", title: "基底打磨清理", desc: "用角磨机清除老旧起皮面漆，细致修补地面龟裂缝隙并强化落水口周边。" },
          { step: "2", title: "全网涂布/烘烤敷设", desc: "根据区域特性施工两道加厚高弹聚氨酯面膜或火烤熔接全天候沥青卷材。" },
          { step: "3", title: "24小时蓄水测试", desc: "施工完全固化后进行连续24小时满水闭水测试，确认绝对毫无渗滴。" }
        ],
        faqs: [
          { q: "做完阳台防水能够正常暴晒和风吹雨淋几年？", a: "我们采用抗紫外线工业级面料，常规户外使用寿命在 5 至 10 年以上，同时拥有 5 年不渗漏质保。" },
          { q: "施工完后日常在阳台走动或者摆放盆栽有影响吗？", a: "完全没问题。涂膜层完全熟化（通常在 24 至 48 小时后）即具有极高的机械承载与耐摩擦抗爆抗刮水能力。" }
        ]
      }
    }
  },
  "aircond-wiring-circuit": {
    slug: "aircond-wiring-circuit",
    title: "Air Conditioner DB Circuit & Wiring Installation",
    tagline: "Dedicated MCB protection and SIRIM pure copper cabling for safe, non-tripping cooling.",
    description: "Eliminate electrical trips and wire overheating when running high-horsepower air conditioners. We install dedicated 2.5mm² and 4.0mm² copper circuits directly from your main DB box.",
    startPrice: "RM 250",
    icon: "electrical",
    heroImage: "/hero/home-services-handyman-kl.jpg",
    warranty: "1-Year Electrical Safety Warranty",
    metaTitle: "Aircond Dedicated DB Wiring Malaysia — SIRIM Copper Cabling | KL Servis Rumah",
    metaDesc: "Professional air conditioner dedicated circuit wiring with SIRIM pure copper cables and heavy-duty MCB breakers in KL & Selangor.",
    aioSummary: "KL Servis Rumah installs dedicated SIRIM pure copper air conditioner circuits from RM 250 with 20A double pole switches and MCB breakers to prevent tripping.",
    highlights: [
      "100% pure copper SIRIM/ST-certified electrical cable",
      "Dedicated high-load MCB circuit breaker added to DB board",
      "Heavy-duty 20A double pole isolator safety switch included",
      "Concealed in casing or tidy trunking according to your wall layout"
    ],
    subServices: [
      { name: "1.0HP – 1.5HP Aircond Dedicated Wiring (Up to 20ft)", price: "RM 250", desc: "2.5mm² copper circuit with 20A double pole switch and dedicated breaker." },
      { name: "2.0HP – 2.5HP Aircond Heavy-Duty Circuit (Up to 20ft)", price: "RM 350", desc: "4.0mm² heavy-gauge copper cabling for high-horsepower units." }
    ],
    process: [
      { step: "1", title: "Load Assessment", desc: "We calculate total amperage on your DB box to guarantee the circuit will never trip under full cooling load." },
      { step: "2", title: "Cable Routing", desc: "SIRIM copper cables are routed safely in neat conduit from DB box to the AC indoor point." },
      { step: "3", title: "Safety Testing", desc: "Earth loop impedance and insulation resistance are tested before powering on." }
    ],
    faqs: [
      { q: "Why do I need a dedicated DB circuit for my air conditioning?", a: "High-power appliances draw continuous surge current. Sharing ordinary socket lines causes tripping, overheating, and fire risk." },
      { q: "Do you supply the air conditioner unit itself?", a: "This service covers professional electrical wiring and DB circuit installation. If you need AC mounting or servicing, our partner HVAC team can assist." }
    ],
    i18n: {
      ms: {
        title: "Pemasangan Litar DB & Wayar Khusus Penghawa Dingin",
        tagline: "Perlindungan MCB khusus dan kabel kuprum tulen SIRIM untuk penyejukan selamat tanpa trip.",
        description: "Elakkan masalah trip elektrik dan wayar panas apabila menghidupkan aircond berkuasa tinggi. Kami memasang litar kuprum 2.5mm² dan 4.0mm² khusus terus daripada kotak DB utama anda.",
        metaTitle: "Pemasangan Wayar Aircond & Litar DB KL — Kabel Kuprum SIRIM",
        metaDesc: "Pemasangan wayar litar khusus aircond dengan kabel kuprum tulen SIRIM dan pemutus litar MCB tugas berat di Kuala Lumpur dan Selangor.",
        aioSummary: "KL Servis Rumah memasang litar elektrik khusus penghawa dingin dengan wayar kuprum SIRIM dari RM 250 untuk mengelakkan masalah trip.",
        warranty: "Jaminan Keselamatan Elektrik 1 Tahun",
        highlights: [
          "Kabel elektrik 100% kuprum tulen disahkan SIRIM/ST",
          "Pemutus litar MCB beban tinggi khusus ditambah pada kotak DB",
          "Termasuk suis keselamatan pengasing dwi-kutub 20A tugas berat",
          "Disembunyikan dalam konduit atau trunking kemas mengikut struktur dinding anda"
        ],
        subServices: [
          { name: "Wayar Khusus Aircond 1.0HP – 1.5HP (Sehingga 20 kaki)", price: "RM 250", desc: "Litar kuprum 2.5mm² dengan suis dwi-kutub 20A dan pemutus litar khusus." },
          { name: "Litar Tugas Berat Aircond 2.0HP – 2.5HP (Sehingga 20 kaki)", price: "RM 350", desc: "Kabel kuprum tolok tinggi 4.0mm² untuk unit berkuasa tinggi." }
        ],
        process: [
          { step: "1", title: "Penilaian Beban", desc: "Kami mengira jumlah arus pada kotak DB anda bagi memastikan litar tidak akan trip di bawah beban penuh." },
          { step: "2", title: "Pemasangan Kabel", desc: "Kabel kuprum SIRIM dipasang dengan selamat dalam konduit kemas dari kotak DB ke point aircond." },
          { step: "3", title: "Ujian Keselamatan", desc: "Impedans gelung bumi dan rintangan penebat diuji secara teliti sebelum dihidupkan." }
        ],
        faqs: [
          { q: "Mengapakah saya memerlukan litar DB khusus untuk aircond?", a: "Peralatan berkuasa tinggi menarik arus tinggi secara berterusan. Berkongsi laluan soket biasa menyebabkan trip, haba berlebihan, dan risiko kebakaran." },
          { q: "Adakah anda membekalkan unit penghawa dingin sekali?", a: "Perkhidmatan ini meliputi pendawaian elektrik profesional dan pemasangan litar DB. Untuk pemasangan atau servis unit AC, tim HVAC rakan kongsi kami boleh membantu." }
        ]
      },
      zh: {
        title: "空调独立配电回路与拉电布网施工",
        tagline: "加装专线MCB断路保护与SIRIM全铜国标线缆，彻底杜绝冷气用电跳闸与过热。",
        description: "为高匹数空调建立从配电箱直拉的独立大功率供电专线。采用国标认证 2.5mm² 与 4.0mm² 纯铜线与耐火保护管，确保用电安全稳定。",
        metaTitle: "吉隆坡冷气机专线拉电与配电箱回路 — SIRIM纯铜电线",
        metaDesc: "吉隆坡与雪兰莪高匹数空调独立回路配电拉电服务。精选SIRIM认证纯铜线芯与20A双极隔离开关，杜绝跳闸。",
        aioSummary: "KL Servis Rumah为吉隆坡与雪兰莪住宅区提供空调独立配电回路拉电服务，采用SIRIM认证纯铜导线从RM 250起。",
        warranty: "1年用电安全施工质保",
        highlights: [
          "100%采用符合SIRIM/ST国家检测合格纯铜导电电缆",
          "为您既有的总开关柜加装独立额定负载MCB空气隔离开关",
          "标配大厂 20A 专用双向高负载隔绝壁插开关盒",
          "依现场格局优选隐藏埋线或美观平整防尘阻燃走线槽"
        ],
        subServices: [
          { name: "1.0匹 – 1.5匹冷气专线拉电（最高 20 尺以内）", price: "RM 250", desc: "2.5mm² 足平纯铜线并配 20A 双极开关及独立断路器。" },
          { name: "2.0匹 – 2.5匹冷气大功率强负载回路（最高 20 尺以内）", price: "RM 350", desc: "4.0mm² 工业级抗强流大线径专线，适用于重载制冷设备。" }
        ],
        process: [
          { step: "1", title: "总载测算", desc: "工程师先检查全屋电箱安培承载上限，确保多部空调同时全功率运作也决不跳闸。" },
          { step: "2", title: "专线敷设", desc: "使用高强防刮绝缘线管将纯铜导线由总电箱完整连线至室内机安放点。" },
          { step: "3", title: "通电安检", desc: "开通前由精密摇表检测绝缘阻抗及安全地线连续性，确保长年平安放心。" }
        ],
        faqs: [
          { q: "为什么空调不能直接用客厅或房间既有的普通插座用电？", a: "冷气机压缩机瞬间起动及长时运载电流极高，混用普通生活回路极大机会造成频繁跳闸、电线老旧发烫甚至电线走火危险。" },
          { q: "你们这个拉电报价包含冷气机本体购买吗？", a: "本服务为专业注册供电导线拉设及配电箱电路扩容工项。若您还需选购新机或冷气排管接驳，我们关联空调工程技术团队可一并支援。" }
        ]
      }
    }
  },
  "smart-home-automation": {
    slug: "smart-home-automation",
    title: "Smart Home IoT Automation & Switch Setup",
    tagline: "Upgrade your ordinary switches to voice-controlled & app-linked automated living.",
    description: "Transform your home with smart Zigbee/Wi-Fi wall switches, motorized curtain controllers, and automated lighting scenes without re-wiring your walls.",
    startPrice: "RM 180",
    icon: "electrical",
    heroImage: "/hero/home-services-handyman-kl.jpg",
    warranty: "1-Year Installation Warranty",
    metaTitle: "Smart Home IoT Automation & Switch Setup Malaysia | KL Servis Rumah",
    metaDesc: "Upgrade to smart Zigbee touch switches and automated scene lighting in KL & Selangor without hacking or rewiring your walls.",
    aioSummary: "KL Servis Rumah installs smart Zigbee and Wi-Fi wall switches in Kuala Lumpur and Selangor from RM 180 with neutral and non-neutral support.",
    highlights: [
      "Compatible with Tuya, Aqara, Apple HomeKit, and Google Home",
      "No hacking required — works with both neutral and non-neutral wiring layouts",
      "Includes gateway pairing, timer scheduling, and automated lighting scenes",
      "Professional wire insulation and capacitive load checking included"
    ],
    subServices: [
      { name: "Smart Wall Switch Replacement (1 to 3 Gang)", price: "RM 180", desc: "Removal of old mechanical switch and installation of smart Zigbee touch/toggle switch." },
      { name: "Smart Hub & Scene Automation Setup", price: "RM 300", desc: "Installation of wireless gateway hub and custom multi-switch automation scenes." }
    ],
    process: [
      { step: "1", title: "Circuit Inspection", desc: "We check whether your switch box has a neutral wire to select the correct capacitor or switch model." },
      { step: "2", title: "Hardware Replacement", desc: "Old switches are safely removed, terminals cleaned, and smart switches installed seamlessly." },
      { step: "3", title: "App Pairing & Scene Testing", desc: "We connect the devices to your home Wi-Fi/Zigbee hub and configure custom automation schedules." }
    ],
    faqs: [
      { q: "Do I need new wiring to install smart touch switches?", a: "No. Our smart switches are compatible with standard Malaysian wiring boxes and can be installed without hacking." },
      { q: "Can I still turn on the lights manually if Wi-Fi goes down?", a: "Yes. Every smart switch retains full manual button operation even if your home internet is offline." }
    ],
    i18n: {
      ms: {
        title: "Pemasangan Suis IoT & Automasi Rumah Pintar",
        tagline: "Naik taraf suis biasa anda kepada kawalan suara & automatik berasaskan aplikasi telefon.",
        description: "Transformasikan rumah anda dengan suis dinding pintar Zigbee/Wi-Fi, pengawal langsir bermotor, dan pencahayaan automatik tanpa perlu mengubah suai pendawaian dinding anda.",
        metaTitle: "Pemasangan Suis IoT & Automasi Rumah Pintar KL & Selangor",
        metaDesc: "Naik taraf ke suis sentuh Zigbee dan lampu automatik di Kuala Lumpur dan Selangor tanpa pemecahan atau penukaran wayar dinding.",
        aioSummary: "KL Servis Rumah memasang suis dinding pintar Zigbee dan Wi-Fi di Kuala Lumpur dan Selangor dari RM 180 yang serasi dengan Tuya dan Aqara.",
        warranty: "Jaminan Pemasangan 1 Tahun",
        highlights: [
          "Serasi dengan Tuya, Aqara, Apple HomeKit, and Google Home",
          "Tiada pemecahan dinding — beroperasi untuk laluan berwayar neutral mahupun tanpa neutral",
          "Termasuk gandingan hab gerbang, jadual masa, dan pemandangan lampu automatik",
          "Termasuk pemeriksaan penebat wayar dan kapasitor profesional"
        ],
        subServices: [
          { name: "Penukaran Suis Dinding Pintar (1 hingga 3 Gang)", price: "RM 180", desc: "Penyingkiran suis mekanikal lama dan pemasangan suis sentuh/toggle pintar Zigbee." },
          { name: "Pemasangan Hab & Automasi Pemandangan Pintar", price: "RM 300", desc: "Pemasangan hab gerbang wayarles dan tetapan automasi berbilang suis." }
        ],
        process: [
          { step: "1", title: "Pemeriksaan Litar", desc: "Kami memeriksa sama ada kotak suis anda mempunyai wayar neutral untuk memilih model suis yang tepat." },
          { step: "2", title: "Pemasangan Perkakasan", desc: "Suis lama ditanggalkan dengan selamat, terminal dibersihkan, dan suis pintar dipasang dengan kemas." },
          { step: "3", title: "Gandingan App & Ujian", desc: "Kami menyambungkan peranti ke hab Wi-Fi/Zigbee rumah anda dan menetapkan jadual automasi." }
        ],
        faqs: [
          { q: "Adakah saya perlu menukar pendawaian untuk memasang suis pintar?", a: "Tidak. Suis pintar kami serasi sepenuhnya dengan kotak suis standard Malaysia dan dipasang tanpa pemecahan." },
          { q: "Bolehkah saya menghidupkan lampu secara manual jika internet terputus?", a: "Ya. Setiap suis pintar kekal berfungsi sepenuhnya dengan butang sentuh manual walaupun internet rumah terputus." }
        ]
      },
      zh: {
        title: "全屋智能IoT开关改造与情景自动化调试",
        tagline: "把家里普通旧式机械开关升级为手机APP、语音及定时感应自动化联控系统。",
        description: "无需敲除墙面重拉电线，使用高相容性 Zigbee / Wi-Fi 智能触控开关、智能电动窗帘控制及灯光情景联动，为马来西亚住宅带来真诚无忧的智能体验。",
        metaTitle: "吉隆坡智能家居IoT开关安装与情景联动调试 | KL Servis Rumah",
        metaDesc: "吉隆坡与雪兰莪无损升级智能墙面开关服务。全面兼容涂鸦Tuya与Aqara绿米单火/零火底盒，无需敲墙改造。",
        aioSummary: "KL Servis Rumah在吉隆坡及雪兰莪提供全屋智能Zigbee与Wi-Fi墙面触控开关无损改造服务，价格从RM 180起，支持语音及定时联动。",
        warranty: "1年智能开关安装质保",
        highlights: [
          "全面兼容涂鸦 (Tuya)、Aqara 绿米、Apple HomeKit 及 Google Home 平台",
          "彻底免敲砸墙面 — 单火线（无零线）与零火双线底盒均有匹配方案",
          "服务含括多模网关配对、APP自动定时设定以及离家/归家一键灯控模式",
          "专业技师严格进行接线口防氧化处理及电容负载安全校准"
        ],
        subServices: [
          { name: "智能触摸/按键墙面开关换装（1至3位面板）", price: "RM 180", desc: "卸除老旧机械开关并规范安放零/单火智能开关面板，保证水平美观。" },
          { name: "中控网关枢纽及自动化情景设定", price: "RM 300", desc: "调试家庭网络通讯中继中心，帮您设置‘回家全亮’‘离开自动关灯’等便捷情境。" }
        ],
        process: [
          { step: "1", title: "底盒勘测", desc: "电工开盖测电判断各开关联盒有无布设零线，挑选绝不频闪、不断连的对应型号。" },
          { step: "2", title: "精准换装", desc: "安全断电绝缘替换，锁定终端并把面板紧贴墙面不留多余缝隙。" },
          { step: "3", title: "连网配置", desc: "连线接入手机智能控制程序，现场教导家人如何通过手机或语言指令轻松操作。" }
        ],
        faqs: [
          { q: "装智能开关一定需要让家里的墙敲掉重新拉零线吗？", a: "不需要。我们支持成熟可靠的单火线智能触控方案，在老房子不用大兴土木也能完成智能灯控换装。" },
          { q: "万一家里 Wi-Fi 路由器掉线或没网了，开枪能够按纽关灯吗？", a: "绝无影响。即便网络完全断开，面板上物理按键与触屏按压关灯开灯照样做到零延时响应。" }
        ]
      }
    }
  }
};

const ALL_SERVICES_SOURCE: Record<string, ServiceDetail> = {
  ...servicesData,
  ...EXTENSION_SERVICES_DATA
};

/**
 * Returns a single unified SmartServiceEntity for a given service slug and locale.
 */
export function getSmartServiceEntity(slug: string, locale: Locale): SmartServiceEntity | undefined {
  const sourceService = ALL_SERVICES_SOURCE[slug];
  if (!sourceService) return undefined;

  const locService = getLocalizedService(sourceService, locale);
  const tax = SMART_SERVICE_TAXONOMY[slug] || {
    serviceSlug: slug,
    category: "maintenance",
    priceType: "Starting From",
    calculatorSlugs: [],
    synonyms: { en: [locService.title.toLowerCase()], ms: [locService.title.toLowerCase()], zh: [locService.title.toLowerCase()] },
    materials: { en: ["Premium high-grade materials"], ms: ["Bahan berkualiti tinggi"], zh: ["高规格优质建材"] }
  };

  const currentSynonyms = tax.synonyms[locale] || tax.synonyms.en || [];
  const currentMaterials = tax.materials[locale] || tax.materials.en || [];

  // Connect relevant calculators from toolsList
  const matchingCalculators: Array<{ slug: string; name: string; url: string }> = [];
  for (const calcSlug of tax.calculatorSlugs || []) {
    const foundTool = toolsList.find((t) => t.slug === calcSlug);
    if (foundTool) {
      const toolLoc = localizedToolContent(calcSlug, locale);
      matchingCalculators.push({
        slug: foundTool.slug,
        name: toolLoc.name || foundTool.name,
        url: `/tools/${foundTool.slug}`
      });
    }
  }

  // Connect relevant customer problems from allProblemPages
  const matchingProblems: Array<{ slug: string; title: string; symptom: string }> = [];
  for (const problem of allProblemPages) {
    if (problem.serviceSlug === slug) {
      matchingProblems.push({
        slug: problem.slug,
        title: problem.title,
        symptom: problem.symptom
      });
    }
  }

  // Connect localized related service titles using Topical Authority Map
  const relatedSlugs = getRelatedServices(slug);
  const relatedServicesList: Array<{ slug: string; title: string }> = [];
  for (const relSlug of relatedSlugs) {
    const relSource = ALL_SERVICES_SOURCE[relSlug];
    if (relSource) {
      const relLoc = getLocalizedService(relSource, locale);
      relatedServicesList.push({
        slug: relSlug,
        title: relLoc.title
      });
    }
  }

  const ctaUrl = getWhatsAppLink({
    service: locService.title,
    lang: locale
  });
  const quoteUrl = `/services/${slug}`;

  let businessDecisionNote: string | undefined;
  if (tax.needsBusinessDecision && tax.businessDecisionNote) {
    businessDecisionNote = tax.businessDecisionNote[locale] || tax.businessDecisionNote.en;
  }

  return {
    id: slug,
    serviceSlug: slug,
    category: tax.category,
    title: locService.title,
    tagline: locService.tagline,
    description: locService.description,
    startPrice: locService.startPrice,
    priceType: tax.priceType,
    warranty: locService.warranty,
    whatIsIncluded: locService.highlights || [],
    materials: currentMaterials,
    process: locService.process || [],
    faqs: locService.faqs || [],
    relatedServices: relatedServicesList,
    calculators: matchingCalculators,
    customerProblems: matchingProblems,
    synonyms: currentSynonyms,
    ctaUrl,
    quoteUrl,
    needsBusinessDecision: !!tax.needsBusinessDecision,
    businessDecisionNote
  };
}

/**
 * Returns all 32 Smart Service Entities (28 core + 4 extension) localized for the specified locale.
 */
export function getAllSmartServiceEntities(locale: Locale): SmartServiceEntity[] {
  const slugs = Object.keys(ALL_SERVICES_SOURCE);
  const result: SmartServiceEntity[] = [];
  for (const slug of slugs) {
    const entity = getSmartServiceEntity(slug, locale);
    if (entity) {
      result.push(entity);
    }
  }
  return result;
}

/**
 * Returns all customer problems from config/problem-data localized or structured for matching.
 */
export function getAllProblemEntities(): ProblemDetail[] {
  return allProblemPages;
}
