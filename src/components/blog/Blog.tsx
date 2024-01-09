import { useEffect, useState } from 'react'
import './Blog.css'
import { Blog } from './InterfaceBlog'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';


export const Blogs = () => {
    const [blog, setBlog] = useState<Blog[]>();


    useEffect(() => {

        fetch(` http://localhost:3000/vento-news`, { // de aqui se traen y se muestran en el home, quien define cuantos se muestran en el home ?
            method: "GET"
        })
            .then(response => {
                if (response.ok) {
                    console.log(response)
                    return response.json() as Promise<Blog[]>
                }
            })
            .then(data => {
                console.log(data)
                setBlog(data);
            })
            .catch(error => console.log(error))
    }, [])

    return (

        <>
            <div style={{display:"flex", flexDirection:"column", alignItems: "center", marginTop: "110px"}}>


                <div style={{ marginBottom:"40px"}}><h2>Vento News</h2></div>
                <Grid container columns={{ md: 4 }} sx={{ display: "flex", justifyContent: "space-around" }}>
                    {blog && blog.map(item => {

                        return (


                            <Card key={item.id} sx={{ width: "288px" }}>
                                <CardMedia
                                    sx={{
                                        width: " 288px",
                                        height: " 188px",
                                    }}
                                    image={item.imagen}
                                    title="ventoNew"
                                />
                                <CardContent sx={{ height: "40px" }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '' }}>
                                        Guia 1
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small" sx={{ fontSize: '16px', marginBottom: "10px", color: 'black' }}>{item.titulo}</Button>

                                </CardActions>
                            </Card>

                        )



                    })}

                </Grid>
            </div>
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











