import { useState } from 'react'
import './Usuario.css'
import { Alerta } from './Alerta'
import { Link } from 'react-router-dom'
import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { useNotification } from '../../context/notification.context'
import { useFormik } from 'formik'
import { LoginValidate } from '../utils/validateForm'

import { CreateCountValidate } from '../utils/CreateCountValidate'


export const CrearUsuario = () => {

    const [alert, setAlert] = useState(false)
    const { getSucces } = useNotification();
    



    type LoginType = {
        name: string,
        apellido: string
        email: string,
        password: string,
        info:boolean,
        terminosCondiciones:boolean
    }

   
    
    const formik = useFormik<LoginType>({
        
        initialValues: {
            name: "",
            apellido: "",
            email: "",
            password: "",
            info:false,
            terminosCondiciones:false,
        },
        validationSchema: CreateCountValidate,
        onSubmit: (values: LoginType) => {
            getSucces(JSON.stringify(values));
            formik.resetForm();
            console.log(values);
           
        },
    });

    const {errors, touched} = formik
    


    return (
        <>
            <div className='containerUsuario'>


                <span className='crearUser'>Crea una cuenta</span>
                <Box component="form" onSubmit={formik.handleSubmit} display="flex"
                    justifyContent="center"
                    alignItems="center" >

                    <div className='inputsUser'>
                        <TextField 
                            type="e-mail"
                            label="Email"
                            name='email'
                            placeholder='Dirección de e-mail'
                            margin="normal"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            type="text"
                            label="Nombre"
                            name='name'
                            placeholder='Nombre'
                            margin="normal"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            type="text"
                            label="Apellido"
                            name='apellido'
                            placeholder='Apellido'
                            margin="normal"
                            value={formik.values.apellido}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.apellido && Boolean(formik.errors.apellido)}
                            helperText={formik.touched.apellido && formik.errors.apellido}
                        />
                        <TextField
                            type="password"
                            label= "Contraseña"
                            name='password'
                            placeholder='Contraseña'
                            margin="normal"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />

                        <div className='inputCheck'>
                            <div className='ofertasNovedades'>
                            <Checkbox
                                
                                name='info'
                                checked={formik.values.info}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                               /*  error={formik.touched.info && Boolean(formik.errors.info)}
                                helperText={formik.touched.info && formik.errors.info} */
                                
                                />

                                <div><label htmlFor="">Quiero recibir ofertas y novedades de Ventoverso.</label></div></div>
                            <div>
                                <Checkbox
                                name='terminosCondiciones'
                                checked={formik.values.terminosCondiciones}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              /*   error= {formik.touched.terminosCondiciones && Boolean(errors.terminosCondiciones)}
                                helperText={formik.touched.terminosCondiciones && formik.errors.terminosCondiciones} */
                                />
                                
                                <label htmlFor="">Acepto términos y condiciones  {errors.terminosCondiciones && touched.terminosCondiciones && <small style={{color:"red", fontSize:"13px", display:"flex", flexDirection:"column", paddingLeft:"14px"}} >{errors.terminosCondiciones}</small> }</label>
                                </div>
                               
                               
                                

                        </div>


                    </div>
                    <div className='btnsUser'>
                        {/* <Link to={"/registroExitoso"}> */} <button type='submit' className='crearCuenta'>Crear cuenta</button>{/*  </Link> */}
                        <button onClick={() => setAlert(true)} className='cancelar'>Cancelar</button>
                        {alert ? <Alerta /> : null}

                    </div>
                </Box>
            </div>

        </>
    )


}