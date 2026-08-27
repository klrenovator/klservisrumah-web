# PART 1 — TECHNICAL SEO + CRAWLABILITY + INDEXATION + ARCHITECTURE

Perform a complete technical audit.

## 1.1 Crawlability

Check:

- robots.txt
- XML sitemap(s)
- sitemap index
- sitemap URL patterns
- canonical URLs
- noindex
- nofollow
- meta robots
- X-Robots-Tag if applicable
- HTTP status codes
- redirects
- redirect chains
- redirect loops
- 404 pages
- soft 404s
- 410 pages
- 5xx errors
- orphan pages
- crawl traps
- parameter URLs
- duplicate URLs
- trailing slash variations
- HTTP/HTTPS
- www/non-www
- URL normalization
- pagination
- faceted navigation
- query parameters
- JavaScript-generated links
- dynamically generated content
- client-side rendering
- server-side rendering
- hydration issues

Explain exactly what is wrong and why it matters.

## 1.2 5,000+ PAGE INDEXATION AUDIT

This is one of the MOST IMPORTANT parts. Determine: how many URLs appear to
exist? How many are in the XML sitemap? How many are potentially indexable? How
many are likely indexed? How many are useful? How many appear duplicated? How
many appear thin? How many are near-duplicates? How many are potentially doorway
pages? How many are location variations? How many are service variations? How
many are combinations of service + location? How many pages may provide little
unique value?

Identify whether the site has: Index Bloat, Content Bloat, URL Bloat,
Programmatic SEO Bloat, Keyword Cannibalization, Location-page duplication,
Service-page duplication, Thin content, Near-duplicate content, Low-value
indexed URLs, Crawled-but-low-value pages, Discovered-but-not-indexed patterns,
Duplicate-without-user-selected-canonical patterns, Alternate-page patterns.

If data is unavailable, explain exactly what data needs to be obtained from
Google Search Console, Google Analytics, Screaming Frog, Sitebulb, Ahrefs,
Semrush, or server logs.

## 1.3 INDEXATION STRATEGY

Determine whether every page SHOULD actually be indexable. Create
recommendations for: KEEP INDEXED, NOINDEX, CANONICALIZE, MERGE, REDIRECT,
DELETE, IMPROVE, CONSOLIDATE. Explain the decision criteria. Do NOT recommend
deleting pages merely because they have low traffic. Evaluate search demand,
unique value, backlinks, conversions, impressions, clicks, relevance, topical
importance, local intent, uniqueness, internal-link value, customer usefulness.

## 1.4 URL STRUCTURE

Audit: URL length, hierarchy, readability, keyword relevance, unnecessary
folders, duplicate structures, location naming, service naming, slug
consistency, future scalability. Recommend an ideal URL architecture.

## 1.5 SITE ARCHITECTURE

Map the website into: Homepage, Core Services, Service Categories, Individual
Services, Locations, Service + Location, Problem Pages, Informational Content,
Commercial Pages, Transactional Pages, Supporting Content. Determine whether
the architecture creates a logical topical hierarchy. Identify deep pages,
orphan pages, excessive depth, weak parent-child relationships, bad taxonomy,
duplicate taxonomies, competing pages. Recommend a new architecture if required.

## 1.6 CORE WEB VITALS + PERFORMANCE

Audit: LCP, INP, CLS, TTFB, JavaScript, CSS, fonts, image optimization, lazy
loading, image dimensions, caching, compression, third-party scripts, analytics
scripts, tracking scripts, unnecessary JS, mobile performance, desktop
performance. Do not invent Lighthouse/PageSpeed scores. If actual testing is
unavailable, clearly mark it as **NOT VERIFIED** and explain what should be
tested.

## 1.7 JAVASCRIPT / NEXT.JS SEO

The website uses a modern web framework. Audit: server rendering, metadata
generation, dynamic metadata, canonical generation, robots generation, sitemap
generation, structured data rendering, internal links, content rendering,
hydration, client-only components, dynamic routes, static generation, ISR, 404
handling, redirects, route duplication. Determine whether search engines and AI
crawlers can reliably access the primary content.
