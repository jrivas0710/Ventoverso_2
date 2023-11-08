
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './confirmarhora.css'
import {Link} from 'react-router-dom';

export const Confirmarhora = () => {
    return (
        <>
            <div className="AgendaContainer" >
                <div className='titulo'><span> Reserva tu hora </span></div>
                <div className='subtitulo'><span>Primero, elige los días y horarios en que desees acercarte a nuestra tienda.</span></div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='Padre_reserva'>
                <div className="Reserva2" >
                    <div className='tituo_reserva'><span> Reserva </span></div>
                    <div className='subtitulo_reserva'><span> Ventoverso - Casa Matriz </span></div>
                    <div className='icono'>
                        <img src="/public/images/schedule.svg" className="logo_icono" />
                        <span> 60 min. </span>
                    </div>
                    <div className='icono'>
                        <img src="/public/images/location.svg" className="logo_icono" />
                        <span> Moneda 666, Santiago, Chile </span>
                    </div>
                </div>


                <div className="Calendar2" >
                    <div className='titulocalendario'><h1>Elige día y hora</h1></div>
                    <div className='titulocalendario'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='Horario'>
                <div className='titulohorario'><h1>Elige tu horario</h1></div>
                <div className='fecha'><h1>Jueves 14 de diciembre</h1></div>

                <div className='primerbloque'>11:00</div>
                <br></br>
                <div className='segundobloque'>11:00</div>
                <br></br>
                <div className='tercerbloque'>11:00</div>
                <br></br>
                <div className='cuartobloque'>11:00</div>
                <br></br>
                <br></br>
                <br></br>
                </div>
            </div >

            <div className='Padre_linea'>
                <div className='linea1'></div>
                <br /><br />
                <div className='hora'><span> ¿Ya tienes una hora agendada?</span></div>
            </div>
            <br /><br />

            <div className='contenedorcaja'>

                <div className='caja1'>

                    <img src="/public/images/schedule.svg" className="logo_agenda" />
                    <div className='consultar'> consultar </div>

                </div>
                <div className='caja2'>
                    <img src="/public/images/checklist.svg" className="logo_agenda" />
                    <div className='consultar'> confirmar</div>
                </div>
                <div className='caja3'>
                    <img src="/public/images/vector.svg" className="logo_agenda" />
                    <div className='consultar'> anular</div>
                </div>
                <div className='caja4'>
                    <img src="/public/images/history.svg" className="logo_agenda" />
                    <div className='consultar'> cambiar</div>
                </div>

            </div>




        </>
    )
}