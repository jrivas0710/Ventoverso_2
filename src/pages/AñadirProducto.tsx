import { Footer } from "../components/footer/Footer"
import Sidesheet2 from "../components/sidesheet/SideSheet2"
/* import './PaginaProducto.css' */

import { ProductosRelacionados } from "../components/productosRelacionados/ProductosRelacionados"
import { EvaluacionPrincipal } from "../components/evaluacion/EvaluacionPrincipal"
import { ProductosSimilares } from "../components/productosSimilares/ProductosSimilares"
import  Comentario  from "../components/comentarios/Comentarios"
import { Migas } from "../components/migas/Migas"
import dataComentarios from "../components/comentarios/dataComentarios.json"
import { ProductoSib } from "../components/productoSib/ProductoSib"

import { useParams } from "react-router-dom"
import { Blogs } from "../components/blog/Blog"
import { DetalleProducto } from "../components/detalleProducto/DetalleProducto"





export const PaginaProducto= () => {

  const { id } = useParams<{ id: string }>();
  console.log(id)

  console.log(id)
   
  return (
    <>
    

    <div className="containerPaginaProducto">
    <Migas/>
    {id && <ProductoSib id = {id}/> }  
    <DetalleProducto/>
    <ProductosRelacionados /* dataProductosRelacionados ={dataProductosRelacionados} *//>
    <EvaluacionPrincipal/>
    <Comentario dataComentario = {dataComentarios}/>
    <ProductosSimilares />
    <Blogs/>
    </div>


    
    
    
   

  
    
  
    </>
  )
}



