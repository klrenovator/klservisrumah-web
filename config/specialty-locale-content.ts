/**
 * Specialty locale content — KL Servis Rumah
 *
 * Real, authored native-content store for the priority locale-specialty
 * tranche (Painting + Ceiling/Partition). Each entry is keyed by
 * `<serviceSlug>/<specialtySlug>` and holds full Malay (ms) and Chinese (zh)
 * blocks so the localized specialty routes render genuine, non-thin content
 * instead of templated clones.
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
