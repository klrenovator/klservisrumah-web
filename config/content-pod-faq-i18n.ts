/**
 * P3-12 phase 2 — native, page-specific translations of the authored English
 * content-pod FAQs. Keys are `${family}:${slug}` because slugs can collide
 * across families. These are editorial translations, not generic templates.
 *
 * Coverage is intentionally gated by scripts/validate-content-pod-faq-i18n.ts.
 * Waves 15–16 cover the complete `top` and `guides` families; Wave 17 adds the
 * complete `guidesMaintenance` family; Wave 18 adds the complete `seasonal`
 * family; Wave 19 adds the complete `compare` family; Wave 20 adds the complete
 * `brands` family (all 32 pages — the 12 material/brand guides sourced from
 * `brandCopy` plus the 20 aircon brand pages sourced from `airconBrandCopy`,
 * both in `config/content-pod-copy-batch2.ts`). Together: 88 pages, 704
 * translated Q&As. Remaining families stay explicitly pending in TRACKING.
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
  },
  "compare:pu-grouting-vs-tile-hacking": {
    ms: [
      { q: "Bolehkah grouting PU membaiki kebocoran bilik mandi secara kekal?", a: "Bagi retak rambut pada konkrit dan kebocoran sendi, ya — resin PU mengembang apabila bersentuhan dengan air dan mengisi rongga yang tidak dapat dicapai pengedap permukaan. Namun jika membran kalis air itu sendiri sudah gagal, grouting hanyalah tampalan sementara." },
      { q: "Bilakah kerja pecah jubin menjadi satu-satunya jawapan yang jujur?", a: "Apabila membran di bawah jubin koyak, terpisah daripada permukaan atau terlalu uzur untuk dibaiki — tiada kaedah suntikan dapat memulihkan membran yang sudah tiada, dan menawarkannya dalam keadaan itu ialah taktik jualan tambahan paling lazim dalam kerja kalis air." },
      { q: "Bagaimanakah saya memastikan kaedah yang sesuai untuk bilik mandi saya?", a: "Melalui ujian air yang memetakan corak kebocoran, ditambah pemeriksaan keadaan membran melalui garis grout yang dibuka atau titik akses — kontraktor yang jujur menunjukkan bukti itu dahulu sebelum mencadangkan mana-mana pendekatan." },
      { q: "Adakah grouting PU disertakan waranti?", a: "Lazimnya 1–2 tahun bagi kerja suntikan, berbanding sehingga 5 tahun bagi penggantian membran penuh. Perbezaan tempoh waranti itu mencerminkan skop kerja sebenar, bukan tahap keyakinan kontraktor." }
    ],
    zh: [
      { q: "PU 注浆能永久修复卫生间漏水吗？", a: "对混凝土发丝裂缝和接缝渗漏来说可以。PU 树脂遇水膨胀，能填补表面密封剂无法进入的空隙。但如果防水层本身已经失效，注浆只能算是临时补救。" },
      { q: "什么情况下只能敲掉瓷砖重做？", a: "当瓷砖下的防水层撕裂、脱层或老化到无法修复时。任何注浆方法都无法修复已经不存在的防水层，这种情况下仍推销免敲方案，是防水行业最常见的加价套路。" },
      { q: "怎样判断我的卫生间适合哪一种方法？", a: "先做水测试绘制渗漏分布，再通过拆除一段填缝或检修口检查防水层的实际状况。诚实的施工方会先展示这些证据，再建议采用哪一种方案。" },
      { q: "PU 注浆工程有保修吗？", a: "注浆工程通常保修 1–2 年，全面更换防水层最长可达 5 年。保修期的差异反映的是工程范围本身，而不是施工方对自己手艺的信心。" }
    ]
  },
  "compare:plaster-ceiling-vs-gypsum-ceiling": {
    ms: [
      { q: "Betulkah siling plaster lebih unggul daripada papan gipsum?", a: "Bagi siling penyeri licin tanpa sambungan dengan lampu cove yang dijamin 10 tahun daripada kendur dan retak, ya — sistem premium ini menggunakan sambungan bertetulang dan lapisan skim berbilang lapis yang tidak dapat ditandingi papan gipsum sahaja." },
      { q: "Bilakah papan gipsum menjadi pilihan yang lebih bijak?", a: "Untuk kawasan utiliti, bilik stor dan unit sewa di mana garis sambungan yang kelihatan di bawah cahaya condong masih boleh diterima, papan gipsum dipasang lebih cepat dan jauh lebih murah tanpa menjejaskan kekukuhan struktur." },
      { q: "Mengapa sambungan siling gipsum mudah retak?", a: "Kerana pita sambungan biasa dan kemasan satu lapisan tidak mampu menampung pergerakan haba dan struktur bangunan Malaysia — sambungan bertetulang serta skim berbilang lapis sistem plaster memang direka untuk menyerap pergerakan itu." },
      { q: "Bolehkah saya menaik taraf daripada gipsum kepada plaster kemudian?", a: "Boleh, tetapi ia bermakna menanggalkan papan sedia ada dan menyapu skim baharu pada rangka — memilih sistem yang betul sejak awal jauh lebih murah daripada membayar untuk kedua-duanya." }
    ],
    zh: [
      { q: "灰泥天花真的比石膏板天花好吗？", a: "对追求无缝整体效果、配灯槽造型，并要求十年防下垂防开裂保修的空间来说，确实更好。优质系统采用加固接缝和多层批刮收面，这是单靠石膏板无法做到的。" },
      { q: "什么情况下石膏板反而更明智？", a: "杂物间、储藏室和出租单位等空间，斜射光下能看到接缝线通常可以接受。石膏板安装更快、成本明显更低，而结构稳固性并不打折。" },
      { q: "为什么石膏板天花容易在接缝处开裂？", a: "普通的接缝带加单层收面，承受不了马来西亚建筑的热胀冷缩和结构位移。灰泥天花系统的加固接缝与多层批刮，正是为吸收这类位移而设计的。" },
      { q: "以后可以把石膏板升级成灰泥天花吗？", a: "可以，但需要拆掉现有板材、在龙骨上重新批刮。相比一开始就选对系统，等于花了两倍的费用。" }
    ]
  },
  "compare:nippon-paint-vs-dulux-paint": {
    ms: [
      { q: "Jenama manakah yang lebih tahan lama pada dinding luaran?", a: "Dulux Weathershield dan Nippon Weatherbond kedua-duanya menggalas tuntutan ketahanan 5–7 tahun, tetapi prestasi sebenar lebih bergantung pada kerja persediaan permukaan dan pemilihan primer berbanding semata-mata jenama cat kemasan." },
      { q: "Adakah Nippon Spot Less Plus berbaloi untuk ruang lorong?", a: "Bagi kawasan lalu lintas tinggi di mana calar dan cap jari berlaku setiap hari, Spot Less Plus memang lebih tahan berbekas berbanding emulsi biasa — harga premiumnya dibalas dengan kekerapan mengecat semula yang lebih rendah." },
      { q: "Bolehkah saya mencampurkan primer Nippon dengan cat kemasan Dulux?", a: "Dari segi teknikal boleh jika kedua-duanya berasaskan air dan serasi, tetapi pengeluar menguji dan memberi waranti sistem mereka sebagai set sepadan — mencampur jenama bermakna tiada satu pun waranti terpakai jika berlaku kegagalan." },
      { q: "Jenama manakah yang mempunyai padanan warna lebih baik?", a: "Kedua-dua jenama mempunyai sistem pembancuhan kilang yang menghasilkan warna konsisten — pembolehubah yang lebih besar ialah sama ada tukang cat anda menggunakan pusat pewarnaan sah jenama itu atau pengadun biasa di kedai perkakasan." }
    ],
    zh: [
      { q: "外墙漆哪一个品牌更耐久？", a: "Dulux Weathershield 与 Nippon Weatherbond 都声称有 5–7 年耐久性，但实际表现更多取决于基层处理和底漆选择，而不只是面漆品牌本身。" },
      { q: "走廊用 Nippon Spot Less Plus 值得吗？", a: "对于鞋痕和指纹每天都会出现的高频区域，Spot Less Plus 确实比普通乳胶漆更抗污。多花的差价，会以较低的重刷频率赚回来。" },
      { q: "Nippon 底漆可以搭配 Dulux 面漆吗？", a: "只要两者都是水性且相容，技术上可行。但厂家是按整套系统来测试和保修的，混用品牌意味着任何一方都不会为故障承担责任。" },
      { q: "哪一个品牌的调色更准确？", a: "两个品牌都有工厂调色系统，颜色稳定性相当。更大的变量是施工方使用品牌官方调色中心，还是在普通五金店现场混合调色。" }
    ]
  },
  "compare:acrylic-vs-cementitious-waterproofing": {
    ms: [
      { q: "Bolehkah kalis air akrilik menampung bumbung rata?", a: "Bagi bumbung rata terdedah yang mempunyai saliran baik, ya — salutan akrilik seperti Sikalastic melentur mengikut pergerakan haba dan menahan hakisan UV. Tetapi jika air bertakung berhari-hari, akrilik akhirnya akan melepuh dan gagal." },
      { q: "Bilakah sistem bersimen menjadi pilihan yang betul?", a: "Di bawah jubin, dalam bilik mandi dan pada permukaan konkrit yang memerlukan membran terlekat yang dicengkam pelekat jubin — sistem bersimen ialah standard kawasan basah kerana ia berfungsi seiring sistem jubin." },
      { q: "Kaedah manakah yang bertahan lebih lama antara keduanya?", a: "Sistem bersimen di bawah jubin bertahan 10–15 tahun apabila disapu dengan betul; akrilik pada permukaan terdedah memerlukan salutan semula setiap 3–5 tahun bergantung pada pendedahan UV dan keadaan cuaca." },
      { q: "Bolehkah saya menyapu akrilik di atas lapisan bersimen sedia ada?", a: "Hanya jika lapisan bersimen itu masih kukuh dan diberi primer dengan betul — menyapu akrilik di atas membran bersimen yang sudah gagal hanya memerangkap kegagalan di bawahnya dan melambatkan masalah yang pasti berlaku." }
    ],
    zh: [
      { q: "丙烯酸防水能用在平屋顶上吗？", a: "排水良好的外露平屋顶可以。Sikalastic 这类丙烯酸涂层能随热胀冷缩伸缩并抗紫外线。但如果积水持续多天，涂层最终会起泡失效。" },
      { q: "什么情况应该选择水泥基防水？", a: "瓷砖下面、卫生间，以及需要瓷砖胶能粘附的粘结型防水层的混凝土表面。水泥基系统是湿区的标准做法，因为它能与贴砖系统配合。" },
      { q: "两种方法哪一种寿命更长？", a: "施工到位的砖下水泥基系统可使用 10–15 年；外露表面的丙烯酸涂层则需每 3–5 年重新涂刷，视紫外线照射和风雨侵蚀程度而定。" },
      { q: "可以在旧的水泥基防水层上直接涂丙烯酸吗？", a: "只有旧涂层仍然牢固、并且正确涂刷底漆的前提下才可以。在已经失效的水泥基层上覆盖丙烯酸，只是把问题封在里面，并不能阻止它继续恶化。" }
    ]
  },
  "compare:pvc-pipes-vs-copper-pipes": {
    ms: [
      { q: "Bolehkah paip PVC menampung air panas daripada pemanas?", a: "PVC standard dikadar untuk air sejuk sahaja — saluran air panas memerlukan CPVC (berkadar sekitar 82°C) atau tembaga yang mampu menampung julat penuh. Menggunakan PVC pada saluran panas ialah jalan pintas biasa yang membawa kepada kelembutan paip dan kebocoran." },
      { q: "Adakah tembaga berbaloi dengan harga lebih tinggi berbanding PVC?", a: "Bagi saluran air panas dan laluan terdedah di mana ketahanan penting, ya — tembaga bertahan lebih 50 tahun dan menahan kitaran haba yang akan melemahkan sambungan plastik dari semasa ke semasa." },
      { q: "Adakah paip PVC memerlukan pensijilan SIRIM?", a: "Ya — mana-mana paip yang membawa air minum di Malaysia patut membawa pensijilan SIRIM QAS, yang mengesahkan kadaran tekanan dan keselamatan bahan. PVC tanpa pensijilan ialah penjimatan palsu yang boleh membatalkan insurans." },
      { q: "Bolehkah saya mencampurkan PVC dan tembaga dalam satu sistem?", a: "Boleh, dengan sambungan dielektrik yang betul pada titik peralihan bagi menghalang kakisan galvanik — tukang paip yang cekap mengetahui perkara ini, dan ia patut dinyatakan dalam sebut harga." }
    ],
    zh: [
      { q: "PVC 管可以接热水器的热水吗？", a: "普通 PVC 只能用于冷水。热水管需要使用 CPVC（耐温约 82°C）或铜管，才能承受全部温度范围。把 PVC 用在热水管上是常见的偷工做法，会导致管材软化和渗漏。" },
      { q: "铜管比 PVC 贵，值得吗？", a: "在热水管线和外露敷设等对耐用性要求高的位置，值得。铜管可使用 50 年以上，其承受的冷热循环会让塑料接头逐渐疲劳。" },
      { q: "PVC 管需要 SIRIM 认证吗？", a: "需要。马来西亚任何输送饮用水的管材都应具备 SIRIM QAS 认证，以确认耐压等级和材料安全。使用无证 PVC 看似省钱，却可能让保险失效。" },
      { q: "PVC 管和铜管可以混用在同一系统里吗？", a: "可以，但转接处必须安装介质绝缘接头，防止电化学腐蚀。合格的水管工都懂这一点，报价单中也应写清楚。" }
    ]
  },
  "compare:pvc-vs-molly-bolt-anchors": {
    ms: [
      { q: "Bolehkah saya menggunakan palam PVC pada dinding gipsum?", a: "Tidak — palam PVC memerlukan bahan padat untuk mencengkam, dan ia akan tercabut terus daripada papan gipsum berongga di bawah sebarang beban besar. Bolt molly atau sauh togel mengagihkan beban di belakang papan, dan itulah yang diperlukan papan plaster." },
      { q: "Sauh manakah yang paling selamat untuk televisyen berat?", a: "Pada bata padu atau konkrit, palam PVC atau nilon tugas berat berkadaran beban berfungsi dengan baik — pada papan plaster, anda memerlukan bolt molly masuk ke stud atau plat sandar, jangan sekali-kali pada papan sahaja." },
      { q: "Adakah bolt molly merosakkan dinding?", a: "Ia meninggalkan lubang lebih besar berbanding palam PVC, tetapi lubang itu boleh dibaiki dengan pengisi — pilihan lainnya ialah televisyen yang jatuh, yang merosakkan dinding, lantai dan mungkin mencederakan orang di sebelahnya." },
      { q: "Bagaimanakah saya mengenal pasti jenis dinding saya?", a: "Ujian ketukan dan tebukan gerudi kecil memberi jawapan — bunyi padat dengan habuk bermakna batu-bata, bunyi berongga dengan potongan bersih bermakna papan. Kami memeriksa sebelum setiap pemasangan, kerana meneka ialah cara televisyen jatuh." }
    ],
    zh: [
      { q: "石膏板墙上可以用 PVC 膨胀塞吗？", a: "不可以。PVC 膨胀塞需要握在实体材料里，在空心石膏板上受一点力就会直接脱出。空心墙需要飞机螺栓或翻板锚栓，把受力分散到板背面。" },
      { q: "挂沉重的电视用哪种锚栓最安全？", a: "实心砖墙或混凝土墙上，按承重选用重型 PVC 或尼龙膨胀塞即可；石膏板墙上则必须用飞机螺栓锁进龙骨或加装背板，绝不能只固定在板面上。" },
      { q: "飞机螺栓会损坏墙面吗？", a: "留下的孔比 PVC 膨胀塞大，但用填缝剂就能修补。相比之下，电视掉下来会同时损坏墙面、地板，还可能砸伤旁边的人。" },
      { q: "怎样判断墙面是什么材质？", a: "敲一敲，再用小钻头试钻就能分辨。声音实、钻出粉末的是砖墙；声音空、钻屑整齐的是板材。我们每次安装前都会先确认，因为猜错材质正是电视掉落的原因。" }
    ]
  },
  "compare:interior-paint-finishes-matte-vs-satin-vs-gloss": {
    ms: [
      { q: "Kemasan cat manakah yang dapat menyembunyikan dinding tidak sekata saya?", a: "Kemasan mate atau rata menyerap cahaya dan menyembunyikan kecacatan permukaan — kilat dan separa kilat memantulkan cahaya lalu mendedahkan setiap bonggol, tampalan dan kesan berus di bawah lampu bawah Malaysia." },
      { q: "Bolehkah cat mate dilap bersih?", a: "Formulasi mate boleh basuh moden tahan lapisan ringan, tetapi ia tidak akan menandingi satin atau eggshell dari segi ketahanan gosokan — bagi bilik kanak-kanak dan dapur, satin ialah kompromi praktikal." },
      { q: "Patutkah cat bilik mandi berkilat penuh?", a: "Bilik mandi lebih sesuai dengan satin atau separa kilat kerana ketahanan lembapan dan kebolehlapan, tetapi kilat penuh pada dinding bilik mandi kelihatan seperti institusi — satin memberi ketahanan tanpa rasa klinikal itu." },
      { q: "Bolehkah saya mencampur beberapa kemasan dalam satu bilik?", a: "Boleh — pendekatan biasa ialah mate pada dinding dengan satin pada bingkai dan pintu, memberi kedalaman visual serta meletakkan kemasan boleh lap di tempat yang disentuh tangan dan kaki." }
    ],
    zh: [
      { q: "哪种漆面能遮住墙面的不平整？", a: "哑光或平光漆吸收光线，能掩盖表面缺陷。亮光和半亮光会反光，在马来西亚常见的筒灯下，让每个凸起、补丁和刷痕都一览无遗。" },
      { q: "哑光漆可以擦洗吗？", a: "现在的可水洗哑光漆配方能承受轻度擦拭，但耐磨擦洗能力始终比不上丝光和蛋壳光。儿童房和厨房想要方便清洁，丝光是更实际的选择。" },
      { q: "卫生间应该用亮光漆吗？", a: "卫生间适合防潮性好、易擦洗的丝光或半亮光；整墙全亮光会有医院般的生硬感。丝光既有耐用性，又不会显得冷冰冰。" },
      { q: "同一个房间可以混用不同光泽吗？", a: "可以。常见做法是墙面用哑光、门窗边线用丝光，既增加层次感，又把耐擦洗的光泽放在手经常接触的位置。" }
    ]
  },
  "compare:wall-putty-vs-plaster-smoothening": {
    ms: [
      { q: "Adakah putty dinding mencukupi sebelum mengecat semula?", a: "Jika dinding masih kukuh secara struktur dengan hanya kekasaran permukaan kecil, ya — putty mengisi retak rambut dan melicinkan tekstur. Tetapi jika cahaya matahari mendedahkan beralun dan tampalan, anda memerlukan rawatan skim coat penuh." },
      { q: "Mengapa tukang cat saya mencadangkan skim coat dan bukannya putty?", a: "Kerana putty setebal 1–2 mm sahaja dan tidak dapat melicinkan dinding yang tidak sekata — skim coat ialah kompaun pelicin 3–5 mm yang menjadikan keseluruhan permukaan rata di bawah cahaya condong." },
      { q: "Adakah skim coat mengambil masa lebih lama daripada putty?", a: "Ya — skim coat memerlukan beberapa lapisan dengan masa pengeringan antara setiap satu, menambah 1–2 hari pada jadual. Hasilnya dinding yang kelihatan betul pada sebarang sudut pencahayaan, sesuatu yang tidak dapat dicapai putty." },
      { q: "Bolehkah saya melangkau kedua-duanya dan terus mengecat?", a: "Pada dinding baharu yang kemasannya baik, mungkin — pada mana-mana dinding dengan kecacatan kelihatan, mengecat tanpa kerja persediaan hanya menjadikan setiap cacat berkilat dan lebih jelas, sebab itulah mengecat semula diperlukan sejak awal." }
    ],
    zh: [
      { q: "重刷前只批腻子够吗？", a: "如果墙体结构完好、只有轻微粗糙，够了。腻子能填补细纹、抹平质感。但如果阳光下能看出棱线和补丁，就需要做满批找平。" },
      { q: "为什么油漆工建议满批而不是局部批腻子？", a: "腻子最多批 1–2 毫米，无法把不平的墙找平。满批找平层厚 3–5 毫米，能让整面墙在斜射光下仍保持平整。" },
      { q: "满批比批腻子更费时间吗？", a: "是的。满批需要分几层施工，每层之间要留干燥时间，工期通常多花一到两天。但完工后无论从哪个角度看，墙面都足够平整。" },
      { q: "可以什么都不处理直接刷漆吗？", a: "新的、收面良好的墙也许可以。但只要有看得见的瑕疵，不做处理直接上漆只会让缺陷被光泽放大得更加明显，这正是当初需要重刷的原因。" }
    ]
  },
  "compare:partition-materials-gypsum-vs-bricks-vs-glass": {
    ms: [
      { q: "Dinding pembahagi bahan manakah yang paling menahan bunyi?", a: "Dinding bata dengan plaster pada kedua-dua sisi memberi pengurangan bunyi tertinggi, diikuti gipsum dua lapisan dengan isian bulu mineral — pembahagi kaca mudah memindahkan bunyi kecuali dinyatakan dengan panel laminasi akustik." },
      { q: "Bolehkah lantai kondo menampung pembahagi bata?", a: "Selalunya tidak tanpa penilaian struktur — pembahagi bata adalah berat, dan kebanyakan papak kondo direka untuk pembahagi gipsum atau kaca yang ringan. Semak dahulu dengan jurutera bangunan anda sebelum menetapkan bata." },
      { q: "Adakah pembahagi kaca lebih murah daripada gipsum?", a: "Tidak — pembahagi kaca dengan bingkai aluminium dan panel terbaja jauh lebih mahal daripada gipsum, tetapi ia memberikan cahaya semula jadi dan estetik moden yang tidak dapat dihasilkan gipsum." },
      { q: "Berapa cepatkah pembahagi gipsum boleh siap?", a: "Pembahagi bilik biasa menggunakan gipsum dengan rangka logam boleh dipasang, ditutup papan dan dikemaskan dalam 1–2 hari, berbanding 5–7 hari untuk bata termasuk masa pengerasan plaster." }
    ],
    zh: [
      { q: "哪种隔墙材料的隔音效果最好？", a: "双面抹灰的砖墙隔音最好，其次是双层石膏板加岩棉填充。玻璃隔断容易传声，除非选用声学夹胶玻璃。" },
      { q: "公寓楼板能承受砖砌隔墙吗？", a: "未经结构评估通常不行。砖隔墙很重，而多数公寓楼板按轻质石膏板或玻璃隔断设计。决定用砖前，请先咨询楼宇结构工程师。" },
      { q: "玻璃隔断比石膏板便宜吗？", a: "不会。铝框加钢化玻璃的价格明显高于石膏板，但它能带来自然采光和现代感，这是石膏板做不到的。" },
      { q: "石膏板隔墙施工有多快？", a: "标准房间用轻钢龙骨石膏板做隔墙，安装、封板和收面一到两天即可完成；砖墙加上抹灰养护则需要五到七天。" }
    ]
  },
  "compare:diy-painting-vs-professional-painting": {
    ms: [
      { q: "Betulkah mengecat sendiri lebih jimat?", a: "Bagi satu bilik kecil dengan dinding mudah, ya — untuk seluruh rumah, kos bahan hampir sama tetapi masa anda, sewa peralatan, pembaziran dan kemungkinan kerja semula merapatkan jurang dengan cepat. Rumah teres tiga bilik secara DIY selalunya memakan 2–3 hujung minggu." },
      { q: "Apakah yang dilakukan tukang cat profesional yang saya sendiri tidak mampu?", a: "Penilaian dan persediaan permukaan: mengenal pasti plaster berongga, merawat retakan, memilih primer yang betul, memotong tepi yang kemas dan menyapu lapisan sekata — kemahiran inilah yang membezakan kemasan yang anda nikmati daripada yang anda perasan setiap hari." },
      { q: "Bolehkah saya buat sendiri bilik yang mudah dan upah untuk selebihnya?", a: "Boleh — bilik tidur dan kawasan jarang dilalui sesuai untuk DIY; bahagian luar, dinding tinggi, siling dan kemasan penyeri memerlukan peralatan serta teknik profesional. Ramai tukang cat akan memberi harga skop separa jika diminta." },
      { q: "Bagaimana jika hasil kerja profesional itu bermasalah?", a: "Kerja profesional yang berwaranti merangkumi kerja semula tanpa kos — kerja DIY yang rosak memaksa anda membeli bahan dua kali ditambah bayaran profesional untuk memperbetulkannya, dan begitulah cara menjimatkan wang menjadi pilihan paling mahal." }
    ],
    zh: [
      { q: "自己刷漆真的更省钱吗？", a: "一间墙面简单的小房间，确实省钱。整屋刷就不一样了：材料费差不多，但你的时间、工具租赁、浪费和返工风险会迅速拉近差距。三间房的排屋自己动手，往往要花两三个周末。" },
      { q: "专业油漆工做的哪些事是我做不到的？", a: "基层评估和处理：识别空鼓灰层、修补裂缝、选对底漆、边线收得整齐、涂刷均匀。正是这些手艺，决定了完工后你是享受这面墙，还是每天看着它别扭。" },
      { q: "可以简单的房间自己刷，其他请人做吗？", a: "可以。卧室和低使用频率的空间适合自己动手；外墙、高墙、天花和造型墙面则更适合专业工具和技术。只要开口询问，很多油漆工都愿意按部分范围报价。" },
      { q: "如果请人施工出了问题怎么办？", a: "有保修的专业工程会免费返工。自己做坏了，则要把材料买第二次，再付一笔专业费用来补救——本想省钱，结果反而最贵。" }
    ]
  },
  "compare:cheap-handyman-vs-insured-contractor": {
    ms: [
      { q: "Mengapa kontraktor berinsurans mengenakan kos lebih tinggi?", a: "Premium insurans, peralatan yang betul, pekerja terlatih dan rizab waranti semuanya memerlukan wang — kontraktor yang melangkau semua ini boleh memberi harga lebih rendah, tetapi apabila sesuatu pecah atau jatuh, bilnya sampai kepada anda." },
      { q: "Apa yang berlaku jika tukang murah merosakkan harta saya?", a: "Tanpa insurans liabiliti awam, anda yang membayar kerosakan dan pembaikannya — dan jika tukang itu merosakkan hartanah jiran melalui unit anda, JMB atau pihak pengurusan akan datang kepada anda, bukan kepadanya." },
      { q: "Adakah waranti benar-benar berbaloi untuk dibayar?", a: "Untuk kerja pemasangan, paip dan elektrik, ya — televisyen yang jatuh daripada dinding, paip yang bocor ke unit di bawah, atau litar yang melompat pada jam 2 pagi adalah perkara yang dibaiki percuma oleh waranti." },
      { q: "Bagaimanakah saya mengesahkan insurans sesebuah kontraktor?", a: "Minta salinan sijil liabiliti awam mereka dan sahkan terus dengan pihak insurans. Kontraktor sah mempunyai dokumen ini dengan segera; yang tidak serius akan memberi pelbagai alasan." }
    ],
    zh: [
      { q: "为什么有保险的承包商收费更高？", a: "保险费、像样的工具、训练有素的工人和保修准备金都是成本。省掉这些环节的承包商报价可以更低，但一旦东西坏掉或掉下来，账单就会落到你头上。" },
      { q: "如果便宜的杂工弄坏了我的房子怎么办？", a: "没有公共责任保险，损坏和维修费用都得自己承担。如果对方还通过你的单位弄坏了邻居的物业，物业或管理处找的人是你，不是他。" },
      { q: "保修真的值得多花钱吗？", a: "在安装、水电这类工程上值得。电视从墙上掉下、水管漏到楼下单位、凌晨两点电路跳闸——有保修，这些都能免费修好。" },
      { q: "怎样核实承包商真的有保险？", a: "要求提供公共责任保险证书副本，并直接联系保险公司核实。正规承包商会随时拿得出来；临时搭伙的团队只会找借口。" }
    ]
  },
  "compare:pu-injection-vs-surface-waterproofing": {
    ms: [
      { q: "Bilakah suntikan PU menjadi pilihan yang tepat?", a: "Apabila kebocoran hanya boleh dicapai dari bawah — siling besmen, papak antara tingkat dan keadaan di mana sisi positif (bumbung atau lantai bilik mandi) tidak boleh dibuka tanpa kerja pecah besar." },
      { q: "Bilakah kalis air permukaan lebih baik?", a: "Apabila sisi positif boleh dicapai dan membran boleh diperbaharui — kalis air permukaan menghalang air memasuki konkrit dari awal, dan itulah penyelesaian jangka panjang yang sentiasa diutamakan." },
      { q: "Bolehkah kedua-dua kaedah digunakan serentak?", a: "Boleh — suntikan PU menghentikan kebocoran aktif serta-merta, kemudian kalis air permukaan pada sisi positif menghalang kejadian semula. Pendekatan dua peringkat ini biasa untuk kebocoran antara tingkat apabila kedua-dua sisi boleh diakses." },
      { q: "Mengapa kontraktor saya hanya menawarkan suntikan?", a: "Kerana suntikan lebih cepat, lebih murah dan mengelakkan kerja pecah lantai di atas — tetapi jika punca sebenar ialah membran gagal pada sisi positif, suntikan semata-mata ialah kos berulang, bukan pembaikan kekal." }
    ],
    zh: [
      { q: "什么情况适合 PU 灌注？", a: "漏水点只能从背水面施工时，例如地下室天花板、楼层间楼板，或迎水面（屋顶、卫生间地面）不拆开就无法施工的情况。" },
      { q: "什么时候表面防水更好？", a: "迎水面可以施工、能重做防水层时。表面防水从源头上阻止水进入混凝土，始终是最优先的长期方案。" },
      { q: "两种方法可以一起做吗？", a: "可以。先用 PU 灌注马上止住渗漏，再从迎水面做表面防水防复发。楼层间漏水且两侧都能施工时，这是常见的两阶段做法。" },
      { q: "为什么施工方只向我推荐灌注？", a: "因为灌注更快、更便宜，也免去拆开楼上地面的工程。但如果根源是迎水面防水层已失效，只靠灌注只会变成一再重复的开支，而不是永久修复。" }
    ]
  },
  "compare:fixed-quote-vs-hourly-handyman": {
    ms: [
      { q: "Adakah sebut harga tetap sentiasa lebih baik?", a: "Bagi kerja yang jelas skopnya — memasang televisyen, menukar paip sinki, membaiki pintu — ya. Bagi kerja terbuka yang skop sebenarnya baru diketahui apabila dinding dibuka, kadar mengikut jam dengan had maksimum boleh menjadi lebih jujur." },
      { q: "Mengapa sesetengah tukang enggan memberi sebut harga tetap?", a: "Kerana mereka tidak dapat meramal apa yang akan dijumpai di belakang dinding atau di bawah jubin — tetapi tukang yang cekap patut memberi harga tetap untuk skop yang kelihatan dan kadar jam tertentu untuk sebarang kerja tambahan yang ditemui." },
      { q: "Bagaimana jika kerja bersebut harga tetap mengambil masa lebih lama daripada jangkaan?", a: "Itu risiko kontraktor, bukan anda — harga sudah dipersetujui berdasarkan skop yang kelihatan, dan sebarang tambahan tulen patut dimaklumkan serta diluluskan dahulu sebelum kerja diteruskan, bukan ditambah pada invois selepas itu." },
      { q: "Bolehkah bil mengikut jam mengakibatkan masa yang dipanjangkan?", a: "Tanpa anggaran masa dan laporan kemajuan, ya — sentiasa persetujui julat masa yang dijangka sebelum kerja bermula, dan minta makluman jika kerja melampaui julat itu dengan ketara." }
    ],
    zh: [
      { q: "固定报价一定更好吗？", a: "范围明确的活——挂电视、换水龙头、修门——是的。但要拆墙才知道实际情况的开放性工程，按小时收费并约定上限，反而更诚实。" },
      { q: "为什么有些杂工不愿意报固定价？", a: "因为他们无法预知墙后或砖下会发现什么。但有经验的杂工应能给出固定价覆盖看得见的范围，再约定明确的小时费率处理施工中新发现的问题。" },
      { q: "固定报价的工程超时了怎么办？", a: "这是承包商要承担的风险，不是你的。价格是按可见范围谈定的，确实需要增加的项目应先提出并征得同意再施工，而不是事后直接加进账单。" },
      { q: "按小时计费会不会被故意拖时间？", a: "没有预估时间和进度汇报，确实有可能。开工前应先约定预计用时区间，若工程明显超出，要求对方及时说明情况。" }
    ]
  },
  "compare:drywall-partition-vs-glass-partition": {
    ms: [
      { q: "Pembahagi jenis manakah yang lebih sesuai untuk pejabat di rumah?", a: "Jika anda perlukan privasi akustik untuk panggilan, drywall dengan isian bulu mineral — jika anda mahu cahaya daripada tingkap sampai ke bilik dalaman, kaca berfros atau reeded untuk privasi separa." },
      { q: "Adakah pembahagi kaca memindahkan bunyi?", a: "Pembahagi kaca lapisan tunggal memindahkan perbualan dengan mudah — kaca berkadaran akustik dengan panel laminasi dan sendi berkedap mengurangkannya dengan ketara, pada kos lebih tinggi." },
      { q: "Adakah drywall cukup kuat untuk memasang rak?", a: "Dengan sauh yang betul masuk ke stud logam, ya untuk beban sederhana — untuk barang berat, kedudukan stud perlu dirancang sebelum papan dipasang, dan kontraktor yang baik melakukannya pada peringkat rangka." },
      { q: "Berapa cepatkah setiap jenis pembahagi boleh dipasang?", a: "Pembahagi drywall boleh dirangka, dipasang papan dan dikemaskan dalam 2–3 hari; pembahagi kaca dengan bingkai aluminium lazimnya memerlukan 5–7 hari termasuk fabrikasi dan pemasangan kaca." }
    ],
    zh: [
      { q: "家庭办公室用哪种隔断更好？", a: "打电话需要隔音就选加岩棉的轻钢龙骨墙；想让窗户的光照进室内，就选磨砂或长虹玻璃，保留部分私密。" },
      { q: "玻璃隔断会传声吗？", a: "单层玻璃隔断很容易传走谈话声。声学级的夹胶玻璃配密封接缝可以明显改善，但造价更高。" },
      { q: "轻钢龙骨墙挂得住置物架吗？", a: "用合适的锚栓锁进金属龙骨，挂中等重量没问题。要挂重物，应在封板前就规划好龙骨位置，靠谱的施工方会在做骨架时就安排好。" },
      { q: "两种隔断的施工速度差多少？", a: "轻钢龙骨墙从做骨架、封板到收面大约两到三天；铝框玻璃隔断加上玻璃加工和安装，通常需要五到七天。" }
    ]
  },
  "compare:roof-coating-vs-torch-on-membrane": {
    ms: [
      { q: "Bolehkah salutan bumbung menghalang kebocoran bumbung rata?", a: "Bagi retak kecil dan kemerosotan permukaan dengan saliran baik, ya — salutan akrilik atau poliuretana merentangi retak rambut dan menahan UV. Tetapi jika air bertakung berhari-hari, salutan akan melepuh dan gagal pada titik lemah." },
      { q: "Bilakah membran torch-on menjadi jawapan yang betul?", a: "Apabila bumbung mempunyai takungan air, beberapa titik bocor, atau memerlukan penyelesaian lebih 10 tahun — sendi kimpalan dan tetulang membran torch-on menahan air bertakung yang tidak mampu diharungi salutan." },
      { q: "Berapa lebih mahalkah kos torch-on?", a: "Lazimnya 2–3 kali ganda kos salutan bagi setiap meter persegi, tetapi dengan jangka hayat tiga kali lebih lama — atas dasar kos setiap tahun, torch-on selalunya lebih jimat bagi bumbung yang memerlukan penyelesaian jangka panjang." },
      { q: "Bolehkah saya menyalut di atas membran torch-on sedia ada?", a: "Hanya jika membran itu masih kukuh dan diberi primer dengan betul — menyalut di atas membran yang gagal memerangkap lembapan dan mempercepatkan kerosakan. Keadaan membran mesti dinilai terlebih dahulu." }
    ],
    zh: [
      { q: "屋面涂层能止住平屋顶漏水吗？", a: "排水良好、只是细裂缝和表层老化时可以。丙烯酸或聚氨酯涂层能覆盖发丝裂缝并抗紫外线。但如果积水持续多天，涂层会在薄弱处起泡失效。" },
      { q: "什么情况必须用热熔防水卷材？", a: "屋顶有积水、漏水点多，或需要十年以上的长期方案时。热熔卷材的焊接接缝和胎体增强能承受涂层撑不住的长期积水。" },
      { q: "热熔卷材要贵多少？", a: "按每平方米算，通常是涂层的两到三倍，但寿命也是三倍以上。折算成年成本，对需要长期方案的屋顶来说，热熔卷材往往反而更划算。" },
      { q: "可以在旧热熔卷材上直接刷涂层吗？", a: "只有卷材仍然牢固并正确涂刷底漆时才可以。在已经失效的卷材上加涂层，会把水汽封在里面、加速恶化。施工前必须先评估卷材状况。" }
    ]
  },
  "compare:chemical-wash-vs-chemical-overhaul": {
    ms: [
      { q: "Apakah sebenarnya yang dibersihkan oleh basuhan kimia?", a: "Gegelung penyejatan, roda peniup dan takung saliran disiram larutan kimia yang melarutkan habuk, kulat dan biofilem tanpa menanggalkan unit — berkesan untuk penyelenggaraan rutin apabila penyejukan masih memuaskan." },
      { q: "Bilakah overhaul kimia diperlukan?", a: "Apabila penyaman udara meniup angin lemah walaupun penapis bersih, bau kekal selepas basuhan, atau unit sudah bertahun tidak dibersihkan secara mendalam — penanggalaan penuh mencapai permukaan yang tidak dapat dijangkau basuhan di tempat." },
      { q: "Adakah overhaul berbaloi untuk penyaman udara lama?", a: "Jika pemampat dan sistem penyejuk masih sihat, ya — overhaul memulihkan aliran udara dan kecekapan hampir seperti baharu pada sebahagian kecil kos penggantian. Jika pemampat sudah gagal, penggantian ialah jawapan yang jujur." },
      { q: "Berapa kerapkah setiap servis perlu dilakukan?", a: "Basuhan kimia setiap 6–12 bulan bergantung pada penggunaan dan habuk; overhaul kimia setiap 2–3 tahun atau apabila prestasi menurun walaupun dibasuh berkala — kedua-duanya memanjangkan hayat unit dan mengurangkan penggunaan elektrik." }
    ],
    zh: [
      { q: "药水清洗到底清洁了什么？", a: "用药水冲洗蒸发器盘管、贯流风轮和接水盘，溶掉灰尘、霉菌和生物膜，整机不用拆下。冷却效果还能接受时的日常保养，这样做就够了。" },
      { q: "什么时候需要整机药水深度清洗？", a: "滤网干净但风量明显变小、洗过之后异味仍在，或多年没有深度清洁时。整机拆解才能洗到原位清洗够不着的部位。" },
      { q: "旧空调值得做深度清洗吗？", a: "只要压缩机和制冷系统健康，就值得。深度清洗能让风量和能效恢复到接近新机水平，费用远低于换新。如果压缩机已经在衰退，换新才是诚实的建议。" },
      { q: "两种保养各应多久做一次？", a: "药水清洗视使用频率和灰尘情况，每 6–12 个月一次；深度清洗每 2–3 年一次，或正常清洗后效果仍明显下降时。两者都能延长空调寿命、降低电费。" }
    ]
  },
  "compare:inverter-vs-non-inverter-aircon": {
    ms: [
      { q: "Berapa banyakkah elektrik yang dijimatkan oleh inverter?", a: "Lazimnya 30–50% berbanding bukan inverter berkapasiti sama, kerana pemampat melaraskan kelajuan dan bukannya hidup-mati berulang kali — penjimatan paling besar pada unit yang beroperasi lebih 6 jam setiap hari." },
      { q: "Adakah inverter berbaloi untuk bilik tetamu?", a: "Jika bilik itu hanya beroperasi beberapa jam sekali-sekala, harga belian lebih rendah model bukan inverter mungkin tidak pernah dapat diimbangi oleh kecekapan inverter — inverter membayar premiumnya pada bilik yang kerap digunakan." },
      { q: "Adakah kos membaiki inverter lebih tinggi?", a: "Papan PCB pada inverter lebih mahal untuk diganti berbanding kapasitor ringkas pada bukan inverter, tetapi pemampat inverter mengalami kurang haus daripada kitaran hidup-mati, yang boleh bermakna kurang kegagalan pemampat." },
      { q: "Bolehkah saya memasang inverter pada pendawaian sedia ada?", a: "Selalunya boleh — inverter menarik arus sama atau lebih rendah daripada bukan inverter berkapasiti sama, tetapi litar khusus dan pemutus mestilah bersaiz betul mengikut tarikan maksimum unit." }
    ],
    zh: [
      { q: "变频空调能省多少电？", a: "同匹数相比，通常省 30–50%。因为压缩机是调速运行，而不是反复启停。每天运行六小时以上的房间，省电效果最明显。" },
      { q: "客房装变频值得吗？", a: "如果只是偶尔开几个小时，变频省下的电费可能永远追不回与定频的差价。变频的溢价，要靠高频使用的房间才能回本。" },
      { q: "变频空调维修更贵吗？", a: "变频机换电路板的费用高于定频机换电容，但变频压缩机少了反复启停的磨损，压缩机故障反而可能更少。" },
      { q: "现有线路可以装变频空调吗？", a: "大多数情况可以。同匹数下变频的运行电流不高于定频，但专用回路和断路器仍须按机组最大电流正确选型。" }
    ]
  },
  "compare:wall-mounted-vs-ceiling-cassette-aircon": {
    ms: [
      { q: "Jenis manakah yang menyejukkan ruang tamu besar dengan lebih baik?", a: "Kaset siling — aliran udara empat hala mengagihkan penyejukan sekata merentasi ruang konsep terbuka, manakala unit dinding meniup ke satu arah dan membiarkan penjuru jauh lebih panas." },
      { q: "Adakah kaset siling lebih mahal untuk dipasang?", a: "Ya — kos pemasangan 30–50% lebih tinggi kerana pemasangan struktur, laluan penyejuk lebih panjang dan saliran melalui siling. Unit itu sendiri juga berharga lebih tinggi daripada unit dinding setara." },
      { q: "Bolehkah saya memasang kaset di kondo berlangit-langit rendah?", a: "Hanya jika rongga siling cukup dalam untuk badan kaset — lazimnya 250–350 mm. Pada kondo dengan ruang siling minimum, unit dinding atau kaset profil nipis ialah pilihan praktikal." },
      { q: "Jenis manakah yang lebih mudah diselenggara?", a: "Unit dinding lebih ringkas — penapis diloncir keluar dan unit berada pada aras mata. Penapis kaset memerlukan tangga dan takung salirannya lebih sukar dicapai, menjadikan servis profesional lebih penting." }
    ],
    zh: [
      { q: "大客厅用哪种空调制冷更均匀？", a: "天花卡式机。四面出风能把冷气均匀送到开放式空间的每个角落；挂机只朝一个方向送风，远端角落会偏热。" },
      { q: "天花卡式机安装更贵吗？", a: "是的。吊装结构、更长的冷媒管和隐藏在天花内的排水，使安装费高出 30–50%，机器本身也比同匹数挂机贵。" },
      { q: "层高较低的公寓可以装卡式机吗？", a: "只有天花夹层深度能容纳机身时才行，一般需要 250–350 毫米。夹层空间有限的公寓，挂机或超薄卡式机更实际。" },
      { q: "哪种机型日常保养更省事？", a: "挂机更省事。滤网一拉就能取下，机器就在视线高度；卡式机要爬梯子取滤网，接水盘也难检查，更需要定期请专业人员保养。" }
    ]
  },

  // ─── Wave 20 — `brands` family (32 pages × 4 FAQs × MS/ZH) ───────────────
  "brands:nippon-paint-application-malaysia": {
    ms: [
      { q: "Adakah cat Nippon lebih baik daripada Dulux untuk bahagian dalam rumah?", a: "Bergantung pada julat produk. Spot Less Plus daripada Nippon sangat tahan kotoran di laluan sibuk dan bilik kanak-kanak, manakala Dulux EasyClean hampir setanding. Pilihan yang tepat bergantung pada corak lalu lintas di rumah anda, bukan kesetiaan kepada jenama." },
      { q: "Adakah cat kalis cuaca Nippon tahan dalam cuaca panas Malaysia?", a: "Weatherbond direka khusus untuk kitaran cahaya matahari tropika dan hujan lebat, dan lazimnya membawa jaminan pengeluar 5 tahun bagi ketahanan luaran apabila disapu di atas sistem primer dan penutup yang betul." },
      { q: "Bolehkah cat Nippon digunakan pada dinding lama yang berkapur?", a: "Boleh, asalkan 5400 Wall Sealer atau primer tahan alkali yang sesuai disapu terlebih dahulu. Mengecat terus di atas lapisan kapur yang sudah longgar tanpa penutup ialah punca paling lazim cat mula mengelupas lebih awal." },
      { q: "Bagaimanakah saya mengesahkan produk Nippon yang tulen di tapak?", a: "Semak nombor kelompok pada tin dengan rekod pengedar sah Nippon di Malaysia. Warna yang dikisar di kilang sepatutnya tiba dalam tin belum dibuka, bukan dipindahkan ke dalam bekas tanpa tanda." }
    ],
    zh: [
      { q: "室内用漆，立邦比多乐士好吗？", a: "要看具体系列。立邦 Spot Less Plus 在走廊和儿童房的耐污表现突出，多乐士 EasyClean 也相当接近。正确选择取决于家里的使用频率与动线，而不是品牌偏好。" },
      { q: "立邦外墙漆耐得住马来西亚的酷热吗？", a: "Weatherbond 专为热带紫外线与暴雨循环设计，只要按正确底漆和封闭底涂层施工，外墙耐久性通常可获得长达 5 年的厂家质量保证。" },
      { q: "旧墙起粉可以直接上立邦漆吗？", a: "可以，但必须先涂 5400 墙面封闭底漆或合适的抗碱底漆。直接在已经松散的粉化层上刷面漆，是油漆过早剥落最常见的原因。" },
      { q: "怎样确认送到现场的立邦产品是正品？", a: "核对罐身批号与立邦马来西亚授权经销商的记录。工厂调色的包装应当原封未开，而不是从不带标识的容器分装而来。" }
    ]
  },
  "brands:dulux-paint-application-malaysia": {
    ms: [
      { q: "Adakah Dulux Weathershield berbaloi dengan harganya yang lebih tinggi?", a: "Pada bahagian luar rumah yang terdedah terus kepada hujan monsun dan cahaya matahari petang, ya. Dakwaan ketahanan 7 tahun itu disokong ujian iklim tropika sebenar, dan prestasinya mengatasi emulsi biasa dari segi keberkapuran dan pudar warna." },
      { q: "Adakah Dulux EasyClean sesuai untuk bilik kanak-kanak?", a: "Memang itulah tujuannya. Tahap ketahanan gosok Kelas 1 bermaksud kesan krayon, cap jari dan percikan boleh dilap tanpa menanggalkan kilauan cat — itulah bezanya berbanding emulsi mat asas." },
      { q: "Perlukah Dulux menggunakan primer tertentu?", a: "Dulux mengesyorkan primer profesional mereka sendiri untuk lekatan dan kekalan warna terbaik, tetapi sebarang primer tahan alkali yang berkualiti daripada sistem yang serasi juga berkesan jika digunakan mengikut spesifikasi." },
      { q: "Bagaimanakah tahap VOC Dulux berbanding jenama lain?", a: "Julat cat dalaman Dulux membawa pensijilan VOC rendah termasuk Green Choice, setanding dengan julat mesra alam Nippon. Kedua-duanya memenuhi garis panduan kualiti udara dalaman DOSH Malaysia jika pengudaraan mencukupi semasa kerja mengecat." }
    ],
    zh: [
      { q: "多乐士晴雨漆贵得有道理吗？", a: "对外墙长期直面季候风暴雨和午后紫外线的情况，值得。7 年耐久承诺有真实热带气候测试支撑，在抗粉化和抗褪色方面明显优于普通乳胶漆。" },
      { q: "多乐士 EasyClean 适合用在儿童房吗？", a: "它正是为此设计。1 级耐擦洗意味着蜡笔痕、手印和污渍都能擦掉而不破坏光泽，这正是它与普通哑光乳胶漆的区别。" },
      { q: "多乐士必须配专用底漆吗？", a: "多乐士建议使用自家专业底漆，附着力和保色性最佳；但只要是相容体系的优质抗碱底漆，并按规范施工，同样可以达到要求。" },
      { q: "多乐士的 VOC 水平如何？", a: "多乐士室内系列通过低 VOC 认证，包括 Green Choice，与立邦的环保系列相当。施工时只要保持良好通风，两者都符合马来西亚职业安全与健康局（DOSH）的室内空气指引。" }
    ]
  },
  "brands:jotun-paint-application-malaysia": {
    ms: [
      { q: "Mengapakah memilih Jotun berbanding Nippon atau Dulux?", a: "Julat Jotashield mendahului dari segi pemantulan haba dan kekalan warna di bawah pendedahan tropika. Jika dinding luar rumah anda terkena cahaya matahari petang yang terik, pengurangan haba dan ketahanan pudar itu memang berbaloi dengan kosnya." },
      { q: "Adakah Jotun Majestic berbaloi untuk ruang tamu?", a: "Jika anda mahukan kemasan mutiara atau sutera premium yang kekal konsisten pada pelbagai sudut cahaya, ya. Inilah jenama yang lazim dinyatakan oleh arkitek apabila dinding perlu menjadi elemen rekaan, bukan sekadar lapisan cat." },
      { q: "Adakah cat Jotun tahan kulat di bilik mandi?", a: "Julat bilik mandi dan dapur Jotun mengandungi bahan tambah antikulat yang berkesan dalam kelembapan Malaysia. Namun pengudaraan yang betul serta substrat tahan lembapan tetap menjadi pertahanan pertama." },
      { q: "Di manakah Jotun boleh didapati di Malaysia?", a: "Melalui pengedar sah dan pusat bancuhan warna Jotun di seluruh Lembah Klang. Warna yang dibancuh di kilang oleh pusat ini lebih konsisten berbanding bancuhan di kedai perkakasan biasa." }
    ],
    zh: [
      { q: "为什么选佐敦而不是立邦或多乐士？", a: "Jotashield 系列在热带暴晒环境下的反射隔热和保色表现领先。如果外墙长期承受午后烈日，降温和抗褪色效果足以证明这笔花费是合理的。" },
      { q: "客厅用佐敦 Majestic 值得吗？", a: "如果你要的是在不同光线角度下都保持一致的珍珠或丝光高档效果，就值得。当墙面需要作为设计元素而不只是一层涂料时，建筑师通常指定这个品牌。" },
      { q: "佐敦漆在浴室能防霉吗？", a: "佐敦的浴室与厨房系列含有防霉添加剂，在马来西亚的潮湿环境下有效。但良好的通风和防潮基层仍然是最重要的一道防线。" },
      { q: "马来西亚哪里可以买到佐敦漆？", a: "通过巴生谷一带的佐敦授权经销商和调色中心。这些中心出厂调色的颜色，比一般五金店现场调配更为稳定一致。" }
    ]
  },
  "brands:sirim-certified-pipes-malaysia": {
    ms: [
      { q: "Mengapakah pensijilan SIRIM penting untuk paip?", a: "Pensijilan SIRIM QAS mengesahkan paip itu memenuhi Piawaian Malaysia bagi tekanan, keselamatan bahan dan ketahanan. Paip tanpa pensijilan lazimnya menyebabkan tuntutan insurans bangunan ditolak apabila ia gagal." },
      { q: "Jenama paip manakah yang membawa pensijilan SIRIM?", a: "Antara jenama lazim di Malaysia ialah PPI (Polyplumb), Wira Plumb dan sesetengah julat tembaga Heng Hong. Sentiasa semak label SIRIM pada setiap kelompok yang dihantar, bukan sekadar nama jenama." },
      { q: "Bolehkah saya menggunakan paip tanpa SIRIM untuk menjimatkan kos?", a: "Boleh, tetapi penjimatan itu kecil berbanding risikonya. Paip tidak bersijil yang pecah sehingga membanjiri unit anda atau jiran di bawah tidak dilindungi insurans, dan pihak JMB boleh mengarahkan penggantian semula." },
      { q: "Bagaimanakah saya mengesahkan pensijilan SIRIM di tapak?", a: "Cari pelekat SIRIM QAS atau tanda timbul pada badan paip sendiri, bukan hanya pada bungkusan, kemudian padankan nombor kelompok dengan direktori produk berdaftar SIRIM dalam talian." }
    ],
    zh: [
      { q: "为什么水管要有 SIRIM 认证？", a: "SIRIM QAS 认证证明水管符合马来西亚标准对耐压、材料安全和耐久性的要求。使用无认证水管，一旦发生破损，大多数建筑保险索赔都会被拒绝。" },
      { q: "哪些水管品牌有 SIRIM 认证？", a: "马来西亚常见的有 PPI（Polyplumb）、Wira Plumb，以及部分 Heng Hong 铜管系列。每次送货都要核对管身上的 SIRIM 标签，不能只看品牌名称。" },
      { q: "可以用无认证水管省钱吗？", a: "技术上可以，但省下的钱远抵不上风险。无认证水管爆裂导致自家或楼下单位浸水，保险不赔，而且物业管理处（JMB）仍可能要求全部更换。" },
      { q: "怎样在现场核实 SIRIM 认证？", a: "查看管身上的 SIRIM QAS 贴纸或压印标记，而不只是包装；同时用批号在 SIRIM 网上认证产品目录中比对确认。" }
    ]
  },
  "brands:grundfos-water-pump-installation": {
    ms: [
      { q: "Mengapakah tekanan pancuran masih lemah selepas pam dipasang?", a: "Selalunya pam itu terlalu besar atau terlalu kecil untuk panjang paip sebenar dan bilangan mata air. Julat SCALA dan UPA daripada Grundfos meliputi situasi berbeza, dan saiz yang tepat lebih penting daripada jenama." },
      { q: "Adakah pam Grundfos cukup senyap untuk kondo?", a: "Julat SCALA2 dan UPA beroperasi pada paras bising yang sangat rendah, sesuai dipasang di dalam rumah berhampiran bilik tidur. Itulah sebab ia kerap dinyatakan untuk kediaman bertingkat di Malaysia." },
      { q: "Berapa lamakah jangka hayat pam Grundfos?", a: "Lazimnya 8 hingga 12 tahun dengan air yang bersih dan pemasangan yang betul. Perlindungan kering dan pemotongan haba mengelakkan kerosakan awal yang kerap berlaku pada pam murah tanpa ciri ini." },
      { q: "Bolehkah pam Grundfos mengatasi tekanan tidak sekata antara tingkat?", a: "Bagi rumah teres bertingkat, boleh. Pam penggalak bersaiz betul yang dipadankan dengan tangki tekanan akan mengimbangi penghantaran air ke tingkat atas, iaitu tempat sistem graviti biasanya gagal." }
    ],
    zh: [
      { q: "装了水泵后花洒水压还是很小，为什么？", a: "通常是水泵与实际管长和用水点位不匹配，偏大或偏小。Grundfos 的 SCALA 和 UPA 系列对应不同场景，选对规格比选品牌更关键。" },
      { q: "格兰富水泵够安静，适合公寓吗？", a: "SCALA2 和 UPA 系列运行噪音很低，可以安装在靠近卧室的室内位置，这正是马来西亚高层住宅经常指定它们的原因。" },
      { q: "格兰富水泵能用多久？", a: "在水质干净、安装正确的情况下，一般可用 8 至 12 年。缺水保护和过热断电功能，可以避免廉价水泵常见的早期故障。" },
      { q: "格兰富水泵能解决楼层之间水压不均吗？", a: "对多层排屋可以。规格合适的增压泵配合压力罐，能平衡送往楼上各层的水量，而这正是重力供水系统最容易出问题的地方。" }
    ]
  },
  "brands:joven-water-heater-installation": {
    ms: [
      { q: "Model Joven manakah sesuai untuk bilik mandi kondo?", a: "Untuk satu mata pancuran, julat serta-merta Joven pada litar khusus 20A sudah memadai. Jika anda menggunakan tab mandi atau pancuran hujan yang memerlukan aliran lebih tinggi, model tangki simpanan yang disesuaikan dengan corak penggunaan lebih sesuai." },
      { q: "Adakah Joven lebih selamat daripada jenama lain?", a: "ELCB terbina dalam dan pemotongan haba ialah ciri piawai pada seluruh julat Joven, setanding dengan ciri keselamatan Jumbo, Panasonic dan Rinnai. Pendawaian yang betul lebih menentukan keselamatan berbanding nama jenama." },
      { q: "Mengapakah pemanas Joven saya kerap menjatuhkan suis utama?", a: "Lazimnya elemen pemanas yang sudah lemah atau litar kongsi yang tidak mencukupi kadaran arusnya. Pemanas serta-merta Joven memerlukan litar khusus 20A, dan berkongsi litar dengan peralatan lain akan menyebabkan suis kerap terpelantik." },
      { q: "Berapa kerapkah pemanas Joven perlu dinyahkerak?", a: "Di kawasan air keras Lembah Klang, sekali setahun. Kerak yang terkumpul pada elemen mengurangkan kecekapan dan akhirnya menyebabkan kerosakan awal, yang dapat dicegah dengan lawatan nyah kerak sekitar RM 80 hingga RM 120." }
    ],
    zh: [
      { q: "公寓浴室适合用哪款 Joven 热水器？", a: "只有一个花洒位时，安装在 20A 专用回路上的即热系列已经足够。如果要配浴缸或大流量的花洒顶喷，则应按用水习惯选择相应容量的储水式机型。" },
      { q: "Joven 比其他品牌更安全吗？", a: "内置漏电断路器和过热保护是 Joven 全系列的标准配置，与 Jumbo、Panasonic、Rinnai 的安全功能相当。真正决定安全的是接线是否正确，而不是品牌。" },
      { q: "为什么我的 Joven 热水器老是跳闸？", a: "通常是加热元件老化，或与其他电器共用电流不足的回路。Joven 即热式热水器需要独立的 20A 专用回路，与其它电器共用会导致反复跳闸。" },
      { q: "Joven 热水器多久除一次水垢？", a: "巴生谷硬水区建议每年一次。水垢附着在加热元件上会降低效率，最终导致提前损坏；一次约 RM 80 至 RM 120 的除垢服务就能避免这个问题。" }
    ]
  },
  "brands:rinnai-water-heater-installation": {
    ms: [
      { q: "Adakah pemanas gas Rinnai selamat dipasang di dalam rumah?", a: "Hanya jika laluan serombong ke luar dibuat dengan betul dan bilik mempunyai pengudaraan mencukupi. Model serombong seimbang Rinnai direka untuk dipasang di dalam rumah, tetapi jenis serombong terbuka memerlukan ruang utiliti yang berventilasi." },
      { q: "Mengapakah memilih pemanas gas Rinnai berbanding elektrik?", a: "Pemanas gas serta-merta memberikan kadar aliran lebih tinggi pada suhu yang stabil untuk pancuran hujan dan tab mandi. Kos operasi bagi setiap liter air panas juga lazimnya lebih rendah daripada elektrik di Malaysia." },
      { q: "Adakah perkhidmatan Rinnai tersedia di Lembah Klang?", a: "Ya. Rinnai Malaysia mempunyai pusat servis sah di seluruh Lembah Klang untuk pemeriksaan keselamatan tahunan, iaitu syarat wajib bagi model gas supaya perlindungan jaminan dan insurans kekal sah." },
      { q: "Apakah yang berlaku jika bekalan gas terputus semasa mandi?", a: "Peranti gagal nyala Rinnai memotong bekalan gas serta-merta dan unit berhenti memanaskan air. Anda hanya mendapat air sejuk, bukan kebocoran gas — itulah mekanisme keselamatan yang wajib ada pada setiap pemanas gas berpensijilan." }
    ],
    zh: [
      { q: "Rinnai 燃气热水器可以装在室内吗？", a: "只有在烟道正确通向室外、房间通风充足的情况下才可以。Rinnai 的平衡式烟道机型专为室内安装设计，而开放式烟道机型则必须安装在通风良好的设备空间。" },
      { q: "为什么选燃气而不是电热？", a: "即热式燃气热水器流量更大、水温更稳定，适合顶喷花洒和浴缸使用。在马来西亚，每升热水的运行成本通常也低于电热。" },
      { q: "巴生谷有 Rinnai 的售后服务吗？", a: "有。Rinnai Malaysia 在巴生谷设有授权服务中心，提供年度安全检查；燃气机型必须完成年检，才能维持产品保修和保险保障。" },
      { q: "洗澡时燃气突然中断会怎样？", a: "Rinnai 的熄火保护装置会立即切断燃气，机器停止加热。您只会流出冷水，不会发生燃气泄漏，这是每台合格燃气热水器都必须具备的安全机制。" }
    ]
  },
  "brands:knauf-gypsum-board-installation": {
    ms: [
      { q: "Adakah Knauf lebih baik daripada jenama papan gipsum lain?", a: "Knauf antara pengeluar terbesar dunia dengan ketumpatan papan dan mutu tepi yang konsisten. Di Malaysia ia bersaing dengan Boral dan Yoshima, dan pilihan yang tepat selalunya bergantung pada spesifikasi sistem, bukan jenama papan semata-mata." },
      { q: "Perlukah bilik mandi menggunakan papan tahan lembapan?", a: "Wajib. Papan MR berwajah hijau Knauf menahan serapan lembapan dalam kelembapan bilik mandi Malaysia, sekali gus mengelakkan kendur dan pertumbuhan kulat yang muncul pada papan standard dalam tempoh satu atau dua tahun." },
      { q: "Adakah papan Knauf disertakan jaminan?", a: "Knauf memberikan jaminan bahan ke atas sistem papannya apabila dipasang bersama rangka dan bahan sambungan yang ditentukan mereka. Mencampur jenama dalam satu sistem boleh membatalkan jaminan papan tersebut." },
      { q: "Bolehkah papan Knauf bertahan dengan kelembapan Malaysia?", a: "Papan standard mengendalikan kelembapan dalaman biasa dengan baik. Bagi kawasan berhampiran sumber air atau unit tingkat bawah yang mengalami kelembapan naik, julat MR atau papan simen akan dinyatakan sebagai ganti." }
    ],
    zh: [
      { q: "Knauf 比其他石膏板品牌好吗？", a: "Knauf 是全球顶尖制造商之一，板材密度和边角质量稳定。在马来西亚它与 Boral、Yoshima 竞争，正确选择往往取决于整个系统的规格，而不只是板材品牌。" },
      { q: "浴室一定要用防潮板吗？", a: "一定要。Knauf 绿面防潮板能抵御马来西亚浴室的湿气，避免普通板材在一两年内出现下垂和发霉。" },
      { q: "Knauf 板材有质量保证吗？", a: "若按其指定的龙骨和接缝材料配套施工，Knauf 会为板材系统提供材料质量保证。在同一系统中混用不同品牌，可能导致板材保修失效。" },
      { q: "Knauf 板材能应付马来西亚的湿度吗？", a: "普通板用于一般室内湿度没有问题；靠近水源的位置，或有返潮现象的底层单位，则应改用防潮板或水泥板系列。" }
    ]
  },
  "brands:boral-gypsum-board-installation": {
    ms: [
      { q: "Adakah papan Boral boleh didapati di Malaysia?", a: "Ya. Julat gipsum Boral diedarkan di seluruh Malaysia melalui pengedar sah, bersaing terus dengan Knauf dan jenama tempatan dari segi harga dan ketersediaan untuk projek kediaman mahupun komersial." },
      { q: "Adakah papan Boral akan kendur dalam kelembapan tropika?", a: "Tidak jika dipasang mengikut spesifikasi dengan jarak rangka dan corak pemasangan yang betul. Papan Boral diuji untuk keadaan tropika, dan kendur hampir selalu berpunca daripada jarak rangka yang salah atau beban berlebihan." },
      { q: "Bolehkah papan Boral digunakan untuk penebat bunyi?", a: "Boleh. Sistem sekatan akustik Boral menggunakan ketebalan papan tertentu, isian bulu mineral dan sambungan yang ditutup rapat bagi mencapai kadar pengurangan bunyi yang diiktiraf antara bilik atau unit." },
      { q: "Bagaimanakah harga Boral berbanding Knauf?", a: "Harganya secara umumnya setanding. Faktor penentu lazimnya sistem mana yang biasa digunakan oleh tukang anda, dan sama ada keseluruhan sistem papan, rangka dan sambungan dinyatakan sebagai satu set yang sepadan." }
    ],
    zh: [
      { q: "马来西亚能买到 Boral 板材吗？", a: "可以。Boral 石膏板系列通过授权经销商在全马分销，在价格和供货方面直接与 Knauf 及本地品牌竞争，适用于住宅和商业项目。" },
      { q: "Boral 板材在热带潮湿环境下会下垂吗？", a: "只要按规范施工，龙骨间距和固定方式正确，就不会。Boral 板材针对热带气候做过测试，下垂几乎总是因为龙骨间距不当或超重。" },
      { q: "Boral 板材可以用来隔音吗？", a: "可以。Boral 的隔音隔墙系统通过特定的板材厚度、填充岩棉和密封接缝，达到标称的隔声量，用于房间或单位之间的隔音。" },
      { q: "Boral 与 Knauf 相比价格如何？", a: "价格大致相当。决定因素通常是施工队熟悉哪套系统，以及整套管材、龙骨和接缝材料是否按配套规格指定。" }
    ]
  },
  "brands:sika-waterproofing-application": {
    ms: [
      { q: "Adakah kalis air Sika sesuai untuk bilik mandi?", a: "SikaTop Seal 107 dan salutan bersimen serupa berfungsi baik di bawah jubin bilik mandi sebagai membran terikat. Ia disapu dengan berus, boleh menampung sedikit pergerakan substrat dan serasi dengan pelekat jubin piawai." },
      { q: "Bagaimanakah Sika berbanding sistem membran sahaja?", a: "Sika merangkumi kedua-dua sistem bersimen dan membran sapuan cecair. Pilihannya bergantung pada substrat, pendedahan dan akses: bersimen untuk di bawah jubin, manakala membran PU untuk bumbung dan dek yang terdedah." },
      { q: "Adakah kalis air Sika disertakan jaminan?", a: "Sika memberikan jaminan sistem melalui rangkaian pemasang yang diluluskan mereka. Tempoh jaminan bergantung pada sistem yang dinyatakan dan persediaan permukaan yang disahkan pada setiap peringkat kerja." },
      { q: "Bolehkah produk Sika menghentikan kebocoran yang sedang aktif?", a: "Resin suntikan PU daripada Sika direka khusus untuk itu. Ia mengembang apabila bertemu air lalu menutup retakan aktif pada konkrit, memberikan masa untuk pembaikan membran kekal dilakukan jika perlu." }
    ],
    zh: [
      { q: "Sika 防水适合用在浴室吗？", a: "SikaTop Seal 107 及同类水泥基涂料很适合作为浴室瓷砖下的粘结式防水膜，可采用刷涂施工，能承受基层的轻微位移，并与标准瓷砖胶相容。" },
      { q: "Sika 与单一膜类系统相比如何？", a: "Sika 同时提供水泥基和液体涂膜系统。选择取决于基层、暴露条件和施工可达性：瓷砖下用水泥基，暴露的屋面和平台用 PU 涂膜。" },
      { q: "Sika 防水有质保吗？", a: "Sika 通过其认证施工商网络提供系统质保。质保期取决于所指定的系统，以及每个阶段经核实的基层处理情况。" },
      { q: "Sika 产品能处理正在渗漏的裂缝吗？", a: "Sika 的 PU 注浆树脂正是为此设计。它遇水膨胀，封堵混凝土中正在渗漏的裂缝，为后续做永久性防水膜争取时间。" }
    ]
  },
  "brands:bostik-waterproofing-application": {
    ms: [
      { q: "Adakah silikon Bostik lebih baik daripada jenama biasa?", a: "Silikon sanitari Bostik mengekalkan keanjalan dan sifat antikulat lebih lama berbanding pilihan murah yang lazimnya retak dan menjadi hitam dalam tempoh setahun di persekitaran bilik mandi Malaysia." },
      { q: "Bolehkah Bostik digunakan untuk kalis air di bawah jubin bilik mandi?", a: "Boleh. Sistem bersimen dan membran cecair Bostik disapu di bawah pelekat jubin sebagai lapisan kalis air terikat, dan diuji mengikut Piawaian Malaysia bagi prestasi kawasan basah." },
      { q: "Berapa lamakah sealant Bostik bertahan di pancuran mandian?", a: "Lazimnya 5 hingga 8 tahun sebelum perlu diganti, berbanding 1 hingga 2 tahun bagi sealant akrilik asas. Perbezaan kos awalnya kecil jika dibandingkan dengan kerja mengulang seal yang berulang kali." },
      { q: "Adakah Bostik serasi dengan semua pelekat jubin?", a: "Membran kalis air Bostik diuji dengan julat pelekat mereka sendiri dan kebanyakan pelekat jubin ubah suai polimer piawai. Sentiasa sahkan keserasian pada peringkat sebut harga, bukan selepas jubin dipasang." }
    ],
    zh: [
      { q: "Bostik 硅胶比普通品牌好吗？", a: "Bostik 卫浴硅胶的弹性和防霉性能比廉价产品持久得多；在马来西亚的浴室环境下，廉价产品通常一年内就会开裂发黑。" },
      { q: "Bostik 可以做浴室瓷砖下的防水吗？", a: "可以。Bostik 的水泥基和液体涂膜系统涂在瓷砖胶之下，形成粘结式防水层，并通过马来西亚标准对湿区性能的测试。" },
      { q: "Bostik 密封胶在淋浴区能用多久？", a: "一般 5 至 8 年才需要更换，而普通丙烯酸密封胶只有 1 至 2 年。相比反复重打的工时，前期的差价其实很小。" },
      { q: "Bostik 与所有瓷砖胶都相容吗？", a: "Bostik 防水膜与自家胶粘剂系列以及多数标准聚合物改性瓷砖胶做过相容性测试。务必在报价阶段就确认相容性，而不是等瓷砖铺好之后。" }
    ]
  },
  "brands:mapei-waterproofing-application": {
    ms: [
      { q: "Mengapakah pemasang jubin profesional memilih Mapei?", a: "Pendekatan sistem Mapei — kalis air, pelekat dan grout daripada satu pengeluar — menjamin keserasian dan menjadikan tuntutan jaminan ditanggung oleh satu pihak yang bertanggungjawab, bukan rantaian saling menyalahkan." },
      { q: "Adakah Mapei Aquadefense cukup cepat untuk ubah suai pantas?", a: "Ya. Aquadefense sedia untuk pemasangan jubin kira-kira 4 jam selepas lapisan terakhir, menjadikannya sesuai untuk ubah suai bilik mandi yang perlu disiapkan dengan segera kerana keluarga memerlukan bilik itu kembali." },
      { q: "Bolehkah Mapei digunakan di atas jubin sedia ada?", a: "Pemasangan jubin bertindih dengan sistem Mapei boleh dilakukan jika jubin sedia ada masih kukuh dan diberi primer dengan betul. Tetapi jika membran lama sudah gagal, membuangnya sehingga ke substrat ialah jawapan yang jujur." },
      { q: "Adakah Mapei lebih mahal daripada jenama tempatan?", a: "Kos bahannya lebih tinggi, tetapi jaminan sistem dan risiko panggilan semula yang lebih rendah sering menjadikannya setanding dari segi jumlah kos kerja — terutamanya bagi bilik mandi yang memerlukan kerja memecah jubin semula jika berlaku kebocoran." }
    ],
    zh: [
      { q: "为什么瓷砖专业施工方偏爱 Mapei？", a: "Mapei 采用系统方案，防水、胶粘剂和填缝剂都来自同一厂家，相容性有保证，质保索赔也只需找单一责任方，不会陷入互相推诿。" },
      { q: "Mapei Aquadefense 干得快，适合赶工的翻新吗？", a: "适合。Aquadefense 在最后一遍涂刷后约 4 小时即可铺砖，非常适合需要尽快恢复使用的浴室翻新。" },
      { q: "Mapei 能用在原有瓷砖上吗？", a: "只要原有瓷砖仍然牢固并做好底涂，Mapei 系统可以做砖上贴砖。但如果旧防水层已经失效，诚实的做法还是拆除至基层重做。" },
      { q: "Mapei 比本地品牌贵吗？", a: "材料成本较高，但系统质保和更低的返修风险，往往使其在总工程造价上仍具竞争力，尤其是卫生间一旦漏水就要重新打掉瓷砖的情况。" }
    ]
  },
  "brands:daikin-aircon-service-malaysia": {
    ms: [
      { q: "Mengapakah Daikin paling kerap diservis di Malaysia?", a: "Kerana Daikin mempunyai jumlah unit terpasang paling besar di rumah-rumah Malaysia. Lebih banyak unit bermakna lebih banyak panggilan servis, bukannya semestinya lebih banyak kerosakan. Julat inverter mereka tahan lama jika diselenggara mengikut jadual." },
      { q: "Bolehkah mana-mana juruteknik menyervis inverter Daikin?", a: "Servis asas boleh, tetapi diagnosis PCB inverter memerlukan pembacaan kod ralat khusus Daikin. Pasukan kami membawa alat diagnostik untuk kod kerosakan inverter Daikin yang lazim ditemui." },
      { q: "Berapa kerapkah penyaman udara Daikin perlu diservis?", a: "Cuci penapis sendiri di rumah setiap 3 hingga 4 bulan, dan basuhan kimia profesional setiap 6 hingga 12 bulan bergantung pada jumlah jam penggunaan serta paras habuk di kawasan anda." },
      { q: "Adakah gas R32 Daikin selamat dikendalikan?", a: "R32 mudah terbakar pada tahap ringan tetapi selamat apabila dikendalikan oleh juruteknik terlatih dengan peralatan pemulihan yang betul. Semua kerja gas Daikin kami mengikut prosedur pengendalian yang ditetapkan pengeluar." }
    ],
    zh: [
      { q: "为什么大金是马来西亚维修量最高的品牌？", a: "因为大金在马来西亚家庭中的装机量最大。机器多自然维修电话多，不等于故障率高。只要按时保养，大金的变频系列相当可靠。" },
      { q: "任何技师都能修大金变频机吗？", a: "基础保养可以，但变频电路板的诊断需要读取大金专用故障码。我们的团队配备了读取大金常见变频故障码的诊断工具。" },
      { q: "大金空调多久保养一次？", a: "滤网自己在家每 3 至 4 个月清洗一次；专业药水清洗每 6 至 12 个月一次，具体取决于使用时长和所在区域的灰尘情况。" },
      { q: "大金 R32 冷媒处理起来安全吗？", a: "R32 属于轻微可燃，但由受过培训、配备合格回收设备的技师操作是安全的。我们所有大金冷媒作业都遵循厂家规定的操作流程。" }
    ]
  },
  "brands:panasonic-aircon-service-malaysia": {
    ms: [
      { q: "Apakah yang membezakan servis penyaman udara Panasonic?", a: "Sistem penulenan udara nanoe-G dan penderia Econavi menambah langkah diagnostik yang dilangkau oleh servis biasa. Lawatan juruteknik terlatih Panasonic kami termasuk penentukuran penderia dan semakan keutuhan penapis." },
      { q: "Adakah Panasonic lebih tahan lama daripada Daikin?", a: "Kedua-duanya jenama teratas di Malaysia. Panasonic sangat kompetitif dari segi kecekapan tenaga dan ciri kualiti udara, manakala Daikin mendahului dari segi penguasaan pasaran. Tahap ketahanannya setanding dengan penyelenggaraan yang betul." },
      { q: "Bolehkah penyaman udara Panasonic menggunakan alat ganti biasa?", a: "Sesetengah bahagian mekanikal boleh ditukar ganti, tetapi papan PCB dan modul penderia adalah khusus jenama. Memasang papan biasa pada inverter Panasonic akan menghasilkan kod ralat dan membatalkan jaminan." },
      { q: "Mengapakah penyaman udara Panasonic saya memaparkan ralat H11?", a: "H11 lazimnya menandakan masalah komunikasi antara unit dalam dan unit luar, berpunca daripada kerosakan pendawaian, masalah PCB atau kegagalan penderia. Setiap kemungkinan diperiksa mengikut urutan tertentu sebelum sebarang alat ganti ditukar." }
    ],
    zh: [
      { q: "松下空调的保养有什么不同？", a: "nanoe-G 空气净化和 Econavi 感应系统比普通保养多了几道检测工序。我们受过松下培训的技师上门时，会做感应器校准和滤网完整性检查。" },
      { q: "松下比大金更耐用吗？", a: "两者在马来西亚都是一线品牌。松下在能效和空气净化功能上很有竞争力，大金则在市场占有率上领先。在保养得当的前提下，可靠性不相上下。" },
      { q: "松下空调可以用通用配件吗？", a: "部分机械配件可以互换，但电路板和感应模块是品牌专用。在松下变频机上装通用电路板会出现故障码，并导致保修失效。" },
      { q: "松下空调显示 H11 是什么原因？", a: "H11 通常表示室内机与室外机之间通讯异常，可能是接线故障、电路板问题或感应器失效。我们会按既定顺序逐项排查，确定原因后才更换零件。" }
    ]
  },
  "brands:mitsubishi-electric-aircon-service-malaysia": {
    ms: [
      { q: "Adakah Mitsubishi Electric berbeza daripada Mitsubishi Heavy?", a: "Ya, kedua-duanya syarikat berasingan dengan barisan produk, alat ganti dan kod ralat yang berlainan. Mr. Slim dan Starmex daripada Mitsubishi Electric ialah julat yang paling lazim di rumah Malaysia." },
      { q: "Mengapakah harga belian Mitsubishi Electric lebih tinggi?", a: "Mutu binaan, operasi yang senyap dan kecekapan tenaga menjelaskan premiumnya, manakala kos servisnya setanding dengan Daikin dan Panasonic jika diselenggara mengikut jadual yang sama." },
      { q: "Bolehkah penyaman udara Mitsubishi jarang-jarang diservis?", a: "Sebaiknya tidak. Mutu binaan premium mengurangkan kerosakan, tetapi kekotoran pada gegelung dan saliran tersumbat menjejaskan semua jenama sama rata dalam keadaan berhabuk dan lembap di Malaysia." },
      { q: "Apakah kerosakan Mitsubishi Electric yang paling kerap berlaku?", a: "Kehausan motor kipas dalaman dan kegagalan pam saliran pada model kaset siling. Kedua-duanya pembaikan mudah jika alat ganti ada dalam stok, dan lazimnya disiapkan dalam satu lawatan." }
    ],
    zh: [
      { q: "三菱电机和三菱重工不一样吗？", a: "不一样。两家是独立公司，产品线、配件和故障码都不同。马来西亚家庭最常见的是三菱电机的 Mr. Slim 和 Starmex 系列。" },
      { q: "为什么三菱电机的售价更高？", a: "做工、静音表现和能效水平支撑了它的溢价。而在相同保养周期下，维修费用与大金、松下相当。" },
      { q: "三菱空调可以延长保养间隔吗？", a: "不建议。优质做工确实减少故障，但在马来西亚多尘潮湿的环境下，盘管积污和排水堵塞对所有品牌一视同仁。" },
      { q: "三菱电机最常见的故障是什么？", a: "室内风机马达磨损，以及天花卡式机型的排水泵故障。只要配件有库存，两种问题维修都不复杂，通常一次上门就能完成。" }
    ]
  },
  "brands:york-aircon-service-malaysia": {
    ms: [
      { q: "Adakah York jenama penyaman udara yang baik untuk Malaysia?", a: "York ialah jenama pertengahan yang kukuh dengan harga kompetitif dan mutu binaan yang munasabah. Ia popular di ruang komersial Malaysia dan semakin banyak digunakan pada pemasangan kediaman." },
      { q: "Bolehkah alat ganti York diperoleh di dalam negara?", a: "Boleh. York mempunyai rangkaian pengedaran yang mantap di Malaysia, dan alat ganti lazim seperti kapasitor, penderia dan motor kipas boleh didapati dalam beberapa hari, bukan berminggu-minggu." },
      { q: "Bagaimanakah tahap kecekapan tenaga York?", a: "Julat inverter York bersaing baik dari segi penarafan bintang berbanding Daikin dan Panasonic, walaupun jenama premium masih mendahului pada peringkat kecekapan tertinggi bagi unit kediaman." },
      { q: "Adakah sistem saluran komersial York diservis?", a: "Ya. Pasukan kami mengendalikan sistem saluran dan kaset York yang lazim di pejabat dan kedai Malaysia, termasuk penggantian penapis, pencucian gegelung dan diagnostik papan kawalan." }
    ],
    zh: [
      { q: "York 在马来西亚算是好品牌吗？", a: "York 是扎实的中端品牌，价格有竞争力，做工也合理。它在马来西亚商业场所很常见，近年也越来越多用于住宅安装。" },
      { q: "York 的配件在本地买得到吗？", a: "买得到。York 在马来西亚有成熟的分销网络，电容、感应器、风机马达等常用配件几天内就能拿到，不用等上几周。" },
      { q: "York 的能效表现如何？", a: "York 的变频系列在能效星级上可与大金、松下一争，但在家用机型的最高能效档位上，依然是高端品牌领先。" },
      { q: "可以做 York 商用风管系统吗？", a: "可以。我们处理马来西亚办公室和店铺常见的 York 风管机与卡式机，包括更换滤网、清洗盘管和诊断控制板。" }
    ]
  },
  "brands:acson-aircon-service-malaysia": {
    ms: [
      { q: "Adakah Acson jenama Malaysia?", a: "Ya. Acson dikeluarkan di Malaysia oleh OYL Industries yang kini sebahagian daripada kumpulan Daikin. Ini memberikan bekalan alat ganti tempatan yang kukuh serta harga yang sangat kompetitif untuk pemasangan yang mementingkan bajet." },
      { q: "Adakah penyaman udara Acson tahan lama?", a: "Pada julat harganya, Acson memberikan ketahanan yang baik. Ia mungkin tidak menandingi jenama premium dari segi penarafan kecekapan atau tahap kesenyapan, tetapi penyejukannya berkesan dan alat ganti mudah didapati." },
      { q: "Bolehkah penyaman udara mudah alih Acson diservis?", a: "Boleh. Unit mudah alih memerlukan cucian penapis, basuhan gegelung dan semakan gas yang sama seperti unit dinding, cuma panel capaian dan susunan salirannya berbeza — dan pasukan kami sudah biasa dengan kedua-duanya." },
      { q: "Patutkah unit Acson lama saya dibaiki atau diganti?", a: "Jika pemampat masih sihat dan hanya PCB atau motor kipas yang perlu diperhatikan, membaiki lebih berbaloi. Tetapi unit Acson berusia lebih 10 tahun yang menggunakan gas R22 lazimnya lebih baik diganti dengan inverter moden." }
    ],
    zh: [
      { q: "Acson 是马来西亚品牌吗？", a: "是的。Acson 由 OYL Industries 在马来西亚生产，该公司现已并入大金集团。因此本地配件供应充足，价格对预算有限的安装项目很有竞争力。" },
      { q: "Acson 空调可靠吗？", a: "以它的价位来说，可靠性相当不错。虽然在能效等级和静音方面比不上高端品牌，但制冷效果良好，配件也容易买到。" },
      { q: "Acson 移动式空调可以维修吗？", a: "可以。移动机与挂机一样需要清洗滤网、冲洗盘管和检查冷媒，只是检修面板和排水方式不同，而我们的团队对此都很熟悉。" },
      { q: "旧 Acson 该修还是该换？", a: "如果压缩机状态良好，只是电路板或风机马达需要处理，维修更划算。但一台使用超过 10 年、仍用 R22 冷媒的 Acson，通常换成现代变频机更合适。" }
    ]
  },
  "brands:carrier-aircon-service-malaysia": {
    ms: [
      { q: "Adakah Carrier masih jenama yang baik di Malaysia?", a: "Carrier kekal dihormati di peringkat global mahupun di Malaysia. Julat inverter XPower mereka kompetitif dari segi kecekapan, dan sejarah panjang jenama ini menjamin rangkaian servis serta bekalan alat ganti yang mantap." },
      { q: "Bagaimanakah harga Carrier berbanding Daikin?", a: "Harga Carrier lazimnya sedikit di bawah Daikin dan Panasonic pada penarafan bintang yang setara, menjadikannya pilihan nilai bagi pemilik rumah yang mahukan jenama dikenali tanpa premium jenama teratas." },
      { q: "Sukarkah mencari alat ganti Carrier?", a: "Alat ganti lazim seperti kapasitor, penderia dan motor kipas mudah didapati. Papan PCB mungkin mengambil masa beberapa hari untuk ditempah, tetapi tidak sukar seperti sesetengah jenama kecil yang lain." },
      { q: "Bolehkah penyaman udara Carrier menggunakan gas R32?", a: "Model Carrier yang lebih baharu menggunakan bahan penyejuk R32, dan juruteknik kami diiktiraf untuk mengendalikan kedua-dua R32 serta sistem R410A lama yang masih lazim pada pemasangan sedia ada di Malaysia." }
    ],
    zh: [
      { q: "Carrier 在马来西亚还算好品牌吗？", a: "依然算。Carrier 在全球和马来西亚都保持着良好口碑，XPower 变频系列在能效上很有竞争力；品牌历史悠久，也意味着服务网络和配件供应都很成熟。" },
      { q: "Carrier 与大金相比价格如何？", a: "在同等能效星级下，Carrier 的价格通常略低于大金和松下，是既想要知名品牌、又不想付一线溢价的房主的实惠之选。" },
      { q: "Carrier 的配件难找吗？", a: "电容、感应器、风机马达等常用配件供应充足。电路板可能需要几天订货，但不像一些小品牌那样面临缺货问题。" },
      { q: "Carrier 空调使用 R32 冷媒吗？", a: "较新的 Carrier 机型使用 R32 冷媒。我们的技师具备处理 R32 以及马来西亚现有安装中仍很常见的 R410A 系统的资质。" }
    ]
  },
  "brands:midea-aircon-service-malaysia": {
    ms: [
      { q: "Adakah penyaman udara Midea boleh diharap untuk rumah Malaysia?", a: "Midea menawarkan harga yang kompetitif dengan tahap ketahanan yang munasabah pada kos tersebut. Ia popular untuk hartanah sewa dan pemasangan bajet di mana harga jenama premium sukar dibenarkan." },
      { q: "Mampukah Midea bersaing dengan jenama Jepun?", a: "Dari segi harga dan prestasi penyejukan asas, ya. Dari segi kekalan kecekapan jangka panjang dan kesenyapan, jenama Jepun masih mendahului. Pilihan yang tepat bergantung pada bajet dan tempoh penggunaan yang anda jangkakan." },
      { q: "Adakah alat ganti Midea tersedia di Malaysia?", a: "Ya. Midea mempunyai rangkaian pengedaran yang semakin berkembang di Malaysia, dan alat ganti servis lazim boleh didapati melalui pengedar sah serta pembekal alat ganti penyaman udara am." },
      { q: "Perlukah penyaman udara Midea diservis sekerap Daikin?", a: "Perlu. Semua jenama mengumpul habuk, kulat dan kekotoran gegelung yang sama dalam keadaan Malaysia. Melangkau servis pada jenama bajet hanya membuatkan ia rosak lebih cepat berbanding jenama premium." }
    ],
    zh: [
      { q: "美的空调在马来西亚家庭中用得住吗？", a: "美的价格有竞争力，以这个价位来说可靠性合理。它在出租房和预算有限的安装中很常见，因为这些场合确实难以负担高端品牌的价格。" },
      { q: "美的能和日本品牌竞争吗？", a: "在价格和基础制冷表现上可以；但在长期能效保持和静音方面，日本品牌依然领先。如何选择取决于预算和预计使用年限。" },
      { q: "马来西亚买得到美的配件吗？", a: "买得到。美的在马来西亚的分销网络不断扩大，常用维修配件可通过授权经销商和通用空调配件商买到。" },
      { q: "美的空调需要像大金一样频繁保养吗？", a: "需要。在马来西亚的环境里，所有品牌的空调都会同样积聚灰尘、霉菌和盘管污垢。预算型品牌省掉保养，只会比高端品牌更快出问题。" }
    ]
  },
  "brands:haier-aircon-service-malaysia": {
    ms: [
      { q: "Bolehkah ciri pembersihan sendiri Haier menggantikan servis?", a: "Tidak. Fungsi pembersihan sendiri membantu mengurangkan habuk pada permukaan gegelung antara lawatan profesional, tetapi ia tidak menggantikan basuhan kimia, pembersihan saliran dan semakan gas yang mencegah kehilangan prestasi sebenar." },
      { q: "Adakah Haier pilihan bajet yang baik?", a: "Haier bersaing baik dalam segmen nilai dengan ciri seperti pembersihan sendiri dan kawalan WiFi pada harga lebih rendah. Tahap ketahanannya munasabah untuk kos tersebut jika diselenggara mengikut jadual." },
      { q: "Mudahkah penyaman udara Haier dibaiki?", a: "Kebanyakan pembaikan lazim — kapasitor, penderia, motor kipas — menggunakan komponen piawai. Papan PCB khusus Haier boleh didapati melalui saluran sah, walaupun kadangkala perlu menunggu." },
      { q: "Bagaimanakah bil elektrik Haier berbanding jenama lain?", a: "Model inverter Haier membawa penarafan bintang yang kompetitif dan penggunaan sebenarnya setanding dengan jenama nilai lain. Faktor kecekapan terbesar tetap servis berkala, tanpa mengira jenama." }
    ],
    zh: [
      { q: "海尔的自清洁功能可以代替保养吗？", a: "不能。自清洁能在两次专业保养之间减少盘管表面的浮尘，但无法替代药水清洗、排水管清理和冷媒检查，而这些才是防止性能真正下降的关键。" },
      { q: "海尔是好的经济型选择吗？", a: "是。海尔在性价比区间很有竞争力，以更低的价格提供自清洁、WiFi 控制等功能。只要按时保养，以这个价位来说可靠性不错。" },
      { q: "海尔空调容易修吗？", a: "多数常见维修，如电容、感应器、风机马达，用的都是通用元件。海尔专用电路板可通过授权渠道买到，只是有时需要等待。" },
      { q: "海尔的电费表现如何？", a: "海尔变频机型的能效星级很有竞争力，实际耗电与其它性价比品牌相当。影响能耗最大的因素始终是定期保养，与品牌无关。" }
    ]
  },
  "brands:toshiba-aircon-service-malaysia": {
    ms: [
      { q: "Adakah penyaman udara Toshiba masih dibuat di Jepun?", a: "Bahagian penyaman udara Toshiba, kini Toshiba Carrier, mengeluarkan produk di Jepun, Thailand dan China bergantung pada model. Unit di Malaysia lazimnya dipasang di Thailand, dan ini tidak menjejaskan mutu mahupun bekalan alat ganti." },
      { q: "Sejauh manakah ketahanan penyaman udara Toshiba?", a: "Toshiba antara jenama Jepun yang paling tahan lama, dengan pemampat yang terkenal panjang umur. Banyak unit Toshiba berusia 15 tahun masih beroperasi dengan cekap apabila diselenggara dengan betul." },
      { q: "Adakah alat ganti Toshiba mahal?", a: "Harga alat ganti tulen sedikit di atas paras pertengahan, tetapi kadar kegagalan yang lebih rendah bermakna lebih sedikit penggantian sepanjang hayat unit. Jumlah kos pemilikan kekal kompetitif." },
      { q: "Bolehkah penyaman udara Toshiba menghadapi cuaca panas Malaysia?", a: "Unit Toshiba direka untuk suhu persekitaran tropika dan berprestasi baik dalam keadaan Malaysia. Pengurusan haba jenama ini menjadi sebab pemasang mengesyorkannya untuk bilik yang menghadap barat." }
    ],
    zh: [
      { q: "东芝空调还是日本制造吗？", a: "东芝空调部门（现为 Toshiba Carrier）按机型分别在日本、泰国和中国生产。马来西亚销售的机器通常在泰国组装，这并不影响质量，也不影响配件供应。" },
      { q: "东芝空调耐用吗？", a: "东芝是日本品牌中最耐用的一批，压缩机以寿命长著称。保养得当的情况下，许多使用 15 年的东芝机器仍能高效运行。" },
      { q: "东芝配件贵吗？", a: "原厂配件价格略高于中端水平，但故障率低意味着整个使用周期内更换次数更少，总体持有成本依然有竞争力。" },
      { q: "东芝空调能应付马来西亚的酷热吗？", a: "东芝机型按热带环温设计，在马来西亚环境下表现良好。其出色的热管理，正是安装师傅推荐它用于西晒房间的原因之一。" }
    ]
  },
  "brands:hitachi-aircon-service-malaysia": {
    ms: [
      { q: "Adakah penyaman udara Hitachi sesuai dengan cuaca Malaysia?", a: "Hitachi mereka model gred tropika khusus untuk keadaan Asia Tenggara, dengan penyahlembapan yang dipertingkat dan penarafan pemampat untuk suhu persekitaran tinggi yang sesuai dengan cuaca panas Malaysia." },
      { q: "Bolehkah fungsi iClean Hitachi menggantikan servis manual?", a: "iClean membantu antara lawatan dengan membekukan lalu menanggalkan habuk permukaan, tetapi basuhan kimia profesional, pembersihan saliran dan semakan gas masih diperlukan setiap 6 hingga 12 bulan." },
      { q: "Bagaimanakah harga Hitachi berbanding Daikin?", a: "Harga Hitachi lazimnya sedikit di bawah Daikin pada kapasiti dan penarafan bintang yang setara, menjadikannya pilihan nilai dalam kalangan jenama Jepun tanpa jurang mutu yang ketara." },
      { q: "Adakah alat ganti Hitachi tersedia di KL?", a: "Ya. Hitachi mempunyai rangkaian pengedaran alat ganti yang mantap di Malaysia, dan komponen servis lazim boleh didapati dalam beberapa hari bagi kebanyakan model kediaman dan komersial ringan." }
    ],
    zh: [
      { q: "日立空调适合马来西亚天气吗？", a: "适合。日立专为东南亚环境设计了热带级机型，强化除湿能力，并按高环温标定压缩机，很适合马来西亚的炎热气候。" },
      { q: "日立 iClean 可以代替人工保养吗？", a: "不能完全代替。iClean 通过结霜再化霜带走表面浮尘，在两次保养之间有帮助，但每 6 至 12 个月仍需要专业药水清洗、疏通排水和检查冷媒。" },
      { q: "日立与大金相比价格如何？", a: "在相同匹数和能效星级下，日立通常略低于大金，是日本品牌中性价比较高的选择，质量差距并不明显。" },
      { q: "吉隆坡买得到日立配件吗？", a: "买得到。日立在马来西亚有成熟的配件分销体系，多数家用和轻型商用机型的常用维修件几天内就能拿到。" }
    ]
  },
  "brands:samsung-aircon-service-malaysia": {
    ms: [
      { q: "Adakah Samsung WindFree berbaloi dengan harganya?", a: "Jika anda benar-benar sensitif kepada tiupan angin terus — di bilik tidur, bilik bayi atau meja kerja yang terletak betul-betul di bawah unit — aliran udara melalui lubang mikro WindFree memang mengurangkan masalah tiupan sejuk secara ketara." },
      { q: "Bolehkah penyaman udara Samsung dikawal melalui telefon?", a: "Boleh. Integrasi SmartThings Samsung berfungsi melalui WiFi untuk kawalan jarak jauh, penjadualan dan pemantauan. Pemasangan kami termasuk pemasangan serta ujian fungsi ini sebelum diserahkan kepada anda." },
      { q: "Mudahkah mendapatkan alat ganti Samsung?", a: "Pengedaran alat ganti penyaman udara Samsung di Malaysia sudah mantap. Alat ganti lazim seperti penderia, kapasitor dan motor kipas cepat didapati, manakala papan PCB dapat ditempah dalam beberapa hari." },
      { q: "Sejauh manakah ketahanan Samsung berbanding jenama Jepun?", a: "Julat inverter digital Samsung meningkat ketara dari segi ketahanan pada beberapa generasi terkini. Pada julat harganya, ia bersaing baik dengan jenama pertengahan Jepun dari segi ciri mahupun ketahanan." }
    ],
    zh: [
      { q: "三星 WindFree 贵得值吗？", a: "如果你确实怕直吹，例如卧室、婴儿房，或正好在机器下方的居家办公桌位，WindFree 的微孔送风确实能明显改善冷风直吹的问题。" },
      { q: "三星空调可以用手机控制吗？", a: "可以。三星的 SmartThings 通过 WiFi 实现远程控制、定时和状态监测。我们的安装服务会一并完成设置，并在交付前测试功能。" },
      { q: "三星空调配件好买吗？", a: "好买。三星在马来西亚的空调配件分销体系成熟，感应器、电容、风机马达等常用件供应很快，电路板也能在几天内订到。" },
      { q: "三星与日本品牌相比可靠性如何？", a: "三星数码变频系列近几代的可靠性提升明显。以它的价位，在功能和耐用性上都能与日本中端品牌一较高下。" }
    ]
  },
  "brands:lg-aircon-service-malaysia": {
    ms: [
      { q: "Adakah Dual Inverter LG benar-benar lebih cekap?", a: "Reka bentuk pemampat kembar berputar LG mengurangkan getaran dan meningkatkan kecekapan pada beban separa. Ujian bebas mengesahkan penggunaan elektrik lebih rendah berbanding inverter putar tunggal pada kapasiti yang sama." },
      { q: "Bolehkah penyaman udara LG beroperasi dengan kuasa solar atau rendah?", a: "Julat Dual Inverter LG popular untuk rumah bersistem solar kerana watt minimum yang rendah membolehkannya mengekalkan penyejukan pada sistem inverter yang lebih kecil tanpa tersandung." },
      { q: "Bagaimanakah LG berbanding Samsung dari segi ketahanan?", a: "Kedua-dua jenama Korea ini mencapai tahap ketahanan yang setanding pada generasi terkini. Tempoh jaminan pemampat LG antara yang terpanjang di pasaran, mencerminkan keyakinan terhadap rekaan mereka." },
      { q: "Adakah kos servis LG lebih tinggi daripada jenama Jepun?", a: "Kos servis hampir sama merentas semua jenama utama. Basuhan kimia, semakan gas dan diagnostik elektrik mengambil masa yang sama, sama ada unit itu LG, Daikin atau Panasonic." }
    ],
    zh: [
      { q: "LG 双转子变频真的更省电吗？", a: "LG 的双转子压缩机设计降低振动，并提升部分负荷效率。独立测试证实，在相同匹数下，它的耗电量低于单转子变频机。" },
      { q: "LG 空调能在太阳能或低功率环境下运行吗？", a: "LG 双转子变频系列在太阳能住宅中很受欢迎，因为其最低运行功率低，可以在较小的逆变系统上持续制冷而不跳闸。" },
      { q: "LG 与三星相比可靠性如何？", a: "两个韩国品牌在近几代产品上的可靠性已经相当接近。LG 的压缩机保修期是市场上最长的之一，反映出对自身设计的信心。" },
      { q: "LG 的保养费用比日本品牌高吗？", a: "各大品牌的保养费用相近。药水清洗、冷媒检查和电气诊断所需时间相同，无论是 LG、大金还是松下都一样。" }
    ]
  },
  "brands:sharp-aircon-service-malaysia": {
    ms: [
      { q: "Adakah Plasmacluster Sharp benar-benar membersihkan udara?", a: "Ion Plasmacluster menunjukkan kesan antimikrob dalam kajian makmal. Di dalam bilik sebenar kesannya lebih halus, tetapi ia memang membantu mengurangkan pertumbuhan kulat pada gegelung dalaman antara dua servis." },
      { q: "Adakah penyaman udara Sharp boleh diharap di Malaysia?", a: "Sharp ialah jenama Jepun pertengahan yang kukuh dengan bekalan alat ganti yang baik di Malaysia. Tahap ketahanannya setanding dengan Hitachi dan Toshiba pada julat harga yang serupa." },
      { q: "Bolehkah penyaman udara Sharp dibaiki di dalam negara?", a: "Boleh. Sharp mempunyai rangkaian servis yang mantap di Malaysia, dan alat ganti pembaikan lazim boleh didapati melalui pengedar sah serta pembekal alat ganti penyaman udara am." },
      { q: "Bagaimanakah inverter J-Tech Sharp berbanding yang lain?", a: "Inverter J-Tech menawarkan penarafan tenaga yang kompetitif dan kawalan suhu yang stabil. Ia tawaran nilai yang kukuh dalam kalangan jenama inverter Jepun bagi pemilik rumah yang mementingkan kos." }
    ],
    zh: [
      { q: "夏普的净离子群真能净化空气吗？", a: "实验室研究显示，净离子群具有抗菌效果。在实际房间里的效果没有那么明显，但确实有助于减少两次保养之间内机盘管上的霉菌滋生。" },
      { q: "夏普空调在马来西亚可靠吗？", a: "夏普是扎实的中端日本品牌，在马来西亚配件供应良好。在相近价位上，可靠性与日立、东芝相当。" },
      { q: "夏普空调可以在本地维修吗？", a: "可以。夏普在马来西亚有成熟的服务网络，常用维修配件可通过授权经销商和通用空调配件商买到。" },
      { q: "夏普 J-Tech 变频表现如何？", a: "J-Tech 变频机能效等级有竞争力，温控也很稳定。对注重预算的业主来说，它是日本变频品牌中性价比较高的选择。" }
    ]
  },
  "brands:fujitsu-aircon-service-malaysia": {
    ms: [
      { q: "Mengapakah Fujitsu dianggap jenama premium?", a: "Fujitsu membina produknya untuk keadaan melampau. Unit mereka dinilai untuk suhu persekitaran yang lebih tinggi dan pemampatnya terkenal lebih tahan lama berbanding pesaing, sekali gus menjelaskan harga belian yang lebih tinggi." },
      { q: "Adakah Fujitsu berbaloi dengan kos tambahan berbanding Daikin?", a: "Bagi bilik yang menghadap barat, unit di tingkat teratas atau kawasan yang terdedah kepada haba melampau, premium itu lazimnya kembali melalui hayat lebih panjang dan kurang kerosakan. Untuk kegunaan bilik tidur biasa, Daikin sama baiknya." },
      { q: "Adakah alat ganti Fujitsu mahal di Malaysia?", a: "Alat ganti tulen Fujitsu memang lebih mahal, tetapi kadar kegagalan yang rendah bermakna anda membelinya lebih jarang. Jumlah kos penyelenggaraan selama 10 tahun kekal setanding dengan jenama arus perdana Jepun." },
      { q: "Bolehkah Fujitsu mengendalikan kelembapan Malaysia?", a: "Prestasi penyahlembapan Fujitsu antara yang terbaik di pasaran. Unitnya mengekalkan kelembapan yang selesa tanpa menyejukkan secara berlebihan, iaitu apa yang sebenarnya diperlukan oleh iklim tropika." }
    ],
    zh: [
      { q: "为什么富士通被视为高端品牌？", a: "富士通按极端工况设计产品，机型按更高的环温标定，压缩机寿命也普遍优于竞品，这些都是其较高售价的理由。" },
      { q: "富士通比大金贵，值得吗？", a: "对西晒房间、顶层单位或长期高温暴晒的位置，这笔溢价通常会通过更长的使用寿命和更少的故障回本；如果只是普通卧室使用，大金同样够好。" },
      { q: "富士通配件在马来西亚贵吗？", a: "原厂配件确实有溢价，但故障率低意味着更换次数少。按 10 年计算，总维护成本与日本主流品牌相比仍有竞争力。" },
      { q: "富士通能应付马来西亚的湿度吗？", a: "富士通的除湿表现是市场上最好的之一。它能保持舒适湿度而不过度降温，这正是热带气候真正需要的。" }
    ]
  },
  "brands:gree-aircon-service-malaysia": {
    ms: [
      { q: "Adakah Gree pengeluar penyaman udara terbesar di dunia?", a: "Ya. Gree mengeluarkan lebih banyak unit penyaman udara berbanding mana-mana syarikat lain di peringkat global, termasuk pengeluaran OEM untuk beberapa jenama terkenal. Skala ini memberikan kelebihan dari segi harga." },
      { q: "Adakah penyaman udara Gree cukup boleh diharap untuk rumah?", a: "Julat kediaman Gree menawarkan ketahanan yang munasabah pada harga kompetitif. Ia pilihan popular untuk hartanah sewa dan bilik kedua di mana harga jenama premium sukar dibenarkan." },
      { q: "Bolehkah alat ganti Gree ditemui di Malaysia?", a: "Pengedaran Gree di Malaysia berkembang pesat, dan alat ganti lazim boleh didapati melalui pengedar sah. Papan PCB bagi model baharu mungkin mengambil masa beberapa hari tambahan untuk ditempah." },
      { q: "Bagaimanakah kecekapan tenaga Gree berbanding jenama lain?", a: "Julat inverter Gree membawa penarafan bintang yang kompetitif berbanding jenama nilai lain. Kecekapan sebenar lebih bergantung pada pemilihan saiz yang tepat dan servis berkala berbanding jenama semata-mata." }
    ],
    zh: [
      { q: "格力是全球最大的空调制造商吗？", a: "是的。格力的空调产量全球第一，还为多个知名品牌做 OEM 代工，规模优势让它在价格上更有竞争力。" },
      { q: "格力空调家用可靠吗？", a: "格力的家用系列以有竞争力的价格提供合理的可靠性。在出租房和次要房间，它是很常见的选择，因为这些地方很难为高端品牌的价格买单。" },
      { q: "马来西亚买得到格力配件吗？", a: "格力在马来西亚的分销发展很快，常用配件可通过授权经销商买到。较新型号的电路板可能需要多等几天。" },
      { q: "格力的能效表现如何？", a: "格力变频系列的能效星级与其它性价比品牌相比很有竞争力。实际能效更多取决于匹数是否选对和是否定期保养，而不只是品牌。" }
    ]
  },
  "brands:national-aircon-service-malaysia": {
    ms: [
      { q: "Adakah National sama dengan Panasonic?", a: "National ialah nama jenama awal Panasonic di banyak pasaran. Teknologi penyaman udaranya ada kaitan dan sesetengah alat ganti boleh saling ganti, tetapi kedua-duanya dianggap barisan produk berasingan untuk tujuan servis." },
      { q: "Patutkah saya terus menyervis penyaman udara National yang lama?", a: "Jika pemampat masih sihat dan unit menyejukkan dengan baik, servis memanjangkan hayatnya secara ekonomi. Tetapi jika ia menggunakan gas R22 dan memerlukan pembaikan besar, penggantian dengan inverter moden lazimnya lebih berbaloi." },
      { q: "Bolehkah penyaman udara National masih mendapat gas R22?", a: "R22 sedang dihentikan secara global dan bekalan semakin mahal. Menambah gas pada unit R22 selalunya menjadi titik di mana penggantian dengan inverter R32 atau R410A lebih masuk akal dari segi kewangan." },
      { q: "Adakah alat ganti National masih tersedia?", a: "Bahagian mekanikal lazim masih boleh didapati melalui pembekal penyaman udara am, tetapi papan PCB khusus jenama dan komponen elektronik semakin sukar ditemui bagi model National yang sudah dihentikan." }
    ],
    zh: [
      { q: "National 和 Panasonic 是同一家吗？", a: "National 是松下早年在全球多个市场使用的品牌名。空调技术上有渊源，部分配件也可互换，但在维修上被视为两条独立的产品线。" },
      { q: "旧 National 空调还值得继续保养吗？", a: "如果压缩机状态良好、制冷正常，保养能经济地延长使用寿命。但如果它使用 R22 冷媒且需要大修，换成现代变频机通常更划算。" },
      { q: "National 空调还能加 R22 冷媒吗？", a: "R22 正在全球淘汰，供应也日益昂贵。给 R22 机型加冷媒，往往正是换成 R32 或 R410A 变频机在经济上更合理的转折点。" },
      { q: "National 配件还买得到吗？", a: "常用机械配件仍可通过通用空调配件商买到，但已停产 National 机型的品牌专用电路板和电子元件越来越难找。" }
    ]
  },
  "brands:hisense-aircon-service-malaysia": {
    ms: [
      { q: "Adakah Hisense pilihan bajet yang baik?", a: "Hisense menawarkan ciri yang kompetitif pada harga lebih rendah. Kawalan WiFi, teknologi inverter dan mutu binaan yang munasabah menjadikannya pilihan yang praktikal untuk pemasangan yang mementingkan kos." },
      { q: "Bagaimanakah Hisense berbanding Midea dan Gree?", a: "Ketiga-tiganya bersaing dalam segmen nilai dengan ketahanan dan ciri yang serupa. Pilihan lazimnya bergantung pada jenama yang distok oleh pemasang anda dan model yang paling sesuai dengan saiz bilik." },
      { q: "Bolehkah penyaman udara Hisense diservis di KL?", a: "Boleh. Rangkaian servis Hisense di Malaysia semakin berkembang, dan penyelenggaraan piawai seperti basuhan kimia serta semakan gas boleh dilakukan oleh mana-mana juruteknik penyaman udara yang bertauliah." },
      { q: "Perlukah saya bimbang tentang ketahanan jangka panjang Hisense?", a: "Pada julat harganya, ketahanannya munasabah. Kuncinya ialah menyelenggaranya mengikut jadual, kerana jenama bajet kurang memaafkan servis yang dilangkau berbanding unit Jepun premium." }
    ],
    zh: [
      { q: "海信是好的经济型选择吗？", a: "海信以更低的价格提供有竞争力的功能。WiFi 控制、变频技术和合理的做工，使它成为注重成本的安装项目的可行选项。" },
      { q: "海信与美的、格力相比如何？", a: "三者在性价比区间竞争，可靠性和功能相近。最终选择往往取决于安装师傅备货哪个品牌，以及哪个型号最匹配你的房间面积。" },
      { q: "吉隆坡可以维修海信空调吗？", a: "可以。海信在马来西亚的服务网络正在扩大，药水清洗、冷媒检查等常规保养，任何合格的空调技师都能完成。" },
      { q: "需要担心海信的长期可靠性吗？", a: "以它的价位，可靠性是合理的。关键在于按时保养，因为经济型品牌比高端日本机型更经不起跳过保养。" }
    ]
  },
  "brands:aux-aircon-service-malaysia": {
    ms: [
      { q: "Adakah AUX jenama penyaman udara yang dikenali di Malaysia?", a: "AUX ialah pengeluar besar dari China dengan kehadiran yang semakin berkembang di Asia Tenggara. Walaupun kurang dikenali berbanding Daikin atau Panasonic di sini, ia bersaing agresif dari segi harga dalam segmen nilai." },
      { q: "Bolehkah penyaman udara AUX menghadapi cuaca panas Malaysia?", a: "Unit AUX dinilai untuk suhu persekitaran tropika dan berprestasi memadai dalam keadaan Malaysia. Ia mungkin tidak menandingi jenama premium pada prestasi haba melampau, tetapi penyejukannya berkesan." },
      { q: "Adakah alat ganti AUX tersedia?", a: "Alat ganti servis lazim boleh didapati melalui rangkaian pengedaran Malaysia, walaupun komponen elektronik khusus jenama mungkin mengambil masa lebih lama untuk ditempah berbanding jenama Jepun yang sudah mantap." },
      { q: "Adakah AUX sesuai dipertimbangkan untuk hartanah sewa?", a: "Bagi unit sewa di mana penyaman udara ialah kos dan bukan faktor jualan, AUX menawarkan harga yang kompetitif dengan ketahanan yang munasabah — satu pilihan bajet yang praktikal." }
    ],
    zh: [
      { q: "AUX 在马来西亚是知名空调品牌吗？", a: "AUX 是中国大型制造商，在东南亚的存在感正不断提升。虽然在本地知名度不及大金或松下，但它在性价比区间以价格积极竞争。" },
      { q: "AUX 空调能应付马来西亚的酷热吗？", a: "AUX 机型按热带环温标定，在马来西亚环境下表现尚可。极端高温性能可能比不上高端品牌，但制冷效果没有问题。" },
      { q: "AUX 配件有供应吗？", a: "常用维修配件可通过马来西亚的分销网络买到，但品牌专用电子元件的订货时间，可能比成熟的日本品牌更长。" },
      { q: "出租房适合考虑 AUX 吗？", a: "对出租单位来说，空调是成本项而非卖点，AUX 价格有竞争力、可靠性也合理，是务实的经济之选。" }
    ]
  },
  "brands:tcl-aircon-service-malaysia": {
    ms: [
      { q: "Adakah TCL mengeluarkan penyaman udara yang baik?", a: "Julat penyaman udara TCL bersaing dalam segmen nilai dengan mutu binaan yang munasabah dan ciri yang kompetitif. Ia pilihan praktikal untuk bilik kedua dan pemasangan bajet." },
      { q: "Bolehkah penyaman udara TCL disambungkan ke sistem rumah pintar?", a: "Model baharu TCL dilengkapi ciri WiFi dan kawalan melalui aplikasi. Pemasangan kami termasuk persediaan ini, dan kami mengesahkan sambungannya sebelum unit diserahkan." },
      { q: "Bagaimanakah TCL berbanding jenama bajet lain?", a: "TCL bersaing dengan Midea, Gree dan AUX dari segi harga dan ciri. Tahap ketahanan dalam segmen nilai secara umumnya serupa, dan kekerapan servis lebih menentukan berbanding jenama." },
      { q: "Adakah servis penyaman udara TCL tersedia di KL?", a: "Ya. Servis penyaman udara piawai terpakai kepada unit TCL, dan pasukan kami mengendalikan basuhan kimia, semakan gas serta pembaikan asas bagi julat kediaman TCL." }
    ],
    zh: [
      { q: "TCL 空调做得好吗？", a: "TCL 空调系列在性价比区间竞争，做工合理、功能有竞争力，是次要房间和预算型安装的务实选择。" },
      { q: "TCL 空调能接入智能家居吗？", a: "TCL 较新型号具备 WiFi 和 App 控制功能。我们的安装包含设置，并在交付前验证连接是否正常。" },
      { q: "TCL 与其它经济型品牌相比如何？", a: "TCL 与美的、格力、AUX 在价格和功能上互相竞争。性价比区间内的可靠性大致相当，保养频率比品牌更重要。" },
      { q: "吉隆坡提供 TCL 空调维修吗？", a: "提供。TCL 机组适用标准空调保养，我们的团队可处理 TCL 家用系列的药水清洗、冷媒检查和基础维修。" }
    ]
  },
  "brands:isonic-aircon-service-malaysia": {
    ms: [
      { q: "Adakah Isonic jenama penyaman udara Malaysia?", a: "Isonic diedarkan dalam pasaran Malaysia pada julat harga yang kompetitif. Ia menyasarkan pemilik rumah yang mementingkan bajet serta pemasangan hartanah sewa, di mana harga jenama premium sukar dibenarkan." },
      { q: "Mudahkah penyaman udara Isonic dibaiki?", a: "Bahagian mekanikal piawai mudah didapati, dan servis asas — basuhan kimia, semakan gas, cucian penapis — sama sahaja seperti jenama lain." },
      { q: "Sejauh manakah ketahanan Isonic berbanding jenama utama?", a: "Pada julat harga nilainya, tahap ketahanannya munasabah. Kunci kepada jangka hayat yang panjang ialah servis berkala, yang lebih penting bagi jenama bajet berbanding jenama premium." },
      { q: "Patutkah saya memilih Isonic atau jenama Jepun?", a: "Untuk hartanah sewa atau bilik yang digunakan beberapa jam sehari, Isonic lebih masuk akal dari segi kewangan. Bagi bilik tidur utama yang beroperasi lebih 8 jam sehari, kecekapan dan ketahanan inverter Jepun akan kembali menjimatkan kosnya." }
    ],
    zh: [
      { q: "Isonic 是马来西亚空调品牌吗？", a: "Isonic 在马来西亚市场以有竞争力的价位分销，主要面向注重预算的业主和出租房安装，这类场合确实难以承担高端品牌的价格。" },
      { q: "Isonic 空调容易修吗？", a: "标准机械配件供应充足，基础保养，如药水清洗、冷媒检查、清洗滤网，与其它品牌没有区别。" },
      { q: "Isonic 与大品牌相比可靠性如何？", a: "以它的价位，可靠性是合理的。延长寿命的关键是定期保养，这对经济型品牌比高端品牌更重要。" },
      { q: "该选 Isonic 还是日本品牌？", a: "出租房或每天只开几个小时的房间，选 Isonic 更划算。若是每天运行 8 小时以上的主卧，日本变频机的能效和耐用性会逐步回本。" }
    ]
  }

};
