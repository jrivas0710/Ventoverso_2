import { MarcasPopulares } from "../components/Marcas/MarcasPopulares"
import { Carrusel } from "../components/carrusel/Carrusel"
import { ProductosDestacados } from "../components/destacados/ProductosDestacados"
import {Footer} from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import Iconos from "../components/iconos/Iconos"
import SideSheet from "../components/sidesheet/SideSheet"

interface props {
  imagen:string;
  rating:string;
  nombre:string;
  precio:string;
 }
 

const Home = ({imagen, nombre, rating, precio}:props) => {
    TODO: 'IMPORTAR FOOTER ABAJO'

  return (
    <>
        <Header />
        <Carrusel />
        <SideSheet/>
        <Iconos/>
        <ProductosDestacados 
        imagen = {imagen}
        nombre ={nombre}
        rating = {rating}
        precio = {precio}
        />
        <MarcasPopulares/>
        <Footer/>
    </>
  )
}

export { Home }