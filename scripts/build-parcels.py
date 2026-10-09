import json
import re
from datetime import datetime

import openpyxl

wb = openpyxl.load_workbook(r"D:\LAND PARCEL INVENTORY SHEET.xlsx", data_only=True)
inv = wb["LAND INVENTORY SHEET"]
con = wb["CONTACTS "]

IMAGES = {
    "Residential": "/images/market-residential.jpg",
    "Agribusiness / Industry": "/images/market-commercial.jpg",
    "Agriculture": "/images/market-agricultural.jpg",
    "Regional Park": "/images/pavilion.jpg",
    "Forest": "/images/forest.jpg",
    "Industrial": "/images/market-industrial.jpg",
}

PARCEL_PHOTOS = [
    "/images/market-residential.jpg",
    "/images/aerial.jpg",
    "/images/terrace.jpg",
    "/images/market-agricultural.jpg",
    "/images/orchard.jpg",
    "/images/plantation.jpg",
    "/images/market-commercial.jpg",
    "/images/kharadi-it-corridor.jpg",
    "/images/token-urban.jpg",
    "/images/lake.jpg",
    "/images/valley.jpg",
    "/images/path.jpg",
    "/images/forest.jpg",
    "/images/ridge.jpg",
    "/images/sunrise.jpg",
    "/images/soil.jpg",
    "/images/market-industrial.jpg",
    "/images/token-highway.jpg",
    "/images/pavilion.jpg",
    "/images/hero-platform.jpg",
    "/images/token-scenic.jpg",
    "/images/token-agriculture.jpg",
    "/images/location.jpeg",
]


def clean(value):
    if value is None:
        return ""
    if isinstance(value, datetime):
        return value.strftime("%d %b %Y")
    if isinstance(value, float) and value.is_integer():
        value = int(value)
    text = str(value).replace("\xa0", " ").replace("\ufffd", " ")
    text = text.replace("\n", " ")
    text = re.sub(r" +", " ", text).strip()
    if text.lower() in {"none", "na", "n/a"}:
        return "" if text.lower() == "none" else text
    return text


def banks_for(zoning, land_type):
    z = zoning.lower()
    t = land_type.lower()
    found = []
    if "agribusiness" in z:
        found.append("Agribusiness / Industry")
    if "regional park" in z:
        found.append("Regional Park")
    if "forest" in z:
        found.append("Forest")
    if "industrial" in z:
        found.append("Industrial")
    if "residential" in z:
        found.append("Residential")
    if re.search(r"agricul|agricl", z) and "agribusiness" not in z:
        found.append("Agriculture")
    if found:
        return found
    if "agriculture" in t or "farmland" in t:
        return ["Agriculture"]
    if re.search(r"\bna\b", t):
        return ["Residential"]
    return ["Agriculture"]


contacts = []
headers = None
for i, row in enumerate(con.iter_rows(values_only=True), 1):
    cells = [clean(c) for c in row]
    if i == 3:
        headers = cells
        continue
    if not headers or not cells[1]:
        continue
    contacts.append(
        {
            "name": cells[1],
            "city": cells[2],
            "phone": cells[3],
            "reference": cells[4],
            "note": cells[5],
        }
    )


def match_contact(owner):
    if not owner:
        return None
    hay = owner.lower()
    for person in contacts:
        parts = [p for p in re.split(r"\s+", person["name"].lower()) if len(p) > 2]
        if person["name"].lower() in hay or (len(parts) >= 2 and all(p in hay for p in parts)):
            return person
    return None


parcels = []
for i, row in enumerate(inv.iter_rows(values_only=True), 1):
    if i < 4:
        continue
    land_id = clean(row[1])
    if not land_id:
        continue
    owner = clean(row[2])
    zoning = clean(row[11])
    land_type = clean(row[8])
    banks = banks_for(zoning, land_type)
    person = match_contact(owner)
    idx = int(re.sub(r"\D", "", land_id) or 0)
    parcel = {
        "id": land_id,
        "owner": owner or "Owner on file",
        "location": clean(row[3]),
        "taluka": clean(row[4]),
        "district": clean(row[5]),
        "surveyNo": clean(row[6]),
        "area": clean(row[7]),
        "landType": land_type,
        "frontage": clean(row[9]),
        "onePager": clean(row[10]),
        "zoning": zoning,
        "reservation": clean(row[12]),
        "potential": clean(row[13]),
        "photos": clean(row[14]),
        "video": clean(row[15]),
        "titleStatus": clean(row[16]),
        "titleReport": clean(row[17]),
        "demand": clean(row[18]),
        "projectType": clean(row[19]),
        "quotation": clean(row[20]),
        "date": clean(row[21]),
        "contactNote": clean(row[22]),
        "banks": banks,
        "image": PARCEL_PHOTOS[(idx - 101) % len(PARCEL_PHOTOS)],
        "phone": person["phone"] if person else "",
        "contactName": person["name"] if person else "",
        "contactCity": person["city"] if person else "",
    }
    parcels.append(parcel)

counts = {}
for p in parcels:
    for b in p["banks"]:
        counts[b] = counts.get(b, 0) + 1

markets = [
    {
        "title": "Residential",
        "line": "Homes, plots and NA land",
        "image": IMAGES["Residential"],
        "alt": "Residential land and plots",
        "note": "NA / plots",
        "status": f"{counts.get('Residential', 0)} parcels",
    },
    {
        "title": "Agribusiness / Industry",
        "line": "Agri-industry holdings",
        "image": IMAGES["Agribusiness / Industry"],
        "alt": "Agribusiness and industry land",
        "note": "Agri-industry",
        "status": f"{counts.get('Agribusiness / Industry', 0)} parcels",
    },
    {
        "title": "Agriculture",
        "line": "Farmland and open acreage",
        "image": IMAGES["Agriculture"],
        "alt": "Agricultural farmland",
        "note": "Farmland",
        "status": f"{counts.get('Agriculture', 0)} parcels",
    },
    {
        "title": "Regional Park",
        "line": "Park and reserved land",
        "image": IMAGES["Regional Park"],
        "alt": "Regional park land",
        "note": "Park",
        "status": f"{counts.get('Regional Park', 0)} parcels",
    },
    {
        "title": "Forest",
        "line": "Forest and tree land",
        "image": IMAGES["Forest"],
        "alt": "Forest land holding",
        "note": "Forest",
        "status": f"{counts.get('Forest', 0)} parcels",
    },
    {
        "title": "Industrial",
        "line": "Industrial and DP-road land",
        "image": IMAGES["Industrial"],
        "alt": "Industrial land",
        "note": "Industry",
        "status": f"{counts.get('Industrial', 0)} parcels",
    },
]

out = """export const MARKET_LANDS = %s

export const PARCELS = %s

export function landUseSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|$/g, "").replace(/^-|-$/g, "")
}

export function landUseFromSlug(slug) {
  return MARKET_LANDS.find((item) => landUseSlug(item.title) === slug)?.title || ""
}

export function parcelsForSlug(slug) {
  const title = landUseFromSlug(slug)
  return title ? PARCELS.filter((item) => item.banks.includes(title)) : []
}

export function parcelById(slug, parcelId) {
  return parcelsForSlug(slug).find((item) => item.id === String(parcelId)) || null
}
""" % (
    json.dumps(markets, indent=2, ensure_ascii=False),
    json.dumps(parcels, indent=2, ensure_ascii=False),
)

# fix accidental slug regex from python percent - write the file in two parts instead
out = None
js_markets = json.dumps(markets, indent=2, ensure_ascii=False)
js_parcels = json.dumps(parcels, indent=2, ensure_ascii=False)
text = f"""export const MARKET_LANDS = {js_markets}

export const PARCELS = {js_parcels}

export function landUseSlug(title) {{
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}}

export function landUseFromSlug(slug) {{
  return MARKET_LANDS.find((item) => landUseSlug(item.title) === slug)?.title || ""
}}

export function parcelsForSlug(slug) {{
  const title = landUseFromSlug(slug)
  return title ? PARCELS.filter((item) => item.banks.includes(title)) : []
}}

export function parcelById(slug, parcelId) {{
  return parcelsForSlug(slug).find((item) => item.id === String(parcelId)) || null
}}
"""

path = r"D:\Bhoomi-world\src\parcels.js"
with open(path, "w", encoding="utf-8") as f:
    f.write(text)
print("wrote", path, "parcels", len(parcels), "counts", counts)
