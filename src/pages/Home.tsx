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


//la data se supone que es el json de back para Carrusel y Destacados

const Home = () => {

  return (
    <>
      <Sidesheet2 />
      <Carrusel dataCarrusel={dataCarrusel}/>
      <Iconos />
      <Destacados
        dataDestacados={dataDestacados} />
      <MarcasPopulares/>
      <Blogs dataBlog={dataBlog} />
      <Footer />
    </>
  )
}

export { Home }

