# KL Servis Rumah — klservisrumah.my

Professional, modern, and SEO-focused Home Services website for **KL Servis Rumah** (parent company: **Multicore Dynamics Resources**), serving Kuala Lumpur and Selangor, Malaysia.

This project uses an enterprise-level Next.js 15 + React 19 + Tailwind CSS v4 architecture with reusable SEO, AEO, GEO and local-service components. Heavy UI/animation runtimes were removed in favour of native CSS and lightweight React components.

---

## 🌐 Trilingual Support (EN / BM / 中文)

The website supports **three languages** with client-side language switching:
- **English (EN)** — Default language
- **Bahasa Malaysia (BM)** — Malay language
- **中文 (ZH)** — Chinese language

Language switching is handled via React context + localStorage, with all UI strings, service content, and metadata fully translated across all three languages.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: Custom reusable React components styled with Tailwind CSS
- **Animations**: Native CSS transitions and lightweight IntersectionObserver reveal effects
- **Forms**: Controlled React state with a WhatsApp handoff (no server form POST by design — the booking form composes a pre-filled `wa.me` message)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Middleware**: Next.js Middleware for locale URL handling

---

## 🚀 Getting Started

### 1. Installation

First, clone the project files and install dependencies:

```bash
cd klservisrumah-web
npm install
```

### 2. Run the Development Server

Start the local development server with Turbopack for lightning-fast compilation:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live results!

### 3. Production Build

To build the static optimized pages and verify TypeScript compilations:

```bash
npm run build
```

The build generates **4,000+ static pages** (SSG) covering services, suburbs, areas, problems, guides, comparison hubs, answer hubs, tools, and more.

---

## 🗺️ Information Architecture

The website incorporates a structured folder architecture to make expanding pages and adding new services incredibly seamless:

### Core Pages
- `/` — Premium high-converting homepage (Hero, Trust Badges, Services, Testimonials, FAQS, local service areas)
- `/about` — Detailed portfolio showcasing legal parent company **Multicore Dynamics Resources**, service standards, and mission
- `/services` — General services directory with 28 professional home services
- `/pricing` — Transparent market-rate pricing guide with detailed breakdowns
- `/faq` — Expandable, searchable local FAQs matching Google featured snippets
- `/blog` — Informative blog directory with tags and read times
- `/contact` — Multi-step interactive booking form powered by React Hook Form & Zod
- `/projects` — Featured projects gallery
- `/areas` — Coverage area index directory
- `/tools` — Interactive calculators and diagnostic tools

### Dynamic Service Pages
- `/services/[slug]` — Dynamic, rich service details pages for all 28 services:
  - Painting, Plumbing, Ceiling, Waterproofing, Handyman
  - House Renovation, Electrical, Water Heater, Ceiling Fan, Lighting
  - Tiling, Plaster Ceiling, Skim Coat, Flooring, Epoxy Flooring
  - Roof Repair, Kitchen Cabinet, Carpentry, Door, Window, Locksmith
  - Glass & Aluminium, Cleaning, Deep Cleaning, Post-Renovation Cleaning
  - CCTV & Security, Autogate, Welding & Metal Fabrication
- `/services/[slug]/[subservice]` — 137+ sub-service detail pages
- `/services/[slug]/cost` — Service cost guides with market-rate pricing
- `/services/[slug]/emergency` — Emergency service pages

### Local SEO Pages
- `/areas/[slug]` — Local SEO landing pages for 49+ suburbs (e.g. `kuala-lumpur`, `petaling-jaya`, `subang-jaya`, `puchong`, `shah-alam`, `klang`)
- `/areas/[slug]/[service]` — Area × service combination pages (1,300+ pages)
- `/suburbs/[slug]/[service]` — Suburb × service pages (1,300+ pages)
- `/near-me/[service]` — "Near me" location-based service pages

### Content & Knowledge Pages
- `/problems/[slug]` — 43 diagnostic/problem pages with solutions
- `/guides/[slug]` — Service selection guides
- `/guides/maintenance/[slug]` — Maintenance checklists and tips
- `/compare/[slug]` — Service comparison pages
- `/brands/[slug]` — Brand guides and recommendations
- `/top/[slug]` — "Best of" consideration pages
- `/answers/[slug]` — AI answer guide pages
- `/process/[slug]` — Service process explanations
- `/commercial/[slug]` — Commercial service pages
- `/residential/[slug]` — Residential service pages
- `/seasonal/[slug]` — Seasonal maintenance tips
- `/blog/[slug]` — Dynamic Markdown article reader page

### Interactive Tools
- `/tools/painting-calculator` — Paint quantity calculator
- `/tools/plumbing-diagnostic` — Plumbing issue diagnostic tool
- `/tools/leak-triage` — Leak severity triage tool
- `/tools/ceiling-calculator` — Ceiling material calculator
- `/tools/tv-mount-advisor` — TV mounting recommendation tool

---

## 📈 Search Experience Optimization (SXO)

KL Servis Rumah is built with complete, industry-leading SEO integration from day one:

1. **Technical SEO**: 100% pre-rendered static routes (SSG) for instantaneous load times (PageSpeed target: 95-100)
2. **Semantic Schema**: Structured JSON-LD blocks injected programmatically:
   - Organization Schema (brand, contacts, areas served)
   - LocalBusiness Schema (Geo coordinates, hours)
   - Service Schema (Starting prices, availability, guarantees)
   - FAQ Schema (Structured question accordions for PPA ranking)
   - Breadcrumb Schema (Crawlable structural trails)
   - OfferCatalog Schema (Service offerings with pricing)
   - Article Schema (Blog posts and guides)
   - HowTo Schema (Process and guide pages)
3. **AIO / LLMO Optimization**: Content layouts crafted in conversational question-answer structures targeting direct AI search indexings
4. **Local Programmatic SEO**: Structured linking matrices linking core services with target KL & Selangor neighborhood parameters
5. **Trilingual SEO**: hreflang tags and language-specific metadata for EN/MS/ZH
6. **Sitemap**: Comprehensive XML sitemap with 2,200+ URLs and proper priority weighting

---

## 🌍 Internationalization (i18n)

The website implements a robust client-side internationalization system:

- **Language Detection**: URL path → localStorage → cookie → default (EN)
- **Middleware**: Handles locale-prefixed URLs with proper redirects
- **Translation System**: React context + JSON message files
- **Coverage**: All UI strings, service content, metadata, and structured data translated
- **Language Switcher**: Segmented pill control in navbar (EN | BM | 中)

---

## 📦 Deploying on Vercel

The project is pre-optimized for continuous zero-downtime integration on Vercel:

1. Create a new repository on your GitHub account (e.g. `klservisrumah-web` or `klservisrumah.my`)
2. Push these project files to your new repository
3. Log in to [Vercel](https://vercel.com/) and click **Add New Project**
4. Import your GitHub repository
5. Vercel will automatically detect **Next.js** configurations. Click **Deploy**
6. Once deployed, add your custom domain `klservisrumah.my` in Vercel settings and configure the DNS nameservers

---

## 📊 Project Statistics

- **Total Services**: 28 service pillars
- **Sub-Services**: 137+ specialized sub-services
- **Total Pages**: 4,000+ static pages (SSG)
- **Languages**: 3 (English, Bahasa Malaysia, Chinese)
- **Suburbs Covered**: 49+ across KL & Selangor
- **Problem Pages**: 43 diagnostic/solution pages
- **Interactive Tools**: 5 calculators and diagnostic tools
- **Quality**: 0 TypeScript errors, 0 ESLint warnings

---

## 📝 Legal Info

- **Parent Entity**: Multicore Dynamics Resources
- **Email Contact**: info@klservisrumah.my
- **Direct Dispatch Helpline**: +60 11-1662 7349
- **WhatsApp**: +60 11-1662 7349
- **Operating Hours**: Monday–Sunday, 9:00 AM – 6:00 PM

---

## 🎨 Design System

- **Primary Colors**: Sky Blue (#0EA5E9), Dark Navy (#075985)
- **Typography**: System font stack with balanced hierarchy
- **Spacing**: Generous whitespace with professional padding
- **Components**: Rounded corners (2xl–3xl), subtle shadows, clean borders
- **Trust Elements**: Background-verified crew, insured operations, transparent pricing, warranty badges

---

## 🔧 Development Scripts

```bash
npm run dev             # Start development server
npm run build           # Build for production (runs the full prebuild gate first)
npm start               # Start production server
npm run lint            # Run ESLint
npm run type-check      # tsc --noEmit
npm run test:estimators # Estimator + pricing + i18n + AI-context regression suite
npm run gen:rates       # Regenerate the estimator rate book from published pricing
npm run gen:ai-context  # Regenerate the AI-context files from published data
```

#### Pre-build gates (run automatically by `npm run build`)

| Script | Guards against |
|---|---|
| `gen:*` | Generated data drifting from `config/*` |
| `validate:blogs` | Broken/missing production articles |
| `audit:topical-map` | Internal-link silos referencing unknown slugs |
| `audit:specialty-locale` | Thin or unbalanced MS/ZH specialty content |
| `audit:i18n` | Missing/extra/malformed translation keys |
| `audit:problem-i18n` | English leaking into MS/ZH problem pages |
| `audit:client-bundle` | Heavy content registries leaking into browser bundles |
| `test:estimators` | Pricing, estimator and AI-context regressions |

#### Post-build audits (run after `npm run build`)

These need the rendered `.next/server/app` output, so they are not part of
`prebuild`. Run them in CI after the build:

```bash
npm run audit:html      # alt text, dead links, duplicate ids, one <main>, one <h1>, page weight
npm run audit:links     # every internal href resolves to a real page/asset/redirect
npm run audit:seo-head  # canonical, hreflang, robots, social tags, sitemap parity
npm run audit:meta      # title/description/JSON-LD/anchor-text inventory
npm run seo:audit       # metadata consistency report → docs/seo-audit-report.md
```

### Generated files — do not hand-edit

Two sets of files are **derived** from `config/*` and rewritten on every build
(`prebuild` runs `gen:rates` then `gen:ai-context`):

| File | Generated by | Source of truth |
|---|---|---|
| `lib/estimator/rate-book.generated.ts` | `gen:rates` | `config/services-data.ts`, `config/market-rates.ts` |
| `public/llms.txt`, `public/llms-full.txt`, `public/aeo-faq.txt`, `public/site-summary.json` | `gen:ai-context` | `config/site.ts`, `services-data.ts`, `area-data.ts`, `problem-data.ts`, `blog-data.ts`, `app/sitemap.ts` |
| `config/service-summary.generated.ts`, `config/service-nav.generated.ts`, `config/quote-catalog.generated.ts`, `config/problem-nav.generated.ts`, `config/content-nav.generated.ts`, `config/dedicated-tool-cards.generated.ts`, `config/area-nav.generated.ts` | `gen:service-summary` | `config/services-data.ts`, `problem-data.ts`, `content-data.ts`, `tools-data.ts`, `area-data.ts` |
| `config/blog-slugs.generated.json`, `config/blog-related.generated.json`, `config/blog-production.generated.json` | `gen:blog-index` | `config/blog-data*.ts` |

The `public/*` files are what answer engines (ChatGPT, Perplexity, Claude,
Gemini) read instead of the rendered pages. They previously drifted — quoting
prices years out of date and linking to a different brand's social profiles —
so they are now generated, and `npm run test:estimators` fails the build if a
committed copy no longer matches the published data. To change a price, a
warranty or a social link, edit the config and rebuild.

### Client bundles — never import a content registry from a client component

`config/services-data.ts` (~470 KB), `problem-data.ts`, `tools-data.ts`,
`tools-i18n.ts` and `content-data.ts` are **server-side registries**. Importing
any of them from a `"use client"` module — directly *or through a helper* —
inlines the whole file into the browser bundle of every route that renders the
component. That is exactly how the homepage once reached 514 kB of first-load
JavaScript against a 102 kB shared baseline.

Client components must instead use the compact generated catalogs:

| Need | Import |
|---|---|
| Service slug, title, starting price | `config/service-nav.generated.ts` |
| …plus tagline, icon, warranty, sub-service names | `config/service-summary.generated.ts` |
| …plus sub-service price and blurb | `config/quote-catalog.generated.ts` |
| Problem link cards (title, symptom, cost range) | `config/problem-nav.generated.ts` |
| Generic content-page siblings | `config/content-nav.generated.ts` |
| The six hand-built calculator cards | `config/dedicated-tool-cards.generated.ts` |
| Area slug, state, trilingual name | `config/area-nav.generated.ts` |

Anything larger should be passed down as props from a server component, or
loaded on demand with a dynamic `import()` — see `lib/smart-finder-loader.ts`,
which keeps the ~1.1 MB Smart Service Finder engine out of the initial bundle
until a visitor actually searches.

`npm run audit:client-bundle` walks the static import graph from every client
module and **fails the build** if any of them can reach a registry. `import type`
is erased at compile time and is always allowed.

---

**Built with ❤️ for KL Servis Rumah — Professional Home Services in Kuala Lumpur & Selangor**
