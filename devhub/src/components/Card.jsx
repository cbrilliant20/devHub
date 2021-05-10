import axios from "axios"
import { baseURL, config } from "../services"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Card(props) {
  const params = useParams()

  // useEffect(() => {
  //   if (params.id && props.cards.length) {
  //     const card = props.cards.find((card) => card.id === params.id)
  //     if (card) {
  //       setCategory(card.fields.category)
  //       setTitle(card.fields.title)
  //       setLink(card.fields.link)
  //       setDescription(card.fields.description)
  //     }
  //   }
  // }, [props.cards, params.id])

  // if (params.id) {
  //   const specificURL = `${baseURL}/${params.id}`
  //   await axios.put(specificURL, { fields: newResource }, config)
  // } else {

  const deleteResource = async () => {
    const specificURL = `${baseURL}/${props.card.id}`
    await axios.delete(specificURL, config)
    // props.setToggleFetch((curr) => !curr)
  }

  return (
    <div className="card-container">
      {/* <a href={props.card.field.link}></a> */}
      <h4>{props.card.fields.title}</h4>
      <h4>{props.card.fields.description}</h4>
      <h4>{props.card.fields.link}</h4>
      <button>Edit</button>
      <button onClick={deleteResource}>Remove</button>
    </div>
  )
}

export default Card
