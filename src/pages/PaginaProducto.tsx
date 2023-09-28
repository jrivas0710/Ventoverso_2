import { EncabezadoProducto } from "../components/encabezadoProducto/EncabezadoProducto"
import { Footer } from "../components/footer/Footer"
import Sidesheet2 from "../components/sidesheet/SideSheet2"
import './PaginaProducto.css'
import { Header } from "../components/header/Header"
import { ImagenesProducto } from "../components/imagenesProducto/ImagenesProducto"
import { DetalleProducto } from "../components/detalleProducto/DetalleProducto"
import { ProductosRelacionados } from "../components/productosRelacionados/ProductosRelacionados"
import { EvaluacionPrincipal } from "../components/evaluacion/EvaluacionPrincipal"
import { ProductosSimilares } from "../components/productosSimilares/ProductosSimilares"







export const PaginaProducto= () => {

  return (
    <>
    <Sidesheet2/>
    <EncabezadoProducto/>
    <ImagenesProducto/>
    <DetalleProducto/>
    <ProductosRelacionados/>
    <EvaluacionPrincipal/>
    <ProductosSimilares/>
    <Footer/>
    
    
    
   

  
    
  
    </>
  )
}



