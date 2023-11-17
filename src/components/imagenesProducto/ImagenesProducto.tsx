import { AgregarCarro } from '../agregarCarro/AgregarCarro'
import './ImagenesProducto.css'
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal'







export const ImagenesProducto = (props: { producto: ProductoPrincipal[] }) => {




    /* 
        let productoPrincipal = props.dataProductoSib.map(item => item)
        console.log(productoPrincipal);
    
        let imagenes = productoPrincipal.map(item => item.imagenes) //este es el array de imagenes
        console.log(imagenes) */

    return (
        <>

            {props.producto.map(item => {
                return (

                    <div className='containerCarroImagenes'>
                        <div className='imagenesProducto'>
                            <div className='imagenPrincipal'>
                                <img src={item.imagenes?.[0]} alt={item.nombre} />
                            </div>
                            <div className='imagenesSecundarias'>


                                <div>
                                    <img src={item.imagenes?.[1]} alt={item.nombre} />
                                </div>
                                <div>
                                    <img src={item.imagenes?.[2]} alt={item.nombre} />
                                </div>
                                <div>
                                    <img src={item.imagenes?.[3]} alt={item.nombre} />
                                </div>
                                <div>
                                    <img src={item.imagenes?.[4]} alt={item.nombre} />
                                </div>
                                <div>
                                    <img src={item.imagenes?.[5]} alt={item.nombre} />
                                </div>

               

                            </div>

                        </div>

                        <div>
                            { props.producto.map(item => {
                                return (

                                    <AgregarCarro precio={item.precio} />
                                )
                            })}
                        </div>
                    </div>


                )
            })}








        </>
    )
}






