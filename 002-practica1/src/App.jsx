import './App.css'
import rey0 from './img/rey_atanagildo.png'
import rey1 from './img/rey_sisebuto.png'
import { useRef, useState } from 'react';

function App() {

  const cambio = 23.16;

  const btnRef = useRef(null);

  //const [contador, setContador] = useState(1);

  const divRef = useRef(null);

  const handleClick = () => {
    setContador(prevCont => prevCont + 1);

    if (divRef.current) {
      divRef.current.classList.add('text-red-500');
    }
  };

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1
    //e.target.className = e.target.className + ' bg-orange-500'

    e.target.classList.remove('bg-green-500')
    //e.target.classList.add('bg-orange-500')
  }

  const estilo = 'select-none';
  const color = 'bg-orange-500';

  const convertir = () => {
    divRef.current.innerHTML = Number(divRef.current.innerHTML) * cambio;
  }

  const fotoCambio = (j) => {

    j.target.src = rey1

  }

  const lectura = (e) => {
    divRef.current.innerHTML = e.target.value;
  }

  return (
    <>
      <div className='select-none bg-green-500' onClick={incrementar} ref={divRef} >1</div>

      <button className='border-2' onClick={convertir} >Aceptar</button>
      <div>
        <img src={rey0} onClick={fotoCambio} className='wd-96' />
      </div>
      <input onChange={lectura} className='' />





    </>
  )
}

export default App
