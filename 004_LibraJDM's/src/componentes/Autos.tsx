import type { Auto } from '../tipos';

type AutoProps = {
  autos : Auto
}

export default function Autos({ autos }: AutoProps) {
  return (
    <div>
      <h2>{autos.nombre} | {autos.marca}</h2>
      <img src={`img/${autos.img}.jpg`} alt={autos.nombre} />
    </div>
  );
}
