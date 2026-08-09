export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "KL Servis Rumah",
  shortName: "KLSR",
  parentCompany: "Multicore Dynamics Resources",
  legalName: "Multicore Dynamics Resources",
  ssm: "003765188-T",
  ssmFull: "202503227236 (003765188-T)",
  tagline: "Painting & Ceiling Services KL & Selangor",
  description:
    "KL Servis Rumah provides professional home maintenance including house painting, plaster ceiling repair, gypsum partition setup, plumbing leak repairs, waterproofing, door and lock repairs, TV mounting, and handyman services across Kuala Lumpur & Selangor. Same-day service is available, with fully insured operations, background-verified teams, and honest fixed prices confirmed in writing before work begins. Serving Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Damansara, Klang, Cheras, Ampang, Kajang, Bangsar, Mont Kiara, Setapak, Wangsa Maju, Kepong, Sri Petaling, Bukit Jalil, Kota Damansara, Ara Damansara, Sunway, USJ, Port Klang, Bukit Tinggi, Setia Alam, Rawang, Semenyih, Balakong, Seri Kembangan, Pandan Indah, Putrajaya, Cyberjaya & Dengkil.",
  metaDescription:
    "Professional painting, ceiling & partition, plumbing, waterproofing and handyman services across Kuala Lumpur & Selangor. Get a clear quote on WhatsApp.",
  url: "https://www.klservisrumah.my",

  phone: "+601116627349",
  phoneDisplay: "+60 11-1662 7349",
  whatsapp: "601116627349",
  whatsappLink: "https://wa.me/601116627349?text=Hi%20KL%20Servis%20Rumah,%20I%20want%20to%20book%20a%20home%20service%20for%20my%20property.",
  // Official WhatsApp brand colors (brand.whatsapp.com) — used for every
  // WhatsApp CTA across the site so they always match the app recognisably.
  whatsappColors: {
    green: "#25D366", // WhatsApp Green — primary button background
    teal: "#128C7E", // Teal Green — hover state
    darkGreen: "#075E54", // Dark Green — deep accents (rings, deep shadows)
  },
  email: "info@klservisrumah.my",
  address: "Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
  addressStreet: "Jalan Kiara, Mont Kiara",
  addressCity: "Kuala Lumpur",
  addressPostal: "50480",
  addressState: "Wilayah Persekutuan Kuala Lumpur",
  addressCountry: "MY",
  geoLat: 3.1670,
  geoLng: 101.6520,
  foundingDate: "2014",
  numberOfEmployees: 10,
  hours: "Mon–Sun · 9:00 AM – 6:00 PM (Everyday Open)",
  // Kept for compatibility with map consumers; directs to the correct KL Servis Rumah business profile.
  googleMapsEmbed: "https://share.google/7GZef2rDjtRuqW2h1",
  googleBusinessProfile: "https://share.google/7GZef2rDjtRuqW2h1",
  reviewCount: 120,
  reviewRating: 4.9,
  reviewLastUpdated: "2026-07-23",
  // Transparent PNG for on-page use; JPG/OG variants are pre-composited on white
  // because social platforms and Schema.org consumers do not honour alpha.
  logo: "/logo/logo.png",
  logoIcon: "/logo/logo-icon.png",
  defaultOgImage: "/logo/og-image.jpg",

  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Areas", href: "/areas" },
    { label: "Problems", href: "/problems" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],

  areas: [
    "Kuala Lumpur", "Cheras", "Ampang", "Setapak", "Wangsa Maju",
    "Kepong", "Sri Petaling", "Bukit Jalil", "Mont Kiara", "Bangsar",
    "Desa ParkCity", "Taman Melawati", "Hulu Kelang",
    "Petaling Jaya", "Subang Jaya", "Shah Alam", "Puchong", "Damansara",
    "Kota Damansara", "Ara Damansara", "Sunway", "USJ", "Bandar Utama", "SS2",
    "Klang", "Port Klang", "Bukit Tinggi", "Setia Alam", "Meru",
    "Kota Kemuning", "Bukit Jelutong", "Glenmarie",
    "Batu Caves", "Selayang", "Rawang", "Kundang", "Sungai Buloh",
    "Kajang", "Semenyih", "Balakong", "Seri Kembangan", "Pandan Indah",
    "Bandar Puteri", "Putrajaya", "Cyberjaya", "Dengkil",
    "Selangor", "Sentul", "Bandar Botanic"
  ],

  // Brands supported/worked with
  brandsSupported: [
    "Nippon Paint", "Dulux", "Jotun", "Kansai Paint", "ICI Paints",
    "Kohler", "American Standard", "Grohe", "Ruba", "Johnson Suisse",
    "Simmons", "Panasonic", "Matsushita", "Rubine", "Midea",
    "LG", "Samsung", "Sharp", "Toshiba", "Daikin"
  ],

  // Service type categories
  serviceTypes: [
    "House Painting",
    "Plumbing Repair & Installation",
    "Plaster Ceiling & Gypsum Partition",
    "Waterproofing & PU Grouting",
    "Handyman Services",
    "Electrical Wiring & Installation",
    "Water Heater Installation",
    "Ceiling Fan & Downlight Installation",
    "Tiling & Flooring",
    "Kitchen Cabinet & Carpentry",
    "Door & Lock Repair",
    "CCTV & Auto Gate Installation",
    "Roof Repair & Maintenance",
    "Full House Renovation"
  ],

  knowsAbout: [
    "Interior Painting",
    "Exterior Painting",
    "Plumbing Leak Repair",
    "Pipe Replacement",
    "Plaster Ceiling Repair",
    "Gypsum Partition Installation",
    "L-Box Ceiling Design",
    "PU Grouting Waterproofing",
    "Bathroom Waterproofing",
    "TV Wall Mounting",
    "Furniture Assembly",
    "Fence & Gate Repair",
    "Window & Door Installation",
    "Toilet Bowl Repair",
    "Water Heater Installation",
    "Ceiling Fan Wiring",
    "Downlight Installation",
    "Epoxy Flooring",
    "Vinyl/SPC Flooring",
    "Roof Leak Repair",
    "Kitchen Cabinet Installation",
    "Full House Renovation"
  ],

  areaPages: [],

  stats: [
    { label: "Completed Projects", value: "1,200+" },
    { label: "Experienced Craftsmen", value: "15+ Pros" },
    { label: "Google Rating", value: "4.9 / 5.0" },
    { label: "Warranty Coverage", value: "30 Days+" }
  ],

  links: {
    whatsapp: "https://wa.me/601116627349",
    facebook: "https://www.facebook.com/share/1HFzAa3AdZ/",
    instagram: "https://www.instagram.com/klservisrumah?igsh=MXd5d21rcTdtajRrcg==",
    // Verified KL Servis Rumah Google Business Profile (replaces the old
    // short link that resolved to the unrelated KLRenovator presence).
    googleMaps: "https://share.google/7GZef2rDjtRuqW2h1",
    googleBusiness: "https://share.google/7GZef2rDjtRuqW2h1"
  }
};
