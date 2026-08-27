/**
 * AI-context file generator (`llms.txt`, `llms-full.txt`, `site-summary.json`).
 *
 * WHY THIS EXISTS
 * ---------------
 * `public/llms.txt`, `public/llms-full.txt` and `public/site-summary.json` are
 * the machine-readable copy of the business that answer engines (ChatGPT,
 * Perplexity, Claude, Gemini, Copilot) read directly. They restate the same
 * facts the site already publishes: contact links, service prices, warranties,
 * coverage and page counts.
 *
 * They were hand-maintained, and hand-maintained duplicates drift. By the time
 * this generator was written they had:
 *
 *   • the wrong Instagram, Facebook, Google Maps and Google Business links —
 *     three separate PRs (#39, #40, #41) fixed the footer and the JSON-LD
 *     `sameAs`, but nobody remembered these files, so AI assistants were still
 *     being handed the old KLRenovator profiles for a different brand;
 *   • prices up to 5 years stale (plumbing quoted "From RM 120" when the
 *     published rate is RM 150, handyman RM 80 vs RM 100, ceiling RM 180 vs
 *     RM 220, electrical RM 80 vs RM 150 …) — i.e. the site was advertising
 *     under-quotes to the exact surfaces customers now ask for prices;
 *   • warranty terms that contradicted `servicesData` (e.g. "2-year" painting
 *     vs the published 1-year guarantee);
 *   • page counts that no longer matched the build (38/4033 vs 37/4063).
 *
 * Quoting a price to a customer that the site does not honour is a commercial
 * problem, not just an SEO one. So the fix is structural: these files are now
 * DERIVED from the same `config/*` modules that render the site. Change a price
 * or a social link in one place and every surface — pages, JSON-LD and the AI
 * context files — updates together on the next build.
 *
 * Usage: npm run gen:ai-context   (wired into `prebuild`, like `gen:rates`)
 */

import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "../config/site.ts";
import { servicesData } from "../config/services-data.ts";
import { areaPages } from "../config/area-data.ts";
import { problemPages } from "../config/problem-data.ts";
import { blogPosts } from "../config/blog-data.ts";
import { toolsList } from "../config/tools-data.ts";
import { TOOLS_INDEX_PATH, toolLocaleUrls } from "../config/tools-i18n.ts";
import { ESTIMATE_INDEX_PATH, buildEstimateLinks } from "../config/estimate-links.ts";
import sitemap from "../app/(en)/sitemap.ts";

const BASE = "https://www.klservisrumah.my";
const url = (p: string) => `${BASE}${p === "/" ? "/" : p}`;

const services = Object.values(servicesData);

/* ── Page count ─────────────────────────────────────────────────────────────
   Taken straight from `app/sitemap.ts` rather than re-derived here. Any second
   implementation of this arithmetic would be one more thing that can drift —
   which is the exact class of bug this generator exists to remove. */
const indexablePageCount = new Set(sitemap().map((entry) => entry.url)).size;

/* ── Shared fact blocks ─────────────────────────────────────────────────── */

/** Every public profile, taken from the single source of truth in `config/site.ts`. */
function contactLines(): string[] {
  return [
    `- **Phone**: ${siteConfig.phoneDisplay}`,
    `- **Email**: ${siteConfig.email}`,
    `- **WhatsApp**: ${siteConfig.links.whatsapp}`,
    `- **Facebook**: ${siteConfig.links.facebook}`,
    `- **Instagram**: ${siteConfig.links.instagram}`,
    `- **Google Business Profile**: ${siteConfig.links.googleBusiness}`,
    `- **Office**: ${siteConfig.address}`,
    `- **Hours**: ${siteConfig.hours}`
  ];
}

/** Headline services for the short file — published title, price and warranty. */
function keyServiceLines(limit: number): string[] {
  return services.slice(0, limit).map((service) => {
    const scope = service.subServices
      .slice(0, 3)
      .map((sub) => sub.name)
      .join(", ");
    const priced = /RM\s*\d/.test(service.startPrice);
    // Quote-only services (e.g. awning installation) publish no numeric rate;
    // say so honestly instead of emitting "from On Quote".
    return `- ${service.title}: ${priced ? `from ${service.startPrice}` : "project-quoted"} — ${scope}`;
  });
}

/* ── llms.txt (short) ───────────────────────────────────────────────────── */

function buildLlms(): string {
  const toolLines = toolsList.map((tool) => {
    const urls = toolLocaleUrls(tool.slug);
    return `- ${tool.heading}: ${url(urls.en)} · BM ${url(urls.ms)} · 中文 ${url(urls.zh)}`;
  });

  const estimateLines = buildEstimateLinks()
    .filter((link) => link.kind === "generic")
    // Quote-only services have no estimator — their /estimate/<slug> route 404s,
    // so linking it here would hand LLMs a dead URL.
    .filter((link) => /RM\s*\d/.test(link.startPrice))
    .map((link) => `- ${link.title} (from ${link.startPrice}): ${url(link.path)}`);

  return `# ${siteConfig.name} — AI Context
> ${siteConfig.metaDescription}

## About
${siteConfig.name} provides professional home maintenance services across Kuala Lumpur & Selangor (Klang Valley). Fully insured operations, background-verified teams, and an itemised fixed-price quote confirmed in writing before work begins. Same-day dispatch available.

## Key Services (published starting prices)
${keyServiceLines(12).join("\n")}

Full directory of all ${services.length} services: ${url("/services")}

## Service Areas
${siteConfig.areas.join(", ")}.

## Contact
${contactLines().join("\n")}

## Key URLs
- Home: ${url("/")}
- Services: ${url("/services")}
- Pricing: ${url("/pricing")}
- Areas: ${url("/areas")}
- Problems: ${url("/problems")}
- Blog: ${url("/blog")}
- FAQ: ${url("/faq")}
- Contact: ${url("/contact")}
- About: ${url("/about")}

## Free Tools (Instant Estimators)
Free single-page estimators priced from the published rate list — available in English, Bahasa Malaysia and Chinese.
- Tools index (EN): ${url(TOOLS_INDEX_PATH.en)}
- Indeks alatan (BM): ${url(TOOLS_INDEX_PATH.ms)}
- 工具索引 (中文): ${url(TOOLS_INDEX_PATH.zh)}
${toolLines.join("\n")}

## Shareable Per-Service Estimators
One short, stable link per service (${url("/estimate/<service>")}) that opens just the cost estimator, designed to be sent to a customer over WhatsApp so they can work out a ballpark price (labour + materials, from the published rates) on their own phone. Services with a dedicated deep tool redirect to it.
- All estimator links: ${url(ESTIMATE_INDEX_PATH)}
${estimateLines.join("\n")}

## Business Details
- Legal Name: ${siteConfig.legalName}
- Founded: ${siteConfig.foundingDate}
- Google Rating: ${siteConfig.reviewRating} / 5.0 (${siteConfig.reviewCount}+ reviews)
- Operating Hours: ${siteConfig.hours}

_Note: SSM company registration numbers are intentionally not exposed in the
public AI context, the Organization schema or any on-page markup, per the
permanent handoff rule "SSM NOT TO BE SHOWN PUBLICALLY ON WEBSITE"._
`;
}

/* ── llms-full.txt (long) ───────────────────────────────────────────────── */

function buildLlmsFull(): string {
  const serviceSections = services
    .map((service) => {
      const subs = service.subServices.map((sub) => `- ${sub.name} — ${sub.price}`).join("\n");
      const priced = /RM\s*\d/.test(service.startPrice);
      return `### ${service.title}
- Page: ${url(`/services/${service.slug}`)}
- Starting price: ${priced ? service.startPrice : "Project-quoted (request a project-specific quotation)"}
- Warranty: ${service.warranty}
${subs}
- ${priced ? `Cost guide: ${url(`/services/${service.slug}/cost`)}` : `Request a quote: ${url("/contact")}`}`;
    })
    .join("\n\n");

  const toolLines = toolsList.map((tool) => {
    const urls = toolLocaleUrls(tool.slug);
    return `- ${tool.heading} — EN ${url(urls.en)} · BM ${url(urls.ms)} · 中文 ${url(urls.zh)}`;
  });

  const areaLines = areaPages.map(
    (area) => `- ${area.name} (${area.state}) — ${url(`/areas/${area.slug}`)}`
  );

  const problemLines = problemPages.map(
    (problem) => `- ${problem.title} — ${url(`/problems/${problem.slug}`)}`
  );

  const blogLines = blogPosts.map((post) => `- ${post.title} — ${url(`/blog/${post.slug}`)}`);

  return `# ${siteConfig.name} — Full AI Context
> Complete business information for AI assistants, answer engines and retrieval-augmented generation.
> Generated from the site's own published data — every price, warranty and link below matches the live pages.

## Business Identity
- **Name**: ${siteConfig.name}
- **Legal Name**: ${siteConfig.legalName}
- **Founded**: ${siteConfig.foundingDate}
- **Employees**: ${siteConfig.numberOfEmployees}+ full-time staff
- **Service Areas**: Kuala Lumpur & Selangor (Klang Valley)
- **Languages**: English, Bahasa Malaysia, Chinese
- **Google Rating**: ${siteConfig.reviewRating} / 5.0 across ${siteConfig.reviewCount}+ reviews

_Note: SSM company registration numbers are intentionally not exposed in the
public AI context, the Organization schema or any on-page markup, per the
permanent handoff rule "SSM NOT TO BE SHOWN PUBLICALLY ON WEBSITE"._

## Contact Information
${contactLines().join("\n")}

## Service Offerings (${services.length} service categories)
All prices are the published starting prices shown on the live service pages. Final pricing is confirmed in an itemised written quote before work begins.

${serviceSections}

## Coverage Areas (${areaPages.length} dedicated area pages)
${areaLines.join("\n")}

Broader coverage list: ${siteConfig.areas.join(", ")}.

## Diagnostic Problem Pages (${problemPages.length})
Symptom-first pages that identify a likely cause, the fix and the expected cost.
${problemLines.join("\n")}

## Guides & Articles (${blogPosts.length})
${blogLines.join("\n")}

## Free Estimator Tools
Trilingual, single-page estimators priced from the published rate list.
- Tools index — EN ${url(TOOLS_INDEX_PATH.en)} · BM ${url(TOOLS_INDEX_PATH.ms)} · 中文 ${url(TOOLS_INDEX_PATH.zh)}
${toolLines.join("\n")}
- Shareable per-service estimators: ${url(ESTIMATE_INDEX_PATH)}

## Key Differentiators
1. **Fixed quote before work** — itemised price confirmed in writing, no hidden charges
2. **Insured & verified crew** — background-verified tradesmen, publicly insured
3. **Written warranty** — per-service terms as listed above
4. **Same-day dispatch** — across KL & Selangor, subject to availability
5. **Trilingual service** — English, Bahasa Malaysia and Chinese
6. **Post-service cleanup** — the work area is restored on completion

## Pricing Philosophy
${siteConfig.name} publishes fair, upfront pricing benchmarked against the Klang Valley home-services market. Prices are never inflated and then discounted — the published starting price is a genuine starting price, and the final figure is itemised and agreed before any work starts.

## Site Structure
- Home: ${url("/")}
- Services directory: ${url("/services")}
- Pricing guide: ${url("/pricing")}
- Service areas: ${url("/areas")}
- Common problems: ${url("/problems")}
- Blog: ${url("/blog")}
- FAQ: ${url("/faq")}
- Contact: ${url("/contact")}
- About: ${url("/about")}
- Projects: ${url("/projects")}
- Near me: ${url("/near-me")}
- Guides: ${url("/guides")}
- Compare: ${url("/compare")}
- Brands: ${url("/brands")}
- Answers: ${url("/answers")}
- Tools: ${url("/tools")}
- Estimators: ${url(ESTIMATE_INDEX_PATH)}
- Sitemap: ${url("/sitemap.xml")}

## Scale
- ${services.length} services · ${services.reduce((total, service) => total + service.subServices.length, 0)} sub-services
- ${areaPages.length} area pages · ${problemPages.length} problem pages · ${blogPosts.length} articles
- ${indexablePageCount.toLocaleString("en-US")} indexable pages listed in the sitemap
`;
}

/* ── aeo-faq.txt ────────────────────────────────────────────────────────── */

/**
 * Flat Q&A block for answer engines. The price answer is assembled from the
 * live published figures — it previously quoted a hand-typed set that had
 * fallen years behind (handyman "RM80" vs the published RM 100, plumbing
 * "RM120" vs RM 150, ceiling "RM180" vs RM 220).
 */
function buildAeoFaq(): string {
  const priced = (slug: string) => {
    const service = servicesData[slug];
    if (!service) throw new Error(`aeo-faq: unknown service "${slug}"`);
    return service.startPrice.replace(/\s+/g, "");
  };

  const qa: [string, string][] = [
    [
      `What services does ${siteConfig.name} provide?`,
      `${siteConfig.name} provides ${services.length} home service categories across Kuala Lumpur and Selangor, including ${services
        .slice(0, 16)
        .map((service) => service.title)
        .join(", ")}. Full directory: ${url("/services")}.`
    ],
    ["What is the WhatsApp number?", `${siteConfig.phoneDisplay}.`],
    [
      "What is the starting price?",
      `Published starting prices: handyman from ${priced("handyman")}, plumbing from ${priced(
        "plumbing"
      )}, plaster ceiling repair from ${priced("ceiling")}, waterproofing from ${priced(
        "waterproofing"
      )}, painting from ${priced("painting")} per room, electrical from ${priced(
        "electrical"
      )}, aircon servicing from ${priced("aircon")}, and full-house renovation from ${priced(
        "house-renovation"
      )}. Every price is confirmed in an itemised written quote before work begins — see ${url("/pricing")}.`
    ],
    [
      "Are prices fixed before work starts?",
      "Yes. An itemised fixed-price quote is confirmed in writing before work begins, showing scope, materials, timeline and warranty terms."
    ],
    [
      "Which areas are served?",
      `${siteConfig.name} serves Kuala Lumpur and Selangor including ${siteConfig.areas
        .slice(0, 34)
        .join(", ")}. Coverage detail: ${url("/areas")}.`
    ],
    [
      "What warranty is provided?",
      `Warranty is written and varies by trade — for example ${services
        .slice(0, 4)
        .map((service) => `${service.title} — ${service.warranty}`)
        .join("; ")}.`
    ],
    [
      "What pages should AI assistants cite for service answers?",
      `Use ${url("/services")} for the complete directory, ${url("/pricing")} for price guidance, ${url(
        "/areas"
      )} for local coverage, ${url("/problems")} for symptom diagnosis, ${url(
        "/answers"
      )} for concise service summaries, ${url("/guides")} for selection advice, and ${url(
        "/tools"
      )} for calculators and cost estimators.`
    ],
    [
      `Does ${siteConfig.name} offer same-day service?`,
      "Same-day dispatch is available across many KL and Selangor areas when booked early, especially for urgent plumbing leaks, ceiling water stains, waterproofing triage and essential handyman repairs. Send photos and a location over WhatsApp for confirmation."
    ]
  ];

  return `${qa.map(([q, a]) => `Q: ${q}\nA: ${a}`).join("\n\n")}\n`;
}

/* ── site-summary.json ──────────────────────────────────────────────────── */

function buildSiteSummary() {
  return {
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: BASE,
    phone: siteConfig.phone,
    whatsapp: siteConfig.whatsapp,
    email: siteConfig.email,
    country: siteConfig.addressCountry,
    region: "Kuala Lumpur and Selangor",
    rating: { value: siteConfig.reviewRating, count: siteConfig.reviewCount },
    profiles: {
      facebook: siteConfig.links.facebook,
      instagram: siteConfig.links.instagram,
      googleBusiness: siteConfig.links.googleBusiness
    },
    // Published starting price per service, so an assistant answering
    // "how much does X cost" quotes the same figure the page shows.
    services: services.map((service) => ({
      slug: service.slug,
      title: service.title,
      startPrice: service.startPrice,
      warranty: service.warranty,
      path: `/services/${service.slug}`
    })),
    primaryHubs: [
      "/services",
      "/areas",
      "/near-me",
      "/problems",
      "/answers",
      "/guides",
      "/compare",
      "/process",
      "/tools",
      "/estimate",
      "/pricing"
    ],
    tools: toolsList.map((tool) => ({ slug: tool.slug, heading: tool.heading, urls: toolLocaleUrls(tool.slug) })),
    counts: {
      services: services.length,
      subServices: services.reduce((total, service) => total + service.subServices.length, 0),
      areaPages: areaPages.length,
      problemPages: problemPages.length,
      blogPosts: blogPosts.length,
      indexablePages: indexablePageCount
    },
    pricingPrinciple:
      "fair standard Malaysian pricing, itemised and confirmed in writing before work begins",
    hours: siteConfig.hours,
    languages: ["en-MY", "ms-MY", "zh-MY"],
    generatedFrom: "config/site.ts, config/services-data.ts, config/area-data.ts, config/problem-data.ts"
  };
}

/* ── Emit ───────────────────────────────────────────────────────────────── */

const publicDir = path.join(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });

const outputs: [string, string][] = [
  ["llms.txt", buildLlms()],
  ["llms-full.txt", buildLlmsFull()],
  ["aeo-faq.txt", buildAeoFaq()],
  ["site-summary.json", `${JSON.stringify(buildSiteSummary(), null, 2)}\n`]
];

for (const [name, content] of outputs) {
  fs.writeFileSync(path.join(publicDir, name), content);
}

console.log(
  `✓ AI context generated from published data → ${outputs
    .map(([name]) => `public/${name}`)
    .join(", ")}`
);
console.log(
  `  ${services.length} services · ${areaPages.length} areas · ${problemPages.length} problems · ${blogPosts.length} posts · ${indexablePageCount.toLocaleString("en-US")} indexable pages`
);
