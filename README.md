# KL Servis Rumah — klservisrumah.my

Professional, modern, and SEO-focused Home Services website for **KL Servis Rumah** (parent company: **Multicore Dynamics Resources**), serving Kuala Lumpur and Selangor, Malaysia.

This project is built from scratch with an elite, enterprise-level architecture using Next.js 15, React 19, HeroUI v3, and Tailwind CSS v4.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [HeroUI v3 (formerly NextUI)](https://heroui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

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

---

## 🗺️ Information Architecture

The website incorporates a structured folder architecture to make expanding pages and adding new services incredibly seamless:

- `/` — Premium high-converting homepage (Hero, Trust Badges, Services, Testimonials, FAQS, local service areas).
- `/about` — Detailed portfolio showcasing legal parent company **Multicore Dynamics Resources**, service standards, and mission.
- `/services` — General services directory directory.
- `/services/[slug]` — Dynamic, rich service details pages for:
  - `painting` (House, Interior, Exterior Painting)
  - `plumbing` (Water Leakage, repairs)
  - `ceiling` (Plaster ceilings, partitions)
  - `waterproofing` (PU injection grouting, roof leaks)
  - `handyman` (Locks, doors, TV wall mounts, assemblies)
- `/areas` — Coverage area index directory.
- `/areas/[slug]` — Local SEO landing pages (e.g. `kuala-lumpur`, `petaling-jaya`, `subang-jaya`, `puchong`, `shah-alam`, `klang`) programmatically optimized to rank high for localized search strings.
- `/faq` — Expandable, searchable local FAQs matching Google featured snippets.
- `/blog` — Informative blog directory with tags and read times.
- `/blog/[slug]` — Dynamic Markdown article reader page (e.g. *PU Grouting* or *Paint Selection tips*).
- `/contact` — Schema-validated interactive Booking Form powered by React Hook Form & Zod.

---

## 📈 Search Experience Optimization (SXO)

KL Servis Rumah is built with complete, industry-leading SEO integration from day one:

1.  **Technical SEO**: 100% pre-rendered static routes (SSG) for instantaneous load times (PageSpeed target: 95-100).
2.  **Semantic Schema**: Structured JSON-LD blocks injected programmatically:
    - *Organization Schema* (brand, contacts, areas served)
    - *LocalBusiness Schema* (Geo coordinates, hours)
    - *Service Schema* (Starting prices, availability, guarantees)
    - *FAQ Schema* (Structured question accordions for PPA ranking)
    - *Breadcrumb Schema* (Crawlable structural trails)
3.  **AIO / LLMO Optimization**: Content layouts crafted in conversational question-answer structures targeting direct AI search indexings.
4.  **Local Programmatic SEO**: Structured linking matrices linking core services with target KL & Selangor neighborhood parameters.

---

## 📦 Deploying on Vercel

The project is pre-optimized for continuous zero-downtime integration on Vercel:

1.  Create a new repository on your GitHub account (e.g. `klservisrumah-web` or `klservisrumah.my`).
2.  Push these project files to your new repository.
3.  Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
4.  Import your GitHub repository.
5.  Vercel will automatically detect **Next.js** configurations. Click **Deploy**.
6.  Once deployed, add your custom domain `klservisrumah.my` in Vercel settings and configure the DNS nameservers.

---

## 📝 Legal Info

- **Parent Entity**: Multicore Dynamics Resources
- **Email Contact**: info@klservisrumah.my
- **Direct Dispatch Helpline**: +60 11-1662 7349
