import './App.css'
import { Home } from './pages/Home'




export type Destacado= {
  imagenUrl : string,
  estrellas : string, //es la url de la imagen 
  rating: number,
  nombre: string,
  precio:number
} 


function App() {
  
  return (
    <>
      <Home/>
    </>
  )
}

export default App
