export type LegalLocale = "en" | "ms" | "zh";
export type LegalSection = { heading: string; paragraphs?: string[]; items?: string[] };
export type LegalDocument = {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  sections: LegalSection[];
};

export const privacyContent: Record<LegalLocale, LegalDocument> = {
  en: {
    eyebrow: "Legal & privacy",
    title: "Privacy Notice",
    summary: "This notice explains how Multicore Dynamics Resources, trading as KL Servis Rumah, handles personal data when you browse this website, request a quote or arrange a home service.",
    updated: "Last updated: 16 August 2026",
    sections: [
      {
        heading: "1. Who is responsible for your data",
        paragraphs: ["The data user is Multicore Dynamics Resources (202503227236 / 003765188-T), trading as KL Servis Rumah. You can contact us at info@klservisrumah.my, +60 11-1662 7349, or Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Malaysia."]
      },
      {
        heading: "2. Data we may collect",
        items: [
          "Contact details and messages you provide by WhatsApp, telephone, email or a quote request.",
          "Service information such as the property area, address or pin, preferred timing, issue description, measurements, photographs and videos that you choose to share.",
          "Booking, quotation, invoice, payment and service-history records needed to handle an enquiry or perform agreed work.",
          "Technical records needed for security and reliability, including IP address, browser/device details, requested pages, timestamps, error reports and basic server logs.",
          "With your consent, Google Analytics data about pages viewed, traffic source, approximate location, device type and lead actions such as WhatsApp, call, email and quote-request clicks."
        ]
      },
      {
        heading: "3. Why we use personal data",
        items: [
          "To answer enquiries, assess the requested scope, prepare or confirm a quote, schedule work and communicate about a booking.",
          "To provide the agreed service, maintain transaction records, respond to complaints and administer any written warranty that applies to the accepted scope.",
          "To secure, diagnose and improve the website and understand which pages or lead journeys are useful when analytics consent has been given.",
          "To comply with accounting, tax, legal, regulatory or dispute-resolution obligations and prevent misuse or fraud."
        ]
      },
      {
        heading: "4. When data is shared",
        paragraphs: ["We do not sell personal data. We may share only what is reasonably needed with assigned technicians or service partners, website hosting and security providers, professional advisers, payment or communications providers, and public authorities where required by law."],
        items: [
          "WhatsApp is operated by Meta. Messages, files and account details sent through WhatsApp are also handled under Meta/WhatsApp's own terms and privacy notice, and may be processed outside Malaysia.",
          "If you accept analytics, Google Analytics processes measurement data as our analytics provider. We disable Google signals and advertising-personalisation signals in the website configuration.",
          "Some technology providers may process data in other countries. We take reasonable steps to use providers with appropriate contractual and security safeguards."
        ]
      },
      {
        heading: "5. Cookies, local storage and analytics choice",
        paragraphs: ["Essential browser storage may remember your language, analytics choice and necessary site functionality. Optional Google Analytics does not load until you select “Accept analytics”. Selecting “Essential only” keeps it off. You can reopen Cookie settings in the footer and change your choice at any time; withdrawing consent does not affect earlier lawful processing."]
      },
      {
        heading: "6. Retention and security",
        paragraphs: ["We keep personal data only for as long as reasonably needed for the enquiry or service, warranty and dispute handling, security, and applicable legal, tax or accounting requirements. Retention differs by record type. We use reasonable administrative and technical safeguards, but no internet transmission or storage system can be guaranteed completely secure."]
      },
      {
        heading: "7. Your choices and rights",
        paragraphs: ["Subject to the Personal Data Protection Act 2010 and applicable exceptions, you may ask to access or correct your personal data, withdraw consent, limit certain processing, or ask a question about our handling of your data. Contact info@klservisrumah.my. We may need to verify your identity before completing a request."]
      },
      {
        heading: "8. External links, children and updates",
        paragraphs: ["This website links to third-party services whose privacy practices we do not control. Our services are intended for adults arranging property work, not children. We may update this notice when practices or legal requirements change; the date above identifies the current version."]
      }
    ]
  },
  ms: {
    eyebrow: "Undang-undang & privasi",
    title: "Notis Privasi",
    summary: "Notis ini menerangkan cara Multicore Dynamics Resources, yang beroperasi sebagai KL Servis Rumah, mengendalikan data peribadi apabila anda melayari laman ini, meminta sebut harga atau mengatur perkhidmatan rumah.",
    updated: "Dikemas kini: 16 Ogos 2026",
    sections: [
      { heading: "1. Pihak yang bertanggungjawab", paragraphs: ["Pengguna data ialah Multicore Dynamics Resources (202503227236 / 003765188-T), yang beroperasi sebagai KL Servis Rumah. Hubungi kami melalui info@klservisrumah.my, +60 11-1662 7349 atau Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Malaysia."] },
      { heading: "2. Data yang mungkin kami kumpulkan", items: [
        "Maklumat hubungan dan mesej yang anda beri melalui WhatsApp, telefon, e-mel atau permintaan sebut harga.",
        "Butiran kerja seperti kawasan hartanah, alamat atau pin lokasi, masa pilihan, penerangan masalah, ukuran, foto dan video yang anda pilih untuk dikongsi.",
        "Rekod tempahan, sebut harga, invois, pembayaran dan sejarah kerja yang perlu untuk mengurus pertanyaan atau kerja dipersetujui.",
        "Rekod teknikal untuk keselamatan dan kebolehpercayaan, termasuk alamat IP, butiran pelayar/peranti, halaman diminta, masa, laporan ralat dan log pelayan asas.",
        "Dengan persetujuan anda, data Google Analytics tentang halaman dilihat, sumber trafik, lokasi anggaran, jenis peranti dan tindakan prospek seperti klik WhatsApp, panggilan, e-mel dan permintaan sebut harga."
      ] },
      { heading: "3. Tujuan penggunaan", items: [
        "Menjawab pertanyaan, menilai skop, menyediakan atau mengesahkan sebut harga, menjadualkan kerja dan berhubung tentang tempahan.",
        "Melaksanakan kerja dipersetujui, menyimpan rekod transaksi, menangani aduan dan mentadbir waranti bertulis yang terpakai pada skop diterima.",
        "Melindungi, mendiagnosis dan menambah baik laman serta memahami perjalanan prospek apabila persetujuan analitik diberi.",
        "Mematuhi keperluan perakaunan, cukai, undang-undang, kawal selia atau penyelesaian pertikaian serta mencegah penyalahgunaan."
      ] },
      { heading: "4. Perkongsian data", paragraphs: ["Kami tidak menjual data peribadi. Kami hanya boleh berkongsi maklumat yang munasabah diperlukan dengan juruteknik atau rakan perkhidmatan ditugaskan, penyedia hosting dan keselamatan, penasihat profesional, penyedia pembayaran atau komunikasi, dan pihak berkuasa jika diwajibkan undang-undang."], items: [
        "WhatsApp dikendalikan oleh Meta. Mesej, fail dan butiran akaun yang dihantar melalui WhatsApp turut tertakluk pada terma dan notis privasi Meta/WhatsApp serta mungkin diproses di luar Malaysia.",
        "Jika anda menerima analitik, Google Analytics memproses data ukuran sebagai penyedia analitik kami. Isyarat Google dan isyarat pemperibadian iklan dimatikan dalam konfigurasi laman.",
        "Sesetengah penyedia teknologi mungkin memproses data di negara lain. Kami mengambil langkah munasabah untuk memilih perlindungan kontrak dan keselamatan yang sesuai."
      ] },
      { heading: "5. Kuki, storan setempat dan pilihan analitik", paragraphs: ["Storan pelayar penting boleh mengingati bahasa, pilihan analitik dan fungsi laman yang perlu. Google Analytics tidak dimuatkan sehingga anda memilih “Terima analitik”. “Penting sahaja” mengekalkannya dalam keadaan mati. Anda boleh membuka semula Tetapan kuki di bahagian bawah laman dan mengubah pilihan pada bila-bila masa."] },
      { heading: "6. Tempoh simpanan dan keselamatan", paragraphs: ["Kami menyimpan data hanya selama munasabah diperlukan untuk pertanyaan atau kerja, waranti dan pertikaian, keselamatan serta keperluan undang-undang, cukai atau perakaunan. Tempohnya berbeza mengikut jenis rekod. Kami menggunakan perlindungan pentadbiran dan teknikal yang munasabah, namun tiada penghantaran internet atau sistem storan boleh dijamin selamat sepenuhnya."] },
      { heading: "7. Pilihan dan hak anda", paragraphs: ["Tertakluk pada Akta Perlindungan Data Peribadi 2010 dan pengecualian berkenaan, anda boleh meminta akses atau pembetulan, menarik balik persetujuan, mengehadkan pemprosesan tertentu atau bertanya tentang data anda. E-mel info@klservisrumah.my. Kami mungkin perlu mengesahkan identiti anda."] },
      { heading: "8. Pautan luar, kanak-kanak dan pindaan", paragraphs: ["Laman ini memaut ke perkhidmatan pihak ketiga yang mempunyai amalan privasi sendiri. Perkhidmatan kami ditujukan kepada orang dewasa yang mengatur kerja hartanah, bukan kanak-kanak. Tarikh di atas menunjukkan versi semasa notis ini."] }
    ]
  },
  zh: {
    eyebrow: "法律与隐私",
    title: "隐私声明",
    summary: "本声明说明 Multicore Dynamics Resources（以 KL Servis Rumah 名义运营）在您浏览网站、询价或安排家居服务时如何处理个人资料。",
    updated: "最后更新：2026 年 8 月 16 日",
    sections: [
      { heading: "1. 资料使用者", paragraphs: ["资料使用者为 Multicore Dynamics Resources（202503227236 / 003765188-T），以 KL Servis Rumah 名义运营。您可通过 info@klservisrumah.my、+60 11-1662 7349，或 Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Malaysia 联系我们。"] },
      { heading: "2. 我们可能收集的资料", items: [
        "您通过 WhatsApp、电话、电邮或询价申请提供的联系资料及信息。",
        "服务资料，例如房产所在区域、地址或定位、期望时间、问题说明，以及您选择提供的尺寸、照片和视频。",
        "处理咨询或履行约定工程所需的预约、报价、账单、付款和服务记录。",
        "网站安全与稳定所需的技术记录，包括 IP 地址、浏览器/设备信息、访问页面、时间、错误报告和基本服务器日志。",
        "在您同意后，Google Analytics 可能记录浏览页面、流量来源、大致位置、设备类型，以及 WhatsApp、电话、电邮和询价点击等咨询行为。"
      ] },
      { heading: "3. 使用目的", items: [
        "回复咨询、评估工程范围、准备或确认报价、安排工作并就预约与您联系。",
        "履行约定服务、保存交易记录、处理投诉，以及管理适用于已接受工程范围的书面保修。",
        "保障、诊断及改善网站，并在获得分析同意后了解哪些页面和咨询流程较有帮助。",
        "遵守会计、税务、法律、监管或争议处理要求，并防止滥用或欺诈。"
      ] },
      { heading: "4. 资料共享", paragraphs: ["我们不会出售个人资料。我们仅在合理必要时，将相关资料提供给获指派的技术人员或服务伙伴、网站托管和安全供应商、专业顾问、付款或通讯服务商，以及依法提出要求的公共机构。"], items: [
        "WhatsApp 由 Meta 运营。经 WhatsApp 发送的信息、文件及账户资料也受 Meta/WhatsApp 自身条款和隐私声明约束，并可能在马来西亚境外处理。",
        "若您接受分析，Google Analytics 会作为分析供应商处理测量资料。网站配置已关闭 Google signals 和广告个性化信号。",
        "部分技术供应商可能在其他国家处理资料。我们会采取合理步骤，选用具备适当合约和安全保障的供应商。"
      ] },
      { heading: "5. Cookie、本地存储与分析选择", paragraphs: ["必要的浏览器存储可记住语言、分析选择和网站必需功能。只有您选择“接受分析”后，Google Analytics 才会加载；选择“仅必要功能”则维持关闭。您可随时从页脚重新打开 Cookie 设置并更改选择。"] },
      { heading: "6. 保存期限与安全", paragraphs: ["资料只会在处理咨询或服务、保修和争议、安全，以及适用法律、税务或会计要求所需的合理期限内保存；不同记录的期限可能不同。我们采用合理的管理及技术保障，但任何网络传输或存储系统都无法保证绝对安全。"] },
      { heading: "7. 您的选择与权利", paragraphs: ["在《2010 年个人资料保护法》及适用例外的约束下，您可要求查阅或更正个人资料、撤回同意、限制某些处理，或查询我们如何处理资料。请电邮 info@klservisrumah.my；处理请求前，我们可能需要核实身份。"] },
      { heading: "8. 外部链接、儿童与更新", paragraphs: ["网站会链接至拥有各自隐私做法的第三方服务。我们的服务面向安排房产工程的成年人，并非面向儿童。我们可能因业务或法律要求更新本声明；上方日期表示当前版本。"] }
    ]
  }
};

export const termsContent: Record<LegalLocale, LegalDocument> = {
  en: {
    eyebrow: "Legal & booking",
    title: "Website & Service Terms",
    summary: "These terms govern use of this website and enquiries made to KL Servis Rumah. A specific service is governed by the written quotation or other scope you accept.",
    updated: "Last updated: 16 August 2026",
    sections: [
      { heading: "1. Operator and acceptance", paragraphs: ["This website is operated by Multicore Dynamics Resources (202503227236 / 003765188-T), trading as KL Servis Rumah. By using the website, you agree to these website terms. If you do not agree, please do not use it."] },
      { heading: "2. Website information and estimates", paragraphs: ["Guides, published rates, calculators and automated estimates are general planning information, not a final quotation, diagnosis or promise that a particular method suits your property. Actual price, duration and method can change after the details, access, measurements, materials and site condition are checked. Safety-critical electrical, structural, gas or other regulated work may require an appropriately qualified person or further assessment."] },
      { heading: "3. Enquiries, bookings and contract formation", paragraphs: ["Sending a form, WhatsApp message, photo or calculator result is an enquiry; it does not by itself create a confirmed booking or contract. A booking is confirmed only when we accept the request and the parties agree the scope, price or pricing basis, timing and any relevant conditions in writing. If a written quotation conflicts with these general terms, the quotation governs that service to the extent of the conflict."] },
      { heading: "4. Scope, price and changes", items: [
        "The accepted quotation should identify the included work and any assumptions or exclusions. Published ‘from’ prices apply only to their stated minimum or standard scope.",
        "Hidden damage, inaccurate customer information, inaccessible areas, building-management requirements or additional requested work may require a revised quotation. We will seek approval before carrying out chargeable variations.",
        "Payment amount, stages, method and due date follow the accepted written quotation or invoice."
      ] },
      { heading: "5. Customer responsibilities", items: [
        "Provide accurate details, disclose known hazards and obtain owner, landlord, management, neighbour or authority approvals where required.",
        "Provide safe and reasonable access, electricity/water where agreed, and protect or remove valuables and personal items from the work area.",
        "Do not enter an active work zone or interfere with tools, temporary barriers or safety controls. Keep children and pets away from the work area.",
        "Inspect completed work within a reasonable time and report a concern promptly with enough detail for assessment."
      ] },
      { heading: "6. Scheduling, access and cancellation", paragraphs: ["Arrival and completion times are estimates and may be affected by traffic, weather, material availability, building access, emergencies or site discoveries. Any cancellation, rescheduling, call-out or material charge must follow the accepted quotation or be clearly agreed before it is charged. If access is unavailable at an agreed appointment, reasonable committed costs may still apply where disclosed and lawful."] },
      { heading: "7. Warranties and third-party products", paragraphs: ["A warranty applies only when it is stated in the accepted written quotation and is subject to its scope, duration, exclusions and care requirements. Unless the written terms say otherwise, it does not cover unrelated defects, misuse, normal wear, movement, new leaks, customer-supplied products, third-party alterations or a cause outside the completed scope. Manufacturer warranties for products remain subject to the manufacturer's terms."] },
      { heading: "8. Website, calculators and third-party links", paragraphs: ["You may use the website for lawful personal or business planning. Do not disrupt, scrape at harmful volume, bypass security, misuse the calculators or copy protected site content for republication. Links to WhatsApp, Google, social media and other websites are provided for convenience; those services have their own terms."] },
      { heading: "9. Liability and legal rights", paragraphs: ["To the extent permitted by Malaysian law, neither party is liable for indirect or consequential loss that was not reasonably foreseeable from the agreed service. Nothing in these terms excludes liability that cannot lawfully be excluded, or limits statutory consumer rights. Each party remains responsible for loss caused by its negligence, breach or unlawful conduct, subject to applicable law and the accepted service agreement."] },
      { heading: "10. Governing law, contact and changes", paragraphs: ["These terms are governed by the laws of Malaysia, and disputes are subject to the courts with jurisdiction in Malaysia. Questions may be sent to info@klservisrumah.my. We may update the website terms prospectively; the date above identifies the version displayed when you use the site."] }
    ]
  },
  ms: {
    eyebrow: "Undang-undang & tempahan",
    title: "Terma Laman & Perkhidmatan",
    summary: "Terma ini mengawal penggunaan laman dan pertanyaan kepada KL Servis Rumah. Setiap kerja khusus tertakluk pada sebut harga bertulis atau skop lain yang anda terima.",
    updated: "Dikemas kini: 16 Ogos 2026",
    sections: [
      { heading: "1. Pengendali dan penerimaan", paragraphs: ["Laman ini dikendalikan oleh Multicore Dynamics Resources (202503227236 / 003765188-T), yang beroperasi sebagai KL Servis Rumah. Dengan menggunakan laman ini, anda bersetuju dengan terma laman ini."] },
      { heading: "2. Maklumat dan anggaran", paragraphs: ["Panduan, kadar diterbitkan, kalkulator dan anggaran automatik ialah maklumat perancangan umum—bukan sebut harga akhir, diagnosis atau janji bahawa sesuatu kaedah sesuai untuk hartanah anda. Harga, tempoh dan kaedah sebenar boleh berubah selepas butiran, akses, ukuran, bahan dan keadaan tapak diperiksa. Kerja elektrik, struktur atau kerja terkawal yang kritikal mungkin memerlukan orang berkelayakan atau penilaian lanjut."] },
      { heading: "3. Pertanyaan, tempahan dan kontrak", paragraphs: ["Menghantar borang, mesej WhatsApp, foto atau keputusan kalkulator hanyalah pertanyaan; ia tidak dengan sendirinya mengesahkan tempahan atau kontrak. Tempahan disahkan apabila kami menerima permintaan dan kedua-dua pihak bersetuju secara bertulis tentang skop, harga atau asas harga, masa dan syarat berkaitan. Jika sebut harga bertulis bercanggah dengan terma umum ini, sebut harga mengawal kerja tersebut setakat percanggahan."] },
      { heading: "4. Skop, harga dan perubahan", items: ["Sebut harga diterima hendaklah mengenal pasti kerja termasuk serta andaian atau pengecualian. Harga ‘dari’ hanya terpakai pada skop minimum atau standard yang dinyatakan.", "Kerosakan tersembunyi, maklumat tidak tepat, akses terhad, syarat pengurusan bangunan atau kerja tambahan mungkin memerlukan sebut harga pindaan. Kelulusan akan diminta sebelum variasi berbayar dibuat.", "Amaun, peringkat, kaedah dan tarikh pembayaran mengikut sebut harga atau invois bertulis yang diterima."] },
      { heading: "5. Tanggungjawab pelanggan", items: ["Beri maklumat tepat, maklumkan bahaya diketahui dan dapatkan kelulusan pemilik, tuan rumah, pengurusan, jiran atau pihak berkuasa jika perlu.", "Sediakan akses yang selamat dan munasabah serta alihkan barang berharga dari kawasan kerja.", "Jangan memasuki zon kerja aktif atau mengganggu alat dan kawalan keselamatan. Jauhkan kanak-kanak dan haiwan peliharaan.", "Periksa kerja siap dalam masa munasabah dan laporkan kebimbangan dengan segera serta maklumat mencukupi."] },
      { heading: "6. Jadual, akses dan pembatalan", paragraphs: ["Masa ketibaan dan siap ialah anggaran serta boleh dipengaruhi trafik, cuaca, bahan, akses bangunan, kecemasan atau penemuan tapak. Caj pembatalan, penjadualan semula, kunjungan atau bahan hanya terpakai mengikut sebut harga diterima atau persetujuan jelas sebelum caj."] },
      { heading: "7. Waranti dan produk pihak ketiga", paragraphs: ["Waranti hanya terpakai jika dinyatakan dalam sebut harga bertulis diterima dan tertakluk pada skop, tempoh, pengecualian serta penjagaan yang dinyatakan. Melainkan terma bertulis berkata sebaliknya, ia tidak meliputi kecacatan tidak berkaitan, salah guna, haus biasa, pergerakan, kebocoran baharu, produk dibekal pelanggan, perubahan pihak ketiga atau punca di luar skop siap."] },
      { heading: "8. Penggunaan laman dan pautan pihak ketiga", paragraphs: ["Gunakan laman untuk tujuan perancangan yang sah. Jangan ganggu sistem, memintas keselamatan, menyalahgunakan kalkulator atau menerbitkan semula kandungan dilindungi. WhatsApp, Google, media sosial dan laman lain mempunyai terma mereka sendiri."] },
      { heading: "9. Liabiliti dan hak undang-undang", paragraphs: ["Setakat dibenarkan undang-undang Malaysia, tiada pihak bertanggungjawab atas kerugian tidak langsung yang tidak munasabah dijangka daripada kerja dipersetujui. Tiada apa-apa di sini mengecualikan liabiliti yang tidak boleh dikecualikan atau mengehadkan hak pengguna berkanun."] },
      { heading: "10. Undang-undang, hubungan dan pindaan", paragraphs: ["Terma ini ditadbir undang-undang Malaysia dan pertikaian tertakluk pada mahkamah berbidang kuasa di Malaysia. Soalan boleh dihantar ke info@klservisrumah.my. Tarikh di atas menunjukkan versi semasa."] }
    ]
  },
  zh: {
    eyebrow: "法律与预约",
    title: "网站与服务条款",
    summary: "本条款适用于 KL Servis Rumah 网站及咨询。具体服务以您接受的书面报价或其他约定工程范围为准。",
    updated: "最后更新：2026 年 8 月 16 日",
    sections: [
      { heading: "1. 运营方与接受条款", paragraphs: ["本网站由 Multicore Dynamics Resources（202503227236 / 003765188-T）以 KL Servis Rumah 名义运营。使用网站即表示您同意本网站条款；如不同意，请停止使用。"] },
      { heading: "2. 网站资料与估价", paragraphs: ["指南、公开费率、计算器和自动估价仅供一般规划，并非最终报价、诊断或某种方法一定适合您房产的承诺。核实详情、出入条件、尺寸、材料和现场状况后，实际价格、工期和方法可能改变。涉及安全的重要电气、结构或其他受监管工程，可能需要合资格人员或进一步评估。"] },
      { heading: "3. 咨询、预约与合同成立", paragraphs: ["提交表单、WhatsApp 信息、照片或计算结果仅构成咨询，不会自动形成已确认预约或合同。只有我们接受请求，且双方以书面方式同意工程范围、价格或计价基础、时间及相关条件后，预约才获确认。书面报价与本一般条款冲突时，该项服务以报价为准。"] },
      { heading: "4. 范围、价格与变更", items: ["获接受的报价应列明包括的工作、假设和排除项目；“起”价只适用于所述最低或标准范围。", "隐藏损坏、客户资料不准确、区域无法进入、物业管理要求或新增工程，可能需要修改报价。收费变更会在施工前征求同意。", "付款金额、阶段、方式和到期日以获接受的书面报价或账单为准。"] },
      { heading: "5. 客户责任", items: ["提供准确资料，披露已知危险，并在需要时取得业主、房东、物业管理、邻居或主管机构的批准。", "提供安全合理的施工通道，并移走或保护工作区内的贵重和个人物品。", "请勿进入正在施工的区域或干扰工具、安全围挡及控制措施；儿童和宠物应远离工作区。", "在合理时间内检查完工项目，并尽快提供足够资料报告问题。"] },
      { heading: "6. 时间、通道与取消", paragraphs: ["到场和完工时间均为估计，可能受交通、天气、材料供应、楼宇通道、紧急情况或现场发现影响。取消、改期、上门或材料费用只会按获接受报价执行，或在收费前另行明确同意。"] },
      { heading: "7. 保修与第三方产品", paragraphs: ["保修只在获接受的书面报价明确列出时适用，并受其范围、期限、排除事项和保养要求约束。除非书面条款另有说明，保修不包括无关缺陷、误用、正常损耗、结构移动、新漏点、客户自备产品、第三方改动或已完工范围以外的原因。"] },
      { heading: "8. 网站使用与第三方链接", paragraphs: ["您可将网站用于合法的个人或商业规划。不得干扰系统、绕过安全措施、滥用计算器或擅自转载受保护内容。WhatsApp、Google、社交媒体及其他外部网站适用各自条款。"] },
      { heading: "9. 责任与法定权利", paragraphs: ["在马来西亚法律允许范围内，任何一方均不对约定服务无法合理预见的间接或后果性损失承担责任。本条款不排除依法不得排除的责任，也不限制法定消费者权利。"] },
      { heading: "10. 适用法律、联系与更新", paragraphs: ["本条款受马来西亚法律管辖，争议由马来西亚具有管辖权的法院处理。如有问题，请电邮 info@klservisrumah.my。上方日期表示当前版本。"] }
    ]
  }
};
