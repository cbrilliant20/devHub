import axios from "axios"
import { baseURL, config } from "../services"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Card() {
  const [cards, setCards] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const fetchCards = async () => {
      const resp = await axios.get(baseURL, config)
      setCards(resp.data.records)
      console.log(resp.data.records)
    }
    fetchCards()
  }, [])
  return (
    <div className="card-container">
      
    </div>
  )
}

export default Card
