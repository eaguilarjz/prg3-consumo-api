import { useState } from "react";
import './Contador.css'

function Contador() {
  const [contador, setContador] = useState(0);

  // Funcion de flecha
  const incrementar = (previo) => { return previo + 1; };
  const disminuir = (previo) => { return previo - 1; };

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={() => { setContador(incrementar) }} className="btn-incremento">
        +
      </button>
      <button onClick={() => { setContador(disminuir) }} className="btn-incremento">
        -
      </button>
    </div>
  );
}

export default Contador