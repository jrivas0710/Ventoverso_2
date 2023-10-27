import { Link } from 'react-router-dom'
import './Checkout2.css'
import { CheckoutValidate } from '../utils/CheckoutValidate';
import { useNotification } from '../../context/notification.context';
import { useFormik } from 'formik';
import { Box, TextField } from '@mui/material';







export const Checkout = () => {
    const { getSucces } = useNotification();


    type CheckoutType = {
        name: string,
        apellido: string,
        rut: string,
        email: string,
        password: string,
        calleNumero: string,
        ciudad: string,
        comuna: string,
        telefono: string,
    }




    const formik = useFormik<CheckoutType>({

        initialValues: {
            name: "",
            apellido: "",
            rut: '',
            email: "",
            password: "",
            calleNumero: "",
            ciudad: "",
            comuna: "",
            telefono: "",

        },
        validationSchema: CheckoutValidate,
        onSubmit: (values: CheckoutType) => {
            getSucces(JSON.stringify(values));
        },
    });




    return (
        <>
            <Box>
                <div className="checkoutContainer">
                    <div className="izquierda">


                        <div><span className='datos'>Ingresa tus datos</span></div>

                        <div className="nombre">
                            <TextField type="text" placeholder="Nombre "
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <TextField type="text" placeholder="Apellido"
                                name='apellido'
                                value={formik.values.apellido}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.apellido && Boolean(formik.errors.apellido)}
                                helperText={formik.touched.apellido && formik.errors.apellido}
                            />
                            <TextField type="number" placeholder="Rut "
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField type="e-mail" placeholder="Dirección email "
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div>



                        <div className="direccion">
                            <div><span className='direccionSpan'>Dirección</span></div>
                            <TextField type="text" placeholder="Calle y número "
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField type="text" placeholder="Información adicional (Número depto/Block)"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField type="number" placeholder="Ciudad"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField type="e-mail" placeholder="Comuna"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />

                        </div>

                        <div className="contacto">
                            <div><span className='telefono'>Teléfono de contacto</span></div>
                            <div><span>Su teléfono de contacto es importante para coordinar la entrega de tu producto.</span></div>
                            <TextField type="text" placeholder="+56 9 9999 9999"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />

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
                                    <div><span style={{ color: '#2B9A43' }} >Gratis</span></div>
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
                                    <input className="tarea" type="textarea" />
                                    <Link to={"/compraExitosa"}><button className='terminarCompra'>Exito</button></Link>
                                    <Link to={"/algoSalioMal"}>  <button className='terminarCompra'>Error</button></Link>
                                </div>


                            </div>


                        </div>

                    </div>




                </div>
            </Box>




        </>
    )
}