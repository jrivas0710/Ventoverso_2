import { useEffect, useState } from 'react'
import './Blog.css'
import { Blog } from './InterfaceBlog'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';


export const Blogs = () => {
    const [blog, setBlog] = useState<Blog[]>();

    console.log(blog)

    useEffect(() => {

        fetch(` http://localhost:3000/vento-news`, { // de aqui se traen y se muestran en el home, quien define cuantos se muestran en el home ?
            method: "GET"
        })
            .then(response => {
                if (response.ok) {
                    
                    return response.json() as Promise<Blog[]>
                }
            })
            .then(data => {
                console.log(data)
                setBlog(data);
            })
            .catch(error => console.log(error.message("la peticion no pudo procesarse")))
    }, blog)

    return (

        <>
            <Grid container columns={ { md: 4 }}>

                {blog && blog.map(item => {

                    return (
                        
                        <Card key={item.id} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.imagen}
                                title="ventoNew"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.titulo}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    )



                })}

            </Grid>

        </>
    );



    /*   return (
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
   */
}











