import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import BurgerNav from "./BurgerNav"

function Burger() {
  const [showMenu, setShowMenu] = useState(false)

  let nav
  if (showMenu) {
    nav = <BurgerNav />
  }

  return (
    <div className="burger-container">
      <div>
        <FontAwesomeIcon
          className="svg-inline--fa fa-bars fa-w-20 burger-icon"
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {nav}
    </div>
  )
}

export default Burger
