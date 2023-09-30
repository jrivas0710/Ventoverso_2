import { AgregarCarro } from '../agregarCarro/AgregarCarro'
import './ImagenesProducto.css'
import { ProductoSibtipo } from '../productoSib/typeProducto'







export const ImagenesProducto:React.FC<ProductoSibtipo> = ({imagenes, nombre, precio}) => {

    let ima = imagenes?.map(ima => {
        return(
            ima.toString()
        )
    })

    return (
        <>
        

        <div className='containerCarroImagenes'>
               <div className='imagenesProducto'>
                <div className='imagenPrincipal'>
                    <img src={ima?.toString()} alt={nombre}/> 
                </div>
                <div className='imagenesSecundarias'>
                    
                    <div>
                        
                        <img src={ima?.toString()} alt={nombre} /> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={nombre}/> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={nombre}/> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={nombre}/> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={nombre}/> 
                    </div>
                </div>
                    
            </div>

            <div>
                <AgregarCarro precio = {precio}/>
            </div>
        </div>

         




        </>
    )
}






