import './ProductosRelacionados.css'
import { ProductosReacionadosTipo } from './typeProductosRelacionados'



export const ProductosRelacionados = (props:{dataProductosRelacionados:ProductosReacionadosTipo[]}) => {

    

    return (
        <>


            <div className='productosRelacionados'>
                <h2 className='texto-productos-relacionados'>Productos Relacionados</h2>




                {props.dataProductosRelacionados.map(item => {
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
        </>
    )




}




/*
export const ProductosRelacionados= () => {

    return (
        <>


            <div className='productosRelacionados'>



                    <h2 className='texto-productos-relacionados'>Productos Relacionados</h2>

                <div>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>

                <div>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>

                <div>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>

                <div>
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