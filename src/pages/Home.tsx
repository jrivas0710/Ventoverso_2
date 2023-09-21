import { MarcasPopulares } from "../components/Marcas/MarcasPopulares"
import Carrusel  from "../components/carrusel/Carrusel"
import { Destacados } from "../components/destacados/ProductosDestacados"
import {Footer} from "../components/footer/Footer"
import Iconos from "../components/iconos/Iconos"
import {Blogs} from "../components/blog/Blog"
import dataDestacados from '../components/destacados/dataDestacados.json'
import dataBlog from '../components/blog/dataBlog.json'
import Sidesheet2 from "../components/sidesheet/Sidesheet2"


//la data se supone que es el json de back para Carrusel y Destacados

const Home = () => {

  const images = [
    'https://via.placeholder.com/400x300?text=Imagen+1',
    ' https://via.placeholder.com/400x300?text=Imagen+2',
    'https://via.placeholder.com/400x300?text=Imagen+3',
    'https://via.placeholder.com/400x300?text=Imagen+4',
    // Agrega más URLs de imágenes según sea necesario
  ];

    

  return (
    <>
        <Sidesheet2/>
        {/* <Header/> */}
        <Carrusel 
        images={images} />
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

