import { DetalleProducto } from "../detalleProducto/DetalleProducto"
import { EncabezadoProducto } from "../encabezadoProducto/EncabezadoProducto"
import { ImagenesProducto } from "../imagenesProducto/ImagenesProducto"
import { ProductoPrincipal } from "../../interfaces/ProductoPincipal"
/* import dataProductoSib from './dataProductoSib.json' */
import { useEffect, useState } from "react"




export const ProductoSib = () => {

    const [producto, setProducto] = useState<ProductoPrincipal[]>();

    useEffect(() => {
        fetch("http://localhost:3000/productos", { //esto me retorna el producto y tiene un id
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
                    nombreProducto={item.nombreProducto}
                    id_marcas={item.id}
                    modelo={item.modelo}
                    estrellas= {item.estrellas}
                    

                />)
              
            })}

            {/* {producto &&  <ImagenesProducto producto = {producto}/> }
                */}
                <ImagenesProducto />
               
          

            { producto && producto.map(item => {
                return(  <DetalleProducto 
                    
                    descripcion={item.descripcion}

                />)
              
            })}




        </>
    )
}