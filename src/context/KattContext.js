// azt szeretnénk hogy egyeteln helyen tudjuk kezelni a gobális változókat, azok a
//pl -kattt fvény, illetelve a listát
// nem szüksséges buborékoltatásra, az adatok tübb komponensen való átadásra

// a content
// provider tartalmazza az állapotot, adatok itt és ezt rendeli hozzá a contex
//a prpvider az áltela körbeölelt komponensek számára tudja átadni az adatokat

//useContext hook -itt mondjuk az egyes komponensekben, hogy melyik adatok akarjuk ott felhasználni

import { createContext, useState } from "react";

export const KattContext = createContext("");

export const KattProvider = ({ childen }) => {
  const [lista, setLista] = useState([
    "X",
    "X",
    " ",
    "O",
    " ",
    " ",
    " ",
    " ",
    "O",
  ]);
  const [lepes, setLepes] = useState(0);
  function katt(adat) {
    const slista = [...lista];
    if (lepes % 2 === 0) {
      slista[adat] = "X";
    } else {
      slista[adat] = "O";
    }
    setLista([...slista]);

    let sv = lepes + 1;
    setLepes(sv);
  }
  return (
    <KattContext.Provider value={{ lista, katt }}>
      {childen}
    </KattContext.Provider>
  );
};
