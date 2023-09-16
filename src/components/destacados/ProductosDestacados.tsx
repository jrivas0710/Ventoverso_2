import './ProductosDestacados.css'






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


            </div>
        </>)
}





{/*   <div className='productos-destacados'>
                {data.map(item => {
                    return (

                        <div>
                            <h2 className='texto-productos-destacados'>Productos Destacados</h2>
                            <div className='producto'><img src={item.imagenUrl} alt={item.nombre} /></div>
                            <div className='nombre-precio-ranking'>
                                {item.rating}
                                <img src="images/estrellas.png" alt="ranking" className='ranking' />
                                <span className='nombre-producto'>{item.nombre}Nombre del producto</span>
                                <span className='precio'>{item.precio}$99.999</span>
                            </div>
                        </div>)})
                    }
                
                    </div> */}







