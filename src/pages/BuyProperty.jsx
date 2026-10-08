import { Link } from "react-router-dom"
import { BUY_PROPERTIES } from "../trade"
import useTitle from "../useTitle"

export default function BuyProperty() {
  useTitle("Buy property")

  return (
    <section className="page trade-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/">Home</Link>
          <span>/</span>
          Buy
        </p>
        <p className="eyebrow">Buy property</p>
        <h1>Land open to buy.</h1>
        <p className="lede">Dummy parcels on the book. Price, size, and place are placeholders for this flow.</p>
        <div className="land-bank-grid">
          {BUY_PROPERTIES.map((item) => (
            <article key={item.id} className="market-box">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <p className="trade-meta">{item.acres} · {item.type}</p>
              <p className="trade-price">{item.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
