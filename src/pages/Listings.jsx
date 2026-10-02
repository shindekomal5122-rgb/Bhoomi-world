import { useMemo } from "react"
import { Link, useSearchParams } from "react-router-dom"
import ListingCard from "../components/ListingCard"
import { landTypes, listings, regionNames } from "../data"
import useTitle from "../useTitle"

export default function Listings() {
  useTitle("Listings")
  const [params, setParams] = useSearchParams()
  const q = params.get("q") || ""
  const region = params.get("region") || ""
  const type = params.get("type") || ""
  const size = params.get("size") || ""
  const sort = params.get("sort") || "featured"

  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    let next = listings.filter((item) => {
      const haystack = `${item.title} ${item.place} ${item.region} ${item.type} ${item.soil} ${item.water} ${item.tag} ${item.titleStatus}`.toLowerCase()
      if (query && !haystack.includes(query)) return false
      if (region && item.region !== region) return false
      if (type && item.type !== type) return false
      if (size === "small" && item.acres >= 8) return false
      if (size === "mid" && (item.acres < 8 || item.acres > 15)) return false
      if (size === "large" && item.acres <= 15) return false
      return true
    })
    if (sort === "price") next = [...next].sort((a, b) => a.priceValue - b.priceValue)
    if (sort === "acres") next = [...next].sort((a, b) => b.acres - a.acres)
    return next
  }, [q, region, type, size, sort])

  function update(key, value) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next)
  }

  return (
    <section className="page">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">Listings</p>
          <h1>Land currently open.</h1>
          <p className="lede">Filter by place, use, and size. Every card opens a file you can actually read.</p>
        </header>
        <form className="filter-bar" onSubmit={(event) => event.preventDefault()}>
          <label>
            Search
            <input value={q} onChange={(event) => update("q", event.target.value)} placeholder="Coorg, orchard, stream" />
          </label>
          <label>
            Region
            <select value={region} onChange={(event) => update("region", event.target.value)}>
              <option value="">All regions</option>
              {regionNames.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </label>
          <label>
            Type
            <select value={type} onChange={(event) => update("type", event.target.value)}>
              <option value="">All types</option>
              {landTypes.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </label>
          <label>
            Size
            <select value={size} onChange={(event) => update("size", event.target.value)}>
              <option value="">Any size</option>
              <option value="small">Under 8 acres</option>
              <option value="mid">8 to 15 acres</option>
              <option value="large">Over 15 acres</option>
            </select>
          </label>
          <label>
            Sort
            <select value={sort} onChange={(event) => update("sort", event.target.value)}>
              <option value="featured">Featured</option>
              <option value="price">Price, low to high</option>
              <option value="acres">Largest first</option>
            </select>
          </label>
        </form>
        <p className="result-count">
          {results.length} {results.length === 1 ? "parcel" : "parcels"}
          {(q || region || type || size) && (
            <button type="button" className="text-link" onClick={() => setParams(new URLSearchParams())}>
              Clear filters
            </button>
          )}
        </p>
        {results.length === 0 ? (
          <div className="empty">
            <h2>Nothing matches that yet.</h2>
            <p>Widen the search, or tell us the place and we will see what is coming up.</p>
            <Link to="/visit" className="btn btn-solid">
              Talk to a steward
            </Link>
          </div>
        ) : (
          <div className="cards-3">
            {results.map((item) => (
              <ListingCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
