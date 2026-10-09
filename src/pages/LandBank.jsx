import { Link } from "react-router-dom"
import { landUseSlug, MARKET_LANDS } from "../parcels"
import useTitle from "../useTitle"

export default function LandBank() {
  useTitle("Land Bank")

  return (
    <section className="page land-bank-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/#services">Services</Link>
          <span>/</span>
          Land Bank
        </p>
        <p className="eyebrow">42,00+ acres</p>
        <h1>Land bank</h1>
        <p className="lede">Every land use on the inventory. Open a card for parcels and owners on that bank.</p>
        <div className="land-bank-grid">
          {MARKET_LANDS.map((item) => (
            <Link key={item.title} className="market-box" to={`/marketplace/${landUseSlug(item.title)}`}>
              <img src={item.image} alt={item.alt} />
              <h3>{item.title}</h3>
              <p>{item.line}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
