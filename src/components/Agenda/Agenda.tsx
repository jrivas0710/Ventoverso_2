import { Link } from 'react-router-dom'
import './Agenda.css'

export const Agenda = () => {
    return (
        <>
              <div className= "AgendaContainer" >


              <div className= 'age'><span> Agenda </span></div>
              <div className= 'prueba'><span>¡Prueba tu instrumento en nuestra tienda!</span></div>
              <div className= 'resumen'><span>En Ventoverso queremos que sientas seguridad al comprar. Por ello ponemos a tu disposición espacios en nuestra tienda física para que puedas probar tu instrumento con tranquilidad.</span></div>
              <br/><br/>



              <div className= 'como'><span> ¿Cómo funciona? </span></div>
              <div className= 'resumen'><span> Solo selecciona los días y horarios en que desees acercarte a nuestra tienda y el instrumento que deseas probar, ¡y listo! Recibirás un correo confirmando tu reserva dentro de 24 horas hábiles. </span></div>
              <div className='textareaBoton'><Link to = {"/reservahora"}><button className='terminaragenda'>Reservar hora</button></Link> </div>
              <br/><br/>  
             
               <div className='Padre_linea'>
                <div className='linea1'></div>
                <br /><br />
                <div className='hora'><span> ¿Ya tienes una hora agendada?</span></div>
            </div>
            <br /><br />
               
               <div className='contenedorcaja'>
                   <div className='caja1'>
                   <img src="/public/images/schedule.svg"  className="logo_agenda" />
                   <div className='consultar'> consultar</div>
                   </div>
                   <div className='caja2'>
                   <img src="/public/images/checklist.svg"  className="logo_agenda" />
                   <div className='consultar'> confirmar</div>
                   </div>
                   <div className='caja3'>
                   <img src="/public/images/vector.svg"  className="logo_agenda" />
                   <div className='consultar'> anular</div>
                   </div>
                   <div className='caja4'>
                   <img src="/public/images/history.svg"  className="logo_agenda" />
                   <div className='consultar'> cambiar</div>
                   </div>
               </div>

              </div>
         </>
     )
}