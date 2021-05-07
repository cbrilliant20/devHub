import "./App.css"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Card from "./components/Card"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseURL, config } from "./services"
import { Link, Route } from "react-router-dom"

function App() {
  const [cards, setCards] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  // const { title, description, link } = props.card.fields

  useEffect(() => {
    const fetchCards = async () => {
      const resp = await axios.get(baseURL, config)
      setCards(resp.data.records)
      console.log(resp.data.records)
    }
    fetchCards()
  }, [])

  return (
    <div className="App">
      <Nav />
      <Header />
      <Route path="/resource/:category">
        <div className="card-container">
          {cards.map((card) => (
            <Card card={card} setToggleFetch={setToggleFetch} />
          ))}
        </div>
      </Route>
      <Nav />
      <Form />
      <Footer />
    </div>
  )
}

export default App
