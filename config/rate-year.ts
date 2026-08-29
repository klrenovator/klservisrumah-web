/**
 * §5.6 FRESHNESS — RATE_YEAR, the single source of truth for year-stamped
 * marketing copy.
 *
 * WHY THIS EXISTS
 * ---------------
 * Part 5 §5.6 (Content Decay) found the site's pricing surfaces advertise
 * "2026 rates" in ~40 hand-written places (rate-book validation notes, tool
 * meta descriptions, price-table notes, pod intros/FAQs, trilingual tool
 * copy). Year-stamped claims are a *perpetual freshness signal* when they
 * are true and a *decay signal* when they go stale — Google and answer
 * engines discount content that still says last year's year.
 *
 * The flagship English surfaces interpolate `RATE_YEAR_LABEL` from this
 * module, so they can never go stale. The remaining literals (mostly the
 * MS/ZH tool dictionaries, which are hand-translated) are enforced by the
 * `audit:rate-year` prebuild gate (`scripts/validate-rate-year.ts`): when
 * the calendar year changes, the build FAILS and lists every claim that
 * must be refreshed — the "annual refresh ritual" Part 5 §5.6 prescribes.
 *
 * `RATE_YEAR` is derived from the clock (not a constant) so nothing can
 * silently drift; the validator also asserts it is ≥ 2026 so a broken CI
 * clock cannot pass the gate by itself.
 */
export const RATE_YEAR = new Date().getFullYear();

/** Display label, e.g. "2026". */
export const RATE_YEAR_LABEL = String(RATE_YEAR);
