import { useEffect, useState } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import { useTheme } from "../context/theme"

const links = [
  { to: "/about", label: "About" },
  { to: "/listings", label: "Listings" },
  { to: "/regions", label: "Regions" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
]

export default function Header() {
  const { theme, toggle } = useTheme()
  const location = useLocation()
  const [menuPath, setMenuPath] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const open = menuPath === location.pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("nav-open", open)
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === "Escape") setMenuPath("")
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="wrap header-bar">
        <Logo />
        <nav className="desk-nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <Link to="/visit" className="btn btn-solid btn-sm visit-link">
           Buy or Sell Land
          </Link>
          <button type="button" className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setMenuPath(open ? "" : location.pathname)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-sheet" role="dialog" aria-modal="true" aria-label="Menu">
          <nav>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setMenuPath("")}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/visit" className="btn btn-solid" onClick={() => setMenuPath("")}>
              Book a visit
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 3.5A8.2 8.2 0 1 0 20.5 14 6.4 6.4 0 0 1 15 3.5z" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
