import './ProductosSimilares.css'
import { Destacado } from '../../interfaces/Destacados'
import { useEffect, useState } from 'react';



export const ProductosSimilares = () => {

    
    const [similares, setSimilares] = useState<Destacado[]>();


    useEffect(() => {

        fetch(` http://localhost:3000/productos-similares`, { // de aqui se traen y se muestran en el home, quien define cuantos se muestran en el home ?
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
            <div style={{ textAlign: "center" }}>
                    <h2 >Productos similares</h2>
                </div>
                <div className='productosRelacionados'>
                    {similares && similares.map(item => {
                        return (

                            <div key={item.id} className='cardProducto' style={{ marginLeft:"40p" }} >

                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <img src={item.imagen} alt={item.nombre}
                                        style={{ width: "100px", height: "250px"}}
                                    />
                                </div>
                                <div className='nombre-precio-ranking' style={{ textAlign: "center", paddingLeft:"30px", marginTop:"20px" }}>
                                   <span hidden>{item.estrellas}</span> 
                                    <div style={{ display: "flex", width:"150px", gap:"8px"}}>
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                        <img src="../images/Star.png" alt="ranking" className='ranking' style={{ width: '20px', height: '20px' }} />
                                    </div>
                                    <div style={{  display:"flex", flexDirection:"column", textAlign:"left" }}>
                                        <span hidden>{item.estrellas}</span>
                                        {/* TODO: a donde lleva productos destacados? cual es el link al apretarlos? */}
                                        <span className='nombre-producto'>{item.nombre}</span>
                                        <span>{item.descripcion}</span>
                                        <span className='precio'>${item.precio}</span>
                                    </div>

                                </div>
                            </div>)
                    })
                    }

                </div>

            </div>
        </>)
}

