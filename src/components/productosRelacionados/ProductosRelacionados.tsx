import './ProductosRelacionados.css'
import { Destacado } from '../../interfaces/Destacados'
import { useEffect, useState } from 'react';



export const ProductosRelacionados = () => {

    const [relacionados, setRelacionados] = useState<Destacado[]>();


    useEffect(() => {

        fetch(`http://localhost:3000/productos-relacionados`, {
            method: "GET"
        })
            .then(response => {
                if (response.ok) {
                    console.log(response)
                    return response.json() as Promise<Destacado[]>
                }
            })
            .then(data => {
                setRelacionados(data);
            })
            .catch(error => console.log(error))
    },[])



    return (
        <>


            <div className='productosRelacionados'>
                <h2 className='texto-productos-relacionados'>Productos Relacionados</h2>




                { relacionados && relacionados.map(item => {
                    return (

                        <div key={item.id}>
                            <div className='producto'><img src={item.imagenUrl} alt={item.nombre} /></div>
                            <div className='nombre-precio-ranking'>
                                {item.estrellas}
                                <a href="#"><img src={item.imagenUrl} alt="ranking" className='ranking' /></a>
                                <span className='nombre-producto'>{item.nombre}</span>
                                <span className='precio'>{item.precio}</span>
                            </div>
                        </div>)
                })
                }
            </div>
        </>
    )




}


