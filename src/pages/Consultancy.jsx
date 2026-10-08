import { Link } from "react-router-dom"
import useTitle from "../useTitle"

const LEGAL = [
  "Title search and chain of title",
  "7/12, 8A, and mutation review",
  "Encumbrance certificate check",
  "Agreement to sell / sale deed drafting",
  "Joint development and MOU review",
  "Lease, license, and POA vetting",
  "Legal opinion on clear title",
  "Registration and stamp-duty note",
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
                <li key={item}>{item}</li>
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
