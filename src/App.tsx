import './App.css'
import { Home } from './pages/Home'
import {PaginaProducto} from './pages/AñadirProducto'
import { DestacadoClarinetes } from './pages/DestacadosClarinete'
import dataDesctacadoClarinete from './components/destacadosClarinete/dataDestacadoClarinete.json'
import { PageProducto } from './pages/Producto'
import { CarroCompras } from './pages/CarroCompras'
import { PagResultadoCompra } from './pages/PagResultadoCompra'
import Sidesheet2 from './components/sidesheet/SideSheet2'
import { Footer } from './components/footer/Footer'
import { CrearUser } from './pages/CrearUsurario'




function App() {
  
  return (
    <>
   
      {/* <Home/>    */}
     {/* <AñadirProducto/>  */}
     {/* <DestacadoClarinetes/> */}
     {/* <Producto/> */}
    
     {/* <CarroCompras/>  */}
   {/*  <PagResultadoCompra/>  */}
   <CrearUser/>

    
    </>
  )
}

export default App
