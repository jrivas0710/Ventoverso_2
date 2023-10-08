import { Destacado } from '../../interfaces/Destacados'
import './ProductosDestacados.css'




export const Destacados = (props:{dataDestacados:Destacado []}) => {

    console.log(props)

    return (
        <>


         <div className='productos-destacados'>
                {props.dataDestacados.map(item => {
                    return (

                        <div key={item.id}>
                            <h2 className='texto-productos-destacados'>Productos Destacados</h2>
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

 














