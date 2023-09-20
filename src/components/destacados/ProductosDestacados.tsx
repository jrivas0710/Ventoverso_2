import { Destacado } from '../../App'
import './ProductosDestacados.css'







/* 
export const Destacados = () => {

    return (
        <>


            <div className='productos-destacados'>




                <div>
                    <h2 className='texto-productos-destacados'>Productos Destacados</h2>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>

                <div>
                    <h2 className='texto-productos-destacados'>Productos Destacados</h2>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>

                <div>
                    <h2 className='texto-productos-destacados'>Productos Destacados</h2>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>

                <div>
                    <h2 className='texto-productos-destacados'>Productos Destacados</h2>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>


            </div>
        </>)
}
 */






export const Destacados = (props:{dataDestacados:Destacado []}) => {

    console.log(props)

    return (
        <>


         <div className='productos-destacados'>
                {props.dataDestacados.map(item => {
                    return (

                        <div>
                            <h2 className='texto-productos-destacados'>Productos Destacados</h2>
                            <div className='producto'><img src={item.imagenUrl} alt={item.nombre} /></div>
                            <div className='nombre-precio-ranking'>
                                {item.rating}
                                {item.estrellas}
                                <img src="images/estrellas.png" alt="ranking" className='ranking' />
                                <span className='nombre-producto'>{item.nombre}</span>
                                <span className='precio'>{item.precio}</span>
                            </div>
                        </div>)})
                    }
                
                    </div> 
        </>)
}

 














