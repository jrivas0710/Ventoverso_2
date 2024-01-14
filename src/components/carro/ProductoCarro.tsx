import { useEffect, useState } from 'react'
import './Carro.css'
import { ResumenCompra } from './ResumenCompra'




export interface Producto { //la interface del producto que viene del carro
   idProducto:number,
   idCarro:number,
   nombreProducto:string,
   cantidad:number,
   precio:number,
   imagen: string,
   modelo:string
}


export const ProductoCarro = (rut:string) => {

    
    


    const [producto, setProducto] = useState<Producto[]>()

    useEffect(() => {
 
        fetch(`htttp://localhost:3000/rutaquenoesta/${rut}`)//back no me dio la ruta de como obtener el producto del carro, esto deberia traer
        .then(response => {                          //la ruta trae el carro por el rut del usuario y lo pinta
            if (response.ok) {
                return response.json() as Promise<Producto[]>
            }
        })
        .then(json => {
            setProducto(json)
        })

    },[])

    const eliminarProducto = (idProducto:number) => { //al apretar el icono del tarro, se elimina el producto del carro por el id

        fetch(`htttp://localhost:3000/rutaquenoesta/${idProducto}`,{
            method:"DELETE",
            headers:{ "Content-type":"application-json"}

        })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(json => {
            setProducto(json); //actualiza los producto en el carro para quitar el que ya no esta
        })

    }
  

    

return (
        <>

         <div className="containerCarro">

                {producto && producto.map(item=> {
                    return(
                         <div className="containerProductoCarro">
                    <div className='check'> <input type="checkbox" /></div>
                    <div className='imagenProductoCarro'>
                        <img src={item.imagen} alt={item.nombreProducto} />
                    </div>
                    <div className='detalleProductoCarro'>
                        <div className='productoPrecioCantidad'>
                            <span>{item.nombreProducto}</span>
                            <span>{item.modelo}</span>
                            <span>Modelo</span>
                            <span>{item.precio}</span>
                            <span>{item.cantidad}</span>
                        </div>
                        <div className='eliminarDeseo'>
                            <div>
                               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" 
                               fill="none"  
                               onClick={() => eliminarProducto(item.idProducto)}
                               >
                                <mask id="mask0_197_16264" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                                    <rect width="36" height="36" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_197_16264)">
                                    <path d="M10.5 31.5C9.675 31.5 8.96875 31.2063 8.38125 30.6188C7.79375 30.0312 7.5 29.325 7.5 28.5V9H6V6H13.5V4.5H22.5V6H30V9H28.5V28.5C28.5 29.325 28.2063 30.0312 27.6188 30.6188C27.0312 31.2063 26.325 31.5 25.5 31.5H10.5ZM25.5 9H10.5V28.5H25.5V9ZM13.5 25.5H16.5V12H13.5V25.5ZM19.5 25.5H22.5V12H19.5V25.5Z" fill="#1C1B1F" />
                                </g>
                            </svg>  
                            </div>

                            <div>
                               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
                                <path d="M14 26L11.97 24.158C9.61333 22.0091 7.665 20.1553 6.125 18.5967C4.585 17.0381 3.36 15.639 2.45 14.3992C1.54 13.1594 0.904167 12.02 0.5425 10.9809C0.180833 9.94187 0 8.8792 0 7.79292C0 5.57312 0.735 3.71935 2.205 2.23161C3.675 0.743869 5.50667 0 7.7 0C8.91333 0 10.0683 0.259764 11.165 0.779292C12.2617 1.29882 13.2067 2.03088 14 2.97548C14.7933 2.03088 15.7383 1.29882 16.835 0.779292C17.9317 0.259764 19.0867 0 20.3 0C22.4933 0 24.325 0.743869 25.795 2.23161C27.265 3.71935 28 5.57312 28 7.79292C28 8.8792 27.8192 9.94187 27.4575 10.9809C27.0958 12.02 26.46 13.1594 25.55 14.3992C24.64 15.639 23.415 17.0381 21.875 18.5967C20.335 20.1553 18.3867 22.0091 16.03 24.158L14 26ZM14 22.1744C16.24 20.1435 18.0833 18.4019 19.53 16.9496C20.9767 15.4973 22.12 14.2339 22.96 13.1594C23.8 12.0849 24.3833 11.1285 24.71 10.2902C25.0367 9.45186 25.2 8.61944 25.2 7.79292C25.2 6.37602 24.7333 5.19528 23.8 4.25068C22.8667 3.30609 21.7 2.83379 20.3 2.83379C19.2033 2.83379 18.1883 3.14669 17.255 3.77248C16.3217 4.39827 15.68 5.19528 15.33 6.16349H12.67C12.32 5.19528 11.6783 4.39827 10.745 3.77248C9.81167 3.14669 8.79667 2.83379 7.7 2.83379C6.3 2.83379 5.13333 3.30609 4.2 4.25068C3.26667 5.19528 2.8 6.37602 2.8 7.79292C2.8 8.61944 2.96333 9.45186 3.29 10.2902C3.61667 11.1285 4.2 12.0849 5.04 13.1594C5.88 14.2339 7.02333 15.4973 8.47 16.9496C9.91667 18.4019 11.76 20.1435 14 22.1744Z" fill="#1C1B1F" />
                            </svg>  
                            </div>
                           
                           
                        </div>
                    </div>

                </div>
                    )
                })}
      
               
            </div>
           {producto && <ResumenCompra producto = {producto} />} 


        </>
    )
}

