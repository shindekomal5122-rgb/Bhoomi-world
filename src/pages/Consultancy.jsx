import { Link } from "react-router-dom"
import useTitle from "../useTitle"

const LEGAL_PHONE = "8329182605"

const LEGAL = [
  { label: "Title search and chain of title", phone: LEGAL_PHONE },
  { label: "7/12, 8A, and mutation review" },
  { label: "Encumbrance certificate check" },
  { label: "Agreement to sell / sale deed drafting" },
  { label: "Joint development and MOU review" },
  { label: "Lease, license, and POA vetting" },
  { label: "Legal opinion on clear title" },
  { label: "Registration and stamp-duty note" },
]

const TECHNICAL = [
  "Land valuation and unit economics",
  "Survey sketch and boundary walk",
  "GIS, zoning, and overlay check",
  "Soil, water, and access note",
  "FSI / land-use feasibility",
  "Highway, solar, and farm yield models",
  "Infra and last-kilometre review",
  "Masterplan and risk overlay",
]

export default function Consultancy() {
  useTitle("Consultancy")

  return (
    <section className="page consult-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/#services">Services</Link>
          <span>/</span>
          Consultancy
        </p>
        <p className="eyebrow">Legal & valuation</p>
        <h1>Consultancy</h1>
        <p className="lede">Two desks on the file: legal papers, and the technical walk of the land.</p>
        <div className="consult-grid">
          <article className="consult-panel">
            <h2>Legal</h2>
            <p>Title, registry, and the documents that must sit in the file before a walk.</p>
            <ul className="consult-list">
              {LEGAL.map((item) => (
                <li key={item.label} className={item.phone ? "has-call" : ""}>
                  <span>{item.label}</span>
                  {item.phone ? (
                    <a
                      className="consult-call"
                      href={`tel:+91${item.phone}`}
                      aria-label={`Call ${item.phone} for ${item.label}`}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7 3 3.2 3.4 2.7 4 2.7h3.5c.5 0 .9.4.9 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                        />
                      </svg>
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
          <article className="consult-panel">
            <h2>Technical</h2>
            <p>Valuation, survey, GIS, and the ground checks that sit beside the legal note.</p>
            <ul className="consult-list">
              {TECHNICAL.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
