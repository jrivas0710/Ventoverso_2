import './ProductosRelacionados.css'
import { Destacado } from '../../interfaces/Destacados'



export const ProductosRelacionados = (props:{dataProductosRelacionados:Destacado[]}) => {

    

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
                                <a href="#"><img src={item.imagenUrl}alt="ranking" className='ranking' /></a>
                                <span className='nombre-producto'>{item.nombre}</span>
                                <span className='precio'>{item.precio}</span>
                            </div>
                        </div>)})
                    }
            </div>
        </>
    )




}


