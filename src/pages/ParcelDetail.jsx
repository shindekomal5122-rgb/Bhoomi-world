import { Link, useParams } from "react-router-dom"
import { landUseFromSlug, parcelById } from "../parcels"
import useTitle from "../useTitle"

function telHref(phone) {
  const digits = String(phone).replace(/\D/g, "")
  if (!digits) return ""
  return digits.length === 10 ? `tel:+91${digits}` : `tel:${digits}`
}

function Fact({ label, value }) {
  if (!value) return null
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  )
}

export default function ParcelDetail() {
  const { use, parcelId } = useParams()
  const title = landUseFromSlug(use)
  const parcel = parcelById(use, parcelId)
  useTitle(parcel ? `${parcel.location || "Parcel"} · ${parcel.id}` : "Parcel")

  if (!title || !parcel) {
    return (
      <section className="page parcel-page">
        <div className="wrap">
          <h1>That parcel is not on the book.</h1>
          <Link to={title ? `/marketplace/${use}` : "/#marketplace"} className="btn btn-solid">
            Back to land bank
          </Link>
        </div>
      </section>
    )
  }

  const call = telHref(parcel.phone)

  return (
    <section className="page parcel-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/#marketplace">Land Bank</Link>
          <span>/</span>
          <Link to={`/marketplace/${use}`}>{title}</Link>
          <span>/</span>
          {parcel.location || parcel.id}
        </p>
        <p className="eyebrow">Land ID {parcel.id}</p>
        <h1>{parcel.location || title}</h1>
        <p className="lede">
          {[parcel.taluka, parcel.district, parcel.area].filter(Boolean).join(" · ")}
        </p>
        <img className="parcel-hero" src={parcel.image} alt={parcel.location || title} />
        <dl className="dealer-facts">
          <Fact label="Owner / agent" value={parcel.owner} />
          {parcel.phone ? (
            <div>
              <dt>Contact</dt>
              <dd>
                <a href={call}>{parcel.contactName ? `${parcel.contactName} · ${parcel.phone}` : parcel.phone}</a>
              </dd>
            </div>
          ) : null}
          <Fact label="Survey no." value={parcel.surveyNo} />
          <Fact label="Area" value={parcel.area} />
          <Fact label="Land type" value={parcel.landType} />
          <Fact label="Zoning / land use" value={parcel.zoning} />
          <Fact label="Frontage and road" value={parcel.frontage} />
          <Fact label="Other reservation" value={parcel.reservation} />
          <Fact label="Title status" value={parcel.titleStatus} />
          <Fact label="Title report" value={parcel.titleReport} />
          <Fact label="One pager" value={parcel.onePager} />
          <Fact label="Potential" value={parcel.potential} />
          <Fact label="Photos" value={parcel.photos} />
          <Fact label="Video" value={parcel.video} />
          <Fact label="Owner demand" value={parcel.demand} />
          <Fact label="Project type" value={parcel.projectType} />
          <Fact label="Our quotation" value={parcel.quotation} />
          <Fact label="Date" value={parcel.date} />
        </dl>
        <div className="dealer-actions">
          {call ? (
            <a className="btn btn-solid" href={call}>
              Call owner desk
            </a>
          ) : null}
          <Link className="btn btn-ghost" to={`/marketplace/${use}`}>
            Back to {title}
          </Link>
        </div>
      </div>
    </section>
  )
}
