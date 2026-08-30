/**
 * P3-12 phase-2 regression gate for page-specific content-pod FAQ translations.
 *
 * The rollout is editorial and tranche-based. TOP, GUIDES,
 * GUIDESMAINTENANCE and SEASONAL are the complete Wave-15/16/17/18 tranches;
 * adding a key outside them is allowed only for a real authored pod. Once a
 * family is completed, add it to COMPLETED_FAMILIES so a missing translation
 * can never silently fall back to the four generic FAQs.
 */
import { CONTENT_POD_FAQ_I18N } from "@/config/content-pod-faq-i18n";
import { POD_FAMILIES, type ContentPodFamily } from "@/config/content-locale";
import { resolvePod } from "@/lib/content-locale-resolver";
import type { Translator } from "@/lib/i18n";

// FAQ resolution does not consume shared message values; a tiny translator
// keeps this source gate independent of Node's JSON import-attribute support.
const gateTranslator = ((key: string) => key) as Translator;

const COMPLETED_FAMILIES = new Set<ContentPodFamily>(["top", "guides", "guidesMaintenance", "seasonal"]);
const problems: string[] = [];
const valid = new Map<string, (typeof POD_FAMILIES)[ContentPodFamily]["pages"][number]>();
for (const [family, def] of Object.entries(POD_FAMILIES) as [ContentPodFamily, (typeof POD_FAMILIES)[ContentPodFamily]][]) {
  for (const page of def.pages) {
    if (page.faqTopic && !page.serviceDerived) valid.set(`${family}:${page.slug}`, page);
  }
}

for (const family of COMPLETED_FAMILIES) {
  for (const page of POD_FAMILIES[family].pages) {
    if (!page.faqTopic || page.serviceDerived) continue;
    const key = `${family}:${page.slug}`;
    if (!CONTENT_POD_FAQ_I18N[key]) problems.push(`${key}: completed family lost its translated FAQ set`);
  }
}

const seenQuestions = { ms: new Map<string, string>(), zh: new Map<string, string>() };
let sets = 0;
let translatedFaqs = 0;
for (const [key, localized] of Object.entries(CONTENT_POD_FAQ_I18N)) {
  const page = valid.get(key);
  if (!page) { problems.push(`${key}: no matching authored pod`); continue; }
  sets++;
  for (const locale of ["ms", "zh"] as const) {
    const faqs = localized[locale];
    if (!Array.isArray(faqs)) { problems.push(`${key}/${locale}: locale missing`); continue; }
    if (faqs.length !== page.faqs.length) problems.push(`${key}/${locale}: ${faqs.length} FAQs; English source has ${page.faqs.length}`);
    faqs.forEach((faq, index) => {
      translatedFaqs++;
      const addr = `${key}/${locale}/${index + 1}`;
      if (!/[?？]$/u.test(faq.q.trim())) problems.push(`${addr}: question has no question mark`);
      const min = locale === "ms" ? 70 : 30;
      if (faq.a.trim().length < min) problems.push(`${addr}: answer too short (${faq.a.trim().length} < ${min})`);
      if (faq.q === page.faqs[index]?.q || faq.a === page.faqs[index]?.a) problems.push(`${addr}: English source leaked unchanged`);
      if (locale === "ms" && /\b(the|should|which|when|before|contractor|warranty)\b/i.test(`${faq.q} ${faq.a}`)) problems.push(`${addr}: likely English prose leak`);
      if (locale === "zh" && !/[\u3400-\u9fff]/u.test(`${faq.q}${faq.a}`)) problems.push(`${addr}: no Chinese text`);
      const previous = seenQuestions[locale].get(faq.q.trim().toLowerCase());
      if (previous) problems.push(`${addr}: duplicate question from ${previous}`);
      else seenQuestions[locale].set(faq.q.trim().toLowerCase(), addr);
    });

    // Verify the production resolver, not just the dictionary: the first and
    // last translated FAQs must be exactly what localized routes will render.
    const family = key.slice(0, key.indexOf(":")) as ContentPodFamily;
    const resolved = resolvePod(page, family, locale, gateTranslator);
    if (JSON.stringify(resolved.faqs) !== JSON.stringify(faqs)) {
      problems.push(`${key}/${locale}: resolvePod did not return the editorial FAQ set verbatim`);
    }
  }
}

if (problems.length) {
  console.error(`✗ Content-pod FAQ i18n gate FAILED — ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`  • ${problem}`);
  process.exit(1);
}

const authoredTotal = valid.size;
console.log(`✓ Content-pod FAQ i18n — ${sets}/${authoredTotal} authored pods editorially translated; ${translatedFaqs} localized Q&As; completed families: ${[...COMPLETED_FAMILIES].join(", ")}.`);
