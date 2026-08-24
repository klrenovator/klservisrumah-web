import type { MessageDictionary } from "../../../i18n";
export const renovationBudgetCalculatorEnDict: MessageDictionary = {
  "meta": {
    "name": "Renovation Budget Calculator",
    "resultLabel": "Estimated renovation cost",
    "service": "House Renovation"
  },
  "steps": {
    "property": {
      "title": "Property details",
      "subtitle": "Type and built-up size"
    },
    "scope": {
      "title": "Renovation scope",
      "subtitle": "Kitchen, bathroom, flooring, painting, ceiling"
    },
    "trades": {
      "title": "Trades",
      "subtitle": "Electrical, plumbing, carpentry, waterproofing, demolition"
    },
    "dimensions": {
      "title": "Dimensions",
      "subtitle": "Enter length and width"
    },
    "area": {
      "title": "Area",
      "subtitle": "How big is the area?"
    },
    "quantity": {
      "title": "Quantity details",
      "subtitle": "Choose size and waste"
    },
    "size": {
      "title": "How big is it?",
      "subtitle": "Enter dimensions"
    },
    "options": {
      "title": "Material & condition",
      "subtitle": "Pick material grade and current condition"
    },
    "condition": {
      "title": "Condition",
      "subtitle": "Surface condition"
    },
    "access": {
      "title": "Access & timing",
      "subtitle": "Site access and urgency"
    },
    "symptoms": {
      "title": "What do you see?",
      "subtitle": "Select all that apply"
    },
    "location": {
      "title": "Where is it?",
      "subtitle": "Location"
    }
  },
  "fields": {
    "propertyType": {
      "label": "Property type"
    },
    "propertySize": {
      "label": "Built-up size"
    },
    "kitchen": {
      "label": "Kitchen renovation"
    },
    "bathroomCount": {
      "label": "Number of bathrooms"
    },
    "flooring": {
      "label": "Flooring"
    },
    "painting": {
      "label": "Painting"
    },
    "ceiling": {
      "label": "Plaster ceiling"
    },
    "electrical": {
      "label": "Electrical"
    },
    "plumbing": {
      "label": "Plumbing"
    },
    "carpentry": {
      "label": "Carpentry"
    },
    "waterproofing": {
      "label": "Waterproofing"
    },
    "demolition": {
      "label": "Demolition & hacking"
    },
    "length": {
      "label": "Length"
    },
    "width": {
      "label": "Width"
    },
    "height": {
      "label": "Height"
    },
    "roofSlope": {
      "label": "Roof slope"
    },
    "quantity": {
      "label": "Quantity"
    },
    "tileSize": {
      "label": "Tile size"
    },
    "coats": {
      "label": "Coats"
    },
    "waste": {
      "label": "Waste allowance"
    },
    "socketsPerWall": {
      "label": "Sockets per wall"
    },
    "material": {
      "label": "Material grade"
    },
    "condition": {
      "label": "Condition"
    },
    "access": {
      "label": "Access"
    },
    "urgency": {
      "label": "Urgency"
    },
    "severity": {
      "label": "Severity"
    },
    "symptoms": {
      "label": "Symptoms"
    },
    "location": {
      "label": "Location"
    }
  },
  "propertyTypes": {
    "terrace": {
      "label": "Terrace house",
      "hint": "1,200–2,500 sq ft"
    },
    "semiD": {
      "label": "Semi-D",
      "hint": "1,800–3,500 sq ft"
    },
    "bungalow": {
      "label": "Bungalow",
      "hint": "2,500–6,000 sq ft"
    },
    "condo": {
      "label": "Condo",
      "hint": "800–1,500 sq ft"
    },
    "apartment": {
      "label": "Apartment",
      "hint": "700–1,200 sq ft"
    },
    "shoplot": {
      "label": "Shoplot / office",
      "hint": "Commercial"
    }
  },
  "flooringTypes": {
    "spc": {
      "label": "SPC flooring",
      "hint": "Waterproof, most popular"
    },
    "vinyl": {
      "label": "Vinyl",
      "hint": "Waterproof, soft"
    },
    "laminate": {
      "label": "Laminate",
      "hint": "Budget wood-look"
    },
    "tile": {
      "label": "Porcelain / ceramic tiles",
      "hint": "Durable"
    },
    "epoxy": {
      "label": "Epoxy",
      "hint": "Industrial"
    }
  },
  "options": {
    "yes": {
      "label": "Yes"
    },
    "no": {
      "label": "No"
    },
    "none": {
      "label": "None"
    },
    "full": {
      "label": "Full"
    },
    "standard": {
      "label": "Standard"
    },
    "rewiring": {
      "label": "Full rewiring"
    }
  },
  "units": {
    "bathroom": "bathroom",
    "bathrooms": "bathrooms"
  },
  "slope": {
    "flat": {
      "label": "Flat (no slope)",
      "hint": "Slope ×1.0"
    },
    "low": {
      "label": "Low slope",
      "hint": "×1.1"
    },
    "medium": {
      "label": "Medium slope",
      "hint": "×1.15"
    },
    "steep": {
      "label": "Steep slope",
      "hint": "×1.3"
    }
  },
  "conditions": {
    "excellent": {
      "label": "Excellent",
      "hint": "No prep"
    },
    "good": {
      "label": "Good",
      "hint": "Minor prep"
    },
    "poor": {
      "label": "Poor",
      "hint": "Heavy prep"
    },
    "worn": {
      "label": "Worn",
      "hint": "Needs repair"
    },
    "damaged": {
      "label": "Damaged",
      "hint": "Major repair"
    }
  },
  "access": {
    "easy": {
      "label": "Easy access",
      "hint": "Landed, lift accessible"
    },
    "difficult": {
      "label": "Difficult access",
      "hint": "High floor, no lift"
    }
  },
  "urgency": {
    "standard": {
      "label": "Standard",
      "hint": "1–2 weeks lead"
    },
    "urgent": {
      "label": "Urgent",
      "hint": "Faster scheduling"
    }
  },
  "severity": {
    "minor": {
      "label": "Minor"
    },
    "moderate": {
      "label": "Moderate"
    },
    "severe": {
      "label": "Severe"
    },
    "emergency": {
      "label": "Emergency"
    }
  },
  "materials": {
    "economy": {
      "label": "Economy",
      "hint": "Budget materials"
    },
    "standard": {
      "label": "Standard",
      "hint": "Most popular"
    },
    "premium": {
      "label": "Premium",
      "hint": "Best quality"
    }
  },
  "symptoms": {
    "leak": {
      "label": "Visible leak",
      "hint": "Water dripping"
    },
    "lowPressure": {
      "label": "Low pressure",
      "hint": "Weak flow"
    },
    "noise": {
      "label": "Pipe noise",
      "hint": "Banging"
    },
    "stain": {
      "label": "Water stain",
      "hint": "Brown mark"
    },
    "mould": {
      "label": "Mould"
    },
    "burst": {
      "label": "Burst pipe"
    }
  },
  "locations": {
    "bathroom": {
      "label": "Bathroom"
    },
    "kitchen": {
      "label": "Kitchen"
    },
    "ceiling": {
      "label": "Ceiling"
    },
    "outdoor": {
      "label": "Outdoor"
    }
  },
  "severityNote": {
    "routine": "Routine — can be scheduled",
    "soon": "Soon — within a week",
    "urgent": "Urgent — 24-48h",
    "emergency": "Emergency — same day"
  },
  "breakdown": {
    "dimensions": "Dimensions",
    "area": "Area",
    "quantity": "Quantity needed",
    "qty": "Quantity",
    "material": "Material grade",
    "totalArea": "Total area",
    "estimated": "Estimated from inputs",
    "severity": "Severity",
    "symptoms": "Symptoms",
    "none": "None selected"
  },
  "packages": {
    "standard": "Standard Package"
  },
  "durations": {
    "halfDay": "Half day",
    "oneDay": "1 working day",
    "twoDays": "1–2 working days",
    "threeToFive": "3–5 working days",
    "oneTwoDays": "1–2 working days",
    "twoThreeDays": "2–3 working days",
    "fourFiveDays": "4–5 working days",
    "oneWeek": "About 1 week",
    "oneTwoWeeks": "1–2 weeks",
    "twoThreeWeeks": "2–3 weeks",
    "fourToSixWeeks": "4–6 weeks",
    "sixToTwelveWeeks": "6–12 weeks",
    "weeks": "About {n} weeks"
  },
  "related": {
    "kitchen": {
      "label": "Kitchen Renovation",
      "desc": "Kitchen makeover with cabinets and countertop"
    },
    "bathroom": {
      "label": "Bathroom Renovation",
      "desc": "Bathroom with waterproofing and tiling"
    },
    "service": {
      "label": "House Renovation Service",
      "desc": "See full renovation scope and pricing"
    },
    "allTools": {
      "label": "All Free Tools",
      "desc": "Browse all calculators and estimators"
    }
  },
  "assumptions": {
    "measured": "Based on measurements and scope you entered. Final price confirmed after site visit.",
    "inspection": "Diagnosis based on symptoms. Site inspection confirms final scope.",
    "renovationNote": "Estimate includes labour and standard materials. Premium brands, imported tiles, solid wood carpentry and authority submissions quoted separately. JMB/MC/DBKL/MBSA approval may be required for structural or extension work — approval not guaranteed."
  },
  "findings": {
    "generic": "Possible related issue",
    "inspectionTitle": "Inspection recommended",
    "inspectionDetail": "We recommend on-site inspection for accurate quotation."
  }
};
