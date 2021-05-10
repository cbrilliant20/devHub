import axios from "axios"
import { baseURL, config } from "../services"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Card(props) {
  return (
    <div className="card-container">
      {/* <a href={props.card.field.link}></a> */}
      <h4>{props.card.fields.title}</h4>
      <h4>{props.card.fields.description}</h4>
      <h4>{props.card.fields.link}</h4>
      <button>Edit</button>
    </div>
  )
}

export default Card
