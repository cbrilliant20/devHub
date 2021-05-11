import { Link } from "react-router-dom"
import axios from "axios"
import { baseURL, config } from "../services"

function Card(props) {
  const deleteResource = async () => {
    const specificURL = `${baseURL}/${props.card.id}`
    await axios.delete(specificURL, config)
    props.setToggleFetch((curr) => !curr)
  }

  return (
    <div className="card-container">
      {/* <a href={props.card.field.link}></a> */}
      <h4>{props.card.fields.title}</h4>
      <h4>{props.card.fields.description}</h4>
      <h4>{props.card.fields.link}</h4>
      <Link
        to={`/resource/${props.card.fields.category}/edit/${props.card.id}`}
      >
        <button>Edit</button>
      </Link>
      <button onClick={deleteResource}>Delete</button>
    </div>
  )
}

export default Card
