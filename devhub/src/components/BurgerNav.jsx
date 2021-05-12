import { Link } from "react-router-dom"

function BurgerNav() {
  return (
    <div className="burger-nav">
      <Link to="/">Home</Link>
      <Link to="/resource/CSS">CSS</Link>
      <Link to="/resource/Javascript">Javascript</Link>
      <Link to="/resource/React">React</Link>
      <Link to="/resource/Design">Design</Link>
      <Link to="/resource/Misc">Misc.</Link>
    </div>
  )
}
export default BurgerNav
