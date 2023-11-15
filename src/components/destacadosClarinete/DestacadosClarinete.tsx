import './DestacadosClarinete.css'
import { Filter } from '../filtro/Filter'
import { Link } from 'react-router-dom'
import { Destacado } from '../../interfaces/Destacados'



export const DestacadosClarinete = (props: { producto: Destacado[] }) => {

    return (
        <>

            <div className='headerProductoDestacado'>
                <h2>
                    Clarinete Sib
                </h2>
            </div>

            <div className='filterDestacados'>



                <Filter/>

                <div className='productos-destacados'>

                    {props.producto.map(item => {
                        return (


                            <div>


                                < div className='producto' key={item.id}>
                                    <Link to = {"/agregarProducto"}><img className='imagenDestacaoClarinete' src={item.imagenUrl} alt={item.nombre} /></Link>
                                </div>

                                < div className='nombre-precio-ranking'>

                                    <span className='spanEstrellasClarinete'>
                                        <img className='estrellasClarineteDestacado' src="./public/images/estrellas.png" alt="" />
                                        <span hidden>{item.estrellas}</span>
                                         
                                    </span>

                                   <Link to = {"/agregarProducto"}><span className='nombre-producto' > {item.nombre} </span></Link> 
                                    <span className='precio' > {item.precio}</span>

                                </div>

                            </div>

                        )
                    })}




          

                </div>
            </div>


        </>)
}




























