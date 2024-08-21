import React from "react";
import { useState, useRef } from "react";

const App = () => {
  //const [nombre, setNombre] = useState("Jab")

  /*const cambiar=()=>{
    setNombre("Bob Esponja");
    console.log(nombre);
  }
  console.log(`Inicio: ${nombre}`);*/

  /*return (
    <>
      <div>
        <h1>me llamo {nombre}</h1>
        <button onClick={cambiar}>Cambiar nombre</button>
      </div>
    </>

  )
}*/

  //let [contador, setContador] = useState(0);

  /*const restar = ()=> {
    setContador(contador - 1);
  }
  const aumentar = ()=> {
    setContador(contador + 1);
  }
  const restablecer = ()=> {
    setContador(0);
  }*/

  /*return (
    <>
      <div>
        <h1>{contador}</h1>
        <button onClick={()=>setContador(--contador)} >Restar</button>
        <button onClick={()=>setContador(++contador)} >Aumentar</button>
        <button onClick={()=>setContador(0)} >Restablecer</button>
      </div>
    </>
  )
}
export default App*/

  const [suma, setSuma] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sumar = () => {
    setSuma(num1 + num2);
  };

  const modificar1 = (e) => {
    setNum1(Number(e.target.value));
  };

  const modificar2 = (j) => {
    setNum2(Number(j.target.value));
  };

  let estilo =
    "text-orange-500 leading-10 w-40 m-1.5 text-center border-4 border-red-500 border-dotted outline-none text-7xl rounded-lg";

  return (
    <>
      <div className="text-5xl flex items-center">
        <input
          type="number"
          className={estilo}
          onChange={modificar1}
          value={num1}
        />{" "}
        +{" "}
        <input
          type="number"
          className={estilo}
          onChange={modificar2}
          value={num2}
        />{" "}
        = <input type="number" className={estilo} readOnly value={suma} />
        <button
          onClick={sumar}
          className="text-4xl text-orange-500 border-2 border-red-500 border-solid p-4"
        >
          Sumar
        </button>
      </div>
    </>
  );
};

export default App;
