import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import SatbaraForm from "../components/SatbaraForm"
import useTitle from "../useTitle"

const TABS = [
  { id: "all", label: "All papers" },
  { id: "712", label: "7/12" },
  { id: "8a", label: "8/A" },
  { id: "sale", label: "Sale deed" },
  { id: "index2", label: "Index 2" },
]

const DOCUMENTS = [
  { name: "Agreement to Sell / Agreement for Sale", tabs: ["sale"] },
  { name: "Sale Deed / Conveyance Deed", tabs: ["sale"] },
  { name: "Assignment Deed", tabs: ["sale"] },
  { name: "Apartment / Flat Agreement & Deed", tabs: ["sale"] },
  { name: "Development / Joint Development Agreement", tabs: ["sale"] },
  { name: "Memorandum of Understanding (MOU)", tabs: ["sale"] },
  { name: "Lease / Leave & License Agreement", tabs: ["sale"] },
  { name: "Gift / Exchange / Partition Deed", tabs: ["sale"] },
  { name: "Release / Relinquishment Deed", tabs: ["sale"] },
  { name: "Mortgage & Property Loan Documentation", tabs: ["index2"] },
  { name: "Power of Attorney", tabs: ["sale", "index2"] },
  { name: "Deed of Confirmation / Rectification", tabs: ["sale", "index2"] },
  { name: "Transfer & Assignment of Property Rights", tabs: ["sale"] },
  { name: "Property Title Search & Due Diligence", tabs: ["index2"] },
  { name: "Property Document Vetting & Legal Opinion", tabs: ["index2"] },
  { name: "Affidavits, Declarations & Related Documentation", tabs: ["index2"] },
  { name: "7/12 Extract / Record of Rights", tabs: ["712"] },
  { name: "8A / Ferfar / Mutation Entry", tabs: ["8a"] },
  { name: "Encumbrance Certificate (EC)", tabs: ["index2"] },
  { name: "Mother Deed / Chain of Title", tabs: ["index2"] },
  { name: "Survey Sketch / Measurement Plan", tabs: ["712"] },
  { name: "Khata / Property Tax Receipts", tabs: ["712", "8a"] },
  { name: "Occupancy / Completion Certificate", tabs: ["8a"] },
  { name: "Society / Authority NOC", tabs: ["8a"] },
  { name: "Stamp Duty & Registration Receipts", tabs: ["sale", "index2"] },
]

const TAB_NOTES = {
  all: "Twenty-five papers we keep on the file for land, plots, and built property.",
  "712": "Ask the IGR desk for a digitally signed 7/12. District, taluka, village, and survey number are enough to open the file.",
  "8a": "Mutation and ferfar papers that move the name on the 8/A after a sale or inheritance.",
  sale: "Agreements and deeds that pass title — sale deed, ATS, assignment, and related instruments.",
  index2: "Sub-registrar Index 2, encumbrance, mother deed, and the search that sits on the chain of title.",
}

export default function PropertyDocuments() {
  useTitle("Get online property documents")
  const [tab, setTab] = useState("all")

  const papers = useMemo(
    () => (tab === "all" ? DOCUMENTS : DOCUMENTS.filter((item) => item.tabs.includes(tab))),
    [tab],
  )

  return (
    <section className="page docs-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/#services">Services</Link>
          <span>/</span>
          Get online property documents
        </p>
        <p className="eyebrow">7/12 & title registry</p>
        <h1>Get online property documents</h1>
        <div className="docs-tabs" role="tablist" aria-label="Document types">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={tab === item.id ? "is-on" : ""}
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="lede">{TAB_NOTES[tab]}</p>
        {tab === "712" ? (
          <SatbaraForm />
        ) : (
          <ol className="docs-list">
            {papers.map((item, i) => (
              <li key={item.name} className="docs-item">
                <span className="docs-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="docs-name">{item.name}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}
