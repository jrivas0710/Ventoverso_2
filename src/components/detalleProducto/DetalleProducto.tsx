import './DetalleProducto.css'
import { ProductoSibtipo } from '../productoSib/typeProducto'




export const DetalleProducto:React.FC<ProductoSibtipo> = ( {caracteristicasPrincipales, descripcion}) => {


    return (
        <>
            
               


                <div className='caracteristicasDescripcion'>
                    <div className='caracteristicas'>
                        <h2>Caracteristicas principales</h2>
                        <p>
                        {caracteristicasPrincipales}
                        </p>
                    </div>
                    <div className='descripcion'>
                        <h2>Descripcion</h2>
                        <p>
                         {descripcion}
                        </p>
                    </div>
                </div>


        </>
    )
}






