import './EncabezadoProducto.css'
export const EncabezadoProducto = () => {

  return (
    <>
      <div className="encabezadoProducto">
        <div><h1>Nombre</h1></div>
        <div><span>marca</span></div>
        <div><span>modelo</span></div>
      </div>
      <div className='estrellas-marca'>
        <div><img src="images/estrellas.png" alt="rating" /></div>
        <div className='logoMarca'>Logo Marca</div>
      </div>




    </>
  )
}






