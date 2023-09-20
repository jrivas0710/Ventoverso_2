import './Blog.css'
import { Blog } from '../../App'



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

                {props.dataBlog.map(item => {
                    return (
                        <div className='container'>
                            <section className='texto-Vento-News'>
                                <h2>Vento News</h2>
                            </section>

                            <div className='contenido-pie'>

                            <div className='pie-blog'>
                            <img src={item.imagenUrl}></img>
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









