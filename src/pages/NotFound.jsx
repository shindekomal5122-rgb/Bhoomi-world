import { Link } from "react-router-dom"
import useTitle from "../useTitle"

export default function NotFound() {
  useTitle("Not found")
  return (
    <section className="page">
      <div className="wrap narrow">
        <p className="eyebrow">404</p>
        <h1>This path is not on the map.</h1>
        <p className="lede">The page may have moved. The listings and the studio are still here.</p>
        <Link to="/" className="btn btn-solid">
          Back home
        </Link>
      </div>
    </section>
  )
}
