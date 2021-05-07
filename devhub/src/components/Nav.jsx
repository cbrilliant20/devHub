import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/css">CSS</Link>
      <Link to="/javascript">Javascript</Link>
      <Link to="/react">React</Link>
      <Link to="/design">Design</Link>
      <Link to="/misc">Misc.</Link>
    </nav>
  )
}

export default Nav
