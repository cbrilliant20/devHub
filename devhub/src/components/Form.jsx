import { baseURL, config } from "../services"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Form() {
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [link, setLink] = useState("")
  const [description, setDescription] = useState("")





  return (
    <form>
      <label htmlFor="Category"></label>
      <select id="category">
        <option>CSS</option>
        <option>Javascript</option>
        <option>React</option>
        <option>Design</option>
        <option>Misc.</option>
      </select>

      <label htmlFor="Title"></label>
      <input id="title" type="text"></input>

      <label htmlFor="Link"></label>
      <input id="link" type="text"></input>

      <label htmlFor="Description"></label>
      <input id="description" type="textarea"></input>

      <button>Submit</button>
    </form>
  )
}

export default Form
