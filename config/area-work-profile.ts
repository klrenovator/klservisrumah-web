import type { Locale } from "@/lib/i18n";

/**
 * Authored local-work profiles for area × service pages (audit P2-C4 / P2-26).
 *
 * These notes are written from each area's existing description, landmarks and
 * housing mix — not from rotated sub-service lists. They are the unique
 * per-area paragraphs the pair-copy generator interpolates so `/areas/<area>/<svc>`
 * pages stop reading as sentence salad.
 *
 * Do not put published rate tables here (Wave 13 guardrail: identical pricing
 * enumerations in area-shared copy blow the location-similarity budget).
 */

export type HousingStock = "highrise" | "landed" | "mixed";

export type AreaWorkProfile = {
  stock: HousingStock;
  note: Record<Locale, string>;
};

export const areaWorkProfiles: Record<string, AreaWorkProfile> = {
  "kuala-lumpur": {
    stock: "mixed",
    note: {
      en: "Kuala Lumpur mixes KLCC and Bukit Bintang towers with terrace streets in Cheras, Sentul and Kepong. A useful quote starts with the property type — condo, shoplot or landed house — because lift bookings, JMB hours and unloading rules change with it.",
      ms: "Kuala Lumpur mencampurkan menara KLCC dan Bukit Bintang dengan jalan teres di Cheras, Sentul dan Kepong. Sebut harga yang berguna bermula dengan jenis hartanah — kondominium, shoplot atau rumah landed — kerana tempahan lif, waktu JMB dan cara memunggah berbeza mengikut jenis itu.",
      zh: "吉隆坡既有 KLCC、武吉免登的高楼，也有蕉赖、Sentul、甲洞的排屋街道。有用的报价先确认房产类型——公寓、店屋还是有地住宅——因为电梯预约、管委会施工时段和卸货规则都随类型改变。"
    }
  },
  "petaling-jaya": {
    stock: "mixed",
    note: {
      en: "Petaling Jaya runs from SS2 and Section 14 bungalows to Kota Damansara, Bandar Utama and Ara Damansara apartments. Access is the usual first constraint: terrace parking on one street, condo loading bays on the next.",
      ms: "Petaling Jaya merangkumi banglo SS2 dan Seksyen 14 hingga pangsapuri Kota Damansara, Bandar Utama dan Ara Damansara. Halangan pertama biasanya akses: parkir teres di satu jalan, loading bay kondominium di jalan seterusnya.",
      zh: "八打灵再也从 SS2、第14区的bungalow，延伸到哥打白沙罗、Bandar Utama 和 Ara Damansara 公寓。第一道限制通常是通道：一条街是排屋停车，下一条街就是公寓卸货区。"
    }
  },
  "subang-jaya": {
    stock: "mixed",
    note: {
      en: "Subang Jaya covers SS15 and USJ family homes plus Glenmarie offices. Weekday shopfront work and weekend landed jobs need different hour windows, so the quotation should say which calendar the crew is booking.",
      ms: "Subang Jaya merangkumi rumah keluarga SS15 dan USJ serta pejabat Glenmarie. Kerja kedai pada hari bekerja dan kerja rumah landed pada hujung minggu memerlukan jendela masa berbeza, jadi sebut harga perlu nyatakan kalendar yang ditempah.",
      zh: "梳邦再也覆盖 SS15、USJ 家庭住宅以及 Glenmarie 办公区。平日店面施工和周末有地住宅工程需要不同时段，报价应写明预约的是哪一种日程。"
    }
  },
  "puchong": {
    stock: "mixed",
    note: {
      en: "Puchong is a dense township of terraces, condos and shop offices around IOI and the LRT. Narrow internal roads and evening school traffic affect van access more than the trade itself.",
      ms: "Puchong ialah bandar padat dengan teres, kondominium dan pejabat kedai sekitar IOI dan LRT. Jalan dalaman sempit dan trafik sekolah petang lebih menjejaskan akses van berbanding jenis kerja itu sendiri.",
      zh: "蒲种是围绕 IOI 与轻快铁的密集市镇，排屋、公寓和店屋办公室混杂。内部窄路和傍晚放学车流对货车进出的影响，往往大于工种本身。"
    }
  },
  "shah-alam": {
    stock: "mixed",
    note: {
      en: "Shah Alam sections mix terrace neighbourhoods with industrial-adjacent lots. Crews plan around section numbering, factory-hour traffic on the federal highway, and whether the lot is residential or a small workshop.",
      ms: "Seksyen Shah Alam mencampurkan kejiranan teres dengan lot berhampiran industri. Pasukan merancang mengikut nombor seksyen, trafik waktu kilang di lebuhraya persekutuan, dan sama ada lot itu kediaman atau bengkel kecil.",
      zh: "沙亚南各区把排屋邻里和靠近工业的地段混在一起。施工队会按区号、联邦大道工厂上下班车流，以及地段是住宅还是小型工场来安排。"
    }
  },
  "klang": {
    stock: "landed",
    note: {
      en: "Klang work is mostly older terrace and shop-lot stock, with Port Klang and Bukit Tinggi as the usual landmarks. Salt air, older plumbing stacks and tight rear lanes are the site facts that change a method more than a suburb name.",
      ms: "Kerja di Klang kebanyakannya stok teres dan shoplot lama, dengan Port Klang dan Bukit Tinggi sebagai rujukan biasa. Udara masin, riser paip lama dan lorong belakang yang sempit ialah fakta tapak yang mengubah kaedah lebih daripada nama suburb.",
      zh: "巴生工程多为较旧的排屋和店屋，巴生港和武吉丁宜是常见地标。盐雾、老旧立管和狭窄后巷，比郊区名称更能决定做法。"
    }
  },
  "cheras": {
    stock: "mixed",
    note: {
      en: "Cheras is dense terrace and condo stock along the NPE and the old town spine. Parking is the first photo we ask for — a van that cannot stop near the gate turns a half-day interior job into a staged one.",
      ms: "Cheras padat dengan teres dan kondominium sepanjang NPE dan tapak pekan lama. Parkir ialah foto pertama yang kami minta — van yang tidak dapat berhenti berhampiran pintu pagar menukar kerja interior setengah hari kepada kerja berperingkat.",
      zh: "蕉赖沿 NPE 和旧街场一带排屋、公寓密集。停车是我们要的第一张照片——货车停不到门口，半天的室内工程就会变成分阶段施工。"
    }
  },
  "ampang": {
    stock: "mixed",
    note: {
      en: "Ampang mixes hillside landed homes around Kemensah with apartments near Ampang Point. Slope drainage, retaining walls and long driveways are the extras that a flat-township quote would miss.",
      ms: "Ampang mencampurkan rumah landed di cerun sekitar Kemensah dengan pangsapuri berhampiran Ampang Point. Saliran cerun, dinding penahan dan jalan masuk yang panjang ialah tambahan yang tidak muncul dalam sebut harga bandar rata.",
      zh: "安邦把Kemensa附近的山坡有地住宅，和 Ampang Point 一带的公寓混在一起。坡地排水、挡土墙和长车道，是平地市镇报价里不会出现的项目。"
    }
  },
  "kajang": {
    stock: "landed",
    note: {
      en: "Kajang is largely landed townships and older shop streets toward Semenyih. Travel time from KL and whether the lot is a terrace, semi-D or a kampung-adjacent house should be on the first WhatsApp message.",
      ms: "Kajang kebanyakannya bandar landed dan jalan kedai lama ke arah Semenyih. Masa perjalanan dari KL dan sama ada lot itu teres, semi-D atau rumah berhampiran kampung patut ada dalam mesej WhatsApp pertama.",
      zh: "加影多为有地市镇，以及通往士毛月方向的旧店街。从吉隆坡的车程，以及地段是排屋、半独立还是靠近乡村的房子，应写在第一条 WhatsApp 消息里。"
    }
  },
  "mont-kiara": {
    stock: "highrise",
    note: {
      en: "Mont Kiara is almost all high-rise, with JMB/security desks that book service lifts days ahead. Quotes fail when the crew cannot name the tower, the loading-bay slot and the permitted work hours.",
      ms: "Mont Kiara hampir kesemuanya high-rise, dengan kaunter JMB/keselamatan yang menempah lif servis beberapa hari awal. Sebut harga gagal apabila pasukan tidak dapat namakan menara, slot loading bay dan waktu kerja yang dibenarkan.",
      zh: "孟沙几乎全是高楼，管委会/保安台往往要提前几天预约服务电梯。如果施工队说不出楼栋、卸货时段和允许施工时间，报价就无法落实。"
    }
  },
  "bangsar": {
    stock: "highrise",
    note: {
      en: "Bangsar combines older walk-up blocks with newer condos and a few remaining bungalows. Street parking is scarce; most interior work is planned around basement loading and neighbour quiet hours.",
      ms: "Bangsar menggabungkan blok walk-up lama dengan kondominium baharu dan beberapa banglo yang masih ada. Parkir jalan terhad; kebanyakan kerja interior dirancang mengikut loading basement dan waktu senyap jiran.",
      zh: "孟沙罗既有较旧的无电梯公寓，也有新condo和少量bungalow。路边停车很少；室内工程多按地库卸货和邻居安静时段来排。"
    }
  },
  "damansara": {
    stock: "highrise",
    note: {
      en: "Damansara coverage here is the condo and office belt rather than a single township. Building management rules, visitor QR and loading-bay slots are the details that decide whether a one-day crew can finish.",
      ms: "Liputan Damansara di sini ialah zon kondominium dan pejabat, bukan satu bandar sahaja. Peraturan pengurusan bangunan, QR pelawat dan slot loading bay menentukan sama ada pasukan sehari dapat siap.",
      zh: "这里的白沙罗覆盖的是公寓和办公带，而不是单一市镇。物业管理规定、访客二维码和卸货时段，决定一天的施工队能否做完。"
    }
  },
  "kepong": {
    stock: "landed",
    note: {
      en: "Kepong is mature terrace and village-edge stock with busy main roads. Rear-lane access, older roof tiles and shared party walls are the usual site notes, not a landmark name.",
      ms: "Kepong ialah stok teres matang dan tepi kampung dengan jalan utama yang sibuk. Akses lorong belakang, jubin bumbung lama dan dinding berkongsi ialah nota tapak biasa, bukan nama mercu tanda.",
      zh: "甲洞是成熟排屋和村边住宅，主干道繁忙。后巷通道、旧屋瓦和共用隔墙才是常见现场记录，而不是地标名称。"
    }
  },
  "setapak": {
    stock: "mixed",
    note: {
      en: "Setapak mixes PV-series high-rises along Genting Klang with Danau Kota terraces and student lets. Tenant-turnover painting and gypsum patching are common; the quote should say whether the unit is occupied.",
      ms: "Setapak mencampurkan high-rise siri PV sepanjang Genting Klang dengan teres Danau Kota dan rumah sewa pelajar. Kerja cat semasa tukar penyewa dan tampalan gypsum biasa; sebut harga patut nyatakan sama ada unit diduduki.",
      zh: "Setapak 把 genting Klang 一带的 PV 系列高楼，和 Danau Kota 排屋、学生出租屋混在一起。退租油漆和石膏修补很常见；报价应说明单位是否仍有人住。"
    }
  },
  "sri-petaling": {
    stock: "landed",
    note: {
      en: "Sri Petaling is a planned terrace township next to Bukit Jalil. Straight internal roads help van access; the usual extras are car-porch columns, courtyard drainage and neighbour-shared party walls.",
      ms: "Sri Petaling ialah bandar teres terancang bersebelahan Bukit Jalil. Jalan dalaman lurus membantu akses van; tambahan biasa ialah tiang car porch, saliran halaman dan dinding berkongsi jiran.",
      zh: "Sri Petaling 是紧邻武吉加里尔的规划排屋市镇。内部道路较直，货车好进；常见加项是车廊柱、庭院排水和与邻居共用的隔墙。"
    }
  },
  "kota-damansara": {
    stock: "highrise",
    note: {
      en: "Kota Damansara is condo-heavy with some terrace pockets. Most jobs are inside towers that require JMB forms, a named resident host and a service-lift slot before the first tool comes out of the van.",
      ms: "Kota Damansara padat kondominium dengan beberapa poket teres. Kebanyakan kerja di dalam menara yang memerlukan borang JMB, hos penduduk yang dinamakan dan slot lif servis sebelum alat pertama dikeluarkan dari van.",
      zh: "哥打白沙罗以公寓为主，夹杂少量排屋。多数工程在塔楼内，需要管委会表格、具名住户接待，以及服务电梯时段，才能把第一件工具从货车里拿出来。"
    }
  },
  "ara-damansara": {
    stock: "highrise",
    note: {
      en: "Ara Damansara is newer high-rise stock beside the airport corridor. Quiet-hour rules and visitor parking caps are tighter than older townships; send the tower name and loading instructions with the photos.",
      ms: "Ara Damansara ialah stok high-rise baharu di koridor lapangan terbang. Peraturan waktu senyap dan had parkir pelawat lebih ketat daripada bandar lama; hantar nama menara dan arahan loading bersama foto.",
      zh: "Ara Damansara 是机场走廊旁较新的高楼。安静时段和访客车位上限比老市镇更严；发照片时请带上楼栋名称和卸货说明。"
    }
  },
  "sunway": {
    stock: "highrise",
    note: {
      en: "Sunway work is hotel, condo and retail stock around the pyramid and lagoon. Loading docks, hotel quiet hours and mall security desks decide the calendar more than the trade.",
      ms: "Kerja di Sunway ialah stok hotel, kondominium dan runcit sekitar pyramid dan lagun. Dok loading, waktu senyap hotel dan kaunter keselamatan mall lebih menentukan kalendar berbanding jenis kerja.",
      zh: "双威工程是金字塔和湖周围的酒店、公寓和零售物业。卸货码头、酒店安静时段和商场保安台，比工种更能决定工期。"
    }
  },
  "usj": {
    stock: "mixed",
    note: {
      en: "USJ is numbered terrace sections plus Taipan shoplots. The section number and whether the lot faces a busy inner road should be in the first message — that is what sets parking and start time.",
      ms: "USJ ialah seksyen teres bernombor plus shoplot Taipan. Nombor seksyen dan sama ada lot menghadap jalan dalaman yang sibuk patut ada dalam mesej pertama — itu yang menetapkan parkir dan masa mula.",
      zh: "USJ 是编号排屋区加上 Taipan 店屋。区号、以及地段是否朝向繁忙内路，应写在第一条消息里——这决定停车和开工时间。"
    }
  },
  "putrajaya": {
    stock: "highrise",
    note: {
      en: "Putrajaya precincts have gated and government-adjacent access. Crews need the precinct, the pass arrangement and whether the unit is a staff apartment or a landed plot inside a guarded street.",
      ms: "Presint Putrajaya mempunyai akses berkawal dan berhampiran kerajaan. Pasukan perlukan nombor presint, urusan pass, dan sama ada unit itu pangsapuri kakitangan atau lot landed di jalan berkawal.",
      zh: "布城各区有门禁和靠近政府机关的通道。施工队需要区号、通行证安排，以及单位是职员公寓还是门禁街道内的有地住宅。"
    }
  },
  "cyberjaya": {
    stock: "highrise",
    note: {
      en: "Cyberjaya is newer condo and office stock. Building apps, visitor QR and weekday office loading windows are the usual blockers; weekend interior slots are often easier to book.",
      ms: "Cyberjaya ialah stok kondominium dan pejabat yang lebih baharu. Aplikasi bangunan, QR pelawat dan jendela loading pejabat hari bekerja ialah halangan biasa; slot interior hujung minggu biasanya lebih mudah ditempah.",
      zh: "赛城是较新的公寓和办公物业。大厦 App、访客二维码和平日办公室卸货窗口是常见卡点；周末室内档期往往更好约。"
    }
  },
  "wangsa-maju": {
    stock: "highrise",
    note: {
      en: "Wangsa Maju sections mix walk-up blocks with newer condos around Wangsa Walk. Lift size and corridor width in older sections change whether a full paint setup fits in one trip.",
      ms: "Seksyen Wangsa Maju mencampurkan blok walk-up dengan kondominium baharu sekitar Wangsa Walk. Saiz lif dan lebar koridor di seksyen lama menentukan sama ada persediaan cat penuh muat dalam satu trip.",
      zh: "旺沙玛朱各区把无电梯公寓和 Wangsa Walk 一带的新condo混在一起。老区电梯尺寸和走廊宽度，决定一次能否搬完全套油漆设备。"
    }
  },
  "bukit-jalil": {
    stock: "mixed",
    note: {
      en: "Bukit Jalil combines stadium-side condos with Sri Petaling-adjacent terraces. Event-day road closures and condo visitor caps are the calendar facts to flag when you send photos.",
      ms: "Bukit Jalil menggabungkan kondominium tepi stadium dengan teres berhampiran Sri Petaling. Penutupan jalan hari acara dan had pelawat kondominium ialah fakta kalendar yang perlu ditanda apabila anda hantar foto.",
      zh: "武吉加里尔把体育场旁公寓和靠近 Sri Petaling 的排屋合在一起。赛事封路和公寓访客上限，是发照片时要标明的日程事实。"
    }
  },
  "desa-parkcity": {
    stock: "highrise",
    note: {
      en: "Desa ParkCity is a guarded lake township with strict contractor rules. Expect a contractor pass, named working hours and a clean-handover standard that is tighter than a typical KL condo.",
      ms: "Desa ParkCity ialah bandar tasik berkawal dengan peraturan kontraktor yang ketat. Jangka pass kontraktor, waktu kerja yang dinamakan dan standard serahan bersih yang lebih ketat daripada kondominium KL biasa.",
      zh: "蒂沙公园城是有门禁的湖滨市镇，承包商规定严格。需要承包商通行证、明确工时，以及比普通吉隆坡公寓更严的清洁移交标准。"
    }
  },
  "taman-melawati": {
    stock: "landed",
    note: {
      en: "Taman Melawati is hillside landed stock toward Hulu Kelang. Driveway gradient, retaining walls and monsoon runoff at the car porch are the extras a flat-township quote would not include.",
      ms: "Taman Melawati ialah stok landed di cerun ke arah Hulu Kelang. Kecerunan jalan masuk, dinding penahan dan air larian monsun di car porch ialah tambahan yang tidak termasuk dalam sebut harga bandar rata.",
      zh: "Taman Melawati 是通往 Hulu Kelang 的山坡有地住宅。车道坡度、挡土墙和车廊季风径流，是平地市镇报价不会包含的加项。"
    }
  },
  "bandar-utama": {
    stock: "highrise",
    note: {
      en: "Bandar Utama is 1 Utama-adjacent condo and office stock. Mall and tower loading bays book out on weekdays; interior work is often easier on a Saturday lift slot.",
      ms: "Bandar Utama ialah stok kondominium dan pejabat berhampiran 1 Utama. Loading bay mall dan menara penuh pada hari bekerja; kerja interior biasanya lebih mudah pada slot lif Sabtu.",
      zh: "万达镇是 1 Utama 旁的公寓和办公物业。商场和塔楼卸货区平日常被订满；室内工程往往周六电梯档更好约。"
    }
  },
  "ss2": {
    stock: "landed",
    note: {
      en: "SS2 is a mature PJ terrace and bungalow grid with a busy commercial spine. Street parking near the shops is the usual limit; residential lanes behind the grid are easier for a full-day crew.",
      ms: "SS2 ialah grid teres dan banglo PJ yang matang dengan tulang belakang komersial yang sibuk. Parkir jalan berhampiran kedai ialah had biasa; lorong kediaman di belakang grid lebih mudah untuk pasukan seharian.",
      zh: "SS2 是成熟的八打灵排屋和 bungalow 网格，商业主街很忙。店铺附近路边停车是常见限制；网格后方的住宅巷更适合全天施工队。"
    }
  },
  "setia-alam": {
    stock: "landed",
    note: {
      en: "Setia Alam is a guarded landed township. Guard-house contractor passes, visitor bays and a long internal drive from the highway are the planning facts — not a city-centre loading dock.",
      ms: "Setia Alam ialah bandar landed berkawal. Pass kontraktor di pondok pengawal, petak pelawat dan pandu dalaman yang panjang dari lebuhraya ialah fakta perancangan — bukan dok loading pusat bandar.",
      zh: "Setia Alam 是有门禁的有地市镇。门岗承包商通行证、访客车位，以及从高速进去的内部长车道，才是规划事实——不是市中心卸货码头。"
    }
  },
  "kota-kemuning": {
    stock: "landed",
    note: {
      en: "Kota Kemuning is a lakeside guarded township of terraces and semi-Ds. Gate passes and lake-side drainage at the backyard are the two extras that show up on almost every site check.",
      ms: "Kota Kemuning ialah bandar berkawal tepi tasik dengan teres dan semi-D. Pass pintu pagar dan saliran tepi tasik di halaman belakang ialah dua tambahan yang muncul hampir setiap pemeriksaan tapak.",
      zh: "哥打哥打宁是湖边门禁市镇，以排屋和半独立为主。门禁通行证和后院湖边排水，几乎每次现场检查都会出现。"
    }
  },
  "batu-caves": {
    stock: "landed",
    note: {
      en: "Batu Caves mixes temple-road traffic with industrial-edge terraces. Weekend congestion and lorry routes on the main road change when a residential crew can actually park.",
      ms: "Batu Caves mencampurkan trafik jalan kuil dengan teres tepi industri. Kesibukan hujung minggu dan laluan lori di jalan utama mengubah masa pasukan kediaman boleh parkir.",
      zh: "黑风洞把庙路车流和工业边缘的排屋混在一起。周末拥堵和主路货车路线，会改变住宅施工队实际能停车的时间。"
    }
  },
  "selayang": {
    stock: "landed",
    note: {
      en: "Selayang is older terrace and flat stock toward the wholesale markets. Tight inner roads and mixed commercial-residential lots mean the first photo should show where the van can stand.",
      ms: "Selayang ialah stok teres dan flat lama ke arah pasar borong. Jalan dalaman ketat dan lot campuran komersial-kediaman bermakna foto pertama patut tunjuk di mana van boleh berdiri.",
      zh: "士拉央是靠近批发市场的较旧排屋和组屋。内部道路窄、商住混合地段多，第一张照片就应显示货车能停在哪里。"
    }
  },
  "rawang": {
    stock: "landed",
    note: {
      en: "Rawang is a northern Selangor town of landed townships. Travel time from KL and whether the lot is inside a guarded scheme should be in the first message so the crew is not quoted as a city call-out.",
      ms: "Rawang ialah pekan utara Selangor dengan bandar landed. Masa perjalanan dari KL dan sama ada lot di dalam skim berkawal patut ada dalam mesej pertama supaya pasukan tidak disebut harga sebagai panggilan bandar.",
      zh: "Rawang 是雪兰莪北部的有地市镇。从吉隆坡的车程、以及地段是否在门禁小区内，应写在第一条消息里，以免按市区出车来报价。"
    }
  },
  "sungai-buloh": {
    stock: "landed",
    note: {
      en: "Sungai Buloh mixes hospital-adjacent flats with newer landed schemes. Access can be a guarded township gate or a busy federal-road lot — the quotation should name which.",
      ms: "Sungai Buloh mencampurkan flat berhampiran hospital dengan skim landed baharu. Akses boleh jadi pintu bandar berkawal atau lot di jalan persekutuan yang sibuk — sebut harga patut namakan yang mana.",
      zh: "双溪毛糯把医院附近组屋和较新的有地小区混在一起。通道可能是门禁市镇大门，也可能是繁忙联邦路边地段——报价应写明是哪一种。"
    }
  },
  "semenyih": {
    stock: "landed",
    note: {
      en: "Semenyih is university-town and hillside landed stock south of Kajang. Longer drives, steeper lots and weekend student traffic are the planning extras, not a KL loading bay.",
      ms: "Semenyih ialah stok landed pekan universiti dan cerun di selatan Kajang. Pandu yang lebih jauh, lot lebih curam dan trafik pelajar hujung minggu ialah tambahan perancangan, bukan loading bay KL.",
      zh: "士毛月是加影以南的大学城和山坡有地住宅。车程更长、地段更陡、周末学生车流，是规划加项，不是吉隆坡卸货区。"
    }
  },
  "seri-kembangan": {
    stock: "mixed",
    note: {
      en: "Seri Kembangan sits between the BESRAYA and the Balakong industrial edge. Shop-lot first floors and terrace back lanes both appear; say which one the job is so the crew brings the right protection.",
      ms: "Seri Kembangan terletak antara BESRAYA dan tepi industri Balakong. Tingkat bawah shoplot dan lorong belakang teres kedua-duanya muncul; nyatakan yang mana supaya pasukan bawa perlindungan yang betul.",
      zh: "沙登夹在 BESRAYA 和无拉港工业边缘之间。店屋一楼和排屋后巷都会遇到；说明是哪一种，施工队才能带对防护。"
    }
  },
  "pandan-indah": {
    stock: "mixed",
    note: {
      en: "Pandan Indah is a compact Ampang-adjacent mix of flats, terraces and shoplots. Tight inner parking and school-peak congestion are the usual reasons a half-day job becomes a morning-only slot.",
      ms: "Pandan Indah ialah campuran padat flat, teres dan shoplot berhampiran Ampang. Parkir dalaman ketat dan kesibukan puncak sekolah ialah sebab biasa kerja setengah hari menjadi slot pagi sahaja.",
      zh: "班丹英达是安邦旁紧凑的组屋、排屋和店屋混合区。内部停车位紧、学校高峰拥堵，常常让半天工程变成只能上午做。"
    }
  },
  "sentul": {
    stock: "mixed",
    note: {
      en: "Sentul mixes older walk-ups and new transit-oriented towers. The quote should name the building generation — an older walk-up has no service lift, a new tower has a JMB loading slot.",
      ms: "Sentul mencampurkan walk-up lama dan menara transit baharu. Sebut harga patut namakan generasi bangunan — walk-up lama tiada lif servis, menara baharu ada slot loading JMB.",
      zh: "Sentul 把较旧的无电梯公寓和新建的公交导向塔楼混在一起。报价应写明楼龄——老旧无电梯楼没有服务电梯，新塔楼则有管委会卸货时段。"
    }
  }
};

const FALLBACK: AreaWorkProfile = {
  stock: "mixed",
  note: {
    en: "This Klang Valley neighbourhood mixes condominiums, shoplots and landed streets. The quotation starts with the property type because access, hours and clean-up change with it.",
    ms: "Kejiranan Lembah Klang ini mencampurkan kondominium, shoplot dan jalan landed. Sebut harga bermula dengan jenis hartanah kerana akses, waktu dan pembersihan berubah mengikutnya.",
    zh: "这个巴生谷邻里混合公寓、店屋和有地街道。报价从房产类型开始，因为通道、工时和清理都随类型改变。"
  }
};

export function getAreaWorkProfile(slug: string): AreaWorkProfile {
  return areaWorkProfiles[slug] ?? FALLBACK;
}
