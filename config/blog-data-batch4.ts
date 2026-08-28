import type { BlogPost } from "@/config/blog-data";

/**
 * Batch 4 blog posts — plaster ceiling, skim coat, flooring, epoxy flooring
 * and roof repair (main service + 2 sub-services each). Written in the same
 * voice as the primary `blogPosts` array and `blog-data-extra.ts`, focused on
 * practical Klang Valley context and AEO-friendly structure.
 *
 * All entries default to English; MS/ZH fallback rendered from the primary
 * translation layer in `config/blog-i18n.ts`.
 */
const now = "2026-08-13";

function post(entry: Omit<BlogPost, "date" | "author" | "readTime">): BlogPost {
  return {
    date: now,
    author: "KL Servis Rumah Editorial Team",
    readTime: "6 min read",
    ...entry
  };
}

export const batch4BlogPosts: BlogPost[] = [
  post({
    slug: "plaster-ceiling-design-build-kl",
    title: "Plaster Ceiling Design & Build in Kuala Lumpur & Selangor",
    excerpt: "Flat, tiered, L-box, cove and curved plaster ceilings with concealed lighting, designed and built across KL & Selangor from RM 10 per sq ft.",
    category: "Ceiling",
    coverImage: "/hero/home-services-plaster-ceiling-kl.jpg",
    metaTitle: "Plaster Ceiling Design & Build in KL & Selangor",
    metaDesc: "Plaster ceiling design & build in KL & Selangor — flat, tiered, L-box, cove and curved ceilings with concealed lighting. From RM 10 per sq ft.",
    content: `
A plaster ceiling transforms a plain room into a polished, modern space — and it is one of the most popular home upgrades in Kuala Lumpur and Selangor. KL Servis Rumah provides plaster ceiling design and build across the Klang Valley, from simple flat ceilings to tiered L-box designs with concealed lighting.

## Plaster ceiling options

- **Flat plaster ceiling** — a clean, smooth ceiling for a minimalist, modern look.
- **Tiered & L-box ceiling** — stepped designs that add depth, often with a concealed light trough.
- **Cove & curved ceiling** — soft, curved transitions for a premium feel.
- **Ceiling repair & re-skim** — resurfacing existing cracked or worn ceilings.

We use quality gypsum board and plaster to create smooth, even, paint-ready surfaces.

## Why install a plaster ceiling?

- **Hides wiring and pipes** — conceals cabling, ducts, and plumbing above the ceiling.
- **Modern look** — flat and L-box designs give rooms a clean, contemporary feel.
- **Adds value** — a well-finished ceiling improves the overall appearance of the home.
- **Concealed lighting** — L-box and cove designs allow elegant indirect lighting.

## The design & build process

1. **Design and measurement** — we measure the area and finalise the design with you.
2. **Framework** — metal framing is installed at the correct level and spacing.
3. **Board installation** — gypsum boards are fixed to the framework.
4. **Jointing and skim** — joints are taped, filled, and skimmed smooth.
5. **Sanding and finishing** — the surface is sanded for a smooth paint-ready finish.
6. **Concealed lighting (optional)** — light troughs and wiring are prepared as required.

## How much does plaster ceiling cost?

| Ceiling type | Starting price |
|---|---|
| Flat plaster ceiling | From RM 10 / sq ft |
| Tiered & L-box ceiling | From RM 14 / sq ft |
| Cove & curved ceiling | From RM 22 / sq ft |
| Ceiling repair & re-skim | From RM 8 / sq ft |

The final cost depends on ceiling area, design complexity, and site condition. A site visit gives you an accurate fixed quote.

## Frequently asked questions

### What is the difference between a flat and L-box ceiling?

A flat ceiling is one smooth surface. An L-box (or tiered) ceiling has stepped layers, usually with a concealed trough for indirect lighting, adding depth and a modern look.

### Do you install the concealed lighting too?

We prepare the ceiling structure and troughs for concealed lighting. Electrical wiring for the lights is done by our licensed electrical team — see our lighting design and installation service.

### How long does a plaster ceiling take?

A standard living-room ceiling is usually completed within a few days, depending on area and design. Drying and finishing times depend on humidity.

## Get a plaster ceiling quote

KL Servis Rumah provides professional plaster ceiling design and build across Kuala Lumpur and Selangor. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20a%20plaster%20ceiling%20for%20my%20property.).
`
  }),
  post({
    slug: "flat-plaster-ceiling-kl",
    title: "Flat Plaster Ceiling Installation in KL & Selangor",
    excerpt: "A clean, smooth flat plaster ceiling across KL & Selangor — hides wiring, evens out the surface and gives rooms a modern look, from RM 10 per sq ft.",
    category: "Ceiling",
    coverImage: "/hero/home-services-plaster-ceiling-kl.jpg",
    metaTitle: "Flat Plaster Ceiling Installation in KL & Selangor",
    metaDesc: "Install a clean, smooth flat plaster ceiling in KL & Selangor — hides wiring, evens the surface and gives rooms a modern look. From RM 10 per sq ft.",
    content: `
A flat plaster ceiling is the clean, simple ceiling choice that most Malaysian homes use. It hides wiring and uneven surfaces, evens out an old ceiling, and gives any room a smooth, modern finish. KL Servis Rumah provides flat plaster ceiling installation across Kuala Lumpur and Selangor, from RM 10 per sq ft.

## What is a flat plaster ceiling?

It is a single-level ceiling built with gypsum board on a metal frame, finished with a smooth skim coat ready for painting. There are no stepped levels or grooves — just a clean, even surface.

## Why choose a flat ceiling?

- **Clean, modern look** — smooth and even, matching most modern interior styles.
- **Hides imperfections** — covers cracks, stains, and uneven old ceilings.
- **Conceals wiring** — hides lighting and electrical cables above.
- **Simple and cost-effective** — the most affordable plaster ceiling option.

## The installation process

1. **Measurement and marking** — we measure the area and mark the ceiling level.
2. **Framework** — metal framing is installed level and evenly spaced.
3. **Board installation** — gypsum boards are fixed to the framework.
4. **Jointing and skim** — joints are taped, filled, and skimmed smooth.
5. **Sanding** — the surface is sanded for a paint-ready finish.

## How much does a flat ceiling cost?

A flat plaster ceiling starts from RM 10 per sq ft. The final cost depends on ceiling area, the condition of the existing surface, whether downlight holes are required, and access.

## Frequently asked questions

### Can a flat ceiling be installed over an existing ceiling?

In most cases, a new plaster ceiling can be installed below an existing damaged or uneven ceiling, provided the height allows it.

### Can I install recessed downlights in a flat ceiling?

Yes. Recessed downlights fit neatly into a flat plaster ceiling, with holes cut during installation and wiring coordinated with our licensed electrical team.

## Get a flat plaster ceiling quote

For a clean, modern ceiling that hides imperfections and wiring, a flat plaster ceiling is an excellent choice. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20a%20flat%20plaster%20ceiling.).
`
  }),
  post({
    slug: "tiered-l-box-ceiling-kl",
    title: "Tiered & L-Box Ceiling Installation in KL & Selangor",
    excerpt: "Add depth and elegance to a room with a tiered or L-box ceiling and concealed lighting across KL & Selangor, from RM 14 per sq ft.",
    category: "Ceiling",
    coverImage: "/hero/home-services-plaster-ceiling-kl.jpg",
    metaTitle: "Tiered & L-Box Ceiling Installation in KL & Selangor",
    metaDesc: "Add depth and elegance with a tiered or L-box ceiling and concealed lighting in KL & Selangor. Professional installation from RM 14 per sq ft.",
    content: `
A tiered or L-box ceiling is one of the most popular ways to give a living room or master bedroom a premium, modern look. The stepped design adds depth and dimension, and when combined with a concealed light trough, it creates soft, elegant indirect lighting. KL Servis Rumah provides tiered and L-box ceiling installation across Kuala Lumpur and Selangor, from RM 14 per sq ft.

## What is an L-box / tiered ceiling?

- **L-box ceiling** — a stepped design where a lower boxed section runs around the perimeter, usually with a concealed trough for LED strip lighting.
- **Tiered ceiling** — multiple stepped levels that add depth and break up a large, flat ceiling.
- **Concealed light trough** — a recessed ledge that hides LED strip lights for indirect illumination.

## Why choose a tiered / L-box ceiling?

- **Adds depth** — stepped levels make a plain room feel more designed and premium.
- **Concealed lighting** — soft indirect light creates a relaxing, modern ambience.
- **Defines the space** — an L-box can visually separate a dining area from a living area.
- **Increases perceived height** — layered designs can make ceilings feel higher.

## How much does an L-box ceiling cost?

A tiered & L-box ceiling starts from RM 14 per sq ft. The final cost depends on the ceiling area, the complexity of the design, and whether concealed lighting is included. Electrical work for the lights is done by our licensed electrical team.

## Frequently asked questions

### What is the difference between a tiered and L-box ceiling?

A tiered ceiling has multiple stepped levels across the ceiling. An L-box ceiling is a specific stepped design where a boxed lower section runs around the perimeter, typically with a concealed light trough.

### Will an L-box ceiling make the room feel smaller?

No. Done well, an L-box actually adds depth and can make a room feel more open and designed, especially with indirect lighting.

## Get a tiered / L-box ceiling quote

Add depth, elegance, and soft concealed lighting to your home with a tiered or L-box ceiling. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20an%20L-box%20ceiling.).
`
  }),
  post({
    slug: "wall-ceiling-skim-coat-kl",
    title: "Wall & Ceiling Skim Coat in Kuala Lumpur & Selangor",
    excerpt: "Smooth, even walls and ceilings with professional skim coating across KL & Selangor — wall and ceiling skim coat, crack repair and full condo re-skim, from RM 5 per sq ft.",
    category: "Skim Coat",
    coverImage: "/hero/home-services-skim-coat-kl.jpg",
    metaTitle: "Wall & Ceiling Skim Coat in KL & Selangor",
    metaDesc: "Smooth, even walls and ceilings with professional skim coating in KL & Selangor — wall & ceiling skim coat, crack repair and full condo re-skim. From RM 5 per sq ft.",
    content: `
If your walls are rough, wavy, or patchy from old paint, stains, or previous repairs, a skim coat gives them a smooth, even finish. KL Servis Rumah provides professional wall and ceiling skim coating across Kuala Lumpur and Selangor, from RM 5 per sq ft.

## Skim coating services we provide

- **Wall skim coating** — a smooth, even finish over rough, stained, or patched walls.
- **Ceiling skim coating** — levelling and smoothing ceilings before painting.
- **Crack & joint repair** — repairing cracks and joints before skimming.
- **Full condo re-skim package** — complete resurfacing for condominiums.

## What is skim coating?

Skim coating is the application of a thin layer of plaster or joint compound over an entire wall or ceiling surface. It evens out minor imperfections, fills small cracks and patches, and creates a smooth, paint-ready finish.

## When do you need a skim coat?

- **Rough or wavy walls** — the surface is uneven and shows under paint.
- **Patchy repaints** — previous repairs show through as different textures.
- **Old wallpaper removal** — the adhesive and damaged plaster need smoothing.
- **Before a full repaint** — for a professional, flawless paint finish.

## How much does skim coating cost?

| Service | Starting price |
|---|---|
| Wall skim coating | From RM 5 / sq ft |
| Ceiling skim coating | From RM 6 / sq ft |
| Crack & joint repair | From RM 22 / linier ft |
| Full condo re-skim package | From RM 4,200 |

## Frequently asked questions

### Is a skim coat the same as painting?

No. Skim coating is applied before painting to create a smooth surface. Painting goes on top once the skim coat is dry and sanded.

### Do I need a skim coat before repainting?

Not always. If your walls are smooth and in good condition, a direct repaint is fine. Skim coating is needed when the surface is rough, patchy, or damaged.

## Get a skim coat quote

Give your walls and ceilings a smooth, flawless finish. WhatsApp us for a free assessment — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20skim%20coating%20for%20my%20property.).
`
  }),
  post({
    slug: "wall-skim-coating-kl",
    title: "Wall Skim Coating Cost & Process Guide (2026) — KL & Selangor",
    excerpt: "Smooth, even walls with professional wall skim coating across KL & Selangor — evens rough or patchy surfaces and creates a flawless paint-ready finish, from RM 5 per sq ft.",
    category: "Skim Coat",
    coverImage: "/hero/home-services-skim-coat-kl.jpg",
    metaTitle: "Wall Skim Coating Cost & Process Guide | KL",
    metaDesc: "Smooth, even walls with professional wall skim coating in KL & Selangor — evens rough or patchy surfaces and creates a flawless paint-ready finish. From RM 5 per sq ft.",
    content: `
Rough, wavy, or patchy walls ruin an otherwise good paint job. Wall skim coating evens out the surface so the final paint finish looks smooth and professional. KL Servis Rumah provides professional wall skim coating across Kuala Lumpur and Selangor, from RM 5 per sq ft.

## What is wall skim coating?

It is the application of a thin layer of plaster or joint compound over the entire wall surface. It fills small imperfections, smooths patches, and creates an even base for painting.

## When do you need wall skim coating?

- Your walls are rough or wavy and imperfections show under paint.
- Previous repairs or patches show through as different textures.
- Old wallpaper was removed, leaving adhesive and damaged plaster.
- You want a flawless, premium paint finish.

## The process

1. **Assessment** — we inspect the wall and identify problem areas.
2. **Preparation** — loose material is removed and cracks repaired.
3. **Skim coat application** — a thin, even layer is applied.
4. **Sanding** — the wall is sanded smooth once dry.
5. **Finishing** — the wall is prepared for painting.

## How much does wall skim coating cost?

Wall skim coating starts from RM 5 per sq ft. The final cost depends on the wall area and its condition.

## Frequently asked questions

### How many coats of skim coat are needed?

Usually one to two coats, depending on how rough the surface is. We apply enough to achieve a smooth, even finish.

### Can skim coating be done over existing paint?

Yes, provided the existing paint is sound. We prepare the surface first so the skim coat bonds well.

## Get a wall skim coat quote

For smooth, even walls and a flawless paint finish, wall skim coating is the answer. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20wall%20skim%20coating.).
`
  }),
  post({
    slug: "ceiling-skim-coating-kl",
    title: "Ceiling Skim Coating Cost & Process Guide (2026) — KL & Selangor",
    excerpt: "Level and smooth your ceiling with professional ceiling skim coating across KL & Selangor — evens joints, cracks and uneven surfaces for a clean paint-ready finish, from RM 6 per sq ft.",
    category: "Skim Coat",
    coverImage: "/hero/home-services-skim-coat-kl.jpg",
    metaTitle: "Ceiling Skim Coating Cost & Process Guide | KL",
    metaDesc: "Level and smooth your ceiling with professional ceiling skim coating in KL & Selangor — evens joints, cracks and uneven surfaces for a clean paint-ready finish. From RM 6 per sq ft.",
    content: `
An uneven or cracked ceiling is very visible and detracts from the whole room. Ceiling skim coating levels the surface, evens out joints and small cracks, and gives you a clean, smooth ceiling ready for painting. KL Servis Rumah provides professional ceiling skim coating across Kuala Lumpur and Selangor, from RM 6 per sq ft.

## When do you need ceiling skim coating?

- Your ceiling shows panel joints or seams.
- The ceiling surface is uneven or wavy.
- There are small cracks or hairline fractures.
- You want a smooth, clean ceiling before repainting.

## The process

1. **Assessment** — we inspect the ceiling and identify problem areas.
2. **Preparation** — loose material is removed and any cracks repaired.
3. **Skim coat application** — a thin, even layer is applied across the ceiling.
4. **Sanding** — the ceiling is sanded smooth once dry.
5. **Finishing** — the ceiling is prepared for painting.

## How much does ceiling skim coating cost?

Ceiling skim coating starts from RM 6 per sq ft. The final cost depends on the ceiling area and its condition.

## Frequently asked questions

### Can ceiling skim coating hide cracks?

It fills and evens out small cracks and hairline fractures. Larger structural cracks should be assessed and repaired first.

### Is ceiling skim coating done before or after painting?

Before painting. The skim coat creates the smooth base that paint goes on top of.

## Get a ceiling skim coat quote

Give your ceiling a clean, smooth finish. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20ceiling%20skim%20coating.).
`
  }),
  post({
    slug: "vinyl-spc-laminate-flooring-kl",
    title: "Vinyl, SPC & Laminate Flooring in Kuala Lumpur & Selangor",
    excerpt: "Professional flooring installation across KL & Selangor — SPC click-lock, laminate and luxury vinyl plank plus skirting & transition fitting, from RM 14 per sq ft.",
    category: "Flooring",
    coverImage: "/hero/home-services-flooring-kl.jpg",
    metaTitle: "Vinyl, SPC & Laminate Flooring in KL & Selangor",
    metaDesc: "Professional flooring installation in KL & Selangor — SPC click-lock, laminate and luxury vinyl plank plus skirting & transition fitting. From RM 14 per sq ft.",
    content: `
Vinyl, SPC, and laminate flooring have become the most popular flooring choices for Malaysian homes — they look great, handle humidity well, and cost far less than solid timber. KL Servis Rumah provides professional flooring installation across Kuala Lumpur and Selangor, from RM 14 per sq ft.

## Flooring types we install

- **SPC click-lock flooring** — durable, waterproof stone-plastic composite flooring.
- **Laminate flooring** — a cost-effective timber-look option.
- **Luxury vinyl plank (LVP)** — flexible, waterproof vinyl planks.
- **Skirting & transition strip fitting** — finishing edges and transitions neatly.

## How to choose your flooring

| Type | Best for | Key feature |
|---|---|---|
| SPC | Kitchens, wet areas, high traffic | Waterproof, durable |
| Laminate | Bedrooms, living rooms on a budget | Timber look, affordable |
| LVP | Where waterproofing and comfort matter | Flexible, waterproof |

## The installation process

1. **Measurement** — we measure the area and calculate flooring required.
2. **Surface preparation** — the subfloor is cleaned, levelled, and dried.
3. **Acclimatisation** — flooring is allowed to adjust to the room conditions.
4. **Installation** — boards are laid with proper spacing and locking.
5. **Finishing** — skirting and transition strips are fitted for a neat finish.

## How much does flooring cost?

| Flooring type | Starting price |
|---|---|
| SPC click-lock flooring install | From RM 14 / sq ft |
| Laminate flooring install | From RM 11 / sq ft |
| Luxury vinyl plank (LVP) install | From RM 16 / sq ft |
| Skirting & transition strip fitting | From RM 8 / linier ft |

## Frequently asked questions

### Is SPC flooring really waterproof?

Yes. SPC (stone-plastic composite) flooring is highly water-resistant, making it a popular choice for kitchens, balconies, and wet areas.

### Which is better, laminate or SPC?

It depends on your needs. SPC is more water-resistant and durable; laminate offers a natural timber look at a lower cost.

## Get a flooring quote

Whether you prefer SPC, laminate, or vinyl plank, KL Servis Rumah provides professional flooring installation across Kuala Lumpur and Selangor. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20flooring%20for%20my%20property.).
`
  }),
  post({
    slug: "spc-click-lock-flooring-kl",
    title: "SPC Click-Lock Flooring Installation in KL & Selangor",
    excerpt: "Durable, waterproof SPC click-lock flooring installed across KL & Selangor — perfect for kitchens and wet areas, from RM 14 per sq ft.",
    category: "Flooring",
    coverImage: "/hero/home-services-flooring-kl.jpg",
    metaTitle: "SPC Click-Lock Flooring Installation in KL & Selangor",
    metaDesc: "Durable, waterproof SPC click-lock flooring installed in KL & Selangor — perfect for kitchens and wet areas, with neat skirting and transitions. From RM 14 per sq ft.",
    content: `
SPC (stone-plastic composite) click-lock flooring is one of the most popular flooring choices in Malaysian homes because it is durable, waterproof, and looks like real timber. KL Servis Rumah provides professional SPC click-lock flooring installation across Kuala Lumpur and Selangor, from RM 14 per sq ft.

## Why choose SPC flooring?

- **Waterproof** — resists moisture, making it suitable for kitchens and wet areas.
- **Durable** — rigid core resists dents and wear.
- **Easy to maintain** — simple to clean and care for.
- **Realistic look** — available in many timber and stone finishes.
- **Fast installation** — the click-lock system installs cleanly and quickly.

## The installation process

1. **Measurement** — we measure the area and calculate the flooring required.
2. **Subfloor preparation** — the floor is cleaned, levelled, and dried.
3. **Acclimatisation** — the flooring is allowed to adjust to the room conditions.
4. **Installation** — planks are laid and clicked together with proper expansion gaps.
5. **Finishing** — skirting and transition strips are fitted for a neat finish.

## How much does SPC flooring cost?

SPC click-lock flooring installation starts from RM 14 per sq ft. The final cost depends on the area, the SPC product chosen, subfloor condition, and whether skirting and transitions are included.

## Frequently asked questions

### Is SPC flooring suitable for kitchens?

Yes. SPC flooring is highly water-resistant, making it an excellent choice for kitchens, dining areas, and even balconies.

### Does SPC flooring require glue?

No. SPC click-lock planks lock together without glue, which makes installation clean and quick.

## Get an SPC flooring quote

Enjoy a durable, waterproof floor with a realistic timber look. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20SPC%20flooring.).
`
  }),
  post({
    slug: "laminate-flooring-kl",
    title: "Laminate Flooring Installation in KL & Selangor",
    excerpt: "Cost-effective timber-look laminate flooring installed across KL & Selangor — great for bedrooms and living areas, from RM 11 per sq ft.",
    category: "Flooring",
    coverImage: "/hero/home-services-flooring-kl.jpg",
    metaTitle: "Laminate Flooring Installation in KL & Selangor",
    metaDesc: "Cost-effective timber-look laminate flooring installed in KL & Selangor — great for bedrooms and living areas, with proper spacing and neat finishing. From RM 11 per sq ft.",
    content: `
Laminate flooring gives your home the warm look of timber at a fraction of the cost. It is a popular, affordable choice for bedrooms and living areas across Kuala Lumpur and Selangor. KL Servis Rumah provides professional laminate flooring installation, from RM 11 per sq ft.

## Why choose laminate flooring?

- **Affordable** — the look of timber at a lower cost.
- **Durable** — a hard surface that resists scratches and daily wear.
- **Easy to maintain** — simple to clean and care for.
- **Wide choice** — many colours and finishes available.
- **Fast installation** — planks click together quickly.

## The installation process

1. **Measurement** — we measure the area and calculate flooring required.
2. **Subfloor preparation** — the floor is cleaned, levelled, and a suitable underlay laid.
3. **Acclimatisation** — the flooring adjusts to the room conditions.
4. **Installation** — planks are laid with proper spacing and locking.
5. **Finishing** — skirting and transition strips are fitted for a neat finish.

## How much does laminate flooring cost?

Laminate flooring installation starts from RM 11 per sq ft. The final cost depends on the area, the product chosen, subfloor condition, and whether skirting and transitions are included.

## Frequently asked questions

### Is laminate flooring waterproof?

Standard laminate flooring is water-resistant but not fully waterproof. For kitchens and wet areas, SPC or vinyl plank flooring is a better choice.

### How long does laminate flooring last?

With proper care, quality laminate flooring can last many years. Its lifespan depends on the product and the level of foot traffic.

## Get a laminate flooring quote

Add the warm look of timber at an affordable price. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20laminate%20flooring.).
`
  }),
  post({
    slug: "epoxy-polyurethane-flooring-kl",
    title: "Epoxy & Polyurethane Flooring in Kuala Lumpur & Selangor",
    excerpt: "Professional epoxy & polyurethane flooring across KL & Selangor — self-levelling, flake/quartz broadcast and heavy-duty mortar screed floors plus repair, from RM 22 per sq ft.",
    category: "Flooring",
    coverImage: "/hero-epoxy-flooring.svg",
    metaTitle: "Epoxy & Polyurethane Flooring in KL & Selangor",
    metaDesc: "Professional epoxy & polyurethane flooring in KL & Selangor — self-levelling, flake/quartz broadcast and heavy-duty mortar screed plus repair. From RM 22 per sq ft.",
    content: `
Epoxy flooring is the go-to choice for garages, balconies, car porches, offices, and industrial spaces because it is tough, seamless, and easy to clean. KL Servis Rumah provides professional epoxy and polyurethane flooring across Kuala Lumpur and Selangor, from RM 22 per sq ft.

## Epoxy flooring types we provide

- **Self-levelling epoxy floor** — a smooth, seamless, durable finish.
- **Flake / quartz broadcast epoxy** — a decorative, slip-resistant surface.
- **Heavy-duty mortar screed** — a tough, thick system for high-traffic areas.
- **Epoxy floor repair & recoating** — restoring worn or damaged epoxy floors.

## Why choose epoxy flooring?

- **Durable** — resists wear, impact, and chemicals.
- **Seamless** — no joints for dirt and water to collect.
- **Easy to clean** — a smooth surface that wipes down easily.
- **Water-resistant** — protects the concrete beneath.
- **Customisable** — available in many colours and finishes.

## How much does epoxy flooring cost?

| Flooring type | Starting price |
|---|---|
| Self-levelling epoxy floor | From RM 22 / sq ft |
| Flake / quartz broadcast epoxy | From RM 26 / sq ft |
| Heavy-duty mortar screed | From RM 38 / sq ft |
| Epoxy floor repair & recoating | From RM 14 / sq ft |

## Frequently asked questions

### Is epoxy flooring suitable for outdoor use?

Epoxy is best used on protected or covered areas such as car porches and balconies. For areas exposed to direct sunlight and heavy rain, we recommend systems suited to UV and weather.

### How long does an epoxy floor last?

A properly installed epoxy floor lasts many years, depending on traffic and maintenance.

## Get an epoxy flooring quote

Give your garage, balcony, or commercial space a tough, seamless, easy-to-clean floor. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20epoxy%20flooring.).
`
  }),
  post({
    slug: "self-levelling-epoxy-floor-kl",
    title: "How Self-Levelling Epoxy Floors Work in KL Homes",
    excerpt: "A smooth, seamless, self-levelling epoxy floor installed across KL & Selangor — ideal for garages, offices, balconies and showrooms, from RM 22 per sq ft.",
    category: "Flooring",
    coverImage: "/hero-epoxy-flooring.svg",
    metaTitle: "Self-Levelling Epoxy Flooring Guide for KL Homes",
    metaDesc: "A smooth, seamless, self-levelling epoxy floor installed in KL & Selangor — ideal for garages, offices, balconies and showrooms. From RM 22 per sq ft.",
    content: `
A self-levelling epoxy floor is a smooth, seamless, and durable flooring system that spreads to create a flat, even surface. It is a popular choice for garages, car porches, offices, balconies, and showrooms across Kuala Lumpur and Selangor. KL Servis Rumah provides professional self-levelling epoxy flooring, from RM 22 per sq ft.

## Why choose self-levelling epoxy?

- **Smooth, seamless** — no joints for dirt or water to collect.
- **Durable** — resists wear, impact, and stains.
- **Easy to clean** — wipes down easily.
- **Modern look** — a clean, professional finish.
- **Water-resistant** — protects the concrete beneath.

## The installation process

1. **Surface preparation** — the concrete is cleaned, ground, and any cracks repaired.
2. **Primer** — a primer is applied to help the epoxy bond.
3. **Poured application** — the self-levelling epoxy is poured and spread evenly.
4. **Levelling** — the epoxy levels itself to create a smooth surface.
5. **Curing** — the floor is allowed to cure for a hard, durable finish.

## How much does a self-levelling epoxy floor cost?

A self-levelling epoxy floor starts from RM 22 per sq ft. The final cost depends on the area, the surface condition, and the number of coats and finish chosen.

## Frequently asked questions

### Is self-levelling epoxy floor slippery?

Smooth epoxy can be slippery when wet. If slip resistance is a concern (e.g. balconies), a flake or quartz broadcast finish adds texture.

### How long does the floor last?

A properly installed self-levelling epoxy floor lasts many years, depending on traffic and maintenance.

## Get a self-levelling epoxy floor quote

Give your garage, office, or balcony a smooth, seamless, durable floor. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20a%20self-levelling%20epoxy%20floor.).
`
  }),
  post({
    slug: "flake-quartz-broadcast-epoxy-kl",
    title: "Flake vs Quartz Broadcast Epoxy: Which Finish Fits?",
    excerpt: "A decorative, slip-resistant flake or quartz broadcast epoxy floor installed across KL & Selangor — ideal for garages, balconies and high-traffic areas, from RM 26 per sq ft.",
    category: "Flooring",
    coverImage: "/hero-epoxy-flooring.svg",
    metaTitle: "Flake vs Quartz Epoxy Flooring Guide for KL Homes",
    metaDesc: "A decorative, slip-resistant flake or quartz broadcast epoxy floor installed in KL & Selangor — ideal for garages, balconies and high-traffic areas. From RM 26 per sq ft.",
    content: `
A flake or quartz broadcast epoxy floor combines durability with a decorative, slip-resistant finish. It is an excellent choice for garages, car porches, balconies, and high-traffic areas across Kuala Lumpur and Selangor. KL Servis Rumah provides professional flake and quartz broadcast epoxy flooring, from RM 26 per sq ft.

## Why choose broadcast epoxy?

- **Slip-resistant** — the textured surface provides better grip than smooth epoxy.
- **Decorative** — available in many colour blends for a custom look.
- **Durable** — resists wear, impact, and stains.
- **Hides imperfections** — the texture disguises minor surface marks.
- **Seamless** — a continuous, easy-to-clean surface.

## The installation process

1. **Surface preparation** — the concrete is cleaned, ground, and any cracks repaired.
2. **Primer and base coat** — a primer and coloured epoxy base coat are applied.
3. **Broadcast** — flake or quartz is scattered onto the wet base.
4. **Topcoat** — a clear protective topcoat seals the surface.
5. **Curing** — the floor is allowed to cure for a hard, durable finish.

## How much does broadcast epoxy cost?

Flake / quartz broadcast epoxy starts from RM 26 per sq ft. The final cost depends on the area, the colour and density chosen, and surface condition.

## Frequently asked questions

### Is broadcast epoxy slippery when wet?

The textured flake or quartz surface provides better slip resistance than smooth epoxy, making it a safer choice for wet areas like balconies and car porches.

### Is it suitable for a car porch?

Yes. Broadcast epoxy is a popular choice for car porches and garages because it is durable, slip-resistant, and easy to clean.

## Get a broadcast epoxy quote

Combine durability with a decorative, slip-resistant finish. WhatsApp us for a free quote — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20flake%20or%20quartz%20broadcast%20epoxy.).
`
  }),
  post({
    slug: "roof-repair-waterproofing-kl",
    title: "Roof Repair & Waterproofing in Kuala Lumpur & Selangor",
    excerpt: "Professional roof repair and waterproofing across KL & Selangor — roof leak diagnosis and repair, ridge re-bedding, gutter cleaning and torch-on membrane waterproofing, with fixed quotes.",
    category: "Roof Repair",
    coverImage: "/hero-roof-repair.svg",
    metaTitle: "Roof Repair & Waterproofing in KL & Selangor",
    metaDesc: "Professional roof repair & waterproofing in KL & Selangor — roof leak diagnosis and repair, ridge re-bedding, gutter cleaning and torch-on membrane waterproofing with fixed quotes.",
    content: `
A leaking or damaged roof can cause serious damage to your home — stained ceilings, damp walls, and even structural problems over time. KL Servis Rumah provides professional roof repair and waterproofing services across Kuala Lumpur and Selangor.

## Roof services we provide

- **Roof leak diagnosis & repair** — finding and fixing the source of roof leaks.
- **Ridge re-bedding & re-pointing** — resealing roof ridge tiles to prevent leaks.
- **Gutter cleaning & realignment** — clearing and aligning blocked or damaged gutters.
- **Full torch-on membrane waterproofing** — a durable waterproof layer for flat roofs.

## Common roof problems in Malaysia

- **Leaks after heavy rain** — water entering through damaged or shifted tiles.
- **Damaged or cracked ridge tiles** — a common leak source at the roof ridge.
- **Blocked or leaking gutters** — causing water to overflow onto walls.
- **Aged waterproofing** — failing membranes on flat roofs.

## When to call a roof repair professional

- Water stains appear on ceilings after rain.
- You can see damaged, cracked, or missing roof tiles.
- Gutters overflow or leak.
- The roof is old and its waterproofing has never been checked.

## How much does roof repair cost?

| Service | Starting price |
|---|---|
| Roof leak diagnosis & repair | From RM 380 |
| Ridge re-bedding & re-pointing | From RM 22 / linier ft |
| Gutter cleaning & realignment | From RM 320 |
| Full torch-on membrane waterproofing | From RM 26 / sq ft |

## Frequently asked questions

### How do I find a roof leak?

Water can travel along rafters and appear far from the actual entry point, so finding roof leaks is tricky. A professional inspection looks at the whole roof, including ridge tiles, flashing, and gutters.

### Can a leaking roof be repaired without replacing the whole roof?

Often yes. Many leaks come from a specific tile, ridge, flashing, or gutter that can be repaired directly.

## Get a roof repair quote

Protect your home from roof damage with professional repair and waterproofing. WhatsApp us for a free inspection — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20roof%20repair%20for%20my%20property.).
`
  }),
  post({
    slug: "roof-leak-diagnosis-repair-kl",
    title: "Roof Leak Diagnosis & Repair Cost Guide (2026) — KL & Selangor",
    excerpt: "Find and fix the source of your roof leak across KL & Selangor — professional diagnosis of tiles, ridges, flashings and gutters, with targeted repair from RM 380.",
    category: "Roof Repair",
    coverImage: "/hero-roof-repair.svg",
    metaTitle: "Roof Leak Diagnosis & Repair Cost Guide | KL",
    metaDesc: "Find and fix the source of your roof leak in KL & Selangor — professional diagnosis of tiles, ridges, flashings and gutters, with targeted repair. From RM 380.",
    content: `
A leaking roof damages ceilings, walls, insulation, and even the structure over time. KL Servis Rumah provides professional roof leak diagnosis and repair across Kuala Lumpur and Selangor, from RM 380.

## Why roof leaks are hard to find

- **Water travels** — water runs along rafters and beams, appearing far from the leak point.
- **Hidden entry points** — the damage may be under a tile or at a ridge.
- **Multiple sources** — an old roof may leak in more than one place.

## How we diagnose roof leaks

1. **Inspect the roof** — we check tiles, ridge, flashing, valleys, and gutters.
2. **Check the interior** — we trace the water path from the ceiling stain.
3. **Test in rain** — where possible, we verify during rain or use a hose test.
4. **Identify the source** — we pinpoint the exact point of water entry.

## Repair options

- **Damaged or shifted tiles** — replaced and reseated.
- **Cracked ridge tiles** — re-bedded and re-pointed.
- **Failed flashing** — resealed or replaced.
- **Blocked gutters** — cleared and realigned.

## How much does roof leak repair cost?

Roof leak diagnosis and repair starts from RM 380. The final cost depends on the source of the leak, the extent of damage, and access.

## Frequently asked questions

### Why can't I find my roof leak from inside?

Water travels along rafters and beams, so the stain inside may be far from the actual entry point. A professional inspection of the whole roof is the reliable way to find it.

### Do I need to replace my whole roof?

Not usually. Most leaks come from a specific tile, ridge, flashing, or gutter that can be repaired directly.

## Get help with a roof leak

If your roof is leaking, a proper diagnosis finds the source and a targeted repair fixes it for good. WhatsApp us for a free inspection — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20My%20roof%20is%20leaking%20and%20I%20need%20help%20finding%20the%20source.).
`
  }),
  post({
    slug: "ridge-re-bedding-re-pointing-kl",
    title: "When Does a Roof Ridge Need Re-Bedding or Re-Pointing?",
    excerpt: "Reseal cracked or loose roof ridge tiles to stop leaks across KL & Selangor — professional ridge re-bedding and re-pointing, from RM 22 per linier ft.",
    category: "Roof Repair",
    coverImage: "/hero-roof-repair.svg",
    metaTitle: "Roof Ridge Re-Bedding Guide for KL & Selangor",
    metaDesc: "Reseal cracked or loose roof ridge tiles to stop leaks in KL & Selangor — professional ridge re-bedding and re-pointing. From RM 22 per linier ft.",
    content: `
The ridge is the highest point of your roof — and one of the most common places for leaks to start. When the mortar between ridge tiles cracks or washes away, water can enter. Ridge re-bedding and re-pointing reseals the ridge to stop leaks. KL Servis Rumah provides this service across Kuala Lumpur and Selangor, from RM 22 per linier ft.

## What is ridge re-bedding & re-pointing?

- **Re-bedding** — removing the old mortar bed and laying the ridge tiles again on fresh bedding mortar.
- **Re-pointing** — repairing and refilling the joints between ridge tiles with fresh mortar.

## When is ridge re-bedding needed?

- **Cracked or missing mortar** between ridge tiles.
- **Loose or shifting ridge tiles**.
- **Water stains on ceilings near the ridge**.
- **A roof leak that comes from the ridge area**.

## Why the ridge leaks

The ridge mortar is exposed to rain, sun, and wind, and it degrades over time. As it cracks and washes away, water seeps in beneath the ridge tiles and runs down into the roof space.

## The process

1. **Inspection** — we assess the ridge tiles and mortar condition.
2. **Removal** — loose ridge tiles and old mortar are removed.
3. **Re-bedding** — ridge tiles are re-laid on fresh bedding mortar.
4. **Re-pointing** — the joints are filled and finished with fresh mortar.
5. **Cleaning** — the roof is cleaned and debris removed.

## How much does ridge re-bedding cost?

Ridge re-bedding & re-pointing starts from RM 22 per linier ft. The final cost depends on the length of the ridge and the condition of the tiles.

## Frequently asked questions

### Why is my roof leaking at the ridge?

The ridge is a high, exposed point where mortar degrades over time. Cracks and gaps in the mortar let water in — re-bedding and re-pointing restore the seal.

### Can I do ridge repair myself?

Roof work is dangerous without proper safety equipment and training. We recommend a professional roofer with the right experience.

## Get a ridge re-bedding quote

Stop roof leaks at the source with professional ridge re-bedding and re-pointing. WhatsApp us for a free inspection — [chat with our team](https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah!%20I%20would%20like%20a%20quote%20for%20ridge%20re-bedding%20and%20re-pointing.).
`
  })
];
