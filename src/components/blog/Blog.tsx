import './Blog.css'
import { Blog } from './InterfaceBlog'



/* export const Blogs = () => {


    return (
        <>

            <div className='vento-news'>

                <section className='texto-Vento-News'>
                    <h2>Vento News</h2>
                </section>
                <div className='pie-blog'>
                    <div className='titulo-blog'>Titulo</div>
                </div>

                <section className='texto-Vento-News'>
                    <h2>Vento News</h2>
                </section>
                <div className='pie-blog'>
                    <div className='titulo-blog'>Titulo</div>
                </div>

                <section className='texto-Vento-News'>
                    <h2>Vento News</h2>
                </section>
                <div className='pie-blog'>
                    <div className='titulo-blog'>Titulo</div>
                </div>

                <section className='texto-Vento-News'>
                    <h2>Vento News</h2>
                </section>
                <div className='pie-blog'>
                    <div className='titulo-blog'>Titulo</div>
                </div>

            </div>
        </>
    )

}
 */
//COMPONENTE BLOG Y NOTICIAS




export const Blogs = (props: { dataBlog: Blog[] }) => {


    return (
        <>

            <div className='vento-news'>

                <section className='texto-Vento-News'>
                    <h2>Vento News</h2>
                </section>

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
        </>
    )

}









