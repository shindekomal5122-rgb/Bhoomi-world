import { Link, useParams } from "react-router-dom"
import { landUseFromSlug, MARKET_LANDS, parcelsForSlug } from "../parcels"
import useTitle from "../useTitle"

export default function ParcelList() {
  const { use } = useParams()
  const title = landUseFromSlug(use)
  const parcels = parcelsForSlug(use)
  const land = MARKET_LANDS.find((item) => item.title === title)
  useTitle(title ? `${title} land bank` : "Land bank")

  if (!title) {
    return (
      <section className="page parcel-page">
        <div className="wrap">
          <h1>That land bank is not on the book.</h1>
          <Link to="/#marketplace" className="btn btn-solid">
            Back to land bank
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page parcel-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/#marketplace">Land Bank</Link>
          <span>/</span>
          {title}
        </p>
        <p className="eyebrow">{land?.status}</p>
        <h1>{title}</h1>
        <p className="lede">
          {land?.line}. Parcels and owners from the land inventory sheet.
        </p>
        <ul className="parcel-list">
          {parcels.map((item) => (
            <li key={item.id}>
              <Link className="parcel-row" to={`/marketplace/${use}/${item.id}`}>
                <img src={item.image} alt="" />
                <div className="parcel-row-copy">
                  <span className="parcel-row-id">Land ID {item.id}</span>
                  <span className="parcel-row-name">{item.location || title}</span>
                  <span className="parcel-row-firm">
                    {[item.taluka, item.district, item.area].filter(Boolean).join(" · ")}
                  </span>
                  <span className="parcel-row-phone">Owner / agent: {item.owner}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
