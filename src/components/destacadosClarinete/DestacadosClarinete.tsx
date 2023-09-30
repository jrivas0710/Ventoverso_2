import './DestacadosClarinete.css'
import { Interfaz_destacado } from './Interfaz_Destacado'



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
export const DestacadosClarinete = (props:{ dataDestacadoClarinete:Interfaz_destacado[]}) => {

    return (
        <>


            <div className='productos-destacados' >

                {props.dataDestacadoClarinete.map(item => {
                    return (


                        <div>
                            <h2 className='texto-productos-destacados'>ClarineteSib</h2>
                            < div className='producto' id={item.id}> </div>
                            < div className='nombre-precio-ranking' >
                                <a href={item.linkDetalle}>
                                    <img src={item.imagenUrl} alt="ranking" className='ranking' />
                                </a>

                                <span className='nombre-producto' > {item.nombre} </span>
                                < span className='precio' > {item.precio}</span>
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


        </>)
}




























