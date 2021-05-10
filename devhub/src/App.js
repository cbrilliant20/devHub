import "./App.css"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Card from "./components/Card"
import Category from "./components/Category"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseURL, config } from "./services"
import { Link, Route } from "react-router-dom"

function App() {
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
    <div className="App">
      <Nav />
      <Header />
      <Route path="/resource/:category">
        <Category cards={cards} />
      </Route>
      <Nav />
      <Form setToggleFetch={setToggleFetch} cards={cards} />
      <Footer />
    </div>
  )
}

export default App
