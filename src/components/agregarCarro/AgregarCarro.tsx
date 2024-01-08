import { useState } from 'react'
import './AgregarCarro.css'
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal';
import { useDispatch, useSelector } from 'react-redux';
import { CrearCarro } from '../../interfaces/crearCarro';
import { agregarProducto } from '../../redux/carritoSlice';
import { RootState } from '../../redux/store';




export const AgregarCarro: React.FC<ProductoPrincipal> = ({ precio, id }) => { //este es el id del producto
    
    const user = useSelector((state:RootState) => state.user);

    console.log(user.rutCompleto)
    const dispatch = useDispatch();
    //voy a hacer un contador para capturar la cantidad del producto
    const [crearCarro, setCrearCarro] = useState<CrearCarro>();

    const [isOpen, setIsOpen] = useState(true);
    const estadoDiv = isOpen ? true : false
    const openClose = () => {
        setIsOpen(!isOpen)
    }


      
    const crearCarrito = () => { //esto hace el post con el rut del cliente

        const rutUsuario = user.rutCompleto

        const requestOptions = {
            method: 'GET', //recordar cambiar esto por un POST
          /*   headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({rutUsuario}) */
        };


        fetch("http://localhost:3000/carrito", requestOptions)

            .then(response => {
                if (response.ok) {
                    console.log(response)
                    return response.json() as Promise<CrearCarro>
                } else {
                    throw new Error("hubo un error en el post del rut")
                }
            })
            .then(json => {
                setCrearCarro(json)
                //console.log(crearCarro) //se supone que esto es el json del carro creado
              
            })
            .catch(error => console.log(error.message))

     
        //tengo que crear el objeto del producto que se envia al carro
        {crearCarro && agregarProductoNuevo(crearCarro);}   
    }

    const agregarProductoNuevo = (crearCarro:CrearCarro) => {

        const nuevoProducto = {

            rutCliente: crearCarro.rutCliente,
            carritoId: crearCarro.carritoId,
            productoId: id 
           // cantidad:  como hago esto  con un contador 
        }


        fetch(`http://localhost:3000/carrito/producto`,{ //con esto envio el producto
           method: "POST",
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({...nuevoProducto})
        })

      


       // dispatch(agregarProducto(nuevoProducto))

    }


   


    return ( //aqui voy a hacer el dipatch que agregara el producto a mi array de estado inicial
        <>

            <div key={id} className='containerAgregarCarro'>

                <div className='precios'>
                    <span className='precioPrincipal'>{precio}</span>
                    <span><small className='precioAnterior'><b>Precio Anterior</b></small></span>
                </div>

                <div className='detallesCompra'>
                    <div><span>Medios de pago</span></div>
                    <div><span>Stock</span></div>
                    <div><span>Fecha de entrega</span></div>
                </div>

                <div>
                    <div className='cantidad'>
                        <button onClick={openClose} className='botonCantidad'>Cantidad:&nbsp;<b> 1 unidad</b>&nbsp;&nbsp; <div className='flecha'> <span className="material-symbols-outlined">
                            keyboard_control_key
                        </span></div>
                        </button>

                        <div className='desplegable' hidden={estadoDiv}>
                            <ul>
                                <li>2 unidades</li>
                                <li>3 unidades</li>
                                <li>4 unidades</li>
                                <li>5 unidades</li>
                                <li>6 unidades</li>
                            </ul>
                        </div>

                    </div>
                    <div className='botonComprar-like'>
                        <div> {/* <Link to = {"/carro"}> esto debe agregar sin llevar al carro */}
                            <button className='botonComprar' onClick={crearCarrito}   >
                                Agregar al Carrito
                            </button>{/* </Link> */} </div>
                        <div className='divLike'><img src="/images/like.png" alt="argegar-producto-deseado" className='like' /></div>
                    </div>

                </div>

                <div className='compararCompartir'>
                    <div >
                        <span>
                            <svg className='compare' fill="#000000" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>compare</title><path d="M28,6H18V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V24a2,2,0,0,0,2,2H14v2a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,15h6.17L7.59,17.59,9,19l5-5L9,9,7.59,10.41,10.17,13H4V4H16V24H4ZM16,28V26a2,2,0,0,0,2-2V8H28v9H21.83l2.58-2.59L23,13l-5,5,5,5,1.41-1.41L21.83,19H28v9Z" transform="translate(0)"> </path></g></svg>&nbsp;&nbsp;
                        </span>
                        <span>Comparar</span>
                    </div>

                    <div className='compartirImagen'><span className="material-symbols-outlined " >
                        share
                    </span></div>
                    <span className='compartirTexto'>Compartir</span>
                </div>
            </div>



            <div className='devolGarantiaPuntos'>
                <div className='iconoYdevolucion'>
                    <div className='devolucionIconoDiv'>
                        <span className="material-symbols-outlined">
                            undo
                        </span>
                    </div>
                    <div>
                        <span>Devolución</span>
                    </div>
                </div>


                <div className='iconoYgarantia'>
                    <div className='garantiaIconoDiv'>
                        <span className="material-symbols-outlined">
                            workspace_premium
                        </span>
                    </div>

                    <div>
                        <span>Garantía
                        </span>
                    </div>
                </div>

                <div className='iconoYPuntos'>
                    <div className='puntosIconoDiv'>
                        <span className="material-symbols-outlined">
                            trophy
                        </span>
                    </div>
                    <div>
                        <span>Puntos</span>
                    </div>

                </div>


            </div>


        </>



    )
}

