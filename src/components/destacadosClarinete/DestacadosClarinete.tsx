import './DestacadosClarinete.css'
import { Filter } from '../filtro/Filter'
import { Link, useParams } from 'react-router-dom'
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



                <Filter />

                <div className='productos-destacados'>

                    {props.producto.map(item => {
                        return (


                            <div key={item.id}>


                                < div className='producto'>

                                    <img className='imagenDestacaoClarinete' src={item.imagenUrl} alt={item.nombre}
                                    />
                                </div>

                                < div className='nombre-precio-ranking'>

                                    <span className='spanEstrellasClarinete'>
                                        <Link to={`/agregarProductoCarro/${item.id}`}>
                                            <img className='imagenDestacoClarinete' src={item.imagenUrl} alt={item.nombre} />
                                        </Link>
                                        <span hidden>{item.estrellas}</span>

                                    </span>

                                    <Link to={`/agregarProductoCarro/${item.id}`}><span className='nombre-producto' > {item.nombre} </span></Link>
                                    <span className='precio' > {item.precio}</span>

                                </div>

                            </div>

                        )
                    })}






                </div>
            </div>


        </>)
}




























