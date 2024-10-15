import { useState } from "react";
import "./App.css";
import Jatekter from "./components/Jatekter";

function App() {
  //react state - leírja a program állapotát ha a state-ben megadott változó értéke változok,
  // akkor a react frissiti az oldal tartalmát azon részén, melyik a változótól függ
  // state- létrehozása useState hook - speciális függvény beállító függvény
  const [lista, setLista] = useState(["", "", "O", "", "O", "", "", "X", ""]);
  const [lepes, setLepes] = useState(0);
  function katt(adat) {
    // itt akarjuk lekezelni, hogy melyik elemre kattinittunk és mit írjunk a listába
    //console.log("App:", adat);
    
    // a state-ket közvetlenül nem változtthatjuk, csak beállító fg-en keresztül
    //1. csinálunk egy másolata
    const slista = [...lista]; // ne referánciát adjuk át
    // 2. másolatot modosítjuk
    // 3. másolat értéket adjuk az eredetinek
    if (lepes % 2 === 0) {
      slista[adat] = "X";
    } else {
      slista[adat] = "O";
    }
    setLista([...slista]);
 
    let sv = lepes;
    sv++;
    setLepes(sv);
   
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tictactoe</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt} />
      </article>
      <footer>Dobszay Dorka</footer>
    </div>
  );
}

export default App;
