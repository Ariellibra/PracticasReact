import './App.css'
import { db } from "./datos/db";
import Autos from "./componentes/Autos";
import { useState } from 'react';

function App() {

  const [datos, setDatos] = useState(db)

  return (
    <>
      <div>
        {datos.map((car) => (
          <Autos
            key={car.id}
            autos={car}
          />
        ))}
      </div>
    </>
  )
}

export default App

          // <Autos 

          //   key={autos.id}
          //   <p>
          //     {autos.nombre}
          //     {autos.marca}
          //     <img src={`img/${autos.img}.jpg`} alt="" />
          //     {autos.descripcion.anio}
          //     {autos.descripcion.color}
          //     {autos.descripcion.kilometraje}
          //     {autos.descripcion.transmision}
          //     {autos.precio}
          //   </p>
          // />