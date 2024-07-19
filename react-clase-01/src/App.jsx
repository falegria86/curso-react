import { CounterApp } from "./CounterApp";
import { RenderCondicional } from "./RenderCondicional";
import { ThemeToggle } from "./ThemeToggle";

function App({ titulo }) {

  return (
    <>
      <CounterApp />
      <RenderCondicional />
      <ThemeToggle />
      <h1>
        {titulo}
      </h1>
    </>
  )
}

export default App;
