import { DetalleProducto } from "../detalleProducto/DetalleProducto"
import { EncabezadoProducto } from "../encabezadoProducto/EncabezadoProducto"
import { ImagenesProducto } from "../imagenesProducto/ImagenesProducto"
import { ProductoSibtipo } from './typeProducto'
import dataProductoSib from './dataProductoSib.json'




export const ProductoSib = (props: { dataProductoSib: ProductoSibtipo[] }) => {

 console.log(props)



    return (
        <>

            {props.dataProductoSib.map(item => {
                return(  <EncabezadoProducto
                    nombre={item.nombre}
                    marca={item.marca}
                    modelo={item.modelo}
                    estrellas= {item.estrellas}

                />)
              
            })}

            
                <ImagenesProducto dataProductoSib={dataProductoSib}/>
                
               
          

            {props.dataProductoSib.map(item => {
                return(  <DetalleProducto 
                    caracteristicasPrincipales={item.caracteristicasPrincipales}
                    descripcion={item.descripcion}

                />)
              
            })}




        </>
    )
}