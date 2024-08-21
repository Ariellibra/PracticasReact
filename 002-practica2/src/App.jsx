import './App.css'
import rey1 from './assets/rey_atanagildo.png'
import rey2 from './assets/rey_ataulfo.png'
import rey3 from './assets/rey_sisebuto.png'
import rey4 from './assets/rey_incognito.png'

function App() {

  let reyes = [
    {
      name:"Atanadilgo",
      imagen: rey1
    },
    {
      name:"Ataulfo",
      imagen: rey2
    },
    {
      name:"Sisebuto",
      imagen: rey3
    }
  ]

  let fondo = 'width-1/3 bg-gray-500 text-3xl text-green-500 rounded-2xl border-4 border-red-500 text-center'
  let fotos = 'flex justify-evenly'

  let cabecera =
    {
      fondo: 'width-1/3 bg-orange-600 text-3xl text-green-500 rounded-2xl border-4 border-red-500 text-center',
      fotos: 'flex justify-evenly'
    }

  const cambiarNombre = (n) =>{

    if(n.target.innerHTML == "Visto"){
      n.target.innerHTML = " ";
    } else{
      n.target.innerHTML = "Visto";
    }
    
  }

  const cambiarFoto = (e) =>{
    if(e.target.src.includes("incognito")){
      e.target.classList.add("invisible")
    }
    else if (e.target.src){
      e.target.src = rey4;
      e.target.parentNode.classList.remove("bg-orange-600")
      e.target.parentNode.classList.remove("border-4")
    }

  }



  return (
    <div className={cabecera.fotos}>
      
      <div className={cabecera.fondo}>
        <img onClick={cambiarFoto} src={reyes[0].imagen} alt="" />
        <h1 onClick={cambiarNombre}  >Rey {reyes[0].name}</h1>
      </div>

      <div className={cabecera.fondo}>
        <img onClick={cambiarFoto} src={reyes[1].imagen} alt="" />
        <h1 onClick={cambiarNombre}  >Rey {reyes[1].name}</h1>
      </div>

      <div className={cabecera.fondo}>
        <img onClick={cambiarFoto} src={reyes[2].imagen} alt="" />
        <h1 onClick={cambiarNombre}  >Rey {reyes[2].name}</h1>
      </div>

    </div>
  )
}


export default App
