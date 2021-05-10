import { useParams } from "react-router"
import Card from "./Card"

function Category(props) {
  const params = useParams()
  return (
    <div className="card-container">
      {props.cards
        .filter((category) => category.fields.category === params.category)
        .map((card) => (
          <Card card={card}
            // setToggleFetch={setToggleFetch}
          />
        ))}
    </div>
  )
}

export default Category
