import { useEffect, useState } from "react"
import { fetchDistricts, fetchTalukas, fetchVillages, igrApiReady, requestSatbara } from "../igrApi"

const EMPTY = {
  district: "",
  taluka: "",
  village: "",
  surveyNo: "",
  name: "",
  mobile: "",
}

export default function SatbaraForm() {
  const [form, setForm] = useState(EMPTY)
  const [districts, setDistricts] = useState([])
  const [talukas, setTalukas] = useState([])
  const [villages, setVillages] = useState([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (!igrApiReady()) return undefined
    let live = true
    fetchDistricts()
      .then((list) => {
        if (live) setDistricts(list)
      })
      .catch(() => {
        if (live) setDistricts([])
      })
    return () => {
      live = false
    }
  }, [])

  useEffect(() => {
    if (!form.district || !igrApiReady()) {
      setTalukas([])
      return undefined
    }
    let live = true
    fetchTalukas(form.district)
      .then((list) => {
        if (live) setTalukas(list)
      })
      .catch(() => {
        if (live) setTalukas([])
      })
    return () => {
      live = false
    }
  }, [form.district])

  useEffect(() => {
    if (!form.district || !form.taluka || !igrApiReady()) {
      setVillages([])
      return undefined
    }
    let live = true
    fetchVillages(form.district, form.taluka)
      .then((list) => {
        if (live) setVillages(list)
      })
      .catch(() => {
        if (live) setVillages([])
      })
    return () => {
      live = false
    }
  }, [form.district, form.taluka])

  function setField(key, value) {
    setResult(null)
    setError("")
    setForm((current) => {
      const next = { ...current, [key]: value }
      if (key === "district") {
        next.taluka = ""
        next.village = ""
      }
      if (key === "taluka") next.village = ""
      return next
    })
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (!form.district.trim() || !form.taluka.trim() || !form.village.trim() || !form.surveyNo.trim()) {
      setError("Add district, taluka, village, and survey number.")
      return
    }
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
      setError("Add a 10-digit mobile number.")
      return
    }
    if (!igrApiReady()) {
      setError("The IGR API URL is not set yet. Add VITE_IGR_API_URL and restart the app.")
      return
    }
    setBusy(true)
    setError("")
    try {
      const data = await requestSatbara({
        document: "7/12",
        district: form.district.trim(),
        taluka: form.taluka.trim(),
        village: form.village.trim(),
        surveyNo: form.surveyNo.trim(),
        name: form.name.trim(),
        mobile: form.mobile.trim(),
      })
      setResult(data)
    } catch (err) {
      setError(err.message || "The IGR desk could not complete this request.")
    } finally {
      setBusy(false)
    }
  }

  if (result) {
    const link = result.url || result.documentUrl || result.pdf || ""
    return (
      <div className="satbara-form form-success" role="status">
        <h2>7/12 request sent</h2>
        <p>{result.message || "The IGR desk has the survey details. The extract will follow on this file."}</p>
        {link ? (
          <a className="btn btn-solid" href={link} target="_blank" rel="noreferrer">
            Open 7/12 extract
          </a>
        ) : null}
        <button type="button" className="btn btn-ghost" onClick={() => setResult(null)}>
          New request
        </button>
      </div>
    )
  }

  return (
    <form className="satbara-form" onSubmit={onSubmit} noValidate>
      <h2>7/12 extract</h2>
      <p>District, taluka, village, and survey number go to the IGR desk for a digitally signed 7/12.</p>
      <div className="form-grid">
        <LocationField
          label="District"
          value={form.district}
          options={districts}
          onChange={(value) => setField("district", value)}
        />
        <LocationField
          label="Taluka"
          value={form.taluka}
          options={talukas}
          onChange={(value) => setField("taluka", value)}
        />
        <LocationField
          label="Village"
          value={form.village}
          options={villages}
          onChange={(value) => setField("village", value)}
        />
        <label>
          Survey / Gat no.
          <input
            name="surveyNo"
            value={form.surveyNo}
            onChange={(event) => setField("surveyNo", event.target.value)}
            placeholder="214/1"
            required
          />
        </label>
        <label>
          Applicant name
          <input
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setField("name", event.target.value)}
            placeholder="Name on the request"
          />
        </label>
        <label>
          Mobile
          <input
            name="mobile"
            inputMode="numeric"
            autoComplete="tel"
            value={form.mobile}
            onChange={(event) => setField("mobile", event.target.value)}
            placeholder="10-digit mobile"
            required
          />
        </label>
      </div>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn btn-solid" disabled={busy}>
        {busy ? "Sending…" : "Get 7/12"}
      </button>
    </form>
  )
}

function LocationField({ label, value, options, onChange }) {
  if (options.length) {
    return (
      <label>
        {label}
        <select value={value} onChange={(event) => onChange(event.target.value)} required>
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    )
  }

  return (
    <label>
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={label} required />
    </label>
  )
}
