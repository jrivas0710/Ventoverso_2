import { Link } from 'react-router-dom'
import './Usuario.css'




export const RegistroExitoso = () => {
    return (
        <>
            <div className='containerUsuario'>
               <span className='crearUser'>{`¡Registro exitoso!`} </span>
                    <div className='imagenRegistro'>
                    </div>
                     <div className='info'><div><p>Te enviamos un e-mail para que verifiques tu cuenta.</p></div>
                      <div><p>Mientras tanto, puedes continuar navegando en Ventoverso.</p></div></div>
                      


                    <div >
                    <Link to ={"/"}> <button className='btnVolver'>Ir al Inicio</button></Link> 
                      
                    </div>
                </div>
            
        </>
    )


}