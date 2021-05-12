import "./App.css"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Category from "./components/Category"
import Edit from "./components/Edit"
import Burger from "./components/Burger"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseURL, config } from "./services"
import { Route, Switch } from "react-router-dom"

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
  }, [toggleFetch])

  return (
    <div className="App">
      <Nav />
      <Header />
      <Switch>
        <Route exact path="/resource/:category">
          <Category cards={cards} setToggleFetch={setToggleFetch} />
        </Route>
        <Route exact path="/">
          <Home setToggleFetch={setToggleFetch} cards={cards} />
        </Route>
        <Route exact path="/resource/:category/edit/:id">
          <Edit cards={cards} setToggleFetch={setToggleFetch}></Edit>
        </Route>
      </Switch>
      <Nav />
      <Footer />
    </div>
  )
}

export default App
