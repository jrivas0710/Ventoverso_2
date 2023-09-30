import './ProductosSimilares.css'

import { ProductosSimilaresTipo } from './typeProductosSimilares'


export const ProductosSimilares= (props:{dataProductosSimilares:ProductosSimilaresTipo[]}) => {

    console.log(props)

    return (
        <>


            <div className='productosSimilares'>
                    <h2 className='texto-productos-similares'>Productos Similares</h2>




                    {props.dataProductosSimilares.map(item => {
                    return (

                        <div key={item.id}>
                            <div className='producto'><img src={item.imagenUrl} alt={item.nombre} /></div>
                            <div className='nombre-precio-ranking'>
                                {item.estrellas}
                                <a href={item.linkDetalle}><img src="images/estrellas.png" alt="ranking" className='ranking' /></a>
                                <span className='nombre-producto'>{item.nombre}</span>
                                <span className='precio'>{item.precio}</span>
                            </div>
                        </div>)})
}

          

              


            </div>
        </>)
}
 
