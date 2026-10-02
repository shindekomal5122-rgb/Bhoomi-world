import { Link } from "react-router-dom"
import { insights } from "../data"
import useTitle from "../useTitle"

export default function Insights() {
  useTitle("Insights")

  return (
    <section className="page">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">Insights</p>
          <h1>Field notes from the files.</h1>
          <p className="lede">Short writing on title, water, and the year after you own the land.</p>
        </header>
        <div className="insight-list">
          {insights.map((item) => (
            <Link key={item.slug} to={`/insights/${item.slug}`} className="insight-row">
              <img src={item.image} alt="" />
              <span>
                <small>
                  {item.kicker} · {item.date}
                </small>
                <strong>{item.title}</strong>
                <em>{item.excerpt}</em>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
