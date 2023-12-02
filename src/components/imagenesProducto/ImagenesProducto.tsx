import { AgregarCarro } from '../agregarCarro/AgregarCarro'
import './ImagenesProducto.css'
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal'
import { useEffect, useState } from 'react';







export const ImagenesProducto = (/* props: { producto: ProductoPrincipal[] } */) => {


    const [productos, setProductos] = useState<ProductoPrincipal[]>();

    useEffect(() => {
        fetch("http://localhost:3000/productos", { //esto me retorna el producto y tiene un id
            method: "GET"
        })
        .then((response) => {
            if (response.ok) {
                console.log(response)
                return response.json() as Promise<ProductoPrincipal[]>  ;
            }else{
                throw new Error ("no se pudo procesar la peticion")
            }
        })
        .then((json) => {
            console.log(json)
            setProductos(json)}
            )
        .catch((error) => error)
        },[])
        




    return (
        <>

            {productos &&  productos.map(item => {
                return (

                    <div className='containerCarroImagenes'>
                        <div className='imagenesProducto'>
                            <div className='imagenPrincipal'>
                                <img src={item.imagenes?.[0].base64} alt={item.imagenes?.[0].nombre} className='imagenProducto'/>
                            </div>
                            <div className='imagenesSecundarias'>


                                <div>
                                    <img src={item.imagenes?.[0].base64} alt={item.imagenes?.[0].nombre} className='imagenSecundaria'/>
                                </div>
                                <div>
                                    <img src={item.imagenes?.[0].base64} alt={item.imagenes?.[0].nombre} className='imagenSecundaria'/>
                                </div>
                                <div>
                                    <img src={item.imagenes?.[0].base64} alt={item.imagenes?.[0].nombre} className='imagenSecundaria'/>
                                </div>
                                <div>
                                    <img src={item.imagenes?.[0].base64} alt={item.imagenes?.[0].nombre} className='imagenSecundaria'/>
                                </div>
                                <div>
                                    <img src={item.imagenes?.[0].base64} alt={item.imagenes?.[0].nombre} className='imagenSecundaria'/>
                                </div>
                            </div>

                        </div>

                        <div>
                            { productos.map(item => {
                                return (

                                    <AgregarCarro 
                                    precio={item.precio} 
                                    id={item.id}/>
                                )
                            })}
                        </div>
                    </div>


                )
            })}

        </>
    )
}

               














