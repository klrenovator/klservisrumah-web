import type { BlogPost } from "@/config/blog-data";

/** Native, standalone article copies.  Keep this separate from the English
 * registry so a translator can review each locale without touching routing. */
export type BlogLocale = "ms" | "zh";
export type LocalizedBlogPost = Pick<BlogPost, "title" | "excerpt" | "content" | "category" | "metaTitle" | "metaDesc"> & { slug: string };

export const blogI18n: Record<string, Partial<Record<BlogLocale, LocalizedBlogPost>>> = {
  /* ──────────────────────────────────────────────────────────────────────
   * Post 1 — 5 Tips Choosing Paint Colors (already translated in Round 33)
   * ────────────────────────────────────────────────────────────────────── */
  "5-tips-choosing-paint-colors-malaysia": {
    ms: {
      slug: "5-petua-memilih-warna-cat-rumah-malaysia",
      title: "5 Petua Memilih Warna Cat Rumah Moden di Malaysia", category: "Pengecatan",
      excerpt: "Pilih warna cat yang sesuai untuk ruang tamu atau dinding luar dengan mengambil kira cahaya, kelembapan dan kemasan.",
      metaTitle: "5 Petua Memilih Warna Cat Rumah di Malaysia", metaDesc: "Panduan lengkap memilih warna dan kemasan cat yang tahan dalam cuaca Malaysia.",
      content: `Memilih warna cat untuk rumah di Malaysia bukan sekadar memilih sampel dalam buku. Kelembapan tropika, matahari sepanjang tahun dan pencahayaan dalaman menjadikan warna kelihatan serta bertahan berbeza.

Di KL Servis Rumah, pakar cat kami telah menyegarkan ratusan rumah di Kuala Lumpur dan Selangor. Berikut ialah panduan lengkap untuk palet moden yang kekal cantik.

---

### 1. Uji sampel di bawah cahaya semula jadi dan buatan
Warna yang kelihatan baik di kedai berhawa dingin boleh berubah pada dinding ruang tamu. Cahaya tropika yang kuat dan hangat pada waktu petang mengubah rupa warna.

**Petua:** beli tin penguji atau sampel, sapu pada kawasan 1 m × 1 m di dinding sebenar, kemudian lihat pada jam 9 pagi, 2 petang dan 8 malam dengan lampu LED rumah anda.

---

### 2. Pilih kemasan yang boleh dibersihkan
Rumah dengan anak kecil atau haiwan peliharaan memerlukan kemasan yang mudah dicuci. Kemasan yang salah boleh menyebabkan warna cantik menjadi kotor atau tertanggal apabila disental.

* **Matte/rata:** baik untuk menyembunyikan retak siling atau lekuk dinding, tetapi berliang dan menyerap kotoran. Sesuai untuk bilik utama atau siling.
* **EasyClean/satin:** disyorkan untuk ruang tamu, koridor dan bilik kanak-kanak. Produk seperti Nippon Spot-less atau Dulux EasyClean membentuk lapisan tidak berliang supaya kesan pen, sos tomato dan kopi boleh dilap dengan kain lembap.

---

### 3. Utamakan salutan tahan UV untuk dinding luar
Hujan lebat dan panas terik boleh menyebabkan cat luar yang murah pudar, berkapur atau berkulat dalam tempoh 12 bulan.

**Penyelesaian:** gunakan sealer premium dan cat luar tahan cuaca seperti Nippon Weatherbond atau Dulux Weathershield. Salutan elastomeriknya membantu menutup rekahan halus dan pemantul UV membantu mengurangkan haba.

---

### 4. Gunakan warna neutral dan pastel untuk membesarkan ruang
Kondominium tinggi dan rumah teres padat di Klang Valley mendapat manfaat daripada ruang yang terasa lebih luas.

**Trend:** gaya Scandinavia dan Japandi menggunakan putih hangat, kelabu lembut, beige kelabu dan hijau sage pudar. Nada neutral memantulkan cahaya dan menjadikan ruang kecil terasa lebih terang, bersih dan luas.

---

### 5. Jangan abaikan lapisan asas pengedap lembapan
Cat premium pun boleh mengelupas, berbuih atau bersisik jika disapu terus pada plaster mentah atau konkrit lembap.

**Standard teknikal:** kami sentiasa menyapu primer pengedap tahan lembapan terlebih dahulu. Ia membentuk pengedap tahan alkali yang menghalang garam dinding dan lembapan menaik daripada merosakkan lapisan warna.

---

### Perlukan pengecat profesional di KL dan Selangor?
Elakkan garis tidak lurus, percikan pada perabot atau cat yang mengelupas. KL Servis Rumah menyediakan pengecatan rumah dengan harga telus dan jaminan kerja.

* Pengecatan bilik dari RM450
* Jenama premium Nippon Paint dan Dulux
* Perlindungan perabot dengan penutupan kemas

**WhatsApp kami hari ini untuk sebut harga percuma dan semakan slot.**`
    },
    zh: {
      slug: "ma-lai-xi-ya-xuan-ze-jia-ju-you-qi-yan-se-5-ge-ji-qiao", title: "马来西亚现代居家油漆颜色选择的5个技巧", category: "油漆服务",
      excerpt: "从采光、湿度和漆面效果出发，为客厅或外墙选择适合马来西亚天气的油漆颜色。", metaTitle: "马来西亚居家油漆颜色选择：5个技巧", metaDesc: "完整了解如何按光线、天气和耐擦洗性选择马来西亚居家油漆颜色。",
      content: `在马来西亚为家居选择油漆颜色，不只是从色卡中挑选一个样本。热带湿度、全年日晒和室内灯光都会改变颜色呈现和耐久表现。

KL Servis Rumah 的油漆团队已为吉隆坡和雪兰莪数百个住宅翻新墙面。以下是选择持久好看的现代色彩方案的完整指南。

---

### 1. 在自然光与人造光下测试色样
在明亮、冷气充足的店内看起来合适的颜色，刷到客厅墙面后可能完全不同。午后的热带阳光偏暖，会改变颜色观感。

**建议：**购买小罐试色漆或色样，在实际墙面刷出约 1 米 × 1 米的范围；分别在上午 9 点、下午 2 点和晚上 8 点、搭配家中的 LED 灯观察。

---

### 2. 选择容易清洁的漆面
有小孩或宠物的家庭应优先考虑耐擦洗性。选错漆面会让漂亮的颜色沾污，甚至在擦洗时脱落。

* **哑光/平光：**适合遮盖天花裂纹或墙面凹陷，但孔隙较多、易吸附油污；较适合主卧或天花。
* **EasyClean/丝光：**推荐用于客厅、走道和儿童房。Nippon Spot-less 或 Dulux EasyClean 等产品可形成较不易渗透的保护层，湿布可擦去笔迹、番茄酱和咖啡渍。

---

### 3. 外墙优先使用抗紫外线涂层
强烈日晒和暴雨会令廉价外墙漆在约 12 个月内褪色、粉化或长出霉斑。

**做法：**选用优质封闭底漆及耐候面漆，例如 Nippon Weatherbond 或 Dulux Weathershield。弹性涂层可帮助覆盖细小裂缝，UV 反射配方也有助于降低墙面吸热。

---

### 4. 用中性色与浅色调放大空间感
巴生谷的高层公寓和紧凑排屋，尤其适合营造更开阔的视觉感受。

**趋势：**现代北欧和日式侘寂风格常用暖白、柔灰、灰米色和低饱和鼠尾草绿。这些中性色能反射光线，让小空间显得更明亮、整洁和宽敞。

---

### 5. 不要省略防潮封闭底漆
即使是昂贵的面漆，直接刷在未处理的灰泥或潮湿混凝土上也可能起泡、剥落或开裂。

**技术标准：**我们先施工优质防潮封闭底漆，形成耐碱屏障，减少墙体盐分和上升湿气破坏面漆颜色。

---

### 吉隆坡和雪兰莪需要专业油漆服务？
避免边线不直、油漆溅到家具或日后脱皮。KL Servis Rumah 提供价格透明并附施工保修的住宅油漆服务。

* 单间油漆 RM450 起
* 使用 Nippon Paint 与 Dulux 优质产品
* 提供整洁的家具遮蔽保护

**今天 WhatsApp 我们，获取免费报价及预约时段。**`
    }
  },

  /* ──────────────────────────────────────────────────────────────────────
   * Post 2 — Leaking Ceiling Without Hacking Tiles
   * ────────────────────────────────────────────────────────────────────── */
  "how-to-fix-leaking-ceiling-without-tile-hacking": {
    ms: {
      slug: "cara-baik-siling-bilik-air-bocor-tanpa-pecah-jubin",
      title: "Cara Membaiki Siling Bilik Air Bocor Tanpa Memecah Jubin", category: "Kalis Air",
      excerpt: "Air menitis dari bilik air tingkat atas? Ketahui bagaimana Grouting Tekanan Tinggi PU menutup kebocoran konkrit serta-merta dari bawah tanpa memecahkan jubin.",
      metaTitle: "Baiki Kebocoran Siling Bilik Air Tanpa Pecah Jubin",
      metaDesc: "Siling menitis air? Pelajari bagaimana suntikan Grouting PU menutup kebocoran antara tingkat dari bawah tanpa memecah jubin mewah di KL & Selangor.",
      content: `Siling plaster yang menitis adalah salah satu masalah paling menjengkelkan bagi pemilik rumah di Malaysia. Ia bermula dengan tompok lembap kecil, berkembang menjadi bulatan gelap berkulat, dan akhirnya menjadi titisan aktif yang merosakkan siling dan mengancam pendawaian elektrik anda.

Di rumah teres dua tingkat dan kondominium di Selangor dan KL, ini biasanya adalah "kebocoran antara tingkat" yang disebabkan oleh grout jubin yang haus atau membran kalis air yang rosak di bilik air tingkat atas.

Pembaikan tradisional amat menakutkan: pecahkan seluruh lantai bilik air tingkat atas, buang jubin, pasang membran baharu, dan jubin semula. Proses ini mengambil 5 hari, menelan belanja ribuan ringgit, dan menjadikan bilik air tidak boleh digunakan langsung.

Syukurlah, terdapat alternatif moden yang tidak merosakkan: **Grouting Tekanan Tinggi Polyurethane (PU)**. Berikut cara ia berfungsi.

---

### Apakah Grouting PU (Kalis Air Suntikan)?
Grouting PU ialah teknik kalis air terkini di mana cecair kimia poliuretana dipam terus ke dalam retakan konkrit di bawah tekanan tinggi dari siling bawah.

Apabila sebatian PU cecair bersentuhan dengan kelembapan di dalam plat konkrit, tindak balas kimia berlaku. Poliuretana mengembang sehingga 20 kali ganda isipadu asal, bertukar menjadi busa getah sintetik yang keras, fleksibel dan benar-benar tidak tembus. Busa ini mengisi setiap kapilari mikroskopik, rongga dan retak halus, menutup kebocoran di sumber sebenar.

---

### Proses Grouting PU Langkah Demi Langkah
Di **KL Servis Rumah**, pasukan kalis air kami melaksanakan Grouting PU secara bersih dalam 5 langkah mudah:

1. **Pengesanan Terma:** Kami menggunakan meter kelembapan elektronik dan kamera pengimejan terma untuk mengesan kepekatan kelembapan tertinggi di bawah plat konkrit.
2. **Menggerudi Port:** Kami menggerudi lubang kecil 10mm pada sudut 45 darjah di sepanjang garis retak konkrit.
3. **Memasukkan Pakar Logam:** Port suntikan logam (paker) diketuk ke dalam lubang yang digerudi, membentuk pengedap tekanan ketat.
4. **Pam Tekanan Tinggi:** Pam hidraulik khas memaksa cecair kimia PU ke dalam paker. Busa pengembangan boleh dilihat keluar dari puncak retakan, mengesahkan semua rongga dalaman telah diisi.
5. **Penanggalan Paker & Pengedapan:** Setelah kering (dalam kira-kira 30 minit), paker logam dikeluarkan. Lubang gerudi kecil ditutup dengan grout simen kalis air, meninggalkan konkrit licin.

---

### 4 Kelebihan Besar Grouting PU

* **1. Sifar Pecahan Jubin:** Jubin marmar atau seramik yang cantik dan mahal di bilik air atas dibiarkan sepenuhnya tidak disentuh.
* **2. Siap Dalam Beberapa Jam:** Projek grouting PU standard hanya mengambil 2 hingga 4 jam untuk disiapkan. Bilik air anda kekal berfungsi.
* **3. Sangat Berpatutan:** Oleh kerana ia menghapuskan pemecahan jubin, bahan baharu dan jam buruh yang banyak, Grouting PU biasanya 60% lebih murah daripada kalis air semula tradisional.
* **4. Sangat Tahan Lama:** Poliuretana ialah sebatian fleksibel. Apabila bangunan mendap atau konkrit mengembang di bawah haba Malaysia, pengedap getah mengembang tanpa retak, menghalang kebocoran secara kekal.

---

### Perlukan Pakar Kalis Air di KL atau Selangor?
Jika siling plaster anda menunjukkan tompok lembap, jangan tunggu sehingga ia runtuh dan menyebabkan kerosakan mahal. **KL Servis Rumah** menyediakan pengesanan kebocoran pakar, Grouting Suntikan PU dan pembaikan siling.

* Jaminan sehingga 5 tahun terhadap kejadian semula
* Tiada deposit diperlukan — bayar selepas kebocoran disahkan telah ditutup
* Juruteknik tempatan yang disaring latar belakang

**Hubungi WhatsApp kami sekarang untuk menempah slot pemeriksaan anda!**`
    },
    zh: {
      slug: "wu-xu-ci-zhuan-xiu-fu-yu-shi-tian-hua-ban-lou-shui", title: "无需砸瓷砖修复浴室天花板漏水的方法", category: "防水工程",
      excerpt: "楼上浴室滴水到天花板？了解聚氨酯（PU）高压注浆如何从下方瞬间封堵混凝土裂缝，零砸砖完成修复。",
      metaTitle: "无需砸瓷砖修复楼层间浴室天花板漏水", metaDesc: "天花板滴水？了解PU注浆如何从下方封堵楼层间浴室漏水，无需砸破吉隆坡与雪兰莪的豪华地砖。",
      content: `石膏天花板滴水是马来西亚屋主最头疼的问题之一。起初是一小块潮湿斑点，逐渐扩大成发黑的霉斑圆圈，最终变成持续滴水，损坏天花板并威胁电线安全。

在雪兰莪和吉隆坡的排屋和公寓中，这通常是"层间漏水"，由上层浴室的瓷砖填缝老化或防水层受损引起。

传统修复方法令人畏惧：敲掉楼上浴室整个地面、拆除瓷砖、重铺防水层、重新贴砖。整个过程需要5天、花费数千令吉，而且浴室完全无法使用。

幸好，现在有一种现代、非破坏性的替代方案：**聚氨酯（PU）高压注浆**。以下是其工作原理。

---

### 什么是PU注浆（注浆防水）？
PU注浆是一种先进的防水技术，将液态聚氨酯化学物质通过高压从下方天花板直接注入混凝土裂缝中。

当液态PU化合物接触到混凝土板内部的水分时，触发化学反应。聚氨酯膨胀至原始体积的20倍，转变为坚韧、柔韧且完全不渗透的合成橡胶泡沫。这种泡沫填充每一个微小的毛细孔、空隙和细裂纹，从根源彻底封堵漏水。

---

### PU注浆分步流程
在**KL Servis Rumah**，我们的防水团队通过5个简单步骤完成PU注浆：

1. **热成像检测：**使用电子湿度计和热成像相机，定位混凝土板下方湿度最集中的区域。
2. **钻孔：**沿混凝土裂缝线以45度角钻10毫米小孔。
3. **安装注浆嘴：**将金属注浆嘴（止水针头）敲入钻孔，形成紧密的压力密封。
4. **高压灌注：**专用液压泵将液态PU化学物质压入注浆嘴。可从裂缝顶部看到膨胀泡沫渗出，确认所有内部空隙已填满。
5. **拆除注浆嘴与封口：**固化约30分钟后，取出金属注浆嘴，用小孔防水水泥砂浆封堵，混凝土表面恢复平整。

---

### PU注浆的4大优势

* **1. 无需砸砖：**楼上浴室的大理石或瓷砖完全不受影响。
* **2. 数小时完成：**标准PU注浆工程仅需2至4小时，浴室照常使用。
* **3. 非常经济：**由于省去了拆砖、新材料和大量人工，PU注浆通常比传统重做防水便宜60%。
* **4. 极其耐用：**聚氨酯是柔性材料。即使建筑沉降或混凝土在马来西亚高温下膨胀，橡胶密封也能随之弯曲而不开裂，永久封堵漏水。

---

### 需要吉隆坡或雪兰莪的防水专家？
如果您的天花板出现潮湿斑点，不要等到塌落造成更大损失。**KL Servis Rumah** 提供专业的漏水检测、PU注浆和天花板修复服务。

* 最长5年防复发保修
* 无需定金——确认漏水封堵后再付款
* 经过背景审查的本地技术人员

**立即 WhatsApp 我们预约检查时段！**`
    }
  },

  /* ──────────────────────────────────────────────────────────────────────
   * Posts 3–18 — from blog-data-extra.ts
   * ────────────────────────────────────────────────────────────────────── */

  "when-to-repaint-your-house-malaysia": {
    ms: {
      slug: "bila-perlu-cat-semula-rumah-malaysia",
      title: "Bila Perlu Cat Semula Rumah Anda di Malaysia (Tanda, Kekerapan & Bajet)", category: "Pengecatan",
      excerpt: "Dalaman setiap 5–7 tahun, luar setiap 4–6 tahun — berikut tanda sebenar yang menunjukkan sudah tiba masa untuk cat semula rumah anda di Klang Valley.",
      metaTitle: "Bila Perlu Cat Semula Rumah di Malaysia — Tanda & Kos",
      metaDesc: "Berapa kerap perlu cat semula dinding dalaman dan luaran di KL & Selangor? Tanda sudah tiba masa, bajet jujur dan nasihat jenama cat.",
      content: `Menentukan bila perlu cat semula rumah di Klang Valley bukan soal tanda kalender — ia tentang membaca dinding. Kelembapan tropika, hujan monsun, matahari barat dan habuk pembinaan semua menyerang cat dengan cara berbeza.

Berikut cara pakar cat kami di **KL Servis Rumah** menentukan bersama pelanggan sama ada sudah tiba masa untuk cat semula, atau hanya perlu cuci.

---

### 5 tanda sebenar sudah tiba masa cat semula

1. **Berdebu:** Gosok dinding dengan jari bersih. Jika ada serbuk putih, cat telah rosak.
2. **Pudar:** Bilik menghadap utara pudar paling lambat; luar menghadap barat pudar paling cepat — selalunya dalam 3–5 tahun untuk cat murah.
3. **Retak halus + mengelupas:** Terutama di dekat papan skirting, bingkai tingkap, lubang penghawa dingin dan tepi bilik air.
4. **Tompok kulat atau bayangan gelap:** Biasa di bilik air, dapur dan berhampiran paip bocor. Cat semula sahaja tidak akan punyai masalah.
5. **Selera warna berubah:** Mahu jual, sewa atau merancang renovasi keluarga? Palet baharu menaikkan nilai persepsi RM 20k–RM 80k bergantung pada harta.

---

### Kekerapan cat semula biasa di Malaysia

- **Dalaman — jenama premium (Nippon Odour-less, Dulux EasyClean):** 6 hingga 8 tahun.
- **Dalaman — jenama ekonomi:** 3 hingga 4 tahun.
- **Luar — premium kalis cuaca (Nippon Weatherbond, Dulux Weathershield):** 5 hingga 7 tahun.
- **Luar — cat ekonomi:** 2 hingga 3 tahun (selalunya penjimatan palsu).

---

### Bajet cat semula realistik 2026 di KL & Selangor

- Satu bilik dalaman (2 lapis + penyediaan kecil): dari **RM 450**.
- Penuh dalaman kondominium 3 bilik: **RM 3,500–RM 6,500**.
- Luar teres satu tingkat: **RM 5,000–RM 9,000**.
- Luar teres dua tingkat (dengan perancah): **RM 8,500–RM 15,500**.
- Separuh banglo / banglo: disebut harga per lawatan tapak.

Setiap sebut harga KL Servis Rumah diperincikan dan disahkan sebelum kami membuka tin cat.

---

### Jenama cat mana patut dipilih?

Kami biasanya mengesyorkan salah satu daripada tiga jenama untuk rumah Klang Valley:

- **Nippon Paint** — terlaris, julat warna terluas, garis boleh cuci yang kuat.
- **Dulux** — julat premium cemerlang, kemasan konsisten.
- **Jotun** — jenama Norway premium, kestabilan UV terbaik, sesuai untuk Klang pantai dan luar banyak matahari.

Elakkan cat "kedai tinting" tanpa jenama untuk apa-apa selain sewa sementara — penjimatan hilang dalam 24 bulan.

---

### Bersedia merancang cat semula anda?

**KL Servis Rumah** menguruskan cat semula dalaman dan luar di seluruh Kuala Lumpur dan Selangor dengan sebut harga tetap, jurucat disaring latar belakang dan **jaminan kerja sehingga 1 tahun**.

- WhatsApp kami foto dinding anda untuk harga anggaran segera.
- Tempah pemeriksaan percuma di tapak untuk apa-apa melebihi 3 bilik atau kerja luaran.

**Hubungi kami hari ini!**`
    },
    zh: {
      slug: "ma-lai-xi-ya-he-shi-zhong-xin-fang-qi-fang-wu", title: "马来西亚何时应该重新粉刷房屋（迹象、频率与预算）", category: "油漆服务",
      excerpt: "室内每5–7年、室外每4–6年——以下是判断巴生谷房屋何时需要重新粉刷的真实信号及合理预算。",
      metaTitle: "马来西亚何时重刷房屋——迹象与费用", metaDesc: "吉隆坡和雪兰莪室内外墙多久该重刷？判断时机、真实预算范围和油漆品牌建议。",
      content: `在巴生谷判断何时重刷房屋，不是看日历——而是看墙面。热带湿度、季风暴雨、西晒阳光和建筑灰尘都以不同方式侵蚀油漆。

以下是 **KL Servis Rumah** 油漆团队与客户判断真正需要重刷还是只需清洗的方法。

---

### 5个真正需要重刷的信号

1. **粉化：** 用干净手指擦拭墙面。如果沾上白色粉末，油漆已经分解。
2. **褪色：** 朝北的房间褪色最慢；朝西的外墙褪色最快——廉价漆常在3–5年内就出现。
3. **细裂纹+剥落：** 尤其出现在踢脚线、窗框、空调出风口和浴室边缘附近。
4. **霉斑或暗色阴影：** 常见于浴室、厨房和漏水管道附近。单靠重刷无法解决根源。
5. **颜色审美过时：** 卖房、出租或计划翻新？新配色方案能提升房产观感价值 RM 20k–RM 80k。

---

### 马来西亚常见重刷频率

- **室内——优质品牌（Nippon Odour-less、Dulux EasyClean）：** 6至8年。
- **室内——经济品牌：** 3至4年。
- **室外——优质耐候漆（Nippon Weatherbond、Dulux Weathershield）：** 5至7年。
- **室外——经济漆：** 2至3年（通常是虚假的省钱）。

---

### 2026年吉隆坡和雪兰莪真实重刷预算

- 单间室内（2层面漆+少量基层处理）：**RM 450** 起。
- 900平方英尺公寓全屋室内：**RM 3,500–RM 6,500**。
- 单层排屋外墙：**RM 5,000–RM 9,000**。
- 双层排屋外墙（含脚手架）：**RM 8,500–RM 15,500**。
- 半独立/独栋洋房：现场勘查报价。

KL Servis Rumah 每份报价逐项列明，开工前确认。

---

### 该选哪个油漆品牌？

我们通常为巴生谷住宅推荐三个品牌之一：

- **Nippon Paint** ——最畅销、色卡最全、耐擦洗系列出色。
- **Dulux** ——优质系列表现优异，涂层一致性好。
- **Jotun** ——挪威高端品牌，紫外线稳定性最佳，适合巴生沿海及高日照外墙。

避免使用无名"调色店"油漆（临时出租房除外）——省下的钱在24个月内就会消失。

---

### 准备重刷了吗？

**KL Servis Rumah** 在吉隆坡和雪兰莪各地提供固定报价、背景审查合格的油漆工和**最长1年施工保修**的室内外重刷服务。

* WhatsApp 发送墙面照片即可获得即时估价。
* 3间房以上或任何外墙工程可预约免费上门勘查。

**今天就联系我们！**`
    }
  },

  "hidden-water-leak-detection-kl": {
    ms: {
      slug: "pengesanan-kebocoran-air-tersembunyi-kl",
      title: "Cara Mengesan Kebocoran Air Tersembunyi Sebelum Bil Meletup", category: "Plumbing",
      excerpt: "Jika bil SYABAS anda melonjak tetapi tiada kebocoran kelihatan, kemungkinan besar ia paip tersembunyi. Berikut cara pengesanan kebocoran profesional berfungsi.",
      metaTitle: "Pengesanan Kebocoran Air Tersembunyi di KL & Selangor", metaDesc: "Bil SYABAS melonjak tanpa kebocoran kelihatan? Pelajari bagaimana pengesanan kebocoran kami menggunakan ujian tekanan dan alat akustik.",
      content: `Kenaikan 40–120% dalam bil SYABAS anda hampir pasti kebocoran paip tersembunyi — tetapi menemuinya tanpa merobohkan lantai dan dinding dulunya hampir mustahil. Alat pengesanan kebocoran moden telah mengubahnya sepenuhnya.

Berikut proses tepat yang kami ikuti di **KL Servis Rumah** untuk mengesan kebocoran tersembunyi di rumah Klang Valley tanpa kerosakan yang tidak perlu.

---

### Langkah 1 — Asingkan sumber (percuma, 5 minit)

Matikan *semua* paip dan peralatan. Kemudian periksa meter SYABAS. Jika ia masih berputar, air bocor di suatu tempat dalam paip persendirian anda. Jika ia berhenti, kebocoran di dalam peralatan (tangki tandas, pemanas air, dll.) — lebih mudah.

---

### Langkah 2 — Ujian tekanan paip masuk utama

Juruteknik kami mengasingkan injap masuk dan memasang tolok tekanan berkalibrasi. Rumah yang sihat patut menahan **6–8 bar** selama sekurang-kurangnya 15 minit tanpa penurunan. Sebarang penurunan mengesahkan kebocoran tersembunyi.

---

### Langkah 3 — Pengimejan terma pada dinding yang disyaki

Kebocoran paip air panas tersembunyi kelihatan jelas pada kamera terma — aliran air panas merebak melalui dinding. Kebocoran air sejuk lebih sukar tetapi kelihatan sebagai tompok sedikit lebih sejuk.

---

### Langkah 4 — Pengesanan kebocoran akustik

Di mana terma tidak muktamad, kami bertukar kepada penderia akustik elektronik. Ia menguatkan desisan air yang keluar melalui dinding paip — sangat kuat apabila anda tahu apa yang didengar.

---

### Langkah 5 — Sahkan sebelum pecah

Kami hanya membuka dinding atau plat di tempat yang ditandai — biasanya pembaikan **10 × 10 cm**, bukan seluruh bilik. Selepas pembaikan, kami uji tekanan sekali lagi untuk mengesahkan kebocoran ditutup sepenuhnya.

---

### Kos

- Panggilan pengesanan kebocoran: dari **RM 250** (dikreditkan ke pembaikan jika anda tempah).
- Pembaikan paip tersembunyi (satu sendi): **RM 350–RM 850**.
- Paip semula penuh (10–20 kaki): **RM 900–RM 2,400**.

---

### 3 tanda amaran kebocoran tersembunyi

- Bil SYABAS naik 30%+ tanpa perubahan gaya hidup.
- Dinding tertentu sentiasa lembap atau berbau hapak.
- Tekanan air di satu paip menurun perlahan-lahan.

WhatsApp kami bacaan meter dan foto tompok lembap — kami akan nasihatkan cara terpantas untuk mengesahkan.`
    },
    zh: {
      slug: "ji-long-po-cang-an-lou-shui-jian-ce", title: "水费暴涨前如何找到隐藏漏水点", category: "水管服务",
      excerpt: "水费突然暴涨却找不到漏水？很可能是隐藏管道漏水。了解专业漏水检测在马来西亚住宅中的工作流程——无需不必要的砸墙。",
      metaTitle: "吉隆坡和雪兰莪隐藏漏水检测", metaDesc: "水费暴涨但看不到漏水？了解我们如何用压力测试和声学工具定位漏水，无需不必要的砸墙。",
      content: `水费突然上涨40–120%，几乎一定是隐藏管道漏水——但在不破坏地面和墙壁的情况下找到漏水点，过去几乎不可能。现代漏水检测工具彻底改变了这一点。

以下是 **KL Servis Rumah** 在巴生谷住宅中定位隐藏漏水的精确流程，尽量减少不必要的破坏。

---

### 第1步——隔离来源（免费，5分钟）

关闭所有水龙头和用水设备。然后检查水表。如果仍在转动，说明私人管道某处正在漏水。如果停止，则漏水在设备内部（马桶水箱、热水器等）——更容易处理。

---

### 第2步——对进水主管进行压力测试

技术员隔离进水阀，安装校准压力表。健康的住宅应在至少15分钟内保持**6–8 bar**压力不下降。任何下降都确认存在隐藏漏水。

---

### 第3步——对可疑墙面进行热成像

隐藏的热水管漏水在热成像仪上非常明显——一股温水在墙体中扩散。冷水漏水较难检测，但15–30分钟后会呈现略低的温度区域。

---

### 第4步——声学漏水检测

当热成像无法确认时（通常是混凝土板中的冷水管），我们使用电子声学传感器。它放大水从管壁渗出的嘶嘶声——一旦你知道在听什么，声音会出奇地清晰。

---

### 第5步——确认后再开凿

我们只在标记的精确位置打开墙壁或楼板——通常是**10 × 10 厘米**的修补口，而不是整个房间。修复后再次压力测试，确认漏水已完全密封。

---

### 费用

- 漏水检测上门：**RM 250** 起（如委托维修可抵扣）。
- 暗管修补（单个接头）：**RM 350–RM 850**。
- 整段换管（10–20英尺）：**RM 900–RM 2,400**。

---

### 3个隐藏漏水警告信号

- 水费上涨30%以上，生活习惯无变化。
- 特定墙面总是潮湿或有霉味。
- 某个水龙头水压在数周内缓慢下降。

WhatsApp 我们水表读数和潮湿区域照片——我们会建议最快的确认方式。`
    }
  },

  "gypsum-vs-plaster-ceiling-malaysia": {
    ms: {
      slug: "siling-gypsum-vs-siling-plaster-malaysia",
      title: "Siling Gypsum vs Siling Plaster: Mana Satu Sesuai Untuk Rumah Malaysia Anda?", category: "Siling",
      excerpt: "Kedua-dua digunakan secara berganti-ganti di KL — tetapi prestasi sangat berbeza di bawah kelembapan, kebocoran bumbung dan reka bentuk. Berikut perbandingan jujur.",
      metaTitle: "Siling Gypsum vs Siling Plaster Malaysia — Kos & Kelembapan", metaDesc: "Bahan siling mana sesuai untuk rumah Malaysia? Panduan jujur gypsum vs plaster — kelembapan, kos, fleksibiliti reka bentuk dan jaminan.",
      content: `Tanya lima kontraktor di KL apakah perbezaan antara "siling gypsum" dan "siling plaster", dan anda akan mendapat lima jawapan sedikit berbeza. Itu kerana dalam penggunaan Malaysia istilah bertindih — tetapi *bahan* di bawahnya berprestasi sangat berbeza.

Berikut cara pakar siling kami di **KL Servis Rumah** menjelaskannya kepada pelanggan.

---

### Perbezaan bahan

- **Papan gypsum (sistem kering):** papan pra-kilang (9 mm atau 12 mm), dipasang pada bingkai logam dengan skru, sendi ditepuk, dan dilapis untuk kemasan mulus. Pemasangan pantas, kerja kering, minimum kekotoran.

- **Siling plaster (lapisan basah pada gypsum/POP):** asas papan gypsum dengan lapisan plaster skim penuh 2–4 mm di atas, kadangkala dengan cornice hiasan, lekuk atau profil melengkung. Lebih fleksibiliti reka bentuk, kemasan lebih tebal, masa pemasangan lebih lama.

---

### Perbandingan kos (purata Klang Valley 2026)

| Item | Siling Gypsum | Siling Plaster |
|------|--------------|---------------|
| Kadar asas (per kaki persegi, rata) | RM 10 – RM 13 | RM 12 – RM 16 |
| Cove / L-box (per kaki) | RM 22 – RM 32 | RM 26 – RM 40 |
| Cornice hiasan (per kaki) | Tidak biasa | RM 18 – RM 45 |
| Kelajuan pasang untuk bilik 100 kps | 1 hari | 2–3 hari |

---

### Kelembapan, kebocoran dan pembaikan

Kedua-dua bahan menggunakan gypsum sebagai asas, jadi kedua-dua benci sentuhan air langsung. Walau bagaimanapun:

- Pembaikan **papan gypsum** lebih mudah — potong kawasan rosak, skru papan baharu, tepuk dan lapis.
- Pembaikan **siling plaster** lebih sukar dicampur — lapisan skim tebal perlukan berlapis-lapis, pengisaran dan pengecatan semula.

Untuk **kawasan basah atau bilik air**, sentiasa nyatakan **gypsum tahan lembapan (papan MR)** tanpa mengira kemasan atas.

---

### Fleksibiliti reka bentuk

- **Siling plaster** menang untuk lengkung, siling terukir, lekuk dalam, cornice hiasan — apa-apa yang memerlukan profil kustom.
- **Siling gypsum** lebih terbatas — hanya lurus dan sudut sederhana, kecuali anda guna papan lentur fleksibel (kos lebih tinggi).

---

### Jangka hayat di iklim Malaysia

Kedua-dua boleh bertahan 15–25 tahun jika dipasang dengan betul dan tiada kebocoran bumbung. Di Malaysia, pemboleh ubah utama ialah kelembapan dan kebocoran, bukan usia bahan.

---

### Cadangan KL Servis Rumah

- **Kondominium / ruang kering:** siling gypsum standard — lebih pantas, lebih murah, cukup baik.
- **Rumah teres dengan ruang tamu formal:** siling plaster untuk cornice hiasan dan lengkung.
- **Bilik air / dapur:** papan MR gypsum, tanpa kompromi.

WhatsApp kami pelan lantai anda untuk nasihat siling dan sebut harga tetap.

**KL Servis Rumah** — pakar siling plaster dan gypsum di KL & Selangor, jaminan kerja sehingga 10 tahun.`
    },
    zh: {
      slug: "ma-lai-xi-ya-shi-gao-ban-diao-ting-yu-shi-gao-tian-hua-ban-dui-bi", title: "石膏板吊顶vs粉刷天花板：哪个适合您的马来西亚住宅？", category: "天花板工程",
      excerpt: "吉隆坡两者常混用——但在湿度、屋顶漏水和设计方面表现截然不同。以下是真实对比。",
      metaTitle: "马来西亚石膏板vs粉刷天花板——费用与湿度", metaDesc: "哪种天花板材料适合您的马来西亚住宅？石膏板vs粉刷天花板的真实对比——湿度、费用、设计灵活性和保修。",
      content: `问吉隆坡五个承包商"石膏板吊顶"和"粉刷天花板"的区别，你会得到五个略有不同的答案。因为在马来西亚用法中这两个术语重叠——但底层材料的表现差异很大。

以下是 **KL Servis Rumah** 天花板团队向客户解释的方式。

---

### 材料差异

- **石膏板（干式系统）：** 工厂预制板材（9mm或12mm），用螺钉固定在金属龙骨上，接缝贴带，批灰找平。安装快速、干作业、几乎无脏乱。

- **粉刷天花板（石膏/POP上湿抹灰）：** 以石膏板为基层，上面做2–4mm完整抹灰层，有时加上装饰线、灯槽或弧形造型。设计灵活性更大、饰面更厚、安装时间更长。

---

### 费用对比（2026巴生谷均价）

| 项目 | 石膏板吊顶 | 粉刷天花板 |
|------|-----------|-----------|
| 基础单价（每平方英尺，平面） | RM 10 – RM 13 | RM 12 – RM 16 |
| 灯槽/L型（每英尺） | RM 22 – RM 32 | RM 26 – RM 40 |
| 装饰线（每英尺） | 不常见 | RM 18 – RM 45 |
| 100平方英尺房间安装速度 | 1天 | 2–3天 |

---

### 湿度、漏水与维修

两种材料都以石膏为基材，都怕直接接触水。但：

- **石膏板** 维修更容易——切除损坏部分，拧上新板，贴带批灰。
- **粉刷天花板** 修补更难做到无痕——较厚的抹灰层需要多层处理、打磨和重新上漆。

**浴室/潮湿区域**，无论面层做法如何，务必指定使用**防潮石膏板（MR板）**。

---

### 设计灵活性

- **粉刷天花板** 在弧形、藻井、深灯槽、装饰线方面胜出——任何需要定制造型的设计。
- **石膏板** 相对受限——基本只有直线和简单角度，除非使用柔性弯曲板（成本更高）。

---

### 马来西亚气候下的使用寿命

正确安装且无屋顶漏水的情况下，两者均可使用15–25年。在马来西亚，主要变量是湿度和漏水，而非材料老化。

---

### KL Servis Rumah 建议

- **公寓/干燥区域：** 标准石膏板——更快、更经济、足够好。
- **带正式客厅的排屋：** 粉刷天花板做装饰线和弧形。
- **浴室/厨房：** 使用防潮石膏板，没有例外。

WhatsApp 我们您的平面图，获取天花板建议和固定报价。

**KL Servis Rumah** — 吉隆坡和雪兰莪的石膏板与粉刷天花板专家，施工保修最长10年。`
    }
  },

  "pu-grouting-vs-full-membrane-waterproofing": {
    ms: {
      slug: "grouting-pu-vs-membran-kalis-air-penuh",
      title: "Grouting PU vs Membran Kalis Air Penuh: Mana Satu Yang Anda Perlukan?", category: "Kalis Air",
      excerpt: "Kedua-duanya menghentikan kebocoran — tetapi kos, masa dan kesesuaian sangat berbeza. Panduan jujur untuk memilih pendekatan yang betul di Malaysia.",
      metaTitle: "Grouting PU vs Kalis Air Membran Penuh — Perbandingan", metaDesc: "Grouting PU atau membran kalis air penuh? Panduan jujur untuk memilih penyelesaian kalis air yang betul di KL & Selangor.",
      content: `Dua cara utama untuk kalis air di Malaysia: suntikan PU grouting dari bawah, atau membran penuh dari atas. Setiap satu ada tempatnya.

Berikut cara **KL Servis Rumah** menentukan mana satu yang pelanggan perlukan.

---

### Grouting PU (suntikan dari bawah)

- Sesuai untuk kebocoran titik tertentu antara tingkat.
- 2–4 jam kerja.
- Kos: RM 350–RM 2,500 bergantung bilangan retak.
- Jaminan: 1–5 tahun.
- Tidak perlu pecah jubin.

### Membran Penuh (dari atas)

- Sesuai untuk balki, bumbung rata, atau kawasan basah yang meluas.
- 2–5 hari kerja.
- Kos: RM 15–RM 35 per kaki persegi.
- Jaminan: 5–10 tahun.
- Perlu keluarkan jubin atau letak membran atas jubin sedia ada.

---

### Bila guna PU Grouting

- Kebocoran antara tingkat dari bilik air atas.
- Satu atau dua titik bocor yang dikenalpasti.
- Pelanggan tidak mahu pecah lantai.
- Bajet terhad.

### Bila guna Membran Penuh

- Kebocoran bumbung rata meluas.
- Balki yang selalu terdedah hujan.
- Kawasan basah komersial (restoran, dobi).
- Bangunan baharu (langkah pencegahan).

---

### Cadangan jujur

Jika kebocoran anda di satu titik tertentu antara dua tingkat, PU grouting selalunya penyelesaian paling pantas dan paling murah. Jika keseluruhan balki atau bumbung rata bocor, membran penuh lebih tahan lama.

Kami tidak pernah menjual membran penuh jika PU grouting sudah memadai — dan kami tidak akan cadangkan PU jika masalah anda perlukan membran penuh.

**WhatsApp kami foto kebocoran anda untuk nasihat percuma dan sebut harga tetap.**`
    },
    zh: {
      slug: "pu-zhu-jiang-yu-quan-mian-fang-shui-dui-bi", title: "PU注浆vs全面防水层：您需要哪一种？", category: "防水工程",
      excerpt: "两种方法都能止漏——但费用、工期和适用场景差异很大。诚实指南帮您选择正确方案。",
      metaTitle: "PU注浆 vs 全面防水膜对比", metaDesc: "PU注浆还是全面防水？为吉隆坡和雪兰莪选择正确防水方案的诚实指南。",
      content: `马来西亚两种主要防水方式：从下方注入PU浆液，或从上方做全面防水层。各有适用场景。

以下是 **KL Servis Rumah** 判断客户需要哪种的方式。

---

### PU注浆（从下方注入）

- 适用于层间特定点漏水。
- 工期2–4小时。
- 费用：RM 350–RM 2,500，视裂缝数量。
- 保修：1–5年。
- 无需砸砖。

### 全面防水层（从上方施工）

- 适用于阳台、平屋顶或大面积潮湿区域。
- 工期2–5天。
- 费用：每平方英尺 RM 15–RM 35。
- 保修：5–10年。
- 需要拆除瓷砖或在现有瓷砖上覆盖防水膜。

---

### 何时用PU注浆

- 楼层间浴室漏水。
- 已定位一两个漏水点。
- 业主不想砸地板。
- 预算有限。

### 何时用全面防水

- 大面积平屋顶漏水。
- 经常淋雨的阳台。
- 商业潮湿区域（餐厅、洗衣房）。
- 新建筑（预防措施）。

---

### 诚实建议

如果是楼层间特定点漏水，PU注浆通常是最快、最经济的方案。如果整个阳台或平屋顶漏水，全面防水更持久。

如果PU注浆就够用，我们不会推销全面防水；如果您的情况确实需要全面防水，我们也不会建议PU。

**WhatsApp 我们发送漏水照片，获取免费建议和固定报价。**`
    }
  },

  "tv-wall-mounting-safety-guide": {
    ms: {
      slug: "panduan-keselamatan-pemasangan-tv-dinding",
      title: "Panduan Keselamatan Pemasangan TV Dinding: Jangan Jatuh", category: "Tukang",
      excerpt: "TV 65 inci boleh berat 25 kg. Salah pasang boleh merosakkan dinding, merosakkan TV atau mencederakan seseorang. Berikut cara memasangnya dengan selamat.",
      metaTitle: "Panduan Keselamatan Pemasangan TV Dinding — KL & Selangor", metaDesc: "TV besar boleh jatuh jika dipasang salah. Panduan lengkap tentang jenis dinding, bracket dan pemasangan selamat.",
      content: `TV skrin besar semakin ringan tetapi lebih lebar — dan lebih mahal untuk diganti. Memasang TV 55–85 inci pada dinding yang salah dengan bracket yang salah boleh mengakibatkan kerosakan serius.

Berikut panduan keselamatan **KL Servis Rumah** untuk pemasangan TV dinding di Malaysia.

---

### Kenali dinding anda

- **Konkrit pepejal:** Jenis terbaik. Gunakan sauh pengembangan keluli. Menampung sehingga 80 kg.
- **Bata:** Baik, tetapi perlu sahu yang betul. Gunakan sahu.toggle untuk bata berongga.
- **Drywall/gypsum:** Perlu mencari stud logam atau kayu di belakang. JANGAN gantung TV berat pada gypsum sahaja.
- **Siling plaster:** JANGAN pasang TV pada siling plaster. Beban akan merosakkan.

---

### Bracket yang betul

- **Lepas tetap:** Rata pada dinding, paling murah, paling kuat.
- **Tilt:** Boleh condong ke bawah — baik untuk TV tinggi.
- **Penuh gerak (lengan):** Boleh tarik keluar dan putar — paling serba boleh tetapi perlu dipasang paling kukuh.

Sentiasa pastikan bracket ditauliah untuk saiz dan berat TV anda.

---

### Kesilapan biasa

- Menggunakan sauh plastik pada drywall (akan jatuh).
- Tidak mencari stud — hanya menetak di mana-mana.
- Menggunakan skru yang terlalu pendek.
- Tidak meratakan — TV condong sedikit, semakin teruk dari masa ke masa.
- Memasang pada dinding plaster partition ringan (tidak direka untuk beban dinamik).

---

### Kos pemasangan profesional

- Pemasangan dinding konkrit/bricks (TV sehingga 65 inci): **RM 120–RM 200**.
- Pemasangan drywall dengan pencarian stud (TV sehingga 65 inci): **RM 180–RM 300**.
- TV besar 75–85 inci: tambah RM 80–RM 150.
- Pengurusan kabel tersembunyi: **RM 150–RM 350** tambahan.

---

### Jaminan KL Servis Rumah

Setiap pemasangan TV kami datang dengan jaminan 30 hari terhadap sebarang kelonggaran atau pergerakan. Kami menggunakan sahu Hilti atau Fischer, tahap laser, dan menguji beban sebelum meninggalkan tapak.

**WhatsApp kami model TV anda dan jenis dinding untuk sebut harga segera.**`
    },
    zh: {
      slug: "dian-shi-gua-qiang-an-zhuang-an-quan-zhi-nan", title: "电视挂墙安装安全指南：防止坠落", category: "维修服务",
      excerpt: "65英寸电视可达25公斤。安装不当可能损坏墙壁、毁坏电视或伤人。以下是安全安装方法。",
      metaTitle: "电视挂墙安装安全指南——吉隆坡和雪兰莪", metaDesc: "大屏电视安装不当会坠落。完整了解墙体类型、支架选择和安全安装方法。",
      content: `大屏幕电视越来越轻但越来越宽——更换成本也越来越高。将55–85英寸电视装在错误的墙体上、使用错误的支架，可能导致严重后果。

以下是 **KL Servis Rumah** 在马来西亚电视挂墙安装的安全指南。

---

### 了解您的墙体

- **实心混凝土：** 最佳类型。使用钢膨胀螺栓。可承重80公斤。
- **砖墙：** 良好，但需使用正确的锚栓。空心砖使用翻转式锚栓。
- **石膏板/干墙：** 必须找到背后的金属或木质龙骨。切勿仅靠石膏板承重挂电视。
- **石膏天花板隔墙：** 切勿在轻质隔墙上挂电视，荷载会损坏墙体。

---

### 选择正确的支架

- **固定式：** 贴墙，最便宜、最牢固。
- **倾斜式：** 可向下倾斜——适合安装较高的电视。
- **全伸缩（悬臂）：** 可拉出旋转——最灵活但安装要求最高。

务必确认支架额定承重覆盖您的电视尺寸和重量。

---

### 常见错误

- 在干墙使用塑料锚栓（会脱落）。
- 不找龙骨直接打孔。
- 使用过短的螺钉。
- 不找水平——电视略微倾斜，随时间加重。
- 安装在轻质石膏隔墙上（不适合动态荷载）。

---

### 专业安装费用

- 混凝土/砖墙安装（电视≤65英寸）：**RM 120–RM 200**。
- 干墙安装含找龙骨（电视≤65英寸）：**RM 180–RM 300**。
- 75–85英寸大电视：加收 RM 80–RM 150。
- 隐藏式走线管理：额外 **RM 150–RM 350**。

---

### KL Servis Rumah 保修

每次电视安装均附30天保修，防止任何松动或位移。我们使用Hilti或Fischer锚栓、激光找平，并在离场前进行承重测试。

**WhatsApp 我们您的电视型号和墙体类型，获取即时报价。**`
    }
  },

  "cost-of-full-house-renovation-kl": {
    ms: {
      slug: "kos-renovasi-penuh-rumah-kl",
      title: "Kos Renovasi Penuh Rumah di KL & Selangor (Panduan 2026)", category: "Pengubahsuaian",
      excerpt: "Berapa kos sebenar renovasi penuh rumah teres atau kondominium di Klang Valley? Pecahan jujur untuk setiap kategori kerja.",
      metaTitle: "Kos Renovasi Penuh Rumah di KL — Panduan 2026", metaDesc: "Kos sebenar renovasi penuh rumah di Klang Valley? Pecahan telus untuk cat, paip, siling, lantai dan banyak lagi.",
      content: `Renovasi penuh di Klang Valley boleh menelan belanja dari RM 30,000 hingga RM 250,000+ bergantung pada saiz rumah, kualiti bahan dan skop kerja.

Berikut pecahan jujur **KL Servis Rumah** berdasarkan ratusan projek yang kami selesaikan di KL dan Selangor.

---

### Pecahan kos mengikut kategori

**Cat dalaman (seluruh rumah):**
- Kondominium 900 kps: RM 3,200 – RM 6,000
- Teres satu tingkat: RM 3,800 – RM 6,500
- Teres dua tingkat: RM 7,500 – RM 14,000

**Plumbing (baharu + naik taraf):**
- Satu bilik air penuh: RM 4,500 – RM 12,000
- Pemasang pemanas air: RM 180 – RM 680
- Paip semula separuh rumah: RM 3,500 – RM 8,000

**Siling plaster:**
- Kondominium 900 kps (rata + cove): RM 5,500 – RM 9,500
- Teres satu tingkat: RM 6,500 – RM 12,000
- Teres dua tingkat: RM 12,000 – RM 22,000

**Lantai:**
- SPC/vinyl klik-lock (seluruh rumah): RM 4,000 – RM 10,000
- Tiles seramik (termasuk bahan + pasang): RM 8 – RM 18 per kps
- Epoxy (garaj atau ruang utiliti): RM 12 – RM 25 per kps

**Kalis air:**
- Bilik air (PU grouting): RM 800 – RM 2,500
- Balki/rata luar (membran penuh): RM 15 – RM 35 per kps

**Elektrik:**
- Naik taraf DB box: RM 400 – RM 1,800
- Mata kuasa baharu (setiap titik): RM 100 – RM 280
- Pemasang pengecas EV: RM 1,800 – RM 3,200

---

### Jumlah renovasi penuh realistik

| Jenis rumah | Bajet minimum | Typical | Premium |
|------------|--------------|---------|---------|
| Kondominium 900 kps | RM 35,000 | RM 65,000 | RM 120,000+ |
| Teres satu tingkat | RM 45,000 | RM 80,000 | RM 150,000+ |
| Teres dua tingkat | RM 85,000 | RM 150,000 | RM 280,000+ |

---

### 5 cara bajet renovasi anda lari

1. Tidak memasukkan kos pembuangan dan pembersihan.
2. Tidak merancang untuk kerja tambahan (wiring, plumbing, siling).
3. Memilih bahan termurah kemudian menukar di tengah jalan.
4. Tidak mendapat sekurang-kurangnya 3 sebut harga terperinci.
5. Melupakan permit dan deposit JMB (untuk kondominium).

---

### Bagaimana KL Servis Rumah membantu

Kami menawarkan sebut harga berpecah untuk setiap kategori kerja, supaya anda boleh memilih skop yang sesuai dengan bajet anda. Tiada kos tersembunyi, tiada variasi tanpa persetujuan bertulis anda.

**WhatsApp kami pelan lantai dan senarai kerja yang diingini untuk anggaran percuma.**`
    },
    zh: {
      slug: "ji-long-quan-wu-fang-wu-zheng-xiu-fei-yong", title: "吉隆坡和雪兰莪全屋翻新费用（2026指南）", category: "装修工程",
      excerpt: "在巴生谷全面翻新排屋或公寓到底花多少钱？每个工种的诚实费用分解。",
      metaTitle: "吉隆坡全屋翻新费用——2026指南", metaDesc: "巴生谷全屋翻新实际花费？油漆、水管、天花板、地板等每个类别的透明分解。",
      content: `巴生谷的全屋翻新费用从 RM 30,000 到 RM 250,000+ 不等，取决于房屋面积、材料质量和工程范围。

以下是 **KL Servis Rumah** 基于我们在吉隆坡和雪兰莪完成的数百个项目的诚实分解。

---

### 按类别的费用分解

**室内油漆（全屋）：**
- 900平方英尺公寓：RM 3,200 – RM 6,000
- 单层排屋：RM 3,800 – RM 6,500
- 双层排屋：RM 7,500 – RM 14,000

**水管（新装+升级）：**
- 一间完整浴室：RM 4,500 – RM 12,000
- 热水器安装：RM 180 – RM 680
- 半屋重排管道：RM 3,500 – RM 8,000

**石膏天花板：**
- 900平方英尺公寓（平面+灯槽）：RM 5,500 – RM 9,500
- 单层排屋：RM 6,500 – RM 12,000
- 双层排屋：RM 12,000 – RM 22,000

**地板：**
- SPC/卡扣乙烯基（全屋）：RM 4,000 – RM 10,000
- 瓷砖（含材料+安装）：每平方英尺 RM 8 – RM 18
- 环氧树脂（车库或功能间）：每平方英尺 RM 12 – RM 25

**防水：**
- 浴室（PU注浆）：RM 800 – RM 2,500
- 阳台/平屋顶（全面防水膜）：每平方英尺 RM 15 – RM 35

**电气：**
- 配电箱升级：RM 400 – RM 1,800
- 新电源插座（每个点位）：RM 100 – RM 280
- 电动车充电桩安装：RM 1,800 – RM 3,200

---

### 全屋翻新实际总价

| 房屋类型 | 最低预算 | 典型 | 高端 |
|---------|---------|------|------|
| 900平方英尺公寓 | RM 35,000 | RM 65,000 | RM 120,000+ |
| 单层排屋 | RM 45,000 | RM 80,000 | RM 150,000+ |
| 双层排屋 | RM 85,000 | RM 150,000 | RM 280,000+ |

---

### 翻新预算超支的5个原因

1. 未包含拆除和清理费用。
2. 未计划额外工程（电路、水管、天花板）。
3. 选了最便宜的材料后中途更换。
4. 未获取至少3份详细报价。
5. 忽略了JMB许可和押金（公寓）。

---

### KL Servis Rumah 如何帮助您

我们为每个工种提供分项报价，让您选择符合预算的工程范围。无隐藏费用，未经您书面同意不做任何变更。

**WhatsApp 我们您的平面图和期望工程清单，获取免费估价。**`
    }
  },

  "safe-electrical-wiring-upgrade-old-house": {
    ms: {
      slug: "pendawaian-elektrik-selamat-rumah-lama",
      title: "Panduan Naik Taraf Pendawaian Elektrik Selamat Untuk Rumah Lama", category: "Elektrikal",
      excerpt: "Rumah lebih 20 tahun di Klang Valley mungkin masih ada pendawaian lama yang tidak selamat. Bila perlu naik taraf dan berapa kosnya.",
      metaTitle: "Naik Taraf Pendawaian Elektrik Rumah Lama — Panduan", metaDesc: "Rumah lama di KL mungkin ada pendawaian tidak selamat. Bila perlu naik taraf, kos dan proses daripada KL Servis Rumah.",
      content: `Rumah berusia 20+ tahun di Klang Valley sering masih menggunakan pendawaian asal. Ini boleh menjadi bahaya — terutama jika anda menambah lebih banyak peralatan, penghawa dingin dan pengecas EV.

Berikut panduan **KL Servis Rumah** untuk memahami bila dan bagaimana menaik taraf pendawaian elektrik anda.

---

### 5 tanda anda perlukan naik taraf

1. **Fiuz lit sering trip** — terutama apabila beberapa peralatan besar serentak.
2. **Soket 2-pin tanpa bumi** — rumah lama sering tiada wayar bumi.
3. **Pemasangan kabel dalam trunking kayu** — bahaya kebakaran.
FP4. **DB box lama tanpa ELCB/RCCB** — tiada perlindungan kejutan.
5. **Lampu malap atau berkelip** bila peralatan besar dihidupkan.

---

### Apakah yang terlibat dalam naik taraf penuh

- Gantikan DB box lama dengan unit moden dengan RCCB + MCB individu.
- Wayar semula litar utama dari meter ke DB.
- Tambah litar bumi ke semua soket dan peralatan besar.
- Tambah litar khusus untuk penghawa dingin, dapur induksi dan pengecas EV.

---

### Kos typical di KL & Selangor (2026)

- Naik taraf DB box sahaja: RM 400 – RM 1,800
- Wayar semula separuh rumah: RM 3,500 – RM 8,000
- Wayar semula seluruh rumah (teres satu tingkat): RM 6,000 – RM 15,000
- Wayar semula seluruh rumah (teres dua tingkat): RM 10,000 – RM 25,000
- Pemasangan litar pengecas EV khusus: RM 1,800 – RM 3,200

---

### Bila perlu segera

Jika anda perasan sebarang bau hangit di soket, spark dari suis, atau soket panas — matikan kuasa di DB dan hubungi ahli elektrik berdaftar segera.

**WhatsApp kami untuk pemeriksaan percuma dan sebut harga naik taraf.**`
    },
    zh: {
      slug: "jiu-fang-an-quan-dian-qi-xian-lu-sheng-ji-zhi-nan", title: "旧房屋安全电气线路升级指南", category: "电气工程",
      excerpt: "巴生谷超过20年的房屋可能仍在使用不安全的旧线路。何时需要升级以及费用多少。",
      metaTitle: "旧房电气线路升级指南", metaDesc: "吉隆坡旧房可能存在不安全线路。了解何时需要升级、费用和流程。",
      content: `巴生谷20年以上的房屋通常仍在使用原始线路。这可能构成安全隐患——尤其是当您增加更多电器、空调和电动车充电设备时。

以下是 **KL Servis Rumah** 帮助您了解何时以及如何升级电气线路的指南。

---

### 5个需要升级的信号

1. **断路器频繁跳闸** ——尤其是多个大功率电器同时使用时。
2. **2孔插座无接地** ——旧房常缺少地线。
3. **线路走木质线槽** ——火灾隐患。
4. **旧配电箱无ELCB/RCCB** ——缺少漏电保护。
5. **开启大功率电器时灯光变暗或闪烁**。

---

### 全面升级包括什么

- 更换旧配电箱为带RCCB+独立MCB的现代箱体。
- 从电表到配电箱重布主线路。
- 为所有插座和大电器增加接地线路。
- 为空调、电磁炉和电动车充电桩增加专用回路。

---

### 吉隆坡和雪兰莪典型费用（2026年）

- 仅升级配电箱：RM 400 – RM 1,800
- 半屋重布线：RM 3,500 – RM 8,000
- 整屋重布线（单层排屋）：RM 6,000 – RM 15,000
- 整屋重布线（双层排屋）：RM 10,000 – RM 25,000
- 电动车充电桩专用回路安装：RM 1,800 – RM 3,200

---

### 何时需要立即处理

如果您闻到插座有烧焦味、开关冒火花或插座发热——立即在配电箱断电并联系注册电工。

**WhatsApp 我们预约免费检查和升级报价。**`
    }
  },

  "spc-vs-vinyl-vs-laminate-flooring-malaysia": {
    ms: {
      slug: "spc-vs-vinyl-vs-laminate-lantai-malaysia",
      title: "SPC vs Vinyl vs Laminate: Lantai Mana Terbaik Untuk Rumah Malaysia?", category: "Lantai",
      excerpt: "Tiga pilihan lantai paling popular di Klang Valley — tetapi setiap satu berbeza dari segi kelembapan, ketahanan dan kos. Perbandingan penuh.",
      metaTitle: "SPC vs Vinyl vs Laminate — Perbandingan Lantai Malaysia", metaDesc: "Lantai mana sesuai untuk rumah Malaysia? Perbandingan penuh SPC, vinyl dan laminate — kelembapan, ketahanan dan kos.",
      content: `SPC, vinyl dan laminate kelihatan serupa tetapi berprestasi sangat berbeza di bawah kelembapan Malaysia. Berikut perbandingan jujur.

---

### SPC (Stone Plastic Composite)

- **Kalis air 100%** — teras mineral tidak menyerap air.
- Ketebalan 4–8 mm, sistem klik-lock.
- Sesuai untuk bilik air, dapur dan balki.
- Kos: RM 8 – RM 18 per kps termasuk pasang.
- Jangka hayat: 15–25 tahun.

### Vinyl (sheet atau tile)

- Kalis air, tetapi lebih nipis dan lembut.
- Boleh dilekatkan terus atas jubin sedia ada.
- Sesuai untuk bilik tidur dan ruang tamu.
- Kos: RM 5 – RM 12 per kps termasuk pasang.
- Jangka hayat: 8–15 tahun.

### Laminate (teras HDF/fiberboard)

- **BUKAN kalis air** — teras kayu mengembang jika basah.
- Permukaan keras tahan calar.
- Hanya untuk ruang kering (bilik tidur, ruang tamu, pejabat).
- Kos: RM 6 – RM 14 per kps termasuk pasang.
- Jangka hayat: 10–20 tahun (jika kekal kering).

---

### Perbandingan cepat

| Faktor | SPC | Vinyl | Laminate |
|--------|-----|-------|----------|
| Kalis air | ✅ Ya | ✅ Ya | ❌ Tidak |
| Sesuai bilik air | ✅ | ✅ | ❌ |
| Tahan calar | Baik | Sederhana | Cemerlang |
| Rasa di bawah kaki | Kukuh | Lembut | Keras |
| Kos | Sederhana | Termurah | Mampu milik |

---

### Cadangan KL Servis Rumah

- **Seluruh rumah termasuk bilik air:** SPC — satu bahan untuk semua ruang.
- **Bilik tidur sahaja, bajet ketat:** Vinyl.
- **Pejabat rumah atau ruang kering:** Laminate cukup baik.

**WhatsApp kami ukuran lantai anda untuk sebut harga tetap termasuk pasang.**`
    },
    zh: {
      slug: "ma-lai-xi-ya-spc-yu-yin-xi-yu-qiang-hua-di-ban-dui-bi", title: "SPC vs 乙烯基 vs 强化地板：哪个最适合马来西亚住宅？", category: "地板工程",
      excerpt: "巴生谷三种最流行的地板选择——但在湿度、耐用性和费用方面差异很大。完整对比。",
      metaTitle: "SPC vs 乙烯基 vs 强化地板——马来西亚地板对比", metaDesc: "哪种地板适合马来西亚住宅？SPC、乙烯基和强化地板的完整对比——湿度、耐用性和费用。",
      content: `SPC、乙烯基和强化地板看起来相似，但在马来西亚湿度下表现截然不同。以下是诚实对比。

---

### SPC（石塑复合材料）

- **100%防水** ——矿物芯不吸水。
- 厚度4–8mm，卡扣系统。
- 适用于浴室、厨房和阳台。
- 费用：含安装每平方英尺 RM 8 – RM 18。
- 使用寿命：15–25年。

### 乙烯基地板（卷材或砖）

- 防水，但更薄更软。
- 可直接粘贴在现有瓷砖上。
- 适用于卧室和客厅。
- 费用：含安装每平方英尺 RM 5 – RM 12。
- 使用寿命：8–15年。

### 强化地板（HDF/纤维板芯）

- **不防水** ——木质芯遇水膨胀。
- 表面坚硬耐刮。
- 仅适用于干燥空间（卧室、客厅、办公室）。
- 费用：含安装每平方英尺 RM 6 – RM 14。
- 使用寿命：10–20年（保持干燥的前提下）。

---

### 快速对比

| 因素 | SPC | 乙烯基 | 强化地板 |
|------|-----|--------|---------|
| 防水 | ✅ 是 | ✅ 是 | ❌ 否 |
| 适用浴室 | ✅ | ✅ | ❌ |
| 耐刮性 | 良好 | 中等 | 出色 |
| 脚感 | 坚实 | 柔软 | 硬实 |
| 费用 | 中等 | 最便宜 | 实惠 |

---

### KL Servis Rumah 建议

- **全屋含浴室：** SPC——一种材料覆盖所有空间。
- **仅卧室，预算有限：** 乙烯基。
- **家庭办公室或干燥空间：** 强化地板足够。

**WhatsApp 我们您的地面面积，获取含安装的固定报价。**`
    }
  },

  "how-to-fix-a-leaking-roof-in-kl": {
    ms: {
      slug: "cara-baik-bumbung-bocor-di-kl",
      title: "Cara Membaiki Bumbung Bocor di KL & Selangor (Panduan Praktikal)", category: "Kalis Air",
      excerpt: "Kebocoran bumbung boleh merosakkan siling, dinding dan pendawaian. Berikut cara mengenal pasti punca dan penyelesaiannya.",
      metaTitle: "Cara Membaiki Bumbung Bocor di KL — Panduan", metaDesc: "Bumbung bocor merosakkan rumah? Panduan lengkap mengenal pasti punca dan penyelesaian kalis air bumbung.",
      content: `Kebocoran bumbung di Malaysia biasanya berpunca daripada satu daripada empat masalah: jubin bumbung retak atau beralih, flashing rosak, membran bumbung rata gagal, atau longkang tersumbat.

Berikut panduan **KL Servis Rumah** untuk mengenal pasti dan membaiki kebocoran bumbung anda.

---

### 4 punca biasa kebocoran bumbung

1. **Jubin retak atau beralih:** Paling biasa di rumah teres lama. Angin kuat dan haba boleh menggerakkan jubin.
2. **Flashing rosak:** Di sekitar serombong, paip ventilasi dan persimpangan dinding. Sealant gagal dari masa ke masa.
3. **Membran bumbung rata gagal:** Bumbung rata kongdominium dan sambungan sering mengalami genangan air yang memecahkan membran.
4. **Longkang tersumbat:** Air melimpah dan masuk di bawah bumbung atau ke dalam dinding.

---

### Penyelesaian

- **Jubin:** Gantikan jubin rosak, periksa dan betulkan underlayment. Kos: RM 250 – RM 800.
- **Flashing:** Buang sealant lama, pasang flashing baharu dengan sealant poliuretana berkualiti. Kos: RM 350 – RM 1,200.
- **Membran bumbung rata:** Bersihkan, keringkan, sapu primer, pasang membran baharu (PU atau bitumen). Kos: RM 15 – RM 35 per kps.
- **Longkang:** Bersihkan, periksa kemiringan, pasang jaring daun jika perlu. Kos: RM 150 – RM 500.

---

### Tanda amaran awal

- Tompok air pada siling selepas hujan.
- Cat mengelupas di bahagian atas dinding.
- Bau hapak di ruang tertentu.

Jangan tunggu siling runtuh. **WhatsApp kami foto kawasan yang terjejas untuk nasihat pantas dan sebut harga tetap.**`
    },
    zh: {
      slug: "ji-long-ru-he-xiu-fu-lou-shui-wu-ding", title: "吉隆坡和雪兰莪屋顶漏水修复指南（实用版）", category: "防水工程",
      excerpt: "屋顶漏水会损坏天花板、墙壁和电线。以下是识别原因和解决方案的方法。",
      metaTitle: "吉隆坡屋顶漏水修复指南", metaDesc: "屋顶漏水损害房屋？完整了解如何识别原因和屋顶防水解决方案。",
      content: `马来西亚的屋顶漏水通常源于四个问题之一：屋顶瓦片破裂或移位、泛水损坏、平屋顶防水层失效或排水沟堵塞。

以下是 **KL Servis Rumah** 识别和修复屋顶漏水的指南。

---

### 4种常见漏水原因

1. **瓦片破裂或移位：** 旧排屋最常见。强风和高温可使瓦片移动。
2. **泛水损坏：** 烟囱、通风管和墙壁交接处。密封材料随时间老化。
3. **平屋顶防水层失效：** 公寓和加建部分的平屋顶常有积水，破坏防水层。
4. **排水沟堵塞：** 水溢出进入屋顶下方或墙壁内。

---

### 解决方案

- **瓦片：** 更换损坏瓦片，检查和修复底层。费用：RM 250 – RM 800。
- **泛水：** 清除旧密封材料，安装新泛水并使用优质聚氨酯密封胶。费用：RM 350 – RM 1,200。
- **平屋顶防水层：** 清洁、干燥、涂底漆、安装新防水膜（PU或沥青）。费用：每平方英尺 RM 15 – RM 35。
- **排水沟：** 清理、检查坡度、必要时安装防叶网。费用：RM 150 – RM 500。

---

### 早期警告信号

- 雨后天花板出现水渍。
- 墙壁上部油漆剥落。
- 特定区域有霉味。

不要等到天花板塌落。**WhatsApp 我们受影响区域的照片，获取快速建议和固定报价。**`
    }
  },

  "kitchen-cabinet-material-guide-malaysia": {
    ms: {
      slug: "panduan-bahan-kabinet-dapur-malaysia",
      title: "Panduan Bahan Kabinet Dapur: Mana Satu Tahan Lama di Malaysia?", category: "Pengubahsuaian",
      excerpt: "Melamin, plywood, stainless steel atau HPL? Setiap bahan kabinet dapur bertindak balas berbeza terhadap haba, kelembapan dan kegunaan harian.",
      metaTitle: "Panduan Bahan Kabinet Dapur Malaysia — Tahan Lama", metaDesc: "Bahan kabinet dapur mana paling tahan di Malaysia? Panduan lengkap melamin, plywood, stainless steel dan HPL.",
      content: `Dapur Malaysia bekerja keras — memasak harian, kelembapan tinggi, dan tumpahan kerap. Bahan kabinet yang salah boleh menggelembung, mengelupas atau berkarat dalam beberapa tahun.

Berikut panduan **KL Servis Rumah** untuk memilih bahan kabinet yang betul.

---

### Bahan badan kabinet

- **Plywood (kayu lapis):** Pilihan terbaik untuk dapur Malaysia. Tahan kelembapan lebih baik daripada MDF, memegang skru dengan kuat. Kos: RM 400 – RM 800 per kaki lari.
- **Melamin pada MDF:** Lebih murah tetapi mengembang jika basah. Sesuai untuk dapur kering atau rumah sewa. Kos: RM 250 – RM 500 per kaki lari.
- **Stainless steel:** Paling tahan lama, paling mudah dibersihkan, paling mahal. Sesuai untuk dapur komersial atau serius. Kos: RM 1,200 – RM 2,500 per kaki lari.
- **PVC foam board:** Kalis air 100%, ringan, tidak sekuat plywood. Kos: RM 350 – RM 650 per kaki lari.

### Bahan pintu/kemasan

- **HPL (High Pressure Laminate):** Tahan calar, pelbagai warna, paling popular.
- **Acrylic:** Kemasan kaca tinggi, cantik tetapi mudah calar.
- **Cat duco:** Kemasan premium, boleh warna custom, lebih mahal.
- **Melamin:** Paling mampu milik, terhad pilihan warna, tidak tahan calar.

---

### Kos kabinet dapur typical di KL (2026)

- L-shape kecil (8–10 kaki, melamin): RM 4,500 – RM 8,000
- L-shape sederhana (10–14 kaki, HPL pada plywood): RM 8,000 – RM 16,000
- U-shape besar (HPL premium): RM 16,000 – RM 30,000
- Stainless steel penuh: RM 25,000 – RM 50,000+

---

### 5 soalan sebelum memesan

1. Bahan badan apa? (Tolak MDF jika dapur anda basah.)
2. Engsend dan rel jenama apa? (Blum atau Hettich = kualiti.)
3. Jaminan berapa lama?
4. Adakah pengangkutan dan pemasangan termasuk?
5. Boleh tunjuk projek siap di kawasan saya?

**WhatsApp kami ukuran dapur untuk sebut harga kabinet percuma.**`
    },
    zh: {
      slug: "ma-lai-xi-ya-chu-fang-gui-ban-cai-liao-zhi-nan", title: "厨房柜体材料指南：哪种在马来西亚最耐用？", category: "装修工程",
      excerpt: "三聚氰胺、胶合板、不锈钢还是HPL？每种厨房柜材料对热量、湿度和日常使用的反应不同。",
      metaTitle: "马来西亚厨房柜体材料指南——耐用性", metaDesc: "哪种厨房柜材料在马来西亚最耐用？三聚氰胺、胶合板、不锈钢和HPL的完整指南。",
      content: `马来西亚厨房使用强度大——每天烹饪、高湿度和频繁泼溅。错误的柜体材料可能在几年内膨胀、脱层或生锈。

以下是 **KL Servis Rumah** 选择正确柜体材料的指南。

---

### 柜体材料

- **胶合板：** 马来西亚厨房的最佳选择。耐潮性优于MDF，握钉力强。费用：每英尺 RM 400 – RM 800。
- **MDF贴三聚氰胺：** 更便宜但遇水膨胀。适合干燥厨房或出租房。费用：每英尺 RM 250 – RM 500。
- **不锈钢：** 最耐用、最易清洁、最贵。适合商业厨房或重度烹饪。费用：每英尺 RM 1,200 – RM 2,500。
- **PVC发泡板：** 100%防水、轻便、强度不如胶合板。费用：每英尺 RM 350 – RM 650。

### 门板/饰面材料

- **HPL（高压层压板）：** 耐刮、颜色丰富、最流行。
- **亚克力：** 高光效果、美观但易刮花。
- **烤漆：** 高端饰面、可定制颜色、较贵。
- **三聚氰胺：** 最经济、颜色选择有限、不耐刮。

---

### 吉隆坡厨房柜典型费用（2026年）

- 小型L型（8–10英尺，三聚氰胺）：RM 4,500 – RM 8,000
- 中型L型（10–14英尺，胶合板+HPL）：RM 8,000 – RM 16,000
- 大型U型（高端HPL）：RM 16,000 – RM 30,000
- 全不锈钢：RM 25,000 – RM 50,000+

---

### 订购前问5个问题

1. 柜体用什么材料？（如果厨房潮湿，排除MDF。）
2. 铰链和导轨什么品牌？（Blum或Hettig = 品质。）
3. 保修多久？
4. 运输和安装是否包含？
5. 能否展示本区已完工项目？

**WhatsApp 我们您的厨房尺寸，获取免费柜体报价。**`
    }
  },

  "monsoon-home-prep-klang-valley": {
    ms: {
      slug: "persediaan-rumah-monsun-klang-valley",
      title: "Persediaan Rumah Monsun: Lindungi Kediaman Anda di Klang Valley", category: "Musiman",
      excerpt: "Musim tengkujuh membawa hujan lebat, angin kuat dan banjir kilat. Berikut senarai semak lengkap untuk melindungi rumah anda.",
      metaTitle: "Persediaan Rumah Monsun Klang Valley — Senarai Semak", metaDesc: "Lindungi rumah anda dari musim tengkujuh. Senarai semak lengkap: bumbung, longkang, kalis air dan persediaan banjir.",
      content: `Musim tengkujuh di Malaysia biasanya dari November hingga Mac, membawa hujan lebat berpanjangan yang menguji setiap aspek rumah anda — bumbung, longkang, dinding luar dan saliran.

Berikut senarai semak **KL Servis Rumah** untuk memastikan rumah anda selamat sepanjang musim tengkujuh.

---

### 2 minggu SEBELUM musim tengkujuh

1. **Periksa bumbung:** Gantikan jubin retak, betulkan flashing longgar, bersihkan longkang.
2. **Uji saliran:** Tuang baldi air di setiap longkang. Jika air bertakung, bersihkan atau laraskan kemiringan.
3. **Periksa calk luar:** Isi mana-mana celah di sekitar tingkap, pintu dan persimpangan dinding.
4. **Potong pokok:** Cabang yang menggantung boleh patah dan merosakkan bumbung.
5. **Periksa membran kalis air balki:** Jika gelembung atau retak, jadualkan pembaikan.

---

### Semasa musim tengkujuh

- Periksa siling selepas hujan berat — tompok gelap = kebocoran aktif.
- Pastikan longkang tidak tersumbat daun.
- Sediakan baldi dan tuala lama di bawah kawasan siling yang disyaki.
- Jika paras banjir naik, pindahkan barang berharga ke tingkat atas.

---

### Selepas musim tengkujuh

- Bersihkan dan keringkan mana-mana kawasan yang banjir (dalam 48 jam untuk mengelakkan kulat).
- Periksa calk luar dan flashing — hujan lebat mungkin mendedahkan kelemahan baharu.
- Jadualkan pemeriksaan kalis air profesional jika anda melihat sebarang kebocoran.

---

### Servis persediaan musim tengkujuh KL Servis Rumah

- Pemeriksaan bumbung + longkang: **RM 150 – RM 350**
- Pembersihan longkang menyeluruh: **RM 200 – RM 500**
- Pembaikan flashing: **RM 350 – RM 1,200**
- Kalis air balki / bumbung rata: **RM 15 – RM 35 per kps**

**WhatsApp kami untuk tempahan pemeriksaan sebelum musim tengkujuh.**`
    },
    zh: {
      slug: "ba-sheng-gu-yu-ji-fang-wu-fang-hu-zhi-nan", title: "雨季住宅防护指南：保护您的巴生谷住宅", category: "季节性",
      excerpt: "季风季节带来暴雨、强风和洪水。以下是保护房屋的完整清单。",
      metaTitle: "巴生谷雨季住宅防护——清单", metaDesc: "保护您的房屋免受季风影响。完整清单：屋顶、排水沟、防水和防洪准备。",
      content: `马来西亚的季风季节通常从11月到3月，带来持续暴雨，考验房屋的每个方面——屋顶、排水沟、外墙和排水系统。

以下是 **KL Servis Rumah** 确保您的房屋在季风季节安全的清单。

---

### 季风来临前2周

1. **检查屋顶：** 更换破裂瓦片，修复松动泛水，清理排水沟。
2. **测试排水：** 在每个排水口倒一桶水。如果积水，清理或调整坡度。
3. **检查外墙密封胶：** 填补窗户、门和墙壁交接处的所有缝隙。
4. **修剪树木：** 悬垂的树枝可能断裂损坏屋顶。
5. **检查阳台防水层：** 如果有起泡或裂纹，安排修复。

---

### 季风期间

- 暴雨后检查天花板——暗色斑点 = 主动漏水。
- 确保排水沟不被树叶堵塞。
- 在可疑天花板区域下方准备水桶和旧毛巾。
- 如果洪水水位上升，将贵重物品转移到楼上。

---

### 季风过后

- 清洁和干燥任何被淹区域（48小时内防霉）。
- 检查外墙密封胶和泛水——暴雨可能暴露新的弱点。
- 如果看到任何漏水，安排专业防水检查。

---

### KL Servis Rumah 雨季准备服务

- 屋顶+排水沟检查：**RM 150 – RM 350**
- 排水沟全面清理：**RM 200 – RM 500**
- 泛水修复：**RM 350 – RM 1,200**
- 阳台/平屋顶防水：每平方英尺 **RM 15 – RM 35**

**WhatsApp 我们预约季风前检查。**`
    }
  },

  "smart-lock-buying-guide-malaysia-2026": {
    ms: {
      slug: "panduan-beli-kunci-pintar-malaysia-2026",
      title: "Panduan Membeli Kunci Pintar 2026: Jenama, Ciri & Kos di Malaysia", category: "Elektrikal",
      excerpt: "Kunci pintar semakin popular di KL — tetapi ciri, keselamatan dan kos sangat berbeza. Panduan lengkap sebelum anda membeli.",
      metaTitle: "Panduan Kunci Pintar Malaysia 2026 — Jenama & Kos", metaDesc: "Kunci pintar popular di KL tetapi berbeza dari segi ciri dan keselamatan. Panduan lengkap jenama, kos dan pemasangan.",
      content: `Kunci pintar menjadi standard baharu untuk rumah di Klang Valley — terutamanya kondominium dan rumah pintar. Tetapi bukan semua kunci pintar sama.

Berikut panduan **KL Servis Rumah** untuk memilih kunci pintar yang betul.

---

### Jenis kunci pintar

- **Cap jari (biometrik):** Paling popular. Buka dalam 0.5 saat. Boleh simpan 50–200 cap jari.
- **Kad RFID:** Baik untuk pangsapuri dan pejabat. Kad boleh hilang atau disalin.
- **Kod PIN:** Baik sebagai sandaran. Pastikan tiada orang melihat anda menaip.
- **App telefon (Bluetooth/WiFi):** Paling canggih — log masuk jauh, notifikasi tetamu. Memerlukan WiFi stabil.
- **Kunci fizikal sandaran:** Semua kunci pintar moden ada kunci mekanikal sandaran — penting jika bateri mati.

---

### Jenama popular di Malaysia (2026)

- **Samsung / Zigbang** — jenama premium, antara muka bagus, RM 1,200 – RM 3,500.
- **Kaadas** — pertengahan, pelbagai ciri, RM 600 – RM 1,800.
- **Xiaomi / Aqara** — mampu milik, ekosistem rumah pintar baik, RM 350 – RM 900.
- **Epic (Korea)** — sangat dipercayai, jaminan kuat, RM 800 – RM 2,200.
- **Yale** — jenama lama, kukuh tetapi mahal, RM 1,500 – RM 4,000.

---

### Ciri yang perlu dicari

1. **Bateri sandaran / kuasa USB luaran** — jika bateri mati, anda masih boleh masuk.
2. **Amaran bateri lemah** — pemberitahuan 2 minggu sebelum mati.
3. **Mod tetamu** — kod sementara untuk pengunjung.
4. **Log akses** — lihat siapa masuk dan keluar.
5. **Auto-lock** — pintu terkunci sendiri selepas ditutup.

---

### Kos pemasangan

- Pemasangan standard (lubang sedia ada): **RM 120 – RM 250**.
- Pengubahsuaian pintu (potong lubang baharu): **RM 250 – RM 500** tambahan.
- Pintu kayu: paling mudah. Pintu logam: perlukan alat khas.

---

### Pemasangan profesional KL Servis Rumah

Setiap pemasangan datang dengan jaminan 30 hari dan ujian fungsi penuh. Kami memastikan pintu anda sejajar dengan betul sebelum memasang kunci — pintu condong boleh merosakkan mekanisme kunci pintar.

**WhatsApp kami model pintu dan kunci yang dipilih untuk sebut harga pemasangan.**`
    },
    zh: {
      slug: "ma-lai-xi-ya-2026-zhi-neng-men-suo-gou-mai-zhi-nan", title: "2026马来西亚智能锁购买指南：品牌、功能与费用", category: "电气工程",
      excerpt: "智能锁在吉隆坡越来越普及——但功能、安全性和费用差异很大。购买前完整指南。",
      metaTitle: "马来西亚智能锁指南2026——品牌与费用", metaDesc: "智能锁在吉隆坡流行但功能和安全性各异。品牌、费用和安装的完整指南。",
      content: `智能锁正成为巴生谷住宅的新标准——尤其是公寓和智能家居。但并非所有智能锁都一样。

以下是 **KL Servis Rumah** 选择正确智能锁的指南。

---

### 智能锁类型

- **指纹（生物识别）：** 最流行。0.5秒开锁。可存储50–200个指纹。
- **RFID卡：** 适合公寓和办公室。卡可能丢失或被复制。
- **密码：** 适合作为备用。确保无人看到您输入。
- **手机App（蓝牙/WiFi）：** 最先进——远程开锁、访客通知。需要稳定WiFi。
- **备用机械钥匙：** 所有现代智能锁都有备用机械钥匙——电池没电时必不可少。

---

### 马来西亚热门品牌（2026年）

- **Samsung / Zigbang** ——高端品牌、界面好、RM 1,200 – RM 3,500。
- **Kaadas** ——中端、功能丰富、RM 600 – RM 1,800。
- **小米 / Aqara** ——经济实惠、智能家居生态好、RM 350 – RM 900。
- **Epic（韩国）** ——非常可靠、保修强、RM 800 – RM 2,200。
- **Yale** ——老牌、结实但贵、RM 1,500 – RM 4,000。

---

### 需要寻找的功能

1. **备用电池/外部USB供电** ——电池没电仍能进入。
2. **低电量警告** ——耗尽前2周通知。
3. **访客模式** ——临时密码给访客。
4. **出入记录** ——查看谁进出。
5. **自动上锁** ——关门后自动锁定。

---

### 安装费用

- 标准安装（现有锁孔）：**RM 120 – RM 250**。
- 门改装（开新孔）：额外 **RM 250 – RM 500**。
- 木门：最容易。金属门：需要特殊工具。

---

### KL Servis Rumah 专业安装

每次安装附30天保修和全面功能测试。我们在安装锁之前确保门对齐正确——门歪斜会损坏智能锁机构。

**WhatsApp 我们您的门型号和选定的锁，获取安装报价。**`
    }
  },

  "cctv-installation-buying-guide-kl": {
    ms: {
      slug: "panduan-beli-pasang-cctv-kl",
      title: "Panduan Pembelian & Pemasangan CCTV di KL (2026)", category: "Elektrikal",
      excerpt: "Sistem CCTV yang betul untuk rumah atau kedai anda di KL — jenis kamera, kos pemasangan dan apa yang perlu dicari.",
      metaTitle: "Panduan CCTV KL & Selangor — Belian & Pemasangan", metaDesc: "Sistem CCTV terbaik untuk rumah atau kedai di KL? Panduan lengkap jenis kamera, kos pemasangan dan ciri penting.",
      content: `CCTV telah menjadi keperluan asas untuk rumah dan perniagaan di Klang Valley. Tetapi memilih sistem yang betul boleh memeningkan — HD, 4K, IP, analog, PoE, WiFi, penyimpanan awan vs tempatan.

Berikut panduan **KL Servis Rumah** untuk memilih dan memasang CCTV yang betul.

---

### Jenis kamera

- **IP (kamera internet):** Kualiti terbaik, resolusi tinggi, boleh diakses dari telefon. Paling popular untuk rumah dan pejabat moden.
- **Analog (HDCVI/TVI/AHD):** Lebih murah, baik untuk sistem lama. Memerlukan DVR.
- **PTZ (Pan-Tilt-Zoom):** Boleh putar dan zum. Sesuai untuk kawasan besar seperti gudang atau tempat letak kereta.
- **Bullet vs dome:** Bullet untuk luar (lebih ketara), dome untuk dalam (lebih diskret).

---

### Ciri penting

1. **Resolusi:** Minimum 2MP (1080p), ideal 4MP–8MP (4K).
2. **Penglihatan malam:** IR sekurang-kurangnya 30 meter.
3. **Kalis cuaca:** IP66 atau IP67 untuk luar.
4. **Pengesanan gerakan:** Mengurangkan rakaman tidak perlu.
5. **Audio dua hala:** Bercakap melalui kamera — berguna untuk pintu depan.
6. **Penyimpanan:** NVR tempatan (lebih selamat) atau awan (lebih mudah).

---

### Kos typical di KL (2026)

| Pakej | Kos |
|-------|-----|
| 4 kamera asas (1080p, DVR, pasang) | RM 1,200 – RM 2,500 |
| 8 kamera sederhana (4MP, NVR, pasang) | RM 3,000 – RM 6,000 |
| 16 kamera premium (4K, PoE, NVR) | RM 7,000 – RM 15,000 |
| Kamera tambahan (setiap unit, pasang) | RM 200 – RM 600 |

---

### Di mana letakkan kamera

- **Pintu depan / pintu masuk** — paling penting.
- **Garaj / tempat letak kereta.**
- **Halaman belakang / balki.**
- **Kawasan perniagaan:** kaunter, pintu masuk, stok.

---

### Pemasangan profesional KL Servis Rumah

Setiap pemasangan termasuk kabel tersembunyi, konfigurasi app telefon dan latihan pengguna. Jaminan kerja 12 bulan.

**WhatsApp kami pelan lantai anda dan bilangan kamera yang diingini untuk sebut harga tetap.**`
    },
    zh: {
      slug: "ji-long-cctv-an-zhuang-gou-mai-zhi-nan", title: "吉隆坡CCTV安装与购买指南（2026年）", category: "电气工程",
      excerpt: "为您的吉隆坡住宅或商铺选择正确的CCTV系统——摄像头类型、安装费用和需要关注的功能。",
      metaTitle: "吉隆坡和雪兰莪CCTV指南——购买与安装", metaDesc: "吉隆坡住宅或商铺最适合的CCTV系统？摄像头类型、安装费用和重要功能的完整指南。",
      content: `CCTV已成为巴生谷住宅和商业的基本需求。但选择正确的系统可能令人头疼——高清、4K、IP、模拟、PoE、WiFi、云存储vs本地存储。

以下是 **KL Servis Rumah** 选择和安装正确CCTV的指南。

---

### 摄像头类型

- **IP（网络摄像头）：** 最佳质量、高分辨率、可从手机访问。现代住宅和办公室最流行。
- **模拟（HDCVI/TVI/AHD）：** 更便宜、适合旧系统。需要DVR。
- **PTZ（云台变焦）：** 可旋转和变焦。适合仓库或停车场等大面积区域。
- **枪机vs半球：** 枪机用于室外（更显眼），半球用于室内（更隐蔽）。

---

### 重要功能

1. **分辨率：** 最低2MP（1080p），理想4MP–8MP（4K）。
2. **夜视：** 至少30米红外。
3. **防水等级：** 室外IP66或IP67。
4. **运动检测：** 减少不必要的录像。
5. **双向语音：** 通过摄像头通话——前门很有用。
6. **存储：** 本地NVR（更安全）或云存储（更方便）。

---

### 吉隆坡典型费用（2026年）

| 套餐 | 费用 |
|------|------|
| 4个基础摄像头（1080p，DVR，含安装） | RM 1,200 – RM 2,500 |
| 8个中端摄像头（4MP，NVR，含安装） | RM 3,000 – RM 6,000 |
| 16个高端摄像头（4K，PoE，NVR） | RM 7,000 – RM 15,000 |
| 额外摄像头（每台含安装） | RM 200 – RM 600 |

---

### 摄像头安装位置

- **前门/入口** ——最重要。
- **车库/停车位。**
- **后院/阳台。**
- **商业区域：** 柜台、入口、仓库。

---

### KL Servis Rumah 专业安装

每次安装包括隐藏走线、手机App配置和用户培训。12个月施工保修。

**WhatsApp 我们您的平面图和期望的摄像头数量，获取固定报价。**`
    }
  },

  "auto-gate-installation-guide-malaysia": {
    ms: {
      slug: "panduan-pemasangan-auto-gate-malaysia",
      title: "Panduan Pemasangan Auto Gate: Jenis, Kos & Jenama di Malaysia", category: "Elektrikal",
      excerpt: "Auto gate menambah keselamatan dan kemudahan. Panduan lengkap jenis motor, kos pemasangan dan jenama terbaik di Malaysia.",
      metaTitle: "Panduan Auto Gate Malaysia — Jenis, Kos & Jenama", metaDesc: "Panduan lengkap auto gate di Malaysia: jenis motor, kos pemasangan, jenama terbaik dan ciri keselamatan.",
      content: `Auto gate (pagar automatik) menambah keselamatan dan kemudahan kepada rumah tanah di Klang Valley. Tetapi memilih jenis motor yang betul dan pemasang yang dipercayai sangat penting.

Berikut panduan **KL Servis Rumah** untuk memasang auto gate yang betul.

---

### 3 jenis motor utama

**Ayunan (motor lengan)**
- Motor menolak atau menarik daun pagar dari titik engsel.
- Sesuai untuk pagar ayunan standard.
- Kos typical dipasang: **RM 2,200 – RM 3,800** sepasang.

**Gelangsar (motor linear)**
- Motor memandu rak di sepanjang bingkai pagar.
- Sesuai untuk pagar lebar atau ruang terhad.
- Kos typical dipasang: **RM 2,800 – RM 4,600**.

**Bawah tanah (motor terbenam)**
- Motor tersembunyi di bawah tanah di titik engsel.
- Estetik paling bersih — tiada lengan kelihatan.
- Kos typical dipasang: **RM 4,500 – RM 7,800** sepasang.

---

### Jenama popular di Malaysia

- **SEIP** — jenama Itali pasaran pertengahan yang kukuh.
- **DEA** — Itali, alat ganti mudah didapati.
- **AutoGate Malaysia (AGM)** — sokongan tempatan, mampu milik.
- **DASPI** — binaan Eropah, jaminan lebih panjang.
- **BFT** — Itali premium, kebolehpercayaan terbaik.

---

### 4 ciri keselamatan wajib

1. **Beam fotosel** — hentikan pagar secara automatik jika seseorang melintas.
2. **Jalur getah keselamatan** — berhenti apabila tersentuh.
3. **Mula perlahan / berhenti perlahan** — mengurangkan keausan mekanikal.
4. **Sandaran bateri UPS atau 12V** — 30–60 minit sandaran semasa cuti kuasa.

---

### Jadual pemasangan

- Pemeriksaan tapak: 30–45 minit.
- Kerja sivik (jika perlu): 1–2 hari.
- Pemasangan motor + kawalan: 4–6 jam.
- Ujian + latihan pengguna: 30 minit.

Kebanyakan pemasangan standard siap dalam **1 hari**.

---

### Harga servis KL Servis Rumah 2026

| Servis | Kos |
|--------|-----|
| Pemasangan motor ayunan baharu (sepasang) | RM 2,200 – RM 3,800 |
| Pemasangan motor gelangsar | RM 2,800 – RM 4,600 |
| Pemasangan motor bawah tanah | RM 4,500 – RM 7,800 |
| Servis penyelenggaraan tahunan | RM 180 – RM 350 |
| Penggantian remote + pemasangan | RM 120 – RM 380 |
| Penggantian motor + papan kawalan | RM 850 – RM 2,200 |

Semua kerja termasuk jaminan kerja 12 bulan dan jaminan motor pengeluar.

---

### Bersedia memasang?

WhatsApp kami foto pagar anda + foto driveway dari jalan. Kami akan nasihatkan jenis motor yang betul dan berikan sebut harga tetap dalam 24 jam.`
    },
    zh: {
      slug: "ma-lai-xi-ya-zi-dong-men-an-zhuang-zhi-nan", title: "马来西亚自动门安装指南：类型、费用与品牌", category: "电气工程",
      excerpt: "自动门增加安全性和便利性。完整指南涵盖电机类型、安装费用和马来西亚最佳品牌。",
      metaTitle: "马来西亚自动门指南——类型、费用与品牌", metaDesc: "马来西亚自动门完整指南：电机类型、安装费用、最佳品牌和安全功能。",
      content: `自动门为巴生谷的排屋增加安全性和便利性。但选择正确的电机类型和可靠的安装商至关重要。

以下是 **KL Servis Rumah** 正确安装自动门的指南。

---

### 3种主要电机类型

** swing臂式（臂电机）**
- 电机从铰链点推或拉门扇。
- 适合标准平开门。
- 典型安装费用：每对 **RM 2,200 – RM 3,800**。

**滑动式（直线电机）**
- 电机沿门框驱动齿条。
- 适合宽门或空间有限的地方。
- 典型安装费用：**RM 2,800 – RM 4,600**。

**地下式（埋入电机）**
- 电机隐藏在铰链点地下。
- 最美观——无可见臂。
- 典型安装费用：每对 **RM 4,500 – RM 7,800**。

---

### 马来西亚热门品牌

- **SEIP** ——可靠的意大利中端品牌。
- **DEA** ——意大利，配件易得。
- **AutoGate Malaysia (AGM)** ——本地支持、经济实惠。
- **DASPI** ——欧洲制造、保修更长。
- **BFT** ——意大利高端、可靠性最佳。

---

### 4个必备安全功能

1. **光电对射束** ——有人穿过时自动停止。
2. **橡胶安全条** ——触碰即停。
3. **缓启/缓停** ——减少机械磨损。
4. **UPS或12V电池备份** ——停电时30–60分钟备用。

---

### 安装时间表

- 现场勘查：30–45分钟。
- 土建工程（如需）：1–2天。
- 电机+控制器安装：4–6小时。
- 测试+用户培训：30分钟。

大多数标准安装**1天**完成。

---

### KL Servis Rumah 2026年服务价格

| 服务 | 费用 |
|------|------|
| 新装摆臂电机（一对） | RM 2,200 – RM 3,800 |
| 新装滑动电机 | RM 2,800 – RM 4,600 |
| 新装地下电机 | RM 4,500 – RM 7,800 |
| 年度保养服务 | RM 180 – RM 350 |
| 遥控器更换+配对 | RM 120 – RM 380 |
| 电机+控制板更换 | RM 850 – RM 2,200 |

所有工作含12个月施工保修和厂家电机保修。

---

### 准备安装？

WhatsApp 我们您的门照片+从路上拍摄的 driveway 照片。我们会在24小时内建议正确的电机类型并提供固定报价。`
    }
  },

  "when-to-repaint-condo-vs-repaint-terrace-house": {
    ms: {
      slug: "cat-semula-kondo-vs-rumah-teres",
      title: "Cat Semula Kondo vs Rumah Teres: Apa Beza?", category: "Pengecatan",
      excerpt: "Skop, peraturan JMB, pilihan cat dan garis masa semuanya berbeza. Berikut yang setiap pemilik rumah di KL perlu tahu sebelum cat semula.",
      metaTitle: "Cat Semula Kondo vs Rumah Teres — Panduan KL & Selangor", metaDesc: "Melukis kondo vs rumah teres di KL: bagaimana skop, peraturan JMB, pilihan cat, kos dan garis masa berbeza.",
      content: `Perkataan "cat semula" merangkumi kerja yang sangat berbeza bergantung pada sama ada anda tinggal di kondominium strata atau rumah teres tanah. Berikut yang jurucat KL Servis Rumah jelaskan kepada setiap pelanggan sebelum menyebut harga.

---

### Perbezaan skop

**Cat semula kondo (900–1200 kps typical):**
- Dinding dalaman + siling sahaja.
- Tiada kerja luar (fasad tanggungjawab JMB).
- Dinding balki: semak jika tanggungjawab anda.
- Garis masa typical: 2–4 hari.

**Cat semula rumah teres:**
- Dinding dalaman DAN luar + siling.
- Dinding sempadan + tiang pintu pagar sering termasuk.
- Trim bumbung, muka perparitan dan eves.
- Garis masa typical: 5–10 hari bergantung bilangan tingkat.

---

### Perbandingan kos (Klang Valley 2026)

| Kerja | Kos |
|-------|-----|
| Cat semula dalaman kondo 900 kps | RM 3,200 – RM 5,500 |
| Cat semula dalaman kondo 1,200 kps | RM 4,200 – RM 6,800 |
| Teres satu tingkat dalaman sahaja | RM 3,800 – RM 5,800 |
| Teres satu tingkat dalaman + luar | RM 8,500 – RM 14,000 |
| Teres dua tingkat dalaman + luar | RM 12,500 – RM 22,000 |

---

### Peraturan JMB (khusus kondo)

Setiap kondo ada peraturan berbeza. Keperluan biasa:

- Deposit kontraktor (RM 300–2,000 boleh dikembalikan).
- Tempahan lif barang (biasanya 1–3 hari awal).
- Waktu kerja (biasanya 9 pagi – 6 petang, tiada Ahad/cuti).
- Perlindungan lif.
- Pembersihan kawasan biasa selepas setiap hari.

Kami uruskan semua kertas kerja JMB untuk pelanggan cat semula kondo — termasuk dalam sebut harga.

---

### 5 soalan sebelum menempah

1. Adakah anda memasukkan primer/sealer?
2. Gred cat apa yang anda sebutkan?
3. Berapa lapis topcoat? (Minimum 2, 3 untuk gelap atau luar.)
4. Adakah anda uruskan deposit dan kertas kerja JMB?
5. Apakah jaminan kerja? (Minimum 6–12 bulan bertulis.)

---

### Bersedia cat semula?

WhatsApp kami alamat unit + beberapa foto dinding terburuk anda. Kami akan kembali dalam 24 jam dengan anggaran kasar dan tempah lawatan tapak untuk sebut harga tepat.`
    },
    zh: {
      slug: "gong-yu-chong-shua-yu-pai-wu-chong-shua-qu-bie", title: "公寓重刷vs排屋重刷：有什么区别？", category: "油漆服务",
      excerpt: "工程范围、JMB规定、油漆选择和工期都不同。以下是每位吉隆坡业主在重刷前应该知道的。",
      metaTitle: "公寓vs排屋重刷指南——吉隆坡和雪兰莪", metaDesc: "在吉隆坡刷公寓vs排屋：工程范围、JMB规定、油漆选择、费用和工期有何不同。",
      content: `"重刷"这个词的含义取决于您住的是分层公寓还是排屋，差异非常大。以下是KL Servis Rumah的油漆工在报价前向每位客户解释的内容。

---

### 工程范围差异

**公寓重刷（典型900–1200平方英尺）：**
- 仅室内墙壁+天花板。
- 无外墙工程（外立面由JMB负责）。
- 阳台墙壁：确认是否由您负责。
- 典型工期：2–4天。

**排屋重刷：**
- 室内外墙壁+天花板。
- 围墙+门柱通常包括在内。
- 屋顶装饰线、排水沟面和屋檐。
- 典型工期：5–10天，取决于层数。

---

### 费用对比（2026巴生谷）

| 工程 | 费用 |
|------|------|
| 900平方英尺公寓室内重刷 | RM 3,200 – RM 5,500 |
| 1,200平方英尺公寓室内重刷 | RM 4,200 – RM 6,800 |
| 单层排屋仅室内 | RM 3,800 – RM 5,800 |
| 单层排屋室内+室外 | RM 8,500 – RM 14,000 |
| 双层排屋室内+室外 | RM 12,500 – RM 22,000 |

---

### JMB规定（公寓特有）

每个公寓规定不同。常见要求：

- 承包商押金（RM 300–2,000可退还）。
- 货梯预约（通常提前1–3天）。
- 工作时间（通常9AM–6PM，周日/假日不工作）。
- 电梯保护。
- 每天公共区域清洁。

我们为公寓重刷客户处理所有JMB文件——包含在报价中。

---

### 预约前问5个问题

1. 是否包含底漆/封闭漆？
2. 报的是什么等级的油漆？
3. 几层面漆？（最少2层，深色或外墙3层。）
4. 是否处理JMB押金和文件？
5. 施工保修多久？（最少6–12个月书面。）

---

### 准备重刷了吗？

WhatsApp 我们您的单位地址+几面最差的墙壁照片。我们会在24小时内回复粗略估价并安排现场勘查获取精确报价。`
    }
  },

  "how-to-hire-honest-contractor-malaysia": {
    ms: {
      slug: "cara-upah-kontraktor-jujur-malaysia",
      title: "Cara Mengupah Kontraktor Rumah Yang Jujur di Malaysia (Panduan Tanda Amaran)", category: "Panduan",
      excerpt: "Tanda penipuan terbesar dalam perkhidmatan rumah Malaysia — dari sebut harga samar hingga tiada jaminan — dan soalan yang memaksa jawapan jujur.",
      metaTitle: "Cara Mengupah Kontraktor Jujur di Malaysia", metaDesc: "Elakkan penipuan renovasi dan pembaikan di Malaysia. 10 tanda amaran, 8 soalan wajib, dan penanda aras jaminan jujur.",
      content: `Setiap minggu kami bertemu pemilik rumah yang kontraktor sebelumnya menghilang di tengah kerja, menyebut harga "murah" kemudian menambah variasi, atau memberi "jaminan" lisan yang hilang apabila kebocoran kembali.

Berikut playbook KL Servis Rumah untuk mengupah kontraktor perkhidmatan rumah yang jujur di Malaysia.

---

### 10 tanda amaran untuk beredar

1. **Sebut harga melalui telefon dalam 30 saat** tanpa lawatan tapak dan tanpa foto.
2. **Tiada sebut harga bertulis terperinci** — hanya angka kasar "RM 8,000 untuk cat."
3. **Tunai sahaja, tiada invois** — anda tiada saluran jika apa-apa gagal.
4. **Deposit besar diperlukan** (50%+ sebelum mula).
5. **Garis masa samar** ("2 atau 3 minggu lah") tanpa tarikh milestone.
6. **Tiada pendaftaran SSM** atau enggan berkongsi nama syarikat.
7. **Jaminan lisan sahaja** — tidak pernah bertulis.
8. **Taktik tekanan**: "Harga istimewa hanya jika anda tandatangan hari ini."
9. **Sub-kontrak semuanya** — orang yang bertemu bukan orang yang buat kerja.
10. **Tiada portfolio kerja siap serupa** yang boleh ditunjukkan di kawasan anda.

---

### 8 soalan yang memaksa jawapan jujur

1. Boleh saya lihat 3 kerja siap di kawasan saya dalam 12 bulan lepas?
2. Bahan apa yang akan digunakan — jenama, gred, ketebalan?
3. Apakah kos terperinci — baris demi baris?
4. Apakah jaminan kerja — bertulis — dan apa yang dilindungi/dikecualikan?
5. Siapa yang akan di tapak setiap hari? Kru sama atau bergilir?
6. Apakah jadual pembayaran dikaitkan dengan milestone?
7. Apakah protokol untuk variasi / perubahan skop di tengah kerja?
8. Jika sesuatu gagal pada bulan ke-6, apakah proses panggilan balik?

---

### Penanda aras jaminan munasabah di Malaysia

- **Pengecatan:** 6–12 bulan terhadap mengelupas, melepuh, berkapur.
- **Plumbing:** 30 hari untuk pembaikan, 12 bulan untuk pemasangan peralatan baharu.
- **Kalis air:** 24–60 bulan bergantung skop.
- **Elektrikal:** 12 bulan + sijil pematuhan.
- **Pemasangan siling:** 90 hari untuk kerja (retak sendi, skru timbul).
- **Tukang:** 30 hari untuk pemasangan.
- **Renovasi penuh:** Minimum 12 bulan untuk kerja umum.

---

### Janji KL Servis Rumah

Setiap kerja kami datang dengan:

- Skop WhatsApp percuma dan pemeriksaan di tapak.
- Sebut harga bertulis terperinci dalam 3–5 hari bekerja.
- Harga tetap — tiada variasi tanpa persetujuan bertulis anda.
- Kru disaring latar belakang dengan insurans liabiliti awam.
- Jaminan bertulis mengikut penanda aras di atas.
- Panggilan balik selepas jualan — 1 lawatan percuma dalam 3 bulan.

Sedia mengupah seseorang yang memenuhi semua ini? WhatsApp kami dan kami akan balas dalam 60 minit semasa waktu operasi.`
    },
    zh: {
      slug: "ma-lai-xi-ya-ru-he-pin-qing-cheng-shi-cheng-bao-shang", title: "马来西亚如何聘请诚信住宅承包商（红旗指南）", category: "指南",
      excerpt: "马来西亚住宅服务中最大的骗局信号——从模糊报价到零保修——以及迫使对方诚实回答的问题。",
      metaTitle: "马来西亚如何聘请诚信承包商", metaDesc: "避免马来西亚装修和维修骗局。10个红旗信号、8个必问问题和诚实保修基准。",
      content: `每周我们都会遇到屋主，他们的上一个承包商在施工中途消失、报了"低价"然后不断加价，或者在漏水再次出现时就消失的口头"保证"。

以下是KL Servis Rumah在马来西亚聘请诚信住宅承包商的策略。

---

### 10个应该离开的红旗信号

1. **电话30秒内报价**——没有现场勘查也没有照片。
2. **没有详细的书面报价**——只有一个总数如"RM 8,000刷漆"。
3. **只收现金、不开发票**——出了问题毫无追索。
4. **要求大额押金**（开工前50%以上）。
5. **工期模糊**（"2、3个星期lah"），没有里程碑日期。
6. **没有SSM注册**或拒绝提供公司名称。
7. **只有口头保修**——从不书面。
8. **施压策略**："今天签约才有特价。"
9. **全部转包**——见你的人不是干活的人。
10. **没有本区类似已完成项目**可供展示。

---

### 8个迫使诚实回答的问题

1. 能否给我看近12个月本区的3个已完成项目？
2. 用什么材料——品牌、等级、厚度？
3. 逐项报价是多少？
4. 施工保修——书面的——覆盖和排除什么？
5. 每天实际到场的是谁？固定团队还是轮换？
6. 付款进度与什么里程碑挂钩？
7. 中途变更的程序是什么？
8. 如果第6个月出问题，回修流程具体怎样？

---

### 马来西亚合理保修基准

- **油漆：** 防剥落、起泡、粉化6–12个月。
- **水管：** 维修30天，新设备安装12个月。
- **防水：** 根据工程范围24–60个月。
- **电气：** 12个月+合规证书。
- **天花板安装：** 施工90天（接缝裂缝、螺钉弹出）。
- **维修：** 安装30天。
- **全面翻新：** 一般施工最少12个月。

---

### KL Servis Rumah 承诺

每个项目附带：

- 免费WhatsApp沟通和现场检查。
- 3–5个工作日内提供详细书面报价。
- 固定价格——未经您书面同意不做变更。
- 背景审查合格的团队，含公共责任险。
- 符合上述基准的书面保修。
- 售后回访——3个月内1次免费回访。

准备好找到符合所有条件的人？WhatsApp我们，营业时间内60分钟回复。`
    }
  },

  /* ──────────────────────────────────────────────────────────────────────
   * Batch 4 — plaster ceiling, skim coat, flooring, epoxy flooring, roof repair
   * ────────────────────────────────────────────────────────────────────── */
  "plaster-ceiling-design-build-kl": {
    ms: {
      slug: "reka-bina-siling-plaster-kl",
      title: "Reka Bentuk & Bina Siling Plaster di Kuala Lumpur & Selangor", category: "Siling",
      excerpt: "Siling plaster rata, bertingkat, L-box, cekung dan melengkung dengan lampu tersembunyi, direka dan dibina di seluruh KL & Selangor dari RM 10 / kaki persegi.",
      metaTitle: "Reka Bentuk & Bina Siling Plaster di KL & Selangor",
      metaDesc: "Reka bentuk & bina siling plaster di KL & Selangor — rata, bertingkat, L-box, cekung dan melengkung dengan lampu tersembunyi. Dari RM 10 / kaki persegi.",
      content: `Siling plaster mengubah bilik biasa menjadi ruang moden yang kemas — dan ia ialah salah satu naik taraf rumah paling popular di Kuala Lumpur dan Selangor. KL Servis Rumah menyediakan reka bentuk dan bina siling plaster di seluruh Lembah Klang, daripada siling rata ringkas hingga reka bentuk L-box bertingkat dengan lampu tersembunyi.

## Pilihan siling plaster

- **Siling plaster rata** — siling licin dan bersih untuk rupa minimalis dan moden.
- **Siling bertingkat & L-box** — reka bentuk bertingkat yang menambah kedalaman, selalunya dengan ceruk lampu tersembunyi.
- **Siling cekung & melengkung** — peralihan melengkung lembut untuk rasa premium.
- **Pembaikan & re-skim siling** — permukaan semula siling sedia ada yang retak atau haus.

## Mengapa memasang siling plaster?

- **Menyembunyikan pendawaian dan paip** — menyembunyikan kabel, saluran, dan paip di atas siling.
- **Rupa moden** — reka bentuk rata dan L-box memberikan bilik rasa bersih dan kontemporari.
- **Menambah nilai** — siling yang siap baik meningkatkan penampilan keseluruhan rumah.
- **Lampu tersembunyi** — reka bentuk L-box dan cekung membolehkan pencahayaan tidak langsung.

## Berapa kos siling plaster?

| Jenis siling | Harga permulaan |
|---|---|
| Siling plaster rata | Dari RM 10 / kaki persegi |
| Siling bertingkat & L-box | Dari RM 14 / kaki persegi |
| Siling cekung & melengkung | Dari RM 22 / kaki persegi |
| Pembaikan & re-skim siling | Dari RM 8 / kaki persegi |

## Dapatkan sebut harga siling plaster

KL Servis Rumah menyediakan reka bentuk dan bina siling plaster profesional di seluruh Kuala Lumpur dan Selangor. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "ji-long-po-xue-lang-e-shi-gao-tian-hua-ban-fu-wu",
      title: "吉隆坡与雪兰莪石膏板天花板设计与施工", category: "天花板工程",
      excerpt: "在吉隆坡与雪兰莪设计并施工平面、阶梯式、L形、凹圆和弧形石膏板天花板，带隐藏式照明，每平方英尺RM 10起。",
      metaTitle: "吉隆坡与雪兰莪石膏板天花板设计与施工",
      metaDesc: "吉隆坡与雪兰莪石膏板天花板设计与施工——平面、阶梯式、L形、凹圆和弧形，带隐藏式照明。每平方英尺RM 10起。",
      content: `石膏板天花板能将普通的房间变成一个精致、现代的空间——它是吉隆坡和雪兰莪最受欢迎的住宅升级项目之一。KL Servis Rumah 在巴生谷提供石膏板天花板设计与施工服务，从简单的平面吊顶到带隐藏式照明的阶梯式L形设计。

## 石膏板天花板选项

- **平面石膏板天花板** — 适合极简现代风格的干净平滑天花板。
- **阶梯式与L形吊顶** — 增加层次感的分层设计，通常带隐藏式灯槽。
- **凹圆与弧形天花板** — 柔和的弧形过渡，营造高端质感。
- **天花板修复与重新批灰** — 翻新开裂或磨损的现有天花板。

## 为什么安装石膏板天花板？

- **隐藏电线和管道** — 隐藏天花板上方的线缆、管道和管线。
- **现代外观** — 平面和L形设计为房间带来干净、现代的感觉。
- **增加价值** — 完工良好的天花板提升住宅整体外观。
- **隐藏式照明** — L形和凹圆设计实现优雅的间接照明。

## 石膏板天花板费用多少？

| 天花板类型 | 起步价 |
|---|---|
| 平面石膏板天花板 | 每平方英尺 RM 10 起 |
| 阶梯式与L形吊顶 | 每平方英尺 RM 14 起 |
| 凹圆与弧形天花板 | 每平方英尺 RM 22 起 |
| 天花板修复与重新批灰 | 每平方英尺 RM 8 起 |

## 获取石膏板天花板报价

KL Servis Rumah 在吉隆坡和雪兰莪全境提供专业的石膏板天花板设计与施工服务。WhatsApp联系我们获取免费报价。`
    }
  },
  "flat-plaster-ceiling-kl": {
    ms: {
      slug: "siling-plaster-rata",
      title: "Pemasangan Siling Plaster Rata di KL & Selangor", category: "Siling",
      excerpt: "Siling plaster rata yang licin dan bersih di seluruh KL & Selangor — menyembunyikan pendawaian, meratakan permukaan dan memberikan rupa moden, dari RM 10 / kaki persegi.",
      metaTitle: "Pemasangan Siling Plaster Rata di KL & Selangor",
      metaDesc: "Pasang siling plaster rata yang licin dan bersih di KL & Selangor — menyembunyikan pendawaian, meratakan permukaan dan memberikan rupa moden. Dari RM 10 / kaki persegi.",
      content: `Siling plaster rata ialah pilihan siling bersih dan ringkas yang digunakan kebanyakan rumah Malaysia. Ia menyembunyikan pendawaian dan permukaan tidak rata, meratakan siling lama, dan memberikan sebarang bilik kemasan licin dan moden. KL Servis Rumah menyediakan pemasangan siling plaster rata di seluruh Kuala Lumpur dan Selangor, dari RM 10 / kaki persegi.

## Apa itu siling plaster rata?

Ia ialah siling satu aras yang dibina dengan gypsum board pada rangka logam, dikemas dengan skim coat licin sedia cat. Tiada aras bertingkat atau alur — hanya permukaan bersih dan sekata.

## Mengapa pilih siling rata?

- **Rupa bersih dan moden** — licin dan sekata, padan dengan kebanyakan gaya dalaman moden.
- **Menyembunyikan kecacatan** — menutup retak, kesan, dan siling lama yang tidak rata.
- **Menyembunyikan pendawaian** — menyembunyikan kabel lampu dan elektrik di atas.
- **Ringkas dan menjimatkan** — pilihan siling plaster paling berpatutan.

## Berapa kos siling rata?

Siling plaster rata bermula dari RM 10 / kaki persegi. Kos akhir bergantung pada luas siling, keadaan permukaan, dan akses.

## Dapatkan sebut harga siling plaster rata

Untuk siling bersih dan moden yang menyembunyikan kecacatan dan pendawaian, siling plaster rata ialah pilihan yang sangat baik. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "ping-mian-shi-gao-tian-hua-ban",
      title: "吉隆坡与雪兰莪平面石膏板天花板安装", category: "天花板工程",
      excerpt: "在吉隆坡与雪兰莪安装干净平滑的平面石膏板天花板——隐藏电线、平整表面并让房间呈现现代感，每平方英尺RM 10起。",
      metaTitle: "吉隆坡与雪兰莪平面石膏板天花板安装",
      metaDesc: "在吉隆坡与雪兰莪安装干净平滑的平面石膏板天花板——隐藏电线、平整表面并让房间呈现现代感。每平方英尺RM 10起。",
      content: `平面石膏板天花板是大多数马来西亚家庭使用的干净、简洁的天花板选择。它隐藏电线和不平整的表面，平整旧天花板，并让任何房间呈现平滑、现代的外观。KL Servis Rumah 在吉隆坡和雪兰莪全境提供平面石膏板天花板安装服务，每平方英尺RM 10起。

## 什么是平面石膏板天花板？

它是一种单层天花板，由石膏板安装在金属框架上，再用平滑的批灰饰面完成，准备上漆。没有阶梯层次或凹槽——只有干净、均匀的表面。

## 为什么选择平面天花板？

- **干净现代的外观** — 平滑均匀，匹配大多数现代室内风格。
- **隐藏瑕疵** — 覆盖裂缝、污渍和不平整的旧天花板。
- **隐藏电线** — 隐藏上方的照明和电气线缆。
- **简单且经济实惠** — 最实惠的石膏板天花板选项。

## 平面天花板费用多少？

平面石膏板天花板每平方英尺RM 10起。最终费用取决于天花板面积、现有表面状况和施工条件。

## 获取平面石膏板天花板报价

想要隐藏瑕疵和电线的干净现代天花板，平面石膏板天花板是绝佳选择。WhatsApp联系我们获取免费报价。`
    }
  },
  "tiered-l-box-ceiling-kl": {
    ms: {
      slug: "siling-bertingkat-dan-l-box",
      title: "Pemasangan Siling Bertingkat & L-Box di KL & Selangor", category: "Siling",
      excerpt: "Tambahkan kedalaman dan keanggunan pada bilik dengan siling bertingkat atau L-box dan lampu tersembunyi di seluruh KL & Selangor, dari RM 14 / kaki persegi.",
      metaTitle: "Pemasangan Siling Bertingkat & L-Box di KL & Selangor",
      metaDesc: "Tambahkan kedalaman dan keanggunan dengan siling bertingkat atau L-box dan lampu tersembunyi di KL & Selangor. Pemasangan profesional dari RM 14 / kaki persegi.",
      content: `Siling bertingkat atau L-box ialah salah satu cara paling popular untuk memberikan ruang tamu atau bilik utama rupa premium dan moden. Reka bentuk bertingkat menambah kedalaman dan dimensi, dan apabila digabungkan dengan ceruk lampu tersembunyi, ia mencipta pencahayaan tidak langsung yang lembut dan elegan. KL Servis Rumah menyediakan pemasangan siling bertingkat dan L-box di seluruh Kuala Lumpur dan Selangor, dari RM 14 / kaki persegi.

## Apa itu siling L-box / bertingkat?

- **Siling L-box** — reka bentuk bertingkat di mana bahagian berpetak lebih rendah berjalan di sekeliling perimeter, biasanya dengan ceruk untuk lampu jalur LED.
- **Siling bertingkat** — pelbagai aras bertingkat yang menambah kedalaman dan memecahkan siling rata yang besar.
- **Ceruk lampu tersembunyi** — satu tanjakan ceruk yang menyembunyikan lampu jalur LED.

## Mengapa pilih siling bertingkat / L-box?

- **Menambah kedalaman** — aras bertingkat menjadikan bilik biasa terasa lebih dirancang dan premium.
- **Lampu tersembunyi** — cahaya tidak langsung lembut mencipta suasana santai dan moden.
- **Menentukan ruang** — L-box boleh memisahkan secara visual kawasan makan dari ruang tamu.

## Berapa kos siling L-box?

Siling bertingkat & L-box bermula dari RM 14 / kaki persegi. Kos akhir bergantung pada luas siling, kerumitan reka bentuk, dan sama ada lampu tersembunyi termasuk.

## Dapatkan sebut harga siling bertingkat / L-box

Tambahkan kedalaman, keanggunan, dan lampu tersembunyi lembut pada rumah anda. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "ti-ceng-l-xing-tian-hua-ban",
      title: "吉隆坡与雪兰莪阶梯式与L形吊顶安装", category: "天花板工程",
      excerpt: "用阶梯式或L形吊顶配合隐藏式照明，为房间增添层次感和优雅气质，每平方英尺RM 14起。",
      metaTitle: "吉隆坡与雪兰莪阶梯式与L形吊顶安装",
      metaDesc: "用阶梯式或L形吊顶配合隐藏式照明，为房间增添层次感和优雅气质。专业安装，每平方英尺RM 14起。",
      content: `阶梯式或L形吊顶是让客厅或主卧呈现高端现代感的最受欢迎方式之一。分层设计增加层次感和立体感，配合隐藏式灯槽，营造柔和、优雅的间接照明。KL Servis Rumah 在吉隆坡和雪兰莪全境提供阶梯式和L形吊顶安装服务，每平方英尺RM 14起。

## 什么是L形/阶梯式吊顶？

- **L形吊顶** — 一种分层设计，其中较低的部分沿周边环绕，通常带隐藏式LED灯带槽。
- **阶梯式吊顶** — 多个阶梯层次，增加深度并打破大面积的平面天花板。
- **隐藏式灯槽** — 一个凹陷的搁板，隐藏LED灯带以进行间接照明。

## 为什么选择阶梯式/L形吊顶？

- **增加层次感** — 阶梯层次让普通的房间感觉更有设计感和高级感。
- **隐藏式照明** — 柔和的间接光营造放松、现代的氛围。
- **界定空间** — L形吊顶可以在视觉上分隔用餐区和客厅。

## L形吊顶费用多少？

阶梯式与L形吊顶每平方英尺RM 14起。最终费用取决于天花板面积、设计复杂度和是否包含隐藏式照明。

## 获取阶梯式/L形吊顶报价

用阶梯式或L形吊顶配合柔和的隐藏式照明，为您的家增添层次感。WhatsApp联系我们获取免费报价。`
    }
  },
  "wall-ceiling-skim-coat-kl": {
    ms: {
      slug: "perkhidmatan-skim-coat-kl",
      title: "Skim Coat Dinding & Siling di Kuala Lumpur & Selangor", category: "Skim Coat",
      excerpt: "Dinding dan siling licin serta sekata dengan skim coating profesional di seluruh KL & Selangor — skim coat dinding dan siling, pembaikan retak dan re-skim kondominium penuh, dari RM 5 / kaki persegi.",
      metaTitle: "Skim Coat Dinding & Siling di KL & Selangor",
      metaDesc: "Dinding dan siling licin serta sekata dengan skim coating profesional di KL & Selangor — skim coat dinding & siling, pembaikan retak dan re-skim kondominium penuh. Dari RM 5 / kaki persegi.",
      content: `Jika dinding anda kasar, berombak, atau bertompok akibat cat lama, kesan, atau pembaikan sebelumnya, skim coat memberikan kemasan licin dan sekata. KL Servis Rumah menyediakan skim coating dinding dan siling profesional di seluruh Kuala Lumpur dan Selangor, dari RM 5 / kaki persegi.

## Perkhidmatan skim coating

- **Skim coating dinding** — kemasan licin dan sekata di atas dinding kasar, bernoda, atau bertampal.
- **Skim coating siling** — meratakan dan melicinkan siling sebelum mengecat.
- **Pembaikan retak & sambungan** — membaiki retak dan sambungan sebelum skim.
- **Pakej re-skim kondominium penuh** — permukaan semula lengkap untuk kondominium.

## Apa itu skim coating?

Skim coating ialah aplikasi lapisan nipis plaster atau sebatian sendi ke seluruh permukaan dinding atau siling. Ia meratakan kecacatan kecil, mengisi retak kecil dan tampalan, dan mencipta kemasan licin sedia cat.

## Berapa kos skim coating?

| Perkhidmatan | Harga permulaan |
|---|---|
| Skim coating dinding | Dari RM 5 / kaki persegi |
| Skim coating siling | Dari RM 6 / kaki persegi |
| Pembaikan retak & sambungan | Dari RM 22 / kaki linier |
| Pakej re-skim kondominium penuh | Dari RM 4,200 |

## Dapatkan sebut harga skim coat

Beri dinding dan siling anda kemasan licin dan sempurna. WhatsApp kami untuk penilaian percuma.`
    },
    zh: {
      slug: "ji-long-po-xue-lang-e-gua-sha-fu-wu",
      title: "吉隆坡与雪兰莪墙面与天花板批灰", category: "批灰工程",
      excerpt: "在吉隆坡与雪兰莪通过专业批灰获得平滑均匀的墙面与天花板——墙面和天花板批灰、裂缝修补和全公寓重新批灰，每平方英尺RM 5起。",
      metaTitle: "吉隆坡与雪兰莪墙面与天花板批灰",
      metaDesc: "在吉隆坡与雪兰莪通过专业批灰获得平滑均匀的墙面与天花板——墙面与天花板批灰、裂缝修补和全公寓重新批灰。每平方英尺RM 5起。",
      content: `如果您的墙面因旧漆、污渍或先前修补而粗糙、起伏或斑驳，批灰能带来平滑均匀的饰面。KL Servis Rumah 在吉隆坡和雪兰莪全境提供专业墙面与天花板批灰服务，每平方英尺RM 5起。

## 我们提供的批灰服务

- **墙面批灰** — 在粗糙、污渍或斑驳的墙面上实现平滑均匀的饰面。
- **天花板批灰** — 上漆前找平和抚平天花板。
- **裂缝与接缝修补** — 批灰前修复裂缝和接缝。
- **全公寓重新批灰套餐** — 为共管公寓提供完整的表面重做。

## 什么是批灰？

批灰是将一层薄薄的石膏或接缝剂涂覆在整个墙面或天花板表面。它抚平细小的瑕疵，填补小裂缝和修补处，并形成平滑、可上漆的饰面。

## 批灰费用多少？

| 服务 | 起步价 |
|---|---|
| 墙面批灰 | 每平方英尺 RM 5 起 |
| 天花板批灰 | 每平方英尺 RM 6 起 |
| 裂缝与接缝修补 | 每直线英尺 RM 22 起 |
| 全公寓重新批灰套餐 | RM 4,200 起 |

## 获取批灰报价

让您的墙面和天花板拥有平滑、完美的饰面。WhatsApp联系我们获取免费评估。`
    }
  },
  "wall-skim-coating-kl": {
    ms: {
      slug: "skim-coat-dinding",
      title: "Skim Coat Dinding di KL & Selangor", category: "Skim Coat",
      excerpt: "Dinding licin dan sekata dengan skim coating dinding profesional di seluruh KL & Selangor — meratakan permukaan kasar atau bertompok, dari RM 5 / kaki persegi.",
      metaTitle: "Skim Coat Dinding di KL & Selangor",
      metaDesc: "Dinding licin dan sekata dengan skim coating dinding profesional di KL & Selangor — meratakan permukaan kasar atau bertompok. Dari RM 5 / kaki persegi.",
      content: `Dinding kasar, berombak, atau bertompok merosakkan kerja cat yang sebaliknya baik. Skim coating dinding meratakan permukaan supaya kemasan cat akhir kelihatan licin dan profesional. KL Servis Rumah menyediakan skim coating dinding profesional di seluruh Kuala Lumpur dan Selangor, dari RM 5 / kaki persegi.

## Apa itu skim coating dinding?

Ia ialah aplikasi lapisan nipis plaster atau sebatian sendi ke seluruh permukaan dinding. Ia mengisi kecacatan kecil, melicinkan tampalan, dan mencipta asas sekata untuk pengecatan.

## Bila anda perlu skim coating dinding?

- Dinding anda kasar atau berombak dan kecacatan kelihatan di bawah cat.
- Pembaikan atau tampalan sebelumnya kelihatan sebagai tekstur berbeza.
- Kertas dinding lama ditanggalkan, meninggalkan pelekat dan plaster rosak.
- Anda mahukan kemasan cat premium yang sempurna.

## Berapa kos skim coating dinding?

Skim coating dinding bermula dari RM 5 / kaki persegi. Kos akhir bergantung pada luas dinding dan keadaannya.

## Dapatkan sebut harga skim coat dinding

Untuk dinding licin dan sekata serta kemasan cat yang sempurna, skim coating dinding ialah jawapannya. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "qiang-mian-pi-hui",
      title: "吉隆坡与雪兰莪墙面批灰", category: "批灰工程",
      excerpt: "在吉隆坡与雪兰莪通过专业墙面批灰获得平滑均匀的墙面——抚平粗糙或斑驳的表面，打造完美可上漆的饰面，每平方英尺RM 5起。",
      metaTitle: "吉隆坡与雪兰莪墙面批灰",
      metaDesc: "在吉隆坡与雪兰莪通过专业墙面批灰获得平滑均匀的墙面——抚平粗糙或斑驳的表面，打造完美可上漆的饰面。每平方英尺RM 5起。",
      content: `粗糙、起伏或斑驳的墙面会毁掉本来不错的油漆工程。墙面批灰能抚平表面，使最终的油漆饰面看起来平滑专业。KL Servis Rumah 在吉隆坡和雪兰莪全境提供专业墙面批灰服务，每平方英尺RM 5起。

## 什么是墙面批灰？

它是在整个墙面上涂覆一层薄薄的石膏或接缝剂。它填补细小的瑕疵、抚平修补处，并形成均匀的涂漆基础。

## 何时需要墙面批灰？

- 您的墙面粗糙或起伏，瑕疵在油漆下显现。
- 先前的修补或补丁以不同纹理显现。
- 旧墙纸被拆除，留下胶粘剂和损坏的石膏。
- 您想要完美、高级的油漆饰面。

## 墙面批灰费用多少？

墙面批灰每平方英尺RM 5起。最终费用取决于墙面面积及其状况。

## 获取墙面批灰报价

想要平滑均匀的墙面和完美的油漆饰面，墙面批灰就是答案。WhatsApp联系我们获取免费报价。`
    }
  },
  "ceiling-skim-coating-kl": {
    ms: {
      slug: "skim-coat-siling",
      title: "Skim Coat Siling di KL & Selangor", category: "Skim Coat",
      excerpt: "Ratakan dan licinkan siling anda dengan skim coating siling profesional di seluruh KL & Selangor — meratakan sambungan, retak dan permukaan tidak rata, dari RM 6 / kaki persegi.",
      metaTitle: "Skim Coat Siling di KL & Selangor",
      metaDesc: "Ratakan dan licinkan siling anda dengan skim coating siling profesional di KL & Selangor — meratakan sambungan, retak dan permukaan tidak rata. Dari RM 6 / kaki persegi.",
      content: `Siling yang tidak rata atau retak sangat kelihatan dan menjejaskan keseluruhan bilik. Skim coating siling meratakan permukaan, meratakan sambungan dan retak kecil, serta memberikan siling bersih dan licin sedia cat. KL Servis Rumah menyediakan skim coating siling profesional di seluruh Kuala Lumpur dan Selangor, dari RM 6 / kaki persegi.

## Bila anda perlu skim coating siling?

- Siling anda menunjukkan sambungan atau jahitan panel.
- Permukaan siling tidak rata atau berombak.
- Terdapat retak kecil atau retak rambut.
- Anda mahukan siling licin dan bersih sebelum mengecat semula.

## Proses

1. **Penilaian** — kami memeriksa siling dan mengenal pasti kawasan bermasalah.
2. **Persediaan** — bahan longgar dibuang dan sebarang retak dibaiki.
3. **Aplikasi skim coat** — lapisan nipis dan sekata disapu merentasi siling.
4. **Pengamplasan** — siling diamplas licin setelah kering.

## Berapa kos skim coating siling?

Skim coating siling bermula dari RM 6 / kaki persegi. Kos akhir bergantung pada luas siling dan keadaannya.

## Dapatkan sebut harga skim coat siling

Beri siling anda kemasan bersih dan licin. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "tian-hua-ban-pi-hui",
      title: "吉隆坡与雪兰莪天花板批灰", category: "批灰工程",
      excerpt: "在吉隆坡与雪兰莪通过专业天花板批灰找平和抚平您的天花板——抚平接缝、裂缝和不平整表面，每平方英尺RM 6起。",
      metaTitle: "吉隆坡与雪兰莪天花板批灰",
      metaDesc: "在吉隆坡与雪兰莪通过专业天花板批灰找平和抚平您的天花板——抚平接缝、裂缝和不平整表面。每平方英尺RM 6起。",
      content: `不平整或开裂的天花板非常显眼，会破坏整个房间的效果。天花板批灰能找平表面、抚平接缝和小裂缝，并带来干净、平滑、可上漆的天花板。KL Servis Rumah 在吉隆坡和雪兰莪全境提供专业天花板批灰服务，每平方英尺RM 6起。

## 何时需要天花板批灰？

- 您的天花板显示面板接缝或接缝线。
- 天花板表面不平整或起伏。
- 有小裂缝或发丝裂纹。
- 重涂前您想要平滑干净的天花板。

## 流程

1. **评估** — 我们检查天花板并确定问题区域。
2. **准备** — 清除松动的材料并修复任何裂缝。
3. **涂刷批灰** — 在整个天花板涂覆一层薄薄、均匀的批灰。
4. **打磨** — 干后天花板被打磨平滑。

## 天花板批灰费用多少？

天花板批灰每平方英尺RM 6起。最终费用取决于天花板面积及其状况。

## 获取天花板批灰报价

让您的天花板拥有干净、平滑的饰面。WhatsApp联系我们获取免费报价。`
    }
  },
  "vinyl-spc-laminate-flooring-kl": {
    ms: {
      slug: "perkhidmatan-lantai-kl",
      title: "Lantai Vinil, SPC & Laminate di Kuala Lumpur & Selangor", category: "Lantai",
      excerpt: "Pemasangan lantai profesional di seluruh KL & Selangor — lantai SPC click-lock, laminate dan luxury vinyl plank serta skirting & peralihan, dari RM 14 / kaki persegi.",
      metaTitle: "Lantai Vinil, SPC & Laminate di KL & Selangor",
      metaDesc: "Pemasangan lantai profesional di KL & Selangor — SPC click-lock, laminate dan luxury vinyl plank serta skirting & peralihan. Dari RM 14 / kaki persegi.",
      content: `Lantai vinil, SPC, dan laminate telah menjadi pilihan lantai paling popular untuk rumah Malaysia — ia kelihatan hebat, tahan kelembapan, dan jauh lebih murah daripada kayu pepejal. KL Servis Rumah menyediakan pemasangan lantai profesional di seluruh Kuala Lumpur dan Selangor, dari RM 14 / kaki persegi.

## Jenis lantai yang kami pasang

- **Lantai SPC click-lock** — lantai komposit plastik-batu yang tahan lama dan kalis air.
- **Lantai laminate** — pilihan rupa kayu yang menjimatkan.
- **Luxury vinyl plank (LVP)** — papan vinil fleksibel dan kalis air.
- **Skirting & jalur peralihan** — mengemas tepi dan peralihan dengan kemas.

## Berapa kos lantai?

| Jenis lantai | Harga permulaan |
|---|---|
| Pemasangan lantai SPC click-lock | Dari RM 14 / kaki persegi |
| Pemasangan lantai laminate | Dari RM 11 / kaki persegi |
| Pemasangan luxury vinyl plank (LVP) | Dari RM 16 / kaki persegi |
| Pemasangan skirting & jalur peralihan | Dari RM 8 / kaki linier |

## Dapatkan sebut harga lantai

Sama ada anda lebih suka SPC, laminate, atau papan vinil, KL Servis Rumah menyediakan pemasangan lantai profesional di seluruh Kuala Lumpur dan Selangor. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "ji-long-po-xue-lang-e-di-ban-fu-wu",
      title: "吉隆坡与雪兰莪SPC、复合与强化地板", category: "地板工程",
      excerpt: "在吉隆坡与雪兰莪提供专业地板安装——SPC卡扣地板、强化地板和石塑锁扣地板以及踢脚线和过渡条安装，每平方英尺RM 14起。",
      metaTitle: "吉隆坡与雪兰莪SPC、复合与强化地板",
      metaDesc: "吉隆坡与雪兰莪专业地板安装——SPC卡扣、强化和石塑锁扣地板以及踢脚线与过渡条安装。每平方英尺RM 14起。",
      content: `SPC、强化和石塑地板已成为马来西亚家庭最受欢迎的地板选择——它们外观出色、耐潮，且比实木便宜得多。KL Servis Rumah 在吉隆坡和雪兰莪全境提供专业地板安装服务，每平方英尺RM 14起。

## 我们安装的地板类型

- **SPC卡扣地板** — 耐用、防水的石塑复合地板。
- **强化地板** — 经济实惠的木纹选择。
- **石塑锁扣地板（LVP）** — 柔韧、防水的石塑板。
- **踢脚线与过渡条安装** — 整齐地完成边缘和过渡。

## 地板费用多少？

| 地板类型 | 起步价 |
|---|---|
| SPC卡扣地板安装 | 每平方英尺 RM 14 起 |
| 强化地板安装 | 每平方英尺 RM 11 起 |
| 石塑锁扣地板（LVP）安装 | 每平方英尺 RM 16 起 |
| 踢脚线与过渡条安装 | 每直线英尺 RM 8 起 |

## 获取地板报价

无论您喜欢SPC、强化还是石塑锁扣地板，KL Servis Rumah 都能在吉隆坡和雪兰莪全境提供专业地板安装服务。WhatsApp联系我们获取免费报价。`
    }
  },
  "spc-click-lock-flooring-kl": {
    ms: {
      slug: "pemasangan-lantai-spc-click-lock",
      title: "Pemasangan Lantai SPC Click-Lock di KL & Selangor", category: "Lantai",
      excerpt: "Lantai SPC click-lock yang tahan lama dan kalis air dipasang di seluruh KL & Selangor — sesuai untuk dapur dan kawasan basah, dari RM 14 / kaki persegi.",
      metaTitle: "Pemasangan Lantai SPC Click-Lock di KL & Selangor",
      metaDesc: "Lantai SPC click-lock yang tahan lama dan kalis air dipasang di KL & Selangor — sesuai untuk dapur dan kawasan basah. Dari RM 14 / kaki persegi.",
      content: `Lantai SPC (komposit plastik-batu) click-lock ialah salah satu pilihan lantai paling popular di rumah Malaysia kerana ia tahan lama, kalis air, dan kelihatan seperti kayu sebenar. KL Servis Rumah menyediakan pemasangan lantai SPC click-lock profesional di seluruh Kuala Lumpur dan Selangor, dari RM 14 / kaki persegi.

## Mengapa pilih lantai SPC?

- **Kalis air** — tahan lembapan, sesuai untuk dapur dan kawasan basah.
- **Tahan lama** — teras tegar tahan penyok dan haus.
- **Mudah diselenggara** — mudah dibersihkan dan dijaga.
- **Rupa realistik** — tersedia dalam banyak kemasan kayu dan batu.

## Proses pemasangan

1. **Ukuran** — kami mengukur kawasan dan mengira lantai yang diperlukan.
2. **Persediaan lantai bawah** — lantai dibersihkan, diratakan, dan dikeringkan.
3. **Aklimatisasi** — lantai dibiarkan menyesuaikan diri dengan keadaan bilik.
4. **Pemasangan** — papan diletakkan dan diklik bersama dengan jurang pengembangan yang betul.

## Berapa kos lantai SPC?

Pemasangan lantai SPC click-lock bermula dari RM 14 / kaki persegi. Kos akhir bergantung pada kawasan, produk SPC, dan keadaan lantai bawah.

## Dapatkan sebut harga lantai SPC

Nikmati lantai tahan lama dan kalis air dengan rupa kayu yang realistik. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "spc-ka-kou-di-ban-an-zhuang",
      title: "吉隆坡与雪兰莪SPC卡扣地板安装", category: "地板工程",
      excerpt: "在吉隆坡与雪兰莪安装耐用防水的SPC卡扣地板——非常适合厨房和湿区，每平方英尺RM 14起。",
      metaTitle: "吉隆坡与雪兰莪SPC卡扣地板安装",
      metaDesc: "在吉隆坡与雪兰莪安装耐用防水的SPC卡扣地板——非常适合厨房和湿区。每平方英尺RM 14起。",
      content: `SPC（石塑复合）卡扣地板是马来西亚家庭最受欢迎的地板选择之一，因为它耐用、防水且外观像真实木材。KL Servis Rumah 在吉隆坡和雪兰莪全境提供专业SPC卡扣地板安装服务，每平方英尺RM 14起。

## 为什么选择SPC地板？

- **防水** — 耐潮，适合厨房和湿区。
- **耐用** — 刚性核心耐凹陷和磨损。
- **易于维护** — 易于清洁和保养。
- **外观逼真** — 提供多种木纹和石纹饰面。

## 安装流程

1. **测量** — 我们测量面积并计算所需地板。
2. **基层准备** — 清洁、找平并干燥地面。
3. **适应环境** — 让地板适应房间温度和湿度。
4. **安装** — 板材以正确的膨胀间隙铺设并卡合。

## SPC地板费用多少？

SPC卡扣地板安装每平方英尺RM 14起。最终费用取决于面积、所选产品、基层状况。

## 获取SPC地板报价

享受耐用防水、外观逼真的地板。WhatsApp联系我们获取免费报价。`
    }
  },
  "laminate-flooring-kl": {
    ms: {
      slug: "pemasangan-lantai-laminate",
      title: "Pemasangan Lantai Laminate di KL & Selangor", category: "Lantai",
      excerpt: "Lantai laminate rupa kayu yang menjimatkan dipasang di seluruh KL & Selangor — sesuai untuk bilik tidur dan ruang tamu, dari RM 11 / kaki persegi.",
      metaTitle: "Pemasangan Lantai Laminate di KL & Selangor",
      metaDesc: "Lantai laminate rupa kayu yang menjimatkan dipasang di KL & Selangor — sesuai untuk bilik tidur dan ruang tamu. Dari RM 11 / kaki persegi.",
      content: `Lantai laminate memberikan rumah anda rupa kayu yang hangat dengan kos yang jauh lebih rendah. Ia ialah pilihan popular dan berpatutan untuk bilik tidur dan ruang tamu di seluruh Kuala Lumpur dan Selangor. KL Servis Rumah menyediakan pemasangan lantai laminate profesional, dari RM 11 / kaki persegi.

## Mengapa pilih lantai laminate?

- **Berpatutan** — rupa kayu pada kos lebih rendah.
- **Tahan lama** — permukaan keras yang tahan calar dan haus harian.
- **Mudah diselenggara** — mudah dibersihkan dan dijaga.
- **Pilihan luas** — banyak warna dan kemasan tersedia.

## Proses pemasangan

1. **Ukuran** — kami mengukur kawasan dan mengira lantai yang diperlukan.
2. **Persediaan lantai bawah** — lantai dibersihkan, diratakan, dan underlay sesuai diletakkan.
3. **Aklimatisasi** — lantai menyesuaikan diri dengan keadaan bilik.
4. **Pemasangan** — papan diletakkan dengan jarak dan penguncian yang betul.

## Berapa kos lantai laminate?

Pemasangan lantai laminate bermula dari RM 11 / kaki persegi. Kos akhir bergantung pada kawasan, produk, dan keadaan lantai bawah.

## Dapatkan sebut harga lantai laminate

Tambahkan rupa kayu yang hangat pada harga yang berpatutan. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "fu-he-di-ban-an-zhuang",
      title: "吉隆坡与雪兰莪强化地板安装", category: "地板工程",
      excerpt: "在吉隆坡与雪兰莪安装经济实惠的木纹强化地板——非常适合卧室和客厅，每平方英尺RM 11起。",
      metaTitle: "吉隆坡与雪兰莪强化地板安装",
      metaDesc: "在吉隆坡与雪兰莪安装经济实惠的木纹强化地板——非常适合卧室和客厅。每平方英尺RM 11起。",
      content: `强化地板以实木价格的一小部分为您的家带来温暖的木纹外观。它是吉隆坡和雪兰莪全境卧室和客厅的热门实惠选择。KL Servis Rumah 提供专业强化地板安装服务，每平方英尺RM 11起。

## 为什么选择强化地板？

- **经济实惠** — 以更低成本获得木纹外观。
- **耐用** — 坚硬的表面耐刮擦和日常磨损。
- **易于维护** — 易于清洁和保养。
- **选择广泛** — 提供多种颜色和饰面。

## 安装流程

1. **测量** — 我们测量面积并计算所需地板。
2. **基层准备** — 清洁、找平地面并铺设合适的衬垫。
3. **适应环境** — 让地板适应房间条件。
4. **安装** — 板材以正确的间距和锁定方式铺设。

## 强化地板费用多少？

强化地板安装每平方英尺RM 11起。最终费用取决于面积、产品和基层状况。

## 获取强化地板报价

以实惠的价格增添温暖的木纹外观。WhatsApp联系我们获取免费报价。`
    }
  },
  "epoxy-polyurethane-flooring-kl": {
    ms: {
      slug: "perkhidmatan-lantai-epoksi-kl",
      title: "Lantai Epoksi & Poliuretana di Kuala Lumpur & Selangor", category: "Lantai",
      excerpt: "Lantai epoksi dan poliuretana profesional di seluruh KL & Selangor — self-levelling, flake/kuarza broadcast dan mortar screed tugas berat serta pembaikan, dari RM 22 / kaki persegi.",
      metaTitle: "Lantai Epoksi & Poliuretana di KL & Selangor",
      metaDesc: "Lantai epoksi & poliuretana profesional di KL & Selangor — self-levelling, flake/kuarza broadcast dan mortar screed tugas berat serta pembaikan. Dari RM 22 / kaki persegi.",
      content: `Lantai epoksi ialah pilihan utama untuk garaj, balkoni, car porch, pejabat, dan ruang industri kerana ia kukuh, tanpa sambungan, dan mudah dibersihkan. KL Servis Rumah menyediakan lantai epoksi dan poliuretana profesional di seluruh Kuala Lumpur dan Selangor, dari RM 22 / kaki persegi.

## Jenis lantai epoksi

- **Lantai epoksi self-levelling** — kemasan licin, tanpa sambungan, dan tahan lama.
- **Epoksi broadcast flake / kuarza** — permukaan hiasan dan tahan licin.
- **Mortar screed tugas berat** — sistem tebal dan kukuh untuk kawasan lalu lintas tinggi.
- **Pembaikan & salutan semula lantai epoksi** — memulihkan lantai epoksi haus atau rosak.

## Mengapa pilih lantai epoksi?

- **Tahan lama** — tahan haus, hentaman, dan bahan kimia.
- **Tanpa sambungan** — tiada sambungan untuk kotoran dan air berkumpul.
- **Mudah dibersihkan** — permukaan licin yang mudah dilap.
- **Tahan air** — melindungi konkrit di bawahnya.

## Berapa kos lantai epoksi?

| Jenis lantai | Harga permulaan |
|---|---|
| Lantai epoksi self-levelling | Dari RM 22 / kaki persegi |
| Epoksi broadcast flake / kuarza | Dari RM 26 / kaki persegi |
| Mortar screed tugas berat | Dari RM 38 / kaki persegi |
| Pembaikan & salutan semula lantai epoksi | Dari RM 14 / kaki persegi |

## Dapatkan sebut harga lantai epoksi

Beri garaj, balkoni, atau ruang komersial anda lantai yang kukuh, tanpa sambungan, dan mudah dibersihkan. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "ji-long-po-xue-lang-e-huan-yang-di-ban-fu-wu",
      title: "吉隆坡与雪兰莪环氧与聚氨酯地板", category: "地板工程",
      excerpt: "在吉隆坡与雪兰莪提供专业环氧与聚氨酯地板——自流平、薄片/石英撒播和重载砂浆找平以及修补，每平方英尺RM 22起。",
      metaTitle: "吉隆坡与雪兰莪环氧与聚氨酯地板",
      metaDesc: "吉隆坡与雪兰莪专业环氧与聚氨酯地板——自流平、薄片/石英撒播和重载砂浆找平以及修补。每平方英尺RM 22起。",
      content: `环氧地板是车库、阳台、停车棚、办公室和工业空间的首选，因为它坚固、无缝且易于清洁。KL Servis Rumah 在吉隆坡和雪兰莪全境提供专业环氧与聚氨酯地板服务，每平方英尺RM 22起。

## 我们提供的环氧地板类型

- **自流平环氧地板** — 平滑、无缝、耐用的饰面。
- **薄片/石英撒播环氧** — 装饰性、防滑的表面。
- **重载砂浆找平** — 适用于高人流量区域的坚固厚实系统。
- **环氧地板修补与重涂** — 修复磨损或损坏的环氧地板。

## 为什么选择环氧地板？

- **耐用** — 耐磨损、冲击和化学品。
- **无缝** — 无接缝可积聚污垢和水。
- **易于清洁** — 易于擦拭的平滑表面。
- **耐水** — 保护下方的混凝土。

## 环氧地板费用多少？

| 地板类型 | 起步价 |
|---|---|
| 自流平环氧地板 | 每平方英尺 RM 22 起 |
| 薄片/石英撒播环氧 | 每平方英尺 RM 26 起 |
| 重载砂浆找平 | 每平方英尺 RM 38 起 |
| 环氧地板修补与重涂 | 每平方英尺 RM 14 起 |

## 获取环氧地板报价

让您的车库、阳台或商业空间拥有坚固、无缝、易清洁的地板。WhatsApp联系我们获取免费报价。`
    }
  },
  "self-levelling-epoxy-floor-kl": {
    ms: {
      slug: "lantai-epoksi-self-levelling",
      title: "Lantai Epoksi Self-Levelling di KL & Selangor", category: "Lantai",
      excerpt: "Lantai epoksi self-levelling yang licin, tanpa sambungan dipasang di seluruh KL & Selangor — sesuai untuk garaj, pejabat, balkoni dan ruang pameran, dari RM 22 / kaki persegi.",
      metaTitle: "Lantai Epoksi Self-Levelling di KL & Selangor",
      metaDesc: "Lantai epoksi self-levelling yang licin dan tanpa sambungan dipasang di KL & Selangor — sesuai untuk garaj, pejabat, balkoni dan ruang pameran. Dari RM 22 / kaki persegi.",
      content: `Lantai epoksi self-levelling ialah sistem lantai licin, tanpa sambungan, dan tahan lama yang merebak untuk mencipta permukaan rata dan sekata. Ia ialah pilihan popular untuk garaj, car porch, pejabat, balkoni, dan ruang pameran di seluruh Kuala Lumpur dan Selangor. KL Servis Rumah menyediakan lantai epoksi self-levelling profesional, dari RM 22 / kaki persegi.

## Mengapa pilih epoksi self-levelling?

- **Licin, tanpa sambungan** — tiada sambungan untuk kotoran atau air berkumpul.
- **Tahan lama** — tahan haus, hentaman, dan kesan.
- **Mudah dibersihkan** — mudah dilap.
- **Rupa moden** — kemasan bersih dan profesional.

## Proses pemasangan

1. **Persediaan permukaan** — konkrit dibersihkan, dikisar, dan sebarang retak dibaiki.
2. **Primer** — primer disapu untuk membantu epoksi melekat.
3. **Aplikasi dituang** — epoksi self-levelling dituang dan disebar sekata.
4. **Perataan** — epoksi meratakan sendiri untuk mencipta permukaan licin.

## Berapa kos lantai epoksi self-levelling?

Lantai epoksi self-levelling bermula dari RM 22 / kaki persegi. Kos akhir bergantung pada kawasan, keadaan permukaan, dan kemasan.

## Dapatkan sebut harga lantai epoksi self-levelling

Beri garaj, pejabat, atau balkoni anda lantai licin, tanpa sambungan, dan tahan lama. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "zi-liu-ping-huan-yang-di-ban",
      title: "吉隆坡与雪兰莪自流平环氧地板", category: "地板工程",
      excerpt: "在吉隆坡与雪兰莪安装平滑无缝的自流平环氧地板——非常适合车库、办公室、阳台和展厅，每平方英尺RM 22起。",
      metaTitle: "吉隆坡与雪兰莪自流平环氧地板",
      metaDesc: "在吉隆坡与雪兰莪安装平滑无缝的自流平环氧地板——非常适合车库、办公室、阳台和展厅。每平方英尺RM 22起。",
      content: `自流平环氧地板是一种平滑、无缝、耐用的地面系统，会摊开形成平坦均匀的表面。它是吉隆坡和雪兰莪全境车库、停车棚、办公室、阳台和展厅的热门选择。KL Servis Rumah 提供专业自流平环氧地板服务，每平方英尺RM 22起。

## 为什么选择自流平环氧地板？

- **平滑无缝** — 无接缝可积聚污垢或水。
- **耐用** — 耐磨损、冲击和污渍。
- **易于清洁** — 易于擦拭。
- **现代外观** — 干净、专业的饰面。

## 安装流程

1. **表面准备** — 清洁、打磨混凝土并修复任何裂缝。
2. **底漆** — 涂刷底漆以帮助环氧粘合。
3. **浇注施工** — 浇注自流平环氧并均匀摊开。
4. **找平** — 环氧自行找平，形成平滑表面。

## 自流平环氧地板费用多少？

自流平环氧地板每平方英尺RM 22起。最终费用取决于面积、表面状况和饰面。

## 获取自流平环氧地板报价

让您的车库、办公室或阳台拥有平滑、无缝、耐用的地板。WhatsApp联系我们获取免费报价。`
    }
  },
  "flake-quartz-broadcast-epoxy-kl": {
    ms: {
      slug: "epoksi-broadcast-flake-kuarza",
      title: "Epoksi Broadcast Flake / Kuarza di KL & Selangor", category: "Lantai",
      excerpt: "Lantai epoksi broadcast flake atau kuarza yang hiasan dan tahan licin dipasang di seluruh KL & Selangor — sesuai untuk garaj, balkoni dan kawasan lalu lintas tinggi, dari RM 26 / kaki persegi.",
      metaTitle: "Epoksi Broadcast Flake / Kuarza di KL & Selangor",
      metaDesc: "Lantai epoksi broadcast flake atau kuarza yang hiasan dan tahan licin dipasang di KL & Selangor — sesuai untuk garaj, balkoni dan kawasan lalu lintas tinggi. Dari RM 26 / kaki persegi.",
      content: `Lantai epoksi broadcast flake atau kuarza menggabungkan ketahanan dengan kemasan hiasan dan tahan licin. Ia ialah pilihan sangat baik untuk garaj, car porch, balkoni, dan kawasan lalu lintas tinggi di seluruh Kuala Lumpur dan Selangor. KL Servis Rumah menyediakan lantai epoksi broadcast flake dan kuarza profesional, dari RM 26 / kaki persegi.

## Mengapa pilih epoksi broadcast?

- **Tahan licin** — permukaan bertekstur memberikan cengkaman lebih baik daripada epoksi licin.
- **Hiasan** — tersedia dalam banyak campuran warna untuk rupa tersuai.
- **Tahan lama** — tahan haus, hentaman, dan kesan.
- **Menyembunyikan kecacatan** — tekstur menyamar kesan permukaan kecil.

## Proses pemasangan

1. **Persediaan permukaan** — konkrit dibersihkan, dikisar, dan sebarang retak dibaiki.
2. **Primer dan lapisan asas** — primer dan lapisan asas epoksi berwarna disapu.
3. **Broadcast** — flake atau kuarza disebar ke atas asas basah.
4. **Topcoat** — topcoat pelindung telus menyekat permukaan.

## Berapa kos epoksi broadcast?

Epoksi broadcast flake / kuarza bermula dari RM 26 / kaki persegi. Kos akhir bergantung pada kawasan, warna, dan keadaan permukaan.

## Dapatkan sebut harga epoksi broadcast

Gabungkan ketahanan dengan kemasan hiasan dan tahan licin. WhatsApp kami untuk sebut harga percuma.`
    },
    zh: {
      slug: "bao-pian-shi-ying-sa-bo-huan-yang",
      title: "吉隆坡与雪兰莪薄片/石英撒播环氧地板", category: "地板工程",
      excerpt: "在吉隆坡与雪兰莪安装装饰性、防滑的薄片或石英撒播环氧地板——非常适合车库、阳台和高人流区域，每平方英尺RM 26起。",
      metaTitle: "吉隆坡与雪兰莪薄片/石英撒播环氧地板",
      metaDesc: "在吉隆坡与雪兰莪安装装饰性、防滑的薄片或石英撒播环氧地板——非常适合车库、阳台和高人流区域。每平方英尺RM 26起。",
      content: `薄片或石英撒播环氧地板结合了耐用性与装饰性、防滑的饰面。它是吉隆坡和雪兰莪全境车库、停车棚、阳台和高人流区域的绝佳选择。KL Servis Rumah 提供专业薄片和石英撒播环氧地板服务，每平方英尺RM 26起。

## 为什么选择撒播环氧地板？

- **防滑** — 纹理表面比光滑环氧提供更好的抓握力。
- **装饰性** — 提供多种颜色混合，实现定制外观。
- **耐用** — 耐磨损、冲击和污渍。
- **隐藏瑕疵** — 纹理遮盖细小的表面痕迹。

## 安装流程

1. **表面准备** — 清洁、打磨混凝土并修复任何裂缝。
2. **底漆和底涂层** — 涂刷底漆和彩色环氧底涂层。
3. **撒播** — 将薄片或石英撒在湿的基底上。
4. **面漆** — 透明保护面漆密封表面。

## 撒播环氧费用多少？

薄片/石英撒播环氧每平方英尺RM 26起。最终费用取决于面积、颜色和表面状况。

## 获取撒播环氧报价

将耐用性与装饰性、防滑的饰面相结合。WhatsApp联系我们获取免费报价。`
    }
  },
  "roof-repair-waterproofing-kl": {
    ms: {
      slug: "perkhidmatan-pembaikan-bumbung-kl",
      title: "Pembaikan Bumbung & Kalis Air di Kuala Lumpur & Selangor", category: "Pembaikan Bumbung",
      excerpt: "Pembaikan bumbung dan kalis air profesional di seluruh KL & Selangor — diagnosis dan pembaikan bocor bumbung, re-bedding permatang, pembersihan longkang dan kalis air membran torch-on.",
      metaTitle: "Pembaikan Bumbung & Kalis Air di KL & Selangor",
      metaDesc: "Pembaikan bumbung & kalis air profesional di KL & Selangor — diagnosis dan pembaikan bocor bumbung, re-bedding permatang, pembersihan longkang dan kalis air membran torch-on.",
      content: `Bumbung bocor atau rosak boleh menyebabkan kerosakan serius pada rumah anda — siling bernoda, dinding lembap, dan juga masalah struktur dari masa ke masa. KL Servis Rumah menyediakan perkhidmatan pembaikan bumbung dan kalis air profesional di seluruh Kuala Lumpur dan Selangor.

## Perkhidmatan bumbung

- **Diagnosis & pembaikan bocor bumbung** — mencari dan membaiki punca bocor bumbung.
- **Re-bedding & re-pointing permatang** — menyegel semula jubin permatang bumbung.
- **Pembersihan & penjajaran semula longkang** — membersihkan dan menjajarkan semula longkang.
- **Kalis air membran torch-on penuh** — lapisan kalis air tahan lama untuk bumbung rata.

## Bila menghubungi profesional pembaikan bumbung

- Kesan air muncul di siling selepas hujan.
- Anda boleh melihat jubin bumbung rosak, retak, atau hilang.
- Longkang melimpah atau bocor.

## Berapa kos pembaikan bumbung?

| Perkhidmatan | Harga permulaan |
|---|---|
| Diagnosis & pembaikan bocor bumbung | Dari RM 380 |
| Re-bedding & re-pointing permatang | Dari RM 22 / kaki linier |
| Pembersihan & penjajaran semula longkang | Dari RM 320 |
| Kalis air membran torch-on penuh | Dari RM 26 / kaki persegi |

## Dapatkan sebut harga pembaikan bumbung

Lindungi rumah anda daripada kerosakan bumbung dengan pembaikan dan kalis air profesional. WhatsApp kami untuk pemeriksaan percuma.`
    },
    zh: {
      slug: "ji-long-po-xue-lang-e-wu-ding-xiu-fu-fu-wu",
      title: "吉隆坡与雪兰莪屋顶维修与防水", category: "屋顶维修",
      excerpt: "在吉隆坡与雪兰莪提供专业屋顶维修与防水——屋顶漏水诊断与维修、屋脊重铺、排水沟清洁以及热熔卷材防水，附固定报价。",
      metaTitle: "吉隆坡与雪兰莪屋顶维修与防水",
      metaDesc: "吉隆坡与雪兰莪专业屋顶维修与防水——屋顶漏水诊断与维修、屋脊重铺、排水沟清洁及热熔卷材防水，附固定报价。",
      content: `漏水或损坏的屋顶会对您的家造成严重损坏——天花板污渍、墙壁潮湿，甚至随时间出现结构问题。KL Servis Rumah 在吉隆坡和雪兰莪全境提供专业屋顶维修与防水服务。

## 我们提供的屋顶服务

- **屋顶漏水诊断与维修** — 找到并修复屋顶漏水的来源。
- **屋脊重铺与勾缝** — 重新密封屋脊瓦以防止漏水。
- **排水沟清洁与校正** — 清理和校正堵塞或损坏的排水沟。
- **全热熔卷材防水** — 为平屋顶提供耐用的防水层。

## 何时应请屋顶维修专业人士

- 雨后天花板出现水渍。
- 您能看到损坏、开裂或缺失的屋顶瓦片。
- 排水沟溢出或漏水。

## 屋顶维修费用多少？

| 服务 | 起步价 |
|---|---|
| 屋顶漏水诊断与维修 | RM 380 起 |
| 屋脊重铺与勾缝 | 每直线英尺 RM 22 起 |
| 排水沟清洁与校正 | RM 320 起 |
| 全热熔卷材防水 | 每平方英尺 RM 26 起 |

## 获取屋顶维修报价

通过专业维修和防水保护您的家免受屋顶损坏。WhatsApp联系我们获取免费检查。`
    }
  },
  "roof-leak-diagnosis-repair-kl": {
    ms: {
      slug: "diagnosis-dan-pembaikan-bocor-bumbung",
      title: "Diagnosis & Pembaikan Bocor Bumbung di KL & Selangor", category: "Pembaikan Bumbung",
      excerpt: "Cari dan baiki punca bocor bumbung anda di seluruh KL & Selangor — diagnosis profesional jubin, permatang, flashing dan longkang, dengan pembaikan bersasar dari RM 380.",
      metaTitle: "Diagnosis & Pembaikan Bocor Bumbung di KL & Selangor",
      metaDesc: "Cari dan baiki punca bocor bumbung anda di KL & Selangor — diagnosis profesional jubin, permatang, flashing dan longkang, dengan pembaikan bersasar. Dari RM 380.",
      content: `Bumbung bocor merosakkan siling, dinding, penebat, dan juga struktur dari masa ke masa. KL Servis Rumah menyediakan diagnosis dan pembaikan bocor bumbung profesional di seluruh Kuala Lumpur dan Selangor, dari RM 380.

## Mengapa bocor bumbung sukar ditemui

- **Air mengalir** — air mengalir di sepanjang kasau dan rasuk, muncul jauh dari titik bocor.
- **Titik kemasukan tersembunyi** — kerosakan mungkin di bawah jubin atau di permatang.
- **Pelbagai punca** — bumbung tua mungkin bocor di lebih daripada satu tempat.

## Cara kami mendiagnosis bocor bumbung

1. **Periksa bumbung** — kami memeriksa jubin, permatang, flashing, lembah, dan longkang.
2. **Periksa bahagian dalam** — kami mengesan laluan air dari kesan siling.
3. **Kenal pasti punca** — kami menunjukkan titik tepat kemasukan air.

## Berapa kos pembaikan bocor bumbung?

Diagnosis dan pembaikan bocor bumbung bermula dari RM 380. Kos akhir bergantung pada punca bocor, tahap kerosakan, dan akses.

## Dapatkan bantuan dengan bocor bumbung

Jika bumbung anda bocor, diagnosis yang betul mencari punca dan pembaikan bersasar membaikinya secara kekal. WhatsApp kami untuk pemeriksaan percuma.`
    },
    zh: {
      slug: "wu-ding-lou-shui-jian-ce-yu-xiu-fu",
      title: "吉隆坡与雪兰莪屋顶漏水诊断与维修", category: "屋顶维修",
      excerpt: "在吉隆坡与雪兰莪找到并修复屋顶漏水来源——对瓦片、屋脊、防水板和排水沟进行专业诊断，针对性维修RM 380起。",
      metaTitle: "吉隆坡与雪兰莪屋顶漏水诊断与维修",
      metaDesc: "在吉隆坡与雪兰莪找到并修复屋顶漏水来源——对瓦片、屋脊、防水板和排水沟进行专业诊断，针对性维修。RM 380起。",
      content: `屋顶漏水会随时间损坏天花板、墙壁、保温层甚至结构。KL Servis Rumah 在吉隆坡和雪兰莪全境提供专业屋顶漏水诊断与维修服务，RM 380起。

## 为什么屋顶漏水难以发现

- **水会流动** — 水沿着椽子和大梁流动，出现在远离漏水点的地方。
- **隐藏的入口点** — 损坏可能在瓦片下方或屋脊处。
- **多个来源** — 老旧屋顶可能在不止一处漏水。

## 我们如何诊断屋顶漏水

1. **检查屋顶** — 我们检查瓦片、屋脊、防水板、山谷和排水沟。
2. **检查内部** — 我们从天花板污渍追踪水流路径。
3. **确定来源** — 我们精确定位进水点。

## 屋顶漏水维修费用多少？

屋顶漏水诊断与维修RM 380起。最终费用取决于漏水来源、损坏程度和施工条件。

## 获取屋顶漏水的帮助

如果您的屋顶正在漏水，正确的诊断能找到来源，针对性维修能彻底修复。WhatsApp联系我们获取免费检查。`
    }
  },
  "ridge-re-bedding-re-pointing-kl": {
    ms: {
      slug: "re-bedding-dan-re-pointing-permatang",
      title: "Re-Bedding & Re-Pointing Permatang di KL & Selangor", category: "Pembaikan Bumbung",
      excerpt: "Segel semula jubin permatang bumbung yang retak atau longgar untuk menghentikan bocor di seluruh KL & Selangor — re-bedding dan re-pointing permatang profesional, dari RM 22 / kaki linier.",
      metaTitle: "Re-Bedding & Re-Pointing Permatang di KL & Selangor",
      metaDesc: "Segel semula jubin permatang bumbung yang retak atau longgar untuk menghentikan bocor di KL & Selangor — re-bedding dan re-pointing permatang profesional. Dari RM 22 / kaki linier.",
      content: `Permatang ialah titik tertinggi bumbung anda — dan salah satu tempat paling biasa bocor bermula. Apabila mortar antara jubin permatang retak atau hanyut, air boleh masuk. Re-bedding dan re-pointing permatang menyegel semula permatang untuk menghentikan bocor. KL Servis Rumah menyediakan perkhidmatan ini di seluruh Kuala Lumpur dan Selangor, dari RM 22 / kaki linier.

## Apa itu re-bedding & re-pointing permatang?

- **Re-bedding** — membuang lapisan mortar lama dan meletakkan semula jubin permatang di atas mortar katil baharu.
- **Re-pointing** — membaiki dan mengisi semula sambungan antara jubin permatang dengan mortar baharu.

## Bila re-bedding permatang diperlukan?

- **Mortar retak atau hilang** antara jubin permatang.
- **Jubin permatang longgar atau beralih**.
- **Kesan air di siling berhampiran permatang**.

## Proses

1. **Pemeriksaan** — kami menilai keadaan jubin permatang dan mortar.
2. **Penyingkiran** — jubin permatang longgar dan mortar lama dibuang.
3. **Re-bedding** — jubin permatang diletakkan semula pada mortar katil baharu.
4. **Re-pointing** — sambungan diisi dan dikemas dengan mortar baharu.

## Berapa kos re-bedding permatang?

Re-bedding & re-pointing permatang bermula dari RM 22 / kaki linier. Kos akhir bergantung pada panjang permatang dan keadaan jubin.

## Dapatkan sebut harga re-bedding permatang

Hentikan bocor bumbung di punca dengan re-bedding dan re-pointing permatang profesional. WhatsApp kami untuk pemeriksaan percuma.`
    },
    zh: {
      slug: "wu-ji-zhong-pu-yu-gou-feng",
      title: "吉隆坡与雪兰莪屋脊重铺与勾缝", category: "屋顶维修",
      excerpt: "重新密封开裂或松动的屋顶屋脊瓦以阻止漏水——在吉隆坡与雪兰莪提供专业屋脊重铺与勾缝，每直线英尺RM 22起。",
      metaTitle: "吉隆坡与雪兰莪屋脊重铺与勾缝",
      metaDesc: "重新密封开裂或松动的屋顶屋脊瓦以阻止漏水——专业屋脊重铺与勾缝，每直线英尺RM 22起。",
      content: `屋脊是您屋顶的最高点——也是最常见的漏水起始点之一。当屋脊瓦之间的灰浆开裂或被冲走时，水就会进入。屋脊重铺与勾缝可重新密封屋脊以阻止漏水。KL Servis Rumah 在吉隆坡和雪兰莪全境提供此项服务，每直线英尺RM 22起。

## 什么是屋脊重铺与勾缝？

- **重铺** — 移除旧的灰浆垫层，用新鲜的铺置灰浆重新铺设屋脊瓦。
- **勾缝** — 用新鲜灰浆修复并重新填充屋脊瓦之间的接缝。

## 何时需要屋脊重铺？

- **屋脊瓦之间的灰浆开裂或缺失**。
- **屋脊瓦松动或移位**。
- **屋脊附近的天花板出现水渍**。

## 流程

1. **检查** — 我们评估屋脊瓦和灰浆的状况。
2. **移除** — 移除松动的屋脊瓦和旧灰浆。
3. **重铺** — 用新鲜的铺置灰浆重新铺设屋脊瓦。
4. **勾缝** — 用新鲜灰浆填充并完成接缝。

## 屋脊重铺费用多少？

屋脊重铺与勾缝每直线英尺RM 22起。最终费用取决于屋脊长度和瓦片状况。

## 获取屋脊重铺报价

通过专业的屋脊重铺与勾缝从源头阻止屋顶漏水。WhatsApp联系我们获取免费检查。`
    }
  },

  /* ── AIRCON ARTICLES ────────────────────────────────────────────────── */
  "aircon-service-price-malaysia-2026": {
    ms: {
      slug: "harga-servis-aircond-malaysia-2026",
      title: "Harga Servis Aircond Malaysia 2026: Panduan Harga Lengkap",
      category: "Aircond",
      excerpt: "Servis asas dari RM 129, cucian kimia dari RM 156, overhaul dari RM 286 dan pemasangan dari RM 259 — senarai harga aircond KL & Selangor yang lengkap, beserta apa yang disertakan setiap servis.",
      metaTitle: "Harga Servis Aircond Malaysia 2026 — Panduan Harga Lengkap",
      metaDesc: "Senarai harga servis aircond 2026 yang lengkap untuk KL & Selangor. Servis asas dari RM 129, cucian kimia dari RM 156, overhaul dari RM 286, pemasangan dari RM 259.",
      content: `Setiap harga aircond di bawah adalah harga permulaan minimum, bukan angka tetap. Kos sebenar bergantung pada sifat dan skop kerja anda, dan pasukan teknikal kami mengesahkan harga akhir selepas lawatan tapak atau selepas menyemak foto anda.

## Pembersihan — Unit Dinding

| Servis | HP | Harga |
|---|---|---|
| Servis Asas | 1.0–1.5 HP | Dari RM 129 |
| Servis Asas | 2.0–2.5 HP | Dari RM 156 |
| Servis Asas | 3.0–3.5 HP | Dari RM 195 |
| Cucian Kimia Tekanan | 1.0–1.5 HP | Dari RM 156 |
| Cucian Kimia Tekanan | 2.0–2.5 HP | Dari RM 195 |
| Cucian Kimia Tekanan | 3.0 HP | Dari RM 234 |
| Overhaul Kimia | 1.0–1.5 HP | Dari RM 286 |
| Overhaul Kimia | 2.0–2.5 HP | Dari RM 364 |
| Overhaul Kimia | 3.0–3.5 HP | Dari RM 455 |

## Top-Up Gas (Setiap PSI)

Top-up gas dikenakan pada PSI sebenar yang diperlukan selepas juruteknik memeriksa di tapak. R22 ialah RM 2.50 setiap PSI, manakala R410A dan R32 ialah RM 3.00 setiap PSI. Pemeriksaan kebocoran struktur bermula dari RM 114 dan disertakan.

## Pemasangan Baharu (Unit Tidak Termasuk)

Pemasangan unit dinding bermula dari RM 259 (1.0–1.5 HP) sehingga RM 584 (5.0 HP). Pemasangan kaset siling bermula dari RM 377 dan unit tingkap dari RM 259. Harga adalah untuk pemasangan sahaja — unit aircond tidak termasuk.

## Pembaikan & Alat Ganti

Yuran diagnosis bermula dari RM 114 dan diketepikan jika dibaiki pada lawatan sama. Penggantian kapasitor bermula dari RM 195, motor kipas dari RM 390, dan pemampat dari RM 1,040. Semua alat ganti membawa jaminan 3 bulan.

Lihat [halaman servis aircond](/ms/services/aircon) kami untuk pecahan penuh dan tempah sebut harga di WhatsApp.`
    },
    zh: {
      slug: "aircon-service-price-malaysia-2026",
      title: "马来西亚空调保养价格 2026：完整价格指南",
      category: "空调",
      excerpt: "基本保养从 RM 129 起、化学清洗从 RM 156 起、大修从 RM 286 起、安装从 RM 259 起——吉隆坡与雪兰莪完整空调价格表，附每项服务内容。",
      metaTitle: "马来西亚空调保养价格 2026 — 完整价格指南",
      metaDesc: "吉隆坡与雪兰莪 2026 完整空调保养价格表。基本保养从 RM 129 起、化学清洗从 RM 156 起、大修从 RM 286 起、安装从 RM 259 起。",
      content: `以下所有空调价格都是最低起价，而非固定价。实际费用取决于您工程的性质与范围，我们的技术团队会在现场勘查或查看您的照片后确认最终价格。

## 清洁 — 挂壁机

| 服务 | 匹数 | 价格 |
|---|---|---|
| 基本保养 | 1.0–1.5 HP | 从 RM 129 起 |
| 基本保养 | 2.0–2.5 HP | 从 RM 156 起 |
| 基本保养 | 3.0–3.5 HP | 从 RM 195 起 |
| 高压化学清洗 | 1.0–1.5 HP | 从 RM 156 起 |
| 高压化学清洗 | 2.0–2.5 HP | 从 RM 195 起 |
| 高压化学清洗 | 3.0 HP | 从 RM 234 起 |
| 化学大修 | 1.0–1.5 HP | 从 RM 286 起 |
| 化学大修 | 2.0–2.5 HP | 从 RM 364 起 |
| 化学大修 | 3.0–3.5 HP | 从 RM 455 起 |

## 加雪种（按 PSI）

加雪种按技术员现场检测后实际所需的 PSI 计费。R22 为每 PSI RM 2.50，R410A 与 R32 为每 PSI RM 3.00。结构性检漏从 RM 114 起并已包含。

## 新安装（不含主机）

挂壁机安装从 RM 259 起（1.0–1.5 HP）至 RM 584（5.0 HP）。天花卡式安装从 RM 377 起，窗式机从 RM 259 起。价格仅含安装——空调主机不包含在内。

## 维修与配件

诊断费从 RM 114 起，当天维修则免收。电容更换从 RM 195 起，风扇电机从 RM 390 起，压缩机从 RM 1,040 起。所有配件享有 3 个月保修。

查看我们的[空调服务页面](/zh/services/aircon)获取完整明细并在 WhatsApp 预约报价。`
    }
  },
  "chemical-wash-vs-chemical-overhaul-aircon": {
    ms: {
      slug: "cucian-kimia-vs-overhaul-kimia-aircond",
      title: "Cucian Kimia vs Overhaul Kimia: Servis Aircond Mana Yang Anda Perlukan?",
      category: "Aircond",
      excerpt: "Cucian kimia membersihkan gegelung dan blower tanpa menanggalkan unit; overhaul membuka unit sepenuhnya. Beginilah cara memilih yang sesuai untuk aircond dan bajet anda.",
      metaTitle: "Cucian Kimia vs Overhaul Kimia — Servis Aircond Mana?",
      metaDesc: "Cucian kimia vs overhaul kimia untuk aircond anda di KL & Selangor. Bandingkan kos, proses dan bila setiap satu adalah penyelesaian yang betul. Cucian kimia dari RM 156, overhaul dari RM 286.",
      content: `Memilih antara cucian kimia dan overhaul kimia bergantung kepada sejauh mana masalahnya.

## Apa yang Cucian Kimia Lakukan

Cucian kimia tekanan menggunakan larutan alkali atau anti-mikrob untuk membersihkan gegelung evaporator, roda blower dan saliran tanpa menanggalkan unit sepenuhnya dari dinding. Ia adalah penyelesaian standard untuk bau apak, titisan air ringan dan penyejukan berkurang selepas 6–12 bulan penggunaan.

Cucian kimia unit dinding bermula dari RM 156 untuk unit 1.0–1.5 HP.

## Apa yang Overhaul Kimia Lakukan

Overhaul menanggalkan keseluruhan unit dari dinding, membukanya, dan membersihkan setiap bahagian secara mendalam — gegelung, blower, sarung kipas dan dulang saliran. Ia adalah penyelesaian muktamad untuk kebocoran air kronik dan unit yang sangat tersumbat.

Overhaul kimia bermula dari RM 286 untuk unit 1.0–1.5 HP.

## Cara Memilih

- Pilih **cucian kimia** apabila unit menyejuk tetapi berbau sedikit, menitis sekali-sekala, atau terlalu lama tidak dicuci.
- Pilih **overhaul kimia** apabila unit sentiasa bocor air, tidak diservis bertahun-tahun, atau cucian kimia gagal membaikinya.

Kedua-duanya dilindungi jaminan kerja 1 bulan kami. Bandingkan harga penuh di [halaman servis aircond](/ms/services/aircon) kami.`
    },
    zh: {
      slug: "chemical-wash-vs-chemical-overhaul-aircon",
      title: "化学清洗 vs 化学大修：您需要哪种空调保养？",
      category: "空调",
      excerpt: "化学清洗无需拆机即可清洁蒸发器和风轮；大修则整机拆下。以下是如何为您的空调和预算选择正确方案。",
      metaTitle: "化学清洗 vs 化学大修 — 选哪种空调保养？",
      metaDesc: "吉隆坡与雪兰莪空调的化学清洗 vs 化学大修。对比费用、流程以及各自适用的场景。化学清洗从 RM 156 起，大修从 RM 286 起。",
      content: `选择化学清洗还是化学大修，取决于问题的严重程度。

## 化学清洗做什么

高压化学清洗使用碱性或抗菌溶液清洁蒸发器、风轮和排水，无需把整机从墙上拆下。它是霉味、轻微滴水以及使用 6–12 个月后制冷下降的标准解决方案。

挂壁机化学清洗从 RM 156 起（1.0–1.5 HP）。

## 化学大修做什么

大修把整机从墙上拆下、逐件分解，深度清洁每个部件——蒸发器、风轮、风扇外壳和接水盘。它是顽固漏水和严重堵塞机器的根治方案。

化学大修从 RM 286 起（1.0–1.5 HP）。

## 如何选择

- 如果机器制冷正常但有点异味、偶尔滴水，或太久没洗，选**化学清洗**。
- 如果机器持续漏水、多年未保养，或化学清洗未能解决，选**化学大修**。

两者均享有我们 1 个月工艺保修。在[空调服务页面](/zh/services/aircon)对比完整价格。`
    }
  },
  "aircon-gas-topup-guide-malaysia": {
    ms: {
      slug: "panduan-topup-gas-aircond-malaysia",
      title: "Panduan Top-Up Gas Aircond: Harga R22, R410A & R32 di Malaysia",
      category: "Aircond",
      excerpt: "R22 ialah RM 2.50 setiap PSI, R410A dan R32 ialah RM 3.00 setiap PSI. Ketahui cara top-up gas dikenakan, mengapa pemeriksaan kebocoran penting, dan bila top-up bukan penyelesaian sebenar.",
      metaTitle: "Panduan Top-Up Gas Aircond — Harga R22, R410A & R32",
      metaDesc: "Harga top-up gas aircond di Malaysia: R22 RM 2.50/PSI, R410A RM 3.00/PSI, R32 RM 3.00/PSI. Cara caj dikira dan mengapa pemeriksaan kebocoran sentiasa disertakan.",
      content: `Top-up gas ialah salah satu servis aircond yang paling kerap disalahfahami, jadi beginilah cara ia berfungsi.

## Harga Gas Setiap PSI

- Bahan pendingin R22: RM 2.50 setiap PSI
- Bahan pendingin R410A: RM 3.00 setiap PSI
- Bahan pendingin R32: RM 3.00 setiap PSI

Top-up gas dikenakan pada PSI sebenar yang diperlukan selepas juruteknik memeriksa di tapak. Kami hanya mengisi jumlah yang diperlukan, dan pemeriksaan kebocoran struktur (dari RM 114) disertakan.

## Mengapa Pemeriksaan Kebocoran Penting

Bahan pendingin tidak akan "habis" dengan sendirinya. Jika unit anda kurang gas, hampir pasti terdapat kebocoran di suatu tempat dalam sistem. Top-up tanpa mencari kebocoran bermakna gas akan hilang semula — selalunya dalam beberapa minggu.

## Bila Top-Up Gas Bukan Penyelesaian

Jika unit tidak sejuk kerana gegelung kotor atau pemampat gagal, menambah gas tidak akan membantu dan mungkin membazirkan wang anda. Diagnosis yang betul dahulu akan memberitahu sama ada anda perlukan gas, cucian kimia, atau penggantian bahagian.

Tempah top-up gas atau diagnosis di [halaman servis aircond](/ms/services/aircon) kami.`
    },
    zh: {
      slug: "aircon-gas-topup-guide-malaysia",
      title: "空调加雪种指南：马来西亚 R22、R410A 与 R32 价格",
      category: "空调",
      excerpt: "R22 为每 PSI RM 2.50，R410A 与 R32 为每 PSI RM 3.00。了解加雪种如何收费、为何检漏很重要，以及何时加雪种并非真正的解决方案。",
      metaTitle: "空调加雪种指南 — R22、R410A 与 R32 价格",
      metaDesc: "马来西亚空调加雪种价格：R22 每 PSI RM 2.50、R410A 每 PSI RM 3.00、R32 每 PSI RM 3.00。计费方式及为何始终包含检漏。",
      content: `加雪种是最常被误解的空调服务之一，以下是它的真实运作方式。

## 每 PSI 雪种价格

- R22 制冷剂：每 PSI RM 2.50
- R410A 制冷剂：每 PSI RM 3.00
- R32 制冷剂：每 PSI RM 3.00

加雪种按技术员现场检测后实际所需的 PSI 计费。我们只加所需用量，并包含结构性检漏（从 RM 114 起）。

## 为什么检漏很重要

制冷剂不会自己"用完"。如果机器雪种不足，系统中几乎一定存在泄漏。不检漏就加雪种，意味着雪种会再次泄漏——往往几周内就发生。

## 什么时候加雪种不是正解

如果机器不冷是因为蒸发器脏或压缩机故障，加雪种无济于事，甚至浪费钱。先做正确诊断，才能判断需要加雪种、化学清洗还是更换配件。

在[空调服务页面](/zh/services/aircon)预约加雪种或诊断。`
    }
  },
  "aircon-installation-cost-malaysia": {
    ms: {
      slug: "kos-pemasangan-aircond-malaysia",
      title: "Kos Pemasangan Aircond di Malaysia 2026: Apa Yang Disertakan",
      category: "Aircond",
      excerpt: "Pemasangan unit dinding dari RM 259, kaset siling dari RM 377. Beginilah apa yang disertakan — dan mengapa unit aircond itu sendiri bukan sebahagian daripada harga.",
      metaTitle: "Kos Pemasangan Aircond Malaysia 2026 — Apa Yang Disertakan",
      metaDesc: "Kos pemasangan aircond di KL & Selangor: unit dinding dari RM 259, kaset siling dari RM 377. Pemasangan sahaja — unit tidak termasuk. Paip tembaga 7 kaki disertakan.",
      content: `Harga pemasangan yang anda lihat adalah untuk pemasangan sahaja — unit aircond tidak termasuk, dan anda membekalkan unit sendiri.

## Harga Pemasangan

| Jenis unit | HP | Harga |
|---|---|---|
| Unit Dinding | 1.0–1.5 HP | Dari RM 259 |
| Unit Dinding | 2.0 HP | Dari RM 324 |
| Unit Dinding | 2.5 HP | Dari RM 363 |
| Unit Dinding | 3.0 HP | Dari RM 428 |
| Unit Dinding | 4.0 HP | Dari RM 519 |
| Unit Dinding | 5.0 HP | Dari RM 584 |
| Kaset Siling | 1.0–1.5 HP | Dari RM 377 |
| Unit Tingkap | 1.0–1.5 HP | Dari RM 259 |

## Apa Yang Disertakan

Setiap pemasangan termasuk paip tembaga 7 kaki, penebat, pendawaian elektrik, paip saliran, braket, pentauliahan pam vakum dan ujian penyejukan. Tembaga tambahan melebihi 7 kaki dikenakan caj setiap kaki.

## Mengapa Unit Tidak Termasuk

Kami memasang aircond yang anda miliki atau beli secara berasingan. Ini menjadikan harga telus — anda memilih jenama dan model, dan kami mengenakan kadar pemasangan yang jelas.

Lihat pecahan penuh di [halaman servis aircond](/ms/services/aircon) kami.`
    },
    zh: {
      slug: "aircon-installation-cost-malaysia",
      title: "马来西亚空调安装费用 2026：包含哪些内容",
      category: "空调",
      excerpt: "挂壁机安装从 RM 259 起、天花卡式从 RM 377 起。以下是具体包含内容——以及为何空调主机本身不计入价格。",
      metaTitle: "马来西亚空调安装费用 2026 — 包含哪些内容",
      metaDesc: "吉隆坡与雪兰莪空调安装费用：挂壁机从 RM 259 起、天花卡式从 RM 377 起。仅含安装——不含主机。含 7 英尺铜管。",
      content: `您看到的价格仅为安装费——空调主机不包含在内，主机由您自备。

## 安装价格

| 机型 | 匹数 | 价格 |
|---|---|---|
| 挂壁机 | 1.0–1.5 HP | 从 RM 259 起 |
| 挂壁机 | 2.0 HP | 从 RM 324 起 |
| 挂壁机 | 2.5 HP | 从 RM 363 起 |
| 挂壁机 | 3.0 HP | 从 RM 428 起 |
| 挂壁机 | 4.0 HP | 从 RM 519 起 |
| 挂壁机 | 5.0 HP | 从 RM 584 起 |
| 天花卡式 | 1.0–1.5 HP | 从 RM 377 起 |
| 窗式机 | 1.0–1.5 HP | 从 RM 259 起 |

## 包含哪些内容

每次安装包含 7 英尺铜管、保温棉、电线、排水管、支架、真空泵调试与制冷运行测试。超过 7 英尺的铜管按每英尺另计。

## 为什么不含主机

我们安装您已拥有或另行购买的空调。这让价格透明——您选择品牌和型号，我们收取清晰的安装费。

在[空调服务页面](/zh/services/aircon)查看完整明细。`
    }
  },
  "how-often-to-service-aircon-malaysia": {
    ms: {
      slug: "berapa-kerap-servis-aircond-malaysia",
      title: "Berapa Kerap Anda Perlu Servis Aircond di Malaysia?",
      category: "Aircond",
      excerpt: "Kebanyakan rumah Malaysia perlu servis aircond setiap 3–6 bulan, dengan cucian kimia setahun sekali. Beginilah jadual yang memastikan unit anda sejuk, bersih dan cekap.",
      metaTitle: "Berapa Kerap Servis Aircond di Malaysia — Panduan 3–6 Bulan",
      metaDesc: "Berapa kerap anda perlu servis aircond di Malaysia? Kami syorkan servis asas setiap 3–6 bulan dan cucian kimia setahun sekali. Jadual penyelenggaraan lengkap di dalam.",
      content: `Panas dan kelembapan Malaysia bermakna aircond anda bekerja lebih keras daripada hampir mana-mana tempat lain — jadi ia memerlukan penjagaan lebih kerap.

## Kekerapan Servis Disyorkan

- **Setiap 3–6 bulan**: servis asas (pembersihan penapis dan gegelung, pemeriksaan saliran dan gas). Sesuai untuk rumah yang menghidupkan aircond setiap malam.
- **Setahun sekali**: cucian kimia tekanan untuk membuang kotoran, kulat dan bau dari gegelung dan blower.
- **Setiap 3–5 tahun**: overhaul kimia penuh jika unit bocor air atau tidak dibersihkan dengan betul.

## Tanda Anda Perlu Servis Lebih Awal

- Udara tidak sejuk seperti dahulu
- Unit menitis air atau berbau apak
- Ada ais pada paip atau bunyi bergetar
- Bil elektrik anda meningkat

Servis berkala memastikan unit cekap, mencegah kerosakan dan memanjangkan jangka hayatnya. Tempah servis seterusnya di [halaman servis aircond](/ms/services/aircon) kami.`
    },
    zh: {
      slug: "how-often-to-service-aircon-malaysia",
      title: "马来西亚空调多久保养一次？",
      category: "空调",
      excerpt: "大多数马来西亚家庭应每 3–6 个月保养一次空调，每年做一次化学清洗。以下时间表可让您的机器保持制冷、清洁和高效。",
      metaTitle: "马来西亚空调多久保养一次 — 3–6 个月指南",
      metaDesc: "马来西亚空调多久保养一次？我们建议每 3–6 个月做一次基本保养，每年一次化学清洗。完整保养时间表见内文。",
      content: `马来西亚的高温高湿意味着您的空调比几乎任何地方都更辛苦——因此需要更频繁的保养。

## 建议保养频率

- **每 3–6 个月**：基本保养（滤网和蒸发器清洁、排水和雪种检查）。适合每晚都开空调的家庭。
- **每年一次**：高压化学清洗，清除蒸发器和风轮上的深层污垢、霉菌和异味。
- **每 3–5 年**：如果机器漏水或长期未彻底清洁，做一次完整化学大修。

## 需要提前保养的信号

- 出风不如以前冷
- 机器滴水或有霉味
- 管道结冰或出现咔嗒噪音
- 电费悄悄上涨

定期保养能保持机器高效、预防故障并延长寿命。在[空调服务页面](/zh/services/aircon)预约下一次保养。`
    }
  },
  /* ──────────────────────────────────────────────────────────────────────
   * Awning Installation supporting cluster (strategy §J) — post 1.
   * ────────────────────────────────────────────────────────────────────── */
  "polycarbonate-vs-metal-vs-acp-awning-malaysia": {
    ms: {
      slug: "perbandingan-awning-polikarbonat-metal-deck-acp",
      title: "Perbandingan Awning Polikarbonat, Metal Deck & ACP di Malaysia", category: "Awning",
      excerpt: "Bandingkan tiga bahan awning paling biasa untuk rumah di Malaysia — polikarbonat, metal deck dan ACP — dari segi cahaya, haba, bunyi hujan, penyelenggaraan dan faktor kos sebelum meminta sebut harga.",
      metaTitle: "Perbandingan Awning Polikarbonat, Metal Deck & ACP",
      metaDesc: "Bandingkan awning polikarbonat, metal deck dan ACP untuk rumah di Malaysia — cahaya, haba, bunyi hujan, penyelenggaraan dan faktor kos, serta cara memilih bahan sesuai.",
      content: `Jika anda merancang awning untuk car porch, ruang jemuran atau bahagian hadapan rumah di Kuala Lumpur atau Selangor, pilihan bahan biasanya tert kepada tiga: polikarbonat, metal deck atau panel komposit aluminium (ACP). Ketiga-tiganya banyak dipasang di rumah Malaysia, tetapi kelakuannya berbeza di bawah matahari tropika, hujan lebat dan kelembapan.

Panduan ini membandingkan ketiga-tiganya secara jujur — cahaya, haba, bunyi hujan, penyelenggaraan dan faktor kos — supaya anda boleh menyenarai pendek bahan yang sesuai sebelum meminta sebut harga. KL Servis Rumah memasang [awning tersuai](/ms/services/awning-installation) di seluruh KL & Selangor dalam ketiga-tiga bahan ini, dan setiap projek diukur serta disebut harga secara individu.

## Jawapan ringkas

- **Polikarbonat** — lembaran lut sinar yang membenarkan cahaya semula jadi masuk. Pilihan biasa apabila anda mahu teduhan dan lindungan hujan tanpa menggelapkan kawasan: car porch, ruang jemuran dan laluan.
- **Metal deck** — lembaran keluli berprofil yang kuat dan menjimatkan, dengan profil berinsulasi untuk mengurangkan haba dan bunyi hujan. Pilihan praktikal untuk kawasan utiliti dan porch yang boleh terlindung sepenuhnya.
- **ACP** — panel tegar berpermukaan aluminium yang kemas, moden dan legap, dengan penyelenggaraan paling rendah antara ketiga-tiganya. Popular untuk car porch dan hadapan rumah yang mengutamakan penampilan.

## Apa itu setiap bahan

### Polikarbonat

Polikarbonat ialah bumbung lembaran plastik lut sinar yang tersedia dalam profil jernih, tinted atau gangsa, termasuk pilihan twin-wall dan multi-wall. Ia ringan dan membenarkan cahaya masuk, sebab itulah ia antara bahan awning car porch paling biasa di Malaysia: kawasan bawahnya kekal cerah sementara hujan dan matahari terus ditahan daripada kenderaan. Profil tinted dan gangsa mengurangkan silau dan penyerapan haba; lembaran jernih paling cerah. Lihat halaman [awning polikarbonat](/ms/services/awning-installation/polycarbonate-awning) kami untuk butiran.

### Metal deck

Metal deck ialah bumbung lembaran logam berprofil, biasanya keluli. Ia kuat dan menjimatkan, sesuai untuk kawasan utiliti, ruang jemuran, porch dan bengkel. Profil berinsulasi dengan lapisan buih tersedia untuk mengurangkan haba dan bunyi hujan. Oleh sebab ia keluli, tepi lembaran, pengikat dan rangka perlu disapu primer anti-karat serta kemasan yang betul untuk bertahan dalam kelembapan kita. Butiran ada di halaman [awning metal deck](/ms/services/awning-installation/metal-deck-awning).

### Panel komposit aluminium (ACP)

Awning ACP menggunakan panel tegar berpermukaan aluminium yang memberikan kemasan legap, moden dan bersih. Panel ini menyekat silau dan haba dengan baik, lebih senyap semasa hujan berbanding lembaran logam nipis, dan tidak berkarat — jadi penyelenggaraannya sangat rendah. ACP popular untuk porch dan hadapan rumah yang mahu kelihatan kemas; panelnya tegar tetapi tetap memerlukan sokongan yang betul agar tidak melentuk pada bentang yang lebar. Lihat halaman [awning ACP](/ms/services/awning-installation/aluminium-composite-acp-awning).

## Perbandingan sebaris

| Aspek | Polikarbonat | Metal deck | ACP |
|---|---|---|---|
| Cahaya | Lut sinar — kawasan kekal cerah | Legap — kawasan terlindung sepenuhnya | Legap — kawasan terlindung sepenuhnya |
| Haba | Profil tinted mengurangkan haba; jernih membenarkan lebih banyak | Lembaran biasa menyerap haba; profil berinsulasi mengurangkannya | Sekat silau dan haba dengan baik |
| Bunyi hujan | Sederhana | Lembaran biasa boleh bising; profil berinsulasi lebih senyap | Lebih senyap daripada lembaran nipis |
| Penyelenggaraan | Rendah — basuh berkala, pastikan lembaran dan longkang bebas serpihan | Sederhana — periksa dan rawat titik karat pada bahagian keluli | Sangat rendah — basuh sesekali; panel tidak berkarat |
| Kegunaan biasa | Car porch, ruang jemuran, laluan, balkoni | Kawasan utiliti, ruang jemuran, porch, bengkel | Car porch, hadapan rumah, patio, halaman |

Panduan umum untuk keadaan KL & Selangor — prestasi sebenar bergantung pada gred produk, kualiti pemasangan dan penyelenggaraan.

## Haba dan cahaya: apa bezanya

Perbezaan praktikal terbesar antara ketiga-tiga bahan ialah apa yang berlaku di bawah lembaran itu.

**Polikarbonat** lut sinar. Profil jernih mengekalkan porch atau ruang jemuran hampir secerah udara terbuka — sebab itulah ramai pemilik rumah menyukainya di atas pintu masuk dan tingkap. Pertukarannya, lembaran jernih juga membenarkan lebih banyak haba dan cahaya masuk; jika haba menjadi kebimbangan utama, profil tinted atau gangsa lebih sesuai — ia mengurangkan silau dan penyerapan haba sambil masih membenarkan sedikit cahaya.

**Metal deck dan ACP legap.** Di bawah lembaran metal deck biasa, kawasan terlindung sepenuhnya dan lebih gelap, dan lembaran biasa memindahkan haba ke bawah — perlu dipertimbangkan untuk car porch atau ruang jemuran yang anda berdiri di dalamnya. Profil metal deck berinsulasi menambah lapisan buih yang mengurangkan kedua-dua haba dan hentakan bunyi hujan lebat. Panel ACP menyekat silau dan haba dengan baik serta memberikan rupa yang kemas dari bawah mahupun dari jalan.

Tiada bahan "paling sejuk" yang mutlak — arah rumah, pengudaraan, bentang dan profil lembaran semuanya mempengaruhi — tetapi secara amnya: teduhan penuh dan sekatan haba menunjuk kepada ACP atau metal deck berinsulasi, manakala kecerahan menunjuk kepada polikarbonat.

## Bunyi hujan

Bunyi hujan menentukan seberapa selesa porch atau ruang berbumbung semasa lebat di Klang Valley. Lembaran logam nipis biasa paling bising — hujan lebat menghentak bumbung satu lapisan dengan kuat sehingga mengganggu perbualan. Profil metal deck berinsulasi mengurangkannya dengan banyak. ACP lebih senyap berbanding lembaran nipis. Polikarbonat berada di antaranya; profil twin-wall juga membantu meredam bunyi.

Jika awning berada di atas kawasan duduk dan bukannya tempat letak kereta, ambil kira bunyi dalam pilihan bahan, bukan harga sahaja.

## Penyelenggaraan dalam cuaca Malaysia

Ketiga-tiga bahan penyelenggaraannya rendah, tetapi bukan bebas penyelenggaraan:

- **Polikarbonat** — basuh secara berkala dan pastikan daun dan serpihan tidak bertakung di atas lembaran dan longkang; elak menggosok kasar yang boleh mencalar permukaan.
- **Metal deck** — lembarannya tahan lasak, tetapi bahagian keluli (tepi, skru, flashing dan rangka) perlu diperiksa untuk titik karat dan dirawat awal. Ini juga sebab rangka kami difabrikasi dengan primer anti-karat dan kemasan tahan cuaca atau serbuk — lihat perkhidmatan [kimpalan dan fabrikasi logam](/ms/services/welding) kami.
- **ACP** — basuh sesekali sahaja yang diperlukan panel; ia tidak berkarat.

Dalam semua kes, bahagian yang biasanya rosak dahulu bukan lembaran bumbung tetapi sendi, pengedap, pengikat dan saliran — jadi membersihkan longkang dan memastikan air masih mengalir bebas lebih penting daripada pilihan antara ketiga-tiga bahan ini.

## Bahan awning mana yang patut dipilih?

Gunakan senarai semak ini untuk menyenarai pendek sebelum meminta sebut harga:

- **Mahu kawasan cerah** (pintu masuk, tingkap, laluan) → polikarbonat, jernih atau tinted.
- **Mahu sekatan haba dan silau maksimum** (porch menghadap barat, panas petang) → ACP atau metal deck berinsulasi.
- **Menutup kawasan utiliti atau jemuran yang kurang mementingkan penampilan** → metal deck.
- **Mahu rupa moden paling kemas di hadapan rumah** → ACP.
- **Kawasan sensitif bunyi** (ruang duduk, sebelah tingkap bilik tidur) → ACP atau metal deck berinsulasi berbanding lembaran biasa.
- **Rangka perlu menampung bentang lebar** → bincang saiz profil dan sokongan dengan kami; rangka, bukan lembaran, biasanya menentukan had struktur.

Khusus untuk car porch, polikarbonat tinted, ACP dan metal deck berinsulasi ialah tiga pilihan paling biasa kerana ia mengurangkan pengumpulan haba di atas kenderaan — halaman [awning car porch](/ms/services/awning-installation/car-porch-awning-installation) kami merangkumi butiran saliran dan ketinggian.

## Apa yang menjejaskan harga awning

Kerja awning di Malaysia disebut harga mengikut projek, bukan kadar tetap per kaki persegi, kerana setiap tapak berbeza. Faktor kos utama:

- Lebar, unjuran dan jumlah kawasan yang dilindungi
- Bahan bumbung dan profil lembaran atau panel (tint, twin-wall, berinsulasi)
- Bahan dan saiz profil rangka (keluli lembut, aluminium atau stanles) serta kemasannya
- Ketinggian, akses dan kerumitan pemasangan
- Struktur sedia ada dan keperluan pengukuhan
- Keperluan saliran — longkang, paip turun, flashing dan pengedap
- Pembongkaran dan pelupusan awning lama, jika perlu
- Warna, reka bentuk tersuai dan sebarang spesifikasi strata atau pihak berkuasa tempatan

Maklumat paling berguna untuk sebut harga ialah lokasi anda, foto tapak dan titik pengancing, lebar dan unjuran anggaran, bahan atau rupa yang anda mahu, sama ada awning lama perlu dibongkar, dan sebarang peraturan pengurusan atau pihak berkuasa setempat.

## Soalan lazim

### Bahan awning mana yang paling murah?

Tiada susunan tetap — kos awning bergantung pada kawasan yang dilindungi, profil lembaran atau panel, saiz profil rangka, akses dan saliran, bukan sekadar nama bahan. Sebut harga projek yang berperincian adalah cara paling dipercayai untuk membandingkan harga bagi tapak anda.

### Bahan mana paling sesuai untuk car porch di Malaysia?

Untuk car porch, polikarbonat tinted, ACP dan metal deck berinsulasi paling biasa dipilih kerana ia mengurangkan pengumpulan haba di atas kenderaan. Polikarbonat jernih paling cerah tetapi membenarkan lebih banyak haba; ACP memberikan rupa paling kemas dengan penyelenggaraan paling rendah.

### Boleh dapat cadangan sebelum memilih bahan?

Boleh. Hantar foto porch atau halaman anda bersama ukuran anggaran di WhatsApp. Untuk projek yang mudah, itu selalunya cukup untuk sebut harga; jika bentang, titik pengancing atau saliran perlu diperiksa, penilaian tapak akan diatur sebelum reka bentuk dimuktamadkan.

## Dapatkan cadangan bahan dan sebut harga

Beritahu kami di mana awning akan dipasang dan apa yang paling mengganggu anda — haba, hujan, cahaya atau bunyi — dan kami akan mencadangkan bahan yang sesuai dengan tapak anda serta menyediakan sebut harga berperincian khusus projek. [Chat dengan pasukan kami di WhatsApp](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah%2C%20saya%20ingin%20dapatkan%20cadangan%20dan%20sebut%20harga%20untuk%20awning.)`
    },
    zh: {
      slug: "ju-tan-suan-zhi-jin-shu-wa-yu-acp-yu-peng-bi-jiao",
      title: "马来西亚雨棚材料比较：聚碳酸酯、金属瓦与ACP", category: "雨棚",
      excerpt: "比较聚碳酸酯、金属瓦与ACP三种马来西亚最常见的雨棚材料——采光、隔热、雨声、保养与价格因素，帮助您在询价前选出合适的材料。",
      metaTitle: "聚碳酸酯、金属瓦与ACP雨棚比较",
      metaDesc: "比较聚碳酸酯、金属瓦与ACP雨棚的采光、隔热、雨声、保养与价格因素，帮您在询价前选出适合马来西亚住家的雨棚材料。",
      content: `在吉隆坡或雪兰莪为车棚、晾衣区或屋前规划雨棚时，材料选择通常归结为三种：聚碳酸酯（PC 板）、金属瓦（metal deck）或铝塑板（ACP）。三者都广泛用于马来西亚住宅，但在热带烈日、暴雨和潮湿环境下的表现各不相同。

本文从采光、隔热、雨声、保养和价格因素五个方面如实比较这三种材料，让您在索取报价前先锁定合适的选择。KL Servis Rumah 在吉隆坡与雪兰莪安装定制[雨棚系统](/zh/services/awning-installation)，三种材料皆有提供，每个项目都单独测量和报价。

## 简短结论

- **聚碳酸酯** — 透光板材，让自然光透过。想要遮阳挡雨又不让空间变暗时的常见选择：车棚、晾衣区和走道。
- **金属瓦** — 压型钢板，坚固经济，另有带保温层的型号可降低热度和雨声。适合可以完全遮光的实用区域和车棚。
- **ACP（铝塑板）** — 坚硬的铝面复合板，外观干净现代、完全不透光，三者中保养最少。常用于注重外观的车棚和屋前。

## 三种材料分别是什么

### 聚碳酸酯

聚碳酸酯是半透明塑料板材，有透明、有色（tinted）和古铜色等型号，也包括中空（twin-wall）和多层结构。它轻便透光，因此是马来西亚车棚雨棚最常用的材料之一：下方空间保持明亮，同时挡住雨水和直射阳光。有色和古铜型号可减少眩光与热辐射；透明板最亮。详情见我们的[聚碳酸酯雨棚](/zh/services/awning-installation/polycarbonate-awning)页面。

### 金属瓦

金属瓦是压型金属屋面板材，以钢板为主。它坚固经济，适合实用区、晾衣区、车棚和工作间。带保温层的型号可降低热度和雨声。由于是钢材，板材边缘、紧固件和骨架需要做好防锈底漆和饰面，才能应付本地的潮湿气候。详情见[金属瓦雨棚](/zh/services/awning-installation/metal-deck-awning)页面。

### 铝塑板（ACP）

ACP 雨棚使用坚硬的铝面复合板，呈现干净、现代、不透光的效果。面板能有效阻挡眩光和热气，下雨时比薄金属板安静，而且不会生锈，因此保养极低。ACP 常用于注重整洁外观的车棚和屋前；面板坚硬，但仍需正确支撑以避免大跨距下垂。见 [ACP 雨棚](/zh/services/awning-installation/aluminium-composite-acp-awning)页面。

## 一览对比

| 方面 | 聚碳酸酯 | 金属瓦 | ACP |
|---|---|---|---|
| 采光 | 半透明——空间明亮 | 不透光——完全遮光 | 不透光——完全遮光 |
| 隔热 | 有色型号减少热辐射；透明板透热较多 | 普通板导热；保温型号可降低 | 阻挡眩光和热气效果好 |
| 雨声 | 中等 | 普通板较响；保温型号更安静 | 比薄金属板安静 |
| 保养 | 低——定期冲洗，清理板材和排水沟杂物 | 中——检查并处理钢件锈点 | 极低——偶尔冲洗；面板不生锈 |
| 常见用途 | 车棚、晾衣区、走道、阳台 | 实用区、晾衣区、车棚、工作间 | 车棚、屋前、露台、庭院 |

以上为吉隆坡与雪兰莪气候的一般参考——实际表现取决于产品等级、安装质量和保养。

## 隔热与采光差异

三种材料最实际的差别在于板材下方发生什么。

**聚碳酸酯**半透明。透明型号让车棚或晾衣区几乎像露天一样明亮，因此许多屋主喜欢把它装在大门和窗户上方。代价是透明板透入的热量和光线也更多；如果您最在意热气，有色或古铜型号更合适——既减少眩光和热辐射，仍保留部分采光。

**金属瓦和 ACP 不透光。**普通金属瓦下方完全遮光且明显变暗，而且普通板材会把热往下传——若车棚或晾衣区需要久站，这点值得留意。保温金属瓦增加一层泡棉，可同时降低热度和暴雨敲击声。ACP 面板阻挡眩光和热气的效果好，从下方和街上看起来都干净利落。

并不存在绝对的"最凉"材料——朝向、通风、跨距和板材型号都有影响——但大致规律是：要全遮光和阻热选 ACP 或保温金属瓦，要明亮选聚碳酸酯。

## 雨声

雨声决定暴雨时（Klang Valley 的常态）雨棚下方有多舒适。普通薄金属板最响——暴雨敲在单层屋面上，声音足以盖过谈话。保温金属瓦能大幅降低。ACP 比薄板安静。聚碳酸酯居中；中空板也有助于降低噪音。

如果雨棚覆盖的是座位区而非停车位，选材时应把噪音考虑在内，而不只是价格。

## 马来西亚气候下的保养

三种材料都算低保养，但并非免保养：

- **聚碳酸酯** — 定期冲洗，保持板材和排水沟无落叶杂物；避免用力刮擦以免刮花表面。
- **金属瓦** — 板材本身耐用，但钢件（边缘、螺丝、泛水板和骨架）应定期检查锈点并尽早处理。这也是我们的骨架一律做防锈底漆加耐候或粉末喷涂的原因——见我们的[焊接与金属加工](/zh/services/welding)服务。
- **ACP** — 偶尔冲洗即可；面板不生锈。

无论哪种材料，最先出问题的通常不是屋面板材，而是接缝、密封胶、紧固件和排水——因此清理排水沟、确认排水顺畅，比在三种材料之间挑选更重要。

## 该选哪种雨棚材料？

询价前可用这份清单初步筛选：

- **想保持空间明亮**（大门、窗户、走道）→ 聚碳酸酯，透明或有色。
- **想最大限度隔热挡眩光**（朝西车棚、午后西晒）→ ACP 或保温金属瓦。
- **覆盖不太讲究外观的实用区或晾衣区** → 金属瓦。
- **想要屋前最干净现代的外观** → ACP。
- **对噪音敏感的位置**（座位区、卧室窗旁）→ 选 ACP 或保温金属瓦，避免普通板。
- **骨架需承受较大跨距** → 与我们讨论骨架规格和支撑；决定结构上限的通常是骨架而非板材。

就车棚而言，有色聚碳酸酯、ACP 和保温金属瓦是最常见的三种选择，因为它们能减少车辆上方的积热——我们的[车棚雨棚](/zh/services/awning-installation/car-porch-awning-installation)页面有排水与净空的细节。

## 雨棚价格受什么影响

马来西亚的雨棚按项目报价，没有固定的每平方英尺单价，因为每个现场都不同。主要成本因素包括：

- 宽度、悬挑和总覆盖面积
- 屋面材料和板材型号（有色、中空、保温）
- 骨架材料与规格（低碳钢、铝或不锈钢）及饰面
- 高度、进场条件和安装难度
- 现有结构和是否需要加固
- 排水需求——排水沟、落水管、泛水板和密封胶
- 需要时的旧雨棚拆除与清运
- 颜色、定制设计以及任何分层地契或地方当局规范

索取报价时最有用的信息：您的位置、现场和固定点的照片、大致宽度和悬挑、偏好的材料或外观、是否需要拆除旧雨棚，以及适用的管理层或市政规定。

## 常见问题

### 哪种雨棚材料最便宜？

没有固定排序——雨棚成本取决于覆盖面积、板材型号、骨架规格、进场条件和排水，而不只是材料名称。针对您的现场出具的分项报价单，才是比较价格的可靠方式。

### 马来西亚车棚雨棚选哪种材料最好？

车棚方面，有色聚碳酸酯、ACP 和保温金属瓦最常见，因为它们能减少车辆上方的积热。透明聚碳酸酯最亮但透热较多；ACP 外观最整洁、保养最少。

### 可以先获得建议再决定材料吗？

可以。在 WhatsApp 上发来车棚或庭院的照片和大致尺寸。简单项目通常足以报价；若跨距、固定点或排水需要核实，我们会在设计定案前安排现场评估。

## 获取选材建议与报价

告诉我们雨棚要装在哪里，以及最困扰您的是热、雨、光还是噪音，我们会推荐适合您现场的材料，并提供针对项目的分项报价单。[在 WhatsApp 与我们的团队聊聊](https://wa.me/601116627349?text=%E4%BD%A0%E5%A5%BD%20KL%20Servis%20Rumah%EF%BC%8C%E6%88%91%E6%83%B3%E4%B8%BA%E9%9B%A8%E6%A3%9A%E8%8E%B7%E5%8F%96%E9%80%89%E6%9D%90%E5%BB%BA%E8%AE%AE%E5%92%8C%E6%8A%A5%E4%BB%B7%E3%80%82)`
    }
  },
  "car-porch-awning-guide-malaysia": {
    ms: {
      slug: "panduan-awning-car-porch-malaysia",
      title: "Panduan Awning Car Porch: Bahan, Saliran & Faktor Kos", category: "Awning",
      excerpt: "Panduan lengkap awning car porch untuk rumah di KL & Selangor — pilihan bahan, haba, ketinggian kenderaan, kecerunan dan saliran, serta apa yang perlu dihantar untuk sebut harga yang tepat.",
      metaTitle: "Panduan Awning Car Porch: Bahan, Saliran & Faktor Kos",
      metaDesc: "Panduan awning car porch untuk rumah di KL & Selangor — bahan, haba, ketinggian kenderaan, kecerunan dan saliran, serta apa perlu dihantar untuk sebut harga tepat.",
      content: `Car porch ialah aplikasi awning paling biasa di Kuala Lumpur dan Selangor — dan yang paling banyak mendapat nasihat bercanggah. Panduan ini merangkumi apa yang benar-benar penting semasa merancangnya: pilihan bahan, haba, ketinggian kenderaan, saliran dan struktur, serta apa yang perlu dihantar untuk sebut harga yang tepat.

KL Servis Rumah mengukur, memfabrikasi dan memasang [awning car porch](/ms/services/awning-installation/car-porch-awning-installation) di seluruh KL & Selangor, disebut harga mengikut projek.

## Jawapan ringkas

- Kebanyakan awning car porch di Malaysia menggunakan **polikarbonat tinted, metal deck berinsulasi atau ACP** — tiga bahan yang mengurangkan pengumpulan haba di atas kenderaan.
- Reka bentuk ditentukan oleh empat fakta tapak: **bentang, ketinggian kenderaan, titik pengancing dan saliran**.
- Saliran dirancang, bukan direka sambil lewa: kecerunan, longkang dan paip turun menyalurkan air hujan keluar dari porch dan dinding rumah.
- Untuk sebut harga, hantar **foto porch dan titik pengancing bersama lebar dan kedalaman anggaran** — selalunya cukup untuk sebut harga tanpa lawatan tapak.

## Memilih bahan bumbung untuk car porch

Awning car porch ialah bumbung yang berfungsi, bukan hiasan. Tiga pilihan paling biasa:

### Polikarbonat tinted

Lembaran lut sinar yang mengekalkan porch kekal cerah sambil meneduhi kenderaan. Profil tinted dan gangsa mengurangkan silau dan haba berbanding lembaran jernih — pertukaran biasanya ialah lembaran jernih paling cerah tetapi membenarkan lebih banyak haba. Ringan dan digunakan secara meluas untuk porch. Lihat [awning polikarbonat](/ms/services/awning-installation/polycarbonate-awning).

### Metal deck berinsulasi

Lembaran keluli berprofil dengan lapisan buih yang mengurangkan kedua-dua haba dan bunyi hujan. Kuat dan menjimatkan; bahagian keluli perlu primer anti-karat dan kemasan — rangka kami difabrikasi dengan primer serta kemasan tahan cuaca atau serbuk. Lihat [awning metal deck](/ms/services/awning-installation/metal-deck-awning).

### ACP (panel komposit aluminium)

Panel tegar berpermukaan aluminium dengan rupa legap, moden dan kemas. Menyekat silau dan haba dengan baik, senyap semasa hujan, tiada karat pada panel, penyelenggaraan sangat rendah — pilihan popular untuk porch yang menghadap jalan. Lihat [awning ACP](/ms/services/awning-installation/aluminium-composite-acp-awning).

Untuk perbandingan yang lebih mendalam, lihat panduan kami mengenai [awning polikarbonat vs metal deck vs ACP](/ms/blog/perbandingan-awning-polikarbonat-metal-deck-acp).

## Haba: menyejukkan kereta dan dinding rumah

Tujuan awning porch ialah teduhan. Bahan legap (ACP, metal deck) menyekat lebih banyak silau dan haba, manakala polikarbonat tinted mengurangkan haba dan masih membenarkan sedikit cahaya. Kami tidak menjanjikan penurunan suhu tertentu — arah rumah, pengudaraan dan bangunan itu sendiri semuanya memberi kesan — tetapi meneduhi porch menjaga kereta, pintu dan dinding sebelah daripada matahari terus dan hujan.

## Ketinggian kenderaan, ruang atas dan bentang

Awning mesti melepasi kenderaan anda — termasuk SUV keluarga dan van sekali-sekala — sambil kekal cukup rendah untuk memberi teduhan sebenar. Bentang porch, titik pengancing pada dinding dan rasuk, ketinggian kenderaan, saliran dan pendedahan haba bersama-sama menentukan saiz profil rangka, unjuran dan bahan. Ini diukur, bukan dineka: sebutkan kenderaan tertinggi yang anda letakkan awal dalam perbincangan.

## Saliran: kecerunan, longkang dan paip turun

Bumbung car porch mengumpulkan banyak air semasa hujan lebat di Klang Valley. Awning diberikan kecerunan yang mencukupi supaya air hujan mengalir ke sisi atau longkang yang dirancang, sendi dan flashing dinding dikedap, dan longkang atau paip turun ditambah di mana isipadu air memerlukannya. Air bertakung di atas awning biasanya tanda kecerunan atau sokongan tidak mencukupi — antara perkara pertama yang kami periksa pada [awning lama atau bocor](/ms/services/awning-installation/awning-replacement-and-repair). Longkang tersumbat juga menyebabkan limpahan ke dinding — lihat [longkang tersumbat dan bocor](/ms/problems/clogged-gutter-leaking) jika kedengaran biasa.

## Titik pengancing dan struktur

Rangka dipasang pada dinding, rasuk atau slab anda — atau berdiri atas tiang apabila struktur tidak mampu menampung beban. Jika struktur sedia ada tidak cukup kuat, pengukuhan atau tiang tambahan dimasukkan dalam sebut harga. Fabrikasi dan kemasan rangka adalah sebahagian daripada kerja: rangka keluli kami dibina dengan primer anti-karat dan kemasan tahan cuaca atau serbuk — lihat [kimpalan dan fabrikasi logam](/ms/services/welding).

## Rumah berasingan vs strata: semak peraturan dahulu

Jika anda tinggal di kondominium, pangsapuri atau komuniti berpagar, JMB/MC mungkin mempunyai garis panduan mengenai unjuran, ketinggian, warna atau reka bentuk awning, dan keperluan pihak berkuasa tempatan juga boleh terpakai. Semak dengan pejabat pengurusan anda sebelum memuktamadkan reka bentuk; kami boleh memberikan skop, dimensi dan spesifikasi untuk menyokong permohonan, tetapi kelulusan yang terpakai untuk hartanah anda perlu disahkan dengan pengurusan atau pihak berkuasa tempatan.

## Apa yang perlu dihantar untuk sebut harga awning car porch

- Foto porch dari beberapa sudut, termasuk dinding atau rasuk tempat rangka akan dipasang
- Lebar dan kedalaman (unjuran) anggaran kawasan yang hendak dilindungi
- Kenderaan tertinggi yang anda letakkan secara tetap (atau ketinggiannya)
- Bahan atau rupa yang anda mahu — polikarbonat tinted, metal deck atau ACP
- Sama ada ada awning lama yang perlu dibongkar
- Sebarang peraturan pengurusan atau pihak berkuasa yang terpakai

Dengan foto dan dimensi, banyak sebut harga boleh disediakan secara jarak jauh; penilaian tapak diatur apabila bentang, struktur atau saliran perlu diperiksa.

## Soalan lazim

### Bolehkah awning dipasang pada porch terbuka sedia ada?

Boleh — car porch ialah antara aplikasi awning paling biasa di KL dan Selangor. Bentang, titik pengancing, ketinggian kenderaan dan saliran menentukan saiz profil rangka, unjuran dan bahan; kami menilai porch sebelum memuktamadkan reka bentuk.

### Berapa lama pemasangan awning car porch mengambil masa?

Penggantian yang mudah atau awning porch kecil selalunya boleh disiapkan dalam sehari setelah bahan sedia; awning yang lebih besar atau difabrikasi khas memerlukan masa fabrikasi tambahan serta satu atau lebih hari pemasangan. Kami mengesahkan jadual bersama sebut harga anda.

### Adakah awning porch menghalang cahaya semula jadi saya?

Jika porch juga menjadi sumber cahaya untuk pintu masuk anda, polikarbonat tinted atau jernih membenarkan cahaya masuk, manakala ACP dan metal deck legap dan meneduhi sepenuhnya. Putuskan sama ada anda mahu kecerahan atau teduhan penuh sebelum memilih.

## Dapatkan sebut harga awning car porch

Hantar foto porch anda bersama dimensi anggaran di WhatsApp dan kami akan mencadangkan bahan dan reka bentuk untuk tapak anda, dengan sebut harga berperincian khusus projek. [Chat dengan pasukan kami](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah%2C%20saya%20ingin%20sebut%20harga%20untuk%20awning%20car%20porch.)`
    },
    zh: {
      slug: "che-peng-yu-peng-zhi-nan-ma-lai-xi-ya",
      title: "车棚雨棚指南：材料、排水与价格因素", category: "雨棚",
      excerpt: "吉隆坡与雪兰莪车棚雨棚完整指南——材料选择、隔热、车辆净空、坡度与排水，以及询价前应准备的信息。",
      metaTitle: "车棚雨棚指南：材料与排水要点",
      metaDesc: "吉隆坡与雪兰莪车棚雨棚指南：材料选择、隔热、车辆净空、坡度与排水，以及询价前应准备的信息。",
      content: `车棚（car porch）是吉隆坡和雪兰莪最常见的雨棚应用，也是建议最五花八门的一种。本指南涵盖规划时真正重要的事项：材料选择、隔热、车辆净空、排水与结构，以及询价前应准备的信息。

KL Servis Rumah 在吉隆坡与雪兰莪测量、加工并安装[车棚雨棚](/zh/services/awning-installation/car-porch-awning-installation)，按项目报价。

## 简短结论

- 马来西亚大多数车棚雨棚使用**有色聚碳酸酯、保温金属瓦或 ACP**——这三种材料能减少车辆上方的积热。
- 设计取决于四个现场条件：**跨距、车辆净空、固定点和排水**。
- 排水是规划出来的，不是临时凑合：坡度、排水沟和落水管把雨水引离车棚和墙体。
- 询价时请发送**车棚与固定点的照片，加上大致的宽度和深度**——通常无需现场勘察即可报价。

## 车棚雨棚的材料选择

车棚雨棚是实用的屋面，不是装饰。三种最常见的选择：

### 有色聚碳酸酯

半透明板材，让车棚保持明亮的同时为车辆遮阳。有色和古铜型号比透明板更能减少眩光与热气——透明板最亮但透热较多。轻便，广泛用于车棚。见[聚碳酸酯雨棚](/zh/services/awning-installation/polycarbonate-awning)。

### 保温金属瓦

带泡棉层的压型钢板，同时降低热度和雨声。坚固经济；钢件需要防锈底漆和饰面——我们的骨架一律做防锈底漆加耐候或粉末喷涂。见[金属瓦雨棚](/zh/services/awning-installation/metal-deck-awning)。

### ACP（铝塑板）

坚硬的铝面复合板，外观干净、现代、不透光。有效阻挡眩光和热气，下雨安静，面板不生锈，保养极低——车棚面向马路时的热门选择。见 [ACP 雨棚](/zh/services/awning-installation/aluminium-composite-acp-awning)。

更深入的比较，请参阅我们的[聚碳酸酯、金属瓦与 ACP 雨棚比较](/zh/bo-ke/ju-tan-suan-zhi-jin-shu-wa-yu-acp-yu-peng-bi-jiao)指南。

## 隔热：让车和墙面更凉

车棚雨棚的意义在于遮阳。不透光材料（ACP、金属瓦）阻挡更多眩光和热气；有色聚碳酸酯减少热气又保留部分采光。我们不承诺具体的降温幅度——朝向、通风和建筑本身都有影响——但遮住车棚能让车、大门和旁边墙面免受直射阳光和雨水。

## 车辆净空、高度与跨距

雨棚必须高过您的车辆——包括家里的 SUV 和偶尔进出的 van——又不能太高而失去遮阳效果。车棚跨距、墙体与横梁固定点、车辆净空、排水和暴晒程度共同决定骨架规格、悬挑和材料。这些靠测量，不靠猜测：趁早告诉我们您停放的最高车辆。

## 排水：坡度、排水沟与落水管

一场 Klang Valley 的暴雨里，车棚屋面会接到大量雨水。雨棚会设计足够的坡度让雨水流向指定一侧或排水沟，接缝和墙面泛水板做好密封，水量大的位置加装排水沟或落水管。雨棚上积水通常是坡度或支撑不足的信号——这也是我们检查[旧雨棚或漏水雨棚](/zh/services/awning-installation/awning-replacement-and-repair)时最先看的地方。排水沟堵塞还会导致雨水漫过墙面——如果情况熟悉，见[排水沟堵塞漏水](/zh/problems/clogged-gutter-leaking)。

## 固定点与结构

骨架固定在您的墙体、横梁或楼板上——结构无法承重时则改用立柱支撑。现有结构不够牢固时，加固或加柱会列入报价。骨架的加工与饰面属于工程的一部分：我们的钢制骨架做防锈底漆加耐候或粉末喷涂——见[焊接与金属加工](/zh/services/welding)。

## 有地住宅 vs 分层地契：先查规定

如果您住在公寓、组屋或围篱社区，共管机构（JMB/MC）可能对雨棚悬挑、高度、颜色或设计有规范，地方政府的要求也可能适用。确定设计前先向管理处查询；我们可以提供工程范围、尺寸和规格以支持申请，但适用于您产业的审批应向管理层或地方当局确认。

## 车棚雨棚询价要准备什么

- 车棚几个角度的照片，包括骨架将固定的墙体或横梁
- 需覆盖面积的大致宽度与深度（悬挑）
- 您日常停放的最高车辆（或其高度）
- 偏好的材料或外观——有色聚碳酸酯、金属瓦或 ACP
- 是否需要拆除旧雨棚
- 适用的管理处或市政规定

有了照片和尺寸，很多报价可以远程完成；跨距、结构或排水需要核实时，我们会安排现场评估。

## 常见问题

### 开放式车棚可以加装雨棚吗？

可以——车棚是吉隆坡和雪兰莪最常见的雨棚应用之一。跨距、固定点、车辆净空和排水决定骨架规格、悬挑和材料；我们会在设计定案前评估车棚。

### 车棚雨棚安装需要多久？

材料备齐后，简单的更换或小型车棚雨棚通常一天内完成；较大或定制加工的雨棚需要加工时间加一天或几天的安装。确切时间会连同报价单一并确认。

### 车棚雨棚会挡住采光吗？

如果车棚也是大门的主要采光来源，有色或透明聚碳酸酯可让光线透过；ACP 和金属瓦不透光，完全遮蔽。选材前先决定要明亮还是全遮光。

## 获取车棚雨棚报价

在 WhatsApp 上发送车棚照片和大致尺寸，我们会推荐适合您现场的材料和设计，并提供针对项目的分项报价单。[与我们的团队聊聊](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah%EF%BC%8C%E6%88%91%E6%83%B3%E4%B8%BA%E8%BD%A6%E6%A3%9A%E9%9B%A8%E6%A3%9A%E8%8E%B7%E5%8F%96%E6%8A%A5%E4%BB%B7%E3%80%82)`
    }
  },
  "how-awning-pricing-works-malaysia": {
    ms: {
      slug: "bagaimana-harga-awning-dikira-di-malaysia",
      title: "Bagaimana Harga Awning Dikira di Malaysia", category: "Awning",
      excerpt: "Harga awning di Malaysia disebut mengikut projek, bukan kadar tetap. Panduan ini mengupas lapan faktor kos — saiz, bahan, rangka, akses, saliran, pembongkaran dan lagi — serta apa yang perlu dihantar untuk sebut harga tepat.",
      metaTitle: "Bagaimana Harga Awning Dikira di Malaysia",
      metaDesc: "Harga awning di Malaysia disebut mengikut projek. Kenali lapan faktor kos — saiz, bahan, rangka, akses, saliran, pembongkaran — dan cara mendapatkan sebut harga tepat.",
      content: `Cari "harga awning Malaysia" dan anda akan jumpa angka per kaki persegi di merata tempat — tetapi jarang penjelasan apa yang termasuk dalam angka itu. Sebenarnya, kerja awning disebut harga mengikut projek: dua awning bersaiz sama boleh berbeza harga bergantung pada bahan, rangka, akses dan saliran.

Panduan ini menerangkan bagaimana sebut harga awning disusun, apa yang menggerakkan harga, dan maklumat tepat yang perlu dihantar supaya sebut harga anda tepat dari kali pertama. KL Servis Rumah memasang [awning tersuai di seluruh KL & Selangor](/ms/services/awning-installation); setiap sebut harga kami adalah khusus projek dan berperincian.

## Jawapan ringkas

Harga awning di Malaysia disebut mengikut projek kerana lapan pemboleh ubah mengubah hampir setiap kerja:

1. **Kawasan dilindungi** — lebar × unjuran
2. **Bahan bumbung dan profil** — polikarbonat, metal deck, ACP, kaca atau fabrik
3. **Bahan, saiz profil dan kemasan rangka**
4. **Ketinggian dan akses**
5. **Struktur sedia ada dan pengukuhan**
6. **Saliran** — longkang, paip turun, flashing dan pengedap
7. **Pembongkaran dan pelupusan awning lama**
8. **Reka bentuk tersuai dan spesifikasi strata atau pihak berkuasa tempatan**

Kadar umum yang diterbitkan tidak dapat mengambil kira semua ini — sebab itulah kami menyebut harga mengikut projek.

## Lapan faktor kos diterangkan

### 1. Kawasan dilindungi — lebar × unjuran

Sebut harga bermula dengan saiz awning: lebar sepanjang dinding dan unjuran keluar darinya. Kawasan dilindungi menentukan jumlah lembaran atau panel bumbung, panjang profil rangka, bilangan braket atau tiang, pengikat dan buruh. Bentang yang lebih lebar mungkin juga memerlukan profil rangka lebih berat atau sokongan tambahan, jadi kos tidak semestinya berskala mudah dengan keluasan.

### 2. Bahan bumbung dan profil

Bahan ialah pemacu kos yang paling ketara. Polikarbonat datang dalam pelbagai profil dan tint; metal deck ada profil biasa dan berinsulasi; panel ACP, kaca tempered dan sistem fabrik masing-masing mempunyai kos bahan dan pemasangan berbeza. Dalam keluarga bahan yang sama, profil mengubah harga — profil metal deck berinsulasi atau lembaran polikarbonat twin-wall ialah produk berbeza daripada lembaran satu lapisan asas. Lihat halaman [awning polikarbonat](/ms/services/awning-installation/polycarbonate-awning), [awning metal deck](/ms/services/awning-installation/metal-deck-awning) dan [awning ACP](/ms/services/awning-installation/aluminium-composite-acp-awning) kami.

### 3. Bahan, saiz profil dan kemasan rangka

Setiap awning berada di atas rangka — biasanya keluli lembut, aluminium atau stanles, bersaiz mengikut bentang. Bentang lebih besar atau bahan bumbung lebih berat memerlukan profil lebih besar, dan kemasan juga penting: rangka keluli kami difabrikasi dengan primer anti-karat dan kemasan tahan cuaca atau serbuk — sebahagian kerja yang disebut harga, bukan tambahan pilihan.

### 4. Ketinggian dan akses

Porch tingkat bawah dengan akses terbuka ialah pemasangan paling mudah. Balkoni tingkat atas, lokasi kondominium, laluan sisi sempit atau tempat yang memerlukan perancah atau kelengkapan pengangkatan mengambil masa dan kelengkapan lebih banyak — dan itu dimasukkan secara jujur dalam sebut harga.

### 5. Struktur sedia ada dan pengukuhan

Awning mesti dipasang pada sesuatu. Jika dinding, rasuk atau slab di tapak anda cukup kuat, pengancing adalah mudah; jika tidak, pengukuhan atau tiang tambahan dimasukkan dalam sebut harga. Ini juga sebab foto titik pengancing sangat berguna sebelum sebut harga.

### 6. Saliran — longkang, paip turun, flashing dan pengedap

Air hujan perlu ke suatu tempat. Bergantung pada keluasan bumbung dan tempat air boleh disalurkan, reka bentuk mungkin merangkumi longkang, paip turun, flashing dinding dan pengedap. Kecerunan yang dirancang dengan baik memastikan air mengalir ke arah yang betul dan menghalang takungan — dan semua item ini disenaraikan dalam sebut harga, bukan disembunyikan dalam jumlah lumsum.

### 7. Pembongkaran dan pelupusan awning lama

Menggantikan awning sedia ada? Pembongkaran dan pelupusan struktur lama juga kerja, dan dimasukkan sebagai item tersendiri dalam sebut harga jika diperlukan. Lihat [penggantian dan pembaikan awning](/ms/services/awning-installation/awning-replacement-and-repair).

### 8. Reka bentuk tersuai dan spesifikasi strata

Warna, tint lembaran, warna panel dan bentuk tersuai selalunya boleh dipilih, tertakluk kepada ketersediaan bahan. Jika anda tinggal di hartanah strata, pengurusan (JMB/MC) anda mungkin menetapkan warna, unjuran atau reka bentuk yang dibenarkan — memenuhi spesifikasi itu boleh mempengaruhi kerja yang disebut harga.

## Kenapa tidak menerbitkan senarai harga tetap?

Kami menerbitkan harga permulaan untuk kebanyakan perkhidmatan kami dalam [direktori perkhidmatan](/ms/services) kerana kerja tersebut mempunyai skop yang berulang. Kerja awning tidak: bentang, struktur, akses dan saliran berbeza di setiap rumah. Angka generik akan menjadi terlalu rendah sehingga mengelirukan atau dilembutkan untuk menampung kes terburuk — jadi kami menyebut harga mengikut projek selepas melihat foto dan dimensi anda.

## Cara mendapatkan sebut harga yang tepat dari kali pertama

Hantar ini di WhatsApp:

- Lokasi atau kawasan anda
- Di mana awning akan dipasang (porch, balkoni, tingkap, halaman, kedai)
- Lebar dan unjuran anggaran
- Foto tapak dan titik pengancing (dinding, rasuk, slab)
- Bahan atau rupa yang anda mahu, jika ada
- Sama ada awning lama perlu dibongkar
- Sebarang peraturan strata, pengurusan atau pihak berkuasa yang terpakai

Untuk projek yang mudah, foto dan dimensi selalunya cukup untuk sebut harga. Jika bentang besar, titik pengancing tidak jelas, akses sukar atau saliran perlu dirancang, penilaian tapak diatur sebelum reka bentuk dimuktamadkan — supaya sebut harga sepadan dengan apa yang benar-benar dibina.

## Soalan lazim

### Kenapa dua kontraktor memberi sebut harga berbeza untuk awning yang sama?

Sebut harga boleh berbeza dari segi apa yang termasuk — saiz profil rangka, kemasan, item saliran, pengedap, pembongkaran atau terma waranti. Bandingkan sebut harga berperincian baris demi baris, bukan jumlah sahaja; angka paling murah tidak semestinya skop kerja yang sama.

### Boleh saya dapat harga anggaran sebelum menghantar foto?

Anggaran kasar tanpa butiran tapak tidak boleh dipercayai justru kerana faktor-faktor di atas. Menghantar beberapa foto dengan dimensi anggaran selalunya mendapatkan sebut harga berperincian dengan cepat — selalunya tanpa lawatan tapak.

### Adakah awning lebih besar lebih murah per kaki persegi?

Tidak semestinya. Bentang lebih besar mungkin memerlukan profil rangka lebih berat atau tiang tambahan, dan penggunaan bahan tidak berskala linear dengan keluasan. Sebut harga mencerminkan reka bentuk sebenar yang bentang anda perlukan.

## Dapatkan sebut harga awning berperincian

Hantar lokasi, foto dan dimensi anggaran anda di WhatsApp dan kami akan menyediakan sebut harga khusus projek dan berperincian — tiada angka generik, tiada item tersembunyi. [Chat dengan pasukan kami](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah%2C%20saya%20ingin%20sebut%20harga%20awning%20yang%20berperincian.)`
    },
    zh: {
      slug: "yu-peng-jia-ge-ru-he-ji-suan-ma-lai-xi-ya",
      title: "马来西亚雨棚价格如何计算", category: "雨棚",
      excerpt: "马来西亚的雨棚按项目报价，没有固定单价。本文拆解八大成本因素——面积、材料、骨架、进场、排水、拆旧等——以及如何一次就拿到准确的分项报价。",
      metaTitle: "马来西亚雨棚价格如何计算",
      metaDesc: "马来西亚雨棚按项目报价。了解八大成本因素——面积、材料、骨架、进场、排水与拆旧——以及如何获得准确报价。",
      content: `搜索"马来西亚雨棚价格"，到处都能看到每平方英尺的报价——却很少有人解释这些数字包含什么。实际上，雨棚工程按项目报价：同样大小的两个雨棚，因材料、骨架、进场条件和排水不同，价格可能相差明显。

本文解释雨棚报价单是如何构成的、哪些因素影响价格，以及第一次询价就拿到准确报价需要准备什么。KL Servis Rumah 在吉隆坡与雪兰莪安装[定制雨棚](/zh/services/awning-installation)；我们发出的每份报价单都针对具体项目并列明细项。

## 简短结论

马来西亚的雨棚按项目报价，因为有八个变量几乎影响每一项工程：

1. **覆盖面积** — 宽度 × 悬挑
2. **屋面材料与型号** — 聚碳酸酯、金属瓦、ACP、玻璃或布艺
3. **骨架材料、规格与饰面**
4. **高度与进场条件**
5. **现有结构与加固**
6. **排水** — 排水沟、落水管、泛水板与密封胶
7. **旧雨棚的拆除与清运**
8. **定制设计与分层地契或地方当局规范**

公开的统一单价无法涵盖这些——所以我们按项目报价。

## 八大成本因素详解

### 1. 覆盖面积 — 宽度 × 悬挑

报价从雨棚尺寸开始：沿墙的宽度和向外的悬挑。覆盖面积决定需要多少屋面板材、骨架料长、支架或立柱数量、紧固件和人工。跨距更大时可能需要更重的骨架规格或额外支撑，因此成本并不总是与面积简单成正比。

### 2. 屋面材料与型号

材料是最直观的成本因素。聚碳酸酯有不同型号和色调；金属瓦分普通和保温型号；ACP 板、钢化玻璃和布艺系统的材料与安装成本各不相同。同一类材料里，型号也改变价格——保温金属瓦或中空聚碳酸酯板与普通单层板是不同的产品。见我们的[聚碳酸酯雨棚](/zh/services/awning-installation/polycarbonate-awning)、[金属瓦雨棚](/zh/services/awning-installation/metal-deck-awning)和 [ACP 雨棚](/zh/services/awning-installation/aluminium-composite-acp-awning)页面。

### 3. 骨架材料、规格与饰面

每个雨棚都建在骨架上——通常是低碳钢、铝或不锈钢，规格按跨距选定。跨距更大或屋面更重需要更大规格，饰面也很重要：我们的钢制骨架做防锈底漆加耐候或粉末喷涂——这是报价工程的一部分，不是可选附加项。

### 4. 高度与进场条件

进场顺畅的地面车棚最简单。楼上阳台、公寓楼层、狭窄侧道或需要脚手架与吊装设备的位置，需要更多时间和设备——这些会如实反映在报价里。

### 5. 现有结构与加固

雨棚必须固定在某个结构上。如果现场的墙体、横梁或楼板足够牢固，固定就简单；否则需要加固或加柱，并列入报价。这也是报价前拍摄固定点照片如此有用的原因。

### 6. 排水 — 排水沟、落水管、泛水板与密封胶

雨水总要有个去处。根据屋面面积和排水出口位置，设计可能包含排水沟、落水管、墙面泛水板和密封胶。合理的坡度让水往正确方向流、避免积水——这些项目会列在报价单上，而不是藏进一笔总价。

### 7. 旧雨棚的拆除与清运

更换现有雨棚？拆除和清运旧结构也是工作量，需要时会作为独立项目列入报价。见[雨棚更换与维修](/zh/services/awning-installation/awning-replacement-and-repair)。

### 8. 定制设计与分层地契规范

颜色、板材色调、面板颜色和定制造型通常可选择，视材料供应而定。分层地契产业的管理层（JMB/MC）可能规定允许的颜色、悬挑或设计——满足这些规范会影响报价工程。

## 为什么不发布固定价目表？

我们在[服务目录](/zh/services)为大多数服务公布起步价，因为那些工程的范围可重复。雨棚工程不是：跨距、结构、进场和排水在每栋房子都不同。一个笼统的数字要么低得误导，要么为覆盖最坏情况而虚高——所以我们看过照片和尺寸后按项目报价。

## 如何一次就拿到准确报价

在 WhatsApp 上发送：

- 您的位置或区域
- 雨棚安装位置（车棚、阳台、窗户、庭院、店面）
- 大致宽度与悬挑
- 现场和固定点（墙体、横梁、楼板）的照片
- 偏好的材料或外观（如有）
- 是否需要拆除旧雨棚
- 适用的分层地契、管理处或市政规定

简单项目通常凭照片和尺寸即可报价。跨距大、固定点不明确、进场困难或排水需要规划时，我们会在设计定案前安排现场评估——让报价与实际施工一致。

## 常见问题

### 为什么两家承包商对同一个雨棚报价不同？

报价包含的内容可能不同——骨架规格、饰面、排水项目、密封胶、拆除或保修条款。请逐项比较报价单，而不是只看总价；最便宜的数字未必是相同的工程范围。

### 发照片之前能先拿个大概价格吗？

没有现场细节的估价恰恰因为上述因素而不可靠。发几张照片加大致尺寸，通常很快就能拿到确定的分项报价——往往无需现场勘察。

### 雨棚越大，每平方英尺越便宜吗？

未必。更大跨距可能需要更重的骨架或额外立柱，材料用量也不与面积线性成比例。报价反映您的跨距实际需要的设计。

## 获取分项雨棚报价

在 WhatsApp 上发送位置、照片和大致尺寸，我们将为您准备针对项目的分项报价单——没有笼统数字，没有隐藏项目。[与我们的团队聊聊](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah%EF%BC%8C%E6%88%91%E6%83%B3%E8%8E%B7%E5%8F%96%E9%9B%A8%E6%A3%9A%E7%9A%84%E5%88%86%E9%A1%B9%E6%8A%A5%E4%BB%B7%E3%80%82)`
    }
  }
};

// Append the independently authored Malay and Simplified Chinese copies from
// the production article store. Keeping full bodies here is safe because every
// browser-side consumer uses the lightweight generated blog index instead.
import productionBlogRecords from "@/config/blog-production.generated.json" with { type: "json" };
for (const record of productionBlogRecords) {
  blogI18n[record.en.slug] = {
    ms: record.ms as LocalizedBlogPost,
    zh: record.zh as LocalizedBlogPost
  };
}

export function getLocalizedBlogPost(englishSlug: string, locale: BlogLocale) { return blogI18n[englishSlug]?.[locale]; }
export function localizedBlogPath(locale: BlogLocale, slug: string) { return locale === "ms" ? `/ms/blog/${slug}` : `/zh/bo-ke/${slug}`; }
