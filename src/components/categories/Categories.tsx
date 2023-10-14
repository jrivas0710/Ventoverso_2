import { Category } from '../../interfaces/Category'
import './Categories.css'
import { Link } from 'react-router-dom'



export const PlantillaCategoria = (props: { dataProducto: Category[] }) => {

    return (

        <>
            <div className='containerCategories'>
                {
                    props.dataProducto.map(item => {
                        return (

                            <div className='categories'>
                                <div key={item.id} className='imagesCategories'>
                                <Link to = {"/d_clarinete"}>{item.linkDetalle}<img src={item.imagenUrl} alt={item.nombre} /></Link>
                                </div>
                                <div className='namesCategories'>
                                    <a href="">
                                    <Link to = {"/d_clarinete"}>  
                                   {/*  <span> */}
                                        {item.nombre}
                                    {/* </span> */}
                                    </Link>
                                    </a>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}








