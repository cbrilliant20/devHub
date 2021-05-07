function Form() {
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
