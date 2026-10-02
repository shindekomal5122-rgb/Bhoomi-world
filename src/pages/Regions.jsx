import { Link } from "react-router-dom"
import { listings, regions } from "../data"
import useTitle from "../useTitle"

export default function Regions() {
  useTitle("Regions")

  return (
    <section className="page">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">Regions</p>
          <h1>Where we are walking land.</h1>
          <p className="lede">
            Six belts, each with a different water story. Choose a region to see the parcels open there now.
          </p>
        </header>
        <div className="region-grid">
          {regions.map((region) => {
            const count = listings.filter((item) => item.region === region.name).length
            return (
              <Link key={region.slug} to={`/listings?region=${encodeURIComponent(region.name)}`} className="region-card">
                <img src={region.image} alt="" />
                <span>
                  <small>
                    {region.state}
                    {count > 0 ? ` · ${count} open` : " · Ask for the next file"}
                  </small>
                  <strong>{region.name}</strong>
                  <em>{region.blurb}</em>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
