import { DetalleProducto } from "../detalleProducto/DetalleProducto"
import { EncabezadoProducto } from "../encabezadoProducto/EncabezadoProducto"
import { ImagenesProducto } from "../imagenesProducto/ImagenesProducto"
import { ProductoPrincipal } from "../../interfaces/ProductoPincipal"
/* import dataProductoSib from './dataProductoSib.json' */
import { useEffect, useState } from "react"




export const ProductoSib = (/* props: { dataProductoSib: ProductoPrincipal[] } */) => {

    const [producto, setProducto] = useState<ProductoPrincipal[]>();

    useEffect(() => {
        fetch("http://localhost:3000/producto", {
            method: "GET"
        })
        .then((response) => {
            if (response.ok) {
                console.log(response)
                return response.json() as Promise<ProductoPrincipal[]>  ;
            }else{
                throw new Error ("no se pudo procesar la peticion")
            }
        })
        .then((json) => 
            setProducto(json)
            )
        .catch((error) => error)
        },[])
        
 



    return (
        <>

            { producto && producto.map(item => {
                return(  <EncabezadoProducto
                    nombre={item.nombre}
                    id_marcas={item.id}
                    modelo={item.modelo}
                    estrellas= {item.estrellas}

                />)
              
            })}

            {producto &&  <ImagenesProducto producto = {producto}/> }
               
                
               
          

            { producto && producto.map(item => {
                return(  <DetalleProducto 
                    caracteristicasPrincipales={item.caracteristicasPrincipales}
                    descripcion={item.descripcion}

                />)
              
            })}




        </>
    )
}