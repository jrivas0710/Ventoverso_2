import { MarcasPopulares } from "../components/Marcas/MarcasPopulares"
import {Carrusel}  from "../components/carrusel/Carrusel"
import { Destacados } from "../components/destacados/ProductosDestacados"
import {Footer} from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import Iconos from "../components/iconos/Iconos"
import SideSheet from "../components/sidesheet/SideSheet"
import {Blog} from "../components/blog/Blog"

//la data se supone que es el json de back para Carrusel y Destacados



const Home = () => {
    

  return (
    <>
        <Header/>
        <Carrusel
         /* data = {dataCarrusel} *//>
        {/* <SideSheet/> */}
        <Iconos/>
        <Destacados 
         /* data = {dataDestacados} */
        />
        <MarcasPopulares/>
        <Blog/>
        <Footer/>
    </>
  )
}

export { Home }

