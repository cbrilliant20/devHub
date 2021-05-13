import { Link } from "react-router-dom"
import Like from "./Like"

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
        <div className="card-buttons">
          <Link
            to={`/resource/${props.card.fields.category}/edit/${props.card.id}`}
          >
            <button>Edit</button>
          </Link>
          <Like />
        </div>
      </div>
    </div>
  )
}

export default Card
