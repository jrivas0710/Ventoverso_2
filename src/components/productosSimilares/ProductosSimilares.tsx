import './ProductosSimilares.css'
import { Destacado } from '../../interfaces/Destacados'



export const ProductosSimilares = (props: { dataProductosSimilares: Destacado[] }) => {


    return (
        <>
            <div className='containerProductosSimilares'>
                <div className='divTextoSimilares'> <h2 >Productos Similares</h2></div>
                <div className='productosSimilares'>





                    {props.dataProductosSimilares.map(item => {
                        return (

                            <div key={item.id}>
                                <div className='producto'><img src={item.imagenUrl} alt={item.nombre} /></div>
                                <div className='nombre-precio-ranking'>
                                    {item.estrellas}
                                    <a href='#'><img src="images/estrellas.png" alt="ranking" className='ranking' /></a>
                                    <span className='nombre-producto'>{item.nombre}</span>
                                    <span className='precio'>{item.precio}</span>
                                </div>
                            </div>)
                    })
                    }




                </div>

            </div>
        </>)
}

