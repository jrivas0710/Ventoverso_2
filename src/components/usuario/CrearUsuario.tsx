import { useState } from 'react'
import './Usuario.css'
import { Alerta } from './Alerta'
import { Link } from 'react-router-dom'
import { Box, TextField } from '@mui/material'
import { useNotification } from '../../context/notification.context'
import { useFormik } from 'formik'
import { LoginValidate } from '../utils/validateForm'
import { CreateCountValidate } from '../utils/CreateCountValidate'


export const CrearUsuario = () => {

    const [alert, setAlert] = useState(false)
    const { getSucces } = useNotification();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    type LoginType = {
        name: string,
        apellido: string
        email: string,
        password: string,
    }

    const formik = useFormik<LoginType>({
        initialValues: {
            name: "",
            apellido: "",
            email: "",
            password: "",
        },
        validationSchema: CreateCountValidate,
        onSubmit: (values: LoginType) => {
            getSucces(JSON.stringify(values));
        },
    });




    return (
        <>
            <div className='containerUsuario'>


                <span className='crearUser'>Crea una cuenta</span>
                <Box component="form">

                    <div className='inputsUser'>
                        <TextField
                            type="e-mail"
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
                                <input type="checkbox"/>
                                 <div><label htmlFor="">Quiero recibir ofertas y novedades de Ventoverso.</label></div></div>
                            <div>
                                <input type="checkbox"/>
                                 <label htmlFor="">Acepto términos y condiciones </label></div>

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