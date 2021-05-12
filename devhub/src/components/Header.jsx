import Burger from "./Burger"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>devHub</h1>
      </Link>
      <Burger />
    </header>
  )
}

export default Header
