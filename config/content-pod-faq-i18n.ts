/**
 * P3-12 phase 2 — native, page-specific translations of the authored English
 * content-pod FAQs. Keys are `${family}:${slug}` because slugs can collide
 * across families. These are editorial translations, not generic templates.
 *
 * Coverage is intentionally gated by scripts/validate-content-pod-faq-i18n.ts.
 * Wave 15 tranche 1 covers all 10 `top` pages (80 translated Q&As: 10 pages ×
 * 4 FAQs × 2 locales). Remaining families stay explicitly pending in TRACKING.
 */

export type LocalizedPodFaq = { q: string; a: string };
export type PodFaqLocale = "ms" | "zh";
export type LocalizedPodFaqSet = Record<PodFaqLocale, LocalizedPodFaq[]>;

export const CONTENT_POD_FAQ_I18N: Record<string, LocalizedPodFaqSet> = {
  "top:best-house-painters-kl-2026": {
    ms: [
      { q: "Apakah yang membezakan tukang cat profesional daripada yang biasa?", a: "Persediaan yang didokumenkan — termasuk foto kerja menampal retak, mengampelas dan menyapu primer sebelum cat kemasan — sebut harga terperinci yang menamakan setiap bahan, waranti bertulis, serta hasil sekata di bawah cahaya matahari dan lampu siling." },
      { q: "Patutkah saya membandingkan tukang cat berdasarkan harga setiap bilik?", a: "Harga memang satu faktor, tetapi sebut harga murah yang mengabaikan primer atau mengurangkan bilangan lapisan akan lebih mahal dalam jangka panjang. Bandingkan keseluruhan sistem — persediaan, primer, lapisan cat dan waranti — bukan jumlah akhir sahaja." },
      { q: "Berapa banyak sebut harga patut saya dapatkan?", a: "Tiga ialah jumlah yang praktikal: cukup untuk melihat julat pasaran tanpa terlalu banyak pilihan. Jika ketiga-tiga sebut harga menyatakan skop dan bahan yang sama, tawaran harga pertengahan lazimnya pilihan paling selamat." },
      { q: "Bolehkah saya mempercayai ulasan dalam talian tentang tukang cat?", a: "Ulasan membantu, tetapi foto sebelum dan selepas yang turut menunjukkan peringkat persediaan memberi bukti lebih kukuh. Tukang cat yang mendokumenkan kerja persediaannya biasanya melakukannya secara konsisten." }
    ],
    zh: [
      { q: "专业油漆工与一般油漆工有什么区别？", a: "专业团队会记录基层处理过程，例如面漆前的补裂、打磨和底漆照片；报价会逐项列明材料，并提供书面保修。完工后，无论在日光还是筒灯下，漆面都应均匀一致。" },
      { q: "我应该按每间房的价格比较油漆工吗？", a: "价格只是其中一个因素。省略底漆或减少涂层的低价报价，长期反而更昂贵。应比较完整系统，包括基层处理、底漆、涂层数量和保修，而不是只看最低总价。" },
      { q: "我应该取得多少份报价？", a: "三份最实用，既能看出市场范围，又不会因选择过多而难以决定。如果三份报价描述的是相同范围和材料，处于中间价位的方案通常最稳妥。" },
      { q: "网上的油漆工评价可信吗？", a: "评价可作参考，但能核实的施工前后照片更有价值，尤其是展示基层处理阶段的照片。愿意记录补裂、打磨和底漆工作的团队，通常也会更稳定地执行这些步骤。" }
    ]
  },
  "top:best-plumbers-kl": {
    ms: [
      { q: "Bagaimanakah saya membezakan tukang paip yang baik daripada yang kurang baik?", a: "Tukang paip yang baik menerangkan cara masalah akan dikesan sebelum mencadangkan pembaikan; yang kurang baik terus menawarkan penyelesaian tanpa diagnosis. Ujian tekanan, pemeriksaan akustik dan pemeriksaan visual menunjukkan tahap kecekapan sebenar." },
      { q: "Patutkah tukang paip menerangkan kerja yang sedang dilakukan?", a: "Ya. Tukang paip profesional menerangkan diagnosis, pilihan pembaikan dan lokasi injap pengasingan. Tukang yang bekerja tanpa penjelasan lalu hanya menyerahkan bil tidak membina hubungan yang anda perlukan ketika kecemasan seterusnya." },
      { q: "Adakah tukang paip paling murah sentiasa pilihan paling buruk?", a: "Tidak semestinya, tetapi harga yang jauh di bawah pasaran selalunya bermaksud bahan dikurangkan, persediaan dilangkau atau tiada waranti. Pembaikan murah menjadi mahal apabila sambungan gagal dan membanjiri unit di bawah." },
      { q: "Patutkah tukang paip tersedia untuk kecemasan?", a: "Bagi pelanggan sedia ada, ya. Tukang paip yang sudah mengenali sistem dan menyimpan rekod kerja anda boleh bertindak lebih cepat dan membaiki dengan lebih tepat berbanding kenalan baharu yang dicari pada jam 2 pagi." }
    ],
    zh: [
      { q: "怎样分辨好的水管工与不可靠的水管工？", a: "好的水管工会先说明如何找出问题，再建议修法；不可靠的水管工往往未诊断就先推销方案。压力测试、声学检查和目视检查等诊断步骤，最能反映实际能力。" },
      { q: "水管工应该解释自己正在做什么吗？", a: "应该。专业水管工会带您了解诊断结果、说明维修选择，并指出各个关水位置。全程不解释、完工只递账单的做法，不利于建立下一次紧急事故所需的可靠合作关系。" },
      { q: "最便宜的水管工一定是最差的选择吗？", a: "不一定，但明显低于市场的报价通常意味着材料降级、省略准备工序或没有保修。当维修失效并导致楼下单位进水时，原本最便宜的选择可能变得最昂贵。" },
      { q: "水管工应该提供紧急服务吗？", a: "对现有客户而言，最好可以。熟悉您家系统并保留维修记录的水管工，通常能比凌晨两点临时找到的新联系人更快响应，也能更准确地处理问题。" }
    ]
  },
  "top:best-ceiling-contractors-kl": {
    ms: [
      { q: "Apakah yang patut saya tanya kontraktor siling sebelum melantik mereka?", a: "Tanya jarak rangka — 400–450 mm bagi papan standard — sistem sambungan bertetulang dengan beberapa lapisan kompaun, koordinasi lampu sebelum papan dipasang, serta waranti sekurang-kurangnya 12 bulan atau sehingga 10 tahun bagi sistem premium." },
      { q: "Bagaimanakah saya mengesahkan mutu rangka kontraktor?", a: "Minta melihat rangka sebelum papan dipasang. Kontraktor profesional mengalu-alukan pemeriksaan ini kerana jarak dan corak skru yang betul ialah bukti mutu yang jelas, tetapi akan terlindung sebaik sahaja papan dipasang." },
      { q: "Patutkah saya membandingkan sebut harga berdasarkan jenama papan sahaja?", a: "Tidak. Rangka, sistem sambungan dan mutu kemasan sama penting dengan jenama papan. Papan premium pada rangka yang terlalu jarang dan sambungan satu lapisan tetap akan retak seperti papan asas." },
      { q: "Apakah waranti yang patut diberikan untuk siling?", a: "Papan gipsum standard patut membawa sekurang-kurangnya 12 bulan waranti kerja. Siling plaster premium boleh membawa sehingga 10 tahun perlindungan terhadap kendur dan retak. Waranti serta spesifikasi sistem mesti ditulis pada invois." }
    ],
    zh: [
      { q: "聘请天花板承包商前应该问什么？", a: "应询问龙骨间距，标准板通常为 400–450 毫米；接缝是否使用加固带和多层接缝料；封板前是否已标定灯位；以及保修条款，标准工程至少 12 个月，优质系统可达 10 年。" },
      { q: "怎样核实承包商的龙骨质量？", a: "要求在封板前查看龙骨。专业承包商通常欢迎这项检查，因为正确的间距与固定方式是看得见的质量证据；板材装上后，这些细节便会被遮住。" },
      { q: "比较报价时只看板材品牌可以吗？", a: "不可以。龙骨、接缝系统和收面质量与板材品牌同样重要。即使使用高档板材，若龙骨间距不当、接缝只做一层，也会像普通板材一样很快开裂。" },
      { q: "天花板工程应提供什么保修？", a: "标准石膏板工程的工艺保修至少应为 12 个月；优质灰泥天花系统对下垂和开裂可保修长达 10 年。发票上应写明保修期及其覆盖的系统规格。" }
    ]
  },
  "top:best-waterproofing-contractors-kl": {
    ms: [
      { q: "Bagaimanakah saya tahu kontraktor kalis air itu jujur?", a: "Mereka menguji sebelum menjual: ujian rendaman air, pemeriksaan keadaan membran dan diagnosis bertulis dilakukan sebelum mencadangkan suntikan, salutan permukaan atau membran penuh. Mencadangkan kaedah tanpa ujian hanyalah tekaan." },
      { q: "Patutkah waranti meliputi siling jiran?", a: "Waranti patut melindungi sistem kalis air daripada kebocoran berulang. Kerosakan siling jiran akibat kebocoran terdahulu lazimnya diurus melalui insurans, bukan di bawah waranti kalis air." },
      { q: "Adakah kalis air tanpa pecah jubin sentiasa satu penipuan?", a: "Tidak. Suntikan PU dan salutan permukaan berkesan untuk masalah tertentu. Yang mengelirukan ialah menjual kaedah tanpa pecah untuk semua keadaan, termasuk membran gagal yang perlu diganti sepenuhnya. Diagnosis mesti menentukan kaedah." },
      { q: "Berapa banyak sebut harga patut saya dapatkan untuk kerja kalis air?", a: "Sekurang-kurangnya dua. Jika satu mencadangkan suntikan dan satu lagi membran penuh, minta kedua-duanya menunjukkan bukti. Utamakan kontraktor yang menguji dan mendokumenkan masalah, bukan yang memberi harga tanpa melihat keadaan." }
    ],
    zh: [
      { q: "怎样判断防水承包商是否诚实？", a: "可靠的承包商会先测试再销售：进行蓄水测试、检查防水层状况并记录诊断，然后才建议灌注、表面涂层或全面重做防水层。未测试就推荐方案，只是在猜测。" },
      { q: "保修应该包括楼下邻居的天花板吗？", a: "保修应保障防水系统不会再次渗漏。楼下天花因之前漏水造成的损坏，通常应通过保险处理，而不属于防水工程保修范围。" },
      { q: "免敲砖防水一定是骗局吗？", a: "不一定。PU 灌注和表面涂层对特定问题确实有效。问题在于把免敲砖当成所有漏水的通用方案，包括已经失效、必须全面更换的防水层。应由诊断决定方法，而不是承包商偏好。" },
      { q: "防水工程应该取得多少份报价？", a: "至少两份。如果一家建议灌注、另一家建议全面重做防水层，应要求双方展示建议依据。经过测试并有记录的诊断，比未查看现场就报价更可信。" }
    ]
  },
  "top:best-handyman-kl": {
    ms: [
      { q: "Apakah ciri perkhidmatan tukang rumah yang profesional?", a: "Mereka mengenal pasti jenis dinding sebelum menggerudi, memilih pengikat mengikut beban sebenar, mempunyai insurans liabiliti awam dan memberi waranti bertulis. Empat semakan ini membezakan profesional daripada pekerja cuai yang hanya membawa gerudi." },
      { q: "Patutkah tukang rumah menerangkan pendekatan mereka?", a: "Ya. Profesional menerangkan apa yang ditemui — jenis dinding, kedudukan stud dan laluan beban — serta apa yang akan digunakan, termasuk jenis sauh dan corak pengikat, sebelum bermula. Terus menggerudi tanpa penjelasan ialah tanda amatur." },
      { q: "Adakah insurans benar-benar perlu untuk kerja kecil?", a: "Ya. Televisyen yang jatuh daripada pendakap dinding boleh mencederakan orang, merosakkan lantai dan memecahkan jubin. Tanpa insurans liabiliti awam tukang tersebut, semua kos mungkin perlu ditanggung oleh anda." },
      { q: "Bagaimanakah saya mengesahkan mutu kerja tukang rumah?", a: "Minta foto kerja pemasangan mereka yang menunjukkan corak pengikat, jenis sauh dan keadaan dinding selepas siap. Profesional mendokumenkan hasil dan butiran kerjanya; pekerja cuai biasanya tidak." }
    ],
    zh: [
      { q: "专业杂工服务应具备什么条件？", a: "开钻前确认墙体类型，按实际承重选择固定件，持有公共责任保险，并提供书面保修。这四项检查能把专业人员与只带一把电钻、做事草率的人区分开来。" },
      { q: "杂工应该先解释施工方法吗？", a: "应该。专业人员会先说明发现的情况，例如墙体类型、龙骨位置与受力路径，并解释将使用的锚栓种类和固定排列。什么都不说明就马上钻孔，通常是不专业的表现。" },
      { q: "小工程真的需要保险吗？", a: "需要。壁挂电视掉落可能伤人、损坏地板并砸裂瓷砖。若施工人员没有公共责任保险，这些费用最终都可能由屋主承担。" },
      { q: "怎样核实杂工的施工质量？", a: "要求查看其安装工程照片，重点看固定排列、锚栓类型以及完工后的墙面状况。专业人员会记录自己的工程；草率施工者通常不会。" }
    ]
  },
  "top:best-paint-brands-malaysia-2026": {
    ms: [
      { q: "Jenama cat manakah yang terbaik untuk rumah Malaysia pada 2026?", a: "Tiada satu jenama terbaik untuk semua keadaan. Nippon menonjol bagi dalaman tahan kotoran, Jotun bagi luaran pemantul haba, manakala Dulux bersaing rapat dalam kedua-duanya. Pilihan bergantung pada bilik atau permukaan yang dicat." },
      { q: "Adakah cat premium berbaloi dengan kosnya?", a: "Ya, untuk dalaman yang kerap digunakan dan luaran yang terdedah. Julat premium tahan lebih lama, lebih sukar berbekas dan biasanya memerlukan kurang lapisan. Bagi stor dan unit sewa, julat bajet boleh memberi prestasi memadai pada kos lebih rendah." },
      { q: "Bolehkah saya menggunakan jenama berlainan di bilik yang berlainan?", a: "Boleh. Ramai pemilik menggunakan cat premium di ruang tamu dan bilik tidur, serta cat bajet di ruang utiliti. Namun, gunakan primer dan cat kemasan daripada jenama yang sama dalam setiap bilik untuk mengekalkan waranti sistem." },
      { q: "Bagaimanakah saya mengesahkan mutu cat di tapak?", a: "Pastikan cat berwarna tiba dalam bekas bermeterai daripada pusat bancuhan sah jenama tersebut dan nombor kelompoknya sepadan. Warna yang dibancuh sendiri di kedai perkakasan am lebih mudah berbeza antara bekas." }
    ],
    zh: [
      { q: "2026 年马来西亚住宅最好的油漆品牌是哪一个？", a: "没有一个品牌适合所有情况。Nippon 在抗污内墙漆方面较突出，Jotun 在隔热外墙漆方面有优势，Dulux 则在两类产品中都很有竞争力。正确选择取决于具体房间和表面。" },
      { q: "高档油漆值得额外费用吗？", a: "对于使用频繁的室内空间和暴露于天气的外墙，通常值得。高档系列更耐久、较抗污，也往往需要较少涂层。储藏室和出租单位则可用价格较低、表现足够的经济系列。" },
      { q: "不同房间可以使用不同品牌吗？", a: "可以。许多屋主在客厅和卧室使用高档漆，在杂物空间使用经济漆。但每个房间内的底漆与面漆应采用同一品牌，以维持完整系统保修。" },
      { q: "怎样在现场核实油漆质量？", a: "检查调色漆是否由品牌授权调色中心以密封包装送达，并核对批号。一般五金店自行调配的颜色，往往较容易出现不同桶之间的色差。" }
    ]
  },
  "top:best-waterproofing-methods-malaysia": {
    ms: [
      { q: "Kaedah kalis air manakah yang paling tahan lama?", a: "Membran torch-on pada permukaan terdedah boleh membawa waranti lebih 10 tahun; sistem bersimen di bawah jubin bertahan 10–15 tahun; suntikan PU lazimnya 1–2 tahun. Setiap waranti hanya berkesan jika kaedah sepadan dengan masalah." },
      { q: "Adakah satu kaedah kalis air sesuai untuk semua keadaan?", a: "Tidak. Kaedah bergantung pada lokasi bocor, keadaan substrat, kekangan akses dan sama ada permukaan akan dijubin atau dibiarkan terdedah. Kontraktor yang menawarkan satu kaedah bagi semua masalah sedang menjual, bukan menyelesaikan." },
      { q: "Bolehkah saya menggabungkan beberapa kaedah kalis air?", a: "Boleh. Suntikan PU untuk menghentikan kebocoran aktif, diikuti membran pada sisi positif bagi perlindungan jangka panjang, ialah pendekatan dua peringkat yang biasa untuk kebocoran antara tingkat apabila kedua-dua sisi boleh dicapai." },
      { q: "Bagaimanakah saya tahu kaedah yang diperlukan oleh kebocoran saya?", a: "Dapatkan diagnosis profesional yang merangkumi ujian air, penilaian keadaan membran dan pemeriksaan substrat — bukan cadangan yang dibuat sebelum kontraktor melihat masalah sebenar." }
    ],
    zh: [
      { q: "哪一种防水方法最耐久？", a: "暴露表面的热熔卷材可提供超过 10 年保修；砖下水泥基系统可使用 10–15 年；PU 灌注通常为 1–2 年。无论哪种保修，方法都必须与问题相符才有效。" },
      { q: "有没有适合所有情况的防水方法？", a: "没有。正确方法取决于漏水位置、基层状况、进出限制，以及表面之后会铺砖还是暴露。若承包商对每一种问题都只提供同一种方法，那是在推销，而不是解决问题。" },
      { q: "不同防水方法可以组合使用吗？", a: "可以。先用 PU 灌注阻止活动裂缝漏水，再从迎水面铺设表面防水层作长期预防，是楼层间渗漏常用的两阶段做法，前提是两侧都可以施工。" },
      { q: "怎样知道我的漏水需要哪一种方法？", a: "应进行包括水测试、防水层状况评估及基层检查的专业诊断，而不是让承包商在还没看过问题前就直接推荐做法。" }
    ]
  },
  "top:bathroom-waterproofing-options": {
    ms: [
      { q: "Apakah cara paling murah untuk membaiki kebocoran bilik mandi?", a: "Perbaharui sendi silikon dan kedapkan semula grout. Jika bocor berlaku di sambungan pancuran-dinding atau sekitar saliran, silikon dan grout baharu mungkin menyelesaikannya dengan kos bawah RM 200. Jika membran gagal, ini hanya tampalan sementara." },
      { q: "Bilakah penggantian membran penuh menjadi satu-satunya pilihan?", a: "Apabila membran di bawah jubin koyak, terpisah daripada substrat atau terlalu uzur untuk dibaiki. Suntikan atau salutan permukaan tidak boleh memulihkan membran yang sudah tiada. Kontraktor jujur akan menunjukkan bukti sebelum mencadangkan kerja pecah." },
      { q: "Bolehkah saya membuat kalis air di atas jubin sedia ada?", a: "Dalam keadaan tertentu. Membran sapuan cecair boleh disapu di atas jubin yang masih kukuh, tetapi ia menaikkan aras lantai, menjejaskan kelegaan pintu dan hanya sesuai apabila substrat di bawah jubin masih kukuh secara struktur." },
      { q: "Berapa lama kerja kalis air bilik mandi mengambil masa?", a: "Pembaharuan silikon mengambil beberapa jam; suntikan PU 1–2 hari; membran permukaan di atas jubin 2–3 hari; penggantian membran penuh bersama pemasangan semula jubin 5–7 hari termasuk pengerasan dan ujian rendaman." }
    ],
    zh: [
      { q: "修理卫生间漏水最便宜的方法是什么？", a: "更新硅胶接缝并重新密封填缝剂。如果漏点在淋浴区与墙面的接缝或地漏周围，新硅胶和填缝剂可能以低于 RM 200 的费用解决；但若防水层已失效，这只能暂时补漏。" },
      { q: "什么时候只能全面更换防水层？", a: "当砖下防水层已经破裂、脱层或老化到无法修复时，灌注或表面涂层都不能恢复已经不存在的防水层。诚实的承包商会先展示证据，再建议拆除。" },
      { q: "可以直接在现有瓷砖上做防水吗？", a: "某些情况可以。液体防水膜可涂在牢固的现有瓷砖上，但会抬高地面、影响门底净空，而且只有在瓷砖下基层结构完好时才适用。" },
      { q: "卫生间防水工程需要多久？", a: "更新硅胶需数小时；PU 灌注需 1–2 天；在瓷砖上做表面防水膜需 2–3 天；全面更换防水层并重铺瓷砖需 5–7 天，包括固化和蓄水测试。" }
    ]
  },
  "top:ceiling-materials-malaysia": {
    ms: [
      { q: "Bahan siling manakah yang terbaik untuk bilik mandi?", a: "Gunakan papan gipsum tahan lembap berpermukaan hijau atau papan simen. Papan standard menyerap lembapan dan boleh kendur dalam beberapa bulan di bilik mandi Malaysia. Jenis papan mesti dinyatakan dalam sebut harga." },
      { q: "Adakah siling plaster berbaloi dengan harga premium?", a: "Ya, bagi ruang tamu dan bilik utama dengan lampu teluk. Kemasan tanpa sambungan dan waranti 10 tahun boleh mewajarkan premium kos 30–50%. Bagi bilik utiliti dan unit sewa, papan gipsum memberi prestasi memadai pada kos lebih rendah." },
      { q: "Bolehkah saya menggunakan papan gipsum di luar rumah?", a: "Bukan papan gipsum standard. Soffit luar dan kawasan berbumbung di luar memerlukan papan simen atau gipsum gred luaran dengan kemasan kalis cuaca. Menggunakan papan standard di luar hampir pasti menyebabkan kegagalan awal." },
      { q: "Bagaimanakah saya memilih antara bahan siling?", a: "Fungsi bilik menentukan pilihan: ruang tamu kering menggunakan papan standard, kawasan basah menggunakan papan MR atau simen, dan siling hiasan menggunakan sistem plaster. Cadangan mesti berdasarkan bilik, bukan bahan paling murah untuk dipasang." }
    ],
    zh: [
      { q: "卫生间最适合哪一种天花板材料？", a: "应使用绿色饰面的防潮石膏板或水泥板。普通板会吸收水分，在马来西亚卫生间里数月内便可能下垂。报价中必须明确注明板材类型。" },
      { q: "灰泥天花值得较高的费用吗？", a: "对于带灯槽的客厅和主卧，通常值得。无缝效果和 10 年保修可支持高出 30–50% 的费用。杂物间和出租单位则可选成本较低、表现足够的石膏板。" },
      { q: "室外可以使用石膏板吗？", a: "普通石膏板不可以。室外檐底和有遮盖的户外区域，应使用水泥板或户外级石膏板，并配合耐候饰面。把普通板用在户外，几乎必然会提早损坏。" },
      { q: "怎样选择不同的天花板材料？", a: "按房间用途选择：干燥生活空间用普通板，潮湿空间用 MR 防潮板或水泥板，特色造型天花用灰泥系统。承包商应根据房间条件建议，而不是只推荐最便宜易装的材料。" }
    ]
  },
  "top:handyman-services-every-homeowner-needs": {
    ms: [
      { q: "Kerja tukang rumah manakah yang selamat dibuat sendiri?", a: "Pemasangan rak ringkas pada dinding padu, pemasangan perabot, pelarasan engsel pintu dan pembaharuan silikon — selagi kerja itu tidak melibatkan gerudi struktur, pendawaian elektrik atau sambungan paip tersembunyi di belakang dinding." },
      { q: "Bilakah saya patut memanggil tukang rumah profesional?", a: "Untuk memasang TV pada papan plaster, menggantung cermin berat, menukar kunci pintu, membuat kerja elektrik atau paip di belakang dinding, serta apa-apa kerja melebihi ketinggian 2 m yang boleh menyebabkan kecederaan serius jika terjatuh." },
      { q: "Bagaimanakah saya menggabungkan beberapa kerja tukang rumah dengan cekap?", a: "Hantar satu senarai bersama foto dan ukuran kasar. Tukang profesional boleh menetapkan harga sebagai satu pelan lawatan dan menyiapkan semua item dalam satu slot. Ini lebih cekap daripada menempah lawatan berasingan bagi setiap kerja." },
      { q: "Apakah yang patut termasuk dalam satu lawatan tukang rumah?", a: "Pengenalpastian jenis dinding sebelum menggerudi, pengikat mengikut beban bagi setiap pemasangan, perlindungan lantai dan perabot, pembersihan sebelum beredar, serta rekod bertulis tentang kerja yang dibuat dan waranti yang terpakai." }
    ],
    zh: [
      { q: "哪些杂工项目可以安全地自己做？", a: "在实心墙安装简单搁板、组装家具、调整门铰链及更新硅胶，通常可以自行处理；前提是不涉及结构钻孔、电气线路或墙内水管接驳。" },
      { q: "什么时候应该请专业杂工？", a: "石膏板墙挂电视、悬挂重镜、更换门锁、任何墙内电气或水管工程，以及高度超过 2 米、跌落可能造成严重伤害的工作，都应请专业人员。" },
      { q: "怎样高效地一次安排多项杂工工作？", a: "发送一份附照片和大概尺寸的清单。专业杂工可按一次上门计划报价，在同一预约时段完成所有项目，比每项工作分别预约更有效率。" },
      { q: "一次专业杂工上门应包括什么？", a: "钻孔前确认墙体类型、每个安装点使用符合承重的固定件、保护地板和家具、离场前清理，并提供书面记录，说明完成了什么以及适用的保修。" }
    ]
  }
};
