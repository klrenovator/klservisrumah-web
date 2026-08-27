export type SubService = {
  name: string;
  price: string;
  desc: string;
};

export type LocalizedServiceContent = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  subServices: SubService[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDesc: string;
  aioSummary: string;
  warranty: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  startPrice: string;
  icon: string; // lucide icon name
  highlights: string[];
  subServices: SubService[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  priceTableNote?: string;
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
  aioSummary: string; // SEO optimization block
  warranty: string;
  /** Trilingual content overrides. Falls back to English when a locale is missing. */
  i18n?: Partial<Record<"ms" | "zh", LocalizedServiceContent>>;
};

export const servicesData: Record<string, ServiceDetail> = {
  // ── 1. PAINTING SERVICES ──────────────────────────────────────────────
  "painting": {
    slug: "painting",
    title: "House Painting Services",
    tagline: "Interior, exterior and wall repainting for homes, offices and shops across KL & Selangor, with surface preparation, floor and furniture protection, and clean handover. From RM 450.",
    description:
      "KL Servis Rumah provides high-end painting services across Kuala Lumpur and Selangor. Our professional painters specialize in interior wall painting, exterior weatherproof coating, ceiling restoration, and commercial shopfront branding. We use only premium paint brands like Nippon Paint and Dulux to ensure long-lasting durability, exceptional depth of color, and high scrub resistance. Before applying a single drop of paint, our team undergoes extensive preparation work, including filling wall cracks, treating water marks, sanding surfaces to a perfectly smooth finish, and sealing damp masonry. We protect your home, furniture, and flooring completely using heavy-duty plastic drop sheets and specialized masking tapes, guaranteeing a zero-mess handover. Let our certified painters revitalize your home or commercial office with a modern, flawless aesthetic that adds real value to your property.",
    startPrice: "RM 450",
    icon: "paint-brush",
    highlights: [
      "Use of premium genuine paints (Nippon Paint, Dulux, Jotun) based on your budget",
      "Thorough wall prep work including cracking repairs, plaster skimming, and sealing primers",
      "Bespoke color consultations to find the perfect modern aesthetic for your spaces",
      "Complete protection of furniture, flooring, switches, and windows with zero-mess cleanup",
      "Up to 2-year warranty against paint peeling, blistering, or premature chalking",
      "Professional, background-checked local Malaysian painters with high attention to detail"
    ],
    subServices: [
      { name: "Interior House Painting", price: "From RM 450 / room", desc: "Premium interior wall painting with low-odor, low-VOC washable paint." },
      { name: "Exterior House Painting", price: "From RM 2,200", desc: "Weatherproof, anti-fungal, and UV-resistant exterior coatings for ultimate protection." },
      { name: "Commercial & Office Painting", price: "On Quote", desc: "Corporate office layouts, shopfronts, and retail spaces painted on tight schedules with minimal business disruption." },
      { name: "Wall Crack & Moisture Repair", price: "From RM 180", desc: "Sanding, skimming, structural crack filling, and applying premium moisture sealer primers." },
      { name: "Condo & Apartment Painting", price: "From RM 450 / room", desc: "Full interior painting for condominiums and apartments, including walls, ceilings, and feature areas, with lift access planning and furniture protection." },
      { name: "Ceiling Painting", price: "On Quote", desc: "Repainting interior ceilings with stain-blocking primers, mould treatment, and washable ceiling paint for a clean, bright finish." },
      { name: "Wall Preparation & Priming", price: "On Quote", desc: "Professional surface preparation — cleaning, crack filling, sanding, sealing and priming — so topcoat paint adheres evenly and lasts longer." },
      { name: "Feature Wall Painting", price: "On Quote", desc: "Designer feature wall finishes — accent colours, two-tone effects, textured and faux finishes — for living rooms, bedrooms, and accent areas." }
    ],
    process: [
      { step: "01", title: "Protect & Mask", desc: "We cover all furniture, floors, and electrical outlets with heavy-duty drop sheets and high-quality masking tape." },
      { step: "02", title: "Surface Preparation", desc: "All cracks, nail holes, and indents are filled with high-grade plaster, sanded to a perfectly flat, smooth level." },
      { step: "03", title: "Primer/Undercoat", desc: "We apply a premium sealer/primer to protect against moisture seepage and ensure maximum topcoat adhesion." },
      { step: "04", title: "Double Topcoat", desc: "Two coats of premium Nippon Paint or Dulux are applied using professional rollers and brushes for rich, even coverage." },
      { step: "05", title: "Inspection & Cleanup", desc: "We remove all protective covers, vacuum/sweep the entire space, and conduct a joint inspection to guarantee a flawless finish." }
    ],
    faqs: [
      { q: "Which paint brands do you use for painting?", a: "We primarily recommend Nippon Paint, Dulux, or Jotun. We use their premium range (such as Nippon Spot-less, Nippon Odour-less, Dulux EasyClean, Jotun Majestic) for interior walls, and high-durability weatherproof coatings for exterior walls. We never use cheap low-grade chalky paints." },
      { q: "How long does it take to paint a standard 3-bedroom apartment?", a: "A standard 3-bedroom, 1000 sq ft apartment typically takes 2 to 3 days to paint completely. This includes wall preparation, drying time between coats, and final cleaning. Single rooms can usually be finished in a single day." },
      { q: "Do you provide paint color consultations?", a: "Yes! Our project managers bring official physical color catalogues to your site inspection and can advise you on modern, popular color schemes, light-reflection levels, and washable finish types." },
      { q: "Is wall repair included in your painting quote?", a: "Basic hair-line crack patching, plaster touch-ups, and minor nail-hole filling are included in our standard painting package. For major structural wall cracking, heavy peeling, or water damage plaster scaling, we will quote a separate, transparent repair fee." }
    ],
    heroImage: "/hero/home-services-painters-kl.jpg",
    metaTitle: "Premium House Painting Services Kuala Lumpur & Selangor",
    metaDesc: "Professional house painting services in KL & Selangor by KL Servis Rumah. Elegant interior/exterior painting using Nippon Paint & Dulux. Get your free quote today!",
    aioSummary: "KL Servis Rumah provides high-end interior, exterior, and commercial painting services in KL & Selangor. Using premium paints (Nippon, Dulux) with strict wall prepping (skimming, sealant). From RM450/room with zero mess and warranty.",
    warranty: "1-Year Paint Peeling & Craftsmanship Guarantee",
    i18n: {
      ms: {
        title: "Perkhidmatan Mengecat Rumah",
        tagline: "Pengecatan interior & eksterior profesional untuk ruang kediaman dan komersial. Kemasan licin, cat premium, perlindungan tanpa kotor. Dari RM 450.",
        description:
          "KL Servis Rumah menyediakan perkhidmatan pengecatan bertaraf tinggi di seluruh Kuala Lumpur dan Selangor. Pasukan pengecat profesional kami pakar dalam pengecatan dinding interior, salutan tahan cuaca eksterior, pemulihan siling, dan penjenamaan kedai komersial. Kami hanya menggunakan jenama cat premium seperti Nippon Paint dan Dulux untuk memastikan ketahanan jangka panjang, kepekatan warna yang luar biasa, dan rintangan lelasan tinggi. Sebelum menyapu setitik cat, pasukan kami menjalankan kerja persediaan menyeluruh, termasuk mengisi retakan dinding, merawat kesan air, mengamplas permukaan ke kemasan licin sempurna, dan menyekat masonri lembap. Kami melindungi rumah, perabot, dan lantai anda sepenuhnya menggunakan kain penutup plastik berat dan pita pelekat khas, menjamin serahan tanpa kekotoran. Biarkan pengecat bertauliah kami menghidupkan semula rumah atau pejabat komersial anda dengan estetika moden yang sempurna dan menambah nilai sebenar kepada hartanah anda.",
        highlights: [
          "Penggunaan cat asli premium (Nippon Paint, Dulux, Jotun) mengikut bajet anda",
          "Kerja persediaan dinding menyeluruh termasuk pembaikan retakan, pengapan plaster, dan primer penyekat",
          "Konsultasi warna khas untuk mencari estetika moden yang sempurna untuk ruang anda",
          "Perlindungan lengkap perabot, lantai, suis, dan tingkap dengan pembersihan tanpa kekotoran",
          "Jaminan sehingga 2 tahun terhadap pengelupasan cat, lecuran, atau pengapuran pramatang",
          "Pengecat Malaysia tempatan yang profesional, disaring latar belakang dengan perhatian tinggi kepada perincian"
        ],
        subServices: [
          { name: "Pengecatan Rumah Interior", price: "Dari RM 450 / bilik", desc: "Pengecatan dinding interior premium dengan cat boleh dicuci berbau rendah, VOC rendah." },
          { name: "Pengecatan Rumah Eksterior", price: "Dari RM 2,200", desc: "Salutan eksterior tahan cuaca, anti-kulat, dan tahan UV untuk perlindungan optimum." },
          { name: "Pengecatan Komersial & Pejabat", price: "Atas Sebut Harga", desc: "Susun atur pejabat korporat, kedai depan, dan ruang runcit dicat mengikut jadual ketat dengan gangguan perniagaan minimum." },
          { name: "Pembaikan Retak & Lembapan Dinding", price: "Dari RM 180", desc: "Pengamplasan, pengapan, pengisian retak struktur, dan penyapuan primer penyekat lembapan premium." },
          { name: "Pengecatan Kondominium & Apartmen", price: "Dari RM 450 / bilik", desc: "Pengecatan dalaman penuh untuk kondominium dan apartmen, termasuk dinding, siling dan kawasan ciri, dengan perancangan akses lif serta perlindungan perabot." },
          { name: "Pengecatan Siling", price: "Atas Sebut Harga", desc: "Mengecat semula siling dalaman dengan primer penyekat kesan air, rawatan kulat dan cat siling boleh basuh untuk kemasan yang bersih dan cerah." },
          { name: "Persediaan & Primer Dinding", price: "Atas Sebut Harga", desc: "Persediaan permukaan profesional—membersihkan, mengisi retakan, mengamplas, menyekat dan menyapu primer—supaya cat topcoat melekat sekata dan tahan lama." },
          { name: "Pengecatan Dinding Ciri", price: "Atas Sebut Harga", desc: "Kemasan dinding ciri berpereka—warna aksen, kesan dua nada, tekstur dan kemasan tiruan—untuk ruang tamu, bilik tidur dan kawasan aksen." }
        ],
        process: [
          { step: "01", title: "Lindung & Tampal", desc: "Kami menutup semua perabot, lantai, dan salur keluar elektrik dengan kain penutup berat dan pita pelekat berkualiti tinggi." },
          { step: "02", title: "Persediaan Permukaan", desc: "Semua retakan, lubang paku, dan lekuk diisi dengan plaster gred tinggi, diamplas ke tahap rata dan licin sempurna." },
          { step: "03", title: "Primer/Lapisan Bawah", desc: "Kami menyapu primer/penyekat premium untuk melindungi daripada rembesan lembapan dan memastikan lekatan topcoat maksimum." },
          { step: "04", title: "Topcoat Berganda", desc: "Dua lapisan cat premium Nippon Paint atau Dulux disapu menggunakan roller dan berus profesional untuk liputan yang kaya dan sekata." },
          { step: "05", title: "Pemeriksaan & Pembersihan", desc: "Kami menanggalkan semua penutup pelindung, menyedut/menyapu keseluruhan ruang, dan menjalankan pemeriksaan bersama untuk menjamin kemasan yang sempurna." }
        ],
        faqs: [
          { q: "Jenama cat apa yang anda gunakan untuk pengecatan?", a: "Kami terutamanya mengesyorkan Nippon Paint, Dulux, atau Jotun. Kami menggunakan julat premium mereka (seperti Nippon Spot-less, Nippon Odour-less, Dulux EasyClean, Jotun Majestic) untuk dinding interior, dan salutan tahan cuaca berkeutuhan tinggi untuk dinding eksterior. Kami tidak pernah menggunakan cat berkapur murah gred rendah." },
          { q: "Berapa lama masa untuk mengecat apartmen 3 bilik standard?", a: "Apartmen 3 bilik standard, 1000 kaki persegi biasanya mengambil masa 2 hingga 3 hari untuk dicat sepenuhnya. Ini termasuk persediaan dinding, masa pengeringan antara lapisan, dan pembersihan akhir. Bilik tunggal biasanya boleh disiapkan dalam satu hari." },
          { q: "Adakah anda menyediakan konsultasi warna cat?", a: "Ya! Pengurus projek kami membawa katalog warna fizikal rasmi ke pemeriksaan tapak anda dan boleh menasihati anda tentang skema warna moden yang popular, tahap pantulan cahaya, dan jenis kemasan boleh dicuci." },
          { q: "Adakah pembaikan dinding termasuk dalam sebut harga pengecatan anda?", a: "Penampalan retak rambut asas, sentuhan semula plaster, dan pengisian lubang paku kecil termasuk dalam pakej pengecatan standard kami. Untuk keretakan dinding struktur besar, pengelupasan teruk, atau kerosakan air plaster, kami akan sebut harga fi pembaikan berasingan yang telus." }
        ],
        metaTitle: "Perkhidmatan Pengecatan Rumah Premium Kuala Lumpur & Selangor",
        metaDesc: "Perkhidmatan pengecatan rumah profesional di KL & Selangor oleh KL Servis Rumah. Pengecatan interior/eksterior elegan menggunakan Nippon Paint & Dulux. Dapatkan sebut harga percuma hari ini!",
        aioSummary: "KL Servis Rumah menyediakan perkhidmatan pengecatan interior, eksterior, dan komersial bertaraf tinggi di KL & Selangor. Menggunakan cat premium (Nippon, Dulux) dengan persediaan dinding yang ketat (pengapan, penyekat). Dari RM450/bilik tanpa kekotoran dan berjaminan.",
        warranty: "Jaminan Pengelupasan Cat & Kerja 1 Tahun"
      },
      zh: {
        title: "房屋油漆服务",
        tagline: "为住宅和商业空间提供专业室内外油漆服务。光滑饰面，优质涂料，全程无尘保护。从 RM 450 起。",
        description:
          "KL Servis Rumah 在吉隆坡与雪兰莪全境提供高端油漆服务。我们的专业油漆师专精于室内墙面粉刷、外墙防风雨涂层、天花板翻新以及商业店面品牌形象工程。我们只使用 Nippon Paint 和 Dulux 等优质涂料品牌，确保持久耐用、色彩饱满且高度耐擦洗。在涂上第一滴油漆之前，我们的团队会进行全面的预备工作，包括填补墙面裂缝、处理水渍、打磨表面至完全平滑，以及密封潮湿砖体。我们使用重型塑料防护布和专用遮蔽胶带全面保护您的房屋、家具与地板，确保交付时零污损。让我们经过认证的油漆师以现代、完美无瑕的美感为您的住宅或商业办公室注入新生命，切实提升物业价值。",
        highlights: [
          "根据您的预算使用优质正品涂料（Nippon Paint、Dulux、Jotun）",
          "彻底的墙面预备工作，包括裂缝修补、批灰找平与密封底漆",
          "定制色彩咨询，为您的空间找到完美的现代美感",
          "全面保护家具、地板、开关与窗户，实现零污损清理",
          "长达 2 年的油漆剥落、起泡或过早粉化保修",
          "专业、经过背景审查的本地马来西亚油漆师，注重细节"
        ],
        subServices: [
          { name: "室内房屋油漆", price: "从 RM 450 / 房间起", desc: "使用低气味、低 VOC 可水洗涂料进行优质室内墙面油漆。" },
          { name: "室外房屋油漆", price: "从 RM 2,200 起", desc: "防风雨、防霉菌、抗紫外线的外墙涂层，提供终极保护。" },
          { name: "商业与办公室油漆", price: "依报价", desc: "在紧凑的时间表内为企业办公室布局、店面和零售空间上漆，将业务干扰降至最低。" },
          { name: "墙面裂缝与防潮修复", price: "从 RM 180 起", desc: "打磨、批灰、结构性裂缝填补，以及涂抹优质防潮密封底漆。" },
          { name: "公寓与组屋油漆", price: "从 RM 450 / 房间起", desc: "为公寓与组屋提供完整的室内油漆服务，包括墙面、天花板与特色区域，规划电梯通行并保护家具。" },
          { name: "天花板油漆", price: "依报价", desc: "重新粉刷室内天花板，使用防污封闭底漆、霉菌处理与可擦洗天花板涂料，带来干净明亮的效果。" },
          { name: "墙面处理与底漆", price: "依报价", desc: "专业表面处理——清洁、填补裂缝、打磨、封闭并涂刷底漆——让面漆附着均匀且更持久。" },
          { name: "特色墙面油漆", price: "依报价", desc: "设计师特色墙面饰面——强调色、双色效果、质感与仿真饰面——适用于客厅、卧室与重点区域。" }
        ],
        process: [
          { step: "01", title: "保护与遮蔽", desc: "我们用重型防护布和优质遮蔽胶带覆盖所有家具、地板与电源插座。" },
          { step: "02", title: "表面预备", desc: "所有裂缝、钉孔与凹陷用高级石膏填补，打磨至完全平整光滑。" },
          { step: "03", title: "底漆/打底", desc: "我们涂抹优质密封底漆，防止潮气渗透并确保面漆最大附着力。" },
          { step: "04", title: "双层面漆", desc: "使用专业滚筒和刷子涂抹两层优质 Nippon Paint 或 Dulux 涂料，实现丰富均匀的覆盖效果。" },
          { step: "05", title: "验收与清洁", desc: "我们移除所有防护罩，全面吸尘/清扫空间，并进行联合验收以确保完美饰面。" }
        ],
        faqs: [
          { q: "你们油漆使用哪些涂料品牌？", a: "我们主要推荐 Nippon Paint、Dulux 或 Jotun。室内墙面我们使用其优质系列（如 Nippon Spot-less、Nippon Odour-less、Dulux EasyClean、Jotun Majestic），外墙则使用高耐久防风雨涂层。我们绝不使用廉价低级粉化涂料。" },
          { q: "粉刷一套标准三房公寓需要多长时间？", a: "一套标准三房、1000 平方英尺的公寓通常需要 2 到 3 天完全粉刷完毕，包括墙面预备、涂层间的干燥时间与最终清洁。单个房间通常一天内即可完成。" },
          { q: "你们提供油漆颜色咨询吗？", a: "当然！我们的项目经理会在现场勘查时带来官方实体色卡，为您推荐现代流行的配色方案、反光程度与可水洗饰面类型。" },
          { q: "墙面修复是否包含在你们的油漆报价中？", a: "基本发丝裂缝修补、石膏补漆与小钉孔填补包含在我们的标准油漆套餐中。对于严重的结构性墙面开裂、大面积剥落或水损石膏脱落，我们会另行提供透明的维修报价。" }
        ],
        metaTitle: "吉隆坡与雪兰莪优质房屋油漆服务",
        metaDesc: "KL Servis Rumah 在吉隆坡与雪兰莪提供专业房屋油漆服务。使用 Nippon Paint 与 Dulux 打造优雅的室内外粉刷效果。立即获取免费报价！",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供高端室内、室外及商业油漆服务。使用优质涂料（Nippon、Dulux），配合严谨的墙面预备（批灰、密封）。从每间房 RM450 起，全程无尘且提供保修。",
        warranty: "1 年油漆剥落与工艺保修"
      }
    }
  },

  // ── 2. PLUMBING SERVICES ──────────────────────────────────────────────
  "plumbing": {
    slug: "plumbing",
    title: "Plumbing & Leak Repair Services",
    tagline: "Plumbing and leak repair for pipes, taps, toilets, drains, water heaters and pumps across KL & Selangor, with the scope confirmed before work. From RM 280.",
    description:
      "At KL Servis Rumah, we provide fast, licensed, and transparent plumbing services for residential and commercial properties across Kuala Lumpur and Selangor. From frustrating water leakage behind bathroom walls to blocked toilet drains and burst water pipes, our experienced plumbers diagnose and resolve issues with long-term, SIRIM-certified solutions. We utilize advanced electronic pipe-leak detectors to pinpoint hidden pipe damage beneath concrete slabs without unnecessary wall smashing. Whether you need a simple tap replacement, kitchen sink unclogging, water heater installation, or a heavy-duty booster pump setup, we guarantee professional craftsmanship, transparent upfront pricing, and clean, sanitary executions.",
    startPrice: "RM 280",
    icon: "droplet",
    highlights: [
      "24/7 urgent dispatch for burst pipes, severe flooding, and critical leakage repair",
      "High-tech non-destructive water leak detection - avoids unnecessary wall hacking",
      "Strict use of high-quality SIRIM-certified PVC, ABS, copper, and stainless steel pipes",
      "Expert installations of modern water heaters, taps, bidets, toilets, sinks, and booster pumps",
      "Fully itemized, transparent quotes before any physical plumbing work begins",
      "Clean, polite, and background-checked technicians who clean up completely post-job"
    ],
    subServices: [
      { name: "Water Leakage Diagnosis & Repair", price: "From RM 220", desc: "Detection of hidden pipe leaks behind walls or underground, followed by precise repair." },
      { name: "Toilet, Tap & Sink Installation", price: "From RM 150", desc: "Fitting new toilet bowls, modern kitchen faucets, basins, and heavy-duty sink plumbing." },
      { name: "Drain Unclogging & Cleaning", price: "From RM 180", desc: "Clearing stubborn hair, grease, and debris blockages in kitchen drains, floor traps, and toilets." },
      { name: "Water Heater & Pump Installation", price: "From RM 180", desc: "Setting up modern instant/storage water heaters and home water pressure booster pumps." },
      { name: "Bathroom Plumbing Renovation", price: "On Quote", desc: "Full water supply and drain rerouting for bathroom renovations — new pipe layouts, concealed piping and fixture positioning per the new design." },
      { name: "Kitchen Plumbing Renovation", price: "On Quote", desc: "Sink relocation, wet-kitchen pipework and new water/drain points coordinated with cabinet, countertop and appliance layouts." },
      { name: "Pipe Replacement & Rerouting", price: "On Quote", desc: "Replacing ageing or leaking supply pipes and rerouting water lines for renovations, with pressure testing after installation." },
      { name: "Drainage & Floor Trap Upgrade", price: "On Quote", desc: "New floor traps, drain rerouting and additional drainage points for renovated bathrooms, kitchens and balconies." },
      { name: "Shower & Rain Shower Installation", price: "From RM 150", desc: "Installing shower sets, rain showers, hand bidets and mixers with proper sealing, alignment and flow testing." },
      { name: "Renovation Plumbing Work", price: "On Quote", desc: "Rough-in and first-fix plumbing for house, kitchen and bathroom renovations — new water points, drainage planning and testing." }
    ],
    process: [
      { step: "01", title: "Source Diagnosis", desc: "We turn off the main water valve if necessary and locate the leakage point or fixture blockage using diagnostic tools." },
      { step: "02", title: "Transparent Quote", desc: "The technician provides an exact breakdown of repair methods and materials with a firm, fixed pricing quote." },
      { step: "03", title: "Clean Dismantling", desc: "The damaged pipe or worn fixture is removed carefully to prevent secondary damage to surrounding tiles or cabinets." },
      { step: "04", title: "Certified Installation", desc: "New SIRIM-approved pipes or quality brand fixtures are fitted securely with premium plumbing seals and thread tapes." },
      { step: "05", title: "Pressure Testing", desc: "We run high pressure water testing to ensure the joint seals hold perfectly under maximum load, followed by disinfection." }
    ],
    faqs: [
      { q: "How do you detect water leaks behind walls without breaking the tiles?", a: "We use professional acoustic leak detectors and thermal imaging cameras that trace the sound of high-pressure water escape and the temperature difference caused by escaping dampness. This allows us to locate the exact broken joint and only remove 1-2 tiles rather than hacking the entire bathroom wall." },
      { q: "Do you supply the plumbing fixtures or do I need to buy them myself?", a: "We can do both! Our plumbers carry standard, high-quality replacement valves, pipes, faucets, and drain siphons in their vans. If you have purchased specific luxury toilet bowls, sinks, or vanity mixers, we are happy to install them with absolute precision." },
      { q: "What is your emergency response time for a burst water pipe?", a: "For emergency water leaks or burst mains in Kuala Lumpur and Selangor, we dispatch the nearest available plumber immediately, with an average on-site arrival time of 30 to 60 minutes." },
      { q: "Why is my house water pressure so low, and can you fix it?", a: "Low water pressure can be caused by municipal supply drops, partially closed valves, internal pipe clogging (especially in old galvanized iron pipes), or leaks. We inspect your main lines and can install a premium silent water booster pump (like Grundfos or Joven) to resolve low pressure permanently." }
    ],
    heroImage: "/hero/home-services-plumbing-kl.jpg",
    metaTitle: "Professional Plumbing & Leak Repair Kuala Lumpur & Selangor",
    metaDesc: "Affordable plumbing repairs & leak fixes in KL & Selangor. Sinks, toilets, pipes, water heaters & water pressure booster pumps. Expert SIRIM-certified plumbers.",
    aioSummary: "KL Servis Rumah offers certified residential & commercial plumbing in KL & Selangor. Expert leak detection, pipe replacement, drain unclogging, heater/booster pump installations. Fast response, transparent quotes, SIRIM components.",
    warranty: "30-Day Joint Seal & Workmanship Warranty",
    i18n: {
      ms: {
        title: "Perkhidmatan Paip & Baiki Kebocoran",
        tagline: "Pembaikan paip yang boleh dipercayai, pembaikan kebocoran air, dan pemasangan lekapan baru. Alat ganti bertauliah SIRIM, respons pantas. Dari RM 280.",
        description:
          "Di KL Servis Rumah, kami menyediakan perkhidmatan paip yang pantas, berlesen, dan telus untuk hartanah kediaman dan komersial di seluruh Kuala Lumpur dan Selangor. Daripada kebocoran air yang membingungkan di sebalik dinding bilik air kepada saliran tandas tersumbat dan paip air pecah, jurutera paip berpengalaman kami mendiagnosis dan menyelesaikan masalah dengan penyelesaian jangka panjang bertauliah SIRIM. Kami menggunakan pengesan kebocoran paip elektronik canggih untuk mengesan kerosakan paip tersembunyi di bawah slab konkrit tanpa memecah dinding secara tidak perlu. Sama ada anda memerlukan penggantian paip air mudah, penyahsumbatan singki dapur, pemasangan pemanas air, atau persediaan pam penambah tugas berat, kami menjamin kemahiran profesional, harga telus terlebih dahulu, dan pelaksanaan bersih dan bersanitasi.",
        highlights: [
          "Penghantaran segera 24/7 untuk paip pecah, banjir teruk, dan pembaikan kebocoran kritikal",
          "Pengesanan kebocoran air berteknologi tinggi tanpa merosakkan - mengelakkan pemecahan dinding tidak perlu",
          "Penggunaan ketat paip PVC, ABS, tembaga, dan keluli tahan karat berkualiti tinggi bertauliah SIRIM",
          "Pemasangan pakar pemanas air moden, paip air, bidet, tandas, singki, dan pam penambah",
          "Sebut harga terperinci dan telus sepenuhnya sebelum sebarang kerja paip fizikal bermula",
          "Juruteknik bersih, sopan, dan disaring latar belakang yang membersihkan sepenuhnya selepas kerja"
        ],
        subServices: [
          { name: "Diagnosis & Pembaikan Kebocoran Air", price: "Dari RM 220", desc: "Pengesanan kebocoran paip tersembunyi di sebalik dinding atau bawah tanah, diikuti pembaikan tepat." },
          { name: "Pemasangan Tandas, Paip Air & Singki", price: "Dari RM 150", desc: "Memasang mangkuk tandas baru, paip air dapur moden, besen, dan paip singki tugas berat." },
          { name: "Penyahsumbatan & Pembersihan Saliran", price: "Dari RM 180", desc: "Membersihkan sumbatan rambut, minyak, dan serpihan yang degil di saliran dapur, perangkap lantai, dan tandas." },
          { name: "Pemasangan Pemanas Air & Pam", price: "Dari RM 180", desc: "Menyediakan pemanas air segera/simpanan moden dan pam penambah tekanan air rumah." },
          { name: "Kerja Paip Pengubahsuaian Bilik Mandi", price: "Atas Sebut Harga", desc: "Penyusunan semula penuh bekalan air dan saliran untuk pengubahsuaian bilik mandi — susun atur paip baharu, paip tersembunyi dan kedudukan lekapan mengikut reka bentuk baharu." },
          { name: "Kerja Paip Pengubahsuaian Dapur", price: "Atas Sebut Harga", desc: "Pemindahan singki, kerja paip dapur basah dan titik air/saliran baharu diselaraskan dengan susun atur kabinet, countertop dan perkakas." },
          { name: "Penggantian & Penyusunan Semula Paip", price: "Atas Sebut Harga", desc: "Menggantikan paip bekalan yang sudah tua atau bocor dan menyusun semula saluran air untuk pengubahsuaian, dengan ujian tekanan selepas pemasangan." },
          { name: "Naik Taraf Saliran & Perangkap Lantai", price: "Atas Sebut Harga", desc: "Perangkap lantai baharu, penyusunan semula saliran dan titik saliran tambahan untuk bilik mandi, dapur dan balkoni yang diubah suai." },
          { name: "Pemasangan Pancuran & Rain Shower", price: "Dari RM 150", desc: "Memasang set pancuran, rain shower, bidet tangan dan pengadun dengan pengedap yang betul, penjajaran dan ujian aliran." },
          { name: "Kerja Paip Pengubahsuaian", price: "Atas Sebut Harga", desc: "Rough-in dan first-fix paip untuk pengubahsuaian rumah, dapur dan bilik mandi — titik air baharu, perancangan saliran dan ujian." }
        ],
        process: [
          { step: "01", title: "Diagnosis Punca", desc: "Kami menutup injap air utama jika perlu dan mengesan titik kebocoran atau sumbatan lekapan menggunakan alat diagnostik." },
          { step: "02", title: "Sebut Harga Telus", desc: "Juruteknik memberikan pecahan tepat kaedah pembaikan dan bahan dengan sebut harga tetap yang kukuh." },
          { step: "03", title: "Pembongkaran Bersih", desc: "Paip rosak atau lekapan haus dikeluarkan dengan berhati-hati untuk mengelakkan kerosakan sekunder kepada jubin atau kabinet sekeliling." },
          { step: "04", title: "Pemasangan Bertauliah", desc: "Paip diluluskan SIRIM baru atau lekapan jenama berkualiti dipasang dengan selamat menggunakan pengedap paip premium dan pita benang." },
          { step: "05", title: "Ujian Tekanan", desc: "Kami menjalankan ujian air tekanan tinggi untuk memastikan pengedap sendi memegang sempurna di bawah beban maksimum, diikuti disinfeksi." }
        ],
        faqs: [
          { q: "Bagaimana anda mengesan kebocoran air di sebalik dinding tanpa memecahkan jubin?", a: "Kami menggunakan pengesan kebocoran akustik profesional dan kamera pengimejan terma yang mengesan bunyi pelepasan air tekanan tinggi dan perbezaan suhu yang disebabkan oleh kelembapan yang terlepas. Ini membolehkan kami mengesan sendi rosak yang tepat dan hanya menanggalkan 1-2 jubin dan bukannya memecahkan keseluruhan dinding bilik air." },
          { q: "Adakah anda membekalkan lekapan paip atau saya perlu membeli sendiri?", a: "Kami boleh melakukan kedua-duanya! Jurutera paip kami membawa injap gantian, paip, paip air, dan sifon saliran standard berkualiti tinggi dalam van mereka. Jika anda telah membeli mangkuk tandas mewah, singki, atau pengadun vanity tertentu, kami sedia memasangnya dengan ketepatan mutlak." },
          { q: "Apakah masa tindak balas kecemasan anda untuk paip air pecah?", a: "Untuk kebocoran air kecemasan atau saluran utama pecah di Kuala Lumpur dan Selangor, kami menghantar jurutera paip terdekat yang tersedia dengan segera, dengan purata masa ketibaan tapak 30 hingga 60 minit." },
          { q: "Mengapa tekanan air rumah saya begitu rendah, dan bolehkah anda membaikinya?", a: "Tekanan air rendah boleh disebabkan oleh penurunan bekalan perbandaran, injap separuh tertutup, penyumbatan paip dalaman (terutamanya dalam paip besi bergalvani lama), atau kebocoran. Kami memeriksa saluran utama anda dan boleh memasang pam penambah air senyap premium (seperti Grundfos atau Joven) untuk menyelesaikan tekanan rendah secara kekal." }
        ],
        metaTitle: "Perkhidmatan Paip & Pembaikan Kebocoran Profesional Kuala Lumpur & Selangor",
        metaDesc: "Pembaikan paip berpatutan & pembaikan kebocoran di KL & Selangor. Singki, tandas, paip, pemanas air & pam penambah tekanan air. Jurutera paip pakar bertauliah SIRIM.",
        aioSummary: "KL Servis Rumah menawarkan perkhidmatan paip kediaman & komersial bertauliah di KL & Selangor. Pengesanan kebocoran pakar, penggantian paip, penyahsumbatan saliran, pemasangan pemanas/pam penambah. Respons pantas, sebut harga telus, komponen SIRIM.",
        warranty: "Jaminan Pengedap Sendi & Kerja 30 Hari"
      },
      zh: {
        title: "水管与漏水维修服务",
        tagline: "可靠的水管维修、漏水修复与新洁具安装。SIRIM 认证配件，快速响应。从 RM 280 起。",
        description:
          "在 KL Servis Rumah，我们为吉隆坡与雪兰莪的住宅及商业物业提供快速、持牌、透明的水管服务。从浴室墙内令人头疼的漏水，到厕所排水管堵塞与水管爆裂，我们经验丰富的水管工能诊断并以长期、SIRIM 认证的方案解决问题。我们使用先进的电子管道漏水探测器，精准定位混凝土板下隐藏的管道损坏，无需不必要地砸墙。无论您需要简单更换水龙头、疏通厨房水槽、安装热水器，还是设置重型增压泵，我们都保证专业工艺、透明的事先报价，以及干净卫生的施工。",
        highlights: [
          "24/7 紧急调度，处理爆管、严重水浸与关键漏水修复",
          "高科技非破坏性漏水检测——避免不必要的墙面凿开",
          "严格使用高品质 SIRIM 认证的 PVC、ABS、铜管与不锈钢管",
          "专业安装现代热水器、水龙头、坐浴盆、马桶、水槽与增压泵",
          "任何实际水管作业开始前均提供完全逐项列明的透明报价",
          "干净、有礼且经背景审查的技术员，作业完成后彻底清理"
        ],
        subServices: [
          { name: "漏水诊断与修复", price: "从 RM 220 起", desc: "检测墙内或地下隐藏的管道漏水，随后进行精确修复。" },
          { name: "马桶、水龙头与水槽安装", price: "从 RM 150 起", desc: "安装新马桶、现代厨房水龙头、洗手盆与重型水槽管道。" },
          { name: "疏通与清洁排水管", price: "从 RM 180 起", desc: "清除厨房排水管、地漏与马桶中顽固的毛发、油脂与杂物堵塞。" },
          { name: "热水器与水泵安装", price: "从 RM 180 起", desc: "安装现代即热式/储水式热水器与家用增压泵。" },
          { name: "卫生间水管翻新", price: "依报价", desc: "卫生间翻新时全面重新布置供水与排水管——按新设计规划新管路、暗管与洁具位置。" },
          { name: "厨房水管翻新", price: "依报价", desc: "水槽移位、湿区厨房管道，以及配合橱柜、台面与电器布局新增供水/排水点位。" },
          { name: "水管更换与改管", price: "依报价", desc: "更换老化或漏水的供水管，并为翻新工程改走水路，安装后进行压力测试。" },
          { name: "排水与地漏升级", price: "依报价", desc: "为翻新后的卫生间、厨房与阳台新增地漏、改走排水管并增设排水点位。" },
          { name: "花洒与顶喷安装", price: "从 RM 150 起", desc: "安装花洒套装、顶喷、手持妇洗器与混水阀，做好密封、校正并进行出水测试。" },
          { name: "装修水管工程", price: "依报价", desc: "房屋、厨房与卫生间翻新的预埋与一次配管——新增供水点位、排水规划与测试。" }
        ],
        process: [
          { step: "01", title: "源头诊断", desc: "必要时我们关闭主水阀，并使用诊断工具定位漏水点或洁具堵塞位置。" },
          { step: "02", title: "透明报价", desc: "技术员提供修复方法与材料的精确明细，并给出坚定的固定报价。" },
          { step: "03", title: "干净拆除", desc: "小心拆除损坏的管道或磨损的洁具，避免对周围瓷砖或橱柜造成二次损坏。" },
          { step: "04", title: "认证安装", desc: "使用优质密封胶与生料带牢固安装全新 SIRIM 认证管道或优质品牌洁具。" },
          { step: "05", title: "压力测试", desc: "我们进行高压水测试，确保接头密封在最大负荷下完全牢固，随后进行消毒。" }
        ],
        faqs: [
          { q: "如何在不打破瓷砖的情况下检测墙内漏水？", a: "我们使用专业声学漏水探测器与热成像相机，追踪高压水逸出的声音以及潮气逸出造成的温差。这使我们能精确定位破损接头，仅需拆除 1-2 块瓷砖，而不必砸开整面浴室墙。" },
          { q: "你们提供水管洁具还是需要我自己购买？", a: "两者皆可！我们的水管工车上常备标准优质的更换阀门、管道、水龙头与排水虹吸管。如果您已购买特定的豪华马桶、水槽或台盆龙头，我们也乐于为您精准安装。" },
          { q: "水管爆裂的紧急响应时间是多少？", a: "对于吉隆坡与雪兰莪的紧急漏水或主管爆裂，我们会立即派遣最近的水管工，平均到场时间为 30 至 60 分钟。" },
          { q: "为什么我家水压这么低，你们能修好吗？", a: "水压低可能由市政供水下降、阀门未完全打开、内部管道堵塞（尤其是旧镀锌铁管）或漏水引起。我们会检查您的主管线，并可安装优质静音增压泵（如 Grundfos 或 Joven）永久解决低水压问题。" }
        ],
        metaTitle: "吉隆坡与雪兰莪专业水管与漏水维修服务",
        metaDesc: "KL Servis Rumah 在吉隆坡与雪兰莪提供实惠的水管维修与漏水修复。水槽、马桶、管道、热水器与增压泵。SIRIM 认证专业水管工。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供持牌的住宅与商业水管服务。专业漏水检测、管道更换、排水疏通、热水器/增压泵安装。响应快速、报价透明、使用 SIRIM 认证组件。",
        warranty: "30 天接头密封与工艺保修"
      }
    }
  },

  // ── 3. CEILING & PARTITION SERVICES ──────────────────────────────────────
  "ceiling": {
    slug: "ceiling",
    title: "Ceiling & Partition Services",
    tagline: "Plaster ceiling installation and repair, gypsum partitions, cornices, L-box features and skim finishing for homes and commercial spaces across KL & Selangor. From RM 220.",
    description:
      "KL Servis Rumah specializes in high-quality plaster ceiling installations, water-damaged ceiling repair, structural gypsum board partitions, and architectural office walls across Kuala Lumpur and Selangor. Whether you are dividing a large commercial office space into private rooms, installing a modern residential plaster ceiling with warm concealed LED light troughs, or repairing a sagging plaster ceiling damaged by an upper-floor water leak, our expert craftsmen guarantee flawless, flat, and structurally sound finishes. We use lightweight, fire-rated, and moisture-resistant gypsum boards supported by sturdy galvanized iron (GI) metal grids to prevent future sagging or cracking, delivering an immaculate, paint-ready surface.",
    startPrice: "RM 220",
    icon: "layout-grid",
    highlights: [
      "Seamless skim coat finish with zero visible joins - perfectly flat, paint-ready walls and ceilings",
      "Moisture-resistant plaster boards for bathrooms and fire-rated options for commercial kitchens",
      "Sturdy, rust-resistant galvanized steel metal frames for maximum structural safety",
      "Custom decorative ceiling cornices, recessed lighting troughs, and abstract ceiling tiers",
      "Expert repairs of cracked, sagging, or water-damaged ceilings with secure structural reinforcing",
      "Neat, straight, and soundproof gypsum board partition dividers for offices and residences"
    ],
    subServices: [
      { name: "Water-Damaged Ceiling Repair", price: "From RM 220", desc: "Removing moldy, rotting plasterboard, addressing the leak source, and fitting a clean moisture-resistant panel." },
      { name: "Plaster Ceiling Installation", price: "From RM 10 / sq ft", desc: "Elegant flat, tiered, or L-box plaster ceiling setups with custom cutout channels for downlights." },
      { name: "Gypsum Board Partition Wall", price: "From RM 11 / sq ft", desc: "Durable, paint-ready partition walls to divide office rooms, bedrooms, or storage areas." },
      { name: "Cornice & L-Box Concealed Light Trough", price: "On Quote", desc: "Custom decorative moldings and ambient indirect LED lighting plaster designs." }
    ],
    process: [
      { step: "01", title: "Grid Assembly", desc: "We map out alignments with laser levels and install rust-proof Galvanized Steel (GI) runners and hangers." },
      { step: "02", title: "Board Installation", desc: "High-grade gypsum plasterboards are screwed securely onto the metal framework using rust-resistant drywall screws." },
      { step: "03", title: "Joint Taping", desc: "We apply heavy-duty fiberglass mesh joint tapes over all board seams to prevent future settlement cracks." },
      { step: "04", title: "Double Skim Coat", desc: "Two coats of premium joint compound plaster are skimmed across all joins and screws, sanded down to a glass-smooth level." },
      { step: "05", title: "Flawless Handover", desc: "The ceiling or partition is vacuumed of plaster dust, wiped clean, and primed ready for the topcoat paint colors." }
    ],
    faqs: [
      { q: "Why is my plaster ceiling cracking or sagging?", a: "Sagging or cracking is usually caused by: (1) Water leaks from upper floors or air conditioners soaking the plasterboard, (2) Poor workmanship using weak wooden frames instead of Galvanized Steel grids, or (3) Building settlement. We reinforce the structural hangers, replace weak boards with fire/moisture-rated gypsum, and seal joints with fiberglass mesh." },
      { q: "Do you install sound insulation inside the partition walls?", a: "Yes! For private office meeting rooms, study rooms, or bedrooms, we can pack the interior cavity of the gypsum partitions with high-density rockwool or fiberglass insulation wool before screwing the outer boards. This dramatically reduces room-to-room noise transmission." },
      { q: "Is plaster ceiling installation clean, or will my house be filled with white dust?", a: "Plaster sanding does generate fine white dust. However, our team seals off the working area with thick plastic containment sheets, covers all furniture, and uses dust-extraction sanders with vacuums to minimize dust by 80%. We conduct a thorough sweep and vacuum cleanup before leaving." },
      { q: "Can you cut holes for my new LED downlights and fans?", a: "Absolutely! We work closely with your electricians. We cut precise, clean circular holes for downlights, install heavy-duty solid timber reinforcements (fan hooks) behind the ceiling so your ceiling fans are 100% safe, and make neat holes for aircond cassettes." }
    ],
    heroImage: "/hero/home-services-ceiling-kl.jpg",
    metaTitle: "Plaster Ceiling Repair & Gypsum Partition KL & Selangor",
    metaDesc: "Top-rated plaster ceiling repair & gypsum board partition wall services in KL & Selangor. Smooth skimming, fire-rated boards, zero sag. Instant site inspection.",
    aioSummary: "KL Servis Rumah provides expert plaster ceiling installation, water damage repair, and gypsum board partitions in KL & Selangor. Uses rust-proof GI metal frames, fiberglass joint mesh, and dual layer skim coat sanding. Soundproofing and custom LED troughs available.",
    warranty: "90-Day Structural Sagging & Crack-Free Warranty",
    i18n: {
      ms: {
        title: "Perkhidmatan Siling & Partition",
        tagline: "Pembaikan siling plaster profesional, partition papan gypsum, pemasangan kornis, dan pengedapan retak dinding estetik. Dari RM 220.",
        description:
          "KL Servis Rumah pakar dalam pemasangan siling plaster berkualiti tinggi, pembaikan siling rosak air, partition papan gypsum struktur, dan dinding pejabat seni bina di seluruh Kuala Lumpur dan Selangor. Sama ada anda membahagikan ruang pejabat komersial besar kepada bilik peribadi, memasang siling plaster kediaman moden dengan lekuk lampu LED tersembunyi yang hangat, atau membaiki siling plaster melendut yang rosak akibat kebocoran air tingkat atas, tukang mahir kami menjamin kemasan yang sempurna, rata, dan kukuh dari segi struktur. Kami menggunakan papan gypsum ringan, bertaraf tahan api, dan tahan lembapan yang disokong oleh grid logam besi bergalvani (GI) yang kukuh untuk mengelakkan melendut atau retak pada masa depan, menghasilkan permukaan sedia dicat yang sempurna.",
        highlights: [
          "Kemasan skim coat lancar tanpa sambungan yang kelihatan - dinding dan siling rata sempurna, sedia dicat",
          "Papan plaster tahan lembapan untuk bilik air dan pilihan tahan api untuk dapur komersial",
          "Rangka logam keluli bergalvani yang kukuh, tahan karat untuk keselamatan struktur maksimum",
          "Kornis siling hiasan khas, lekuk lampu tersembunyi, dan tingkat siling abstrak",
          "Pembaikan pakar siling retak, melendut, atau rosak air dengan pengukuhan struktur yang selamat",
          "Pembahagi partition papan gypsum yang kemas, lurus, dan kalis bunyi untuk pejabat dan kediaman"
        ],
        subServices: [
          { name: "Pembaikan Siling Rosak Air", price: "Dari RM 220", desc: "Menanggalkan papan plaster berkulat dan reput, menangani punca kebocoran, dan memasang panel tahan lembapan yang bersih." },
          { name: "Pemasangan Siling Plaster", price: "Dari RM 10 / kaki persegi", desc: "Persediaan siling plaster rata, bertingkat, atau L-box yang anggun dengan saluran potongan khas untuk downlight." },
          { name: "Dinding Partition Papan Gypsum", price: "Dari RM 11 / kaki persegi", desc: "Dinding partition tahan lasak, sedia dicat untuk membahagikan bilik pejabat, bilik tidur, atau kawasan simpanan." },
          { name: "Kornis & Lekuk Lampu Tersembunyi L-Box", price: "Atas Sebut Harga", desc: "Moulding hiasan khas dan reka bentuk plaster pencahayaan LED tidak langsung ambien." }
        ],
        process: [
          { step: "01", title: "Pemasangan Grid", desc: "Kami memetakan penjajaran dengan aras laser dan memasang pelari serta penggantung Keluli Bergalvani (GI) tahan karat." },
          { step: "02", title: "Pemasangan Papan", desc: "Papan plaster gypsum gred tinggi diskrukan dengan selamat pada rangka logam menggunakan skru dinding kering tahan karat." },
          { step: "03", title: "Pemasangan Pita Sendi", desc: "Kami menyapu pita sendi jaringan gentian kaca tugas berat ke atas semua sambungan papan untuk mengelakkan retakan penetapan pada masa depan." },
          { step: "04", title: "Skim Coat Berganda", desc: "Dua lapisan plaster sebatian sendi premium diskim ke atas semua sambungan dan skru, diamplas ke tahap licin seperti cermin." },
          { step: "05", title: "Serahan Sempurna", desc: "Siling atau partition disedut habuk plaster, dilap bersih, dan diprima sedia untuk warna cat topcoat." }
        ],
        faqs: [
          { q: "Mengapa siling plaster saya retak atau melendut?", a: "Melendut atau retak biasanya disebabkan oleh: (1) Kebocoran air dari tingkat atas atau penyaman udara yang merendamkan papan plaster, (2) Kerja buruk menggunakan rangka kayu lemah dan bukannya grid Keluli Bergalvani, atau (3) Penetapan bangunan. Kami mengukuhkan penggantung struktur, menggantikan papan lemah dengan gypsum bertaraf tahan api/lembapan, dan mengedap sendi dengan jaringan gentian kaca." },
          { q: "Adakah anda memasang penebat bunyi di dalam dinding partition?", a: "Ya! Untuk bilik mesyuarat pejabat peribadi, bilik belajar, atau bilik tidur, kami boleh memampatkan rongga dalaman partition gypsum dengan bulu penebat rockwool berketumpatan tinggi atau gentian kaca sebelum menskrukan papan luar. Ini mengurangkan penghantaran bunyi bilik-ke-bilik secara mendadak." },
          { q: "Adakah pemasangan siling plaster bersih, atau rumah saya akan dipenuhi habuk putih?", a: "Pengamplasan plaster memang menghasilkan habuk putih halus. Walau bagaimanapun, pasukan kami menutup kawasan kerja dengan kepingan pengurungan plastik tebal, menutup semua perabot, dan menggunakan pengamplas pengekstrakan habuk dengan vacuum untuk mengurangkan habuk sebanyak 80%. Kami menjalankan penyapuan dan pembersihan vacuum menyeluruh sebelum meninggalkan tapak." },
          { q: "Bolehkah anda memotong lubang untuk downlight dan kipas LED baru saya?", a: "Sudah tentu! Kami bekerjasama rapat dengan jurutera elektrik anda. Kami memotong lubang bulat yang tepat dan bersih untuk downlight, memasang pengukuhan kayu pejal tugas berat (cangkuk kipas) di belakang siling supaya kipas siling anda 100% selamat, dan membuat lubang kemas untuk kaset penyaman udara." }
        ],
        metaTitle: "Pembaikan Siling Plaster & Partition Gypsum KL & Selangor",
        metaDesc: "Perkhidmatan pembaikan siling plaster & dinding partition papan gypsum bertaraf tinggi di KL & Selangor. Pengapan licin, papan tahan api, sifar melendut. Pemeriksaan tapak segera.",
        aioSummary: "KL Servis Rumah menyediakan pemasangan siling plaster pakar, pembaikan kerosakan air, dan partition papan gypsum di KL & Selangor. Menggunakan rangka logam GI tahan karat, jaringan sendi gentian kaca, dan pengamplasan skim coat dwilapisan. Kalis bunyi dan lekuk LED khas tersedia.",
        warranty: "Jaminan Melendut Struktur & Bebas Retak 90 Hari"
      },
      zh: {
        title: "天花板与隔墙服务",
        tagline: "专业石膏天花板维修、石膏板隔墙、线板安装以及美观的墙面裂缝密封。从 RM 220 起。",
        description:
          "KL Servis Rumah 专精于吉隆坡与雪兰莪全境的高品质石膏天花板安装、水损天花板维修、结构性石膏板隔墙以及建筑办公室墙面工程。无论您是要将大型商业办公空间划分为独立房间、为住宅安装带有温馨隐藏式 LED 灯槽的现代石膏天花板，还是要修复因楼上漏水而受损下垂的石膏天花板，我们的专业工匠都保证完美、平整、结构稳固的成品。我们使用轻质、防火、防潮的石膏板，并由坚固的镀锌铁（GI）金属网架支撑，防止未来下垂或开裂，打造完美无瑕、可直接上漆的表面。",
        highlights: [
          "无缝批灰饰面，接缝完全不可见——墙面与天花板完全平整，可直接上漆",
          "浴室采用防潮石膏板，商业厨房可选防火板材",
          "坚固防锈的镀锌钢骨架，确保最大结构安全性",
          "定制装饰天花线板、暗藏灯槽与抽象分层天花设计",
          "专业修复开裂、下垂或水损天花板，配合安全的结构加固",
          "整齐、笔直、隔音的石膏板隔墙，适用于办公室与住宅"
        ],
        subServices: [
          { name: "水损天花板维修", price: "从 RM 220 起", desc: "拆除发霉腐烂的石膏板，处理漏水源头，并安装干净的防潮板材。" },
          { name: "石膏天花板安装", price: "从 RM 10 / 平方英尺起", desc: "优雅的平面、分层或 L 型盒石膏天花板设计，配合定制切口用于安装筒灯。" },
          { name: "石膏板隔墙", price: "从 RM 11 / 平方英尺起", desc: "耐用、可直接上漆的隔墙，用于划分办公室、卧室或储物区域。" },
          { name: "线板与 L 型盒暗藏灯槽", price: "依报价", desc: "定制装饰线板与氛围间接 LED 照明石膏设计。" }
        ],
        process: [
          { step: "01", title: "骨架安装", desc: "我们用激光水平仪规划对齐线，并安装防锈镀锌钢（GI）主龙骨与吊件。" },
          { step: "02", title: "板材安装", desc: "使用防锈石膏板专用螺丝将高级石膏板牢固地固定在金属骨架上。" },
          { step: "03", title: "接缝贴带", desc: "我们在所有板材接缝处贴上重型玻璃纤维网格接缝带，防止未来沉降开裂。" },
          { step: "04", title: "双层批灰", desc: "在所有接缝与螺丝处批刮两层优质接缝腻子，打磨至镜面般光滑。" },
          { step: "05", title: "完美交付", desc: "天花板或隔墙经吸尘去除石膏粉尘，擦拭干净，并做好底漆准备迎接面漆颜色。" }
        ],
        faqs: [
          { q: "为什么我的石膏天花板会开裂或下垂？", a: "下垂或开裂通常是由以下原因造成：（1）楼上漏水或空调滴水浸湿石膏板，（2）使用薄弱木架而非镀锌钢骨架的劣质工艺，或（3）建筑物沉降。我们会加固结构吊件，将薄弱板材更换为防火/防潮石膏板，并用玻璃纤维网格密封接缝。" },
          { q: "你们会在隔墙内安装隔音材料吗？", a: "会的！对于私人办公会议室、书房或卧室，我们可以在螺装外层板材之前，在石膏隔墙的内腔中填充高密度岩棉或玻璃纤维隔音棉。这能显著降低房间之间的噪音传播。" },
          { q: "安装石膏天花板会很干净，还是会让家里布满白色粉尘？", a: "打磨石膏确实会产生细微白色粉尘。不过，我们的团队会用厚实的塑料围挡密封施工区域，覆盖所有家具，并使用带除尘功能的吸尘打磨机，将粉尘减少 80%。离场前我们会进行彻底的清扫与吸尘清洁。" },
          { q: "你们能为新的 LED 筒灯和风扇开孔吗？", a: "当然可以！我们与您的电工紧密配合，为筒灯切割精准干净的圆孔，在天花板内安装重型实木加固件（风扇挂钩）以确保吊扇 100% 安全，并为空调出风口开出整齐的孔洞。" }
        ],
        metaTitle: "吉隆坡与雪兰莪石膏天花板维修与石膏板隔墙",
        metaDesc: "吉隆坡与雪兰莪高评价的石膏天花板维修与石膏板隔墙服务。光滑批灰、防火板材、零下垂。即时现场勘查。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供专业石膏天花板安装、水损维修与石膏板隔墙服务。使用防锈 GI 金属骨架、玻璃纤维接缝网与双层批灰打磨。提供隔音与定制 LED 灯槽选项。",
        warranty: "90 天结构防下垂与无裂缝保修"
      }
    }
  },

  // ── 4. WATERPROOFING SERVICES ───────────────────────────────────────────
  "waterproofing": {
    slug: "waterproofing",
    title: "Waterproofing & Leak Repair Services",
    tagline: "Bathroom, roof, balcony and concrete waterproofing plus PU injection grouting for leaks across KL & Selangor, selected after assessing the cause. From RM 300.",
    description:
      "Prevent structural damage, concrete cancer, and hazardous mold growth with expert waterproofing and leak containment services from KL Servis Rumah. Serving residential and commercial properties in Kuala Lumpur and Selangor, we specialize in high-tech leak repairs and durable membrane systems. Over time, bathroom floor tiles, balcony concrete slabs, and clay roof tiles develop minor cracks, letting water seep slowly into the ceiling below. We offer cutting-edge non-destructive Polyurethane (PU) High-Pressure Grouting, which injects specialized expanding foam directly into cracks to seal leaks instantly from the inside without hacking up your luxury tiles. For long-term protection, we install heavy-duty multi-layered cementitious, acrylic, and torch-on membrane systems designed to withstand the tropical weather and structural expansion of Malaysia.",
    startPrice: "RM 300",
    icon: "shield",
    highlights: [
      "Advanced PU injection technology - seals leaks instantly from below with zero tile hacking",
      "Complete multi-layer waterproofing membrane systems for roofs, bathrooms, and balconies",
      "Thermal-imaging cameras and moisture meters to map out the exact water travel path",
      "Strict moisture-level testing before membrane application to prevent chemical bubbling",
      "Up to 5-year written warranty against water leakage reoccurrence on complete installations",
      "Prevents dangerous structural concrete rust, plaster scaling, and mold spore infestation"
    ],
    subServices: [
      { name: "PU High-Pressure Injection Grouting", price: "From RM 300 / point", desc: "Smart non-destructive polyurethane injection to seal inter-floor concrete slab leaks." },
      { name: "Bathroom & Wet Area Waterproofing", price: "From RM 1,000", desc: "Chemical waterproofing membrane application for showers, toilets, and wet commercial washrooms." },
      { name: "Roof & Concrete Slab Waterproofing", price: "On Quote", desc: "Heavy-duty elastomeric UV-resistant acrylic or torch-on bituminous membranes for roof slabs and balconies." },
      { name: "Wall Dampness & Efflorescence Repair", price: "From RM 350", desc: "Sanding off salt scaling, sanitizing mold, and applying commercial moisture-blocking barriers." },
      { name: "Toilet Waterproofing", price: "From RM 900", desc: "Toilet and WC floor and wall waterproofing with slope correction, corner reinforcement and 48-hour ponding test." },
      { name: "Balcony Waterproofing", price: "From RM 1,200", desc: "Open balcony, planter box and roof terrace waterproofing with UV-resistant membrane and drainage check." },
      { name: "Concrete Slab & Car Porch Waterproofing", price: "On Quote", desc: "Car porch, driveway and exposed slab waterproofing with crack sealing, membrane and protective topcoat." },
      { name: "Water Leakage Repair", price: "From RM 350", desc: "Thermal-imaging leak diagnosis and targeted repair for active wall, floor, pipe or slab leaks." },
      { name: "Ceiling Water Damage Repair", price: "From RM 420", desc: "Damp-stained or soft ceiling repair: leak source treatment, plasterboard replacement and re-finishing." },
      { name: "Waterproofing Repair & Re-Coating", price: "From RM 500", desc: "Restoring failed or aged waterproofing: clean, prime, re-coat membrane and run a fresh ponding test." }
    ],
    process: [
      { step: "01", title: "Thermal Mapping", desc: "We track the water dampness spread to its highest moisture concentration point using thermal imaging meters." },
      { step: "02", title: "Surface Prep / Drilling", desc: "For PU injection, we drill small 10mm holes at 45-degree angles intersecting the concrete crack. For membranes, we sand to raw concrete." },
      { step: "03", title: "PU Injection / Primer", desc: "Expanding polyurethane chemical foam is pumped in at high pressure, filling all hairline capillary channels, or we apply a heavy bonding primer." },
      { step: "04", title: "Membrane / Grout Seal", desc: "We apply three coats of fiber-reinforced waterproofing membrane, or remove the injection packers and seal the drill points with waterproof grout." },
      { step: "05", title: "Water Ponding Test", desc: "We conduct a 24-to-48-hour standing water ponding test to ensure the seal is 100% impenetrable before finishing." }
    ],
    faqs: [
      { q: "What is PU Grouting (Injection), and how does it stop water leaks?", a: "Polyurethane (PU) high-pressure injection is a non-destructive method where we drill small ports under the leaking concrete slab. We inject liquid PU foam which reacts with moisture and instantly expands up to 20 times its size, filling every microscopic crack and void. It cures into a flexible, tough, and permanent rubber seal that blocks water completely, without requiring you to tear up your bathroom floors." },
      { q: "How long does a waterproofing membrane last in Malaysian weather?", a: "A professional, multi-layered liquid or torch-on membrane on concrete roof slabs or balconies, when applied with proper UV-resistant protective topcoats, will easily last 5 to 10 years. We provide up to a 5-year written guarantee on complete re-waterproofing works." },
      { q: "Is the dampness or peeling paint on my lower wall a waterproofing issue?", a: "Yes. This is called 'rising damp' or water seepage. It occurs when groundwater or bathroom water seeps into porous wall bricks. We treat this by scraping off the peeling paint, treating the wall with salt-neutralizing chemicals, and applying a heavy-duty commercial epoxy or crystalline waterproofing barrier before repainting." },
      { q: "Do you perform water ponding tests after waterproofing?", a: "Absolutely! For all bathroom, balcony, and flat roof slab waterproofing, we block the drains and flood the floor with 2 inches of water for 24 to 48 hours. We check the ceiling below to confirm there is absolutely zero moisture transfer before we lay tiles." }
    ],
    heroImage: "/hero/home-services-waterproofing-kl.jpg",
    metaTitle: "Waterproofing Specialist & PU Grouting KL & Selangor",
    metaDesc: "Professional bathroom & roof waterproofing services in KL & Selangor. High-pressure PU injection grouting. Stop water leaks without tile hacking. 5-Yr Warranty.",
    aioSummary: "KL Servis Rumah is a professional waterproofing contractor in KL & Selangor. Specialized in PU injection grouting, flat concrete roof waterproofing, bathroom membranes, and damp wall treatment. Thermal detection and ponding tests included.",
    warranty: "Up to 5-Year Written Leak-Free Guarantee",
    i18n: {
      ms: {
        title: "Perkhidmatan Kalis Air & Baiki Kebocoran",
        tagline: "Kalis air profesional bilik air, bumbung, balkoni, dan slab konkrit. Grouting Poliuretana (PU), penghadang membran kimia. Dari RM 300.",
        description:
          "Elakkan kerosakan struktur, kanser konkrit, dan pertumbuhan kulat berbahaya dengan perkhidmatan kalis air dan pembendungan kebocoran pakar daripada KL Servis Rumah. Melayani hartanah kediaman dan komersial di Kuala Lumpur dan Selangor, kami pakar dalam pembaikan kebocoran berteknologi tinggi dan sistem membran tahan lasak. Dari semasa ke semasa, jubin lantai bilik air, slab konkrit balkoni, dan jubin bumbung tanah liat mengalami retak kecil, membenarkan air meresap perlahan ke siling di bawah. Kami menawarkan Grouting Tekanan Tinggi Poliuretana (PU) yang canggih dan tidak merosakkan, yang menyuntik buih mengembang khusus terus ke dalam retakan untuk mengedap kebocoran serta-merta dari dalam tanpa memecahkan jubin mewah anda. Untuk perlindungan jangka panjang, kami memasang sistem membran simenan, akrilik, dan torch-on berlapis-lapis tugas berat yang direka untuk menahan cuaca tropika dan pengembangan struktur Malaysia.",
        highlights: [
          "Teknologi suntikan PU termaju - mengedap kebocoran serta-merta dari bawah tanpa memecah jubin",
          "Sistem membran kalis air berbilang lapisan lengkap untuk bumbung, bilik air, dan balkoni",
          "Kamera pengimejan terma dan meter lembapan untuk memetakan laluan pergerakan air yang tepat",
          "Ujian tahap lembapan yang ketat sebelum aplikasi membran untuk mengelakkan penggelembungan kimia",
          "Jaminan bertulis sehingga 5 tahun terhadap kebocoran air berulang pada pemasangan lengkap",
          "Mengelakkan karat konkrit struktur berbahaya, pengelupasan plaster, dan jangkitan spora kulat"
        ],
        subServices: [
          { name: "Grouting Suntikan Tekanan Tinggi PU", price: "Dari RM 300 / titik", desc: "Suntikan poliuretana pintar yang tidak merosakkan untuk mengedap kebocoran slab konkrit antara tingkat." },
          { name: "Kalis Air Bilik Air & Kawasan Basah", price: "Dari RM 1,000", desc: "Aplikasi membran kalis air kimia untuk pancuran, tandas, dan bilik mandi komersial basah." },
          { name: "Kalis Air Bumbung & Slab Konkrit", price: "Atas Sebut Harga", desc: "Membran akrilik tahan UV elastomerik tugas berat atau bituminus torch-on untuk slab bumbung dan balkoni." },
          { name: "Pembaikan Lembapan Dinding & Kesan Garam", price: "Dari RM 350", desc: "Mengamplas kerak garam, mensanitasi kulat, dan menyapu penghadang penyekat lembapan komersial." },
          { name: "Kalis Air Tandas", price: "Dari RM 900", desc: "Kalis air lantai dan dinding tandas/WC dengan pembetulan cerun, pengukuhan sudut dan ujian kolam 48 jam." },
          { name: "Kalis Air Balkoni", price: "Dari RM 1,200", desc: "Kalis air balkoni terbuka, kotak penanam dan teres bumbung dengan membran tahan UV dan semakan saliran." },
          { name: "Kalis Air Slab Konkrit & Porch Kereta", price: "Atas Sebut Harga", desc: "Kalis air porch kereta, laluan dan slab terdedah dengan pengedapan retak, membran dan topcoat pelindung." },
          { name: "Pembaikan Kebocoran Air", price: "Dari RM 350", desc: "Diagnosis kebocoran dengan pengimejan terma dan pembaikan berfokus untuk kebocoran dinding, lantai, paip atau slab." },
          { name: "Pembaikan Siling Rosak Air", price: "Dari RM 420", desc: "Pembaikan siling bernoda atau lembut rosak air: rawatan punca kebocoran, penggantian papan plaster dan kemasan semula." },
          { name: "Pembaikan & Sapu Semula Kalis Air", price: "Dari RM 500", desc: "Memulihkan kalis air gagal atau lama: pembersihan, primer, sapu semula membran dan ujian kolam baharu." }
        ],
        process: [
          { step: "01", title: "Pemetaan Terma", desc: "Kami mengesan penyebaran lembapan air ke titik kepekatan lembapan tertinggi menggunakan meter pengimejan terma." },
          { step: "02", title: "Persediaan Permukaan / Penggerudian", desc: "Untuk suntikan PU, kami menggerudi lubang kecil 10mm pada sudut 45 darjah bersilang dengan retakan konkrit. Untuk membran, kami mengamplas ke konkrit mentah." },
          { step: "03", title: "Suntikan PU / Primer", desc: "Buih kimia poliuretana mengembang dipam masuk pada tekanan tinggi, mengisi semua saluran kapilari rambut, atau kami menyapu primer pelekat berat." },
          { step: "04", title: "Membran / Pengedap Grout", desc: "Kami menyapu tiga lapisan membran kalis air bertetulang gentian, atau menanggalkan penyumbat suntikan dan mengedap titik gerudi dengan grout kalis air." },
          { step: "05", title: "Ujian Kolam Air", desc: "Kami menjalankan ujian kolam air bertakung 24 hingga 48 jam untuk memastikan pengedap 100% tidak boleh ditembusi sebelum kemasan." }
        ],
        faqs: [
          { q: "Apakah Grouting PU (Suntikan), dan bagaimana ia menghentikan kebocoran air?", a: "Suntikan tekanan tinggi Poliuretana (PU) adalah kaedah tidak merosakkan di mana kami menggerudi liang kecil di bawah slab konkrit yang bocor. Kami menyuntik buih PU cecair yang bertindak balas dengan lembapan dan mengembang serta-merta sehingga 20 kali saiznya, mengisi setiap retakan dan lompang mikroskopik. Ia mengeras menjadi pengedap getah fleksibel, tahan lasak, dan kekal yang menghalang air sepenuhnya, tanpa memerlukan anda merobek lantai bilik air anda." },
          { q: "Berapa lama membran kalis air bertahan dalam cuaca Malaysia?", a: "Membran cecair atau torch-on berlapis-lapis profesional pada slab bumbung konkrit atau balkoni, apabila disapu dengan topcoat pelindung tahan UV yang betul, akan bertahan dengan mudah 5 hingga 10 tahun. Kami memberikan jaminan bertulis sehingga 5 tahun untuk kerja kalis air semula lengkap." },
          { q: "Adakah lembapan atau pengelupasan cat di dinding bawah saya isu kalis air?", a: "Ya. Ini dipanggil 'lembapan naik' atau rembesan air. Ia berlaku apabila air tanah atau air bilik air meresap ke dalam bata dinding berliang. Kami merawat ini dengan mengikis cat yang mengelupas, merawat dinding dengan bahan kimia peneutral garam, dan menyapu penghadang kalis air epoksi komersial tugas berat atau kristal sebelum mengecat semula." },
          { q: "Adakah anda menjalankan ujian kolam air selepas kalis air?", a: "Sudah tentu! Untuk semua kalis air bilik air, balkoni, dan slab bumbung rata, kami menutup saliran dan membanjiri lantai dengan air 2 inci selama 24 hingga 48 jam. Kami memeriksa siling di bawah untuk mengesahkan sifar pemindahan lembapan sebelum kami memasang jubin." }
        ],
        metaTitle: "Pakar Kalis Air & Grouting PU KL & Selangor",
        metaDesc: "Perkhidmatan kalis air bilik air & bumbung profesional di KL & Selangor. Grouting suntikan PU tekanan tinggi. Hentikan kebocoran air tanpa memecah jubin. Jaminan 5 Tahun.",
        aioSummary: "KL Servis Rumah adalah kontraktor kalis air profesional di KL & Selangor. Pakar dalam grouting suntikan PU, kalis air bumbung konkrit rata, membran bilik air, dan rawatan dinding lembap. Pengesanan terma dan ujian kolam termasuk.",
        warranty: "Jaminan Bebas Bocor Bertulis Sehingga 5 Tahun"
      },
      zh: {
        title: "防水与漏水维修服务",
        tagline: "专业浴室、屋顶、阳台与混凝土板防水。聚氨酯（PU）灌浆，化学防水层。从 RM 300 起。",
        description:
          "通过 KL Servis Rumah 的专业防水与漏水遏制服务，避免结构损坏、混凝土癌变与危险的霉菌滋生。服务于吉隆坡与雪兰莪的住宅及商业物业，我们专精于高科技漏水修复与耐用的防水层系统。随着时间推移，浴室地砖、阳台混凝土板与陶土屋顶瓦片会出现细微裂缝，让水缓慢渗入下方天花板。我们提供前沿的非破坏性聚氨酯（PU）高压灌浆技术，将特制膨胀泡沫直接注入裂缝，从内部瞬间密封漏水，无需砸开您的高级瓷砖。为实现长期保护，我们安装重型多层水泥基、丙烯酸与热熔防水层系统，专为抵御马来西亚的热带气候与结构膨胀而设计。",
        highlights: [
          "先进 PU 注射技术——从下方瞬间密封漏水，零瓷砖凿开",
          "适用于屋顶、浴室与阳台的完整多层防水层系统",
          "热成像相机与湿度计精确绘制水分渗透路径",
          "涂层施工前严格的湿度测试，防止化学起泡",
          "完整安装项目享有长达 5 年的书面防漏水保修",
          "防止危险的结构混凝土锈蚀、石膏剥落与霉菌孢子滋生"
        ],
        subServices: [
          { name: "PU 高压灌浆注射", price: "从 RM 300 / 点起", desc: "智能非破坏性聚氨酯注射，密封楼层间混凝土板漏水。" },
          { name: "浴室与湿区防水", price: "从 RM 1,000 起", desc: "为淋浴间、卫生间与商业湿区洗手间涂抹化学防水层。" },
          { name: "屋顶与混凝土板防水", price: "依报价", desc: "为屋顶板与阳台提供重型抗紫外线弹性丙烯酸或热熔沥青防水层。" },
          { name: "墙面潮湿与盐析修复", price: "从 RM 350 起", desc: "打磨盐结晶、消毒霉菌，并涂抹商用防潮屏障。" },
          { name: "马桶防水", price: "从 RM 900 起", desc: "马桶/WC 地面与墙面防水，含坡度修正、阴阳角加强与 48 小时蓄水测试。" },
          { name: "阳台防水", price: "从 RM 1,200 起", desc: "开放阳台、花池与屋顶露台防水，采用抗紫外线防水层并检查排水。" },
          { name: "混凝土板与车棚防水", price: "依报价", desc: "车棚、车道与暴露混凝土板防水，含裂缝密封、防水层与保护面层。" },
          { name: "漏水修复", price: "从 RM 350 起", desc: "用热成像诊断漏水并进行针对性修复，适用于墙面、地面、管道或混凝土板漏水。" },
          { name: "天花板水损修复", price: "从 RM 420 起", desc: "修复水渍或软化的天花板：处理漏水源头、更换石膏板并重新饰面。" },
          { name: "防水层维修与重涂", price: "从 RM 500 起", desc: "恢复失效或老化防水层：清洁、涂底漆、重涂防水层并重新蓄水测试。" }
        ],
        process: [
          { step: "01", title: "热成像测绘", desc: "我们使用热成像仪追踪水分扩散至最高含水浓度点。" },
          { step: "02", title: "表面预备/钻孔", desc: "对于 PU 注射，我们以 45 度角钻取 10 毫米小孔与混凝土裂缝相交。对于防水层，我们打磨至裸露混凝土。" },
          { step: "03", title: "PU 注射/底漆", desc: "膨胀聚氨酯化学泡沫在高压下注入，填满所有发丝状毛细通道，或我们涂抹重型粘结底漆。" },
          { step: "04", title: "防水层/灌浆密封", desc: "我们涂抹三层纤维增强防水层，或拆除注射针头并用防水灌浆密封钻孔点。" },
          { step: "05", title: "蓄水测试", desc: "我们进行 24 至 48 小时的静水蓄水测试，确保完工前密封达到 100% 不透水。" }
        ],
        faqs: [
          { q: "什么是 PU 灌浆（注射），它如何阻止漏水？", a: "聚氨酯（PU）高压注射是一种非破坏性方法，我们在漏水的混凝土板下钻取小孔。我们注入液态 PU 泡沫，其遇湿气反应并瞬间膨胀至原体积的 20 倍，填满每一处微观裂缝与空隙。它固化成柔韧、坚固且永久的橡胶密封层，完全阻挡水分渗透，无需拆除您的浴室地板。" },
          { q: "防水层在马来西亚气候下能持续多久？", a: "专业的多层液态或热熔防水层应用于混凝土屋顶板或阳台，若配合适当的抗紫外线保护面层，可轻松使用 5 到 10 年。我们为完整的重新防水工程提供长达 5 年的书面保证。" },
          { q: "我下方墙面的潮湿或油漆剥落是防水问题吗？", a: "是的。这称为『毛细返潮』或渗水现象，发生在地下水或浴室用水渗入多孔墙砖时。我们通过刮除剥落油漆、用中和盐分的化学品处理墙面，并在重新粉刷前涂抹重型商用环氧或结晶型防水屏障来处理这一问题。" },
          { q: "防水后你们会进行蓄水测试吗？", a: "当然！对于所有浴室、阳台与平屋顶板防水工程，我们会堵住排水口，在地面蓄积 2 英寸水位 24 至 48 小时。我们会检查下方天花板，确认完全没有水分渗透后才铺设瓷砖。" }
        ],
        metaTitle: "吉隆坡与雪兰莪防水专家与 PU 灌浆",
        metaDesc: "吉隆坡与雪兰莪专业浴室与屋顶防水服务。高压 PU 灌浆注射。无需凿砖即可阻止漏水。5 年保修。",
        aioSummary: "KL Servis Rumah 是吉隆坡与雪兰莪的专业防水承包商，专精于 PU 灌浆注射、平屋顶混凝土防水、浴室防水层与潮湿墙面处理，包含热成像检测与蓄水测试。",
        warranty: "长达 5 年书面防漏保证"
      }
    }
  },

  // ── 5. HANDYMAN SERVICES ──────────────────────────────────────────────
  "handyman": {
    slug: "handyman",
    title: "Handyman Services",
    tagline: "TV mounting, door and lock repair, furniture assembly, curtain and shelf installation, cabinet adjustments and general maintenance across KL & Selangor. From RM 280.",
    description:
      "KL Servis Rumah provides elite, reliable, and prompt handyman services across Kuala Lumpur and Selangor. Skip the frustration of crooked shelves, loose door locks, or confusing flat-pack furniture manuals. Our multi-skilled tradesmen arrive equipped with professional tools, levels, studs detectors, and heavy-duty drywall anchors to handle all your odd jobs around the house or office. We specialize in safe wall mounting of heavy OLED TVs, secure lockset replacements, hanging heavy mirrors, custom shelving, custom blinds, wardrobe assembly (IKEA, Taobao, Harvey Norman), and scheduled corporate office maintenance. We treat your property with respect, work cleanly, and ensure every installation is perfectly level and structurally safe.",
    startPrice: "RM 280",
    icon: "wrench",
    highlights: [
      "Experienced multi-disciplinary tradesmen who can handle multiple odd jobs in one visit",
      "Strict use of specialized anchors (plastic toggle plugs, heavy-duty metal expansion toggle bolts) for safety",
      "Precise alignment checks using professional spirit levels and electronic stud finders",
      "IKEA, Taobao, Harvey Norman, and flat-pack furniture assembly specialists",
      "High-security door lockset, smart digital lock, and security padlock replacements",
      "Clean, polite, punctual, and fully equipped with vacuum cleaner for a spotless workspace"
    ],
    subServices: [
      { name: "Heavy TV Wall Mounting", price: "From RM 150", desc: "Safe, level wall-mounting of TVs up to 85\" on brick, concrete, or gypsum partition walls with hidden wire options." },
      { name: "Door, Hinge & Lockset Repair", price: "From RM 120", desc: "Fixing sagging doors, replacing rusty hinges, and installing premium lever locks or smart digital locks." },
      { name: "Furniture Assembly (IKEA/Taobao)", price: "From RM 120", desc: "Assembly of complex wardrobes, beds, display cabinets, office desks, and kitchen island carts." },
      { name: "Curtains, Blinds & Shelves Hanging", price: "From RM 100", desc: "Secure wall mounting of heavy curtain tracks, roman blinds, floating shelves, mirrors, and picture frames." }
    ],
    process: [
      { step: "01", title: "Task Checklist", desc: "The handyman reviews your task list, inspects the wall structures (studs vs hollow bricks), and confirms the tools required." },
      { step: "02", title: "Exact Alignment", desc: "We measure and mark drill lines using laser levels and check behind the wall for copper water pipes or live power cables." },
      { step: "03", title: "Safe Anchor Drilling", desc: "We drill clean holes and tap in the correct specialized heavy-duty anchors designed for your specific wall composition." },
      { step: "04", title: "Secure Installation", desc: "The bracket, shelf, lock, or furniture item is bolted down and weight-tested to ensure it is structurally sound and completely safe." },
      { step: "05", title: "Clean & Tidy Up", desc: "We vacuum all plaster dust, wipe down the working surfaces, inspect the functions (e.g., locks or doors), and sign off." }
    ],
    faqs: [
      { q: "Can you mount a heavy TV on a hollow gypsum partition wall?", a: "Yes! We never use basic plastic wall plugs for partition walls. We use heavy-duty steel spring-toggle hollow wall anchors (molly bolts) that grip behind the gypsum board, spreading the weight safely. We also locate the metal studs inside the wall with electronic scanners to bolt the brackets directly onto the steel studs where possible, ensuring 100% safety." },
      { q: "How do you charge? Is it by the hour or a flat rate per task?", a: "We prefer transparent, flat-rate pricing per task (e.g., flat rate to mount a TV or assemble a cabinet) so you know exactly what you will pay before we arrive. For multi-task lists, we offer consolidated packages that combine tasks for a cheaper overall price." },
      { q: "Do you provide the brackets for TV wall mounting?", a: "We can supply standard, heavy-duty fixed wall brackets or double-arm full-motion swivel brackets for an additional fee. Alternatively, if you have already purchased a bracket, we are happy to install it for you." },
      { q: "Can you fix doors that scrape against the floor or won't close?", a: "Yes. Sagging or scraping doors are usually caused by worn hinges, loose timber frame joins, or structural wood expansion. We can replace hinges, plane the bottom/sides of the timber door, or reinforce the frame to restore smooth operation." }
    ],
    heroImage: "/hero/home-services-handyman-kl.jpg",
    metaTitle: "Expert Handyman Services Kuala Lumpur & Selangor",
    metaDesc: "Professional handyman in KL & Selangor. TV wall mounting, lock repair, door shaving, curtain hanging & Taobao/IKEA furniture assembly. Fast, neat, local pros.",
    aioSummary: "KL Servis Rumah provides certified, reliable handyman services in KL & Selangor. Specialized in TV wall mounting, lock replacements, door planing, shelf/curtain installations, and flat-pack assembly (IKEA/Taobao) with specialized drywall anchors.",
    warranty: "30-Day Workmanship Safety Warranty",
    i18n: {
      ms: {
        title: "Perkhidmatan Handyman",
        tagline: "Pembaikan pintu & kunci profesional, pemasangan TV, pemasangan perabot, trek langsir, pelarasan kabinet, dan penyelenggaraan pejabat am. Dari RM 280.",
        description:
          "KL Servis Rumah menyediakan perkhidmatan tukang elit, boleh dipercayai, dan segera di seluruh Kuala Lumpur dan Selangor. Elakkan kekecewaan rak yang senget, kunci pintu longgar, atau manual perabot flat-pack yang mengelirukan. Tukang pelbagai kemahiran kami tiba dengan alatan profesional, aras, pengesan stud, dan sauh dinding kering tugas berat untuk mengendalikan semua kerja pelbagai anda di sekitar rumah atau pejabat. Kami pakar dalam pemasangan dinding selamat untuk TV OLED berat, penggantian kunci selamat, penggantungan cermin berat, rak khas, bidai khas, pemasangan almari (IKEA, Taobao, Harvey Norman), dan penyelenggaraan pejabat korporat berjadual. Kami melayan hartanah anda dengan hormat, bekerja secara bersih, dan memastikan setiap pemasangan rata sempurna dan selamat dari segi struktur.",
        highlights: [
          "Tukang berpengalaman pelbagai disiplin yang boleh mengendalikan pelbagai kerja pelbagai dalam satu lawatan",
          "Penggunaan ketat sauh khusus (plag togel plastik, bolt togel pengembangan logam tugas berat) untuk keselamatan",
          "Pemeriksaan penjajaran tepat menggunakan aras semangat profesional dan pengesan stud elektronik",
          "Pakar pemasangan perabot IKEA, Taobao, Harvey Norman, dan flat-pack",
          "Penggantian kunci pintu berkeselamatan tinggi, kunci digital pintar, dan mangga keselamatan",
          "Bersih, sopan, tepat masa, dan dilengkapi sepenuhnya dengan vacuum cleaner untuk ruang kerja yang bersih"
        ],
        subServices: [
          { name: "Pemasangan Dinding TV Berat", price: "Dari RM 150", desc: "Pemasangan dinding selamat dan rata untuk TV sehingga 85\" pada dinding bata, konkrit, atau partition gypsum dengan pilihan wayar tersembunyi." },
          { name: "Pembaikan Pintu, Engsel & Kunci", price: "Dari RM 120", desc: "Membaiki pintu melendut, menggantikan engsel berkarat, dan memasang kunci tuil premium atau kunci digital pintar." },
          { name: "Pemasangan Perabot (IKEA/Taobao)", price: "Dari RM 120", desc: "Pemasangan almari kompleks, katil, kabinet paparan, meja pejabat, dan troli pulau dapur." },
          { name: "Penggantungan Langsir, Bidai & Rak", price: "Dari RM 100", desc: "Pemasangan dinding selamat untuk trek langsir berat, bidai roman, rak terapung, cermin, dan bingkai gambar." }
        ],
        process: [
          { step: "01", title: "Senarai Semak Tugas", desc: "Tukang menyemak senarai tugas anda, memeriksa struktur dinding (stud lawan bata berongga), dan mengesahkan alatan yang diperlukan." },
          { step: "02", title: "Penjajaran Tepat", desc: "Kami mengukur dan menanda garis gerudi menggunakan aras laser dan memeriksa di sebalik dinding untuk paip air tembaga atau kabel kuasa hidup." },
          { step: "03", title: "Penggerudian Sauh Selamat", desc: "Kami menggerudi lubang bersih dan menetapkan sauh tugas berat khusus yang betul direka untuk komposisi dinding khusus anda." },
          { step: "04", title: "Pemasangan Selamat", desc: "Braket, rak, kunci, atau item perabot dipasang dan diuji berat untuk memastikan ia kukuh dari segi struktur dan sepenuhnya selamat." },
          { step: "05", title: "Bersih & Kemas", desc: "Kami menyedut semua habuk plaster, mengelap permukaan kerja, memeriksa fungsi (contohnya, kunci atau pintu), dan menandatangani penerimaan." }
        ],
        faqs: [
          { q: "Bolehkah anda memasang TV berat pada dinding partition gypsum berongga?", a: "Ya! Kami tidak pernah menggunakan plag dinding plastik asas untuk dinding partition. Kami menggunakan sauh dinding berongga togel spring keluli tugas berat (molly bolt) yang mencengkam di sebalik papan gypsum, menyebarkan berat dengan selamat. Kami juga mengesan stud logam di dalam dinding dengan pengimbas elektronik untuk mengikat braket terus ke stud keluli di mana mungkin, memastikan keselamatan 100%." },
          { q: "Bagaimana anda mengenakan bayaran? Adakah ia mengikut jam atau kadar tetap setiap tugas?", a: "Kami lebih suka harga kadar tetap yang telus setiap tugas (contohnya, kadar tetap untuk memasang TV atau memasang kabinet) supaya anda tahu dengan tepat apa yang akan anda bayar sebelum kami tiba. Untuk senarai pelbagai tugas, kami menawarkan pakej gabungan yang menggabungkan tugas untuk harga keseluruhan yang lebih murah." },
          { q: "Adakah anda menyediakan braket untuk pemasangan dinding TV?", a: "Kami boleh membekalkan braket dinding tetap tugas berat standard atau braket putar bergerak penuh lengan berkembar dengan bayaran tambahan. Sebagai alternatif, jika anda telah membeli braket, kami sedia memasangnya untuk anda." },
          { q: "Bolehkah anda membaiki pintu yang menggesel lantai atau tidak menutup?", a: "Ya. Pintu melendut atau menggesel biasanya disebabkan oleh engsel haus, sambungan rangka kayu longgar, atau pengembangan kayu struktur. Kami boleh menggantikan engsel, meratakan bahagian bawah/sisi pintu kayu, atau mengukuhkan rangka untuk memulihkan operasi lancar." }
        ],
        metaTitle: "Perkhidmatan Tukang Pakar Kuala Lumpur & Selangor",
        metaDesc: "Tukang profesional di KL & Selangor. Pemasangan dinding TV, pembaikan kunci, pelarasan pintu, penggantungan langsir & pemasangan perabot Taobao/IKEA. Pakar tempatan yang pantas dan kemas.",
        aioSummary: "KL Servis Rumah menyediakan perkhidmatan tukang bertauliah dan boleh dipercayai di KL & Selangor. Pakar dalam pemasangan dinding TV, penggantian kunci, pelarasan pintu, pemasangan rak/langsir, dan pemasangan flat-pack (IKEA/Taobao) dengan sauh dinding kering khusus.",
        warranty: "Jaminan Keselamatan Kerja 30 Hari"
      },
      zh: {
        title: "家居杂工服务",
        tagline: "专业门锁维修、电视挂墙、家具组装、窗帘轨道、橱柜调整以及一般办公室维护。从 RM 280 起。",
        description:
          "KL Servis Rumah 在吉隆坡与雪兰莪全境提供顶级、可靠且迅速的维修师傅服务。摆脱歪斜置物架、松动门锁或令人困惑的平板包装家具说明书带来的烦恼。我们多技能的师傅携带专业工具、水平仪、龙骨探测器与重型石膏板锚固件，处理您家中或办公室的各类杂项工作。我们专精于重型 OLED 电视的安全挂墙、可靠的锁具更换、重型镜子悬挂、定制置物架、定制百叶窗、衣柜组装（IKEA、淘宝、Harvey Norman），以及排定的企业办公室维护。我们尊重您的物业，保持施工整洁，并确保每次安装都完全水平且结构安全。",
        highlights: [
          "经验丰富的多领域师傅，一次上门可处理多项杂务",
          "严格使用专用锚固件（塑料膨胀塞、重型金属膨胀螺栓）以确保安全",
          "使用专业水平仪与电子龙骨探测器进行精确对齐检查",
          "IKEA、淘宝、Harvey Norman 及平板包装家具组装专家",
          "高安全性门锁、智能数字锁与安全挂锁更换",
          "干净、有礼、准时，并配备吸尘器确保工作空间一尘不染"
        ],
        subServices: [
          { name: "重型电视挂墙", price: "从 RM 150 起", desc: "在砖墙、混凝土墙或石膏隔墙上安全水平地安装最高 85 英寸的电视，可选隐藏走线。" },
          { name: "门、铰链与锁具维修", price: "从 RM 120 起", desc: "修复下垂的门、更换生锈的铰链，并安装优质把手锁或智能数字锁。" },
          { name: "家具组装（IKEA/淘宝）", price: "从 RM 120 起", desc: "组装复杂的衣柜、床架、展示柜、办公桌与厨房中岛推车。" },
          { name: "窗帘、百叶窗与置物架安装", price: "从 RM 100 起", desc: "安全安装重型窗帘轨道、罗马帘、悬浮置物架、镜子与相框。" }
        ],
        process: [
          { step: "01", title: "任务清单核对", desc: "师傅审核您的任务清单，检查墙体结构（龙骨与空心砖对比），并确认所需工具。" },
          { step: "02", title: "精准对齐", desc: "我们使用激光水平仪测量并标记钻孔线，并检查墙内是否有铜水管或带电电线。" },
          { step: "03", title: "安全锚固钻孔", desc: "我们钻取干净的孔洞，并安装专为您特定墙体材质设计的正确重型专用锚固件。" },
          { step: "04", title: "牢固安装", desc: "支架、置物架、锁具或家具物品被固定并进行承重测试，确保结构稳固且完全安全。" },
          { step: "05", title: "清洁整理", desc: "我们吸除所有石膏粉尘，擦拭工作表面，检查功能（如锁具或门），并完成验收签字。" }
        ],
        faqs: [
          { q: "你们能在空心石膏隔墙上安装重型电视吗？", a: "可以！我们绝不在隔墙上使用普通塑料墙塞。我们使用重型钢制弹簧膨胀空心墙锚固件（molly bolt），可紧扣石膏板背面，安全分散重量。我们还会用电子扫描仪定位墙内金属龙骨，尽可能将支架直接固定在钢制龙骨上，确保 100% 安全。" },
          { q: "你们如何收费？是按小时还是按任务固定收费？", a: "我们倾向于按任务透明固定收费（例如，安装电视或组装橱柜的固定价格），让您在我们上门前就清楚知道费用。对于多任务清单，我们提供组合套餐，将多项任务合并以获得更优惠的总价。" },
          { q: "你们提供电视挂墙支架吗？", a: "我们可以额外收费提供标准重型固定墙壁支架或双臂全动式旋转支架。或者，如果您已购买支架，我们也乐意为您安装。" },
          { q: "你们能修复刮地板或关不上的门吗？", a: "可以。门下垂或刮擦通常是由铰链磨损、木框接缝松动或木材结构膨胀引起的。我们可以更换铰链、刨平木门底部/侧边，或加固门框以恢复顺畅开关。" }
        ],
        metaTitle: "吉隆坡与雪兰莪专业维修师傅服务",
        metaDesc: "吉隆坡与雪兰莪专业维修师傅服务。电视挂墙、锁具维修、门调整、窗帘安装及淘宝/IKEA 家具组装。快速、整洁的本地专家。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供认证可靠的维修师傅服务。专精于电视挂墙、锁具更换、门调整、置物架/窗帘安装以及使用专用石膏板锚固件的平板包装组装（IKEA/淘宝）。",
        warranty: "30 天工艺安全保修"
      }
    }
  },

  // ── 6. HOUSE RENOVATION ──────────────────────────────────────────────
  "house-renovation": {
    slug: "house-renovation",
    title: "Complete House Renovation",
    tagline: "End-to-end residential and commercial renovation: design, demolition, structural work, electrical, plumbing, painting, and handover. From RM 22,000.",
    description:
      "KL Servis Rumah delivers turnkey house and commercial renovation services across Kuala Lumpur and Selangor. From a single-story terrace in Subang to a high-rise condominium in Mont Kiara and a 3-storey shoplot in Petaling Jaya, our in-house project managers, foremen, and multi-trade technicians handle every scope under one roof: hacking and demolition, brickwork, plaster ceiling, tiling, waterproofing, electrical rewiring, plumbing, custom carpentry, painting, and final cleaning. We provide a single transparent quotation, a clear Gantt-chart timeline, daily progress photos, and a dedicated WhatsApp project channel. Every renovation is supervised by a registered contractor and protected by structural warranty, fixed-price guarantees, and a strict milestone-based payment schedule so you only pay as work is verified.",
    startPrice: "RM 22,000",
    icon: "house",
    highlights: [
      "Single point of contact managing demolition, structural, electrical, plumbing, ceiling, tiling, painting",
      "Fixed-price quotation with milestone-based payment — no surprise variation orders",
      "Daily WhatsApp progress photos and weekly site meetings with your dedicated project manager",
      "Licensed contractor with full structural warranty on renovation scope",
      "Compliant with local authority rules (DBKL/MBSA) for landed and strata-titled properties",
      "In-house multi-trade team — no outsourcing of critical structural or waterproofing work"
    ],
    subServices: [
      { name: "Full House Renovation Package", price: "From RM 22,000", desc: "Hacking, structural, ceiling, tiling, electrical, plumbing, painting, and final cleaning." },
      { name: "Partial House Renovation", price: "From RM 12,000", desc: "Targeted renovation for specific areas — kitchen, bathroom, living or bedrooms — with isolated work zones." },
      { name: "Terrace House Renovation", price: "From RM 22,000", desc: "End-to-end terrace house makeover: extension, kitchen, bathroom, flooring, ceiling, electrical and plumbing." },
      { name: "Semi-D Renovation", price: "From RM 35,000", desc: "Semi-D house renovation with structural modifications, car porch, kitchen extension and interior finishes." },
      { name: "Bungalow Renovation", price: "From RM 60,000", desc: "Bungalow full refurbishment including façade, roofing, outdoor, interior and M&E upgrades." },
      { name: "Condo Interior Refurbishment", price: "From RM 30,000", desc: "Full condo interior rebuild including management work-hour compliance, lift protection and debris handling." },
      { name: "Apartment Renovation", price: "From RM 18,000", desc: "Apartment interior renovation with JMB compliance, waterproofing, tiling and painting." },
      { name: "Kitchen & Bathroom Makeover", price: "From RM 10,000", desc: "Demolition, retiling, waterproofing, new cabinetry, plumbing rerouting, and finishing." },
      { name: "House Extension", price: "On Quote", desc: "Kitchen, car porch, balcony or rear extension with brickwork, roofing and authority submission guidance." },
      { name: "Commercial Shoplot Renovation", price: "On Quote", desc: "Retail and F&B shop fit-outs with electrical upgrades, signage readiness, and fast-track delivery." },
      { name: "Office Renovation & Fit-Out", price: "On Quote", desc: "Complete office fit-out: space planning, partition walls, workstations, meeting rooms, flooring, ceiling, electrical, lighting and air-con points for new or refurbished offices." },
      { name: "Retail Shop Renovation", price: "On Quote", desc: "Retail boutique, shoplot and showroom fit-out: storefront, display shelving, lighting, tiling, electrical upgrades and signage readiness." },
      { name: "Restaurant & F&B Renovation", price: "On Quote", desc: "Restaurant, cafe and F&B outlet fit-out: commercial kitchen, exhaust hood, grease trap, gas and drainage compliance, dining hall, tiling and flooring." },
      { name: "Office Partition & Workspace Build", price: "On Quote", desc: "Glass and gypsum partitions, meeting room pods, workstation clusters and sound-insulated office partitions for commercial spaces, with door and glazing integration." },
      { name: "Renovation Contractor Services", price: "On Quote", desc: "Licensed contractor for design, hacking, structural, M&E, carpentry, painting and handover." }
    ],
    process: [
      { step: "01", title: "Site Survey & Design Brief", desc: "We visit your property, take measurements, photograph every wall and fixture, and capture your design brief, budget, and timeline." },
      { step: "02", title: "Quotation & Scope Lock", desc: "You receive an itemized quotation with every trade scope, material grade, brand, and warranty in writing. We freeze the scope before signing." },
      { step: "03", title: "Permits & Pre-Work Setup", desc: "For landed properties we assist with DBKL/MBSA plan submissions where required. For condos we coordinate with management for lift bookings, work hours, and debris disposal." },
      { step: "04", title: "Demolition & Structural", desc: "Careful hacking, debris removal, brickwork, structural openings, lintels, and reinforcement where load-bearing changes apply." },
      { step: "05", title: "Multi-Trade Build", desc: "Plaster ceiling, partition, waterproofing, tiling, electrical rewiring, plumbing, custom carpentry, and doors run in a coordinated sequence to avoid rework." },
      { step: "06", title: "Painting, Finishes & Handover", desc: "Premium painting, final cleaning, snag-list walkthrough, and joint inspection before final payment and warranty activation." }
    ],
    faqs: [
      { q: "How long does a full house renovation take in KL?", a: "A standard 1,500–2,000 sq ft terrace renovation typically takes 8 to 12 weeks. A 1,000 sq ft condo interior usually completes in 6 to 8 weeks. The exact timeline depends on demolition complexity, custom carpentry scope, and material lead times (e.g., imported tiles or kitchen joinery)." },
      { q: "Do you help with permits and management submissions?", a: "Yes. For landed properties in Selangor and KL we assist with DBKL/MBSA plan submissions where structural or extension work is involved. For condos, we handle management forms, lift bookings, insurance certificates, and work-hour compliance on your behalf." },
      { q: "Can I stay in the house during renovation?", a: "For partial scope (kitchen or bathroom only) we can isolate work areas with plastic containment so you can stay. For full-house renovations we strongly recommend vacating for safety, dust control, and faster completion. We can suggest nearby serviced apartments if needed." },
      { q: "What is your payment schedule?", a: "We use a milestone-based payment schedule: 10% booking, 20% on demolition completion, 30% on rough-in completion (ceiling/electrical/plumbing), 30% on carpentry & tiling completion, and 10% on final handover. No hidden variation orders — every change is quoted and approved by you in writing first." }
    ],
    heroImage: "/hero-renovation.svg",
    metaTitle: "Complete House Renovation Contractor KL & Selangor",
    metaDesc: "Turnkey house renovation in KL & Selangor by KL Servis Rumah. Single project manager, fixed price, milestone payments, structural warranty. Get your free site survey.",
    aioSummary: "KL Servis Rumah provides turnkey residential and commercial renovation across KL & Selangor. Single point of contact for demolition, structural, ceiling, tiling, electrical, plumbing, carpentry, painting, and cleaning. Fixed pricing, milestone payments, structural warranty.",
    warranty: "12-Month Structural & Workmanship Warranty",
    i18n: {
      ms: {
        title: "Pengubahsuaian Rumah Menyeluruh",
        tagline: "Pengubahsuaian kediaman dan komersial hujung-ke-hujung: reka bentuk, perobohan, kerja struktur, elektrik, paip, pengecatan, dan serahan. Dari RM 22,000.",
        description: "KL Servis Rumah menyampaikan perkhidmatan pengubahsuaian rumah dan komersial menyeluruh di seluruh Kuala Lumpur dan Selangor. Dari rumah teres satu tingkat di Subang ke kondominium tinggi-tinggi di Mont Kiara dan kedai 3 tingkat di Petaling Jaya, pengurus projek, mandur, dan juruteknik pelbagai kemahiran kami mengendalikan setiap skop di bawah satu bumbung: perobohan dan pemecahan, kerja bata, siling plaster, jubin, kalis air, pendawaian elektrik, paip, pertukangan khas, pengecatan, dan cucian akhir. Kami menyediakan sebut harga telus tunggal, garis masa carta Gantt yang jelas, gambar kemajuan harian, dan saluran WhatsApp projek khas. Setiap pengubahsuaian diselia oleh kontraktor berdaftar dan dilindungi oleh jaminan struktur, jaminan harga tetap, dan jadual pembayaran berasaskan pencapaian yang ketat supaya anda hanya membayar apabila kerja disahkan.",
        highlights: [
          "Satu titik hubungan yang mengurus perobohan, struktur, elektrik, paip, siling, jubin, dan pengecatan",
          "Sebut harga harga tetap dengan pembayaran berasaskan pencapaian — tiada pesanan variasi mengejut",
          "Foto kemajuan WhatsApp harian dan mesyuarat tapak mingguan dengan pengurus projek khas anda",
          "Kontraktor berlesen dengan jaminan struktur penuh untuk skop pengubahsuaian",
          "Mematuhi peraturan pihak berkuasa tempatan (DBKL/MBSA) untuk hartanah bertanah dan strata",
          "Pasukan pelbagai kemahiran dalaman — tiada outsource untuk kerja struktur atau kalis air kritikal"
        ],
        subServices: [
          { name: "Pakej Pengubahsuaian Rumah Penuh", price: "Dari RM 22,000", desc: "Perobohan, struktur, siling, jubin, elektrik, paip, pengecatan, dan cucian akhir." },
          { name: "Pengubahsuaian Separa Rumah", price: "Dari RM 12,000", desc: "Pengubahsuaian bertumpu untuk kawasan tertentu — dapur, bilik mandi, ruang tamu atau bilik tidur — dengan zon kerja berasingan." },
          { name: "Pengubahsuaian Rumah Teres", price: "Dari RM 22,000", desc: "Makeover rumah teres hujung-ke-hujung: sambungan, dapur, bilik mandi, lantai, siling, elektrik dan paip." },
          { name: "Pengubahsuaian Semi-D", price: "Dari RM 35,000", desc: "Pengubahsuaian rumah Semi-D dengan modifikasi struktur, porch kereta, sambungan dapur dan kemasan interior." },
          { name: "Pengubahsuaian Banglo", price: "Dari RM 60,000", desc: "Pemulihan penuh banglo termasuk fasad, bumbung, luar, interior dan naik taraf M&E." },
          { name: "Pemulihan Interior Kondominium", price: "Dari RM 30,000", desc: "Pembinaan semula interior kondominium penuh termasuk pematuhan waktu kerja pengurusan, perlindungan lif dan pengendalian serpihan." },
          { name: "Pengubahsuaian Apartmen", price: "Dari RM 18,000", desc: "Pengubahsuaian interior apartmen dengan pematuhan JMB, kalis air, jubin dan pengecatan." },
          { name: "Makeover Dapur & Bilik Mandi", price: "Dari RM 10,000", desc: "Perobohan, jubin semula, kalis air, kabinet baru, ubah hala paip, dan kemasan." },
          { name: "Sambungan Rumah", price: "Atas Sebut Harga", desc: "Sambungan dapur, porch kereta, balkoni atau belakang dengan kerja bata, bumbung dan panduan penyerahan pihak berkuasa." },
          { name: "Pengubahsuaian Shoplot Komersial", price: "Atas Sebut Harga", desc: "Fit-out runcit dan F&B dengan peningkatan elektrik, kesediaan papan tanda, dan penghantaran pantas." },
          { name: "Pengubahsuaian & Fit-Out Pejabat", price: "Atas Sebut Harga", desc: "Fit-out pejabat lengkap: perancangan ruang, dinding partisi, stesen kerja, bilik mesyuarat, lantai, siling, elektrik, pencahayaan dan titik penghawa dingin untuk pejabat baharu atau diubah suai." },
          { name: "Pengubahsuaian Kedai Runcit", price: "Atas Sebut Harga", desc: "Fit-out butik, kedai dan ruang pameran runcit: bahagian hadapan kedai, rak paparan, pencahayaan, jubin, peningkatan elektrik dan kesediaan papan tanda." },
          { name: "Pengubahsuaian Restoran & F&B", price: "Atas Sebut Harga", desc: "Fit-out restoran, kafe dan premis F&B: dapur komersial, hud ekzos, perangkap gris, pematuhan gas dan saliran, dewan makan, jubin dan lantai." },
          { name: "Partisi Pejabat & Pembinaan Ruang Kerja", price: "Atas Sebut Harga", desc: "Partisi kaca dan gypsum, bilik mesyuarat, kluster stesen kerja dan partisi pejabat berpenebat bunyi untuk ruang komersial, termasuk integrasi pintu dan kaca." },
          { name: "Perkhidmatan Kontraktor Pengubahsuaian", price: "Atas Sebut Harga", desc: "Kontraktor berlesen untuk reka bentuk, perobohan, struktur, M&E, pertukangan, pengecatan dan serahan." }
        ],
        process: [
          { step: "01", title: "Tinjauan Tapak & Brief Reka Bentuk", desc: "Kami melawat hartanah anda, mengambil ukuran, memfoto setiap dinding dan lekapan, dan menangkap brief reka bentuk, bajet, dan garis masa anda." },
          { step: "02", title: "Sebut Harga & Skop Dikunci", desc: "Anda menerima sebut harga terperinci dengan setiap skop perdagangan, gred bahan, jenama, dan jaminan dalam tulisan. Kami membekukan skop sebelum menandatangani." },
          { step: "03", title: "Permit & Persediaan Pra-Kerja", desc: "Untuk hartanah bertanah kami membantu dengan penyerahan pelan DBKL/MBSA jika diperlukan. Untuk kondominium kami menyelaras dengan pengurusan untuk tempahan lif, waktu kerja, dan pelupusan serpihan." },
          { step: "04", title: "Perobohan & Struktur", desc: "Pecahan rapi, penyingkiran serpihan, kerja bata, bukaan struktur, lintel, dan tetulang di mana perubahan menanggung beban dikenakan." },
          { step: "05", title: "Bina Pelbagai Perdagangan", desc: "Siling plaster, partition, kalis air, jubin, pendawaian elektrik, paip, pertukangan khas, dan pintu dijalankan dalam jujukan yang diselaraskan untuk mengelakkan kerja semula." },
          { step: "06", title: "Pengecatan, Kemasan & Serahan", desc: "Pengecatan premium, cucian akhir, senarai snag walkthrough, dan pemeriksaan bersama sebelum pembayaran akhir dan pengaktifan jaminan." }
        ],
        faqs: [
          { q: "Berapa lama masa yang diambil untuk pengubahsuaian rumah penuh di KL?", a: "Pengubahsuaian teres standard 1,500–2,000 kaki persegi biasanya mengambil 8 hingga 12 minggu. Interior kondominium 1,000 kaki persegi biasanya siap dalam 6 hingga 8 minggu. Garis masa tepat bergantung kepada kerumitan perobohan, skop pertukangan khas, dan masa tunggu bahan (contohnya jubin import atau kabinet dapur)." },
          { q: "Adakah anda membantu dengan permit dan penyerahan pengurusan?", a: "Ya. Untuk hartanah bertanah di Selangor dan KL kami membantu dengan penyerahan pelan DBKL/MBSA di mana kerja struktur atau sambungan terlibat. Untuk kondominium, kami mengendalikan borang pengurusan, tempahan lif, sijil insurans, dan pematuhan waktu kerja bagi pihak anda." },
          { q: "Boleh saya tinggal di rumah semasa pengubahsuaian?", a: "Untuk skop separa (dapur atau bilik mandi sahaja) kami boleh mengasingkan kawasan kerja dengan kepungan plastik supaya anda boleh tinggal. Untuk pengubahsuaian rumah penuh kami sangat mengesyorkan mengosongkan untuk keselamatan, kawalan habuk, dan penyiapan lebih cepat. Kami boleh cadangkan apartmen servis berdekatan jika diperlukan." },
          { q: "Apakah jadual pembayaran anda?", a: "Kami menggunakan jadual pembayaran berasaskan pencapaian: 10% tempahan, 20% siap perobohan, 30% siap rough-in (siling/elektrik/paip), 30% siap pertukangan & jubin, dan 10% pada serahan akhir. Tiada pesanan variasi tersembunyi — setiap perubahan disebut harga dan diluluskan oleh anda secara bertulis terlebih dahulu." }
        ],
        metaTitle: "Kontraktor Pengubahsuaian Rumah Lengkap KL & Selangor",
        metaDesc: "Pengubahsuaian rumah turnkey di KL & Selangor oleh KL Servis Rumah. Satu pengurus projek, harga tetap, pembayaran pencapaian, jaminan struktur. Dapatkan tinjauan tapak percuma anda.",
        aioSummary: "KL Servis Rumah menyediakan pengubahsuaian kediaman dan komersial turnkey di KL & Selangor. Satu titik hubungan untuk perobohan, struktur, siling, jubin, elektrik, paip, pertukangan, pengecatan, dan cucian. Harga tetap, pembayaran pencapaian, jaminan struktur.",
        warranty: "Jaminan Struktur & Kerja 12 Bulan"
      },
      zh: {
        title: "全屋翻新服务",
        tagline: "端到端的住宅与商业翻新：设计、拆除、结构、水电、瓦工、木工、油漆与交付。从 RM 22,000 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪提供全屋与商业交钥匙翻新服务。从 Subang 单层排屋，到 Mont Kiara 高层公寓，再到 Petaling Jaya 三层商铺，我们的内部项目经理、工头与多工种技术员一站式处理所有项目：拆除与清理、砌砖、石膏天花板、瓷砖、防水、电路重铺、水管、定制木工、油漆与最终清洁。我们提供一份透明报价、一份明确的甘特图时间表、每日进度照片，以及专属的 WhatsApp 项目群。每项翻新由注册承包商监督，享有结构保修、固定价格保证与严格的里程碑付款安排，确保您只在工作经过核验后才付款。",
        highlights: [
          "一个联系人管理拆除、结构、水电、天花板、瓷砖与油漆",
          "固定价格报价配合里程碑付款——没有意外变更单",
          "每日 WhatsApp 进度照片与您的专属项目经理的每周工地会议",
          "持牌承包商，享有翻新范围的全结构保修",
          "符合地方政府（DBKL/MBSA）对有地与分层物业的规范",
          "内部多工种团队——关键结构与防水工作不外包"
        ],
        subServices: [
          { name: "全屋翻新配套", price: "从 RM 22,000 起", desc: "拆除、结构、天花板、瓷砖、水电、油漆与最终清洁。" },
          { name: "局部房屋翻新", price: "从 RM 12,000 起", desc: "针对特定区域的翻新——厨房、卫生间、客厅或卧室——带独立施工隔离区。" },
          { name: "排屋翻新", price: "从 RM 22,000 起", desc: "排屋端到端改造：扩建、厨房、卫生间、地板、天花、水电。" },
          { name: "半独立式翻新", price: "从 RM 35,000 起", desc: "半独立式住宅翻新，含结构改动、车棚、厨房扩建与室内饰面。" },
          { name: "独栋洋房翻新", price: "从 RM 60,000 起", desc: "洋房全面翻新，含外立面、屋顶、户外、室内与机电升级。" },
          { name: "公寓室内翻新", price: "从 RM 30,000 起", desc: "全公寓室内重建，包括管理处工时合规与电梯保护。" },
          { name: "公寓单元翻新", price: "从 RM 18,000 起", desc: "公寓室内翻新，含 JMB 合规、防水、贴砖与油漆。" },
          { name: "厨房与卫生间翻新", price: "从 RM 10,000 起", desc: "拆除、重新铺砖、防水、新橱柜、水管改道与完工。" },
          { name: "房屋扩建", price: "依报价", desc: "厨房、车棚、阳台或后部扩建，含砌砖、屋顶与报批指引。" },
          { name: "商业店铺翻新", price: "依报价", desc: "零售与餐饮店铺装修，电路升级、招牌就位与快速交付。" },
          { name: "办公室装修与整备", price: "依报价", desc: "完整办公室装修：空间规划、隔墙、工作站、会议室、地面、天花、水电、照明与空调点位，适用于新装或翻新办公室。" },
          { name: "零售店面装修", price: "依报价", desc: "零售精品店、商铺与展示厅装修：门头、展示货架、灯光、贴砖、电路升级与招牌安装准备。" },
          { name: "餐厅与餐饮门店装修", price: "依报价", desc: "餐厅、咖啡厅与餐饮门店装修：商用厨房、排油烟罩、隔油池、燃气与排水合规、用餐区、贴砖与地面。" },
          { name: "办公室隔断与工位搭建", price: "依报价", desc: "玻璃与石膏板隔断、会议室舱位、工位组团与办公空间隔音，含门与玻璃集成，适合作商业空间。" },
          { name: "翻新承包商服务", price: "依报价", desc: "持牌承包商负责设计、拆除、结构、机电、木工、油漆与交付。" }
        ],
        process: [
          { step: "01", title: "现场勘察与设计简报", desc: "我们到访您的物业，量度尺寸，拍摄每面墙与每个装置，并记录您的设计需求、预算与时间表。" },
          { step: "02", title: "报价与范围锁定", desc: "您收到一份逐项列出的报价，每项工种范围、材料等级、品牌与保修都白纸黑字。在签约前我们冻结范围。" },
          { step: "03", title: "准证与施工前准备", desc: "有地物业我们协助 DBKL/MBSA 的图纸呈报（涉及结构或扩建时）。公寓方面我们与管理处协调电梯预约、作业时段与废料处理。" },
          { step: "04", title: "拆除与结构", desc: "细致拆除、废料清理、砌砖、结构开洞、过梁与承重改动处的加固。" },
          { step: "05", title: "多工种施工", desc: "石膏天花板、隔墙、防水、瓷砖、电路重铺、水管、定制木工与门按协调顺序进行，避免返工。" },
          { step: "06", title: "油漆、收尾与交付", desc: "优质油漆、最终清洁、缺陷清单走查、双方共同验收后才进入尾款与保修激活。" }
        ],
        faqs: [
          { q: "在吉隆坡全屋翻新需要多久？", a: "标准的 1,500–2,000 平方英尺排屋翻新通常需要 8 到 12 周。1,000 平方英尺的公寓室内通常在 6 到 8 周内完成。具体时间表取决于拆除复杂度、定制木工范围与材料交期（如进口瓷砖或厨房定制柜）。" },
          { q: "你们协助处理准证与管理处呈报吗？", a: "是的。雪兰莪与吉隆坡的有地物业，凡涉及结构或扩建工程，我们都协助办理 DBKL/MBSA 图纸呈报。公寓方面我们代为处理管理处表格、电梯预约、保险证书与作业时段合规。" },
          { q: "翻新期间我可以住在家里吗？", a: "对于局部范围（仅厨房或卫生间），我们可以用塑料隔断隔离作业区让您继续居住。对于全屋翻新，我们强烈建议搬出以确保安全、控制粉尘并加快完工。如有需要我们可以推荐附近的服务式公寓。" },
          { q: "你们的付款安排是怎样的？", a: "我们采用里程碑付款：10% 订金，20% 拆除完成，30% 隐蔽工程（天花/水电）完成，30% 木工与瓷砖完成，10% 最终交付。绝无隐性变更单——任何改动都会先由您书面批准报价后才开始。" }
        ],
        metaTitle: "吉隆坡与雪兰莪全屋翻新承包商",
        metaDesc: "KL Servis Rumah 在吉隆坡与雪兰莪提供全屋翻新交钥匙服务。单一项目经理、固定价格、里程碑付款、结构保修。立即获取免费现场勘察。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供住宅与商业全屋翻新交钥匙服务。一个联系人管理拆除、结构、天花板、瓷砖、水电、木工、油漆与清洁。固定价格、里程碑付款、结构保修。",
        warranty: "12 个月结构与工艺保修"
      }
    }
  },

  // ── 7. ELECTRICAL SERVICES ──────────────────────────────────────────────
  "electrical": {
    slug: "electrical",
    title: "Licensed Electrical Services",
    tagline: "Wiring, DB box upgrades, power point and switch installation, ceiling fan and lighting point setup by ST-licensed electricians. From RM 280.",
    description:
      "KL Servis Rumah provides certified residential and commercial electrical services across Kuala Lumpur and Selangor, delivered by experienced ST-registered wiremen and supported by qualified electrical engineers for design. Whether you need a single new power point installed, a complete DB box and rewiring for an old terrace house, smart switch upgrades, or dedicated circuits for air-conditioners, water heaters, and EV chargers, our electricians follow MS IEC 60364 wiring standards and local Suruhanjaya Tenaga requirements. Every job is tested with insulation resistance testers and earth loop impedance meters, and you receive a clear, itemized quote before any drilling or cabling begins. We also handle condo management work-hour compliance and lift protection for high-rise installations.",
    startPrice: "RM 280",
    icon: "zap",
    highlights: [
      "ST-registered wiremen with full Suruhanjaya Tenaga compliance for residential and light commercial work",
      "DB box upgrades from 60A to 100A/200A for older terrace houses and bungalows",
      "Dedicated circuits for air-conditioners, water heaters, ovens, dryers, and EV chargers",
      "Smart switch, dimmer, and smart-home retrofit (Tuya, Xiaomi, Google Home, Apple HomeKit)",
      "Insulation resistance and earth loop impedance testing with every rewiring job",
      "Clean trunking, neat cable routing, and full labelling on every distribution board"
    ],
    subServices: [
      { name: "New Power Point & Switch Installation", price: "From RM 150 / point", desc: "Adding new 13A sockets, USB outlets, double-pole switches, and dimmer controls on existing or new circuits." },
      { name: "DB Box Upgrade & Rewiring", price: "From RM 2,200", desc: "Replacing old fuse boxes with modern MCB+RCCB distribution boards and full or partial house rewiring." },
      { name: "Lighting Point & Downlight Installation", price: "From RM 120 / point", desc: "Cutting and wiring new ceiling downlight points, pendant points, and track lighting on existing ceilings." },
      { name: "Aircond, Water Heater & Oven Point", price: "From RM 220 / point", desc: "Heavy-load 20A–32A dedicated points with proper isolator and cable sizing per appliance." },
      { name: "House Rewiring", price: "From RM 2,200", desc: "Full or partial house rewiring for old terrace, condo and bungalow homes, with insulation and earth-loop testing." },
      { name: "Additional Power Points", price: "From RM 150 / point", desc: "Extra 13A sockets during renovation — living, bedroom, study and kitchen island points on existing or new circuits." },
      { name: "Switch Installation", price: "From RM 150 / point", desc: "New or replacement switches, two-way switching, dimmers and smart-switch retrofit on existing lighting circuits." },
      { name: "Kitchen Electrical", price: "From RM 220 / point", desc: "Oven, hob, hood, dishwasher and extra 13A/15A kitchen points coordinated with cabinet and countertop layout." },
      { name: "Bathroom Electrical", price: "From RM 220 / point", desc: "Water heater, exhaust fan, lighting and shaver-point wiring for wet areas, with isolator and IP-rated accessories." },
      { name: "Renovation Electrical Work", price: "On Quote", desc: "Rough-in and first-fix electrical for house, kitchen and bathroom renovation — new circuits, DB planning and testing." }
    ],
    process: [
      { step: "01", title: "Load Audit & Plan", desc: "We calculate the total expected load, plan circuit distribution, and identify the correct MCB and RCCB ratings for your DB box." },
      { step: "02", title: "Transparent Quotation", desc: "You receive an itemized quote covering cable runs, trunking, breakers, accessories, and labour before work starts." },
      { step: "03", title: "Safe Power Isolation", desc: "We coordinate with TNB or building management to isolate the affected circuit, lock-out and tag-out the breaker, and verify zero voltage before work." },
      { step: "04", title: "Cable Routing & Termination", desc: "Cables are pulled through existing conduits, surface trunking, or chased walls, terminated to MS-standard accessories, and labelled at both ends." },
      { step: "05", title: "Testing & Certification", desc: "We perform insulation resistance, polarity, earth continuity, and RCD trip-time tests. You receive a written test record for your records." }
    ],
    faqs: [
      { q: "Are your electricians ST-registered?", a: "Yes. Our wiremen hold valid Suruhanjaya Tenaga (ST) registrations and are competent to carry out residential and light commercial wiring up to 415V. For installations above 100A or three-phase commercial supplies we partner with a ST-registered Competent Electrical Engineer (CEE) for sign-off." },
      { q: "How do I know if my old terrace house needs a full rewiring?", a: "Common signs include: rubber-insulated cables (black surface) older than 25 years, frequent tripping of the main breaker, scorch marks on sockets, a fuse-based DB box without RCCB, or two pin outlets without earth. We offer an on-site inspection and written report with photographic evidence from RM 280." },
      { q: "Can you install a Tesla or BYD EV charger at home?", a: "Yes. We install Level 2 AC chargers (7kW–22kW) for all major EV brands including Tesla, BYD, Hyundai, BMW, and Mercedes. The installation includes a dedicated 32A circuit, weatherproof isolator, RCCB type B protection where required, and a 3-meter cable run as standard. Longer cable runs are quoted on site." },
      { q: "Will my power be off the whole day during a DB box upgrade?", a: "Typically 4 to 8 hours depending on the scope. We coordinate with TNB for temporary disconnection if needed and restore power the same day. For critical loads (medical equipment, servers) we can arrange temporary generator support with advance notice." }
    ],
    heroImage: "/hero/home-services-electrical-kl.jpg",
    metaTitle: "Licensed Electrician & Wiring Services KL & Selangor",
    metaDesc: "ST-registered electricians in KL & Selangor. Power points, DB box upgrade, rewiring, lighting, EV charger, water heater point. Same-day dispatch. Fixed quotes.",
    aioSummary: "KL Servis Rumah provides ST-compliant residential and light commercial electrical services in KL & Selangor. Power points, DB box upgrade, full rewiring, lighting, ceiling fan points, dedicated AC/heater/EV charger circuits, smart-switch retrofit. Insulation and earth-loop tested, itemized quotes, written test record.",
    warranty: "12-Month Electrical Workmanship Warranty",
    i18n: {
      ms: {
        title: "Perkhidmatan Elektrik Berlesen",
        tagline: "Pendawaian, naik taraf DB box, pemasangan power point dan suis, titik kipas siling dan pencahayaan oleh juruelektrik berdaftar ST. Dari RM 280.",
        description: "KL Servis Rumah menyediakan perkhidmatan elektrik kediaman dan komersial yang bertauliah di seluruh Kuala Lumpur dan Selangor, dihantar oleh wiremen berdaftar ST yang berpengalaman dan disokong oleh jurutera elektrik bertauliah untuk reka bentuk. Sama ada anda perlukan satu power point baru, DB box lengkap dan pendawaian semula untuk rumah teres lama, naik taraf suis pintar, atau litar khas untuk penghawa dingin, pemanas air, dan pengecas EV, juruelektrik kami mengikuti piawaian pendawaian MS IEC 60364 dan keperluan Suruhanjaya Tenaga tempatan. Setiap kerja diuji dengan penguji rintangan penebat dan meter impedans gelung bumi, dan anda menerima sebut harga terperinci yang jelas sebelum sebarang penggerudian atau pendawaian dimulakan. Kami juga mengendalikan pematuhan waktu kerja pengurusan kondominium dan perlindungan lif untuk pemasangan bertingkat tinggi.",
        highlights: [
          "Wiremen berdaftar ST dengan pematuhan penuh Suruhanjaya Tenaga untuk kerja kediaman dan komersial ringan",
          "Naik taraf DB box dari 60A ke 100A/200A untuk rumah teres lama dan banglo",
          "Litar khas untuk penghawa dingin, pemanas air, ketuhar, pengering, dan pengecas EV",
          "Suis pintar, dimmer, dan retrofit rumah pintar (Tuya, Xiaomi, Google Home, Apple HomeKit)",
          "Ujian rintangan penebat dan impedans gelung bumi dengan setiap kerja pendawaian semula",
          "Trunking rapi, pendawaian kabel kemas, dan pelabelan penuh pada setiap papan agihan"
        ],
        subServices: [
          { name: "Pemasangan Power Point & Suis Baru", price: "Dari RM 150 / point", desc: "Menambah soket 13A baru, outlet USB, suis double-pole, dan kawalan dimmer pada litar sedia ada atau baru." },
          { name: "Naik Taraf DB Box & Pendawaian Semula", price: "Dari RM 2,200", desc: "Menggantikan kotak fius lama dengan papan agihan MCB+RCCB moden dan pendawaian semula rumah penuh atau separa." },
          { name: "Titik Pencahayaan & Downlight", price: "Dari RM 120 / point", desc: "Memotong dan mendawai titik downlight siling, titik pendant, dan pencahayaan trek pada siling sedia ada." },
          { name: "Titik Aircond, Pemanas Air & Ketuhar", price: "Dari RM 220 / point", desc: "Titik beban berat 20A–32A khusus dengan isolator dan saiz kabel yang betul setiap perkakas." },
          { name: "Pendawaian Semula Rumah", price: "Dari RM 2,200", desc: "Pendawaian semula penuh atau separa untuk rumah teres, kondominium dan banglo lama, dengan ujian penebat dan gelung bumi." },
          { name: "Power Point Tambahan", price: "Dari RM 150 / point", desc: "Soket 13A tambahan semasa pengubahsuaian — ruang tamu, bilik tidur, bilik belajar dan island dapur pada litar sedia ada atau baru." },
          { name: "Pemasangan Suis", price: "Dari RM 150 / point", desc: "Suis baharu atau gantian, suis dua hala, dimmer dan retrofit suis pintar pada litar lampu sedia ada." },
          { name: "Elektrik Dapur", price: "Dari RM 220 / point", desc: "Titik ketuhar, hob, hood, dishwasher dan tambahan 13A/15A dapur diselaraskan dengan susun atur kabinet dan countertop." },
          { name: "Elektrik Bilik Mandi", price: "Dari RM 220 / point", desc: "Pendawaian pemanas air, kipas ekzos, pencahayaan dan titik pencukur untuk kawasan basah, dengan isolator dan aksesori berkadar IP." },
          { name: "Kerja Elektrik Pengubahsuaian", price: "Atas Sebut Harga", desc: "Rough-in dan first-fix elektrik untuk pengubahsuaian rumah, dapur dan bilik mandi — litar baharu, perancangan DB dan ujian." }
        ],
        process: [
          { step: "01", title: "Audit Beban & Pelan", desc: "Kami mengira jumlah beban yang dijangka, merancang agihan litar, dan mengenal pasti rating MCB dan RCCB yang betul untuk DB box anda." },
          { step: "02", title: "Sebut Harga Telus", desc: "Anda menerima sebut harga terperinci yang merangkumi laluan kabel, trunking, breaker, aksesori, dan tenaga kerja sebelum kerja bermula." },
          { step: "03", title: "Pengasingan Kuasa Selamat", desc: "Kami menyelaras dengan TNB atau pengurusan bangunan untuk mengasingkan litar terjejas, lock-out dan tag-out breaker, dan mengesahkan voltan sifar sebelum kerja." },
          { step: "04", title: "Pendawaian & Penamatan", desc: "Kabel ditarik melalui konduit sedia ada, trunking permukaan, atau dinding chased, ditamatkan ke aksesori piawai MS, dan dilabel di kedua-dua hujung." },
          { step: "05", title: "Ujian & Persijilan", desc: "Kami menjalankan ujian rintangan penebat, kekutuban, kesinambungan bumi, dan masa perjalanan RCD. Anda menerima rekod ujian bertulis untuk simpanan anda." }
        ],
        faqs: [
          { q: "Adakah juruelektrik anda berdaftar ST?", a: "Ya. Wiremen kami memegang pendaftaran Suruhanjaya Tenaga (ST) yang sah dan kompeten untuk menjalankan pendawaian kediaman dan komersial ringan sehingga 415V. Untuk pemasangan melebihi 100A atau bekalan komersial tiga fasa kami berganding dengan Jurutera Elektrik Kompeten (CEE) berdaftar ST untuk pengesahan." },
          { q: "Bagaimana saya tahu jika rumah teres lama saya memerlukan pendawaian semula penuh?", a: "Tanda biasa termasuk: kabel getah berpenebat (permukaan hitam) yang lebih tua dari 25 tahun, tripping kerap breaker utama, tanda hangus pada soket, kotak fius DB tanpa RCCB, atau outlet dua pin tanpa bumi. Kami menawarkan pemeriksaan di tapak dan laporan bertulis dengan bukti fotografi bermula dari RM 280." },
          { q: "Boleh anda pasang pengecas EV Tesla atau BYD di rumah?", a: "Ya. Kami pasang pengecas AC Level 2 (7kW–22kW) untuk semua jenama EV utama termasuk Tesla, BYD, Hyundai, BMW, dan Mercedes. Pemasangan termasuk litar 32A khas, isolator kalis cuaca, perlindungan RCCB jenis B jika diperlukan, dan laluan kabel 3-meter sebagai standard. Laluan kabel lebih panjang disebut harga di tapak." },
          { q: "Adakah kuasa saya akan terputus sepanjang hari semasa naik taraf DB box?", a: "Biasanya 4 hingga 8 jam bergantung kepada skop. Kami menyelaras dengan TNB untuk pemotongan sementara jika diperlukan dan memulihkan kuasa pada hari yang sama. Untuk beban kritikal (peralatan perubatan, pelayan) kami boleh mengatur sokongan generator sementara dengan notis awal." }
        ],
        metaTitle: "Juruelektrik & Pendawaian Berlesen KL & Selangor",
        metaDesc: "Juruelektrik berdaftar ST di KL & Selangor. Power point, naik taraf DB box, pendawaian semula, pencahayaan, pengecas EV, titik pemanas air. Dispatch hari sama. Sebut harga tetap.",
        aioSummary: "KL Servis Rumah menyediakan perkhidmatan elektrik kediaman dan komersial ringan yang mematuhi ST di KL & Selangor. Power point, naik taraf DB box, pendawaian semula penuh, pencahayaan, titik kipas siling, litar khas AC/pemanas/pengecas EV, retrofit suis pintar. Ujian penebat dan gelung bumi, sebut harga terperinci, rekod ujian bertulis.",
        warranty: "Jaminan Kerja Elektrik 12 Bulan"
      },
      zh: {
        title: "持牌电工服务",
        tagline: "由 ST 注册电工承接的布线、配电箱升级、插座与开关安装、吊扇与照明点位。从 RM 280 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪提供经认证的住宅与商业电工服务，由经验丰富的 ST 注册电工执行，并由合资格电气工程师负责设计支持。无论是新增一个插座、为老旧排屋整套更换配电箱与重新布线、智能开关升级，还是为空调、热水器、电动车充电桩配置专用回路，我们的电工都遵循 MS IEC 60364 布线标准及本地能源委员会（Suruhanjaya Tenaga）规范。每项工程均使用绝缘电阻测试仪与接地回路阻抗表进行测试，钻孔与走线前您会收到清晰的分项报价。我们也负责公寓管理处的工时合规与电梯保护，确保高层项目顺利推进。",
        highlights: [
          "ST 注册电工，全面符合能源委员会对住宅与轻商业工程的要求",
          "配电箱从 60A 升级到 100A/200A，适用于老旧排屋与洋房",
          "为空调、热水器、烤箱、烘干机与电动车充电桩配置专用回路",
          "智能开关、调光器与智能家居改造（Tuya、Xiaomi、Google Home、Apple HomeKit）",
          "每次重新布线均进行绝缘电阻与接地回路阻抗测试",
          "走线整齐、桥架规范、每个配电箱都贴有清晰标签"
        ],
        subServices: [
          { name: "新增插座与开关安装", price: "从 RM 150 / 位起", desc: "在现有或新回路上增加 13A 插座、USB 插座、双极开关与调光控制。" },
          { name: "配电箱升级与重新布线", price: "从 RM 2,200 起", desc: "将老式保险丝盒替换为带 MCB+RCCB 的现代配电箱，并进行全屋或局部重新布线。" },
          { name: "照明与筒灯点位安装", price: "从 RM 120 / 位起", desc: "在现有天花上切割并布置新的筒灯点位、吊灯点位与轨道灯。" },
          { name: "空调、热水器与烤箱点位", price: "从 RM 220 / 位起", desc: "20A–32A 专用大功率点位，配备合适的隔离器与电缆规格。" },
          { name: "全屋重新布线", price: "从 RM 2,200 起", desc: "为老旧排屋、公寓与洋房进行全屋或局部重新布线，并做绝缘与接地回路测试。" },
          { name: "新增电源插座", price: "从 RM 150 / 位起", desc: "装修期间加装 13A 插座——客厅、卧室、书房与厨房中岛点位，接现有或新回路。" },
          { name: "开关安装", price: "从 RM 150 / 位起", desc: "新装或更换开关、双控、调光器与智能开关改造，接现有照明回路。" },
          { name: "厨房电路", price: "从 RM 220 / 位起", desc: "烤箱、灶具、油烟机、洗碗机与厨房额外 13A/15A 点位，配合橱柜与台面布局。" },
          { name: "卫生间电路", price: "从 RM 220 / 位起", desc: "湿区热水器、排气扇、照明与剃须插座布线，配隔离开关与 IP 等级配件。" },
          { name: "装修电气工程", price: "依报价", desc: "房屋、厨房与卫生间翻新的隐蔽与一次电气工程——新回路、配电规划与测试。" }
        ],
        process: [
          { step: "01", title: "负荷审计与规划", desc: "我们计算总预期负荷，规划回路分布，并确定 DB 箱的 MCB 与 RCCB 额定值。" },
          { step: "02", title: "透明报价", desc: "开工前您会收到分项报价，涵盖走线、桥架、断路器、配件与人工。" },
          { step: "03", title: "安全断电", desc: "我们与 TNB 或管理处协调隔离相关回路、上锁挂牌，并验证零电压后才开始工作。" },
          { step: "04", title: "走线与终端", desc: "电缆穿过既有管道、表面桥架或墙体开槽布线，终端接入 MS 标准配件，两端都贴上标签。" },
          { step: "05", title: "测试与认证", desc: "我们进行绝缘电阻、极性、接地连续性与 RCD 跳闸时间测试，并提供书面测试记录。" }
        ],
        faqs: [
          { q: "你们的电工有 ST 注册吗？", a: "有的。我们的电工持有有效的能源委员会（ST）注册，有资格承接 415V 及以下的住宅与轻商业布线工程。超过 100A 或三相商业供电项目，我们与 ST 注册合资格电气工程师（CEE）合作进行签核。" },
          { q: "如何判断我的老排屋是否需要全面重新布线？", a: "常见征兆包括：超过 25 年以上的橡胶绝缘电缆（表面发黑）、主断路器频繁跳闸、插座有烧焦痕迹、采用无 RCCB 的老式保险丝配电箱，或两脚插座无接地。我们提供从 RM 280 起的现场检查与带照片证据的书面报告。" },
          { q: "可以在家安装 Tesla 或 BYD 电动车充电桩吗？", a: "可以。我们为所有主流电动车品牌（Tesla、BYD、Hyundai、BMW、Mercedes 等）安装 Level 2 交流充电桩（7kW–22kW）。安装包括 32A 专用回路、户外防水隔离器、必要的 B 型 RCCB 保护，以及标准的 3 米线缆。超过 3 米的线缆按现场报价。" },
          { q: "配电箱升级期间会整天停电吗？", a: "通常 4 到 8 小时，取决于工程范围。我们与 TNB 协调必要时临时断电，当天恢复供电。对于关键负荷（医疗设备、服务器），我们可以提前安排临时发电机支援。" }
        ],
        metaTitle: "吉隆坡与雪兰莪持牌电工与布线服务",
        metaDesc: "吉隆坡与雪兰莪 ST 注册电工。插座、配电箱升级、重新布线、照明、电动车充电桩、热水器点位。当日派遣。固定报价。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供符合 ST 标准的住宅与轻商业电工服务。插座、配电箱升级、整套重新布线、照明、吊扇点位、空调/热水器/电动车充电桩专用回路、智能开关改造。绝缘与接地回路测试，分项报价，书面测试记录。",
        warranty: "12 个月电工工艺保修"
      }
    }
  },

  // ── 8. WATER HEATER INSTALLATION & REPAIR ───────────────────────────────
  "water-heater": {
    slug: "water-heater",
    title: "Water Heater Installation & Repair",
    tagline: "Instant, storage, and heat-pump water heater supply, installation, repair, and descaling by ST-licensed technicians. From RM 180.",
    description:
      "KL Servis Rumah specialises in water heater supply, installation, replacement, and repair across Kuala Lumpur and Selangor. We work with every major Malaysian brand — Joven, Rheem, Rinnai, Alpha, Faber, and Mitsubishi Electric — and we install both single-point instant heaters and multi-point storage tanks up to 50L. Every installation follows ST (Suruhanjaya Tenaga) wiring rules and SIRIM plumbing requirements: correct cable sizing with dedicated isolator, proper water pressure testing, full anti-splash protection, and reliable earth continuity. We also repair and descale existing heaters that are leaking, slow to heat, tripping the RCCB, or making knocking noises. Same-day diagnosis and emergency replacement available for landed and high-rise properties.",
    startPrice: "RM 180",
    icon: "flame",
    highlights: [
      "ST-licensed wiremen and SIRIM-certified plumbing connections on every installation",
      "Brand-agnostic — supply and install Joven, Rheem, Rinnai, Alpha, Faber, Panasonic, and Midea",
      "Same-day emergency replacement for leaking, sparking, or non-heating units",
      "Anti-splash and condensation-proof mounting with proper isolator and water-proof cover",
      "Free descaling and anode-rod check on storage tanks to extend heater lifespan",
      "Condo and landed compliance — management forms, work-hour scheduling, and lift protection"
    ],
    subServices: [
      { name: "Instant Water Heater Installation", price: "From RM 250", desc: "Single-point instant shower heater supply and install with proper isolator, water-proof cover, and pressure test." },
      { name: "Storage Tank Heater Installation", price: "From RM 420", desc: "Multi-point 15L–50L storage heater installation including wall mounting, pressure relief valve, and pipework." },
      { name: "Water Heater Repair & Descaling", price: "From RM 180", desc: "Diagnosing leaks, RCCB trips, slow heating, and noises. Includes descaling and anode-rod check on storage tanks." },
      { name: "Heat Pump Water Heater Install", price: "From RM 2,200", desc: "Energy-efficient heat-pump system installation for landed properties with outdoor condenser mounting." }
    ],
    process: [
      { step: "01", title: "Site Survey & Heater Selection", desc: "We confirm your water pressure (must be above 0.5 bar for instant heaters), pipe entry position, electrical point distance, and recommend the correct kW rating and brand." },
      { step: "02", title: "Transparent Quote", desc: "Heater price (if supplied), installation labour, isolator, copper pipework, and any required electrical or plumbing upgrades are itemized in writing." },
      { step: "03", title: "Mounting & Pipework", desc: "The heater is wall-mounted on solid brick or concrete using anti-rust brackets, with copper pipe routing and pressure relief valve for storage tanks." },
      { step: "04", title: "Wiring & Isolator", desc: "A dedicated 20A–32A circuit with double-pole isolator is wired to the heater by our ST-registered wireman and earth-loop tested." },
      { step: "05", title: "Testing & Handover", desc: "We pressure-test, temperature-test, and demonstrate the unit to you. Warranty card, manual, and test record are handed over." }
    ],
    faqs: [
      { q: "Which water heater brand is best for Malaysian homes?", a: "For landed houses with low inlet temperature, Joven and Rinnai are market leaders. For condos, single-point instant heaters (Alpha, Faber, Rinnai) are the safest and most common. For energy efficiency, Mitsubishi and Daikin heat-pump systems can cut electricity bills by up to 70% but require outdoor space for the condenser." },
      { q: "Why does my water heater keep tripping the RCCB?", a: "The most common cause is moisture ingress into the heating element or internal wiring. This can happen if the heater is mounted directly above a shower without proper splash protection, or if the heating element has scaled up and is leaking current to earth. We diagnose this with insulation resistance testers and recommend repair or replacement depending on heater age and condition." },
      { q: "How often should I descale my storage water heater?", a: "Every 12 to 18 months in Malaysian hard-water areas (e.g., parts of Klang, Shah Alam). Descaling removes limescale from the heating element and tank, restoring efficiency and extending lifespan. We also check the sacrificial anode rod, which protects the tank from corrosion." },
      { q: "Can I install a water heater myself in my condo?", a: "We strongly recommend using a licensed contractor. Improper installation can void the manufacturer's warranty, breach your condo management rules, and create an electrical safety hazard. We handle management submissions and provide a Certificate of Completion for your records." }
    ],
    heroImage: "/hero/home-services-water-heater-kl.jpg",
    metaTitle: "Water Heater Installation & Repair KL & Selangor",
    metaDesc: "Joven, Rinnai, Rheem water heater supply, install and repair in KL & Selangor. ST-licensed, SIRIM pipes, same-day service. RM250 instant heater install.",
    aioSummary: "KL Servis Rumah supplies, installs, and repairs all major water heater brands (Joven, Rinnai, Rheem, Alpha, Faber, Mitsubishi) across KL & Selangor. Instant, storage, and heat-pump systems. ST-licensed wiring, SIRIM pipework, anti-splash mounting, descaling service, emergency same-day replacement.",
    warranty: "12-Month Installation Workmanship Warranty",
    i18n: {
      ms: {
        title: "Pemasangan & Pembaikan Pemanas Air",
        tagline: "Bekalan, pemasangan, pembaikan dan nyahkerak pemanas air segera, tangki simpanan dan pam haba oleh juruteknik berlesen ST. Dari RM 180.",
        description: "KL Servis Rumah pakar dalam bekalan, pemasangan, penggantian dan pembaikan pemanas air di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenama utama Malaysia — Joven, Rheem, Rinnai, Alpha, Faber dan Mitsubishi Electric — dan kami memasang pemanas segera satu titik serta tangki simpanan pelbagai titik sehingga 50L. Setiap pemasangan mengikut peraturan pendawaian ST (Suruhanjaya Tenaga) dan keperluan paip SIRIM: saiz kabel yang betul dengan isolator khusus, ujian tekanan air yang betul, perlindungan anti-percikan penuh dan keselanjaran bumi yang boleh dipercayai. Kami juga membaiki dan menyahkerak pemanas sedia ada yang bocor, lambat panas, menyebabkan RCCB trip, atau mengeluarkan bunyi ketukan. Diagnosis hari yang sama dan penggantian kecemasan tersedia untuk hartanah bertanah dan bertingkat tinggi.",
        highlights: [
          "Wireman berlesen ST dan sambungan paip bertauliah SIRIM pada setiap pemasangan",
          "Semua jenama — bekalan dan pasang Joven, Rheem, Rinnai, Alpha, Faber, Panasonic dan Midea",
          "Penggantian kecemasan hari sama untuk unit bocor, terbakar, atau tidak panas",
          "Pemasangan anti-percikan dan tahan kondensasi dengan isolator dan penutup kalis air yang betul",
          "Nyahkerak percuma dan semakan rod anod pada tangki simpanan untuk memanjangkan jangka hayat pemanas",
          "Pematuhan kondominium dan landed — borang pengurusan, penjadualan waktu kerja dan perlindungan lif"
        ],
        subServices: [
          { name: "Pemasangan Pemanas Air Segera", price: "Dari RM 250", desc: "Bekalan dan pemasangan pemanas mandi segera satu titik dengan isolator, penutup kalis air dan ujian tekanan yang betul." },
          { name: "Pemasangan Pemanas Tangki Simpanan", price: "Dari RM 420", desc: "Pemasangan pemanas simpanan pelbagai titik 15L–50L termasuk pelekap dinding, injap pelega tekanan dan kerja paip." },
          { name: "Pembaikan & Nyahkerak Pemanas Air", price: "Dari RM 180", desc: "Mendiagnosis kebocoran, RCCB trip, pemanasan perlahan dan bunyi bising. Termasuk nyahkerak dan semakan rod anod pada tangki simpanan." },
          { name: "Pemasangan Pemanas Air Pam Haba", price: "Dari RM 2,200", desc: "Pemasangan sistem pam haba cekap tenaga untuk hartanah bertanah dengan pelekap pemeluwap luar." }
        ],
        process: [
          { step: "01", title: "Tinjauan Tapak & Pemilihan Pemanas", desc: "Kami mengesahkan tekanan air anda (mesti melebihi 0.5 bar untuk pemanas segera), kedudukan masuk paip, jarak titik elektrik dan mengesyorkan penarafan kW dan jenama yang betul." },
          { step: "02", title: "Sebut Harga Telus", desc: "Harga pemanas (jika dibekalkan), buruh pemasangan, isolator, kerja paip tembaga dan sebarang peningkatan elektrik atau paip yang diperlukan diperincikan secara bertulis." },
          { step: "03", title: "Pemasangan & Kerja Paip", desc: "Pemanas dipasang di dinding pada bata pepejal atau konkrit menggunakan pendakap tahan karat, dengan laluan paip tembaga dan injap pelega tekanan untuk tangki simpanan." },
          { step: "04", title: "Pendawaian & Isolator", desc: "Litar khusus 20A–32A dengan isolator dwi-kutub disambungkan ke pemanas oleh wireman berdaftar ST kami dan diuji gelung bumi." },
          { step: "05", title: "Ujian & Serahan", desc: "Kami menguji tekanan, menguji suhu dan mendemonstrasikan unit kepada anda. Kad jaminan, manual dan rekod ujian diserahkan." }
        ],
        faqs: [
          { q: "Jenama pemanas air manakah yang terbaik untuk rumah Malaysia?", a: "Untuk rumah landed dengan suhu air masuk rendah, Joven dan Rinnai adalah peneraju pasaran. Untuk kondominium, pemanas segera satu titik (Alpha, Faber, Rinnai) adalah yang paling selamat dan biasa. Untuk kecekapan tenaga, sistem pam haba Mitsubishi dan Daikin boleh mengurangkan bil elektrik sehingga 70% tetapi memerlukan ruang luar untuk pemeluwap." },
          { q: "Mengapa pemanas air saya kerap menyebabkan RCCB trip?", a: "Punca paling biasa ialah kemasukan lembapan ke dalam elemen pemanas atau pendawaian dalaman. Ini boleh berlaku jika pemanas dipasang terus di atas pancuran tanpa perlindungan percikan yang betul, atau jika elemen pemanas telah berkerak dan membocorkan arus ke bumi. Kami mendiagnosis ini dengan penguji rintangan penebat dan mengesyorkan pembaikan atau penggantian bergantung pada usia dan keadaan pemanas." },
          { q: "Berapa kerap saya perlu menyahkerak pemanas air simpanan saya?", a: "Setiap 12 hingga 18 bulan di kawasan air liat Malaysia (contohnya sebahagian Klang, Shah Alam). Nyahkerak membuang kerak kapur dari elemen pemanas dan tangki, memulihkan kecekapan dan memanjangkan jangka hayat. Kami juga memeriksa rod anod korban, yang melindungi tangki daripada kakisan." },
          { q: "Boleh saya memasang pemanas air sendiri di kondominium saya?", a: "Kami sangat mengesyorkan menggunakan kontraktor berlesen. Pemasangan yang tidak betul boleh membatalkan jaminan pengeluar, melanggar peraturan pengurusan kondominium dan mewujudkan bahaya keselamatan elektrik. Kami mengendalikan penyerahan pengurusan dan menyediakan Sijil Penyiapan untuk rekod anda." }
        ],
        metaTitle: "Pemasangan & Pembaikan Pemanas Air KL & Selangor",
        metaDesc: "Bekalan, pemasangan dan pembaikan pemanas air Joven, Rinnai, Rheem di KL & Selangor. Berlesen ST, paip SIRIM, perkhidmatan hari sama. Pemasangan pemanas segera RM250.",
        aioSummary: "KL Servis Rumah membekalkan, memasang dan membaiki semua jenama pemanas air utama (Joven, Rinnai, Rheem, Alpha, Faber, Mitsubishi) di KL & Selangor. Sistem segera, simpanan dan pam haba. Pendawaian berlesen ST, kerja paip SIRIM, pemasangan anti-percikan, perkhidmatan nyahkerak, penggantian kecemasan hari sama.",
        warranty: "Jaminan Kerja Pemasangan 12 Bulan"
      },
      zh: {
        title: "热水器安装与维修",
        tagline: "由 ST 持牌技师提供即热式、储水式与热泵热水器的供应、安装、维修与除垢。从 RM 180 起。",
        description: "KL Servis Rumah 专注于在吉隆坡与雪兰莪提供热水器的供应、安装、更换与维修。我们与马来西亚各大品牌合作——Joven、Rheem、Rinnai、Alpha、Faber 以及 Mitsubishi Electric——安装单点即热式热水器和多达 50L 的多点储水式热水器。每项安装都遵循 ST（能源委员会）的布线规定和 SIRIM 的水管要求：正确的电缆规格配专用隔离开关、正确的水压测试、全面的防溅保护和可靠的接地连续性。我们也维修和除垢现有的热水器——无论是漏水、加热缓慢、导致 RCCB 跳闸，还是发出敲击声。有地和高层物业均可享受当日诊断和紧急更换服务。",
        highlights: [
          "每次安装均由 ST 持牌电工与 SIRIM 认证水管连接",
          "不限品牌——供应并安装 Joven、Rheem、Rinnai、Alpha、Faber、Panasonic 与 Midea",
          "漏水、火花或不加热机组的当日紧急更换",
          "防溅防凝水安装，配备适当的隔离���关与防水罩",
          "储水式热水器的免费除垢与阳极棒检查，延长热水器寿命",
          "公寓与有地物业合规——管理处表格、作业时段安排与电梯保护"
        ],
        subServices: [
          { name: "即热式热水器安装", price: "从 RM 250 起", desc: "单点即热淋浴热水器供应与安装，配备适当的隔离开关、防水罩与压力测试。" },
          { name: "储水式热水器安装", price: "从 RM 420 起", desc: "15L–50L 多点储水式热水器安装，包括壁挂、泄压阀与管道工程。" },
          { name: "热水器维修与除垢", price: "从 RM 180 起", desc: "诊断漏水、RCCB 跳闸、加热缓慢与异响。包括储水式热水器的除垢与阳极棒检查。" },
          { name: "热泵热水器安装", price: "从 RM 2,200 起", desc: "为有地物业安装节能热泵系统，室外冷凝器挂装。" }
        ],
        process: [
          { step: "01", title: "现场勘察与热水器选型", desc: "我们确认您的水压（即热式热水器需高于 0.5 bar）、进水位置、电源点距离，并推荐正确的 kW 功率与品牌。" },
          { step: "02", title: "透明报价", desc: "热水器价格（如由我们供应）、安装人工、隔离开关、铜管工程以及任何所需的电气或水管升级都以书面逐项列出。" },
          { step: "03", title: "安装与管道工程", desc: "热水器使用防锈支架安装在实心砖墙或混凝土墙上，铜管布线，储水式热水器配泄压阀。" },
          { step: "04", title: "布线与隔离开关", desc: "专用的 20A–32A 电路配双极隔离开关，由我们 ST 注册电工接线并进行接地环路测试。" },
          { step: "05", title: "测试与交付", desc: "我们进行压力测试、温度测试并向您演示机组。保修卡、说明书与测试记录一并移交。" }
        ],
        faqs: [
          { q: "哪个热水器品牌最适合马来西亚家庭？", a: "对于进水温度较低的有地住宅，Joven 和 Rinnai 是市场领导者。对于公寓，单点即热式热水器（Alpha、Faber、Rinnai）最安全也最常见。在节能方面，Mitsubishi 和 Daikin 的热泵系统最多可节省 70% 电费，但需要室外空间放置冷凝器。" },
          { q: "为什么我的热水器老是让 RCCB 跳闸？", a: "最常见的原因是加热元件或内部接线进水受潮。如果热水器直接安装在淋浴上方而没有适当的防溅保护，或者加热元件结垢后漏电到地线，就会发生这种情况。我们用绝缘电阻测试仪进行诊断，并根据热水器的使用年限与状况建议维修或更换。" },
          { q: "我应该多久给储水式热水器除一次垢？", a: "在马来西亚硬水地区（如巴生、莎阿南部分地区）每 12 到 18 个月一次。除垢可清除加热元件和水箱上的水垢，恢复效率并延长寿命。我们还会检查保护水箱免受腐蚀的牺牲阳极棒。" },
          { q: "我可以在公寓里自己安装热水器吗？", a: "我们强烈建议使用持牌承包商。安装不当可能使制造商保修失效、违反公寓管理规定并造成电气安全隐患。我们代办管理处申报，并提供完工证书供您存档。" }
        ],
        metaTitle: "吉隆坡与雪兰莪热水器安装与维修",
        metaDesc: "吉隆坡与雪兰莪 Joven、Rinnai、Rheem 热水器供应、安装与维修。ST 持牌、SIRIM 水管、当日服务。即热式热水器安装 RM250。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与维修各大品牌热水器（Joven、Rinnai、Rheem、Alpha、Faber、Mitsubishi）。即热式、储水式与热泵系统。ST 持牌布线、SIRIM 水管、防溅安装、除垢服务、紧急当日更换。",
        warranty: "12 个月安装工艺保修"
      }
    }
  },

  // ── 9. CEILING FAN INSTALLATION ────────────────────────────────────────
  "ceiling-fan": {
    slug: "ceiling-fan",
    title: "Ceiling Fan Installation & Replacement",
    tagline: "Safe ceiling fan mounting on concrete, plaster ceiling, and condo false ceiling with proper fan hook, regulator, and concealed wiring. From RM 150.",
    description:
      "KL Servis Rumah installs, replaces, and re-wires ceiling fans across Kuala Lumpur and Selangor — from a simple 56-inch KDK in a Subang terrace to a 5-blade DC motor fan in a Mont Kiara condo, or a large industrial 60-inch fan in a shop lot. The most critical step is invisible: a properly installed fan hook anchored into concrete or a reinforced timber block inside a plaster ceiling. We never rely on weak ceiling-board fixings, which is the leading cause of fans falling. Every installation includes a compatible solid-state or remote-control regulator, neat concealed or surface wiring, blade balancing, and a final swing test before we leave.",
    startPrice: "RM 150",
    icon: "fan",
    highlights: [
      "Heavy-duty fan hook anchored into concrete joist or reinforced timber for absolute safety",
      "Compatible solid-state and remote-control regulator wiring for KDK, Fanco, Acorn, Khind, and Panasonic",
      "Suitable for concrete slab, plaster ceiling, false ceiling, and condo gypsum board installations",
      "Neat concealed or surface trunking for all wiring with proper cable management",
      "Blade balancing and final swing test before handover to ensure wobble-free operation",
      "Removal and disposal of old fans included in every replacement job"
    ],
    subServices: [
      { name: "New Ceiling Fan Installation", price: "From RM 220", desc: "Mounting your supplied fan on a solid fan hook with regulator, wiring, and swing-test included." },
      { name: "Ceiling Fan Replacement", price: "From RM 250", desc: "Removing the old fan, safe disposal, and installing your new fan on the existing hook with fresh wiring." },
      { name: "DC Motor Smart Fan Install", price: "From RM 320", desc: "Installing modern 5-blade DC inverter fans with remote and smart-home app pairing." },
      { name: "Industrial / Shoplot Fan Install", price: "From RM 420", desc: "Large 60-inch industrial fans and high-CFM commercial installations for warehouses, gyms, and F&B." }
    ],
    process: [
      { step: "01", title: "Existing Setup Inspection", desc: "We confirm the existing wiring, switch type (single/dual), fan hook rating, and ceiling material before quoting." },
      { step: "02", title: "Safe Mounting Preparation", desc: "For new installations, we cut a precise opening, install a heavy-duty metal fan hook anchored into the concrete joist or reinforced timber block in plaster ceilings." },
      { step: "03", title: "Wiring & Regulator", desc: "Live, neutral, and earth cables are routed through ceiling trunking, terminated at the regulator or remote receiver, and tested for continuity." },
      { step: "04", title: "Fan Assembly & Balance", desc: "Blades, light kits (if any), and down-rod are assembled and tightened to spec. We perform a no-wobble balancing check." },
      { step: "05", title: "Final Swing Test", desc: "The fan runs at full speed for 5 minutes while we check for wobble, noise, and reverse function. We hand over the warranty card and remote." }
    ],
    faqs: [
      { q: "Can you install a ceiling fan on a plaster ceiling?", a: "Yes. The key is a properly anchored fan hook. For new plaster ceilings, the hook is fixed to the metal GI frame or a reinforced timber block before the boards are sealed. For existing plaster ceilings, we cut a small inspection opening to locate the joist or install a retrofit heavy-duty toggle-bracket fan support." },
      { q: "Why is my new ceiling fan wobbling?", a: "Common causes are loose blade screws, an unbalanced blade set, or a weak fan hook. We always check blade screws with a torque driver, balance the blades with the manufacturer-supplied balancing kit, and verify the hook is anchored into solid structure — not just ceiling board." },
      { q: "Do you supply the fan or just install it?", a: "Both. We can install a fan you have already purchased, or we can recommend and supply popular Malaysian models (KDK U60FW, Fanco Acon, Khind, Acorn) at competitive prices. Supply + install packages are typically cheaper than retail and come with a single combined warranty." },
      { q: "How long does a ceiling fan installation take?", a: "A standard replacement on an existing hook takes 30 to 45 minutes. A new installation with new wiring, regulator, and fan hook typically takes 1.5 to 2 hours. We schedule a 2-hour arrival window and always clean up the area before leaving." }
    ],
    heroImage: "/hero/home-services-ceiling-fan-kl.jpg",
    metaTitle: "Ceiling Fan Installation & Replacement KL & Selangor",
    metaDesc: "Safe ceiling fan installation in KL & Selangor. KDK, Fanco, Khind, Panasonic. Plaster ceiling, concrete, condo false ceiling. Heavy-duty fan hook, swing test.",
    aioSummary: "KL Servis Rumah installs and replaces ceiling fans across KL & Selangor. KDK, Fanco, Khind, Panasonic, Acorn. Safe mounting with heavy-duty fan hook, concealed or trunked wiring, blade balancing, and final swing test. Concrete, plaster, false ceiling, and condo gypsum boards supported.",
    warranty: "12-Month Mounting & Wiring Warranty",
    i18n: {
      ms: {
        title: "Pemasangan & Penggantian Kipas Siling",
        tagline: "Pemasangan kipas siling yang selamat pada konkrit, siling plaster dan siling palsu kondominium dengan cangkuk kipas, regulator dan pendawaian tersembunyi yang betul. Dari RM 150.",
        description: "KL Servis Rumah memasang, mengganti dan memasang semula pendawaian kipas siling di seluruh Kuala Lumpur dan Selangor — daripada kipas KDK 56-inci ringkas di rumah teres Subang kepada kipas motor DC 5 bilah di kondominium Mont Kiara, atau kipas industri 60-inci besar di lot kedai. Langkah paling kritikal adalah tidak kelihatan: cangkuk kipas yang dipasang dengan betul, disauh ke dalam konkrit atau blok kayu yang diperkuat di dalam siling plaster. Kami tidak pernah bergantung pada pengikat papan siling yang lemah, yang merupakan punca utama kipas jatuh. Setiap pemasangan termasuk regulator solid-state atau kawalan jauh yang serasi, pendawaian tersembunyi atau permukaan yang kemas, pengimbangan bilah dan ujian ayun akhir sebelum kami pergi.",
        highlights: [
          "Cangkuk kipas tugas berat disauh ke dalam rasuk konkrit atau kayu diperkuat untuk keselamatan mutlak",
          "Pendawaian regulator solid-state dan kawalan jauh yang serasi untuk KDK, Fanco, Acorn, Khind dan Panasonic",
          "Sesuai untuk papak konkrit, siling plaster, siling palsu dan pemasangan papan gipsum kondominium",
          "Saluran tersembunyi atau permukaan yang kemas untuk semua pendawaian dengan pengurusan kabel yang betul",
          "Pengimbangan bilah dan ujian ayun akhir sebelum serahan untuk memastikan operasi tanpa goyangan",
          "Penyingkiran dan pelupusan kipas lama termasuk dalam setiap kerja penggantian"
        ],
        subServices: [
          { name: "Pemasangan Kipas Siling Baru", price: "Dari RM 220", desc: "Memasang kipas yang anda bekalkan pada cangkuk kipas kukuh dengan regulator, pendawaian dan ujian ayun termasuk." },
          { name: "Penggantian Kipas Siling", price: "Dari RM 250", desc: "Menanggalkan kipas lama, pelupusan selamat, dan memasang kipas baru anda pada cangkuk sedia ada dengan pendawaian baharu." },
          { name: "Pemasangan Kipas Pintar Motor DC", price: "Dari RM 320", desc: "Memasang kipas penyongsang DC 5 bilah moden dengan kawalan jauh dan pemasangan aplikasi rumah pintar." },
          { name: "Pemasangan Kipas Industri / Lot Kedai", price: "Dari RM 420", desc: "Kipas industri 60-inci besar dan pemasangan komersial CFM tinggi untuk gudang, gim dan F&B." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Persediaan Sedia Ada", desc: "Kami mengesahkan pendawaian sedia ada, jenis suis (tunggal/dwi), penarafan cangkuk kipas dan bahan siling sebelum memberikan sebut harga." },
          { step: "02", title: "Persediaan Pemasangan Selamat", desc: "Untuk pemasangan baharu, kami memotong bukaan yang tepat, memasang cangkuk kipas logam tugas berat yang disauh ke dalam rasuk konkrit atau blok kayu diperkuat dalam siling plaster." },
          { step: "03", title: "Pendawaian & Regulator", desc: "Kabel hidup, neutral dan bumi disalurkan melalui saluran siling, ditamatkan di regulator atau penerima kawalan jauh, dan diuji keselanjaran." },
          { step: "04", title: "Pemasangan & Pengimbangan Kipas", desc: "Bilah, kit lampu (jika ada) dan rod gantung dipasang dan diketatkan mengikut spesifikasi. Kami menjalankan pemeriksaan pengimbangan tanpa goyangan." },
          { step: "05", title: "Ujian Ayun Akhir", desc: "Kipas berjalan pada kelajuan penuh selama 5 minit sementara kami memeriksa goyangan, bunyi dan fungsi songsang. Kami menyerahkan kad jaminan dan kawalan jauh." }
        ],
        faqs: [
          { q: "Boleh anda memasang kipas siling pada siling plaster?", a: "Ya. Kuncinya ialah cangkuk kipas yang disauh dengan betul. Untuk siling plaster baharu, cangkuk dipasang pada rangka GI logam atau blok kayu diperkuat sebelum papan ditutup. Untuk siling plaster sedia ada, kami memotong bukaan pemeriksaan kecil untuk mencari rasuk atau memasang sokongan kipas pendakap togal tugas berat retrofit." },
          { q: "Mengapa kipas siling baru saya bergerak-gerak?", a: "Punca biasa ialah skru bilah longgar, set bilah tidak seimbang, atau cangkuk kipas lemah. Kami sentiasa memeriksa skru bilah dengan pemutar tork, mengimbangkan bilah dengan kit pengimbangan bekalan pengeluar, dan mengesahkan cangkuk disauh ke dalam struktur pepejal — bukan hanya papan siling." },
          { q: "Adakah anda membekalkan kipas atau hanya memasangnya?", a: "Kedua-duanya. Kami boleh memasang kipas yang anda telah beli, atau kami boleh mengesyorkan dan membekalkan model Malaysia popular (KDK U60FW, Fanco Acon, Khind, Acorn) pada harga kompetitif. Pakej bekalan + pasang biasanya lebih murah daripada runcit dan dilengkapi dengan jaminan gabungan tunggal." },
          { q: "Berapa lama masa yang diambil untuk pemasangan kipas siling?", a: "Penggantian standard pada cangkuk sedia ada mengambil 30 hingga 45 minit. Pemasangan baharu dengan pendawaian baharu, regulator dan cangkuk kipas biasanya mengambil 1.5 hingga 2 jam. Kami menjadualkan tetingkap ketibaan 2 jam dan sentiasa membersihkan kawasan sebelum pergi." }
        ],
        metaTitle: "Pemasangan & Penggantian Kipas Siling KL & Selangor",
        metaDesc: "Pemasangan kipas siling selamat di KL & Selangor. KDK, Fanco, Khind, Panasonic. Siling plaster, konkrit, siling palsu kondominium. Cangkuk kipas tugas berat, ujian ayun.",
        aioSummary: "KL Servis Rumah memasang dan menggantikan kipas siling di seluruh KL & Selangor. KDK, Fanco, Khind, Panasonic, Acorn. Pemasangan selamat dengan cangkuk kipas tugas berat, pendawaian tersembunyi atau saluran, pengimbangan bilah dan ujian ayun akhir. Konkrit, plaster, siling palsu dan papan gipsum kondominium disokong.",
        warranty: "Jaminan Pemasangan & Pendawaian 12 Bulan"
      },
      zh: {
        title: "吊扇安装与更换",
        tagline: "在混凝土、石膏天花板与公寓吊顶上安全安装吊扇，配备合格的吊扇挂钩、调速器与隐蔽布线。从 RM 150 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪各地安装、更换与重新布线吊扇——从 Subang 排屋简单的 56 英寸 KDK，到 Mont Kiara 公寓的 5 叶直流电机吊扇，再到店铺的大型 60 英寸工业吊扇。最关键的步骤是看不见的：正确安装的吊扇挂钩，锚固在混凝土梁或石膏板吊顶内的加固木块中。我们绝不依赖脆弱的天花板板材固定件——这是吊扇坠落的首要原因。每次安装都包括兼容的电子调速器或遥控接收器、整洁的隐蔽或明装布线、扇叶平衡校正，以及离场前的最终摆动测试。",
        highlights: [
          "重型吊扇挂钩锚固在混凝土梁或加固木块中，绝对安全",
          "兼容 KDK、Fanco、Acorn、Khind 与 Panasonic 的电子调速器与遥控布线",
          "适用于混凝土楼板、石膏天花板、吊顶与公寓石膏板安装",
          "所有布线均采用整洁的隐蔽或明装线槽，电缆管理规范",
          "交付前进行扇叶平衡与最终摆动测试，确保无晃动运行",
          "每次更换均包含旧吊扇的拆除与清运"
        ],
        subServices: [
          { name: "新吊扇安装", price: "从 RM 220 起", desc: "将您自购的吊扇安装在牢固的吊扇挂钩上，含调速器、布线与摆动测试。" },
          { name: "吊扇更换", price: "从 RM 250 起", desc: "拆除旧吊扇、安全清运，并在现有挂钩上安装您的新吊扇，重新布线。" },
          { name: "直流电机智能吊扇安装", price: "从 RM 320 起", desc: "安装现代 5 叶直流变频吊扇，配遥控与智能家居 App 配对。" },
          { name: "工业 / 店铺吊扇安装", price: "从 RM 420 起", desc: "大型 60 英寸工业吊扇与高风量商业安装，适用于仓库、健身房与餐饮业。" }
        ],
        process: [
          { step: "01", title: "现有条件检查", desc: "报价前我们确认现有布线、开关类型（单控/双控）、吊扇挂钩承重等级与天花板材质。" },
          { step: "02", title: "安全安装准备", desc: "新装时我们精确开孔，安装锚固在混凝土梁或石膏吊顶内加固木块上的重型金属吊扇挂钩。" },
          { step: "03", title: "布线与调速器", desc: "火线、零线与地线经天花板线槽走线，端接至调速器或遥控接收器，并进行导通测试。" },
          { step: "04", title: "吊扇组装与平衡", desc: "按规格组装并紧固扇叶、灯具套件（如有）与吊杆。我们进行无晃动平衡检查。" },
          { step: "05", title: "最终摆动测试", desc: "吊扇全速运转 5 分钟，我们检查晃动、噪音与反转功能。随后移交保修卡与遥控器。" }
        ],
        faqs: [
          { q: "你们可以在石膏天花板上安装吊扇吗？", a: "可以。关键是正确锚固的吊扇挂钩。新做石膏吊顶时，挂钩在封板前固定到金属 GI 龙骨或加固木块上。对于现有石膏吊顶，我们会开一个小检修孔定位梁位，或安装后装式重型翻板支架吊扇支撑。" },
          { q: "为什么我的新吊扇会晃动？", a: "常见原因是扇叶螺丝松动、扇叶组不平衡或吊扇挂钩不牢。我们总是用扭矩螺丝刀检查扇叶螺丝，用制造商附带的平衡套件校正扇叶，并确认挂钩锚固在实体结构上——而不仅仅是天花板板材。" },
          { q: "你们供应吊扇还是只负责安装？", a: "两者都做。我们可以安装您已购买的吊扇，也可以推荐并以有竞争力的价格供应马来西亚热门型号（KDK U60FW、Fanco Acon、Khind、Acorn）。供应+安装套餐通常比零售便宜，并附带一份合并保修。" },
          { q: "安装一台吊扇需要多长时间？", a: "在现有挂钩上标准更换需要 30 到 45 分钟。含新布线、调速器与风扇挂钩的新安装通常需要 1.5 到 2 小时。我们安排 2 小时的到达窗口，离场前总是清理现场。" }
        ],
        metaTitle: "吉隆坡与雪兰莪吊扇安装与更换",
        metaDesc: "吉隆坡与雪兰莪安全吊扇安装。KDK、Fanco、Khind、Panasonic。石膏天花板、混凝土、公寓吊顶。重型风扇挂钩、摆动测试。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪安装与更换吊扇。KDK、Fanco、Khind、Panasonic、Acorn。重型吊扇挂钩安全安装、隐蔽或线槽布线、扇叶平衡与最终摆动测试。支持混凝土、石膏、吊顶与公寓石膏板。",
        warranty: "12 个月安装与布线保修"
      }
    }
  },

  // ── 10. LIGHTING INSTALLATION ────────────────────────────────────────
  "lighting": {
    slug: "lighting",
    title: "Lighting Design & Installation",
    tagline: "Downlight, track light, pendant, cove, and outdoor lighting design, supply, and installation by ST-licensed electricians. From RM 120 / point.",
    description:
      "KL Servis Rumah provides end-to-end residential and commercial lighting services across Kuala Lumpur and Selangor. From a single downlight replacement to a complete architectural lighting design with cove LED strips, pendant clusters, and smart dimming, our team handles it all. We carry the full range — KDK, Philips, Osram, Tronic, and Eurolux — and we can design lighting layouts in AutoCAD or recommend beam angles, colour temperatures, and lux levels for your specific room. We work with homeowners, interior designers, and contractors to deliver on brief, on budget, and to international lighting standards (CIBSE, IES).",
    startPrice: "RM 120",
    icon: "lightbulb",
    highlights: [
      "ST-licensed electricians for every connection, dimmer, and smart-control wiring",
      "Architectural lighting design with AutoCAD layout and lux calculations on request",
      "KDK, Philips, Osram, Eurolux, Tronic, and bespoke imported fixture supply available",
      "Smart dimming via DALI, 0–10V, Tuya, or KNX protocols for premium residences",
      "Outdoor IP65+ rated fixtures, garden spike lights, and façade wall washers installed to MS IEC standards",
      "Cove LED, track light, magnetic linear, and pendant cluster installations with proper heat management"
    ],
    subServices: [
      { name: "LED Downlight Installation", price: "From RM 120 / point", desc: "Cutting and wiring new downlight points with COB LED fixtures, drivers, and proper heat dissipation." },
      { name: "Pendant & Chandelier Install", price: "From RM 180", desc: "Mounting heavy pendants and chandeliers on reinforced ceiling hooks with safety cables." },
      { name: "Cove & Strip LED Installation", price: "From RM 22 / ft", desc: "Hidden cove LED strip with aluminum profile, dimmer, and driver concealed in ceiling void." },
      { name: "Smart Lighting & Dimmer Retrofit", price: "From RM 250 / point", desc: "Wi-Fi, Zigbee, or DALI smart switches and dimmers compatible with Google Home, Alexa, and Apple Home." }
    ],
    process: [
      { step: "01", title: "Lighting Design Brief", desc: "We capture your room dimensions, ceiling height, paint colour, and intended use to recommend the right beam angle, lux level, and colour temperature." },
      { step: "02", title: "Layout Plan", desc: "For full installations, we provide a ceiling layout with point positions, switch groupings, and circuit allocation before work begins." },
      { step: "03", title: "Cutting & Wiring", desc: "We cut precise downlight holes (typically 75–90mm), pull cables through ceiling voids, and terminate at the junction box or driver." },
      { step: "04", title: "Fixture Mounting", desc: "Downlights, pendants, and tracks are mounted using manufacturer-specified clips, screws, or reinforced ceiling hooks for heavier fixtures." },
      { step: "05", title: "Dimming & Smart Pairing", desc: "We pair smart switches, configure dimmer curves, and connect to your preferred smart-home platform (Google Home, Alexa, Apple Home, Tuya)." }
    ],
    faqs: [
      { q: "How many downlights do I need per room?", a: "For a typical 12 sqm room with 2.7m ceiling height, we recommend 6 to 9 downlights (3W–5W COB LED) for general lighting. For task-heavy rooms (kitchen, study) we add 2 to 4 spotlights over work surfaces. We provide a free lux calculation with our layout plan." },
      { q: "What colour temperature is best for Malaysian homes?", a: "For living areas, 3000K (warm white) creates a cozy atmosphere. For kitchens, bathrooms, and study rooms, 4000K (neutral white) provides better task visibility. We generally avoid 6500K (cool daylight) in living spaces as it can feel clinical. Many of our clients now use tunable white (2700K–6500K) for flexibility." },
      { q: "Can you install smart lighting in my existing condo?", a: "Yes. Most smart switches retrofit into existing switch boxes without rewiring. We use neutral-wire smart switches (e.g., Aqara, Sonoff, Schneider Wiser) and pair them with your existing Wi-Fi. For dimming we may need to add a compatible dimmer module behind the switch." },
      { q: "Do you offer outdoor and garden lighting?", a: "Yes. We install IP65+ rated outdoor downlights, spike lights, bollard lights, wall washers, and underwater pool lights. All outdoor cabling is run in weatherproof conduit with proper IP-rated junction boxes and RCCB protection." }
    ],
    heroImage: "/hero/home-services-lighting-kl.jpg",
    metaTitle: "Lighting Design & Installation Services KL & Selangor",
    metaDesc: "Downlight, pendant, cove LED, track light, and smart lighting installation in KL & Selangor. Philips, KDK, Osram. ST-licensed, dimming, smart home integration.",
    aioSummary: "KL Servis Rumah designs and installs residential and commercial lighting in KL & Selangor. Downlights, pendants, cove LED, track lights, smart dimming, outdoor façade lighting. Philips, KDK, Osram, Tuya, DALI. Lux calculations and AutoCAD layout on request.",
    warranty: "12-Month Lighting Installation Warranty",
    i18n: {
      ms: {
        title: "Reka Bentuk & Pemasangan Pencahayaan",
        tagline: "Reka bentuk, bekalan dan pemasangan lampu downlight, track, pendant, cove dan luar oleh juruelektrik berlesen ST. Dari RM 120 / titik.",
        description: "KL Servis Rumah menyediakan perkhidmatan pencahayaan kediaman dan komersial hujung-ke-hujung di seluruh Kuala Lumpur dan Selangor. Daripada penggantian satu downlight kepada reka bentuk pencahayaan seni bina lengkap dengan jalur LED cove, kluster pendant dan malap pintar, pasukan kami mengendalikan semuanya. Kami membawa rangkaian penuh — KDK, Philips, Osram, Tronic dan Eurolux — dan kami boleh mereka bentuk susun atur pencahayaan dalam AutoCAD atau mengesyorkan sudut alur, suhu warna dan tahap lux untuk bilik khusus anda. Kami bekerja dengan pemilik rumah, pereka dalaman dan kontraktor untuk menyampaikan mengikut brief, mengikut bajet dan mengikut piawaian pencahayaan antarabangsa (CIBSE, IES).",
        highlights: [
          "Juruelektrik berlesen ST untuk setiap sambungan, malap dan pendawaian kawalan pintar",
          "Reka bentuk pencahayaan seni bina dengan susun atur AutoCAD dan pengiraan lux atas permintaan",
          "Bekalan lekapan KDK, Philips, Osram, Eurolux, Tronic dan import khas tersedia",
          "Malap pintar melalui protokol DALI, 0–10V, Tuya atau KNX untuk kediaman premium",
          "Lekapan luar berkadar IP65+, lampu pancang taman dan pencuci dinding fasad dipasang mengikut piawaian MS IEC",
          "Pemasangan LED cove, lampu track, linear magnet dan kluster pendant dengan pengurusan haba yang betul"
        ],
        subServices: [
          { name: "Pemasangan Downlight LED", price: "Dari RM 120 / titik", desc: "Memotong dan memasang pendawaian titik downlight baharu dengan lekapan LED COB, pemacu dan pelesapan haba yang betul." },
          { name: "Pemasangan Pendant & Chandelier", price: "Dari RM 180", desc: "Memasang pendant berat dan chandelier pada cangkuk siling diperkuat dengan kabel keselamatan." },
          { name: "Pemasangan LED Cove & Jalur", price: "Dari RM 22 / kaki", desc: "Jalur LED cove tersembunyi dengan profil aluminium, malap dan pemacu disembunyikan dalam rongga siling." },
          { name: "Retrofit Pencahayaan Pintar & Malap", price: "Dari RM 250 / titik", desc: "Suis pintar Wi-Fi, Zigbee atau DALI dan malap serasi dengan Google Home, Alexa dan Apple Home." }
        ],
        process: [
          { step: "01", title: "Brief Reka Bentuk Pencahayaan", desc: "Kami menangkap dimensi bilik anda, ketinggian siling, warna cat dan kegunaan yang dimaksudkan untuk mengesyorkan sudut alur, tahap lux dan suhu warna yang betul." },
          { step: "02", title: "Pelan Susun Atur", desc: "Untuk pemasangan penuh, kami menyediakan susun atur siling dengan kedudukan titik, pengumpulan suis dan peruntukan litar sebelum kerja bermula." },
          { step: "03", title: "Pemotongan & Pendawaian", desc: "Kami memotong lubang downlight yang tepat (biasanya 75–90mm), menarik kabel melalui rongga siling dan menamatkan di kotak simpang atau pemacu." },
          { step: "04", title: "Pemasangan Lekapan", desc: "Downlight, pendant dan track dipasang menggunakan klip, skru yang ditentukan pengeluar atau cangkuk siling diperkuat untuk lekapan yang lebih berat." },
          { step: "05", title: "Pemasangan Malap & Pintar", desc: "Kami memasangkan suis pintar, mengkonfigurasi lengkung malap dan menyambung ke platform rumah pintar pilihan anda (Google Home, Alexa, Apple Home, Tuya)." }
        ],
        faqs: [
          { q: "Berapa banyak downlight yang saya perlukan setiap bilik?", a: "Untuk bilik tipikal 12 meter persegi dengan ketinggian siling 2.7m, kami mengesyorkan 6 hingga 9 downlight (LED COB 3W–5W) untuk pencahayaan am. Untuk bilik tugas berat (dapur, belajar) kami menambah 2 hingga 4 lampu sorot di atas permukaan kerja. Kami menyediakan pengiraan lux percuma dengan pelan susun atur kami." },
          { q: "Apakah suhu warna terbaik untuk rumah Malaysia?", a: "Untuk ruang tamu, 3000K (putih hangat) mewujudkan suasana selesa. Untuk dapur, bilik mandi dan bilik belajar, 4000K (putih neutral) memberikan penglihatan tugas yang lebih baik. Kami secara amnya mengelakkan 6500K (siang sejuk) di ruang tamu kerana ia boleh terasa klinikal. Ramai pelanggan kami kini menggunakan putih boleh laras (2700K–6500K) untuk fleksibiliti." },
          { q: "Boleh anda memasang pencahayaan pintar di kondominium sedia ada saya?", a: "Ya. Kebanyakan suis pintar retrofit ke dalam kotak suis sedia ada tanpa pendawaian semula. Kami menggunakan suis pintar wayar neutral (contohnya Aqara, Sonoff, Schneider Wiser) dan memasangkannya dengan Wi-Fi sedia ada anda. Untuk malap kami mungkin perlu menambah modul malap serasi di belakang suis." },
          { q: "Adakah anda menawarkan pencahayaan luar dan taman?", a: "Ya. Kami memasang downlight luar berkadar IP65+, lampu pancang, lampu bolard, pencuci dinding dan lampu kolam bawah air. Semua kabel luar disalurkan dalam saluran tahan cuaca dengan kotak simpang berkadar IP dan perlindungan RCCB yang betul." }
        ],
        metaTitle: "Perkhidmatan Reka Bentuk & Pemasangan Pencahayaan KL & Selangor",
        metaDesc: "Pemasangan downlight, pendant, LED cove, lampu track dan pencahayaan pintar di KL & Selangor. Philips, KDK, Osram. Berlesen ST, malap, integrasi rumah pintar.",
        aioSummary: "KL Servis Rumah mereka bentuk dan memasang pencahayaan kediaman dan komersial di KL & Selangor. Downlight, pendant, LED cove, lampu track, malap pintar, pencahayaan fasad luar. Philips, KDK, Osram, Tuya, DALI. Pengiraan lux dan susun atur AutoCAD atas permintaan.",
        warranty: "Jaminan Pemasangan Pencahayaan 12 Bulan"
      },
      zh: {
        title: "照明设计与安装",
        tagline: "由 ST 持牌电工提供筒灯、轨道灯、吊灯、灯槽与户外照明的设计、供应与安装。从 RM 120 / 点位起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供端到端的住宅与商业照明服务。从单个筒灯更换，到包含灯槽 LED 灯带、吊灯群组与智能调光的整体建筑照明设计，我们的团队都能胜任。我们备有全系列产品——KDK、Philips、Osram、Tronic 与 Eurolux——并可用 AutoCAD 设计照明布局，或为您特定的房间推荐光束角、色温与照度等级。我们与屋主、室内设计师及承包商合作，按需求、按预算、按国际照明标准（CIBSE、IES）交付。",
        highlights: [
          "每个接线、调光器与智能控制布线均由 ST 持牌电工完成",
          "可应要求提供 AutoCAD 布局与照度计算的建筑照明设计",
          "供应 KDK、Philips、Osram、Eurolux、Tronic 及定制进口灯具",
          "面向高端住宅的 DALI、0–10V、Tuya 或 KNX 协议智能调光",
          "按 MS IEC 标准安装 IP65+ 级户外灯具、花园插地灯与立面洗墙灯",
          "灯槽 LED、轨道灯、磁吸线性灯与吊灯群组安装，散热管理得当"
        ],
        subServices: [
          { name: "LED 筒灯安装", price: "从 RM 120 / 点位起", desc: "开孔并布线新的筒灯点位，配 COB LED 灯具、驱动器与适当的散热。" },
          { name: "吊灯与枝形吊灯安装", price: "从 RM 180 起", desc: "在加固天花板挂钩上安装重型吊灯与枝形吊灯，配安全钢丝绳。" },
          { name: "灯槽与 LED 灯带安装", price: "从 RM 22 / 英尺起", desc: "隐藏式灯槽 LED 灯带，配铝槽、调光器与藏于吊顶内的驱动器。" },
          { name: "智能照明与调光改造", price: "从 RM 250 / 点位起", desc: "Wi-Fi、Zigbee 或 DALI 智能开关与调光器，兼容 Google Home、Alexa 与 Apple Home。" }
        ],
        process: [
          { step: "01", title: "照明设计简报", desc: "我们记录您房间的尺寸、层高、墙面颜色与用途，以推荐合适的光束角、照度等级与色温。" },
          { step: "02", title: "布局方案", desc: "整体安装前，我们提供包含点位位置、开关分组与回路分配的天花板布局图。" },
          { step: "03", title: "开孔与布线", desc: "我们精确开筒灯孔（通常 75–90mm），电缆经吊顶空腔走线，端接至接线盒或驱动器。" },
          { step: "04", title: "灯具安装", desc: "筒灯、吊灯与轨道使用制造商指定卡扣、螺丝安装；较重灯具使用加固天花板挂钩。" },
          { step: "05", title: "调光与智能配对", desc: "我们配对智能开关、配置调光曲线，并连接您偏好的智能家居平台（Google Home、Alexa、Apple Home、Tuya）。" }
        ],
        faqs: [
          { q: "每个房间需要多少个筒灯？", a: "对于层高 2.7m 的典型 12 平方米房间，我们建议 6 到 9 个筒灯（3W–5W COB LED）作为一般照明。对于任务密集型房间（厨房、书房），我们在工作台面上方增加 2 到 4 个射灯。我们随布局方案提供免费的照度计算。" },
          { q: "马来西亚家庭最适合什么色温？", a: "客厅区用 3000K（暖白）营造温馨氛围。厨房、浴室与书房用 4000K（中性白）任务可视性更好。起居空间一般避免 6500K（冷日光），因为会显得冷硬。现在许多客户使用可调白光（2700K–6500K）以获得灵活性。" },
          { q: "你们能在我现有的公寓里安装智能照明吗？", a: "可以。大多数智能开关无需重新布线即可改装进现有开关底盒。我们使用带零线的智能开关（如 Aqara、Sonoff、Schneider Wiser）并与您现有的 Wi-Fi 配对。调光方面可能需要在开关后加装兼容的调光模块。" },
          { q: "你们提供户外与花园照明吗？", a: "提供。我们安装 IP65+ 级户外筒灯、插地灯、草坪灯、洗墙灯与水下泳池灯。所有户外电缆均穿防水线管敷设，配 IP 等级接线盒与 RCCB 保护。" }
        ],
        metaTitle: "吉隆坡与雪兰莪照明设计与安装服务",
        metaDesc: "吉隆坡与雪兰莪筒灯、吊灯、灯槽 LED、轨道灯与智能照明安装。Philips、KDK、Osram。ST 持牌、调光、智能家居集成。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪设计并安装住宅与商业照明。筒灯、吊灯、灯槽 LED、轨道灯、智能调光、户外立面照明。Philips、KDK、Osram、Tuya、DALI。可应要求提供照度计算与 AutoCAD 布局。",
        warranty: "12 个月照明安装保修"
      }
    }
  },

  // ── 11. TILING ────────────────────────────────────────
  "tiling": {
    slug: "tiling",
    title: "Professional Tiling & Tile Repair",
    tagline: "Floor and wall tiling for new builds, renovations, and repairs. Homogeneous, porcelain, ceramic, mosaic, and large-format slabs. From RM 14 / sq ft.",
    description:
      "KL Servis Rumah delivers professional floor and wall tiling services across Kuala Lumpur and Selangor. We work with every major tile type — homogeneous, porcelain, ceramic, mosaic, glass, natural stone (marble, granite, travertine), and the increasingly popular large-format slabs (600x1200mm, 800x1800mm, 1200x2400mm). Our tilers are experienced with modern installation methods including decoupling membranes (Schlüter DITRA), self-levelling underlayments (Mapei Ultraplan), and lippage-tuning systems (Raimondi Levelling System) for perfectly flat floors. We also repair loose, hollow, and cracked tiles, replace grout, and re-tile wet areas with proper waterproofing underneath.",
    startPrice: "RM 14",
    icon: "grid-3x3",
    highlights: [
      "Tilers experienced with homogeneous, porcelain, ceramic, mosaic, natural stone, and large-format slabs",
      "Decoupling membrane installation (Schlüter DITRA) for movement-prone substrates and timber floors",
      "Self-levelling underlayment (Mapei, Ardex) for perfectly flat large-format tile installations",
      "Lippage-tuning system (Raimondi, Rubi) for zero-trip tile joints on premium finishes",
      "Tile removal, surface preparation, and re-tile for wet areas with proper waterproofing beneath",
      "Grout colour matching, epoxy grout, and anti-mould silicone sealing for bathrooms and kitchens"
    ],
    subServices: [
      { name: "Floor Tiling Installation", price: "From RM 14 / sq ft", desc: "Standard 300x300mm to 600x600mm floor tile installation with cement-sand screed and tile adhesive." },
      { name: "Wall Tiling Installation", price: "From RM 16 / sq ft", desc: "Kitchen splashback, bathroom wall, and feature wall tiling with straight or brick-bond patterns." },
      { name: "Floor Tile Replacement & Tile Hacking", price: "From RM 18 / sq ft", desc: "Hacking old tiles, screeding, waterproofing and new tile installation with debris disposal." },
      { name: "Porcelain Tiles Installation", price: "From RM 16 / sq ft", desc: "Homogeneous porcelain tiles in matte, glossy, wood-look and stone-look finishes with rectified edges." },
      { name: "Ceramic Tiles Installation", price: "From RM 14 / sq ft", desc: "Ceramic wall and floor tiles for bathrooms, kitchens and balconies with colour-matched grout." },
      { name: "Large-Format Slab Tiling", price: "From RM 26 / sq ft", desc: "600x1200mm, 800x800mm, 1200x2400mm slabs with self-levelling, suction-cup lifters, and lippage tuning." },
      { name: "Mosaic Tiles Installation", price: "From RM 22 / sq ft", desc: "Glass, porcelain and stone mosaic for backsplash, shower niche and feature walls with mesh backing." },
      { name: "Bathroom Tiling & Waterproofing", price: "From RM 18 / sq ft", desc: "Bathroom floor and wall tiling with 3-coat waterproofing membrane and 24-hour ponding test." },
      { name: "Kitchen Backsplash Tiling", price: "From RM 18 / sq ft", desc: "Kitchen backsplash tiling with subway, mosaic or large format tiles and anti-mould silicone sealing." },
      { name: "Tile Repair & Re-Grouting", price: "From RM 22 / sq ft", desc: "Removing hollow, cracked or broken tiles, surface prep, replacement, epoxy grout and silicone sealing." },
      { name: "Floor Leveling & Self-Leveling", price: "From RM 8 / sq ft", desc: "Cement screeding and self-leveling compound to correct uneven floors before tiling." }
    ],
    process: [
      { step: "01", title: "Substrate Inspection", desc: "We check substrate levelness, structural movement, moisture content, and suitability. We flag any plumbing or waterproofing work needed before tiling begins." },
      { step: "02", title: "Layout Planning", desc: "Tile layout is planned to minimise slivers at edges, with falls directed to floor drains in wet areas. We mark datum lines and full-tile positions before any adhesive is mixed." },
      { step: "03", title: "Surface Preparation", desc: "We apply self-levelling compound for uneven floors, decoupling membrane for timber or movement-prone substrates, and primer for porous concrete." },
      { step: "04", title: "Tile Installation", desc: "Tiles are bedded in polymer-modified adhesive using the correct notch trowel for tile size, with lippage-tuning clips on premium installations." },
      { step: "05", title: "Grouting & Sealing", desc: "After 24 hours curing, joints are filled with mould-resistant cement or epoxy grout, colour-matched to your tile. Wet areas are sealed with anti-mould silicone at corners." }
    ],
    faqs: [
      { q: "What size trowel do I need for 600x600mm floor tiles?", a: "We use a 10mm to 12mm square-notch trowel for 600x600mm porcelain tiles, and a 12mm to 15mm for larger formats. Back-buttering (applying adhesive to the back of the tile) is also essential for tiles above 600mm to ensure full coverage and prevent hollow spots." },
      { q: "Can I tile directly on timber floors?", a: "Not directly — timber movement will crack the grout and tiles. We install a decoupling membrane (Schlüter DITRA or Mapei Mapelastic) over the timber first, which absorbs movement and prevents cracking. This adds about RM 8–12 per sq ft to the substrate prep cost but is essential for a long-lasting finish." },
      { q: "Why are my bathroom tiles hollow or loose?", a: "Common causes: poor adhesive coverage (less than 80% contact), movement in the substrate, water damage from a failed waterproofing membrane, or impact damage. We use a chain drag and tap-test to identify hollow tiles, then remove and re-bed them with fresh adhesive and proper substrate prep." },
      { q: "Do you handle natural stone like marble and granite?", a: "Yes. We install marble, granite, travertine, and limestone using specialist stone adhesive and grout. After installation we can apply penetrating sealers, polish, or crystallise the surface to your specified finish. Natural stone is also more sensitive to lippage, so we use the Raimondi system on all stone installations." }
    ],
    heroImage: "/hero/home-services-tiling-kl.jpg",
    metaTitle: "Professional Tiling & Tile Repair KL & Selangor",
    metaDesc: "Floor and wall tiling in KL & Selangor. Porcelain, ceramic, large-format slabs, mosaic, marble. Schlüter DITRA, self-levelling, lippage tuning. From RM14/sqft.",
    aioSummary: "KL Servis Rumah provides professional tiling in KL & Selangor. Floor and wall tiles, large-format slabs, natural stone, mosaic, and repair. Schlüter DITRA decoupling, Mapei self-levelling, Raimondi lippage tuning. Re-grouting, anti-mould silicone, and re-tile wet areas.",
    warranty: "12-Month Tile Adhesion & Grout Warranty",
    i18n: {
      ms: {
        title: "Jubin & Pembaikan Jubin Profesional",
        tagline: "Jubin lantai dan dinding untuk pembinaan baru, pengubahsuaian, dan pembaikan. Homogen, porselin, seramik, mozek, dan slab format besar. Dari RM 14 / sq ft.",
        description: "KL Servis Rumah menyampaikan perkhidmatan jubin lantai dan dinding profesional di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenis jubin utama — homogen, porselin, seramik, mozek, kaca, batu semula jadi (marmar, granit, travertine), dan slab format besar yang semakin popular (600x1200mm, 800x1800mm, 1200x2400mm). Tukang jubin kami berpengalaman dengan kaedah pemasangan moden termasuk membran decoupling (Schlüter DITRA), underlayment self-levelling (Mapei Ultraplan), dan sistem lippage-tuning (Raimondi Levelling System) untuk lantai yang sempurna rata. Kami juga membaiki jubin yang longgar, berongga, dan retak, menggantikan grout, dan memasang semula jubin kawasan basah dengan kalis air yang betul.",
        highlights: [
          "Tukang jubin berpengalaman dengan homogen, porselin, seramik, mozek, batu semula jadi, dan slab format besar",
          "Pemasangan membran decoupling (Schlüter DITRA) untuk substrat yang cenderung bergerak dan lantai kayu",
          "Underlayment self-levelling (Mapei, Ardex) untuk pemasangan jubin format besar yang sempurna rata",
          "Sistem lippage-tuning (Raimondi, Rubi) untuk sendi jubin sifar-trip pada kemasan premium",
          "Penyingkiran jubin, penyediaan permukaan, dan pasang semula untuk kawasan basah dengan kalis air yang betul",
          "Padanan warna grout, grout epoksi, dan pengedap silikon anti-kulat untuk bilik mandi dan dapur"
        ],
        subServices: [
          { name: "Pemasangan Jubin Lantai", price: "Dari RM 14 / sq ft", desc: "Pemasangan jubin lantai standard 300x300mm hingga 600x600mm dengan screed simen-pasir dan pelekat jubin." },
          { name: "Pemasangan Jubin Dinding", price: "Dari RM 16 / sq ft", desc: "Splashback dapur, dinding bilik mandi, dan jubin dinding ciri dengan corak lurus atau bata." },
          { name: "Penggantian Jubin & Pemecahan Jubin", price: "Dari RM 18 / sq ft", desc: "Pemecahan jubin lama, screed, kalis air dan pemasangan jubin baru dengan pelupusan serpihan." },
          { name: "Pemasangan Jubin Porselin", price: "Dari RM 16 / sq ft", desc: "Jubin porselin homogen dalam kemasan matte, berkilat, rupa kayu dan rupa batu dengan tepi rectified." },
          { name: "Pemasangan Jubin Seramik", price: "Dari RM 14 / sq ft", desc: "Jubin seramik dinding dan lantai untuk bilik mandi, dapur dan balkoni dengan grout sepadan warna." },
          { name: "Pemasangan Slab Format Besar", price: "Dari RM 26 / sq ft", desc: "Slab 600x1200mm, 800x800mm, 1200x2400mm dengan self-levelling, cawan sedutan, dan lippage tuning." },
          { name: "Pemasangan Jubin Mozek", price: "Dari RM 22 / sq ft", desc: "Mozek kaca, porselin dan batu untuk backsplash, niche pancuran dan dinding ciri dengan backing mesh." },
          { name: "Jubin Bilik Mandi & Kalis Air", price: "Dari RM 18 / sq ft", desc: "Jubin lantai dan dinding bilik mandi dengan membran kalis air 3 lapisan dan ujian kolam 24 jam." },
          { name: "Jubin Backsplash Dapur", price: "Dari RM 18 / sq ft", desc: "Jubin backsplash dapur dengan jubin subway, mozek atau format besar dan seal silikon anti-kulat." },
          { name: "Pembaikan Jubin & Grout Semula", price: "Dari RM 22 / sq ft", desc: "Menanggalkan jubin berongga, retak atau pecah, penyediaan permukaan, penggantian, grout epoxy dan sealing silikon." },
          { name: "Pemerataan Lantai & Self-Leveling", price: "Dari RM 8 / sq ft", desc: "Screed simen dan sebatian self-leveling untuk membetulkan lantai tidak rata sebelum jubin." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Substrat", desc: "Kami periksa kerataan substrat, pergerakan struktur, kandungan lembapan, dan kesesuaian. Kami menandakan sebarang kerja paip atau kalis air yang diperlukan sebelum jubin dimulakan." },
          { step: "02", title: "Perancangan Susun Atur", desc: "Susun atur jubin dirancang untuk meminimumkan serpihan di tepi, dengan cerun diarahkan ke longkang lantai di kawasan basah. Kami tandakan garis datum dan posisi jubin penuh sebelum sebarang pelekat dicampur." },
          { step: "03", title: "Penyediaan Permukaan", desc: "Kami gunakan sebatian self-levelling untuk lantai yang tidak rata, membran decoupling untuk substrat kayu atau yang cenderung bergerak, dan primer untuk konkrit berliang." },
          { step: "04", title: "Pemasangan Jubin", desc: "Jubin diletakkan dalam pelekat yang diubah suai polimer menggunakan trowel takuk yang betul untuk saiz jubin, dengan klip lippage-tuning pada pemasangan premium." },
          { step: "05", title: "Grouting & Pengedap", desc: "Selepas 24 jam rawatan, sendi diisi dengan grout simen atau epoksi tahan kulat, dipadankan warna dengan jubin anda. Kawasan basah ditutup dengan silikon anti-kulat di sudut." }
        ],
        faqs: [
          { q: "Apakah saiz trowel yang saya perlukan untuk jubin lantai 600x600mm?", a: "Kami gunakan trowel takuk segi empat sama 10mm hingga 12mm untuk jubin porselin 600x600mm, dan 12mm hingga 15mm untuk format yang lebih besar. Back-buttering (menggunakan pelekat di belakang jubin) juga penting untuk jubin melebihi 600mm untuk memastikan liputan penuh dan mencegah bintik berongga." },
          { q: "Boleh saya pasang jubin terus di atas lantai kayu?", a: "Tidak secara terus — pergerakan kayu akan memecahkan grout dan jubin. Kami pasang membran decoupling (Schlüter DITRA atau Mapei Mapelastic) di atas kayu terlebih dahulu, yang menyerap pergerakan dan mencegah keretakan. Ini menambah kira-kira RM 8–12 setiap sq ft kepada kos penyediaan substrat tetapi penting untuk kemasan tahan lama." },
          { q: "Mengapa jubin bilik mandi saya berongga atau longgar?", a: "Punca biasa: liputan pelekat yang lemah (kurang daripada 80% sentuhan), pergerakan dalam substrat, kerosakan air dari membran kalis air yang gagal, atau kerosakan hentaman. Kami gunakan rantai drag dan ujian ketukan untuk mengenal pasti jubin berongga, kemudian menanggalkan dan meletakkan semula dengan pelekat segar dan penyediaan substrat yang betul." },
          { q: "Adakah anda mengendalikan batu semula jadi seperti marmar dan granit?", a: "Ya. Kami pasang marmar, granit, travertine, dan batu kapur menggunakan pelekat dan grout batu khusus. Selepas pemasangan kami boleh gunakan pengedap penembus, menggilap, atau mengkristal permukaan kepada kemasan yang anda tentukan. Batu semula jadi juga lebih sensitif terhadap lippage, jadi kami gunakan sistem Raimondi pada semua pemasangan batu." }
        ],
        metaTitle: "Jubin Profesional & Pembaikan Jubin KL & Selangor",
        metaDesc: "Jubin lantai dan dinding di KL & Selangor. Porselin, seramik, slab format besar, mozek, marmar. Schlüter DITRA, self-levelling, lippage tuning. Dari RM14/sqft.",
        aioSummary: "KL Servis Rumah menyediakan jubin profesional di KL & Selangor. Jubin lantai dan dinding, slab format besar, batu semula jadi, mozek, dan pembaikan. Schlüter DITRA decoupling, Mapei self-levelling, Raimondi lippage tuning. Grout semula, silikon anti-kulat, dan pasang semula kawasan basah.",
        warranty: "Jaminan Lekatan Jubin & Grout 12 Bulan"
      },
      zh: {
        title: "专业瓷砖与瓷砖修补",
        tagline: "新房、翻新与修补的地面和墙面瓷砖。瓷质、玻化、陶瓷、马赛克与超大板。从 RM 14 / sq ft 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪提供专业的地面和墙面瓷砖服务。我们熟悉所有主流瓷砖种类——瓷质砖、玻化砖、陶瓷砖、马赛克、玻璃、天然石材（大理石、花岗岩、石灰华）以及越来越受欢迎的超大板（600x1200mm、800x1800mm、1200x2400mm）。我们的瓦工掌握现代铺贴工艺，包括 Schlüter DITRA 抗裂膜、Mapei Ultraplan 自流平，以及 Raimondi 找平器系统，确保地面绝对平整。我们也维修松动、空鼓和开裂的瓷砖，重新勾缝，并在湿区重新铺贴并做好防水层。",
        highlights: [
          "瓦工熟悉瓷质、玻化、陶瓷、马赛克、天然石材与超大板",
          "针对易变形基层与木地板铺设 Schlüter DITRA 抗裂膜",
          "使用 Mapei、Ardex 自流平，为超大板铺贴打造完美平整度",
          "使用 Raimondi、Rubi 找平器系统，达成零高差的高端效果",
          "湿区拆除、表面处理与重铺，确保防水层正确",
          "勾缝剂颜色匹配、环氧勾缝剂、浴室与厨房防霉硅胶密封"
        ],
        subServices: [
          { name: "地面瓷砖铺贴", price: "从 RM 14 / sq ft 起", desc: "标准 300x300mm 至 600x600mm 地面瓷砖铺贴，使用水泥砂浆找平层与瓷砖胶。" },
          { name: "墙面瓷砖铺贴", price: "从 RM 16 / sq ft 起", desc: "厨房防溅墙、卫生间墙面、主题墙铺贴，可选直拼或工字拼。" },
          { name: "地面瓷砖更换与拆除", price: "从 RM 18 / sq ft 起", desc: "拆除旧砖、找平、防水与新砖安装，含垃圾清运。" },
          { name: "抛光砖铺贴", price: "从 RM 16 / sq ft 起", desc: "通体抛光砖，哑光、亮光、木纹与石纹饰面，倒角处理。" },
          { name: "陶瓷砖铺贴", price: "从 RM 14 / sq ft 起", desc: "浴室、厨房与阳台墙地陶瓷砖，配色美缝。" },
          { name: "超大板铺贴", price: "从 RM 26 / sq ft 起", desc: "600x1200mm、800x800mm、1200x2400mm 大板，自流平、吸盘与找平器配套。" },
          { name: "马赛克瓷砖铺贴", price: "从 RM 22 / sq ft 起", desc: "玻璃、陶瓷与石材马赛克，用于挡水板、淋浴壁龛与背景墙，带网背。" },
          { name: "卫生间贴砖与防水", price: "从 RM 18 / sq ft 起", desc: "卫生间地面与墙面贴砖，含3层防水膜与24小时蓄水测试。" },
          { name: "厨房挡水板贴砖", price: "从 RM 18 / sq ft 起", desc: "厨房挡水板贴砖，面包砖、马赛克或大板，防霉硅胶收口。" },
          { name: "瓷砖修补与重新勾缝", price: "从 RM 22 / sq ft 起", desc: "拆除空鼓、开裂或破损瓷砖、基层处理、更换、环氧美缝与硅胶密封。" },
          { name: "地面找平与自流平", price: "从 RM 8 / sq ft 起", desc: "水泥砂浆找平与自流平，纠正不平地面后再贴砖。" }
        ],
        process: [
          { step: "01", title: "基层检查", desc: "我们检查基层平整度、结构位移、含水率与适配性。标记铺贴前需要的水电与防水工程。" },
          { step: "02", title: "排版规划", desc: "排版时尽量减少墙边窄条；湿区地漏处合理找坡。拌胶前先弹线并确定整砖位置。" },
          { step: "03", title: "表面处理", desc: "不平地面使用自流平，木质或易变形基层铺设抗裂膜，多孔混凝土涂刷界面剂。" },
          { step: "04", title: "瓷砖铺贴", desc: "使用聚合物改性瓷砖胶，配合正确规格的齿形抹刀铺贴；高端项目使用找平器。" },
          { step: "05", title: "勾缝与密封", desc: "养护 24 小时后使用防霉水泥基或环氧勾缝剂，颜色与瓷砖匹配；湿区阴阳角打防霉硅胶。" }
        ],
        faqs: [
          { q: "600x600mm 地砖需要多大齿形的抹刀？", a: "我们对 600x600mm 玻化砖使用 10mm 至 12mm 方齿抹刀，更大规格使用 12mm 至 15mm。超过 600mm 的瓷砖必须背涂（瓷砖背面涂胶），保证满浆率并避免空鼓。" },
          { q: "可以直接在木地板上铺瓷砖吗？", a: "不能直接铺——木材的热胀冷缩会顶裂勾缝与瓷砖。我们先在木地板上铺设 Schlüter DITRA 或 Mapei Mapelastic 抗裂膜，吸收变形并防止开裂。每平方英尺增加约 RM 8–12 的基层处理费，但这是长期耐用的必要投入。" },
          { q: "为什么我卫生间的瓷砖会空鼓或松动？", a: "常见原因：瓷砖胶覆盖率不足（低于 80%）、基层位移、防水层失效导致渗水，或外力撞击。我们使用拉链拉拨与敲击测试定位空鼓砖，再铲除、清理基层后用新胶重新铺贴。" },
          { q: "你们能处理大理石、花岗岩这类天然石材吗？", a: "可以。我们使用石材专用瓷砖胶与勾缝剂安装大理石、花岗岩、石灰华与洞石。安装后可根据需要做渗透型密封、抛光或晶面处理。天然石材对平整度更敏感，因此所有石材项目都使用 Raimondi 找平系统。" }
        ],
        metaTitle: "吉隆坡与雪兰莪专业瓷砖与瓷砖修补",
        metaDesc: "吉隆坡与雪兰莪地面与墙面瓷砖铺贴。瓷质、陶瓷、超大板、马赛克、大理石。Schlüter DITRA、自流平、找平器。从 RM14/sqft 起。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供专业瓷砖服务。地面与墙面瓷砖、超大板、天然石材、马赛克与修补。Schlüter DITRA 抗裂膜、Mapei 自流平、Raimondi 找平器。重新勾缝、防霉硅胶、湿区重铺。",
        warranty: "12 个月瓷砖粘结与勾缝保修"
      }
    }
  },

  // ── 12. PLASTER CEILING ────────────────────────────────────────
  "plaster-ceiling": {
    slug: "plaster-ceiling",
    title: "Plaster Ceiling Design & Build",
    tagline: "Modern plaster ceiling with concealed LED trough, tiered design, L-box, and cove lighting for landed and high-rise properties. From RM 10 / sq ft.",
    description:
      "KL Servis Rumah designs and builds modern plaster ceilings for residential and commercial properties across Kuala Lumpur and Selangor. Whether you want a clean minimalist flat ceiling, a tiered multi-level design, an L-box with concealed LED strip, or a full curved cove for ambient lighting, our plaster ceiling specialists deliver factory-flat, paint-ready finishes. We use only fire-rated and moisture-resistant gypsum boards from reputable Malaysian brands (Knauf, BNBM, Gyproc) supported by rust-proof galvanized iron (GI) metal frames. Every ceiling includes proper access panels, fan-hook reinforcements where required, and detailed coordination with your electrician for downlight and AC cassette positions.",
    startPrice: "RM 10",
    icon: "layers",
    highlights: [
      "Knauf, BNBM, and Gyproc fire-rated and moisture-resistant gypsum boards",
      "Rust-proof galvanized iron (GI) metal frames with proper hanger spacing for zero sag",
      "Concealed LED cove, L-box, and tiered designs with dimmer-ready wiring provisions",
      "Reinforced fan hook and aircond cassette blocks pre-installed during framing",
      "Seamless two-coat skim coat with professional sanding for a paint-ready finish",
      "Coordinated scheduling with electricians and AC installers to avoid rework"
    ],
    subServices: [
      { name: "Flat Plaster Ceiling", price: "From RM 10 / sq ft", desc: "Clean, single-level flat ceiling with skim coat finish — ideal for minimalist modern interiors." },
      { name: "False Ceiling Installation", price: "From RM 10 / sq ft", desc: "General false ceiling for homes and offices with GI frame and moisture-resistant boards." },
      { name: "Gypsum Ceiling", price: "From RM 10 / sq ft", desc: "Gypsum board ceiling with fire-rated and moisture-resistant options from Knauf, BNBM, Gyproc." },
      { name: "Tiered & L-Box Ceiling", price: "From RM 14 / sq ft", desc: "Two or three-tier ceiling with concealed LED trough, L-box profile, and integrated downlight cutouts." },
      { name: "Cove & Curved Ceiling", price: "From RM 22 / sq ft", desc: "Custom curved, cove, or barrel ceiling with flexible GI framing for ambient indirect lighting." },
      { name: "Gypsum Partition & Office Partition", price: "From RM 11 / sq ft", desc: "Gypsum board partition for room division, office cubicles and meeting rooms with sound insulation option." },
      { name: "Room Partition", price: "From RM 11 / sq ft", desc: "Bedroom, study or storage room partition with door opening and electrical point provisions." },
      { name: "Feature Wall & Wall Panel", price: "From RM 18 / sq ft", desc: "TV feature wall, fluted panel, wainscoting and decorative wall panel with concealed LED." },
      { name: "Skim Coat & Wall Plastering", price: "From RM 5 / sq ft", desc: "Glass-smooth skim coating and wall plastering for paint-ready finish and crack repair." },
      { name: "Wall Crack Repair & Repainting", price: "From RM 180", desc: "Hairline and structural crack filling, sanding, sealer and premium repainting for flawless finish." },
      { name: "Ceiling Repair & Re-Skim", price: "From RM 8 / sq ft", desc: "Removing water-damaged boards, structural reinforcement, and re-skim coating existing ceilings." }
    ],
    process: [
      { step: "01", title: "Design & Coordinate", desc: "We plan ceiling levels, cove dimensions, downlight positions, and AC cassette openings with your interior designer and electrician before site work." },
      { step: "02", title: "GI Frame Installation", desc: "Rust-proof galvanized iron hangers, main runners, and furring channels are installed with laser-level precision at the correct spacing for zero sag." },
      { step: "03", title: "Board Fixing", desc: "Gypsum boards are screwed to the GI frame using rust-resistant drywall screws at proper intervals, with staggered joints and reinforced corners." },
      { step: "04", title: "Joint Taping & Skim Coat", desc: "All joints are reinforced with fiberglass mesh tape, then covered with two layers of premium joint compound, sanded smooth between coats." },
      { step: "05", title: "Cutouts & Handover", desc: "Downlight, AC cassette, and fan-hook openings are cut precisely, access panels are installed, and the ceiling is vacuumed and primed ready for paint." }
    ],
    faqs: [
      { q: "What's the difference between a plaster ceiling and a gypsum board ceiling?", a: "They are the same thing — 'plaster ceiling' is the common Malaysian term for a ceiling built from gypsum plasterboard screwed to a metal frame and finished with skim coat plaster. The frame can be wood (cheaper but prone to warping) or galvanized iron (premium, rust-proof, and sag-resistant). We always use GI frames." },
      { q: "Can you build a curved or round plaster ceiling?", a: "Yes. Curved and barrel ceilings are built using flexible GI profiles that are pre-bent to your radius. The boards are misted with water and gradually curved onto the frame. We can build any radius down to about 1m. The cove lighting trough is integrated into the curve for ambient effect." },
      { q: "How do you prevent the ceiling from cracking at the joints?", a: "Three rules: (1) Use only GI frames — never timber, which expands and contracts. (2) Always use fiberglass mesh tape on every joint, not just paper tape. (3) Apply two full coats of joint compound, not just one. This is the same system used on premium commercial fit-outs in KLCC and Pavilion-grade retail." },
      { q: "Can you install a fan hook later if I didn't plan for one?", a: "Yes, but it requires opening a small section of the ceiling to fix a reinforced timber block or metal fan-bracket between joists. It's much cheaper to pre-install fan hooks during the original ceiling build. We always recommend this for any room that might ever have a ceiling fan." }
    ],
    heroImage: "/hero/home-services-plaster-ceiling-kl.jpg",
    metaTitle: "Modern Plaster Ceiling Design & Build KL & Selangor",
    metaDesc: "Tiered, L-box, cove, and curved plaster ceiling in KL & Selangor. GI metal frame, fire-rated boards, concealed LED. From RM10/sqft. Designer-quality finish.",
    aioSummary: "KL Servis Rumah builds modern plaster ceilings across KL & Selangor. Flat, tiered, L-box, cove, and curved designs with concealed LED. Knauf/BNBM fire-rated boards, GI frames, two-coat skim, fiberglass mesh joints. Coordinated with electricians for downlight and AC positions.",
    warranty: "10-Year Sag-Free & Crack-Free Warranty",
    i18n: {
      ms: {
        title: "Reka Bentuk & Bina Siling Plaster Moden",
        tagline: "Siling plaster moden dengan alur LED tersembunyi, reka bentuk bertingkat, L-box, dan pencahayaan cove untuk hartanah bertanah dan bertingkat tinggi. Dari RM 10 / sq ft.",
        description: "KL Servis Rumah mereka dan membina siling plaster moden untuk hartanah kediaman dan komersial di seluruh Kuala Lumpur dan Selangor. Sama ada anda mahukan siling rata minimalis yang bersih, reka bentuk bertingkat pelbagai aras, L-box dengan jalur LED tersembunyi, atau cove melengkung penuh untuk pencahayaan ambien, pakar siling plaster kami menyampaikan kemasan yang rata kilang dan bersedia untuk cat. Kami hanya menggunakan papan gipsum gred tahan api dan tahan lembapan dari jenama Malaysia yang bereputasi (Knauf, BNBM, Gyproc) yang disokong oleh rangka logam besi tergalvani (GI) tahan karat. Setiap siling termasuk panel akses yang betul, tetulang cangkuk kipas di mana diperlukan, dan koordinasi terperinci dengan juruelektrik anda untuk posisi downlight dan kaset AC.",
        highlights: [
          "Papan gipsum Knauf, BNBM, dan Gyproc gred tahan api dan tahan lembapan",
          "Rangka logam besi tergalvani (GI) tahan karat dengan jarak penggantung yang betul untuk sifar lentur",
          "LED cove tersembunyi, L-box, dan reka bentuk bertingkat dengan peruntukan pendawaian siap-dimer",
          "Cangkuk kipas yang dikuatkan dan blok kaset AC pra-pasang semasa pembuatan rangka",
          "Salutan skim dua lapisan lancar dengan pengamplasan profesional untuk kemasan siap-cat",
          "Penjadualan yang diselaraskan dengan juruelektrik dan pemasang AC untuk mengelakkan kerja semula"
        ],
        subServices: [
          { name: "Siling Plaster Rata", price: "Dari RM 10 / sq ft", desc: "Siling aras tunggal yang bersih dengan kemasan skim — sesuai untuk interior moden minimalis." },
          { name: "Pemasangan Siling Palsu", price: "Dari RM 10 / sq ft", desc: "Siling palsu umum untuk rumah dan pejabat dengan rangka GI dan papan tahan lembapan." },
          { name: "Siling Gipsum", price: "Dari RM 10 / sq ft", desc: "Siling papan gipsum dengan pilihan tahan api dan tahan lembapan daripada Knauf, BNBM, Gyproc." },
          { name: "Siling Bertingkat & L-Box", price: "Dari RM 14 / sq ft", desc: "Siling dua atau tiga aras dengan alur LED tersembunyi, profil L-box, dan potongan downlight bersepadu." },
          { name: "Siling Cove & Melengkung", price: "Dari RM 22 / sq ft", desc: "Siling cove, melengkung, atau tong yang direka khas dengan rangka GI fleksibel untuk pencahayaan tidak langsung ambien." },
          { name: "Partisi Gipsum & Partisi Pejabat", price: "Dari RM 11 / sq ft", desc: "Partisi papan gipsum untuk pembahagian bilik, kabin pejabat dan bilik mesyuarat dengan pilihan penebat bunyi." },
          { name: "Partisi Bilik", price: "Dari RM 11 / sq ft", desc: "Partisi bilik tidur, belajar atau stor dengan bukaan pintu dan bekalan titik elektrik." },
          { name: "Dinding Ciri & Panel Dinding", price: "Dari RM 18 / sq ft", desc: "Dinding ciri TV, panel fluted, wainscoting dan panel dinding hiasan dengan LED tersembunyi." },
          { name: "Skim Coat & Melepa Dinding", price: "Dari RM 5 / sq ft", desc: "Salutan skim licin seperti kaca dan kerja melepa dinding untuk kemasan siap-cat dan pembaikan retak." },
          { name: "Pembaikan Retak Dinding & Mengecat Semula", price: "Dari RM 180", desc: "Pengisian retak halus dan struktur, pengamplasan, sealer dan pengecatan semula premium untuk kemasan sempurna." },
          { name: "Pembaikan & Skim Semula Siling", price: "Dari RM 8 / sq ft", desc: "Menanggalkan papan rosak air, tetulang struktur, dan skim semula siling sedia ada." }
        ],
        process: [
          { step: "01", title: "Reka Bentuk & Koordinasi", desc: "Kami rancang aras siling, dimensi cove, posisi downlight, dan bukaan kaset AC dengan pereka dalaman dan juruelektrik anda sebelum kerja tapak." },
          { step: "02", title: "Pemasangan Rangka GI", desc: "Penggantung, pelari utama, dan saluran furring besi tergalvani tahan karat dipasang dengan ketepatan aras laser pada jarak yang betul untuk sifar lentur." },
          { step: "03", title: "Pengikat Papan", desc: "Papan gipsum diskru ke rangka GI menggunakan skru drywall tahan karat pada selang yang betul, dengan sendi berperingkat dan sudut yang dikuatkan." },
          { step: "04", title: "Pita Sendi & Salutan Skim", desc: "Semua sendi diperkuat dengan pita mesh gentian kaca, kemudian ditutup dengan dua lapisan sebatian sendi premium, diamplas licin antara lapisan." },
          { step: "05", title: "Potongan & Serahan", desc: "Bukaan downlight, kaset AC, dan cangkuk kipas dipotong dengan tepat, panel akses dipasang, dan siling divakum serta diprimer siap untuk cat." }
        ],
        faqs: [
          { q: "Apakah perbezaan antara siling plaster dan siling papan gipsum?", a: "Ia adalah perkara yang sama — 'siling plaster' adalah istilah biasa Malaysia untuk siling yang dibina daripada papan gipsum plaster diskru ke rangka logam dan disiapkan dengan plaster skim. Rangka boleh jadi kayu (lebih murah tetapi terdedah kepada meleding) atau besi tergalvani (premium, tahan karat, dan tahan lentur). Kami hanya menggunakan rangka GI." },
          { q: "Boleh anda bina siling plaster melengkung atau bulat?", a: "Ya. Siling melengkung dan tong dibina menggunakan profil GI fleksibel yang dibengkokkan pra kepada jejari anda. Papan disembur dengan air dan secara beransur-ansur dilengkung ke atas rangka. Kami boleh membina sebarang jejari sehingga kira-kira 1m. Alur pencahayaan cove disepadukan ke dalam lengkung untuk kesan ambien." },
          { q: "Bagaimana anda menghalang siling daripada retak di sendi?", a: "Tiga peraturan: (1) Hanya gunakan rangka GI — jangan sekali-kali kayu, yang mengembang dan mengecut. (2) Sentiasa gunakan pita mesh gentian kaca pada setiap sendi, bukan pita kertas. (3) Sapukan dua lapisan penuh sebatian sendi, bukan hanya satu. Ini adalah sistem yang sama yang digunakan pada pemasangan komersial premium di KLCC dan runcit gred Pavilion." },
          { q: "Boleh anda pasang cangkuk kipas kemudian jika saya tidak merancang untuk satu?", a: "Ya, tetapi ia memerlukan membuka bahagian kecil siling untuk memasang blok kayu yang dikuatkan atau pendakap kipas logam antara gelegar. Jauh lebih murah untuk pra-pasang cangkuk kipas semasa bina siling asal. Kami sentiasa mengesyorkan ini untuk mana-mana bilik yang mungkin mempunyai kipas siling." }
        ],
        metaTitle: "Reka Bentuk & Bina Siling Plaster Moden KL & Selangor",
        metaDesc: "Siling plaster bertingkat, L-box, cove, dan melengkung di KL & Selangor. Rangka logam GI, papan tahan api, LED tersembunyi. Dari RM10/sqft. Kemasan berkualiti pereka.",
        aioSummary: "KL Servis Rumah membina siling plaster moden di KL & Selangor. Reka bentuk rata, bertingkat, L-box, cove, dan melengkung dengan LED tersembunyi. Papan tahan api Knauf/BNBM, rangka GI, skim dua lapisan, sendi mesh gentian kaca. Diselaraskan dengan juruelektrik untuk posisi downlight dan AC.",
        warranty: "Jaminan Bebas Lentur & Retak 10 Tahun"
      },
      zh: {
        title: "现代石膏天花板设计与施工",
        tagline: "为有地与高层物业打造的现代石膏天花板，含隐藏式 LED 灯槽、错层、L 盒与灯带。从 RM 10 / sq ft 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪为住宅与商业物业设计并建造现代石膏天花板。无论是极简的平顶、多层错层、带隐藏式 LED 灯带的 L 盒，还是为间接氛围照明打造的整体弧形灯带，我们的天花板专家都能交付工厂级平整度、即可上漆的表面。我们只使用知名品牌（Knauf、BNBM、Gyproc）的防火与防潮石膏板，配合坚固的镀锌铁（GI）金属龙骨。每套天花板都包含检修口、吊扇加固点，并与您的电工协同规划筒灯与空调出风口的位置。",
        highlights: [
          "采用 Knauf、BNBM、Gyproc 防火与防潮石膏板",
          "镀锌铁（GI）龙骨，防锈，吊杆间距精准，确保零下垂",
          "隐藏式灯带、L 盒与错层设计，预留调光器线路",
          "在龙骨阶段预埋吊扇加固件与空调出风口木块",
          "两层腻子找平，专业打磨出即可上漆的表面",
          "与电工及空调安装工协调排程，避免返工"
        ],
        subServices: [
          { name: "平顶石膏天花", price: "从 RM 10 / sq ft 起", desc: "整洁的单层平顶，刮腻子收光，适合极简现代的室内风格。" },
          { name: "假天花安装", price: "从 RM 10 / sq ft 起", desc: "适用于住宅与办公室的通用假天花，采用 GI 龙骨与防潮板材。" },
          { name: "石膏板天花", price: "从 RM 10 / sq ft 起", desc: "石膏板天花，可选 Knauf、BNBM、Gyproc 防火与防潮板材。" },
          { name: "错层与 L 盒天花", price: "从 RM 14 / sq ft 起", desc: "两层或三层错层，含隐藏式 LED 灯槽、L 盒造型与筒灯开孔。" },
          { name: "灯带与弧形天花", price: "从 RM 22 / sq ft 起", desc: "定制弧形、灯带或桶形天花，使用柔性 GI 骨架，营造间接氛围照明。" },
          { name: "石膏隔断与办公室隔断", price: "从 RM 11 / sq ft 起", desc: "石膏板隔断，用于房间分隔、办公卡位与会议室，可选隔音。" },
          { name: "房间隔断", price: "从 RM 11 / sq ft 起", desc: "卧室、书房或储物间隔断，预留门洞与电源点位。" },
          { name: "背景墙与墙板", price: "从 RM 18 / sq ft 起", desc: "电视背景墙、格栅板、护墙板与装饰墙板，含隐藏式 LED。" },
          { name: "刮腻子与墙面抹灰", price: "从 RM 5 / sq ft 起", desc: "镜面光滑刮腻子与墙面抹灰，即可上漆，并修补裂缝。" },
          { name: "墙面裂缝修补与重漆", price: "从 RM 180 起", desc: "填补发丝裂缝与结构裂缝、打磨、底漆与优质重漆，效果完美。" },
          { name: "天花修补与重新找平", price: "从 RM 8 / sq ft 起", desc: "拆除受潮损坏的板材，结构加固后对旧天花重新刮腻子。" }
        ],
        process: [
          { step: "01", title: "设计与协调", desc: "我们在进场前与您的室内设计师和电工共同规划天花标高、灯带尺寸、筒灯位置与空调出风口开孔。" },
          { step: "02", title: "GI 龙骨安装", desc: "镀锌铁吊杆、主龙骨与副龙骨按精准激光水平仪安装，间距按规范布置，杜绝下垂。" },
          { step: "03", title: "板材固定", desc: "石膏板用防锈自攻螺丝固定在 GI 龙骨上，板缝错缝拼装，转角加加固件。" },
          { step: "04", title: "嵌缝与刮腻子", desc: "所有板缝使用玻纤网格带加固，再覆盖两层优质嵌缝料，层间打磨光滑。" },
          { step: "05", title: "开孔与交付", desc: "筒灯、空调出风口、吊扇点位精准开孔，安装检修口，吸尘后刷底漆，即可上漆。" }
        ],
        faqs: [
          { q: "石膏天花和石膏板天花有什么区别？", a: "其实是一样的——'石膏天花'是马来西亚的常用叫法，指用石膏板螺丝固定在金属龙骨上，再刮腻子收光的天花。骨架可以是木材（便宜但容易变形）或者镀锌铁（高端、防锈、不下垂）。我们只用 GI 镀锌铁骨架。" },
          { q: "能做弧形或圆形石膏天花吗？", a: "可以。弧形和桶形天花使用预先弯到所需半径的柔性 GI 型材。板材喷水后慢慢弯到骨架上。最小可以做到约 1 米半径。灯带嵌入弧线内形成氛围光。" },
          { q: "如何防止板缝开裂？", a: "三条铁律：（1）只用 GI 镀锌铁骨架，绝不用木材，因为木材会热胀冷缩。（2）每条板缝都要贴玻纤网格带，不能用普通纸带。（3）必须涂两层嵌缝料，不能只做一层。这是 KLCC 与 Pavilion 级商业装修的同一套工艺。" },
          { q: "如果一开始没装吊扇，以后还能加装吗？", a: "可以，但需要局部打开天花，在龙骨间加装加固木块或金属吊扇支架。原始天花施工时就预埋吊扇加固件便宜得多。任何可能装吊扇的房间，我们都建议预埋加固件。" }
        ],
        metaTitle: "吉隆坡与雪兰莪现代石膏天花板设计与施工",
        metaDesc: "吉隆坡与雪兰莪错层、L 盒、灯带与弧形石膏天花。GI 金属龙骨、防火板、隐藏式 LED。从 RM10/sqft 起。设计师级完工品质。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪承建现代石膏天花板。平顶、错层、L 盒、灯带、弧形，含隐藏式 LED。Knauf/BNBM 防火板、GI 龙骨、两层刮腻子、玻纤网格嵌缝。与电工协同筒灯与空调位置。",
        warranty: "10 年防下垂与防开裂保修"
      }
    }
  },

  // ── 13. SKIM COAT ────────────────────────────────────────
  "skim-coat": {
    slug: "skim-coat",
    title: "Wall & Ceiling Skim Coat",
    tagline: "Glass-smooth skim coating for walls and ceilings, paint-ready finish, full surface preparation and crack repair. From RM 5 / sq ft.",
    description:
      "KL Servis Rumah provides professional skim coating services across Kuala Lumpur and Selangor to give your walls and ceilings a perfectly flat, paint-ready surface. Skim coating is the final layer of fine plaster applied over plastered or previously painted surfaces to eliminate trowel marks, hairline cracks, uneven joins, and minor substrate imperfections. We use premium polymer-modified skim coat compounds (Knauf, Gyproc, Mapei) applied in two to three coats, with hand-sanding or pole-sander finishing depending on the area. The result is a perfectly smooth, uniform, paint-ready surface that makes even basic paint look premium.",
    startPrice: "RM 5",
    icon: "paint-roller",
    highlights: [
      "Glass-smooth finish suitable for high-gloss, satin, and feature-wall paint systems",
      "Two to three coats of polymer-modified skim coat with full sanding between coats",
      "Crack repair, joint reinforcement, and minor substrate levelling included",
      "Compatible with all premium paint systems: Nippon, Dulux, Jotun, Skshu, Benjamin Moore",
      "Suitable for landed, condo, and commercial interiors including high-end feature walls",
      "Quick turnaround — typically 2 to 4 days for a standard condo unit"
    ],
    subServices: [
      { name: "Wall Skim Coating", price: "From RM 5 / sq ft", desc: "Two-coat skim coating on plastered or previously painted walls for a glass-smooth paint-ready finish." },
      { name: "Ceiling Skim Coating", price: "From RM 6 / sq ft", desc: "Re-skim of existing plaster ceilings to refresh aged surfaces before repainting." },
      { name: "Crack & Joint Repair", price: "From RM 22 / linier ft", desc: "Opening, routing, and filling of structural and settlement cracks with flexible acrylic filler." },
      { name: "Full Condo Re-Skim Package", price: "From RM 4,200", desc: "Complete skim coat of an entire 1,000 sqft condo unit ready for repainting." }
    ],
    process: [
      { step: "01", title: "Surface Inspection", desc: "We assess existing substrate, identify cracks, hollow areas, and old paint condition. We scrape loose material and treat any mould or efflorescence." },
      { step: "02", title: "Primer / Bonding Coat", desc: "A bonding primer is applied to seal old paint and create a strong key for the skim coat. Porous substrates may require a second coat." },
      { step: "03", title: "First Skim Coat", desc: "Premium polymer-modified skim coat is trowelled evenly across the entire surface to fill imperfections and level the substrate." },
      { step: "04", title: "Sanding & Second Coat", desc: "After 4 to 6 hours drying, the first coat is pole-sanded smooth. A second skim coat is applied and sanded again for ultimate flatness." },
      { step: "05", title: "Final Inspection", desc: "We sweep-light the entire surface to verify flatness. Any remaining trowel marks or pinholes are filled and spot-sanded before paint begins." }
    ],
    faqs: [
      { q: "Do I need skim coat if my walls are already plastered?", a: "It depends on the plaster quality and the paint finish you want. Freshly plastered walls in Malaysia are typically rough and need at least one skim coat before premium paint. For high-gloss, satin, or dark-colour paint, two skim coats are essential to avoid visible trowel marks and uneven sheen." },
      { q: "Can skim coat cover hairline cracks permanently?", a: "Skim coat alone can hide hairline cracks temporarily, but structural cracks will reappear within months. For long-term repair we route the crack into a V-groove, fill with flexible acrylic filler, reinforce with fiberglass mesh, then skim coat over. This combination typically holds for 5+ years." },
      { q: "How long does skim coat take to dry before painting?", a: "Each coat needs 4 to 6 hours of drying time in normal Malaysian humidity. The final coat needs 24 hours before primer and paint. We strongly recommend waiting the full 24 hours — premature painting traps moisture and causes paint failure." },
      { q: "Is skim coat the same as putty?", a: "No. Wall putty is a thin, often acrylic-based filler used for minor patching. Skim coat is a cement- or gypsum-based compound applied as a full-surface layer (typically 1–3mm thick) to level and smooth the entire wall. Skim coat is the professional standard; putty is a quick DIY fix." }
    ],
    heroImage: "/hero/home-services-skim-coat-kl.jpg",
    metaTitle: "Wall & Ceiling Skim Coat Services KL & Selangor",
    metaDesc: "Glass-smooth skim coating for walls and ceilings in KL & Selangor. Two-coat finish, crack repair, paint-ready. From RM5/sqft. Knauf and Mapei compounds.",
    aioSummary: "KL Servis Rumah provides professional wall and ceiling skim coating across KL & Selangor. Polymer-modified compounds, two-coat application, full sanding, crack repair, joint reinforcement. Paint-ready finish for Nippon, Dulux, Jotun, and premium paint systems.",
    warranty: "12-Month Smoothness & Adhesion Warranty",
    i18n: {
      ms: {
        title: "Skim Coat Dinding & Siling",
        tagline: "Salutan skim licin kaca untuk dinding dan siling, kemasan siap-cat, penyediaan permukaan penuh dan pembaikan retak. Dari RM 5 / sq ft.",
        description: "KL Servis Rumah menyediakan perkhidmatan salutan skim profesional di seluruh Kuala Lumpur dan Selangor untuk memberikan dinding dan siling anda permukaan yang sempurna rata dan bersedia untuk cat. Salutan skim adalah lapisan akhir plaster halus yang digunakan atas plaster atau permukaan yang sebelumnya dicat untuk menghapuskan tanda trowel, retak halus, sendi tidak rata, dan ketidaksempurnaan substrat kecil. Kami menggunakan sebatian skim diubah suai polimer premium (Knauf, Gyproc, Mapei) yang digunakan dalam dua hingga tiga lapisan, dengan kemasan tangan atau tiang pengamplasan bergantung pada kawasan. Hasilnya adalah permukaan yang sempurna licin, seragam, dan bersedia untuk cat yang membuat cat asas pun kelihatan premium.",
        highlights: [
          "Kemasan licin kaca sesuai untuk sistem cat gloss tinggi, satin, dan dinding ciri",
          "Dua hingga tiga lapisan skim polimer diubah suai dengan pengamplasan penuh antara lapisan",
          "Pembaikan retak, tetulang sendi, dan perataan substrat kecil disertakan",
          "Serasi dengan semua sistem cat premium: Nippon, Dulux, Jotun, Skshu, Benjamin Moore",
          "Sesuai untuk landed, kondominium, dan interior komersial termasuk dinding ciri mewah",
          "Pusingan ganti cepat — biasanya 2 hingga 4 hari untuk unit kondominium standard"
        ],
        subServices: [
          { name: "Salutan Skim Dinding", price: "Dari RM 5 / sq ft", desc: "Salutan skim dua lapisan atas plaster atau dinding yang sebelumnya dicat untuk kemasan siap-cat licin kaca." },
          { name: "Salutan Skim Siling", price: "Dari RM 6 / sq ft", desc: "Skim semula siling plaster sedia ada untuk menyegarkan permukaan tua sebelum pengecatan semula." },
          { name: "Pembaikan Retak & Sendi", price: "Dari RM 22 / linier ft", desc: "Membuka, meroute, dan mengisi retak struktur dan penyelesaian dengan pengisi akrilik fleksibel." },
          { name: "Pakej Skim Semula Kondominium Penuh", price: "Dari RM 4,200", desc: "Salutan skim lengkap unit kondominium 1,000 sqft keseluruhan bersedia untuk pengecatan semula." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Permukaan", desc: "Kami menilai substrat sedia ada, mengenal pasti retak, kawasan berongga, dan keadaan cat lama. Kami mengikis bahan longgar dan merawat sebarang kulat atau efflorescence." },
          { step: "02", title: "Primer / Lapisan Ikatan", desc: "Primer ikatan digunakan untuk menutup cat lama dan mencipta ikatan kuat untuk skim. Substrat berliang mungkin memerlukan lapisan kedua." },
          { step: "03", title: "Lapisan Skim Pertama", desc: "Skim diubah suai polimer premium ditrowel secara merata ke seluruh permukaan untuk mengisi ketidaksempurnaan dan meratakan substrat." },
          { step: "04", title: "Pengamplasan & Lapisan Kedua", desc: "Selepas 4 hingga 6 jam kering, lapisan pertama diamplas licin dengan tiang. Lapisan skim kedua digunakan dan diamplas semula untuk kerataan muktamad." },
          { step: "05", title: "Pemeriksaan Akhir", desc: "Kami sapu-cahaya keseluruhan permukaan untuk mengesahkan kerataan. Sebarang tanda trowel atau lubang jarum yang tinggal diisi dan diamplas titik sebelum cat dimulakan." }
        ],
        faqs: [
          { q: "Adakah saya perlukan skim coat jika dinding saya sudah diplaster?", a: "Ia bergantung pada kualiti plaster dan kemasan cat yang anda mahukan. Dinding yang baru diplaster di Malaysia biasanya kasar dan memerlukan sekurang-kurangnya satu lapisan skim sebelum cat premium. Untuk cat gloss tinggi, satin, atau warna gelap, dua lapisan skim adalah penting untuk mengelakkan tanda trowel yang kelihatan dan kilauan tidak rata." },
          { q: "Bolehkah skim coat menutup retak halus secara kekal?", a: "Skim coat sahaja boleh menyembunyikan retak halus buat sementara, tetapi retak struktur akan muncul semula dalam beberapa bulan. Untuk pembaikan jangka panjang kami meroute retak menjadi alur-V, mengisinya dengan pengisi akrilik fleksibel, mengukuhkan dengan mesh gentian kaca, kemudian skim di atas. Gabungan ini biasanya tahan selama 5+ tahun." },
          { q: "Berapa lama skim coat kering sebelum pengecatan?", a: "Setiap lapisan memerlukan 4 hingga 6 jam masa kering dalam kelembapan Malaysia biasa. Lapisan akhir memerlukan 24 jam sebelum primer dan cat. Kami sangat mengesyorkan menunggu 24 jam penuh — pengecatan pramatang memerangkap lembapan dan menyebabkan kegagalan cat." },
          { q: "Adakah skim coat sama dengan dempul?", a: "Tidak. Dempul dinding adalah pengisi nipis, selalunya berasaskan akrilik, yang digunakan untuk tampalan kecil. Skim coat adalah sebatian berasaskan simen atau gipsum yang digunakan sebagai lapisan permukaan penuh (biasanya 1–3mm tebal) untuk meratakan dan melicinkan keseluruhan dinding. Skim coat adalah piawai profesional; dempul adalah pembaikan DIY yang cepat." }
        ],
        metaTitle: "Skim Coat Dinding & Siling KL & Selangor",
        metaDesc: "Salutan skim licin kaca untuk dinding dan siling di KL & Selangor. Kemasan dua lapisan, pembaikan retak, siap-cat. Dari RM5/sqft. Sebatian Knauf dan Mapei.",
        aioSummary: "KL Servis Rumah menyediakan salutan skim dinding dan siling profesional di KL & Selangor. Sebatian diubah suai polimer, aplikasi dua lapisan, pengamplasan penuh, pembaikan retak, tetulang sendi. Kemasan siap-cat untuk Nippon, Dulux, Jotun, dan sistem cat premium.",
        warranty: "Jaminan Kelicinan & Lekatan 12 Bulan"
      },
      zh: {
        title: "墙面与天花腻子",
        tagline: "玻璃般光滑的墙面与天花腻子，可上漆的表面，全套基层处理与裂缝修补。从 RM 5 / sq ft 起。",
        description: "KL Servis Rumah 在整个吉隆坡与雪兰莪提供专业腻子服务，让您的墙面与天花获得完美平整、即可上漆的表面。腻子是涂在已抹灰或旧漆面上的一层细石膏，用来消除抹刀痕、细裂纹、接缝不平和小瑕疵。我们使用优质聚合物改性腻子（Knauf、Gyproc、Mapei），做两到三道，根据面积用手工或长杆打磨。最终得到完全光滑、均匀、可上漆的表面，连普通底漆都能呈现高端效果。",
        highlights: [
          "玻璃般光滑的表面，适合高光、丝光和主题墙漆系统",
          "两到三道聚合物改性腻子，层间充分打磨",
          "包含裂缝修补、接缝加固和小面积基层找平",
          "兼容所有主流高端漆：Nippon、Dulux、Jotun、Skshu、Benjamin Moore",
          "适用于有地、公寓与商业室内空间，包括高端主题墙",
          "出活快——一套标准公寓通常 2 到 4 天即可完工"
        ],
        subServices: [
          { name: "墙面腻子", price: "从 RM 5 / sq ft 起", desc: "在已抹灰或旧漆墙面上做两道腻子，达到玻璃般光滑、可上漆的效果。" },
          { name: "天花腻子", price: "从 RM 6 / sq ft 起", desc: "对旧石膏天花重新刮腻子，让旧表面焕然一新再上漆。" },
          { name: "裂缝与接缝修补", price: "从 RM 22 / 延尺起", desc: "开槽、清理后用弹性丙烯酸填料处理沉降与结构性裂缝。" },
          { name: "整套公寓重刮腻子配套", price: "从 RM 4,200 起", desc: "1,000 sqft 公寓全屋刮腻子，准备上漆。" }
        ],
        process: [
          { step: "01", title: "表面检查", desc: "我们评估现有基层，找出裂缝、空鼓区域与旧漆状况。铲除松动材料，并处理霉菌与盐析。" },
          { step: "02", title: "界面剂 / 封闭底漆", desc: "涂刷界面底漆封闭旧漆并与腻子形成强附着力。多孔基层可能需要两遍。" },
          { step: "03", title: "第一道腻子", desc: "优质聚合物改性腻子用抹刀均匀批刮，填补瑕疵并找平基层。" },
          { step: "04", title: "打磨与第二道", desc: "第一道干燥 4 到 6 小时后用长杆打磨光滑；批刮第二道，再次打磨至最终平整。" },
          { step: "05", title: "终检", desc: "用扫光法逐面检查平整度；残留的抹刀痕和针孔点补后局部打磨，再上漆。" }
        ],
        faqs: [
          { q: "已经抹灰的墙面还需要刮腻子吗？", a: "看抹灰质量以及您想要的漆面效果。马来西亚新抹灰墙面通常粗糙，涂高端漆前至少要刮一道腻子。如果使用高光、丝光或深色漆，强烈建议刮两道腻子，避免抹刀痕和不均匀光泽。" },
          { q: "腻子能永久盖住细裂纹吗？", a: "光靠腻子只能暂时盖住细裂纹，结构性裂纹几个月内会重新出现。我们采用 V 形开槽、弹性丙烯酸填料、玻纤网格加固、然后再刮腻子。这种组合通常可保持 5 年以上。" },
          { q: "腻子多久能干透再上漆？", a: "每道需要 4 到 6 小时的干燥时间（马来西亚常规湿度）。最后一道需等 24 小时再上底漆和面漆。强烈建议等满 24 小时——过早涂漆会锁住水分导致漆面失效。" },
          { q: "腻子和补墙膏是一样的吗？", a: "不一样。补墙膏是薄薄一层（通常丙烯酸基）的局部小修补料；腻子是水泥基或石膏基的整面找平层（通常 1–3mm 厚）。腻子是专业标准，补墙膏是 DIY 临时方案。" }
        ],
        metaTitle: "吉隆坡与雪兰莪墙面与天花腻子服务",
        metaDesc: "吉隆坡与雪兰莪墙面与天花玻璃般光滑腻子。两道收光、裂缝修补、即可上漆。从 RM5/sqft 起。Knauf 与 Mapei 腻子。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供专业墙面与天花腻子服务。聚合物改性腻子、两道施工、充分打磨、裂缝修补、接缝加固。可上漆表面，兼容 Nippon、Dulux、Jotun 与高端漆系统。",
        warranty: "12 个月平整度与粘结保修"
      }
    }
  },

  // ── 14. FLOORING (VINYL, SPC, LAMINATE) ───────────────────────────────
  "flooring": {
    slug: "flooring",
    title: "Vinyl, SPC & Laminate Flooring",
    tagline: "Modern click-lock flooring for homes and offices. Waterproof SPC, scratch-resistant laminate, and luxury vinyl planks. From RM 14 / sq ft.",
    description:
      "KL Servis Rumah supplies and installs modern click-lock flooring across Kuala Lumpur and Selangor. We work with every major Malaysian flooring brand — FloorEver, NS Floors, Quick-Step, Kronotex, and Audacity — and we install three main systems: SPC (Stone Polymer Composite, the most popular waterproof choice for Malaysian homes), laminate (the budget-friendly wood-look option), and luxury vinyl planks / tiles (LVP/LVT) for wet areas. Every installation includes moisture testing of the subfloor, proper underlayment, expansion gap planning, transition strip fitting, and skirting finishing. Our floorers use premium pull bars, tapping blocks, and undercut door jamb saws to deliver a professional, squeak-free finish that lasts 15+ years.",
    startPrice: "RM 14",
    icon: "square",
    highlights: [
      "Waterproof SPC flooring suitable for kitchens, bathrooms, and high-humidity Malaysian homes",
      "Click-lock system with no glue, no nails, and no on-site dust from sanding or sealing",
      "Compatible with underfloor heating systems (heating mats under SPC or engineered boards)",
      "Squeak-free installation with proper underlayment, expansion gaps, and transition strips",
      "Door jamb undercutting for a flush, professional finish between rooms",
      "Removal and disposal of old flooring included in every replacement project"
    ],
    subServices: [
      { name: "SPC Click-Lock Flooring Install", price: "From RM 14 / sq ft", desc: "Waterproof stone polymer composite planks with built-in underlay, ideal for whole-home installation." },
      { name: "Laminate Flooring Install", price: "From RM 11 / sq ft", desc: "Budget-friendly HDF laminate with wood-look finish, AC4–AC5 wear rating for residential traffic." },
      { name: "Luxury Vinyl Plank (LVP) Install", price: "From RM 16 / sq ft", desc: "100% waterproof LVP with realistic wood grain, perfect for wet kitchens, bathrooms, and basement." },
      { name: "Vinyl Flooring Installation", price: "From RM 12 / sq ft", desc: "Sheet or plank vinyl flooring for wet areas, kitchens and commercial spaces with welded seams." },
      { name: "Floor Tile Installation", price: "From RM 14 / sq ft", desc: "Porcelain, ceramic, large format and mosaic tile installation for new builds and renovations." },
      { name: "Floor Tile Replacement & Subfloor Hacking", price: "From RM 18 / sq ft", desc: "Hacking old tiles, subfloor leveling, waterproofing and new tile installation with debris disposal." },
      { name: "Porcelain & Ceramic Tiles", price: "From RM 16 / sq ft", desc: "Supply and install homogeneous porcelain and ceramic tiles in matte, glossy or wood-look finishes." },
      { name: "Large Format & Mosaic Tiles", price: "From RM 22 / sq ft", desc: "Large slab 600x1200mm, 800x800mm and mosaic pattern installation with levelling clips." },
      { name: "Floor Leveling & Screeding", price: "From RM 8 / sq ft", desc: "Self-leveling compound and cement screeding to correct uneven floors before flooring installation." },
      { name: "Hollow Tile & Uneven Floor Repair", price: "From RM 250", desc: "Tap-test hollow tile detection, removal and re-bedding, plus uneven floor grinding and leveling." },
      { name: "Skirting & Transition Strip Fitting", price: "From RM 8 / linier ft", desc: "PVC, MDF, or aluminium skirting plus T-mould and reducer transitions for a clean room-to-room finish." }
    ],
    process: [
      { step: "01", title: "Subfloor Moisture Test", desc: "We measure the concrete or existing floor moisture content. Anything above 3% requires a 6-mil vapour barrier underlayment to prevent future cupping or mould." },
      { step: "02", title: "Subfloor Levelling", desc: "Cement-based self-levelling compound is applied where needed to achieve the flatness tolerance required by the flooring manufacturer (typically 3mm over 2m)." },
      { step: "03", title: "Underlayment Installation", desc: "Premium IXPE or EVA foam underlayment is rolled out with taped seams to provide acoustic damping, thermal insulation, and minor subfloor levelling." },
      { step: "04", title: "Plank Installation", desc: "Boards are installed row by row with proper staggered joints, manufacturer-specified expansion gaps (8–12mm) at all walls and fixed objects, and tapped together using a pull bar." },
      { step: "05", title: "Skirting & Transitions", desc: "PVC or matching skirting is installed with neat mitred corners. T-mould, reducer, and end-cap transitions are fitted at doorways and between different floor types." }
    ],
    faqs: [
      { q: "What is the difference between SPC, laminate, and vinyl flooring?", a: "SPC (Stone Polymer Composite) has a stone-plastic core that makes it 100% waterproof and very dimensionally stable — ideal for Malaysian homes. Laminate is an HDF wood-fibre board with a printed wear layer — more affordable, less water-resistant, but excellent scratch resistance. Luxury Vinyl Plank (LVP) is pure PVC with realistic wood-look printing — fully waterproof and softer underfoot. We recommend SPC for whole-home use, LVP for wet areas, and laminate for bedrooms and dry living areas." },
      { q: "Can I install click-lock flooring over existing tiles?", a: "Yes, in most cases. The existing tiles must be solid (no hollow spots), level to within 3mm over 2m, and free of lippage. We may need a thin levelling compound in spots, and we always use a quality underlayment to bridge minor grout-line texture. This saves demolition cost and time." },
      { q: "How long does it take to install flooring in a 1,000 sqft condo?", a: "Typically 2 to 3 days for SPC or laminate, including subfloor prep, underlayment, and skirting. Larger areas or complex layouts (lots of angles, kitchen islands, bathroom cut-outs) can take 4 to 5 days. We schedule a 1-day buffer for drying of any self-levelling compound." },
      { q: "Do you handle furniture moving during flooring installation?", a: "Yes. We can include a furniture-moving package that covers disassembly of beds, wardrobes (when possible), and dining sets, safe relocation, and reassembly after the floor is laid. This is quoted separately based on the volume of furniture." }
    ],
    heroImage: "/hero/home-services-flooring-kl.jpg",
    metaTitle: "Vinyl, SPC & Laminate Flooring Installation KL & Selangor",
    metaDesc: "Click-lock flooring in KL & Selangor. Waterproof SPC, laminate, luxury vinyl. FloorEver, Quick-Step, NS Floors. From RM11/sqft. Subfloor prep included.",
    aioSummary: "KL Servis Rumah supplies and installs vinyl, SPC, and laminate flooring across KL & Selangor. FloorEver, Quick-Step, NS Floors, Kronotex, Audacity. Click-lock system with no glue, no dust, squeak-free. Subfloor prep, underlayment, skirting, transitions all included.",
    warranty: "5-Year Installation Workmanship Warranty",
    i18n: {
      ms: {
        title: "Lantai Vinyl, SPC & Laminate",
        tagline: "Lantai click-lock moden untuk rumah dan pejabat. SPC kalis air, laminate tahan calar dan papan vinyl mewah. Dari RM 14 / kaki persegi.",
        description: "KL Servis Rumah membekalkan dan memasang lantai click-lock moden di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenama lantai utama Malaysia — FloorEver, NS Floors, Quick-Step, Kronotex dan Audacity — dan kami memasang tiga sistem utama: SPC (Stone Polymer Composite, pilihan kalis air paling popular untuk rumah Malaysia), laminate (pilihan rupa kayu mesra bajet) dan papan / jubin vinyl mewah (LVP/LVT) untuk kawasan basah. Setiap pemasangan termasuk ujian kelembapan subfloor, underlayment yang betul, perancangan jurang pengembangan, pemasangan jalur peralihan dan kemasan skirting. Pemasang lantai kami menggunakan pull bar premium, tapping block dan gergaji undercut bingkai pintu untuk menyampaikan kemasan profesional tanpa derit yang tahan 15+ tahun.",
        highlights: [
          "Lantai SPC kalis air sesuai untuk dapur, bilik mandi dan rumah Malaysia berkelembapan tinggi",
          "Sistem click-lock tanpa gam, tanpa paku dan tanpa habuk tapak daripada pengisaran atau pengedap",
          "Serasi dengan sistem pemanasan bawah lantai (tikar pemanas di bawah SPC atau papan kejuruteraan)",
          "Pemasangan tanpa derit dengan underlayment yang betul, jurang pengembangan dan jalur peralihan",
          "Undercut bingkai pintu untuk kemasan rata dan profesional antara bilik",
          "Penyingkiran dan pelupusan lantai lama termasuk dalam setiap projek penggantian"
        ],
        subServices: [
          { name: "Pemasangan Lantai SPC Click-Lock", price: "Dari RM 14 / kaki persegi", desc: "Papan komposit polimer batu kalis air dengan underlay terbina dalam, sesuai untuk pemasangan seluruh rumah." },
          { name: "Pemasangan Lantai Laminate", price: "Dari RM 11 / kaki persegi", desc: "Laminate HDF mesra bajet dengan kemasan rupa kayu, penarafan haus AC4–AC5 untuk trafik kediaman." },
          { name: "Pemasangan Papan Vinyl Mewah (LVP)", price: "Dari RM 16 / kaki persegi", desc: "LVP 100% kalis air dengan urat kayu realistik, sesuai untuk dapur basah, bilik mandi dan besmen." },
          { name: "Pemasangan Lantai Vinyl", price: "Dari RM 12 / kaki persegi", desc: "Lantai vinyl kepingan atau papan untuk kawasan basah, dapur dan ruang komersial dengan sambungan dikimpal." },
          { name: "Pemasangan Jubin Lantai", price: "Dari RM 14 / kaki persegi", desc: "Pemasangan jubin porselin, seramik, format besar dan mozek untuk binaan baru dan pengubahsuaian." },
          { name: "Penggantian Jubin Lantai & Pemecahan Subfloor", price: "Dari RM 18 / kaki persegi", desc: "Pemecahan jubin lama, perataan subfloor, kalis air dan pemasangan jubin baru dengan pelupusan serpihan." },
          { name: "Jubin Porselin & Seramik", price: "Dari RM 16 / kaki persegi", desc: "Bekalan dan pemasangan jubin porselin dan seramik homogen dalam kemasan matte, berkilat atau rupa kayu." },
          { name: "Jubin Format Besar & Mozek", price: "Dari RM 22 / kaki persegi", desc: "Pemasangan slab besar 600x1200mm, 800x800mm dan corak mozek dengan klip perata." },
          { name: "Pemerataan Lantai & Screed", price: "Dari RM 8 / kaki persegi", desc: "Sebatian rata-sendiri dan screed simen untuk membetulkan lantai tidak rata sebelum pemasangan lantai." },
          { name: "Pembaikan Jubin Berongga & Lantai Tidak Rata", price: "Dari RM 250", desc: "Pengesanan jubin berongga tap-test, penanggalan dan pemasangan semula, serta pengisaran dan pemerataan lantai tidak rata." },
          { name: "Pemasangan Skirting & Jalur Peralihan", price: "Dari RM 8 / kaki linier", desc: "Skirting PVC, MDF atau aluminium serta peralihan T-mould dan reducer untuk kemasan bilik-ke-bilik yang kemas." }
        ],
        process: [
          { step: "01", title: "Ujian Kelembapan Subfloor", desc: "Kami mengukur kandungan kelembapan konkrit atau lantai sedia ada. Apa-apa melebihi 3% memerlukan underlayment halangan wap 6-mil untuk mengelakkan cupping atau kulat masa depan." },
          { step: "02", title: "Pemerataan Subfloor", desc: "Sebatian rata-sendiri berasaskan simen disapu di mana perlu untuk mencapai toleransi kerataan yang dikehendaki pengeluar lantai (biasanya 3mm atas 2m)." },
          { step: "03", title: "Pemasangan Underlayment", desc: "Underlayment busa IXPE atau EVA premium dibentangkan dengan sambungan bertape untuk memberikan redaman akustik, penebat haba dan pemerataan subfloor kecil." },
          { step: "04", title: "Pemasangan Papan", desc: "Papan dipasang baris demi baris dengan sambungan selang-seli yang betul, jurang pengembangan yang ditentukan pengeluar (8–12mm) pada semua dinding dan objek tetap, dan diketuk bersama menggunakan pull bar." },
          { step: "05", title: "Skirting & Peralihan", desc: "Skirting PVC atau sepadan dipasang dengan sudut mitred kemas. Peralihan T-mould, reducer dan end-cap dipasang di laluan pintu dan antara jenis lantai berbeza." }
        ],
        faqs: [
          { q: "Apakah perbezaan antara lantai SPC, laminate dan vinyl?", a: "SPC (Stone Polymer Composite) mempunyai teras batu-plastik yang menjadikannya 100% kalis air dan sangat stabil dimensi — sesuai untuk rumah Malaysia. Laminate ialah papan gentian kayu HDF dengan lapisan haus bercetak — lebih berpatutan, kurang tahan air, tetapi rintangan calar sangat baik. Papan Vinyl Mewah (LVP) ialah PVC tulen dengan cetakan rupa kayu realistik — kalis air sepenuhnya dan lebih lembut di kaki. Kami mengesyorkan SPC untuk kegunaan seluruh rumah, LVP untuk kawasan basah dan laminate untuk bilik tidur dan ruang tamu kering." },
          { q: "Boleh saya memasang lantai click-lock di atas jubin sedia ada?", a: "Ya, dalam kebanyakan kes. Jubin sedia ada mesti pepejal (tiada bahagian kosong), rata dalam 3mm atas 2m dan bebas daripada lippage. Kami mungkin memerlukan sebatian rata nipis di sesetengah tempat, dan kami sentiasa menggunakan underlayment berkualiti untuk merentangi tekstur garis grout kecil. Ini menjimatkan kos dan masa perobohan." },
          { q: "Berapa lama masa yang diambil untuk memasang lantai di kondominium 1,000 kaki persegi?", a: "Biasanya 2 hingga 3 hari untuk SPC atau laminate, termasuk persediaan subfloor, underlayment dan skirting. Kawasan lebih besar atau susun atur kompleks (banyak sudut, pulau dapur, potongan bilik mandi) boleh mengambil 4 hingga 5 hari. Kami menjadualkan penampan 1 hari untuk pengeringan sebarang sebatian rata-sendiri." },
          { q: "Adakah anda mengendalikan perpindahan perabot semasa pemasangan lantai?", a: "Ya. Kami boleh menyertakan pakej perpindahan perabot yang merangkumi pembongkaran katil, almari pakaian (apabila mungkin) dan set makan, pemindahan selamat dan pemasangan semula selepas lantai dipasang. Ini disebut harga secara berasingan berdasarkan jumlah perabot." }
        ],
        metaTitle: "Pemasangan Lantai Vinyl, SPC & Laminate KL & Selangor",
        metaDesc: "Lantai click-lock di KL & Selangor. SPC kalis air, laminate, vinyl mewah. FloorEver, Quick-Step, NS Floors. Dari RM11/kaki persegi. Persediaan subfloor termasuk.",
        aioSummary: "KL Servis Rumah membekalkan dan memasang lantai vinyl, SPC dan laminate di seluruh KL & Selangor. FloorEver, Quick-Step, NS Floors, Kronotex, Audacity. Sistem click-lock tanpa gam, tanpa habuk, tanpa derit. Persediaan subfloor, underlayment, skirting dan peralihan semua termasuk.",
        warranty: "Jaminan Kerja Pemasangan 5 Tahun"
      },
      zh: {
        title: "Vinyl、SPC 与复合地板",
        tagline: "适用于家庭与办公室的现代锁扣地板。防水 SPC、耐磨复合地板与豪华乙烯基地板。从 RM 14 / 平方英尺起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪供应并安装现代锁扣地板。我们与马来西亚各大地板品牌合作——FloorEver、NS Floors、Quick-Step、Kronotex 与 Audacity——安装三大主流系统：SPC（石塑复合地板，马来西亚家庭最受欢迎的防水选择）、复合地板（经济实惠的仿木纹选择）以及用于潮湿区域的豪华乙烯基地板（LVP/LVT）。每次安装都包括地面基层含水率测试、合适的垫层、伸缩缝规划、收边条安装与踢脚线收尾。我们的地板师傅使用优质回力钩、敲块与门框下切锯，交付专业、无异响、可使用 15 年以上的成品。",
        highlights: [
          "防水 SPC 地板适合厨房、浴室与高湿度的马来西亚家庭",
          "锁扣系统免胶、免钉，现场无打磨或上漆粉尘",
          "兼容地暖系统（发热垫铺设于 SPC 或复合板下）",
          "垫层、伸缩缝与收边条到位，安装无异响",
          "门框下切处理，房间之间收口平整专业",
          "每次更换项目均包含旧地板的拆除与清运"
        ],
        subServices: [
          { name: "SPC 锁扣地板安装", price: "从 RM 14 / 平方英尺起", desc: "带内置垫层的防水石塑复合地板，非常适合全屋铺装。" },
          { name: "复合地板安装", price: "从 RM 11 / 平方英尺起", desc: "经济实惠的 HDF 复合地板，仿木纹表面处理，AC4–AC5 耐磨等级适合家用。" },
          { name: "豪华乙烯基地板 (LVP) 安装", price: "从 RM 16 / 平方英尺起", desc: "100% 防水 LVP，木纹逼真，适合湿厨房、浴室与地下室。" },
          { name: "乙烯基地板安装", price: "从 RM 12 / 平方英尺起", desc: "卷材或片材乙烯基地板，用于潮湿区、厨房与商业空间，接缝焊接。" },
          { name: "地面瓷砖安装", price: "从 RM 14 / 平方英尺起", desc: "瓷砖、陶瓷、大板与马赛克地面安装，适用于新建与翻新。" },
          { name: "地面瓷砖更换与基层拆除", price: "从 RM 18 / 平方英尺起", desc: "拆除旧砖、基层找平、防水与新砖安装，含垃圾清运。" },
          { name: "抛光砖与陶瓷砖", price: "从 RM 16 / 平方英尺起", desc: "供应并安装通体抛光砖与陶瓷砖，哑光、亮光或木纹饰面可选。" },
          { name: "大板与马赛克瓷砖", price: "从 RM 22 / 平方英尺起", desc: "600x1200mm、800x800mm 大板与马赛克图案安装，配找平器。" },
          { name: "地面找平与地台", price: "从 RM 8 / 平方英尺起", desc: "自流平与水泥砂浆找平，纠正不平地面后再安装地板。" },
          { name: "空鼓砖与不平地面维修", price: "从 RM 250 起", desc: "敲击检测空鼓砖，拆除重铺，以及不平地面打磨找平。" },
          { name: "踢脚线与收边条安装", price: "从 RM 8 / 延英尺起", desc: "PVC、MDF 或铝合金踢脚线，配 T 型条与高低扣，房间之间收口干净利落。" }
        ],
        process: [
          { step: "01", title: "基层含水率测试", desc: "我们测量混凝土或现有地面的含水率。超过 3% 需要铺设 6-mil 防潮垫层，防止日后起拱或发霉。" },
          { step: "02", title: "基层找平", desc: "在需要处施工水泥基自流平，达到地板制造商要求的平整度公差（通常 2 米内 3mm）。" },
          { step: "03", title: "垫层铺设", desc: "铺设优质 IXPE 或 EVA 泡沫垫层，接缝贴胶带，提供吸音、保温与轻微找平功能。" },
          { step: "04", title: "地板安装", desc: "逐排安装，错缝规范，所有墙体与固定物处按制造商要求留伸缩缝（8–12mm），用回力钩敲合。" },
          { step: "05", title: "踢脚线与收边", desc: "安装 PVC 或配套踢脚线，阴阳角斜切整齐。门口与不同地面材料之间安装 T 型条、高低扣与收边条。" }
        ],
        faqs: [
          { q: "SPC、复合地板和乙烯基地板有什么区别？", a: "SPC（石塑复合地板）采用石粉塑料芯材，100% 防水且尺寸非常稳定——非常适合马来西亚家庭。复合地板是 HDF 木质纤维板加印刷耐磨层——更经济，耐水性较差，但抗刮性能出色。豪华乙烯基地板（LVP）是纯 PVC 加逼真木纹印刷——完全防水且脚感更软。我们建议全屋用 SPC，潮湿区用 LVP，卧室与干燥起居区用复合地板。" },
          { q: "可以在现有瓷砖上直接铺锁扣地板吗？", a: "大多数情况下可以。现有瓷砖必须坚实（无空鼓）、2 米内平整度在 3mm 以内且无高低差。局部可能需要薄层找平，我们总是使用优质垫层来弥合轻微的砖缝纹理。这样可节省拆除的费用与时间。" },
          { q: "1,000 平方英尺的公寓铺地板需要多长时间？", a: "SPC 或复合地板通常 2 到 3 天，包括基层处理、垫层与踢脚线。面积更大或布局复杂（转角多、厨房中岛、浴室缺口）可能需要 4 到 5 天。我们会预留 1 天缓冲让自流平干燥。" },
          { q: "铺地板期间你们负责搬家具吗？", a: "负责。我们可以提供搬家服务包，包括床、衣柜（可行时）与餐桌椅的拆卸、安全搬移，以及地板铺好后的复位安装。此项根据家具数量单独报价。" }
        ],
        metaTitle: "吉隆坡与雪兰莪 Vinyl、SPC 与复合地板安装",
        metaDesc: "吉隆坡与雪兰莪锁扣地板。防水 SPC、复合地板、豪华乙烯基。FloorEver、Quick-Step、NS Floors。从 RM11/平方英尺起。含基层处理。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应并安装 vinyl、SPC 与复合地板。FloorEver、Quick-Step、NS Floors、Kronotex、Audacity。锁扣系统免胶、无尘、无异响。基层处理、垫层、踢脚线、收边条全包。",
        warranty: "5 年安装工艺保修"
      }
    }
  },

  // ── 15. EPOXY FLOORING ────────────────────────────────────────
  "epoxy-flooring": {
    slug: "epoxy-flooring",
    title: "Epoxy & Polyurethane Flooring",
    tagline: "Heavy-duty epoxy floor coating for garages, warehouses, factories, showrooms, and commercial kitchens. From RM 22 / sq ft.",
    description:
      "KL Servis Rumah installs industrial-grade epoxy and polyurethane floor coatings across Kuala Lumpur and Selangor. Epoxy is the go-to solution for areas that need a seamless, chemical-resistant, easy-to-clean, and abrasion-resistant surface: garages, warehouses, factories, commercial kitchens, car showrooms, pharmaceutical plants, and even modern residential interiors. We work with every major system — self-levelling epoxy (mirror-smooth 2–4mm), broadcast quartz or flake (slip-resistant 3–6mm), mortar screed (heavy-duty 5–10mm for forklift traffic), and polyurethane (UV-stable, scratch-resistant topcoats). Every installation includes diamond-grinding substrate preparation, primer, body coat, optional decorative flake, and a UV-stable aliphatic polyurethane topcoat for the longest service life.",
    startPrice: "RM 22",
    icon: "circle-dot",
    highlights: [
      "Diamond-grinding surface preparation (CSP 3–4 profile) for maximum epoxy bond strength",
      "Self-levelling epoxy for mirror-smooth, easy-to-clean showroom and residential floors",
      "Slip-resistant broadcast quartz and decorative flake systems for safety and aesthetics",
      "Chemical-resistant systems for laboratories, factories, and commercial kitchens",
      "UV-stable aliphatic polyurethane topcoat prevents yellowing in sun-exposed areas",
      "Heavy-duty mortar screed for forklift, pallet jack, and vehicle traffic zones"
    ],
    subServices: [
      { name: "Self-Levelling Epoxy Floor", price: "From RM 22 / sq ft", desc: "Mirror-smooth 2–3mm self-levelling epoxy for residential, showroom, and light commercial floors." },
      { name: "Flake / Quartz Broadcast Epoxy", price: "From RM 26 / sq ft", desc: "Decorative vinyl flake or coloured quartz broadcast with slip-resistant finish for garages and kitchens." },
      { name: "Heavy-Duty Mortar Screed", price: "From RM 38 / sq ft", desc: "5–10mm trowel-applied epoxy mortar for warehouses, factories, and forklift traffic zones." },
      { name: "Epoxy Floor Repair & Recoating", price: "From RM 14 / sq ft", desc: "Diamond-grinding the existing epoxy, repairing damaged areas, and applying fresh primer + topcoat." }
    ],
    process: [
      { step: "01", title: "Substrate Assessment", desc: "We inspect the existing concrete for moisture, oil contamination, cracks, and surface profile. We perform a calcium chloride moisture test if needed, and recommend a moisture-mitigating primer if required." },
      { step: "02", title: "Diamond Grinding", desc: "Industrial walk-behind diamond grinders with vacuum extraction are used to achieve a CSP 3–4 profile. Cracks are routed open and filled with epoxy mortar." },
      { step: "03", title: "Primer Application", desc: "A penetrating epoxy primer is applied by roller to seal the concrete and create a chemical bond with the body coat. We allow 12–24 hours cure depending on ambient conditions." },
      { step: "04", title: "Body Coat / Broadcast", desc: "Self-levelling epoxy is poured and spread with a notched trowel or spiked roller. For broadcast systems, decorative flake or quartz is hand-cast to full rejection into the wet body coat." },
      { step: "05", title: "Topcoat & Curing", desc: "After the body coat cures, excess flake is scraped and vacuumed, and a UV-stable aliphatic polyurethane topcoat is applied in two coats for maximum scratch and chemical resistance." }
    ],
    faqs: [
      { q: "How long does epoxy flooring take to install and cure?", a: "Most residential garage or showroom projects (300–500 sq ft) take 3 to 4 days including grinding, primer, body coat, and topcoat. Light foot traffic is allowed after 24 hours, vehicle traffic after 72 hours, and full chemical resistance after 7 days. We will schedule around your access needs." },
      { q: "Will my epoxy floor turn yellow in the sun?", a: "Standard aromatic epoxy does yellow with UV exposure. To prevent this, we always apply a UV-stable aliphatic polyurethane topcoat (e.g., Sika, BASF, or RPM products). This topcoat is crystal-clear and stays clear for 10+ years even in direct sun-exposed areas like car porches and outdoor walkways." },
      { q: "Can epoxy be applied over existing tiles?", a: "Generally not recommended. Epoxy needs to bond directly to a sound concrete substrate. We typically remove existing tiles (we can include this in the quote) and grind the underlying concrete. In some cases, an existing epoxy floor can be recoated without removal — we assess this case by case." },
      { q: "Is epoxy flooring slippery when wet?", a: "Standard self-levelling epoxy is smooth and can be slippery when wet, especially in commercial kitchens or pool decks. For these areas, we recommend a broadcast quartz or flake system with a fine-grit topcoat additive that delivers P4–P5 slip rating (AS/NZS 4586) without sacrificing cleanability." }
    ],
    heroImage: "/hero-epoxy-flooring.svg",
    metaTitle: "Epoxy & PU Floor Coating KL & Selangor",
    metaDesc: "Industrial epoxy flooring in KL & Selangor. Garage, warehouse, factory, showroom, kitchen. Self-levelling, flake, mortar screed. From RM22/sqft. UV-stable topcoat.",
    aioSummary: "KL Servis Rumah installs industrial-grade epoxy and polyurethane floor coatings across KL & Selangor. Self-levelling, broadcast quartz, decorative flake, mortar screed systems. Diamond grinding, moisture-mitigating primer, UV-stable aliphatic PU topcoat. Sika, BASF, RPM systems.",
    warranty: "5-Year Delamination & Yellowing Warranty",
    i18n: {
      ms: {
        title: "Lantai Epoxy & Polyurethane",
        tagline: "Salutan lantai epoxy tugas berat untuk garaj, gudang, kilang, bilik pameran dan dapur komersial. Dari RM 22 / kaki persegi.",
        description: "KL Servis Rumah memasang salutan lantai epoxy dan polyurethane gred industri di seluruh Kuala Lumpur dan Selangor. Epoxy ialah penyelesaian utama untuk kawasan yang memerlukan permukaan lancar, tahan bahan kimia, mudah dibersihkan dan tahan lelasan: garaj, gudang, kilang, dapur komersial, bilik pameran kereta, loji farmaseutikal dan juga dalaman kediaman moden. Kami bekerja dengan setiap sistem utama — epoxy rata-sendiri (licin cermin 2–4mm), taburan kuarza atau flake (rintangan gelincir 3–6mm), mortar screed (tugas berat 5–10mm untuk trafik forklift) dan polyurethane (topcoat stabil UV, tahan calar). Setiap pemasangan termasuk penyediaan substrat pengisaran intan, primer, lapisan badan, flake hiasan pilihan dan topcoat polyurethane alifatik stabil UV untuk jangka hayat perkhidmatan terpanjang.",
        highlights: [
          "Penyediaan permukaan pengisaran intan (profil CSP 3–4) untuk kekuatan ikatan epoxy maksimum",
          "Epoxy rata-sendiri untuk lantai bilik pameran dan kediaman yang licin cermin dan mudah dibersihkan",
          "Sistem taburan kuarza rintangan gelincir dan flake hiasan untuk keselamatan dan estetika",
          "Sistem tahan bahan kimia untuk makmal, kilang dan dapur komersial",
          "Topcoat polyurethane alifatik stabil UV mengelakkan penguningan di kawasan terdedah matahari",
          "Mortar screed tugas berat untuk zon trafik forklift, pallet jack dan kenderaan"
        ],
        subServices: [
          { name: "Lantai Epoxy Rata-Sendiri", price: "Dari RM 22 / kaki persegi", desc: "Epoxy rata-sendiri 2–3mm licin cermin untuk lantai kediaman, bilik pameran dan komersial ringan." },
          { name: "Epoxy Taburan Flake / Kuarza", price: "Dari RM 26 / kaki persegi", desc: "Taburan flake vinyl hiasan atau kuarza berwarna dengan kemasan rintangan gelincir untuk garaj dan dapur." },
          { name: "Mortar Screed Tugas Berat", price: "Dari RM 38 / kaki persegi", desc: "Mortar epoxy sapuan trowel 5–10mm untuk gudang, kilang dan zon trafik forklift." },
          { name: "Pembaikan & Salutan Semula Lantai Epoxy", price: "Dari RM 14 / kaki persegi", desc: "Mengisar intan epoxy sedia ada, membaiki kawasan rosak dan menyapu primer + topcoat baharu." }
        ],
        process: [
          { step: "01", title: "Penilaian Substrat", desc: "Kami memeriksa konkrit sedia ada untuk kelembapan, pencemaran minyak, retakan dan profil permukaan. Kami menjalankan ujian kelembapan kalsium klorida jika perlu, dan mengesyorkan primer tebusan kelembapan jika diperlukan." },
          { step: "02", title: "Pengisaran Intan", desc: "Pengisar intan walk-behind industri dengan sedutan vakum digunakan untuk mencapai profil CSP 3–4. Retakan dibuka dan diisi dengan mortar epoxy." },
          { step: "03", title: "Penyapuan Primer", desc: "Primer epoxy menembus disapu dengan roller untuk mengedap konkrit dan mewujudkan ikatan kimia dengan lapisan badan. Kami membenarkan pengeringan 12–24 jam bergantung pada keadaan ambien." },
          { step: "04", title: "Lapisan Badan / Taburan", desc: "Epoxy rata-sendiri dituang dan diratakan dengan trowel bergerigi atau roller berduri. Untuk sistem taburan, flake hiasan atau kuarza ditabur tangan ke penolakan penuh ke dalam lapisan badan basah." },
          { step: "05", title: "Topcoat & Pengeringan", desc: "Selepas lapisan badan kering, lebihan flake dikikis dan divakum, dan topcoat polyurethane alifatik stabil UV disapu dalam dua lapisan untuk rintangan calar dan bahan kimia maksimum." }
        ],
        faqs: [
          { q: "Berapa lama lantai epoxy mengambil masa untuk dipasang dan kering?", a: "Kebanyakan projek garaj kediaman atau bilik pameran (300–500 kaki persegi) mengambil 3 hingga 4 hari termasuk pengisaran, primer, lapisan badan dan topcoat. Trafik kaki ringan dibenarkan selepas 24 jam, trafik kenderaan selepas 72 jam dan rintangan bahan kimia penuh selepas 7 hari. Kami akan menjadualkan mengikut keperluan akses anda." },
          { q: "Adakah lantai epoxy saya akan menguning di bawah matahari?", a: "Epoxy aromatik standard memang menguning dengan pendedahan UV. Untuk mengelakkan ini, kami sentiasa menyapu topcoat polyurethane alifatik stabil UV (contohnya produk Sika, BASF atau RPM). Topcoat ini jernih seperti kristal dan kekal jernih selama 10+ tahun walaupun di kawasan terdedah matahari langsung seperti beranda kereta dan laluan luar." },
          { q: "Boleh epoxy disapu di atas jubin sedia ada?", a: "Secara amnya tidak disyorkan. Epoxy perlu melekat terus pada substrat konkrit yang kukuh. Kami biasanya menanggalkan jubin sedia ada (kami boleh sertakan ini dalam sebut harga) dan mengisar konkrit di bawahnya. Dalam sesetengah kes, lantai epoxy sedia ada boleh disalut semula tanpa penyingkiran — kami menilai ini kes demi kes." },
          { q: "Adakah lantai epoxy licin apabila basah?", a: "Epoxy rata-sendiri standard licin dan boleh menjadi licin apabila basah, terutamanya di dapur komersial atau dek kolam. Untuk kawasan ini, kami mengesyorkan sistem taburan kuarza atau flake dengan bahan tambahan topcoat grit halus yang memberikan penarafan gelincir P4–P5 (AS/NZS 4586) tanpa mengorbankan kebolehbersihan." }
        ],
        metaTitle: "Salutan Lantai Epoxy & PU KL & Selangor",
        metaDesc: "Lantai epoxy industri di KL & Selangor. Garaj, gudang, kilang, bilik pameran, dapur. Rata-sendiri, flake, mortar screed. Dari RM22/kaki persegi. Topcoat stabil UV.",
        aioSummary: "KL Servis Rumah memasang salutan lantai epoxy dan polyurethane gred industri di seluruh KL & Selangor. Sistem rata-sendiri, taburan kuarza, flake hiasan, mortar screed. Pengisaran intan, primer tebusan kelembapan, topcoat PU alifatik stabil UV. Sistem Sika, BASF, RPM.",
        warranty: "Jaminan Delaminasi & Penguningan 5 Tahun"
      },
      zh: {
        title: "环氧与聚氨酯地坪",
        tagline: "适用于车库、仓库、工厂、展厅与商业厨房的重型环氧地坪涂层。从 RM 22 / 平方英尺起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪安装工业级环氧与聚氨酯地坪涂层。环氧是需要无缝、耐化学、易清洁且耐磨表面的区域的首选方案：车库、仓库、工厂、商业厨房、汽车展厅、制药厂，甚至现代家居室内。我们施工各种主流系统——自流平环氧（镜面效果 2–4mm）、撒砂石英或彩片（防滑 3–6mm）、砂浆面层（重型 5–10mm 适合叉车通行）以及聚氨酯（抗紫外线、耐刮面漆）。每次安装都包括金刚石打磨基层处理、底漆、中涂、可选装饰彩片，以及抗紫外线脂肪族聚氨酯面漆，确保最长的使用寿命。",
        highlights: [
          "金刚石打磨表面处理（CSP 3–4 粗糙度），环氧附着力最大化",
          "自流平环氧，展厅与住宅地面镜面光滑、易于清洁",
          "防滑石英撒砂与装饰彩片系统，兼顾安全与美观",
          "适用于实验室、工厂与商业厨房的耐化学系统",
          "抗紫外线脂肪族聚氨酯面漆，防止阳光照射区域黄变",
          "重型砂浆面层，适合叉车、托盘车与车辆通行区域"
        ],
        subServices: [
          { name: "自流平环氧地坪", price: "从 RM 22 / 平方英尺起", desc: "2–3mm 镜面自流平环氧，适合住宅、展厅与轻型商业地面。" },
          { name: "彩片 / 石英撒砂环氧", price: "从 RM 26 / 平方英尺起", desc: "装饰乙烯基彩片或彩色石英撒砂，防滑表面，适合车库与厨房。" },
          { name: "重型砂浆面层", price: "从 RM 38 / 平方英尺起", desc: "5–10mm 镘涂环氧砂浆，适合仓库、工厂与叉车通行区。" },
          { name: "环氧地坪维修与翻新", price: "从 RM 14 / 平方英尺起", desc: "金刚石打磨现有环氧，修补损坏区域，重新施工底漆 + 面漆。" }
        ],
        process: [
          { step: "01", title: "基层评估", desc: "我们检查现有混凝土的含水率、油污、裂缝与表面粗糙度。必要时进行氯化钙含水率测试，并按需推荐防潮底漆。" },
          { step: "02", title: "金刚石打磨", desc: "使用带吸尘的工业手推式金刚石打磨机达到 CSP 3–4 粗糙度。裂缝开槽后用环氧砂浆填补。" },
          { step: "03", title: "底漆施工", desc: "用滚筒涂布渗透型环氧底漆，封闭混凝土并与中涂形成化学粘结。根据环境条件养护 12–24 小时。" },
          { step: "04", title: "中涂 / 撒砂", desc: "自流平环氧倾倒后用齿形镘刀或放气滚筒摊开。撒砂系统在湿中涂上手撒装饰彩片或石英至饱和。" },
          { step: "05", title: "面漆与养护", desc: "中涂固化后，刮除并吸净多余彩片，分两遍涂布抗紫外线脂肪族聚氨酯面漆，获得最大耐刮与耐化学性能。" }
        ],
        faqs: [
          { q: "环氧地坪施工与固化需要多长时间？", a: "大多数住宅车库或展厅项目（300–500 平方英尺）需要 3 到 4 天，包括打磨、底漆、中涂与面漆。24 小时后可轻度行走，72 小时后可通车，7 天后达到完全耐化学性能。我们会按您的通行需求安排工期。" },
          { q: "我的环氧地坪在阳光下会变黄吗？", a: "标准芳香族环氧在紫外线照射下确实会黄变。为防止这种情况，我们总是涂布抗紫外线脂肪族聚氨酯面漆（如 Sika、BASF 或 RPM 产品）。这种面漆清澈透明，即使在车棚、户外走道等阳光直射区域也能保持 10 年以上不黄变。" },
          { q: "环氧可以涂在现有瓷砖上吗？", a: "一般不建议。环氧需要直接粘结在坚实的混凝土基层上。我们通常会拆除现有瓷砖（可计入报价）并打磨下面的混凝土。某些情况下，现有环氧地面可以不拆除直接翻新——我们逐案评估。" },
          { q: "环氧地坪湿了会滑吗？", a: "标准自流平环氧表面光滑，潮湿时会滑，尤其在商业厨房或泳池平台。这些区域我们建议采用石英或彩片撒砂系统，并在面漆中添加细砂防滑剂，达到 P4–P5 防滑等级（AS/NZS 4586），同时不影响易清洁性。" }
        ],
        metaTitle: "吉隆坡与雪兰莪环氧与聚氨酯地坪涂层",
        metaDesc: "吉隆坡与雪兰莪工业环氧地坪。车库、仓库、工厂、展厅、厨房。自流平、彩片、砂浆面层。从 RM22/平方英尺起。抗紫外线面漆。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪安装工业级环氧与聚氨酯地坪涂层。自流平、石英撒砂、装饰彩片、砂浆面层系统。金刚石打磨、防潮底漆、抗紫外线脂肪族 PU 面漆。Sika、BASF、RPM 系统。",
        warranty: "5 年脱层与黄变保修"
      }
    }
  },

  // ── 16. ROOF REPAIR ────────────────────────────────────────
  "roof-repair": {
    slug: "roof-repair",
    title: "Roof Repair & Waterproofing",
    tagline: "Roof tile replacement, leak repair, gutter cleaning, flashing, and full torch-on waterproofing for landed properties. From RM 380.",
    description:
      "KL Servis Rumah provides professional roof repair and waterproofing services for landed houses across Kuala Lumpur and Selangor. We work on every common Malaysian roof type — concrete tile (the most common), clay tile, metal deck (zinc/aluminium), and flat concrete slab. Our services cover the full spectrum from small leak repairs to full re-roofing: tile replacement, ridge re-bedding and re-pointing, valley seal replacement, flashing fabrication and replacement, gutter cleaning and realignment, downpipe unblocking, full torch-on membrane waterproofing for flat roofs, and heat-reflective roof coating. We use thermal imaging and moisture meters to trace leaks to their exact source — no more guessing which tile to replace. Every job includes a written report with photographic evidence of the issue and the repair.",
    startPrice: "RM 380",
    icon: "home",
    highlights: [
      "Thermal imaging leak detection to find the exact source of roof leaks without guesswork",
      "Concrete, clay, and metal roof specialists — every common Malaysian roof type",
      "Ridge re-bedding and re-pointing with flexible polymer mortar (no more hairline cracks)",
      "Custom-fabricated flashing for chimneys, parapet walls, and roof penetrations",
      "Full torch-on bituminous membrane and acrylic elastomeric waterproofing systems",
      "Heat-reflective white roof coating to reduce ceiling temperature by up to 8°C"
    ],
    subServices: [
      { name: "Roof Leak Diagnosis & Repair", price: "From RM 380", desc: "Thermal imaging to locate the leak source, followed by tile, flashing, or membrane repair on the affected area." },
      { name: "Ridge Re-Bedding & Re-Pointing", price: "From RM 22 / linier ft", desc: "Removing loose ridge mortar and re-bedding with flexible polymer mortar for a permanent seal." },
      { name: "Gutter Cleaning & Realignment", price: "From RM 320", desc: "Clearing leaves and debris, realigning falls toward downpipes, and sealing leaking joints." },
      { name: "Full Torch-On Membrane Waterproofing", price: "From RM 26 / sq ft", desc: "Two-layer torch-applied bituminous membrane system with 10-year manufacturer warranty for flat roofs." }
    ],
    process: [
      { step: "01", title: "Roof Inspection & Leak Trace", desc: "We physically inspect the roof for cracked tiles, missing flashing, blocked gutters, and ridge damage. For hard-to-find leaks we use thermal imaging and moisture meters." },
      { step: "02", title: "Photographic Report", desc: "You receive a written report with annotated photos showing the exact issues, recommended repairs, itemized pricing, and warranty terms." },
      { step: "03", title: "Safe Work Setup", desc: "For landed houses we set up edge-protection and access platforms. We never walk on fragile tiles; we use proper crawl boards and roof ladders." },
      { step: "04", title: "Repair Execution", desc: "Tiles are replaced, flashing is fabricated from zincalume or colour-bond, ridges are re-bedded and re-pointed with polymer mortar, and membranes are torch-applied in overlapping layers." },
      { step: "05", title: "Water Test & Handover", desc: "Where practical, we perform a controlled water test to confirm the leak is resolved. You receive before/after photos and a written warranty document." }
    ],
    faqs: [
      { q: "How do I know if my roof leak needs a repair or full re-roofing?", a: "If the leak is localised to one area, the surrounding tiles are in good condition, and the existing waterproofing is under 10 years old, a targeted repair is usually sufficient. If the roof has multiple leak points, widespread ridge damage, faded/eroded tiles, or the existing membrane is over 15 years old, we typically recommend a full re-roofing. We always give you both options with honest pricing." },
      { q: "Can you work on steep or double-storey roofs safely?", a: "Yes. Our team is trained for working-at-height and uses proper fall-protection, edge-protection, and access platforms. For double-storey repairs we set up a full perimeter edge-protection system and never compromise on safety. We carry Workmen's Compensation and Public Liability insurance for landed work." },
      { q: "What is the best waterproofing system for a flat concrete roof in Malaysia?", a: "For flat concrete roofs we recommend a torch-applied modified bituminous membrane system (3mm + 4mm APP or SBS) with a UV-protective aluminium or mineral-grit top surface, or a liquid-applied polyurethane system with a UV-stable topcoat. Both are designed for tropical UV and rain cycles. We provide a 10-year workmanship and 15-year material warranty on full membrane systems." },
      { q: "Will a white reflective roof coating really lower my room temperature?", a: "Yes, significantly. Independent testing shows that high-albedo reflective coatings can lower surface temperature by 25–30°C and the ceiling below by 5–8°C. This reduces air-conditioning load by 10–20% in single-storey and top-floor rooms. We use premium acrylic elastomeric coatings with a 10-year manufacturer warranty against chalking and peel." }
    ],
    heroImage: "/hero-roof-repair.svg",
    metaTitle: "Roof Repair & Waterproofing Services KL & Selangor",
    metaDesc: "Roof leak repair, tile replacement, ridge re-bedding, gutter cleaning, torch-on waterproofing in KL & Selangor. Thermal imaging leak detection. From RM380.",
    aioSummary: "KL Servis Rumah provides roof repair and waterproofing for landed properties across KL & Selangor. Concrete, clay, and metal roofs. Tile replacement, ridge re-bedding, flashing fabrication, gutter cleaning, torch-on membrane, heat-reflective coating. Thermal imaging leak detection. Insured work-at-height team.",
    warranty: "10-Year Membrane & Workmanship Warranty",
    i18n: {
      ms: {
        title: "Pembaikan & Kalis Air Bumbung",
        tagline: "Penggantian jubin bumbung, pembaikan bocor, pembersihan longkang, flashing dan kalis air torch-on penuh untuk hartanah bertanah. Dari RM 380.",
        description: "KL Servis Rumah menyediakan perkhidmatan pembaikan bumbung dan kalis air profesional untuk rumah bertanah di seluruh Kuala Lumpur dan Selangor. Kami bekerja pada setiap jenis bumbung Malaysia biasa — jubin konkrit (paling biasa), jubin tanah liat, metal deck (zink/aluminium) dan papak konkrit rata. Perkhidmatan kami merangkumi spektrum penuh daripada pembaikan bocor kecil kepada pembumbungan semula penuh: penggantian jubin, re-bedding dan re-pointing rabung, penggantian pengedap lembah, fabrikasi dan penggantian flashing, pembersihan dan penjajaran semula longkang, nyahsekat paip turun, kalis air membran torch-on penuh untuk bumbung rata dan salutan bumbung pantul haba. Kami menggunakan pengimejan terma dan meter kelembapan untuk mengesan bocor ke sumber tepatnya — tiada lagi meneka jubin mana yang perlu diganti. Setiap kerja termasuk laporan bertulis dengan bukti fotografi isu dan pembaikan.",
        highlights: [
          "Pengesanan bocor pengimejan terma untuk mencari sumber tepat bocor bumbung tanpa tekaan",
          "Pakar bumbung konkrit, tanah liat dan logam — setiap jenis bumbung Malaysia biasa",
          "Re-bedding dan re-pointing rabung dengan mortar polimer fleksibel (tiada lagi retakan rambut)",
          "Flashing fabrikasi khas untuk cerobong, dinding parapet dan penembusan bumbung",
          "Sistem kalis air membran bitumen torch-on dan elastomerik akrilik penuh",
          "Salutan bumbung putih pantul haba untuk mengurangkan suhu siling sehingga 8°C"
        ],
        subServices: [
          { name: "Diagnosis & Pembaikan Bocor Bumbung", price: "Dari RM 380", desc: "Pengimejan terma untuk mengesan sumber bocor, diikuti pembaikan jubin, flashing atau membran pada kawasan terjejas." },
          { name: "Re-Bedding & Re-Pointing Rabung", price: "Dari RM 22 / kaki linier", desc: "Menanggalkan mortar rabung longgar dan re-bedding dengan mortar polimer fleksibel untuk pengedapan kekal." },
          { name: "Pembersihan & Penjajaran Semula Longkang", price: "Dari RM 320", desc: "Membersihkan daun dan serpihan, menjajarkan semula cerun ke arah paip turun dan mengedap sambungan bocor." },
          { name: "Kalis Air Membran Torch-On Penuh", price: "Dari RM 26 / kaki persegi", desc: "Sistem membran bitumen dua lapisan sapu obor dengan jaminan pengeluar 10 tahun untuk bumbung rata." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Bumbung & Kesan Bocor", desc: "Kami memeriksa bumbung secara fizikal untuk jubin retak, flashing hilang, longkang tersumbat dan kerosakan rabung. Untuk bocor sukar dicari kami menggunakan pengimejan terma dan meter kelembapan." },
          { step: "02", title: "Laporan Fotografi", desc: "Anda menerima laporan bertulis dengan foto beranotasi menunjukkan isu tepat, pembaikan disyorkan, harga terperinci dan terma jaminan." },
          { step: "03", title: "Persediaan Kerja Selamat", desc: "Untuk rumah bertanah kami menyediakan perlindungan tepi dan platform akses. Kami tidak pernah berjalan di atas jubin rapuh; kami menggunakan papan merangkak dan tangga bumbung yang betul." },
          { step: "04", title: "Pelaksanaan Pembaikan", desc: "Jubin diganti, flashing difabrikasi daripada zincalume atau colour-bond, rabung di-re-bed dan di-re-point dengan mortar polimer, dan membran disapu obor dalam lapisan bertindih." },
          { step: "05", title: "Ujian Air & Serahan", desc: "Di mana praktikal, kami menjalankan ujian air terkawal untuk mengesahkan bocor diselesaikan. Anda menerima foto sebelum/selepas dan dokumen jaminan bertulis." }
        ],
        faqs: [
          { q: "Bagaimana saya tahu bocor bumbung saya perlu dibaiki atau pembumbungan semula penuh?", a: "Jika bocor setempat pada satu kawasan, jubin sekitar dalam keadaan baik dan kalis air sedia ada bawah 10 tahun, pembaikan bersasar biasanya mencukupi. Jika bumbung mempunyai pelbagai titik bocor, kerosakan rabung meluas, jubin pudar/hakis, atau membran sedia ada melebihi 15 tahun, kami biasanya mengesyorkan pembumbungan semula penuh. Kami sentiasa memberikan kedua-dua pilihan dengan harga jujur." },
          { q: "Boleh anda bekerja pada bumbung curam atau dua tingkat dengan selamat?", a: "Ya. Pasukan kami terlatih untuk kerja di ketinggian dan menggunakan perlindungan jatuh, perlindungan tepi dan platform akses yang betul. Untuk pembaikan dua tingkat kami menyediakan sistem perlindungan tepi perimeter penuh dan tidak pernah berkompromi dengan keselamatan. Kami membawa insurans Pampasan Pekerja dan Liabiliti Awam untuk kerja bertanah." },
          { q: "Apakah sistem kalis air terbaik untuk bumbung konkrit rata di Malaysia?", a: "Untuk bumbung konkrit rata kami mengesyorkan sistem membran bitumen terubah suai sapu obor (3mm + 4mm APP atau SBS) dengan permukaan atas aluminium atau grit mineral perlindungan UV, atau sistem polyurethane sapuan cecair dengan topcoat stabil UV. Kedua-duanya direka untuk kitaran UV dan hujan tropika. Kami menyediakan jaminan kerja 10 tahun dan jaminan bahan 15 tahun pada sistem membran penuh." },
          { q: "Adakah salutan bumbung pantul putih benar-benar menurunkan suhu bilik saya?", a: "Ya, dengan ketara. Ujian bebas menunjukkan salutan pantul albedo tinggi boleh menurunkan suhu permukaan sebanyak 25–30°C dan siling di bawah sebanyak 5–8°C. Ini mengurangkan beban penghawa dingin sebanyak 10–20% di bilik satu tingkat dan tingkat atas. Kami menggunakan salutan elastomerik akrilik premium dengan jaminan pengeluar 10 tahun terhadap pengapuran dan pengelupasan." }
        ],
        metaTitle: "Perkhidmatan Pembaikan & Kalis Air Bumbung KL & Selangor",
        metaDesc: "Pembaikan bocor bumbung, penggantian jubin, re-bedding rabung, pembersihan longkang, kalis air torch-on di KL & Selangor. Pengesanan bocor pengimejan terma. Dari RM380.",
        aioSummary: "KL Servis Rumah menyediakan pembaikan bumbung dan kalis air untuk hartanah bertanah di seluruh KL & Selangor. Bumbung konkrit, tanah liat dan logam. Penggantian jubin, re-bedding rabung, fabrikasi flashing, pembersihan longkang, membran torch-on, salutan pantul haba. Pengesanan bocor pengimejan terma. Pasukan kerja di ketinggian berinsurans.",
        warranty: "Jaminan Membran & Kerja 10 Tahun"
      },
      zh: {
        title: "屋顶维修与防水",
        tagline: "有地物业的屋瓦更换、漏水维修、天沟清理、泛水板与全烤贴式防水。从 RM 380 起。",
        description: "KL Servis Rumah 为吉隆坡与雪兰莪的有地住宅提供专业屋顶维修与防水服务。我们施工马来西亚各种常见屋顶类型——混凝土瓦（最常见）、陶土瓦、金属屋面（锌/铝）与混凝土平顶。服务涵盖从小面积漏水维修到整体换屋顶的全方位：换瓦、屋脊重新铺浆与勾缝、天沟密封更换、泛水板制作与更换、天沟清理与调坡、落水管疏通、平屋顶全烤贴式卷材防水，以及屋顶隔热反射涂料。我们使用热成像与湿度仪将漏水点精确定位——不再靠猜换哪片瓦。每项工作都附有书面报告与问题和维修的照片证据。",
        highlights: [
          "热成像漏水检测，精确定位屋顶漏水源，不靠猜测",
          "混凝土、陶土与金属屋顶专家——覆盖马来西亚所有常见屋顶类型",
          "屋脊重新铺浆与勾缝，使用柔性聚合物砂浆（不再有发丝裂缝）",
          "烟囱、女儿墙与屋面穿透处的定制泛水板",
          "全烤贴式沥青卷材与丙烯酸弹性防水系统",
          "白色隔热反射屋顶涂料，天花板温度最多可降低 8°C"
        ],
        subServices: [
          { name: "屋顶漏水诊断与维修", price: "从 RM 380 起", desc: "热成像定位漏水源，随后对受影响区域进行换瓦、泛水或卷材维修。" },
          { name: "屋脊重新铺浆与勾缝", price: "从 RM 22 / 延英尺起", desc: "清除松动的屋脊砂浆，用柔性聚合物砂浆重新铺浆，永久密封。" },
          { name: "天沟清理与调坡", price: "从 RM 320 起", desc: "清除树叶与杂物，将坡度调至落水口方向，并密封漏水接缝。" },
          { name: "全烤贴式卷材防水", price: "从 RM 26 / 平方英尺起", desc: "双层火烤沥青卷材系统，平屋顶享 10 年制造商保修。" }
        ],
        process: [
          { step: "01", title: "屋顶检查与漏水追踪", desc: "我们实地检查屋顶的瓦片裂缝、泛水缺失、天沟堵塞与屋脊损坏。难找的漏水点使用热成像与湿度仪。" },
          { step: "02", title: "照片报告", desc: "您收到一份带标注照片的书面报告，列明确切问题、建议维修方案、逐项价格与保修条款。" },
          { step: "03", title: "安全施工准备", desc: "有地住宅我们设置临边防护与作业平台。我们绝不踩踏易碎瓦片；使用专用的爬行板与屋顶梯。" },
          { step: "04", title: "维修施工", desc: "更换瓦片，用锌铝或彩钢板制作泛水，屋脊用聚合物砂浆重新铺浆勾缝，卷材分层搭接火烤施工。" },
          { step: "05", title: "淋水测试与交付", desc: "可行时，我们进行受控淋水测试确认漏水已解决。您收到施工前后照片与书面保修文件。" }
        ],
        faqs: [
          { q: "怎么判断屋顶漏水是需要局部维修还是整体换屋顶？", a: "如果漏水集中在一个区域、周围瓦片状况良好且现有防水层不到 10 年，通常针对性维修即可。如果屋顶有多个漏水点、屋脊大面积损坏、瓦片褪色/风化，或现有卷材超过 15 年，我们通常建议整体换屋顶。我们总会以诚实的价格给您两种方案。" },
          { q: "你们能安全地在陡坡或双层屋顶上施工吗？", a: "可以。我们的团队受过高空作业培训，使用规范的防坠、临边防护与作业平台。双层维修我们设置全周边临边防护系统，在安全上绝不妥协。我们为有地工程投保劳工赔偿险与公众责任险。" },
          { q: "马来西亚混凝土平顶最好的防水系统是什么？", a: "混凝土平顶我们推荐火烤改性沥青卷材系统（3mm + 4mm APP 或 SBS），顶面为抗紫外线铝箔或矿物粒料面层；或液体涂布聚氨酯系统加抗紫外线面漆。两者都为热带紫外线与降雨循环而设计。整铺卷材系统我们提供 10 年工艺保修与 15 年材料保修。" },
          { q: "白色反射屋顶涂料真的能降低室温吗？", a: "是的，效果显著。独立测试表明，高反射率涂料可使表面温度降低 25–30°C，下方天花板降低 5–8°C。这使单层和顶层房间的空调负荷减少 10–20%。我们使用优质丙烯酸弹性涂料，制造商提供 10 年防粉化、防剥落保修。" }
        ],
        metaTitle: "吉隆坡与雪兰莪屋顶维修与防水服务",
        metaDesc: "吉隆坡与雪兰莪屋顶漏水维修、换瓦、屋脊铺浆、天沟清理、烤贴防水。热成像漏水检测。从 RM380 起。",
        aioSummary: "KL Servis Rumah 为吉隆坡与雪兰莪的有地物业提供屋顶维修与防水。混凝土、陶土与金属屋顶。换瓦、屋脊铺浆、泛水制作、天沟清理、烤贴卷材、隔热涂料。热成像漏水检测。已投保的高空作业团队。",
        warranty: "10 年卷材与工艺保修"
      }
    }
  },

  // ── 17. KITCHEN CABINET ────────────────────────────────────────
  "kitchen-cabinet": {
    slug: "kitchen-cabinet",
    title: "Kitchen Cabinet & Countertop",
    tagline: "Custom-built and modular kitchen cabinets with stone, solid surface, or laminate countertops. Design, supply, install. From RM 7,500.",
    description:
      "KL Servis Rumah designs, fabricates, and installs custom kitchen cabinets and countertops for residential and light-commercial projects across Kuala Lumpur and Selangor. We work with three main systems: (1) **Modular cabinets** (Häfele, Blum, or compatible) — pre-engineered boxes with consistent quality and faster install; (2) **Custom plywood cabinets** — built-to-fit on site, ideal for unusual layouts and maximum storage; (3) **Hybrid systems** — modular carcasses with custom doors and panels. Countertop options include granite (the Malaysian classic), engineered quartz (Caesarstone, Silestone — scratch and stain resistant), solid surface (Corian — seamless joins, integrated sinks), and high-pressure laminate (the most budget-friendly). Every kitchen includes soft-close hinges, full-extension drawer runners, and ergonomic storage planning.",
    startPrice: "RM 7,500",
    icon: "utensils",
    highlights: [
      "Modular, custom plywood, and hybrid kitchen systems to fit every budget and layout",
      "Häfele and Blum soft-close hinges and full-extension drawer runners as standard",
      "Granite, quartz, solid surface, and laminate countertop options with seamless joins",
      "Ergonomic storage planning: pull-out pantries, magic corners, drawer organisers",
      "Concealed handles, integrated lighting, and appliance garages for clean aesthetics",
      "Free 3D kitchen design render with itemized quotation before signing"
    ],
    subServices: [
      { name: "Modular Kitchen Cabinet (10ft L-shape)", price: "From RM 7,500", desc: "Häfele or Blum hardware with 18mm melamine carcass, doors in laminate, acrylic, or spray-painted finish." },
      { name: "Custom Plywood Kitchen", price: "From RM 11,000", desc: "Built-to-fit plywood cabinet with soft-close hardware, custom doors, and full-height pantry units." },
      { name: "Quartz / Granite Countertop", price: "From RM 220 / linier ft", desc: "Caesarstone, Silestone, or local granite with undermount sink cutout and seamless joins." },
      { name: "Kitchen Makeover (Doors & Hardware Only)", price: "From RM 4,200", desc: "Replacing doors, drawer fronts, handles, hinges, and runners to refresh an existing kitchen carcass." }
    ],
    process: [
      { step: "01", title: "Site Measurement & Design Brief", desc: "We visit your home, take laser-accurate measurements, photograph the space, and capture your cooking style, storage needs, appliance list, and budget." },
      { step: "02", title: "3D Design & Quotation", desc: "You receive a 3D rendered layout with full itemized pricing — every cabinet, hardware, accessory, and stone slab is listed. We revise the design until you are happy." },
      { step: "03", title: "Manufacturing & Lead Time", desc: "Modular cabinets take 14–21 days to manufacture. Custom plywood cabinets are built in our workshop over 21–28 days. Countertop templating happens after cabinet installation." },
      { step: "04", title: "Demolition & Prep", desc: "Old kitchen is carefully dismantled and removed (we can include this in the quote). Plumbing and electrical points are relocated to match the new layout." },
      { step: "05", title: "Installation & Handover", desc: "Cabinets are levelled and anchored, countertops are templated and installed, sink and tap are fitted, and a final alignment check plus snag list walkthrough is completed." }
    ],
    faqs: [
      { q: "Modular vs custom plywood kitchen — which is better for me?", a: "Modular cabinets are pre-engineered boxes (Häfele, Blum, or compatible) with consistent quality, faster install (typically 1 day), and lower cost. They are ideal for standard L-shape, U-shape, or straight kitchens. Custom plywood cabinets are built on-site to fit your exact space, perfect for unusual layouts, sloped ceilings, or maximum storage needs. We can also do hybrid: modular carcasses with custom doors and panels. We help you choose during the design consultation." },
      { q: "What is the most popular countertop material in Malaysia?", a: "Granite remains the most popular (local granite from RM 80–150/linier ft, imported granite RM 150–400/linier ft) due to its heat resistance, durability, and one-of-a-kind patterns. Engineered quartz (Caesarstone, Silestone) is the fastest-growing premium choice — non-porous, scratch-resistant, consistent patterns, and never needs sealing. Solid surface (Corian) is favoured for seamless joins and integrated sinks. We can show you physical samples during the design consultation." },
      { q: "Can you keep my existing kitchen carcass and just replace doors?", a: "Yes. A door-and-hardware makeover is a popular budget option. We measure the existing carcass, manufacture new doors and drawer fronts in your chosen finish (laminate, acrylic, spray-painted, or vinyl wrap), replace all hinges and runners with soft-close versions, install new handles, and your kitchen looks brand new at a fraction of the cost of a full replacement." },
      { q: "How long does a full kitchen renovation take from design to handover?", a: "Typically 6 to 10 weeks: 1 week for design and quotation, 3–4 weeks for cabinet manufacturing, 1 week for demolition and prep, 1–2 days for cabinet install, 1 week for countertop templating and install, plus plumbing and electrical finishing. We provide a detailed Gantt chart at sign-off so you know exactly when each milestone happens." }
    ],
    heroImage: "/hero/home-services-kitchen-cabinet-kl.jpg",
    metaTitle: "Custom Kitchen Cabinet & Countertop KL & Selangor",
    metaDesc: "Custom and modular kitchen cabinets in KL & Selangor. Häfele, Blum hardware. Granite, quartz, solid surface countertops. From RM6000. 3D design included.",
    aioSummary: "KL Servis Rumah designs, fabricates, and installs kitchen cabinets across KL & Selangor. Modular (Häfele, Blum), custom plywood, and hybrid systems. Granite, quartz (Caesarstone, Silestone), solid surface, laminate countertops. Free 3D design render. Soft-close hardware, ergonomic storage, integrated lighting.",
    warranty: "5-Year Cabinet Structure Warranty",
    i18n: {
      ms: {
        title: "Kabinet Dapur & Permukaan Kaunter",
        tagline: "Kabinet dapur kustom dan modular dengan permukaan kaunter batu, solid surface atau laminate. Reka bentuk, bekalan, pemasangan. Dari RM 7,500.",
        description: "KL Servis Rumah mereka bentuk, memfabrikasi dan memasang kabinet dapur kustom dan permukaan kaunter untuk projek kediaman dan komersial ringan di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan tiga sistem utama: (1) **Kabinet modular** (Häfele, Blum atau serasi) — kotak pra-kejuruteraan dengan kualiti konsisten dan pemasangan lebih pantas; (2) **Kabinet papan lapis kustom** — dibina mengikut ukuran di tapak, sesuai untuk susun atur luar biasa dan storan maksimum; (3) **Sistem hibrid** — rangka modular dengan pintu dan panel kustom. Pilihan permukaan kaunter termasuk granit (kegemaran Malaysia), kuarza kejuruteraan (Caesarstone, Silestone — tahan calar dan kotoran), solid surface (Corian — sambungan lancar, singki bersepadu) dan laminate tekanan tinggi (paling mesra bajet). Setiap dapur termasuk engsel tutup lembut, rel laci sambungan penuh dan perancangan storan ergonomik.",
        highlights: [
          "Sistem dapur modular, papan lapis kustom dan hibrid untuk setiap bajet dan susun atur",
          "Engsel tutup lembut Häfele dan Blum serta rel laci sambungan penuh sebagai standard",
          "Pilihan permukaan kaunter granit, kuarza, solid surface dan laminate dengan sambungan lancar",
          "Perancangan storan ergonomik: pantry tarik-keluar, magic corner, susun atur laci",
          "Pemegang tersembunyi, pencahayaan bersepadu dan garaj perkakas untuk estetika kemas",
          "Render reka bentuk dapur 3D percuma dengan sebut harga terperinci sebelum menandatangani"
        ],
        subServices: [
          { name: "Kabinet Dapur Modular (L-shape 10 kaki)", price: "Dari RM 7,500", desc: "Perkakasan Häfele atau Blum dengan rangka melamin 18mm, pintu dalam kemasan laminate, akrilik atau cat semburan." },
          { name: "Dapur Papan Lapis Kustom", price: "Dari RM 11,000", desc: "Kabinet papan lapis bina-mengikut-ukuran dengan perkakasan tutup lembut, pintu kustom dan unit pantry penuh tinggi." },
          { name: "Permukaan Kaunter Kuarza / Granit", price: "Dari RM 220 / kaki linier", desc: "Caesarstone, Silestone atau granit tempatan dengan potongan singki bawah-duduk dan sambungan lancar." },
          { name: "Makeover Dapur (Pintu & Perkakasan Sahaja)", price: "Dari RM 4,200", desc: "Menggantikan pintu, muka laci, pemegang, engsel dan rel untuk menyegarkan rangka dapur sedia ada." }
        ],
        process: [
          { step: "01", title: "Ukuran Tapak & Brief Reka Bentuk", desc: "Kami melawat rumah anda, mengambil ukuran tepat laser, memfoto ruang dan menangkap gaya masakan, keperluan storan, senarai perkakas dan bajet anda." },
          { step: "02", title: "Reka Bentuk 3D & Sebut Harga", desc: "Anda menerima susun atur render 3D dengan harga terperinci penuh — setiap kabinet, perkakasan, aksesori dan slab batu disenaraikan. Kami menyemak semula reka bentuk sehingga anda berpuas hati." },
          { step: "03", title: "Pembuatan & Masa Tunggu", desc: "Kabinet modular mengambil 14–21 hari untuk dibuat. Kabinet papan lapis kustom dibina di bengkel kami dalam 21–28 hari. Templating permukaan kaunter berlaku selepas pemasangan kabinet." },
          { step: "04", title: "Perobohan & Persediaan", desc: "Dapur lama ditanggalkan dan disingkirkan dengan rapi (boleh disertakan dalam sebut harga). Titik paip dan elektrik dipindahkan mengikut susun atur baharu." },
          { step: "05", title: "Pemasangan & Serahan", desc: "Kabinet diratakan dan disauh, permukaan kaunter di-template dan dipasang, singki dan paip dipasang, dan pemeriksaan penjajaran akhir serta walkthrough senarai snag diselesaikan." }
        ],
        faqs: [
          { q: "Dapur modular vs papan lapis kustom — mana lebih baik untuk saya?", a: "Kabinet modular ialah kotak pra-kejuruteraan (Häfele, Blum atau serasi) dengan kualiti konsisten, pemasangan lebih pantas (biasanya 1 hari) dan kos lebih rendah. Ia sesuai untuk dapur L-shape, U-shape atau lurus standard. Kabinet papan lapis kustom dibina di tapak mengikut ruang tepat anda, sesuai untuk susun atur luar biasa, siling condong atau keperluan storan maksimum. Kami juga boleh buat hibrid: rangka modular dengan pintu dan panel kustom. Kami membantu anda memilih semasa konsultasi reka bentuk." },
          { q: "Apakah bahan permukaan kaunter paling popular di Malaysia?", a: "Granit kekal paling popular (granit tempatan dari RM 80–150/kaki linier, granit import RM 150–400/kaki linier) kerana rintangan haba, ketahanan dan corak uniknya. Kuarza kejuruteraan (Caesarstone, Silestone) ialah pilihan premium yang paling pesat berkembang — tidak berliang, tahan calar, corak konsisten dan tidak perlu pengedapan. Solid surface (Corian) digemari untuk sambungan lancar dan singki bersepadu. Kami boleh tunjukkan sampel fizikal semasa konsultasi reka bentuk." },
          { q: "Boleh kekalkan rangka dapur sedia ada saya dan hanya ganti pintu?", a: "Ya. Makeover pintu-dan-perkakasan ialah pilihan bajet popular. Kami mengukur rangka sedia ada, membuat pintu dan muka laci baharu dalam kemasan pilihan anda (laminate, akrilik, cat semburan atau balutan vinyl), menggantikan semua engsel dan rel dengan versi tutup lembut, memasang pemegang baharu, dan dapur anda kelihatan seperti baharu pada sebahagian kecil kos penggantian penuh." },
          { q: "Berapa lama pengubahsuaian dapur penuh dari reka bentuk ke serahan?", a: "Biasanya 6 hingga 10 minggu: 1 minggu untuk reka bentuk dan sebut harga, 3–4 minggu untuk pembuatan kabinet, 1 minggu untuk perobohan dan persediaan, 1–2 hari untuk pemasangan kabinet, 1 minggu untuk templating dan pemasangan permukaan kaunter, ditambah kemasan paip dan elektrik. Kami menyediakan carta Gantt terperinci semasa sign-off supaya anda tahu tepat bila setiap pencapaian berlaku." }
        ],
        metaTitle: "Kabinet Dapur Kustom & Permukaan Kaunter KL & Selangor",
        metaDesc: "Kabinet dapur kustom dan modular di KL & Selangor. Perkakasan Häfele, Blum. Permukaan kaunter granit, kuarza, solid surface. Dari RM6000. Reka bentuk 3D termasuk.",
        aioSummary: "KL Servis Rumah mereka bentuk, memfabrikasi dan memasang kabinet dapur di seluruh KL & Selangor. Sistem modular (Häfele, Blum), papan lapis kustom dan hibrid. Permukaan kaunter granit, kuarza (Caesarstone, Silestone), solid surface, laminate. Render reka bentuk 3D percuma. Perkakasan tutup lembut, storan ergonomik, pencahayaan bersepadu.",
        warranty: "Jaminan Struktur Kabinet 5 Tahun"
      },
      zh: {
        title: "厨房橱柜与台面",
        tagline: "定制与模块化厨房橱柜，配石材、实体面材或防火板台面。设计、供应、安装。从 RM 7,500 起。",
        description: "KL Servis Rumah 为吉隆坡与雪兰莪的住宅及轻型商业项目设计、制作与安装定制厨房橱柜和台面。我们提供三大系统：(1) **模块化橱柜**（Häfele、Blum 或兼容品牌）——预工程化柜体，品质稳定、安装更快；(2) **定制胶合板橱柜**——现场按尺寸打造，适合异形布局与最大化收纳；(3) **混合系统**——模块柜体配定制门板与面板。台面选择包括花岗岩（马来西亚经典）、人造石英石（Caesarstone、Silestone——耐刮耐污）、实体面材（Corian——无缝拼接、一体水槽）和高压防火板（最经济）。每套厨房都标配缓冲铰链、全拉出抽屉滑轨与符合人体工学的收纳规划。",
        highlights: [
          "模块化、定制胶合板与混合厨房系统，适合各种预算与布局",
          "标配 Häfele 与 Blum 缓冲铰链及全拉出抽屉滑轨",
          "花岗岩、石英石、实体面材与防火板台面，无缝拼接",
          "人体工学收纳规划：拉篮 pantry、转角拉篮、抽屉分隔件",
          "隐藏式拉手、内嵌灯光与电器柜，外观干净利落",
          "签约前免费提供 3D 厨房设计效果图与逐项报价"
        ],
        subServices: [
          { name: "模块化厨房橱柜（10 英尺 L 型）", price: "从 RM 7,500 起", desc: "Häfele 或 Blum 五金配 18mm 三聚氰胺柜体，门板可选防火板、亚克力或喷漆饰面。" },
          { name: "定制胶合板厨房", price: "从 RM 11,000 起", desc: "按尺寸定制的胶合板橱柜，配缓冲五金、定制门板与通顶 pantry 柜。" },
          { name: "石英石 / 花岗岩台面", price: "从 RM 220 / 延英尺起", desc: "Caesarstone、Silestone 或本地花岗岩，台下盆开孔与无缝拼接。" },
          { name: "厨房翻新（仅门板与五金）", price: "从 RM 4,200 起", desc: "更换门板、抽屉面板、拉手、铰链与滑轨，让现有柜体焕然一新。" }
        ],
        process: [
          { step: "01", title: "现场测量与设计简报", desc: "我们上门激光精准测量、拍摄空间，并记录您的烹饪习惯、收纳需求、电器清单与预算。" },
          { step: "02", title: "3D 设计与报价", desc: "您收到 3D 渲染布局图与完整逐项报价——每个柜体、五金、配件与石板都清晰列出。我们反复修改设计直到您满意。" },
          { step: "03", title: "生产与交期", desc: "模块化橱柜生产需 14–21 天。定制胶合板橱柜在我们的工厂生产 21–28 天。台面在橱柜安装后量尺定制。" },
          { step: "04", title: "拆除与准备", desc: "旧厨房小心拆除并清运（可计入报价）。水管与电源点按新布局移位。" },
          { step: "05", title: "安装与交付", desc: "橱柜调平固定，台面量尺安装，水槽与龙头装妥，并完成最终对缝检查与缺陷清单走查。" }
        ],
        faqs: [
          { q: "模块化与定制胶合板厨房——哪个更适合我？", a: "模块柜是预工程化柜体（Häfele、Blum 或兼容品牌），品质稳定、安装更快（通常 1 天）、成本更低，适合标准 L 型、U 型或一字型厨房。定制胶合板柜现场按您的实际空间打造，适合异形布局、斜顶或追求最大收纳的需求。我们也可以做混合方案：模块柜体配定制门板与面板。设计咨询时我们会帮您选择。" },
          { q: "马来西亚最流行的台面材料是什么？", a: "花岗岩仍最受欢迎（本地花岗岩 RM 80–150/延英尺，进口花岗岩 RM 150–400/延英尺），因其耐热、耐用且花纹独一无二。人造石英石（Caesarstone、Silestone）是增长最快的高端选择——无孔隙、耐刮、花纹一致且永远无需封釉。实体面材（Corian）因无缝拼接与一体水槽受青睐。设计咨询时我们可提供实物样板。" },
          { q: "可以保留现有柜体只换门板吗？", a: "可以。门板五金翻新是很受欢迎的经济方案。我们测量现有柜体，按您选择的饰面（防火板、亚克力、喷漆或贴膜）制作新门板与抽屉面板，将所有铰链滑轨换成缓冲款，装上新拉手，您的厨房即以整体换新零头的价格焕然一新。" },
          { q: "整套厨房翻新从设计到交付要多久？", a: "通常 6 到 10 周：1 周设计与报价，3–4 周橱柜生产，1 周拆除与准备，1–2 天橱柜安装，1 周台面量尺与安装，外加水电收尾。签约时我们提供详细的甘特图，让您清楚每个节点的时间。" }
        ],
        metaTitle: "吉隆坡与雪兰莪定制厨房橱柜与台面",
        metaDesc: "吉隆坡与雪兰莪定制与模块化厨房橱柜。Häfele、Blum 五金。花岗岩、石英石、实体面材台面。从 RM6000 起。含 3D 设计。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪设计、制作与安装厨房橱柜。模块化（Häfele、Blum）、定制胶合板与混合系统。花岗岩、石英石（Caesarstone、Silestone）、实体面材、防火板台面。免费 3D 设计效果图。缓冲五金、人体工学收纳、内嵌灯光。",
        warranty: "5 年柜体结构保修"
      }
    }
  },

  // ── 18. CARPENTRY ────────────────────────────────────────
  "carpentry": {
    slug: "carpentry",
    title: "Custom Carpentry & Joinery",
    tagline: "Built-in wardrobes, TV consoles, study desks, feature walls, shoe racks, and custom furniture. From RM 300 / linier ft.",
    description:
      "KL Servis Rumah designs and builds custom carpentry and joinery for residential and commercial projects across Kuala Lumpur and Selangor. Our in-house carpenters work with premium materials — 18mm plywood carcasses (not cheap MDF), 25mm thick shelves for wardrobes, high-pressure laminate or spray-painted finishes, and quality hardware (Häfele, Blum). We build: built-in floor-to-ceiling wardrobes, walk-in closet systems, TV consoles and feature walls, study desks and home-office cabinetry, dining benches and banquette seating, feature storage walls for living rooms, custom shoe cabinets, and display shelving. Every project is measured on-site, drawn in CAD, and rendered in 3D before manufacture. We never outsource critical cabinet-making — all work is done in our own KL workshop.",
    startPrice: "RM 300",
    icon: "ruler",
    highlights: [
      "In-house carpenters — no outsourcing of critical cabinet-making",
      "18mm plywood carcasses (not cheap MDF) for long-lasting structural integrity",
      "Häfele and Blum soft-close hinges and full-extension drawer runners",
      "Free 3D design render with itemized quotation before signing",
      "Laminate, acrylic, spray-painted, and vinyl-wrapped finish options",
      "Free site visit and measurement within KL and Selangor"
    ],
    subServices: [
      { name: "Built-in Wardrobe", price: "From RM 320 / linier ft", desc: "Floor-to-ceiling wardrobe with internal drawers, shelves, hanging rails, and mirror or laminate doors." },
      { name: "TV Console & Feature Wall", price: "From RM 1,500", desc: "Custom TV console with storage drawers, floating shelves, cable management, and matching feature wall panelling." },
      { name: "Study Desk & Home Office", price: "From RM 1,100", desc: "Built-in study desk with cable management, drawers, overhead cabinets, and matching shelving." },
      { name: "Shoe Cabinet & Entry Storage", price: "From RM 1,800", desc: "Slim depth shoe cabinet with tilt-out drawers, sitting bench, mirror, and integrated lighting." },
      { name: "Walk-in Wardrobe & Closet System", price: "On Quote", desc: "Floor-to-ceiling walk-in wardrobe system with hanging zones, drawers, island units and internal lighting options." },
      { name: "Vanity Cabinet & Dressing Table", price: "On Quote", desc: "Custom vanity cabinet with sink top, drawers, mirror and lighting, or a bedroom dressing table with storage." },
      { name: "Storage Cabinet & Display Shelving", price: "On Quote", desc: "Floor-to-ceiling storage cabinets, display shelving and feature storage walls for living rooms, hallways and home offices." },
      { name: "Feature Wall & Wall Panelling", price: "On Quote", desc: "Fluted, slat and laminate wall panelling with integrated shelving and lighting for living rooms, bedrooms and TV walls." },
      { name: "Dining Bench & Banquette Seating", price: "On Quote", desc: "Custom dining benches, banquette seating and window seats with built-in storage, upholstered or timber-finished." },
      { name: "Wardrobe & Cabinet Repair", price: "On Quote", desc: "Door realignment, hinge and runner replacement, sagging shelf repair and cabinet refacing to restore existing built-ins." }
    ],
    process: [
      { step: "01", title: "Site Visit & Measurement", desc: "We visit your home, take laser measurements, photograph the space, and capture your storage needs, style preferences, and budget." },
      { step: "02", title: "3D Design & Quotation", desc: "You receive a 3D rendered layout with full itemized pricing — every panel, hardware, finish, and accessory is listed. We revise the design until you are happy." },
      { step: "03", title: "Workshop Manufacturing", desc: "All components are precision-cut, edge-banded, and pre-assembled in our KL workshop using CNC and traditional joinery. Quality-checked before delivery." },
      { step: "04", title: "On-Site Installation", desc: "We deliver and install the unit in 1 to 3 days depending on size. Dust is contained with plastic sheeting, and old furniture is removed on request." },
      { step: "05", title: "Alignment & Handover", desc: "Every shelf, drawer, and door is aligned and tested. We hand over the warranty card and cleaning guide, and walk you through care instructions." }
    ],
    faqs: [
      { q: "What is the difference between plywood and MDF for built-in furniture?", a: "Plywood is a layered wood-veneer product with much higher structural strength, moisture resistance, and screw-holding ability — ideal for wardrobes, cabinets, and any piece that needs to bear weight or be disassembled. MDF (Medium-Density Fibreboard) is a fine-particle board that is smoother for painting but absorbs moisture easily and sags under load. We use plywood for all structural components and only use MDF where a perfectly smooth painted finish is required (e.g. some feature wall panels)." },
      { q: "How long does it take to build a custom wardrobe?", a: "From design sign-off to installation, typically 4 to 6 weeks: 1 week for design revisions and approval, 2–3 weeks for workshop manufacturing, 1–2 days for on-site installation. We provide a detailed timeline at sign-off so you can plan your move-in or other renovations accordingly." },
      { q: "Can I supply my own hardware (handles, runners, hinges)?", a: "Yes. You can supply your preferred hardware or we can include Häfele or Blum in the quote. If you supply, we will not warranty the hardware, but our workmanship warranty still covers the assembly. Many clients supply imported handles from Taobao or Carousell for a more bespoke look at lower cost." },
      { q: "Do you handle built-in carpentry in condos and high-rises?", a: "Yes. We have extensive experience working in condos and serviced apartments across KL — Mont Kiara, Bangsar, KLCC, Damansara, etc. We comply with management work-hour rules, use lift protection, and handle all debris removal. A typical condo built-in wardrobe can be measured, manufactured, and installed within 4 to 6 weeks." }
    ],
    heroImage: "/hero-carpentry.svg",
    metaTitle: "Custom Carpentry & Built-in Furniture KL & Selangor",
    metaDesc: "Custom built-in wardrobes, TV consoles, study desks, feature walls in KL & Selangor. In-house workshop, Häfele/Blum hardware. From RM300/linierft. 3D design included.",
    aioSummary: "KL Servis Rumah designs and builds custom carpentry across KL & Selangor. Built-in and walk-in wardrobes, TV consoles, vanity cabinets, feature walls and wall panelling, dining benches, shoe cabinets, display shelving and cabinet repair. 18mm plywood carcasses, Häfele/Blum hardware, premium finishes. In-house workshop, 3D design render, itemized quotation.",
    warranty: "5-Year Cabinet Structure Warranty",
    i18n: {
      ms: {
        title: "Pertukangan & Kerja Kayu Kustom",
        tagline: "Almari pakaian tanam, konsol TV, meja belajar, dinding feature, rak kasut dan perabot kustom. Dari RM 300 / kaki linier.",
        description: "KL Servis Rumah mereka bentuk dan membina pertukangan dan kerja kayu kustom untuk projek kediaman dan komersial di seluruh Kuala Lumpur dan Selangor. Tukang kayu dalaman kami bekerja dengan bahan premium — rangka papan lapis 18mm (bukan MDF murah), para 25mm tebal untuk almari pakaian, kemasan laminate tekanan tinggi atau cat semburan, dan perkakasan berkualiti (Häfele, Blum). Kami membina: almari pakaian tanam lantai-ke-siling, sistem walk-in closet, konsol TV dan dinding feature, meja belajar dan kabinet pejabat rumah, bangku makan dan tempat duduk banquette, dinding storan feature untuk ruang tamu, kabinet kasut kustom dan rak pameran. Setiap projek diukur di tapak, dilukis dalam CAD dan di-render 3D sebelum pembuatan. Kami tidak pernah outsource pembuatan kabinet kritikal — semua kerja dilakukan di bengkel KL kami sendiri.",
        highlights: [
          "Tukang kayu dalaman — tiada outsource pembuatan kabinet kritikal",
          "Rangka papan lapis 18mm (bukan MDF murah) untuk integriti struktur tahan lama",
          "Engsel tutup lembut Häfele dan Blum serta rel laci sambungan penuh",
          "Render reka bentuk 3D percuma dengan sebut harga terperinci sebelum menandatangani",
          "Pilihan kemasan laminate, akrilik, cat semburan dan balutan vinyl",
          "Lawatan tapak dan ukuran percuma dalam KL dan Selangor"
        ],
        subServices: [
          { name: "Almari Pakaian Tanam", price: "Dari RM 320 / kaki linier", desc: "Almari pakaian lantai-ke-siling dengan laci dalaman, para, rel gantungan dan pintu cermin atau laminate." },
          { name: "Konsol TV & Dinding Feature", price: "Dari RM 1,500", desc: "Konsol TV kustom dengan laci storan, para terapung, pengurusan kabel dan panel dinding feature sepadan." },
          { name: "Meja Belajar & Pejabat Rumah", price: "Dari RM 1,100", desc: "Meja belajar tanam dengan pengurusan kabel, laci, kabinet atas dan rak sepadan." },
          { name: "Kabinet Kasut & Storan Pintu Masuk", price: "Dari RM 1,800", desc: "Kabinet kasut kedalaman nipis dengan laci tilt-out, bangku duduk, cermin dan pencahayaan bersepadu." },
          { name: "Walk-in Wardrobe & Sistem Closet", price: "Atas Sebut Harga", desc: "Sistem walk-in wardrobe lantai-ke-siling dengan zon gantungan, laci, unit pulau dan pilihan pencahayaan dalaman." },
          { name: "Kabinet Vanity & Meja Solek", price: "Atas Sebut Harga", desc: "Kabinet vanity kustom dengan bahagian atas sinki, laci, cermin dan pencahayaan untuk bilik mandi, atau meja solek bilik tidur dengan storan." },
          { name: "Kabinet Storan & Rak Pameran", price: "Atas Sebut Harga", desc: "Kabinet storan lantai-ke-siling, rak pameran dan dinding storan feature untuk ruang tamu, laluan dan pejabat rumah." },
          { name: "Dinding Feature & Panel Dinding", price: "Atas Sebut Harga", desc: "Panel dinding fluted, slat dan laminate dengan rak serta pencahayaan bersepadu untuk ruang tamu, bilik tidur dan dinding TV." },
          { name: "Bangku Makan & Tempat Duduk Banquette", price: "Atas Sebut Harga", desc: "Bangku makan kustom, tempat duduk banquette dan bangku tingkap dengan storan terbina, kemasan upholsteri atau kayu." },
          { name: "Pembaikan Almari & Kabinet", price: "Atas Sebut Harga", desc: "Penjajaran semula pintu, penggantian engsel dan rel, pembaikan para melendut dan refacing kabinet untuk memulihkan binaan tanam sedia ada." }
        ],
        process: [
          { step: "01", title: "Lawatan Tapak & Ukuran", desc: "Kami melawat rumah anda, mengambil ukuran laser, memfoto ruang dan menangkap keperluan storan, keutamaan gaya dan bajet anda." },
          { step: "02", title: "Reka Bentuk 3D & Sebut Harga", desc: "Anda menerima susun atur render 3D dengan harga terperinci penuh — setiap panel, perkakasan, kemasan dan aksesori disenaraikan. Kami menyemak semula reka bentuk sehingga anda berpuas hati." },
          { step: "03", title: "Pembuatan Bengkel", desc: "Semua komponen dipotong tepat, di-edge-band dan dipra-pasang di bengkel KL kami menggunakan CNC dan kerja kayu tradisional. Diperiksa kualiti sebelum penghantaran." },
          { step: "04", title: "Pemasangan Di Tapak", desc: "Kami menghantar dan memasang unit dalam 1 hingga 3 hari bergantung pada saiz. Habuk dikawal dengan kain plastik, dan perabot lama disingkirkan atas permintaan." },
          { step: "05", title: "Penjajaran & Serahan", desc: "Setiap para, laci dan pintu dijajarkan dan diuji. Kami menyerahkan kad jaminan dan panduan pembersihan, dan menerangkan arahan penjagaan kepada anda." }
        ],
        faqs: [
          { q: "Apakah perbezaan antara papan lapis dan MDF untuk perabot tanam?", a: "Papan lapis ialah produk venir kayu berlapis dengan kekuatan struktur, rintangan kelembapan dan keupayaan pegangan skru yang jauh lebih tinggi — sesuai untuk almari pakaian, kabinet dan apa-apa yang perlu menanggung berat atau ditanggalkan. MDF (Medium-Density Fibreboard) ialah papan zarah halus yang lebih licin untuk mengecat tetapi menyerap kelembapan dengan mudah dan melendut di bawah beban. Kami menggunakan papan lapis untuk semua komponen struktur dan hanya menggunakan MDF di mana kemasan cat sangat licin diperlukan (contohnya sesetengah panel dinding feature)." },
          { q: "Berapa lama masa yang diambil untuk membina almari pakaian kustom?", a: "Dari sign-off reka bentuk ke pemasangan, biasanya 4 hingga 6 minggu: 1 minggu untuk semakan dan kelulusan reka bentuk, 2–3 minggu untuk pembuatan bengkel, 1–2 hari untuk pemasangan di tapak. Kami menyediakan garis masa terperinci semasa sign-off supaya anda boleh merancang perpindahan atau pengubahsuaian lain dengan sewajarnya." },
          { q: "Boleh saya membekalkan perkakasan sendiri (pemegang, rel, engsel)?", a: "Ya. Anda boleh membekalkan perkakasan pilihan anda atau kami boleh sertakan Häfele atau Blum dalam sebut harga. Jika anda membekalkan, kami tidak akan memberi jaminan perkakasan, tetapi jaminan kerja kami masih melindungi pemasangan. Ramai pelanggan membekalkan pemegang import dari Taobao atau Carousell untuk rupa lebih khas pada kos lebih rendah." },
          { q: "Adakah anda mengendalikan pertukangan tanam di kondominium dan bangunan tinggi?", a: "Ya. Kami mempunyai pengalaman luas bekerja di kondominium dan apartmen servis di seluruh KL — Mont Kiara, Bangsar, KLCC, Damansara dan lain-lain. Kami mematuhi peraturan waktu kerja pengurusan, menggunakan perlindungan lif dan mengendalikan semua penyingkiran serpihan. Almari pakaian tanam kondominium biasa boleh diukur, dibuat dan dipasang dalam 4 hingga 6 minggu." }
        ],
        metaTitle: "Pertukangan Kustom & Perabot Tanam KL & Selangor",
        metaDesc: "Almari pakaian tanam, konsol TV, meja belajar, dinding feature kustom di KL & Selangor. Bengkel dalaman, perkakasan Häfele/Blum. Dari RM300/kaki linier. Reka bentuk 3D termasuk.",
        aioSummary: "KL Servis Rumah mereka bentuk dan membina pertukangan kustom di seluruh KL & Selangor. Almari pakaian tanam dan walk-in, konsol TV, kabinet vanity, dinding feature dan panel dinding, bangku makan, kabinet kasut, rak pameran serta pembaikan kabinet. Rangka papan lapis 18mm, perkakasan Häfele/Blum, kemasan premium. Bengkel dalaman, render reka bentuk 3D, sebut harga terperinci.",
        warranty: "Jaminan Struktur Kabinet 5 Tahun"
      },
      zh: {
        title: "定制木工与细木作",
        tagline: "定制入墙衣柜、电视柜、书桌、背景墙、鞋柜与定制家具。从 RM 300 / 延英尺起。",
        description: "KL Servis Rumah 为吉隆坡与雪兰莪的住宅与商业项目设计并打造定制木工与细木作。我们的内部木工使用优质材料——18mm 胶合板柜体（非廉价 MDF）、衣柜 25mm 加厚层板、高压防火板或喷漆饰面，以及优质五金（Häfele、Blum）。我们制作：顶天立地入墙衣柜、步入式衣帽间系统、电视柜与背景墙、书桌与家庭办公柜、餐凳与卡座、客厅收纳背景墙、定制鞋柜与展示层架。每个项目都现场测量、CAD 绘图并 3D 渲染后再生产。关键的柜体制作绝不外包——所有工作都在我们吉隆坡自有工厂完成。",
        highlights: [
          "内部木工——关键柜体制作绝不外包",
          "18mm 胶合板柜体（非廉价 MDF），结构经久耐用",
          "Häfele 与 Blum 缓冲铰链及全拉出抽屉滑轨",
          "签约前免费提供 3D 设计效果图与逐项报价",
          "防火板、亚克力、喷漆与贴膜饰面可选",
          "吉隆坡与雪兰莪境内免费上门测量"
        ],
        subServices: [
          { name: "入墙衣柜", price: "从 RM 320 / 延英尺起", desc: "顶天立地衣柜，配内置抽屉、层板、挂衣杆与镜面或防火板门。" },
          { name: "电视柜与背景墙", price: "从 RM 1,500 起", desc: "定制电视柜，配收纳抽屉、悬浮层板、走线管理与配套背景墙板。" },
          { name: "书桌与家庭办公", price: "从 RM 1,100 起", desc: "入墙式书桌，配走线管理、抽屉、吊柜与配套层架。" },
          { name: "鞋柜与玄关收纳", price: "从 RM 1,800 起", desc: "薄进深鞋柜，配翻斗抽屉、换鞋凳、镜子与内嵌灯光。" },
          { name: "步入式衣帽间与衣橱系统", price: "依报价", desc: "顶天立地步入式衣帽间系统，含挂衣区、抽屉、岛台与内嵌灯光选项。" },
          { name: "浴室柜与梳妆台", price: "依报价", desc: "定制浴室柜，配台盆、抽屉、镜子与灯光；或带收纳的卧室梳妆台。" },
          { name: "储物柜与展示架", price: "依报价", desc: "顶天立地储物柜、展示层架与客厅收纳背景墙，适用于客厅、过道与家庭办公室。" },
          { name: "背景墙与护墙板", price: "依报价", desc: "格栅、竖条与防火板墙面护墙板，集成层架与灯光，适用于客厅、卧室与电视墙。" },
          { name: "餐椅长凳与卡座", price: "依报价", desc: "定制餐椅长凳、卡座与窗边座位，底部带收纳，可选布艺软包或木饰面。" },
          { name: "衣柜与柜体维修", price: "依报价", desc: "柜门调校、铰链与滑轨更换、层板下弯修复与柜体翻新，恢复现有入墙家具。" }
        ],
        process: [
          { step: "01", title: "上门测量", desc: "我们上门激光测量、拍摄空间，并记录您的收纳需求、风格偏好与预算。" },
          { step: "02", title: "3D 设计与报价", desc: "您收到 3D 渲染布局图与完整逐项报价——每块板材、五金、饰面与配件都清晰列出。我们反复修改设计直到您满意。" },
          { step: "03", title: "工厂生产", desc: "所有部件在我们吉隆坡工厂用 CNC 与传统榫卯工艺精密切割、封边并预组装。发货前质检。" },
          { step: "04", title: "现场安装", desc: "视尺寸大小，我们 1 到 3 天内送货并安装。用塑料布控制粉尘，旧家具按要求清运。" },
          { step: "05", title: "调校与交付", desc: "每层板、抽屉与门板都调平测试。我们移交保修卡与清洁指南，并向您讲解保养说明。" }
        ],
        faqs: [
          { q: "定制家具用胶合板和 MDF 有什么区别？", a: "胶合板是多层木皮压合产品，结构强度、防潮性与握钉力都高得多——适合衣柜、橱柜等需要承重或可拆装的家具。MDF（中密度纤维板）是细颗粒板，喷漆表面更光滑，但极易吸潮，承重下会下弯。我们所有结构部件都用胶合板，只在需要极致光滑漆面处使用 MDF（如部分背景墙板）。" },
          { q: "定制一个衣柜需要多长时间？", a: "从设计定稿到安装，通常 4 到 6 周：1 周设计修改与确认，2–3 周工厂生产，1–2 天现场安装。定稿时我们提供详细时间表，方便您安排入住或其他装修。" },
          { q: "我可以自己提供五金（拉手、滑轨、铰链）吗？", a: "可以。您可以提供自选五金，或在报价中选用 Häfele、Blum。若您自备五金，五金本身不在我们保修范围内，但我们的工艺保修仍涵盖组装。许多客户从淘宝或 Carousell 购买进口拉手，成本更低、更具个性。" },
          { q: "你们在公寓和高层建筑做定制柜体吗？", a: "做。我们在吉隆坡各地的公寓与服务式住宅有丰富经验——Mont Kiara、Bangsar、KLCC、Damansara 等。我们遵守管理处工时规定，使用电梯保护，并负责所有废料清运。典型的公寓入墙衣柜可在 4 到 6 周内完成测量、生产与安装。" }
        ],
        metaTitle: "吉隆坡与雪兰莪定制木工与入墙家具",
        metaDesc: "吉隆坡与雪兰莪定制入墙衣柜、电视柜、书桌、背景墙。自有工厂，Häfele/Blum 五金。从 RM300/延英尺起。含 3D 设计。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪设计并打造定制木工。入墙衣柜与步入式衣帽间、电视柜、浴室柜、背景墙与护墙板、餐椅长凳、鞋柜、展示层架及柜体维修。18mm 胶合板柜体，Häfele/Blum 五金，优质饰面。自有工厂、3D 设计效果图、逐项报价。",
        warranty: "5 年柜体结构保修"
      }
    }
  },

  // ── 19. DOOR REPAIR & INSTALLATION ───────────────────────────────
  "door": {
    slug: "door",
    title: "Door Repair & Installation",
    tagline: "Solid timber, engineered, fire-rated, and laminate doors — supply, install, plane, hinge, and lock fitting. From RM 250.",
    description:
      "KL Servis Rumah supplies, installs, and repairs all types of interior and exterior doors across Kuala Lumpur and Selangor. We work with every common Malaysian door type: solid hardwood (meranti, chengal, oak), engineered timber with HDF skin, flush laminate doors, fire-rated doors (1-hour and 2-hour certified), and PVC/metal door frames for bathrooms and kitchens. Our services include new door installation (with frame, architrave, hinges, and lockset), door planing for doors that scrape or stick, hinge replacement, lockset installation, door frame repair, and full bathroom/kitchen PVC door replacement. Every installation includes proper alignment, even gaps (3–4mm top and sides, 5–8mm bottom), and a slam test before handover.",
    startPrice: "RM 250",
    icon: "door-open",
    highlights: [
      "Solid timber, engineered, fire-rated, and laminate door specialists",
      "Door planing and adjustment to fix scraping, sticking, or swollen doors",
      "Premium hinges (SS304 stainless) and locksets (Yale, Imperial, Hafele, or supplied by you)",
      "Proper alignment with 3–4mm top/side gaps and 5–8mm bottom for smooth operation",
      "Fire-rated door installation with intumescent seals for compliance with building regs",
      "Old door and frame removal included in every replacement project"
    ],
    subServices: [
      { name: "Solid Timber Door Installation", price: "From RM 550", desc: "Solid meranti or chengal door with meranti frame, 3 SS304 hinges, architrave, and basic mortice lockset." },
      { name: "Laminate Door Installation", price: "From RM 250", desc: "HDF-skin engineered door with smooth laminate finish, ideal for budget-friendly modern interiors." },
      { name: "Door Planing & Adjustment", price: "From RM 120", desc: "Trimming a door that is scraping the floor or frame, rehanging on existing hinges, and adjusting the lockset." },
      { name: "Fire-Rated Door Installation", price: "From RM 950", desc: "1-hour or 2-hour certified fire door with intumescent seals, suitable for kitchen, staircase, or fire-escape access." },
      { name: "Door Replacement", price: "On Quote", desc: "Like-for-like replacement of an existing door leaf on a sound frame — new door supplied, hinges renewed, lockset refitted, and gaps re-set." },
      { name: "Door Frame Repair & Replacement", price: "On Quote", desc: "Repairing rotted, cracked, or out-of-square timber frames, or supplying a new meranti or PVC frame with architrave when the old one is beyond repair." },
      { name: "Bathroom & Kitchen PVC Door Replacement", price: "On Quote", desc: "Moisture-proof PVC or aluminium door and frame sets for wet areas, sized to the existing opening and sealed against splash and humidity." },
      { name: "Sliding & Bi-Fold Door Installation", price: "On Quote", desc: "Top-hung sliding, pocket, and bi-fold door sets with tracks, floor guides, and soft-close hardware for bedrooms, wardrobes, and study rooms." },
      { name: "Main Entrance Door Installation", price: "On Quote", desc: "Heavier main entrance door sets with reinforced hinges, security lockset preparation, and weather-sealed threshold detailing." },
      { name: "Door Closer & Hardware Installation", price: "On Quote", desc: "Supply and fitting of door closers, floor springs, stoppers, seals, and drop-down thresholds on existing or newly installed doors." }
    ],
    process: [
      { step: "01", title: "Site Measurement & Selection", desc: "We measure the existing door opening (height, width, depth of frame), check the swing direction, and recommend the right door type and size." },
      { step: "02", title: "Door Sourcing & Lead Time", desc: "Laminate and engineered doors are available in 3–7 days. Solid timber and custom fire-rated doors take 14–21 days. We provide exact lead times at quotation." },
      { step: "03", title: "Old Door Removal", desc: "We carefully remove the old door, hinges, lockset, and (if needed) the architrave. Frames are left in place unless replacement is also requested." },
      { step: "04", title: "New Door Installation", desc: "The new door is hung on stainless steel ball-bearing hinges, aligned with even gaps, and the lockset is morticed and fitted. The door is tested for smooth swing and latch." },
      { step: "05", title: "Architrave & Finishing", desc: "MDF or solid timber architrave is installed with mitred corners, sealed, and ready for paint. We can also paint the door and frame for an additional fee." }
    ],
    faqs: [
      { q: "Why is my door scraping the floor suddenly?", a: "Most common cause is humidity-related expansion — Malaysian tropical humidity makes timber doors absorb moisture and swell, especially in bathrooms and kitchens. Other causes include loose hinges (the door is sagging), a settled house frame, or a recently installed floor covering. We assess the cause and either plane the door, rehang the hinges with longer screws, or replace the door entirely if the swelling is too severe." },
      { q: "Can I keep my existing door frame and just replace the door?", a: "Yes, in most cases. As long as the frame is in good condition, square, and the right size, we can hang a new door on the existing frame. This saves the cost of frame replacement and reduces disruption. We measure the existing frame and source a door to fit (or trim the new door to fit)." },
      { q: "What is a fire-rated door and do I need one?", a: "A fire-rated door is a certified door and frame system that has been tested to withstand fire for a specified period (typically 1 hour or 2 hours). They are required by Malaysian building regulations for kitchen doors in some condo developments, all doors leading to fire-escape staircases, and certain commercial situations. We supply and install fire-rated doors from brands including Sanitor, Felicia, and local certified manufacturers, with proper intumescent seals and self-closing devices." },
      { q: "Should I choose solid timber or laminate doors?", a: "Solid timber doors (meranti, chengal, oak) are heavier, more sound-insulating, and have a premium feel — they can also be sanded and repainted multiple times. They cost more (RM 550+) and are sensitive to humidity. Laminate/engineered doors are lighter, more dimensionally stable in humid Malaysian weather, easier to maintain, and more affordable (RM 250+). For bedrooms and main doors we recommend solid timber; for bathrooms, kitchens, and rental properties we recommend laminate or PVC." }
    ],
    heroImage: "/hero-door.svg",
    metaTitle: "Door Repair & Installation Services KL & Selangor",
    metaDesc: "Door supply, install, plane, and repair in KL & Selangor. Solid timber, laminate, fire-rated doors. SS304 hinges, Yale/Hafele locksets. From RM250 per door.",
    aioSummary: "KL Servis Rumah supplies, installs, and repairs doors across KL & Selangor. Solid timber, engineered, laminate, fire-rated, PVC doors. Door planing, hinge replacement, lockset fitting, frame repair. SS304 stainless steel hardware, even alignment, slam test before handover.",
    warranty: "12-Month Door Hanging & Hardware Warranty",
    i18n: {
      ms: {
        title: "Pembaikan & Pemasangan Pintu",
        tagline: "Pintu kayu pepejal, engineered, tahan api dan laminate — bekalan, pemasangan, ketam, engsel dan pemasangan kunci. Dari RM 250.",
        description: "KL Servis Rumah membekalkan, memasang dan membaiki semua jenis pintu dalaman dan luaran di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenis pintu Malaysia biasa: kayu keras pepejal (meranti, chengal, oak), kayu engineered dengan kulit HDF, pintu laminate flush, pintu tahan api (bertauliah 1 jam dan 2 jam), dan bingkai pintu PVC/logam untuk bilik mandi dan dapur. Perkhidmatan kami termasuk pemasangan pintu baharu (dengan bingkai, architrave, engsel dan set kunci), ketam pintu untuk pintu yang menggesel atau melekat, penggantian engsel, pemasangan set kunci, pembaikan bingkai pintu dan penggantian penuh pintu PVC bilik mandi/dapur. Setiap pemasangan termasuk penjajaran yang betul, jurang sekata (3–4mm atas dan sisi, 5–8mm bawah) dan ujian hentam sebelum serahan.",
        highlights: [
          "Pakar pintu kayu pepejal, engineered, tahan api dan laminate",
          "Ketam dan pelarasan pintu untuk membaiki pintu yang menggesel, melekat atau mengembang",
          "Engsel premium (keluli tahan karat SS304) dan set kunci (Yale, Imperial, Hafele atau dibekalkan anda)",
          "Penjajaran betul dengan jurang atas/sisi 3–4mm dan bawah 5–8mm untuk operasi lancar",
          "Pemasangan pintu tahan api dengan pengedap intumescent untuk pematuhan peraturan bangunan",
          "Penyingkiran pintu dan bingkai lama termasuk dalam setiap projek penggantian"
        ],
        subServices: [
          { name: "Pemasangan Pintu Kayu Pepejal", price: "Dari RM 550", desc: "Pintu meranti atau chengal pepejal dengan bingkai meranti, 3 engsel SS304, architrave dan set kunci mortice asas." },
          { name: "Pemasangan Pintu Laminate", price: "Dari RM 250", desc: "Pintu engineered kulit HDF dengan kemasan laminate licin, sesuai untuk dalaman moden mesra bajet." },
          { name: "Ketam & Pelarasan Pintu", price: "Dari RM 120", desc: "Memotong pintu yang menggesel lantai atau bingkai, menggantung semula pada engsel sedia ada dan melaraskan set kunci." },
          { name: "Pemasangan Pintu Tahan Api", price: "Dari RM 950", desc: "Pintu api bertauliah 1 jam atau 2 jam dengan pengedap intumescent, sesuai untuk dapur, tangga atau akses laluan kecemasan." },
          { name: "Penggantian Pintu", price: "Atas Sebut Harga", desc: "Penggantian daun pintu sedia ada pada bingkai yang masih kukuh — pintu baharu dibekalkan, engsel diperbaharui, set kunci dipasang semula dan jurang dilaras semula." },
          { name: "Pembaikan & Penggantian Bingkai Pintu", price: "Atas Sebut Harga", desc: "Membaiki bingkai kayu reput, retak atau tidak segi empat, atau membekalkan bingkai meranti atau PVC baharu dengan architrave apabila bingkai lama tidak boleh dibaiki." },
          { name: "Penggantian Pintu PVC Bilik Mandi & Dapur", price: "Atas Sebut Harga", desc: "Set pintu dan bingkai PVC atau aluminium kalis lembapan untuk kawasan basah, dibuat mengikut bukaan sedia ada dan dikedap daripada percikan serta kelembapan." },
          { name: "Pemasangan Pintu Gelangsar & Bi-Fold", price: "Atas Sebut Harga", desc: "Set pintu gelangsar top-hung, pocket dan bi-fold dengan trek, pemandu lantai dan perkakasan tutup lembut untuk bilik tidur, wardrobe dan bilik belajar." },
          { name: "Pemasangan Pintu Utama", price: "Atas Sebut Harga", desc: "Set pintu utama yang lebih berat dengan engsel diperkukuh, persediaan set kunci keselamatan dan kemasan ambang kalis cuaca." },
          { name: "Pemasangan Door Closer & Perkakasan", price: "Atas Sebut Harga", desc: "Bekalan dan pemasangan door closer, floor spring, penahan pintu, pengedap dan ambang drop-down pada pintu sedia ada atau pintu baharu." }
        ],
        process: [
          { step: "01", title: "Ukuran Tapak & Pemilihan", desc: "Kami mengukur bukaan pintu sedia ada (tinggi, lebar, kedalaman bingkai), memeriksa arah ayunan dan mengesyorkan jenis dan saiz pintu yang betul." },
          { step: "02", title: "Perolehan Pintu & Masa Tunggu", desc: "Pintu laminate dan engineered tersedia dalam 3–7 hari. Pintu kayu pepejal dan tahan api kustom mengambil 14–21 hari. Kami menyediakan masa tunggu tepat semasa sebut harga." },
          { step: "03", title: "Penyingkiran Pintu Lama", desc: "Kami menanggalkan pintu lama, engsel, set kunci dan (jika perlu) architrave dengan rapi. Bingkai dibiarkan kecuali penggantian turut diminta." },
          { step: "04", title: "Pemasangan Pintu Baharu", desc: "Pintu baharu digantung pada engsel bebola keluli tahan karat, dijajarkan dengan jurang sekata, dan set kunci di-mortice dan dipasang. Pintu diuji untuk ayunan dan latch lancar." },
          { step: "05", title: "Architrave & Kemasan", desc: "Architrave MDF atau kayu pepejal dipasang dengan sudut mitred, dikedap dan sedia untuk cat. Kami juga boleh mengecat pintu dan bingkai dengan bayaran tambahan." }
        ],
        faqs: [
          { q: "Mengapa pintu saya tiba-tiba menggesel lantai?", a: "Punca paling biasa ialah pengembangan berkaitan kelembapan — kelembapan tropika Malaysia menyebabkan pintu kayu menyerap lembapan dan mengembang, terutamanya di bilik mandi dan dapur. Punca lain termasuk engsel longgar (pintu melendut), bingkai rumah yang mendap, atau lantai baharu yang baru dipasang. Kami menilai punca dan sama ada mengetam pintu, menggantung semula engsel dengan skru lebih panjang, atau menggantikan pintu sepenuhnya jika pengembangan terlalu teruk." },
          { q: "Boleh saya kekalkan bingkai pintu sedia ada dan hanya ganti pintu?", a: "Ya, dalam kebanyakan kes. Selagi bingkai dalam keadaan baik, segi empat tepat dan saiz betul, kami boleh menggantung pintu baharu pada bingkai sedia ada. Ini menjimatkan kos penggantian bingkai dan mengurangkan gangguan. Kami mengukur bingkai sedia ada dan mendapatkan pintu yang muat (atau memotong pintu baharu mengikut saiz)." },
          { q: "Apakah pintu tahan api dan adakah saya memerlukannya?", a: "Pintu tahan api ialah sistem pintu dan bingkai bertauliah yang telah diuji untuk menahan api untuk tempoh tertentu (biasanya 1 jam atau 2 jam). Ia dikehendaki oleh peraturan bangunan Malaysia untuk pintu dapur di sesetengah pembangunan kondominium, semua pintu menuju tangga laluan kecemasan dan situasi komersial tertentu. Kami membekalkan dan memasang pintu tahan api daripada jenama termasuk Sanitor, Felicia dan pengeluar tempatan bertauliah, dengan pengedap intumescent dan peranti tutup-sendiri yang betul." },
          { q: "Patutkah saya memilih pintu kayu pepejal atau laminate?", a: "Pintu kayu pepejal (meranti, chengal, oak) lebih berat, lebih menebap bunyi dan mempunyai rasa premium — ia juga boleh diisar dan dicat semula berkali-kali. Kosnya lebih tinggi (RM 550+) dan sensitif kepada kelembapan. Pintu laminate/engineered lebih ringan, lebih stabil dimensi dalam cuaca lembap Malaysia, lebih mudah diselenggara dan lebih berpatutan (RM 250+). Untuk bilik tidur dan pintu utama kami mengesyorkan kayu pepejal; untuk bilik mandi, dapur dan hartanah sewaan kami mengesyorkan laminate atau PVC." }
        ],
        metaTitle: "Perkhidmatan Pembaikan & Pemasangan Pintu KL & Selangor",
        metaDesc: "Bekalan, pemasangan, ketam dan pembaikan pintu di KL & Selangor. Pintu kayu pepejal, laminate, tahan api. Engsel SS304, set kunci Yale/Hafele. Dari RM250 setiap pintu.",
        aioSummary: "KL Servis Rumah membekalkan, memasang dan membaiki pintu di seluruh KL & Selangor. Pintu kayu pepejal, engineered, laminate, tahan api, PVC. Ketam pintu, penggantian engsel, pemasangan set kunci, pembaikan bingkai. Perkakasan keluli tahan karat SS304, penjajaran sekata, ujian hentam sebelum serahan.",
        warranty: "Jaminan Gantungan Pintu & Perkakasan 12 Bulan"
      },
      zh: {
        title: "门维修与安装",
        tagline: "实木、工程木、防火与防火板门——供应、安装、刨修、铰链与锁具安装。从 RM 250 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与维修各类室内外门。我们施工马来西亚各种常见门型：实木硬木（meranti、chengal、橡木）、HDF 贴面工程木门、平板防火板门、防火门（1 小时与 2 小时认证），以及厨卫用 PVC/金属门框。服务包括新门安装（含门框、门套、铰链与锁具）、刮地卡涩门的刨修、铰链更换、锁具安装、门框维修，以及厨卫 PVC 门整体更换。每次安装都包括规范调校、均匀缝隙（顶部和两侧 3–4mm，底部 5–8mm）以及交付前的关门测试。",
        highlights: [
          "实木、工程木、防火与防火板门专家",
          "门刨修与调校，解决刮地、卡涩或膨胀问题",
          "优质铰链（SS304 不锈钢）与锁具（Yale、Imperial、Hafele 或您自备）",
          "规范调校：顶/侧缝 3–4mm、底缝 5–8mm，开关顺滑",
          "带膨胀密封条的防火门安装，符合建筑法规",
          "每次更换项目均含旧门与门框拆除"
        ],
        subServices: [
          { name: "实木门安装", price: "从 RM 550 起", desc: "meranti 或 chengal 实木门，配 meranti 门框、3 个 SS304 铰链、门套与基础执手锁。" },
          { name: "防火板门安装", price: "从 RM 250 起", desc: "HDF 贴面工程门，防火板饰面光滑，适合经济型现代室内。" },
          { name: "门刨修与调校", price: "从 RM 120 起", desc: "刨修刮地或刮框的门，在现有铰链上重新挂门并调试锁具。" },
          { name: "防火门安装", price: "从 RM 950 起", desc: "1 小时或 2 小时认证防火门，配膨胀密封条，适合厨房、楼梯间或消防疏散通道。" },
          { name: "门扇更换", price: "依报价", desc: "在门框仍然稳固的情况下同规格更换门扇——供应新门、更换铰链、重装锁具并重新调匀缝隙。" },
          { name: "门框维修与更换", price: "依报价", desc: "修复腐朽、开裂或不方正的木门框；若旧框无法修复，则供应新的 meranti 或 PVC 门框及门套。" },
          { name: "厨卫 PVC 门更换", price: "依报价", desc: "适用于潮湿区域的防潮 PVC 或铝合金门与门框成套，按现有门洞定制并做好防溅防潮密封。" },
          { name: "推拉门与折叠门安装", price: "依报价", desc: "吊轨推拉门、隐藏式推拉门与折叠门成套，含轨道、地导与缓冲五金，适合卧室、衣帽间与书房。" },
          { name: "入户大门安装", price: "依报价", desc: "较重的入户门成套安装，配加固铰链、安全锁具开孔准备与防风雨门槛收口。" },
          { name: "闭门器与五金安装", price: "依报价", desc: "为现有门或新装门供应并安装闭门器、地弹簧、门吸、密封条与自动升降门底封。" }
        ],
        process: [
          { step: "01", title: "现场测量与选门", desc: "我们测量现有门洞（高、宽、框深），确认开门方向，并推荐合适的门型与尺寸。" },
          { step: "02", title: "门采购与交期", desc: "防火板门与工程门 3–7 天到货。实木门与定制防火门需 14–21 天。报价时我们提供确切交期。" },
          { step: "03", title: "旧门拆除", desc: "我们小心拆除旧门、铰链、锁具以及（如需要）门套。除非同时要求更换，门框保留。" },
          { step: "04", title: "新门安装", desc: "新门挂在不锈钢滚珠铰链上，缝隙调匀，锁具开槽安装。测试开关与锁舌是否顺滑。" },
          { step: "05", title: "门套与收尾", desc: "MDF 或实木门套斜角拼接安装、封边，待上漆。如需给门和门框刷漆可另行收费。" }
        ],
        faqs: [
          { q: "为什么我的门突然刮地？", a: "最常见的原因是湿度引起的膨胀——马来西亚热带湿度使木门吸潮膨胀，厨卫门尤其明显。其他原因包括铰链松动（门下垂）、房屋框架沉降或新铺的地面材料。我们判断原因后，或刨门、或用更长螺丝重挂铰链，膨胀严重则整门更换。" },
          { q: "可以保留现有门框只换门吗？", a: "大多数情况下可以。只要门框状况良好、方正且尺寸合适，我们就能在现有门框上挂新门。这样可省去换框费用，施工干扰也更小。我们测量现有门框，选配匹配的门（或将新门裁切到合适尺寸）。" },
          { q: "什么是防火门？我需要吗？", a: "防火门是经测试能在规定时间（通常 1 小时或 2 小时）内耐火的认证门与门框系统。马来西亚建筑法规要求部分公寓项目的厨房门、所有通往消防疏散楼梯的门以及特定商业场所安装防火门。我们供应并安装 Sanitor、Felicia 及本地认证厂商的防火门，配齐膨胀密封条与闭门器。" },
          { q: "实木门和防火板门该怎么选？", a: "实木门（meranti、chengal、橡木）更重、隔音更好、质感高级——还可多次打磨重漆。价格更高（RM 550 起）且对湿度敏感。防火板/工程门更轻、在马来西亚潮湿天气下尺寸更稳定、更易打理、价格更实惠（RM 250 起）。卧室与大门我们建议实木门；浴室、厨房与出租物业我们建议防火板门或 PVC 门。" }
        ],
        metaTitle: "吉隆坡与雪兰莪门维修与安装服务",
        metaDesc: "吉隆坡与雪兰莪门供应、安装、刨修与维修。实木、防火板、防火门。SS304 铰链、Yale/Hafele 锁具。每扇门从 RM250 起。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与维修各类门。实木、工程木、防火板、防火、PVC 门。门刨修、铰链更换、锁具安装、门框维修。SS304 不锈钢五金、缝隙均匀、交付前关门测试。",
        warranty: "12 个月门扇安装与五金保修"
      }
    }
  },

  // ── 20. WINDOW REPAIR ────────────────────────────────────────
  "window-repair": {
    slug: "window-repair",
    title: "Window Repair & Glass Replacement",
    tagline: "Casement, sliding, top-hung, awning windows — glass replacement, seal repair, handle replacement, and alignment. From RM 200.",
    description:
      "KL Servis Rumah repairs and replaces all types of residential and light-commercial windows across Kuala Lumpur and Selangor. We work on every common Malaysian window type: aluminium casement, sliding, top-hung (awning), and fixed glass panels. Common issues we resolve: cracked or shattered glass, broken or stiff handles and hinges, worn or hardened rubber seals causing water ingress, window frames out of alignment, missing or damaged grilles, and condensation between double-glazed units. We can also upgrade single-glazed windows to double-glazed for sound insulation, and replace old aluminium tracks with modern stainless or nylon rollers for smoother sliding. Emergency glass replacement is available same-day for landed houses, with a temporary board-up if custom glass is needed.",
    startPrice: "RM 200",
    icon: "square-stack",
    highlights: [
      "All window types: casement, sliding, top-hung, awning, fixed glass, louvre",
      "Cracked and shattered glass replacement with same-day emergency service for landed houses",
      "Worn seal replacement to stop water seepage and air-conditioning loss",
      "Stiff or broken handle, hinge, and roller repair or replacement",
      "Single to double-glazed upgrade for sound insulation in busy areas",
      "Frame alignment and track cleaning for smooth sliding operation"
    ],
    subServices: [
      { name: "Glass Replacement", price: "From RM 200", desc: "Removing broken or cracked glass and installing new clear, tinted, frosted, or tempered glass to the same size and thickness." },
      { name: "Window Seal Replacement", price: "From RM 30 / linier ft", desc: "Replacing worn or hardened EPDM rubber seals to stop water ingress and improve insulation." },
      { name: "Window Handle & Hinge Repair", price: "From RM 120", desc: "Replacing broken, stiff, or corroded handles, hinges, stays, and locking mechanisms on casement or top-hung windows." },
      { name: "Sliding Window Roller Replacement", price: "From RM 150", desc: "Replacing worn nylon or steel rollers and cleaning tracks for smooth sliding operation." },
      { name: "Window Installation", price: "On Quote", desc: "New aluminium casement, sliding, top-hung, or fixed windows measured and installed into an existing or newly formed opening." },
      { name: "Window Replacement", price: "On Quote", desc: "Removing an ageing window and frame in full and installing a new like-for-like or upgraded unit, with reinstatement around the opening." },
      { name: "Window Grille Installation", price: "On Quote", desc: "Supply and fitting of security grilles or child-safety grilles onto existing window frames, sized on site and finished against rust." },
      { name: "Window Frame Repair & Realignment", price: "On Quote", desc: "Straightening, re-anchoring, and resealing aluminium frames that have dropped out of square so sashes close and lock properly again." },
      { name: "Louvre & Top-Hung Window Repair", price: "On Quote", desc: "Replacing louvre blades, clips, stays, and operators on louvre and awning windows, including stiff or seized winding mechanisms." },
      { name: "Window Waterproofing & Resealing", price: "On Quote", desc: "Raking out failed perimeter silicone, cleaning the joint, and resealing frame-to-wall junctions to stop rain ingress in wind-driven storms." }
    ],
    process: [
      { step: "01", title: "Window Inspection", desc: "We identify the window type, frame material, glass thickness, hardware condition, and the exact issue (glass, seal, hardware, or alignment)." },
      { step: "02", title: "Transparent Quote", desc: "Itemized quote covering parts, labour, and any access equipment needed (e.g. for high windows). Glass lead times are confirmed upfront." },
      { step: "03", title: "Safe Glass Removal", desc: "We carefully remove broken or cracked glass, vacuum debris, and dispose of shards safely. The opening is sealed temporarily if custom glass is needed." },
      { step: "04", title: "Installation", desc: "New glass, seals, or hardware is installed with proper glazing tape, sealant, and adjustment. We test the window for smooth operation and weather-tight seal." },
      { step: "05", title: "Handover & Test", desc: "The window is opened, closed, locked, and tested for water tightness with a controlled spray. The work area is cleaned and old materials removed." }
    ],
    faqs: [
      { q: "Can you replace just the glass without changing the whole window?", a: "Yes, in most cases. As long as the frame is in good condition and the right size, we can install new glass in your existing frame. This is much cheaper than a full window replacement. We can also upgrade single glass to double-glazed for better sound and heat insulation, though this may require a frame change depending on the original thickness." },
      { q: "How do I know if my window needs new seals or new glass?", a: "Signs of failed seals: water seepage during rain, draughts when the window is closed, fog or condensation between glass panes (in double-glazed units), and visible cracking or peeling of the rubber. Signs of failed glass: obvious cracks, chips, scratches that impair visibility, or shattered panes. We can assess on-site and recommend the most cost-effective repair." },
      { q: "My sliding window is hard to open. Do I need a new window?", a: "Usually no. Most sliding windows become hard to operate because of worn rollers, debris in the track, or a slight frame misalignment. We can replace the rollers (RM 150 per window), clean and lubricate the track, and re-align the sash if needed. This typically restores smooth operation for a fraction of the cost of a new window." },
      { q: "Do you offer emergency same-day glass replacement?", a: "Yes, for landed houses. We carry common sizes (4mm and 5mm clear and tinted glass) in our van and can usually replace broken glass on the spot. For custom sizes, tempered glass, or double-glazed units, we board up the opening securely and return within 2–5 working days for the permanent installation." }
    ],
    heroImage: "/hero-window.svg",
    metaTitle: "Window Repair & Glass Replacement KL & Selangor",
    metaDesc: "Window glass replacement, seal repair, handle/hinge/roller replacement in KL & Selangor. Casement, sliding, top-hung, awning windows. From RM200. Same-day emergency.",
    aioSummary: "KL Servis Rumah repairs and replaces windows across KL & Selangor. Glass replacement, seal repair, handle/hinge/roller replacement, frame alignment, single-to-double upgrade. Casement, sliding, top-hung, awning, fixed glass. Same-day emergency glass replacement for landed houses.",
    warranty: "12-Month Hardware & Seal Warranty",
    i18n: {
      ms: {
        title: "Pembaikan Tingkap & Penggantian Kaca",
        tagline: "Tingkap casement, gelangsar, top-hung, awning — penggantian kaca, pembaikan pengedap, penggantian pemegang dan penjajaran. Dari RM 200.",
        description: "KL Servis Rumah membaiki dan menggantikan semua jenis tingkap kediaman dan komersial ringan di seluruh Kuala Lumpur dan Selangor. Kami bekerja pada setiap jenis tingkap Malaysia biasa: casement aluminium, gelangsar, top-hung (awning) dan panel kaca tetap. Isu biasa yang kami selesaikan: kaca retak atau pecah, pemegang dan engsel rosak atau keras, pengedap getah haus atau mengeras menyebabkan kemasukan air, bingkai tingkap tidak jajar, grilles hilang atau rosak, dan kondensasi antara unit dua lapisan. Kami juga boleh menaik taraf tingkap kaca tunggal kepada dua lapisan untuk penebat bunyi, dan menggantikan trek aluminium lama dengan roller keluli tahan karat atau nilon moden untuk gelongsor lebih lancar. Penggantian kaca kecemasan tersedia hari sama untuk rumah landed, dengan papan sementara jika kaca kustom diperlukan.",
        highlights: [
          "Semua jenis tingkap: casement, gelangsar, top-hung, awning, kaca tetap, louvre",
          "Penggantian kaca retak dan pecah dengan perkhidmatan kecemasan hari sama untuk rumah landed",
          "Penggantian pengedap haus untuk menghentikan resapan air dan kehilangan penghawa dingin",
          "Pembaikan atau penggantian pemegang, engsel dan roller keras atau rosak",
          "Naik taraf kaca tunggal ke dua lapisan untuk penebat bunyi di kawasan sibuk",
          "Penjajaran bingkai dan pembersihan trek untuk operasi gelongsor lancar"
        ],
        subServices: [
          { name: "Penggantian Kaca", price: "Dari RM 200", desc: "Menanggalkan kaca pecah atau retak dan memasang kaca jernih, tinted, frosted atau tempered baharu mengikut saiz dan ketebalan sama." },
          { name: "Penggantian Pengedap Tingkap", price: "Dari RM 30 / kaki linier", desc: "Menggantikan pengedap getah EPDM haus atau mengeras untuk menghentikan kemasukan air dan menambah baik penebatan." },
          { name: "Pembaikan Pemegang & Engsel Tingkap", price: "Dari RM 120", desc: "Menggantikan pemegang, engsel, stay dan mekanisme kunci rosak, keras atau berkarat pada tingkap casement atau top-hung." },
          { name: "Penggantian Roller Tingkap Gelangsar", price: "Dari RM 150", desc: "Menggantikan roller nilon atau keluli haus dan membersihkan trek untuk operasi gelongsor lancar." },
          { name: "Pemasangan Tingkap", price: "Atas Sebut Harga", desc: "Tingkap aluminium casement, gelangsar, top-hung atau tetap baharu yang diukur dan dipasang pada bukaan sedia ada atau bukaan yang baru dibentuk." },
          { name: "Penggantian Tingkap", price: "Atas Sebut Harga", desc: "Menanggalkan tingkap dan bingkai lama sepenuhnya serta memasang unit baharu setara atau dinaik taraf, termasuk pemulihan sekitar bukaan." },
          { name: "Pemasangan Grill Tingkap", price: "Atas Sebut Harga", desc: "Bekalan dan pemasangan grill keselamatan atau grill keselamatan kanak-kanak pada bingkai tingkap sedia ada, diukur di tapak dan dikemas kalis karat." },
          { name: "Pembaikan & Penjajaran Bingkai Tingkap", price: "Atas Sebut Harga", desc: "Meluruskan, menyauh semula dan mengedap semula bingkai aluminium yang tidak lagi segi empat supaya daun tingkap boleh ditutup dan dikunci dengan betul." },
          { name: "Pembaikan Tingkap Louvre & Top-Hung", price: "Atas Sebut Harga", desc: "Menggantikan bilah louvre, klip, stay dan operator pada tingkap louvre serta awning, termasuk mekanisme putar yang keras atau tersekat." },
          { name: "Kalis Air & Pengedapan Semula Tingkap", price: "Atas Sebut Harga", desc: "Mengorek silikon perimeter yang gagal, membersihkan sambungan dan mengedap semula pertemuan bingkai-dinding untuk menghentikan kemasukan air hujan berangin." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan Tingkap", desc: "Kami mengenal pasti jenis tingkap, bahan bingkai, ketebalan kaca, keadaan perkakasan dan isu tepat (kaca, pengedap, perkakasan atau penjajaran)." },
          { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci merangkumi alat ganti, buruh dan sebarang peralatan akses yang diperlukan (contohnya untuk tingkap tinggi). Masa tunggu kaca disahkan terlebih dahulu." },
          { step: "03", title: "Penyingkiran Kaca Selamat", desc: "Kami menanggalkan kaca pecah atau retak dengan rapi, vakum serpihan dan melupuskan pecahan dengan selamat. Bukaan dikedap sementara jika kaca kustom diperlukan." },
          { step: "04", title: "Pemasangan", desc: "Kaca, pengedap atau perkakasan baharu dipasang dengan pita glazing, pengedap dan pelarasan yang betul. Kami menguji tingkap untuk operasi lancar dan pengedapan tahan cuaca." },
          { step: "05", title: "Serahan & Ujian", desc: "Tingkap dibuka, ditutup, dikunci dan diuji ketahanan air dengan semburan terkawal. Kawasan kerja dibersihkan dan bahan lama disingkirkan." }
        ],
        faqs: [
          { q: "Boleh anda menggantikan kaca sahaja tanpa menukar seluruh tingkap?", a: "Ya, dalam kebanyakan kes. Selagi bingkai dalam keadaan baik dan saiz betul, kami boleh memasang kaca baharu dalam bingkai sedia ada anda. Ini jauh lebih murah daripada penggantian tingkap penuh. Kami juga boleh menaik taraf kaca tunggal kepada dua lapisan untuk penebatan bunyi dan haba lebih baik, walaupun ini mungkin memerlukan penukaran bingkai bergantung pada ketebalan asal." },
          { q: "Bagaimana saya tahu tingkap saya memerlukan pengedap baharu atau kaca baharu?", a: "Tanda pengedap gagal: resapan air semasa hujan, bahang angin apabila tingkap ditutup, kabus atau kondensasi antara lapisan kaca (dalam unit dua lapisan) dan retakan atau pengelupasan getah yang kelihatan. Tanda kaca gagal: retakan jelas, serpih, calar yang menjejaskan penglihatan atau panel pecah. Kami boleh menilai di tapak dan mengesyorkan pembaikan paling menjimatkan." },
          { q: "Tingkap gelangsar saya sukar dibuka. Perlu saya beli tingkap baharu?", a: "Biasanya tidak. Kebanyakan tingkap gelangsar menjadi sukar dikendalikan kerana roller haus, serpihan dalam trek atau sedikit ketidakjajaran bingkai. Kami boleh menggantikan roller (RM 150 setiap tingkap), membersihkan dan melincirkan trek, dan menjajarkan semula sash jika perlu. Ini biasanya memulihkan operasi lancar pada sebahagian kecil kos tingkap baharu." },
          { q: "Adakah anda menawarkan penggantian kaca kecemasan hari sama?", a: "Ya, untuk rumah landed. Kami membawa saiz biasa (kaca jernih dan tinted 4mm dan 5mm) dalam van kami dan biasanya boleh menggantikan kaca pecah di tempat kejadian. Untuk saiz kustom, kaca tempered atau unit dua lapisan, kami menutup bukaan dengan papan dengan selamat dan kembali dalam 2–5 hari bekerja untuk pemasangan kekal." }
        ],
        metaTitle: "Pembaikan Tingkap & Penggantian Kaca KL & Selangor",
        metaDesc: "Penggantian kaca tingkap, pembaikan pengedap, penggantian pemegang/engsel/roller di KL & Selangor. Tingkap casement, gelangsar, top-hung, awning. Dari RM200. Kecemasan hari sama.",
        aioSummary: "KL Servis Rumah membaiki dan menggantikan tingkap di seluruh KL & Selangor. Penggantian kaca, pembaikan pengedap, penggantian pemegang/engsel/roller, penjajaran bingkai, naik taraf tunggal-ke-ganda. Casement, gelangsar, top-hung, awning, kaca tetap. Penggantian kaca kecemasan hari sama untuk rumah landed.",
        warranty: "Jaminan Perkakasan & Pengedap 12 Bulan"
      },
      zh: {
        title: "窗户维修与玻璃更换",
        tagline: "平开窗、推拉窗、上悬窗、外开下悬窗——玻璃更换、密封条维修、执手更换与调校。从 RM 200 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪维修与更换各类住宅及轻型商业窗户。我们施工马来西亚各种常见窗型：铝合金平开窗、推拉窗、上悬（外开下悬）窗与固定玻璃面板。我们解决的常见问题：玻璃开裂或碎裂、执手铰链损坏或卡涩、橡胶密封条老化变硬导致渗水、窗框错位、防护格栅缺失或损坏，以及中空玻璃内部结雾。我们还可以将单层玻璃升级为中空玻璃以提升隔音，并将旧铝合金轨道更换为现代不锈钢或尼龙滑轮，推拉更顺滑。有地住宅提供当日紧急玻璃更换，定制玻璃期间可临时封板。",
        highlights: [
          "所有窗型：平开、推拉、上悬、外开下悬、固定玻璃、百叶",
          "玻璃开裂碎裂更换，有地住宅当日紧急服务",
          "更换老化密封条，阻止渗水与冷气流失",
          "维修或更换卡涩、损坏的执手、铰链与滑轮",
          "单层升级中空玻璃，提升繁忙路段的隔音",
          "窗框调校与轨道清洁，推拉恢复顺滑"
        ],
        subServices: [
          { name: "玻璃更换", price: "从 RM 200 起", desc: "拆除碎裂或开裂玻璃，安装相同尺寸厚度的新白玻、茶色玻、磨砂玻或钢化玻璃。" },
          { name: "窗户密封条更换", price: "从 RM 30 / 延英尺起", desc: "更换老化变硬的 EPDM 橡胶密封条，阻止渗水并改善保温。" },
          { name: "窗户执手与铰链维修", price: "从 RM 120 起", desc: "更换平开窗或上悬窗上损坏、卡涩或腐蚀的执手、铰链、撑挡与锁闭机构。" },
          { name: "推拉窗滑轮更换", price: "从 RM 150 起", desc: "更换磨损的尼龙或钢滑轮并清洁轨道，恢复顺滑推拉。" },
          { name: "窗户安装", price: "依报价", desc: "全新铝合金平开窗、推拉窗、上悬窗或固定窗，按现有洞口或新开洞口测量并安装。" },
          { name: "窗户更换", price: "依报价", desc: "整体拆除老旧窗扇与窗框，安装同规格或升级款新窗，并修复洞口周边收口。" },
          { name: "窗户防盗网安装", price: "依报价", desc: "在现有窗框上供应并安装防盗格栅或儿童防坠格栅，现场量尺并做防锈处理。" },
          { name: "窗框维修与校正", price: "依报价", desc: "对变形不方正的铝框进行校直、重新固定与打胶，使窗扇重新正常关闭与锁闭。" },
          { name: "百叶窗与上悬窗维修", price: "依报价", desc: "更换百叶窗与上悬窗的叶片、卡扣、撑挡与摇启器，包括卡涩或锁死的摇柄机构。" },
          { name: "窗户防水与重新打胶", price: "依报价", desc: "铲除失效的周边硅胶、清洁缝隙并重新密封窗框与墙体交界，阻止风雨天渗水。" }
        ],
        process: [
          { step: "01", title: "窗户检查", desc: "我们确认窗型、框料、玻璃厚度、五金状况与确切问题（玻璃、密封、五金或错位）。" },
          { step: "02", title: "透明报价", desc: "逐项报价涵盖配件、人工与任何所需的高空作业设备（如高位窗户）。玻璃交期提前确认。" },
          { step: "03", title: "安全拆玻璃", desc: "我们小心拆除碎裂或开裂玻璃，吸净碎屑并安全处理。如需定制玻璃，先临时封堵窗口。" },
          { step: "04", title: "安装", desc: "使用规范的压条胶带、密封胶与调校安装新玻璃、密封条或五金。我们测试窗户开关顺滑与气密防水。" },
          { step: "05", title: "交付与测试", desc: "窗户反复开合、上锁，并以受控喷水测试防水性。清理工作区并清运旧料。" }
        ],
        faqs: [
          { q: "可以只换玻璃不换整扇窗吗？", a: "大多数情况下可以。只要窗框状况良好、尺寸合适，我们就能在现有窗框内安装新玻璃，这比整窗更换便宜得多。我们还可以将单层玻璃升级为中空玻璃以获得更好的隔音隔热，不过视原始厚度可能需要换框。" },
          { q: "怎么判断窗户需要换密封条还是换玻璃？", a: "密封条失效的迹象：下雨渗水、关窗后有穿堂风、玻璃夹层间起雾结露（中空玻璃）、橡胶明显开裂或剥落。玻璃失效的迹象：明显裂纹、崩边、影响视线的划痕或整片碎裂。我们可以现场评估，推荐最省钱的维修方案。" },
          { q: "我的推拉窗很难推开，需要换新窗吗？", a: "通常不需要。大多数推拉窗变涩是因为滑轮磨损、轨道积灰或窗框轻微错位。我们可以更换滑轮（每扇窗 RM 150）、清洁润滑轨道，必要时调整窗扇。通常只需新窗零头的价格就能恢复顺滑。" },
          { q: "你们提供当日紧急玻璃更换吗？", a: "有地住宅提供。我们的服务车常备常用规格（4mm 和 5mm 白玻与茶色玻），通常可当场更换碎玻璃。定制尺寸、钢化玻璃或中空玻璃，我们会先安全封板，2–5 个工作日内回来正式安装。" }
        ],
        metaTitle: "吉隆坡与雪兰莪窗户维修与玻璃更换",
        metaDesc: "吉隆坡与雪兰莪窗玻璃更换、密封条维修、执手/铰链/滑轮更换。平开窗、推拉窗、上悬窗、外开下悬窗。从 RM200 起。当日紧急服务。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪维修与更换窗户。玻璃更换、密封条维修、执手/铰链/滑轮更换、窗框调校、单层升级中空。平开窗、推拉窗、上悬窗、外开下悬窗、固定玻璃。有地住宅当日紧急玻璃更换。",
        warranty: "12 个月五金与密封保修"
      }
    }
  },

  // ── 21. LOCKSMITH ────────────────────────────────────────
  "locksmith": {
    slug: "locksmith",
    title: "Locksmith & Smart Lock Services",
    tagline: "Digital smart locks, key cutting, lock replacement, door reinforcement, and emergency lockout service. From RM 180.",
    description:
      "KL Servis Rumah provides residential and light-commercial locksmith services across Kuala Lumpur and Selangor. We supply, install, and repair every type of lock: traditional mortice locks, deadbolts, knob locks, digital keypad locks, RFID card locks, Bluetooth smart locks, Wi-Fi smart locks with app control, and biometric fingerprint locks. Popular Malaysian smart lock brands we work with: **Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, and Philips**. Beyond lock installation, we cut keys, re-key locks to a new key (so old keys stop working), open locked doors for emergency lockouts (with proof of ownership), and reinforce door frames with longer screws and strike plates for forced-entry resistance. All work is documented with serial numbers and warranty cards.",
    startPrice: "RM 180",
    icon: "key",
    highlights: [
      "Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, Philips smart lock specialists",
      "Key cutting, re-keying, and emergency lockout service for landed houses and condos",
      "Door frame reinforcement with 3-inch security screws and reinforced strike plates",
      "Smart lock app pairing and user/fingerprint registration included in every install",
      "Free on-site security consultation with photos of vulnerable entry points",
      "All work documented with serial numbers and warranty cards for insurance records"
    ],
    subServices: [
      { name: "Smart Lock Installation", price: "From RM 420", desc: "Supply and install digital keypad, Bluetooth, Wi-Fi, or biometric fingerprint lock with app pairing and user registration." },
      { name: "Mortice / Deadbolt Lock Replacement", price: "From RM 220", desc: "Remove existing mortice or deadbolt lock and install a new Yale, Imperial, or Hafele lock with 3 keys." },
      { name: "Key Cutting & Re-Keying", price: "From RM 30", desc: "Cutting new keys to existing locks, or re-keying the lock to a new key so old keys stop working (ideal after moving in or lost key)." },
      { name: "Emergency Lockout (Landed House)", price: "From RM 180", desc: "Non-destructive entry to your home or room during lockout, with proof of ownership. Available same-day within KL & Selangor." }
    ],
    process: [
      { step: "01", title: "Lock Assessment & Recommendation", desc: "We assess your current lock, door material (solid wood, hollow core, metal), and security needs. We recommend the right lock type and brand within your budget." },
      { step: "02", title: "Transparent Quote", desc: "Itemized quote covering the lock, accessories, installation labour, and any door modifications needed for the new lock to fit properly." },
      { step: "03", title: "Old Lock Removal", desc: "The old lock is removed, the door is cleaned and prepped, and any damage from the previous lock is repaired." },
      { step: "04", title: "New Lock Installation", desc: "The new lock is fitted, aligned, and tested. For smart locks, we pair the app, register fingerprints/pins, and configure user access levels." },
      { step: "05", title: "Security Brief & Handover", desc: "We provide a brief on how to use and maintain the lock, register your warranty, and hand over the serial number and warranty card for your insurance." }
    ],
    faqs: [
      { q: "Which smart lock brand is best for Malaysian condos and landed houses?", a: "For landed houses, we recommend Yale YDM series, Igloohome Smart Mortise, or Samsung SHP — all reliable, weather-resistant, and easy to manage via app. For condos, the popular choices are Solity and Hafele because they fit standard Malaysian condo door cutouts without major modification. We can advise on the best fit for your specific door during the on-site consultation." },
      { q: "Can I keep my existing lock and just cut new keys?", a: "Yes, in most cases. As long as the lock cylinder is in good condition, we can cut new keys directly from the lock. If you have moved into a new home and want all old keys to stop working, we can also re-key the lock to a new key without replacing the whole lock — much cheaper than a full lock replacement." },
      { q: "What if I'm locked out of my house?", a: "Call our emergency line. For landed houses we offer same-day non-destructive lockout service within KL & Selangor (subject to technician availability). We will require proof of ownership (IC, utility bill, or photo ID matching the address) before opening the door. For condos, the management office usually has a master key — we can also coordinate with them." },
      { q: "How long does smart lock installation take?", a: "A standard replacement on an existing door with matching cutout takes 30 to 60 minutes. A new installation that requires drilling a new mortise pocket in the door takes 1.5 to 2 hours. We always do a full operation test, app pairing, and user registration before handover." }
    ],
    heroImage: "/hero-locksmith.svg",
    metaTitle: "Locksmith & Smart Lock Installation KL & Selangor",
    metaDesc: "Smart lock, digital lock, mortice lock, deadbolt installation in KL & Selangor. Samsung, Yale, Igloohome, Solity, Hafele, Philips. From RM180. Emergency lockout.",
    aioSummary: "KL Servis Rumah supplies, installs, and repairs locks across KL & Selangor. Smart locks (Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, Philips), mortice, deadbolt, knob locks. Key cutting, re-keying, emergency lockout, door reinforcement. App pairing, fingerprint registration, warranty documentation.",
    warranty: "12-Month Lock Installation & Hardware Warranty",
    i18n: {
      ms: {
        title: "Perkhidmatan Tukang Kunci & Kunci Pintar",
        tagline: "Kunci pintar digital, pemotongan kunci, penggantian kunci, pengukuhan pintu dan perkhidmatan kecemasan terkunci. Dari RM 180.",
        description: "KL Servis Rumah menyediakan perkhidmatan tukang kunci kediaman dan komersial ringan di seluruh Kuala Lumpur dan Selangor. Kami membekalkan, memasang dan membaiki setiap jenis kunci: kunci mortice tradisional, deadbolt, kunci tombol, kunci pad kekunci digital, kunci kad RFID, kunci pintar Bluetooth, kunci pintar Wi-Fi dengan kawalan aplikasi dan kunci cap jari biometrik. Jenama kunci pintar Malaysia popular yang kami kerjakan: **Samsung, Yale, Igloohome, Solity, Hafele, Kaiser dan Philips**. Selain pemasangan kunci, kami memotong kunci, re-key kunci kepada kunci baharu (supaya kunci lama tidak berfungsi lagi), membuka pintu terkunci untuk kecemasan terkunci (dengan bukti pemilikan) dan mengukuhkan bingkai pintu dengan skru lebih panjang dan plat strike untuk rintangan pecah masuk. Semua kerja didokumentasikan dengan nombor siri dan kad jaminan.",
        highlights: [
          "Pakar kunci pintar Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, Philips",
          "Pemotongan kunci, re-key dan perkhidmatan kecemasan terkunci untuk rumah landed dan kondominium",
          "Pengukuhan bingkai pintu dengan skru keselamatan 3 inci dan plat strike diperkuat",
          "Pemasangan aplikasi kunci pintar dan pendaftaran pengguna/cap jari termasuk dalam setiap pemasangan",
          "Konsultasi keselamatan di tapak percuma dengan foto titik masuk terdedah",
          "Semua kerja didokumentasikan dengan nombor siri dan kad jaminan untuk rekod insurans"
        ],
        subServices: [
          { name: "Pemasangan Kunci Pintar", price: "Dari RM 420", desc: "Bekalan dan pemasangan kunci pad kekunci digital, Bluetooth, Wi-Fi atau cap jari biometrik dengan pemasangan aplikasi dan pendaftaran pengguna." },
          { name: "Penggantian Kunci Mortice / Deadbolt", price: "Dari RM 220", desc: "Menanggalkan kunci mortice atau deadbolt sedia ada dan memasang kunci Yale, Imperial atau Hafele baharu dengan 3 kunci." },
          { name: "Pemotongan Kunci & Re-Key", price: "Dari RM 30", desc: "Memotong kunci baharu untuk kunci sedia ada, atau re-key kunci kepada kunci baharu supaya kunci lama tidak berfungsi (sesuai selepas berpindah atau kehilangan kunci)." },
          { name: "Kecemasan Terkunci (Rumah Landed)", price: "Dari RM 180", desc: "Kemasukan tanpa merosakkan ke rumah atau bilik anda semasa terkunci, dengan bukti pemilikan. Tersedia hari sama dalam KL & Selangor." }
        ],
        process: [
          { step: "01", title: "Penilaian Kunci & Cadangan", desc: "Kami menilai kunci semasa, bahan pintu (kayu pepejal, teras berongga, logam) dan keperluan keselamatan anda. Kami mengesyorkan jenis dan jenama kunci yang betul mengikut bajet anda." },
          { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci merangkumi kunci, aksesori, buruh pemasangan dan sebarang pengubahsuaian pintu yang diperlukan supaya kunci baharu muat dengan betul." },
          { step: "03", title: "Penyingkiran Kunci Lama", desc: "Kunci lama ditanggalkan, pintu dibersihkan dan disediakan, dan sebarang kerosakan daripada kunci sebelumnya dibaiki." },
          { step: "04", title: "Pemasangan Kunci Baharu", desc: "Kunci baharu dipasang, dijajarkan dan diuji. Untuk kunci pintar, kami memasangkan aplikasi, mendaftarkan cap jari/pin dan mengkonfigurasi tahap akses pengguna." },
          { step: "05", title: "Taklimat Keselamatan & Serahan", desc: "Kami memberikan taklimat cara menggunakan dan menyelenggara kunci, mendaftarkan jaminan anda dan menyerahkan nombor siri serta kad jaminan untuk insurans anda." }
        ],
        faqs: [
          { q: "Jenama kunci pintar manakah yang terbaik untuk kondominium dan rumah landed Malaysia?", a: "Untuk rumah landed, kami mengesyorkan siri Yale YDM, Igloohome Smart Mortise atau Samsung SHP — semuanya boleh dipercayai, tahan cuaca dan mudah diurus melalui aplikasi. Untuk kondominium, pilihan popular ialah Solity dan Hafele kerana ia muat pada potongan pintu kondominium Malaysia standard tanpa pengubahsuaian besar. Kami boleh memberi nasihat tentang kesesuaian terbaik untuk pintu khusus anda semasa konsultasi di tapak." },
          { q: "Boleh saya kekalkan kunci sedia ada dan hanya potong kunci baharu?", a: "Ya, dalam kebanyakan kes. Selagi silinder kunci dalam keadaan baik, kami boleh memotong kunci baharu terus daripada kunci. Jika anda telah berpindah ke rumah baharu dan mahu semua kunci lama tidak berfungsi, kami juga boleh re-key kunci kepada kunci baharu tanpa menggantikan seluruh kunci — jauh lebih murah daripada penggantian kunci penuh." },
          { q: "Bagaimana jika saya terkunci di luar rumah?", a: "Hubungi talian kecemasan kami. Untuk rumah landed kami menawarkan perkhidmatan terkunci tanpa merosakkan hari sama dalam KL & Selangor (tertakluk pada ketersediaan juruteknik). Kami memerlukan bukti pemilikan (IC, bil utiliti atau ID bergambar yang sepadan dengan alamat) sebelum membuka pintu. Untuk kondominium, pejabat pengurusan biasanya mempunyai kunci master — kami juga boleh menyelaras dengan mereka." },
          { q: "Berapa lama pemasangan kunci pintar mengambil masa?", a: "Penggantian standard pada pintu sedia ada dengan potongan sepadan mengambil 30 hingga 60 minit. Pemasangan baharu yang memerlukan gerudi poket mortise baharu pada pintu mengambil 1.5 hingga 2 jam. Kami sentiasa menjalankan ujian operasi penuh, pemasangan aplikasi dan pendaftaran pengguna sebelum serahan." }
        ],
        metaTitle: "Tukang Kunci & Pemasangan Kunci Pintar KL & Selangor",
        metaDesc: "Kunci pintar, kunci digital, kunci mortice, pemasangan deadbolt di KL & Selangor. Samsung, Yale, Igloohome, Solity, Hafele, Philips. Dari RM180. Kecemasan terkunci.",
        aioSummary: "KL Servis Rumah membekalkan, memasang dan membaiki kunci di seluruh KL & Selangor. Kunci pintar (Samsung, Yale, Igloohome, Solity, Hafele, Kaiser, Philips), mortice, deadbolt, kunci tombol. Pemotongan kunci, re-key, kecemasan terkunci, pengukuhan pintu. Pemasangan aplikasi, pendaftaran cap jari, dokumentasi jaminan.",
        warranty: "Jaminan Pemasangan Kunci & Perkakasan 12 Bulan"
      },
      zh: {
        title: "锁匠与智能锁服务",
        tagline: "数字智能锁、配钥匙、换锁、门体加固与紧急开锁服务。从 RM 180 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供住宅与轻型商业锁匠服务。我们供应、安装与维修各种锁具：传统执手锁、呆锁、球形锁、数字密码锁、RFID 卡锁、蓝牙智能锁、App 控制的 Wi-Fi 智能锁以及生物指纹锁。我们常用的马来西亚热门智能锁品牌：**Samsung、Yale、Igloohome、Solity、Hafele、Kaiser 与 Philips**。除装锁外，我们还配钥匙、换锁芯改钥匙（旧钥匙随之失效）、为紧急被锁门外的情况无损开门（需所有权证明），并用加长螺丝与加强锁扣板加固门框以抵御暴力闯入。所有工作都以序列号与保修卡记录在案。",
        highlights: [
          "Samsung、Yale、Igloohome、Solity、Hafele、Kaiser、Philips 智能锁专家",
          "有地住宅与公寓的配钥匙、换锁芯与紧急开锁服务",
          "门框加固：3 英寸防撬螺丝与加强锁扣板",
          "每次安装均含智能锁 App 配对与用户/指纹录入",
          "免费现场安全评估，拍摄薄弱入口点照片",
          "所有工作以序列号与保修卡记录，便于保险存档"
        ],
        subServices: [
          { name: "智能锁安装", price: "从 RM 420 起", desc: "供应并安装数字密码、蓝牙、Wi-Fi 或生物指纹锁，含 App 配对与用户录入。" },
          { name: "执手锁 / 呆锁更换", price: "从 RM 220 起", desc: "拆除现有执手锁或呆锁，安装带 3 把钥匙的新 Yale、Imperial 或 Hafele 锁。" },
          { name: "配钥匙与换锁芯", price: "从 RM 30 起", desc: "为现有锁配新钥匙，或换锁芯改用新钥匙使旧钥匙失效（适合搬新家或丢钥匙后）。" },
          { name: "紧急开锁（有地住宅）", price: "从 RM 180 起", desc: "被锁门外时无损开启您的家门或房门，需提供所有权证明。吉隆坡与雪兰莪当日可达。" }
        ],
        process: [
          { step: "01", title: "锁具评估与推荐", desc: "我们评估现有锁具、门材质（实木、空心、金属）与您的安全需求，按预算推荐合适的锁型与品牌。" },
          { step: "02", title: "透明报价", desc: "逐项报价涵盖锁具、配件、安装人工以及新锁就位所需的任何门体改动。" },
          { step: "03", title: "旧锁拆除", desc: "拆除旧锁，清洁整理门面，并修补旧锁造成的任何损伤。" },
          { step: "04", title: "新锁安装", desc: "安装、调正并测试新锁。智能锁则配对 App、录入指纹/密码，并配置用户权限等级。" },
          { step: "05", title: "安全讲解与交付", desc: "我们讲解使用与保养方法，注册保修，并移交序列号与保修卡供您投保。" }
        ],
        faqs: [
          { q: "马来西亚公寓和有地住宅最适合哪个智能锁品牌？", a: "有地住宅我们推荐 Yale YDM 系列、Igloohome Smart Mortise 或 Samsung SHP——均可靠耐用、耐候性好、App 管理方便。公寓的热门选择是 Solity 和 Hafele，因为它们无需大改即可适配马来西亚公寓标准门开孔。现场咨询时我们可以针对您的具体门给出最佳建议。" },
          { q: "可以保留现有锁只配新钥匙吗？", a: "大多数情况下可以。只要锁芯状况良好，我们就能直接照锁配新钥匙。如果您刚搬新家想让所有旧钥匙失效，也可以换锁芯改用新钥匙而无需整锁更换——比全换锁便宜得多。" },
          { q: "被锁在门外怎么办？", a: "拨打我们的紧急热线。有地住宅我们提供吉隆坡与雪兰莪当日无损开锁服务（视技工档期）。开门前我们需要所有权证明（身份证、水电账单或与地址一致的带照片证件）。公寓方面，管理处通常有万能钥匙——我们也可以与他们协调。" },
          { q: "安装智能锁要多久？", a: "在开孔匹配的现有门上标准更换需要 30 到 60 分钟。需要在门上开新锁体槽的全新安装需 1.5 到 2 小时。交付前我们总是做完整功能测试、App 配对与用户录入。" }
        ],
        metaTitle: "吉隆坡与雪兰莪锁匠与智能锁安装",
        metaDesc: "吉隆坡与雪兰莪智能锁、数字锁、执手锁、呆锁安装。Samsung、Yale、Igloohome、Solity、Hafele、Philips。从 RM180 起。紧急开锁。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与维修锁具。智能锁（Samsung、Yale、Igloohome、Solity、Hafele、Kaiser、Philips）、执手锁、呆锁、球形锁。配钥匙、换锁芯、紧急开锁、门体加固。App 配对、指纹录入、保修登记。",
        warranty: "12 个月锁具安装与五金保修"
      }
    }
  },

  // ── 22. GLASS & ALUMINIUM ────────────────────────────────────────
  "glass-aluminium": {
    slug: "glass-aluminium",
    title: "Glass & Aluminium Fabrication",
    tagline: "Shower screens, glass partitions, aluminium windows, sliding doors, and mirror installation across KL & Selangor. From RM 320.",
    description:
      "KL Servis Rumah provides custom glass and aluminium fabrication and installation across Kuala Lumpur and Selangor. We work on residential and light-commercial projects: frameless and framed shower screens, glass office partitions, sliding glass doors, swing glass doors, aluminium casement and sliding windows, top-hung awning windows, louvre windows, and decorative mirrors. We use tempered or laminated safety glass from Malaysian certified glass manufacturers (Malaysian Sheet Glass, TechnoGlas, Xinyi Glass), with aluminium frames from leading local extruders (Akasia, Hua Ho, YKK AP, or custom powder-coated profiles). Every shower screen installation includes waterproofing review, proper drip-edge design, and 12-month leak-free warranty on the seals.",
    startPrice: "RM 320",
    icon: "panel-top",
    highlights: [
      "Tempered and laminated safety glass from MS-certified Malaysian manufacturers",
      "Aluminium frames from Akasia, Hua Ho, YKK AP, or custom powder-coated profiles",
      "Frameless and framed shower screens with anti-leak drip-edge design",
      "Glass office partitions for home offices, meeting rooms, and shop fitting",
      "Aluminium sliding and casement windows fabricated to size on site",
      "Wall mirrors, dressing mirrors, and gym mirrors with concealed fixings"
    ],
    subServices: [
      { name: "Frameless Shower Screen", price: "From RM 420 / panel", desc: "10–12mm tempered glass with concealed hinges and anti-leak seals. Custom cut to your bathroom layout." },
      { name: "Aluminium Sliding Window", price: "From RM 320 / sq ft", desc: "Locally fabricated aluminium sliding window with 5mm clear or tinted glass, nylon rollers, and weatherstrip." },
      { name: "Glass Office Partition", price: "From RM 220 / sq ft", desc: "10–12mm tempered glass partition with aluminium or frameless channel, including door and hardware." },
      { name: "Wall Mirror Installation", price: "From RM 320", desc: "5–6mm silver-backed mirror with concealed aluminium channel fixings, suitable for bathrooms, gyms, and dressing rooms." },
      { name: "Glass Partition", price: "On Quote", desc: "Full-height or half-height tempered glass partitions for homes and shoplots, with aluminium U-channel or frameless fixing and optional frosted film." },
      { name: "Sliding Glass Door", price: "On Quote", desc: "Aluminium-framed or frameless sliding glass door sets with tempered glass, quality rollers, and weatherstrip for patios, balconies, and dividers." },
      { name: "Aluminium Casement Window", price: "On Quote", desc: "Side-hung aluminium casement windows fabricated to opening size, with friction stays, multipoint locking, and clear or tinted glass." },
      { name: "Glass Railing & Balustrade", price: "On Quote", desc: "Tempered or laminated glass railings for staircases, balconies, and mezzanines with stainless spigots, standoffs, or channel fixing." },
      { name: "Aluminium Composite Panel Cladding", price: "On Quote", desc: "ACP cladding for facades, shopfronts, and feature walls with routed folds, aluminium framing, and weatherproof joint sealing." },
      { name: "Glass Repair & Reglazing", price: "On Quote", desc: "Replacing cracked or shattered panes in existing frames, doors, and partitions, with temporary board-up when custom glass is on order." }
    ],
    process: [
      { step: "01", title: "Site Measurement & Design", desc: "We measure the opening, capture layout constraints (slopes, plumbing, drainage), and recommend the right glass thickness, frame, and hardware." },
      { step: "02", title: "Quotation & Lead Time", desc: "Tempered glass typically takes 5–7 working days for fabrication. Aluminium frames are 3–5 days. You receive an itemized quote with both." },
      { step: "03", title: "Fabrication", desc: "Glass is cut, tempered (heat-strengthened for safety), and edge-polished at the factory. Aluminium frames are cut, mitred, and powder-coated to your colour choice." },
      { step: "04", title: "On-Site Installation", desc: "Frames are anchored with stainless or zinc-plated fixings, glass is seated on setting blocks with structural silicone, and hardware is installed." },
      { step: "05", title: "Sealing & Water Test", desc: "For shower screens, we run a 24-hour water test to confirm the seal is leak-free. All seals and hardware are aligned and tested for smooth operation." }
    ],
    faqs: [
      { q: "What glass thickness should I choose for a shower screen?", a: "For a single fixed panel up to 1.5m wide, 10mm tempered glass is sufficient. For frameless doors or larger panels above 1.5m wide, we recommend 12mm tempered. For bathroom sliders or framed designs, 8mm is acceptable. We always use tempered or laminated safety glass that breaks into small safe granules rather than dangerous shards — never ordinary annealed glass in wet areas." },
      { q: "Can my existing shower screen be re-sealed instead of replaced?", a: "Yes, in many cases. If the glass and frame are in good condition but the silicone seal has gone black, mouldy, or detached, we can remove the old silicone, clean the surface, and apply fresh mould-resistant sanitary-grade silicone. This typically costs 30–50% of a full replacement and extends the screen life by 3–5 years." },
      { q: "Do you handle office glass partitions for commercial fit-outs?", a: "Yes. We install full-height glass partitions for offices, meeting rooms, and shop floors using 10–12mm tempered glass with aluminium or frameless U-channel systems. We can also integrate glass doors (swing or sliding), frosted/etched film for privacy, and acoustic laminated glass for meeting rooms. Our team is experienced with managed building compliance and lift protection for high-rise installations." },
      { q: "What is the difference between clear, tinted, frosted, and reflective glass?", a: "Clear glass is the standard transparent option. Tinted (grey, bronze, green) reduces solar heat gain by 30–40% and is common for west-facing windows. Frosted (acid-etched or sandblasted) is opaque for privacy while still transmitting light. Reflective glass has a metallic coating that reflects heat and provides one-way privacy during the day. We can show you physical samples and discuss the right choice for your specific use case." }
    ],
    heroImage: "/hero-glass-aluminium.svg",
    metaTitle: "Glass & Aluminium Fabrication KL & Selangor",
    metaDesc: "Shower screens, glass partitions, aluminium windows in KL & Selangor. Tempered glass, Akasia/Hua Ho frames, custom fabrication. From RM320. 12-month leak warranty.",
    aioSummary: "KL Servis Rumah fabricates and installs glass and aluminium products across KL & Selangor. Frameless and framed shower screens, glass office partitions, aluminium windows, sliding glass doors, wall mirrors. Tempered safety glass from MS-certified manufacturers. Akasia, Hua Ho, YKK AP frames.",
    warranty: "12-Month Leak-Free & Hardware Warranty",
    i18n: {
      ms: {
        title: "Fabrikasi Kaca & Aluminium",
        tagline: "Skrin pancuran, partition kaca, tingkap aluminium, pintu gelangsar dan pemasangan cermin di seluruh KL & Selangor. Dari RM 320.",
        description: "KL Servis Rumah menyediakan fabrikasi dan pemasangan kaca dan aluminium kustom di seluruh Kuala Lumpur dan Selangor. Kami bekerja pada projek kediaman dan komersial ringan: skrin pancuran tanpa bingkai dan berbingkai, partition pejabat kaca, pintu kaca gelangsar, pintu kaca hayun, tingkap aluminium casement dan gelangsar, tingkap awning top-hung, tingkap louvre dan cermin hiasan. Kami menggunakan kaca keselamatan tempered atau laminated daripada pengeluar kaca bertauliah Malaysia (Malaysian Sheet Glass, TechnoGlas, Xinyi Glass), dengan bingkai aluminium daripada penyemperit tempatan terkemuka (Akasia, Hua Ho, YKK AP atau profil powder-coated kustom). Setiap pemasangan skrin pancuran termasuk semakan kalis air, reka bentuk drip-edge yang betul dan jaminan bebas bocor 12 bulan pada pengedap.",
        highlights: [
          "Kaca keselamatan tempered dan laminated daripada pengeluar Malaysia bertauliah MS",
          "Bingkai aluminium daripada Akasia, Hua Ho, YKK AP atau profil powder-coated kustom",
          "Skrin pancuran tanpa bingkai dan berbingkai dengan reka bentuk drip-edge anti-bocor",
          "Partition pejabat kaca untuk pejabat rumah, bilik mesyuarat dan pemasangan kedai",
          "Tingkap gelangsar dan casement aluminium difabrikasi mengikut saiz di tapak",
          "Cermin dinding, cermin pakaian dan cermin gim dengan pengikat tersembunyi"
        ],
        subServices: [
          { name: "Skrin Pancuran Tanpa Bingkai", price: "Dari RM 420 / panel", desc: "Kaca tempered 10–12mm dengan engsel tersembunyi dan pengedap anti-bocor. Potongan kustom mengikut susun atur bilik mandi anda." },
          { name: "Tingkap Gelangsar Aluminium", price: "Dari RM 320 / kaki persegi", desc: "Tingkap gelangsar aluminium fabrikasi tempatan dengan kaca jernih atau tinted 5mm, roller nilon dan weatherstrip." },
          { name: "Partition Pejabat Kaca", price: "Dari RM 220 / kaki persegi", desc: "Partition kaca tempered 10–12mm dengan saluran aluminium atau tanpa bingkai, termasuk pintu dan perkakasan." },
          { name: "Pemasangan Cermin Dinding", price: "Dari RM 320", desc: "Cermin silver-backed 5–6mm dengan pengikat saluran aluminium tersembunyi, sesuai untuk bilik mandi, gim dan bilik persalinan." },
          { name: "Partition Kaca", price: "Atas Sebut Harga", desc: "Partition kaca tempered ketinggian penuh atau separuh untuk rumah dan kedai, dengan saluran-U aluminium atau pemasangan tanpa bingkai serta pilihan filem frosted." },
          { name: "Pintu Kaca Gelangsar", price: "Atas Sebut Harga", desc: "Set pintu kaca gelangsar berbingkai aluminium atau tanpa bingkai dengan kaca tempered, roller berkualiti dan weatherstrip untuk patio, balkoni dan pembahagi ruang." },
          { name: "Tingkap Casement Aluminium", price: "Atas Sebut Harga", desc: "Tingkap casement aluminium bukaan sisi difabrikasi mengikut saiz bukaan, dengan friction stay, kunci multipoint dan kaca jernih atau tinted." },
          { name: "Railing & Balustrade Kaca", price: "Atas Sebut Harga", desc: "Railing kaca tempered atau laminated untuk tangga, balkoni dan mezanin dengan spigot keluli tahan karat, standoff atau pemasangan saluran." },
          { name: "Cladding Panel Komposit Aluminium", price: "Atas Sebut Harga", desc: "Cladding ACP untuk fasad, kedai depan dan dinding ciri dengan lipatan router, rangka aluminium dan pengedapan sambungan kalis cuaca." },
          { name: "Pembaikan Kaca & Reglazing", price: "Atas Sebut Harga", desc: "Menggantikan kaca retak atau pecah pada bingkai, pintu dan partition sedia ada, dengan penutupan sementara sekiranya kaca kustom masih ditempah." }
        ],
        process: [
          { step: "01", title: "Ukuran Tapak & Reka Bentuk", desc: "Kami mengukur bukaan, menangkap kekangan susun atur (cerun, paip, saliran) dan mengesyorkan ketebalan kaca, bingkai dan perkakasan yang betul." },
          { step: "02", title: "Sebut Harga & Masa Tunggu", desc: "Kaca tempered biasanya mengambil 5–7 hari bekerja untuk fabrikasi. Bingkai aluminium 3–5 hari. Anda menerima sebut harga terperinci dengan kedua-duanya." },
          { step: "03", title: "Fabrikasi", desc: "Kaca dipotong, di-temper (diperkukuh haba untuk keselamatan) dan digilap tepi di kilang. Bingkai aluminium dipotong, di-mitre dan di-powder-coat mengikut pilihan warna anda." },
          { step: "04", title: "Pemasangan Di Tapak", desc: "Bingkai disauh dengan pengikat keluli tahan karat atau bersadur zink, kaca didudukkan pada blok pemasangan dengan silikon struktur, dan perkakasan dipasang." },
          { step: "05", title: "Pengedapan & Ujian Air", desc: "Untuk skrin pancuran, kami menjalankan ujian air 24 jam untuk mengesahkan pengedap bebas bocor. Semua pengedap dan perkakasan dijajarkan dan diuji untuk operasi lancar." }
        ],
        faqs: [
          { q: "Ketebalan kaca apakah yang patut saya pilih untuk skrin pancuran?", a: "Untuk panel tetap tunggal sehingga 1.5m lebar, kaca tempered 10mm mencukupi. Untuk pintu tanpa bingkai atau panel lebih besar melebihi 1.5m lebar, kami mengesyorkan tempered 12mm. Untuk gelangsar bilik mandi atau reka bentuk berbingkai, 8mm boleh diterima. Kami sentiasa menggunakan kaca keselamatan tempered atau laminated yang pecah menjadi granul kecil selamat dan bukannya serpihan berbahaya — tidak pernah kaca annealed biasa di kawasan basah." },
          { q: "Boleh skrin pancuran sedia ada saya dikedap semula dan bukannya diganti?", a: "Ya, dalam banyak kes. Jika kaca dan bingkai dalam keadaan baik tetapi pengedap silikon telah menghitam, berkulat atau tertanggal, kami boleh menanggalkan silikon lama, membersihkan permukaan dan menyapu silikon gred saniter tahan kulat baharu. Ini biasanya berharga 30–50% daripada penggantian penuh dan memanjangkan jangka hayat skrin sebanyak 3–5 tahun." },
          { q: "Adakah anda mengendalikan partition kaca pejabat untuk fit-out komersial?", a: "Ya. Kami memasang partition kaca penuh tinggi untuk pejabat, bilik mesyuarat dan lantai kedai menggunakan kaca tempered 10–12mm dengan sistem saluran-U aluminium atau tanpa bingkai. Kami juga boleh menyepadukan pintu kaca (hayun atau gelangsar), filem frosted/etched untuk privasi dan kaca laminated akustik untuk bilik mesyuarat. Pasukan kami berpengalaman dengan pematuhan bangunan terurus dan perlindungan lif untuk pemasangan bangunan tinggi." },
          { q: "Apakah perbezaan antara kaca jernih, tinted, frosted dan reflektif?", a: "Kaca jernih ialah pilihan telus standard. Tinted (kelabu, gangsa, hijau) mengurangkan perolehan haba solar sebanyak 30–40% dan biasa untuk tingkap menghadap barat. Frosted (acid-etched atau sandblasted) legap untuk privasi sambil masih menghantar cahaya. Kaca reflektif mempunyai salutan logam yang memantulkan haba dan memberikan privasi sehala pada siang hari. Kami boleh tunjukkan sampel fizikal dan membincangkan pilihan yang betul untuk kes penggunaan khusus anda." }
        ],
        metaTitle: "Fabrikasi Kaca & Aluminium KL & Selangor",
        metaDesc: "Skrin pancuran, partition kaca, tingkap aluminium di KL & Selangor. Kaca tempered, bingkai Akasia/Hua Ho, fabrikasi kustom. Dari RM320. Jaminan bebas bocor 12 bulan.",
        aioSummary: "KL Servis Rumah memfabrikasi dan memasang produk kaca dan aluminium di seluruh KL & Selangor. Skrin pancuran tanpa bingkai dan berbingkai, partition pejabat kaca, tingkap aluminium, pintu kaca gelangsar, cermin dinding. Kaca keselamatan tempered daripada pengeluar bertauliah MS. Bingkai Akasia, Hua Ho, YKK AP.",
        warranty: "Jaminan Bebas Bocor & Perkakasan 12 Bulan"
      },
      zh: {
        title: "玻璃与铝业工程",
        tagline: "吉隆坡与雪兰莪的淋浴屏、玻璃隔断、铝合金窗、推拉门与镜子安装。从 RM 320 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供定制玻璃与铝合金的制作与安装。我们承接住宅与轻型商业项目：无框与有框淋浴屏、玻璃办公隔断、玻璃推拉门、玻璃平开门、铝合金平开窗与推拉窗、上悬窗、百叶窗与装饰镜。我们采用马来西亚认证玻璃厂商（Malaysian Sheet Glass、TechnoGlas、信义玻璃）的钢化或夹层安全玻璃，铝型材来自本地知名挤压厂（Akasia、Hua Ho、YKK AP 或定制粉末喷涂型材）。每次淋浴屏安装都包括防水检查、合理的滴水边设计，以及密封 12 个月防漏保修。",
        highlights: [
          "MS 认证马来西亚厂商的钢化与夹层安全玻璃",
          "Akasia、Hua Ho、YKK AP 或定制粉末喷涂型材的铝框",
          "无框与有框淋浴屏，防渗漏滴水边设计",
          "家庭办公室、会议室与商铺装修用玻璃隔断",
          "铝合金推拉窗与平开窗现场按尺寸定制",
          "墙镜、穿衣镜与健身房镜，暗藏式固定件"
        ],
        subServices: [
          { name: "无框淋浴屏", price: "从 RM 420 / 扇起", desc: "10–12mm 钢化玻璃配暗藏铰链与防漏密封。按您的浴室布局定制裁切。" },
          { name: "铝合金推拉窗", price: "从 RM 320 / 平方英尺起", desc: "本地制作的铝合金推拉窗，配 5mm 白玻或茶色玻、尼龙滑轮与密封毛条。" },
          { name: "玻璃办公隔断", price: "从 RM 220 / 平方英尺起", desc: "10–12mm 钢化玻璃隔断，配铝合金或无框地槽，含门与五金。" },
          { name: "墙镜安装", price: "从 RM 320 起", desc: "5–6mm 镀银镜，配暗藏铝槽固定件，适合浴室、健身房与更衣室。" },
          { name: "玻璃隔断", price: "依报价", desc: "适用于住宅与商铺的通高或半高钢化玻璃隔断，可选铝合金 U 型槽或无框固定，并可加贴磨砂膜。" },
          { name: "推拉玻璃门", price: "依报价", desc: "铝框或无框推拉玻璃门成套，配钢化玻璃、优质滑轮与密封毛条，适合露台、阳台与空间分隔。" },
          { name: "铝合金平开窗", price: "依报价", desc: "按洞口尺寸定制的侧开铝合金平开窗，配摩擦撑挡、多点锁闭与白玻或茶色玻璃。" },
          { name: "玻璃栏杆与护栏", price: "依报价", desc: "楼梯、阳台与夹层用钢化或夹层玻璃栏杆，可选不锈钢驳接爪、支撑件或槽式固定。" },
          { name: "铝塑板幕墙饰面", price: "依报价", desc: "外立面、店面与造型墙的 ACP 铝塑板饰面，含开槽折边、铝骨架与防水打胶收口。" },
          { name: "玻璃维修与换玻", price: "依报价", desc: "更换现有窗框、门扇与隔断上开裂或破碎的玻璃；定制玻璃在订时可先做临时封板。" }
        ],
        process: [
          { step: "01", title: "现场测量与设计", desc: "我们测量洞口，记录布局限制（坡度、管道、排水），并推荐合适的玻璃厚度、框架与五金。" },
          { step: "02", title: "报价与交期", desc: "钢化玻璃制作通常需 5–7 个工作日。铝框 3–5 天。您将收到列明两者的逐项报价。" },
          { step: "03", title: "工厂制作", desc: "玻璃在工厂裁切、钢化（热强化以确保安全）并磨边。铝框按您选择的颜色裁切、斜拼并粉末喷涂。" },
          { step: "04", title: "现场安装", desc: "框架用不锈钢或镀锌固定件锚固，玻璃以结构硅胶坐于垫块上，五金安装就位。" },
          { step: "05", title: "密封与淋水测试", desc: "淋浴屏我们进行 24 小时淋水测试确认密封无渗漏。所有密封与五金调校并测试开关顺滑。" }
        ],
        faqs: [
          { q: "淋浴屏应该选多厚的玻璃？", a: "宽至 1.5m 的单块固定面板，10mm 钢化玻璃即可。无框门或超过 1.5m 宽的大面板，我们建议 12mm 钢化。浴室推拉门或有框设计，8mm 也可以。我们始终使用钢化或夹层安全玻璃——破碎时形成安全小颗粒而非危险碎片——潮湿区域绝不用普通退火玻璃。" },
          { q: "现有淋浴屏可以只重新打胶而不更换吗？", a: "很多情况下可以。如果玻璃和框架状况良好，但硅胶发黑、发霉或脱落，我们可以清除旧硅胶、清洁表面并重新施打防霉卫浴级硅胶。费用通常只有整体更换的 30–50%，并可延长淋浴屏寿命 3–5 年。" },
          { q: "你们承接商业装修的玻璃办公隔断吗？", a: "承接。我们使用 10–12mm 钢化玻璃配铝合金或无框 U 型槽系统，为办公室、会议室与商铺安装通顶玻璃隔断。还可集成玻璃门（平开或推拉）、磨砂/蚀刻隐私膜，以及会议室用夹层隔音玻璃。我们的团队熟悉管理式楼宇的合规要求与高层施工的电梯保护。" },
          { q: "白玻、茶玻、磨砂与镀膜玻璃有什么区别？", a: "白玻是标准透明选择。茶色/灰色/绿色着色玻璃可减少 30–40% 的太阳得热，常用于西晒窗。磨砂（酸蚀或喷砂）透光不透视，保护隐私。镀膜玻璃带金属涂层，反射热量并在白天提供单向隐私。我们可以提供实物样板，并根据您的具体用途讨论合适的选择。" }
        ],
        metaTitle: "吉隆坡与雪兰莪玻璃与铝业工程",
        metaDesc: "吉隆坡与雪兰莪淋浴屏、玻璃隔断、铝合金窗。钢化玻璃、Akasia/Hua Ho 型材、定制加工。从 RM320 起。12 个月防漏保修。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪制作与安装玻璃与铝制品。无框与有框淋浴屏、玻璃办公隔断、铝合金窗、玻璃推拉门、墙镜。MS 认证厂商钢化安全玻璃。Akasia、Hua Ho、YKK AP 型材。",
        warranty: "12 个月防漏与五金保修"
      }
    }
  },

  // ── 23. CCTV INSTALLATION ────────────────────────────────────────
  "cctv": {
    slug: "cctv",
    title: "CCTV & Security Camera Installation",
    tagline: "Hikvision, Dahua, Ezviz, TP-Link, Tuya CCTV supply, install, network setup, and remote viewing. From RM 420 / camera.",
    description:
      "KL Servis Rumah provides residential and small-business CCTV installation across Kuala Lumpur and Selangor. We supply and install industry-standard IP cameras from Hikvision, Dahua, Ezviz, TP-Link (Tapo), and Tuya — covering both wired (PoE NVR) and wireless (Wi-Fi cloud) systems. Every installation includes: site survey and camera positioning, cable routing (CAT6 for wired, discreet trunking for wireless), NVR or cloud storage configuration, mobile app pairing, and remote viewing setup on your phone. We specialize in landed-house and shoplot installations with 4 to 16 cameras, condo installations (1–4 cameras with Wi-Fi cloud storage), and small-office installations with access-control integration. All work is documented with camera position photos, password handover, and a written warranty.",
    startPrice: "RM 420",
    icon: "camera",
    highlights: [
      "Hikvision, Dahua, Ezviz, TP-Link (Tapo), and Tuya certified installer",
      "Wired (PoE NVR) and wireless (Wi-Fi cloud) systems for every property type",
      "Site survey and camera positioning for maximum coverage with minimum blind spots",
      "Concealed cable routing through trunking or ceiling voids — no ugly surface cables",
      "Mobile app pairing and remote viewing setup on your phone (iOS + Android)",
      "Documentation with camera position photos, password handover, and written warranty"
    ],
    subServices: [
      { name: "Condo Wi-Fi CCTV Package (4 cameras)", price: "From RM 2,200", desc: "4x 4MP Wi-Fi cameras with cloud storage, mobile app setup, and remote viewing. Ideal for 1,000-1,500 sqft condos." },
      { name: "Landed House PoE CCTV (8 cameras)", price: "From RM 4,200", desc: "8x 4MP PoE bullet cameras, 8-channel NVR with 2TB HDD, 1-week continuous recording, full cable routing." },
      { name: "Single Camera Add-On", price: "From RM 420", desc: "Adding one more camera to an existing system (Hikvision/Dahua/Ezviz/Tapo) including cable, mounting, and app pairing." },
      { name: "CCTV System Health Check & Relocation", price: "From RM 220", desc: "On-site health check, cleaning, re-aim, app reconfiguration, or relocation of existing CCTV cameras." }
    ],
    process: [
      { step: "01", title: "Site Survey & Camera Plan", desc: "We visit your property, identify entry points, blind spots, and high-risk areas, and propose a camera position plan with coverage notes." },
      { step: "02", title: "Transparent Quote", desc: "Itemized quote covering cameras, NVR or cloud subscription, cabling, mounting brackets, and any access equipment needed for high locations." },
      { step: "03", title: "Cable Routing", desc: "For wired systems, CAT6 cable is run through ceiling voids, trunking, or conduit. For wireless systems, we position each camera within Wi-Fi range and use discreet trunking for the power cable." },
      { step: "04", title: "Camera Mounting & Configuration", desc: "Cameras are mounted with vandal-resistant brackets, aimed and focused, and connected to the NVR or cloud. Mobile app is installed on your phone and tested for remote viewing." },
      { step: "05", title: "Documentation & Handover", desc: "You receive a written report with camera position photos, default and admin passwords, app setup instructions, and warranty documentation." }
    ],
    faqs: [
      { q: "How many CCTV cameras do I need for my landed house?", a: "Most landed houses in KL/Selangor benefit from 6–8 cameras: front door, back door, garage, side gate, driveway, living room, and one or two perimeter coverage points. For a typical 2-storey terrace with a small garden, 4–6 cameras are usually sufficient. We do a free site survey and propose a tailored plan based on your property layout, not a one-size-fits-all number." },
      { q: "Wired (PoE) or wireless (Wi-Fi) — which is better for me?", a: "Wired PoE systems are more reliable (no Wi-Fi dropouts, no battery concerns), record 24/7 to a local NVR (no cloud subscription), and typically last 7+ years. They are best for new installations and larger properties. Wireless Wi-Fi systems are easier to retrofit (no cable routing), record to the cloud, and are best for renters, condos, and small spaces. We recommend wired for landed houses and wireless for condos." },
      { q: "Can I view my cameras on my phone when I'm overseas?", a: "Yes. All our systems support remote viewing via mobile app (iOS and Android). We set up the app on your phone before handover and walk you through the live view, playback, and notification features. As long as your home has internet and your phone has internet (Wi-Fi or 4G/5G), you can view your cameras from anywhere in the world." },
      { q: "Is CCTV legal in Malaysian condos?", a: "CCTV inside your own condo unit is fully legal. CCTV in common areas (corridor, lobby) requires management approval and usually must be installed by a management-approved contractor. We help you submit the management application with the camera specification and position plan, and we have experience working with all major KL/Selangor condo managements." }
    ],
    heroImage: "/hero/home-services-cctv-kl.jpg",
    metaTitle: "CCTV & Security Camera Installation KL & Selangor",
    metaDesc: "Hikvision, Dahua, Ezviz, TP-Link CCTV install in KL & Selangor. Wired PoE and wireless Wi-Fi, NVR, cloud, mobile app. From RM420/camera. Free site survey.",
    aioSummary: "KL Servis Rumah supplies and installs CCTV across KL & Selangor. Hikvision, Dahua, Ezviz, TP-Link (Tapo), Tuya. Wired PoE NVR and wireless Wi-Fi cloud systems. Free site survey, camera position plan, concealed cable routing, mobile app pairing, remote viewing, full documentation.",
    warranty: "12-Month Camera & Installation Warranty",
    i18n: {
      ms: {
        title: "Pemasangan CCTV & Kamera Keselamatan",
        tagline: "Bekalan, pemasangan, persediaan rangkaian dan tontonan jauh CCTV Hikvision, Dahua, Ezviz, TP-Link, Tuya. Dari RM 420 / kamera.",
        description: "KL Servis Rumah menyediakan pemasangan CCTV kediaman dan perniagaan kecil di seluruh Kuala Lumpur dan Selangor. Kami membekalkan dan memasang kamera IP standard industri daripada Hikvision, Dahua, Ezviz, TP-Link (Tapo) dan Tuya — merangkumi sistem berwayar (PoE NVR) dan tanpa wayar (awan Wi-Fi). Setiap pemasangan termasuk: tinjauan tapak dan penempatan kamera, laluan kabel (CAT6 untuk berwayar, saluran diskret untuk tanpa wayar), konfigurasi NVR atau storan awan, pemasangan aplikasi mudah alih dan persediaan tontonan jauh pada telefon anda. Kami pakar dalam pemasangan rumah landed dan lot kedai dengan 4 hingga 16 kamera, pemasangan kondominium (1–4 kamera dengan storan awan Wi-Fi) dan pemasangan pejabat kecil dengan integrasi kawalan akses. Semua kerja didokumentasikan dengan foto kedudukan kamera, serahan kata laluan dan jaminan bertulis.",
        highlights: [
          "Pemasang bertauliah Hikvision, Dahua, Ezviz, TP-Link (Tapo) dan Tuya",
          "Sistem berwayar (PoE NVR) dan tanpa wayar (awan Wi-Fi) untuk setiap jenis hartanah",
          "Tinjauan tapak dan penempatan kamera untuk liputan maksimum dengan titik buta minimum",
          "Laluan kabel tersembunyi melalui saluran atau rongga siling — tiada kabel permukaan hodoh",
          "Pemasangan aplikasi mudah alih dan persediaan tontonan jauh pada telefon anda (iOS + Android)",
          "Dokumentasi dengan foto kedudukan kamera, serahan kata laluan dan jaminan bertulis"
        ],
        subServices: [
          { name: "Pakej CCTV Wi-Fi Kondominium (4 kamera)", price: "Dari RM 2,200", desc: "4x kamera Wi-Fi 4MP dengan storan awan, persediaan aplikasi mudah alih dan tontonan jauh. Sesuai untuk kondominium 1,000-1,500 kaki persegi." },
          { name: "CCTV PoE Rumah Landed (8 kamera)", price: "Dari RM 4,200", desc: "8x kamera bullet PoE 4MP, NVR 8 saluran dengan HDD 2TB, rakaman berterusan 1 minggu, laluan kabel penuh." },
          { name: "Tambahan Kamera Tunggal", price: "Dari RM 420", desc: "Menambah satu lagi kamera pada sistem sedia ada (Hikvision/Dahua/Ezviz/Tapo) termasuk kabel, pemasangan dan pemasangan aplikasi." },
          { name: "Pemeriksaan Kesihatan & Pemindahan Sistem CCTV", price: "Dari RM 220", desc: "Pemeriksaan kesihatan di tapak, pembersihan, sasaran semula, konfigurasi semula aplikasi atau pemindahan kamera CCTV sedia ada." }
        ],
        process: [
          { step: "01", title: "Tinjauan Tapak & Pelan Kamera", desc: "Kami melawat hartanah anda, mengenal pasti titik masuk, titik buta dan kawasan berisiko tinggi, dan mencadangkan pelan kedudukan kamera dengan nota liputan." },
          { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci merangkumi kamera, NVR atau langganan awan, kabel, pendakap pemasangan dan sebarang peralatan akses yang diperlukan untuk lokasi tinggi." },
          { step: "03", title: "Laluan Kabel", desc: "Untuk sistem berwayar, kabel CAT6 disalurkan melalui rongga siling, saluran atau konduit. Untuk sistem tanpa wayar, kami menempatkan setiap kamera dalam julat Wi-Fi dan menggunakan saluran diskret untuk kabel kuasa." },
          { step: "04", title: "Pemasangan & Konfigurasi Kamera", desc: "Kamera dipasang dengan pendakap tahan vandal, disasarkan dan difokuskan, dan disambungkan ke NVR atau awan. Aplikasi mudah alih dipasang pada telefon anda dan diuji untuk tontonan jauh." },
          { step: "05", title: "Dokumentasi & Serahan", desc: "Anda menerima laporan bertulis dengan foto kedudukan kamera, kata laluan lalai dan admin, arahan persediaan aplikasi dan dokumentasi jaminan." }
        ],
        faqs: [
          { q: "Berapa banyak kamera CCTV yang saya perlukan untuk rumah landed saya?", a: "Kebanyakan rumah landed di KL/Selangor mendapat manfaat daripada 6–8 kamera: pintu depan, pintu belakang, garaj, pintu pagar sisi, laluan kereta, ruang tamu dan satu atau dua titik liputan perimeter. Untuk teres 2 tingkat dengan taman kecil, 4–6 kamera biasanya mencukupi. Kami menjalankan tinjauan tapak percuma dan mencadangkan pelan yang disesuaikan berdasarkan susun atur hartanah anda, bukan nombor satu-saiz-untuk-semua." },
          { q: "Berwayar (PoE) atau tanpa wayar (Wi-Fi) — mana lebih baik untuk saya?", a: "Sistem PoE berwayar lebih boleh dipercayai (tiada gangguan Wi-Fi, tiada kebimbangan bateri), merakam 24/7 ke NVR tempatan (tiada langganan awan) dan biasanya bertahan 7+ tahun. Ia terbaik untuk pemasangan baharu dan hartanah lebih besar. Sistem Wi-Fi tanpa wayar lebih mudah retrofit (tiada laluan kabel), merakam ke awan dan terbaik untuk penyewa, kondominium dan ruang kecil. Kami mengesyorkan berwayar untuk rumah landed dan tanpa wayar untuk kondominium." },
          { q: "Boleh saya melihat kamera saya pada telefon semasa di luar negara?", a: "Ya. Semua sistem kami menyokong tontonan jauh melalui aplikasi mudah alih (iOS dan Android). Kami menyediakan aplikasi pada telefon anda sebelum serahan dan menerangkan ciri tontonan langsung, main semula dan pemberitahuan. Selagi rumah anda mempunyai internet dan telefon anda mempunyai internet (Wi-Fi atau 4G/5G), anda boleh melihat kamera anda dari mana-mana di dunia." },
          { q: "Adakah CCTV sah di kondominium Malaysia?", a: "CCTV di dalam unit kondominium anda sendiri adalah sah sepenuhnya. CCTV di kawasan bersama (koridor, lobi) memerlukan kelulusan pengurusan dan biasanya mesti dipasang oleh kontraktor yang diluluskan pengurusan. Kami membantu anda mengemukakan permohonan pengurusan dengan spesifikasi kamera dan pelan kedudukan, dan kami berpengalaman bekerja dengan semua pengurusan kondominium utama KL/Selangor." }
        ],
        metaTitle: "Pemasangan CCTV & Kamera Keselamatan KL & Selangor",
        metaDesc: "Pemasangan CCTV Hikvision, Dahua, Ezviz, TP-Link di KL & Selangor. PoE berwayar dan Wi-Fi tanpa wayar, NVR, awan, aplikasi mudah alih. Dari RM420/kamera. Tinjauan tapak percuma.",
        aioSummary: "KL Servis Rumah membekalkan dan memasang CCTV di seluruh KL & Selangor. Hikvision, Dahua, Ezviz, TP-Link (Tapo), Tuya. Sistem NVR PoE berwayar dan awan Wi-Fi tanpa wayar. Tinjauan tapak percuma, pelan kedudukan kamera, laluan kabel tersembunyi, pemasangan aplikasi mudah alih, tontonan jauh, dokumentasi penuh.",
        warranty: "Jaminan Kamera & Pemasangan 12 Bulan"
      },
      zh: {
        title: "CCTV 与监控摄像头安装",
        tagline: "Hikvision、Dahua、Ezviz、TP-Link、Tuya 监控的供应、安装、网络设置与远程查看。从 RM 420 / 台起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供住宅与小型商业监控安装。我们供应并安装 Hikvision、Dahua、Ezviz、TP-Link (Tapo) 与 Tuya 的行业标准 IP 摄像头——涵盖有线（PoE NVR）与无线（Wi-Fi 云）两大系统。每次安装包括：现场勘察与摄像头定位、布线（有线用 CAT6，无线用隐蔽线槽）、NVR 或云存储配置、手机 App 配对与手机远程查看设置。我们专长于有地住宅与店铺安装（4 到 16 个摄像头）、公寓安装（1–4 个摄像头配 Wi-Fi 云存储）以及带门禁集成的小型办公室安装。所有工作都以摄像头位置照片、密码移交与书面保修记录在案。",
        highlights: [
          "Hikvision、Dahua、Ezviz、TP-Link (Tapo) 与 Tuya 认证安装商",
          "有线（PoE NVR）与无线（Wi-Fi 云）系统覆盖各类物业",
          "现场勘察与摄像头定位，覆盖最大化、盲区最小化",
          "线槽或吊顶空腔隐蔽布线——没有难看的明线",
          "手机 App 配对与远程查看设置（iOS + Android）",
          "交付摄像头位置照片、密码与书面保修的完整文档"
        ],
        subServices: [
          { name: "公寓 Wi-Fi 监控套餐（4 台）", price: "从 RM 2,200 起", desc: "4 台 4MP Wi-Fi 摄像头，配云存储、手机 App 设置与远程查看。适合 1,000-1,500 平方英尺公寓。" },
          { name: "有地住宅 PoE 监控（8 台）", price: "从 RM 4,200 起", desc: "8 台 4MP PoE 枪机、8 路 NVR 配 2TB 硬盘、1 周连续录像、完整布线。" },
          { name: "单台加装摄像头", price: "从 RM 420 起", desc: "在现有系统（Hikvision/Dahua/Ezviz/Tapo）上加装一台摄像头，含线缆、安装与 App 配对。" },
          { name: "监控系统健康检查与移机", price: "从 RM 220 起", desc: "现场健康检查、清洁、重新调校角度、App 重新配置，或迁移现有监控摄像头。" }
        ],
        process: [
          { step: "01", title: "现场勘察与布点方案", desc: "我们上门查看物业，识别出入口、盲区与高风险区域，并提出带覆盖说明的摄像头布点方案。" },
          { step: "02", title: "透明报价", desc: "逐项报价涵盖摄像头、NVR 或云订阅、线缆、安装支架及高位作业所需的任何登高设备。" },
          { step: "03", title: "布线", desc: "有线系统：CAT6 网线经吊顶空腔、线槽或线管敷设。无线系统：每台摄像头置于 Wi-Fi 覆盖范围内，电源线走隐蔽线槽。" },
          { step: "04", title: "摄像头安装与配置", desc: "摄像头以防拆支架安装，调焦对位后接入 NVR 或云端。在您的手机上安装 App 并测试远程查看。" },
          { step: "05", title: "文档与交付", desc: "您收到含摄像头位置照片、默认与管理员密码、App 设置说明与保修文件的书面报告。" }
        ],
        faqs: [
          { q: "我的有地住宅需要装几个摄像头？", a: "吉隆坡/雪兰莪的大多数有地住宅适合 6–8 个摄像头：前门、后门、车库、侧门、车道、客厅，以及一两个周边覆盖点。带小花园的典型双层排屋，4–6 个通常足够。我们提供免费现场勘察，根据您的物业布局定制方案，而不是一成不变的数字。" },
          { q: "有线（PoE）还是无线（Wi-Fi）——哪个适合我？", a: "有线 PoE 系统更可靠（不怕 Wi-Fi 掉线、无电池顾虑），24/7 录到本地 NVR（无需云订阅），通常可用 7 年以上，最适合新装与较大物业。无线 Wi-Fi 系统加装容易（无需布线）、录到云端，最适合租客、公寓与小空间。有地住宅我们建议有线，公寓建议无线。" },
          { q: "人在国外时能用手机看监控吗？", a: "可以。我们所有系统都支持手机 App（iOS 与 Android）远程查看。交付前我们在您手机上装好 App，并逐项演示实时画面、回放与通知功能。只要家里有网、手机有网（Wi-Fi 或 4G/5G），您在世界任何地方都能查看监控。" },
          { q: "在马来西亚公寓装监控合法吗？", a: "在自己单元内安装监控完全合法。公共区域（走廊、大堂）的监控需要管理处批准，且通常必须由管理处认可的承包商安装。我们可以帮您准备摄像头规格与布点方案提交管理处申请，并与吉隆坡/雪兰莪各大公寓管理方有丰富的合作经验。" }
        ],
        metaTitle: "吉隆坡与雪兰莪 CCTV 与监控摄像头安装",
        metaDesc: "吉隆坡与雪兰莪 Hikvision、Dahua、Ezviz、TP-Link 监控安装。有线 PoE 与无线 Wi-Fi、NVR、云端、手机 App。从 RM420/台起。免费现场勘察。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应并安装监控。Hikvision、Dahua、Ezviz、TP-Link (Tapo)、Tuya。有线 PoE NVR 与无线 Wi-Fi 云系统。免费现场勘察、摄像头布点方案、隐蔽布线、手机 App 配对、远程查看、完整文档。",
        warranty: "12 个月摄像头与安装保修"
      }
    }
  },

  // ── 24. AUTOGATE INSTALLATION ────────────────────────────────────────
  "autogate": {
    slug: "autogate",
    title: "Auto Gate & Motorised Gate",
    tagline: "Swing, sliding, and folding autogate supply, install, and motor servicing across KL & Selangor. From RM 2,200.",
    description:
      "KL Servis Rumah supplies, installs, and services autogate systems for landed houses across Kuala Lumpur and Selangor. We work with every common gate type: **swing gate** (single or double leaf, most common for terrace houses), **sliding gate** (single or bi-parting, ideal for narrow driveways or limited swing space), and **folding gate** (accordion-style for very narrow entries). Motor brands we install: Autogate 2000 (the Malaysian classic), BFT, CAME, NICE, and locally assembled units. Every installation includes: site survey, motor sizing calculation, foundation and rail installation, motor mounting, electrical wiring with proper isolator, control board programming, remote control pairing (2–4 remotes), and safety sensor installation. We also service and repair existing autogates — motor replacement, control board repair, track realignment, and battery backup installation.",
    startPrice: "RM 2,200",
    icon: "move",
    highlights: [
      "Swing, sliding, and folding autogate systems for every driveway type",
      "Autogate 2000, BFT, CAME, NICE, and locally assembled motor brands",
      "Site survey, motor sizing, and foundation engineering for reliable operation",
      "Proper isolator and IP-rated electrical wiring for outdoor use",
      "Infrared safety sensors to stop the gate on obstacle detection",
      "Battery backup system so the gate works during a power outage"
    ],
    subServices: [
      { name: "Single Swing Autogate", price: "From RM 2,200", desc: "Single-leaf swing gate motor with 2 remotes, safety sensor, and basic installation. Most popular for terrace houses." },
      { name: "Double Swing Autogate", price: "From RM 3,200", desc: "Two-leaf swing gate with dual motors, synchronisation, 2 remotes, and 2 safety sensors." },
      { name: "Sliding Autogate", price: "From RM 3,800", desc: "Sliding gate with rack-and-pinion motor, ground track, and 2 remotes. Ideal for narrow driveways." },
      { name: "Autogate Motor Replacement & Service", price: "From RM 950", desc: "Replacement of failed motor with new unit, control board reconfiguration, and safety sensor re-test." }
    ],
    process: [
      { step: "01", title: "Site Survey & Gate Sizing", desc: "We measure the existing or planned gate, assess the driveway slope, electrical supply, and recommend the right motor size and gate type." },
      { step: "02", title: "Transparent Quote", desc: "Itemized quote covering motor, gate (if supplied by us), foundation work, electrical, safety sensors, and remotes." },
      { step: "03", title: "Foundation & Rail", desc: "We dig and pour concrete foundations for the gate posts and motor mount. For sliding gates, we install a level ground track with proper drainage." },
      { step: "04", title: "Motor & Electrical Install", desc: "Motor is mounted on a proper bracket, electrical wiring is run in weatherproof conduit, isolator is installed, and control board is programmed." },
      { step: "05", title: "Safety Sensors & Commissioning", desc: "Infrared safety sensors are installed on both sides of the gate. Remotes are paired, gate travel limits are set, and the full open/close cycle is tested." }
    ],
    faqs: [
      { q: "How do I choose between swing, sliding, and folding autogate?", a: "Swing gates are the most common and affordable, but they need clearance for the gate to swing (about 90° opening). Sliding gates are best when the driveway is narrow or the gate would hit an obstruction when swung open. Folding gates are for very narrow entries where neither swing nor sliding fits. We always do a site survey before recommending — the choice depends on your driveway geometry, slope, and available space." },
      { q: "Will the gate work during a power outage?", a: "Standard autogates will not open during a power outage unless a battery backup is installed. We strongly recommend a battery backup (typically RM 350–500) which keeps the gate functional for 8–24 hours of typical use. Alternatively, all our motor installations include a manual release key so you can unlock the gate manually from the inside during an outage." },
      { q: "Can you automate my existing manual gate?", a: "Yes, in most cases. As long as the gate is in good condition (not warped, not heavily rusted) and the hinges are solid, we can add a motor. We may need to upgrade the hinges, add a centre stop, or replace a wooden gate with a steel frame for reliability. We do a site assessment and tell you upfront if the existing gate is suitable." },
      { q: "What maintenance does an autogate need?", a: "We recommend a 6-monthly service: lubricate hinges and moving parts, check motor brushes (for brushed motors), test safety sensors, check battery backup if installed, and re-test the full open/close cycle. Our maintenance visit starts from RM 180 and includes a written condition report. A well-maintained autogate typically lasts 8–12 years before the motor needs replacement." }
    ],
    heroImage: "/hero-autogate.svg",
    metaTitle: "Auto Gate Installation KL & Selangor",
    metaDesc: "Swing, sliding, folding autogate in KL & Selangor. Autogate 2000, BFT, CAME, NICE. From RM1800. Motor replacement, safety sensor, battery backup. 12-month warranty.",
    aioSummary: "KL Servis Rumah supplies, installs, and services autogate systems across KL & Selangor. Swing, sliding, and folding gate types. Autogate 2000, BFT, CAME, NICE motors. Site survey, motor sizing, foundation work, electrical, safety sensors, remote pairing, battery backup. Existing gate automation available.",
    warranty: "12-Month Motor & Installation Warranty",
    i18n: {
      ms: {
        title: "Autogate & Pagar Bermotor",
        tagline: "Bekalan, pemasangan dan servis motor autogate hayun, gelangsar dan lipat di seluruh KL & Selangor. Dari RM 2,200.",
        description: "KL Servis Rumah membekalkan, memasang dan menyervis sistem autogate untuk rumah landed di seluruh Kuala Lumpur dan Selangor. Kami bekerja dengan setiap jenis pagar biasa: **pagar hayun** (satu atau dua daun, paling biasa untuk rumah teres), **pagar gelangsar** (tunggal atau dwi-belah, sesuai untuk laluan kereta sempit atau ruang hayunan terhad) dan **pagar lipat** (gaya akordion untuk laluan masuk sangat sempit). Jenama motor yang kami pasang: Autogate 2000 (kegemaran Malaysia), BFT, CAME, NICE dan unit pemasangan tempatan. Setiap pemasangan termasuk: tinjauan tapak, pengiraan saiz motor, pemasangan asas dan rel, pemasangan motor, pendawaian elektrik dengan isolator yang betul, pengaturcaraan papan kawalan, pemasangan kawalan jauh (2–4 remote) dan pemasangan sensor keselamatan. Kami juga menyervis dan membaiki autogate sedia ada — penggantian motor, pembaikan papan kawalan, penjajaran semula trek dan pemasangan bateri sandar.",
        highlights: [
          "Sistem autogate hayun, gelangsar dan lipat untuk setiap jenis laluan kereta",
          "Jenama motor Autogate 2000, BFT, CAME, NICE dan pemasangan tempatan",
          "Tinjauan tapak, saiz motor dan kejuruteraan asas untuk operasi boleh dipercayai",
          "Pendawaian elektrik isolator dan berkadar IP yang betul untuk kegunaan luar",
          "Sensor keselamatan inframerah untuk menghentikan pagar apabila mengesan halangan",
          "Sistem bateri sandar supaya pagar berfungsi semasa gangguan kuasa"
        ],
        subServices: [
          { name: "Autogate Hayun Tunggal", price: "Dari RM 2,200", desc: "Motor pagar hayun satu daun dengan 2 remote, sensor keselamatan dan pemasangan asas. Paling popular untuk rumah teres." },
          { name: "Autogate Hayun Berkembar", price: "Dari RM 3,200", desc: "Pagar hayun dua daun dengan motor dwi, penyegerakan, 2 remote dan 2 sensor keselamatan." },
          { name: "Autogate Gelangsar", price: "Dari RM 3,800", desc: "Pagar gelangsar dengan motor rack-and-pinion, trek tanah dan 2 remote. Sesuai untuk laluan kereta sempit." },
          { name: "Penggantian & Servis Motor Autogate", price: "Dari RM 950", desc: "Penggantian motor rosak dengan unit baharu, konfigurasi semula papan kawalan dan ujian semula sensor keselamatan." }
        ],
        process: [
          { step: "01", title: "Tinjauan Tapak & Saiz Pagar", desc: "Kami mengukur pagar sedia ada atau dirancang, menilai cerun laluan kereta, bekalan elektrik dan mengesyorkan saiz motor dan jenis pagar yang betul." },
          { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci merangkumi motor, pagar (jika dibekalkan kami), kerja asas, elektrik, sensor keselamatan dan remote." },
          { step: "03", title: "Asas & Rel", desc: "Kami menggali dan menuang asas konkrit untuk tiang pagar dan pelekap motor. Untuk pagar gelangsar, kami memasang trek tanah rata dengan saliran yang betul." },
          { step: "04", title: "Pemasangan Motor & Elektrik", desc: "Motor dipasang pada pendakap yang betul, pendawaian elektrik disalurkan dalam konduit tahan cuaca, isolator dipasang dan papan kawalan diaturcara." },
          { step: "05", title: "Sensor Keselamatan & Pentauliahan", desc: "Sensor keselamatan inframerah dipasang di kedua-dua belah pagar. Remote dipasangkan, had perjalanan pagar ditetapkan dan kitaran buka/tutup penuh diuji." }
        ],
        faqs: [
          { q: "Bagaimana saya memilih antara autogate hayun, gelangsar dan lipat?", a: "Pagar hayun paling biasa dan berpatutan, tetapi memerlukan ruang untuk hayunan pagar (bukaan kira-kira 90°). Pagar gelangsar terbaik apabila laluan kereta sempit atau pagar akan terkena halangan apabila dihayun terbuka. Pagar lipat untuk laluan masuk sangat sempit di mana hayun atau gelangsar tidak muat. Kami sentiasa menjalankan tinjauan tapak sebelum mengesyorkan — pilihan bergantung pada geometri laluan kereta, cerun dan ruang tersedia anda." },
          { q: "Adakah pagar berfungsi semasa gangguan kuasa?", a: "Autogate standard tidak akan terbuka semasa gangguan kuasa kecuali bateri sandar dipasang. Kami sangat mengesyorkan bateri sandar (biasanya RM 350–500) yang mengekalkan pagar berfungsi selama 8–24 jam penggunaan biasa. Sebagai alternatif, semua pemasangan motor kami termasuk kunci pelepas manual supaya anda boleh membuka pagar secara manual dari dalam semasa gangguan kuasa." },
          { q: "Boleh anda mengautomasi pagar manual sedia ada saya?", a: "Ya, dalam kebanyakan kes. Selagi pagar dalam keadaan baik (tidak melengkung, tidak teruk berkarat) dan engsel kukuh, kami boleh menambah motor. Kami mungkin perlu menaik taraf engsel, menambah hentian tengah atau menggantikan pagar kayu dengan rangka keluli untuk kebolehpercayaan. Kami menjalankan penilaian tapak dan memberitahu anda terlebih dahulu jika pagar sedia ada sesuai." },
          { q: "Penyelenggaraan apa yang diperlukan autogate?", a: "Kami mengesyorkan servis 6 bulan sekali: melincirkan engsel dan bahagian bergerak, memeriksa berus motor (untuk motor berberus), menguji sensor keselamatan, memeriksa bateri sandar jika dipasang dan menguji semula kitaran buka/tutup penuh. Lawatan penyelenggaraan kami bermula dari RM 180 dan termasuk laporan keadaan bertulis. Autogate yang diselenggara dengan baik biasanya bertahan 8–12 tahun sebelum motor perlu diganti." }
        ],
        metaTitle: "Pemasangan Autogate KL & Selangor",
        metaDesc: "Autogate hayun, gelangsar, lipat di KL & Selangor. Autogate 2000, BFT, CAME, NICE. Dari RM1800. Penggantian motor, sensor keselamatan, bateri sandar. Jaminan 12 bulan.",
        aioSummary: "KL Servis Rumah membekalkan, memasang dan menyervis sistem autogate di seluruh KL & Selangor. Jenis pagar hayun, gelangsar dan lipat. Motor Autogate 2000, BFT, CAME, NICE. Tinjauan tapak, saiz motor, kerja asas, elektrik, sensor keselamatan, pemasangan remote, bateri sandar. Automasi pagar sedia ada tersedia.",
        warranty: "Jaminan Motor & Pemasangan 12 Bulan"
      },
      zh: {
        title: "电动门与自动门系统",
        tagline: "吉隆坡与雪兰莪平开、推拉与折叠电动门的供应、安装与电机保养。从 RM 2,200 起。",
        description: "KL Servis Rumah 为吉隆坡与雪兰莪的有地住宅供应、安装与保养电动门系统。我们施工各种常见门型：**平开门**（单开或双开，排屋最常见）、**推拉门**（单移或双移，适合车道狭窄或开启空间受限的情况）和**折叠门**（手风琴式，适合极窄入口）。我们安装的电机品牌：Autogate 2000（马来西亚经典）、BFT、CAME、NICE 及本地组装机。每次安装包括：现场勘察、电机功率计算、地基与轨道施工、电机安装、配规范隔离开关的电气布线、控制板编程、遥控器配对（2–4 个）与安全传感器安装。我们也保养与维修现有电动门——电机更换、控制板维修、轨道调校与备用电池安装。",
        highlights: [
          "平开、推拉与折叠电动门系统，适合各种车道",
          "Autogate 2000、BFT、CAME、NICE 及本地组装电机品牌",
          "现场勘察、电机选型与地基工程，运行可靠",
          "户外使用配规范的隔离开关与 IP 等级电气布线",
          "红外安全传感器，遇阻挡自动停门",
          "备用电池系统，停电时门仍可正常使用"
        ],
        subServices: [
          { name: "单开平开电动门", price: "从 RM 2,200 起", desc: "单开门电机，配 2 个遥控器、安全传感器与基础安装。排屋最热门选择。" },
          { name: "双开平开电动门", price: "从 RM 3,200 起", desc: "双开门配双电机、同步控制、2 个遥控器与 2 个安全传感器。" },
          { name: "推拉电动门", price: "从 RM 3,800 起", desc: "齿轮齿条电机推拉门，配地轨与 2 个遥控器。适合狭窄车道。" },
          { name: "电动门电机更换与保养", price: "从 RM 950 起", desc: "更换故障电机，重新配置控制板，重测安全传感器。" }
        ],
        process: [
          { step: "01", title: "现场勘察与门体选型", desc: "我们测量现有或计划中的门，评估车道坡度、电源条件，并推荐合适的电机功率与门型。" },
          { step: "02", title: "透明报价", desc: "逐项报价涵盖电机、门体（如由我们供应）、地基工程、电气、安全传感器与遥控器。" },
          { step: "03", title: "地基与轨道", desc: "开挖并浇筑门柱与电机基座的混凝土地基。推拉门安装带排水找平的地面轨道。" },
          { step: "04", title: "电机与电气安装", desc: "电机装在规范支架上，电线穿防水线管敷设，安装隔离开关，控制板编程。" },
          { step: "05", title: "安全传感器与调试", desc: "门两侧安装红外安全传感器。配对遥控器，设定门行程限位，测试完整开/关循环。" }
        ],
        faqs: [
          { q: "平开、推拉、折叠电动门怎么选？", a: "平开门最常见也最经济，但需要门扇摆动的空间（约 90° 开启）。车道狭窄或开门会撞到障碍物时，推拉门最合适。折叠门用于极窄、平开推拉都不合适的入口。我们总是先现场勘察再推荐——取决于您的车道几何、坡度与可用空间。" },
          { q: "停电时门还能用吗？", a: "标准电动门停电时无法开启，除非装有备用电池。我们强烈建议加装备用电池（通常 RM 350–500），一般使用强度下可维持 8–24 小时。另外，我们所有电机安装都配手动释放钥匙，停电时可从内侧手动解锁开门。" },
          { q: "可以把我现有的手动门改成电动吗？", a: "大多数情况下可以。只要门状况良好（不变形、无严重锈蚀）且铰链牢固，就可以加装电机。可能需要升级铰链、加装中间限位，或把木门换成钢框以保证可靠性。我们现场评估后会如实告知现有门是否适合。" },
          { q: "电动门需要什么保养？", a: "我们建议每 6 个月保养一次：润滑铰链与活动部件、检查电机碳刷（有刷电机）、测试安全传感器、检查备用电池（如已安装）、重测完整开/关循环。我们的保养上门服务从 RM 180 起，含书面状况报告。保养良好的电动门电机通常可用 8–12 年才需要更换。" }
        ],
        metaTitle: "吉隆坡与雪兰莪电动门安装",
        metaDesc: "吉隆坡与雪兰莪平开、推拉、折叠电动门。Autogate 2000、BFT、CAME、NICE。从 RM1800 起。电机更换、安全传感器、备用电池。12 个月保修。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪供应、安装与保养电动门系统。平开、推拉与折叠门型。Autogate 2000、BFT、CAME、NICE 电机。现场勘察、电机选型、地基工程、电气、安全传感器、遥控器配对、备用电池。也可将现有手动门改电动。",
        warranty: "12 个月电机与安装保修"
      }
    }
  },

  // ── 25. WELDING & METAL WORKS ───────────────────────────────
  "welding": {
    slug: "welding",
    title: "Welding & Metal Fabrication",
    tagline: "Custom grilles, gates, structural repair, staircase fabrication, and on-site welding across KL & Selangor. From RM 280.",
    description:
      "KL Servis Rumah provides on-site and workshop welding and metal fabrication across Kuala Lumpur and Selangor. Our certified welders work with mild steel, stainless steel, and aluminium for residential and light-commercial projects. Services include: custom window grilles, door grilles, main gate fabrication, staircase stringer fabrication, structural steel repair (lintels, beams, columns), fence and railing fabrication, custom brackets and frames, and on-site emergency welding repair. We also fabricate matching metal parts for carpentry or renovation projects (e.g. steel frame for sliding barn door, custom metal kitchen hood, decorative metal panels). All work is finished with anti-rust primer and either powder coating (for factory finish) or weather-resistant enamel paint (for on-site finish).",
    startPrice: "RM 280",
    icon: "welding-spark",
    highlights: [
      "Certified welders (MIG, TIG, and arc) for mild steel, stainless steel, and aluminium",
      "Custom fabrication of grilles, gates, staircases, railings, and structural steel",
      "On-site welding and emergency repair for landed houses and shoplots",
      "Anti-rust primer + powder-coat or weather-resistant enamel finish options",
      "Structural steel repair (lintels, beams, columns) with engineering sign-off",
      "Matching metal parts for carpentry, renovation, and decorative projects"
    ],
    subServices: [
      { name: "Custom Window Grille", price: "From RM 42 / sq ft", desc: "Powder-coated mild steel window grille in your chosen design (geometric, classic, or modern). Includes anti-rust primer." },
      { name: "Main Gate Fabrication", price: "From RM 2,800", desc: "Custom main gate with mild steel frame, infill design of your choice, and hot-dip galvanised + powder-coat finish." },
      { name: "On-Site Welding Repair", price: "From RM 280", desc: "Emergency or scheduled welding repair at your location — broken hinges, gate, grille, railing, or structural steel." },
      { name: "Staircase Stringer Fabrication", price: "From RM 420 / linier ft", desc: "Custom mild steel staircase stringer fabricated to your measurements, primed and painted for indoor or outdoor use." },
      { name: "Iron Works", price: "On Quote", desc: "General wrought iron and mild steel works — decorative panels, brackets, frames, trellises, and bespoke metal pieces fabricated to your drawing." },
      { name: "Metal Grille Installation", price: "On Quote", desc: "Installing fabricated window, door, balcony, or air-well grilles onto existing openings, with anti-rust treatment and matching finish." },
      { name: "Metal Gate Repair", price: "On Quote", desc: "Repairing sagging, rusted, or broken gates — hinge renewal, frame straightening, weld repair, and rust treatment with repaint." },
      { name: "Stainless Steel Railing Fabrication", price: "On Quote", desc: "Stainless steel handrails and balustrades for staircases, balconies, and ramps, welded and polished for indoor or outdoor exposure." },
      { name: "Steel Structure & Awning Fabrication", price: "On Quote", desc: "Mild steel awning, canopy, drying-yard, and carport frames fabricated and installed with primer and weather-resistant finish." },
      { name: "Anti-Rust Treatment & Repainting", price: "On Quote", desc: "Wire-brushing, rust conversion, priming, and repainting of existing grilles, gates, railings, and structural steel to extend service life." }
    ],
    process: [
      { step: "01", title: "Site Visit & Design", desc: "We measure, take photographs, capture the design intent (or sketch from a reference), and recommend the right material and finish for the project." },
      { step: "02", title: "Quotation & Lead Time", desc: "Itemized quote covering material, fabrication labour, finish (primer + powder-coat or enamel), installation, and any access equipment." },
      { step: "03", title: "Workshop Fabrication", desc: "Components are cut, bent, and welded in our KL workshop. Quality checks are done at every stage. For complex projects we provide progress photos." },
      { step: "04", title: "On-Site Installation", desc: "Fabricated pieces are delivered, positioned, and welded or bolted on site. We minimize mess and clean up before leaving." },
      { step: "05", title: "Finishing & Handover", desc: "On-site welds are ground smooth, all surfaces are touched up with anti-rust primer, and the agreed finish is applied. For factory powder-coat items, finishing happens before installation." }
    ],
    faqs: [
      { q: "Is powder-coat or enamel paint better for outdoor metal?", a: "Powder-coat is the more durable option and is the industry standard for outdoor metal. It is factory-applied, baked at 200°C, and provides 10+ years of UV and weather resistance. Enamel paint is on-site applied, faster, and cheaper, but typically needs repainting every 3–5 years. For landed house grilles, gates, and railings we always recommend powder-coat. Enamel is suitable for hidden structural items or quick touch-ups." },
      { q: "Can you match the colour of my existing grilles and gates?", a: "We can usually match common powder-coat colours (black, grey, white, dark green) by sending a sample to the powder-coater. For custom colours (e.g. a specific RAL code or a metallic finish), we can order a custom powder-coat batch. There may be a small setup fee for custom colours and a longer lead time. Bring us a sample or a colour code and we will quote accordingly." },
      { q: "Do you do emergency welding repairs?", a: "Yes. We offer same-day emergency welding for landed houses and shoplots in KL & Selangor (subject to availability). Common emergencies: broken gate hinge, snapped grille bar, collapsed railing, vehicle impact on gate. We bring a portable welding machine and can usually complete the repair on site within 1–3 hours." },
      { q: "What is hot-dip galvanising and do I need it?", a: "Hot-dip galvanising is a factory process where steel is dipped in molten zinc to create a thick, durable, anti-corrosion coating. It is recommended for outdoor structural items that will be exposed to rain and humidity for years (e.g. main gate, fence post, structural beam). It adds about RM 3–5 per kg to the cost and 3–5 days to the lead time, but extends the lifespan of outdoor metal by 2–3x. We recommend galvanising for all outdoor structural items." }
    ],
    heroImage: "/hero-welding.svg",
    metaTitle: "Welding & Metal Fabrication KL & Selangor",
    metaDesc: "Custom grilles, gates, structural steel, staircase fabrication, on-site welding repair in KL & Selangor. MIG/TIG welders, mild/stainless/aluminium. From RM280.",
    aioSummary: "KL Servis Rumah provides welding and metal fabrication across KL & Selangor. Custom grilles, gates, staircases, railings, structural steel. Certified welders (MIG, TIG, arc) for mild steel, stainless steel, aluminium. Anti-rust primer + powder-coat or enamel finish. On-site emergency repair available.",
    warranty: "12-Month Welding & Fabrication Warranty",
    i18n: {
      ms: {
        title: "Kimpalan & Fabrikasi Logam",
        tagline: "Grilles kustom, pagar, pembaikan struktur, fabrikasi tangga dan kimpalan di tapak di seluruh KL & Selangor. Dari RM 280.",
        description: "KL Servis Rumah menyediakan kimpalan dan fabrikasi logam di tapak dan bengkel di seluruh Kuala Lumpur dan Selangor. Tukang kimpal bertauliah kami bekerja dengan keluli lembut, keluli tahan karat dan aluminium untuk projek kediaman dan komersial ringan. Perkhidmatan termasuk: grilles tingkap kustom, grilles pintu, fabrikasi pagar utama, fabrikasi stringer tangga, pembaikan keluli struktur (lintel, rasuk, tiang), fabrikasi pagar dan railing, pendakap dan bingkai kustom, serta pembaikan kimpalan kecemasan di tapak. Kami juga memfabrikasi bahagian logam sepadan untuk projek pertukangan atau pengubahsuaian (contohnya rangka keluli untuk pintu barn gelangsar, hood dapur logam kustom, panel logam hiasan). Semua kerja dikemas dengan primer anti-karat dan sama ada powder coating (untuk kemasan kilang) atau cat enamel tahan cuaca (untuk kemasan di tapak).",
        highlights: [
          "Tukang kimpal bertauliah (MIG, TIG dan arc) untuk keluli lembut, keluli tahan karat dan aluminium",
          "Fabrikasi kustom grilles, pagar, tangga, railing dan keluli struktur",
          "Kimpalan di tapak dan pembaikan kecemasan untuk rumah landed dan lot kedai",
          "Primer anti-karat + pilihan kemasan powder-coat atau enamel tahan cuaca",
          "Pembaikan keluli struktur (lintel, rasuk, tiang) dengan sign-off kejuruteraan",
          "Bahagian logam sepadan untuk projek pertukangan, pengubahsuaian dan hiasan"
        ],
        subServices: [
          { name: "Grille Tingkap Kustom", price: "Dari RM 42 / kaki persegi", desc: "Grille tingkap keluli lembut powder-coated dalam reka bentuk pilihan anda (geometri, klasik atau moden). Termasuk primer anti-karat." },
          { name: "Fabrikasi Pagar Utama", price: "Dari RM 2,800", desc: "Pagar utama kustom dengan rangka keluli lembut, reka bentuk isian pilihan anda dan kemasan galvanis celup panas + powder-coat." },
          { name: "Pembaikan Kimpalan Di Tapak", price: "Dari RM 280", desc: "Pembaikan kimpalan kecemasan atau berjadual di lokasi anda — engsel, pagar, grille, railing atau keluli struktur patah." },
          { name: "Fabrikasi Stringer Tangga", price: "Dari RM 420 / kaki linier", desc: "Stringer tangga keluli lembut kustom difabrikasi mengikut ukuran anda, di-primer dan dicat untuk kegunaan dalaman atau luaran." },
          { name: "Kerja Besi", price: "Atas Sebut Harga", desc: "Kerja besi tempa dan keluli lembut am — panel hiasan, braket, rangka, trellis dan komponen logam tersuai difabrikasi mengikut lukisan anda." },
          { name: "Pemasangan Grill Logam", price: "Atas Sebut Harga", desc: "Memasang grill tingkap, pintu, balkoni atau air-well yang telah difabrikasi pada bukaan sedia ada, dengan rawatan kalis karat dan kemasan sepadan." },
          { name: "Pembaikan Pagar Logam", price: "Atas Sebut Harga", desc: "Membaiki pagar yang melendut, berkarat atau patah — pembaharuan engsel, meluruskan rangka, kimpalan semula dan rawatan karat dengan cat semula." },
          { name: "Fabrikasi Railing Keluli Tahan Karat", price: "Atas Sebut Harga", desc: "Pemegang tangan dan balustrade keluli tahan karat untuk tangga, balkoni dan ramp, dikimpal serta digilap untuk kegunaan dalaman atau luaran." },
          { name: "Fabrikasi Struktur Keluli & Awning", price: "Atas Sebut Harga", desc: "Rangka awning, kanopi, ruang jemuran dan carport keluli lembut difabrikasi dan dipasang dengan primer serta kemasan kalis cuaca." },
          { name: "Rawatan Kalis Karat & Cat Semula", price: "Atas Sebut Harga", desc: "Berus dawai, penukaran karat, primer dan cat semula pada grill, pagar, railing dan keluli struktur sedia ada untuk memanjangkan jangka hayat." }
        ],
        process: [
          { step: "01", title: "Lawatan Tapak & Reka Bentuk", desc: "Kami mengukur, mengambil gambar, menangkap niat reka bentuk (atau lakaran daripada rujukan) dan mengesyorkan bahan dan kemasan yang betul untuk projek." },
          { step: "02", title: "Sebut Harga & Masa Tunggu", desc: "Sebut harga terperinci merangkumi bahan, buruh fabrikasi, kemasan (primer + powder-coat atau enamel), pemasangan dan sebarang peralatan akses." },
          { step: "03", title: "Fabrikasi Bengkel", desc: "Komponen dipotong, dibengkok dan dikimpal di bengkel KL kami. Pemeriksaan kualiti dilakukan pada setiap peringkat. Untuk projek kompleks kami menyediakan gambar kemajuan." },
          { step: "04", title: "Pemasangan Di Tapak", desc: "Bahagian fabrikasi dihantar, diletakkan dan dikimpal atau di-bolt di tapak. Kami meminimumkan kekotoran dan membersihkan sebelum pergi." },
          { step: "05", title: "Kemasan & Serahan", desc: "Kimpalan di tapak digilap licin, semua permukaan disentuh dengan primer anti-karat dan kemasan yang dipersetujui disapu. Untuk item powder-coat kilang, kemasan dibuat sebelum pemasangan." }
        ],
        faqs: [
          { q: "Powder-coat atau cat enamel — mana lebih baik untuk logam luar?", a: "Powder-coat ialah pilihan lebih tahan lama dan standard industri untuk logam luar. Ia disapu di kilang, dibakar pada 200°C dan memberikan rintangan UV dan cuaca 10+ tahun. Cat enamel disapu di tapak, lebih pantas dan lebih murah, tetapi biasanya memerlukan cat semula setiap 3–5 tahun. Untuk grilles, pagar dan railing rumah landed kami sentiasa mengesyorkan powder-coat. Enamel sesuai untuk item struktur tersembunyi atau sentuhan pantas." },
          { q: "Boleh anda padankan warna grilles dan pagar sedia ada saya?", a: "Kami biasanya boleh memadankan warna powder-coat biasa (hitam, kelabu, putih, hijau gelap) dengan menghantar sampel kepada powder-coater. Untuk warna kustom (contohnya kod RAL khusus atau kemasan metalik), kami boleh memesan kelompok powder-coat kustom. Mungkin terdapat yuran persediaan kecil untuk warna kustom dan masa tunggu lebih lama. Bawa sampel atau kod warna kepada kami dan kami akan memberi sebut harga sewajarnya." },
          { q: "Adakah anda membuat pembaikan kimpalan kecemasan?", a: "Ya. Kami menawarkan kimpalan kecemasan hari sama untuk rumah landed dan lot kedai di KL & Selangor (tertakluk pada ketersediaan). Kecemasan biasa: engsel pagar patah, bar grille putus, railing runtuh, hentaman kenderaan pada pagar. Kami membawa mesin kimpal mudah alih dan biasanya boleh menyiapkan pembaikan di tapak dalam 1–3 jam." },
          { q: "Apakah galvanis celup panas dan adakah saya memerlukannya?", a: "Galvanis celup panas ialah proses kilang di mana keluli dicelup dalam zink lebur untuk mewujudkan salutan anti-kakisan tebal dan tahan lama. Ia disyorkan untuk item struktur luar yang akan terdedah kepada hujan dan kelembapan bertahun-tahun (contohnya pagar utama, tiang pagar, rasuk struktur). Ia menambah kira-kira RM 3–5 setiap kg kepada kos dan 3–5 hari kepada masa tunggu, tetapi memanjangkan jangka hayat logam luar sebanyak 2–3x. Kami mengesyorkan galvanis untuk semua item struktur luar." }
        ],
        metaTitle: "Kimpalan & Fabrikasi Logam KL & Selangor",
        metaDesc: "Grilles kustom, pagar, keluli struktur, fabrikasi tangga, pembaikan kimpalan di tapak di KL & Selangor. Tukang kimpal MIG/TIG, keluli lembut/tahan karat/aluminium. Dari RM280.",
        aioSummary: "KL Servis Rumah menyediakan kimpalan dan fabrikasi logam di seluruh KL & Selangor. Grilles kustom, pagar, tangga, railing, keluli struktur. Tukang kimpal bertauliah (MIG, TIG, arc) untuk keluli lembut, keluli tahan karat, aluminium. Primer anti-karat + kemasan powder-coat atau enamel. Pembaikan kecemasan di tapak tersedia.",
        warranty: "Jaminan Kimpalan & Fabrikasi 12 Bulan"
      },
      zh: {
        title: "焊接与金属加工",
        tagline: "吉隆坡与雪兰莪的定制防护格栅、大门、结构维修、楼梯制作与现场焊接。从 RM 280 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪提供现场与工厂焊接及金属加工。我们的持证焊工使用低碳钢、不锈钢与铝材，服务住宅与轻型商业项目。服务包括：定制窗户防护格栅、门栅、大门制作、楼梯龙骨制作、结构钢维修（过梁、横梁、立柱）、围栏与栏杆制作、定制支架与框架，以及现场紧急焊接维修。我们还为木工或装修项目制作配套金属件（如谷仓推拉门钢框、定制金属抽油烟机罩、装饰金属板）。所有工件都以防锈底漆打底，饰面可选粉末喷涂（工厂工艺）或耐候磁漆（现场工艺）。",
        highlights: [
          "持证焊工（MIG、TIG 与电弧焊），加工低碳钢、不锈钢与铝材",
          "格栅、大门、楼梯、栏杆与结构钢的定制加工",
          "有地住宅与店铺的现场焊接与紧急维修",
          "防锈底漆 + 粉末喷涂或耐候磁漆饰面可选",
          "结构钢维修（过梁、横梁、立柱），工程师签字确认",
          "为木工、装修与装饰项目制作配套金属件"
        ],
        subServices: [
          { name: "定制窗户防护格栅", price: "从 RM 42 / 平方英尺起", desc: "粉末喷涂低碳钢窗栅，款式任选（几何、经典或现代）。含防锈底漆。" },
          { name: "大门定制", price: "从 RM 2,800 起", desc: "定制大门，低碳钢框架，任选填充设计，热镀锌 + 粉末喷涂饰面。" },
          { name: "现场焊接维修", price: "从 RM 280 起", desc: "上门紧急或预约焊接维修——铰链、大门、格栅、栏杆或结构钢断裂。" },
          { name: "楼梯龙骨制作", price: "从 RM 420 / 延英尺起", desc: "按您尺寸定制的低碳钢楼梯龙骨，底漆加面漆，室内外皆可。" },
          { name: "铁艺工程", price: "依报价", desc: "各类铁艺与低碳钢制作——装饰花板、支架、框架、花架及按图定制的金属构件。" },
          { name: "金属格栅安装", price: "依报价", desc: "将制作完成的窗栅、门栅、阳台或天井格栅安装到现有洞口，并做防锈处理与配套饰面。" },
          { name: "金属大门维修", price: "依报价", desc: "维修下垂、生锈或断裂的大门——更换铰链、校正框架、补焊，并做除锈与重新喷漆。" },
          { name: "不锈钢栏杆制作", price: "依报价", desc: "楼梯、阳台与坡道用不锈钢扶手与护栏，焊接抛光处理，适用于室内外环境。" },
          { name: "钢结构与雨棚制作", price: "依报价", desc: "低碳钢雨棚、遮阳篷、晒衣架与车棚骨架的制作与安装，含底漆及耐候面漆。" },
          { name: "除锈处理与重新喷漆", price: "依报价", desc: "对现有格栅、大门、栏杆与结构钢进行钢刷除锈、锈转化、底漆与重新喷漆，延长使用寿命。" }
        ],
        process: [
          { step: "01", title: "上门测量与设计", desc: "我们测量、拍照、记录设计意图（或按参考图绘制草图），并为项目推荐合适的材料与饰面。" },
          { step: "02", title: "报价与交期", desc: "逐项报价涵盖材料、加工人工、饰面（底漆 + 粉末喷涂或磁漆）、安装与任何登高设备。" },
          { step: "03", title: "工厂制作", desc: "部件在我们吉隆坡工厂切割、折弯并焊接。每个环节都有质检。复杂项目我们提供进度照片。" },
          { step: "04", title: "现场安装", desc: "成品运抵现场，定位后焊接或螺栓固定。我们把现场脏乱降到最低，离场前清理干净。" },
          { step: "05", title: "收尾与交付", desc: "现场焊缝打磨平滑，所有表面补涂防锈底漆，按约定工艺饰面。工厂粉末喷涂件在安装前完成饰面。" }
        ],
        faqs: [
          { q: "户外金属用粉末喷涂还是磁漆好？", a: "粉末喷涂更耐久，是户外金属的行业标准。它在工厂施工、200°C 烘烤固化，可提供 10 年以上的抗紫外线与耐候性能。磁漆现场施工、更快更便宜，但通常每 3–5 年需要重刷。有地住宅的格栅、大门与栏杆我们总是推荐粉末喷涂。磁漆适合隐蔽的结构件或快速修补。" },
          { q: "能配出我现有格栅和大门的颜色吗？", a: "常见粉末喷涂颜色（黑、灰、白、深绿）我们通常可以寄样品给喷涂厂配色。定制颜色（如特定 RAL 色号或金属色），我们可以订做整批粉末。定制颜色可能有少量开机费且交期更长。给我们一块样品或色号，我们据此报价。" },
          { q: "你们接紧急焊接维修吗？", a: "接。我们为吉隆坡与雪兰莪的有地住宅和店铺提供当日紧急焊接（视档期）。常见紧急情况：大门铰链断裂、格栅杆断开、栏杆倒塌、车辆撞门。我们携带便携式焊机，通常 1–3 小时内可在现场完成维修。" },
          { q: "什么是热镀锌？我需要吗？", a: "热镀锌是把钢材浸入熔融锌液形成厚实耐久防腐层的工厂工艺。建议用于长期暴露在雨水中高湿环境的户外结构件（如大门、围栏立柱、结构梁）。每公斤大约增加 RM 3–5 成本，交期延长 3–5 天，但户外金属寿命可延长 2–3 倍。所有户外结构件我们都建议镀锌。" }
        ],
        metaTitle: "吉隆坡与雪兰莪焊接与金属加工",
        metaDesc: "吉隆坡与雪兰莪定制格栅、大门、结构钢、楼梯制作、现场焊接维修。MIG/TIG 焊工，低碳钢/不锈钢/铝材。从 RM280 起。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供焊接与金属加工。定制格栅、大门、楼梯、栏杆、结构钢。持证焊工（MIG、TIG、电弧）加工低碳钢、不锈钢、铝材。防锈底漆 + 粉末喷涂或磁漆饰面。可提供现场紧急维修。",
        warranty: "12 个月焊接与加工保修"
      }
    }
  },

  // ── 26. AIRCON SERVICES ──────────────────────────────────────────────
  "aircon": {
    slug: "aircon",
    title: "Aircon Service, Repair & Installation",
    tagline: "Air-conditioner basic servicing, chemical wash, chemical overhaul, gas top-up, repair, new installation and dismantling for homes and offices across KL & Selangor. From RM 129.",
    description:
      "KL Servis Rumah provides complete air-conditioner servicing, repair and installation across Kuala Lumpur and Selangor, covering every major brand — Daikin, Panasonic, Mitsubishi Electric, York, Acson, Carrier, Midea, Haier, Toshiba, Hitachi, Samsung, LG, Sharp, Fujitsu, Gree, National, Hisense, Aux, TCL and Isonic, in both inverter and non-inverter models. Our technicians handle wall-mounted split units, window units and commercial ceiling cassettes. Every service starts from a transparent minimum price: basic servicing from RM 129, pressure chemical wash from RM 156, full chemical overhaul from RM 286, gas top-up from RM 2.50 per PSI, repair diagnosis from RM 114 and new installation from RM 259. These are minimum starting prices — the actual cost depends on the nature and scope of your job, and our technical team confirms the final price after a site visit or after reviewing your photos. Prices include labour and standard/basic materials; premium brands or higher-grade materials are charged extra and quoted separately. Every service and repair is covered by a 1-month workmanship warranty, with a 3-month warranty on spare parts.",
    startPrice: "RM 129",
    icon: "snowflake",
    highlights: [
      "All 20 major aircon brands serviced — inverter and non-inverter, wall, window and cassette",
      "Transparent minimum starting prices with the final quote confirmed after inspection or photo review",
      "1-month workmanship warranty on service and repair, 3-month warranty on spare parts",
      "Full chemical overhaul that fully dismantles and deep-cleans the unit to fix chronic water leaks",
      "New installation includes 7 ft copper pipe, insulation, wiring, drain pipe, bracket, vacuum commissioning and a run/cooling test",
      "Brand-agnostic repair with genuine spare parts, from capacitors and fan motors to compressors and PCB boards"
    ],
    subServices: [
      { name: "Basic Servicing", price: "From RM 129", desc: "Filter and coil cleaning, drainage check, gas pressure and cooling test for wall-mounted units from RM 129." },
      { name: "Chemical Wash", price: "From RM 156", desc: "Pressure chemical wash of coils and blower without full dismantling, from RM 156." },
      { name: "Chemical Overhaul", price: "From RM 286", desc: "Full dismantle-and-wash overhaul that deep-cleans every part and fixes chronic water leaks, from RM 286." },
      { name: "Gas Top-Up", price: "RM 2.50–3.00 / PSI", desc: "R22, R410A and R32 refill charged per PSI, with a structural leak check included from RM 114." },
      { name: "Installation", price: "From RM 259", desc: "Wall-mounted, cassette and window installation from RM 259 — installation only, unit not included." },
      { name: "Repair", price: "From RM 114", desc: "Diagnostic fee from RM 114 (waived if repaired same visit) plus spare parts from RM 195 to RM 1,040." },
      { name: "Ceiling Cassette", price: "From RM 195", desc: "Commercial ceiling cassette servicing, chemical wash, overhaul and installation from RM 195." },
      { name: "Dismantling & Relocation", price: "From RM 117", desc: "Dismantle only from RM 117, nearby reinstall from RM 325, and different-location relocation from RM 455." }
    ],
    process: [
      { step: "01", title: "Inspection & Diagnosis", desc: "We inspect the unit, check airflow, gas pressure, drainage and cooling performance, and confirm the exact scope and price before starting." },
      { step: "02", title: "Transparent Quote", desc: "You receive a clear minimum starting price up front, with the final figure confirmed after the technician reviews the unit or your photos." },
      { step: "03", title: "Servicing or Repair", desc: "For servicing we clean the filters, coils and blower; for repair we replace the faulty part and re-test the whole system." },
      { step: "04", title: "Gas, Leak & Cooling Test", desc: "We top up refrigerant to the correct PSI, run a leak check, and verify the unit cools properly and drains without leaking." },
      { step: "05", title: "Handover & Warranty", desc: "We walk you through what was done, confirm the warranty terms, and leave the area clean with the unit running at full cooling capacity." }
    ],
    faqs: [
      { q: "Are your aircon prices fixed or starting prices?", a: "Every price on this page is a minimum starting price, not a fixed figure. The actual cost depends on the nature and scope of your job, and our technical team confirms the final price after a site visit or after reviewing your photos." },
      { q: "Is the aircon unit included in your installation price?", a: "No. Our installation price covers installation only — the aircon unit is not included, and you supply your own unit. Installation includes 7 ft of copper pipe, insulation, electrical wiring, drain pipe, bracket, vacuum pump commissioning and a run/cooling test. Extra copper beyond 7 ft is charged per foot." },
      { q: "How is gas top-up charged?", a: "Gas top-up is charged on the actual PSI required after the technician inspects on site. R22 is RM 2.50/PSI while R410A and R32 are RM 3.00/PSI. We only refill the amount needed, and a leak check is included." },
      { q: "What warranty do you provide on aircon work?", a: "Every aircon service and repair carries a 1-month workmanship warranty, and spare parts such as capacitors, motors and PCB boards carry a 3-month warranty. If the same issue returns within the warranty period, we return to fix it free of charge." },
      { q: "Which aircon brands do you service?", a: "We service all 20 major brands in inverter and non-inverter models: Daikin, Panasonic, Mitsubishi Electric, York, Acson, Carrier, Midea, Haier, Toshiba, Hitachi, Samsung, LG, Sharp, Fujitsu, Gree, National, Hisense, Aux, TCL and Isonic — across wall-mounted, window and ceiling cassette units." }
    ],
    heroImage: "/hero-aircon.svg",
    metaTitle: "Aircon Service, Repair & Installation KL & Selangor",
    metaDesc: "Aircon servicing, chemical wash, overhaul, gas top-up, repair and installation in KL & Selangor. From RM 129. 20 brands, 1-month workmanship warranty. Request a quote.",
    aioSummary: "KL Servis Rumah provides aircon servicing, chemical wash, chemical overhaul, gas top-up, repair and installation across KL & Selangor. Basic servicing from RM 129, chemical wash from RM 156, overhaul from RM 286, installation from RM 259. 20 brands, inverter and non-inverter. 1-month workmanship warranty, 3-month parts warranty.",
    warranty: "1-Month Workmanship Warranty (3-Month Parts Warranty)",
    i18n: {
      ms: {
        title: "Servis, Baiki & Pemasangan Aircond",
        tagline: "Servis asas, cucian kimia, overhaul kimia, top-up gas, pembaikan, pemasangan baharu dan pembongkaran penghawa dingin untuk rumah dan pejabat di seluruh KL & Selangor. Dari RM 129.",
        description:
          "KL Servis Rumah menyediakan servis, pembaikan dan pemasangan penghawa dingin yang lengkap di seluruh Kuala Lumpur dan Selangor, meliputi setiap jenama utama — Daikin, Panasonic, Mitsubishi Electric, York, Acson, Carrier, Midea, Haier, Toshiba, Hitachi, Samsung, LG, Sharp, Fujitsu, Gree, National, Hisense, Aux, TCL dan Isonic, untuk model inverter dan bukan inverter. Juruteknik kami mengendalikan unit split dinding, unit tingkap dan kaset siling komersial. Setiap servis bermula dari harga minimum yang telus: servis asas dari RM 129, cucian kimia tekanan dari RM 156, overhaul kimia penuh dari RM 286, top-up gas dari RM 2.50 setiap PSI, diagnosis pembaikan dari RM 114 dan pemasangan baharu dari RM 259. Ini adalah harga permulaan minimum — kos sebenar bergantung pada sifat dan skop kerja anda, dan pasukan teknikal kami mengesahkan harga akhir selepas lawatan tapak atau selepas menyemak foto anda. Harga termasuk tenaga kerja dan bahan standard/asas; jenama premium atau bahan gred lebih tinggi dikenakan caj tambahan dan disebut harga berasingan. Setiap servis dan pembaikan dilindungi jaminan kerja 1 bulan, dengan jaminan 3 bulan pada alat ganti.",
        highlights: [
          "Semua 20 jenama aircond utama diservis — inverter dan bukan inverter, dinding, tingkap dan kaset",
          "Harga permulaan minimum yang telus dengan sebut harga akhir disahkan selepas pemeriksaan atau semakan foto",
          "Jaminan kerja 1 bulan untuk servis dan pembaikan, jaminan 3 bulan pada alat ganti",
          "Overhaul kimia penuh yang membuka dan mencuci unit secara menyeluruh untuk membaiki kebocoran air kronik",
          "Pemasangan baharu termasuk paip tembaga 7 kaki, penebat, pendawaian, paip saliran, braket, pentauliahan pam vakum dan ujian penyejukan",
          "Pembaikan tanpa mengira jenama dengan alat ganti asli, dari kapasitor dan motor kipas hingga pemampat dan papan PCB"
        ],
        subServices: [
          { name: "Servis Asas", price: "Dari RM 129", desc: "Pembersihan penapis dan gegelung, pemeriksaan saliran, tekanan gas dan ujian penyejukan untuk unit dinding dari RM 129." },
          { name: "Cucian Kimia", price: "Dari RM 156", desc: "Cucian kimia tekanan gegelung dan blower tanpa pembongkaran penuh, dari RM 156." },
          { name: "Overhaul Kimia", price: "Dari RM 286", desc: "Overhaul buka-dan-cuci penuh yang membersihkan setiap bahagian dan membaiki kebocoran air kronik, dari RM 286." },
          { name: "Top-Up Gas", price: "RM 2.50–3.00 / PSI", desc: "Isian R22, R410A dan R32 dikenakan setiap PSI, dengan pemeriksaan kebocoran struktur disertakan dari RM 114." },
          { name: "Pemasangan", price: "Dari RM 259", desc: "Pemasangan unit dinding, kaset dan tingkap dari RM 259 — pemasangan sahaja, unit tidak termasuk." },
          { name: "Pembaikan", price: "Dari RM 114", desc: "Yuran diagnosis dari RM 114 (diketepikan jika dibaiki lawatan sama) serta alat ganti dari RM 195 hingga RM 1,040." },
          { name: "Kaset Siling", price: "Dari RM 195", desc: "Servis, cucian kimia, overhaul dan pemasangan kaset siling komersial dari RM 195." },
          { name: "Pembongkaran & Pindahan", price: "Dari RM 117", desc: "Bongkar sahaja dari RM 117, pasang semula berdekatan dari RM 325, dan pindahan lokasi berbeza dari RM 455." }
        ],
        process: [
          { step: "01", title: "Pemeriksaan & Diagnosis", desc: "Kami memeriksa unit, menyemak aliran udara, tekanan gas, saliran dan prestasi penyejukan, lalu mengesahkan skop dan harga yang tepat sebelum bermula." },
          { step: "02", title: "Sebut Harga Telus", desc: "Anda menerima harga permulaan minimum yang jelas, dengan angka akhir disahkan selepas juruteknik menyemak unit atau foto anda." },
          { step: "03", title: "Servis atau Pembaikan", desc: "Untuk servis kami membersihkan penapis, gegelung dan blower; untuk pembaikan kami menggantikan bahagian rosak dan menguji semula keseluruhan sistem." },
          { step: "04", title: "Ujian Gas, Kebocoran & Penyejukan", desc: "Kami menambah bahan pendingin ke PSI yang betul, menjalankan pemeriksaan kebocoran, dan mengesahkan unit menyejuk dengan betul serta mengalir tanpa bocor." },
          { step: "05", title: "Serahan & Jaminan", desc: "Kami menerangkan apa yang telah dilakukan, mengesahkan terma jaminan, dan meninggalkan kawasan bersih dengan unit beroperasi pada kapasiti penyejukan penuh." }
        ],
        faqs: [
          { q: "Adakah harga aircond anda tetap atau harga permulaan?", a: "Setiap harga di halaman ini adalah harga permulaan minimum, bukan angka tetap. Kos sebenar bergantung pada sifat dan skop kerja anda, dan pasukan teknikal kami mengesahkan harga akhir selepas lawatan tapak atau selepas menyemak foto anda." },
          { q: "Adakah unit aircond termasuk dalam harga pemasangan anda?", a: "Tidak. Harga pemasangan kami meliputi pemasangan sahaja — unit aircond tidak termasuk, dan anda membekalkan unit sendiri. Pemasangan termasuk paip tembaga 7 kaki, penebat, pendawaian elektrik, paip saliran, braket, pentauliahan pam vakum dan ujian penyejukan. Tembaga tambahan melebihi 7 kaki dikenakan caj setiap kaki." },
          { q: "Bagaimana top-up gas dikenakan caj?", a: "Top-up gas dikenakan pada PSI sebenar yang diperlukan selepas juruteknik memeriksa di tapak. R22 ialah RM 2.50/PSI manakala R410A dan R32 ialah RM 3.00/PSI. Kami hanya mengisi jumlah yang diperlukan, dan pemeriksaan kebocoran disertakan." },
          { q: "Apakah jaminan yang anda berikan untuk kerja aircond?", a: "Setiap servis dan pembaikan aircond membawa jaminan kerja 1 bulan, dan alat ganti seperti kapasitor, motor dan papan PCB membawa jaminan 3 bulan. Jika masalah sama berulang dalam tempoh jaminan, kami kembali untuk membaikinya secara percuma." },
          { q: "Jenama aircond apa yang anda servis?", a: "Kami menyervis kesemua 20 jenama utama dalam model inverter dan bukan inverter: Daikin, Panasonic, Mitsubishi Electric, York, Acson, Carrier, Midea, Haier, Toshiba, Hitachi, Samsung, LG, Sharp, Fujitsu, Gree, National, Hisense, Aux, TCL dan Isonic — merangkumi unit dinding, tingkap dan kaset siling." }
        ],
        metaTitle: "Servis, Baiki & Pemasangan Aircond KL & Selangor",
        metaDesc: "Servis aircond, cucian kimia, overhaul, top-up gas, pembaikan dan pemasangan di KL & Selangor. Dari RM 129. 20 jenama, jaminan kerja 1 bulan. Minta sebut harga.",
        aioSummary: "KL Servis Rumah menyediakan servis aircond, cucian kimia, overhaul kimia, top-up gas, pembaikan dan pemasangan di seluruh KL & Selangor. Servis asas dari RM 129, cucian kimia dari RM 156, overhaul dari RM 286, pemasangan dari RM 259. 20 jenama, inverter dan bukan inverter. Jaminan kerja 1 bulan, jaminan alat ganti 3 bulan.",
        warranty: "Jaminan Kerja 1 Bulan (Jaminan Alat Ganti 3 Bulan)"
      },
      zh: {
        title: "空调保养、维修与安装",
        tagline: "为吉隆坡与雪兰莪的住宅和办公室提供空调基本保养、化学清洗、全面大修、加雪种、维修、新安装与拆除。从 RM 129 起。",
        description:
          "KL Servis Rumah 在吉隆坡与雪兰莪全境提供完整的空调保养、维修与安装服务，覆盖所有主流品牌——Daikin、Panasonic、Mitsubishi Electric、York、Acson、Carrier、Midea、Haier、Toshiba、Hitachi、Samsung、LG、Sharp、Fujitsu、Gree、National、Hisense、Aux、TCL 与 Isonic，并支持变频与非变频机型。我们的技术员可处理挂壁式分体机、窗式机与商用天花卡式机。每项服务都从透明的最低起价开始：基本保养从 RM 129 起，高压化学清洗从 RM 156 起，全面化学大修从 RM 286 起，加雪种从每 PSI RM 2.50 起，维修诊断从 RM 114 起，新安装从 RM 259 起。这些都是最低起价——实际费用取决于您工程的性质与范围，我们的技术团队会在现场勘查或查看您的照片后确认最终价格。价格包含人工与标准/基础材料；优质品牌或更高等级的材料需另计并单独报价。每项保养与维修均享有 1 个月工艺保修，配件享有 3 个月保修。",
        highlights: [
          "保养全部 20 个主流空调品牌——变频与非变频，挂壁、窗式与天花卡式",
          "透明的最低起价，最终报价在现场勘查或照片审核后确认",
          "保养与维修享有 1 个月工艺保修，配件享有 3 个月保修",
          "全面化学大修，整机拆下深度清洗，根治顽固漏水问题",
          "新安装含 7 英尺铜管、保温棉、电线、排水管、支架、真空泵调试与制冷运行测试",
          "不限品牌的维修，使用正品配件，从电容、风扇电机到压缩机与 PCB 主板"
        ],
        subServices: [
          { name: "基本保养", price: "从 RM 129 起", desc: "挂壁机滤网与蒸发器清洗、排水检查、雪种压力与制冷测试，从 RM 129 起。" },
          { name: "化学清洗", price: "从 RM 156 起", desc: "无需整机拆下的蒸发器与风轮高压化学清洗，从 RM 156 起。" },
          { name: "化学大修", price: "从 RM 286 起", desc: "整机拆下逐件深度清洗、根治慢性漏水的大修，从 RM 286 起。" },
          { name: "加雪种", price: "RM 2.50–3.00 / PSI", desc: "R22、R410A 与 R32 按每 PSI 计费，结构性检漏从 RM 114 起并已包含。" },
          { name: "安装", price: "从 RM 259 起", desc: "挂壁、卡式与窗式机安装从 RM 259 起——仅含安装，不含主机。" },
          { name: "维修", price: "从 RM 114 起", desc: "诊断费从 RM 114 起（当天维修免收），配件从 RM 195 至 RM 1,040。" },
          { name: "天花卡式机", price: "从 RM 195 起", desc: "商用天花卡式机的保养、化学清洗、大修与安装从 RM 195 起。" },
          { name: "拆除与搬迁", price: "从 RM 117 起", desc: "仅拆除从 RM 117 起，就近重装从 RM 325 起，异地搬迁从 RM 455 起。" }
        ],
        process: [
          { step: "01", title: "检查与诊断", desc: "我们检查主机，检测风量、雪种压力、排水与制冷性能，并在开工前确认准确范围与价格。" },
          { step: "02", title: "透明报价", desc: "您会先拿到清晰的最低起价，最终金额在技术员检查主机或查看您的照片后确认。" },
          { step: "03", title: "保养或维修", desc: "保养时我们清洗滤网、蒸发器与风轮；维修时更换故障部件并重新测试整个系统。" },
          { step: "04", title: "雪种、检漏与制冷测试", desc: "我们将制冷剂加至正确 PSI，进行检漏，并确认机器正常制冷、排水无渗漏。" },
          { step: "05", title: "交付与保修", desc: "我们向您说明所做工作、确认保修条款，并清理现场，让机器以满负荷制冷状态运行。" }
        ],
        faqs: [
          { q: "你们的空调价格是固定价还是起价？", a: "本页所有价格都是最低起价，而非固定价。实际费用取决于您工程的性质与范围，我们的技术团队会在现场勘查或查看您的照片后确认最终价格。" },
          { q: "安装价格包含空调主机吗？", a: "不包含。我们的安装价仅含安装——空调主机不包含在内，主机由您自备。安装包含 7 英尺铜管、保温棉、电线、排水管、支架、真空泵调试与制冷运行测试。超过 7 英尺的铜管按每英尺另计。" },
          { q: "加雪种如何收费？", a: "加雪种按技术员现场检测后实际所需的 PSI 计费。R22 为每 PSI RM 2.50，R410A 与 R32 为每 PSI RM 3.00。我们只加所需用量，并包含检漏。" },
          { q: "你们的空调工程提供什么保修？", a: "每项空调保养与维修享有 1 个月工艺保修，电容、电机与 PCB 主板等配件享有 3 个月保修。若同一问题在保修期内复发，我们免费上门修复。" },
          { q: "你们保养哪些空调品牌？", a: "我们保养全部 20 个主流品牌的变频与非变频机型：Daikin、Panasonic、Mitsubishi Electric、York、Acson、Carrier、Midea、Haier、Toshiba、Hitachi、Samsung、LG、Sharp、Fujitsu、Gree、National、Hisense、Aux、TCL 与 Isonic——覆盖挂壁、窗式与天花卡式机。" }
        ],
        metaTitle: "吉隆坡与雪兰莪空调保养、维修与安装",
        metaDesc: "吉隆坡与雪兰莪空调保养、化学清洗、大修、加雪种、维修与安装。从 RM 129 起。20 个品牌，1 个月工艺保修。立即询价。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供空调保养、化学清洗、化学大修、加雪种、维修与安装。基本保养从 RM 129 起，化学清洗从 RM 156 起，大修从 RM 286 起，安装从 RM 259 起。20 个品牌，变频与非变频。1 个月工艺保修，3 个月配件保修。",
        warranty: "1 个月工艺保修（3 个月配件保修）"
      }
    }
  },

  // ── 27. KITCHEN RENOVATION ────────────────────────────────────────
  "kitchen-renovation": {
    slug: "kitchen-renovation",
    title: "Kitchen Renovation",
    tagline: "Complete kitchen makeover: hacking, tiling, waterproofing, cabinetry, countertop, plumbing, electrical and lighting across KL & Selangor. From RM 8,000.",
    description:
      "KL Servis Rumah delivers full kitchen renovation services across Kuala Lumpur and Selangor for terrace, semi-D, bungalow, condo and apartment homes. We handle every trade in one team: old kitchen hacking and debris disposal, floor and wall retiling, cement screeding and waterproofing, custom kitchen cabinets (base, wall, tall units), quartz or granite countertop, backsplash tiling, kitchen island or peninsula, wet and dry kitchen separation, plumbing reroute for sink and dishwasher, electrical rewiring for oven, hob, hood and extra power points, and LED lighting installation. Each kitchen is designed around Malaysian cooking habits — heavy wok cooking, high heat, oil splatter and frequent washing — with durable, low-maintenance materials and proper ventilation for cooker hood. We provide a single fixed-price quotation, 3D cabinet layout, Gantt timeline and daily WhatsApp progress photos, coordinated by one project manager.",
    startPrice: "RM 8,000",
    icon: "cooking-pot",
    highlights: [
      "One team for hacking, tiling, waterproofing, carpentry, countertop, plumbing, electrical and lighting",
      "Custom kitchen cabinets: base, wall, tall units, pantry, island — built to your kitchen size",
      "Quartz, granite or sintered stone countertop with backsplash options: porcelain, mosaic, subway",
      "Designed for Malaysian cooking: heat-resistant, oil-proof, easy-clean finishes and strong hood ventilation",
      "Wet and dry kitchen separation with proper drainage slope and floor trap positioning",
      "Fixed-price quote with 3D cabinet view, milestone payments and 12-month workmanship warranty"
    ],
    subServices: [
      { name: "Full Kitchen Renovation", price: "From RM 8,000", desc: "Complete kitchen rebuild: hacking, waterproofing, tiling, cabinets, countertop, plumbing, electrical and painting." },
      { name: "Kitchen Cabinet Installation", price: "From RM 4,500", desc: "Custom base, wall and tall cabinets with soft-close hinges, drawer systems and pantry pull-outs." },
      { name: "Kitchen Countertop Replacement", price: "From RM 1,800", desc: "Quartz, granite or sintered stone countertop supply and install with sink cut-out and edge profile." },
      { name: "Kitchen Backsplash Tile Installation", price: "From RM 18 / sq ft", desc: "Porcelain, ceramic, mosaic or subway backsplash tiling with grout colour matching and anti-mould seal." },
      { name: "Kitchen Island & Peninsula", price: "From RM 2,200", desc: "Custom island or peninsula with storage, breakfast bar, power points and waterfall edge option." },
      { name: "Wet Kitchen Renovation", price: "From RM 6,500", desc: "Heavy-duty wet kitchen for wok cooking: floor trap, stainless steel sink, wall tiles to ceiling, strong ventilation." },
      { name: "Dry Kitchen Renovation", price: "From RM 5,500", desc: "Modern dry kitchen with island, display cabinets, wine rack and ambient lighting for entertaining." },
      { name: "Kitchen Extension", price: "On Quote", desc: "Rear or side kitchen extension with brickwork, roofing, waterproofing and DBKL/MBSA guidance where required." },
      { name: "Kitchen Plumbing & Electrical", price: "From RM 950", desc: "Sink, dishwasher, water filter point, oven, hob, hood, extra 13A/15A power points and LED lighting." }
    ],
    process: [
      { step: "01", title: "Site Measure & Design Brief", desc: "We measure your kitchen, check existing plumbing and electrical, discuss cooking habits, storage needs, appliance list and budget." },
      { step: "02", title: "3D Layout & Fixed Quote", desc: "You receive a 3D cabinet layout, countertop sample, tile options and an itemized fixed-price quote covering all trades." },
      { step: "03", title: "Hacking & Rough-In", desc: "Old tiles, cabinets and countertop are hacked, debris removed, new plumbing and electrical points are rerouted, waterproofing and screeding done." },
      { step: "04", title: "Tiling, Carpentry & Countertop", desc: "Floor and wall tiles installed, custom cabinets fabricated and installed, countertop templated, cut and mounted with sink and hob cut-outs." },
      { step: "05", title: "Appliances, Lighting & Handover", desc: "Hood, hob, oven, sink, tap, dishwasher and lights are fitted, tested, sealed and the kitchen is cleaned for handover." }
    ],
    faqs: [
      { q: "How long does a full kitchen renovation take in KL?", a: "A standard 10x12 ft kitchen in a terrace or condo typically takes 2 to 3 weeks: 2–3 days hacking, 3–4 days plumbing/electrical and waterproofing, 4–5 days tiling, 5–7 days cabinet fabrication (off-site) plus 2–3 days installation, then countertop and appliances. Larger kitchens or extensions take 4 to 6 weeks." },
      { q: "What is the difference between wet kitchen and dry kitchen renovation?", a: "Wet kitchen is designed for heavy Malaysian cooking — wok frying, high heat, oil and water. It needs full-height wall tiles, floor trap with proper slope, stainless steel sink, strong hood ventilation and heat-resistant countertop. Dry kitchen is for light prep, entertaining and display — it focuses on island, pantry, display cabinets, wine rack and ambient lighting. Many terrace and semi-D homes in KL have both." },
      { q: "Do you provide kitchen cabinets and countertop?", a: "Yes. We supply and install custom kitchen cabinets in melamine, plywood with laminate, or aluminium carcass options, with soft-close hinges and drawer systems. Countertop options: quartz (most popular, low maintenance), granite (heat-resistant) or sintered stone (premium, scratch and heat-proof). We template on site for exact fit and handle sink and hob cut-outs." },
      { q: "Can I stay at home during kitchen renovation?", a: "For condo kitchens you can usually stay — we seal the kitchen with plastic containment to limit dust. For landed homes with full hacking you may want to set up a temporary cooking area. We schedule noisy hacking within management-approved hours and clean daily." }
    ],
    heroImage: "/hero/home-services-kitchen-cabinet-kl.jpg",
    metaTitle: "Kitchen Renovation Contractor KL & Selangor | From RM8,000",
    metaDesc: "Full kitchen renovation in KL & Selangor: hacking, tiling, waterproofing, custom cabinets, quartz countertop, plumbing, electrical. Fixed price, 3D layout. Get quote on WhatsApp.",
    aioSummary: "KL Servis Rumah provides kitchen renovation across KL & Selangor: hacking, retiling, waterproofing, custom cabinets, quartz/granite countertop, backsplash, island, wet/dry kitchen, plumbing and electrical. Designed for Malaysian wok cooking, fixed price, 3D layout, milestone payments.",
    warranty: "12-Month Workmanship Warranty",
    i18n: {
      ms: {
        title: "Pengubahsuaian Dapur",
        tagline: "Makeover dapur lengkap: pecah, jubin, kalis air, kabinet, countertop, paip, elektrik dan pencahayaan di KL & Selangor. Dari RM 8,000.",
        description: "KL Servis Rumah menyediakan perkhidmatan pengubahsuaian dapur penuh di seluruh Kuala Lumpur dan Selangor untuk rumah teres, semi-D, banglo, kondominium dan apartmen. Kami mengendalikan setiap kerja dalam satu pasukan: pemecahan dapur lama dan pelupusan serpihan, jubin semula lantai dan dinding, screed simen dan kalis air, kabinet dapur custom (unit bawah, atas, tinggi), countertop quartz atau granit, jubin backsplash, island atau peninsula dapur, pemisahan dapur basah dan kering, ubah hala paip untuk singki dan dishwasher, pendawaian elektrik untuk oven, hob, hood dan tambahan power point, serta pemasangan lampu LED. Setiap dapur direka mengikut tabiat memasak Malaysia — masakan kuali berat, haba tinggi, percikan minyak dan kerap mencuci — dengan bahan tahan lasak, penyelenggaraan rendah dan pengudaraan yang betul untuk hood dapur. Kami menyediakan satu sebut harga harga tetap, susun atur kabinet 3D, garis masa Gantt dan foto kemajuan harian WhatsApp, diselaraskan oleh satu pengurus projek.",
        highlights: [
          "Satu pasukan untuk pecah, jubin, kalis air, pertukangan, countertop, paip, elektrik dan pencahayaan",
          "Kabinet dapur custom: unit bawah, dinding, tinggi, pantry, island — dibina mengikut saiz dapur anda",
          "Countertop quartz, granit atau sintered stone dengan pilihan backsplash: porselin, mozek, subway",
          "Direka untuk masakan Malaysia: kemasan tahan haba, kalis minyak, mudah bersih dan pengudaraan hood yang kuat",
          "Pemisahan dapur basah dan kering dengan cerun saliran dan kedudukan floor trap yang betul",
          "Sebut harga harga tetap dengan pandangan kabinet 3D, pembayaran pencapaian dan jaminan kerja 12 bulan"
        ],
        subServices: [
          { name: "Pengubahsuaian Dapur Penuh", price: "Dari RM 8,000", desc: "Binaan semula dapur lengkap: pecah, kalis air, jubin, kabinet, countertop, paip, elektrik dan pengecatan." },
          { name: "Pemasangan Kabinet Dapur", price: "Dari RM 4,500", desc: "Kabinet bawah, dinding dan tinggi custom dengan engsel soft-close, sistem laci dan pull-out pantry." },
          { name: "Penggantian Countertop Dapur", price: "Dari RM 1,800", desc: "Bekalan dan pemasangan countertop quartz, granit atau sintered stone dengan potongan singki dan profil tepi." },
          { name: "Pemasangan Jubin Backsplash Dapur", price: "Dari RM 18 / kaki persegi", desc: "Jubin backsplash porselin, seramik, mozek atau subway dengan pemadanan warna grout dan seal anti-kulat." },
          { name: "Island & Peninsula Dapur", price: "Dari RM 2,200", desc: "Island atau peninsula custom dengan storan, bar sarapan, power point dan pilihan waterfall edge." },
          { name: "Pengubahsuaian Dapur Basah", price: "Dari RM 6,500", desc: "Dapur basah tugas berat untuk masakan kuali: floor trap, singki keluli tahan karat, jubin dinding sampai siling, pengudaraan kuat." },
          { name: "Pengubahsuaian Dapur Kering", price: "Dari RM 5,500", desc: "Dapur kering moden dengan island, kabinet paparan, rak wain dan pencahayaan ambien untuk hiburan." },
          { name: "Sambungan Dapur", price: "Atas Sebut Harga", desc: "Sambungan dapur belakang atau sisi dengan kerja bata, bumbung, kalis air dan panduan DBKL/MBSA jika diperlukan." },
          { name: "Paip & Elektrik Dapur", price: "Dari RM 950", desc: "Titik singki, dishwasher, penapis air, oven, hob, hood, tambahan power point 13A/15A dan pencahayaan LED." }
        ],
        process: [
          { step: "01", title: "Ukur Tapak & Brief Reka Bentuk", desc: "Kami mengukur dapur anda, memeriksa paip dan elektrik sedia ada, membincangkan tabiat memasak, keperluan storan, senarai perkakas dan bajet." },
          { step: "02", title: "Susun Atur 3D & Sebut Harga Tetap", desc: "Anda menerima susun atur kabinet 3D, sampel countertop, pilihan jubin dan sebut harga tetap terperinci merangkumi semua kerja." },
          { step: "03", title: "Pecah & Rough-In", desc: "Jubin, kabinet dan countertop lama dipecah, serpihan disingkirkan, titik paip dan elektrik baru dihalakan semula, kalis air dan screed dilakukan." },
          { step: "04", title: "Jubin, Pertukangan & Countertop", desc: "Jubin lantai dan dinding dipasang, kabinet custom difabrikasi dan dipasang, countertop diukur, dipotong dan dipasang dengan potongan singki dan hob." },
          { step: "05", title: "Perkakas, Pencahayaan & Serahan", desc: "Hood, hob, oven, singki, paip, dishwasher dan lampu dipasang, diuji, di-seal dan dapur dibersihkan untuk serahan." }
        ],
        faqs: [
          { q: "Berapa lama masa pengubahsuaian dapur penuh di KL?", a: "Dapur standard 10x12 kaki di rumah teres atau kondominium biasanya mengambil 2 hingga 3 minggu: 2–3 hari pecah, 3–4 hari paip/elektrik dan kalis air, 4–5 hari jubin, 5–7 hari fabrikasi kabinet (luar tapak) ditambah 2–3 hari pemasangan, kemudian countertop dan perkakas. Dapur lebih besar atau sambungan mengambil 4 hingga 6 minggu." },
          { q: "Apakah perbezaan antara dapur basah dan dapur kering?", a: "Dapur basah direka untuk masakan berat Malaysia — goreng kuali, haba tinggi, minyak dan air. Ia memerlukan jubin dinding penuh, floor trap dengan cerun betul, singki keluli tahan karat, pengudaraan hood kuat dan countertop tahan haba. Dapur kering untuk penyediaan ringan, hiburan dan paparan — fokus pada island, pantry, kabinet paparan, rak wain dan pencahayaan ambien. Banyak rumah teres dan semi-D di KL mempunyai kedua-duanya." },
          { q: "Adakah anda menyediakan kabinet dapur dan countertop?", a: "Ya. Kami membekal dan memasang kabinet dapur custom dalam pilihan melamine, plywood dengan laminate atau karkas aluminium, dengan engsel soft-close dan sistem laci. Pilihan countertop: quartz (paling popular, penyelenggaraan rendah), granit (tahan haba) atau sintered stone (premium, kalis calar dan haba). Kami mengukur di tapak untuk kesesuaian tepat dan mengendalikan potongan singki dan hob." },
          { q: "Boleh saya tinggal di rumah semasa pengubahsuaian dapur?", a: "Untuk dapur kondominium anda biasanya boleh tinggal — kami menutup dapur dengan kepungan plastik untuk mengehadkan habuk. Untuk rumah landed dengan pemecahan penuh anda mungkin mahu menyediakan kawasan memasak sementara. Kami menjadualkan kerja bising dalam waktu diluluskan pengurusan dan membersihkan setiap hari." }
        ],
        metaTitle: "Kontraktor Pengubahsuaian Dapur KL & Selangor | Dari RM8,000",
        metaDesc: "Pengubahsuaian dapur penuh di KL & Selangor: pecah, jubin, kalis air, kabinet custom, countertop quartz, paip, elektrik. Harga tetap, susun atur 3D. Dapatkan sebut harga di WhatsApp.",
        aioSummary: "KL Servis Rumah menyediakan pengubahsuaian dapur di KL & Selangor: pecah, jubin semula, kalis air, kabinet custom, countertop quartz/granit, backsplash, island, dapur basah/kering, paip dan elektrik. Direka untuk masakan kuali Malaysia, harga tetap, susun atur 3D, pembayaran pencapaian.",
        warranty: "Jaminan Kerja 12 Bulan"
      },
      zh: {
        title: "厨房翻新",
        tagline: "吉隆坡与雪兰莪全套厨房改造：拆除、贴砖、防水、橱柜、台面、水电与照明。从 RM 8,000 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪为排屋、半独立、独栋、公寓与公寓单元提供全套厨房翻新服务。我们一站式处理所有工种：旧厨房拆除与垃圾清运、地面与墙面重新贴砖、水泥找平与防水、定制厨房橱柜（地柜、吊柜、高柜）、石英石或花岗岩台面、挡水板贴砖、厨房中岛或半岛、干湿厨房分离、水槽与洗碗机水管改道、烤箱、灶具、油烟机的电路重布与新增插座，以及 LED 照明安装。每间厨房都围绕马来西亚烹饪习惯设计——重油爆炒、高温、油渍飞溅与频繁冲洗——采用耐用、低维护材料并为油烟机提供充足通风。我们提供单一固定报价、3D 橱柜布局、甘特图工期与每日 WhatsApp 进度照片，由一位项目经理全程协调。",
        highlights: [
          "一个团队完成拆除、贴砖、防水、木工、台面、水管、电与照明",
          "定制厨房橱柜：地柜、吊柜、高柜、储藏柜、中岛——按您厨房尺寸量身制作",
          "石英石、花岗岩或岩板台面，挡水板可选瓷砖、马赛克、面包砖",
          "为马来西亚烹饪设计：耐高温、防油、易清洁饰面与强力油烟机通风",
          "干湿厨房分离，合理的排水坡度与地漏定位",
          "固定报价配 3D 橱柜视图、里程碑付款与 12 个月工艺保修"
        ],
        subServices: [
          { name: "全套厨房翻新", price: "从 RM 8,000 起", desc: "厨房全面重建：拆除、防水、贴砖、橱柜、台面、水管、电与油漆。" },
          { name: "厨房橱柜安装", price: "从 RM 4,500 起", desc: "定制地柜、吊柜与高柜，配阻尼铰链、抽屉系统与储藏拉篮。" },
          { name: "厨房台面更换", price: "从 RM 1,800 起", desc: "石英石、花岗岩或岩板台面供应与安装，含水槽开孔与边型处理。" },
          { name: "厨房防溅墙瓷砖安装", price: "从 RM 18 / 平方英尺起", desc: "瓷砖、陶瓷、马赛克或面包砖挡水板贴砖，含美缝配色与防霉密封。" },
          { name: "厨房中岛与半岛", price: "从 RM 2,200 起", desc: "定制中岛或半岛，带储物、早餐吧、插座与瀑布边选项。" },
          { name: "湿厨房翻新", price: "从 RM 6,500 起", desc: "适合爆炒的重型湿厨房：地漏、不锈钢水槽、墙砖贴至天花、强力通风。" },
          { name: "干厨房翻新", price: "从 RM 5,500 起", desc: "带中岛、展示柜、酒架与氛围灯的现代干厨房，适合招待聚会。" },
          { name: "厨房扩建", price: "依报价", desc: "后部或侧面厨房扩建，含砌砖、屋顶、防水与 DBKL/MBSA 报批指引（如需）。" },
          { name: "厨房水电", price: "从 RM 950 起", desc: "水槽、洗碗机、净水器点位、烤箱、灶具、油烟机、新增 13A/15A 插座与 LED 照明。" }
        ],
        process: [
          { step: "01", title: "现场测量与设计简报", desc: "我们测量您的厨房，检查现有水电，讨论烹饪习惯、储物需求、电器清单与预算。" },
          { step: "02", title: "3D 布局与固定报价", desc: "您将收到 3D 橱柜布局、台面样板、瓷砖选项与涵盖所有工种的分项固定报价。" },
          { step: "03", title: "拆除与隐蔽工程", desc: "拆除旧瓷砖、橱柜与台面，清运垃圾，重新布置新水电点位，做防水与找平。" },
          { step: "04", title: "贴砖、木工与台面", desc: "安装地面与墙面瓷砖，定制橱柜厂内制作并现场安装，台面现场量尺、切割并安装水槽与灶具开孔。" },
          { step: "05", title: "电器、照明与交付", desc: "安装油烟机、灶具、烤箱、水槽、龙头、洗碗机与灯具，测试、打胶，厨房清洁后交付。" }
        ],
        faqs: [
          { q: "在吉隆坡全套厨房翻新需要多久？", a: "标准的 10x12 英尺排屋或公寓厨房通常需要 2 到 3 周：拆除 2–3 天，水电与防水 3–4 天，贴砖 4–5 天，橱柜厂内制作 5–7 天加现场安装 2–3 天，然后是台面与电器。更大的厨房或扩建需要 4 到 6 周。" },
          { q: "湿厨房和干厨房翻新有什么区别？", a: "湿厨房为重油烹饪设计——爆炒、高温、油水。需要墙砖贴到顶、带合理坡度的地漏、不锈钢水槽、强力油烟机通风与耐高温台面。干厨房用于轻度备餐、招待与展示——重点是中岛、储藏柜、展示柜、酒架与氛围灯。吉隆坡许多排屋与半独立式住宅两者都有。" },
          { q: "你们提供厨房橱柜和台面吗？", a: "提供。我们供应并安装定制厨房橱柜，材质可选三聚氰胺板、贴面多层板或铝制柜体，配阻尼铰链与抽屉系统。台面选项：石英石（最受欢迎，低维护）、花岗岩（耐高温）或岩板（高端，防刮耐高温）。我们现场量尺确保精确贴合，并处理水槽与灶具开孔。" },
          { q: "厨房翻新期间可以住在家里吗？", a: "公寓厨房通常可以住——我们用塑料围挡封闭厨房以限制粉尘。有地住宅全面拆除时您可能需要设置临时烹饪区。我们将 noisy 拆除安排在管理处批准时段内，并每日清洁。" }
        ],
        metaTitle: "吉隆坡与雪兰莪厨房翻新承包商 | 从 RM8,000 起",
        metaDesc: "吉隆坡与雪兰莪全套厨房翻新：拆除、贴砖、防水、定制橱柜、石英石台面、水电。固定报价，3D 布局。通过 WhatsApp 获取报价。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供厨房翻新：拆除、重新贴砖、防水、定制橱柜、石英石/花岗岩台面、挡水板、中岛、干湿厨房、水电。为马来西亚爆炒烹饪设计，固定报价，3D 布局，里程碑付款。",
        warranty: "12 个月工艺保修"
      }
    }
  },

  // ── 28. BATHROOM RENOVATION ───────────────────────────────────────
  "bathroom-renovation": {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    tagline: "Full bathroom and toilet makeover: hacking, waterproofing, tiling, plumbing, sanitary, electrical and ventilation in KL & Selangor. From RM 6,000.",
    description:
      "KL Servis Rumah provides complete bathroom and toilet renovation across Kuala Lumpur and Selangor for landed houses, condos, apartments and commercial shoplots. We manage every trade: old tile and sanitary hacking, concrete screed and slope correction, multi-layer waterproofing membrane with ponding test, wall and floor tiling (porcelain, ceramic, mosaic, large format), sanitary installation (WC, basin, vanity, shower, rain shower, bathtub), bathroom plumbing reroute (hot and cold, floor trap, drainage), electrical for water heater, lighting, exhaust fan and shaver point, and ceiling repair or replacement (moisture-resistant gypsum or aluminium). All bathrooms are built to prevent the most common Malaysian failures: leaking to downstairs, hollow tiles, mouldy grout and poor drainage. We provide fixed-price quotation, tile layout plan, waterproofing warranty and daily WhatsApp updates.",
    startPrice: "RM 6,000",
    icon: "bath",
    highlights: [
      "One team for hacking, screeding, waterproofing, tiling, plumbing, sanitary, electrical and ceiling",
      "Multi-layer waterproofing with 24–48 hour ponding test to prevent downstairs leakage",
      "Wall and floor tiling: porcelain, ceramic, mosaic, large format with epoxy grout and anti-mould silicone",
      "Sanitary: WC, basin, vanity cabinet, shower, rain shower, bathtub, glass shower screen",
      "Proper slope to floor trap, anti-ponding floor, concealed plumbing and ventilation fan",
      "Fixed-price quote, tile layout plan, waterproofing warranty and 12-month workmanship warranty"
    ],
    subServices: [
      { name: "Full Bathroom Renovation", price: "From RM 6,000", desc: "Complete bathroom rebuild: hacking, waterproofing with ponding test, tiling, plumbing, sanitary and electrical." },
      { name: "Toilet Renovation", price: "From RM 4,500", desc: "Small toilet/WC renovation: WC replacement, wall and floor tiling, plumbing and ventilation." },
      { name: "Bathroom Makeover", price: "From RM 5,500", desc: "Cosmetic makeover without major hacking: retiling, new vanity, shower and lighting upgrade." },
      { name: "Shower Area Renovation", price: "From RM 2,800", desc: "Shower area rebuild: waterproofing, anti-slip floor tiles, rain shower, glass screen and niche." },
      { name: "Bathroom Tiling", price: "From RM 16 / sq ft", desc: "Bathroom wall and floor tiling with straight, brick-bond or herringbone patterns, epoxy grout." },
      { name: "Bathroom Waterproofing", price: "From RM 1,200", desc: "Cementitious membrane, 3 coats, with 24–48 hour ponding test and warranty. No-hack PU injection also available." },
      { name: "Bathroom Plumbing", price: "From RM 850", desc: "Hot and cold pipe reroute, floor trap replacement, drainage correction and pressure test." },
      { name: "Sanitary Installation", price: "From RM 650", desc: "WC, basin, vanity cabinet, shower set, rain shower, bathtub and accessories installation." },
      { name: "Bathroom Floor Replacement", price: "From RM 1,800", desc: "Hacking old floor, rescreed with slope, waterproofing, new anti-slip floor tiles." },
      { name: "Bathroom Wall Tile Replacement", price: "From RM 2,200", desc: "Hacking old wall tiles, replaster, waterproofing and new wall tiles with trim and silicone." },
      { name: "Bathroom Ceiling Repair", price: "From RM 450", desc: "Moisture-resistant gypsum or aluminium ceiling replacement with exhaust fan point and LED lighting." },
      { name: "Bathroom Leak Repair", price: "From RM 350", desc: "Leak diagnosis with thermal imaging, PU injection or membrane repair, and ceiling restoration below." }
    ],
    process: [
      { step: "01", title: "Site Survey & Tile Selection", desc: "We measure, check existing waterproofing failure, drainage slope, plumbing and electrical, and help you select anti-slip floor and wall tiles." },
      { step: "02", title: "Fixed Quote & Layout Plan", desc: "You receive a tile layout plan, sanitary list and itemized fixed-price quote covering hacking, waterproofing, tiling, plumbing and electrical." },
      { step: "03", title: "Hacking & Waterproofing", desc: "Old tiles and sanitary are hacked, debris removed, floor rescreeded with slope to trap, 3-coat waterproofing membrane applied and ponding tested 24–48 hours." },
      { step: "04", title: "Tiling, Plumbing & Sanitary", desc: "Wall and floor tiles installed with proper spacers and epoxy grout, concealed plumbing rerouted and pressure tested, WC, basin, shower and vanity installed." },
      { step: "05", title: "Ceiling, Electrical & Handover", desc: "Moisture-resistant ceiling, LED lights, exhaust fan and water heater point installed, silicone sealed, grout cleaned and bathroom handed over ready to use." }
    ],
    faqs: [
      { q: "How long does a full bathroom renovation take?", a: "A standard 5x8 ft bathroom in KL typically takes 7 to 10 working days: 1 day hacking, 1–2 days screeding and waterproofing with 24–48 hour ponding test (can overlap with other prep), 2–3 days tiling, 1–2 days sanitary and plumbing, 1 day ceiling, electrical and final sealing. For condos, add 1–2 days for management compliance and lift booking. Larger bathrooms or those with bathtub take 10–14 days." },
      { q: "How do you prevent bathroom leaking to downstairs?", a: "Three steps: (1) Proper screed with slope to floor trap so water doesn't pond, (2) 3 coats of cementitious waterproofing membrane with reinforcement at corners and pipe penetrations, (3) 24–48 hour ponding test where we flood the floor with 2 inches of water and check the ceiling below for zero moisture transfer. We also use PU injection as a no-hack option for active leaks. Full hacking jobs carry up to 5-year written waterproofing warranty." },
      { q: "What tiles are best for Malaysian bathrooms?", a: "Floor: anti-slip porcelain (R10–R11) 300x300mm or 600x600mm, light grey or beige to hide water marks. Wall: 300x600mm ceramic or porcelain, glossy for easy cleaning. Shower area: mosaic or small format for extra grip. We avoid polished large format on bathroom floors as they are slippery when wet. Epoxy grout is recommended for mould resistance." },
      { q: "Can you renovate my condo bathroom without hacking the whole floor?", a: "For leak repairs, yes — we offer no-hack PU injection grouting that seals leaks from below without tile hacking. For full makeover where tiles are old, hollow or you want new sanitary positions, hacking is necessary. Condo hacking requires management approval, deposit and work-hour compliance — we handle the submission, lift protection and debris disposal." }
    ],
    heroImage: "/hero/home-services-waterproofing-kl.jpg",
    metaTitle: "Bathroom Renovation Contractor KL & Selangor | From RM6,000",
    metaDesc: "Full bathroom renovation in KL & Selangor: hacking, waterproofing with ponding test, tiling, plumbing, sanitary, ceiling. Anti-leak, anti-slip, mould-proof. Fixed price. WhatsApp quote.",
    aioSummary: "KL Servis Rumah provides bathroom renovation across KL & Selangor: hacking, screeding, multi-layer waterproofing with ponding test, wall and floor tiling, sanitary, plumbing reroute, electrical and moisture-resistant ceiling. Prevents downstairs leakage, hollow tiles and mould. Fixed price, tile layout plan, waterproofing warranty.",
    warranty: "12-Month Workmanship + Up to 5-Year Waterproofing Warranty",
    i18n: {
      ms: {
        title: "Pengubahsuaian Bilik Mandi",
        tagline: "Makeover bilik mandi dan tandas penuh: pecah, kalis air, jubin, paip, sanitari, elektrik dan pengudaraan di KL & Selangor. Dari RM 6,000.",
        description: "KL Servis Rumah menyediakan pengubahsuaian bilik mandi dan tandas lengkap di seluruh Kuala Lumpur dan Selangor untuk rumah landed, kondominium, apartmen dan shoplot komersial. Kami mengurus setiap kerja: pemecahan jubin dan sanitari lama, screed konkrit dan pembetulan cerun, membran kalis air berbilang lapisan dengan ujian kolam, jubin dinding dan lantai (porselin, seramik, mozek, format besar), pemasangan sanitari (WC, besen, vaniti, pancuran, hujan, tab mandi), ubah hala paip bilik mandi (panas dan sejuk, floor trap, saliran), elektrik untuk pemanas air, pencahayaan, kipas ekzos dan titik pencukur, serta pembaikan atau penggantian siling (gypsum tahan lembapan atau aluminium). Semua bilik mandi dibina untuk mengelakkan kegagalan paling biasa di Malaysia: bocor ke tingkat bawah, jubin berongga, grout berkulat dan saliran lemah. Kami menyediakan sebut harga harga tetap, pelan susun atur jubin, jaminan kalis air dan kemas kini WhatsApp harian.",
        highlights: [
          "Satu pasukan untuk pecah, screed, kalis air, jubin, paip, sanitari, elektrik dan siling",
          "Kalis air berbilang lapisan dengan ujian kolam 24–48 jam untuk mengelakkan kebocoran tingkat bawah",
          "Jubin dinding dan lantai: porselin, seramik, mozek, format besar dengan grout epoxy dan silikon anti-kulat",
          "Sanitari: WC, besen, kabinet vaniti, pancuran, hujan, tab mandi, skrin pancuran kaca",
          "Cerun betul ke floor trap, lantai anti-bertakung, paip tersembunyi dan kipas pengudaraan",
          "Sebut harga harga tetap, pelan susun atur jubin, jaminan kalis air dan jaminan kerja 12 bulan"
        ],
        subServices: [
          { name: "Pengubahsuaian Bilik Mandi Penuh", price: "Dari RM 6,000", desc: "Binaan semula bilik mandi lengkap: pecah, kalis air dengan ujian kolam, jubin, paip, sanitari dan elektrik." },
          { name: "Pengubahsuaian Tandas", price: "Dari RM 4,500", desc: "Pengubahsuaian tandas/WC kecil: penggantian WC, jubin dinding dan lantai, paip dan pengudaraan." },
          { name: "Makeover Bilik Mandi", price: "Dari RM 5,500", desc: "Makeover kosmetik tanpa pemecahan besar: jubin semula, vaniti baru, pancuran dan naik taraf pencahayaan." },
          { name: "Pengubahsuaian Kawasan Pancuran", price: "Dari RM 2,800", desc: "Binaan semula kawasan pancuran: kalis air, jubin lantai anti-gelincir, pancuran hujan, skrin kaca dan niche." },
          { name: "Jubin Bilik Mandi", price: "Dari RM 16 / kaki persegi", desc: "Jubin dinding dan lantai bilik mandi dengan corak lurus, brick-bond atau herringbone, grout epoxy." },
          { name: "Kalis Air Bilik Mandi", price: "Dari RM 1,200", desc: "Membran simen, 3 lapisan, dengan ujian kolam 24–48 jam dan jaminan. Suntikan PU tanpa pecah juga tersedia." },
          { name: "Paip Bilik Mandi", price: "Dari RM 850", desc: "Ubah hala paip panas dan sejuk, penggantian floor trap, pembetulan saliran dan ujian tekanan." },
          { name: "Pemasangan Sanitari", price: "Dari RM 650", desc: "Pemasangan WC, besen, kabinet vaniti, set pancuran, pancuran hujan, tab mandi dan aksesori." },
          { name: "Penggantian Lantai Bilik Mandi", price: "Dari RM 1,800", desc: "Pecah lantai lama, screed semula dengan cerun, kalis air, jubin lantai anti-gelincir baru." },
          { name: "Penggantian Jubin Dinding Bilik Mandi", price: "Dari RM 2,200", desc: "Pecah jubin dinding lama, plaster semula, kalis air dan jubin dinding baru dengan trim dan silikon." },
          { name: "Pembaikan Siling Bilik Mandi", price: "Dari RM 450", desc: "Penggantian siling gypsum tahan lembapan atau aluminium dengan titik kipas ekzos dan pencahayaan LED." },
          { name: "Pembaikan Bocor Bilik Mandi", price: "Dari RM 350", desc: "Diagnosis bocor dengan pengimejan terma, suntikan PU atau pembaikan membran, dan pemulihan siling di bawah." }
        ],
        process: [
          { step: "01", title: "Tinjauan Tapak & Pemilihan Jubin", desc: "Kami mengukur, memeriksa kegagalan kalis air sedia ada, cerun saliran, paip dan elektrik, dan membantu anda memilih jubin anti-gelincir lantai dan dinding." },
          { step: "02", title: "Sebut Harga Tetap & Pelan Susun Atur", desc: "Anda menerima pelan susun atur jubin, senarai sanitari dan sebut harga tetap terperinci merangkumi pecah, kalis air, jubin, paip dan elektrik." },
          { step: "03", title: "Pecah & Kalis Air", desc: "Jubin dan sanitari lama dipecah, serpihan disingkirkan, lantai di-screed semula dengan cerun ke trap, membran kalis air 3 lapisan disapu dan ujian kolam 24–48 jam." },
          { step: "04", title: "Jubin, Paip & Sanitari", desc: "Jubin dinding dan lantai dipasang dengan spacer betul dan grout epoxy, paip tersembunyi dihalakan semula dan diuji tekanan, WC, besen, pancuran dan vaniti dipasang." },
          { step: "05", title: "Siling, Elektrik & Serahan", desc: "Siling tahan lembapan, lampu LED, kipas ekzos dan titik pemanas air dipasang, di-seal silikon, grout dibersihkan dan bilik mandi diserahkan sedia digunakan." }
        ],
        faqs: [
          { q: "Berapa lama masa pengubahsuaian bilik mandi penuh?", a: "Bilik mandi standard 5x8 kaki di KL biasanya mengambil 7 hingga 10 hari bekerja: 1 hari pecah, 1–2 hari screed dan kalis air dengan ujian kolam 24–48 jam (boleh bertindih dengan persediaan lain), 2–3 hari jubin, 1–2 hari sanitari dan paip, 1 hari siling, elektrik dan sealing akhir. Untuk kondominium, tambah 1–2 hari untuk pematuhan pengurusan dan tempahan lif. Bilik mandi lebih besar atau dengan tab mandi mengambil 10–14 hari." },
          { q: "Bagaimana anda mengelakkan bilik mandi bocor ke tingkat bawah?", a: "Tiga langkah: (1) Screed betul dengan cerun ke floor trap supaya air tidak bertakung, (2) 3 lapisan membran kalis air simen dengan tetulang di sudut dan penembusan paip, (3) Ujian kolam 24–48 jam di mana kami membanjiri lantai dengan air 2 inci dan memeriksa siling di bawah untuk pemindahan lembapan sifar. Kami juga menggunakan suntikan PU sebagai pilihan tanpa pecah untuk kebocoran aktif. Kerja pecah penuh membawa jaminan kalis air bertulis sehingga 5 tahun." },
          { q: "Jubin apa terbaik untuk bilik mandi Malaysia?", a: "Lantai: porselin anti-gelincir (R10–R11) 300x300mm atau 600x600mm, kelabu cerah atau beige untuk menyembunyikan kesan air. Dinding: seramik atau porselin 300x600mm, berkilat untuk mudah dibersihkan. Kawasan pancuran: mozek atau format kecil untuk cengkaman tambahan. Kami mengelakkan format besar digilap pada lantai bilik mandi kerana licin apabila basah. Grout epoxy disyorkan untuk rintangan kulat." },
          { q: "Boleh anda mengubah suai bilik mandi kondominium tanpa memecah seluruh lantai?", a: "Untuk pembaikan bocor, ya — kami menawarkan grouting suntikan PU tanpa pecah yang mengedap kebocoran dari bawah tanpa pemecahan jubin. Untuk makeover penuh di mana jubin lama, berongga atau anda mahu kedudukan sanitari baru, pemecahan diperlukan. Pemecahan kondominium memerlukan kelulusan pengurusan, deposit dan pematuhan waktu kerja — kami mengendalikan penyerahan, perlindungan lif dan pelupusan serpihan." }
        ],
        metaTitle: "Kontraktor Pengubahsuaian Bilik Mandi KL & Selangor | Dari RM6,000",
        metaDesc: "Pengubahsuaian bilik mandi penuh di KL & Selangor: pecah, kalis air dengan ujian kolam, jubin, paip, sanitari, siling. Anti-bocor, anti-gelincir, anti-kulat. Harga tetap. Sebut harga WhatsApp.",
        aioSummary: "KL Servis Rumah menyediakan pengubahsuaian bilik mandi di KL & Selangor: pecah, screed, kalis air berbilang lapisan dengan ujian kolam, jubin dinding dan lantai, sanitari, ubah hala paip, elektrik dan siling tahan lembapan. Mengelakkan kebocoran tingkat bawah, jubin berongga dan kulat. Harga tetap, pelan susun atur jubin, jaminan kalis air.",
        warranty: "Jaminan Kerja 12 Bulan + Jaminan Kalis Air Sehingga 5 Tahun"
      },
      zh: {
        title: "卫生间翻新",
        tagline: "吉隆坡与雪兰莪全套卫生间与厕所改造：拆除、防水、贴砖、水管、洁具、电与通风。从 RM 6,000 起。",
        description: "KL Servis Rumah 在吉隆坡与雪兰莪为有地住宅、公寓、公寓单元与商业店铺提供全套卫生间与厕所翻新。我们负责所有工种：旧瓷砖与洁具拆除、混凝土找平与坡度修正、多层防水膜与蓄水测试、墙地贴砖（瓷砖、陶瓷、马赛克、大板）、洁具安装（马桶、台盆、浴室柜、花洒、雨淋、浴缸）、卫生间水管改道（冷热水、地漏、排水）、热水器、照明、排气扇与剃须插座的电路，以及天花维修或更换（防潮石膏板或铝扣板）。所有卫生间均按防止马来西亚最常见故障建造：漏水到楼下、空鼓砖、发霉美缝与排水不畅。我们提供固定报价、贴砖布局图、防水保修与每日 WhatsApp 更新。",
        highlights: [
          "一个团队完成拆除、找平、防水、贴砖、水管、洁具、电与天花",
          "多层防水配 24–48 小时蓄水测试，防止漏水到楼下",
          "墙地贴砖：瓷砖、陶瓷、马赛克、大板，配环氧美缝与防霉硅胶",
          "洁具：马桶、台盆、浴室柜、花洒、雨淋、浴缸、玻璃淋浴屏",
          "合理的地漏坡度、防积水地面、隐蔽水管与通风扇",
          "固定报价、贴砖布局图、防水保修与 12 个月工艺保修"
        ],
        subServices: [
          { name: "全套卫生间翻新", price: "从 RM 6,000 起", desc: "卫生间全面重建：拆除、防水与蓄水测试、贴砖、水管、洁具与电。" },
          { name: "厕所翻新", price: "从 RM 4,500 起", desc: "小型厕所/WC 翻新：马桶更换、墙地贴砖、水管与通风。" },
          { name: "卫生间改造", price: "从 RM 5,500 起", desc: "不大拆的表面改造：重新贴砖、新浴室柜、花洒与照明升级。" },
          { name: "淋浴区翻新", price: "从 RM 2,800 起", desc: "淋浴区重建：防水、防滑地砖、雨淋花洒、玻璃屏与壁龛。" },
          { name: "卫生间贴砖", price: "从 RM 16 / 平方英尺起", desc: "卫生间墙地贴砖，直铺、工字或人字拼，环氧美缝。" },
          { name: "卫生间防水", price: "从 RM 1,200 起", desc: "水泥基防水膜，3 遍，配 24–48 小时蓄水测试与保修。也提供免砸砖 PU 注浆。" },
          { name: "卫生间水管", price: "从 RM 850 起", desc: "冷热水管改道、地漏更换、排水修正与打压测试。" },
          { name: "洁具安装", price: "从 RM 650 起", desc: "马桶、台盆、浴室柜、花洒套装、雨淋、浴缸与配件安装。" },
          { name: "卫生间地面更换", price: "从 RM 1,800 起", desc: "拆除旧地面，重新找平带坡度、防水、新防滑地砖。" },
          { name: "卫生间墙砖更换", price: "从 RM 2,200 起", desc: "拆除旧墙砖，重新抹灰、防水与新墙砖，含收边与硅胶。" },
          { name: "卫生间天花维修", price: "从 RM 450 起", desc: "防潮石膏板或铝扣板天花更换，含排气扇点位与 LED 照明。" },
          { name: "卫生间漏水维修", price: "从 RM 350 起", desc: "热成像漏水诊断、PU 注浆或防水膜维修，以及下方天花修复。" }
        ],
        process: [
          { step: "01", title: "现场勘察与瓷砖挑选", desc: "我们测量、检查现有防水失效、排水坡度、水电，并协助您挑选防滑地砖与墙砖。" },
          { step: "02", title: "固定报价与布局图", desc: "您将收到贴砖布局图、洁具清单与涵盖拆除、防水、贴砖、水电的分项固定报价。" },
          { step: "03", title: "拆除与防水", desc: "拆除旧瓷砖与洁具，清运垃圾，地面重新找平带坡度至地漏，涂刷 3 遍防水膜并进行 24–48 小时蓄水测试。" },
          { step: "04", title: "贴砖、水管与洁具", desc: "墙地砖按规范留缝与环氧美缝安装，隐蔽水管改道并打压测试，安装马桶、台盆、花洒与浴室柜。" },
          { step: "05", title: "天花、电路与交付", desc: "安装防潮天花、LED 灯、排气扇与热水器点位，打硅胶密封，美缝清洁，卫生间即可使用交付。" }
        ],
        faqs: [
          { q: "全套卫生间翻新需要多久？", a: "吉隆坡标准 5x8 英尺卫生间通常需要 7 到 10 个工作日：拆除 1 天，找平与防水 1–2 天配 24–48 小时蓄水测试（可与其他准备重叠），贴砖 2–3 天，洁具与水管 1–2 天，天花、电路与最终密封 1 天。公寓需额外 1–2 天用于管理处合规与电梯预约。更大卫生间或带浴缸的需 10–14 天。" },
          { q: "如何防止卫生间漏水到楼下？", a: "三步：（1）合理找平带坡度至地漏防止积水，（2）3 遍水泥基防水膜，阴阳角与管道穿透处加强，（3）24–48 小时蓄水测试，地面蓄 2 英寸水并检查下方天花零水分渗透。我们也提供免砸砖 PU 注浆用于活动漏水。全拆项目享有最长 5 年书面防水保修。" },
          { q: "马来西亚卫生间用什么瓷砖最好？", a: "地面：防滑瓷砖（R10–R11）300x300mm 或 600x600mm，浅灰或米色可隐藏水渍。墙面：300x600mm 陶瓷或瓷砖，亮面易清洁。淋浴区：马赛克或小规格增加摩擦力。卫生间地面避免使用抛光大板，遇水打滑。推荐环氧美缝防霉。" },
          { q: "公寓卫生间可以不大拆地面就翻新吗？", a: "漏水维修可以——我们提供免砸砖 PU 注浆从下方密封漏水无需拆除瓷砖。全面改造若瓷砖老旧、空鼓或想改洁具位置则需拆除。公寓拆除需管理处批准、押金与工时合规——我们负责呈报、电梯保护与垃圾清运。" }
        ],
        metaTitle: "吉隆坡与雪兰莪卫生间翻新承包商 | 从 RM6,000 起",
        metaDesc: "吉隆坡与雪兰莪全套卫生间翻新：拆除、防水与蓄水测试、贴砖、水管、洁具、天花。防漏、防滑、防霉。固定报价。WhatsApp 报价。",
        aioSummary: "KL Servis Rumah 在吉隆坡与雪兰莪提供卫生间翻新：拆除、找平、多层防水与蓄水测试、墙地贴砖、洁具、水管改道、电路与防潮天花。防止漏水到楼下、空鼓砖与发霉。固定报价、贴砖布局图、防水保修。",
        warranty: "12 个月工艺保修 + 最长 5 年防水保修"
      }
    }
  }
};
