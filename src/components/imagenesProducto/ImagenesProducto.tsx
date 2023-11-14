import { AgregarCarro } from '../agregarCarro/AgregarCarro'
import './ImagenesProducto.css'
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal'







export const ImagenesProducto= (props:{dataProductoSib:ProductoPrincipal[]}) => {

    

    let productoPrincipal = props.dataProductoSib.map(item => item)
    console.log(productoPrincipal);

    let imagenes = productoPrincipal.map(item => item.imagenes) //este es el array de imagenes
    console.log(imagenes)

    return (
        <>

        {imagenes.map(item => {
            return (

                <div className='containerCarroImagenes'>
                <div className='imagenesProducto'>
                <div className='imagenPrincipal'>
                    <img src={item?.toString()} alt={"imagen del producto"}/> 
                </div>
                <div className='imagenesSecundarias'>
                    
                        
                    <div>
                        <img src={item?.toString()} alt={"imagen del producto"} /> 
                    </div>
                    <div>
                        <img src={item?.toString()} alt={"imagen del producto"} /> 
                    </div>
                    <div>
                        <img src={item?.toString()} alt={"imagen del producto"} /> 
                    </div>
                    <div>
                        <img src={item?.toString()} alt={"imagen del producto"} /> 
                    </div>
                    <div>
                        <img src={item?.toString()} alt={"imagen del producto"} /> 
                    </div>

                    {/* 
                    <div>
                        <img src={ima?.toString()} alt={item.nombre}/> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={item.nombre}/> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={item.nombre}/> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={item.nombre}/> 
                    </div>
                     */}
                    
                   
                </div>
                    
            </div>

            <div>
                {props.dataProductoSib.map(item => {
                    return(

                        <AgregarCarro precio = {item.precio}/>
                    )
                })}
            </div>
        </div>

                
            )
        })}
        

        
         




        </>
    )
}






