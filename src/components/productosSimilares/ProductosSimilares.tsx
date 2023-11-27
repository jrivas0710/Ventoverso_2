import './ProductosSimilares.css'
import { Destacado } from '../../interfaces/Destacados'
import { useEffect, useState } from 'react';



export const ProductosSimilares = () => {

    
    const [similares, setSimilares] = useState<Destacado[]>();


    useEffect(() => {

        fetch(` http://localhost:3000/categoria`, { // de aqui se traen y se muestran en el home, quien define cuantos se muestran en el home ?
            method: "GET"
        })
            .then(response => {
                if (response.ok) {
                    console.log(response)
                    return response.json() as Promise<Destacado[]>
                }
            })
            .then(data => {
                
                setSimilares(data);
            })
            .catch(error => console.log(error))
    }, [])





    return (
        <>
            <div className='containerProductosSimilares'>
                <div className='divTextoSimilares'> <h2 >Productos Similares</h2></div>
                <div className='productosSimilares'>





                    { similares && similares.map(item => {
                        return (

                            <div key={item.id}>
                                <div className='producto'><img src={item.imagenUrl} alt={item.nombre} /></div>
                                <div className='nombre-precio-ranking'>
                                  <span hidden>{item.estrellas}</span>  
                                    <a href='#'><img src="images/estrellas.png" alt="ranking" className='ranking' /></a>
                                    <span className='nombre-producto'>{item.nombre}</span>
                                    <span className='precio'>{item.precio}</span>
                                </div>
                            </div>)
                    })
                    }




                </div>

            </div>
        </>)
}

