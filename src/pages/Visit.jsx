import { useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { listings } from "../data"
import useTitle from "../useTitle"

export default function Visit() {
  useTitle("Book a visit")
  const [params] = useSearchParams()
  const preset = params.get("listing") || ""
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const phone = String(data.get("phone") || "").trim()
    const when = String(data.get("when") || "")
    if (name.length < 2) {
      setError("Add your name.")
      return
    }
    if (!/^[0-9+\-\s]{8,}$/.test(phone)) {
      setError("Add a phone number we can reach.")
      return
    }
    if (!when) {
      setError("Choose a preferred day.")
      return
    }
    setError("")
    setSent(true)
  }

  return (
    <section className="page">
      <div className="wrap visit-grid">
        <div>
          <p className="eyebrow">Book a visit</p>
          <h1>Walk the land with the file in hand.</h1>
          <p className="lede">
            A site day runs from morning to early afternoon. We meet at the nearest sensible road, not at a hotel
            lobby.
          </p>
          <ul className="plain-list">
            <li>The survey sketch and the encumbrance note come with us</li>
            <li>You can bring a family member or an advisor</li>
            <li>If the weather closes the last kilometre, we say so and move the day</li>
          </ul>
          <p>
            Prefer a call first? Ring <a href="tel:+918045672100">+91 80 4567 2100</a> or write{" "}
            <a href="mailto:hello@bhoomi.world">hello@bhoomi.world</a>.
          </p>
        </div>
        <div className="panel-light">
          {sent ? (
            <div className="form-success" role="status">
              <h2>Visit requested</h2>
              <p>We will confirm the day, the meeting point, and what to wear for the walk.</p>
              <Link to="/listings" className="btn btn-solid btn-sm">
                Keep looking
              </Link>
            </div>
          ) : (
            <form className="inquiry" onSubmit={onSubmit} noValidate>
              <p className="form-intent">Tell us when you can be on the ground</p>
              <div className="form-grid">
                <label>
                  Name
                  <input name="name" autoComplete="name" required />
                </label>
                <label>
                  Phone
                  <input name="phone" autoComplete="tel" required />
                </label>
                <label>
                  Preferred day
                  <input name="when" type="date" required />
                </label>
                <label>
                  Parcel
                  <select name="listing" defaultValue={preset}>
                    <option value="">Not sure yet</option>
                    {listings.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label>
                Notes
                <textarea name="note" rows="4" placeholder="Who is coming, and what you want to see first." />
              </label>
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <button type="submit" className="btn btn-solid btn-block">
                Request the day
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
