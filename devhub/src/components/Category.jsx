import { useParams } from "react-router"
import Card from "./Card"
import { useState } from "react"

function Category(props) {
  const [toggleFetch, setToggleFetch] = useState([])
  const params = useParams()

  return (
    <div className="category-container">
      <h2>{params.category} Resources</h2>
      {props.cards
        .filter((category) => category.fields.category === params.category)
        .map((card, index) => (
          <Card key={index} card={card} setToggleFetch={setToggleFetch} />
        ))}
    </div>
  )
}

export default Category
