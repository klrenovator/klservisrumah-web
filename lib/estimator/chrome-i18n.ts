/**
 * English fallback for the shared estimator chrome.
 *
 * The estimator components (`estimator-form`, `estimate-result`, `fields`) are
 * rendered by two callers:
 *
 *   • The generic service estimator on 22 service pages — a client component
 *     that already loads the message dictionaries, so it passes a real
 *     locale-aware translator down.
 *   • The five hand-built deep tools (painting, leak, ceiling, plumbing, TV
 *     mount). Their English routes pass nothing and fall back to these
 *     strings, so the English tool bundle never carries the full 44 KB site
 *     message dictionaries. The /ms/alatan/* and /zh/gongju/* routes instead
 *     pair their own spec dictionary with the matching standalone chrome
 *     module (`i18n/chrome-ms.ts` / `i18n/chrome-zh.ts`) — each locale route
 *     ships exactly one language.
 *
 * The canonical source for these strings is `messages/en.json` under the
 * `estimator` namespace. Keep this map in sync if the English copy changes.
 */

import { createStaticTranslator, type Translator } from "../i18n";
import { chromeEnDict } from "./i18n/chrome-en";

/**
 * English-only translator covering exactly the estimator chrome keys the
 * shared components render. Non-estimator keys resolve to themselves, which is
 * fine because the components only ever query `estimator.*` keys.
 */
export const englishEstimatorT: Translator = createStaticTranslator(chromeEnDict);
