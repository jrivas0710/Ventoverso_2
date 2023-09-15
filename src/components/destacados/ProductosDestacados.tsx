import './ProductosDestacados.css'

interface props {
 imagen:string;
 rating:string;
 nombre:string;
 precio:string;
}


export const ProductosDestacados = ({imagen, rating, nombre, precio}:props) => {

    return (
        <>

            <div className='productos-destacados'>

                <div>
                    <h2 className='texto-productos-destacados'>Productos Destacados</h2>
                    <div className='producto'>{imagen}</div>
                    <div className='nombre-precio-ranking'>
                        {rating}
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>{nombre}Nombre del producto</span>
                        <span className='precio'>{precio}$99.999</span>
                    </div>
                </div>



            </div>
        </>)
}