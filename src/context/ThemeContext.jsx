import { useEffect, useState } from "react"
import { ThemeContext } from "./theme"

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("bhoomi-theme")
    return saved === "dark" ? "dark" : "light"
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("bhoomi-theme", theme)
  }, [theme])

  const toggle = () => setTheme((current) => (current === "light" ? "dark" : "light"))

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}
