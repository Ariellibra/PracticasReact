import React from 'react';

export default function Autos({ autos, onRemove }) {
  return (
    <div className="bg-slate-400 border-2 rounded p4 space-y-4">
        <button onClick={() => onRemove(autos.id)}>Eliminar</button>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-40 md:w-60 lg:w-80">
            <img src={`img/${autos.img}.jpg`} alt={autos.nombre} />
          </div>
          <div className="flex-1 space-y-2">
            <h2>{autos.nombre} | {autos.marca}</h2>
            <p>
              <strong>Año:</strong> {autos.descripcion.anio}<br />
              <strong>Color:</strong> {autos.descripcion.color}<br />
              <strong>Kilometraje:</strong> {autos.descripcion.kilometraje} km<br />
              <strong>Transmisión:</strong> {autos.descripcion.transmision}
            </p>
            <p>
              <strong>Precio USD:</strong> ${autos.precio}
            </p>
          </div>
        </div>
    </div>
  );
}
