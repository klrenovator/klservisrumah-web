import type { Locale } from "@/lib/i18n";

/**
 * EMERGENCY SERVICE CLASSIFICATION + CONTENT — P2-17 / P2-03 (Fix Wave 6).
 *
 * Part 2 of the deep audit found all 29 `/services/<svc>/emergency` pages were
 * one fixed 257–270-word template (pairwise Jaccard 0.727) whose three generic
 * steps — "Stop or isolate the source if safe", "Send photos and your
 * location", "Approve the quote before repair starts" — appeared verbatim on
 * every page. P2-03 added the intent problem: "Urgent Complete House
 * Renovation" / "Urgent Custom Carpentry" / "Urgent Epoxy Flooring" promise an
 * emergency service the business does not genuinely position as one, and the
 * keyword-slot pages dilute crawl budget while pretending to be urgent.
 *
 * THE FIX (audit §2.1 P2-03 + §2.5 P2-17):
 *   1. KEEP emergency pages only for services with real emergency semantics.
 *   2. RETIRE the rest — 301 `/services/<svc>/emergency` → `/services/<svc>`
 *      (handled in `middleware.ts`, same real-301 pattern as BP-1 phase 1) and
 *      stop generating / sitemap-listing them.
 *   3. REWRITE the kept pages with per-service emergency content.
 *
 * KEPT (12) — real emergency semantics, evidenced by the site's own content:
 *   plumbing          — burst pipe, sewage backup, unstoppable active leak
 *   electrical        — burning smell, sparking, tripping with smoke, live wire
 *   water-heater      — leaking tank over electrics, burning smell, sparking
 *   locksmith         — lockout (child/pet inside), snapped key, door won't lock
 *   roof-repair       — active storm leak, displaced tiles, sagging section
 *   window-repair     — shattered glass, high-rise pane off-track, forced entry
 *   door              — door won't close/lock, hinge pulled out, break-in damage
 *   autogate          — gate stuck open at night, fallen off track, smoking motor
 *   cctv              — cameras offline after an incident, storage failure
 *   waterproofing     — active water ingress, bathroom leak flooding lower floor
 *   ceiling           — sagging/bulging plasterboard, water-filled blister
 *   glass-aluminium   — shattered shower screen, cracked glass door, sharp edges
 *
 * RETIRED (17): painting, handyman, house-renovation, ceiling-fan, lighting,
 *   tiling, plaster-ceiling, skim-coat, flooring, epoxy-flooring,
 *   kitchen-cabinet, carpentry, welding, aircon, kitchen-renovation,
 *   bathroom-renovation, awning-installation.
 */

export type EmergencyContent = {
  /** What actually counts as an emergency for this service. */
  emergencies: string[];
  /** What the customer should do right now (before we arrive). */
  immediateSteps: string[];
  /** When they should stop DIY-ing and call a professional. */
  whenToCall: string[];
  /** Emergency cost factors — honest, no fabricated prices. */
  costNote: string;
  /** Service-specific emergency FAQs (rendered + FAQPage schema). */
  faqs: { q: string; a: string }[];
};

export type LocalizedEmergencyContent = Record<Locale, EmergencyContent>;

export const EMERGENCY_SERVICES: Record<string, LocalizedEmergencyContent> = {
  // ── plumbing ───────────────────────────────────────────────────────────
  plumbing: {
    en: {
      emergencies: [
        "A burst pipe spraying water onto floors, walls, or electrical points",
        "Sewage or waste water backing up into the house",
        "A main valve that will not shut and an uncontrolled active leak",
        "Water flooding from a concealed pipe inside a wall or ceiling",
        "A leaking water heater or washing machine that cannot be isolated",
      ],
      immediateSteps: [
        "Turn off the main stopcock (usually near the water meter or under the kitchen sink)",
        "Switch off the electricity at the distribution board if water is near sockets or switches",
        "Contain the water with buckets and towels, and lift rugs or furniture off the floor",
        "Take photos and a short video of the source before anything is moved",
      ],
      whenToCall: [
        "You cannot find or turn the main valve, or water is still rising",
        "The leak is inside a wall, ceiling, or slab and only shows as dampness",
        "Sewage is backing up into toilets, showers, or floor traps",
        "More than one fixture is blocked or draining slowly at the same time",
      ],
      costNote:
        "Emergency plumbing is priced on priority dispatch, the time of day, access difficulty, and the parts needed. The uplift is stated in your quote before work starts — a routine repair booked in advance is always the cheaper option when the situation allows it.",
      faqs: [
        {
          q: "How fast can an emergency plumber arrive in KL?",
          a: "We dispatch the nearest available technician, typically within 30–60 minutes across KL and Selangor depending on traffic and crew availability. Send your location pin early.",
        },
        {
          q: "Can I stop a burst pipe before you arrive?",
          a: "Turn off the main stopcock and open the nearest taps to drain the line. If the burst is before the valve, contain the spray and keep electrical points clear until we arrive.",
        },
        {
          q: "Is emergency plumbing more expensive?",
          a: "A priority or after-hours dispatch can cost more than scheduled work, but the price is confirmed before we start. Where the leak is contained, booking a standard slot is cheaper.",
        },
        {
          q: "Will the technician repair it permanently or just stop the leak?",
          a: "We stop the leak first, then propose a permanent repair with the parts and price confirmed before the final work is done.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Paip pecah menyembur air ke lantai, dinding atau titik elektrik",
        "Air kumbahan atau najis naik semula ke dalam rumah",
        "Injap utama tidak dapat ditutup dan kebocoran aktif tidak terkawal",
        "Air membanjiri daripada paip tersembunyi di dalam dinding atau siling",
        "Pemanas air atau mesin basuh bocor dan tidak boleh diasingkan",
      ],
      immediateSteps: [
        "Tutup stopcock utama (biasanya berhampiran meter air atau di bawah sinki dapur)",
        "Matikan elektrik di papan agihan jika air berhampiran soket atau suis",
        "Tampung air dengan baldi dan tuala, angkat permaidani atau perabot dari lantai",
        "Ambil foto dan video pendek punca kebocoran sebelum apa-apa dialihkan",
      ],
      whenToCall: [
        "Anda tidak jumpa atau tidak dapat tutup injap utama, atau air masih naik",
        "Kebocoran di dalam dinding, siling atau papak dan hanya kelihatan lembap",
        "Kumbahan naik semula ke tandas, pancuran atau floor trap",
        "Lebih daripada satu lekapan tersumbat atau mengalir perlahan serentak",
      ],
      costNote:
        "Paip kecemasan dicaj ikut dispatch keutamaan, masa hari, kesukaran akses dan alat ganti. Caj tambahan dinyatakan dalam sebut harga sebelum kerja bermula — pembaikan biasa yang ditempah awal sentiasa lebih murah jika keadaan mengizinkan.",
      faqs: [
        {
          q: "Berapa cepat tukang paip kecemasan boleh tiba di KL?",
          a: "Kami hantar juruteknik terdekat, biasanya dalam 30–60 minit di KL dan Selangor bergantung pada trafik dan ketersediaan krew. Hantar pin lokasi awal.",
        },
        {
          q: "Bolehkah saya hentikan paip pecah sebelum anda tiba?",
          a: "Tutup stopcock utama dan buka paip terdekat untuk mengalirkan air dalam paip. Jika pecah sebelum injap, tampung semburan dan jauhkan titik elektrik sehingga kami tiba.",
        },
        {
          q: "Adakah paip kecemasan lebih mahal?",
          a: "Dispatch keutamaan atau selepas waktu kerja boleh lebih mahal daripada kerja berjadual, tetapi harga disahkan sebelum kami mula. Jika kebocoran terkawal, slot biasa lebih murah.",
        },
        {
          q: "Adakah juruteknik akan baiki kekal atau hanya hentikan kebocoran?",
          a: "Kami hentikan kebocoran dahulu, kemudian cadangkan pembaikan kekal dengan alat ganti dan harga disahkan sebelum kerja akhir dilakukan.",
        },
      ],
    },
    zh: {
      emergencies: [
        "水管爆裂，水喷向地板、墙壁或电源插座",
        "污水或废水倒流回屋内",
        "主阀门关不上，漏水失控",
        "隐藏在墙内或天花内的水管漏水导致积水",
        "热水器或洗衣机漏水且无法隔离",
      ],
      immediateSteps: [
        "关闭总水阀（通常在水表旁或厨房水槽下方）",
        "若水接近插座或开关，请在配电箱关闭电源",
        "用水桶和毛巾接水，把地毯和家具移离地面",
        "在移动任何物品前，先拍摄漏水源头的照片和短视频",
      ],
      whenToCall: [
        "找不到或无法关闭总阀，或水位仍在上升",
        "漏水在墙内、天花或楼板内，只表现为潮湿",
        "污水倒流进马桶、淋浴间或地漏",
        "多个设备同时堵塞或排水缓慢",
      ],
      costNote:
        "紧急水管服务按优先派工、时段、施工难度和所需零件计费。附加费会在施工前在报价中说明——若情况允许，提前预约普通维修始终更划算。",
      faqs: [
        {
          q: "吉隆坡的紧急水管工多久能到？",
          a: "我们会派遣最近的技师，通常在吉隆坡与雪兰莪 30–60 分钟内到达，具体取决于交通和人员安排。请尽早发送位置。",
        },
        {
          q: "在你们到达前我能止住爆裂的水管吗？",
          a: "关闭总水阀并打开最近的水龙头排空管道。若爆裂点在阀门之前，先接住喷水并让电源插座远离水，等我们到达。",
        },
        {
          q: "紧急水管服务是否更贵？",
          a: "优先或非工作时间派工可能比预约服务更贵，但价格会在开工前确认。若漏水已控制住，预约普通时段更便宜。",
        },
        {
          q: "技师会永久修复还是只止住漏水？",
          a: "我们会先止住漏水，再提出永久修复方案，零件和价格在最终施工前确认。",
        },
      ],
    },
  },

  // ── electrical ─────────────────────────────────────────────────────────
  electrical: {
    en: {
      emergencies: [
        "A burning or fishy smell coming from a socket, switch, or distribution board",
        "Sparks, crackling, or visible arcing from any fitting",
        "An RCCB/MCB that trips repeatedly, especially with smoke or heat",
        "An exposed or damaged live wire within reach",
        "Sudden loss of power to part of the house with no tripped breaker",
      ],
      immediateSteps: [
        "Switch off the main breaker at the distribution board if anything is hot, smoking, or sparking",
        "Unplug every appliance on the affected circuit",
        "Do not touch wet switches, sockets, or the board — keep everyone clear",
        "Note which breaker trips and what was running at the time",
      ],
      whenToCall: [
        "You smell burning, see sparks, or a fitting feels hot to the touch",
        "A breaker keeps tripping even after appliances are unplugged",
        "A live wire is exposed or water has reached any electrical point",
        "Power is flickering across several rooms at once",
      ],
      costNote:
        "Emergency electrical work is charged on call-out, time of day, fault-finding depth, and any parts or cables replaced. Fault-finding is quoted before we start, and the repair price is confirmed once the fault is located.",
      faqs: [
        {
          q: "Is a tripping breaker an emergency?",
          a: "A one-off trip is usually fine to reset. If it trips repeatedly, feels hot, or is accompanied by a burning smell, treat it as an emergency and switch the circuit off.",
        },
        {
          q: "What should I do if a socket is sparking?",
          a: "Switch off the main breaker, unplug appliances from that circuit, and do not use the socket until a licensed electrician has inspected and repaired it.",
        },
        {
          q: "Do you work on wiring at night?",
          a: "Yes. For genuine safety emergencies we dispatch after hours. The uplift is stated in your quote before work begins.",
        },
        {
          q: "Can water damage make my wiring dangerous?",
          a: "Yes. Water ingress can corrode conductors and energise surfaces. If flooding or a leak has reached any wiring, have it inspected before restoring power.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Bau terbakar atau hanyir dari soket, suis atau papan agihan",
        "Percikan api, bunyi berdetus atau arka kelihatan dari mana-mana lekapan",
        "RCCB/MCB kerap trip, terutamanya dengan asap atau haba",
        "Wayar hidup terdedah atau rosak dalam jangkauan",
        "Bekalan elektrik terputus separa rumah tanpa pemutus yang trip",
      ],
      immediateSteps: [
        "Matikan pemutus utama di papan agihan jika ada yang panas, berasap atau berpercikan",
        "Cabut semua peralatan pada litar terjejas",
        "Jangan sentuh suis, soket atau papan yang basah — jauhkan semua orang",
        "Catat pemutus mana yang trip dan apa yang sedang digunakan ketika itu",
      ],
      whenToCall: [
        "Anda terbau terbakar, nampak percikan, atau lekapan terasa panas",
        "Pemutus terus trip walaupun peralatan sudah dicabut",
        "Wayar hidup terdedah atau air sampai ke mana-mana titik elektrik",
        "Bekalan berkelip di beberapa bilik serentak",
      ],
      costNote:
        "Kerja elektrik kecemasan dicaj ikut call-out, masa hari, kedalaman pencarian kerosakan dan alat ganti atau kabel yang diganti. Pencarian kerosakan dinyatakan sebelum kami mula, dan harga pembaikan disahkan selepas punca dikenal pasti.",
      faqs: [
        {
          q: "Adakah pemutus yang trip satu kecemasan?",
          a: "Trip sekali-sekala biasanya selamat untuk direset. Jika ia kerap trip, terasa panas atau disertai bau terbakar, anggap ia kecemasan dan matikan litar.",
        },
        {
          q: "Apa perlu saya buat jika soket berpercikan api?",
          a: "Matikan pemutus utama, cabut peralatan pada litar itu dan jangan gunakan soket sehingga juruelektrik berlesen memeriksa dan membaikinya.",
        },
        {
          q: "Adakah anda buat kerja pendawaian pada waktu malam?",
          a: "Ya. Untuk kecemasan keselamatan sebenar kami hantar selepas waktu kerja. Caj tambahan dinyatakan dalam sebut harga sebelum kerja bermula.",
        },
        {
          q: "Bolehkah kerosakan air membuat pendawaian berbahaya?",
          a: "Ya. Kemasukan air boleh menghakis konduktor dan mengecas permukaan. Jika banjir atau kebocoran sampai ke pendawaian, periksa dahulu sebelum menghidupkan semula bekalan.",
        },
      ],
    },
    zh: {
      emergencies: [
        "插座、开关或配电箱发出烧焦或鱼腥味",
        "任何设备出现火花、噼啪声或可见电弧",
        "漏电保护器/断路器反复跳闸，尤其伴有烟雾或发热",
        "裸露或损坏的带电电线在可触及范围内",
        "家中部分区域突然断电但没有跳闸",
      ],
      immediateSteps: [
        "若有任何设备发热、冒烟或打火，立即在配电箱关闭总开关",
        "拔掉受影响线路上的所有电器",
        "不要触碰潮湿的开关、插座或配电箱——让所有人远离",
        "记录是哪个断路器跳闸，以及当时正在运行的电器",
      ],
      whenToCall: [
        "闻到烧焦味、看到火花，或设备摸起来发烫",
        "拔掉电器后断路器仍反复跳闸",
        "带电电线裸露，或水已接触到任何电源点",
        "多个房间同时出现灯光闪烁",
      ],
      costNote:
        "紧急电工服务按上门费、时段、故障排查深度以及更换的零件或线缆计费。排查费用在开工前说明，找到故障后确认维修价格。",
      faqs: [
        {
          q: "断路器跳闸算紧急情况吗？",
          a: "偶尔跳闸通常可以复位。但如果反复跳闸、发热或伴有烧焦味，应视为紧急情况并关闭该线路。",
        },
        {
          q: "插座打火花该怎么办？",
          a: "关闭总开关，拔掉该线路上的电器，在持牌电工检查和维修之前不要使用该插座。",
        },
        {
          q: "你们夜间处理线路问题吗？",
          a: "可以。对于真正的安全隐患，我们提供非工作时间派工，附加费会在开工前的报价中说明。",
        },
        {
          q: "进水会让线路变危险吗？",
          a: "会。进水会腐蚀导体并可能使表面带电。若洪水或漏水已接触线路，请先检查再恢复供电。",
        },
      ],
    },
  },

  // ── water-heater ───────────────────────────────────────────────────────
  "water-heater": {
    en: {
      emergencies: [
        "A storage tank leaking directly onto wiring, sockets, or the ceiling below",
        "A burning or plastic smell from the unit or its isolator switch",
        "Sparking or buzzing from the heater or its cable",
        "Scalding-hot water that will not cool down at the mixer",
        "A loud pop followed by water or smoke from the unit",
      ],
      immediateSteps: [
        "Switch off the heater's isolator and the water supply to the unit",
        "Turn off the relevant breaker at the distribution board",
        "Contain any dripping water away from electrical points",
        "Stop using the bathroom until the unit is checked",
      ],
      whenToCall: [
        "The tank is leaking, the unit smells burnt, or you hear buzzing or sparking",
        "The breaker for the heater keeps tripping",
        "The water temperature is dangerously inconsistent or scalding",
        "Water is staining or sagging the ceiling below the heater",
      ],
      costNote:
        "Water-heater emergencies are priced on the fault (element, thermostat, tank, or wiring), the unit type, and any parts replaced. Because water and electricity meet here, we always isolate both before inspection and confirm the repair price first.",
      faqs: [
        {
          q: "Is a leaking water heater dangerous?",
          a: "Yes — a leaking tank can drip onto wiring and the ceiling below. Switch off the isolator and water supply, then get it inspected before using the bathroom again.",
        },
        {
          q: "Should I switch off the heater if it trips the breaker?",
          a: "Yes. Leave the breaker off and stop using the heater until an electrician has checked the element, thermostat, and wiring.",
        },
        {
          q: "Can you replace a heater the same day?",
          a: "For genuine safety failures we can usually supply and install a replacement the same day, subject to stock. The unit and labour price are confirmed before we start.",
        },
        {
          q: "Why does my heater smell like burning?",
          a: "Burning smells usually point to a failing thermostat, element, or overheating wiring. Switch it off and have it checked before further use.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Tangki simpanan bocor terus ke pendawaian, soket atau siling bawah",
        "Bau terbakar atau plastik dari unit atau suis pengasingnya",
        "Percikan api atau bunyi berdengung dari pemanas atau kabelnya",
        "Air terlalu panas mendidih yang tidak dapat disejukkan pada mixer",
        "Bunyi letupan kecil diikuti air atau asap dari unit",
      ],
      immediateSteps: [
        "Matikan suis pengasing pemanas dan bekalan air ke unit",
        "Matikan pemutus berkaitan di papan agihan",
        "Tampung titisan air jauh dari titik elektrik",
        "Berhenti menggunakan bilik mandi sehingga unit diperiksa",
      ],
      whenToCall: [
        "Tangki bocor, unit berbau terbakar, atau anda dengar dengungan atau percikan",
        "Pemutus pemanas kerap trip",
        "Suhu air tidak konsisten atau terlalu panas berbahaya",
        "Air mengotorkan atau melendutkan siling di bawah pemanas",
      ],
      costNote:
        "Kecemasan pemanas air dicaj ikut kerosakan (elemen, termostat, tangki atau pendawaian), jenis unit dan alat ganti. Kerana air dan elektrik bertemu di sini, kami sentiasa asingkan kedua-duanya sebelum pemeriksaan dan sahkan harga pembaikan dahulu.",
      faqs: [
        {
          q: "Adakah pemanas air bocor berbahaya?",
          a: "Ya — tangki bocor boleh menitis ke pendawaian dan siling bawah. Matikan suis pengasing dan bekalan air, kemudian periksa sebelum menggunakan bilik mandi semula.",
        },
        {
          q: "Perlukah saya matikan pemanas jika ia membuat pemutus trip?",
          a: "Ya. Biarkan pemutus mati dan berhenti menggunakan pemanas sehingga juruelektrik memeriksa elemen, termostat dan pendawaian.",
        },
        {
          q: "Bolehkah anda gantikan pemanas pada hari sama?",
          a: "Untuk kegagalan keselamatan sebenar kami biasanya boleh bekalkan dan pasang pengganti pada hari sama, tertakluk kepada stok. Harga unit dan upah disahkan sebelum kami mula.",
        },
        {
          q: "Kenapa pemanas saya berbau terbakar?",
          a: "Bau terbakar biasanya menandakan termostat, elemen atau pendawaian terlalu panas. Matikan dan periksa sebelum penggunaan selanjutnya.",
        },
      ],
    },
    zh: {
      emergencies: [
        "储水式热水器漏水直接滴到线路、插座或下方天花",
        "热水器或其隔离开关发出烧焦或塑料味",
        "热水器或线路出现火花或嗡嗡声",
        "出水滚烫且在混水阀处无法降温",
        "一声闷响后热水器出水或冒烟",
      ],
      immediateSteps: [
        "关闭热水器的隔离开关和进水阀",
        "在配电箱关闭对应的断路器",
        "把滴落的水引离电源点",
        "在检查前暂停使用该浴室",
      ],
      whenToCall: [
        "水箱漏水、设备有烧焦味，或听到嗡嗡声或火花",
        "热水器的断路器反复跳闸",
        "水温异常不稳或烫得危险",
        "热水器下方的天花出现水渍或下坠",
      ],
      costNote:
        "热水器紧急维修按故障（加热管、温控器、水箱或线路）、机型及更换零件计费。因这里水电交汇，我们会在检查前先隔离水电，并在维修前确认价格。",
      faqs: [
        {
          q: "热水器漏水危险吗？",
          a: "危险——漏水的水箱可能滴到线路和下方天花。关闭隔离开关和进水阀，检查后再使用该浴室。",
        },
        {
          q: "热水器导致跳闸，我该关掉它吗？",
          a: "应该。保持断路器关闭并停止使用热水器，直到电工检查加热管、温控器和线路。",
        },
        {
          q: "你们能当天更换热水器吗？",
          a: "对于真正的安全故障，我们通常可在当天供货并安装，视库存而定。设备和人工费在开工前确认。",
        },
        {
          q: "为什么热水器有烧焦味？",
          a: "烧焦味通常意味着温控器、加热管或线路过热。请关闭电源，检查后再使用。",
        },
      ],
    },
  },

  // ── locksmith ──────────────────────────────────────────────────────────
  locksmith: {
    en: {
      emergencies: [
        "Locked out with a child, elderly person, or pet inside",
        "A key snapped off inside the lock, leaving the door unusable",
        "A door that will not lock after a break-in or forced entry",
        "A smart lock that is dead or jammed with the door shut",
        "Lost keys with the home unsecured overnight",
      ],
      immediateSteps: [
        "Do not force the lock — a snapped key or damaged cylinder makes it worse",
        "If someone is locked inside, stay calm and talk to them through the door",
        "Check for a safe alternative entry, but never climb to a high window",
        "Keep proof of address (IC, utility bill, or rental agreement) ready for verification",
      ],
      whenToCall: [
        "You are locked out and cannot secure or enter the property",
        "A key has snapped in the lock or the cylinder is damaged",
        "The door will not lock and the property cannot be left unsecured",
        "A smart lock is unresponsive, jammed, or giving low-battery lockout",
      ],
      costNote:
        "Locksmith call-outs are priced on time of day, the lock type, and whether the cylinder or handle needs replacing. Proof of ownership or tenancy is verified before we open or re-key any door — no exceptions.",
      faqs: [
        {
          q: "How do you verify it is really my house?",
          a: "We ask for proof of ownership or tenancy — an IC with the matching address, a utility bill, or a rental agreement. This is required before we open or re-key any door.",
        },
        {
          q: "Can you open a smart lock that has run out of battery?",
          a: "Most smart locks have an emergency power or key bypass. If not, we can open the lock with minimal damage and then repair or replace it.",
        },
        {
          q: "Will opening the door damage my lock?",
          a: "We use non-destructive techniques first. Some locks must be drilled, but we always confirm with you and price the replacement before doing so.",
        },
        {
          q: "Do you re-key after a break-in?",
          a: "Yes. Re-keying or replacing the cylinder after forced entry is the standard way to make the property secure again, and we can do it in the same visit.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Terkunci di luar dengan anak, warga emas atau haiwan peliharaan di dalam",
        "Kunci patah di dalam mangga, menjadikan pintu tidak boleh digunakan",
        "Pintu tidak boleh dikunci selepas pecah masuk atau masuk paksa",
        "Kunci pintar mati atau tersekat ketika pintu tertutup",
        "Kunci hilang dan rumah tidak selamat semalaman",
      ],
      immediateSteps: [
        "Jangan paksa mangga — kunci patah atau silinder rosak akan memburukkan keadaan",
        "Jika ada orang terkunci di dalam, bertenang dan bercakap dengan mereka melalui pintu",
        "Periksa laluan masuk alternatif yang selamat, tetapi jangan panjat tingkap tinggi",
        "Sediakan bukti alamat (IC, bil utiliti atau perjanjian sewa) untuk pengesahan",
      ],
      whenToCall: [
        "Anda terkunci di luar dan tidak dapat masuk atau mengunci hartanah",
        "Kunci patah dalam mangga atau silinder rosak",
        "Pintu tidak boleh dikunci dan hartanah tidak boleh dibiarkan tidak selamat",
        "Kunci pintar tidak bertindak balas, tersekat atau terkunci kerana bateri lemah",
      ],
      costNote:
        "Call-out tukang kunci dicaj ikut masa hari, jenis kunci dan sama ada silinder atau pemegang perlu diganti. Bukti pemilikan atau penyewaan disahkan sebelum kami buka atau re-key mana-mana pintu — tiada pengecualian.",
      faqs: [
        {
          q: "Bagaimana anda sahkan ia memang rumah saya?",
          a: "Kami minta bukti pemilikan atau penyewaan — IC dengan alamat yang sepadan, bil utiliti atau perjanjian sewa. Ini wajib sebelum kami buka atau re-key mana-mana pintu.",
        },
        {
          q: "Bolehkah anda buka kunci pintar yang kehabisan bateri?",
          a: "Kebanyakan kunci pintar ada bekalan kecemasan atau pintasan kunci. Jika tiada, kami boleh buka dengan kerosakan minimum kemudian baiki atau ganti.",
        },
        {
          q: "Adakah membuka pintu akan merosakkan kunci saya?",
          a: "Kami guna teknik tanpa musnah dahulu. Sesetengah kunci perlu digerudi, tetapi kami sentiasa sahkan dengan anda dan tetapkan harga penggantian sebelum berbuat demikian.",
        },
        {
          q: "Adakah anda re-key selepas pecah masuk?",
          a: "Ya. Re-key atau ganti silinder selepas masuk paksa ialah cara standard untuk menjadikan hartanah selamat semula, dan kami boleh lakukannya dalam lawatan yang sama.",
        },
      ],
    },
    zh: {
      emergencies: [
        "被锁在门外，而屋内还有小孩、老人或宠物",
        "钥匙断在锁芯里，门无法使用",
        "遭入室或强行进入后，门无法上锁",
        "门关着时智能锁没电或卡死",
        "钥匙丢失，房屋整夜无法上锁",
      ],
      immediateSteps: [
        "不要强行开锁——钥匙断裂或锁芯损坏会让情况更糟",
        "若有人被锁在屋内，保持冷静并隔着门与其沟通",
        "检查安全的替代入口，但切勿攀爬高处的窗户",
        "准备好地址证明（身份证、水电账单或租约）以便核实",
      ],
      whenToCall: [
        "被锁在门外，无法进入或锁好房屋",
        "钥匙断在锁里或锁芯损坏",
        "门无法上锁，房屋不能无人看管",
        "智能锁无反应、卡死或因低电量锁死",
      ],
      costNote:
        "开锁上门服务按时段、锁的类型以及是否需要更换锁芯或把手计费。开锁或换锁前我们会核实产权或租住证明——无一例外。",
      faqs: [
        {
          q: "你们如何核实这是我的房子？",
          a: "我们会要求提供产权或租住证明——地址相符的身份证、水电账单或租约。开锁或换锁前必须核实。",
        },
        {
          q: "智能锁没电了，你们能打开吗？",
          a: "大多数智能锁有应急电源或钥匙旁路。若没有，我们可尽量无损伤开锁，然后维修或更换。",
        },
        {
          q: "开门会损坏我的锁吗？",
          a: "我们优先采用无损技术。部分锁必须钻孔，但会事先与您确认并报出更换价格。",
        },
        {
          q: "入室后你们能换锁芯吗？",
          a: "可以。遭强行进入后换锁芯或更换锁体是恢复安全的常规做法，我们可在同一次上门完成。",
        },
      ],
    },
  },

  // ── roof-repair ────────────────────────────────────────────────────────
  "roof-repair": {
    en: {
      emergencies: [
        "Active water pouring through the ceiling during a storm",
        "Displaced or lifted roof tiles over an occupied room",
        "A sagging or visibly weakened roof section",
        "A fallen branch or debris puncturing the roof covering",
        "Water running down internal walls from the roof line",
      ],
      immediateSteps: [
        "Place buckets and move furniture and electronics out of the water path",
        "Switch off ceiling lights or fans if water is near them",
        "Do not climb onto the roof — wet tiles are slippery and unsafe",
        "Take photos of the leak from inside for the technician",
      ],
      whenToCall: [
        "Water is entering faster than you can contain it",
        "Tiles or sheets are visibly displaced or hanging over a walkway",
        "The roof structure looks sagging or sounds different when it rains",
        "The same spot leaks every heavy rain despite previous patching",
      ],
      costNote:
        "Emergency roof work is priced on access, the size and type of the damaged area, and whether it is a temporary make-safe or a permanent repair. We always do a temporary containment first in a storm, then quote the permanent fix.",
      faqs: [
        {
          q: "Can you repair a roof during rain?",
          a: "We make the area safe and contain the water first, then complete the permanent repair once the surface is dry enough to work safely.",
        },
        {
          q: "Is a temporary patch included in the emergency call-out?",
          a: "The emergency visit covers make-safe and containment. The permanent repair is quoted separately once we can inspect the roof safely.",
        },
        {
          q: "How do I know if my roof leak is an emergency?",
          a: "If water is reaching electrical fittings, ceilings are sagging, or tiles are displaced over occupied rooms, treat it as an emergency.",
        },
        {
          q: "Do you work on landed houses and condos?",
          a: "We handle landed-house roofs directly. For condos and apartments, roof work usually falls to the management — we help with internal ceiling and water-damage repair.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Air aktif mencurah melalui siling semasa ribut",
        "Genting bumbung beralih atau terangkat di atas bilik berpenghuni",
        "Bahagian bumbung kendur atau kelihatan lemah",
        "Dahan patah atau serpihan menebuk penutup bumbung",
        "Air mengalir turun dinding dalaman dari garisan bumbung",
      ],
      immediateSteps: [
        "Letak baldi dan alihkan perabot serta elektronik dari laluan air",
        "Matikan lampu siling atau kipas jika air berhampiran",
        "Jangan naik ke bumbung — genting basah licin dan tidak selamat",
        "Ambil foto kebocoran dari dalam untuk juruteknik",
      ],
      whenToCall: [
        "Air masuk lebih cepat daripada yang dapat anda tampung",
        "Genting atau kepingan jelas beralih atau tergantung di atas laluan",
        "Struktur bumbung kelihatan kendur atau bunyi berbeza ketika hujan",
        "Tempat sama bocor setiap hujan lebat walaupun sudah ditampal",
      ],
      costNote:
        "Kerja bumbung kecemasan dicaj ikut akses, saiz dan jenis kawasan rosak, dan sama ada pembaikan sementara atau kekal. Kami sentiasa lakukan penahanan sementara dahulu semasa ribut, kemudian sebut harga pembaikan kekal.",
      faqs: [
        {
          q: "Bolehkah anda baiki bumbung semasa hujan?",
          a: "Kami selamatkan kawasan dan tampung air dahulu, kemudian selesaikan pembaikan kekal apabila permukaan cukup kering untuk kerja selamat.",
        },
        {
          q: "Adakah tampalan sementara termasuk dalam call-out kecemasan?",
          a: "Lawatan kecemasan meliputi pengamanan dan penahanan. Pembaikan kekal disebut harga berasingan selepas kami dapat periksa bumbung dengan selamat.",
        },
        {
          q: "Bagaimana saya tahu kebocoran bumbung satu kecemasan?",
          a: "Jika air sampai ke lekapan elektrik, siling kendur, atau genting beralih di atas bilik berpenghuni, anggap ia kecemasan.",
        },
        {
          q: "Adakah anda kerja di rumah teres dan kondo?",
          a: "Kami urus bumbung rumah teres secara terus. Untuk kondo dan apartmen, kerja bumbung biasanya di bawah pengurusan — kami bantu pembaikan siling dalaman dan kerosakan air.",
        },
      ],
    },
    zh: {
      emergencies: [
        "暴风雨时水直接从天花涌入",
        "有人居住的房间上方瓦片移位或掀起",
        "屋顶某处下坠或明显变弱",
        "断枝或杂物刺穿屋顶覆盖层",
        "水从屋顶线沿内墙流下",
      ],
      immediateSteps: [
        "放置水桶，把家具和电器移出水流路径",
        "若水接近天花灯或风扇，请关闭电源",
        "不要爬上屋顶——湿瓦片很滑，不安全",
        "从屋内拍摄漏水处的照片给技师",
      ],
      whenToCall: [
        "进水的速度超过你能接住的速度",
        "瓦片或板材明显移位或悬在走道上方",
        "屋顶结构看起来下坠，或下雨时声音异常",
        "每次大雨同一位置都漏水，尽管已修补过",
      ],
      costNote:
        "屋顶紧急维修按施工条件、损坏面积和类型，以及临时抢险或永久修复计费。暴风雨中我们会先做临时封堵，再报价永久修复。",
      faqs: [
        {
          q: "下雨时你们能修屋顶吗？",
          a: "我们会先做好安全处理和止水，待表面足够干燥、可安全施工后，再完成永久修复。",
        },
        {
          q: "紧急上门包含临时修补吗？",
          a: "紧急上门包含抢险和止水。永久修复会在我们能安全检查屋顶后另行报价。",
        },
        {
          q: "如何判断屋顶漏水是否紧急？",
          a: "若水已接触到电气设备、天花下坠，或有人居住的房间上方瓦片移位，请按紧急情况处理。",
        },
        {
          q: "你们做排屋和公寓吗？",
          a: "我们直接处理排屋屋顶。公寓的屋顶通常由管理处负责——我们协助室内天花和水损修复。",
        },
      ],
    },
  },

  // ── window-repair ──────────────────────────────────────────────────────
  "window-repair": {
    en: {
      emergencies: [
        "A shattered or cracked window pane with glass on the floor",
        "A high-rise window off its track and leaning or swinging",
        "A window broken during forced entry",
        "A pane that has fallen or is about to fall outward",
        "Sharp glass edges exposed in a room with children or pets",
      ],
      immediateSteps: [
        "Keep everyone, especially children and pets, out of the area",
        "Wear shoes and do not walk barefoot near the broken glass",
        "Tape or board the opening only if it is safe to reach — do not lean out",
        "Sweep up loose glass with gloves and dispose of it in thick packaging",
      ],
      whenToCall: [
        "A pane is broken, cracked across the middle, or has fallen out",
        "The window is off its track on an upper floor",
        "You cannot secure the opening before nightfall",
        "The frame or hinges are damaged after forced entry",
      ],
      costNote:
        "Window emergencies are priced on the glass type and thickness, the frame condition, and floor height for access. Temporary boarding is included in the call-out; the replacement glass is quoted and confirmed before ordering.",
      faqs: [
        {
          q: "Can you board up a broken window the same day?",
          a: "Yes. We make the opening safe with temporary boarding in the emergency visit, then measure and order the replacement glass.",
        },
        {
          q: "Is a cracked window an emergency?",
          a: "A crack across the middle of a pane can fail suddenly. If the glass is in a high-traffic area or an upper floor, treat it as urgent and have it secured.",
        },
        {
          q: "Do you replace glass on upper floors?",
          a: "Yes, with the right access equipment and safety controls. Floor height is part of the quote.",
        },
        {
          q: "What glass types do you install?",
          a: "We supply clear, tinted, and tempered (safety) glass to match the existing pane and any condo management requirements.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Cermin tingkap pecah atau retak dengan kaca di lantai",
        "Tingkap tingkat tinggi keluar dari landasan dan condong atau berayun",
        "Tingkap pecah semasa masuk paksa",
        "Kepingan kaca telah jatuh atau hampir jatuh ke luar",
        "Tepi kaca tajam terdedah dalam bilik dengan kanak-kanak atau haiwan",
      ],
      immediateSteps: [
        "Jauhkan semua orang, terutamanya kanak-kanak dan haiwan, dari kawasan itu",
        "Pakai kasut dan jangan berjalan tanpa kasut berhampiran kaca pecah",
        "Tampal atau tutup bukaan hanya jika selamat untuk dicapai — jangan menjenguk keluar",
        "Sapu kaca longgar dengan sarung tangan dan buang dalam pembungkusan tebal",
      ],
      whenToCall: [
        "Kepingan kaca pecah, retak di tengah atau telah jatuh",
        "Tingkap keluar dari landasan di tingkat atas",
        "Anda tidak dapat selamatkan bukaan sebelum malam",
        "Bingkai atau engsel rosak selepas masuk paksa",
      ],
      costNote:
        "Kecemasan tingkap dicaj ikut jenis dan ketebalan kaca, keadaan bingkai dan ketinggian tingkat untuk akses. Penutupan sementara termasuk dalam call-out; kaca gantian diukur, disebut harga dan disahkan sebelum ditempah.",
      faqs: [
        {
          q: "Bolehkah anda tutup tingkap pecah pada hari sama?",
          a: "Ya. Kami selamatkan bukaan dengan penutupan sementara dalam lawatan kecemasan, kemudian ukur dan tempah kaca gantian.",
        },
        {
          q: "Adakah tingkap retak satu kecemasan?",
          a: "Retakan di tengah kepingan boleh pecah secara tiba-tiba. Jika kaca di kawasan laluan tinggi atau tingkat atas, anggap ia segera dan selamatkannya.",
        },
        {
          q: "Adakah anda ganti kaca di tingkat atas?",
          a: "Ya, dengan peralatan akses dan kawalan keselamatan yang betul. Ketinggian tingkat termasuk dalam sebut harga.",
        },
        {
          q: "Jenis kaca apa yang anda pasang?",
          a: "Kami bekalkan kaca jernih, berwarna dan tempered (keselamatan) mengikut kaca sedia ada dan keperluan pengurusan kondo.",
        },
      ],
    },
    zh: {
      emergencies: [
        "窗户玻璃破碎或开裂，玻璃散落在地",
        "高层窗户脱轨、倾斜或晃动",
        "窗户因强行进入而被打破",
        "玻璃已掉落或即将向外掉落",
        "有儿童或宠物的房间内露出锋利的玻璃边缘",
      ],
      immediateSteps: [
        "让所有人（尤其是儿童和宠物）远离该区域",
        "穿鞋，不要在碎玻璃附近赤脚行走",
        "仅在安全可及时用胶带或木板封住开口——不要探身向外",
        "戴手套清扫碎玻璃，并用厚包装妥善丢弃",
      ],
      whenToCall: [
        "玻璃破碎、中部开裂或已掉落",
        "楼上窗户脱轨",
        "天黑前无法封住开口",
        "强行进入后窗框或铰链损坏",
      ],
      costNote:
        "窗户紧急维修按玻璃类型和厚度、窗框状况及楼层高度计费。紧急上门包含临时封板；更换玻璃在测量后报价并确认再下单。",
      faqs: [
        {
          q: "你们能当天封住破碎的窗户吗？",
          a: "可以。紧急上门时我们会用临时封板确保安全，然后测量并订购更换玻璃。",
        },
        {
          q: "窗户开裂算紧急吗？",
          a: "玻璃中部开裂可能突然碎裂。若玻璃位于人流量大或楼层较高的区域，请视为紧急并尽快处理。",
        },
        {
          q: "你们更换高层玻璃吗？",
          a: "可以，会配备合适的登高设备和安全措施。楼层高度计入报价。",
        },
        {
          q: "你们安装哪些类型的玻璃？",
          a: "我们供应透明、有色和钢化（安全）玻璃，以匹配现有玻璃及公寓管理要求。",
        },
      ],
    },
  },

  // ── door ───────────────────────────────────────────────────────────────
  door: {
    en: {
      emergencies: [
        "An external door that will not close or lock after a break-in",
        "A jammed lock or latch leaving the property open at night",
        "A hinge pulled out of the frame, leaving the door unstable",
        "A door off its hinges blocking or exposing an entrance",
        "A glass door panel cracked across its width",
      ],
      immediateSteps: [
        "Secure the opening with a temporary wedge, furniture, or a padlock hasp if available",
        "Do not leave the property unattended while the door is open",
        "Keep children and pets away from an unstable door",
        "Photograph the damage for insurance and for our quote",
      ],
      whenToCall: [
        "You cannot lock or barricade the door and night is approaching",
        "A hinge or the strike plate has pulled out of the frame",
        "The door is jammed shut or jammed open in a fire-route position",
        "The door was damaged by forced entry or an attempted break-in",
      ],
      costNote:
        "Door emergencies are priced on the repair (re-hang, hinge replacement, lock replacement) and the door type. We always make the opening secure first, then quote any permanent repair or replacement before doing it.",
      faqs: [
        {
          q: "Can you make my door secure tonight?",
          a: "Yes. We prioritise making the entrance lockable and secure in the emergency visit, then schedule any cosmetic or full replacement work separately.",
        },
        {
          q: "Do you replace just the lock or the whole door?",
          a: "Usually just the damaged part — hinges, strike plate, lock, or panel. We only propose a full door replacement when the door itself is beyond repair.",
        },
        {
          q: "My door was kicked in — what should I do first?",
          a: "Secure the opening, document the damage, and if it was a crime, report it to the police before repairs. We can board and re-secure the door immediately.",
        },
        {
          q: "Do you work with condo fire-rated doors?",
          a: "Yes. We respect management fire-safety requirements and use approved hardware for fire-rated door sets.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Pintu luar tidak boleh ditutup atau dikunci selepas pecah masuk",
        "Mangga atau selak tersekat menyebabkan hartanah terbuka pada waktu malam",
        "Engsel tercabut dari bingkai, menjadikan pintu tidak stabil",
        "Pintu tercabut dari engsel menghalang atau mendedahkan laluan masuk",
        "Panel pintu kaca retak merentasi lebarnya",
      ],
      immediateSteps: [
        "Selamatkan bukaan dengan baji sementara, perabot atau mangga padlock jika ada",
        "Jangan tinggalkan hartanah tanpa pengawasan ketika pintu terbuka",
        "Jauhkan kanak-kanak dan haiwan dari pintu yang tidak stabil",
        "Ambil gambar kerosakan untuk insurans dan sebut harga kami",
      ],
      whenToCall: [
        "Anda tidak dapat kunci atau halang pintu dan malam semakin hampir",
        "Engsel atau strike plate tercabut dari bingkai",
        "Pintu tersekat tertutup atau terbuka pada kedudukan laluan api",
        "Pintu rosak akibat masuk paksa atau cubaan pecah masuk",
      ],
      costNote:
        "Kecemasan pintu dicaj ikut pembaikan (gantung semula, ganti engsel, ganti kunci) dan jenis pintu. Kami sentiasa selamatkan bukaan dahulu, kemudian sebut harga pembaikan kekal atau penggantian sebelum melakukannya.",
      faqs: [
        {
          q: "Bolehkah anda selamatkan pintu saya malam ini?",
          a: "Ya. Kami utamakan menjadikan pintu boleh dikunci dan selamat dalam lawatan kecemasan, kemudian jadualkan kerja kosmetik atau penggantian penuh secara berasingan.",
        },
        {
          q: "Anda ganti kunci sahaja atau seluruh pintu?",
          a: "Biasanya hanya bahagian yang rosak — engsel, strike plate, kunci atau panel. Kami hanya cadangkan penggantian penuh jika pintu itu sendiri tidak dapat dibaiki.",
        },
        {
          q: "Pintu saya ditendang masuk — apa perlu saya buat dahulu?",
          a: "Selamatkan bukaan, dokumentasikan kerosakan, dan jika ia jenayah, laporkan kepada polis sebelum pembaikan. Kami boleh tutup dan selamatkan semula pintu dengan segera.",
        },
        {
          q: "Adakah anda kerja dengan pintu tahan api kondo?",
          a: "Ya. Kami patuhi keperluan keselamatan kebakaran pengurusan dan gunakan perkakasan yang diluluskan untuk set pintu tahan api.",
        },
      ],
    },
    zh: {
      emergencies: [
        "遭入室后外门无法关闭或上锁",
        "锁或门闩卡住，房屋夜间无法关闭",
        "铰链从门框拔出，门不稳",
        "门脱出铰链，堵住或暴露入口",
        "玻璃门板沿宽度方向开裂",
      ],
      immediateSteps: [
        "如有条件，用临时楔子、家具或挂锁扣环封住开口",
        "门开着时不要无人看管房屋",
        "让儿童和宠物远离不稳的门",
        "拍摄损坏情况，供保险和报价使用",
      ],
      whenToCall: [
        "无法上锁或封堵门口，且天快黑了",
        "铰链或锁扣板从门框拔出",
        "门卡死，处于堵塞消防通道的位置",
        "门因强行进入或入室未遂而损坏",
      ],
      costNote:
        "门类紧急维修按修理项目（重新挂门、换铰链、换锁）和门型计费。我们会先确保入口安全，再对永久修复或更换进行报价。",
      faqs: [
        {
          q: "今晚能让我的门恢复安全吗？",
          a: "可以。紧急上门时我们会优先让入口可上锁、恢复安全，之后另行安排外观或整体更换。",
        },
        {
          q: "只换锁还是整扇门？",
          a: "通常只更换损坏的部件——铰链、锁扣板、锁或门板。只有门本身无法修复时才建议整门更换。",
        },
        {
          q: "我的门被踹开了，先做什么？",
          a: "先封住开口、记录损坏情况，若涉及犯罪请先报警再维修。我们可以立即封板并重新加固房门。",
        },
        {
          q: "你们处理公寓的防火门吗？",
          a: "处理。我们会遵守管理处的消防安全要求，并使用经认可的防火门五金件。",
        },
      ],
    },
  },

  // ── autogate ───────────────────────────────────────────────────────────
  autogate: {
    en: {
      emergencies: [
        "The gate is stuck open and the property cannot be secured",
        "A gate that has fallen off its track or runner",
        "A motor smoking, sparking, or making grinding noises",
        "The gate closing on a vehicle or reversing unexpectedly",
        "A broken hinge or wheel leaving the gate unstable",
      ],
      immediateSteps: [
        "Use the manual release to disengage the motor, then secure the gate",
        "Switch off the gate power if the motor is smoking or sparking",
        "Keep children and pets away from a gate that moves on its own",
        "Photograph the gate position and any damage",
      ],
      whenToCall: [
        "The gate will not move or will not stay closed",
        "The motor smells burnt, sparks, or the gate moves erratically",
        "A wheel, hinge, or track is broken and the gate is leaning",
        "The gate reversed or closed unexpectedly on a vehicle",
      ],
      costNote:
        "Autogate emergencies are priced on the fault (motor, board, limit switch, hinge, or track), the gate size, and the parts needed. The call-out covers making the gate safe; the repair or part replacement is confirmed before work.",
      faqs: [
        {
          q: "Can I secure the gate myself before you arrive?",
          a: "Most motors have a manual release key. Disengage it, slide the gate shut, and secure it with a lock if possible. Leave the motor off if it is smoking or sparking.",
        },
        {
          q: "Why is my autogate closing on its own?",
          a: "Usually a failing limit switch, a misaligned sensor, or a control-board fault. Treat it as urgent — keep people and vehicles clear until it is repaired.",
        },
        {
          q: "Do you repair the motor or replace it?",
          a: "We diagnose first. Many faults are repairable (board, limit switch, wiring); we replace the motor only when it is beyond economical repair, and confirm the price first.",
        },
        {
          q: "Can the gate be opened manually while it is broken?",
          a: "Yes. The manual release disengages the motor so the gate can be slid or swung by hand until the repair is done.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Pagar tersekat terbuka dan hartanah tidak dapat diselamatkan",
        "Pagar jatuh dari landasan atau relnya",
        "Motor berasap, berpercikan atau berbunyi mengisar",
        "Pagar menutup ke arah kenderaan atau berundur tanpa diduga",
        "Engsel atau roda patah menyebabkan pagar tidak stabil",
      ],
      immediateSteps: [
        "Gunakan pelepas manual untuk memutuskan motor, kemudian selamatkan pagar",
        "Matikan kuasa pagar jika motor berasap atau berpercikan",
        "Jauhkan kanak-kanak dan haiwan dari pagar yang bergerak sendiri",
        "Ambil gambar kedudukan pagar dan sebarang kerosakan",
      ],
      whenToCall: [
        "Pagar tidak bergerak atau tidak boleh kekal tertutup",
        "Motor berbau terbakar, berpercikan atau pagar bergerak tidak menentu",
        "Roda, engsel atau landasan patah dan pagar condong",
        "Pagar berundur atau menutup tanpa diduga ke atas kenderaan",
      ],
      costNote:
        "Kecemasan autogate dicaj ikut kerosakan (motor, papan, suis had, engsel atau landasan), saiz pagar dan alat ganti. Call-out meliputi pengamanan pagar; pembaikan atau penggantian alat ganti disahkan sebelum kerja.",
      faqs: [
        {
          q: "Bolehkah saya selamatkan pagar sendiri sebelum anda tiba?",
          a: "Kebanyakan motor ada kunci pelepas manual. Putuskan motor, luncurkan pagar tutup dan kunci jika boleh. Biarkan motor mati jika ia berasap atau berpercikan.",
        },
        {
          q: "Kenapa autogate saya menutup sendiri?",
          a: "Biasanya suis had rosak, sensor tidak sejajar atau papan kawalan bermasalah. Anggap ia segera — jauhkan orang dan kenderaan sehingga dibaiki.",
        },
        {
          q: "Anda baiki motor atau gantikannya?",
          a: "Kami diagnosis dahulu. Banyak kerosakan boleh dibaiki (papan, suis had, pendawaian); kami ganti motor hanya jika tidak ekonomi untuk dibaiki, dan sahkan harga dahulu.",
        },
        {
          q: "Bolehkah pagar dibuka manual semasa rosak?",
          a: "Ya. Pelepas manual memutuskan motor supaya pagar boleh diluncur atau dihayun dengan tangan sehingga pembaikan selesai.",
        },
      ],
    },
    zh: {
      emergencies: [
        "大门卡在打开状态，房屋无法上锁",
        "大门从轨道或滑轮上脱落",
        "电机冒烟、打火或发出摩擦声",
        "大门朝车辆关闭或意外反向",
        "铰链或轮子损坏，大门不稳",
      ],
      immediateSteps: [
        "用手动释放装置断开电机，然后固定大门",
        "若电机冒烟或打火，请关闭大门电源",
        "让儿童和宠物远离会自行移动的大门",
        "拍摄大门位置和损坏情况",
      ],
      whenToCall: [
        "大门无法移动或无法保持关闭",
        "电机有烧焦味、打火或大门运行异常",
        "轮子、铰链或轨道损坏，大门倾斜",
        "大门意外反向或朝车辆关闭",
      ],
      costNote:
        "自动门紧急维修按故障（电机、控制板、限位开关、铰链或轨道）、大门尺寸及零件计费。上门包含让大门恢复安全；维修或更换零件在开工前确认。",
      faqs: [
        {
          q: "你们到之前我能自己固定大门吗？",
          a: "大多数电机有手动释放钥匙。断开电机、把门推回并尽量上锁。若电机冒烟或打火，请保持断电。",
        },
        {
          q: "为什么我的自动门会自己关闭？",
          a: "通常是限位开关失灵、传感器错位或控制板故障。请视为紧急——维修前让人员和车辆远离。",
        },
        {
          q: "你们修电机还是换电机？",
          a: "我们先诊断。许多故障可修复（控制板、限位开关、线路）；只有维修不划算时才更换电机，且事先确认价格。",
        },
        {
          q: "大门坏了能手动打开吗？",
          a: "可以。手动释放装置可断开电机，以便在维修完成前用手推拉大门。",
        },
      ],
    },
  },

  // ── cctv ───────────────────────────────────────────────────────────────
  cctv: {
    en: {
      emergencies: [
        "Cameras offline immediately after a break-in or incident",
        "The recorder failing during an event you need to review",
        "A camera that has been knocked out, covered, or vandalised",
        "The system losing power and footage with the property unmonitored",
        "A critical blind spot opened up by a moved or fallen camera",
      ],
      immediateSteps: [
        "Note the exact time window of the incident",
        "Do not keep power-cycling the recorder if it is failing — this can corrupt the footage",
        "If a camera was knocked out, leave it as-is until reviewed",
        "Check the recorder's power and network status without overwriting anything",
      ],
      whenToCall: [
        "Footage is needed for a police report or insurance claim",
        "The recorder is failing and you risk losing stored footage",
        "Cameras covering entrances are offline after an incident",
        "The system will not power on or keeps restarting",
      ],
      costNote:
        "CCTV emergencies are priced on diagnosis, the failed part (camera, recorder, power supply, or cabling), and whether footage recovery is needed. We prioritise preserving existing footage before replacing any hardware.",
      faqs: [
        {
          q: "Can you recover footage from a failed recorder?",
          a: "Often yes, depending on the failure and the storage. We work to preserve the drive first, then recover what is retrievable before replacing any hardware.",
        },
        {
          q: "Should I unplug a failing CCTV system?",
          a: "Power it down once if it is unstable, but avoid repeated power-cycling. Let us assess it before you keep restarting it, as this can corrupt stored footage.",
        },
        {
          q: "Can you make the system record again tonight?",
          a: "We can usually restore recording the same day by replacing the failed part, subject to stock. The emergency visit at minimum secures the property's monitoring gap.",
        },
        {
          q: "Do you provide footage for police reports?",
          a: "We can export and hand over footage for official reports. We follow data-protection requirements and only release footage to the authorised owner.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Kamera mati sejurus selepas pecah masuk atau insiden",
        "Perakam gagal semasa kejadian yang perlu anda semak",
        "Kamera dijatuhkan, ditutup atau dirosakkan",
        "Sistem kehilangan kuasa dan rakaman ketika hartanah tidak dipantau",
        "Titik buta kritikal terbuka kerana kamera beralih atau jatuh",
      ],
      immediateSteps: [
        "Catat julat masa tepat kejadian",
        "Jangan terus kitar kuasa perakam jika ia gagal — ini boleh merosakkan rakaman",
        "Jika kamera dijatuhkan, biarkan ia seperti asal sehingga disemak",
        "Periksa kuasa dan status rangkaian perakam tanpa menimpa apa-apa",
      ],
      whenToCall: [
        "Rakaman diperlukan untuk laporan polis atau tuntutan insurans",
        "Perakam gagal dan anda berisiko kehilangan rakaman tersimpan",
        "Kamera di pintu masuk mati selepas insiden",
        "Sistem tidak dapat dihidupkan atau terus restart",
      ],
      costNote:
        "Kecemasan CCTV dicaj ikut diagnosis, bahagian rosak (kamera, perakam, bekalan kuasa atau kabel) dan sama ada pemulihan rakaman diperlukan. Kami utamakan memelihara rakaman sedia ada sebelum mengganti mana-mana perkakasan.",
      faqs: [
        {
          q: "Bolehkah anda pulihkan rakaman dari perakam yang gagal?",
          a: "Selalunya ya, bergantung pada kegagalan dan storan. Kami utamakan memelihara cakera dahulu, kemudian pulihkan apa yang boleh sebelum mengganti perkakasan.",
        },
        {
          q: "Perlukah saya cabut sistem CCTV yang gagal?",
          a: "Matikan sekali jika tidak stabil, tetapi elakkan kitar kuasa berulang. Biar kami nilai dahulu sebelum anda terus restart, kerana ini boleh merosakkan rakaman tersimpan.",
        },
        {
          q: "Bolehkah anda hidupkan semula rakaman malam ini?",
          a: "Kami biasanya boleh pulihkan rakaman pada hari sama dengan mengganti bahagian yang rosak, tertakluk kepada stok. Lawatan kecemasan sekurang-kurangnya menutup jurang pemantauan hartanah.",
        },
        {
          q: "Adakah anda sediakan rakaman untuk laporan polis?",
          a: "Kami boleh eksport dan serahkan rakaman untuk laporan rasmi. Kami patuhi keperluan perlindungan data dan hanya lepaskan rakaman kepada pemilik yang sah.",
        },
      ],
    },
    zh: {
      emergencies: [
        "入室或事件发生后摄像头立即离线",
        "需要回看事件时录像机发生故障",
        "摄像头被击落、遮挡或破坏",
        "系统断电、失去录像，房屋处于无监控状态",
        "摄像头移位或掉落造成关键盲区",
      ],
      immediateSteps: [
        "记录事件发生的准确时间段",
        "录像机故障时不要反复开关电源——这可能损坏录像",
        "若摄像头被击落，在检查前保持原样",
        "在不覆盖任何内容的前提下检查录像机的电源和网络状态",
      ],
      whenToCall: [
        "需要录像用于报警或保险理赔",
        "录像机故障，可能丢失已存储的录像",
        "事件发生后出入口摄像头离线",
        "系统无法开机或不断重启",
      ],
      costNote:
        "监控紧急服务按诊断、故障部件（摄像头、录像机、电源或线缆）以及是否需要恢复录像计费。我们会优先保全现有录像，再更换硬件。",
      faqs: [
        {
          q: "你们能从故障录像机恢复录像吗？",
          a: "通常可以，取决于故障情况和存储。我们会先保护硬盘，尽量恢复可读取的内容，再更换硬件。",
        },
        {
          q: "故障的监控系统该断电吗？",
          a: "如果不稳定，可关闭一次，但避免反复开关电源。请先让我们评估，反复重启可能损坏已存储的录像。",
        },
        {
          q: "今晚能恢复录像吗？",
          a: "通常当天即可通过更换故障部件恢复录像，视库存而定。紧急上门至少会先补上监控缺口。",
        },
        {
          q: "你们能提供报警用的录像吗？",
          a: "可以导出并移交录像用于正式报案。我们遵守数据保护要求，只向经授权的业主提供录像。",
        },
      ],
    },
  },

  // ── waterproofing ──────────────────────────────────────────────────────
  waterproofing: {
    en: {
      emergencies: [
        "Active water ingress through a wall, ceiling, or slab during rain",
        "A bathroom leak flooding the room or the unit below",
        "A balcony or planter leak running down an internal wall",
        "Water pooling at a window, door, or pipe penetration",
        "Damp spreading fast with a mould smell or electrical risk",
      ],
      immediateSteps: [
        "Stop the water source if it is a pipe, tap, or overflowing drain",
        "Move electronics and furniture out of the wet area",
        "Switch off power to any wet sockets or switches",
        "Photograph the wet area and the likely source for diagnosis",
      ],
      whenToCall: [
        "Water is entering faster than you can contain it",
        "The leak is between floors or behind tiles and needs tracing",
        "Water is near electrical fittings or the ceiling is bulging",
        "The same area leaks every heavy rain",
      ],
      costNote:
        "Emergency waterproofing is priced on tracing the source, access, and the repair method. In an active leak we contain and make safe first, then quote the permanent waterproofing repair once the source is confirmed.",
      faqs: [
        {
          q: "Can you stop a leak the same day?",
          a: "We contain the leak and stop active ingress the same day where possible. Permanent waterproofing is applied once the surface is dry enough to bond correctly.",
        },
        {
          q: "Is waterproofing a leak better than just patching it?",
          a: "For recurring or hidden leaks, yes. Tracing and sealing the actual source stops the problem; painting over it only hides the symptom.",
        },
        {
          q: "Do you deal with condo and JMB rules?",
          a: "Yes. For units between floors we coordinate with the management office and follow the condo's water-damage and access procedures.",
        },
        {
          q: "How do you find a hidden leak?",
          a: "We use moisture readings, water testing of wet areas, and pressure or dye checks where suitable to confirm the source before any hacking or repair.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Air aktif masuk melalui dinding, siling atau papak semasa hujan",
        "Kebocoran bilik mandi membanjiri bilik atau unit di bawah",
        "Kebocoran balkoni atau planter mengalir turun dinding dalaman",
        "Air bertakung di tingkap, pintu atau penembusan paip",
        "Lembap merebak cepat dengan bau kulat atau risiko elektrik",
      ],
      immediateSteps: [
        "Hentikan punca air jika ia paip, pili atau longkang melimpah",
        "Alihkan elektronik dan perabot dari kawasan basah",
        "Matikan kuasa ke soket atau suis yang basah",
        "Ambil gambar kawasan basah dan punca yang mungkin untuk diagnosis",
      ],
      whenToCall: [
        "Air masuk lebih cepat daripada yang dapat anda tampung",
        "Kebocoran di antara tingkat atau belakang jubin dan perlu dikesan",
        "Air berhampiran lekapan elektrik atau siling membonjol",
        "Kawasan sama bocor setiap hujan lebat",
      ],
      costNote:
        "Kalis air kecemasan dicaj ikut pengesanan punca, akses dan kaedah pembaikan. Dalam kebocoran aktif kami tampung dan selamatkan dahulu, kemudian sebut harga pembaikan kalis air kekal selepas punca disahkan.",
      faqs: [
        {
          q: "Bolehkah anda hentikan kebocoran pada hari sama?",
          a: "Kami tampung kebocoran dan hentikan kemasukan aktif pada hari sama jika boleh. Kalis air kekal disapu selepas permukaan cukup kering untuk melekat dengan betul.",
        },
        {
          q: "Adakah kalis air lebih baik daripada menampal sahaja?",
          a: "Untuk kebocoran berulang atau tersembunyi, ya. Mengesan dan menutup punca sebenar menyelesaikan masalah; mengecat di atasnya hanya menyembunyikan simptom.",
        },
        {
          q: "Adakah anda urus peraturan kondo dan JMB?",
          a: "Ya. Untuk unit di antara tingkat kami selaras dengan pejabat pengurusan dan ikut prosedur kerosakan air serta akses kondo.",
        },
        {
          q: "Bagaimana anda kesan kebocoran tersembunyi?",
          a: "Kami guna bacaan kelembapan, ujian air kawasan basah dan ujian tekanan atau pewarna jika sesuai untuk mengesahkan punca sebelum sebarang pemecahan atau pembaikan.",
        },
      ],
    },
    zh: {
      emergencies: [
        "下雨时水从墙、天花或楼板渗入",
        "浴室漏水淹到房间或楼下单位",
        "阳台或花槽漏水沿内墙流下",
        "水在窗户、门口或管道穿墙处积聚",
        "潮湿迅速扩散，伴有霉味或触电风险",
      ],
      immediateSteps: [
        "若源头是水管、水龙头或溢出的排水口，请先止水",
        "把电器和家具移出潮湿区域",
        "关闭任何受潮插座或开关的电源",
        "拍摄潮湿区域和可能的源头以便诊断",
      ],
      whenToCall: [
        "进水速度快于你能接住的速度",
        "漏水在楼层之间或瓷砖后方，需要定位",
        "水接近电气设备或天花鼓起",
        "每次大雨同一位置都漏水",
      ],
      costNote:
        "紧急防水按查漏、施工条件和修复方式计费。遇到活动漏水，我们会先封堵并确保安全，确认源头后再报价永久防水修复。",
      faqs: [
        {
          q: "你们能当天止住漏水吗？",
          a: "在可能的情况下，我们当天封堵并止住活动进水。永久防水需待表面足够干燥、能正确粘合后再施工。",
        },
        {
          q: "防水处理比单纯补漏更好吗？",
          a: "对反复或隐藏的漏水，是的。定位并封住真正源头才能解决问题；直接刷漆只是掩盖症状。",
        },
        {
          q: "你们处理公寓和JMB的规定吗？",
          a: "处理。对于楼层之间的单位，我们会与管理处协调，并遵守公寓的水损和施工进入流程。",
        },
        {
          q: "你们如何找到隐藏的漏水点？",
          a: "我们用湿度读数、湿区淋水测试，以及合适的压力或染色测试确认源头，再进行开凿或修复。",
        },
      ],
    },
  },

  // ── ceiling ────────────────────────────────────────────────────────────
  ceiling: {
    en: {
      emergencies: [
        "A sagging or bulging plasterboard section that could fall",
        "A water-filled blister in the ceiling after a leak",
        "Part of the ceiling that has already collapsed or is cracking open",
        "A ceiling fan or light fitting pulling loose from a wet board",
        "Water running down from the ceiling onto electrical fittings",
      ],
      immediateSteps: [
        "Clear the area below and keep everyone out",
        "Switch off the affected ceiling light or fan at the breaker",
        "Do not poke or drain a water-filled bulge from below",
        "Place a bucket and photograph the bulge before it changes",
      ],
      whenToCall: [
        "The ceiling is sagging, cracking, or has fallen in part",
        "A water bulge is growing or starting to drip",
        "A light or fan is loose because the board is wet",
        "You can hear the board flexing or see the joints opening",
      ],
      costNote:
        "Ceiling emergencies are priced on the board area, the water source, and whether the board is replaced or re-secured. We remove the danger first, stop the water source, and then quote the permanent repair.",
      faqs: [
        {
          q: "Should I drain a bulging ceiling myself?",
          a: "No. A water-filled ceiling is heavy and can collapse suddenly. Keep the area clear and let us drain and remove it safely.",
        },
        {
          q: "Can a sagging ceiling be repaired or must it be replaced?",
          a: "A dry, sound board can sometimes be re-secured and skimmed. A wet or collapsed board is replaced with moisture-resistant plasterboard.",
        },
        {
          q: "Is a sagging ceiling always a leak?",
          a: "Usually water is involved, but it can also be failed fixings or an overloaded board. We inspect the cause before repairing.",
        },
        {
          q: "Do you fix the leak and the ceiling together?",
          a: "Yes. We stop the water source first, then repair or replace the ceiling in one coordinated job so the problem does not return.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Bahagian papan plaster kendur atau membonjol yang boleh jatuh",
        "Gelembung berisi air di siling selepas kebocoran",
        "Sebahagian siling sudah runtuh atau retak terbuka",
        "Kipas siling atau lampu longgar dari papan basah",
        "Air mengalir turun dari siling ke lekapan elektrik",
      ],
      immediateSteps: [
        "Kosongkan kawasan bawah dan jauhkan semua orang",
        "Matikan lampu atau kipas siling terjejas di pemutus",
        "Jangan cucuk atau salirkan bonjolan berisi air dari bawah",
        "Letak baldi dan ambil gambar bonjolan sebelum ia berubah",
      ],
      whenToCall: [
        "Siling kendur, retak atau sebahagian telah jatuh",
        "Bonjolan air membesar atau mula menitis",
        "Lampu atau kipas longgar kerana papan basah",
        "Anda dengar papan melentur atau nampak sambungan terbuka",
      ],
      costNote:
        "Kecemasan siling dicaj ikut keluasan papan, punca air dan sama ada papan diganti atau diketatkan semula. Kami buang bahaya dahulu, hentikan punca air, kemudian sebut harga pembaikan kekal.",
      faqs: [
        {
          q: "Perlukah saya salirkan sendiri siling yang membonjol?",
          a: "Tidak. Siling berisi air berat dan boleh runtuh secara tiba-tiba. Kosongkan kawasan dan biar kami salirkan serta buang dengan selamat.",
        },
        {
          q: "Bolehkah siling kendur dibaiki atau mesti diganti?",
          a: "Papan yang kering dan kukuh kadang-kadang boleh diketatkan semula dan disapu skim. Papan basah atau runtuh diganti dengan papan plaster tahan lembapan.",
        },
        {
          q: "Adakah siling kendur selalu kerana kebocoran?",
          a: "Biasanya air terlibat, tetapi boleh juga kerana pemasangan gagal atau papan terlebih beban. Kami periksa punca sebelum membaiki.",
        },
        {
          q: "Adakah anda baiki kebocoran dan siling sekali gus?",
          a: "Ya. Kami hentikan punca air dahulu, kemudian baiki atau ganti siling dalam satu kerja terselaras supaya masalah tidak berulang.",
        },
      ],
    },
    zh: {
      emergencies: [
        "石膏板下坠或鼓起，可能掉落",
        "漏水后天花内积水鼓包",
        "天花部分已塌落或开裂",
        "吊扇或灯具从受潮的板材上松动",
        "水从天花流到电气设备上",
      ],
      immediateSteps: [
        "清空下方区域，让所有人离开",
        "在配电箱关闭受影响的天花灯或风扇",
        "不要从下方戳破或放掉积水的鼓包",
        "放好水桶，并在鼓包变化前拍照",
      ],
      whenToCall: [
        "天花下坠、开裂或部分已掉落",
        "积水鼓包变大或开始滴水",
        "因板材受潮，灯具或风扇松动",
        "能听到板材弯曲声或看到接缝开裂",
      ],
      costNote:
        "天花紧急维修按板材面积、水源以及更换或重新固定板材计费。我们会先排除危险、止住水源，再报价永久修复。",
      faqs: [
        {
          q: "我应该自己放掉鼓包的水吗？",
          a: "不要。积水的天花很重，可能突然坍塌。清空区域，让我们安全地放水和拆除。",
        },
        {
          q: "下坠的天花能修还是必须换？",
          a: "干燥且完好的板材有时可重新固定并批灰。受潮或塌落的板材则更换为防潮石膏板。",
        },
        {
          q: "天花下坠一定是漏水吗？",
          a: "通常与水有关，但也可能是固定件失效或板材超载。我们会在维修前检查原因。",
        },
        {
          q: "你们会一起处理漏水和天花吗？",
          a: "会。我们先止住水源，再在同一项协调作业中修复或更换天花，避免问题复发。",
        },
      ],
    },
  },

  // ── glass-aluminium ────────────────────────────────────────────────────
  "glass-aluminium": {
    en: {
      emergencies: [
        "A shattered shower screen with glass across the bathroom",
        "A cracked glass door or partition that could fail suddenly",
        "A broken window pane leaving sharp edges exposed",
        "A glass railing panel that is cracked or has fallen out",
        "An aluminium frame pulled loose with glass swinging or leaning",
      ],
      immediateSteps: [
        "Keep everyone out of the area and wear shoes",
        "Do not walk barefoot or touch the broken glass",
        "Cordon off the room and photograph the damage",
        "If a pane is leaning, do not try to catch it — clear the fall zone",
      ],
      whenToCall: [
        "Glass has shattered or a pane is cracked across its width",
        "A shower screen or partition is leaning or off its track",
        "A glass railing panel is damaged on a balcony or stair",
        "The frame is pulling away and the glass is no longer secure",
      ],
      costNote:
        "Glass and aluminium emergencies are priced on the glass type (tempered vs laminated), size, and frame repair. The call-out covers making the area safe and taking measurements; the replacement glass is quoted before ordering.",
      faqs: [
        {
          q: "Can you make a shattered shower screen safe today?",
          a: "Yes. We clear the broken glass, remove the remaining panel safely, and measure for a replacement — usually the same day for the make-safe.",
        },
        {
          q: "Is tempered glass safer when it breaks?",
          a: "Tempered glass breaks into small, less sharp pieces, which is why it is required for shower screens and doors. Laminated glass holds together in a web when cracked.",
        },
        {
          q: "Do you match the existing glass tint and thickness?",
          a: "Yes. We measure thickness and match tint and type (clear, tinted, tempered, laminated) to the existing panel.",
        },
        {
          q: "Can you repair the aluminium frame too?",
          a: "Yes. We re-secure or replace damaged frame sections, rollers, and hinges so the new glass sits safely.",
        },
      ],
    },
    ms: {
      emergencies: [
        "Cermin pancuran pecah dengan kaca berselerak di bilik mandi",
        "Pintu kaca atau partisi retak yang boleh gagal secara tiba-tiba",
        "Kaca tingkap pecah dengan tepi tajam terdedah",
        "Panel pagar kaca retak atau telah terjatuh",
        "Bingkai aluminium tertanggal dengan kaca berayun atau condong",
      ],
      immediateSteps: [
        "Jauhkan semua orang dari kawasan dan pakai kasut",
        "Jangan berjalan tanpa kasut atau sentuh kaca pecah",
        "Sekat bilik dan ambil gambar kerosakan",
        "Jika kepingan condong, jangan cuba menahannya — kosongkan zon jatuh",
      ],
      whenToCall: [
        "Kaca pecah atau kepingan retak merentasi lebarnya",
        "Cermin pancuran atau partisi condong atau keluar landasan",
        "Panel pagar kaca rosak di balkoni atau tangga",
        "Bingkai tertanggal dan kaca tidak lagi selamat",
      ],
      costNote:
        "Kecemasan kaca dan aluminium dicaj ikut jenis kaca (tempered vs laminated), saiz dan pembaikan bingkai. Call-out meliputi pengamanan kawasan dan ukuran; kaca gantian disebut harga sebelum ditempah.",
      faqs: [
        {
          q: "Bolehkah anda selamatkan cermin pancuran pecah hari ini?",
          a: "Ya. Kami bersihkan kaca pecah, buang panel yang tinggal dengan selamat dan ukur untuk penggantian — biasanya pada hari sama untuk pengamanan.",
        },
        {
          q: "Adakah kaca tempered lebih selamat apabila pecah?",
          a: "Kaca tempered pecah menjadi kepingan kecil yang kurang tajam, sebab itu ia diwajibkan untuk cermin pancuran dan pintu. Kaca laminated kekal melekat seperti sarang apabila retak.",
        },
        {
          q: "Adakah anda padankan warna dan ketebalan kaca sedia ada?",
          a: "Ya. Kami ukur ketebalan dan padankan warna serta jenis (jernih, berwarna, tempered, laminated) dengan panel sedia ada.",
        },
        {
          q: "Bolehkah anda baiki bingkai aluminium juga?",
          a: "Ya. Kami ketatkan semula atau ganti bahagian bingkai, roda dan engsel yang rosak supaya kaca baharu duduk dengan selamat.",
        },
      ],
    },
    zh: {
      emergencies: [
        "淋浴屏破碎，玻璃散落在浴室",
        "玻璃门或隔断开裂，可能突然破碎",
        "窗户玻璃破裂，露出锋利边缘",
        "玻璃护栏板开裂或已脱落",
        "铝合金框松动，玻璃晃动或倾斜",
      ],
      immediateSteps: [
        "让所有人离开该区域并穿鞋",
        "不要赤脚行走或触碰碎玻璃",
        "封锁房间并拍摄损坏情况",
        "若玻璃倾斜，不要试图接住——清空掉落区域",
      ],
      whenToCall: [
        "玻璃破碎或板面沿宽度方向开裂",
        "淋浴屏或隔断倾斜或脱轨",
        "阳台或楼梯的玻璃护栏板损坏",
        "框架脱落，玻璃不再固定",
      ],
      costNote:
        "玻璃与铝合金紧急维修按玻璃类型（钢化或夹胶）、尺寸和框架修复计费。上门包含确保安全和测量；更换玻璃在订购前报价。",
      faqs: [
        {
          q: "今天能让破碎的淋浴屏恢复安全吗？",
          a: "可以。我们会清理碎玻璃、安全拆除剩余面板并测量尺寸——抢险通常当天完成。",
        },
        {
          q: "钢化玻璃破碎时更安全吗？",
          a: "钢化玻璃破碎时裂成较小、较钝的碎片，因此淋浴屏和门必须使用。夹胶玻璃开裂时会保持网状粘连。",
        },
        {
          q: "你们能匹配现有玻璃的颜色和厚度吗？",
          a: "能。我们会测量厚度并匹配颜色和类型（透明、有色、钢化、夹胶）。",
        },
        {
          q: "铝合金框也能修吗？",
          a: "能。我们会重新固定或更换损坏的框架、滑轮和铰链，让新玻璃安装牢固。",
        },
      ],
    },
  },
};

/** All service slugs that keep a real emergency page. */
export const EMERGENCY_SERVICE_SLUGS = Object.keys(EMERGENCY_SERVICES);

/** Service slugs whose `/services/<slug>/emergency` page is retired (301). */
export const RETIRED_EMERGENCY_SERVICE_SLUGS = [
  "painting",
  "handyman",
  "house-renovation",
  "ceiling-fan",
  "lighting",
  "tiling",
  "plaster-ceiling",
  "skim-coat",
  "flooring",
  "epoxy-flooring",
  "kitchen-cabinet",
  "carpentry",
  "welding",
  "aircon",
  "kitchen-renovation",
  "bathroom-renovation",
  "awning-installation",
] as const;

export function isEmergencyService(slug: string): boolean {
  return slug in EMERGENCY_SERVICES;
}

/** Localized emergency content for a service, falling back to English. */
export function getEmergencyContent(
  slug: string,
  locale: Locale
): EmergencyContent | undefined {
  const localized = EMERGENCY_SERVICES[slug];
  if (!localized) return undefined;
  return localized[locale] ?? localized.en;
}
