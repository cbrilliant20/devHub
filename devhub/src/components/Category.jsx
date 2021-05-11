import { useParams } from "react-router"
import Card from "./Card"
import { useState } from "react"

function Category(props) {
  const [toggleFetch, setToggleFetch] = useState("")
  const params = useParams()
  return (
    <div className="card-container">
      {props.cards
        .filter((category) => category.fields.category === params.category)
        .map((card, index) => (
          <Card key={index} card={card} setToggleFetch={setToggleFetch} />
        ))}
    </div>
  )
}

export default Category
