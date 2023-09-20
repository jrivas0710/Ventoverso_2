import { MarcasPopulares } from "../components/Marcas/MarcasPopulares"
import {Carrusel}  from "../components/carrusel/Carrusel"
import { Destacados } from "../components/destacados/ProductosDestacados"
import {Footer} from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import Iconos from "../components/iconos/Iconos"
import SideSheet from "../components/sidesheet/SideSheet"
import {Blog} from "../components/blog/Blog"
import { Destacado } from "../App"
import dataDestacados from '../components/destacados/dataDestacados.json'

//la data se supone que es el json de back para Carrusel y Destacados



const Home = (props:{dataDestacados:Destacado[]}) => {
    

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
        <Blog/>
        <Footer/>
    </>
  )
}

export { Home }

