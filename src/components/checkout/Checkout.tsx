import { Link } from 'react-router-dom'
import './Checkout2.css'

export const Checkout = () => {
    return (
        <>

            <div className="checkoutContainer">
                <div className="izquierda">

                    <div><span className='datos'>Ingresa tus datos</span></div>

                    <div className="nombre">
                        <input type="text" placeholder="Nombre " />
                        <input type="text" placeholder="Apellido" />
                        <input type="number" placeholder="Rut " />
                        <input type="e-mail" placeholder="Dirección email " />
                    </div>



                    <div className="direccion">
                        <div><span className='direccionSpan'>Dirección</span></div>
                        <input type="text" placeholder="Calle y número " />
                        <input type="text" placeholder="Información adicional (Número depto/Block)" />
                        <input type="number" placeholder="Ciudad" />
                        <input type="e-mail" placeholder="Comuna" />

                    </div>

                    <div className="contacto">
                        <div><span className='telefono'>Teléfono de contacto</span></div>
                        <div><span>Su teléfono de contacto es importante para coordinar la entrega de tu producto.</span></div>
                        <input type="text" placeholder="+56 9 9999 9999" />

                    </div>


                    <div className="metodoPago">
                        <div><span className='pago'>Método de pago</span></div>
                        <div><input type="checkbox" /><span>Transbank/WebPay</span></div>
                        <div><input type="checkbox" /><span>PayPal</span></div>
                        <div><input type="checkbox" /><span>Transferencia bancaria</span></div>
                    </div>

                </div>

                <div className='derecha'>

                    <div className='opcionesEnvio'>
                        <div className='paqueteriaEnvio'></div>
                        <div><span className='spanOpcionesEnvio'>Opciones de envío</span></div>
                        <div><span>Seleccione un servicio de paquetería</span></div>

                        <div className='correoChile'>
                            <div className='inputCheckbox'><input type="checkbox" /></div>
                            <div>
                                <div><span>Correos Chile</span></div>
                                <div><span>2-5 días habiles</span></div>
                                <div><span className='spanPrecioEnvio'>$9.999</span></div>
                            </div>
                        </div>

                        <div className='chilexpress'>
                            <div className='inputCheckbox'><input type="checkbox" /></div>
                            <div>
                                <div><span>Chilexpress</span></div>
                                <div><span>2-5 días habiles</span></div>
                                <div><span className='spanPrecioEnvio'>$9.999</span></div>
                            </div>
                        </div>

                        <div className='retiroTienda'>
                            <div className='inputCheckbox'><input type="checkbox" /></div>
                            <div>
                                <div><span>Retiro en Tienda</span></div>
                                <div><span>2-5 días habiles</span></div>
                                <div><span className='spanPrecioEnvio'>$9.999</span></div>
                            </div>
                        </div>



                    </div>
                    <div className='resumenCompraContainer'>
                    <div ><span className='resumenCompraSpan'>Resumen de la compra</span></div>
                    <div className='resumenFlex'>
                        <div>
                            <div><span>{`1 x Clarinete [marca][modelo]`}</span></div>
                            <div><span>$ 99.999</span></div>
                        </div>
                        <div>
                            <div><span>Gastos de Envío</span></div>
                            <div><span style = {{color: '#2B9A43'}} >Gratis</span></div>
                        </div>
                        <div className='borderDescuento'>
                            <div><span>Descuentos </span></div>
                            <div><span>$0</span></div>
                        </div>

                        <div>
                            <div><span>Subtotal a pagar</span></div>
                            <div><span>$ 99.999</span></div>
                        </div>
                        <div>
                            <div><span>IVA</span></div>
                            <div><span>$ 1</span></div>
                        </div>
                        <div>
                            <div><span className='spanTotal'>TOTAL A PAGAR</span></div>
                            <div><span className='numeroTotal'>$ 100.000</span></div>
                        </div>

                        <div className='textareaBoton'>
                            <input className = "tarea"type="textarea"/>
                           <Link to = {"/compraExitosa"}><button className='terminarCompra'>Exito</button></Link> 
                           <Link to ={"/algoSalioMal"}>  <button className='terminarCompra'>Error</button></Link>
                        </div>


                    </div>


                    </div>

                </div>




            </div>





        </>
    )
}