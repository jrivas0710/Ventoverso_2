import './App.css'
import { Home } from './pages/Home'
import {PaginaProducto} from './pages/PaginaProducto'
import { DestacadosClarinete } from './components/destacadosClarinete/DestacadosClarinete'
import dataDesctacadoClarinete from './components/destacadosClarinete/dataDestacadoClarinete.json'



function App() {
  
  return (
    <>
      {/* <Home/>    */}
     {/* <PaginaProducto/>  */}
     <DestacadosClarinete dataDestacadoClarinete={dataDesctacadoClarinete}/>
    </>
  )
}

export default App
