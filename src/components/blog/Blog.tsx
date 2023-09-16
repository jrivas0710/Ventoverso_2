import './Blog.css'


export const Blog = () => {


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

//COMPONENTE BLOG Y NOTICIAS


/* interface BlogProps{
    dataBlog: { image: string; text: string }[];
  }


export const Blog:React.FC<BlogProps> = ({ dataBlog}) => {


    return (
        <>

            <div className='vento-news'>

                {dataBlog.map(item => {
                    return (

           <section className='texto-Vento-News'>
           <h2>Vento News</h2>
           </section>
            <div className='pie-blog'>
                <img src={item.imagerUrl}></img>
                <div className='titulo-blog'>{item.titulo}</div>
            </div>


                    )
                })}

            </div>
        </>
    )

}
 */








