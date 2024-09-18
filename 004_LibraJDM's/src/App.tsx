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