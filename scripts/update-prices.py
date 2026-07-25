import re, io

def apply_map(text, mapping):
    # process old values in descending numeric order to avoid chained double-replacement
    items = sorted(mapping.items(), key=lambda kv: -int(kv[0].replace(",", "")))
    for old, new in items:
        pat = re.compile(r"(RM)(\s?)" + re.escape(old) + r"(?![\d,–])")
        text = pat.sub(lambda m: m.group(1) + m.group(2) + new, text)
    return text

# Per-service block mappings (old amount -> new amount), applied only inside that service's block
SERVICES = {
    "painting": {"400": "450", "1,800": "2,200", "150": "180"},
    "plumbing": {"180": "220", "150": "180", "120": "150"},
    "ceiling": {"180": "220", "9": "11", "8": "10"},
    "waterproofing": {"850": "1,000", "300": "350", "250": "300"},
    "handyman": {"120": "150", "100": "120", "90": "120", "80": "100"},
    "house-renovation": {"25,000": "30,000", "18,000": "22,000", "8,500": "10,000"},
    "electrical": {"1,800": "2,200", "180": "220", "120": "150", "90": "120"},
    "water-heater": {"1,800": "2,200", "380": "420", "220": "250", "150": "180"},
    "ceiling-fan": {"380": "420", "280": "320", "220": "250", "180": "220", "120": "150"},
    "lighting": {"220": "250", "150": "180", "90": "120", "18": "22"},
    "tiling": {"22": "26", "18": "22", "14": "16", "12": "14"},
    "plaster-ceiling": {"18": "22", "12": "14", "8": "10", "6": "8"},
    "skim-coat": {"3,800": "4,200", "18": "22", "5": "6", "4": "5"},
    "flooring": {"14": "16", "12": "14", "9": "11", "6": "8"},
    "epoxy-flooring": {"32": "38", "22": "26", "18": "22", "12": "14"},
    "roof-repair": {"350": "380", "280": "320", "22": "26", "18": "22"},
    "kitchen-cabinet": {"9,000": "11,000", "6,000": "7,500", "3,500": "4,200", "180": "220"},
    "carpentry": {"1,500": "1,800", "1,200": "1,500", "900": "1,100", "280": "320", "250": "300"},
    "door": {"850": "950", "480": "550", "220": "250", "90": "120"},
    "window-repair": {"180": "200", "120": "150", "90": "120", "25": "30"},
    "locksmith": {"380": "420", "180": "220", "150": "180", "25": "30"},
    "glass-aluminium": {"380": "420", "280": "320", "180": "220"},
    "cleaning": {"380": "420", "280": "320", "220": "250", "150": "180"},
    "deep-cleaning": {"580": "650", "450": "500", "420": "480", "380": "420"},
    "post-renovation-cleaning": {"1,200": "1,400", "580": "650", "280": "320", "8": "10"},
    "cctv": {"3,800": "4,200", "1,800": "2,200", "380": "420", "180": "220"},
    "autogate": {"3,200": "3,800", "2,800": "3,200", "1,800": "2,200", "850": "950", "150": "180"},
    "welding": {"2,500": "2,800", "380": "420", "250": "280", "38": "42"},
}

with io.open("config/services-data.ts", encoding="utf-8") as f:
    src = f.read()

# split into per-service segments (slug blocks) + preamble + trailing part
parts = re.split(r'(?m)(?=^  "[a-z-]+": \{)', src)
out = []
for seg in parts:
    m = re.match(r'^  "([a-z-]+)": \{', seg)
    slug = m.group(1) if m else None
    if slug and slug in SERVICES:
        seg = apply_map(seg, SERVICES[slug])
    out.append(seg)
with io.open("config/services-data.ts", "w", encoding="utf-8") as f:
    f.write("".join(out))

# Market-rates baseline — published rates + ranges floor-safe
MR = {"1,800": "2,200", "850": "1,000", "400": "450", "300": "350", "250": "300",
      "180": "220", "150": "180", "120": "150", "80": "100", "8": "10"}
with io.open("config/market-rates.ts", encoding="utf-8") as f:
    s = f.read()
s = apply_map(s, MR)
s = s.replace('lastReviewed: "2026-07-24"', 'lastReviewed: "2026-07-25"')
with io.open("config/market-rates.ts", "w", encoding="utf-8") as f:
    f.write(s)

# FAQ pages (app + accordion component) + area data + blog mention
FAQ_MAP = {"400": "450", "180": "220", "120": "150", "80": "100"}
for p in ["app/faq/page.tsx", "components/sections/faq-accordion.tsx"]:
    with io.open(p, encoding="utf-8") as f:
        s = f.read()
    s = apply_map(s, FAQ_MAP)
    with io.open(p, "w", encoding="utf-8") as f:
        f.write(s)

AREA_MAP = {"400": "450", "100": "120"}
with io.open("config/area-data.ts", encoding="utf-8") as f:
    s = f.read()
s = apply_map(s, AREA_MAP)
with io.open("config/area-data.ts", "w", encoding="utf-8") as f:
    f.write(s)

BLOG_MAP = {"400": "450"}
with io.open("config/blog-data.ts", encoding="utf-8") as f:
    s = f.read()
s = apply_map(s, BLOG_MAP)
with io.open("config/blog-data.ts", "w", encoding="utf-8") as f:
    f.write(s)

print("prices updated")
