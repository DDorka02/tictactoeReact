import { useContext } from "react";
import "./App.css";
import Jatekter from "./components/Jatekter";
import { KattContext } from "./context/KattContext";

function App() {
  const {lista} = useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tictactoe</h1>
      </header>
      <article>
        <div className="jatekter">
        <Jatekter lista={lista}/>
        </div>
      </article>
      <footer>Dobszay Dorka</footer>
    </div>
  );
}

export default App;