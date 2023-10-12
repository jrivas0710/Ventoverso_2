import { Blogs } from "../components/blog/Blog"
import { Destacados } from "../components/destacados/ProductosDestacados"
import { PlantillaCategoria } from "../components/categories/Categories"
import { ProductosSimilares } from "../components/productosSimilares/ProductosSimilares"
import dataCategories from '../components/categories/dataCategories.json'
import dataDestacados from '../components/destacados/dataDestacados.json'
import dataProductosSimilares from '../components/productosSimilares/dataProductosSimilares.json'
import dataBlog from '../components/blog/dataBlog.json'
import './Producto.css'
import Sidesheet2 from "../components/sidesheet/SideSheet2"
import { Footer } from "../components/footer/Footer"



export const PageProducto = () => {
    return (
        <>
        <Sidesheet2/>
            <div className="categoryContainer">

                <div className="ContainerCategoryTitle">
                    <div className="categoryTitle" >
                        <h1 className="categoryTitleH1">Clarinetes{/* Categoria */}</h1>
                    </div>

                </div>


                <div className="opciones">
                    <div><span>Populares</span></div> {/* todo esto cambiara dependiendo de en que producto estoy  */}
                    <div><span>Marcas</span></div>
                    <div><span>Blog</span></div>
                </div>

                <PlantillaCategoria dataProducto={dataCategories} />
                <Destacados dataDestacados={dataDestacados} />
                <Blogs dataBlog={dataBlog} />
            </div>
        <Footer/>

        </>
    )


}