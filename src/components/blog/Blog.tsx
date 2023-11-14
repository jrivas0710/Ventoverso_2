import { useEffect, useState } from 'react'
import './Blog.css'
import { Blog } from './InterfaceBlog'


export const Blogs = () => {
    const[blog, setBlog] = useState<Blog[]>();


    useEffect(()=>{

        fetch(` http://localhost:3000/blog`, { // de aqui se traen y se muestran en el home, quien define cuantos se muestran en el home ?
            method: "GET"
        })
        .then(response => {
            if (response.ok) {
                return response.json() as Promise<Blog[]>
            }
        })
        .then(data =>{
            setBlog(data);
        })
        .catch(error => console.log(error.message("la peticion no pudo procesarse")))
    })
    
    


    return (
        <>
        
        <div className='containerVentoNews'>
            <section className='texto-Vento-News'>
                    <h2>Blog Vento News</h2>
                </section>

            <div className='vento-news'>

            

                { blog && blog.map(item => {
                    return (
                        <div className='container' id={item.id}>

                            <div className='contenido-pie'>

                                <div className='pie-blog'>
                                    <a href="#"></a><img src={item.titulo}></img>
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











