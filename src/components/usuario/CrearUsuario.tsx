import { useState } from 'react'
import './Usuario.css'
import { Alerta } from './Alerta'
import { Link } from 'react-router-dom'


export const CrearUsuario = () => {

    const [alert, setAlert] = useState(false)



    return (
        <>
            <div className='containerUsuario'>
                <span className='crearUser'>Crea una cuenta</span>
                <div className='inputsUser'>
                    <input type="e-mail" placeholder='Dirección de e-mail' />
                    <input type="text" placeholder='Nombre' />
                    <input type="text" placeholder='Apellido' />
                    <input type="password" placeholder='Contraseña' />

                    <div className='inputCheck'>
                        <div className='ofertasNovedades'><input type="checkbox" /> <div><label htmlFor="">Quiero recibir ofertas y novedades de Ventoverso.</label></div></div>
                        <div><input type="checkbox" /> <label htmlFor="">Acepto términos y condiciones </label></div>

                    </div>


                </div>
                <div className='btnsUser'>
                  <Link to ={"/registroExitoso"}>  <button className='crearCuenta'>Crear cuenta</button></Link>
                    <button onClick={() => setAlert(true)} className='cancelar'>Cancelar</button>
                    {alert ? <Alerta/>  : null}

                </div>
            </div>

        </>
    )


}