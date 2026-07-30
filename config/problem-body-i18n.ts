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
    }
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
    }
  },
  "ceiling-leak-after-rain": {
    symptom: "Kesan air muncul di siling selepas hujan lebat.",
    causes: ["Genting beralih atau rosak", "Flashing bumbung retak", "Longkang tersumbat", "Kebocoran dari balkoni atau bumbung rata"],
    solutions: ["Periksa dan baiki genting serta flashing", "Bersihkan longkang dan paip hujan", "Sapukan kalis air jika perlu", "Baiki siling yang rosak selepas sumber dibaiki"],
    whenToCall: ["Kesan air semakin besar setiap hujan", "Air menitis dari siling", "Bumbung rata atau balkoni terlibat"],
    localFaq: {
      q: "Bagaimana anda tahu punca kebocoran siling?",
      a: "Kami periksa bumbung, flashing, longkang dan balkoni, kemudian gunakan ujian air untuk mengesahkan sumber."
    }
  },
  "cracked-ceiling-joints": {
    symptom: "Sambungan siling plaster retak atau terbuka, terutamanya di sudut dan tepi.",
    causes: ["Pergerakan struktur rumah", "Papan plaster tidak dipasang dengan betul", "Kelembapan menyebabkan pengembangan", "Usia rumah yang sudah tua"],
    solutions: ["Bersihkan retak dan sapukan pita mesh", "Gunakan compound elastik untuk sambungan", "Skim dan cat semula", "Periksa punca pergerakan jika retak berulang"],
    whenToCall: ["Retak semakin lebar", "Siling kendur di kawasan retak", "Retak muncul semula selepas dibaiki"],
    localFaq: {
      q: "Adakah retak di sambungan siling serius?",
      a: "Biasanya tidak serius jika hanya kosmetik. Walau bagaimanapun, jika retak lebar atau berulang, ia mungkin menunjukkan pergerakan struktur."
    }
  },
  "condensation-ceiling-mold": {
    symptom: "Acuan hitam muncul di siling akibat kondensasi, terutamanya di bilik mandi atau dapur.",
    causes: ["Pengudaraan buruk", "Kelembapan tinggi dari memasak atau mandi", "Siling sejuk berbanding udara", "Tiada kipas ekzos"],
    solutions: ["Pasang atau gunakan kipas ekzos", "Buka tingkap semasa mandi atau memasak", "Sapukan cat anti-kulat", "Baiki pengudaraan keseluruhan"],
    whenToCall: ["Acuan merebak dengan cepat", "Bau acuan kuat", "Masalah berlaku walaupun dengan kipas"],
    localFaq: {
      q: "Bagaimana untuk menghalang acuan di siling bilik mandi?",
      a: "Gunakan kipas ekzos semasa dan selepas mandi, pastikan pengudaraan baik, dan sapukan cat anti-kulat."
    }
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
    }
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
    }
  },
  "loose-door-hinge": {
    symptom: "Engsel pintu longgar, pintu tidak sejajar atau berdecit.",
    causes: ["Skru longgar atau hilang", "Lubang skru rosak", "Pintu berat atau terlalu kerap digunakan", "Engsel usang"],
    solutions: ["Ketatkan atau ganti skru", "Gunakan dowel kayu untuk lubang rosak", "Ganti engsel jika perlu", "Laraskan penjajaran pintu"],
    whenToCall: ["Pintu tidak boleh ditutup dengan betul", "Engsel rosak teruk", "Pintu berat dan memerlukan engsel baharu"],
    localFaq: {
      q: "Bolehkah anda baiki engsel pintu yang longgar?",
      a: "Ya. Kami boleh ketatkan skru, gunakan dowel kayu atau ganti engsel dalam masa 30–45 minit."
    }
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
    }
  },
  "ikea-furniture-assembly-help": {
    symptom: "Perabot IKEA sukar dipasang atau tidak stabil selepas dipasang.",
    causes: ["Arahan tidak jelas", "Bahagian rosak atau hilang", "Tidak cukup alat atau pengalaman", "Ruang sempit untuk pemasangan"],
    solutions: ["Ikuti arahan langkah demi langkah", "Periksa semua bahagian sebelum mula", "Gunakan alat yang betul", "Minta bantuan profesional jika perlu"],
    whenToCall: ["Perabot besar dan rumit", "Bahagian rosak atau hilang", "Tidak ada masa atau alat"],
    localFaq: {
      q: "Berapa lama masa untuk memasang almari IKEA 3 pintu?",
      a: "Biasanya 2–4 jam untuk satu orang yang berpengalaman. Kami boleh melakukannya dalam masa 1–2 jam."
    }
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
    }
  },
  "ceiling-fan-wobbling": {
    symptom: "Kipas siling bergetar atau bergoyang semasa berputar.",
    causes: ["Bilah tidak seimbang", "Skr u pemasangan longgar", "Motor rosak", "Pemasangan tidak rata"],
    solutions: ["Periksa dan ketatkan semua skru", "Seimbangkan bilah dengan kit seimbang", "Ganti motor jika perlu", "Pastikan pemasangan rata"],
    whenToCall: ["Getaran sangat kuat", "Bunyi pelik dari motor", "Kipas hampir jatuh"],
    localFaq: {
      q: "Bolehkah anda membaiki kipas siling yang bergetar?",
      a: "Ya. Kami boleh menyeimbangkan bilah, mengetatkan skru atau menggantikan motor dalam masa 45–90 minit."
    }
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
    }
  },
  "clogged-gutter-leaking": {
    symptom: "Longkang bumbung tersumbat menyebabkan air melimpah dan meresap ke dinding.",
    causes: ["Daun dan kotoran terkumpul", "Longkang bengkok atau rosak", "Tiada penutup longkang", "Hujan lebat melebihi kapasiti"],
    solutions: ["Bersihkan longkang secara berkala", "Pasang penutup longkang", "Baiki atau ganti longkang yang rosak", "Pastikan saliran air hujan betul"],
    whenToCall: ["Air melimpah setiap hujan", "Dinding menjadi lembap", "Longkang rosak teruk"],
    localFaq: {
      q: "Berapa kerap longkang bumbung perlu dibersihkan?",
      a: "Kami sarankan membersihkan longkang sekurang-kurangnya 2 kali setahun, atau lebih kerap jika ada pokok berhampiran."
    }
  },
  "kitchen-cabinet-door-misaligned": {
    symptom: "Pintu kabinet dapur tidak sejajar, sukar ditutup atau terbuka sendiri.",
    causes: ["Engsel longgar atau rosak", "Kabinet tidak rata", "Pintu bengkok", "Skru longgar"],
    solutions: ["Ketatkan atau ganti engsel", "Laraskan penjajaran pintu", "Ratakan kabinet jika perlu", "Ganti pintu jika rosak teruk"],
    whenToCall: ["Banyak pintu tidak sejajar", "Kabinet tidak rata teruk", "Pintu rosak"],
    localFaq: {
      q: "Bolehkah anda melaraskan pintu kabinet yang tidak sejajar?",
      a: "Ya. Kami boleh melaraskan engsel dan penjajaran dalam masa 30–60 minit untuk kebanyakan kes."
    }
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
    }
  },
  "epoxy-floor-yellowing": {
    symptom: "Lantai epoxy bertukar warna menjadi kuning atau pudar.",
    causes: ["Pendedahan UV", "Pembersihan dengan bahan kimia keras", "Kualiti epoxy rendah", "Usia lantai"],
    solutions: ["Sapukan lapisan pelindung UV", "Gunakan pembersih yang sesuai", "Ganti dengan epoxy berkualiti tinggi", "Elakkan pendedahan matahari langsung"],
    whenToCall: ["Warna berubah di seluruh lantai", "Lantai menjadi licin atau melekit", "Masalah berlaku dalam masa kurang dari 2 tahun"],
    localFaq: {
      q: "Bolehkah lantai epoxy yang bertukar warna dibaiki?",
      a: "Dalam kebanyakan kes kami boleh mengisar permukaan dan menyapu lapisan baharu. Jika kerosakan teruk, mungkin perlu ganti keseluruhan."
    }
  },
  "wardrobe-door-not-closing": {
    symptom: "Pintu almari tidak tertutup dengan betul atau terbuka sendiri.",
    causes: ["Engsel tidak sejajar", "Pintu bengkok", "Magnet atau latch rosak", "Almari tidak rata"],
    solutions: ["Laraskan engsel", "Ganti magnet atau latch", "Ratakan almari", "Ganti pintu jika perlu"],
    whenToCall: ["Banyak pintu tidak sejajar", "Almari tidak rata teruk", "Pintu rosak"],
    localFaq: {
      q: "Bolehkah anda melaraskan pintu almari yang tidak sejajar?",
      a: "Ya. Kami boleh melaraskan engsel dan penjajaran dalam masa 30–60 minit untuk kebanyakan kes."
    }
  },
  "door-scraping-floor": {
    symptom: "Pintu mengikis lantai semasa dibuka atau ditutup.",
    causes: ["Engsel longgar atau rosak", "Lantai tidak rata", "Pintu bengkok", "Engsel tidak sesuai"],
    solutions: ["Ketatkan atau ganti engsel", "Laraskan ketinggian pintu", "Ratakan lantai jika perlu", "Ganti engsel dengan yang lebih sesuai"],
    whenToCall: ["Pintu sukar dibuka", "Lantai rosak teruk", "Masalah di beberapa pintu"],
    localFaq: {
      q: "Bolehkah anda membaiki pintu yang mengikis lantai?",
      a: "Ya. Kami boleh melaraskan engsel, mengurangkan ketinggian pintu atau menggantikan engsel dalam masa 30–60 minit."
    }
  },
  "sliding-window-stuck": {
    symptom: "Tingkap gelangsar tersangkut atau sukar digerakkan.",
    causes: ["Rel kotor atau rosak", "Roda rosak", "Tingkap tidak sejajar", "Serpihan tersangkut di rel"],
    solutions: ["Bersihkan rel", "Ganti roda", "Laraskan penjajaran", "Buang serpihan dari rel"],
    whenToCall: ["Tingkap tidak boleh digerakkan", "Roda rosak teruk", "Masalah di beberapa tingkap"],
    localFaq: {
      q: "Bolehkah anda membaiki tingkap gelangsar yang tersangkut?",
      a: "Ya. Kami boleh membersihkan rel, menggantikan roda atau melaraskan penjajaran dalam masa 30–60 minit."
    }
  },
  "smart-lock-not-working": {
    symptom: "Kunci pintar tidak berfungsi, bateri cepat habis atau tidak dapat dikunci.",
    causes: ["Bateri lemah", "Sambungan Bluetooth/WiFi lemah", "Perisian perlu dikemas kini", "Kunci rosak"],
    solutions: ["Ganti bateri", "Periksa sambungan rangkaian", "Kemas kini perisian", "Reset atau ganti kunci"],
    whenToCall: ["Kunci tidak berfungsi sama sekali", "Bateri habis dalam masa kurang dari 1 bulan", "Masalah berlaku selepas hujan"],
    localFaq: {
      q: "Berapa lama bateri kunci pintar biasanya bertahan?",
      a: "Bateri biasanya bertahan 6–12 bulan bergantung pada kekerapan penggunaan dan jenama."
    }
  },
  "shower-screen-leaking": {
    symptom: "Skrin pancuran mandi bocor di bahagian bawah atau sisi.",
    causes: ["Sealant gagal", "Kaca retak atau bengkok", "Rel tidak rata", "Longkang tersumbat"],
    solutions: ["Ganti sealant", "Ganti kaca jika retak", "Laraskan rel", "Bersihkan longkang"],
    whenToCall: ["Air bocor ke lantai bilik mandi", "Kaca retak", "Masalah berlaku di beberapa skrin"],
    localFaq: {
      q: "Bolehkah anda membaiki skrin pancuran yang bocor tanpa mengganti keseluruhan?",
      a: "Ya. Dalam kebanyakan kes kami hanya perlu menggantikan sealant dan melaraskan rel."
    }
  },
  "mold-in-bathroom-after-cleaning": {
    symptom: "Acuan muncul semula di bilik mandi walaupun telah dibersihkan.",
    causes: ["Kelembapan tinggi", "Pengudaraan buruk", "Kulat di dalam grout atau silikon", "Tiada rawatan anti-kulat"],
    solutions: ["Bersihkan dengan larutan anti-kulat", "Sapukan sealant anti-kulat", "Pastikan pengudaraan baik", "Kurangkan kelembapan"],
    whenToCall: ["Acuan muncul semula dalam masa kurang dari 2 minggu", "Acuan merebak ke dinding", "Bau acuan kuat"],
    localFaq: {
      q: "Bagaimana untuk menghalang acuan di bilik mandi?",
      a: "Gunakan kipas ekzos semasa dan selepas mandi, sapukan sealant anti-kulat, dan pastikan bilik mandi kering selepas digunakan."
    }
  },
  "stubborn-grout-stains-after-deep-clean": {
    symptom: "Kotoran grout sukar dibersihkan walaupun telah dibersihkan secara mendalam.",
    causes: ["Kotoran tertanam dalam grout", "Grout rosak atau berliang", "Penggunaan bahan kimia yang salah", "Kulat di dalam grout"],
    solutions: ["Gunakan pembersih grout khas", "Gosok dengan berus lembut", "Ganti grout jika rosak", "Sapukan sealant selepas dibersihkan"],
    whenToCall: ["Kotoran tidak hilang selepas beberapa kali cuba", "Grout rosak teruk", "Masalah di seluruh bilik mandi"],
    localFaq: {
      q: "Bolehkah grout yang kotor diganti tanpa mengganti jubin?",
      a: "Ya. Kami boleh mengeluarkan grout lama dan menyapu grout baharu tanpa mengganti jubin."
    }
  },
  "construction-dust-returning": {
    symptom: "Habuk pembinaan muncul semula walaupun telah dibersihkan.",
    causes: ["Habuk masih tertinggal di celah-celah", "Sistem pengudaraan membawa habuk masuk", "Pembersihan tidak menyeluruh", "Aktiviti pembinaan berterusan"],
    solutions: ["Bersihkan dengan pembersih vakum HEPA", "Tutup semua celah", "Bersihkan sistem pengudaraan", "Gunakan pembersih udara"],
    whenToCall: ["Habuk muncul semula dalam masa kurang dari 1 minggu", "Habuk tebal di seluruh rumah", "Masalah berlaku selepas hujan"],
    localFaq: {
      q: "Bagaimana untuk menghilangkan habuk pembinaan sepenuhnya?",
      a: "Kami gunakan pembersih vakum HEPA, bersihkan semua celah, dan sapukan sealant di kawasan yang sesuai."
    }
  },
  "cctv-not-recording": {
    symptom: "Kamera CCTV tidak merakam atau rakaman tidak disimpan.",
    causes: ["Kad SD penuh atau rosak", "Sambungan internet lemah", "Perisian perlu dikemas kini", "Kamera rosak"],
    solutions: ["Format atau ganti kad SD", "Periksa sambungan internet", "Kemas kini perisian", "Reset atau ganti kamera"],
    whenToCall: ["Kamera tidak merakam sama sekali", "Rakaman hilang secara tiba-tiba", "Masalah berlaku di beberapa kamera"],
    localFaq: {
      q: "Berapa lama rakaman CCTV biasanya disimpan?",
      a: "Bergantung pada saiz kad SD dan tetapan. Kad 128GB biasanya boleh menyimpan 7–14 hari rakaman berterusan."
    }
  },
  "autogate-not-closing": {
    symptom: "Pagar automatik tidak tertutup atau terbuka sendiri.",
    causes: ["Sensor rosak", "Motor lemah", "Sambungan wayar longgar", "Kekotoran di rel"],
    solutions: ["Periksa dan bersihkan sensor", "Periksa motor dan gear", "Ketatkan sambungan wayar", "Bersihkan rel"],
    whenToCall: ["Pagar tidak bergerak sama sekali", "Bunyi pelik dari motor", "Masalah berlaku setiap kali hujan"],
    localFaq: {
      q: "Bolehkah anda membaiki pagar automatik yang tidak tertutup?",
      a: "Ya. Kami boleh membaiki sensor, motor atau sambungan wayar dalam masa 1–2 jam."
    }
  },
  "rusting-window-grille": {
    symptom: "Pagar tingkap berkarat dan cat mengelupas.",
    causes: ["Pendedahan hujan dan kelembapan", "Cat asal tidak tahan cuaca", "Karat dari dalam besi", "Tiada rawatan anti-karat"],
    solutions: ["Kikis karat sehingga ke logam bersih", "Sapukan primer anti-karat", "Cat dengan cat tahan cuaca", "Ganti jika karat teruk"],
    whenToCall: ["Karat merebak di seluruh pagar", "Pagar rosak teruk", "Karat muncul semula dalam masa kurang dari 1 tahun"],
    localFaq: {
      q: "Berapa lama pagar tingkap biasanya tahan sebelum berkarat?",
      a: "Dengan rawatan anti-karat yang betul, pagar boleh tahan 5–10 tahun. Tanpa rawatan, karat boleh muncul dalam masa 1–2 tahun."
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
    }
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
    }
  },
  "ceiling-leak-after-rain": {
    symptom: "雨后天花板出现水渍。",
    causes: ["瓦片移位或损坏", "屋顶泛水板开裂", "排水沟堵塞", "平屋顶或阳台渗漏"],
    solutions: ["检查并修复瓦片和泛水板", "清洁排水沟和雨水管", "如有需要涂抹防水层", "修复水源后修补受损天花板"],
    whenToCall: ["每次下雨水渍都扩大", "天花板有水滴落", "涉及平屋顶或阳台"],
    localFaq: {
      q: "你们如何确定天花板漏水的来源？",
      a: "我们会检查屋顶、泛水板、排水沟和阳台，然后进行淋水测试确认来源。"
    }
  },
  "cracked-ceiling-joints": {
    symptom: "石膏天花板接缝处开裂或张开，尤其在角落和边缘。",
    causes: ["房屋结构移动", "石膏板安装不当", "潮湿导致膨胀", "房屋年久失修"],
    solutions: ["清洁裂缝并贴上网格带", "使用弹性填缝剂", "批灰并重新粉刷", "如果裂缝反复出现，检查移动来源"],
    whenToCall: ["裂缝越来越宽", "裂缝区域天花板下垂", "修复后裂缝再次出现"],
    localFaq: {
      q: "天花板接缝开裂是否严重？",
      a: "如果只是外观问题，通常不严重。但如果裂缝较宽或反复出现，可能表示结构移动。"
    }
  },
  "condensation-ceiling-mold": {
    symptom: "浴室或厨房天花板因冷凝出现黑色霉菌。",
    causes: ["通风不良", "烹饪或洗澡产生高湿度", "天花板温度低于空气", "没有排气扇"],
    solutions: ["安装或使用排气扇", "洗澡或烹饪时开窗", "涂抹防霉漆", "改善整体通风"],
    whenToCall: ["霉菌迅速蔓延", "霉味强烈", "即使有排气扇仍有问题"],
    localFaq: {
      q: "如何防止浴室天花板发霉？",
      a: "洗澡时和之后使用排气扇，确保通风良好，并涂抹防霉漆。"
    }
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
    }
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
    }
  },
  "loose-door-hinge": {
    symptom: "门铰链松动，门不对齐或发出吱吱声。",
    causes: ["螺丝松动或丢失", "螺丝孔损坏", "门较重或使用频繁", "铰链老化"],
    solutions: ["拧紧或更换螺丝", "用木塞修复损坏孔", "更换铰链", "调整门对齐"],
    whenToCall: ["门无法正确关闭", "铰链严重损坏", "门较重需要新铰链"],
    localFaq: {
      q: "你们能修复松动的门铰链吗？",
      a: "可以。我们可以在 30–45 分钟内拧紧螺丝、使用木塞或更换铰链。"
    }
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
    }
  },
  "ikea-furniture-assembly-help": {
    symptom: "IKEA 家具难以组装或组装后不稳定。",
    causes: ["说明书不清晰", "零件损坏或丢失", "缺乏工具或经验", "组装空间狭小"],
    solutions: ["按步骤跟随说明书", "开始前检查所有零件", "使用正确工具", "如有需要寻求专业帮助"],
    whenToCall: ["家具较大且复杂", "零件损坏或丢失", "没有时间或工具"],
    localFaq: {
      q: "组装一个 3 门 IKEA 衣柜需要多长时间？",
      a: "有经验的人通常需要 2–4 小时。我们可以在 1–2 小时内完成。"
    }
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
    }
  },
  "ceiling-fan-wobbling": {
    symptom: "吊扇旋转时振动或摇晃。",
    causes: ["扇叶不平衡", "安装螺丝松动", "电机损坏", "安装不平"],
    solutions: ["检查并拧紧所有螺丝", "用平衡套件平衡扇叶", "如有需要更换电机", "确保安装平整"],
    whenToCall: ["振动非常剧烈", "电机发出奇怪声音", "吊扇几乎掉落"],
    localFaq: {
      q: "你们能修复摇晃的吊扇吗？",
      a: "可以。我们可以在 45–90 分钟内平衡扇叶、拧紧螺丝或更换电机。"
    }
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
    }
  },
  "clogged-gutter-leaking": {
    symptom: "屋顶排水沟堵塞导致水溢出并渗入墙壁。",
    causes: ["树叶和污垢堆积", "排水沟弯曲或损坏", "无排水沟盖", "暴雨超过排水能力"],
    solutions: ["定期清洁排水沟", "安装排水沟盖", "修复或更换损坏排水沟", "确保雨水排水正确"],
    whenToCall: ["每次下雨水都溢出", "墙壁变得潮湿", "排水沟严重损坏"],
    localFaq: {
      q: "屋顶排水沟需要多久清洁一次？",
      a: "我们建议至少每年清洁 2 次，如果附近有树木则需要更频繁。"
    }
  },
  "kitchen-cabinet-door-misaligned": {
    symptom: "厨房橱柜门不对齐，难以关闭或自行打开。",
    causes: ["铰链松动或损坏", "橱柜不平", "门扇弯曲", "螺丝松动"],
    solutions: ["拧紧或更换铰链", "调整门扇对齐", "如有需要找平橱柜", "如有需要更换门扇"],
    whenToCall: ["多扇门不对齐", "橱柜严重不平", "门扇损坏"],
    localFaq: {
      q: "你们能调整不对齐的橱柜门吗？",
      a: "可以。我们可以在 30–60 分钟内调整铰链和对齐。"
    }
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
    }
  },
  "epoxy-floor-yellowing": {
    symptom: "环氧地坪变黄或褪色。",
    causes: ["紫外线暴露", "使用强力化学清洁剂", "环氧质量低", "地坪老化"],
    solutions: ["涂抹 UV 保护层", "使用合适清洁剂", "更换为优质环氧", "避免阳光直射"],
    whenToCall: ["整个地坪变色", "地坪变得光滑或粘腻", "问题在不到 2 年内出现"],
    localFaq: {
      q: "变色的环氧地坪可以修复吗？",
      a: "在大多数情况下，我们可以打磨表面并涂抹新层。如果损坏严重，可能需要更换整个地坪。"
    }
  },
  "wardrobe-door-not-closing": {
    symptom: "衣柜门无法正确关闭或自行打开。",
    causes: ["铰链不对齐", "门扇弯曲", "磁铁或插销损坏", "衣柜不平"],
    solutions: ["调整铰链", "更换磁铁或插销", "找平衣柜", "如有需要更换门扇"],
    whenToCall: ["多扇门不对齐", "衣柜严重不平", "门扇损坏"],
    localFaq: {
      q: "你们能调整无法关闭的衣柜门吗？",
      a: "可以。我们可以在 30–60 分钟内调整铰链和对齐。"
    }
  },
  "door-scraping-floor": {
    symptom: "门在开关时刮到地板。",
    causes: ["铰链松动或损坏", "地板不平", "门扇弯曲", "铰链不合适"],
    solutions: ["拧紧或更换铰链", "调整门扇高度", "如有需要找平地板", "更换更合适的铰链"],
    whenToCall: ["门难以打开", "地板严重损坏", "多个门都有问题"],
    localFaq: {
      q: "你们能修复刮到地板的门吗？",
      a: "可以。我们可以在 30–60 分钟内调整铰链、降低门扇高度或更换铰链。"
    }
  },
  "sliding-window-stuck": {
    symptom: "推拉窗卡住或难以移动。",
    causes: ["轨道脏污或损坏", "滑轮损坏", "窗户不对齐", "轨道内有碎屑卡住"],
    solutions: ["清洁轨道", "更换滑轮", "调整对齐", "清除轨道内碎屑"],
    whenToCall: ["窗户无法移动", "滑轮严重损坏", "多个窗户都有问题"],
    localFaq: {
      q: "你们能修复卡住的推拉窗吗？",
      a: "可以。我们可以在 30–60 分钟内清洁轨道、更换滑轮或调整对齐。"
    }
  },
  "smart-lock-not-working": {
    symptom: "智能锁不工作、电池快速耗尽或无法上锁。",
    causes: ["电池电量低", "蓝牙/WiFi 连接弱", "软件需要更新", "锁具损坏"],
    solutions: ["更换电池", "检查网络连接", "更新软件", "重置或更换锁具"],
    whenToCall: ["锁完全不工作", "电池在不到 1 个月内耗尽", "雨后出现问题"],
    localFaq: {
      q: "智能锁电池通常能使用多久？",
      a: "电池通常可使用 6–12 个月，具体取决于使用频率和品牌。"
    }
  },
  "shower-screen-leaking": {
    symptom: "淋浴屏风底部或侧面漏水。",
    causes: ["密封胶失效", "玻璃开裂或弯曲", "轨道不平", "地漏堵塞"],
    solutions: ["更换密封胶", "如有需要更换玻璃", "调整轨道", "清洁地漏"],
    whenToCall: ["水漏到浴室地板", "玻璃开裂", "多个屏风都有问题"],
    localFaq: {
      q: "你们能在不更换整个屏风的情况下修复漏水的淋浴屏风吗？",
      a: "可以。在大多数情况下，我们只需更换密封胶并调整轨道。"
    }
  },
  "mold-in-bathroom-after-cleaning": {
    symptom: "即使已深度清洁，浴室霉菌仍反复出现。",
    causes: ["湿度高", "通风不良", " grout 或硅胶内有霉菌", "未使用防霉处理"],
    solutions: ["用防霉溶液清洁", "涂抹防霉密封胶", "确保通风良好", "降低湿度"],
    whenToCall: ["霉菌在不到 2 周内再次出现", "霉菌蔓延到墙壁", "霉味强烈"],
    localFaq: {
      q: "如何防止浴室发霉？",
      a: "洗澡时和之后使用排气扇，涂抹防霉密封胶，并确保浴室使用后保持干燥。"
    }
  },
  "stubborn-grout-stains-after-deep-clean": {
    symptom: "即使已深度清洁， grout 污渍仍难以去除。",
    causes: ["污渍嵌入 grout 内", " grout 损坏或多孔", "使用了错误的化学清洁剂", " grout 内有霉菌"],
    solutions: ["使用专用 grout 清洁剂", "用软刷轻轻刷洗", "如有需要更换 grout", "清洁后涂抹密封剂"],
    whenToCall: ["多次尝试后污渍仍未去除", " grout 严重损坏", "整个浴室都有问题"],
    localFaq: {
      q: "污渍严重的 grout 可以在不更换瓷砖的情况下更换吗？",
      a: "可以。我们可以移除旧 grout 并涂抹新 grout，而无需更换瓷砖。"
    }
  },
  "construction-dust-returning": {
    symptom: "即使已清洁，建筑灰尘仍反复出现。",
    causes: ["灰尘仍留在缝隙中", "通风系统带入灰尘", "清洁不彻底", "建筑活动持续进行"],
    solutions: ["使用 HEPA 吸尘器清洁", "封闭所有缝隙", "清洁通风系统", "使用空气净化器"],
    whenToCall: ["不到 1 周灰尘再次出现", "整个房屋灰尘厚重", "雨后出现问题"],
    localFaq: {
      q: "如何彻底清除建筑灰尘？",
      a: "我们使用 HEPA 吸尘器、清洁所有缝隙，并在合适区域涂抹密封剂。"
    }
  },
  "cctv-not-recording": {
    symptom: "CCTV 摄像头不录像或录像未保存。",
    causes: ["SD 卡已满或损坏", "互联网连接弱", "软件需要更新", "摄像头损坏"],
    solutions: ["格式化或更换 SD 卡", "检查互联网连接", "更新软件", "重置或更换摄像头"],
    whenToCall: ["摄像头完全不录像", "录像突然消失", "多个摄像头都有问题"],
    localFaq: {
      q: "CCTV 录像通常能保存多久？",
      a: "取决于 SD 卡容量和设置。128GB 卡通常可保存 7–14 天的连续录像。"
    }
  },
  "autogate-not-closing": {
    symptom: "自动门无法关闭或自行打开。",
    causes: ["传感器损坏", "电机无力", "电线连接松动", "轨道内有污垢"],
    solutions: ["检查并清洁传感器", "检查电机和齿轮", "拧紧电线连接", "清洁轨道"],
    whenToCall: ["门完全不移动", "电机发出奇怪声音", "雨后出现问题"],
    localFaq: {
      q: "你们能修复无法关闭的自动门吗？",
      a: "可以。我们可以在 1–2 小时内修复传感器、电机或电线连接。"
    }
  },
  "rusting-window-grille": {
    symptom: "窗户铁栅生锈且油漆剥落。",
    causes: ["暴露在雨水和潮湿中", "原厂油漆不耐候", "铁内部生锈", "未进行防锈处理"],
    solutions: ["刮除铁锈至干净金属", "涂抹防锈底漆", "使用耐候油漆涂刷", "如有需要更换"],
    whenToCall: ["铁锈蔓延到整个铁栅", "铁栅严重损坏", "不到 1 年再次出现铁锈"],
    localFaq: {
      q: "窗户铁栅通常能使用多久才开始生锈？",
      a: "经过正确防锈处理，铁栅可使用 5–10 年。如果没有处理，1–2 年内可能出现铁锈。"
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