import React from "react";
import { useState, useRef } from "react";

const App = () => {
  const reyesGodos = [
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },
    {
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },
    {
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar",
    },
  ];


  const pasarPagina = () => {
    
  };
  

  return (
    <>
      <div>
        <button onClick={pasarPagina}>Ver Siguiente</button>
        <p>
          La aficion principal de {reyesGodos[0].nombre} es {reyesGodos[0].aficion}
        </p>
      </div>
    </>
  );
};
export default App;
