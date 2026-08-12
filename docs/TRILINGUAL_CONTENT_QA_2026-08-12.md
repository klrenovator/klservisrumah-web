# Trilingual Content QA Record — 2026-08-12

## Scope

This record closes the supplied EN/MS/ZH content QA review of **354 localized pages**:

- 112 specialty pages × MS and ZH = 224 localized specialty pages
- 65 canonical problem pages × MS and ZH = 130 localized problem pages

The review is content QA only. It does not add routes, restore the 12 redirected problem slugs, or change the canonical URL inventory.

## Recorded results

| Check | Result | Disposition |
| --- | ---: | --- |
| RM price consistency | 0 inconsistencies | No content change required |
| Genuine duplicate pages | 0 | Repeated service terminology and intentional template structure were not treated as duplicate pages |
| English sentence leakage in MS/ZH | 0 real cases | Brand names, accepted technical terms, model identifiers and short labels were not treated as sentence-level leakage |
| MS/ZH field-count parity | All 354 pages matched page by page | Specialty validation now permanently rejects MS/ZH highlight, process-step or FAQ count drift without imposing one fixed page shape |
| Ceiling-fan replacement warranty | 1 semantic mismatch | Resolved in the MS specialty content |

## Resolved findings

### 1. Ceiling-fan replacement warranty parity

Affected route family:

- `/services/ceiling-fan/ceiling-fan-replacement`
- `/ms/services/ceiling-fan/ceiling-fan-replacement`
- `/zh/services/ceiling-fan/ceiling-fan-replacement`

The ZH specialty highlighted a 12-month installation and wiring warranty while the corresponding MS highlight did not. The canonical parent ceiling-fan service record in `config/services-data.ts` already publishes the same 12-month mounting/wiring warranty in EN, MS and ZH. The MS specialty highlight in `config/specialty-locale-content.ts` was aligned to that source-of-truth policy.

The replaced cleanup/disposal highlight was not the only source of that information: cleanup and old-fan handling remain represented elsewhere in the specialty description, process and FAQ copy.

### 2. Problem localization architecture comments

All 77 defined problems now have native MS/ZH metadata, body and FAQ coverage. Comments in `config/problem-faq-i18n.ts` and `lib/faq-directory.ts` were corrected so they no longer claim that 34 problem bodies remain English.

The 34-record `problemFaqI18n` map remains intentionally as a defensive, grammar-specific FAQ fallback. The public route policy is unchanged: 65 problem slugs have canonical localized routes and 12 legacy slugs redirect.

### 3. Translator QA field-count guidance

`docs/TRANSLATOR_QA_PROMPT.md` no longer promises an exact `5 highlights / 4 process steps / 4 FAQs` structure. Specialty structures intentionally vary. QA must enforce:

- required-field completeness and existing minimums;
- matching MS/ZH counts for the same page; and
- no universal exact count beyond those constraints.

`scripts/validate-specialty-locale.ts` now encodes the page-by-page MS/ZH count-parity requirement.

## Repository verification

All applicable gates passed on 2026-08-12 after the correction:

- `npm run lint` — 0 errors/warnings
- `npm run type-check` — passed
- `npm run audit:topical-map` — 28/28 services and 112 typed specialty relationships
- `npm run audit:specialty-locale` — 112 specialties × MS/ZH (224 native blocks), including page-by-page list-count parity
- `npm run audit:i18n` — 1,077 keys × 3 locales, no parity or placeholder errors
- `npm run audit:problem-i18n` — 65 canonical problem URLs × MS/ZH, 12 redirects excluded, no native-content gaps, English leaks or duplicate FAQs
- `npm run build` — successful production build; prebuild estimator harness passed 263,301 assertions
- `npm run audit:html` — 4,677 rendered pages, 0 fatal findings and 0 warnings
- `npm run seo:audit` — metadata consistency passed
- `npm run audit:meta` — 4,677 pages, no missing titles/descriptions, duplicate-title groups, JSON-LD parse failures or breadcrumb URL mismatches
- `npm run audit:seo-inventory` — 4,677 pages, 0 title/description/H1 updates required
- `npm run audit:seo-head` — 3,638 self-canonical indexable pages and sitemap URLs, 0 duplicate titles/descriptions and 0 warnings

## Evidence boundaries and remaining owner checks

This QA outcome is based on the supplied full-corpus report and repository-level static validation. It is not a native-speaker certification and not an exhaustive crawl of a deployed production site.

Before or immediately after deployment, the owner should still complete:

1. a final native Malay and Simplified Chinese speaker skim, especially for naturalness, local trade terminology and tone; and
2. an exhaustive live crawl of all canonical localized URLs to catch deployment-only routing, rendering, metadata, link or cache issues.

These follow-ups do not invalidate the zero-error static conclusions above; they cover review capabilities and deployment conditions outside the repository audit scope.
