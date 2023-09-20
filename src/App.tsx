import './App.css'
import { Home } from './pages/Home'




export type Destacado= {
  imagenUrl : string,
  estrellas : string, //es la url de la imagen 
  rating: number,
  nombre: string,
  precio:number
} 

export type Blog = {
  imagenUrl : string,
  id:string,
  titulo:string
}


function App() {
  
  return (
    <>
      <Home/>
    </>
  )
}

export default App
