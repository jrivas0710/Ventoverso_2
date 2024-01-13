import './DestacadosClarinete.css'
import { Filter } from '../filtro/Filter'
import { Link, useParams } from 'react-router-dom'
import { Destacado } from '../../interfaces/Destacados'




export const DestacadosClarinete = (props: { producto: Destacado[] }) => {

  console.log(props)

    return (
        <>

            <div className='headerProductoDestacado'>
                <h2>
                    Clarinete Sib
                </h2>
            </div>

            <div className='filterDestacados'>



                {/* <Filter /> */}

                <div className='productosRelacionados'>
                    {props.producto && props.producto.map(item => {
                        return (

                            <div key={item.id} className='cardProducto' style={{ marginLeft:"40p" }} >

                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <Link to={`/agregarProductoCarro/${item.id}`} > <img src={item.imagen} alt={item.nombre}
                                        style={{ width: "100px", height: "250px"}}
                                    /></Link>  
                                </div>
                                <div className='nombre-precio-ranking' style={{ textAlign: "center", paddingLeft:"30px", marginTop:"20px" }}>
                                   <span hidden>{item.estrellas}</span> 
                                    <div style={{ display: "flex", width:"150px", gap:"8px"}}>
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                    </div>
                                    <div style={{  display:"flex", flexDirection:"column", textAlign:"left" }}>
                                        <span hidden>{item.estrellas}</span>
                                        {/* TODO: a donde lleva productos destacados? cual es el link al apretarlos? */}
                                        <span className='nombre-producto'>{item.nombre}</span>
                                        <span>{item.descripcion}</span>
                                        <span className='precio'>${item.precio}</span>
                                    </div>

                                </div>
                            </div>)
                    })
                    }

                </div>

            </div>


        </>)
}




























