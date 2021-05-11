import axios from "axios"
import { baseURL, config } from "../services"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Edit(props) {
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [url, setURL] = useState("")
  const [description, setDescription] = useState("")
  const params = useParams()

  useEffect(() => {
    if (params.id && props.cards.length) {
      const card = props.cards.find((card) => card.id === params.id)

      if (card) {
        setCategory(card.fields.category)
        setTitle(card.fields.title)
        setURL(card.fields.url)
        setDescription(card.fields.description)
      }
    }
  }, [props.cards, params.id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newResource = {
      category,
      title,
      url,
      description,
    }
    const specificURL = `${baseURL}/${params.id}`
    await axios.put(specificURL, { fields: newResource }, config)

    props.setToggleFetch((curr) => !curr)
  }

  return (
    <div className="edit-container">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h5>Add Resource:</h5>
          <button type="submit">Submit</button>
        </div>
        <label htmlFor="Category"></label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Category</option>
          <option>CSS</option>
          <option>Javascript</option>
          <option>React</option>
          <option>Design</option>
          <option>Misc.</option>
        </select>

        <label htmlFor="Title"></label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label htmlFor="Link"></label>
        <input
          id="link"
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setURL(e.target.value)}
        ></input>

        <label htmlFor="Description"></label>
        <input
          id="description"
          type="textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </form>
    </div>
  )
}
export default Edit
