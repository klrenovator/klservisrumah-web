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
    },
    overview: "Cat mengelupas di rumah Malaysia ialah dinding yang memberitahu anda ikatan telah gagal — dan dalam iklim panas lembap, kegagalan itu mempunyai senarai punca yang pendek. Kelembapan yang terperangkap di belakang dinding menolak cat dari belakang; sealer yang lemah atau tiada bermakna topcoat tidak pernah benar-benar berikatan dengan plaster; cat lama berkapur yang tidak disandarkan tidak memberi apa-apa untuk genggaman lapisan baharu; dan retak halus membenarkan hujan monsun bekerja di belakang filem. Corak memberitahu yang mana: pengelupasan di sekitar bilik mandi atau siling menunjuk kelembapan, serpihan seragam menunjuk sistem cat, dan pengelupasan bertompok selepas pengecatan DIY menunjuk persediaan. Pembetulan sentiasa jujukan yang sama — kikis ke tepi yang kukuh, rawat kelembapan, seal, dan cat semula — dan melangkau kikis ialah mengapa masalah kembali mengikut jadual.",
    diyChecks: [
      "Kikis kawasan kecil pengelupasan: jika cat terkeluar dalam lembaran besar dengan lapisan lama masih melekat, kegagalan berada pada garisan sealer/plaster",
      "Tekan dinding: rasa lembap atau sejuk, atau garam putih berhabuk, bermakna kelembapan mesti dibetulkan sebelum sebarang cat",
      "Periksa lokasi: pengelupasan berkelompok di sekitar bilik mandi, siling, atau dinding luar ialah cerita kelembapan; serpihan seragam ialah cerita sistem cat",
      "Selepas pengecatan DIY, catit di mana ia gagal pertama — titik kegagalan pertama menanda zon yang tidak siap atau lembap",
    ],
    prevention: [
      "Sentiasa seal sebelum anda cat, terutama pada plaster baharu atau dinding dengan sejarah kelembapan",
      "Sandar cat lama berkapur atau bergloss kembali ke permukaan kukuh dan sedikit kasar sebelum lapisan baharu",
      "Guna emulsi boleh dibasuh dan toleran kelembapan di bilik lembap dan sistem tahan cuaca di luar",
      "Betulkan punca kelembapan — kebocoran, kondensasi, atau rembesan — dalam kerja yang sama dengan pengecatan, bukan kemudian",
    ],
    costDetail: "Tampalan pengelupasan setempat — kikis, sealer, dan dua lapisan — bermula sekitar RM150. Satu bilik penuh dengan persediaan yang betul (kikis, sandar, sealer, primer, dan dua topcoat) biasanya dinilai dari RM400 setiap bilik, dan harga bergerak dengan keadaan dinding, ketinggian siling, dan sama ada pembaikan kelembapan disertakan. Kami periksa dinding untuk kelembapan sebelum menilai, kerana mengecat di atas kebocoran aktif hanya memindahkan masalah ke musim depan. Kerja membawa jaminan standard."
  },
  "faded-exterior-paint-malaysia": {
    symptom: "Dinding luaran kelihatan berkapur, berbintik-bintik atau pudar selepas terdedah kepada UV dan kitaran hujan lebat.",
    causes: ["Cat luaran gred rendah", "Tiada sealer tahan cuaca", "Pendedahan UV pada dinding menghadap barat", "Kulat dan kotoran terkumpul akibat hujan tropika"],
    solutions: ["Basuh dinding luaran dengan tekanan tinggi", "Rawat kulat dan pengapuran", "Sapukan sealer tahan alkali", "Gunakan cat luaran premium tahan cuaca"],
    whenToCall: ["Dinding berkapur apabila digosok tangan", "Retak halus kelihatan", "Perlu perancah atau tangga tinggi"],
    localFaq: {
      q: "Berapa kerap dinding luaran perlu dicat semula di Malaysia?",
      a: "Kebanyakan rumah perlu dicat semula setiap 5–7 tahun, lebih awal jika cat gred rendah atau pendedahan lembap tinggi."
    },
    overview: "Cat luaran di Malaysia mempunyai jangka hayat yang singkat — kebanyakan rumah kelihatan berkapur dan pudar dalam 5–7 tahun, dan dinding menghadap barat melakukannya lebih cepat kerana menerima penuh sinaran matahari petang. Prosesnya ialah UV memecahkan pengikat cat menjadi serbuk (pengapuran), hujan membuang serbuk itu dalam tompokan, dan kulat serta kotoran mengisi baki. Apabila pengapuran permukaan sudah teruk, topcoat tidak mempunyai filem perlindungan lagi: plaster atau render di bawah kini terus menghadapi cuaca, dan setiap musim hujan menyebabkan sedikit lagi kerosakan. Cat pudar ialah amaran murah sebelum kerja cat semula menjadi kerja pemampalan mahal.",
    diyChecks: [
      "Gosok kawasan pudar dengan kain basah — jika serbuk putih terkeluar, topcoat telah berkapur melebihi tahap tocuh-up",
      "Periksa 1 meter paling rendah di elevasi: pita kulat dan kotoran di situ bermakna permukaan telah hilang keupayaan pembersihan sendiri",
      "Lihat retak halus dan bintil — jika cat merekah, pergerakan substrat perlu disemak sebelum sebarang pengecatan",
      "Selepas hujan lebat, tandakan tempat tompok dan garis air perang muncul — itu menandakan zon cuaca terpantas",
    ],
    prevention: [
      "Ecat semula luaran setiap 5–7 tahun dengan sistem sealer-plus-topcoat tahan cuaca, bukan satu lapisan murah",
      "Basuh tekanan tinggi elevasi sebelum mengecat supaya kulat dan pengapuran tidak terperangkap di bawah lapisan baharu",
      "Pangkas pokok dan sulur yang mengekang kelembapan terhadap dinding menghadap barat",
      "Baiki sebarang retak atau titik bocor luaran dalam tahun itu — air dan UV bekerja bersama menua dinding dua kali lebih laju",
    ],
    costDetail: "Pengecatan luaran seluruh rumah di Lembah Klang mencecah RM1,800–RM8,000+ bergantung kepada saiz rumah, tingkat dan sama ada perancah atau boom lift diperlukan; kerja termasuk pembersihan tekanan tinggi, rawatan retak, sealer tahan alkali, dan dua lapisan topcoat tahan cuaca. Elevasi menghadap barat atau yang berkapur teruk mungkin memerlukan persediaan tambahan, yang kami nilai selepas pemeriksaan. Kami menggunakan sistem tahan cuaca yang berjenama dan cat diaplikasikan pada tingkap kelembapan dan pengeringan yang betul; mutu kerja dan filem cat dilindungi di bawah jaminan standard."
  },
  "damp-walls-paint-bubbling": {
    symptom: "Cat berbuih, ada kesan perang atau garam putih kerana air bergerak melalui dinding atau papak.",
    causes: ["Rembesan bilik mandi atau balkoni", "Lembap naik dari masonry berpori", "Retak luaran membenarkan air hujan masuk", "Paip bocor di dalam dinding"],
    solutions: ["Jejaki punca kelembapan dengan bacaan meter", "Tutup retak luaran atau grout bilik mandi", "Sapukan halangan kalis air jika sesuai", "Baiki plaster dan cat semula selepas dinding kering"],
    whenToCall: ["Buih berulang selepas mengecat semula", "Dinding terasa sejuk atau lembap", "Bau kulat atau tompok hitam muncul"],
    localFaq: {
      q: "Bolehkah cat menyelesaikan masalah dinding lembap?",
      a: "Tidak. Cat sahaja tidak boleh menghentikan kelembapan. Punca kelembapan mesti dibaiki terlebih dahulu sebelum mengecat."
    },
    overview: "Cat yang berbuih, melepuh atau menjadi perang bukan masalah cat — ia masalah air yang memakai kostum cat. Kelembapan yang bergerak melalui dinding atau papak mengangkat filem cat dari plaster apabila ia menguap, meninggalkan tompok perang di mana mineral terlarut turun, dan tanda garam putih di mana ia kering. Di rumah KL, punca biasanya salah satu daripada empat: bilik mandi atau balkoni yang merembes dari lantai di atas, lembap naik dari tanah, retak luaran yang meniriskan hujan ke dalam dinding, atau paip tersorok yang bocor di dalam. Urutan operasi penting: tutup punca, biarkan dinding kering, baiki plaster, kemudian cat. Langkau mana-mana langkah dan buih kembali mengikut jadual.",
    diyChecks: [
      "Sentuh dinding terjejas — rasa sejuk dan lembap berbanding dinding kering dan hangat memisahkan kelembapan aktif daripada tompok lama",
      "Periksa bilik terus di atas dan bertentangan: bilik mandi, balkoni atau dinding luar di atas buih ialah suspek utama",
      "Sorok cahaya torch sepanjang dinding pada sudut — buih menangkap cahaya dan mendedah sebarkan penuh lebih cepat daripada mata",
      "Selepas hujan lebat, catat sama ada tompok menggelap atau bilangan buih meningkat — itu mengesahkan punca berkuasa cuaca",
    ],
    prevention: [
      "Baiki masalah kalis air bilik mandi dan balkoni pada tahun yang sama ia ditemui",
      "Kekalkan retak luaran ditutup dan paip turun membersihkan air jauh dari dinding",
      "Guna primer boleh bernafas dan toleran kelembapan pada dinding dengan sejarah lembap",
      "Periksa dinding dengan meter kelembapan sebelum sebarang pengecatan jika kawasan yang sama telah berbuih dua kali",
    ],
    costDetail: "Diagnosis dengan bacaan kelembapan bermula sekitar RM150–RM300. Penutupan satu punca (grout, retak atau garis silikon) plus pembaikan plaster dan pengecatan dinding terjejas mencecah RM600–RM1,500, manakala pembaikan punca kebocoran penuh yang melibatkan membran bilik mandi atau balkoni berada pada RM1,500–RM2,500+. Kami sentiasa sahkan punca dengan bacaan sebelum menilai, kerana mengecat di atas kebocoran aktif hanya memindahkan masalah ke musim depan. Kerja dilindungi jaminan standard."
  },
  "ceiling-mold-stains": {
    symptom: "Papan siling menunjukkan acuan gelap, cincin kuning-perang atau kawasan kendur lembut selepas terdedah kepada air.",
    causes: ["Kebocoran bilik mandi tingkat atas", "Kebocoran saliran penghawa dingin", "Rembesan bumbung atau balkoni", "Pengudaraan buruk dan kondensasi"],
    solutions: ["Hentikan punca air terlebih dahulu", "Buang papan yang rosak acuan jika lembut", "Pasang papan plaster tahan lembapan", "Skim, primer dan cat semula selepas kering"],
    whenToCall: ["Siling lembut atau kendur", "Kesan air semakin besar selepas hujan atau guna bilik mandi", "Acuan merebak di seluruh papan"],
    localFaq: {
      q: "Bolehkah papan siling yang berwarna dicat semula?",
      a: "Hanya jika ia kering dan kukuh secara struktur. Papan yang lembut atau beracuan perlu diganti sebelum disiapkan."
    },
    overview: "Acuan pada siling ialah hujung kelihatan bagi cerita kelembapan yang bermula di atas. Cincin perang dan bintik hitam terbentuk apabila udara Malaysia yang hangat dan lembap menyentuh permukaan plaster yang basah — selepas kebocoran bilik mandi di tingkat atas, saliran penghawa dingin yang menitik senyap ke dalam siling selama berbulan-bulan, atau rembesan bumbung dan balkoni yang hanya kelihatan dalam musim hujan. Tompok itu sendiri hanyalah masalah estetik; risiko sebenar ialah papan yang menjadi lembut. Setelah plaster terendam cukup lama sehingga kendur atau terasa lembik di bawah kuku, tiada cat anti-acuan yang dapat menyelamatkannya — papan itu perlu dibuang.",
    diyChecks: [
      "Tekan kawasan bertompok dengan hujung pensil atau kuku — teguh dan kering bermakna boleh dicat, lembut bermakna perlu diganti",
      "Jejak punca yang mungkin: ada bilik mandi, unit penghawa dingin atau dinding luar terus di atas tompok?",
      "Siram mandi atau guna bilik mandi di atas, kemudian pantau tompok selama 20–30 minit — cincin yang menggelapkan mengesahkan kebocoran aktif",
      "Cium bau busuk dan periksa bintik hitam yang merebak melepasi cincin asal, iaitu isyarat acuan hidup",
    ],
    prevention: [
      "Servis unit penghawa dingin dan periksa saliran setiap 3–6 bulan — saliran tersumbat ialah tompok siling yang menunggu",
      "Biarkan kipas pengudaraan bilik mandi berjalan semasa dan 15 minit selepas mandi",
      "Periksa balkoni dan bumbung daripada air bertakung selepas hujan lebat",
      "Ecat siling dengan emulsi tahan kulat di bilik lembap",
    ],
    costDetail: "Pembersihan dan pengecatan anti-acuan tompok yang kering dan teguh bermula sekitar RM180–RM450 setiap tampalan. Penggantian papan lembut atau rosak acuan dengan plaster tahan lembap mencecah RM600–RM1,200+ bergantung kepada saiz, ketinggian dan sama ada punca kebocoran (paip, saliran penghawa dingin, bumbung) disertakan dalam kerja yang sama. Kami sentiasa kenal pasti dan hentikan punca terlebih dahulu — mengecat siling di atas kebocoran aktif akan membuatkan tompok kembali dalam satu musim hujan. Kerja dilindungi jaminan standard."
  },
  "burst-pipe-emergency": {
    symptom: "Air menyembur, membanjiri atau terkumpul dengan cepat dari paip, injap atau kawasan dinding.",
    causes: ["Sambungan paip lama atau berkarat", "Tekanan air tinggi yang mendadak", "Fitting buruk atau pelekat gagal", "Gerudi tidak sengaja ke paip tersembunyi"],
    solutions: ["Matikan bekalan air utama serta-merta", "Lindungi barang elektrik dan lantai", "Cari bahagian yang pecah", "Gantikan paip atau injap yang rosak dan uji tekanan"],
    whenToCall: ["Air tidak boleh dihentikan dengan cepat", "Kebocoran di dalam dinding atau siling", "Titik elektrik berdekatan"],
    localFaq: {
      q: "Apa yang perlu saya lakukan pertama kali apabila paip pecah?",
      a: "Matikan injap air utama, jauhkan orang dari kawasan elektrik dan hubungi tukang paip dengan foto atau video."
    },
    overview: "Paip pecah ialah setaraf kebakaran rumah dalam bidang paip: kerosakan berganda setiap minit air mengalir, dan kos terbesar kedua selepas paip itu sendiri biasanya kerosakan air yang disebabkan kepada lantai, siling di bawah, dan jiran. Di rumah KL dan Selangor lama, suspek biasa ialah sambungan galvanis berkarat yang akhirnya putus di bawah tekanan, fitting yang dilekatkan bukannya berulir, lonjakan tekanan dari bekalan utama, atau — dalam musim renovasi — gerudi yang menemui paip tersorok. Urutan respons tetap: hentikan air dahulu, lindungi elektrik kedua, dan baru kemudian mula pada paip. Melakukan mengikut urutan itu adalah apa yang memegang pembaikan paip RM200 daripada menjadi tuntutan kerosakan air RM2,000.",
    diyChecks: [
      "Cari dan matikan injap air utama (biasanya di meter) sebelum apa-apa lagi — walaupun anda tidak nampak pecah",
      "Matikan kuasa ke sebarang soket atau alat yang berdiri di air di DB utama, bukan di soket",
      "Foto atau rakam video paip pecah dan laluan air sebelum pembersihan — foto itulah yang diperlukan insurans atau JMB",
      "Jika paip di dalam dinding, buka panel akses kecil di titik basah paling rendah, bukan hacking seluruh dinding",
    ],
    prevention: [
      "Tahu di mana injap air utama anda dan kekalkan ia boleh diakses — uji sekali setahun",
      "Ganti fitting berkarat yang kelihatan dan hos flex pada pemanas air serta mesin basuh setiap 5–7 tahun",
      "Sebelum gerudi sebarang dinding atau lantai, semak laluan paip tersorok atau gunakan pengesan paip",
      "Pasang pengesan kebocoran air di bawah pemanas air dan di bilik mandi untuk rumah yang tidak diawasi",
    ],
    costDetail: "Pemanggilan kecemasan dan pembaikan paip yang kelihatan bermula sekitar RM180–RM400. Paip pecah tersorok yang memerlukan akses dinding terhad dan render semula mencecah RM500–RM800+, dan semakin lama air mengalir sebelum kami tiba, semakin banyak yang kerja termasuk (pengeringan, pembaikan plaster, kerja siling di bawah). Kami sahkan skop dan harga tetap selepas pemeriksaan pertama, utamakan penutupan dan pengawakan air dahulu, dan kerja paip itu sendiri dilindungi jaminan standard."
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
    },
    overview: "Siling yang menitik di bawah bilik mandi tingkat atas ialah salah satu kebocoran paling menekan — dan paling mahal jika salah dinilai — di rumah Malaysia, kerana pembetulannya merangkumi dari gasket trap RM250 hingga kalis air penuh yang kosnya lima angka. Corak memberitahu di mana anda duduk pada skala itu: menitik hanya selepas mandi menunjuk ke permukaan lantai (grout, membran atau slab); titisan perlahan berterusan menunjuk ke paip atau trap; dan tompok yang menggelap dengan musim hujan menunjuk ke slab itu sendiri. Ramalan salah mahal dalam kedua-dua arah — hacking jubin untuk kebocoran paip memusnahkan lantai yang baik, dan PU-grouting pada membran yang gagal akan menyerah selepas hujan lebat pertama.",
    diyChecks: [
      "Waktu kebocoran: jalankan shower di atas selama 5 minit, kemudian pantau siling bawah selama 30 minit — menggelap terus ialah kebocoran permukaan/slab",
      "Matikan bekalan air di atas dan pantau: jika titisan berterusan tanpa air berjalan, punca kemungkinan paip atau trap, bukan lantai",
      "Periksa jubin lantai bilik mandi — uji ketukan untuk bunyi kosong dan cari grout retak, yang menanda di mana air masuk",
      "Perhatikan corak tompok: cincin merebak di bawah kawasan shower berbanding garisan di bawah dinding membantu memisahkan kebocoran slab daripada kebocoran paip",
    ],
    prevention: [
      "Ganti grout lantai bilik mandi dengan grout epoksi atau berseal setiap 3–5 tahun",
      "Kekalkan silikon skrin shower dan tab segar — ganti mana-mana seal retak atau beracuan setiap tahun",
      "Servis trap lantai dan periksa sambungan yang menitik setiap 12 bulan",
      "Di kondominium, laporkan tompok siling perlahan kepada JMB awal supaya kebocoran didiagnosis sebelum menjadi tuntutan",
    ],
    costDetail: "Penggantian gasket trap atau paip bermula sekitar RM250–RM500. Suntikan PU ke retak slab dinilai setiap titik dan biasanya mendarat pada RM1,500–RM3,500 untuk kebocoran bilik mandi standard, manakala sistem salutan permukaan tanpa hacking sesuai untuk rembesan garis grout dalam julat RM800–RM2,000. Hacking penuh dan penggantian membran — jalan terakhir untuk membran yang gagal sepenuhnya — mencecah RM4,500–RM9,000 bergantung kepada saiz bilik mandi dan jubin. Kami mendiagnosis punca kebocoran dahulu dan menilai kaedah yang benar-benar sepadan; kerja penutupan kebocoran membawa jaminan standard, dan pembaikan siling dinilai berasingan jika diperlukan."
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
    },
    overview: "Lembap naik ialah kelembapan tanah yang ditarik naik melalui masonry berpori — bata, blok atau render simen lama — sehingga mencapai cat dan meninggalkandeposit kristal garam di bahagian bawah dinding. Di Malaysia ia paling kerap terlihat di rumah teres atau bina lama: dinding yang duduk dekat dengan tanah, lapisan tahan lembap yang gagal, jubin luaran yang mengekang air menampar dinding, atau paip bocor serta dinding bilik mandi yang tersorok di belakang plaster. Garam putih berhabuk (efloresens) adalah penunjuk utamanya: setiap pengecatan yang melangkau punca kelembapan hanya memerangkap lembap di bawah lapisan baharu, dan pengelupasan yang sama kembali dalam musim.",
    diyChecks: [
      "Gosok 300 mm bawah dinding — rasa lembap atau sejuk serta garam putih berhabuk membuktikan kelembapan aktif, bukan cat lama",
      "Periksa sebelah luar dinding bertentangan: adakah jubin luaran condong ke arah rumah atau ada air bertakung selepas hujan?",
      "Perhatikan ketinggian tompok — garisan mendatar yang jelas menunjuk lembap naik; tompok dari paip atau bilik mandi menunjuk kebocoran",
      "Tekan plaster: jika ia berderak atau terasa lembut, garam telah menyerang badan plaster dan perlu dibuang",
    ],
    prevention: [
      "Jauhkan jubin luaran dan pasu tanaman dari dinding supaya air salir bersih dari tapak",
      "Bersihkan parit hujan dan paip turun supaya air hujan tidak mengalir di pangkalan dinding",
      "Ecat semula hanya selepas dinding kering — jangan sesekali sekadar tampal dengan cat kalis air",
      "Periksa bilik mandi dan paip tersorok di tingkat atas dinding bertompok setiap tahun",
    ],
    costDetail: "Diagnosis dan rawatan satu dinding bermula sekitar RM300–RM800. Jika plaster yang terkandungan garam perlu dibuang dan di-render semula dengan halangan kawalan lembap, kerja ini mencecah RM1,000–RM3,000+ bergantung kepada panjang dinding dan akses. Kami sentiasa sahkan sama ada kelembapan berasal dari tanah atau paip sebelum membuat sebut harga, kerana kebocoran paip yang dicat akan muncul semula di bawah plaster baharu. Kerja dilindungi jaminan standard."
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
    },
    overview: "Gantungan TV yang longgar — atau TV yang telah jatuh — adalah masalah keselamatan dahulu, masalah perabot kedua. Di rumah Malaysia, rantaian kegagalan biasa dapat diramalkan: penyumbat plastik murah yang digerudi ke dalam pembahagi gipsum tanpa memeriksa stud, gantungan yang dinilai di bawah berat sebenar TV, atau gerudi yang tidak masuk cukup dalam untuk jenis dinding. Gantungan kekal selama berbulan-bulan, kemudian bahan dinding remuh di sekeliling lencana dan seluruh gantungan — plus TV 50–80 kg — jatuh. Pembetulan ialah berhenti mempercayai lencana itu, tahu apa sebenarnya dinding (konkrit, bata, atau gipsum hollow), dan pasang semula pada lencana yang dinilai untuk muatan.",
    diyChecks: [
      "Dengan TV mati dan disokong, tarik setiap titik lencana dengan tangan — sebarang pergerakan atau penyumbat tertarik dari dinding bermakna pasang semula, bukan ketatkan",
      "Semak penilaian berat gantungan terhadap berat sebenar TV plus gantungan; TV 65 inci dengan lengan gerak penuh mudah melebihi muatan 30 kg",
      "Kenal pasti dinding: ketuk dan lihat jenis dinding — pembahagi gipsum di belakang cat ialah permukaan berisiko tertinggi",
      "Pastikan corak VESA TV sepadan dengan lubang gantungan sebelum membeli sebarang bahagian baharu",
    ],
    prevention: [
      "Pasang TV pada dinding hollow dengan bolt toggle berat berkelas atau ke dalam stud, bukan penyumbat plastik asas",
      "Pilih jenis gantungan mengikut bilik: tetap untuk dinding sempit, condong untuk di atas perabot, gerak penuh untuk pemandangan sudut",
      "Salur kabel dengan trunking atau saluran tersorok supaya ia tidak menarik gantungan",
      "Semak gantungan semula setiap tahun — terutama selepas enapan rumah dalam 2–5 tahun pertama",
    ],
    costDetail: "Pasang semula standard dengan lencana betul untuk konkrit, bata atau gipsum diperkukuh bermula sekitar RM120–RM250; gantungan gerak penuh atau berat dengan pengukuhan stud pada dinding pembahagi mencecah RM300–RM450+. Kami kenal pasti jenis dinding, pilih lencana yang betul, uji berat pemasangan, dan mendatarkannya sebelum serahan. Penyorakan kabel dinilai berasingan jika jenis dinding membenarkannya. Masa kerja tipikal 45–90 minit."
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
    },
    overview: "RCCB (pemecut litar bocor bumi) yang terus tripping sedang melakukan tugasnya — ada sesuatu di rumah yang membocorkan arus ke bumi, dan pemecut itu memotong kuasa sebelum orang atau wayar tercedera. Di rumah KL, suspek biasa ialah alat yang rosak (pemanas air, tungku induksi, penghawa dingin) yang membocor beberapa miliam, wayar lama yang insulasinya retak dan meresap kelembapan, kemasukan air ke dalam kotak agihan selepas hujan lebat, atau litar yang senyap terlampaui muatan. Yang tidak boleh dilakukan ialah terus reset: setiap reset bermakna kerosakan masih ada, dan pemecut yang tripping mengikut permintaan ialah risiko api dan kejutan, bukan sekadar gangguan.",
    diyChecks: [
      "Cabut alat utama satu demi satu dan uji pemecut — jika ia berhenti tripping apabila alat tertentu mati, anda telah menemui sumber bocor",
      "Periksa dalam kotak DB: ada tanda air, karat atau perubahan warna di sekeliling RCCB bermakna kemasukan air",
      "Perhatikan corak: adakah ia tripping sebaik sahaja alat tertentu mula, atau hanya apabila beberapa alat berjalan serentak?",
      "Periksa bau terbakar atau casing pemecut yang panas — jika ada, berhenti reset dan matikan litar",
    ],
    prevention: [
      "Ganti kord flex dan sambungan bumi pemanas air serta tungku setiap 5–7 tahun",
      "Kekalkan kotak DB kering: baiki sebarang kebocoran di atasnya dan pastikan penutup kedap daripada hujan",
      "Pasangkan setiap alat muatan tinggi (penghawa dingin, pemanas air, ketuhar) pada litar khusus masing-masing",
      "Periksa kotak DB setiap 5–10 tahun, terutama di rumah berumur 20 tahun ke atas",
    ],
    costDetail: "Lawatan diagnosis dengan ujian pemasingan litar demi litar bermula sekitar RM180–RM350 dan biasanya mengambil masa 30–60 minit. Penggantian satu RCCB rosak mencecah RM250–RM450 termasuk alat; penyambungan semula wayar rosak atau penggantian alat yang bocor menaikkan harga kerja, dan peningkatan kotak DB penuh dengan pengagihan muatan yang lebih baik berada pada RM600–RM850+. Semua kerja dilakukan oleh juruelektrik berdaftar ST, dan pembaikan dilindungi jaminan mutu kerja standard."
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
    },
    overview: "Dinding putih di rumah Malaysia menua menjadi kuning kerana tiga sebab pada masa yang sama: emulsi murah dengan kestabilan UV yang buruk yang memang tidak dapat memegang putih, gris dapur dan asap yang terapung di udara yang filem permukaan, dan — pada dinding menghadap barat — matahari petang melakukan kerja kimia perlahan pada filem cat. Penunjuknya ialah corak. Kuning seluruh rumah menunjuk ke sistem cat; tompok kuning di sekeliling dapur atau tingkap menunjuk ke gris, asap, atau matahari; kuning yang hanya kembali selepas lapisan baharu menunjuk ke sealer yang sedang merembes melalui. Pembetulan ialah membuang filem, menyekat tompok pada peringkat primer, dan mengecat semula dengan cat yang benar-benar dirumus untuk kekal putih dalam iklim panas, lembap, dan bergris.",
    diyChecks: [
      "Basuh tompok ujian dengan deterjen ringan — jika putih kembali, kuning ialah filem permukaan; jika kekal, ia telah meresap ke dalam salutan",
      "Petakan corak: dinding keseluruhan, dinding bersebelahan dapur, atau dinding menghadap matahari masing-masing menunjuk ke punca berbeza",
      "Periksa sealer: jika kuning kembali dalam beberapa minggu selepas pengecatan penuh, sealer itu sendiri punca",
      "Gosok dinding — rasa berpasir dan berkapur bermakna topcoat telah rosak dan memerlukan salutan penuh, bukan tocuh-up",
    ],
    prevention: [
      "Guna akrilik premium stabil UV dan VOC rendah untuk dinding putih — emulsi murah ialah penanda masa kuning 12 bulan",
      "Jalankan ekstraktor dapur semasa dan selepas memasak; filem gris penguning nombor satu di dalam bilik",
      "Tambah pengudaraan atau filem UV pada tingkap menghadap barat supaya filem cat tidak dipanggang sepanjang petang",
      "Ecat semula dinding putih setiap 3–5 tahun, bukan menunggu warna krim menetapkan",
    ],
    costDetail: "Satu bilik — bersihkan, sekat tompok, dan dua lapisan akrilik putih premium — mencecah RM400–RM900 bergantung kepada luas dinding dan ketinggian. Pengecatan semula seluruh rumah untuk memulihkan putih berada pada RM2,000–RM3,500+ untuk 3 bilik tidur tipikal, dan harga naik di mana sealer perlu diganti atau dinding memerlukan pembersihan persediaan penuh. Kami padankan sistem cat kepada punca (UV, gris, atau rembesan sealer), bukan hanya warna, dan kerja membawa jaminan standard."
  },
  "paint-cracking-hairline-walls": {
    symptom: "Retak halus seperti labah-labah muncul pada dinding yang dicat, sering di sekitar bingkai tingkap, pintu atau persimpangan siling-dinding.",
    causes: ["Penetapan bangunan biasa (teruk dalam 2–5 tahun pertama)", "Skim-coat terlalu tebal atau terlalu cepat", "Pergerakan suhu dan kelembapan", "Pengecutan plaster di bawah"],
    solutions: ["Lebarkan retak sedikit dan isi dengan pengisi akrilik fleksibel", "Sapukan pita gentian kaca untuk retak lebih besar", "Skim atas pembaikan dengan lapisan plaster nipis", "Primer dan cat semula dengan cat atas akrilik fleksibel"],
    whenToCall: ["Retak lebih lebar dari rambut (1 mm+)", "Retak yang sama terbuka semula selepas dicat", "Retak berjalan secara pepenjuru merentasi kawasan besar"],
    localFaq: {
      q: "Adakah retak halus bermakna rumah saya rosak struktur?",
      a: "Hampir tidak pernah. Retak kosmetik adalah penetapan biasa dan pergerakan cat — retak struktur sebenar biasanya lebih lebar (5 mm+), pepenjuru dan semakin teruk."
    },
    overview: "Retak halus pada dinding bercat hampir selalu rumah bergerak, bukan rumah gagal. Dalam 2–5 tahun pertama sebuah bangunan enapan, plaster, filem cat, dan kornis semua fleksibel pada kadar sedikit berbeza — cat, sebagai lapisan paling tidak fleksibel, retak pertama dan paling kelihatan. Tambah kitaran kelembapan Malaysia, di mana dinding menghisap dan menghembus kelembapan setiap hari, dan beberapa garisan laba-laba halus di sekitar bingkai dan sambungan ialah normal. Retak yang penting ialah yang lebar (5 mm+), yang diagonal dan progresif, dan yang bertangga di sepanjang joint masonry — itu perbincangan struktur, bukan perbincangan cat. Untuk mayoritas kosmetik, pembetulan ialah mengisi dengan pengisi fleksibel dan pita mesh, skim, dan cat semula — supaya dinding boleh terus bergerak tanpa retak lagi.",
    diyChecks: [
      "Ukur retak: bawah 1 mm adalah wilayah pengisi kosmetik; 1–3 mm memerlukan pengisi plus mesh; 5 mm atau lebih, atau diagonal dan progresif, memerlukan pandangan struktur dahulu",
      "Periksa corak: retak yang hanya pada bingkai dan sambungan ialah pergerakan; retak yang merentasi seluruh dinding rata layak pandangan kedua",
      "Sentuh retak — jika plaster di sekelilingnya berderak, ada kelembapan terlibat dan dinding mesti kering sebelum diisi",
      "Gambar retak dengan pembaris dan tarikh; selepas sebulan, gambar semula dan bandingkan — retak yang membesar mengubah perbincangan",
    ],
    prevention: [
      "Isi retak kosmetik dengan pengisi akrilik fleksibel plus pita mesh, bukan pauci kaku — dinding terus bergerak, isian mesti bergerak bersamanya",
      "Cat semula dengan topcoat akrilik sedikit lebih fleksibel pada dinding dengan sejarah retak",
      "Kekalkan dinding bernafas: ekstrak kelembapan di bilik mandi dan dapur supaya plaster tidak kitar basah-kering harian",
      "Di rumah baru, jangka pusingan tocuh-up pada tahun 2 dan tahun 4 enapan — bajet untuknya",
    ],
    costDetail: "Satu retak kosmetik diisi, ditap, di-skim, dan dicat semula bermula sekitar RM150–RM300. Lintasan tahap bilik — semua retak halus diisi dan di-mesh, di-skim, di-primer, dan dicat semula — mencecah RM500–RM1,200 bergantung kepada luas dinding dan gred cat. Berbilang bilik dan lintasan retak seluruh rumah dinilai setiap bilik dengan diskaun. Di mana retak lebar, diagonal, atau progresif, kami menyuruh penilaian jurutera struktur sebelum sebarang isian, dan kerja membawa jaminan standard."
  },
  "leaking-bathroom": {
    symptom: "Lantai di bawah bilik mandi tingkat atas basah atau lembap, atau dinding bersebelahan menunjukkan kesan perang dan cat berbuih.",
    causes: ["Membran kalis air lantai bilik mandi retak", "Silikon gagal di sekitar skrin mandi atau tab mandi", "Paip tersembunyi bocor di dalam dinding", "Grout jubin rosak membenarkan air masuk ke papak"],
    solutions: ["Ujian tekanan paip untuk kenal pasti kebocoran paip atau papak", "Grout PU papak konkrit dari bawah (tanpa pecah jubin)", "Silikon semula skrin mandi dan sendi tab mandi", "Membran semula penuh dengan pecah jubin (kes teruk)"],
    whenToCall: ["Siling di bawah bilik mandi menitis", "Cat dinding bersebelahan bilik mandi berbuih", "Tompok basah semakin besar minggu demi minggu"],
    localFaq: {
      q: "Adakah saya perlu pecahkan jubin untuk membaiki kebocoran bilik mandi?",
      a: "Biasanya tidak. Dalam kebanyakan kes kami boleh mengedap kebocoran dari bawah menggunakan grouting PU bertekanan tinggi — tanpa kerosakan jubin."
    },
    overview: "Bilik mandi yang bocor ialah satu-satunya kebocoran yang rumah Malaysia tidak boleh diabaikan, kerana air tidak kekal di dinding anda — ia bergerak, dan ia bergerak ke bawah. Membran lantai telah gagal pada garis grout, slab, atau sambungan paip, dan air kini mempunyai laluan terus ke siling dan dinding tingkat di bawah. Corak memberitahu punca: tompok basah yang membesar selepas setiap shower ialah permukaan lantai; dinding lembap berterusan di sebelah bilik mandi ialah paip atau seal skrin shower; dan titisan yang berterusan tanpa air berjalan ialah paip atau trap. Berita baik moden ialah kebanyakan ini boleh dihentikan tanpa hacking jubin anda — PU grouting dari bawah, atau salutan tanpa-hack di mana kegagalan berada pada grout — dan yang aktif kami layani sama hari di Lembah Klang, biasanya dalam 45–90 minit.",
    diyChecks: [
      "Waktunya: jalankan shower selama 5 minit dan pantau dinding atau siling di bawah selama 30 minit — menggelap terus ialah permukaan/slab",
      "Matikan bekalan air dan pantau: titisan berterusan tanpa air berjalan menunjuk ke paip atau trap",
      "Uji ketukan jubin lantai bilik mandi — gelang kosong di sekitar zon basah bermakna membran telah gagal di tempat itu",
      "Periksa silikon di sekitar skrin shower dan tab: seal retak, beracuan, atau hilang ialah laluan rembesan",
    ],
    prevention: [
      "Ganti sebarang seal silikon retak atau beracuan di sekitar skrin shower dan tab setiap tahun",
      "Ganti grout lantai bilik mandi dengan grout berseal atau epoksi setiap 3–5 tahun",
      "Betulkan sebarang sambungan paip yang menitik pada minggu ia ditemui, bukan bulan",
      "Di kondominium, laporkan tompok siling perlahan kepada JMB awal — kebocoran paling murah untuk dibetulkan sebelum menjadi tuntutan",
    ],
    costDetail: "Penyilikon semula skrin shower atau tab mencecah RM180–RM350. PU grouting slab dari bawah — tanpa hacking jubin — mencecah RM350–RM1,500 bergantung kepada garisan kebocoran. Di mana membran telah gagal sepenuhnya, kalis air semula penuh dengan hacking jubin ialah kerja RM3,500–RM8,500 untuk bilik mandi standard. Kami mendiagnosis punca dahulu — ujian tekanan untuk paip, ujian ketukan untuk slab — dan menilai kaedah yang sepadan dengan kegagalan sebenar. Kebocoran aktif di Lembah Klang mendapat penghantaran sama hari, dan kerja membawa jaminan standard."
  },
  "low-water-pressure": {
    symptom: "Aliran shower lemah, paip menitis, atau pemanas air sukar berfungsi kerana tekanan air masuk terlalu rendah.",
    causes: ["Penapis inlet tersumbat pada pemanas air atau kepala shower", "Paip galvanis berkarat mengecilkan diameter aliran", "Pam penggalak atau tangki tekanan gagal", "Masalah bekalan utama SYABAS (jarang tetapi mungkin)"],
    solutions: ["Bersihkan atau ganti kepala shower dan penapis inlet", "Nyahskala pemanas air", "Gantikan paip berkarat dengan PPR/PEX", "Pasang atau ganti pam penggalak tekanan"],
    whenToCall: ["Hanya satu paip terjejas (mungkin tersumbat tempatan)", "Seluruh rumah terjejas (mungkin pam atau utama)", "Tekanan turun mendadak selepas kerja berdekatan"],
    localFaq: {
      q: "Perlukah saya pasang pam penggalak?",
      a: "Jika rumah anda 2+ tingkat atau tekanan rendah di tingkat atas, pam penggalak biasanya penyelesaian yang tepat. Pemasangan biasa: RM 900 hingga RM 2,200."
    },
    overview: "Tekanan air rendah di rumah Malaysia ialah masalah penyempitan: di mana-mana antara bekalan utama dan pam anda, laluan aliran telah menjadi lebih kecil. Punca klasik, mengikut urutan betapa kerapnya kami melihatnya: kepala shower atau penapis inlet tersumbat (yang murah), paip galvanis lama yang telah berkarat diameternya selama 20+ tahun, injap stop separa tertutup, pam booster yang gagal di rumah berbilang tingkat, atau — jarang — isu sisi bekalan daripada pihak berkuasa. Penunjuknya ialah skop. Satu pam lemah menunjuk ke aerator pam itu atau laluan paip setempatnya; seluruh rumah lemah menunjuk ke injap, pam, atau garisan utama; dan tekanan yang turun tiba-tiba selepas kerja jalan menunjuk ke bekalan. Pembetulan sepadan dengan punca — pertukaran penapis RM50 atau pam RM2,000 — itulah mengapa diagnosis datang dahulu.",
    diyChecks: [
      "Lepaskan aerator kepala shower dan penapis pam dan bilas — jaring berkarat ialah yang paling biasa dan pembetulan percuma",
      "Uji satu pam berbanding yang lain: jika hanya satu lemah, masalahnya setempat pada perkakas itu",
      "Periksa injap stop utama: adakah ia terbuka sepenuhnya? Injap yang seperempat pusingan pendek dari terbuka separuh aliran",
      "Jika rumah mempunyai pam, dengar: pam yang berjalan berterusan atau berbunyi sedang gagal, bukan booster",
    ],
    prevention: [
      "Bilas aerator kepala shower dan penapis pam setiap 6–12 bulan — air keras menyumbatnya secara senyap",
      "Tahu di mana injap stop utama anda dan kekalkan ia terbuka sepenuhnya",
      "Di rumah 2+ tingkat, servis pam booster setiap tahun",
      "Jika anda menggantikan laluan paip, tukar kepada PPR atau PEX — galvanis ialah penanda masa tekanan 20 tahun",
    ],
    costDetail: "Diagnosis dengan ujian aliran di utama dan di setiap perkakas bermula sekitar RM150–RM200. Pembetulan penapis dan injap hujung yang murah. Penggantian laluan paip berkarat dengan PPR atau PEX dinilai mengikut panjang dan akses, dan bekalan-pasang pam booster mencecah RM900–RM2,200 bergantung kepada gred pam. Kami menemui penyempitan dahulu dan menilai pembaikan terkecil yang memulihkan aliran — supaya penapis RM50 tidak dijual sebagai pam. Kerja membawa jaminan standard."
  },
  "clogged-drain": {
    symptom: "Air mengalir perlahan, bertakung di singki atau tab mandi, atau naik semula apabila menggunakan beberapa paip serentak.",
    causes: ["Pembinaan gris dapur di P-trap dan paip mendatar", "Pengkumpulan rambut di perangkap longkang bilik mandi", "Objek asing (tisu basah, produk sanitasi) dalam paip tandas", "Paip rosak atau tenggelam menyebabkan sampah terkumpul"],
    solutions: ["Snake / rod manual perangkap dan paip", "Rawatan longkang berasaskan enzim (selamat untuk paip)", "Jet air bertekanan tinggi (untuk dapur degil)", "Inspeksi kamera + pembaikan paip untuk kerosakan struktur"],
    whenToCall: ["Beberapa longkang naik serentak", "Air naik dari longkang lain apabila flush", "Bau kumbahan di dalam rumah"],
    localFaq: {
      q: "Adakah bahan kimia pembuka longkang selamat untuk paip saya?",
      a: "Bahan kaustik kuat boleh merosakkan sendi PVC lama dan tidak selamat untuk ruang tertutup. Kami cadangkan pembersihan mekanikal ditambah rawatan enzim — lebih selamat dan tahan lama."
    },
    overview: "Longkang perlahan atau tersumbat di dapur atau bilik mandi Malaysia hampir selalu salah satu daripada tiga perkara yang terkumpul selama berbulan-bulan: gris dalam P-trap dapur dan larian mendatar, rambut dalam trap bilik mandi, atau — satu yang mengejutkan orang — barang asing (tisu basah, barangan sanitari, penutup botol hilang) yang telah bekerja ke dalam garisan tandas. Penunjuknya ialah corak. Longkang dapur yang perlahan selepas setiap gorengan menunjuk ke gris. Longkang bilik mandi yang perlahan dalam beberapa minggu menunjuk ke rambut. Penyumbatan penuh tiba-tiba dengan gurgling dari longkang lain menunjuk ke objek atau masalah garisan utama. Pembetulan bergantung pada punca: pembersihan mekanikal dahulu, rawatan enzim untuk kekalkan bersih, dan jetting tekanan tinggi hanya di mana garisan teruk berskor.",
    diyChecks: [
      "Catat lekapan mana yang perlahan: satu sinki menunjuk setempat, beberapa serentak menunjuk ke garisan berkongsi",
      "Jalankan air ke dalam lekapan paling perlahan dan pantau longkang lain — gelembung atau air naik di tempat lain menanda garisan utama",
      "Periksa P-trap di bawah sinki untuk filem gris kelihatan atau penyumbatan separa yang boleh dicapai",
      "Cium: nota kumbahan (bukan hanya air basi) menunjuk ke bawah trap, ke arah garisan utama",
    ],
    prevention: [
      "Jangan sesekali tuang gris masakan ke sinki — kumpulkan dalam balang dan buang",
      "Guna penapis mesh di setiap longkang dapur dan bilik mandi",
      "Jalankan air panas plus rawatan enzim bulanan untuk kekalkan garisan bersih",
      "Siram hanya kertas tandas di tandas — tisu basah dan barangan sanitari penyumbat garisan utama klasik",
    ],
    costDetail: "Snaking atau rodding mekanikal satu lekapan bermula sekitar RM150–RM250. Di mana garisan dapur teruk berskor dengan gris, jetting air tekanan tinggi larian penuh mencecah RM350–RM700. Pemeriksaan kamera ditambah di mana penyumbatan berulang, supaya halangan sebenar dilihat dan dinilai dengan betul. Kami bersihkan garisan secara mekanikal dahulu — bahan kimia kaustik kuat merosakkan sendi PVC lama dan membuatkan kerja susulan tidak selamat — dan kerja membawa jaminan standard."
  },
  "toilet-not-flushing": {
    symptom: "Tandas flush lemah, tidak mengosongkan mangkuk dalam satu tekan, atau air terus mengalir selepas flush.",
    causes: ["Injap flapper atau mekanisme flush haus", "Rim jet tersumbat di tepi mangkuk", "Sumbatan separa di S-trap atau paip sisa", "Injap isi rosak (pemasangan apung)"],
    solutions: ["Ganti flapper, injap isi atau kartrij dual-flush", "Nyahskala rim jet dengan cuka atau CLR", "Snake S-trap dan paip sisa", "Kit bina semula tangki penuh untuk tandas lama"],
    whenToCall: ["Sudah ganti flapper tetapi masih mengalir", "Aliran air ke mangkuk lemah dari semua arah", "Perlu beberapa flush untuk mengosongkan"],
    localFaq: {
      q: "Bolehkah saya membaiki mekanisme flush sendiri?",
      a: "Mengganti flapper mudah dan boleh dibuat sendiri. Masalah injap isi atau S-trap biasanya memerlukan tukang paip."
    },
    overview: "Tandas yang menyiram lemah, memerlukan dua atau tiga tekanan, atau terus mengalir selepas siram ialah masalah mekanisme, bukan masalah seramik — dan di rumah Malaysia, bahagian yang gagal boleh diramalkan. Valve flaper haus dan tidak lagi tertutup, jadi air mengalir senyap ke dalam mangkuk dan tangki tidak pernah diisi dengan tekanan yang cukup. Rim jets di sekeliling tepi mangkuk tersumbat dengan skala kapur keras yang ditinggalkan oleh air Malaysia, jadi siram mempunyai kurang dan kurang untuk menolak. Float valve isian terapung, dan S-trap di bawah lantai tersumbat dengan sludge. Setiap satu ini ialah bahagian kecil dan kerja kecil; satu-satunya hasil mahal ialah memilih untuk menggantikan suite 15 tahun secara berpotongan selama bertahun-tahun, bukan sekali.",
    diyChecks: [
      "Angkat penutup tangki siram dan pantau siram penuh: adakah flaper duduk sepenuhnya, dan adakah tangki kosong dalam satu tuang yakin?",
      "Periksa aliran: jika air mengalir ke dalam mangkuk dengan valve isian off, flaper atau kerusi valve isian ialah kebocoran",
      "Lihat rim jets — gelap dengan skala dan hampir tidak lulus air bermakna descaling ialah pembetulan",
      "Catat corak siram: lemah dari semua rim jets menunjuk ke mekanisme tangki; lemah dari satu pihak boleh menunjuk ke penyumbatan S-trap separa",
    ],
    prevention: [
      "Buang kapur pada tangki siram dan rim jets setiap 12–18 bulan dengan rendaman asid sitrik atau cuka",
      "Ganti flaper dan seal valve isian pada tanda pertama aliran — ia murah dan kerja 10 minit",
      "Kekalkan air lembut di mana mungkin; air keras itulah yang menyumbat rim jets",
      "Jika anda telah menggantikan dua atau lebih bahagian dalam dua tahun lepas, nilai suite baharu — bajet bahagian akan melewati bajet penggantian",
    ],
    costDetail: "Penggantian flaper atau valve isian termasuk bahagian mencecah RM150–RM250. Buang kapur rim jets dan servis tangki siram berada dalam julat yang sama. Di mana S-trap atau garisan buangan ialah masalah, snaking atau penggantian trap menambah kepada kerja. Penggantian suite penuh — menanggalkan unit lama, bekalan dan pasang suite dual-flush, dan pembuangan — mencecah RM550–RM1,800 bergantung kepada gred suite. Kami kenal pasti bahagian yang gagal dahulu dan menilai pembaikan terkecil yang benar-benar berfungsi, dan kerja membawa jaminan standard."
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
    },
    overview: "Retak di mana siling bertemu kornis ialah kecacatan kosmetik paling biasa di rumah Malaysia, dan dalam kebanyakan besar kes ia bukan struktur. Kornis plaster, siling plasterboard, dan dinding bata semua bergerak pada kadar sedikit berbeza dengan suhu dan kelembapan — dan dalam rumah baru, enapan 2–5 tahun pertama menambahkan gerakan mereka sendiri. Pengisi lama kering, mengecut, dan retak pada sambungan itu, dan setiap pengecatan yang melangkau sambungan hanya mengecat di atas retak, bukan membetulkannya. Pembetulan ialah yang fleksibel: kikis bahan longgar, isi dengan pengisi akrilik fleksibel (dan pita mesh di mana jurang luas), kemudian skim, primer, dan cat supaya sambungan boleh bergerak tanpa retak lagi.",
    diyChecks: [
      "Ukur retak dengan syiling atau pembaris: bawah 3 mm adalah wilayah pengisi kosmetik; lebih luas, atau bertangga, memerlukan pandangan struktur",
      "Periksa sama ada retak di setiap sambungan kornis atau hanya satu — setiap sambungan bermakna pergerakan; satu sambungan bermakna masalah air atau sokongan setempat",
      "Lepai kuku di sepanjang retak: jika plaster berderak, kelembapan telah melembutkannya dan kawasan memerlukan pengeringan atau pembetulan kebocoran dahulu",
      "Pantau retak selama sebulan: jika ia melebar, berhenti — itu retak pergerakan aktif, bukan kosmetik",
    ],
    prevention: [
      "Isi sambungan kornis dengan pengisi akrilik fleksibel plus pita mesh dari awal, bukan polyfilla kaku",
      "Ecat semula sambungan ringan dengan warna dinding dan siling supaya pergerakan tidak menunjukkan sebagai garis",
      "Biarkan kipas pengudaraan bilik mandi dan dapur berjalan — kitaran kelembapan itulah yang meretakkan pengisi",
      "Semak semua garis kornis di rumah baru sekali setahun untuk lima tahun pertama enapan",
    ],
    costDetail: "Pembaikan retak kornis setiap bilik (kikis, isi fleksibel, mesh di mana perlu, skim, primer, dan cat semula sepadan) mencecah RM200–RM380 untuk bilik tidur dan RM450–RM900 untuk bilik tamu atau garis siling lebih panjang. Berbilang bilik dinilai dengan diskaun setiap bilik. Di mana kornis itu sendiri terasing atau rosak air, kami baiki atau ganti seksyen kornis dahulu, yang dinilai selepas pemeriksaan. Semua kerja diselesaikan dengan filem cat sepadan dan dilindungi jaminan standard."
  },
  "balcony-leak-condo": {
    symptom: "Air menitis ke unit di bawah dari balkoni, atau dinding dalaman berhampiran balkoni menunjukkan kesan air.",
    causes: ["Membran kalis air balkoni gagal", "Retak pada screed balkoni", "Pintu gelangsar balkoni bocor di ambang", "Saliran balkoni tersumbat"],
    solutions: ["Ujian banjir untuk kenal pasti titik kebocoran", "PU grouting dari bawah jika boleh", "Sapukan membran kalis air baru di atas screed", "Tukar atau baiki sealant pintu gelangsar"],
    whenToCall: ["Jiran di bawah mengadu air menitis", "Dinding dalaman mula berbuih", "Balkoni sentiasa basah selepas hujan"],
    localFaq: {
      q: "Siapa bertanggungjawab untuk kebocoran balkoni kondo?",
      a: "Biasanya pemilik unit (ruang persendirian). Untuk kebocoran dari kawasan bersama, JMB/MC mungkin bertanggungjawab. Semak strata title."
    },
    overview: "Di kondominium, balkoni yang bocor bukan sekadar kebocoran — ia ialah hubungan undang-undang dengan unit di bawah. Di bawah kebanyakan peraturan JMB Malaysia, pemilik unit strata bertanggungjawab terhadap kalis air balkoni mereka sendiri, yang bermakna tompok siling jiran di bawah ialah invois anda, dan jam bermula apabila JMB menghantar notis pembaikan. Cerita fizikalnya biasanya salah satu daripada empat: membran akrilik atau simen telah tua dan retak, grout jubin telah membenarkan hujan melalui selama bertahun-tahun, longkang balkoni tersumbat dan air bertakung menampar slab, atau retak halus dalam konkrit melakukan kerja perlahan dalam setiap musim hujan. Berita baiknya: kebanyakan ini boleh dibaiki tanpa hacking jubin anda — grout slab dari bawah, atau buang dan membran semula hanya zon yang gagal.",
    diyChecks: [
      "Lakukan ujian air bertakung: semburkan balkoni dengan hos, biarkan ia bertakung selama 30 minit, dan periksa unit di bawah — tompok gelap baharu menanda laluan aktif",
      "Periksa longkang balkoni: jalankan air dan pantau ia pergi; jika ia bertakung, longkang ialah perkara pertama untuk dibetulkan",
      "Uji ketukan jubin lantai balkoni — gelang kosong di sekitar zon basah bermakna membran telah gagal di tempat itu",
      "Gambar kerosakan di bawah dengan tarikh, dan simpan koresponden JMB — jejak kertas itulah yang menyelesaikan persoalan tanggungjawab kemudian",
    ],
    prevention: [
      "Kekalkan longkang balkoni bebas daripada daun dan serpihan jubin — longkang tersumbat mengairkan air menampar membran",
      "Ganti grout lantai balkoni dengan grout berseal atau epoksi setiap 3–5 tahun",
      "Jangan biarkan pasu duduk dalam air bertakung menampar tepi slab",
      "Membran semula balkoni pada tanda 10–15 tahun walaupun ia belum bocor — penggantian jauh lebih murah daripada tuntutan",
    ],
    costDetail: "PU grouting slab dari bawah — dengan kebenaran pemilik di bawah, tanpa hacking jubin anda — bermula sekitar RM800–RM2,500 bergantung kepada garisan retak. Membran semula sebahagian zon yang gagal mencecah RM2,500–RM4,500. Hacking jubin penuh, membran baharu, dan jubin semula seluruh balkoni ialah kerja RM4,500–RM6,500+, biasanya 3–5 hari bekerja. Kami lakukan ujian air bertakung dahulu supaya kaedah sepadan dengan laluan kebocoran sebenar, dan kalis air membawa jaminan bertulis standard."
  },
  "concrete-slab-crack-leak": {
    symptom: "Retak pada papak konkrit menyebabkan air hujan atau air guna masuk ke tingkat bawah.",
    causes: ["Konkrit retak kerana pergerakan struktur", "Waterproofing atas papak telah luput", "Tiada membran kalis air yang mencukupi", "Beban berat di atas papak"],
    solutions: ["Isi retak dengan epoxy injection", "PU grouting bertekanan tinggi dari bawah", "Sapukan membran kalis air baru di atas", "Tambah lapisan screed pelindung"],
    whenToCall: ["Retak boleh dilihat pada papak", "Kebocoran berulang selepas hujan lebat", "Waterproofing lama sudah lebih 5 tahun"],
    localFaq: {
      q: "Bolehkah retak konkrit dibaiki secara kekal?",
      a: "Retak struktur boleh distabilkan dengan epoxy injection. Untuk kebocoran aktif, PU grouting adalah kaedah paling berkesan di Malaysia."
    },
    overview: "Tompok siling yang hanya muncul semasa hujan monsun lebat, menjejak garisan lurus dalam slab di atas, ialah tanda klasik retak slab konkrit yang bocor. Retak itu biasanya retak susut atau pergerakan dalam konkrit — kecil, sering bawah 3 mm, dan tidak ketara dari segi struktur — tetapi ia ialah saluran terus dari bumbung atau permukaan slab ke siling di bawah, dan kalis air permukaan yang telah tua selama beberapa dekad tidak dapat menutupnya. Alasannya ia hanya bocor dalam hujan lebat ialah hujan ringan meresap ke dalam pori konkrit dan kering, manakala hujan turun berterusan mengisi saluran retak lebih cepat daripada slab sekeliling boleh menyerapnya. Pembetulan moden tidak memerlukan akses bumbung: buih PU disuntik di bawah tekanan dari bawah melalui port kecil yang digerudi, berkembang untuk mengisi retak sepenuhnya dan fleksibel dengan slab untuk 8–15 tahun akan datang.",
    diyChecks: [
      "Semasa hujan lebat, tandakan garisan titisan dengan pita penanda — kelurusan garisan itulah yang memisahkan retak slab daripada kebocoran paip rawak",
      "Periksa bumbung atau permukaan slab di atas (jika boleh diakses) untuk garisan retak yang sama — retak kelihatan plus garisan titisan mengesahkan diagnosis",
      "Catat lebar sebarang retak boleh diakses: bawah 3 mm adalah wilayah suntikan tipikal; retak struktur yang lebih luas memerlukan jurutera struktur dahulu",
      "Periksa sama ada kebocoran telah memburuk tahun demi tahun — tompok yang membesar bermakna saluran retak melebar atau segel permukaan gagal",
    ],
    prevention: [
      "Kekalkan bumbung dan permukaan slab bersih dan saliran — air bertakung pada slab mempercepat pertumbuhan retak",
      "Tutup semula permukaan slab dengan membran akrilik di mana boleh diakses, setiap 8–10 tahun",
      "Laporkan kebocoran antara tingkat di kondominium kepada JMB awal supaya slab dirawat sebelum retak melebar",
      "Beri retak slab lebih 3 mm dinilai oleh jurutera struktur sebelum sebarang kerja suntikan",
    ],
    costDetail: "PU grouting retak slab dinilai mengikut panjang retak dan akses, dan kebocoran monsun tipikal mencecah RM650–RM1,800 untuk satu garisan, meningkat ke RM3,800+ untuk berbilang garisan atau akses sukar. Kerja mengambil masa 2–4 jam, dilakukan dari bawah tanpa akses bumbung, mengeras pada hari yang sama, dan membawa jaminan bertulis sehingga 5 tahun. Di mana permukaan di atas boleh diakses, kami juga boleh menutupnya semula dengan membran akrilik dalam lawatan yang sama untuk liputan jangka panjang. Kami sahkan garisan retak dengan menjejak titisan sebelum menilai."
  },
  "curtain-track-falling": {
    symptom: "Rel tirai longgar dari siling atau dinding, bracket jatuh, atau tirai terjatuh.",
    causes: ["Skrup ditarik keluar dari drywall", "Bracket dipasang hanya pada plasterboard tanpa anchor", "Beban tirai terlalu berat untuk bracket", "Plaster siling rapuh atau rosak"],
    solutions: ["Tanggalkan bracket lama dan tampal lubang", "Pasang anchor berat atau toggle bolt baru", "Kalihkan bracket ke kedudukan joist atau rasuk", "Pasang semula tirai dengan bracket yang diperkuat"],
    whenToCall: ["Bracket jatuh berulang kali", "Siling terasa rapuh di kawasan pemasangan", "Tirai terlalu berat untuk sistem semasa"],
    localFaq: {
      q: "Berapa kos untuk memasang semula rel tirai?",
      a: "Biasanya RM 150 hingga RM 350 termasuk bracket baru dan anchor, bergantung pada bilangan tingkap dan jenis siling."
    },
    overview: "Landasan tirai yang kendur, menarik skru keluar, atau jatuh ialah masalah lencana, bukan masalah tirai — dan di rumah Malaysia, kegagalannya hampir selalu sama: landasan dipasang ke dalam papan gipsum atau plaster dengan penyumbat plastik asas, dan cengkeraman plaster itu sendiri menyerah di bawah tarikan berulang membuka dan menutup tirai berat. Tirai blackout atau berlapis pada landasan panjang boleh meletakkan beberapa kilogram muatan dinamik pada setiap lencana, hari demi hari. Pembetulan ialah memasang semula dengan betul: cari joist, atau guna lencana toggle/spring berat berkelas yang dinilai jauh melebihi berat tirai, tampal lubang yang tertarik, dan untuk tirai sangat berat tambah bracket dinding antara supaya landasan berhenti membawa rentangannya sendiri.",
    diyChecks: [
      "Sokong landasan dengan tangan dan buka tirai sepenuhnya — catat berapa banyak lencana telah tertarik atau longgar",
      "Ketuk di sekitar setiap lencana: bunyi ketuk kosong bermakna papan gipsum, ketuk pepejal bermakna konkrit atau joist berhampiran",
      "Timbang atau anggap tirai: fabrik blackout dan berlapis menggandakan muatan berbanding tirai nipis",
      "Periksa siling di sekitar landasan untuk sebarang tompok air — plaster lembap tidak akan memegang sebarang lencana",
    ],
    prevention: [
      "Padankan lencana dengan dinding: konkrit memerlukan lencana berplat, papan gipsum memerlukan toggle berat berkelas, bukan penyumbat asas",
      "Guna bracket sokongan antara pada landasan lebih panjang daripada kira-kira 2 meter dengan tirai berat",
      "Ganti henti dan roller landasan apabila ia haus — roller yang menarik berganda muatan pada lencana",
      "Torq semula skru landasan sekali setahun; kerja satu minit menghalang landasan jatuh",
    ],
    costDetail: "Pasang semula landasan standard pada satu tingkap — menampal lubang yang tertarik, mencari joist atau gerudi titik lencana berat berkelas baharu, dan menggantung semula dengan lencana betul — mencecah RM120–RM250. Siling konkrit dan papan gipsum rosak yang memerlukan tampalan dan primer berada pada RM250–RM380+ setiap tingkap. Di mana tirai benar-benar berat (blackout, berlapis, atau landasan pelbagai panel panjang), kami tambah bracket antara dalam harga yang sama. Setiap pemasangan diuji muatan sebelum serahan dan dilindungi jaminan standard."
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
    },
    overview: "Unit kondominium berumur 15+ tahun bukan projek hiasan — ia ialah bangunan yang telah menghabiskan beberapa dekad menyerap haus, dan urutan pembaharuan sama pentingnya dengan hasil akhir. Kalis air, keselamatan elektrik, dan paip datang dahulu, kerana ia yang mahal dan bahaya untuk ditemui kemudian; cat, lantai, dan jubin ialah lapisan kelihatan yang membuatkan unit terasa baharu; dan dapur serta almari pergi terakhir, kerana ia kepingan yang keseluruhan jadual dibina di sekelilingnya. Mendapat urutan salah dan anda akan melindungi kerja basah dengan karpet yang bakal dihacking, atau memasang almari yang perlu dibuang untuk pembaikan paip. Di kondominium, peraturan JMB juga membentuk jadual: jam kerja, perlindungan lif, pembuangan puing, dan deposit ialah sebahagian dari rancangan, bukan kejutan.",
    diyChecks: [
      "Jalan unit bilik demi bilik dan tandakan tiga kategori: baiki-dahulu (kebocoran, elektrik, paip), pembaharuan (cat, lantai, jubin), dan fit-out (dapur, almari, perkakas)",
      "Periksa usia wayar dan kotak DB — unit 20+ tahun dengan wayar asal ialah item keselamatan, bukan kosmetik",
      "Lihat siling bilik mandi dan rungutan jiran: kebocoran antara tingkat ialah penemuan lewat termahal di kondominium",
      "Putuskan matlamat akhir — duduk sendiri, atau sewa — kerana ia mengubah gred bahan dan bajet setiap bilik",
    ],
    prevention: [
      "Bajet untuk item tersembunyi: dalam unit 15+ tahun, 15–25% sebut harga biasanya kejutan (kalis air, paip, wayar)",
      "Susun kerja supaya trades basah selesai sebelum trades kering, dan trades kering selesai sebelum jeda",
      "Lindungi lif, lobi, dan koridor biasa — tuntutan JMB untuk kerosakan mahal dan perlahan",
      "Simpan foto berjadual unit sebelum, semasa, dan selepas — ia menyelesaikan pertikaian dan mendokumentasikan kerja",
    ],
    costDetail: "Pembaharuan penuh kondominium 3 bilik tidur di Lembah Klang mencecah RM22,000–RM180,000+ bergantung kepada saiz unit, gred bahan, dan skop. Jadual biasanya 6–10 minggu: hacking plus kalis air, jubin plus paip plus elektrik, dapur plus kerja kayu, kemudian cat plus serahan. Selepas lawatan tapak, kami mengeluarkan sebut harga beritem dengan setiap baris skop dinilai berasingan, supaya anda meluluskan baris mana yang diteruskan. Deposit JMB, permit, jam kerja, perlindungan lif, dan pembuangan puing diuruskan sebagai standard, dan setiap fasa membawa jaminan standard."
  },
  "power-tripping-frequently": {
    symptom: "Elektrik terputus kerap, MCCB/RCCB trip setiap kali menggunakan peralatan tertentu.",
    causes: ["Litar berlebihan (terlalu banyak peralatan pada satu litar)", "Kebocoran arus ke tanah (earth leakage)", "Pendawaian lama atau longgar", "Peralatan rosak menyebabkan litar pintas"],
    solutions: ["Kenal pasti peralatan yang menyebabkan trip", "Imbang beban merentasi litar yang berbeza", "Ganti MCCB/RCCB jika rosak", "Periksa dan baiki pendawaian lama"],
    whenToCall: ["Trip berlaku setiap hari", "Hanya berlaku apabila peralatan tertentu dihidupkan", "Unit lama dengan pendawaian asal"],
    localFaq: {
      q: "Adakah berbahaya jika elektrik selalu trip?",
      a: "Trip adalah mekanisme keselamatan. Jika kerap berlaku, ia menunjukkan masalah yang perlu diperiksa oleh elektrik bertauliah sebelum ia menjadi bahaya."
    },
    overview: "Pemecut utama atau RCD yang tripping beberapa kali sehari ialah kerosakan yang berulang mengikut jadual — dan jadual itu ialah petunjuk. Tripping yang berlaku sebaik sahaja satu alat khusus bermula menunjuk ke wayar alat itu atau muatan lebih berkongsi. Tripping yang hanya berlaku selepas hujan menunjuk kelembapan menemui laluan ke bumi melalui soket, rose siling, atau kotak DB itu sendiri. Tripping yang serta-merta dan berulang dalam beberapa saat menunjuk ke pendek keras atau pemecut yang gagal. Yang penting ialah RCD sedang melakukan tugasnya: ia ialah peranti yang melindungi orang daripada kejut elektrik, dan memautkannya untuk kekalkan kuasa ialah bagaimana kebakaran rumah dan kejut bermula. Pembetulan ialah mengasingkan kerosakan litar demi litar, dan menaik taraf DB di mana pemecut itu sendiri telah uzur.",
    diyChecks: [
      "Cabut alat satu demi satu dari litar suspek dan uji RCD — jika ia berhenti tripping, anda mempunyai alatnya",
      "Periksa corak terhadap cuaca: tripping yang berkumpul selepas hujan lebat menunjuk kemasukan air di mana-mana dalam wayar",
      "Periksa kotak DB: pemecut berubah warna atau hangat, tanda air, atau bau terbakar bermakna kotak itu sendiri memerlukan perhatian",
      "Catat alat mana yang trippingnya — tungku induksi, pemanas air, dan penghawa dingin ialah suspek muatan tinggi biasa",
    ],
    prevention: [
      "Agihkan alat muatan tinggi merentasi litar berasingan, bukan satu garisan berkongsi",
      "Kekalkan kotak DB kering dan disegel — baiki sebarang kebocoran atau titik lembap di atasnya",
      "Periksa dan label kotak DB setiap 5–10 tahun, terutama di rumah lama",
      "Ganti alat dengan kord flex retak atau plug rosak sebelum ia menjadi sumber tripping",
    ],
    costDetail: "Diagnosis litar demi litar bermula sekitar RM180–RM350. Penggantian pemecut atau RCD yang gagal berada di tengah julat, dan peningkatan kotak DB penuh — pemecut baharu, RCD, pelabelan kemas, dan pengagihan muatan yang lebih baik — mencecah RM850–RM1,800 untuk rumah tipikal, dilakukan oleh juruelektrik berlesen ST dalam satu hari tanpa wayar semula. Di mana alat khusus ialah kerosakan, tripping berhenti apabila ia dibaiki atau diganti. Kerja membawa jaminan standard."
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
    },
    overview: "Jubin yang berbunyi kosong apabila diketuk telah kehilangan ikatannya — katil simen antara jubin dan screed telah gagal, dan jubin kini terapung. Di rumah Malaysia, punca biasa ialah katil asal yang buruk (dry-pack tanpa ikatan yang betul), air yang telah bekerja di bawah jubin dan mengangkat perekat, atau enapan bangunan perlahan yang menggerakkan subfloor. Satu jubin longgar ialah gangguan; beberapa keping ialah bahaya tergelincir dan laluan air — setiap jubin kosong di sekitar kawasan basah ialah potensi kebocoran ke slab di bawah, dan jubin pertama yang akhirnya melonjak boleh meretakkan jirannya apabila ia mendarat. Ujian ketukan ialah diagnosis keseluruhan, dan pembaikian ialah mengangkat, membersihkan, dan meletakkan semula dengan thin-set yang betul.",
    diyChecks: [
      "Uji ketukan grid 2 m × 2 m dengan syiling atau pengetuk jubin dan tandakan setiap bunyi kosong — petakan keseluruhan tompok, bukan hanya jubin yang ketara",
      "Periksa jubin di sekeliling jubin kosong: jika gelang jiran juga kosong, screed di bawah kawasan keseluruhan telah terlerai",
      "Lihat garis grout di sekitar jubin longgar — grout retak atau hilang menanda di mana air telah masuk",
      "Letak objek berat pada jubin longgar selama sehari dan ketuk semula: jika ia telah turun lebih rendah, katil telah remuk dan memerlukan katil semula penuh, bukan tampalan gam",
    ],
    prevention: [
      "Kekalkan kawasan basah lebih kering — tikar mandi di pintu keluar shower dan skueji selepas mop mengurangkan air yang mengangkat jubin",
      "Ganti grout garis retak di sekitar zon basah setiap beberapa tahun supaya air tidak dapat bekerja di bawah jubin",
      "Laporkan tompok jubin kosong di kondominium kepada JMB sebelum jubin melonjak dan meretakkan jirannya",
      "Apabila meletakkan semula jubin di mana-mana kawasan, minta thin-set dengan liputan back-buttering penuh, bukan mortar kering",
    ],
    costDetail: "Satu jubin longgar yang diletakkan semula dengan thin-set betul dan grout padan mencecah RM150–RM280. Beban beberapa jubin dinilai mengikut bilangan dan biasanya bermula sekitar RM350. Di mana ujian ketukan menunjukkan keseluruhan kawasan kosong, kerja beralih ke screed semula dan letak semula mengikut meter persegi, iaitu di mana julat RM2,000–RM2,800+ terpakai. Kami petakan zon kosong sebelum menilai supaya harga meliputi tompok sebenar, dan jubin yang dikatil semula membawa jaminan standard."
  },
  "cracked-tile-grout": {
    symptom: "Grout di antara jubin retak, hancur atau hilang, meninggalkan celah terbuka.",
    causes: ["Pergerakan struktur atau penetapan bangunan", "Grout berkualiti rendah atau pemasangan buruk", "Kelembapan dan kelembapan melemahkan grout", "Pembersihan dengan bahan kimia keras"],
    solutions: ["Buang grout lama dengan alat grout saw", "Bersihkan celah dan biarkan kering", "Sapukan grout baru yang sesuai", "Tutup dengan pengedap grout selepas kering"],
    whenToCall: ["Grout hilang di beberapa sendi", "Air masuk melalui grout retak", "Grout berubah warna walaupun dibersihkan"],
    localFaq: {
      q: "Bolehkah saya ganti grout sendiri?",
      a: "Untuk kawasan kecil, ya — alat grout saw dan grout baru tersedia di kedai hardware. Untuk keseluruhan bilik mandi, lebih baik serahkan kepada profesional."
    },
    overview: "Grout ialah garisan paling lemah pada sebarang permukaan jubin, dan ia tunjuk pertama. Grout berasaskan simen di rumah Malaysia biasanya bertahan 5–8 tahun sebelum mula berderak, dan di bilik mandi serta dapur kitarannya lebih pendek kerana persekitaran lembap memberi makan acuan hitam yang mengkolonisasi garis. Setelah grout retak atau berderak, ia tidak lagi menutup joint: air terus berjalan melalui celah ke screed dan, di bilik basah, ke slab di bawah — iaitu bagaimana masalah grout \"kosmetik\" senyap menjadi masalah kalis air di bawah siling jiran. Mengganti grout ialah insurans murah terhadap rantaian itu.",
    diyChecks: [
      "Kikis grout dengan kuku atau pen grout — jika ia berderak menjadi serbuk, ikatan telah hilang dan pembersihan tidak akan menyelamatkannya",
      "Periksa garisan paling basah dahulu (asas shower, tepi tab, sink dapur) — di situlah rembesan bermula",
      "Lihat jubin di atas garisan terjejas: cincin perang atau tanda garam putih di atas grout bermakna air sudah bergerak",
      "Ketuk beberapa jubin berhampiran grout retak teruk — bunyi kosong bermakna kelembapan telah mula meleraikan jubin itu sendiri",
    ],
    prevention: [
      "Tutup semua garis grout dengan sealer merasuki hidrofobik selepas regrouting, dan seal semula setiap 2–3 tahun",
      "Guna grout epoksi atau akrilik berkualiti tinggi di kawasan basah dari awal — grout simen di situ adalah jam 5 tahun",
      "Kekalkan lantai bilik mandi lebih kering: tikar mandi di pintu keluar shower mengurangkan kitaran basah-kering berterusan",
      "Baiki sebarang garis grout yang mula retak dalam tahun itu, sebelum ia menjadi laluan rembesan",
    ],
    costDetail: "Regrouting bilik mandi standard (kawasan shower, lantai dan zon dinding basah) mencecah RM650–RM1,400 termasuk pembuangan grout, pembersihan, grout epoksi, dan penutupan. Dapur dan bilik kawasan kering lebih rendah, bermula sekitar RM250–RM500, manakala kawasan lantai besar dinilai mengikut meter persegi. Grout epoksi lebih mahal di awal berbanding grout simen tetapi bertahan 15+ tahun berbanding 5–8, jadi di bilik basah ia biasanya membayar dirinya dalam satu kitaran regrouting. Semua kerja diselesaikan dengan sealer hidrofobik dan dilindungi jaminan standard."
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
    },
    overview: "Pinggan vinyl atau SPC yang terangkat atau melentur di tepi adalah masalah tekanan, bukan lantai yang rosak. Pinggan memuai apabila panas dan mengecut apabila sejuk, dan jika jurang pengembangan 10 mm di dinding tidak dibiarkan atau telah tertutup, pinggan tidak ada ruang untuk bergerak — lalu ia menolak antara satu sama lain dan terangkat di tepi, biasanya berhampiran pintu, tingkap atau kawasan berair. Di rumah Malaysia, dua pencetus paling biasa ialah matahari petang yang terik membakar satu bahagian lantai dan air yang meresap ke bawah pinggan semasa musim hujan. Kunci klik masih kekal utuh, justeru kebanyakan pinggan boleh diangkat, dikeringkan dan dikunci semula.",
    diyChecks: [
      "Jalan di sepanjang tepi lantai dan tekan setiap pinggan yang terangkat — tandakan mana yang bergerak atau mengunci apabila ditekan",
      "Periksa jurang di dinding: sepatutnya kira-kira 10 mm; jika pinggan rapat dengan dinding, jurang pengembangan itulah puncanya",
      "Perhati bawah dan sekitar tepi yang terangkat untuk perubahan warna, bau lembap atau substrat basah",
      "Petakan bilik yang terjejas — bilik matahari petang menunjuk haba, kawasan pintu masuk basah menunjuk air",
    ],
    prevention: [
      "Kekalkan jurang pengembangan 10 mm di semua dinding dan tiang — jangan isi kemas dengan skirting",
      "Letak doormat di pintu masuk supaya kasut basah tidak menarik air merentasi lantai",
      "Gunakan tirai atau filem UV pada tingkap menghadap barat untuk kurangkan sinaran terus pada pinggan",
      "Lap tumpah serta-merta dan jangan sesekali mop basah lantai vinyl atau SPC",
    ],
    costDetail: "Pembaikan setempat — mengangkat, mengeringkan dan mengunci semula beberapa pinggan — bermula sekitar RM250 dan biasanya siap dalam 2–4 jam. Pengangkatan tepi yang meluas sepanjang dinding, atau pinggan yang perlu diganti selepas basuh air, mencecah RM800 hingga RM1,800+ bergantung kepada bilangan pinggan dan sama ada substrat perlu dikeringkan atau dipampal. Kami sahkan punca (haba atau air) sebelum mula, dan mutu kerja penguncian dilindungi jaminan standard."
  },
  "cracked-roof-tiles": {
    symptom: "Jubin bumbung retak, pecah atau hilang, membenarkan air hujan masuk ke siling atau dinding.",
    causes: ["Bahan bumbung telah mencapai had jangka hayat", "Hentaman objek (dahan pokok, batu)", "Pergerakan struktur bumbung", "Penambahan beban (pasang panel solar, dll)"],
    solutions: ["Ganti jubin retak dengan yang baru", "Periksa dan baiki underlayment jika rosak", "Tukar flashing di sekitar cerobong atau vent", "Bersihkan dan periksa bumbung secara berkala"],
    whenToCall: ["Kebocoran aktif semasa hujan", "Jubin boleh dilihat retak dari bawah", "Bumbung berusia lebih 15 tahun"],
    localFaq: {
      q: "Berapa kos untuk ganti jubin bumbung?",
      a: "Biasanya RM 250 hingga RM 800 untuk pembaikan kecil. Bumbung penuh memerlukan pemeriksaan terlebih dahulu — kos berbeza mengikut jenis bumbung."
    },
    overview: "Jubin bumbung yang retak atau tersasar ialah bom masa yang hanya berjalan dalam musim hujan. Di Malaysia, jubin bumbung gagal kerana salah satu daripada empat sebab: impak ribut atau dahan pokok jatuh, lalu lintas kaki dari kontraktor sebelum ini, ke rapuhan selepas 20+ tahun UV tropika, atau mortar bumbung yang kering mengecut dan membenarkan tudung meluncur. Risikonya bukan jubin itu sendiri — ia ialah apa yang jubin itu tutup. Apabila jubin terangkat, air hujan berjalan di bawahnya dan di sepanjang batten sehingga menemui celah terdekat ke siling, iaitu mengapa titik titisan pada siling anda biasanya beberapa meter dari retak sebenar. Pemeriksaan pantas semasa cuaca baik ialah insurans termurah yang anda beli sepanjang tahun.",
    diyChecks: [
      "Selepas ribut, periksa garis longkang dan tanah di bawah bumbung untuk jubin hilang sebelum memanjat apa-apa",
      "Lihat ke atas ke garisan bumbung dari tanah dengan teropong — tudung bumbung yang terselip ialah punca kebocoran paling biasa",
      "Catat di mana air masuk ke siling kali terakhir dan jejak balik ke lereng bumbung; kemasukan biasanya lebih tinggi dan lebih jauh dari titisan",
      "Jika anda dapat melihat jubin retak dengan selamat, gambar dengan pembaris dalam bingkai — gambar itu mempercepatkan sebut harga",
    ],
    prevention: [
      "Pangkas dahan yang menjulur supaya dahan ribut tidak dapat menggosok jubin",
      "Simpan pemeriksaan bumbung dalam kalendar setiap 2–3 tahun, dan selepas setiap ribut besar",
      "Jangan berjalan di bumbung sendiri — lalu lintas kaki pada jubin berumur 10+ tahun punca utama tersasar",
      "Laporkan jubin retak kepada JMB awal di kondominium supaya pembaikan dijadualkan semasa kebocoran masih tompok, bukan tompokan",
    ],
    costDetail: "Pemeriksaan bumbung penuh (drone plus tinjauan tanah plus laporan bertulis) mencecah RM250–RM450. Pembaikan setempat — menggantikan beberapa jubin retak atau tersasar dengan stok padan warna dan menampal retak halus — bermula sekitar RM380–RM900. Pengisian semula tudung bumbung yang longgar dengan mortar polimer segar dan menggantikan seksyen bumbung pendek berada dalam julat RM900–RM1,800. Bumbung semula penuh hanya disyorkan apabila 30%+ jubin atau alas terjejas. Bekalan dan padanan jubin disahkan sebelum kerja bermula, dan pembaikan membawa jaminan standard."
  },
  "cabinet-door-sagging": {
    symptom: "Pintu kabinet tergantung rendah, tidak selari atau engsel longgar menyebabkan pintu tidak ditutup rapat.",
    causes: ["Skrup engsel longgar dari penggunaan biasa", "Pintu kabinet terlalu berat untuk engsel asal", "Kelembapan menyebabkan pintu mengembang", "Pemasangan asal tidak betul"],
    solutions: ["Ketatkan atau ganti skrup engsel", "Laraskan engsel untuk penjajaran semula", "Tambah engsel ketiga untuk pintu berat", "Ganti engsel dengan gred lebih berat jika perlu"],
    whenToCall: ["Pintu tidak boleh ditutup rapat walaupun dilaras", "Engsel berbunyi atau terasa longgar", "Pintu kelihatan condong"],
    localFaq: {
      q: "Bolehkah pintu kabinet dibaiki tanpa ganti keseluruhan?",
      a: "Ya, dalam kebanyakan kes. Mengencangkan engsel, menambah engpel sokongan atau melaraskan biasanya mencukupi tanpa perlu ganti keseluruhan pintu."
    },
    overview: "Pintu kabinet dapur yang kendur hampir selalu masalah engsel, bukan masalah kabinet. Engsel membawa berat penuh pintu setiap kali ia dibuka, dan selepas lima atau enam tahun di dapur Malaysia — dengan wap, gris dan kelembapan di udara — skru engsel longgar di badan kabinet, cawan engsel haus, dan pintu jatuh beberapa milimeter. Beberapa milimeter itu cukup untuk membuatkan pintu menggesek jirannya, lupai tepi jiran, atau membentak berbanding menutup. Berita baiknya: ia salah satu pembaikan paling murah dan pantas di rumah, dan peningkatan engsel ketika itu membeli tahun-tahun keselesaan penutupan lembut.",
    diyChecks: [
      "Buka pintu yang kendur sepenuhnya dan lihat dalam kabinet — adakah cawan engsel kelihatan longgar atau kepala skru terkelupas pada kayu?",
      "Periksa jenis engsel: engsel murah bukan-l boleh laras tidak boleh diselaraskan, hanya digantikan",
      "Rasa pintu semasa ditutup — jurang konsisten di satu belah bermakna pintu telah jatuh, bukan kabinet bergerak",
      "Kira berapa banyak pintu dalam satu barisan menunjukkan kendur yang sama — jika kebanyakannya, laluan engsel penuh ialah pembetulan yang bijak",
    ],
    prevention: [
      "Ketatkan skru engsel (bukan skru sisi pintu yang menarik pintu) sekali atau dua kali setahun",
      "Ganti skru engsel dengan versi lebih panjang atau berkekang benang di mana kayu badan mula terkelupas",
      "Kekalkan dapur berventilasi — wap dan gris mempercepat karat engsel dan skru",
      "Naik taraf ke engsel penutupan lembut ketika menggantikan satu, supaya keseluruhan barisan menua secara seragam",
    ],
    costDetail: "Penyelarasan satu pintu dan pengketatan engsel bermula sekitar RM150. Penggantian engsel haus dengan setara penutupan lembut mencecah RM30–RM60 setiap pintu dipasang, dan penukaran engsel dapur 8–10 pintu penuh mendarat pada RM350–RM620. Di mana badan kabinet itu sendiri terkelupas atau lembut, kami isi dan gerudi semula titik pemasangan atau pasang skru lebih panjang, dinilai selepas pemeriksaan. Semua kerja termasuk ujian penyelarasan pintu di seluruh barisan sebelum serahan, dan dilindungi jaminan standard."
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
    },
    overview: "Kunci pintar hanya sekuat pemasangannya. Kunci itu sendiri — Samsung, Yale, Kaadas atau seumpamanya — baik dari rak; yang menentukan sama ada ia melindungi pintu ialah kerja persediaan: potongan mortise yang betul untuk badan kunci, penyelarasan thumb-turn yang tepat, pek bateri yang boleh dicapai, dan kod akses yang benar-benar diuji dalam setiap mod (cap jari, kad, kod, aplikasi, dan kunci kecemasan). Pada pintu logam atau tahan api, kerjanya lebih sukar kerana mortise mesti dipotong pada keluli, dan padanan buruk pada pintu short-let atau sewa bermakna tetamu terkunci di luar dan pertikaian JMB atau penyewa. Kebanyakan panggilan \"kunci pintar tidak berfungsi\" yang kami terima telus kembali kepada jalan pintas pemasangan, bukan perkakasan.",
    diyChecks: [
      "Ukur ketebalan pintu (35–55 mm tipikal) dan tepi bevel sebelum membeli atau menjadualkan — spesifikasi mesti sepadan dengan pintu",
      "Periksa mortise sedia ada: jika saiz badan kunci mekanikal lama berbeza dari kunci pintar, pintu memerlukan potongan baharu",
      "Untuk pintu logam atau tahan api, sahkan kunci dinilai untuk bahan itu — badan pintu kayu standard tidak akan memotong atau memegang dengan betul",
      "Jika pintu adalah short-let atau Airbnb, putuskan kod akses dan ciri check-in sendiri yang anda perlukan sebelum hari pemasangan",
    ],
    prevention: [
      "Simpan kunci kecemasan dengan orang dipercayai di luar hartanah, bukan dalam kotak kunci di pintu",
      "Ganti bateri sebelum amaran bateri rendah, bukan selepas — kebanyakan jenama memberi amaran beberapa minggu sebelum",
      "Uji semua kaedah akses setiap bulan selama 3 bulan pertama selepas pemasangan",
      "Kemas kini firmware dan semak semula pasangan aplikasi selepas sebarang pemotongan kuasa atau pertukaran bateri",
    ],
    costDetail: "Pemasangan pada pintu kayu atau komposit standard mencecah RM250–RM450 setiap pintu, merangkumi potongan mortise jika diperlukan, pemasangan badan, wayar pek bateri, pasangan aplikasi, dan ujian penuh kod akses. Pintu logam atau tahan api mengambil masa lebih lama dan berada pada RM450–RM550+. Kami menyiapkan pasangan dengan telefon anda, mendaftar cap jari dan kod pengguna, serta menyerahkan kunci kecemasan dan manual. Masa tipikal: 45–90 minit standard, 90–150 minit pintu logam."
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
    },
    overview: "Remote autogate yang tiba-tiba tidak berfungsi hampir tidak pernah menjadi misteri: ia salah satu daripada empat perkara — bateri CR2032 lemah, antena penerima berkarat di bawah papan kawalan, kod remote terpadam selepas motor diset semula, atau papan kawalan yang rosak. Polanya memberitahu yang mana. Satu remote mati biasanya bateri; beberapa remote mati serentak menunjuk ke penerima atau papan; dan gerbang yang terbuka sendiri ialah masalah keselamatan yang perlu diurus sebagai kecemasan, kerana ia biasanya bermakna penerima tersalah fungsi dan gerbang boleh terbuka untuk orang lain dengan mudah seperti untuk anda.",
    diyChecks: [
      "Ganti bateri remote dengan CR2032 baharu dan uji pada jarak 2–3 meter — kebanyakan remote \"mati\" hanya bateri",
      "Uji dari jarak dan sudut berbeza; remote yang hanya berfungsi pada jarak tangan menunjuk penghantar lemah atau antena berkarat",
      "Periksa sama ada semua remote gagal serentak — jika ya, masalahnya pada penerima, bukan remote",
      "Pantau gerbang selama 10 minit: jika ia terbuka sendiri, berhenti menggunakannya dan periksa penerima",
    ],
    prevention: [
      "Ganti bateri remote setiap tahun, terutama selepas musim hujan yang lembap",
      "Kekalkan kotak motor kering dan berventilasi — karat pada antena ialah pembunuh senyap nombor satu",
      "Daftarkan setiap kod remote yang berfungsi dan simpan spare yang telah diprogram",
      "Guna remote kod bergolek untuk gerbang baharu atau ganti bagi halang penyalinan kod",
    ],
    costDetail: "Pemeriksaan bateri dan pasangan asas termasuk dalam yuran kunjungan; remote standard dengan pemrograman RM120–RM250 dan remote kod bergolek RM250–RM380. Pembersihan atau penggantian antena penerima berada di sederhana julat, dan penggantian papan kawalan penuh menuju ke RM550+. Kawalan gerbang Wi-Fi melalui telefon pintar, jika diingini, dipasang pada RM350–RM650. Semua pembaikan diuji hujung-ke-hujung — buka, tutup dan auto-reverse — sebelum kami meninggalkan rumah."
  },
  "loose-metal-gate-hinges": {
    symptom: "Pagar logam anda tergantung rendah, menyeret lantai, atau engsel nampak longgar atau berkarat.",
    causes: ["Kimpalan engsel asal gagal", "Karat menghakis pin engsel", "Berat pagar melebihi spesifikasi asal", "Pergerakan tiang konkrit"],
    solutions: ["Kisar kimpalan lama dan bersihkan permukaan", "Kimpal engsel ganti heavy-duty", "Primer dan cat kawasan berkimpal", "Tambah sokongan tengah-span jika pagar sangat lebar"],
    whenToCall: ["Pagar menyeret lantai", "Serpihan karat kelihatan di engsel", "Pagar hampir terlepas dari tiang"],
    localFaq: {
      q: "Bolehkah anda mengimpal di tapak?",
      a: "Ya. Kami membawa kimpal arc/MIG mudah alih dan boleh menyelesaikan kebanyakan pembaikan engsel pagar dalam 2–4 jam di tapak."
    },
    overview: "Gerbang logam yang kendur atau menarik di tanah sedang memberitahu engselnya gagal — dan engsel gerbang ialah weld paling banyak dicabul di hartanah. Ia membawa berat mati penuh gerbang, berayun beratus kali setahun, duduk di bawah matahari dan hujan terus, dan dalam pemasangan lama, weld asal sering hanya sebatang filler murah yang cepat. Selama bertahun-tahun weld letih, pin berkarat, dan gerbang perlahan-lahan turun sehingga menggores tanah. Menarik ini bukan sekadar estetik: ia membengkokkan daun gerbang, haus penutup atau kunci, dan pada gerbang daun berkembar seluruh pintu boleh condong ke satu tiang.",
    diyChecks: [
      "Angkat daun gerbang dengan tangan dan pegi — jika ia jatuh sebaik anda melonggarkan, pin engsel atau weld telah putus",
      "Ketuk sekeliling pangkalan engsel dengan pemegang pembuka skru; bunyi kosong atau gemerincing bermakna weld telah retak terpisah dari bingkai",
      "Periksa tiang konkrit: retak atau condong pada tiang bermakna muatan gerbang sedang menggerakkan tiang itu sendiri, bukan sahaja engsel",
      "Lihat serpihan karat pada pin dan buku engsel — karat permukaan normal, tetapi serpihan bermakna logam telah hilang ketebalan",
    ],
    prevention: [
      "Licinkan pin dan buku engsel setiap 6–12 bulan dengan gemur litium atau gred marin",
      "Ketatkan atau torq semula bolt engsel setiap tahun pada plat engsel bukan-weld (bolted)",
      "Kekalkan gerbang seimbang: gerbang daun berkembar harus mendatar, bukan condong ke satu pihak",
      "Ecat sebarang kawasan weld tergosok atau terdedah dalam seminggu untuk halang karat bermula semula",
    ],
    costDetail: "Penyambungan semula weld satu belah engsel dengan penggerudian, penggantian engsel berat berkelas, dan primer serta dua lapisan enamel bermula sekitar RM250–RM450 setiap belah. Kedua-dua belah, ditambah sokongan tengah untuk gerbang lebar atau tidak biasanya berat, mencecah RM800–RM1,200+. Jika tiang konkrit itu sendiri telah bergerak, itu kerja pengukuhan berasingan yang dinilai selepas pemeriksaan. Kami menyiapkan kebanyakan pembaikan engsel di tapak dalam 2–4 jam dengan welder portable, dan kerja weld membawa jaminan anti-karat 12–24 bulan."
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
    },
    overview: "Penghawa dingin yang berjalan sepanjang hari tetapi tidak pernah menyejukkan bilik mempunyai salah satu daripada empat punca, dan urutan pemeriksaan tetap kerana yang murah ialah yang biasa. Pertama: penapis dan koil. Dalam iklim panas berdebu, unit yang diabaikan membeben dengan bulu dan acuan dalam beberapa minggu, aliran udara lapar, dan unit bekerja lebih kuat untuk penyejukan kurang. Kedua: refrigerant. Kebocoran perlahan menurunkan cas gas sehingga sistem tidak dapat lagi menarik haba keluar dari bilik — dan top-up tanpa mencari kebocoran hanya membeli minggu. Ketiga: sensor suhu, yang boleh membaca bilik sebagai lebih sejuk daripada sebenarnya dan mematikan kompresor. Keempat: kompresor itu sendiri, hujung yang mahal, yang gagal selepas bertahun-tahun kerja keras atau peristiwa voltan. Diagnosis mengambil 30–60 minit di tapak, dan corak kerosakan — udara hangat berbanding tiada udara berbanding ais pada paip — memberitahu juruteknik banyak.",
    diyChecks: [
      "Bersihkan penapis dan jalankan unit selama sehari — jika ia menyejukkan jauh lebih baik, aliran udara ialah punca",
      "Rasa dua paip kopar di unit luaran: kedua-dua sepatutnya hangat-sejukkan dalam mod penyejukan; satu sejuk dan satu hangat dengan ais menunjuk ke gas rendah",
      "Periksa tetapan berbanding bilik: unit yang melawan bilik 35 °C pada 16 °C tidak akan menang — itu bukan kerosakan",
      "Catat sebarang frost pada paip atau nota berdesis — kedua-duanya menunjuk ke sisi refrigerant dan harus diperiksa sebelum musim depan",
    ],
    prevention: [
      "Bersihkan penapis setiap 2–4 minggu dalam penggunaan berat — ia penyejukan termurah yang anda akan beli",
      "Servis unit setiap 3–6 bulan supaya koil kekal bersih dan cas gas kekal diperiksa",
      "Jika gas top-up membetulkannya, simpan resit dan bacaan PSI — jika ia hangat semula dalam musim, kebocoran tidak ditemui",
      "Letak unit pada litar khusus; lonjakan voltan pembunuh kompresor utama",
    ],
    costDetail: "Servis asas bermula dari RM129 dan membaiki kes udara hangat di mana koil dan penapis ialah punca. Pemeriksaan kebocoran plus gas top-up bermula dari RM2.50 setiap PSI, dengan kebocoran itu sendiri dibaiki dahulu. Sensor suhu yang rosak ialah bahagian kecil di tengah julat, dan pembaikan atau penggantian kompresor bermula dari RM1,040 — dinilai hanya selepas peringkat murah selesai. Kami mendiagnosis di tapak dalam 30–60 minit dan terangkan setiap penemuan, dan kerja membawa jaminan standard."
  },
  "aircon-water-leaking": {
    symptom: "Air menitis dari unit dalaman atau mengalir ke dinding, biasanya daripada saliran tersumbat atau unit senget.",
    causes: ["Paip saliran tersumbat atau kotor", "Penapis udara tersumbat menyebabkan ais terbentuk lalu mencair", "Pam saliran gagal (unit kaset)", "Unit senget atau pemasangan kurang baik"],
    solutions: ["Bersihkan dan bilas paip saliran", "Bersihkan penapis dan gegelung untuk menghentikan ais", "Ganti pam saliran yang gagal", "Aras semula unit dalaman dan periksa pemasangan"],
    whenToCall: ["Air menitis ke perabot atau lantai", "Dinding menunjukkan kesan air di bawah unit", "Air bocor walaupun selepas diservis"],
    localFaq: {
      q: "Berbahayakah kebocoran air aircond?",
      a: "Ia boleh merosakkan dinding dan lantai serta menggalakkan kulat — sebaiknya dibaiki segera."
    },
    overview: "Air menitik dari unit dalam bilik ialah penghawa dingin yang memberitahu anda salirannya gagal — dan dalam unit Malaysia, punca bertimbun dalam urutan tetap. Pertama dan paling biasa: paip saliran tersumbat. Filem acuan dan debu menyumbat garisan saliran kecil, dulang terisi, dan air mencari laluan rintangan terkecil, iaitu biasanya melepasi tepi unit dan ke dinding atau karpet. Kedua: penapis atau koil kotor yang melaparkan koil daripada udara, membuatkan ia beku, dan ais kemudian cair dan overflow. Ketiga dan jarang: pam saliran yang gagal pada unit kaset, atau unit yang dipasang dengan paras yang salah, jadi dulang condong ke arah dinding. Setiap punca mempunyai pembetulan berbeza, itulah mengapa diagnosis — memeriksa saliran, penapis, koil, dan paras unit — datang dahulu.",
    diyChecks: [
      "Jejak titisan: arus dari sisi keluaran saliran unit menunjuk ke saliran; titisan dari tepi bawah menunjuk ke dulang yang overflow",
      "Keluarkan penapis: jika ia tersumbat, bersihkan — koil yang lapar beku dan air cairannya overflow",
      "Periksa paip saliran di hujung luaran: angkat dan tiup melalui — tiada aliran udara bermakna garisan tersumbat",
      "Lihat paras unit: unit yang condong ke arah dinding akan selalu bocor ke arah itu",
    ],
    prevention: [
      "Bersihkan penapis setiap 2–4 minggu dalam penggunaan berat — ia melindungi kedua-dua aliran udara dan saliran",
      "Servis unit setiap 3–6 bulan dan periksa garisan saliran setiap kali",
      "Selepas basuhan kimia, jalankan unit selama sepuluh minit dan sahkan saliran mengalir",
      "Jika unit dipasang semula atau dipindahkan, biarkan paras disemak semula — beberapa milimeter salah arah ialah kebocoran kekal",
    ],
    costDetail: "Servis dengan pembersihan saliran bermula dari RM129 dan menyelesaikan kebanyakan kes titisan. Basuhan kimia yang juga membersihkan koil dan dulang bermula dari RM156. Pam saliran yang gagal (unit kaset) atau kerja penyelarasan paras semula dinilai selepas peringkat pembersihan, dan berada menuju ke RM455. Kami sahkan air benar-benar mengalir ke luar sebelum kami meninggalkan, dan kerja membawa jaminan standard."
  },
  "aircon-making-noise": {
    symptom: "Unit dalaman atau luaran mengeluarkan bunyi bergetar, berdengung, berdesing atau mengisar semasa beroperasi.",
    causes: ["Panel, skru atau braket longgar", "Serpihan atau ais pada kipas blower", "Galas motor kipas haus", "Pemampat atau kontaktor gagal"],
    solutions: ["Ketatkan panel dan pelekap yang longgar", "Bersihkan serpihan dari kipas dan gegelung", "Ganti motor kipas yang haus", "Ganti kontaktor atau pemampat yang gagal"],
    whenToCall: ["Bunyi semakin kuat dari masa ke semasa", "Ada bunyi mengisar atau bunyi logam", "Unit luaran bergetar berlebihan"],
    localFaq: {
      q: "Bolehkah bunyi bising merosakkan unit?",
      a: "Ya — motor yang mengisar atau pemampat yang gagal akan menjadi lebih teruk dan lebih mahal untuk dibaiki jika dibiarkan."
    },
    overview: "Bunyi dari penghawa dingin ialah unit yang menerangkan kerosakannya sendiri — dan di kebanyakan rumah Malaysia, beberapa bulan pertama bunyi baharu ialah diagnosis percuma. Gemeretak hampir selalu longgar: panel, skru, bracket, atau serpihan yang terperangkap dalam blower. Menderu atau berhum menunjuk ke sisi elektrik — kontaktor yang tersangkut, kapasitor yang terikat, atau lilitan motor yang mula rosak. Bergerai ialah satu yang perlu diurus serius: ia bearing motor fan yang haus, atau logam-ke-logam dalam kompresor, dan kedua-duanya semakin buruk dan mahal semakin lama ia berjalan. Corak (bila bermula, unit mana, sama ada berubah dengan kelajuan kipas) mempersempit carian ke bahagian dalam kebanyakan kes.",
    diyChecks: [
      "Tingkatkan dan turunkan kelajuan kipas: bunyi yang berubah dengan kelajuan kipas ialah mekanikal (blower, fan, koil); bunyi yang malar ialah elektrik",
      "Dengan unit mati, periksa panel dalam bilik untuk longgar kelihatan dan ketuk perlahan — gemeretak yang direproduksi ialah panel atau skru longgar",
      "Lihat unit luaran: sebarang goyang kelihatan, bilah fan yang retak, atau serpihan terbalut di sekeliling fan",
      "Catat bila bunyi bermula — selepas ribut (bahagian longgar), selepas servis (sesuatu dibiarkan longgar), atau beransur-ansur (bahagian haus)",
    ],
    prevention: [
      "Servis unit setiap 3–6 bulan dalam penggunaan berat — blower dan koil bersih tidak gemeretak",
      "Kekalkan kawasan fan unit luaran bebas daripada daun, plastik, dan sulur",
      "Jangan susun kotak atau sandarkan barangan pada unit luaran; getaran melonggarkan bracket",
      "Selepas sebarang servis, jalankan unit selama sepuluh minit dan dengar — menangkap bunyi baharu awal ialah percuma",
    ],
    costDetail: "Pengketatan panel dan bracket longgar, pembersihan serpihan dari blower, dan servis asas bermula dari RM195 untuk kebanyakan kes gemeretak. Penggantian motor fan haus bermula dari RM390, dan kontaktor atau kompresor yang gagal dinilai selepas ujian — hujung kompresor julat berada di atas RM1,000. Kami kenal pasti punca bunyi dengan telinga dan dengan menjalankan unit pada setiap kelajuan kipas, terangkan bahagian dan harga sebelum kerja, dan pembaikan membawa jaminan standard."
  },
  "aircon-bad-smell": {
    symptom: "Aircond menghembus bau apak, berkulat atau masam ke dalam bilik, terutamanya apabila mula dihidupkan.",
    causes: ["Kulat dan bakteria pada gegelung evaporator", "Air bertakung dalam dulang saliran", "Roda blower kotor", "Habuk dan serpihan terperangkap dalam penapis"],
    solutions: ["Bersihkan dan sanitasi gegelung dan blower", "Bilas dulang dan paip saliran", "Sapukan rawatan anti-mikrob", "Cucian kimia atau overhaul untuk pembersihan mendalam"],
    whenToCall: ["Bau berterusan selepas membersihkan penapis", "Kulat kelihatan pada bolong", "Bau mencetuskan alahan atau gangguan pernafasan"],
    localFaq: {
      q: "Bagaimana untuk elak bau aircond berulang?",
      a: "Servis setiap 3–6 bulan, pastikan penapis bersih, dan jalankan mod kipas beberapa minit sebelum menutup unit."
    },
    overview: "Bau busuk atau beracuan dari penghawa dingin ialah unit yang meniup kandungan dalaman sendiri ke dalam bilik anda — dan dalam iklim tropika, dalaman itu ialah ladang acuan yang sempurna. Udara hangat lembap bertemu koil penyejat yang lembap, dulang saliran mengekang air tergenang, dan roda blower mengumpul filem debu: dalam beberapa minggu tanpa perhatian, koloni telah tertubuh, dan setiap kali unit bermula ia memompa bau (dan spora) merentasi bilik. Ia tidak bahaya dalam erti kata segera, tetapi bagi sesiapa yang alahan atau asma, ia masalah kualiti udara yang sebenar, dan bau itu ialah isyarat bahawa unit telah melepasi selang servisnya. Pembersihan penapis asas membantu sedikit; pembetulan sebenar ialah basuhan kimia koil dan blower, saliran dibersihkan, dan rawatan anti-mikrob.",
    diyChecks: [
      "Bersihkan atau ganti penapis dan jalankan unit selama sehari — jika bau jauh lebih lemah, penapis ialah penyumbang utama",
      "Cium di mana louvre: bau yang paling kuat pada permulaan pertama dan pudar menunjuk ke koil dan blower, bukan penapis",
      "Lihat ke dalam unit melepasi penapis untuk acuan kelihatan pada koil atau filem gelap pada roda blower",
      "Periksa saliran: air naik semula atau titisan berbau dari keluaran saliran bermakna dulang tergenang",
    ],
    prevention: [
      "Servis unit setiap 3–6 bulan dalam penggunaan berterusan — bau ialah alarm selang servis, bukan keadaan normal",
      "Jalankan mod kipas sahaja selama 5–10 minit sebelum mematikan, supaya koil kering dan acuan tidak dapat berbiak",
      "Kekalkan penapis bersih; penapis tersumbat mengekang kelembapan terhadap koil",
      "Biarkan panel hadapan terbuka selama sejam selepas penggunaan berat untuk mengudarkan dalaman",
    ],
    costDetail: "Servis asas bermula dari RM129 dan membuang bau di mana penapis dan pengumpulan koil ringan ialah punca. Basuhan kimia bermula dari RM156, dan overhall kimia penuh — koil, blower, saliran dibersihkan, dan rawatan anti-mikrob — menuju ke RM455, iaitu julat di mana bau datang dari koloni yang telah tertubuh. Kami kenal pasti punca (koil, blower, atau saliran) semasa servis, dan rawatan membawa jaminan standard. Bau patut hilang pada akhir lawatan; jika ia kembali dalam selang servis, beritahu kami — punca tidak dirawat sepenuhnya."
  },
  "aircon-weak-airflow": {
    symptom: "Aircond menyejuk tetapi aliran udara lemah, jadi bilik kekal panas walaupun kelajuan kipas maksimum.",
    causes: ["Penapis udara tersumbat", "Gegelung evaporator kotor atau berais", "Motor blower dalaman gagal", "Dukt tersumbat atau bersaiz kecil"],
    solutions: ["Bersihkan atau ganti penapis udara", "Basuh gegelung evaporator untuk memulihkan aliran", "Ganti motor blower yang lemah", "Periksa dan bersihkan dukt atau bolong"],
    whenToCall: ["Aliran menurun walaupun pada kelajuan kipas maksimum", "Unit bising sambil berhembus lemah", "Sesetengah bilik tidak mencapai suhu"],
    localFaq: {
      q: "Berapa kerap penapis perlu dibersihkan?",
      a: "Setiap 2–4 minggu untuk penggunaan berat, kerana penapis tersumbat menyekat aliran udara."
    },
    overview: "Penghawa dingin yang menyejukkan tetapi hampir tidak menghembus mempunyai masalah aliran udara, dan dalam kebanyakan besar unit Malaysia, punca ialah salah satu daripada tiga perkara dalam urutan kebarangkalian tetap: penapis udara tersumbat, koil penyejat yang kotor atau separah beku, atau motor blower yang mula rosak. Penapis ialah suspek pertama kerana dalam iklim panas, berdebu, dan lembap, penapis yang diabaikan membebi dengan bulu dan acuan dalam beberapa minggu dan melaparkan koil daripada udara. Koil kotor yang kedua: sirip tersumbat, udara tidak boleh lulus, dan unit bekerja lebih kuat untuk kurang. Motor blower yang terakhir — bearing haus, impeler perlahan, dan aliran udara turun dalam cara yang pembersihan tidak boleh betulkan. Berita baiknya: dua daripada tiga ialah kerja servis rutin, bukan pembaikan.",
    diyChecks: [
      "Buka panel hadapan dan keluarkan penapis — jika ia gelap dengan debu dan acuan, bersihkan atau gantinya dan jalankan unit selama sehari sebelum menghubungi sesiapa",
      "Periksa aliran udara di louvre: lemah pada semua kelajuan kipas menunjuk ke koil atau motor; lemah hanya pada kelajuan rendah menunjuk ke fan",
      "Lihat evaporator (panel bersirip di bawah penapis) untuk debu kelihatan atau mana-mana frost",
      "Catat bunyi: nota mengaduh atau bergerai di bawah aliran udara menunjuk ke bearing motor blower",
    ],
    prevention: [
      "Bersihkan penapis setiap 2–4 minggu dalam penggunaan berat — kerja 10 minit yang melindungi koil",
      "Servis unit setiap 3–6 bulan supaya koil dan blower kekal bersih",
      "Kekalkan laluan pulangan bilik bersih — tirai atau perabot yang menyekat louvre mengurangkan aliran udara",
      "Jalankan mod kipas sahaja selama beberapa minit selepas menyejukkan untuk mengeringkan koil dan menghalang acuan",
    ],
    costDetail: "Servis asas — pembersihan penapis, basuhan koil, pemeriksaan blower — bermula dari RM129 dan membaiki kebanyakan kes aliran lemah. Basuhan kimia atau overhall ialah langkah ke atas apabila servis asas tidak memulihkan aliran. Penggantian motor blower yang gagal bermula dari RM455, dan hanya dinilai selepas peringkat pembersihan selesai dan aliran masih lemah. Kami ukur aliran udara sebelum dan selepas supaya anda dapat melihat perbezaan, dan kerja membawa jaminan standard."
  },
  "aircon-not-turning-on": {
    symptom: "Aircond tidak bertindak balas kepada remote atau butang kuasa, atau ia menutup sendiri sejurus selepas dihidupkan.",
    causes: ["Breaker terputus atau fius terbakar", "Remote atau papan penerima rosak", "Kapasitor atau kontaktor gagal", "Papan kawalan PCB rosak"],
    solutions: ["Periksa breaker dan bekalan kuasa", "Uji dan ganti remote atau penerima", "Ganti kapasitor atau kontaktor yang gagal", "Baiki atau ganti papan kawalan PCB"],
    whenToCall: ["Unit mati sepenuhnya", "Ia menutup sendiri berulang kali", "Ada bau hangus atau breaker trip"],
    localFaq: {
      q: "Adakah lonjakan kuasa boleh merosakkan aircond?",
      a: "Ya — lonjakan sering merosakkan papan PCB atau kapasitor, jadi pelindung lonjakan disyorkan."
    },
    overview: "Penghawa dingin yang tidak mahu bermula mengkecilkan kepada salah satu daripada empat perkara, dan urutan pemeriksaan tetap kerana setiap langkah lebih murah daripada yang terakhir. Pertama: kuasa. Pemecut tripping atau fius putus di DB ialah yang paling biasa dan pembetulan yang percuma. Kedua: remote atau penerima. Remote mati, bateri tamat, atau papan penerima yang gagal membuatkan unit yang sihat kelihatan mati. Ketiga: kapasitor atau kontaktor — bahagian yang paling kerap gagal dalam unit Malaysia, biasanya selepas lonjakan kuasa atau musim hujan lembap yang panjang. Keempat: PCB utama, hujung yang mahal, sering dibunuh oleh lonjakan. Corak membantu: unit yang benar-benar mati menunjuk ke kuasa atau penerima; satu yang bermula dan kemudian matikan sendiri menunjuk ke kapasitor, termal kompresor, atau papan.",
    diyChecks: [
      "Periksa DB dahulu: adakah pemecut penghawa dingin naik, dan adakah soket ada kuasa (uji dengan lampu)?",
      "Pasang bateri baharu dan cuba remote pada jarak dekat; juga cuba butang fizikal pada unit dalam bilik",
      "Dengari unit luaran: sebarang hum, klik, atau cubaan bermula apabila anda menekan remote memberitahu anda di mana kerosakan",
      "Cium bau terbakar di dekat unit dan DB — bau terbakar bermakna berhenti dan jangan reset apa-apa",
    ],
    prevention: [
      "Letak penghawa dingin pada litar khusus dengan pemecut bersaiz betul",
      "Guna pelindung lonjakan pada soket khusus di mana wayar membenarkan",
      "Servis unit setiap tahun — unit bersih dan kering mengendalikan penurunan voltan dengan lebih baik",
      "Matikan unit di DB semasa ribut jika anda akan pergi selama beberapa hari",
    ],
    costDetail: "Lawatan diagnosis bermula dari RM114 dan dikecualikan apabila kami membaiki unit dalam lawatan yang sama. Pembetulan sisi kuasa (pemecut, soket, fius) hujung yang murah. Penggantian kapasitor atau kontaktor bermula dari RM195, dan pembaikan atau penggantian PCB utama bermula dari RM455 — PCB hujung yang mahal dan hanya dinilai selepas ujian mengesahkannya. Kami kenal pasti kerosakan dengan menjalankan unit melalui jujukan kuasa-penerima-kapasitor-papan, terangkan setiap penemuan, dan pembaikan membawa jaminan standard."
  },
  "aircon-tripping-mcb": {
    symptom: "Aircond menyebabkan MCB atau RCCB trip setiap kali ia dihidupkan, memutuskan bekalan ke bilik.",
    causes: ["Pemampat gagal menarik arus berlebihan", "Kapasitor atau pendawaian terpintas", "Breaker bersaiz kecil atau litar dikongsi", "Kelembapan masuk ke dalam unit luaran"],
    solutions: ["Uji tarikan arus pemampat", "Ganti kapasitor yang terpintas", "Pasang breaker khas bersaiz betul", "Keringkan dan kedap sambungan elektrik luaran"],
    whenToCall: ["Breaker trip setiap kali aircond dihidupkan", "Perkakas lain pada litar sama terjejas", "Ada bau hangus berhampiran unit"],
    localFaq: {
      q: "Selamatkah terus reset breaker?",
      a: "Tidak — trip berulang bermakna ada kerosakan elektrik sebenar dan berisiko memanaskan pendawaian."
    },
    overview: "Penghawa dingin yang tripping MCB atau RCCB sebaik sahaja ia bermula sedang memberitahu anda satu perkara: tarikan arus pada permulaan lebih tinggi daripada yang litar boleh bawa. Dalam unit sihat, lonjakan itu singkat dan pemecut menyerapnya; dalam unit yang rosak, ia berlaku setiap kitaran. Suspek biasa, mengikut urutan: lilitan kompresor yang pendek dan menarik ampere jauh lebih banyak, kapasitor yang gagal dan membenarkan arus bocor, pemecut bersaiz kecil atau litar yang dikongsi dengan alat lain muatan tinggi, atau — dalam unit luaran lama — kelembapan ke dalam sambungan elektrik. Ini salah satu beberapa kerosakan penghawa dingin yang harus diurus sebagai kecemasan, kerana pemecut yang tripping mengikut permintaan ialah risiko api dalam wayar, bukan sekadar gangguan dengan AC.",
    diyChecks: [
      "Reset pemecut dan pantau corak ampere: jika ia tripping dalam beberapa saat selepas kompresor bermula, berhenti — jangan reset lagi sehingga diperiksa",
      "Periksa apa lagi pada litar yang sama: pemanas air, ketuhar, atau seterika yang berkongsi garisan dengan penghawa dingin boleh trippingnya pada permulaan",
      "Cium plastik terbakar di sekeliling unit luaran — kompresor atau kontaktor panas berbau sebelum ia gagal kelihatan",
      "Periksa sambungan wayar unit luaran untuk air bertakung atau terminal berkarat selepas hujan",
    ],
    prevention: [
      "Berikan penghawa dingin litar khusus dengan pemecut bersaiz betul — perkongsian punca kebanyakan tripping permulaan",
      "Kekalkan sambungan elektrik unit luaran kering dan disegel, terutama di balkoni terdedah",
      "Servis unit setiap tahun; koil kotor membuatkan kompresor bekerja lebih kuat dan menarik arus lebih banyak",
      "Jangan sesekali pautkan pemecut dengan yang berpenilaian lebih tinggi untuk \"membetulkan\" tripping — itu membuang perlindungan, bukan kerosakan",
    ],
    costDetail: "Penggantian kapasitor bermula dari RM195. Pembaikan wayar atau kontaktor berada di tengah julat, dan penggantian kompresor bermula dari RM1,040 — kompresor hujung yang mahal, dan ia hanya dinilai selepas ujian tarikan arus mengesahkannya. Kami menyelaraskan dengan juruelektrik apabila kerosakan pada sisi litar (saiz pemecut, muatan dikongsi), dan pembaikan membawa jaminan standard. Unit yang tripping tidak selamat untuk terus direset; lawatan diagnosis ialah langkah pertama."
  },
  "ice-forming-on-aircon": {
    symptom: "Fros atau ais terbentuk pada gegelung evaporator atau paip tembaga, dan unit berhenti menyejuk dengan betul.",
    causes: ["Gas bahan pendingin rendah", "Penapis kotor atau gegelung tersumbat", "Kipas blower berjalan terlalu perlahan", "Termostat atau sensor rosak"],
    solutions: ["Nyahbekukan unit dan bersihkan gegelung", "Top-up bahan pendingin selepas pemeriksaan kebocoran", "Ganti motor blower yang gagal", "Ganti sensor suhu yang rosak"],
    whenToCall: ["Ais kelihatan pada paip atau gegelung", "Unit mencair dan membeku semula berulang kali", "Air menitis semasa ais mencair"],
    localFaq: {
      q: "Perlukah saya matikan unit yang beku?",
      a: "Ya — tukar ke mod kipas atau matikan untuk nyahbeku, kemudian tempah servis untuk mencari punca."
    },
    overview: "Ais pada koil atau paip kopar ialah penghawa dingin yang memberitahu anda koil berjalan lebih sejuk daripada sepatutnya — dan dalam iklim Malaysia itu tidak pernah normal, kerana unit sepatutnya membuang haba, bukan membekukan kelembapan bilik pada plat tin. Rantaian biasanya salah satu daripada: gas pendingin rendah (kebocoran perlahan telah menurunkan cas gas), koil atau penapis tersumbat yang melaparkan koil daripada udara, fan blower berpusing terlalu perlahan, atau sensor suhu membaca salah. Setiap satu menarik suhu koil ke bawah sehingga kelembapan di udara bilik berkondens dan beku di atasnya. Unit kemudian berhenti menyejukkan, menitik apabila ais cair, dan beku semula apabila anda menghidupkannya semula — gelung yang akan senyap mencederakan kompresor jika ia berjalan selama berbulan-bulan.",
    diyChecks: [
      "Matikan unit atau ke mod kipas sahaja dan biarkan ia cair sepenuhnya — ais cair dalam 30–60 minit dan air yang menitik ialah jumlah yang telah beku",
      "Keluarkan penapis: jika ia tersumbat dengan debu, bersihkan — koil yang lapar ialah punca ais paling biasa",
      "Periksa saliran: jika air mundur ke dalam dulang, saliran tersumbat dan dulang overflow",
      "Catat di mana ais terbentuk: pada seksyen pertama paip berhampiran unit menunjuk ke gas rendah; di seluruh koil menunjuk ke aliran udara",
    ],
    prevention: [
      "Bersihkan penapis setiap 2–4 minggu — koil yang lapar beku, bukan hanya menyejuk kurang",
      "Servis unit setiap 3–6 bulan dan periksa saliran setiap kali",
      "Selepas gas top-up, pantau unit selama seminggu: jika ia beku semula, kebocoran tidak ditemui",
      "Jangan jalankan unit pada tetapan sangat rendah pada hari kelembapan maksimum — koil bekerja paling keras ketika itu",
    ],
    costDetail: "Pembersihan dan pemeriksaan bermula dari RM129 dan menyelesaikan ais di mana punca ialah penapis atau koil kotor. Basuhan kimia bermula dari RM156 untuk pengumpulan yang lebih berat. Di mana cas gas rendah, pemeriksaan kebocoran plus top-up bermula dari RM2.50 setiap PSI, dan kebocoran itu sendiri dibaiki dahulu — top-up tanpa mencari kebocoran hanya membeli masa. Motor blower atau sensor suhu yang gagal dinilai selepas pembersihan dan pemeriksaan gas. Kerja membawa jaminan standard."
  },
  "aircon-remote-display-issue": {
    symptom: "Remote control tidak bertindak balas, atau paparan unit menunjukkan kod ralat, berkelip atau menjadi kosong.",
    causes: ["Bateri remote lemah atau berkarat", "Sensor remote atau papan penerima rosak", "Pendawaian paparan longgar", "Papan PCB utama rosak"],
    solutions: ["Ganti bateri remote", "Uji dan ganti remote atau penerima", "Pasang semula penyambung paparan", "Baiki atau ganti papan kawalan PCB"],
    whenToCall: ["Remote hanya berfungsi pada jarak sangat dekat", "Paparan menunjukkan kod ralat", "Paparan berkelip atau kekal kosong"],
    overview: "Remote penghawa dingin yang mati atau paparan yang kosong, berkelip, atau menunjukkan kod ralat hampir selalu kerosakan kecil dengan harga kecil — tetapi pembedaan itu penting, kerana \"masalah remote\" dan \"masalah papan\" ialah kerja yang sangat berbeza. Bahagian remote: bateri tamat atau berkarat, sensor inframerah haus, atau remote yang memang telah uzur. Bahagian unit: penyambung ribbon paparan longgar di bawah panel hadapan, papan penerima yang gagal, atau PCB utama yang rosak dan menghantar kod ralat semasa ia matikan. Kod ralat ialah unit memberitahu anda apa yang salah — setiap jenama mempunyai bukunya sendiri, dan membaca satu yang salah boleh menghantar juruteknik ke laluan bahagian yang salah. Mula dengan perkara murah, dan biarkan juruteknik membaca kod sebelum sesiapa menggantikan papan.",
    diyChecks: [
      "Pasang dua bateri baharu dan uji pada 1–2 meter dengan pandangan jelas — kebanyakan remote \"mati\" hanya bateri",
      "Cuba butang on/off fizikal pada unit dalam bilik sendiri: jika ia berfungsi, remote atau penerima ialah suspek",
      "Tulis sebarang kod ralat pada paparan dengan tepat (E5, H4, dll.) dengan jenama dan nombor model — itu separuh diagnosis",
      "Periksa panel hadapan untuk longgar kelihatan atau retak halus di sepanjang kawasan paparan sebelum sesiapa membukanya",
    ],
    prevention: [
      "Ganti bateri remote sekali setahun — kelembapan tropika memakaisan kenalan secara senyap",
      "Jauhkan remote dari matahari terus dan haba dapur; sensor IR pudar dalam UV",
      "Apabila kod muncul, matikan unit bukannya kitarannya berulang kali — beberapa kod set semula, yang lain memburuk",
      "Simpan nombor model dan foto label PCB di tempat yang mudah dicari",
    ],
    costDetail: "Lawatan diagnosis bermula dari RM114 dan dikecualikan apabila kami membaiki unit dalam lawatan yang sama. Remote gantikan — universal atau padan jenama dan diprogram ke unit anda — hujung yang murah julat. Kerja papan penerima atau penyambung paparan berada di tengah, dan pembaikan atau penggantian PCB utama bermula dari RM455. Kami baca kod ralat dahulu, terangkan apa yang ia tunjuk, dan kemudian sahaja nilai bahagian — supaya anda tidak membayar papan baharu apabila penyambung yang dipasang semula ialah kerosakan."
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
    },
    overview: "Jubin yang meletup ke atas dalam V terbalik, atau melonjak dengan bunyi retak yang kuat, ialah lantai yang memberitahu anda tekanan di bawahnya telah menang. Dalam haba dan kelembapan Malaysia, jubin mengembang setiap hari, dan di mana tiada jurang pengembangan atau screed di bawah telah terlerai, pengembangan itu tiada tempat pergi melainkan ke atas. Kelembapan terperangkap di bawah screed membuatnya lebih buruk: ia menguap dalam haba, tekanan wap mengangkat jubin, dan jubin pertama yang akhirnya melonjak boleh meretakkan jirannya apabila mendarat. Ia juga kecacatan lantai paling berbahaya di rumah — jubin meletup ialah bahaya tergelincir tajam dan tiba-tiba, dan jubin longgar yang belum melonjak boleh terputus tanpa amaran. Pembaikian bukan tampalan gam: screed yang gagal mesti dihacking keluar, di-taras semula dengan campuran ikatan yang betul, dan jubin diletakkan semula dengan back-buttering penuh.",
    diyChecks: [
      "Uji ketukan grid di sekitar jubin melonjak — zon kosong ialah kawasan pembaikan sebenar, dan ia biasanya lebih besar daripada kerosakan kelihatan",
      "Lihat bahagian bawah jubin melonjak: simen berderak bermakna screed telah gagal; permukaan rata bermakna hanya garisan ikatan",
      "Periksa perimeter: ada jurang penampan antara jubin dan dinding, atau mereka bertetap ketat?",
      "Kekalkan kawasan kosong dan bertanda — jubin kedua berkemungkinan mengikuti, dan tepi meletup ialah bahaya pemotongan",
    ],
    prevention: [
      "Biarkan jurang pengembangan perimeter 5–8 mm di bawah skirting setiap kali jubin, dan joint fleksibel di lantai besar",
      "Guna adhesif dimodifikasi polimer dengan back-buttering penuh, bukan mortar kering, pada sebarang jubin baharu atau letak semula",
      "Kekalkan kawasan basah lebih kering — kelembapan di bawah screed itulah yang mengangkat jubin dalam haba",
      "Ganti sebarang jubin yang berbunyi kosong sebelum ia melonjak, bukan selepas",
    ],
    costDetail: "Tampalan setempat — beberapa jubin melonjak dengan screed yang gagal dihacking keluar dan letak semula — bermula sekitar RM350–RM600. Satu bilik penuh di mana ujian ketukan menunjukkan zon kosong besar mencecah RM1,200–RM2,800+ bergantung kepada kawasan, saiz jubin, dan sama ada jubin padan tersedia. Kami petakan zon kosong sebelum menilai, cari jubin padan di mana reka bentuk telah dihentikan, dan jubin yang diletakkan semula membawa jaminan standard."
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
    },
    overview: "Dinding pembahagi gipsum ialah cara kering, pantas, dan ringan untuk membahagikan ruang — dan ia gagal dalam cara yang boleh diramalkan yang dinding ringan gagal. Kerosakan impak ialah yang biasa: pemindahan perabot, pemegang pintu, troli, alatan terjatuh. Yang perlahan ialah kelembapan: lantai yang dibasuh tanpa skirting, titisan paip di belakang papan, atau dinding bilik mandi yang tidak ditutupi dengan betul — teras gipsum bengkak, lembut, dan berderak dari asas ke atas. Dan ketiga ialah muatan: TV, kabinet, atau rak yang digantung ke dalam papan hollow dengan penyumbat asas, sehingga suatu hari penyumbat itu sendiri menyerah. Pembaikan sebersih kerosakan membenarkan: potong kerosakan ke stud, sokong dengan kayu atau papan baharu, tape, skim berlapis, dan cat kembali ke tidak kelihatan.",
    diyChecks: [
      "Dorong dinding perlahan di zon rosak: goyang atau lentur bermakna rangka di belakang terjejas, bukan hanya papan",
      "Periksa asas dinding untuk sebarang papan lembut atau berderak — kerosakan kelembapan sentiasa bermula di bahagian bawah",
      "Lihat pusat stud (ketuk: ketuk pepejal menanda stud) dan catit di mana kerosakan duduk relatif kepada mereka",
      "Gambar kerosakan dengan pembaris sebelum apa-apa lagi — ia yang saizkan pembaikan dan sebut harga",
    ],
    prevention: [
      "Pasang skirting atau halangan kelembapan di asas setiap dinding pembahagi gipsum di zon basah",
      "Gantung barangan berat ke stud logam atau sokongan kayu, bukan ke dalam papan hollow dengan penyumbat asas",
      "Betulkan sebarang titisan paip atau kegagalan seal bilik mandi pada minggu ia ditemui — air di belakang pembahagi tidak kelihatan sehingga ia struktur",
      "Guna papan berdarah atau panel pelindung di belakang dinding di kawasan lalu lintas dan di sekitar pemegang pintu",
    ],
    costDetail: "Pembaikan tampalan kecil — lubang pemegang pintu atau lesung pemegang, disokong dan di-skim ke tidak kelihatan — bermula sekitar RM180–RM300. Penggantian papan lebih besar dengan pengukuhan stud dan pengecatan semula mencecah RM450–RM1,200 bergantung kepada saiz, ketinggian, dan skop cat. Di mana kerosakan dari kelembapan, punca (paip, seal, atau lantai) dibetulkan dalam kerja yang sama, dan ia dinilai selepas pemeriksaan. Kami padankan cat sedia ada di mana mungkin, dan kerja membawa jaminan standard."
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
    },
    overview: "Bilik mandi berumur 15–25 tahun ialah bangunan yang telah menghabiskan dua dekad melakukan kerja terberatnya di bilik paling basah di rumah, dan ia memaparkannya: air berwarna karat dari paip galvanis berkarat, membran lantai yang telah tua di bawah jubin, grout yang telah menjadi hitam dengan acuan, dan longkang yang berbau kerana trap longkang lama tidak lagi tertutup. Rungutan individu murah untuk dibetulkan satu demi satu — dan itulah persis perangkap. Setiap pembaikan berpotongan pada bilik mandi seumur ini ialah pertaruhan bahawa kegagalan seterusnya di tempat lain, dan yang seterusnya biasanya di bawah lantai, di mana ia kos sepuluh kali lebih mahal. Pembetulan jujur pada usia ini ialah overhall penuh: ujian tekanan garisan tersorok, ganti paip berkarat, hacking ke slab kosong, membran tiga lapisan, ujian banjir 72 jam, dan jubin semula. Ia perbelanjaan bilik mandi yang membayar dirinya dengan menghentikan tiga tuntutan seterusnya.",
    diyChecks: [
      "Jalankan paip ke dalam gelas jernih: warna kuning atau perang bermakna paip galvanis sedang menumpahkan karat — penggantian paip, bukan penapis",
      "Uji ketukan jubin lantai: gelang kosong di sekitar zon basah bermakna membran telah gagal di bawah kawasan itu",
      "Cium longkang lantai dengan paip off: nota longkang berterusan bermakna seal trap telah gagal",
      "Tanya jiran di bawah (atau log JMB) untuk sejarah tompok siling — sejarah itu ialah hujah kos untuk melakukannya dengan betul sekali",
    ],
    prevention: [
      "Selepas overhall, kekalkan membran baharu jujur: seal semula garis grout setiap 3–5 tahun dan kekalkan seal silikon segar",
      "Ganti hos fleksibel dan seal trap setiap 5–7 tahun",
      "Kekalkan lantai saliran — lantai bilik mandi yang terendam menguji membran setiap hari",
      "Di kondominium, laporkan sebarang tompok antara tingkat baharu serta-merta supaya jaminan dan rekod JMB selaras",
    ],
    costDetail: "Kerja bertarget — menggantikan paip bekalan berkarat dan perkakas yang gagal — bermula sekitar RM800–RM2,000. Overhall bilik mandi penuh — hacking, laluan semula paip, membran tiga lapisan, ujian banjir 72 jam, jubin, dan perkakas — mencecah RM4,500–RM8,500+ untuk bilik mandi standard, biasanya 7–12 hari bekerja. Kami ujian tekanan garisan sebelum dan selepas, mendokumentasikan ujian banjir, dan kalis air membawa jaminan bertulis standard."
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
    },
    overview: "Kabinet sinki dapur yang telah bengkak, reput, atau lembut di asas ialah kegagalan perlahan paling biasa di dapur — dan ia hampir selalu air yang telah menang selama bertahun-tahun. Bottle trap menitik, hos fleksibel menitik di sambungan, pangkalian paip pencampur merembes, dan badan chipboard atau MDF menyerapnya setiap hari sehingga asas telah runtuh. Ia juga kerosakan elektrik paling biasa di dapur rumah lama: susunan dengan terlalu sedikit soket, litar dikongsi, dan tiada garisan khusus untuk ketuhar atau tungku induksi, jadi pemecut tripping setiap kali dapur, teko, dan ketuhar berjalan bersama. Berita baiknya: asas sinki boleh diganti sendiri tanpa membaharui dapur, dan peningkatan paip dan elektrik boleh dilakukan dalam lawatan yang sama.",
    diyChecks: [
      "Angkat pintu kabinet dan lihat asas: papan lembut, spon, atau bengkak dengan bau busuk ialah chipboard basah klasik",
      "Letak tisu kering di bawah trap dan pangkalian pencampur selama 24 jam — tisu basah menemui titisan yang anda tidak nampak",
      "Kira soket dan catat alat: dapur yang menjalankan ketuhar, air fryer, dan teko pada satu atau dua litar ialah calon peningkatan",
      "Periksa kaunter di atas asas rosak: jika ia pepejal dan kering, badan boleh diganti tanpa menyentuh batu",
    ],
    prevention: [
      "Ganti badan asas sinki dengan badan aluminium kalis air atau marine-ply dengan dasar berlapik foil",
      "Ganti hos fleksibel dan seal trap setiap 5–7 tahun, dan ketatkan pangkalian pencampur semula setiap tahun",
      "Letak dulang titisan atau sensor kelembapan dalam asas sinki — kegagalan perlahan, dan sensor murah",
      "Beri alat berwatt tinggi litar mereka sendiri supaya dapur dan teko berhenti berkongsi pemecut",
    ],
    costDetail: "Pembaikan kebocoran paip dengan pengukuhan asas bermula sekitar RM450–RM900. Penggantian penuh asas sinki dengan badan aluminium kalis air dan paip semula mencecah RM1,200–RM2,800 bergantung kepada saiz kabinet dan skop paip. Penambahbaikan dapur lebih luas — susunan baharu, kaunter kuarsa atau granite, litar elektrik khusus — dinilai bilik demi bilik selepas lawatan tapak, dan setiap fasa membawa jaminan standard."
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
    },
    overview: "Subfloor yang tidak rata ialah pembunuh senyap lantai baharu. Pinggan SPC klik-lock dan vinyl ialah separa-kaku: mereka memerlukan asas rata, dan di mana konkrit mempunyai bonggol, lekuk kosong, atau corak gelombang lebih 3 mm, joint kunci lentur di bawah setiap langkah. Hasilnya ialah lantai yang memantul, berklik, dan — dalam satu atau dua musim — memecahkan sambungannya dan mengangkat tepinya. Asas tidak rata yang sama juga merosakkan jubin seramik: bunyi kosong, grout retak, dan jubin yang berdering apabila diketuk. Pembetulan ialah menaras asas dengan betul: gerinda tempat tinggi, bersihkan habuk, primer untuk ikatan, dan tuang sebatian self-leveling yang mengalir rata sendiri dan mengeras menjadi permukaan padat dan berkilat. Ia satu-satunya kerja persediaan dalam projek lantai yang benar-benar tidak boleh DIY-kan tanpa alat dan bahan yang betul.",
    diyChecks: [
      "Jalankan pembaris 2 meter merentasi lantai: jurang di bawahnya lebih 3 mm bermakna asas memerlukan penaras sebelum sebarang lantai baharu",
      "Uji ketukan lantai sedia ada: bunyi kosong menanda zon terlerai yang akan memindahkan pergerakan ke lapisan baharu",
      "Periksa air bertakung selepas mop — tempat rendah yang bertakung ialah lekuk yang perlu diisi",
      "Lihat corak haus lantai sedia ada: tepi yang telah tercabut atau sambungan yang telah terbuka menanda di mana asas bergerak",
    ],
    prevention: [
      "Sentiasa aras ke bawah 3 mm atas 2 meter sebelum meletakkan sebarang lantai klik-lock atau vinyl",
      "Guna sebatian self-leveling, bukan screed trowel, untuk permukaan terakhir — trowel tidak dapat mengalahkan tuang",
      "Prime asas dengan bahan ikatan berpenetrasi tinggi sebelum tuang, atau sebatian tidak akan kunci masuk",
      "Kekalkan joint pengembangan dan transisi antara bilik bersih dan rata — di situlah pergerakan menunjukkan",
    ],
    costDetail: "Penaras tampalan kecil — mengisi tempat rendah dan menggerinda tempat tinggi dengan campuran simen — bermula dari RM3.50–RM5.50 setiap kaki persegi. Self-leveling underlayment penuh di seluruh bilik mencecah RM6.50–RM12.00 setiap kaki persegi bergantung kepada ketebalan dan gred sebatian. Kami sahkan keflat dengan pembaris sebelum lantai diturunkan — jaminan lantai baharu hanya sekuat asas yang ia duduk — dan kerja membawa jaminan standard."
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
    },
    overview: "Retak diagonal bertangga yang berjalan di sepanjang joint bata — atau jurang yang membesar di mana sambungan dapur bertemu rumah utama — ialah versi masonry bagi perbincangan enapan, dan ia retak yang tidak harus ditangani sebagai kosmetik. Berbeza dengan retak cat halus, retak enapan masonry ialah dinding itu sendiri bergerak: tapak sambungan telah enapan pada kadar berbeza daripada rumah asal, bar dowel yang sepatutnya mengikat kedua-duanya telah diabaikan, dan setiap kitaran terma dan setiap musim hujan membuka joint itu sedikit lagi. Risikonya bukan penampilan retak tetapi progresinya — retak yang masih bergerak selepas sebulan pemantauan ialah isu struktur aktif, bukan isu jeda. Respons yang betul ialah menghentikan pergerakan (penjahitan atau, dalam kes serius, penilaian underpinning), kemudian menutup, mesh, dan melengkapkan joint supaya ia boleh fleksibel tanpa membuka lagi.",
    diyChecks: [
      "Ukur retak dengan syiling dan pembaris: bawah 3 mm adalah wilayah pantau dan jahit; 5 mm+ atau anjakan mendatar memerlukan jurutera struktur sebelum apa-apa diisi",
      "Gambar retak dengan pembaris dan tarikh, dan gambar semula setiap bulan — perubahan antara gambar ialah diagnosis",
      "Periksa pintu dan tingkap di dinding terjejas: bingkai yang macet atau tersangkut bermakna pergerakan masih aktif",
      "Lihat corak retak yang sama di sisi lain dinding dan di garisan tapak sambungan — retak tembus ialah perbincangan berbeza",
    ],
    prevention: [
      "Sebarang sambungan baharu harus diikat ke struktur asal dengan bar dowel yang betul sebelum kerja bata naik",
      "Jauhkan saliran sambungan dari tapak rumah asal — enapan berbeza suka sisi basah",
      "Pantau retak bertangga di rumah baharu dan diperluas setiap 3–6 bulan untuk lima tahun pertama",
      "Jangan isi retak yang bergerak dengan mortar kaku untuk 'menyembunyikannya' — itu hanya menyembunyikan pergerakan sehingga ia gagal",
    ],
    costDetail: "Penjahitan satu garisan retak — rod keluli tahan karat helical ditetapkan dalam resin polimer, kemudian penutupan joint fleksibel dan skim — bermula sekitar RM600–RM1,200 setiap garisan retak. Di mana pemisahan meluas, kerja pengukuhan dan penstabilan joint mencecah RM2,200–RM4,500+. Penilaian jurutera struktur disyorkan sebelum sebarang penjahitan di mana retak lebih 5 mm atau masih bergerak, dan kerja membawa jaminan standard."
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
    },
    overview: "墙皮剥落是墙体在告诉你粘结失败了——在炎热潮湿的气候里，失败原因就那么几条。墙体背后滞留的水分把漆从背面顶掉；底涂弱或漏涂，面漆一开始就没真正粘住抹灰；粉化的旧漆没打磨，新漆没有抓附点；发丝裂缝让季风雨钻到漆膜后面。模式能分辨：浴室或天花板附近剥落指向水分，均匀成片粉化指向漆料体系，DIY 重刷后局部剥落指向基层处理。修法永远是同一套工序——刮到坚实边缘、处理水分、底涂、重刷——而跳过刮除，就是问题按日程回来的原因。",
    diyChecks: [
      "刮一小块剥落处：若整片连着旧涂层一起脱落，失效面在底涂/抹灰结合处",
      "按压墙面：潮冷感或白色粉霜，说明必须先处理水分再谈刷漆",
      "看位置：浴室、天花、外墙周边集中剥落是水分故事；均匀粉化是漆料体系故事",
      "DIY 重刷后记录最先坏的位置——首坏点就是没处理或受潮的区域",
    ],
    prevention: [
      "刷漆前一定先底涂，新抹灰或有潮湿史的墙面尤其必要",
      "粉化或过亮的旧漆先打磨到坚实、微粗的表面再上漆",
      "潮湿房间用可擦洗耐湿乳胶漆，外墙用耐候体系",
      "水分源（渗漏、冷凝、渗透）与重刷同一次处理，不要拖到后面",
    ],
    costDetail: "局部剥落修补（刮除、底涂、两遍面漆）约 RM150 起。整房含完整基层处理（刮、磨、底涂、封闭、两遍面漆）通常 RM400/房起，价格随墙体状况、层高及是否含防水处理浮动。报价前我们检测墙面水分——在活跃渗漏上重刷只是把问题顺延到下季。工艺享标准保修。"
  },
  "faded-exterior-paint-malaysia": {
    symptom: "外墙在紫外线和暴雨循环后显得粉化、斑驳或褪色。",
    causes: ["低档外墙漆", "未使用耐候封底剂", "西向墙面紫外线暴露", "热带雨水导致霉菌和污垢堆积"],
    solutions: ["高压清洗外墙", "处理霉菌和粉化", "涂抹抗碱封底剂", "使用优质耐候外墙漆"],
    whenToCall: ["用手擦拭时墙面粉化", "可见细微裂缝", "需要脚手架或高梯"],
    localFaq: {
      q: "马来西亚外墙通常多久需要重新粉刷一次？",
      a: "大多数房屋每 5–7 年需要重新粉刷一次。如果使用低档油漆或潮湿暴露严重，则需要更早。"
    },
    overview: "马来西亚的外墙漆寿命很短——大多数房屋 5–7 年内明显粉化褪色，朝西墙面因整段午后暴晒更快。过程是：紫外线把漆膜粘结剂分解成粉末（粉化），雨水把粉末冲刷成条纹，霉菌与灰尘占满其余。粉化严重后，面漆已无保护性膜层，下面的抹灰或砂浆直接面对天气，每个雨季都在累积损伤。褪色是廉价预警——再不处理，小面积翻新会拖成大修补工程。",
    diyChecks: [
      "用湿布擦拭褪色处——掉下白粉说明面漆粉化已超过补漆可救的程度",
      "检查立面最下 1 米：那里出现霉斑与污垢带，说明表面已失去自洁能力",
      "查看细裂与鼓泡——若漆面开裂，重刷前必须先查基层是否变形",
      "暴雨后记录条纹与棕色水痕出现的位置——那是风化最快的区域",
    ],
    prevention: [
      "每 5–7 年用\"底涂+面漆\"的耐候系统整体重刷，而非单遍廉价漆",
      "刷漆前高压清洗立面，避免霉菌与粉化被封进新涂层",
      "修剪贴靠西墙的树木藤蔓，减少墙体潮湿",
      "当年修复外墙裂缝与渗漏点——水与 UV 叠加会让墙体老化速度翻倍",
    ],
    costDetail: "雪兰莪及吉隆坡地区整栋外墙重刷约 RM1,800–RM8,000+，视房屋面积、层数及是否需要脚手架或高空作业车；含高压清洗、裂缝处理、抗碱底涂与两遍耐候面漆。朝西或重度粉化的立面可能需额外基层处理，现场勘察后报价。我们使用品牌耐候漆体系，并在合适湿度与干燥窗口施工；工艺与漆膜享标准保修。"
  },
  "damp-walls-paint-bubbling": {
    symptom: "油漆起泡、出现棕色污渍或白色盐渍，因为水分正在穿过墙壁或楼板。",
    causes: ["浴室或阳台渗漏", "多孔砖石上升潮湿", "外墙裂缝让雨水进入", "墙内管道漏水"],
    solutions: ["用湿度计追踪水分来源", "密封外墙裂缝或浴室 grout", "在合适位置涂抹防水屏障", "墙壁干燥后修补石膏并重新粉刷"],
    whenToCall: ["重新粉刷后气泡反复出现", "墙面感觉冰冷或潮湿", "出现霉味或黑色斑块"],
    localFaq: {
      q: "油漆能解决墙面潮湿问题吗？",
      a: "不能。油漆本身无法阻止潮湿。必须先修复水分来源，然后才能重新粉刷。"
    },
    overview: "油漆起泡、鼓泡或泛棕不是油漆问题，而是水分问题披了件油漆外衣。水分在墙体或楼板中移动，蒸发时把漆膜从抹灰层顶起，析出溶解矿物质留下棕斑，干燥处留下白碱。吉隆坡住宅的水源通常四选一：楼上浴室或阳台渗漏、地面返潮、外墙裂缝把雨水引进墙体，或暗墙内管道渗漏。工序顺序很关键：先堵水源、让墙体干燥、修复抹灰、再刷漆。跳过任何一步，气泡都会按日程回来。",
    diyChecks: [
      "触摸受影响墙面——冷而潮与干而暖的对比，能区分活跃水分与旧渍",
      "检查正上方与对面房间：泡区上方的浴室、阳台或外墙是头号嫌疑",
      "用手电筒斜射墙面——气泡反光，比肉眼更快看清全部范围",
      "暴雨后记录色斑是否加深、气泡是否增多——可确认天气驱动型水源",
    ],
    prevention: [
      "浴室与阳台防水问题发现当年即修",
      "外墙裂缝保持密封，落水管把雨水引离墙面",
      "有潮湿史的墙面使用透气、耐湿底漆",
      "同一区域两次起泡，重刷前先用湿度仪检测",
    ],
    costDetail: "含湿度检测的诊断约 RM150–RM300 起。单一水源封堵（美缝、裂缝或硅酮胶）加抹灰修复与受影响墙面重刷约 RM600–RM1,500；涉及浴室或阳台防水膜的完整堵漏约 RM1,500–RM2,500+。报价前我们一定用读数确认水源——在活跃渗漏上刷漆只是把问题顺延到下季。工艺享标准保修。"
  },
  "ceiling-mold-stains": {
    symptom: "天花板板材在接触水分后出现深色霉菌、黄褐色环或软性下垂区域。",
    causes: ["楼上浴室漏水", "空调排水管漏水", "屋顶或阳台渗漏", "通风不良和冷凝"],
    solutions: ["首先停止水源", "移除已霉变的软板材", "安装防潮石膏板", "干燥后批灰、底漆并重新粉刷"],
    whenToCall: ["天花板软化或下垂", "雨后或使用浴室后水渍扩大", "霉菌在板材上蔓延"],
    localFaq: {
      q: "已变色的天花板板材可以重新粉刷吗？",
      a: "只有在板材干燥且结构牢固的情况下才可以。软化或发霉的板材应在收尾前更换。"
    },
    overview: "天花板发霉是楼上水分故事的可见末端。棕色环纹与黑色霉斑，是马来西亚湿热空气遇上潮湿石膏板表面时形成的——来自楼上浴室渗漏、空调排水管数月来悄悄滴入天花板，或只在季风期才显现的屋顶与阳台渗水。污渍本身是外观问题，真正的风险是板材软化。一旦石膏板浸泡到按压发软、手指轻抠即酥，再好的防霉漆也救不了——那块板必须更换。",
    diyChecks: [
      "用铅笔尖或指甲轻压污渍区——坚硬干燥可重漆，发软则需换板",
      "追溯可疑水源：污渍正上方是否有浴室、空调机或外墙",
      "在楼上冲淋或用水后观察污渍 20–30 分钟——颜色加深即为活跃渗漏",
      "闻有无霉味，检查黑斑是否超出原环扩散——那是活体霉菌的信号",
    ],
    prevention: [
      "每 3–6 个月保养空调并检查排水管——堵塞的排水管就是未来的天花板污渍",
      "淋浴时及淋浴后 15 分钟持续开启浴室排风扇",
      "大雨后检查阳台与屋顶有无积水",
      "潮湿房间天花板使用防霉乳胶漆",
    ],
    costDetail: "干燥坚实污渍的清洁与防霉重涂约 RM180–RM450/处起。更换软化或霉损板材并改用防潮石膏板，视尺寸、高度及是否同次处理渗漏源（管道、空调排水、屋顶），约 RM600–RM1,200+。我们一定先定位并切断水源——在活跃渗漏上方重刷天花板，污渍一个雨季就会回来。工艺享标准保修。"
  },
  "burst-pipe-emergency": {
    symptom: "水从管道、阀门或墙壁区域喷射、淹没或快速积聚。",
    causes: ["旧管道或接头腐蚀", "水压突然升高", "配件不良或粘合剂失效", "意外钻到隐藏管道"],
    solutions: ["立即关闭主水阀", "保护电器和地板", "找到爆裂部分", "更换损坏管道或阀门并进行压力测试"],
    whenToCall: ["无法快速止水", "漏水在墙内或天花板内", "附近有电源点"],
    localFaq: {
      q: "管道爆裂时我应该首先做什么？",
      a: "立即关闭主水阀，让人远离电器区域，并用照片或视频联系水管工。"
    },
    overview: "爆管是水管领域里的\"火灾\"：水流不断，损失每分钟都在放大；除了管道本身，最大的第二笔开支通常是水对地板、楼下天花板和邻居家造成的损害。吉隆坡与雪兰莪老房子常见元凶是终于扛不住水压的锈蚀镀锌接头、用胶水粘接而非螺纹的管件、市政管网的水锤冲击，或装修季里钻到暗管的电钻。处置顺序是固定的：先停水、再保电、最后才动管子。按这个顺序做，才能把 200 令吉的管道维修保住，而不是变成 2,000 令吉的水损索赔。",
    diyChecks: [
      "其他一切之前，先找到并关闭总水阀（通常在水表旁）——哪怕看不到爆裂点",
      "在主配电箱断开泡水插座或电器的电源——不要在插座端操作",
      "清理前先拍照或录像记录爆裂点与水流路径——保险或 JMB 需要这些证据",
      "管道在墙内时，在最低积水点开小检修口，而非整面砸墙",
    ],
    prevention: [
      "知道总水阀位置并保持可及——每年试开关一次",
      "每 5–7 年更换热水器与洗衣机可见锈蚀接头与软管",
      "钻墙或地面前先确认暗管走向，或使用寻管仪",
      "无人看管的房屋在热水器下方与浴室装漏水报警器",
    ],
    costDetail: "紧急上门与明管维修约 RM180–RM400 起。需局部开墙与重抹灰的暗管爆裂约 RM500–RM800+；水在到场前流得越久，工程包含的越多（烘干、抹灰修复、楼下天花处理）。首次勘察后我们确认范围与固定价格，优先止水控水；管道工艺本身享标准保修。"
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
    },
    overview: "楼上浴室下方的天花板滴水，是马来西亚住宅中压力最大、也最容易误判成本的渗漏之一——修复费用从 250 令吉的存水弯密封件到五令吉位数的全面重做防水不等。规律能告诉你处在哪个区间：只有冲淋后才滴，问题在地面表层（勾缝、防水膜或楼板）；持续慢滴多半是管道或存水弯；随季风加深的色斑则指向楼板本身。猜错的代价双向都高——为管道渗漏砸掉完好的瓷砖是浪费，而对彻底失效的防水膜只做聚氨酯注浆，一场大雨后就会失效。",
    diyChecks: [
      "计时测试：楼上冲淋 5 分钟后观察楼下天花板 30 分钟——颜色立刻加深说明是表层/楼板渗漏",
      "关闭楼上供水后继续观察：不流水仍滴，说明水源可能是管道或存水弯而非地面",
      "敲击浴室地砖检查空鼓，并查看勾缝裂缝——那里就是水进入的位置",
      "记录色斑形态：淋浴区下方扩散的环与墙面下方的线，有助于区分楼板渗漏与管道渗漏",
    ],
    prevention: [
      "每 3–5 年用环氧美缝剂或密封美缝重做浴室地面勾缝",
      "淋浴房与浴缸硅胶保持完好——开裂或长霉的密封胶每年更换",
      "每 12 个月保养地漏并检查滴漏接口",
      "公寓住户尽早向 JMB 报告缓慢扩大的天花色斑，避免渗漏拖成索赔",
    ],
    costDetail: "存水弯或管道密封件更换约 RM250–RM500 起。楼板裂缝聚氨酯注浆按点计价，标准浴室渗漏通常落在 RM1,500–RM3,500；免砸砖表面涂覆系统适合勾缝渗水，约 RM800–RM2,000。全面砸砖重做防水——彻底失效防水膜的最终手段——视浴室面积与瓷砖约 RM4,500–RM9,000。我们先诊断渗漏源再按匹配方案报价；堵漏工程享标准保修，如需天花修复另行报价。"
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
    },
    overview: "上升潮气是土壤中的水分通过多孔砖石墙体（砖、砌块或旧水泥抹灰）不断向上攀爬，直到到达油漆层，并在墙体底部留下盐晶析出。在马来西亚，它多见于老旧独立住宅：贴近地面的墙体、失效的防潮层、把雨水挡在墙边的室外铺装，或藏在抹灰层后面的渗漏管道与浴室墙。白色的粉状盐霜（泛碱）是最明显的信号：每次只刷漆不处理水源，都只是把潮气封在新涂层下，同一个季度的剥落会如期重演。",
    diyChecks: [
      "擦拭墙体下方 300 毫米——触感潮湿偏凉并伴白色粉霜，说明是活跃潮气而非旧漆问题",
      "检查墙外一侧：铺装是否向房屋方向倾斜，或雨后有积水贴着墙脚",
      "观察污渍高度——清晰水平线指向上升潮气；管道或浴室位置的斑块指向渗漏",
      "按压抹灰层：若粉化或发软，说明盐分已侵蚀抹灰本体，需要铲除",
    ],
    prevention: [
      "室外铺装与花盆远离墙体，让雨水排离基础",
      "定期清理落水管与排水口，避免雨水沿墙脚流淌",
      "墙体确认干燥后再重新粉刷，切勿仅靠防水涂料遮盖潮气",
      "每年检查有色污渍墙体上方楼层的浴室与暗管",
    ],
    costDetail: "单面墙的诊断与治疗约 RM300–RM800 起。若需铲除含盐抹灰并以防潮屏障重新抹灰，视墙长与施工条件约 RM1,000–RM3,000+。报价前我们一定会确认水源来自土壤还是管道——管道渗漏若被新抹灰覆盖，只会原样再现。工艺享标准保修。"
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
    },
    overview: "松动的电视挂架——或已经掉落的电视——首先是安全问题，其次才是家具问题。马来西亚住宅的典型故障链是可以预见的：廉价塑料膨胀栓直接打进石膏隔墙而没找龙骨、支架承重低于电视实际重量，或钻头深度不足以匹配墙体类型。挂架撑了几个月，墙体材料在锚栓周围粉化，整副支架加 50–80 公斤的电视一起掉下来。正确做法是别再信任那个锚点，弄清墙体到底是什么（混凝土、砖还是空心石膏），再用符合承重等级的锚固重新安装。",
    diyChecks: [
      "电视断电并托住的情况下，逐一手拉每个锚点——有晃动或膨胀栓拔出即需重装而非拧紧",
      "核对支架承重与电视加支架的总重；65 寸电视配全活动支架，负载轻松超过 30 公斤",
      "判断墙体：敲击并观察类型——乳胶漆下的石膏隔墙是风险最高的表面",
      "购买新支架前核对电视 VESA 孔距与支架孔位是否匹配",
    ],
    prevention: [
      "空心墙装电视用重型蝴蝶螺栓或打入龙骨，绝不用普通塑料膨胀栓",
      "按房间选支架：贴墙选固定式、家具上方选倾斜式、转角观看选全活动",
      "用线槽或暗槽走线，防止线缆拉扯挂架",
      "每年复检一次挂架——交房后 2–5 年的沉降期尤其重要",
    ],
    costDetail: "混凝土、砖墙或加固石膏墙的标准重装（正确锚栓）约 RM120–RM250 起；隔墙龙骨加固的全活动或重型支架约 RM300–RM450+。我们会确认墙体类型、选配正确锚固、做承重测试并调平后交付。允许走暗线的墙体另报价线缆隐蔽。常规施工 45–90 分钟。"
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
    },
    overview: "频繁跳闸的 RCCB（剩余电流断路器）其实正在尽忠职守——家中某处存在对地漏电流，断路器在人员或线路受损前切断了电源。吉隆坡住宅的常见元凶是故障电器（热水器、电磁炉、空调）泄漏几毫安电流、绝缘老化开裂吸潮的旧线路、暴雨后配电箱进水，或某条电路长期超载超出断路器容量。最不能做的是反复推闸复位：每一次复位都意味着故障仍在，按需跳闸的断路器是火灾与触电风险，而不是小麻烦。",
    diyChecks: [
      "逐一拔掉大功率电器并测试断路器——拔掉某台后不再跳闸，就锁定了漏电源",
      "查看配电箱内部：RCCB 周围有水渍、锈蚀或变色即代表进水",
      "记录规律：是某电器一启动就跳闸，还是多台同时运行时才跳",
      "闻有无焦糊味、摸断路器外壳是否发热——若有，立即停止复位并断开该回路",
    ],
    prevention: [
      "每 5–7 年更换热水器与电磁炉的软线及接地连接",
      "保持配电箱干燥：修复上方渗漏并确认箱体防雨密封",
      "空调、热水器、烤箱等高负荷电器各配独立回路",
      "每 5–10 年检查一次配电箱，房龄 20 年以上者尤其必要",
    ],
    costDetail: "上门诊断含逐回路隔离测试，约 RM180–RM350 起，通常 30–60 分钟。更换单只故障 RCCB 约 RM250–RM450（含件）；重接故障线路或更换漏电电器价格上浮，整体配电箱升级与负荷重新分配约 RM600–RM850+。全部由 ST 注册电工施工，维修享标准工艺保修。"
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
    },
    overview: "马来西亚住宅的白墙发黄，通常是三个原因同时作用：UV 稳定性差的廉价乳胶漆根本锁不住白、厨房油烟与烟气在表面成膜、以及西晒墙面下午阳光对漆膜的缓慢化学作用。判断靠模式：整屋发黄指向漆料体系；厨房或窗边发黄指向油烟或阳光；新漆后几周又黄指向底涂渗色。正确修法：清除表面膜、在底漆阶段封住污渍、换用真正为炎热潮湿多油烟气候配方的耐黄变白漆。",
    diyChecks: [
      "用温和洗涤剂擦一块试擦区——擦出白色说明是表面膜；擦不掉说明已渗进涂层",
      "画出发黄模式：整面墙、厨房邻墙、或朝阳墙分别指向不同原因",
      "检查底涂：整面重刷后几周又黄，问题在底涂渗色",
      "摸墙面——粗糙粉化说明面漆已粉化失效，需整体重涂而非补刷",
    ],
    prevention: [
      "白墙用优质 UV 稳定低 VOC 丙烯酸漆——廉价乳胶漆是 12 个月黄变倒计时",
      "做饭时和饭后都开抽油烟机——油烟膜是室内头号黄变源",
      "朝西窗加通风或 UV 贴膜，别让漆膜整个下午暴晒",
      "白墙每 3–5 年重刷，不要等到米黄色定型",
    ],
    costDetail: "单房（清洁、封固、两遍优质白漆）约 RM400–RM900，视墙面积与高度。整屋重刷恢复白色，标准三房约 RM2,000–RM3,500+；需要换底涂或墙面深度清洁时价格上浮。我们按原因（UV、油烟、底涂渗色）匹配漆料体系而不只是颜色，工程享标准保修。"
  },
  "paint-cracking-hairline-walls": {
    symptom: "漆面出现细密的蛛网状裂缝，通常在窗框、门框或天花板与墙壁交接处。",
    causes: ["建筑正常沉降（前 2–5 年最严重）", "腻子层涂太厚或太快", "温度和湿度变化", "底层灰浆收缩"],
    solutions: ["稍微扩大裂缝并用柔性丙烯酸填缝剂填充", "较大裂缝使用玻璃纤维网格带", "用薄层腻子覆盖修补区域", "使用柔性丙烯酸面漆底漆并重涂"],
    whenToCall: ["裂缝宽度超过 1 毫米", "同一裂缝重涂后再次开裂", "大面积出现对角线裂缝"],
    localFaq: {
      q: "墙面有细小裂缝意味着房屋有结构问题吗？",
      a: "几乎不会。美容性细裂缝是正常的建筑沉降和漆膜移动——真正的结构裂缝通常更宽（5 毫米以上）、呈对角线且持续恶化。"
    },
    overview: "墙面的发丝裂缝几乎都是房子在动，而不是房子在坏。建筑前 2–5 年沉降，抹灰、漆膜、石膏线以略不同的速率伸缩——漆是最不柔韧的一层，所以最先也最明显地开裂。再加上马来西亚每天湿气吸入吐出的循环，框口和接缝周围出现几条细蛛网纹是正常现象。真正要重视的裂缝是宽的（5 毫米以上）、斜向且进展的、或沿砖缝阶梯状的——那是结构层面的对话，不是油漆层面的。对占大多数的外观裂缝，修法是柔性填缝剂加网格带填补、批平、重刷——让墙体继续活动而不再开裂。",
    diyChecks: [
      "量裂缝：小于 1 毫米属外观填补范围；1–3 毫米需填缝加网格带；5 毫米以上、斜向且进展的，先做结构评估",
      "看模式：只在框口和接缝处的裂缝是变形；贯穿整面墙的值得再看",
      "摸裂缝——周围抹灰粉化说明有水分参与，填缝前墙体必须干燥",
      "用尺加日期拍照记录；一个月后重拍对比——在长大的裂缝会改变处理方案",
    ],
    prevention: [
      "外观裂缝用柔性丙烯酸填缝剂加网格带，不用刚性腻子——墙还在动，填缝必须跟着动",
      "有开裂史的墙用稍柔韧的丙烯酸面漆重刷",
      "让墙体呼吸：厨卫排湿，避免抹灰每天干湿循环",
      "新房在沉降第 2、4 年各预留一次修补",
    ],
    costDetail: "单条外观裂缝（填补、贴带、批平、重刷）约 RM150–RM300 起。整房处理——所有发丝缝填缝贴带、批平、底漆、重刷——约 RM500–RM1,200，视墙面积与漆料档次。多房及全屋裂缝处理按每间折扣计价。裂缝宽、斜向或进展时，我们建议先做结构工程师评估再填补；工艺享标准保修。"
  },
  "leaking-bathroom": {
    symptom: "楼上浴室下方地板潮湿或渗水，或浴室旁墙面出现棕色水渍和漆面起泡。",
    causes: ["浴室地面防水膜开裂", "淋浴屏风或浴缸周围硅胶老化", "墙内暗管漏水", "瓷砖缝隙破损导致水渗入楼板"],
    solutions: ["进行水压测试隔离管道或楼板漏水", "从下方进行 PU 注浆（无需砸砖）", "重新密封淋浴屏风和浴缸接缝", "砸砖重做防水膜（最坏情况）"],
    whenToCall: ["浴室下方天花板滴水", "浴室旁墙面漆起泡", "湿斑每周扩大"],
    localFaq: {
      q: "修复浴室漏水需要砸砖吗？",
      a: "通常不需要。大多数情况下可以从下方使用高压 PU 注浆密封漏水——无需损坏瓷砖。"
    },
    overview: "浴室渗漏是马来西亚住宅绝对不能拖的漏——因为水不在你的墙里待着，它在走，而且往下走。地面防水膜在勾缝、楼板或管道接头处失效，水就有了直通楼下天花与墙面的通道。规律告诉你水源：每次冲淋后扩大的湿斑是地面表层问题；浴室旁边持续潮湿的墙面指向管道或淋浴房密封胶；不流水仍在滴则是管道或存水弯。现代的好消息是：多数情况不用砸砖就能止漏——楼下聚氨酯注浆，或失效在勾缝时用免砸砖涂覆——活跃渗漏我们在雪隆当天上门，通常 45–90 分钟内到。",
    diyChecks: [
      "计时：冲淋 5 分钟后观察楼下墙面或天花 30 分钟——立刻加深说明是地面/楼板",
      "关闭供水继续观察：不流水仍滴，指向管道或存水弯",
      "敲击浴室地砖——湿区周围一圈空鼓，说明该处防水膜已失效",
      "检查淋浴房与浴缸密封胶：开裂、长霉或缺失都是渗水通道",
    ],
    prevention: [
      "淋浴房与浴缸密封胶开裂或长霉每年更换",
      "每 3–5 年用密封型或环氧美缝重做浴室地面勾缝",
      "管道接头滴漏发现当周就修，不要拖到下个月",
      "公寓住户尽早向 JMB 报告缓慢扩大的天花渍——渗漏在变成索赔前修最便宜",
    ],
    costDetail: "淋浴房或浴缸重新打胶 RM180–RM350。楼下对楼板聚氨酯注浆（不砸砖）约 RM350–RM1,500，视渗漏线长度。防水膜彻底失效时，标准浴室全面砸砖重做约 RM3,500–RM8,500。我们先诊断水源——管道做压力测试、楼板做敲击检测——再按实际失效方式报价。雪隆活跃渗漏当天派工，工艺享标准保修。"
  },
  "low-water-pressure": {
    symptom: "花洒出水弱、水龙头流水细、热水器因进水压力不足难以启动。",
    causes: ["热水器或花洒入口滤网堵塞", "镀锌管内部锈蚀缩小流通直径", "增压泵或压力罐故障", "供水主管问题（罕见但可能）"],
    solutions: ["清洁或更换花洒和入口滤网", "清除热水器水垢", "用 PPR/PEX 管更换锈蚀管道", "安装或更换增压泵"],
    whenToCall: ["只有一个水龙头受影响（可能局部堵塞）", "整间房子受影响（可能泵或主管问题）", "附近施工后压力突然下降"],
    localFaq: {
      q: "需要安装增压泵吗？",
      a: "如果房屋有 2 层以上或顶楼水压低，增压泵通常是正确解决方案。典型安装费用：RM 900 至 RM 2,200。"
    },
    overview: "家里水压低是\"收窄\"问题：从市政管网到你水龙头之间的某处，流通截面变小了。经典原因按出现频率排序：花洒或进水滤网堵塞（最便宜的那种）、镀锌管 20 年以上锈蚀管径、总阀没全开、多层住宅增压泵老化，或极少数情况——水务侧的供水问题。判断靠范围：单只龙头弱指向那只的起泡器或局部管段；全屋弱指向总阀、泵或主管；路工后突然变弱指向供水侧。修法跟着原因走——50 令吉的滤网或 2,000 令吉的泵——所以诊断必须先行。",
    diyChecks: [
      "拆下花洒起泡器和龙头滤网冲洗——锈蚀的滤网最常见，也最便宜",
      "对比不同龙头：只有单只弱，问题就在那只洁具的局部",
      "检查总阀：是否全开？差四分之一圈就少一半流量",
      "有增压泵的听声音：一直响或异响的泵是在坏，不是在增压",
    ],
    prevention: [
      "每 6–12 个月冲洗花洒与龙头滤网——硬水悄悄堵死它们",
      "知道总阀位置并保持全开",
      "两层以上住宅每年保养增压泵",
      "换任何管段时改用 PPR 或 PEX——镀锌管是 20 年的水压倒计时",
    ],
    costDetail: "含总表与洁具逐点流量测试的诊断约 RM150–RM200 起。滤网与阀门处理最便宜。锈蚀管段更换为 PPR/PEX 按长度与施工条件报价；增压泵供货安装约 RM900–RM2,200，视泵档次。我们先找到收窄点，再按能恢复水压的最小方案报价——不会把 50 令吉的滤网卖成泵。工艺享标准保修。"
  },
  "clogged-drain": {
    symptom: "排水缓慢、水槽或淋浴盆积水、使用多个水龙头时水倒灌。",
    causes: ["厨房油脂在 P 形弯管和水平管道中积聚", "浴室排水口毛发堆积", "异物（湿巾、卫生用品）进入马桶管道", "管道破损或下沉导致杂物积聚"],
    solutions: ["手动疏通弯管和管道", "使用酶基排水处理剂（对管道安全）", "高压水射流清洗（针对顽固厨房管道）", "摄像头检查 + 管道修复（结构性故障）"],
    whenToCall: ["多个排水口同时堵塞", "冲水时其他排水口冒水", "室内有下水道气味"],
    localFaq: {
      q: "化学疏通剂对管道安全吗？",
      a: "强碱性化学品可能损坏老旧 PVC 接头，在密闭空间也不安全。我们推荐机械疏通加酶处理——更安全且效果更持久。"
    },
    overview: "马来西亚厨房或浴室的慢排水与堵塞，几乎总是三种东西经数月累积：厨房存水弯与横管里的油脂、浴室水封里的头发，或最让人意外的——异物（湿巾、卫生用品、掉进去的瓶盖）进了马桶排污管。判断靠规律：每次煎炸后厨房水变慢指向油脂；浴室水封几周内变慢指向头发；突然完全堵死且其他地漏咕噜作响指向异物或主管问题。修法取决于原因：先机械疏通，用酶制剂维持清洁，管道重度结垢才上高压水射流。",
    diyChecks: [
      "记录哪些洁具慢：单只洗手盆是局部问题，多只同时慢指向共用管线",
      "往最慢的洁具放水，观察其他地漏——别处冒泡或返水说明是主管",
      "查看洗手盆下 P 型存水弯有无油膜或可触及的半堵塞",
      "闻气味： 污水味（不只是陈水味）说明问题在水封以下、朝主管方向",
    ],
    prevention: [
      "绝不把烹饪油脂倒进水槽——收集起来当垃圾扔掉",
      "每个厨卫地漏都装滤网",
      "每周热水冲管+每月一次酶制剂，保持管道清洁",
      "马桶只冲厕纸——湿巾与卫生用品是主管堵塞的经典元凶",
    ],
    costDetail: "单点机械疏通（弹簧/钢条）约 RM150–RM250 起。厨房管线重度油脂结垢时，全线高压水射流约 RM350–RM700。堵塞反复出现时加内窥镜检查，看清真实阻塞物再准确报价。我们先机械疏通——强碱化学剂会损伤老 PVC 接头并让后续作业不安全——工艺享标准保修。"
  },
  "toilet-not-flushing": {
    symptom: "马桶冲水无力、一次冲不干净、或冲水后持续流水。",
    causes: ["挡板阀或冲水机构磨损", "马桶边缘喷水孔堵塞", "S 形弯管或排污管部分堵塞", "进水阀（浮球组件）故障"],
    solutions: ["更换挡板、进水阀或双冲水阀芯", "用醋或除垢剂清洁喷水孔", "疏通 S 形弯管和排污管", "老旧马桶更换整套水箱配件"],
    whenToCall: ["换了挡板后仍然流水", "所有方向出水都很弱", "需要多次冲水才能冲干净"],
    localFaq: {
      q: "能自己修马桶冲水问题吗？",
      a: "更换挡板很简单，可以自己操作。进水阀或 S 弯管问题通常需要水管工。"
    },
    overview: "冲力弱、要按两三下、或冲完不停水的马桶，是机构问题而不是陶瓷问题——而且马来西亚住宅里会坏的部件是可以预见的。翻板阀（flapper）磨损后封不严，水悄悄流进碗里，水箱永远蓄不够压力；碗口虹吸孔被马来西亚水质留下的硬水垢堵死，冲力越来越小；进水阀浮子漂移，地漏 S 弯被淤泥堵。每个都是小配件小工程；唯一昂贵的结果是对着用了 15 年的座便器年年零配替换，而不是一次到位。",
    diyChecks: [
      "掀开水箱盖观察完整冲水：翻板阀是否落严，水箱是否一次排空",
      "查不停水：进水阀关闭时仍有水流进碗里，说明翻板阀或进水阀密封面在漏",
      "看虹吸孔——结垢发黑、水流细，说明该除垢了",
      "记录冲水模式：所有孔都弱指向水箱机构；单侧弱可能是 S 弯半堵",
    ],
    prevention: [
      "每 12–18 个月用柠檬酸或醋浸泡除水箱与虹吸口水垢",
      "一发现不停水就换翻板阀与进水阀密封件——便宜且只需 10 分钟",
      "条件允许时软化水质；硬水正是虹吸孔堵塞的根源",
      "两年内换过两个以上配件，就该报价换新座便器——配件钱会超过换新钱",
    ],
    costDetail: "更换翻板阀或进水阀（含件）RM150–RM250。虹吸孔除垢与水箱保养同价段。问题在 S 弯或排污管时，疏通或换弯另加费用。整套换新（拆旧、双冲座便器供货安装、清运）视座便器档次 RM550–RM1,800。我们先定位故障件，再按能真正解决问题的最小方案报价，工艺享标准保修。"
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
    },
    overview: "天花板与石膏线交接处的裂缝是马来西亚住宅最常见的外观瑕疵，绝大多数并非结构问题。石膏线、石膏板顶与砖墙随温湿度以略不同的速率伸缩——新房前 2–5 年的沉降还会叠加自己的变形。旧填缝剂干缩后在交接处开裂，每次重刷跳过这里只是把裂缝盖住而非修好。正确修法是柔性处理：剔空松动材料，用柔性丙烯酸填缝剂（缝隙宽处加网格带）填补，再批平、底漆、面漆，让接缝可以活动而不再开裂。",
    diyChecks: [
      "用硬币或尺量裂缝：小于 3 毫米属外观填补范围；更宽或阶梯状需结构评估",
      "看裂缝是在每个石膏线接缝还是仅一处——处处有缝说明整体变形；只有一处说明局部受潮或支撑问题",
      "沿裂缝划动指甲：抹灰层粉化说明已受潮软化，需先干燥或处理渗漏",
      "观察裂缝一个月：持续变宽就停下来——那是活动性裂缝，不是外观裂缝",
    ],
    prevention: [
      "石膏线接缝从一开始就用柔性丙烯酸填缝剂加网格带，不用刚性填缝",
      "接缝处随墙顶同色轻刷，让细微变形不显线",
      "厨卫排风扇常开——干湿循环正是填缝开裂的推手",
      "新房前 5 年沉降期每年检查一次所有石膏线",
    ],
    costDetail: "每间房石膏线裂缝修复（剔空、柔性填补、必要处网格、批平、底漆、同色重涂）卧室约 RM200–RM380，客厅或长顶线约 RM450–RM900。多间房按每间折扣计价。若石膏线本体脱开或水损，先修换该段石膏线，现场勘察后报价。所有工艺以同色漆膜收尾，享标准保修。"
  },
  "balcony-leak-condo": {
    symptom: "水从阳台滴到楼下单元，或室内阳台附近的墙面出现水渍。",
    causes: ["阳台防水膜失效", "阳台水泥砂浆开裂", "阳台推拉门门槛处漏水", "阳台排水口堵塞"],
    solutions: ["进行蓄水测试定位漏水点", "如可能从下方进行 PU 注浆", "在水泥砂浆上涂抹新防水膜", "更换或修复推拉门密封胶"],
    whenToCall: ["楼下邻居投诉滴水", "室内墙面开始起泡", "阳台雨后总是潮湿"],
    localFaq: {
      q: "公寓阳台漏水谁负责？",
      a: "通常是单元业主（私人空间）。如果是公共区域漏水，JMB/MC 可能负责。请查看分层地契。"
    },
    overview: "公寓里阳台漏水不只是漏水——它是一段与楼下住户的法律关系。按马来西亚多数 JMB 规则，分层业主对自己阳台的防水负责，这意味着楼下天花板的水渍就是你的账单，时钟从 JMB 发出维修通知那一刻开始走。物理原因通常四选一：丙烯酸或水泥基防水膜老化开裂、瓷砖勾缝多年渗水、阳台地漏堵塞导致积水泡着楼板，或混凝土发丝裂缝在每个季风季缓慢作业。好消息：多数情况不用砸你的瓷砖——从楼下注浆，或只剥离重做失效区域。",
    diyChecks: [
      "做蓄水试验：用水管灌满阳台蓄水 30 分钟，检查楼下——新出现的深色斑点就是活跃渗漏路径",
      "检查阳台地漏：放水观察流速；积水说明地漏是第一要修的",
      "敲击阳台地砖——湿区周围一圈空鼓，说明该处防水膜已失效",
      "给楼下受损处拍照并标注日期，保留与 JMB 的全部往来函件——日后责任认定靠这些证据",
    ],
    prevention: [
      "保持阳台地漏无落叶碎瓷——堵塞的地漏会让积水泡着防水膜",
      "每 3–5 年用密封型或环氧美缝重做阳台地面勾缝",
      "不要让花盆长期泡在积水里贴着楼板边缘",
      "防水膜 10–15 年到期即重做，哪怕还没漏——重做远便宜于理赔",
    ],
    costDetail: "从楼下对楼板做聚氨酯注浆——需楼下业主同意，不砸你的砖——约 RM800–RM2,500，视裂缝长度。失效区域局部重做防水约 RM2,500–RM4,500。整阳台砸砖、新膜、重铺约 RM4,500–RM6,500+，通常 3–5 个工作日。我们先做蓄水试验让方案匹配真实渗漏路径，防水享标准书面保修。"
  },
  "concrete-slab-crack-leak": {
    symptom: "混凝土楼板裂缝导致雨水或使用水渗入楼下。",
    causes: ["结构移动导致混凝土开裂", "楼板上方防水层已过期", "防水膜不足", "楼板上方负载过重"],
    solutions: ["用环氧树脂注入填充裂缝", "从下方进行高压 PU 注浆", "在上方涂抹新防水膜", "添加保护性水泥砂浆层"],
    whenToCall: ["楼板上可见裂缝", "大雨后反复漏水", "旧防水层已超过 5 年"],
    localFaq: {
      q: "混凝土裂缝能永久修复吗？",
      a: "结构裂缝可通过环氧注入稳定。对于活跃漏水，PU 注浆是马来西亚最有效的方法。"
    },
    overview: "只在季风大雨时出现、沿上方楼板一条直线蔓延的天花水渍，是楼板裂缝渗漏的经典签名。这条缝通常是混凝土收缩或变形裂缝——很细，往往小于 3 毫米，结构上无关紧要——但它是一条从屋面或板面直通楼下天花的通道，而历经数十年老化的表面防水已关不住它。只在暴雨时漏的原因在于：小雨渗进混凝土孔隙就蒸发了，而持续暴雨灌满裂缝通道的速度超过周边楼板吸收的速度。现代修法无需上屋面：从下方钻孔注入高压聚氨酯发泡，膨胀填满裂缝，并随楼板伸缩使用 8–15 年。",
    diyChecks: [
      "暴雨时用水性胶带标记滴水线——线的笔直程度是把楼板裂缝与随机管道漏区分开的关键",
      "若能到达屋面或板面，找同一条裂缝线——可见裂缝加滴水线即确认诊断",
      "量可到达的裂缝宽度：小于 3 毫米是注浆常规范围；更宽的结构裂缝须先请结构工程师",
      "记录渗漏是否逐年加重——渍迹扩大说明裂缝通道在变宽或表面密封在失效",
    ],
    prevention: [
      "保持屋面与板面清洁排水——板面积水会加速裂缝扩展",
      "可到达的板面每 8–10 年用丙烯酸防水膜复封",
      "公寓层间渗漏尽早报 JMB，趁裂缝还没变宽就处理楼板",
      "超过 3 毫米的楼板裂缝在注浆前先由结构工程师评估",
    ],
    costDetail: "楼板裂缝聚氨酯注浆按裂缝长度与施工条件计价，典型单线季风渗漏约 RM650–RM1,800，多线或难点施工升至 RM3,800+。施工 2–4 小时，全程从下方进行无需上屋面，当日固化，书面保修最高 5 年。若上方板面可到达，同次可用丙烯酸防水膜复封做长期保护。报价前我们先沿滴水线确认裂缝走向。"
  },
  "curtain-track-falling": {
    symptom: "窗帘轨道从天花板或墙壁松动、支架脱落、或窗帘掉落。",
    causes: ["螺丝从干墙中被拉出", "支架仅安装在石膏板上未使用锚栓", "窗帘重量超过支架承重", "天花板灰泥脆弱或受损"],
    solutions: ["拆下旧支架并修补孔洞", "安装新的重型锚栓或弹簧螺栓", "将支架转移到龙骨或梁的位置", "用加固支架重新安装窗帘"],
    whenToCall: ["支架反复脱落", "安装区域天花板感觉脆弱", "窗帘太重现有系统无法承受"],
    localFaq: {
      q: "重新安装窗帘轨道多少钱？",
      a: "通常 RM 150 至 RM 350，包括新支架和锚栓，取决于窗户数量和天花板类型。"
    },
    overview: "窗帘轨道下垂、把螺丝拉脱甚至掉落，是锚固问题而不是窗帘问题——马来西亚住宅的故障几乎总是同一个：轨道用普通塑料膨胀栓固定在石膏板或抹灰层上，而抹灰层在每天开合重窗帘的反复拉扯下终于松脱。一幅遮光或衬里窗帘挂在长轨道上，每个锚点承受数公斤的动态载荷，日复一日。正确修法：找到龙骨，或使用承重远超窗帘重量的重型蝴蝶/弹簧锚栓，补好被拉脱的孔洞，特别重的窗帘加设中间墙托，让轨道不再自承跨距。",
    diyChecks: [
      "手托轨道并完全拉开窗帘——数有几个固定点已拉脱或松动",
      "敲击每个固定点周围：空响是石膏板，实响是混凝土或附近有龙骨",
      "估算窗帘重量：遮光和衬里面料的载荷是纱帘的两倍",
      "检查轨道周边天花有无水渍——受潮的抹灰层什么锚都挂不住",
    ],
    prevention: [
      "按墙体选锚固：混凝土用镀锌锚栓，石膏板用重型蝴蝶栓，绝不用普通塑料栓",
      "长于 2 米的轨道挂重窗帘时加中间墙托",
      "轨道端挡与滑轮磨损时更换——打滑的滑轮会加倍锚点载荷",
      "每年复紧一次轨道螺丝——一分钟的活防止轨道掉落",
    ],
    costDetail: "单窗标准轨道重装——补拉脱孔洞、找龙骨或新打重型锚点、正确锚固后重新挂装——RM120–RM250。混凝土天花与需修补底漆的破损石膏板约 RM250–RM380+/窗。窗帘确实很重（遮光、衬里或多幅长轨道）时，同价加中间墙托。每个安装交付前做承重测试，享标准保修。"
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
    },
    overview: "15 年以上的公寓单元不是装修工程——它是一栋用了数十年吸收磨损的建筑，而翻新顺序和最终效果一样重要。防水、电气安全、管道排第一，因为它们是最贵也最危险、事后才发现代价最高的项；油漆、地面、瓷砖是让单元\"变新\"的可见层；橱柜和衣柜最后做，因为整个工期都围着它们排。顺序错了，你会用即将被砸掉的地毯保护湿作业，或装好衣柜又得为管道维修拆掉。公寓里 JMB 规则也塑造工期：施工时段、电梯保护、垃圾清运、押金都是计划的一部分，不是意外。",
    diyChecks: [
      "逐间走一遍单元，分三类标记：先修（渗漏、电路、管道）、翻新（油漆、地面、瓷砖）、定制（橱柜、衣柜、洁具）",
      "查线路与配电箱年龄——20 年以上老单元若还是原线，是安全项而非外观项",
      "看浴室天花与邻里投诉：层间渗漏是公寓里最贵的后期发现",
      "定下目标——自住还是出租——它决定材料档次与每间预算",
    ],
    prevention: [
      "为隐藏项留预算：15 年以上老单元，15–25% 的报价通常是意外（防水、管道、电路）",
      "湿作业先于干作业、干作业先于饰面的顺序排工",
      "保护电梯、大堂与公共走廊——JMB 损坏索赔又贵又慢",
      "翻新前中后做带日期的照片记录——用于定纷止争与存档",
    ],
    costDetail: "雪隆地区三房公寓整体翻新约 RM22,000–RM180,000+，视单元面积、材料档次与范围。工期通常 6–10 周：拆除加防水、铺砖加水电、橱柜加木作、最后油漆与交付。勘察后我们出具逐项报价，每行单独定价，你决定哪些行执行。JMB 押金、许可、施工时段、电梯保护与垃圾清运为标准服务，各阶段享标准保修。"
  },
  "power-tripping-frequently": {
    symptom: "电力频繁跳闸，使用某些设备时 MCCB/RCCB 总是跳闸。",
    causes: ["电路过载（一个电路上设备太多）", "漏电（接地泄漏）", "老旧或松动的电线", "损坏设备导致短路"],
    solutions: ["找出导致跳闸的设备", "在不同电路间平衡负载", "如损坏更换 MCCB/RCCB", "检查并修复老旧电线"],
    whenToCall: ["每天都跳闸", "只在开启特定设备时跳闸", "老单元仍使用原始电线"],
    localFaq: {
      q: "电力经常跳闸危险吗？",
      a: "跳闸是安全机制。如果频繁发生，说明有需要持证电工检查的问题，否则可能变成危险。"
    },
    overview: "一天跳闸好几次的主断或 RCD，是故障在按日程重复——而日程就是线索。某台电器一启动就跳，指向那台电器的线路或共用回路过载；只有雨后跳，指向潮气经插座、灯头盒或配电箱找到了入地路径；瞬间跳闸且几秒内重复，指向硬短路或断路器本身失效。关键是 RCD 正在尽职：它是防触电的保护装置，为了不断电而 bypass 它，正是房屋火灾与触电的开端。修法是逐回路隔离故障，断路器老化的配电箱则升级更换。",
    diyChecks: [
      "逐一拔掉嫌疑回路的电器并测试 RCD——不跳了就锁定那台",
      "把规律与天气对照：暴雨后集中跳闸，说明线路某处进水",
      "看配电箱：断路器变色、发烫、有水痕或焦味，说明箱体本身需要处理",
      "记录哪台电器触发跳闸——电磁炉、热水器、空调是高负荷常客",
    ],
    prevention: [
      "高负荷电器分散到不同回路，不要共线",
      "配电箱保持干燥密封——上方渗漏或潮点先修",
      "每 5–10 年检查并规范标注配电箱，老房子尤其必要",
      "软线开裂、插头磨损的电器及时更换，别让它变成跳闸源",
    ],
    costDetail: "逐回路诊断约 RM180–RM350 起。更换失效断路器或 RCD 处于价格中段；整体配电箱升级——新断路器、RCD、规范标注、负荷重新分配——典型住宅 RM850–RM1,800，ST 注册电工一天内完成、无需全屋重布线。若故障在特定电器，修好或换掉后跳闸即止。工艺享标准保修。"
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
    },
    overview: "敲击发空的瓷砖已经失去粘结——瓷砖与找平层之间的水泥垫层失效了，砖现在\"浮\"在上面。马来西亚住宅常见原因有：原始铺贴基层不合格（干硬性砂浆未做拉毛/粘结处理）、水从砖下渗过把粘结层顶起，或建筑缓慢沉降导致基层位移。一块松砖是麻烦，一片松砖就是绊脚隐患和渗水通道——湿区周围每一块空鼓砖都可能渗水到下层楼板，而第一块彻底弹起的砖落地时还可能崩裂相邻砖。敲击检查就是全部诊断，修复方法就是掀砖、清理、用正确的薄贴砂浆重新铺贴。",
    diyChecks: [
      "用硬币或敲砖锤按 2×2 米网格敲击，标记所有空鼓——画完整片范围，不只是明显那块",
      "检查空鼓砖四周：若相邻一圈也空，说明整片下方的找平层已脱粘",
      "看松砖周边勾缝——开裂或缺失的缝就是水进入的通道",
      "重物压在松砖上一天再敲：若砖下陷了，垫层已碎，需整体重铺而非胶粘",
    ],
    prevention: [
      "湿区保持偏干——淋浴出口铺地垫、拖地后刮水，减少顶起瓷砖的水",
      "湿区周边开裂勾缝每几年重做，防止水钻到砖下",
      "公寓空鼓砖片区尽早报 JMB，防止砖弹起崩裂邻砖",
      "任何区域重铺砖时，要求薄贴砂浆加满背涂覆盖，不用干硬性砂浆",
    ],
    costDetail: "单块松砖重铺（正确薄贴+同色美缝）RM150–RM280。多块片区按数量计价，通常 RM350 起。若敲击显示整片空鼓，工程转为按平方米重新找平重铺，适用 RM2,000–RM2,800+ 区间。报价前我们先把空鼓区画全，让价格覆盖真实范围；重铺工艺享标准保修。"
  },
  "cracked-tile-grout": {
    symptom: "瓷砖之间的勾缝开裂、粉碎或消失，留下开放缝隙。",
    causes: ["建筑结构移动或沉降", "劣质勾缝剂或施工不良", "湿气和潮气削弱勾缝", "用强化学清洁剂清洗"],
    solutions: ["用勾缝锯清除旧勾缝", "清洁缝隙并干燥", "涂抹合适的新勾缝剂", "干燥后用勾缝密封剂封闭"],
    whenToCall: ["多处勾缝消失", "水通过裂缝渗入", "勾缝清洁后仍然变色"],
    localFaq: {
      q: "能自己更换勾缝吗？",
      a: "小面积可以——勾缝锯和新勾缝剂在五金店有售。整个浴室最好交给专业人士。"
    },
    overview: "美缝（填缝）是任何瓷砖表面最薄弱的一条线，也是最早暴露问题的地方。马来西亚住宅的水泥基填缝剂通常 5–8 年后开始粉化，厨卫因潮湿环境滋生黑色霉菌，周期更短。填缝一旦开裂或成粉，就不再密封缝线：水直接穿缝进入找平层，湿区甚至会渗进下层楼板——\"外观\"填缝问题就这样悄悄变成楼下天花板的防水问题。重做美缝是对这条因果链最便宜的保险。",
    diyChecks: [
      "用指甲或美缝笔刮填缝——刮成粉末说明粘结已失效，清洁救不回来",
      "先查最潮湿的缝（淋浴区地面、浴缸边、厨房水槽边）——渗水都从那里开始",
      "看受影响缝上方的瓷砖：缝上方出现棕色环或白碱，说明水已经在走",
      "敲击开裂严重的填缝附近瓷砖——空鼓声说明潮气已开始让瓷砖脱粘",
    ],
    prevention: [
      "重做美缝后用疏水渗透型密封剂封缝，并每 2–3 年复封",
      "湿区从一开始就使用环氧或优质丙烯酸美缝——那里用水泥基填缝等于上了 5 年倒计时",
      "保持浴室地面偏干：淋浴出口铺防滑垫，减少持续的干湿循环",
      "发现填缝开始开裂当年就修，防止它变成渗水通道",
    ],
    costDetail: "标准浴室（淋浴区、地面、湿区墙面）重做美缝约 RM650–1,400，含旧缝清除、清洁、环氧美缝与密封。厨房与干区房间更低，约 RM250–RM500 起，大面积地面按平方米报价。环氧美缝前期比水泥基贵，但寿命 15 年以上对 5–8 年，湿区里通常一个重做周期就回本。所有工艺均以疏水密封剂收尾，享标准保修。"
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
    },
    overview: "Vinyl 或 SPC 锁扣地板边缘翘起、卷边，是应力问题而不是地板报废。地板遇热膨胀、遇冷收缩，如果靠墙的 10 毫米伸缩缝当初没有预留、或后来被挤没，地板就没有活动余量——板与板互相挤压，最终在门边、窗边或潮湿区域边缘翘起。马来西亚住宅最常见的两个诱因是西晒阳光长期烘烤地板一侧，以及季风期渗入地板下方的水。锁扣通常仍然咬合，所以同一批地板几乎总能掀起、烘干后重新锁合。",
    diyChecks: [
      "沿地板边缘行走，逐一按压翘起的地板——记录哪些会移动、弹响或出现缝隙",
      "检查靠墙缝隙：正常应约 10 毫米；若地板紧贴墙面，伸缩缝失效就是主因",
      "查看翘边下方及周边有无变色、潮湿气味或基层含水",
      "标记受影响房间——午后暴晒的房间多为热胀，潮湿出入口多为渗水",
    ],
    prevention: [
      "所有墙面与立柱保持 10 毫米伸缩缝，切勿用踢脚线填实",
      "入口处铺门垫，避免湿鞋把雨水拖过地面",
      "朝西窗户加遮光帘或 UV 贴膜，减少阳光直射地板",
      "溅水立即擦干，切勿用湿拖把拖 Vinyl 或 SPC 地板",
    ],
    costDetail: "局部维修——掀起、烘干并重新锁合几块地板——约 RM250 起，通常 2–4 小时完成。沿整面墙的大面积边缘翘起、或因泡水必须更换地板，视地板数量及基层是否需要烘干或修补，约 RM800 至 RM1,800+。开工前我们会先确认原因（热胀或渗水），重新锁合工艺享标准保修。"
  },
  "cracked-roof-tiles": {
    symptom: "屋顶瓦片开裂、破碎或缺失，导致雨水渗入天花板或墙壁。",
    causes: ["屋顶材料已达使用寿命", "物体撞击（树枝、石头）", "屋顶结构移动", "增加负载（安装太阳能板等）"],
    solutions: ["用新瓦片替换破裂的", "检查并在损坏时修复底层", "更换烟囱或通风口周围的泛水板", "定期清洁和检查屋顶"],
    whenToCall: ["下雨时正在漏水", "从下方可见瓦片破裂", "屋顶超过 15 年"],
    localFaq: {
      q: "更换屋顶瓦片多少钱？",
      a: "小修补通常 RM 250 至 RM 800。全屋顶需要先检查——费用因屋顶类型而异。"
    },
    overview: "开裂或位移的屋面瓦是一颗只在季风季倒计时的定时炸弹。马来西亚屋面瓦失效无非四种原因：风暴撞击或断枝砸落、前任施工人员的踩踏、20 年以上热带紫外线下的脆化，或屋脊砂浆干缩导致脊瓦滑落。风险不在瓦片本身，而在瓦片下面盖着什么——瓦一翘起，雨水就从下面沿望板流淌，直到找到最近的入口钻进天花板。所以天花的滴水点往往离真正的裂缝有几米远。趁天气好的时候做一次快速勘察，是全年最便宜的一笔保险。",
    diyChecks: [
      "风暴过后，先检查檐沟与屋面下方地面有无缺失的瓦，再谈上屋面",
      "用望远镜从地面看屋脊线——滑移的脊瓦是最常见的漏水源",
      "记录上次水从天花板哪个位置进入，沿屋面坡度往回追——入口通常比滴水点更高、更靠外",
      "若能安全拍到开裂瓦，照片里放把尺做参照——照片能加快报价",
    ],
    prevention: [
      "修剪伸到屋檐上方的树枝，防止风暴中的枝条刮蹭瓦面",
      "每 2–3 年安排一次屋面检查，每次大风暴后加检",
      "不要自己上屋顶——踩踏 10 年以上旧瓦是瓦片位移的首要原因",
      "公寓住户尽早向 JMB 报修，趁渗漏还只是一个小点而非一片渍",
    ],
    costDetail: "完整屋面勘察（无人机+地面+书面报告）约 RM250–RM450。局部维修——更换少量开裂或位移瓦（同色匹配）并密封细裂——约 RM380–RM900 起。用新聚合物砂浆重新坐脊瓦、更换短段屋脊约 RM900–RM1,800。只有 30% 以上瓦片或防水垫层受损时才建议整体翻瓦。瓦材供应与配色开工前确认，维修享标准保修。"
  },
  "cabinet-door-sagging": {
    symptom: "柜门下垂、不对齐或铰链松动导致门无法紧密关闭。",
    causes: ["正常使用导致铰链螺丝松动", "柜门太重超出原始铰链承重", "湿气导致门膨胀", "原始安装不正确"],
    solutions: ["拧紧或更换铰链螺丝", "调整铰链重新对齐", "为重门添加第三个铰链", "必要时更换为重型铰链"],
    whenToCall: ["调整后门仍无法紧密关闭", "铰链发出噪音或感觉松动", "门明显倾斜"],
    localFaq: {
      q: "能只修柜门而不换整个柜吗？",
      a: "可以，大多数情况下可以。拧紧铰链、添加支撑铰链或调整通常就够了，不需要换整个门。"
    },
    overview: "吊柜或地柜门下垂几乎总是合页问题，而不是柜体问题。每次开门，门扇全压在合页上；在马来西亚厨房——蒸汽、油污与高湿——五六年之后，合页螺丝在柜体里松动、合页杯磨损，门扇就下沉几毫米。几毫米足以让门蹭到相邻门板、关不严实，或\"砰\"地撞上而非轻合。好消息：这是全屋最便宜也最快的维修之一，顺手升级缓冲合页还能多用很多年。",
    diyChecks: [
      "完全打开下垂的门，查看柜体内部——合页杯是否明显松动，或木板上螺丝孔是否滑丝",
      "看合页类型：廉价不可调合页只能换不能调",
      "关门时感受门缝——单侧恒定缝隙说明是门沉了，不是柜体变形",
      "数一数整排柜门有几扇同样下垂——大多数都垂就该整体换合页",
    ],
    prevention: [
      "每年 1–2 次紧固合页螺丝（拧柜体侧，不是拉门侧）",
      "柜体木板开始滑丝处换加长或带锁固胶的螺丝",
      "厨房保持通风——蒸汽与油污会加速合页与螺丝腐蚀",
      "更换单只合页时升级为缓冲合页，让整排柜门寿命均匀",
    ],
    costDetail: "单门校准与合页紧固约 RM150 起。换装缓冲合页约 RM30–RM60/门（含工），整排 8–10 门全换约 RM350–RM620。若柜体安装点已滑丝或发软，需补洞重钻或换长螺丝，现场勘察后报价。所有工艺交付前整排门做对齐测试，享标准保修。"
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
    },
    overview: "智能锁的安全程度取决于安装质量。锁本身——三星、耶鲁、凯迪仕或其他——出厂都没问题；决定它能否真正守住门的是前期工艺：锁体开槽是否精准、反锁旋钮对位是否正确、电池仓是否便于更换、以及指纹/卡片/密码/APP/应急钥匙每种模式是否真正测试过。金属门或防火门更难，因为要在钢板上开槽；短租或出租房的门若装得不合格，意味着客人被锁门外和 JMB 或租客纠纷。我们接到的\"智能锁不工作\"报修，大多能追溯到安装取巧，而非硬件本身。",
    diyChecks: [
      "购买或约装前测量门厚（常见 35–55 毫米）与斜边——规格书必须与门匹配",
      "检查现有锁孔：旧机械锁锁体尺寸与智能锁不同时，门需要重新开槽",
      "金属或防火门务必确认锁体适用于该材质——木门锁体在钢板上切不好也装不牢",
      "短租或民宿门先确定需要哪些门禁码与自助入住功能，再定安装日",
    ],
    prevention: [
      "应急钥匙交给物业外的可信人保管，不要放在门口钥匙盒",
      "低电量警告出现前换电池——多数品牌会提前数周预警",
      "安装后头 3 个月每月测试所有开锁方式",
      "断电或换电池后更新固件并复查 APP 配对",
    ],
    costDetail: "标准木门或复合门安装 RM250–RM450/樘，含必要开槽、锁体定位、电池仓接线、APP 配对与全模式门禁码测试。金属或防火门耗时更长，约 RM450–RM550+。我们会完成手机配对、录入指纹与用户码，并交付应急钥匙与说明书。常规 45–90 分钟，金属门 90–150 分钟。"
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
    },
    overview: "自动门遥控器突然失灵，几乎从不神秘：无非四种情况——CR2032 电池没电、控制板下方的接收天线锈蚀、电机重置后遥控码被清除，或控制板本身故障。故障模式能告诉你答案。一只遥控器失效多半是电池；多只同时失效指向接收器或主板；而大门自行开启则是安全问题，应当作紧急事件处理——接收器误触发意味着陌生人开门和你开门一样容易。",
    diyChecks: [
      "换新 CR2032 电池，在 2–3 米外测试——大多数\"死\"遥控只是电池问题",
      "从不同距离和角度测试；只在臂距内有效说明发射器弱或天线锈蚀",
      "检查是否所有遥控器同时失效——若是，问题在接收器而非遥控",
      "观察大门 10 分钟：若自行开启，立即停用并检查接收器",
    ],
    prevention: [
      "每年更换遥控器电池，尤其经历潮湿雨季之后",
      "保持电机箱干燥通风——天线锈蚀是头号隐形杀手",
      "登记每个正常遥控的编码，备用遥控编程后妥善存放",
      "新装或更换大门使用滚动码遥控，防范信号克隆",
    ],
    costDetail: "电池与基础配对检测含在上门费内；标准遥控含编程 RM120–RM250，滚动码遥控 RM250–RM380。接收天线清洁或更换处于价格中段，整块控制板更换约 RM550+。如需 Wi-Fi 手机门控，安装费 RM350–RM650。所有维修离场前都会完整测试——开、关、自动反转——确认无误。"
  },
  "loose-metal-gate-hinges": {
    symptom: "金属门下垂、拖地、或铰链明显松动或腐蚀。",
    causes: ["原始铰链焊接失效", "锈蚀腐蚀铰链销", "门重量超出原始规格", "混凝土柱移动"],
    solutions: ["磨掉旧焊并清洁表面", "焊接重型替换铰链", "给焊接区域上底漆和涂漆", "如果门特别宽添加中部支撑"],
    whenToCall: ["门拖地", "铰链处可见锈屑", "门几乎要从柱上脱落"],
    localFaq: {
      q: "能现场焊接吗？",
      a: "可以。我们携带便携式电弧/MIG 焊机，可在现场 2–4 小时内完成大多数门铰维修。"
    },
    overview: "金属大门下垂或拖地，说明合页已经失效——而门合页是整块物业里受折磨最多的焊点。它常年承受整扇门的重量，一年开合数百次，直面日晒雨淋；旧安装中原始焊缝往往只是一道廉价的临时焊条。多年之后焊缝疲劳、销轴锈蚀，门扇一点点下沉直至擦地。拖地不只是难看：它会弯曲门扇、磨损闭门器或锁扣，双开门还可能整扇倾斜到一根立柱上。",
    diyChecks: [
      "用手抬起门扇并保持——松手即落下，说明合页销轴或焊缝已失效",
      "用螺丝刀柄敲击合页根部；空响或松动声说明焊缝已与框架分离",
      "检查混凝土立柱：立柱开裂或倾斜，说明门重正在移动立柱本身而不仅是合页",
      "查看销轴与合页轴节有无锈片——表面浮锈正常，起片剥落说明金属已减薄",
    ],
    prevention: [
      "每 6–12 个月用锂基或船用级润滑脂润滑销轴与轴节",
      "螺栓式合页板每年复紧一次",
      "保持门扇平衡：双扇门应水平，不得单侧倾斜",
      "刮伤或裸露的焊缝一周内补漆，防止锈蚀重启",
    ],
    costDetail: "单侧合页重焊（打磨、更换重型合页、底漆加两遍面漆）约 RM250–RM450/侧起。双侧加宽门或超重门的跨中加固约 RM800–RM1,200+。若混凝土立柱本身已位移，需另行勘察报价加固。多数合页维修用便携焊机现场 2–4 小时完成，焊缝工艺享 12–24 个月防锈保修。"
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
    },
    overview: "空调整天空转却吹不凉房间，原因只有四种，且检查顺序固定——便宜的先，也最常见的先。第一：滤网与线圈。炎热多尘的气候里，疏于保养的机器几周内就积满棉絮霉菌，风道缺氧，机器越干越累。第二：冷媒。慢漏把冷媒量降下去，系统再也抽不出房间的热量——不查漏只加氟，只是买几周时间。第三：温度传感器读错，把房间读得比实际冷，直接关掉压缩机。第四：压缩机本身，最贵的一端，多年高负荷或电压事故后失效。现场诊断 30–60 分钟，故障模式（吹热风、无风、铜管结霜）能告诉技师很多。",
    diyChecks: [
      "洗滤网后运行一天——明显变凉说明风道是主因",
      "摸室外机两根铜管：制冷模式下都应偏温；一冷一温还带霜指向冷媒不足",
      "对比设定与室温：35 度的房间设 16 度，机器永远赢不了——那不是故障",
      "记录铜管结霜或嘶嘶声——都指向冷媒侧，应在下个旺季前检查",
    ],
    prevention: [
      "高负荷使用下每 2–4 周洗滤网——这是你买过最便宜的制冷",
      "每 3–6 个月保养，保持线圈干净、冷媒量受检",
      "加氟后留好单据与 PSI 读数——一季内复暖说明漏点没找到",
      "空调配独立回路；电压浪涌是压缩机头号杀手",
    ],
    costDetail: "基础保养 RM129 起，解决线圈与滤网导致的暖风案例。检漏加氟按 RM2.50/PSI 起，且先修好漏点。温度传感器故障是价格中段的小配件；压缩机维修或更换 RM1,040 起，且必须在便宜的阶段都做完后才报价。现场 30–60 分钟诊断并逐项说明，工艺享标准保修。"
  },
  "aircon-water-leaking": {
    symptom: "室内机滴水或水沿墙流下，通常是排水管堵塞或机器倾斜所致。",
    causes: ["排水管堵塞或脏污", "滤网堵塞导致结冰融化", "排水泵故障（卡式机）", "机器倾斜或安装不当"],
    solutions: ["疏通冲洗排水管", "清洁滤网和蒸发器以停止结冰", "更换故障排水泵", "重新调平室内机并检查安装"],
    whenToCall: ["水滴到家具或地板上", "机器下方墙面出现水渍", "刚保养完仍漏水"],
    overview: "室内机滴水，是空调在告诉你排水系统失效了——马来西亚机器的原因按固定顺序叠加。第一也最常见：排水管堵了。霉菌与灰尘在细排水管里结膜堵死，接水盘满溢，水就找最省力的路径——通常是越过机身边缘，落到墙面或地毯上。第二：滤网或线圈脏到让线圈缺氧结霜，冰融化后漫出。第三更少见：天花机排水泵损坏，或安装时装歪了机身、水盘朝墙倾斜。每个原因修法不同，所以诊断——查排水、查滤网、查线圈、查水平——必须先行。",
    diyChecks: [
      "追水滴：从机器排水口一侧流成线，指向排水问题；从底边渗出，指向水盘溢水",
      "抽滤网：堵了就洗——缺氧的线圈会结霜，融水就会漫出",
      "查室外端排水管：提起吹通——不通就是堵了",
      "看机身水平：朝墙倾斜的机器永远会朝墙那一侧漏",
    ],
    prevention: [
      "高负荷使用下每 2–4 周洗滤网——同时保护风道与排水",
      "每 3–6 个月保养一次，每次都查排水管",
      "化学清洗后运行 10 分钟，确认排水顺畅",
      "机器移位或重装后复查水平——几毫米的歪就是永久漏点",
    ],
    costDetail: "含疏通排水的保养 RM129 起，解决大多数滴水案例。连带清洗线圈与接水盘的化学清洗 RM156 起。排水泵损坏（天花机）或重新调水平在清洁阶段后报价，约 RM455 档。我们离场前确认水真正排到室外，工艺享标准保修。"
  },
  "aircon-making-noise": {
    symptom: "室内机或室外机在运行时发出咔嗒、嗡嗡、嘶嘶或摩擦声。",
    causes: ["面板、螺丝或支架松动", "风轮上有异物或结冰", "风扇电机轴承磨损", "压缩机或接触器故障"],
    solutions: ["拧紧松动的面板和支架", "清理风扇和蒸发器上的异物", "更换磨损的风扇电机", "更换故障的接触器或压缩机"],
    whenToCall: ["噪音越来越大", "出现摩擦或金属声", "室外机震动过大"],
    localFaq: {
      q: "噪音会损坏机器吗？",
      a: "会——摩擦的电机或故障的压缩机拖延不修会越来越严重，维修也更贵。"
    },
    overview: "空调的噪音就是机器在自述故障——而且新噪音出现后的头几个月等于免费诊断。 咔嗒异响几乎总是松动：面板、螺丝、支架，或异物卡进风轮。嗡嗡声指向电气侧——接触器粘连、电容带病工作、或电机绕组开始损坏。 金属磨擦声必须认真对待：那是风机电机轴承磨损，或压缩机内部金属摩擦，两者拖得越久越坏、越贵。规律（何时开始、哪台机器、是否随风速变化）多数情况下能直接把范围缩到一个配件。",
    diyChecks: [
      "调高再调低风速：随风速变化的噪音是机械问题（风轮、风扇、线圈）；恒定噪音是电气问题",
      "关机后检查室内机面板有无松动，轻敲面板——能复现的响声就是松动的面板或螺丝",
      "看室外机：有无明显晃动、扇叶缺损、或杂物缠绕风扇",
      "记录噪音何时出现——风暴后（部件松了）、保养后（东西没装好）、或逐渐变大（部件磨损）",
    ],
    prevention: [
      "高负荷使用下每 3–6 个月保养一次——干净的风轮和线圈不会响",
      "室外机风扇区保持无落叶、塑料、藤蔓",
      "不要在室外机上堆箱子或靠放物品——振动会松脱支架",
      "每次保养后运行 10 分钟听一听——早抓新噪音是免费的",
    ],
    costDetail: "紧固松动的面板支架、清理风轮杂物与基础保养，多数异响案例 RM195 起。风机电机更换 RM390 起；接触器或压缩机故障需检测后报价——压缩机端在 RM1,000 以上。我们通过听诊加各档风速运行定位声源，先说明配件与价格再施工，维修享标准保修。"
  },
  "aircon-bad-smell": {
    symptom: "空调向房间吹出霉味、发酸味，尤其在刚开机时最明显。",
    causes: ["蒸发器上滋生霉菌和细菌", "接水盘积水", "风轮脏污", "滤网内积灰"],
    solutions: ["清洗并消毒蒸发器和风轮", "冲洗接水盘和排水管", "做抗菌处理", "化学清洗或大修进行深度清洁"],
    whenToCall: ["清洁滤网后仍有异味", "出风口可见霉斑", "异味引发过敏或呼吸不适"],
    localFaq: {
      q: "如何防止空调异味复发？",
      a: "每 3–6 个月保养一次、保持滤网清洁，并在关机前先开送风模式吹几分钟。"
    },
    overview: "空调吹出霉味，是机器在把自己的\"内部环境\"吹进你的房间——而热带气候里的空调内部正是一座完美的霉菌农场。温热潮湿的空气遇上潮湿的蒸发器，接水盘里静水不流，风轮上积着一层灰膜：几周不注意，菌落就成型了，每次开机它就把气味（和孢子）铺满整个房间。它不算即刻危险，但对过敏或哮喘人群是实打实的空气质量问题，而气味正是保养周期超标的警报。基础滤网清洗只能帮一点小忙，真正的修法是化学清洗线圈与风轮、冲洗排水管、加抗菌处理。",
    diyChecks: [
      "清洗或更换滤网后运行一天——气味明显变淡，说明滤网是主要贡献者",
      "在出风口处闻：开机头几分钟最重、之后变淡，指向线圈与风轮而非滤网",
      "滤网后面往里看：线圈有无可见霉斑、风轮有无深色积膜",
      "查排水：接水盘返水或排水口滴出带味的水，说明水盘在积水",
    ],
    prevention: [
      "连续使用下每 3–6 个月保养——霉味是保养超期警报，不是正常状态",
      "关机前纯送风 5–10 分钟，让线圈干燥、霉菌无处落脚",
      "保持滤网清洁；堵死的滤网会把湿气压在涂层上",
      "高强度使用后面板开一小时，让内部通风",
    ],
    costDetail: "基础保养 RM129 起，滤网与轻度线圈积垢导致的气味一次解决。化学清洗 RM156 起；完整精保——线圈、风轮、排水管冲洗加抗菌处理——约 RM455，气味来自成熟菌落时适用该档。保养中我们定位气味源（线圈、风轮或排水），处理工艺享标准保修。气味应在当次上门后消失；若保养期内复现，告诉我们——说明源头没处理干净。"
  },
  "aircon-weak-airflow": {
    symptom: "空调制冷正常但风量很弱，即使开到最高风速房间也凉不下来。",
    causes: ["滤网堵塞", "蒸发器脏污或结冰", "室内风轮电机老化", "风道堵塞或规格偏小"],
    solutions: ["清洁或更换滤网", "清洗蒸发器以恢复风量", "更换老化的风轮电机", "检查并疏通风道或出风口"],
    whenToCall: ["最高风速下风量仍小", "机器出风无力还伴有噪音", "个别房间始终不凉"],
    localFaq: {
      q: "滤网多久清洗一次？",
      a: "频繁使用建议每 2–4 周一次，堵塞的滤网会阻挡气流。"
    },
    overview: "能制冷但风很弱的空调是风道问题，马来西亚机器里九成原因按概率排序只有三种：滤网堵塞、蒸发器脏或局部结霜、风机电机老化。滤网是第一嫌疑——炎热多尘潮湿的气候下， 疏于清洗的滤网几周内就布满棉絮与霉菌，让线圈缺氧。脏线圈第二：翅片堵死，风过不去，机器越干越累。风机电机最后——轴承磨损、叶轮变慢，风量下降靠清洁救不回来。好消息：前两种是例行保养就能解决的事，不是维修。",
    diyChecks: [
      "打开前面板抽出滤网——又黑又霉就清洗或更换，先自己运行一天再决定叫不叫人",
      "看出风口风量：所有风速都弱指向线圈或电机；只有低档弱指向风扇",
      "查看滤网下的蒸发器翅片有无积灰毡或结霜",
      "听风道声音：嗡鸣或摩擦声指向风机电机轴承",
    ],
    prevention: [
      "高负荷使用下每 2–4 周清洗滤网——10 分钟的活保护线圈",
      "每 3–6 个月保养一次，保持线圈与风轮干净",
      "保持回风路径畅通——窗帘或家具挡住出风口都会减风",
      "制冷后运行几分钟纯送风，让线圈干燥、抑制霉菌",
    ],
    costDetail: "基础保养（滤网清洗、线圈水洗、风轮检查）RM129 起，解决大多数弱风案例。基础保养不恢复风量时升级为化学清洗或精保。风机电机更换 RM455 起，且必须在清洁后风量仍弱时才报价。我们前后测量风量让你看到差异，工艺享标准保修。"
  },
  "aircon-not-turning-on": {
    symptom: "空调对遥控器或电源键无反应，或开机后不久自动关机。",
    causes: ["断路器跳闸或保险丝烧断", "遥控器或接收板故障", "电容或接触器失效", "PCB 控制板故障"],
    solutions: ["检查断路器和电源", "检测并更换遥控器或接收器", "更换失效的电容或接触器", "维修或更换 PCB 控制板"],
    whenToCall: ["机器完全无反应", "反复自动关机", "有焦味或断路器跳闸"],
    overview: "空调不启动，范围可以缩到四种情况，且检查顺序是固定的——每一步都比下一步便宜。第一：供电。配电箱里断路器跳闸或保险丝熔断最常见，也最便宜。第二：遥控或接收板。遥控没电、电池没电或接收板故障，会让健康机器看起来像死了。第三：电容或接触器——马来西亚机器里最常坏的部件，通常毁于电压浪涌或漫长潮湿雨季。第四：主 PCB，最贵的一端，多半被浪涌打死。规律能帮你判断：整机彻底没反应指向供电或接收板；能启动然后自动关机指向电容、压缩机热保护或主板。",
    diyChecks: [
      "先看配电箱：空调断路器是否合上？插座有没有电（用台灯试）？",
      "换电池后近距离试遥控，再按室内机实体键",
      "听室外机：按遥控时有嗡声、咔哒或启动尝试，能帮你定位故障端",
      "闻机器与配电箱附近有无焦味——有焦味就停下，什么都不要推",
    ],
    prevention: [
      "空调配独立回路与容量匹配的断路器",
      "线路允许时，专用插座加浪涌保护",
      "每年保养一次——干净干燥的机器更能扛电压波动",
      "连续几天不在家时，风暴季可在配电箱关机",
    ],
    costDetail: "上门诊断 RM114 起，同次维修免收。供电侧处理（断路器、插座、保险丝）最便宜。电容或接触器更换 RM195 起；主 PCB 维修或更换 RM455 起——PCB 是昂贵端，检测确认后才报价。我们按\"供电-接收板-电容-主板\"顺序定位故障，逐项说明，维修享标准保修。"
  },
  "aircon-tripping-mcb": {
    symptom: "空调一启动就导致漏电开关或断路器跳闸，切断房间电源。",
    causes: ["压缩机故障导致电流过大", "电容或线路短路", "断路器规格偏小或回路共享", "室外机受潮进水"],
    solutions: ["检测压缩机电流", "更换短路的电容", "安装规格正确的专用断路器", "干燥并密封室外电气连接"],
    whenToCall: ["每次开机都跳闸", "同一回路上的其他电器也受影响", "机器附近有焦味"],
    overview: "空调一启动就跳 MCB 或 RCCB，只说明一件事：启动电流超过了线路的承载能力。健康机器的启动浪涌很短暂，断路器能吸收；故障机器则每次循环都跳。常见原因按概率排序：压缩机电机短路导致电流远超正常、电容失效漏电、断路器容量不足或该回路与其他大功率电器共用，或老机器室外机电气接线进水。这是少数应当作紧急处理的空调故障——按需跳闸的断路器是线路火灾风险，不只是空调的麻烦。",
    diyChecks: [
      "推闸后观察电流规律：压缩机启动后几秒内跳闸就立刻停止——检查前不要再推",
      "看同一回路还有谁：热水器、烤箱、熨斗与空调共线，启动时就会跳",
      "闻室外机有无塑料焦味——发热的压缩机或接触器在明显故障前会先有味道",
      "雨后检查室外机接线盒有无积水和端子锈蚀",
    ],
    prevention: [
      "空调配独立回路和容量匹配的断路器——共线是多数启动跳闸的根源",
      "室外机接线保持干燥密封，露天阳台尤其注意",
      "每年保养一次；脏线圈让压缩机更吃力、电流更大",
      "绝不用更大容量的断路器\"绕过\"跳闸——那移除的是保护而不是故障",
    ],
    costDetail: "更换电容 RM195 起。线路或接触器维修处于价格中段，压缩机更换 RM1,040 起——压缩机是昂贵端，且必须经电流测试确认后才报价。故障在电路侧（断路器容量、共用负荷）时我们协调电工处理。维修享标准保修。跳闸机器不应反复推闸，上门诊断是第一步。"
  },
  "ice-forming-on-aircon": {
    symptom: "蒸发器或铜管上结霜结冰，机器制冷效果变差。",
    causes: ["雪种不足", "滤网脏或蒸发器堵塞", "风轮转速过慢", "温控或传感器故障"],
    solutions: ["化霜并清洁蒸发器", "检漏后补充雪种", "更换故障风轮电机", "更换故障温度传感器"],
    whenToCall: ["管道或蒸发器可见结冰", "机器反复化霜又结冰", "化霜时往下滴水"],
    overview: "线圈或铜管结冰，是空调在告诉你线圈运行温度过低——在马来西亚这从不正常，因为机器本该在散热，而不是把房间湿气冻成霜板。链条通常是四种之一：制冷剂不足（慢漏把冷媒量降下去了）、滤网或线圈堵塞让线圈缺氧、风机电机转速过低，或温度传感器读错。任何一种都会把线圈温度拉低到房间内空气的水汽在其上凝结成冰。然后机器停止制冷，冰化时滴水，再开机再冻——这个循环若持续几周，会悄悄损伤压缩机。",
    diyChecks: [
      "关机或切纯送风，让它完全化冰——冰 30–60 分钟化完，滴出的水量就是冻住的量",
      "抽滤网：积满灰尘就清洗——线圈缺氧是最常见的结冰原因",
      "检查排水：水倒灌进接水盘说明排水管堵了、盘在溢水",
      "看冰结在哪里：靠近机器的第一段铜管上结指向冷媒不足；整片线圈结指向风道",
    ],
    prevention: [
      "每 2–4 周清洗滤网——缺氧的线圈会结冰，不只是制冷不足",
      "每 3–6 个月保养一次，每次都查排水管",
      "加氟后观察一周：若再冻，说明漏点没找到",
      "高湿天别把设定温度压得极低——那时线圈负荷最重",
    ],
    costDetail: "清洗检查 RM129 起，滤网或线圈脏导致的结冰一次解决。重度积垢化学清洗 RM156 起。冷媒不足时，检漏加氟按 RM2.50/PSI 起，且必须先修好漏点——不查漏只加氟只是买时间。风机电机或温度传感器故障在清洁与检氟后报价。工艺享标准保修。"
  },
  "aircon-remote-display-issue": {
    symptom: "遥控器无反应，或机器显示屏出现故障代码、闪烁或黑屏。",
    causes: ["遥控器电池没电或腐蚀", "遥控传感器或接收板故障", "显示屏接线松动", "主板 PCB 故障"],
    solutions: ["更换遥控器电池", "检测并更换遥控器或接收器", "重新插紧显示屏连接线", "维修或更换 PCB 控制板"],
    whenToCall: ["遥控器只有凑很近才有反应", "显示屏出现故障代码", "显示屏闪烁或一直黑屏"],
    overview: "空调遥控失灵或显示屏空白、闪烁、报故障码，几乎都是小故障小价格——但分清类型很重要，因为\"遥控问题\"和\"主板问题\"是完全不同的工程。遥控一侧：电池没电或触点氧化、红外发射器老化、遥控器本身寿命到头。主机一侧：前壳下显示排线松动、接收板故障，或主 PCB 正在损坏并连续报码。故障码就是机器在告诉你哪里坏了——每个品牌有自己的码表，读错码会让技师走上错误的配件路径。先查便宜的，任何换板之前先让技师读码。",
    diyChecks: [
      "换两节新电池，在 1–2 米无障碍距离测试——大多数\"死\"遥控只是电池问题",
      "直接按室内机机身上的实体开关：若有效，嫌疑在遥控或接收板",
      "准确记录显示屏故障码（E5、H4 等）加品牌型号——这已是一半诊断",
      "查看前面板有无松动或显示区域附近的细裂，再决定是否拆机",
    ],
    prevention: [
      "每年更换一次遥控电池——热带湿度会悄悄氧化触点",
      "遥控器远离阳光直射与厨房高温；红外元件怕 UV",
      "出现故障码时直接关机，不要反复开关机——有些码可复位，有些会升级",
      "把型号与 PCB 铭牌照片存在随手可查的地方",
    ],
    costDetail: "上门诊断 RM114 起，同次维修即免收。更换遥控（通用或品牌匹配并编程）是价格最低一档。接收板或显示排线处理居中，主 PCB 维修或更换 RM455 起。我们先读故障码、解释指向，再报价配件——避免排线虚接这种小问题被当成换板来收费。"
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
    },
    overview: "瓷砖鼓成倒 V 或\"砰\"地弹起，是地板在告诉你：下面的压力赢了。马来西亚的热与湿让瓷砖每天膨胀，没有伸缩缝、或下方找平层已脱粘时，膨胀只能往上走。找平层下的积水雪上加霜：受热汽化，蒸汽压力顶起瓷砖；第一块弹起的砖落地时还可能崩裂邻砖。这也是全屋最危险的地板故障——鼓起的砖是尖锐的突发绊脚点，还没弹的松砖可能毫无预兆地崩开。修复不是胶粘：失效的找平层必须凿除、用正确粘结砂浆重新找平、瓷砖满背涂重铺。",
    diyChecks: [
      "围绕弹起砖按网格敲击检查——空鼓区才是真实施工范围，通常比可见损伤大",
      "看弹起砖底面：水泥碎掉说明找平层失效；底面平整说明只是粘结层问题",
      "查周边：瓷砖与墙之间有 5–8 毫米缓冲缝，还是顶死？",
      "清空并警示该区域——第二块砖很可能随后弹起，鼓边是割伤隐患",
    ],
    prevention: [
      "每次铺砖留 5–8 毫米周边伸缩缝（踢脚线下方），大地面加柔性缝",
      "新铺或重铺用聚合物改性粘结砂浆满背涂，不用干硬性砂浆",
      "湿区保持偏干——找平层下的水才是热天顶砖的元凶",
      "敲出空鼓的砖在弹起前换掉，不要等弹了再修",
    ],
    costDetail: "局部修补——几块弹起砖凿除失效找平层后重铺——约 RM350–RM600 起。整房空鼓区较大时约 RM1,200–RM2,800+，视面积、砖规格及能否匹配到同色砖。报价前画全空鼓区，停产砖型负责寻配，重铺工艺享标准保修。"
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
    },
    overview: "石膏板隔墙是干式、快速、轻量的分隔方式——它也以轻质墙体可预见的几种方式失效。撞击损伤最常见：搬家具、门把手、推车、掉落的工具。慢性的那个是水分：没装踢脚线的地面天天拖地、板后管道滴漏、或浴室墙没密封好——石膏芯从底部吸水、软化、酥掉。第三种是载荷：电视、柜子、搁板用普通膨胀栓挂在空心板里，直到某一天栓松脱。修复干净与否取决于损伤：切齐龙骨、木板或新板衬背、贴带、分层批平、重新刷漆到看不出修补。",
    diyChecks: [
      "轻推受损区墙面：晃动或变形说明背后骨架已受损，不只是板面",
      "检查墙脚有无软化酥掉的板——水分损伤总是从底部开始",
      "找出龙骨位置（敲击实响处）并记录损伤相对龙骨的位置",
      "先放把尺拍照记录损伤——这决定修复尺寸与报价",
    ],
    prevention: [
      "湿区石膏隔墙底部装踢脚线或防潮层",
      "重物挂到金属龙骨或木板衬背上，绝不挂在空心板+普通膨胀栓上",
      "管道滴漏或浴室密封失效发现当周即修——隔墙后的水在变成结构问题前看不见",
      "人流量区域与门把手周边用耐撞板或护面板",
    ],
    costDetail: "小面积修补——门把手孔或阳角磕碰，衬背批平到看不出——约 RM180–RM300 起。较大面积换板加龙骨加固与重刷约 RM450–RM1,200，视尺寸、高度与油漆范围。损伤源于水分时，水源（管道、密封或地面）同次处理，现场勘察后报价。尽量匹配现有漆色，工艺享标准保修。"
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
    },
    overview: "15–25 年的浴室，是在全屋最湿的房间里干了二十多年最重活的建筑，问题都写在脸上：镀锌管锈蚀出黄水、瓷砖下的防水膜寿命到期、美缝发黑长霉、老地漏水封失效下水管臭。单个投诉单独修都不贵——而这正是陷阱。对这么老的浴室，每次零修都是在赌\"下一个坏的地方在别处\"，而下一个坏的地方通常在地面以下，代价十倍。诚实的修法是整体翻新：暗管做压力测试、换掉锈管、砸到裸板、三层防水膜、72 小时闭水试验、重铺瓷砖。这是一笔用“避免接下来三笔索赔”来回报自己的浴室投入。",
    diyChecks: [
      "把水龙头放进透明玻璃杯接水：发黄发棕说明镀锌管在脱锈——该换管，不是该装滤网",
      "敲击地砖：湿区周围一圈空鼓，说明该处防水膜已失效",
      "关水状态下闻地漏：持续的污水味说明存水弯水封已失效",
      "问楼下邻居（或查 JMB 记录）有无天花渍史——这段历史就是\"一次做对\"的成本论据",
    ],
    prevention: [
      "翻新后让新防水保持可信：每 3–5 年复封美缝、硅酮胶保持完好",
      "每 5–7 年换软管与存水弯密封",
      "保持地面排水——积水的浴室地面每天都在考验防水膜",
      "公寓里发现新的层间渍立即上报，让保修与 JMB 记录对得上",
    ],
    costDetail: "针对性工程——更换锈蚀给水管与失效洁具——约 RM800–RM2,000 起。标准浴室整体翻新——砸砖、改管、三层防水膜、72 小时闭水试验、铺砖、洁具——约 RM4,500–RM8,500+，通常 7–12 个工作日。前后做管道压力测试、闭水试验留档，防水享标准书面保修。"
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
    },
    overview: "水槽柜底部发胀、腐烂或变软，是厨房最常见的慢性故障——而且几乎总是水在多年里持续获胜。存水弯滴漏、软管接头渗水、龙头底座微渗，刨花板或中纤板柜体日复一日地吸收，直到底板塌陷。老厨房里它也是头号电气故障：插座太少、回路共用、烤箱和电磁炉没有专线，灶、水壶、烤箱一起开就跳闸。好消息：水槽柜体可以单独更换而不用重做整个厨房，管道与电路升级可以同一次完成。",
    diyChecks: [
      "打开柜门看底部：发软、海绵状或胀变形带霉味的板，就是经典的泡水刨花板",
      "存水弯与龙头底座下垫干纸巾 24 小时——湿掉的纸巾会找到你看不见的滴漏",
      "数插座、列电器：一个回路带烤箱+空气炸锅+水壶的厨房，就是升级候选",
      "看受损柜体上方的台面：坚实干燥的话，换柜体不用动台面",
    ],
    prevention: [
      "水槽柜体换防水铝柜或船级多层板，底部加铝箔防潮层",
      "每 5–7 年换软管与存水弯密封，每年复紧龙头底座",
      "水槽柜内放接水盘或漏水感应器——故障慢，感应器便宜",
      "大功率电器配独立回路，别让灶具和水壶共用断路器",
    ],
    costDetail: "管道堵漏加柜底加固约 RM450–RM900 起。整体换水槽柜体（防水铝柜+重新布管）约 RM1,200–RM2,800，视柜体尺寸与管道范围。更大的厨房改造——新布局、石英石或花岗岩台面、专用电路——勘察后按区域报价，各阶段享标准保修。"
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
    },
    overview: "不平的基层是新地板的隐形杀手。SPC 锁扣与 Vinyl 地板是半刚性材料：需要平整基层，混凝土若存在凸起、空坑或超过 3 毫米的波浪，锁扣缝会在每一步下弯折。结果是地板会弹、会响，一两个季度后开缝翘边。同样的不平基层也毁瓷砖：空鼓、美缝开裂、敲击发响。正确修法是找平基层：磨掉高点、清灰、界面剂增强粘结、浇筑自流平——它自己流平、固化成致密如镜的表面。这是地板工程里唯一真正无法 DIY 的准备工作，没有合适的工具与材料做不出来。",
    diyChecks: [
      "用 2 米靠尺扫过地面：尺下缝隙超过 3 毫米，基层必须找平后才能铺新地板",
      "敲击现有地面：空鼓声标记脱粘区，变形会传导到新层",
      "拖地后看有无积水——会积水的低洼就是需要填补的坑",
      "看现有地板磨损模式：已翘边或开缝处就是基层变形的位置",
    ],
    prevention: [
      "铺任何锁扣或 Vinyl 地板前，先找平到 2 米内 3 毫米以内",
      "最终面层用自流平，不用抹子批灰——抹子永远比不过浇筑",
      "浇筑前刷高渗透界面剂，否则自流平咬不住基层",
      "伸缩缝与房间过渡保持干净平整——变形都从那里显形",
    ],
    costDetail: "局部修补找平——水泥基砂浆填低磨高——RM3.50–RM5.50/平方英尺起。整房自流平找平 RM6.50–RM12.00/平方英尺，视厚度与材料等级。铺板前我们用靠尺复验平整度——新地板的保修只和它坐着的基层一样好——工艺享标准保修。"
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
    },
    overview: "沿砖缝走的斜向阶梯裂缝——或厨房扩建与主屋之间不断变宽的缝隙——是砖石沉降问题的表现，也是唯一不能当作外观瑕疵处理的裂缝。与发丝漆裂不同，砖石沉降裂缝是墙体本身在动：扩建基础与原主屋沉降速率不同，本应拉结两者的预埋筋当初没埋，每一次热循环、每个雨季都在把接缝拉开一点。风险不在裂缝的样子，而在它的进展——监测一年后仍在移动的裂缝是活跃结构问题，不是饰面问题。正确应对是止动（拉结缝合，严重情况做地基加固评估），然后柔性密封、挂网、收面，让接缝能活动而不再张开。",
    diyChecks: [
      "用硬币和尺量裂缝：小于 3 毫米是\"观察+缝合\"范围；5 毫米以上或有水平错位，填缝前必须先做结构评估",
      "用尺加日期拍照，每月重拍——照片间的变化就是诊断",
      "检查受影响墙体的门窗：框体卡滞或关不上，说明变形仍在进行",
      "看墙体另一面与扩建基础线有无同样裂缝模式——贯穿缝是另一级别的问题",
    ],
    prevention: [
      "任何扩建在砌砖前必须用拉结筋与主体结构可靠连接",
      "扩建的排水远离原主屋基础——沉降差最喜欢潮湿的一侧",
      "新建与扩建房屋前 5 年每 3–6 个月监测一次阶梯裂缝",
      "不要用刚性砂浆填\"盖住\"还在动的裂缝——那只是把变形藏到失效那天",
    ],
    costDetail: "单条裂缝缝合——不锈钢螺旋拉结筋植于聚合物树脂、柔性缝密封加批灰——约 RM600–1,200/条起。接缝分离范围大时，整体拉结与稳定处理约 RM2,200–RM4,500+。裂缝超过 5 毫米或仍在移动时，建议先做结构工程师评估再缝合；工艺享标准保修。"
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