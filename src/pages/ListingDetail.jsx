import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import InquiryForm from "../components/InquiryForm"
import ListingCard from "../components/ListingCard"
import { listings } from "../data"
import useTitle from "../useTitle"

export default function ListingDetail() {
  const { id } = useParams()
  const item = listings.find((entry) => entry.id === id)
  const [photoState, setPhotoState] = useState({ id, index: 0 })
  const photo = photoState.id === id ? photoState.index : 0
  useTitle(item ? item.title : "Listing")

  function choosePhoto(index) {
    setPhotoState({ id, index })
  }

  if (!item) {
    return (
      <section className="page">
        <div className="wrap narrow">
          <h1>That parcel is not on the book.</h1>
          <p>It may have been reserved. The open listings are still here.</p>
          <Link to="/listings" className="btn btn-solid">
            Back to listings
          </Link>
        </div>
      </section>
    )
  }

  const others = listings.filter((entry) => entry.id !== item.id).slice(0, 3)

  return (
    <section className="page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/listings">Listings</Link>
          <span>/</span>
          {item.region}
        </p>
        <div className="detail-grid">
          <div>
            <div className="detail-hero">
              <img src={item.gallery[photo]} alt={`${item.title}, view ${photo + 1}`} />
              <span className="media-tag">{item.tag}</span>
            </div>
            <div className="thumbs" role="list">
              {item.gallery.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  className={index === photo ? "is-active" : ""}
                  onClick={() => choosePhoto(index)}
                  aria-label={`Show photo ${index + 1} of ${item.title}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
            <h1>{item.title}</h1>
            <p className="lede">{item.summary}</p>
            <h2>The parcel</h2>
            <p>{item.story}</p>
            <h2 id="walk">What a visit covers</h2>
            <ul className="plain-list">
              <li>Bounds walked against the survey sketch</li>
              <li>Water checked at the point named in the file</li>
              <li>The last kilometre of road, in whatever weather we get</li>
              <li>Time to stand where a house or a yard would actually sit</li>
            </ul>
          </div>
          <aside className="buy-card">
            <p className="card-kicker">{item.place}</p>
            <p className="price-lg">
              {item.price} <small>{item.unit}</small>
            </p>
            <dl className="spec-list">
              <div>
                <dt>Size</dt>
                <dd>{item.acres} acres</dd>
              </div>
              <div>
                <dt>Use</dt>
                <dd>{item.type}</dd>
              </div>
              <div>
                <dt>Soil</dt>
                <dd>{item.soil}</dd>
              </div>
              <div>
                <dt>Water</dt>
                <dd>{item.water}</dd>
              </div>
              <div>
                <dt>Access</dt>
                <dd>{item.access}</dd>
              </div>
              <div>
                <dt>Title</dt>
                <dd>{item.titleStatus}</dd>
              </div>
            </dl>
            <Link to={`/visit?listing=${item.id}`} className="btn btn-solid btn-block">
              Book a visit
            </Link>
            <InquiryForm intent={`Ask about ${item.title}`} listingName={item.title} />
          </aside>
        </div>
        <h2 className="spaced">Other open parcels</h2>
        <div className="cards-3">
          {others.map((entry) => (
            <ListingCard key={entry.id} item={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
