export type AreaDetail = {
  slug: string;
  name: string;
  shortName: string;
  state: "Kuala Lumpur" | "Selangor";
  lat: number;
  lng: number;
  population: string;
  landmarks: string[];
  description: string;
  metaTitle: string;
  metaDesc: string;
  faqs: { q: string; a: string }[];
};

export const areaPages: AreaDetail[] = [
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    shortName: "KL",
    state: "Kuala Lumpur",
    lat: 3.139,
    lng: 101.6869,
    population: "2 million+ (8 million+ Greater Klang Valley)",
    landmarks: [
      "KLCC Petronas Towers",
      "Bukit Bintang",
      "Mont Kiara",
      "Bangsar",
      "KL Sentral",
      "Sentul",
      "Cheras",
      "Kepong",
    ],
    description:
      "KL Servis Rumah sends expert, background-checked craftsmen across the federal territory of Kuala Lumpur. Whether you are living in a high-rise condominium in Mont Kiara, Bangsar, or KLCC, or managing a shoplot or terrace house in Cheras, Sentul, or Kepong, we deliver premium home maintenance services. Our technical teams specialize in premium interior house painting with Nippon Paint, non-destructive water leak detection and repair, plaster ceiling fixes with seamless skim-coating, high-pressure PU grouting for bathroom leakage, and professional TV mounting and furniture assembly. We follow strict JMB regulations, clean up entirely post-work, and guarantee 100% transparent pricing before any work begins.",
    metaTitle: "Expert Home Services Kuala Lumpur — KL Servis Rumah",
    metaDesc:
      "Premium painting, plumbing, plaster ceiling, waterproofing, and handyman services in Kuala Lumpur. Same-day available. Clean, reliable, and insured.",
    faqs: [
      {
        q: "Do you service high-rise condos and offices in Kuala Lumpur?",
        a: "Yes! KL Servis Rumah regularly handles projects in high-rise residences and offices in Mont Kiara, Bangsar, KLCC, and Bukit Bintang. We coordinate with building security, comply with management work hours, and carry liability insurance.",
      },
      {
        q: "What is your call-out response time for emergency plumbing in KL?",
        a: "For critical plumbing leaks, flooding, or broken lines in Kuala Lumpur, we dispatch the nearest technician immediately. Our average arrival time is 30 to 60 minutes.",
      },
      {
        q: "Is there a warranty on your handyman services in Kuala Lumpur?",
        a: "Yes, all handyman installations, wall-mountings, door repairs, and lock replacements carry a 30-day workmanship safety warranty.",
      },
    ],
  },
  {
    slug: "petaling-jaya",
    name: "Petaling Jaya",
    shortName: "PJ",
    state: "Selangor",
    lat: 3.1073,
    lng: 101.6067,
    population: "600,000+ residents",
    landmarks: [
      "SS2",
      "Damansara Uptown",
      "Sunway Pyramid",
      "Bandar Utama",
      "Kota Damansara",
      "Ara Damansara",
      "Amcorp Mall",
    ],
    description:
      "Serving all of Petaling Jaya, KL Servis Rumah provides premier home improvements and repairs. From residential bungalows in Section 14 and SS2 to modern apartments in Kota Damansara, Bandar Utama, and Ara Damansara, our multi-skilled technicians are near you. We specialize in interior and exterior house painting using weather-resistant Dulux coatings, repairing sagging ceiling boards, partition wall installations for home offices, resolving low water pressure issues, toilet bowl installations, and IKEA furniture assemblies. Our work is fully insured, and our technicians are background-checked for your family's safety.",
    metaTitle: "Top-Rated Painting & Handyman Petaling Jaya — PJ Home Services",
    metaDesc:
      "Need painting, plumbing, ceiling, waterproofing, or handyman repairs in PJ? KL Servis Rumah delivers tidy, certified tradesmen with upfront pricing.",
    faqs: [
      {
        q: "Do you cover all areas of Petaling Jaya?",
        a: "Yes, we serve the entire PJ district including SS2, Section 14, Damansara Utama, Damansara Jaya, Kota Damansara, Ara Damansara, Kelana Jaya, and PJ Old Town.",
      },
      {
        q: "How much does painting cost for a single room in PJ?",
        a: "Our premium interior room painting starts from RM 400, including minor wall patching, sanding, and two coats of premium Nippon or Dulux washable paint.",
      },
      {
        q: "Can you fix a leaking ceiling in my Petaling Jaya double-storey terrace?",
        a: "Yes! We conduct non-hacking PU grouting on upper floor bathrooms to seal the concrete slab leak, and then replace and skim-coat any water-damaged plasterboard on the lower floor ceiling.",
      },
    ],
  },
  {
    slug: "subang-jaya",
    name: "Subang Jaya",
    shortName: "Subang",
    state: "Selangor",
    lat: 3.0738,
    lng: 101.5883,
    population: "700,000+ residents",
    landmarks: [
      "SS15",
      "Sunway Lagoon",
      "Empire Shopping Gallery",
      "Subang Parade",
      "USJ Taipan",
      "Glenmarie",
      "Summit USJ",
    ],
    description:
      "KL Servis Rumah is Subang Jaya's trusted home care provider. From commercial offices in Glenmarie and retail outlets in SS15 to family homes across USJ 1 to USJ 21 and Bandar Sunery, we offer high-grade painting, ceiling, plumbing, waterproofing, and handyman services. Our Subang Jaya teams are highly trained in mounting OLED TVs on gypsum walls, installing instant hot water showers, clearing greasy kitchen sinks, sealing roof leaks with bituminous membranes, and building durable soundproof room divider partitions. We guarantee no surprise pricing - we inspect, quote, and only proceed after you approve.",
    metaTitle: "Subang Jaya Handyman, Plumber & Painter | KL Servis Rumah",
    metaDesc:
      "Reliable painting, plumbing, ceiling, and handyman services in Subang Jaya & USJ. SIRIM-certified parts, clean workmanship. Book same-day slots.",
    faqs: [
      {
        q: "Are your technicians background-checked?",
        a: "Yes. All our painters, plumbers, and handymen are screened, background-verified local pros, ensuring trustworthy, secure services in Subang Jaya.",
      },
      {
        q: "Do you do commercial plumbing and partition work in Glenmarie?",
        a: "Yes, we regularly install drywall partitions, soundproofing rockwool insulation, and heavy-duty commercial plumbing for offices and showrooms in Glenmarie and SS15.",
      },
      {
        q: "How long does a TV mounting service take in USJ?",
        a: "A standard flat TV wall mount installation takes approximately 45 to 60 minutes. We check behind the walls for cables and use premium heavy-duty anchors.",
      },
    ],
  },
  {
    slug: "puchong",
    name: "Puchong",
    shortName: "Puchong",
    state: "Selangor",
    lat: 3.0333,
    lng: 101.6167,
    population: "400,000+ residents",
    landmarks: [
      "IOI Mall Puchong",
      "Bandar Puteri Puchong",
      "Puchong Jaya",
      "Puchong Utama",
      "Taman Equine",
      "LDP Highway",
    ],
    description:
      "From Puchong Jaya and Bandar Puteri to Puchong Utama and Bukit Jalil borders, KL Servis Rumah provides rapid-response home repairs and premium painting. Puchong's highly populated commercial blocks and residential terraced houses frequently experience water pipe leaks, sagging ceilings, and security lock failures. Our local team resolves these quickly: we replace faulty locks, plane scraping doors, install decorative ceiling moldings, apply multi-layered waterproofing membranes on flat roof slabs, and handle complete home repaintings. We carry a wide selection of replacement parts to resolve most repairs in a single visit.",
    metaTitle: "Puchong Painting, Plumbing & Waterproofing Specialist",
    metaDesc:
      "Professional home services in Puchong. Bathroom waterproofing, plaster ceiling repair, lock repair, and interior repainting. Free quote. 30-day warranty.",
    faqs: [
      {
        q: "Can you fix a door that is scraping the floor in Puchong?",
        a: "Yes. We shave down wood doors that have expanded due to humidity or adjust sagging hinges to restore smooth door alignment.",
      },
      {
        q: "What is your waterproofing method for bathrooms in Bandar Puteri?",
        a: "We provide both non-destructive high-pressure PU grouting (no tiles broken) and complete tile-removal chemical membrane restorations based on leak severity.",
      },
      {
        q: "How much does it cost to assemble IKEA furniture in Puchong?",
        a: "Our assembly prices start from RM 100, depending on the complexity of the wardrobe, bed frame, or cabinet set.",
      },
    ],
  },
  {
    slug: "shah-alam",
    name: "Shah Alam",
    shortName: "Shah Alam",
    state: "Selangor",
    lat: 3.0738,
    lng: 101.5183,
    population: "650,000+ residents",
    landmarks: [
      "Blue Mosque",
      "i-City Shah Alam",
      "Bukit Jelutong",
      "Kota Kemuning",
      "Setia Alam",
      "Aeon Mall Shah Alam",
    ],
    description:
      "As the state capital of Selangor, Shah Alam hosts a wide variety of properties, from large semi-Ds in Bukit Jelutong and Kota Kemuning to multi-storey warehouses. KL Servis Rumah provides expert care for Shah Alam properties. Our services include high-durability exterior wall painting to withstand the tropical sun and rain, roof tile leakage repairs, gypsum partitions for study areas, toilet bowl and water heater fittings, and mounting curtains and shelves. We use laser leveling for all shelves and cabinets to ensure clean, perfect horizontal alignments.",
    metaTitle: "Professional Painter & Plumber Shah Alam — KL Servis Rumah",
    metaDesc:
      "Best home maintenance in Shah Alam. Plaster ceiling repair, exterior house painting, toilet repairs, and TV mounting. Background-verified local pros.",
    faqs: [
      {
        q: "Do you service Setia Alam and Bukit Jelutong?",
        a: "Yes! We cover the entire Shah Alam municipality, including Setia Alam, Bukit Jelutong, Kota Kemuning, Section 7, i-City, and Glenmarie borders.",
      },
      {
        q: "What paints do you recommend for Shah Alam's hot exterior weather?",
        a: "We recommend premium weather-shield topcoats like Nippon Weatherbond or Dulux Weathershield, which reflect heat and resist mold and dirt buildup.",
      },
      {
        q: "Can you install dry wall partitions for retail shops in Shah Alam malls?",
        a: "Yes. We design and install fire-rated commercial partitions with clean skim-coating, completing installations overnight to match retail mall rules.",
      },
    ],
  },
  {
    slug: "klang",
    name: "Klang",
    shortName: "Klang",
    state: "Selangor",
    lat: 3.0449,
    lng: 101.4456,
    population: "800,000+ residents",
    landmarks: [
      "Klang Parade",
      "Bukit Tinggi",
      "Port Klang",
      "Setia Alam",
      "AEON Bukit Tinggi",
      "Little India Klang",
    ],
    description:
      "Klang properties, especially in coastal Port Klang and densely populated Bandar Bukit Tinggi, are susceptible to high humidity, water leaks, and salty sea air corrosion. KL Servis Rumah provides specialized maintenance in Klang. We offer rust-proof stainless steel plumbing fixtures, anti-corrosive wall sealers, bathroom waterproofing membranes, ceiling board restorations, secure lockset fitting, and general handyman repairs. Our local Klang crews are fully equipped, punctual, and highly experienced in solving dampness and masonry structural peeling.",
    metaTitle: "Klang Plumbing, Painting & Ceiling Repair | KL Servis Rumah",
    metaDesc:
      "Trusted home repairs in Klang, Bukit Tinggi & Setia Alam. Anti-rust plumbing, damp wall treatments, and durable plaster ceilings. Transparent prices.",
    faqs: [
      {
        q: "Why do my bathroom pipes rust so quickly in Klang, and can you help?",
        a: "Klang's higher salt air and water mineralization accelerate rust in galvanized pipes. We replace them with premium SIRIM PVC-u or corrosion-proof PPR/copper piping.",
      },
      {
        q: "Do you provide waterproofing warranties in Bukit Tinggi?",
        a: "Yes, we provide up to a 5-year written leak-free warranty for complete chemical waterproofing membrane projects.",
      },
      {
        q: "Is same-day handyman service available in Setia Alam?",
        a: "Yes, bookings made before 11:00 AM are eligible for same-day handyman and plumbing dispatches in Setia Alam and Klang.",
      },
    ],
  },
  {
    slug: "cheras",
    name: "Cheras",
    shortName: "Cheras",
    state: "Kuala Lumpur",
    lat: 3.0729,
    lng: 101.7546,
    population: "500,000+ residents",
    landmarks: [
      "Cheras Leisure Mall",
      "MyTown Cheras",
      "Sunway Velocity",
      "Alam Damai",
      "Taman Connaught",
      "Bandar Sri Permaisuri",
    ],
    description:
      "KL Servis Rumah covers all of Cheras — from mature terrace neighbourhoods in Taman Connaught and Alam Damai to high-rise condos around Sunway Velocity and MyTown. Our Cheras crews are experienced with 25-year-old plaster ceilings needing skim-coat refresh, hairline masonry cracks caused by settling ground, blocked kitchen drains from decades of grease, and interior repainting for Chinese New Year & Hari Raya. We work with JMB / management for every high-rise project, use shoe covers indoors, and clean the site fully before handover.",
    metaTitle: "Handyman, Painter & Plumber in Cheras — KL Servis Rumah",
    metaDesc:
      "Trusted Cheras home services: painting, plumbing, plaster ceiling, waterproofing & handyman work with 30-day to 5-year warranties. Same-day slots available.",
    faqs: [
      {
        q: "Do you handle old landed houses in Taman Connaught and Alam Damai?",
        a: "Yes. We specialise in 20 to 40 year-old Cheras terrace homes — hairline crack patching, water-damaged ceiling replacement, rusted galvanised pipe swap-outs, and complete interior repaints.",
      },
      {
        q: "Can you service condos in Sunway Velocity or MyTown Cheras?",
        a: "Yes. We coordinate the loading bay booking with JMB/management, keep noise inside permitted hours, and protect lifts and lobbies during every visit.",
      },
      {
        q: "What is the response time for burst-pipe emergencies in Cheras?",
        a: "Typical dispatch time is 45–75 minutes for Cheras. WhatsApp us the leak photo and full address for priority routing.",
      },
    ],
  },
  {
    slug: "ampang",
    name: "Ampang",
    shortName: "Ampang",
    state: "Kuala Lumpur",
    lat: 3.15,
    lng: 101.7625,
    population: "300,000+ residents",
    landmarks: [
      "Ampang Point",
      "KLCC border",
      "Taman TAR",
      "Ampang Hilir",
      "Bukit Antarabangsa",
      "Ukay Perdana",
    ],
    description:
      "From luxury bungalows in Ampang Hilir and Taman TAR to hillside condos in Bukit Antarabangsa and mid-market terraces in Pandan Indah, KL Servis Rumah delivers polished home maintenance across every Ampang neighbourhood. We handle exterior repainting for the diplomatic quarter, PU grouting for rain-season slab leaks in hillside apartments, and full-service handyman visits for expat family homes. Every job comes with itemised market-rate pricing and up to 5-year written waterproofing warranty.",
    metaTitle: "Ampang Painting, Plumbing & Waterproofing — KL Servis Rumah",
    metaDesc:
      "Painting, plumbing, ceiling & waterproofing in Ampang, Ampang Hilir, Bukit Antarabangsa & Pandan Indah. Insured, background-verified crew. Free WhatsApp quote.",
    faqs: [
      {
        q: "Do you paint bungalows and 3-storey homes in Ampang Hilir?",
        a: "Yes. We work at height with proper scaffolding and safety harness certification, using UV-resistant weatherproof coatings suitable for exposed Ampang exteriors.",
      },
      {
        q: "Can you diagnose ceiling leaks in a Bukit Antarabangsa hillside condo?",
        a: "Yes. Hillside blocks often suffer inter-floor slab leaks after heavy rain — we use thermal imaging and PU grouting to seal cracks without hacking your upper-floor bathroom tiles.",
      },
      {
        q: "Do you accept English-only communication for expat households in Ampang?",
        a: "Absolutely. Our project managers are fluent in English and used to coordinating with expat families, embassy quarters and international schools' housing.",
      },
    ],
  },
  {
    slug: "kajang",
    name: "Kajang",
    shortName: "Kajang",
    state: "Selangor",
    lat: 2.9927,
    lng: 101.791,
    population: "400,000+ residents",
    landmarks: [
      "Metro Point Kajang",
      "Sungai Chua",
      "Bandar Baru Bangi",
      "Semenyih",
      "Kajang 2",
      "Country Heights",
    ],
    description:
      "KL Servis Rumah serves Kajang, Semenyih, Bandar Baru Bangi and the fast-growing MRT-line corridor. From new-launch bungalows in Country Heights and freshly handed-over strata homes near the Kajang MRT station to older Sungai Chua terraces, our teams handle everything from bathroom PU grouting and roof leak resealing to full interior repaints and gypsum partitions for growing home offices. Same-day slots available for Kajang, Semenyih and Balakong for bookings before 11 AM.",
    metaTitle:
      "Trusted Painter, Plumber & Handyman in Kajang — KL Servis Rumah",
    metaDesc:
      "Painting, waterproofing, plumbing & handyman in Kajang, Semenyih, Balakong & Bandar Baru Bangi. Fixed quotes, up to 5-yr warranty. WhatsApp for a same-day slot.",
    faqs: [
      {
        q: "Do you cover Semenyih, Balakong and Bandar Baru Bangi from Kajang?",
        a: "Yes. All four are within our Kajang dispatch zone with the same pricing and warranty terms.",
      },
      {
        q: "Can you help with a new-house handover defect list in Kajang 2?",
        a: "Yes. We produce a written defect report, fix hairline cracks, adjust doors and hinges, seal skim-coat rough patches, and can coordinate directly with the developer's QC team.",
      },
      {
        q: "How much does exterior repainting cost for a Kajang double-storey terrace?",
        a: "Exterior repainting for a standard 22×70 terrace in Kajang typically ranges from RM 6,500 to RM 12,000 depending on scaffolding needs, primer condition and paint grade selected.",
      },
    ],
  },
  {
    slug: "mont-kiara",
    name: "Mont Kiara",
    shortName: "Mont Kiara",
    state: "Kuala Lumpur",
    lat: 3.1727,
    lng: 101.651,
    population: "60,000+ residents (dense high-rise)",
    landmarks: [
      "1 Mont Kiara",
      "Solaris Mont Kiara",
      "Publika",
      "Plaza Mont Kiara",
      "Kiara 163",
      "Verve Suites",
    ],
    description:
      "Mont Kiara is one of Kuala Lumpur's densest luxury condominium clusters, and KL Servis Rumah handles the specific demands of high-rise living here: strict JMB access rules, tight lift booking windows, marble-floor protection, and premium finishes that don't tolerate sloppy workmanship. We're regulars in 1 Mont Kiara, Verve Suites, Kiara 163 and Publika-area residences, delivering interior repaints with low-VOC washable paints, invisible drywall repairs, TV wall mounting on drywall or concrete, and PU-grouting waterproofing for master bathroom leaks.",
    metaTitle: "Mont Kiara Home Services — Painter, Plumber & Handyman KL",
    metaDesc:
      "Premium home services in Mont Kiara condos: low-VOC painting, marble-safe plumbing, PU waterproofing & handyman work. Insured, JMB-friendly, English-speaking.",
    faqs: [
      {
        q: "Are you approved to work in Mont Kiara luxury condominiums?",
        a: "Yes. We provide the required contractor documents to JMB, book the loading bay, protect all common areas with drop sheets, and match every high-rise's quiet-work-hour policy.",
      },
      {
        q: "Can you match the original Nippon or Dulux paint colour of my Mont Kiara condo?",
        a: "Yes. Share a photo of your existing paint code or peel-off swatch and we'll match it exactly using the manufacturer's own tinting system.",
      },
      {
        q: "Do you handle marble and hardwood floor protection during a repaint?",
        a: "Every job in Mont Kiara includes heavy-duty canvas + plastic layering on marble, parquet or engineered wood floors, and skirting-tape masking on every wall junction.",
      },
    ],
  },
  {
    slug: "bangsar",
    name: "Bangsar",
    shortName: "Bangsar",
    state: "Kuala Lumpur",
    lat: 3.1319,
    lng: 101.6738,
    population: "40,000+ residents",
    landmarks: [
      "Bangsar Village",
      "Bangsar Shopping Centre",
      "Telawi",
      "Bangsar South",
      "Lucky Garden",
      "Pantai Hillpark",
    ],
    description:
      "Bangsar mixes old-money bungalows in Lucky Garden with modern condominiums in Bangsar South and terrace homes in Pantai Hillpark. KL Servis Rumah supports this diversity: heritage-friendly repaints for 40-year-old bungalows, quick condo bathroom PU grouting for Bangsar South high-rises, and precise carpentry, cabinet & lighting work for Telawi shoplot conversions. Our Bangsar dispatch team is fluent in English, discreet on-site, and finishes every job with a full cleanup.",
    metaTitle: "Bangsar Painter, Plumber & Handyman — KL Servis Rumah",
    metaDesc:
      "Home services in Bangsar & Bangsar South — painting, plumbing, waterproofing, ceiling & handyman. Insured, discreet, English-speaking crews. WhatsApp us today.",
    faqs: [
      {
        q: "Do you paint heritage-style Lucky Garden bungalows?",
        a: "Yes. We colour-match existing schemes, protect original woodwork and mouldings, and apply proper alkali-resistant sealer before topcoats — essential for 30 to 50 year-old plastered walls.",
      },
      {
        q: "Can you handle a bathroom leak in a Bangsar South high-rise?",
        a: "Yes. Bangsar South condos frequently need inter-floor PU grouting — we complete most leaks in 3–4 hours without hacking your neighbour's tiles.",
      },
      {
        q: "Do you offer packages for full unit refresh in Bangsar Village condos?",
        a: "Yes. A typical 3-bed condo refresh (repaint + minor plumbing + skim-coat patches + deep clean) runs from RM 6,000 to RM 12,000 with fixed itemised pricing.",
      },
    ],
  },
  {
    slug: "damansara",
    name: "Damansara",
    shortName: "Damansara",
    state: "Selangor",
    lat: 3.158,
    lng: 101.626,
    population: "300,000+ residents (across Damansara sub-townships)",
    landmarks: [
      "Damansara Utama",
      "TTDI",
      "Damansara Perdana",
      "Damansara Heights",
      "1 Utama",
      "The Curve",
    ],
    description:
      "'Damansara' spans Damansara Utama (SS 21), TTDI, Damansara Perdana, Damansara Heights and Damansara Jaya — hugely different property types under one name. KL Servis Rumah handles them all: TTDI bungalow repaints, Damansara Perdana condo waterproofing, DU shoplot signage lighting, and family-home handyman visits in Damansara Jaya. Our project managers help match the right specialist (painter, plumber, waterproofer, handyman) to your exact property type and budget.",
    metaTitle: "Damansara Painting, Plumbing & Handyman — KL Servis Rumah",
    metaDesc:
      "Painting, plumbing, ceiling, waterproofing & handyman services across DU, TTDI, Damansara Perdana, Damansara Heights & Damansara Jaya. Fixed quotes, insured crew.",
    faqs: [
      {
        q: "Do you cover all Damansara townships?",
        a: "Yes — Damansara Utama (SS21), TTDI, Damansara Perdana, Damansara Heights, Damansara Jaya, Damansara Kim and Bandar Sri Damansara are all within our same-day dispatch zone.",
      },
      {
        q: "Can you help me choose between painting brands for a TTDI bungalow?",
        a: "Yes. We bring physical Nippon, Dulux and Jotun swatches on the site visit and explain washability, UV, warranty and per-litre coverage differences based on your rooms.",
      },
      {
        q: "Do you take on smaller sub-RM 500 jobs in Damansara?",
        a: "Absolutely. Minor handyman visits (TV mount, curtain rail, door hinge fix, tap replacement) start from RM 100 with a fixed itemised quote.",
      },
    ],
  },
  {
    slug: "kepong",
    name: "Kepong",
    shortName: "Kepong",
    state: "Kuala Lumpur",
    lat: 3.214,
    lng: 101.6353,
    population: "400,000+ residents",
    landmarks: [
      "Kepong Baru",
      "Metro Prima",
      "Aeon Metro Prima",
      "Desa ParkCity border",
      "Bandar Menjalara",
      "Taman Ehsan",
    ],
    description:
      "Kepong is one of KL's densest terrace-home neighbourhoods, and KL Servis Rumah dispatches multiple crews here daily. Common Kepong jobs: repainting 20-year-old terrace exteriors after monsoon fading, replacing rusted plaster ceilings under leaking upstairs bathrooms, PVC drainage re-piping for kitchen sinks, and gypsum partition builds for home offices in Bandar Menjalara double-storeys. Our Kepong crew is punctual, English/Malay/Cantonese-friendly, and used to double-parking constraints on tight streets.",
    metaTitle: "Kepong Painter, Plumber & Ceiling Repair — KL Servis Rumah",
    metaDesc:
      "Home services in Kepong, Metro Prima, Bandar Menjalara & Taman Ehsan. Painting, plumbing, ceiling, waterproofing & handyman with fixed quotes. Same-day slots.",
    faqs: [
      {
        q: "Do you cover Bandar Menjalara and Metro Prima?",
        a: "Yes. Both are core Kepong dispatch zones with same-day availability for bookings before 11 AM.",
      },
      {
        q: "How much for a standard Kepong terrace interior repaint?",
        a: "A single-storey 22×70 terrace interior repaint (2 coats, walls + ceilings) typically runs RM 3,800 to RM 6,500 depending on wall condition and paint grade.",
      },
      {
        q: "Can you fix a sagging plaster ceiling under a leaking upstairs bathroom in Kepong?",
        a: "Yes. We stop the leak first (usually PU grouting from below), replace the sagging board with moisture-resistant plaster, then skim-coat and repaint to match.",
      },
    ],
  },
  {
    slug: "setapak",
    name: "Setapak",
    shortName: "Setapak",
    state: "Kuala Lumpur",
    lat: 3.1975,
    lng: 101.715,
    population: "300,000+ residents",
    landmarks: [
      "Wangsa Maju",
      "Taman Melati",
      "Danau Kota",
      "Setapak Central",
      "Sri Rampai",
      "Genting Klang",
    ],
    description:
      "Setapak, Wangsa Maju and the northern KL corridor host huge numbers of low-rise walk-up flats, mid-market condos and terrace homes — property types that all age differently. KL Servis Rumah handles wall-crack patching for older flats in Sri Rampai, exterior repainting for Wangsa Maju terraces facing Genting Klang traffic dust, ceiling repair after upstairs leaks, and full plumbing pipe replacement for 30-year-old blocks. Dispatch times to Setapak are typically 30–60 minutes.",
    metaTitle: "Setapak, Wangsa Maju Painter & Plumber — KL Servis Rumah",
    metaDesc:
      "Home services in Setapak, Wangsa Maju, Danau Kota, Taman Melati & Sri Rampai. Painting, plumbing, ceiling, waterproofing & handyman. Fixed quotes.",
    faqs: [
      {
        q: "Do you paint walk-up flats in Sri Rampai and Danau Kota?",
        a: "Yes. We're used to walk-up access, protect stair landings during work, and coordinate with block committees where needed.",
      },
      {
        q: "Can you replace 30-year-old galvanised pipes in a Setapak flat?",
        a: "Yes. Full flat re-piping to PPR/PEX runs typically RM 2,500 to RM 5,500 depending on flat size and wall-chasing required.",
      },
      {
        q: "Is same-day dispatch available for Wangsa Maju?",
        a: "Yes. Book before 11 AM for a same-day slot; leaks and burst pipes are triaged as priority.",
      },
    ],
  },
  {
    slug: "sri-petaling",
    name: "Sri Petaling",
    shortName: "Sri Petaling",
    state: "Kuala Lumpur",
    lat: 3.0722,
    lng: 101.6905,
    population: "150,000+ residents",
    landmarks: [
      "Sri Petaling Square",
      "Endah Parade",
      "Bukit Jalil Golf & Country Resort",
      "Pavilion Bukit Jalil",
      "Happy Garden",
      "Taman OUG",
    ],
    description:
      "Sri Petaling, Bukit Jalil and Taman OUG cover a mix of family terrace homes and newer luxury condos surrounding Pavilion Bukit Jalil. KL Servis Rumah handles the full range: repainting classic single-storey OUG terraces, PU-grouting waterproofing for new-launch Bukit Jalil high-rises, gypsum partition builds for growing home offices, and handyman visits for TV mounting, curtain rails and lighting upgrades. Every job is quoted at market rates before we start.",
    metaTitle: "Sri Petaling & Bukit Jalil Painter, Plumber — KL Servis Rumah",
    metaDesc:
      "Home services in Sri Petaling, Bukit Jalil, Taman OUG & Happy Garden — painting, plumbing, ceiling, waterproofing & handyman. Fixed quotes, insured crew.",
    faqs: [
      {
        q: "Do you service new condos near Pavilion Bukit Jalil?",
        a: "Yes. We're regulars in the Pavilion Bukit Jalil ecosystem (residences, mall service apartments) and comply with each building's contractor onboarding process.",
      },
      {
        q: "Can you repaint a single-storey OUG or Happy Garden terrace?",
        a: "Yes. A single-storey interior repaint runs from RM 3,200 with prep work included; exterior from RM 5,000 depending on wall condition.",
      },
      {
        q: "Do you install ceiling fans and downlights in Sri Petaling condos?",
        a: "Yes. Ceiling fan install from RM 150, downlight retrofit from RM 120/point — including ST-licensed electrician work and safety testing.",
      },
    ],
  },
  {
    slug: "kota-damansara",
    name: "Kota Damansara",
    shortName: "Kota Damansara",
    state: "Selangor",
    lat: 3.1544,
    lng: 101.5822,
    population: "250,000+ residents",
    landmarks: [
      "The Strand",
      "Sunway Nexis",
      "Sunway Giza",
      "Tropicana",
      "Encorp Strand",
      "PJU 5",
    ],
    description:
      "Kota Damansara is one of PJ's fastest-growing sub-townships, with a heavy mix of new condos, semi-Ds and shoplots. KL Servis Rumah is a common sight in The Strand, Sunway Nexis, Encorp Strand and PJU 5 residences — handling everything from full-unit repaints for handover units, PU grouting for master bathroom slab leaks, gypsum partitions for shoplot office conversions, and general handyman visits including cabinet installs and lighting upgrades.",
    metaTitle: "Kota Damansara Painter, Plumber & Handyman — KL Servis Rumah",
    metaDesc:
      "Home services in Kota Damansara, PJU 5, The Strand, Sunway Nexis & Encorp Strand. Painting, plumbing, ceiling, waterproofing & handyman. Same-day slots.",
    faqs: [
      {
        q: "Do you handle brand-new condo handover defect lists in Kota Damansara?",
        a: "Yes. We produce a written defect list, fix hairline cracks, tighten hinges, patch skim-coat, adjust door alignment, and can liaise with the developer's QC team.",
      },
      {
        q: "Can you do a shoplot office conversion in The Strand?",
        a: "Yes. We handle gypsum partitions, glass door installs, lighting design, plumbing for pantry sinks and CCTV — usually within 2 to 4 weeks depending on scope.",
      },
      {
        q: "What is the typical wait for a Kota Damansara plumbing slot?",
        a: "Same-day for bookings before 11 AM, otherwise next-day for non-emergency work. Burst pipes and active leaks are always priority.",
      },
    ],
  },
  {
    slug: "ara-damansara",
    name: "Ara Damansara",
    shortName: "Ara Damansara",
    state: "Selangor",
    lat: 3.1092,
    lng: 101.5787,
    population: "80,000+ residents",
    landmarks: [
      "Citta Mall",
      "Evolve Concept Mall",
      "Oasis Ara Damansara",
      "Subang Jaya airport border",
      "Emerald Rawang",
      "Tropicana Aman border",
    ],
    description:
      "Ara Damansara combines modern lakeside condos with sought-after landed enclaves near Citta Mall and the LDP. KL Servis Rumah is a regular in the Oasis Ara Damansara commercial precinct as well as the surrounding condominiums — handling interior repaints, PU-grouting bathroom waterproofing, plaster ceiling repair after upstairs leaks, and full handyman visits for cabinet install, TV mounting and lighting upgrades. Same-day dispatch is standard for bookings before 11 AM.",
    metaTitle: "Ara Damansara Painting & Plumbing — KL Servis Rumah",
    metaDesc:
      "Painting, plumbing, ceiling & handyman services in Ara Damansara, Oasis, Citta Mall area & Evolve. Insured, fixed quotes, up to 5-year waterproofing warranty.",
    faqs: [
      {
        q: "Do you handle office fit-outs at Oasis Ara Damansara?",
        a: "Yes. We do painting, gypsum partitions, ceiling installs, lighting, small plumbing and CCTV for shoplot and office fit-outs in the Oasis precinct.",
      },
      {
        q: "Can you fix a leaking condo balcony in Ara Damansara?",
        a: "Yes. Balcony leaks are typically membrane failure — we test with ponding, seal cracks with acrylic or PU membrane, and provide up to 5-year written warranty.",
      },
      {
        q: "How long is the wait for a same-day plumber in Ara Damansara?",
        a: "Typical arrival is 45 to 75 minutes for same-day bookings placed before 11 AM.",
      },
    ],
  },
  {
    slug: "sunway",
    name: "Sunway",
    shortName: "Sunway",
    state: "Selangor",
    lat: 3.0733,
    lng: 101.6067,
    population: "180,000+ residents (Sunway + USJ area)",
    landmarks: [
      "Sunway Pyramid",
      "Sunway Lagoon",
      "Sunway University",
      "Bandar Sunway",
      "Sunway Geo",
      "Sunway South Quay",
    ],
    description:
      "Sunway spans the Sunway Pyramid entertainment precinct, Sunway University's student housing corridor, Sunway Geo commercial towers and Sunway South Quay lakeside residences. KL Servis Rumah supports the full mix: student-housing repaints and quick handyman visits, high-rise waterproofing for South Quay residences, PU grouting for older Bandar Sunway terraces, and light-commercial painting for Sunway Geo tenants. English/Malay/Mandarin speakers on the dispatch desk.",
    metaTitle: "Sunway Painter, Plumber & Handyman — KL Servis Rumah",
    metaDesc:
      "Home services in Sunway, Bandar Sunway, Sunway South Quay & Sunway Geo — painting, plumbing, ceiling, waterproofing & handyman. Insured, English/Mandarin speakers.",
    faqs: [
      {
        q: "Do you handle Sunway University area student-housing repaints?",
        a: "Yes. Landlord repaint packages start from RM 1,800 for a studio and include wall patching, primer, 2 coats and full cleanup.",
      },
      {
        q: "Can you do waterproofing for Sunway South Quay lakeside condos?",
        a: "Yes. Balcony and bathroom membrane refresh, PU grouting for concrete cracks, all with written 3 to 5-year warranty depending on scope.",
      },
      {
        q: "Do you provide invoices for Sunway Geo tenant fit-out claims?",
        a: "Yes. Full itemised invoice with SSM registration and GST-ready format for tenant-improvement claims.",
      },
    ],
  },
  {
    slug: "usj",
    name: "USJ",
    shortName: "USJ",
    state: "Selangor",
    lat: 3.0417,
    lng: 101.5806,
    population: "150,000+ residents",
    landmarks: [
      "Summit USJ",
      "USJ Taipan",
      "SS15 Subang",
      "USJ 21",
      "One City",
      "Main Place Mall",
    ],
    description:
      "USJ 1 through USJ 21 form one of Subang Jaya's largest terrace-home clusters, with USJ Taipan and Summit USJ as commercial anchors. KL Servis Rumah handles the full spectrum: repainting 25-year-old USJ terraces, replacing sagging plaster ceilings, PU grouting for double-storey bathroom leaks, rewiring of DB boxes for pre-2000 homes, and full handyman visits for growing families. Every quote is fixed and itemised before the first tool comes out.",
    metaTitle: "USJ Painting, Plumbing & Handyman — KL Servis Rumah",
    metaDesc:
      "Home services in USJ 1 to USJ 21, USJ Taipan & Summit USJ. Painting, plumbing, ceiling, waterproofing, electrical & handyman with fixed quotes.",
    faqs: [
      {
        q: "Do you cover all of USJ 1 to USJ 21?",
        a: "Yes. Every USJ neighbourhood is within our Subang Jaya dispatch zone with same-day availability.",
      },
      {
        q: "Can you rewire an old USJ terrace's DB box?",
        a: "Yes. Our ST-licensed electricians upgrade DB boxes, add MCBs and RCDs, and issue the appropriate compliance certificate.",
      },
      {
        q: "How much for a full USJ terrace exterior repaint?",
        a: "A double-storey USJ terrace exterior repaint typically runs RM 8,500 to RM 15,500 depending on scaffolding needs, primer condition and paint grade.",
      },
    ],
  },
  {
    slug: "putrajaya",
    name: "Putrajaya",
    shortName: "Putrajaya",
    state: "Selangor",
    lat: 2.9264,
    lng: 101.6964,
    population: "110,000+ residents",
    landmarks: [
      "Putrajaya Presint 1",
      "IOI City Mall",
      "Putrajaya Lake",
      "Precinct 8",
      "Precinct 11",
      "Precinct 16",
    ],
    description:
      "Putrajaya's government-linked residences and modern precincts (1, 8, 9, 11, 15, 16, 18) demand careful, professional home maintenance. KL Servis Rumah handles Putrajaya condo repaints, hillside slab leak PU grouting, gypsum partitions for growing home offices, ceiling fan and downlight installs, and comprehensive handyman visits. Our dispatch to Putrajaya covers Cyberjaya and Dengkil as one zone, and we use ID-verified crew for all government-quarters visits.",
    metaTitle: "Putrajaya Home Services — Painter, Plumber, Handyman",
    metaDesc:
      "Home services in Putrajaya Precinct 1, 8, 11 & 16. Painting, plumbing, ceiling, waterproofing & handyman with fixed quotes and 30-day to 5-year warranty.",
    faqs: [
      {
        q: "Do you work inside government-linked residential quarters in Putrajaya?",
        a: "Yes. Our crew carries ID and can be pre-registered with the residential quarters' management before every visit.",
      },
      {
        q: "Can you cover Putrajaya and Cyberjaya in the same dispatch zone?",
        a: "Yes. Same team, same-day slots and same pricing for Putrajaya, Cyberjaya and Dengkil.",
      },
      {
        q: "Do you install fibre-cement partitions for Putrajaya offices?",
        a: "Yes. Fire-rated gypsum partitions and fibre-cement partitions for office fit-outs — typically 1 to 3 weeks per project depending on scope.",
      },
    ],
  },
  {
    slug: "cyberjaya",
    name: "Cyberjaya",
    shortName: "Cyberjaya",
    state: "Selangor",
    lat: 2.9188,
    lng: 101.652,
    population: "80,000+ residents",
    landmarks: [
      "MMU",
      "Shaftsbury Square",
      "DPulze Shopping Centre",
      "Cyberjaya Lake Gardens",
      "Symphony Hills",
      "Garden Residence",
    ],
    description:
      "Cyberjaya's fast-growing residential precincts (Symphony Hills, Garden Residence, Emerald 9, Shaftsbury Square towers) share a common maintenance profile: modern build quality but frequent early-life defects — hairline plaster cracks, bathroom membrane touch-ups, door alignment. KL Servis Rumah covers all of them with fixed-quote handover defect fixes, interior repaints, waterproofing and handyman visits. English is our default working language for Cyberjaya customers.",
    metaTitle: "Cyberjaya Painter, Plumber & Handyman — KL Servis Rumah",
    metaDesc:
      "Home services in Cyberjaya including Symphony Hills, Garden Residence, Shaftsbury & MMU-area condos. Painting, plumbing, ceiling & handyman. Insured, English-speaking.",
    faqs: [
      {
        q: "Do you fix new-condo handover defects in Cyberjaya?",
        a: "Yes. We produce a written defect list, patch hairline cracks, adjust doors, fix skim-coat issues, and coordinate directly with the developer's QC team where needed.",
      },
      {
        q: "Can you support MMU-area student and staff housing?",
        a: "Yes. Landlord repaint packages, minor plumbing fixes, TV mounting and furniture assembly — all fixed-quote with same-day slots for bookings before 11 AM.",
      },
      {
        q: "Is English the default working language for Cyberjaya customers?",
        a: "Yes. Our project managers default to English for Cyberjaya jobs unless you prefer Malay or Mandarin.",
      },
    ],
  },
  {
    slug: "wangsa-maju",
    name: "Wangsa Maju",
    shortName: "Wangsa Maju",
    state: "Kuala Lumpur",
    lat: 3.2055,
    lng: 101.7318,
    population: "250,000+ residents",
    landmarks: [
      "Wangsa Walk",
      "Sri Rampai",
      "Setapak Central",
      "Taman Melati",
      "Genting Klang",
      "KL East",
    ],
    description:
      "KL Servis Rumah covers Wangsa Maju, Sri Rampai, Taman Melati and the Setapak corridor with same-day painting, plumbing, ceiling, waterproofing and handyman teams. Our crews are used to mature apartments, busy shoplots and terrace homes along Genting Klang where common jobs include low water pressure, ceiling stains from upstairs leaks, door alignment, interior repainting and downlight or fan replacement. We coordinate with management offices, protect lifts and common areas, and confirm market-rate pricing before any work begins.",
    metaTitle: "Wangsa Maju Home Services — Painter, Plumber & Handyman",
    metaDesc:
      "Painting, plumbing, ceiling repair, waterproofing and handyman services in Wangsa Maju, Sri Rampai & Taman Melati. Same-day KL dispatch.",
    faqs: [
      {
        q: "Do you cover Wangsa Maju apartments and shoplots?",
        a: "Yes. We cover apartments, condos, shoplots and terrace houses across Wangsa Maju, Sri Rampai, Taman Melati and Genting Klang.",
      },
      {
        q: "Can you fix ceiling leaks in Wangsa Maju condos?",
        a: "Yes. We diagnose the leak source, recommend PU grouting or plumbing repair where suitable, then restore the damaged ceiling board, skim coat and paint.",
      },
      {
        q: "Is same-day service available in Wangsa Maju?",
        a: "Yes, bookings before 11 AM are eligible for same-day slots, with urgent plumbing leaks prioritised.",
      },
    ],
  },
  {
    slug: "bukit-jalil",
    name: "Bukit Jalil",
    shortName: "Bukit Jalil",
    state: "Kuala Lumpur",
    lat: 3.0588,
    lng: 101.6919,
    population: "120,000+ residents",
    landmarks: [
      "Pavilion Bukit Jalil",
      "Bukit Jalil National Stadium",
      "Aurora Place",
      "Jalil Link",
      "Recreational Park",
      "Technology Park Malaysia",
    ],
    description:
      "Bukit Jalil has a fast-growing mix of new condominiums, landed homes and commercial suites around Pavilion Bukit Jalil. KL Servis Rumah supports handover touch-ups, full-unit repaints, PU grouting for bathroom or balcony leaks, plaster ceiling repair, electrical points, ceiling fan installation and handyman visits for TV mounting and furniture assembly. Our team follows condo/JMB work-hour rules and provides clean handover for occupied homes.",
    metaTitle: "Bukit Jalil Painter, Plumber & Handyman — KL Servis Rumah",
    metaDesc:
      "Home services in Bukit Jalil near Pavilion and Jalil Link: painting, plumbing, waterproofing, ceiling and handyman work with fixed quotes.",
    faqs: [
      {
        q: "Do you handle new condo defects in Bukit Jalil?",
        a: "Yes. We help with hairline crack repair, repainting, door alignment, plumbing fixture checks and ceiling touch-ups after vacant possession.",
      },
      {
        q: "Can you waterproof a Bukit Jalil balcony?",
        a: "Yes. We inspect drainage and membrane condition, then recommend crack sealing, PU injection or full waterproofing depending on the leak path.",
      },
      {
        q: "Do you install ceiling fans and lights in Bukit Jalil?",
        a: "Yes. Ceiling fan, downlight and basic electrical installation can be booked with transparent per-point pricing.",
      },
    ],
  },
  {
    slug: "desa-parkcity",
    name: "Desa ParkCity",
    shortName: "Desa ParkCity",
    state: "Kuala Lumpur",
    lat: 3.1864,
    lng: 101.6286,
    population: "30,000+ residents",
    landmarks: [
      "The Waterfront",
      "Plaza Arkadia",
      "Central Park",
      "ParkCity Club",
      "Westside",
      "South Brooks",
    ],
    description:
      "KL Servis Rumah provides premium, clean home maintenance for Desa ParkCity condos, landed homes and retail suites. Work in this area often requires careful floor protection, lift booking, quiet work hours and high finishing standards. We handle low-VOC repainting, plumbing fixture replacement, water leak diagnosis, ceiling board repair, cabinet and door adjustments, TV mounting and small electrical jobs with discreet, tidy teams.",
    metaTitle: "Desa ParkCity Home Services — Premium Painter & Handyman",
    metaDesc:
      "Premium painting, plumbing, ceiling, waterproofing and handyman services in Desa ParkCity, The Waterfront and Plaza Arkadia. Clean insured crews.",
    faqs: [
      {
        q: "Do you work in Desa ParkCity condos and landed homes?",
        a: "Yes. We regularly support both high-rise and landed properties, with lift/common-area protection for strata jobs.",
      },
      {
        q: "Can you do low-odor repainting in Desa ParkCity?",
        a: "Yes. We can specify low-VOC washable paint and schedule room-by-room repainting for occupied homes.",
      },
      {
        q: "Do you provide itemised quotes?",
        a: "Yes. Every Desa ParkCity job is quoted with clear scope, materials and warranty terms before work begins.",
      },
    ],
  },
  {
    slug: "taman-melawati",
    name: "Taman Melawati",
    shortName: "Melawati",
    state: "Kuala Lumpur",
    lat: 3.2112,
    lng: 101.7498,
    population: "90,000+ residents",
    landmarks: [
      "Melawati Mall",
      "Zoo Negara",
      "Bukit Tabur",
      "KL East",
      "Ukay Perdana",
      "Wangsa Maju border",
    ],
    description:
      "Taman Melawati properties often sit close to hillside humidity, heavy rain and mature plumbing systems. KL Servis Rumah handles exterior repainting, roof and slab leak checks, bathroom waterproofing, ceiling stain repair, pipe replacement and handyman jobs across Melawati, KL East and nearby Ukay Perdana. Our team prioritises waterproofing and drainage checks before cosmetic repainting so problems do not return after monsoon weather.",
    metaTitle: "Taman Melawati Painter, Plumber & Waterproofing Service",
    metaDesc:
      "Home services in Taman Melawati, KL East and Ukay Perdana: waterproofing, painting, plumbing, ceiling repair and handyman work.",
    faqs: [
      {
        q: "Do you handle hillside leak problems in Melawati?",
        a: "Yes. We inspect roof edges, balconies, concrete slabs and bathroom floors to identify rain-driven or inter-floor leaks.",
      },
      {
        q: "Can you repaint exterior walls in Taman Melawati?",
        a: "Yes. We recommend weatherproof coatings, anti-alkali sealer and crack treatment for exposed walls.",
      },
      {
        q: "Do you cover KL East condos?",
        a: "Yes. KL East and nearby Melawati high-rises are inside our same-day dispatch zone.",
      },
    ],
  },
  {
    slug: "bandar-utama",
    name: "Bandar Utama",
    shortName: "Bandar Utama",
    state: "Selangor",
    lat: 3.1486,
    lng: 101.615,
    population: "140,000+ residents",
    landmarks: [
      "1 Utama",
      "Centrepoint",
      "Bandar Utama MRT",
      "BU 1-12",
      "Taman Tun Dr Ismail border",
      "Kota Damansara border",
    ],
    description:
      "Bandar Utama homeowners book KL Servis Rumah for repainting, plumbing repairs, ceiling restoration, waterproofing and handyman work in mature landed homes, condos and retail units around 1 Utama. We are familiar with older terrace plumbing, roof-edge leaks, plaster ceiling cracks and rental-unit refresh jobs. Quotes are itemised, material choices are explained, and work areas are cleaned before handover.",
    metaTitle: "Bandar Utama Home Services — Painter, Plumber & Handyman",
    metaDesc:
      "Painting, plumbing, ceiling repair, waterproofing and handyman services in Bandar Utama near 1 Utama and Centrepoint. Fixed quotes.",
    faqs: [
      {
        q: "Do you cover BU landed homes and condos?",
        a: "Yes. We cover BU 1 through BU 12, 1 Utama surroundings and nearby TTDI/Kota Damansara borders.",
      },
      {
        q: "Can you refresh a rental unit in Bandar Utama?",
        a: "Yes. We can bundle repainting, minor plumbing, door/lock adjustments, ceiling patching and deep cleaning.",
      },
      {
        q: "Do you handle small handyman jobs?",
        a: "Yes. TV mounting, curtain rails, shelves, hinges and lock replacement are available with fixed pricing.",
      },
    ],
  },
  {
    slug: "ss2",
    name: "SS2",
    shortName: "SS2",
    state: "Selangor",
    lat: 3.1189,
    lng: 101.6237,
    population: "80,000+ residents",
    landmarks: [
      "SS2 Food Court",
      "SS2 Mall area",
      "Taman Bahagia",
      "Sea Park",
      "Damansara Jaya",
      "Kelana Jaya",
    ],
    description:
      "SS2 and Sea Park have many mature terrace homes and shoplots where recurring issues include old pipe leaks, damp walls, roof seepage, peeling exterior paint and aging plaster ceilings. KL Servis Rumah provides practical repairs and premium finishes: pipe replacement, leak diagnosis, interior/exterior repainting, ceiling board replacement, waterproofing and handyman visits. We can schedule work in phases for occupied family homes.",
    metaTitle: "SS2 Petaling Jaya Painter, Plumber & Handyman Service",
    metaDesc:
      "Home services in SS2, Sea Park and Taman Bahagia: plumbing leak repair, painting, ceiling, waterproofing and handyman work.",
    faqs: [
      {
        q: "Do you repair old pipes in SS2 terrace homes?",
        a: "Yes. We replace or reroute aging pipes using suitable SIRIM-grade fittings after leak diagnosis.",
      },
      {
        q: "Can you repaint older SS2 homes?",
        a: "Yes. We include surface preparation, crack patching, primer and two-coat finishing based on wall condition.",
      },
      {
        q: "Do you serve SS2 shoplots?",
        a: "Yes. Painting, plumbing, ceiling and small fit-out work for shoplots can be scheduled after hours where needed.",
      },
    ],
  },
  {
    slug: "setia-alam",
    name: "Setia Alam",
    shortName: "Setia Alam",
    state: "Selangor",
    lat: 3.1074,
    lng: 101.4473,
    population: "200,000+ residents",
    landmarks: [
      "Setia City Mall",
      "Setia Convention Centre",
      "Apartments around Setia Alam",
      "Eco Ardence",
      "Alam Nusantara",
      "Klang border",
    ],
    description:
      "Setia Alam combines newer landed neighbourhoods, apartments and commercial units that often need handover defects, repainting, waterproofing touch-ups, electrical additions and handyman installations. KL Servis Rumah handles full home refreshes, roof and balcony leak checks, plumbing fixture replacement, plaster ceiling work, TV mounting, curtains and furniture assembly across Setia Alam and Eco Ardence.",
    metaTitle: "Setia Alam Home Services — Painter, Plumber & Handyman",
    metaDesc:
      "Home services in Setia Alam and Eco Ardence: painting, plumbing, waterproofing, ceiling, electrical and handyman work. Transparent quotes.",
    faqs: [
      {
        q: "Do you cover Eco Ardence and Alam Nusantara?",
        a: "Yes. Both are within our Setia Alam dispatch zone.",
      },
      {
        q: "Can you handle new-home handover touch-ups?",
        a: "Yes. We fix hairline cracks, repaint, adjust doors and inspect leaks or plumbing fixture issues.",
      },
      {
        q: "Do you provide waterproofing warranty in Setia Alam?",
        a: "Yes. Full membrane waterproofing can carry written warranty depending on scope and site conditions.",
      },
    ],
  },
  {
    slug: "kota-kemuning",
    name: "Kota Kemuning",
    shortName: "Kota Kemuning",
    state: "Selangor",
    lat: 3.0015,
    lng: 101.5426,
    population: "120,000+ residents",
    landmarks: [
      "Gamuda Walk",
      "Kota Permai",
      "Canal Gardens",
      "Tropicana Aman",
      "Bukit Rimau",
      "Shah Alam border",
    ],
    description:
      "KL Servis Rumah serves Kota Kemuning, Bukit Rimau and nearby Tropicana Aman with landed-home maintenance and renovation support. Common jobs include exterior repainting, roof leak checks, bathroom waterproofing, plumbing fixture upgrades, plaster ceiling repair, electrical and ceiling fan installation, door/lock work and general handyman tasks. Our crews protect gardens, flooring and built-ins carefully during work.",
    metaTitle: "Kota Kemuning Painter, Plumber & Handyman — KL Servis Rumah",
    metaDesc:
      "Painting, plumbing, waterproofing, ceiling repair and handyman services in Kota Kemuning, Bukit Rimau and Tropicana Aman.",
    faqs: [
      {
        q: "Do you paint large landed homes in Kota Kemuning?",
        a: "Yes. We quote based on wall area, height, surface condition, primer needs and paint grade.",
      },
      {
        q: "Can you fix roof or balcony leaks?",
        a: "Yes. We inspect drainage, cracks and membrane condition before recommending repair or waterproofing.",
      },
      {
        q: "Do you cover Bukit Rimau?",
        a: "Yes. Bukit Rimau and nearby Shah Alam borders are covered from our Kota Kemuning dispatch zone.",
      },
    ],
  },
  {
    slug: "batu-caves",
    name: "Batu Caves",
    shortName: "Batu Caves",
    state: "Selangor",
    lat: 3.2379,
    lng: 101.684,
    population: "180,000+ residents",
    landmarks: [
      "Batu Caves Temple",
      "Taman Sri Gombak",
      "Gombak",
      "Selayang border",
      "Sentul border",
      "MRR2",
    ],
    description:
      "Batu Caves and Gombak homes often need practical repairs for damp walls, old plumbing, ceiling leaks and exterior paint exposed to dust and rain. KL Servis Rumah dispatches painters, plumbers, waterproofing technicians, ceiling teams and handymen across Batu Caves, Sri Gombak and MRR2 neighbourhoods. We quote transparently and prioritise urgent plumbing leaks or roof seepage before cosmetic works.",
    metaTitle: "Batu Caves Home Services — Painter, Plumber & Handyman",
    metaDesc:
      "Painting, plumbing, ceiling repair, waterproofing and handyman services in Batu Caves, Sri Gombak and Gombak. Same-day slots.",
    faqs: [
      {
        q: "Do you cover Sri Gombak?",
        a: "Yes. Sri Gombak, Batu Caves and nearby Gombak neighbourhoods are covered.",
      },
      {
        q: "Can you repair damp walls before repainting?",
        a: "Yes. We identify the water source first, then repair, seal and repaint with suitable primer.",
      },
      {
        q: "Do you accept urgent plumbing jobs?",
        a: "Yes. Burst pipes and active leaks are prioritised for same-day dispatch.",
      },
    ],
  },
  {
    slug: "selayang",
    name: "Selayang",
    shortName: "Selayang",
    state: "Selangor",
    lat: 3.2423,
    lng: 101.653,
    population: "200,000+ residents",
    landmarks: [
      "Selayang Mall",
      "Selayang Hospital",
      "Taman Selayang",
      "Batu Caves border",
      "Rawang road",
      "FRIM Kepong border",
    ],
    description:
      "KL Servis Rumah covers Selayang homes, apartments, clinics, shoplots and landed properties with reliable painting, plumbing, ceiling repair, waterproofing and handyman work. Common Selayang jobs include leaking bathrooms, roof seepage, old terrace repainting, water heater replacement, ceiling fan installation and door/lock repair. Our teams carry common fittings and materials to complete many repairs in one visit.",
    metaTitle: "Selayang Painter, Plumber & Handyman Service",
    metaDesc:
      "Home services in Selayang: painting, plumbing leaks, waterproofing, ceiling repair, water heater, ceiling fan and handyman work.",
    faqs: [
      {
        q: "Do you serve Selayang apartments and landed homes?",
        a: "Yes. We cover apartments, terrace homes, shoplots and light-commercial units in Selayang.",
      },
      {
        q: "Can you replace water heaters in Selayang?",
        a: "Yes. Water heater replacement and installation includes safety checks and proper fittings.",
      },
      {
        q: "Is waterproofing available for roof seepage?",
        a: "Yes. We inspect roof tiles, flashing, gutters and slab cracks before recommending repair.",
      },
    ],
  },
  {
    slug: "rawang",
    name: "Rawang",
    shortName: "Rawang",
    state: "Selangor",
    lat: 3.3213,
    lng: 101.5767,
    population: "300,000+ residents",
    landmarks: [
      "AEON Rawang",
      "Anggun City",
      "Emerald Rawang",
      "Rawang town",
      "Kundang",
      "Selayang border",
    ],
    description:
      "Rawang's growing landed communities and older town areas require dependable maintenance — from exterior repainting and roof leak repair to plumbing, waterproofing, ceiling repair and handyman installations. KL Servis Rumah covers Rawang, Emerald Rawang, Anggun City and Kundang with itemised quotes, material guidance and scheduled dispatch for non-urgent work. Active leaks receive priority triage.",
    metaTitle: "Rawang Home Services — Painter, Plumber & Waterproofing",
    metaDesc:
      "Painting, plumbing, ceiling repair, waterproofing and handyman services in Rawang, Emerald Rawang, Anggun City and Kundang.",
    faqs: [
      {
        q: "Do you cover Emerald Rawang and Anggun City?",
        a: "Yes. Both areas are covered under our Rawang dispatch zone.",
      },
      {
        q: "Can you repaint larger Rawang landed homes?",
        a: "Yes. We handle interior and exterior repainting with proper surface prep and weatherproof paint options.",
      },
      {
        q: "Do you provide same-day emergency leak help?",
        a: "Where crew availability allows, active plumbing or roof leaks are prioritised for urgent dispatch.",
      },
    ],
  },
  {
    slug: "sungai-buloh",
    name: "Sungai Buloh",
    shortName: "Sungai Buloh",
    state: "Selangor",
    lat: 3.2097,
    lng: 101.5618,
    population: "250,000+ residents",
    landmarks: [
      "Sungai Buloh MRT",
      "Kampung Baru Sungai Buloh",
      "Bukit Rahman Putra",
      "Kota Damansara border",
      "Damansara Damai",
      "Subang Bestari",
    ],
    description:
      "KL Servis Rumah provides home maintenance across Sungai Buloh, Bukit Rahman Putra, Damansara Damai and nearby Subang Bestari. We handle repainting, waterproofing, plumbing repair, roof seepage checks, plaster ceiling restoration, door/lock work, TV mounting and general handyman visits for landed homes, condos and shoplots. WhatsApp photos help us route the right technician faster.",
    metaTitle: "Sungai Buloh Painter, Plumber & Handyman — KL Servis Rumah",
    metaDesc:
      "Home services in Sungai Buloh, Bukit Rahman Putra and Damansara Damai: painting, plumbing, waterproofing, ceiling and handyman.",
    faqs: [
      {
        q: "Do you cover Bukit Rahman Putra?",
        a: "Yes. Bukit Rahman Putra, Damansara Damai and Subang Bestari are included in our Sungai Buloh coverage.",
      },
      {
        q: "Can you repair roof leaks in Sungai Buloh homes?",
        a: "Yes. We inspect tiles, flashing, gutters, concrete slabs and ceiling damage before proposing repair.",
      },
      {
        q: "Do you offer handyman work?",
        a: "Yes. Door repair, lock replacement, TV mounting, curtain rails, furniture assembly and shelf installation are available.",
      },
    ],
  },
  {
    slug: "semenyih",
    name: "Semenyih",
    shortName: "Semenyih",
    state: "Selangor",
    lat: 2.9516,
    lng: 101.843,
    population: "120,000+ residents",
    landmarks: [
      "Eco Majestic",
      "Setia EcoHill",
      "Semenyih town",
      "Kajang border",
      "Beranang",
      "Semenyih Lake",
    ],
    description:
      "Semenyih has many newer landed homes and growing townships where homeowners need repainting, defect touch-ups, waterproofing, plumbing, ceiling fan installation, gypsum partitions and handyman support after handover. KL Servis Rumah covers Semenyih, Eco Majestic, Setia EcoHill and Beranang with scheduled visits, transparent pricing and workmanship warranty terms.",
    metaTitle: "Semenyih Home Services — Painter, Plumber & Handyman",
    metaDesc:
      "Painting, plumbing, waterproofing, ceiling and handyman services in Semenyih, Eco Majestic and Setia EcoHill. Fixed quotes.",
    faqs: [
      {
        q: "Do you cover Eco Majestic and Setia EcoHill?",
        a: "Yes. Both are core Semenyih coverage areas.",
      },
      {
        q: "Can you help with new-house handover defects?",
        a: "Yes. We fix paint, wall cracks, doors, plumbing fixtures, ceilings and minor electrical items.",
      },
      {
        q: "Do you provide warranties?",
        a: "Yes. Warranty depends on the service type and is recorded on the invoice.",
      },
    ],
  },
  {
    slug: "seri-kembangan",
    name: "Seri Kembangan",
    shortName: "Seri Kembangan",
    state: "Selangor",
    lat: 3.0216,
    lng: 101.7055,
    population: "250,000+ residents",
    landmarks: [
      "The Mines",
      "South City Plaza",
      "UPM",
      "Equine Park",
      "Taman Universiti Indah",
      "Balakong border",
    ],
    description:
      "Seri Kembangan sits between mature neighbourhoods, student housing, shoplots and newer landed communities around Equine Park. KL Servis Rumah provides painting, plumbing, ceiling, waterproofing, electrical and handyman services across The Mines, UPM, Equine Park and Taman Universiti Indah. We can handle landlord refreshes, bathroom leaks, ceiling stains, pipe repairs, TV mounting and furniture assembly with fixed itemised quotes.",
    metaTitle: "Seri Kembangan Painter, Plumber & Handyman Service",
    metaDesc:
      "Home services in Seri Kembangan, The Mines, UPM and Equine Park: painting, plumbing, ceiling, waterproofing and handyman work.",
    faqs: [
      {
        q: "Do you cover Equine Park and The Mines area?",
        a: "Yes. Equine Park, The Mines, UPM surroundings and Taman Universiti Indah are covered.",
      },
      {
        q: "Can you refresh rental units in Seri Kembangan?",
        a: "Yes. Repainting, plumbing fixes, lock replacement, furniture assembly and cleaning can be bundled for landlords.",
      },
      {
        q: "Do you provide transparent pricing?",
        a: "Yes. Pricing is confirmed before work starts with no hidden charges.",
      },
    ],
  },
  {
    slug: "pandan-indah",
    name: "Pandan Indah",
    shortName: "Pandan Indah",
    state: "Selangor",
    lat: 3.1345,
    lng: 101.7517,
    population: "150,000+ residents",
    landmarks: [
      "Pandan Indah",
      "Pandan Jaya",
      "Ampang border",
      "Cahaya LRT",
      "Taman Cempaka",
      "Maluri border",
    ],
    description:
      "KL Servis Rumah serves Pandan Indah, Pandan Jaya and nearby Ampang/Cheras borders with practical home repairs and finishing work. Common requests include bathroom leaks, clogged drains, old pipe replacement, plaster ceiling repair, repainting, door and lock issues, ceiling fan installation and TV wall mounting. Our teams work cleanly in apartments, shoplots and landed homes.",
    metaTitle: "Pandan Indah Home Services — Plumber, Painter & Handyman",
    metaDesc:
      "Painting, plumbing, waterproofing, ceiling repair and handyman services in Pandan Indah, Pandan Jaya and Ampang borders.",
    faqs: [
      {
        q: "Do you cover Pandan Jaya too?",
        a: "Yes. Pandan Jaya, Pandan Indah, Taman Cempaka and nearby Ampang/Cheras borders are covered.",
      },
      {
        q: "Can you clear clogged drains?",
        a: "Yes. We diagnose kitchen, bathroom and floor-trap blockages before clearing and advising prevention.",
      },
      {
        q: "Do you repair ceiling stains?",
        a: "Yes. We first identify the leak source, then replace damaged board, skim coat and repaint.",
      },
    ],
  },
  {
    slug: "sentul",
    name: "Sentul",
    shortName: "Sentul",
    state: "Kuala Lumpur",
    lat: 3.1857,
    lng: 101.6917,
    population: "200,000+ residents",
    landmarks: [
      "Sentul Depot",
      "Sentul East",
      "Sentul West",
      "KLPAC",
      "Jalan Ipoh",
      "Titiwangsa border",
    ],
    description:
      "Sentul properties range from older walk-up apartments and shoplots to newer condos around Sentul East and Sentul West. KL Servis Rumah provides painting, plumbing, ceiling repair, waterproofing, electrical and handyman work with careful building-management coordination for high-rises and practical scheduling for older blocks. We commonly handle pipe leaks, repainting, ceiling stains, lock replacement, TV mounting and fan installation in Sentul.",
    metaTitle: "Sentul Painter, Plumber & Handyman — KL Servis Rumah",
    metaDesc:
      "Home services in Sentul East, Sentul West and Jalan Ipoh: painting, plumbing, ceiling repair, waterproofing and handyman work.",
    faqs: [
      {
        q: "Do you cover Sentul East and Sentul West condos?",
        a: "Yes. We coordinate contractor registration, lift booking and work-hour rules with management offices.",
      },
      {
        q: "Can you work in older Sentul apartments?",
        a: "Yes. We handle old plumbing, damp walls, ceiling repairs and repainting in mature apartments and shoplots.",
      },
      {
        q: "Is same-day plumbing available?",
        a: "Yes, urgent leaks are prioritised and same-day slots are available when booked early.",
      },
    ],
  },
];
export const areas = areaPages.map((a) => a.name);
export const areaSlugs = areaPages.map((a) => a.slug);
