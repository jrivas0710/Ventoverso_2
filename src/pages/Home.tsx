import { MarcasPopulares } from "../components/Marcas/MarcasPopulares"
import Carrusel from "../components/carrusel/Carrusel"
import { Destacados } from "../components/destacados/ProductosDestacados"
import Iconos from "../components/iconos/Iconos"
import { Blogs } from "../components/blog/Blog"
import dataCarrusel from '../components/carrusel/dataCarrusel.json'


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

