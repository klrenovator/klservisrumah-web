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
