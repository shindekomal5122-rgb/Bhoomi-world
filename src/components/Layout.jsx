import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    const keepTop = () => {
      const html = document.documentElement
      html.style.scrollBehavior = "auto"
      window.scrollTo(0, 0)
      html.scrollTop = 0
      document.body.scrollTop = 0
    }

    const onPageShow = (event) => {
      if (event.persisted) keepTop()
    }
    window.addEventListener("pageshow", onPageShow)
    return () => window.removeEventListener("pageshow", onPageShow)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    const keepTop = () => {
      html.style.scrollBehavior = "auto"
      window.scrollTo(0, 0)
      html.scrollTop = 0
      document.body.scrollTop = 0
    }

    const nav = performance.getEntriesByType("navigation")[0]
    const reloaded = nav?.type === "reload"
    const sectionHash = hash && hash !== "#main" ? hash : ""
    const stayAtTop = pathname === "/" && (reloaded || !sectionHash)

    if (!stayAtTop && sectionHash) {
      const node = document.querySelector(sectionHash)
      if (node) {
        node.scrollIntoView({ block: "start" })
        return undefined
      }
    }

    keepTop()
    const frame = window.requestAnimationFrame(keepTop)
    const later = window.setTimeout(keepTop, 120)
    window.addEventListener("load", keepTop)
    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(later)
      window.removeEventListener("load", keepTop)
    }
  }, [pathname, hash])

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
