import { Link } from 'react-router-dom'
import './Checkout2.css'
import { CheckoutValidate } from '../utils/CheckoutValidate';
import { useNotification } from '../../context/notification.context';
import { useFormik } from 'formik';
import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, TextareaAutosize } from '@mui/material';
import { validateRut } from "@fdograph/rut-utilities";








export const Checkout = () => {
    const { getSucces } = useNotification();




    type CheckoutType = {
        name: string,
        apellido: string,
        rut: string,
        email: string,
        calleNumero: string,
        infoAdicional?: string,
        ciudad: string,
        comuna: string,
        telefono: string,
        pagos: string,
        envios: string,
        comentariosOpcional: string,
    }




    const formik = useFormik<CheckoutType>({

        initialValues: {
            name: "",
            apellido: "",
            rut: '',
            email: "",
            calleNumero: "",
            infoAdicional: "",
            ciudad: "",
            comuna: "",
            telefono: "",
            pagos: "",
            envios: "",
            comentariosOpcional: "",

        },
        validationSchema: CheckoutValidate,
        onSubmit: (values: CheckoutType) => {
            getSucces(JSON.stringify(values));

            console.log(values)
            formik.resetForm();
        },
    });

    const { errors, touched } = formik




    return (
        <>
            <Box component="form" onSubmit={formik.handleSubmit}>
                <div className="checkoutContainer">
                    <div className="izquierda">


                        <div style={{marginBottom:"25px"}}><span className='datos'>Ingresa tus datos</span></div>

                        <div className="nombre">
                            <TextField type="text" label="Nombre " 
                                style={{ marginBottom: "30px" }}

                                name='name'
                                
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <TextField type="text" label="Apellido"
                                style={{ marginBottom: "30px" }}

                                name='apellido'
                                value={formik.values.apellido}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.apellido && Boolean(formik.errors.apellido)}
                                helperText={formik.touched.apellido && formik.errors.apellido}
                            />
                            <TextField type="text" label="Rut "

                                name='rut'
                                value={formik.values.rut}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.rut && Boolean(formik.errors.rut)}
                                helperText={formik.touched.rut && formik.errors.rut}
                            />
                            {!validateRut(formik.values.rut) && (formik.values.rut.length > 0) && <small
                                style={{
                                    color: "#D32F2F", fontSize: "12px", display: "flex", flexDirection: "column",
                                    paddingLeft: "14px", fontWeight: "normal", fontFamily: "Montserrat"
                                }} >Ingrese un rut válido</small>}

                            <TextField type="e-mail" label="Dirección email "
                                style={{ marginTop: "30px" }}


                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div>



                        <div className="direccion" style={{ marginTop: "30px" }}>
                            <div><span className='direccionSpan' style={{ marginTop: "30px" }}>Dirección</span></div>
                            <TextField type="text" label="Calle y número "

                                style={{ marginBottom: "30px" }}

                                name='calleNumero'
                                value={formik.values.calleNumero}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.calleNumero && Boolean(formik.errors.calleNumero)}
                                helperText={formik.touched.calleNumero && formik.errors.calleNumero}
                            />
                            <TextField type="text" label="Información adicional (Número depto/Block)"
                                style={{ marginBottom: "30px" }}
                                name='infoAdicional'
                                value={formik.values.infoAdicional}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}


                            />
                            <TextField type="text" label="Ciudad"
                                style={{ marginBottom: "30px" }}

                                name='ciudad'
                                value={formik.values.ciudad}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.ciudad && Boolean(formik.errors.ciudad)}
                                helperText={formik.touched.ciudad && formik.errors.ciudad}
                            />
                            <TextField type="e-mail" label="Comuna"
                                style={{ marginBottom: "30px" }}

                                name='comuna'
                                value={formik.values.comuna}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.comuna && Boolean(formik.errors.comuna)}
                                helperText={formik.touched.comuna && formik.errors.comuna}
                            />

                        </div>

                        <div className="contacto">
                            <div><span className='telefono'>Teléfono de contacto</span></div>
                            <div><span>Su teléfono de contacto es importante para coordinar la entrega de tu producto.</span></div>
                            <TextField type="text" label="+56 9 9999 9999"
                                style={{ marginBottom: "30px" }}

                                name='telefono'
                                value={formik.values.telefono}

                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                                helperText={formik.touched.telefono && formik.errors.telefono}
                            />


                        </div>

                        <FormControl component="fieldset" variant="standard">

                            <FormLabel id="demo-radio-buttons-group-label" className="metodoPago"></FormLabel>
                            <div><span className='pago'>Método de pago</span></div>

                            <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="PayPal"
                                name="pagos"
                                value={formik.values.pagos}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.comuna && Boolean(formik.errors.comuna)}
                                helperText={formik.touched.comuna && formik.errors.comuna}
                            >
                                <FormControlLabel control={<Radio />} value="Webpay" label="Transbank/WebPay" />

                                <FormControlLabel control={<Radio />} value="PayPal" label="PayPal" />

                                <FormControlLabel control={<Radio />} value="Transferencia" label="Transferencia bancaria" />

                            </RadioGroup>

                            {errors.envios && touched.envios && <small style={{ color: "#D32F2F", fontSize: "13px", display: "flex", flexDirection: "column", paddingLeft: "11px" }} >{errors.pagos}</small>}


                        </FormControl>

                    </div>

                    <div className='derecha'>
                        <FormControl component="fieldset" variant="standard">
                            <div className='opcionesEnvio'>
                                <div className='paqueteriaEnvio'></div>
                                <div><FormLabel><span className='spanOpcionesEnvio'>Opciones de envío</span></FormLabel></div>
                                <div><span>Seleccione un servicio de paquetería</span></div>

                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="PayPal"
                                    name="envios"
                                    value={formik.values.envios}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.envios && Boolean(formik.errors.envios)}
                                    helperText={formik.touched.envios && formik.errors.envios}>

                                    <div className='correoChile'>
                                        <div className='inputCheckbox'><FormControlLabel control={<Radio />} value="correoDeChile" label="" /></div>
                                        <div>
                                            <div><span>Correos Chile</span></div>
                                            <div><span>2-5 días habiles</span></div>
                                            <div><span className='spanPrecioEnvio'>$9.999</span></div>
                                        </div>
                                    </div>

                                    <div className='chilexpress'>
                                        <div className='inputCheckbox'><FormControlLabel control={<Radio />} value="chilexpress" label="" /></div>

                                        <div>
                                            <div><span>Chilexpress</span></div>
                                            <div><span>2-5 días habiles</span></div>
                                            <div><span className='spanPrecioEnvio'>$9.999</span></div>
                                        </div>
                                    </div>

                                    <div className='retiroTienda'>
                                        <div className='inputCheckbox'><FormControlLabel control={<Radio />} value="retiroTienda" label="" /></div>

                                        <div>
                                            <div><span>Retiro en Tienda</span></div>
                                            <div><span>2-5 días habiles</span></div>
                                            <div><span className='spanPrecioEnvio'>$9.999</span></div>
                                        </div>

                                    </div>
                                </RadioGroup>
                            </div>
                            {errors.envios && touched.envios && <small style={{ color: "#D32F2F", fontSize: "13px", display: "flex", flexDirection: "column", paddingLeft: "11px" }} >{errors.envios}</small>}
                        </FormControl>


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
                                    <TextareaAutosize
                                        name='comentariosOpcional'
                                        value={formik.values.comentariosOpcional}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="tarea" aria-label="minimum height" minRows={8} placeholder="Agrega comentarios sobre tu pedido o solicitudes especiales" style={{ fontSize: "16px" }} />
                                    <button type='submit' className='terminarCompra' disabled={!validateRut(formik.values.rut) && true} >Comprar Ahora</button>

                                </div>


                            </div>


                        </div>

                    </div>




                </div>
            </Box >




        </>
    )
}