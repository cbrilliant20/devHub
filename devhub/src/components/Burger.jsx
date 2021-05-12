import { useState } from "react"
import React from "react"

function Burger() {
  const [open, setOpen] = useState(false)

  return (
    <Burger className="burger" open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </Burger>
  )
}

export default Burger
