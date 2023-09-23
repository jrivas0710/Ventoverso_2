import './EncabezadoProducto.css'
export const EncabezadoProducto = () => {

  return (
    <>
      <div className='container'>
        <div className="encabezadoProducto">
          <div><h1 className='h1Encabezado'>Nombre</h1></div>
          <div><span className='spanEncabezado'>marca</span></div>
          <div><span className='spanEncabezado'>modelo</span></div>
        </div>
        <div className='estrellas-marca'>
          <div><img src="images/estrellas.png" alt="rating" /></div>
          <div className='logoMarca'>Logo Marca</div>
        </div>
      </div>




    </>
  )
}






