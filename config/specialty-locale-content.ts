/**
 * Specialty locale content — KL Servis Rumah
 *
 * Real, authored native-content store for the service-by-service locale-
 * specialty rollout. Each entry is keyed by `<serviceSlug>/<specialtySlug>`
 * and holds full Malay (ms) and Chinese (zh) blocks so the localized
 * specialty routes render genuine, non-thin content instead of templated
 * clones.
 *
 * Only specialties listed here get real `/ms/services/<s>/<sub>` and
 * `/zh/services/<s>/<sub>` routes (see the localized specialty page).
 * Unknown slugs 404 rather than fall back to English.
 */

export type SpecialtyProcessStep = { step: string; title: string; desc: string };
export type SpecialtyFaq = { q: string; a: string };

export type SpecialtyLocaleBlock = {
  /** Localized specialty display name. */
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  process: SpecialtyProcessStep[];
  faqs: SpecialtyFaq[];
  metaTitle: string;
  metaDesc: string;
};

export type SpecialtyLocaleContent = {
  ms: SpecialtyLocaleBlock;
  zh: SpecialtyLocaleBlock;
};

export const specialtyLocaleContent: Record<string, SpecialtyLocaleContent> = {
  /* ── PAINTING ─────────────────────────────────────────────────────────── */
  "painting/interior-house-painting": {
    ms: {
      name: "Pengecatan Dalaman Rumah",
      tagline: "Pengecatan dinding dalaman premium untuk bilik tidur, ruang tamu dan dapur, dengan persediaan permukaan penuh dan kemasan licin.",
      description:
        "Perkhidmatan pengecatan dalaman menggunakan cat premium Nippon, Dulux atau Jotun. Setiap dinding disediakan sepenuhnya dahulu—retakan diisi, permukaan diamplas dan primer disapu—sebelum dua lapisan topcoat yang sekata. Kami melindungi perabot, lantai, suis dan tingkap dengan kain penutup berat, dan membersihkan semuanya sebelum serahan. Semua kerja disokong jaminan bertulis, dan warna boleh dipilih bersama pasukan kami melalui konsultasi di tapak.",
      highlights: [
        "Cat dalaman boleh basuh berbau rendah (VOC rendah) daripada jenama premium",
        "Persediaan dinding penuh: mengisi retakan, mengamplas, menyapu primer penyekat",
        "Konsultasi warna dalaman dengan katalog warna fizikal",
        "Perlindungan perabot & lantai penuh dengan pembersihan tanpa kekotoran",
        "Jaminan bertulis terhadap pengelupasan dan kualiti kerja",
      ],
      process: [
        { step: "01", title: "Perlindungan & Penyediaan", desc: "Kami menutup perabot, lantai, suis dan tingkap, kemudian mengisi retakan dan mengamplas dinding ke permukaan licin." },
        { step: "02", title: "Penyapuan Primer", desc: "Primer penyekat premium disapu untuk melindungi daripada lembapan dan memastikan lekatan topcoat yang maksimum." },
        { step: "03", title: "Dua Lapisan Topcoat", desc: "Dua lapisan cat dalaman premium disapu menggunakan roller dan berus profesional untuk liputan yang kaya dan sekata." },
        { step: "04", title: "Pemeriksaan & Pembersihan", desc: "Kami menanggalkan semua penutup, menyedut lantai dan menjalankan pemeriksaan bersama untuk memastikan kemasan sempurna." },
      ],
      faqs: [
        { q: "Berapa lama masa untuk mengecat sebuah bilik tidur standard?", a: "Sebuah bilik tidur 3.5m x 3.5m biasanya mengambil masa satu hari kerja, termasuk persediaan dinding, primer dan dua lapisan topcoat. Ruang yang lebih besar atau dinding yang perlu banyak pembaikan mungkin mengambil masa lebih lama." },
        { q: "Cat dalaman jenis apa yang anda gunakan?", a: "Kami menggunakan cat premium seperti Nippon Spot-less atau Odour-less, Dulux EasyClean dan Jotun Majestic. Kesemuanya boleh dibasuh, berbau rendah dan sesuai untuk iklim Malaysia." },
        { q: "Adakah pembaikan retak dinding termasuk?", a: "Retakan halus, lubang paku dan kesan kecil termasuk dalam persediaan standard. Retakan struktur besar atau kerosakan lembapan memerlukan sebut harga berasingan." },
        { q: "Adakah anda menyediakan konsultasi warna?", a: "Ya, pengurus projek kami membawa katalog warna fizikal ke tapak untuk membantu anda memilih skema warna dalaman yang moden dan sesuai dengan pencahayaan rumah anda." },
      ],
      metaTitle: "Pengecatan Dalaman Rumah KL & Selangor | Harga Dari RM450",
      metaDesc: "Pengecatan dinding dalaman premium di KL & Selangor. Cat Nippon, Dulux atau Jotun, persediaan dinding penuh, perlindungan perabot & jaminan bertulis. Dapatkan sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "室内墙面油漆",
      tagline: "针对卧室、客厅与厨房的优质室内墙面油漆，含完整表面处理与平滑饰面。",
      description:
        "采用立邦、多乐士或佐敦等优质涂料进行室内墙面油漆。每面墙都先经过完整处理——填补裂缝、打磨墙面并涂刷底漆——然后再涂两层均匀面漆。我们使用厚重保护布遮盖家具、地板、开关与窗户，交接前全面清洁。所有工作均附书面保修，并可在现场由团队协助挑选颜色。",
      highlights: [
        "低气味、可擦洗的优质室内涂料（低VOC）",
        "完整墙面处理：填补裂缝、打磨、涂刷封闭底漆",
        "室内配色咨询，提供实体色卡",
        "家具与地板全面保护，无尘交接",
        "针对漆面剥落与施工质量的书面保修",
      ],
      process: [
        { step: "01", title: "保护与准备", desc: "遮盖家具、地板、开关与窗户，然后填补裂缝并打磨墙面至平滑表面。" },
        { step: "02", title: "涂刷底漆", desc: "涂刷优质封闭底漆，以隔绝潮气并确保面漆最大附着力。" },
        { step: "03", title: "涂刷两层面漆", desc: "使用专业滚筒与刷子涂刷两层面漆，使色泽饱满均匀。" },
        { step: "04", title: "检查与清洁", desc: "移除所有遮盖物，吸尘清扫地板，并进行联合检查以确保完美饰面。" },
      ],
      faqs: [
        { q: "粉刷一间标准卧室需要多长时间？", a: "一间约3.5米x3.5米的卧室通常需要约一个工作日，包括墙面处理、底漆与两层面漆。较大空间或需要较多修补的墙面可能需要更长时间。" },
        { q: "你们使用什么室内涂料？", a: "我们使用立邦Spot-less或Odour-less、多乐士EasyClean以及佐敦Majestic等优质涂料，均可擦洗、低气味且适合马来西亚气候。" },
        { q: "是否包含墙面裂缝修补？", a: "细裂缝、钉孔与小瑕疵均包含在标准处理内。结构性大裂缝或潮气损坏需另行报价。" },
        { q: "是否提供配色咨询？", a: "是的，我们的项目经理会携带实体色卡到现场，协助您根据家中光线选择现代室内配色方案。" },
      ],
      metaTitle: "吉隆坡与雪兰莪室内墙面油漆 | 起价RM450",
      metaDesc: "吉隆坡与雪兰莪优质室内墙面油漆。立邦、多乐士或佐敦涂料，完整墙面处理，家具保护与书面保修。通过WhatsApp获取免费报价。",
    },
  },
  "painting/exterior-house-painting": {
    ms: {
      name: "Pengecatan Rumah Eksterior",
      tagline: "Salutan eksterior tahan cuaca, anti-kulat dan tahan UV untuk dinding luar rumah dan bangunan di KL & Selangor.",
      description:
        "Pengecatan eksterior direka untuk bertahan dalam cuaca tropika Malaysia. Kami mencuci tekanan dinding, merawat kulat dan kapur, menyapu sealer anti-alkali, kemudian dua lapisan cat eksterior tahan UV dan kalis air. Kerja tinggi melibatkan penggunaan tangga dan scaffold yang selamat, dan semua permukaan dilindungi sebelum kerja bermula. Hasilnya dinding luar yang segar, sekata dan tahan lama.",
      highlights: [
        "Salutan eksterior tahan UV, anti-kulat dan tahan cuaca",
        "Pencucian tekanan & rawatan kulat/kapur sebelum mengecat",
        "Sealer anti-alkali untuk lekatan dan ketahanan jangka panjang",
        "Perancangan keselamatan untuk dinding tinggi & scaffold",
        "Warna eksterior yang sesuai untuk iklim dan orientasi rumah",
      ],
      process: [
        { step: "01", title: "Pencucian & Rawatan", desc: "Dinding dibasuh tekanan dan kulat, kapur atau kesan lembapan dirawat supaya permukaan bersih dan kukuh." },
        { step: "02", title: "Pembaikan & Sealer", desc: "Retakan halus diisi dan sealer anti-alkali disapu untuk melindungi daripada lembapan." },
        { step: "03", title: "Dua Lapisan Cat Eksterior", desc: "Dua lapisan cat eksterior tahan UV disapu untuk liputan sekata dan perlindungan cuaca jangka panjang." },
        { step: "04", title: "Pemeriksaan Akhir", desc: "Kami memeriksa setiap permukaan, membuang peralatan dan memastikan kawasan bersih serta kemasan sekata." },
      ],
      faqs: [
        { q: "Berapa kerap rumah perlu dicat semula di luar?", a: "Sebahagian besar rumah di Malaysia perlu dicat semula di luar setiap 5–7 tahun, bergantung pada kualiti cat dan pendedahan kepada hujan serta matahari." },
        { q: "Adakah pencucian tekanan diperlukan?", a: "Ya, dinding luar perlu dibasuh dan kering sebelum sealer dan cat disapu supaya lekatan maksimum dan tiada sisa kotoran." },
        { q: "Cat apa yang terbaik untuk dinding panas?", a: "Kami mengesyorkan sistem eksterior tahan cuaca dengan sealer dan topcoat tahan UV daripada jenama terkemuka." },
        { q: "Bagaimana anda mengendalikan dinding tinggi?", a: "Untuk dinding tinggi, kami menggunakan tangga, scaffold atau perancah yang selamat mengikut keperluan, dengan langkah keselamatan pekerja yang ketat." },
      ],
      metaTitle: "Pengecatan Rumah Eksterior KL & Selangor | Harga Dari RM2,200",
      metaDesc: "Pengecatan eksterior tahan cuaca di KL & Selangor. Pencucian tekanan, rawatan kulat, sealer anti-alkali & cat tahan UV. Jaminan bertulis. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "房屋外墙油漆",
      tagline: "针对吉隆坡与雪兰莪房屋外墙的耐候、防霉、抗紫外线涂料。",
      description:
        "外墙油漆专为马来西亚热带气候而设计。我们会高压清洗墙面，处理霉菌与起粉，涂刷防碱封闭底漆，再涂两层抗紫外线、防水的优质外墙涂料。高处作业采用安全梯子与脚手架，施工前全面遮盖保护所有表面。最终获得焕然一新、均匀且持久的外墙饰面。",
      highlights: [
        "抗紫外线、防霉且耐候的外墙涂料",
        "涂刷前高压清洗并处理霉菌/起粉",
        "防碱封闭底漆，确保附着力与长期耐久",
        "高处墙面与脚手架的安全施工规划",
        "适合气候与房屋朝向的外墙配色",
      ],
      process: [
        { step: "01", title: "清洗与处理", desc: "高压清洗墙面，处理霉菌、起粉或潮气痕迹，确保表面洁净坚固。" },
        { step: "02", title: "修补与封闭底漆", desc: "填补细裂缝并涂刷防碱封闭底漆，隔绝潮气。" },
        { step: "03", title: "涂刷两层面漆", desc: "涂刷两层抗紫外线外墙涂料，色泽均匀并长期抵御天气。" },
        { step: "04", title: "最终检查", desc: "检查每一面墙，移除设备，确保场地整洁、饰面均匀。" },
      ],
      faqs: [
        { q: "房屋外墙多久需要重新粉刷一次？", a: "马来西亚大多数房屋约每5至7年需要重新粉刷外墙，具体取决于涂料质量以及日晒雨淋程度。" },
        { q: "是否需要高压清洗？", a: "是的，外墙在涂刷封闭底漆与面漆前必须清洗并晾干，以确保最佳附着且无污垢残留。" },
        { q: "什么涂料最适合炎热外墙？", a: "我们推荐采用优质品牌、含封闭底漆与抗紫外线面漆的耐候外墙系统。" },
        { q: "如何处理高处墙面？", a: "对于高处墙面，我们会根据需要使用安全的梯子、脚手架或升降平台，并严格落实工人安全措施。" },
      ],
      metaTitle: "吉隆坡与雪兰莪房屋外墙油漆 | 起价RM2,200",
      metaDesc: "吉隆坡与雪兰莪耐候外墙油漆。高压清洗、霉菌处理、防碱底漆与抗紫外线涂料。书面保修。WhatsApp免费报价。",
    },
  },
  "painting/commercial-and-office-painting": {
    ms: {
      name: "Pengecatan Komersial & Pejabat",
      tagline: "Pengecatan pejabat, kedai dan ruang runcit dengan jadual ketat, kawalan bau dan gangguan perniagaan yang minimum.",
      description:
        "Pengecatan komersial untuk pejabat, kedai depan, klinik dan ruang runcit yang perlu disiapkan pada masa tertentu. Kami merancang kerja di luar waktu operasi atau hujung minggu, menggunakan cat berbau rendah, dan padanan warna jenama yang tepat. Pasukan kami bekerja dalam zon untuk meminimumkan gangguan, dan menyiapkan serta membersihkan kawasan sebelum perniagaan diteruskan. Perlindungan lantai, perabot dan peralatan penuh disediakan.",
      highlights: [
        "Jadual ketat termasuk kerja malam & hujung minggu",
        "Cat berbau rendah untuk ruang yang didiami",
        "Padanan warna jenama & korporat yang tepat",
        "Kerja berzon untuk gangguan perniagaan minimum",
        "Perlindungan penuh lantai, perabot & peralatan",
      ],
      process: [
        { step: "01", title: "Perancangan & Perlindungan", desc: "Kami menilai ruang, merancang jadual mengikut waktu operasi anda dan melindungi lantai serta peralatan." },
        { step: "02", title: "Persediaan Permukaan", desc: "Dinding disediakan—dibersihkan, retakan diisi dan permukaan diamplas supaya cat melekat dengan baik." },
        { step: "03", title: "Pengecatan", desc: "Cat berbau rendah disapu mengikut warna jenama, dengan kerja berzon supaya sebahagian ruang kekal boleh digunakan." },
        { step: "04", title: "Serahan & Pembersihan", desc: "Kawasan dibersihkan, semakan bersama dijalankan dan ruang sedia untuk digunakan semula mengikut jadual." },
      ],
      faqs: [
        { q: "Bolehkah pengecatan dilakukan di luar waktu operasi?", a: "Ya, kami kerap mengecat pejabat dan kedai pada waktu malam atau hujung minggu untuk mengurangkan gangguan kepada perniagaan anda." },
        { q: "Berapa cepat anda boleh menyiapkan pejabat kecil?", a: "Sebuah pejabat kecil (kira-kira 1,500 kaki persegi) biasanya boleh disiapkan dalam 2–3 hari, bergantung pada keadaan dinding dan skop warna." },
        { q: "Adakah anda memadankan warna jenama korporat?", a: "Ya, kami boleh memadankan warna jenama atau korporat anda dengan tepat menggunakan sistem pencampuran warna profesional." },
        { q: "Adakah perabot dan peralatan dilindungi?", a: "Ya, kami melindungi lantai, perabot, komputer dan peralatan dengan kain penutup berat sebelum kerja bermula." },
      ],
      metaTitle: "Pengecatan Komersial & Pejabat KL | Atas Sebut Harga",
      metaDesc: "Pengecatan pejabat, kedai & ruang runcit di KL & Selangor. Jadual ketat, cat berbau rendah, padanan warna jenama & gangguan minimum. Sebut harga percuma.",
    },
    zh: {
      name: "商业与办公室油漆",
      tagline: "为办公室、店铺与零售空间提供油漆服务，严格排期、气味控制且对营业影响最小。",
      description:
        "商业油漆适用于需要在指定时间内完成的办公室、店面、诊所与零售空间。我们安排在非营业时段或周末施工，采用低气味涂料并精确匹配品牌颜色。团队分区施工以最大程度减少干扰，并在恢复营业前完成清洁交接。地板、家具与设备均获得全面保护。",
      highlights: [
        "严格排期，包括夜间与周末施工",
        "低气味涂料，适合有人使用的空间",
        "精确匹配企业及品牌颜色",
        "分区施工，最大限度减少营业干扰",
        "地板、家具与设备全面保护",
      ],
      process: [
        { step: "01", title: "规划与保护", desc: "评估空间，根据您的营业时间安排工期，并遮盖保护地板与设备。" },
        { step: "02", title: "表面处理", desc: "清洁墙面、填补裂缝并打磨表面，确保涂料良好附着。" },
        { step: "03", title: "涂刷", desc: "按品牌颜色涂刷低气味涂料，分区施工以便部分空间保持可用。" },
        { step: "04", title: "交接与清洁", desc: "清洁场地，进行联合验收，并按计划交还可用空间。" },
      ],
      faqs: [
        { q: "可以在非营业时间施工吗？", a: "可以，我们经常在夜间或周末为办公室与店铺涂刷，以最大程度减少对您营业的影响。" },
        { q: "小办公室需要多久完成？", a: "约1500平方英尺的小办公室通常可在2至3天内完成，具体取决于墙面状况与配色范围。" },
        { q: "能否匹配企业品牌颜色？", a: "可以，我们使用专业调色系统精确匹配您的品牌或企业颜色。" },
        { q: "家具与设备是否得到保护？", a: "是的，施工前我们会使用厚重保护布遮盖保护地板、家具、电脑与设备。" },
      ],
      metaTitle: "吉隆坡商业与办公室油漆 | 面议",
      metaDesc: "吉隆坡与雪兰莪办公室、店铺与零售空间油漆。严格排期、低气味涂料、品牌配色与最低干扰。免费报价。",
    },
  },
  "painting/wall-crack-and-moisture-repair": {
    ms: {
      name: "Pembaikan Retak & Lembapan Dinding",
      tagline: "Mengisi retakan, merawat lembapan dan menyedia dinding sebelum mengecat, untuk permukaan yang kukuh dan tahan lama.",
      description:
        "Sebelum mengecat, dinding yang retak atau lembap perlu dibaiki supaya hasilnya tahan lama. Kami mengisi retakan halus dan struktur dengan pengisi berkualiti, merawat lembapan dengan sealer penyekat, dan mengamplas permukaan ke tahap licin. Kerja ini mengelakkan cat daripada mengelupas, berbuih atau bernoda selepas beberapa bulan, dan penting untuk ruang yang sebelum ini mengalami kesan air.",
      highlights: [
        "Pengisian retakan halus & struktur dengan pengisi berkualiti",
        "Sealer penyekat lembapan untuk dinding yang terdedah air",
        "Pengamplasan ke permukaan licin untuk lekatan cat terbaik",
        "Mengelakkan pengelupasan, berbuih & kesan air selepas mengecat",
        "Boleh digabungkan dengan pengecatan penuh ruang",
      ],
      process: [
        { step: "01", title: "Penilaian Dinding", desc: "Kami mengenal pasti jenis retakan dan punca lembapan sebelum memilih kaedah pembaikan yang sesuai." },
        { step: "02", title: "Pengisian Retakan", desc: "Retakan diisi dengan pengisi berkualiti dan diamplas ke permukaan rata selepas kering." },
        { step: "03", title: "Rawatan Lembapan", desc: "Sealer penyekat atau primer anti-alkali disapu untuk melindungi dinding daripada lembapan." },
        { step: "04", title: "Penyediaan Akhir", desc: "Permukaan disapu, diampas dan disedia untuk penyapuan cat oleh pasukan pengecatan." },
      ],
      faqs: [
        { q: "Adakah semua retakan perlu dibaiki sebelum mengecat?", a: "Retakan halus dan sederhana perlu diisi dan diampas supaya cat melekat dengan baik. Retakan struktur besar memerlukan pemeriksaan lanjut sebelum disapu." },
        { q: "Bolehkah anda membaiki kerosakan lembapan?", a: "Kami merawat simptom lembapan seperti kesan air dan kapur dengan sealer penyekat. Punca lembapan perlu dikenal pasti dan diatasi oleh pakar kalis air jika berterusan." },
        { q: "Adakah ini termasuk dalam pakej pengecatan?", a: "Pembaikan retakan kecil termasuk dalam persediaan pengecatan standard. Pembaikan meluas atau rawatan lembapan disebutharga berasingan." },
        { q: "Berapa lama sebelum boleh mengecat?", a: "Pengisi dan sealer perlu kering mengikut spesifikasi produk, biasanya beberapa jam hingga sehari, sebelum topcoat disapu." },
      ],
      metaTitle: "Pembaikan Retak & Lembapan Dinding KL | Harga Dari RM180",
      metaDesc: "Mengisi retakan, merawat lembapan & menyedia dinding sebelum mengecat di KL & Selangor. Elakkan cat mengelupas & kesan air. Sebut harga percuma.",
    },
    zh: {
      name: "墙面裂缝与潮湿修补",
      tagline: "在油漆前填补裂缝、处理潮气并处理墙面，以获得坚固耐用的饰面。",
      description:
        "在油漆前，出现裂缝或潮湿的墙面需要先修补，以确保饰面持久耐用。我们使用优质填缝料填补细裂缝与结构性裂缝，使用封闭底漆处理潮气，并打磨墙面至平滑。此工序可防止数月后出现剥落、起泡或水痕，对于曾受水损的空间尤为重要。",
      highlights: [
        "使用优质填缝料填补细裂缝与结构性裂缝",
        "为易受潮墙面提供防潮封闭底漆",
        "打磨至平滑表面，确保涂料最佳附着",
        "防止油漆后剥落、起泡与水痕",
        "可与整屋油漆结合进行",
      ],
      process: [
        { step: "01", title: "墙面评估", desc: "先识别裂缝类型与潮气来源，再选择合适的修补方法。" },
        { step: "02", title: "填补裂缝", desc: "使用优质填缝料填补裂缝，干燥后打磨至平整表面。" },
        { step: "03", title: "潮气处理", desc: "涂刷封闭底漆或防碱底漆，保护墙面免受潮气影响。" },
        { step: "04", title: "最终准备", desc: "清洁并打磨表面，为油漆团队涂刷做好充分准备。" },
      ],
      faqs: [
        { q: "油漆前是否所有裂缝都需修补？", a: "细裂缝与中等裂缝需填补并打磨，以确保涂料良好附着。结构性大裂缝在涂刷前需进一步检查。" },
        { q: "能否修补潮气损坏？", a: "我们会使用封闭底漆处理水痕与起粉等潮气症状。若潮气持续，需由防水专家找出并解决源头。" },
        { q: "是否包含在油漆套餐内？", a: "小裂缝修补包含在标准油漆准备工序中。大规模修补或潮气处理需另行报价。" },
        { q: "修补后多久可以油漆？", a: "填缝料与封闭底漆需按产品说明干燥，通常数小时至一天，之后才能涂刷面漆。" },
      ],
      metaTitle: "吉隆坡墙面裂缝与潮湿修补 | 起价RM180",
      metaDesc: "吉隆坡与雪兰莪油漆前墙面裂缝填补、潮气处理与表面准备。防止剥落与水痕。免费报价。",
    },
  },

  /* ── CEILING & PARTITION ──────────────────────────────────────────────── */
  "ceiling/water-damaged-ceiling-repair": {
    ms: {
      name: "Pembaikan Siling Rosak Akibat Air",
      tagline: "Membaiki siling yang bernoda, kendur atau rosak air dengan penggantian papan yang selamat dan kemasan semula yang licin.",
      description:
        "Siling yang rosak akibat kebocoran air—sama ada bernoda kuning, kendur, atau papan yang telah lembut—perlu dibaiki dengan betul. Kami mengenal pasti dan menghentikan punca kebocoran dahulu, menanggalkan papan yang rosak, menggantikannya dengan papan kalis lembapan, dan mengikis serta mengecat semula permukaan supaya kelihatan baru. Kerja ini menghalang kulat dan kerosakan struktur daripada merebak serta memulihkan keselamatan dan rupa siling anda.",
      highlights: [
        "Pengenalpastian & penghentian punca kebocoran dahulu",
        "Penggantian papan siling dengan papan kalis lembapan",
        "Pembuangan papan berkulat secara selamat",
        "Pengikisan, penyapuan & pengecatan semula yang licin",
        "Menghalang kulat & kerosakan struktur daripada merebak",
      ],
      process: [
        { step: "01", title: "Pengesanan Punca", desc: "Kami menyiasat sumber air—bocor bilik air, paip atau bumbung—sebelum kerja pembaikan bermula." },
        { step: "02", title: "Penyingkiran Papan Rosak", desc: "Papan yang lembut, berkulat atau rosak air ditanggalkan dengan selamat untuk mengelakkan kerosakan lanjut." },
        { step: "03", title: "Penggantian Papan", desc: "Papan siling kalis lembapan baharu dipasang pada kerangka sedia ada dan diikat dengan sempurna." },
        { step: "04", title: "Kemasan & Pengecatan", desc: "Permukaan dikikis, disapu dan dicat semula supaya siling kelihatan bersih dan licin seperti baharu." },
      ],
      faqs: [
        { q: "Bolehkah noda air dicat begitu sahaja?", a: "Tidak. Noda air atau papan lembut perlu ditangani dahulu, jika tidak noda akan muncul semula dan papan akan terus rosak." },
        { q: "Adakah anda mencari punca kebocoran?", a: "Ya, kami memeriksa punca kebocoran yang mungkin—bilik air, paip atau bumbung—dan menangani puncanya sebelum membaiki siling." },
        { q: "Bagaimana jika papan perlu diganti?", a: "Papan yang lembut atau berkulat akan diganti dengan papan kalis lembapan baharu untuk memastikan keselamatan dan ketahanan." },
        { q: "Berapa lama masa pembaikan?", a: "Pembaikan siling biasa mengambil masa 1–2 hari bergantung pada saiz kerosakan dan keperluan penggantian papan." },
      ],
      metaTitle: "Pembaikan Siling Rosak Air KL | Harga Dari RM180",
      metaDesc: "Pembaikan siling bernoda, kendur atau rosak air di KL & Selangor. Pengesanan punca, penggantian papan kalis lembapan & kemasan semula. Sebut harga percuma.",
    },
    zh: {
      name: "受潮天花板维修",
      tagline: "通过安全更换板材与平滑重做饰面，修复有污渍、下垂或受潮的天花板。",
      description:
        "因漏水而受损的天花板——无论是有黄渍、下垂，还是板材已软化——都需要妥善维修。我们会先找出并止住漏水源头，拆除受损板材，换装防潮板材，再重新披刮并涂刷，使表面焕然一新。此工序可防止霉菌与结构性损坏蔓延，并恢复天花板的安全与外观。",
      highlights: [
        "先识别并止住漏水源头",
        "更换防潮天花板板材",
        "安全拆除发霉板材",
        "平滑披刮、封闭与重新涂刷",
        "防止霉菌与结构性损坏蔓延",
      ],
      process: [
        { step: "01", title: "源头检测", desc: "在维修前调查水源——浴室漏水、管道或屋顶。" },
        { step: "02", title: "拆除受损板材", desc: "安全拆除软化、发霉或受潮的板材，避免进一步损坏。" },
        { step: "03", title: "更换板材", desc: "在原有骨架上安装并固定新的防潮天花板板材。" },
        { step: "04", title: "饰面与涂刷", desc: "披刮、封闭并重新涂刷表面，使天花板洁净平滑如新。" },
      ],
      faqs: [
        { q: "是否可以直接涂漆遮盖水渍？", a: "不可以。需先处理水渍或软化板材，否则污渍会再次出现，板材也会继续受损。" },
        { q: "你们会查找漏水源头吗？", a: "会，我们会检查可能的漏水源头——浴室、管道或屋顶——并在维修天花板前先行处理。" },
        { q: "如果需要更换板材怎么办？", a: "软化或发霉的板材将更换为新的防潮板材，以确保安全与耐久。" },
        { q: "维修需要多长时间？", a: "常见天花板维修约需1至2天，具体取决于损坏范围与板材更换需求。" },
      ],
      metaTitle: "吉隆坡受潮天花板维修 | 起价RM180",
      metaDesc: "吉隆坡与雪兰莪有污渍、下垂或受潮天花板的维修。源头检测、防潮板材更换与饰面重做。免费报价。",
    },
  },
  "ceiling/plaster-ceiling-installation": {
    ms: {
      name: "Pemasangan Siling Plaster",
      tagline: "Pemasangan siling plaster moden dengan kerangka laser, papan kalis lembapan dan kemasan licin untuk ruang kediaman dan komersial.",
      description:
        "Pemasangan siling plaster yang kemas untuk rumah dan ruang komersial di KL & Selangor. Pasukan kami menggunakan kerangka logam yang disetaras dengan aras laser, papan gypsum berkualiti dan kemasan licin dengan tape sambungan dan skim coat. Kami menyelaras bukaan lampu dan downlight, serta memastikan pemasangan kukuh dan tahan lama. Siling plaster yang dipasang dengan betul memberi rupa moden dan meningkatkan nilai ruang anda.",
      highlights: [
        "Kerangka logam disetaras dengan aras laser",
        "Papan gypsum berkualiti dengan kemasan licin",
        "Penyelarasan bukaan downlight & lampu",
        "Tape sambungan & skim coat untuk permukaan rata",
        "Pemasangan kukuh untuk ketahanan jangka panjang",
      ],
      process: [
        { step: "01", title: "Pengukuran & Kerangka", desc: "Kami mengukur siling, memasang kerangka logam dan menyetaras dengan aras laser." },
        { step: "02", title: "Pemasangan Papan", desc: "Papan gypsum dipasang dengan kemas dan bukaan downlight diselaraskan." },
        { step: "03", title: "Tape & Skim Coat", desc: "Sambungan papan ditape dan disapu skim coat untuk permukaan yang rata dan licin." },
        { step: "04", title: "Kemasan & Pemeriksaan", desc: "Permukaan diperiksa, dikikis ke kemasan licin dan sedia untuk dicat." },
      ],
      faqs: [
        { q: "Berapa lama masa untuk memasang siling plaster sebuah bilik?", a: "Siling bilik standard biasanya mengambil masa 2–4 hari, termasuk kerangka, papan, tape, skim coat dan pengeringan." },
        { q: "Bolehkah anda menyelaras bukaan downlight?", a: "Ya, kami menyelaras bukaan untuk downlight dan lampu dengan pasukan elektrik supaya kerja disiapkan dengan kemas." },
        { q: "Papan apa yang anda gunakan?", a: "Kami menggunakan papan gypsum berkualiti, termasuk papan kalis lembapan untuk kawasan seperti bilik air dan dapur." },
        { q: "Adakah kemasan skim coat termasuk?", a: "Ya, tape sambungan dan skim coat termasuk untuk memastikan permukaan rata dan licin sebelum dicat." },
      ],
      metaTitle: "Pemasangan Siling Plaster KL & Selangor | Sebut Harga",
      metaDesc: "Pemasangan siling plaster moden di KL & Selangor. Kerangka aras laser, papan gypsum, skim coat licin & penyelarasan downlight. Sebut harga percuma.",
    },
    zh: {
      name: "石膏天花板安装",
      tagline: "采用激光水平龙骨、防潮板材与平滑饰面，为住宅和商业空间安装现代石膏天花板。",
      description:
        "为吉隆坡与雪兰莪的住宅及商业空间提供整洁的石膏天花板安装服务。我们使用经激光水平校准的金属龙骨、优质石膏板，并通过接缝纸带与披灰获得平滑饰面。我们协调筒灯与灯具开口，确保安装稳固持久。正确安装的石膏天花板赋予现代外观，并提升空间价值。",
      highlights: [
        "经激光水平校准的金属龙骨",
        "优质石膏板与平滑饰面",
        "筒灯与灯具开口协调",
        "接缝纸带与披灰，表面平整",
        "稳固安装，长期耐用",
      ],
      process: [
        { step: "01", title: "测量与龙骨", desc: "测量天花区域，安装金属龙骨并使用激光水平校准。" },
        { step: "02", title: "板材安装", desc: "整洁安装石膏板，并协调筒灯开口。" },
        { step: "03", title: "纸带与披灰", desc: "对板材接缝贴纸带并披灰，获得平整光滑的表面。" },
        { step: "04", title: "饰面与检查", desc: "检查并打磨表面至平滑，可随时涂刷。" },
      ],
      faqs: [
        { q: "安装一间房间的石膏天花板需要多久？", a: "标准房间通常需要约2至4天，包括龙骨、板材、纸带、披灰与干燥时间。" },
        { q: "能否协调筒灯开口？", a: "可以，我们会与电工团队协调筒灯与灯具开口，使安装整洁完成。" },
        { q: "你们使用什么板材？", a: "我们使用优质石膏板，包括用于浴室和厨房等区域的防潮板材。" },
        { q: "是否包含披灰饰面？", a: "是的，包含接缝纸带与披灰，确保涂刷前表面平整光滑。" },
      ],
      metaTitle: "吉隆坡与雪兰莪石膏天花板安装 | 报价",
      metaDesc: "吉隆坡与雪兰莪现代石膏天花板安装。激光水平龙骨、石膏板、平滑披灰与筒灯协调。免费报价。",
    },
  },
  "ceiling/gypsum-board-partition-wall": {
    ms: {
      name: "Dinding Sekatan Papan Gypsum",
      tagline: "Pembinaan dinding sekatan gypsum dengan kerangka logam, penebat bunyi dan kemasan licin untuk rumah dan pejabat.",
      description:
        "Dinding sekatan gypsum untuk membahagikan ruang di rumah, pejabat dan kedai. Kami membina dengan kerangka logam yang kukuh, memasang papan gypsum dua lapis untuk kekuatan dan penebat bunyi, mengisi dengan rockwool untuk pengurangan bunyi, dan menyediakan pembukaan pintu serta kemasan licin. Sesuai untuk bilik tambahan, pejabat dalaman dan ruang komersial yang perlu dibahagikan dengan cepat dan kemas.",
      highlights: [
        "Kerangka logam yang kukuh untuk kestabilan jangka panjang",
        "Papan gypsum dua lapis untuk kekuatan & penebat bunyi",
        "Rockwool untuk pengurangan bunyi antara ruang",
        "Penyediaan pembukaan pintu & cawangan elektrik",
        "Kemasan licin sedia untuk dicat atau dinding kertas",
      ],
      process: [
        { step: "01", title: "Perancangan & Tanda", desc: "Kami menanda lokasi sekatan, menyemak kekuatan lantai/siling dan merancang pembukaan pintu." },
        { step: "02", title: "Kerangka Logam", desc: "Kerangka logam dipasang dan disetaras untuk membentuk struktur sekatan." },
        { step: "03", title: "Penebat & Papan", desc: "Rockwool dimasukkan dan papan gypsum dipasang di kedua-dua belah." },
        { step: "04", title: "Kemasan & Skim", desc: "Sambungan ditape, disapu skim coat dan permukaan sedia untuk dicat." },
      ],
      faqs: [
        { q: "Berapa lama masa untuk membina dinding sekatan gypsum?", a: "Sekatan gypsum standard (kira-kira 3 meter) biasanya mengambil masa 1–2 hari, termasuk kerangka, papan dan kemasan asas." },
        { q: "Adakah anda menyediakan penebat bunyi?", a: "Ya, kami boleh memasukkan rockwool di antara papan untuk mengurangkan penghantaran bunyi antara ruang." },
        { q: "Bolehkah pintu dimasukkan dalam sekatan?", a: "Ya, kami boleh menyediakan pembukaan pintu dan memasang bingkai pintu sebagai sebahagian daripada pembinaan sekatan." },
        { q: "Adakah kemasan licin termasuk?", a: "Ya, tape sambungan dan skim coat termasuk supaya permukaan sedia untuk dicat." },
      ],
      metaTitle: "Dinding Sekatan Gypsum KL & Selangor | Sebut Harga",
      metaDesc: "Pembinaan dinding sekatan gypsum untuk rumah & pejabat di KL & Selangor. Kerangka logam, rockwool penebat bunyi & kemasan licin. Sebut harga percuma.",
    },
    zh: {
      name: "石膏板隔墙",
      tagline: "采用金属龙骨、隔音材料与平滑饰面，为住宅和办公室建造石膏板隔墙。",
      description:
        "用于划分住宅、办公室与店铺空间的石膏板隔墙。我们使用坚固的金属龙骨，双面安装石膏板以增强强度并隔音，填充岩棉以减少噪音，并预留门洞、完成平滑饰面。适合增设房间、内部办公室及需要快速整洁分隔的商业空间。",
      highlights: [
        "坚固金属龙骨，长期稳定",
        "双面石膏板，增强强度并隔音",
        "岩棉填充，减少空间间噪音",
        "预留门洞与电线开孔",
        "平滑饰面，可直接涂刷或贴墙纸",
      ],
      process: [
        { step: "01", title: "规划与放线", desc: "标记隔墙位置，检查地面/天花承载，并规划门洞。" },
        { step: "02", title: "金属龙骨", desc: "安装并校准金属龙骨，构成隔墙结构。" },
        { step: "03", title: "隔音与板材", desc: "填入岩棉，并在两侧安装石膏板。" },
        { step: "04", title: "饰面与披灰", desc: "对接缝贴纸带并披灰，表面可随时涂刷。" },
      ],
      faqs: [
        { q: "建造石膏板隔墙需要多久？", a: "标准隔墙（约3米）通常需要1至2天，包括龙骨、板材与基础饰面。" },
        { q: "是否提供隔音处理？", a: "是的，我们可在板材间填充岩棉，以减少空间之间的声音传递。" },
        { q: "隔墙内可以安装门吗？", a: "可以，我们可在建造隔墙时预留门洞并安装门框。" },
        { q: "是否包含平滑饰面？", a: "是的，包含接缝纸带与披灰，使表面可随时涂刷。" },
      ],
      metaTitle: "吉隆坡与雪兰莪石膏板隔墙 | 报价",
      metaDesc: "为吉隆坡与雪兰莪住宅与办公室建造石膏板隔墙。金属龙骨、岩棉隔音与平滑饰面。免费报价。",
    },
  },
  "ceiling/cornice-and-l-box-concealed-light-trough": {
    ms: {
      name: "Cornice & L-Box Lampu Tersembunyi",
      tagline: "Pemasangan cornice dan L-box dengan lampu tersembunyi untuk pencahayaan siling yang moden dan mewah.",
      description:
        "Cornice dan L-box memberi rupa moden dan elegan pada siling, terutamanya dengan lampu tersembunyi (concealed lighting). Kami mereka dan memasang L-box mengikut ukuran ruang, menyediakan saluran untuk jalur LED, dan menghasilkan kemasan licin yang kemas. Hasilnya pencahayaan siling yang lembut dan bergaya yang menambah kedalaman pada ruang tamu, ruang makan dan bilik tidur.",
      highlights: [
        "Reka bentuk L-box & cornice mengikut ukuran ruang",
        "Saluran tersembunyi untuk jalur LED & lampu",
        "Kemasan licin yang kemas sedia untuk dicat",
        "Pencahayaan siling moden yang menambah kedalaman",
        "Penyelarasan dengan juruelektrik untuk sambungan lampu",
      ],
      process: [
        { step: "01", title: "Reka Bentuk & Ukuran", desc: "Kami mereka bentuk L-box mengikut saiz dan gaya ruang anda, serta menandakan kedudukan lampu." },
        { step: "02", title: "Pembinaan Kerangka", desc: "Kerangka L-box dibina dan dipasang pada siling dengan kukuh." },
        { step: "03", title: "Pemasangan Papan & Lampu", desc: "Papan gypsum dipasang dengan saluran untuk jalur LED, dan pembukaan lampu disediakan." },
        { step: "04", title: "Kemasan & Pemeriksaan", desc: "Permukaan ditape, disapu dan diperiksa untuk kemasan licin sebelum dicat." },
      ],
      faqs: [
        { q: "Apakah itu L-box?", a: "L-box ialah kotak siling menonjol berbentuk L yang sering digunakan untuk menyembunyikan jalur LED dan mencipta pencahayaan siling tidak langsung yang lembut." },
        { q: "Bolehkah jalur LED dipasang?", a: "Ya, kami menyediakan saluran tersembunyi untuk jalur LED dan menyelaras sambungan elektrik dengan juruelektrik." },
        { q: "Berapa lama masa untuk memasang L-box?", a: "L-box untuk satu bilik biasanya mengambil masa 1–2 hari, termasuk kerangka, papan dan kemasan." },
        { q: "Adakah ini termasuk dalam pakej siling?", a: "L-box dan cornice biasanya disebutharga berasingan daripada siling rata kerana kerja reka bentuk dan pencahayaan tambahan." },
      ],
      metaTitle: "Cornice & L-Box Lampu Tersembunyi KL | Sebut Harga",
      metaDesc: "Pemasangan cornice & L-box dengan lampu tersembunyi di KL & Selangor. Pencahayaan siling moden & mewah, kemasan licin. Sebut harga percuma.",
    },
    zh: {
      name: "顶角线与隐藏灯槽L-Box",
      tagline: "安装顶角线与L-Box，配隐藏式灯光，打造现代奢华的天花照明。",
      description:
        "顶角线与L-Box为天花板赋予现代而优雅的外观，尤其搭配隐藏式灯光时效果更佳。我们根据空间尺寸设计并安装L-Box，预留LED灯带槽位，并完成整洁平滑的饰面。最终获得柔和时尚的天花照明，为客厅、餐厅和卧室增添层次感。",
      highlights: [
        "根据空间尺寸设计L-Box与顶角线",
        "为LED灯带与灯具预留隐藏槽位",
        "整洁平滑饰面，可随时涂刷",
        "现代天花照明，增添空间层次",
        "与电工协调灯具接线",
      ],
      process: [
        { step: "01", title: "设计与测量", desc: "根据空间大小与风格设计L-Box，并标记灯具位置。" },
        { step: "02", title: "骨架施工", desc: "牢固建造并安装L-Box骨架。" },
        { step: "03", title: "板材与灯具安装", desc: "安装石膏板并预留LED灯带槽位，预留灯具开口。" },
        { step: "04", title: "饰面与检查", desc: "贴纸带、披灰并检查，确保涂刷前饰面平滑。" },
      ],
      faqs: [
        { q: "什么是L-Box？", a: "L-Box是凸出的L形吊顶盒，常用于隐藏LED灯带，营造柔和的天花间接照明效果。" },
        { q: "可以安装LED灯带吗？", a: "可以，我们预留隐藏灯带槽位，并与电工协调电气接线。" },
        { q: "安装L-Box需要多久？", a: "一间房间的L-Box通常需要1至2天，包括骨架、板材与饰面。" },
        { q: "是否包含在天花板套餐内？", a: "L-Box与顶角线通常因涉及设计与灯光工作而单独报价，与平顶安装分开。" },
      ],
      metaTitle: "吉隆坡顶角线与隐藏灯槽L-Box | 报价",
      metaDesc: "吉隆坡与雪兰莪顶角线与L-Box隐藏灯光安装。现代奢华天花照明，平滑饰面。免费报价。",
    },
  },

  /* ── PLASTER CEILING ──────────────────────────────────────────────────── */
  "plaster-ceiling/flat-plaster-ceiling": {
    ms: {
      name: "Siling Plaster Rata",
      tagline: "Siling plaster rata satu aras dengan kemasan skim licin yang bersih, sesuai untuk ruang tamu, bilik tidur dan pejabat.",
      description:
        "Siling plaster rata ialah pilihan paling kemas dan serba guna untuk rumah dan pejabat. Kami memasang kerangka logam galvanis (GI) yang kukuh, menggantung papan gypsum kalis lembapan dan kalis api daripada jenama tempatan terkemuka seperti Knauf, BNBM dan Gyproc, kemudian menyapu dua lapisan skim coat yang dikikis licin untuk permukaan sedia cat. Setiap pemasangan disertakan panel akses untuk penyelenggaraan dan penyelarasan dengan juruelektrik bagi bukaan lampu dan kipas siling. Hasilnya siling yang rata, bersih dan tahan lama yang menjadi kanvas terbaik untuk pengecatan dan pencahayaan.",
      highlights: [
        "Siling rata satu aras dengan kemasan skim licin sedia cat",
        "Kerangka logam galvanis (GI) kalis karat dengan jarak gantungan yang betul",
        "Papan gypsum kalis lembapan dan kalis api (Knauf, BNBM, Gyproc)",
        "Panel akses untuk penyelenggaraan dan bukaan lampu diselaraskan",
        "Dua lapisan skim coat yang dikikis licin untuk kemasan kilang",
      ],
      process: [
        { step: "01", title: "Pengukuran & Tanda", desc: "Kami mengukur siling, menandakan kedudukan lampu dan kipas, serta menyemak ketinggian aras untuk kerangka." },
        { step: "02", title: "Kerangka GI", desc: "Kerangka logam galvanis dipasang dan disetaras dengan aras laser, dengan gantungan yang kukuh." },
        { step: "03", title: "Pemasangan Papan", desc: "Papan gypsum dipasang kemas, bukaan lampu dan panel akses disediakan." },
        { step: "04", title: "Skim & Kemasan", desc: "Sambungan ditape, dua lapisan skim coat disapu dan dikikis licin sebelum dicat." },
      ],
      faqs: [
        { q: "Berapa tinggi siling rata biasanya dipasang?", a: "Ketinggian siling rata biasanya dipasang 8 hingga 10 kaki dari lantai, bergantung pada ketinggian asal dan keperluan ruang anda." },
        { q: "Adakah bukaan lampu dan kipas siling disediakan?", a: "Ya, kami menyelaras bukaan untuk downlight, lampu dan kipas siling dengan juruelektrik semasa pemasangan." },
        { q: "Berapa lama masa untuk memasang siling rata sebuah bilik?", a: "Siling rata sebuah bilik biasa mengambil masa 2–4 hari, termasuk kerangka, papan, skim coat dan pengeringan." },
        { q: "Adakah panel akses disediakan?", a: "Ya, kami menyediakan panel akses pada kedudukan strategik supaya pendawaian dan penyelenggaraan mudah dijalankan." },
      ],
      metaTitle: "Siling Plaster Rata KL & Selangor | Harga Dari RM10/kaki",
      metaDesc: "Pemasangan siling plaster rata satu aras di KL & Selangor. Kerangka GI kalis karat, papan gypsum berkualiti, kemasan skim licin sedia cat. Sebut harga percuma.",
    },
    zh: {
      name: "平顶石膏天花板",
      tagline: "为客厅、卧室与办公室提供简洁单层平顶石膏天花，平滑披灰饰面。",
      description:
        "平顶石膏天花是住宅与办公室最整洁、最百搭的选择。我们安装坚固的热镀锌（GI）金属龙骨，悬挂来自Knauf、BNBM和Gyproc等知名马来西亚品牌的防潮防火石膏板，然后涂刷两层披灰并打磨至可涂刷的平滑表面。每次安装均包含检修口，并与电工协调灯具与吊扇开口。最终获得平整、洁净且耐用的天花板，是涂漆与照明的理想基底。",
      highlights: [
        "单层平顶，平滑披灰饰面，可直接涂刷",
        "防锈热镀锌（GI）金属龙骨，吊点间距正确",
        "防潮防火石膏板（Knauf、BNBM、Gyproc）",
        "检修口与灯具开口协调预留",
        "两层披灰打磨，工厂级平滑饰面",
      ],
      process: [
        { step: "01", title: "测量与放线", desc: "测量天花区域，标记灯具与吊扇位置，并检查龙骨架设高度。" },
        { step: "02", title: "GI龙骨", desc: "安装并激光校准热镀锌金属龙骨，吊点牢固。" },
        { step: "03", title: "安装板材", desc: "整洁安装石膏板，预留灯具开口与检修口。" },
        { step: "04", title: "披灰与饰面", desc: "接缝贴纸带，涂刷两层披灰并打磨平滑，可随时涂刷。" },
      ],
      faqs: [
        { q: "平顶天花通常安装多高？", a: "平顶天花通常距地面8至10英尺安装，具体取决于原有高度与您的空间需求。" },
        { q: "是否预留灯具与吊扇开口？", a: "是的，我们会与电工协调，在安装时预留筒灯、灯具与吊扇的开口。" },
        { q: "安装一间房间的平顶天花需要多久？", a: "一间标准房间通常需要2至4天，包括龙骨、板材、披灰与干燥时间。" },
        { q: "是否提供检修口？", a: "是的，我们会在关键位置设置检修口，便于日后布线维修与维护。" },
      ],
      metaTitle: "吉隆坡与雪兰莪平顶石膏天花 | 每平方尺RM10起",
      metaDesc: "吉隆坡与雪兰莪单层平顶石膏天花安装。防锈GI龙骨、优质石膏板、平滑披灰可涂刷。免费报价。",
    },
  },
  "plaster-ceiling/tiered-and-l-box-ceiling": {
    ms: {
      name: "Siling Bertingkat & L-Box",
      tagline: "Siling dua atau tiga aras dengan L-box tersembunyi untuk jalur LED dan pencahayaan tidak langsung yang moden.",
      description:
        "Siling bertingkat dan L-box menambah kedalaman dan gaya pada ruang moden. Kami membina dua atau tiga aras siling dengan kerangka logam yang kukuh, menyediakan L-box tersembunyi untuk jalur LED, dan menyelaras pendawaian lampu dengan juruelektrik. Hasilnya pencahayaan siling tidak langsung yang lembut dan kemasan licin yang menyerlahkan seni bina ruang. Sesuai untuk ruang tamu, ruang makan dan bilik tidur utama yang mahu penampilan kontemporari yang bersih.",
      highlights: [
        "Reka bentuk dua atau tiga aras yang disesuaikan dengan ruang anda",
        "L-box tersembunyi untuk jalur LED dan pencahayaan tidak langsung",
        "Kerangka logam kukuh untuk struktur bertingkat yang tahan lama",
        "Penyelarasan pendawaian lampu dengan juruelektrik",
        "Kemasan licin yang menyerlahkan garis dan aras siling",
      ],
      process: [
        { step: "01", title: "Reka Bentuk", desc: "Kami mereka bentuk aras dan L-box mengikut saiz ruang serta kedudukan perabot dan lampu." },
        { step: "02", title: "Kerangka Bertingkat", desc: "Kerangka dua atau tiga aras dibina dengan kukuh pada kedudukan yang disetaras." },
        { step: "03", title: "L-Box & Papan", desc: "L-box dibina untuk jalur LED dan papan gypsum dipasang mengikut aras." },
        { step: "04", title: "Lampu & Kemasan", desc: "Pendawaian lampu diselaraskan, permukaan disapu dan dikikis licin." },
      ],
      faqs: [
        { q: "Apakah itu L-box?", a: "L-box ialah aras siling menonjol berbentuk L yang menyembunyikan jalur LED untuk mencipta pencahayaan siling tidak langsung yang lembut dan moden." },
        { q: "Bolehkah jalur LED dipasang dalam L-box?", a: "Ya, kami menyediakan saluran tersembunyi untuk jalur LED dan menyelaras sambungan elektrik dengan juruelektrik." },
        { q: "Berapa tinggi aras siling yang disyorkan?", a: "Ketinggian bergantung pada siling asal; aras biasanya turun 2 hingga 4 inci setiap peringkat supaya ruang tidak terasa rendah." },
        { q: "Adakah siling bertingkat lebih mahal?", a: "Siling bertingkat dan L-box memerlukan lebih banyak kerangka dan kerja kemasan, jadi harganya lebih tinggi daripada siling rata, bergantung pada kerumitan reka bentuk." },
      ],
      metaTitle: "Siling Bertingkat & L-Box KL | Harga Dari RM14/kaki",
      metaDesc: "Siling bertingkat dan L-box dengan jalur LED tersembunyi di KL & Selangor. Reka bentuk moden, kerangka kukuh, kemasan licin. Sebut harga percuma.",
    },
    zh: {
      name: "分层与L-Box天花板",
      tagline: "双层或三层吊顶，配隐藏式L-Box，用于LED灯带与现代间接照明。",
      description:
        "分层吊顶与L-Box为现代空间增添层次感与格调。我们以坚固的金属龙骨建造两层或三层吊顶，预留隐藏式L-Box以放置LED灯带，并与电工协调灯具布线。最终获得柔和的间接天花照明以及突出空间建筑感的平滑饰面。非常适合追求简洁现代风格的客厅、餐厅与主卧。",
      highlights: [
        "根据您的空间定制两层或三层设计",
        "隐藏式L-Box，用于LED灯带与间接照明",
        "坚固金属龙骨，确保分层结构持久",
        "与电工协调灯具布线",
        "平滑饰面，突出吊顶线条与层次",
      ],
      process: [
        { step: "01", title: "设计", desc: "根据空间尺寸以及家具与灯具位置，设计层次与L-Box。" },
        { step: "02", title: "分层龙骨", desc: "在已校准位置牢固建造两层或三层吊顶龙骨。" },
        { step: "03", title: "L-Box与板材", desc: "建造L-Box以放置LED灯带，并逐层安装石膏板。" },
        { step: "04", title: "灯具与饰面", desc: "协调灯具布线，披灰并打磨表面至平滑。" },
      ],
      faqs: [
        { q: "什么是L-Box？", a: "L-Box是凸出的L形吊顶层次，用于隐藏LED灯带，营造柔和而现代的天花间接照明。" },
        { q: "L-Box内可安装LED灯带吗？", a: "可以，我们预留隐藏灯带槽位，并与电工协调电气接线。" },
        { q: "推荐吊顶高度多少？", a: "视原有天花高度而定；每层通常下降约2至4英寸，以免空间显得压抑。" },
        { q: "分层吊顶是否更贵？", a: "分层吊顶与L-Box需要更多龙骨与饰面工作，因此比平顶更贵，具体取决于设计的复杂程度。" },
      ],
      metaTitle: "吉隆坡分层与L-Box吊顶 | 每平方尺RM14起",
      metaDesc: "吉隆坡与雪兰莪分层吊顶与隐藏LED灯带L-Box。现代设计、坚固龙骨、平滑饰面。免费报价。",
    },
  },
  "plaster-ceiling/cove-and-curved-ceiling": {
    ms: {
      name: "Siling Cove & Melengkung",
      tagline: "Siling melengkung, cove atau barrel tersuai dengan kerangka fleksibel untuk pencahayaan ambien yang mewah.",
      description:
        "Siling cove dan melengkung ialah pilihan mewah untuk ruang yang mahu identiti seni bina tersendiri. Kami membina kerangka melengkung atau barrel menggunakan kerangka fleksibel, memasang papan gypsum yang dibentuk mengikut lengkung, dan menyediakan saluran tersembunyi untuk jalur LED bagi pencahayaan ambien yang lembut. Kerja ini memerlukan kepakaran tinggi dalam membentuk papan dan menyempurnakan kemasan tanpa sambungan yang kelihatan. Hasilnya siling yang elegan yang menjadi pusat perhatian ruang tamu, ruang makan atau lorong masuk.",
      highlights: [
        "Reka bentuk cove, melengkung atau barrel tersuai",
        "Kerangka fleksibel untuk membentuk lengkung yang tepat",
        "Saluran tersembunyi untuk jalur LED pencahayaan ambien",
        "Kemasan licin tanpa sambungan yang kelihatan",
        "Penampilan seni bina yang elegan dan mewah",
      ],
      process: [
        { step: "01", title: "Reka Bentuk & Templat", desc: "Kami mereka bentuk lengkung dan menyediakan templat untuk memastikan bentuk yang tepat sebelum kerja bermula." },
        { step: "02", title: "Kerangka Fleksibel", desc: "Kerangka melengkung atau barrel dipasang dan disetaras mengikut templat." },
        { step: "03", title: "Pembentukan Papan", desc: "Papan gypsum dibentuk dan dipasang mengikut lengkung, dengan tape pada sambungan." },
        { step: "04", title: "Lampu & Kemasan", desc: "Saluran LED disediakan dan permukaan disapu serta dikikis licin." },
      ],
      faqs: [
        { q: "Bolehkah siling melengkung dipasang di rumah biasa?", a: "Ya, siling cove atau barrel boleh dipasang di mana-mana ruang dengan ketinggian siling yang mencukupi; kami menilai dahulu ruang anda." },
        { q: "Adakah jalur LED disertakan?", a: "Kami menyediakan saluran tersembunyi dan menyelaras pendawaian; jalur LED boleh dibekalkan oleh anda atau kami mengikut pilihan." },
        { q: "Adakah siling melengkung lebih mahal?", a: "Ya, siling melengkung memerlukan kerja membentuk papan dan kemasan yang lebih tinggi, jadi harganya lebih tinggi daripada siling rata." },
        { q: "Berapa lama masa untuk memasangnya?", a: "Siling cove atau melengkung biasanya mengambil masa 3–5 hari bergantung pada saiz dan kerumitan lengkung." },
      ],
      metaTitle: "Siling Cove & Melengkung KL | Harga Dari RM22/kaki",
      metaDesc: "Siling cove, melengkung & barrel tersuai di KL & Selangor. Pencahayaan ambien mewah, kemasan licin tanpa sambungan. Sebut harga percuma.",
    },
    zh: {
      name: "弧形与灯槽天花板",
      tagline: "定制弧形、灯槽或拱形吊顶，配柔性龙骨，打造奢华环境照明。",
      description:
        "灯槽与弧形吊顶是追求独特建筑风格的奢华之选。我们使用柔性龙骨搭建弧形或拱形结构，安装按曲线成形的石膏板，并预留隐藏槽位以放置LED灯带，营造柔和的环境照明。此工序对板材成形与无缝饰面的技艺要求极高。最终获得优雅的吊顶，成为客厅、餐厅或入口通道的视觉焦点。",
      highlights: [
        "定制灯槽、弧形或拱形设计",
        "柔性龙骨，精确成形曲线",
        "隐藏槽位，用于LED环境照明灯带",
        "无缝平滑饰面",
        "优雅奢华的建筑风格",
      ],
      process: [
        { step: "01", title: "设计与模板", desc: "设计曲线并制作模板，确保施工前形状精确。" },
        { step: "02", title: "柔性龙骨", desc: "按模板安装并校准弧形或拱形龙骨。" },
        { step: "03", title: "板材成形", desc: "石膏板按曲线成形安装，接缝贴纸带。" },
        { step: "04", title: "灯具与饰面", desc: "预留LED槽位，披灰并打磨表面至平滑。" },
      ],
      faqs: [
        { q: "普通住宅可以安装弧形吊顶吗？", a: "可以，只要空间高度足够即可安装灯槽或拱形吊顶；我们会先评估您的空间。" },
        { q: "是否包含LED灯带？", a: "我们预留隐藏槽位并协调布线；灯带可由您自备或由我们提供，视选择而定。" },
        { q: "弧形吊顶是否更贵？", a: "是的，弧形吊顶需要更多板材成形与饰面工艺，因此价格高于平顶。" },
        { q: "安装需要多长时间？", a: "灯槽或弧形吊顶通常需要3至5天，具体取决于面积与曲线的复杂程度。" },
      ],
      metaTitle: "吉隆坡弧形与灯槽吊顶 | 每平方尺RM22起",
      metaDesc: "吉隆坡与雪兰莪定制灯槽、弧形与拱形吊顶。奢华环境照明，无缝平滑饰面，工艺精湛。免费报价。",
    },
  },
  "plaster-ceiling/ceiling-repair-and-re-skim": {
    ms: {
      name: "Pembaikan & Skim Semula Siling",
      tagline: "Membaiki siling yang rosak air, kendur atau retak, menguatkan struktur dan menyapu semula skim untuk kemasan baharu.",
      description:
        "Siling yang rosak akibat kebocoran air, kendur atau retak perlu dibaiki sebelum ia menjejaskan keselamatan dan rupa ruang. Kami menanggalkan papan yang rosak atau lembut, menguatkan semula kerangka jika perlu, menggantikan papan kalis lembapan, dan menyapu semula skim coat untuk kemasan yang licin dan sedia cat. Proses ini juga merangkumi rawatan kulat dan noda air supaya siling kelihatan bersih dan baharu. Sesuai untuk ruang yang sebelum ini mengalami kebocoran atau kerosakan lembapan.",
      highlights: [
        "Penggantian papan rosak atau lembut dengan papan kalis lembapan",
        "Pengukuhan semula kerangka jika diperlukan",
        "Rawatan kulat dan noda air sebelum kemasan",
        "Skim semula yang licin sedia cat",
        "Mengelakkan kerosakan berulang dengan pengesanan punca",
      ],
      process: [
        { step: "01", title: "Penilaian Kerosakan", desc: "Kami memeriksa siling, mengenal pasti punca air dan menilai tahap kerosakan papan serta kerangka." },
        { step: "02", title: "Penyingkiran & Penggantian", desc: "Papan rosak ditanggalkan, kerangka diperkukuh dan papan baharu dipasang." },
        { step: "03", title: "Rawatan & Tape", desc: "Kulat dan noda dirawat, sambungan papan ditape dengan teliti." },
        { step: "04", title: "Skim & Kemasan", desc: "Dua lapisan skim disapu dan dikikis licin untuk permukaan sedia cat." },
      ],
      faqs: [
        { q: "Bolehkah siling yang kendur dibaiki tanpa diganti?", a: "Bergantung pada tahap kerosakan; papan yang lembut atau kendur biasanya perlu diganti untuk keselamatan dan hasil yang tahan lama." },
        { q: "Adakah anda merawat noda air dan kulat?", a: "Ya, kami merawat kulat dan menyekat noda air sebelum menyapu skim semula supaya ia tidak muncul kembali." },
        { q: "Bagaimana jika kerangka juga rosak?", a: "Kami akan mengukuhkan atau menggantikan bahagian kerangka yang rosak untuk memastikan siling stabil dan selamat." },
        { q: "Berapa lama masa untuk membaiki siling?", a: "Pembaikan siling biasa mengambil masa 1–2 hari bergantung pada saiz kerosakan dan keperluan penggantian." },
      ],
      metaTitle: "Pembaikan & Skim Semula Siling KL | Harga Dari RM8/kaki",
      metaDesc: "Pembaikan siling rosak air, kendur & retak di KL & Selangor. Penggantian papan, rawatan kulat & skim semula licin. Sebut harga percuma.",
    },
    zh: {
      name: "天花板维修与重新披灰",
      tagline: "修复受潮、下垂或开裂的天花板，加固结构并重新披灰，获得焕新饰面。",
      description:
        "受漏水、下垂或开裂影响的天花板需及时修复，以免影响空间安全与美观。我们会拆除受损或软化的板材，必要时加固龙骨，更换防潮板材，并重新披灰以获得平滑、可涂刷的饰面。此工序还包括处理霉斑与水渍，使天花板洁净如新。适用于曾受漏水或潮气影响的房间。",
      highlights: [
        "更换受损或软化板材为防潮板材",
        "必要时加固龙骨",
        "在饰面前处理霉斑与水渍",
        "平滑披灰，可直接涂刷",
        "通过源头检测防止再次损坏",
      ],
      process: [
        { step: "01", title: "损坏评估", desc: "检查天花，识别水损源头，并评估板材与龙骨受损程度。" },
        { step: "02", title: "拆除与更换", desc: "拆除受损板材，加固龙骨并安装新板材。" },
        { step: "03", title: "处理与纸带", desc: "处理霉斑与水渍，仔细为板材接缝贴纸带。" },
        { step: "04", title: "披灰与饰面", desc: "涂刷两层披灰并打磨平滑，可随时涂刷。" },
      ],
      faqs: [
        { q: "下垂的天花板可以不更换直接修复吗？", a: "视损坏程度而定；软化或下垂的板材通常需更换，以确保安全与持久。" },
        { q: "你们会处理水渍与霉斑吗？", a: "会的，我们会处理霉斑并在重新披灰前封闭水渍，防止其再次出现。" },
        { q: "如果龙骨也损坏了怎么办？", a: "我们会加固或更换受损的龙骨部位，确保天花板稳固安全。" },
        { q: "维修天花板需要多长时间？", a: "常见天花板维修约需1至2天，具体取决于损坏范围与更换需求。" },
      ],
      metaTitle: "吉隆坡天花板维修与重新披灰 | 每平方尺RM8起",
      metaDesc: "吉隆坡与雪兰莪受潮、下垂与开裂天花板的维修。板材更换、霉斑处理与平滑披灰。免费报价。",
    },
  },

  /* ── WATERPROOFING ────────────────────────────────────────────────────── */
  "waterproofing/pu-high-pressure-injection-grouting": {
    ms: {
      name: "Grouting Suntikan Tekanan Tinggi PU",
      tagline: "Kaedah tidak merosakkan untuk mengedap kebocoran slab konkrit antara tingkat tanpa memecahkan jubin.",
      description:
        "Grouting suntikan tekanan tinggi poliuretana (PU) ialah kaedah pembaikan kebocoran paling canggih untuk slab konkrit antara tingkat. Kami menggerudi lubang kecil 10mm pada sudut 45 darjah bersilang dengan retakan, kemudian mengepam buih PU cecair pada tekanan tinggi. Buih bertindak balas dengan kelembapan dan mengembang sehingga 20 kali saiznya, mengisi setiap saluran kapilari mikroskopik. Ia mengeras menjadi pengedap getah fleksibel yang kekal menghalang air sepenuhnya. Kaedah ini membolehkan kami menghentikan kebocoran siling bilik air, balkoni dan ruang bawah tanah tanpa merobek jubin mewah anda.",
      highlights: [
        "Suntikan PU mengembang sehingga 20 kali saiz untuk mengisi setiap retakan mikro",
        "Tiada pemecahan jubin — hanya lubang gerudi kecil 10mm",
        "Pengedap getah fleksibel kekal yang menahan pergerakan struktur",
        "Berkesan untuk slab konkrit, sendi pengembangan dan kebocoran paip terbenam",
        "Ujian kolam air 24–48 jam selepas suntikan untuk mengesahkan pengedap",
      ],
      process: [
        { step: "01", title: "Pemetaan Terma", desc: "Kami menggunakan kamera terma untuk mengesan laluan air dan mengenal pasti titik kepekatan lembapan tertinggi di bawah slab." },
        { step: "02", title: "Penggerudian Port", desc: "Lubang kecil 10mm digerudi pada sudut 45 darjah bersilang dengan retakan konkrit, biasanya 3–5 port setiap meter." },
        { step: "03", title: "Pemasangan Packer", desc: "Packer suntikan dipasang ke dalam setiap lubang untuk menyambung pam tekanan tinggi ke slab." },
        { step: "04", title: "Suntikan PU", desc: "Buih poliuretana dipam masuk pada tekanan tinggi, mengembang serta-merta dan mengisi setiap saluran kapilari." },
        { step: "05", title: "Penyingkiran & Pengedap", desc: "Packers ditanggalkan selepas pengerasan, lubang ditutup dengan grout kalis air, dan ujian kolam dijalankan." },
      ],
      faqs: [
        { q: "Berapa lama grouting PU bertahan?", a: "Pengedap PU yang diawet adalah kekal dan fleksibel, biasanya bertahan 10+ tahun. Ia boleh menahan pergerakan struktur kecil tanpa retak." },
        { q: "Adakah ini berkesan untuk kebocoran bilik air?", a: "Ya, ia sangat berkesan untuk kebocoran slab konkrit bilik air di mana jubin tidak mahu dipecahkan. Kami menyuntik dari bawah slab dan air berhenti serta-merta." },
        { q: "Adakah saya perlu memecahkan jubin saya?", a: "Tidak. Kaedah ini direka khusus untuk mengelakkan pemecahan jubin. Hanya lubang kecil 10mm digerudi dari bawah slab (siling bilik bawah)." },
        { q: "Berapa lama proses ini mengambil masa?", a: "Kebanyakan kerja grouting PU untuk satu kawasan boleh disiapkan dalam satu hari, dengan ujian kolam dijalankan selama 24–48 jam selepas itu." },
      ],
      metaTitle: "Grouting Suntikan PU KL & Selangor | Harga Dari RM300/titik",
      metaDesc: "Grouting suntikan tekanan tinggi PU untuk kebocoran slab konkrit di KL & Selangor. Tanpa pecah jubin, pengedap kekal fleksibel. Sebut harga percuma.",
    },
    zh: {
      name: "PU 高压灌浆注射",
      tagline: "无需凿开瓷砖即可密封楼层间混凝土板漏水的非破坏性方法。",
      description:
        "聚氨酯（PU）高压灌浆是修复楼层间混凝土板漏水的最先进方法。我们以 45 度角钻取 10 毫米小孔与裂缝相交，然后在高压下注入液态 PU 泡沫。泡沫遇湿气反应并膨胀至原体积的 20 倍，填满每一处微观毛细通道。它固化成柔韧且永久的橡胶密封层，完全阻挡水分渗透。此方法可让我们在不凿开您高级瓷砖的情况下，止住浴室、阳台与地下室天花板的漏水。",
      highlights: [
        "PU 泡沫膨胀至 20 倍，填满每一处微观裂缝",
        "无需凿砖——仅需 10 毫米小钻孔",
        "柔韧的永久橡胶密封，可承受结构微动",
        "对混凝土板、伸缩缝与埋管漏水均有效",
        "注射后进行 24–48 小时蓄水测试验证密封",
      ],
      process: [
        { step: "01", title: "热成像测绘", desc: "使用热成像仪追踪水分路径，识别混凝土板下最高含水浓度点。" },
        { step: "02", title: "钻注射孔", desc: "以 45 度角钻取 10 毫米小孔与裂缝相交，通常每米 3–5 个注射点。" },
        { step: "03", title: "安装注射针头", desc: "将注射针头装入每个孔中，连接高压泵至混凝土板。" },
        { step: "04", title: "PU 注射", desc: "在高压下注入聚氨酯泡沫，瞬间膨胀填满所有毛细通道。" },
        { step: "05", title: "拆除与密封", desc: "固化后拆除针头，用防水灌浆封堵钻孔，并进行蓄水测试。" },
      ],
      faqs: [
        { q: "PU 灌浆能持续多久？", a: "固化后的 PU 密封层是永久且柔韧的，通常可使用 10 年以上。它能承受轻微的结构位移而不开裂。" },
        { q: "对浴室漏水有效吗？", a: "非常有效，特别适合不想砸砖的浴室混凝土板漏水。我们从板下方注射，水立即停止。" },
        { q: "需要砸开我的瓷砖吗？", a: "不需要。此方法专为避免砸砖而设计。仅需从下方天花板钻取 10 毫米小孔。" },
        { q: "整个过程需要多久？", a: "大多数单区域的 PU 灌浆可在一天内完成，之后进行 24–48 小时蓄水测试。" },
      ],
      metaTitle: "吉隆坡与雪兰莪 PU 灌浆注射 | 每点 RM300 起",
      metaDesc: "吉隆坡与雪兰莪混凝土板漏水的 PU 高压灌浆。无需凿砖，永久柔韧密封。免费报价。",
    },
  },
  "waterproofing/bathroom-and-wet-area-waterproofing": {
    ms: {
      name: "Kalis Air Bilik Air & Kawasan Basah",
      tagline: "Aplikasi membran kalis air kimia untuk bilik mandi, tandas dan bilik basuh komersial dengan jaminan kebocoran.",
      description:
        "Bilik air dan kawasan basah adalah sumber kebocoran paling biasa di rumah Malaysia. Kami menyediakan perkhidmatan kalis air menyeluruh yang merangkumi penanggalan jubin lama (jika perlu), persediaan substrat sehingga konkrit mentah, aplikasi membran kalis air berbilang lapisan (simen atau akrilik bertetulang gentian), dan ujian kolam air selama 24–48 jam sebelum jubin baharu dipasang. Sistem kami direka untuk menahan penggunaan harian, pendedahan kepada bahan pencuci dan pergerakan struktur kecil. Sesuai untuk bilik air utama, tandas tetamu, bilik mandi komersial dan kawasan dapur basah.",
      highlights: [
        "Membran kalis air berbilang lapisan (simen atau akrilik bertetulang gentian)",
        "Persediaan substrat sehingga konkrit mentah untuk lekatan maksimum",
        "Ujian kolam air 24–48 jam sebelum jubin dipasang",
        "Rawatan sudut dan sendi dengan bahan fleksibel untuk mengelakkan retak",
        "Jaminan bertulis sehingga 5 tahun terhadap kebocoran",
      ],
      process: [
        { step: "01", title: "Penanggalan & Persediaan", desc: "Jubin lama ditanggalkan (jika perlu) dan substrat digilap sehingga konkrit mentah untuk lekatan optimum." },
        { step: "02", title: "Pembaikan Substrat", desc: "Retakan dan lubang diisi, sudut dibuat bulat (fillet) untuk mengelakkan titik lemah pada membran." },
        { step: "03", title: "Aplikasi Membran", desc: "Tiga lapisan membran kalis air disapu dengan teliti, dengan setiap lapisan dibiarkan kering sepenuhnya sebelum yang seterusnya." },
        { step: "04", title: "Ujian Kolam", desc: "Air ditakung selama 24–48 jam dan siling di bawah diperiksa untuk mengesahkan tiada pemindahan lembapan." },
        { step: "05", title: "Perlindungan & Jubin", desc: "Lapisan pelindung disapu dan jubin baharu boleh dipasang oleh pasukan jubin." },
      ],
      faqs: [
        { q: "Berapa lama membran kalis air bilik air bertahan?", a: "Membran profesional yang diaplikasi dengan betul boleh bertahan 10–15 tahun sebelum perlu diperbaharui. Kami memberikan jaminan sehingga 5 tahun." },
        { q: "Adakah jubin perlu ditanggalkan?", a: "Ya, untuk kalis air semula yang berkesan, jubin perlu ditanggalkan supaya membran boleh diaplikasi terus pada substrat konkrit. Jubin baharu dipasang selepas ujian kolam lulus." },
        { q: "Bolehkah anda mengalis air tanpa menanggalkan jubin?", a: "Terdapat produk kalis air permukaan (clear sealant) yang boleh disapu di atas jubin sedia ada, tetapi ia hanya penyelesaian sementara (6–12 bulan). Untuk penyelesaian kekal, jubin perlu ditanggalkan." },
        { q: "Berapa lama proses ini mengambil masa?", a: "Kalis air bilik air standard (tidak termasuk penanggalan dan pemasangan jubin) mengambil masa 2–3 hari, termasuk ujian kolam 24–48 jam." },
      ],
      metaTitle: "Kalis Air Bilik Air KL & Selangor | Harga Dari RM1,000",
      metaDesc: "Kalis air bilik air & kawasan basah profesional di KL & Selangor. Membran berbilang lapisan, ujian kolam 48 jam, jaminan 5 tahun. Sebut harga percuma.",
    },
    zh: {
      name: "浴室与湿区防水",
      tagline: "为浴室、卫生间与商业湿区提供化学防水层施工，附漏水保修。",
      description:
        "浴室与湿区是马来西亚房屋最常见的漏水源头。我们提供全面的防水服务，包括拆除旧砖（如需）、将基层处理至裸露混凝土、涂刷多层防水层（水泥基或纤维增强丙烯酸），并在铺新砖前进行 24–48 小时蓄水测试。我们的系统可抵御日常使用、清洁剂暴露与轻微结构位移。适用于主浴室、客厕、商业洗手间与厨房湿区。",
      highlights: [
        "多层防水层（水泥基或纤维增强丙烯酸）",
        "基层处理至裸露混凝土，确保最大附着力",
        "铺砖前进行 24–48 小时蓄水测试",
        "角部与接缝用柔性材料处理，防止开裂",
        "长达 5 年的书面防漏水保修",
      ],
      process: [
        { step: "01", title: "拆除与准备", desc: "拆除旧砖（如需），并将基层打磨至裸露混凝土以获得最佳附着。" },
        { step: "02", title: "基层修补", desc: "填补裂缝与孔洞，将角部做成圆角（fillet），避免防水层出现薄弱点。" },
        { step: "03", title: "涂刷防水层", desc: "仔细涂刷三层防水层，每层完全干燥后再涂下一层。" },
        { step: "04", title: "蓄水测试", desc: "蓄水 24–48 小时，并检查下方天花板确认无任何水分渗透。" },
        { step: "05", title: "保护与铺砖", desc: "涂刷保护层后，可由瓦工团队铺设新砖。" },
      ],
      faqs: [
        { q: "浴室防水层能用多久？", a: "正确施工的优质防水层可使用 10–15 年才需翻新。我们提供长达 5 年的保修。" },
        { q: "需要砸掉瓷砖吗？", a: "是的，为使防水真正有效，需拆除瓷砖以便防水层直接涂在混凝土基层上。蓄水测试通过后再铺新砖。" },
        { q: "可以不砸砖做防水吗？", a: "市面上有透明密封剂可直接涂在现有瓷砖上，但只是临时方案（6–12 个月）。要永久解决，必须砸砖。" },
        { q: "整个过程需要多久？", a: "标准浴室防水（不含砸砖与铺砖）约需 2–3 天，包括 24–48 小时蓄水测试。" },
      ],
      metaTitle: "吉隆坡与雪兰莪浴室防水 | 从 RM1,000 起",
      metaDesc: "吉隆坡与雪兰莪专业浴室与湿区防水。多层防水层、48 小时蓄水测试、5 年保修。免费报价。",
    },
  },
  "waterproofing/roof-and-concrete-slab-waterproofing": {
    ms: {
      name: "Kalis Air Bumbung & Slab Konkrit",
      tagline: "Sistem membran elastomerik tugas berat untuk bumbung rata, balkoni dan slab konkrit yang terdedah kepada cuaca.",
      description:
        "Bumbung rata dan slab konkrit balkoni terdedah secara langsung kepada hujan lebat Malaysia, panas UV dan pengembangan struktur. Kami menyediakan sistem kalis air berbilang lapisan yang tahan keadaan ini. Pilihan termasuk membran akrilik elastomerik (cair) yang bertetulang gentian dan disapu dalam tiga lapisan dengan topcoat tahan UV, atau membran bituminus torch-on untuk kawasan yang lebih besar. Setiap pemasangan dimulakan dengan persediaan substrat yang teliti—pembersihan, pengisian retak, rawatan sudut—dan diakhiri dengan ujian kolam air 48 jam. Sistem kami direka untuk bertahan 5–10 tahun dalam cuaca Malaysia.",
      highlights: [
        "Membran akrilik elastomerik atau bituminus torch-on pilihan",
        "Persediaan substrat teliti termasuk pengisian retak dan rawatan sudut",
        "Topcoat tahan UV untuk perlindungan jangka panjang",
        "Ujian kolam air 48 jam untuk mengesahkan pengedap",
        "Jaminan bertulis sehingga 5 tahun terhadap kebocoran",
      ],
      process: [
        { step: "01", title: "Pembersihan & Persediaan", desc: "Permukaan dibersihkan sepenuhnya, kotoran dan salutan lama ditanggalkan, dan retakan diisi dengan sealant fleksibel." },
        { step: "02", title: "Primer", desc: "Primer pelekat berat disapu untuk memastikan membran melekat kukuh pada substrat." },
        { step: "03", title: "Membran", desc: "Tiga lapisan membran (akrilik bertetulang gentian atau torch-on bituminus) disapu atau dipanaskan dengan teliti." },
        { step: "04", title: "Topcoat Pelindung", desc: "Topcoat tahan UV disapu untuk melindungi membran daripada cuaca dan sinar matahari langsung." },
        { step: "05", title: "Ujian Kolam", desc: "Air ditakung selama 48 jam dan kawasan di bawah diperiksa untuk mengesahkan tiada kebocoran." },
      ],
      faqs: [
        { q: "Membran mana yang lebih baik — akrilik atau torch-on?", a: "Akrilik lebih sesuai untuk kawasan kecil hingga sederhana (balkoni, bumbung rata kecil) dan lebih mudah untuk pembaikan masa depan. Torch-on lebih sesuai untuk kawasan besar (bumbung komersial) dan lebih tahan lasak. Kami menilai tapak dan mengesyorkan pilihan terbaik." },
        { q: "Berapa lama membran bumbung bertahan?", a: "Membran profesional dengan topcoat tahan UV yang betul boleh bertahan 5–10 tahun. Penyelenggaraan berkala (pembersihan dan pemeriksaan) memanjangkan jangka hayat." },
        { q: "Adakah anda boleh mengalis air di atas membran lama?", a: "Bergantung pada keadaan membran lama. Jika ia masih kukuh dan tidak mengelupas, kami boleh menyapu sistem baharu di atasnya. Jika ia telah gagal, ia perlu ditanggalkan dahulu." },
        { q: "Bolehkah anda mengalis air bumbung yang mempunyai genangan air?", a: "Ya, tetapi genangan air perlu ditangani dahulu dengan penambahbaikan cerun (screed) supaya air boleh mengalir ke saliran. Membran tidak boleh direndam secara kekal." },
      ],
      metaTitle: "Kalis Air Bumbung & Slab KL & Selangor | Atas Sebut Harga",
      metaDesc: "Kalis air bumbung rata & slab konkrit di KL & Selangor. Membran akrilik atau torch-on, ujian kolam 48 jam, jaminan 5 tahun. Sebut harga percuma.",
    },
    zh: {
      name: "屋顶与混凝土板防水",
      tagline: "为平屋顶、阳台与暴露于气候的混凝土板提供重型弹性防水系统。",
      description:
        "平屋顶与阳台混凝土板直接暴露在马来西亚的暴雨、紫外线与结构膨胀之下。我们提供多层防水系统以抵御这些条件。可选方案包括纤维增强的弹性丙烯酸液态防水层（三层涂刷配抗紫外线面层），或适用于大面积的热熔沥青防水层。每次安装都从细致的基层准备开始——清洁、填缝、角部处理——并以 48 小时蓄水测试结束。我们的系统专为在马来西亚气候下使用 5–10 年而设计。",
      highlights: [
        "弹性丙烯酸或热熔沥青防水层可选",
        "细致基层准备，包括填缝与角部处理",
        "抗紫外线面层，提供长期保护",
        "48 小时蓄水测试验证密封",
        "长达 5 年的书面防漏水保修",
      ],
      process: [
        { step: "01", title: "清洁与准备", desc: "彻底清洁表面，清除污垢与旧涂层，并用柔性密封剂填补裂缝。" },
        { step: "02", title: "底漆", desc: "涂刷重型粘结底漆，确保防水层牢固附着于基层。" },
        { step: "03", title: "防水层", desc: "仔细涂刷或热熔三层防水层（纤维增强丙烯酸或热熔沥青）。" },
        { step: "04", title: "保护面层", desc: "涂刷抗紫外线面层，保护防水层免受气候与阳光直射。" },
        { step: "05", title: "蓄水测试", desc: "蓄水 48 小时并检查下方区域确认无任何漏水。" },
      ],
      faqs: [
        { q: "丙烯酸和热熔防水层哪个更好？", a: "丙烯酸更适合中小面积（阳台、小平屋顶），且日后维修更方便。热熔更适合大面积（商业屋顶）且更耐久。我们现场评估后推荐最佳方案。" },
        { q: "屋顶防水层能用多久？", a: "配合适当抗紫外线面层的优质防水层可使用 5–10 年。定期维护（清洁与检查）可延长使用寿命。" },
        { q: "可以在旧防水层上直接做吗？", a: "视旧防水层状况而定。如果仍牢固不剥落，可在其上涂刷新系统；如果已失效，则需先拆除。" },
        { q: "有积水的屋顶能做防水吗？", a: "可以，但需先通过找坡层（screed）改善排水，让水能流向排水口。防水层不能长期浸泡在水中。" },
      ],
      metaTitle: "吉隆坡与雪兰莪屋顶与混凝土板防水 | 依报价",
      metaDesc: "吉隆坡与雪兰莪平屋顶与混凝土板防水。丙烯酸或热熔防水层、48 小时蓄水测试、5 年保修。免费报价。",
    },
  },
  "waterproofing/wall-dampness-and-efflorescence-repair": {
    ms: {
      name: "Pembaikan Lembapan Dinding & Kesan Garam",
      tagline: "Merawat dinding yang lembap, cat mengelupas dan kesan garam (efflorescence) dengan penghadang penyekat komersial.",
      description:
        "Dinding yang lembap, cat mengelupas dan kesan garam putih (efflorescence) adalah tanda rembesan air atau 'rising damp'—air tanah atau air bilik air meresap ke dalam bata berliang. Kami merawat simptom ini dengan mengikis cat yang mengelupas, mencuci kesan garam dengan bahan kimia peneutral, dan menyapu penghadang kalis air epoksi atau kristal yang berat sebelum mengecat semula. Proses ini menghalang kelembapan daripada muncul semula dan melindungi struktur dinding daripada kerosakan lanjut. Untuk kes yang lebih teruk, kami boleh memasang penghadang kalis lembapan fizikal (damp-proof course) pada dinding.",
      highlights: [
        "Pengikisan cat mengelupas & pencucian kesan garam",
        "Bahan kimia peneutral garam untuk rawatan mendalam",
        "Penghadang epoksi atau kristal tugas berat",
        "Pemasangan penghadang kalis lembapan fizikal (jika diperlukan)",
        "Pengecatan semula dengan cat tahan lembapan",
      ],
      process: [
        { step: "01", title: "Diagnosis Punca", desc: "Kami mengenal pasti punca kelembapan—rising damp, rembesan bilik air, atau kebocoran paip—sebelum rawatan dimulakan." },
        { step: "02", title: "Pengikisan & Pencucian", desc: "Cat yang mengelupas dikikis ke bata mentah, dan kesan garam dicuci dengan bahan kimia peneutral." },
        { step: "03", title: "Penghadang Kalis Air", desc: "Penghadang epoksi atau kristal disapu untuk menyekat kelembapan daripada meresap semula ke dinding." },
        { step: "04", title: "Pengapan & Pengecatan", desc: "Dinding diapkan dan dicat semula dengan cat tahan lembapan untuk kemasan yang bersih dan tahan lama." },
      ],
      faqs: [
        { q: "Apakah itu efflorescence (kesan garam)?", a: "Efflorescence ialah mendapan garam putih yang muncul pada dinding apabila air meresap melalui bata dan menyejat, meninggalkan garam di permukaan. Ia tanda kelembapan dalam dinding." },
        { q: "Bolehkah cat mengelupas disebabkan oleh kelembapan?", a: "Ya, kelembapan dalam dinding menolak cat keluar dan menyebabkan ia mengelupas, berbuih atau bernoda. Punca kelembapan perlu dirawat dahulu sebelum mengecat semula." },
        { q: "Adakah rawatan ini kekal?", a: "Rawatan penghadang epoksi atau kristal adalah sangat tahan lama (5–10 tahun). Walau bagaimanapun, jika punca kelembapan (contohnya kebocoran paip) tidak diselesaikan, simptom boleh muncul semula." },
        { q: "Bolehkah anda memasang penghadang kalis lembapan fizikal?", a: "Ya, untuk kes rising damp yang teruk, kami boleh memasang penghadang kalis lembapan fizikal (damp-proof course) dengan menyuntik bahan kimia atau memasang membran fizikal pada dinding." },
      ],
      metaTitle: "Pembaikan Lembapan & Kesan Garam Dinding KL | Dari RM350",
      metaDesc: "Pembaikan dinding lembap, cat mengelupas & kesan garam di KL & Selangor. Penghadang epoksi, rawatan garam & pengecatan semula. Sebut harga percuma.",
    },
    zh: {
      name: "墙面潮湿与盐析修复",
      tagline: "通过商用防潮屏障处理潮湿墙面、油漆剥落与盐析（泛白）现象。",
      description:
        "墙面潮湿、油漆剥落与白色盐析（efflorescence）是渗水或「毛细返潮」的迹象——地下水或浴室用水渗入多孔砖体。我们通过刮除剥落油漆、用中和盐分的化学品清洗盐析痕迹，并在重新涂刷前涂抹重型环氧或结晶型防水屏障来处理这些症状。此工序可防止潮气再次出现，并保护墙体结构免受进一步损坏。对于较严重的情况，我们可在墙体安装物理防潮层（damp-proof course）。",
      highlights: [
        "刮除剥落油漆与清洗盐析痕迹",
        "中和盐分的化学品进行深度处理",
        "重型环氧或结晶型防潮屏障",
        "必要时安装物理防潮层",
        "使用防潮涂料重新涂刷",
      ],
      process: [
        { step: "01", title: "源头诊断", desc: "在处理前先识别潮气来源——毛细返潮、浴室渗水还是管道漏水。" },
        { step: "02", title: "刮除与清洗", desc: "将剥落油漆刮至裸露砖体，并用中和盐分的化学品清洗盐析痕迹。" },
        { step: "03", title: "防潮屏障", desc: "涂抹环氧或结晶型屏障，阻止潮气再次渗入墙面。" },
        { step: "04", title: "批灰与涂刷", desc: "墙面批灰并用防潮涂料重新涂刷，获得洁净耐用的饰面。" },
      ],
      faqs: [
        { q: "什么是盐析（泛白）？", a: "盐析是水分渗入砖体后蒸发，将盐分留在墙面形成的白色结晶沉积物。它是墙体内部潮湿的标志。" },
        { q: "油漆剥落是潮湿引起的吗？", a: "是的，墙体内的潮气会把油漆顶出，导致剥落、起泡或水渍。在重新涂刷前必须先处理潮气源头。" },
        { q: "这种处理是永久的吗？", a: "环氧或结晶型屏障处理非常耐久（5–10 年）。但如果潮气源头（如管道漏水）未解决，症状可能再次出现。" },
        { q: "可以安装物理防潮层吗？", a: "可以，对于严重的毛细返潮，我们可通过注射化学品或在墙体安装物理隔膜来加装防潮层。" },
      ],
      metaTitle: "吉隆坡墙面潮湿与盐析修复 | 从 RM350 起",
      metaDesc: "吉隆坡与雪兰莪潮湿墙面、油漆剥落与盐析修复。环氧屏障、盐分处理与重新涂刷。免费报价。",
    },
  },
  /* ── PLUMBING ─────────────────────────────────────────────────────────── */
  "plumbing/water-leakage-diagnosis-and-repair": {
    ms: {
      name: "Pengesanan & Pembaikan Kebocoran Air",
      tagline:
        "Mengesan punca kebocoran paip, dinding atau siling sebelum membaikinya dengan kaedah yang tepat.",
      description:
        "Kebocoran yang tidak dirawat boleh merosakkan siling, cat dan struktur rumah serta menaikkan bil air. Tukang paip kami memeriksa simptom di tapak, mengasingkan punca pada paip bekalan, sambungan atau kelengkapan, lalu menerangkan pilihan pembaikan sebelum kerja bermula. Kami utamakan pembaikan setempat yang munasabah dan melakukan ujian semula selepas kerja supaya kawasan yang dibaiki benar-benar kering dan berfungsi.",
      highlights: [
        "Pemeriksaan punca kebocoran di paip, sambungan dan kelengkapan",
        "Pilihan pembaikan diterangkan sebelum kerja dimulakan",
        "Pembaikan setempat untuk mengurangkan kerja buka yang tidak perlu",
        "Ujian tekanan atau aliran selepas pembaikan",
        "Sesuai untuk rumah, kondominium dan premis kecil",
      ],
      process: [
        {
          step: "01",
          title: "Pemeriksaan simptom",
          desc: "Kami menilai kesan air, meter, tekanan dan lokasi paip yang disyaki bocor.",
        },
        {
          step: "02",
          title: "Kenal pasti punca",
          desc: "Sambungan, injap dan paip diuji untuk membezakan kebocoran aktif daripada kesan lama.",
        },
        {
          step: "03",
          title: "Pembaikan tepat",
          desc: "Bahagian rosak dibaiki atau diganti dengan bahan yang sesuai selepas persetujuan anda.",
        },
        {
          step: "04",
          title: "Ujian & kemasan",
          desc: "Kami menguji aliran semula, memeriksa kebocoran dan membersihkan kawasan kerja.",
        },
      ],
      faqs: [
        {
          q: "Perlukah pecahkan semua jubin untuk mencari kebocoran?",
          a: "Tidak semestinya. Kami mula dengan pemeriksaan dan ujian pada titik yang boleh dicapai; kerja membuka hanya dicadangkan apabila punca memerlukannya.",
        },
        {
          q: "Bolehkah kebocoran kecil menaikkan bil air?",
          a: "Ya. Kebocoran berterusan, walaupun kecil, boleh membazir air dan menyebabkan bacaan meter meningkat dari masa ke masa.",
        },
        {
          q: "Adakah anda membaiki paip dalam dinding?",
          a: "Kami akan menilai akses dan keadaan paip dahulu. Jika perlu membuka kemasan, skop serta pilihan pembaikan dibincangkan dengan jelas terlebih dahulu.",
        },
        {
          q: "Apa perlu dibuat sebelum tukang paip tiba?",
          a: "Jika air mengalir kuat, tutup injap utama jika selamat dan alihkan barang daripada kawasan basah. Jangan sentuh suis berhampiran air.",
        },
      ],
      metaTitle: "Pengesanan & Pembaikan Kebocoran Air KL | Plumber",
      metaDesc:
        "Pengesanan punca dan pembaikan kebocoran paip, dinding atau siling di KL & Selangor. Pemeriksaan jelas, pembaikan tepat dan ujian semula.",
    },
    zh: {
      name: "漏水检测与维修",
      tagline: "先找出水管、墙面或天花的漏水源头，再采用合适方法进行维修。",
      description:
        "未处理的漏水会损坏天花、油漆与家居结构，也可能令水费上升。我们的水管团队会在现场检查水渍、阀门、接头及可接触管线，判断漏水是否仍在发生，并在施工前说明可行的维修范围。我们优先采用合理的局部维修方式，完工后再测试水流与接头，确保维修位置恢复正常。",
      highlights: [
        "检查水管、接头与洁具的漏水源头",
        "施工前清楚说明维修选择",
        "优先局部维修，减少不必要拆除",
        "维修后进行水流或压力测试",
        "适合住宅、公寓及小型商铺",
      ],
      process: [
        {
          step: "01",
          title: "现场检查",
          desc: "检查水渍、水表、压力及疑似漏水的位置。",
        },
        {
          step: "02",
          title: "确认源头",
          desc: "测试接头、阀门与管线，区分活跃漏水和旧水痕。",
        },
        {
          step: "03",
          title: "针对性维修",
          desc: "经您同意后维修或更换损坏部件，并选用合适材料。",
        },
        {
          step: "04",
          title: "复测交接",
          desc: "恢复供水后检查是否渗漏，并清理施工区域。",
        },
      ],
      faqs: [
        {
          q: "找漏水一定要敲掉所有瓷砖吗？",
          a: "不一定。我们会先检查可接触的位置和症状，只有在源头需要时才建议有限范围的拆开。",
        },
        {
          q: "小漏水会让水费变高吗？",
          a: "会。持续的小漏水也会长期浪费水，令水表读数和水费逐渐增加。",
        },
        {
          q: "墙内水管漏水可以修吗？",
          a: "可以先评估管线位置和施工入口。如需打开饰面，我们会先说明范围、风险和维修方案。",
        },
        {
          q: "师傅到前我该做什么？",
          a: "若水流很大，在安全情况下关闭总水阀，并移开湿区物品。水靠近电源时请勿触碰开关。",
        },
      ],
      metaTitle: "吉隆坡漏水检测与维修 | 专业水管服务",
      metaDesc:
        "吉隆坡与雪兰莪水管、墙面及天花漏水检测维修。先查明源头，清楚报价，维修完成后复测，确保供水恢复正常。",
    },
  },
  "plumbing/toilet-tap-and-sink-installation": {
    ms: {
      name: "Pemasangan Tandas, Paip & Sinki",
      tagline:
        "Memasang atau mengganti mangkuk tandas, paip, kepala pancuran dan singki dengan sambungan yang kemas.",
      description:
        "Kelengkapan bilik air dan dapur perlu dipasang dengan ukuran, sambungan dan pengedapan yang betul supaya tidak longgar atau menitis selepas digunakan. Kami membantu pemasangan serta penggantian tandas, paip air, kepala pancuran, sinki dan aksesori berkaitan. Pasukan kami memeriksa kedudukan paip masuk dan keluar, memasang kelengkapan mengikut spesifikasi produk, kemudian menguji fungsi serta kebocoran sebelum serahan.",
      highlights: [
        "Pemasangan tandas, bidet, paip dan kepala pancuran",
        "Pemasangan sinki dapur atau bilik air serta perangkap air",
        "Semakan kedudukan, sambungan dan pengedapan",
        "Ujian aliran, siraman dan kebocoran sebelum serahan",
        "Boleh memasang kelengkapan yang dibekalkan pelanggan",
      ],
      process: [
        {
          step: "01",
          title: "Semak kelengkapan",
          desc: "Kami mengesahkan model, ukuran dan titik sambungan sedia ada sebelum memasang.",
        },
        {
          step: "02",
          title: "Sedia sambungan",
          desc: "Injap, paip masuk, saliran dan permukaan pemasangan disediakan dengan kemas.",
        },
        {
          step: "03",
          title: "Pasang & kedap",
          desc: "Kelengkapan dipasang rata, diketatkan dengan betul dan dikedapkan pada titik perlu.",
        },
        {
          step: "04",
          title: "Uji fungsi",
          desc: "Kami menguji aliran air, siraman dan saliran untuk memastikan tiada titisan atau kebocoran.",
        },
      ],
      faqs: [
        {
          q: "Bolehkah anda memasang tandas atau paip yang saya beli sendiri?",
          a: "Boleh. Hantar model atau gambar jika ada supaya kami boleh semak kesesuaian asas sebelum lawatan.",
        },
        {
          q: "Adakah harga termasuk kelengkapan baru?",
          a: "Harga pemasangan dan bahan kecil bergantung pada skop. Kelengkapan utama boleh dibekalkan pelanggan atau disebut harga berasingan.",
        },
        {
          q: "Berapa lama pemasangan sinki biasa?",
          a: "Jika titik paip sedia ada sesuai, pemasangan biasa lazimnya selesai dalam satu lawatan. Kerja ubah suai paip memerlukan masa tambahan.",
        },
        {
          q: "Adakah sambungan lama yang bocor boleh ditukar sekali?",
          a: "Ya. Kami boleh memeriksa hos, injap dan perangkap air semasa lawatan lalu mencadangkan penggantian jika sudah haus.",
        },
      ],
      metaTitle: "Pemasangan Tandas, Paip & Sinki KL | Tukang Paip",
      metaDesc:
        "Pemasangan dan penggantian tandas, paip, pancuran serta sinki di KL & Selangor. Sambungan kemas, pengedapan betul dan ujian kebocoran.",
    },
    zh: {
      name: "马桶、水龙头与水槽安装",
      tagline: "规范安装或更换马桶、水龙头、花洒和水槽，连接整齐并完成测试。",
      description:
        "浴室和厨房洁具必须按正确尺寸、接口及密封方式安装，才能避免日后松动或滴漏。我们提供马桶、水龙头、花洒、水槽和相关配件的安装与更换服务。团队会先检查进水、排水和安装位置，依照产品要求完成固定与密封，再测试冲水、排水及各接口情况后交接。",
      highlights: [
        "安装马桶、喷枪、水龙头和花洒",
        "安装厨房或浴室水槽及存水弯",
        "检查位置、接头和密封处理",
        "交接前测试水流、冲水与渗漏",
        "可安装客户自备的洁具",
      ],
      process: [
        {
          step: "01",
          title: "核对洁具",
          desc: "确认产品型号、尺寸和原有接口位置。",
        },
        {
          step: "02",
          title: "准备接口",
          desc: "整理进水阀、排水口及安装表面，确保接口适配。",
        },
        {
          step: "03",
          title: "安装密封",
          desc: "固定洁具并在需要的位置做好密封和连接。",
        },
        {
          step: "04",
          title: "功能测试",
          desc: "测试水流、冲水和排水，确认没有滴漏后交接。",
        },
      ],
      faqs: [
        {
          q: "我自己买的马桶或水龙头可以安装吗？",
          a: "可以。若方便，请先提供型号或照片，我们可在上门前初步确认接口是否合适。",
        },
        {
          q: "报价包括新的洁具吗？",
          a: "安装费和小型辅料会按现场范围计算；主要洁具可由您提供，也可另行报价供应。",
        },
        {
          q: "普通水槽安装要多久？",
          a: "原有水管位置合适时，通常一次上门可完成；如需改管或改柜体，工时会增加。",
        },
        {
          q: "旧接口漏水能一起处理吗？",
          a: "可以。我们会检查软管、角阀和存水弯，如发现老化会说明更换建议。",
        },
      ],
      metaTitle: "吉隆坡马桶、水龙头与水槽安装 | 水管服务",
      metaDesc:
        "吉隆坡与雪兰莪马桶、水龙头、花洒及水槽安装更换。接口规范、密封整齐，交接前测试漏水。",
    },
  },
  "plumbing/drain-unclogging-and-cleaning": {
    ms: {
      name: "Membuka Sumbatan & Membersih Longkang",
      tagline:
        "Membuka sumbatan singki, lantai, tandas dan paip buangan dengan pemeriksaan yang selamat.",
      description:
        "Air yang lambat turun, bau dari saliran atau tandas yang melimpah biasanya menandakan sumbatan pada perangkap atau paip buangan. Kami memeriksa lokasi dan jenis sumbatan sebelum menggunakan alat yang sesuai untuk membersihkan laluan. Selepas itu, kami menguji aliran air dan memberi panduan penjagaan asas. Untuk paip rosak atau sumbatan jauh, kami akan menerangkan langkah susulan yang diperlukan tanpa membuat janji yang tidak munasabah.",
      highlights: [
        "Membuka sumbatan singki, floor trap dan tandas",
        "Pemeriksaan punca bau dan aliran perlahan",
        "Alat pembersihan sesuai dengan jenis saliran",
        "Ujian aliran selepas kerja pembersihan",
        "Nasihat pencegahan sumbatan berulang",
      ],
      process: [
        {
          step: "01",
          title: "Semak saliran",
          desc: "Kami menguji aliran dan mengenal pasti saliran atau perangkap yang tersumbat.",
        },
        {
          step: "02",
          title: "Akses sumbatan",
          desc: "Penutup atau perangkap dibuka dengan cermat untuk mendapatkan laluan kerja.",
        },
        {
          step: "03",
          title: "Bersih paip",
          desc: "Sisa dibersihkan menggunakan alat yang sesuai tanpa merosakkan kelengkapan.",
        },
        {
          step: "04",
          title: "Uji aliran",
          desc: "Air dialirkan semula untuk memastikan saliran bergerak lancar dan kawasan dibersihkan.",
        },
      ],
      faqs: [
        {
          q: "Bolehkah sumbatan tandas dibuka pada hari yang sama?",
          a: "Bagi sumbatan biasa, kami cuba bantu dalam lawatan yang sama tertakluk kepada akses, tahap sumbatan dan jadual pasukan.",
        },
        {
          q: "Patutkah saya tuang bahan kimia kuat ke dalam paip?",
          a: "Elakkan mencampurkan bahan kimia kerana ia boleh membahayakan dan merosakkan paip. Beritahu kami bahan yang telah digunakan sebelum kerja.",
        },
        {
          q: "Mengapa sinki masih berbau selepas dibersihkan?",
          a: "Bau boleh datang daripada perangkap kering, sisa makanan atau masalah pengudaraan. Kami akan periksa punca yang boleh dicapai.",
        },
        {
          q: "Bagaimana mencegah sumbatan berulang?",
          a: "Gunakan penapis sisa, jangan tuang minyak masak ke sinki dan bersihkan perangkap secara berkala.",
        },
      ],
      metaTitle: "Buka Sumbatan Longkang, Sinki & Tandas KL | Plumber",
      metaDesc:
        "Perkhidmatan membuka sumbatan dan membersih saliran singki, tandas serta floor trap di KL & Selangor. Pemeriksaan, ujian aliran dan kerja kemas.",
    },
    zh: {
      name: "排水管疏通与清洁",
      tagline: "处理水槽、地漏、马桶和排水管堵塞，并在完工后测试排水。",
      description:
        "排水慢、下水道异味或马桶溢水，通常表示存水弯或排水管出现堵塞。我们会先检查堵塞位置和情况，再使用适合的工具清理通道。完成后会测试水流，并提供基本保养建议。若发现管线损坏或深处堵塞，我们会如实说明后续所需的处理方式。",
      highlights: [
        "疏通水槽、地漏和马桶堵塞",
        "检查异味与排水缓慢的原因",
        "按排水状况选择合适工具",
        "清洁后测试排水水流",
        "提供防止重复堵塞的建议",
      ],
      process: [
        {
          step: "01",
          title: "检查排水",
          desc: "测试水流并确认堵塞的排水口或存水弯。",
        },
        {
          step: "02",
          title: "打开入口",
          desc: "小心拆开可接触的盖板或存水弯，建立施工入口。",
        },
        {
          step: "03",
          title: "清除堵塞",
          desc: "使用适当工具清除积聚物，避免损坏洁具。",
        },
        {
          step: "04",
          title: "复测清理",
          desc: "重新放水测试排水顺畅度，并清理工作区域。",
        },
      ],
      faqs: [
        {
          q: "马桶堵塞可以当天处理吗？",
          a: "一般堵塞我们会尽量安排同次上门处理，实际仍取决于入口、堵塞程度和团队档期。",
        },
        {
          q: "可以先倒强力化学剂通管吗？",
          a: "不建议混用化学剂，可能伤害人身或管道。上门前请告知已经使用过的产品。",
        },
        {
          q: "清完后水槽为什么仍有异味？",
          a: "异味可能来自干涸存水弯、食物残渣或通气问题；我们会检查现场可接触的原因。",
        },
        {
          q: "如何避免再堵塞？",
          a: "使用滤网、不要把食用油倒入水槽，并定期清理存水弯和滤网。",
        },
      ],
      metaTitle: "吉隆坡排水管、水槽与马桶疏通 | 水管服务",
      metaDesc:
        "吉隆坡与雪兰莪水槽、马桶及地漏堵塞疏通清洁。先检查再处理，完工后测试排水，并提供日常保养建议。",
    },
  },
  "plumbing/water-heater-and-pump-installation": {
    ms: {
      name: "Pemasangan Pemanas Air & Pam Air",
      tagline:
        "Memasang pemanas air dan pam air dengan semakan sambungan air, tekanan dan keselamatan tapak.",
      description:
        "Pemanas air dan pam air perlu dipilih serta dipasang mengikut keadaan bekalan air, ruang dan sambungan sedia ada. Kami memeriksa titik paip, injap, tekanan dan kedudukan pemasangan sebelum memasang unit. Selepas sambungan siap, kami menguji aliran dan fungsi asas bersama pelanggan. Kerja elektrik perlu dikendalikan oleh pihak yang berkelayakan; kami akan menyelaras skop yang jelas jika sambungan elektrik diperlukan.",
      highlights: [
        "Pemasangan pemanas air simpanan atau segera",
        "Pemasangan pam penggalak dan semakan tekanan air",
        "Pemeriksaan injap, paip dan kedudukan unit",
        "Ujian aliran serta fungsi selepas pemasangan",
        "Penerangan penggunaan asas dan titik penutupan air",
      ],
      process: [
        {
          step: "01",
          title: "Nilai tapak",
          desc: "Kami menyemak tekanan air, ruang, titik paip dan model unit yang akan dipasang.",
        },
        {
          step: "02",
          title: "Sedia sambungan",
          desc: "Injap serta sambungan paip disusun untuk akses dan penyelenggaraan yang munasabah.",
        },
        {
          step: "03",
          title: "Pasang unit",
          desc: "Unit dipasang kukuh dan paip disambung mengikut keperluan produk.",
        },
        {
          step: "04",
          title: "Uji & terangkan",
          desc: "Kami menguji aliran air dan menerangkan penggunaan serta injap penutupan kepada pelanggan.",
        },
      ],
      faqs: [
        {
          q: "Bolehkah anda memasang pemanas air yang saya beli?",
          a: "Boleh, tertakluk kepada kesesuaian model dan keadaan paip di tapak. Kongsi model atau gambar sebelum lawatan jika boleh.",
        },
        {
          q: "Adakah pam boleh menyelesaikan semua masalah tekanan rendah?",
          a: "Tidak semua. Kami akan semak punca tekanan rendah dahulu kerana masalah mungkin datang daripada paip, injap atau bekalan bangunan.",
        },
        {
          q: "Adakah kerja pendawaian termasuk?",
          a: "Sambungan elektrik mesti dibuat oleh pihak berkelayakan. Kami jelaskan skop paip dan boleh menyelaras keperluan berkaitan.",
        },
        {
          q: "Apa yang perlu disediakan sebelum pemasangan?",
          a: "Sediakan unit, akses kepada titik air dan ruang kerja. Jika tinggal di kondominium, semak juga peraturan pengurusan bangunan.",
        },
      ],
      metaTitle: "Pemasangan Pemanas Air & Pam Air KL | Tukang Paip",
      metaDesc:
        "Pemasangan pemanas air dan pam penggalak di KL & Selangor. Semakan paip, tekanan, sambungan kemas dan ujian fungsi.",
    },
    zh: {
      name: "热水器与水泵安装",
      tagline: "安装热水器和增压水泵，并检查供水、压力和现场接口。",
      description:
        "热水器和水泵必须配合现场供水、空间和原有接口选择及安装。我们会先检查水管位置、阀门、水压和安装位置，再完成设备固定与管道连接。完成后会与客户测试基本水流和功能。电气连接必须由合格人员处理；如涉及电工工作，我们会清楚说明及协调相关范围。",
      highlights: [
        "安装储水式或即热式热水器",
        "安装增压水泵并检查水压",
        "检查阀门、水管和设备位置",
        "安装后测试水流与基本功能",
        "说明基本使用方式和总水阀位置",
      ],
      process: [
        {
          step: "01",
          title: "现场评估",
          desc: "检查水压、空间、水管点位和待安装设备型号。",
        },
        {
          step: "02",
          title: "准备连接",
          desc: "安排阀门及管道连接，保留合理的检修空间。",
        },
        {
          step: "03",
          title: "固定设备",
          desc: "稳固安装设备，并依产品要求完成水管连接。",
        },
        {
          step: "04",
          title: "测试说明",
          desc: "测试水流与基本功能，并向客户说明使用和关闭水阀的方法。",
        },
      ],
      faqs: [
        {
          q: "我买好的热水器可以请你们安装吗？",
          a: "可以，前提是型号和现场水管条件合适。如方便，请先提供型号或照片。",
        },
        {
          q: "安装水泵能解决所有水压低问题吗？",
          a: "不一定。我们会先检查原因，低水压也可能来自旧管、阀门或大楼供水系统。",
        },
        {
          q: "报价包含电线工作吗？",
          a: "电气连接应由合格人员完成。我们会清楚划分水管安装范围，并协调相关需求。",
        },
        {
          q: "安装前需要准备什么？",
          a: "准备好设备、供水点的通行空间；公寓住户也应先确认管理处的施工规定。",
        },
      ],
      metaTitle: "吉隆坡热水器与水泵安装 | 专业水管服务",
      metaDesc:
        "吉隆坡与雪兰莪热水器、增压水泵安装。检查水管与水压，连接整齐，安装后测试基本功能，并说明日常使用注意事项。",
    },
  },

  /* ── ELECTRICAL ───────────────────────────────────────────────────────── */
  "electrical/new-power-point-and-switch-installation": {
    ms: {
      name: "Pemasangan Power Point & Suis Baharu",
      tagline: "Tambah soket 13A, outlet USB, suis dan dimmer pada kediaman atau pejabat dengan pendawaian yang kemas, berlabel dan selamat.",
      description:
        "Perkhidmatan ini sesuai untuk rumah yang kekurangan soket, bilik kerja yang memerlukan lebih banyak outlet, atau ruang yang perlu suis baharu serta kawalan dimmer. Juruelektrik kami menyemak beban litar sedia ada, memilih kedudukan soket yang praktikal, dan menjalankan pendawaian menggunakan konduit atau trunking yang kemas. Setiap pemasangan termasuk ujian kekutuban, pembumian dan operasi RCD sebelum serahan. Untuk kondominium, kami menyelaraskan waktu kerja serta perlindungan lif dan kawasan umum mengikut peraturan pengurusan bangunan.",
      highlights: [
        "Soket 13A, outlet USB, suis double-pole dan dimmer",
        "Semakan beban litar sebelum menambah outlet baharu",
        "Pendawaian dalam konduit atau trunking yang kemas",
        "Ujian kekutuban, pembumian dan trip RCD",
        "Pelabelan litar serta pembersihan kawasan kerja",
      ],
      process: [
        { step: "01", title: "Semakan Tapak", desc: "Kami menyemak lokasi suis, jarak ke DB box dan sama ada litar sedia ada mampu menampung outlet baharu." },
        { step: "02", title: "Perancangan Litar", desc: "Kedudukan soket, laluan kabel dan keperluan litar baharu diterangkan sebelum penggerudian dimulakan." },
        { step: "03", title: "Pemasangan", desc: "Kabel ditarik dengan kemas, aksesori dipasang rata, dan sambungan ditebat serta diketatkan mengikut standard." },
        { step: "04", title: "Ujian & Serahan", desc: "Kami menguji setiap soket, suis dan perlindungan RCD, kemudian melabel litar dan membersihkan kawasan kerja." },
      ],
      faqs: [
        { q: "Berapa harga tambah satu power point?", a: "Harga bermula dari RM150 setiap point untuk pemasangan standard. Sebut harga akhir bergantung pada jarak pendawaian, jenis aksesori dan sama ada litar baharu diperlukan." },
        { q: "Bolehkah soket sedia ada ditukar ke soket USB?", a: "Ya, banyak soket 13A boleh ditukar kepada unit dengan port USB, tetapi kami akan semak kedalaman kotak dan pendawaian pembumian terlebih dahulu." },
        { q: "Perlukah litar baharu untuk beberapa soket tambahan?", a: "Ia bergantung pada beban sedia ada. Jika litar semula hampir had, kami akan cadangkan litar baharu supaya penggunaan lebih selamat." },
        { q: "Adakah kerja ini sesuai untuk kondominium?", a: "Ya. Kami biasa membuat kerja elektrik di kondominium dan boleh menyelaraskan permit, waktu kerja serta perlindungan lif jika diperlukan." },
      ],
      metaTitle: "Pemasangan Power Point & Suis KL | Dari RM150",
      metaDesc: "Tambah soket 13A, USB outlet, suis dan dimmer di KL & Selangor. Semakan beban litar, pemasangan kemas, ujian RCD dan sebut harga telus.",
    },
    zh: {
      name: "新增插座与开关安装",
      tagline: "为住宅或办公室增加13A插座、USB插座、开关与调光器，走线整齐、标签清晰且通过安全测试。",
      description:
        "当家中插座不足、工作室需要更多取电点，或空间需要新增开关与调光控制时，这项服务最适合。我们的电工会先检查现有回路负荷，确认插座位置，并以线管或明线槽完成整齐布线。每个安装点都会进行极性、接地和漏电保护器动作测试后才交付。公寓项目也可配合管理处规定，安排施工时间、电梯保护和公共区域防护。",
      highlights: [
        "安装13A插座、USB插座、双极开关和调光器",
        "施工前检查现有回路负荷",
        "线管或明线槽走线，外观整齐",
        "进行极性、接地与RCD跳闸测试",
        "回路贴标签并清理施工现场",
      ],
      process: [
        { step: "01", title: "现场检查", desc: "检查开关位置、配电箱距离，以及现有回路是否能承受新增插座。" },
        { step: "02", title: "回路规划", desc: "在钻孔前说明插座位置、走线方向和是否需要新设回路。" },
        { step: "03", title: "安装接线", desc: "电缆整齐拉设，配件安装平直，端子按规范紧固并做好绝缘。" },
        { step: "04", title: "测试交付", desc: "逐个测试插座、开关和RCD保护，贴好回路标签并清理现场。" },
      ],
      faqs: [
        { q: "加一个插座多少钱？", a: "标准安装从RM150/位起。最终报价取决于走线距离、配件款式，以及是否需要新增回路。" },
        { q: "旧插座可以换成USB插座吗？", a: "可以，多数13A插座可换成带USB端口的款式，但我们会先检查底盒深度和接地接线。" },
        { q: "多加几个插座需要新回路吗？", a: "要看现有负荷。如果原回路已接近上限，为了安全我们会建议增设新回路。" },
        { q: "公寓可以施工吗？", a: "可以。我们熟悉公寓电工流程，可配合办理施工许可、施工时段和电梯保护。" },
      ],
      metaTitle: "吉隆坡新增插座与开关安装 | RM150起",
      metaDesc: "吉隆坡与雪兰莪13A插座、USB插座、开关和调光器安装。检查回路负荷，走线整齐，完成RCD测试并透明报价。",
    },
  },
  "electrical/db-box-upgrade-and-rewiring": {
    ms: {
      name: "Naik Taraf DB Box & Pendawaian Semula",
      tagline: "Ganti kotak fius lama dengan papan agihan MCB/RCCB moden dan tingkatkan pendawaian rumah lama untuk keselamatan jangka panjang.",
      description:
        "Rumah lama dengan kotak fius, wayar getah atau soket tanpa pembumian mempunyai risiko terlalu panas dan kebakaran elektrik. Perkhidmatan ini merangkumi audit beban, naik taraf DB box kepada MCB dan RCCB yang sesuai, serta pendawaian semula separa atau penuh mengikut keadaan rumah. Kami menyelaraskan pemotongan bekalan jika perlu, melabel setiap litar, dan menjalankan ujian rintangan penebat, kekutuban, kesinambungan bumi serta masa trip RCD. Anda akan menerima penerangan jelas tentang skop sebelum kerja dimulakan.",
      highlights: [
        "Naik taraf kotak fius kepada DB box MCB/RCCB moden",
        "Audit beban untuk rumah teres, banglo dan unit komersial ringan",
        "Pendawaian semula penuh atau separa mengikut keadaan sebenar",
        "Ujian rintangan penebat, kekutuban, bumi dan RCD",
        "Pelabelan litar yang jelas untuk penyelenggaraan masa depan",
      ],
      process: [
        { step: "01", title: "Pemeriksaan & Audit", desc: "Kami memeriksa DB box, jenis kabel, soket, pembumian dan jumlah beban yang dijangka." },
        { step: "02", title: "Cadangan & Sebut Harga", desc: "Skop naik taraf, kapasiti pemutus, laluan kabel dan anggaran gangguan bekalan diterangkan secara bertulis." },
        { step: "03", title: "Pemasangan DB & Kabel", desc: "DB box baharu dipasang, kabel usang diganti, dan setiap litar ditamatkan dengan kemas." },
        { step: "04", title: "Ujian & Rekod", desc: "Kami menjalankan ujian elektrik, melabel litar, dan menyerahkan rekod ujian asas untuk simpanan anda." },
      ],
      faqs: [
        { q: "Bilakah rumah perlu pendawaian semula?", a: "Antara tanda biasa ialah kabel getah lama, DB box tanpa RCCB, soket dua pin tanpa bumi, kerap trip, atau kesan hangus pada soket dan suis." },
        { q: "Berapa lama naik taraf DB box mengambil masa?", a: "Banyak kerja naik taraf mengambil masa 4 hingga 8 jam, tetapi pendawaian semula penuh rumah boleh mengambil beberapa hari bergantung pada saiz dan akses." },
        { q: "Adakah bekalan elektrik akan terputus sepanjang kerja?", a: "Akan ada tempoh pemotongan ketika sambungan akhir. Kami akan memaklumkan jadualnya dan boleh menyelaraskan dengan TNB atau pengurusan bangunan jika perlu." },
        { q: "Adakah anda memberikan rekod ujian?", a: "Ya, kami akan menunjukkan keputusan ujian asas seperti rintangan penebat, kekutuban, pembumian dan trip RCD selepas siap." },
      ],
      metaTitle: "Naik Taraf DB Box & Pendawaian Semula KL | RM2,200",
      metaDesc: "Ganti kotak fius lama dengan DB box MCB/RCCB dan pendawaian semula di KL & Selangor. Audit beban, ujian penebat serta rekod ujian asas disediakan.",
    },
    zh: {
      name: "配电箱升级与重新布线",
      tagline: "将老旧保险丝盒更换为现代MCB/RCCB配电箱，并按老房状况进行局部或全屋重新布线。",
      description:
        "老房子若仍使用保险丝盒、橡胶电线或无接地插座，会有过热和电气火灾风险。这项服务包括负荷审计、将配电箱升级为合适的MCB和RCCB，并根据现场情况进行局部或全屋重新布线。必要时我们会协调停电，为每个回路贴标签，并进行绝缘电阻、极性、接地连续性和RCD跳闸时间测试。施工前会清楚说明范围、停电时间和报价。",
      highlights: [
        "保险丝盒升级为现代MCB/RCCB配电箱",
        "为排屋、洋房和轻商业空间进行负荷审计",
        "按现场情况进行全屋或局部重新布线",
        "绝缘电阻、极性、接地和RCD测试",
        "清晰回路标签，方便日后维修",
      ],
      process: [
        { step: "01", title: "检查与审计", desc: "检查配电箱、电线类型、插座、接地状况和预计总负荷。" },
        { step: "02", title: "方案与报价", desc: "以书面说明升级范围、断路器容量、走线路径和预计停电时间。" },
        { step: "03", title: "配电箱与线缆施工", desc: "安装新配电箱，更换老化线缆，并将各回路整齐接线。" },
        { step: "04", title: "测试与记录", desc: "完成电气测试、贴上回路标签，并提供基本测试记录供您保存。" },
      ],
      faqs: [
        { q: "什么情况下需要重新布线？", a: "常见征兆包括老旧橡胶电线、配电箱没有RCCB、两脚插座无接地、频繁跳闸，或插座开关有烧焦痕迹。" },
        { q: "配电箱升级需要多久？", a: "一般升级约需4至8小时；若全屋重新布线，则可能需要数天，取决于房屋面积和施工入口。" },
        { q: "施工期间会整天停电吗？", a: "最终接线阶段会停电。我们会提前告知时间，并在需要时与TNB或管理处协调。" },
        { q: "会提供测试记录吗？", a: "会。完工后我们会说明绝缘电阻、极性、接地和RCD跳闸等基本测试结果。" },
      ],
      metaTitle: "吉隆坡配电箱升级与重新布线 | RM2,200起",
      metaDesc: "吉隆坡与雪兰莪老旧保险丝盒升级、MCB/RCCB配电箱和重新布线。包含负荷审计、绝缘测试、接地测试和基本测试记录。",
    },
  },
  "electrical/lighting-point-and-downlight-installation": {
    ms: {
      name: "Pemasangan Titik Lampu & Downlight",
      tagline: "Pasang downlight LED, titik pendant, lampu trek dan suis lampu dengan kedudukan yang sekata serta pendawaian yang selamat.",
      description:
        "Pemasangan lampu yang baik memerlukan perancangan kedudukan, kapasiti litar dan jenis siling. Kami membantu menambah downlight LED, titik lampu pendant, trek lampu, serta suis kawalan yang sepadan. Sebelum memotong siling plaster atau papan gypsum, pasukan kami menyemak kedudukan penyokong dan kabel sedia ada. Semua penyambungan dibuat dalam kotak sambungan yang sesuai, dan lampu diuji untuk flicker, kecerahan serta kestabilan. Perkhidmatan ini sesuai untuk rumah, pejabat kecil dan ruang runcit yang mahukan pencahayaan lebih moden.",
      highlights: [
        "Downlight LED, pendant, trek lampu dan suis berkaitan",
        "Semakan struktur siling dan kabel sedia ada sebelum memotong",
        "Pendawaian tersembunyi menggunakan kotak sambungan yang sesuai",
        "Ujian kecerahan, flicker dan kestabilan lampu",
        "Kemasan kemas pada siling plaster atau gypsum",
      ],
      process: [
        { step: "01", title: "Reka Letak Cahaya", desc: "Kami menandakan kedudukan lampu mengikut susun atur bilik, jarak siling dan keutamaan kecerahan anda." },
        { step: "02", title: "Semakan Siling", desc: "Kedudukan penyokong, kabel dan ruang belakang siling diperiksa sebelum lubang dipotong." },
        { step: "03", title: "Pendawaian & Pemasangan", desc: "Kabel ditarik ke titik lampu, pemandu LED disambung dengan selamat, dan kelengkapan dipasang rata." },
        { step: "04", title: "Ujian & Kemasan", desc: "Setiap lampu dan suis diuji, kemudian kawasan kerja dibersihkan dan kemasan siling diperiksa." },
      ],
      faqs: [
        { q: "Berapa harga pasang satu downlight?", a: "Harga bermula dari RM120 setiap titik untuk pemasangan standard. Harga bergantung pada jenis lampu, ketinggian siling dan keperlukan pendawaian baharu." },
        { q: "Bolehkah downlight sedia ada ditukar kepada LED?", a: "Ya, selalunya boleh. Kami akan semak saiz lubang, ruang belakang siling dan sama ada pemandu LED lama serasi." },
        { q: "Adakah anda membekalkan lampu atau hanya pasang?", a: "Kami boleh membekalkan lampu atau memasang unit yang anda sediakan, tertakluk pada kesesuaian teknikal dan jaminan produk." },
        { q: "Adakah pemasangan akan merosakkan siling?", a: "Kami memotong hanya pada kedudukan yang dipersetujui dan menggunakan kemasan yang sesuai. Jika pembaikan plaster diperlukan, ia akan disebut terlebih dahulu." },
      ],
      metaTitle: "Pasang Downlight & Titik Lampu KL | Dari RM120",
      metaDesc: "Pemasangan downlight LED, lampu pendant, trek lampu dan suis di KL & Selangor. Semakan siling, pendawaian selamat dan ujian lampu.",
    },
    zh: {
      name: "照明与筒灯点位安装",
      tagline: "安装LED筒灯、吊灯点位、轨道灯和灯光开关，位置均匀，接线安全，天花收口整齐。",
      description:
        "良好的灯光安装需要考虑点位、回路负荷和天花结构。我们可协助增设LED筒灯、吊灯点位、轨道灯及相应控制开关。在切割石膏或石膏板天花前，团队会检查龙骨和现有电线位置。所有接线均使用合适接线盒，并测试灯具闪烁、亮度和稳定性。这项服务适合想要提升现代照明效果的住宅、小型办公室和零售空间。",
      highlights: [
        "LED筒灯、吊灯、轨道灯及相关开关安装",
        "切割前检查天花龙骨和现有电线",
        "使用合适接线盒进行隐蔽接线",
        "测试亮度、频闪和灯具稳定性",
        "石膏或石膏板天花收口整齐",
      ],
      process: [
        { step: "01", title: "灯光布局", desc: "根据房间格局、天花高度和亮度需求标记灯具位置。" },
        { step: "02", title: "天花检查", desc: "确认龙骨、线缆和天花后部空间，再进行开孔。" },
        { step: "03", title: "布线与安装", desc: "将线缆拉至灯位，安全连接LED驱动器，并平整安装灯具。" },
        { step: "04", title: "测试与收尾", desc: "测试每盏灯和开关，清理施工区域并检查天花收口。" },
      ],
      faqs: [
        { q: "装一个筒灯多少钱？", a: "标准安装从RM120/位起。价格取决于灯具类型、天花高度和是否需要新布线。" },
        { q: "旧筒灯可以换成LED吗？", a: "通常可以。我们会检查开孔尺寸、天花后部空间和旧驱动器是否兼容。" },
        { q: "你们提供灯具还是只负责安装？", a: "我们可以提供灯具，也可安装您自备的产品，但需先确认技术适配和产品保修条件。" },
        { q: "安装会损坏天花吗？", a: "我们只在确认的位置开孔并做好收口。如需要修补石膏，会先说明并另行报价。" },
      ],
      metaTitle: "吉隆坡筒灯与照明点位安装 | RM120起",
      metaDesc: "吉隆坡与雪兰莪LED筒灯、吊灯、轨道灯和开关安装。检查天花结构，安全接线，并完成亮度与稳定性测试。",
    },
  },
  "electrical/aircond-water-heater-and-oven-point": {
    ms: {
      name: "Titik Aircond, Pemanas Air & Ketuhar",
      tagline: "Pasang titik beban berat 20A–32A untuk aircond, pemanas air, ketuhar atau pengecas EV dengan kabel dan isolator yang bersesuaian.",
      description:
        "Perkakas beban tinggi tidak boleh disambungkan ke soket biasa kerana ia memerlukan saiz kabel, pemutus litar dan isolator yang betul. Perkhidmatan ini merangkumi pemasangan titik khusus untuk aircond, pemanas air, ketuhar, pengering dan pengecas EV kediaman. Kami mengira keperluan beban, menyemak jarak dari DB box, dan memasang kabel serta pemutus yang sesuai. Setiap titik diuji untuk voltan, kekutuban, pembumian dan kestabilan sebelum peralatan digunakan.",
      highlights: [
        "Titik khusus 20A–32A untuk peralatan beban tinggi",
        "Pengiraan saiz kabel dan rating pemutus yang sesuai",
        "Isolator berasingan untuk aircond, pemanas air atau ketuhar",
        "Ujian voltan, kekutuban, pembumian dan beban asas",
        "Sesuai untuk kediaman, pejabat kecil dan pengecas EV",
      ],
      process: [
        { step: "01", title: "Semakan Perkakas", desc: "Kami menyemak kW, kedudukan perkakas, jarak dari DB box dan keperluan pengecasan atau bekalan." },
        { step: "02", title: "Reka Bentuk Litar", desc: "Saiz kabel, rating MCB/RCCB dan isolator dipilih berdasarkan beban serta keadaan tapak." },
        { step: "03", title: "Pendawaian Beban Tinggi", desc: "Kabel ditarik dengan kaedah yang selamat, pemutus dipasang, dan sambungan diketatkan mengikut standard." },
        { step: "04", title: "Ujian & Pentauliahan", desc: "Kami menguji litar, mengesahkan tiada voltan terpapar pada bahagian sentuh, dan menerangkan cara penggunaan isolator." },
      ],
      faqs: [
        { q: "Berapa harga satu titik aircond atau pemanas air?", a: "Harga bermula dari RM220 setiap titik untuk pemasangan standard. Harga akhir bergantung pada jarak kabel, saiz kabel dan keperluan pemutus khas." },
        { q: "Perlukah litar berasingan untuk pengecas EV?", a: "Ya. Pengecas EV biasanya memerlukan litar 32A khusus, isolator kalis cuaca jika di luar, dan perlindungan RCD yang sesuai." },
        { q: "Bolehkah anda pasang titik untuk ketuhar dan dapur induksi?", a: "Ya, tetapi kami memerlukan spesifikasi perkakas terlebih dahulu untuk menentukan saiz kabel dan rating pemutus yang betul." },
        { q: "Adakah DB box sedia ada perlu diubah?", a: "Kadangkala ya, jika tiada ruang pemutus atau kapasiti bekalan tidak mencukupi. Kami akan memaklumkannya selepas semakan tapak." },
      ],
      metaTitle: "Titik Aircond, Pemanas Air & Ketuhar KL | RM220",
      metaDesc: "Pemasangan titik beban tinggi 20A–32A untuk aircond, pemanas air, ketuhar dan EV di KL & Selangor. Kabel, isolator serta ujian beban disediakan.",
    },
    zh: {
      name: "空调、热水器与烤箱专用点位",
      tagline: "为空调、热水器、烤箱或电动车充电桩安装20A–32A大功率专用点位，并配置合适电缆与隔离开关。",
      description:
        "大功率电器不能随意插在普通插座上，因为它们需要匹配的电缆截面、断路器和隔离开关。本服务包括空调、热水器、烤箱、烘干机及家用电动车充电桩专用点位安装。我们会计算负荷需求，检查配电箱距离，并安装相应电缆与保护装置。每个点位都会进行电压、极性、接地和基本稳定性测试，确认安全后才交付使用。",
      highlights: [
        "20A–32A大功率设备专用点位",
        "按负荷计算电缆截面和断路器额定值",
        "空调、热水器或烤箱配置独立隔离开关",
        "进行电压、极性、接地和基本负载测试",
        "适合住宅、小型办公室和电动车充电桩",
      ],
      process: [
        { step: "01", title: "设备检查", desc: "确认功率kW、设备位置、到配电箱距离及供电或充电需求。" },
        { step: "02", title: "回路设计", desc: "根据负荷和现场条件选择电缆尺寸、MCB/RCCB额定值和隔离开关。" },
        { step: "03", title: "大功率布线", desc: "以安全方式敷设电缆，安装断路器，并按规范紧固连接。" },
        { step: "04", title: "测试与启用", desc: "测试回路，确认可接触部件无带电，并说明隔离开关使用方式。" },
      ],
      faqs: [
        { q: "空调或热水器点位多少钱？", a: "标准安装从RM220/位起。最终价格取决于线缆距离、电缆尺寸和是否需要特殊断路器。" },
        { q: "电动车充电桩需要独立回路吗？", a: "需要。EV充电桩通常需要32A专用回路，户外还需防水隔离开关和合适的RCD保护。" },
        { q: "可以安装烤箱和电磁炉点位吗？", a: "可以，但需要先提供电器规格，以便确定正确电缆尺寸和断路器额定值。" },
        { q: "现有配电箱需要改吗？", a: "如果没有断路器位或供电容量不足，有时需要升级。我们会在现场检查后说明。" },
      ],
      metaTitle: "吉隆坡空调、热水器与烤箱点位 | RM220起",
      metaDesc: "吉隆坡与雪兰莪20A–32A空调、热水器、烤箱和EV充电桩专用点位。配置合适电缆、隔离开关并完成负载测试。",
    },
  },


  "handyman/heavy-tv-wall-mounting": {
    ms: {
      name: "Pemasangan Dinding TV Berat",
      tagline: "Pemasangan TV 32–85 inci dengan kurungan dinding kukuh, pemasangan rata dan pilihan pendawaian tersembunyi untuk rumah serta pejabat di KL & Selangor.",
      description: "Memasang TV berat pada dinding bukan sekadar menggerudi dua lubang. Pasukan kami mula dengan mengimbas dinding menggunakan pengesan stud elektronik untuk memastikan tiada kabel elektrik atau paip air tersembunyi di belakangnya. Kurungan dipilih mengikut saiz dan berat TV, dan sauh tugas berat yang sesuai digunakan untuk dinding bata, konkrit atau partition gypsum. Untuk dinding partition, kami menggunakan sauh spring keluli yang mencengkam di belakang papan gypsum supaya TV 85 inci pun selamat digantung. Selepas pemasangan, kedudukan disemak dengan aras semangat dan diuji beban. Pilihan pendawaian tersembunyi disediakan supaya ruang anda kelihatan kemas tanpa kabel bergantungan.",
      highlights: [
        "Sokongan TV sehingga 85 inci pada dinding bata, konkrit atau partition gypsum",
        "Pengimbasan stud, paip dan kabel elektrik sebelum menggerudi untuk keselamatan",
        "Sauh spring keluli tugas berat untuk partition gypsum—bukan plug plastik biasa",
        "Pemeriksaan aras dan ujian beban selepas setiap pemasangan",
        "Pilihan pendawaian tersembunyi untuk ruang yang kemas",
      ],
      process: [
        { step: "01", title: "Semakan lokasi & dinding", desc: "Kami menilai jenis dinding, mengimbas stud logam, kabel dan paip, serta menentukan ketinggian TV yang sesuai." },
        { step: "02", title: "Penandaan & penggerudian", desc: "Titik lubang ditanda dengan aras laser, kemudian digerudi dengan saiz bit yang betul untuk sauh yang dipilih." },
        { step: "03", title: "Pemasangan kurungan", desc: "Sauh tugas berat ditanam dan kurungan diikat kemas sebelum TV digantung pada bracket." },
        { step: "04", title: "Ujian & pendawaian", desc: "TV disangkut, diuji kestabilan, dan pendawaian tersembunyi disusun sebelum kawasan dibersihkan." },
      ],
      faqs: [
        { q: "Bolehkah TV berat dipasang pada dinding partition gypsum?", a: "Ya. Kami tidak menggunakan plug plastik biasa pada partition. Kami menggunakan sauh spring keluli tugas berat yang mencengkam di belakang papan gypsum, dan jika ada stud logam, kurungan diikat terus padanya untuk keselamatan maksimum." },
        { q: "Adakah harga termasuk kurungan TV?", a: "Kurungan asas disediakan mengikut pakej. Jika anda ingin kurungan sendeng gerakan penuh, ia dikenakan caj tambahan kecil. Jika anda sudah ada kurungan sendiri, kami pasangkannya untuk anda." },
        { q: "Berapa lama masa pemasangan TV?", a: "Pemasangan TV biasa mengambil masa kira-kira 45–90 minit, bergantung pada jenis dinding, saiz TV dan sama ada pendawaian tersembunyi diperlukan." },
        { q: "Bolehkah pendawaian kabel TV disembunyikan?", a: "Boleh. Kami menyediakan pilihan pendawaian tersembunyi dalam saluran plastik yang dicat sepadan dengan dinding, atau pemasangan outlet di belakang TV untuk rupa yang lebih kemas." },
      ],
      metaTitle: "Pemasangan Dinding TV Berat KL & Selangor | Dari RM150",
      metaDesc: "Pemasangan TV 32–85 inci yang selamat di KL & Selangor. Pengimbasan kabel & paip, sauh tugas berat, aras sempurna & pilihan wayar tersembunyi. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "重型电视挂墙安装",
      tagline: "32–85英寸电视挂墙安装，支架坚固、水平精准，可选隐藏线材，适合住宅与办公室。",
      description: "安装重型电视不止是钻两个孔。我们的团队先用电子探测仪扫描墙面，确认背后没有电线或水管后才施工。支架根据电视尺寸与重量选配，并针对砖墙、混凝土墙或石膏板隔墙使用合适的重型膨胀螺丝。石膏板隔墙会使用钢制弹簧锚栓，从板后牢牢咬合，即使85英寸电视也能安全悬挂。安装后用水平仪校准并进行负重测试，还可选隐藏线材方案，让空间整洁美观。",
      highlights: [
        "支持32–85英寸电视，适用砖墙、混凝土墙或石膏板隔墙",
        "钻孔前扫描墙内电线、水管与龙骨，确保安全",
        "石膏板隔墙使用钢制弹簧锚栓，而非普通塑料胀塞",
        "水平校准与负重测试，安装后即挂即稳",
        "可选隐藏线材方案，墙面整洁",
      ],
      process: [
        { step: "01", title: "现场勘查", desc: "评估墙体类型，扫描金属龙骨、电线与水管，并确定合适的电视挂装高度。" },
        { step: "02", title: "标记与钻孔", desc: "用激光水平仪标记孔位，并以与锚栓匹配的钻头开孔。" },
        { step: "03", title: "安装支架", desc: "植入重型锚栓并锁紧支架，确保稳固。" },
        { step: "04", title: "挂装与测试", desc: "挂上电视、测试稳定性，整理隐藏线材并清理现场。" },
      ],
      faqs: [
        { q: "石膏板隔墙可以挂重型电视吗？", a: "可以。我们不会在隔墙上使用普通塑料胀塞，而是使用钢制弹簧锚栓，从石膏板后方咬合受力；若能找到金属龙骨，也会直接将支架固定到龙骨上。" },
        { q: "价格包含电视支架吗？", a: "基本支架已包含在套餐内。如需可拉伸旋转的悬臂支架，会收取少量附加费用。如果您已自备支架，我们也可以代为安装。" },
        { q: "安装一台电视需要多久？", a: "一般约45–90分钟，视墙体类型、电视尺寸以及是否需要隐藏线材而定。" },
        { q: "电视线材可以藏起来吗？", a: "可以。我们提供与墙面同色的线槽方案，或在电视背后加装插座，让走线更整洁。" },
      ],
      metaTitle: "吉隆坡与雪兰莪重型电视挂墙安装 | 起价RM150",
      metaDesc: "吉隆坡与雪兰莪专业电视挂墙安装。安装前扫描电线与水管，使用重型锚栓，水平校准并负重测试，可选隐藏线材。WhatsApp免费报价。",
    },
  },
  "handyman/door-hinge-and-lockset-repair": {
    ms: {
      name: "Pembaikan Pintu, Engsel & Kunci",
      tagline: "Membaiki pintu melendut, engsel berkarat dan kunci longgar, serta memasang kunci tuil atau kunci digital pintar.",
      description: "Pintu yang senget, engsel berkarat atau kunci yang sukar dipusing adalah masalah harian yang mengganggu dan menjejaskan keselamatan rumah. Kami melaraskan semula daun pintu, menggantikan engsel yang haus, mengetatkan bingkai kayu yang longgar, dan memasang kunci baharu—daripada kunci tuil berkualiti hingga kunci digital pintar dengan kad, PIN atau cap jari. Semua kerja disemak supaya pintu menutup dengan kemas dan kunci berfungsi dengan lancar. Jenama kunci yang kami gunakan termasuk Yale, Hafele dan jenama tempatan yang dipercayai, dan pemasangan kunci digital termasuk penjajaran pintu supaya deadbolt sentiasa masuk dengan sempurna.",
      highlights: [
        "Pembaikan pintu melendut, bingkai longgar dan daun pintu bergesel",
        "Penggantian engsel berkarat dengan engsel tugas berat",
        "Pemasangan kunci tuil premium atau kunci digital pintar (Yale, Hafele)",
        "Penjajaran pintu untuk memastikan deadbolt masuk dengan sempurna",
        "Sesuai untuk rumah teres, kondominium dan pejabat",
      ],
      process: [
        { step: "01", title: "Pemeriksaan pintu", desc: "Kami menilai daun pintu, bingkai, engsel dan mekanisme kunci untuk mengenal pasti punca masalah." },
        { step: "02", title: "Pembaikan struktur", desc: "Engsel haus diganti, bingkai longgar diperkukuh, dan daun pintu diketam jika bergesel dengan lantai." },
        { step: "03", title: "Pemasangan kunci", desc: "Kunci baharu dipasang dengan penjajaran yang tepat supaya deadbolt masuk ke plat penerima dengan lancar." },
        { step: "04", title: "Ujian & kemasan", desc: "Pintu dibuka-tutup beberapa kali, kunci diuji dan kawasan kerja dibersihkan." },
      ],
      faqs: [
        { q: "Pintu saya bergesel dengan lantai, boleh dibaiki?", a: "Boleh. Biasanya ini disebabkan engsel longgar atau daun pintu mengembang. Kami boleh menggantikan engsel, mengetatkan bingkai atau mengetam bahagian bawah pintu supaya ia membuka dan menutup dengan lancar." },
        { q: "Adakah anda memasang kunci digital pintar?", a: "Ya. Kami memasang kunci digital daripada jenama seperti Yale dan Hafele, termasuk kunci kad, PIN dan cap jari. Pemasangan termasuk penjajaran pintu supaya deadbolt berfungsi dengan sempurna." },
        { q: "Berapa lama masa untuk mengganti kunci?", a: "Penggantian kunci tuil standard mengambil masa 30–60 minit. Kunci digital pintar mengambil masa lebih kurang 1–2 jam kerana termasuk penjajaran dan tetapan." },
        { q: "Bolehkah semua kunci rumah diseragamkan dengan satu kunci utama?", a: "Untuk kebanyakan jenama, kami boleh menyusun semula silinder supaya beberapa kunci menggunakan satu kunci utama. Kami akan terangkan pilihan ini semasa pemeriksaan." },
      ],
      metaTitle: "Pembaikan Pintu, Engsel & Kunci KL | Dari RM120",
      metaDesc: "Pembaikan pintu melendut, penggantian engsel berkarat dan pemasangan kunci tuil atau kunci digital pintar di KL & Selangor. Cepat, kemas dan bergaransi.",
    },
    zh: {
      name: "房门、铰链与门锁维修",
      tagline: "修复门扇下垂、生锈铰链与松脱门锁，并安装优质执手锁或智能门锁。",
      description: "门扇下沉、铰链生锈或门锁难转是常见的家居困扰，既影响使用也关乎家居安全。我们调整门扇位置、更换磨损铰链、加固松动的木门框，并安装新门锁——从品质执手锁到支持刷卡、密码或指纹的智能门锁。完成后会反复测试，确保门扇关合严密、锁具转动顺畅。我们常用耶鲁、海福乐及信誉良好的本地品牌；智能门锁安装包含门扇校准，确保锁舌准确入位。",
      highlights: [
        "修复门扇下沉、门框松动与门扇刮地问题",
        "更换生锈铰链为重型铰链",
        "安装耶鲁、海福乐等执手锁或智能门锁",
        "门扇校准，确保锁舌顺畅入位",
        "适合排屋、公寓及办公室",
      ],
      process: [
        { step: "01", title: "检查门体", desc: "检查门扇、门框、铰链与锁体，确定问题根源。" },
        { step: "02", title: "结构修复", desc: "更换磨损铰链、加固松动门框；门扇刮地时进行刨削调整。" },
        { step: "03", title: "安装门锁", desc: "精确开孔安装新锁，确保锁舌与扣板对准。" },
        { step: "04", title: "测试交接", desc: "反复开关门扇、测试锁具功能，并清理施工现场。" },
      ],
      faqs: [
        { q: "门扇刮地可以修吗？", a: "可以。这通常由铰链松动或门扇受潮膨胀引起。我们会更换铰链、加固门框或刨削门扇底部，让门开关顺畅。" },
        { q: "可以安装智能门锁吗？", a: "可以。我们安装耶鲁、海福乐等品牌的智能门锁，支持刷卡、密码与指纹；安装时会对门扇进行校准，确保锁舌正常工作。" },
        { q: "更换门锁需要多久？", a: "普通执手锁约30–60分钟；智能门锁约1–2小时，因为包含校准与功能设定。" },
        { q: "能把家里几把锁统一成同一把钥匙吗？", a: "多数品牌可以通过重排锁芯实现一匙通用。我们会在检查时向您说明这项选项。" },
      ],
      metaTitle: "吉隆坡与雪兰莪房门、铰链与门锁维修 | 起价RM120",
      metaDesc: "吉隆坡与雪兰莪门扇下沉维修、生锈铰链更换及执手锁或智能门锁安装。快速、整洁，附保修。WhatsApp免费报价。",
    },
  },
  "handyman/furniture-assembly-ikea-taobao": {
    ms: {
      name: "Pemasangan Perabot (IKEA/Taobao)",
      tagline: "Pemasangan almari, katil, kabinet paparan dan meja pejabat daripada IKEA, Taobao, Harvey Norman dan jenama flat-pack lain.",
      description: "Manual pemasangan flat-pack yang panjang dan skru yang banyak sering memakan masa berjam-jam. Pasukan kami memasang perabot kompleks seperti almari pakaian, katil, kabinet paparan, meja pejabat, rak dapur dan troli pulau dengan pantas dan tepat. Kami menyusun komponen mengikut senarai, memastikan semua skru diketatkan dengan betul, dan memeriksa laci serta engsel berfungsi dengan lancar sebelum serahan. Jika ada bahagian yang rosak atau tidak lengkap, kami akan memberitahu anda lebih awal. Kami juga boleh membuang kotak dan bahan pembungkusan untuk anda. Sesuai untuk penghantaran IKEA, Taobao, Harvey Norman, Courts dan jenama tempatan.",
      highlights: [
        "Pemasangan pantas untuk almari, katil, kabinet dan meja",
        "Menyusun komponen dan memastikan tiada bahagian tertinggal",
        "Semua skru, laci dan engsel diperiksa selepas pemasangan",
        "Menyokong jenama IKEA, Taobao, Harvey Norman, Courts dan lain-lain",
        "Pilihan pelupusan kotak dan bahan pembungkusan",
      ],
      process: [
        { step: "01", title: "Semakan inventori", desc: "Kami menyemak senarai komponen, memastikan semua bahagian dan skru mencukupi sebelum mula memasang." },
        { step: "02", title: "Pemasangan binaan", desc: "Rangka utama dipasang dahulu, kemudian panel, laci, engsel dan aksesori dipasang mengikut susunan." },
        { step: "03", title: "Pemeriksaan fungsi", desc: "Laci dibuka-tutup, engsel dilaraskan dan permukaan diperiksa untuk memastikan semuanya kukuh." },
        { step: "04", title: "Kemas & pelupusan", desc: "Perabot diletakkan di lokasi yang dikehendaki dan kotak dibuang jika diminta." },
      ],
      faqs: [
        { q: "Adakah anda memasang perabot daripada Taobao?", a: "Ya, selagi komponen dan arahan mencukupi. Kami juga boleh membantu mengenal pasti bahagian yang hilang atau rosak semasa penghantaran." },
        { q: "Berapa lama masa untuk memasang almari IKEA?", a: "Almari PAX bersaiz penuh biasanya mengambil masa 2–4 jam, bergantung pada bilangan pintu, laci dan aksesori dalaman." },
        { q: "Adakah anda memasang lampu atau aksesori tambahan?", a: "Ya, aksesori seperti lampu dalaman, pemegang dan soft-close boleh dipasang bersama. Sila beritahu kami semasa membuat tempahan." },
        { q: "Bolehkah perabot sedia ada dipindahkan selepas pemasangan?", a: "Kami boleh membantu memindahkan perabot dalam jarak munasabah dan menyusun semula mengikut keperluan anda." },
      ],
      metaTitle: "Pemasangan Perabot IKEA/Taobao KL | Dari RM120",
      metaDesc: "Pemasangan perabot flat-pack IKEA, Taobao, Harvey Norman dan Courts di KL & Selangor. Almari, katil, kabinet dan meja dipasang pantas, kemas dan bergaransi.",
    },
    zh: {
      name: "家具组装（宜家/淘宝）",
      tagline: "组装衣柜、床架、展示柜与办公桌，适用于宜家、淘宝、Harvey Norman等平板包装家具。",
      description: "冗长的平板家具说明书和一大堆螺丝常常要花上数小时。我们的团队快速、准确地组装衣柜、床架、展示柜、办公桌、厨房置物架与岛台推车等复杂家具。我们按清单清点配件，确保每颗螺丝正确拧紧，并在交付前检查抽屉与铰链运转顺畅。若发现部件缺失或运输损坏，我们会第一时间告知。我们还可帮您处理纸箱与包装材料。适用于宜家、淘宝、Harvey Norman、Courts及本地品牌。",
      highlights: [
        "快速组装衣柜、床架、展示柜与办公桌",
        "按清单清点配件，确认无遗漏",
        "安装后逐一检查螺丝、抽屉与铰链",
        "支持宜家、淘宝、Harvey Norman、Courts等品牌",
        "可选纸箱与包装材料处理服务",
      ],
      process: [
        { step: "01", title: "清点配件", desc: "核对组件清单，确认所有板材、螺丝与配件齐全后再开始。" },
        { step: "02", title: "主体组装", desc: "先搭主框架，再依次安装面板、抽屉、铰链与配件。" },
        { step: "03", title: "功能检查", desc: "测试抽屉开合、调节铰链，检查表面无刮损。" },
        { step: "04", title: "摆放与清理", desc: "将家具移至指定位置，并按需清理包装箱。" },
      ],
      faqs: [
        { q: "淘宝购买的家具可以组装吗？", a: "可以，只要配件与说明齐全。若运输中有缺件或损坏，我们也会协助您判断并联系卖家处理。" },
        { q: "组装一个宜家衣柜要多久？", a: "标准尺寸的PAX衣柜一般约2–4小时，视门板、抽屉及内部配件数量而定。" },
        { q: "可以顺便安装灯或配件吗？", a: "可以，例如柜内灯、把手与阻尼铰链都可以一并安装，请在预约时告知。" },
        { q: "装好后可以帮忙移动家具吗？", a: "在合理范围内，我们可以帮您将家具移到指定位置并摆放整齐。" },
      ],
      metaTitle: "吉隆坡与雪兰莪家具组装（宜家/淘宝）| 起价RM120",
      metaDesc: "吉隆坡与雪兰莪宜家、淘宝、Harvey Norman平板家具组装服务。衣柜、床架、展示柜与办公桌快速组装，检查到位。WhatsApp免费报价。",
    },
  },
  "handyman/curtains-blinds-and-shelves-hanging": {
    ms: {
      name: "Penggantungan Langsir, Bidai & Rak",
      tagline: "Pemasangan trek langsir berat, bidai roman, rak terapung, cermin dan bingkai gambar dengan kukuh dan rata.",
      description: "Trek langsir yang jatuh, rak terapung yang senget atau cermin yang tidak kukuh adalah risiko keselamatan yang sering dipandang ringan. Kami memasang trek langsir berat, bidai roman, rak terapung, cermin dan bingkai gambar dengan sauh yang sesuai untuk setiap jenis dinding. Untuk rak berat dan langsir panjang, kami mengimbas dinding dahulu untuk mencari stud atau mengesan kabel tersembunyi sebelum menggerudi. Setiap pemasangan diperiksa dengan aras semangat dan diuji beban supaya barang kekal kukuh untuk jangka masa panjang. Kami juga boleh memasang batang langsir dengan hiasan hujung untuk rupa yang lebih klasik.",
      highlights: [
        "Pemasangan trek langsir berat, bidai roman, rak, cermin dan bingkai gambar",
        "Pengimbasan stud dan kabel tersembunyi sebelum menggerudi",
        "Sauh yang sesuai untuk dinding bata, konkrit dan gypsum",
        "Semua pemasangan disemak dengan aras dan diuji beban",
        "Termasuk pemasangan batang langsir dengan hiasan hujung",
      ],
      process: [
        { step: "01", title: "Penilaian beban & dinding", desc: "Kami menilai berat barang dan jenis dinding untuk menentukan sauh dan kaedah pemasangan yang betul." },
        { step: "02", title: "Pengimbasan & penandaan", desc: "Kedudukan ditanda dengan aras, dan dinding diimbas untuk mengelakkan kabel atau paip tersembunyi." },
        { step: "03", title: "Pemasangan & pengikat", desc: "Sauh dipasang dan trek, rak atau cermin diikat kemas pada dinding." },
        { step: "04", title: "Ujian beban & kemasan", desc: "Setiap pemasangan diuji dengan beban sebenar, dilaraskan supaya rata dan kawasan dibersihkan." },
      ],
      faqs: [
        { q: "Trek langsir panjang yang berat boleh dipasang dengan selamat?", a: "Boleh. Kami menggunakan sauh yang sesuai dengan jenis dinding, dan untuk langsir panjang kami mencari stud atau menggunakan sauh tugas berat supaya trek tidak melengkung atau jatuh." },
        { q: "Rak terapung boleh menampung berapa berat?", a: "Bergantung pada jenis dinding dan sauh. Pada dinding konkrit dengan sauh yang betul, rak boleh menampung beban yang jauh lebih berat berbanding pemasangan pada gypsum. Kami akan menasihati anda semasa pemeriksaan." },
        { q: "Adakah anda memasang cermin besar?", a: "Ya, kami memasang cermin dinding dan cermin almari dengan klip atau pelekat industri yang sesuai, memastikan ia rata dan kukuh." },
        { q: "Bolehkah langsir lama ditanggalkan dahulu?", a: "Boleh. Kami boleh menanggalkan langsir dan trek sedia ada, membaiki lubang lama jika perlu, dan memasang yang baharu." },
      ],
      metaTitle: "Penggantungan Langsir, Bidai & Rak KL | Dari RM100",
      metaDesc: "Pemasangan trek langsir, bidai roman, rak terapung, cermin dan bingkai gambar di KL & Selangor. Kukuh, rata, diuji beban. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "窗帘、百叶窗与搁板安装",
      tagline: "牢固、水平地安装重型窗帘轨道、罗马帘、壁挂搁板、镜面与相框。",
      description: "窗帘轨道脱落、搁板倾斜或镜面松动，是常被忽视的安全隐患。我们为重型窗帘轨道、罗马帘、壁挂搁板、镜面与相框选用适合不同墙体的锚栓。安装重型搁板与长窗帘前，我们会先扫描墙体寻找龙骨或探测隐藏电线，再行钻孔。每项安装都用水平仪校准并做负重测试，确保长期牢固。我们也提供带装饰端头的罗马杆窗帘安装，营造更典雅的风格。",
      highlights: [
        "安装重型窗帘轨道、罗马帘、搁板、镜面与相框",
        "钻孔前扫描龙骨与隐藏电线",
        "针对砖墙、混凝土墙与石膏板墙选用合适锚栓",
        "水平校准与负重测试，长期稳固",
        "提供带端头装饰的罗马杆窗帘安装",
      ],
      process: [
        { step: "01", title: "评估承重与墙体", desc: "根据物品重量与墙体类型选择合适的锚栓与安装方式。" },
        { step: "02", title: "扫描与标记", desc: "用水平仪标记位置，并扫描墙体避开电线或水管。" },
        { step: "03", title: "安装固定", desc: "植入锚栓，将轨道、搁板或镜面牢固固定在墙上。" },
        { step: "04", title: "负重测试与清理", desc: "以实际负载测试每项安装，调平并清理现场。" },
      ],
      faqs: [
        { q: "又长又重的窗帘轨道能安全安装吗？", a: "可以。我们会按墙体类型选用合适锚栓；长窗帘会寻找龙骨或使用重型锚栓，避免轨道弯曲或脱落。" },
        { q: "壁挂搁板能承重多少？", a: "取决于墙体类型与锚栓。混凝土墙配合适锚栓可承受远重于石膏板墙的负载，我们会在现场勘查时给出建议。" },
        { q: "可以安装大镜面吗？", a: "可以。我们使用合适的挂件或工业级胶粘固定镜面，确保水平且牢固。" },
        { q: "可以先把旧窗帘拆下来吗？", a: "可以。我们可以拆除旧窗帘与轨道，视需要修补旧孔，再安装新配件。" },
      ],
      metaTitle: "吉隆坡与雪兰莪窗帘、百叶窗与搁板安装 | 起价RM100",
      metaDesc: "吉隆坡与雪兰莪窗帘轨道、罗马帘、壁挂搁板、镜面与相框安装。牢固水平，负重测试，快速整洁。WhatsApp免费报价。",
    },
  },

  /* ── TILING ─────────────────────────────────────────────────────────── */
  "tiling/floor-tiling-installation": {
    ms: {
      name: "Pemasangan Jubin Lantai",
      tagline: "Pemasangan jubin lantai homogen, porselin dan seramik 300x300mm hingga 600x600mm dengan pelekat polimer dan kemasan rata sempurna.",
      description:
        "Kami memasang jubin lantai homogen, porselin dan seramik bersaiz 300x300mm hingga 600x600mm menggunakan pelekat jubin yang diubah suai polimer. Substrat diperiksa kerataan, kelembapan dan kekuatannya dahulu; permukaan yang tidak rata diratakan dengan sebatian self-levelling dan diprima sebelum jubin diletakkan. Susun atur dirancang lebih awal supaya jubin penuh berada di kedudukan utama dan serpihan nipis dialihkan ke tepi yang kurang kelihatan, dengan cerun lantai diarahkan ke longkang di kawasan basah. Setiap jubin ditekan ke dalam pelekat menggunakan trowel takuk bersaiz betul, dan sendi diisi dengan grout tahan kulat yang dipadankan warnanya. Semua kerja disokong jaminan lekatan jubin dan grout selama 12 bulan.",
      highlights: [
        "Jubin homogen, porselin dan seramik 300x300mm hingga 600x600mm",
        "Pemeriksaan kerataan substrat dengan self-levelling jika perlu",
        "Susun atur dirancang untuk elak serpihan nipis di tepi",
        "Grout tahan kulat dipadankan warna dengan jubin anda",
        "Jaminan lekatan jubin & grout 12 bulan",
      ],
      process: [
        { step: "01", title: "Pemeriksaan Substrat", desc: "Kami menguji kerataan, kandungan lembapan dan kekuatan permukaan sebelum sebarang pelekat dicampur." },
        { step: "02", title: "Perancangan Susun Atur", desc: "Garis datum ditanda supaya jubin penuh berada di kedudukan utama dan serpihan dialihkan ke tepi yang kurang kelihatan." },
        { step: "03", title: "Penyediaan Permukaan", desc: "Substrat yang tidak rata diisi dengan sebatian self-levelling dan diprima untuk lekatan maksimum." },
        { step: "04", title: "Pemasangan Jubin", desc: "Jubin diletakkan dalam pelekat polimer menggunakan trowel takuk bersaiz betul dengan sendi seragam." },
        { step: "05", title: "Grouting & Pembersihan", desc: "Selepas pengeringan 24 jam, sendi diisi dengan grout tahan kulat dan permukaan dibersihkan tanpa kesan." },
      ],
      faqs: [
        { q: "Berapa saiz jubin lantai yang paling popular di Malaysia?", a: "Jubin 600x600mm ialah pilihan paling popular untuk rumah dan kondominium di Malaysia kerana saiznya yang sederhana besar memberikan ruang yang kemas dengan kos pemasangan yang berpatutan. Jubin 800x800mm semakin diminati untuk ruang tamu yang luas." },
        { q: "Bolehkah jubin lantai dipasang di atas lantai sedia ada?", a: "Tidak disyorkan. Meletakkan jubin di atas jubin lama menaikkan aras lantai, menyukarkan pembukaan pintu dan mengurangkan ketinggian siling. Jubin lama perlu ditanggalkan dan permukaan disediakan dahulu untuk lekatan dan ketahanan jangka panjang." },
        { q: "Berapa lama masa untuk memasang jubin lantai satu ruang tamu?", a: "Ruang tamu seluas 20m² biasanya mengambil masa 2–3 hari termasuk penyediaan substrat, pemasangan dan grouting. Pelekat perlu kering selama 24 jam sebelum grout boleh diisi." },
        { q: "Adakah harga termasuk jubin?", a: "Harga asas RM14 setiap kaki persegi adalah untuk buruh pemasangan sahaja. Jubin boleh dibeli oleh anda sendiri, atau kami boleh membantu membekalkannya dengan kos berasingan mengikut pilihan anda." },
      ],
      metaTitle: "Pemasangan Jubin Lantai KL & Selangor | Harga Dari RM14/kaki²",
      metaDesc: "Pasang jubin lantai homogen, porselin & seramik di KL & Selangor. Pelekat polimer, self-levelling, grout tahan kulat. Jaminan 12 bulan. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "地面瓷砖铺贴",
      tagline: "300x300mm 至 600x600mm 地面瓷砖铺贴，聚合物瓷砖胶、自流平找平，平整无空鼓。",
      description:
        "我们使用改性聚合物瓷砖胶铺贴瓷质、玻化与陶瓷地砖（300x300mm 至 600x600mm）。铺贴前先检查基层平整度、含水率与强度；不平处用自流平找平并涂刷界面剂。排版预先规划，整砖位于显眼位置，窄条移至不显眼边缘；湿区地漏处合理找坡。每块砖以正确规格的齿形抹刀满浆铺贴，勾缝使用与瓷砖颜色匹配的防霉勾缝剂。全部工程享有 12 个月瓷砖粘结与勾缝保修。",
      highlights: [
        "瓷质、玻化与陶瓷地砖，300x300mm 至 600x600mm",
        "基层平整度检查，必要时自流平找平",
        "排版规划，避免墙边窄条，湿区合理找坡",
        "防霉勾缝剂颜色匹配，满浆铺贴无空鼓",
        "12 个月瓷砖粘结与勾缝保修",
      ],
      process: [
        { step: "01", title: "基层检查", desc: "拌胶前测试基层平整度、含水率与强度。" },
        { step: "02", title: "排版规划", desc: "弹线确定整砖位置，窄条移至不显眼边缘。" },
        { step: "03", title: "表面处理", desc: "不平基层用自流平找平并涂刷界面剂。" },
        { step: "04", title: "瓷砖铺贴", desc: "以正确齿形抹刀满浆铺贴，接缝均匀。" },
        { step: "05", title: "勾缝与清洁", desc: "养护后填入防霉勾缝剂，表面擦净无残浆。" },
      ],
      faqs: [
        { q: "马来西亚最流行的地砖尺寸是什么？", a: "600x600mm 是马来西亚住宅与公寓最流行的地砖尺寸，砖面适中、铺贴成本合理。800x800mm 大砖越来越受欢迎，适合空间较大的客厅。" },
        { q: "可以在旧地砖上直接铺新砖吗？", a: "不建议。在旧砖上铺新砖会抬高地面，影响门扇开合并压低层高。应先拆除旧砖并处理好基层，才能保证粘结牢固、经久耐用。" },
        { q: "铺一个客厅的地砖需要多久？", a: "约 20 平方米的客厅通常需要 2–3 天，包括基层处理、铺贴与勾缝。勾缝前需等待瓷砖胶养护 24 小时。" },
        { q: "报价含瓷砖吗？", a: "RM14/平方英尺 的基础价只含铺贴人工。瓷砖可由您自购，我们也可代为采购，费用另计。" },
      ],
      metaTitle: "吉隆坡与雪兰莪地砖铺贴 | 每平方英尺RM14起",
      metaDesc: "吉隆坡与雪兰莪地砖铺贴服务。瓷质、玻化与陶瓷砖，聚合物瓷砖胶，自流平找平，防霉勾缝。12个月保修。WhatsApp免费报价。",
    },
  },
  "tiling/wall-tiling-installation": {
    ms: {
      name: "Pemasangan Jubin Dinding",
      tagline: "Jubin dinding dapur, bilik mandi dan dinding ciri dengan corak lurus, bata atau herringbone, kemasan kalis air dan sendi kemas.",
      description:
        "Kami memasang jubin dinding untuk splashback dapur, dinding bilik mandi dan dinding ciri menggunakan pelekat polimer berkualiti. Permukaan dinding diperiksa kerataan dan kekuatannya, diprima jika perlu, dan garis datum ditanda dengan aras sebelum jubin dilekatkan. Corak lurus, bata atau herringbone dirancang bersama anda, dengan potongan kemas di sudut dan sekitar suis serta paip. Sendi diisi dengan grout tahan kulat, dan kawasan basah ditutup dengan silikon anti-kulat di sudut dan sendi untuk mengelakkan kebocoran. Jubin dinding dipasang tegak, sekata dan sedia untuk digunakan serta-merta selepas grout kering.",
      highlights: [
        "Splashback dapur, dinding bilik mandi & dinding ciri",
        "Corak lurus, bata atau herringbone pilihan anda",
        "Potongan kemas di sudut, suis dan paip",
        "Grout tahan kulat & silikon anti-kulat untuk kawasan basah",
        "Jaminan lekatan jubin 12 bulan",
      ],
      process: [
        { step: "01", title: "Pemeriksaan Dinding", desc: "Dinding diperiksa kerataan, kelembapan dan kekuatannya sebelum pelekat disapu." },
        { step: "02", title: "Penandaan Garis", desc: "Garis datum dan penjajaran ditanda dengan aras supaya jubin lurus dari lantai ke siling." },
        { step: "03", title: "Penyediaan & Pelekat", desc: "Permukaan diprima jika perlu dan pelekat disapu dengan trowel takuk yang betul." },
        { step: "04", title: "Pemasangan Jubin", desc: "Jubin ditekan ke dalam pelekat dengan spacer untuk sendi seragam dan permukaan rata." },
        { step: "05", title: "Grouting & Pengedap", desc: "Sendi diisi dengan grout tahan kulat dan sudut kawasan basah ditutup silikon anti-kulat." },
      ],
      faqs: [
        { q: "Apakah corak jubin dinding yang paling popular?", a: "Corak lurus ialah pilihan paling popular kerana kemas dan mudah diselenggara. Corak bata memberi tekstur menarik untuk splashback dapur, manakala corak herringbone sesuai untuk dinding ciri yang ingin menonjol." },
        { q: "Berapa tinggi jubin dinding bilik mandi perlu dipasang?", a: "Kebanyakan pemilik rumah memasang jubin dinding bilik mandi sehingga siling untuk perlindungan penuh daripada percikan air. Pilihan separa tinggi (1.2–1.5m) lebih murah tetapi memerlukan kemasan atas yang kemas dan cat kalis air di bahagian atas." },
        { q: "Bolehkah jubin dinding dipasang di atas jubin lama?", a: "Untuk dinding, jubin lama perlu ditanggalkan dahulu kerana permukaan berkilat tidak memberikan lekatan yang baik dan menambah beban pada dinding. Kami menanggalkan, membaiki dan menyediakan permukaan sebelum pemasangan baharu." },
        { q: "Apakah perbezaan harga jubin dinding dan lantai?", a: "Jubin dinding (RM16 setiap kaki persegi) lebih mahal sedikit daripada jubin lantai (RM14 setiap kaki persegi) kerana kerja dinding memerlukan lebih ketelitian dalam penjajaran menegak, potongan di sudut dan pengendalian jubin." },
      ],
      metaTitle: "Pemasangan Jubin Dinding KL & Selangor | Harga Dari RM16/kaki²",
      metaDesc: "Pasang jubin dinding dapur & bilik mandi di KL & Selangor. Splashback, dinding ciri, corak lurus/bata/herringbone. Grout tahan kulat. Jaminan 12 bulan. Sebut harga percuma.",
    },
    zh: {
      name: "墙面瓷砖铺贴",
      tagline: "厨房防溅墙、卫生间墙面与主题墙铺贴，直拼、工字拼或人字拼任选，缝隙均匀整洁。",
      description:
        "我们使用优质聚合物瓷砖胶铺贴厨房防溅墙、卫生间墙面与主题墙。铺贴前检查墙面平整度、含水率与强度，必要时涂刷界面剂并用水平仪弹线定位。直拼、工字拼或人字拼图案可按您的喜好选择，转角、开关与管道处切割整齐。勾缝使用防霉勾缝剂，湿区阴角打防霉硅胶防止渗水。墙面砖垂直平整、缝隙均匀，勾缝干透后即可正常使用。",
      highlights: [
        "厨房防溅墙、卫生间墙面与主题墙",
        "直拼、工字拼或人字拼任选",
        "转角、开关与管道处整齐切割",
        "防霉勾缝剂，湿区阴角打防霉硅胶",
        "12 个月瓷砖粘结保修",
      ],
      process: [
        { step: "01", title: "墙面检查", desc: "铺贴前检查墙面平整度、含水率与强度。" },
        { step: "02", title: "弹线定位", desc: "用水平仪弹出基准线，确保瓷砖垂直对齐。" },
        { step: "03", title: "打底与涂胶", desc: "必要时涂刷界面剂，用正确齿形抹刀批刮瓷砖胶。" },
        { step: "04", title: "瓷砖铺贴", desc: "瓷砖按压入胶并放置调平卡，接缝均匀、表面平整。" },
        { step: "05", title: "勾缝与密封", desc: "填入防霉勾缝剂，湿区阴角打防霉硅胶。" },
      ],
      faqs: [
        { q: "最流行的墙面砖图案是什么？", a: "直拼最受欢迎，整齐且易于清洁。工字拼为厨房防溅墙增添质感，人字拼则适合想让主题墙出彩的空间。" },
        { q: "卫生间墙砖要铺多高？", a: "多数业主选择通顶铺贴，以全面防溅。半高方案（1.2–1.5m）更省钱，但需要整洁的收边并在上部使用防水漆。" },
        { q: "可以在旧墙砖上直接铺新砖吗？", a: "墙面不建议。旧砖表面光滑、附着力差，且增加墙体负荷。我们会先拆旧、修补并处理基层再铺新砖。" },
        { q: "墙砖和地砖价格为何不同？", a: "墙砖铺贴（RM16/平方英尺）略高于地砖（RM14/平方英尺），因为立面铺贴更考验垂直对齐、转角切割与瓷砖搬运。" },
      ],
      metaTitle: "吉隆坡与雪兰莪墙砖铺贴 | 每平方英尺RM16起",
      metaDesc: "吉隆坡与雪兰莪厨房与卫生间墙砖铺贴。防溅墙、主题墙，直拼/工字拼/人字拼。防霉勾缝。12个月保修。免费报价。",
    },
  },
  "tiling/large-format-slab-tiling": {
    ms: {
      name: "Pemasangan Slab Format Besar",
      tagline: "Pemasangan slab 600x1200mm, 800x1800mm dan 1200x2400mm dengan self-levelling, pengangkat cawan sedutan dan lippage tuning.",
      description:
        "Slab format besar memberikan rupa moden dengan sendi yang minimum, tetapi memerlukan kemahiran dan peralatan khusus. Kami memasang slab 600x1200mm, 800x1800mm dan 1200x2400mm di atas substrat yang diratakan dengan sebatian self-levelling untuk permukaan yang sempurna rata. Pengangkat cawan sedutan dan rak khas digunakan untuk mengendalikan slab berat dengan selamat tanpa risiko kerosakan. Sistem lippage tuning (Raimondi atau Rubi) memastikan tiada jurang tinggi antara slab, dan pelekat disapu pada belakang slab (back-buttering) untuk liputan penuh dan mengelakkan bintik berongga. Hasilnya lantai slab besar yang rata, kemas dan mewah untuk ruang tamu, dapur dan ruang komersial.",
      highlights: [
        "Slab 600x1200mm, 800x1800mm & 1200x2400mm",
        "Self-levelling untuk substrat sempurna rata",
        "Pengangkat cawan sedutan & rak untuk slab berat",
        "Sistem lippage tuning — tiada jurang tinggi",
        "Back-buttering untuk liputan pelekat penuh",
      ],
      process: [
        { step: "01", title: "Penilaian Substrat", desc: "Kerataan dan kekuatan substrat dinilai; lantai tidak rata diisi dengan sebatian self-levelling." },
        { step: "02", title: "Perancangan Susun Atur", desc: "Susun atur slab dirancang untuk meminimumkan potongan dan memastikan corak seimbang." },
        { step: "03", title: "Self-Levelling & Primer", desc: "Sebatian self-levelling dituang, diratakan dan dibiarkan kering sebelum primer disapu." },
        { step: "04", title: "Pemasangan Slab", desc: "Slab diangkat dengan cawan sedutan, disapu pelekat (back-buttering) dan diletakkan dengan klip lippage tuning." },
        { step: "05", title: "Grouting & Kemasan", desc: "Selepas pengeringan, sendi diisi dengan grout epoksi atau simen yang dipadankan, dan permukaan digilap bersih." },
      ],
      faqs: [
        { q: "Apakah kelebihan slab format besar berbanding jubin biasa?", a: "Slab besar seperti 800x1800mm atau 1200x2400mm mengurangkan bilangan sendi, memberikan rupa yang lebih bersih dan mewah. Ia juga lebih mudah dibersihkan kerana kurang garisan grout yang mengumpul kotoran." },
        { q: "Mengapa harga slab besar lebih mahal?", a: "Slab besar memerlukan self-levelling yang teliti, pengangkat cawan sedutan, klip lippage tuning dan tenaga kerja yang lebih mahir. Risiko kerosakan juga lebih tinggi kerana slab berat dan rapuh sebelum dipasang." },
        { q: "Bolehkah slab besar dipasang di atas lantai yang tidak rata?", a: "Tidak digalakkan. Slab besar sangat sensitif terhadap permukaan yang tidak rata — sebarang ketidaksamaan akan kelihatan sebagai jurang tinggi antara slab. Kami meratakan substrat dengan self-levelling terlebih dahulu." },
        { q: "Apakah itu back-buttering?", a: "Back-buttering ialah menyapu pelekat pada bahagian belakang slab selain pelekat di lantai, untuk memastikan liputan penuh. Ini penting untuk slab melebihi 600mm bagi mengelakkan bintik berongga." },
      ],
      metaTitle: "Pemasangan Slab Format Besar KL & Selangor | Dari RM26/kaki²",
      metaDesc: "Pemasangan slab 600x1200mm, 800x1800mm & 1200x2400mm di KL & Selangor. Self-levelling, cawan sedutan, lippage tuning. Kemasan rata & mewah. Sebut harga percuma.",
    },
    zh: {
      name: "超大板铺贴",
      tagline: "600x1200mm、800x1800mm 与 1200x2400mm 超大板铺贴，自流平找平、吸盘搬运、找平器调平。",
      description:
        "超大板缝隙少、观感现代大气，但对工艺与设备要求极高。我们铺贴 600x1200mm、800x1800mm 与 1200x2400mm 超大板：先用自流平将基层找平，再用吸盘与专用支架安全搬运沉重易碎的大板，以 Raimondi 或 Rubi 找平器系统消除板间高低差，并对板材背涂瓷砖胶确保满浆、杜绝空鼓。完工后的地面平整、缝隙均匀、气派十足，适合客厅、厨房与商业空间。",
      highlights: [
        "600x1200mm、800x1800mm 与 1200x2400mm 超大板",
        "自流平找平，基层绝对平整",
        "吸盘与专用支架安全搬运重板",
        "找平器系统，板间零高低差",
        "背涂瓷砖胶，保证满浆无空鼓",
      ],
      process: [
        { step: "01", title: "基层评估", desc: "评估基层平整度与强度，不平处用自流平找平。" },
        { step: "02", title: "排版规划", desc: "规划大板排版，尽量减少切割并保持图案均衡。" },
        { step: "03", title: "自流平与界面剂", desc: "浇筑自流平、刮平并养护，干透后涂刷界面剂。" },
        { step: "04", title: "大板铺贴", desc: "用吸盘起板、背涂瓷砖胶，以找平器系统调平铺贴。" },
        { step: "05", title: "勾缝与收尾", desc: "养护后填环氧或水泥基勾缝剂，颜色匹配，表面擦净。" },
      ],
      faqs: [
        { q: "超大板比普通瓷砖有什么优势？", a: "800x1800mm 或 1200x2400mm 的大板缝隙极少，整体更整洁大气，也更易清洁——勾缝线少，藏污纳垢的地方就少。" },
        { q: "为什么超大板铺贴价格更高？", a: "超大板需要精细的自流平、吸盘搬运、找平器系统与更有经验的瓦工。大板重且铺贴前易碎，搬运与施工风险更高。" },
        { q: "基层不平能铺超大板吗？", a: "不建议。超大板对基层平整度极其敏感，任何不平都会显现为板间高低差。我们先用自流平把基层找平再铺贴。" },
        { q: "什么是背涂？", a: "背涂是在板材背面额外批刮瓷砖胶，与地面胶层共同保证满浆。超过 600mm 的大板必须背涂，以避免空鼓。" },
      ],
      metaTitle: "吉隆坡与雪兰莪超大板铺贴 | 每平方英尺RM26起",
      metaDesc: "吉隆坡与雪兰莪 600x1200mm/800x1800mm/1200x2400mm 超大板铺贴。自流平、吸盘搬运、找平器调平。平整大气。免费报价。",
    },
  },
  "tiling/tile-repair-and-re-grouting": {
    ms: {
      name: "Pembaikan Jubin & Grout Semula",
      tagline: "Mengganti jubin berongga, retak atau longgar, membaiki substrat dan menggantikan grout lama dengan grout tahan kulat.",
      description:
        "Jubin berongga, retak atau longgar bukan sahaja tidak sedap dipandang — ia boleh menjadi bahaya tersandung dan laluan masuk air ke substrat. Kami mengesan jubin berongga dengan ujian ketukan, menanggalkannya dengan berhati-hati tanpa merosakkan jubin sekeliling, membaiki substrat di bawahnya dan memasang jubin gantian dengan pelekat segar. Grout lama yang berubah warna, berkulat atau retak dibuang dan digantikan dengan grout tahan kulat yang dipadankan warnanya. Untuk kawasan basah, kami juga menggantikan silikon di sudut dengan silikon anti-kulat. Semua kerja siap dalam masa yang singkat dengan gangguan minimum kepada rutin harian anda.",
      highlights: [
        "Pengesanan jubin berongga dengan ujian ketukan",
        "Penggantian jubin dengan pelekat segar & substrat dibaiki",
        "Grout lama dibuang & diganti dengan grout tahan kulat",
        "Padanan warna grout dengan jubin sedia ada",
        "Silikon anti-kulat baharu untuk kawasan basah",
      ],
      process: [
        { step: "01", title: "Pengesanan & Penilaian", desc: "Kawasan berongga dikenal pasti dengan ujian ketukan dan kerosakan dinilai." },
        { step: "02", title: "Penanggalan Jubin", desc: "Jubin rosak ditanggalkan dengan berhati-hati tanpa merosakkan jubin sekeliling." },
        { step: "03", title: "Pembaikan Substrat", desc: "Pelekat lama dan serpihan dibersihkan; substrat dibaiki dan diratakan jika perlu." },
        { step: "04", title: "Pemasangan Gantian", desc: "Jubin gantian dipasang dengan pelekat segar dan diselaraskan dengan permukaan sekeliling." },
        { step: "05", title: "Grouting & Pengedap", desc: "Grout lama diganti dengan grout tahan kulat; kawasan basah ditutup silikon anti-kulat." },
      ],
      faqs: [
        { q: "Bagaimana saya tahu jubin saya berongga?", a: "Jubin berongga menghasilkan bunyi berongga apabila diketuk dengan objek keras seperti syiling atau pemegang alat. Tanda lain: grout retak di sekeliling jubin, jubin berderit apabila dipijak, atau habuk halus keluar dari grout." },
        { q: "Bolehkah jubin gantian dipadankan dengan jubin sedia ada?", a: "Jika anda masih menyimpan stok jubin yang sama, kami akan gunakan itu. Jika tidak, kami akan cuba mencari jubin yang paling hampir dari segi warna dan tekstur. Untuk padanan yang sempurna, simpan stok tambahan semasa pembelian awal." },
        { q: "Mengapa grout saya berkulat dan berubah warna?", a: "Grout simen berliang dan mudah menyerap lembapan, menjadikannya tempat tumbuh kulat di kawasan basah. Kami menggantikannya dengan grout epoksi atau grout tahan kulat yang kurang berliang, dan menutup sudut dengan silikon anti-kulat." },
        { q: "Berapa lama pembaikan jubin mengambil masa?", a: "Penggantian beberapa jubin berongga biasanya siap dalam satu hari, termasuk masa pengeringan pelekat. Kerja grout semula untuk kawasan yang lebih besar boleh mengambil masa 1–2 hari." },
      ],
      metaTitle: "Pembaikan Jubin & Grout Semula KL | Dari RM22/kaki²",
      metaDesc: "Baiki jubin berongga, retak & longgar di KL & Selangor. Ujian ketukan, substrat dibaiki, grout tahan kulat. Kemas & cepat. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "瓷砖修补与重新勾缝",
      tagline: "更换空鼓、开裂或松动的瓷砖，修补基层，并以防霉勾缝剂替换旧勾缝。",
      description:
        "空鼓、开裂或松动的瓷砖不仅难看，还可能绊脚并让水渗入基层。我们通过敲击测试找出空鼓砖，小心拆除而不伤及邻砖，修补基层后以新瓷砖胶重新铺贴。变黑、发霉或开裂的旧勾缝会被清除，换以颜色匹配的防霉勾缝剂。湿区阴角同步更换防霉硅胶。整个流程快速、干净，对日常生活影响极小。",
      highlights: [
        "敲击测试精准找出空鼓砖",
        "更换瓷砖并修补基层，新胶重贴",
        "清除旧勾缝，换防霉勾缝剂",
        "勾缝颜色与现有瓷砖匹配",
        "湿区阴角重打防霉硅胶",
      ],
      process: [
        { step: "01", title: "检测与评估", desc: "用敲击测试定位空鼓区域并评估损坏程度。" },
        { step: "02", title: "拆除瓷砖", desc: "小心拆除损坏瓷砖，不伤及邻砖。" },
        { step: "03", title: "基层修补", desc: "清除旧胶与碎屑，修补并找平基层。" },
        { step: "04", title: "铺贴新砖", desc: "以新瓷砖胶铺贴替换砖，与周边表面找齐。" },
        { step: "05", title: "勾缝与密封", desc: "换防霉勾缝剂，湿区阴角打防霉硅胶。" },
      ],
      faqs: [
        { q: "怎么知道瓷砖空鼓了？", a: "用硬币或工具柄敲击瓷砖：声音空洞即为空鼓。其他迹象包括瓷砖四周勾缝开裂、踩踏时有咯吱声，或勾缝中渗出细灰。" },
        { q: "替换砖能和现有瓷砖配得上吗？", a: "若您存有同款瓷砖，我们直接用。没有的话我们会尽量找颜色与纹理最接近的。想完美匹配，建议买砖时多留几箱库存。" },
        { q: "为什么勾缝会发霉变黑？", a: "水泥基勾缝剂多孔易吸潮，在湿区容易滋生霉菌。我们会换用低孔率的环氧或防霉勾缝剂，并在阴角打防霉硅胶。" },
        { q: "瓷砖修补需要多久？", a: "更换几块空鼓砖通常一天内完成，包括瓷砖胶养护时间。较大面积的重新勾缝约需 1–2 天。" },
      ],
      metaTitle: "吉隆坡与雪兰莪瓷砖修补与重新勾缝 | 每平方英尺RM22起",
      metaDesc: "吉隆坡与雪兰莪空鼓、开裂、松动瓷砖修补。敲击检测、基层修补、防霉勾缝剂。快速整洁。WhatsApp免费报价。",
    },
  },

  /* ── FLOORING ─────────────────────────────────────────────────────── */
  "flooring/spc-click-lock-flooring-install": {
    ms: {
      name: "Pemasangan Lantai SPC Click-Lock",
      tagline: "Pemasangan lantai SPC kalis air 100% seluruh rumah dengan sistem click-lock tanpa gam, underlay terbina dalam dan jaminan kerja 5 tahun.",
      description:
        "Lantai SPC (Stone Polymer Composite) ialah pilihan paling popular untuk rumah Malaysia kerana teras batu-plastiknya kalis air 100%, stabil dimensi dan tahan lama sehingga 15+ tahun. Kami membekalkan dan memasang jenama FloorEver, Quick-Step, Kronotex dan Audacity dengan sistem click-lock—tiada gam, tiada paku, tiada habuk pengisaran. Setiap projek bermula dengan ujian kelembapan subfloor; kandungan melebihi 3% memerlukan halangan wap 6-mil untuk mengelakkan cupping dan kulat. Subfloor yang tidak rata diratakan dengan sebatian self-levelling (toleransi 3mm atas 2m) sebelum papan dipasang baris demi baris dengan sambungan selang-seli dan jurang pengembangan 8–12mm pada semua dinding. Bingkai pintu diundercut untuk kemasan rata, dan skirting serta jalur peralihan dipasang untuk kemasan bilik-ke-bilik yang kemas. Harga dari RM14 setiap kaki persegi termasuk underlayment dan kemasan skirting standard.",
      highlights: [
        "Papan SPC kalis air 100% sesuai untuk dapur, bilik mandi dan rumah berkelembapan tinggi",
        "Sistem click-lock tanpa gam, tanpa paku dan tanpa habuk di tapak",
        "Underlayment dan halangan wap disertakan mengikut keputusan ujian kelembapan",
        "Jurang pengembangan 8–12mm, undercut bingkai pintu dan kemasan skirting profesional",
        "Jaminan kerja pemasangan 5 tahun dan jangka hayat lantai 15+ tahun",
      ],
      process: [
        { step: "01", title: "Ujian Kelembapan & Pemeriksaan", desc: "Kandungan lembapan subfloor diukur; melebihi 3% memerlukan halangan wap 6-mil untuk elak cupping dan kulat." },
        { step: "02", title: "Pemerataan Subfloor", desc: "Permukaan tidak rata diisi dengan sebatian self-levelling supaya memenuhi toleransi 3mm atas 2m." },
        { step: "03", title: "Pemasangan Underlayment", desc: "Underlayment IXPE atau EVA dibentangkan dengan sambungan bertape untuk redaman bunyi dan penebat haba." },
        { step: "04", title: "Pemasangan Papan Click-Lock", desc: "Papan dipasang baris demi baris dengan sambungan selang-seli dan diketuk menggunakan pull bar serta blok ketuk." },
        { step: "05", title: "Skirting & Peralihan", desc: "Skirting PVC atau sepadan dipasang dengan sudut mitred, dan T-mould atau reducer dipasang di laluan pintu." },
      ],
      faqs: [
        { q: "Apa bezanya SPC dengan laminate dan LVP?", a: "SPC mempunyai teras batu-plastik yang kalis air 100% dan sangat stabil; laminate berteras HDF yang tidak tahan air; LVP ialah PVC tulen yang kalis air dan lebih lembut di kaki. Kami mengesyorkan SPC untuk kegunaan seluruh rumah." },
        { q: "Bolehkah lantai SPC dipasang di atas jubin sedia ada?", a: "Ya, jika jubin sedia ada pepejal, rata dalam 3mm atas 2m dan bebas lippage. Kami menggunakan underlayment berkualiti untuk merentangi tekstur grout, menjimatkan kos perobohan dan masa pemasangan." },
        { q: "Berapa lama pemasangan untuk kondominium 1,000 kaki persegi?", a: "Biasanya 2 hingga 3 hari untuk SPC termasuk persediaan subfloor, underlayment dan skirting. Susun atur kompleks dengan banyak sudut atau potongan bilik mandi boleh mengambil 4 hingga 5 hari." },
        { q: "Adakah SPC benar-benar kalis air untuk dapur dan bilik mandi?", a: "Ya, teras SPC tidak menyerap air, jadi ia selamat untuk dapur dan bilik mandi. Pastikan jurang pengembangan dan skirting dipasang dengan betul supaya air tidak meresap ke bawah lantai." },
        { q: "Berapa harga pemasangan lantai SPC?", a: "Harga bermula RM14 setiap kaki persegi termasuk underlayment dan skirting standard. Kos akhir bergantung pada keluasan, keadaan subfloor dan kerumitan susun atur." },
      ],
      metaTitle: "Pemasangan Lantai SPC Click-Lock KL & Selangor | Dari RM14/kaki²",
      metaDesc: "Pasang lantai SPC kalis air 100% di KL & Selangor. FloorEver, Quick-Step, Kronotex. Click-lock tanpa gam, ujian kelembapan, skirting termasuk. Jaminan 5 tahun. WhatsApp percuma.",
    },
    zh: {
      name: "SPC 锁扣地板安装",
      tagline: "全屋铺设 100% 防水 SPC 锁扣地板，免胶免钉、内置垫层，附 5 年施工保修。",
      description:
        "SPC（石塑复合地板）是马来西亚家庭最受欢迎的地板选择，其石粉塑料芯材 100% 防水、尺寸稳定，使用寿命可达 15 年以上。我们供应并安装 FloorEver、Quick-Step、Kronotex 与 Audacity 等品牌，采用锁扣系统——免胶、免钉、现场无打磨粉尘。每个项目都先进行基层含水率测试；含水率超过 3% 需铺设 6-mil 防潮膜，防止日后起拱与发霉。不平的基层用自流平找平（2 米内 3mm 公差），然后逐排错缝安装地板，所有墙体处按规范预留 8–12mm 伸缩缝。门框下切处理保证收口平整，最后安装踢脚线与收边条，房间之间过渡干净利落。价格从 RM14/平方英尺起，含垫层与标准踢脚线收尾。",
      highlights: [
        "100% 防水 SPC，适合厨房、浴室与高湿度的马来西亚家庭",
        "锁扣系统免胶、免钉，现场无打磨或上漆粉尘",
        "按含水率测试结果配置垫层与防潮膜",
        "预留 8–12mm 伸缩缝、门框下切与专业踢脚线收口",
        "5 年施工保修，地板寿命 15 年以上",
      ],
      process: [
        { step: "01", title: "含水率测试与检查", desc: "测量基层含水率；超过 3% 铺设 6-mil 防潮膜，防止日后起拱与发霉。" },
        { step: "02", title: "基层找平", desc: "不平处施工自流平，达到 2 米内 3mm 的平整度要求。" },
        { step: "03", title: "垫层铺设", desc: "铺设 IXPE 或 EVA 泡沫垫层，接缝贴胶带，隔音并保温。" },
        { step: "04", title: "锁扣安装", desc: "逐排错缝安装，用回力钩与敲块敲合，不伤板边。" },
        { step: "05", title: "踢脚线与收边", desc: "安装 PVC 或配套踢脚线，转角斜切整齐，门口装 T 型条或高低扣。" },
      ],
      faqs: [
        { q: "SPC 和复合地板、乙烯基地板有什么区别？", a: "SPC 石粉塑料芯材 100% 防水且尺寸稳定；复合地板为 HDF 芯材、不防水；LVP 为纯 PVC、防水且脚感更软。全屋铺装我们建议用 SPC。" },
        { q: "可以在现有瓷砖上直接铺 SPC 吗？", a: "大多数情况可以：瓷砖需坚实无空鼓、2 米内平整度 3mm 以内且无高低差。我们会用优质垫层弥合砖缝纹理，省去拆除费用与时间。" },
        { q: "1,000 平方英尺的公寓铺 SPC 要多久？", a: "通常 2 到 3 天，含基层处理、垫层与踢脚线。转角多或带浴室缺口的复杂布局需要 4 到 5 天。" },
        { q: "SPC 真的能用于厨房和浴室吗？", a: "可以。SPC 芯材不吸水，适合厨房与浴室，但伸缩缝与踢脚线必须按规范安装，防止水渗入地板下方。" },
        { q: "SPC 安装怎么收费？", a: "每平方英尺 RM14 起，含垫层与标准踢脚线。最终价格取决于面积、基层状况与布局复杂程度。" },
      ],
      metaTitle: "吉隆坡与雪兰莪 SPC 锁扣地板安装 | 每平方英尺RM14起",
      metaDesc: "吉隆坡与雪兰莪 100% 防水 SPC 锁扣地板安装。FloorEver、Quick-Step、Kronotex。免胶免钉，含水率测试，含踢脚线。5年保修。WhatsApp免费报价。",
    },
  },
  "flooring/laminate-flooring-install": {
    ms: {
      name: "Pemasangan Lantai Laminate",
      tagline: "Pemasangan lantai laminate HDF rupa kayu yang mesra bajet dengan penarafan haus AC4–AC5, underlayment akustik dan kemasan profesional.",
      description:
        "Lantai laminate ialah pilihan mesra bajet untuk bilik tidur, ruang tamu dan pejabat di KL & Selangor. Teras HDF (high-density fibreboard) dengan lapisan cetakan rupa kayu dan penarafan haus AC4–AC5 memberikan rintangan calar yang sangat baik untuk trafik kediaman. Penting: laminate bukan kalis air, jadi ia hanya sesuai untuk ruang kering seperti bilik tidur dan ruang tamu. Kami memasang jenama seperti Kronotex, Quick-Step dan FloorEver dengan underlayment akustik IXPE atau EVA, jurang pengembangan 8–12mm pada semua dinding, undercut bingkai pintu dan skirting kemasan. Subfloor diperiksa dan diratakan dahulu dengan toleransi 3mm atas 2m. Harga bermula RM11 setiap kaki persegi termasuk underlayment; jangka hayat 10–20 tahun jika dikekalkan kering.",
      highlights: [
        "Laminate HDF dengan penarafan haus AC4–AC5 untuk trafik kediaman",
        "Paling mesra bajet antara tiga sistem lantai click-lock utama",
        "Underlayment akustik mengurangkan bunyi antara lantai",
        "Jurang pengembangan, undercut bingkai pintu dan skirting termasuk",
        "Sesuai untuk bilik tidur, ruang tamu dan ruang kering lain",
      ],
      process: [
        { step: "01", title: "Pemeriksaan Subfloor", desc: "Kerataan dan kelembapan subfloor diperiksa; masalah kecil dibaiki sebelum pemasangan bermula." },
        { step: "02", title: "Pemasangan Underlayment", desc: "Underlayment akustik IXPE atau EVA dibentangkan dengan sambungan bertape untuk redaman bunyi." },
        { step: "03", title: "Pemasangan Papan", desc: "Papan dipasang dengan sambungan selang-seli dan jurang pengembangan 8–12mm pada semua dinding." },
        { step: "04", title: "Undercut Bingkai Pintu", desc: "Bingkai pintu digergaji di bahagian bawah supaya papan meluncur masuk untuk kemasan rata." },
        { step: "05", title: "Skirting & Peralihan", desc: "Skirting dan jalur peralihan dipasang untuk menutup jurang pengembangan dengan kemas." },
      ],
      faqs: [
        { q: "Adakah lantai laminate kalis air?", a: "Tidak. Teras HDF mengembang jika terkena air berpanjangan. Laminate hanya sesuai untuk ruang kering seperti bilik tidur dan ruang tamu; untuk dapur dan bilik mandi kami mengesyorkan SPC atau LVP." },
        { q: "Apa itu penarafan haus AC4–AC5?", a: "Penarafan haus Eropah menunjukkan ketahanan lapisan permukaan: AC4 sesuai untuk trafik kediaman berat hingga komersial ringan, manakala AC5 untuk komersial. Kedua-duanya sangat tahan calar untuk kegunaan rumah." },
        { q: "Bolehkah laminate dipasang di atas jubin sedia ada?", a: "Ya, jika jubin pepejal dan rata. Underlayment berkualiti digunakan untuk merentangi tekstur grout, dan kami memastikan aras pintu masih sesuai." },
        { q: "Berapa lama pemasangan untuk 1,000 kaki persegi?", a: "2 hingga 3 hari termasuk persediaan subfloor, underlayment dan skirting. Kami menjadualkan sehari tambahan jika sebatian self-levelling perlu kering." },
        { q: "Berapa harga laminate berbanding SPC?", a: "Laminate bermula RM11 setiap kaki persegi, lebih murah daripada SPC (RM14) dan LVP (RM16). Kos akhir bergantung pada keluasan dan keadaan subfloor." },
      ],
      metaTitle: "Pemasangan Lantai Laminate KL & Selangor | Dari RM11/kaki²",
      metaDesc: "Pasang lantai laminate HDF di KL & Selangor. Kronotex, Quick-Step, FloorEver. AC4–AC5, underlayment akustik, skirting termasuk. Dari RM11/kaki². WhatsApp percuma.",
    },
    zh: {
      name: "复合地板安装",
      tagline: "经济实惠的仿木纹 HDF 复合地板安装，AC4–AC5 耐磨等级，含隔音垫层与专业收口。",
      description:
        "复合地板是吉隆坡与雪兰莪卧室、客厅与办公室的经济之选。HDF（高密度纤维板）芯材加上仿木纹印刷耐磨层，AC4–AC5 耐磨等级在家居环境下抗刮性能出色。请注意：复合地板不防水，只适合卧室、客厅等干燥空间。我们安装 Kronotex、Quick-Step 与 FloorEver 等品牌，配 IXPE 或 EVA 隔音垫层、墙体 8–12mm 伸缩缝、门框下切与踢脚线收尾。基层先检查并找平（2 米内 3mm 公差）。价格从 RM11/平方英尺起，含垫层；保持干燥可使用 10–20 年。",
      highlights: [
        "HDF 复合地板，AC4–AC5 耐磨等级适合家庭使用",
        "三大锁扣地板系统中价格最实惠",
        "隔音垫层降低楼层间噪音",
        "含伸缩缝、门框下切与踢脚线收口",
        "适合卧室、客厅等干燥空间",
      ],
      process: [
        { step: "01", title: "基层检查", desc: "检查基层平整度与含水率，小问题先修补再开工。" },
        { step: "02", title: "垫层铺设", desc: "铺设 IXPE 或 EVA 隔音垫层，接缝贴胶带。" },
        { step: "03", title: "地板安装", desc: "逐排错缝安装，墙体处预留 8–12mm 伸缩缝。" },
        { step: "04", title: "门框下切", desc: "锯切门框底部，让地板嵌入，收口平整。" },
        { step: "05", title: "踢脚线与收边", desc: "安装踢脚线与收边条，遮盖伸缩缝，过渡干净。" },
      ],
      faqs: [
        { q: "复合地板防水吗？", a: "不防水。HDF 芯材长期遇水会膨胀变形，只适合卧室、客厅等干燥空间；厨房与浴室建议使用 SPC 或 LVP。" },
        { q: "什么是 AC4–AC5 耐磨等级？", a: "欧洲耐磨等级表示表面层耐用度：AC4 适合重度家用至轻度商用，AC5 适合商用。两者在家居环境下都足够抗刮。" },
        { q: "可以在现有瓷砖上铺复合地板吗？", a: "可以，只要瓷砖坚实平整。我们会用优质垫层弥合砖缝纹理，并确认门底高度足够。" },
        { q: "1,000 平方英尺要铺多久？", a: "通常 2 到 3 天，含基层处理、垫层与踢脚线。如需自流平施工，会预留一天干燥时间。" },
        { q: "复合地板比 SPC 便宜多少？", a: "复合地板每平方英尺 RM11 起，比 SPC（RM14）与 LVP（RM16）更经济，最终价格取决于面积与基层状况。" },
      ],
      metaTitle: "吉隆坡与雪兰莪复合地板安装 | 每平方英尺RM11起",
      metaDesc: "吉隆坡与雪兰莪 HDF 复合地板安装。Kronotex、Quick-Step、FloorEver。AC4–AC5 耐磨，隔音垫层，含踢脚线。每平方英尺RM11起。WhatsApp免费报价。",
    },
  },
  "flooring/luxury-vinyl-plank-lvp-install": {
    ms: {
      name: "Pemasangan Papan Vinyl Mewah (LVP)",
      tagline: "Pemasangan LVP 100% kalis air dengan urat kayu realistik untuk dapur basah, bilik mandi dan kawasan lembap lain.",
      description:
        "Luxury Vinyl Plank (LVP) ialah papan PVC tulen dengan cetakan urat kayu yang realistik, 100% kalis air dan lebih lembut di kaki berbanding SPC atau laminate. Ia pilihan terbaik untuk dapur basah, bilik mandi, balkoni tertutup dan ruang bawah tanah. Kami memasang LVP jenis click-lock atau glue-down bergantung pada keadaan tapak, dengan ujian kelembapan subfloor, pemerataan jika perlu, underlayment untuk jenis click-lock dan jurang pengembangan yang betul. Setiap projek disiapkan dengan undercut bingkai pintu, skirting dan jalur peralihan untuk kemasan profesional. Harga bermula RM16 setiap kaki persegi; jangka hayat 15–25 tahun dengan penyelenggaraan minimum.",
      highlights: [
        "LVP 100% kalis air untuk dapur basah, bilik mandi dan besmen",
        "Cetakan urat kayu realistik dengan permukaan lebih lembut di kaki",
        "Pilihan sistem click-lock atau glue-down mengikut keadaan tapak",
        "Ujian kelembapan, undercut bingkai pintu dan skirting termasuk",
        "Jangka hayat 15–25 tahun dengan penyelenggaraan minimum",
      ],
      process: [
        { step: "01", title: "Penilaian Tapak", desc: "Kami menilai kelembapan dan kerataan subfloor, kemudian memilih sistem click-lock atau glue-down yang sesuai." },
        { step: "02", title: "Penyediaan Subfloor", desc: "Permukaan dibersihkan dan diratakan; retakan halus diisi untuk tapak pelekat yang sempurna." },
        { step: "03", title: "Pemasangan Papan", desc: "Papan dipasang dengan corak selang-seli; jenis click-lock diketuk dengan pull bar, jenis glue-down dilekatkan dengan pelekat penuh." },
        { step: "04", title: "Kemasan Tepi", desc: "Bingkai pintu diundercut dan jurang pengembangan disediakan pada semua dinding." },
        { step: "05", title: "Skirting & Peralihan", desc: "Skirting, T-mould dan reducer dipasang untuk peralihan bilik-ke-bilik yang kemas." },
      ],
      faqs: [
        { q: "Apa bezanya LVP dengan SPC?", a: "LVP ialah PVC tulen yang lebih lembut dan senyap di kaki, sesuai untuk kawasan basah dan bilik tidur. SPC berteras batu-plastik lebih tegar dan sesuai untuk seluruh rumah. Kedua-duanya kalis air 100%." },
        { q: "Bolehkah LVP dipasang di bilik mandi?", a: "Ya. LVP kalis air 100% dan kerap dipasang di bilik mandi serta dapur basah. Pastikan skirting dan silikon kedap air dipasang di tepi untuk perlindungan tambahan." },
        { q: "Adakah LVP tahan calar?", a: "Permukaan LVP mempunyai lapisan haus yang tahan calar untuk kegunaan rumah. Untuk mengelakkan calar dalam, gunakan pelapik pada kaki perabot dan elak menyeret barang berat." },
        { q: "Berapa lama pemasangan untuk satu rumah teres?", a: "Rumah teres 1,500–2,000 kaki persegi biasanya mengambil 3 hingga 5 hari termasuk penyediaan subfloor dan kemasan, bergantung pada kerumitan susun atur." },
        { q: "Kenapa LVP lebih mahal daripada laminate?", a: "LVP diperbuat daripada PVC kalis air sepenuhnya dengan lapisan haus lebih tebal, manakala laminate berteras HDF yang tidak tahan air. Kos RM16/kaki persegi mencerminkan ketahanan dan fleksibiliti penggunaannya." },
      ],
      metaTitle: "Pemasangan LVP (Vinyl Mewah) KL & Selangor | Dari RM16/kaki²",
      metaDesc: "Pasang LVP 100% kalis air di KL & Selangor. Urat kayu realistik, sesuai untuk dapur basah & bilik mandi. Click-lock atau glue-down. Dari RM16/kaki². WhatsApp percuma.",
    },
    zh: {
      name: "豪华乙烯基地板 (LVP) 安装",
      tagline: "100% 防水 LVP 地板安装，木纹逼真，适合湿厨房、浴室等潮湿区域。",
      description:
        "豪华乙烯基地板（LVP）由纯 PVC 制成，木纹印刷逼真，100% 防水，脚感比 SPC 与复合地板更柔软舒适。它是湿厨房、浴室、封闭阳台与地下室的最佳选择。我们根据现场条件安装锁扣式或胶粘式 LVP，包含基层含水率测试、必要时的找平、锁扣型的垫层铺设与规范的伸缩缝处理。每个项目均含门框下切、踢脚线与收边条安装。价格从 RM16/平方英尺起；维护成本低，使用寿命 15–25 年。",
      highlights: [
        "100% 防水 LVP，适合湿厨房、浴室与地下室",
        "木纹逼真，脚感柔软，比瓷砖安静温暖",
        "锁扣式或胶粘式可选，按现场条件决定",
        "含含水率测试、门框下切与踢脚线收口",
        "寿命 15–25 年，日常维护简单",
      ],
      process: [
        { step: "01", title: "现场评估", desc: "检查基层含水率与平整度，确定锁扣式或胶粘式方案。" },
        { step: "02", title: "基层处理", desc: "清洁并找平基层，细裂缝填补，确保胶粘面完美。" },
        { step: "03", title: "地板铺设", desc: "错缝铺设；锁扣式用回力钩敲合，胶粘式满刮胶粘贴。" },
        { step: "04", title: "边缘处理", desc: "门框下切，墙体处预留伸缩缝。" },
        { step: "05", title: "踢脚线与收边", desc: "安装踢脚线、T 型条与高低扣，房间过渡干净。" },
      ],
      faqs: [
        { q: "LVP 和 SPC 有什么区别？", a: "LVP 为纯 PVC，脚感更软更安静，适合浴室、湿厨房与卧室；SPC 石塑芯材更坚硬，适合全屋铺装。两者都 100% 防水。" },
        { q: "LVP 可以铺在浴室吗？", a: "可以。LVP 100% 防水，常用于浴室与湿厨房。建议在边缘加打防水硅胶，提供进一步保护。" },
        { q: "LVP 耐刮吗？", a: "LVP 表面有耐磨层，家用抗刮表现良好。避免拖拽重物，家具脚加保护垫可防止深划痕。" },
        { q: "铺一整套排屋要多久？", a: "1,500–2,000 平方英尺的排屋通常 3 到 5 天，含基层处理与收尾，具体视布局复杂程度而定。" },
        { q: "为什么 LVP 比复合地板贵？", a: "LVP 由纯 PVC 制成、完全防水且耐磨层更厚；复合地板是 HDF 芯材、不防水。RM16/平方英尺的价格反映其耐用性与使用灵活性。" },
      ],
      metaTitle: "吉隆坡与雪兰莪 LVP 豪华乙烯基地板安装 | 每平方英尺RM16起",
      metaDesc: "吉隆坡与雪兰莪 100% 防水 LVP 地板安装。木纹逼真，适合湿厨房与浴室。锁扣式或胶粘式。每平方英尺RM16起。WhatsApp免费报价。",
    },
  },
  "flooring/skirting-and-transition-strip-fitting": {
    ms: {
      name: "Pemasangan Skirting & Jalur Peralihan",
      tagline: "Pemasangan skirting PVC, MDF atau aluminium serta T-mould, reducer dan end-cap untuk kemasan lantai bilik-ke-bilik yang kemas.",
      description:
        "Skirting dan jalur peralihan ialah kemasan akhir yang menjadikan pemasangan lantai kelihatan profesional. Skirting menutup jurang pengembangan 8–12mm antara lantai dan dinding, melindungi dinding daripada hentakan penyapu dan kemop, serta menyembunyikan kabel kecil. Kami memasang skirting PVC, MDF atau aluminium dengan sudut mitred yang kemas, serta T-mould untuk sambungan lantai sama tinggi, reducer untuk lantai berbeza aras (contohnya lantai ke jubin) dan end-cap untuk tepi tangga atau bukaan. Kerja termasuk memotong bingkai pintu supaya skirting meluncur masuk dengan kemas. Harga bermula RM8 setiap kaki linier; skirting boleh dipadankan dengan warna lantai atau dinding anda.",
      highlights: [
        "Skirting PVC, MDF atau aluminium dengan sudut mitred kemas",
        "T-mould, reducer dan end-cap untuk semua jenis peralihan",
        "Menutup jurang pengembangan 8–12mm dengan kemas",
        "Boleh dipadankan dengan warna lantai atau dinding",
        "Termasuk pemotongan bingkai pintu untuk kemasan rata",
      ],
      process: [
        { step: "01", title: "Pengukuran", desc: "Kami mengukur perimeter bilik dan mengenal pasti semua titik peralihan antara jenis lantai." },
        { step: "02", title: "Pemilihan Bahan", desc: "Skirting PVC, MDF atau aluminium serta jenis peralihan dipilih mengikut lantai dan bajet anda." },
        { step: "03", title: "Pemotongan & Penyediaan", desc: "Semua bahagian dipotong dengan sudut mitred 45° di penjuru dan bingkai pintu diundercut." },
        { step: "04", title: "Pemasangan", desc: "Skirting dipasang dengan pelekat atau skru tersembunyi; T-mould, reducer dan end-cap dipasang di lokasi peralihan." },
        { step: "05", title: "Pemeriksaan & Kemasan", desc: "Semua sambungan diperiksa, sudut ditutup rapat dan kawasan dibersihkan." },
      ],
      faqs: [
        { q: "Kenapa skirting perlu dipasang selepas lantai baru?", a: "Skirting menutup jurang pengembangan yang wajib ditinggalkan pada dinding supaya lantai boleh mengembang dan mengecut. Tanpa skirting, jurang itu kelihatan dan mengumpul habuk." },
        { q: "Apa beza T-mould dan reducer?", a: "T-mould digunakan untuk menyambung dua lantai sama tinggi, manakala reducer digunakan apabila aras berbeza—contohnya lantai ke jubin—supaya peralihan selamat dan kemas." },
        { q: "Bolehkah skirting lama dikekalkan?", a: "Boleh, jika ia dalam keadaan baik dan sepadan. Kami akan menilai di tapak; selalunya skirting lama perlu ditanggalkan kerana aras lantai baru berbeza." },
        { q: "Berapa harga pemasangan skirting?", a: "Harga bermula RM8 setiap kaki linier termasuk bahan standard dan pemasangan. Skirting aluminium atau reka bentuk khas dikenakan kos tambahan." },
        { q: "Bolehkah skirting dipadankan dengan warna lantai?", a: "Ya, kami boleh memadankan warna skirting dengan lantai, dinding atau kontras mengikut citarasa anda. Contoh warna boleh disemak sebelum pemasangan." },
      ],
      metaTitle: "Pemasangan Skirting & Jalur Peralihan KL & Selangor | Dari RM8/kaki",
      metaDesc: "Pasang skirting PVC, MDF, aluminium & jalur peralihan di KL & Selangor. T-mould, reducer, end-cap. Sudut mitred kemas. Dari RM8/kaki linier. WhatsApp percuma.",
    },
    zh: {
      name: "踢脚线与收边条安装",
      tagline: "PVC、MDF 或铝合金踢脚线及 T 型条、高低扣、收边条安装，房间收口干净利落。",
      description:
        "踢脚线与收边条是让地板安装呈现专业效果的最后一道工序。踢脚线遮盖墙体处必须预留的 8–12mm 伸缩缝，保护墙脚免受扫把与拖把碰撞，还能收纳细小线缆。我们安装 PVC、MDF 或铝合金踢脚线，阴阳角斜切整齐；同高度的两块地板用 T 型条连接，不同高度（如地板接瓷砖）用高低扣过渡，楼梯口或门口用收边条收口。施工含门框底部锯切，让踢脚线嵌入收口。价格从 RM8/延英尺起，颜色可与地板或墙面搭配。",
      highlights: [
        "PVC、MDF 或铝合金踢脚线，阴阳角斜切整齐",
        "T 型条、高低扣与收边条覆盖各类过渡",
        "整齐遮盖 8–12mm 伸缩缝",
        "颜色可与地板或墙面搭配",
        "含门框锯切，收口平整",
      ],
      process: [
        { step: "01", title: "测量", desc: "测量房间周长，并确认所有不同地面材料之间的过渡位置。" },
        { step: "02", title: "选材", desc: "根据地板类型与预算选择 PVC、MDF 或铝合金踢脚线及过渡配件。" },
        { step: "03", title: "切割与准备", desc: "转角按 45° 斜切，门框底部锯切留出嵌入位。" },
        { step: "04", title: "安装", desc: "踢脚线用胶粘或隐藏螺丝固定；T 型条、高低扣与收边条在过渡处安装。" },
        { step: "05", title: "检查与收尾", desc: "检查所有接缝与转角，清理现场。" },
      ],
      faqs: [
        { q: "为什么铺完地板要装踢脚线？", a: "踢脚线遮盖墙体处必须预留的伸缩缝，让地板可以热胀冷缩；不装的话缝隙裸露、容易积灰。" },
        { q: "T 型条和高低扣有什么区别？", a: "T 型条用于连接两块高度相同的地板；高低扣用于高度不同的过渡，比如地板接瓷砖，行走更安全、收口更美观。" },
        { q: "旧踢脚线可以保留吗？", a: "状态好且高度合适时可以保留，但新地板通常会改变地面高度，多数情况旧踢脚线需要拆除重装。我们会在现场评估。" },
        { q: "装踢脚线怎么收费？", a: "每延英尺 RM8 起，含标准材料与安装。铝合金或特别造型需另计。" },
        { q: "踢脚线颜色可以和地板搭配吗？", a: "可以，踢脚线颜色可搭配地板、墙面或做对比色。安装前可先看色样确认。" },
      ],
      metaTitle: "吉隆坡与雪兰莪踢脚线与收边条安装 | 每延英尺RM8起",
      metaDesc: "吉隆坡与雪兰莪踢脚线及收边条安装。PVC、MDF、铝合金，T 型条、高低扣、收边条，斜切整齐。每延英尺RM8起。WhatsApp免费报价。",
    },
  },

  /* ── KITCHEN CABINET ─────────────────────────────────────────────────── */
  "kitchen-cabinet/modular-kitchen-cabinet-10ft-l-shape": {
    ms: {
      name: "Kabinet Dapur Modular (L-shape 10 kaki)",
      tagline: "Kabinet dapur modular L-shape 10 kaki dengan rangka melamin 18mm, perkakasan Häfele atau Blum tutup lembut, pintu laminate/akrilik dan reka bentuk 3D—siap dipasang dalam 14–21 hari.",
      description:
        "Pakej kabinet dapur modular L-shape 10 kaki kami ialah pilihan paling popular untuk rumah teres dan kondominium di KL & Selangor. Setiap unit dibina dengan rangka melamin 18mm tahan lembap, pintu dalam kemasan laminate tekanan tinggi, akrilik berkilat atau cat semburan, serta perkakasan Häfele atau Blum termasuk engsel tutup lembut dan rel laci sambungan penuh. Setiap projek bermula dengan ukuran laser di tapak dan reka bentuk 3D yang membolehkan anda melihat susun atur, kedudukan perkakas dan ruang storan sebelum pembuatan bermula. Kabinet modular menawarkan kualiti konsisten, masa tunggu lebih pantas (14–21 hari) dan harga yang jelas. Termasuk penyelarasan titik paip dan elektrik serta pemeriksaan penjajaran akhir sebelum serahan.",
      highlights: [
        "Rangka melamin 18mm tahan lembap dengan potongan CNC untuk ketepatan dan kualiti konsisten",
        "Perkakasan Häfele atau Blum—engsel tutup lembut dan rel laci sambungan penuh",
        "Pintu dalam kemasan laminate, akrilik berkilat atau cat semburan mengikut citarasa anda",
        "Reka bentuk 3D dan sebut harga terperinci sebelum sebarang pembuatan bermula",
        "Masa tunggu pantas 14–21 hari dan jaminan struktur kabinet 5 tahun",
      ],
      process: [
        { step: "01", title: "Ukuran & Reka Bentuk", desc: "Kami mengukur dapur dengan laser, menangkap keperluan masakan dan senarai perkakas anda, lalu menyediakan reka bentuk 3D dan sebut harga terperinci." },
        { step: "02", title: "Pelulusan & Pemilihan Bahan", desc: "Anda memilih kemasan pintu, warna dan perkakasan; kami membekukan reka bentuk sebelum memesan bahan." },
        { step: "03", title: "Pembuatan Bengkel", desc: "Rangka dan pintu dipotong dengan CNC, di-edge-band dan dikawal kualiti di bengkel selama 14–21 hari." },
        { step: "04", title: "Penyediaan Tapak", desc: "Kabinet lama ditanggalkan jika perlu, dan titik paip serta elektrik diselaraskan dengan susun atur baharu." },
        { step: "05", title: "Pemasangan & Serahan", desc: "Kabinet diratakan, disauh dan diuji fungsi—engsel, laci dan pintu—sebelum pemeriksaan bersama dan pengaktifan jaminan." },
      ],
      faqs: [
        { q: "Berapa lama masa untuk siap kabinet modular 10 kaki?", a: "Pembuatan di bengkel mengambil masa 14–21 hari, diikuti pemasangan 1–2 hari di tapak. Masa keseluruhan biasanya 3–5 minggu dari tarikh reka bentuk diluluskan." },
        { q: "Apakah perkakasan yang disertakan?", a: "Kami menggunakan perkakasan Häfele atau Blum, termasuk engsel tutup lembut dan rel laci sambungan penuh. Semua kabinet disertakan jaminan struktur 5 tahun." },
        { q: "Bolehkah saya memilih kemasan pintu?", a: "Ya. Anda boleh memilih kemasan laminate tekanan tinggi, akrilik berkilat atau cat semburan. Kami menunjukkan sampel fizikal semasa konsultasi reka bentuk 3D." },
        { q: "Adakah penyelarasan titik paip dan elektrik termasuk?", a: "Kami menyelaraskan kedudukan titik paip dan elektrik dengan susun atur baharu. Kerja pendawaian dan paip sebenar diselaraskan dengan juruelektrik dan tukang paip kami." },
      ],
      metaTitle: "Kabinet Dapur Modular L-Shape 10ft KL | Dari RM7,500",
      metaDesc: "Kabinet dapur modular L-shape 10 kaki di KL & Selangor. Rangka melamin 18mm, perkakasan Häfele/Blum, reka bentuk 3D, siap 14–21 hari. Jaminan struktur 5 tahun. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "模块化厨房橱柜（10 英尺 L 型）",
      tagline: "10 英尺 L 型模块化厨房橱柜，18mm 三聚氰胺柜体、Häfele/Blum 缓冲五金、防火板/亚克力门板，含 3D 设计，14–21 天交付。",
      description:
        "我们的 10 英尺 L 型模块化厨房橱柜套餐是吉隆坡与雪兰莪排屋和公寓最热门的选择。每个柜体采用 18mm 防潮三聚氰胺柜体，门板可选高压防火板、亮面亚克力或喷漆饰面，并配 Häfele 或 Blum 五金——含缓冲铰链与全拉出抽屉滑轨。每个项目都从现场激光测量与 3D 设计开始，让您在投产前直观看到布局、电器位置与收纳规划。模块化橱柜品质稳定、交付更快（14–21 天），价格清晰透明。含水电点位协调与交接前的最终调校检查。",
      highlights: [
        "18mm 防潮三聚氰胺柜体，CNC 切割尺寸精准、品质稳定",
        "Häfele 或 Blum 五金——缓冲铰链与全拉出抽屉滑轨",
        "门板可选高压防火板、亮面亚克力或喷漆饰面",
        "投产前提供 3D 设计与逐项报价",
        "14–21 天快速交付，柜体结构 5 年保修",
      ],
      process: [
        { step: "01", title: "测量与设计", desc: "激光测量厨房，记录烹饪习惯与电器清单，出具 3D 设计与逐项报价。" },
        { step: "02", title: "确认与选材", desc: "您选定门板饰面、颜色与五金，我们在下单生产前冻结设计。" },
        { step: "03", title: "工厂制作", desc: "CNC 切割柜体与门板，封边并质检，工期 14–21 天。" },
        { step: "04", title: "现场准备", desc: "按需拆除旧橱柜，并根据新布局协调水电点位。" },
        { step: "05", title: "安装与交付", desc: "调平、固定柜体并测试铰链、抽屉与门板，验收后激活保修。" },
      ],
      faqs: [
        { q: "10 英尺模块化橱柜多久能完工？", a: "工厂制作需 14–21 天，现场安装 1–2 天。从设计确认起算，整体通常 3–5 周。" },
        { q: "包含哪些五金？", a: "我们使用 Häfele 或 Blum 五金，含缓冲铰链与全拉出抽屉滑轨，所有柜体享 5 年结构保修。" },
        { q: "门板饰面可以自选吗？", a: "可以。可选高压防火板、亮面亚克力或喷漆饰面，3D 设计咨询时提供实物样板。" },
        { q: "包含水电点位协调吗？", a: "我们会按新布局协调水电点位位置，实际水电施工由我们的电工与水管工完成。" },
      ],
      metaTitle: "吉隆坡10英尺L型模块化橱柜 | RM7,500起",
      metaDesc: "吉隆坡与雪兰莪 10 英尺 L 型模块化厨房橱柜。18mm 柜体、Häfele/Blum 五金、3D 设计、14–21 天交付、5 年结构保修。WhatsApp免费报价。",
    },
  },
  "kitchen-cabinet/custom-plywood-kitchen": {
    ms: {
      name: "Dapur Papan Lapis Kustom",
      tagline: "Kabinet dapur papan lapis bina-mengikut-ukuran dengan perkakasan tutup lembut, pintu kustom dan unit pantry penuh tinggi untuk susun atur luar biasa dan storan maksimum.",
      description:
        "Kabinet papan lapis kustom ialah penyelesaian untuk dapur yang mempunyai susun atur luar biasa, ruang awkward atau keperluan storan maksimum. Tidak seperti kabinet modular bersaiz standard, setiap panel papan lapis dipotong dan dibina mengikut ukuran sebenar dapur anda di bengkel KL kami. Kami menggunakan papan lapis berkualiti (bukan MDF murah) dengan para 25mm tebal untuk daya tahan, kemasan laminate tekanan tinggi atau cat semburan, serta perkakasan Häfele atau Blum. Pilihan termasuk unit pantry penuh tinggi, laci khas untuk periuk dan peralatan, serta rak tersembunyi untuk perkakas kecil. Sesuai untuk pemilik yang maharkan dapur benar-benar unik dan direka di sekitar tabiat masakan mereka. Masa tunggu pembuatan 21–28 hari.",
      highlights: [
        "Papan lapis berkualiti (bukan MDF murah) dengan para 25mm tebal untuk daya tahan",
        "Bina-mengikut-ukuran untuk susun atur luar biasa dan ruang awkward",
        "Unit pantry penuh tinggi serta laci khas untuk periuk dan peralatan",
        "Perkakasan Häfele atau Blum dengan kemasan laminate atau cat semburan pilihan",
        "Masa tunggu pembuatan 21–28 hari dan jaminan struktur kabinet 5 tahun",
      ],
      process: [
        { step: "01", title: "Ukuran & Brief", desc: "Kami mengukur setiap sudut dapur dengan laser, menangkap tabiat masakan dan senarai perkakas anda, lalu melukis susun atur kustom." },
        { step: "02", title: "Reka Bentuk 3D & Sebut Harga", desc: "Anda menerima render 3D dengan harga terperinci—setiap panel, rak, laci dan perkakasan disenaraikan. Kami semak semula sehingga anda berpuas hati." },
        { step: "03", title: "Pembuatan Bengkel", desc: "Panel papan lapis dipotong, dibingkai dan dipra-pasang di bengkel selama 21–28 hari menggunakan CNC dan kerja kayu tradisional." },
        { step: "04", title: "Penyediaan Tapak", desc: "Kabinet lama ditanggalkan dan titik paip serta elektrik diselaraskan dengan reka bentuk baharu." },
        { step: "05", title: "Pemasangan & Serahan", desc: "Setiap unit diratakan, disauh dan diuji; laci dan pintu dilaraskan sehingga licin sebelum pemeriksaan bersama." },
      ],
      faqs: [
        { q: "Kenapa pilih papan lapis kustom berbanding modular?", a: "Papan lapis kustom sesuai untuk susun atur luar biasa, ruang awkward atau keperluan storan maksimum. Setiap panel dibina mengikut ukuran sebenar dapur anda, bukan saiz standard." },
        { q: "Berapa lama masa pembuatan?", a: "Pembuatan di bengkel mengambil masa 21–28 hari kerana setiap panel dipotong dan dibina mengikut ukuran, diikuti pemasangan 1–3 hari di tapak." },
        { q: "Adakah anda menggunakan MDF murah?", a: "Tidak. Kami menggunakan papan lapis berkualiti dengan para 25mm tebal untuk daya tahan, bukan MDF murah yang mudah mengembang apabila lembap." },
        { q: "Bolehkah saya termasuk unit pantry penuh tinggi?", a: "Ya. Kami kerap memasukkan unit pantry penuh tinggi, laci khas periuk dan rak tersembunyi untuk memaksimumkan storan mengikut keperluan anda." },
      ],
      metaTitle: "Kabinet Dapur Papan Lapis Kustom KL | Dari RM11,000",
      metaDesc: "Kabinet dapur papan lapis bina-mengikut-ukuran di KL & Selangor. Para 25mm, unit pantry penuh tinggi, perkakasan Häfele/Blum, siap 21–28 hari. Jaminan 5 tahun. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "定制胶合板厨房",
      tagline: "按尺寸打造的胶合板厨房橱柜，配缓冲五金、定制门板与通顶 pantry 柜，适合异形布局与最大化收纳。",
      description:
        "胶合板定制橱柜专为布局不规则、空间尴尬或需要最大化收纳的厨房而设。与标准尺寸的模块化橱柜不同，每块胶合板都在我们吉隆坡工厂按您厨房的真实尺寸切割打造。我们使用优质胶合板（非廉价 MDF），25mm 加厚层板确保耐用，饰面可选高压防火板或喷漆，五金为 Häfele 或 Blum。可选通顶 pantry 柜、专用锅具抽屉以及小电器隐藏层架。适合追求真正独一无二、围绕自身烹饪习惯设计厨房的业主。工厂工期 21–28 天。",
      highlights: [
        "优质胶合板（非廉价 MDF），25mm 加厚层板更耐用",
        "按尺寸打造，适配异形布局与尴尬空间",
        "通顶 pantry 柜与专用锅具抽屉",
        "Häfele 或 Blum 五金，防火板或喷漆饰面可选",
        "工厂工期 21–28 天，柜体结构 5 年保修",
      ],
      process: [
        { step: "01", title: "测量与需求", desc: "激光测量每个角落，记录烹饪习惯与电器清单，绘制定制布局。" },
        { step: "02", title: "3D 设计与报价", desc: "提供 3D 渲染与逐项报价——每块层板、抽屉、配件都列明，修改至满意。" },
        { step: "03", title: "工厂制作", desc: "胶合板切割、组框并预装，工期 21–28 天，CNC 与传统木工结合。" },
        { step: "04", title: "现场准备", desc: "拆除旧橱柜，并按新设计协调水电点位。" },
        { step: "05", title: "安装与交付", desc: "调平固定并测试，抽屉与门板调校顺滑后联合验收。" },
      ],
      faqs: [
        { q: "为什么要选胶合板定制而不是模块化？", a: "胶合板定制适合异形布局、尴尬空间或需要最大化收纳的厨房。每块板材都按厨房真实尺寸打造，而非标准尺寸。" },
        { q: "制作需要多久？", a: "工厂制作需 21–28 天，因为每块板材都按尺寸切割打造，之后现场安装 1–3 天。" },
        { q: "你们用廉价 MDF 吗？", a: "不会。我们使用优质胶合板配 25mm 加厚层板以确保耐用，而非受潮易膨胀的廉价 MDF。" },
        { q: "可以包含通顶 pantry 柜吗？", a: "可以。我们通常配置通顶 pantry 柜、专用锅具抽屉与隐藏层架，按需最大化收纳。" },
      ],
      metaTitle: "吉隆坡定制胶合板厨房橱柜 | RM11,000起",
      metaDesc: "吉隆坡与雪兰莪按尺寸打造的胶合板厨房。25mm 层板、通顶 pantry 柜、Häfele/Blum 五金、21–28 天交付、5 年保修。WhatsApp免费报价。",
    },
  },
  "kitchen-cabinet/quartz-granite-countertop": {
    ms: {
      name: "Permukaan Kaunter Kuarza / Granit",
      tagline: "Permukaan kaunter kuarza kejuruteraan (Caesarstone, Silestone) atau granit tempatan dengan potongan singki bawah-duduk, sambungan lancar dan kemasan profesional.",
      description:
        "Permukaan kaunter ialah permukaan paling banyak digunakan di dapur, jadi kualiti dan ketahanan adalah penting. Kami membekalkan dan memasang kuarza kejuruteraan daripada jenama seperti Caesarstone dan Silestone—tahan calar, tahan kotoran dan tidak berliang—serta granit tempatan yang kekal menjadi kegemaran Malaysia kerana rupa semula jadi dan rintangan haba. Setiap projek dimulakan dengan templating selepas kabinet dipasang, supaya ukuran tepat termasuk potongan singki bawah-duduk, soket dapur dan tepi pilihan anda (contohnya tepi mitred atau bullnose). Sambungan diratakan dengan teliti untuk rupa yang licin, dan permukaan diserahkan siap dipasang. Pilihan lain termasuk solid surface (Corian) untuk sambungan lancar sepenuhnya serta laminate tekanan tinggi untuk bajet lebih rendah.",
      highlights: [
        "Kuarza kejuruteraan Caesarstone dan Silestone—tahan calar, tahan kotoran, tidak berliang",
        "Granit tempatan dengan rupa semula jadi unik dan rintangan haba",
        "Templating selepas pemasangan kabinet untuk ukuran yang tepat",
        "Potongan singki bawah-duduk, soket dapur dan tepi mitred atau bullnose pilihan",
        "Sambungan lancar yang diratakan dengan teliti—rupa mewah dan kemas",
      ],
      process: [
        { step: "01", title: "Pemilihan Slab", desc: "Kami membantu anda memilih slab kuarza atau granit mengikut warna, corak dan bajet, dengan sampel fizikal." },
        { step: "02", title: "Pemasangan Kabinet", desc: "Kabinet dipasang dan diratakan dahulu, kerana templating kaunter bergantung pada aras akhir kabinet." },
        { step: "03", title: "Templating", desc: "Kami membuat templat tepat di tapak, termasuk potongan singki, soket dan lengkung tepi pilihan anda." },
        { step: "04", title: "Pemotongan Kilang", desc: "Slab dipotong dan digilap di kilang mengikut templat, dengan potongan singki bawah-duduk yang tepat." },
        { step: "05", title: "Pemasangan & Serahan", desc: "Kaunter dipasang, sambungan diratakan, singki disambung dan permukaan diserahkan siap digunakan." },
      ],
      faqs: [
        { q: "Kuarza atau granit—yang mana lebih baik?", a: "Kuarza tidak berliang, tahan calar dan tidak perlu disekat, menjadikannya sangat sesuai untuk dapur. Granit mempunyai rupa semula jadi unik dan tahan haba, tetapi perlu disekat secara berkala. Kami menasihati berdasarkan gaya hidup dan bajet anda." },
        { q: "Berapa harga kaunter kuarza atau granit?", a: "Harga bermula dari RM220 setiap kaki linier, bergantung pada jenama kuarza, jenis granit, kerumitan potongan dan jenis tepi. Sebut harga tepat diberikan selepas templating." },
        { q: "Bilakah kaunter dipasang selepas kabinet?", a: "Kaunter ditemplat selepas kabinet siap dipasang, dipotong di kilang dalam 5–7 hari, kemudian dipasang. Jumlah masa tambahan kira-kira 1–2 minggu selepas kabinet siap." },
        { q: "Adakah potongan singki termasuk?", a: "Ya. Kami menyediakan potongan singki bawah-duduk (undermount) yang tepat mengikut model singki anda. Soket dapur dan tepi khas juga termasuk dalam templat." },
      ],
      metaTitle: "Permukaan Kaunter Kuarza & Granit KL | Dari RM220/kaki",
      metaDesc: "Permukaan kaunter kuarza (Caesarstone, Silestone) & granit di KL & Selangor. Potongan singki bawah-duduk, sambungan lancar, templating tepat. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "石英石 / 花岗岩台面",
      tagline: "人造石英石（Caesarstone、Silestone）或本地花岗岩台面，台下盆开孔、无缝拼接、专业安装。",
      description:
        "台面是厨房使用最频繁的表面，品质与耐用至关重要。我们供应并安装 Caesarstone、Silestone 等人造石英石——耐刮、耐污、无孔隙——以及马来西亚长盛不衰的本地花岗岩，纹理自然且耐高温。每个项目都在柜体安装后进行模板测量，确保尺寸精准，含台下盆开孔、灶具开孔以及您选择的边型（如斜拼边或圆弧边）。接缝细致找平，表面光洁，一次安装到位。也可选实体面材（Corian）实现完全无缝拼接，以及高压防火板以控制预算。",
      highlights: [
        "Caesarstone、Silestone 人造石英石——耐刮、耐污、无孔隙",
        "本地花岗岩，天然纹理与耐高温性能",
        "柜体安装后现场模板测量，尺寸精准",
        "台下盆开孔、灶具开孔、斜拼边或圆弧边可选",
        "接缝细致找平——奢华整洁的整体观感",
      ],
      process: [
        { step: "01", title: "选板", desc: "根据颜色、纹路与预算协助您挑选石英或花岗岩板材，提供实物样板。" },
        { step: "02", title: "柜体安装", desc: "先安装并调平柜体，因为台面模板需以柜体最终高度为准。" },
        { step: "03", title: "模板测量", desc: "现场精准制模，含台下盆开孔、灶具开孔及所选边型。" },
        { step: "04", title: "工厂切割", desc: "按模板在工厂切割并抛光板材，台下盆开孔精准。" },
        { step: "05", title: "安装与交付", desc: "安装台面、找平接缝、连接水槽，交付即可使用。" },
      ],
      faqs: [
        { q: "石英和花岗岩哪个更好？", a: "石英无孔隙、耐刮且无需做防护，非常适合厨房。花岗岩纹理独特且耐高温，但需定期做防护。我们会根据您的生活方式与预算给出建议。" },
        { q: "石英或花岗岩台面怎么收费？", a: "从每延英尺 RM220 起，价格取决于石英品牌、花岗岩种类、切割复杂度与边型。模板测量后提供准确报价。" },
        { q: "柜体装完多久能装台面？", a: "柜体安装完成后现场制模，工厂切割 5–7 天，再行安装。整体在柜体完工后约再需 1–2 周。" },
        { q: "包含水槽开孔吗？", a: "包含。我们按您的水槽型号精准开台下盆孔位，灶具开孔与特殊边型也一并计入模板。" },
      ],
      metaTitle: "吉隆坡石英与花岗岩台面 | 每延英尺RM220起",
      metaDesc: "吉隆坡与雪兰莪石英（Caesarstone、Silestone）与花岗岩台面。台下盆开孔、无缝拼接、精准制模。WhatsApp免费报价。",
    },
  },
  "kitchen-cabinet/kitchen-makeover-doors-and-hardware-only": {
    ms: {
      name: "Makeover Dapur (Pintu & Perkakasan Sahaja)",
      tagline: "Segarkan kabinet dapur sedia ada dengan menukar pintu, muka laci, pemegang, engsel dan rel—tanpa membina rangka baharu, jimat dan pantas.",
      description:
        "Jika rangka kabinet dapur anda masih kukuh tetapi pintu sudah lusuh atau perkakasan sudah haus, makeover pintu dan perkakasan sahaja ialah penyelesaian paling menjimatkan. Kami menanggalkan pintu dan muka laci lama, menggantikannya dengan pintu baharu dalam kemasan laminate, akrilik atau cat semburan, serta menukar engsel kepada versi tutup lembut Häfele atau Blum dan rel laci kepada sambungan penuh. Pemegang dan knob juga dikemas kini untuk rupa yang segar. Kerja ini mengelakkan kos dan gangguan membina rangka baharu, dan kebanyakan projek siap dalam 1–3 hari. Sesuai untuk pemilik yang mahu penampilan baharu sebelum menjual atau menyewakan, atau sekadar mengemas kini dapur tanpa pengubahsuaian penuh.",
      highlights: [
        "Menggantikan pintu, muka laci, pemegang, engsel dan rel sahaja—bukan rangka",
        "Rangka sedia ada kekal—menjimatkan kos dan gangguan pengubahsuaian penuh",
        "Engsel tutup lembut Häfele/Blum dan rel laci sambungan penuh",
        "Pintu baharu dalam kemasan laminate, akrilik atau cat semburan",
        "Kebanyakan projek siap dalam 1–3 hari di tapak",
      ],
      process: [
        { step: "01", title: "Penilaian Rangka", desc: "Kami memeriksa rangka kabinet sedia ada untuk memastikan ia kukuh dan sesuai untuk makeover pintu dan perkakasan." },
        { step: "02", title: "Pengukuran & Pilihan", desc: "Setiap pintu dan muka laci diukur, dan anda memilih kemasan, warna, pemegang dan perkakasan baharu." },
        { step: "03", title: "Pembuatan Pintu", desc: "Pintu dan muka laci baharu dipotong dan dibuat di bengkel mengikut ukuran tepat." },
        { step: "04", title: "Penanggalan & Pemasangan", desc: "Pintu lama ditanggalkan, engsel dan rel diganti, dan pintu baharu dipasang dengan pemegang baharu." },
        { step: "05", title: "Pelarasan & Serahan", desc: "Setiap pintu dan laci dilaraskan supaya licin dan rata, lalu diserahkan bersama pembersihan kawasan." },
      ],
      faqs: [
        { q: "Bilakah makeover pintu sesuai berbanding kabinet baharu?", a: "Makeover pintu sesuai jika rangka kabinet sedia ada anda masih kukuh—hanya pintu dan perkakasan yang lusuh. Ia jauh lebih murah dan pantas daripada membina kabinet baharu." },
        { q: "Adakah anda menukar engsel dan rel laci juga?", a: "Ya. Kami menggantikan engsel lama dengan engsel tutup lembut Häfele atau Blum, dan menukar rel laci kepada sambungan penuh supaya laci berfungsi seperti baharu." },
        { q: "Berapa lama makeover dapur mengambil masa?", a: "Kebanyakan projek siap dalam 1–3 hari di tapak, selepas pintu baharu dibuat di bengkel (biasanya 7–14 hari)." },
        { q: "Bolehkah pemegang dan knob dikemas kini?", a: "Ya. Kami menawarkan pelbagai pemegang dan knob baharu—dari gaya minimalis sehingga klasik—untuk menyempurnakan rupa baharu dapur anda." },
      ],
      metaTitle: "Makeover Dapur (Pintu & Perkakasan) KL | Dari RM4,200",
      metaDesc: "Segarkan kabinet dapur sedia ada di KL & Selangor—tukar pintu, pemegang, engsel tutup lembut Häfele/Blum & rel laci. Jimat dan pantas, siap 1–3 hari. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "厨房翻新（仅门板与五金）",
      tagline: "更换门板、抽屉面板、拉手、铰链与滑轨，焕新现有柜体——无需重做柜体，省时省钱。",
      description:
        "如果您的厨房柜体仍然坚固，但门板陈旧或五金老化，仅翻新门板与五金是最经济的方案。我们拆除旧门板与抽屉面板，换上防火板、亚克力或喷漆饰面的新门板，并将铰链升级为 Häfele 或 Blum 缓冲铰链，滑轨升级为全拉出式。拉手与旋钮同步更新，整体焕然一新。该方案避免重建柜体的费用与干扰，多数项目 1–3 天即可完工，非常适合想在出售或出租前焕新、或只想局部升级厨房的业主。",
      highlights: [
        "仅更换门板、抽屉面板、拉手、铰链与滑轨——不动柜体",
        "保留现有柜体——节省全面翻新的费用与干扰",
        "升级为 Häfele/Blum 缓冲铰链与全拉出滑轨",
        "门板可选防火板、亚克力或喷漆饰面",
        "多数项目 1–3 天现场即可完工",
      ],
      process: [
        { step: "01", title: "柜体评估", desc: "检查现有柜体是否坚固，确认适合进行门板与五金翻新。" },
        { step: "02", title: "测量与选型", desc: "逐扇测量门板与抽屉面板，由您选定新饰面、颜色、拉手与五金。" },
        { step: "03", title: "门板制作", desc: "按精准尺寸在工厂切割并制作新门板与抽屉面板。" },
        { step: "04", title: "拆除与安装", desc: "拆除旧门板，更换铰链与滑轨，安装新门板与新拉手。" },
        { step: "05", title: "调校与交付", desc: "调校每扇门与抽屉使其顺滑平整，清理现场后交付。" },
      ],
      faqs: [
        { q: "什么时候适合做门板翻新而不是换新橱柜？", a: "柜体仍然坚固、仅门板与五金陈旧时，门板翻新是最佳选择——比重建橱柜便宜得多、快得多。" },
        { q: "铰链和滑轨也一起换吗？", a: "会。我们将旧铰链更换为 Häfele 或 Blum 缓冲铰链，滑轨升级为全拉出式，让抽屉顺滑如新。" },
        { q: "厨房翻新需要多久？", a: "新门板在工厂制作（通常 7–14 天）后，现场施工多数 1–3 天即可完成。" },
        { q: "拉手和旋钮可以更新吗？", a: "可以。我们提供多种新拉手与旋钮——从极简到经典——为厨房焕新画龙点睛。" },
      ],
      metaTitle: "吉隆坡厨房门板与五金翻新 | RM4,200起",
      metaDesc: "吉隆坡与雪兰莪厨房柜体焕新——更换门板、拉手、Häfele/Blum 缓冲铰链与全拉出滑轨。省时省钱，1–3 天完工。WhatsApp免费报价。",
    },
  },

  /* ── CARPENTRY ───────────────────────────────────────────────────────── */
  "carpentry/built-in-wardrobe": {
    ms: {
      name: "Almari Pakaian Tanam",
      tagline: "Almari pakaian lantai-ke-siling bina-mengikut-ukuran dengan rangka papan lapis 18mm, para 25mm, rel gantungan, laci tutup lembut Häfele/Blum dan pintu cermin atau laminate.",
      description:
        "Almari pakaian tanam ialah cara paling popular untuk memaksimumkan storan di bilik tidur tanpa membazirkan ruang lantai. Setiap unit kami dibina mengikut ukuran sebenar dinding anda menggunakan rangka papan lapis 18mm (bukan MDF murah) dengan para 25mm tebal yang tidak melendut walaupun memikul beban pakaian tebal dan kotak storan. Dalaman disesuaikan sepenuhnya—rel gantungan panjang, ruang berkembar, laci dalam, rak kasut dan laci kemasan—disusun kemas. Pintu tersedia dalam laminate tekanan tinggi, akrilik berkilat, cat semburan atau cermin, dengan engsel tutup lembut Häfele atau Blum serta rel laci sambungan penuh. Reka bentuk bermula dengan ukuran laser di tapak dan render 3D supaya anda dapat melihat susunan dalaman sebelum pembuatan bermula di bengkel KL kami.",
      highlights: [
        "Rangka papan lapis 18mm dengan para 25mm tebal—tahan beban, tidak melendut",
        "Dalaman disesuaikan: rel gantungan, ruang berkembar, laci dalam, rak kasut",
        "Pintu laminate, akrilik, cat semburan atau cermin dengan susun atur gelangsar",
        "Engsel tutup lembut Häfele/Blum dan rel laci sambungan penuh",
        "Reka bentuk 3D dengan ukuran laser dan jaminan struktur kabinet 5 tahun",
      ],
      process: [
        { step: "01", title: "Ukuran & Kajian Storan", desc: "Kami mengukur dinding dengan laser, menangkap tabiat penyimpanan pakaian, keperluan ruang bergantung dan keutamaan gaya anda." },
        { step: "02", title: "Reka Bentuk 3D & Sebut Harga", desc: "Anda menerima render 3D dalaman dengan sebut harga terperinci—setiap para, laci, rel dan pintu disenaraikan. Kami ubah sehingga anda berpuas hati." },
        { step: "03", title: "Pembuatan Bengkel", desc: "Komponen dipotong dengan CNC, di-edge-band dan dipra-pasang di bengkel KL kami selama 2–3 minggu menggunakan papan lapis dan kerja kayu tradisional." },
        { step: "04", title: "Pemasangan Di Tapak", desc: "Unit dipasang dalam 1–2 hari, diratakan ke dinding dan diselaras; habuk dikawal dengan kain plastik." },
        { step: "05", title: "Penjajaran & Serahan", desc: "Setiap pintu, laci dan para diuji kelicinan, engsel dilaraskan, dan kad jaminan 5 tahun diserahkan." },
      ],
      faqs: [
        { q: "Berapa lama masa untuk membina almari pakaian tanam?", a: "Dari sign-off reka bentuk ke pemasangan, biasanya 4 hingga 6 minggu: 1 minggu untuk semakan reka bentuk, 2–3 minggu pembuatan bengkel, 1–2 hari pemasangan di tapak. Kami berikan garis masa terperinci semasa sign-off." },
        { q: "Kenapa papan lapis berbanding MDF?", a: "Papan lapis mempunyai kekuatan struktur, rintangan kelembapan dan keupayaan pegangan skru yang jauh lebih tinggi—sesuai untuk almari yang menanggung beban pakaian. MDF melendut di bawah beban dan menyerap kelembapan. Kami guna papan lapis untuk semua komponen struktur." },
        { q: "Bolehkah dalaman disesuaikan dengan keperluan saya?", a: "Ya sepenuhnya. Kami mereka susunan rel gantungan, ruang berkembar, laci dalam, rak kasut dan laci kemasan mengikut koleksi pakaian dan tabiat anda, ditunjukkan dalam render 3D." },
        { q: "Adakah anda membina almari tanam di kondominium?", a: "Ya. Kami berpengalaman di kondominium di seluruh KL—Mont Kiara, Bangsar, KLCC, Damansara—mematuhi peraturan waktu kerja pengurusan, menggunakan perlindungan lif dan mengendalikan penyingkiran serpihan." },
      ],
      metaTitle: "Almari Pakaian Tanam Custom KL & Selangor | Dari RM320/kaki",
      metaDesc: "Almari pakaian tanam lantai-ke-siling di KL & Selangor. Rangka papan lapis 18mm, para 25mm, perkakasan Häfele/Blum, reka bentuk 3D, dalaman disesuaikan. Jaminan struktur 5 tahun. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "入墙衣柜",
      tagline: "顶天立地定制入墙衣柜，18mm 胶合板柜体、25mm 层板、挂衣杆、Häfele/Blum 缓冲抽屉，门板可选镜面或防火板。",
      description:
        "入墙衣柜是卧室最大化收纳又不占地面空间的最常见方案。每个柜体都按您墙面的真实尺寸打造，采用 18mm 胶合板柜体（非廉价 MDF），配 25mm 加厚层板——即使堆满厚重衣物与收纳箱也不下弯。内部完全按需定制：长挂衣杆、双挂区、内置抽屉、鞋架与配件抽，分类清晰。门板可选高压防火板、亮面亚克力、喷漆或镜面，配 Häfele 或 Blum 缓冲铰链与全拉出抽屉滑轨。设计从现场激光测量与 3D 渲染开始，让您在投产前直观看到内部布局，所有制作在我们吉隆坡自有工厂完成。",
      highlights: [
        "18mm 胶合板柜体配 25mm 加厚层板——承重不下弯",
        "内部按需定制：挂衣杆、双挂区、内置抽屉、鞋架",
        "门板可选防火板、亚克力、喷漆或镜面，配推拉/平开",
        "Häfele/Blum 缓冲铰链与全拉出抽屉滑轨",
        "激光测量 + 3D 设计，柜体结构 5 年保修",
      ],
      process: [
        { step: "01", title: "测量与收纳分析", desc: "激光测量墙面，记录衣物收纳习惯、悬挂区需求与风格偏好。" },
        { step: "02", title: "3D 设计与报价", desc: "提供内部布局 3D 渲染与逐项报价——每块层板、抽屉、挂杆、门板都列明，修改至满意。" },
        { step: "03", title: "工厂制作", desc: "CNC 切割部件、封边并预组装，工期 2–3 周，胶合板与传统木工结合。" },
        { step: "04", title: "现场安装", desc: "1–2 天安装到位，靠墙调平对齐，塑料布控制粉尘。" },
        { step: "05", title: "调校与交付", desc: "测试每扇门、抽屉、层板的顺滑度，调节铰链，移交 5 年保修卡。" },
      ],
      faqs: [
        { q: "定制入墙衣柜需要多久？", a: "从设计定稿到安装通常 4 到 6 周：1 周设计确认，2–3 周工厂生产，1–2 天现场安装。定稿时提供详细时间表。" },
        { q: "为什么用胶合板而不是 MDF？", a: "胶合板结构强度、防潮性与握钉力都远高于 MDF——适合承重衣柜。MDF 承重下会下弯、易吸潮。我们所有结构部件都用胶合板。" },
        { q: "内部可以按我的需求定制吗？", a: "可以，完全定制。挂衣杆、双挂区、内置抽屉、鞋架、配件抽都按您的衣物与习惯设计，并在 3D 渲染中呈现。" },
        { q: "公寓可以做入墙衣柜吗？", a: "可以。我们在吉隆坡各地公寓（Mont Kiara、Bangsar、KLCC、Damansara）经验丰富，遵守管理处工时、使用电梯保护并负责废料清运。" },
      ],
      metaTitle: "吉隆坡与雪兰莪定制入墙衣柜 | 每延英尺RM320起",
      metaDesc: "吉隆坡与雪兰莪顶天立地定制入墙衣柜。18mm 胶合板柜体、25mm 层板、Häfele/Blum 五金、3D 设计、内部按需定制。5 年结构保修。WhatsApp免费报价。",
    },
  },
  "carpentry/tv-console-and-feature-wall": {
    ms: {
      name: "Konsol TV & Dinding Feature",
      tagline: "Konsol TV bina-mengikut-ukuran dengan laci storan, para terapung, pengurusan kabel dan panel dinding feature sepadan untuk ruang tamu moden.",
      description:
        "Konsol TV dan dinding feature ialah titik tumpuan ruang tamu moden, dan reka bentuk kustom membolehkan ia menyembunyikan kabel, perkakasan dan wayar sambil menampilkan skrin anda. Kami membina konsol dengan rangka papan lapis 18mm, laci storan tutup lembut untuk alat kawalan jauh dan aksesori, para terapung untuk barangan hiasan, serta saluran pengurusan kabel yang tersembunyi di belakang TV. Dinding feature sepadan—sama ada panel kayu menegak, batu salji (fluted panel) atau kemasan laminate—menyepadukan konsol dengan keseluruhan dinding untuk rupa yang bersepadu. Setiap projek bermula dengan ukuran dan susun atur 3D yang mengambil kira saiz TV, kedudukan konsol permainan dan soket kuasa sedia ada.",
      highlights: [
        "Konsol papan lapis 18mm dengan laci storan tutup lembut Häfele/Blum",
        "Saluran pengurusan kabel tersembunyi—tiada wayar kelihatan",
        "Para terapung untuk hiasan dan barangan peribadi",
        "Dinding feature sepadan: panel kayu, fluted panel atau laminate",
        "Reka bentuk 3D mengambil kira saiz TV dan soket kuasa sedia ada",
      ],
      process: [
        { step: "01", title: "Ukuran & Susun Atur", desc: "Kami mengukur dinding, mengesahkan saiz TV, kedudukan mata soket dan keperluan storan aksesori anda." },
        { step: "02", title: "Reka Bentuk 3D & Sebut Harga", desc: "Anda melihat konsol dan dinding feature dalam render 3D dengan sebut harga terperinci setiap panel dan aksesori." },
        { step: "03", title: "Pembuatan Bengkel", desc: "Konsol dan panel dinding dipotong CNC, di-edge-band dan dicat semburan atau dilaminate di bengkel selama 2–3 minggu." },
        { step: "04", title: "Pemasangan Di Tapak", desc: "Konsol dipasang, panel dinding disekrup dan diselaraskan, dan saluran kabel disambung ke soket sedia ada." },
        { step: "05", title: "Pengurusan Kabel & Serahan", desc: "Wayar TV, konsol permainan dan pembesar suara dilalukan melalui saluran tersembunyi, dan unit diserahkan bersama jaminan 5 tahun." },
      ],
      faqs: [
        { q: "Bolehkah wayar TV disembunyikan sepenuhnya?", a: "Ya. Kami mereka saluran pengurusan kabel tersembunyi di belakang konsol dan TV, jadi wayar kuasa, HDMI dan audio tidak kelihatan dari hadapan. Soket kuasa juga boleh dipindahkan ke belakang TV jika diperlukan." },
        { q: "Adakah dinding feature termasuk dalam harga konsol?", a: "Dinding feature biasanya disebutharga berasingan kerana melibatkan panel dan kerja dinding tambahan. Kami menunjukkan kedua-duanya dalam render 3D dan sebut harga terperinci." },
        { q: "Berapa tinggi konsol TV sepatutnya?", a: "Ketinggian konsol bergantung pada ketinggian duduk anda dan saiz TV; kami menetapkan ketinggian supaya pusat skrin selaras dengan paras mata semasa duduk, biasanya konsol 18–24 inci tinggi." },
        { q: "Bolehkah konsol menampung konsol permainan dan pembesar suara?", a: "Ya. Kami mereka ruang storan dan rak terbuka mengikut peralatan anda—konsol permainan, pembesar suara soundbar, penghala dan pengumpul habuk semuanya diambil kira dalam reka bentuk." },
      ],
      metaTitle: "Konsol TV & Dinding Feature Custom KL | Dari RM1,500",
      metaDesc: "Konsol TV kustom dengan laci storan, pengurusan kabel tersembunyi dan dinding feature sepadan di KL & Selangor. Rangka papan lapis, reka bentuk 3D. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "电视柜与背景墙",
      tagline: "定制电视柜，配收纳抽屉、悬浮层架、隐藏走线与配套背景墙，打造现代客厅视觉焦点。",
      description:
        "电视柜与背景墙是现代客厅的视觉焦点，定制设计能在展示屏幕的同时隐藏线缆、电器与杂线。我们用 18mm 胶合板打造柜体，配缓冲收纳抽屉（放置遥控与配件）、悬浮层架（摆放装饰），并在电视后方预留隐藏走线槽。配套背景墙——可选竖向木饰面板、格栅（fluted panel）或防火板饰面——将电视柜与整面墙融为一体，呈现协调统一的效果。每个项目都从测量与 3D 布局开始，综合考虑电视尺寸、游戏主机位置与现有电源插座。",
      highlights: [
        "18mm 胶合板电视柜，配 Häfele/Blum 缓冲收纳抽屉",
        "隐藏走线槽——正面看不到任何线缆",
        "悬浮层架摆放装饰与个人物品",
        "配套背景墙：木饰面板、格栅或防火板",
        "3D 设计综合考虑电视尺寸与现有插座",
      ],
      process: [
        { step: "01", title: "测量与布局", desc: "测量墙面，确认电视尺寸、插座位置与配件收纳需求。" },
        { step: "02", title: "3D 设计与报价", desc: "在 3D 渲染中呈现电视柜与背景墙，每块面板与配件逐项报价。" },
        { step: "03", title: "工厂制作", desc: "电视柜与墙板 CNC 切割、封边，喷漆或贴防火板，工期 2–3 周。" },
        { step: "04", title: "现场安装", desc: "安装柜体、固定墙板并对齐，走线槽接入现有插座。" },
        { step: "05", title: "走线整理与交付", desc: "电视、游戏主机与音响线缆经隐藏槽布置，交付含 5 年保修。" },
      ],
      faqs: [
        { q: "电视线可以完全藏起来吗？", a: "可以。我们在电视柜与电视后方设计隐藏走线槽，电源线、HDMI 与音频线正面都看不到。需要时也可将电源插座移到电视背后。" },
        { q: "背景墙包含在电视柜报价内吗？", a: "背景墙通常单独报价，因为涉及额外的墙板与施工。两者都会在 3D 渲染与逐项报价中清晰呈现。" },
        { q: "电视柜应该多高？", a: "高度取决于您的坐高与电视尺寸；我们设定高度让屏幕中心与落座时的视线齐平，柜体一般 18–24 英寸高。" },
        { q: "柜体能放下游戏主机和音响吗？", a: "可以。我们按您的设备——游戏主机、回音壁、路由器、防尘位——设计储物格与开放层架。" },
      ],
      metaTitle: "吉隆坡定制电视柜与背景墙 | RM1,500起",
      metaDesc: "吉隆坡与雪兰莪定制电视柜，配收纳抽屉、隐藏走线与配套背景墙。胶合板柜体、3D 设计。WhatsApp免费报价。",
    },
  },
  "carpentry/study-desk-and-home-office": {
    ms: {
      name: "Meja Belajar & Pejabat Rumah",
      tagline: "Meja belajar tanam bina-mengikut-ukuran dengan pengurusan kabel, laci, kabinet atas dan rak sepadan untuk bilik belajar dan pejabat rumah.",
      description:
        "Meja belajar dan pejabat rumah tanam memaksimumkan ruang kerja sambil mengekalkan rupa yang kemas dan bersepadu dengan bilik. Kami membina meja dengan rangka papan lapis 18mm, top yang tahan calar, lubang pengurusan kabel untuk monitor dan komputer riba, laci tutup lembut untuk stesen kerja, serta kabinet atas dan rak sepadan untuk buku dan fail. Susun atur disesuaikan dengan ruang anda—sama ada cermin sudut, dinding penuh atau stesen kerja berkembar—dan mengambil kira kedudukan soket kuasa, pencahayaan task dan keperluan ergonomik. Setiap unit direka dalam 3D supaya anda dapat melihat susunan stesen kerja sebelum pembuatan bermula.",
      highlights: [
        "Rangka papan lapis 18mm dengan top tahan calar untuk kegunaan harian",
        "Lubang dan saluran pengurusan kabel untuk monitor dan komputer riba",
        "Laci tutup lembut Häfele/Blum untuk stesen kerja",
        "Kabinet atas dan rak sepadan untuk buku, fail dan aksesori",
        "Susun atur disesuaikan—cermin sudut, dinding penuh atau stesen berkembar",
      ],
      process: [
        { step: "01", title: "Ukuran & Kajian Ergonomik", desc: "Kami mengukur ruang, mengesahkan ketinggian meja ergonomik, dan menangkap keperluan storan serta peralatan anda." },
        { step: "02", title: "Reka Bentuk 3D & Sebut Harga", desc: "Anda melihat susunan stesen kerja, kabinet atas dan rak dalam render 3D dengan sebut harga terperinci." },
        { step: "03", title: "Pembuatan Bengkel", desc: "Meja, kabinet dan rak dipotong CNC, di-edge-band dan dikemas di bengkel selama 2–3 minggu." },
        { step: "04", title: "Pemasangan Di Tapak", desc: "Unit dipasang dan disauh ke dinding, lubang kabel diselaraskan dengan soket sedia ada." },
        { step: "05", title: "Pengurusan Kabel & Serahan", desc: "Wayar monitor, komputer riba dan lampu dilalukan dengan kemas, laci diuji, dan kad jaminan diserahkan." },
      ],
      faqs: [
        { q: "Bolehkah meja disesuaikan dengan ruang kecil atau sudut?", a: "Ya. Kami mengkhusus dalam susun atur cermin sudut, meja dinding penuh dan stesen kerja padat untuk bilik kecil. Setiap unit dibina mengikut ukuran sebenar ruang anda." },
        { q: "Adakah pengurusan kabel termasuk?", a: "Ya. Kami menyediakan lubang pengurusan kabel dan saluran tersembunyi untuk monitor, komputer riba, pengisi cas dan lampu, supaya permukaan meja kekal kemas." },
        { q: "Berapa tinggi meja belajar yang selesa?", a: "Ketinggian standard sekitar 74cm untuk kegunaan dewasa, tetapi kami boleh disesuaikan mengikut ketinggian anda dan sama ada anda menggunakan kerusi ergonomik." },
        { q: "Bolehkah saya termasuk kabinet atas dan rak buku?", a: "Ya. Kabinet atas, rak buku dinding dan unit storan sepadan sentiasa direka bersama meja untuk rupa yang bersepadu dan storan maksimum." },
      ],
      metaTitle: "Meja Belajar & Pejabat Rumah Custom KL | Dari RM1,100",
      metaDesc: "Meja belajar dan pejabat rumah tanam di KL & Selangor. Pengurusan kabel, laci tutup lembut, kabinet atas dan rak sepadan, reka bentuk 3D. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "书桌与家庭办公",
      tagline: "定制入墙书桌，配走线管理、抽屉、吊柜与配套层架，适合书房与家庭办公。",
      description:
        "入墙书桌与家庭办公柜能最大化工作空间，同时保持整洁、与房间协调统一的外观。我们用 18mm 胶合板打造书桌，桌面耐磨，配显示器与笔记本电脑走线孔、办公缓冲抽屉，以及配套吊柜与书架用于书籍和文件。布局按您的空间定制——转角、满墙或双工位——并综合考虑电源插座位置、台灯光照与人体工学需求。每个柜体都经 3D 设计，让您在投产前直观看到工位布局。",
      highlights: [
        "18mm 胶合板柜体，桌面耐磨适合日常使用",
        "显示器与笔记本电脑走线孔与走线槽",
        "Häfele/Blum 缓冲办公抽屉",
        "配套吊柜与书架，收纳书籍、文件与配件",
        "布局可定制——转角、满墙或双工位",
      ],
      process: [
        { step: "01", title: "测量与人因分析", desc: "测量空间，确认人体工学桌高，记录收纳与设备需求。" },
        { step: "02", title: "3D 设计与报价", desc: "在 3D 渲染中呈现工位、吊柜与层架布局，逐项报价。" },
        { step: "03", title: "工厂制作", desc: "书桌、柜体与层架 CNC 切割、封边并饰面，工期 2–3 周。" },
        { step: "04", title: "现场安装", desc: "安装柜体并固定到墙面，走线孔对齐现有插座。" },
        { step: "05", title: "走线整理与交付", desc: "显示器、笔记本电脑与台灯线缆整齐布置，测试抽屉，移交保修卡。" },
      ],
      faqs: [
        { q: "书桌可以适配小空间或转角吗？", a: "可以。我们专做转角、满墙书桌与紧凑工位，每个柜体都按您空间的实际尺寸打造。" },
        { q: "包含走线管理吗？", a: "包含。我们为显示器、笔记本电脑、充电器与台灯预留走线孔与隐藏线槽，保持桌面整洁。" },
        { q: "书桌多高比较舒适？", a: "成人标准桌高约 74cm，但可按您的身高及是否使用人体工学椅定制。" },
        { q: "可以加吊柜和书架吗？", a: "可以。吊柜、墙挂书架与配套收纳柜通常与书桌一体设计，外观协调、收纳最大化。" },
      ],
      metaTitle: "吉隆坡定制书桌与家庭办公 | RM1,100起",
      metaDesc: "吉隆坡与雪兰莪入墙书桌与家庭办公柜。走线管理、缓冲抽屉、配套吊柜与层架、3D 设计。WhatsApp免费报价。",
    },
  },
  "carpentry/shoe-cabinet-and-entry-storage": {
    ms: {
      name: "Kabinet Kasut & Storan Pintu Masuk",
      tagline: "Kabinet kasut kedalaman nipis dengan laci tilt-out, bangku duduk, cermin dan pencahayaan bersepadu untuk laluan masuk yang kemas dan berfungsi.",
      description:
        "Laluan masuk ialah ruang pertama yang dilihat tetamu, dan kabinet kasut kustom menjadikannya kemas, berfungsi dan bergaya. Kami membina kabinet kedalaman nipis yang sesuai untuk laluan sempit, dengan laci tilt-out yang memegang kasut secara menegak untuk memaksimumkan kapasiti, bangku duduk terbina dalam untuk memakai kasut dengan selesa, cermin penuh atau separa, serta pencahayaan LED bersepadu. Rangka papan lapis 18mm dengan kemasan laminate atau cat semburan menahan habuk dan calar harian, dan laci menggunakan rel sambungan penuh Häfele atau Blum supaya boleh ditarik sepenuhnya. Setiap unit direka dalam 3D mengambil kira bilangan pasang kasut ahli keluarga, ruang payung dan kunci, serta lebar laluan masuk anda.",
      highlights: [
        "Kabinet kedalaman nipis sesuai untuk laluan masuk sempit",
        "Laci tilt-out memegang kasut menegak untuk kapasiti maksimum",
        "Bangku duduk terbina dalam untuk memakai kasut dengan selesa",
        "Cermin penuh atau separa dengan pencahayaan LED bersepadu",
        "Rel laci sambungan penuh Häfele/Blum dan kemasan tahan calar",
      ],
      process: [
        { step: "01", title: "Ukuran & Kajian Storan", desc: "Kami mengukur laluan masuk, menganggar bilangan pasang kasut, dan menangkap keperluan ruang payung, kunci dan beg." },
        { step: "02", title: "Reka Bentuk 3D & Sebut Harga", desc: "Anda melihat kabinet, bangku dan cermin dalam render 3D dengan sebut harga terperinci setiap komponen." },
        { step: "03", title: "Pembuatan Bengkel", desc: "Kabinet, laci tilt-out dan bangku dipotong CNC, di-edge-band dan dikemas di bengkel selama 2–3 minggu." },
        { step: "04", title: "Pemasangan Di Tapak", desc: "Unit dipasang ke dinding, pencahayaan LED disambung, dan cermin dilekap dengan selamat." },
        { step: "05", title: "Ujian & Serahan", desc: "Laci tilt-out diuji kelicinan, pencahayaan diperiksa, dan kad jaminan 5 tahun diserahkan." },
      ],
      faqs: [
        { q: "Berapa banyak kasut yang boleh dimuatkan?", a: "Ia bergantung pada reka bentuk dan kedalaman, tetapi laci tilt-out biasanya memegang 12–20 pasang kasut setiap meter. Kami menganggar kapasiti berdasarkan koleksi kasut ahli keluarga anda semasa reka bentuk 3D." },
        { q: "Adakah bangku duduk termasuk?", a: "Bangku duduk terbina dalam boleh disertakan sebagai sebahagian reka bentuk. Ia memberi tempat selesa untuk memakai kasut dan sering mempunyai storan tersembunyi di bawah." },
        { q: "Bolehkah kabinet dipasang di laluan masuk yang sangat sempit?", a: "Ya. Kabinet kedalaman nipis (serendah 15–20cm) dengan laci tilt-out direka khas untuk laluan sempit di mana kabinet tradisional tidak muat." },
        { q: "Adakah pencahayaan dan cermin termasuk?", a: "Pencahayaan LED bersepadu dan cermin penuh atau separa boleh disertakan. Kami menyambung pencahayaan ke suis atau sensor sedia ada semasa pemasangan." },
      ],
      metaTitle: "Kabinet Kasut & Storan Pintu Masuk KL | Dari RM1,800",
      metaDesc: "Kabinet kasut kedalaman nipis dengan laci tilt-out, bangku duduk, cermin & lampu LED di KL & Selangor. Rangka papan lapis, reka bentuk 3D. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "鞋柜与玄关收纳",
      tagline: "薄进深鞋柜，配翻斗抽屉、换鞋凳、镜面与内嵌灯光，打造整洁实用的玄关。",
      description:
        "玄关是客人进门第一眼看到的空间，定制鞋柜能让它整洁、实用又时尚。我们打造适合狭窄过道的薄进深鞋柜，翻斗抽屉将鞋子竖向收纳以最大化容量，配嵌入式换鞋凳方便舒适穿鞋，整镜或半身镜，以及内嵌 LED 灯。18mm 胶合板柜体配防火板或喷漆饰面，耐日常灰尘与刮擦，抽屉采用 Häfele 或 Blum 全拉出滑轨，可完全拉出。每个柜体都经 3D 设计，综合考虑家人的鞋子数量、雨伞与钥匙的收纳，以及玄关宽度。",
      highlights: [
        "薄进深柜体，适合狭窄玄关",
        "翻斗抽屉竖向收纳鞋子，容量最大化",
        "嵌入式换鞋凳，舒适穿鞋",
        "整镜或半身镜，配内嵌 LED 灯",
        "Häfele/Blum 全拉出滑轨，耐磨饰面",
      ],
      process: [
        { step: "01", title: "测量与收纳分析", desc: "测量玄关，估算鞋子数量，记录雨伞、钥匙与包的收纳需求。" },
        { step: "02", title: "3D 设计与报价", desc: "在 3D 渲染中呈现柜体、换鞋凳与镜面，每个组件逐项报价。" },
        { step: "03", title: "工厂制作", desc: "柜体、翻斗抽屉与换鞋凳 CNC 切割、封边并饰面，工期 2–3 周。" },
        { step: "04", title: "现场安装", desc: "柜体固定到墙面，连接 LED 灯，镜面安全嵌装。" },
        { step: "05", title: "测试与交付", desc: "测试翻斗抽屉顺滑度，检查灯光，移交 5 年保修卡。" },
      ],
      faqs: [
        { q: "能放多少双鞋？", a: "取决于设计与进深，翻斗抽屉一般每米可放 12–20 双鞋。我们在 3D 设计时按家人鞋量估算容量。" },
        { q: "包含换鞋凳吗？", a: "嵌入式换鞋凳可作为设计的一部分，提供舒适穿鞋位置，下方常带隐藏收纳。" },
        { q: "非常狭窄的玄关能装吗？", a: "可以。薄进深鞋柜（薄至 15–20cm）配翻斗抽屉专为狭窄过道设计，传统柜体放不下的地方也能装。" },
        { q: "包含灯光和镜面吗？", a: "内嵌 LED 灯与整镜/半身镜可一并配置。安装时将灯光接入现有开关或感应器。" },
      ],
      metaTitle: "吉隆坡鞋柜与玄关收纳 | RM1,800起",
      metaDesc: "吉隆坡与雪兰莪薄进深鞋柜，配翻斗抽屉、换鞋凳、镜面与 LED 灯。胶合板柜体、3D 设计。WhatsApp免费报价。",
    },
  },

  /* ── EPOXY FLOORING ─────────────────────────────────────────────── */
  "epoxy-flooring/self-levelling-epoxy-floor": {
    ms: {
      name: "Lantai Epoxy Rata-Sendiri",
      tagline: "Salutan epoxy rata-sendiri licin cermin 2–3mm untuk lantai kediaman, bilik pameran dan komersial ringan.",
      description:
        "Lantai epoxy rata-sendiri (self-levelling) menghasilkan permukaan licin seperti cermin pada ketebalan 2–3mm, ideal untuk kediaman moden, bilik pameran kereta, butik dan ruang komersial ringan. Selepas pengisaran intan substrat konkrit, lapisan epoxy cecair dituang dan merebak sendiri ke ketebalan yang sekata tanpa kesan roller. Hasilnya lantai yang mudah dibersihkan, tahan calar, tahan kimia dan kelihatan premium. Sesuai untuk garaj rumah, studio, lobi dan dapur basah yang mahukan kemasan minimalis yang bersih. Setiap kerja termasuk primer menembus, lapisan badan rata-sendiri dan topcoat polyurethane alifatik stabil UV untuk ketahanan jangka panjang.",
      highlights: [
        "Ketebalan seragam 2–3mm tanpa kesan roller atau calarkan untuk kemasan licin cermin",
        "Mudah dibersihkan dan tahan noda — sesuai untuk dapur basah dan bilik pameran",
        "Permukaan rata-sendiri meliputi retakan halus dan ketidakrataan konkrit",
        "Topcoat polyurethane alifatik stabil UV — tidak menguning di bawah cahaya matahari",
        "Selesai dalam 3–4 hari dengan gangguan minimum kepada penghuni",
      ],
      process: [
        { step: "01", title: "Penilaian Substrat", desc: "Kami memeriksa konkrit untuk lembapan, minyak, retakan dan profil permukaan, serta menjalankan ujian lembapan kalsium klorida jika perlu." },
        { step: "02", title: "Pengisaran Intan", desc: "Pengisar intan walk-behind mencapai profil CSP 3–4; retakan dibuka dan diisi dengan mortar epoxy." },
        { step: "03", title: "Penyapuan Primer", desc: "Primer epoxy menembus disapu dengan roller untuk ikatan kimia maksimum; dibiarkan kering 12–24 jam." },
        { step: "04", title: "Lapisan Rata-Sendiri", desc: "Epoxy rata-sendiri dituang dan disebarkan dengan trowel bergerigi supaya merebak sendiri ke ketebalan sekata." },
        { step: "05", title: "Topcoat & Pengeringan", desc: "Lebihan dikikis, kemudian topcoat polyurethane alifatik disapu dua lapisan untuk rintangan calar dan kimia." },
      ],
      faqs: [
        { q: "Berapa lama lantai epoxy rata-sendiri mengambil masa untuk dipasang?", a: "Projek garaj atau bilik pameran kediaman (300–500 kaki persegi) biasanya mengambil 3–4 hari termasuk pengisaran, primer, lapisan badan dan topcoat. Trafik kaki dibenarkan selepas 24 jam, kenderaan selepas 72 jam, dan rintangan kimia penuh selepas 7 hari." },
        { q: "Adakah lantai ini sesuai untuk dapur basah?", a: "Ya. Permukaan licin cermin mudah dilap dan tahan kepada tumpahan air serta bahan dapur. Untuk kawasan yang sangat licin bila basah, kami boleh menambah additive halus untuk cengkaman tambahan." },
        { q: "Bolehkah epoxy rata-sendiri menutup retakan lantai?", a: "Lapisan rata-sendiri mengisi ketidakrataan dan retakan halus semasa merebak sendiri. Retakan struktur besar akan dibuka dan diisi dengan mortar epoxy dahulu sebelum lapisan badan disapu." },
        { q: "Adakah ia akan menguning di bawah cahaya matahari?", a: "Tidak. Kami sentiasa menutup dengan topcoat polyurethane alifatik stabil UV (Sika, BASF atau RPM) yang kekal jernih 10+ tahun walaupun di beranda kereta terdedah matahari." },
      ],
      metaTitle: "Lantai Epoxy Rata-Sendiri KL & Selangor | Harga Dari RM22/sq ft",
      metaDesc: "Lantai epoxy rata-sendiri licin cermin 2–3mm untuk kediaman, bilik pameran dan komersial ringan di KL & Selangor. Mudah dibersihkan, tahan kimia, topcoat UV-stabil. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "自流平环氧地坪",
      tagline: "2–3毫米镜面光滑的自流平环氧涂层，适用于住宅、展厅与轻型商业地面。",
      description:
        "自流平环氧地坪在2–3毫米厚度上呈现镜面般光滑的表面，非常适合现代住宅、汽车展厅、精品店及轻型商业空间。经过混凝土基面金刚石打磨后，液态环氧涂料被倾倒并自动流平至均匀厚度，不留下滚筒痕迹。最终地面易清洁、耐刮擦、耐化学腐蚀且外观高端。适用于追求极简洁净效果的住宅车库、工作室、大堂与湿区厨房。每道工序均包含渗透底漆、自流平中层与紫外稳定脂肪族聚氨酯面漆，以确保长久耐用。",
      highlights: [
        "2–3毫米均匀厚度，无滚筒痕与刮痕，呈现镜面效果",
        "易清洁、抗污，适合湿区厨房与展厅",
        "自流平层可覆盖细微裂缝与混凝土不平整",
        "脂肪族聚氨酯紫外稳定面漆，日光下不发黄",
        "3–4天完工，对住户打扰最小",
      ],
      process: [
        { step: "01", title: "基面评估", desc: "我们检查混凝土是否受潮、油污、开裂及表面平整度，必要时进行氯化钙含水率测试。" },
        { step: "02", title: "金刚石打磨", desc: "采用手推式金刚石打磨机达到CSP 3–4处理度，裂缝开槽并以环氧砂浆填补。" },
        { step: "03", title: "涂刷底漆", desc: "滚涂渗透型环氧底漆以形成最大化学结合，静置固化12–24小时。" },
        { step: "04", title: "自流平层", desc: "倾倒自流平环氧，用齿形镘刀摊铺，使其自动流平至均匀厚度。" },
        { step: "05", title: "面漆与固化", desc: "铲除多余物料后，涂刷两道脂肪族聚氨酯面漆，提供抗刮与抗化学性能。" },
      ],
      faqs: [
        { q: "自流平环氧地坪安装需要多长时间？", a: "一般住宅车库或展厅项目（300–500平方英尺）约需3–4天，包括打磨、底漆、中层与面漆。24小时后可步行，72小时后可行车，7天后达到完全耐化学性。" },
        { q: "这种地面适合湿区厨房吗？", a: "适合。镜面光滑表面易于擦拭，并能抵抗水渍与厨房油污。若用于极易湿滑区域，我们可添加细颗粒助剂以提升防滑性。" },
        { q: "自流平环氧能遮盖地面裂缝吗？", a: "自流平层在流动时可填补细微不平与裂缝。较大结构性裂缝会先开槽并用环氧砂浆填补，再涂中层。" },
        { q: "它在阳光下会发黄吗？", a: "不会。我们始终以紫外稳定脂肪族聚氨酯面漆（Sika、BASF或RPM）罩面，即使在曝晒的车棚下也能保持清澈10年以上。" },
      ],
      metaTitle: "吉隆坡自流平环氧地坪 | RM22/sq ft起",
      metaDesc: "吉隆坡与雪兰莪2–3毫米镜面自流平环氧地坪，适用于住宅、展厅与轻型商业。易清洁、耐化学、紫外稳定面漆。WhatsApp免费报价。",
    },
  },
  "epoxy-flooring/flake-quartz-broadcast-epoxy": {
    ms: {
      name: "Epoxy Taburan Flake / Kuarza",
      tagline: "Salutan epoxy hiasan dengan taburan flake vinil atau kuarza berwarna, kemasan rintangan gelincir untuk garaj dan dapur.",
      description:
        "Epoxy taburan flake atau kuarza ialah sistem salutan hiasan yang menggabungkan keindahan dengan kefungsian. Semasa lapisan badan epoxy masih basah, kepingan flake vinil atau kuarza berwarna ditabur tangan ke penolakan penuh, mencipta tekstur visual yang unik dan kemasan rintangan gelincir (P4–P5). Sesuai untuk garaj kediaman, dapur komersial, dek kolam dan laluan luar yang kerap basah. Sistem ini menyembunyikan calar kecil dan kotoran dengan lebih baik daripada epoxy licin cermin, sambil mengekalkan lantai yang mudah dibersihkan dan tahan kimia. Setiap pemasangan termasuk pengisaran intan, primer, taburan badan dan topcoat polyurethane alifatik dua lapisan.",
      highlights: [
        "Kemasan rintangan gelincir P4–P5 — selamat untuk garaj dan dapur basah",
        "Corak flake hiasan unik menutup calar dan kotoran halus",
        "Pilihan warna flake dan kuarza disesuaikan dengan tema rumah",
        "Mudah dibersihkan dan tahan kimia seperti sistem epoxy lain",
        "Topcoat UV-stabil — warna flake tidak pudar di bawah matahari",
      ],
      process: [
        { step: "01", title: "Penilaian Substrat", desc: "Kami memeriksa konkrit untuk lembapan, minyak, retakan dan profil permukaan sebelum kerja bermula." },
        { step: "02", title: "Pengisaran Intan", desc: "Pengisar intan walk-behind mencapai profil CSP 3–4; retakan dibuka dan diisi dengan mortar epoxy." },
        { step: "03", title: "Penyapuan Primer", desc: "Primer epoxy menembus disapu dengan roller untuk ikatan kimia maksimum; dibiarkan kering 12–24 jam." },
        { step: "04", title: "Taburan Badan", desc: "Lapisan epoxy dituang dan disebarkan, kemudian flake vinil atau kuarza berwarna ditabur tangan ke penolakan penuh ke dalam lapisan basah." },
        { step: "05", title: "Topcoat & Pengeringan", desc: "Lebihan flake dikikis dan divakum, diikuti dua lapisan topcoat polyurethane alifatik untuk rintangan calar dan kimia." },
      ],
      faqs: [
        { q: "Adakah lantai epoxy flake selamat apabila basah?", a: "Ya. Sistem taburan flake dengan additive kasar halus mencapai penarafan gelincir P4–P5 (AS/NZS 4586), menjadikannya selamat untuk dapur, garaj dan dek kolam yang kerap basah tanpa mengorbankan kebolehbersihan." },
        { q: "Bolehkah saya memilih warna flake?", a: "Ya. Kami menawarkan pelbagai kombinasi warna flake vinil dan kuarza berwarna yang boleh dipadankan dengan tema kediaman atau jenama perniagaan anda." },
        { q: "Berapa lama ia tahan?", a: "Dengan topcoat polyurethane alifatik dua lapisan, lantai kekal tahan lasak dan warna flake kekal ceria 10+ tahun walaupun di kawasan terdedah matahari." },
        { q: "Adakah ia menyembunyikan calar lantai?", a: "Ya. Corak flake hiasan memecahkan cahaya dan menyembunyikan calar kecil serta kotoran dengan lebih baik berbanding epoxy licin cermin." },
      ],
      metaTitle: "Epoxy Taburan Flake / Kuarza KL & Selangor | Harga Dari RM26/sq ft",
      metaDesc: "Epoxy taburan flake atau kuarza berwarna dengan kemasan rintangan gelincir untuk garaj dan dapur di KL & Selangor. Hiasan, selamat dan tahan lama. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "片材/石英砂抛洒环氧地坪",
      tagline: "装饰性乙烯基片材或彩色石英砂抛洒，防滑饰面，适用于车库与厨房。",
      description:
        "片材（flake）或石英砂抛洒环氧系统将美观与功能结合。在环氧中层仍处于湿润状态时，手工将彩色乙烯基片材或石英砂满撒至饱合，形成独特视觉纹理与防滑饰面（P4–P5）。适用于住宅车库、商业厨房、泳池甲板及常湿的外走道。相比镜面环氧，该系统更能隐藏细微划痕与污渍，同时保持易清洁与耐化学腐蚀。每道工序包含金刚石打磨、底漆、抛洒中层与两道脂肪族聚氨酯面漆。",
      highlights: [
        "P4–P5防滑饰面，车库与湿区厨房更安全",
        "独特片材纹理隐藏细微划痕与污渍",
        "片材与石英砂颜色可配合家居主题定制",
        "与其他环氧系统同样易清洁、耐化学",
        "紫外稳定面漆，片材颜色日晒不褪",
      ],
      process: [
        { step: "01", title: "基面评估", desc: "我们检查混凝土是否受潮、油污、开裂及表面平整度，开工前做好评估。" },
        { step: "02", title: "金刚石打磨", desc: "手推式金刚石打磨机达到CSP 3–4处理度，裂缝开槽并以环氧砂浆填补。" },
        { step: "03", title: "涂刷底漆", desc: "滚涂渗透型环氧底漆以形成最大化学结合，静置固化12–24小时。" },
        { step: "04", title: "抛洒中层", desc: "倾倒并摊铺环氧中层，随后将彩色乙烯基片材或石英砂手工满撒至湿润涂层中。" },
        { step: "05", title: "面漆与固化", desc: "铲除并吸除多余片材，再涂两道脂肪族聚氨酯面漆，提供抗刮与抗化学性能。" },
      ],
      faqs: [
        { q: "片材环氧地面湿滑时安全吗？", a: "安全。配合细颗粒助剂的片材抛洒系统可达P4–P5防滑等级（AS/NZS 4586），即使厨房、车库与泳池甲板常湿也安全，且不牺牲易清洁性。" },
        { q: "我可以选择片材颜色吗？", a: "可以。我们提供多种乙烯基片材与彩色石英砂配色，可配合您的家居主题或品牌色调。" },
        { q: "它能用多久？", a: "采用两道脂肪族聚氨酯面漆罩面，地面耐磨且片材颜色可保持鲜亮10年以上，即使在曝晒区域亦然。" },
        { q: "它能遮盖地面划痕吗？", a: "能。装饰性片材纹理可打散光线，比镜面环氧更能隐藏细微划痕与污渍。" },
      ],
      metaTitle: "吉隆坡片材/石英砂抛洒环氧地坪 | RM26/sq ft起",
      metaDesc: "吉隆坡与雪兰莪片材或彩色石英砂抛洒环氧地坪，防滑饰面，适用于车库与厨房。美观、安全、耐用。WhatsApp免费报价。",
    },
  },
  "epoxy-flooring/heavy-duty-mortar-screed": {
    ms: {
      name: "Mortar Screed Tugas Berat",
      tagline: "Mortar epoxy sapuan trowel 5–10mm untuk gudang, kilang dan zon trafik forklift.",
      description:
        "Mortar screed tugas berat ialah sistem salutan epoxy paling tebal (5–10mm) yang direka untuk lantai industri dengan trafik berat — gudang, kilang, pusat logistik dan zon laluan forklift. Campuran mortar epoxy bergred tinggi disapu dengan trowel tangan untuk menghasilkan permukaan padu yang tahan hentaman, tahan calar dan tahan kimia agresif. Sesuai untuk kawasan yang menerima jatuhan alatan berat, pergerakan palet besi dan penggunaan troli industri. Sistem ini juga bertindak sebagai perapat kelembapan pada konkrit baharu. Setiap kerja termasuk pengisaran intan, primer tebusan kelembapan, sapuan mortar dan topcoat polyurethane alifatik dua lapisan.",
      highlights: [
        "Ketebalan 5–10mm menahan impak alatan berat dan trafik forklift",
        "Rintangan kimia agresif untuk kilang dan gudang",
        "Permukaan padu tanpa sambungan lemah untuk lantai industri",
        "Berfungsi sebagai perapat kelembapan pada konkrit baharu",
        "Topcoat UV-stabil tahan calar untuk laluan trak",
      ],
      process: [
        { step: "01", title: "Penilaian Substrat", desc: "Kami mengukur kekuatan konkrit, kelembapan dan beban trafik untuk memilih ketebalan mortar 5–10mm yang sesuai." },
        { step: "02", title: "Pengisaran Intan", desc: "Pengisar intan mencapai profil CSP 3–4; retakan dan lompang diisi dengan mortar epoxy." },
        { step: "03", title: "Primer Tebusan Kelembapan", desc: "Primer epik khas disapu untuk menghalang kelembapan naik pada konkrit baharu atau lembap." },
        { step: "04", title: "Sapuan Mortar", desc: "Mortar epoxy bergred tinggi disapu dengan trowel tangan ke ketebalan 5–10mm yang seragam." },
        { step: "05", title: "Topcoat & Pengeringan", desc: "Selepas kering, dua lapisan topcoat polyurethane alifatik disapu untuk rintangan calar dan kimia maksimum." },
      ],
      faqs: [
        { q: "Berapa tebal mortar screed tugas berat?", a: "Ketebalan dipilih antara 5–10mm bergantung pada beban — 6mm untuk laluan forklift ringan, sehingga 10mm untuk zon jatuhan alatan berat dan trafik berat berterusan. Ketebalan disahkan semasa lawatan tapak." },
        { q: "Bolehkah ia dipasang ke atas konkrit baharu?", a: "Ya. Kami menggunakan primer tebusan kelembapan supaya mortar boleh disapu ke atas konkrit baharu sebaik sahaja ia cukup keras, bertindak sebagai perapat kelembapan." },
        { q: "Adakah ia tahan kimia kilang?", a: "Ya. Sistem mortar screed dengan topcoat polyurethane alifatik menahan minyak, pelarut dan bahan kimia industri dengan baik, sesuai untuk lantai kilang dan gudang." },
        { q: "Berapa lama sebelum forklift boleh digunakan semula?", a: "Kenderaan berat dibenarkan selepas 72 jam; trafik forklift berterusan disyorkan selepas 7 hari apabila rintangan kimia penuh tercapai." },
      ],
      metaTitle: "Mortar Screed Tugas Berat KL & Selangor | Harga Dari RM38/sq ft",
      metaDesc: "Mortar screed epoxy tugas berat 5–10mm untuk gudang, kilang dan zon forklift di KL & Selangor. Tahan impak, tahan kimia, perapat kelembapan. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "重型环氧砂浆镘涂",
      tagline: "5–10毫米手工镘涂环氧砂浆，适用于仓库、工厂与叉车通道。",
      description:
        "重型环氧砂浆镘涂是最厚的环氧系统（5–10毫米），专为承受重型交通的工业地面设计——仓库、工厂、物流中心与叉车通道。高标号环氧砂浆以手工镘刀摊铺，形成坚固、抗冲击、耐刮擦并能抵御强化学腐蚀的整体表面。适用于重型工具坠落、钢制托盘搬运与工业推车频繁使用的区域，也可作为新混凝土防潮层。每道工序包含金刚石打磨、防潮底漆、砂浆镘涂与两道脂肪族聚氨酯面漆。",
      highlights: [
        "5–10毫米厚度，承受重型工具冲击与叉车交通",
        "抗强化学腐蚀，适合工厂与仓库",
        "整体无缝表面，无薄弱接缝",
        "可作为新混凝土防潮层",
        "紫外稳定抗刮面漆，适用于车道",
      ],
      process: [
        { step: "01", title: "基面评估", desc: "我们测量混凝土强度、含水率与交通荷载，以选择5–10毫米合适厚度。" },
        { step: "02", title: "金刚石打磨", desc: "金刚石打磨至CSP 3–4处理度，裂缝与空鼓以环氧砂浆填补。" },
        { step: "03", title: "防潮底漆", desc: "涂刷专用环氧底漆，阻隔新浇或潮湿混凝土返潮。" },
        { step: "04", title: "砂浆镘涂", desc: "高标号环氧砂浆以手工镘刀摊铺至均匀5–10毫米厚度。" },
        { step: "05", title: "面漆与固化", desc: "固化后涂两道脂肪族聚氨酯面漆，提供最大抗刮与抗化学性能。" },
      ],
      faqs: [
        { q: "重型环氧砂浆有多厚？", a: "厚度在5–10毫米间按荷载选择：轻型叉车通道约6毫米，重型工具坠落与持续重载区可达10毫米，具体于现场勘察时确认。" },
        { q: "可以在新混凝土上施工吗？", a: "可以。我们采用防潮底漆，待新混凝土达到足够硬度后即可镘涂砂浆，并兼作防潮层。" },
        { q: "它能耐受工厂化学品吗？", a: "能。环氧砂浆配脂肪族聚氨酯面漆可良好抵御油品、溶剂与工业化学品，适合工厂与仓库地面。" },
        { q: "叉车多久可重新通行？", a: "重型车辆72小时后可通行；建议7天达到完全耐化学性后再进行持续叉车作业。" },
      ],
      metaTitle: "吉隆坡重型环氧砂浆镘涂 | RM38/sq ft起",
      metaDesc: "吉隆坡与雪兰莪5–10毫米重型环氧砂浆镘涂，适用于仓库、工厂与叉车通道。抗冲击、耐化学、防潮。WhatsApp免费报价。",
    },
  },
  "epoxy-flooring/epoxy-floor-repair-and-recoating": {
    ms: {
      name: "Pembaikan & Salutan Semula Lantai Epoxy",
      tagline: "Mengisar intan epoxy sedia ada, membaiki kawasan rosak dan menyapu primer + topcoat baharu.",
      description:
        "Jika lantai epoxy sedia ada mengelupas, merekah atau kusam, kami boleh menyelamatkannya tanpa mengalih keseluruhan lapisan. Proses bermula dengan pengisaran intan untuk membuang lapisan lama yang longgar dan mencapai profil yang kasar untuk lekatan baharu. Kawasan rosak — gelembung, retakan atau lubang — dibaiki dengan mortar epoxy sebelum primer menembus dan topcoat polyurethane alifatik baharu disapu. Ini memulihkan rupa licin cermin dan perlindungan kimia pada sebahagian kecil daripada kos pemasangan baharu. Sesuai untuk garaj, bilik pameran dan dapur yang epoxy asalnya masih melekat dengan baik pada konkrit.",
      highlights: [
        "Kos lebih rendah daripada pemasangan baharu sepenuhnya",
        "Pengisaran intan membuang lapisan longgar dan mencapai lekatan baharu",
        "Retakan, gelembung dan lubang dibaiki dengan mortar epoxy",
        "Topcoat UV-stabil memulihkan kilauan cermin",
        "Selesai lebih pantas dengan gangguan minimum",
      ],
      process: [
        { step: "01", title: "Penilaian & Ujian Lekatan", desc: "Kami memeriksa epoxy sedia ada — retakan, gelembung, kawasan longgar — dan menguji lekatan pada konkrit." },
        { step: "02", title: "Pengisaran Intan", desc: "Pengisar intan membuang lapisan lama yang longgar dan mencapai profil kasar untuk lekatan baharu." },
        { step: "03", title: "Baiki Kawasan Rosak", desc: "Retakan, gelembung dan lubang diisi dengan mortar epoxy supaya permukaan rata sebelum salutan." },
        { step: "04", title: "Primer Menembus", desc: "Primer epoxy disapu untuk mengikat lapisan lama dengan topcoat baharu." },
        { step: "05", title: "Topcoat Baharu", desc: "Dua lapisan topcoat polyurethane alifatik disapu untuk memulihkan rintangan calar dan kimia." },
      ],
      faqs: [
        { q: "Bilakah lantai epoxy perlu disalut semula?", a: "Apabila ia menunjukkan pengelupasan, retakan, gelembung atau kilauan pudar, biasanya selepas 7–10 tahun penggunaan. Jika epoxy asal masih melekat erat pada konkrit, penyambungan semula jauh lebih menjimatkan daripada pasang baharu." },
        { q: "Bolehkah epoxy lama yang menguning diselamatkan?", a: "Ya. Kami mengisar intan lapisan lama, membaiki kerosakan, kemudian menyapu topcoat polyurethane alifatik stabil UV yang jernih — mengembalikan rupa baharu tanpa menguning." },
        { q: "Adakah perlu mengalih jubin atau lapisan lama?", a: "Tidak untuk epoxy sedia ada. Kami mengisar dan menyambung terus di atasnya. Jika ada jubin asas, ia perlu dibuang dahulu supaya epoxy melekat pada konkrit." },
        { q: "Berapa cepat ia boleh digunakan semula?", a: "Kebanyakan kerja penyambungan semula selesai dalam 2–3 hari; trafik kaki selepas 24 jam, kenderaan selepas 72 jam." },
      ],
      metaTitle: "Pembaikan & Salutan Semula Lantai Epoxy KL & Selangor | Dari RM14/sq ft",
      metaDesc: "Pembaikan dan salutan semula lantai epoxy di KL & Selangor. Pengisaran intan, baiki retakan/gelembung, topcoat UV-stabil. Lebih menjimatkan daripada pasang baharu. Sebut harga percuma di WhatsApp.",
    },
    zh: {
      name: "环氧地坪修补与重涂",
      tagline: "金刚石打磨旧环氧，修补损坏区域并重涂底漆与面漆。",
      description:
        "若既有环氧地面出现起皮、开裂或失去光泽，我们可在不铲除整层的情况下修复。流程始于金刚石打磨，去除松动旧层并形成粗糙处理度以利新层附着。损坏区域——气泡、裂缝或孔洞——以环氧砂浆修补后，再涂渗透底漆与新的脂肪族聚氨酯面漆。这能以远低于重新施工的成本恢复镜面外观与化学防护，适用于原有环氧仍与混凝土附着良好的车库、展厅与厨房。",
      highlights: [
        "成本远低于整体重新施工",
        "金刚石打磨去除松动层并形成新附着力",
        "裂缝、气泡与孔洞以环氧砂浆修补",
        "紫外稳定面漆恢复镜面光泽",
        "完工更快、打扰更小",
      ],
      process: [
        { step: "01", title: "评估与附着测试", desc: "我们检查既有环氧的裂缝、气泡与松动区域，并测试其与混凝土的附着力。" },
        { step: "02", title: "金刚石打磨", desc: "金刚石打磨去除松动旧层，形成粗糙处理度以利新附着。" },
        { step: "03", title: "修补损坏区", desc: "以环氧砂浆填补裂缝、气泡与孔洞，使表面平整后再涂覆。" },
        { step: "04", title: "渗透底漆", desc: "涂刷环氧底漆，使旧层与新面漆结合。" },
        { step: "05", title: "新面漆", desc: "涂两道脂肪族聚氨酯面漆，恢复抗刮与抗化学性能。" },
      ],
      faqs: [
        { q: "环氧地坪何时需要重涂？", a: "当出现起皮、开裂、气泡或光泽褪去，通常使用7–10年后。若原环氧仍牢固附着于混凝土，重涂远比新做划算。" },
        { q: "发黄的旧环氧能救吗？", a: "能。我们打磨旧层、修补损坏，再罩以清澈的紫外稳定脂肪族聚氨酯面漆，恢复如新且不发黄。" },
        { q: "需要铲除瓷砖或旧层吗？", a: "既有环氧无需铲除，可直接打磨重涂。若底层为瓷砖，则需先铲除以使环氧附着混凝土。" },
        { q: "多久可重新使用？", a: "多数重涂工程2–3天完工；24小时后可步行，72小时后可行车。" },
      ],
      metaTitle: "吉隆坡环氧地坪修补与重涂 | RM14/sq ft起",
      metaDesc: "吉隆坡与雪兰莪环氧地坪修补与重涂。金刚石打磨、补裂缝气泡、紫外稳定面漆。比重新施工更省。WhatsApp免费报价。",
    },
  },

  /* ── CCTV ────────────────────────────────────────────────────────────── */
  "cctv/condo-wi-fi-cctv-package-4-cameras": {
    ms: {
      name: "Pakej CCTV Wi-Fi Kondominium (4 Kamera)",
      tagline: "Empat kamera Wi-Fi 4MP untuk kondominium 1,000–1,500 kaki persegi, lengkap dengan storan awan, aplikasi telefon dan tontonan jauh.",
      description:
        "Pakej ini direka untuk kondominium yang memerlukan liputan pintu masuk, ruang tamu dan kawasan dalaman utama tanpa menarik kabel rangkaian ke setiap kamera. Kami menyemak kekuatan Wi-Fi di setiap titik, merancang sudut yang mengurangkan titik buta, memasang empat kamera 4MP dengan saluran kuasa yang kemas, kemudian mengkonfigurasi storan awan dan aplikasi mudah alih. Tontonan langsung, main semula rakaman dan pemberitahuan gerakan diuji pada telefon anda sebelum serahan. Untuk kamera yang menghadap koridor atau kawasan bersama, kedudukan hanya dimuktamadkan selepas keperluan pengurusan kondominium dan privasi jiran disemak. Harga bermula RM2,200 dan pemasangan disokong jaminan kamera serta kerja 12 bulan.",
      highlights: [
        "Empat kamera Wi-Fi 4MP untuk kondominium 1,000–1,500 kaki persegi",
        "Semakan liputan Wi-Fi dan pelan sudut kamera untuk mengurangkan titik buta",
        "Saluran kuasa diskret—kamera tanpa wayar masih dipasang dengan bekalan kuasa yang kemas",
        "Konfigurasi storan awan, aplikasi iOS/Android, tontonan jauh dan amaran gerakan",
        "Serahan kata laluan, foto kedudukan dan jaminan kamera serta pemasangan 12 bulan",
      ],
      process: [
        { step: "01", title: "Semakan Unit & Wi-Fi", desc: "Kami menyemak pelan unit, lokasi pintu masuk, soket kuasa dan kekuatan isyarat Wi-Fi pada setiap kedudukan cadangan." },
        { step: "02", title: "Pelan Kamera & Kelulusan", desc: "Empat sudut liputan dicadangkan; kamera yang mungkin melihat kawasan bersama disemak terhadap syarat pengurusan dan privasi." },
        { step: "03", title: "Pemasangan Kemas", desc: "Kamera dipasang kukuh dan kabel kuasa disorok dalam saluran diskret tanpa merosakkan kemasan unit." },
        { step: "04", title: "Awan & Aplikasi", desc: "Storan awan, akaun pemilik, tontonan langsung, main semula dan pemberitahuan gerakan dikonfigurasi pada telefon anda." },
        { step: "05", title: "Ujian & Serahan", desc: "Kami menguji imej siang dan malam, capaian jauh serta rakaman, lalu menyerahkan kata laluan, foto kedudukan dan dokumen jaminan." },
      ],
      faqs: [
        { q: "Berapakah harga pakej empat kamera untuk kondominium?", a: "Harga bermula RM2,200 untuk empat kamera Wi-Fi 4MP, pemasangan, saluran kuasa, persediaan aplikasi dan konfigurasi storan awan. Yuran langganan awan, jika dipilih, dinyatakan berasingan dalam sebut harga." },
        { q: "Adakah kamera Wi-Fi benar-benar tidak memerlukan kabel?", a: "Ia tidak memerlukan kabel data CAT6 ke NVR, tetapi setiap kamera tetap memerlukan bekalan kuasa. Kami menghala kabel kuasa melalui saluran diskret supaya pemasangan kelihatan kemas." },
        { q: "Boleh kamera dipasang menghadap koridor kondominium?", a: "Kamera dalam unit sendiri biasanya dibenarkan, tetapi koridor ialah kawasan bersama. Kami membantu menyediakan spesifikasi dan pelan kedudukan; pemasangan hanya diteruskan selepas syarat atau kelulusan pengurusan dipenuhi." },
        { q: "Boleh saya melihat rakaman semasa berada di luar negara?", a: "Ya. Selepas aplikasi dipasangkan, anda boleh melihat siaran langsung dan main semula dari mana-mana lokasi selagi internet rumah dan telefon berfungsi. Kami menguji capaian jauh sebelum serahan." },
      ],
      metaTitle: "Pakej CCTV Wi-Fi Kondominium KL | 4 Kamera RM2,200",
      metaDesc: "Pakej 4 kamera CCTV Wi-Fi 4MP untuk kondominium KL & Selangor. Storan awan, aplikasi telefon, tontonan jauh, pemasangan kemas dan jaminan 12 bulan.",
    },
    zh: {
      name: "公寓 Wi-Fi CCTV 套餐（4台）",
      tagline: "为1,000–1,500平方英尺公寓配置4台4MP Wi-Fi摄像头，包含云端存储、手机App与远程查看设置。",
      description:
        "本套餐适合希望覆盖大门、客厅与主要室内区域，又不想为每台摄像头铺设网线的公寓住户。我们先检测每个点位的Wi-Fi强度，规划减少盲区的拍摄角度，再安装4台4MP摄像头，并以整齐线槽处理电源线。安装后配置云端存储与手机App，在您的手机上测试实时画面、录像回放及移动侦测通知。若摄像头可能拍到走廊或其他公共区域，我们会先核对公寓管理处规定与邻居隐私要求，再确认最终位置。套餐从RM2,200起，摄像头与安装工程享12个月书面保修。",
      highlights: [
        "4台4MP Wi-Fi摄像头，适合1,000–1,500平方英尺公寓",
        "逐点检测Wi-Fi信号并规划拍摄角度，尽量减少监控盲区",
        "电源线采用隐蔽线槽整理——无线摄像头仍需稳定供电",
        "配置云端存储、iOS/Android App、远程查看与移动侦测通知",
        "移交密码、点位照片，并提供12个月摄像头与安装保修",
      ],
      process: [
        { step: "01", title: "户型与网络检查", desc: "检查户型、出入口、电源插座，并在每个拟定点位测试Wi-Fi信号强度。" },
        { step: "02", title: "布点与审批确认", desc: "提出4个覆盖角度；如可能拍到公共区域，先核对管理处规定与隐私要求。" },
        { step: "03", title: "整洁安装", desc: "牢固安装摄像头，并以隐蔽线槽整理电源线，尽量不破坏室内饰面。" },
        { step: "04", title: "云端与App设置", desc: "在您的手机上配置云端存储、业主账号、实时画面、回放及移动侦测通知。" },
        { step: "05", title: "测试与交付", desc: "测试日夜画质、远程连接与录像，并移交密码、点位照片及保修文件。" },
      ],
      faqs: [
        { q: "公寓4台摄像头套餐多少钱？", a: "套餐从RM2,200起，包含4台4MP Wi-Fi摄像头、安装、电源线槽、App设置与云端存储配置。若选择收费云端方案，订阅费会在报价中另列。" },
        { q: "Wi-Fi摄像头真的完全不用电线吗？", a: "它不需要从NVR铺设CAT6数据线，但每台摄像头仍需供电。我们会以隐蔽线槽整理电源线，让安装保持整洁。" },
        { q: "摄像头可以对着公寓走廊吗？", a: "自己单位内安装通常没有问题，但走廊属于公共区域。我们可协助准备规格与布点图，须符合管理处要求或取得批准后才施工。" },
        { q: "人在国外可以查看录像吗？", a: "可以。App配对后，只要家中网络和手机网络正常，就能在外地查看实时画面与录像回放。交付前我们会实际测试远程连接。" },
      ],
      metaTitle: "吉隆坡公寓 Wi-Fi CCTV 套餐 | 4台 RM2,200起",
      metaDesc: "吉隆坡与雪兰莪公寓4台4MP Wi-Fi监控套餐，含云端存储配置、手机App、远程查看、整洁安装及12个月保修。",
    },
  },
  "cctv/landed-house-poe-cctv-8-cameras": {
    ms: {
      name: "CCTV PoE Rumah Landed (8 Kamera)",
      tagline: "Sistem lapan kamera PoE 4MP dengan NVR 8 saluran, HDD 2TB dan rakaman berterusan sekitar satu minggu untuk rumah landed.",
      description:
        "Pakej PoE lapan kamera memberikan liputan stabil 24/7 untuk rumah teres, semi-D dan banglo tanpa bergantung pada sambungan Wi-Fi setiap kamera. Kami meninjau pintu depan dan belakang, garaj, pagar sisi, laluan kereta serta perimeter, kemudian menyediakan pelan kedudukan yang mengutamakan wajah dan laluan masuk sambil mengurangkan titik buta. Setiap kamera bullet 4MP menerima kuasa dan data melalui satu kabel CAT6 ke NVR 8 saluran. NVR dengan HDD pengawasan 2TB dikonfigurasi untuk kira-kira satu minggu rakaman berterusan, bergantung pada kadar bit dan tetapan gerakan. Kabel dilalukan melalui rongga siling, konduit atau saluran yang kemas, dan aplikasi telefon disediakan untuk tontonan jauh. Harga bermula RM4,200 dengan jaminan kamera serta pemasangan 12 bulan.",
      highlights: [
        "Lapan kamera bullet PoE 4MP dengan sambungan data dan kuasa melalui CAT6",
        "NVR 8 saluran dan HDD pengawasan 2TB untuk sekitar satu minggu rakaman berterusan",
        "Pelan liputan pintu, garaj, pagar, laluan kereta dan perimeter berdasarkan tinjauan tapak",
        "Laluan kabel tersembunyi melalui rongga siling, konduit atau saluran yang kemas",
        "Aplikasi iOS/Android, tontonan jauh, serahan kata laluan dan jaminan 12 bulan",
      ],
      process: [
        { step: "01", title: "Tinjauan Keselamatan", desc: "Kami memeriksa titik masuk, laluan, ketinggian pemasangan, pencahayaan malam dan lokasi selamat untuk NVR." },
        { step: "02", title: "Pelan 8 Kamera", desc: "Pelan bertanda menunjukkan sudut setiap kamera, laluan CAT6, lokasi NVR, kapasiti storan dan sebarang akses kerja tinggi." },
        { step: "03", title: "Laluan CAT6", desc: "Kabel kuprum CAT6 ditarik melalui rongga siling, konduit atau saluran dan dilabel pada kedua-dua hujung untuk penyelenggaraan." },
        { step: "04", title: "Pemasangan & NVR", desc: "Lapan kamera dipasang dan difokuskan; NVR 8 saluran serta HDD 2TB dikonfigurasi untuk rakaman berterusan." },
        { step: "05", title: "Aplikasi & Serahan", desc: "Tontonan langsung, main semula, waktu sistem dan capaian jauh diuji sebelum foto kedudukan, kata laluan dan jaminan diserahkan." },
      ],
      faqs: [
        { q: "Berapakah harga sistem PoE lapan kamera?", a: "Harga bermula RM4,200 untuk 8 kamera PoE 4MP, NVR 8 saluran, HDD 2TB, laluan kabel standard, pemasangan dan persediaan aplikasi. Akses tinggi atau laluan kabel luar biasa dinyatakan berasingan selepas tinjauan." },
        { q: "Mengapa PoE lebih sesuai untuk rumah landed?", a: "PoE menggunakan satu kabel CAT6 untuk kuasa dan data, tidak bergantung pada liputan Wi-Fi setiap kamera dan membolehkan rakaman tempatan 24/7 ke NVR tanpa langganan awan wajib." },
        { q: "Adakah HDD 2TB benar-benar menyimpan rakaman seminggu?", a: "Ia disasarkan untuk kira-kira satu minggu rakaman berterusan bagi lapan kamera 4MP. Tempoh sebenar berubah mengikut kadar bit, bilangan bingkai, pemampatan dan sama ada rakaman gerakan digunakan." },
        { q: "Boleh sistem terus berfungsi semasa gangguan elektrik?", a: "Sistem standard berhenti apabila bekalan elektrik terputus. UPS untuk NVR dan suis PoE boleh ditambah sebagai pilihan supaya sistem terus merakam untuk tempoh sandaran yang ditetapkan." },
      ],
      metaTitle: "CCTV PoE Rumah Landed KL | 8 Kamera Dari RM4,200",
      metaDesc: "Sistem CCTV PoE 8 kamera 4MP untuk rumah landed KL & Selangor. NVR 8 saluran, HDD 2TB, CAT6 tersembunyi, aplikasi telefon dan jaminan 12 bulan.",
    },
    zh: {
      name: "有地住宅 PoE CCTV（8台）",
      tagline: "为有地住宅安装8台4MP PoE摄像头、8路NVR与2TB硬盘，提供约一周连续录像。",
      description:
        "8台PoE监控套餐为排屋、半独立式住宅与独立洋房提供稳定的24小时覆盖，每台摄像头无需依赖独立Wi-Fi连接。我们会勘察前后门、车库、侧门、车道与外围，规划既能捕捉人脸及出入路线、又尽量减少盲区的点位。每台4MP枪式摄像头通过一条CAT6网线同时传输电力与数据，统一连接至8路NVR。2TB监控专用硬盘按连续录像配置，实际保存时间会随码率与移动侦测设置变化，目标约为一周。线缆经吊顶空腔、线管或整齐线槽敷设，并设置手机App供远程查看。整套系统从RM4,200起，摄像头与安装享12个月书面保修。",
      highlights: [
        "8台4MP PoE枪式摄像头，以CAT6同时传输数据与电力",
        "8路NVR配2TB监控硬盘，目标约一周连续录像",
        "按现场勘察规划大门、车库、侧门、车道与外围覆盖",
        "线缆经吊顶空腔、线管或整齐线槽隐蔽敷设",
        "配置iOS/Android App、远程查看、密码移交及12个月保修",
      ],
      process: [
        { step: "01", title: "安防现场勘察", desc: "检查各出入口、通道、安装高度、夜间照明，并选择安全隐蔽的NVR位置。" },
        { step: "02", title: "8点位方案", desc: "点位图列明每台摄像头角度、CAT6路线、NVR位置、存储容量与高处作业要求。" },
        { step: "03", title: "CAT6布线", desc: "纯铜CAT6网线经吊顶空腔、线管或线槽敷设，两端编号，方便日后检修。" },
        { step: "04", title: "安装与NVR配置", desc: "安装并调校8台摄像头，把8路NVR与2TB硬盘配置为连续录像。" },
        { step: "05", title: "App与交付", desc: "测试实时画面、回放、系统时间与远程连接，再移交点位照片、密码及保修文件。" },
      ],
      faqs: [
        { q: "8台PoE监控系统多少钱？", a: "从RM4,200起，包含8台4MP PoE摄像头、8路NVR、2TB硬盘、标准布线、安装及App设置。高处作业或特殊布线路线会在勘察后另列。" },
        { q: "为什么有地住宅更适合PoE？", a: "PoE以一条CAT6同时传输电力与数据，不依赖每个点位的Wi-Fi信号，并可24小时录到本地NVR，无需强制订阅云端服务。" },
        { q: "2TB硬盘一定能保存一周吗？", a: "本套餐以8台4MP摄像头约一周连续录像为配置目标。实际天数取决于码率、帧率、压缩方式以及是否启用移动侦测录像。" },
        { q: "停电时系统还能录像吗？", a: "标准系统在断电时会停止。可选配为NVR与PoE交换机供电的UPS，按所选容量在停电期间维持一段时间的录像。" },
      ],
      metaTitle: "吉隆坡有地住宅 PoE CCTV | 8台 RM4,200起",
      metaDesc: "吉隆坡与雪兰莪有地住宅8台4MP PoE监控系统，含8路NVR、2TB硬盘、隐蔽CAT6布线、手机App及12个月保修。",
    },
  },
  "cctv/single-camera-add-on": {
    ms: {
      name: "Tambahan Satu Kamera CCTV",
      tagline: "Tambah satu kamera pada sistem Hikvision, Dahua, Ezviz atau Tapo sedia ada, termasuk semakan keserasian, kabel, pemasangan dan pasangan aplikasi.",
      description:
        "Tambahan satu kamera sesuai apabila sistem sedia ada masih baik tetapi terdapat pintu, garaj, stor atau sudut baharu yang belum diliputi. Sebelum menawarkan kamera, kami menyemak jenama dan model DVR/NVR, baki saluran, resolusi yang disokong, jenis kabel, bekalan kuasa dan ruang storan supaya unit baharu benar-benar serasi. Kamera kemudian dipasang pada sudut yang dipersetujui, kabel CAT6 atau kuasa dilalukan dengan kemas, dan paparan ditambah ke perakam serta aplikasi telefon. Kami menguji imej siang/malam, rakaman dan main semula—bukan sekadar memasang kamera yang hanya menunjukkan paparan langsung. Harga bermula RM420 untuk pemasangan standard; kerja kabel panjang, akses tinggi atau peningkatan storan akan dinyatakan dalam sebut harga.",
      highlights: [
        "Semakan jenama, model, baki saluran, resolusi dan storan sebelum kamera dipilih",
        "Sokongan sistem biasa Hikvision, Dahua, Ezviz dan TP-Link Tapo yang serasi",
        "Kabel, pendakap dan pemasangan standard termasuk dari RM420",
        "Kamera ditambah ke DVR/NVR dan aplikasi telefon—bukan paparan berasingan",
        "Ujian imej malam, rakaman, main semula dan tontonan jauh sebelum serahan",
      ],
      process: [
        { step: "01", title: "Audit Sistem Sedia Ada", desc: "Kami merekod jenama, model, jenis kamera, baki saluran, resolusi perakam, kabel dan keadaan storan." },
        { step: "02", title: "Pengesahan Keserasian", desc: "Kamera yang sepadan dipilih dan kos kabel, pendakap, akses tinggi atau peningkatan HDD dijelaskan sebelum kerja." },
        { step: "03", title: "Laluan & Pemasangan", desc: "Kabel CAT6, koaksial atau kuasa yang sesuai dilalukan dengan kemas sebelum kamera dipasang pada sudut liputan baharu." },
        { step: "04", title: "Tambah Ke Sistem", desc: "Kamera didaftarkan pada DVR/NVR atau akaun awan dan ditambah ke aplikasi telefon pemilik." },
        { step: "05", title: "Ujian Rakaman", desc: "Kami mengesahkan paparan siang/malam, cap masa, rakaman, main semula, notifikasi dan capaian jauh." },
      ],
      faqs: [
        { q: "Berapakah harga untuk menambah satu kamera CCTV?", a: "Harga bermula RM420 termasuk kamera yang serasi, pemasangan standard, kabel dan pasangan aplikasi. Jarak kabel, ketinggian, jenis kamera dan keperluan penukar atau storan boleh mengubah harga akhir." },
        { q: "Boleh jenama kamera berbeza ditambah ke NVR saya?", a: "Kadangkala boleh melalui protokol yang disokong, tetapi tidak semua fungsi akan tersedia. Kami menyemak model tepat dahulu dan mengutamakan kamera yang serasi sepenuhnya dengan perakam anda." },
        { q: "Bagaimana jika semua saluran NVR sudah digunakan?", a: "Kami akan terangkan pilihan sebelum pemasangan—menggantikan satu titik, menaik taraf kepada perakam lebih banyak saluran, atau menggunakan kamera awan berasingan jika itu lebih praktikal." },
        { q: "Adakah menambah kamera mengurangkan tempoh rakaman?", a: "Ya, satu kamera tambahan menggunakan ruang HDD dan boleh memendekkan hari simpanan. Kami mengira anggaran tempoh baharu dan mencadangkan peningkatan HDD jika perlu." },
      ],
      metaTitle: "Tambah Satu Kamera CCTV KL & Selangor | Dari RM420",
      metaDesc: "Tambah kamera Hikvision, Dahua, Ezviz atau Tapo pada sistem CCTV sedia ada. Semakan keserasian, kabel, pemasangan, aplikasi dan ujian rakaman dari RM420.",
    },
    zh: {
      name: "单台 CCTV 摄像头加装",
      tagline: "为现有Hikvision、Dahua、Ezviz或Tapo系统加装一台摄像头，包含兼容性检查、布线、安装与App配对。",
      description:
        "当现有监控系统运作良好，但大门、车库、储藏室或新区域仍有盲区时，可以单独加装一台摄像头。报价前我们会检查DVR/NVR品牌型号、剩余通道、支持分辨率、线缆类型、供电与硬盘空间，确保新摄像头真正兼容。确认后在约定角度安装，整齐敷设CAT6或电源线，并把新画面加入录像机与业主手机App。我们会测试日夜画质、实际录像与回放，而不是只安装一台仅能看实时画面的摄像头。标准加装从RM420起；长距离布线、高处作业或硬盘升级会在报价中清楚列明。",
      highlights: [
        "选型前检查品牌型号、剩余通道、分辨率与硬盘容量",
        "支持兼容的Hikvision、Dahua、Ezviz与TP-Link Tapo常见系统",
        "RM420起包含标准线缆、支架与安装",
        "把新摄像头加入DVR/NVR与手机App，而非独立显示",
        "交付前测试夜间画面、录像、回放及远程查看",
      ],
      process: [
        { step: "01", title: "现有系统检查", desc: "记录品牌、型号、摄像头制式、剩余通道、录像机分辨率、线缆及硬盘状态。" },
        { step: "02", title: "兼容性确认", desc: "选择匹配摄像头，并在施工前说明线缆、支架、高处作业或硬盘升级费用。" },
        { step: "03", title: "布线与安装", desc: "按系统敷设CAT6、同轴或电源线，再把摄像头固定在新增覆盖角度。" },
        { step: "04", title: "接入系统", desc: "将摄像头注册到DVR/NVR或云端账号，并加入业主手机App。" },
        { step: "05", title: "录像测试", desc: "确认日夜画面、时间戳、录像、回放、通知与远程连接均正常。" },
      ],
      faqs: [
        { q: "加装一台CCTV摄像头多少钱？", a: "从RM420起，包含兼容摄像头、标准安装、线缆与App配对。线长、安装高度、摄像头类型以及转换器或存储需求会影响最终价格。" },
        { q: "不同品牌摄像头能接入我的NVR吗？", a: "部分型号可通过共同协议接入，但未必保留所有功能。我们会先核对准确型号，并优先选择与录像机完全兼容的摄像头。" },
        { q: "如果NVR通道已经用满怎么办？", a: "施工前会说明可选方案：替换一个点位、升级更多通道的录像机，或在合适情况下采用独立云端摄像头。" },
        { q: "多一台摄像头会缩短录像保存天数吗？", a: "会。新增摄像头会占用硬盘容量，可能缩短保存天数。我们会估算新的录像周期，并在需要时建议升级硬盘。" },
      ],
      metaTitle: "吉隆坡单台 CCTV 摄像头加装 | RM420起",
      metaDesc: "为现有Hikvision、Dahua、Ezviz或Tapo监控系统加装摄像头，含兼容检查、布线、安装、App配对与录像测试，RM420起。",
    },
  },
  "cctv/cctv-system-health-check-and-relocation": {
    ms: {
      name: "Pemeriksaan Kesihatan & Pemindahan Sistem CCTV",
      tagline: "Diagnosis di tapak untuk kamera, DVR/NVR, HDD, kuasa, rangkaian dan aplikasi, termasuk pilihan membersih, menyasar semula atau memindahkan kamera.",
      description:
        "Perkhidmatan ini membantu apabila CCTV menunjukkan paparan langsung tetapi tidak merakam, rakaman hilang, aplikasi tidak boleh disambung, imej kabur, atau kamera perlu dipindahkan selepas pengubahsuaian. Juruteknik memeriksa bekalan kuasa, kabel dan penyambung, status rangkaian, tetapan DVR/NVR, kesihatan HDD, perisian tegar, cap masa dan jadual rakaman. Lensa dibersihkan dan sudut boleh dilaraskan semula sebagai sebahagian daripada lawatan. Jika pemindahan diperlukan, kami menilai laluan kabel dan bidang pandangan baharu sebelum memasang semula kamera serta menguji rakaman. Lawatan bermula RM220; alat ganti, kabel tambahan, kerja akses tinggi atau pemulihan data dibincangkan dahulu dan tidak dianggap termasuk secara automatik.",
      highlights: [
        "Diagnosis kamera, DVR/NVR, HDD, bekalan kuasa, kabel, rangkaian dan aplikasi",
        "Pembersihan lensa, pelarasan fokus/sudut dan pembetulan cap masa atau jadual rakaman",
        "Ujian main semula sebenar untuk mengesahkan sistem merakam—bukan paparan langsung sahaja",
        "Pemindahan kamera dengan semakan bidang pandangan dan laluan kabel baharu",
        "Laporan dapatan serta sebut harga berasingan sebelum alat ganti atau peningkatan dipasang",
      ],
      process: [
        { step: "01", title: "Catat Simptom", desc: "Kami merekod kamera yang terjejas, bila rakaman terakhir berjaya, mesej ralat aplikasi dan sebarang perubahan kuasa atau rangkaian." },
        { step: "02", title: "Ujian Perkakasan", desc: "Bekalan kuasa, kabel, penyambung, port, DVR/NVR dan status kesihatan HDD diuji secara sistematik." },
        { step: "03", title: "Semak Tetapan", desc: "Kami menyemak alamat rangkaian, perisian tegar, waktu sistem, jadual rakaman, storan dan pasangan aplikasi." },
        { step: "04", title: "Servis Atau Pindah", desc: "Lensa dibersih dan kamera disasar semula; jika dipindah, kabel serta pendakap dipasang pada lokasi baharu yang dipersetujui." },
        { step: "05", title: "Sahkan & Lapor", desc: "Paparan langsung, rakaman, main semula dan capaian jauh diuji sebelum dapatan serta cadangan kos diserahkan." },
      ],
      faqs: [
        { q: "Apakah yang termasuk dalam pemeriksaan CCTV dari RM220?", a: "Ia meliputi lawatan diagnosis, pemeriksaan kuasa/kabel/rangkaian, semakan DVR/NVR dan HDD, tetapan rakaman serta aplikasi, dan pelarasan asas. Alat ganti atau kabel pemindahan tambahan disebutharga dahulu." },
        { q: "Boleh rakaman yang hilang dipulihkan?", a: "Kadangkala, bergantung pada keadaan HDD dan sama ada data telah ditindih. Kami menilai storan terlebih dahulu; pemulihan data profesional ialah kerja berasingan dan kejayaan tidak boleh dijamin." },
        { q: "Kenapa ada paparan langsung tetapi tiada rakaman?", a: "Punca biasa termasuk HDD gagal atau penuh, jadual rakaman salah, cap masa tidak tepat, saluran tidak ditetapkan untuk merekod, atau masalah perisian tegar. Kami menguji main semula selepas pembaikan." },
        { q: "Boleh kamera dipindahkan selepas renovasi?", a: "Ya. Kami menilai sudut baharu, panjang dan jenis kabel, permukaan pemasangan serta liputan malam. Harga akhir bergantung pada jarak pemindahan, akses dan sama ada kabel lama boleh digunakan semula." },
      ],
      metaTitle: "Pemeriksaan & Pemindahan CCTV KL | Dari RM220",
      metaDesc: "Diagnosis CCTV di KL & Selangor: kamera, DVR/NVR, HDD, kabel, rangkaian dan aplikasi. Pembersihan, sasaran semula atau pemindahan dari RM220.",
    },
    zh: {
      name: "CCTV 系统检查与移机",
      tagline: "上门检测摄像头、DVR/NVR、硬盘、电源、网络与App，并可进行清洁、重新调校或移机。",
      description:
        "当CCTV只有实时画面却不录像、录像丢失、App无法连接、画面模糊，或装修后需要移动摄像头时，可预约本服务。技术人员会逐项检查电源、线缆与接头、网络状态、DVR/NVR设置、硬盘健康、固件、系统时间及录像计划。上门期间可清洁镜头，并进行基本对焦与角度调整。若需要移机，我们会先评估新点位视野与布线路线，再重新安装并测试实际录像。上门检查从RM220起；更换零件、增加线缆、高处作业或数据恢复均会先说明报价，不会默认计入基础检查费。",
      highlights: [
        "系统检测摄像头、DVR/NVR、硬盘、电源、线缆、网络与App",
        "清洁镜头、调整焦距与角度，并修正系统时间或录像计划",
        "实际测试录像回放，确认系统不只是能看实时画面",
        "移机前检查新点位视野与布线路线",
        "先提交故障结果与报价，再更换零件或进行升级",
      ],
      process: [
        { step: "01", title: "记录故障现象", desc: "记录受影响摄像头、最后正常录像时间、App错误信息以及近期电源或网络变化。" },
        { step: "02", title: "硬件测试", desc: "按顺序检测电源、线缆、接头、端口、DVR/NVR及硬盘健康状态。" },
        { step: "03", title: "设置检查", desc: "核对网络地址、固件、系统时间、录像计划、存储设置与App配对。" },
        { step: "04", title: "保养或移机", desc: "清洁镜头并重新调校；如需移机，则在约定新位置铺线并安装支架。" },
        { step: "05", title: "验证与报告", desc: "测试实时画面、录像、回放与远程连接，再提交检测结果及费用建议。" },
      ],
      faqs: [
        { q: "RM220起的CCTV检查包含什么？", a: "包含上门诊断、电源/线缆/网络检查、DVR/NVR与硬盘状态、录像及App设置检查和基本调整。零件或移机新增线缆会先另行报价。" },
        { q: "丢失的录像可以恢复吗？", a: "视硬盘状态以及数据是否已被覆盖而定。我们会先评估存储；专业数据恢复属于另项服务，且无法保证一定成功。" },
        { q: "为什么有实时画面却没有录像？", a: "常见原因包括硬盘故障或已满、录像计划设置错误、系统时间不准、通道未启用录像或固件问题。修复后我们会实际测试回放。" },
        { q: "装修后可以移动摄像头吗？", a: "可以。我们会评估新角度、线缆长度与类型、安装表面及夜间覆盖。最终费用取决于移动距离、施工高度及旧线能否继续使用。" },
      ],
      metaTitle: "吉隆坡 CCTV 系统检查与移机 | RM220起",
      metaDesc: "吉隆坡与雪兰莪CCTV故障检测：摄像头、DVR/NVR、硬盘、线缆、网络与App。可清洁、重新调校或移机，RM220起。",
    },
  },

  /* ── WINDOW REPAIR ─────────────────────────────────────────── */
  "window-repair/glass-replacement": {
    ms: {
      name: "Penggantian Kaca Tingkap",
      tagline:
        "Ganti kaca tingkap retak, pecah atau mengurangkan penglihatan dengan kaca jernih, tinted, frosted atau tempered mengikut saiz dan ketebalan asal. Dari RM 200.",
      description:
        "Perkhidmatan penggantian kaca tingkap kami menangani kaca retak, pecah, serpih atau calar teruk yang menjejaskan keselamatan dan pemandangan. Kami memasang kaca jernih, tinted, frosted atau tempered dalam bingkai sedia ada selagi bingkai dalam keadaan baik — jauh lebih murah daripada menukar seluruh tingkap. Kami mengukur bukaan dengan tepat, memilih ketebalan yang betul (biasanya 4mm atau 5mm untuk tingkap kediaman) dan memasang dengan pita glazing, jalur getah serta pengedap silikon tahan cuaca untuk pengedapan kemas tanpa bocor. Untuk rumah landed, kami menawarkan penggantian kecemasan hari sama untuk saiz biasa yang kami bawa dalam van; untuk saiz kustom, kaca tempered atau unit dua lapisan, kami menutup bukaan dengan papan dengan selamat dan kembali dalam 2–5 hari bekerja untuk pemasangan kekal. Kami juga boleh menaik taraf kaca tunggal kepada dua lapisan untuk penebatan bunyi dan haba yang lebih baik.",
      highlights: [
        "Kaca jernih, tinted, frosted atau tempered mengikut keperluan anda",
        "Penggantian kecemasan hari sama untuk rumah landed (saiz biasa dibawa dalam van)",
        "Pemasangan dengan pita glazing, jalur getah dan pengedap silikon tahan cuaca",
        "Menaik taraf kaca tunggal kepada dua lapisan untuk penebatan bunyi dan haba",
        "Ukuran tepat dan pemilihan ketebalan yang betul untuk setiap bukaan",
      ],
      process: [
        { step: "01", title: "Pemeriksaan & Ukuran", desc: "Kami menilai kerosakan, mengukur bukaan dan menentukan jenis serta ketebalan kaca yang sesuai." },
        { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci merangkumi kaca, alat ganti, buruh dan masa tunggu kaca jika kustom diperlukan." },
        { step: "03", title: "Penyingkiran Kaca Selamat", desc: "Kaca pecah atau retak ditanggalkan dengan rapi, serpihan divakum dan bukaan dikedap sementara jika kaca kustom diperlukan." },
        { step: "04", title: "Pemasangan Kaca Baharu", desc: "Kaca baharu dipasang dengan pita glazing, jalur getah dan pengedap silikon, kemudian diselaraskan dalam bingkai." },
        { step: "05", title: "Ujian & Serahan", desc: "Tingkap diuji buka/tutup, pengedapan tahan cuaca dan kebocoran air sebelum kawasan dibersihkan dan diserahkan." },
      ],
      faqs: [
        { q: "Bolehkah anda menggantikan kaca sahaja tanpa menukar seluruh tingkap?", a: "Ya, dalam kebanyakan kes. Selagi bingkai dalam keadaan baik dan saiz betul, kami boleh memasang kaca baharu dalam bingkai sedia ada — jauh lebih murah daripada menggantikan seluruh tingkap. Kami juga boleh menaik taraf kaca tunggal kepada dua lapisan, walaupun ini mungkin memerlukan penukaran bingkai bergantung pada ketebalan asal." },
        { q: "Berapa lama masa untuk menggantikan kaca tingkap?", a: "Untuk saiz biasa (4mm dan 5mm jernih atau tinted) yang kami bawa dalam van, penggantian boleh siap pada hari yang sama. Kaca kustom, tempered atau dua lapisan biasanya mengambil 2–5 hari bekerja selepas fabrikasi di kilang." },
        { q: "Apakah perbezaan antara kaca jernih, tinted, frosted dan tempered?", a: "Kaca jernih ialah pilihan lutsinar standard. Kaca tinted (kelabu, gangsa, hijau) mengurangkan pemanasan matahari 30–40% dan sesuai untuk tingkap menghadap barat. Kaca frosted lut cahaya tetapi memberikan privasi. Kaca tempered ialah kaca keselamatan yang pecah menjadi serpihan kecil tanpa bahaya, sesuai untuk kawasan kanak-kanak dan pintu." },
        { q: "Adakah anda menyediakan perkhidmatan penggantian kaca kecemasan?", a: "Ya, untuk rumah landed. Kami membawa saiz biasa dalam van dan boleh menggantikan kaca pecah di tempat kejadian pada hari yang sama. Untuk saiz kustom, tempered atau dua lapisan, kami menutup bukaan dengan papan dengan selamat dan kembali dalam 2–5 hari bekerja untuk pemasangan kekal." },
      ],
      metaTitle: "Penggantian Kaca Tingkap KL & Selangor | Dari RM 200",
      metaDesc:
        "Ganti kaca tingkap retak atau pecah di KL & Selangor — jernih, tinted, frosted atau tempered. Kecemasan hari sama untuk rumah landed. Dari RM200. WhatsApp untuk sebut harga.",
    },
    zh: {
      name: "窗户玻璃更换",
      tagline:
        "更换开裂、碎裂或影响视线的窗玻璃——白玻、茶色玻、磨砂玻或钢化玻璃，同尺寸同厚度。从 RM 200 起。",
      description:
        "我们的窗玻璃更换服务处理玻璃开裂、碎裂、崩边或严重影响视线的划痕。只要窗框状况良好、尺寸合适，我们就在现有窗框内安装新白玻、茶色玻、磨砂玻或钢化玻璃——这比整扇换窗便宜得多。我们会精确测量开口，选择合适厚度（住宅窗户通常为 4mm 或 5mm），并使用压条胶带、橡胶条和耐候硅酮密封胶安装，确保密封严密不漏水。有地住宅提供当日紧急更换服务，服务车常备常用规格；定制尺寸、钢化玻璃或中空玻璃，我们会先安全封板，2–5 个工作日内回来正式安装。我们还可将单层玻璃升级为中空玻璃，以获得更好的隔音隔热。",
      highlights: [
        "白玻、茶色玻、磨砂玻或钢化玻璃，按需选择",
        "有地住宅当日紧急更换（服务车常备常用规格）",
        "使用压条胶带、橡胶条与耐候硅酮密封胶安装",
        "单层升级中空玻璃，提升隔音与隔热",
        "每个开口精确测量、匹配合适厚度",
      ],
      process: [
        { step: "01", title: "检查与测量", desc: "评估损坏情况，测量开口尺寸，确定合适的玻璃类型与厚度。" },
        { step: "02", title: "透明报价", desc: "逐项报价涵盖玻璃、配件、人工及定制玻璃交期。" },
        { step: "03", title: "安全拆玻璃", desc: "小心拆除碎裂或开裂玻璃，吸净碎屑；定制玻璃前先临时封板。" },
        { step: "04", title: "安装新玻璃", desc: "以压条胶带、橡胶条与硅酮密封胶安装新玻璃，并在窗框内调校。" },
        { step: "05", title: "测试与交付", desc: "反复开合测试，确认气密防水无渗漏，再清理并交付。" },
      ],
      faqs: [
        { q: "可以只换玻璃不换整扇窗吗？", a: "大多数情况下可以。只要窗框状况良好、尺寸合适，我们就能在现有窗框内安装新玻璃，比整窗更换便宜得多。我们也可以将单层玻璃升级为中空玻璃，不过视原始厚度可能需要换框。" },
        { q: "换一块窗玻璃要多久？", a: "服务车常备的常用规格（4mm 和 5mm 白玻或茶色玻）可当日完成。定制尺寸、钢化玻璃或中空玻璃通常需在工厂加工，2–5 个工作日内完成安装。" },
        { q: "白玻、茶色玻、磨砂玻和钢化玻璃有什么区别？", a: "白玻是标准透明玻璃。茶色玻（灰、青铜、绿）可减少 30–40% 太阳热量，适合西晒窗户。磨砂玻透光但保隐私。钢化玻璃是安全玻璃，碎后成细小圆粒不伤人，适合儿童房间与门扇。" },
        { q: "你们提供紧急玻璃更换服务吗？", a: "有地住宅提供。服务车常备常用规格，可当日到场更换碎玻璃。定制尺寸、钢化玻璃或中空玻璃，我们会先安全封板，2–5 个工作日内回来正式安装。" },
      ],
      metaTitle: "吉隆坡与雪兰莪窗玻璃更换 | RM200起",
      metaDesc:
        "吉隆坡与雪兰莪更换开裂或碎裂窗玻璃——白玻、茶色玻、磨砂玻或钢化玻璃。有地住宅当日紧急服务。从RM200起。",
    },
  },
  "window-repair/window-seal-replacement": {
    ms: {
      name: "Penggantian Pengedap Tingkap",
      tagline:
        "Ganti pengedap getah EPDM haus atau mengeras untuk menghentikan resapan air dan bahang angin serta menambah baik penebatan. Dari RM 30 / kaki linier.",
      description:
        "Pengedap tingkap ialah jalur getah yang memampatkan antara bingkai dan sengkuap atau panel kaca untuk mengelakkan air, habuk dan bunyi daripada masuk. Lama kelamaan getah EPDM menjadi mengeras, retak atau mengelupas, menyebabkan resapan air semasa hujan lebat, bahang angin apabila tingkap ditutup, kehilangan penghawa dingin dan bunyi jalan yang lebih kuat. Kami menggantikan pengedap getah haus dengan jalur EPDM baharu berkualiti untuk semua jenis tingkap — casement, gelangsar, top-hung, awning dan tingkap louvre. Kami juga membersihkan dan menyediakan alur pengedap, menyapu pelekat yang sesuai dan memastikan pengedap memampat dengan sekata untuk penutupan kemas. Kerja termasuk ujian air ringkas untuk mengesahkan tiada kebocoran selepas pemasangan.",
      highlights: [
        "Pengedap EPDM baharu untuk casement, gelangsar, top-hung, awning dan louvre",
        "Menghentikan resapan air, bahang angin dan kehilangan penghawa dingin",
        "Mengurangkan bunyi lalu lintas untuk rumah di kawasan sibuk",
        "Pembersihan alur pengedap dan penyediaan permukaan sebelum pemasangan",
        "Ujian air ringkas selepas pemasangan untuk memastikan tiada kebocoran",
      ],
      process: [
        { step: "01", title: "Pemeriksaan Pengedap", desc: "Kami memeriksa keadaan jalur getah, mengenal pasti titik bocor dan menentukan jenis pengedap yang sesuai untuk tingkap anda." },
        { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci mengikut kaki linier pengedap serta sebarang kerja tambahan yang diperlukan." },
        { step: "03", title: "Penyingkiran Pengedap Lama", desc: "Pengedap lama yang keras, retak atau mengelupas ditanggalkan dan alur dibersihkan daripada sisa pelekat dan kotoran." },
        { step: "04", title: "Pemasangan Pengedap Baharu", desc: "Jalur EPDM baharu dipasang dengan pelekat yang sesuai dan dimampatkan sekata di sekeliling bingkai." },
        { step: "05", title: "Ujian Air", desc: "Tingkap diuji dengan semburan air ringkas untuk mengesahkan pengedapan kalis bocor sebelum serahan." },
      ],
      faqs: [
        { q: "Bagaimana saya tahu pengedap tingkap saya perlu diganti?", a: "Tanda biasa: resapan air semasa hujan lebat, bahang angin apabila tingkap ditutup, kehilangan penghawa dingin, bunyi jalan lebih kuat dan retakan atau pengelupasan getah yang kelihatan. Kami boleh menilai di tapak dan mengesyorkan penggantian." },
        { q: "Berapa kos untuk menggantikan pengedap tingkap?", a: "Harga bermula RM30 setiap kaki linier termasuk jalur EPDM dan pemasangan. Sebuah tingkap casement standard biasanya memerlukan 3–6 kaki linier, bergantung pada saiz. Sebut harga penuh diberikan selepas pemeriksaan." },
        { q: "Berapa lama kerja menggantikan pengedap tingkap?", a: "Kebanyakan tingkap boleh disiapkan dalam masa 30–60 minit setiap satu, bergantung pada saiz dan bilangan tingkap. Kerja ini biasanya tidak memerlukan anda meninggalkan rumah." },
        { q: "Boleh pengedap baharu menyelesaikan masalah pemeluwapan antara kaca?", a: "Tidak semestinya. Pemeluwapan antara dua lapisan kaca biasanya menunjukkan pengedap kaca itu sendiri (bukan pengedap tingkap) gagal dan mungkin memerlukan penggantian kaca dua lapisan. Pengedap tingkap baharu membantu menghentikan resapan air dan bahang angin di sekeliling bingkai, tetapi tidak membaiki kaca dua lapisan yang telah rosak." },
      ],
      metaTitle: "Penggantian Pengedap Tingkap KL & Selangor | Dari RM30/kaki linier",
      metaDesc:
        "Ganti pengedap getah EPDM tingkap haus di KL & Selangor untuk menghentikan resapan air, bahang angin dan kehilangan penghawa dingin. Dari RM30/kaki linier.",
    },
    zh: {
      name: "窗户密封条更换",
      tagline:
        "更换老化变硬的 EPDM 橡胶密封条，阻止渗水、穿堂风与冷气流失，改善保温。从 RM 30 / 延英尺起。",
      description:
        "窗密封条是夹在窗框与窗扇或玻璃面板之间的橡胶条，用来阻挡水、灰尘与噪音进入室内。随着时间推移，EPDM 橡胶会变硬、开裂或剥落，导致大雨渗水、关窗后有穿堂风、冷气流失以及街边噪音变大。我们为所有常见窗型——平开窗、推拉窗、上悬窗、外开下悬窗和百叶窗——更换高质量的 EPDM 密封条。我们会清洁并处理密封槽，涂上合适的胶粘剂，确保密封条均匀压紧、严密闭合。完成后会用受控喷水做简单测试，确认无渗漏。",
      highlights: [
        "适用于平开窗、推拉窗、上悬窗、外开下悬窗与百叶窗的 EPDM 新密封条",
        "阻止渗水、穿堂风与冷气流失",
        "降低繁忙路段的交通噪音",
        "安装前清洁密封槽并处理表面",
        "安装后用受控喷水测试，确保无渗漏",
      ],
      process: [
        { step: "01", title: "检查密封条", desc: "检查橡胶条状况，找出渗漏点，确定适合您窗型的密封条类型。" },
        { step: "02", title: "透明报价", desc: "按延英尺逐项报价，并说明任何需要的额外工作。" },
        { step: "03", title: "拆除旧密封条", desc: "拆除变硬、开裂或剥落的旧胶条，清洁槽内残余胶剂与灰尘。" },
        { step: "04", title: "安装新密封条", desc: "以合适的胶粘剂安装新 EPDM 胶条，并沿窗框均匀压紧。" },
        { step: "05", title: "喷水测试", desc: "用受控喷水测试窗户，确认密封防水后才交付。" },
      ],
      faqs: [
        { q: "怎么判断窗户密封条需要更换？", a: "常见迹象：大雨时渗水、关窗后有穿堂风、冷气流失、街边噪音变大，以及橡胶明显开裂或剥落。我们可以现场评估并给出更换建议。" },
        { q: "换窗密封条要多少钱？", a: "从 RM30 每延英尺起，包含 EPDM 胶条与安装。一扇标准平开窗通常需要 3–6 延英尺，具体视尺寸而定。现场检查后提供完整报价。" },
        { q: "换密封条要多久？", a: "多数窗户每扇 30–60 分钟内完成，视尺寸和数量而定。您通常无需离开家中。" },
        { q: "换密封条能解决中空玻璃结雾吗？", a: "不一定。玻璃夹层间结雾通常意味着中空玻璃本身的封胶失效，可能需要更换中空玻璃单元。新的窗密封条能阻止窗框四周渗水和穿堂风，但无法修复已损坏的中空玻璃。" },
      ],
      metaTitle: "吉隆坡与雪兰莪窗户密封条更换 | RM30/延英尺起",
      metaDesc:
        "吉隆坡与雪兰莪更换老化 EPDM 窗密封条，阻止渗水、穿堂风与冷气流失。从RM30/延英尺起。",
    },
  },
  "window-repair/window-handle-and-hinge-repair": {
    ms: {
      name: "Pembaikan Pemegang & Engsel Tingkap",
      tagline:
        "Baiki atau ganti pemegang, engsel, stay dan mekanisme kunci tingkap casement atau top-hung yang rosak, keras atau berkarat. Dari RM 120.",
      description:
        "Pemegang, engsel dan mekanisme kunci yang rosak atau berkarat menjadikan tingkap sukar dibuka, tidak menutup rapat atau menimbulkan risiko keselamatan. Kami membaiki dan menggantikan semua jenis perkakasan tingkap untuk tingkap casement dan top-hung: pemegang yang patah atau longgar, engsel yang berkarat atau bengkok, stay (penyokong buka) yang rosak dan mekanisme kunci yang tidak berfungsi. Kami menggunakan alat ganti yang sepadan atau setara kualiti, melaraskan penjajaran sengkuap supaya tingkap menutup rapat dan selamat, serta melincirkan bahagian bergerak untuk operasi lancar. Untuk tingkap yang tidak selaras dengan bingkai, kami juga boleh menjajarkan semula sengkuap supaya muat kemas tanpa celah.",
      highlights: [
        "Pemegang, engsel, stay dan mekanisme kunci untuk tingkap casement & top-hung",
        "Alat ganti sepadan atau setara kualiti dengan pelarasan penjajaran",
        "Mengembalikan buka/tutup lancar dan penutupan rapat yang selamat",
        "Melincirkan bahagian bergerak untuk mengelakkan kekakuan pada masa depan",
        "Menggantikan pemegang berkarat atau bengkok yang menjejaskan keselamatan",
      ],
      process: [
        { step: "01", title: "Pemeriksaan Perkakasan", desc: "Kami menilai keadaan pemegang, engsel, stay dan mekanisme kunci serta punca kerosakan." },
        { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci untuk alat ganti dan buruh; pemegang khas mungkin perlu dipesan." },
        { step: "03", title: "Penyingkiran Perkakasan Lama", desc: "Pemegang, engsel atau stay yang rosak ditanggalkan dengan berhati-hati tanpa merosakkan bingkai." },
        { step: "04", title: "Pemasangan & Pelarasan", desc: "Alat ganti baharu dipasang, penjajaran sengkuap dilaras dan bahagian bergerak dilincirkan." },
        { step: "05", title: "Ujian & Serahan", desc: "Tingkap dibuka, ditutup dan dikunci berulang kali untuk memastikan operasi lancar dan selamat." },
      ],
      faqs: [
        { q: "Berapa kos untuk membaiki pemegang tingkap?", a: "Harga bermula RM120 untuk menggantikan pemegang atau engsel yang rosak. Kos sebenar bergantung pada jenis dan bilangan alat ganti. Sebut harga terperinci diberikan selepas pemeriksaan." },
        { q: "Bolehkah anda menggantikan pemegang dengan model yang berbeza?", a: "Ya. Jika pemegang asal tidak lagi dikeluarkan, kami boleh memasang model yang sepadan dengan lubang sedia ada atau menggerudi lubang baharu jika perlu. Kami akan mencadangkan pilihan yang sesuai dengan bingkai dan gaya tingkap anda." },
        { q: "Mengapa tingkap casement saya tidak menutup rapat?", a: "Biasanya disebabkan oleh engsel yang longgar atau bengkok, pemegang atau mekanisme kunci yang rosak, atau sengkuap yang tidak jajar dengan bingkai. Kami memeriksa semua bahagian dan membaiki atau menjajarkan semula supaya tingkap menutup rapat." },
        { q: "Adakah anda melincirkan perkakasan tingkap?", a: "Ya, selepas pembaikan kami melincirkan semua bahagian bergerak dengan pelincir sesuai untuk memastikan operasi lancar dan mengurangkan kekakuan pada masa depan." },
      ],
      metaTitle: "Pembaikan Pemegang & Engsel Tingkap KL | Dari RM 120",
      metaDesc:
        "Baiki atau ganti pemegang, engsel, stay & kunci tingkap casement/top-hung di KL & Selangor. Dari RM120. Pemegang berkarat, engsel bengkok, kunci rosak.",
    },
    zh: {
      name: "窗户执手与铰链维修",
      tagline:
        "维修或更换平开窗、上悬窗上损坏、卡涩或腐蚀的执手、铰链、撑挡与锁闭机构。从 RM 120 起。",
      description:
        "执手、铰链或锁闭机构损坏、腐蚀会令窗户难以开启、无法关严，甚至带来安全隐患。我们为平开窗和上悬窗维修、更换各类窗五金：断裂或松动的执手、生锈或弯曲的铰链、损坏的撑挡（开窗支撑件），以及失灵的上锁机构。我们使用匹配的原型号或同级品质配件，调整窗扇与窗框的贴合，使窗户关得严密牢固，并为活动部件上油，操作顺滑。对与窗框不齐的窗扇，我们也会重新调校，使其严密吻合、无缝隙。",
      highlights: [
        "平开窗与上悬窗的执手、铰链、撑挡及锁闭机构",
        "匹配原型号或同级品质配件，并做对齐调校",
        "恢复顺滑开合与严密、安全的上锁",
        "为活动部件上油，避免日后卡涩",
        "更换生锈或弯曲、影响安全的执手",
      ],
      process: [
        { step: "01", title: "五金检查", desc: "评估执手、铰链、撑挡与锁闭机构的状况，找出损坏原因。" },
        { step: "02", title: "透明报价", desc: "逐项列出配件与人工费用；特殊执手可能需要订购。" },
        { step: "03", title: "拆除旧五金", desc: "小心拆下损坏的执手、铰链或撑挡，不损伤窗框。" },
        { step: "04", title: "安装与调校", desc: "安装新配件，调校窗扇与窗框的贴合，并为活动部件上油。" },
        { step: "05", title: "测试与交付", desc: "反复开合、上锁测试，确保操作顺滑、安全可靠。" },
      ],
      faqs: [
        { q: "修一个执手要多少钱？", a: "更换损坏的执手或铰链从 RM120 起，实际费用取决于配件类型与数量。现场检查后提供逐项报价。" },
        { q: "可以换不同型号的执手吗？", a: "可以。如果原型号停产，我们会选择与现有孔位匹配的型号，必要时也可重新钻孔。我们会根据您的窗框与窗户风格推荐合适选项。" },
        { q: "为什么我的平开窗关不严？", a: "通常是因为铰链松动或弯曲、执手或锁闭机构损坏，或窗扇与窗框错位。我们会检查各部件并修复或重新调校，使窗户关得严密。" },
        { q: "你们会给窗五金上油吗？", a: "会的。维修完成后，我们为所有活动部件涂上合适的润滑剂，确保操作顺滑并减少日后卡涩。" },
      ],
      metaTitle: "吉隆坡窗户执手与铰链维修 | RM120起",
      metaDesc:
        "吉隆坡与雪兰莪维修或更换窗户执手、铰链、撑挡与锁闭机构。平开窗、上悬窗。从RM120起。",
    },
  },
  "window-repair/sliding-window-roller-replacement": {
    ms: {
      name: "Penggantian Roller Tingkap Gelangsar",
      tagline:
        "Ganti roller nilon atau keluli haus dan bersihkan trek untuk tingkap gelangsar beroperasi lancar semula. Dari RM 150.",
      description:
        "Tingkap gelangsar menjadi sukar dibuka biasanya bukan kerana tingkap rosak, tetapi kerana roller (roda) di bahagian bawah sengkuap telah haus, trek dipenuhi kotoran atau sengkuap sedikit tidak jajar. Kami menggantikan roller nilon atau keluli yang haus dengan roller baharu yang sesuai untuk berat dan jenis bingkai tingkap anda, membersihkan dan melincirkan trek, serta menjajarkan semula sengkuap supaya tingkap gelangsar terbuka dan tertutup dengan lancar dan senyap. Kerja ini jauh lebih murah daripada menggantikan seluruh tingkap dan biasanya memulihkan operasi lancar sepenuhnya. Kami juga memeriksa keadaan trek dan pengedap sedia ada untuk memastikan tiada isu lain yang menjejaskan fungsi.",
      highlights: [
        "Roller nilon atau keluli baharu yang sepadan dengan berat dan jenis bingkai",
        "Pembersihan dan pelinciran trek untuk gelongsoran lancar dan senyap",
        "Penjajaran semula sengkuap untuk muat kemas tanpa tersekat",
        "Jauh lebih murah daripada menggantikan seluruh tingkap",
        "Pemeriksaan trek dan pengedap untuk mengesan isu lain",
      ],
      process: [
        { step: "01", title: "Pemeriksaan Roller & Trek", desc: "Kami mengeluarkan sengkuap, memeriksa keadaan roller, trek dan penjajaran untuk mengenal pasti punca kekakuan." },
        { step: "02", title: "Sebut Harga Telus", desc: "Sebut harga terperinci untuk roller baharu dan buruh; roller khas mungkin perlu dipesan." },
        { step: "03", title: "Penggantian Roller", desc: "Roller haus ditanggalkan dan roller baharu dipasang, memastikan ia menempati dengan betul pada trek." },
        { step: "04", title: "Pembersihan & Pelinciran Trek", desc: "Trek dibersihkan daripada kotoran dan serpihan, kemudian dilincirkan untuk gelongsoran lancar." },
        { step: "05", title: "Pemasangan Semula & Ujian", desc: "Sengkuap dipasang semula, dijajarkan dan diuji buka/tutup berulang kali untuk operasi lancar." },
      ],
      faqs: [
        { q: "Berapa kos untuk menggantikan roller tingkap gelangsar?", a: "Harga bermula RM150 setiap tingkap untuk roller baharu dan pemasangan. Jika roller khas atau trek perlu dibaiki, kos mungkin lebih tinggi. Sebut harga terperinci diberikan selepas pemeriksaan." },
        { q: "Apakah tanda roller tingkap gelangsar perlu diganti?", a: "Tanda biasa: tingkap sukar dibuka atau ditutup, berbunyi semasa menggelongsor, tersekat di tengah-tengah atau sengkuap condong. Ini biasanya disebabkan oleh roller haus atau trek kotor." },
        { q: "Perlukah saya menggantikan seluruh tingkap jika roller haus?", a: "Tidak. Kebanyakan tingkap gelangsar menjadi sukar dikendalikan kerana roller haus atau trek kotor, bukan kerana tingkap rosak. Menggantikan roller biasanya memulihkan operasi lancar pada sebahagian kecil kos tingkap baharu." },
        { q: "Berapa lama kerja menggantikan roller?", a: "Sebuah tingkap gelangsar biasanya mengambil masa 30–60 minit untuk siap, termasuk penggantian roller, pembersihan trek dan pelarasan. Anda boleh menggunakan tingkap dengan segera selepas serahan." },
      ],
      metaTitle: "Penggantian Roller Tingkap Gelangsar KL | Dari RM 150",
      metaDesc:
        "Ganti roller tingkap gelangsar haus di KL & Selangor. Roller nilon/keluli, pembersihan & pelinciran trek, penjajaran sengkuap. Dari RM150/tingkap.",
    },
    zh: {
      name: "推拉窗滑轮更换",
      tagline:
        "更换磨损的尼龙或钢滑轮并清洁轨道，让推拉窗恢复顺滑推拉。从 RM 150 起。",
      description:
        "推拉窗难以推开，通常不是因为窗户坏了，而是窗扇底部的滑轮（滚轮）磨损、轨道积灰，或窗扇轻微错位。我们根据您窗户的重量与框料类型更换合适的尼龙或钢滑轮，清洁并润滑轨道，重新调校窗扇，使推拉窗开合顺滑安静。这项维修比整扇换窗便宜得多，通常能完全恢复顺畅操作。我们也会一并检查轨道与现有密封条状况，确保没有其他影响功能的隐患。",
      highlights: [
        "根据窗扇重量与框料匹配新的尼龙或钢滑轮",
        "清洁并润滑轨道，推拉顺滑安静",
        "重新调校窗扇，吻合严密、不卡滞",
        "比整扇换窗便宜得多",
        "一并检查轨道与密封条，排查其他隐患",
      ],
      process: [
        { step: "01", title: "检查滑轮与轨道", desc: "卸下窗扇，检查滑轮、轨道与对位状况，找出卡涩原因。" },
        { step: "02", title: "透明报价", desc: "逐项列出滑轮与人工费用；特殊滑轮可能需要订购。" },
        { step: "03", title: "更换滑轮", desc: "拆下磨损滑轮，安装新滑轮并确保其在轨道上正确就位。" },
        { step: "04", title: "清洁与润滑轨道", desc: "清理轨道内的灰尘与杂物，再上油润滑，确保推拉顺滑。" },
        { step: "05", title: "装回与测试", desc: "装回窗扇、重新调校，并反复推拉测试确认顺畅。" },
      ],
      faqs: [
        { q: "换一个推拉窗滑轮要多少钱？", a: "每扇窗从 RM150 起，包含新滑轮与安装。如需特殊滑轮或修复轨道，费用可能略高。现场检查后提供逐项报价。" },
        { q: "怎么判断推拉窗滑轮需要更换？", a: "常见迹象：窗户很难推开或关拢、滑动时有噪音、滑到一半卡住，或窗扇倾斜。这通常由滑轮磨损或轨道积灰造成。" },
        { q: "滑轮磨损需要整扇换窗吗？", a: "不需要。大多数推拉窗变涩是因为滑轮磨损或轨道积灰，而非窗户损坏。更换滑轮通常只需新窗零头的价格即可恢复顺滑。" },
        { q: "换滑轮要多久？", a: "一扇推拉窗通常 30–60 分钟完成，含更换滑轮、清洁轨道与调校。交付后即可正常使用。" },
      ],
      metaTitle: "吉隆坡推拉窗滑轮更换 | RM150起",
      metaDesc:
        "吉隆坡与雪兰莪更换磨损推拉窗滑轮。尼龙/钢滑轮、轨道清洁润滑、窗扇调校。每扇从RM150起。",
    },
  },

  /* ── GLASS & ALUMINIUM ───────────────────────────────────────────────── */
  "glass-aluminium/frameless-shower-screen": {
    ms: { name: "Skrin Pancuran Tanpa Bingkai", tagline: "Skrin pancuran kaca tempered tanpa bingkai yang dipotong mengikut bilik mandi anda, lengkap dengan engsel dan pengedap anti-bocor.", description: "Kami mereka bentuk dan memasang skrin pancuran tanpa bingkai untuk bilik mandi kondominium dan rumah di KL serta Selangor. Panel menggunakan kaca keselamatan tempered 10mm untuk panel tetap sehingga 1.5m; pintu atau panel lebih besar biasanya memerlukan 12mm. Selepas ukuran tapak, kaca dipotong dan digilap di kilang, kemudian dipasang dengan engsel serta pengikat yang betul. Kami menyemak cerun lantai, kedudukan saliran dan sambungan jubin, memasang drip-edge serta silikon sanitari tahan kulat. Harga bermula RM420 setiap panel dan pengedap dilindungi jaminan bebas bocor 12 bulan.", highlights: ["Kaca keselamatan tempered 10–12mm, bukan kaca biasa", "Ukuran mengikut cerun lantai, jubin dan kedudukan saliran", "Drip-edge dan silikon sanitari tahan kulat untuk kurangkan percikan", "Engsel serta pengikat dipasang dan dilaras dengan teliti", "Jaminan pengedap bebas bocor selama 12 bulan"], process: [{step:"01",title:"Ukuran Bilik Mandi",desc:"Kami mengukur bukaan, memeriksa cerun lantai, saliran dan keadaan jubin sebelum mencadangkan susun atur."},{step:"02",title:"Pengesahan Reka Bentuk",desc:"Ketebalan kaca, jenis engsel, arah pintu dan kedudukan drip-edge disahkan dalam sebut harga terperinci."},{step:"03",title:"Fabrikasi Kaca",desc:"Kaca dipotong, ditemper dan digilap tepinya; fabrikasi lazimnya mengambil lima hingga tujuh hari bekerja."},{step:"04",title:"Pemasangan",desc:"Panel dipasang menggunakan pengikat sesuai, blok sokongan dan silikon struktur tanpa menegangkan kaca."},{step:"05",title:"Ujian Air",desc:"Kami menguji pintu, penjajaran dan aliran air untuk memastikan pengedap berfungsi sebelum serahan."}], faqs: [{q:"Kaca berapa mm sesuai untuk skrin pancuran?",a:"Panel tetap tunggal sehingga 1.5m biasanya menggunakan tempered 10mm. Untuk pintu tanpa bingkai atau panel yang lebih besar, kami lazimnya mengesyorkan 12mm. Reka bentuk berbingkai atau gelangsar boleh menggunakan 8mm selepas ukuran tapak."},{q:"Boleh pasang skrin pada jubin sedia ada?",a:"Boleh, jika jubin dan dinding kukuh. Kami menilai kedudukan stud, corak jubin, paip tersembunyi dan cerun lantai sebelum menggerudi atau memilih kaedah pengikat."},{q:"Adakah skrin benar-benar tidak akan bocor?",a:"Skrin tanpa bingkai bukan tab mandi tertutup sepenuhnya, tetapi drip-edge, jurang yang betul dan silikon sanitari mengawal percikan biasa. Kami menguji pemasangan dan memberi jaminan 12 bulan pada pengedap."},{q:"Berapa lama siap selepas ukuran?",a:"Kaca tempered lazimnya memerlukan lima hingga tujuh hari bekerja untuk difabrikasi. Pemasangan di tapak biasanya siap dalam satu lawatan, tertakluk kepada akses dan keadaan bilik mandi."}], metaTitle:"Skrin Pancuran Tanpa Bingkai KL | Dari RM420/Panel",metaDesc:"Pasang skrin pancuran tanpa bingkai di KL & Selangor. Kaca tempered 10–12mm, engsel berkualiti, drip-edge dan pengedap anti-bocor. Dari RM420/panel." },
    zh: { name:"无框淋浴屏",tagline:"按浴室尺寸定制的无框钢化玻璃淋浴屏，配优质铰链与防渗漏密封。",description:"我们为吉隆坡与雪兰莪的公寓和住宅设计、制作及安装无框淋浴屏。固定玻璃通常采用10mm安全钢化玻璃；无框门或较大面板一般建议12mm。现场量尺后，玻璃会在工厂裁切、钢化并磨边，再配合合适的铰链和固定件安装。我们会检查地面坡度、地漏位置和瓷砖接缝，设置滴水边并使用防霉卫浴硅胶。价格从每片RM420起，密封享有12个月防漏保修。",highlights:["采用10–12mm安全钢化玻璃，而非普通玻璃","按地面坡度、瓷砖与地漏位置量身设计","滴水边及防霉卫浴硅胶，减少日常溅水","铰链与固定件经过仔细校正和测试","密封提供12个月防漏保修"],process:[{step:"01",title:"浴室量尺",desc:"测量洞口并检查地面坡度、地漏和瓷砖状况，再建议合适布局。"},{step:"02",title:"确认设计",desc:"在逐项报价中确认玻璃厚度、铰链、开门方向与滴水边位置。"},{step:"03",title:"玻璃制作",desc:"玻璃裁切、钢化并磨边；制作一般需五至七个工作日。"},{step:"04",title:"现场安装",desc:"采用合适固定件、垫块和结构胶安装面板，避免玻璃受力不均。"},{step:"05",title:"试水验收",desc:"测试门扇、对齐度与水流，确认密封效果后交付。"}],faqs:[{q:"淋浴屏该选多厚的玻璃？",a:"宽度不超过1.5米的单块固定屏一般可用10mm钢化玻璃；无框门或较大的面板通常建议12mm。8mm适用于部分有框或推拉设计，实际以现场量尺为准。"},{q:"可否在现有瓷砖上安装？",a:"可以，前提是墙砖与基层稳固。我们会先检查龙骨位置、瓷砖状况、隐藏水管和地面坡度，再决定钻孔与固定方法。"},{q:"无框淋浴屏会不会漏水？",a:"无框设计并非完全密闭的浴缸隔间，但正确的滴水边、间隙和卫浴硅胶可控制正常溅水。我们会试水，并为密封提供12个月保修。"},{q:"量尺后多久可以安装？",a:"钢化玻璃通常需五至七个工作日制作。若现场条件正常，安装一般在一次上门内完成。"}],metaTitle:"吉隆坡无框淋浴屏 | 每片RM420起",metaDesc:"吉隆坡与雪兰莪定制无框淋浴屏。10–12mm钢化玻璃、优质铰链、滴水边与防霉密封。每片RM420起，12个月防漏保修。" }
  },
  "glass-aluminium/aluminium-sliding-window": {
    ms: { name:"Tingkap Gelangsar Aluminium",tagline:"Tingkap gelangsar aluminium fabrikasi mengikut saiz dengan kaca 5mm, roller nilon dan weatherstrip untuk rumah serta premis.",description:"Kami memfabrikasi tingkap gelangsar aluminium mengikut ukuran bukaan sebenar untuk kediaman dan projek ringan-komersial. Pilihan standard menggunakan kaca jernih atau tinted 5mm, roller nilon dan weatherstrip; profil aluminium boleh dipilih daripada Akasia, Hua Ho, YKK AP atau kemasan powder-coat tersuai. Pasukan mengukur bukaan, memeriksa ambang, dinding dan saliran sebelum bingkai dipotong serta dimitre. Kami memasang bingkai dengan pengikat sesuai, mendudukkan kaca dengan kemas dan melaras roller agar setiap daun bergerak lancar. Harga bermula RM320 setiap kaki persegi; masa fabrikasi bingkai lazimnya tiga hingga lima hari bekerja.",highlights:["Dibuat mengikut ukuran bukaan, ambang dan keadaan dinding", "Kaca jernih atau tinted 5mm dengan pilihan profil aluminium", "Roller nilon dan weatherstrip untuk gelongsoran serta kedapan lebih baik", "Pilihan Akasia, Hua Ho, YKK AP atau warna powder-coat", "Bingkai dipasang, dilaras dan diuji sebelum serahan"],process:[{step:"01",title:"Ukuran Bukaan",desc:"Kami mengambil ukuran tepat dan memeriksa ambang, dinding serta laluan air hujan."},{step:"02",title:"Pilih Profil & Kaca",desc:"Anda memilih warna bingkai, kaca jernih atau tinted dan konfigurasi daun tingkap."},{step:"03",title:"Fabrikasi Bingkai",desc:"Aluminium dipotong, dimitre dan dipasang dengan kaca serta aksesori di bengkel."},{step:"04",title:"Pemasangan Tingkap",desc:"Bingkai disauh dengan kemas, jurang ditutup dan daun tingkap dipasang pada trek."},{step:"05",title:"Pelarasan Akhir",desc:"Roller, kunci dan weatherstrip dilaras lalu tingkap diuji berulang kali."}],faqs:[{q:"Berapakah harga tingkap gelangsar aluminium?",a:"Harga bermula RM320 setiap kaki persegi untuk konfigurasi asas, bergantung pada saiz, profil, jenis kaca, bilangan daun dan kerja pembukaan. Kami memberi sebut harga selepas ukuran."},{q:"Patut pilih kaca jernih atau tinted?",a:"Kaca jernih memberi cahaya maksimum. Kaca tinted kelabu, gangsa atau hijau membantu mengurangkan haba matahari dan lazim untuk fasad yang menerima matahari petang. Sampel boleh dibincangkan semasa ukuran."},{q:"Berapa lama fabrikasi mengambil masa?",a:"Bingkai aluminium lazimnya mengambil tiga hingga lima hari bekerja. Tempoh boleh berubah jika profil atau warna khas perlu dipesan, atau jika kerja pembukaan diperlukan."},{q:"Adakah tingkap baru termasuk roller dan weatherstrip?",a:"Ya, tingkap gelangsar standard dipasang dengan roller nilon dan weatherstrip. Kami melarasnya semasa pemasangan supaya daun tingkap menggelongsor dan mengunci dengan baik."}],metaTitle:"Tingkap Gelangsar Aluminium KL | Dari RM320/kp",metaDesc:"Tingkap gelangsar aluminium kustom di KL & Selangor. Kaca jernih/tinted 5mm, roller nilon, weatherstrip dan profil Akasia, Hua Ho atau YKK AP. Dari RM320/kaki persegi."},
    zh: {name:"铝合金推拉窗",tagline:"按洞口尺寸制作的铝合金推拉窗，配5mm玻璃、尼龙滑轮和密封毛条，适用于住宅及轻型商业空间。",description:"我们按实际洞口尺寸制作铝合金推拉窗，服务住宅及轻型商业项目。标准方案可选5mm白玻或茶色玻璃，配尼龙滑轮和密封毛条；铝型材可选Akasia、Hua Ho、YKK AP或定制粉末喷涂颜色。团队会先量尺并检查窗台、墙体与排水，再切割和拼角制作框架。安装时使用合适固定件，妥善安放玻璃，并调校滑轮，确保每扇窗顺畅推拉。价格从每平方英尺RM320起，铝框制作通常需三至五个工作日。",highlights:["按洞口、窗台和墙体实际状况定制","5mm白玻或茶色玻，搭配多种铝型材","尼龙滑轮和密封毛条，推拉顺畅且密封更好","可选Akasia、Hua Ho、YKK AP或定制喷涂色","安装后调校滑轮、锁具并进行测试"],process:[{step:"01",title:"测量洞口",desc:"精确量尺并检查窗台、墙体和雨水排放路径。"},{step:"02",title:"选择型材与玻璃",desc:"确认框架颜色、白玻或茶色玻璃，以及窗扇配置。"},{step:"03",title:"制作框架",desc:"在工坊裁切、拼角并装配铝材、玻璃和配件。"},{step:"04",title:"安装窗户",desc:"牢固固定框架，处理周边缝隙，并把窗扇装入轨道。"},{step:"05",title:"最终调校",desc:"调校滑轮、锁具和密封毛条，反复测试开关。"}],faqs:[{q:"铝合金推拉窗多少钱？",a:"基础配置从每平方英尺RM320起，实际费用取决于尺寸、型材、玻璃、窗扇数量和洞口施工。量尺后会提供逐项报价。"},{q:"该选白玻还是茶色玻璃？",a:"白玻采光最好。灰色、茶色或绿色玻璃可帮助降低太阳热量，尤其适合西晒立面。量尺时可参考样品选择。"},{q:"制作需要多长时间？",a:"铝框通常需三至五个工作日。若需特殊型材、颜色或洞口改造，工期可能相应调整。"},{q:"新窗是否包含滑轮和密封条？",a:"是的，标准推拉窗含尼龙滑轮和密封毛条。安装时会调校，使窗扇推拉和锁闭正常。"}],metaTitle:"吉隆坡铝合金推拉窗 | RM320/平方英尺起",metaDesc:"吉隆坡与雪兰莪定制铝合金推拉窗。5mm白玻/茶色玻、尼龙滑轮、密封毛条，Akasia、Hua Ho或YKK AP型材。RM320/平方英尺起。"}
  },

  "glass-aluminium/glass-office-partition": {
    ms:{name:"Partition Pejabat Kaca",tagline:"Partition kaca tempered untuk pejabat rumah, bilik mesyuarat dan ruang kedai, dengan saluran aluminium atau sistem tanpa bingkai.",description:"Kami membina partition kaca untuk memisahkan ruang tanpa mengorbankan cahaya semula jadi. Sistem ini sesuai untuk pejabat rumah, bilik mesyuarat dan fit-out kedai ringan, menggunakan kaca tempered 10–12mm dengan saluran-U aluminium atau pemasangan tanpa bingkai. Ukuran tapak mengambil kira siling, lantai, akses lif dan keperluan pintu. Anda boleh memilih pintu hayun atau gelangsar, filem frosted untuk privasi, serta pilihan kaca laminated akustik bagi ruang yang memerlukan pengurangan bunyi. Harga bermula RM220 setiap kaki persegi termasuk perancangan fabrikasi dan pemasangan asas; kami menyediakan sebut harga terperinci sebelum kerja dimulakan.",highlights:["Kaca tempered 10–12mm untuk partition kediaman dan komersial ringan","Saluran-U aluminium atau rupa tanpa bingkai yang kemas","Pilihan pintu kaca hayun atau gelangsar serta perkakasan sesuai","Filem frosted untuk privasi tanpa menghalang cahaya","Perancangan akses lif dan perlindungan kawasan kerja bangunan tinggi"],process:[{step:"01",title:"Tinjauan Ruang",desc:"Kami mengukur lantai ke siling, semak akses dan mengenal pasti kedudukan pintu serta sokongan."},{step:"02",title:"Susun Atur & Sebut Harga",desc:"Panel, jenis pintu, saluran dan pilihan privasi disahkan dalam lukisan serta sebut harga."},{step:"03",title:"Fabrikasi",desc:"Kaca dipotong, ditemper dan digilap; saluran serta perkakasan disediakan mengikut ukuran."},{step:"04",title:"Pemasangan Terlindung",desc:"Lantai dan laluan dilindungi, saluran dipasang lurus, kemudian panel kaca didudukkan dengan selamat."},{step:"05",title:"Ujian Operasi",desc:"Kami memeriksa penjajaran, pintu, pengikat dan kemasan sebelum pembersihan serta serahan."}],faqs:[{q:"Adakah partition kaca sesuai untuk pejabat rumah?",a:"Ya. Ia membahagikan ruang kerja sambil mengekalkan cahaya dan pandangan terbuka. Filem frosted boleh digunakan pada bahagian tertentu jika anda memerlukan privasi untuk panggilan atau mesyuarat."},{q:"Kaca tempered atau laminated untuk partition?",a:"Tempered 10–12mm sesuai untuk kebanyakan partition dalaman. Kaca laminated akustik boleh dipertimbangkan apabila pengurangan bunyi atau spesifikasi bangunan memerlukannya; kami menilai penggunaan dan bajet anda."},{q:"Bolehkah anda masukkan pintu ke dalam partition?",a:"Boleh. Kami boleh mengintegrasikan pintu kaca hayun atau gelangsar dengan engsel, pemegang dan kunci yang sesuai. Konfigurasi diputuskan selepas semakan ruang dan laluan pengguna."},{q:"Berapa lama pemasangan partition mengambil masa?",a:"Fabrikasi kaca tempered lazimnya lima hingga tujuh hari bekerja selepas ukuran disahkan. Tempoh pemasangan bergantung pada bilangan panel, akses bangunan dan perlindungan yang diperlukan."}],metaTitle:"Partition Pejabat Kaca KL | Dari RM220/kp",metaDesc:"Partition pejabat kaca di KL & Selangor. Kaca tempered 10–12mm, saluran aluminium atau tanpa bingkai, pintu dan filem frosted. Dari RM220/kaki persegi."},
    zh:{name:"玻璃办公隔断",tagline:"适用于家庭办公室、会议室与商铺的钢化玻璃隔断，可选铝合金地槽或无框系统。",description:"我们用玻璃隔断划分空间，同时保留自然采光，适合家庭办公室、会议室和轻型商铺装修。系统采用10–12mm钢化玻璃，配铝合金U型槽或无框安装。现场量尺会考虑天花、地面、电梯运输和门的位置。您可选择平开或推拉玻璃门、磨砂膜增加隐私，以及对隔音有要求时使用夹层隔音玻璃。价格从每平方英尺RM220起，包含制作规划与基本安装；开工前会提供逐项报价。",highlights:["10–12mm钢化玻璃，适合住宅与轻型商业隔断","铝合金U型槽或简洁无框视觉效果","可整合平开/推拉玻璃门及合适五金","磨砂膜兼顾隐私与自然采光","为高层项目规划电梯运输及施工区域保护"],process:[{step:"01",title:"空间勘测",desc:"测量地面至天花高度，检查运输通道，并确定门位和支撑条件。"},{step:"02",title:"布局与报价",desc:"确认面板、门型、地槽和隐私选项，并提供图示及逐项报价。"},{step:"03",title:"定制制作",desc:"玻璃裁切、钢化、磨边，地槽与五金按实测尺寸备料。"},{step:"04",title:"保护式安装",desc:"保护地面和通道，校直安装地槽，再安全安放玻璃面板。"},{step:"05",title:"操作测试",desc:"检查对齐、门扇、固定件和收口，清洁后交付。"}],faqs:[{q:"玻璃隔断适合家庭办公室吗？",a:"适合。它能划分工作区，同时保留光线和开阔感。如果通话或会议需要隐私，可在局部加贴磨砂膜。"},{q:"隔断该用钢化还是夹层玻璃？",a:"大多数室内隔断使用10–12mm钢化玻璃即可。若对隔音或大楼规范有更高要求，可考虑夹层隔音玻璃；我们会结合用途和预算建议。"},{q:"隔断内可以安装门吗？",a:"可以。可整合平开或推拉玻璃门，并配置合适的铰链、拉手和锁具。具体方案会根据空间与人流动线确定。"},{q:"安装玻璃隔断要多久？",a:"量尺确认后，钢化玻璃制作通常需五至七个工作日。现场安装时间取决于面板数量、大楼出入规定和保护工作。"}],metaTitle:"吉隆坡玻璃办公隔断 | RM220/平方英尺起",metaDesc:"吉隆坡与雪兰莪玻璃办公隔断。10–12mm钢化玻璃、铝合金地槽或无框系统、玻璃门与磨砂膜。从RM220/平方英尺起。"}
  },
  "glass-aluminium/wall-mirror-installation": {
    ms:{name:"Pemasangan Cermin Dinding",tagline:"Cermin dinding, cermin pakaian dan cermin gim 5–6mm yang diukur serta dipasang kemas dengan saluran aluminium tersembunyi.",description:"Kami membekal dan memasang cermin silver-backed 5–6mm untuk bilik mandi, ruang persalinan, studio dan gim rumah. Setiap cermin diukur mengikut dinding sebenar, dengan perhatian pada soket, suis, paip dan kerataan permukaan. Untuk hasil kemas, kami menggunakan saluran aluminium tersembunyi serta pengikat yang sesuai, bukannya sekadar pelekat pada dinding yang tidak disediakan. Tepi boleh digilap dan susun atur beberapa panel boleh dirancang bagi dinding besar. Harga bermula RM320, bergantung pada saiz, potongan, akses dan keadaan dinding. Pasukan melindungi kawasan kerja, memasang cermin dengan selamat dan memeriksa penjajaran sebelum serahan.",highlights:["Cermin silver-backed 5–6mm untuk bilik mandi, persalinan dan gim","Ukuran tepat sekitar suis, soket, paip dan sudut dinding","Saluran aluminium serta pengikat tersembunyi untuk kemasan bersih","Pilihan tepi digilap dan susun atur panel untuk dinding besar","Pemasangan selamat dengan perlindungan kawasan kerja dan penjajaran akhir"],process:[{step:"01",title:"Semakan Dinding",desc:"Kami mengukur dinding dan mengenal pasti soket, suis, paip, kerataan serta akses membawa panel."},{step:"02",title:"Sahkan Saiz",desc:"Saiz, tepi, susun atur panel dan jenis pengikat dipersetujui dalam sebut harga."},{step:"03",title:"Potong & Siapkan",desc:"Cermin dipotong mengikut ukuran dan tepi digilap jika diperlukan sebelum dihantar."},{step:"04",title:"Pasang Pengikat",desc:"Saluran aluminium atau pengikat tersembunyi dipasang lurus pada dinding yang sesuai."},{step:"05",title:"Dudukkan & Periksa",desc:"Cermin didudukkan dengan selamat, diselaraskan dan diperiksa sebelum kawasan dibersihkan."}],faqs:[{q:"Cermin berapa tebal untuk dinding gim atau pakaian?",a:"Cermin silver-backed 5–6mm sesuai untuk kebanyakan dinding pakaian, studio dan gim rumah. Saiz panel, keadaan dinding dan kaedah pengikat akan ditentukan selepas ukuran tapak."},{q:"Bolehkah cermin dipasang di bilik mandi?",a:"Boleh. Kami menggunakan cermin berkualiti dengan pemasangan yang sesuai dan menyemak kedudukan air serta pengudaraan. Elakkan semburan air berterusan pada tepi cermin untuk memanjangkan hayat lapisan belakangnya."},{q:"Adakah anda perlu menggerudi dinding?",a:"Kaedah bergantung pada berat cermin dan keadaan dinding. Saluran atau pengikat mekanikal memberi sokongan yang boleh dipercayai; kami menyemak paip dan kabel yang mungkin tersembunyi sebelum kerja."},{q:"Berapakah harga pemasangan cermin dinding?",a:"Harga bermula RM320. Sebut harga sebenar bergantung pada dimensi, jumlah potongan, kemasan tepi, akses dan sama ada dinding memerlukan persediaan."}],metaTitle:"Pemasangan Cermin Dinding KL | Dari RM320",metaDesc:"Cermin dinding, cermin pakaian & cermin gim di KL & Selangor. Cermin silver-backed 5–6mm, saluran aluminium tersembunyi dan pemasangan selamat. Dari RM320."},
    zh:{name:"墙镜安装",tagline:"按墙面实测定制的5–6mm镀银墙镜、穿衣镜与健身镜，采用暗藏铝槽整洁固定。",description:"我们提供5–6mm镀银镜的供应与安装，适用于浴室、更衣区、工作室和家庭健身房。每面镜子均按实际墙面量尺，并特别留意插座、开关、水管和墙面平整度。为了获得整洁可靠的效果，我们采用暗藏铝槽和合适固定件，而不是直接把镜子随意粘在未经处理的墙上。大面积墙面可规划多片镜面布局，边缘也可磨光。价格从RM320起，取决于尺寸、裁切、运输条件和墙体状况。团队会保护施工区，安全固定镜面，并在交付前检查对齐。",highlights:["5–6mm镀银镜，适合浴室、更衣区和健身房","精确避开开关、插座、水管及墙角量尺","暗藏铝槽和固定件，收口干净利落","可选磨边及大墙面多片镜面布局","安全安装、施工区保护与最终对齐检查"],process:[{step:"01",title:"检查墙面",desc:"量测墙体并确认插座、开关、水管、平整度及面板搬运通道。"},{step:"02",title:"确认尺寸",desc:"在报价中确认尺寸、边缘处理、面板布局和固定方式。"},{step:"03",title:"裁切处理",desc:"按实测尺寸裁切镜子，如有需要则进行边缘磨光。"},{step:"04",title:"安装固定件",desc:"将暗藏铝槽或固定件水平、牢固地装在合适墙体上。"},{step:"05",title:"就位检查",desc:"安全安放镜面，校正对齐并清洁施工区域后交付。"}],faqs:[{q:"健身房或穿衣镜该选多厚？",a:"大多数穿衣墙、工作室和家庭健身房可使用5–6mm镀银镜。面板尺寸、墙体状况和固定方法会在现场量尺后确定。"},{q:"浴室里可以安装墙镜吗？",a:"可以。我们会选用合适镜材并检查水源位置和通风。为延长背漆寿命，应避免让镜边长期直接受到持续水喷淋。"},{q:"安装时一定要在墙上打孔吗？",a:"方式取决于镜子重量和墙体状况。铝槽或机械固定件能提供可靠支撑；施工前会检查可能隐藏的水管和电线。"},{q:"墙镜安装多少钱？",a:"价格从RM320起。实际报价取决于尺寸、裁切数量、磨边、运输条件及墙面是否需预处理。"}],metaTitle:"吉隆坡墙镜安装 | RM320起",metaDesc:"吉隆坡与雪兰莪墙镜、穿衣镜与健身镜安装。5–6mm镀银镜、暗藏铝槽及安全固定。RM320起，按墙面尺寸定制。"}
  },


  /* ── DOOR ────────────────────────────────────────────────────────────── */
  "door/solid-timber-door-installation": {
    ms: {
      name: "Pemasangan Pintu Kayu Pepejal",
      tagline: "Pintu meranti atau chengal pepejal dengan bingkai meranti, 3 engsel SS304, architrave mitre dan set kunci mortice — diukur tepat dan dipasang kemas. Dari RM 550.",
      description: "Pintu kayu pepejal ialah pilihan premium untuk pintu utama dan bilik tidur yang mahukan rasa kukuh, kedap bunyi dan tahan lama. KL Servis Rumah membekalkan dan memasang pintu meranti, chengal atau oak pepejal dengan bingkai meranti yang diukur tepat mengikut bukaan sedia ada — termasuk tinggi, lebar, kedalaman bingkai dan arah ayunan. Setiap set dipasang dengan tiga engsel bebola SS304 keluli tahan karat, architrave MDF atau kayu pepejal dengan sudut mitre, serta set kunci mortice asas. Jurang seragam dijaga (3–4mm atas dan sisi, 5–8mm bawah) dan pintu diuji hayun serta latch sebelum serahan. Pintu pepejal lebih berat dan kedap bunyi, boleh diampelas dan dicat semula berkali-kali, tetapi lebih sensitif terhadap kelembapan tropika berbanding pintu laminate. Bingkai dan pintu baharu ditempah mengikut ukuran dengan tempoh 14–21 hari; pintu lama ditanggalkan dengan rapi sebagai sebahagian pemasangan.",
      highlights: [
        "Pintu meranti, chengal atau oak pepejal dengan bingkai meranti berukuran tepat",
        "3 engsel bebola SS304 keluli tahan karat untuk ayunan kukuh dan senyap",
        "Architrave MDF atau kayu pepejal dengan potongan mitre dan kemasan rapi",
        "Jurang sekata 3–4mm atas/sisi dan 5–8mm bawah, diuji hayun dan latch",
        "Boleh diampelas dan dicat semula berkali-kali untuk jangka hayat panjang",
      ],
      process: [
        { step: "01", title: "Ukuran Tapak & Pemilihan", desc: "Kami mengukur bukaan sedia ada (tinggi, lebar, kedalaman bingkai), menyemak arah ayunan dan mencadangkan spesies kayu serta saiz yang sesuai." },
        { step: "02", title: "Tempahan & Masa Tunggu", desc: "Pintu kayu pepejal dan bingkai ditempah ikut ukuran; tempoh 14–21 hari dengan jadual penghantaran yang jelas semasa sebut harga." },
        { step: "03", title: "Penanggalan Pintu Lama", desc: "Pintu lama, engsel dan set kunci ditanggalkan dengan rapi; bingkai lama dikekalkan jika masih kukuh atau diganti jika diminta." },
        { step: "04", title: "Pemasangan Pintu Baharu", desc: "Pintu digantung pada 3 engsel SS304, dijajarkan dengan jurang sekata, dan set kunci mortice di-mortice serta dipasang." },
        { step: "05", title: "Architrave & Kemasan", desc: "Architrave dipasang dengan sudut mitre, dikedap dan sedia untuk cat; pintu diuji hayun, tutup dan latch berulang kali sebelum serahan." },
      ],
      faqs: [
        { q: "Berapa harga pintu kayu pepejal termasuk pemasangan?", a: "Harga bermula dari RM550 untuk satu daun pintu meranti atau chengal dengan bingkai meranti, 3 engsel SS304, architrave dan set kunci mortice asas. Harga akhir bergantung pada spesies kayu, saiz, jenis architrave dan sama ada bingkai baharu diperlukan. Kami berikan sebut harga terperinci selepas ukuran tapak." },
        { q: "Pintu kayu pepejal atau laminate — mana lebih sesuai untuk rumah saya?", a: "Pintu kayu pepejal lebih berat, lebih kedap bunyi dan mempunyai rasa premium — sesuai untuk pintu utama dan bilik tidur. Ia boleh diampelas dan dicat semula tetapi lebih sensitif kepada kelembapan. Pintu laminate lebih ringan, lebih stabil dalam cuaca lembap dan lebih jimat (dari RM250), sesuai untuk bilik air, dapur dan unit sewa." },
        { q: "Berapa lama masa tunggu untuk pintu kayu pepejal?", a: "Pintu kayu pepejal kustom biasanya mengambil 14–21 hari dari tempahan ke pemasangan, termasuk fabrikasi dan penghantaran. Pintu laminate dan engineered lebih cepat (3–7 hari) jika itu pilihan anda." },
        { q: "Boleh saya kekalkan bingkai sedia ada dan hanya ganti pintu?", a: "Ya, jika bingkai masih segi empat, kukuh dan saiznya betul. Kami akan mengukur bingkai sedia ada dan mendapatkan pintu baharu agar muat dengan jurang sekata; ini menjimatkan kos bingkai dan mengurangkan habuk kerja." },
      ],
      metaTitle: "Pemasangan Pintu Kayu Pepejal KL & Selangor | Dari RM550",
      metaDesc: "Bekal & pasang pintu kayu pepejal meranti atau chengal di KL & Selangor. Bingkai meranti, 3 engsel SS304, architrave mitre, jurang sekata, ujian hayun. Jaminan 12 bulan. Dari RM550.",
    },
    zh: {
      name: "实木门安装",
      tagline: "采用 meranti/chengal 实木门配 meranti 门框、3 个 SS304 不锈钢滚珠铰链、斜拼门套与执手锁——精确测量，规范安装。从 RM 550 起。",
      description: "实木门是入户门与卧室门的优质之选，手感厚重、隔音好且耐用。KL Servis Rumah 按现场门洞真实尺寸供应、安装 meranti、chengal 或橡木实木门，配套 meranti 门框——测量高度、宽度、框深与开门方向。整套配置包含 3 个 SS304 不锈钢滚珠铰链、MDF 或实木斜拼门套与基础执手锁。安装时控制均匀缝隙（顶部与两侧 3–4mm，底部 5–8mm），并做开关与锁舌测试。实木门可多次打磨重漆，使用寿命长，但在马来西亚潮湿环境下比防火板门更易受潮膨胀。实木门与新门框定制周期 14–21 天，旧门拆除包含在更换项目中。",
      highlights: [
        "meranti/chengal/橡木实木门配精确测量的 meranti 门框",
        "3 个 SS304 不锈钢滚珠铰链，开关厚重顺滑",
        "MDF 或实木斜拼门套，收口整洁待上漆",
        "均匀缝隙 3–4mm（顶/侧）与 5–8mm（底部），关门测试合格",
        "可多次打磨重漆，延年益寿，质感高级",
      ],
      process: [
        { step: "01", title: "现场测量与选门", desc: "测量现有门洞高宽框深，确认开门方向，推荐合适木种与尺寸。" },
        { step: "02", title: "下单与交期", desc: "实木门按尺寸定制，14–21 天到货，报价时提供明确交期。" },
        { step: "03", title: "旧门拆除", desc: "小心拆除旧门、铰链与锁具；门框状况良好可保留，否则一并更换。" },
        { step: "04", title: "新门安装", desc: "新门挂在 3 个 SS304 滚珠铰链上，调匀缝隙，开槽安装执手锁。" },
        { step: "05", title: "门套与收尾", desc: "斜拼门套封边待上漆，反复开关测试，确认顺滑可靠后交付。" },
      ],
      faqs: [
        { q: "实木门含安装多少钱？", a: "每扇实木门从 RM550 起，包含 meranti/chengal 实木门扇、meranti 门框、3 个 SS304 铰链、斜拼门套与基础执手锁。最终价格取决于木种、尺寸、门套类型及是否需要新门框，现场测量后提供逐项报价。" },
        { q: "实木门和防火板门该怎么选？", a: "实木门更重、隔音更好、质感高级，适合大门与卧室，且可多次打磨重漆，但对潮湿更敏感。防火板门更轻、在马来西亚潮湿气候下尺寸更稳定、价格更实惠（RM250 起），适合浴室、厨房与出租房。" },
        { q: "实木门定制需要多久？", a: "实木门定制通常需 14–21 天，含工厂制作与运输。防火板与工程门更快，3–7 天即可到货安装。" },
        { q: "可以保留现有门框只换门扇吗？", a: "大多数情况下可以。只要门框方正牢固、尺寸合适，就能在现有门框上挂新门，省去换框费用，现场灰尘也更少。我们会测量现有门框并配好尺寸的新门。" },
      ],
      metaTitle: "吉隆坡与雪兰莪实木门安装 | RM550起",
      metaDesc: "吉隆坡与雪兰莪 meranti/chengal 实木门供应安装。meranti 门框、3 个 SS304 铰链、斜拼门套，缝隙均匀并通过开关测试。12 个月保修，RM550 起。",
    },
  },
  "door/laminate-door-installation": {
    ms: {
      name: "Pemasangan Pintu Laminate",
      tagline: "Pintu engineered kulit HDF dengan kemasan laminate licin untuk rupa moden yang ringan, stabil dan mesra bajet. Dari RM 250.",
      description: "Pintu laminate ialah pilihan ekonomi untuk kediaman moden, bilik air, dapur dan unit sewa yang memerlukan pintu ringan dan stabil dalam kelembapan tropika. KL Servis Rumah membekalkan pintu engineered dengan kulit HDF dan kemasan laminate licin yang tersedia dalam pelbagai warna dan tekstur kayu moden. Berbanding kayu pepejal, pintu laminate lebih ringan, lebih stabil dimensi dan tidak mudah kembang — penyelenggaraan mudah dan harga lebih rendah (dari RM250). Setiap pemasangan termasuk ukuran tepat, penggantungan pada engsel SS304, penjajaran dengan jurang sekata, dan pemasangan set kunci. Bingkai sedia ada boleh dikekalkan jika masih segi empat dan kukuh. Pintu sedia dalam 3–7 hari, sesuai untuk penggantian pantas dan projek sewa.",
      highlights: [
        "Kulit HDF engineered dengan kemasan laminate licin dalam pelbagai warna moden",
        "Lebih ringan dan lebih stabil dalam kelembapan tropika berbanding kayu pepejal",
        "Ideal untuk bilik air, dapur, bilik tidur kedua dan unit sewa",
        "Dipadankan dengan engsel SS304 dan jurang sekata 3–4mm/5–8mm",
        "Sedia dalam 3–7 hari untuk penggantian pantas dengan harga mesra bajet",
      ],
      process: [
        { step: "01", title: "Ukuran & Pemilihan Laminate", desc: "Kami mengukur bukaan, menyemak arah ayunan dan membantu anda memilih warna serta tekstur laminate yang sesuai." },
        { step: "02", title: "Tempahan Pantas", desc: "Pintu laminate ditempah ikut warna pilihan; tempoh 3–7 hari dengan harga dan jadual yang jelas sebelum kerja." },
        { step: "03", title: "Penyediaan Bingkai", desc: "Bingkai sedia ada diperiksa; jika kukuh ia dikekalkan, jika rosak kami cadangkan penggantian bingkai baharu." },
        { step: "04", title: "Pemasangan Pintu", desc: "Pintu digantung pada engsel SS304, dijajarkan dengan jurang sekata, dan set kunci dipasang serta dilaraskan." },
        { step: "05", title: "Kemasan & Ujian", desc: "Architrave dipasang jika perlu, pintu diuji hayun dan latch berulang kali, dan kawasan kerja dibersihkan sebelum serahan." },
      ],
      faqs: [
        { q: "Berapa harga pintu laminate termasuk pemasangan?", a: "Harga bermula dari RM250 setiap pintu untuk pintu laminate engineered kulit HDF termasuk pemasangan pada bingkai sedia ada. Jika bingkai baharu diperlukan atau saiz tidak standard, kos akan dinyatakan dalam sebut harga selepas ukuran." },
        { q: "Adakah pintu laminate tahan untuk bilik air?", a: "Pintu laminate lebih tahan kelembapan berbanding kayu pepejal, tetapi tepi dan bawah masih perlu dikedap dengan betul. Untuk bilik air yang sangat lembap kami juga menawarkan pintu PVC yang lebih kalis air sebagai alternatif jika itu lebih sesuai." },
        { q: "Berapa lama masa untuk mendapatkan pintu laminate?", a: "Pintu laminate biasanya sedia dalam 3–7 hari dari tempahan, jauh lebih cepat daripada pintu kayu pepejal (14–21 hari). Ini menjadikannya pilihan baik untuk penggantian segera dan unit sewa yang perlu disiapkan cepat." },
        { q: "Boleh saya pilih warna dan tekstur laminate?", a: "Ya. Terdapat pelbagai pilihan warna solid, tekstur kayu dan corak moden. Kami membawa katalog fizikal semasa ukuran supaya anda dapat melihat dan memilih kemasan yang sepadan dengan interior rumah anda." },
      ],
      metaTitle: "Pemasangan Pintu Laminate KL & Selangor | Dari RM250",
      metaDesc: "Bekal & pasang pintu laminate HDF engineered di KL & Selangor. Rupa moden, ringan dan stabil untuk bilik air, dapur dan sewa. Dari RM250, 3–7 hari siap, jaminan 12 bulan.",
    },
    zh: {
      name: "防火板门安装",
      tagline: "HDF 贴面防火板门，表面光滑，款式现代，轻盈稳定且经济实惠。从 RM 250 起。",
      description: "防火板门是现代住宅、浴室、厨房与出租单位的经济之选，需要在马来西亚潮湿气候下保持轻盈与尺寸稳定。KL Servis Rumah 供应 HDF 贴面工程门，防火板饰面光滑，提供多种现代颜色与木纹可选。相比实木门，防火板门更轻、尺寸更稳定、不易膨胀——易于打理且价格更低（从 RM250 起）。每次安装均包含精确测量、以 SS304 铰链悬挂、均匀缝隙调校与锁具安装。现有门框方正牢固可保留使用。门扇 3–7 天到货，适合快速更换与出租房项目。",
      highlights: [
        "HDF 贴面工程门，防火板饰面光滑，多种现代颜色可选",
        "比实木门更轻、更稳定，适合潮湿气候",
        "适用于浴室、厨房、次卧与出租单位",
        "配 SS304 铰链，缝隙均匀 3–4mm/5–8mm",
        "3–7 天到货，快速更换，价格实惠",
      ],
      process: [
        { step: "01", title: "测量与选色", desc: "测量门洞并确认开向，协助挑选合适的防火板颜色与木纹。" },
        { step: "02", title: "快速下单", desc: "按所选颜色下单，3–7 天到货，报价与工期清晰。" },
        { step: "03", title: "检查门框", desc: "检查现有门框是否方正牢固；状况良好可保留，否则建议更换新框。" },
        { step: "04", title: "门扇安装", desc: "将门扇挂在 SS304 铰链上，调匀缝隙并安装调试锁具。" },
        { step: "05", title: "收尾与测试", desc: "需要时安装门套，反复开关测试，清理施工区域后交付。" },
      ],
      faqs: [
        { q: "防火板门含安装多少钱？", a: "每扇从 RM250 起，包含 HDF 贴面防火板门扇与在现有门框上的安装。若需新门框或非标尺寸，现场测量后会在报价中另列。" },
        { q: "防火板门适合浴室吗？", a: "比实木门更耐潮，但门扇边部与底部仍需做好封边。对于非常潮湿的浴室，我们也可提供更防水的 PVC 门作为替代方案。" },
        { q: "多久可以到货安装？", a: "防火板门通常 3–7 天到货，远快于实木门 14–21 天的周期，适合急需更换与出租房快速周转。" },
        { q: "可以选颜色和纹理吗？", a: "可以，提供多种纯色、木纹与现代花色。量尺时会携带实体色卡，方便您挑选与室内搭配的饰面。" },
      ],
      metaTitle: "吉隆坡防火板门安装 | RM250起",
      metaDesc: "吉隆坡与雪兰莪 HDF 贴面防火板门供应安装。款式现代、轻盈稳定，适合浴室、厨房与出租房。从 RM250 起，3–7 天到货，12 个月保修。",
    },
  },
  "door/door-planing-and-adjustment": {
    ms: {
      name: "Ketam & Pelarasan Pintu",
      tagline: "Ketam pintu yang menggesel lantai atau bingkai, gantung semula pada engsel sedia ada dan laras set kunci agar ayunan kembali lancar. Dari RM 120.",
      description: "Pintu yang tiba-tiba menggesel lantai, melekat pada bingkai atau sukar dikunci biasanya berpunca daripada pengembangan kayu akibat kelembapan tropika, engsel longgar yang menyebabkan pintu melendut, atau bingkai rumah yang mendap. Daripada terus menggantikan pintu baharu, perkhidmatan ketam dan pelarasan menawarkan penyelesaian kos rendah dan pantas. Kami menilai punca dahulu — kelembapan, engsel, atau lantai baharu yang meninggikan aras — kemudian mengetam tepi bawah atau sisi pintu dengan planer elektrik, menggantung semula pintu pada engsel sedia ada dengan skru lebih panjang jika perlu, dan melaraskan plat strike serta set kunci supaya latch masuk dengan lancar. Kebanyakan kerja mengambil masa 30–60 minit setiap pintu dan boleh dilakukan tanpa menanggalkan bingkai. Jika pintu telah kembang teruk, retak atau melengkung, kami akan mengesyorkan penggantian terus dengan sebut harga yang jujur.",
      highlights: [
        "Mengetam pintu yang menggesel lantai atau melekat pada bingkai dengan planer elektrik",
        "Gantung semula pada engsel sedia ada dengan skru lebih panjang untuk atasi pintu melendut",
        "Laras plat strike dan set kunci agar latch masuk lancar dan pintu terkunci rapat",
        "Kebanyakan pintu siap dalam 30–60 minit tanpa perlu tanggalkan bingkai",
        "Penilaian jujur — ketam jika masih boleh diselamatkan, ganti jika sudah kembang teruk",
      ],
      process: [
        { step: "01", title: "Diagnosis Punca", desc: "Kami memeriksa kelembapan kayu, keadaan engsel, kerataan lantai dan penjajaran bingkai untuk kenal pasti punca sebenar." },
        { step: "02", title: "Tanda & Lindung", desc: "Kawasan lantai dan bingkai dilindungi, garisan ketam ditanda dengan tepat sebelum pintu ditanggalkan." },
        { step: "03", title: "Ketam Pintu", desc: "Tepi pintu diketam dengan planer elektrik mengikut garisan tanda sehingga jurang bawah 5–8mm dicapai." },
        { step: "04", title: "Gantung Semula & Laras Engsel", desc: "Pintu digantung semula, engsel diketatkan dengan skru lebih panjang jika melendut, dan jurang dilaraskan sekata." },
        { step: "05", title: "Laras Kunci & Ujian", desc: "Plat strike dan set kunci dilaraskan, kemudian pintu diuji buka, tutup dan kunci berulang kali sehingga lancar." },
      ],
      faqs: [
        { q: "Mengapa pintu saya tiba-tiba menggesel lantai?", a: "Punca paling biasa ialah pengembangan kayu akibat kelembapan tropika — pintu menyerap lembapan dan mengembang, terutamanya di bilik mandi dan dapur. Punca lain termasuk engsel longgar (pintu melendut), frame rumah mendap, atau lantai baharu yang meninggikan aras. Kami menilai punca dan sama ada mengetam, menggantung semula dengan skru panjang, atau menggantikan pintu jika kembang terlalu teruk." },
        { q: "Berapa harga untuk ketam dan laras pintu?", a: "Harga bermula dari RM120 setiap pintu untuk kerja ketam, gantung semula dan laras kunci pada bingkai sedia ada. Jika engsel perlu diganti atau pintu perlu ditanggalkan sepenuhnya, kos akan dinyatakan dalam sebut harga selepas pemeriksaan." },
        { q: "Adakah habuk banyak semasa mengetam pintu?", a: "Kami menggunakan planer dengan vakum dan menutup kawasan lantai serta perabot dengan kain plastik. Habuk dikawal dan kawasan dibersihkan selepas kerja; kebanyakan rumah boleh didiami seperti biasa sebaik siap." },
        { q: "Bila ketam tidak lagi sesuai dan pintu perlu diganti?", a: "Jika pintu telah kembang melebihi 8–10mm, retak panjang, melengkung teruk atau MDF telah mengembang akibat air, ketam sahaja tidak akan tahan lama. Kami akan tunjukkan keadaan pintu dan cadangkan penggantian laminate (dari RM250) atau kayu pepejal (dari RM550) dengan jujur." },
      ],
      metaTitle: "Ketam & Pelarasan Pintu KL & Selangor | Dari RM120",
      metaDesc: "Ketam pintu menggesel lantai atau bingkai di KL & Selangor. Ketam elektrik, gantung semula engsel, laras kunci. Siap 30–60 minit/pintu. Dari RM120.",
    },
    zh: {
      name: "门刨修与调校",
      tagline: "对刮地或卡框的门进行刨修，在现有铰链上重新挂门并调试锁具，恢复顺滑开关。从 RM 120 起。",
      description: "门突然刮地、卡在门框或难以上锁，通常源于热带潮湿导致木门吸潮膨胀、铰链松动致门扇下垂，或房屋框架沉降。与其直接换新门，刨修与调校是更省钱快捷的方案。我们先判断根因——潮湿、铰链或新铺地面抬高——再用电动刨按标记刨削门扇底部或侧边，在现有铰链上用更长螺丝重新挂门，并调校锁扣板与锁具，使锁舌顺滑入位。多数门 30–60 分钟内完成，无需拆除门框。若门已严重膨胀、开裂或翘曲，我们会如实建议直接更换。",
      highlights: [
        "用电动刨刨削刮地或卡框的门扇，控制底部 5–8mm 缝隙",
        "在现有铰链上用更长螺丝重新挂门，纠正下垂",
        "调校锁扣板与锁具，使上锁顺滑牢靠",
        "多数门 30–60 分钟完成，无需拆门框",
        "如实评估——能刨则刨，严重膨胀则建议更换",
      ],
      process: [
        { step: "01", title: "根因诊断", desc: "检查木材含水、铰链状况、地面平整度与门框方正度，找出真正原因。" },
        { step: "02", title: "标记与保护", desc: "保护地面与门框，按精确标记线准备刨削，必要时卸下门扇。" },
        { step: "03", title: "刨削门扇", desc: "用电动刨按标记线刨削门边，直至底部达到 5–8mm 合理缝隙。" },
        { step: "04", title: "重挂与调铰链", desc: "重新挂门，松动铰链用更长螺丝加固，并调匀四周缝隙。" },
        { step: "05", title: "调锁与测试", desc: "调校锁扣板与锁具，反复开关与上锁测试，直至顺滑可靠。" },
      ],
      faqs: [
        { q: "为什么门突然刮地？", a: "最常见是热带潮湿致木门吸潮膨胀，浴室与厨房门尤为明显。其他原因包括铰链松动致门扇下垂、房屋沉降或新铺地面抬高。我们会现场判断，视情况刨门、用长螺丝重挂铰链，或在膨胀严重时建议整门更换。" },
        { q: "刨门与调校多少钱？", a: "每扇门从 RM120 起，包含在现有门框上的刨削、重挂与锁具调校。如需更换铰链或整门拆卸，现场检查后会在报价中另列。" },
        { q: "刨门时会产生很多粉尘吗？", a: "我们使用带吸尘的电动刨，并用塑料布遮盖地面与家具，粉尘可控，完工后会清理现场，多数家庭可立即正常居住。" },
        { q: "什么情况刨门已不合适、需要换门？", a: "若门已膨胀超过 8–10mm、出现长裂纹、严重翘曲或 MDF 因进水已发胀，单靠刨削无法持久。我们会展示门扇状况，并如实建议更换防火板门（RM250 起）或实木门（RM550 起）。" },
      ],
      metaTitle: "吉隆坡门刨修与调校 | RM120起",
      metaDesc: "吉隆坡与雪兰莪门刮地卡框刨修。电动刨削、铰链重挂、锁具调校，30–60 分钟/扇。从 RM120 起，即日可完成。",
    },
  },
  "door/fire-rated-door-installation": {
    ms: {
      name: "Pemasangan Pintu Tahan Api",
      tagline: "Pintu tahan api bertauliah 1 jam atau 2 jam dengan pengedap intumescent dan penutup sendiri untuk pematuhan peraturan bangunan. Dari RM 950.",
      description: "Pintu tahan api ialah sistem pintu dan bingkai bertauliah yang diuji untuk menahan api bagi tempoh tertentu — lazimnya 1 jam atau 2 jam — dan dikehendaki oleh peraturan bangunan Malaysia untuk pintu dapur di sesetengah kondominium, pintu ke tangga kecemasan, dan premis komersial tertentu. KL Servis Rumah membekalkan dan memasang pintu tahan api daripada jenama bertauliah termasuk Sanitor, Felicia dan pengeluar tempatan yang diperakui, lengkap dengan pengedap intumescent yang mengembang apabila terkena haba, engsel keluli tahan api, dan peranti penutup sendiri. Setiap pemasangan termasuk ukuran bukaan, pengesahan rating yang diperlukan, pemasangan bingkai tahan api dengan kedapan yang betul, dan ujian tutup-sendiri sebelum serahan. Harga bermula dari RM950 setiap pintu termasuk bingkai dan aksesori asas; tempoh 14–21 hari untuk pintu kustom.",
      highlights: [
        "Pintu bertauliah 1 jam atau 2 jam dengan sijil pengeluar dan label rating",
        "Pengedap intumescent yang mengembang tutup celah apabila terdedah haba/api",
        "Jenama bertauliah Sanitor, Felicia dan pengeluar tempatan diperakui",
        "Bingkai tahan api dengan engsel keluli dan peranti penutup sendiri",
        "Pematuhan peraturan bangunan untuk dapur kondominium dan tangga kecemasan",
      ],
      process: [
        { step: "01", title: "Semakan Keperluan Rating", desc: "Kami menyemak pelan bangunan, syarat pengurusan dan peraturan bomba untuk sahkan sama ada 1 jam atau 2 jam diperlukan." },
        { step: "02", title: "Ukuran & Pemilihan", desc: "Bukaan diukur tepat (tinggi, lebar, kedalaman bingkai) dan model pintu tahan api yang bertauliah dipilih." },
        { step: "03", title: "Tempahan & Kelulusan", desc: "Pintu ditempah ikut rating; tempoh 14–21 hari dengan sijil dan label rating disediakan untuk simpanan anda." },
        { step: "04", title: "Pemasangan Bingkai & Pintu", desc: "Bingkai tahan api dipasang dengan kedapan betul, pintu digantung pada engsel tahan api dan pengedap intumescent dipasang keliling." },
        { step: "05", title: "Peranti Tutup & Ujian", desc: "Peranti penutup sendiri dipasang dan dilaraskan, kemudian pintu diuji tutup-sendiri, latch dan jurang sebelum serahan." },
      ],
      faqs: [
        { q: "Apakah pintu tahan api dan adakah saya memerlukannya?", a: "Pintu tahan api ialah sistem pintu dan bingkai bertauliah yang diuji untuk menahan api 1 jam atau 2 jam. Ia diwajibkan untuk pintu dapur di sesetengah kondominium, semua pintu ke tangga kecemasan, dan premis komersial tertentu mengikut peraturan bangunan Malaysia. Kami bekalkan pintu Sanitor, Felicia dan pengeluar tempatan bertauliah dengan pengedap intumescent dan penutup sendiri yang betul." },
        { q: "Berapa harga pintu tahan api termasuk pemasangan?", a: "Harga bermula dari RM950 setiap pintu untuk pintu tahan api 1 jam termasuk bingkai tahan api, pengedap intumescent, engsel keluli dan pemasangan. Pintu 2 jam atau saiz kustom lebih tinggi; sebut harga terperinci diberikan selepas ukuran dan pengesahan rating." },
        { q: "Apakah beza pintu 1 jam dan 2 jam?", a: "Pintu 1 jam diuji untuk menahan api dan asap selama 60 minit, pintu 2 jam selama 120 minit. Pilihan bergantung pada lokasi — pintu dapur kondominium biasanya 1 jam, manakala pintu tangga kecemasan dan laluan bomba sering memerlukan 2 jam mengikut pelan kelulusan bangunan." },
        { q: "Bolehkah pintu tahan api dipasang di kondominium sedia ada?", a: "Ya. Kami mengukur bukaan sedia ada, memilih pintu yang bertauliah agar muat, dan memasang bingkai tahan api dengan kemasan yang kemas. Kami juga mengurus peranti penutup sendiri supaya pintu sentiasa tertutup rapat seperti yang dikehendaki peraturan." },
      ],
      metaTitle: "Pemasangan Pintu Tahan Api KL & Selangor | Dari RM950",
      metaDesc: "Bekal & pasang pintu tahan api 1 jam/2 jam bertauliah di KL & Selangor. Jenama Sanitor/Felicia, pengedap intumescent, penutup sendiri. Dari RM950, jaminan 12 bulan.",
    },
    zh: {
      name: "防火门安装",
      tagline: "经认证的 1 小时或 2 小时防火门，配膨胀密封条与闭门器，符合建筑法规。从 RM 950 起。",
      description: "防火门是经测试可在规定时间内耐火的认证门与门框系统——通常为 1 小时或 2 小时——马来西亚建筑法规要求部分公寓的厨房门、所有通往消防疏散楼梯的门以及特定商业场所必须安装。KL Servis Rumah 供应并安装 Sanitor、Felicia 及本地认证厂商的防火门，配遇热膨胀的膨胀密封条、防火钢铰链与闭门器。每次安装均含门洞测量、所需耐火等级确认、防火门框规范安装与闭门测试。价格从每扇 RM950 起含门框与基础配件，定制门周期 14–21 天。",
      highlights: [
        "1 小时或 2 小时认证防火门，附制造商证书与等级标签",
        "遇热膨胀的膨胀密封条，封堵缝隙阻隔烟火",
        "Sanitor、Felicia 及本地认证品牌",
        "防火门框配钢铰链与闭门器",
        "符合公寓厨房与疏散楼梯的建筑法规",
      ],
      process: [
        { step: "01", title: "确认耐火等级", desc: "核对建筑图纸、管理处要求与消防规范，确认需 1 小时还是 2 小时。" },
        { step: "02", title: "测量与选型", desc: "精确测量门洞高宽框深，选择对应等级的认证防火门型号。" },
        { step: "03", title: "下单与证书", desc: "按等级下单，14–21 天到货，随附证书与等级标签供存档。" },
        { step: "04", title: "门框与门扇安装", desc: "规范安装防火门框，将门扇挂在防火铰链上，四周安装膨胀密封条。" },
        { step: "05", title: "闭门器与测试", desc: "安装并调试闭门器，反复测试自动关闭、锁舌与缝隙后交付。" },
      ],
      faqs: [
        { q: "什么是防火门？我需要吗？", a: "防火门是经测试可在 1 小时或 2 小时内耐火的认证门与门框系统。马来西亚建筑法规要求部分公寓厨房门、所有通往消防疏散楼梯的门及特定商业场所安装。我们供应 Sanitor、Felicia 及本地认证品牌的防火门，配膨胀密封条与闭门器。" },
        { q: "防火门含安装多少钱？", a: "1 小时防火门从每扇 RM950 起，含防火门框、膨胀密封条、钢铰链与安装。2 小时或定制尺寸价格更高，现场测量并确认等级后提供逐项报价。" },
        { q: "1 小时和 2 小时防火门有什么区别？", a: "1 小时门经测试可阻隔火焰与烟气 60 分钟，2 小时门为 120 分钟。选择取决于位置——公寓厨房门通常 1 小时，疏散楼梯与消防通道常需 2 小时，以建筑批复图纸为准。" },
        { q: "现有公寓可以加装防火门吗？", a: "可以。我们测量现有门洞，选配合适的认证防火门，并规范安装防火门框，做好收口。闭门器会调试至按规范始终保持常闭。" },
      ],
      metaTitle: "吉隆坡防火门安装 | RM950起",
      metaDesc: "吉隆坡与雪兰莪 1 小时/2 小时认证防火门供应安装。Sanitor/Felicia 品牌，膨胀密封条、闭门器。从 RM950 起，12 个月保修。",
    },
  },

  /* ── ROOF REPAIR ─────────────────────────────────────────────────────── */
  "roof-repair/roof-leak-diagnosis-and-repair": {
    ms: {
      name: "Diagnosis & Pembaikan Bocor Bumbung",
      tagline: "Kesan lokasi bocor bumbung dengan pengimejan terma, kemudian baiki jubin, flashing atau membran secara bersasar. Dari RM 380.",
      description: "Bocor bumbung paling mengecewakan apabila anda tidak tahu jubin mana yang bermasalah. Kami menggunakan kamera pengimejan terma dan meter kelembapan untuk mengesan laluan air ke punca sebenar — tiada lagi kerja teka-teki yang menggantikan jubin secara rawak. Setelah punca dikenal pasti, kami membaiki kawasan terjejas sahaja: menggantikan jubin konkrit atau tanah liat yang retak, memfabrikasi dan memasang flashing zincalume atau colour-bond baharu pada penembusan bumbung, atau menampal membran pada bumbung rata. Setiap kerja disertakan laporan bertulis dengan foto sebelum/selepas dan jaminan ke atas pembaikan yang dilakukan. Untuk rumah dua tingkat, kami menggunakan perlindungan tepi penuh dan papan merangkak — tidak pernah berjalan di atas jubin rapuh.",
      highlights: [
        "Pengimejan terma dan meter kelembapan untuk mengesan punca sebenar",
        "Penggantian jubin konkrit, tanah liat atau logam secara bersasar",
        "Fabrikasi flashing zincalume atau colour-bond di tapak",
        "Laporan bertulis dengan foto sebelum/selepas dan jaminan",
        "Perlindungan jatuh penuh untuk kerja bumbung dua tingkat",
      ],
      process: [
        { step: "01", title: "Pemeriksaan & Imbasan Terma", desc: "Kami memeriksa bumbung secara fizikal dan menggunakan pengimejan terma untuk mengesan laluan air ke punca bocor." },
        { step: "02", title: "Laporan & Sebut Harga", desc: "Anda menerima laporan dengan foto beranotasi, punca dikenal pasti, pembaikan disyorkan dan harga terperinci." },
        { step: "03", title: "Persediaan Kerja Selamat", desc: "Perlindungan tepi dan platform akses dipasang. Papan merangkak digunakan — tidak pernah memijak jubin rapuh." },
        { step: "04", title: "Pembaikan Bersasar", desc: "Jubin retak diganti, flashing baharu difabrikasi dan dipasang, atau membran ditampal pada kawasan bocor sahaja." },
        { step: "05", title: "Ujian Air & Serahan", desc: "Ujian air terkawal dijalankan jika praktikal, dan anda menerima foto sebelum/selepas serta dokumen jaminan." },
      ],
      faqs: [
        { q: "Bagaimana pengimejan terma mengesan bocor bumbung?", a: "Air yang terperangkap di bawah jubin atau membran mempunyai suhu berbeza daripada kawasan kering. Kamera terma mengesan perbezaan suhu ini, menunjukkan laluan air dengan tepat walaupun ia tidak kelihatan dari luar. Ini membolehkan kami membaiki hanya kawasan yang terjejas." },
        { q: "Berapa harga untuk mengesan dan membaiki satu kebocoran?", a: "Harga bermula dari RM380 untuk diagnosis dan pembaikan bersasar pada satu kawasan. Jika terdapat pelbagai punca atau kerosakan meluas, sebut harga akan diberikan selepas pemeriksaan. Harga termasuk laporan bertulis dan foto." },
        { q: "Bolehkah anda bekerja pada bumbung curam atau dua tingkat?", a: "Ya. Pasukan kami terlatih untuk kerja di ketinggian dan menggunakan perlindungan jatuh penuh, perlindungan tepi perimeter dan platform akses. Kami membawa insurans Pampasan Pekerja dan Liabiliti Awam." },
        { q: "Perlukah saya menggantikan seluruh bumbung atau hanya membaiki kebocoran?", a: "Jika bocor hanya pada satu kawasan, jubin sekeliling masih baik dan kalis air sedia ada di bawah 10 tahun, pembaikan bersasar biasanya mencukupi. Jika terdapat pelbagai titik bocor, kerosakan rabung meluas atau membran melebihi 15 tahun, kami akan mengesyorkan pembaikan menyeluruh dengan sebut harga yang jujur." },
      ],
      metaTitle: "Diagnosis & Pembaikan Bocor Bumbung KL & Selangor | Dari RM380",
      metaDesc: "Kesan punca bocor bumbung dengan pengimejan terma di KL & Selangor. Baiki jubin, flashing atau membran secara bersasar. Laporan bertulis, jaminan kerja. Dari RM380.",
    },
    zh: {
      name: "屋顶漏水诊断与修复",
      tagline: "用热成像定位漏水源头，再有针对性地修复瓦片、泛水板或防水层。从 RM 380 起。",
      description: "屋顶漏水最让人头疼的就是不知道哪片瓦出了问题。我们使用热成像相机与湿度计追踪水分路径至真正源头——不再靠猜测随机换瓦。找到根源后，我们只修复受影响的区域：更换开裂的混凝土瓦或陶土瓦，现场制作安装锌铝或彩钢泛水板，或修补平屋顶防水层。每项工程都附有带前后对比照片与所做修复保修的书面报告。对双层房屋，我们采用全周边防护与爬行板——绝不踩踏脆瓦。",
      highlights: [
        "热成像与湿度计定位真正漏水源头",
        "有针对性地更换混凝土瓦、陶土瓦或金属瓦",
        "现场制作锌铝或彩钢泛水板",
        "附前后对比照片与保修的书面报告",
        "双层屋顶作业全面坠落防护",
      ],
      process: [
        { step: "01", title: "检查与热成像扫描", desc: "实地检查屋面，并使用热成像追踪水分路径至漏水源头。" },
        { step: "02", title: "报告与报价", desc: "您收到附标注照片的报告，列明确认的根源、建议修复及逐项价格。" },
        { step: "03", title: "安全作业准备", desc: "安装边缘防护与进出平台。使用爬行板——绝不踩踏脆瓦。" },
        { step: "04", title: "针对性修复", desc: "更换裂瓦、现场制作安装新泛水板，或仅修补漏水区域的防水层。" },
        { step: "05", title: "淋水测试与交付", desc: "条件允许时进行可控淋水测试，您获得前后对比照片及保修文件。" },
      ],
      faqs: [
        { q: "热成像如何检测屋顶漏水？", a: "瓦片或防水层下积水的温度与干燥区域不同。热成像相机可捕捉这种温差，精确显示水分路径，即便从外部看不见。这使我们能仅修复受影响的区域。" },
        { q: "检测并修复一处漏水要多少钱？", a: "从 RM380 起，包含一处漏水区域的诊断与针对性修复。若有多处或大面积损坏，检查后会提供逐项报价。价格含书面报告与照片。" },
        { q: "能在陡坡或双层屋顶上安全作业吗？", a: "能。我们的团队经过高空作业培训，使用全面坠落防护、全周边边缘保护及进出平台，并持有劳工赔偿与公众责任保险。" },
        { q: "需要换整片屋顶还是只修漏水？", a: "若漏水局限一处、周围瓦片完好、现有防水层使用不足 10 年，局部维修通常足够。若有多处漏水、屋脊大面积损坏或防水层超 15 年，我们会诚实建议大面积翻修并提供报价。" },
      ],
      metaTitle: "吉隆坡与雪兰莪屋顶漏水诊断与修复 | RM380起",
      metaDesc: "吉隆坡与雪兰莪热成像屋顶漏水检测。针对性更换瓦片、泛水板或防水层。书面报告，保修。从RM380起。",
    },
  },
  "roof-repair/ridge-re-bedding-and-re-pointing": {
    ms: {
      name: "Re-Bedding & Re-Pointing Rabung",
      tagline: "Tanggalkan mortar rabung yang longgar dan ganti dengan mortar polimer fleksibel untuk pengedapan kekal tanpa retak rambut. Dari RM 22 / kaki linier.",
      description: "Rabung bumbung ialah garisan paling terdedah pada bumbung — ia menerima angin, hujan dan haba UV secara langsung. Lama kelamaan, mortar simen biasa di bawah dan di atas jubin rabung menjadi retak, longgar atau tertanggal sepenuhnya, membenarkan air masuk dan menyebabkan kebocoran siling di tingkat atas. Kami menanggalkan semua mortar lama yang longgar, membersihkan jubin rabung, meletakkan semula jubin di atas lapisan mortar polimer fleksibel yang baru (re-bedding), dan mengemaskan sambungan atas dengan campuran polimer yang sama (re-pointing). Mortar polimer kekal fleksibel, menyerap pergerakan struktur kecil tanpa retak, dan bertahan jauh lebih lama daripada mortar simen biasa dalam cuaca tropika. Kerja termasuk pelupusan mortar lama dan pembersihan tapak sepenuhnya.",
      highlights: [
        "Mortar polimer fleksibel — tidak retak seperti simen biasa",
        "Menanggalkan semua mortar lama yang longgar sebelum kerja baru",
        "Re-bedding (lapisan bawah) dan re-pointing (kemasan atas)",
        "Tahan pergerakan struktur kecil dan kitaran UV/hujan tropika",
        "Pelupusan mortar lama dan pembersihan tapak termasuk",
      ],
      process: [
        { step: "01", title: "Pemeriksaan Rabung", desc: "Kami memeriksa setiap jubin rabung, mengenal pasti bahagian yang longgar, retak atau hilang dan mengukur panjang yang perlu dikerjakan." },
        { step: "02", title: "Penanggalan Mortar Lama", desc: "Semua mortar simen yang longgar, retak atau tertanggal ditanggalkan dengan berhati-hati tanpa merosakkan jubin rabung." },
        { step: "03", title: "Re-Bedding", desc: "Jubin rabung diletakkan semula di atas lapisan mortar polimer fleksibel yang baru, memastikan setiap jubin duduk kukuh dan rata." },
        { step: "04", title: "Re-Pointing", desc: "Sambungan atas di antara jubin rabung dikemas dengan mortar polimer yang sama, dibentuk kemas untuk larian air yang betul." },
        { step: "05", title: "Pemeriksaan & Pembersihan", desc: "Kami memeriksa keseluruhan garisan rabung, membersihkan serpihan mortar dan memastikan tapak bersih sebelum serahan." },
      ],
      faqs: [
        { q: "Apakah beza re-bedding dan re-pointing?", a: "Re-bedding ialah meletakkan semula jubin rabung di atas lapisan mortar baru (di bawah jubin). Re-pointing ialah mengemas sambungan mortar yang kelihatan di atas dan di antara jubin rabung. Kedua-duanya biasanya dilakukan bersama kerana mortar lama di kedua-dua bahagian akan rosak pada masa yang sama." },
        { q: "Mengapa mortar polimer lebih baik daripada simen biasa?", a: "Simen biasa menjadi keras dan rapuh, jadi ia akan retak semula dalam masa 1–2 tahun akibat pengembangan haba dan pergerakan struktur kecil. Mortar polimer kekal fleksibel, menyerap pergerakan ini tanpa retak, dan mempunyai lekatan yang lebih baik pada jubin." },
        { q: "Berapa harga untuk re-bedding dan re-pointing rabung?", a: "Harga bermula dari RM22 setiap kaki linier, termasuk penanggalan mortar lama, re-bedding, re-pointing dan pembersihan. Panjang rabung diukur semasa pemeriksaan. Sebut harga terperinci diberikan sebelum kerja." },
        { q: "Berapa lama kerja ini mengambil masa?", a: "Kerja rabung untuk rumah teres biasa (20–30 kaki linier rabung) biasanya mengambil masa 1–2 hari, bergantung pada cuaca dan akses bumbung." },
      ],
      metaTitle: "Re-Bedding & Re-Pointing Rabung KL & Selangor | Dari RM22/kaki linier",
      metaDesc: "Ganti mortar rabung longgar dengan mortar polimer fleksibel di KL & Selangor. Tahan retak, tahan cuaca tropika, jaminan kerja. Dari RM22/kaki linier.",
    },
    zh: {
      name: "屋脊重新垫底与勾缝",
      tagline: "清除松动的屋脊砂浆，更换为柔性聚合物砂浆，实现永久密封、不再发丝开裂。从 RM 22 / 延英尺起。",
      description: "屋脊是屋顶最暴露的线条——直接承受风、雨和紫外线。随时间推移，屋脊瓦下方和上方的普通水泥砂浆会开裂、松动甚至完全脱落，让水渗入并导致顶层天花漏水。我们清除所有松动的旧砂浆，清洁屋脊瓦，将瓦片重新坐入新的柔性聚合物砂浆底层（re-bedding），并用相同聚合物混合料修整上部接缝（re-pointing）。聚合物砂浆保持柔韧，可吸收轻微结构位移而不开裂，在热带气候下比普通水泥砂浆耐久得多。工程包括旧砂浆清理与现场打扫。",
      highlights: [
        "柔性聚合物砂浆——不似普通水泥般开裂",
        "新工作前清除所有松动旧砂浆",
        "包含 re-bedding（底层）与 re-pointing（面层）",
        "耐受轻微结构位移及热带紫外线/雨水循环",
        "含旧砂浆清运与现场打扫",
      ],
      process: [
        { step: "01", title: "屋脊检查", desc: "逐片检查屋脊瓦，识别松动、开裂或脱落区域，并测量需要施工的长度。" },
        { step: "02", title: "清除旧砂浆", desc: "小心清除所有松动、开裂或脱落的旧水泥砂浆，不损伤屋脊瓦。" },
        { step: "03", title: "Re-Bedding（垫底）", desc: "将屋脊瓦重新坐入新的柔性聚合物砂浆底层，确保每片瓦稳固平整。" },
        { step: "04", title: "Re-Pointing（勾缝）", desc: "用相同的聚合物砂浆修整屋脊瓦之间的上部接缝，塑形整齐以利排水。" },
        { step: "05", title: "检查与清洁", desc: "检查整条屋脊，清理砂浆碎屑，确保现场干净后交付。" },
      ],
      faqs: [
        { q: "Re-bedding 和 re-pointing 有什么区别？", a: "Re-bedding 是在新砂浆层上重新安放屋脊瓦（瓦片下方）。Re-pointing 是修整屋脊瓦之间及上方可见的砂浆接缝（瓦片上方）。两者通常一起做，因为上下旧砂浆往往同时老化损坏。" },
        { q: "为什么聚合物砂浆比普通水泥好？", a: "普通水泥硬化后变脆，一到两年内因热胀冷缩和轻微结构位移会再次开裂。聚合物砂浆保持柔韧，可吸收这些位移而不开裂，且对瓦片的附着力更强。" },
        { q: "屋脊 re-bedding 和 re-pointing 多少钱？", a: "从 RM22 每延英尺起，含旧砂浆清除、re-bedding、re-pointing 和清洁。屋脊长度在检查时测量，施工前提供逐项报价。" },
        { q: "施工需要多长时间？", a: "标准排屋（20–30 延英尺屋脊）通常需 1–2 天，具体取决于天气与屋顶通行条件。" },
      ],
      metaTitle: "吉隆坡屋脊重新垫底与勾缝 | RM22/延英尺起",
      metaDesc: "吉隆坡与雪兰莪屋脊砂浆更换为柔性聚合物砂浆。抗裂、耐热带气候，工作保修。从RM22/延英尺起。",
    },
  },
  "roof-repair/gutter-cleaning-and-realignment": {
    ms: {
      name: "Pembersihan & Penjajaran Semula Longkang",
      tagline: "Bersihkan daun dan serpihan dari longkang, selaraskan semula kecerunan ke arah paip turun, dan kedapkan sambungan bocor. Dari RM 320.",
      description: "Longkang yang tersumbat dengan daun, ranting dan serpihan bukan sahaja menyebabkan air melimpah dan merosakkan dinding luar — air yang bertakung juga menarik nyamuk dan mempercepatkan kakisan longkang logam. Kami membersihkan semua serpihan dari longkang dan paip turun secara manual, memeriksa kecerunan longkang dan menjajarkan semula mana-mana bahagian yang mendap atau melendut supaya air mengalir lancar ke paip turun. Sambungan longkang yang bocor dikedapkan semula dengan sealant kalis air yang sesuai. Untuk rumah dua tingkat, kami menggunakan tangga dan platform akses yang selamat. Kerja termasuk ujian aliran air untuk mengesahkan saliran berfungsi dengan betul sebelum serahan.",
      highlights: [
        "Pembersihan manual semua serpihan dari longkang dan paip turun",
        "Penjajaran semula kecerunan longkang yang mendap atau melendut",
        "Pengedapan semula sambungan bocor dengan sealant kalis air",
        "Ujian aliran air untuk mengesahkan saliran berfungsi",
        "Pelupusan serpihan dan pembersihan tapak termasuk",
      ],
      process: [
        { step: "01", title: "Pemeriksaan Longkang", desc: "Kami memeriksa setiap bahagian longkang, paip turun dan sambungan, mengenal pasti tersumbat, kebocoran dan masalah kecerunan." },
        { step: "02", title: "Pembersihan Manual", desc: "Semua daun, ranting dan serpihan dikeluarkan dari longkang dan paip turun secara manual, dimasukkan ke dalam beg untuk dilupuskan." },
        { step: "03", title: "Penjajaran Semula", desc: "Bahagian longkang yang mendap atau melendut dijajarkan semula ke kecerunan yang betul (sekurang-kurangnya 1:200) ke arah paip turun." },
        { step: "04", title: "Pengedapan Sambungan", desc: "Sambungan longkang yang bocor dibersihkan dan dikedapkan semula dengan sealant kalis air yang tahan cuaca." },
        { step: "05", title: "Ujian Aliran & Pembersihan", desc: "Air dialirkan melalui longkang untuk mengesahkan saliran lancar, dan tapak dibersihkan sepenuhnya sebelum serahan." },
      ],
      faqs: [
        { q: "Berapa kerap longkang perlu dibersihkan?", a: "Sekurang-kurangnya dua kali setahun — sebelum musim hujan (Oktober/November) dan selepas musim hujan (Mac/April). Rumah yang dikelilingi pokok besar mungkin memerlukan pembersihan setiap 3–4 bulan." },
        { q: "Apakah tanda longkang saya tersumbat atau tidak berfungsi?", a: "Air melimpah dari tepi longkang semasa hujan, tompokan air di bawah longkang, tumbuhan tumbuh dalam longkang, dinding luar bernoda air, atau air menitis dari sambungan longkang." },
        { q: "Berapa harga untuk membersihkan dan menjajarkan semula longkang?", a: "Harga bermula dari RM320 untuk rumah teres standard. Harga berbeza mengikut panjang longkang, ketinggian rumah (satu atau dua tingkat) dan tahap pembersihan yang diperlukan. Sebut harga diberikan selepas pemeriksaan." },
        { q: "Adakah anda membersihkan paip turun yang tersumbat?", a: "Ya. Kami membersihkan paip turun secara manual dari atas dan, jika tersumbat teruk, menggunakan alat snaking atau tekanan air untuk membersihkan sepenuhnya. Paip turun yang rosak akan dilaporkan untuk tindakan lanjut." },
      ],
      metaTitle: "Pembersihan & Penjajaran Semula Longkang KL | Dari RM320",
      metaDesc: "Bersihkan daun & serpihan dari longkang, selaraskan semula kecerunan, kedapkan sambungan bocor di KL & Selangor. Ujian aliran dan pembersihan tapak. Dari RM320.",
    },
    zh: {
      name: "檐沟清理与重新调校",
      tagline: "清除檐沟中的树叶与杂物，将坡度重新对准落水管，并密封渗漏接头。从 RM 320 起。",
      description: "被树叶、树枝与杂物堵塞的檐沟不仅会导致溢水损坏外墙——积水还会滋生蚊虫并加速金属檐沟锈蚀。我们手工清除檐沟与落水管中的所有杂物，检查檐沟坡度，重新调校任何下沉或下垂的段落，确保水顺畅流入落水管。渗漏的檐沟接头用合适的防水密封胶重新处理。双层房屋使用安全梯子与进出平台。工程包括水流测试，确认交付前排水正常。",
      highlights: [
        "手工清除檐沟与落水管中所有杂物",
        "重新调校下沉或下垂檐沟的排水坡度",
        "用防水密封胶重封渗漏接头",
        "水流测试确认排水正常",
        "含杂物清运与现场打扫",
      ],
      process: [
        { step: "01", title: "檐沟检查", desc: "逐段检查檐沟、落水管与接头，识别堵塞、渗漏及坡度问题。" },
        { step: "02", title: "手工清理", desc: "手工清除檐沟与落水管中所有树叶、树枝与杂物，装袋清运。" },
        { step: "03", title: "重新调校", desc: "将下沉或下垂的檐沟段落重新调整至正确排水坡度（至少1:200）朝向落水管。" },
        { step: "04", title: "接头密封", desc: "清洁并重新密封渗漏的檐沟接头，使用耐候防水密封胶。" },
        { step: "05", title: "水流测试与清洁", desc: "放水通过檐沟确认排水顺畅，并彻底清洁现场后交付。" },
      ],
      faqs: [
        { q: "檐沟多久需要清理一次？", a: "每年至少两次——雨季前（10月/11月）和雨季后（3月/4月）。周围有大树的房屋可能需每3–4个月清理一次。" },
        { q: "怎么判断檐沟是否堵塞或失效？", a: "下雨时水从檐沟边缘溢出、檐沟下方地面有积水、檐沟内长出植物、外墙有水渍、或檐沟接头滴水。" },
        { q: "清理与调校檐沟多少钱？", a: "标准排屋从 RM320 起，价格因檐沟长度、房屋层数（单层/双层）及所需清理程度而异。检查后提供报价。" },
        { q: "你们疏通堵塞的落水管吗？", a: "疏通。我们从上方手工清理落水管；堵塞严重时使用通管器或水压冲洗。损坏的落水管会报告并建议后续处理。" },
      ],
      metaTitle: "吉隆坡檐沟清理与调校 | RM320起",
      metaDesc: "吉隆坡与雪兰莪檐沟树叶杂物清理、坡度调校、接头密封。水流测试与现场打扫。从RM320起。",
    },
  },
  "roof-repair/full-torch-on-membrane-waterproofing": {
    ms: {
      name: "Kalis Air Membran Torch-On Penuh",
      tagline: "Sistem membran bitumen dua lapisan sapuan obor dengan jaminan pengeluar 10 tahun untuk bumbung konkrit rata. Dari RM 26 / kaki persegi.",
      description: "Bumbung konkrit rata memerlukan sistem kalis air yang berbeza daripada bumbung bercerun — air bertakung memberi tekanan berterusan pada membran. Kami memasang sistem membran bitumen terubah suai (APP atau SBS) dua lapisan yang disapu dengan obor: lapisan asas 3mm diikuti lapisan penutup 4mm dengan permukaan mineral atau aluminium untuk perlindungan UV. Sebelum pemasangan, substrat konkrit dibersihkan, retakan diisi dan primer bitumen disapu untuk lekatan maksimum. Membran dipasang dengan pertindihan 100mm pada semua sambungan, dan flashing dibentuk pada semua penembusan bumbung (paip bolong, pemanas air, penghawa dingin). Sistem ini disertakan jaminan bahan 15 tahun dari pengeluar dan jaminan kerja 10 tahun dari kami. Ujian kolam air 48 jam dijalankan sebelum serahan.",
      highlights: [
        "Membran APP/SBS dua lapisan (3mm + 4mm) dengan permukaan mineral atau aluminium",
        "Primer bitumen, pengisian retak dan persediaan substrat penuh",
        "Pertindihan 100mm pada semua sambungan untuk pengedapan maksimum",
        "Flashing dibentuk pada semua penembusan bumbung",
        "Jaminan bahan 15 tahun + jaminan kerja 10 tahun, ujian kolam 48 jam",
      ],
      process: [
        { step: "01", title: "Persediaan Substrat", desc: "Permukaan konkrit dibersihkan, retakan diisi dengan sealant fleksibel, dan primer bitumen disapu untuk lekatan membran." },
        { step: "02", title: "Rawatan Perincian", desc: "Flashing dibentuk di sekeliling semua penembusan bumbung, sudut dinding dan longkang menggunakan jalur membran yang dipotong khas." },
        { step: "03", title: "Pemasangan Lapisan Asas", desc: "Lapisan membran 3mm pertama disapu obor ke substrat, dengan pertindihan 100mm pada semua sambungan sisi dan hujung." },
        { step: "04", title: "Pemasangan Lapisan Penutup", desc: "Lapisan membran 4mm kedua dengan permukaan mineral atau aluminium disapu obor di atas lapisan asas, dengan sambungan dijarakkan daripada lapisan bawah." },
        { step: "05", title: "Ujian Kolam & Serahan", desc: "Air ditakung selama 48 jam dan kawasan di bawah diperiksa. Dokumen jaminan pengeluar dan kerja diserahkan selepas ujian lulus." },
      ],
      faqs: [
        { q: "Apakah beza antara membran APP dan SBS?", a: "APP (Atactic Polypropylene) ialah membran plastomerik yang lebih tahan UV dan sesuai untuk bumbung terdedah di iklim panas seperti Malaysia. SBS (Styrene-Butadiene-Styrene) ialah membran elastomerik yang lebih fleksibel pada suhu rendah. Di Malaysia, kami biasanya mengesyorkan APP kerana rintangan UV yang lebih baik." },
        { q: "Berapa lama membran torch-on bertahan di Malaysia?", a: "Sistem dua lapisan yang dipasang dengan betul dengan permukaan mineral atau aluminium boleh bertahan 15–20 tahun. Pengeluar memberikan jaminan bahan 15 tahun. Penyelenggaraan berkala (pemeriksaan setiap 2 tahun) disyorkan untuk memanjangkan jangka hayat." },
        { q: "Berapa harga untuk kalis air bumbung rata dengan membran torch-on?", a: "Harga bermula dari RM26 setiap kaki persegi untuk sistem dua lapisan penuh, termasuk persediaan substrat, primer, membran, flashing, dan ujian kolam. Keluasan diukur semasa pemeriksaan. Sebut harga terperinci diberikan sebelum kerja." },
        { q: "Berapa lama kerja pemasangan mengambil masa?", a: "Bumbung rata rumah teres biasa (200–400 kaki persegi) mengambil masa 2–4 hari, termasuk persediaan, pemasangan membran dan ujian kolam 48 jam. Bumbung yang lebih besar mengambil masa yang lebih lama." },
      ],
      metaTitle: "Kalis Air Membran Torch-On KL | Dari RM26/kaki persegi",
      metaDesc: "Sistem membran bitumen torch-on dua lapisan untuk bumbung konkrit rata di KL & Selangor. Jaminan bahan 15 tahun, jaminan kerja 10 tahun. Dari RM26/kaki persegi.",
    },
    zh: {
      name: "满铺热熔防水卷材",
      tagline: "双层热熔改性沥青卷材系统，制造商10年质保，适用于平屋顶混凝土屋面。从 RM 26 / 平方英尺起。",
      description: "平屋顶混凝土屋面需要不同于坡屋顶的防水系统——积水对卷材产生持续压力。我们安装双层热熔改性沥青卷材系统（APP 或 SBS）：先铺 3mm 底层，再铺 4mm 带矿物颗粒或铝箔保护层的面层以抵御紫外线。施工前，混凝土基层经清洁、裂缝填补并涂刷沥青底漆以实现最大附着力。所有接缝搭接 100mm，并在所有屋面穿出物（通风管、热水器、空调）周围制作泛水。系统附带制造商 15 年材料质保与我们 10 年工艺保修。交付前进行 48 小时蓄水测试。",
      highlights: [
        "双层 APP/SBS 卷材（3mm + 4mm），带矿物或铝箔面层",
        "沥青底漆、裂缝填补与基层全面处理",
        "所有接缝搭接 100mm，确保最大密封",
        "所有屋面穿出物周围制作泛水",
        "制造商 15 年材料质保 + 10 年工艺保修，48 小时蓄水测试",
      ],
      process: [
        { step: "01", title: "基层处理", desc: "清洁混凝土表面，用柔性密封剂填补裂缝，并涂刷沥青底漆以增强卷材附着力。" },
        { step: "02", title: "细部处理", desc: "在所有屋面穿出物、墙角与排水口周围用特制卷材条制作泛水。" },
        { step: "03", title: "铺贴底层", desc: "将首层 3mm 卷材热熔至基层，所有侧边与端头搭接 100mm。" },
        { step: "04", title: "铺贴面层", desc: "将第二层 4mm 带矿物或铝箔面层的卷材热熔于底层之上，接缝与底层错开。" },
        { step: "05", title: "蓄水测试与交付", desc: "蓄水 48 小时并检查下方区域。测试通过后交付制造商质保与工艺保修文件。" },
      ],
      faqs: [
        { q: "APP 和 SBS 卷材有什么区别？", a: "APP（无规聚丙烯）为塑性体卷材，抗紫外线更优，适合马来西亚等炎热气候下的暴露屋面。SBS（苯乙烯-丁二烯-苯乙烯）为弹性体卷材，低温下更柔韧。在马来西亚，我们通常推荐 APP，因其紫外线耐受性更好。" },
        { q: "热熔卷材在马来西亚能用多久？", a: "带矿物或铝箔面层、正确施工的双层系统可使用 15–20 年。制造商提供 15 年材料质保。建议每 2 年定期检查维护以延长寿命。" },
        { q: "平屋顶热熔防水多少钱？", a: "从 RM26 每平方英尺起，含基层处理、底漆、卷材、泛水与蓄水测试的完整双层系统。面积在现场测量，施工前提供逐项报价。" },
        { q: "安装需要多长时间？", a: "标准排屋平屋顶（200–400 平方英尺）约需 2–4 天，含基层处理、卷材铺贴与 48 小时蓄水测试。面积越大工期越长。" },
      ],
      metaTitle: "吉隆坡热熔防水卷材 | RM26/平方英尺起",
      metaDesc: "吉隆坡与雪兰莪平屋顶双层热熔沥青卷材防水系统。制造商15年材料质保、10年工艺保修。从RM26/平方英尺起。",
    },
  },

  // ── CEILING FAN SPECIALTIES ──────────────────────────────────────────
  "ceiling-fan/new-ceiling-fan-installation": {
    ms: {
      name: "Pemasangan Kipas Siling Baharu",
      tagline: "Pemasangan kipas siling baharu yang kukuh pada papak konkrit atau siling plaster dengan cangkuk keselamatan tugas berat, regulator dan pendawaian kemas. Dari RM 220.",
      description: "Pemasangan kipas siling baharu memerlukan asas struktur yang benar-benar kukuh dan selamat untuk mengelakkan risiko getaran atau kipas terjatuh. KL Servis Rumah menyediakan perkhidmatan pemasangan kipas siling lengkap di seluruh Kuala Lumpur dan Selangor untuk rumah teres, kondominium, dan pejabat. Kami menambat cangkuk logam tugas berat terus ke dalam papak konkrit atau struktur kayu/GI yang diperkukuh di sebalik siling plaster — kami tidak sekali-kali bergantung pada papan gipsum sahaja. Juruelektrik kami menyambungkan pendawaian mengikut piawaian Suruhanjaya Tenaga (ST), memasang wayar keselamatan keluli (safety wire), memasang regulator suis atau penerima kawalan jauh, mengimbangi bilah kipas, dan menjalankan ujian ayunan kelajuan penuh 5 minit sebelum serahan.",
      highlights: [
        "Penambatan cangkuk kipas tugas berat ke papak konkrit atau kayu diperkukuh di siling plaster",
        "Pemasangan kabel keselamatan keluli (safety wire) wajib untuk perlindungan anti-jatuh",
        "Pendawaian kemas mengikut piawaian Suruhanjaya Tenaga dengan sambungan bumi (earth wire)",
        "Pemasangan regulator dinding atau alat kawalan jauh (remote control) serasi jenama",
        "Penentukuran imbangan bilah dan ujian ayunan kelajuan tinggi tanpa goyangan",
      ],
      process: [
        { step: "01", title: "Pemeriksaan Lokasi & Struktur", desc: "Kami memeriksa jenis siling (konkrit, siling plaster atau siling gantung), punca bekalan elektrik sedia ada, dan menentukan kedudukan cangkuk paling kukuh dan seimbang." },
        { step: "02", title: "Pemasangan Cangkuk & Peneguhan", desc: "Cangkuk logam tugas berat dipasang dan ditambat dengan dynabolt ke konkrit atau pendakap sokongan kayu di bahagian atas siling plaster." },
        { step: "03", title: "Pendawaian & Sambungan Keselamatan", desc: "Kabel hidup, neutral, dan bumi disambungkan dengan kemas melalui rod gantung, wayar keselamatan keluli dipasang pada cangkuk utama, dan suis regulator dipasang." },
        { step: "04", title: "Pemasangan Bilah & Kit Motor", desc: "Unit motor, rod penutup, dan bilah kipas dipasang menggunakan pemutar tork mengikut spesifikasi tork pengeluar untuk mengelakkan skru longgar." },
        { step: "05", title: "Pengimbangan & Ujian Ayunan", desc: "Kipas diuji pada semua tahap kelajuan selama 5 minit untuk memastikan putaran lancar, senyap, bebas goyangan sebelum pembersihan kawasan kerja dan serahan waranti." },
      ],
      faqs: [
        { q: "Bolehkah kipas siling dipasang pada siling plaster rumah saya?", a: "Boleh dan sangat selamat jika dilakukan dengan betul. Kami tidak memasang cangkuk pada papan plaster nipis, sebaliknya memasang pendakap sokongan besi atau kayu yang ditambat terus ke rasuk konkrit atau rangka GI struktur bumbung di atas siling plaster." },
        { q: "Berapakah kos pemasangan kipas siling baharu di KL dan Selangor?", a: "Kos pemasangan bermula dari RM220 bagi setiap unit kipas yang anda bekalkan pada poin elektrik sedia ada. Sekiranya memerlukan pembinaan poin pendawaian baharu atau pemasangan suis tambahan, juruelektrik kami akan memberikan sebut harga jelas terlebih dahulu." },
        { q: "Adakah anda memasang wayar keselamatan (safety wire)?", a: "Ya, pemasangan wayar keselamatan keluli adalah prosedur wajib untuk semua kerja pemasangan kipas kami. Wayar ini memegang motor kipas terus ke cangkuk utama sekiranya rod gantung atau skru mengalami kegagalan mekanikal." },
        { q: "Berapa lamakah masa yang diambil untuk memasang satu unit kipas baharu?", a: "Pemasangan kipas baharu pada poin sedia ada dengan cangkuk biasanya mengambil masa sekitar 45 hingga 60 minit. Sekiranya melibatkan kerja tebuk siling plaster atau pendawaian baharu, ia mengambil masa sekitar 1.5 hingga 2 jam setiap unit." },
      ],
      metaTitle: "Pemasangan Kipas Siling Baharu KL & Selangor | Dari RM220",
      metaDesc: "Perkhidmatan pasang kipas siling baharu di KL & Selangor. Pemasangan cangkuk kukuh konkrit & siling plaster, wayar keselamatan, regulator & ujian ayunan. Dari RM220.",
    },
    zh: {
      name: "新吊扇安装",
      tagline: "在混凝土或石膏天花板上安装新吊扇，配备重型安全吊钩、调速器接线与无晃动平衡测试。从 RM 220 起。",
      description: "新吊扇安装需要绝对稳固的结构基础与规范的电气连接，以彻底杜绝吊扇运转晃动或坠落的安全隐患。KL Servis Rumah 为吉隆坡与雪兰莪的有地住宅、公寓及办公室提供专业的新吊扇安装服务。我们的持证电工将重型金属吊钩直接锚固在混凝土楼板或石膏吊顶上方的加固木龙骨/GI金属支架上，绝不单独固定在脆弱的石膏板上。所有安装均遵循马来西亚能源委员会（Suruhanjaya Tenaga）电气标准，规范连接地线与专用防坠安全钢丝绳，配置调速开关或遥控模块，校准扇叶平衡，并在交付前进行 5 分钟全速摆动测试。",
      highlights: [
        "重型金属吊钩牢固锚固至混凝土楼板或加固石膏吊顶龙骨",
        "强制安装高强度防坠安全钢丝绳，提供双重机械保护",
        "符合马来西亚能源委员会（ST）规范的标准布线与可靠接地",
        "兼容各大品牌的原装壁控调速器或遥控器接收模块接线",
        "专业动平衡校准与 5 分钟全速防晃动摆动测试",
      ],
      process: [
        { step: "01", title: "现场与结构评估", desc: "检查天花板材质（混凝土板、石膏吊顶或集成天花）、现有电气回路与电线规格，确定最稳固的吊钩锚固受力点。" },
        { step: "02", title: "安全吊钩锚固", desc: "在混凝土梁位钻孔打入膨胀螺栓，或在石膏吊顶内加装受力角钢/木结构加固支架并安装专用重型吊钩。" },
        { step: "03", title: "电气接线与安全绳", desc: "穿线连接火线、零线与接地线，将防坠安全钢丝绳牢固锁紧在天花受力吊钩上，并安装墙壁调速器或遥控接收器。" },
        { step: "04", title: "电机与扇叶组装", desc: "按制造商标准扭矩组装吊杆、电机机芯与扇叶螺丝，确保所有五金紧固到位无旷量。" },
        { step: "05", title: "平衡校正与全速测试", desc: "通电进行全速 5 分钟连续运转测试，检查电机噪音、温升与摇摆幅度，完成现场清洁并移交 12 个月保修。" },
      ],
      faqs: [
        { q: "石膏板天花板可以安全安装新吊扇吗？", a: "完全可以，但必须采取正确的结构加固措施。我们绝不直接固定在石膏板上，而是在吊顶内部找到水泥梁或铺设加固角钢与木横梁，将吊扇重量和运转离心力全部传递给主结构。" },
        { q: "在吉隆坡和雪兰莪安装一台新吊扇费用是多少？", a: "客户自带吊扇且天花板已有电源点的标准安装费用从 RM220 起。如果现场需要新开电源回路、加装墙壁调速开关或开孔加固吊顶，电工会在施工前提供透明的明细报价。" },
        { q: "安装时会配置安全钢丝绳（Safety Wire）吗？", a: "是的，安装防坠安全钢丝绳是我们所有吊扇作业的强制安全标准。即使未来轴承或吊杆连接件老化，安全绳也能牢牢挂住整台吊扇，确保家人安全。" },
        { q: "安装一台新吊扇通常需要多长时间？", a: "已有电源点和吊钩的标准安装通常需要 45 至 60 分钟；如果包含石膏吊顶内部加固或新电线拉设，每台吊扇约需 1.5 至 2 小时。" },
      ],
      metaTitle: "吉隆坡与雪兰莪新吊扇安装 | RM220起",
      metaDesc: "吉隆坡与雪兰莪专业新吊扇安装服务。混凝土及石膏天花板牢固锚固、防坠安全绳、调速器接线与动平衡测试。从RM220起。",
    },
  },
  "ceiling-fan/ceiling-fan-replacement": {
    ms: {
      name: "Penggantian Kipas Siling",
      tagline: "Khidmat menanggalkan kipas siling lama yang bising atau rosak dan memasang kipas baharu dengan pemeriksaan cangkuk serta pendawaian. Dari RM 250.",
      description: "Apabila kipas siling lama mula berbunyi bising, berayun secara berbahaya, atau motor terbakar, penggantian segera dengan kipas baharu yang lebih cekap tenaga adalah langkah terbaik. KL Servis Rumah menyediakan perkhidmatan penggantian kipas siling yang pantas dan selamat di sekitar Lembah Klang. Kami menanggalkan unit kipas lama dengan selamat, melupuskannya secara bertanggungjawab, dan melakukan pemeriksaan integriti pada cangkuk sedia ada serta pendawaian elektrik. Sekiranya cangkuk longgar atau berkarat, kami akan menaik taraf perkakasan penambat sebelum memasang kipas baharu anda, menyambung semula suis regulator/remote, mengimbangi bilah, dan memastikan operasi yang lancar serta senyap.",
      highlights: [
        "Penanggalan selamat kipas siling lama, motor berbunyi atau unit yang tidak berfungsi",
        "Pemeriksaan ketahanan dan pengetatan cangkuk penambat siling sedia ada",
        "Pengujian pendawaian elektrik, kapasitor, dan sambungan bumi (earthing test)",
        "Pemasangan kipas baharu pilihan anda berserta alat kawalan atau regulator baharu",
        "Termasuk khidmat pembersihan kawasan dan pelupusan kipas lama secara percuma",
      ],
      process: [
        { step: "01", title: "Pengasingan Kuasa & Penanggalan", desc: "Bekalan elektrik di papan DB diasingkan dengan selamat sebelum bilah, motor, dan rod kipas lama ditanggalkan daripada siling." },
        { step: "02", title: "Pemeriksaan Cangkuk & Pendawaian", desc: "Cangkuk siling diperiksa untuk memastikan tiada kelonggaran atau karat, dan kabel elektrik diuji untuk mengelakkan litar pintas." },
        { step: "03", title: "Pemasangan Unit Kipas Baharu", desc: "Kipas siling baharu dipasang pada cangkuk sedia ada yang telah disahkan kukuh, berserta sambungan wayar keselamatan dan kabel elektrik baharu." },
        { step: "04", title: "Penyelarasan Suis & Regulator", desc: "Regulator lama digantikan dengan regulator serasi baharu atau penerima frekuensi kawalan jauh diprogramkan mengikut unit kipas." },
        { step: "05", title: "Ujian Putaran & Pelupusan", desc: "Kipas diuji pada pelbagai tahap kelajuan bagi memastikan tiada gegaran, kawasan dibersihkan dan unit lama dilupuskan mengikut permintaan." },
      ],
      faqs: [
        { q: "Bolehkah cangkuk siling kipas lama digunakan semula untuk kipas baharu?", a: "Boleh, sekiranya cangkuk tersebut ditambat kukuh ke konkrit atau struktur kayu dan bebas daripada karat serta kerosakan mekanikal. Juruelektrik kami akan memeriksa dan menguji beban cangkuk sebelum memutuskan sama ada ia selamat digunakan atau perlu dinaik taraf." },
        { q: "Adakah caj pelupusan dikenakan untuk kipas lama yang ditanggalkan?", a: "Tidak. Perkhidmatan penggantian kami sudah termasuk penanggalan selamat dan membawa keluar kipas lama untuk dilupuskan tanpa sebarang caj tersembunyi tambahan." },
        { q: "Kipas lama saya guna regulator dinding, bolehkah saya tukar kepada kipas kawalan jauh (remote)?", a: "Boleh. Kami boleh memintas regulator dinding lama menjadi suis on/off biasa dan memasang modul penerima kawalan jauh di bahagian penutup atas kipas siling baharu anda." },
        { q: "Berapa lamakah masa yang diambil untuk menukar satu unit kipas siling?", a: "Kerja penggantian satu unit kipas siling standard biasanya mengambil masa antara 30 hingga 45 minit sahaja." },
      ],
      metaTitle: "Penggantian Kipas Siling KL & Selangor | Dari RM250",
      metaDesc: "Tukar kipas siling lama rosak atau bising di KL & Selangor. Penanggalan selamat, semakan cangkuk, pemasangan kipas baharu & pelupusan unit lama. Dari RM250.",
    },
    zh: {
      name: "吊扇更换",
      tagline: "安全拆除老化异响旧吊扇，全面检查加固现有吊钩与电线，换装静音节能新吊扇。从 RM 250 起。",
      description: "当老旧吊扇出现电机轴承嗡鸣异响、严重晃动、转速变慢或无法启动时，及时换装现代静音节能吊扇是提升居室舒适度与安全性的明智选择。KL Servis Rumah 为吉隆坡与雪兰莪业主提供快捷的一站式吊扇更换服务。我们专业断电拆除旧吊扇并提供免费清运处理，全面检测现有吊钩承重性能与原有线路绝缘情况。若发现旧吊钩松动或锈蚀，我们将重新加固紧固，随后标准装配新机、接驳调速器或遥控器、调校扇叶动平衡，确保新吊扇平稳静音运转。",
      highlights: [
        "专业安全拆除老化、异响或故障的旧吊扇，含旧机清运",
        "全面检测并加固现有天花板吊钩的承重与防脱落性能",
        "电气线路绝缘测试、开关回路检查与地线导通确认",
        "安装客户指定的新吊扇并配置全新配套调速器或遥控接收器",
        "扇叶高精度动平衡调校，提供 12 个月安装与接线保修",
      ],
      process: [
        { step: "01", title: "安全断电与旧机拆卸", desc: "在配电箱切断相应回路电源，使用电笔验电后逐一拆除旧扇叶、电机及吊杆。" },
        { step: "02", title: "现有吊钩与线路检测", desc: "物理测试现有吊钩受力稳固度，排除锈蚀脱落隐患，并检查原有电线绝缘皮与线芯状态。" },
        { step: "03", title: "新机装配与安全挂接", desc: "将新吊扇电机与吊杆组装，锁紧防坠安全钢丝绳，并在吊钩上做好防震减噪橡胶垫固定。" },
        { step: "04", title: "调速器更换与遥控配对", desc: "拆除旧款旋转调速器并换装新机匹配调速开关，或将遥控接收器接入天花顶罩内完成频段配对。" },
        { step: "05", title: "动平衡调试与场地清理", desc: "全速运转调试消除任何晃动杂音，清理施工现场粉尘并协助妥善清运旧吊扇。" },
      ],
      faqs: [
        { q: "原有的旧吊扇挂钩可以直接用来装新吊扇吗？", a: "只要原有吊钩牢固锚固在混凝土或龙骨结构上且无严重锈蚀变形，通常可以直接复用。电工会在拆除旧机后进行抗拉力测试，确保完全符合新机安全承重要求。" },
        { q: "拆下来的旧吊扇你们会帮忙清理带走吗？", a: "是的，我们的吊扇更换服务已包含旧机拆除与清运，师傅完工后会将拆下的旧风扇及废弃包装一并清理带走，无需额外支付清运费。" },
        { q: "原来的墙壁旋钮调速器换成遥控吊扇需要改线路吗？", a: "不需要大改线路。电工会将墙壁调速器旁路改装为普通的电源总开关，将遥控接收模块隐藏安装在吊扇顶罩内，通过无线遥控器实现多档风速与定时控制。" },
        { q: "更换一台吊扇需要多长时间？", a: "一台标准吊扇的拆旧换新作业通常在 30 至 45 分钟内即可顺利完成。" },
      ],
      metaTitle: "吉隆坡与雪兰莪吊扇更换服务 | RM250起",
      metaDesc: "吉隆坡与雪兰莪旧吊扇拆卸与换新服务。安全拆旧机、检查吊钩、安装静音新吊扇与旧机清运。从RM250起。",
    },
  },
  "ceiling-fan/dc-motor-smart-fan-install": {
    ms: {
      name: "Pemasangan Kipas Pintar Motor DC",
      tagline: "Pemasangan kipas penyongsang DC moden 3 hingga 5 bilah yang menjimatkan elektrik dengan kawalan jauh dan integrasi aplikasi rumah pintar. Dari RM 320.",
      description: "Kipas siling motor DC (Direct Current Inverter) kini menjadi pilihan utama pemilik kediaman di Malaysia kerana ia menjimatkan sehingga 60% tenaga elektrik, beroperasi dengan amat senyap, dan mempunyai fungsi angin semula jadi (natural breeze) serta putaran songsang (reverse mode). KL Servis Rumah pakar dalam pemasangan pelbagai jenama kipas motor DC terkemuka seperti KDK, Panasonic, Fanco, Acorn, Alpha, Deka, dan Haiku. Kami menyambungkan modul penerima pintar dengan betul, memasang kit lampu LED terbina dalam jika ada, mengkonfigurasi alat kawalan jauh frekuensi radio (RF), dan membantu menyambungkan kipas ke aplikasi telefon pintar anda (seperti Tuya, Smart Life, atau Google Home) melalui rangkaian Wi-Fi kediaman.",
      highlights: [
        "Pakar pemasangan kipas inverter DC jimat tenaga sehingga 60% bagi semua jenama",
        "Pemasangan dan pengaturcaraan modul penerima kawalan jauh pintar RF/Wi-Fi",
        "Penyambungan kit lampu LED dwi-warna/tri-warna dengan fungsi pemalap (dimmer)",
        "Bantuan integrasi aplikasi pintar telefon (Tuya, Smart Life, Google Home, Alexa)",
        "Penentukuran mod angin songsang (reverse flow) dan simulasi angin semula jadi",
      ],
      process: [
        { step: "01", title: "Semakan Keserasian Elektrik", desc: "Kami memastikan poin suis dinding tidak mempunyai regulator lama yang boleh merosakkan papan litar penyongsang DC dan menukar ke suis kuasa terus." },
        { step: "02", title: "Pemasangan Cangkuk & Modul Pintar", desc: "Cangkuk siling dipasang kukuh dan modul penerima kawalan pintar dipasang kemas di dalam penutup kanopi atas kipas." },
        { step: "03", title: "Pemasangan Bilah & Kit Lampu LED", desc: "Bilah aerodinamik komposit/ABS dan pemasangan lampu LED disambungkan dengan sambungan terminal bertebat kalis gegaran." },
        { step: "04", title: "Pemasangan Wayar Keselamatan", desc: "Kabel keluli anti-jatuh disambung dan diketatkan ke cangkuk struktur siling sebelum penutup atas dipasang kemas." },
        { step: "05", title: "Pengujian & Integrasi Aplikasi", desc: "Kipas diuji pada pelbagai kelajuan, mod songsang dan pemalap lampu disemak, serta bantuan pemadanan Wi-Fi aplikasi telefon pintar diberikan." },
      ],
      faqs: [
        { q: "Mengapa kipas motor DC tidak boleh menggunakan suis regulator dinding lama?", a: "Motor DC menggunakan papan litar elektronik penyongsang (inverter PCB) yang memerlukan voltan AC 240V yang stabil. Suis regulator dinding lama mengurangkan voltan untuk mengawal kelajuan, dan ini boleh merosakkan litar elektronik motor DC. Suis dinding mesti ditukar kepada suis hidup/mati biasa." },
        { q: "Apakah kelebihan utama kipas motor DC berbanding kipas AC konvensional?", a: "Kipas motor DC menggunakan sehingga 60% kurang tenaga elektrik, menghasilkan operasi putaran yang jauh lebih senyap tanpa dengungan motor, menawarkan lebih banyak pilihan kelajuan (sehingga 9 kelajuan), serta mempunyai fungsi putaran songsang untuk sirkulasi udara lebih baik." },
        { q: "Bolehkah anda membantu menyambungkan kipas ke Wi-Fi rumah saya?", a: "Ya. Bagi model kipas pintar yang menyokong Wi-Fi (seperti model Tuya atau Smart Life), juruelektrik kami akan membantu memadankan peranti ke rangkaian Wi-Fi 2.4GHz kediaman anda dan menguji kawalan daripada telefon pintar anda." },
        { q: "Adakah pemasangan kipas DC disertakan jaminan kerja?", a: "Ya, KL Servis Rumah menyediakan jaminan kerja pemasangan dan pendawaian selama 12 bulan, selain jaminan perkakasan motor yang diberikan oleh pengeluar kipas." },
      ],
      metaTitle: "Pemasangan Kipas Pintar Motor DC KL | Dari RM320",
      metaDesc: "Pasang kipas motor DC inverter pintar di KL & Selangor. Jimat elektrik, kawalan jauh RF & integrasi Wi-Fi app telefon. KDK, Panasonic, Fanco, Alpha. Dari RM320.",
    },
    zh: {
      name: "直流电机智能吊扇安装",
      tagline: "安装现代 3 至 5 叶直流变频节能吊扇，支持遥控操作与智能家居 App / 语音控制联动。从 RM 320 起。",
      description: "直流变频电机（DC Motor Inverter）吊扇已成为马来西亚现代家居装修的首选，其省电高达 60%、运转极度静音，并具备自然风模式与反转空气循环功能。KL Servis Rumah 专注安装各类主流品牌的直流智能吊扇，包括 KDK、Panasonic、Fanco、Acorn、Alpha、Deka 及 Haiku 等。我们规范去除旧款墙壁旋钮调速器并改装为直通电源开关，防止损伤直流变频电板；精准安装顶罩内置智能接收模块与双色/三色调光 LED 灯具，并在完工时协助业主完成 2.4GHz Wi-Fi 网络配对与智能家居 App（涂鸦 Tuya、Smart Life、Google Home）的联动配置。",
      highlights: [
        "专业安装主流品牌高能效 DC 直流变频吊扇，省电高达 60%",
        "去除旧旋钮调速器改装直通开关，周全保护直流变频主板",
        "精准接驳集成式三色温调光 LED 灯组与防震降噪五金",
        "协助调试 RF 无线遥控器与手机 App（Tuya/Smart Life/Google Home）配对",
        "支持反转正反转空气循环模式与自然风模拟功能调试",
      ],
      process: [
        { step: "01", title: "电路优化与调速器改装", desc: "拆除旧款机械降压调速器并改为标准全压开关，确保向直流变频主板提供稳定的 240V 纯净交流电。" },
        { step: "02", title: "吊钩锚固与接收器安装", desc: "检查加固天花吊钩，将无线智能控制模块与防震降噪橡胶支座规范安装在天花顶罩内。" },
        { step: "03", title: "扇叶与三色 LED 灯组装", desc: "装配高强度 ABS/复合材料气动扇叶，对接灯罩端子排与电缆线夹，保证转动无擦碰。" },
        { step: "04", title: "防坠钢丝绳安全锁定", desc: "将加粗高强度防坠安全钢丝绳套入受力主吊钩并用专用锁扣紧固，完成防坠落双重保障。" },
        { step: "05", title: "风速调试与智能 App 配对", desc: "逐档测试多段风速、正反转与灯光调色功能，协助业主手机下载配对智能控制 App 并测试语音联动。" },
      ],
      faqs: [
        { q: "为什么直流（DC）电机吊扇不能接旧款墙壁旋钮调速器？", a: "直流吊扇内部集成了精密变频驱动电路板（Inverter Driver），必须输入恒定的 240V 交流电。旧款旋钮调速器通过降压来调速，会导致直流驱动板欠压损坏或烧毁。必须将墙壁开关改为普通通断开关。" },
        { q: "DC 直流变频吊扇相比传统 AC 交流吊扇有什么显著优势？", a: "DC 吊扇省电高达 50%–60%，电机运转几乎无电磁交流声，极其静音；通常提供 6–9 档精细风速，具备正反转送风与自然阵风模式，使用体验显著提升。" },
        { q: "师傅会帮我把智能吊扇连接到手机 App 吗？", a: "会的。对于带 Wi-Fi 智能功能的型号（如涂鸦 Tuya / Smart Life 协议），师傅在安装完成后会指导并协助您将吊扇接入家中的 2.4GHz Wi-Fi 网络并完成控制测试。" },
        { q: "安装直流智能吊扇有提供施工保修吗？", a: "有的。KL Servis Rumah 为所有安装作业提供 12 个月的工艺与接线质量保修，厂家亦提供相应的电机保修支持。" },
      ],
      metaTitle: "吉隆坡与雪兰莪直流电机智能吊扇安装 | RM320起",
      metaDesc: "吉隆坡与雪兰莪专业安装 DC 直流变频智能吊扇。节能静音、手机 App 与遥控联动。KDK、Panasonic、Fanco、Alpha 安装。从RM320起。",
    },
  },
  "ceiling-fan/industrial-shoplot-fan-install": {
    ms: {
      name: "Pemasangan Kipas Industri / Lot Kedai",
      tagline: "Pemasangan kipas siling industri 60 inci dan komersial CFM tinggi untuk lot kedai, gudang, gimnasium, dan restoran di KL & Selangor. Dari RM 420.",
      description: "Ruang komersial seperti lot kedai, restoran terbuka, gimnasium, bengkel, dan gudang memerlukan sirkulasi udara berkeupayaan tinggi (High CFM) untuk memastikan keselesaan pelanggan dan kakitangan. KL Servis Rumah menyediakan perkhidmatan pemasangan kipas siling industri bersaiz 56 hingga 60 inci ke atas dengan piawaian keselamatan industri yang ketat. Pasukan kami berpengalaman dalam pemasangan pada siling tinggi dan struktur kompleks, termasuk penambatan pendakap keluli tugas berat pada rasuk keluli (I-beam/C-channel) atau papak konkrit bertetulang. Kami menggunakan kelengkapan tangga dan perancah (scaffolding) yang selamat, memasang pendawaian fasa tunggal atau 3-fasa dengan saluran konduit GI/logam, menyambungkan regulator tugas berat komersial, dan memasang wayar keselamatan berganda untuk perlindungan maksima.",
      highlights: [
        "Pakar pemasangan kipas siling industri 56-60+ inci bilah logam untuk aliran udara maksimum",
        "Penambatan pendakap keluli tugas berat pada struktur I-Beam, kekuda bumbung atau konkrit",
        "Pemasangan selamat pada siling tinggi menggunakan perancah (scaffolding) dan tali pinggang keselamatan",
        "Pendawaian kemas menggunakan konduit logam GI bagi perlindungan mekanikal komersial",
        "Sistem wayar keselamatan berganda (dual safety wires) dan ujian ayunan berterusan",
      ],
      process: [
        { step: "01", title: "Tinjauan Tapak & Ketinggian Siling", desc: "Kami menilai ketinggian siling, jenis struktur bumbung/rasuk, keperluan perancah (scaffolding), dan kapasiti litar elektrik premis komersial anda." },
        { step: "02", title: "Pemasangan Pendakap Tugas Berat", desc: "Pendakap keluli khas dipasang dan dikapit kukuh pada rasuk I-Beam atau ditambat dengan dynabolt gred industri pada papak konkrit." },
        { step: "03", title: "Pendawaian Konduit Logam GI", desc: "Kabel elektrik komersial disalurkan melalui konduit logam GI yang kemas dan selamat daripada kerosakan fizikal, disambungkan ke regulator industri." },
        { step: "04", title: "Pemasangan Motor & Bilah Logam", desc: "Motor industri berkuasa tinggi dan bilah logam aerodinamik dipasang dan diketatkan menggunakan bolt keluli berkekuatan tinggi berserta nat pengunci." },
        { step: "05", title: "Pemasangan Wayar Keselamatan Berganda & Ujian", desc: "Dua wayar keselamatan keluli berasingan ditambat, kipas diuji pada kelajuan maksima selama 15 minit untuk mengesahkan kestabilan dan aliran angin." },
      ],
      faqs: [
        { q: "Adakah anda menyediakan perancah (scaffolding) untuk pemasangan pada siling tinggi?", a: "Ya. Untuk lot kedai dua tingkat, gudang atau siling melebihi ketinggian standard (melebihi 3.5 meter), pasukan kami membawa kelengkapan perancah modular dan peralatan keselamatan bekerja di tempat tinggi yang diperakui." },
        { q: "Bolehkah kipas industri dipasang pada struktur bumbung besi atau I-beam?", a: "Boleh. Kami menggunakan pendakap pengapit keluli khas (beam clamps) tugas berat yang direka khusus untuk mengunci cangkuk kipas pada profil I-beam atau C-channel tanpa perlu mengimpal atau menebuk struktur utama secara berbahaya." },
        { q: "Berapakah harga pemasangan kipas siling industri di lot kedai atau restoran?", a: "Harga pemasangan bermula dari RM420 bagi setiap unit kipas industri standard. Kos mungkin berbeza bergantung pada ketinggian siling, keperluan perancah, panjang rod gantung tambahan (drop down rod), dan kerja konduit elektrik." },
        { q: "Adakah anda memasang suis regulator industri berasingan?", a: "Ya, kami memasang regulator kelajuan komersial tugas berat yang mampu menampung arus berterusan kipas industri bagi memastikan ketahanan jangka panjang tanpa masalah suis panas atau terbakar." },
      ],
      metaTitle: "Pemasangan Kipas Industri & Lot Kedai KL | Dari RM420",
      metaDesc: "Pasang kipas siling industri 60 inci di lot kedai, gudang, restoran & gim KL & Selangor. Pemasangan siling tinggi, pendakap I-beam & konduit GI. Dari RM420.",
    },
    zh: {
      name: "工业 / 店铺吊扇安装",
      tagline: "为吉隆坡与雪兰莪的店铺、餐厅、仓库、健身房及高挑空商业空间专业安装 60 英寸大风量工业吊扇。从 RM 420 起。",
      description: "商业店铺、开放式餐饮餐厅、健身房、汽修厂及工厂仓库等大面积空间，需要高风量（High CFM）的大尺寸工业吊扇以实现强劲空气对流与降温排热。KL Servis Rumah 提供 56 至 60 英寸以上大规格金属叶片工业吊扇的专业高空安全安装服务。我们的工程团队熟练掌握高挑空挑高天花板作业规程，使用专业移动脚手架，将重型钢制结构支架牢固夹紧在建筑工字钢梁（I-Beam/C-Channel）或混凝土受力结构上。全线采用镀锌金属电线管（GI Conduit）进行商业级防刮阻燃布线，配置重型工业无级/档位调速器与双重安全防坠钢丝绳，确保全天候高负荷安全运行。",
      highlights: [
        "专注安装 56-60+ 英寸大风量金属叶片工业吊扇与商业送风系统",
        "重型工字钢（I-Beam）专用夹具紧固与混凝土受力结构牢固锚固",
        "持证安全高空作业，提供模块化移动脚手架与全套防坠安全装备",
        "采用镀锌金属线管（GI Conduit）阻燃布线与重型商用调速开关",
        "配置双重安全钢丝绳（Dual Safety Wires）与满负荷连续运转测试",
      ],
      process: [
        { step: "01", title: "现场勘测与高空方案", desc: "评估天花板高度、钢梁跨度与受力点，确定加长吊杆长度、脚手架搭设方案与配电回路容量。" },
        { step: "02", title: "工字钢重型夹具锚固", desc: "使用高强度钢梁专用夹具（Beam Clamps）牢固锁紧在 I-Beam 上，无需在主梁破坏性钻孔焊接。" },
        { step: "03", title: "镀锌金属线管布线", desc: "按商业消防标准铺设镀锌 GI 金属电线管，穿入耐高温阻燃电缆并连接至大功率商用调速器。" },
        { step: "04", title: "电机装配与加长杆锁定", desc: "组装大扭矩工业电机与金属气动扇叶，使用高强防松螺栓与开口销双重锁定加长吊杆。" },
        { step: "05", title: "双安全绳锁定与全速试机", desc: "挂接两条独立防坠钢丝绳至主钢梁，满风速运转 15 分钟测试风量覆盖与结构稳定性后验收交付。" },
      ],
      faqs: [
        { q: "挑高天花板或双层挑空店铺安装，你们有提供脚手架吗？", a: "有的。针对层高超过 3.5 米的商铺、仓库或餐厅挑空区，我们的施工队伍会自备或搭设标准的模块化移动脚手架，并配备符合高空安全规范的全身安全带作业。" },
        { q: "工业吊扇可以固定在厂房铁皮顶或工字钢梁（I-Beam）上吗？", a: "完全可以。我们采用专业的工业重型钢梁夹具（Beam Clamp），在不破坏建筑钢结构防锈涂层和主体强度的前提下，实现极高抗拉强度的机械自锁式固定。" },
        { q: "安装一台商用或工业吊扇收费是多少？", a: "标准工业吊扇安装费用从 RM420 起。具体费用根据天花板作业高度、是否需要搭设高空脚手架、加长下垂吊杆（Drop Down Rod）长度及金属管布线距离综合评估给出透明明细报价。" },
        { q: "工业吊扇需要专门配大功率调速器吗？", a: "是的。工业吊扇电机功率与启动电流较大，我们统一配置重型商用调速器，有效防止家用小型调速器因长时间大电流负载而发热、击穿或烧损。" },
      ],
      metaTitle: "吉隆坡与雪兰莪工业及店铺吊扇安装 | RM420起",
      metaDesc: "吉隆坡与雪兰莪商用店铺、餐厅与仓库 60 英寸工业吊扇安装。挑高天花板脚手架作业、工字钢专用夹具与 GI 金属管布线。从RM420起。",
    },
  },

};

/**
 * Returns the authored native block for a specialty + locale, or undefined
 * when no real localized page exists for that specialty.
 */
export function getSpecialtyLocaleContent(
  serviceSlug: string,
  specialtySlug: string,
  locale: "ms" | "zh",
): SpecialtyLocaleBlock | undefined {
  return specialtyLocaleContent[`${serviceSlug}/${specialtySlug}`]?.[locale];
}

/** Whether a real localized specialty route exists for a given locale. */
export function hasSpecialtyLocaleContent(serviceSlug: string, specialtySlug: string, locale: "ms" | "zh"): boolean {
  return Boolean(specialtyLocaleContent[`${serviceSlug}/${specialtySlug}`]?.[locale]);
}
