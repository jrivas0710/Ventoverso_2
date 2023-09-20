import { MarcasPopulares } from "../components/Marcas/MarcasPopulares"
import {Carrusel}  from "../components/carrusel/Carrusel"
import { Destacados } from "../components/destacados/ProductosDestacados"
import {Footer} from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import Iconos from "../components/iconos/Iconos"
import SideSheet from "../components/sidesheet/SideSheet"
import {Blogs} from "../components/blog/Blog"
import dataDestacados from '../components/destacados/dataDestacados.json'
import dataBlog from '../components/blog/dataBlog.json'


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
          dataDestacados = {dataDestacados} 
        />
        <MarcasPopulares/>
        <Blogs dataBlog = {dataBlog}/>
        <Footer/>
    </>
  )
}

export { Home }

