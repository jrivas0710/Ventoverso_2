import { DetalleProducto } from "../detalleProducto/DetalleProducto"
import { EncabezadoProducto } from "../encabezadoProducto/EncabezadoProducto"
import { ImagenesProducto } from "../imagenesProducto/ImagenesProducto"
import { ProductoPrincipal } from "../../interfaces/ProductoPincipal"
/* import dataProductoSib from './dataProductoSib.json' */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




export const ProductoSib = () => {

    const [producto, setProducto] = useState<ProductoPrincipal>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch(`http://localhost:3000/productos/1`, { //esto me retorna el producto y tiene un id
            method: "GET"
        })
        .then((response) => {
            if (response.ok) {
                console.log(response)
                return response.json() as Promise<ProductoPrincipal>  ;
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

            { producto &&  
                  <EncabezadoProducto
                    nombreProducto={producto.nombreProducto}
                    id_marcas={producto.id_marcas}
                    modelo={producto.modelo}
                    estrellas= {producto.estrellas}
                    

                />
              
            }

                <ImagenesProducto />
               
          

            { producto &&   <DetalleProducto 
                    
                    descripcion={producto.descripcion}

                />
              
            }




        </>
    )
}