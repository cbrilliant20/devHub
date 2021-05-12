import { baseURL, config } from "../services"
import axios from "axios"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

function Home(props) {
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [url, setURL] = useState("")
  const [description, setDescription] = useState("")
  const history = useHistory()

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
    history.push(`/resource/${category}`)
  }

  return (
    <main>
      <div className="home-container">
        <h2>Welcome to devHub</h2>
        <p>
          devHub is community project used to store and organize the many
          resources a new developer uses. Please add your favorite resources
          below.
        </p>

        <form className="home-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h5>Add Resource:</h5>
            {/* <Link defer to={`/resource/${category}`}> */}
            <button type="submit">Submit</button>
            {/* </Link> */}
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
            <option>Misc</option>
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

export default Home
