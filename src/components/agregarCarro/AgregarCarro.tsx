import './AgregarCarro.css'



export const AgregarCarro = () => {
    return (
        <>

            <div className='containerAgregarCarro'>

                <div className='precios'>
                    <span className='precioPrincipal'>$99.999</span>
                    <span><small className='precioAnterior'><b>Precio Anterior</b></small></span>
                </div>

                <div className='detallesCompra'>
                    <div><span>Medios de pago</span></div>
                    <div><span>Stock</span></div>
                    <div><span>Fecha de entrega</span></div>
                </div>

                <div>
                    <div className='cantidad'>
                        <button className='botonCantidad'>Cantidad:&nbsp;<b> 1 unidad</b>&nbsp;&nbsp; <div className='flecha'> <span className="material-symbols-outlined">
                        keyboard_control_key
                    </span></div>
                       </button>
                    </div>
                    <div className='botonComprar-like'>
                        <div><button className='botonComprar'>Comprar</button></div>
                        <div className='divLike'><img src="/images/like.png" alt="argegar-producto-deseado" className='like' /></div>
                    </div>

                </div>

                <div className='compararCompartir'>
                    <div >
                        <span>
                            <svg className='compare'fill="#000000" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>compare</title><path d="M28,6H18V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V24a2,2,0,0,0,2,2H14v2a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,15h6.17L7.59,17.59,9,19l5-5L9,9,7.59,10.41,10.17,13H4V4H16V24H4ZM16,28V26a2,2,0,0,0,2-2V8H28v9H21.83l2.58-2.59L23,13l-5,5,5,5,1.41-1.41L21.83,19H28v9Z" transform="translate(0)"> </path></g></svg>&nbsp;&nbsp;
                        </span>
                        <span>Comparar</span>
                    </div>
                    <div>
                    </div><span className="material-symbols-outlined compartirImagen" >
                        share
                    </span>
                    <span className='compartirTexto'>Compartir</span>
                </div>
            </div>


            <div className='devolGarantPuntos'>
                <div><span>Devolución</span></div>
                <div><span>Garantía</span></div>
                <div><span>Puntos</span></div>

            </div>


        </>



    )
}

