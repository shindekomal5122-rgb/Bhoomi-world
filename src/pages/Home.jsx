import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useTitle from "../useTitle"
import landJourney from "../assets/land-journey.jpg"

export default function Home() {
  useTitle("")
  const [shot, setShot] = useState(null)

  useEffect(() => {
    if (!shot) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") setShot(null)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [shot])

  function onPageClick(event) {
    const img = event.target.closest("img")
    if (!img || img.closest(".hero-stage") || img.closest(".home-lightbox") || img.closest(".rwa-photo") || img.closest(".journey-photo") || img.closest(".gis-map")) return
    event.preventDefault()
    event.stopPropagation()
    setShot({ src: img.currentSrc || img.src, alt: img.alt || "" })
  }

  return (
    <div className="home-page" onClick={onPageClick}>
      <Hero />
      <Marketplace />
      <BhoomiServices />
      <Tokenisation />
      <RwaOffer />
      <Process />
      <LandJourney />
      <Videos />
      <Landowner />
      <Investors />
      <BeginLand />
      {shot && (
        <div
          className="home-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={shot.alt || "Image preview"}
          onClick={() => setShot(null)}
        >
          <img className="home-lightbox-shot" src={shot.src} alt={shot.alt} />
        </div>
      )}
    </div>
  )
}

const heroSlides = [
  {
    href: "#tokenisation",
    src: "/images/token-highway.jpg",
    alt: "BhumiGlobal tokenisation platform. Land, value, prosperity. Physical land is verified, digitised, issued as a land token, and opened for global access.",
    label: "Tokenisation",
  },
  {
    href: "#tokenisation",
    src: "/images/token-agriculture.jpg",
    alt: "Deccan Terrace, Kanakapura, Karnataka",
    label: "Hydroponics",
  },
  {
    href: "#process",
    src: "/images/pavilion.jpg",
    alt: "Timber pavilion at Haven, Somwarpet, in evening light",
    label: "What we do",
  },
]

function Hero() {
  const count = heroSlides.length
  const reel = [...heroSlides, heroSlides[0]]
  const [index, setIndex] = useState(0)
  const [instant, setInstant] = useState(false)
  const active = heroSlides[index % count]

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current >= count ? current : current + 1))
    }, 4000)
    return () => window.clearInterval(id)
  }, [count])

  useEffect(() => {
    if (!instant) return undefined
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setInstant(false))
    })
    return () => window.cancelAnimationFrame(frame)
  }, [instant])

  function settleReel() {
    if (index < count) return
    setInstant(true)
    setIndex(0)
  }

  function goTo(next) {
    const wrapped = ((next % count) + count) % count
    setIndex(wrapped)
  }

  return (
    <section className="hero-stage">
      <div className="hero-carousel" aria-roledescription="carousel" aria-label="Highlight images">
        <div
          className={instant ? "hero-carousel-track is-instant" : "hero-carousel-track"}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTransitionEnd={settleReel}
        >
          {reel.map((slide, slideIndex) => (
            <img
              key={`${slide.src}-${slideIndex}`}
              className="hero-stage-photo"
              src={slide.src}
              alt={slideIndex === index ? slide.alt : ""}
              aria-hidden={slideIndex !== index}
            />
          ))}
        </div>
      </div>
      <div className="hero-stage-shade" />
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />
      <div className="wrap hero-stage-inner">
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
        <div className="hero-carousel-ui">
          <a
            className="hero-carousel-label"
            href={active.href}
            onClick={(event) => {
              event.preventDefault()
              document.querySelector(active.href)?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            {active.label}
          </a>
          <div className="hero-carousel-nav">
            <button type="button" aria-label="Previous image" onClick={() => goTo(index - 1)}>
              ‹
            </button>
            <div className="hero-carousel-dots" role="tablist" aria-label="Carousel slides">
              {heroSlides.map((slide, slideIndex) => (
                <button
                  key={slide.label}
                  type="button"
                  role="tab"
                  className={slideIndex === index % count ? "is-on" : ""}
                  aria-label={slide.label}
                  aria-selected={slideIndex === index % count}
                  onClick={() => setIndex(slideIndex)}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => setIndex((current) => (current >= count ? current : current + 1))}
            >
              ›
            </button>
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
      // lede: "Institutional Monetization on Sovereign Land.",
      // pill: "Agriculture Land",
      image: "/images/token-agriculture.jpg",
      alt: "Indoor hydroponic lettuce farm under grow lights",
      icon: "leaf",
      kicker: "Agritech Asset",
      asset: "Hydroponic Park",
      payout: "Monthly Escrow",
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
       <h2 className="services-heading">Land revenue model</h2> 
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

function RwaOffer() {
  const [tokens, setTokens] = useState(1)
  const monthly = 10000 * tokens
  const monthlyLabel = monthly.toLocaleString("en-IN")

  return (
    <section className="section rwa-band" id="rwa-offer">
      <div className="wrap">
      <h2 className="services-heading">TOKENISATION</h2>
        <article className="rwa-card">
          <div className="rwa-head">
            <h2>Commercial RWA Tokenisation</h2>
            <span className="rwa-grade">Grade-A Asset · 100 Tokens</span>
          </div>
          <p className="rwa-lede">
            Fractional Institutional Asset Monetization & Monthly Rental Yield Distribution on Sovereign Land.
          </p>
          <div className="rwa-body">
            <figure className="rwa-photo">
              <img src="/images/kharadi-it-corridor.jpg" alt="Prime commercial suite in Kharadi IT Corridor, Pune" />
              <span className="rwa-backed">RWA Backed</span>
              <figcaption>
                <span>Prime commercial suite · 1st floor</span>
                <strong>Kharadi IT Corridor, Pune</strong>
                <em>10,000 Sq. Ft. Grade-A Tech Park Suite (New Building)</em>
              </figcaption>
            </figure>
            <div className="rwa-side">
              <div className="rwa-econ">
                <p className="rwa-econ-title">
                  100-Token Unit Economics
                  <small>1 Token = 100 Sq. Ft.</small>
                </p>
                <dl className="rwa-metrics">
                  <div>
                    <dt>Price per token</dt>
                    <dd>₹18,00,000</dd>
                  </div>
                  <div>
                    <dt>Monthly rental payout</dt>
                    <dd>
                      ₹10,000 <span>/ mo</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Annual cash return</dt>
                    <dd>
                      ₹1,20,000 <span>/ yr</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Projected target IRR</dt>
                    <dd>
                      14% – 17% <span>IRR</span>
                    </dd>
                  </div>
                </dl>
                <div className="rwa-alloc">
                  <p>Select allocation:</p>
                  <div className="rwa-pills" role="group" aria-label="Token allocation">
                    {[1, 5, 10].map((count) => (
                      <button
                        key={count}
                        type="button"
                        className={tokens === count ? "is-on" : ""}
                        aria-pressed={tokens === count}
                        onClick={() => setTokens(count)}
                      >
                        {count} Token{count > 1 ? "s" : ""}
                      </button>
                    ))}
                  </div>
                  <p className="rwa-payout">
                    Monthly payout: <strong>₹{monthlyLabel}/month</strong>
                  </p>
                </div>
              </div>
              <div className="rwa-actions">
                <Link className="btn btn-solid" to="/visit">
                  Invest in tokens
                  <span aria-hidden="true"> →</span>
                </Link>
                <Link className="btn btn-line rwa-memo" to="/visit">
                  Offering memorandum
                  <span aria-hidden="true"> ↗</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function Process() {
  const [focus, setFocus] = useState("corridor")

  return (
    <section className="section process-band" id="process">
      <div className="wrap">
        <h2 className="services-heading">Process</h2>
        <article className="gis-card">
          <p className="gis-kicker">Land Intelligence GIS</p>
          <h3>See beyond the boundary.</h3>
          <p className="gis-copy">
            Explore land opportunities with advanced satellite mapping and intelligence layers. Get deep understanding of connectivity, zoning, utilities, and development potential.
          </p>
          <div className="gis-map">
            <img src="/images/aerial.jpg" alt="Satellite view of a prime industrial corridor with GIS parcel overlays" />
            <span className="gis-tag gis-tag-left">GIS Telemetry: Active</span>
            <span className="gis-tag gis-tag-right">IND-400</span>
            <span className="gis-map-label">GIS Map Interface</span>
            <svg className="gis-plot" viewBox="0 0 800 360" aria-hidden="true">
              <polygon
                className={focus === "corridor" ? "is-on" : ""}
                points="180,90 430,70 520,150 470,280 210,250"
              />
              <polygon
                className={focus === "node" ? "is-on" : ""}
                points="500,40 720,80 740,220 560,260"
              />
            </svg>
            <div className="gis-bar">
              <button type="button" className={focus === "corridor" ? "is-on" : ""} onClick={() => setFocus("corridor")}>
                Prime Industrial Corridor
              </button>
              <button type="button" className="gis-analyze" onClick={() => setFocus("corridor")}>
                Analyze
              </button>
              <button type="button" className={focus === "node" ? "is-on" : ""} onClick={() => setFocus("node")}>
                NH-48 Logistics Node
              </button>
            </div>
          </div>
          <ul className="gis-legend">
            <li>
              <i className="gis-dot gis-dot-green" /> Land Parcels
            </li>
            <li>
              <i className="gis-dot gis-dot-gold" /> Major Roads
            </li>
            <li>
              <i className="gis-dot gis-dot-blue" /> Upcoming Infra
            </li>
            <li>
              <i className="gis-dot gis-dot-purple" /> Industrial Zone
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

function LandJourney() {
  return (
    <section className="section journey-band" id="journey">
      <div className="wrap">
        <figure className="journey-photo">
          <img
            src={landJourney}
            alt="One Platform. The Complete Land Journey. End-to-end 7-step real estate and land development lifecycle: Discover, Analyse, Verify, Acquire, Masterplan, Develop, and Create Value."
          />
        </figure>
      </div>
    </section>
  )
}

function Videos() {
  return (
    <section className="section videos-band" id="videos">
      <div className="wrap">
        <h2 className="services-heading">Videos</h2>
        <article className="videos-card">
          <iframe
            className="videos-frame"
            title="Shekhar Gaikwad, IAS"
            src="https://shekhargaikwad.blogspot.com/?m=1"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="btn btn-solid videos-link"
            href="https://shekhargaikwad.blogspot.com/?m=1"
            target="_blank"
            rel="noreferrer"
          >
            Open blog
            <span aria-hidden="true"> ↗</span>
          </a>
        </article>
      </div>
    </section>
  )
}

function Landowner() {
  return (
    <section className="section landowner-band" id="landowner">
      <div className="wrap">
        <article className="landowner-card">
          <p className="landowner-kicker">For landowners</p>
          <h2>Own land?</h2>
          <p className="landowner-copy">
            Unlock its true development potential. Whether selling, seeking joint development, or strategic institutional partnerships.
          </p>
          <Link className="btn landowner-cta" to="/visit">
            Submit your land
            <span aria-hidden="true"> →</span>
          </Link>
        </article>
      </div>
    </section>
  )
}

function Investors() {
  return (
    <section className="section investor-band" id="investors">
      <div className="wrap">
        <article className="investor-card">
          <p className="investor-kicker">For developers & investors</p>
          <h2>Looking for land?</h2>
          <p className="investor-copy">
            Discover curated and verified strategic land aligned with your development objectives across prime growth corridors.
          </p>
          <Link className="btn investor-cta" to="/listings">
            Find strategic land
            <span aria-hidden="true"> →</span>
          </Link>
        </article>
      </div>
    </section>
  )
}

function BeginLand() {
  return (
    <section className="begin-band" id="begin">
      <div className="begin-inner">
        <h2>Every great development begins with land.</h2>
        <p>
          Whether you are looking to acquire, invest, develop or unlock the potential of land, Bhumi Global brings the intelligence and expertise together.
        </p>
        <div className="begin-actions">
          <Link className="btn begin-find" to="/listings">
            Find land
          </Link>
          <Link className="btn begin-submit" to="/visit">
            Submit land
          </Link>
          <Link className="btn begin-line" to="/projects">
            Develop land
          </Link>
          <Link className="btn begin-line" to="/visit">
            Partner with us
          </Link>
        </div>
        <p className="begin-mark">Land · Value · Prosperity</p>
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
