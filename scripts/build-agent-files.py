#!/usr/bin/env python3
"""
Build the WhatsApp AI agent upload pack from the repository's own data.

    python3 scripts/build-agent-files.py

Writes into ai-agent-upload/:
    01-SYSTEM-PROMPT.txt    paste into the agent's system prompt
    02-KNOWLEDGE-BASE.txt   upload to the agent's knowledge base / RAG
    03-PRICE-LIST.json      machine-readable prices for tool calling

Prices, warranties and sub-services are parsed out of config/services-data.ts
rather than retyped, so this stays correct as the site changes. Re-run it
whenever a price, warranty or coverage area is updated.
"""
import json, os, re, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "ai-agent-upload")

EXTRACTOR = r'''
import fs from 'fs';
const src = fs.readFileSync(process.argv[2], 'utf8');
const re = /^  "([a-z0-9-]+)": \{$/gm;
let m, idx = [];
while ((m = re.exec(src))) idx.push([m[1], m.index]);
const out = [];
for (let i = 0; i < idx.length; i++) {
  const [slug, start] = idx[i];
  const end = i + 1 < idx.length ? idx[i + 1][1] : src.length;
  const block = src.slice(start, end);
  const cut = block.indexOf('\n    i18n:');
  const en = cut > 0 ? block.slice(0, cut) : block;      // English source only
  const g = (r) => (en.match(r) || [])[1];
  const subs = [];
  const ss = en.match(/subServices: \[([\s\S]*?)\n    \],/);
  if (ss) for (const it of ss[1].matchAll(
      /\{ name: "((?:[^"\\]|\\.)*)", price: "((?:[^"\\]|\\.)*)", desc: "((?:[^"\\]|\\.)*)" \}/g))
    subs.push({ name: it[1], price: it[2] });
  out.push({
    slug,
    title: g(/\n    title: "((?:[^"\\]|\\.)*)"/),
    startPrice: g(/\n    startPrice: "([^"]*)"/),
    warranty: g(/\n    warranty: "((?:[^"\\]|\\.)*)"/),
    subServices: subs,
  });
}
process.stdout.write(JSON.stringify(out));
'''


def load_services():
    with tempfile.NamedTemporaryFile("w", suffix=".mjs", delete=False) as f:
        f.write(EXTRACTOR)
        script = f.name
    try:
        raw = subprocess.check_output(
            ["node", script, os.path.join(ROOT, "config/services-data.ts")], text=True)
    finally:
        os.unlink(script)
    svc = json.loads(raw)
    if not svc:
        sys.exit("No services parsed - check config/services-data.ts format.")
    return svc


def strip_md(path):
    """Flatten Markdown to plain text a retrieval engine can chunk cleanly."""
    t = open(path, encoding="utf-8").read()
    t = re.sub(r"^\|[\s:\-|]+\|?$", "", t, flags=re.M)
    t = re.sub(r"^\|(.*)\|$",
               lambda m: " \u00b7 ".join(c.strip() for c in m.group(1).split("|") if c.strip()),
               t, flags=re.M)
    t = re.sub(r"```[\s\S]*?```", lambda m: m.group(0).replace("```", ""), t)
    t = re.sub(r"^#{1,6}\s*", "", t, flags=re.M)
    t = re.sub(r"^>\s?", "", t, flags=re.M)
    t = t.replace("**", "").replace("`", "")
    t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)
    return re.sub(r"\n{3,}", "\n\n", t).strip()


def main():
    os.makedirs(OUT, exist_ok=True)
    svc = load_services()

    prices = "\n".join(
        "- {} (from {}; warranty: {}) -> {}".format(
            s["title"], s["startPrice"], s["warranty"],
            " | ".join(f"{x['name']}: {x['price']}" for x in s["subServices"]))
        for s in svc)

    tpl = os.path.join(OUT, "01-SYSTEM-PROMPT.txt")
    if os.path.exists(tpl):
        # Refresh only the price block; the hand-written rules above/below stay.
        cur = open(tpl, encoding="utf-8").read()
        new = re.sub(
            r"(# PRICE LIST \(the only prices you may state\)\n)[\s\S]*?(\n\nItems marked)",
            lambda m: m.group(1) + prices + m.group(2), cur)
        open(tpl, "w", encoding="utf-8").write(new)
    else:
        sys.exit("01-SYSTEM-PROMPT.txt missing - restore it from git first.")

    parts = []
    for src, label in [("WHATSAPP_FAQ.md", "VERIFIED FAQ"),
                       ("WHATSAPP_DECISION_TREES.md", "SERVICE DECISION TREES"),
                       ("WHATSAPP_RESPONSE_LIBRARY.md", "TRILINGUAL RESPONSE TEMPLATES")]:
        p = os.path.join(ROOT, src)
        if os.path.exists(p):
            parts.append("=" * 70 + f"\n{label}\n" + "=" * 70 + "\n\n" + strip_md(p))
    open(os.path.join(OUT, "02-KNOWLEDGE-BASE.txt"), "w", encoding="utf-8").write(
        "\n\n\n".join(parts))

    payload = {
        "business": {
            "name": "KL Servis Rumah",
            "legalName": "Multicore Dynamics Resources",
            "ssm": "202503227236 (003765188-T)",
            "phone": "+60 11-1662 7349",
            "whatsapp": "601116627349",
            "email": "info@klservisrumah.my",
            "website": "https://www.klservisrumah.my",
            "hours": "Mon-Sun 9:00 AM - 6:00 PM, including public holidays",
            "rating": {"value": 4.9, "reviews": 120},
            "since": 2014,
        },
        "pricingRules": {
            "allPricesAreStartingPrices": True,
            "arithmeticForbidden": True,
            "mandatoryQualifier": ("The final price is confirmed in an itemised written "
                                   "quote after we see photos or do a free site visit."),
            "fixedPrices": [
                {"item": "On-site electrical inspection + written photo report", "price": "RM 150"},
                {"item": "Autogate 6-monthly maintenance visit + condition report", "price": "RM 180"},
            ],
            "noPriceCategories": ["renovation", "commercial", "multi-trade",
                                  "unknown leak cause", "structural", "exterior/scaffold",
                                  "aircon servicing", "On Quote items"],
        },
        "aircon": {
            "serviced": False,
            "onlyOffering": {
                "item": "Aircond, Water Heater & Oven Point (electrical supply point only)",
                "price": "From RM 220 / point"},
            "action": "decline honestly, give no price, give no diagnosis, hand over to supervisor",
        },
        "services": svc,
    }
    json.dump(payload, open(os.path.join(OUT, "03-PRICE-LIST.json"), "w", encoding="utf-8"),
              indent=2, ensure_ascii=False)

    print(f"Rebuilt from {len(svc)} services:")
    for f in sorted(os.listdir(OUT)):
        print(f"  {f:26s} {os.path.getsize(os.path.join(OUT, f)) / 1024:7.1f} KB")


if __name__ == "__main__":
    main()
