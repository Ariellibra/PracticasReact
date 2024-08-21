import './App.css'
import rey0 from './img/rey_atanagildo.png'
import rey1 from './img/rey_sisebuto.png'
import { useRef, useState } from 'react';

function App() {

  const cambio = 23.16;

  //const btnRef = useRef(null);
  //const [contador, setContador] = useState(1);

  const divRef = useRef(null);

  /*const handleClick = () => {
    setContador(prevCont => prevCont + 1);

    if (divRef.current) {
      divRef.current.classList.add('text-red-500');
    }
  };*/

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    //e.target.className = e.target.className + ' bg-orange-500'

    //e.target.classList.remove('bg-green-500')
    //e.target.classList.add('bg-orange-500')

    if (Number(e.target.innerHTML) > 7) {
      e.target.classList.add('bg-red-500');
    }
    if (e.target.innerHTML > 9) {
      e.target.innerHTML = "1";
      e.target.classList.remove('bg-red-500');
      e.target.classList.add('bg-green-500');
    }

  }

  const estilo = 'select-none';
  const color = 'bg-orange-500';

  const convertir = () => {
    divRef.current.innerHTML = Number(divRef.current.innerHTML) * cambio;
  }

  //const [imagen, setImagen] = useState(0);

  function fotoCambio (j){

    if(j.target.src.includes("atanagildo")){
      j.target.src = rey1;
    }else{
      j.target.src = rey0;
    }
  }

  /*const imgreyes = document.getElementById('image');

  imgreyes.addEventListener('click', () => {
    imgreyes.src = imgreyes.src === rey0 ? rey1 : rey0;
  });*/

  /*const handleClick = () => {
    setImagen(prevImage => (prevImage === rey0? rey1: rey0));
  };*/

  /*const handleClick = () => {
    setImagen(imagen === rey0? rey1: rey0);
  };*/



  const lectura = (e) => {
    divRef.current.innerHTML = e.target.value;
  }

  return (
    <>
      <div className='select-none bg-green-500' onClick={incrementar} ref={divRef} >1</div>

      <button className='border-2' onClick={convertir} >Aceptar</button>
      <div>
        <img id="image" src={rey0} /*ref={refImg}*/ onClick={fotoCambio} className='wd-96' />
      </div>
      <input onChange={lectura} className='' />
    </>
  )
}

export default App
