import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">CSS</Link>
      <Link to="/">Javascript</Link>
      <Link to="/">React</Link>
      <Link to="/">Design</Link>
      <Link to="/">Misc.</Link>
    </nav>
  )
}

export default Nav