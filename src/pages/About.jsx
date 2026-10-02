import { Link } from "react-router-dom"
import { steps } from "../data"
import useTitle from "../useTitle"

export default function About() {
  useTitle("About")

  return (
    <section className="page">
      <div className="wrap">
        <header className="page-head">
          <p className="eyebrow">About</p>
          <h1>We read the ground before we offer it.</h1>
          <p className="lede">
            Bhoomi is a small land studio in Bengaluru. We find clear-title farmland and estate parcels, and we stay
            long enough to see the first fence go in.
          </p>
        </header>
        <div className="about-grid">
          <img src="/images/forest.jpg" alt="Forest edge on a Western Ghats holding" />
          <div>
            <h2>A file, not a brochure</h2>
            <p>
              The work starts with a walk and a stack of records. If the stones and the survey disagree, we say so
              before anyone books a train. Prices are quoted as they are. Returns are not invented.
            </p>
            <p>
              After registration, a steward remains on the file for a year. That is the part most land sales skip, and
              the part owners write to us about later.
            </p>
            <Link to="/visit" className="btn btn-solid">
              Visit the studio
            </Link>
          </div>
        </div>
        <div id="method" className="method">
          <h2>How a parcel gets onto the book</h2>
          <ol className="process">
            {steps.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="tiles">
          <article className="tile">
            <h3>Studio</h3>
            <p>Field office, Jayamahal, Bengaluru. Site days are spent on the land, not in the room.</p>
          </article>
          <article className="tile">
            <h3>People</h3>
            <p>Two land leads, a records desk, and local walkers in each region we publish.</p>
          </article>
          <article className="tile">
            <h3>Careers</h3>
            <p>
              We hire slowly. Write to <a href="mailto:hello@bhoomi.world">hello@bhoomi.world</a> if you already walk
              land for a living.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
