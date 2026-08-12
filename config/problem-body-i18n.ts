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
    }
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
    }
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
    }
  },
  "downlight-flickering": {
    symptom: "Downlight berkelip-kelip, menyala dan padam, atau tidak menyala dengan terang.",
    causes: ["Driver LED rosak atau tidak serasi", "Sambungan wayar longgar di terminal", "Dimmer tidak serasi dengan lampu LED", "Lampu LED hampir habis jangka hayat"],
    solutions: ["Ganti driver LED dengan yang serasi", "Periksa dan ketatkan semua sambungan wayar", "Tukar dimmer kepada model LED-compatible", "Gantikan lampu LED yang rosak"],
    whenToCall: ["Kelip berlaku setiap hari", "Beberapa lampu berkelip serentak", "Lampu terasa panas luar biasa"],
    localFaq: {
      q: "Adakah lampu berkelip berbahaya?",
      a: "Kelip biasanya menunjukkan sambungan longgar atau driver rosak. Sambungan longgar boleh menyebabkan panas dan risiko kebakaran — sila diperiksa segera."
    }
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
  "stubborn-bathroom-limescale": {
    symptom: "Limescale keras pada paip, kepala shower, skrin kaca atau jubin yang tidak boleh dibersihkan dengan pencuci biasa.",
    causes: ["Air keras (high mineral content) di kawasan anda", "Pembinaan mineral berpanjangan tanpa pembersihan", "Permukaan krom atau kaca berpori", "Produk pembersihan salah yang tidak berkesan"],
    solutions: ["Bersihkan mendalam dengan penyahskala berasid ringan", "Steam clean grout dan jubin", "Polish krom dan kaca dengan compound khas", "Cadangkan water softener untuk pencegahan jangka panjang"],
    whenToCall: ["Pembersihan biasa tidak lagi berkesan", "Bersedia untuk pameran/jualan hartanah", "Mahukan pembersihan profesional sebelum Hari Raya / CNY"],
    localFaq: {
      q: "Bagaimana mencegah limescale kembali?",
      a: "Lap kaca shower selepas setiap penggunaan, bersihkan paip setiap minggu, dan pertimbangkan water softener untuk perlindungan jangka panjang."
    }
  },
  "move-out-condo-deep-clean": {
    symptom: "Anda berpindah keluar dan perlu kondominium dibersihkan ke standard yang diterima oleh pemilik/ejen untuk pemulangan deposit.",
    causes: ["Kesan penggunaan penyewa biasa", "Pembinaan gris di dapur", "Pembinaan limescale di bilik mandi", "Kesan pada dinding dari perabot dan cangkuk"],
    solutions: ["Pembersihan mendalam bilik demi bilik", "Pembersihan tompok dinding untuk kesan calar", "Nyahgris dapur termasuk dapur dan hood", "Pembersihan mendalam bilik mandi dengan penyahskala", "Jalan akhir dengan pemilik/ejen"],
    whenToCall: ["Kurang dari seminggu sebelum serahan kunci", "Mahukan pemulangan deposit maksimum", "Unit bersaiz 800+ kaki persegi"],
    localFaq: {
      q: "Adakah anda juga menguruskan sentuhan dinding?",
      a: "Pembuangan kesan calar asas termasuk. Pengecatan semula dikutip secara berasingan jika kerosakan dinding melebihi pembersihan."
    }
  },
  "cement-splatter-tile-clean": {
    symptom: "Renovasi siap tetapi percikan simen/cat, sisa silikon dan habuk pembinaan ada di mana-mana.",
    causes: ["Sisa pembinaan biasa", "Titis silikon dan pelekat", "Percikan simen pada tingkap/jubin", "Habuk halus di seluruh unit"],
    solutions: ["Vakum HEPA penuh setiap permukaan", "Buang kesan simen dari jubin dan kaca", "Kikis sisa silikon dan bersihkan dengan pelarut", "Mop basah dan lap terperinci penuh", "Pembersihan udara dengan unit penapis HEPA"],
    whenToCall: ["Renovasi baru sahaja siap", "Perlu masuk dalam masa seminggu", "Pembersihan kontraktor tidak mencukupi"],
    localFaq: {
      q: "Adakah pembersihan kontraktor sudah cukup?",
      a: "Jarang. Pembersihan kontraktor biasanya hanya pembuangan sisa asas. Pembersihan mendalam pasca-renovasi menjadikan unit anda benar-benar sedia untuk masuk."
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
    }
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
    }
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
    }
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
    }
  },
  "downlight-flickering": {
    symptom: "筒灯闪烁、反复亮灭或亮度不足。",
    causes: ["LED 驱动器损坏或不兼容", "接线端子松动", "调光器与 LED 灯不兼容", "LED 灯接近使用寿命"],
    solutions: ["更换兼容的 LED 驱动器", "检查并拧紧所有接线", "将调光器更换为 LED 兼容型号", "更换损坏的 LED 灯"],
    whenToCall: ["闪烁每天发生", "多盏灯同时闪烁", "灯感觉异常热"],
    localFaq: {
      q: "灯闪烁危险吗？",
      a: "闪烁通常表示连接松动或驱动器损坏。松动连接可能导致过热和火灾风险——请立即检查。"
    }
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
  "stubborn-bathroom-limescale": {
    symptom: "水龙头、花洒、玻璃屏风或瓷砖上有普通清洁剂无法去除的坚硬水垢。",
    causes: ["您所在地区水质硬（高矿物质含量）", "矿物质长期积累未清洁", "镀铬或玻璃表面多孔", "使用了无效的清洁产品"],
    solutions: ["用温和酸性除垢剂深度清洁", "蒸汽清洁瓷砖缝隙和瓷砖", "用专用化合物抛光镀铬和玻璃", "建议安装软水器长期预防"],
    whenToCall: ["常规清洁不再有效", "准备房产展示/出售", "想在Hari Raya/CNY前专业深度清洁"],
    localFaq: {
      q: "如何防止水垢复发？",
      a: "每次淋浴后刮擦玻璃、每周擦拭水龙头，并考虑安装全屋软水器长期保护。"
    }
  },
  "move-out-condo-deep-clean": {
    symptom: "您需要搬出，需要将公寓清洁到房东/中介接受的标准以退还押金。",
    causes: ["租客正常使用痕迹", "厨房油脂积累", "浴室水垢积累", "家具和挂钩在墙上留下痕迹"],
    solutions: ["逐房间深度清洁", "擦拭墙面污痕", "厨房去油包括灶台和抽油烟机", "浴室深度清洁使用除垢剂", "与房东/中介最终检查"],
    whenToCall: ["距离交钥匙不到一周", "希望最大程度退还押金", "单元 800 平方英尺以上"],
    localFaq: {
      q: "你们也处理墙面修补吗？",
      a: "基本污痕去除包含在内。如果墙面损坏超出清洁范围，重新涂刷另行报价。"
    }
  },
  "cement-splatter-tile-clean": {
    symptom: "翻新完成但到处都是水泥/油漆溅点、硅胶残留和建筑灰尘。",
    causes: ["正常翻新垃圾", "硅胶和粘合剂滴落", "水泥溅到窗户/瓷砖上", "整个单元的细灰尘"],
    solutions: ["每个表面全面 HEPA 吸尘", "清除瓷砖和玻璃上的水泥痕迹", "刮除硅胶残留并用溶剂清洁", "全面湿拖和细节擦拭", "用 HEPA 过滤单元清洁空气"],
    whenToCall: ["翻新刚完成", "需要在一周内搬入", "承包商清洁不够彻底"],
    localFaq: {
      q: "承包商的清洁算翻新后清洁吗？",
      a: "通常不算。承包商清洁通常只是基本垃圾清除。翻新后深度清洁才真正让单元可以入住。"
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
    }
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