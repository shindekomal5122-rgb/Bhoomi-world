import { Link, useParams } from "react-router-dom"
import { dealerById, landUseFromSlug } from "../dealers"
import useTitle from "../useTitle"

export default function DealerDetail() {
  const { use, dealerId } = useParams()
  const title = landUseFromSlug(use)
  const dealer = dealerById(use, dealerId)
  useTitle(dealer ? dealer.name : "Dealer")

  if (!title || !dealer) {
    return (
      <section className="page dealer-page">
        <div className="wrap">
          <h1>That dealer is not on the book.</h1>
          <Link to={title ? `/marketplace/${use}` : "/#marketplace"} className="btn btn-solid">
            Back to dealers
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
          <Link to={`/marketplace/${use}`}>{title}</Link>
          <span>/</span>
          {dealer.name}
        </p>
        <p className="eyebrow">{title}</p>
        <h1>{dealer.name}</h1>
        <p className="lede">{dealer.firm}</p>
        <dl className="dealer-facts">
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${dealer.phone.replace(/\s/g, "")}`}>{dealer.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${dealer.email}`}>{dealer.email}</a>
            </dd>
          </div>
          <div>
            <dt>City</dt>
            <dd>{dealer.city}</dd>
          </div>
          <div>
            <dt>Office</dt>
            <dd>{dealer.office}</dd>
          </div>
          <div>
            <dt>On the book</dt>
            <dd>{dealer.years}</dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>{dealer.hours}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{dealer.focus}</dd>
          </div>
        </dl>
        <p className="dealer-about">{dealer.about}</p>
        <div className="dealer-actions">
          <a className="btn btn-solid" href={`tel:${dealer.phone.replace(/\s/g, "")}`}>
            Call dummy number
          </a>
          <Link className="btn btn-ghost" to={`/marketplace/${use}`}>
            Back to dealers
          </Link>
        </div>
      </div>
    </section>
  )
}
