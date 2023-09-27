import { AgregarCarro } from '../agregarCarro/AgregarCarro'
import './ImagenesProducto.css'



export const ImagenesProducto = () => {

    return (
        <>
        <div className='containerCarroImagenes'>
               <div className='imagenesProducto'>
                <div className='imagenPrincipal'>
                    <img src="" alt=""/>
                </div>
                <div className='imagenesSecundarias'>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                </div>
            </div>

            <div>
                <AgregarCarro/>
            </div>
        </div>
         




        </>
    )
}






