/**
 * SUBURB BODY i18n — Full native MS + ZH for all 49 suburbs
 * 
 * Covers: housingProfile, commonIssues (array), and area-specific FAQ
 * Written in the same high-quality, locally relevant style as area-body-i18n.
 */

import type { Locale } from "@/lib/i18n";

export type LocalizedSuburbBody = {
  housingProfile: string;
  commonIssues: string[];
  localFaq?: { q: string; a: string };
};

const SUBURB_BODY_MS: Record<string, LocalizedSuburbBody> = {
  "kuala-lumpur": {
    housingProfile: "Kuala Lumpur merangkumi pejabat tinggi, kondominium mewah, kedai lama dan rumah landed dengan peraturan pengurusan bangunan yang ketat.",
    commonIssues: ["Kebocoran air selepas hujan lebat", "Cat mengelupas akibat kelembapan", "Lekapan bilik mandi yang usang", "Kesan siling daripada kebocoran"],
    localFaq: {
      q: "Adakah anda boleh bekerja di bangunan tinggi dengan peraturan JMB yang ketat?",
      a: "Ya. Kami sentiasa menyelaraskan dengan pengurusan, menempah lif dan melindungi kawasan umum sebelum memulakan kerja."
    }
  },
  "cheras": {
    housingProfile: "Cheras mempunyai kejiranan teres padat dan kondominium di mana kebocoran paip, pengecatan semula dan pembaikan siling adalah perkara biasa.",
    commonIssues: ["Kebocoran paip", "Pengecatan semula", "Pembaikan siling", "Longkang tersumbat"],
    localFaq: {
      q: "Berapa lama masa untuk mengecat semula rumah teres di Cheras?",
      a: "Biasanya 2 hingga 4 hari bergantung pada saiz dan keadaan dinding. Kami akan berikan sebut harga tetap selepas lawatan tapak."
    }
  },
  "ampang": {
    housingProfile: "Ampang merangkumi rumah landed, pangsapuri dan hartanah di lereng bukit yang sering memerlukan kalis air, cat luaran dan penyelenggaraan kerja tangan.",
    commonIssues: ["Kebocoran bumbung", "Cat luaran pudar", "Kebocoran balkoni", "Pembaikan pagar"],
    localFaq: {
      q: "Adakah anda boleh baiki kebocoran di hartanah bukit di Ampang?",
      a: "Ya. Kami pakar dalam kalis air lereng bukit dan menggunakan kaedah suntikan PU tanpa merosakkan struktur."
    }
  },
  "setapak": {
    housingProfile: "Setapak mempunyai perumahan pelajar, pangsapuri dan lot kedai dengan permintaan berulang untuk kerja paip, kunci dan pengecatan.",
    commonIssues: ["Paip tersumbat", "Kunci rosak", "Cat mengelupas", "Kebocoran siling"],
    localFaq: {
      q: "Bolehkah anda baiki paip yang tersumbat di pangsapuri pelajar?",
      a: "Boleh. Kami menggunakan jetting bertekanan tinggi dan boleh menyelesaikan kebanyakan kes dalam satu lawatan."
    }
  },
  "wangsa-maju": {
    housingProfile: "Wangsa Maju mempunyai kondominium dan rumah teres yang memerlukan kaedah kerja mesra kondominium, pembaikan rendah mess dan slot perkhidmatan hari yang sama.",
    commonIssues: ["Kebocoran bilik mandi", "Cat dinding retak", "Pemasangan TV", "Pembaikan pintu"],
    localFaq: {
      q: "Berapa cepat anda boleh datang ke Wangsa Maju?",
      a: "Untuk kecemasan, biasanya dalam masa 45–75 minit. Untuk kerja terancang, slot tersedia dalam 1–2 hari bekerja."
    }
  },
  "kepong": {
    housingProfile: "Kepong mempunyai rumah teres matang dan barisan komersial di mana paip lama, dinding lembap dan pengecatan semula adalah perkara biasa.",
    commonIssues: ["Paip besi berkarat", "Dinding lembap", "Siling bocor", "Pengecatan luaran"],
    localFaq: {
      q: "Bolehkah anda gantikan paip besi lama di rumah teres Kepong?",
      a: "Ya. Kami gantikan dengan paip PPR atau PVC-u SIRIM dan uji tekanan sebelum menutup dinding."
    }
  },
  "sri-petaling": {
    housingProfile: "Sri Petaling mempunyai pangsapuri sibuk dan rumah teres dengan permintaan tinggi untuk kerja tangan, paip dan pengecatan dalaman.",
    commonIssues: ["Pemasangan TV", "Pembaikan paip", "Pengecatan dalaman", "Pembaikan kunci"],
    localFaq: {
      q: "Adakah anda boleh pasang TV di dinding gypsum?",
      a: "Ya. Kami menggunakan anchor berat-duty yang sesuai untuk dinding gypsum dan memastikan pemasangan selamat."
    }
  },
  "bukit-jalil": {
    housingProfile: "Bukit Jalil mempunyai kondominium baharu dan rumah landed yang memerlukan perlindungan teliti, pematuhan JMB, pemasangan TV dan sentuhan cat.",
    commonIssues: ["Kecacatan serahan", "Pemasangan TV", "Pembaikan siling", "Cat sentuhan"],
    localFaq: {
      q: "Bolehkah anda baiki kecacatan penyerahan di kondominium baharu?",
      a: "Ya. Kami biasa dengan proses QC pemaju dan boleh membaiki retak halus, pintu tidak sejajar dan kemasan cat."
    }
  },
  "mont-kiara": {
    housingProfile: "Mont Kiara mempunyai kondominium mewah premium yang memerlukan kelulusan pengurusan, perlindungan lif dan kerja tanpa mess.",
    commonIssues: ["Kebocoran bilik mandi", "Pengecatan rendah VOC", "Pemasangan TV dinding", "Pembaikan drywall"],
    localFaq: {
      q: "Adakah anda boleh bekerja di Mont Kiara tanpa mengganggu jiran?",
      a: "Ya. Kami menggunakan cat rendah bau, melindungi koridor dan menjadualkan kerja bising pada waktu yang dibenarkan."
    }
  },
  "bangsar": {
    housingProfile: "Bangsar mempunyai rumah landed lama, pangsapuri dan lot kedai yang sering memerlukan pengecatan semula, tampalan siling dan naik taraf lekapan.",
    commonIssues: ["Cat mengelupas", "Siling retak", "Lekapan bilik mandi", "Pembaikan pintu"],
    localFaq: {
      q: "Bolehkah anda baiki rumah berusia 40 tahun di Bangsar?",
      a: "Ya. Kami pakar dalam kerja pemulihan rumah lama termasuk rawatan lembap dan pengecatan semula dengan salutan kalis cuaca."
    }
  },
  "desa-parkcity": {
    housingProfile: "Desa ParkCity mempunyai kondominium dan rumah landed premium yang memerlukan krew kemas, berjadual dan perlindungan permukaan yang teliti.",
    commonIssues: ["Pengecatan dalaman", "Pemasangan TV", "Pembaikan kunci", "Pembersihan dalam"],
    localFaq: {
      q: "Adakah anda boleh bekerja di Desa ParkCity mengikut garis panduan komuniti?",
      a: "Ya. Kami menghantar permohonan kerja terlebih dahulu, mematuhi waktu senyap dan membersihkan tapak setiap hari."
    }
  },
  "taman-melawati": {
    housingProfile: "Taman Melawati mempunyai rumah landed berhampiran kawasan bukit yang sering memerlukan kalis air luaran, pemeriksaan kebocoran bumbung dan pengecatan semula.",
    commonIssues: ["Kebocoran bumbung", "Dinding lembap", "Cat luaran pudar", "Longkang tersumbat"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran bumbung di rumah berhampiran Bukit Tabur?",
      a: "Ya. Kami memeriksa genting, flashing dan longkang sebelum mencadangkan pembaikan atau kalis air."
    }
  },
  "hulu-kelang": {
    housingProfile: "Hulu Kelang mempunyai hartanah di lereng bukit yang memerlukan kalis air, pembaikan kebocoran bumbung dan salutan luaran yang kukuh.",
    commonIssues: ["Kebocoran lereng bukit", "Rembesan bumbung", "Cat luaran", "Pembaikan pagar"],
    localFaq: {
      q: "Adakah anda boleh baiki kebocoran di hartanah bukit?",
      a: "Ya. Kami menggunakan kaedah suntikan PU dan membran kalis air yang sesuai untuk lereng bukit."
    }
  },
  "petaling-jaya": {
    housingProfile: "Petaling Jaya mempunyai teres matang, kondominium dan lot pejabat dengan keperluan pembaikan cat, paip dan siling yang kerap.",
    commonIssues: ["Cat dinding retak", "Paip bocor", "Siling kendur", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda baiki paip di rumah teres PJ yang sudah tua?",
      a: "Ya. Kami boleh gantikan paip lama dengan PPR dan menguji tekanan sebelum menutup dinding."
    }
  },
  "subang-jaya": {
    housingProfile: "Subang Jaya mempunyai rumah keluarga, pangsapuri pelajar dan pejabat komersial dengan permintaan tetap untuk paip, siling dan kerja tangan.",
    commonIssues: ["Pembuangan air panas", "Paip tersumbat", "Siling bocor", "Pemasangan perabot"],
    localFaq: {
      q: "Adakah anda boleh pasang pemanas air serta-merta di Subang Jaya?",
      a: "Ya. Kami pasang jenama Joven, Rheem dan Rinnai dengan jaminan 12 bulan."
    }
  },
  "shah-alam": {
    housingProfile: "Shah Alam mempunyai rumah landed, lot industri dan pejabat di mana cat luaran, kebocoran bumbung dan kerja partition adalah perkara biasa.",
    commonIssues: ["Cat luaran pudar", "Kebocoran bumbung", "Partition pejabat", "Pembaikan paip"],
    localFaq: {
      q: "Bolehkah anda bina partition untuk pejabat di Shah Alam?",
      a: "Ya. Kami bina partition gypsum kalis api dan siap dengan skim-coat dalam masa 3–7 hari."
    }
  },
  "puchong": {
    housingProfile: "Puchong mempunyai teres, kondominium dan lot kedai dengan keperluan penyelenggaraan paip, kunci, pintu dan kalis air yang kerap.",
    commonIssues: ["Kunci rosak", "Pintu mengikis", "Kebocoran bilik mandi", "Cat dalaman"],
    localFaq: {
      q: "Bolehkah anda baiki pintu yang mengikis di Puchong?",
      a: "Ya. Kami meratakan pintu, melaraskan engsel dan meratakan lantai jika perlu."
    }
  },
  "damansara": {
    housingProfile: "Damansara mempunyai rumah matang dan lot runcit di mana paip lama, retak siling dan projek pengecatan semula adalah perkara biasa.",
    commonIssues: ["Paip lama", "Retak siling", "Cat mengelupas", "Pembaikan elektrik"],
    localFaq: {
      q: "Bolehkah anda gantikan paip di rumah teres Damansara yang sudah tua?",
      a: "Ya. Kami gantikan paip besi dengan PPR dan boleh menyelesaikan dalam 2–4 hari."
    }
  },
  "kota-damansara": {
    housingProfile: "Kota Damansara mempunyai kondominium, townhouse dan unit komersial yang memerlukan pembaikan mesra kondominium dan pengecatan berjadual.",
    commonIssues: ["Kebocoran papak", "Pengecatan unit", "Pemasangan TV", "Pembaikan paip"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran papak di kondominium Kota Damansara?",
      a: "Ya. Kami gunakan suntikan PU tanpa memecah jubin jika keadaan mengizinkan."
    }
  },
  "ara-damansara": {
    housingProfile: "Ara Damansara mempunyai kondominium moden dan pejabat yang memerlukan perlindungan lif yang teliti, pemasangan dinding dan pembaikan paip.",
    commonIssues: ["Kebocoran balkoni", "Pemasangan dinding", "Pembaikan paip", "Pengecatan"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran balkoni di Ara Damansara?",
      a: "Ya. Kami periksa saliran dan membran, kemudian cadangkan kaedah pembaikan yang sesuai."
    }
  },
  "sunway": {
    housingProfile: "Sunway mempunyai kondominium padat, perumahan pelajar dan ruang komersial yang memerlukan sokongan kerja tangan, paip dan pengecatan pantas.",
    commonIssues: ["Pemasangan TV", "Paip tersumbat", "Pengecatan", "Pembersihan"],
    localFaq: {
      q: "Bolehkah anda baiki paip tersumbat di perumahan pelajar Sunway?",
      a: "Ya. Kami gunakan jetting dan boleh menyelesaikan kebanyakan kes dalam satu lawatan."
    }
  },
  "usj": {
    housingProfile: "USJ mempunyai rumah teres dan pangsapuri dengan penyelenggaraan pemanas air, paip, siling dan pengecatan yang biasa.",
    commonIssues: ["Pemanas air rosak", "Paip bocor", "Siling kendur", "Cat dalaman"],
    localFaq: {
      q: "Bolehkah anda gantikan pemanas air di USJ?",
      a: "Ya. Kami pasang jenama Joven, Rheem dan Rinnai dengan jaminan 12 bulan."
    }
  },
  "bandar-utama": {
    housingProfile: "Bandar Utama mempunyai kondominium dan rumah landed dengan pemasangan TV, sentuhan cat dan penggantian lekapan paip yang kerap.",
    commonIssues: ["Pemasangan TV", "Cat sentuhan", "Lekapan paip", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda pasang TV di dinding di Bandar Utama?",
      a: "Ya. Kami gunakan anchor berat-duty dan boleh menyelesaikan dalam 45–60 minit."
    }
  },
  "ss2": {
    housingProfile: "SS2 mempunyai rumah teres matang dan lot kedai di mana paip lama, kelembapan bumbung dan pengecatan semula adalah perkara biasa.",
    commonIssues: ["Paip besi lama", "Rembesan bumbung", "Cat mengelupas", "Longkang tersumbat"],
    localFaq: {
      q: "Bolehkah anda gantikan paip besi di rumah teres SS2?",
      a: "Ya. Kami gantikan dengan paip PPR dan uji tekanan sebelum menutup dinding."
    }
  },
  "klang": {
    housingProfile: "Klang mempunyai rumah yang dipengaruhi kelembapan pantai dan kawasan komersial yang memerlukan cat anti-lembap, paip dan penjagaan siling.",
    commonIssues: ["Paip berkarat", "Dinding lembap", "Cat luaran", "Kebocoran siling"],
    localFaq: {
      q: "Bolehkah anda baiki paip yang berkarat di Klang?",
      a: "Ya. Kami gantikan dengan paip tahan karat dan gunakan salutan anti-karat."
    }
  },
  "port-klang": {
    housingProfile: "Port Klang mempunyai hartanah pantai dan industri yang memerlukan kelengkapan tahan kakisan dan kawalan kelembapan.",
    commonIssues: ["Kakisan paip", "Kebocoran bumbung", "Cat luaran", "Pembaikan pagar"],
    localFaq: {
      q: "Bolehkah anda gantikan paip di kawasan pantai Port Klang?",
      a: "Ya. Kami gunakan paip PVC-u atau PPR yang tahan kakisan dan sesuai untuk persekitaran pantai."
    }
  },
  "bukit-tinggi": {
    housingProfile: "Bukit Tinggi mempunyai bandar moden dan barisan komersial dengan penyelenggaraan paip, pengecatan dan kalis air yang kerap.",
    commonIssues: ["Kebocoran paip", "Cat dinding", "Kebocoran bumbung", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran bumbung di Bukit Tinggi?",
      a: "Ya. Kami periksa genting, flashing dan longkang sebelum mencadangkan pembaikan."
    }
  },
  "setia-alam": {
    housingProfile: "Setia Alam mempunyai rumah landed baharu dan kondominium yang memerlukan pengecatan bersih, pemasangan TV, kunci pintu dan perkhidmatan siling.",
    commonIssues: ["Pengecatan dalaman", "Pemasangan TV", "Kunci pintu", "Pembaikan siling"],
    localFaq: {
      q: "Bolehkah anda baiki kunci pintu di Setia Alam?",
      a: "Ya. Kami boleh gantikan atau baiki kunci dalam masa 30–45 minit."
    }
  },
  "meru": {
    housingProfile: "Meru mempunyai hartanah landed dan separa industri di mana kebocoran bumbung, cat luaran dan pembaikan paip sering berlaku.",
    commonIssues: ["Kebocoran bumbung", "Cat luaran", "Paip bocor", "Pembaikan pagar"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran bumbung di Meru?",
      a: "Ya. Kami periksa keseluruhan bumbung dan berikan jaminan bertulis selepas pembaikan."
    }
  },
  "kota-kemuning": {
    housingProfile: "Kota Kemuning mempunyai rumah landed dan komuniti berpagar yang memerlukan perkhidmatan pengecatan, paip dan kerja tangan yang berjadual serta rendah mess.",
    commonIssues: ["Pengecatan luaran", "Pembaikan paip", "Pemasangan TV", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda berikan perkhidmatan berjadual di Kota Kemuning?",
      a: "Ya. Kami boleh jadualkan lawatan berkala untuk penyelenggaraan dengan satu sebut harga."
    }
  },
  "bukit-jelutong": {
    housingProfile: "Bukit Jelutong mempunyai semi-D, banglo dan pejabat di mana salutan luaran dan kerja kemasan premium adalah perkara biasa.",
    commonIssues: ["Cat luaran", "Kebocoran bumbung", "Pembaikan pagar", "Pengecatan dalaman"],
    localFaq: {
      q: "Bolehkah anda cat semula banglo di Bukit Jelutong?",
      a: "Ya. Kami gunakan salutan tahan cuaca dan berikan jaminan sehingga 5 tahun."
    }
  },
  "glenmarie": {
    housingProfile: "Glenmarie mempunyai pejabat komersial, showroom dan rumah landed yang sering memerlukan partition, pengecatan dan kerja paip.",
    commonIssues: ["Partition pejabat", "Pengecatan komersial", "Pembaikan paip", "Pemasangan CCTV"],
    localFaq: {
      q: "Bolehkah anda bina partition untuk pejabat di Glenmarie?",
      a: "Ya. Kami bina partition gypsum kalis api dan siap dengan skim-coat dalam masa 3–7 hari."
    }
  },
  "batu-caves": {
    housingProfile: "Batu Caves mempunyai rumah landed, pangsapuri dan lot kedai di mana kebocoran bumbung, paip dan cat luaran adalah perkara biasa.",
    commonIssues: ["Kebocoran bumbung", "Paip bocor", "Cat luaran", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran bumbung di Batu Caves?",
      a: "Ya. Kami periksa genting, flashing dan longkang sebelum mencadangkan pembaikan."
    }
  },
  "selayang": {
    housingProfile: "Selayang mempunyai rumah matang dan pangsapuri dengan kerja pembaikan kebocoran siling, paip dan kunci yang kerap.",
    commonIssues: ["Kebocoran siling", "Paip tersumbat", "Kunci rosak", "Cat dalaman"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran siling di Selayang?",
      a: "Ya. Kami mula-mula kenal pasti punca kebocoran, kemudian ganti papan dan cat semula."
    }
  },
  "rawang": {
    housingProfile: "Rawang mempunyai bandar landed dan kawasan industri di mana cat luaran, kebocoran bumbung dan penyelenggaraan kerja tangan adalah perkara biasa.",
    commonIssues: ["Cat luaran", "Kebocoran bumbung", "Pembaikan paip", "Pemasangan pagar"],
    localFaq: {
      q: "Bolehkah anda cat semula rumah landed di Rawang?",
      a: "Ya. Kami berikan sebut harga berdasarkan keluasan dinding dan keadaan permukaan."
    }
  },
  "kundang": {
    housingProfile: "Kundang mempunyai hartanah landed dan separa luar bandar yang memerlukan kalis air bumbung, cat luaran dan pembaikan am.",
    commonIssues: ["Kebocoran bumbung", "Cat luaran", "Pembaikan paip", "Pembinaan pagar"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran bumbung di Kundang?",
      a: "Ya. Kami periksa keseluruhan bumbung dan berikan jaminan bertulis."
    }
  },
  "sungai-buloh": {
    housingProfile: "Sungai Buloh mempunyai townhouse, pangsapuri dan lot industri dengan keperluan paip dan penyelenggaraan yang kerap.",
    commonIssues: ["Paip bocor", "Kebocoran siling", "Pengecatan", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda baiki paip di Sungai Buloh?",
      a: "Ya. Kami boleh gantikan paip dan uji tekanan sebelum menutup dinding."
    }
  },
  "kajang": {
    housingProfile: "Kajang mempunyai rumah landed dan pangsapuri di mana pembaikan kebocoran, cat luaran dan kerja tangan adalah perkara biasa.",
    commonIssues: ["Kebocoran paip", "Cat luaran", "Pembaikan siling", "Pemasangan TV"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran paip di Kajang?",
      a: "Ya. Kami gunakan paip PPR dan boleh menyelesaikan dalam 1–3 hari."
    }
  },
  "semenyih": {
    housingProfile: "Semenyih mempunyai bandar baharu dan rumah landed yang memerlukan pengecatan, kalis air dan pemasangan lekapan sebelum berpindah.",
    commonIssues: ["Pengecatan unit baharu", "Kalis air", "Pemasangan lekapan", "Pembaikan pintu"],
    localFaq: {
      q: "Bolehkah anda siapkan kerja sebelum saya berpindah ke Semenyih?",
      a: "Ya. Kami boleh jadualkan kerja supaya siap sebelum tarikh anda berpindah."
    }
  },
  "balakong": {
    housingProfile: "Balakong mempunyai zon industri dan kediaman dengan permintaan tinggi untuk paip, partition dan kerja pengecatan.",
    commonIssues: ["Paip tersumbat", "Partition pejabat", "Pengecatan", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda bina partition untuk pejabat di Balakong?",
      a: "Ya. Kami bina partition gypsum dan siap dengan skim-coat dalam masa 3–7 hari."
    }
  },
  "seri-kembangan": {
    housingProfile: "Seri Kembangan mempunyai kawasan kondominium dan teres di mana paip, kebocoran siling dan kerja tangan adalah perkara biasa.",
    commonIssues: ["Paip bocor", "Kebocoran siling", "Pemasangan TV", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran siling di Seri Kembangan?",
      a: "Ya. Kami kenal pasti punca, ganti papan dan cat semula."
    }
  },
  "pandan-indah": {
    housingProfile: "Pandan Indah mempunyai pangsapuri padat dan lot kedai dengan pembaikan paip, pintu, kunci dan pengecatan yang kerap.",
    commonIssues: ["Paip tersumbat", "Pintu rosak", "Kunci rosak", "Cat dinding"],
    localFaq: {
      q: "Bolehkah anda baiki paip tersumbat di Pandan Indah?",
      a: "Ya. Kami gunakan jetting dan boleh menyelesaikan kebanyakan kes dalam satu lawatan."
    }
  },
  "bandar-puteri": {
    housingProfile: "Bandar Puteri mempunyai rumah landed, kondominium dan pejabat yang memerlukan perkhidmatan kerja tangan, pengecatan dan paip profesional.",
    commonIssues: ["Pengecatan dalaman", "Pemasangan TV", "Pembaikan paip", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda pasang TV di dinding di Bandar Puteri?",
      a: "Ya. Kami gunakan anchor berat-duty dan boleh menyelesaikan dalam 45–60 minit."
    }
  },
  "putrajaya": {
    housingProfile: "Putrajaya mempunyai kuarters kerajaan, pangsapuri dan pejabat yang memerlukan perkhidmatan pembaikan dan penyelenggaraan yang berjadual serta kemas.",
    commonIssues: ["Pengecatan", "Pembaikan paip", "Pemasangan TV", "Pembaikan kunci"],
    localFaq: {
      q: "Bolehkah anda bekerja di kuarters kerajaan di Putrajaya?",
      a: "Ya. Kami bawa ID dan boleh didaftarkan terlebih dahulu dengan pengurusan."
    }
  },
  "cyberjaya": {
    housingProfile: "Cyberjaya mempunyai kondominium, unit SOHO dan pejabat dengan keperluan pemasangan TV, paip dan partition yang kerap.",
    commonIssues: ["Pemasangan TV", "Paip bocor", "Partition pejabat", "Pengecatan"],
    localFaq: {
      q: "Bolehkah anda bina partition untuk pejabat di Cyberjaya?",
      a: "Ya. Kami bina partition gypsum kalis api dan siap dengan skim-coat."
    }
  },
  "dengkil": {
    housingProfile: "Dengkil mempunyai rumah landed berhampiran Putrajaya dan Cyberjaya di mana kalis air, pengecatan dan paip semakin meningkat permintaannya.",
    commonIssues: ["Kalis air", "Pengecatan", "Pembaikan paip", "Pembinaan pagar"],
    localFaq: {
      q: "Bolehkah anda baiki kebocoran di Dengkil?",
      a: "Ya. Kami gunakan kaedah suntikan PU dan membran kalis air yang sesuai."
    }
  },
  "selangor": {
    housingProfile: "Selangor merangkumi liputan perkhidmatan seluruh negeri merentasi bandar matang, bandar baharu, unit komersial dan rumah landed.",
    commonIssues: ["Pengecatan", "Pembaikan paip", "Kebocoran bumbung", "Kerja tangan"],
    localFaq: {
      q: "Adakah anda berkhidmat di seluruh Selangor?",
      a: "Ya. Kami meliputi semua daerah utama dengan harga dan jaminan yang sama."
    }
  },
  "sentul": {
    housingProfile: "Sentul mempunyai pangsapuri lama, teres dan kondominium baharu dengan kerja paip, pengecatan dan kerja tangan yang kerap.",
    commonIssues: ["Paip bocor", "Cat dinding", "Pembaikan siling", "Pemasangan TV"],
    localFaq: {
      q: "Bolehkah anda baiki paip di pangsapuri lama di Sentul?",
      a: "Ya. Kami gantikan paip lama dengan PPR dan boleh menyelesaikan dalam 2–4 hari."
    }
  },
  "bandar-botanic": {
    housingProfile: "Bandar Botanic mempunyai rumah landed moden dan unit komersial yang memerlukan pengecatan dalaman yang bersih, kunci pintu dan pembaikan paip.",
    commonIssues: ["Pengecatan dalaman", "Kunci pintu", "Pembaikan paip", "Pemasangan TV"],
    localFaq: {
      q: "Bolehkah anda baiki kunci pintu di Bandar Botanic?",
      a: "Ya. Kami boleh gantikan atau baiki kunci dalam masa 30–45 minit."
    }
  }
};

const SUBURB_BODY_ZH: Record<string, LocalizedSuburbBody> = {
  "kuala-lumpur": {
    housingProfile: "吉隆坡涵盖高层办公室、豪华公寓、老店屋和落地式住宅，拥有严格的建筑管理准入规定。",
    commonIssues: ["大雨后渗水", "潮湿导致油漆剥落", "浴室配件老化", "漏水导致的天花板污渍"],
    localFaq: {
      q: "你们能在严格的 JMB 规定下进入高层建筑工作吗？",
      a: "可以。我们会提前与管理处协调、预订电梯并保护公共区域后再开始施工。"
    }
  },
  "cheras": {
    housingProfile: "蕉赖拥有密集的排屋社区和公寓，管道漏水、重新粉刷和天花板维修是常见需求。",
    commonIssues: ["管道漏水", "重新粉刷", "天花板维修", "排水管堵塞"],
    localFaq: {
      q: "在蕉赖重新粉刷排屋需要多长时间？",
      a: "通常需要 2 至 4 天，具体取决于面积和墙面状况。我们会在上门后提供固定报价。"
    }
  },
  "ampang": {
    housingProfile: "安邦涵盖落地式住宅、公寓和山坡物业，经常需要防水、外墙粉刷和杂工维护。",
    commonIssues: ["屋顶漏水", "外墙油漆褪色", "阳台漏水", "围栏维修"],
    localFaq: {
      q: "你们能维修安邦山坡物业的漏水问题吗？",
      a: "可以。我们擅长山坡防水工程，并使用无损结构的 PU 灌浆技术。"
    }
  },
  "setapak": {
    housingProfile: "文良港拥有学生住宿、公寓和店屋，对管道、锁具和粉刷有反复需求。",
    commonIssues: ["排水管堵塞", "锁具损坏", "油漆剥落", "天花板漏水"],
    localFaq: {
      q: "你们能维修学生公寓的堵塞管道吗？",
      a: "可以。我们使用高压水射技术，大多数情况可一次上门解决。"
    }
  },
  "wangsa-maju": {
    housingProfile: "旺沙玛珠拥有公寓和排屋，需要公寓友好型施工、低扰乱维修和当日服务档期。",
    commonIssues: ["浴室漏水", "墙面裂缝", "电视安装", "门扇维修"],
    localFaq: {
      q: "你们多久能到达旺沙玛珠？",
      a: "紧急情况通常在 45–75 分钟内到达。计划性工程通常在 1–2 个工作日内安排。"
    }
  },
  "kepong": {
    housingProfile: "甲洞拥有成熟排屋和商业街区，老旧管道、潮湿墙壁和重新粉刷是常见问题。",
    commonIssues: ["铁管生锈", "墙体潮湿", "天花板漏水", "外墙粉刷"],
    localFaq: {
      q: "你们能更换甲洞排屋的老旧铁管吗？",
      a: "可以。我们会更换为 SIRIM 认证的 PPR 或 PVC-u 管，并在封墙前进行压力测试。"
    }
  },
  "sri-petaling": {
    housingProfile: "Sri Petaling 拥有繁忙公寓和排屋，对杂工、管道和室内粉刷需求旺盛。",
    commonIssues: ["电视安装", "管道维修", "室内粉刷", "锁具维修"],
    localFaq: {
      q: "你们能在石膏板墙上安装电视吗？",
      a: "可以。我们使用适合石膏板的重型锚栓，确保安装安全稳固。"
    }
  },
  "bukit-jalil": {
    housingProfile: "武吉加里尔拥有新公寓和落地式住宅，需要仔细保护、遵守 JMB 规定、电视安装和补漆。",
    commonIssues: ["交屋缺陷", "电视安装", "天花板维修", "补漆"],
    localFaq: {
      q: "你们能维修新公寓的交屋缺陷吗？",
      a: "可以。我们熟悉发展商 QC 流程，可修复细微裂缝、门扇不对齐和油漆不均问题。"
    }
  },
  "mont-kiara": {
    housingProfile: "满家乐拥有高端豪华公寓，需要管理层批准、电梯保护和无尘施工。",
    commonIssues: ["浴室漏水", "低 VOC 粉刷", "电视墙安装", "石膏板维修"],
    localFaq: {
      q: "你们能在不打扰邻居的情况下在满家乐施工吗？",
      a: "可以。我们使用低气味涂料、保护公共走廊，并将产生噪音的工序安排在允许时段内。"
    }
  },
  "bangsar": {
    housingProfile: "孟沙拥有老旧落地式住宅、公寓和店屋，经常需要重新粉刷、天花板修补和配件升级。",
    commonIssues: ["油漆剥落", "天花板裂缝", "浴室配件", "门扇维修"],
    localFaq: {
      q: "你们能维修孟沙 40 年以上的老房子吗？",
      a: "可以。我们擅长老屋修复，包括潮湿处理和使用耐候涂料重新粉刷。"
    }
  },
  "desa-parkcity": {
    housingProfile: "Desa ParkCity 拥有高端公寓和落地式住宅，需要整洁、有计划的团队和仔细的表面保护。",
    commonIssues: ["室内粉刷", "电视安装", "锁具维修", "深度清洁"],
    localFaq: {
      q: "你们能按照 Desa ParkCity 的社区指南施工吗？",
      a: "可以。我们会提前提交施工申请、遵守安静时段，并在每天收工前清理现场。"
    }
  },
  "taman-melawati": {
    housingProfile: "Taman Melawati 拥有靠近山区的落地式住宅，经常需要外墙防水、屋顶漏水检查和重新粉刷。",
    commonIssues: ["屋顶漏水", "墙体潮湿", "外墙油漆褪色", "排水管堵塞"],
    localFaq: {
      q: "你们能维修靠近 Bukit Tabur 的屋顶漏水吗？",
      a: "可以。我们会检查瓦片、泛水板和排水沟，然后提出维修或防水方案。"
    }
  },
  "hulu-kelang": {
    housingProfile: " Hulu Kelang 拥有山坡物业，需要防水、屋顶漏水维修和坚固的外墙涂料。",
    commonIssues: ["山坡漏水", "屋顶渗漏", "外墙油漆", "围栏维修"],
    localFaq: {
      q: "你们能维修山坡物业的漏水问题吗？",
      a: "可以。我们使用适合山坡的 PU 灌浆和防水膜技术。"
    }
  },
  "petaling-jaya": {
    housingProfile: "八打灵再也拥有成熟排屋、公寓和办公室，经常需要粉刷、管道和天花板维修。",
    commonIssues: ["墙面裂缝", "管道漏水", "天花板下垂", "锁具维修"],
    localFaq: {
      q: "你们能维修八打灵再也老旧排屋的管道吗？",
      a: "可以。我们可更换老旧管道为 PPR，并在封墙前进行压力测试。"
    }
  },
  "subang-jaya": {
    housingProfile: "梳邦再也拥有家庭住宅、学生公寓和商业办公室，对管道、天花板和杂工需求稳定。",
    commonIssues: ["热水器故障", "排水管堵塞", "天花板漏水", "家具组装"],
    localFaq: {
      q: "你们能在梳邦再也安装即热式热水器吗？",
      a: "可以。我们安装 Joven、Rheem 和 Rinnai 品牌，并提供 12 个月保修。"
    }
  },
  "shah-alam": {
    housingProfile: "莎阿南拥有落地式住宅、工业区和办公室，外墙粉刷、屋顶漏水和隔墙工程常见。",
    commonIssues: ["外墙油漆褪色", "屋顶漏水", "办公室隔墙", "管道维修"],
    localFaq: {
      q: "你们能在莎阿南为办公室建造隔墙吗？",
      a: "可以。我们建造防火石膏隔墙，并在 3–7 天内完成带批灰的收尾。"
    }
  },
  "puchong": {
    housingProfile: "蒲种拥有排屋、公寓和店屋，经常需要管道、锁具、门和防水维护。",
    commonIssues: ["锁具损坏", "门扇刮地", "浴室漏水", "室内粉刷"],
    localFaq: {
      q: "你们能维修蒲种刮地的门扇吗？",
      a: "可以。我们会刨平门扇、调整铰链，并在需要时修补地板。"
    }
  },
  "damansara": {
    housingProfile: "白沙罗拥有成熟住宅和零售店，老旧管道、天花板裂缝和重新粉刷项目常见。",
    commonIssues: ["老旧管道", "天花板裂缝", "油漆剥落", "电气维修"],
    localFaq: {
      q: "你们能更换白沙罗老旧排屋的管道吗？",
      a: "可以。我们会更换铁管为 PPR，通常在 2–4 天内完成。"
    }
  },
  "kota-damansara": {
    housingProfile: "哥打白沙罗拥有公寓、联排别墅和商业单位，需要公寓友好型维修和计划性粉刷。",
    commonIssues: ["楼板漏水", "单位粉刷", "电视安装", "管道维修"],
    localFaq: {
      q: "你们能维修哥打白沙罗公寓的楼板漏水吗？",
      a: "可以。我们在条件允许时使用免拆砖的 PU 灌浆技术。"
    }
  },
  "ara-damansara": {
    housingProfile: "阿拉白沙罗拥有现代公寓和办公室，需要仔细的电梯保护、墙面安装和管道维修。",
    commonIssues: ["阳台漏水", "墙面安装", "管道维修", "粉刷"],
    localFaq: {
      q: "你们能维修阿拉白沙罗的阳台漏水吗？",
      a: "可以。我们会检查排水和膜层状况，然后提出合适的维修方案。"
    }
  },
  "sunway": {
    housingProfile: "双威拥有密集公寓、学生住宿和商业空间，需要快速杂工、管道和粉刷支持。",
    commonIssues: ["电视安装", "排水管堵塞", "粉刷", "清洁"],
    localFaq: {
      q: "你们能维修双威学生住宿的堵塞管道吗？",
      a: "可以。我们使用高压水射，大多数情况可一次上门解决。"
    }
  },
  "usj": {
    housingProfile: "USJ 拥有排屋和公寓，热水器、管道、天花板和粉刷维护常见。",
    commonIssues: ["热水器故障", "管道漏水", "天花板下垂", "室内粉刷"],
    localFaq: {
      q: "你们能在 USJ 更换热水器吗？",
      a: "可以。我们安装 Joven、Rheem 和 Rinnai 品牌，并提供 12 个月保修。"
    }
  },
  "bandar-utama": {
    housingProfile: "万达镇拥有公寓和落地式住宅，电视安装、补漆和管道配件更换频繁。",
    commonIssues: ["电视安装", "补漆", "管道配件", "锁具维修"],
    localFaq: {
      q: "你们能在万达镇安装电视吗？",
      a: "可以。我们使用重型锚栓，通常在 45–60 分钟内完成。"
    }
  },
  "ss2": {
    housingProfile: "SS2 拥有成熟排屋和店屋，老旧管道、屋顶潮湿和重新粉刷常见。",
    commonIssues: ["老旧铁管", "屋顶渗漏", "油漆剥落", "排水管堵塞"],
    localFaq: {
      q: "你们能更换 SS2 排屋的老旧铁管吗？",
      a: "可以。我们会更换为 PPR 管，并在封墙前进行压力测试。"
    }
  },
  "klang": {
    housingProfile: "巴生拥有受沿海湿气影响的住宅和商业区，需要防潮粉刷、管道和天花板护理。",
    commonIssues: ["管道生锈", "墙体潮湿", "外墙油漆", "天花板漏水"],
    localFaq: {
      q: "你们能维修巴生生锈的管道吗？",
      a: "可以。我们会更换为防锈管道并使用防腐蚀涂层。"
    }
  },
  "port-klang": {
    housingProfile: "巴生港拥有沿海和工业物业，需要耐腐蚀配件和潮湿控制。",
    commonIssues: ["管道腐蚀", "屋顶漏水", "外墙油漆", "围栏维修"],
    localFaq: {
      q: "你们能更换巴生港沿海地区的管道吗？",
      a: "可以。我们使用适合沿海环境的 PVC-u 或 PPR 管。"
    }
  },
  "bukit-tinggi": {
    housingProfile: "Bukit Tinggi 拥有现代城镇和商业街区，管道、粉刷和防水维护频繁。",
    commonIssues: ["管道漏水", "墙面粉刷", "屋顶漏水", "锁具维修"],
    localFaq: {
      q: "你们能维修 Bukit Tinggi 的屋顶漏水吗？",
      a: "可以。我们会检查瓦片、泛水板和排水沟，然后提出维修方案。"
    }
  },
  "setia-alam": {
    housingProfile: "Setia Alam 拥有新落地式住宅和公寓，需要干净粉刷、电视安装、门锁和天花板服务。",
    commonIssues: ["室内粉刷", "电视安装", "门锁维修", "天花板维修"],
    localFaq: {
      q: "你们能维修 Setia Alam 的门锁吗？",
      a: "可以。我们通常在 30–45 分钟内完成更换或维修。"
    }
  },
  "meru": {
    housingProfile: "Meru 拥有落地式和半工业物业，屋顶漏水、外墙粉刷和管道维修常见。",
    commonIssues: ["屋顶漏水", "外墙油漆", "管道漏水", "围栏维修"],
    localFaq: {
      q: "你们能维修 Meru 的屋顶漏水吗？",
      a: "可以。我们会全面检查屋顶并提供书面保修。"
    }
  },
  "kota-kemuning": {
    housingProfile: "Kota Kemuning 拥有落地式住宅和封闭式社区，需要计划性、低扰乱的粉刷、管道和杂工服务。",
    commonIssues: ["外墙粉刷", "管道维修", "电视安装", "锁具维修"],
    localFaq: {
      q: "你们能在 Kota Kemuning 提供定期维护服务吗？",
      a: "可以。我们可安排定期上门保养，并提供统一报价。"
    }
  },
  "bukit-jelutong": {
    housingProfile: "Bukit Jelutong 拥有半独立式洋房、独立洋房和办公室，外墙涂料和高端收尾工程常见。",
    commonIssues: ["外墙粉刷", "屋顶漏水", "围栏维修", "室内粉刷"],
    localFaq: {
      q: "你们能重新粉刷 Bukit Jelutong 的洋房吗？",
      a: "可以。我们使用耐候涂料，并提供最长 5 年的保修。"
    }
  },
  "glenmarie": {
    housingProfile: "Glenmarie 拥有商业办公室、展厅和落地式住宅，经常需要隔墙、粉刷和管道工程。",
    commonIssues: ["办公室隔墙", "商业粉刷", "管道维修", "CCTV 安装"],
    localFaq: {
      q: "你们能在 Glenmarie 为办公室建造隔墙吗？",
      a: "可以。我们建造防火石膏隔墙，并在 3–7 天内完成带批灰的收尾。"
    }
  },
  "batu-caves": {
    housingProfile: "黑风洞拥有落地式住宅、公寓和店屋，屋顶漏水、管道和外墙粉刷常见。",
    commonIssues: ["屋顶漏水", "管道漏水", "外墙油漆", "锁具维修"],
    localFaq: {
      q: "你们能维修黑风洞的屋顶漏水吗？",
      a: "可以。我们会检查瓦片、泛水板和排水沟，然后提出维修方案。"
    }
  },
  "selayang": {
    housingProfile: "士拉央拥有成熟住宅和公寓，天花板漏水、管道和锁具维修频繁。",
    commonIssues: ["天花板漏水", "排水管堵塞", "锁具损坏", "室内粉刷"],
    localFaq: {
      q: "你们能维修士拉央的天花板漏水吗？",
      a: "可以。我们会先找出漏水源头，然后更换板材并重新粉刷。"
    }
  },
  "rawang": {
    housingProfile: "万挠拥有落地式城镇和工业区，外墙粉刷、屋顶漏水和杂工维护常见。",
    commonIssues: ["外墙粉刷", "屋顶漏水", "管道维修", "围栏安装"],
    localFaq: {
      q: "你们能重新粉刷万挠的落地式住宅吗？",
      a: "可以。我们会根据墙面面积和状况提供报价。"
    }
  },
  "kundang": {
    housingProfile: "Kundang 拥有落地式和半乡村物业，需要屋顶防水、外墙粉刷和一般维修。",
    commonIssues: ["屋顶漏水", "外墙油漆", "管道维修", "围栏建造"],
    localFaq: {
      q: "你们能维修 Kundang 的屋顶漏水吗？",
      a: "可以。我们会全面检查屋顶并提供书面保修。"
    }
  },
  "sungai-buloh": {
    housingProfile: "双溪毛糯拥有联排别墅、公寓和工业区，管道和维护需求频繁。",
    commonIssues: ["管道漏水", "天花板漏水", "粉刷", "锁具维修"],
    localFaq: {
      q: "你们能维修双溪毛糯的管道吗？",
      a: "可以。我们可更换管道并在封墙前进行压力测试。"
    }
  },
  "kajang": {
    housingProfile: "加影拥有落地式住宅和公寓，漏水维修、外墙粉刷和杂工工作常见。",
    commonIssues: ["管道漏水", "外墙粉刷", "天花板维修", "电视安装"],
    localFaq: {
      q: "你们能维修加影的管道漏水吗？",
      a: "可以。我们使用 PPR 管，通常在 1–3 天内完成。"
    }
  },
  "semenyih": {
    housingProfile: "士毛月拥有新城镇和落地式住宅，入伙前需要粉刷、防水和配件安装。",
    commonIssues: ["新单位粉刷", "防水", "配件安装", "门扇维修"],
    localFaq: {
      q: "你们能在入伙前完成士毛月的工作吗？",
      a: "可以。我们会安排工程在您搬入日期前全部完成。"
    }
  },
  "balakong": {
    housingProfile: "巴拉贡拥有工业和住宅区，对管道、隔墙和粉刷需求旺盛。",
    commonIssues: ["排水管堵塞", "办公室隔墙", "粉刷", "锁具维修"],
    localFaq: {
      q: "你们能在巴拉贡为办公室建造隔墙吗？",
      a: "可以。我们建造防火石膏隔墙，并在 3–7 天内完成带批灰的收尾。"
    }
  },
  "seri-kembangan": {
    housingProfile: "Seri Kembangan 拥有公寓和排屋区，管道、天花板漏水和杂工工作常见。",
    commonIssues: ["管道漏水", "天花板漏水", "电视安装", "锁具维修"],
    localFaq: {
      q: "你们能维修 Seri Kembangan 的天花板漏水吗？",
      a: "可以。我们会找出源头、更换板材并重新粉刷。"
    }
  },
  "pandan-indah": {
    housingProfile: "Pandan Indah 拥有密集公寓和店屋，管道维修、门、锁具和粉刷频繁。",
    commonIssues: ["排水管堵塞", "门扇损坏", "锁具损坏", "墙面粉刷"],
    localFaq: {
      q: "你们能维修 Pandan Indah 的堵塞管道吗？",
      a: "可以。我们使用高压水射，大多数情况可一次上门解决。"
    }
  },
  "bandar-puteri": {
    housingProfile: "Bandar Puteri 拥有落地式住宅、公寓和办公室，需要专业的杂工、粉刷和管道服务。",
    commonIssues: ["室内粉刷", "电视安装", "管道维修", "锁具维修"],
    localFaq: {
      q: "你们能在 Bandar Puteri 安装电视吗？",
      a: "可以。我们使用重型锚栓，通常在 45–60 分钟内完成。"
    }
  },
  "putrajaya": {
    housingProfile: "布城拥有政府宿舍、公寓和办公室，需要有计划且整洁的维修和维护服务。",
    commonIssues: ["粉刷", "管道维修", "电视安装", "锁具维修"],
    localFaq: {
      q: "你们能在布城的政府宿舍工作吗？",
      a: "可以。我们会携带身份证，并可提前在管理处登记。"
    }
  },
  "cyberjaya": {
    housingProfile: "赛城拥有公寓、SOHO 单位和办公室，电视安装、管道和隔墙需求频繁。",
    commonIssues: ["电视安装", "管道漏水", "办公室隔墙", "粉刷"],
    localFaq: {
      q: "你们能在赛城为办公室建造隔墙吗？",
      a: "可以。我们建造防火石膏隔墙，并完成带批灰的收尾。"
    }
  },
  "dengkil": {
    housingProfile: "Dengkil 拥有靠近布城和赛城的落地式住宅，防水、粉刷和管道需求不断增长。",
    commonIssues: ["防水", "粉刷", "管道维修", "围栏建造"],
    localFaq: {
      q: "你们能维修邓吉的漏水问题吗？",
      a: "可以。我们使用适合的 PU 灌浆和防水膜技术。"
    }
  },
  "selangor": {
    housingProfile: "雪兰莪涵盖全州服务，覆盖成熟城镇、新城镇、商业单位和落地式住宅。",
    commonIssues: ["粉刷", "管道维修", "屋顶漏水", "杂工"],
    localFaq: {
      q: "你们的服务覆盖整个雪兰莪吗？",
      a: "是的。我们覆盖所有主要地区，并提供相同的价格和保修条款。"
    }
  },
  "sentul": {
    housingProfile: "沈都拥有老旧公寓、排屋和新公寓，管道、粉刷和杂工工作频繁。",
    commonIssues: ["管道漏水", "墙面粉刷", "天花板维修", "电视安装"],
    localFaq: {
      q: "你们能维修沈都老旧公寓的管道吗？",
      a: "可以。我们会更换老旧管道为 PPR，通常在 2–4 天内完成。"
    }
  },
  "bandar-botanic": {
    housingProfile: "Bandar Botanic 拥有现代落地式住宅和商业单位，需要干净的室内粉刷、门锁和管道维修。",
    commonIssues: ["室内粉刷", "门锁维修", "管道维修", "电视安装"],
    localFaq: {
      q: "你们能维修 Bandar Botanic 的门锁吗？",
      a: "可以。我们通常在 30–45 分钟内完成更换或维修。"
    }
  }
};

export function getLocalizedSuburbBody(
  slug: string,
  locale: Locale
): LocalizedSuburbBody | null {
  if (locale === "en") return null;

  const body = locale === "ms" ? SUBURB_BODY_MS[slug] : SUBURB_BODY_ZH[slug];
  if (!body) return null;

  return body;
}