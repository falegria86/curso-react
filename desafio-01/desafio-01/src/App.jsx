import { useState } from "react"

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [texto, setTexto] = useState("")

  const handleInputChange = (event) => {
    // console.log(event.target.value)
    setInputText(event.target.value);
  }

  const handleSubmit = () => {
    setTexto(inputText);
    setInputText("");
  }

  return (
    <>
      <input type="text" onChange={handleInputChange} value={inputText} />
      <button style={{ marginLeft: 8 }} onClick={handleSubmit}>Aceptar</button>

      <h2>{texto}</h2>
    </>
  )
}
export default App
