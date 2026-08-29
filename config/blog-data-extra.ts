import type { BlogPost } from "@/config/blog-data";

/**
 * Extra blog posts — one dedicated feature-length article per major
 * service pillar. Written in the same voice as the primary
 * `blogPosts` array in `config/blog-data.ts`, focused on:
 *
 *   • Practical Klang Valley context (property types, humidity, brands).
 *   • AEO-friendly headings + short paragraphs + numbered lists.
 *   • Clear CTA back to the corresponding service page.
 *
 * All entries default to English; MS/ZH fallback rendered from the
 * primary translation layer.
 *
 * P2-19: each post carries its own hand-assigned publication date (spread
 * across the July 2026 production window); the shared `now` default was
 * removed so a new post without a date fails type-check instead of silently
 * reusing a stale date.
 */
function post(entry: Omit<BlogPost, "author" | "readTime">): BlogPost {
  return {
    author: "KL Servis Rumah Editorial Team",
    readTime: "6 min read",
    ...entry
  };
}

export const extraBlogPosts: BlogPost[] = [
  post({
    slug: "when-to-repaint-your-house-malaysia",
    date: "July 5, 2026",
    title: "When to Repaint Your House in Malaysia (Signs, Frequency & Budget)",
    excerpt: "Interior every 5–7 years, exterior every 4–6 years — here are the real signals that tell you it's time to repaint your Klang Valley home, plus a fair budget for each option.",
    category: "Painting",
    coverImage: "/hero-painting.svg",
    metaTitle: "When to Repaint Your House in Malaysia — Signs & Cost",
    metaDesc: "How often should you repaint interior and exterior walls in KL & Selangor? Signs it's time, honest budget ranges and paint brand advice from KL Servis Rumah.",
    content: `
Deciding when to repaint your house in the Klang Valley isn't a matter of ticking off a calendar date — it's about reading the walls. Malaysia's tropical humidity, monsoon rain, west-facing sun and construction dust all attack paint differently.

Here's how our painting specialists at **KL Servis Rumah** decide with customers whether it's genuinely time to repaint, or if a good wash is all you need.

---

### 5 real signs it's time to repaint

1.  **Chalking**: Rub the wall with a clean finger. If you get white powder, the paint has broken down.
2.  **Fading**: North-facing rooms fade slowest; west-facing exteriors fade fastest — often within 3–5 years for cheap paint.
3.  **Micro-cracks + flaking**: Especially near skirting, window frames, air-cond outlets, and bathroom edges.
4.  **Mould spots or dark shadows**: Common in bathrooms, kitchens, and near leaking pipes. A repaint alone won't fix the source.
5.  **Colour taste has changed**: Selling, renting, or planning a family renovation? A fresh palette lifts perceived value by RM 20k–RM 80k depending on property.

---

### Typical repaint frequency in Malaysia

- **Interior — premium brand (Nippon Odour-less, Dulux EasyClean)**: 6 to 8 years.
- **Interior — economy brand**: 3 to 4 years.
- **Exterior — premium weatherproof (Nippon Weatherbond, Dulux Weathershield)**: 5 to 7 years.
- **Exterior — economy paint**: 2 to 3 years (usually a false saving).

---

### Realistic 2026 repaint budget in KL & Selangor

- Single room interior (2 coats + minor prep): from **RM 450**.
- 3-bed condo full interior repaint: **RM 3,500–RM 6,500**.
- Single-storey terrace exterior: **RM 5,000–RM 9,000**.
- Double-storey terrace exterior (with scaffolding): **RM 8,500–RM 15,500**.
- Semi-D / bungalow: quoted per site visit.

Every KL Servis Rumah quote is itemised and confirmed before we open a tin.

---

### Which paint brand should you choose?

We generally recommend one of three brands for Klang Valley homes:

- **Nippon Paint** — best-selling, widest colour range, strong washability line (Odour-less, Spotless, Momento).
- **Dulux** — excellent premium range (EasyClean, Wash & Wear, Weathershield), consistent finish.
- **Jotun** — premium Norwegian brand, top-tier UV stability, ideal for coastal Klang and high-sun exteriors.

Avoid unbranded "tinting shop" paint for anything outside a temporary rental — the savings vanish within 24 months.

---

### Ready to plan your repaint?

**KL Servis Rumah** handles interior and exterior repaints across Kuala Lumpur and Selangor with fixed quotes, background-verified painters and up to **1-year workmanship warranty**.

- WhatsApp us photos of your walls (or your Pinterest board) for an instant ballpark price.
- Book a free on-site inspection for anything above 3 rooms or any exterior work.
`
  }),

  post({
    slug: "hidden-water-leak-detection-kl",
    date: "July 6, 2026",
    title: "How to Find a Hidden Water Leak Before Your Bill Explodes",
    excerpt: "If your SYABAS bill jumped, but you can't see any leak, chances are it's a hidden pipe. Here's how professional leak detection works in Malaysian homes — no unnecessary hacking.",
    category: "Plumbing",
    coverImage: "/hero-plumbing.svg",
    metaTitle: "Hidden Water Leak Detection in KL & Selangor — No-Hack Fix",
    metaDesc: "SYABAS bill spiked with no visible leak? Learn how KL Servis Rumah's leak detection uses pressure testing, thermal imaging and acoustic tools before any hacking.",
    content: `
A sudden 40–120% jump in your SYABAS bill is almost always a hidden pipe leak — but finding it without tearing up floors and walls used to be near-impossible. Modern leak-detection tools have changed that completely.

Here's the exact process we follow at **KL Servis Rumah** to locate hidden leaks in Klang Valley homes without unnecessary damage.

---

### Step 1 — Isolate the source (free, 5 minutes)

Turn off *every* tap and appliance. Then check the SYABAS meter. If it's still spinning, water is escaping somewhere in your private plumbing. If it stops, the leak is inside a fixture (toilet cistern, water heater, etc.) — much easier.

---

### Step 2 — Pressure test the incoming main

Our technician isolates the inlet valve and attaches a calibrated pressure gauge. A healthy house should hold **6–8 bar** for at least 15 minutes with zero drop. Any drop confirms a hidden leak somewhere between the meter and the first branch.

---

### Step 3 — Thermal imaging on suspected walls

A hidden hot-water pipe leak shows up beautifully on a thermal camera — a plume of warm water spreads through the wall. Cold-water leaks are trickier but show up as slightly cooler patches over 15–30 minutes.

We work slowly along the pipe run and mark suspicious zones with masking tape.

---

### Step 4 — Acoustic leak detection

Where thermal isn't conclusive (usually cold-water pipes in concrete slabs), we switch to an electronic acoustic sensor. It amplifies the hiss of water escaping through the pipe wall — surprisingly loud once you know what you're listening for.

---

### Step 5 — Confirm before we hack

We only open the wall or slab at the exact marked spot — usually a **10 × 10 cm** repair, not a full room hack. After the fix we pressure-test again to confirm the leak is fully sealed.

---

### What it costs

- Leak-detection service call: from **RM 250** (credited toward the repair if you book the fix).
- Concealed pipe repair (single joint): **RM 350–RM 850** depending on wall type and access.
- Full section re-pipe (10–20 ft): **RM 900–RM 2,400**.

---

### 3 warning signs of a hidden leak

- SYABAS bill jumps 30%+ with no lifestyle change.
- A specific wall is always damp or has a musty smell.
- Water pressure at one tap drops slowly over weeks.

If any of these are true, WhatsApp us the meter reading and a photo of the damp patch — we'll advise the fastest way to confirm.
`
  }),

  post({
    slug: "gypsum-vs-plaster-ceiling-malaysia",
    date: "July 7, 2026",
    title: "Gypsum vs Plaster Ceiling: Which One Is Right for Your Malaysian Home?",
    excerpt: "Both are used interchangeably in KL — but they perform very differently under humidity, roof leaks and design. Here's the honest side-by-side.",
    category: "Ceiling",
    coverImage: "/hero-ceiling.svg",
    metaTitle: "Gypsum vs Plaster Ceiling Malaysia — Cost & Humidity",
    metaDesc: "Which ceiling material is right for your Malaysian home? A no-hype guide to gypsum vs plaster ceiling — humidity, cost, design flexibility and warranty.",
    content: `
Ask five contractors in KL what the difference is between a "gypsum ceiling" and a "plaster ceiling", and you'll get five slightly different answers. That's because in Malaysian usage the terms overlap — but the *materials* underneath perform very differently.

Here's how our ceiling specialists at **KL Servis Rumah** explain it to clients.

---

### The material difference

- **Gypsum board (dry system)**: pre-manufactured board (9 mm or 12 mm), fixed to a metal frame with screws, joints taped, and skim-coated for a seamless finish. Fast install, dry work, minimal mess.

- **Plaster ceiling (wet skim on gypsum/POP)**: a gypsum board base with a full 2–4 mm plaster skim coat on top, sometimes with decorative cornices, coves, or curved profiles. More design flexibility, thicker finish, longer install time.

---

### Cost comparison (2026 Klang Valley averages)

| Item                                | Gypsum ceiling      | Plaster ceiling      |
|-------------------------------------|---------------------|----------------------|
| Base rate (per sq ft, flat area)    | RM 10 – RM 13       | RM 12 – RM 16        |
| Cove / L-box (per ft)               | RM 22 – RM 32       | RM 26 – RM 40        |
| Decorative cornice (per ft)         | Not typical         | RM 18 – RM 45        |
| Install speed for a 100 sq ft room  | 1 day               | 2–3 days             |

---

### Humidity, leaks and repairs

Both materials use gypsum as the base, so both hate direct water contact. However:

- **Gypsum board** repairs are much easier — cut out the damaged square, screw in a fresh board, tape and skim.
- **Plaster ceiling** repairs are harder to blend — the thicker skim needs multiple layers, sanding and repainting.

For **wet areas or bathrooms**, always specify **moisture-resistant gypsum (MR board)** regardless of whether the top finish is thin skim or plaster.

---

### Design flexibility

- **Plaster ceiling** wins for curves, coffered ceilings, deep coves, decorative mouldings, and hidden lighting details.
- **Gypsum ceiling** wins for clean modern box designs, straight L-boxes and minimal aesthetics.

---

### Which one should you choose?

- **New condo / apartment refresh** with a modern aesthetic → gypsum board with 1 or 2 clean L-boxes.
- **Landed home living/dining area** with formal decor → plaster ceiling with cornices and coves.
- **Bathroom / kitchen** → moisture-resistant gypsum board only.
- **Small budget, fast handover** → gypsum board.

---

### Warranty

At KL Servis Rumah every ceiling install carries a **90-day workmanship warranty** covering joint cracks, screw pops and skim-coat shrinkage. Leaks originating from above (roof or upstairs bathroom) are excluded — we always recommend fixing the source first.

Ready to plan your ceiling? WhatsApp us a photo of your current ceiling + a rough sketch of what you want, and we'll come back with a fixed quote in one working day.
`
  }),

  post({
    slug: "pu-grouting-vs-full-membrane-waterproofing",
    date: "July 8, 2026",
    title: "PU Grouting vs Full Membrane Waterproofing: How to Choose",
    excerpt: "PU grouting is fast, cheap and non-destructive. Full membrane is bulletproof but destructive. Here's exactly when each one is right in KL.",
    category: "Waterproofing",
    coverImage: "/hero-waterproofing.svg",
    metaTitle: "PU Grouting vs Full Membrane Waterproofing — Which to Choose",
    metaDesc: "When to choose PU grouting (no hacking) vs full membrane waterproofing (tile hacking) for Malaysian bathrooms, balconies and slabs. Honest guide from KL Servis Rumah.",
    content: `
Bathroom leaking downstairs? Balcony dripping into the unit below? You've probably heard two very different recommendations:

1. "PU grouting — no need to hack tiles, done in a day."
2. "Hack everything, redo the membrane, or the leak will return."

Both are right — for different situations. Here's how our waterproofing specialists at **KL Servis Rumah** decide.

---

### When PU grouting is the right choice

PU (polyurethane) grouting injects a flexible chemical foam into cracks in the concrete slab, sealing the leak from below without touching your tiles.

Choose PU grouting when:

- You have a **specific, traceable crack** line in the slab.
- The bathroom above is otherwise **in good condition** (grout intact, membrane still bonded).
- You want a **fast, non-destructive** solution (2–4 hours, no tile damage).
- Budget is tight — PU is typically **60% cheaper** than a full re-membrane.

Typical cost in KL: **RM 650 to RM 2,500** for most bathroom slab leaks.

---

### When full membrane redo is unavoidable

Choose full membrane replacement when:

- The **whole membrane has failed** — you can see damp patches on multiple walls below.
- The **tiles or grout are already loose** and need replacement anyway.
- The bathroom is **20+ years old** and you're planning a refresh regardless.
- PU grouting has already been done **more than once** and keeps failing.

Typical cost in KL: **RM 4,500 to RM 12,000** for a standard bathroom depending on tile grade and membrane spec.

---

### The hybrid approach (our favourite)

For many mid-condition bathrooms, the smartest fix is a **PU grout first + fresh grout re-seal + silicone touch-up** — around **RM 850 to RM 1,800** total.

If the leak returns in 12 months, you graduate to a full membrane at the next refresh — but often it doesn't.

---

### 4 mistakes to avoid

1. **Skipping the ponding test** — always confirm the leak path before choosing a method.
2. **Painting over damp walls before waterproofing** — the paint will peel within weeks.
3. **Choosing the cheapest contractor** — waterproofing failures are painful to redo.
4. **Ignoring the source** — no waterproofing fix works if you leave a broken pipe or blocked drain feeding the leak.

---

### Warranty

Every KL Servis Rumah waterproofing job carries a written warranty:

- **PU grouting**: 12 to 36 months depending on scope.
- **Acrylic membrane refresh**: 24 to 60 months.
- **Full membrane replacement**: up to **60 months** for professionally installed cementitious/PU membrane systems.

WhatsApp us the leak photo and the room layout — we'll advise which method fits before we send a technician.
`
  }),

  post({
    slug: "tv-wall-mounting-safety-guide",
    date: "July 9, 2026",
    title: "The 2026 TV Wall Mounting Safety Guide for Malaysian Homes",
    excerpt: "Wrong anchors on a plaster wall can send a 65-inch OLED to the floor. Here's how professional TV mounting is actually done — brick, concrete, gypsum, false ceiling.",
    category: "Handyman",
    coverImage: "/hero-handyman.svg",
    metaTitle: "TV Wall Mounting in Malaysia — Anchor Guide, Cost, Safety",
    metaDesc: "Which wall anchor for TV mounting in Malaysia? Brick, concrete or plasterboard? Get the safe method, real cost from RM 150 and 30-day warranty from KL Servis Rumah.",
    content: `
Mounting a modern OLED or QLED TV — especially anything 55" and above — is not the DIY job it used to be. Screens are lighter but more fragile, and Malaysian walls come in five very different constructions that each need a different anchor system.

Here's the safety-first process our handymen at **KL Servis Rumah** use every day.

---

### Step 1 — Identify the wall type

Tap the wall firmly with your knuckle. Then check the sound:

- **Solid brick / concrete**: dull, dead thud. Use masonry/hammer drill + plated screw anchors.
- **Autoclaved aerated concrete (AAC) / lightweight block**: hollow-ish thud. Use dedicated AAC anchors or through-bolts.
- **Gypsum / plasterboard partition (drywall)**: hollow, drum-like. Use toggle bolts or heavy-duty spring anchors — **never** plain plastic wall plugs.
- **Wood-panelled feature wall**: creaks slightly. Locate the underlying stud (16" spacing typically) and screw directly into the stud.
- **Curved TV wall with false gypsum ceiling / L-box**: complex — locate frame members or reinforce with plywood backing before mounting.

---

### Step 2 — Choose the right bracket

- **Fixed bracket** (thinnest, cheapest) — good for corridor / bedroom TVs.
- **Tilt bracket** — best for TVs mounted high (above cabinets).
- **Full-motion / cantilever bracket** — best for living rooms where you want to swing the TV toward the sofa.

For anything **55" or above** use a bracket rated at **2× the actual TV weight** as a minimum safety factor.

---

### Step 3 — Wall preparation

- Use a stud/pipe finder before drilling to avoid electrical wires and concealed plumbing.
- Level with a laser or spirit level — a crooked TV is really obvious in a family room.
- Drill pilot holes at the correct depth for the anchor spec.

---

### Step 4 — Cable management

- Discreet cable trunking (paintable to match the wall) beats loose HDMI/power cables draped down.
- For cleaner installs, we can chase the cable inside the wall (concrete slab drilling required — extra RM 80–RM 150).

---

### Step 5 — Weight test

Once mounted, we apply gentle downward pressure equal to about 1.5× TV weight and check for any give. If the anchor slips even 1 mm, we re-do it — no exceptions.

---

### 2026 KL Servis Rumah TV mounting prices

| Service                                            | Price               |
|----------------------------------------------------|---------------------|
| Basic fixed mount, TV up to 55"                    | From **RM 150**     |
| Tilt / full-motion mount, TV 55–75"                | From **RM 220**     |
| TV wall mount + concealed cable in trunking        | From **RM 280**     |
| TV wall mount + concealed cable inside the wall    | From **RM 380**     |
| Soundbar + shelf install combo                     | From **RM 450**     |

Every install carries a **30-day workmanship warranty** on the mount, screws and anchor points.

WhatsApp us your TV model + a photo of the wall you want to mount it on for an exact quote.
`
  }),

  post({
    slug: "cost-of-full-house-renovation-kl",
    date: "July 10, 2026",
    title: "The Real Cost of a Full House Renovation in KL (2026 Guide)",
    excerpt: "From RM 22,000 for a condo cosmetic refresh to RM 250,000+ for a full landed rebuild — here's how our project managers actually break down renovation budgets.",
    category: "Renovation",
    coverImage: "/hero-renovation.svg",
    metaTitle: "Full House Renovation Cost in KL Malaysia (2026)",
    metaDesc: "Realistic 2026 renovation cost per sq ft in KL & Selangor: cosmetic refresh, mid-range refit, luxury remodel. Line-item budget from KL Servis Rumah.",
    content: `
"How much for a full house renovation?" is the number one question we get on WhatsApp — and the honest answer is *it depends entirely on scope*.

Here's how our project managers at **KL Servis Rumah** actually price a renovation, based on 2026 Klang Valley rates.

---

### The three renovation tiers

**1. Cosmetic refresh (RM 22,000 – RM 60,000 for a 3-bed condo)**

- Full interior repaint (walls + ceilings).
- Skim-coat existing walls where cracked.
- Refresh silicone in bathrooms and kitchen.
- New downlights and fans.
- Deep clean handover.

Best for **rental prep, resale, or a moving-in refresh**.

---

**2. Mid-range refit (RM 60,000 – RM 150,000 for a 3-bed condo, or RM 90,000 – RM 220,000 for a landed terrace)**

- Everything from Tier 1, plus:
- New kitchen cabinets and countertop.
- Bathroom retiling with new sanitary ware.
- New flooring (SPC / vinyl / laminate).
- New wardrobes and built-in TV console.
- Electrical DB upgrade.
- Ceiling redesign with L-boxes and cove lighting.

Best for **families moving in for the long haul**.

---

**3. Luxury / structural remodel (RM 180,000 – RM 500,000+)**

- Everything from Tier 2, plus:
- Wall demolition and layout changes (with structural engineer sign-off).
- Full membrane waterproofing in every wet area.
- Premium tile, marble or engineered wood flooring.
- Custom carpentry throughout.
- Home automation (smart lighting, curtains, security).
- Full landscaping and exterior repaint.

Best for **long-term family homes and premium condos**.

---

### Cost per sq ft by tier (Klang Valley 2026 average)

| Tier                | Per sq ft         |
|---------------------|-------------------|
| Cosmetic refresh    | RM 20 – RM 45     |
| Mid-range refit     | RM 80 – RM 160    |
| Luxury remodel      | RM 180 – RM 400+  |

---

### 5 hidden costs most homeowners forget

1. **JMB deposits and permits** — RM 500 to RM 3,000 depending on the condo/scheme.
2. **Debris disposal** — RM 300 to RM 2,500 per lorry load.
3. **Temporary accommodation** — if you can't live on-site during the works.
4. **Furniture storage** — cheaper mid-project than replacing damaged items.
5. **Contingency reserve** — always hold 10–15% for unexpected issues (rotten beams, hidden leaks, old wiring).

---

### How KL Servis Rumah quotes a renovation

1. **Free WhatsApp scoping call** — we ask for photos, floor plan and your rough wishlist.
2. **On-site inspection (RM 0)** — measurement, condition assessment, discussion of options.
3. **Itemised written quote within 3 working days** — each scope line priced separately so you choose what proceeds.
4. **Contract with milestone payments** — 20% deposit, 30/30/20 milestones, final on handover.
5. **Handover + snag list + warranty certificate**.

Every KL Servis Rumah renovation carries at least a **12-month workmanship warranty**, with individual scope items covered by their specialist warranties (up to 5 years for waterproofing, 12 months for electrical, etc.).

Ready to plan? WhatsApp us and we'll book a free scoping call this week.
`
  }),

  post({
    slug: "safe-electrical-wiring-upgrade-old-house",
    date: "July 11, 2026",
    title: "Safe Electrical Wiring Upgrade for Old KL Houses",
    excerpt: "If your house was built before 2000, chances are the DB box is under-spec, the wiring is aged rubber, and the earthing is questionable. Here's the safe upgrade path.",
    category: "Electrical",
    coverImage: "/hero-electrical.svg",
    metaTitle: "Old House Electrical Wiring Upgrade in KL — Safe Cost Guide",
    metaDesc: "Rewiring an old KL / Selangor house? Learn the safe DB upgrade + RCD retrofit + rewire cost from ST-licensed electricians at KL Servis Rumah.",
    content: `
Malaysian homes built before the year 2000 often have wiring that would fail modern safety inspection. Rubber insulation cracks over time, DB boxes are under-sized, and many still lack a proper RCD (residual current device) for shock protection.

Here's the safe upgrade path our **ST-licensed electricians at KL Servis Rumah** follow for older homes.

---

### Signs your home needs an electrical upgrade

- The DB box has fuses instead of MCBs (miniature circuit breakers).
- You have **no RCD** — the main switch is a solid metal bar, not a "test" push-button.
- The breaker trips when you run the aircond + kettle + water heater together.
- Sockets are warm to the touch after normal use.
- The main earth wire runs to a green rod buried in the garden that hasn't been checked in decades.

---

### The 3-tier upgrade path

**Tier 1 — DB box refresh (RM 850 – RM 1,800)**

- New consumer unit with 6 to 12 way capacity.
- Modern MCBs on every circuit.
- New RCD (30 mA) for shock protection.
- Neat labelling per circuit.
- Earthing continuity check.

**Best for**: Homes with generally OK wiring but old fusebox. Fastest, cheapest upgrade with major safety gains.

---

**Tier 2 — Partial rewire (RM 2,400 – RM 6,500)**

- Tier 1, plus:
- New wiring to bathrooms, kitchen, aircond points, and outdoor sockets.
- Upgrade of any suspect socket lines.
- New earth rod and continuity test.

**Best for**: Homes 25–35 years old showing localised wiring issues.

---

**Tier 3 — Full rewire (RM 8,500 – RM 22,000+ depending on house size)**

- Every cable in the house replaced with modern PVC-insulated stranded copper.
- All sockets and switches replaced with modern (Legrand / MK / Schneider) fittings.
- Multi-circuit DB with dedicated RCDs.
- Whole-house surge protector.
- Compliance certificate for insurance.

**Best for**: Homes 35+ years old, or before a full renovation.

---

### 4 things a ST-licensed electrician actually does that unlicensed workers skip

1. Issues a **compliance certificate** valid for insurance and property sale.
2. Uses a **residual current tester** to confirm every RCD trips at the correct current and time.
3. Performs an **earth loop impedance test** to confirm the earth is doing its job.
4. Labels every circuit clearly so future work is safer.

---

### Never DIY these

- Working live on the incoming main.
- Adding or moving the earth rod.
- Modifying the meter panel or Tenaga side of the DB.
- Adding sockets in a bathroom (they need dedicated protected circuits).

---

### How to book

WhatsApp us a photo of your existing DB box + a rough house plan. Our licensed electrician can usually confirm which tier fits within 5 minutes over WhatsApp, and we book a site visit if a proper quote is needed.

Every KL Servis Rumah electrical job comes with a **12-month workmanship warranty** and full compliance documentation.
`
  }),

  post({
    slug: "spc-vs-vinyl-vs-laminate-flooring-malaysia",
    date: "July 12, 2026",
    title: "SPC vs Vinyl vs Laminate Flooring in Malaysia: Which Is Right for You?",
    excerpt: "SPC is trending, vinyl is affordable, laminate is classic — but they age very differently under Malaysian humidity. Here's the honest comparison.",
    category: "Flooring",
    coverImage: "/hero-flooring.svg",
    metaTitle: "SPC vs Vinyl vs Laminate Flooring Malaysia — Compared",
    metaDesc: "SPC vs vinyl vs laminate flooring in Malaysian homes. Cost per sq ft, humidity resistance, installation and warranty from KL Servis Rumah.",
    content: `
Choosing between SPC, vinyl and laminate flooring for a Malaysian home isn't just about the price sticker. Each material ages very differently under our tropical humidity, water splashes and 6-months-of-monsoon weather.

Here's the honest comparison our flooring specialists at **KL Servis Rumah** give clients.

---

### The three materials at a glance

- **SPC (Stone Plastic Composite)**: Dense mineral core with a printed vinyl top layer + wear coat. Rigid, click-lock, waterproof, dimensionally stable.

- **LVT / Vinyl (Luxury Vinyl Tile)**: Flexible PVC sheet or tile with a printed pattern + wear layer. Softer underfoot, glue-down or click-lock, waterproof.

- **Laminate**: Compressed HDF core (wood-fibre) with a printed decor layer + melamine wear coat. Click-lock, warm feel, **not waterproof**.

---

### Cost per sq ft (installed, Klang Valley 2026)

| Material   | Supply + install (per sq ft) | Warranty (typical) |
|------------|------------------------------|--------------------|
| SPC        | RM 8 – RM 14                 | 10 – 15 years      |
| Vinyl      | RM 6 – RM 12                 | 5 – 10 years       |
| Laminate   | RM 6 – RM 11                 | 5 – 10 years       |

---

### Water and humidity — the deciding factor in Malaysia

- **SPC**: 100% waterproof core — the winner for wet-area risk zones (kitchen, near bathroom door, condo balcony).
- **Vinyl**: Waterproof, but the adhesive layer can lift over years if repeatedly flooded.
- **Laminate**: Swells and warps once water reaches the HDF core — a single mop overflow can ruin a plank.

For any Malaysian home with children, pets, or a west-facing balcony, we generally recommend **SPC** as the default.

---

### Sound and feel

- **Vinyl**: Softest, warmest underfoot. Absorbs sound well.
- **Laminate**: Warm and reasonably quiet with underlay.
- **SPC**: Hardest and coldest. Add a foam underlay if you want quieter footfall.

---

### Installation

- **SPC + laminate**: click-lock, no adhesive. Fast install, can go over existing tiles.
- **Vinyl**: glue-down (permanent) or click-lock (removable). Glue-down is smoother but harder to lift for future refresh.

We can install any of the three in about **1 to 3 days per condo** depending on floor prep needed.

---

### Which should you choose?

- **Family home with young kids or pets** → SPC.
- **Small budget rental refresh** → vinyl (glue-down).
- **Bedroom-only install with warm feel priority** → laminate.
- **Overlay on existing tiles without hacking** → SPC or click-lock vinyl.

---

### 3 mistakes to avoid

1. Installing laminate in a bathroom, laundry or condo balcony.
2. Skipping the underlay on concrete slab (causes hollow, cold feel and sound echo).
3. Not leaving a **10 mm expansion gap** at walls — planks buckle when they can't expand.

---

### Ready to plan?

WhatsApp us a photo of your existing floor + a rough sq ft (or ask us to measure on-site — free within KL & Selangor). We'll come back with an itemised fixed quote for the material grade of your choice.

Every KL Servis Rumah flooring install carries a **12-month workmanship warranty** on top of the manufacturer's material warranty.
`
  }),

  post({
    slug: "how-to-fix-a-leaking-roof-in-kl",
    date: "July 13, 2026",
    title: "How to Fix a Leaking Roof in KL Before the Monsoon",
    excerpt: "Whether it's a metal deck warehouse, a concrete flat roof, or a terraced house tiled roof — here's the pre-monsoon roof inspection and repair method that actually holds.",
    category: "Waterproofing",
    coverImage: "/hero-roof-repair.svg",
    metaTitle: "Leaking Roof Repair in KL & Selangor — Pre-Monsoon Fix Guide",
    metaDesc: "How to fix a leaking roof in KL before the monsoon: metal deck, concrete flat, or clay tile. Waterproofing methods, cost & warranty from KL Servis Rumah.",
    content: `
Every year, our WhatsApp explodes with roof-leak requests in October and April when the monsoon peaks. The truth is 80% of those leaks were detectable and fixable months earlier — for a fraction of the emergency cost.

Here's the pre-monsoon roof inspection and repair process our **KL Servis Rumah** teams follow.

---

### Step 1 — Identify your roof type

- **Clay or concrete tile** (most common on terrace houses): leaks usually caused by cracked tiles, displaced ridge caps, or perished mortar bedding.
- **Metal deck** (warehouses, extensions, sheds): leaks usually at screw holes, side laps, or ridge flashing.
- **Concrete flat roof** (some bungalows, most low-rise blocks): leaks at membrane joints, expansion cracks, or blocked drains.

---

### Step 2 — Safe roof access

We never send anyone up without:

- Proper harness anchored to a fixed structural point.
- Steel walking boards to spread weight over tiles.
- Second person on the ground for spotting.

Untrained "cheap" roofers cause more damage than they fix — a cracked tile from a mis-placed foot causes tomorrow's leak.

---

### Step 3 — Repair methods that actually hold

**For clay/concrete tile roofs:**

- Replace cracked or slipped tiles individually.
- Re-bed loose ridge caps with fresh mortar + polymer additive.
- Apply high-flex polyurethane sealant on hairline cracks around chimneys and vent pipes.

**For metal deck roofs:**

- Replace old rubber washers under screws (root cause of most metal-deck leaks).
- Seal side laps with reinforced butyl tape + top-coat with acrylic waterproofing.
- Re-flash ridge, valley and wall junctions with new self-adhesive membrane.

**For concrete flat roofs:**

- Ponding test to find exact leak paths.
- Grind and route expansion cracks, fill with PU sealant.
- Apply 2-coat acrylic or PU membrane over the entire flat.
- Clear all outlets and add gutters where water pools.

---

### 2026 KL Servis Rumah roof repair pricing

| Scope                                              | Typical range        |
|----------------------------------------------------|----------------------|
| Localised tile / flashing repair                   | RM 380 – RM 1,200    |
| Full ridge re-bed (30–50 ft)                       | RM 850 – RM 2,400    |
| Metal deck reseal + membrane top-coat (per sq ft)  | RM 6 – RM 12         |
| Concrete flat roof full membrane (per sq ft)       | RM 12 – RM 22        |

---

### Warranty

- Localised repair: **6–12 months** written.
- Full metal-deck reseal: **24 months** written.
- Concrete flat-roof PU membrane system: **up to 60 months** written.

---

### Before you WhatsApp us

Send:

1. A photo of the *inside* of the leaking area (ceiling stain, drip line).
2. A photo of the outside roof (drone shots welcome).
3. Rough age of the roof and any known previous repairs.

We usually come back with a same-day advisory and a slot for a paid inspection (RM 250 credited to the repair). Don't wait for the next monsoon — the earlier you catch a roof leak, the cheaper it stays.
`
  }),

  post({
    slug: "kitchen-cabinet-material-guide-malaysia",
    date: "July 14, 2026",
    title: "Kitchen Cabinet Material Guide for Malaysian Homes",
    excerpt: "Aluminium, solid plywood, MDF or 3G? Choosing the right kitchen cabinet material saves you RM 5k–RM 25k over 10 years — here's the honest breakdown.",
    category: "Renovation",
    coverImage: "/hero-kitchen-cabinet.svg",
    metaTitle: "Kitchen Cabinet Materials Malaysia — Which to Pick",
    metaDesc: "Choosing kitchen cabinet material in Malaysia: aluminium, marine plywood, MDF or 3G ceramic. Real cost, humidity performance and warranty from KL Servis Rumah.",
    content: `
A Malaysian kitchen sees more humidity, hot pans and daily wear than almost any other room. Choose the wrong cabinet material and you're refacing doors within 5 years. Choose right and your kitchen looks fresh for 15+.

Here's how our kitchen specialists at **KL Servis Rumah** guide clients through material choice.

---

### The four common cabinet materials

**1. Aluminium composite**

- Sheet aluminium bonded to a polymer core, then folded and joined.
- Waterproof, insect-proof, will not warp.
- Colours limited to matte solids and select woodgrain foils.
- Feels cool and slightly hollow.

**2. Marine plywood (with laminate or 2K spray finish)**

- Multi-ply hardwood core with waterproof phenolic adhesive.
- Warmest look, real weight, holds screws forever.
- Finish (laminate or 2K PU spray) determines aesthetic and durability.

**3. Moisture-resistant MDF (MR MDF)**

- Compressed wood-fibre with moisture-resistant binder.
- Very smooth surface — best for high-gloss or coloured doors.
- Not as durable as plywood over 10+ years in high-humidity kitchens.

**4. 3G / ceramic**

- Full ceramic sheet on aluminium/steel core.
- Ultra premium, chef-kitchen finish.
- Heat-proof, scratch-proof, waterproof — essentially bulletproof.
- Highest cost tier.

---

### 2026 cost per foot run (installed, Klang Valley)

| Material                             | Bottom cabinet per ft | Top cabinet per ft |
|--------------------------------------|-----------------------|--------------------|
| Aluminium composite                  | RM 220 – RM 320       | RM 180 – RM 280    |
| Marine plywood + laminate            | RM 280 – RM 420       | RM 240 – RM 360    |
| Marine plywood + 2K PU spray         | RM 380 – RM 620       | RM 320 – RM 520    |
| Moisture-resistant MDF               | RM 260 – RM 380       | RM 220 – RM 320    |
| 3G / ceramic                         | RM 620 – RM 950       | RM 520 – RM 780    |

*Prices include cabinet body, doors, standard hardware and installation. Countertop, sink, tap and appliances quoted separately.*

---

### Humidity in Malaysian kitchens

Ranked from best to worst:

1. **3G / ceramic** — bulletproof.
2. **Aluminium composite** — waterproof forever.
3. **Marine plywood** — excellent if edges are properly sealed.
4. **MR MDF** — good, but avoid direct water contact zones.
5. **Standard MDF or particle board** — do not use in Malaysian kitchens.

---

### Which should you choose?

- **Budget rental unit** → aluminium composite.
- **Family home you'll live in 10+ years** → marine plywood + laminate or 2K spray.
- **Modern designer look, high-gloss doors** → MR MDF (upper doors) + marine plywood (base).
- **Premium villa kitchen** → 3G ceramic.

---

### 5 tips that save money without cutting quality

1. **Standard sizes over custom** — stick to 600/800 mm modules where possible.
2. **Better hardware, cheaper body** — invest in Blum/Hafele hinges + soft-close runners rather than exotic door materials.
3. **Simple door profile** — flat slab doors age better than heavily routed profiles.
4. **Full-height pantry** — massively increases storage without adding footprint.
5. **Skip the pop-up sockets** — they fail fast; use a well-placed splashback socket line.

---

### How KL Servis Rumah quotes kitchens

1. WhatsApp us your kitchen floor plan + a few Pinterest images for style.
2. Free on-site measurement and consultation.
3. Itemised written quote within 5 working days with 3D drawings.
4. Deposit → factory fabrication (3–4 weeks) → site install (3–5 days).
5. Handover + snag list + **12-month workmanship warranty**.

Ready to plan your new kitchen? WhatsApp us today.
`
  }),

  post({
    slug: "monsoon-home-prep-klang-valley",
    date: "July 15, 2026",
    title: "Monsoon Home Prep Checklist for the Klang Valley",
    excerpt: "The northeast monsoon hits Klang Valley hard from October to March. Here are the 10 preventive checks that stop 90% of rainy-season damage.",
    category: "Seasonal",
    coverImage: "/hero-waterproofing.svg",
    metaTitle: "Monsoon Home Prep Checklist for KL & Selangor Homes",
    metaDesc: "10-point monsoon prep checklist for Klang Valley homes: roof, gutters, waterproofing, drainage, exterior paint. Free WhatsApp checkup from KL Servis Rumah.",
    content: `
Every October the same panic starts on WhatsApp: leaking roofs, damp walls, blocked gutters, flooded balconies. The frustrating part? Almost every one of these issues was preventable with a few checks 6–8 weeks earlier.

Here's the **10-point monsoon prep checklist** we run for KL Servis Rumah clients before every rainy season.

---

### 1. Clear every gutter and downpipe

Leaves, moss and construction dust block gutters and cause overflow that traces back into the wall or under the roof. Clear all gutters, run water through, confirm the downpipe outlet is free.

---

### 2. Inspect ridge caps and roof tiles

Look for slipped or cracked tiles from a low ladder or drone. Ridge cap mortar over 10 years old often perishes and needs re-bedding.

---

### 3. Pressure-test the balcony drain

Pour a bucket of water on the balcony floor. It should drain fully within 10 minutes. If it pools, you have a blocked or slow drain — a leak waiting to happen when the real monsoon rain hits.

---

### 4. Check bathroom silicone and grout

Cracked silicone around the shower screen, bathtub or vanity is where 60% of "mystery bathroom leaks" start. Recaulk anything discoloured or lifted.

---

### 5. Reseal exterior wall cracks

Hairline cracks in exterior render or painted brick let water into the wall cavity. Rake, fill with flexible acrylic filler, prime and touch-up paint.

---

### 6. Trim overhanging branches

Trees rubbing on the roof during storms damage tiles and clog gutters with fresh debris. Trim at least 1 m clear.

---

### 7. Test the sump pump (basement / semi-basement homes)

Fill the sump manually with a bucket and confirm the float switch activates the pump. Replace the battery on any backup unit annually.

---

### 8. Confirm exterior socket covers

Any outdoor socket without an IP-rated cover is a shock/short risk in heavy rain. Replace or add covers before the season starts.

---

### 9. Inspect the roof water tank + valve

Look for hairline cracks, loose lid, and confirm the incoming valve isn't seeping. Overflow during heavy rain can flood a ceiling in hours.

---

### 10. Book preventive services early

October and November slots fill up 2 weeks in advance for roof, waterproofing and gutter work. Don't wait for the first leak — book September.

---

### KL Servis Rumah monsoon prep packages

- **Condo pre-monsoon check (RM 250)**: balcony drain, bathroom silicone, exterior wall photos. Report within 24 hours.
- **Landed home pre-monsoon check (RM 450)**: full roof walk, gutter clear, downpipe test, exterior wall inspection, sump/battery test. Written report + priority booking discount for any needed repairs.

WhatsApp us to book — early September is the sweet spot.
`
  }),

  post({
    slug: "smart-lock-buying-guide-malaysia-2026",
    date: "July 16, 2026",
    title: "Smart Lock Buying Guide for Malaysian Homes (2026)",
    excerpt: "Samsung, Yale, Kaadas, Philips or Lockin? Here's how our locksmiths compare the top 5 smart locks sold in Malaysia — features, install, warranty, real-world reliability.",
    category: "Guide",
    coverImage: "/hero-locksmith.svg",
    metaTitle: "Smart Lock Brands in Malaysia — 2026 Comparison Guide",
    metaDesc: "Which smart lock is best for your Malaysian home in 2026? Compare Samsung, Yale, Kaadas, Philips & Lockin — real-world review from KL Servis Rumah locksmiths.",
    content: `
Smart locks are now standard on new condo handovers and increasingly common on landed home upgrades in KL. But the market has 30+ brands — most of them cheap OEMs from the same 3 Chinese factories — and the wrong choice means a lock that fails in 18 months.

Here's the honest comparison from our KL Servis Rumah locksmiths, based on hundreds of installs.

---

### The 5 brands worth considering in Malaysia

**1. Samsung SHP series (RM 1,500–RM 2,800)**

- Established brand, wide local service network.
- Robust mechanism, fingerprint accuracy above average.
- Frequent OTA firmware updates.
- **Best for**: Landed homes wanting long-term reliability.

**2. Yale YDM series (RM 1,200–RM 2,500)**

- 180+ year lock heritage.
- Reliable magnetic bolt mechanism.
- Great fingerprint recognition speed.
- **Best for**: Condos wanting a proven mechanical lock brand with smart features.

**3. Kaadas KDS (RM 1,400–RM 2,400)**

- Rapidly growing in Malaysia.
- 3D face recognition on top models.
- Palm vein recognition (unique).
- **Best for**: Tech-forward users who want cutting-edge biometrics.

**4. Philips EasyKey (RM 1,300–RM 2,300)**

- Consumer-friendly interface.
- Good app ecosystem integration.
- Solid warranty support.
- **Best for**: Families wanting simplicity and brand trust.

**5. Lockin S30/L (RM 900–RM 1,800)**

- Value option with premium features.
- Xiaomi ecosystem integration.
- 6-way unlock (fingerprint, PIN, card, app, key, voice).
- **Best for**: Budget-conscious buyers who want smart features without paying flagship prices.

---

### 5 things to check BEFORE buying

1. **Door thickness compatibility** — most smart locks fit 35–55 mm doors. Fire-rated doors are often 65–80 mm; check first.
2. **Mortise vs tubular** — most Malaysian doors are mortise (deep pocket). Confirm your lock brand fits.
3. **Backup key** — always insist on a mechanical backup key slot, not just battery jumpstart.
4. **Battery type** — 4×AA or 8×AA typical, lasting 8–15 months. Rechargeable Li-ion needs replacement every 3-5 years.
5. **Warranty terms** — 2 years is standard. Some brands offer 3 years with local Malaysian distributor.

---

### 3 mistakes we see every week

1. **Buying online without checking door compatibility** — wasted 25% of installs need extra chiselling or lock return.
2. **Skipping the backup key** — battery dies at 2am, you're locked out for hours.
3. **Choosing the cheapest OEM** — no local service, firmware never updated, fails at 12-18 months.

---

### 2026 install cost from KL Servis Rumah

- Standard install on existing prepared door: **RM 250–RM 380**.
- Install with door modification (extra chiselling): **RM 380–RM 550**.
- Metal or fire-rated door install: **RM 450–RM 750**.
- All includes app pairing, user code programming, warranty registration.

---

### Ready to upgrade?

WhatsApp us a photo of your existing door + the smart lock model you're considering. We'll confirm compatibility and can install same-week across KL & Selangor.
`
  }),

  post({
    slug: "cctv-installation-buying-guide-kl",
    date: "July 17, 2026",
    title: "CCTV Buying & Installation Guide for KL Homes",
    excerpt: "Analog vs IP, 4-channel vs 8-channel, cloud vs local storage — here's how to specify a home CCTV system that actually works when you need it.",
    category: "Guide",
    coverImage: "/hero-cctv.svg",
    metaTitle: "CCTV Installation Guide KL — Analog vs IP, Storage, Cost",
    metaDesc: "How to plan a home CCTV system in Kuala Lumpur: camera types, channel count, storage, night vision, and cost breakdown from KL Servis Rumah.",
    content: `
Every week we install CCTV for a homeowner who bought the wrong system online. The kit costs less upfront but doesn't cover the entry points, doesn't record enough days, or produces footage too blurry to identify anyone.

Here's how our KL Servis Rumah CCTV specialists actually spec a home system.

---

### Step 1 — Map your coverage priorities

Walk around your house and note:

- **Main gate**: needs number-plate recognition capability (2 MP+ with strong zoom).
- **Front door**: needs face-level clarity (2-4 MP).
- **Driveway/carport**: wide-angle to cover the whole area.
- **Side gates and rear**: wide-angle security overview.
- **Living room** (indoor): for peace-of-mind + pet monitoring.

Most 3-bedroom terrace homes need **4-6 cameras**; a bungalow typically needs **6-10**.

---

### Step 2 — Analog vs IP

**Analog (TVI/AHD)**
- Coax cable, no network setup.
- Cheaper per camera.
- Max 5 MP resolution typically.
- No cloud, purely local recording.
- **Best for**: Budget systems, replacing older systems, sites without network.

**IP (Network)**
- CAT6 cable with PoE (single cable for power + data).
- Higher resolution options (4K available).
- Optional cloud backup.
- Camera-level intelligence (motion zones, line crossing).
- **Best for**: New installs, modern homes, integration with smart home.

Our recommendation for most Malaysian homes: **IP with local NVR + optional cloud backup**.

---

### Step 3 — Storage & recording days

Standard formula:
- 4 MP camera at 24/7 continuous = ~15 GB/day per camera.
- 4 cameras × 30 days = ~1.8 TB.
- 8 cameras × 30 days = ~3.6 TB.

We always recommend purpose-built CCTV hard drives (WD Purple, Seagate SkyHawk) — regular desktop drives fail within 12 months of 24/7 CCTV use.

---

### Step 4 — Night vision that actually works

- Ordinary IR cameras produce grainy black-and-white footage at night.
- **Colour night vision (Ambarella IMX415 sensor)** produces full colour footage down to 0.05 lux — massively better for facial ID.
- Cost premium: about 25-40% more per camera, worth it for main entry points.

---

### 2026 KL Servis Rumah CCTV pricing (installed)

| System                              | Approx cost         |
|-------------------------------------|---------------------|
| 4-channel analog kit, 4 MP cameras  | RM 1,600 – RM 2,800 |
| 4-channel IP kit, 4 MP + PoE        | RM 2,400 – RM 3,800 |
| 8-channel IP kit, 4 MP + PoE + 2 TB HDD | RM 3,600 – RM 5,800 |
| 8-channel IP kit, 4K + colour night vision | RM 5,800 – RM 9,500 |

*Prices include cabling, installation, DVR/NVR setup, mobile app configuration and 1-year workmanship warranty.*

---

### 4 install rules we never break

1. **Cables run in concealed conduit** — never exposed cables anyone can cut.
2. **NVR in a secure location** — not visible from the front door.
3. **UPS on the NVR** — 30-60 minute battery backup for power cuts.
4. **Weatherproof outdoor cameras only** — IP66 minimum rating.

---

### Ready for a quote?

WhatsApp us a photo of your house exterior + a rough floor plan. We come back with a 2-3 camera-position options and a fixed quote in 24 hours.
`
  }),

  post({
    slug: "auto-gate-installation-guide-malaysia",
    date: "July 18, 2026",
    title: "Auto Gate Installation Guide for Malaysian Homes",
    excerpt: "Swing arm vs sliding vs underground — which motor is right for your gate? Plus install cost, safety features and reliability tips.",
    category: "Guide",
    coverImage: "/hero-autogate.svg",
    metaTitle: "Auto Gate Malaysia 2026 — Swing vs Sliding Compared",
    metaDesc: "Choosing an auto gate motor in Malaysia: swing arm vs sliding vs underground. Install cost, safety features, and top brands from KL Servis Rumah.",
    content: `
Auto gate motors are one of the most common home upgrades in KL & Selangor — but choosing the wrong type can lead to years of nuisance. Here's how our KL Servis Rumah gate specialists guide clients.

---

### Motor types explained

**Swing arm (articulated arm)**

- Two arms attach to a hinged gate.
- Best for gates that already swing open.
- Space required: about 400 mm swing clearance inside.
- Typical cost installed: **RM 2,200 – RM 3,800** for a pair.

**Sliding (linear motor)**

- Motor drives a rack along the gate frame.
- Best for wide driveways or where swing clearance is limited.
- Requires a straight run along the fence.
- Typical cost installed: **RM 2,800 – RM 4,600**.

**Underground (buried motor)**

- Motor is hidden underground at the hinge point.
- Cleanest aesthetics — no visible arm.
- Requires civil work and drainage.
- Typical cost installed: **RM 4,500 – RM 7,800** for a pair.

---

### Popular brands in Malaysia

- **SEIP** — solid mid-market Italian brand.
- **DEA** — Italian, widely available spare parts.
- **AutoGate Malaysia (AGM)** — local support, budget-friendly.
- **DASPI** — European build, longer warranty.
- **BFT** — premium Italian, best-in-class reliability.

---

### 4 safety features to insist on

1. **Photocell beam** — auto-stops the gate if someone crosses.
2. **Rubber safety strip** — pressure-triggered stop on contact.
3. **Slow-start / slow-stop** — reduces mechanical wear and improves safety.
4. **UPS or 12V battery backup** — 30-60 minute backup during power cuts (crucial in Malaysia).

---

### Installation timeline

- **Site inspection**: 30-45 minutes.
- **Civil work** (if needed): 1-2 days.
- **Motor + control installation**: 4-6 hours.
- **Testing + user training**: 30 minutes.

Most standard swing or sliding gate installs complete in **1 day**.

---

### Maintenance schedule

- **Monthly**: check remote battery, listen for unusual noises.
- **Every 6 months**: lubricate hinges/rollers, check photocell alignment.
- **Every 12 months**: professional service including motor grease, control board inspection, battery test.

Skip annual service and expect motor failure at 4-6 years vs 10-15 years with maintenance.

---

### 2026 KL Servis Rumah service pricing

| Service                                  | Cost                |
|------------------------------------------|---------------------|
| New swing arm installation (pair)        | RM 2,200 – RM 3,800 |
| New sliding motor installation           | RM 2,800 – RM 4,600 |
| Underground motor installation           | RM 4,500 – RM 7,800 |
| Annual maintenance service               | RM 180 – RM 350     |
| Remote replacement + pairing             | RM 120 – RM 380     |
| Motor + control board replacement        | RM 850 – RM 2,200   |

All work includes 12-month workmanship warranty and manufacturer's motor warranty.

---

### Ready to install?

WhatsApp us a photo of your gate + a photo of your driveway from the road. We'll advise the right motor type and give you a fixed quote in 24 hours.
`
  }),

  post({
    slug: "when-to-repaint-condo-vs-repaint-terrace-house",
    date: "July 19, 2026",
    title: "Condo Repaint vs Landed Terrace House Repaint: What's Different?",
    excerpt: "The scope, the JMB rules, the paint choice, and the timeline are all different. Here's what every KL homeowner should know before repainting.",
    category: "Painting",
    coverImage: "/hero-painting.svg",
    metaTitle: "Condo vs Landed House Repaint Guide — KL & Selangor",
    metaDesc: "Painting a condo vs a landed terrace house in KL: how the scope, JMB rules, paint choice, cost and timeline differ. Honest guide from KL Servis Rumah.",
    content: `
The word "repaint" covers a very different job depending on whether you live in a strata condo or a landed terrace house. Here's what our KL Servis Rumah painters explain to every client before quoting.

---

### Scope difference

**Condo repaint (typical 900-1200 sq ft):**
- Interior walls + ceilings only.
- No exterior work (facade is JMB responsibility).
- Balcony walls: check if it's your responsibility (usually yes for the outer face).
- Typical timeline: 2-4 days.

**Landed terrace house repaint:**
- Interior AND exterior walls + ceilings.
- Boundary wall + gate posts often included.
- Roof-line trim, gutter facing, and eaves.
- Typical timeline: 5-10 days depending on story count.

---

### Cost comparison (2026 Klang Valley)

| Job                                      | Cost                |
|------------------------------------------|---------------------|
| 900 sq ft condo interior repaint         | RM 3,200 – RM 5,500 |
| 1,200 sq ft condo interior repaint       | RM 4,200 – RM 6,800 |
| Single-storey terrace interior only      | RM 3,800 – RM 5,800 |
| Single-storey terrace interior + exterior | RM 8,500 – RM 14,000 |
| Double-storey terrace interior + exterior | RM 12,500 – RM 22,000 |

---

### JMB rules (condo-specific)

Every condo has different rules. Common requirements:

- **Contractor deposit** (RM 300-2,000 refundable).
- **Loading bay booking** (usually 1-3 days in advance).
- **Work hours** (typically 9 AM - 6 PM, no Sundays/holidays).
- **Lift protection** (blankets or padded panels).
- **Common area clean-up** after each day.
- **Rubbish disposal** (specific bin or your own).

We handle all JMB paperwork for our condo repaint clients — it's included in the quote.

---

### Paint choice difference

**Condo interior:**
- Low-VOC paint (Nippon Odour-less, Dulux EasyClean) — no smell for you or neighbours.
- Washable finish for high-traffic walls.
- Ceilings: matte white for even light reflection.

**Landed terrace exterior:**
- Weatherproof topcoat (Nippon Weatherbond, Dulux Weathershield, Jotun Jotashield).
- UV-stable pigments.
- Anti-alkali sealer/primer under.
- Silicone-modified for hairline crack bridging.

---

### Preparation difference

**Condo:** Minimal — you empty your walls, move furniture to the middle, we cover everything with drop sheets.

**Landed:** More prep — power wash exterior, treat any mould, fix hairline cracks, seal any moisture ingress, install scaffolding for double-storey.

---

### 5 questions to ask before booking

1. **Are you including primer/sealer?** (Should be yes for premium jobs.)
2. **What paint grade are you quoting?** (Ask for the exact product code.)
3. **How many topcoats?** (2 minimum, 3 for dark or exterior.)
4. **Do you handle JMB deposit and paperwork?** (For condos, this saves you a headache.)
5. **What's the workmanship warranty?** (6-12 months minimum written.)

---

### Ready to repaint?

WhatsApp us your unit address + a few photos of your worst walls. We'll come back within 24 hours with a rough ballpark and book a site visit for the exact quote.
`
  }),

  post({
    slug: "how-to-hire-honest-contractor-malaysia",
    date: "July 20, 2026",
    title: "How to Hire an Honest Home Contractor in Malaysia (Red Flag Guide)",
    excerpt: "The biggest ripoff signals in Malaysian home services — from vague quotes to zero warranty — and the questions that force honest answers.",
    category: "Guide",
    coverImage: "/hero-renovation.svg",
    metaTitle: "How to Hire an Honest Contractor in Malaysia",
    metaDesc: "Avoid renovation and repair scams in Malaysia. 10 red flags, 8 must-ask questions, and honest warranty benchmarks from KL Servis Rumah.",
    content: `
Every week we meet homeowners whose previous contractor disappeared halfway through a job, quoted "cheap" and then loaded up variations, or gave verbal "guarantees" that vanished the moment a leak returned.

Here's the KL Servis Rumah playbook for hiring an honest home services contractor in Malaysia.

---

### 10 red flags to walk away from

1. **Quote given over the phone in 30 seconds** with no site visit and no photos.
2. **No itemised written quote** — just a lump-sum figure like "RM 8,000 for painting."
3. **Cash-only, no invoice** — you'll have zero recourse if anything fails.
4. **Massive deposit required** (50%+ before starting).
5. **Vague timeline** ("2 or 3 weeks lah") with no milestone dates.
6. **No SSM registration** or refuses to share the company name.
7. **Verbal warranty only** — never written.
8. **Pressure tactics**: "Special price only if you sign today."
9. **Sub-contracts everything** — the person you meet is not the person who does the work.
10. **No portfolio of similar completed jobs** they can show you in the same area.

---

### 8 questions that force honest answers

1. Can I see 3 completed jobs in my area from the last 12 months?
2. Which materials will you use — brand, grade, thickness?
3. What is the itemised cost — line by line — for each scope?
4. What is the workmanship warranty — in writing — and what does it cover / exclude?
5. Who will actually be on-site each day? Same crew or rotating?
6. What is the payment schedule tied to milestones (not calendar dates)?
7. What is your protocol for variations / scope changes mid-job?
8. If something fails at month 6, exactly what is the call-back process?

An honest contractor will answer all 8 confidently in one meeting. A dishonest one will hedge on at least 3 of them.

---

### Reasonable warranty benchmarks in Malaysia

- **Painting**: 6–12 months against peeling, blistering, chalking.
- **Plumbing**: 30 days on repairs, 12 months on new fixture install.
- **Waterproofing**: 24–60 months depending on scope.
- **Electrical**: 12 months + compliance certificate.
- **Ceiling install**: 90 days on workmanship (joint cracks, screw pops).
- **Handyman**: 30 days on installations.
- **Full renovation**: 12 months minimum on general workmanship.

Anything shorter than these is a red flag; anything much longer is either a genuine premium contractor or empty marketing — check the fine print.

---

### The KL Servis Rumah promise

Every job we take on comes with:

- **Free WhatsApp scoping** and on-site inspection.
- **Itemised written quote** within 3–5 working days.
- **Fixed pricing** — no surprise variations without your written approval.
- **Background-verified crew** with public liability insurance.
- **Written warranty** matching the benchmarks above.
- **After-sales call-back** — 1 free courtesy visit within 3 months for any concern.

Ready to hire someone who ticks all these boxes? WhatsApp us and we'll respond within 60 minutes during business hours.
`
  }),

  // ── AIRCON ARTICLES ─────────────────────────────────────────────────────
  post({
    slug: "aircon-service-price-malaysia-2026",
    date: "July 21, 2026",
    title: "Aircon Service Price Malaysia 2026: Full Price Guide",
    excerpt: "Basic servicing from RM 129, chemical wash from RM 156, overhaul from RM 286 and installation from RM 259 — the complete KL & Selangor aircon price list, with what each service includes.",
    category: "Aircon",
    coverImage: "/hero-aircon.svg",
    metaTitle: "Aircon Service Price Malaysia 2026 — Full Price Guide",
    metaDesc: "Complete 2026 aircon service price list for KL & Selangor. Basic servicing from RM 129, chemical wash from RM 156, overhaul from RM 286, installation from RM 259.",
    content: `
Every aircon price below is a minimum starting price, not a fixed figure. The actual cost depends on the nature and scope of your job, and our technical team confirms the final price after a site visit or after reviewing your photos.

## Cleaning — Wall-Mounted Units

| Service | HP | Price |
|---|---|---|
| Basic Servicing | 1.0–1.5 HP | From RM 129 |
| Basic Servicing | 2.0–2.5 HP | From RM 156 |
| Basic Servicing | 3.0–3.5 HP | From RM 195 |
| Pressure Chemical Wash | 1.0–1.5 HP | From RM 156 |
| Pressure Chemical Wash | 2.0–2.5 HP | From RM 195 |
| Pressure Chemical Wash | 3.0 HP | From RM 234 |
| Chemical Overhaul | 1.0–1.5 HP | From RM 286 |
| Chemical Overhaul | 2.0–2.5 HP | From RM 364 |
| Chemical Overhaul | 3.0–3.5 HP | From RM 455 |

## Gas Top-Up (Per PSI)

Gas top-up is charged on the actual PSI required after the technician inspects on site. R22 is RM 2.50 per PSI, while R410A and R32 are RM 3.00 per PSI. A structural leak check starts from RM 114 and is included.

## New Installation (Unit Not Included)

Wall-mounted installation starts from RM 259 (1.0–1.5 HP) up to RM 584 (5.0 HP). Ceiling cassette installation starts from RM 377 and window units from RM 259. The price is installation only — the aircon unit is not included.

## Repairs & Spare Parts

Diagnostic fee starts from RM 114 and is waived if repaired the same visit. Capacitor replacement starts from RM 195, fan motors from RM 390, and compressor replacement from RM 1,040. All spare parts carry a 3-month warranty.

See our [aircon service page](/services/aircon) for the full breakdown and book a quote on WhatsApp.
`
  }),
  post({
    slug: "chemical-wash-vs-chemical-overhaul-aircon",
    date: "July 22, 2026",
    title: "Chemical Wash vs Chemical Overhaul: Which Aircon Service Do You Need?",
    excerpt: "A chemical wash cleans the coil and blower without removing the unit; an overhaul fully dismantles it. Here's how to choose the right one for your aircon and budget.",
    category: "Aircon",
    coverImage: "/hero-aircon.svg",
    metaTitle: "Chemical Wash vs Chemical Overhaul — Which Aircon Service?",
    metaDesc: "Chemical wash vs chemical overhaul for your aircon in KL & Selangor. Compare cost, process and when each is the right fix. Chemical wash from RM 156, overhaul from RM 286.",
    content: `
Choosing between a chemical wash and a chemical overhaul comes down to how deep the problem goes.

## What a Chemical Wash Does

A pressure chemical wash uses an alkaline or anti-microbial solution to clean the evaporator coil, blower wheel and drain without fully removing the unit from the wall. It is the standard fix for a musty smell, mild water dripping and reduced cooling after 6–12 months of use.

Wall-mounted chemical wash starts from RM 156 for a 1.0–1.5 HP unit.

## What a Chemical Overhaul Does

An overhaul removes the entire unit from the wall, dismantles it, and deep-cleans every part individually — coil, blower, fan casing and drain pan. It is the definitive fix for chronic water leaks and heavily clogged units.

Chemical overhaul starts from RM 286 for a 1.0–1.5 HP unit.

## How to Choose

- Choose a **chemical wash** when the unit cools but smells slightly, drips occasionally, or has simply gone too long without a clean.
- Choose a **chemical overhaul** when the unit leaks water constantly, has not been serviced for years, or a chemical wash failed to fix it.

Both are covered by our 1-month workmanship warranty. Compare the full prices on our [aircon service page](/services/aircon).
`
  }),
  post({
    slug: "aircon-gas-topup-guide-malaysia",
    date: "July 23, 2026",
    title: "Aircon Gas Top-Up Guide: R22, R410A & R32 Prices in Malaysia",
    excerpt: "R22 is RM 2.50 per PSI, R410A and R32 are RM 3.00 per PSI. Learn how gas top-up is charged, why a leak check matters, and when topping up isn't the real fix.",
    category: "Aircon",
    coverImage: "/hero-aircon.svg",
    metaTitle: "Aircon Gas Top-Up Guide — R22, R410A & R32 Prices",
    metaDesc: "Aircon gas top-up prices in Malaysia: R22 RM 2.50/PSI, R410A RM 3.00/PSI, R32 RM 3.00/PSI. How charging works and why a leak check is always included.",
    content: `
Gas top-up is one of the most misunderstood aircon services, so here is exactly how it works.

## Gas Prices Per PSI

- R22 refrigerant: RM 2.50 per PSI
- R410A refrigerant: RM 3.00 per PSI
- R32 refrigerant: RM 3.00 per PSI

Gas top-up is charged on the actual PSI required after the technician inspects on site. We only refill the amount needed, and a structural leak check (from RM 114) is included.

## Why a Leak Check Matters

Refrigerant does not simply "run out". If your unit is low on gas, there is almost always a leak somewhere in the system. Topping up without finding the leak means the gas will escape again — often within weeks.

## When Gas Top-Up Isn't the Fix

If the unit is not cold because of a dirty coil or failing compressor, adding gas will not help and may waste your money. A proper diagnosis first tells you whether you need gas, a chemical wash, or a part replacement.

Book a gas top-up or diagnosis on our [aircon service page](/services/aircon).
`
  }),
  post({
    slug: "aircon-installation-cost-malaysia",
    date: "July 24, 2026",
    title: "Aircon Installation Cost in Malaysia 2026: What's Included",
    excerpt: "Wall-mounted installation from RM 259, ceiling cassette from RM 377. Here's exactly what's included — and why the aircon unit itself is not part of the price.",
    category: "Aircon",
    coverImage: "/hero-aircon.svg",
    metaTitle: "Aircon Installation Cost Malaysia 2026 — What's Included",
    metaDesc: "Aircon installation cost in KL & Selangor: wall-mounted from RM 259, ceiling cassette from RM 377. Installation only — unit not included. 7 ft copper pipe included.",
    content: `
The installation price you see is for installation only — the aircon unit is not included, and you supply your own unit.

## Installation Prices

| Unit type | HP | Price |
|---|---|---|
| Wall-Mounted | 1.0–1.5 HP | From RM 259 |
| Wall-Mounted | 2.0 HP | From RM 324 |
| Wall-Mounted | 2.5 HP | From RM 363 |
| Wall-Mounted | 3.0 HP | From RM 428 |
| Wall-Mounted | 4.0 HP | From RM 519 |
| Wall-Mounted | 5.0 HP | From RM 584 |
| Ceiling Cassette | 1.0–1.5 HP | From RM 377 |
| Window Unit | 1.0–1.5 HP | From RM 259 |

## What's Included

Every installation includes 7 ft of copper pipe, insulation, electrical wiring, drain pipe, bracket, vacuum pump commissioning and a run/cooling test. Extra copper beyond 7 ft is charged per foot.

## Why the Unit Isn't Included

We install the aircon you already own or buy separately. This keeps the price transparent — you choose the brand and model, and we charge a clear installation rate.

See the full breakdown on our [aircon service page](/services/aircon).
`
  }),
  post({
    slug: "how-often-to-service-aircon-malaysia",
    date: "July 25, 2026",
    title: "How Often Should You Service Your Aircon in Malaysia?",
    excerpt: "Most Malaysian homes should service their aircon every 3–6 months, with a chemical wash annually. Here's the schedule that keeps your unit cold, clean and efficient.",
    category: "Aircon",
    coverImage: "/hero-aircon.svg",
    metaTitle: "How Often to Service Aircon in Malaysia — 3–6 Month Guide",
    metaDesc: "How often should you service your aircon in Malaysia? We recommend basic servicing every 3–6 months and a chemical wash once a year. Full maintenance schedule inside.",
    content: `
Malaysia's heat and humidity mean your aircon works harder than almost anywhere else — so it needs more regular care.

## Recommended Service Frequency

- **Every 3–6 months**: basic servicing (filter and coil cleaning, drainage and gas check). Ideal for homes that run the aircon nightly.
- **Once a year**: a pressure chemical wash to remove deep grime, mould and odour from the coil and blower.
- **Every 3–5 years**: a full chemical overhaul if the unit leaks water or has not been cleaned properly.

## Signs You Need Service Sooner

- The air is not as cold as before
- The unit drips water or smells musty
- There is ice on the pipes or a rattling noise
- Your electricity bill has crept up

Regular servicing keeps the unit efficient, prevents breakdowns and extends its lifespan. Book your next service on our [aircon service page](/services/aircon).
`
  })
];
