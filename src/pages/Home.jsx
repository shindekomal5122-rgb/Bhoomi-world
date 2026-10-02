import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ListingCard from "../components/ListingCard"
import InquiryForm from "../components/InquiryForm"
import { IntelIcon, ReasonIcon } from "../components/Icons"
import {
  checks,
  fieldNotes,
  insights,
  intelligence,
  landTypes,
  listings,
  project,
  reasons,
  regionNames,
  regions,
  steps,
  stories,
} from "../data"
import useTitle from "../useTitle"

export default function Home() {
  useTitle("")

  return (
    <>
      <Hero />
      <Marketplace />
      <BhoomiServices />
      <Tokenisation />
      <ParcelBoard />
      <section className="section" id="listings">
        <div className="wrap">
          <SectionHead
            kicker="Open parcels"
            title="Land you can walk this month."
            action={<Link to="/listings">All listings</Link>}
          />
          <div className="cards-3">
            {listings.slice(0, 3).map((item) => (
              <ListingCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <SearchPanel />
      <FeaturedProject />
      <Reasons />
      <Gallery />
      <Record />
      <Process />
      <Stories />
      <Notes />
      <NavyNote />
      <Intelligence />
      <InsightList />
      <Close />
    </>
  )
}

function Hero() {
  return (
    <section className="hero-stage">
      <img
        className="hero-stage-photo"
        src="/images/aerial.jpg"
        alt="Aerial farmland with parcel paths marked in green"
      />
      <div className="hero-stage-shade" />
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />
      <div className="wrap hero-stage-inner">
        <nav className="hero-picks hero-rise" aria-label="Highlights">
          <a className="hero-pick" href="#tokenisation">
            <img
              src="/images/hero-platform.jpg"
              alt="BhumiGlobal tokenisation platform. Land, value, prosperity. Physical land is verified, digitised, issued as a land token, and opened for global access."
            />
            <span>Tokenisation</span>
          </a>
          <a className="hero-pick" href="#hydroponics">
            <img src="/images/hydroponics.png" alt="Deccan Terrace, Kanakapura, Karnataka" />
            <span>Hydroponics</span>
          </a>
          <a className="hero-pick" href="#process">
            <img src="/images/pavilion.jpg" alt="Timber pavilion at Haven, Somwarpet, in evening light" />
            <span>What we do</span>
          </a>
        </nav>
        <div className="hero-stage-copy">
        <p className="eyebrow hero-rise">Clear-title land, held with care</p>
        <h1>
          <span className="hero-line">Find land.</span>
          <span className="hero-line hero-line-gold">Unlock value.</span>
          <span className="hero-line">Build the future.</span>
        </h1>
        <p className="lede hero-rise">
          Farmland, orchards, and quiet holdings across the Ghats and the Deccan. We walk the bounds, write the file,
          and stay through the first year.
        </p>
        <div className="hero-actions hero-rise">
          <Link to="/listings" className="btn btn-solid">
            Explore listings
          </Link>
          <Link to="/visit" className="btn btn-ghost">
            Book a site visit
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}

function Marketplace() {
  const markets = [
    { title: "Residential", image: "/images/market-residential.jpg", alt: "Residential houses on a quiet plot" },
    { title: "Commercial", image: "/images/market-commercial.jpg", alt: "A commercial building with a glass front" },
    { title: "Industrial", image: "/images/market-industrial.jpg", alt: "An industrial park with warehouses" },
    { title: "Agricultural", image: "/images/market-agricultural.jpg", alt: "Green agricultural farmland" },
    { title: "Logistics", image: "/images/market-logistics.jpg", alt: "A logistics warehouse and yard" },
    { title: "Renewable energy", image: "/images/market-renewable.jpg", alt: "A solar farm on open land" },
    { title: "Hospitality", image: "/images/market-hospitality.jpg", alt: "A hospitality retreat among trees" },
    { title: "Large parcel", image: "/images/market-large-parcel.jpg", alt: "A large open land parcel seen from above" },
  ]

  return (
    <section className="section marketplace" id="marketplace">
      <div className="wrap">
        <SectionHead kicker="Land uses" title="About the marketplace" />
        <div className="market-grid">
          {markets.map((item) => (
            <article key={item.title} className="market-box">
              <img src={item.image} alt={item.alt} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BhoomiServices() {
  const services = [
    { title: "Land Bank", text: "42,00+ Acres", icon: "bank" },
    { title: "Consultancy", text: "Legal & Valuation", icon: "gem" },
    { title: "Property Documents", text: "7/12 & Title Registry", icon: "check" },
    { title: "Bhumi Infra", text: "PPP Projects", icon: "crane" },
    { title: "International Corridors", text: "Cross-Border Land Solutions", icon: "globe" },
    { title: "Land Coin & Tokenisation", text: "RWA Asset-Backed Tokens", icon: "token", badge: "RWA" },
  ]

  return (
    <section className="section services-band" id="services">
      <div className="wrap">
        <h2 className="services-heading">Bhoomi Services</h2>
        <div className="services-grid">
          {services.map((item) => (
            <article key={item.title} className="service-card">
              <div className="service-top">
                <span className={`service-icon${item.badge ? " is-solid" : ""}`} aria-hidden="true">
                  <ServiceIcon name={item.icon} />
                </span>
                {item.badge && <span className="service-badge">{item.badge}</span>}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceIcon({ name }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "bank" && (
        <>
          <path d="M4 10h16M6 10v7M10 10v7M14 10v7M18 10v7M3 17.5h18M12 4l8 5H4l8-5z" {...common} />
        </>
      )}
      {name === "gem" && <path d="M12 20l8-9-3.2-5H7.2L4 11l8 9zM4 11h16M8.2 6l3.8 5 3.8-5" {...common} />}
      {name === "check" && (
        <>
          <circle cx="12" cy="12" r="8" {...common} />
          <path d="M8.5 12.2l2.3 2.3 4.7-5" {...common} />
        </>
      )}
      {name === "crane" && <path d="M4 20h10M7 20V8M7 8h11l-3 4M18 8v3M5 8h2" {...common} />}
      {name === "globe" && (
        <>
          <circle cx="12" cy="12" r="8" {...common} />
          <path d="M4 12h16M12 4c2.2 2.4 3.3 5.1 3.3 8S14.2 17.6 12 20c-2.2-2.4-3.3-5.1-3.3-8S9.8 6.4 12 4z" {...common} />
        </>
      )}
      {name === "token" && (
        <>
          <circle cx="12" cy="12" r="3" {...common} />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" {...common} />
        </>
      )}
    </svg>
  )
}

function Tokenisation() {
  const models = [
    {
      title: "Agriculture Land",
      lede: "Institutional Monetization on Sovereign Land.",
      pill: "Agriculture Land",
      image: "/images/token-agriculture.jpg",
      alt: "Hydroponic greenhouses beside a lettuce greenhouse interior",
      icon: "leaf",
      kicker: "Agritech Asset",
      asset: "Hydroponic Park",
    },
    {
      title: "Highway Land Model",
      image: "/images/token-highway.jpg",
      alt: "Highway clean-energy plaza with charging canopies at dusk",
      icon: "bolt",
      kicker: "Green Mobility",
      asset: "Green Mobility & Clean Energy Plaza",
      payout: "Monthly Escrow",
    },
    {
      title: "Urban Land Model",
      image: "/images/token-urban.jpg",
      alt: "Floodlit urban sports pitches and an athletic club at dusk",
      icon: "arena",
      kicker: "Sports Arena Complex",
      asset: "Urban Sports Complex & Athletic Arena",
      payout: "Monthly Escrow",
    },
    {
      title: "Scenic Land Model",
      image: "/images/token-scenic.jpg",
      alt: "Lakeside eco-resort villas in green mountains",
      icon: "sprout",
      kicker: "Luxury Eco-Hospitality",
      asset: "Scenic Sanctuary & Wellness Eco-Resort",
      payout: "Monthly Escrow",
    },
  ]

  return (
    <section className="section token-band" id="tokenisation">
      <div className="wrap">
        <h2 className="services-heading">Tokenisation</h2>
        <div className="token-grid">
          {models.map((item) => (
            <article key={item.title} className="token-card">
              <h3>{item.title}</h3>
              {item.lede && <p className="token-lede">{item.lede}</p>}
              {item.pill && (
                <span className="token-pill">
                  <TokenIcon name="sprout" />
                  {item.pill}
                </span>
              )}
              <figure className="token-frame">
                <img src={item.image} alt={item.alt} />
                <span className="token-badge" aria-hidden="true">
                  <TokenIcon name={item.icon} />
                </span>
                <figcaption>
                  <span>{item.kicker}</span>
                  <strong>{item.asset}</strong>
                </figcaption>
              </figure>
              {item.payout && (
                <div className="token-foot">
                  <p>
                    <span>Payout</span>
                    {item.payout}
                  </p>
                  <Link className="token-cta" to="/visit">
                    Explore Revenue Model
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TokenIcon({ name }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "leaf" && <path d="M5 19C5 11 10 5 19 4 18 13 13 19 5 19zM8 16c2-2 4.5-4 8-6" {...common} />}
      {name === "bolt" && <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" {...common} />}
      {name === "arena" && <path d="M4 10h16M6 10v8M18 10v8M4 18h16M8 10V7h8v3" {...common} />}
      {name === "sprout" && <path d="M12 20V10M12 13c0-4 3-6 7-6-1 4-4 6-7 6zM12 15c0-3-2.5-5-6-5 1 3 3 5 6 5z" {...common} />}
    </svg>
  )
}

function ParcelBoard() {
  const names = ["All regions", ...new Set(listings.map((item) => item.region))]
  const [region, setRegion] = useState("All regions")
  const [activeId, setActiveId] = useState(listings[3].id)
  const shown = region === "All regions" ? listings : listings.filter((item) => item.region === region)
  const active = shown.find((item) => item.id === activeId) ?? shown[0]

  useEffect(() => {
    const showHydroponics = () => {
      if (window.location.hash !== "#hydroponics") return
      setRegion("All regions")
      setActiveId(listings[3].id)
    }
    window.addEventListener("hashchange", showHydroponics)
    return () => window.removeEventListener("hashchange", showHydroponics)
  }, [])
  const acres = shown.reduce((sum, item) => sum + item.acres, 0)
  const acresLabel = Number.isInteger(acres) ? String(acres) : String(Math.round(acres * 10) / 10)

  return (
    <section className="section section-tight dash-section" id="hydroponics" aria-label="Open parcels">
      <div className="wrap dash">
        <div className="dash-stats">
          <p>
            <strong>{shown.length}</strong>
            <span>Open parcels</span>
          </p>
          <p>
            <strong>{acresLabel}</strong>
            <span>acres</span>
          </p>
          <p>
            <strong>{active.price}</strong>
            <span>{active.unit}</span>
          </p>
          <p>
            <strong>{active.titleStatus}</strong>
            <span>{active.region}</span>
          </p>
        </div>
        <div className="chip-row dash-chips" role="group" aria-label="Region">
          {names.map((name) => (
            <button
              key={name}
              type="button"
              className={name === region ? "chip is-on" : "chip"}
              aria-pressed={name === region}
              onClick={() => setRegion(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="dash-grid">
          <ul className="dash-list">
            {shown.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={item.id === active.id ? "is-on" : ""}
                  aria-pressed={item.id === active.id}
                  onClick={() => setActiveId(item.id)}
                >
                  <img src={item.image} alt="" />
                  <span>
                    <strong>{item.title}</strong>
                    <small>
                      {item.acres} acres · {item.type}
                    </small>
                  </span>
                  <em>{item.price}</em>
                </button>
              </li>
            ))}
          </ul>
          <article className="dash-preview" aria-live="polite">
            <img src={active.image} alt={`${active.title}, ${active.place}`} />
            <div>
              <p className="card-kicker">
                <span className="dot" />
                {active.region}
                <span className="kicker-sep">·</span>
                {active.titleStatus}
              </p>
              <h2>{active.title}</h2>
              <p className="dash-place">{active.place}</p>
              <p>{active.summary}</p>
              <p className="dash-price">
                <strong>{active.price}</strong>
                <span>{active.unit}</span>
              </p>
              <Link to={`/listings/${active.id}`} className="btn btn-solid btn-sm">
                View details
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function SearchPanel() {
  const navigate = useNavigate()

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const params = new URLSearchParams()
    for (const [key, value] of data.entries()) {
      if (String(value).trim()) params.set(key, String(value))
    }
    navigate(`/listings?${params.toString()}`)
  }

  return (
    <section className="section section-tight" id="search">
      <div className="wrap">
        <form className="search-card" onSubmit={onSubmit}>
          <label className="search-wide">
            Search
            <input name="q" placeholder="Region, crop, or place" />
          </label>
          <div className="search-row">
            <label>
              Region
              <select name="region" defaultValue="">
                <option value="">All regions</option>
                {regionNames.map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
            </label>
            <label>
              Land type
              <select name="type" defaultValue="">
                <option value="">All types</option>
                {landTypes.map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Size
            <select name="size" defaultValue="">
              <option value="">Any size</option>
              <option value="small">Under 8 acres</option>
              <option value="mid">8 to 15 acres</option>
              <option value="large">Over 15 acres</option>
            </select>
          </label>
          <button type="submit" className="btn btn-solid btn-block">
            Search listings
          </button>
          <div className="chip-row">
            {["Farmland", "Orchard", "Water", "Coorg", "Clear title"].map((chip) => (
              <Link key={chip} to={`/listings?q=${encodeURIComponent(chip)}`} className="chip">
                {chip}
              </Link>
            ))}
          </div>
        </form>
      </div>
    </section>
  )
}

function FeaturedProject() {
  return (
    <section className="section" id="project">
      <div className="wrap">
        <SectionHead
          kicker={project.eyebrow}
          title="A hall under the canopy."
          action={<Link to="/projects">See projects</Link>}
        />
        <p className="section-intro">{project.text}</p>
        <article className="feature-frame">
          <img src={project.image} alt="Timber pavilion at Haven, Somwarpet, in evening light" />
          <div className="feature-copy">
            <p className="media-tag">{project.place}</p>
            <h3>{project.title}</h3>
            <p>Built on the clearing that was already there. The spring still feeds the tank above the hall.</p>
            <dl>
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
            <Link to="/listings/haven-pavilion" className="btn btn-light btn-sm">
              View the parcel
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

function Reasons() {
  return (
    <section className="section" id="reasons">
      <div className="wrap">
        <SectionHead kicker="Why Bhoomi" title="The file is part of the land." />
        <div className="tiles">
          {reasons.map((item, index) => (
            <article key={item.title} className="tile">
              <span className="tile-icon">
                <ReasonIcon index={index} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <SectionHead
          kicker="Places"
          title="Find the right land for the right reason."
          action={<Link to="/regions">All regions</Link>}
        />
        <div className="gallery">
          {regions.map((region) => (
            <Link key={region.slug} to={`/listings?region=${encodeURIComponent(region.name)}`} className="gallery-card">
              <img src={region.image} alt="" />
              <span>
                <strong>{region.name}</strong>
                <small>{region.state}</small>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Record() {
  return (
    <section className="band-dark" id="record">
      <div className="wrap record-grid">
        <div>
          <p className="eyebrow light">Ground record</p>
          <h2>Every boundary, drawn before you buy.</h2>
          <p className="lede light">
            Survey lines, water, and the road in. We put them on one picture so a visit has a map, not a guess.
          </p>
          <div className="record-map">
            <img src="/images/aerial.jpg" alt="Aerial farmland with parcel paths marked in green" />
            <svg className="record-paths" viewBox="0 0 400 260" aria-hidden="true">
              <path d="M30 190 C 90 150, 130 170, 180 100 S 270 40, 360 78" />
              <path d="M24 210 C 110 196, 150 220, 230 150 S 320 130, 378 148" />
              <path d="M70 70 C 120 90, 150 60, 210 88" />
            </svg>
            <p className="map-key">
              <span /> Parcel edge
              <span className="key-b" /> Water
            </p>
          </div>
        </div>
        <div className="record-side">
          <div className="panel-light">
            <InquiryForm intent="Ask for a ground record" />
          </div>
          <div className="checklist">
            <h3>In every file</h3>
            <ul>
              {checks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to="/about#method" className="btn btn-line btn-block">
              How the check is done
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHead kicker="The path" title="From untouched land to a place you can keep." />
        <figure className="process-photo">
          <img src="/images/pavilion.jpg" alt="Timber pavilion at Haven, Somwarpet, in evening light" />
        </figure>
        <ol className="process">
          {steps.map((step) => (
            <li key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Stories() {
  return (
    <section className="section" id="stories">
      <div className="wrap">
        <SectionHead
          kicker="On the ground"
          title="Land, transformed."
          action={<Link to="/projects">View all</Link>}
        />
        <div className="cards-3">
          {stories.map((story) => (
            <article key={story.slug} className="story-card">
              <img src={story.image} alt="" />
              <div>
                <p className="card-kicker">{story.place}</p>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Notes() {
  return (
    <section className="section section-tight">
      <div className="wrap stack">
        {fieldNotes.map((note) => (
          <article key={note.slug} className="note-card">
            <img src={note.image} alt="" />
            <div>
              <p className="card-kicker">{note.place}</p>
              <h3>{note.title}</h3>
              <p>{note.excerpt}</p>
              <div className="chip-row">
                {note.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Link to="/insights" className="text-link">
              Read notes
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function NavyNote() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="navy-band">
          <p className="eyebrow light">Field notes</p>
          <h2>Know the land before you commit.</h2>
          <p>Short writing from site days: water, shade, roads, and the sentences we will not soften.</p>
          <Link to="/insights" className="btn btn-light">
            Read the field notes
          </Link>
        </div>
      </div>
    </section>
  )
}

function Intelligence() {
  return (
    <section className="section" id="intelligence">
      <div className="wrap">
        <SectionHead kicker="In the file" title="Intelligence behind every acre." />
        <div className="tiles">
          {intelligence.map((item, index) => (
            <article key={item.title} className="tile">
              <span className="tile-icon">
                <IntelIcon index={index} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function InsightList() {
  return (
    <section className="section" id="insights">
      <div className="wrap">
        <SectionHead
          kicker="Journal"
          title="Land intelligence, written plainly."
          action={<Link to="/insights">All notes</Link>}
        />
        <div className="insight-list">
          {insights.map((item) => (
            <Link key={item.slug} to={`/insights/${item.slug}`} className="insight-row">
              <img src={item.image} alt="" />
              <span>
                <small>
                  {item.kicker} · {item.date}
                </small>
                <strong>{item.title}</strong>
                <em>{item.excerpt}</em>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Close() {
  return (
    <section className="band-dark close-cta" id="visit">
      <div className="wrap narrow">
        <p className="eyebrow light">Start with the ground</p>
        <h2>Find land. Then stay with it.</h2>
        <p>A short visit, a clear file, and someone who still answers after the sale.</p>
        <div className="cta-row">
          <Link to="/listings" className="btn btn-solid">
            Explore listings
          </Link>
          <Link to="/visit" className="btn btn-light">
            Book a visit
          </Link>
        </div>
        <div className="cta-row">
          <Link to="/regions" className="btn btn-line">
            See open regions
          </Link>
          <Link to="/about" className="btn btn-line">
            How we work
          </Link>
        </div>
      </div>
    </section>
  )
}

function SectionHead({ kicker, title, action }) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {action && <div className="section-action">{action}</div>}
    </div>
  )
}
