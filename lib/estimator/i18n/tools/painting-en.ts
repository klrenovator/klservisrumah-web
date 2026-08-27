import type { MessageDictionary } from "../../../i18n";

export const paintingEnDict: MessageDictionary = {
  meta: {
    name: "Painting Cost Calculator",
    resultLabel: "Estimated painting cost"
  },
  steps: {
    paintingType: {
      title: "What do you want to paint?",
      subtitle: "Choose Walls Only, Ceiling Only, or Walls + Ceiling — calculation changes instantly."
    },
    roomSize: {
      title: "How big is the room?",
      subtitle: "Pick a preset or enter custom dimensions — no measuring tape needed."
    },
    ceilingHeight: {
      title: "Ceiling height?",
      subtitle: "Needed only when walls are included. Hidden for Ceiling Only."
    },
    scope: {
      title: "What do you want to paint?",
      subtitle: "Pick the surface, item or property type — we price each differently."
    },
    area: {
      title: "How big is the area?",
      subtitle: "Tap a common size — no measuring tape needed."
    },
    condition: {
      title: "What condition is the surface in?",
      subtitle: "Preparation is what makes paint last — be honest here for an accurate number."
    },
    paint: {
      title: "Which paint system do you want?",
      subtitle: "We use genuine Nippon, Dulux and Jotun products across every grade."
    },
    colour: {
      title: "What colour direction?",
      subtitle: "Colour affects coverage — dark shades usually need an extra coat."
    },
    access: {
      title: "How easy is site access?",
      subtitle: "Height and access drive the safety equipment we bring."
    },
    urgency: {
      title: "When do you need it done?",
      subtitle: "Standard scheduling keeps the price lowest."
    }
  },
  fields: {
    paintingType: {
      label: "Painting type",
      help: "Walls Only = 2×(L+W)×H, Ceiling Only = L×W, Walls+Ceiling = both"
    },
    roomSize: { label: "Room size" },
    roomPreset: { label: "Room size" },
    paintingArea: { label: "Painting area" },
    customLength: { label: "Length" },
    customWidth: { label: "Width" },
    customHeight: { label: "Ceiling height" },
    ceilingHeight: { label: "Ceiling height", help: "Standard Malaysian ceiling is 10 ft. Hidden when you select Ceiling Only." },
    target: {
      label: "Painting scope",
      help: "Choose the closest match. You can add more scopes on WhatsApp after the estimate."
    },
    propertySize: { label: "Property built-up size" },
    itemCount: { label: "How many units?" },
    condition: { label: "Overall surface condition" },
    extraPrep: { label: "Any extra preparation needed?", help: "Optional — select all that apply." },
    grade: { label: "Paint grade" },
    features: { label: "Paint features you want", help: "Optional — each feature is matched to a real product line." },
    paintSupply: { label: "Who supplies the paint?" },
    colour: { label: "Colour preference" },
    access: { label: "Access level" },
    urgency: { label: "Preferred timing" }
  },
  paintingTypes: {
    "walls-only": {
      label: "Walls Only",
      service: "Interior Wall Repainting",
      hint: "2 × (Length + Width) × Height",
      note: "Two topcoats over sealed walls"
    },
    "ceiling-only": {
      label: "Ceiling Only",
      service: "Ceiling Repainting",
      hint: "Length × Width — height not needed",
      note: "For ceiling stains and discolouration"
    },
    "walls-ceiling": {
      label: "Walls + Ceiling",
      service: "Full Room Repainting — Walls + Ceiling",
      hint: "Wall area + ceiling area",
      note: "Most popular for full refresh"
    }
  },
  roomPresets: {
    "10x10": { label: "10 × 10 ft", hint: "Small bedroom · 100 sq ft floor · 40% of KL rooms" },
    "12x12": { label: "12 × 12 ft", hint: "Standard bedroom · 144 sq ft floor" },
    "12x15": { label: "12 × 15 ft", hint: "Master bedroom · 180 sq ft floor" },
    "15x15": { label: "15 × 15 ft", hint: "Large hall · 225 sq ft floor" },
    "20x20": { label: "20 × 20 ft", hint: "Open-plan area · 400 sq ft floor" },
    custom: { label: "Custom size", hint: "Enter your own length and width" },
    "8x8": { hint: "Small bedroom / store" },
    "8x10": { hint: "Single bedroom" },
    "10x10_old": { hint: "Standard bedroom" },
    "10x12": { hint: "Master bedroom" },
    "12x12_old": { hint: "Large bedroom" },
    "12x15_old": { hint: "Living hall" },
    "15x15_old": { hint: "Large hall" },
    "20x20_old": { hint: "Open-plan area" }
  },
  targets: {
    "interior-walls": {
      label: "Interior Walls",
      service: "Interior Wall Repainting",
      note: "Two topcoats over a sealed, patched surface."
    },
    ceiling: { label: "Ceiling", service: "Ceiling Repainting" },
    "single-room": { label: "Whole Room (walls + ceiling)", service: "Room Repainting Package" },
    "feature-wall": { label: "Feature / Accent Wall", service: "Accent Wall Painting" },
    staircase: { label: "Staircase Wall / Void", service: "High-Void Staircase Painting" },
    "exterior-walls": { label: "Outdoor / Exterior Walls", service: "Exterior Weatherproof Painting" },
    "boundary-wall": { label: "Boundary / Perimeter Wall", service: "Boundary Wall Painting" },
    roof: { label: "Roof / Roof Coating", service: "Roof Coating & Heat-Reflective Painting" },
    "car-porch": { label: "Car Porch / Awning", service: "Car Porch Repainting" },
    doors: { label: "Doors", service: "Door Refinishing", noun: "door" },
    windows: { label: "Windows / Frames", service: "Window Frame Repainting", noun: "window" },
    "main-gate": { label: "Main Gate", service: "Gate Rust Treatment & Repaint", noun: "gate leaf" },
    "metal-fence": { label: "Metal Fence / Grille", service: "Metal Grille & Fence Painting" },
    "wooden-fence": { label: "Wooden Fence / Pergola", service: "Timber Fence Staining & Painting" },
    "stair-railing": { label: "Stair Railings", service: "Railing Repaint", noun: "railing run (10 ft)" },
    "steel-structure": { label: "Steel Structure / Awning Frame", service: "Structural Steel Protective Coating" },
    cabinets: { label: "Cabinets (general)", service: "Cabinet Respray & Refinishing", noun: "cabinet door" },
    "kitchen-cabinets": { label: "Kitchen Cabinets", service: "Kitchen Cabinet Refinishing", noun: "cabinet door" },
    wardrobes: { label: "Wardrobes", service: "Wardrobe Refinishing", noun: "wardrobe door" },
    apartment: { label: "Apartment — full interior", service: "Full Apartment Repainting" },
    condominium: {
      label: "Condominium — full interior",
      service: "Full Condo Repainting",
      note: "Includes lift protection and management work-hour compliance."
    },
    "landed-house": { label: "Landed House — full interior", service: "Full House Interior Repainting" },
    "landed-exterior": { label: "Landed House — full exterior", service: "Full Exterior House Painting" },
    office: {
      label: "Office",
      service: "Commercial Office Painting",
      note: "After-hours or weekend scheduling available to avoid downtime."
    },
    "shop-lot": { label: "Shop Lot", service: "Shop Lot Painting" },
    "commercial-building": {
      label: "Commercial Building",
      service: "Commercial Building Painting",
      note: "Facade access method confirmed on site."
    },
    factory: { label: "Factory", service: "Factory Painting & Coating" },
    warehouse: { label: "Warehouse", service: "Warehouse Painting & Line Marking" }
  },
  areaPresets: {
    "8x8": { hint: "Small bedroom / store" },
    "8x10": { hint: "Single bedroom" },
    "10x10": { hint: "Standard bedroom" },
    "10x12": { hint: "Master bedroom" },
    "12x12": { hint: "Large bedroom" },
    "12x15": { hint: "Living hall" },
    "15x15": { hint: "Large hall" },
    "20x20": { hint: "Open-plan area" },
    custom: { label: "Custom size", hint: "Enter your own measurements" },
    ceilingSuffix: "ceiling",
    roomWallsAndCeiling: "{label} room at {height} ft height — walls + ceiling",
    roomWallSurface: "{label} room at {height} ft height — wall surface",
    presetCeiling: "{label} ceiling"
  },
  propertySizes: {
    "600": { label: "Up to 600 sq ft", hint: "Studio / small apartment" },
    "900": { label: "600 – 900 sq ft", hint: "2-bedroom condo" },
    "1200": { label: "900 – 1,200 sq ft", hint: "3-bedroom condo" },
    "1600": { label: "1,200 – 1,600 sq ft", hint: "Terrace house" },
    "2200": { label: "1,600 – 2,200 sq ft", hint: "2-storey terrace" },
    "3000": { label: "2,200 – 3,000 sq ft", hint: "Semi-D / bungalow" },
    "4500": { label: "3,000 – 4,500 sq ft", hint: "Large bungalow / shop lot" },
    "8000": { label: "Above 4,500 sq ft", hint: "Commercial / industrial" }
  },
  conditions: {
    "new-wall": { label: "New wall (never painted)", hint: "Needs sealer primer only" },
    excellent: { label: "Excellent — smooth & clean", hint: "Straight repaint" },
    good: { label: "Good — minor marks", hint: "Light sanding and patching" },
    "previously-painted": { label: "Previously painted, sound", hint: "Standard overcoat" },
    "old-wall": { label: "Old wall, chalky finish", hint: "Needs binding primer" },
    "minor-cracks": { label: "Minor hairline cracks", hint: "Filler and spot skim" },
    "heavy-cracks": { label: "Heavy / structural cracks", hint: "Route, fill and reinforce" },
    peeling: { label: "Peeling / flaking paint", hint: "Scrape back to sound substrate" },
    "water-damage": { label: "Water damage / stains", hint: "Stain block plus source check" },
    mould: { label: "Mould / fungus growth", hint: "Fungicidal wash before coating" },
    uneven: { label: "Uneven / wavy surface", hint: "Levelling compound" },
    "bare-cement": { label: "Bare cement / plaster", hint: "Full primer system" },
    "rusty-metal": { label: "Rusty metal surface", hint: "De-rust plus anti-rust primer" }
  },
  extraPrep: {
    "skim-coat": { label: "Requires skim coat", hint: "Full-surface levelling for a glass-smooth finish" },
    waterproofing: { label: "Requires waterproofing", hint: "Damp or leaking wall must be sealed first" },
    "mould-treatment": { label: "Mould treatment", hint: "Fungicidal wash and anti-fungal primer" },
    "crack-repair": { label: "Crack routing & filling", hint: "Structural or settlement cracks" },
    "wallpaper-removal": { label: "Wallpaper / old coating removal", hint: "Strip back before painting" },
    "furniture-shift": { label: "Heavy furniture shifting", hint: "Move and re-position large items" }
  },
  grades: {
    economy: { label: "Economy", hint: "Budget emulsion, 2 coats" },
    standard: { label: "Standard", hint: "Nippon / Dulux mid range" },
    premium: { label: "Premium", hint: "Washable, stain-resistant range" },
    luxury: { label: "Luxury", hint: "Top-tier finish, designer colours" }
  },
  features: {
    "low-voc": { label: "Low VOC" },
    odourless: { label: "Odourless" },
    washable: { label: "Washable / scrub-resistant" },
    "anti-mould": { label: "Anti-mould" },
    "weather-resistant": { label: "Weather resistant" },
    "premium-exterior": { label: "Premium exterior system" },
    "heat-reflective": { label: "Heat reflective" },
    "anti-rust": { label: "Anti-rust / metal primer" }
  },
  colours: {
    same: { label: "Same colour", hint: "Straight refresh, best coverage" },
    light: { label: "Light colour", hint: "Standard 2-coat coverage" },
    dark: { label: "Dark colour", hint: "Usually needs a third coat" },
    multiple: { label: "Multiple colours", hint: "Extra masking and cut-in time" },
    accent: { label: "Accent wall feature", hint: "One highlighted wall" }
  },
  access: {
    easy: { label: "Easy access — ground floor", hint: "Standard ladder work" },
    "first-floor": { label: "First floor", hint: "Light staging" },
    "second-floor": { label: "Second floor", hint: "Extended ladders" },
    "high-rise": { label: "High rise unit", hint: "Lift booking and floor protection" },
    scaffold: { label: "Requires scaffold", hint: "Scaffold erection and dismantling" },
    "rope-access": { label: "Requires rope access", hint: "Certified abseil crew" },
    difficult: { label: "Difficult / tight access", hint: "Restricted working space" }
  },
  urgency: {
    standard: { label: "Standard schedule", hint: "Next available slot" },
    "7-days": { label: "Within 7 days", hint: "Priority scheduling" },
    urgent: { label: "Urgent — 48 hours", hint: "Crew reshuffled for you" },
    emergency: { label: "Emergency / same day", hint: "Immediate dispatch" }
  },
  paintSupply: {
    include: { label: "Include paint in the quote", hint: "We buy and deliver" },
    customer: { label: "I will supply the paint", hint: "Labour and consumables only" }
  },
  basis: {
    item: "{count} × {noun} (≈ {perItem} sq ft painted face each)",
    unitFallback: "unit",
    property: "{sqft} sq ft built-up × {factor} paintable-surface factor",
    customCeiling: "{length} × {width} ft ceiling",
    customRoomBoth: "{length} × {width} ft room, {height} ft ceiling — walls + ceiling",
    customRoomWalls: "{length} × {width} ft room, {height} ft ceiling — wall surface",
    newWallsOnly: "{length} × {width} ft × {height} ft — walls {wall} sq ft using 2 × (L+W) × H",
    newCeilingOnly: "{length} × {width} ft — ceiling {ceiling} sq ft using L × W",
    newWallsCeiling: "{length} × {width} ft × {height} ft — walls {wall} + ceiling {ceiling} = {total} sq ft"
  },
  durations: {
    halfDay: "Half day (3–4 hours)",
    oneDay: "1 working day",
    oneTwoDays: "1–2 working days",
    twoThreeDays: "2–3 working days",
    fourFiveDays: "4–5 working days",
    oneWeek: "About 1 working week",
    oneTwoWeeks: "1–2 working weeks",
    weeks: "About {n} working weeks"
  },
  packages: {
    luxury: "Luxury Finish Package",
    premium: "Premium Protection Package",
    economy: "Value Refresh Package",
    standard: "Standard Repaint Package"
  },
  formats: {
    itemCountOne: "{value} unit",
    itemCountMany: "{value} units"
  },
  bands: { interior: "interior", exterior: "exterior" },
  breakdown: {
    paintingType: "Painting type",
    roomDimensions: "Room dimensions",
    paintedArea: "Painted area",
    totalArea: "Total paintable area",
    wallArea: "Wall area",
    ceilingArea: "Ceiling area",
    paintQuantity: "Paint quantity needed",
    paintQuantityValue: "{litres} litres for {coats} coats",
    paintQuantityNote: "~{area} sq ft × {coats} coats ÷ {coverage} sq ft per litre incl. 10% wastage",
    paintedAreaValue: "{area} sq ft",
    appliedRate: "Applied rate",
    appliedRateValue: "RM {rate} / sq ft",
    appliedRateNote: "Published band RM {low}–RM {high} / sq ft for {band} work",
    skimCoat: "Skim coat preparation",
    skimCoatNote: "{area} sq ft × published RM {rate} / sq ft skim-coat rate",
    crack: "Crack routing & filling",
    crackNote: "≈ {linearFt} linear ft × published RM {rate} / linear ft",
    damp: "Damp / waterproofing remedial",
    dampNote: "Published wall dampness & efflorescence repair rate",
    mould: "Mould treatment",
    mouldNote: "Fungicidal wash and anti-fungal primer",
    wallpaper: "Old coating / wallpaper removal",
    wallpaperNote: "Strip-back labour before priming",
    furniture: "Furniture shifting & protection",
    furnitureNote: "Published handyman task rate",
    derust: "De-rust & anti-rust priming",
    rescrape: "Scrape back & re-prime",
    rescrapeNote: "Published wall crack & moisture repair rate",
    minimum: "Minimum job value applied",
    minimumNoteExterior: "Published exterior starting price ({label})",
    minimumNoteRoom: "Published interior starting price ({label})",
    minimumNoteSmall: "Published small-works starting price ({label})",
    supply: "You supply the paint",
    supplyValue: "− RM {amount}",
    supplyNote: "Paint cost removed; consumables and labour retained"
  },
  addons: {
    ceilingRefresh: { label: "Add ceiling repaint", note: "Same visit, same protection setup" },
    crackPackage: { label: "Wall crack & moisture repair package", note: "Published rate: {label}" },
    skimUpgrade: { label: "Full skim-coat upgrade (glass-smooth finish)", note: "Published rate: {label}" },
    waterproof: { label: "Damp wall waterproofing treatment", note: "Published rate: {label}" },
    gateGrille: { label: "Gate & grille anti-rust repaint", note: "Rust treatment plus two protective coats" }
  },
  related: {
    service: { label: "House Painting Service", desc: "Full scope, warranty and process" },
    costGuide: { label: "Painting Cost Guide", desc: "Published 2026 price list" },
    skimCoat: { label: "Skim Coat & Wall Levelling", desc: "For uneven or patched walls" },
    waterproofing: { label: "Waterproofing", desc: "Fix damp before painting" },
    plasterCeiling: { label: "Plaster Ceiling", desc: "Repair before ceiling repaint" }
  },
  articles: {
    colours: "5 Tips for Choosing Paint Colours in Malaysia",
    repaint: "When Should You Repaint Your House?",
    condoVs: "Repaint Condo vs Terrace House"
  },
  assumptions: {
    topcoats: "Two topcoats over prepared and primed surfaces, unless a third coat is required by the colour change.",
    protection: "Furniture protection, masking and daily clean-up are included in the labour figure.",
    belowMinimum: "Your scope is below our minimum job value, so the published starting price applies.",
    measuredArea: "Rate reflects the measured surface area you selected, not floor area.",
    builtUp: "Built-up area is converted to paintable surface using a standard Klang Valley factor; a site measure confirms the exact figure.",
    customerPaint: "You supply the paint; we confirm the required litres before the job starts.",
    commercial: "Commercial and industrial scopes are confirmed after an access and safety survey."
  },
  maintenance: {
    wash: "Wash exterior walls yearly before the monsoon to stop fungal build-up.",
    cracks: "Touch up hairline cracks early — filling them costs far less than a full re-skim.",
    touchUp: "Keep 1 litre of the final colour for touch-ups; we label it for you on handover."
  }
};
