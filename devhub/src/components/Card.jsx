import { Link } from "react-router-dom"
import axios from "axios"
import { baseURL, config } from "../services"

function Card(props) {
  return (
    <div className="card-card-container">
      
      <div className="card">
        {/* <a href={props.card.field.link}></a> */}
        <h4>{props.card.fields.title}</h4>
        <h4>{props.card.fields.description}</h4>
        <h4>{props.card.fields.link}</h4>
        <Link
          to={`/resource/${props.card.fields.category}/edit/${props.card.id}`}
        >
          <button>Edit</button>
        </Link>
      </div>
    </div>
  )
}

export default Card
