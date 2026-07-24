export type EntityItem = {
  id: string;
  name: string;
  aliases: string[];
  category: "material" | "tool" | "technique" | "brand" | "standard" | "problem";
  description: string;
  relatedTo: string[];
};

export const entityDatabase: EntityItem[] = [
  { id: "nippon-paint", name: "Nippon Paint", aliases: ["Nippon", "Nippon Spot-less", "Nippon Odour-less"], category: "brand", description: "A common premium paint brand used for Malaysian interior and exterior painting systems.", relatedTo: ["dulux", "sealer-primer", "washable-paint"] },
  { id: "dulux", name: "Dulux", aliases: ["Dulux EasyClean", "Dulux Weathershield"], category: "brand", description: "Paint brand frequently specified for washable interior and weather-resistant exterior coatings.", relatedTo: ["nippon-paint", "exterior-coating"] },
  { id: "jotun", name: "Jotun", aliases: ["Jotun Majestic"], category: "brand", description: "Paint brand used for selected interior and exterior finishes depending on budget and specification.", relatedTo: ["washable-paint"] },
  { id: "sealer-primer", name: "Sealer primer", aliases: ["undercoat", "anti-alkali sealer", "moisture sealer"], category: "material", description: "A preparation layer that improves paint adhesion and reduces moisture or alkali damage.", relatedTo: ["peeling-paint", "damp-wall"] },
  { id: "pu-injection", name: "PU injection grouting", aliases: ["polyurethane injection", "PU grouting", "pressure grouting"], category: "technique", description: "A waterproofing method that injects polyurethane resin into active concrete cracks or slab leaks.", relatedTo: ["metal-packers", "bathroom-leak", "waterproofing-membrane"] },
  { id: "metal-packers", name: "Injection packers", aliases: ["metal packers", "PU packers"], category: "tool", description: "Injection ports used to pump PU resin into drilled concrete leak paths.", relatedTo: ["pu-injection"] },
  { id: "waterproofing-membrane", name: "Waterproofing membrane", aliases: ["cementitious membrane", "acrylic membrane", "torch-on membrane"], category: "material", description: "A protective layer applied to wet areas, balconies or roofs to block water ingress.", relatedTo: ["ponding-test", "bathroom-leak"] },
  { id: "ponding-test", name: "Water ponding test", aliases: ["24-hour ponding test", "48-hour ponding test"], category: "technique", description: "A controlled water test used to verify waterproofing performance before finishing.", relatedTo: ["waterproofing-membrane"] },
  { id: "gypsum-board", name: "Gypsum board", aliases: ["plasterboard", "drywall board", "moisture-resistant board"], category: "material", description: "Panel material used for ceilings and partitions, available in moisture-resistant or fire-rated grades.", relatedTo: ["gi-frame", "joint-compound"] },
  { id: "gi-frame", name: "Galvanized iron frame", aliases: ["GI frame", "metal ceiling frame", "metal tracks"], category: "material", description: "Rust-resistant framing used to support plaster ceilings and gypsum partitions.", relatedTo: ["gypsum-board"] },
  { id: "joint-compound", name: "Joint compound", aliases: ["skim coat", "plaster skim", "joint filler"], category: "material", description: "Finishing compound used to cover board joints and create a smooth paint-ready surface.", relatedTo: ["fiberglass-mesh"] },
  { id: "fiberglass-mesh", name: "Fiberglass mesh tape", aliases: ["joint tape", "mesh tape"], category: "material", description: "Reinforcement tape used over plasterboard joints to reduce cracking.", relatedTo: ["joint-compound"] },
  { id: "sirim-pipes", name: "SIRIM-certified pipes", aliases: ["SIRIM PVC", "PPR pipe", "approved pipe fittings"], category: "standard", description: "Pipe and fitting quality standard commonly referenced for Malaysian plumbing works.", relatedTo: ["pressure-test", "water-heater"] },
  { id: "pressure-test", name: "Pressure test", aliases: ["leak test", "water pressure testing"], category: "technique", description: "A plumbing quality check to confirm repaired joints hold under working pressure.", relatedTo: ["sirim-pipes"] },
  { id: "water-heater", name: "Water heater", aliases: ["instant water heater", "Joven heater", "Rinnai heater"], category: "material", description: "Hot-water fixture requiring safe mounting, plumbing connections and electrical safety awareness.", relatedTo: ["sirim-pipes"] },
  { id: "molly-bolt", name: "Molly bolt", aliases: ["hollow wall anchor", "spring toggle", "toggle bolt"], category: "tool", description: "A heavy-duty anchor used for safer mounting on hollow gypsum or partition walls.", relatedTo: ["stud-finder", "tv-mount"] },
  { id: "stud-finder", name: "Stud finder", aliases: ["electronic scanner", "wall scanner"], category: "tool", description: "Tool used to detect framing or hidden supports before drilling into a wall.", relatedTo: ["molly-bolt", "tv-mount"] },
  { id: "tv-mount", name: "TV wall mount", aliases: ["fixed bracket", "tilt bracket", "full-motion mount"], category: "material", description: "Bracket system used to mount televisions safely on concrete, brick or partition walls.", relatedTo: ["molly-bolt"] },
  { id: "peeling-paint", name: "Peeling paint", aliases: ["paint bubbling", "flaking paint"], category: "problem", description: "A common paint failure caused by moisture, weak primer or poor surface preparation.", relatedTo: ["sealer-primer"] },
  { id: "bathroom-leak", name: "Bathroom leak", aliases: ["inter-floor leak", "ceiling leak below bathroom"], category: "problem", description: "Water seepage from a bathroom floor or slab into the ceiling or room below.", relatedTo: ["pu-injection", "waterproofing-membrane"] }
];

export function getEntitiesByCategory(category: EntityItem["category"]) {
  return entityDatabase.filter((entity) => entity.category === category);
}
