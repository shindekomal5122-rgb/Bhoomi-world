import { Link } from "react-router-dom"
import { listings, project, stories } from "../data"
import useTitle from "../useTitle"

export default function Projects() {
  useTitle("Projects")
  const featured = listings.find((item) => item.id === "haven-pavilion")

  return (
    <section className="page">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">Projects</p>
          <h1>Places we stayed with after the sale.</h1>
          <p className="lede">{project.text}</p>
        </header>
        <article className="feature-frame">
          <img src={project.image} alt="Haven Pavilion in Somwarpet at dusk" />
          <div className="feature-copy">
            <p className="media-tag">{project.place}</p>
            <h2>{project.title}</h2>
            <p>The hall uses the clearing. Planting continues around it, and the tank is still spring-fed.</p>
            <Link to="/listings/haven-pavilion" className="btn btn-light btn-sm">
              Open the parcel file
            </Link>
          </div>
        </article>
        <div className="cards-3 project-follow">
          {stories.map((story) => (
            <article key={story.slug} className="story-card">
              <img src={story.image} alt="" />
              <div>
                <p className="card-kicker">{story.place}</p>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        {featured && (
          <p className="section-intro">
            Haven is {featured.acres} acres of {featured.soil.toLowerCase()}, with {featured.water.toLowerCase()}.{" "}
            <Link to="/visit?listing=haven-pavilion">Book the walk.</Link>
          </p>
        )}
      </div>
    </section>
  )
}
