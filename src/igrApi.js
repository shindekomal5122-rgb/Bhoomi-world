const BASE = (import.meta.env.VITE_IGR_API_URL || "").replace(/\/$/, "")

export function igrApiReady() {
  return Boolean(BASE)
}

function asList(data, keys) {
  if (Array.isArray(data)) return data.map(labelOf).filter(Boolean)
  if (!data || typeof data !== "object") return []
  for (const key of keys) {
    if (Array.isArray(data[key])) return data[key].map(labelOf).filter(Boolean)
  }
  if (Array.isArray(data.data)) return asList(data.data, keys)
  return []
}

function labelOf(item) {
  if (typeof item === "string" || typeof item === "number") return String(item).trim()
  if (!item || typeof item !== "object") return ""
  return String(item.name || item.label || item.district || item.taluka || item.village || item.title || "").trim()
}

async function igrFetch(path, options = {}) {
  if (!BASE) throw new Error("Set VITE_IGR_API_URL to your IGR API.")
  const response = await fetch(`${BASE}${path}`, {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    ...options,
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.message || data.error || "The IGR desk could not complete this request.")
  }
  return data
}

export async function fetchDistricts() {
  const data = await igrFetch("/districts")
  return asList(data, ["districts", "data"])
}

export async function fetchTalukas(district) {
  const data = await igrFetch(`/talukas?district=${encodeURIComponent(district)}`)
  return asList(data, ["talukas", "data"])
}

export async function fetchVillages(district, taluka) {
  const query = `district=${encodeURIComponent(district)}&taluka=${encodeURIComponent(taluka)}`
  const data = await igrFetch(`/villages?${query}`)
  return asList(data, ["villages", "data"])
}

export async function requestSatbara(body) {
  return igrFetch("/satbara", { method: "POST", body: JSON.stringify(body) })
}
