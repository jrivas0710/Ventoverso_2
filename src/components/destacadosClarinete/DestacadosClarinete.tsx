import './DestacadosClarinete.css'
import { RelacionadosSimDest } from '../../interfaces/RelacionadosSimDest'
import { Filter } from '../filtro/Filter'
import { Link } from 'react-router-dom'



/* export type Interfaz_destacado= {
    id:"string", 
    nombre: "string",
    marca: "string",
    modelo: "string",
    estrellas : 4,
    imagenes : [
        "string" 
    ],
    precio: 0,
    caracteristicasPrincipales: "string",
    descripcion:  "string"
  } 
 */
export const DestacadosClarinete = (props: { dataDestacadoClarinete: RelacionadosSimDest[] }) => {

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

                    {props.dataDestacadoClarinete.map(item => {
                        return (


                            <div>


                                < div className='producto' id={item.id}>
                                    <Link to = {"/agregarProducto"} >{item.linkDetalle}<img className='imagenDestacaoClarinete' src={item.imagenUrl} alt={item.nombre} /></Link>
                                </div>

                                < div className='nombre-precio-ranking'>

                                    <span className='spanEstrellasClarinete'>
                                        <img className='estrellasClarineteDestacado' src="./public/images/estrellas.png" alt="" />
                                        {/* {item.estrellas} */}
                                    </span>

                                   <Link to = {"/agregarProducto"}><span className='nombre-producto' > {item.nombre} </span></Link> 
                                    <span className='precio' > {item.precio}</span>

                                </div>

                            </div>

                        )
                    })}




                    {/* <div>
         <h2 className='texto-productos-destacados'>ClarineteSib</h2>
         < div className = 'producto' > </div>
         < div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         < span className = 'precio' > $99.999 </span>
         </div>
         </div>
         <div>
         <h2 className='texto-productos-destacados'>ClarineteSib</h2>
         <div className = 'producto'> </div>
         <div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         < span className = 'precio' > $99.999 </span>
         </div>
         </div>

         <div >
         <h2 className='texto-productos-destacados'>ClarineteSib</h2>
         <div className = 'producto' > </div>
         <div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         <span className = 'precio' > $99.999 </span>
         </div>
         </div>
         </div>
         <div className= 'productos-destacados' >
        
         <div>
        
         <div className = 'producto' > </div>
         <div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         <span className = 'precio' > $99.999 </span>
         </div>
         </div>

         <div>
         
         <div className = 'producto'> </div>
         <div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         < span className = 'precio' > $99.999 </span>
         </div>
         </div>

         < div >
         
         < div className = 'producto' > </div>
         < div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         <span className = 'precio' > $99.999 </span>
         </div>
         </div>

         < div >
    
         < div className = 'producto' > </div>
         < div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         < span className = 'precio' > $99.999 </span>
         </div>
         </div>
         </div>
         <div className= 'productos-destacados' >
                                                                                 
         <div>
        
         < div className = 'producto' > </div>
         < div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         < span className = 'precio' > $99.999 </span>
         </div>
         </div>
                                                                     
         < div >
                                                                                                    
         < div className = 'producto' > </div>
         < div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         < span className = 'precio' > $99.999 </span>
         </div>
         </div>
                                                                     
         < div >
                                                                                                                             
         < div className = 'producto' > </div>
         < div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         < span className = 'precio' > $99.999 </span>
         </div>
         </div>
                                                                     
         <div>
                                                                                                                                                     
         < div className = 'producto' > </div>
         < div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking'/>
         <span className='nombre-producto' > Nombre del producto </span>
         <span className = 'precio' > $99.999 </span>
         </div>
         </div>                                                                                                                                                                          
         </div>
         <div className= 'productos-destacados'>

         <div> 
        
         <div className = 'producto'> </div>
         <div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         <span className = 'precio' > $99.999 </span>
         </div>
         </div>
                                                                     
         <div>
                                                                                                    
         <div className = 'producto' > </div>
         <div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         < span className = 'precio' > $99.999 </span>
         </div>
         </div>
                                                                     
         < div >
                                                                                                                             
         <div className = 'producto' > </div>
         < div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         <span className = 'precio' > $99.999 </span>
         </div>
         </div>
                                                                     
         < div >
                                                                                                                                                     
         < div className = 'producto' > </div>
         < div className = 'nombre-precio-ranking' >
         <img src="public/estrellas.png" alt = "ranking" className = 'ranking' />
         <span className='nombre-producto' > Nombre del producto </span>
         < span className = 'precio' > $99.999 </span>
         </div>
         </div> */}

                </div>
            </div>


        </>)
}




























