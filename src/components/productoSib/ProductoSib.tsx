import { DetalleProducto } from "../detalleProducto/DetalleProducto"
import { EncabezadoProducto } from "../encabezadoProducto/EncabezadoProducto"
import { ImagenesProducto } from "../imagenesProducto/ImagenesProducto"
import { ProductoPrincipal } from "../../interfaces/ProductoPincipal"
/* import dataProductoSib from './dataProductoSib.json' */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export interface Id {
    id:string
}


export const ProductoSib = ({id}:Id) => {

    const [producto, setProducto] = useState<ProductoPrincipal>();

    
    //console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3000/productos/${id}`, { //esto me retorna el producto y tiene un id
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

                <ImagenesProducto id = {id} />
               
          

            { producto &&   <DetalleProducto 
                    
                    descripcion={producto.descripcion}
                    id={id}

                />
              
            }




        </>
    )
}