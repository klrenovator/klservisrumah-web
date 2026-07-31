import type { BlogPost } from "@/config/blog-data";

/** Native, standalone article copies.  Keep this separate from the English
 * registry so a translator can review each locale without touching routing. */
export type BlogLocale = "ms" | "zh";
export type LocalizedBlogPost = Pick<BlogPost, "title" | "excerpt" | "content" | "category" | "metaTitle" | "metaDesc"> & { slug: string };

export const blogI18n: Record<string, Partial<Record<BlogLocale, LocalizedBlogPost>>> = {
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
  }
};

export function getLocalizedBlogPost(englishSlug: string, locale: BlogLocale) { return blogI18n[englishSlug]?.[locale]; }
export function localizedBlogPath(locale: BlogLocale, slug: string) { return locale === "ms" ? `/ms/blog/${slug}` : `/zh/bo-ke/${slug}`; }
