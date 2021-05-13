import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"

function Like() {
  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }

  const style = {
    backgroundColor: "#6e8da4",
    color: "rgb(235, 209, 175)",
    filter: "brightness(120%)",
    boxShadow: "0px 15px 10px -16px #6e8da4",
  }

  if (likes === 0) {
    return (
      <div>
        <button onClick={addLike}>
          <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
        </button>
      </div>
    )
  }
  if (likes === 1) {
    return (
      <div>
        <button onClick={addLike} style={{ ...style }}>
          <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
        </button>
      </div>
    )
  }
  if (likes > 1) {
    return (
      <div>
        <button onClick={addLike} style={{ ...style }}>
          <FontAwesomeIcon icon={faThumbsUp}>{likes}</FontAwesomeIcon>
        </button>
      </div>
    )
  }
}

export default Like
