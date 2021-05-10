import { baseURL, config } from "../services"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Form(props) {
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [url, setURL] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newResource = {
      category,
      title,
      url,
      description,
    }
    await axios.post(baseURL, { fields: newResource }, config)
    props.setToggleFetch((curr) => !curr)
  }

  return (
    <main>
      <div className="form-container">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          iusto praesentium laboriosam consectetur dolore velit!
        </p>

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
    </main>
  )
}

export default Form
