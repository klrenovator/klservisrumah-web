KL SERVIS RUMAH — WHATSAPP AI AGENT UPLOAD PACK
================================================================
Ye files seedha AI agent platform mein upload karne ke liye hain
(Vapi / Twilio / ManyChat / Wati / Botpress / OpenAI Assistant, etc.)

PDF documents alag hain — woh insaanon ke parhne ke liye hain
(training, staff reference). AI agent mein PDF upload na karein.


FILE 1 — 01-SYSTEM-PROMPT.txt          (~3,900 tokens)
----------------------------------------------------------------
KYA HAI:  Agent ka poora dimaag. Rules, pehchaan, prices,
          coverage, aircon policy, safety, handover.

KAHAN LAGANA:
  Vapi ............. Assistant > Model > System Prompt
  OpenAI Assistant . Instructions field
  ManyChat / Wati .. AI Step > Instructions / Prompt
  Botpress ......... Agent > Instructions
  Custom / API ..... messages[0] = {"role": "system", ...}

KAISE:  File kholein, sab kuch copy karein (Ctrl+A, Ctrl+C),
        prompt box mein paste karein. Bas ho gaya.

NOTE:   Ye akela hi kaafi hai basic agent chalane ke liye.
        Sirf yehi upload karein to bhi agent theek kaam karega.


FILE 2 — 02-KNOWLEDGE-BASE.txt         (~25,000 tokens)
----------------------------------------------------------------
KYA HAI:  Poori FAQ, service-wise decision trees, aur teen
          zabanon (English / Bahasa Malaysia / Chinese) ke
          ready-made message templates.

KAHAN LAGANA:  Knowledge Base / Files / Documents / RAG section
  Vapi ............. Assistant > Knowledge Base > Upload
  OpenAI Assistant . File Search > Upload file
  ManyChat / Wati .. Training Data / Knowledge
  Botpress ......... Knowledge Base > Upload

KYUN:  Ye system prompt mein daalne ke liye bohot bara hai.
       Knowledge base mein daalne se agent zarurat par
       ismein se dhoond kar jawab dega — tokens bhi bachenge.


FILE 3 — 03-PRICE-LIST.json            (~4,850 tokens)
----------------------------------------------------------------
KYA HAI:  Saare 28 services, sub-services, prices aur
          warranties — machine-readable JSON format mein.

KAHAN LAGANA:  Do options —
  (a) Knowledge base mein file ki tarah upload kar dein, YA
  (b) Agar aap ka developer function calling / tool use
      set kar raha hai, to isay price lookup tool ka
      data source banayein (behtareen tareeqa — agent
      kabhi price ghalat nahi bolega).


================================================================
SAB SE ASAAN TAREEQA (5 minute)
================================================================
1. 01-SYSTEM-PROMPT.txt  ka poora text copy karke agent ke
   system prompt / instructions box mein paste karein.
2. 02-KNOWLEDGE-BASE.txt  ko knowledge base mein upload karein.
3. Test karein. Ye 6 sawal poochein:

   "How much to paint 3 rooms?"
       -> Sahi: "From RM 450 per room" + quote wali line.
       -> GHALAT: koi bhi total jaise RM 1,350.

   "Aircon service kitna?"
       -> Sahi: mana kare, koi price na de, handover kare.
       -> GHALAT: koi bhi aircon service ka price.

   "Bathroom leak ho raha hai, kitna lagega?"
       -> Sahi: From RM 300 per point, points site par tay honge.

   "Technician kitne baje aayega?"
       -> Sahi: time window de (9-12 / 12-3 / 3-6), exact
          waqt ka wada na kare.

   "Discount de sakte ho?"
       -> Sahi: khud discount na de, team ko forward kare.

   "Saya nak cat rumah"  (Malay mein)
       -> Sahi: poora jawab Bahasa Malaysia mein.

   Agar in mein se koi bhi ghalat nikle, mujhe batayein —
   main prompt tight kar dunga.


================================================================
AHEM BAAT — DO CHEEZEIN JAAN LEIN
================================================================
1. AIRCON: Aap ki website par aircon servicing bilkul nahi hai.
   Sirf ek cheez hai — aircond ka electrical point (RM 220/point).
   Isliye agent aircon ke saare sawalon par imaandari se mana
   karke team ko forward karega, jhoota price nahi banayega.

2. SIRF 2 PRICES FIXED HAIN: electrical inspection RM 150 aur
   autogate maintenance RM 180. Baqi sab "from" price hain.
   Isliye agent ko hisaab-kitaab se rok diya gaya hai — 500 sq ft
   x RM 10 wala jawab woh kabhi nahi dega, warna galat quote
   customer ko chala jayega.


================================================================
UPDATE KAB KARNA HAI
================================================================
Jab bhi website par koi price, warranty ya area badle:
ye files purani ho jayengi. Dobara banane ke liye repo mein
chalayein:  python3 scripts/build-agent-files.py

Prices verify ki gayi thin: 17 August 2026
Source: config/services-data.ts, config/site.ts + live website
================================================================
