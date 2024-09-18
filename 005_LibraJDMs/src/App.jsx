import { Auto } from "./datos/db";
import Modal from "./componentes/Modal";
import Autos from "./componentes/Autos";
import { useState } from 'react';

function App() {

  const [datos, setDatos] = useState(Auto)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function removeAuto(id) {
    setDatos((prevAutos) => prevAutos.filter((auto) => auto.id !== id));
  }

  function addAuto(auto) {
    setDatos((prevAutos) => [...prevAutos, auto]);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Mi Aplicación</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={openModal}
      >
        Abrir Modal
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
      <div>
        <button onClick={() => addAuto({
        id: 6,
        nombre: 'Efini RX7',
        marca: 'Mazda',
        img: 'auto_5',
        descripcion: {
            anio: 1995,
            kilometraje: 59450,
            transmision: 'Manual',
            color: 'Negro'
        },
        precio: 25999.00
        })}>Agregar auto</button>
      </div>
      <div>
        {datos.map((car) => (
          <Autos
            key={car.id}
            autos={car}
            onRemove={removeAuto}
          />
        ))}
      </div>
    </>
  )
}

export default App