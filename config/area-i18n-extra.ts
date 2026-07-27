import type { LocalizedAreaContent } from "./area-i18n";
import type { Locale } from "@/lib/i18n";

/**
 * MS + ZH content for the 31 coverage areas that were not covered by the
 * original `areaI18n` map (which only held the 6 headline areas).
 *
 * Each area carries its own hand-written housing profile and its own
 * area-specific question, because a Mont Kiara high-rise owner and a Rawang
 * landed-house owner do not have the same problem. The two remaining FAQs and
 * the surrounding sentences are composed from per-locale templates so the
 * wording stays consistent across all 31 pages without 31× duplication.
 *
 * Chinese place names are only supplied where the rendering is well
 * established in Malaysian Chinese media. Anything uncertain stays canonical,
 * matching the decision already taken for the 49 suburb pages.
 */

type AreaProfile = {
  /** Canonical area name, matching `areaPages[].name`. */
  name: string;
  /** Well-established Chinese rendering, omitted when uncertain. */
  zhName?: string;
  /** One sentence describing the housing stock — written per area. */
  housing: { ms: string; zh: string };
  /** The maintenance issue this area actually calls us about. */
  focus: { ms: string; zh: string };
  /** The one question this area asks that others do not. */
  localQuestion: {
    ms: { q: string; a: string };
    zh: { q: string; a: string };
  };
};

const PROFILES: Record<string, AreaProfile> = {
  cheras: {
    name: "Cheras",
    zhName: "蕉赖",
    housing: {
      ms: "Cheras menggabungkan taman perumahan teres matang seperti Taman Connaught dan Alam Damai dengan kondominium baharu di sekitar Sunway Velocity dan MyTown.",
      zh: "蕉赖既有 Taman Connaught、Alam Damai 等成熟排屋区，也有 Sunway Velocity 与 MyTown 一带的新建公寓。"
    },
    focus: {
      ms: "rumah teres berusia 30 tahun ke atas di sini kerap memerlukan pembaikan retak dinding, rawatan lembap dan penggantian paip galvani lama",
      zh: "这里屋龄 30 年以上的排屋，最常见的需求是墙面裂缝修补、潮湿处理，以及更换老旧镀锌水管"
    },
    localQuestion: {
      ms: {
        q: "Rumah teres lama saya di Cheras ada dinding lembap dan cat mengelupas. Bolehkah anda baiki?",
        a: "Boleh. Kami mengesan punca lembap dahulu — biasanya paip bocor, kalis air bumbung yang gagal atau lembap naik dari lantai — kemudian merawat sumbernya sebelum menampal, mengecat semula dan memberi jaminan kerja."
      },
      zh: {
        q: "我在蕉赖的老排屋墙壁潮湿、油漆脱落，你们能处理吗？",
        a: "可以。我们会先找出潮湿源头——通常是漏水管、屋顶防水失效或地面返潮——处理源头后再进行批灰、重新粉刷，并提供施工保修。"
      }
    }
  },
  ampang: {
    name: "Ampang",
    zhName: "安邦",
    housing: {
      ms: "Ampang merangkumi banglo mewah di Ampang Hilir dan Taman TAR, kondominium bukit di Bukit Antarabangsa, serta teres pertengahan pasaran di Ukay Perdana.",
      zh: "安邦涵盖 Ampang Hilir 与 Taman TAR 的豪华洋房、Bukit Antarabangsa 的山坡公寓，以及 Ukay Perdana 的中价排屋。"
    },
    focus: {
      ms: "rumah di lereng bukit di sini lebih terdedah kepada air bertakung dan kebocoran bumbung selepas hujan lebat",
      zh: "这里的山坡住宅在大雨后更容易出现积水与屋顶漏水"
    },
    localQuestion: {
      ms: {
        q: "Rumah saya di Bukit Antarabangsa bocor setiap kali hujan lebat. Apa yang anda periksa?",
        a: "Kami memeriksa genting yang beralih, kepingan kalis air (flashing) yang retak, longkang bumbung tersumbat dan sambungan dinding parapet. Selepas punca dikenal pasti, kami membaiki dan menguji semula dengan simulasi hujan."
      },
      zh: {
        q: "我在 Bukit Antarabangsa 的家一下大雨就漏水，你们会检查哪些地方？",
        a: "我们会检查移位的屋瓦、开裂的泛水板、堵塞的屋顶排水沟以及女儿墙接缝。确认源头后进行维修，并以淋水测试复检。"
      }
    }
  },
  kajang: {
    name: "Kajang",
    zhName: "加影",
    housing: {
      ms: "Kajang, Semenyih dan Bandar Baru Bangi berkembang pesat di sepanjang koridor MRT, dengan banyak rumah strata yang baru diserahkan dan banglo di Country Heights.",
      zh: "加影、士毛月与万宜新镇沿 MRT 走廊快速发展，拥有大量刚交屋的分层住宅与 Country Heights 的洋房。"
    },
    focus: {
      ms: "unit yang baru diserahkan di sini biasanya perlukan kerja pengubahsuaian awal — mengecat, siling plaster, kabinet dan pemasangan lekapan",
      zh: "这里刚交屋的单位通常需要入伙前的装修——粉刷、石膏天花板、橱柜与各类固定安装"
    },
    localQuestion: {
      ms: {
        q: "Saya baru terima kunci rumah di Kajang. Bolehkah anda siapkan sebelum saya berpindah?",
        a: "Boleh. Pakej sebelum berpindah kami biasanya menggabungkan mengecat seluruh unit, siling plaster, pemasangan lampu dan kipas, serta pemasangan lekapan — dijadualkan supaya semua kerja habis sebelum tarikh anda berpindah."
      },
      zh: {
        q: "我刚拿到加影新家的钥匙，能在入伙前完成装修吗？",
        a: "可以。我们的入伙前配套通常包含全屋粉刷、石膏天花板、灯具与风扇安装以及各项固定安装，并会安排在您搬入日期前全部完工。"
      }
    }
  },
  "mont-kiara": {
    name: "Mont Kiara",
    zhName: "满家乐",
    housing: {
      ms: "Mont Kiara ialah salah satu kelompok kondominium mewah paling padat di Kuala Lumpur, dengan peraturan JMB yang ketat dan tempoh tempahan lif yang terhad.",
      zh: "满家乐是吉隆坡最密集的豪华公寓区之一，物业管理规定严格，电梯预订时段有限。"
    },
    focus: {
      ms: "kerja di sini mesti kemas dan senyap — kami menempah lif, melindungi koridor bersama dan bekerja dalam waktu yang dibenarkan pengurusan",
      zh: "这里的施工必须整洁且低噪音——我们会预订电梯、保护公共走廊，并在管理层允许的时段内作业"
    },
    localQuestion: {
      ms: {
        q: "Pengurusan kondo Mont Kiara saya perlukan dokumen sebelum kontraktor masuk. Anda boleh sediakan?",
        a: "Ya. Kami menyediakan borang kerja pengubahsuaian, senarai pekerja, salinan insurans liabiliti dan tempahan lif untuk diserahkan kepada pengurusan sebelum tarikh kerja."
      },
      zh: {
        q: "我满家乐公寓的管理层要求承包商入场前提交文件，你们能配合吗？",
        a: "可以。我们会准备装修申请表、施工人员名单、责任保险副本以及电梯预订，在施工日前提交给管理处。"
      }
    }
  },
  bangsar: {
    name: "Bangsar",
    zhName: "孟沙",
    housing: {
      ms: "Bangsar mempunyai gabungan banglo lama di Lucky Garden, teres bertingkat di sekitar Telawi, dan kondominium moden di Bangsar South serta Pantai Hillpark.",
      zh: "孟沙拥有 Lucky Garden 的老洋房、Telawi 一带的多层排屋，以及 Bangsar South 与 Pantai Hillpark 的现代公寓。"
    },
    focus: {
      ms: "hartanah lama di sini kerap perlu pendawaian semula, rawatan retak struktur dan mengecat semula dengan salutan kalis cuaca",
      zh: "这里的老房产常需要重新布线、结构裂缝处理，以及使用耐候涂料重新粉刷"
    },
    localQuestion: {
      ms: {
        q: "Rumah saya di Bangsar berusia lebih 40 tahun. Adakah kerja pembaikan lebih mahal?",
        a: "Tidak semestinya, tetapi rumah lama biasanya memerlukan lebih banyak kerja penyediaan — mengikis cat lama, membaiki plaster dan merawat lembap. Kami mengesahkan skop penuh selepas lawatan tapak percuma supaya tiada kos tambahan mengejut."
      },
      zh: {
        q: "我在孟沙的房子屋龄超过 40 年，维修会更贵吗？",
        a: "不一定，但老房子通常需要更多前置工序——铲除旧漆、修补批灰与处理潮湿。我们会在免费上门勘查后确认完整工程范围，避免任何意外加价。"
      }
    }
  },
  damansara: {
    name: "Damansara",
    zhName: "白沙罗",
    housing: {
      ms: "Kawasan Damansara meliputi Damansara Utama, TTDI, Damansara Perdana dan Damansara Heights — daripada teres matang sehingga kondominium premium.",
      zh: "白沙罗一带涵盖 Damansara Utama、TTDI、Damansara Perdana 与 Damansara Heights，从成熟排屋到高端公寓都有。"
    },
    focus: {
      ms: "permintaan di sini tertumpu pada mengecat berkualiti tinggi, siling plaster berlapis dan naik taraf kabinet dapur",
      zh: "这里的需求集中在高品质粉刷、多层石膏天花板与厨柜升级"
    },
    localQuestion: {
      ms: {
        q: "Bolehkah anda mengecat rumah TTDI saya tanpa mengganggu jiran?",
        a: "Boleh. Kami menggunakan cat rendah bau atau tanpa bau, melindungi kawasan laluan bersama, dan menjadualkan kerja bising pada waktu siang sahaja."
      },
      zh: {
        q: "你们能在不打扰邻居的情况下粉刷我 TTDI 的房子吗？",
        a: "可以。我们使用低气味或无气味涂料，保护公共通道，并将产生噪音的工序安排在白天进行。"
      }
    }
  },
  kepong: {
    name: "Kepong",
    zhName: "甲洞",
    housing: {
      ms: "Kepong meliputi Kepong Baru, Bandar Menjalara, Taman Ehsan dan Metro Prima — kebanyakannya rumah teres dan pangsapuri kos sederhana yang matang.",
      zh: "甲洞涵盖 Kepong Baru、Bandar Menjalara、Taman Ehsan 与 Metro Prima，多为成熟的排屋与中价组屋。"
    },
    focus: {
      ms: "rumah teres di sini kerap menghadapi siling bocor dari tingkat atas, longkang tersumbat dan pagar berkarat",
      zh: "这里的排屋常见楼上渗漏导致的天花板漏水、排水管堵塞与铁门生锈"
    },
    localQuestion: {
      ms: {
        q: "Siling dapur saya di Kepong ada kesan air. Perlu ganti seluruh siling?",
        a: "Selalunya tidak. Jika rangka masih kukuh, kami hanya menanggalkan papan yang rosak, membaiki punca kebocoran, memasang papan baharu dan mengecat semula supaya sambungan tidak kelihatan."
      },
      zh: {
        q: "我甲洞家的厨房天花板有水渍，需要整块更换吗？",
        a: "通常不需要。如果龙骨仍然稳固，我们只拆除受损板材、修复漏水源头、装上新板并重新粉刷，接缝处理到看不出痕迹。"
      }
    }
  },
  setapak: {
    name: "Setapak",
    zhName: "文良港",
    housing: {
      ms: "Setapak merangkumi Taman Melati, Danau Kota, Sri Rampai dan koridor Genting Klang, dengan banyak pangsapuri sewaan pelajar dan teres keluarga.",
      zh: "文良港涵盖 Taman Melati、Danau Kota、Sri Rampai 与 Genting Klang 走廊，有大量学生出租公寓与家庭排屋。"
    },
    focus: {
      ms: "pemilik hartanah sewa di sini kerap memerlukan kerja pembaikan pantas antara penyewa",
      zh: "这里的出租房东经常需要在租客交接期间快速完成维修"
    },
    localQuestion: {
      ms: {
        q: "Saya perlu baiki dan cat semula unit sewa di Setapak dalam masa seminggu. Boleh?",
        a: "Boleh. Untuk unit sewa kosong kami biasanya menyiapkan tampalan dinding, cat semula sepenuhnya dan pembaikan kecil paip serta elektrik dalam 3 hingga 5 hari bekerja."
      },
      zh: {
        q: "我在文良港的出租单位需要在一周内修好并重新粉刷，可以吗？",
        a: "可以。对于空置的出租单位，我们通常在 3 至 5 个工作日内完成墙面修补、全屋重新粉刷以及水电小维修。"
      }
    }
  },
  "sri-petaling": {
    name: "Sri Petaling",
    housing: {
      ms: "Sri Petaling bersambung dengan Bukit Jalil, Happy Garden dan Taman OUG, menggabungkan lot kedai, teres dan kondominium baharu.",
      zh: "Sri Petaling 与武吉加里尔、Happy Garden 和 Taman OUG 相连，混合了店屋、排屋与新建公寓。"
    },
    focus: {
      ms: "lot kedai di sini kerap memerlukan kerja luar waktu perniagaan supaya operasi tidak terganggu",
      zh: "这里的店屋常需要在营业时间外施工，以免影响生意"
    },
    localQuestion: {
      ms: {
        q: "Bolehkah anda mengecat lot kedai saya di Sri Petaling selepas waktu tutup?",
        a: "Boleh. Kami menjadualkan kerja komersial pada waktu malam atau hujung minggu supaya premis anda boleh dibuka seperti biasa keesokan harinya."
      },
      zh: {
        q: "你们能在打烊后粉刷我在 Sri Petaling 的店屋吗？",
        a: "可以。我们会把商业工程安排在夜间或周末进行，让您隔天照常营业。"
      }
    }
  },
  "kota-damansara": {
    name: "Kota Damansara",
    zhName: "哥打白沙罗",
    housing: {
      ms: "Kota Damansara menggabungkan kondominium PJU 5 di sekitar The Strand dan Sunway Nexis dengan rumah teres dan semi-D di Tropicana.",
      zh: "哥打白沙罗融合了 The Strand 与 Sunway Nexis 一带 PJU 5 的公寓，以及 Tropicana 的排屋与半独立式洋房。"
    },
    focus: {
      ms: "unit strata di sini paling kerap meminta pembaikan kebocoran bilik air dan suntikan PU untuk kebocoran papak",
      zh: "这里的分层住宅最常要求浴室漏水维修与楼板渗漏的 PU 灌浆"
    },
    localQuestion: {
      ms: {
        q: "Unit bawah saya di Kota Damansara mengadu bocor dari bilik air saya. Apa penyelesaiannya?",
        a: "Kami menjalankan ujian takungan air untuk mengesahkan puncanya, kemudian membaiki dengan suntikan PU tanpa memecah lantai jika boleh, atau kalis air penuh dengan hacking jika kerosakan lebih teruk."
      },
      zh: {
        q: "楼下住户投诉我哥打白沙罗单位的浴室漏水，该怎么解决？",
        a: "我们会先做蓄水测试确认源头，若情况允许则以 PU 灌浆免拆砖维修；若损坏较严重，则进行拆砖重做完整防水。"
      }
    }
  },
  "ara-damansara": {
    name: "Ara Damansara",
    zhName: "阿拉白沙罗",
    housing: {
      ms: "Ara Damansara mempunyai kondominium moden di sekitar Citta Mall dan Oasis, serta rumah teres berdekatan sempadan Subang Jaya.",
      zh: "阿拉白沙罗拥有 Citta Mall 与 Oasis 一带的现代公寓，以及靠近梳邦再也边界的排屋。"
    },
    focus: {
      ms: "kebanyakan permintaan di sini ialah mengecat semula unit dan naik taraf dalaman untuk pemilik yang baru berpindah",
      zh: "这里的需求多为新住户的单位重新粉刷与室内升级"
    },
    localQuestion: {
      ms: {
        q: "Berapa lama masa diperlukan untuk mengecat kondo 3 bilik di Ara Damansara?",
        a: "Unit 3 bilik biasanya mengambil 2 hingga 3 hari bekerja termasuk penyediaan permukaan, dua lapisan cat dan masa pengeringan. Kami mengesahkan jadual sebenar selepas melihat keadaan dinding anda."
      },
      zh: {
        q: "粉刷阿拉白沙罗一间三房公寓需要多久？",
        a: "三房单位通常需要 2 至 3 个工作日，包含表面处理、两道面漆与干燥时间。我们会在查看墙面状况后确认实际排期。"
      }
    }
  },
  sunway: {
    name: "Sunway",
    zhName: "双威",
    housing: {
      ms: "Bandar Sunway menggabungkan kondominium pelajar dan keluarga di sekitar Sunway Pyramid, Sunway Geo dan South Quay.",
      zh: "双威镇融合了 Sunway Pyramid、Sunway Geo 与 South Quay 一带的学生与家庭公寓。"
    },
    focus: {
      ms: "unit sewa di sini kerap memerlukan penyelenggaraan berkala dan pembaikan pantas antara semester",
      zh: "这里的出租单位常需要定期保养与学期之间的快速维修"
    },
    localQuestion: {
      ms: {
        q: "Saya menyewakan beberapa unit di Sunway. Ada pakej penyelenggaraan berkala?",
        a: "Ada. Kami boleh menjadualkan lawatan penyelenggaraan berkala yang meliputi pemeriksaan paip, elektrik, penyaman udara dan pembaikan kecil, dengan satu sebut harga untuk semua unit anda."
      },
      zh: {
        q: "我在双威出租多个单位，有定期保养配套吗？",
        a: "有的。我们可安排定期上门保养，涵盖水管、电力、冷气检查与小型维修，并为您名下所有单位提供统一报价。"
      }
    }
  },
  usj: {
    name: "USJ",
    housing: {
      ms: "USJ meliputi Taipan, USJ 21, SS15 dan One City — kebanyakannya rumah teres matang dan pangsapuri servis.",
      zh: "USJ 涵盖 Taipan、USJ 21、SS15 与 One City，多为成熟排屋与服务式公寓。"
    },
    focus: {
      ms: "teres berusia 25 tahun ke atas di sini kerap perlukan pembaikan bumbung, penggantian paip dan kerja kalis air",
      zh: "这里屋龄 25 年以上的排屋常需要屋顶维修、水管更换与防水工程"
    },
    localQuestion: {
      ms: {
        q: "Rumah teres saya di USJ ada kebocoran bumbung berulang. Boleh diselesaikan sekali gus?",
        a: "Boleh. Kebocoran berulang biasanya bermakna punca sebenar belum dijumpai. Kami memeriksa keseluruhan bumbung — genting, ridge, flashing dan longkang — dan membaiki semuanya sekali gus dengan jaminan bertulis."
      },
      zh: {
        q: "我 USJ 排屋的屋顶反复漏水，能一次解决吗？",
        a: "可以。反复漏水通常代表真正的源头还没找到。我们会全面检查屋顶——瓦片、屋脊、泛水板与排水沟——一次性修复，并提供书面保修。"
      }
    }
  },
  putrajaya: {
    name: "Putrajaya",
    zhName: "布城",
    housing: {
      ms: "Putrajaya terdiri daripada perumahan presint kerajaan yang terancang, kondominium dan teres moden di Presint 8, 11 dan 16.",
      zh: "布城由规划完善的政府分区住宅组成，在第 8、11 与 16 区拥有现代公寓与排屋。"
    },
    focus: {
      ms: "rumah di sini biasanya memerlukan mengecat semula, kerja siling dan naik taraf dapur berbanding pembaikan struktur",
      zh: "这里的住宅通常需要的是重新粉刷、天花板工程与厨房升级，而非结构性维修"
    },
    localQuestion: {
      ms: {
        q: "Adakah anda benar-benar datang ke Putrajaya, atau hanya ke KL?",
        a: "Kami benar-benar berkhidmat di Putrajaya dan Cyberjaya. Slot biasanya dijadualkan sehari lebih awal berbanding kawasan tengah KL supaya juruteknik tiba pada waktu yang dijanjikan."
      },
      zh: {
        q: "你们真的会到布城施工，还是只服务吉隆坡？",
        a: "我们确实服务布城与赛城。相比吉隆坡市中心，这里的档期通常需要提前一天安排，以确保技师准时抵达。"
      }
    }
  },
  cyberjaya: {
    name: "Cyberjaya",
    zhName: "赛城",
    housing: {
      ms: "Cyberjaya mempunyai kondominium baharu di sekitar Shaftsbury dan DPulze, serta rumah keluarga di Symphony Hills dan Garden Residence.",
      zh: "赛城拥有 Shaftsbury 与 DPulze 一带的新建公寓，以及 Symphony Hills 与 Garden Residence 的家庭住宅。"
    },
    focus: {
      ms: "kebanyakan unit di sini masih baharu, jadi permintaan tertumpu pada pemasangan, kabinet dan kerja kemasan",
      zh: "这里的单位大多还很新，需求集中在各类安装、橱柜与收尾工程"
    },
    localQuestion: {
      ms: {
        q: "Unit Cyberjaya saya baharu tetapi ada kecacatan kemasan. Anda boleh baiki?",
        a: "Boleh. Kami kerap membaiki kecacatan penyerahan — dinding tidak rata, sambungan siling terbuka, pintu tidak sejajar dan kemasan cat yang tidak sekata — sama ada sebelum atau selepas tempoh kecacatan pemaju."
      },
      zh: {
        q: "我赛城的单位是新的，但有收尾瑕疵，你们能修吗？",
        a: "可以。我们经常处理交屋瑕疵——墙面不平、天花板接缝开裂、门扇不对齐与油漆不均——无论是在发展商缺陷保修期内或之后都可处理。"
      }
    }
  },
  "wangsa-maju": {
    name: "Wangsa Maju",
    zhName: "旺沙玛珠",
    housing: {
      ms: "Wangsa Maju meliputi Wangsa Walk, Sri Rampai dan Taman Melati, dengan gabungan pangsapuri matang dan pembangunan KL East yang baharu.",
      zh: "旺沙玛珠涵盖 Wangsa Walk、Sri Rampai 与 Taman Melati，兼有成熟组屋与 KL East 的新发展项目。"
    },
    focus: {
      ms: "pangsapuri lama di sini kerap memerlukan pembaikan paip tersumbat, siling lembap dan pendawaian yang usang",
      zh: "这里的老组屋常需要处理水管堵塞、天花板受潮与老化线路"
    },
    localQuestion: {
      ms: {
        q: "Paip singki saya di Wangsa Maju tersumbat berulang kali. Kenapa?",
        a: "Sumbatan berulang biasanya bermakna minyak dan sisa telah mengeras jauh di dalam paip utama, bukan hanya di perangkap. Kami membersihkan keseluruhan larian paip dengan jetting dan memeriksa kecerunan paip."
      },
      zh: {
        q: "我在旺沙玛珠的洗碗槽反复堵塞，是什么原因？",
        a: "反复堵塞通常代表油脂与残渣已在主管深处结硬，而不只是存水弯的问题。我们会用高压水射清洗整段管路，并检查管道坡度。"
      }
    }
  },
  "bukit-jalil": {
    name: "Bukit Jalil",
    zhName: "武吉加里尔",
    housing: {
      ms: "Bukit Jalil mempunyai kondominium premium di sekitar Pavilion Bukit Jalil dan Aurora Place, serta rumah keluarga berhampiran taman rekreasi.",
      zh: "武吉加里尔拥有 Pavilion Bukit Jalil 与 Aurora Place 一带的高端公寓，以及邻近休闲公园的家庭住宅。"
    },
    focus: {
      ms: "unit premium di sini paling kerap meminta kerja kemasan berkualiti tinggi — siling berlapis, pencahayaan tersembunyi dan kabinet dibina khas",
      zh: "这里的高端单位最常要求高品质收尾工程——多层天花板、隐藏式灯槽与订制橱柜"
    },
    localQuestion: {
      ms: {
        q: "Bolehkah anda pasang siling L-box dengan lampu tersembunyi di kondo Bukit Jalil saya?",
        a: "Boleh. Siling L-box berlapis dengan trough LED tersembunyi ialah kerja biasa bagi kami. Kami mengesahkan kedudukan pendawaian dan ketinggian siling dahulu supaya reka bentuk muat sempurna."
      },
      zh: {
        q: "你们能在我武吉加里尔的公寓做带隐藏灯槽的 L-box 天花板吗？",
        a: "可以。带隐藏 LED 灯槽的多层 L-box 天花板是我们的常规工程。我们会先确认布线位置与楼层净高，确保设计能完美落位。"
      }
    }
  },
  "desa-parkcity": {
    name: "Desa ParkCity",
    housing: {
      ms: "Desa ParkCity ialah pembangunan terancang dengan rumah keluarga di Westside dan South Brooks serta kondominium di sekitar The Waterfront.",
      zh: "Desa ParkCity 是规划型社区，拥有 Westside 与 South Brooks 的家庭住宅，以及 The Waterfront 一带的公寓。"
    },
    focus: {
      ms: "peraturan komuniti di sini ketat, jadi kerja mesti kemas, senyap dan mengikut garis panduan pengurusan",
      zh: "这里的社区规定严格，施工必须整洁、低噪音并遵守管理指南"
    },
    localQuestion: {
      ms: {
        q: "Desa ParkCity ada garis panduan pengubahsuaian yang ketat. Anda biasa dengannya?",
        a: "Ya. Kami menghantar permohonan kerja kepada pengurusan terlebih dahulu, mematuhi waktu kerja yang dibenarkan, melindungi laluan bersama dan membersihkan tapak setiap hari sebelum pulang."
      },
      zh: {
        q: "Desa ParkCity 的装修规定很严格，你们熟悉吗？",
        a: "熟悉。我们会事先向管理处提交施工申请、遵守允许的作业时段、保护公共通道，并在每天收工前清理现场。"
      }
    }
  },
  "taman-melawati": {
    name: "Taman Melawati",
    housing: {
      ms: "Taman Melawati terletak berhampiran Melawati Mall dan Bukit Tabur, dengan rumah teres dan semi-D matang serta pembangunan KL East yang baharu.",
      zh: "Taman Melawati 邻近 Melawati Mall 与 Bukit Tabur，拥有成熟的排屋、半独立式洋房与 KL East 的新项目。"
    },
    focus: {
      ms: "rumah berhampiran bukit di sini lebih terdedah kepada lembap dinding dan kulat pada musim hujan",
      zh: "这里靠近山区的住宅在雨季更容易出现墙体潮湿与霉斑"
    },
    localQuestion: {
      ms: {
        q: "Dinding rumah saya di Melawati berkulat setiap musim hujan. Cat sahaja cukup?",
        a: "Tidak. Mengecat di atas kulat hanya menyembunyikannya buat sementara. Kami membasuh dengan larutan fungisid, merawat punca lembap, kemudian menggunakan primer anti-kulat sebelum cat akhir."
      },
      zh: {
        q: "我 Melawati 家的墙每逢雨季就长霉，单纯粉刷够吗？",
        a: "不够。直接盖漆只能暂时遮住霉斑。我们会先用杀菌剂清洗、处理潮湿源头，再涂上防霉底漆，最后才上面漆。"
      }
    }
  },
  "bandar-utama": {
    name: "Bandar Utama",
    zhName: "万达镇",
    housing: {
      ms: "Bandar Utama merangkumi BU 1 hingga BU 12 di sekitar 1 Utama, dengan rumah teres dan semi-D matang serta kondominium berhampiran stesen MRT.",
      zh: "万达镇涵盖 1 Utama 周边的 BU 1 至 BU 12，拥有成熟的排屋、半独立式洋房与邻近 MRT 站的公寓。"
    },
    focus: {
      ms: "rumah matang di sini kerap memerlukan naik taraf dapur, mengecat semula dan penggantian siling",
      zh: "这里的成熟住宅常需要厨房升级、重新粉刷与天花板更换"
    },
    localQuestion: {
      ms: {
        q: "Kabinet dapur saya di Bandar Utama masih kukuh tetapi nampak lama. Perlu ganti?",
        a: "Belum tentu. Jika struktur kabinet masih baik, penyemburan semula pintu dan penggantian hardware biasanya memberi hasil seperti baharu pada kos yang jauh lebih rendah daripada kabinet baharu."
      },
      zh: {
        q: "我万达镇家的厨柜结构还好，但看起来很旧，一定要换吗？",
        a: "不一定。如果柜体结构仍然良好，重新喷漆柜门并更换五金件，通常就能达到焕然一新的效果，成本远低于整套换新。"
      }
    }
  },
  ss2: {
    name: "SS2",
    housing: {
      ms: "SS2 ialah kawasan PJ yang matang di sekitar medan selera terkenalnya, bersempadan dengan Sea Park, Damansara Jaya dan Kelana Jaya.",
      zh: "SS2 是八打灵再也的成熟社区，围绕著名的美食中心，与 Sea Park、Damansara Jaya 及 Kelana Jaya 相邻。"
    },
    focus: {
      ms: "rumah teres berusia 40 tahun di sini kerap perlukan pendawaian semula, penggantian paip dan pembaikan bumbung",
      zh: "这里屋龄 40 年的排屋常需要重新布线、更换水管与屋顶维修"
    },
    localQuestion: {
      ms: {
        q: "Rumah SS2 saya masih guna paip besi lama. Berbaloikah menggantinya?",
        a: "Berbaloi jika anda sudah mengalami air berkarat, tekanan rendah atau kebocoran berulang. Kami menggantikan larian paip lama dengan PPR atau PVC-u bertauliah SIRIM dan menguji tekanan sebelum menutup semula dinding."
      },
      zh: {
        q: "我 SS2 的房子还在用旧铁管，值得更换吗？",
        a: "如果已经出现水质发黄、水压偏低或反复漏水，就值得更换。我们会以 SIRIM 认证的 PPR 或 PVC-u 管替换旧管路，并在封墙前完成压力测试。"
      }
    }
  },
  "setia-alam": {
    name: "Setia Alam",
    housing: {
      ms: "Setia Alam ialah bandar terancang dengan rumah teres dan semi-D moden di sekitar Setia City Mall, Eco Ardence dan Alam Nusantara.",
      zh: "Setia Alam 是规划型新镇，在 Setia City Mall、Eco Ardence 与 Alam Nusantara 一带拥有现代排屋与半独立式洋房。"
    },
    focus: {
      ms: "rumah agak baharu di sini biasanya perlukan kerja pengubahsuaian pilihan — dapur basah, pagar, awning dan siling",
      zh: "这里较新的住宅通常需要选配式装修——湿厨房、铁门、遮阳棚与天花板"
    },
    localQuestion: {
      ms: {
        q: "Saya mahu tambah dapur basah dan awning di rumah Setia Alam saya. Anda buat kerja ini?",
        a: "Ya. Kami mengendalikan lanjutan dapur basah, awning polycarbonate atau metal deck, dan kerja besi berkaitan — termasuk memastikan reka bentuk mematuhi garis panduan pemaju dan majlis tempatan."
      },
      zh: {
        q: "我想在 Setia Alam 的家加建湿厨房和遮阳棚，你们做吗？",
        a: "做的。我们承接湿厨房扩建、聚碳酸酯或金属瓦遮阳棚以及相关铁工，并会确保设计符合发展商与地方政府的规定。"
      }
    }
  },
  "kota-kemuning": {
    name: "Kota Kemuning",
    housing: {
      ms: "Kota Kemuning meliputi Kota Permai, Bukit Rimau dan Canal Gardens, dengan rumah teres, semi-D dan banglo berhampiran sempadan Shah Alam.",
      zh: "哥打哥文宁涵盖 Kota Permai、Bukit Rimau 与 Canal Gardens，在莎阿南边界一带拥有排屋、半独立式洋房与独立洋房。"
    },
    focus: {
      ms: "rumah berhampiran kawasan berair di sini lebih kerap menghadapi lembap naik dan karat pada besi luaran",
      zh: "这里靠近水域的住宅更常出现地面返潮与户外铁件生锈"
    },
    localQuestion: {
      ms: {
        q: "Pagar dan grill rumah saya di Kota Kemuning cepat berkarat. Ada penyelesaian tahan lama?",
        a: "Ada. Kami mengikis karat sehingga ke logam bersih, menyapu primer anti-karat dua lapisan, kemudian cat kemasan luaran. Ini bertahan jauh lebih lama daripada mengecat terus di atas karat."
      },
      zh: {
        q: "我哥打哥文宁家的铁门和防盗网很快生锈，有耐久的解决办法吗？",
        a: "有的。我们会打磨除锈至露出干净金属，涂两道防锈底漆，再上户外面漆。这比直接在锈面上刷漆耐久得多。"
      }
    }
  },
  "batu-caves": {
    name: "Batu Caves",
    zhName: "黑风洞",
    housing: {
      ms: "Batu Caves meliputi Taman Sri Gombak dan kawasan Gombak sekitarnya, dengan rumah teres matang dan pangsapuri kos sederhana.",
      zh: "黑风洞涵盖 Taman Sri Gombak 与周边鹅唛地区，以成熟排屋与中价组屋为主。"
    },
    focus: {
      ms: "rumah di sini kerap memerlukan pembaikan bumbung, kalis air dan rawatan dinding lembap",
      zh: "这里的住宅常需要屋顶维修、防水与潮湿墙面处理"
    },
    localQuestion: {
      ms: {
        q: "Adakah anda menghantar juruteknik ke Batu Caves pada hari yang sama?",
        a: "Untuk kes kecemasan seperti paip pecah atau bumbung bocor teruk, ya. Untuk kerja terancang seperti mengecat, slot biasanya tersedia dalam 1 hingga 3 hari bekerja."
      },
      zh: {
        q: "你们能当天派技师到黑风洞吗？",
        a: "紧急情况如爆管或严重漏水，可以当天派工。像粉刷这类计划性工程，档期通常在 1 至 3 个工作日内安排。"
      }
    }
  },
  selayang: {
    name: "Selayang",
    zhName: "士拉央",
    housing: {
      ms: "Selayang merangkumi Taman Selayang dan koridor menuju Rawang, dengan rumah teres, kedai dan pangsapuri kos sederhana.",
      zh: "士拉央涵盖 Taman Selayang 与通往万挠的走廊，拥有排屋、店屋与中价组屋。"
    },
    focus: {
      ms: "hartanah di sini kerap memerlukan pembaikan paip, kerja bumbung dan mengecat semula selepas bertahun-tahun terdedah cuaca",
      zh: "这里的房产常需要水管维修、屋顶工程，以及长年风吹日晒后的重新粉刷"
    },
    localQuestion: {
      ms: {
        q: "Berapa harga mengecat luar rumah teres di Selayang?",
        a: "Mengecat luaran dikira mengikut kaki persegi dan bergantung pada ketinggian akses serta keadaan permukaan. Gunakan kalkulator kos mengecat percuma di laman ini untuk anggaran serta-merta pada kadar tersiar kami."
      },
      zh: {
        q: "在士拉央粉刷排屋外墙要多少钱？",
        a: "外墙粉刷按平方英尺计价，取决于施工高度与墙面状况。您可使用本站的免费油漆费用计算器，按我们公布的价目即时获得估价。"
      }
    }
  },
  rawang: {
    name: "Rawang",
    zhName: "万挠",
    housing: {
      ms: "Rawang meliputi Anggun City, Emerald Rawang, Kundang dan pekan Rawang, dengan rumah teres dan banglo yang lebih luas.",
      zh: "万挠涵盖 Anggun City、Emerald Rawang、Kundang 与万挠市区，住宅以较宽敞的排屋与独立洋房为主。"
    },
    focus: {
      ms: "rumah bertanah lebih luas di sini bermakna lebih banyak kerja luaran — pagar, awning, dinding sempadan dan bumbung",
      zh: "这里地段较大的住宅意味着更多户外工程——铁门、遮阳棚、围墙与屋顶"
    },
    localQuestion: {
      ms: {
        q: "Rawang agak jauh. Adakah anda mengenakan caj perjalanan?",
        a: "Kami memberi perkhidmatan penuh di Rawang. Kerja bersaiz normal tidak dikenakan caj perjalanan tambahan; hanya lawatan kecemasan luar waktu yang mempunyai caj panggilan yang dinyatakan awal."
      },
      zh: {
        q: "万挠距离较远，你们会收车马费吗？",
        a: "我们在万挠提供完整服务。一般规模的工程不额外收取车马费；只有非营业时间的紧急出勤才会有事先说明的出勤费。"
      }
    }
  },
  "sungai-buloh": {
    name: "Sungai Buloh",
    zhName: "双溪毛糯",
    housing: {
      ms: "Sungai Buloh merangkumi Bukit Rahman Putra, Damansara Damai dan Subang Bestari, dengan gabungan teres, semi-D dan pangsapuri berhampiran MRT.",
      zh: "双溪毛糯涵盖 Bukit Rahman Putra、Damansara Damai 与 Subang Bestari，混合了排屋、半独立式洋房与 MRT 沿线公寓。"
    },
    focus: {
      ms: "permintaan di sini terbahagi antara pengubahsuaian rumah baharu dan pembaikan rumah matang",
      zh: "这里的需求分为新屋装修与成熟住宅维修两大类"
    },
    localQuestion: {
      ms: {
        q: "Bolehkah anda uruskan kerja mengecat dan paip sekali gus di Sungai Buloh?",
        a: "Boleh. Menggabungkan beberapa jenis kerja dalam satu jadual biasanya menjimatkan masa dan kos berbanding menempah kontraktor berasingan. Kami menyediakan satu sebut harga terperinci untuk keseluruhan skop."
      },
      zh: {
        q: "你们能在双溪毛糯同时承接粉刷和水管工程吗？",
        a: "可以。把多项工程合并在同一档期，通常比分别找不同承包商更省时省钱。我们会为整体范围提供一份逐项报价。"
      }
    }
  },
  semenyih: {
    name: "Semenyih",
    zhName: "士毛月",
    housing: {
      ms: "Semenyih berkembang pesat dengan Eco Majestic, Setia EcoHill dan pekan Semenyih, kebanyakannya rumah keluarga yang baharu diserahkan.",
      zh: "士毛月发展迅速，涵盖 Eco Majestic、Setia EcoHill 与士毛月市区，多为刚交屋的家庭住宅。"
    },
    focus: {
      ms: "unit baharu di sini paling kerap memerlukan pakej mengecat, siling dan pemasangan sebelum berpindah",
      zh: "这里的新单位最常需要入伙前的粉刷、天花板与安装配套"
    },
    localQuestion: {
      ms: {
        q: "Rumah baharu saya di Semenyih masih kosong. Berapa awal patut saya tempah?",
        a: "Tempah 1 hingga 2 minggu lebih awal untuk pakej sebelum berpindah. Itu memberi kami masa untuk lawatan tapak, mengesahkan skop dan menyiapkan semua kerja sebelum tarikh anda berpindah."
      },
      zh: {
        q: "我士毛月的新家还空着，应该提前多久预约？",
        a: "入伙前配套建议提前 1 至 2 周预约。这样我们有时间上门勘查、确认范围，并在您搬入日期前完成所有工程。"
      }
    }
  },
  "seri-kembangan": {
    name: "Seri Kembangan",
    housing: {
      ms: "Seri Kembangan meliputi The Mines, Equine Park, kawasan UPM dan sempadan Balakong, dengan teres, kedai dan pangsapuri.",
      zh: "Seri Kembangan 涵盖 The Mines、Equine Park、博特拉大学一带与无拉港边界，拥有排屋、店屋与公寓。"
    },
    focus: {
      ms: "gabungan hartanah kediaman dan komersial di sini bermakna banyak kerja penyelenggaraan berjadual",
      zh: "这里住宅与商业物业并存，因此有大量计划性保养需求"
    },
    localQuestion: {
      ms: {
        q: "Saya menguruskan beberapa unit sewa di Seri Kembangan. Boleh satu sebut harga untuk semua?",
        a: "Boleh. Kami menyediakan satu sebut harga terperinci merangkumi semua unit, dengan jadual lawatan yang disusun supaya penyewa anda paling kurang terganggu."
      },
      zh: {
        q: "我在 Seri Kembangan 管理多个出租单位，能出一份统一报价吗？",
        a: "可以。我们会提供一份涵盖所有单位的逐项报价，并安排上门时间表，把对租客的影响降到最低。"
      }
    }
  },
  "pandan-indah": {
    name: "Pandan Indah",
    housing: {
      ms: "Pandan Indah dan Pandan Jaya ialah kawasan matang berhampiran sempadan Ampang dan Maluri, dengan pangsapuri dan rumah teres.",
      zh: "Pandan Indah 与 Pandan Jaya 是靠近安邦与马鲁里边界的成熟社区，以组屋与排屋为主。"
    },
    focus: {
      ms: "pangsapuri lama di sini kerap memerlukan pembaikan kebocoran, siling dan penyelenggaraan paip",
      zh: "这里的老组屋常需要漏水维修、天花板修补与水管保养"
    },
    localQuestion: {
      ms: {
        q: "Pangsapuri saya di Pandan Indah bocor dari unit atas. Siapa patut bayar?",
        a: "Biasanya pemilik unit atas bertanggungjawab jika puncanya di dalam unit mereka. Kami boleh menjalankan ujian dan menyediakan laporan bertulis dengan foto, yang selalunya cukup untuk pihak pengurusan menyelesaikan perkara ini."
      },
      zh: {
        q: "我 Pandan Indah 的组屋被楼上渗水，应该由谁承担费用？",
        a: "如果源头在楼上单位内部，通常由楼上业主负责。我们可进行检测并出具带照片的书面报告，这份报告通常足以让管理处协调处理。"
      }
    }
  },
  sentul: {
    name: "Sentul",
    zhName: "沈都",
    housing: {
      ms: "Sentul menggabungkan pembangunan baharu di Sentul East dan Sentul West dengan kedai lama serta teres matang di sepanjang Jalan Ipoh.",
      zh: "沈都既有 Sentul East 与 Sentul West 的新发展项目，也有怡保路沿线的老店屋与成熟排屋。"
    },
    focus: {
      ms: "hartanah lama di sini kerap memerlukan pendawaian semula, pembaikan struktur ringan dan mengecat semula sepenuhnya",
      zh: "这里的老房产常需要重新布线、轻度结构修补与全面重新粉刷"
    },
    localQuestion: {
      ms: {
        q: "Kedai lama saya di Sentul perlu diubah suai. Anda boleh uruskan keseluruhannya?",
        a: "Boleh. Untuk lot kedai lama kami biasanya menggabungkan kerja elektrik, paip, siling, partition dan mengecat dalam satu jadual, dengan satu sebut harga dan satu orang yang anda hubungi."
      },
      zh: {
        q: "我沈都的老店屋需要翻新，你们能承接整体工程吗？",
        a: "可以。老店屋翻新我们通常把电力、水管、天花板、隔间与粉刷整合到同一档期，提供一份报价与一位对接窗口。"
      }
    }
  }
};

/** Per-locale sentences shared by every area, composed around the profile. */
const FRAME: Record<Exclude<Locale, "en">, {
  intro: (name: string) => string;
  services: string;
  promise: string;
  metaTitle: (name: string) => string;
  metaDesc: (name: string) => string;
  sharedFaqs: (name: string) => { q: string; a: string }[];
}> = {
  ms: {
    intro: (name) => `KL Servis Rumah menghantar tukang mahir yang disaring latar belakang ke seluruh ${name}.`,
    services:
      "Pasukan kami mengendalikan kerja mengecat dalaman dan luaran, pengesanan serta pembaikan kebocoran paip, pembaikan dan pemasangan siling plaster, kalis air dan suntikan PU, kerja tangan, pemasangan TV serta pemasangan perabot.",
    promise:
      "Setiap sebut harga disahkan pada kadar adil sebelum kerja bermula, tapak dibersihkan sepenuhnya selepas siap, dan kerja kami disertakan jaminan.",
    metaTitle: (name) => `Perkhidmatan Rumah ${name} — Mengecat, Paip & Siling`,
    metaDesc: (name) =>
      `Mengecat, paip, siling plaster, kalis air dan kerja tangan di ${name}. Tukang bertauliah, harga telus, kerja berjaminan. WhatsApp untuk sebut harga percuma.`,
    sharedFaqs: (name) => [
      {
        q: `Berapa lama masa untuk mendapatkan juruteknik di ${name}?`,
        a: `Untuk kecemasan seperti paip pecah atau kebocoran teruk di ${name}, kami menghantar juruteknik terdekat pada hari yang sama. Untuk kerja terancang, slot biasanya tersedia dalam 1 hingga 3 hari bekerja.`
      },
      {
        q: `Adakah harga di ${name} disahkan sebelum kerja bermula?`,
        a: "Ya. Kami memberi sebut harga terperinci pada kadar adil sebelum memulakan kerja. Jika skop bertambah selepas kami melihat keadaan sebenar, kami memaklumkan dan mendapatkan kelulusan anda dahulu."
      }
    ]
  },
  zh: {
    intro: (name) => `KL Servis Rumah 为${name}全区派遣经过背景审查的专业技师。`,
    services:
      "我们的团队承接室内外粉刷、漏水检测与维修、石膏天花板修补与安装、防水与 PU 灌浆、杂工服务、电视挂装以及家具组装。",
    promise: "每一份报价都在开工前按公道价确认，完工后彻底清理现场，所有施工均提供保修。",
    metaTitle: (name) => `${name}住宅服务 — 油漆、水管与天花板`,
    metaDesc: (name) =>
      `${name}的油漆、水管、石膏天花板、防水与杂工服务。持证技师、价格透明、施工保修。欢迎 WhatsApp 免费询价。`,
    sharedFaqs: (name) => [
      {
        q: `在${name}多快能安排到技师？`,
        a: `${name}如遇爆管或严重漏水等紧急情况，我们当天派出最近的技师。计划性工程的档期通常在 1 至 3 个工作日内安排。`
      },
      {
        q: `${name}的价格会在开工前确认吗？`,
        a: "会的。我们在开工前提供公道的逐项报价。若现场查看后需要增加工程范围，我们会先告知并取得您的同意。"
      }
    ]
  }
};

function build(name: string, profile: AreaProfile, locale: Exclude<Locale, "en">): LocalizedAreaContent {
  const frame = FRAME[locale];
  const displayName = locale === "zh" ? (profile.zhName ?? name) : name;
  const joiner = locale === "zh" ? "" : " ";

  return {
    name: locale === "zh" ? profile.zhName : undefined,
    description: [
      frame.intro(displayName),
      profile.housing[locale],
      // The `focus` sentences already scope themselves to the area, so no
      // linking prefix is added — only sentence-casing and terminal punctuation.
      locale === "zh"
        ? `${profile.focus[locale]}。`
        : `${profile.focus[locale].charAt(0).toUpperCase()}${profile.focus[locale].slice(1)}.`,
      frame.services,
      frame.promise
    ].join(joiner),
    metaTitle: frame.metaTitle(displayName),
    metaDesc: frame.metaDesc(displayName),
    faqs: [profile.localQuestion[locale], ...frame.sharedFaqs(displayName)]
  };
}

/** MS + ZH content for every area not already present in `areaI18n`. */
export const areaI18nExtra: Record<
  string,
  Partial<Record<Exclude<Locale, "en">, LocalizedAreaContent>>
> = Object.fromEntries(
  Object.entries(PROFILES).map(([slug, profile]) => [
    slug,
    { ms: build(profile.name, profile, "ms"), zh: build(profile.name, profile, "zh") }
  ])
);
