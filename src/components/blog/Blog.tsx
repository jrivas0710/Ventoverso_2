import './Blog.css'
import { Blog } from './InterfaceBlog'


export const Blogs = (props: { dataBlog: Blog[] }) => {


    return (
        <>
        
        <div className='containerVentoNews'>
            <section className='texto-Vento-News'>
                    <h2>Blog Vento News</h2>
                </section>

            <div className='vento-news'>

            

                {props.dataBlog.map(item => {
                    return (
                        <div className='container' id={item.id}>



                            <div className='contenido-pie'>

                                <div className='pie-blog'>
                                    <a href={item.linkDetalle}></a><img src={item.imagenUrl}></img>
                                </div>

                                <div className='titulo-blog'>{item.titulo}</div>

                            </div>
                        </div>



                    )
                })}

            </div>
            </div>
        </>
    )

}









