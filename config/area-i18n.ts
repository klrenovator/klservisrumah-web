import type { Locale } from "@/lib/i18n";

/**
 * Trilingual content for the 6 coverage-area pages (`/areas/[slug]`).
 *
 * Mirrors the structure used by `servicesData.i18n` and `problemI18n`:
 * only the customer-visible fields are translated. Coordinates, slugs,
 * landmarks (proper nouns) and population figures stay canonical.
 */
export type LocalizedAreaContent = {
  name?: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  faqs: { q: string; a: string }[];
};

export const areaI18n: Record<string, Partial<Record<Exclude<Locale, "en">, LocalizedAreaContent>>> = {
  "kuala-lumpur": {
    ms: {
      description:
        "KL Servis Rumah menghantar tukang mahir yang disaring latar belakang ke seluruh Wilayah Persekutuan Kuala Lumpur. Sama ada anda tinggal di kondominium tinggi di Mont Kiara, Bangsar atau KLCC, atau menguruskan lot kedai dan rumah teres di Cheras, Sentul dan Kepong, kami menyediakan penyelenggaraan rumah bertaraf premium. Pasukan teknikal kami pakar dalam mengecat dalaman menggunakan cat premium, pengesanan dan pembaikan kebocoran paip tanpa merosakkan struktur, pembaikan siling plaster dengan lapisan skim yang kemas, suntikan PU bertekanan tinggi untuk kebocoran bilik air, serta pemasangan TV dan pemasangan perabot profesional. Kami mematuhi peraturan JMB, membersihkan sepenuhnya selepas kerja, dan menjamin harga telus 100% sebelum kerja bermula.",
      metaTitle: "Perkhidmatan Rumah Pakar Kuala Lumpur — KL Servis Rumah",
      metaDesc:
        "Mengecat, paip, siling plaster, kalis air dan kerja tangan premium di Kuala Lumpur. Slot hari sama tersedia. Kemas, boleh dipercayai dan berinsurans.",
      faqs: [
        {
          q: "Adakah anda berkhidmat untuk kondo tinggi dan pejabat di Kuala Lumpur?",
          a: "Ya! KL Servis Rumah kerap mengendalikan projek di kediaman tinggi dan pejabat di Mont Kiara, Bangsar, KLCC dan Bukit Bintang. Kami berkoordinasi dengan pihak keselamatan bangunan, mematuhi waktu kerja pengurusan, dan mempunyai insurans liabiliti."
        },
        {
          q: "Berapa lama masa tindak balas untuk kecemasan paip di KL?",
          a: "Untuk kebocoran paip kritikal, banjir atau paip pecah di Kuala Lumpur, kami menghantar juruteknik terdekat dengan segera. Purata masa ketibaan kami ialah 30 hingga 60 minit."
        },
        {
          q: "Adakah terdapat jaminan untuk perkhidmatan kerja tangan di Kuala Lumpur?",
          a: "Ya, semua pemasangan kerja tangan, pemasangan dinding, pembaikan pintu dan penggantian kunci disertakan jaminan kerja selama 30 hari."
        }
      ]
    },
    zh: {
      name: "吉隆坡",
      description:
        "KL Servis Rumah 为整个吉隆坡联邦直辖区派遣经过背景审查的专业技师。无论您住在满家乐、孟沙或吉隆坡城中城的高层公寓，还是在蕉赖、沈都或甲洞管理店屋与排屋，我们都提供高端住宅维护服务。我们的技术团队专精于使用优质油漆的室内粉刷、无破坏性漏水检测与维修、石膏天花板修补与平滑批灰、浴室渗漏高压 PU 灌浆，以及专业电视挂装与家具组装。我们严格遵守物业管理规定，完工后彻底清理，并保证在开工前提供 100% 透明报价。",
      metaTitle: "吉隆坡专业住宅服务 — KL Servis Rumah",
      metaDesc:
        "吉隆坡优质油漆、水管、石膏天花板、防水与杂工服务。当天档期可预约。整洁、可靠、有保险。",
      faqs: [
        {
          q: "你们提供吉隆坡高层公寓和办公室的服务吗？",
          a: "是的！KL Servis Rumah 经常在满家乐、孟沙、吉隆坡城中城和武吉免登的高层住宅与办公室施工。我们会与大楼保安协调、遵守管理层的工作时段，并持有责任保险。"
        },
        {
          q: "吉隆坡紧急水管服务的响应时间是多久？",
          a: "对于吉隆坡的严重漏水、积水或爆管情况，我们会立即派出最近的技师。平均抵达时间为 30 至 60 分钟。"
        },
        {
          q: "吉隆坡的杂工服务有保修吗？",
          a: "有的，所有杂工安装、墙面挂装、门修理和锁具更换均享有 30 天施工安全保修。"
        }
      ]
    }
  },

  "petaling-jaya": {
    ms: {
      description:
        "Melayani seluruh Petaling Jaya, KL Servis Rumah menyediakan penambahbaikan dan pembaikan rumah terbaik. Daripada banglo kediaman di Section 14 dan SS2 sehingga pangsapuri moden di Kota Damansara, Bandar Utama dan Ara Damansara, juruteknik pelbagai kemahiran kami berada berhampiran anda. Kami pakar dalam mengecat dalaman dan luaran menggunakan salutan tahan cuaca, membaiki papan siling yang melendut, pemasangan dinding partition untuk pejabat rumah, menyelesaikan masalah tekanan air rendah, pemasangan mangkuk tandas, dan pemasangan perabot pasang siap. Kerja kami dilindungi insurans sepenuhnya dan juruteknik kami disaring latar belakang demi keselamatan keluarga anda.",
      metaTitle: "Mengecat & Kerja Tangan Terbaik Petaling Jaya — Servis Rumah PJ",
      metaDesc:
        "Perlukan kerja mengecat, paip, siling, kalis air atau pembaikan di PJ? KL Servis Rumah menghantar tukang bertauliah yang kemas dengan harga telus.",
      faqs: [
        {
          q: "Adakah anda meliputi semua kawasan Petaling Jaya?",
          a: "Ya, kami berkhidmat di seluruh daerah PJ termasuk SS2, Section 14, Damansara Utama, Damansara Jaya, Kota Damansara, Ara Damansara, Kelana Jaya dan PJ Old Town."
        },
        {
          q: "Berapakah kos mengecat satu bilik di PJ?",
          a: "Mengecat bilik dalaman premium kami bermula dari RM 400, termasuk tampalan dinding kecil, pengamplasan dan dua lapisan cat premium yang boleh dibasuh."
        },
        {
          q: "Bolehkah anda membaiki siling bocor di rumah teres dua tingkat saya di Petaling Jaya?",
          a: "Boleh! Kami menjalankan suntikan PU tanpa memecah lantai bilik air tingkat atas untuk menutup kebocoran papak konkrit, kemudian menggantikan dan menyalut semula papan siling yang rosak akibat air di tingkat bawah."
        }
      ]
    },
    zh: {
      name: "八打灵再也",
      description:
        "KL Servis Rumah 为整个八打灵再也提供优质的住宅改善与维修服务。从 Section 14 和 SS2 的独立洋房，到白沙罗高原、万达镇和阿拉白沙罗的现代公寓，我们多技能的技师就在您附近。我们专精于使用耐候涂料的室内外粉刷、下垂天花板板材修复、居家办公室隔间墙安装、水压过低问题排查、马桶安装以及组装式家具安装。我们的施工全额投保，技师均经过背景审查，让您全家安心。",
      metaTitle: "八打灵再也顶级油漆与杂工服务 — PJ 住宅服务",
      metaDesc:
        "在 PJ 需要油漆、水管、天花板、防水或杂工维修？KL Servis Rumah 派遣整洁的持证技师，价格透明。",
      faqs: [
        {
          q: "你们覆盖八打灵再也的所有地区吗？",
          a: "是的，我们服务整个 PJ 区，包括 SS2、Section 14、Damansara Utama、Damansara Jaya、Kota Damansara、Ara Damansara、格拉那再也和 PJ 老城区。"
        },
        {
          q: "在 PJ 粉刷一个房间需要多少钱？",
          a: "我们的优质室内房间粉刷从 RM 400 起，包含小面积墙面修补、打磨以及两层可水洗优质漆。"
        },
        {
          q: "你们能修复我在八打灵再也双层排屋的漏水天花板吗？",
          a: "可以！我们对楼上浴室采用免打凿 PU 灌浆封堵混凝土楼板渗漏，然后更换并重新批灰、粉刷楼下受潮损坏的石膏板天花。"
        }
      ]
    }
  },

  "subang-jaya": {
    ms: {
      description:
        "KL Servis Rumah ialah penyedia penjagaan rumah yang dipercayai di Subang Jaya. Daripada pejabat komersial di Glenmarie dan outlet runcit di SS15 hinggalah rumah keluarga di seluruh USJ 1 hingga USJ 21 dan Bandar Sunway, kami menawarkan perkhidmatan mengecat, siling, paip, kalis air dan kerja tangan bergred tinggi. Pasukan Subang Jaya kami terlatih untuk memasang TV pada dinding gipsum, memasang pemanas air segera, membersihkan sinki dapur tersumbat, menutup kebocoran bumbung dengan membran bitumen, dan membina dinding partition kalis bunyi yang tahan lama. Kami menjamin tiada harga mengejut — kami periksa, beri sebut harga, dan hanya meneruskan selepas anda meluluskannya.",
      metaTitle: "Kerja Tangan, Tukang Paip & Pengecat Subang Jaya | KL Servis Rumah",
      metaDesc:
        "Perkhidmatan mengecat, paip, siling dan kerja tangan yang boleh dipercayai di Subang Jaya & USJ. Bahagian bersijil SIRIM, kerja kemas. Tempah slot hari sama.",
      faqs: [
        {
          q: "Adakah juruteknik anda disaring latar belakang?",
          a: "Ya. Semua pengecat, tukang paip dan tukang kerja tangan kami disaring dan disahkan latar belakang, memastikan perkhidmatan yang selamat dan boleh dipercayai di Subang Jaya."
        },
        {
          q: "Adakah anda membuat kerja paip dan partition komersial di Glenmarie?",
          a: "Ya, kami kerap memasang partition drywall, penebat rockwool kalis bunyi, dan sistem paip komersial berat untuk pejabat dan bilik pameran di Glenmarie dan SS15."
        },
        {
          q: "Berapa lama masa untuk pemasangan TV di USJ?",
          a: "Pemasangan pelekap dinding TV rata standard mengambil masa kira-kira 45 hingga 60 minit. Kami memeriksa kabel di sebalik dinding dan menggunakan penambat premium berkekuatan tinggi."
        }
      ]
    },
    zh: {
      name: "梳邦再也",
      description:
        "KL Servis Rumah 是梳邦再也值得信赖的住宅维护服务商。从 Glenmarie 的商业办公室、SS15 的零售店铺，到 USJ 1 至 USJ 21 及 Bandar Sunway 的家庭住宅，我们提供高标准的油漆、天花板、水管、防水与杂工服务。我们的梳邦再也团队精于在石膏墙上挂装 OLED 电视、安装即热式热水器、疏通油腻的厨房水槽、以沥青防水膜封堵屋顶渗漏，以及搭建耐用的隔音隔断墙。我们保证没有意外收费——先检查、后报价，经您批准才动工。",
      metaTitle: "梳邦再也杂工、水管工与油漆师傅 | KL Servis Rumah",
      metaDesc:
        "梳邦再也与 USJ 可靠的油漆、水管、天花板与杂工服务。SIRIM 认证配件、施工整洁。可预约当天档期。",
      faqs: [
        {
          q: "你们的技师有经过背景审查吗？",
          a: "有的。我们所有的油漆师傅、水管工和杂工都经过筛选与背景核实，确保在梳邦再也提供值得信赖且安全的服务。"
        },
        {
          q: "你们在 Glenmarie 承接商业水管和隔间工程吗？",
          a: "是的，我们经常为 Glenmarie 和 SS15 的办公室与展示厅安装石膏板隔间、隔音岩棉以及重型商用水管系统。"
        },
        {
          q: "在 USJ 安装电视挂架需要多长时间？",
          a: "标准平面电视壁挂安装大约需要 45 至 60 分钟。我们会检查墙内线路，并使用优质重型膨胀锚栓。"
        }
      ]
    }
  },

  puchong: {
    ms: {
      description:
        "Daripada Puchong Jaya dan Bandar Puteri hingga Puchong Utama dan sempadan Bukit Jalil, KL Servis Rumah menyediakan pembaikan rumah tindak balas pantas dan kerja mengecat premium. Blok komersial padat dan rumah teres di Puchong kerap mengalami kebocoran paip air, siling melendut dan kerosakan kunci keselamatan. Pasukan tempatan kami menyelesaikannya dengan cepat: kami menggantikan kunci rosak, mengetam pintu yang bergeser, memasang bingkai hiasan siling, menyapu membran kalis air berlapis pada papak bumbung rata, dan mengendalikan kerja mengecat semula seluruh rumah. Kami membawa pelbagai alat ganti untuk menyelesaikan kebanyakan pembaikan dalam satu lawatan sahaja.",
      metaTitle: "Pakar Mengecat, Paip & Kalis Air Puchong",
      metaDesc:
        "Perkhidmatan rumah profesional di Puchong. Kalis air bilik air, pembaikan siling plaster, pembaikan kunci dan mengecat semula. Sebut harga percuma, jaminan 30 hari.",
      faqs: [
        {
          q: "Bolehkah anda membaiki pintu yang bergeser dengan lantai di Puchong?",
          a: "Boleh. Kami mengetam pintu kayu yang mengembang akibat kelembapan atau melaraskan engsel yang melendut untuk memulihkan penjajaran pintu yang lancar."
        },
        {
          q: "Apakah kaedah kalis air anda untuk bilik air di Bandar Puteri?",
          a: "Kami menyediakan kedua-dua suntikan PU bertekanan tinggi tanpa memecah jubin dan pemulihan membran kimia penuh dengan penanggalan jubin, bergantung pada tahap kebocoran."
        },
        {
          q: "Berapakah kos memasang perabot pasang siap di Puchong?",
          a: "Harga pemasangan kami bermula dari RM 100, bergantung pada kerumitan set almari, katil atau kabinet."
        }
      ]
    },
    zh: {
      name: "蒲种",
      description:
        "从蒲种再也、Bandar Puteri 到蒲种乌达玛以及武吉加里尔交界一带，KL Servis Rumah 提供快速响应的住宅维修与优质粉刷服务。蒲种人口密集的商业区和排屋经常出现水管渗漏、天花板下垂与门锁故障。我们的本地团队能迅速处理：更换故障锁具、刨修卡地的门扇、安装装饰性天花线条、在平屋顶楼板铺设多层防水膜，以及承接整屋重新粉刷。我们随车携带多种常用配件，多数维修可一次上门解决。",
      metaTitle: "蒲种油漆、水管与防水专家",
      metaDesc:
        "蒲种专业住宅服务。浴室防水、石膏天花板维修、锁具修理与室内重新粉刷。免费报价，30 天保修。",
      faqs: [
        {
          q: "你们能修理蒲种住家刮地板的门吗？",
          a: "可以。我们会刨修因潮湿膨胀的木门，或调校下垂的合页，使门扇恢复顺畅开合。"
        },
        {
          q: "你们在 Bandar Puteri 的浴室采用什么防水工法？",
          a: "我们同时提供免打凿的高压 PU 灌浆（不敲瓷砖）以及全面拆砖重做化学防水膜两种方案，视渗漏严重程度而定。"
        },
        {
          q: "在蒲种组装家具需要多少钱？",
          a: "我们的组装服务从 RM 100 起，具体视衣柜、床架或橱柜组合的复杂程度而定。"
        }
      ]
    }
  },

  "shah-alam": {
    ms: {
      description:
        "Sebagai ibu negeri Selangor, Shah Alam mempunyai pelbagai jenis hartanah, daripada rumah semi-D besar di Bukit Jelutong dan Kota Kemuning hingga gudang bertingkat. KL Servis Rumah menyediakan penjagaan pakar untuk hartanah Shah Alam. Perkhidmatan kami termasuk mengecat dinding luar tahan lama untuk menghadapi panas dan hujan tropika, pembaikan kebocoran genting bumbung, partition gipsum untuk ruang belajar, pemasangan mangkuk tandas dan pemanas air, serta pemasangan langsir dan rak. Kami menggunakan penetapan aras laser untuk semua rak dan kabinet bagi memastikan penjajaran mendatar yang kemas dan sempurna.",
      metaTitle: "Pengecat & Tukang Paip Profesional Shah Alam — KL Servis Rumah",
      metaDesc:
        "Penyelenggaraan rumah terbaik di Shah Alam. Pembaikan siling plaster, mengecat luaran rumah, pembaikan tandas dan pemasangan TV. Tukang tempatan disahkan.",
      faqs: [
        {
          q: "Adakah anda berkhidmat di Setia Alam dan Bukit Jelutong?",
          a: "Ya! Kami meliputi seluruh perbandaran Shah Alam, termasuk Setia Alam, Bukit Jelutong, Kota Kemuning, Section 7, i-City dan sempadan Glenmarie."
        },
        {
          q: "Cat apakah yang anda cadangkan untuk cuaca panas luaran di Shah Alam?",
          a: "Kami mencadangkan lapisan atas pelindung cuaca premium yang memantulkan haba serta tahan kulat dan kotoran."
        },
        {
          q: "Bolehkah anda memasang partition drywall untuk kedai runcit di pusat beli-belah Shah Alam?",
          a: "Ya. Kami mereka bentuk dan memasang partition komersial berkadar tahan api dengan lapisan skim yang kemas, dan menyiapkan pemasangan pada waktu malam mengikut peraturan pusat beli-belah."
        }
      ]
    },
    zh: {
      name: "莎阿南",
      description:
        "作为雪兰莪州的首府，莎阿南拥有多样化的房产类型，从武吉日落洞和哥打哥文宁的大型半独立式洋房到多层仓库。KL Servis Rumah 为莎阿南的房产提供专业养护服务，包括可抵御热带日晒雨淋的高耐久外墙粉刷、屋瓦渗漏修补、书房石膏隔间墙、马桶与热水器安装，以及窗帘和层架安装。我们所有层架与橱柜均采用激光水平定位，确保干净利落的水平对齐。",
      metaTitle: "莎阿南专业油漆师傅与水管工 — KL Servis Rumah",
      metaDesc:
        "莎阿南优质住宅维护。石膏天花板修复、外墙粉刷、马桶维修与电视挂装。经背景核实的本地专业团队。",
      faqs: [
        {
          q: "你们服务 Setia Alam 和 Bukit Jelutong 吗？",
          a: "是的！我们覆盖整个莎阿南市辖区，包括 Setia Alam、Bukit Jelutong、Kota Kemuning、Section 7、i-City 以及 Glenmarie 交界一带。"
        },
        {
          q: "莎阿南炎热的户外天气建议使用哪种油漆？",
          a: "我们建议使用优质耐候面漆，它能反射热量并抵抗霉菌与积尘。"
        },
        {
          q: "你们能为莎阿南商场里的店铺安装石膏板隔间吗？",
          a: "可以。我们设计并安装防火等级的商用隔间墙，配以平整批灰，并配合商场规定在夜间完成施工。"
        }
      ]
    }
  },

  klang: {
    ms: {
      description:
        "Hartanah di Klang, terutamanya di kawasan pantai Port Klang dan Bandar Bukit Tinggi yang padat, terdedah kepada kelembapan tinggi, kebocoran air dan kakisan udara masin. KL Servis Rumah menyediakan penyelenggaraan khusus di Klang. Kami menawarkan kelengkapan paip keluli tahan karat, pengedap dinding anti-kakisan, membran kalis air bilik air, pemulihan papan siling, pemasangan set kunci selamat, dan pembaikan kerja tangan am. Krew tempatan Klang kami lengkap dengan peralatan, menepati masa, dan sangat berpengalaman menyelesaikan masalah lembap serta pengelupasan struktur batu.",
      metaTitle: "Paip, Mengecat & Pembaikan Siling Klang | KL Servis Rumah",
      metaDesc:
        "Pembaikan rumah dipercayai di Klang, Bukit Tinggi & Setia Alam. Paip anti-karat, rawatan dinding lembap dan siling plaster tahan lama. Harga telus.",
      faqs: [
        {
          q: "Mengapa paip bilik air saya cepat berkarat di Klang, dan bolehkah anda membantu?",
          a: "Udara masin dan kandungan mineral air yang lebih tinggi di Klang mempercepatkan karat pada paip bergalvani. Kami menggantikannya dengan paip PVC-u bersijil SIRIM atau paip PPR/tembaga kalis kakisan."
        },
        {
          q: "Adakah anda menyediakan jaminan kalis air di Bukit Tinggi?",
          a: "Ya, kami menyediakan jaminan bertulis bebas bocor sehingga 5 tahun untuk projek membran kalis air kimia yang lengkap."
        },
        {
          q: "Adakah perkhidmatan kerja tangan hari sama tersedia di Setia Alam?",
          a: "Ya, tempahan yang dibuat sebelum 11:00 pagi layak untuk penghantaran kerja tangan dan paip pada hari yang sama di Setia Alam dan Klang."
        }
      ]
    },
    zh: {
      name: "巴生",
      description:
        "巴生的房产，尤其是沿海的巴生港和人口密集的武吉丁宜一带，容易受到高湿度、渗水和盐分空气腐蚀的影响。KL Servis Rumah 在巴生提供针对性的维护服务，包括防锈不锈钢水管配件、防腐蚀墙面封闭剂、浴室防水膜、天花板板材修复、安全锁具安装以及各类杂工维修。我们的巴生本地团队装备齐全、准时守约，在解决潮湿问题与砖石结构剥落方面经验丰富。",
      metaTitle: "巴生水管、油漆与天花板维修 | KL Servis Rumah",
      metaDesc:
        "巴生、武吉丁宜与 Setia Alam 值得信赖的住宅维修。防锈水管、潮湿墙面处理与耐用石膏天花板。价格透明。",
      faqs: [
        {
          q: "为什么我在巴生的浴室水管锈得特别快？你们能处理吗？",
          a: "巴生较高的盐分空气与水中矿物质会加速镀锌管生锈。我们会更换为 SIRIM 认证的 PVC-u 管，或防腐蚀的 PPR／铜管。"
        },
        {
          q: "你们在武吉丁宜提供防水保修吗？",
          a: "是的，完整的化学防水膜工程我们提供长达 5 年的书面防漏保修。"
        },
        {
          q: "Setia Alam 有当天杂工服务吗？",
          a: "有的，上午 11:00 前下单的预约，在 Setia Alam 与巴生均可安排当天杂工与水管派工。"
        }
      ]
    }
  }
};
