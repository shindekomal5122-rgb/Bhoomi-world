export const listings = [
  {
    id: "malnad-ridge",
    title: "Malnad Ridge",
    place: "Sakleshpur, Karnataka",
    region: "Malnad",
    acres: 12.4,
    price: "₹48 L",
    unit: "per acre",
    priceValue: 48,
    type: "Farmland",
    soil: "Laterite loam",
    water: "Perennial stream",
    access: "Tar road, 400 m",
    titleStatus: "Clear title",
    tag: "Featured",
    image: "/images/ridge.jpg",
    gallery: ["/images/ridge.jpg", "/images/aerial.jpg", "/images/sunrise.jpg"],
    summary:
      "A west-facing ridge of open slope with a living stream on the lower boundary and a tar road within a short walk.",
    story:
      "The parcel sits above a coffee belt, with laterite loam that holds rain and drains before the roots stay wet. We walked the bounds with the neighbouring planter, checked the stream through a dry month, and matched the survey sketch to the stones on the ground.",
  },
  {
    id: "coorg-orchard",
    title: "Coorg Orchard Slope",
    place: "Madikeri, Karnataka",
    region: "Coorg",
    acres: 8.1,
    price: "₹62 L",
    unit: "per acre",
    priceValue: 62,
    type: "Orchard",
    soil: "Red loam",
    water: "Borewell and tanks",
    access: "Estate road",
    titleStatus: "Clear title",
    tag: "Orchard",
    image: "/images/orchard.jpg",
    gallery: ["/images/orchard.jpg", "/images/plantation.jpg", "/images/terrace.jpg"],
    summary:
      "Mature shade, a gentle grade, and water already stored on site. Ready for pepper, coffee, or a small estate house.",
    story:
      "An existing orchard grid is still readable between the shade trees. Tanks hold monsoon water, and the estate road reaches the upper gate. We reviewed twenty years of the title chain and a fresh encumbrance certificate.",
  },
  {
    id: "lake-edge",
    title: "Lake Edge Holding",
    place: "Wayanad, Kerala",
    region: "Nilgiris",
    acres: 6.5,
    price: "₹55 L",
    unit: "per acre",
    priceValue: 55,
    type: "Farmhouse plot",
    soil: "Forest loam",
    water: "Lake frontage",
    access: "Village road",
    titleStatus: "Clear title",
    tag: "Water",
    image: "/images/lake.jpg",
    gallery: ["/images/lake.jpg", "/images/forest.jpg", "/images/path.jpg"],
    summary:
      "A quiet holding above a still lake, with forest loam and a building pocket that does not cut the tree line.",
    story:
      "The useful building ground is a small shelf set back from the water. The rest wants to stay planted. We marked the high-water line after speaking with the panchayat and two families who have farmed the next field for decades.",
  },
  {
    id: "deccan-terrace",
    title: "Deccan Terrace",
    place: "Kanakapura, Karnataka",
    region: "Deccan",
    acres: 18.0,
    price: "₹32 L",
    unit: "per acre",
    priceValue: 32,
    type: "Farmland",
    soil: "Red sandy loam",
    water: "Open well",
    access: "Highway, 2 km",
    titleStatus: "Clear title",
    tag: "Large parcel",
    image: "/images/hydroponics.png",
    gallery: ["/images/hydroponics.png", "/images/terrace.jpg", "/images/valley.jpg", "/images/aerial.jpg"],
    summary:
      "Broad terraces within reach of Bengaluru, with an open well and room for grains, fodder, or a weekend farm.",
    story:
      "The terraces are already levelled and the well was sounded in April. Access is a short run from the highway without sitting on the carriageway. Soil samples from three pits are in the file.",
  },
  {
    id: "haven-pavilion",
    title: "Haven Pavilion Ground",
    place: "Somwarpet, Karnataka",
    region: "Coorg",
    acres: 4.2,
    price: "₹74 L",
    unit: "per acre",
    priceValue: 74,
    type: "Farmhouse plot",
    soil: "Humic loam",
    water: "Spring-fed tank",
    access: "Private drive",
    titleStatus: "Clear title",
    tag: "Project",
    image: "/images/pavilion.jpg",
    gallery: ["/images/pavilion.jpg", "/images/forest.jpg", "/images/soil.jpg"],
    summary:
      "A compact estate parcel where a timber gathering hall already sits under the canopy, with the planting left intact.",
    story:
      "The pavilion was raised on the existing clearing. No additional trees were taken for the frame. The spring feeds a tank above the hall, and the drive stops short of the shade.",
  },
  {
    id: "ghats-mixed",
    title: "Ghats Mixed Block",
    place: "Sakleshpur outskirts",
    region: "Western Ghats",
    acres: 15.6,
    price: "₹41 L",
    unit: "per acre",
    priceValue: 41,
    type: "Plantation",
    soil: "Laterite",
    water: "Seasonal nala",
    access: "Mud road, all-weather",
    titleStatus: "Clear title",
    tag: "Plantation",
    image: "/images/plantation.jpg",
    gallery: ["/images/plantation.jpg", "/images/ridge.jpg", "/images/sunrise.jpg"],
    summary:
      "A mixed block of plantation and open ground along a seasonal nala, suited to pepper under shade.",
    story:
      "Part of the land is already under pepper and areca. The open third is the place for a yard and a small house. The nala runs for most of the year; we noted where it leaves the boundary.",
  },
]

export const regions = [
  {
    slug: "malnad",
    name: "Malnad",
    state: "Karnataka",
    image: "/images/ridge.jpg",
    blurb: "Coffee slopes, living streams, and ridgelines that still drain cleanly after heavy rain.",
  },
  {
    slug: "coorg",
    name: "Coorg",
    state: "Karnataka",
    image: "/images/orchard.jpg",
    blurb: "Shade, estate roads, and orchard grids that can be read from the ground.",
  },
  {
    slug: "nilgiris",
    name: "Nilgiris",
    state: "Kerala & Tamil Nadu",
    image: "/images/lake.jpg",
    blurb: "Cooler air, lake edges, and forest loam where a house should stay small.",
  },
  {
    slug: "deccan",
    name: "Deccan",
    state: "Karnataka",
    image: "/images/terrace.jpg",
    blurb: "Open terraces closer to the city, with wells and room to farm at a weekend pace.",
  },
  {
    slug: "western-ghats",
    name: "Western Ghats",
    state: "Karnataka",
    image: "/images/forest.jpg",
    blurb: "Mixed plantation blocks along nalas, with shade already doing half the work.",
  },
  {
    slug: "konkan",
    name: "Konkan",
    state: "Maharashtra",
    image: "/images/path.jpg",
    blurb: "Laterite plateaus above the coast, useful for orchard fruit and a quiet house.",
  },
]

export const reasons = [
  {
    title: "Clear title",
    text: "Every file includes the chain, the encumbrance note, and the survey that matches the stones.",
  },
  {
    title: "Water, mapped",
    text: "Streams, wells, and tanks are walked in more than one season before we call them reliable.",
  },
  {
    title: "Soil in the file",
    text: "Pit notes and a simple crop fit, written so a farmer and a first-time buyer can both use them.",
  },
  {
    title: "Access checked",
    text: "We drive the last kilometre in the rain and say plainly if the road is a promise or a fact.",
  },
  {
    title: "Neighbours known",
    text: "Bounds are walked with the people who farm beside them, not only read off a map.",
  },
  {
    title: "After the sale",
    text: "A steward stays on the file for fencing, planting, and the first year of questions.",
  },
]

export const checks = [
  "Survey sketch on the ground",
  "Encumbrance certificate",
  "Water through a dry month",
  "Road in the rain",
  "Soil from three pits",
  "Boundary stones",
  "Zoning and conversion note",
  "Neighbour walk",
]

export const steps = [
  { n: "01", title: "Listen", text: "What you want the land to do, and what you will not compromise." },
  { n: "02", title: "Walk", text: "A site day with the file in hand, not a slideshow in an office." },
  { n: "03", title: "Read", text: "Title, water, soil, access, and the people on the next boundary." },
  { n: "04", title: "Shape", text: "A short plan for planting, a house, or simply holding the land well." },
  { n: "05", title: "Stay", text: "We remain after registration for the work that actually starts then." },
]

export const stories = [
  {
    slug: "fallow-to-orchard",
    title: "From a fallow slope to a working orchard",
    place: "Sakleshpur",
    image: "/images/orchard.jpg",
    tags: ["Soil", "Water", "Orchard"],
    excerpt: "Twelve acres that had been idle for a decade, replanted without cutting the shade that was already there.",
  },
  {
    slug: "lake-house-shelf",
    title: "A house shelf that left the lake alone",
    place: "Wayanad",
    image: "/images/lake.jpg",
    tags: ["Siting", "Forest"],
    excerpt: "The building pocket was a single shelf. The rest of the holding stayed planted to the water.",
  },
  {
    slug: "terrace-weekend",
    title: "Terraces that could be farmed on weekends",
    place: "Kanakapura",
    image: "/images/valley.jpg",
    tags: ["Access", "Well"],
    excerpt: "A city family needed a road they could trust and a well that had been sounded, not described.",
  },
]

export const fieldNotes = [
  {
    slug: "pepper-under-shade",
    title: "Pepper under existing shade",
    place: "Western Ghats",
    image: "/images/plantation.jpg",
    tags: ["Plantation", "Shade", "Nala"],
    excerpt: "Where the canopy is already right, the work is drainage and a yard, not a new plantation from bare earth.",
  },
  {
    slug: "reading-a-ridge",
    title: "Reading a ridge before you buy it",
    place: "Malnad",
    image: "/images/sunrise.jpg",
    tags: ["Slope", "Rain"],
    excerpt: "Aspect, runoff, and the month the stream thins. A short method we use on every ridge file.",
  },
  {
    slug: "estate-road",
    title: "What an estate road is really worth",
    place: "Coorg",
    image: "/images/path.jpg",
    tags: ["Access"],
    excerpt: "A road on a map and a road in July are different facts. We write down which one you are buying.",
  },
]

export const intelligence = [
  { title: "Rainfall history", text: "A plain note of wet months and the week the slope usually saturates." },
  { title: "Slope and aspect", text: "Where the sun sits, and where water wants to leave the land." },
  { title: "Crop fit", text: "What the soil and shade already suggest, before anyone orders saplings." },
  { title: "Legal chain", text: "Owners, mutations, and the one document that still needs a closer look." },
  { title: "Market context", text: "Recent sales nearby, said as a range, not as a promise of return." },
  { title: "A real site day", text: "You walk it with us. The file is a companion, not a substitute." },
]

export const insights = [
  {
    slug: "clear-title-means",
    title: "What we mean by a clear title",
    kicker: "Records",
    date: "March 2026",
    image: "/images/soil.jpg",
    excerpt: "A title is clear when the paper, the revenue record, and the boundary on the ground all name the same land.",
    body: [
      "Buyers are often handed a sale deed and told the title is clean. A deed is one page in a longer argument. We look for the chain that leads to it, the mutations in the revenue record, and an encumbrance certificate that covers a long enough window.",
      "Then we take that paper outside. If the survey number and the stones disagree, the title is not clear yet, however tidy the folder looks. We would rather delay a sale than hand you a dispute with a neighbour.",
      "The note in every Bhoomi file says what we checked, what we could not check, and what still needs a lawyer’s eye. That last line is part of the work, not a disclaimer tucked in small type.",
    ],
  },
  {
    slug: "water-in-april",
    title: "Water you can trust in April",
    kicker: "Ground",
    date: "January 2026",
    image: "/images/aerial.jpg",
    excerpt: "A stream in October is an easy claim. We ask what it does when the hills have been dry for months.",
    body: [
      "Monsoon photographs make every nala look permanent. The useful question is narrower: where does water sit in April, who else draws from it, and is the right recorded or only practised?",
      "On ridge parcels we walk the lower boundary in a dry window. If the stream is a trickle, we say so. A tank is only a water source if someone can tell you when it was last desilted.",
      "This is not a hydrology study. It is a field habit. It keeps a buyer from planning an orchard on a promise that lasts one season.",
    ],
  },
  {
    slug: "after-registration",
    title: "The year after registration",
    kicker: "Stewardship",
    date: "November 2025",
    image: "/images/forest.jpg",
    excerpt: "Fencing, the first planting, and the calls that start once the deed is filed. We stay for that year.",
    body: [
      "Most land conversations end at the sub-registrar’s office. The land itself starts then: a fence line someone disputes, a sapling order that does not match the shade, a road that ruts in the first storm.",
      "Bhoomi keeps a steward on the file for twelve months. The work is practical. We introduce the mason, the nursery, and the neighbour again, and we answer when the plan meets the weather.",
      "If you want a silent holding and no further contact, say so at the start. Stewardship is an offer, not a condition of the sale.",
    ],
  },
]

export const project = {
  eyebrow: "A place we stayed with",
  title: "Haven Pavilion",
  place: "Somwarpet, Coorg",
  image: "/images/pavilion.jpg",
  text: "A timber hall set into an existing clearing. The canopy was left. The spring already knew the way to the tank.",
  stats: [
    { label: "Land", value: "4.2 acres" },
    { label: "Built", value: "One hall" },
    { label: "Trees cut", value: "None" },
  ],
}

export const regionNames = [...new Set(listings.map((item) => item.region))]
export const landTypes = [...new Set(listings.map((item) => item.type))]
