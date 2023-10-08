import { Category } from '../../interfaces/Category'
import './Categories.css'



export const PlantillaCategoria= (props: { dataProducto: Category[] }) => {

    return (

        <> 
        <div className='containerCategories'>
            {
                props.dataProducto.map(item => {
                    return (

                        <div className='categories'>
                            <div key={item.id} className='imagesCategories'>
                                <a href={item.linkDetalle}><img src={item.imagenUrl} alt={item.nombre} /></a>
                            </div>
                            <div className='namesCategories'>
                                <span>
                                    {item.nombre}
                                </span>
                            </div>
                        </div>

                    )
                })
            }
        </div>
        </>
)
}








