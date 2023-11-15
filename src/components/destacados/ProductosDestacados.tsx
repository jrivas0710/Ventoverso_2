import { Destacado } from '../../interfaces/Destacados'
import '../productosRelacionados/ProductosRelacionados.css'




export const Destacados = (props: { dataDestacados: Destacado[] }) => {


    return (
        <>


            <div className='productosRelacionados'>
            <h2 className='texto-productos-relacionados'>Productos Destacados</h2>
                {props.dataDestacados.map(item => {
                    return (

                        <div key={item.id} >
                            
                            <div className='producto'><img src={item.imagenUrl} alt={item.nombre} /></div>
                            <div className='nombre-precio-ranking'>
                                {item.estrellas}
                                <a href="#"><img src="images/estrellas.png" alt="ranking" className='ranking' /></a>
                                <span hidden>{item.estrellas}</span>
                                {/* TODO: a donde lleva productos destacados? cual es el link al apretarlos? */}
                                <span className='nombre-producto'>{item.nombre}</span>
                                <span className='precio'>{item.precio}</span>
                            </div>
                        </div>)
                })
                }

            </div>
        </>)
}
















