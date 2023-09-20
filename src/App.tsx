import './App.css'
import { Home } from './pages/Home'
import dataDestacados from './components/destacados/dataDestacados.json'



export type Destacado= {
  imagenUrl : string,
  estrellas : string, //es la url de la imagen 
  rating: number,
  nombre: string,
  precio:number
} 


function App(props:{dataDestacados:Destacado []}) {
  
  return (
    <>
      <Home dataDestacados = {dataDestacados} />
    </>
  )
}

export default App
