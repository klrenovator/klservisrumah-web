import type { Locale } from "@/lib/i18n";
import {
  getAllSmartServiceEntities,
  type SmartServiceEntity,
  SMART_SERVICE_TAXONOMY
} from "@/lib/smart-finder-index";

export interface SmartSearchResult {
  service: SmartServiceEntity;
  score: number;
  matchReason: string;
  matchedProblem?: {
    slug: string;
    title: string;
    symptom: string;
  };
  matchedCalculator?: {
    slug: string;
    name: string;
    url: string;
  };
}

export interface SmartSearchResponse {
  query: string;
  locale: Locale;
  results: SmartSearchResult[];
  relatedSuggestions: SmartServiceEntity[];
  detectedIntents: string[];
  isMultiServiceQuery: boolean;
}

// Common conversational filler words in English, Malay, and Chinese
const STOP_WORDS = new Set([
  "i", "me", "my", "we", "our", "you", "your", "he", "she", "it", "they",
  "want", "need", "looking", "for", "find", "search", "how", "much", "is", "are", "cost", "price", "rate",
  "can", "please", "help", "with", "do", "does", "in", "at", "on", "of", "to", "from", "by", "about",
  "kl", "selangor", "kuala", "lumpur", "area", "near", "me", "service", "services", "contractor", "specialist",
  "house", "home", "condo", "apartment", "office", "room", "building", "wall", "floor",
  "nak", "mahu", "saya", "kami", "anda", "dia", "mereka", "cari", "berapa", "harga", "kos", "upah", "tukang",
  "boleh", "tolong", "bantu", "dengan", "buat", "dalam", "di", "ke", "dari", "tentang", "kawasan", "dekat", "servis",
  "rumah", "kondo", "pejabat", "bilik", "dinding", "lantai", "bangunan",
  "我要", "我想", "想找", "寻找", "多少", "多少钱", "价格", "费用", "请问", "可以", "帮助", "服务", "师傅", "工人", "公司", "在", "的", "和", "与",
  "房子", "房屋", "家里", "家里人", "公司", "公寓", "房间", "墙壁"
]);

/**
 * Calculates Levenshtein edit distance between two strings for typo tolerance.
 */
function levenshteinDistance(a: string, b: string): number {
  const an = a.length;
  const bn = b.length;
  if (an === 0) return bn;
  if (bn === 0) return an;

  const matrix = Array.from({ length: bn + 1 }, (_, i) => [i]);
  for (let j = 0; j <= an; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= bn; i++) {
    for (let j = 1; j <= an; j++) {
      const cost = b.charAt(i - 1) === a.charAt(j - 1) ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }
  return matrix[bn][an];
}

/**
 * Calculates similarity ratio between 0.0 and 1.0.
 */
function stringSimilarity(a: string, b: string): number {
  if (a === b) return 1.0;
  if (a.includes(b) || b.includes(a)) return 0.9;
  const dist = levenshteinDistance(a, b);
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1.0;
  return 1.0 - dist / maxLen;
}

/**
 * Cleans and tokenizes search input, removing stop words and punctuation.
 */
function tokenizeQuery(query: string): string[] {
  const normalized = query
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'—]/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();

  const tokens: string[] = [];
  const rawTokens = normalized.split(" ");
  for (const token of rawTokens) {
    if (!token) continue;
    if (STOP_WORDS.has(token)) continue;
    if (token.length > 1) {
      tokens.push(token);
    }
  }
  return tokens;
}

/**
 * Formats a localized reason string for why a service matched.
 */
function getLocalizedMatchReason(
  reasonType: "exact_synonym" | "problem" | "calculator" | "category" | "keyword" | "related",
  matchedText: string,
  locale: Locale
): string {
  switch (reasonType) {
    case "exact_synonym":
      if (locale === "ms") return `Padanan carian: "${matchedText}"`;
      if (locale === "zh") return `精准匹配查询: "${matchedText}"`;
      return `Matches your search: "${matchedText}"`;
    case "problem":
      if (locale === "ms") return `Menyelesaikan masalah: "${matchedText}"`;
      if (locale === "zh") return `针对解决问题: "${matchedText}"`;
      return `Solves your problem: "${matchedText}"`;
    case "calculator":
      if (locale === "ms") return `Kalkulator berkaitan: "${matchedText}"`;
      if (locale === "zh") return `提供在线估价工具: "${matchedText}"`;
      return `Includes cost calculator: "${matchedText}"`;
    case "category":
      if (locale === "ms") return `Kategori perkhidmatan berkaitan`;
      if (locale === "zh") return `所属相关专业服务类别`;
      return `Related service category`;
    case "keyword":
      if (locale === "ms") return `Padanan kata kunci servis`;
      if (locale === "zh") return `匹配相关专业服务`;
      return `Matches service keywords`;
    default:
      if (locale === "ms") return `Perkhidmatan disyorkan`;
      if (locale === "zh") return `推荐的相关优质服务`;
      return `Recommended service`;
  }
}

/**
 * Main Smart Search Engine — evaluates query against all 32 services, 77 problems, 37 calculators, and trilingual synonym maps.
 */
export function searchSmartServices(rawQuery: string, locale: Locale): SmartSearchResponse {
  const cleanQuery = rawQuery.trim();
  const allServices = getAllSmartServiceEntities(locale);
  if (!cleanQuery) {
    return {
      query: cleanQuery,
      locale,
      results: [],
      relatedSuggestions: allServices.slice(0, 6),
      detectedIntents: [],
      isMultiServiceQuery: false
    };
  }

  const queryLower = cleanQuery.toLowerCase();
  const tokens = tokenizeQuery(cleanQuery);

  const scoredResults: Array<{
    service: SmartServiceEntity;
    score: number;
    reason: string;
    matchedProblem?: { slug: string; title: string; symptom: string };
    matchedCalculator?: { slug: string; name: string; url: string };
  }> = [];

  const detectedIntentsSet = new Set<string>();

  for (const service of allServices) {
    let bestScore = 0;
    let bestReason = getLocalizedMatchReason("related", service.title, locale);
    let matchedProblem: { slug: string; title: string; symptom: string } | undefined;
    let matchedCalculator: { slug: string; name: string; url: string } | undefined;

    // 1. Exact or substring match on Service Title / Slug
    if (queryLower === service.title.toLowerCase() || queryLower === service.serviceSlug) {
      bestScore = Math.max(bestScore, 100);
      bestReason = getLocalizedMatchReason("exact_synonym", service.title, locale);
      detectedIntentsSet.add(service.title);
    } else if (service.title.toLowerCase().includes(queryLower) || queryLower.includes(service.title.toLowerCase())) {
      bestScore = Math.max(bestScore, 90);
      bestReason = getLocalizedMatchReason("exact_synonym", service.title, locale);
      detectedIntentsSet.add(service.title);
    }

    // 2. Check Trilingual Synonyms
    const tax = SMART_SERVICE_TAXONOMY[service.serviceSlug];
    if (tax) {
      const allSynonyms = [
        ...(tax.synonyms.en || []),
        ...(tax.synonyms.ms || []),
        ...(tax.synonyms.zh || [])
      ];

      for (const syn of allSynonyms) {
        const synLower = syn.toLowerCase();
        // Exact synonym inclusion
        if (queryLower.includes(synLower) || synLower.includes(queryLower)) {
          bestScore = Math.max(bestScore, 95);
          bestReason = getLocalizedMatchReason("exact_synonym", syn, locale);
          detectedIntentsSet.add(service.title);
          break;
        }

        // Token overlap with synonym
        let matchedTokens = 0;
        const synTokens = tokenizeQuery(syn);
        for (const qToken of tokens) {
          for (const sToken of synTokens) {
            const sim = stringSimilarity(qToken, sToken);
            if (sim >= 0.82) {
              matchedTokens++;
              break;
            }
          }
        }
        if (synTokens.length > 0 && matchedTokens / synTokens.length >= 0.7) {
          const score = Math.min(88, 70 + Math.round((matchedTokens / synTokens.length) * 18));
          if (score > bestScore) {
            bestScore = score;
            bestReason = getLocalizedMatchReason("exact_synonym", syn, locale);
            detectedIntentsSet.add(service.title);
          }
        }
      }
    }

    // 3. Check Connected Customer Problems
    for (const problem of service.customerProblems) {
      const problemTitleLower = problem.title.toLowerCase();
      const problemSymptomLower = problem.symptom.toLowerCase();
      if (
        queryLower.includes(problemTitleLower) ||
        problemTitleLower.includes(queryLower) ||
        queryLower.includes(problemSymptomLower) ||
        problemSymptomLower.includes(queryLower)
      ) {
        if (92 > bestScore) {
          bestScore = 92;
          bestReason = getLocalizedMatchReason("problem", problem.title, locale);
          matchedProblem = problem;
          detectedIntentsSet.add(problem.title);
        }
        break;
      }

      // Check problem token similarity
      const probTokens = tokenizeQuery(`${problem.title} ${problem.symptom}`);
      let matchCount = 0;
      for (const token of tokens) {
        for (const pToken of probTokens) {
          if (stringSimilarity(token, pToken) >= 0.82) {
            matchCount++;
            break;
          }
        }
      }
      if (probTokens.length > 0 && matchCount >= 2) {
        const score = Math.min(85, 65 + matchCount * 10);
        if (score > bestScore) {
          bestScore = score;
          bestReason = getLocalizedMatchReason("problem", problem.title, locale);
          matchedProblem = problem;
          detectedIntentsSet.add(problem.title);
        }
      }
    }

    // 4. Check Associated Calculators / Estimators
    for (const calc of service.calculators) {
      const calcLower = calc.name.toLowerCase();
      if (queryLower.includes(calcLower) || calcLower.includes(queryLower) || queryLower.includes("cost") || queryLower.includes("harga") || queryLower.includes("kos") || queryLower.includes("估价") || queryLower.includes("费用")) {
        let keywordHit = false;
        for (const t of tokens) {
          if (service.title.toLowerCase().includes(t) || service.category.toLowerCase().includes(t)) {
            keywordHit = true;
            break;
          }
        }
        if (keywordHit) {
          const score = 86;
          if (score > bestScore) {
            bestScore = score;
            bestReason = getLocalizedMatchReason("calculator", calc.name, locale);
            matchedCalculator = calc;
            detectedIntentsSet.add(calc.name);
          }
        }
      }
    }

    // 5. General Keyword / Token Match against Title & Highlights (only if tokens exist)
    if (bestScore === 0 && tokens.length > 0) {
      let titleHits = 0;
      let descHits = 0;
      for (const token of tokens) {
        if (service.title.toLowerCase().includes(token)) titleHits++;
        if (service.description.toLowerCase().includes(token)) descHits++;
        for (const h of service.whatIsIncluded) {
          if (h.toLowerCase().includes(token)) {
            descHits++;
            break;
          }
        }
      }

      if (titleHits > 0) {
        bestScore = Math.min(80, 50 + titleHits * 15);
        bestReason = getLocalizedMatchReason("keyword", service.title, locale);
        detectedIntentsSet.add(service.title);
      } else if (descHits >= 2) {
        bestScore = Math.min(68, 45 + descHits * 8);
        bestReason = getLocalizedMatchReason("keyword", service.title, locale);
      }
    }

    if (bestScore >= 60) {
      scoredResults.push({
        service,
        score: bestScore,
        reason: bestReason,
        matchedProblem,
        matchedCalculator
      });
    }
  }

  // Sort by relevance score descending
  scoredResults.sort((a, b) => b.score - a.score);

  // Filter out low-scoring generic keyword matches when we have a high-confidence exact match
  const maxScore = scoredResults.length > 0 ? scoredResults[0].score : 0;
  const minRequiredScore = maxScore >= 88 ? maxScore - 18 : 60;
  const filteredResults = scoredResults.filter((r) => r.score >= minRequiredScore);

  const isMultiServiceQuery = filteredResults.filter((r) => r.score >= 75).length > 1;

  // Take top relevant results (up to 6 results if multi-service, or 4 if single)
  const topResults = filteredResults.slice(0, isMultiServiceQuery ? 6 : 4).map((r) => ({
    service: r.service,
    score: r.score,
    matchReason: r.reason,
    matchedProblem: r.matchedProblem,
    matchedCalculator: r.matchedCalculator
  }));

  // Build related suggestions (other popular services not in top results)
  const resultSlugs = new Set(topResults.map((r) => r.service.serviceSlug));
  const relatedSuggestions = allServices
    .filter((s) => !resultSlugs.has(s.serviceSlug))
    .slice(0, 4);

  return {
    query: cleanQuery,
    locale,
    results: topResults,
    relatedSuggestions,
    detectedIntents: Array.from(detectedIntentsSet),
    isMultiServiceQuery
  };
}
