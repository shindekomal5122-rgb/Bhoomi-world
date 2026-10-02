import { Link } from "react-router-dom"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p>Clear-title land, walked and written down, with someone who stays after the sale.</p>
          </div>
          <div className="footer-grid">
            <div>
              <h2>Explore</h2>
              <Link to="/listings">Listings</Link>
              <Link to="/regions">Regions</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/insights">Insights</Link>
            </div>
            <div>
              <h2>Company</h2>
              <Link to="/about">About</Link>
              <Link to="/about#method">How we work</Link>
              <Link to="/visit">Book a visit</Link>
              <Link to="/insights/after-registration">Stewardship</Link>
            </div>
            <div>
              <h2>Visit</h2>
              <p>Field office, Jayamahal</p>
              <p>Bengaluru 560046</p>
              <a href="tel:+918045672100">+91 80 4567 2100</a>
              <a href="mailto:hello@bhoomi.world">hello@bhoomi.world</a>
            </div>
            <div>
              <h2>Follow</h2>
              <a href="mailto:hello@bhoomi.world">Email the studio</a>
              <Link to="/visit">Request a call</Link>
              <Link to="/insights">Field notes</Link>
              <div className="social-row" aria-label="Social">
                <a href="mailto:hello@bhoomi.world" aria-label="Email">@</a>
                <Link to="/insights" aria-label="Notes">N</Link>
                <Link to="/regions" aria-label="Map">M</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-base">
          <p>© {new Date().getFullYear()} Bhoomi World. Land, held with care.</p>
          <p>
            <Link to="/about">About</Link>
            <Link to="/visit">Visit</Link>
            <Link to="/listings">Listings</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
