/**
 * P3-12 phase 2 — native, page-specific translations of the authored English
 * content-pod FAQs. Keys are `${family}:${slug}` because slugs can collide
 * across families. These are editorial translations, not generic templates.
 *
 * Coverage is intentionally gated by scripts/validate-content-pod-faq-i18n.ts.
 * Waves 15–16 cover the complete `top` and `guides` families; Wave 17 adds the
 * complete `guidesMaintenance` family; Wave 18 adds the complete `seasonal`
 * family (38 pages, 304 translated Q&As in all). Remaining families stay
 * explicitly pending in TRACKING.
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
  },
  "guides:how-to-choose-house-painter-kl": {
    ms: [
      { q: "Apakah yang perlu dinyatakan dalam sebut harga tukang cat?", a: "Sebut harga perlu memperincikan penyediaan permukaan seperti menampal retak, mengampelas dan menyapu primer, jenama serta rangkaian cat, bilangan lapisan, perlindungan perabot dan lantai, waktu kerja, dan waranti bertulis bagi pengelupasan, gelembung serta warna tidak sekata." },
      { q: "Bagaimanakah saya mengesahkan hasil kerja terdahulu tukang cat?", a: "Minta foto setiap peringkat penyediaan, bukan bilik yang sudah siap sahaja. Tukang cat yang merekod kerja menampal, mengampelas dan menyapu primer biasanya benar-benar melaksanakan langkah tersebut. Jika jadual mengizinkan, lawatan ke tapak kerja semasa memberi bukti lebih kukuh." },
      { q: "Patutkah saya membeli cat atau membiarkan tukang cat membekalkannya?", a: "Biarkan tukang cat membekalkannya supaya beliau bertanggungjawab terhadap keserasian bahan dan waranti sistem. Jika anda membeli cat sendiri lalu kemasan gagal, tukang cat mungkin menyalahkan bahan manakala kedai cat pula menyalahkan cara sapuan." },
      { q: "Apakah tempoh mengecat yang munasabah bagi rumah teres?", a: "Bahagian dalaman rumah teres dua tingkat biasa mengambil kira-kira 5–7 hari bekerja dengan pasukan dua atau tiga orang. Kerja luaran menambah 3–5 hari bergantung pada akses dan cuaca. Jadual yang jauh lebih singkat mungkin menandakan langkah persediaan dipotong." }
    ],
    zh: [
      { q: "油漆工的报价应包括什么？", a: "报价应逐项列明基层处理，例如补裂、打磨和底漆，以及油漆品牌与系列、涂层数量、家具和地板保护、施工时间，并提供涵盖脱皮、起泡与色泽不均的书面保修。" },
      { q: "怎样核实油漆工过去的工程？", a: "要求查看基层处理各阶段的照片，而不只是完工房间。愿意记录补裂、打磨和底漆过程的油漆工，通常确实执行这些步骤；若时间许可，到其当前工地查看会更可靠。" },
      { q: "油漆应该由我购买，还是由油漆工供应？", a: "让油漆工供应较妥当，这样材料配套和系统保修都由其负责。若屋主自行供漆后出现问题，油漆工可能归咎于产品，油漆店则可能归咎于施工，责任难以厘清。" },
      { q: "粉刷一间排屋需要多长时间才合理？", a: "一般两层排屋的室内工程，由两至三人团队施工约需 5–7 个工作日；外墙则按通道和天气再增加 3–5 天。若工期明显更短，可能意味着省略了必要的基层处理。" }
    ]
  },
  "guides:how-to-choose-plumber-kl": {
    ms: [
      { q: "Adakah tukang paip memerlukan lesen di Malaysia?", a: "Bagi kerja bekalan air yang bersambung dengan saluran utama, kelayakan berkaitan diperlukan, termasuk kerja pada sambungan IWK dan bekalan utama. Penggantian kelengkapan dalaman mungkin kurang formal dari segi syarat, tetapi kemahiran diagnosis dan pemasangan tetap mesti dibuktikan." },
      { q: "Bagaimanakah saya mengetahui sama ada tukang paip itu cekap?", a: "Tanya cara beliau mengesan kebocoran tersembunyi sebelum memecahkan lantai atau dinding. Tukang yang cekap akan menerangkan ujian tekanan dan pengesanan akustik, bukannya terus mencadangkan untuk membuka permukaan dan mencari secara cuba-cuba." },
      { q: "Patutkah sebut harga tukang paip disertakan foto?", a: "Bagi kerja pembaikan, tukang paip profesional lazimnya menyediakan foto sebelum dan selepas. Foto tersebut merekodkan kerosakan, kaedah pembaikan dan bahan yang digunakan, lalu menjadi bukti penting untuk tuntutan insurans serta penguatkuasaan waranti." },
      { q: "Apakah waranti yang patut diberikan bagi kerja paip?", a: "Kerja pembaikan patut mempunyai waranti mutu kerja sekurang-kurangnya 30 hari, manakala pemasangan baharu sekitar 12 bulan. Waranti perlu meliputi kebocoran sambungan dan kegagalan kelengkapan, bukan alat ganti sahaja." }
    ],
    zh: [
      { q: "马来西亚的水管工需要执照吗？", a: "涉及连接总水管的供水工程需要相关资格，包括 IWK 连接和主供水工程。更换室内洁具的要求可能较不正式，但施工人员仍须证明其诊断和安装能力。" },
      { q: "怎样判断水管工是否胜任？", a: "先问他在敲开地面或墙壁前会怎样寻找暗漏。合格水管工会说明压力测试和声学检测方法，而不是只说先拆开地面再找；诊断思路最能反映其专业程度。" },
      { q: "水管维修报价应该附照片吗？", a: "专业水管工通常会为维修提供施工前后照片，记录故障、修复过程和所用材料。这些资料也是日后申请保险赔偿和执行保修时的重要证据。" },
      { q: "水管工程应提供怎样的保修？", a: "一般维修的施工保修至少应有 30 天，新安装工程则应有约 12 个月。保修必须涵盖接头漏水与配件安装故障，而不能只保障零件本身。" }
    ]
  },
  "guides:how-to-choose-waterproofing-contractor-kl": {
    ms: [
      { q: "Bagaimanakah saya tahu kebocoran perlu dipecahkan atau boleh dibaiki tanpa pecah?", a: "Kontraktor yang cekap akan menjalankan ujian takungan air, pengesanan pewarna dan penilaian keadaan membran terlebih dahulu. Jika kaedah tanpa pecah disyorkan tanpa ujian, atau kerja pecah dicadangkan tanpa menunjukkan membran yang gagal, dapatkan pendapat kedua." },
      { q: "Apakah yang patut diliputi oleh waranti kalis air?", a: "Waranti perlu meliputi keseluruhan sistem yang dipasang daripada kebocoran berulang sepanjang tempoh yang dinyatakan, bukan bahan sahaja. Waranti bahan semata-mata tidak membantu jika kegagalan berpunca daripada penyediaan atau sapuan yang salah." },
      { q: "Patutkah kontraktor berurusan dengan jiran di tingkat bawah?", a: "Ya. Kebocoran antara tingkat memerlukan akses ke unit bawah untuk pemeriksaan dan ujian. Kontraktor profesional mengatur penyelarasan ini dan memasukkannya dalam skop kerja, bukannya menyerahkan urusan tersebut kepada anda selepas kerja bermula." },
      { q: "Bagaimanakah saya mengesahkan pengalaman kontraktor kalis air?", a: "Minta kajian kes yang menunjukkan foto diagnosis, setiap peringkat pembaikan dan ujian selepas siap. Rekod lengkap membolehkan anda menilai sama ada kontraktor menggunakan proses yang konsisten, bukan sekadar mempamerkan permukaan yang sudah cantik." }
    ],
    zh: [
      { q: "怎样判断漏水需要拆砖，还是可以免拆维修？", a: "合格承包商会先进行蓄水测试、染色追踪及防水层状况评估。若未测试便推荐免拆方案，或无法展示防水层失效证据便要求拆除，应另寻第二意见。" },
      { q: "防水保修应该涵盖什么？", a: "保修应保障已安装的整个系统在指定期限内不再渗漏，而不只是保障材料。若只保材料，基层处理或涂布失误造成的漏水便可能无人负责，保修也失去实际意义。" },
      { q: "承包商应负责与楼下邻居协调吗？", a: "应该。楼层间渗漏需要进入楼下单位检查和测试，专业承包商应把协调工作纳入施工范围，而不是开工后才要求屋主自行处理。" },
      { q: "怎样核实防水承包商的经验？", a: "要求查看包含诊断、维修各阶段及完工后测试照片的案例。完整记录比单纯展示漂亮的完成面更能证明承包商是否持续依照正确流程施工。" }
    ]
  },
  "guides:how-to-choose-ceiling-contractor-kl": {
    ms: [
      { q: "Berapakah jarak rangka yang betul untuk siling papan gipsum?", a: "Kebanyakan pengeluar menetapkan jarak pusat 400–450 mm bagi papan standard kerana jarak lebih lebar boleh menyebabkan siling kendur. Minta kontraktor menunjukkan ukuran pada pelan rangka, bukan sekadar mengatakan bahawa pasukan mereka mengikut kebiasaan industri." },
      { q: "Perlukah sambungan siling diperkukuh?", a: "Ya. Setiap sambungan dan penjuru sistem siling plaster perlu menggunakan pita pengukuh serta beberapa lapisan sebatian penyambung. Kaedah inilah yang mengurangkan retak akibat pergerakan, berbanding kemasan satu lapisan yang mudah retak dalam beberapa bulan." },
      { q: "Bagaimanakah saya memeriksa penyelarasan lampu bawah?", a: "Sebelum papan dipasang, kedudukan setiap lampu perlu ditanda pada rangka dan kawasan potongan diperkukuh. Menambah lampu selepas papan siap memerlukan pemotongan pada siling berkemasan dan meningkatkan risiko retak serta kedudukan yang tersasar." },
      { q: "Apakah waranti yang patut diberikan bagi kerja siling?", a: "Siling papan gipsum standard patut membawa waranti mutu kerja selama 12 bulan. Sistem siling plaster premium boleh menawarkan sehingga 10 tahun bagi masalah kendur dan retak; tempohnya mesti mencerminkan spesifikasi sistem, bukan janji lisan semata-mata." }
    ],
    zh: [
      { q: "石膏板天花的龙骨间距应该是多少？", a: "大多数制造商为普通板规定 400–450 毫米的中心间距，间距过宽日后容易下垂。应要求承包商在龙骨图上标示实际尺寸，而不是只说会按照行业标准。" },
      { q: "天花板接缝需要加固吗？", a: "需要。灰泥天花系统的每一道接缝和转角都应使用加强带及多层接缝膏，这正是减少热胀冷缩裂缝的关键；普通单层处理往往数月后便会开裂。" },
      { q: "怎样检查筒灯位置是否已协调？", a: "封板前应在龙骨上标出每盏筒灯的位置，并加固开孔周围。封板后才增加筒灯会切入已完成的天花，提高裂缝和位置偏差的风险。" },
      { q: "天花工程应提供怎样的保修？", a: "普通石膏板天花的施工保修应为 12 个月；高档灰泥天花系统对下垂和开裂可提供最长 10 年保修。期限应与完整系统规格相符，而不能只是口头承诺。" }
    ]
  },
  "guides:how-to-choose-handyman-kl": {
    ms: [
      { q: "Bagaimanakah saya mengenal pasti tukang rumah yang profesional?", a: "Tukang profesional menerangkan langkahnya sebelum bermula, termasuk mengenal pasti jenis dinding, memilih sauh dan mengira beban. Tukang cuai terus mengambil gerudi lalu membuat keputusan pada dinding; perbezaan sikap ini biasanya jelas dalam lima minit pertama." },
      { q: "Patutkah tukang rumah mempunyai perlindungan insurans?", a: "Ya. Insurans liabiliti awam melindungi anda jika tukang merosakkan harta anda atau jiran, ataupun mencederakan seseorang semasa bekerja. Minta sijil yang masih sah; penyedia perkhidmatan profesional sepatutnya boleh menunjukkannya tanpa berlengah." },
      { q: "Manakah lebih baik, sebut harga tetap atau kadar mengikut jam?", a: "Bagi kerja yang skopnya jelas seperti pemasangan, pembaikan dan pemasangan perabot, harga tetap melindungi anda daripada tempoh yang sengaja dipanjangkan. Bagi senarai kerja terbuka yang skopnya belum diketahui, kadar jam bersama anggaran masa ialah pilihan yang lebih jujur." },
      { q: "Apakah yang berlaku jika kerja tukang rumah gagal kemudian?", a: "Kerja dengan waranti perlu dibaiki semula tanpa caj dalam tempoh perlindungan. Jika tukang langsung tidak menawarkan waranti, bayaran anda sebenarnya hanya membeli satu percubaan, bukan hasil siap yang dipertanggungjawabkan." }
    ],
    zh: [
      { q: "怎样判断杂工是否专业？", a: "专业人员开工前会说明方法，包括辨认墙体、选择锚栓和计算承重；草率施工者则拿起电钻后才在墙上临时决定。通常在最初五分钟内便能看出这种差别。" },
      { q: "杂工应该购买保险吗？", a: "应该。公共责任保险可在施工人员损坏你或邻居的财物，或工作期间导致他人受伤时提供保障。应要求查看有效证书，专业服务商通常能立即提供。" },
      { q: "固定报价和按小时收费哪一种较好？", a: "挂装、维修和家具组装等范围明确的工作适合固定报价，可避免工时被拖长。若待办清单开放且范围确实无法预先确定，按小时收费并提供时间估算会更诚实。" },
      { q: "如果杂工的工程之后失效怎么办？", a: "有保修的工程应在保障期内免费返工。若施工人员完全不提供保修，你付费购买的只是一次尝试，而不是由对方负责到底的完成成果。" }
    ]
  },
  "guides:paint-brand-comparison-nippon-vs-dulux-vs-jotun": {
    ms: [
      { q: "Jenama manakah mempunyai cat dalaman paling tahan kotoran?", a: "Nippon Spot-less Plus dan Dulux EasyClean hampir setara dari segi ketahanan kotoran, manakala Jotun Majestic True Beauty menumpukan kemasan premium. Pilihan terbaik bergantung pada sama ada anda lebih mengutamakan permukaan mudah dilap atau kedalaman rupa warna." },
      { q: "Jenama manakah paling tahan lama pada luaran rumah di Malaysia?", a: "Dulux Weathershield, Nippon Weatherbond dan Jotun Jotashield masing-masing membawa tuntutan sekitar 5–7 tahun. Prestasi sebenar lebih bergantung pada pilihan primer, penyediaan permukaan dan mutu sapuan berbanding jenama cat kemasan semata-mata." },
      { q: "Adakah Jotun berbaloi dengan harga lebih tinggi berbanding Nippon dan Dulux?", a: "Bagi dinding tumpu dan luaran yang menerima cahaya matahari sangat kuat, pantulan haba serta pengekalan warna Jotun boleh mewajarkan kosnya. Untuk dalaman biasa dan luaran terlindung, Nippon atau Dulux mampu memberi hasil setanding pada harga lebih rendah." },
      { q: "Bolehkah saya menggunakan primer dan cat kemasan daripada jenama berlainan?", a: "Pengeluar menguji dan memberi waranti kepada primer serta cat kemasan sebagai satu sistem sepadan. Apabila jenama dicampur, kedua-dua pihak boleh menolak tuntutan jika kemasan gagal. Gunakan satu sistem jenama supaya perlindungan waranti kekal jelas." }
    ],
    zh: [
      { q: "哪一个品牌的内墙漆最抗污？", a: "Nippon Spot-less Plus 与 Dulux EasyClean 的抗污表现相近，Jotun Majestic True Beauty 则着重高档饰面。最佳选择取决于你更重视容易擦洗，还是颜色与表面的视觉层次。" },
      { q: "哪一个品牌在马来西亚外墙上最耐久？", a: "Dulux Weathershield、Nippon Weatherbond 和 Jotun Jotashield 都有约 5–7 年的耐久说明。实际寿命更取决于底漆选择、基层处理与施工质量，而不是只由面漆品牌决定。" },
      { q: "Jotun 比 Nippon 和 Dulux 贵，是否值得？", a: "对于特色墙或受到强烈日晒的外墙，Jotun 的热反射和保色表现可能值得额外费用。普通室内与有遮挡的外墙使用 Nippon 或 Dulux，通常能以较低成本取得相近效果。" },
      { q: "底漆和面漆可以使用不同品牌吗？", a: "制造商以配套系统测试并保修底漆与面漆。混用品牌后若系统失效，双方都可能拒绝保修；采用同一品牌的完整配套，责任和保障才清楚。" }
    ]
  },
  "guides:waterproofing-method-comparison-pu-vs-membrane": {
    ms: [
      { q: "Bagaimanakah saya mengetahui sama ada membran kalis air sudah gagal?", a: "Jalankan ujian takungan air sambil memeriksa siling di bawah, kemudian periksa sama ada membran terpisah pada garisan grout dan tepi. Jika lapisan itu terangkat atau hancur apabila diuji, membran telah gagal dan suntikan sahaja tidak dapat memulihkannya." },
      { q: "Bolehkah suntikan PU memberi masa sebelum pembaikan penuh?", a: "Boleh. Suntikan menghentikan kebocoran aktif sementara anda merancang penggantian membran penuh. Ini pendekatan dua peringkat yang munasabah apabila kerja meroboh serta-merta tidak praktikal, asalkan ia tidak digambarkan sebagai penyelesaian kekal." },
      { q: "Kaedah manakah mempunyai waranti lebih panjang?", a: "Penggantian membran penuh boleh membawa waranti sehingga 5 tahun, manakala suntikan PU biasanya 1–2 tahun. Perbezaan itu mencerminkan skop: suntikan merawat titik tertentu, tetapi membran menggantikan keseluruhan sistem kalis air." },
      { q: "Adakah terdapat pilihan antara suntikan dan kerja pecah penuh?", a: "Dalam keadaan tertentu, membran cecair boleh disapu di atas jubin sedia ada tanpa kerja pecah. Namun, kaedah ini menaikkan aras lantai, mempengaruhi kelegaan pintu dan hanya sesuai jika substrat di bawah jubin masih kukuh." }
    ],
    zh: [
      { q: "怎样判断防水层已经失效？", a: "进行蓄水测试并观察楼下天花，同时检查填缝线和边缘是否出现防水层脱层。若探查时防水层会掀起或碎裂，表示系统已经失效，单靠灌注不能修复。" },
      { q: "PU 灌注能否为全面维修争取时间？", a: "可以。灌注可先阻止活动漏水，让屋主有时间安排全面更换防水层。在无法立即拆除时，这是合理的两阶段方法，但不应被当作永久修复来销售。" },
      { q: "哪一种方法的保修较长？", a: "全面更换防水层可提供最长约 5 年保修，PU 灌注通常为 1–2 年。差别来自工程范围：灌注只处理特定裂缝或接缝，防水层则更换整个系统。" },
      { q: "灌注和全面拆除之间还有其他方法吗？", a: "某些情况下可在现有瓷砖上涂布液体防水膜而无需拆除，但会提高地面、影响门底净空，而且只有在瓷砖下基层仍然稳固时才适用。" }
    ]
  },
  "guides:ceiling-material-comparison-plaster-vs-gypsum": {
    ms: [
      { q: "Jenis siling manakah sesuai untuk kondominium yang rendah?", a: "Papan gipsum rata dengan penurunan minimum sesuai apabila ruang kepala terhad, manakala sistem siling plaster memerlukan kedalaman tambahan untuk beberapa lapisan skim. Jika lampu teluk dirancang, kedalaman profil mesti mengambil kira saluran lampu dari awal." },
      { q: "Mengapakah siling gipsum saya retak selepas setahun?", a: "Kemasan sambungan biasa tanpa pengukuh tidak mampu menampung pergerakan haba dalam iklim Malaysia. Sistem siling plaster menggunakan sambungan berpengukuh dan beberapa lapisan skim yang direka khusus untuk mengurangkan jenis keretakan ini." },
      { q: "Bolehkah siling plaster dipasang di kawasan basah?", a: "Boleh jika sistem premium menggunakan papan tahan lembap di bilik mandi dan dapur bersama sambungan berpengukuh yang sama. Kosnya lebih tinggi daripada papan gipsum MR, tetapi memberikan rupa tanpa sambungan yang seragam di seluruh rumah." },
      { q: "Jenis siling manakah menambah lebih banyak nilai hartanah?", a: "Siling plaster yang dipasang rapi bersama lampu teluk kelihatan sebagai ciri premium semasa lawatan pembeli. Namun, nilainya datang daripada reka bentuk dan mutu pelaksanaan, bukan nama bahan sahaja; kerja yang retak atau kendur menjejaskan tanggapan sebaliknya." }
    ],
    zh: [
      { q: "哪一种天花适合层高较低的公寓？", a: "净高有限时，采用最小降高的平面石膏板较合适；灰泥天花系统因多层批荡需要更多深度。若计划安装灯槽，应在设计时把灯槽所需空间一并计算。" },
      { q: "为什么石膏板天花一年后会开裂？", a: "没有加强处理的普通接缝难以承受马来西亚环境中的热胀冷缩。灰泥天花系统采用加强接缝和多层批荡，正是为了降低这类裂缝风险。" },
      { q: "潮湿空间可以安装灰泥天花吗？", a: "可以，但高档系统应在卫生间和厨房采用防潮板，并使用同样的加强接缝。其费用高于 MR 防潮石膏板，却能让全屋保持一致的无缝饰面。" },
      { q: "哪一种天花更能提升房产价值？", a: "施工精良并配有灯槽的灰泥天花，在看房时通常显得较高档。但价值来自设计与施工质量，而不只是材料名称；若出现裂缝或下垂，反而会降低观感。" }
    ]
  },
  "guides:plumbing-pipe-comparison-pvc-vs-copper-vs-ppr": {
    ms: [
      { q: "Paip manakah paling sesuai untuk saluran air panas?", a: "Tembaga menampung julat suhu penuh dan boleh bertahan berdekad-dekad. PPR dengan sambungan kimpalan haba ialah pilihan moden yang menghapuskan sambungan berulir yang mudah bocor pada sistem tembaga. PVC biasa tidak dinilai untuk air panas." },
      { q: "Adakah PPR lebih baik daripada tembaga?", a: "Sambungan kimpalan haba PPR mengurangkan titik bocor pada sambungan berulir dan pemasangannya lebih pantas. Namun, rekod penggunaan tembaga melebihi 50 tahun, lebih panjang daripada sejarah PPR sekitar 25 tahun di Malaysia; pilihan perlu mengambil kira aplikasi dan pemasang." },
      { q: "Bolehkah saya menggunakan PVC untuk seluruh rumah?", a: "PVC sesuai bagi bekalan air sejuk dan saliran sahaja. Saluran air panas memerlukan tembaga, PPR atau CPVC. Menggunakan PVC biasa untuk air panas ialah jalan pintas yang boleh menyebabkan paip lembut, berubah bentuk dan akhirnya bocor." },
      { q: "Adakah ketiga-tiga jenis paip memerlukan pensijilan SIRIM?", a: "Ya. Setiap paip yang membawa air minuman di Malaysia patut mempunyai pensijilan SIRIM QAS bagi mengesahkan kadar tekanan dan keselamatan bahan. Paip tanpa pensijilan boleh menjejaskan tuntutan insurans apabila berlaku kerosakan air." }
    ],
    zh: [
      { q: "热水管最适合使用哪一种管材？", a: "铜管可承受完整温度范围并使用数十年；采用热熔接头的 PPR 是现代替代方案，可避免铜管螺纹连接常见的漏点。普通 PVC 不适用于热水。" },
      { q: "PPR 比铜管更好吗？", a: "PPR 热熔接头减少了螺纹连接的漏水点，安装也较快；但铜管已有超过 50 年的使用记录，长于 PPR 在马来西亚约 25 年的历史。选择仍应按用途与施工能力决定。" },
      { q: "全屋都可以使用 PVC 管吗？", a: "PVC 只适合冷水供应和排水。热水管应采用铜管、PPR 或 CPVC；把普通 PVC 用于热水会令管材软化、变形，最终造成漏水。" },
      { q: "这三种管材都需要 SIRIM 认证吗？", a: "需要。马来西亚所有输送饮用水的管材都应具备 SIRIM QAS 认证，以确认耐压等级和材料安全。使用未经认证的管材，也可能影响水损保险索赔。" }
    ]
  },
  "guides:tv-mount-types-comparison-fixed-vs-tilt-vs-full-motion": {
    ms: [
      { q: "Jenis pendakap televisyen manakah paling selamat?", a: "Pendakap tetap yang dinilai melebihi berat televisyen dan dipasang pada batu padu atau stud yang disauh dengan betul biasanya paling selamat. Mekanisme yang lebih ringkas mempunyai kurang titik kegagalan, manakala lengan gerak penuh menambah daya tuil pada setiap pengikat." },
      { q: "Bolehkah pendakap gerak penuh dipasang pada papan plaster?", a: "Boleh hanya jika pendakap disauh pada stud logam atau kayu di belakang papan, bukan pada papan itu sendiri. Televisyen 55 inci pada lengan yang dipanjangkan menghasilkan daya tuil besar yang tidak mampu ditanggung oleh papan plaster sahaja." },
      { q: "Adakah pendakap condong membantu mengurangkan silau tingkap?", a: "Ya. Kecondongan ke bawah sekitar 15° boleh mengurangkan pantulan lampu siling dan tingkap pada aras mata. Ciri ini amat berguna di ruang tamu Malaysia yang mempunyai tingkap besar serta banyak lampu bawah." },
      { q: "Bagaimanakah saya mengetahui berat televisyen saya?", a: "Semak helaian spesifikasi pengeluar dan gunakan angka berat tanpa kaki meja. Pendakap mesti dinilai melebihi angka itu dengan margin keselamatan; jangan sekali-kali memilih pendakap yang had bebannya lebih rendah daripada berat sebenar televisyen." }
    ],
    zh: [
      { q: "哪一种电视挂架最安全？", a: "额定承重高于电视重量，并正确固定在实心砖墙或龙骨上的固定式挂架通常最安全。结构越简单，潜在失效点越少；全活动臂则会放大每个固定点承受的杠杆力。" },
      { q: "全活动挂架可以安装在石膏板墙上吗？", a: "只有固定件穿过板材并锚定在后方金属或木龙骨时才可以，不能只靠石膏板承重。55 英寸电视伸出墙面后会产生很大杠杆力，单独的石膏板无法安全承受。" },
      { q: "倾斜式挂架有助于减少窗户眩光吗？", a: "有帮助。向下约 15° 可减少视线高度的窗户反光和顶灯倒影，尤其适合设有大窗户和多盏筒灯的马来西亚客厅。" },
      { q: "怎样查出电视机的重量？", a: "查看制造商规格表中不含桌面底座的重量，并选择额定承重留有安全余量的挂架。绝不能使用额定承重低于电视实际重量的产品。" }
    ]
  },
  "guidesMaintenance:painting-maintenance-schedule": {
    ms: [
      { q: "Berapa kerapkah saya perlu mengecat semula bahagian dalam rumah?", a: "Kawasan lalu lintas tinggi seperti lorong dan dapur biasanya perlu dicat semula setiap 3–5 tahun; bilik tidur dan ruang tamu bertahan 5–8 tahun dengan cat berkualiti. Kerja sentuhan kecil memanjangkan kitaran jika dikesan awal." },
      { q: "Apakah yang menyebabkan cat luaran cepat rosak di Malaysia?", a: "Kemerosotan UV, pertumbuhan alga pada dinding teduh, dan rekahan halus yang membenarkan lembapan masuk ke belakang filem — merawat rekahan dan alga sebelum merebak memanjangkan kitaran cat luaran dengan ketara." },
      { q: "Bolehkah saya membuat sentuhan tanpa mengecat semula seluruh dinding?", a: "Boleh, jika anda menyimpan kod dan kelompok cat asal — tetapi sentuhan pada cat lama sering kelihatan dengan kilauan yang sedikit berbeza. Untuk kawasan yang terlihat, cat keseluruhan dinding dari satu penjuru ke penjuru lain menyembunyikan pembaikan." },
      { q: "Perlukah saya mencuci dinding sebelum membuat sentuhan?", a: "Sentiasa — habuk, gris dan kesan nikotin pada permukaan menghalang cat sentuhan daripada melekat dengan baik. Cucian dengan detergen lembut dan pengeringan menyeluruh sebelum sebarang cat digunakan adalah wajib." }
    ],
    zh: [
      { q: "室内的墙壁应该多久重新粉刷一次？", a: "走廊和厨房等人流较多的区域通常每 3–5 年需要重新粉刷；使用优质油漆时，卧室和客厅可维持 5–8 年。及早发现并补漆能延长整体周期。" },
      { q: "在马来西亚，外墙漆为什么会提早损坏？", a: "紫外线老化、背阴墙面长藻，以及细小裂缝让水分渗入漆膜背后，都是主因。在裂缝和藻类扩散前处理，能明显延长外墙重新粉刷的周期。" },
      { q: "可以只补漆而不整面墙重刷吗？", a: "如果还保留原来的漆色编号和批次，可以。但旧漆上的补漆常会呈现略微不同的光泽。在显眼区域，从墙角到墙角整面重刷才能盖住修补痕迹。" },
      { q: "补漆前需要先清洗墙壁吗？", a: "一定要。表面的灰尘、油污和尼古丁会让补漆无法牢固附着。用温和清洁剂清洗并彻底晾干后再上漆，这一步不可省略。" }
    ]
  },
  "guidesMaintenance:plumbing-annual-checklist": {
    ms: [
      { q: "Apakah yang perlu saya periksa pada sistem paip setiap tahun?", a: "Injap pengasingan (putar buka dan tutup), hos fleksibel (periksa bengkak atau karat), tekanan air (konsisten pada semua kelengkapan), dan sambungan paip yang terlihat (kering bermakna sihat, lembap bermakna perlu siasat)." },
      { q: "Mengapakah injap pengasingan penting?", a: "Kerana apabila paip pecah pada pukul 2 pagi, injap pengasingan menjadi penentu antara pembaikan terkawal dengan rumah yang banjir — injap yang bertahun-tahun tidak diputar akan tersekat tepat ketika paling diperlukan." },
      { q: "Perlukah hos fleksibel diganti mengikut jadual?", a: "Ya — hos berjalinan keluli pada pemanas air dan mesin basuh perlu diganti setiap 5 tahun tanpa mengira rupa, kerana kemerosotan dalaman tidak kelihatan sehingga hos pecah." },
      { q: "Berapakah tekanan air normal di rumah Malaysia?", a: "Lazimnya 2–4 bar pada pili — bawah 2 bar menandakan masalah bekalan atau pam; melebihi 5 bar berisiko merosakkan kelengkapan dan hos fleksibel. Tolok tekanan ringkas pada mana-mana pili menunjukkan keadaan sebenar." }
    ],
    zh: [
      { q: "每年应该检查水管系统的哪些部分？", a: "隔离阀（来回开关）、软管（看是否鼓包或生锈）、水压（各出水口是否一致），以及外露的管接头（干燥代表正常，潮湿代表需要排查）。" },
      { q: "隔离阀为什么这么重要？", a: "因为当水管在凌晨两点爆裂时，隔离阀决定了是小范围抢修还是全屋被淹。多年没有转动过的阀门，恰恰会在最需要它时卡死。" },
      { q: "软管是否需要按固定周期更换？", a: "需要。热水器和洗衣机上的不锈钢编织软管无论外观如何，都应每 5 年更换一次，因为内部老化在外观上无法察觉，直到软管爆裂才会发现。" },
      { q: "马来西亚住宅的正常水压是多少？", a: "水龙头处通常为 2–4 bar。低于 2 bar 可能是供水或水泵问题；高于 5 bar 则可能损坏洁具和软管。用简单的压力表在任一水龙头测量即可判断。" }
    ]
  },
  "guidesMaintenance:ceiling-maintenance-tips": {
    ms: [
      { q: "Apakah tanda awal masalah pada siling?", a: "Kesan air (gelang kuning atau coklat selepas hujan), rekahan halus pada sambungan, kendur yang terlihat antara titik rangka, dan tompok kulat pada siling bilik mandi — semuanya menandakan masalah yang bertambah buruk jika diabaikan." },
      { q: "Bolehkah siling yang kendur runtuh?", a: "Boleh — papan gipsum yang tepu air boleh tertanggal daripada rangka tanpa amaran. Jika anda melihat kendur, jauhkan perabot dan penghuni daripada kawasan itu dan panggil pemeriksaan pada hari yang sama." },
      { q: "Perlukah saya memeriksa siling selepas setiap musim tengkujuh?", a: "Selepas setiap hujan lebat, lakukan pemeriksaan visual ringkas pada semua siling — terutamanya di bawah bilik mandi, balkoni dan lembah bumbung di atas — untuk menangkap kebocoran ketika masih kecil dan mudah dibaiki." },
      { q: "Bagaimanakah saya membersihkan kulat daripada siling bilik mandi?", a: "Gunakan peluntur cair atau rawatan kulat komersial, pengudaraan yang baik dan alat perlindungan — tetapi jika kulat kembali dalam beberapa minggu, puncanya ialah lembapan berterusan daripada kebocoran atau pengaliran udara yang tidak mencukupi, bukan sekadar pertumbuhan permukaan." }
    ],
    zh: [
      { q: "天花板出问题的最初征兆是什么？", a: "水渍（雨后出现的黄色或褐色水圈）、接缝处的细小裂缝、龙骨之间可见的下垂，以及卫生间天花板的霉斑，这些都是问题恶化的信号，不应忽视。" },
      { q: "下垂的天花板会塌下来吗？", a: "会。吸满水的石膏板可能毫无预警地从龙骨上脱落。一旦发现下垂，应把家具和人员移离该区域，并在当天安排检查。" },
      { q: "每次季风后都需要检查天花板吗？", a: "每次暴雨后都应快速目视检查所有天花板，尤其是卫生间、阳台下方及上方屋面天沟的位置，以便在漏水尚小、容易修复时就发现。" },
      { q: "怎样清除卫生间天花板上的霉菌？", a: "使用稀释漂白水或市售除霉剂，并做好通风和防护。但若霉菌在数周内复发，原因是漏水或通风不良造成的持续潮湿，而不只是表面滋生。" }
    ]
  },
  "guidesMaintenance:waterproofing-recheck-schedule": {
    ms: [
      { q: "Berapa kerapkah kalis air bilik mandi perlu diperiksa?", a: "Sambungan silikon dan garisan grout setiap 6 bulan; ujian takungan air penuh setiap 2–3 tahun atau selepas sebarang kerja ubah suai yang mengganggu lantai. Mengesan sambungan gagal lebih awal mengelakkan kebocoran antara tingkat yang kosnya 10 kali ganda." },
      { q: "Apakah yang terlibat dalam ujian takungan air?", a: "Sumbat saliran, takungkan air sedalam 20–30 mm, dan periksa siling di bawah pada jam ke-24 dan ke-72 untuk sebarang kelembapan atau kesan air — ujian ringkas yang mengesahkan sama ada membran masih berfungsi." },
      { q: "Perlukah kalis air bumbung diperiksa sebelum tengkujuh?", a: "Semestinya — pemeriksaan pra-tengkujuh terhadap keadaan membran, kelancaran saliran dan pengedap tebat ialah insurans termurah bagi kebocoran yang dijumpai hujan tengkujuh dalam masa beberapa hari." },
      { q: "Bolehkah saya mengedap semula sambungan bilik mandi sendiri?", a: "Boleh untuk pembaharuan silikon permukaan — bersihkan, keringkan dan sapukan silikon sanitari berkualiti. Tetapi jika sambungan terus gagal, substrat di belakangnya mungkin lembap atau bergerak, dan ini memerlukan penilaian profesional." }
    ],
    zh: [
      { q: "卫生间防水应该多久检查一次？", a: "硅胶接缝和填缝线每 6 个月检查一次；蓄水测试每 2–3 年或任何翻动地面的装修改动后进行一次。及早发现失效接缝，可避免费用高出 10 倍的楼层间渗漏。" },
      { q: "蓄水测试怎么做？", a: "堵住地漏，把地面蓄水到 20–30 毫米深，在第 24 和第 72 小时检查楼下天花板有无潮湿或水渍——这个简单测试能确认防水层是否仍然有效。" },
      { q: "季风前需要检查屋面防水吗？", a: "非常需要。在季风前检查防水层状况、排水是否畅通以及泛水密封，是防范暴雨数天内就会暴露的漏水的最便宜保险。" },
      { q: "卫生间接缝可以自己重新密封吗？", a: "表面硅胶更新可以自己动手——清洁、晾干并涂上优质卫生级硅胶。但如果接缝反复失效，背后的基层可能已潮湿或移动，就需要专业人员评估。" }
    ]
  },
  "guidesMaintenance:home-handyman-monthly-checklist": {
    ms: [
      { q: "Apakah yang perlu saya periksa di sekitar rumah setiap bulan?", a: "Kendalian pintu (selak, engsel, kunci), kunci tingkap dan jeriji, pengukuhan perabot pada unit tinggi, fungsi pengesan asap, dan sebarang barang yang dipasang di dinding yang mungkin longgar akibat gegaran atau kelembapan." },
      { q: "Mengapakah pintu mengendur di rumah Malaysia?", a: "Kelembapan menyebabkan kayu mengembang dan engsel longgar — pemeriksaan bulanan menangkap kendur awal sebelum pintu bergesel dengan lantai atau selak gagal berfungsi, iaitu ketika pembaikan hanyalah pelarasan lima minit." },
      { q: "Perlukah perabot tinggi diikat pada dinding?", a: "Sentiasa — rak buku, almari pakaian dan unit TV yang lebih tinggi daripada 1.2 m perlu diikat pada dinding dengan pengikat yang dinilai, terutamanya di rumah beranak kecil. Rak buku yang tumbang ialah risiko keselamatan yang serius." },
      { q: "Berapa kerapkah pengesan asap perlu diuji?", a: "Setiap bulan — tekan butang ujian dan pastikan penggera berbunyi. Ganti bateri setiap tahun (atau gunakan unit litium 10 tahun), dan ganti keseluruhan pengesan setiap 10 tahun tanpa mengira keadaannya." }
    ],
    zh: [
      { q: "每个月应该检查家里的哪些地方？", a: "门的运作（锁舌、铰链、门锁）、窗锁和铁花、高大家具的固定、烟雾探测器的功能，以及任何可能因震动或潮湿而松动的壁挂物品。" },
      { q: "马来西亚住宅的门为什么会下垂？", a: "潮湿会让木材膨胀、铰链松动。每月检查能在门刮地板或锁舌失效前发现早期下垂，这时只需五分钟的调整就能修复。" },
      { q: "高家具需要固定在墙上吗？", a: "一定要。高度超过 1.2 米的书架、衣柜和电视柜都应使用有额定承重的固定件固定到墙上，尤其是有小孩的家庭。倾倒的书架是严重的安全隐患。" },
      { q: "烟雾探测器应该多久测试一次？", a: "每月一次，按下测试按钮确认警报响起。电池每年更换（或使用 10 年寿命的锂电池型号），整个探测器无论是否仍正常，都应每 10 年更换一次。" }
    ]
  },
  "guidesMaintenance:rainy-season-home-prep": {
    ms: [
      { q: "Bilakah musim tengkujuh menjejaskan rumah di KL?", a: "Monsun barat daya (Mei–September) membawa cuaca lebih kering; monsun timur laut (November–Mac) membawa hujan lebat yang menguji kalis air, sistem saliran dan kemasan luaran rumah anda." },
      { q: "Apakah yang perlu saya periksa sebelum musim hujan?", a: "Talang bumbung dan paip turun (bersih daripada daun dan sampah), pengedap tingkap dan lubang tangis air (mengalir lancar), keadaan cat luaran (rekahan membenarkan air masuk ke belakang filem), dan mana-mana titik bocor dari musim sebelumnya." },
      { q: "Bolehkah saya membuat kerja kalis air semasa musim hujan?", a: "Pengedap kecemasan boleh dibuat antara kejadian hujan, tetapi pemasangan membran yang betul memerlukan keadaan kering dan masa pengawetan — menjadualkan kalis air sebelum tengkujuh sentiasa lebih bijak." },
      { q: "Perlukah saya memeriksa saliran jiran juga?", a: "Jika paip turun atau saliran mereka mengalir ke arah hartanah anda, ya — masalah saliran berkongsi adalah lazim di rumah teres, dan longkang jiran yang tersumbat boleh membanjiri tingkat bawah anda walau bagaimana lengkapnya persediaan anda sendiri." }
    ],
    zh: [
      { q: "季风什么时候会影响吉隆坡的房屋？", a: "西南季风（5–9 月）天气较干燥；东北季风（11–3 月）带来考验房屋防水、排水和外墙饰面的暴雨。" },
      { q: "雨季前应该检查什么？", a: "屋面天沟和落水管（清除树叶和杂物）、窗户密封条和泄水孔（排水顺畅）、外墙漆状况（裂缝会让水渗入漆膜背后），以及以往雨季出现过的任何漏水点。" },
      { q: "雨季期间可以做防水吗？", a: "两次降雨之间可以做紧急密封，但正规的防水层施工需要干燥条件和养护时间，所以在季风前安排防水始终是更明智的做法。" },
      { q: "也需要检查邻居的排水吗？", a: "如果邻居的落水管或排水口流向你的物业，就应该检查。排屋常见的共用排水问题中，邻居堵塞的排水沟无论你自己准备得多充分，都可能淹到你的底层。" }
    ]
  },
  "guidesMaintenance:post-renovation-cleanup-checklist": {
    ms: [
      { q: "Seberapa teliti pembersihan selepas ubah suai perlu dilakukan?", a: "Habuk pembinaan masuk ke dalam unit penyaman udara, soket elektrik, landasan almari dan saluran tingkap — pembersihan yang betul merangkumi semua ini, bukan sekadar permukaan yang terlihat, sebelum keluarga berpindah semula." },
      { q: "Perlukah saya memeriksa penyaman udara selepas ubah suai?", a: "Ya — habuk pembinaan menyumbat penapis penyaman udara dan menyelaputi gegelung, mengurangkan kecekapan dan kualiti udara. Cucian penapis dan pemeriksaan gegelung selepas ubah suai mengembalikan unit kepada keadaan asal." },
      { q: "Apakah yang perlu saya sahkan sebelum kontraktor beredar?", a: "Setiap kelengkapan berfungsi dengan betul, setiap sentuhan cat siap, setiap pengedap silikon bersih dan berterusan, setiap titik elektrik berfungsi, dan setiap permukaan bersih — ini ialah pemeriksaan senarai semak yang menangkap masalah ketika kontraktor masih bertanggungjawab." },
      { q: "Berapa lamakah pembersihan selepas ubah suai mengambil masa?", a: "Bagi pengubahsuaian rumah teres biasa, 1–2 hari pembersihan teliti termasuk servis penyaman udara, pembersihan landasan tingkap dan habuk bolong — pembersihan secara bajet membiarkan habuk pembinaan bertebaran selama berminggu-minggu." }
    ],
    zh: [
      { q: "装修后的清洁需要做到多彻底？", a: "建筑粉尘会进入空调机组、电源插座、衣柜轨道和窗槽。在家人搬回前，彻底清洁应覆盖所有这些地方，而不只是看得见的表面。" },
      { q: "装修后需要检查空调吗？", a: "需要。建筑粉尘会堵塞空调过滤网并覆盖盘管，降低效率和空气质量。装修后清洗过滤网并检查盘管，能让机组恢复到施工前的状态。" },
      { q: "承包商离开前应该确认什么？", a: "每件设施运作正常、每处补漆完成、每条硅胶密封干净连续、每个电源点正常、每个表面干净——这是逐项验收，能在承包商仍承担责任时发现并解决问题。" },
      { q: "装修后清洁需要多长时间？", a: "一般排屋装修后需要 1–2 天彻底清洁，包括空调保养、窗槽清洁和风口除尘。仅做预算级清洁会让建筑粉尘在室内循环数周。" }
    ]
  },
  "guidesMaintenance:condo-maintenance-checklist": {
    ms: [
      { q: "Apakah penyelenggaraan yang khusus untuk kehidupan kondo?", a: "Injap pengasingan unit (penutupan air kecemasan anda), saliran balkoni (kebocoran anda menjadi siling jiran), pintu kalis api (diwajibkan oleh peraturan strata), dan kerja berjadual JMB yang menjejaskan akses unit anda." },
      { q: "Adakah saya bertanggungjawab terhadap paip di dalam dinding kondo saya?", a: "Umumnya ya — paip dalam sempadan unit anda ialah tanggungjawab anda, manakala riser dan paip kawasan bersama adalah milik JMB. Semak pelan strata anda untuk sempadan yang tepat, kerana ini menentukan siapa yang menanggung kos kebocoran." },
      { q: "Perlukah saya berkoordinasi dengan JMB sebelum ubah suai?", a: "Sentiasa — kebanyakan kondo memerlukan notis ubah suai, sekatan waktu bekerja, tempahan lif dan kelulusan laluan sisa. Memulakan kerja tanpa koordinasi JMB berisiko didenda dan kerja dihentikan." },
      { q: "Berapa kerapkah saya perlu memeriksa kalis air balkoni?", a: "Setiap 6 bulan untuk rekahan yang terlihat pada lapisan dasar atau jubin, dan setiap tahun untuk kelancaran saliran — longkang balkoni yang tersumbat semasa hujan lebat boleh membanjiri ruang tamu anda dan unit di bawah serentak." }
    ],
    zh: [
      { q: "公寓生活有哪些特有的维护项目？", a: "单元隔离阀（你的紧急断水开关）、阳台排水（你的漏水会变成邻居的天花板问题）、防火门（分层地契规则要求），以及会影响你单元进出的物业管理公司安排的工作。" },
      { q: "公寓墙内的水管由我负责吗？", a: "通常是的。你单元范围内的水管由你负责，而竖管和公共区域水管归物业管理公司。请查看分层地契图以确认确切边界，因为这决定了漏水由谁承担。" },
      { q: "装修前需要与物业协调吗？", a: "一定要。多数公寓要求装修申报、遵守施工时间限制、预约电梯并取得建筑废料清运许可。未经物业协调就开工，可能面临罚款和停工。" },
      { q: "阳台防水应该多久检查一次？", a: "每 6 个月检查找平层或瓷砖有无可见裂缝，每年检查排水是否顺畅。暴雨时堵塞的阳台排水口，可能同时淹没你的客厅和楼下的单元。" }
    ]
  },
  "guidesMaintenance:landed-house-maintenance-calendar": {
    ms: [
      { q: "Apakah penyelenggaraan rumah ber tanah yang tidak diperlukan oleh kondo?", a: "Penyelenggaraan bumbung dan talang, cat luaran dan kalis air, penjagaan dinding sempadan dan pagar, saliran luaran serta kawalan serangga perimeter — semua perkara yang dikendalikan JMB bagi pemilik kondo." },
      { q: "Berapa kerapkah saya perlu membersihkan talang?", a: "Setiap bulan semasa musim daun gugur dan selepas ribut; sekurang-kurangnya setiap suku tahun. Talang tersumbat melimpah ke papan fasia dan ke ruang siling, menyebabkan kerosakan air yang kemudian dijumpai hujan tengkujuh." },
      { q: "Perlukah saya menservis bumbung sebelum tengkujuh?", a: "Ya — pemeriksaan bumbung pra-tengkujuh memeriksa jubin, permatang, tebat dan talang lembah bagi kecacatan yang dieksploitasi hujan berangin. Pemeriksaan RM 200 menghalang pembaikan siling RM 5,000." },
      { q: "Berapa kerapkah rumah ber tanah perlu dicat semula?", a: "Bahagian luar setiap 5–7 tahun bergantung pada pendedahan; bahagian dalam setiap 5–8 tahun. UV dan hujan tropika merosakkan cat luaran lebih cepat berbanding iklim sederhana, menjadikan kitaran cat semula lebih pendek." }
    ],
    zh: [
      { q: "排屋独有而公寓不需要的维护是什么？", a: "屋顶和天沟维护、外墙漆和防水、围墙和大门保养、外部排水以及周边除虫——这些在公寓都由物业管理公司处理。" },
      { q: "天沟应该多久清理一次？", a: "落叶季和风暴过后每月清理一次，至少每季度一次。堵塞的天沟会溢到檐板和天花空间，造成季风暴雨后才会发现的渗水损害。" },
      { q: "季风前需要保养屋顶吗？", a: "需要。季风前检查屋顶，重点看瓦片、屋脊、泛水和天沟，找出风吹雨打最容易钻入的缺陷。RM 200 的检查可避免 RM 5,000 的天花板维修。" },
      { q: "排屋应该多久重新粉刷一次？", a: "外墙视日照情况每 5–7 年一次，室内每 5–8 年一次。热带的紫外线和雨水使外墙漆比温带气候老化更快，因此重新粉刷周期更短。" }
    ]
  },
  "guidesMaintenance:rental-property-turnover-checklist": {
    ms: [
      { q: "Apakah yang perlu dibaiki tuan rumah antara penyewa?", a: "Kunci (kemas semula atau tukar silinder), keselamatan elektrik (ujian RCD, keadaan soket), kelengkapan paip (pili, hos, mekanisme tandas), keadaan cat dan pembersihan mendalam — ini ialah perkara yang menjejaskan keselamatan dan daya tarikan sewa." },
      { q: "Perlukah saya menukar kunci antara penyewa?", a: "Sentiasa — anda tidak tahu berapa salinan kunci lama yang wujud. Mengemas semula kunci adalah murah; laporan pecah masuk daripada bekas pemegang kunci tidak. Kunci digital menjadikannya lebih mudah dengan perubahan kod." },
      { q: "Bagaimanakah saya mendokumenkan keadaan hartanah?", a: "Ambil gambar setiap bilik, kelengkapan dan pemasangan dengan cop tarikh sebelum penyewa baharu masuk, dan simpan gambar bersama perjanjian sewa. Ini bukti anda untuk potongan deposit pada akhir tempoh sewa." },
      { q: "Perlukah saya menservis penyaman udara antara penyewa?", a: "Ya — cucian kimia dan pemeriksaan gas antara penyewa memastikan penyewa baharu mewarisi unit yang berfungsi, dan rekod servis melindungi anda jika penyewa kemudian mendakwa penyaman udara rosak semasa masuk." }
    ],
    zh: [
      { q: "租客之间房东应该修理什么？", a: "门锁（重新配匙或更换锁芯）、电气安全（漏电保护测试、插座状况）、卫浴设施（水龙头、软管、马桶配件）、油漆状况和深度清洁——这些都影响安全与出租吸引力。" },
      { q: "换租客时需要换锁吗？", a: "一定要。你不知道旧钥匙复制了多少份。重新配匙花费不多，而前钥匙持有者闯入的报案却代价高昂。数字门锁更换密码更加方便。" },
      { q: "怎样记录房屋状况？", a: "在新租客入住前，给每个房间、每件设备和装置拍照并加上日期，与租约一起保存。这是租期结束时扣除押金的有力证据。" },
      { q: "换租客之间需要保养空调吗？", a: "需要。租客之间做一次化学清洗和雪种检查，能确保新租客接手的是正常运转的机组；保养记录也能在你被指空调入住时已损坏的情况下保护你。" }
    ]
  },
  "seasonal:home-prep-rainy-season-kl": {
    ms: [
      { q: "Bilakah saya perlu mula bersiap sedia untuk musim tengkujuh?", a: "Menjelang bulan Oktober — monsun timur laut lazimnya membawa hujan lebat dari November hingga Mac, dan kerja kalis air, pembaikan bumbung serta saliran memerlukan cuaca kering untuk mengeras dengan sempurna sebelum hujan tiba." },
      { q: "Apakah pemeriksaan pra-tengkujuh yang paling penting?", a: "Talang bumbung dan paip turun — talang tersumbat melimpah ke papan fasia dan ke ruang siling semasa hujan lebat, menyebabkan kerosakan yang sebenarnya boleh dicegah dengan pembersihan selama 30 minit." },
      { q: "Adakah kerja kalis air masih boleh dilakukan selepas hujan mula turun?", a: "Pengedapan kecemasan antara hujan masih boleh dilakukan, tetapi sistem membran yang betul memerlukan 2–3 hari kering untuk pemasangan dan pengerasan. Menjadualkan kerja sebelum tengkujuh sentiasa lebih murah dan lebih selamat." },
      { q: "Perlukah saya mengambil kira longkang rumah jiran dalam persediaan saya?", a: "Di rumah teres, ya — saliran berkongsi, dinding sempadan dan garisan bumbung yang bersambung bermakna paip turun jiran yang tersumbat boleh membanjiri hartanah anda. Perbincangan mesra sebelum tengkujuh menghalang pertikaian semasa hujan." }
    ],
    zh: [
      { q: "我应该从什么时候开始为雨季做准备？", a: "最迟十月就要开始。东北季风通常从十一月持续到次年三月并带来暴雨，而防水、修屋顶和排水工程都需要干爽天气才能正确固化，所以必须在雨季来临前完成。" },
      { q: "雨季前最重要的一项检查是什么？", a: "屋顶天沟和落水管。天沟堵塞会在暴雨时溢到檐板和天花空间，造成本可避免的损害；花三十分钟清理一次，就能防患于未然。" },
      { q: "雨季开始后还能做防水工程吗？", a: "两次降雨之间的紧急密封可以应急，但正规的防水系统需要两到三天干爽天气来完成施工和固化。在季风来临前安排施工，始终更省钱也更可靠。" },
      { q: "我也应该检查邻居的排水吗？", a: "在排屋，应该。共享排水、共用围墙和相连的屋顶线，意味着邻居堵塞的落水管也可能淹没你家。雨季前友好沟通，能避免雨季中的纠纷。" }
    ]
  },
  "seasonal:painting-dry-season-tips": {
    ms: [
      { q: "Mengapa mengecat semasa musim kering?", a: "Cat luaran memerlukan keadaan kering untuk lekatan dan pengerasan yang betul — hujan yang mengenai lapisan cat baharu menyebabkan gelembung, lekatan lemah dan warna tidak sekata. Bulan-bulan lebih kering, lazimnya Mei hingga September, memberi jendela pengecatan paling dipercayai." },
      { q: "Bolehkah kerja mengecat dalaman dilakukan semasa musim hujan?", a: "Ya — kerja mengecat dalaman tidak bergantung pada cuaca, walaupun pengudaraan dan masa pengeringan perlu diurus dalam keadaan lembap. Alat penyahlembapan dan kipas membantu cat mengeras dengan betul apabila tingkap terpaksa ditutup." },
      { q: "Berapa awal saya perlu menempah tukang cat?", a: "4–6 minggu semasa kemuncak musim kering — tukang cat profesional paling sibuk apabila cuaca paling baik, dan tempahan saat akhir selalunya bermakna pasukan kurang berpengalaman atau persediaan tergesa-gesa." },
      { q: "Bagaimana jika hujan turun semasa kerja mengecat luaran saya?", a: "Tukang cat profesional memantau ramalan cuaca dan memberhentikan kerja sebelum hujan tiba — cat baharu memerlukan sekurang-kurangnya 2–4 jam sebelum terdedah kepada hujan, dan tukang yang baik merancang pelan kontingensi cuaca dalam jadual." }
    ],
    zh: [
      { q: "为什么要选在旱季油漆？", a: "外墙漆需要干爽环境才能良好附着和固化。雨水打在新漆面上会造成起泡、附着力差和颜色不均。旱季（通常五月至九月）是最可靠的施工窗口。" },
      { q: "雨季可以做室内油漆吗？", a: "可以。室内油漆不受天气影响，但潮湿环境下需要处理好通风和干燥时间。无法开窗时，抽湿机和风扇有助于漆面正确固化。" },
      { q: "我应该提前多久预约油漆工？", a: "旱季高峰期提前四到六周。专业油漆工在天气最好的时候最忙，临期预约往往只能请到经验较少的团队，或导致施工准备仓促。" },
      { q: "外墙施工时下雨了怎么办？", a: "专业油漆工会留意天气预报，在下雨前暂停施工。新漆面至少需要两到四个小时才能接触雨水，负责的团队会在排期时预留应对天气的缓冲。" }
    ]
  },
  "seasonal:waterproofing-pre-monsoon-checklist": {
    ms: [
      { q: "Apakah pemeriksaan kalis air yang perlu saya lakukan sebelum tengkujuh?", a: "Ujian rendaman di bilik mandi dan balkoni, pemeriksaan visual membran bumbung dan tebat, keadaan sendi silikon di kawasan pancuran dan sekitar tingkap, serta ujian aliran longkang pada setiap saluran keluar — semua ini menangkap kegagalan yang akan dieksploitasi hujan." },
      { q: "Bolehkah saya membaiki masalah kalis air semasa tengkujuh?", a: "Langkah kecemasan seperti membaharui silikon dan membersihkan longkang boleh dilakukan antara hujan, tetapi pembaikan membran dan penggantian sistem penuh memerlukan keadaan kering — jendela pra-tengkujuh ialah masa kerja sebenar dilakukan." },
      { q: "Bagaimanakah saya menguji kalis air bilik mandi?", a: "Sumbat saliran, banjiri lantai setinggi 20–30 mm, dan periksa siling di bawah pada jam ke-24 dan ke-72. Sebarang kelembapan atau kesan kotoran bermakna membran memerlukan perhatian sebelum tengkujuh memberi tekanan berterusan." },
      { q: "Perlukah saya membaharui sendi silikon sebagai penyelenggaraan pencegahan?", a: "Ya — sendi silikon bilik mandi dan balkoni merosot setiap 2–3 tahun dalam kelembapan Malaysia. Membaharui sebelum ia gagal ialah penyelenggaraan kalis air paling murah yang boleh anda lakukan." }
    ],
    zh: [
      { q: "雨季前应该做哪些防水检查？", a: "卫生间和阳台的蓄水测试、屋顶防水层与泛水的目视检查、淋浴区及窗户周围的硅胶接缝状况，以及每个排水口的水流测试。这些检查能揪出雨水最容易钻入的隐患。" },
      { q: "雨季中可以修复防水问题吗？", a: "更换硅胶、疏通排水等应急措施可在两次降雨之间进行，但防水层修复和整套更换需要干爽条件。季风前的窗口期，才是真正能施工的时候。" },
      { q: "怎样测试卫生间的防水？", a: "堵住地漏，把地面淹水至二十到三十毫米，再在二十四小时和七十二小时后检查楼下天花板。出现任何潮湿或水渍，都说明防水层需要在季风施压前处理。" },
      { q: "应该定期重做硅胶接缝作为预防性维护吗？", a: "应该。马来西亚潮湿环境下，卫生间和阳台的硅胶接缝每两三年就会老化。在失效前更换，是你能做的最便宜的防水维护。" }
    ]
  },
  "seasonal:chinese-new-year-home-repaint-guide": {
    ms: [
      { q: "Bilakah saya perlu menempah kerja mengecat semula untuk Tahun Baharu Cina?", a: "6–8 minggu sebelum Tahun Baharu Cina — tempoh pra-perayaan ialah musim mengecat paling sibuk di Malaysia, dan tempahan lewat selalunya bermakna persediaan tergesa-gesa atau pasukan kurang berpengalaman." },
      { q: "Apakah warna yang popular untuk kerja mengecat semula Tahun Baharu Cina?", a: "Dinding penyeri merah melambangkan kemakmuran, warna emas dan krim yang hangat untuk ruang tamu, serta putih segar untuk kesan permulaan baharu — tetapi warna terbaik ialah warna yang anda suka sepanjang tahun, bukan hanya semasa perayaan." },
      { q: "Bolehkah saya mengecat semula ruang tamu sahaja untuk Tahun Baharu Cina?", a: "Ya — penyegaran satu bilik mengambil masa 2–3 hari dan mengubah ruang yang paling kerap dilihat tetamu. Tumpukan pada ruang tamu, ruang makan dan lorong pintu masuk untuk kesan perayaan yang maksimum." },
      { q: "Berapa lama sebelum Tahun Baharu Cina kerja mengecat perlu siap?", a: "Sekurang-kurangnya 2 minggu — cat memerlukan masa untuk mengeras sepenuhnya dan menghilangkan bau sebelum rumah dipenuhi tetamu, makanan dan colok. Mengecat terlalu hampir dengan perayaan bermakna anda tinggal bersama bau cat." }
    ],
    zh: [
      { q: "农历新年前应该什么时候预约刷漆？", a: "提前六到八周。春节前是马来西亚油漆最繁忙的时段，临期预约往往意味着施工准备仓促，或只能安排经验较少的团队。" },
      { q: "农历新年流行刷什么颜色？", a: "红色主题墙象征兴旺，客厅适合温暖的金色和米色，白色则带来焕然一新的感觉。但最好的颜色，是你全年都喜欢的那一种，而不只是为了过节。" },
      { q: "可以只重新粉刷客厅吗？", a: "可以。单间翻新只需两到三天，就能改变客人最常看到的空间。重点处理客厅、餐厅和进门走廊，就能营造最浓的节日氛围。" },
      { q: "刷漆应该在春节前多久完成？", a: "至少提前两周。油漆需要时间完全固化和散味，之后家里才会迎来宾客、饭菜和香烛。临近节前才刷完，就得一直闻着油漆味。" }
    ]
  },
  "seasonal:raya-home-makeover-checklist": {
    ms: [
      { q: "Bilakah saya perlu memulakan persiapan rumah untuk Hari Raya?", a: "8–10 minggu sebelum Hari Raya — kerja mengecat mengambil 1–2 minggu termasuk tempahan, pembaikan dan sentuhan memerlukan seminggu lagi, dan pembersihan mendalam dilakukan pada minggu terakhir. Bermula lewat bermakna kerja terpaksa dipendekkan." },
      { q: "Bilik manakah yang perlu saya utamakan untuk Hari Raya?", a: "Ruang tamu, ruang makan, lorong pintu masuk dan bilik mandi tetamu — ini ialah ruang yang dilihat dan dinilai tetamu. Bilik tidur dan kawasan peribadi boleh menunggu musim yang kurang sibuk." },
      { q: "Bolehkah saya menggabungkan kerja mengecat dan pembaikan dalam satu projek?", a: "Ya — pelan terselaras yang melakukan pembaikan dahulu, iaitu menampal, membaiki dan mengisi, kemudian mengecat pada peringkat akhir, adalah lebih cekap daripada tempahan berasingan. Ramai tukang menawarkan pakej gabungan untuk Hari Raya." },
      { q: "Perlukah saya membersih secara mendalam sebelum atau selepas mengecat?", a: "Selepas — kerja mengecat menghasilkan habuk dan titisan yang membatalkan sebarang pembersihan terdahulu. Urutannya ialah pembaikan, pengecatan, kemudian pembersihan mendalam pada hari-hari terakhir sebelum rumah terbuka pertama." }
    ],
    zh: [
      { q: "开斋节家居焕新应该什么时候开始？", a: "提前八到十周。刷漆含预约在内需要一到两周，修补和收尾再要一周，最后一周做深度清洁。开始得太晚，就只能赶工。" },
      { q: "开斋节应该优先整理哪些房间？", a: "客厅、餐厅、进门走廊和客用卫生间，这些是访客看到并评价的空间。卧室和私人区域可以留到不那么繁忙的季节再处理。" },
      { q: "可以把刷漆和修补合并在一个项目里吗？", a: "可以。先修补（补洞、修复、填缝）后刷漆的统筹安排，比分开预约更高效。不少施工方也提供开斋节合并套餐。" },
      { q: "深度清洁应该在刷漆前还是刷漆后做？", a: "刷漆后。刷漆会产生粉尘和滴落，会破坏之前的清洁成果。正确顺序是先修补、再刷漆，最后在首次开放日前的最后几天做深度清洁。" }
    ]
  },
  "seasonal:year-end-renovation-planning": {
    ms: [
      { q: "Adakah penghujung tahun masa yang baik untuk mengubah suai?", a: "Disember hingga Januari selalunya lebih sunyi bagi kontraktor, bermakna ketersediaan dan tumpuan lebih baik — tetapi pembekal bahan binaan dan pejabat pengurusan kondo mungkin tutup semasa cuti, dan ini perlu diambil kira dalam garis masa." },
      { q: "Berapa awal saya perlu merancang pengubahsuaian penghujung tahun?", a: "Mula mendapatkan sebut harga pada Oktober–November supaya skop, bahan dan jadual terkunci sebelum Disember. Pengubahsuaian yang bermula tanpa pelan tetap pada Disember selalunya berlarutan hingga Februari dan seterusnya." },
      { q: "Bolehkah saya mengubah suai semasa penutupan cuti kondo?", a: "Semak dengan JMB anda — kebanyakan kondo menyekat kerja pengubahsuaian semasa tempoh cuti utama seperti Tahun Baharu Cina, Hari Raya, Krismas dan Deepavali, dan bekerja semasa tempoh penutupan berisiko didenda serta menerima aduan jiran." },
      { q: "Apakah pengubahsuaian yang sesuai untuk jendela penghujung tahun?", a: "Projek dalaman yang tidak bergantung pada cuaca — pengubahsuaian dapur dan bilik mandi, kerja siling, lantai dan pengecatan. Kerja luaran lebih baik dijadualkan pada bulan-bulan yang lebih kering." }
    ],
    zh: [
      { q: "年底适合装修吗？", a: "十二月至一月通常是施工淡季，施工方的档期和关注度都更好。但建材供应商和公寓管理处可能在假期休息，这些都要纳入工期安排。" },
      { q: "年底装修应该提前多久规划？", a: "十月至十一月就开始报价，让范围、材料和工期在十二月前定下来。没有固定计划就开工的装修，往往拖到二月甚至更久。" },
      { q: "公寓假期封闭期间可以装修吗？", a: "先向物业查询。很多公寓在春节、开斋节、圣诞节和屠妖节等主要假期限制施工，在封闭期施工可能被罚款，也容易招来邻居投诉。" },
      { q: "哪些装修适合年底窗口期？", a: "不受天气影响的室内工程，例如厨房和卫生间翻新、吊顶、地板和刷漆。外墙工程最好安排在较干燥的月份。" }
    ]
  },
  "seasonal:hari-raya-painting-promo": {
    ms: [
      { q: "Bilakah masa terbaik untuk menempah kerja mengecat Hari Raya?", a: "6–8 minggu sebelum Hari Raya — kesibukan mengecat pra-Raya memenuhi jadual tukang dengan cepat, dan tempahan lewat selalunya bermakna masa persediaan kurang atau pasukan kurang berpengalaman." },
      { q: "Apakah warna yang sesuai untuk rumah terbuka Hari Raya?", a: "Warna neutral hangat seperti krim, kelabu lembut dan putih suam kelihatan baik dalam foto serta sesuai dengan hiasan perayaan; dinding penyeri hijau tua atau keemasan menambah karakter tanpa memenatkan ruang." },
      { q: "Bolehkah saya mengecat semula kawasan yang dilihat tetamu sahaja?", a: "Ya — ruang tamu, ruang makan, pintu masuk dan bilik mandi tetamu ialah ruang yang dilihat pengunjung. Penyegaran tertumpu pada kawasan ini memberi impak maksimum pada sebahagian kecil kos mengecat seluruh rumah." },
      { q: "Berapa lama cat mengambil masa untuk mengeras sebelum tetamu tiba?", a: "Cat moden rendah VOC kering sentuh dalam beberapa jam tetapi mengeras sepenuhnya dalam 2–4 minggu. Untuk kemasan terbaik dan bau minimum semasa rumah terbuka, selesaikan kerja mengecat sekurang-kurangnya 2 minggu sebelum acara pertama." }
    ],
    zh: [
      { q: "开斋节刷漆最好什么时候预约？", a: "提前六到八周。开斋节前的刷漆高峰会很快占满施工方档期，临期预约往往意味着准备时间不足或团队经验较少。" },
      { q: "开斋节开放日适合什么颜色？", a: "米色、柔灰、暖白等暖色调中性色拍照好看，也容易搭配节日装饰；深绿或金色的主题墙能增添特色，又不会让空间显得拥挤。" },
      { q: "可以只刷客人会看到的区域吗？", a: "可以。客厅、餐厅、玄关和客用卫生间是访客看到的地方，集中翻新这些区域，就能用一小部分成本达到整屋刷漆的效果。" },
      { q: "油漆要多久才干透，才能迎接客人？", a: "现代低 VOC 漆几小时即可表干，但要两到四周才能完全固化。为获得最佳效果并减少开放日的气味，应在首次活动前至少两周完成刷漆。" }
    ]
  },
  "seasonal:monsoon-leak-emergency-guide": {
    ms: [
      { q: "Apakah yang perlu saya lakukan dahulu apabila kebocoran bermula semasa hujan?", a: "Lindungi isi rumah — alihkan perabot, peralatan elektronik dan barang berharga daripada air, letakkan baldi dan tuala untuk menampung aliran, dan ambil gambar segala-galanya untuk insurans sebelum menyentuh apa-apa." },
      { q: "Bolehkah kebocoran dibaiki semasa hujan masih turun?", a: "Pemasangan terpal kecemasan dan penahanan dalaman boleh dilakukan serta-merta; pembaikan kekal memerlukan permukaan kering. Juruteknik boleh meletakkan pengedap sementara antara hujan untuk mengurangkan kerosakan sehingga pembaikan penuh." },
      { q: "Perlukah saya menghubungi insurans sebelum atau selepas pembaikan?", a: "Sebelum sebarang pembaikan kekal — ambil gambar kerosakan, punca kebocoran dan apa-apa isi yang terjejas, kemudian maklumkan syarikat insurans anda. Pembaikan yang dilakukan sebelum penilaian insurans mungkin tidak ditanggung." },
      { q: "Bagaimanakah saya menghalang kebocoran yang sama pada tengkujuh seterusnya?", a: "Selepas kecemasan selesai, pemeriksaan penuh bumbung atau membran mengenal pasti punca sebenar — pengedapan kecemasan ialah langkah sementara, dan pembaikan kekal perlu dijadualkan semasa jendela kering seterusnya." }
    ],
    zh: [
      { q: "下雨时突然漏水，第一步该做什么？", a: "先保护财物。把家具、电器和贵重物品移离漏水处，用桶和毛巾接住水流，并在移动任何东西之前先拍照留证，方便后续保险理赔。" },
      { q: "下雨时可以修漏水吗？", a: "紧急遮盖和屋内接水可以马上进行，但永久修复需要表面干透。专业人员可以在两次降雨之间涂抹临时密封，在正式修复前减少损失。" },
      { q: "应该先报保险还是先维修？", a: "先报保险。在永久维修前，先拍下损坏情况、漏水源头和受损财物，再通知保险公司。在保险定损之前完成的维修，可能不在理赔范围内。" },
      { q: "怎样防止下次季风再出现同样的漏水？", a: "紧急处理结束后，全面检查屋顶或防水层找出根本原因。紧急密封只是临时措施，永久修复应安排在下一次干爽窗口期进行。" }
    ]
  }

};
