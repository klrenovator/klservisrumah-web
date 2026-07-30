/**
 * AREA BODY i18n — Full native MS + ZH descriptions for all 37 areas
 * 
 * These are the long-form prose descriptions (the main body text on /areas/[slug]).
 * Written at the same quality level as the English originals — natural, locally relevant,
 * and free of machine-translation artifacts.
 * 
 * Pattern follows the proven `content-body-i18n.ts` + `area-i18n-extra.ts` approach.
 */

import type { Locale } from "@/lib/i18n";

export type LocalizedAreaBody = {
  description: string;
};

const AREA_BODY_MS: Record<string, string> = {
  "kuala-lumpur": 
    "KL Servis Rumah menghantar tukang mahir yang disaring latar belakang ke seluruh Wilayah Persekutuan Kuala Lumpur. Sama ada anda tinggal di kondominium mewah di Mont Kiara, Bangsar atau KLCC, atau menguruskan kedai di Cheras, Sentul atau Kepong, kami menyediakan perkhidmatan penyelenggaraan rumah premium. Pasukan teknikal kami pakar dalam mengecat dalaman rumah dengan cat Nippon, pengesanan dan pembaikan kebocoran air tanpa merosakkan, pembaikan siling plaster dengan skim-coating yang lancar, suntikan PU bertekanan tinggi untuk kebocoran bilik air, serta pemasangan TV profesional dan pemasangan perabot. Kami mematuhi peraturan JMB dengan ketat, membersihkan tapak sepenuhnya selepas kerja, dan menjamin harga yang 100% telus sebelum sebarang kerja bermula.",

  "petaling-jaya":
    "KL Servis Rumah menyediakan penambahbaikan dan pembaikan rumah premium di seluruh Petaling Jaya. Daripada banglo kediaman di Seksyen 14 dan SS2 sehingga pangsapuri moden di Kota Damansara, Bandar Utama dan Ara Damansara, juruteknik pelbagai kemahiran kami sentiasa berdekatan dengan anda. Kami pakar dalam mengecat dalaman dan luaran rumah menggunakan salutan Dulux tahan cuaca, membaiki papan siling yang kendur, pemasangan dinding partition untuk pejabat rumah, menyelesaikan masalah tekanan air rendah, pemasangan mangkuk tandas, serta pemasangan perabot IKEA. Semua kerja kami diinsuranskan dan juruteknik kami telah disaring latar belakang untuk keselamatan keluarga anda.",

  "subang-jaya":
    "KL Servis Rumah ialah penyedia penjagaan rumah yang dipercayai di Subang Jaya. Daripada pejabat komersial di Glenmarie dan kedai runcit di SS15 sehingga rumah keluarga di seluruh USJ 1 hingga USJ 21 dan Bandar Sunway, kami menawarkan perkhidmatan mengecat, siling, paip, kalis air dan kerja tangan berkualiti tinggi. Pasukan Subang Jaya kami sangat terlatih dalam memasang TV OLED pada dinding gypsum, memasang pancuran air panas serta-merta, membersihkan sinki dapur yang berminyak, menutup kebocoran bumbung dengan membran bitumen, serta membina partition bilik kalis bunyi yang tahan lama. Kami menjamin tiada harga mengejut — kami periksa, sebut harga, dan hanya meneruskan kerja selepas anda meluluskan.",

  "puchong":
    "Daripada Puchong Jaya dan Bandar Puteri sehingga Puchong Utama dan sempadan Bukit Jalil, KL Servis Rumah menyediakan pembaikan rumah pantas dan mengecat premium. Blok komersial dan rumah teres yang padat di Puchong kerap menghadapi kebocoran paip air, siling kendur dan kegagalan kunci keselamatan. Pasukan tempatan kami menyelesaikan masalah ini dengan cepat: kami menggantikan kunci yang rosak, meratakan pintu yang mengikis, memasang acuan siling hiasan, menggunakan membran kalis air berlapis-lapis pada papak bumbung rata, serta mengendalikan pengecatan semula rumah lengkap. Kami membawa pelbagai alat ganti untuk menyelesaikan kebanyakan pembaikan dalam satu lawatan.",

  "shah-alam":
    "Sebagai ibu negeri Selangor, Shah Alam mempunyai pelbagai jenis hartanah, daripada semi-D besar di Bukit Jelutong dan Kota Kemuning sehingga gudang berbilang tingkat. KL Servis Rumah menyediakan penjagaan pakar untuk hartanah Shah Alam. Perkhidmatan kami termasuk mengecat dinding luaran yang tahan lama untuk menahan matahari dan hujan tropika, pembaikan kebocoran jubin bumbung, partition gypsum untuk ruang belajar, pemasangan mangkuk tandas dan pemanas air, serta pemasangan langsir dan rak. Kami menggunakan laser leveling untuk semua rak dan kabinet bagi memastikan penjajaran mendatar yang sempurna dan kemas.",

  "klang":
    "Hartanah Klang, terutamanya di Port Klang yang pesisir pantai dan Bandar Bukit Tinggi yang padat penduduk, mudah terdedah kepada kelembapan tinggi, kebocoran air dan kakisan udara masin. KL Servis Rumah menyediakan penyelenggaraan khusus di Klang. Kami menawarkan lekapan paip tahan karat stainless steel, sealer dinding anti-karat, membran kalis air bilik mandi, pemulihan papan siling, pemasangan kunci keselamatan, serta pembaikan kerja tangan am. Krew Klang tempatan kami dilengkapi sepenuhnya, tepat masa dan sangat berpengalaman dalam menyelesaikan masalah kelembapan dan pengelupasan struktur batu.",

  "cheras":
    "KL Servis Rumah meliputi seluruh Cheras — daripada kawasan kejiranan teres matang di Taman Connaught dan Alam Damai sehingga kondominium tinggi di sekitar Sunway Velocity dan MyTown. Krew Cheras kami berpengalaman dengan siling plaster berusia 25 tahun yang memerlukan penyegaran skim-coat, retak masonry halus yang disebabkan oleh tanah yang mendap, longkang dapur tersumbat akibat gris selama beberapa dekad, serta pengecatan dalaman semula untuk Tahun Baru Cina & Hari Raya. Kami bekerjasama dengan JMB / pengurusan untuk setiap projek tinggi, menggunakan penutup kasut di dalam rumah, dan membersihkan tapak sepenuhnya sebelum serahan.",

  "ampang":
    "Daripada banglo mewah di Ampang Hilir dan Taman TAR sehingga kondominium bukit di Bukit Antarabangsa dan teres pasaran pertengahan di Pandan Indah, KL Servis Rumah menyampaikan penyelenggaraan rumah yang sempurna di setiap kejiranan Ampang. Kami mengendalikan pengecatan semula luaran untuk kawasan diplomatik, suntikan PU untuk kebocoran papak musim hujan di pangsapuri bukit, serta lawatan kerja tangan perkhidmatan penuh untuk rumah keluarga ekspatriat. Setiap kerja datang dengan harga itemisasi dan jaminan kalis air bertulis sehingga 5 tahun.",

  "kajang":
    "KL Servis Rumah berkhidmat di Kajang, Semenyih, Bandar Baru Bangi dan koridor MRT yang berkembang pesat. Daripada banglo pelancaran baharu di Country Heights dan rumah strata yang baru diserahkan berhampiran stesen MRT Kajang sehingga teres Sungai Chua yang lebih lama, pasukan kami mengendalikan segala-galanya daripada suntikan PU bilik mandi dan penutupan semula kebocoran bumbung sehingga pengecatan dalaman penuh dan partition gypsum untuk pejabat rumah yang berkembang. Slot hari yang sama tersedia untuk Kajang, Semenyih dan Balakong untuk tempahan sebelum jam 11 pagi.",

  "mont-kiara":
    "Mont Kiara adalah salah satu kelompok kondominium mewah yang paling padat di Kuala Lumpur, dan KL Servis Rumah mengendalikan tuntutan khusus hidup di bangunan tinggi di sini: peraturan JMB yang ketat, tempoh tempahan lif yang terhad, perlindungan lantai marmar, dan kemasan premium yang tidak bertolak ansur dengan kerja yang cuai. Kami adalah pelanggan tetap di 1 Mont Kiara, Verve Suites, Kiara 163 dan kediaman kawasan Publika, menyampaikan pengecatan dalaman dengan cat rendah-VOC yang boleh dibasuh, pembaikan drywall yang tidak kelihatan, pemasangan TV dinding pada drywall atau konkrit, serta kalis air suntikan PU untuk kebocoran bilik mandi utama.",

  "bangsar":
    "Bangsar menggabungkan banglo wang lama di Lucky Garden dengan kondominium moden di Bangsar South dan rumah teres di Pantai Hillpark. KL Servis Rumah menyokong kepelbagaian ini: pengecatan semula mesra warisan untuk banglo berusia 40 tahun, suntikan PU bilik mandi pantas untuk bangunan tinggi Bangsar South, serta kerja pertukangan, kabinet & pencahayaan yang tepat untuk penukaran lot kedai Telawi. Pasukan dispatch Bangsar kami fasih berbahasa Inggeris, berhati-hati di tapak, dan menyelesaikan setiap kerja dengan pembersihan penuh.",

  "damansara":
    "'Damansara' merangkumi Damansara Utama (SS 21), TTDI, Damansara Perdana, Damansara Heights dan Damansara Jaya — jenis hartanah yang sangat berbeza di bawah satu nama. KL Servis Rumah mengendalikan semuanya: pengecatan semula banglo TTDI, kalis air kondominium Damansara Perdana, pencahayaan papan tanda DU, dan lawatan kerja tangan keluarga di Damansara Jaya. Pengurus projek kami membantu memadankan pakar yang betul (pelukis, tukang paip, tukang kalis air, tukang tangan) dengan jenis hartanah dan bajet anda yang tepat.",

  "kepong":
    "Kepong adalah salah satu kejiranan rumah teres yang paling padat di KL, dan KL Servis Rumah menghantar pelbagai krew ke sini setiap hari. Kerja biasa di Kepong: mengecat semula luaran teres berusia 20 tahun selepas pudar monsun, menggantikan siling plaster yang kendur di bawah bilik mandi tingkat atas yang bocor, pemasangan semula paip saliran PVC untuk sinki dapur, serta pembinaan partition gypsum untuk pejabat rumah di double-storey Bandar Menjalara. Krew Kepong kami tepat masa, mesra Bahasa Inggeris/Melayu/Kantonis, dan biasa dengan kekangan parkir dua baris di jalan yang sempit.",

  "setapak":
    "Setapak, Wangsa Maju dan koridor utara KL menempatkan bilangan besar flat walk-up rendah, kondominium pasaran pertengahan dan rumah teres — jenis hartanah yang semuanya menua secara berbeza. KL Servis Rumah mengendalikan tampalan retak dinding untuk flat lama di Sri Rampai, pengecatan semula luaran untuk teres Wangsa Maju yang menghadap debu trafik Genting Klang, pembaikan siling selepas kebocoran tingkat atas, serta penggantian paip paip penuh untuk blok berusia 30 tahun. Masa dispatch ke Setapak biasanya 30–60 minit.",

  "sri-petaling":
    "Sri Petaling, Bukit Jalil dan Taman OUG merangkumi campuran rumah teres keluarga dan kondominium mewah baharu yang mengelilingi Pavilion Bukit Jalil. KL Servis Rumah mengendalikan julat penuh: mengecat semula teres klasik OUG satu tingkat, kalis air suntikan PU untuk bangunan tinggi pelancaran baharu Bukit Jalil, pembinaan partition gypsum untuk pejabat rumah yang berkembang, serta lawatan kerja tangan untuk pemasangan TV, rel langsir dan naik taraf pencahayaan. Setiap kerja disebut harga pada kadar yang adil dan diterbitkan sebelum kami memulakan.",

  "kota-damansara":
    "Kota Damansara adalah salah satu sub-bandar yang paling pesat berkembang di PJ, dengan campuran berat kondominium baharu, semi-D dan lot kedai. KL Servis Rumah adalah pemandangan biasa di The Strand, Sunway Nexis, Encorp Strand dan kediaman PJU 5 — mengendalikan segala-galanya daripada pengecatan semula unit penuh untuk unit serahan, suntikan PU untuk kebocoran papak bilik mandi utama, partition gypsum untuk penukaran pejabat lot kedai, serta lawatan kerja tangan am termasuk pemasangan kabinet dan naik taraf pencahayaan.",

  "ara-damansara":
    "Ara Damansara menggabungkan kondominium moden di tepi tasik dengan enclave landed yang dicari berhampiran Citta Mall dan LDP. KL Servis Rumah adalah biasa di precinct komersial Oasis Ara Damansara serta kondominium sekitarnya — mengendalikan pengecatan dalaman, kalis air suntikan PU bilik mandi, pembaikan siling plaster selepas kebocoran tingkat atas, serta lawatan kerja tangan penuh untuk pemasangan kabinet, pemasangan TV dan naik taraf pencahayaan. Dispatch hari yang sama adalah standard untuk tempahan sebelum jam 11 pagi.",

  "sunway":
    "Sunway merangkumi precinct hiburan Sunway Pyramid, koridor perumahan pelajar Universiti Sunway, menara komersial Sunway Geo dan kediaman tepi tasik Sunway South Quay. KL Servis Rumah menyokong campuran penuh: pengecatan semula perumahan pelajar dan lawatan kerja tangan pantas, kalis air bangunan tinggi untuk kediaman South Quay, suntikan PU untuk teres Bandar Sunway yang lebih lama, serta pengecatan komersial ringan untuk penyewa Sunway Geo. Penceramah Bahasa Inggeris/Melayu/Mandarin di meja dispatch.",

  "usj":
    "USJ 1 hingga USJ 21 membentuk salah satu kelompok rumah teres terbesar di Subang Jaya, dengan USJ Taipan dan Summit USJ sebagai sauh komersial. KL Servis Rumah mengendalikan spektrum penuh: mengecat semula teres USJ berusia 25 tahun, menggantikan siling plaster yang kendur, suntikan PU untuk kebocoran bilik mandi dua tingkat, pendawaian semula kotak DB untuk rumah pra-2000, serta lawatan kerja tangan penuh untuk keluarga yang berkembang. Setiap sebut harga adalah tetap dan itemisasi sebelum alat pertama keluar.",

  "putrajaya":
    "Kediaman berkaitan kerajaan dan precinct moden Putrajaya (1, 8, 9, 11, 15, 16, 18) menuntut penyelenggaraan rumah yang teliti dan profesional. KL Servis Rumah mengendalikan pengecatan semula kondominium Putrajaya, suntikan PU kebocoran papak bukit, partition gypsum untuk pejabat rumah yang berkembang, pemasangan kipas siling dan downlight, serta lawatan kerja tangan komprehensif. Dispatch kami ke Putrajaya meliputi Cyberjaya dan Dengkil sebagai satu zon, dan kami menggunakan krew yang disahkan ID untuk semua lawatan kuarters kerajaan.",

  "cyberjaya":
    "Precinct kediaman yang berkembang pesat di Cyberjaya (Symphony Hills, Garden Residence, Emerald 9, Shaftsbury Square menara) berkongsi profil penyelenggaraan yang sama: kualiti binaan moden tetapi kecacatan awal-kehidupan yang kerap — retak plaster halus, sentuhan membran bilik mandi, penjajaran pintu. KL Servis Rumah meliputi semuanya dengan pembaikan kecacatan serahan sebut harga tetap, pengecatan dalaman, kalis air dan lawatan kerja tangan. Bahasa Inggeris adalah bahasa kerja lalai untuk pelanggan Cyberjaya.",

  "wangsa-maju":
    "KL Servis Rumah meliputi Wangsa Maju, Sri Rampai, Taman Melati dan koridor Setapak dengan pasukan mengecat, paip, siling, kalis air dan kerja tangan hari yang sama. Krew kami biasa dengan pangsapuri matang, lot kedai sibuk dan rumah teres di sepanjang Genting Klang di mana kerja biasa termasuk tekanan air rendah, kesan siling daripada kebocoran tingkat atas, penjajaran pintu, pengecatan dalaman dan penggantian downlight atau kipas. Kami menyelaraskan dengan pejabat pengurusan, melindungi lif dan kawasan umum, dan mengesahkan harga penuh terlebih dahulu sebelum sebarang kerja bermula.",

  "bukit-jalil":
    "Bukit Jalil mempunyai campuran kondominium baharu, rumah landed dan suite komersial yang berkembang pesat di sekitar Pavilion Bukit Jalil. KL Servis Rumah menyokong sentuhan kecacatan serahan, pengecatan semula unit penuh, suntikan PU untuk kebocoran bilik mandi atau balkoni, pembaikan siling plaster, titik elektrik, pemasangan kipas siling dan lawatan kerja tangan untuk pemasangan TV dan pemasangan perabot. Pasukan kami mengikuti peraturan waktu kerja kondominium/JMB dan menyediakan serahan bersih untuk rumah yang didiami.",

  "desa-parkcity":
    "KL Servis Rumah menyediakan penyelenggaraan rumah premium yang bersih untuk kondominium Desa ParkCity, rumah landed dan suite runcit. Kerja di kawasan ini sering memerlukan perlindungan lantai yang teliti, tempahan lif, waktu kerja senyap dan standard kemasan yang tinggi. Kami mengendalikan pengecatan semula rendah-VOC, penggantian lekapan paip, diagnosis kebocoran air, pembaikan papan siling, pelarasan kabinet dan pintu, pemasangan TV dan kerja elektrik kecil dengan pasukan yang bijak dan kemas.",

  "taman-melawati":
    "Hartanah Taman Melawati sering terletak berhampiran kelembapan bukit, hujan lebat dan sistem paip matang. KL Servis Rumah mengendalikan pengecatan semula luaran, pemeriksaan kebocoran bumbung dan papak, kalis air bilik mandi, pembaikan kesan siling, penggantikan paip dan kerja tangan di seluruh Melawati, KL East dan Ukay Perdana berdekatan. Pasukan kami mengutamakan pemeriksaan kalis air dan saliran sebelum pengecatan kosmetik supaya masalah tidak kembali selepas cuaca monsun.",

  "bandar-utama":
    "Pemilik rumah Bandar Utama menempah KL Servis Rumah untuk pengecatan, pembaikan paip, pemulihan siling, kalis air dan kerja tangan di rumah landed matang, kondominium dan unit runcit di sekitar 1 Utama. Kami biasa dengan paip teres lama, kebocoran pinggir bumbung, retak siling plaster dan kerja penyegaran unit sewa. Sebut harga adalah itemisasi, pilihan bahan dijelaskan, dan kawasan kerja dibersihkan sebelum serahan.",

  "ss2":
    "SS2 dan Sea Park mempunyai banyak rumah teres matang dan lot kedai di mana isu berulang termasuk kebocoran paip lama, dinding lembap, rembesan bumbung, cat luaran mengelupas dan siling plaster yang menua. KL Servis Rumah menyediakan pembaikan praktikal dan kemasan premium: penggantian paip, diagnosis kebocoran, pengecatan dalaman/luaran, penggantian papan siling, kalis air dan lawatan kerja tangan. Kami boleh menjadualkan kerja secara berperingkat untuk rumah keluarga yang didiami.",

  "setia-alam":
    "Setia Alam menggabungkan kejiranan landed baharu, pangsapuri dan unit komersial yang sering memerlukan kecacatan serahan, pengecatan semula, sentuhan kalis air, penambahan elektrik dan pemasangan kerja tangan. KL Servis Rumah mengendalikan penyegaran rumah penuh, pemeriksaan kebocoran bumbung dan balkoni, penggantian lekapan paip, kerja siling plaster, pemasangan TV, langsir dan pemasangan perabot di seluruh Setia Alam dan Eco Ardence.",

  "kota-kemuning":
    "KL Servis Rumah berkhidmat di Kota Kemuning, Bukit Rimau dan Tropicana Aman berdekatan dengan penyelenggaraan rumah landed dan sokongan pengubahsuaian. Kerja biasa termasuk pengecatan semula luaran, pemeriksaan kebocoran bumbung, kalis air bilik mandi, naik taraf lekapan paip, pembaikan siling plaster, pemasangan elektrik dan kipas siling, kerja pintu/kunci dan tugas kerja tangan am. Krew kami melindungi taman, lantai dan binaan dalaman dengan teliti semasa kerja.",

  "batu-caves":
    "Batu Caves dan rumah Gombak sering memerlukan pembaikan praktikal untuk dinding lembap, paip lama, kebocoran siling dan cat luaran yang terdedah kepada habuk dan hujan. KL Servis Rumah menghantar pelukis, tukang paip, juruteknik kalis air, pasukan siling dan tukang tangan di seluruh Batu Caves, Sri Gombak dan kejiranan MRR2. Kami sebut harga secara telus dan mengutamakan kebocoran paip atau rembesan bumbung yang mendesak sebelum kerja kosmetik.",

  "selayang":
    "KL Servis Rumah meliputi rumah Selayang, pangsapuri, klinik, lot kedai dan hartanah landed dengan perkhidmatan mengecat, paip, pembaikan siling, kalis air dan kerja tangan yang boleh dipercayai. Kerja Selayang biasa termasuk bilik mandi bocor, rembesan bumbung, pengecatan semula teres lama, penggantian pemanas air, pemasangan kipas siling dan pembaikan pintu/kunci. Pasukan kami membawa kelengkapan dan bahan biasa untuk menyelesaikan banyak pembaikan dalam satu lawatan.",

  "rawang":
    "Komuniti landed yang berkembang dan kawasan bandar lama di Rawang memerlukan penyelenggaraan yang boleh dipercayai — daripada pengecatan semula luaran dan pembaikan kebocoran bumbung sehingga paip, kalis air, pembaikan siling dan pemasangan kerja tangan. KL Servis Rumah meliputi Rawang, Emerald Rawang, Anggun City dan Kundang dengan sebut harga itemisasi, panduan bahan dan dispatch berjadual untuk kerja bukan mendesak. Kebocoran aktif menerima triage keutamaan.",

  "sungai-buloh":
    "KL Servis Rumah menyediakan penyelenggaraan rumah di seluruh Sungai Buloh, Bukit Rahman Putra, Damansara Damai dan Subang Bestari berdekatan. Kami mengendalikan pengecatan, kalis air, pembaikan paip, pemeriksaan rembesan bumbung, pemulihan siling plaster, kerja pintu/kunci, pemasangan TV dan lawatan kerja tangan am untuk rumah landed, kondominium dan lot kedai. Foto WhatsApp membantu kami menghantar juruteknik yang betul dengan lebih pantas.",

  "semenyih":
    "Semenyih mempunyai banyak rumah landed baharu dan bandar yang berkembang di mana pemilik rumah memerlukan pengecatan, sentuhan kecacatan, kalis air, paip, pemasangan kipas siling, partition gypsum dan sokongan kerja tangan selepas serahan. KL Servis Rumah meliputi Semenyih, Eco Majestic, Setia EcoHill dan Beranang dengan lawatan berjadual, harga telus dan terma jaminan kerja.",

  "seri-kembangan":
    "Seri Kembangan terletak di antara kejiranan matang, perumahan pelajar, lot kedai dan komuniti landed baharu di sekitar Equine Park. KL Servis Rumah menyediakan perkhidmatan mengecat, paip, siling, kalis air, elektrik dan kerja tangan di seluruh The Mines, UPM, Equine Park dan Taman Universiti Indah. Kami boleh mengendalikan penyegaran tuan tanah, kebocoran bilik mandi, kesan siling, pembaikan paip, pemasangan TV dan pemasangan perabot dengan sebut harga itemisasi tetap.",

  "pandan-indah":
    "KL Servis Rumah berkhidmat di Pandan Indah, Pandan Jaya dan sempadan Ampang/Cheras berdekatan dengan pembaikan rumah praktikal dan kerja kemasan. Permintaan biasa termasuk kebocoran bilik mandi, longkang tersumbat, penggantian paip lama, pembaikan siling plaster, pengecatan, isu pintu dan kunci, pemasangan kipas siling dan pemasangan TV dinding. Pasukan kami bekerja dengan kemas di pangsapuri, lot kedai dan rumah landed.",

  "sentul":
    "Hartanah Sentul terdiri daripada pangsapuri walk-up lama dan lot kedai sehingga kondominium baharu di sekitar Sentul East dan Sentul West. KL Servis Rumah menyediakan perkhidmatan mengecat, paip, pembaikan siling, kalis air, elektrik dan kerja tangan dengan penyelarasan pengurusan bangunan yang teliti untuk bangunan tinggi dan penjadualan praktikal untuk blok lama. Kami biasanya mengendalikan kebocoran paip, pengecatan semula, kesan siling, penggantian kunci, pemasangan TV dan pemasangan kipas di Sentul."
};

const AREA_BODY_ZH: Record<string, string> = {
  "kuala-lumpur":
    "KL Servis Rumah 为整个吉隆坡联邦直辖区派遣经过背景审查的专业技师。无论您居住在蒙特基阿拉、孟沙或 KLCC 的豪华公寓，还是管理蕉赖、沈都或甲洞的店屋，我们都能提供优质的家居维护服务。我们的技术团队擅长使用 Nippon 油漆进行室内粉刷、非破坏性漏水检测与维修、无缝批灰的石膏天花板修复、高压 PU 灌浆浴室漏水修复，以及专业的电视挂装与家具组装。我们严格遵守 JMB 规定，完工后彻底清理现场，并在任何施工开始前提供 100% 透明的价格。",

  "petaling-jaya":
    "KL Servis Rumah 为整个八打灵再也提供优质的家居改善与维修服务。从 Seksyen 14 和 SS2 的住宅洋房，到 Kota Damansara、Bandar Utama 和 Ara Damansara 的现代公寓，我们的多技能技师始终就在您身边。我们擅长使用 Dulux 耐候涂料进行室内外粉刷、修复下垂的天花板、为家庭办公室安装隔墙、解决低水压问题、安装马桶，以及组装 IKEA 家具。所有工作均已投保，我们的技师均经过背景审查，确保您家人的安全。",

  "subang-jaya":
    "KL Servis Rumah 是梳邦再也值得信赖的家居护理提供商。从 Glenmarie 的商业办公室和 SS15 的零售店，到 USJ 1 至 USJ 21 以及 Bandar Sunway 的家庭住宅，我们提供高品质的油漆、天花板、水管、防水和杂工服务。梳邦再也团队在石膏墙上安装 OLED 电视、安装即热式热水淋浴、清理油腻厨房水槽、使用沥青膜密封屋顶漏水，以及建造耐用的隔音房间隔板方面训练有素。我们保证无意外加价——我们检查、报价，并在您批准后才开始施工。",

  "puchong":
    "从蒲种再也和 Bandar Puteri 到蒲种再也和武吉加里尔边界，KL Servis Rumah 提供快速家居维修和优质粉刷服务。蒲种人口稠密的商业区和排屋经常出现水管漏水、下垂天花板和安全锁故障。我们当地的团队能快速解决这些问题：更换故障锁、刨平刮地的门、安装装饰天花板线条、在平屋顶板上应用多层防水膜，以及处理完整的家居重新粉刷。我们携带各种更换零件，以便在一次上门中解决大多数维修问题。",

  "shah-alam":
    "作为雪兰莪州首府，莎阿南拥有各种各样的物业，从 Bukit Jelutong 和 Kota Kemuning 的大型半独立式洋房到多层仓库。KL Servis Rumah 为莎阿南物业提供专业护理。我们的服务包括使用耐用外墙涂料抵御热带阳光和雨水、修复屋顶瓦片漏水、为书房安装石膏隔板、安装马桶和热水器，以及安装窗帘和架子。我们对所有架子和橱柜使用激光水平仪，确保干净完美的水平对齐。",

  "klang":
    "巴生的物业，尤其是沿海的巴生港和人口稠密的 Bukit Tinggi 地区，容易受到高湿度和咸海风腐蚀的影响。KL Servis Rumah 在巴生提供专业维护服务。我们提供防锈不锈钢水管配件、防腐蚀墙面密封剂、浴室防水膜、天花板板材修复、安全锁安装以及一般杂工维修。我们当地的巴生团队装备齐全、准时，并且在解决潮湿和砖石结构剥落方面经验丰富。",

  "cheras":
    "KL Servis Rumah 覆盖整个蕉赖——从 Taman Connaught 和 Alam Damai 的成熟排屋区，到 Sunway Velocity 和 MyTown 周围的高层公寓。我们蕉赖团队经验丰富，能处理需要批灰翻新的 25 年老石膏天花板、因地面沉降导致的细微砖石裂缝、几十年油脂堵塞的厨房排水管，以及为农历新年和开斋节重新粉刷室内。我们与每个高层项目的 JMB/管理层合作，在室内使用鞋套，并在移交前彻底清理现场。",

  "ampang":
    "从安邦希利尔和 Taman TAR 的豪华洋房，到 Bukit Antarabangsa 的山坡公寓，以及 Ukay Perdana 的中档排屋，KL Servis Rumah 为安邦每个社区提供精致的家居维护服务。我们为外交区提供外墙重新粉刷，为山坡公寓提供雨季楼板漏水的 PU 灌浆，以及为外籍家庭提供全面的杂工上门服务。每项工作都附有逐项报价和最长 5 年的书面防水保修。",

  "kajang":
    "KL Servis Rumah 服务于加影、士毛月、万宜新镇以及快速发展的 MRT 走廊。从 Country Heights 的新推洋房和刚交屋的靠近加影 MRT 站的分层住宅，到较旧的 Sungai Chua 排屋，我们的团队处理从浴室 PU 灌浆和屋顶漏水重新密封到完整室内粉刷以及为不断扩大的家庭办公室建造石膏隔板的所有工作。加影、士毛月和巴拉贡在上午 11 点前预订可享受当日档期。",

  "mont-kiara":
    "满家乐是吉隆坡最密集的豪华公寓区之一，KL Servis Rumah 处理这里高层生活的具体需求：严格的 JMB 规定、有限的电梯预订时段、大理石地板保护，以及不容许粗糙工艺的优质收尾。我们是 1 Mont Kiara、Verve Suites、Kiara 163 和 Publika 区域住宅的常客，提供低 VOC 可水洗油漆的室内粉刷、隐形石膏板修复、在石膏板或混凝土上安装电视墙，以及为主浴室漏水提供 PU 灌浆防水服务。",

  "bangsar":
    "孟沙融合了 Lucky Garden 的老钱洋房、Bangsar South 的现代公寓以及 Pantai Hillpark 的排屋。KL Servis Rumah 支持这种多样性：为 40 年老洋房提供适合遗产的重新粉刷、为 Bangsar South 高层提供快速浴室 PU 灌浆，以及为 Telawi 店屋改造提供精确的木工、橱柜和照明工作。我们孟沙调度团队精通英语，在现场谨慎，并在每项工作结束时进行全面清理。",

  "damansara":
    "白沙罗涵盖 Damansara Utama (SS 21)、TTDI、Damansara Perdana、Damansara Heights 和 Damansara Jaya——一个名称下有非常不同的物业类型。KL Servis Rumah 处理所有这些：TTDI 洋房重新粉刷、Damansara Perdana 公寓防水、DU 店招照明，以及 Damansara Jaya 的家庭杂工上门。我们的项目经理会帮助将正确的专家（油漆工、水管工、防水技师、杂工）与您确切的物业类型和预算匹配。",

  "kepong":
    "甲洞是吉隆坡最密集的排屋社区之一，KL Servis Rumah 每天派遣多个团队到这里。甲洞常见工作：季风褪色后重新粉刷 20 年老排屋外墙、更换楼上浴室漏水导致的下垂石膏天花板、厨房水槽 PVC 排水重新布管，以及在 Bandar Menjalara 双层排屋中为家庭办公室建造石膏隔板。我们甲洞团队准时、英语/马来语/广东话友好，并且习惯狭窄街道上的双排停车限制。",

  "setapak":
    "文良港、旺沙玛珠和吉隆坡北部走廊拥有大量低层走道式公寓、中档公寓和排屋——这些物业类型的老化方式各不相同。KL Servis Rumah 处理 Sri Rampai 老公寓的墙面裂缝修补、面对 Genting Klang 交通灰尘的旺沙玛珠排屋外墙重新粉刷、楼上漏水后的天花板修复，以及 30 年老楼的完整水管更换。到文良港的调度时间通常为 30–60 分钟。",

  "sri-petaling":
    "Sri Petaling、武吉加里尔和 Taman OUG 融合了家庭排屋和围绕 Pavilion Bukit Jalil 的新豪华公寓。KL Servis Rumah 处理全范围：重新粉刷经典 OUG 单层排屋、为武吉加里尔新推高层提供 PU 灌浆防水、为不断扩大的家庭办公室建造石膏隔板，以及为电视安装、窗帘轨道和照明升级提供杂工上门。每项工作在开始前都按公布的公平价格报价。",

  "kota-damansara":
    "哥打白沙罗是八打灵再也发展最快的郊区之一，拥有大量新公寓、半独立式洋房和店屋。KL Servis Rumah 是 The Strand、Sunway Nexis、Encorp Strand 和 PJU 5 住宅的常见身影——处理从新交屋单位的完整重新粉刷、主浴室楼板漏水的 PU 灌浆、店屋办公室改造的石膏隔板，到包括橱柜安装和照明升级的一般杂工上门。",

  "ara-damansara":
    "阿拉白沙罗融合了 Citta Mall 附近的现代湖畔公寓和靠近 LDP 的受欢迎落地式社区。KL Servis Rumah 是 Oasis Ara Damansara 商业区以及周边公寓的常客——处理室内粉刷、主浴室 PU 灌浆防水、楼上漏水后的石膏天花板修复，以及包括橱柜安装、电视挂装和照明升级的全面杂工上门。上午 11 点前预订，当日调度是标准服务。",

  "sunway":
    "双威镇涵盖 Sunway Pyramid 娱乐区、双威大学学生住宿走廊、Sunway Geo 商业塔楼以及 Sunway South Quay 湖畔住宅。KL Servis Rumah 支持全混合：学生住宿重新粉刷和快速杂工上门、South Quay 住宅的高层防水、较旧 Bandar Sunway 排屋的 PU 灌浆，以及 Sunway Geo 租户的轻商业粉刷。调度台有英语/马来语/普通话服务人员。",

  "usj":
    "USJ 1 至 USJ 21 形成梳邦再也最大的排屋群之一，USJ Taipan 和 Summit USJ 是商业支柱。KL Servis Rumah 处理全谱系：重新粉刷 25 年老 USJ 排屋、更换下垂的石膏天花板、双层浴室漏水的 PU 灌浆、2000 年前房屋的 DB 箱重新布线，以及为不断扩大的家庭提供全面杂工上门。每份报价在第一个工具拿出前都是固定且逐项列明的。",

  "putrajaya":
    "布城政府关联住宅和现代分区（1、8、9、11、15、16、18）要求细致专业的家居维护。KL Servis Rumah 处理布城公寓重新粉刷、山坡楼板漏水 PU 灌浆、不断扩大的家庭办公室石膏隔板、吊扇和筒灯安装，以及全面杂工上门。我们到布城的调度将赛城和 Dengkil 作为一个区，并为所有政府宿舍访问使用经身份验证的团队。",

  "cyberjaya":
    "赛城快速发展的住宅分区（Symphony Hills、Garden Residence、Emerald 9、Shaftsbury Square 塔楼）共享相同的维护特征：现代建筑质量但频繁的早期缺陷——细微石膏裂缝、浴室膜修补、门对齐。KL Servis Rumah 通过固定报价的交屋缺陷修复、室内粉刷、防水和杂工上门覆盖所有这些。英语是赛城客户的默认工作语言。",

  "wangsa-maju":
    "KL Servis Rumah 为旺沙玛珠、Sri Rampai、Taman Melati 和 Setapak 走廊提供当日油漆、水管、天花板、防水和杂工团队。我们的团队熟悉成熟公寓、繁忙店屋以及沿 Genting Klang 的排屋，常见工作包括低水压、楼上漏水导致的天花板污渍、门对齐、室内粉刷以及筒灯或风扇更换。我们与管理办公室协调，保护电梯和公共区域，并在任何工作开始前确认完整价格。",

  "bukit-jalil":
    "武吉加里尔在 Pavilion Bukit Jalil 周围拥有快速发展的混合新公寓、落地式住宅和商业套房。KL Servis Rumah 支持交屋修补、全单位重新粉刷、浴室或阳台漏水的 PU 灌浆、石膏天花板修复、电气点位、吊扇安装以及电视安装和家具组装的杂工上门。我们的团队遵守公寓/JMB 工作时间规定，并为已入住的房屋提供干净的移交。",

  "desa-parkcity":
    "KL Servis Rumah 为 Desa ParkCity 公寓、落地式住宅和零售套房提供优质干净的家居维护。这里的工作通常需要仔细的地板保护、电梯预订、安静工作时间和高收尾标准。我们使用低 VOC 重新粉刷、管道配件更换、水漏诊断、天花板板材修复、橱柜和门调整、电视安装以及小型电气工作，由谨慎整洁的团队完成。",

  "taman-melawati":
    "Taman Melawati 物业通常靠近山地湿气、暴雨和成熟管道系统。KL Servis Rumah 处理外墙重新粉刷、屋顶和楼板漏水检查、浴室防水、天花板污渍修复、管道更换以及 Melawati、KL East 和附近 Ukay Perdana 的杂工工作。我们的团队在进行美容粉刷之前优先进行防水和排水检查，以免问题在季风天气后再次出现。",

  "bandar-utama":
    "万达镇业主向 KL Servis Rumah 预订 1 Utama 周围成熟落地式住宅、公寓和零售单位的粉刷、管道维修、天花板修复、防水和杂工服务。我们熟悉老排屋管道、屋顶边缘漏水、石膏天花板裂缝和租赁单位翻新工作。报价是逐项列明的，材料选择得到解释，工作区域在移交前清理干净。",

  "ss2":
    "SS2 和 Sea Park 有许多成熟排屋和店屋，常见反复问题包括老水管漏水、潮湿墙壁、屋顶渗漏、外部油漆剥落和老化石膏天花板。KL Servis Rumah 提供实用维修和优质收尾：管道更换、漏水诊断、室内外粉刷、天花板板材更换、防水和杂工上门。我们可以为已入住的家庭住宅分阶段安排工作。",

  "setia-alam":
    "Setia Alam 融合了新落地式社区、公寓和商业单位，这些单位通常需要交屋缺陷、重新粉刷、防水修补、电气添加和杂工安装。KL Servis Rumah 处理完整家居翻新、屋顶和阳台漏水检查、管道配件更换、石膏天花板工作、电视安装、窗帘和家具组装，覆盖整个 Setia Alam 和 Eco Ardence。",

  "kota-kemuning":
    "KL Servis Rumah 服务于 Kota Kemuning、Bukit Rimau 和附近 Tropicana Aman，提供落地式住宅维护和翻新支持。常见工作包括外墙重新粉刷、屋顶漏水检查、浴室防水、管道配件升级、石膏天花板修复、电气和吊扇安装、门/锁工作以及一般杂工任务。我们的团队在工作期间仔细保护花园、地板和内置设施。",

  "batu-caves":
    "黑风洞和鹅唛住宅经常需要对潮湿墙壁、老管道、天花板漏水和暴露在灰尘和雨水中的外墙油漆进行实用维修。KL Servis Rumah 在整个黑风洞、Sri Gombak 和 MRR2 社区派遣油漆工、水管工、防水技师、天花板团队和杂工。我们提供透明报价，并优先处理紧急管道泄漏或屋顶渗漏，然后再进行美容工作。",

  "selayang":
    "KL Servis Rumah 为莎拉央住宅、公寓、诊所、店屋和落地式物业提供可靠的粉刷、管道、天花板修复、防水和杂工服务。莎拉央常见工作包括浴室漏水、屋顶渗漏、老排屋重新粉刷、热水器更换、吊扇安装和门/锁维修。我们的团队携带常见配件和材料，以便在一次上门中完成许多维修。",

  "rawang":
    "万挠不断发展的落地式社区和较老的城镇区域需要可靠的维护——从外墙重新粉刷和屋顶漏水修复到管道、防水、天花板修复和杂工安装。KL Servis Rumah 覆盖万挠、Emerald Rawang、Anggun City 和 Kundang，提供逐项报价、材料指导和非紧急工作的计划调度。活跃泄漏将获得优先分流。",

  "sungai-buloh":
    "KL Servis Rumah 为整个双溪毛糯、Bukit Rahman Putra、Damansara Damai 和附近 Subang Bestari 提供家居维护服务。我们处理粉刷、防水、管道维修、屋顶渗漏检查、石膏天花板修复、门/锁工作、电视安装以及落地式住宅、公寓和店屋的一般杂工上门。WhatsApp 照片帮助我们更快派遣合适的技师。",

  "semenyih":
    "士毛月有许多新落地式住宅和不断发展的城镇，业主在交屋后需要粉刷、缺陷修补、防水、管道、吊扇安装、石膏隔板和杂工支持。KL Servis Rumah 覆盖士毛月、Eco Majestic、Setia EcoHill 和 Beranang，提供计划上门、透明定价和工作保修条款。",

  "seri-kembangan":
    "Seri Kembangan 位于成熟社区、学生住宿、店屋和 Equine Park 周围的新落地式社区之间。KL Servis Rumah 在整个 The Mines、UPM、Equine Park 和 Taman Universiti Indah 提供粉刷、管道、天花板、防水、电气和杂工服务。我们可以处理房东翻新、浴室漏水、天花板污渍、管道维修、电视安装和家具组装，提供固定的逐项报价。",

  "pandan-indah":
    "KL Servis Rumah 服务于 Pandan Indah、Pandan Jaya 和附近安邦/蕉赖边界，提供实用家居维修和收尾工作。常见需求包括浴室漏水、堵塞排水管、老水管更换、石膏天花板修复、粉刷、门和锁问题、吊扇安装和电视墙安装。我们的团队在公寓、店屋和落地式住宅中干净地工作。",

  "sentul":
    "沈都物业从老走道式公寓和店屋到 Sentul East 和 Sentul West 附近的新公寓。KL Servis Rumah 提供粉刷、管道、天花板修复、防水、电气和杂工服务，对高层建筑进行仔细的建筑管理协调，对老楼进行实用调度。我们通常处理沈都的管道泄漏、重新粉刷、天花板污渍、锁更换、电视安装和风扇安装。"
};

export function getLocalizedAreaBody(
  slug: string,
  locale: Locale
): LocalizedAreaBody | null {
  if (locale === "en") return null;

  const body = locale === "ms" ? AREA_BODY_MS[slug] : AREA_BODY_ZH[slug];
  if (!body) return null;

  return { description: body };
}