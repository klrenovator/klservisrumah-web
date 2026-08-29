/**
 * PROBLEM BODY i18n — Full native MS + ZH for all 43 problems
 * 
 * Covers: symptom, causes[], solutions[], whenToCall[], and one additional local FAQ
 * Written in the same high-quality, locally relevant style.
 */

import type { Locale } from "@/lib/i18n";

export type LocalizedProblemBody = {
  symptom: string;
  causes: string[];
  solutions: string[];
  whenToCall: string[];
  localFaq?: { q: string; a: string };
  /** P2-16 depth fields — native MS/ZH for the enriched problem pages. */
  overview?: string;
  diyChecks?: string[];
  prevention?: string[];
  costDetail?: string;
};

const PROBLEM_BODY_MS: Record<string, LocalizedProblemBody> = {
  "peeling-paint-malaysia": {
    symptom: "Cat mengelupas, berbuih atau menjadi kapur kerana kelembapan, primer lemah atau lapisan lama tidak melekat dengan baik pada dinding.",
    causes: ["Kelembapan terperangkap di belakang dinding", "Tiada sealer atau primer digunakan sebelum mengecat", "Cat lama yang berkapur tidak disandarkan dengan betul", "Retak halus membenarkan air hujan meresap"],
    solutions: ["Kikis semua cat longgar sehingga ke tepi yang kukuh", "Sapukan sealer anti-alkali atau anti-lembapan", "Tampal retak halus sebelum mengecat semula", "Gunakan cat dalaman yang boleh dibasuh atau cat luaran tahan cuaca"],
    whenToCall: ["Katuluan berulang selepas mengecat sendiri", "Dinding terasa lembap atau ada garam putih berhabuk", "Cat mengelupas berhampiran bilik mandi, balkoni atau dinding luaran"],
    localFaq: {
      q: "Bolehkah saya terus mengecat di atas cat yang mengelupas?",
      a: "Tidak. Cat longgar mesti dikikis dan disandarkan terlebih dahulu, jika tidak cat baharu akan mengelupas bersama lapisan lama."
    }
  },
  "faded-exterior-paint-malaysia": {
    symptom: "Dinding luaran kelihatan berkapur, berbintik-bintik atau pudar selepas terdedah kepada UV dan kitaran hujan lebat.",
    causes: ["Cat luaran gred rendah", "Tiada sealer tahan cuaca", "Pendedahan UV pada dinding menghadap barat", "Kulat dan kotoran terkumpul akibat hujan tropika"],
    solutions: ["Basuh dinding luaran dengan tekanan tinggi", "Rawat kulat dan pengapuran", "Sapukan sealer tahan alkali", "Gunakan cat luaran premium tahan cuaca"],
    whenToCall: ["Dinding berkapur apabila digosok tangan", "Retak halus kelihatan", "Perlu perancah atau tangga tinggi"],
    localFaq: {
      q: "Berapa kerap dinding luaran perlu dicat semula di Malaysia?",
      a: "Kebanyakan rumah perlu dicat semula setiap 5–7 tahun, lebih awal jika cat gred rendah atau pendedahan lembap tinggi."
    }
  },
  "damp-walls-paint-bubbling": {
    symptom: "Cat berbuih, ada kesan perang atau garam putih kerana air bergerak melalui dinding atau papak.",
    causes: ["Rembesan bilik mandi atau balkoni", "Lembap naik dari masonry berpori", "Retak luaran membenarkan air hujan masuk", "Paip bocor di dalam dinding"],
    solutions: ["Jejaki punca kelembapan dengan bacaan meter", "Tutup retak luaran atau grout bilik mandi", "Sapukan halangan kalis air jika sesuai", "Baiki plaster dan cat semula selepas dinding kering"],
    whenToCall: ["Buih berulang selepas mengecat semula", "Dinding terasa sejuk atau lembap", "Bau kulat atau tompok hitam muncul"],
    localFaq: {
      q: "Bolehkah cat menyelesaikan masalah dinding lembap?",
      a: "Tidak. Cat sahaja tidak boleh menghentikan kelembapan. Punca kelembapan mesti dibaiki terlebih dahulu sebelum mengecat."
    }
  },
  "ceiling-mold-stains": {
    symptom: "Papan siling menunjukkan acuan gelap, cincin kuning-perang atau kawasan kendur lembut selepas terdedah kepada air.",
    causes: ["Kebocoran bilik mandi tingkat atas", "Kebocoran saliran penghawa dingin", "Rembesan bumbung atau balkoni", "Pengudaraan buruk dan kondensasi"],
    solutions: ["Hentikan punca air terlebih dahulu", "Buang papan yang rosak acuan jika lembut", "Pasang papan plaster tahan lembapan", "Skim, primer dan cat semula selepas kering"],
    whenToCall: ["Siling lembut atau kendur", "Kesan air semakin besar selepas hujan atau guna bilik mandi", "Acuan merebak di seluruh papan"],
    localFaq: {
      q: "Bolehkah papan siling yang berwarna dicat semula?",
      a: "Hanya jika ia kering dan kukuh secara struktur. Papan yang lembut atau beracuan perlu diganti sebelum disiapkan."
    }
  },
  "burst-pipe-emergency": {
    symptom: "Air menyembur, membanjiri atau terkumpul dengan cepat dari paip, injap atau kawasan dinding.",
    causes: ["Sambungan paip lama atau berkarat", "Tekanan air tinggi yang mendadak", "Fitting buruk atau pelekat gagal", "Gerudi tidak sengaja ke paip tersembunyi"],
    solutions: ["Matikan bekalan air utama serta-merta", "Lindungi barang elektrik dan lantai", "Cari bahagian yang pecah", "Gantikan paip atau injap yang rosak dan uji tekanan"],
    whenToCall: ["Air tidak boleh dihentikan dengan cepat", "Kebocoran di dalam dinding atau siling", "Titik elektrik berdekatan"],
    localFaq: {
      q: "Apa yang perlu saya lakukan pertama kali apabila paip pecah?",
      a: "Matikan injap air utama, jauhkan orang dari kawasan elektrik dan hubungi tukang paip dengan foto atau video."
    }
  },
  "low-water-pressure-kl": {
    symptom: "Tekanan air rendah di bilik mandi, dapur atau seluruh rumah menyebabkan aliran lemah.",
    causes: ["Paip tersumbat dengan mineral atau karat", "Tekanan bekalan rendah dari pihak berkuasa", "Injap utama separa tertutup", "Kebocoran tersembunyi di dalam dinding"],
    solutions: ["Periksa dan bersihkan kepala paip dan penapis", "Buka injap utama sepenuhnya", "Periksa kebocoran tersembunyi", "Gantikan paip yang tersumbat atau berkarat"],
    whenToCall: ["Tekanan rendah di seluruh rumah", "Air berwarna perang atau berkarat", "Masalah berlaku secara tiba-tiba"],
    localFaq: {
      q: "Adakah tekanan air rendah bermakna ada kebocoran?",
      a: "Tidak semestinya. Ia boleh disebabkan oleh paip tersumbat, tekanan bekalan rendah atau injap separa tertutup."
    }
  },
  "blocked-drain-toilet": {
    symptom: "Tandas tersumbat, air naik perlahan atau tidak mengalir sama sekali.",
    causes: ["Tisu atau barang asing tersumbat", "Paip tersumbat dengan gris atau sisa", "Masalah pada longkang utama", "Paip bengkok atau rosak"],
    solutions: ["Gunakan plunger atau auger", "Elakkan membuang barang asing ke tandas", "Panggil tukang paip untuk jetting jika perlu", "Periksa longkang utama jika masalah berulang"],
    whenToCall: ["Plunger tidak berjaya", "Air naik ke tandas lain", "Bau busuk dari longkang"],
    localFaq: {
      q: "Apa yang perlu saya lakukan jika tandas tersumbat?",
      a: "Jangan terus siram. Gunakan plunger terlebih dahulu. Jika gagal, hubungi tukang paip dengan segera."
    },
    overview: "Paip tersumbat atau tandas tersumbat ialah antara panggilan paip paling biasa di rumah KL dan Selangor, dan ia biasanya berlaku perlahan-lahan — rambut, buih sabun dan gris menyempitkan paip sehingga suatu hari air berhenti mengalir. Ia menjadi mendesak apabila tersumbat di saluran utama atau tandas: air kotor tiada tempat keluar dan boleh naik semula ke tingkat terendah rumah.",
    diyChecks: [
      "Berhenti menggunakan sinki, bilik mandi atau tandas yang terjejas segera — setiap siraman menolak tersumbat lebih dalam",
      "Periksa sama ada longkang lain turut perlahan — itu menunjuk ke saluran utama, bukan satu lekapan",
      "Guna plunger dengan kedap penuh di mulut longkang; jangan campur dengan bahan kimia",
      "Perhatikan air naik di perangkap lantai atau bau kumbahan — tanda masalah saluran utama"
    ],
    prevention: [
      "Guna penapis longkang di bilik mandi dan besen untuk menangkap rambut",
      "Jangan tuang minyak masak atau gris ke sinki — ia membeku di dalam paip",
      "Siram hanya kertas tandas; tisu basah dan barangan sanitari punca paling biasa tandas tersumbat",
      "Tuang air panas ke longkang setiap minggu untuk mengelak pembentukan filem sabun"
    ],
    costDetail: "Pembersihan lekapan ringkas dengan alat manual atau spring bermula sekitar RM150. Penanggalkan tandas, pembersihan perangkap lantai atau halangan saluran utama boleh mencecah RM500 dan ke atas. Kami sahkan kedalaman tersumbat dan kaedah sebelum mula, dan mutu kerja dilindungi jaminan standard."
  },
  "water-heater-not-working": {
    symptom: "Pemanas air tidak panas, bocor atau tidak berfungsi sama sekali.",
    causes: ["Elemen pemanas rosak", "Termostat gagal", "Sedimen terkumpul di tangki", "Sambungan elektrik longgar"],
    solutions: ["Periksa bekalan elektrik dan suis", "Bersihkan sedimen dari tangki", "Gantikan elemen atau termostat", "Panggil juruteknik untuk diagnosis penuh"],
    whenToCall: ["Tiada air panas sama sekali", "Air bocor dari unit", "Bau terbakar dari pemanas"],
    localFaq: {
      q: "Berapa lama pemanas air biasanya bertahan?",
      a: "Pemanas air storan biasanya bertahan 8–12 tahun. Pemanas serta-merta boleh bertahan lebih lama jika diselenggara dengan baik."
    }
  },
  "sagging-plaster-ceiling": {
    symptom: "Papan siling plaster kendur, retak atau jatuh di beberapa kawasan.",
    causes: ["Kebocoran air dari tingkat atas", "Papan plaster rosak akibat kelembapan", "Struktur sokongan lemah", "Pemasangan asal tidak betul"],
    solutions: ["Hentikan punca kebocoran terlebih dahulu", "Ganti papan yang rosak dengan papan tahan lembapan", "Baiki atau ganti rangka sokongan", "Skim dan cat semula"],
    whenToCall: ["Siling kendur lebih daripada 1 cm", "Retak besar atau papan longgar", "Air masih menitis"],
    localFaq: {
      q: "Bolehkah saya baiki siling kendur sendiri?",
      a: "Tidak disyorkan. Siling kendur biasanya bermakna ada masalah struktur atau kebocoran yang perlu dibaiki oleh profesional."
    },
    overview: "Siling plaster yang kendur ialah satu masalah siling yang tidak patut ditunggu. Papan melendut apabila direndam kebocoran, apabila gantungan dan bingkai kayu gagal, atau apabila terlebih beban — dan sebaik papan mula kendur, pemasangan sudah kehilangan cengkaman, jadi siling boleh jatuh secara tiba-tiba. Lekukan yang kelihatan biasanya lebih teruk daripada yang disangka kerana jurang udara menyembunyikan sejauh mana papan telah bergerak.",
    diyChecks: [
      "Jangan berdiri terus di bawah kawasan kendur dan jauhi perabot",
      "Tekan perlahan titik terendah dengan tapak tangan — papan lembut atau span bermakna kerosakan air",
      "Cari kesan air atau cincin gelap pada papan kendur, yang menunjuk ke kebocoran aktif",
      "Periksa siling di atas kendur untuk kipas atau lampu berat yang ditambah kemudian"
    ],
    prevention: [
      "Baiki kebocoran bumbung atau bilik mandi segera — kelembapan pembunuh utama plasterboard",
      "Jangan gantung lekapan berat dari plasterboard tanpa sokongan bingkai yang betul",
      "Selepas pengubahsuaian, periksa siling pada awal monsun untuk tanda kendur awal",
      "Gunakan papan tahan lembapan di bilik mandi, dapur dan berhampiran penghawa dingin"
    ],
    costDetail: "Pengukuhan kawasan kendur kecil yang kering dan skim semula bermula sekitar RM180. Penggantian papan rosak air dengan bingkai logam RM600–RM1,500+ bergantung keluasan dan sama ada kerja elektrik atau cat disertakan. Kami periksa bingkai sebelum sebut harga — siling kendur dinilai mengikut struktur, bukan bilangan papan."
  },
  "ceiling-leak-after-rain": {
    symptom: "Kesan air muncul di siling selepas hujan lebat.",
    causes: ["Genting beralih atau rosak", "Flashing bumbung retak", "Longkang tersumbat", "Kebocoran dari balkoni atau bumbung rata"],
    solutions: ["Periksa dan baiki genting serta flashing", "Bersihkan longkang dan paip hujan", "Sapukan kalis air jika perlu", "Baiki siling yang rosak selepas sumber dibaiki"],
    whenToCall: ["Kesan air semakin besar setiap hujan", "Air menitis dari siling", "Bumbung rata atau balkoni terlibat"],
    localFaq: {
      q: "Bagaimana anda tahu punca kebocoran siling?",
      a: "Kami periksa bumbung, flashing, longkang dan balkoni, kemudian gunakan ujian air untuk mengesahkan sumber."
    },
    overview: "Siling yang bocor hanya selepas hujan menunjuk ke sampul bangunan, bukan paip: jubin bumbung retak atau tergelincir, flashing gagal di sekeliling parapet atau cerobong, balkoni yang membiarkan air menembusi, atau retak dinding luaran yang menyalurkan hujan terus ke dalam dinding. Kesan di siling biasanya jauh dari titik masuk, kerana air bergerak di sepanjang bawah papak sebelum menitis.",
    diyChecks: [
      "Letak baldi di bawah titisan dan catat tempat air masuk — punca biasanya di tempat lain",
      "Semasa hujan, perhatikan laluan titisan di siling: kesan sering mengikuti garis sambungan papak atau rasuk",
      "Selepas hujan berhenti, periksa balkoni, parapet dan lembah bumbung terdekat untuk air bertakung atau retak",
      "Jauhkan air dari fitting elektrik — jika bocor berhampiran lampu, matikan litar itu"
    ],
    prevention: [
      "Bersihkan longkang dan periksa jubin bumbung sebelum monsun setiap tahun",
      "Segel semula sambungan parapet dan balkoni mengikut jadual, bukan apabila kesan muncul",
      "Baiki retak dinding luaran pada musim yang sama ia muncul",
      "Selepas pembaikan, sahkan dengan ujian air, bukan tunggu hujan seterusnya"
    ],
    costDetail: "Penjejakan dan penyegelan satu titik masuk luaran bermula sekitar RM250. Kegagalan membran balkoni atau bumbung rata lebih mahal — RM1,500–RM3,500+ bergantung keluasan dan sama ada jubin diangkat. Kami sentiasa cari dan hentikan punca sebelum sebut harga kerja siling, supaya kesan tidak kembali."
  },
  "cracked-ceiling-joints": {
    symptom: "Sambungan siling plaster retak atau terbuka, terutamanya di sudut dan tepi.",
    causes: ["Pergerakan struktur rumah", "Papan plaster tidak dipasang dengan betul", "Kelembapan menyebabkan pengembangan", "Usia rumah yang sudah tua"],
    solutions: ["Bersihkan retak dan sapukan pita mesh", "Gunakan compound elastik untuk sambungan", "Skim dan cat semula", "Periksa punca pergerakan jika retak berulang"],
    whenToCall: ["Retak semakin lebar", "Siling kendur di kawasan retak", "Retak muncul semula selepas dibaiki"],
    localFaq: {
      q: "Adakah retak di sambungan siling serius?",
      a: "Biasanya tidak serius jika hanya kosmetik. Walau bagaimanapun, jika retak lebar atau berulang, ia mungkin menunjukkan pergerakan struktur."
    },
    overview: "Retak garis lurus di sepanjang sambungan plasterboard ialah kecacatan siling paling biasa di rumah Malaysia, dan ia biasanya isu kemasan, bukan isu struktur. Pita sambungan atau kompaun disapu terlalu nipis, bingkai bergerak sedikit apabila rumah mendap, atau kelembapan melembutkan kompaun — dan setiap cat semula yang melangkau sambungan gagal semula dalam satu musim.",
    diyChecks: [
      "Lari jari di sepanjang retak — jika tepi pita terangkat, sambungan tidak dilekatkan dengan betul",
      "Periksa sama ada retak mengikut garis lurus (retak sambungan) atau melangkah merentasi papan (pergerakan bingkai)",
      "Tekan perlahan kedua-dua belah retak — pergerakan bermakna papan tidak dipasang dengan betul",
      "Cari lembapan atau kesan berhampiran retak, yang menunjuk ke punca air melembutkan sambungan"
    ],
    prevention: [
      "Guna pita gentian kaca dan kompaun sambungan berkualiti untuk sebarang kerja siling baharu",
      "Kekalkan kelembapan dalaman sederhana — bilik beraircond tidak boleh dibiarkan lembap lama",
      "Periksa kebocoran bumbung atau bilik mandi apabila sambungan retak berhampiran kawasan basah",
      "Semasa mengecat semula, rawat retak dengan betul dahulu — cat sahaja tidak pernah menyelesaikan retak sambungan"
    ],
    costDetail: "Pita semula satu sambungan retak dengan skim, primer dan cat bermula sekitar RM180. Berbilang sambungan atau skim semula seluruh siling RM500–RM900+; jika pergerakan papan ditemui, pengukuhan bingkai dinilai berasingan. Kami semak sama ada retak masih bergerak sebelum sebut harga supaya pembaikan tahan."
  },
  "condensation-ceiling-mold": {
    symptom: "Acuan hitam muncul di siling akibat kondensasi, terutamanya di bilik mandi atau dapur.",
    causes: ["Pengudaraan buruk", "Kelembapan tinggi dari memasak atau mandi", "Siling sejuk berbanding udara", "Tiada kipas ekzos"],
    solutions: ["Pasang atau gunakan kipas ekzos", "Buka tingkap semasa mandi atau memasak", "Sapukan cat anti-kulat", "Baiki pengudaraan keseluruhan"],
    whenToCall: ["Acuan merebak dengan cepat", "Bau acuan kuat", "Masalah berlaku walaupun dengan kipas"],
    localFaq: {
      q: "Bagaimana untuk menghalang acuan di siling bilik mandi?",
      a: "Gunakan kipas ekzos semasa dan selepas mandi, pastikan pengudaraan baik, dan sapukan cat anti-kulat."
    },
    overview: "Kulat kondensasi terbentuk apabila udara panas lembap bertemu siling sejuk — biasanya bilik mandi, dapur dan bilik berhawa dingin dengan aliran udara lemah. Ia tidak semestinya kebocoran, tetapi mesti diperiksa, kerana kebocoran tersembunyi di belakang papan menghasilkan bintik hitam yang sama.",
    diyChecks: [
      "Periksa sama ada kulat mengikut tempat paling sejuk atau laluan air yang jelas",
      "Rasa papan — lembut atau lembap menandakan kebocoran dan bukan kondensasi",
      "Hidupkan kipas ekzos dan lihat sama ada kondensasi hilang",
      "Cari paip AC menitis atau punca wap bilik mandi"
    ],
    prevention: [
      "Hidupkan kipas ekzos semasa dan selepas mandi",
      "Ventilasi bilik berhawa dingin sekali-sekala",
      "Guna primer dan cat anti-kulat di bilik lembap",
      "Baiki kebocoran perlahan atau paip AC menitis dengan segera"
    ],
    costDetail: "Pembersihan dan cat semula anti-kulat ialah hujung rendah (dari RM180). Jika papan lembut atau kulat terbenam, penggantian papan naik ke RM1,000. Kami sahkan sama ada punca kelembapan atau kebocoran sebelum sebut harga.",
  },
  "bathroom-leak-upper-floor": {
    symptom: "Kebocoran dari bilik mandi tingkat atas menyebabkan kesan air di siling atau dinding bawah.",
    causes: ["Grout atau sealant gagal", "Membran kalis air rosak", "Paip tersembunyi bocor", "Longkang lantai tersumbat"],
    solutions: ["Periksa dan baiki grout serta sealant", "Sapukan membran kalis air baharu jika perlu", "Periksa paip tersembunyi", "Bersihkan longkang lantai"],
    whenToCall: ["Air masih menitis selepas hujan atau mandi", "Kesan air semakin besar", "Bau lembap dari siling"],
    localFaq: {
      q: "Adakah saya perlu memecah jubin untuk membaiki kebocoran bilik mandi?",
      a: "Tidak selalu. Kami cuba kaedah tanpa merosakkan seperti suntikan PU terlebih dahulu. Jika gagal, barulah perlu hacking."
    }
  },
  "roof-leak-rainy-season": {
    symptom: "Kebocoran bumbung berlaku atau bertambah teruk semasa musim hujan.",
    causes: ["Genting rosak atau beralih", "Flashing dan ridge bocor", "Longkang tersumbat", "Bumbung rata atau genting asbestos rosak"],
    solutions: ["Ganti atau baiki genting yang rosak", "Baiki flashing dan ridge", "Bersihkan longkang", "Sapukan membran kalis air jika sesuai"],
    whenToCall: ["Kebocoran berlaku setiap hujan", "Air menitis dari beberapa tempat", "Bumbung rata atau asbestos terlibat"],
    localFaq: {
      q: "Berapa lama bumbung biasanya tahan sebelum bocor?",
      a: "Bumbung genting biasanya tahan 15–25 tahun. Pemeriksaan tahunan boleh membantu mengesan masalah awal."
    },
    overview: "Kebocoran bumbung paling banyak muncul semasa monsun kerana itulah masa bumbung diuji — dan di Malaysia, kebanyakan bocor bermula di tepi: jubin retak atau tergelincir, longkang tersumbat yang melimpah balik ke bawah faschia, atau flashing gagal di tempat bumbung bertemu dinding, parapet atau paip aircon. Air boleh bergerak jauh di sepanjang kasau dan penebat sebelum muncul sebagai kesan siling, jadi titik titisan jarang menandakan punca sebenar.",
    diyChecks: [
      "Dari dalam attic, cari cahaya menembusi bumbung — itu cara terpendek mencari lubang",
      "Selepas hujan, periksa longkang dan paip turun untuk limpahan — longkang tersumbat punca banyak 'kebocoran bumbung'",
      "Periksa flashing di sekeliling cerobong, parapet dan penembusan paip untuk tepi terangkat atau reput",
      "Tanda kedudukan kesan dan tarikh; kesan membesar bermakna air aktif, kesan statik mungkin kerosakan lama"
    ],
    prevention: [
      "Bersihkan longkang dan potong dahan menggantung sebelum monsun",
      "Ganti jubin retak sebaik sahaja dikesan, bukan apabila siling bernoda",
      "Segel semula penembusan bumbung (paip aircon, antena, skylight) setiap beberapa tahun",
      "Jadualkan pemeriksaan bumbung tahunan, idealnya sebelum November"
    ],
    costDetail: "Satu jubin retak atau pembaikan flashing dengan akses ialah hujung rendah (dari RM250). Pembedahan semula rabung, penggantian bahagian jubin atau salutan semula kawasan bumbung rata naik ke RM1,500–RM5,000+ bergantung jenis bumbung dan kesukaran akses. Kami sebut harga selepas pemeriksaan bumbung yang selamat dan terangkan pembaikan sebelum apa-apa kerja."
  },
  "wall-dampness-rising": {
    symptom: "Dinding lembap dari bawah naik ke atas, biasanya di rumah lama atau kawasan tanah rendah.",
    causes: ["Tiada kalis air tanah (DPC)", "Tanah lembap berhampiran dinding", "Paip bocor di bawah tanah", "Saliran buruk di sekitar rumah"],
    solutions: ["Pasang kalis air tanah baharu jika boleh", "Baiki saliran di sekitar rumah", "Sapukan cat dan plaster anti-lembapan", "Periksa paip bawah tanah"],
    whenToCall: ["Lembap naik lebih tinggi setiap tahun", "Garam putih muncul di dinding", "Masalah di beberapa dinding"],
    localFaq: {
      q: "Bolehkah masalah lembap naik diselesaikan sepenuhnya?",
      a: "Dalam kebanyakan kes, kami boleh mengurangkan atau menghentikannya dengan membaiki saliran dan menggunakan rawatan anti-lembapan."
    }
  },
  "swimming-pool-leak-balcony": {
    symptom: "Kebocoran dari kolam renang atau balkoni menyebabkan air menitis ke unit bawah.",
    causes: ["Membran kalis air gagal", "Retak di konkrit atau jubin", "Longkang tersumbat", "Sambungan antara balkoni dan dinding bocor"],
    solutions: ["Periksa dan baiki membran kalis air", "Tampal retak dengan bahan yang sesuai", "Bersihkan longkang", "Baiki sambungan dengan sealant elastik"],
    whenToCall: ["Air menitis secara konsisten", "Kesan air semakin besar", "Unit bawah mengadu"],
    localFaq: {
      q: "Bolehkah anda membaiki kebocoran balkoni tanpa memecah jubin?",
      a: "Ya, dalam kebanyakan kes kami gunakan suntikan PU atau membran cecair yang tidak memerlukan hacking."
    },
    overview: "Balkoni atau lantai kolam yang bocor ialah kegagalan kalis air, bukan masalah jubin — jubin sendiri tidak menahan air, membran di bawahnya yang berfungsi. Selepas bertahun-tahun terdedah kepada matahari dan hujan, membran berusia, retak di sambungan dinding-lantai, atau grout membiarkan air menembusi papak, dan kebocoran muncul di siling atau dinding bawah, kadang-kadang beberapa meter dari punca sebenar.",
    diyChecks: [
      "Keringkan lantai balkoni, kemudian tuang sedikit air dan perhatikan arah alirannya — kawasan bertakung adalah suspek",
      "Periksa siling bawah untuk corak titisan dan tandakan kedudukannya sebelum dan selepas hujan atau cucian",
      "Ketuk jubin dengan syiling atau kunci — bunyi hampa bermakna jubin telah tercabut dari membran",
      "Periksa garisan grout dan sambungan dinding-lantai untuk retak, terutama berhampiran longkang"
    ],
    prevention: [
      "Segel semula grout dan sambungan silikon setiap beberapa tahun sebelum kesan muncul",
      "Pastikan longkang bersih supaya air tidak bertakung menekan membran",
      "Elak memotong atau menggerudi lantai balkoni untuk ampaian atau storan tanpa penyegelan semula",
      "Selepas kerja kalis air, minta ujian takungan sebelum jubin dipasang semula"
    ],
    costDetail: "Salutan tanpa pecah jubin atau pembaikan suntikan retak untuk balkoni kecil bermula sekitar RM850. Penggantian membran penuh dengan penanggalkan jubin ialah punca angka RM12,000+ untuk dek besar dan sekeliling kolam. Kami petakan lembapan papak dahulu supaya pembaikan menyasar laluan sebenar, bukan hanya kesan."
  },
  "loose-door-hinge": {
    symptom: "Engsel pintu longgar, pintu tidak sejajar atau berdecit.",
    causes: ["Skru longgar atau hilang", "Lubang skru rosak", "Pintu berat atau terlalu kerap digunakan", "Engsel usang"],
    solutions: ["Ketatkan atau ganti skru", "Gunakan dowel kayu untuk lubang rosak", "Ganti engsel jika perlu", "Laraskan penjajaran pintu"],
    whenToCall: ["Pintu tidak boleh ditutup dengan betul", "Engsel rosak teruk", "Pintu berat dan memerlukan engsel baharu"],
    localFaq: {
      q: "Bolehkah anda baiki engsel pintu yang longgar?",
      a: "Ya. Kami boleh ketatkan skru, gunakan dowel kayu atau ganti engsel dalam masa 30–45 minit."
    },
    overview: "Pintu yang kendur, menggesel lantai atau tidak mahu mengunci biasanya masalah engsel, bukan masalah pintu. Skru engsel pada bingkai kayu longgar selepas bertahun-tahun digunakan, pin engsel haus, atau kayu bingkai membengkak dan mengecut dengan kelembapan sehingga tidak lagi dapat memegang skru.",
    diyChecks: [
      "Buka pintu sepenuhnya dan periksa sama ada skru engsel atas atau bawah longgar atau tercabut",
      "Angkat pintu sedikit pada pemegang — pergerakan menegak bermakna pin engsel haus atau skru longgar",
      "Perhatikan jurang antara pintu dan bingkai — jurang tidak sama rata bermakna pintu telah kendur",
      "Periksa sama ada lidah kunci masih sejajar dengan plat pengunci"
    ],
    prevention: [
      "Ketatkan skru engsel sebaik sahaja terdengar bunyi atau pintu mula kendur, sebelum lubang tercabut",
      "Gunakan skru lebih panjang yang menembusi kayu struktur, bukan hanya trim",
      "Pastikan tepi pintu bersalut cat supaya kelembapan tidak membengkakkan kayu",
      "Baiki kunci yang ketat awal — memaksa pintu menekan engsel"
    ],
    costDetail: "Pengetatan dengan skru lebih kuat atau penambahan dowel pada bingkai yang tercabut ialah hujung murah (dari RM90). Penggantian set engsel penuh dengan pelarasan lebih mahal; pintu berat atau pintu berkunci digital memerlukan engsel lebih kuat, sehingga RM350 dan ke atas. Kami sahkan sebelum mula."
  },
  "tv-fell-off-wall": {
    symptom: "TV jatuh dari dinding kerana pemasangan tidak kukuh.",
    causes: ["Anchor tidak sesuai untuk jenis dinding", "Skru tidak mencukupi atau terlalu pendek", "Dinding gypsum tanpa sokongan", "TV terlalu berat untuk bracket"],
    solutions: ["Periksa dan ganti anchor yang sesuai", "Pasang semula dengan bracket yang betul", "Tambah sokongan jika perlu", "Pastikan bracket boleh tahan berat TV"],
    whenToCall: ["TV jatuh atau hampir jatuh", "Dinding rosak teruk", "TV besar dan berat"],
    localFaq: {
      q: "Apakah jenis anchor yang sesuai untuk dinding gypsum?",
      a: "Kami gunakan anchor heavy-duty khas untuk gypsum yang boleh tahan berat sehingga 30–50 kg bergantung pada saiz TV."
    }
  },
  "stuck-window-lock": {
    symptom: "Kunci tingkap tersangkut, sukar dibuka atau ditutup.",
    causes: ["Kotoran dan habuk terkumpul", "Minyak kering atau karat", "Bahagian mekanikal rosak", "Tingkap bengkok atau tidak sejajar"],
    solutions: ["Bersihkan dan pelincir kunci", "Ganti bahagian yang rosak", "Laraskan penjajaran tingkap", "Ganti kunci jika perlu"],
    whenToCall: ["Kunci tidak berfungsi sama sekali", "Tingkap tidak boleh dibuka", "Masalah berlaku di beberapa tingkap"],
    localFaq: {
      q: "Bolehkah anda membaiki kunci tingkap yang tersangkut?",
      a: "Ya. Kami biasanya boleh membersihkan, melincirkan atau menggantikan kunci dalam masa 30–60 minit."
    },
    overview: "Kunci tingkap yang tersangkut bukan sekadar menyusahkan — di tingkat bawah dan balkoni yang mudah diakses, ia adalah jurang keselamatan, dan tingkap gelangsar yang tidak tertutup rapat membiarkan hujan dan habuk masuk semasa ribut. Mekanisme biasanya gagal kerana track atau kunci mengumpul kotoran, cangkuk kunci beralih apabila bingkai bergerak, atau pemegang telah haus.",
    diyChecks: [
      "Cuba kunci dengan tingkap tertutup sepenuhnya — jika hanya masuk dengan paksaan, cangkuk tidak sejajar",
      "Vakum track gelangsar dan periksa serpihan yang menyekat lidah kunci",
      "Lap mekanisme kering dan uji semula; jangan paksa pemegang yang menahan",
      "Periksa panel kaca untuk goyangan — daun yang tidak stabil tidak boleh dipaksa"
    ],
    prevention: [
      "Bersihkan track dan mekanisme kunci setiap beberapa bulan, terutama sebelum monsun",
      "Guna semburan silikon kering pada track dan kunci, bukan minyak atau gris",
      "Baiki kerosakan bingkai awal sebelum ia mengubah penjajaran kunci",
      "Uji semua kunci tingkap pada awal musim hujan"
    ],
    costDetail: "Pembersihan, pelinciran dan pelarasan semula ialah hujung murah (dari RM80). Penggantian pemegang atau cangkuk kunci dengan bahagian sepadan biasanya RM150–RM300 bergantung jenis tingkap; track bengkok atau perkakasan casement lebih mahal. Kami semak ketersediaan bahagian sebelum sebut harga."
  },
  "ikea-furniture-assembly-help": {
    symptom: "Perabot IKEA sukar dipasang atau tidak stabil selepas dipasang.",
    causes: ["Arahan tidak jelas", "Bahagian rosak atau hilang", "Tidak cukup alat atau pengalaman", "Ruang sempit untuk pemasangan"],
    solutions: ["Ikuti arahan langkah demi langkah", "Periksa semua bahagian sebelum mula", "Gunakan alat yang betul", "Minta bantuan profesional jika perlu"],
    whenToCall: ["Perabot besar dan rumit", "Bahagian rosak atau hilang", "Tidak ada masa atau alat"],
    localFaq: {
      q: "Berapa lama masa untuk memasang almari IKEA 3 pintu?",
      a: "Biasanya 2–4 jam untuk satu orang yang berpengalaman. Kami boleh melakukannya dalam masa 1–2 jam."
    },
    overview: "Perabot flat-pack sering menjadi punca frustrasi di rumah Malaysia — almari yang kelihatan mudah dalam gambar rajah boleh mengambil masa berjam-jam, memerlukan dua orang, dan akhirnya goyah atau tidak selamat jika panel dipaksa. Kebanyakan masalah bukan kekurangan kemahiran tetapi langkah yang terlepas: panel dipasang dalam urutan salah, cam lock tidak duduk, atau almari berat tidak pernah diikat ke dinding.",
    diyChecks: [
      "Susun semua panel dan perkakasan mengikut helaian arahan sebelum mula",
      "Periksa sama ada cam lock dipusing ke kedudukan terkunci — cam longgar punca paling biasa perabot goyah",
      "Uji segi empat sama bingkai: almari yang bergoyang bermakna panel tidak masuk sepenuhnya",
      "Semak kit sauh dinding — unit tinggi melebihi 60 cm perlu diikat ke dinding"
    ],
    prevention: [
      "Simpan helaian arahan dan perkakasan tambahan dalam kotak asal untuk masa depan",
      "Ketatkan semula cam lock dan skru selepas dua minggu pertama, apabila kayu mendap",
      "Ikat perabot tinggi ke dinding walaupun pengilang menandakan ia pilihan",
      "Lap tumpahan cepat — kelembapan membengkakkan tepi papan dan merosakkan sambungan"
    ],
    costDetail: "Pemasangan dinilai mengikut saiz dan kerumitan: rak atau meja kecil dari RM100, almari 3 pintu biasanya RM200–RM400, dan unit besar atau banyak dengan sauh dinding RM400–RM600+. Buka semula, pindah atau pembetulan unit yang salah dipasang menambah masa. Kami sebut harga dari foto dan senarai item."
  },
  "rccb-tripping-kl": {
    symptom: "RCCB (Residual Current Circuit Breaker) kerap trip tanpa sebab yang jelas.",
    causes: ["Kebocoran arus ke tanah", "Peranti rosak atau usang", "Wayar rosak atau sentuhan longgar", "Beban berlebihan pada litar"],
    solutions: ["Periksa semua peranti dan wayar", "Ganti RCCB jika rosak", "Baiki wayar yang rosak", "Kurangkan beban pada litar"],
    whenToCall: ["RCCB trip setiap kali hujan", "Trip tanpa sebab yang jelas", "Bau terbakar dari papan suis"],
    localFaq: {
      q: "Adakah RCCB yang kerap trip berbahaya?",
      a: "Ya. Ia menunjukkan ada kebocoran arus yang boleh menyebabkan kejutan elektrik. Perlu diperiksa oleh juruelektrik berlesen."
    }
  },
  "flickering-lights-kl": {
    symptom: "Lampu berkelip-kelip atau redup secara tiba-tiba.",
    causes: ["Sambungan wayar longgar", "Mentol atau LED rosak", "Voltan tidak stabil", "Beban berlebihan pada litar"],
    solutions: ["Periksa dan ketatkan sambungan", "Ganti mentol atau LED", "Periksa voltan bekalan", "Kurangkan beban pada litar"],
    whenToCall: ["Lampu berkelip di seluruh rumah", "Bau terbakar dari suis", "Masalah berlaku selepas hujan"],
    localFaq: {
      q: "Adakah lampu berkelip bermakna ada masalah pendawaian?",
      a: "Boleh jadi. Lampu berkelip boleh disebabkan oleh sambungan longgar, mentol rosak atau masalah voltan."
    }
  },
  "water-heater-not-heating": {
    symptom: "Pemanas air tidak memanaskan air walaupun suis dihidupkan.",
    causes: ["Elemen pemanas rosak", "Termostat gagal", "Tiada bekalan elektrik", "Sedimen tebal di tangki"],
    solutions: ["Periksa bekalan elektrik", "Ganti elemen pemanas", "Ganti termostat", "Bersihkan sedimen dari tangki"],
    whenToCall: ["Tiada air panas sama sekali", "Suis trip setiap kali dihidupkan", "Bau terbakar dari unit"],
    localFaq: {
      q: "Berapa kos untuk menggantikan elemen pemanas air?",
      a: "Kos biasanya antara RM150–RM350 bergantung pada jenama dan model pemanas."
    },
    overview: "Pemanas air segera yang kekal sejuk biasanya ada elemen pemanas terbakar, termostat gagal, penapis masuk tersumbat, atau air lock. Ia pembaikan sensitif keselamatan kerana unit menggabungkan air dan elektrik, jadi ia tidak boleh dibuka oleh bukan juruelektrik.",
    diyChecks: [
      "Periksa suis pengasing dan pemutus yang membekalkan pemanas",
      "Sahkan peralatan lain pada litar sama masih berfungsi",
      "Periksa sama ada aliran air lebih lemah daripada biasa (penapis tersumbat)",
      "Jangan buka unit — elemen dan pendawaian hidup"
    ],
    prevention: [
      "Periksa elemen dan termostat setiap 2 tahun",
      "Bersihkan penapis masuk apabila aliran menurun",
      "Baiki trip atau kelipan dengan segera",
      "Ganti unit pada hujung jangka hayat"
    ],
    costDetail: "Penggantian elemen ialah hujung rendah (dari RM150). Termostat gagal atau penggantian unit penuh naik ke RM680. Kami sebut harga alat ganti dan upah sebelum mula, dan sentiasa asingkan air dan kuasa dahulu.",
  },
  "ceiling-fan-wobbling": {
    symptom: "Kipas siling bergetar atau bergoyang semasa berputar.",
    causes: ["Bilah tidak seimbang", "Skr u pemasangan longgar", "Motor rosak", "Pemasangan tidak rata"],
    solutions: ["Periksa dan ketatkan semua skru", "Seimbangkan bilah dengan kit seimbang", "Ganti motor jika perlu", "Pastikan pemasangan rata"],
    whenToCall: ["Getaran sangat kuat", "Bunyi pelik dari motor", "Kipas hampir jatuh"],
    localFaq: {
      q: "Bolehkah anda membaiki kipas siling yang bergetar?",
      a: "Ya. Kami boleh menyeimbangkan bilah, mengetatkan skru atau menggantikan motor dalam masa 45–90 minit."
    },
    overview: "Kipas siling yang bergegar biasanya tidak seimbang — bilah tidak sejajar, kurungan pemasangan longgar, atau kipas digantung pada cangkuk siling plaster yang tidak diperkukuh. Jika dibiarkan, pergerakan melonggarkan pemasangan dan boleh merosakkan siling.",
    diyChecks: [
      "Periksa semua skru bilah ketat dan bilah tidak bengkok",
      "Bersihkan habuk pada bilah — ia mengubah berat bilah",
      "Sahkan kipas tidak bergegar ketika kelajuan rendah",
      "Lihat canopy atau kurungan pemasangan longgar di siling"
    ],
    prevention: [
      "Ketatkan skru bilah setiap 6 bulan",
      "Guna cangkuk kipas diperkukuh, terutama pada siling plaster",
      "Bersihkan bilah secara berkala untuk elak ketidakseimbangan",
      "Periksa bearing pada bunyi luar biasa pertama"
    ],
    costDetail: "Pengimbangan bilah dan pengetatan kurungan ialah hujung rendah (dari RM90). Motor haus atau cangkuk diperkukuh yang tiada lebih mahal, sehingga RM380 atau ganti kipas. Kami sahkan di tapak.",
  },
  "hollow-tiles-floor": {
    symptom: "Jubin lantai berbunyi kosong apabila diketuk, menunjukkan tidak melekat dengan baik.",
    causes: ["Pemasangan jubin tidak betul", "Lantai tidak rata", "Mortar tidak mencukupi", "Jubin besar tanpa sokongan"],
    solutions: ["Kikis jubin yang longgar", "Ratakan lantai dengan mortar", "Pasang semula dengan mortar yang betul", "Gunakan jubin yang lebih kecil jika perlu"],
    whenToCall: ["Ramai jubin longgar", "Lantai tidak rata teruk", "Jubin besar (lebih 60x60cm)"],
    localFaq: {
      q: "Bolehkah jubin yang berbunyi kosong dibaiki tanpa mengganti semua?",
      a: "Ya. Kami boleh mengganti hanya jubin yang longgar dan meratakan lantai di kawasan tersebut."
    }
  },
  "spc-flooring-peeling-edges": {
    symptom: "Tepi lantai SPC mengelupas atau terangkat.",
    causes: ["Pemasangan tidak betul", "Kelembapan tinggi", "Pengembangan haba", "Kualiti lantai rendah"],
    solutions: ["Periksa dan baiki pemasangan", "Pastikan ruang pengembangan mencukupi", "Kurangkan kelembapan", "Ganti bahagian yang rosak"],
    whenToCall: ["Banyak bahagian mengelupas", "Lantai berbunyi ketika berjalan", "Masalah berlaku di seluruh bilik"],
    localFaq: {
      q: "Adakah lantai SPC sesuai untuk kawasan lembap seperti dapur?",
      a: "Ya, jika dipasang dengan betul dan ada ruang pengembangan yang mencukupi. Kelembapan tinggi boleh menyebabkan masalah jika tidak dikawal."
    },
    overview: "Tepi SPC atau vinil yang terangkat hampir selalu berpunca daripada kelembapan atau pergerakan — subfloor tidak kering atau tidak rata, jurang pengembangan terlalu ketat, atau papan dipasang di bawah perabot berat. Penyelesaiannya ialah membetulkan punca, bukan gam semula papan, jika tidak ia akan terangkat lagi.",
    diyChecks: [
      "Tekan tepi yang terangkat — adakah air atau lembapan muncul?",
      "Periksa sama ada skirting menyemat papan dan menghilangkan jurang pengembangan",
      "Cari tanda lembap di dinding, pintu atau dapur",
      "Perhatikan sama ada yang terangkat satu papan atau keseluruhan barisan"
    ],
    prevention: [
      "Sentiasa uji kelembapan subfloor sebelum pemasangan",
      "Tinggalkan jurang pengembangan yang betul di dinding",
      "Guna pad felt di bawah perabot berat",
      "Lap tumpahan segera, terutama di sambungan"
    ],
    costDetail: "Pasang semula beberapa papan ialah hujung rendah (dari RM120). Jika subfloor perlu dikeringkan, diratakan atau diberi lapisan kalis lembapan, kerja naik ke RM950. Kami periksa subfloor dahulu supaya pembaikan benar-benar tahan.",
  },
  "clogged-gutter-leaking": {
    symptom: "Longkang bumbung tersumbat menyebabkan air melimpah dan meresap ke dinding.",
    causes: ["Daun dan kotoran terkumpul", "Longkang bengkok atau rosak", "Tiada penutup longkang", "Hujan lebat melebihi kapasiti"],
    solutions: ["Bersihkan longkang secara berkala", "Pasang penutup longkang", "Baiki atau ganti longkang yang rosak", "Pastikan saliran air hujan betul"],
    whenToCall: ["Air melimpah setiap hujan", "Dinding menjadi lembap", "Longkang rosak teruk"],
    localFaq: {
      q: "Berapa kerap longkang bumbung perlu dibersihkan?",
      a: "Kami sarankan membersihkan longkang sekurang-kurangnya 2 kali setahun, atau lebih kerap jika ada pokok berhampiran."
    },
    overview: "Gutter melimpah dalam hujan lebat Malaysia apabila daun dan serpihan menyumbat saluran atau paip turun, dan bahagian yang melendut membiarkan air bertakung dan bukannya mengalir. Limpahan kemudian mengalir turun faschia dan dinding, dan boleh meresap masuk ke siling.",
    diyChecks: [
      "Dari aras tanah, lihat air melimpah di tepi gutter ketika hujan",
      "Periksa tumbuhan, daun atau lumut tumbuh dalam saluran",
      "Cari kurungan gutter yang melendut atau tertanggal",
      "Bersihkan penyumbatan yang kelihatan di lubang paip turun"
    ],
    prevention: [
      "Bersihkan gutter sebelum dan selepas setiap monsun",
      "Pasang pengadang daun jika pokok menaungi bumbung",
      "Ketatkan semula kurungan apabila gutter mula melendut",
      "Potong dahan yang menggugurkan daun ke bumbung"
    ],
    costDetail: "Pembersihan dan pelarasan kecil ialah hujung rendah (dari RM280). Mengganti bahagian melendut, membaiki faschia atau menambah pengadang naik ke RM1,200. Kami sebut harga selepas pemeriksaan aras bumbung.",
  },
  "kitchen-cabinet-door-misaligned": {
    symptom: "Pintu kabinet dapur tidak sejajar, sukar ditutup atau terbuka sendiri.",
    causes: ["Engsel longgar atau rosak", "Kabinet tidak rata", "Pintu bengkok", "Skru longgar"],
    solutions: ["Ketatkan atau ganti engsel", "Laraskan penjajaran pintu", "Ratakan kabinet jika perlu", "Ganti pintu jika rosak teruk"],
    whenToCall: ["Banyak pintu tidak sejajar", "Kabinet tidak rata teruk", "Pintu rosak"],
    localFaq: {
      q: "Bolehkah anda melaraskan pintu kabinet yang tidak sejajar?",
      a: "Ya. Kami boleh melaraskan engsel dan penjajaran dalam masa 30–60 minit untuk kebanyakan kes."
    },
    overview: "Pintu dapur yang tergantung tidak rata atau tidak mahu tertutup biasanya engsel haus atau kabinet yang beralih dengan kelembapan dan beban. Ia cepat dibaiki pada engsel, tetapi jika dibiarkan pintu bergesel, engsel lebih cepat haus, dan cangkuk tidak lagi memegang.",
    diyChecks: [
      "Periksa engsel mana yang longgar dan ketatkan skrunya",
      "Lihat sama ada pintu tersangkut pada pintu sebelah atau bingkai",
      "Uji aksi soft-close — damper mati menyebabkan pintu menghentak",
      "Periksa aras barisan kabinet untuk pergerakan bingkai"
    ],
    prevention: [
      "Ketatkan skru engsel semasa membersih dapur",
      "Ganti damper haus sebelum pintu mula menghentak",
      "Jangan gantung barang berat pada muka pintu",
      "Kekalkan kelembapan dapur stabil"
    ],
    costDetail: "Pelarasan engsel dan ganti damper ialah hujung murah (dari RM90). Mengukuhkan kabinet yang beralih atau mengganti banyak engsel lebih mahal. Kami sebut harga selepas memeriksa sama ada pelarasan atau pergerakan bingkai.",
  },
  "flickering-downlights": {
    symptom: "Downlight berkelip-kelip atau tidak menyala dengan stabil.",
    causes: ["Driver LED rosak", "Sambungan longgar", "Mentol atau LED tidak serasi", "Voltan tidak stabil"],
    solutions: ["Ganti driver atau LED", "Periksa dan ketatkan sambungan", "Gunakan mentol yang serasi", "Periksa voltan bekalan"],
    whenToCall: ["Banyak downlight berkelip", "Bau terbakar dari downlight", "Masalah berlaku di seluruh rumah"],
    localFaq: {
      q: "Bolehkah downlight yang berkelip dibaiki tanpa mengganti keseluruhan?",
      a: "Ya. Dalam kebanyakan kes kami hanya perlu mengganti driver atau LED yang rosak."
    }
  },
  "plaster-ceiling-cracking-joints": {
    symptom: "Sambungan siling plaster retak di sepanjang garis sambungan.",
    causes: ["Pergerakan struktur", "Papan plaster tidak dipasang dengan betul", "Kelembapan menyebabkan pengembangan", "Usia rumah"],
    solutions: ["Bersihkan retak dan sapukan pita mesh", "Gunakan compound elastik", "Skim dan cat semula", "Periksa punca pergerakan"],
    whenToCall: ["Retak semakin lebar", "Siling kendur di kawasan retak", "Retak muncul semula selepas dibaiki"],
    localFaq: {
      q: "Adakah retak di sambungan siling plaster serius?",
      a: "Biasanya tidak serius jika hanya kosmetik. Walau bagaimanapun, jika retak lebar atau berulang, ia mungkin menunjukkan pergerakan struktur."
    }
  },
  "peeling-skim-coat": {
    symptom: "Lapisan skim coat mengelupas atau retak.",
    causes: ["Permukaan tidak bersih sebelum skim", "Kelembapan tinggi", "Campuran skim tidak betul", "Lapisan terlalu tebal"],
    solutions: ["Kikis lapisan yang longgar", "Bersihkan permukaan dengan betul", "Sapukan skim baharu dengan nisbah yang betul", "Biarkan kering sepenuhnya sebelum mengecat"],
    whenToCall: ["Banyak kawasan mengelupas", "Dinding lembap", "Masalah berlaku selepas hujan"],
    localFaq: {
      q: "Bolehkah skim coat yang mengelupas dibaiki tanpa mengganti keseluruhan dinding?",
      a: "Ya. Kami boleh mengikis bahagian yang rosak, membersihkan permukaan dan menyapu skim baharu di kawasan tersebut."
    },
    overview: "Skim coat yang berhabuk atau mengelupas selepas mengecat biasanya telah hilang ikatan — dinding berdebu, bancuhan terlalu cair, atau dicat sebelum sembuh sepenuhnya. Skim semula di atas lapisan gagal tanpa membetulkan permukaan hanya akan mengelupas lagi.",
    diyChecks: [
      "Gosok permukaan — jika kapur tertanggal, ikatan telah gagal",
      "Periksa sama ada pengelupasan setempat atau di seluruh dinding",
      "Cari lembap atau kondensasi di belakang kawasan gagal",
      "Uji lekatan cat dengan pita pada tompok yang tidak terjejas"
    ],
    prevention: [
      "Sentiasa primer pada skim yang bersih dan sembuh sebelum mengecat",
      "Guna agen ikatan pada dinding licin atau yang pernah dicat",
      "Biarkan skim sembuh sepenuhnya (7–14 hari) sebelum menghias",
      "Kawal pengudaraan dan kelembapan semasa proses sembuh"
    ],
    costDetail: "Kikis dan skim semula kawasan kecil ialah hujung rendah (dari RM120). Skim semula seluruh dinding dan hiasan semula lebih mahal. Kami sahkan kawasan gagal dan substrat sebelum sebut harga.",
  },
  "epoxy-floor-yellowing": {
    symptom: "Lantai epoxy bertukar warna menjadi kuning atau pudar.",
    causes: ["Pendedahan UV", "Pembersihan dengan bahan kimia keras", "Kualiti epoxy rendah", "Usia lantai"],
    solutions: ["Sapukan lapisan pelindung UV", "Gunakan pembersih yang sesuai", "Ganti dengan epoxy berkualiti tinggi", "Elakkan pendedahan matahari langsung"],
    whenToCall: ["Warna berubah di seluruh lantai", "Lantai menjadi licin atau melekit", "Masalah berlaku dalam masa kurang dari 2 tahun"],
    localFaq: {
      q: "Bolehkah lantai epoxy yang bertukar warna dibaiki?",
      a: "Dalam kebanyakan kes kami boleh mengisar permukaan dan menyapu lapisan baharu. Jika kerosakan teruk, mungkin perlu ganti keseluruhan."
    },
    overview: "Kekuningan pada lantai epoksi baharu hampir selalu berpunca daripada pendedahan UV pada topcoat yang tidak stabil UV — biasa dengan resin aromatik yang digunakan di dalam kemudian terdedah cahaya matahari. Ia tidak bermakna lantai gagal, tetapi ia akan terus menjadi lebih teruk sehingga permukaan disalut semula dengan kemasan stabil UV.",
    diyChecks: [
      "Perhatikan kawasan mana yang kekuningan — biasanya hanya zon menghadap matahari",
      "Uji sama ada permukaan masih keras atau telah lembut atau melekit",
      "Periksa kesan perabot atau tumpahan kimia di kawasan terjejas",
      "Elak pelarut keras sehingga jenis kemasan dikenal pasti"
    ],
    prevention: [
      "Tentukan topcoat PU alifatik pada mana-mana kawasan terdedah matahari",
      "Guna langsir, bidai atau filem tingkap pada tingkap cahaya terus",
      "Jauhkan lantai daripada kimia kuat",
      "Salut semula sebelum kekuningan meresap dalam"
    ],
    costDetail: "Salut semula dengan topcoat PU stabil UV biasanya di separuh bawah julat RM280–RM1,800 untuk kawasan kecil; pasir penuh dan salut semula lantai besar lebih mahal. Kami sahkan jenis resin dan keluasan sebelum sebut harga.",
  },
  "wardrobe-door-not-closing": {
    symptom: "Pintu almari tidak tertutup dengan betul atau terbuka sendiri.",
    causes: ["Engsel tidak sejajar", "Pintu bengkok", "Magnet atau latch rosak", "Almari tidak rata"],
    solutions: ["Laraskan engsel", "Ganti magnet atau latch", "Ratakan almari", "Ganti pintu jika perlu"],
    whenToCall: ["Banyak pintu tidak sejajar", "Almari tidak rata teruk", "Pintu rosak"],
    localFaq: {
      q: "Bolehkah anda melaraskan pintu almari yang tidak sejajar?",
      a: "Ya. Kami boleh melaraskan engsel dan penjajaran dalam masa 30–60 minit untuk kebanyakan kes."
    },
    overview: "Pintu almari yang bergesel atau tidak mahu tutup rata biasanya tidak paras — bingkai mendap, engsel haus, atau rak berat menarik kabinet keluar segi. Pelarasan kecil biasanya menyelesaikannya, tetapi jika diabaikan ia menghauskan engsel dan boleh merekah tepi pintu.",
    diyChecks: [
      "Buka dan tutup setiap pintu perlahan untuk lihat di mana ia tersangkut dahulu",
      "Periksa skru engsel dan ketatkan yang longgar",
      "Guna aras spirit di atas bingkai",
      "Ringankan rak yang terlalu berat jika pintu mula melendut"
    ],
    prevention: [
      "Jangan lebih muatkan rak atas",
      "Ketatkan skru engsel semasa membersih",
      "Laraskan engsel daripada memaksa pintu yang meleding",
      "Kekalkan kelembapan stabil untuk kurangkan pergerakan kayu"
    ],
    costDetail: "Pelarasan dan penjajaran engsel ialah hujung murah (dari RM120). Pintu kayu meleding atau kerja meratakan bingkai lebih mahal. Kami sebut harga selepas memeriksa sama ada kerja pelarasan atau kabinet itu sendiri telah beralih.",
  },
  "door-scraping-floor": {
    symptom: "Pintu mengikis lantai semasa dibuka atau ditutup.",
    causes: ["Engsel longgar atau rosak", "Lantai tidak rata", "Pintu bengkok", "Engsel tidak sesuai"],
    solutions: ["Ketatkan atau ganti engsel", "Laraskan ketinggian pintu", "Ratakan lantai jika perlu", "Ganti engsel dengan yang lebih sesuai"],
    whenToCall: ["Pintu sukar dibuka", "Lantai rosak teruk", "Masalah di beberapa pintu"],
    localFaq: {
      q: "Bolehkah anda membaiki pintu yang mengikis lantai?",
      a: "Ya. Kami boleh melaraskan engsel, mengurangkan ketinggian pintu atau menggantikan engsel dalam masa 30–60 minit."
    },
    overview: "Pintu yang menggeser lantai biasanya membengkak akibat kelembapan, jatuh pada engsel longgar, atau kemasan lantai telah menaikkannya. Jika dibiarkan, geseran menghauskan bahagian bawah pintu, menegangkan engsel, dan akhirnya selak tidak sejajar sehingga pintu tidak lagi menutup dengan selamat.",
    diyChecks: [
      "Periksa skru engsel dan ketatkan yang longgar",
      "Lihat sama ada jurang sekata di sekeliling atau ketat di satu sudut",
      "Periksa bengkak atau kesan lembap di tepi bawah",
      "Cuba selak — jika ia terlepas strike plate, pintu telah jatuh"
    ],
    prevention: [
      "Guna penyahlembap atau kipas di bilik yang sangat lembap",
      "Ketatkan skru engsel dua kali setahun",
      "Guna door sweep dan elak memotong terlalu banyak di bahagian bawah",
      "Cat atau sapu pengedap pada tepi bawah untuk perlahan penyerapan lembapan"
    ],
    costDetail: "Pemangkasan dan pelarasan engsel ialah hujung murah (dari kira-kira RM80). Pintu lebih berat, pelarasan semula kunci digital, atau kerja pada pintu tahan api lebih mahal. Kami sebut harga selepas memeriksa sama ada pintu perlu diketam atau sekadar kerja engsel dan strike plate.",
  },
  "sliding-window-stuck": {
    symptom: "Tingkap gelangsar tersangkut atau sukar digerakkan.",
    causes: ["Rel kotor atau rosak", "Roda rosak", "Tingkap tidak sejajar", "Serpihan tersangkut di rel"],
    solutions: ["Bersihkan rel", "Ganti roda", "Laraskan penjajaran", "Buang serpihan dari rel"],
    whenToCall: ["Tingkap tidak boleh digerakkan", "Roda rosak teruk", "Masalah di beberapa tingkap"],
    localFaq: {
      q: "Bolehkah anda membaiki tingkap gelangsar yang tersangkut?",
      a: "Ya. Kami boleh membersihkan rel, menggantikan roda atau melaraskan penjajaran dalam masa 30–60 minit."
    },
    overview: "Tingkap gelangsar yang tersangkut biasanya berpunca daripada roller haus, landasan kotor, atau bingkai yang sudah beralih bersama bangunan. Ia bukan sekadar menyusahkan — tingkap yang tidak boleh ditutup atau dikunci dengan betul adalah risiko keselamatan dan kebocoran cuaca, dan memaksanya boleh menyebabkan daun tingkap terkeluar dari landasan.",
    diyChecks: [
      "Vakum landasan dan lap kedua-dua rel dengan kain kering untuk buang pasir",
      "Periksa sama ada roller menyentuh landasan dengan rata atau sudah haus leper",
      "Uji kunci ketika tingkap tertutup — kunci ketat selalunya bermakna daun telah jatuh",
      "Jangan guna minyak: ia menarik habuk dan memburukkan landasan aluminium"
    ],
    prevention: [
      "Bersihkan landasan setiap 3–6 bulan",
      "Guna semburan silikon kering (bukan gris) pada roller",
      "Tutup perlahan-lahan dan elak menghentak daun",
      "Ganti roller sebaik sahaja ada bunyi mengisar"
    ],
    costDetail: "Kebanyakan call-out ialah kerja roller atau landasan ringkas (RM90–RM420), tetapi jika bingkai sudah tidak segi atau kaca perlu ditanggalkan untuk sampai ke roller, harga akan naik. Kami sahkan angka tepat selepas melihat tingkap dan jenis roller.",
  },
  "smart-lock-not-working": {
    symptom: "Kunci pintar tidak berfungsi, bateri cepat habis atau tidak dapat dikunci.",
    causes: ["Bateri lemah", "Sambungan Bluetooth/WiFi lemah", "Perisian perlu dikemas kini", "Kunci rosak"],
    solutions: ["Ganti bateri", "Periksa sambungan rangkaian", "Kemas kini perisian", "Reset atau ganti kunci"],
    whenToCall: ["Kunci tidak berfungsi sama sekali", "Bateri habis dalam masa kurang dari 1 bulan", "Masalah berlaku selepas hujan"],
    localFaq: {
      q: "Berapa lama bateri kunci pintar biasanya bertahan?",
      a: "Bateri biasanya bertahan 6–12 bulan bergantung pada kekerapan penggunaan dan jenama."
    },
    overview: "Kunci pintar yang berhenti bertindak balas boleh menyebabkan anda terkunci di luar, atau lebih teruk, pintu tidak berkunci tanpa anda sedari. Kebanyakan kegagalan berpunca daripada bateri, motor, atau masalah pairing, tetapi kunci yang cepat menghabiskan bateri selalunya tidak sejajar dan bergesel dengan bolt pintu pada setiap kitaran.",
    diyChecks: [
      "Ganti bateri dengan yang baharu dan periksa sesentuh terminal",
      "Sahkan aplikasi dan firmware kunci adalah versi terkini",
      "Periksa bolt bergerak bebas ketika pintu terbuka",
      "Sejajarkan semula strike plate jika bolt bergesel semasa mengunci"
    ],
    prevention: [
      "Guna bateri alkali atau litium berkualiti dan tukar mengikut jadual",
      "Simpan kunci fizikal atau kod sandaran sebagai langkah keselamatan",
      "Lincirkan bolt dan kekalkan strike plate sejajar",
      "Elak memaksa pemegang ketika motor masih berpusing"
    ],
    costDetail: "Baiki bateri dan re-pairing ialah hujung murah (dari kira-kira RM150). Modul motor rosak atau kunci gantian menolak kos ke RM680 atau lebih, bergantung pada jenama dan model. Kami sebut harga alat ganti sebelum mengganti apa-apa.",
  },
  "shower-screen-leaking": {
    symptom: "Skrin pancuran mandi bocor di bahagian bawah atau sisi.",
    causes: ["Sealant gagal", "Kaca retak atau bengkok", "Rel tidak rata", "Longkang tersumbat"],
    solutions: ["Ganti sealant", "Ganti kaca jika retak", "Laraskan rel", "Bersihkan longkang"],
    whenToCall: ["Air bocor ke lantai bilik mandi", "Kaca retak", "Masalah berlaku di beberapa skrin"],
    localFaq: {
      q: "Bolehkah anda membaiki skrin pancuran yang bocor tanpa mengganti keseluruhan?",
      a: "Ya. Dalam kebanyakan kes kami hanya perlu menggantikan sealant dan melaraskan rel."
    },
    overview: "Air bertakung di luar cermin pancuran tanpa bingkai hampir selalu berpunca daripada seal atau masalah paras, bukan cermin pecah. Seal bawah haus leper, sambungan silikon terlepas, atau cermin dipasang condong sedikit ke arah yang salah sehingga air mengalir keluar dan bukannya kembali ke longkang.",
    diyChecks: [
      "Periksa seal bawah untuk keleperan, retak atau jurang di hujung",
      "Buka pancuran perlahan dan perhatikan di mana air keluar dahulu",
      "Uji sama ada jubin lantai condong ke arah longkang atau menjauhinya",
      "Periksa sudut silikon untuk pengelupasan atau kulat hitam"
    ],
    prevention: [
      "Lapkan kaca dan seal bawah selepas setiap mandian",
      "Ganti seal lap sebaik sahaja haus",
      "Pastikan longkang tidak tersumbat supaya air tidak naik",
      "Sapu semula silikon sudut setiap 1–2 tahun"
    ],
    costDetail: "Ganti seal bawah dan silikon ialah pembaikan biasa di hujung rendah julat RM180–RM750. Jika kecerunan dulang salah, kami mungkin perlu ratakan semula cermin atau tambah jalur ambang, yang menambah kos. Kami sahkan selepas mengukur cermin dan memeriksa kecerunan.",
  },
  "cctv-not-recording": {
    symptom: "Kamera CCTV tidak merakam atau rakaman tidak disimpan.",
    causes: ["Kad SD penuh atau rosak", "Sambungan internet lemah", "Perisian perlu dikemas kini", "Kamera rosak"],
    solutions: ["Format atau ganti kad SD", "Periksa sambungan internet", "Kemas kini perisian", "Reset atau ganti kamera"],
    whenToCall: ["Kamera tidak merakam sama sekali", "Rakaman hilang secara tiba-tiba", "Masalah berlaku di beberapa kamera"],
    localFaq: {
      q: "Berapa lama rakaman CCTV biasanya disimpan?",
      a: "Bergantung pada saiz kad SD dan tetapan. Kad 128GB biasanya boleh menyimpan 7–14 hari rakaman berterusan."
    },
    overview: "Kamera yang menunjukkan imej langsung tetapi tiada rakaman biasanya menunjuk kepada storan — cakera keras rosak, jadual penuh atau salah konfigurasi, atau bekalan kuasa yang jatuh ketika beban. Kerana imej langsung berfungsi, masalah mudah terlepas sehingga anda benar-benar memerlukan rakaman itu.",
    diyChecks: [
      "Sahkan perakam masih ada cakera keras yang berfungsi dalam menu storan",
      "Semak jadual rakaman dan sama ada pengesanan gerakan dihidupkan",
      "Sahkan tarikh dan masa betul — jam salah merosakkan jadual",
      "Uji bekalan kuasa dan kabel rangkaian ke setiap kamera"
    ],
    prevention: [
      "Guna cakera keras gred pengawasan, bukan cakera desktop",
      "Tetapkan perakam menimpa rakaman lama secara automatik",
      "Letak perakam di tempat berventilasi",
      "Semak satu klip sebulan sekali untuk kesan kegagalan senyap awal"
    ],
    costDetail: "Pembaikan tetapan atau kuasa ialah hujung murah (dari RM180). Cakera keras atau NVR rosak menolak kos ke RM850 atau lebih dengan penggantian gred pengawasan. Kami cuba pulihkan data dari cakera lama sebelum menukarnya.",
  },
  "autogate-not-closing": {
    symptom: "Pagar automatik tidak tertutup atau terbuka sendiri.",
    causes: ["Sensor rosak", "Motor lemah", "Sambungan wayar longgar", "Kekotoran di rel"],
    solutions: ["Periksa dan bersihkan sensor", "Periksa motor dan gear", "Ketatkan sambungan wayar", "Bersihkan rel"],
    whenToCall: ["Pagar tidak bergerak sama sekali", "Bunyi pelik dari motor", "Masalah berlaku setiap kali hujan"],
    localFaq: {
      q: "Bolehkah anda membaiki pagar automatik yang tidak tertutup?",
      a: "Ya. Kami boleh membaiki sensor, motor atau sambungan wayar dalam masa 1–2 jam."
    },
    overview: "Autogate yang boleh buka tetapi tidak boleh tutup biasanya ada suis had rosak, sensor keselamatan tersekat, atau kapasitor motor hampir mati. Ia masalah keselamatan dan juga kemudahan — pagar tersekat terbuka semalaman mendedahkan seluruh hartanah.",
    diyChecks: [
      "Periksa lensa photocell bersih dan sejajar",
      "Buang daun atau serpihan di landasan",
      "Perhatikan sama ada pagar berhenti di titik sama setiap kali",
      "Dengar motor berdengung tanpa menggerakkan pagar"
    ],
    prevention: [
      "Pastikan landasan bersih dan lincirkan engsel setiap suku tahun",
      "Bersihkan lensa photocell setiap bulan",
      "Servis motor dan periksa kapasitor setiap tahun",
      "Uji pelepas manual setiap beberapa bulan"
    ],
    costDetail: "Pembaikan suis had atau sensor ialah hujung rendah (dari RM250). Kapasitor atau papan kawalan rosak menolak ke RM1,200. Kami diagnosis di tapak dan sahkan harga alat ganti sebelum mengganti apa-apa.",
  },
  "rusting-window-grille": {
    symptom: "Pagar tingkap berkarat dan cat mengelupas.",
    causes: ["Pendedahan hujan dan kelembapan", "Cat asal tidak tahan cuaca", "Karat dari dalam besi", "Tiada rawatan anti-karat"],
    solutions: ["Kikis karat sehingga ke logam bersih", "Sapukan primer anti-karat", "Cat dengan cat tahan cuaca", "Ganti jika karat teruk"],
    whenToCall: ["Karat merebak di seluruh pagar", "Pagar rosak teruk", "Karat muncul semula dalam masa kurang dari 1 tahun"],
    localFaq: {
      q: "Berapa lama pagar tingkap biasanya tahan sebelum berkarat?",
      a: "Dengan rawatan anti-karat yang betul, pagar boleh tahan 5–10 tahun. Tanpa rawatan, karat boleh muncul dalam masa 1–2 tahun."
    },
    overview: "Karat pada pagar tingkap atau pintu pagar jarang bermula di permukaan — lembapan masuk melalui calar, hujung potongan dan sambungan kimpalan, kemudian merebak di bawah cat. Dalam kelembapan Malaysia dan udara pantai, ini boleh berlaku dalam beberapa bulan walaupun pagar baru dicat, kerana logam tidak disiapkan dengan primer yang betul atau cat disapu terus di atas karat lama.",
    diyChecks: [
      "Ketuk perlahan palang pagar dengan pemegang pemutar skru — bunyi pekak dan berkapur bermakna karat telah merebak di bawah cat",
      "Periksa hujung potongan, sambungan kimpalan dan lubang skru — tempat salutan paling nipis",
      "Kikis satu titik sehingga logam bersih untuk melihat sama ada karat di permukaan atau sudah menebuk dalam",
      "Cat semula tanpa buang karat akan gagal semula dalam beberapa bulan sahaja"
    ],
    prevention: [
      "Pilih powder coating atau galvanizing celup panas untuk pagar baharu, terutama dalam 10 km dari pantai",
      "Sentuh calar dan hujung potongan dengan primer anti-karat sebaik sahaja muncul",
      "Jauhkan pokok dan barang dari pagar supaya udara dapat mengeringkan logam selepas hujan",
      "Basuh garam dan kotoran dengan air biasa beberapa kali setahun"
    ],
    costDetail: "Kikisan setempat, rust converter dan cat semula satu pagar tingkap bermula sekitar RM150. Sandblasting penuh, primer semula dan cat semula semua pagar rumah naik ke RM680 dan ke atas; powder coating atau penggantian bahagian yang berkarat teruk lebih mahal. Kami sebut harga selepas memeriksa kedalaman karat."
  },
  // ── Extra problem pages (from problem-data-extra.ts) ──────────────────
  "yellowing-white-walls": {
    symptom: "Dinding putih bertukar krim, kuning atau kotor selepas 12–36 bulan walaupun tidak disentuh.",
    causes: ["Cat emulsi murah dengan kestabilan UV yang rendah", "Asap rokok atau deposit gris dapur", "Pendedahan matahari pada dinding menghadap barat", "Sealer kuning meresap melalui lapisan atas"],
    solutions: ["Bersihkan dinding dengan detergen lembut untuk membuang lapisan permukaan", "Sapukan primer penyekat kotoran sebelum mengecat semula", "Cat semula dengan akrilik premium stabil-UV dan VOC rendah", "Tambah pengudaraan di dapur dan kawasan merokok"],
    whenToCall: ["Kuning kembali dalam masa 12 bulan selepas mengecat", "Pembersihan tidak memulihkan putih asal", "Hanya dinding tertentu (berhampiran dapur atau tingkap) terjejas"],
    localFaq: {
      q: "Mengapa dinding putih saya cepat bertukar kuning?",
      a: "Biasanya gabungan cat murah (kestabilan UV rendah), gris dapur di udara, asap rokok dan pendedahan matahari. Cat akrilik premium lebih tahan putih."
    }
  },
  "paint-cracking-hairline-walls": {
    symptom: "Retak halus seperti labah-labah muncul pada dinding yang dicat, sering di sekitar bingkai tingkap, pintu atau persimpangan siling-dinding.",
    causes: ["Penetapan bangunan biasa (teruk dalam 2–5 tahun pertama)", "Skim-coat terlalu tebal atau terlalu cepat", "Pergerakan suhu dan kelembapan", "Pengecutan plaster di bawah"],
    solutions: ["Lebarkan retak sedikit dan isi dengan pengisi akrilik fleksibel", "Sapukan pita gentian kaca untuk retak lebih besar", "Skim atas pembaikan dengan lapisan plaster nipis", "Primer dan cat semula dengan cat atas akrilik fleksibel"],
    whenToCall: ["Retak lebih lebar dari rambut (1 mm+)", "Retak yang sama terbuka semula selepas dicat", "Retak berjalan secara pepenjuru merentasi kawasan besar"],
    localFaq: {
      q: "Adakah retak halus bermakna rumah saya rosak struktur?",
      a: "Hampir tidak pernah. Retak kosmetik adalah penetapan biasa dan pergerakan cat — retak struktur sebenar biasanya lebih lebar (5 mm+), pepenjuru dan semakin teruk."
    }
  },
  "leaking-bathroom": {
    symptom: "Lantai di bawah bilik mandi tingkat atas basah atau lembap, atau dinding bersebelahan menunjukkan kesan perang dan cat berbuih.",
    causes: ["Membran kalis air lantai bilik mandi retak", "Silikon gagal di sekitar skrin mandi atau tab mandi", "Paip tersembunyi bocor di dalam dinding", "Grout jubin rosak membenarkan air masuk ke papak"],
    solutions: ["Ujian tekanan paip untuk kenal pasti kebocoran paip atau papak", "Grout PU papak konkrit dari bawah (tanpa pecah jubin)", "Silikon semula skrin mandi dan sendi tab mandi", "Membran semula penuh dengan pecah jubin (kes teruk)"],
    whenToCall: ["Siling di bawah bilik mandi menitis", "Cat dinding bersebelahan bilik mandi berbuih", "Tompok basah semakin besar minggu demi minggu"],
    localFaq: {
      q: "Adakah saya perlu pecahkan jubin untuk membaiki kebocoran bilik mandi?",
      a: "Biasanya tidak. Dalam kebanyakan kes kami boleh mengedap kebocoran dari bawah menggunakan grouting PU bertekanan tinggi — tanpa kerosakan jubin."
    }
  },
  "low-water-pressure": {
    symptom: "Aliran shower lemah, paip menitis, atau pemanas air sukar berfungsi kerana tekanan air masuk terlalu rendah.",
    causes: ["Penapis inlet tersumbat pada pemanas air atau kepala shower", "Paip galvanis berkarat mengecilkan diameter aliran", "Pam penggalak atau tangki tekanan gagal", "Masalah bekalan utama SYABAS (jarang tetapi mungkin)"],
    solutions: ["Bersihkan atau ganti kepala shower dan penapis inlet", "Nyahskala pemanas air", "Gantikan paip berkarat dengan PPR/PEX", "Pasang atau ganti pam penggalak tekanan"],
    whenToCall: ["Hanya satu paip terjejas (mungkin tersumbat tempatan)", "Seluruh rumah terjejas (mungkin pam atau utama)", "Tekanan turun mendadak selepas kerja berdekatan"],
    localFaq: {
      q: "Perlukah saya pasang pam penggalak?",
      a: "Jika rumah anda 2+ tingkat atau tekanan rendah di tingkat atas, pam penggalak biasanya penyelesaian yang tepat. Pemasangan biasa: RM 900 hingga RM 2,200."
    }
  },
  "clogged-drain": {
    symptom: "Air mengalir perlahan, bertakung di singki atau tab mandi, atau naik semula apabila menggunakan beberapa paip serentak.",
    causes: ["Pembinaan gris dapur di P-trap dan paip mendatar", "Pengkumpulan rambut di perangkap longkang bilik mandi", "Objek asing (tisu basah, produk sanitasi) dalam paip tandas", "Paip rosak atau tenggelam menyebabkan sampah terkumpul"],
    solutions: ["Snake / rod manual perangkap dan paip", "Rawatan longkang berasaskan enzim (selamat untuk paip)", "Jet air bertekanan tinggi (untuk dapur degil)", "Inspeksi kamera + pembaikan paip untuk kerosakan struktur"],
    whenToCall: ["Beberapa longkang naik serentak", "Air naik dari longkang lain apabila flush", "Bau kumbahan di dalam rumah"],
    localFaq: {
      q: "Adakah bahan kimia pembuka longkang selamat untuk paip saya?",
      a: "Bahan kaustik kuat boleh merosakkan sendi PVC lama dan tidak selamat untuk ruang tertutup. Kami cadangkan pembersihan mekanikal ditambah rawatan enzim — lebih selamat dan tahan lama."
    }
  },
  "toilet-not-flushing": {
    symptom: "Tandas flush lemah, tidak mengosongkan mangkuk dalam satu tekan, atau air terus mengalir selepas flush.",
    causes: ["Injap flapper atau mekanisme flush haus", "Rim jet tersumbat di tepi mangkuk", "Sumbatan separa di S-trap atau paip sisa", "Injap isi rosak (pemasangan apung)"],
    solutions: ["Ganti flapper, injap isi atau kartrij dual-flush", "Nyahskala rim jet dengan cuka atau CLR", "Snake S-trap dan paip sisa", "Kit bina semula tangki penuh untuk tandas lama"],
    whenToCall: ["Sudah ganti flapper tetapi masih mengalir", "Aliran air ke mangkuk lemah dari semua arah", "Perlu beberapa flush untuk mengosongkan"],
    localFaq: {
      q: "Bolehkah saya membaiki mekanisme flush sendiri?",
      a: "Mengganti flapper mudah dan boleh dibuat sendiri. Masalah injap isi atau S-trap biasanya memerlukan tukang paip."
    }
  },
  "sagging-ceiling": {
    symptom: "Papan siling nampak kendur, bergelombang atau terasa lembut apabila ditekan.",
    causes: ["Kebocoran air berpanjangan dari atas", "Kelembapan melemahkan papan plaster", "Framing kayu rosak atau reput", "Papan dipasang tidak betul (jarak joist terlalu jauh)"],
    solutions: ["Hentikan punca air terlebih dahulu", "Buang papan rosak dan keringkan kawasan", "Ganti papan plaster baru dan skim sendi", "Primer dan cat semula selepas kering"],
    whenToCall: ["Siling terasa lembut atau span apabila disentuh", "Kenduran semakin ketara", "Kesan air masih aktif"],
    localFaq: {
      q: "Bolehkah siling kendur runtuh?",
      a: "Siling yang sangat lembap dan berat boleh runtuh jika dibiarkan. Jika papan terasa lembut atau air menitis, hubungi tukang segera."
    }
  },
  "ceiling-cornice-crack": {
    symptom: "Retak muncul di antara siling dan dinding, di sepanjang cornice atau L-box.",
    causes: ["Penetapan bangunan menyebabkan pergerakan sendi", "Compound sendi kering dan mengecut", "Pemasangan cornice tidak betul", "Perubahan suhu dan kelembapan bermusim"],
    solutions: ["Buka compound lama di sendi", "Sapukan compound sendi fleksibel baru", "Pasang pita gentian kaca untuk kekuatan", "Cat semula selepas kering"],
    whenToCall: ["Retak terbuka semula setiap kali dicat", "Retak lebih dari 2 mm lebar", "Cornice mula longgar dari dinding"],
    localFaq: {
      q: "Mengapa retak cornice selalu kembali?",
      a: "Kerana pergerakan bangunan semula jadi. Penyelesaian tahan lama memerlukan compound fleksibel dan pita gentian kaca, bukan hanya filler biasa."
    }
  },
  "balcony-leak-condo": {
    symptom: "Air menitis ke unit di bawah dari balkoni, atau dinding dalaman berhampiran balkoni menunjukkan kesan air.",
    causes: ["Membran kalis air balkoni gagal", "Retak pada screed balkoni", "Pintu gelangsar balkoni bocor di ambang", "Saliran balkoni tersumbat"],
    solutions: ["Ujian banjir untuk kenal pasti titik kebocoran", "PU grouting dari bawah jika boleh", "Sapukan membran kalis air baru di atas screed", "Tukar atau baiki sealant pintu gelangsar"],
    whenToCall: ["Jiran di bawah mengadu air menitis", "Dinding dalaman mula berbuih", "Balkoni sentiasa basah selepas hujan"],
    localFaq: {
      q: "Siapa bertanggungjawab untuk kebocoran balkoni kondo?",
      a: "Biasanya pemilik unit (ruang persendirian). Untuk kebocoran dari kawasan bersama, JMB/MC mungkin bertanggungjawab. Semak strata title."
    }
  },
  "concrete-slab-crack-leak": {
    symptom: "Retak pada papak konkrit menyebabkan air hujan atau air guna masuk ke tingkat bawah.",
    causes: ["Konkrit retak kerana pergerakan struktur", "Waterproofing atas papak telah luput", "Tiada membran kalis air yang mencukupi", "Beban berat di atas papak"],
    solutions: ["Isi retak dengan epoxy injection", "PU grouting bertekanan tinggi dari bawah", "Sapukan membran kalis air baru di atas", "Tambah lapisan screed pelindung"],
    whenToCall: ["Retak boleh dilihat pada papak", "Kebocoran berulang selepas hujan lebat", "Waterproofing lama sudah lebih 5 tahun"],
    localFaq: {
      q: "Bolehkah retak konkrit dibaiki secara kekal?",
      a: "Retak struktur boleh distabilkan dengan epoxy injection. Untuk kebocoran aktif, PU grouting adalah kaedah paling berkesan di Malaysia."
    }
  },
  "curtain-track-falling": {
    symptom: "Rel tirai longgar dari siling atau dinding, bracket jatuh, atau tirai terjatuh.",
    causes: ["Skrup ditarik keluar dari drywall", "Bracket dipasang hanya pada plasterboard tanpa anchor", "Beban tirai terlalu berat untuk bracket", "Plaster siling rapuh atau rosak"],
    solutions: ["Tanggalkan bracket lama dan tampal lubang", "Pasang anchor berat atau toggle bolt baru", "Kalihkan bracket ke kedudukan joist atau rasuk", "Pasang semula tirai dengan bracket yang diperkuat"],
    whenToCall: ["Bracket jatuh berulang kali", "Siling terasa rapuh di kawasan pemasangan", "Tirai terlalu berat untuk sistem semasa"],
    localFaq: {
      q: "Berapa kos untuk memasang semula rel tirai?",
      a: "Biasanya RM 150 hingga RM 350 termasuk bracket baru dan anchor, bergantung pada bilangan tingkap dan jenis siling."
    }
  },
  "door-hinge-sagging": {
    symptom: "Pintu tergantung rendah, menggeser lantai, atau engsel nampak longgar atau berkarat.",
    causes: ["Skrup engsel longgar dari penggunaan", "Kayu pintu mengembang kerana kelembapan", "Engsel tidak selari selepas pemasangan", "Bingkai pintu bergerak"],
    solutions: ["Ketatkan atau ganti skrup engsel", "Bersihkan dan minyak engsel", "Ratakan pintu jika menggeser lantai", "Pasang shim pada engsel untuk melaraskan"],
    whenToCall: ["Pintu menggeser lantai dengan kuat", "Engsel berbunyi atau tersangkut", "Pintu tidak boleh ditutup dengan rapat"],
    localFaq: {
      q: "Bolehkah saya betulkan pintu yang tergantung sendiri?",
      a: "Mengkencangkan skrup dan meminyak engsel boleh dilakukan sendiri. Untuk pelarasan bingkai atau shim, lebih baik hubungi handyman."
    }
  },
  "old-condo-full-refurbishment": {
    symptom: "Kondominium lama (15+ tahun) memerlukan pengubahsuaian penuh — lantai, dinding, paip, elektrik dan perabot semuanya telah usang.",
    causes: ["Bahan asal sudah mencapai had jangka hayat", "Reka bentuk lama tidak sesuai dengan gaya hidup semasa", "Paip dan pendawaian elektrik lama tidak selamat", "Jubin, cat dan perabot sudah rosak teruk"],
    solutions: ["Rangka pelan pengubahsuaian menyeluruh", "Ganti paip dan pendawaian elektrik", "Renovasi dapur dan bilik mandi penuh", "Pasang lantai baru, cat dan perabot"],
    whenToCall: ["Unit berusia lebih 15 tahun", "Anda baru membeli kondominium second-hand", "Paip berkarat atau pendawaian lama masih digunakan"],
    localFaq: {
      q: "Berapa kos pengubahsuaian penuh kondominium di KL?",
      a: "Biasanya RM 60,000 hingga RM 150,000+ untuk unit 1,000–1,200 kaki persegi, bergantung pada skop dan kualiti bahan."
    }
  },
  "power-tripping-frequently": {
    symptom: "Elektrik terputus kerap, MCCB/RCCB trip setiap kali menggunakan peralatan tertentu.",
    causes: ["Litar berlebihan (terlalu banyak peralatan pada satu litar)", "Kebocoran arus ke tanah (earth leakage)", "Pendawaian lama atau longgar", "Peralatan rosak menyebabkan litar pintas"],
    solutions: ["Kenal pasti peralatan yang menyebabkan trip", "Imbang beban merentasi litar yang berbeza", "Ganti MCCB/RCCB jika rosak", "Periksa dan baiki pendawaian lama"],
    whenToCall: ["Trip berlaku setiap hari", "Hanya berlaku apabila peralatan tertentu dihidupkan", "Unit lama dengan pendawaian asal"],
    localFaq: {
      q: "Adakah berbahaya jika elektrik selalu trip?",
      a: "Trip adalah mekanisme keselamatan. Jika kerap berlaku, ia menunjukkan masalah yang perlu diperiksa oleh elektrik bertauliah sebelum ia menjadi bahaya."
    }
  },
  "water-heater-cold": {
    symptom: "Pemanas air tidak memanaskan air — air keluar sejuk walaupun sudah menunggu beberapa minit.",
    causes: ["Elemen pemanas rosak atau terbakar", "Termostat gagal atau tidak dikalibrasi", "MCB pemanas air trip", "Pendawaian longgar atau terbakar"],
    solutions: ["Uji elemen pemanas dengan multimeter", "Ganti termostat jika perlu", "Reset atau ganti MCB", "Periksa pendawaian dan sambungan"],
    whenToCall: ["Air sejuk sepenuhnya", "Pemanas berbunyi pelik", "MCB trip setiap kali pemanas dihidupkan"],
    localFaq: {
      q: "Berapa lama pemanas air biasa tahan?",
      a: "Pemanas air penyimpanan biasa tahan 5–8 tahun di Malaysia. Pemanas serta-merta (tankless) tahan 8–12 tahun dengan penyelenggaraan biasa."
    }
  },
  "loose-hollow-tiles": {
    symptom: "Jubin lantai berbunyi berongga apabila diketuk, longgar atau mula terangkat di tepi.",
    causes: ["Perekat jubin tidak melekat dengan baik semasa pemasangan", "Kelembapan di bawah jubin melemahkan pelekat", "Papakan tidak rata menyebabkan ruang kosong", "Beban berat atau hentakan pada jubin"],
    solutions: ["Korek jubin dengan hati-hati", "Bersihkan permukaan dan sapukan pelekat jubin baru", "Pasang semula jubin dan biarkan kering", "Grout semula sendi selepas pelekat kering"],
    whenToCall: ["Jubin berongga di beberapa kawasan", "Jubin mula terangkat", "Bunyi berongga jelas apabila berjalan di atasnya"],
    localFaq: {
      q: "Bolehkah jubin berongga dibaiki tanpa buang semua?",
      a: "Jika hanya beberapa jubin, ya — jubin individu boleh dikeluarkan dan dipasang semula. Tetapi jika lebih 20% berongga, pemasangan semula penuh mungkin diperlukan."
    }
  },
  "cracked-tile-grout": {
    symptom: "Grout di antara jubin retak, hancur atau hilang, meninggalkan celah terbuka.",
    causes: ["Pergerakan struktur atau penetapan bangunan", "Grout berkualiti rendah atau pemasangan buruk", "Kelembapan dan kelembapan melemahkan grout", "Pembersihan dengan bahan kimia keras"],
    solutions: ["Buang grout lama dengan alat grout saw", "Bersihkan celah dan biarkan kering", "Sapukan grout baru yang sesuai", "Tutup dengan pengedap grout selepas kering"],
    whenToCall: ["Grout hilang di beberapa sendi", "Air masuk melalui grout retak", "Grout berubah warna walaupun dibersihkan"],
    localFaq: {
      q: "Bolehkah saya ganti grout sendiri?",
      a: "Untuk kawasan kecil, ya — alat grout saw dan grout baru tersedia di kedai hardware. Untuk keseluruhan bilik mandi, lebih baik serahkan kepada profesional."
    }
  },
  "plaster-ceiling-hairline-crack": {
    symptom: "Retak halus di permukaan siling plaster, sering di sekitar lampu atau di tengah siling.",
    causes: ["Penetapan bangunan biasa dalam 2–5 tahun pertama", "Compound sendi tidak mencukupi atau kering", "Pemasangan pita sendi yang tidak betul", "Pergerakan haba dan kelembapan"],
    solutions: ["Buka compound lama di sepanjang retak", "Sapukan compound baru dengan pita gentian kaca", "Skim dan pasir sehingga rata", "Cat semula selepas kering"],
    whenToCall: ["Retak kelihatan jelas dari bawah", "Retak terbuka semula selepas setiap kali dicat", "Beberapa retak muncul di kawasan berbeza"],
    localFaq: {
      q: "Adakah retak halus siling berbahaya?",
      a: "Retak halus pada plaster biasanya kosmetik dan tidak berbahaya. Ia berlaku secara semula jadi akibat pergerakan bangunan. Retak lebar (5mm+) perlu diperiksa."
    }
  },
  "uneven-wall-surface-skim": {
    symptom: "Dinding nampak bergelombang, tidak rata apabila cahaya jatuh merentasi permukaan, atau terasa tidak licin.",
    causes: ["Plaster asal tidak rata", "Skim-coat lama telah pudar atau rosak", "Pembaikan tampal yang tidak dicampur dengan baik", "Penyusutan tidak sekata pada lapisan plaster"],
    solutions: ["Kikis permukaan lama yang longgar", "Sapukan skim-coat baru dalam lapisan nipis", "Pasir sehingga rata selepas kering", "Primer dan cat semula"],
    whenToCall: ["Cahaya mendedahkan ketidakrataan dinding", "Dinding terasa kasar atau bergelombang", "Cat baru tidak kelihatan rata"],
    localFaq: {
      q: "Berapa kos skim-coat satu bilik?",
      a: "Biasanya RM 400 hingga RM 1,200 untuk satu bilik, bergantung pada luas dinding dan tahap ketidakrataan."
    },
    overview: "Dinding tidak rata ialah masalah kemasan yang tidak boleh diselesaikan dengan cat. Benjol, lekuk dan rabung datang daripada cat bertekstur lama, bertahun-tahun pembaikan tampal, atau plaster yang tidak diratakan — dan ia menjadi jelas apabila warna baharu yang bersih disapu, kerana cat flat memaparkan setiap bayang. Skim coat penuh ialah penyelesaian standard: lapisan nipis plaster ke seluruh dinding, disandarkan licin sebelum mengecat.",
    diyChecks: [
      "Sorot lampu suluh di sepanjang dinding pada sudut rendah — cahaya sisi mendedahkan setiap benjol dan lekuk",
      "Lari pembaris lurus merentasi dinding untuk cari lekuk lebih dalam daripada kira-kira 3 mm",
      "Periksa sama ada ketidakrataan adalah tekstur (cat lama) atau pergerakan (retak, bengkak)",
      "Tekan tampalan yang mencurigakan — kawasan pembaikan longgar atau hampa mesti dibuang sebelum skim"
    ],
    prevention: [
      "Semasa pengubahsuaian, minta skim coat dalam skop kerja cat, bukan 'spot filler'",
      "Guna sealer antara cat lama dan skim baharu supaya plaster melekat dengan betul",
      "Baiki masalah lembapan dahulu — skim atas dinding lembap akan melepuh dan gagal",
      "Untuk rumah sewa, persetujui standard kemasan dinding sebelum kerja bermula"
    ],
    costDetail: "Skim coat dinilai setiap kaki persegi — kira-kira RM5–RM12 bergantung keadaan dinding, akses dan sama ada lapisan kedua diperlukan. Bilik tidur utama biasa RM400–RM1,200. Pembaikan tampal lebih murah tetapi meninggalkan tompok kelihatan; skim penuh memberi kemasan flat premium."
  },
  "vinyl-flooring-lifting-edges": {
    symptom: "Tepi vinyl flooring terangkat, melengkung atau tidak lagi melekat pada lantai.",
    causes: ["Pelekat gagal kerana kelembapan atau haba", "Subfloor tidak rata sebelum pemasangan", "Kelembapan naik dari papak konkrit", "Pemasangan tanpa expansion gap yang mencukupi"],
    solutions: ["Bersihkan kawasan terangkat dan keringkan", "Sapukan pelekat vinyl baru di bawah tepi", "Tekan dengan berat sehingga pelekat kering", "Ganti helaian yang rosak teruk"],
    whenToCall: ["Beberapa tepi mula terangkat", "Vinyl berbunyi 'klik' apabila diinjak", "Kelembapan kelihatan di bawah vinyl"],
    localFaq: {
      q: "Mengapa vinyl flooring terangkat di Malaysia?",
      a: "Kelembapan tinggi dan suhu tropika menyebabkan pelekat gagal lebih cepat berbanding negara beriklim sejuk. Pastikan subfloor kering sebelum pemasangan."
    }
  },
  "cracked-roof-tiles": {
    symptom: "Jubin bumbung retak, pecah atau hilang, membenarkan air hujan masuk ke siling atau dinding.",
    causes: ["Bahan bumbung telah mencapai had jangka hayat", "Hentaman objek (dahan pokok, batu)", "Pergerakan struktur bumbung", "Penambahan beban (pasang panel solar, dll)"],
    solutions: ["Ganti jubin retak dengan yang baru", "Periksa dan baiki underlayment jika rosak", "Tukar flashing di sekitar cerobong atau vent", "Bersihkan dan periksa bumbung secara berkala"],
    whenToCall: ["Kebocoran aktif semasa hujan", "Jubin boleh dilihat retak dari bawah", "Bumbung berusia lebih 15 tahun"],
    localFaq: {
      q: "Berapa kos untuk ganti jubin bumbung?",
      a: "Biasanya RM 250 hingga RM 800 untuk pembaikan kecil. Bumbung penuh memerlukan pemeriksaan terlebih dahulu — kos berbeza mengikut jenis bumbung."
    }
  },
  "cabinet-door-sagging": {
    symptom: "Pintu kabinet tergantung rendah, tidak selari atau engsel longgar menyebabkan pintu tidak ditutup rapat.",
    causes: ["Skrup engsel longgar dari penggunaan biasa", "Pintu kabinet terlalu berat untuk engsel asal", "Kelembapan menyebabkan pintu mengembang", "Pemasangan asal tidak betul"],
    solutions: ["Ketatkan atau ganti skrup engsel", "Laraskan engsel untuk penjajaran semula", "Tambah engsel ketiga untuk pintu berat", "Ganti engsel dengan gred lebih berat jika perlu"],
    whenToCall: ["Pintu tidak boleh ditutup rapat walaupun dilaras", "Engsel berbunyi atau terasa longgar", "Pintu kelihatan condong"],
    localFaq: {
      q: "Bolehkah pintu kabinet dibaiki tanpa ganti keseluruhan?",
      a: "Ya, dalam kebanyakan kes. Mengencangkan engsel, menambah engpel sokongan atau melaraskan biasanya mencukupi tanpa perlu ganti keseluruhan pintu."
    }
  },
  "wardrobe-door-jamming": {
    symptom: "Pintu almari tersangkut, bergerak dengan susah atau keluar dari rel.",
    causes: ["Rel kotor atau berkarat", "Roda nylon haus atau pecah", "Pintu mengembang kerana kelembapan", "Bingkai almari tidak tegak"],
    solutions: ["Bersihkan dan licinkan rel", "Ganti roda nylon yang rosak", "Ratakan pintu jika mengembang", "Laraskan bracket untuk penjajaran"],
    whenToCall: ["Pintu keluar dari rel berulang kali", "Bunyi menggeser yang kuat", "Pintu tidak boleh dibuka sepenuhnya"],
    localFaq: {
      q: "Berapa kos untuk baiki pintu almari tersangkut?",
      a: "Biasanya RM 200 hingga RM 500 termasuk penggantian roda dan pelarasan, bergantung pada jenis almari."
    },
    overview: "Pintu almari yang tersangkut biasanya masalah track atau roda, bukan masalah pertukangan. Pintu gelangsar mengumpul habuk dan pasir yang menggesek roda menjadi leper; pintu berengsel membengkak dengan kelembapan atau bingkai mendap tidak segi. Semakin lama pintu tersangkut dipaksa, semakin banyak kerosakan — roda haus leper, track bengkok dan tepi pintu pecah.",
    diyChecks: [
      "Vakum track gelangsar sepenuhnya — pasir punca paling biasa pintu melekat",
      "Angkat pintu sedikit dan lepaskan: pergerakan menegak bebas bermakna roda haus, bukan masalah track",
      "Untuk pintu berengsel, periksa engsel dan jurang di tepi penutup untuk pembengkakan",
      "Jangan paksa pintu tersangkut tertutup — tepi panel pecah jauh lebih mahal daripada roda"
    ],
    prevention: [
      "Bersihkan track almari dua kali setahun, sebelum dan selepas kelembapan monsun",
      "Jauhkan almari dari aliran udara aircond langsung yang menyebabkan kondensasi",
      "Baiki pintu melekat pada tanda pertama — roda dan track haus cepat setelah mula mengisar",
      "Simpan barang berat rendah dan seimbang supaya bingkai tidak senget"
    ],
    costDetail: "Pembersihan track dan pelarasan semula bermula sekitar RM180. Penggantian roda RM250–RM450 setiap pintu; gantung semula pintu berengsel dengan engsel baharu lebih kurang sama. Jika panel telah bengkak atau pecah, penggantian mungkin lebih mahal daripada pembaikan — kami periksa keadaan pintu sebelum sebut harga."
  },
  "digital-smart-lock-installation": {
    symptom: "Kunci pintar tidak berfungsi, bateri cepat habis, WiFi/Bluetooth tidak stabil atau kunci tidak boleh dikunci/dibuka.",
    causes: ["Bateri lemah atau habis", "Sambungan WiFi/Bluetooth lemah", "Software perlu dikemas kini", "Pemasangan tidak betul pada pintu"],
    solutions: ["Ganti bateri dengan yang baru", "Periksa dan kukuhkan sambungan rangkaian", "Kemas kini firmware melalui aplikasi pengeluar", "Pasang semula dan kalibrasi kunci"],
    whenToCall: ["Kunci langsung tidak berfungsi", "Bateri habis dalam masa kurang 1 bulan", "Kunci tidak mengesan jari/kad dengan betul"],
    localFaq: {
      q: "Adakah kunci pintar selamat untuk rumah di Malaysia?",
      a: "Ya, kunci pintar gred rumah (Yale, Samsung, Xiaomi, Philips) selamat untuk kegunaan harian. Pastikan pilih model yang sesuai dengan ketebalan pintu anda."
    }
  },
  "locked-out-of-house": {
    symptom: "Tidak boleh masuk ke rumah kerana kunci hilang, patah dalam lubang kunci, atau kunci rosak.",
    causes: ["Kunci hilang atau dicuri", "Kunci patah di dalam silinder", "Mekanisme kunci rosak", "Pintu terkunci automatik tanpa kunci"],
    solutions: ["Hubungi tukang kunci bertauliah", "Gunakan teknik kunci tanpa kerosakan (jika mungkin)", "Ganti silinder kunci jika perlu", "Pasang kunci baru selepas masuk"],
    whenToCall: ["Kunci hilang sepenuhnya", "Kunci patah dalam lubang kunci", "Kunci rosak selepas cubaan pecah masuk"],
    localFaq: {
      q: "Berapa kos untuk panggil tukang kunci kecemasan?",
      a: "Khosmestik biasa: RM 150 hingga RM 350 untuk rumah. Harga berbeza mengikut masa (lebih mahal pada waktu malam/hujung minggu) dan jenis kunci."
    },
    overview: "Terkunci di luar rumah ialah salah satu daripada sedikit kecemasan rumah sebenar — ia boleh meninggalkan kanak-kanak atau haiwan peliharaan tanpa pengawasan, atau anda terdampar di luar pada waktu malam. Dalam kebanyakan kes kunci tidak rosak langsung; masalahnya ialah akses. Tukang kunci yang baik akan membuka silinder standard tanpa merosakkan, dan hanya menggerudi atau menanggalkan silinder apabila kunci berkualiti tinggi, tersita atau sudah rosak.",
    diyChecks: [
      "Periksa tingkap dan pintu sisi yang mungkin tidak berkunci — tetapi jangan memanjat balkoni untuk masuk",
      "Semak dengan ahli keluarga atau jiran yang mungkin memegang kunci ganti",
      "Jika anda ada smart lock, cuba kunci fizikal sandaran, kod, atau jump kuasa bank pada terminal luaran",
      "Hubungi kami sebelum memaksa apa-apa — kunci dan pintu rosak lebih mahal daripada panggilan"
    ],
    prevention: [
      "Simpan kunci ganti dengan jiran yang dipercayai, bukan bawah tikar",
      "Pasang key safe atau smart lock dengan kod sandaran untuk akses keluarga",
      "Ganti kunci haus sebelum ia patah di dalam silinder",
      "Simpan nombor tukang kunci sebelum anda memerlukannya"
    ],
    costDetail: "Lockout waktu siang standard dengan bukaan tanpa kerosakan RM180–RM380. Selepas waktu kerja (10 malam–6 pagi) dan hujung minggu lebih mahal, sehingga RM550+; penggantian silinder atau kunci yang digerudi kerana rosak menambah bahagian. Kami sahkan harga sebelum tiba dan tunjukkan kaedah bukaan sebelum kerja."
  },
  "downlight-flickering": {
    symptom: "Downlight berkelip-kelip, menyala dan padam, atau tidak menyala dengan terang.",
    causes: ["Driver LED rosak atau tidak serasi", "Sambungan wayar longgar di terminal", "Dimmer tidak serasi dengan lampu LED", "Lampu LED hampir habis jangka hayat"],
    solutions: ["Ganti driver LED dengan yang serasi", "Periksa dan ketatkan semua sambungan wayar", "Tukar dimmer kepada model LED-compatible", "Gantikan lampu LED yang rosak"],
    whenToCall: ["Kelip berlaku setiap hari", "Beberapa lampu berkelip serentak", "Lampu terasa panas luar biasa"],
    localFaq: {
      q: "Adakah lampu berkelip berbahaya?",
      a: "Kelip biasanya menunjukkan sambungan longgar atau driver rosak. Sambungan longgar boleh menyebabkan panas dan risiko kebakaran — sila diperiksa segera."
    },
    overview: "Lampu downlight LED yang berkelip hampir selalu masalah driver atau sambungan, bukan masalah mentol. Driver murah tanpa jenama yang digunakan dalam pemasangan bajet gagal dalam beberapa bulan, suis dimmer yang tidak direka untuk LED menyebabkan kelipan, dan sambungan longgar di kotak simpang siling menjana haba selain kelipan — sebab itu ia perlu diperiksa dan bukan diabaikan.",
    diyChecks: [
      "Catat sama ada satu atau beberapa lampu berkelip — beberapa lampu biasanya menunjuk ke masalah litar atau dimmer",
      "Periksa dimmer: dimmer standard selalunya tidak dapat mengawal beban LED dengan betul",
      "Matikan lampu pada suis dan rasa trim — haba luar biasa di satu fitting perlu pemeriksaan",
      "Ambil foto jenama dan model fitting sebelum menghubungi kami, supaya penggantian tepat dapat disediakan"
    ],
    prevention: [
      "Spesifikasikan driver dan fitting LED berjenama (Philips, Osram, Panasonic) untuk pemasangan baharu",
      "Gunakan dimmer serasi LED jika anda mahu fungsi dimming",
      "Minta sambungan simpang diperiksa semasa pengubahsuaian, bukan hanya tukar lampu",
      "Simpan rekod tarikh pemasangan — fitting yang gagal dalam tempoh jaminan patut dituntut"
    ],
    costDetail: "Penggantian driver atau fitting yang gagal kira-kira RM80–RM320 setiap lampu bergantung jenama dan jenis trim. Perlindungan lonjakan seluruh rumah atau pendawaian semula simpang siling menambah jumlah; kerja juruelektrik berlesen ST disertakan dalam setiap sebut harga. Kami padankan gaya fitting sedia ada jika boleh."
  },
  "shower-screen-water-leak": {
    symptom: "Air bocor dari bawah atau tepi skrin mandi (shower screen), membasahkan lantai bilik mandi.",
    causes: ["Silikon di tepi skrin telah gagal", "Kaca retak atau bengkok", "Rel tidak rata", "Longkang lantai tersumbat"],
    solutions: ["Buang silikon lama dan sapukan baru", "Ganti kaca jika retak", "Laraskan rel supaya rata", "Bersihkan longkang lantai"],
    whenToCall: ["Air bocor setiap kali mandi", "Kaca retak kelihatan", "Beberapa skrin mempunyai masalah yang sama"],
    localFaq: {
      q: "Bolehkah skrin mandi dibaiki tanpa ganti keseluruhan?",
      a: "Ya. Dalam kebanyakan kes, hanya perlu tukar silikon dan laraskan rel. Penggantian penuh hanya diperlukan jika kaca rosak."
    }
  },
  "cctv-not-recording-storage-full": {
    symptom: "Kamera CCTV tidak menunjukkan siaran langsung, tersangkut pada imej statik, atau DVR/NVR tidak memainkan rakaman.",
    causes: ["Hard disk penuh atau gagal", "Bekalan kuasa gagal ke DVR/NVR", "Kabel rangkaian terputus", "Isu firmware kamera IP"],
    solutions: ["Uji hard disk dan ganti jika gagal", "Ganti bekalan kuasa DVR/NVR", "Uji dan tamatkan semula kabel rangkaian", "Kemas kini firmware melalui aplikasi pengeluar"],
    whenToCall: ["Perlu CCTV untuk laporan insurans/insiden", "Siaran telah mati lebih 24 jam", "Syak gangguan sengaja"],
    localFaq: {
      q: "Berapa lama hard disk CCTV bertahan?",
      a: "Hard disk CCTV gred khas (WD Purple, Seagate SkyHawk) biasanya bertahan 4–7 tahun dengan operasi 24/7."
    },
    overview: "Sistem CCTV yang menunjukkan video langsung tetapi tidak merakam apa-apa ialah masalah storan atau bekalan kuasa, dan ia mudah terlepas pandang — paparan langsung nampak baik, jadi kebanyakan orang hanya menyedari masalah apabila perlu rakaman untuk laporan insiden atau insurans. Punca biasa ialah hard disk penuh atau gagal, bekalan kuasa DVR/NVR yang jatuh di bawah beban, kabel longgar, atau kamera yang beku dan berhenti menghantar bingkai.",
    diyChecks: [
      "Periksa menu DVR/NVR untuk status hard disk dan ruang kosong — disk penuh menghentikan rakaman secara senyap",
      "Periksa jadual rakaman: sesetengah sistem berhenti merakam selepas kemas kini firmware",
      "But semula DVR/NVR sekali — perakam beku selalunya kembali berfungsi selepas but bersih",
      "Periksa setiap suapan kamera secara individu; satu kamera beku dalam grid mudah terlepas"
    ],
    prevention: [
      "Guna hard disk gred pengawasan (WD Purple, Seagate SkyHawk) yang direka untuk tulis 24/7",
      "Tetapkan jadual rakaman untuk menulis ganti rakaman lama secara automatik",
      "Uji main balik setiap bulan — periksa rakaman minggu lepas, bukan hanya paparan langsung",
      "Letak DVR/NVR pada soket pelindung lonjakan; kegagalan kuasa merosakkan disk"
    ],
    costDetail: "Penggantian hard disk atau bekalan kuasa dengan ujian bermula sekitar RM180–RM400. Sistem DVR 8 saluran penuh + disk + pemasangan RM850–RM1,800; pemulihan data dari disk gagal dinilai berasingan (RM350–RM1,200) bergantung kerosakan. Kami uji seluruh sistem sebelum meninggalkan tapak supaya rakaman disahkan berfungsi."
  },
  "autogate-remote-not-working": {
    symptom: "Remot pagar automatik tidak lagi membuka pagar, atau hanya berfungsi secara sekejap-sekejap dari jarak sangat dekat.",
    causes: ["Bateri remot lemah", "Antena penerima berkarat", "Kod remot tidak sepadan selepas reset motor", "Papan kawalan motor gagal"],
    solutions: ["Ganti bateri remot (CR2032 biasa)", "Bersihkan atau ganti antena penerima", "Program semula remot ke motor", "Ganti papan kawalan jika perlu"],
    whenToCall: ["Remot hilang dan perlukan yang baru dipadankan", "Beberapa remot berhenti berfungsi serentak", "Pagar terbuka sendiri secara sekejap-sekejap"],
    localFaq: {
      q: "Bolehkah mana-mana remot dipadankan ke pagar saya?",
      a: "Hanya remot yang sepadan dengan jenama motor anda (SEIP, DEA, AutoGate, DASPI, dll). Kami menyimpan kod biasa Malaysia."
    }
  },
  "loose-metal-gate-hinges": {
    symptom: "Pagar logam anda tergantung rendah, menyeret lantai, atau engsel nampak longgar atau berkarat.",
    causes: ["Kimpalan engsel asal gagal", "Karat menghakis pin engsel", "Berat pagar melebihi spesifikasi asal", "Pergerakan tiang konkrit"],
    solutions: ["Kisar kimpalan lama dan bersihkan permukaan", "Kimpal engsel ganti heavy-duty", "Primer dan cat kawasan berkimpal", "Tambah sokongan tengah-span jika pagar sangat lebar"],
    whenToCall: ["Pagar menyeret lantai", "Serpihan karat kelihatan di engsel", "Pagar hampir terlepas dari tiang"],
    localFaq: {
      q: "Bolehkah anda mengimpal di tapak?",
      a: "Ya. Kami membawa kimpal arc/MIG mudah alih dan boleh menyelesaikan kebanyakan pembaikan engsel pagar dalam 2–4 jam di tapak."
    }
  },
  "stuck-sliding-window": {
    symptom: "Tingkap slaid aluminium tidak boleh digeser, memerlukan daya berlebihan, atau keluar dari rel apabila digerakkan.",
    causes: ["Habuk dan kotoran di dalam rel", "Roda roller haus atau pecah", "Karat bingkai dari kelembapan pantai", "Berat kaca memesongkan bingkai"],
    solutions: ["Vakum dan licinkan rel", "Ganti roda nylon yang haus", "Luruskan bingkai yang terpesong dengan pelarasan berhati-hati", "Pasang salutan anti-karat"],
    whenToCall: ["Tingkap berusia lebih 10 tahun", "Roda nampak retak atau hilang", "Bingkai berkarat sampai mengelupas"],
    localFaq: {
      q: "Bolehkah saya baiki tingkap slaid tersangkut sendiri?",
      a: "Pembersihan dan pelinciran rel boleh dibuat sendiri. Penggantian roller biasanya memerlukan mengangkat sash tingkap — lebih baik dilakukan secara profesional."
    }
  },
  "aircon-not-cold": {
    symptom: "Aircond berjalan tetapi menghembus udara panas atau hanya sedikit sejuk, jadi bilik tidak pernah mencapai suhu yang ditetapkan.",
    causes: ["Gas bahan pendingin rendah atau bocor", "Gegelung evaporator tersumbat habuk", "Penapis udara kotor menyekat aliran", "Pemampat atau sensor suhu rosak"],
    solutions: ["Bersihkan penapis udara dan gegelung evaporator", "Jalankan pemeriksaan kebocoran dan top-up bahan pendingin ke PSI yang betul", "Ganti sensor suhu atau termistor yang rosak", "Baiki atau ganti pemampat jika ia telah gagal"],
    whenToCall: ["Unit berjalan sepanjang hari tanpa menyejuk", "Gas baru di-top-up tetapi udara masih panas", "Ada bunyi desisan atau fros terbentuk pada paip"],
    localFaq: {
      q: "Kenapa aircond saya panas walaupun tetapan sejuk?",
      a: "Selalunya gas kurang, gegelung kotor, atau pemampat mula gagal — semuanya boleh didiagnosis dalam satu lawatan servis."
    }
  },
  "aircon-water-leaking": {
    symptom: "Air menitis dari unit dalaman atau mengalir ke dinding, biasanya daripada saliran tersumbat atau unit senget.",
    causes: ["Paip saliran tersumbat atau kotor", "Penapis udara tersumbat menyebabkan ais terbentuk lalu mencair", "Pam saliran gagal (unit kaset)", "Unit senget atau pemasangan kurang baik"],
    solutions: ["Bersihkan dan bilas paip saliran", "Bersihkan penapis dan gegelung untuk menghentikan ais", "Ganti pam saliran yang gagal", "Aras semula unit dalaman dan periksa pemasangan"],
    whenToCall: ["Air menitis ke perabot atau lantai", "Dinding menunjukkan kesan air di bawah unit", "Air bocor walaupun selepas diservis"],
    localFaq: {
      q: "Berbahayakah kebocoran air aircond?",
      a: "Ia boleh merosakkan dinding dan lantai serta menggalakkan kulat — sebaiknya dibaiki segera."
    }
  },
  "aircon-making-noise": {
    symptom: "Unit dalaman atau luaran mengeluarkan bunyi bergetar, berdengung, berdesing atau mengisar semasa beroperasi.",
    causes: ["Panel, skru atau braket longgar", "Serpihan atau ais pada kipas blower", "Galas motor kipas haus", "Pemampat atau kontaktor gagal"],
    solutions: ["Ketatkan panel dan pelekap yang longgar", "Bersihkan serpihan dari kipas dan gegelung", "Ganti motor kipas yang haus", "Ganti kontaktor atau pemampat yang gagal"],
    whenToCall: ["Bunyi semakin kuat dari masa ke semasa", "Ada bunyi mengisar atau bunyi logam", "Unit luaran bergetar berlebihan"],
    localFaq: {
      q: "Bolehkah bunyi bising merosakkan unit?",
      a: "Ya — motor yang mengisar atau pemampat yang gagal akan menjadi lebih teruk dan lebih mahal untuk dibaiki jika dibiarkan."
    }
  },
  "aircon-bad-smell": {
    symptom: "Aircond menghembus bau apak, berkulat atau masam ke dalam bilik, terutamanya apabila mula dihidupkan.",
    causes: ["Kulat dan bakteria pada gegelung evaporator", "Air bertakung dalam dulang saliran", "Roda blower kotor", "Habuk dan serpihan terperangkap dalam penapis"],
    solutions: ["Bersihkan dan sanitasi gegelung dan blower", "Bilas dulang dan paip saliran", "Sapukan rawatan anti-mikrob", "Cucian kimia atau overhaul untuk pembersihan mendalam"],
    whenToCall: ["Bau berterusan selepas membersihkan penapis", "Kulat kelihatan pada bolong", "Bau mencetuskan alahan atau gangguan pernafasan"],
    localFaq: {
      q: "Bagaimana untuk elak bau aircond berulang?",
      a: "Servis setiap 3–6 bulan, pastikan penapis bersih, dan jalankan mod kipas beberapa minit sebelum menutup unit."
    }
  },
  "aircon-weak-airflow": {
    symptom: "Aircond menyejuk tetapi aliran udara lemah, jadi bilik kekal panas walaupun kelajuan kipas maksimum.",
    causes: ["Penapis udara tersumbat", "Gegelung evaporator kotor atau berais", "Motor blower dalaman gagal", "Dukt tersumbat atau bersaiz kecil"],
    solutions: ["Bersihkan atau ganti penapis udara", "Basuh gegelung evaporator untuk memulihkan aliran", "Ganti motor blower yang lemah", "Periksa dan bersihkan dukt atau bolong"],
    whenToCall: ["Aliran menurun walaupun pada kelajuan kipas maksimum", "Unit bising sambil berhembus lemah", "Sesetengah bilik tidak mencapai suhu"],
    localFaq: {
      q: "Berapa kerap penapis perlu dibersihkan?",
      a: "Setiap 2–4 minggu untuk penggunaan berat, kerana penapis tersumbat menyekat aliran udara."
    }
  },
  "aircon-not-turning-on": {
    symptom: "Aircond tidak bertindak balas kepada remote atau butang kuasa, atau ia menutup sendiri sejurus selepas dihidupkan.",
    causes: ["Breaker terputus atau fius terbakar", "Remote atau papan penerima rosak", "Kapasitor atau kontaktor gagal", "Papan kawalan PCB rosak"],
    solutions: ["Periksa breaker dan bekalan kuasa", "Uji dan ganti remote atau penerima", "Ganti kapasitor atau kontaktor yang gagal", "Baiki atau ganti papan kawalan PCB"],
    whenToCall: ["Unit mati sepenuhnya", "Ia menutup sendiri berulang kali", "Ada bau hangus atau breaker trip"],
    localFaq: {
      q: "Adakah lonjakan kuasa boleh merosakkan aircond?",
      a: "Ya — lonjakan sering merosakkan papan PCB atau kapasitor, jadi pelindung lonjakan disyorkan."
    }
  },
  "aircon-tripping-mcb": {
    symptom: "Aircond menyebabkan MCB atau RCCB trip setiap kali ia dihidupkan, memutuskan bekalan ke bilik.",
    causes: ["Pemampat gagal menarik arus berlebihan", "Kapasitor atau pendawaian terpintas", "Breaker bersaiz kecil atau litar dikongsi", "Kelembapan masuk ke dalam unit luaran"],
    solutions: ["Uji tarikan arus pemampat", "Ganti kapasitor yang terpintas", "Pasang breaker khas bersaiz betul", "Keringkan dan kedap sambungan elektrik luaran"],
    whenToCall: ["Breaker trip setiap kali aircond dihidupkan", "Perkakas lain pada litar sama terjejas", "Ada bau hangus berhampiran unit"],
    localFaq: {
      q: "Selamatkah terus reset breaker?",
      a: "Tidak — trip berulang bermakna ada kerosakan elektrik sebenar dan berisiko memanaskan pendawaian."
    }
  },
  "ice-forming-on-aircon": {
    symptom: "Fros atau ais terbentuk pada gegelung evaporator atau paip tembaga, dan unit berhenti menyejuk dengan betul.",
    causes: ["Gas bahan pendingin rendah", "Penapis kotor atau gegelung tersumbat", "Kipas blower berjalan terlalu perlahan", "Termostat atau sensor rosak"],
    solutions: ["Nyahbekukan unit dan bersihkan gegelung", "Top-up bahan pendingin selepas pemeriksaan kebocoran", "Ganti motor blower yang gagal", "Ganti sensor suhu yang rosak"],
    whenToCall: ["Ais kelihatan pada paip atau gegelung", "Unit mencair dan membeku semula berulang kali", "Air menitis semasa ais mencair"],
    localFaq: {
      q: "Perlukah saya matikan unit yang beku?",
      a: "Ya — tukar ke mod kipas atau matikan untuk nyahbeku, kemudian tempah servis untuk mencari punca."
    }
  },
  "aircon-remote-display-issue": {
    symptom: "Remote control tidak bertindak balas, atau paparan unit menunjukkan kod ralat, berkelip atau menjadi kosong.",
    causes: ["Bateri remote lemah atau berkarat", "Sensor remote atau papan penerima rosak", "Pendawaian paparan longgar", "Papan PCB utama rosak"],
    solutions: ["Ganti bateri remote", "Uji dan ganti remote atau penerima", "Pasang semula penyambung paparan", "Baiki atau ganti papan kawalan PCB"],
    whenToCall: ["Remote hanya berfungsi pada jarak sangat dekat", "Paparan menunjukkan kod ralat", "Paparan berkelip atau kekal kosong"]
  },
  "popping-tiles-buckling": {
    symptom: "Jubin lantai tiba-tiba terangkat, meleding membentuk huruf V terbalik, atau meletup dengan bunyi retakan kuat akibat pengembangan haba, kelembapan terperangkap, atau lepaan simen lekang.",
    causes: [
      "Pengembangan haba tanpa jurang pengembangan atau ruang penimbal di perimeter dinding",
      "Kelembapan terperangkap di bawah lepaan jubin menghasilkan tekanan wap",
      "Pergerakan papak konkrit asas, enapan struktur, atau liputan simen pelekat tidak rata",
      "Pemasangan menggunakan kaedah lepaan kering tanpa bancuhan simen pelekat atau lateks yang mencukupi"
    ],
    solutions: [
      "Keluarkan jubin yang meleding dengan selamat serta-merta untuk melegakan tekanan",
      "Pecahkan lepaan simen lama yang berongga sehingga sampai ke papak konkrit kukuh",
      "Lepa semula dengan mortar polimer berdaya lekatan tinggi dan sediakan jurang pergerakan perimeter",
      "Pasang semula jubin porselin atau seramik gantian dengan liputan pelekat 100% penuh"
    ],
    whenToCall: [
      "Banyak kepingan jubin terangkat secara mendadak dan membahayakan keselamatan penghuni",
      "Bunyi meletup berterusan kedengaran dan jubin terus meleding merentasi ruang tamu",
      "Jubin di sekeliling kawasan terangkat berbunyi kosong dan berisiko meletup bila-bila masa"
    ],
    localFaq: {
      q: "Bolehkah jubin meletup ditampal semula menggunakan gam tanpa pecahkan simen lama?",
      a: "Tidak disyorkan. Lapisan simen di bawah biasanya sudah lekang dan hancur. Gam baru tidak akan tahan lama dan jubin akan meletup semula."
    }
  },
  "damaged-gypsum-partition-wall": {
    symptom: "Dinding sekatan gipsum atau pemisah pejabat berlubang akibat hentaman, bucu kemek, rangka besi melendut, atau papan gipsum menjadi lembut akibat kelembapan.",
    causes: [
      "Hentaman fizikal daripada pemindahan perabot berat atau hentakan tombol pintu",
      "Pendedahan air basuhan lantai atau kebocoran paip tersembunyi yang melembutkan teras gipsum",
      "Jarak rangka besi stud C terlalu luas atau skru pengikat telah longgar",
      "Pemasangan perabot gantung berat tanpa papan sokongan kayu di belakang dinding"
    ],
    solutions: [
      "Potong bahagian gipsum yang rosak dengan kemas sehingga ke tengah rangka stud terdekat",
      "Kukuhkan atau ganti rangka stud C dan trek U logam yang telah bengkok",
      "Pasang tampalan papan gipsum baharu dengan pita gentian jaring pelekat sendiri",
      "Lakukan kerja lepaan skim coat berlapis, ratakan tepi, gosok licin, dan sapu primer sebelum mengecat"
    ],
    whenToCall: [
      "Lubang melebihi saiz 15cm atau merentasi rangka besi dinding",
      "Dinding pemisah bergoyang atau terasa longgar apabila ditolak dengan tangan",
      "Papan gipsum telah lembik, berlumut, atau mereput akibat resapan air"
    ],
    localFaq: {
      q: "Bolehkah lubang pada dinding pemisah gipsum dibaiki tanpa meninggalkan kesan?",
      a: "Ya. Juruteknik kami menggunakan tampalan berpemotong serong, pita jaring gentian, dan skim coat bertingkat yang digosok rata sehingga permukaan kembali sempurna selepas dicat."
    }
  },
  "old-bathroom-plumbing-tiles": {
    symptom: "Bilik mandi berusia 15–25 tahun mengalami air berkarat, kebocoran paip tersembunyi, jubin lusuh dan licin, karat kapur degil, bau longkang, dan kalis air yang gagal.",
    causes: [
      "Paip besi galvani lama berkarat di bahagian dalam, menyebabkan karat dan kebocoran halus",
      "Lapisan membran kalis air di bawah lantai sudah reput dan meresap ke tingkat bawah",
      "Jubin seramik lama dengan garisan grout terkikis memerangkap kotoran dan bakteria",
      "Peralatan sanitari usang dan perangkap lantai tidak kedap membenarkan bau pembetung naik"
    ],
    solutions: [
      "Lakukan ujian tekanan dan pengesanan akustik untuk kenal pasti paip bocor tersembunyi",
      "Ganti paip besi berkarat dengan paip PPR atau keluli tahan karat kalis kakisan",
      "Pecahkan jubin lama, ratakan lantai, dan sapukan 3 lapisan membran kalis air elastometrik",
      "Pasang semula jubin porselin antikarat dan pasang mangkuk tandas serta perangkap lantai antibau"
    ],
    whenToCall: [
      "Tekanan air pancuran mandian dan pili semakin perlahan serta berwarna kekuningan",
      "Jiran tingkat bawah mengadu kesan tompok air atau titisan dari siling konkrit",
      "Bau longkang berlarutan, jubin lantai longgar, atau kulat kronik sukar dibersihkan"
    ],
    localFaq: {
      q: "Adakah lebih baik baiki sedikit demi sedikit atau buat ubah suai penuh bilik mandi lama?",
      a: "Bagi bilik mandi melebihi 15 tahun dengan paip besi lama, membaiki secara bertampal sering menyebabkan kebocoran berulang. Ubah suai penuh menyelesaikan paip, kalis air, dan reka bentuk secara kekal."
    }
  },
  "old-kitchen-cabinet-plumbing-damage": {
    symptom: "Bahagian bawah kabinet sinki kembang, mereput atau diserang anai-anai akibat titisan paip sinki yang berterusan, sementara susun atur dan soket elektrik usang mengehadkan penggunaan dapur.",
    causes: [
      "Titisan perlahan daripada perangkap botol sinki, hos fleksibel, atau sambungan paip membasahi kayu cipboard",
      "Penggunaan bahan melamin atau particle board yang tidak kalis air di kawasan dapur basah",
      "Paip buangan PVC lama yang tersumbat dengan sisa lemak menyebabkan air bertakung kerap melimpah",
      "Kekurangan punca soket 13A/15A dan litar DB lama yang tidak dapat menampung perkakas elektrik moden"
    ],
    solutions: [
      "Ganti bangkai bawah kabinet sinki yang reput dengan bahan aluminium kalis air atau papan lapis marin berlapik aluminium",
      "Pasang semula paip buangan sinki PVC tahan lasak dengan injap cuci dan perangkap tembaga kedap",
      "Naik taraf pendawaian elektrik dapur dengan litar khusus untuk ketuhar dan dapur induksi",
      "Susun semula reka letak zon dapur basah dan kering dengan permukaan meja kuarza atau granit tahan lasak"
    ],
    whenToCall: [
      "Lantai dasar kabinet bawah sinki telah runtuh atau berbau reput dan berkulat kuat",
      "Air sinki kerap bocor ke dalam kabinet walaupun sambungan DIY telah diketatkan",
      "Pemutus litar elektrik kerap trip apabila menggunakan perkakas memasak secara serentak"
    ],
    localFaq: {
      q: "Bolehkah saya menukar bahagian bawah kabinet sinki sahaja tanpa menukar keseluruhan kabinet dapur?",
      a: "Ya. KL Servis Rumah boleh merombak dan menggantikan bangkai bawah sinki yang rosak secara modular menggunakan aluminium kalis air tanpa menjejaskan table top sedia ada."
    }
  },
  "uneven-floor-subfloor-leveling": {
    symptom: "Papak konkrit asal atau lantai selepas dipecahkan bergelombang, berlubang, atau mempunyai perbezaan ketinggian melebihi 3mm sehingga menyebabkan jubin, SPC atau vinil berketuk dan melantun.",
    causes: [
      "Kerja penuangan papak konkrit asal atau lepaan simen kasar yang tidak rata",
      "Kerja memecahkan jubin lama meninggalkan kesan pahat, bonggol simen, dan lekukan berongga",
      "Mendapan lantai dari masa ke masa yang menghasilkan permukaan condong atau melengkung",
      "Bonggol pada garisan sambungan pengembangan antara bilik yang tidak diratakan"
    ],
    solutions: [
      "Ratakan bonggol dan rabung konkrit tinggi menggunakan mesin pencanai lantai berlian",
      "Sedut habuk halus sehingga bersih dan sapukan primer akrilik berdaya serapan tinggi",
      "Tuangkan bancuhan simen self-leveling polimer untuk menghasilkan permukaan rata berketepatan laser",
      "Periksa kerataan dengan pembaris lurus 2 meter sebelum memasang kemasan lantai"
    ],
    whenToCall: [
      "Lantai SPC click-lock atau vinil yang baru dipasang berbunyi klik dan terasa melantun apabila dipijak",
      "Perbezaan ketinggian lantai melebihi 3mm dalam jarak 1 meter sebelum pemasangan lantai bermula",
      "Air bertakung di kawasan lekuk semasa lantai dimop atau dibersihkan"
    ],
    localFaq: {
      q: "Mengapakah lantai konkrit mesti diratakan dengan self-leveling sebelum memasang lantai SPC?",
      a: "Papan SPC bersifat separa tegar. Jika dipasang di atas permukaan tidak rata, sambungan kunci (click-lock) akan menerima tekanan lenturan berulang lalu patah dan renggang."
    }
  },
  "wall-cracks-settlement-masonry": {
    symptom: "Retak pepenjuru bertingkat muncul pada dinding bata, celah menegak terbentuk di sambungan bahagian tambahan rumah, atau bingkai pintu dan tingkap menunjukkan retak ricih.",
    causes: [
      "Enapan tanah yang berbeza di bawah tapak tambahan rumah atau asas rumah teres",
      "Ketiadaan besi penghubung mengikat dinding bata tambahan kepada tiang struktur asal",
      "Kitaran pengembangan dan pengecutan haba antara bahan binaan yang berbeza",
      "Gegaran daripada lalu lintas kenderaan berat berdekatan atau kerja penanaman cerucuk projek sekitar"
    ],
    solutions: [
      "Lakukan pemeriksaan penilaian struktur bagi membezakan retak enapan biasa dengan kegagalan asas aktif",
      "Pasang jahitan bar keluli tahan karat heliks merentasi garisan retakan bata",
      "Suntik bahan epoksi struktur atau grouting simen tidak mengecut ke dalam celah retakan dalam",
      "Sapukan pengedap elastometrik fleksibel pada sambungan pengembangan disusuli jaring pengukuh dan lepaan skim coat"
    ],
    whenToCall: [
      "Lebar retakan melebihi 3mm atau menunjukkan corak retak bertingkat pada dinding bata",
      "Celah pemisah antara bahagian dapur atau anjung tambahan dan rumah utama semakin membesar",
      "Pintu atau tingkap pada dinding yang terjejas menjadi ketat, tersangkut, atau tidak dapat dikunci"
    ],
    localFaq: {
      q: "Bagaimanakah saya tahu sama ada retak dinding itu retak kosmetik atau retak struktur?",
      a: "Retak kosmetik halus biasanya di bawah 1mm dan hanya pada lapisan cat/plaster. Retak struktur pula lebih lebar (>3mm), mengikut garisan mortar bata, tembus ke sebelah dinding, atau menyebabkan pintu sangkut."
    }
  }
};

const PROBLEM_BODY_ZH: Record<string, LocalizedProblemBody> = {
  "peeling-paint-malaysia": {
    symptom: "油漆剥落、起泡或粉化，因为潮湿、底漆薄弱或旧涂层与墙面粘结不良。",
    causes: ["墙后潮湿积聚", "涂漆前未使用封底剂或底漆", "旧粉化油漆未正确打磨", "细微裂缝让雨水渗入"],
    solutions: ["刮除所有松动油漆至牢固边缘", "涂抹抗碱或防潮封底剂", "修补细微裂缝后再重新粉刷", "使用可水洗内墙漆或耐候外墙漆"],
    whenToCall: ["重新粉刷后油漆反复剥落", "墙面潮湿或有白色粉状盐渍", "浴室、阳台或外墙附近油漆剥落"],
    localFaq: {
      q: "可以直接在剥落的油漆上重新粉刷吗？",
      a: "不可以。松动油漆必须先刮除和打磨，否则新涂层会随旧层一起剥落。"
    }
  },
  "faded-exterior-paint-malaysia": {
    symptom: "外墙在紫外线和暴雨循环后显得粉化、斑驳或褪色。",
    causes: ["低档外墙漆", "未使用耐候封底剂", "西向墙面紫外线暴露", "热带雨水导致霉菌和污垢堆积"],
    solutions: ["高压清洗外墙", "处理霉菌和粉化", "涂抹抗碱封底剂", "使用优质耐候外墙漆"],
    whenToCall: ["用手擦拭时墙面粉化", "可见细微裂缝", "需要脚手架或高梯"],
    localFaq: {
      q: "马来西亚外墙通常多久需要重新粉刷一次？",
      a: "大多数房屋每 5–7 年需要重新粉刷一次。如果使用低档油漆或潮湿暴露严重，则需要更早。"
    }
  },
  "damp-walls-paint-bubbling": {
    symptom: "油漆起泡、出现棕色污渍或白色盐渍，因为水分正在穿过墙壁或楼板。",
    causes: ["浴室或阳台渗漏", "多孔砖石上升潮湿", "外墙裂缝让雨水进入", "墙内管道漏水"],
    solutions: ["用湿度计追踪水分来源", "密封外墙裂缝或浴室 grout", "在合适位置涂抹防水屏障", "墙壁干燥后修补石膏并重新粉刷"],
    whenToCall: ["重新粉刷后气泡反复出现", "墙面感觉冰冷或潮湿", "出现霉味或黑色斑块"],
    localFaq: {
      q: "油漆能解决墙面潮湿问题吗？",
      a: "不能。油漆本身无法阻止潮湿。必须先修复水分来源，然后才能重新粉刷。"
    }
  },
  "ceiling-mold-stains": {
    symptom: "天花板板材在接触水分后出现深色霉菌、黄褐色环或软性下垂区域。",
    causes: ["楼上浴室漏水", "空调排水管漏水", "屋顶或阳台渗漏", "通风不良和冷凝"],
    solutions: ["首先停止水源", "移除已霉变的软板材", "安装防潮石膏板", "干燥后批灰、底漆并重新粉刷"],
    whenToCall: ["天花板软化或下垂", "雨后或使用浴室后水渍扩大", "霉菌在板材上蔓延"],
    localFaq: {
      q: "已变色的天花板板材可以重新粉刷吗？",
      a: "只有在板材干燥且结构牢固的情况下才可以。软化或发霉的板材应在收尾前更换。"
    }
  },
  "burst-pipe-emergency": {
    symptom: "水从管道、阀门或墙壁区域喷射、淹没或快速积聚。",
    causes: ["旧管道或接头腐蚀", "水压突然升高", "配件不良或粘合剂失效", "意外钻到隐藏管道"],
    solutions: ["立即关闭主水阀", "保护电器和地板", "找到爆裂部分", "更换损坏管道或阀门并进行压力测试"],
    whenToCall: ["无法快速止水", "漏水在墙内或天花板内", "附近有电源点"],
    localFaq: {
      q: "管道爆裂时我应该首先做什么？",
      a: "立即关闭主水阀，让人远离电器区域，并用照片或视频联系水管工。"
    }
  },
  "low-water-pressure-kl": {
    symptom: "浴室、厨房或整个房屋水压低，导致水流微弱。",
    causes: ["管道被矿物质或铁锈堵塞", "当局供水压力低", "主阀门半开", "墙内隐藏漏水"],
    solutions: ["检查并清洁水龙头和过滤器", "完全打开主阀门", "检查隐藏漏水", "更换堵塞或生锈的管道"],
    whenToCall: ["整个房屋水压低", "水呈棕色或生锈", "问题突然发生"],
    localFaq: {
      q: "水压低是否意味着有漏水？",
      a: "不一定。可能由管道堵塞、供水压力低或阀门半开引起。"
    }
  },
  "blocked-drain-toilet": {
    symptom: "马桶堵塞，水流缓慢或完全不排水。",
    causes: ["纸巾或异物堵塞", "管道被油脂或残渣堵塞", "主排水管问题", "管道弯曲或损坏"],
    solutions: ["使用马桶吸或疏通器", "避免将异物丢入马桶", "如有需要请水管工进行高压清洗", "如果问题反复出现，检查主排水管"],
    whenToCall: ["吸盘无效", "水上升到其他马桶", "排水管有恶臭"],
    localFaq: {
      q: "马桶堵塞时我应该做什么？",
      a: "不要继续冲水。先使用吸盘。如果无效，立即联系水管工。"
    },
    overview: "管道堵塞或马桶堵塞是吉隆坡和雪兰莪家庭最常见的管道维修之一，而且通常是慢慢累积的——头发、皂垢和油污逐渐收窄管径，直到某天水排不下去。一旦堵塞发生在主排水管或马桶就变得紧急：污水无处可去，可能倒灌到房子最低层。",
    diyChecks: [
      "立即停止使用受影响的洗手盆、淋浴或马桶——每冲一次水都把堵塞推得更深",
      "检查其他排水口是否也变慢——这说明是主管问题而非单个洁具",
      "用吸盘对准排水口形成完整密封；不要与化学品混用",
      "留意地漏返水或污水气味——这是主管堵塞的信号"
    ],
    prevention: [
      "淋浴间和洗手盆使用滤网拦截头发",
      "不要把食用油或油脂倒进水池——它们会在管内凝固",
      "只冲厕纸；湿巾和卫生用品是马桶堵塞最常见的原因",
      "每周用热水冲洗排水管，防止皂垢堆积"
    ],
    costDetail: "用手动工具或弹簧疏通单个洁具约 RM150 起。拆马桶、清理存水弯或主管堵塞可达 RM500 以上。开工前我们会先确认堵塞深度和施工方式；人工享受标准保修。"
  },
  "water-heater-not-working": {
    symptom: "热水器不加热、漏水或完全不工作。",
    causes: ["加热元件损坏", "温控器失效", "水箱内积聚沉积物", "电气连接松动"],
    solutions: ["检查电源和开关", "清洁水箱沉积物", "更换元件或温控器", "请技师进行全面诊断"],
    whenToCall: ["完全没有热水", "热水器漏水", "热水器有烧焦味"],
    localFaq: {
      q: "热水器通常能使用多久？",
      a: "储水式热水器通常可使用 8–12 年。即热式热水器如果保养得当，使用寿命更长。"
    }
  },
  "sagging-plaster-ceiling": {
    symptom: "石膏天花板板材下垂、开裂或部分脱落。",
    causes: ["楼上漏水", "石膏板因潮湿损坏", "支撑结构薄弱", "原始安装不当"],
    solutions: ["首先停止漏水源头", "更换损坏板材为防潮石膏板", "修复或更换支撑框架", "批灰并重新粉刷"],
    whenToCall: ["天花板下垂超过 1 厘米", "出现大裂缝或板材松动", "仍有水滴落"],
    localFaq: {
      q: "我可以自己修复下垂的天花板吗？",
      a: "不建议。下垂通常表示有结构问题或漏水，需要专业人员处理。"
    },
    overview: "天花板下垂是最不能拖延的天花板问题。吊顶板因漏水浸泡、吊杆和木龙骨失效或超载而弯曲——一旦开始下垂，固定件已在失去抓力，天花板可能突然掉落。肉眼看到的凹陷往往比实际更严重，因为空隙掩盖了板材移动的距离。",
    diyChecks: [
      "不要站在下垂区域正下方，并移开家具",
      "用手掌轻按最低点——板材发软或有弹性说明受过水损",
      "查看下垂板材上的水渍或深色水环，这指向活跃的漏水点",
      "检查下垂位置上方的吊扇或重型灯具是否后期加装"
    ],
    prevention: [
      "屋顶或浴室漏水要立即修复——潮湿是石膏板最大的敌人",
      "切勿在没有龙骨支撑的情况下把重物挂上石膏板",
      "装修后每逢雨季开始检查天花板，及早发现下垂迹象",
      "浴室、厨房和空调附近使用防潮板"
    ],
    costDetail: "小面积干性下垂的加固和重新批灰约 RM180 起。更换受潮板材并改用金属龙骨约 RM600–RM1,500+，视面积及是否包含电工和油漆而定。我们会先检查龙骨再报价——下垂天花板按结构计价，而不是按板材数量。"
  },
  "ceiling-leak-after-rain": {
    symptom: "雨后天花板出现水渍。",
    causes: ["瓦片移位或损坏", "屋顶泛水板开裂", "排水沟堵塞", "平屋顶或阳台渗漏"],
    solutions: ["检查并修复瓦片和泛水板", "清洁排水沟和雨水管", "如有需要涂抹防水层", "修复水源后修补受损天花板"],
    whenToCall: ["每次下雨水渍都扩大", "天花板有水滴落", "涉及平屋顶或阳台"],
    localFaq: {
      q: "你们如何确定天花板漏水的来源？",
      a: "我们会检查屋顶、泛水板、排水沟和阳台，然后进行淋水测试确认来源。"
    },
    overview: "只有下雨后才漏水的天花板指向建筑外围而非水管：瓦片开裂或移位、女儿墙或烟囱周围泛水板失效、阳台渗水，或外墙裂缝把雨水直接引到墙内。天花板上的水渍通常离进水点很远，因为水会沿着楼板底面流动一段距离才滴落。",
    diyChecks: [
      "在滴水处放水桶并记录进水位置——源头通常在别处",
      "下雨时观察天花板的水痕走向：水渍常沿楼板接缝或梁线延伸",
      "雨停后检查最近的阳台、女儿墙和屋顶天沟是否有积水或裂缝",
      "让水远离电气设备——如果漏水靠近灯具，先关闭该回路"
    ],
    prevention: [
      "每年雨季前清理天沟并检查瓦片",
      "女儿墙和阳台接缝按计划定期重新密封，而不是等出现水渍",
      "外墙裂缝出现当年就修补",
      "修复后用淋水测试验证，而不是等下一场雨"
    ],
    costDetail: "定位并封堵单一外部进水点约 RM250 起。阳台或平屋顶防水层失效更贵——RM1,500–RM3,500+，视面积和是否掀砖而定。我们总是先找到并止住水源，再报天花板修复价，确保水渍不再复发。"
  },
  "cracked-ceiling-joints": {
    symptom: "石膏天花板接缝处开裂或张开，尤其在角落和边缘。",
    causes: ["房屋结构移动", "石膏板安装不当", "潮湿导致膨胀", "房屋年久失修"],
    solutions: ["清洁裂缝并贴上网格带", "使用弹性填缝剂", "批灰并重新粉刷", "如果裂缝反复出现，检查移动来源"],
    whenToCall: ["裂缝越来越宽", "裂缝区域天花板下垂", "修复后裂缝再次出现"],
    localFaq: {
      q: "天花板接缝开裂是否严重？",
      a: "如果只是外观问题，通常不严重。但如果裂缝较宽或反复出现，可能表示结构移动。"
    },
    overview: "沿石膏板接缝的直线裂缝是马来西亚家庭最常见的天花板缺陷，而且通常是饰面问题而非结构问题。接缝带或嵌缝膏刮得太薄、房屋沉降导致龙骨轻微移动，或潮气使嵌缝膏软化——每次刷漆不处理接缝，一个季节内又裂开。",
    diyChecks: [
      "用手指沿裂缝划过——如果接缝带边缘翘起，说明接缝没有贴好",
      "判断裂缝是沿直线延伸（接缝开裂）还是跨板斜走（龙骨位移）",
      "轻按裂缝两侧——有位移说明板材固定不牢",
      "查看裂缝附近是否潮湿或有水渍，这可能指向软化接缝的水源"
    ],
    prevention: [
      "任何新吊顶工程使用玻纤接缝带和优质嵌缝膏",
      "保持室内湿度适中——空调房不宜长时间处于高湿状态",
      "湿区附近接缝开裂时，检查屋顶或浴室是否漏水",
      "刷漆时先正确处理裂缝——光靠油漆永远修不好接缝裂缝"
    ],
    costDetail: "单条接缝重贴（含批灰、底漆和面漆）约 RM180 起。多条接缝或全屋顶面批灰 RM500–RM900+；若发现板材位移，龙骨加固单独计价。我们会先判断裂缝是否仍在扩展，确保修复持久。"
  },
  "condensation-ceiling-mold": {
    symptom: "浴室或厨房天花板因冷凝出现黑色霉菌。",
    causes: ["通风不良", "烹饪或洗澡产生高湿度", "天花板温度低于空气", "没有排气扇"],
    solutions: ["安装或使用排气扇", "洗澡或烹饪时开窗", "涂抹防霉漆", "改善整体通风"],
    whenToCall: ["霉菌迅速蔓延", "霉味强烈", "即使有排气扇仍有问题"],
    localFaq: {
      q: "如何防止浴室天花板发霉？",
      a: "洗澡时和之后使用排气扇，确保通风良好，并涂抹防霉漆。"
    },
    overview: "冷凝霉斑是湿热空气遇到较冷的天花形成——常见于通风不良的浴室、厨房和空调房。这不一定是漏水，但必须检查，因为板材后方的隐藏漏水也会产生同样的黑斑。",
    diyChecks: [
      "观察霉斑是沿最冷区域分布，还是沿明显的水迹路径",
      "触摸板材——变软或受潮说明是漏水而非冷凝",
      "打开排气扇，看冷凝是否消散",
      "检查是否有空调管滴水或浴室蒸汽来源"
    ],
    prevention: [
      "淋浴期间和之后打开排气扇",
      "空调房偶尔通风",
      "潮湿房间使用防霉底漆和涂料",
      "及时修复慢漏或空调管滴水"
    ],
    costDetail: "清洁和防霉重涂是较低方案（RM180 起）。若板材变软或霉已深入，更换板材会升至 RM1,000。我们会先确认是湿气还是漏水。",
  },
  "bathroom-leak-upper-floor": {
    symptom: "楼上浴室漏水导致楼下天花板或墙壁出现水渍。",
    causes: [" grout 或密封胶失效", "防水膜损坏", "隐藏管道漏水", "地漏堵塞"],
    solutions: ["检查并修复 grout 和密封胶", "如有需要重新涂抹防水膜", "检查隐藏管道", "清洁地漏"],
    whenToCall: ["雨后或洗澡后仍有水滴", "水渍越来越大", "天花板有潮湿气味"],
    localFaq: {
      q: "维修浴室漏水是否需要敲砖？",
      a: "不一定。我们会先尝试无损方法如 PU 灌浆。如果无效，才会考虑敲砖。"
    }
  },
  "roof-leak-rainy-season": {
    symptom: "雨季屋顶漏水加剧或出现新漏水点。",
    causes: ["瓦片损坏或移位", "屋顶泛水板和脊瓦漏水", "排水沟堵塞", "平屋顶或石棉瓦损坏"],
    solutions: ["更换或修复损坏瓦片", "修复泛水板和脊瓦", "清洁排水沟", "如有需要涂抹防水膜"],
    whenToCall: ["每次下雨都漏水", "多处漏水", "涉及平屋顶或石棉瓦"],
    localFaq: {
      q: "屋顶通常能使用多久才开始漏水？",
      a: "瓦片屋顶通常可使用 15–25 年。每年检查可帮助及早发现问题。"
    },
    overview: "屋顶漏水在雨季最常见，因为雨季才是对屋顶的真正考验——在马来西亚，多数漏水从边缘开始：瓦片开裂或移位、天沟堵塞后从封檐板下倒灌，或屋顶与墙体、女儿墙、空调管道交接处的泛水板失效。水会沿着椽子和保温层流很远才在天花板显现，所以滴水点很少是真正的进水点。",
    diyChecks: [
      "从阁楼内寻找透过屋顶的光线——这是找洞最快的方法",
      "雨后检查天沟和落水管是否溢流——堵塞的天沟是许多'屋顶漏水'的元凶",
      "检查烟囱、女儿墙和管道穿出点周围的泛水板是否翘起或锈蚀",
      "标记水渍位置和日期；水渍扩大说明仍在进水，静止的可能是旧伤"
    ],
    prevention: [
      "雨季前清理天沟并修剪伸到屋顶的树枝",
      "发现瓦片开裂立即更换，不要等天花板出现水渍",
      "每几年重新密封屋顶穿透点（空调管、天线、天窗）",
      "每年安排一次屋顶检查，最好在十一月前"
    ],
    costDetail: "单块瓦片或泛水板修补（含架设）约 RM250 起。重新铺设屋脊、更换部分瓦片或重做平屋顶防水层，费用升至 RM1,500–RM5,000+，视屋顶类型和攀爬难度而定。我们会先安全检查屋顶再报价，并事先说明维修方案。"
  },
  "wall-dampness-rising": {
    symptom: "墙壁从下方向上潮湿，通常出现在老房子或低洼地区。",
    causes: ["无防潮层 (DPC)", "墙壁附近土壤潮湿", "地下管道漏水", "房屋周围排水不良"],
    solutions: ["如可能安装新防潮层", "修复房屋周围排水", "涂抹防潮漆和石膏", "检查地下管道"],
    whenToCall: ["潮湿每年上升更高", "墙面出现白色盐渍", "多面墙壁都有问题"],
    localFaq: {
      q: "上升潮湿问题可以完全解决吗？",
      a: "在大多数情况下，我们可以通过修复排水和使用防潮处理来减少或阻止它。"
    }
  },
  "swimming-pool-leak-balcony": {
    symptom: "游泳池或阳台漏水导致水滴到下方单位。",
    causes: ["防水膜失效", "混凝土或瓷砖开裂", "排水沟堵塞", "阳台与墙壁接缝漏水"],
    solutions: ["检查并修复防水膜", "用合适材料修补裂缝", "清洁排水沟", "用弹性密封胶修复接缝"],
    whenToCall: ["水持续滴落", "水渍越来越大", "下方单位投诉"],
    localFaq: {
      q: "你们能不敲砖修复阳台漏水吗？",
      a: "可以。在大多数情况下，我们使用 PU 灌浆或液体防水膜，无需敲砖。"
    },
    overview: "阳台或泳池平台漏水是防水层失效，而不是瓷砖问题——瓷砖本身不防水，靠的是下面的防水膜。多年日晒雨淋后，防水膜老化、在墙地交接处开裂，或美缝让水渗到楼板，漏水在楼下天花板或墙面显现，有时距真正源头好几米。",
    diyChecks: [
      "把阳台地面擦干，再倒少量水观察流向——积水处是重点怀疑对象",
      "查看楼下天花板的滴水痕迹，在雨前雨后或冲洗前后标记其位置变化",
      "用硬币或钥匙轻敲瓷砖——空洞声说明瓷砖已与防水层脱开",
      "检查美缝和墙地交接处是否有裂缝，尤其是地漏附近"
    ],
    prevention: [
      "每隔几年在出现水渍前重新密封美缝和硅胶接缝",
      "保持地漏畅通，避免积水长时间压迫防水层",
      "不要在阳台地面打孔安装晾衣架或储物架而不做重新防水",
      "防水施工后坚持做蓄水试验，再铺贴瓷砖"
    ],
    costDetail: "小阳台免敲砖涂层或裂缝注浆约 RM850 起。大面积平台和泳池周边掀砖重做防水层，费用可达 RM12,000+。我们会先对楼板做湿度定位，让修复针对真实渗水路径，而不只是处理水渍。"
  },
  "loose-door-hinge": {
    symptom: "门铰链松动，门不对齐或发出吱吱声。",
    causes: ["螺丝松动或丢失", "螺丝孔损坏", "门较重或使用频繁", "铰链老化"],
    solutions: ["拧紧或更换螺丝", "用木塞修复损坏孔", "更换铰链", "调整门对齐"],
    whenToCall: ["门无法正确关闭", "铰链严重损坏", "门较重需要新铰链"],
    localFaq: {
      q: "你们能修复松动的门铰链吗？",
      a: "可以。我们可以在 30–45 分钟内拧紧螺丝、使用木塞或更换铰链。"
    },
    overview: "门下垂、刮地或锁不上，通常是铰链问题而非门本身的问题。多年使用后，固定在木门框上的铰链螺丝逐渐松动，铰链销磨损，或门框木材因湿度而膨胀收缩，再也无法咬紧螺丝。",
    diyChecks: [
      "把门完全打开，检查上下铰链的螺丝是否松动或滑丝",
      "握住门把手轻轻上提——有垂直位移说明铰链销磨损或螺丝松动",
      "观察门与门框的缝隙：上下缝隙不均说明门已下垂",
      "关门时检查锁舌是否仍对准锁扣板"
    ],
    prevention: [
      "一听到异响或发现门下垂就立即拧紧铰链螺丝，避免孔位滑丝",
      "使用能深入门框木方的长螺丝，而不仅是固定在饰条上",
      "保持门边油漆完好，防止湿气使木材膨胀",
      "锁舌卡滞要及早维修——用力推门会拉伤铰链"
    ],
    costDetail: "用加长螺丝重新固定或向滑丝的孔位打入木塞，费用约 RM90 起。整套更换铰链并重新对准较贵；重型门或带智能锁的门需要更坚固的铰链，费用可达 RM350 以上。开工前我们会先确认方案。"
  },
  "tv-fell-off-wall": {
    symptom: "电视从墙上掉落，因为安装不牢固。",
    causes: ["锚栓不适合墙壁类型", "螺丝不足或太短", "石膏墙无支撑", "电视太重，支架不匹配"],
    solutions: ["检查并更换合适锚栓", "用正确支架重新安装", "如有需要添加支撑", "确保支架能承受电视重量"],
    whenToCall: ["电视掉落或即将掉落", "墙壁严重损坏", "电视较大且较重"],
    localFaq: {
      q: "石膏墙适合使用什么类型的锚栓？",
      a: "我们使用专为石膏墙设计的高强度锚栓，可承受 30–50 公斤重量，具体取决于电视尺寸。"
    }
  },
  "stuck-window-lock": {
    symptom: "窗户锁卡住，难以打开或关闭。",
    causes: ["污垢和灰尘堆积", "油干涸或生锈", "机械部件损坏", "窗户弯曲或不对齐"],
    solutions: ["清洁并润滑锁具", "更换损坏部件", "调整窗户对齐", "更换锁具"],
    whenToCall: ["锁完全不工作", "窗户无法打开", "多个窗户都有问题"],
    localFaq: {
      q: "你们能修复卡住的窗户锁吗？",
      a: "可以。我们通常可以在 30–60 分钟内清洁、润滑或更换锁具。"
    },
    overview: "窗户锁或把手卡住不只是不便——在低楼层和易于攀爬的阳台上，这是安全隐患；推拉窗关不严还会在暴雨时进水进灰。问题通常源于轨道或锁具积灰、窗框位移导致锁扣错位，或把手机构磨损。",
    diyChecks: [
      "把窗完全关上再试锁——如果用力才能锁上，说明锁扣已错位",
      "用吸尘器清理推拉轨道，检查是否有碎屑卡住锁舌",
      "擦干机构后再试一次；把手阻力大时切勿强行扳动",
      "检查玻璃窗扇是否晃动——不稳定的窗扇不能强推"
    ],
    prevention: [
      "每几个月清理一次窗轨和锁机构，雨季前尤其重要",
      "轨道和锁具使用干性硅油，不要用机油或黄油",
      "窗框变形要及早修理，避免锁位越来越偏",
      "雨季开始时逐一测试所有窗户锁"
    ],
    costDetail: "清洁、润滑和重新对准约 RM80 起。更换把手或锁扣（含配件）通常 RM150–RM300，视窗型而定；轨道弯曲或平开窗五金更贵。我们会先确认配件货源再报价。"
  },
  "ikea-furniture-assembly-help": {
    symptom: "IKEA 家具难以组装或组装后不稳定。",
    causes: ["说明书不清晰", "零件损坏或丢失", "缺乏工具或经验", "组装空间狭小"],
    solutions: ["按步骤跟随说明书", "开始前检查所有零件", "使用正确工具", "如有需要寻求专业帮助"],
    whenToCall: ["家具较大且复杂", "零件损坏或丢失", "没有时间或工具"],
    localFaq: {
      q: "组装一个 3 门 IKEA 衣柜需要多长时间？",
      a: "有经验的人通常需要 2–4 小时。我们可以在 1–2 小时内完成。"
    },
    overview: "板式家具组装是马来西亚家庭的常见烦恼——说明书上看起来简单的衣柜，实际可能要装几个小时、需要两个人，装不好还会摇晃甚至不安全。多数问题不是手艺问题而是漏了步骤：面板顺序装错、偏心锁没到位，或高柜从未固定上墙。",
    diyChecks: [
      "开始前把所有面板和五金按说明书摆开清点",
      "检查偏心锁是否转到锁定位置——偏心锁松动是家具摇晃最常见的原因",
      "测试框架是否方正：衣柜摇晃说明有面板没有完全到位",
      "检查墙体固定套件——高度超过约 60 厘米的高柜应固定上墙"
    ],
    prevention: [
      "把说明书和备用五金收进原包装盒，方便日后搬家",
      "使用两周后重新拧紧偏心锁和螺丝，木材会自然沉降",
      "即使厂家标注为可选，高大家具也应固定上墙",
      "液体洒落立即擦干——潮气会使刨花板边缘膨胀、损坏接合处"
    ],
    costDetail: "组装按大小和复杂程度计价：小书架或书桌约 RM100 起，三门衣柜通常 RM200–RM400，大型或多件家具加上墙固定为 RM400–RM600+。拆装、搬运或修正装错的家具需另计时间。凭照片和物品清单即可报价。"
  },
  "rccb-tripping-kl": {
    symptom: "RCCB（漏电保护器）无明显原因频繁跳闸。",
    causes: ["电流泄漏到地", "设备损坏或老化", "电线损坏或接触不良", "电路过载"],
    solutions: ["检查所有设备和电线", "更换损坏的 RCCB", "修复损坏电线", "减少电路负载"],
    whenToCall: ["每次下雨 RCCB 都跳闸", "无明显原因跳闸", "配电箱有烧焦味"],
    localFaq: {
      q: "RCCB 频繁跳闸是否危险？",
      a: "是的。这表示存在电流泄漏，可能导致触电。必须由持牌电工检查。"
    }
  },
  "flickering-lights-kl": {
    symptom: "灯光闪烁或突然变暗。",
    causes: ["电线连接松动", "灯泡或 LED 损坏", "电压不稳定", "电路过载"],
    solutions: ["检查并拧紧连接", "更换灯泡或 LED", "检查供电电压", "减少电路负载"],
    whenToCall: ["整个房屋灯光闪烁", "开关有烧焦味", "雨后出现问题"],
    localFaq: {
      q: "灯光闪烁是否意味着有布线问题？",
      a: "可能。灯光闪烁可能由连接松动、灯泡损坏或电压问题引起。"
    }
  },
  "water-heater-not-heating": {
    symptom: "热水器即使开关已打开也不加热水。",
    causes: ["加热元件损坏", "温控器失效", "无电源供应", "水箱内沉积物过厚"],
    solutions: ["检查电源供应", "更换加热元件", "更换温控器", "清洁水箱沉积物"],
    whenToCall: ["完全没有热水", "每次打开开关都跳闸", "热水器有烧焦味"],
    localFaq: {
      q: "更换热水器加热元件的费用是多少？",
      a: "费用通常在 RM150–RM350 之间，具体取决于品牌和型号。"
    },
    overview: "即热式热水器一直不热，通常是加热管烧毁、温控器失效、进水滤网堵塞或管道有气锁。这是安全性敏感的维修，因为热水器水电交汇，非电工不应自行拆开。",
    diyChecks: [
      "检查热水器的隔离开关和供电断路器",
      "确认同一线路上的其他电器仍正常",
      "检查水流是否比平时弱（滤网堵塞）",
      "不要拆开机器——加热管和线路带电"
    ],
    prevention: [
      "每 2 年检查一次加热管和温控器",
      "水流变小时清洁进水滤网",
      "出现跳闸或闪烁立即处理",
      "在寿命末期及时更换整机"
    ],
    costDetail: "更换加热管是较低方案（RM150 起）。温控器故障或整机更换会升至 RM680。开工前我们会报零件和人工费，并先断水断电。",
  },
  "ceiling-fan-wobbling": {
    symptom: "吊扇旋转时振动或摇晃。",
    causes: ["扇叶不平衡", "安装螺丝松动", "电机损坏", "安装不平"],
    solutions: ["检查并拧紧所有螺丝", "用平衡套件平衡扇叶", "如有需要更换电机", "确保安装平整"],
    whenToCall: ["振动非常剧烈", "电机发出奇怪声音", "吊扇几乎掉落"],
    localFaq: {
      q: "你们能修复摇晃的吊扇吗？",
      a: "可以。我们可以在 45–90 分钟内平衡扇叶、拧紧螺丝或更换电机。"
    },
    overview: "吊扇晃动通常是失衡——扇叶不正、安装支架松动，或风扇挂在未加固的石膏天花吊钩上。放任不管会进一步松动固定件，甚至损坏天花。",
    diyChecks: [
      "检查所有扇叶螺丝是否拧紧、扇叶是否变形",
      "清理扇叶积尘——积尘会改变扇叶重量",
      "确认低速运转时风扇不晃动",
      "查看天花处的吊罩或安装支架是否松动"
    ],
    prevention: [
      "每 6 个月拧紧一次扇叶螺丝",
      "使用加固吊钩，尤其是石膏天花",
      "定期清洁扇叶避免失衡",
      "一出现异响就检查轴承"
    ],
    costDetail: "扇叶配平和拧紧支架是较低方案（RM90 起）。电机磨损或缺少加固吊钩费用更高，可达 RM380 或更换整机。我们会现场确认。",
  },
  "hollow-tiles-floor": {
    symptom: "敲击地板瓷砖时发出空响，表示粘贴不牢固。",
    causes: ["瓷砖安装不当", "地板不平", "砂浆不足", "大尺寸瓷砖无支撑"],
    solutions: ["刮除松动瓷砖", "用砂浆找平地板", "用正确砂浆重新安装", "如有需要使用较小瓷砖"],
    whenToCall: ["多块瓷砖松动", "地板严重不平", "大尺寸瓷砖（超过 60x60cm）"],
    localFaq: {
      q: "发出空响的瓷砖可以在不更换所有瓷砖的情况下修复吗？",
      a: "可以。我们可以只更换松动的瓷砖，并在该区域找平地板。"
    }
  },
  "spc-flooring-peeling-edges": {
    symptom: "SPC 地板边缘剥落或翘起。",
    causes: ["安装不当", "湿度过高", "热膨胀", "地板质量低"],
    solutions: ["检查并修复安装", "确保有足够膨胀空间", "降低湿度", "更换损坏部分"],
    whenToCall: ["多处边缘剥落", "走路时地板发出声音", "整个房间都有问题"],
    localFaq: {
      q: "SPC 地板适合潮湿区域如厨房吗？",
      a: "如果安装正确且有足够膨胀空间，是适合的。高湿度如果不控制，可能会导致问题。"
    },
    overview: "SPC 或乙烯基地板边缘翘起，几乎都是湿气或位移问题——基层未干燥或未找平、伸缩缝留得太紧，或地板铺在沉重家具下。解决办法是纠正根源而不是把地板粘回去，否则还会再次翘起。",
    diyChecks: [
      "按压翘起的边缘——是否出现水或潮气？",
      "检查踢脚线是否压住地板、挤掉了伸缩缝",
      "查看墙边、门边或厨房是否有受潮迹象",
      "观察是单块翘起还是整排翘起"
    ],
    prevention: [
      "安装前务必检测基层含水率",
      "靠墙留出正确的伸缩缝",
      "沉重家具下使用毛毡垫",
      "及时擦干泼洒，尤其是接缝处"
    ],
    costDetail: "重新铺设几块地板是较低方案（RM120 起）。若基层需烘干、找平或加防潮层，费用会升至约 RM950。我们会先检查基层，确保修复持久。",
  },
  "clogged-gutter-leaking": {
    symptom: "屋顶排水沟堵塞导致水溢出并渗入墙壁。",
    causes: ["树叶和污垢堆积", "排水沟弯曲或损坏", "无排水沟盖", "暴雨超过排水能力"],
    solutions: ["定期清洁排水沟", "安装排水沟盖", "修复或更换损坏排水沟", "确保雨水排水正确"],
    whenToCall: ["每次下雨水都溢出", "墙壁变得潮湿", "排水沟严重损坏"],
    localFaq: {
      q: "屋顶排水沟需要多久清洁一次？",
      a: "我们建议至少每年清洁 2 次，如果附近有树木则需要更频繁。"
    },
    overview: "马来西亚大雨时天沟溢水，是因为树叶和杂物堵塞了沟槽或落水管，而下垂的部分让积水无法排出。溢出的水沿檐板和墙面流下，甚至渗入天花。",
    diyChecks: [
      "下雨时从地面观察水是否从天沟边缘溢出",
      "检查沟槽内是否长出植物、树叶或苔藓",
      "查看天沟托架是否下垂或脱落",
      "清理落水管入口处可见的堵塞"
    ],
    prevention: [
      "每次季风前后清理天沟",
      "若树木遮蔽屋顶，安装防叶网",
      "天沟开始下垂时重新固定托架",
      "修剪会掉落到屋顶的树枝"
    ],
    costDetail: "清理和轻微校正天沟是较低方案（RM280 起）。更换下垂段、维修檐板或加装防叶网会升至 RM1,200。我们会先做屋顶高度检查再报价。",
  },
  "kitchen-cabinet-door-misaligned": {
    symptom: "厨房橱柜门不对齐，难以关闭或自行打开。",
    causes: ["铰链松动或损坏", "橱柜不平", "门扇弯曲", "螺丝松动"],
    solutions: ["拧紧或更换铰链", "调整门扇对齐", "如有需要找平橱柜", "如有需要更换门扇"],
    whenToCall: ["多扇门不对齐", "橱柜严重不平", "门扇损坏"],
    localFaq: {
      q: "你们能调整不对齐的橱柜门吗？",
      a: "可以。我们可以在 30–60 分钟内调整铰链和对齐。"
    },
    overview: "橱柜门高低不平或关不严，通常是铰链磨损，或柜体因湿气和负重而移位。调整铰链很快就能解决，但放任不管会让门相互刮擦、铰链加速磨损，门扣也失效。",
    diyChecks: [
      "检查哪个铰链松动并拧紧螺丝",
      "观察门是刮到旁边的门还是柜体",
      "测试缓冲闭合——阻尼器失效会让门撞击",
      "用水平尺检查整排柜体是否移位"
    ],
    prevention: [
      "打扫厨房时拧紧铰链螺丝",
      "在门开始撞击前更换磨损的阻尼器",
      "不要在门面上挂重物",
      "保持厨房湿度稳定"
    ],
    costDetail: "铰链调整和更换阻尼器是较便宜的方案（RM90 起）。加固移位的柜体或更换多个铰链费用更高。我们会检查后确认是调整问题还是柜体移位。",
  },
  "flickering-downlights": {
    symptom: "筒灯闪烁或亮度不稳定。",
    causes: ["LED 驱动器损坏", "连接松动", "灯泡或 LED 不兼容", "电压不稳定"],
    solutions: ["更换驱动器或 LED", "检查并拧紧连接", "使用兼容灯泡", "检查供电电压"],
    whenToCall: ["多盏筒灯闪烁", "筒灯有烧焦味", "整个房屋都有问题"],
    localFaq: {
      q: "闪烁的筒灯可以在不更换整个筒灯的情况下修复吗？",
      a: "可以。在大多数情况下，我们只需更换损坏的驱动器或 LED。"
    }
  },
  "plaster-ceiling-cracking-joints": {
    symptom: "石膏天花板接缝处沿接缝线开裂。",
    causes: ["结构移动", "石膏板安装不当", "潮湿导致膨胀", "房屋年久失修"],
    solutions: ["清洁裂缝并贴上网格带", "使用弹性填缝剂", "批灰并重新粉刷", "检查移动来源"],
    whenToCall: ["裂缝越来越宽", "裂缝区域天花板下垂", "修复后裂缝再次出现"],
    localFaq: {
      q: "石膏天花板接缝开裂是否严重？",
      a: "如果只是外观问题，通常不严重。但如果裂缝较宽或反复出现，可能表示结构移动。"
    }
  },
  "peeling-skim-coat": {
    symptom: "批灰层剥落或开裂。",
    causes: ["批灰前表面未清洁", "湿度过高", "批灰混合比例不当", "涂层太厚"],
    solutions: ["刮除松动部分", "正确清洁表面", "用正确比例涂抹新批灰", "完全干燥后再粉刷"],
    whenToCall: ["多处剥落", "墙面潮湿", "雨后出现问题"],
    localFaq: {
      q: "剥落的批灰可以在不更换整个墙面的情况下修复吗？",
      a: "可以。我们可以刮除损坏部分、清洁表面并在该区域涂抹新批灰。"
    },
    overview: "批灰层在刷漆后起粉或剥落，通常是粘结失效——墙面有灰尘、灰浆配比过稀，或在完全固化前就刷漆。不处理基层就直接重新批灰，只会再次剥落。",
    diyChecks: [
      "用手擦拭表面——若掉粉，说明粘结已失效",
      "检查剥落是局部还是整面墙",
      "查看失效区域后方是否有潮湿或冷凝",
      "在未受影响处用胶带测试漆膜附着力"
    ],
    prevention: [
      "刷漆前务必对干净、已固化的批灰层上底漆",
      "在光滑或曾刷漆的墙面使用界面剂",
      "批灰完全固化（7–14 天）后再装饰",
      "固化期间控制通风和湿度"
    ],
    costDetail: "铲除并重新批灰小面积是较低方案（RM120 起）。整墙重新批灰和重新装饰费用更高。我们会先确认失效面积和基层情况再报价。",
  },
  "epoxy-floor-yellowing": {
    symptom: "环氧地坪变黄或褪色。",
    causes: ["紫外线暴露", "使用强力化学清洁剂", "环氧质量低", "地坪老化"],
    solutions: ["涂抹 UV 保护层", "使用合适清洁剂", "更换为优质环氧", "避免阳光直射"],
    whenToCall: ["整个地坪变色", "地坪变得光滑或粘腻", "问题在不到 2 年内出现"],
    localFaq: {
      q: "变色的环氧地坪可以修复吗？",
      a: "在大多数情况下，我们可以打磨表面并涂抹新层。如果损坏严重，可能需要更换整个地坪。"
    },
    overview: "新环氧地坪变黄几乎都是紫外线照射到不耐紫外线的面漆——常见于本用于室内、之后暴露在阳光下的芳香族树脂。这并不代表地坪失效，但会持续恶化，直到用耐紫外线面漆重新罩面。",
    diyChecks: [
      "观察哪些区域变黄——通常只有朝阳区域",
      "测试表面是否仍然坚硬，还是已变软发粘",
      "检查受影响区域是否有家具压痕或化学品泼洒",
      "在确认涂层类型前避免使用强溶剂"
    ],
    prevention: [
      "在阳光照射区域指定使用脂肪族 PU 面漆",
      "在直射阳光的窗户使用窗帘、百叶或窗膜",
      "避免地坪接触强化学品",
      "在变黄深入前重新罩面"
    ],
    costDetail: "小面积重新罩耐紫外线 PU 面漆通常处于 RM280–RM1,800 区间的下半段；大面积整体打磨重涂费用更高。我们会先确认树脂类型和面积再报价。",
  },
  "wardrobe-door-not-closing": {
    symptom: "衣柜门无法正确关闭或自行打开。",
    causes: ["铰链不对齐", "门扇弯曲", "磁铁或插销损坏", "衣柜不平"],
    solutions: ["调整铰链", "更换磁铁或插销", "找平衣柜", "如有需要更换门扇"],
    whenToCall: ["多扇门不对齐", "衣柜严重不平", "门扇损坏"],
    localFaq: {
      q: "你们能调整无法关闭的衣柜门吗？",
      a: "可以。我们可以在 30–60 分钟内调整铰链和对齐。"
    },
    overview: "衣柜门相互摩擦或关不严，通常是柜体不水平——框架沉降、铰链磨损，或沉重搁板把柜体拉变形。小调整通常能解决，但放任不管会磨损铰链，甚至让门边开裂。",
    diyChecks: [
      "缓慢开关每扇门，观察最先卡住的位置",
      "检查铰链螺丝并拧紧松动的螺丝",
      "用水平尺检查框架顶部",
      "若门已开始下垂，减轻过重的搁板"
    ],
    prevention: [
      "不要让上层搁板超载",
      "打扫时拧紧铰链螺丝",
      "通过调整铰链解决，而非硬扳变形的门",
      "保持湿度稳定以减少木材变形"
    ],
    costDetail: "铰链调整和对位是较便宜的方案（RM120 起）。实木门变形或框架重新调平费用更高。我们会检查后确认是调整问题还是柜体已移动。",
  },
  "door-scraping-floor": {
    symptom: "门在开关时刮到地板。",
    causes: ["铰链松动或损坏", "地板不平", "门扇弯曲", "铰链不合适"],
    solutions: ["拧紧或更换铰链", "调整门扇高度", "如有需要找平地板", "更换更合适的铰链"],
    whenToCall: ["门难以打开", "地板严重损坏", "多个门都有问题"],
    localFaq: {
      q: "你们能修复刮到地板的门吗？",
      a: "可以。我们可以在 30–60 分钟内调整铰链、降低门扇高度或更换铰链。"
    },
    overview: "门刮擦地板通常是受潮膨胀、铰链松动下垂，或地板饰面升高所致。放任不管会磨损门底、拉扯铰链，最终锁舌对不上锁扣板，门无法安全关闭。",
    diyChecks: [
      "检查铰链螺丝并拧紧松动的螺丝",
      "观察门缝是否四周均匀，还是某一角特别紧",
      "查看门底边缘是否有膨胀或受潮痕迹",
      "试锁——若锁舌错过锁扣板，说明门已下垂"
    ],
    prevention: [
      "在潮湿房间使用除湿机或风扇",
      "每年两次拧紧铰链螺丝",
      "使用门底挡条，避免把门底削得过多",
      "给门底边缘刷漆或封边以减缓吸潮"
    ],
    costDetail: "刨门和调整铰链是较便宜的方案（约 RM80 起）。较重的门、智能锁重新对位或防火门维修费用更高。我们会检查后确认是刨门还是仅调整铰链与锁扣板。",
  },
  "sliding-window-stuck": {
    symptom: "推拉窗卡住或难以移动。",
    causes: ["轨道脏污或损坏", "滑轮损坏", "窗户不对齐", "轨道内有碎屑卡住"],
    solutions: ["清洁轨道", "更换滑轮", "调整对齐", "清除轨道内碎屑"],
    whenToCall: ["窗户无法移动", "滑轮严重损坏", "多个窗户都有问题"],
    localFaq: {
      q: "你们能修复卡住的推拉窗吗？",
      a: "可以。我们可以在 30–60 分钟内清洁轨道、更换滑轮或调整对齐。"
    },
    overview: "推拉窗卡住通常是因为滑轮磨损、轨道积尘或窗框随建筑沉降而移位。这不仅是不便——窗户无法正常关闭或上锁会带来安全和风雨渗漏风险，强行推动还可能使窗扇脱轨。",
    diyChecks: [
      "用吸尘器清理轨道，并用干布擦拭两条轨道去除沙粒",
      "检查滑轮是否均匀接触轨道，或已磨平",
      "关窗后测试锁具——锁具发紧通常意味着窗扇已下沉",
      "不要使用油类润滑：会吸附灰尘，使铝合金轨道更糟"
    ],
    prevention: [
      "每 3–6 个月清理一次轨道",
      "在滑轮上使用干性硅油（切勿用油脂）",
      "轻缓关闭，避免猛推窗扇",
      "一出现异响就更换滑轮"
    ],
    costDetail: "多数上门是简单的滑轮或轨道维修（RM90–RM420），但若窗框已变形，或需拆下玻璃才能更换滑轮，价格会上调。我们会在查看窗户和滑轮型号后确认具体价格。",
  },
  "smart-lock-not-working": {
    symptom: "智能锁不工作、电池快速耗尽或无法上锁。",
    causes: ["电池电量低", "蓝牙/WiFi 连接弱", "软件需要更新", "锁具损坏"],
    solutions: ["更换电池", "检查网络连接", "更新软件", "重置或更换锁具"],
    whenToCall: ["锁完全不工作", "电池在不到 1 个月内耗尽", "雨后出现问题"],
    localFaq: {
      q: "智能锁电池通常能使用多久？",
      a: "电池通常可使用 6–12 个月，具体取决于使用频率和品牌。"
    },
    overview: "智能锁停止响应可能让您被锁在门外，更糟的是门在您不知情时未上锁。大多数故障来自电池、电机或配对问题，但电池耗电过快的锁通常安装不正，每次开合都与锁舌摩擦。",
    diyChecks: [
      "更换新电池并检查电池触点",
      "确认 App 和门锁固件为最新版本",
      "开门状态下检查锁舌能否自由伸缩",
      "若锁舌上锁时刮擦，重新调整锁扣板"
    ],
    prevention: [
      "使用优质碱性或锂电池并按周期更换",
      "保留实体钥匙或备用密码作为应急方案",
      "润滑锁舌并保持锁扣板对位",
      "电机运转时不要强行扳动手柄"
    ],
    costDetail: "更换电池和重新配对是较便宜的方案（约 RM150 起）。电机模块故障或整锁更换会升至 RM680 或更高，视品牌和型号而定。更换前我们会先报零件价格。",
  },
  "shower-screen-leaking": {
    symptom: "淋浴屏风底部或侧面漏水。",
    causes: ["密封胶失效", "玻璃开裂或弯曲", "轨道不平", "地漏堵塞"],
    solutions: ["更换密封胶", "如有需要更换玻璃", "调整轨道", "清洁地漏"],
    whenToCall: ["水漏到浴室地板", "玻璃开裂", "多个屏风都有问题"],
    localFaq: {
      q: "你们能在不更换整个屏风的情况下修复漏水的淋浴屏风吗？",
      a: "可以。在大多数情况下，我们只需更换密封胶并调整轨道。"
    },
    overview: "无框淋浴屏外积水几乎都是密封条或水平问题，而非玻璃破损。底部挡水条磨平、硅胶接缝脱落，或淋浴屏安装时倾斜方向不对，导致水流向外而不是流回地漏。",
    diyChecks: [
      "检查底部挡水条是否磨平、开裂或两端有缝隙",
      "缓慢放水，观察水最先从哪里漏出",
      "检查地砖是坡向地漏还是背向地漏",
      "检查硅胶角落是否有脱落或黑色霉斑"
    ],
    prevention: [
      "每次淋浴后刮干玻璃并擦净底部挡水条",
      "挡水条一出现磨损就更换",
      "保持地漏畅通，避免积水倒流",
      "每 1–2 年重新打一次角落硅胶"
    ],
    costDetail: "更换底部挡水条和重新打硅胶是常见维修，位于 RM180–RM750 区间的低端。若托盘坡度不对，可能需要重新调平淋浴屏或加装门槛条，费用会增加。我们会在测量后确认。",
  },
  "cctv-not-recording": {
    symptom: "CCTV 摄像头不录像或录像未保存。",
    causes: ["SD 卡已满或损坏", "互联网连接弱", "软件需要更新", "摄像头损坏"],
    solutions: ["格式化或更换 SD 卡", "检查互联网连接", "更新软件", "重置或更换摄像头"],
    whenToCall: ["摄像头完全不录像", "录像突然消失", "多个摄像头都有问题"],
    localFaq: {
      q: "CCTV 录像通常能保存多久？",
      a: "取决于 SD 卡容量和设置。128GB 卡通常可保存 7–14 天的连续录像。"
    },
    overview: "摄像头有实时画面却没有录像，通常指向存储——硬盘故障、录像计划已满或配置错误，或电源在负载下掉压。因为实时画面正常，问题很容易被忽略，直到您真正需要回看时才被发现。",
    diyChecks: [
      "在存储菜单确认录像机仍有可用的硬盘",
      "检查录像计划以及是否开启移动侦测",
      "确认日期时间正确——时间错误会打乱录像计划",
      "检测每路摄像头的电源和网线"
    ],
    prevention: [
      "使用监控专用硬盘，而非台式机硬盘",
      "设置录像机自动覆盖最旧录像",
      "把录像机放在通风处",
      "每月回看一段录像，及早发现隐性故障"
    ],
    costDetail: "设置或电源维修是较便宜的方案（RM180 起）。硬盘或 NVR 故障，含监控级替换件，费用会升至 RM850 或更高。更换前我们会尝试从旧硬盘恢复数据。",
  },
  "autogate-not-closing": {
    symptom: "自动门无法关闭或自行打开。",
    causes: ["传感器损坏", "电机无力", "电线连接松动", "轨道内有污垢"],
    solutions: ["检查并清洁传感器", "检查电机和齿轮", "拧紧电线连接", "清洁轨道"],
    whenToCall: ["门完全不移动", "电机发出奇怪声音", "雨后出现问题"],
    localFaq: {
      q: "你们能修复无法关闭的自动门吗？",
      a: "可以。我们可以在 1–2 小时内修复传感器、电机或电线连接。"
    },
    overview: "自动门能开不能关，通常是限位开关故障、安全传感器被遮挡，或电机电容即将失效。这既是便利问题也是安全问题——大门整夜敞开会暴露整个物业。",
    diyChecks: [
      "检查安全光电传感器镜头是否干净且对位",
      "清除轨道里的树叶和杂物",
      "观察大门是否每次都停在同一点",
      "听电机是否嗡嗡响但门不动"
    ],
    prevention: [
      "保持轨道清洁，每季度润滑铰链",
      "每月清洁光电传感器镜头",
      "每年保养电机并检查电容",
      "每隔几个月测试一次手动释放装置"
    ],
    costDetail: "限位开关或传感器维修是较低方案（RM250 起）。电容或控制板故障会升至 RM1,200。我们现场诊断，并在更换前确认零件价格。",
  },
  "rusting-window-grille": {
    symptom: "窗户铁栅生锈且油漆剥落。",
    causes: ["暴露在雨水和潮湿中", "原厂油漆不耐候", "铁内部生锈", "未进行防锈处理"],
    solutions: ["刮除铁锈至干净金属", "涂抹防锈底漆", "使用耐候油漆涂刷", "如有需要更换"],
    whenToCall: ["铁锈蔓延到整个铁栅", "铁栅严重损坏", "不到 1 年再次出现铁锈"],
    localFaq: {
      q: "窗户铁栅通常能使用多久才开始生锈？",
      a: "经过正确防锈处理，铁栅可使用 5–10 年。如果没有处理，1–2 年内可能出现铁锈。"
    },
    overview: "窗户铁栅或大门生锈很少从表面开始——湿气通过划痕、切口和焊接点进入金属，然后在漆膜下扩散。在马来西亚的湿度和沿海空气中，即使是新刷漆的铁栅也可能在几个月内生锈，因为金属没有正确打底，或油漆直接涂在旧锈上。",
    diyChecks: [
      "用螺丝刀柄轻轻敲击铁枝——沉闷松散的声音说明锈蚀已在漆膜下扩散",
      "检查切口、焊缝和螺丝孔——这些位置涂层最薄",
      "用砂纸打磨一处至露出金属，判断锈蚀只是在表面还是已深入",
      "不除锈就重刷油漆，几个月内会再次生锈"
    ],
    prevention: [
      "新装铁栅和铁门选择粉末喷涂或热浸镀锌，沿海 10 公里内尤其如此",
      "划痕和切口一出现就补涂防锈底漆",
      "让铁栅周围保持通风干燥，避免植物和杂物紧贴堆放",
      "每年用清水冲洗几次，去除盐分和污垢"
    ],
    costDetail: "局部打磨、涂防锈剂并重刷一扇窗铁栅约 RM150 起。整屋铁栅喷砂、重新打底和刷漆则升至 RM680 以上；粉末喷涂或更换锈蚀严重的部分更贵。我们会先检查锈蚀深度再报价。"
  },
  // ── Extra problem pages (from problem-data-extra.ts) ──────────────────
  "yellowing-white-walls": {
    symptom: "白色墙面在 12–36 个月后变为奶油色、黄色或脏污，即使未触碰。",
    causes: ["使用紫外线稳定性差的廉价乳胶漆", "香烟烟雾或厨房油烟沉积", "西向墙面阳光照射", "底漆发黄渗透面漆"],
    solutions: ["用温和清洁剂清洗墙面去除表面膜", "重新涂刷前使用防污底漆", "使用抗紫外线、低 VOC 的优质乳胶漆重新涂刷", "改善厨房和吸烟区通风"],
    whenToCall: ["涂刷后 12 个月内发黄复发", "清洁无法恢复原白", "仅特定墙面（靠近厨房或窗户）受影响"],
    localFaq: {
      q: "为什么白墙变黄这么快？",
      a: "通常是廉价漆（低紫外线稳定性）、厨房油烟、香烟烟雾和阳光照射的组合。优质乳胶漆保持白色更久。"
    }
  },
  "paint-cracking-hairline-walls": {
    symptom: "漆面出现细密的蛛网状裂缝，通常在窗框、门框或天花板与墙壁交接处。",
    causes: ["建筑正常沉降（前 2–5 年最严重）", "腻子层涂太厚或太快", "温度和湿度变化", "底层灰浆收缩"],
    solutions: ["稍微扩大裂缝并用柔性丙烯酸填缝剂填充", "较大裂缝使用玻璃纤维网格带", "用薄层腻子覆盖修补区域", "使用柔性丙烯酸面漆底漆并重涂"],
    whenToCall: ["裂缝宽度超过 1 毫米", "同一裂缝重涂后再次开裂", "大面积出现对角线裂缝"],
    localFaq: {
      q: "墙面有细小裂缝意味着房屋有结构问题吗？",
      a: "几乎不会。美容性细裂缝是正常的建筑沉降和漆膜移动——真正的结构裂缝通常更宽（5 毫米以上）、呈对角线且持续恶化。"
    }
  },
  "leaking-bathroom": {
    symptom: "楼上浴室下方地板潮湿或渗水，或浴室旁墙面出现棕色水渍和漆面起泡。",
    causes: ["浴室地面防水膜开裂", "淋浴屏风或浴缸周围硅胶老化", "墙内暗管漏水", "瓷砖缝隙破损导致水渗入楼板"],
    solutions: ["进行水压测试隔离管道或楼板漏水", "从下方进行 PU 注浆（无需砸砖）", "重新密封淋浴屏风和浴缸接缝", "砸砖重做防水膜（最坏情况）"],
    whenToCall: ["浴室下方天花板滴水", "浴室旁墙面漆起泡", "湿斑每周扩大"],
    localFaq: {
      q: "修复浴室漏水需要砸砖吗？",
      a: "通常不需要。大多数情况下可以从下方使用高压 PU 注浆密封漏水——无需损坏瓷砖。"
    }
  },
  "low-water-pressure": {
    symptom: "花洒出水弱、水龙头流水细、热水器因进水压力不足难以启动。",
    causes: ["热水器或花洒入口滤网堵塞", "镀锌管内部锈蚀缩小流通直径", "增压泵或压力罐故障", "供水主管问题（罕见但可能）"],
    solutions: ["清洁或更换花洒和入口滤网", "清除热水器水垢", "用 PPR/PEX 管更换锈蚀管道", "安装或更换增压泵"],
    whenToCall: ["只有一个水龙头受影响（可能局部堵塞）", "整间房子受影响（可能泵或主管问题）", "附近施工后压力突然下降"],
    localFaq: {
      q: "需要安装增压泵吗？",
      a: "如果房屋有 2 层以上或顶楼水压低，增压泵通常是正确解决方案。典型安装费用：RM 900 至 RM 2,200。"
    }
  },
  "clogged-drain": {
    symptom: "排水缓慢、水槽或淋浴盆积水、使用多个水龙头时水倒灌。",
    causes: ["厨房油脂在 P 形弯管和水平管道中积聚", "浴室排水口毛发堆积", "异物（湿巾、卫生用品）进入马桶管道", "管道破损或下沉导致杂物积聚"],
    solutions: ["手动疏通弯管和管道", "使用酶基排水处理剂（对管道安全）", "高压水射流清洗（针对顽固厨房管道）", "摄像头检查 + 管道修复（结构性故障）"],
    whenToCall: ["多个排水口同时堵塞", "冲水时其他排水口冒水", "室内有下水道气味"],
    localFaq: {
      q: "化学疏通剂对管道安全吗？",
      a: "强碱性化学品可能损坏老旧 PVC 接头，在密闭空间也不安全。我们推荐机械疏通加酶处理——更安全且效果更持久。"
    }
  },
  "toilet-not-flushing": {
    symptom: "马桶冲水无力、一次冲不干净、或冲水后持续流水。",
    causes: ["挡板阀或冲水机构磨损", "马桶边缘喷水孔堵塞", "S 形弯管或排污管部分堵塞", "进水阀（浮球组件）故障"],
    solutions: ["更换挡板、进水阀或双冲水阀芯", "用醋或除垢剂清洁喷水孔", "疏通 S 形弯管和排污管", "老旧马桶更换整套水箱配件"],
    whenToCall: ["换了挡板后仍然流水", "所有方向出水都很弱", "需要多次冲水才能冲干净"],
    localFaq: {
      q: "能自己修马桶冲水问题吗？",
      a: "更换挡板很简单，可以自己操作。进水阀或 S 弯管问题通常需要水管工。"
    }
  },
  "sagging-ceiling": {
    symptom: "天花板面板看起来下垂、波浪形或按压时感觉柔软。",
    causes: ["长期漏水从上方渗入", "湿气削弱石膏板", "木框架腐烂或损坏", "安装不正确（龙骨间距过大）"],
    solutions: ["先止住水源", "拆除受损面板并干燥区域", "更换新石膏板并处理接缝", "干燥后底漆和重涂"],
    whenToCall: ["天花板摸起来柔软或有弹性", "下垂越来越明显", "水渍仍在活跃扩大"],
    localFaq: {
      q: "下垂的天花板会塌下来吗？",
      a: "非常潮湿和沉重的天花板可能塌落。如果面板感觉柔软或水在滴落，请立即联系工人。"
    }
  },
  "ceiling-cornice-crack": {
    symptom: "天花板和墙壁之间、沿着装饰线或 L 型槽出现裂缝。",
    causes: ["建筑沉降导致接缝移动", "接缝腻子干燥收缩", "装饰线安装不当", "季节性温湿度变化"],
    solutions: ["铲除接缝处旧腻子", "涂抹新的柔性接缝腻子", "安装玻璃纤维网格带增强", "干燥后重涂"],
    whenToCall: ["每次涂刷后裂缝重新出现", "裂缝宽度超过 2 毫米", "装饰线开始从墙面脱落"],
    localFaq: {
      q: "为什么装饰线裂缝总是复发？",
      a: "因为建筑自然移动。持久的解决方案需要柔性腻子和玻璃纤维网格带，而不仅仅是普通填充物。"
    }
  },
  "balcony-leak-condo": {
    symptom: "水从阳台滴到楼下单元，或室内阳台附近的墙面出现水渍。",
    causes: ["阳台防水膜失效", "阳台水泥砂浆开裂", "阳台推拉门门槛处漏水", "阳台排水口堵塞"],
    solutions: ["进行蓄水测试定位漏水点", "如可能从下方进行 PU 注浆", "在水泥砂浆上涂抹新防水膜", "更换或修复推拉门密封胶"],
    whenToCall: ["楼下邻居投诉滴水", "室内墙面开始起泡", "阳台雨后总是潮湿"],
    localFaq: {
      q: "公寓阳台漏水谁负责？",
      a: "通常是单元业主（私人空间）。如果是公共区域漏水，JMB/MC 可能负责。请查看分层地契。"
    }
  },
  "concrete-slab-crack-leak": {
    symptom: "混凝土楼板裂缝导致雨水或使用水渗入楼下。",
    causes: ["结构移动导致混凝土开裂", "楼板上方防水层已过期", "防水膜不足", "楼板上方负载过重"],
    solutions: ["用环氧树脂注入填充裂缝", "从下方进行高压 PU 注浆", "在上方涂抹新防水膜", "添加保护性水泥砂浆层"],
    whenToCall: ["楼板上可见裂缝", "大雨后反复漏水", "旧防水层已超过 5 年"],
    localFaq: {
      q: "混凝土裂缝能永久修复吗？",
      a: "结构裂缝可通过环氧注入稳定。对于活跃漏水，PU 注浆是马来西亚最有效的方法。"
    }
  },
  "curtain-track-falling": {
    symptom: "窗帘轨道从天花板或墙壁松动、支架脱落、或窗帘掉落。",
    causes: ["螺丝从干墙中被拉出", "支架仅安装在石膏板上未使用锚栓", "窗帘重量超过支架承重", "天花板灰泥脆弱或受损"],
    solutions: ["拆下旧支架并修补孔洞", "安装新的重型锚栓或弹簧螺栓", "将支架转移到龙骨或梁的位置", "用加固支架重新安装窗帘"],
    whenToCall: ["支架反复脱落", "安装区域天花板感觉脆弱", "窗帘太重现有系统无法承受"],
    localFaq: {
      q: "重新安装窗帘轨道多少钱？",
      a: "通常 RM 150 至 RM 350，包括新支架和锚栓，取决于窗户数量和天花板类型。"
    }
  },
  "door-hinge-sagging": {
    symptom: "门下垂、刮地板、铰链明显松动或生锈。",
    causes: ["铰链螺丝因使用松动", "木门因湿气膨胀", "安装后铰链不对齐", "门框移位"],
    solutions: ["拧紧或更换铰链螺丝", "清洁并润滑铰链", "如果刮地板则刨平门底", "在铰链处加垫片调整"],
    whenToCall: ["门严重刮地板", "铰链发出噪音或卡住", "门无法紧密关闭"],
    localFaq: {
      q: "能自己修下垂的门吗？",
      a: "拧紧螺丝和润滑铰链可以自己做。框架调整或加垫片最好请杂工。"
    }
  },
  "old-condo-full-refurbishment": {
    symptom: "老旧公寓（15 年以上）需要全面翻新——地板、墙壁、管道、电线和家具全部老化。",
    causes: ["原始材料已达到使用寿命", "旧设计不适合当前生活方式", "老旧管道和电线不安全", "瓷砖、油漆和家具严重损坏"],
    solutions: ["制定全面翻新计划", "更换管道和电线", "全面翻新厨房和浴室", "安装新地板、油漆和家具"],
    whenToCall: ["单元超过 15 年", "刚购买二手公寓", "管道生锈或仍使用旧电线"],
    localFaq: {
      q: "吉隆坡公寓全面翻新多少钱？",
      a: "通常 1,000–1,200 平方英尺的单元 RM 60,000 至 RM 150,000+，取决于范围和材料质量。"
    }
  },
  "power-tripping-frequently": {
    symptom: "电力频繁跳闸，使用某些设备时 MCCB/RCCB 总是跳闸。",
    causes: ["电路过载（一个电路上设备太多）", "漏电（接地泄漏）", "老旧或松动的电线", "损坏设备导致短路"],
    solutions: ["找出导致跳闸的设备", "在不同电路间平衡负载", "如损坏更换 MCCB/RCCB", "检查并修复老旧电线"],
    whenToCall: ["每天都跳闸", "只在开启特定设备时跳闸", "老单元仍使用原始电线"],
    localFaq: {
      q: "电力经常跳闸危险吗？",
      a: "跳闸是安全机制。如果频繁发生，说明有需要持证电工检查的问题，否则可能变成危险。"
    }
  },
  "water-heater-cold": {
    symptom: "热水器不加热——等了几分钟水仍然是冷的。",
    causes: ["加热元件损坏或烧毁", "恒温器故障或未校准", "热水器 MCB 跳闸", "电线松动或烧焦"],
    solutions: ["用万用表测试加热元件", "必要时更换恒温器", "重置或更换 MCB", "检查电线和连接"],
    whenToCall: ["水完全冷", "热水器发出奇怪声音", "每次开启热水器 MCB 就跳闸"],
    localFaq: {
      q: "热水器通常能用多久？",
      a: "普通储水式热水器在马来西亚可用 5–8 年。即热式热水器定期维护可用 8–12 年。"
    }
  },
  "loose-hollow-tiles": {
    symptom: "地砖敲击时发出空心声、松动或边缘开始翘起。",
    causes: ["安装时瓷砖胶粘合不良", "瓷砖下方湿气削弱粘合剂", "基层不平导致空隙", "重压或撞击瓷砖"],
    solutions: ["小心撬起瓷砖", "清洁表面涂抹新瓷砖胶", "重新铺放瓷砖并等待干燥", "粘合剂干燥后重新勾缝"],
    whenToCall: ["多个区域瓷砖空心", "瓷砖开始翘起", "走过时空心声明显"],
    localFaq: {
      q: "能只修几块空心瓷砖而不全部重铺吗？",
      a: "如果只有几块，可以——单块瓷砖可以取出重装。但如果超过 20% 空心，可能需要全部重铺。"
    }
  },
  "cracked-tile-grout": {
    symptom: "瓷砖之间的勾缝开裂、粉碎或消失，留下开放缝隙。",
    causes: ["建筑结构移动或沉降", "劣质勾缝剂或施工不良", "湿气和潮气削弱勾缝", "用强化学清洁剂清洗"],
    solutions: ["用勾缝锯清除旧勾缝", "清洁缝隙并干燥", "涂抹合适的新勾缝剂", "干燥后用勾缝密封剂封闭"],
    whenToCall: ["多处勾缝消失", "水通过裂缝渗入", "勾缝清洁后仍然变色"],
    localFaq: {
      q: "能自己更换勾缝吗？",
      a: "小面积可以——勾缝锯和新勾缝剂在五金店有售。整个浴室最好交给专业人士。"
    }
  },
  "plaster-ceiling-hairline-crack": {
    symptom: "石膏天花板表面出现细裂缝，通常在灯具周围或天花板中央。",
    causes: ["建筑正常沉降（前 2–5 年）", "接缝腻子不足或干燥", "接缝带安装不当", "热胀冷缩和湿度变化"],
    solutions: ["沿裂缝清除旧腻子", "用玻璃纤维网格带涂抹新腻子", "干燥后打磨平整", "重涂"],
    whenToCall: ["裂缝从下方清晰可见", "每次涂刷后裂缝重新出现", "不同区域出现多条裂缝"],
    localFaq: {
      q: "天花板细裂缝危险吗？",
      a: "石膏细裂缝通常是美容性的，不危险。这是建筑移动的自然结果。宽裂缝（5毫米以上）需要检查。"
    }
  },
  "uneven-wall-surface-skim": {
    symptom: "墙面看起来不平、光线照射时表面不均匀、或摸起来不光滑。",
    causes: ["原始灰泥不平", "旧腻子层已退化或损坏", "补丁修补混合不好", "灰泥层不均匀收缩"],
    solutions: ["刮除松动的旧表面", "涂抹新的薄层腻子", "干燥后打磨平整", "底漆和重涂"],
    whenToCall: ["光线暴露墙面不均匀", "墙面摸起来粗糙或不平", "新漆看起来不均匀"],
    localFaq: {
      q: "一间房批腻子多少钱？",
      a: "通常 RM 400 至 RM 1,200 一间房，取决于墙面面积和不平整程度。"
    },
    overview: "墙面不平整是油漆无法解决的饰面问题。凹凸和棱线来自旧纹理漆、多年局部修补或从未批平的灰层——一旦刷上干净的浅色新漆就原形毕露，因为平光漆会映出每一道阴影。全墙批腻子（skim coat）是标准做法：在全墙抹一层薄灰浆，打磨平整后再上漆。",
    diyChecks: [
      "用手电筒低角度照射墙面——侧光会暴露每一处凹凸",
      "用直尺或长水平尺横过墙面，检查超过约 3 毫米的凹陷",
      "判断不平整是纹理问题（旧漆）还是位移问题（开裂、膨胀）",
      "按压可疑修补处——松动的旧修补必须先铲除再批灰"
    ],
    prevention: [
      "装修时在油漆工程里明确要求全墙批腻子，而不是'局部修补'",
      "旧漆与新腻子之间使用封闭底漆，确保灰层粘结牢固",
      "先解决潮湿问题——在湿墙上批腻子会起泡脱落",
      "出租房施工前先与业主确定墙面验收标准"
    ],
    costDetail: "批腻子按平方英尺计价——约 RM5–RM12，视墙面状况、施工条件及是否需要第二遍而定。一间主卧通常 RM400–RM1,200。局部修补更便宜但会留下可见色差；全墙批灰才能呈现平整的哑光质感。"
  },
  "vinyl-flooring-lifting-edges": {
    symptom: "乙烯基地板边缘翘起、卷曲或不再粘附地面。",
    causes: ["湿气或热量导致粘合剂失效", "安装前基层不平", "混凝土楼板上返湿气", "安装时未留足够伸缩缝"],
    solutions: ["清洁翘起区域并干燥", "在边缘下方涂抹新 vinyl 胶", "用重物压至粘合剂干燥", "更换严重损坏的板材"],
    whenToCall: ["多个边缘开始翘起", "踩踏时 vinyl 发出咔嗒声", "vinyl 下方可见湿气"],
    localFaq: {
      q: "为什么马来西亚的 vinyl 地板会翘起？",
      a: "高湿度和热带温度使粘合剂比温带国家更快失效。安装前确保基层干燥。"
    }
  },
  "cracked-roof-tiles": {
    symptom: "屋顶瓦片开裂、破碎或缺失，导致雨水渗入天花板或墙壁。",
    causes: ["屋顶材料已达使用寿命", "物体撞击（树枝、石头）", "屋顶结构移动", "增加负载（安装太阳能板等）"],
    solutions: ["用新瓦片替换破裂的", "检查并在损坏时修复底层", "更换烟囱或通风口周围的泛水板", "定期清洁和检查屋顶"],
    whenToCall: ["下雨时正在漏水", "从下方可见瓦片破裂", "屋顶超过 15 年"],
    localFaq: {
      q: "更换屋顶瓦片多少钱？",
      a: "小修补通常 RM 250 至 RM 800。全屋顶需要先检查——费用因屋顶类型而异。"
    }
  },
  "cabinet-door-sagging": {
    symptom: "柜门下垂、不对齐或铰链松动导致门无法紧密关闭。",
    causes: ["正常使用导致铰链螺丝松动", "柜门太重超出原始铰链承重", "湿气导致门膨胀", "原始安装不正确"],
    solutions: ["拧紧或更换铰链螺丝", "调整铰链重新对齐", "为重门添加第三个铰链", "必要时更换为重型铰链"],
    whenToCall: ["调整后门仍无法紧密关闭", "铰链发出噪音或感觉松动", "门明显倾斜"],
    localFaq: {
      q: "能只修柜门而不换整个柜吗？",
      a: "可以，大多数情况下可以。拧紧铰链、添加支撑铰链或调整通常就够了，不需要换整个门。"
    }
  },
  "wardrobe-door-jamming": {
    symptom: "衣柜门卡住、移动困难或脱轨。",
    causes: ["轨道脏或生锈", "尼龙轮磨损或破裂", "门因湿气膨胀", "衣柜框架不直"],
    solutions: ["清洁并润滑轨道", "更换损坏的尼龙轮", "如门膨胀则找平", "调整支架对齐"],
    whenToCall: ["门反复脱轨", "发出强烈的摩擦声", "门无法完全打开"],
    localFaq: {
      q: "修衣柜门卡住多少钱？",
      a: "通常 RM 200 至 RM 500，包括更换轮子和调整，取决于衣柜类型。"
    },
    overview: "衣柜门卡住通常是轨道或滑轮问题，而不是木工问题。推拉门会积灰，沙粒把滑轮磨平；平开门受潮膨胀，或柜体沉降变形。门越卡越用力推，损坏越大——滑轮磨平、轨道弯曲、门边开裂。",
    diyChecks: [
      "彻底清理推拉轨道——沙粒是门卡住最常见的原因",
      "把门轻轻抬起再松手：有明显上下位移说明滑轮磨损，而不是轨道问题",
      "平开门检查铰链和关合边的缝隙，判断是否受潮膨胀",
      "不要用力硬推卡住的门——门边开裂比换滑轮贵得多"
    ],
    prevention: [
      "每年雨季前后各清理一次衣柜轨道",
      "衣柜避免正对空调出风口，防止冷凝水",
      "门一出现卡滞就及早维修——开始摩擦后滑轮和轨道磨损很快",
      "重物放低层并保持平衡，避免柜体变形"
    ],
    costDetail: "轨道清洁和重新调整约 RM180 起。更换滑轮每扇门 RM250–RM450；平开门换铰链重挂费用相近。如果板材已膨胀或开裂，更换可能比维修更划算——我们先检查门的状态再报价。"
  },
  "digital-smart-lock-installation": {
    symptom: "智能锁不工作、电池快速耗尽、WiFi/蓝牙不稳定或无法上锁/开锁。",
    causes: ["电池弱或耗尽", "WiFi/蓝牙连接弱", "软件需要更新", "门上安装不正确"],
    solutions: ["更换新电池", "检查并加强网络连接", "通过制造商应用更新固件", "重新安装并校准锁"],
    whenToCall: ["锁完全不工作", "电池不到 1 个月耗尽", "锁无法正确识别指纹/卡"],
    localFaq: {
      q: "智能锁在马来西亚安全吗？",
      a: "是的，家用级智能锁（Yale、Samsung、Xiaomi、Philips）日常使用安全。确保选择适合您门厚度的型号。"
    }
  },
  "locked-out-of-house": {
    symptom: "因钥匙丢失、断在锁孔内或锁损坏而无法进入房屋。",
    causes: ["钥匙丢失或被盗", "钥匙断在锁芯内", "锁机构损坏", "门自动锁上但没带钥匙"],
    solutions: ["联系持证锁匠", "使用无损开锁技术（如可能）", "必要时更换锁芯", "进入后安装新锁"],
    whenToCall: ["钥匙完全丢失", "钥匙断在锁孔内", " attempted break-in 后锁损坏"],
    localFaq: {
      q: "紧急叫锁匠多少钱？",
      a: "房屋通常 RM 150 至 RM 350。价格因时间（夜间/周末更贵）和锁类型而异。"
    },
    overview: "被锁在门外是少数真正的家庭紧急情况之一——可能让孩子或宠物无人看管，或让你深夜流落门外。多数情况下锁本身没有坏，问题只是进不了门。有经验的锁匠会用无损方式打开标准锁芯，只有遇到高安保锁、卡死或已损坏的锁才会钻孔或拆锁芯。",
    diyChecks: [
      "检查可能没锁的窗户和侧门——但切勿攀爬阳台进屋",
      "联系可能持有备用钥匙的家人或邻居",
      "如果使用智能锁，尝试备用钥匙、密码或对外接线用充电宝临时供电",
      "先打电话再动手撬——弄坏锁和门比叫锁匠更贵"
    ],
    prevention: [
      "备用钥匙放在信任的邻居处，而不是门垫下",
      "安装钥匙保险箱，或为智能锁设置家人备用密码",
      "磨损的钥匙及时更换，避免断在锁芯里",
      "提前保存锁匠电话，别等需要时再找"
    ],
    costDetail: "白天标准开锁（无损）RM180–RM380。夜间（晚上 10 点至早上 6 点）和周末更贵，可达 RM550+；更换锁芯或因锁损坏而钻孔另计配件费。我们会在到场前确认价格，开工前说明开锁方式。"
  },
  "downlight-flickering": {
    symptom: "筒灯闪烁、反复亮灭或亮度不足。",
    causes: ["LED 驱动器损坏或不兼容", "接线端子松动", "调光器与 LED 灯不兼容", "LED 灯接近使用寿命"],
    solutions: ["更换兼容的 LED 驱动器", "检查并拧紧所有接线", "将调光器更换为 LED 兼容型号", "更换损坏的 LED 灯"],
    whenToCall: ["闪烁每天发生", "多盏灯同时闪烁", "灯感觉异常热"],
    localFaq: {
      q: "灯闪烁危险吗？",
      a: "闪烁通常表示连接松动或驱动器损坏。松动连接可能导致过热和火灾风险——请立即检查。"
    },
    overview: "LED 筒灯闪烁几乎都是驱动或接线问题，而不是灯泡问题。廉价安装中使用的杂牌驱动器几个月内就会损坏；不兼容 LED 的调光开关会引起频闪；天花板接线盒里的松动连接不但导致闪烁还会发热——所以这个问题应该检修而不是忽视。",
    diyChecks: [
      "记录是一盏还是多盏闪烁——多盏通常指向电路或调光器问题",
      "检查调光器：普通调光器往往无法正确驱动 LED 负载",
      "关灯后触摸灯具外壳——某个灯具异常发热需要检查",
      "拍照记录灯具品牌和型号再联系我们，以便准备正确配件"
    ],
    prevention: [
      "新装灯具指定品牌 LED 驱动器与灯具（Philips、Osram、Panasonic）",
      "需要调光时使用兼容 LED 的调光器",
      "装修时要求检查接线盒连接，而不只是换灯",
      "保留安装日期记录——保修期内损坏的灯具应申请索赔"
    ],
    costDetail: "更换损坏的驱动器或灯具约 RM80–RM320/盏，视品牌和面板类型而定。全屋防浪涌或重接天花板接线会增加总价；每次报价均含 ST 注册电工人工。我们尽量匹配现有灯具款式。"
  },
  "shower-screen-water-leak": {
    symptom: "水从淋浴屏风底部或侧面泄漏，弄湿浴室地板。",
    causes: ["屏风边缘硅胶失效", "玻璃破裂或弯曲", "轨道不平", "地漏堵塞"],
    solutions: ["清除旧硅胶并涂抹新的", "如破裂更换玻璃", "调整轨道使其水平", "清洁地漏"],
    whenToCall: ["每次洗澡都漏水", "可见玻璃破裂", "多个屏风有同样问题"],
    localFaq: {
      q: "能只修淋浴屏风而不换整个吗？",
      a: "可以。大多数情况下只需更换硅胶并调整轨道。只有玻璃损坏才需要全部更换。"
    }
  },
  "cctv-not-recording-storage-full": {
    symptom: "CCTV 摄像头无实时画面、卡在静态图像、或 DVR/NVR 无法回放录像。",
    causes: ["硬盘已满或故障", "DVR/NVR 电源故障", "网线断开", "IP 摄像头固件问题"],
    solutions: ["测试硬盘并在故障时更换", "更换 DVR/NVR 电源", "测试并重新端接网线", "通过制造商应用更新固件"],
    whenToCall: ["需要 CCTV 用于保险/事故报告", "画面已中断超过 24 小时", "怀疑有人故意破坏"],
    localFaq: {
      q: "CCTV 硬盘能用多久？",
      a: "专用 CCTV 硬盘（WD Purple、Seagate SkyHawk）24/7 运行通常可使用 4–7 年。"
    },
    overview: "监控系统能看实时画面但不录像，通常是存储或电源问题，而且很容易被忽略——实时画面看起来正常，多数人直到需要调取录像做事故或保险报告时才发现。常见原因包括硬盘已满或损坏、DVR/NVR 电源负载下电压跌落、线缆松动，或摄像头死机停止发送画面。",
    diyChecks: [
      "在 DVR/NVR 菜单检查硬盘状态和剩余空间——硬盘满会静默停止录像",
      "检查录像计划：部分系统固件升级后会停止录像",
      "重启一次 DVR/NVR——死机的录像机重启后通常会恢复",
      "逐个检查每路摄像头画面；网格里一台死机很容易漏看"
    ],
    prevention: [
      "使用专为 24/7 写入设计的监控级硬盘（WD Purple、Seagate SkyHawk）",
      "设置录像计划为自动覆盖旧录像",
      "每月测试回放——检查上周的录像，而不是只看实时画面",
      "DVR/NVR 接防浪涌插座；断电会损坏硬盘"
    ],
    costDetail: "更换硬盘或电源并测试约 RM180–RM400。8 路 DVR 整机加硬盘加安装 RM850–RM1,800；故障硬盘数据恢复按损坏程度单独报价（RM350–RM1,200）。我们会在离场前测试整套系统，确认录像正常。"
  },
  "autogate-remote-not-working": {
    symptom: "自动门遥控器不再开门、或只能在非常短的距离内间歇性工作。",
    causes: ["遥控器电池弱", "接收天线腐蚀", "电机重置后遥控码不匹配", "电机控制板故障"],
    solutions: ["更换遥控器电池（通常 CR2032）", "清洁或更换接收天线", "重新编程遥控器到电机", "必要时更换控制板"],
    whenToCall: ["遥控器丢失需要配对新的", "多个遥控器同时停止工作", "门间歇性自行打开"],
    localFaq: {
      q: "任何遥控器都能配对到我的门吗？",
      a: "只有匹配您电机品牌的遥控器（SEIP、DEA、AutoGate、DASPI 等）。我们备有马来西亚常用型号。"
    }
  },
  "loose-metal-gate-hinges": {
    symptom: "金属门下垂、拖地、或铰链明显松动或腐蚀。",
    causes: ["原始铰链焊接失效", "锈蚀腐蚀铰链销", "门重量超出原始规格", "混凝土柱移动"],
    solutions: ["磨掉旧焊并清洁表面", "焊接重型替换铰链", "给焊接区域上底漆和涂漆", "如果门特别宽添加中部支撑"],
    whenToCall: ["门拖地", "铰链处可见锈屑", "门几乎要从柱上脱落"],
    localFaq: {
      q: "能现场焊接吗？",
      a: "可以。我们携带便携式电弧/MIG 焊机，可在现场 2–4 小时内完成大多数门铰维修。"
    }
  },
  "stuck-sliding-window": {
    symptom: "铝制推拉窗无法滑动、需要过大力量、或移动时脱轨。",
    causes: ["轨道内有灰尘和污垢", "滚轮磨损或破裂", "沿海湿气导致框架腐蚀", "玻璃重量使框架变形"],
    solutions: ["吸尘并润滑轨道", "更换磨损的尼龙滚轮", "小心调整拉直变形框架", "涂防锈涂层"],
    whenToCall: ["窗户超过 10 年", "滚轮明显破裂或缺失", "框架腐蚀到剥落程度"],
    localFaq: {
      q: "能自己修卡住的推拉窗吗？",
      a: "轨道清洁和润滑可以自己操作。更换滚轮通常需要抬起窗扇——最好请专业人士。"
    }
  },
  "aircon-not-cold": {
    symptom: "空调在运行，但吹出的是暖风或只有微弱凉风，房间始终达不到设定温度。",
    causes: ["雪种不足或泄漏", "蒸发器被灰尘堵塞", "滤网太脏阻挡气流", "压缩机或温度传感器故障"],
    solutions: ["清洁滤网和蒸发器", "检漏并按正确 PSI 补充雪种", "更换故障的温度传感器或热敏电阻", "压缩机损坏则维修或更换"],
    whenToCall: ["机器开一整天都不凉", "刚加过雪种却还是吹暖风", "管道有嘶嘶声或结霜"],
    localFaq: {
      q: "为什么空调设了冷气还是吹热风？",
      a: "通常是雪种不足、蒸发器脏或压缩机开始失效——一次上门保养就能诊断。"
    }
  },
  "aircon-water-leaking": {
    symptom: "室内机滴水或水沿墙流下，通常是排水管堵塞或机器倾斜所致。",
    causes: ["排水管堵塞或脏污", "滤网堵塞导致结冰融化", "排水泵故障（卡式机）", "机器倾斜或安装不当"],
    solutions: ["疏通冲洗排水管", "清洁滤网和蒸发器以停止结冰", "更换故障排水泵", "重新调平室内机并检查安装"],
    whenToCall: ["水滴到家具或地板上", "机器下方墙面出现水渍", "刚保养完仍漏水"]
  },
  "aircon-making-noise": {
    symptom: "室内机或室外机在运行时发出咔嗒、嗡嗡、嘶嘶或摩擦声。",
    causes: ["面板、螺丝或支架松动", "风轮上有异物或结冰", "风扇电机轴承磨损", "压缩机或接触器故障"],
    solutions: ["拧紧松动的面板和支架", "清理风扇和蒸发器上的异物", "更换磨损的风扇电机", "更换故障的接触器或压缩机"],
    whenToCall: ["噪音越来越大", "出现摩擦或金属声", "室外机震动过大"],
    localFaq: {
      q: "噪音会损坏机器吗？",
      a: "会——摩擦的电机或故障的压缩机拖延不修会越来越严重，维修也更贵。"
    }
  },
  "aircon-bad-smell": {
    symptom: "空调向房间吹出霉味、发酸味，尤其在刚开机时最明显。",
    causes: ["蒸发器上滋生霉菌和细菌", "接水盘积水", "风轮脏污", "滤网内积灰"],
    solutions: ["清洗并消毒蒸发器和风轮", "冲洗接水盘和排水管", "做抗菌处理", "化学清洗或大修进行深度清洁"],
    whenToCall: ["清洁滤网后仍有异味", "出风口可见霉斑", "异味引发过敏或呼吸不适"],
    localFaq: {
      q: "如何防止空调异味复发？",
      a: "每 3–6 个月保养一次、保持滤网清洁，并在关机前先开送风模式吹几分钟。"
    }
  },
  "aircon-weak-airflow": {
    symptom: "空调制冷正常但风量很弱，即使开到最高风速房间也凉不下来。",
    causes: ["滤网堵塞", "蒸发器脏污或结冰", "室内风轮电机老化", "风道堵塞或规格偏小"],
    solutions: ["清洁或更换滤网", "清洗蒸发器以恢复风量", "更换老化的风轮电机", "检查并疏通风道或出风口"],
    whenToCall: ["最高风速下风量仍小", "机器出风无力还伴有噪音", "个别房间始终不凉"],
    localFaq: {
      q: "滤网多久清洗一次？",
      a: "频繁使用建议每 2–4 周一次，堵塞的滤网会阻挡气流。"
    }
  },
  "aircon-not-turning-on": {
    symptom: "空调对遥控器或电源键无反应，或开机后不久自动关机。",
    causes: ["断路器跳闸或保险丝烧断", "遥控器或接收板故障", "电容或接触器失效", "PCB 控制板故障"],
    solutions: ["检查断路器和电源", "检测并更换遥控器或接收器", "更换失效的电容或接触器", "维修或更换 PCB 控制板"],
    whenToCall: ["机器完全无反应", "反复自动关机", "有焦味或断路器跳闸"]
  },
  "aircon-tripping-mcb": {
    symptom: "空调一启动就导致漏电开关或断路器跳闸，切断房间电源。",
    causes: ["压缩机故障导致电流过大", "电容或线路短路", "断路器规格偏小或回路共享", "室外机受潮进水"],
    solutions: ["检测压缩机电流", "更换短路的电容", "安装规格正确的专用断路器", "干燥并密封室外电气连接"],
    whenToCall: ["每次开机都跳闸", "同一回路上的其他电器也受影响", "机器附近有焦味"]
  },
  "ice-forming-on-aircon": {
    symptom: "蒸发器或铜管上结霜结冰，机器制冷效果变差。",
    causes: ["雪种不足", "滤网脏或蒸发器堵塞", "风轮转速过慢", "温控或传感器故障"],
    solutions: ["化霜并清洁蒸发器", "检漏后补充雪种", "更换故障风轮电机", "更换故障温度传感器"],
    whenToCall: ["管道或蒸发器可见结冰", "机器反复化霜又结冰", "化霜时往下滴水"]
  },
  "aircon-remote-display-issue": {
    symptom: "遥控器无反应，或机器显示屏出现故障代码、闪烁或黑屏。",
    causes: ["遥控器电池没电或腐蚀", "遥控传感器或接收板故障", "显示屏接线松动", "主板 PCB 故障"],
    solutions: ["更换遥控器电池", "检测并更换遥控器或接收器", "重新插紧显示屏连接线", "维修或更换 PCB 控制板"],
    whenToCall: ["遥控器只有凑很近才有反应", "显示屏出现故障代码", "显示屏闪烁或一直黑屏"]
  },
  "popping-tiles-buckling": {
    symptom: "地砖突然凸起拱起呈倒 V 字形，或伴随巨大碎裂爆响破裂弹出，主要由热胀冷缩、水泥砂浆空鼓脱层或潮气膨胀引起。",
    causes: [
      "地砖热胀冷缩且四周未留足伸缩缝或踢脚线缓冲缝隙",
      "地砖下方砂浆层潮气受热蒸发产生气压导致粘结脱离",
      "水泥地基结构微沉降、收缩或铺贴时水泥砂浆涂抹不均匀",
      "采用干浆铺贴但未涂抹足量纯水泥浆或聚合物界面剂"
    ],
    solutions: [
      "立即安全撬起拱起地砖释放四周挤压应力，防止伤人",
      "彻底凿除松散空鼓的原有水泥砂浆层直至坚硬混凝土楼板",
      "使用高粘结聚合物砂浆重新找平并规范预留周边伸缩缝",
      "采用瓷砖胶进行双面满刮涂抹，重新铺贴全瓷或陶瓷地砖"
    ],
    whenToCall: [
      "多块地砖突然大面积起拱爆裂，形成尖锐绊倒与划伤隐患",
      "地面持续传出咔咔爆裂声且拱起范围向客厅走廊扩散",
      "爆裂区域周边地砖敲击声音明显空鼓，存在二次起拱风险"
    ],
    localFaq: {
      q: "地砖起拱后可以直接用胶水粘回去而不打掉旧水泥吗？",
      a: "不建议。起拱地砖下方的原有水泥砂浆通常已粉化空鼓，直接贴胶无法承重，短时间内会再次脱落起拱。"
    }
  },
  "damaged-gypsum-partition-wall": {
    symptom: "石膏板隔断墙或办公室轻钢龙骨隔墙出现撞击穿孔、凹陷破损、龙骨松动变形或底部受潮软化粉化。",
    causes: [
      "搬运重型家具、门把手猛烈撞击或硬物外力冲击",
      "拖地积水或暗管渗水使水分顺着踢脚线渗入软化石膏板芯材",
      "轻钢龙骨间距过大或自攻螺丝固定松动导致墙体不稳",
      "在未经加固的空心石膏板上悬挂重型电视柜或置物架"
    ],
    solutions: [
      "将破损区域规整切割至临近龙骨中心，安装背面木质支撑垫板",
      "校正或加固变形的 C 型轻钢竖向龙骨与 U 型天地龙骨",
      "裁切匹配的防潮或标准石膏板修补块并贴覆自粘玻璃纤维接缝网带",
      "分层批刮多道填缝石膏与面层批灰，羽状打磨平整后涂刷底漆面漆"
    ],
    whenToCall: [
      "墙面破洞直径超过 15 厘米或跨越龙骨支架",
      "隔断墙用手推按时明显摇晃、变形或连接处脱落",
      "石膏板因渗水发霉、发黑、软化捏碎"
    ],
    localFaq: {
      q: "石膏板隔断墙上的破洞修补后能做到看不出痕迹吗？",
      a: "可以。专业师傅会加装背板支撑、嵌入匹配石膏板、贴网格带并进行多道渐变羽化批灰打磨，重新涂漆后完全恢复平整无痕。"
    }
  },
  "old-bathroom-plumbing-tiles": {
    symptom: "房龄 15–25 年的老旧浴室面临暗管锈蚀漏水、水压偏小发黄、瓷砖磨损渗色、水垢顽固难除、地漏返味及防水层老化失效等综合问题。",
    causes: [
      "老旧镀锌铁管内壁严重生锈结垢，导致水质发黄及隐蔽沙眼漏水",
      "地砖下方原装防水卷材或沥青层老化开裂，导致楼下天花板渗水",
      "老式陶瓷地砖吸水率高且填缝剂脱落，积聚污垢并渗入楼板",
      "老旧卫浴洁具密封圈老化且地漏存水弯干涸，导致下水道异味返涌"
    ],
    solutions: [
      "使用管路打压与声波探测排查暗敷水管渗漏点",
      "全面剔除老旧铁管，改装耐腐蚀 PPR 热熔管或不锈钢水管",
      "彻底凿除旧地砖与老旧找平层，重做三道高分子弹性防水涂层与蓄水试验",
      "重新铺设防滑防渗全瓷地砖并安装防臭防返溢地漏与现代节水洁具"
    ],
    whenToCall: [
      "花洒和水龙头出水明显变小且偶尔带有黄褐色铁锈水",
      "楼下邻居反映卫生间对应位置天花板出现水渍、掉皮或滴水",
      "卫生间长期散发下水道异味，地砖松动空鼓，瓷砖缝隙长霉洗不掉"
    ],
    localFaq: {
      q: "老旧浴室是局部小修划算还是整体翻新重做更好？",
      a: "对超过 15 年且水管埋在墙内地下的老浴室，局部修补往往修了这头漏那头。整体拆旧重做管线与防水能从根本上杜绝漏水并全面升级空间。"
    }
  },
  "old-kitchen-cabinet-plumbing-damage": {
    symptom: "厨房水槽下方橱柜底板受潮发胀、木板腐烂发霉甚至滋生白蚁，伴随老旧电路不足和动线不合理影响日常烹饪。",
    causes: [
      "水槽下水器下水管、角阀软管或龙头底部长期隐蔽微漏浸湿刨花板",
      "在潮湿的水槽柜区域使用了不防潮的普通颗粒板或高密度板",
      "老旧 PVC 排水管油脂挂壁严重导致排水不畅并频繁溢水",
      "插座回路过少且未设大功率专用回路，无法满足烤箱、洗碗机等现代电器"
    ],
    solutions: [
      "拆除腐烂底板，换装全防水全铝合金柜体或加贴防水铝箔的高密度海洋板",
      "重做加厚 PVC 厨房排水管并加装防臭存水弯与检修清理口",
      "升级厨房电气配电回路，为烤箱、电磁炉增设独立 15A/20A 插座",
      "合理重新规划干湿分区与烹饪动线，换装耐污石英石或岩板台面"
    ],
    whenToCall: [
      "水槽下方橱柜底板塌陷、变软发黑或散发浓重霉烂气味",
      "排水管或龙头接口多次自行包扎仍持续渗水漏入橱柜",
      "同时使用烤箱、空气炸锅或微波炉时电箱频繁跳闸"
    ],
    localFaq: {
      q: "可以只单独更换水槽下方受潮发胀的底柜而不拆掉整套橱柜吗？",
      a: "可以。KL Servis Rumah 支持模块化局部改造，在完整保留原有石英石台面和侧面柜体的前提下，单独拆换水槽下方全铝合金防水地柜。"
    }
  },
  "uneven-floor-subfloor-leveling": {
    symptom: "原有混凝土地面或敲砖后基层凹凸不平、起砂波浪或高低落差超过 3 毫米，导致新铺贴的 SPC 石塑地板或地砖踩踏晃动、异响空鼓。",
    causes: [
      "原建筑楼板混凝土浇筑平整度差或水泥砂浆粗找平工艺不平",
      "旧瓷砖敲除后留有大量顽固水泥块、凿痕坑洼与空鼓深坑",
      "房屋长期地基沉降导致地面形成倾斜面或局部凹陷",
      "不同房间之间交接处的伸缩缝隆起或地面高低过渡不顺"
    ],
    solutions: [
      "使用金刚石地坪研磨机打磨去除突出水泥高点与硬块",
      "工业吸尘器彻底除尘后涂刷高渗透界面剂封闭基层",
      "浇注高强聚合物自流平水泥砂浆，利用流动性重力自动流平找平",
      "使用 2 米靠尺检测平整度（误差控制在 2 毫米以内）后再铺装地板"
    ],
    whenToCall: [
      "新铺设的 SPC 锁扣地板踩上去有明显上下浮动感或发出咔咔异响",
      "在铺地板前使用靠尺测量发现 1 米范围内高低落差超过 3 毫米",
      "拖地或清扫时发现地面局部严重积水低洼"
    ],
    localFaq: {
      q: "为什么铺装 SPC 石塑地板前地面必须做自流平找平？",
      a: "SPC 锁扣地板属于半刚性材料。如果基层有凹凸，人踩踏时锁扣处会反复受力形变，短时间内会导致公母锁扣断裂、地板接缝翘起开裂。"
    }
  },
  "wall-cracks-settlement-masonry": {
    symptom: "砖墙表面出现斜向阶梯状裂缝，厨房或车库扩建部分与主屋接缝处出现贯通纵向裂隙，或门窗框角部出现斜向剪切开裂。",
    causes: [
      "房屋扩建地基与主楼原基础之间存在不均匀沉降差",
      "扩建施工时未在主楼混凝土结构柱植入足量拉结筋",
      "不同建筑材料与厚度在热胀冷缩循环下的差异应力变形",
      "临近主干道重型车辆持续震动或周边工地打桩施工震动影响"
    ],
    solutions: [
      "进行裂缝稳定性与沉降评估，区分非活动性沉降与活动性结构危险",
      "沿砖缝横向开槽植入不锈钢螺旋加固筋",
      "使用高压注浆机向深层砖缝注入无收缩结构灌浆料或结构环氧树脂",
      "在扩建交接处规范设置伸缩填缝密封胶并加贴抗裂玻纤网批灰"
    ],
    whenToCall: [
      "裂缝宽度超过 3 毫米或呈明显沿砖缝阶梯状开裂",
      "扩建部分与主屋之间的分离缝隙随着时间推移明显变宽",
      "开裂墙体上的门窗框变形受挤压，出现卡死无法顺畅开合"
    ],
    localFaq: {
      q: "如何辨别墙面裂缝是表面油漆开裂还是砖墙结构沉降裂缝？",
      a: "表面油漆裂缝通常细如发丝（小于 1mm）且仅停留在批灰层。结构沉降裂缝较宽（>3mm）、呈斜向阶梯状沿砖缝延伸、甚至贯穿墙体导致门窗卡死。"
    }
  }
};

export function getLocalizedProblemBody(
  slug: string,
  locale: Locale
): LocalizedProblemBody | null {
  if (locale === "en") return null;

  const body = locale === "ms" ? PROBLEM_BODY_MS[slug] : PROBLEM_BODY_ZH[slug];
  if (!body) return null;

  return body;
}