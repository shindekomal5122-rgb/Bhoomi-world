import { useState } from "react"
import { Link } from "react-router-dom"
import { SELL_PROPERTIES } from "../trade"
import useTitle from "../useTitle"

export default function SellProperty() {
  useTitle("Sell property")
  const [sent, setSent] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="page trade-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/">Home</Link>
          <span>/</span>
          Sell
        </p>
        <p className="eyebrow">Sell property</p>
        <h1>Land listed to sell.</h1>
        <p className="lede">Dummy holdings from landowners. Use the form to put another parcel on the book.</p>
        <div className="land-bank-grid">
          {SELL_PROPERTIES.map((item) => (
            <article key={item.id} className="market-box">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <p className="trade-meta">{item.acres} · {item.type}</p>
              <p className="trade-price">{item.asking}</p>
              <p className="trade-owner">{item.owner} · {item.phone}</p>
            </article>
          ))}
        </div>
        <div className="panel-light trade-form">
          {sent ? (
            <div className="form-success" role="status">
              <h2>Listed (dummy)</h2>
              <p>This is a placeholder. No land was submitted.</p>
            </div>
          ) : (
            <form className="inquiry" onSubmit={onSubmit}>
              <p className="form-intent">List your land</p>
              <div className="form-grid">
                <label>
                  Name
                  <input name="name" required />
                </label>
                <label>
                  Phone
                  <input name="phone" required />
                </label>
                <label>
                  Place
                  <input name="place" required />
                </label>
                <label>
                  Acres
                  <input name="acres" required />
                </label>
              </div>
              <label>
                Notes
                <textarea name="note" rows="3" placeholder="Title status, water, road, asking price." />
              </label>
              <button type="submit" className="btn btn-solid">
                Submit dummy listing
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
