import { Link, useParams } from "react-router-dom"
import { insights } from "../data"
import useTitle from "../useTitle"

export default function InsightDetail() {
  const { slug } = useParams()
  const item = insights.find((entry) => entry.slug === slug)
  useTitle(item ? item.title : "Note")

  if (!item) {
    return (
      <section className="page">
        <div className="wrap narrow">
          <h1>That note is not here.</h1>
          <Link to="/insights" className="btn btn-solid">
            All field notes
          </Link>
        </div>
      </section>
    )
  }

  const more = insights.filter((entry) => entry.slug !== item.slug)

  return (
    <article className="page">
      <div className="wrap prose">
        <p className="crumb">
          <Link to="/insights">Insights</Link>
          <span>/</span>
          {item.kicker}
        </p>
        <p className="eyebrow">{item.date}</p>
        <h1>{item.title}</h1>
        <p className="lede">{item.excerpt}</p>
        <img className="prose-img" src={item.image} alt="" />
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Link to="/visit" className="btn btn-solid">
          Bring this up on a visit
        </Link>
        <h2>More notes</h2>
        <ul className="plain-list">
          {more.map((entry) => (
            <li key={entry.slug}>
              <Link to={`/insights/${entry.slug}`}>{entry.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
