import { Link } from "react-router-dom"
import axios from "axios"
import { baseURL, config } from "../services"

function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="edit-content">
          <h3>
            <a href={props.card.fields.url} target="_blank">
              {props.card.fields.title}
            </a>
          </h3>
          <h4>{props.card.fields.description}</h4>
          <h4></h4>
        </div>
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
