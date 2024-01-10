import { Blogs } from "../components/blog/Blog"
import { Destacados } from "../components/destacados/ProductosDestacados"
import { PlantillaCategoria } from "../components/categories/Categories"
import { ProductosSimilares } from "../components/productosSimilares/ProductosSimilares"
import dataCategories from '../components/categories/dataCategories.json'
import dataProductosSimilares from '../components/productosSimilares/dataProductosSimilares.json'
import './Producto.css'
import { ProductosRelacionados } from "../components/productosRelacionados/ProductosRelacionados"
import { MarcasPopulares } from "../components/Marcas/MarcasPopulares"




export const PageProducto = () => {
  



    return (
        <>
       
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
                <Destacados/>
                <MarcasPopulares/>
                <Blogs/>
            </div>
       

        </>
    )


}