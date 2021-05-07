import axios from "axios"
import { baseURL, config } from "../services"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Card(props) {
  const params = useParams()
  const card = props.cards.find((card) => card.category === params.category)

  return (
    <div className="card-container">
      {/* <h4>{title}</h4>
      <h4>{description}</h4>
      <h4>{link}</h4>
      <button>Edit</button> */}
    </div>
  )
}

export default Card
