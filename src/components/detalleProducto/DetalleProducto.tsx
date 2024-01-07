import './DetalleProducto.css'
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal'




export const DetalleProducto:React.FC<ProductoPrincipal> = ( { descripcion}) => {


    return (
        <>
            
               


                <div className='caracteristicasDescripcion'>
                    <div className='caracteristicas'>
                        <h2>Caracteristicas principales</h2>
                        <p>
                        
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






