import { Link } from "react-router-dom"
import useTitle from "../useTitle"

const DOCUMENTS = [
  "Agreement to Sell / Agreement for Sale",
  "Sale Deed / Conveyance Deed",
  "Assignment Deed",
  "Apartment / Flat Agreement & Deed",
  "Development / Joint Development Agreement",
  "Memorandum of Understanding (MOU)",
  "Lease / Leave & License Agreement",
  "Gift / Exchange / Partition Deed",
  "Release / Relinquishment Deed",
  "Mortgage & Property Loan Documentation",
  "Power of Attorney",
  "Deed of Confirmation / Rectification",
  "Transfer & Assignment of Property Rights",
  "Property Title Search & Due Diligence",
  "Property Document Vetting & Legal Opinion",
  "Affidavits, Declarations & Related Documentation",
  "7/12 Extract / Record of Rights",
  "8A / Ferfar / Mutation Entry",
  "Encumbrance Certificate (EC)",
  "Mother Deed / Chain of Title",
  "Survey Sketch / Measurement Plan",
  "Khata / Property Tax Receipts",
  "Occupancy / Completion Certificate",
  "Society / Authority NOC",
  "Stamp Duty & Registration Receipts",
]

export default function PropertyDocuments() {
  useTitle("Property Documents")

  return (
    <section className="page docs-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/#services">Services</Link>
          <span>/</span>
          Property Documents
        </p>
        <p className="eyebrow">7/12 & title registry</p>
        <h1>Property documents</h1>
        <p className="lede">Twenty-five papers we keep on the file for land, plots, and built property.</p>
        <ol className="docs-list">
          {DOCUMENTS.map((name, i) => (
            <li key={name} className="docs-item">
              <span className="docs-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="docs-name">{name}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
