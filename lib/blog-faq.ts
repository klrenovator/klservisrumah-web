/**
 * Blog FAQ extraction (audit P3-06).
 *
 * Part 3 found the blog corpus (216 posts / 648 localized articles) had
 * zero FAQPage JSON-LD and only 34% of posts carried a question-headed H2 —
 * the questions lived at H3 level (qH3 = 100%). AI answer engines prefer
 * H2 question→answer pairs plus FAQPage markup for answer extraction.
 *
 * Rather than hand-curating FAQs per article (216 × 3 locales), this parser
 * derives them from the articles' own question headings — the same trusted
 * production copy the page renders. A question heading (H2/H3/H4 ending in
 * `?` or `？`) followed by its answer paragraph(s) becomes one FAQ entry.
 *
 * Usage:
 *   - `extractBlogFaq(content)` → FAQPage JSON-LD mainEntity (schema), and
 *   - the first question heading is promoted to H2 at render time so every
 *     article exposes a visible question H2 → answer pair.
 *
 * Per Part 5 guidance the schema caps at 6 Q&As per page.
 */

export type BlogFaqEntry = { q: string; a: string };

const QUESTION_HEADING = /^(#{2,4})\s+(.+)$/;
const HORIZONTAL_RULE = /^-{3,}$/;
const LIST_ITEM = /^([-*]|\d+[.)])\s+(.+)$/;
// CTA-style headings ("Need X?", "Ready to plan?") are sales prompts, not
// questions — excluding them keeps FAQPage schema honest (7/822 corpus).
const CTA_QUESTION = /^(need|want|looking for|ready to|interested in|thinking of|searching for|seeking|considering|planning|have a|got a)\b/i;

function cleanInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1") // links → label
    .replace(/`([^`]+)`/g, "$1") // code
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extracts up to `max` question→answer pairs from article markdown.
 * The answer is the paragraph(s) directly under the question heading,
 * including list items (markers stripped), until the next heading.
 */
export function extractBlogFaq(content: string, max = 6): BlogFaqEntry[] {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  const entries: BlogFaqEntry[] = [];
  let currentQ: string | null = null;
  let answerParts: string[] = [];

  const flush = () => {
    if (currentQ && answerParts.length) {
      const a = cleanInline(answerParts.join(" "));
      if (a) entries.push({ q: cleanInline(currentQ), a });
    }
    currentQ = null;
    answerParts = [];
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line || HORIZONTAL_RULE.test(line)) continue;
    const heading = line.match(QUESTION_HEADING);
    if (heading) {
      flush();
      const text = heading[2].trim();
      if (/(\?|？)$/.test(text) && !CTA_QUESTION.test(text)) currentQ = text;
      continue;
    }
    if (currentQ) {
      const list = line.match(LIST_ITEM);
      answerParts.push(list ? list[2] : line);
    }
  }
  flush();

  return entries.slice(0, max);
}
