# Translator QA Prompt — KL Servis Rumah Trilingual Content Review

> **Kaise use karein:** Yeh document aap kisi native Malay + Chinese (Mandarin) translator ya business partner ko dete hain. Unhain yeh padh kar **har page check** karna hai aur galat cheezon ki list wapas deni hai. Jo galat/natural-nahi hai, wo fix karne ke liye main repository mein update kar sakta hoon.

---

## 1. Aap kia check karne wale hain?

Website **3 bhashaon** mein hai: **English (EN), Bahasa Malaysia (MS), Simplified Chinese (ZH)**.

Abhi ke liye sirf **2 cheezein** check karni hain (yeh nayi translate ki gayi hain):

### A. 224 "Specialty" pages (service ke andar ke detailed pages)
- **112 specialty topics × 2 languages (MS + ZH) = 224 pages**
- URL pattern:
  - MS: `https://www.klservisrumah.my/ms/services/{service}/{specialty}`
  - ZH: `https://www.klservisrumah.my/zh/services/{service}/{specialty}`
- Example MS: `/ms/services/painting/interior-house-painting`
- Example ZH: `/zh/services/painting/interior-house-painting`

Har page par yeh fields hain: **name (naam), tagline (chhota tagline), description (tawseel), highlights, process steps, FAQs, metaTitle, metaDesc**.

> **Count note:** Published specialty pages jaan-boojh kar exact ek jaise counts use nahi karte. Har locale mein usi page ke counts match hone chahiye, lekin service ke mutabiq highlights, process steps aur FAQs ki tadaad badal sakti hai. QA mein content ki completeness aur MS/ZH parity check karein — fixed `5 / 4 / 4` count ko requirement na samjhein.

### B. 65 problem pages × 2 languages (MS + ZH) = 130 pages
- URL pattern:
  - MS: `https://www.klservisrumah.my/ms/problems/{problem}`
  - ZH: `https://www.klservisrumah.my/zh/problems/{problem}`
- Example MS: `/ms/problems/peeling-paint-malaysia`
- Example ZH: `/zh/problems/peeling-paint-malaysia`

Har page par: **title, symptom, cost range (RM price), causes (wajah), solutions (halla), when-to-call, FAQs**.

---

## 2. Check list — har page ke liye yeh 6 cheezein confirm karo

### ✅ Check 1 — Translation natural hai?
Kya MS/ZH copy aisa lagta hai jaise kisi **native insaan** ne likha ho?
- ❌ Galat: robot/machine-translation jaisa, toot-ta-phootta grammar, awkward wording
- ✅ Sahi: natural, fluent, jaise koi Malaysia ka Malay/Mandarin speaker bolega

### ✅ Check 2 — Prices (RM) sahi hain?
Jo RM prices likhi hain, kya wo **aap ke real business rates** ke mutabiq hain?
- Numbers galat hon to alag se report karo.

### ✅ Check 3 — Facts galat toh nahi?
Kya yeh sahi hai:
- Warranty ki detail
- Materials (SIRIM, premium brands)
- Process/steps
- "Same-day", "no-deposit", "fixed-price" jaise claims
- Agar koi galat fact ho — report karo.

### ✅ Check 4 — Har page alag hai (duplicate nahi)?
Kya do pages ka content **ek jaise copy-paste** jaise nahi lag raha?
- Har page ki apni unique copy honi chahiye. Same-same copy badi problem hai (Google isay punish karta hai).

### ✅ Check 5 — English leak nahi hai?
Kya MS/ZH page par kahin **English ke sentences** reh gaye hain jo translate nahi hue?
- (Kuch English words jaise "warranty", "DIY", "SIRIM" theek hain — lekin poore English sentences galat hain.)

### ✅ Check 6 — Page load/URL sahi hai?
- URL 200 OK deta hai (page khulta hai)?
- Koi broken link nahi hai?
- Meta title/description bhi aap ki language mein hai?

---

## 3. Kaise report karein (template)

Har galat page ke liye yeh format use karo:

```
PAGE: /ms/services/painting/interior-house-painting
FIELD: description  (ya: name / tagline / highlight / process / FAQ / meta)
LANGUAGE: MS
ISSUE: Translation unnatural — "..[jo likha hai].." sahi nahi lagta
SUGGESTION: "...[behtar translation]..."
```

Ya simple list bhi chalti hai:

```
- /zh/services/ceiling/plaster-ceiling-installation → FAQ answer wrong (price 250 should be 350)
- /ms/problems/clogged-drain → causes unnatural, fix karo
- /zh/problems/peeling-paint-malaysia → description English reh gaya
```

---

## 4. Kahan se start karein (priority order)

Sab se pehle yeh check karo — yeh sab se zyada important hain:

1. **Prices + warranty** — business ke liye sab se important, galat ho to reputation kharab.
2. **Any page with English leaking** into MS/ZH — yeh professional nahi lagta.
3. **Home services (most popular)** — Cleaning, Deep Cleaning, House Renovation, Painting, Plumbing.
4. Baaki services.
5. Problem pages (65).

---

## 5. Sample list — 5 pages har language mein shuru karne ke liye

**Specialty (MS):**
- `/ms/services/painting/interior-house-painting`
- `/ms/services/cleaning/weekly-condo-cleaning-1-000-sqft`
- `/ms/services/plumbing/water-leakage-diagnosis-and-repair`
- `/ms/services/house-renovation/full-house-renovation-package`
- `/ms/services/electrical/new-power-point-and-switch-installation`

**Specialty (ZH):**
- `/zh/services/painting/interior-house-painting`
- `/zh/services/cleaning/weekly-condo-cleaning-1-000-sqft`
- `/zh/services/plumbing/water-leakage-diagnosis-and-repair`
- `/zh/services/house-renovation/full-house-renovation-package`
- `/zh/services/electrical/new-power-point-and-switch-installation`

**Problem (MS):**
- `/ms/problems/peeling-paint-malaysia`
- `/ms/problems/clogged-drain`
- `/ms/problems/ceiling-leak-after-rain`
- `/ms/problems/wardrobe-door-not-closing`
- `/ms/problems/locked-out-of-house`

**Problem (ZH):**
- `/zh/problems/peeling-paint-malaysia`
- `/zh/problems/clogged-drain`
- `/zh/problems/ceiling-leak-after-rain`
- `/zh/problems/wardrobe-door-not-closing`
- `/zh/problems/locked-out-of-house`

---

## 6. Jab aap report dein

Report (jo bhi format) mujhe do, aur main:
1. In fixes ko repository mein update kar dunga (EN + MS + ZH consistent).
2. Har fix ke baad lint, type-check aur build wapas check karunga taake site toot na jaye.

---

*Ye checklist docs/TRANSLATOR_QA_PROMPT.md mein saved hai.*
