import { useEffect } from "react"

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Bhoomi` : "Bhoomi — Find land. Unlock value."
  }, [title])
}
