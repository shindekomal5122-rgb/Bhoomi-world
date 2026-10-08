import { Link, useParams } from "react-router-dom"
import { dealersForSlug, landUseFromSlug, MARKET_LINES } from "../dealers"
import useTitle from "../useTitle"

export default function DealerList() {
  const { use } = useParams()
  const title = landUseFromSlug(use)
  const dealers = dealersForSlug(use)
  useTitle(title ? `${title} dealers` : "Dealers")

  if (!title) {
    return (
      <section className="page dealer-page">
        <div className="wrap">
          <h1>That land use is not on the book.</h1>
          <Link to="/#marketplace" className="btn btn-solid">
            Back to marketplace
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page dealer-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/#marketplace">Marketplace</Link>
          <span>/</span>
          {title}
        </p>
        <p className="eyebrow">Dummy contacts</p>
        <h1>{title} dealers</h1>
        <p className="lede">{MARKET_LINES[title]}. Pick a desk for the full dummy file.</p>
        <ul className="dealer-list">
          {dealers.map((person) => (
            <li key={person.id}>
              <Link className="dealer-row" to={`/marketplace/${use}/${person.id}`}>
                <span className="dealer-row-name">{person.name}</span>
                <span className="dealer-row-firm">{person.firm} · {person.city}</span>
                <span className="dealer-row-phone">{person.phone}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
