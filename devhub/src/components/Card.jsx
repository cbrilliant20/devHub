import { Link } from "react-router-dom"
import axios from "axios"
import { baseURL, config } from "../services"

function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        {/* <a href={props.card.field.link}></a> */}
        <h3>{props.card.fields.title}</h3>
        <h4>{props.card.fields.description}</h4>
        {/* <button>
          <a href={props.cards.fields.url}>Go To</a>
        </button> */}
        <h4></h4>
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
