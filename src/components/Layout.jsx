import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const node = document.querySelector(hash)
      if (node) {
        node.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    const root = document.getElementById("main")
    if (!root) return undefined
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined
    const nodes = root.querySelectorAll("section, .listing-card, .story-card, .tile, .insight-row")
    const seen = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("in")
          seen.unobserve(entry.target)
        })
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    )
    nodes.forEach((node) => {
      if (node.classList.contains("hero-stage")) return
      node.classList.add("reveal")
      seen.observe(node)
    })
    return () => seen.disconnect()
  }, [pathname])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
