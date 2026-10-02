import { useState } from "react"
import { regions } from "../data"

const empty = { name: "", phone: "", email: "", region: "", note: "" }

export default function InquiryForm({ intent = "Ask about a parcel", listingName = "" }) {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const phone = String(data.get("phone") || "").trim()
    const email = String(data.get("email") || "").trim()
    if (name.length < 2) {
      setError("Add your name so we know who to answer.")
      return
    }
    if (!/^[0-9+\-\s]{8,}$/.test(phone)) {
      setError("Add a phone number we can reach.")
      return
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email does not look complete.")
      return
    }
    setError("")
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <h3>Request received</h3>
        <p>
          We will call you about {listingName || "the land you asked for"}. If you would rather walk it first, book a
          site day and we will bring the file.
        </p>
        <button type="button" className="btn btn-solid btn-sm" onClick={() => setSent(false)}>
          Send another note
        </button>
      </div>
    )
  }

  return (
    <form className="inquiry" onSubmit={onSubmit} noValidate>
      <p className="form-intent">{intent}</p>
      <div className="form-grid">
        <label>
          Name
          <input name="name" autoComplete="name" placeholder="Your name" defaultValue={empty.name} required />
        </label>
        <label>
          Phone
          <input name="phone" autoComplete="tel" placeholder="+91" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" placeholder="you@email.com" />
        </label>
        <label>
          Region
          <select name="region" defaultValue={listingName ? "" : ""}>
            <option value="">{listingName || "Any region"}</option>
            {regions.map((region) => (
              <option key={region.slug} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        What should the land do?
        <textarea name="note" rows="4" placeholder="Farm, orchard, a small house, or a holding you will plant later." />
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn-solid btn-block">
        Request a call
      </button>
    </form>
  )
}
