import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Bhoomi Global home">
      <img src="/logo.jpg" alt="" />
      <span className="logo-name">
        <strong>Bhoomi Global</strong>
      </span>
      <span className="logo-line">Land.Value.Prosperity</span>
    </Link>
  )
}
