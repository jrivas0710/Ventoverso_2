import { useEffect, useState } from 'react';
import { Category } from '../../interfaces/Category'
import './Categories.css'
import { Link } from 'react-router-dom'



export const PlantillaCategoria = () => {

    const [categoria, setCategoria] = useState<Category[]>();


    useEffect(() => {

        fetch(` http://localhost:3000/categoria`, { // de aqui se traen y se muestran en el home, quien define cuantos se muestran en el home ?
            method: "GET"
        })
            .then(response => {
                if (response.ok) {
                    console.log(response)
                    return response.json() as Promise<Category[]>
                }
            })
            .then(data => {
                
                setCategoria(data);
            })
            .catch(error => console.log(error))
    }, [])


    return (

        <>
            <div className='containerCategories'>
                {categoria &&
                   categoria.map(item => {
                        return (

                            <div key={item.id} className='categories'>
                                <div className='imagesCategories'  >
                                    <Link to={"/d_clarinete"}>
                                        <img src={item.imagenUrl} alt={item.nombre} 
                                        style={{width:"152px", height:"152px"}}/>
                                        </Link>
                                </div>
                                <div className='namesCategories'>

                                    <Link to={"/d_clarinete"}>
                                        <span>
                                            {item.nombre}
                                        </span>
                                    </Link>

                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}








