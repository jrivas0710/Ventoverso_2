import './DetalleProducto.css'
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal'




export const DetalleProducto: React.FC<ProductoPrincipal> = ({ detalle }) => {


    return (
        <>




            <div className='caracteristicasDescripcion'>
                <div className='caracteristicas'>
                    <h2>Descripcion del producto</h2>
                    <h3>Clarinete Si bemol Schreiber D-12</h3>
                    <p>La sensación de poder abarcar y tocar todas las notas del instrumento con facilidad y desde el principio hace que este clarinete Modelo D-12 sea agradable y divertido de tocar.

                        Las llaves del clarinete Sib se han adaptado para manos pequeñas y es tan completo que, al cambiar a otro clarinete, no hay necesidad de aprender nuevas notas, por lo que la transición se realiza en un tiempo mínimo.</p>
                </div>
                <div className='descripcion'>
                  
                </div>
            </div>


        </>
    )
}






