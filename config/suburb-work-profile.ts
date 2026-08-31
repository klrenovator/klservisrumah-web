import type { AreaWorkProfile } from "@/config/area-work-profile";

/**
 * Authored local-work notes for the 15 suburbs that still render
 * `/suburbs/<slug>/<svc>` (BP-1 originals — no /areas twin).
 *
 * These paragraphs have to be long enough to move the location-similarity
 * gate: suburb pages share the service process, rate table and chrome, so a
 * short housing-profile sentence is not enough unique text.
 */

export const suburbWorkProfiles: Record<string, AreaWorkProfile> = {
  "hulu-kelang": {
    stock: "landed",
    note: {
      en: "Hulu Kelang is hillside landed stock toward Kemensah, Taman Melawati and the Ampang border, with Bukit Tabur and Zoo Negara as the usual meeting pins. Quotes should name the slope gradient, the retaining wall, the monsoon runoff at the car porch and whether the van can turn on the driveway. A flat-township terrace method from Cheras will miss those extras. Crews coming from Mont Kiara treat this as a Ulu Klang drive, not a city-centre loading-bay job.",
      ms: "Hulu Kelang ialah stok landed di cerun ke arah Kemensah, Taman Melawati dan sempadan Ampang, dengan Bukit Tabur dan Zoo Negara sebagai pin pertemuan biasa. Sebut harga patut namakan kecerunan, dinding penahan, air monsun di car porch dan sama ada van boleh pusing di jalan masuk. Kaedah teres bandar rata dari Cheras akan terlepas tambahan itu. Pasukan dari Mont Kiara anggap ini panduan Ulu Klang, bukan kerja loading bay pusat bandar.",
      zh: "Hulu Kelang 是通往 Kemensah、Taman Melawati 和安邦边界的山坡有地住宅，Bukit Tabur 和国家动物园是常见会合点。报价应写明坡度、挡土墙、车廊季风径流，以及货车能否在车道掉头。蕉赖平地排屋的做法会漏掉这些加项。从孟沙过来的施工队把这里当成乌鲁冷岳车程，不是市中心卸货区工程。"
    }
  },
  "port-klang": {
    stock: "mixed",
    note: {
      en: "Port Klang work sits on coastal and industrial lots around Northport, Pulau Ketam Jetty and Pandamaran, with the KTM station as a meeting pin only. Salt air, corrosion on outdoor fittings and warehouse loading hours change the method; a Klang Parade terrace quote is not the same job as a jetty-side store. Name whether the lot is a coastal terrace, a Pandamaran shoplot or a Northport warehouse so the crew brings the right coatings and does not quote a town-centre call-out.",
      ms: "Kerja Port Klang berada pada lot pantai dan industri sekitar Northport, jeti Pulau Ketam dan Pandamaran, dengan stesen KTM sebagai pin pertemuan sahaja. Udara masin, kakisan lekapan luaran dan waktu loading gudang mengubah kaedah; sebut harga teres Klang Parade bukan kerja yang sama dengan stor tepi jeti. Nyatakan sama ada lot itu teres pantai, shoplot Pandamaran atau gudang Northport supaya pasukan bawa salutan yang betul dan tidak disebut harga sebagai panggilan pusat pekan.",
      zh: "巴生港工程在 Northport、吉胆岛码头和 Pandamaran 一带的沿海与工业地段，KTM 车站只作会合点。盐雾、室外配件腐蚀和仓库卸货时段会改变做法；巴生百货排屋报价，和码头边仓库不是同一项工程。请说明地段是沿海排屋、Pandamaran 店屋还是 Northport 仓库，施工队才能带对涂料，而不会按镇中心出车报价。"
    }
  },
  "bukit-tinggi": {
    stock: "mixed",
    note: {
      en: "Bukit Tinggi is a modern Klang township around AEON Bukit Tinggi, GM Klang and Bandar Bukit Tinggi, with KESAS as the usual approach road. Guarded streets, mall loading docks and terrace back lanes all appear on the same dispatch map. Say whether the van is entering a mall dock, a guarded terrace gate or a Bandar Botanic-adjacent street — those three calendars are not interchangeable with a Port Klang coastal job.",
      ms: "Bukit Tinggi ialah bandar Klang moden sekitar AEON Bukit Tinggi, GM Klang dan Bandar Bukit Tinggi, dengan KESAS sebagai jalan masuk biasa. Jalan berkawal, dok loading mall dan lorong belakang teres semuanya muncul pada peta dispatch yang sama. Nyatakan sama ada van masuk dok mall, pintu teres berkawal atau jalan berhampiran Bandar Botanic — tiga kalendar itu tidak boleh ditukar dengan kerja pantai Port Klang.",
      zh: "武吉丁宜是围绕 AEON Bukit Tinggi、GM Klang 和 Bandar Bukit Tinggi 的现代巴生市镇，通常从 KESAS 进入。门禁街道、商场卸货码头和排屋后巷会出现在同一张派工图上。请说明货车是进商场码头、门禁排屋大门，还是靠近 Bandar Botanic 的街道——这三种日程不能和巴生港沿海工程互换。"
    }
  },
  meru: {
    stock: "landed",
    note: {
      en: "Meru sits between Kapar and Setia Alam on Jalan Meru, with workshop neighbours and landed lots mixed on the same stretch. Traffic at the Kapar border and factory-hour lorries are the access facts. Roof and exterior jobs here are quoted as a northern-Klang drive with van parking on the lot, not a Setia City Mall loading-bay slot and not a city-centre call-out from Mont Kiara.",
      ms: "Meru terletak antara Kapar dan Setia Alam di Jalan Meru, dengan jiran bengkel dan lot landed bercampur pada rentangan yang sama. Trafik di sempadan Kapar dan lori waktu kilang ialah fakta akses. Kerja bumbung dan luaran di sini disebut sebagai panduan utara Klang dengan parkir van di lot, bukan slot loading bay Setia City Mall dan bukan panggilan pusat bandar dari Mont Kiara.",
      zh: "Meru 夹在 Kapar 和 Setia Alam 之间，沿 Jalan Meru 工场邻居和有地地段混在同一段路上。Kapar 边界车流和工厂时段货车是通道事实。这里的屋顶和外墙工程按北巴生车程、货车停在地段内来报价，不是 Setia City Mall 卸货档，也不是从孟沙出发的市区出车。"
    }
  },
  "bukit-jelutong": {
    stock: "landed",
    note: {
      en: "Bukit Jelutong is guarded semi-D and bungalow stock toward the Guthrie Corridor, with D'Vida, Space U8 and Masjid Tengku Ampuan Jemaah as meeting pins only. Contractor passes at the guard house, long internal drives and neighbour-shared boundaries set the day more than a Shah Alam section number. Exterior coatings on a bungalow here are not a Glenmarie showroom partition and not a Kota Kemuning lakeside terrace job.",
      ms: "Bukit Jelutong ialah stok semi-D dan banglo berkawal ke arah Guthrie Corridor, dengan D'Vida, Space U8 dan Masjid Tengku Ampuan Jemaah sebagai pin pertemuan sahaja. Pass kontraktor di pondok pengawal, pandu dalaman yang panjang dan sempadan berkongsi jiran lebih menentukan hari berbanding nombor seksyen Shah Alam. Salutan luaran pada banglo di sini bukan partition showroom Glenmarie dan bukan kerja teres tepi tasik Kota Kemuning.",
      zh: "武吉哲鲁东是通往 Guthrie Corridor 的门禁半独立和 bungalow，D'Vida、Space U8 和 Masjid Tengku Ampuan Jemaah 只作会合点。门岗承包商通行证、内部长车道和与邻居共用的边界，比沙亚南区号更能决定这一天。这里 bungalow 的外墙涂料，不是 Glenmarie 展厅隔墙，也不是哥打克蒙宁湖边排屋工程。"
    }
  },
  glenmarie: {
    stock: "mixed",
    note: {
      en: "Glenmarie sits on the Shah Alam / Subang airport corridor around Glenmarie LRT, HICOM industrial lots, Utropolis and Saujana. Office showrooms book weekday loading docks; landed homes behind Saujana need van parking off the federal highway. Partition, commercial painting and plumbing here wait for a quiet-hour window that a Kundang rural lot would never need. Send the tower or the HICOM lot number — 'Glenmarie' alone does not tell the crew which calendar to book.",
      ms: "Glenmarie terletak di koridor Shah Alam / lapangan terbang Subang sekitar Glenmarie LRT, lot industri HICOM, Utropolis dan Saujana. Showroom pejabat menempah dok loading hari bekerja; rumah landed di belakang Saujana perlukan parkir van di luar lebuhraya persekutuan. Partition, pengecatan komersial dan paip di sini menunggu jendela waktu senyap yang lot luar bandar Kundang tidak perlukan. Hantar nombor menara atau lot HICOM — nama 'Glenmarie' sahaja tidak memberitahu pasukan kalendar mana yang hendak ditempah.",
      zh: "Glenmarie 位于沙亚南/梳邦机场走廊，靠近 Glenmarie 轻快铁、HICOM 工业地段、Utropolis 和 Saujana。办公展厅预约平日卸货码头；Saujana 后方有地住宅需要在联邦大道外停货车。这里的隔墙、商业油漆和水管要等安静时段，Kundang 乡村地段不会有这个限制。请发送楼栋或 HICOM 地段号——只写 Glenmarie，施工队不知道该约哪一种日程。"
    }
  },
  kundang: {
    stock: "landed",
    note: {
      en: "Kundang is a northern Selangor lakeside and semi-rural pocket toward Kuang, Kundang Lakes and the Rawang border, with Sungai Buloh as the far meeting pin. Jobs are almost all landed: long drives from KL, unguarded lots, and roof work that can start without a JMB lift or a HICOM loading dock. Name the kampung-adjacent lot and whether the van can reach the porch. A Glenmarie office-partition quote does not apply on a Kundang lakeside house.",
      ms: "Kundang ialah poket tasik dan separa luar bandar utara Selangor ke arah Kuang, Kundang Lakes dan sempadan Rawang, dengan Sungai Buloh sebagai pin pertemuan jauh. Kerja hampir kesemuanya landed: pandu jauh dari KL, lot tanpa pengawal, dan kerja bumbung yang boleh bermula tanpa lif JMB atau dok loading HICOM. Namakan lot berhampiran kampung dan sama ada van sampai ke car porch. Sebut harga partition pejabat Glenmarie tidak terpakai pada rumah tepi tasik Kundang.",
      zh: "Kundang 是雪兰莪北部靠湖、偏乡村的地段，通往 Kuang、Kundang Lakes 和 Rawang 边界，双溪毛糯是较远的会合点。工程几乎全是有地住宅：从吉隆坡车程长、没有门岗，屋顶工程可以在没有管委会电梯或 HICOM 卸货码头的情况下开工。请写明靠近乡村的地段，以及货车能否开到车廊。Glenmarie 办公室隔墙报价，不适用于 Kundang 湖边房子。"
    }
  },
  balakong: {
    stock: "mixed",
    note: {
      en: "Balakong mixes Taming Jaya industrial lots with Cheras Selatan homes around The Mines, Jusco Balakong and the BESRAYA edge. A shoplot first-floor partition, a terrace back-lane leak and a factory-hour plumbing call are all on this map. The first WhatsApp should say which one, so protection, parking and the start time match. It is not a Bandar Puteri LRT-condo loading job and not a Kajang stadium-side terrace quote.",
      ms: "Balakong mencampurkan lot industri Taming Jaya dengan rumah Cheras Selatan sekitar The Mines, Jusco Balakong dan tepi BESRAYA. Partition tingkat bawah shoplot, kebocoran lorong belakang teres dan panggilan paip waktu kilang semuanya ada pada peta ini. WhatsApp pertama patut nyatakan yang mana, supaya perlindungan, parkir dan masa mula sepadan. Ini bukan kerja loading kondo LRT Bandar Puteri dan bukan sebut harga teres tepi stadium Kajang.",
      zh: "无拉港把 Taming Jaya 工业地段和 The Mines、Jusco Balakong、BESRAYA 边缘的南蕉赖住宅混在一起。店屋一楼隔墙、排屋后巷漏水和工厂时段水管呼叫都在这张图上。第一条 WhatsApp 应说明是哪一种，防护、停车和开工时间才能对上。这不是太子园轻快铁公寓卸货工程，也不是加影体育场旁排屋报价。"
    }
  },
  "bandar-puteri": {
    stock: "mixed",
    note: {
      en: "Bandar Puteri is the Puchong financial-and-LRT pocket around Puteri Mart, IOI Rio, the Bandar Puteri LRT and Puchong Financial Corporate Centre. Condo loading bays and terrace inner roads sit one street apart. The quote should name the tower or the lot number, not only 'Puchong'. A Balakong industrial partition and an IOI Mall Puchong Jaya terrace job use different hours and protection on this same dispatch desk.",
      ms: "Bandar Puteri ialah poket kewangan dan LRT Puchong sekitar Puteri Mart, IOI Rio, LRT Bandar Puteri dan Puchong Financial Corporate Centre. Loading bay kondominium dan jalan dalaman teres bersebelahan satu jalan. Sebut harga patut namakan menara atau nombor lot, bukan hanya 'Puchong'. Partition industri Balakong dan kerja teres Puchong Jaya IOI Mall menggunakan waktu dan perlindungan berbeza pada meja dispatch yang sama.",
      zh: "太子园是蒲种金融与轻快铁口袋，靠近 Puteri Mart、IOI Rio、太子园轻快铁和 Puchong Financial Corporate Centre。公寓卸货区和排屋内路只隔一条街。报价应写楼栋或地段号，不能只写「蒲种」。无拉港工业隔墙和 IOI Mall 蒲种再也排屋工程，在同一张派工台上使用不同工时和防护。"
    }
  },
  dengkil: {
    stock: "landed",
    note: {
      en: "Dengkil is landed stock between Putrajaya Precincts, Cyberjaya and Xiamen University Malaysia, with Dengkil town as the meeting pin. Travel time from KL and whether the lot is a new township house or a kampung-edge plot should be on the first WhatsApp. It is not a Putrajaya government-quarters pass job and not a Cyberjaya SOHO loading-bay slot. Roof and exterior work here starts when the van can stand on the lot, not when a precinct desk opens.",
      ms: "Dengkil ialah stok landed antara presint Putrajaya, Cyberjaya dan Xiamen University Malaysia, dengan pekan Dengkil sebagai pin pertemuan. Masa perjalanan dari KL dan sama ada lot itu rumah bandar baharu atau plot tepi kampung patut ada dalam WhatsApp pertama. Ini bukan kerja pass kuarters kerajaan Putrajaya dan bukan slot loading bay SOHO Cyberjaya. Kerja bumbung dan luaran di sini bermula apabila van boleh berdiri di lot, bukan apabila kaunter presint buka.",
      zh: "Dengkil 是布城区、赛城和厦门大学马来西亚分校之间的有地住宅，邓吉镇是会合点。从吉隆坡的车程，以及地段是新市镇房子还是村边地块，应写在第一条 WhatsApp。这不是布城政府宿舍通行证工程，也不是赛城 SOHO 卸货档。这里的屋顶和外墙工程在货车能停在地段上时开始，而不是等区柜台开门。"
    }
  },
  selangor: {
    stock: "mixed",
    note: {
      en: "This catch-all Selangor page is not one township. A useful quote still names the actual town — Shah Alam Blue Mosque sections, Petaling Jaya Old Town, Subang Jaya SS15 or Klang Parade — because access, hours and the drive change with that name. Do not send 'Selangor' alone; the crew cannot book a JMB lift, a guarded-township pass or a Port Klang coastal coating from a state-wide label. Pin the town and the property type on the first message.",
      ms: "Halaman Selangor menyeluruh ini bukan satu bandar. Sebut harga yang berguna tetap namakan pekan sebenar — seksyen Masjid Biru Shah Alam, Pekan Lama Petaling Jaya, SS15 Subang Jaya atau Klang Parade — kerana akses, waktu dan perjalanan berubah dengan nama itu. Jangan hantar 'Selangor' sahaja; pasukan tidak boleh menempah lif JMB, pass bandar berkawal atau salutan pantai Port Klang daripada label seluruh negeri. Pin pekan dan jenis hartanah pada mesej pertama.",
      zh: "这个全雪兰莪页面不是某一个市镇。有用的报价仍要写明实际城镇——沙亚南蓝清真寺各区、八打灵再也老街场、梳邦再也 SS15 或巴生百货——因为通道、工时和车程都随那个名字改变。不要只发送「雪兰莪」；施工队无法凭全州标签去预约管委会电梯、门禁市镇通行证或巴生港沿海涂料。请在第一条消息里钉上城镇和房产类型。"
    }
  },
  "bandar-botanic": {
    stock: "landed",
    note: {
      en: "Bandar Botanic is a modern Klang landed scheme next to AEON Bukit Tinggi and KESAS, with Bukit Tinggi as the neighbouring township rather than the same street. Guard-house contractor passes and visitor bays are the planning facts. It is not a Port Klang coastal corrosion job and not a GM Klang mall-loading partition. Name the lot and the gate, then send a porch photo so the van is not quoted as a town-centre call-out.",
      ms: "Bandar Botanic ialah skim landed Klang moden di sebelah AEON Bukit Tinggi dan KESAS, dengan Bukit Tinggi sebagai bandar jiran bukan jalan yang sama. Pass kontraktor pondok pengawal dan petak pelawat ialah fakta perancangan. Ini bukan kerja kakisan pantai Port Klang dan bukan partition loading mall GM Klang. Namakan lot dan pintu pagar, kemudian hantar foto car porch supaya van tidak disebut harga sebagai panggilan pusat pekan.",
      zh: "Bandar Botanic 是紧邻 AEON Bukit Tinggi 和 KESAS 的现代巴生有地小区，武吉丁宜是相邻市镇而不是同一条街。门岗承包商通行证和访客车位是规划事实。这不是巴生港沿海腐蚀工程，也不是 GM Klang 商场卸货隔墙。请写明地段和大门，再发一张车廊照片，以免按镇中心出车报价。"
    }
  },
  "kampung-baru": {
    stock: "mixed",
    note: {
      en: "Kampung Baru mixes traditional timber houses with high-rises around Saloma Bridge, Kampung Baru MRT and Masjid Jamek Kampung Baru. A wooden-house method (damp timber, limited van access) and a tower JMB slot are different jobs on the same street. Name the lot type before the crew leaves Mont Kiara. It is not a Kampung Pandan Maluri terrace job and not a KLCC loading-bay interior.",
      ms: "Kampung Baru mencampurkan rumah kayu tradisional dengan high-rise sekitar Jambatan Saloma, MRT Kampung Baru dan Masjid Jamek Kampung Baru. Kaedah rumah kayu (kayu lembap, akses van terhad) dan slot JMB menara ialah kerja berbeza di jalan yang sama. Namakan jenis lot sebelum pasukan keluar dari Mont Kiara. Ini bukan kerja teres Maluri Kampung Pandan dan bukan interior loading bay KLCC.",
      zh: "新村把传统木屋和 Saloma 桥、新村 MRT、Kampung Baru 詹美清真寺一带的高楼混在一起。木屋做法（潮湿木材、货车难进）和塔楼管委会档期是同一条街上的不同工程。施工队离开孟沙前先写明地段类型。这不是班丹村马鲁里排屋工程，也不是 KLCC 卸货区内装。"
    }
  },
  "kampung-pandan": {
    stock: "landed",
    note: {
      en: "Kampung Pandan is established terrace and flat stock toward Taman Maluri, the Royal Selangor Golf Club and Kampung Pandan Sports Complex. Tight inner parking and older plumbing stacks are the site notes. It is not an Ampang hillside driveway job and not a Kampung Datuk Keramat LRT-quarters pass. Send a photo of where the van can stand — that is what turns a half-day interior into a morning-only slot.",
      ms: "Kampung Pandan ialah stok teres dan flat matang ke arah Taman Maluri, Royal Selangor Golf Club dan Kompleks Sukan Kampung Pandan. Parkir dalaman ketat dan riser paip lama ialah nota tapak. Ini bukan kerja jalan masuk cerun Ampang dan bukan pass kuarters LRT Kampung Datuk Keramat. Hantar foto di mana van boleh berdiri — itu yang menukar kerja interior setengah hari kepada slot pagi sahaja.",
      zh: "班丹村是通往 Taman Maluri、皇家雪兰莪高尔夫俱乐部和班丹村体育中心的成熟排屋和组屋。内部停车紧、立管较旧，是现场记录。这不是安邦山坡车道工程，也不是拿督克拉末村轻快铁宿舍通行证。请发一张货车能停位置的照片——这会把半天室内工程变成只能上午做。"
    }
  },
  "kampung-datuk-keramat": {
    stock: "mixed",
    note: {
      en: "Kampung Datuk Keramat sits on the Jelatek / Dato' Keramat LRT spine with landed lots, government quarters and Keramat Mall as a meeting pin only. Pass arrangements and mature-neighbourhood parking decide the slot more than a landmark mall name. It is not a Kampung Baru timber-house method and not an Ampang Point hillside quote. Give the quarters block or the landed lot number so the crew does not book a Jelatek condo lift by mistake.",
      ms: "Kampung Datuk Keramat terletak pada tulang belakang LRT Jelatek / Dato' Keramat dengan lot landed, kuarters kerajaan dan Keramat Mall sebagai pin pertemuan sahaja. Urusan pass dan parkir kejiranan matang lebih menentukan slot berbanding nama mall mercu tanda. Ini bukan kaedah rumah kayu Kampung Baru dan bukan sebut harga cerun Ampang Point. Beri blok kuarters atau nombor lot landed supaya pasukan tidak menempah lif kondo Jelatek secara tersilap.",
      zh: "拿督克拉末村位于 Jelatek / Dato' Keramat 轻快铁沿线，有有地住宅、政府宿舍，Keramat Mall 只作会合点。通行证安排和成熟邻里停车，比地标商场名称更能决定档期。这不是新村木屋做法，也不是 Ampang Point 山坡报价。请提供宿舍楼号或有地地段号，以免施工队误约 Jelatek 公寓电梯。"
    }
  }
};

const FALLBACK: AreaWorkProfile = {
  stock: "mixed",
  note: {
    en: "This Klang Valley suburb mixes condominiums, shoplots and landed streets. The quotation starts with the property type because access, hours and clean-up change with it.",
    ms: "Suburb Lembah Klang ini mencampurkan kondominium, shoplot dan jalan landed. Sebut harga bermula dengan jenis hartanah kerana akses, waktu dan pembersihan berubah mengikutnya.",
    zh: "这个巴生谷社区混合公寓、店屋和有地街道。报价从房产类型开始，因为通道、工时和清理都随类型改变。"
  }
};

export function getSuburbWorkProfile(slug: string): AreaWorkProfile {
  return suburbWorkProfiles[slug] ?? FALLBACK;
}
