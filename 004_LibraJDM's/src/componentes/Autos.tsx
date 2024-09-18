import type { Auto } from '../tipos';

type AutoProps = {
  autos : Auto
}

export default function Autos({ autos }: AutoProps) {
  return (
    <>
      <div>
        <div>
        <h2>{autos.nombre} | {autos.marca}</h2>
        </div>
        <div>
          <div>
            <img src={`img/${autos.img}.jpg`} alt={autos.nombre} />
          </div>
          <div>
            <p>
              Año: {autos.descripcion.anio} <br />
              Color: {autos.descripcion.color} <br />
              Kilometraje: {autos.descripcion.kilometraje} <br />
              Transmision: {autos.descripcion.transmision} <br />
            </p>
            <p>
              Precio USD: $$ {autos.precio} <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

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