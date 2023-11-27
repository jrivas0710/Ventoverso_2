import { MarcasPopulares } from "../components/Marcas/MarcasPopulares"
import Carrusel from "../components/carrusel/Carrusel"
import { Destacados } from "../components/destacados/ProductosDestacados"
import { Footer } from "../components/footer/Footer"
import Iconos from "../components/iconos/Iconos"
import { Blogs } from "../components/blog/Blog"
import dataDestacados from '../components/destacados/dataDestacados.json'
import dataBlog from '../components/blog/dataBlog.json'
import Sidesheet2 from "../components/sidesheet/SideSheet2"
import dataCarrusel from '../components/carrusel/dataCarrusel.json'
import { ProductosSimilares } from "../components/productosSimilares/ProductosSimilares"
import { Destacado } from "../interfaces/Destacados"
import { useEffect, useState } from "react"
import { Blog } from "../components/blog/InterfaceBlog"


//la data se supone que es el json de back para Carrusel y Destacados

const Home = () => {







  return (
    <>
     
      <Carrusel dataCarrusel={dataCarrusel}/>
      <Iconos />
      {/* <ProductosSimilares dataProductosSimilares={dataDestacados}/> */}
      <Destacados/> 
      <MarcasPopulares/>
      <Blogs />
      
    </>
  )
}

export { Home }

