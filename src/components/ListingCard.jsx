import { Link } from "react-router-dom"

export default function ListingCard({ item }) {
  return (
    <article className="listing-card">
      <p className="card-kicker">
        <span className="dot" />
        {item.region}
        <span className="kicker-sep">·</span>
        {item.titleStatus}
      </p>
      <Link to={`/listings/${item.id}`} className="listing-media">
        {item.tag && <span className="media-tag">{item.tag}</span>}
        <img src={item.image} alt={`${item.title}, ${item.place}`} />
        <span className="play" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="11" />
            <path d="M10 8.5v7l6-3.5-6-3.5z" />
          </svg>
        </span>
        <span className="media-caption">
          {item.title}
          <small>
            {item.acres} acres · {item.type}
          </small>
        </span>
      </Link>
      <div className="listing-foot">
        <p>
          <strong>{item.price}</strong>
          <span>{item.unit}</span>
        </p>
        <Link to={`/listings/${item.id}`} className="btn btn-solid btn-sm">
          View details
        </Link>
      </div>
    </article>
  )
}
